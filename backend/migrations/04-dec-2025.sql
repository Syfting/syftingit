-- Migration: Add created_at and updated_at columns to storefronts
-- Date: 2025-12-04

ALTER TABLE storefronts
ADD COLUMN created_at TIMESTAMP DEFAULT NOW() NOT NULL,
ADD COLUMN updated_at TIMESTAMP DEFAULT NOW() NOT NULL;