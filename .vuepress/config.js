const sidebarEntries = require('./sidebar')

module.exports = {
  evergreen: true,
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/pyodide/v0.22.0/full/pyodide.js' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-2DCTYTB7FB'}],
    ['script', "window.dataLayer=window.dataLayer|| []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2DCTYTB7FB');"],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' }],
    ['link', { rel: 'icon', href: '/tiny-logo.png' }],
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
    ['meta', { property: 'og:title', content: 'Travel Forecasting Resource' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Travel forecasting, explained. A collection of best practices and practical know-how for learning about, creating, and using travel forecasting models.',
      },
    ],
    ['meta', { property: 'og:image', content: 'https://tfresource.org/og-image.jpg' }],
    ['meta', { property: 'og:url', content: 'https://tfresource.org' }],
  ],
  markdown: {
    extendMarkdown: (md) => {
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
    // ['vuepress-plugin-minimal-analytics', { ga: 'G-2DCTYTB7FB' }],
  ],
  title: 'TF Resource',
  themeConfig: {
    repo: 'tfresource/website',
    docsBranch: 'source',
    displayAllHeaders: false,
    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',
    logo: '/tfr-logo-title.png',
    sidebarDepth: 0,
    sidebar: sidebarEntries,
    nav: [
      { text: 'Travel Forecasting', link: '/topics/00_Table_Contents.md' },
      //{ text: 'Survey Manual', link: '/surveymanual/' },
      {
        text: 'About',
        items: [{ text: 'About TF-Resource', link: '/topics/About' }],
      },
    ],
  },
}
