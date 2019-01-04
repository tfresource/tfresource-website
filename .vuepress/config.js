module.exports = {
  base: '/tfresource/',
  head: [
      ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,700'}]
  ],
  title: 'tf resource',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Topics', link: '/guide/' },
      { text: 'Resources', items: [
          { text: 'Google', link: 'https://google.com' },
          { text: 'Google2', link: 'https://google.com' }
      ]}
    ],
    sidebar: [
        '/',
        ['/guide/', 'Guide']
    ],
    lastUpdated: 'Last Updated',
    repo: 'billyc/tfresource',
    editLinks: true,
    editLinkText: "Edit this page on Github",
  }
}
