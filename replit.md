# AURA - AI Personal Stylist Platform

## Overview

AURA is a luxury fashion technology platform that serves as an AI-powered personal stylist. The application is designed as a waitlist landing page showcasing future capabilities including AI outfit curation, virtual wardrobe management, and personalized styling recommendations. The platform emphasizes a premium, futuristic aesthetic with a focus on user experience and visual presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (minimal routing needs)
- TanStack Query (React Query) for server state management and API communication
- Tailwind CSS v4 with custom design tokens for styling

**UI Component System**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component library (New York style variant) for pre-built, customizable UI components
- Custom theme system with luxury color palette (deep blacks, charcoal, silver accents)
- Lucide React for consistent iconography
- Custom fonts: Outfit and Syncopate from Google Fonts

**State Management**
- React Query handles all server state (waitlist submissions, count fetching)
- Local component state for form inputs and UI interactions
- Toast notifications for user feedback on actions

**Design Philosophy**
- Mobile-first responsive design with breakpoint-aware components
- Dark theme as default with luxury aesthetic (black/charcoal/silver color scheme)
- Emphasis on visual hierarchy and premium feel
- Custom CSS variables for consistent theming across components

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API endpoints
- Dual-mode setup: development (with Vite middleware) and production (static serving)
- Custom logging middleware for request/response tracking
- JSON request body parsing with raw body preservation for webhook support

**API Design**
- RESTful endpoints under `/api` prefix
- POST `/api/waitlist` - Submit waitlist entry with validation
- GET `/api/waitlist/count` - Retrieve current waitlist count
- Comprehensive error handling with appropriate HTTP status codes
- Request/response logging for debugging and monitoring

**Development vs Production**
- Development: Vite dev server integrated as Express middleware with HMR
- Production: Pre-built static assets served from `dist/public`
- Environment-aware configuration via `NODE_ENV`
- Separate entry points (`index-dev.ts` and `index-prod.ts`)

### Data Layer

**Database**
- PostgreSQL via Neon serverless database
- Drizzle ORM for type-safe database operations and schema management
- Connection pooling via `@neondatabase/serverless` with WebSocket support

**Schema Design**
- `waitlist` table: Stores user information (id, name, email, createdAt)
- UUID primary keys using PostgreSQL's `gen_random_uuid()`
- Unique constraint on email to prevent duplicate entries
- Timestamps for tracking entry creation

**Data Validation**
- Zod schemas derived from Drizzle table definitions using `drizzle-zod`
- Runtime validation of API inputs before database operations
- Type safety from database to frontend via shared schema types

**Storage Layer**
- Abstracted storage interface (`IStorage`) for potential future implementations
- `DbStorage` class implements direct database operations
- Separation of concerns: routes handle HTTP, storage handles data

### External Dependencies

**Email Service**
- Resend API for transactional email delivery
- Replit Connectors integration for credential management
- Environment-aware authentication (REPL_IDENTITY for development, WEB_REPL_RENEWAL for production)
- Non-blocking email sending to prevent API delays
- HTML email templates for waitlist confirmation

**Development Tools**
- Replit-specific plugins for enhanced development experience:
  - Runtime error overlay for debugging
  - Cartographer for code navigation
  - Development banner for environment awareness
- Only loaded in development mode on Replit environment

**Asset Management**
- Custom video and image assets stored in `attached_assets` directory
- Vite alias (`@assets`) for convenient asset importing
- Static media for hero sections and feature showcases

**Build Pipeline**
- Client build: Vite bundles React application to `dist/public`
- Server build: esbuild bundles Express server to `dist/index.js`
- ESM module format throughout (package.json specifies "type": "module")
- Separate build command combines both client and server builds

**Database Migrations**
- Drizzle Kit for schema migrations stored in `migrations` directory
- Push-based schema updates via `db:push` script for development
- Schema source: `shared/schema.ts` ensures type consistency