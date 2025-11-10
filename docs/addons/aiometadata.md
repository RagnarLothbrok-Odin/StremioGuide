---
title: AIOMetadata Addon
description: Enhanced metadata addon for better movie and TV show information
---

# AIOMetadata Addon

AIOMetadata replaces Stremio’s default metadata with richer info from TMDB/TVDB plus optional FanArt/RPDB visuals. It’s required when Cinemeta is disabled in preparations.

## Install and Configure

### 1) Download Prebuilt Config

- Download: [AIOMetadata config](https://share.valhalladev.org/u/aiometadata-config.json?download=true)

### 2) Open the Instance

- Go to: [aiometadatafortheweak.nhyira.dev](https://aiometadatafortheweak.nhyira.dev/)

### 3) Import Configuration

- **Configuration** tab → **Import Configuration** → select the file from step 1

### 4) Add API Keys

- **Integrations** tab
  - **TMDB**: paste your key ([TMDB account](/accounts/tmdb))
  - **TVDB**: paste your key ([TVDB account](/accounts/tvdb))
  - **FanArt**: optional; paste key ([FanArt account](/accounts/fanart))
  - **RPDB**: optional; use `t0-free-rpdb` or your own key ([RPDB account](/accounts/rpdb))
  - **MDbList**: leave blank

### Catalog Management
Drag to reorder catalogs in the `Catalogs` page; disable by toggling the 👁️ icon on the corresponding catalog item.

:::: danger Important
Catalog changes aren’t pushed automatically. If you change catalogs in the future, uninstall and reinstall AIOMetadata in Stremio to refresh. 
Remember to use [Cinebye](cinebye) to reorder your addons and ensure AIOMetadata is placed at the very top of the list.
::::

### 5) Save and Install

- **Configuration** tab → **Save Configuration** → set a password when prompted → **Save**
- Click **Install** to add AIOMetadata to Stremio (or follow the same install steps as in [/addons/aiostreams](/addons/aiostreams#8-install-into-stremio))

:::: warning Required When Cinemeta Disabled
If you removed Cinemeta’s search/catalog/metadata in preparations, AIOMetadata must be installed for titles to display correctly.
::::
