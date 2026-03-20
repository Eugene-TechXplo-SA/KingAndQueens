/*
  # Authentication and User Profiles Setup

  ## Overview
  This migration sets up the core authentication infrastructure for the Kings and Queens loyalty platform.

  ## 1. New Tables
    
  ### `user_profiles`
  Extended user profile information linked to Supabase auth.users
  - `id` (uuid, primary key, references auth.users)
  - `email` (text, not null)
  - `role` (text, not null, default 'user') - Either 'user' or 'admin'
  - `status` (text, not null, default 'active') - User account status: 'active', 'banned', 'withdrawn'
  - `rank` (text) - User rank for loyalty rewards (King, Queen, etc.)
  - `kyc_status` (text, not null, default 'pending') - KYC verification status: 'pending', 'approved', 'rejected'
  - `wallet_address` (text) - Linked crypto wallet address
  - `created_at` (timestamptz, default now())
  - `updated_at` (timestamptz, default now())

  ## 2. Security
  
  ### RLS Policies for `user_profiles`
  - Users can read their own profile
  - Users can update specific fields of their own profile (wallet_address only)
  - Admins can read all profiles
  - Admins can update all profile fields
  - New profiles are automatically created via trigger when auth.users record is created

  ## 3. Triggers
  - Auto-create profile when new user signs up
  - Auto-update updated_at timestamp

  ## 4. Functions
  - `is_admin()` - Helper function to check if current user is admin
  - `handle_new_user()` - Trigger function to create profile on signup

  ## Notes
  - Email confirmation is disabled by default in Supabase
  - Admin role must be manually assigned via direct database update
  - This follows the role model defined in docs/specs/08_roles_permissions.md
*/

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  role text NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'banned', 'withdrawn')),
  rank text CHECK (rank IN ('king', 'queen', 'jack', 'soldier', NULL)),
  kyc_status text NOT NULL DEFAULT 'pending' CHECK (kyc_status IN ('pending', 'approved', 'rejected')),
  wallet_address text,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);
CREATE INDEX IF NOT EXISTS idx_user_profiles_role ON user_profiles(role);
CREATE INDEX IF NOT EXISTS idx_user_profiles_status ON user_profiles(status);

-- Helper function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_profiles
    WHERE id = auth.uid()
    AND role = 'admin'
    AND status = 'active'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to automatically create profile when user signs up
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO user_profiles (id, email, role, status)
  VALUES (
    NEW.id,
    NEW.email,
    'user',
    'active'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_user_profiles_updated_at ON user_profiles;
CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own profile
CREATE POLICY "Users can read own profile"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Policy: Admins can read all profiles
CREATE POLICY "Admins can read all profiles"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (is_admin());

-- Policy: Users can update their wallet address only
CREATE POLICY "Users can update own wallet"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Policy: Admins can update all profile fields
CREATE POLICY "Admins can update all profiles"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- Policy: Admins can insert profiles (for admin user creation)
CREATE POLICY "Admins can insert profiles"
  ON user_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

-- Policy: System can insert profiles (via trigger)
CREATE POLICY "System can insert profiles"
  ON user_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);