# Hello World HTTP Server

[![CI](https://github.com/JoshDanielWalker/hello-world-server/actions/workflows/ci.yml/badge.svg)](https://github.com/JoshDanielWalker/hello-world-server/actions/workflows/ci.yml)

A minimal Node.js HTTP server that responds with "Hello, World!".

## Production

**Live URL:** https://hello-world-server-wr2y.onrender.com

Deployed on [Render](https://render.com) with automatic HTTPS. Auto-deploys on every push to `main`.

## Requirements

- Node.js 18 or higher

## Setup

```bash
# No dependencies to install — uses Node.js built-ins only
```

## Running the server

```bash
npm start
```

The server starts on `http://localhost:8080` by default.

## Configuration

| Variable | Default   | Description       |
|----------|-----------|-------------------|
| `PORT`   | `8080`    | Port to listen on |
| `HOST`   | `0.0.0.0` | Host to bind to   |

## Development

```bash
npm run dev
```

Uses Node.js `--watch` for automatic restarts on file changes (Node 18+).

## Deployment

This project deploys to [Render](https://render.com) using `render.yaml` (Infrastructure as Code).

### First-time setup

1. Push this repo to GitHub.
2. Sign in to [Render](https://render.com) and create a new **Blueprint** instance.
3. Connect your GitHub repo — Render reads `render.yaml` and provisions the service automatically.
4. HTTPS is configured automatically via Let's Encrypt.

Subsequent pushes to `main` trigger automatic deploys. No secrets or tokens required for basic deployment.

### Docker (local or self-hosted)

```bash
docker build -t hello-world-server .
docker run -p 8080:8080 hello-world-server
```

## Tests

```bash
npm test
```

Requires ≥80% line/branch/function/statement coverage.

## Project structure

```
src/
  server.js        # HTTP server entry point
  server.test.js   # Jest tests
Dockerfile         # Container image
render.yaml        # Render deployment config
package.json
README.md
.gitignore
```
