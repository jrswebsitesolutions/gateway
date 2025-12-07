/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text, required) - Name of the person submitting
      - `email` (text, required) - Email address for follow-up
      - `phone` (text, optional) - Phone number if provided
      - `message_type` (text, required) - Type of message: 'question', 'prayer_request', 'get_connected'
      - `message` (text, required) - The actual message content
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text, default 'new') - Status of the submission: 'new', 'in_progress', 'completed'
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy allowing anyone to insert (public form submission)
    - No public read access - only church administrators should see submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message_type text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
