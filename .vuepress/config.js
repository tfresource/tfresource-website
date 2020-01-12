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
        title: 'About TFR',
        children: [
          '/topics/About',
          '/topics/Governance',
          '/topics/Community',
          '/topics/Content_and_Membership_Council',
        ]
      },
      {
        title: 'Activity Based Modeling',
        children: [
          '/topics/Activity_based_models',
          '/topics/Tour_based_models',
        ]
      },
      {
        title: 'Autonomous Vehicles',
        children: [
          '/topics/Autonomous_vehicles',
          '/topics/Autonomous_vehicles_Behavioral_considerations',
          '/topics/Autonomous_vehicles_Early_applications',
          '/topics/Autonomous_vehicles_Forecasting',
          '/topics/Autonomous_vehicles_Lexicon',
          '/topics/Autonomous_vehicles_Modeling_frameworks',
          '/topics/Autonomous_vehicles_planning_and_policy_context',
          '/topics/Autonomous_vehicles_use_cases',
        ]
      },
      {
        title: 'Choice Models',
        children: [
          '/topics/Destination_Choice_Set_Formation',
          '/topics/Urban_data',
          '/topics/Path_Choice_Mode_choice_Consistency',
        ]
      },
      {
        title: 'Destination Choice Models',
        children: [
          '/topics/Destination_Choice_Models',
        ]
      },
      {
        title: 'Dynamic Network Models',
        children: [
          '/topics/Benefits_of_dynamic_network_models',
        ]
      },
      {
        title: 'Evaluation and Performance',
        children: [
          '/topics/Evaluation_and_performance',
          '/topics/Plausibility_Assessment_of_a_Travel_Forecast',
          '/topics/Two_Lane_Highways',
        ]
      },
      {
        title: 'Freight Modeling',
        children: [
          '/topics/Freight_modeling',
          '/topics/Tour_based_and_supply_chain_modeling_for_freight',
          '/topics/Statewide_Freight_Modeling',
          '/topics/Commercial_vehicle_surveys',
        ]
      },
      {
        title: 'Land Use Transport Modeling',
        children: [
          '/topics/Land_use_transport_modeling',
          '/topics/Accessibilities',
          '/topics/Population_Synthesis',
          '/topics/Urban_data',
        ]
      },
      {
        title: 'Mode Choice',
        children: [
          '/topics/Mode_Choice_Behavior',
          '/topics/Path_Choice_Mode_choice_Consistency',
        ]
      },
      {
        title: 'Model Calibration and Validation',
        children: [
          '/topics/Model_calibration_and_validation',
          '/topics/Empirical_Accuracy_of_Travel_Forecasts',
        ]
      },
      {
        title: 'Network Assignment',
        children: [
          '/topics/Network_assignment',
          '/topics/Path_Finding_Algorithm',
          '/topics/Dynamic_Traffic_Assignment',
          '/topics/Transit_Network_Assignment',
          '/topics/User_Equilibrium',
        ]
      },
      {
        title: 'New Starts',
        children: [
          '/topics/New_Starts',
          '/topics/STOPS',
          '/topics/Dynamic_Traffic_Assignment',
          '/topics/Transit_Network_Assignment',
          '/topics/Travel_Forecasting_for_the_Capital_Investment_Grant_Program',
        ]
      },
      {
        title: 'Project-Level Traffic Forecasting',
        children: [
          '/topics/Project_level_traffic_forecasting',
        ]
      },
      {
        title: 'Public Transport (Transit) Modeling',
        children: [
          '/topics/Public_transport_transit_modeling',
          '/topics/Transit_Network_Assignment',
          '/topics/Transit_Data',
        ]
      },
      {
        title: 'Sketch Planning Models',
        children: [
          '/topics/Sketch_planning_models',
        ]
      },
      {
        title: 'Spatial Interaction Models',
        children: [
          '/topics/Spatial_interaction_models',
          '/topics/Destination_Choice_Models',
        ]
      },
      {
        title: 'Statewide Models',
        children: [
          '/topics/Statewide_models',
          '/topics/Current_Status_of_Statewide_Models',
          '/topics/Long_distance_Travel',
          '/topics/Statewide_Freight_Modeling'
        ]
      },
      {
        title: 'Travel Behavior',
        children: [
          '/topics/Travel_behavior',
        ]
      },
      {
        title: 'Trip-Based Models',
        children: [
          '/topics/Trip_based_models',
        ]
      },
    ],
  },
}
