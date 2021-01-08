module.exports = [
  {
    title: 'About',
    children: [
      '/topics/Big_Picture',
      '/topics/00_Table_Contents',
      '/topics/About',
      '/topics/Community',
      '/topics/Contributing',
      '/topics/Style_Guide',
      '/topics/Contributing-Dev-Instructions',
      '/topics/Including_TRB_sponsored_research',
      '/changes',
      '/topics/',
    ],
  },
  {
    title: 'Principles and Concepts',
    children: [
      {
        title: 'Concepts of Travel Behavior',
        children: [
          '/topics/Accessibility',
          '/topics/Impedance',
          '/topics/Trip_based_models',
          '/topics/Activity_based_models',
        ],
      },
      {
        title: 'Models of Travel Behavior',
        children: [
          '/topics/Travel_behavior',
          '/topics/Trip_Generation',
          '/topics/Trip_distribution',
          '/topics/Mode_choice',
          '/topics/Destination_Choice_Models',
          '/topics/Network_assignment',
          '/topics/Land_use_transport_modeling',
        ],
      },
      {
        title: 'Statistics / Econometrics',
        children: ['/topics/Choice_models', '/topics/Regression_Analysis'],
      },
    ],
  },
  {
    title: 'Model Development',
    children: [
      {
        title: 'Model Building Blocks',
        children: [
          '/topics/Highway_networks',
          '/topics/Traffic_Analysis_Zone',
          '/topics/Spatial_data',
          '/topics/Urban_Data',
          '/topics/Skim_Matrix',
        ],
      },
      {
        title: 'Model Development Techniques',
        children: ['/topics/Model_calibration_and_validation'],
      },
      {
        title: 'Mode-specific Considerations',
        children: [
          '/topics/Freight_modeling',
          '/topics/Public_transport_transit_modeling',
          '/topics/Autonomous_vehicles',
          '/topics/Land_use_transport_modeling',
        ],
      },
    ],
  },
  {
    title: 'Model Application and Management',
    children: ['/topics/New_Starts', '/topics/Project_level_traffic_forecasting', '/topics/Sketch_planning_models'],
  },
  {
    title: 'Travel Survey Manual',
    children: ['/surveymanual/'],
  },
]
