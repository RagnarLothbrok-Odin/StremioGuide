---
title: AIOStreams Addon
description: The main hub and core addon for your Stremio setup
---

# AIOStreams Addon

AIOStreams is the **main hub and primary focus** of your Stremio setup. This single addon provides 99.9% of the functionality you'll need by combining multiple addons into one easy-to-configure package, including lists, addons, debrid provider integration, formatting, and much more.

::: tip Core Addon
AIOStreams is not just another addon - it's an addon aggregator that combines multiple addons into one central component. This makes configuration much easier while providing comprehensive functionality for your entire Stremio experience.
:::

## What AIOStreams Provides

### Content Discovery
- **Curated Lists** - Hand-picked collections of movies and TV shows (provided by other addons, integrated into AIOStreams)
- **Multiple Catalogs** - Various content categories and genres (provided by other addons, integrated into AIOStreams)

### Streaming Integration
- **Debrid Provider Support** - Seamless integration with Real-Debrid, Premiumize, and more
- **Multiple Sources** - Access to various streaming sources
- **Quality Options** - From SD to 4K streaming options

### Enhanced Features
- **Custom Formatting** - Optimized display and organization
- **Metadata Integration** - Enhanced movie and TV show information
- **Search Capabilities** - Advanced search and filtering options

## Why AIOStreams is Essential

AIOStreams consolidates multiple functions into one powerful addon:

- **Single Installation** - One addon instead of multiple separate ones
- **Unified Experience** - Consistent interface and functionality
- **Comprehensive Coverage** - Handles all aspects of content discovery and streaming
- **Regular Updates** - Continuously maintained and improved

## Choosing an Instance

There are several publicly hosted instances of AIOStreams available, though you may encounter rate limiting issues with some of them.

### Available Instances

