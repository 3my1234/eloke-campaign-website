# Vercel Deployment Guide

## Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Eloke Campaign Website"

# Add your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/eloke-campaign.git

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

## Step 3: Add Environment Variables

In Vercel Dashboard → Your Project → Settings → Environment Variables, add:

```
DB_HOST=62.171.136.64
DB_PORT=5432
DB_NAME=eloke_campaign
DB_USER=eloke_user
DB_PASSWORD=your_database_password_here
DB_SSL=false
```

**Important:** Add these for:
- ✅ Production
- ✅ Preview
- ✅ Development

## Step 4: Initialize Database

After deployment, visit:
```
https://your-domain.vercel.app/api/init-db
```

Or use curl:
```bash
curl https://your-domain.vercel.app/api/init-db
```

This will create all necessary tables.

## Step 5: Test the Deployment

1. Visit your Vercel URL
2. Test newsletter modal (appears after 3 seconds)
3. Test volunteer form in "Join Us" section
4. Check database on VPS to verify data is being saved

## Troubleshooting

### Database Connection Issues

If you get connection errors:
1. Check VPS firewall allows port 5432
2. Verify PostgreSQL is listening on all interfaces
3. Check pg_hba.conf has correct entry
4. Verify environment variables in Vercel are correct

### Test Connection from VPS

```bash
# On your VPS
psql -h localhost -U eloke_user -d eloke_campaign
```

### Check PostgreSQL Logs

```bash
sudo tail -f /var/log/postgresql/postgresql-*-main.log
```
