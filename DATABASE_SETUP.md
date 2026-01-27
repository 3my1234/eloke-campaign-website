# Database Setup Guide

## Quick Start

### 1. Install PostgreSQL on Contabo VPS

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### 2. Create Database

```bash
sudo -u postgres psql

# In PostgreSQL prompt:
CREATE DATABASE eloke_campaign;
CREATE USER eloke_user WITH PASSWORD 'your_strong_password';
GRANT ALL PRIVILEGES ON DATABASE eloke_campaign TO eloke_user;
\q
```

### 3. Run Setup Script

```bash
sudo -u postgres psql -d eloke_campaign -f database/setup.sql
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
DB_HOST=your_contabo_vps_ip
DB_PORT=5432
DB_NAME=eloke_campaign
DB_USER=eloke_user
DB_PASSWORD=your_strong_password
DB_SSL=false
```

### 5. Initialize Database Tables

After setting up the database and environment variables, visit:
```
http://localhost:3000/api/init-db
```

Or call it programmatically to create all tables.

## Database Tables

### newsletter_subscriptions
- Stores newsletter sign-ups from the popup modal
- Fields: id, name, email, lga, created_at, updated_at

### volunteers
- Stores volunteer registrations from "Join Us" section
- Fields: id, name, email, phone, lga, status, created_at, updated_at

### supporters
- Stores donation/support information (for future use)
- Fields: id, name, email, phone, amount, currency, payment_method, payment_reference, status, created_at, updated_at

## Testing Locally

1. Start dev server: `npm run dev`
2. Test newsletter: Fill out the popup modal (appears after 3 seconds)
3. Test volunteer form: Go to "Join Us" section and submit form
4. Check database: Connect to PostgreSQL and query tables

## Production Deployment

1. Set environment variables on your hosting platform
2. Ensure database is accessible from your hosting server
3. Run `/api/init-db` once to create tables
4. Monitor database connections and performance
