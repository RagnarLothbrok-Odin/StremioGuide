import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'en-US',
  title: "Stremio Guide",
  description: "A comprehensive guide for setting up Stremio streaming application with addons, configurations, and optimization tips.",

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", sizes: "any", href: "/favicon.ico" }],
    ['meta', { name: 'theme-color', content: '#1155D9' }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Stremio Guide" }],
    ["meta", { name: "application-name", content: "Stremio Guide" }],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    ["meta", { name: "theme-color", content: "#1155D9" }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1" }],
    ["meta", { property: "og:title", content: "Stremio | Guide" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://stremio.valhalladev.org/" }],
    ["meta", { property: "og:description", content: "A comprehensive guide for setting up Stremio streaming application with addons, configurations, and optimization tips." }],
    ["meta", { property: "og:image", content: "https://stremio.valhalladev.org/logo.png" }],
    ["meta", { property: "og:image:width", content: "400" }],
    ["meta", { property: "og:image:height", content: "400" }],
    ["meta", { property: "og:image:alt", content: "Stremio | Guide" }],
    ["meta", { property: "og:image:type", content: "image/png" }],
    ["meta", { property: "twitter:url", content: "https://stremio.valhalladev.org/" }],
    ["meta", { property: "twitter:title", content: "Stremio | Guide" }],
    ["meta", { property: "twitter:description", content: "A comprehensive guide for setting up Stremio streaming application with addons, configurations, and optimization tips" }],
    ["meta", { property: "twitter:image", content: "https://stremio.valhalladev.org/logo.png" }],
    ["meta", { property: "twitter:image:alt", content: "Stremio | Guide" }],
    ["meta", { property: "owner", content: "Stremio" }],
    ["meta", { property: "author", content: "Stremio" }]
  ],

  themeConfig: {
    logo: '/logo.png',

    outline: [2, 3],

    editLink: {
      pattern: "https://github.com/RagnarLothbrok-Odin/StremioGuide/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Addons', link: '/addons/overview' },
      { text: 'Configuration', link: '/configuration/formatter' },
      { text: 'Resources', link: '/resources/links' },
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: process.env.APP_ID as string,
        apiKey: process.env.API_KEY as string,
        indexName: process.env.INDEX_NAME as string,
        askAi: {
          assistantId: process.env.ASSISTANT_ID as string,
          indexName: process.env.ASSISTANT_INDEX_NAME as string,
        }
      }
    },

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/overview' },
        ],
      },
      {
        text: 'Account Creation',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/accounts/overview' },
          { text: 'Stremio', link: '/accounts/stremio' },
          { text: 'Trakt', link: '/accounts/trakt' },
          { text: 'Debrid', link: '/accounts/debrid' },
          { text: 'TMDB', link: '/accounts/tmdb' },
          { text: 'TVDB', link: '/accounts/tvdb' },
          { text: 'FanArt', link: '/accounts/fanart' },
          { text: 'RPDB', link: '/accounts/rpdb' },
        ],
      },
      {
        text: 'Preparing Your Account',
        collapsed: false,
        items: [
          { text: 'Cinebye', link: '/preparations/cinebye' },
          { text: 'Trakt', link: '/preparations/trakt' },
        ],
      },
      {
        text: "Installing Addons",
        collapsed: false,
        items: [
          { text: 'Overview', link: '/addons/overview' },
          { text: 'AIOStreams', link: '/addons/aiostreams' },
          { text: 'AIOMetadata', link: '/addons/aiometadata' },
          { text: 'Cinebye', link: '/addons/cinebye' },
        ],
      },
      {
        text: "Configuration",
        collapsed: false,
        items: [
          { text: 'Formatter', link: '/configuration/formatter' },
          { text: 'Filters', link: '/configuration/filters' },
        ],
      },
      {
        text: "Resources",
        collapsed: false,
        items: [
          { text: 'Trakt Lists', link: '/resources/trakt' },
          { text: 'Links', link: '/resources/links' },
        ],
      },
      {
        text: "Troubleshooting",
        collapsed: false,
        items: [
          { text: 'Overview', link: '/troubleshooting/overview' },
        ],
      },
      {
        items: [
          { text: 'Contributing', link: '/contributing' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/Q3ZhdRJ' },
    ],
  }
})
