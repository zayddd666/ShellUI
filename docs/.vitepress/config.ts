import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ShellUI/',
  title: "ShellUI",
  description: "A clean custom UI framework for Roblox.",
  
  themeConfig: {
    logo: '/logo.png',

    // Fixed Topbar text to exactly 'API'
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resources', link: '/resources/getting-started' },
      { text: 'API', link: '/api/' }
    ],

    // Clean, native sidebars
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
          text: 'API Docs',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Conch Terminal', link: '/api/conch' },
            { text: 'BitAntiCheat', link: '/api/bitanticheat' },
            { text: 'Mittens UI', link: '/api/mittens' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zayddd666/ShellUI' }
    ]
  }
})// Cache clearing pass
