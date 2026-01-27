# Step-by-Step Vercel Deployment Guide

## Step 1: Initialize Git and Push to GitHub

### On your local machine (PowerShell):

```powershell
cd C:\Users\EMMA\Desktop\election

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Eloke Campaign Website"

# Create a new repository on GitHub first, then:
# Replace YOUR_USERNAME and REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 2: Import to Vercel

1. Go to https://vercel.com/3my1234s-projects
2. Click **"Add New Project"** or **"Import Project"**
3. Select **"Import Git Repository"**
4. Choose your GitHub repository (the one you just pushed)
5. Click **"Import"**

## Step 3: Configure Project Settings

Vercel should auto-detect Next.js, but verify:

- **Framework Preset:** Next.js
- **Root Directory:** `./` (leave as default)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

**DO NOT CLICK DEPLOY YET** - We need to add environment variables first!

## Step 4: Add Environment Variables

Before deploying, add your database credentials:

1. In the project setup page, look for **"Environment Variables"** section
2. Click **"Add"** for each variable below:

```
DB_HOST=62.171.136.64
DB_PORT=5432
DB_NAME=eloke_campaign
DB_USER=eloke_user
DB_PASSWORD=[your database password]
DB_SSL=false
```

**Important:** 
- Add these for **Production**, **Preview**, AND **Development**
- Make sure DB_PASSWORD matches the password you set on your VPS

## Step 5: Deploy

1. After adding all environment variables, click **"Deploy"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Once deployed, you'll get a URL like: `https://your-project.vercel.app`

## Step 6: Initialize Database (Optional)

After first deployment, visit:
```
https://your-project.vercel.app/api/init-db
```

This ensures all tables are properly set up (they should already exist, but this is a safety check).

## Step 7: Test Your Site

1. Visit your Vercel URL
2. Test the newsletter modal (appears after 3 seconds)
3. Test the volunteer form in "Join Us" section
4. Check your VPS database to see submissions:

```bash
# On your VPS
psql -h localhost -U eloke_user -d eloke_campaign -c "SELECT * FROM newsletter_subscriptions ORDER BY created_at DESC LIMIT 5;"
```

## Troubleshooting

### If build fails:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Check for TypeScript errors

### If database connection fails:
- Verify environment variables are correct
- Check VPS firewall allows connections from Vercel IPs
- Test connection from VPS: `psql -h localhost -U eloke_user -d eloke_campaign`

### If forms don't submit:
- Check browser console for errors
- Verify API routes are accessible: `https://your-project.vercel.app/api/newsletter`
- Check Vercel function logs
