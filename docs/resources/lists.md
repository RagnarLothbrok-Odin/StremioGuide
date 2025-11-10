---
title: Trakt Lists
description: Discover popular Trakt lists and how to add them to Stremio
---

# Trakt Lists

Trakt has a massive collection of user‑generated lists. It’s a standout feature of the platform and an easy way to keep your Stremio catalogs fresh. To find lists, search on Trakt and select the "Lists" category.

This is just a small sample of some available lists.

See how to add these to Stremio in [Installing Lists](#installing-lists).

## Popular Lists

- [Latest Releases](https://trakt.tv/users/giladg/lists/latest-releases?sort=added,asc) - Automatically updates when new movies release
- [MCU Chronological Order (Movies)](https://trakt.tv/users/ragnar-lothbrok/lists/mcu-chronological-order-movies?sort=rank,asc) - All Marvel movies in timeline order
- [MCU Chronological Order (Shows)](https://trakt.tv/users/ragnar-lothbrok/lists/mcu-chronological-order-tv-shows?sort=rank,asc) - All Marvel shows in timeline order
- [Star Wars Chronological Order](https://trakt.tv/users/ragnar-lothbrok/lists/star-wars-chronological-order?sort=rank,asc) - Star Wars in chronological order (live action only)
- [The Statistical 1000 Greatest Movies of All Time](https://trakt.tv/users/giladg3/lists/the-statistical-1000-greatest-movies-of-all-time?sort=rank,asc) - Data‑driven ranking of all‑time greats

## Installing Lists

Use AIOLists to turn Trakt lists into catalogs inside Stremio.

:::: info
Prerequisite: AIOStreams and AIOLists are installed and configured.
::::

1. Open AIOStreams configuration: go to [Stremio Web](https://web.stremio.com/), open `Addons`, then click the settings (cog) on `AIOStreams`.
2. Enter your AIOStreams password.
3. In the sidebar, click `Addons` (puzzle icon).
4. Click the settings (cog) on `AIOLists` → `Take me to configuration`.
5. Add lists (you have two options):
   - Connect your Trakt account to import all of your lists
   - In `Import`, paste a public Trakt list URL to add it individually.
6. After import:
   - The new list appears at the bottom. Reorder if you wish (you can also reorder later in `AIOStreams`).
   - Click the clipboard icon at the bottom to copy the new manifest URL.
7. Return to the `AIOStreams` tab.
8. Paste the manifest URL into `New Manifest URL`.
9. Click `Update AIOLists`.
10. Click the refresh icon next to the `Catalogs` category to import your newly added lists.

:::: warning
If you don’t click refresh, your new lists will not appear in Stremio or AIOStreams.
::::

11. Scroll down to see all catalogs. Reorder by dragging, or use the arrow buttons on the right‑hand side.
12. In the sidebar, click the save icon → `Save`.
13. Reinstall AIOStreams: click `Install` and choose your preferred method.

:::: warning
Due to how Stremio handles catalogs, refreshing catalogs requires reinstalling the addon.
::::

14. Remove the original `AIOStreams` instance and ensure the new one is below `AIOMetadata`. Use Cinebye to reorder and remove by clicking the ❌ icon (see [/addons/cinebye#reorder-addons](/addons/cinebye#reorder-addons)).

:::: danger
Remove the old `AIOStreams` instance to prevent duplicate catalogs.
::::
