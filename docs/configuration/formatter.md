---
title: AIOStreams Formatter Configuration
description: Custom formatting settings for optimal streaming results display
---

# AIOStreams Formatter Configuration

This section covers the custom formatting settings we've configured in AIOStreams to ensure easy reading and organization of streaming results.

## Accessing Formatter Settings

To view and modify the formatter settings:

1. Open your AIOStreams configuration page
2. In the sidebar, click the **"Formatter"** category
3. You'll see all the formatting options and customizations

## Custom Title

AIOStreams is incredibly configurable and includes extensive documentation on the [Custom Formatter wiki](https://github.com/Viren070/AIOStreams/wiki/Custom-Formatter).

Our included configuration uses a custom formatter template that provides clear, emoji-enhanced quality indicators:

```ts
{service.cached::istrue["⚡"||"⏳"]}
{stream.resolution::=2160p["🔥 UHD"||""]}
{stream.resolution::=1080p["🚀 FHD"||""]}
{stream.resolution::=1440p["✨ QHD"||""]}
{stream.resolution::=720p["💿 HD"||""]}
{stream.resolution::=420p["💩 Low Quality"||""]}
{stream.resolution::exists[""||"💩 Unknown"]}
```

After extensive testing, this template provides both visual appeal and essential information in the title.

::: info
Although this template displays whether or not the item is cached, note that our configuration disables all cached content by default.
:::

## Custom Description

Similarly to the title, the description of content can also be extensively modified as per the [Custom Formatter wiki](https://github.com/Viren070/AIOStreams/wiki/Custom-Formatter).

Our template strips away the noise, leaving you with a visually pleasing display with essential information displayed.

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

When AIOStreams joins these templates, the user is presented with a visually pleasing and useful presentation:

```text
⚡🔥 UHD
📁 Avengers Endgame (2019)
🎧 Atmos | TrueHD 📣 🇬🇧 | 🇮🇹
📺 DV 🎥 BluRay 🎞️ HEVC 
📦 62.5 GB  ⚡[RD]Torrentio
```