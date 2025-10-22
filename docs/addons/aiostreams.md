---
title: AIOStreams Addon
description: The main hub and core addon for your Stremio setup
---

# AIOStreams Addon

AIOStreams is the core hub of this setup. It aggregates sources, integrates your debrid provider, manages catalogs, and centralizes configuration - giving you a powerful experience through a single addon.

:::: tip Core Addon
One addon, many capabilities: discovery, streaming, debrid integration, search, formatting, and more.
::::

## Choose an Instance
Select which AIOStreams instance to use. Some are more stable, others get updates first.

- **Official** (creator‑hosted): [aiostreams.elfhosted.com](https://aiostreams.elfhosted.com) - Stable version
- **Community**: [aiostreamsfortheweak.nhyira.dev](https://aiostreamsfortheweak.nhyira.dev) — Stable version
- **Nightly builds**: [aiostreamsfortheweebs.midnightignite.me](https://aiostreamsfortheweebs.midnightignite.me) — Updated first, may be less stable

:::: warning Torrentio Access
Torrentio blocks many VPS/VPN IPs. Availability depends on the instance. This guide includes alternatives, so you’ll still have plenty of sources. Generally, it is only disabled on the `Official` instance.
::::

## Install and Configure

### 1) Open Your Chosen Instance
Navigate to the instance you picked [here](#choose-an-instance).

### 2) Import the Template
- Click the save icon (💾) in the sidebar  
- Under “BACKUPS”, click “Import”  
- Click “Import Template”  
- Paste this URL:  
  https://share.valhalladev.org/u/stremioguide-configuration-template.json
  or [download directly](https://share.valhalladev.org/u/stremioguide-configuration-template.json?download=true) and use “Import from File”  
- Select “Use This Template Now”

### 3) Select Services
Choose which service providers you use, then click **Next**.

### 4) Add API Keys
- **Services**: Paste your API token(s) (e.g., Real-Debrid, etc.)  
- **TMDB**: Enter both v3 and v4 tokens if requested  
- **TVDB**: Create an app at [thetvdb.com/api-information](https://www.thetvdb.com/api-information)  
- **RPDB**: Use `t0-free-rpdb` or get your key at [ratingposterdb.com/api-key](https://ratingposterdb.com/api-key)

Then select **Load Template**.

::: warning
If the instance you selected does **not** support Torrentio, it will have been automatically removed.
:::

### 5) Create Your Configuration
In “CREATE CONFIGURATION”, set a password and click **Create**.

### 6) Optional — Install AIOLists
Adds curated catalogs to populate Stremio.

1. Click the puzzle piece icon → **Marketplace**  
2. Under **Custom**, click **Configure**  
3. Name: `AIOLists`  
4. Manifest URL: right-click and copy:  
   [AIOLists manifest URL](https://aiolists.elfhosted.com/H4sIAAAAAAAAA7VabXOqOBT-Kx0-i1fttffWb7a97epW3Vbc1u50OhGipALhJkGrnf73nUCCvETAHfYbnOSQPCeHk5Pn5FMDPvoT7rSepjU04luLvnxnLX1JINS5UGtozLUWVxAQSAy8hp7W0-BuaC_uTDRBw8FsP2iP0fCyyYXW0wMX2i93s4-x-_B98jQ7H7mD85Ex745vnPe58ehOjF_beefFnr9f2ZPpgA7cLnpBg4uRYbbGN6v95OZhN55-746M9XZ00_-4vx7uracBmqBBZ3LT346e5h8TY7Wf71-csTE_n--t9cT4ez2--4V433nncvvyPEITh6L585X_fD505k8P6Hm6RZb7987sOJsFH--51fy4HerGyNy4xsX9cvDculvceN3n2-t353dnsrdf_jCWeAnvbqf2TBhiCilF2BtYkd24qG-aOPBYUjSjkHjAhZHEhQxYgIEpDojJZbyL6HkPvFUAVlwKPS4jYM36pgkpldaW0ke4JJDaWfGvDx8RSPtM63mB4whpegYOomxCLEi03j-aay34e0CcN0agZyFvpbt4gyDlcz00OoBBynS20amNt5lGD7Klgz6UirJNqvnbJiS0KcUmYMDBqzeTBG-henEXCkluBAtRD-6Ug4smxZSBC_bY032CXKhUTXVQfMAOnECpGDaoFBZY3X-BlRP0kAsYwl5abPL5ZEBiM3ChxwDZpRuWwEWO2jA2ogxn-xPsAs-E2mtDcwBlM98CDHJH7rQ6Xb31U-9cGK0fvdZlr9Vqds7bL8KZ6Ej4tNb71ADCoUzfAmba_FF_4nIb0FE0kd4SOBQ2uGQa4pYCPui1Dc11YtALvd022he9brfXumz-vGi9aF9fDc1GlgW9ez5QxouBmTcasDbQYwFRr7SJXWhlTGER4IKsNT0G6BFzYkIwScvcHWWQqPtTE-lLlJYxmyDHgZmvbEFGwLAvPqnjpc5sqG8hXPM1I9DFG2hJo7w2NDOgDLtcMAYut_xnoVV6Wl-KCqH3tNtIUAi4p40iwXFv7Wk38VvORmnv5WPy9-Ko1NMMEcQyRsuEtkS_Lx6SySq22-eXtNsIWggYOx9K4301NOT6mDBo9S0Le1mDHlma3qeGuEOX92xoIkob2D-L_pazyfLMsOHZU9Se-IsYCVQ_EaKjmyuOZUacQThb2VWMH25NRycgOiV2jBUgO5OA7RITa2UeukydYFX0JbbzYfRzhmH99atoy1DYKLepiPmMI7mwT402ObaLVbdF7gvVbCB897gJ5PaQscBUiItCawTzNANkdqPT8csPxPDFtp3Bn964FfizO7uYxU0ort8BjiQS1fFnP1C8_Knk5Dj6zOIL8HWvvTpTOhl6xZVXZV8KC6iTNDGhfth49hdvrN8XCvPD6mZRf6bYLxSZZ5ltMj6SMk3dnlKUGP9Hw1T0mmTKrbBIOiMX0_gjcIL6vUOZ_FcHn1Yv9obEceIY5szqh5DrXnXVqeZEwFVXOT4PqfAmDksS7gLXjzZ_JjsBbEK5AtYCh06eGBNo63dnxdE0gZfaIPAAWyOPtttKuFUjW3Q2U0UzeWqTEUy-1xbPM8fCEyKV1CzBljtNKVDmz6ESr2z5H3ayo4ffhA0I2hO4dKDJaN4A-Q-UmCKmLlQ2SPAaEnxCVBvqPH1SFW5CsxinIA4UIGNKQYx3Ld_rgpflLKq7c6xZgi3kmVTQBAElkYnX2oCl-a0TcAnFkpw75HVUybYgfGSWLV5rO1qk-aQT8mqhWAwrS9Dk8eXYKzG8YHLqDzvH6LKKf2FOvSRLigg41SYqqTm5gcr32jbPDPd3QqIgNYuxZXm1PMYc1SjGFwRc_Yt7jNusuLg59WIDSF5agVw2xZAfY0FdWA9DnAbyoFeMTnDBCnAxSyxGm5ro7BbVCC1LQ1d33VizGFvMaas40APfLVnPg6Q2njNHqp_AbB50SzaVJKWt2FpS9Rm5waSEtW0zqlJQRX9N65aEW1E-UsXbuLIkA24sqC3iZotXJ4TcWLUYIC-7KMBF1Rgx1BOo01NThZ7qgCK1suwgVUlRJQfpQmGcG3Dx_5EaKOuSlTODtHYx9lyFKI8-X9oWs7gPG86MTe38wtFqevWFz3-ihGvI1cAUITl3A0BGZtFQvy8cvXSQsATbrKCH4BpbKB-kc_oKf1BfKIgtcKT5sO8yAoHL4V9HTXyYDSQ0POJq7Wa7yWkRB68wDzGM-bT37ZvvgJ3u2M0VxisHBhQSE3sMeqxpYvebcfW4fZ--_V4Or6fvbffH_uXq8vzW84ej7nLqj_pv25lze3P_8dRffO8al4_u9mrzYHXNp8fuBg2HE3s90Br81s4VoHBGnMTAP8DPTvvi3DxvXUCdMgJdhPUMOB3wAmZzARY7fQGBG_hN0wkW3-bnw_bk3W-be_wx3s86I2O9GxmD9vi93_mmNTRTGqD3T6HxUvc5MEEr5AFHHPCChGgEPLSEwheOroPszYux3GPFd-MjaOCZ9o5gxxHLn-gDPxgB08CPyrZRWTyUPcLfASKR6KtRDia-eVI3mvjDRXDiTtXwvOZ-g0YcFfhFARpePgqb5bxe-R_LmRiYjG3H_nH-zu9hUEzYXwQuIYGeGQUVXhBut_gTDf95jUAHAgqtEHp47UizIDV55T3-ez28PQTocj1FVK-sZKEVYsDRRc-Kysdr--W6-Vp3uY66CHSi3ikD5oqx1XGdML1szbNcI1P0qahwygDJekO17ictZMx5V-ir4JAraCXp1vLuB9ayQl_JAlZYWcmslXfNs1UVzB4TPOV984RJuU6CYyjvfDiyVwgciSNwBSumj5JVbJnJ7ctUop8QLBx4Bz0Cb5HDeGsU4KHHGx6BZ0XXxm4hCG-DyR2BhC0yrxMZWpRz2njLkAu_ty-0Rj53dZAHqB8Q5KEwe7Sc8LbVK9-WADHtabwhvcr7WNN8A_d0GMl_hTO1EtnmNfY8aIabYnwr6zBxfntZgAwv3MqG8H5s_Bb4lAFqi_evr38BNjyoKRgtAAA/manifest.json)  
5. Paste it into the box and click **Install**  
6. Go to **Installed**, drag AIOLists to the top of your list  
7. In **CATALOGS**, click the refresh icon to populate  
8. Reorder catalogs as desired  

::: warning
If you skip AIOLists or forget to refresh, your Stremio homescreen will be blank.
:::

### 7) Install into Stremio
Return to the save icon (💾) and click **Install**.  
Choose any method (e.g., **Stremio Web**) and confirm.

## Notes

### Catalog Management
Drag to reorder catalogs in the Addons page; disable by unchecking.

:::: danger Important
Catalog changes aren’t pushed automatically. If you change catalogs, uninstall and reinstall AIOStreams in Stremio to refresh.
::::
