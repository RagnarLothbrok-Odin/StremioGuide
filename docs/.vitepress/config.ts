import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'en-US',
  title: "Stremio Setup",
  description: "A comprehensive guide for setting up Stremio streaming application with addons, configurations, and optimization tips.",

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", sizes: "any", href: "/favicon.ico" }],
    ['meta', { name: 'theme-color', content: '#1155D9' }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Stremio Setup" }],
    ["meta", { name: "application-name", content: "Stremio Setup" }],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    ["meta", { name: "theme-color", content: "#1155D9" }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1" }],
    ["meta", { property: "og:title", content: "Stremio | Guide" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://stremio.inoaffordgooddomainname.xyz/" }],
    ["meta", { property: "og:description", content: "A comprehensive guide for setting up Stremio streaming application with addons, configurations, and optimization tips." }],
    ["meta", { property: "og:image", content: "https://stremio.inoaffordgooddomainname.xyz/logo.png" }],
    ["meta", { property: "og:image:width", content: "400" }],
    ["meta", { property: "og:image:height", content: "400" }],
    ["meta", { property: "og:image:alt", content: "Stremio | Guide" }],
    ["meta", { property: "og:image:type", content: "image/png" }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:url", content: "https://stremio.inoaffordgooddomainname.xyz/" }],
    ["meta", { property: "twitter:title", content: "Stremio | Guide" }],
    ["meta", { property: "twitter:description", content: "A comprehensive guide for setting up Stremio streaming application with addons, configurations, and optimization tips" }],
    ["meta", { property: "twitter:image", content: "https://stremio.inoaffordgooddomainname.xyz/logo.png" }],
    ["meta", { property: "twitter:image:alt", content: "Stremio | Guide" }],
    ["meta", { property: "owner", content: "Stremio" }],
    ["meta", { property: "author", content: "Stremio" }]
  ],

  themeConfig: {
    logo: '/logo.png',

    outline: [2, 3],

    editLink: {
      pattern: "https://github.com/RagnarLothbrok-Odin/Stremio-Setup/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Prerequisites',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/prerequisites/overview' },
          { text: 'Choosing a Hoster', link: '/prerequisites/choosing-a-hoster' },
        ],
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/Q3ZhdRJ' },
    ],
  }
})
