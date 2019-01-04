module.exports = {
  title: 'TF Resource',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Topics', link: '/Models/' },
      { text: 'Resources', items: [
          { text: 'Google', link: 'https://google.com' },
          { text: 'Google2', link: 'https://google.com' }
      ]}
    ],
    sidebar: [
        '/',
        '/Models/'
    ],
    lastUpdated: 'Last Updated',
    repo: 'billyc/tfresource',
    editLinks: true,
    editLinkText: "Edit this page on Github",
  }
}
