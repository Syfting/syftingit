-- Migration: Add first_name, last_name, and role columns to email_signups
-- Date: 2025-09-22

ALTER TABLE email_signups
ADD COLUMN first_name TEXT,
ADD COLUMN last_name TEXT,
ADD COLUMN role TEXT;