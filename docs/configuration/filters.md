---
title: AIOStreams Filter Configuration
description: Custom content filtering settings for optimal streaming results display
---

# AIOStreams Filter Configuration

This section covers the custom filter settings we've configured in AIOStreams to ensure optimal organization and quality of streaming results.

## Accessing Filter Settings

To view and modify the filter settings:

1. Open your AIOStreams configuration page
2. In the sidebar, click the **"Filters"** category
3. You'll see all the filter options and customizations

## Filter Categories

### Cache Settings

**Exclude Uncached:** Enabled - We exclude uncached items as they can be slower and generally harder to find. By disabling uncached content, we avoid potential streaming issues and ensure a smoother experience.

### Resolution Filtering

**Excluded Resolutions:** "Unknown" - We filter out unknown resolutions as they typically indicate very low quality sources or items with unreliable resolution information.

**Preferred Resolution Order:** 
- 2160p (4K)
- 1080p (Full HD)
- 720p (HD)
- 576p (SD)

### Quality Filtering

**Excluded Qualities:** CAM, TS, TC, SCR, Unknown - These are subjective preferences, but we exclude very low quality sources like cam recordings and telecines for better viewing experience.

**Preferred Quality Order:**
- BluRay REMUX
- BluRay
- WEB-DL
- WEBRip
- HDRip
- DVDRip
- HDTV

### Stream Type Filtering

**Required Stream Types:** Usenet and Debrid - We focus on these reliable sources for consistent streaming quality.

**Excluded Stream Types:** P2P - We exclude peer-to-peer streams to prevent any potential issues.

**Preferred Stream Type Order:** Debrid, Usenet - We generally find debrid sources to be slightly faster, though sorting also depends on source quality, not just type.

### Visual Tag Filtering

**Excluded Visual Tags:** 3D - While 3D movies are rare nowadays as the trend has died out, we exclude them to be safe and avoid compatibility issues.

### Language Preferences

**Preferred Language:** English - This is something users may wish to change based on their preferences. We don't exclusively exclude any languages, but prioritize English content.

### Content Matching

**TMDB Matching:** Enabled - This excellent feature uses your TMDB API key to ensure that the content you're searching for matches what you intended to watch, improving search accuracy.

### Stream Expression

This advanced feature uses custom regex expressions to intelligently organize your streams:

```ts
count(resolution(streams, '2160p')) >= 5 ? 
  resolution(streams, '1080p', '720p', '576p', '480p') : 
  (count(resolution(streams, '1080p')) >= 5 ? 
    resolution(streams, '720p', '576p', '480p') : 
    false)
```

**What this expression does:**
- If there are 5 or more 4K streams available, it **excludes** everything except 4K streams (shows only 4K)
- If there are 5 or more 1080p streams available, it **excludes** everything except 1080p and below (shows 1080p, 720p, 576p, 480p)
- Otherwise, it doesn't exclude any resolutions
- This prioritizes the highest quality when there are many options available

::: tip Customization
You may wish to edit or remove this expression if you have issues, but our regex is designed to provide a balanced selection of quality options.
:::

### Deduplicator

This feature automatically removes duplicate results since AIOStreams combines multiple addons into one. When multiple addons scrape the same content, you'll only see one result instead of duplicates, keeping your stream list clean and organized.

::: info Why This Matters
Without deduplication, you might see the same movie or show listed multiple times from different addons, cluttering your results and making selection confusing.
:::