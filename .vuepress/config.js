module.exports = {
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:500,500i,700,700i&amp;subset=latin-ext',
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
          { text: 'OG TF-Resource', link: 'http://tfresource.org' },
          { text: 'Wikipedia Travel Forecasting', link: 'https://en.wikipedia.org/wiki/Transportation_forecasting' },
        ],
      },
    ],
    sidebar: [
      {
        title: 'Guide',
        children: ['/guide/'],
      },
    ],
    lastUpdated: 'Last Updated',
    repo: 'billyc/tfresource',
    editLinks: true,
    editLinkText: 'Edit this page on Github',
  },
}
