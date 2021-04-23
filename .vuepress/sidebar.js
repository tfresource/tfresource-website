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
          '/topics/Travel_Behavior_Definitions',
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
          '/topics/Destination_Choice_Models',
          '/topics/Mode_choice',
          '/topics/Network_assignment',
          '/topics/Dynamic_Traffic_Assignment',
          '/topics/Land_use_transport_modeling',
        ],
      },
      {
        title: 'Statistics / Econometrics',
        children: ['/topics/Regression_Analysis', 
                   '/topics/Choice_models'
                   '/topics/Iterative_Proportional_Fitting'
                  ],
      },
    ],
  },
  {
    title: 'Model Development',
    children: [
      {
        title: 'Model Building Blocks',
        children: [
          '/topics/Travel_Behavior_Definitions',
          '/topics/Travel_behavior',
          '/topics/Travel_surveys',
          '/topics/Highway_networks',
          '/topics/Traffic_Analysis_Zone',
          '/topics/Spatial_data',
          '/topics/Urban_Data',
          '/topics/Skim_Matrix',
          '/topics/Version_Control',
        ],
      },
      {
        title: 'Model Development Techniques',
        children: [
          '/topics/Model_calibration_and_validation',
          '/topics/Mode_choice.html#calibration',
          '/topics/Destination_Choice_Calibration_and_Validation',
        ],
      },
      {
        title: 'Mode-specific Considerations',
        children: [
          '/topics/Freight_modeling',
          '/topics/Public_transport_transit_modeling',
          '/topics/Autonomous_vehicles',
          '/topics/Land_use_transport_modeling',
          '/topics/Pedestrian_Route_Choice',
        ],
      },
    ],
  },
  {
    title: 'Model Application and Management',
    children: [
      '/topics/Statewide_models',
      '/topics/Strategic_Models',
      '/topics/Travel_Demand_and_Network_Model_Integration_Schemas',
      '/topics/Integrated_Travel_Demand_and_Network_Models',
      '/topics/Traffic_simulation_models',
    ],
  },
  {
    title: 'Travel Survey Manual',
    children: ['/surveymanual/'],
  },
]
