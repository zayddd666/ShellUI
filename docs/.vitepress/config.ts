import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mittens UI Framework",
  description: "A UI Framework",
  
  head: [
    [
      'style',
      {},
      `.VPNavBarTitle .logo { 
        height: 40px !important; 
        max-height: none !important;
      }`
    ]
  ],

  themeConfig: {
    // 👇 CHANGED THIS TO SHOW THE TEXT NEXT TO THE LOGO
    logo: '/logo.png',         
    siteTitle: 'Mittens',          

    search: {
      provider: 'local'
    },
    
nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Installation', link: '/installation' }
        ]
      },
            {
        text: 'Setting Up Mittens',
        items: [
          { text: 'Setting Up', link: '/setting-up' },
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'Components', link: '/components' },
          { text: 'Mounting Function', link: "/mounttoscreenfunction" },
        ]
      },
    ]
  }
})