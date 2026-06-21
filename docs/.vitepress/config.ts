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
      { text: 'Components', link: '/components/' }, // Added to the top bar!
    ],

    // Multi-sidebar configuration: Changes sidebars based on where you are!
    sidebar: {
      // Sidebar shown when you are in the Resources section
      '/resources/': [
        {
          text: 'Introduction',
          items: [
            { text: "Why?", link: '/resources/' }, 
            { text: 'Getting Started', link: '/resources/getting-started' }, 
            { text: "Installation", link: "/resources/installation" },
            { text: "Setting Up", link: "/resources/setting-up" }
          ]
        }
      ],

      // Sidebar shown when you click "API"
      '/api/': [
        {
          text: 'API',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Mounting Function', link: '/api/mounttoscreenfunction' }
          ]
        }
      ],

      // Sidebar shown when you click "Components"
'/components/': [
        {
          text: 'UI Components',
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'AspectRatio', link: '/components/aspectratio' },
            { text: 'Button', link: '/components/button' },
            { text: 'Corner', link: '/components/corner' },
            { text: 'Frame', link: '/components/Frame' },
            { text: 'Label', link: '/components/label' },
            { text: 'List', link: '/components/list' },
            { text: 'Stroke', link: '/components/stroke' },
            { text: 'TextInput', link: '/components/textinput' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zayddd666/ShellUI' }
    ]
  }
})