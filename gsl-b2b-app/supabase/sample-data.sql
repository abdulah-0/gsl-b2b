-- Sample Data for GSL B2B Education Platform
-- Run this AFTER running schema.sql

-- Insert Sample Programs
INSERT INTO programs (title, institution, country, duration, test_requirements, application_fee, description) VALUES
('Master of Business Administration', 'Harvard Business School', 'United States', '2 years', 'GMAT: 700+, TOEFL: 100+', 250.00, 'World-renowned MBA program focusing on leadership and innovation.'),
('Master of Science in Computer Science', 'Stanford University', 'United States', '2 years', 'GRE: 320+, TOEFL: 100+', 125.00, 'Advanced computer science program with specializations in AI and Machine Learning.'),
('Master of Engineering', 'University of Cambridge', 'United Kingdom', '1 year', 'IELTS: 7.5+', 100.00, 'Intensive engineering program with focus on practical applications.'),
('Bachelor of Science in Data Science', 'MIT', 'United States', '4 years', 'SAT: 1500+, TOEFL: 100+', 75.00, 'Undergraduate program combining statistics, computer science, and domain expertise.'),
('Master of Public Health', 'Johns Hopkins University', 'United States', '2 years', 'GRE: 310+, TOEFL: 90+', 100.00, 'Comprehensive public health program with global health focus.'),
('MBA in Finance', 'London Business School', 'United Kingdom', '21 months', 'GMAT: 680+, IELTS: 7.0+', 200.00, 'Finance-focused MBA with strong industry connections.'),
('Master of Science in Artificial Intelligence', 'University of Toronto', 'Canada', '2 years', 'GRE: 315+, IELTS: 7.0+', 150.00, 'Cutting-edge AI program with research opportunities.'),
('Bachelor of Arts in Economics', 'Oxford University', 'United Kingdom', '3 years', 'IELTS: 7.5+', 50.00, 'Prestigious economics program with tutorial system.'),
('Master of Science in Biotechnology', 'ETH Zurich', 'Switzerland', '1.5 years', 'GRE: 310+, TOEFL: 95+', 120.00, 'Research-intensive biotechnology program.'),
('Master of Design', 'Royal College of Art', 'United Kingdom', '2 years', 'IELTS: 6.5+', 80.00, 'Creative design program with industry partnerships.'),
('PhD in Physics', 'Caltech', 'United States', '5-6 years', 'GRE: 325+, TOEFL: 100+', 90.00, 'Doctoral program in theoretical and experimental physics.'),
('Master of Laws (LLM)', 'Yale Law School', 'United States', '1 year', 'TOEFL: 100+', 85.00, 'Advanced legal studies program for international students.'),
('Master of Science in Environmental Science', 'University of Melbourne', 'Australia', '2 years', 'IELTS: 6.5+', 100.00, 'Environmental science program with field research opportunities.'),
('Bachelor of Engineering in Mechanical Engineering', 'National University of Singapore', 'Singapore', '4 years', 'SAT: 1400+, IELTS: 6.5+', 60.00, 'Comprehensive mechanical engineering program.'),
('Master of Architecture', 'TU Delft', 'Netherlands', '2 years', 'IELTS: 7.0+', 100.00, 'Innovative architecture program with sustainable design focus.');

-- Insert Sample Alerts
-- Note: You'll need to replace 'USER_ID_HERE' with actual user IDs after users sign up
-- For now, these are templates

-- Sample alert template (uncomment and update user_id after creating users)
-- INSERT INTO alerts (profile_id, title, description) VALUES
-- ('USER_ID_HERE', 'Application Deadline Approaching', 'Your application for MBA at Harvard Business School is due in 7 days.'),
-- ('USER_ID_HERE', 'New Program Match', 'We found 3 new programs matching your preferences.'),
-- ('USER_ID_HERE', 'Document Required', 'Please upload your transcript for Stanford University application.');

-- Insert Sample Events
INSERT INTO events (title, description, event_date) VALUES
('Virtual University Fair', 'Join us for a virtual fair featuring 50+ universities from around the world.', '2025-12-15 14:00:00'),
('IELTS Preparation Workshop', 'Free workshop covering IELTS test strategies and tips.', '2025-12-10 10:00:00'),
('Study Abroad Webinar: USA', 'Learn about studying in the USA, visa process, and scholarship opportunities.', '2025-12-20 16:00:00'),
('Meet & Greet with Alumni', 'Connect with alumni from top universities and learn about their experiences.', '2025-12-18 15:00:00'),
('Scholarship Application Workshop', 'Get expert guidance on writing scholarship essays and applications.', '2025-12-22 11:00:00'),
('Career Fair for International Students', 'Explore career opportunities with companies hiring international graduates.', '2026-01-05 09:00:00'),
('GMAT Preparation Bootcamp', 'Intensive 2-day GMAT preparation bootcamp with practice tests.', '2025-12-28 09:00:00'),
('Study in UK Information Session', 'Everything you need to know about studying in the United Kingdom.', '2026-01-08 14:00:00');

-- Success message
SELECT 'Sample data inserted successfully!' as message;
SELECT COUNT(*) as total_programs FROM programs;
SELECT COUNT(*) as total_events FROM events;

