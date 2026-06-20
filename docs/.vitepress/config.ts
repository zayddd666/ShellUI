import { defineConfig, type UserConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  base: '/ShellUI/',
  title: "ShellUI",
  description: "A clean custom UI framework for Roblox.",
  
  // Register the tabs plugin in the markdown config block
  markdown: {
    config: (md) => {
      md.use(tabsMarkdownPlugin)
    }
  },

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resources', link: '/resources/getting-started' },
      { text: 'API', link: '/api/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: "Why?", link: '/resources/' }, 
          { text: 'Getting Started', link: '/resources/getting-started' }, 
          { text: "Installation", link: "/resources/installation" },
          { text: "Setting Up", link: "/resources/setting-up" }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'API', link: '/api/' },
          { text: 'Components', link: '/api/components' },
          { text: 'Mounting Function', link: '/api/mounttoscreenfunction' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zayddd666/ShellUI' }
    ]
  }
})