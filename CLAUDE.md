# CLAUDE.md - AI Cloud Services Project Guide

## Build & Test Commands
- Build: `npm run build` 
- Lint: `npm run lint`
- Test all: `npm test`
- Test single: `npm test -- -t "test name"`
- Type check: `npm run typecheck`

## Code Style Guidelines
- Follow TypeScript conventions with strict typing
- Use ESLint and Prettier for formatting
- Component naming: PascalCase for components, camelCase for functions
- Error handling: Always use try/catch with proper error logging
- Imports: Group by external, internal, then local imports
- Prefer functional components with hooks over class components
- Use async/await over Promises when possible
- Keep functions small and focused on a single responsibility

## Project Structure
- `/src`: Source code
- `/tests`: Test files
- `/docs`: Documentation