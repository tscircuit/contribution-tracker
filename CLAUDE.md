# CLAUDE.md - Contribution Tracker Project Guide

## Commands
- Build: `bun run build`
- Dev server: `bun run dev`
- Format code: `bun run format`
- Check formatting: `bun run format:check`
- Run specific test: `bun test tests/test-file-name.test.ts`
- Test GitHub integration: `bun --env-file=.env scripts/test-github-issues.ts`

## Code Style
- Use Biome for formatting with space indentation
- TypeScript with strict typing, ESNext features
- React with JSX (double quotes for JSX elements)
- Kebab-case for filenames
- ES modules with bundler module resolution
- Use trailing commas, optional semicolons
- Arrow functions with parentheses always
- Use async/await for asynchronous operations
- Prefer const over let, avoid var
- Use TypeScript interfaces/types for all objects 
- Export functions/components with named exports
- Group and organize imports (automated by Biome)