# CLAUDE.md - Project Guide for Claude Code

## Project Structure

This is a monorepo with a React frontend and .NET 9 API backend.

```
ui/                     # React + Vite + Tailwind CSS frontend
  index.html            # Entry point (loads main.jsx)
  main.jsx              # React root — renders Header, ContactForm, Footer
  components/           # React components (Header.jsx, ContactForm.jsx, Footer.jsx)
  index.css             # Tailwind CSS imports
  vite.config.js        # Vite build config
  package.json          # Frontend dependencies

api/                    # .NET 9 minimal API backend
  Api.csproj            # Web API project
  Program.cs            # API entry point (/health, /api/weatherforecast)
  Api.Tests/            # xUnit integration tests
  Api.sln               # Solution file (includes Api + Api.Tests)
```

## Important Rules

1. **Frontend entry point is `ui/main.jsx`** — this is what `index.html` loads. Do NOT create or edit `main.tsx`, `App.tsx`, `App.jsx`, or files in `ui/pages/`. They do not exist and are not used.

2. **Do NOT create test files in Python, Go, or other languages.** This is a JavaScript/TypeScript + C# project. Frontend tests use the testing framework defined in `ui/package.json`. Backend tests use xUnit in `api/Api.Tests/`.

3. **Do NOT create files in `tests/` at the repo root.** That directory does not exist and should not be created.

4. **Do NOT modify**: `.github/`, `.gitignore`, `CLAUDE.md`, infrastructure or config files at the repo root.

5. **Styling**: Use Tailwind CSS utility classes only. No custom CSS files.

6. **Frontend components** live in `ui/components/`. Follow existing `.jsx` naming convention.

7. **Backend endpoints** go in `api/Program.cs` (minimal API pattern). Add corresponding tests in `api/Api.Tests/`.

## Build & Verify

```bash
# Frontend
npm --prefix ui run build

# Backend
dotnet build api/Api.sln
dotnet test api/Api.sln
```
