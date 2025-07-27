# Quick Supabase Setup for Trust the Tech

## Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub
4. Click "New Project"
5. Choose organization
6. Enter project name: `trust-the-tech`
7. Enter database password (save this!)
8. Choose region (closest to your users)
9. Click "Create new project"

## Step 2: Get Database URL
1. Wait for project to finish setting up (2-3 minutes)
2. Go to Settings → Database
3. Copy the "Connection string" (URI format)
4. It looks like: `postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres`

## Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. In environment variables, add:
   - `DATABASE_URL`: Paste your Supabase connection string
   - `JWT_SECRET`: Generate with `openssl rand -base64 32`
4. Deploy!

## Step 4: Run Database Migrations
After deployment, run:
```bash
# In Vercel dashboard → Functions → View Function Logs
npx prisma migrate deploy
```

## Step 5: Verify
- Frontend: `https://your-domain.vercel.app`
- Database: Check Supabase dashboard → Table Editor

## Benefits of Supabase
- ✅ 500MB free database
- ✅ Built-in authentication (can replace JWT later)
- ✅ Real-time subscriptions
- ✅ Row Level Security
- ✅ Auto-generated API 