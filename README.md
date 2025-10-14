# stremio-setup

To install dependencies:

```bash
bun install
```

To run development server:

```bash
bun run docs:dev
```

To run production server:

```bash
bun run docs:build && bun run docs:preview
```

To specify a port, include `--port 25567` e.g. `... docs:preview --port 25567`