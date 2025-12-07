/*
  # Create guest visits table

  1. New Tables
    - `guest_visits`
      - `id` (uuid, primary key) - Unique identifier for each guest visit request
      - `name` (text, required) - Guest's full name
      - `email` (text, required) - Guest's email address
      - `phone` (text, required) - Guest's phone number
      - `visit_date` (date, required) - Date they plan to visit
      - `adults_count` (integer, default 1) - Number of adults visiting
      - `kids_count` (integer, default 0) - Number of kids visiting
      - `special_requests` (text, optional) - Any special requests or questions
      - `status` (text, default 'pending') - Status: pending, confirmed, completed
      - `created_at` (timestamptz) - Timestamp of submission
  
  2. Security
    - Enable RLS on `guest_visits` table
    - Add policy allowing anyone to insert (public form submission)
    - No public read access - only church administrators should see submissions
*/

CREATE TABLE IF NOT EXISTS guest_visits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  visit_date date NOT NULL,
  adults_count integer DEFAULT 1,
  kids_count integer DEFAULT 0,
  special_requests text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE guest_visits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit guest visit requests"
  ON guest_visits
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
