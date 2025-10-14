---
title: AIOStreams Formatter Configuration
description: Custom formatting settings for optimal streaming results display
---

# AIOStreams Formatter Configuration

Use these templates to make stream titles readable at a glance.

## Access

1. Open your AIOStreams configuration
2. Sidebar → **Formatter**

## Custom Title

Reference: AIOStreams [Custom Formatter wiki](https://github.com/Viren070/AIOStreams/wiki/Custom-Formatter)

```ts
{service.cached::istrue["⚡"||"⏳"]}
{stream.resolution::=2160p["🔥 UHD"||""]}
{stream.resolution::=1080p["🚀 FHD"||""]}
{stream.resolution::=1440p["✨ QHD"||""]}
{stream.resolution::=720p["💿 HD"||""]}
{stream.resolution::=420p["💩 Low Quality"||""]}
{stream.resolution::exists[""||"💩 Unknown"]}
```

:::: info
This displays cache state, but our filter configuration excludes uncached items by default.
::::

## Custom Description

```ts
{stream.title::exists["📁 {stream.title}"||""]}
{stream.year::exists[" ({stream.year})"||""]}
{stream.season::>=0[" S"||""]}
{stream.season::<=9["0"||""]}
{stream.season::>0["{stream.season}"||""]}
{stream.episode::>=0[" • E"||""]}
{stream.episode::<=9["0"||""]}
{stream.episode::>0["{stream.episode}"||""]}
{stream.audioTags::exists["🎧 {stream.audioTags::join(' | ')}"||""]}
{stream.languages::exists["📣 {stream.languageEmojis::join(' | ')}"||""]}
{stream.visualTags::exists["📺 {stream.visualTags::join(' | ')}"||""]}
{stream.quality::exists["🎥 {stream.quality} "||""]}
{stream.encode::exists["🎞️ {stream.encode} "||""]}
{stream.size::>0["📦 {stream.size::bytes} "||""]}
{service.cached::istrue["⚡"||"⏳"]}
{stream.type::=p2p["🏴‍☠️"||""]}
{service.shortName::exists["[{service.shortName}]"||""]}
{addon.name}
```

Example output:

```text
⚡🔥 UHD
📁 Avengers Endgame (2019)
🎧 Atmos | TrueHD 📣 🇬🇧 | 🇮🇹
📺 DV 🎥 BluRay 🎞️ HEVC 
📦 62.5 GB  ⚡[RD]Torrentio
```