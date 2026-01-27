#!/bin/bash

# Quick Setup Script for Eloke Campaign Database on Contabo VPS
# Run this script on your VPS: bash vps-quick-setup.sh

echo "=========================================="
echo "Eloke Campaign Database Setup"
echo "=========================================="

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "PostgreSQL not found. Installing..."
    sudo apt update
    sudo apt install postgresql postgresql-contrib -y
    echo "PostgreSQL installed!"
else
    echo "PostgreSQL is already installed."
fi

# Start PostgreSQL service
echo "Starting PostgreSQL service..."
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Prompt for database password
echo ""
read -sp "Enter a strong password for database user 'eloke_user': " DB_PASSWORD
echo ""
read -sp "Confirm password: " DB_PASSWORD_CONFIRM
echo ""

if [ "$DB_PASSWORD" != "$DB_PASSWORD_CONFIRM" ]; then
    echo "Passwords do not match. Exiting."
    exit 1
fi

# Create database and user
echo "Creating database and user..."
sudo -u postgres psql <<EOF
-- Create database
CREATE DATABASE eloke_campaign;

-- Create user
CREATE USER eloke_user WITH PASSWORD '$DB_PASSWORD';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE eloke_campaign TO eloke_user;

-- Connect and grant schema privileges
\c eloke_campaign
GRANT ALL ON SCHEMA public TO eloke_user;
\q
EOF

# Create tables
echo "Creating database tables..."
sudo -u postgres psql -d eloke_campaign <<EOF
-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  lga VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create volunteers table
CREATE TABLE IF NOT EXISTS volunteers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  lga VARCHAR(100) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create supporters table
CREATE TABLE IF NOT EXISTS supporters (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(50),
  amount DECIMAL(10, 2),
  currency VARCHAR(10) DEFAULT 'NGN',
  payment_method VARCHAR(50),
  payment_reference VARCHAR(255),
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_volunteers_email ON volunteers(email);
CREATE INDEX IF NOT EXISTS idx_volunteers_lga ON volunteers(lga);
CREATE INDEX IF NOT EXISTS idx_supporters_email ON supporters(email);

-- Create update function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS \$\$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
\$\$ language 'plpgsql';

-- Create triggers
DROP TRIGGER IF EXISTS update_newsletter_updated_at ON newsletter_subscriptions;
CREATE TRIGGER update_newsletter_updated_at BEFORE UPDATE ON newsletter_subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_volunteers_updated_at ON volunteers;
CREATE TRIGGER update_volunteers_updated_at BEFORE UPDATE ON volunteers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_supporters_updated_at ON supporters;
CREATE TRIGGER update_supporters_updated_at BEFORE UPDATE ON supporters
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Grant table permissions
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO eloke_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO eloke_user;
EOF

# Configure PostgreSQL for remote access
echo "Configuring PostgreSQL for remote access..."
POSTGRES_VERSION=$(psql --version | awk '{print $3}' | cut -d. -f1,2)
CONF_FILE="/etc/postgresql/${POSTGRES_VERSION}/main/postgresql.conf"
HBA_FILE="/etc/postgresql/${POSTGRES_VERSION}/main/pg_hba.conf"

# Update postgresql.conf
if [ -f "$CONF_FILE" ]; then
    sudo sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/" "$CONF_FILE"
    echo "Updated postgresql.conf"
fi

# Update pg_hba.conf
if [ -f "$HBA_FILE" ]; then
    if ! grep -q "eloke_campaign" "$HBA_FILE"; then
        echo "host    eloke_campaign    eloke_user    0.0.0.0/0    md5" | sudo tee -a "$HBA_FILE"
        echo "Added entry to pg_hba.conf"
    fi
fi

# Restart PostgreSQL
echo "Restarting PostgreSQL..."
sudo systemctl restart postgresql

# Configure firewall
echo "Configuring firewall..."
if command -v ufw &> /dev/null; then
    sudo ufw allow 5432/tcp
    echo "Firewall rule added for PostgreSQL"
else
    echo "UFW not found. You may need to configure firewall manually."
fi

echo ""
echo "=========================================="
echo "Setup Complete!"
echo "=========================================="
echo ""
echo "Database Details:"
echo "  Host: 62.171.136.64"
echo "  Port: 5432"
echo "  Database: eloke_campaign"
echo "  User: eloke_user"
echo "  Password: [the password you entered]"
echo ""
echo "Add these to Vercel Environment Variables:"
echo "  DB_HOST=62.171.136.64"
echo "  DB_PORT=5432"
echo "  DB_NAME=eloke_campaign"
echo "  DB_USER=eloke_user"
echo "  DB_PASSWORD=[your password]"
echo "  DB_SSL=false"
echo ""
echo "Test connection:"
echo "  psql -h 62.171.136.64 -U eloke_user -d eloke_campaign"
echo ""
