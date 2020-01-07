---
title: "Highway noise analysis in project-level traffic forecasting"
categories:
  - Needs Review
---

Background
----------

Highway traffic noise analysis is usually performed with FHWA’s Traffic Noise Model (TNM). The TNM has five built-in vehicle classes that are roughly compatible with the Quick Response Freight Manual: motorcycles, automobiles + light trucks, medium trucks, heavy trucks, and buses. Traffic inputs consists of hourly volumes and speeds for each class for each road segment. Segments in the TNM are directional, so traffic volumes must also be directional. See [Temporal refinements and directional split refinements](Temporal_refinements_and_directional_split_refinements_in_project_level_traffic_forecasting) for a recommended procedure for creating directional splits by time of day from bidirectional forecasts. There also may be a need for traffic volumes by lane for input to the TNM; however, traffic volumes by lane on multilane facilities are not commonly available as outputs from traffic forecasting methodologies. Other data sources must be used.

Guidelines
----------

TNM also requires estimates of speed. It is recommended that speeds be obtained from post processing, rather than taken directly from travel forecasting software, unless the travel model derives its speeds from operational analysis procedures from the Highway Capacity Manual (or similar quality traffic flow relationships). Vehicle class refinement may be necessary to forecast traffic volumes for each of the five TNM standard classes or for any special classes. See [Vehicle mix refinements](Vehicle_mix_refinements_in_project_level_traffic_forecasting) and [Refining speeds for evaluation](Refining_speeds_for_evaluation_in_project_level_traffic_forecasting) for details. It is further recommended that classification counts include motorcycles (FHWA vehicle type 1).

Noise standards are in units of LEQ in FHWA’s Noise Abatement Criteria. Certain noise calculations available in the TNM, specifically L~dn~, and L~den~, may require separate volume forecasts for daytime, evening, and nighttime. The use of these noise measures would be considered unusual in some states. Evening is defined as the hours between 7PM and 10 PM. Nighttime is defined as the hours between 10 PM and 7 AM. Unless the travel forecast is very complete in its treatment of times of day, there will be a need to perform post-assignment time-of-day factoring to convert 24-hour volumes to two or three of these time periods. See [Temporal refinements and directional split refinements](Temporal_refinements_and_directional_split_refinements_in_project_level_traffic_forecasting) for details. Speeds must also be estimated for multihour periods of time. See [Speed and travel time refinements](Speed_and_travel_time_refinements_in_project_level_traffic_forecasting).

References
----------

