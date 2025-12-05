-- Migration: Add synced_to_mailchimp column to email_signups
-- Date: 2025-09-22

ALTER TABLE email_signups
ADD COLUMN IF NOT EXISTS synced_to_mailchimp BOOLEAN NOT NULL DEFAULT FALSE;