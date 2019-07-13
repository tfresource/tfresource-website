module.exports = {
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:500,500i,700,700i&amp;subset=latin-ext',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Source+Serif+Pro:500,500i,700,700i&amp;subset=latin-ext',
      },
    ],
    ['link', { rel: 'icon', href: '/tiny-logo.png' }],
  ],
  title: 'tf resource',
  themeConfig: {
    displayAllHeaders: false,
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
    lastUpdated: 'Last Updated',
    repo: 'billyc/tfresource',
    editLinks: true,
    editLinkText: 'Edit this page on Github',
  },
}
