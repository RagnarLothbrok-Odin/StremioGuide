---
title: AIOStreams Filter Configuration
description: Custom content filtering settings for optimal streaming results display
---

# AIOStreams Filter Configuration

These filters prioritize quality and readability of results.

## Access

1. Open your AIOStreams configuration
2. Sidebar → **Filters**

## Filter Categories

### Cache

- **Exclude Uncached**: Enabled - avoid slow or unreliable sources

### Resolution

- **Excluded**: Unknown
- **Preferred Order**: 2160p → 1080p → 720p → 576p

### Quality

- **Excluded**: CAM, TS, TC, SCR, Unknown
- **Preferred Order**: BluRay REMUX → BluRay → WEB‑DL → WEBRip → HDRip → DVDRip → HDTV

### Stream Types

- **Required**: Usenet, Debrid
- **Excluded**: P2P
- **Preferred Order**: Debrid, Usenet

### Visual Tags

- **Excluded**: 3D

### Language

- **Preferred**: English (adjust to your preference)

### Content Matching

- **TMDB Matching**: Enabled - improves search accuracy

### Stream Expression

```ts
count(resolution(streams, '2160p')) >= 5 ? 
  resolution(streams, '1080p', '720p', '576p', '480p') : 
  (count(resolution(streams, '1080p')) >= 5 ? 
    resolution(streams, '720p', '576p', '480p') : 
    false)
```

What it does:
- If ≥5 4K streams exist, show only 4K
- Else if ≥5 1080p streams exist, show 1080p and below
- Else show everything

### Deduplicator

Removes duplicate results when multiple addons report the same stream.

:::: info Why This Helps
Cleaner lists mean faster decisions and fewer misses.
::::