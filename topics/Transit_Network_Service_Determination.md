---
title: "Transit Network Service Determination"
categories:
  - Needs Review
---

The determination of the transit network service is undertaken sometime after transit networks are completed and before mode choice is evaluated. Although many commercial packages come with many default values, it can be one of the most time-consuming and artful components of [Public Transit modeling](Public_Transport_Modeling).

There are generally two steps to determining the quality of transit service between an origin and destination:

1.  Route Enumeration / Building Routes: "what paths are out there?"
2.  Route Evaluation: "how good/bad are those paths?"

Transit Route Enumeration
-------------------------

Transit Route Evaluation
------------------------

Network Skimming is the process of determining an attribute that one would experiences when traveling from point A to B. Network skimming is often segmented by travel mode and time of day, but can also be segmented by trip purpose or any other variable that would cause a difference in the experienced value.

The results of the variables skimmed from the transit network are often called [Skim Matrices](Skim_Matrix), which are origin zone-to-destination zone matrices, one per segmented attribute (i.e. far via local bus from Origin to Destination). Skim matrices for all modes serve as inputs to the [mode choice](Mode_choice) models.

Often the variables that are skimmed are the result of the "best path" (or least-cost path) from Origin to Destination. When multipath techniques are used, a weighted composite value of the variable that represents all the enumerated paths is often used instead.

Variables typically skimmed for network performance for transit modes include:

-   initial and transfer wait times
-   number of transfers
-   access and egress walk time, distance and quality (i.e. slope, etc)
-   access and egress drive time, distance, quality, and costs
-   in vehicle time (sometimes segmented seated or crowded in vehicle time)

Implementation Considerations
-----------------------------

It is important to understand that each commercial travel modeling package has a wide variety of methodologies that they use to build transit paths. It is one of the biggest areas of differences among the packages. Understanding the defaults and methodologies of one package will not likely translate to another package.

-   Calibration of [Transit path parameters](Transit_Path_Parameters), often using an [on-board survey](on_board_survey)
-   Multi-path (stochastic) versus best-path
-   Schedule-based versus headway-based versus combination

Typical Quality Control Checks
------------------------------

-   Map of TAZs to Access-Stations (and visa-versa for egress)
-   Map of zonal-access-sheds from Stations
-   Travel time, cost, etc (spilt out as detailed as possible) for specific Origins or Destinations, mapped.
-   Detailed confirmation of reasonableness of path from handful of representative OD pairs (have your office all check their commute, etc)

------------------------------------------------------------------------

