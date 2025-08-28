# Replit.md

## Overview

This is a modern full-stack portfolio website built with React.js and Express.js. The application showcases a developer's personal portfolio with sections for about, projects, skills, experience, and contact functionality. It features a clean, responsive design using Tailwind CSS with shadcn/ui components, dark/light theme support, and a contact form with backend persistence. The project demonstrates modern web development practices with TypeScript, form validation, and a modular component architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React.js with TypeScript for type safety and better development experience
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI components
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Theme System**: Custom theme provider supporting light/dark mode toggle with localStorage persistence

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage**: Neon Database (serverless PostgreSQL) for production, with fallback to in-memory storage for development
- **API Design**: RESTful API endpoints for contact form submission and data retrieval
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation

### Development Setup
- **Build Tool**: Vite for fast development and optimized production builds
- **Development Server**: Express middleware integration with Vite for seamless full-stack development
- **TypeScript**: Configured for both client and server with path aliases for clean imports
- **Code Organization**: Monorepo structure with shared types and schemas between frontend and backend

### Component Architecture
- **UI Components**: Modular shadcn/ui components with consistent styling and accessibility
- **Page Sections**: Organized into discrete components (Hero, About, Projects, Skills, Experience, Contact, Footer)
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe SQL ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and data fetching
- **react-hook-form**: Performance-focused form library with validation
- **@hookform/resolvers**: Zod integration for form validation

### UI and Styling
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Modern icon library

### Development Tools
- **vite**: Next-generation frontend build tool
- **typescript**: Static type checking
- **wouter**: Minimalist routing library
- **zod**: TypeScript-first schema validation
- **date-fns**: Modern date utility library

### Database and Storage
- **drizzle-kit**: Database migration and schema management tool
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)
- **crypto**: Node.js built-in module for UUID generation in development storage