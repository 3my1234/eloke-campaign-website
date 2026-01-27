# VPS Database Setup Guide

## Step-by-Step Commands for Contabo VPS

### 1. Check if PostgreSQL is installed
```bash
which psql
# or
psql --version
```

If not installed, install it:
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib -y
```

### 2. Start PostgreSQL service
```bash
sudo systemctl start postgresql
sudo systemctl enable postgresql
sudo systemctl status postgresql
```

### 3. Create Database and User
```bash
sudo -u postgres psql
```

Then in PostgreSQL prompt:
```sql
-- Create database
CREATE DATABASE eloke_campaign;

-- Create user with password (replace 'your_strong_password' with actual password)
CREATE USER eloke_user WITH PASSWORD 'your_strong_password_here';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE eloke_campaign TO eloke_user;

-- Connect to the database
\c eloke_campaign

-- Grant schema privileges
GRANT ALL ON SCHEMA public TO eloke_user;

-- Exit
\q
```

### 4. Configure PostgreSQL for Remote Access (if needed)

Edit postgresql.conf:
```bash
sudo nano /etc/postgresql/*/main/postgresql.conf
```

Find and uncomment/modify:
```
listen_addresses = '*'
```

Edit pg_hba.conf:
```bash
sudo nano /etc/postgresql/*/main/pg_hba.conf
```

Add this line (replace with your Vercel IP ranges or use password auth):
```
host    eloke_campaign    eloke_user    0.0.0.0/0    md5
```

Restart PostgreSQL:
```bash
sudo systemctl restart postgresql
```

### 5. Configure Firewall
```bash
# Allow PostgreSQL port
sudo ufw allow 5432/tcp

# Check firewall status
sudo ufw status
```

### 6. Create Tables
```bash
# Copy the setup.sql file to your VPS first, then:
sudo -u postgres psql -d eloke_campaign -f /path/to/setup.sql
```

Or manually create tables using the SQL in database/setup.sql

### 7. Test Connection
```bash
psql -h localhost -U eloke_user -d eloke_campaign
```

### 8. Vercel Environment Variables

In Vercel dashboard, add these environment variables:
```
DB_HOST=62.171.136.64
DB_PORT=5432
DB_NAME=eloke_campaign
DB_USER=eloke_user
DB_PASSWORD=your_strong_password_here
DB_SSL=false
```

### Security Notes:
- Use a strong password
- Consider using SSL for production
- Restrict access to specific IPs if possible
- Keep PostgreSQL updated
- Regular backups recommended
