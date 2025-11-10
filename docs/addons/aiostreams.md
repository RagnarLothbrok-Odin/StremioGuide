---
title: AIOStreams Addon
description: The main hub and core addon for your Stremio setup
---

# AIOStreams Addon

AIOStreams is the core hub of this setup. It aggregates sources, integrates your debrid provider, manages catalogs, and centralizes configuration - giving you a powerful experience through a single addon.

:::: tip Core Addon
One addon, many capabilities: discovery, streaming, debrid integration, search, formatting, and more.
::::

## Choose an Instance
Select which AIOStreams instance to use. Some are more stable, others get updates first.

- **Official** (creator‑hosted): [aiostreams.elfhosted.com](https://aiostreams.elfhosted.com) - Stable version *Torrentio disabled**
- **Community**: [aiostreamsfortheweak.nhyira.dev](https://aiostreamsfortheweak.nhyira.dev) — Stable version
- **Stable**: [aiostreamsfortheweebsstable.midnightignite.me](https://aiostreamsfortheweebsstable.midnightignite.me) - Stable versiom
- **Nightly builds**: [aiostreamsfortheweebs.midnightignite.me](https://aiostreamsfortheweebs.midnightignite.me) — Updated first, may be less stable

:::: warning Torrentio Access
Torrentio blocks many VPS/VPN IPs. Availability depends on the instance. This guide includes alternatives, so you’ll still have plenty of sources. Generally, it is only disabled on the `Official` instance.
::::

## Install and Configure

### 1) Open Your Chosen Instance
Navigate to the instance you picked [here](#choose-an-instance).

### 2) Import the Template
- Click the save icon (💾) in the sidebar  
- Under “BACKUPS”, click “Import”  
- Click “Import Template”  
- Paste this URL:  
  https://share.valhalladev.org/u/stremioguide-configuration-template.json
  or [download directly](https://share.valhalladev.org/u/stremioguide-configuration-template.json?download=true) and use “Import from File”  
- Select “Use This Template Now”

### 3) Select Services
Choose which service providers you use, then click **Next**.

### 4) Add API Keys
- **Services**: Paste your API token(s) (e.g., Real-Debrid, etc.)  
- **TMDB**: Enter both v3 and v4 tokens if requested  
- **TVDB**: Create an app at [thetvdb.com/api-information](https://www.thetvdb.com/api-information)  
- **RPDB**: Use `t0-free-rpdb` or get your key at [ratingposterdb.com/api-key](https://ratingposterdb.com/api-key)

Then select **Load Template**.

::: warning
If the instance you selected does **not** support Torrentio, it will have been automatically removed.
:::

### 5) Create Your Configuration
In “CREATE CONFIGURATION”, set a password and click **Create**.

### 6) Install into Stremio
Return to the save icon (💾) and click **Install**.  
Choose any method (e.g., **Stremio Web**) and confirm.
