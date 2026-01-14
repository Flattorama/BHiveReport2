# BHive 2025 Annual Report

## Overview

This is an immersive scrollytelling web experience for BHive's 2025 Annual Report, themed "Resilience & Refinement." The application presents organizational impact data through animated, scroll-driven narrative sections featuring metrics, global reach visualization, cohort data, digital growth statistics, and strategic outlook.

The project follows a full-stack architecture with a React frontend and Express backend, using a monorepo structure with shared TypeScript types between client and server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom BHive brand color system (gold, yellow, orange, black, grey)
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: GSAP with ScrollTrigger for scroll-based animations, Framer Motion for component transitions
- **Typography**: Bebas Neue (headlines) and Montserrat (body text)

### Backend Architecture
- **Runtime**: Node.js with Express
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development**: Vite dev server with HMR for frontend, tsx for TypeScript execution
- **Production**: esbuild bundling with optimized dependency bundling

### Design System
The application uses a hexagon-themed design system reflecting BHive's brand identity:
- Hexagonal UI elements and patterns throughout
- Custom CSS variables for brand colors defined in index.css
- Consistent spacing with 80-120px section padding
- Full-viewport sections with smooth scroll transitions

### Project Structure
```
client/           # React frontend application
  src/
    components/   # UI components and section components
    pages/        # Page components (Home, NotFound)
    hooks/        # Custom React hooks
    lib/          # Utilities, data, and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage interface (in-memory)
shared/           # Shared TypeScript schemas and types
```

### Data Flow
- Static report data is defined in `client/src/lib/data.ts`
- Type definitions in `shared/schema.ts` using Zod for validation
- React Query configured for API requests with custom fetch wrapper

## External Dependencies

### Database
- **Drizzle ORM**: Database abstraction layer configured for PostgreSQL
- **PostgreSQL**: Production database (requires DATABASE_URL environment variable)
- **In-Memory Storage**: Development fallback using Map-based storage

### Animation Libraries
- **GSAP + ScrollTrigger**: Scroll-based animation orchestration
- **Framer Motion**: Component-level animations
- **react-countup**: Animated number counters

### UI Framework
- **Shadcn/ui**: Pre-built accessible components
- **Radix UI**: Headless UI primitives (dialogs, tooltips, menus, etc.)
- **Lucide React**: Icon library

### Build Tools
- **Vite**: Frontend bundling and development server
- **esbuild**: Production server bundling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator