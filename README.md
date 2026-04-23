# Hello World HTTP Server

[![CI](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/REPO/actions/workflows/ci.yml)

A minimal Node.js HTTP server that responds with "Hello, World!".

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

The server starts on `http://localhost:3000` by default.

## Configuration

| Variable | Default   | Description       |
|----------|-----------|-------------------|
| `PORT`   | `3000`    | Port to listen on |
| `HOST`   | `0.0.0.0` | Host to bind to   |

## Development

```bash
npm run dev
```

Uses Node.js `--watch` for automatic restarts on file changes (Node 18+).

## Project structure

```
src/
  server.js   # HTTP server entry point
package.json
README.md
.gitignore
```
