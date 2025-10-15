---
title: Prepare Your Stremio Account
description: Configure your Stremio account settings for optimal setup
---

# Prepare Your Stremio Account

Tune Stremio with Cinebye so your addon stack behaves consistently.

## 1) Open Cinebye

- Go to: [https://cinebye.dinsden.top/](https://cinebye.dinsden.top/)
- Click **Authenticate**, sign in with your Stremio account

## 2) Options (Cinemeta)

In the **2 Options** section, enable all three checkboxes:

- ✅ Remove Cinemeta Search
- ✅ Remove Cinemeta Catalogs
- ✅ Remove Cinemeta Metadata

:::: danger Heads‑up
Disabling Cinemeta’s features is opinionated and can cause issues if you don’t replace metadata. This guide installs **AIOMetadata** to provide TMDB/TVDB data instead.
::::

## 3) Remove Default Addons

- **📦 Manage Addons** → click ❌ on all default addons
- Do not remove Cinemeta entirely (its ❌ may be disabled)-keeping it installed avoids edge‑case issues

:::: warning Why keep Cinemeta installed?
Even when disabled, having it present avoids rare crashes and makes troubleshooting easier.
::::

## 4) Sync

- **3 Sync Addons** → **Sync to Stremio**
- Keep this page open; we return after installing addons
