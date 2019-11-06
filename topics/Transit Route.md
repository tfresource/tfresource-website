---
title: "Transit Route"
categories:
  - Needs Review
  - Public Transport (Transit) Modeling
  - Transportation Networks
---

Transit routes represent how [Transit Vehicles](Transit_Vehicles) traverse the network. Transit route characteristics include:

1.  Route name: Often separated by direction (i.e. Inbound or Outbound or similar). One example would be MUNI\_30X\_IN to represent the SFMTA Muni Route, 30-Express, in the inbound direction.
2.  Directions: where the vehicle drives, represented by a list of nodes or links
3.  Stopping Pattern: Often embedded in the directions, are notes about what nodes constitute transit stops. In many systems, transit stops can be restricted to only allow alightings, or only allow boardings.
4.  [Transit Vehicles](Transit_Vehicles) type
5.  [Transit Route Frequency](Transit_Route_Frequency), which is often designated by time period can be represented by a schedule or by an average headway

Some other common attributes of transit routes include:

1.  special instructions about how travel time is calculated, including the delays associated with making a stop
2.  transit agency, which can be used to help determine fares

------------------------------------------------------------------------

