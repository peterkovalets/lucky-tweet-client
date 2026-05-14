# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — ESLint over the whole project

No test runner is configured.

## Backend dependency

The client expects an API at the URL set in `VITE_API_URL` (defaults to `http://localhost:8080/api` via the committed `.env`; override per-developer with `.env.local`). The axios instance in `src/services/axios.js` reads it as `import.meta.env.VITE_API_URL`. Auth is cookie-based: the axios instance sets `withCredentials: true`, and `apiAuth.js`/`apiPosts.js` rely on the browser sending the session cookie — there is no token-in-header flow. If the API isn't running, every query will fail; mention this when a feature appears broken.

## Architecture

### Layered structure

- `src/services/` — thin API wrappers around the shared `axios` instance. Mutating calls (`register`, `login`, `createPost`) catch axios errors and rethrow `new Error(error.response.data.error)` so React Query receives a clean message; read calls let errors propagate. Follow this same pattern when adding endpoints.
- `src/features/<domain>/` — feature folders own both UI (forms, list/detail components) and the React Query hooks for that domain (`useUser`, `useLogin`, `usePosts`, `useCreatePost`, etc.). Each hook wraps a `services/` function with `useQuery` or `useMutation` and is the only place the rest of the app talks to the server.
- `src/pages/` — route-level components composed from feature components; kept thin.
- `src/components/ui/` — shadcn/ui primitives **plus** app-specific layout/composite components (`AppLayout`, `Header`, `Footer`, `ProfileDetails`, `DropdownMenuAvatar`, etc.). Not every file here is a generated shadcn primitive.
- `src/lib/utils.js` — only the shadcn `cn()` helper. Other helpers live in `src/utils/`.

### Routing & auth gating

`src/app.jsx` wraps the whole tree in `QueryClientProvider` → `BrowserRouter` → an `AppLayout` route that renders `Header` / `Main` / `Footer` around `<Outlet />`. Two guards control access:

- `ProtectedRoute` (used by `/profile`, `/posts/new`) — reads `useUser()`; while loading shows a placeholder; redirects to `/login` if not authenticated.
- `PublicOnlyRoute` (used by `/login`, `/register`) — redirects authenticated users to `/`.

`useUser` is the single source of truth for auth state and is keyed `['user']` in React Query. After login/register, invalidate `['user']` from the form's `onSuccess` so the guards re-evaluate (see `login-form.jsx` for the pattern).

### Forms

Forms use `react-hook-form` with `Controller` wrapping shadcn `Field` / `FieldLabel` / `FieldError` primitives, and submit through a feature's mutation hook. `add-post-form.jsx` is the reference for forms that combine RHF fields with an external controlled input (the `@uiw/react-md-editor` content is held in local `useState`, not RHF).

### Styling

Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config.js`; theme tokens live in `src/index.css`). shadcn is configured in `components.json` with style `base-nova`, neutral base, JSX (not TSX), lucide icons, and aliases mapped through `@/` (defined in both `vite.config.js` and `jsconfig.json`). Use `cn()` from `@/lib/utils` for class merging.

### Conventions worth matching

- Filenames are kebab-case (`add-post-form.jsx`, `protected-route.jsx`) even for components.
- Components are exported via named `export { Foo }` at the bottom of the file, not default exports.
- ESLint's `no-unused-vars` ignores identifiers matching `^[A-Z_]` — unused capitalized imports (e.g. `React`) won't error.
