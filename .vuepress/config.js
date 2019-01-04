module.exports = {
  head: [
      ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,700'}],
      ['link', {rel: 'icon', href: '/tiny-logo.png'}]
  ],
  title: 'tf resource',
  themeConfig: {
    displayAllHeaders: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Topics', link: '/guide/' },
      { text: 'Resources', items: [
          { text: 'Google', link: 'https://google.com' },
          { text: 'Google2', link: 'https://google.com/' }
      ]}
    ],
    sidebar: [
        {
            title: 'Guide',
            children: [
                '/guide/', '/guide/Pricing', '/guide/Trip Generation', '/guide/MATSim'
            ]
        },
        {
            title: 'Models',
            children: [
                '/guide/', '/guide/Pricing', '/guide/Trip Generation', '/guide/MATSim'
            ]
        },
        {
            title: 'Data',
            children: [
                '/guide/', '/guide/Pricing', '/guide/Trip Generation', '/guide/MATSim'
            ]
        },
        {
            title: 'User Recipes',
            children: [
                '/guide/', '/guide/Pricing', '/guide/Trip Generation', '/guide/MATSim'
            ]
        }
    ],
    lastUpdated: 'Last Updated',
    repo: 'billyc/tfresource',
    editLinks: true,
    editLinkText: "Edit this page on Github",
  }
}
