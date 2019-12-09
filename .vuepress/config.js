module.exports = {
  evergreen: true,
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,300i,700,700i&display=swap&subset=latin-ext',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Oswald:400,400i,700,700i&display=swap',
      },
    ],
    ['link', { rel: 'icon', href: '/tiny-logo.png' }],
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-sub'))
    },
  },
  plugins: [
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.theme-default-content img',
        delay: 500,
        options: {
          margin: 24,
          background: '#246',
          scrollOffset: 0,
        },
      },
    ],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        cache: false,
        macros: {
          '*': '\\times',
        },
      },
    ],
    [
      'vuepress-plugin-git-log',
      {
        additionalArgs: '--no-merge',
      },
    ],
  ],
  title: 'tfr',
  themeConfig: {
    repo: 'tfresource/tfresource.github.io',
    docsBranch: 'source',
    displayAllHeaders: false,
    editLinks: true,
    editLinkText: 'Edit This Page »',
    lastUpdated: 'Last Updated',
    logo: '/tfr-logo-title.png',
    sidebarDepth: 0,
    nav: [
      { text: 'Topics', link: '/topics/' },
      { text: 'Events', link: '/events/' },
      /*
      {
        text: 'RESOURCES',
        items: [
          {
            text: 'TFR Resources',
            items: [
              { text: 'Papers', link: '/resources/papers' },
              { text: 'Reports & Presentations', link: '/resources/presentations' },
              { text: 'Webinars & Videos', link: '/resources/videos' },
            ],
          },
          {
            text: 'Other Websites',
            items: [
              { text: 'TF-Resource OG', link: 'http://tfresource.org' },
              {
                text: 'Wikipedia Travel Forecasting',
                link: 'https://en.wikipedia.org/wiki/Transportation_forecasting',
              },
              { text: 'TFR on Github', link: 'https://github.com/billyc/tfresource' },
            ],
          },
        ],
      },
      */
      {
        text: 'About',
        items: [
          { text: 'About TF-Resource', link: '/topics/About' },
          // , { text: 'How to Contribute', link: '/thing/' }
        ],
      },
    ],
    sidebar: [
      {
        title: 'Introduction',
        children: [
          '/topics/Big_Picture',
          '/topics/TF_Resource_Volunteers',
          '/topics/'
        ],
      },
      {
        title: 'Modeling Topics',
        children: [
          '/topics/Activity_based_models',
          '/topics/Trip_based_models.html'
        ]
      },
    ],
  },
}
