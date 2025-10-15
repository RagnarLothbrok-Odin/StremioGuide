---
title: Troubleshooting Overview
description: Common issues and quick fixes for Stremio and Trakt
---

# Troubleshooting

## Stremio

### Fetched Sources Not Playing
One of the most common reasons an item refuses to play is an expired debrid subscription. It's easy to miss a renewal, and it isn't always obvious when your account has lapsed. Check your debrid status first.

### No Search Results
This can happen with this configuration because we [disabled Cinemeta search](/preperations/cinebye) to reduce duplicate results. On rare occasions, TMDB's API may also experience an outage, which results in no search results. Your options are to wait for it to recover or re‑enable Cinemeta search; there isn't much downside to running both, other than duplicate results. It is also possible that search may take slightly longer to return results.

### No Audio
It's rare but possible to encounter an audio codec your device doesn't support. This is more common on desktop environments than on Android TV devices. If this happens, either select a source with a supported audio codec or exclude the unsupported codec in your AIOStreams filters. [See filters](/configuration/filters).

### Purple/Green Tint
Similar to audio, video codec or format issues can cause a purple/green tint. This often happens when playing HDR or Dolby Vision on a device that doesn't support those formats. Select a different source or exclude these formats in your AIOStreams configuration.

### Buffering
This setup prioritizes the highest‑quality sources and does not account for your internet speed. If you experience buffering, the most common cause is that the file's bitrate/size is too high for your connection. Try a source with a smaller file size; if that fixes it, set a maximum file size in AIOStreams [configuration](/configuration/filters). You can also exclude 4K streams on slower connections, as 4K files are typically much larger.

### Subtitle Sync Issues
Some files include embedded subtitles, which usually sync correctly. However, if there are no embedded subtitles, the OpenSubtitles addon is used. Mismatches can occur because different releases of the same video may differ slightly, so the subtitle track may not align perfectly. Try selecting subtitles that match your release, choose another source, or adjust the subtitle delay in your player.

### Audio Sync Issues

This is rare, but it can happen. Backing out and re‑selecting the same source often fixes it. If not, try a different source.

## Trakt

### Scrobbling
Scrobbling reports what you're currently watching to Trakt. Sometimes it stops updating or marking items as "watching."

Usually, [re‑authenticating your account](/accounts/trakt) fixes it. It's also worth checking whether others are seeing similar issues [on Reddit](https://www.reddit.com/r/Stremio/) or in the [Stremio Discord server](https://discord.com/invite/zNRf6YF).

You can also verify whether Trakt is experiencing an outage:
- Trakt status page: [https://status.trakt.tv/](https://status.trakt.tv/)
- Trakt on X: [https://x.com/trakt](https://x.com/trakt)
- Trakt API on X: [https://x.com/traktapi](https://x.com/traktapi)

## Reset

If all else fails—or if you simply want to return to the default configuration—you can use the [Bootstrapper app](https://bootstrapper.stremaddon.net/). It can fully reset your account to factory defaults.