# Database Setup Instructions

## For Contabo VPS

### 1. Install PostgreSQL (if not already installed)

```bash
# On Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### 2. Create Database and User

```bash
# Switch to postgres user
sudo -u postgres psql

# Create database
CREATE DATABASE eloke_campaign;

# Create user (replace 'your_password' with a strong password)
CREATE USER eloke_user WITH PASSWORD 'your_strong_password_here';

# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE eloke_campaign TO eloke_user;

# Exit psql
\q
```

### 3. Run Setup Script

```bash
# Connect to the database
sudo -u postgres psql -d eloke_campaign -f database/setup.sql

# Or manually copy and paste the SQL from setup.sql into psql
```

### 4. Configure Firewall (if needed)

```bash
# Allow PostgreSQL connections (adjust port if different)
sudo ufw allow 5432/tcp

# For remote access, edit postgresql.conf and pg_hba.conf
# Location: /etc/postgresql/[version]/main/
```

### 5. Environment Variables

Add these to your `.env.local` file (or production environment):

```env
DB_HOST=your_contabo_vps_ip
DB_PORT=5432
DB_NAME=eloke_campaign
DB_USER=eloke_user
DB_PASSWORD=your_strong_password_here
DB_SSL=false  # Set to true if using SSL connection
```

### 6. Test Connection

You can test the connection by running the initialization function:

```typescript
// In a test script or API route
import { initDatabase } from "@/lib/db";

await initDatabase();
```

## Database Schema

### Tables Created:

1. **newsletter_subscriptions** - Stores newsletter sign-ups
2. **volunteers** - Stores volunteer registrations
3. **supporters** - Stores donation/support information

### Security Notes:

- Use strong passwords
- Consider using SSL for remote connections
- Restrict database access to only your application server
- Regularly backup your database
- Keep PostgreSQL updated

## Backup Commands

```bash
# Create backup
pg_dump -U eloke_user -d eloke_campaign > backup_$(date +%Y%m%d).sql

# Restore backup
psql -U eloke_user -d eloke_campaign < backup_20250127.sql
```
