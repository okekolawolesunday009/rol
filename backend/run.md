
# Backend Setup and Execution Guide

This guide provides step-by-step instructions for setting up and running the backend for the RCCG LP17 HQ church website using Supabase as the backend-as-a-service platform.

## Prerequisites

Before setting up the backend, ensure you have the following:

- **Supabase Account** - Sign up at [supabase.com](https://supabase.com/)
- **Node.js** (version 18 or higher) - For running the frontend and any local scripts
- **npm** (comes with Node.js)

## Supabase Setup

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com/) and sign in
2. Click "New Project"
3. Fill in project details:
   - Name: `rccg-lp17-backend`
   - Database Password: Choose a strong password
   - Region: Select closest to your users
4. Click "Create new project"
5. Wait for the project to be fully initialized (may take a few minutes)

### 2. Get Project Credentials

Once your project is ready:

1. Go to Settings → API
2. Note down your project URL and anon/public key
3. For admin operations, you'll also need the service_role key (keep this secret)

### 3. Database Schema Setup

Create the following tables in your Supabase dashboard (SQL Editor):

#### Audio Sermons Table
```sql
CREATE TABLE audio_sermons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  speaker TEXT NOT NULL,
  audio_url TEXT NOT NULL,
  duration TEXT,
  date DATE,
  description TEXT,
  series TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE audio_sermons ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Public read access for audio_sermons" ON audio_sermons
  FOR SELECT USING (true);

-- Create policy for authenticated users to manage (admin only)
CREATE POLICY "Admin full access for audio_sermons" ON audio_sermons
  FOR ALL USING (auth.role() = 'authenticated');
```

#### Video Sermons Table
```sql
CREATE TABLE video_sermons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  speaker TEXT,
  video_url TEXT NOT NULL,
  thumbnail TEXT,
  duration TEXT,
  date DATE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE video_sermons ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Public read access for video_sermons" ON video_sermons
  FOR SELECT USING (true);

-- Create policy for authenticated users to manage
CREATE POLICY "Admin full access for video_sermons" ON video_sermons
  FOR ALL USING (auth.role() = 'authenticated');
```

#### Events Table
```sql
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT NOT NULL, -- Day number e.g. "14"
  month TEXT NOT NULL, -- e.g. "MARCH"
  time TEXT NOT NULL, -- e.g. "9:00 AM"
  location TEXT NOT NULL, -- e.g. "Main Auditorium"
  description TEXT,
  cta_label TEXT, -- e.g. "Register"
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Public read access for events" ON events
  FOR SELECT USING (true);

-- Create policy for authenticated users to manage
CREATE POLICY "Admin full access for events" ON events
  FOR ALL USING (auth.role() = 'authenticated');
```

### 4. Authentication Setup

1. Go to Authentication → Settings
2. Configure your site URL and redirect URLs for your frontend
3. Optionally, enable email confirmations

### 5. Storage Setup (Optional)

If you need to store audio/video files:

1. Go to Storage
2. Create buckets for `audio-sermons` and `video-sermons`
3. Set up appropriate policies for public access to files

## Frontend Integration

### Environment Variables

Create a `.env.local` file in your frontend directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase Client Setup

Install Supabase client in your frontend:

```bash
npm install @supabase/supabase-js
```

Create a `supabaseClient.ts` file:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
```

### API Usage Examples

#### Fetch Audio Sermons
```typescript
import { supabase } from './supabaseClient'

const { data: sermons, error } = await supabase
  .from('audio_sermons')
  .select('*')
  .order('date', { ascending: false })
```

#### Admin: Add Audio Sermon
```typescript
const { data, error } = await supabase
  .from('audio_sermons')
  .insert([
    {
      title: 'New Sermon',
      speaker: 'Pastor Name',
      audio_url: 'https://...',
      // ... other fields
    }
  ])
```

#### Authentication
```typescript
// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'admin@example.com',
  password: 'password'
})

// Sign out
await supabase.auth.signOut()
```

## Admin Panel Setup

For the admin functionality, ensure users are authenticated before allowing CRUD operations.

Update your `useAuth` hook to use Supabase auth:

```typescript
import { supabase } from '../supabaseClient'

export function useAuth() {
  // Implement auth state management with Supabase
}
```

## Data Migration

To migrate existing static data to Supabase:

1. Go to Table Editor in Supabase dashboard
2. Manually add records or use the SQL editor to insert data
3. Alternatively, create a migration script using the Supabase client

## Deployment

### Frontend Deployment

Your frontend can be deployed to any static hosting service (Vercel, Netlify, etc.) since Supabase handles the backend.

### Environment Variables in Production

Set environment variables in your hosting platform:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Monitoring and Maintenance

### Supabase Dashboard

- Monitor database performance
- View API usage
- Check authentication logs
- Manage storage

### Backups

Supabase automatically handles backups. For additional security:
- Export data regularly
- Set up database webhooks for critical operations

## Security Best Practices

- Never expose service_role key in frontend
- Use Row Level Security (RLS) policies
- Validate all inputs on the client side
- Implement proper authentication flows
- Regularly rotate API keys if compromised

## Troubleshooting

### Common Issues

1. **CORS errors**: Check your site URL in Supabase Auth settings
2. **RLS blocking queries**: Verify your policies allow the operations
3. **Auth not working**: Ensure redirect URLs are configured correctly
4. **Slow queries**: Add indexes to frequently queried columns

### Support

- Supabase Documentation: [supabase.com/docs](https://supabase.com/docs)
- Community Forum: [supabase.com/community](https://supabase.com/community)
- GitHub Issues: [github.com/supabase/supabase](https://github.com/supabase/supabase)

## Cost Considerations

Supabase has a generous free tier:
- 500MB database
- 50MB file storage
- 50,000 monthly active users

Monitor usage in the dashboard and upgrade as needed.