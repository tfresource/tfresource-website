---
title: "OD table refinements in project-level traffic forecasting"
categories:
  - Needs Review
---

Objective
=========

An O-D table refinement improves the fit of a traffic model to ground counts in the base year by making systematic empirical adjustments to an O-D table that had been previously computed from behavioral principles or obtained through a survey. An O-D table refinement has the potential to smooth-out irregularities in traffic counts while achieving a perfectly balanced set of forecasted volumes. There are a large number of methods for refining an O-D table. Refinements can be in the form of additive adjustments or multiplicative adjustments. When creating refinements it is important to preserve as much of the underlying structure of the original O-D table as possible.

This technique applies to short-term and interim forecasts. The technique applies to corridor, small-area and wide area geographical scopes.

Background
==========

O-D table refinement uses the concept of O-D table estimation with traffic counts. Refinements may be static or dynamic; this section emphasizes static refinements. There are many different methods in the published literature, but they all share certain common elements. An O-D table estimation from traffic counts requires three important data items.

-   *Seed O-D Table.* A seed O-D table is an approximation of the final O-D table. The seed O-D table can be derived from behavioral principles, such as those embedded in a 4-step model, or it can be obtained from surveys, such as home-interviews or vehicle re-identification studies or both. The seed O-D table gives a rough shape to the final O-D matrix. It is desirable that certain properties of the seed O-D table, such as average trip length, should be retained throughout the estimation process.
-   *Directional Traffic Counts.* Traffic counts are needed by direction and for the time period of the forecast. There should be a sufficient number of counts to at least establish row and column factors for the O-D table. That is, the number of counts should be greater than twice the number of zones and external stations. Traffic counts should be provided for all roads leading in or out of the study area.
-   *Select Link Analyses on All Link Directions with Counts.* A set of select link analyses is a required input for the estimation. Except for very small networks with all-or-nothing traffic assignments, the select link analyses must be performed within travel forecasting software. As mentioned in [Pivoting with select link analysis for small developments](Pivoting_with_select_link_analysis_for_small_developments_in_project-level_traffic_forecasting) a select link analysis finds the number of trips between zones i and j that pass through link direction a, ${ T }_{ ij }^{ a }$ . Knowing the total number of trips between zones i and j, it is possible to compute the proportion of trips between zones i and j that use link direction a, ${ p }_{ ij }^{ a }$. These proportions are 0 or 1 for an all-or-nothing traffic assignment, but can be any number between 0 and 1 for a multipath traffic assignment, including an equilibrium traffic assignment.

The estimation process attempts to find a balance between distortions to the seed O-D table and mismatches to the traffic counts. One way of achieving this balance is through a minimization process, such as illustrated in this equation:

$$min\quad P\quad =\sum _{ a=1 }^{ A }{ { w }_{ }^{ a }{ \left( { c }_{ }^{ a }-s\sum _{ i=1 }^{ N }{ \sum _{ j=1 }^{ N }{ { p }_{ ij }^{ a }{ T }_{ ij }^{ } } } \right) }_{ }^{ 2 } } +z\sum _{ i=1 }^{ N }{ \sum _{ j=1 }^{ N }{ { \left( { T }_{ ij }^{ * }-s{ T }_{ ij }^{ } \right) }_{ }^{ 2 } } }$$

where w^a^ are link weights, z is a O-D table weight, s is a scale factor, ${ T }_{ ij }^{ * }$ is the seed O-D table, ${ T }_{ ij }^{   }$ is the estimated O-D table, and everything else has been defined previously. Estimated O-D flows are constrained to be non-negative. Link weights allow the analyst to emphasize or deemphasize certain counts, perhaps because counts can be uneven in terms of quality. The OD table weight is used to control the amount of distortion in the O-D table, which influences the closeness of fit to the ground counts.

Once the estimated O-D table has been found, corrections can be expressed additively,

$${ R }_{ ij }^{ }={ T }_{ ij }^{ }-{ T }_{ ij }^{ * }$$

or multiplicatively,

$${ K }_{ ij }^{ }=\frac { { T }_{ ij }^{ } }{ { T }_{ ij }^{ * } }$$

After performing a forecast with a travel forecasting model, refinements can be reintroduced into the forecast by modifying the forecasted O-D additively or multiplicatively.

Dynamic refinements are similar, but add the time dimension to a static table. Dynamic refinements require traffic counts for each of numerous time periods that are used within a dynamic traffic assignment (DTA), as well as a dynamic seed O-D table.

An important detail with O-D table refinements is the need for feedback between equilibrium traffic assignment and the estimation process. This is often referred to in the literature as a “bilevel optimization”, since some equilibrium traffic assignment methods also use optimization theory. Practically speaking, “bilevel optimization” increases the computational burden of the estimation process, but does not place any significant additional requirement on the analyst.

Guidelines
==========

Since O-D table refinements, for the most part, require specialized software, the software documentation should be consulted to determine input requirements and interpretations of outputs. However, there are several guidelines for O-D table estimation that generally apply.

-   All counts must be directional. Bidirectional counts need to be split by direction using local knowledge.
-   All counts must be for the time period of the forecast. If necessary, daily counts can be factored into hourly estimated counts by applying post-assignment time-of-day factors, such as those found in NCHRP Report 765. However, actual counts for the time period of the forecast are preferred to factored counts.
-   Traffic counts should be provided at all external stations. If actual counts are not available, then it may be necessary to approximate those counts by (a) adapting counts from a nearby count station on the same road or (b) assuming a count value based on typical values for roads of the same functional class and capacity. Counts that are approximate should be assigned a lower weight in the estimation.
-   There must be a sufficient number of counts. The exact number of counts depends on where they are located, but a minimum for good results is twice the number of zones plus external stations.
-   Traffic counts should be spread throughout the network.
-   Counts should be reasonably balanced (that is, conservation of flow should be approximately correct at all junctions.) In addition, counts which are inconsistent with surrounding counts should be removed.
-   A target should be established for the desired deviation between counts and estimated volumes. This target should be no smaller than the error in a traffic count (see [Errors and variability in volume data](Errors_and_variability_in_volume_data_for_project-level_traffic_forecasts)). Weighting should be adjusted (such as the trip table weight, z) to attain this target. Trial estimations will likely be necessary, because the relationship between weights and deviations cannot be known in advance.
-   A decision must be made as to whether the refinement will be additive or multiplicative, if the software allows a choice.
-   The resulting O-D table needs to be inspected for reasonableness. Volumes on links without counts, in particular, need to be inspected for reasonableness. Average trip length should be inspected for reasonableness. If available, delays and queue lengths could be inspected for reasonableness.

Advice
======

O-D table refinements are preferred over screenline refinements, because they can involve many more traffic counts, and thus, the adjusted screenline volumes are based on a more comprehensive set of information.

Large O-D table refinements can be very computational. It may take hours or days to find a solution on a fast desktop computer for large O-D tables and large networks.

It is recommended that old refinements be updated at intervals of no more than five years.

Items to Report
===============

-   Refinement adjustments (computer file)
-   Refinement table (computer file)
-   Report on the stability of O-D table and assignment properties
-   Goodness of fit to ground counts

References
==========

NCHRP Report 765.

