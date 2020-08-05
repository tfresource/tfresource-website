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
    ['minimal-analytics', { ga: 'UA-157455011-1' }],
  ],
  title: 'TF Resource',
  themeConfig: {
    repo: 'tfresource/website',
    docsBranch: 'source',
    displayAllHeaders: false,
    editLinks: true,
    editLinkText: 'Edit This Page »',
    lastUpdated: 'Last Updated',
    logo: '/tfr-logo-title.png',
    sidebarDepth: 0,
    nav: [
      { text: 'Travel Forecasting', link: '/topics/' },
      { text: 'Survey Manual', link: '/surveymanual/' },
      {
        text: 'About',
        items: [
          { text: 'About TF-Resource', link: '/topics/About' },
          // , { text: 'How to Contribute', link: '/thing/' }
        ],
      },
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
              { text: 'TF-Resource OG', link: 'http://old.tfresource.org' },
              {
                text: 'Wikipedia Travel Forecasting',
                link: 'https://en.wikipedia.org/wiki/Transportation_forecasting',
              },
              { text: 'TFR on Github', link: 'https://github.com/tfresource' },
            ],
          },
        ],
      },
      */
    ],
    sidebar: [
      {
        title: 'For Reviewers',
        children: [
          '/topics/',
          '/topics/TF_Resource_Volunteers',
          '/topics/Contributing',
          '/topics/Tips-for-reviewing-pages',
          '/topics/Contributing-Dev-Instructions',
        ],
      },
      {
        title: 'Models and Modeling',
        children: [
          '/topics/Big_Picture',
          '/topics/Activity_based_models',
          '/topics/Destination_Choice_Models',
          '/topics/Freight_modeling',
          '/topics/Land_use_transport_modeling',
          '/topics/Mode_choice',
          '/topics/Network_assignment',
          '/topics/Public_transport_transit_modeling',
          '/topics/Sketch_planning_models',
          '/topics/Spatial_interaction_models',
          '/topics/Statewide_models',
          '/topics/Travel_behavior',
          '/topics/Trip_based_models',
        ],
      },
      {
        title: 'Forecasting Topics',
        children: [
          '/topics/Autonomous_vehicles',
          '/topics/Benefits_of_dynamic_network_models',
          '/topics/Model_calibration_and_validation',
          '/topics/New_Starts',
          '/topics/Project_level_traffic_forecasting',
        ],
      },
      {
        title: 'Survey Manual',
        children: ['/surveymanual/'],
      },
      {
        title: 'About TFR',
        children: [
          '/topics/About',
          '/topics/Governance',
          '/topics/Community',
          '/topics/Content_and_Membership_Council',
        ],
      },
    ],
  },
}
