-- Create or promote a SUPER ADMIN user for this app
--
-- How to use:
-- 1) In Supabase Dashboard, create a user (Auth > Users > Add) with the email you want.
--    Or ensure a user already exists with that email.
-- 2) Paste this script in the SQL editor, change the variables below, and run.
-- 3) Optional: Uncomment the RLS policy snippets to allow super_admin to bypass RLS.
--
-- This script does NOT try to create an auth user directly (not recommended via SQL).
-- It instead tags the existing auth user with app_metadata.role = 'super_admin' and
-- ensures a matching profile row with role = 'super_admin'.

-- Ensure the profiles table has a role column. Add it if missing.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'profiles' AND column_name = 'role'
  ) THEN
    ALTER TABLE public.profiles
      ADD COLUMN role text NOT NULL DEFAULT 'user',
      ADD CONSTRAINT profiles_role_check CHECK (role IN ('user','admin','super_admin'));
  END IF;
END $$;

-- Configure these values before running
DO $$
DECLARE
  v_email       text := 'snakeyes358@gmail.com';  -- CHANGE ME
  v_first_name  text := 'Super';              -- optional
  v_last_name   text := 'Admin';              -- optional
  v_user_id     uuid;
BEGIN
  -- Lookup the existing Auth user
  SELECT id INTO v_user_id
  FROM auth.users
  WHERE email = v_email
  LIMIT 1;

  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Auth user with email % not found. Create the user in Auth > Users first.', v_email;
  END IF;

  -- Tag user as super_admin in app metadata and confirm email
  UPDATE auth.users
  SET
    raw_app_meta_data = COALESCE(raw_app_meta_data, '{}'::jsonb) || jsonb_build_object('role','super_admin'),
    raw_user_meta_data = COALESCE(raw_user_meta_data, '{}'::jsonb) || jsonb_build_object('first_name', v_first_name, 'last_name', v_last_name),
    email_confirmed_at = COALESCE(email_confirmed_at, NOW()),
    updated_at = NOW()
  WHERE id = v_user_id;

  -- Upsert profile with super_admin role
  INSERT INTO public.profiles (id, email, first_name, last_name, role, created_at, updated_at)
  VALUES (v_user_id, v_email, v_first_name, v_last_name, 'super_admin', NOW(), NOW())
  ON CONFLICT (id) DO UPDATE
    SET role = 'super_admin',
        email = EXCLUDED.email,
        first_name = EXCLUDED.first_name,
        last_name = EXCLUDED.last_name,
        updated_at = NOW();

  RAISE NOTICE 'Super admin ready: % (%).', v_email, v_user_id;
END $$;

-- OPTIONAL: Give super_admin full access bypassing RLS
-- Uncomment and run these if you want super_admin to bypass RLS policies.
-- Note: auth.jwt()->'app_metadata'->>'role' reads the role from the JWT.
--
-- CREATE POLICY "super_admin all on profiles"
--   ON public.profiles FOR ALL
--   USING (COALESCE((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'super_admin')
--   WITH CHECK (COALESCE((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'super_admin');
--
-- CREATE POLICY "super_admin all on education"
--   ON public.education FOR ALL
--   USING (COALESCE((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'super_admin')
--   WITH CHECK (COALESCE((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'super_admin');
--
-- CREATE POLICY "super_admin all on test_scores"
--   ON public.test_scores FOR ALL
--   USING (COALESCE((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'super_admin')
--   WITH CHECK (COALESCE((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'super_admin');
--
-- CREATE POLICY "super_admin all on preferences"
--   ON public.preferences FOR ALL
--   USING (COALESCE((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'super_admin')
--   WITH CHECK (COALESCE((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'super_admin');
--
-- CREATE POLICY "super_admin all on applications"
--   ON public.applications FOR ALL
--   USING (COALESCE((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'super_admin')
--   WITH CHECK (COALESCE((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'super_admin');

