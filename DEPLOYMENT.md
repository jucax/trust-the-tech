# Trust the Tech - Deployment Guide

## Deploying to Vercel

### Prerequisites
1. Vercel account
2. PostgreSQL database (Vercel Postgres, Supabase, or Railway)
3. Git repository with your code

### Step 1: Database Setup

#### Option A: Vercel Postgres (Recommended)
1. In Vercel dashboard, go to your project
2. Click "Storage" → "Connect Database" → "Postgres"
3. Choose "Create New Database"
4. Select your region (closest to your users)
5. Vercel will automatically set the `DATABASE_URL` environment variable

#### Option B: Supabase (Alternative)
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings → Database
4. Copy the connection string
5. Add as `DATABASE_URL` in Vercel environment variables

#### Option C: Railway
1. Go to [railway.app](https://railway.app)
2. Create new project → "Provision PostgreSQL"
3. Copy connection string
4. Add as `DATABASE_URL` in Vercel environment variables

### Step 2: Environment Variables
In Vercel dashboard, add these environment variables:
- `DATABASE_URL`: Your PostgreSQL connection string (auto-set if using Vercel Postgres)
- `JWT_SECRET`: A secure random string for JWT tokens (generate with: `openssl rand -base64 32`)

### Step 3: Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the monorepo structure
3. The `vercel.json` file will handle routing:
   - `/api/*` routes go to the backend
   - All other routes serve the frontend

### Step 4: Database Migration
After deployment, run Prisma migrations:
```bash
# In Vercel dashboard → Functions → View Function Logs
# Or locally with production DATABASE_URL:
npx prisma migrate deploy
```

### Step 5: Verify Deployment
- Frontend: `https://your-domain.vercel.app`
- Backend API: `https://your-domain.vercel.app/api/auth/login`
- Database: Check Vercel dashboard → Storage → Postgres

### File Structure
```
trust-the-tech/
├── vercel.json          # Vercel configuration
├── backend/             # Express API
│   ├── index.js
│   ├── routes/
│   └── prisma/
└── trust-the-tech/      # React frontend
    ├── src/
    ├── package.json
    └── vite.config.js
```

### Troubleshooting
- If API calls fail, check that environment variables are set
- If database connection fails, verify DATABASE_URL is correct
- Check Vercel function logs for backend errors
- For Vercel Postgres: Check Storage → Postgres → Logs

### Professional Database Comparison

| Service | Free Tier | Pros | Cons |
|---------|-----------|------|------|
| **Vercel Postgres** | 256MB | Seamless integration, auto-backups | Limited free storage |
| **Supabase** | 500MB | Built-in auth, real-time | More complex setup |
| **Railway** | $5/month | Great DX, generous limits | Not completely free |
| **Neon** | 3GB | Serverless, branching | Newer service | 