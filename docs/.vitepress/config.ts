import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ShellUI/',
  title: "ShellUI",
  description: "A clean custom UI framework for Roblox.",
  
  themeConfig: {
    logo: '/logo.png',

    // Topbar layout with the API label fixed
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resources', link: '/resources/getting-started' },
      { text: 'API', link: '/api/' }
    ],

    // GLOBAL SIDEBAR: This makes ALL sections visible on every single page
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/resources/getting-started' }
        ]
      },
      {
        text: 'API Docs',
        items: [
          { text: 'Overview', link: '/api/' },
          { text: 'Conch Terminal', link: '/api/conch' },
          { text: 'BitAntiCheat', link: '/api/bitanticheat' },
          { text: 'Mittens UI', link: '/api/mittens' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zayddd666/ShellUI' }
    ]
  }
})