# Threat Model

## Project Overview

This repository is a pnpm workspace with three main artifacts: a production Express 5 API in `artifacts/api-server`, a production React/Vite portfolio site in `artifacts/portfolio`, and a `artifacts/mockup-sandbox` UI playground that is treated as development-only unless a production route to it is later introduced. The backend is prepared to use PostgreSQL through Drizzle in `lib/db`, and shared OpenAPI-generated client and schema packages live in `lib/api-client-react`, `lib/api-spec`, and `lib/api-zod`.

In the current codebase, the only implemented API route is `GET /api/healthz`, and there are no server-side authentication or authorization checks because there are no protected routes yet. Production traffic is assumed to use platform-managed TLS.

## Assets

- **Application availability** — the public portfolio and API health endpoint must remain reachable and stable.
- **Future API data and database contents** — `lib/db` is wired for direct PostgreSQL access via `DATABASE_URL`; any future route using it would have direct access to application data.
- **Session and bearer tokens if introduced** — the shared client layer supports bearer token attachment, so future authenticated API calls would rely on correct token handling and server-side validation.
- **Environment secrets** — `DATABASE_URL`, future API keys, and any signing secrets must stay server-side and out of logs and client bundles.
- **Reputation and content integrity** — the portfolio is a public-facing site, so injected or tampered content would directly affect visitors and trust.

## Trust Boundaries

- **Browser to API boundary** — requests from public clients to `artifacts/api-server/src/app.ts` cross from untrusted input into backend code.
- **API to database boundary** — any code importing `lib/db/src/index.ts` crosses into privileged PostgreSQL access.
- **Build-time to client-runtime boundary** — `artifacts/portfolio` is statically bundled for users; secrets and server-only configuration must never cross into this bundle.
- **Shared library to application boundary** — `lib/api-client-react` and `lib/api-zod` influence how multiple apps talk to the API, so mistakes here can propagate broadly.
- **Production to dev-only boundary** — `artifacts/mockup-sandbox` and Vite dev-server settings are out of scope unless production wiring makes them reachable.

## Scan Anchors

- **Production entry points:** `artifacts/api-server/src/index.ts`, `artifacts/api-server/src/app.ts`, `artifacts/portfolio/src/main.tsx`, `artifacts/portfolio/src/App.tsx`
- **Highest-risk code areas:** `artifacts/api-server/src/routes/**`, `lib/db/src/**`, `lib/api-client-react/src/custom-fetch.ts`
- **Public surfaces:** current portfolio pages and `GET /api/healthz`
- **Authenticated/admin surfaces:** none currently implemented in production code
- **Dev-only areas usually ignored:** `artifacts/mockup-sandbox/**`, Vite dev/preview-only behavior, generated dist output unless needed for validation

## Threat Categories

### Spoofing

The current production API does not yet implement login or protected routes, but the shared client supports bearer tokens and the server is positioned to grow into authenticated endpoints. When protected routes are added, the API must validate authentication server-side on every request and must not rely on frontend state or token presence alone.

### Tampering

All data crossing from the browser into the Express API must be treated as untrusted. Any future write-capable endpoints must validate request bodies and parameters against explicit schemas and must not trust client-supplied business decisions, identifiers, or URLs without verification.

### Information Disclosure

The main disclosure risks are accidental leakage of secrets into frontend bundles, overbroad API responses once database access is added, and token exposure through logs. The API logger must continue to redact authorization and cookie headers, and server-only environment variables must remain outside client code.

### Denial of Service

The public API surface is currently small, but any future expensive routes, unbounded external fetches, or database-backed endpoints could be abused by unauthenticated callers. Public endpoints must remain lightweight, and future sensitive or resource-intensive routes should enforce timeouts, input bounds, and rate limiting where appropriate.

### Elevation of Privilege

There are no admin or user-role boundaries in the current production code, but future API expansion will create this risk immediately. Any route that reads or mutates protected data must enforce authorization on the server, and all database access must continue to use safe ORM or parameterized query patterns rather than string-built SQL.
