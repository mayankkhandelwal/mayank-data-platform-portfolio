# Enterprise Data Platform Architect - Portfolio

## Overview
A personal portfolio website for an Enterprise Data Platform Architect, showcasing experience building scalable data platforms, lakehouse architectures, and real-time streaming for Fortune 500 companies.

## Recent Changes
- 2026-02-12: Migrated from Lovable to Replit environment
  - Updated vite.config.ts: port 5000, allowedHosts, removed lovable-tagger
  - Removed bun.lockb, using npm instead
  - Set up deployment config (autoscale)

## Project Architecture
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: react-router-dom v6
- **State**: @tanstack/react-query
- **Structure**: Frontend-only (static site)
  - `src/components/` - UI components (Hero, Navbar, Contact, etc.)
  - `src/components/ui/` - shadcn/ui base components
  - `src/pages/` - Page components (Index, NotFound)
  - `src/hooks/` - Custom hooks
  - `src/lib/` - Utilities

## Running the Project
- Workflow "Start application" runs `npm run dev` on port 5000

## User Preferences
- (none recorded yet)
