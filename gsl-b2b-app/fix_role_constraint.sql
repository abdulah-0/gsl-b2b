-- 1. Drop the existing check constraint FIRST to allow updates
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_role_check;

-- 2. Update any existing rows that don't match the new constraint
-- We set them to 'student' as a safe default
UPDATE profiles 
SET role = 'student' 
WHERE role NOT IN ('student', 'agent', 'institution') OR role IS NULL;

-- 3. Add the correct check constraint allowing 'student', 'agent', and 'institution'
ALTER TABLE profiles ADD CONSTRAINT profiles_role_check 
  CHECK (role IN ('student', 'agent', 'institution'));

-- Grant permissions just in case
GRANT ALL ON profiles TO authenticated;
GRANT ALL ON profiles TO service_role;
