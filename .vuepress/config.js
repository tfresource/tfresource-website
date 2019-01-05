module.exports = {
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:400,700',
      },
    ],
    ['link', { rel: 'icon', href: '/tiny-logo.png' }],
  ],
  title: 'tf resource',
  themeConfig: {
    displayAllHeaders: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Topics', link: '/topics/' },
      {
        text: 'Resources',
        items: [{ text: 'Google', link: 'https://google.com' }, { text: 'Google2', link: 'https://google.com/' }],
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
