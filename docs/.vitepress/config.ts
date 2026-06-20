import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ShellUI",
  description: "A clean custom UI framework for Roblox.",
  
  themeConfig: {
    logo: '/logo.png',

    // Fixes the topbar items
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resources', link: '/resources/getting-started' },
      { text: 'API Reference', link: '/api/' }
    ],

    // Sets up multi-sidebar tracking for your folders
    sidebar: {
      '/resources/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/resources/getting-started' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zayddd666/ShellUI' }
    ],

    search: {
      provider: 'local'
    }
  }
})