module.exports = {
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:500,500i,700,700i&subset=latin-ext',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Cabin:400,400i,700,700i&display=swap',
      },
    ],
    ['link', { rel: 'icon', href: '/tiny-logo.png' }],
  ],
  plugins: [
      [ 'vuepress-plugin-medium-zoom', {
          selector: '.theme-default-content img',
          delay: 500,
          options: {
            margin: 24,
            background: '#246',
            scrollOffset: 0,
          },
        },
      ],
  ],
  title: 'tf resource',
  themeConfig: {
    repo: 'tfresource/tfresource.github.io',
    docsBranch: 'source',
    displayAllHeaders: false,
    editLinks: true,
    editLinkText: 'Edit on Github',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Topics', link: '/topics/' },
      { text: 'Events', link: '/events/' },
      {
        text: 'Resources',
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
    ],
    sidebar: [
      {
        title: 'Modeling Topics',
        children: ['/topics/', '/topics/Pricing', '/topics/Trip Generation'],
      },
      {
        title: 'Data Topics',
        children: ['/topics/', '/topics/Pricing', '/topics/Trip Generation'],
      },
      {
        title: 'Resources',
        children: ['/resources/papers', '/resources/presentations', '/resources/videos'],
      },
    ],
  },
}
