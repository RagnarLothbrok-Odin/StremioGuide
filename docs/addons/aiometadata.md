---
title: AIOMetadata Addon
description: Enhanced metadata addon for better movie and TV show information
---

# AIOMetadata Addon

AIOMetadata is an essential addon that provides metadata for movies and TV shows. Since we disabled Stremio's default metadata provider in the Cinebye configuration, AIOMetadata is required to display movie and TV show information, descriptions, cast details, and other metadata.

## Installation Steps

### Step 1: Download Configuration File

[Click here to download our pre-built AIOMetadata configuration file](https://share.valhalladev.org/u/aiometadata-config.json?download=true)

### Step 2: Open AIOMetadata Instance

Navigate to the AIOMetadata configuration page: [https://aiometadatafortheweak.nhyira.dev/](https://aiometadatafortheweak.nhyira.dev/)

### Step 3: Import Configuration

1. Click **"Configuration"** in the sidebar
2. Click **"Import Configuration"**
3. Upload the configuration file you downloaded in Step 1

### Step 4: Add API Keys

1. Click **"Integrations"** in the sidebar
2. Enter your API keys for the following services:
   - **TMDB API Key** - From your [TMDB account](/accounts/tmdb)
   - **TVDB API Key** - From your [TVDB account](/accounts/tvdb)
   - **FanArt API Key** - From your [FanArt account](/accounts/fanart)
   - **RPDB API Key** - From your [RPDB account](/accounts/rpdb) (or use the free API key `t0-free-rpdb`)
   - **MDbList API Key** - Leave this blank

### Step 5: Save Configuration

1. Click **"Configuration"** in the sidebar
2. Click **"Save Configuration"**
3. Create a memorable password when prompted
4. Click **"Save Configuration"**

### Step 6: Install Addon

1. Click **"Install"** to add AIOMetadata to your Stremio setup
2. Follow the installation prompts to complete the setup (If stuck, similar steps from [here](/addons/aiostreams#step-9-install-aiostreams-into-stremio))

::: warning Required Addon
AIOMetadata is essential for this setup since we disabled Stremio's default metadata provider. Without it, you won't see movie and TV show information, descriptions, or cast details.
:::