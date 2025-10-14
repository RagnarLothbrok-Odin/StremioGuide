---
title: Prepare Your Stremio Account
description: Configure your Stremio account settings for optimal setup
---

# Prepare Your Stremio Account

Before we begin the main setup, we need to prepare your Stremio account by configuring some important settings. This step will optimize your account for the enhanced setup we'll be implementing.

## Step-by-Step Guide

### Step 1: Visit Cinebye Configuration Page

Navigate to the Cinebye configuration page: [https://cinebye.dinsden.top/](https://cinebye.dinsden.top/)

### Step 2: Authenticate Your Account

1. **Click "Authenticate"** at the top of the page
2. **Sign in with your Stremio account** - Use the credentials from your [Stremio account](/accounts/stremio)
3. **Click "Login"** to authenticate

### Step 3: Configure Cinemeta Options

Scroll down to the section titled **"2 Options"** and check all 3 boxes:

- ✅ **Remove Cinemeta Search**
- ✅ **Remove Cinemeta Catalogs** 
- ✅ **Remove Cinemeta Metadata**

::: danger Important Warning
This is a **controversial change** and can potentially cause issues after we switch the metadata provider to exclusively TMDB. If you're worried about potential problems, you can skip this step, but note that you may get duplicate results.

We personally run with all 3 options checked, and if you experience any issues, you can simply return to this page, log back in, and uncheck them.
:::

### Step 4: Remove Default Addons

Scroll down to the section titled **"📦 Manage Addons"** and remove all default addons:

1. **Click the "❌" icon** on ALL addons to remove them
2. **Note**: Cinemeta will have the "❌" icon greyed out - this is intentional
3. **Do NOT remove Cinemeta** - While we've disabled its search, catalogs, and metadata, completely removing Cinemeta can cause issues and has caused problems in the past

::: warning Important Note
We recommend keeping Cinemeta installed (even though we've disabled its functionality) because completely removing it can cause issues later. If you experience problems, having Cinemeta still installed makes troubleshooting much easier.
:::

### Step 5: Sync Changes to Stremio

1. **Scroll back up** to the section titled **"3 Sync Addons"**
2. **Click "Sync to Stremio"** to apply all your changes

::: info Keep This Page Open
We will be using this Cinebye configuration page again later in this guide, so you don't need to close it. Rest assured that after clicking "Sync to Stremio", all your settings are automatically saved.
:::
