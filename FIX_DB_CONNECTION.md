# Fix Database Connection Issue

The error `ECONNREFUSED 62.171.136.64:5432` means Vercel cannot connect to your PostgreSQL database.

## Step 1: Check PostgreSQL Listening Address

On your VPS, run:
```bash
# Use ss instead of netstat (newer Ubuntu)
sudo ss -tlnp | grep 5432

# Or install netstat
sudo apt install net-tools
sudo netstat -tlnp | grep 5432
```

**Expected output:** Should show `0.0.0.0:5432` (listening on all interfaces)
**If it shows:** `127.0.0.1:5432` (only localhost) - that's the problem!

## Step 2: Fix PostgreSQL Configuration

If PostgreSQL is only listening on localhost:

```bash
# Find PostgreSQL version
psql --version

# Edit postgresql.conf (replace XX with your version, e.g., 16)
sudo nano /etc/postgresql/16/main/postgresql.conf
```

Find and change:
```
#listen_addresses = 'localhost'
```
To:
```
listen_addresses = '*'
```

Save (Ctrl+X, Y, Enter)

## Step 3: Verify pg_hba.conf

```bash
sudo nano /etc/postgresql/16/main/pg_hba.conf
```

Make sure you have this line (should already be there from setup):
```
host    eloke_campaign    eloke_user    0.0.0.0/0    md5
```

## Step 4: Restart PostgreSQL

```bash
sudo systemctl restart postgresql
sudo systemctl status postgresql
```

## Step 5: Check Firewall

```bash
# Check firewall status
sudo ufw status

# Make sure port 5432 is open
sudo ufw allow 5432/tcp

# If firewall was inactive, enable it
sudo ufw enable
```

## Step 6: Test Connection from Outside

From your local machine, test if you can connect:
```bash
# This should work from your local machine
psql -h 62.171.136.64 -U eloke_user -d eloke_campaign
```

If this fails, the firewall or PostgreSQL config is still wrong.