- **[Official Instance](https://aiostreams.elfhosted.com)** - Hosted by AIOStreams creator Viren070
- **[Community Instance](https://aiostreamsfortheweak.nhyira.dev)** - Hosted by an AIOStreams admin
- **[Nightly Build Instance](https://aiostreamsfortheweebs.midnightignite.me)** - Hosted by a well-known community member (runs nightly builds)

::: warning Torrentio Access Limitations
One important caveat: Torrentio, one of the most popular Stremio addons, has restricted access from most VPS IP addresses and some VPN IPs. This means access to Torrentio may vary depending on which instance you choose.

However, this configuration guide provides several alternative addons, so you shouldn't have any issues finding content even if Torrentio is unavailable.
:::

### Our Recommendation

For most users, we recommend the **official instance**. However, for full control and customization, we actually recommend **self-hosting** AIOStreams if possible.

AIOStreams is 100% open source and available on [GitHub](https://github.com/Viren070/AIOStreams). The creator provides an easy setup guide [here](https://github.com/Viren070/AIOStreams/wiki/Deployment).

## Installation Steps

After choosing which instance you're going to use and navigating to its URL, the setup is really quite simple.

### Step 1: Download Our Pre-built Configuration File

[Click here to automatically download our up-to-date configuration file](https://share.valhalladev.org/u/aiostreams-config.json?download=true)

### Step 2: Open AIOStreams Instance

Navigate to the URL of the instance you have chosen.

### Step 3: Navigate to the Account Configuration Page

On the left-hand side of the screen, you will see a sidebar. Select the save icon (💾).

### Step 4: Create Your Account

In the first section titled "CREATE CONFIGURATION", create a password of your choosing. This will allow you to edit your configuration later on, so it is vital you do not lose this password. Then click "Create".

### Step 5: Import Our Pre-built Configuration File

Further down the page is a category titled "BACKUPS". Select the "Import" button and upload the file you downloaded in Step 1, titled `aiostreams-config.json`.

### Step 6: Add API Keys

You will notice that if you click "Save" now, you will receive errors about missing keys. We will now go through and input all the API keys that are required.

First, in the sidebar, click the second icon from the top (it looks like a cloud).

#### RPDB API Key
In the [previous step](/accounts/rpdb), you either created an account or are intending to use the free API key. If you're using the free API key, simply scroll to the bottom of the addons page and input `t0-free-rpdb` where it says "RPDB API Key". If you created an account, you will need to retrieve your API key from [here](https://ratingposterdb.com/api-key/).

#### TMDB API Keys
In the [previous step](/accounts/tmdb), you should have created your API key. Simply enter your API keys in the AIOStreams section titled "TMDB". You will notice it asks for two API keys - it's important not to mix these up.

#### TVDB API Key
In the [previous step](/accounts/tvdb), we only went through the process of creating an account. However, to receive an API key, you must create an app [here](https://www.thetvdb.com/api-information). Simply click "Get Started" and fill in the required information (the information isn't that important since we only plan to use it for personal use). Upon submitting your application, you will be provided with an API key. Simply input this key into the AIOStreams section "TVDB API Key".

#### Debrid Provider
Now for the most important API key - your debrid provider.

At the top of the addons page, you will find all services. This is where you will input your debrid API key. You must click the settings cog icon and enter your API key, followed by clicking "Save".

AIOStreams is really helpful with this process - on each provider input field, it should provide you with a hyperlink to the provider of your choice, making it easy to navigate to the correct page to retrieve your API key.

### Step 7: Install AIOLists

This step is optional, however it will add catalogs to populate your Stremio instance. It's incredibly easy to install and enhances the user experience.

To install this addon:

1. Click the third icon in the sidebar (looks like a puzzle piece)
2. Click "Marketplace" at the top of the page
3. Under where it says "Custom", click "Configure"
4. In the name field, put `AIOLists`
5. In the manifest URL field, [right click this hyperlink and click "Copy Link Address"](https://aiolists.elfhosted.com/H4sIAAAAAAAAA7VabXOqOBT-Kx0-i1fttffWb7a97epW3Vbc1u50OhGipALhJkGrnf73nUCCvETAHfYbnOSQPCeHk5Pn5FMDPvoT7rSepjU04luLvnxnLX1JINS5UGtozLUWVxAQSAy8hp7W0-BuaC_uTDRBw8FsP2iP0fCyyYXW0wMX2i93s4-x-_B98jQ7H7mD85Ex745vnPe58ehOjF_beefFnr9f2ZPpgA7cLnpBg4uRYbbGN6v95OZhN55-746M9XZ00_-4vx7uracBmqBBZ3LT346e5h8TY7Wf71-csTE_n--t9cT4ez2--4V433nncvvyPEITh6L585X_fD505k8P6Hm6RZb7987sOJsFH--51fy4HerGyNy4xsX9cvDculvceN3n2-t353dnsrdf_jCWeAnvbqf2TBhiCilF2BtYkd24qG-aOPBYUjSjkHjAhZHEhQxYgIEpDojJZbyL6HkPvFUAVlwKPS4jYM36pgkpldaW0ke4JJDaWfGvDx8RSPtM63mB4whpegYOomxCLEi03j-aay34e0CcN0agZyFvpbt4gyDlcz00OoBBynS20amNt5lGD7Klgz6UirJNqvnbJiS0KcUmYMDBqzeTBG-henEXCkluBAtRD-6Ug4smxZSBC_bY032CXKhUTXVQfMAOnECpGDaoFBZY3X-BlRP0kAsYwl5abPL5ZEBiM3ChxwDZpRuWwEWO2jA2ogxn-xPsAs-E2mtDcwBlM98CDHJH7rQ6Xb31U-9cGK0fvdZlr9Vqds7bL8KZ6Ej4tNb71ADCoUzfAmba_FF_4nIb0FE0kd4SOBQ2uGQa4pYCPui1Dc11YtALvd022he9brfXumz-vGi9aF9fDc1GlgW9ez5QxouBmTcasDbQYwFRr7SJXWhlTGER4IKsNT0G6BFzYkIwScvcHWWQqPtTE-lLlJYxmyDHgZmvbEFGwLAvPqnjpc5sqG8hXPM1I9DFG2hJo7w2NDOgDLtcMAYut_xnoVV6Wl-KCqH3tNtIUAi4p40iwXFv7Wk38VvORmnv5WPy9-Ko1NMMEcQyRsuEtkS_Lx6SySq22-eXtNsIWggYOx9K4301NOT6mDBo9S0Le1mDHlma3qeGuEOX92xoIkob2D-L_pazyfLMsOHZU9Se-IsYCVQ_EaKjmyuOZUacQThb2VWMH25NRycgOiV2jBUgO5OA7RITa2UeukydYFX0JbbzYfRzhmH99atoy1DYKLepiPmMI7mwT402ObaLVbdF7gvVbCB897gJ5PaQscBUiItCawTzNANkdqPT8csPxPDFtp3Bn964FfizO7uYxU0ort8BjiQS1fFnP1C8_Knk5Dj6zOIL8HWvvTpTOhl6xZVXZV8KC6iTNDGhfth49hdvrN8XCvPD6mZRf6bYLxSZZ5ltMj6SMk3dnlKUGP9Hw1T0mmTKrbBIOiMX0_gjcIL6vUOZ_FcHn1Yv9obEceIY5szqh5DrXnXVqeZEwFVXOT4PqfAmDksS7gLXjzZ_JjsBbEK5AtYCh06eGBNo63dnxdE0gZfaIPAAWyOPtttKuFUjW3Q2U0UzeWqTEUy-1xbPM8fCEyKV1CzBljtNKVDmz6ESr2z5H3ayo4ffhA0I2hO4dKDJaN4A-Q-UmCKmLlQ2SPAaEnxCVBvqPH1SFW5CsxinIA4UIGNKQYx3Ld_rgpflLKq7c6xZgi3kmVTQBAElkYnX2oCl-a0TcAnFkpw75HVUybYgfGSWLV5rO1qk-aQT8mqhWAwrS9Dk8eXYKzG8YHLqDzvH6LKKf2FOvSRLigg41SYqqTm5gcr32jbPDPd3QqIgNYuxZXm1PMYc1SjGFwRc_Yt7jNusuLg59WIDSF5agVw2xZAfY0FdWA9DnAbyoFeMTnDBCnAxSyxGm5ro7BbVCC1LQ1d33VizGFvMaas40APfLVnPg6Q2njNHqp_AbB50SzaVJKWt2FpS9Rm5waSEtW0zqlJQRX9N65aEW1E-UsXbuLIkA24sqC3iZotXJ4TcWLUYIC-7KMBF1Rgx1BOo01NThZ7qgCK1suwgVUlRJQfpQmGcG3Dx_5EaKOuSlTODtHYx9lyFKI8-X9oWs7gPG86MTe38wtFqevWFz3-ihGvI1cAUITl3A0BGZtFQvy8cvXSQsATbrKCH4BpbKB-kc_oKf1BfKIgtcKT5sO8yAoHL4V9HTXyYDSQ0POJq7Wa7yWkRB68wDzGM-bT37ZvvgJ3u2M0VxisHBhQSE3sMeqxpYvebcfW4fZ--_V4Or6fvbffH_uXq8vzW84ej7nLqj_pv25lze3P_8dRffO8al4_u9mrzYHXNp8fuBg2HE3s90Br81s4VoHBGnMTAP8DPTvvi3DxvXUCdMgJdhPUMOB3wAmZzARY7fQGBG_hN0wkW3-bnw_bk3W-be_wx3s86I2O9GxmD9vi93_mmNTRTGqD3T6HxUvc5MEEr5AFHHPCChGgEPLSEwheOroPszYux3GPFd-MjaOCZ9o5gxxHLn-gDPxgB08CPyrZRWTyUPcLfASKR6KtRDia-eVI3mvjDRXDiTtXwvOZ-g0YcFfhFARpePgqb5bxe-R_LmRiYjG3H_nH-zu9hUEzYXwQuIYGeGQUVXhBut_gTDf95jUAHAgqtEHp47UizIDV55T3-ez28PQTocj1FVK-sZKEVYsDRRc-Kysdr--W6-Vp3uY66CHSi3ikD5oqx1XGdML1szbNcI1P0qahwygDJekO17ictZMx5V-ir4JAraCXp1vLuB9ayQl_JAlZYWcmslXfNs1UVzB4TPOV984RJuU6CYyjvfDiyVwgciSNwBSumj5JVbJnJ7ctUop8QLBx4Bz0Cb5HDeGsU4KHHGx6BZ0XXxm4hCG-DyR2BhC0yrxMZWpRz2njLkAu_ty-0Rj53dZAHqB8Q5KEwe7Sc8LbVK9-WADHtabwhvcr7WNN8A_d0GMl_hTO1EtnmNfY8aIabYnwr6zBxfntZgAwv3MqG8H5s_Bb4lAFqi_evr38BNjyoKRgtAAA/manifest.json) and paste the URL into the field.

### Step 8: Save Your Configuration

Return to the save page (select the save icon (💾) in the sidebar).

::: warning Torrentio Error
Depending on the instance you decided to use, you may receive an error: `Addon Torrentio PM is disabled: private instances only`. If this is the case, return to the "Addons" tab and in the "My Addons" category, either disable (uncheck) or remove (trash icon) the addon "Torrentio". Finally return to the save page and select the save icon once more.
:::

### Step 9: Install AIOStreams into Stremio

To install AIOStreams into Stremio, return to the save page (select the save icon (💾)).

From here, click the "Install" button. You will be given 3 options of installation methods - any will work. For example, using the "Stremio Web" option:

1. Click "Stremio Web"
2. Click "Install"
3. Done!

## Notes

### Catalog Management
- You will notice in the same Addons page, a large category filled with items within the "Catalogs" section. You can drag these items to rearrange them - the order in which they appear on this page will mirror how they appear within Stremio itself. You can also disable lists here by unchecking them.

::: danger Important
Any changes to catalogs will NOT be mirrored to Stremio after saving. If you move/remove/add catalogs, you MUST reinstall AIOStreams (you don't have to start from fresh - simply uninstall from Stremio and reinstall).
:::

### Adding Custom Lists
- You can add any lists you wish by clicking the settings icon on the addon listed under "My Addons" for the item "AIOLists"

::: warning Refresh Required
If you add any lists, it's important to remember to hit the refresh icon at the top right of the "CATALOGS" category to populate the section.
:::