---
title: "Pivoting with select link analysis for small developments in project-level traffic forecasting"
categories:
  - Needs Review
---

Objective
---------

Changes in land development can lead to changes in traffic on road segments within or near a highway project. A regional travel forecasting model may be used to estimate those traffic changes, but such a model may not be sensitive enough to small changes in development. In addition, a regional travel forecasting model may be in substantial error on one or more pertinent road segments. However, if a “select link analysis” is available (or can be made available) for road segments, then it may be possible to find the incremental traffic increases (or decreases) in volumes on those road segments.  This technique applies to forecasts that are short-term. This technique applies to corridors.

Background
----------

A select link analysis gives the origin-destination flows through a single link; and it can be performed with a regional travel forecasting model. A select link analysis may be repeated for any number of road segments (links). In mathematical notation, a select link analysis reports the number for trips, T~ij~<sup>a</sup>, between zone i and zone j that pass through link a. The forecasted volume V<sup>a</sup> on link a is the sum of the whole select-link O-D table.

Often, the focus is upon a single zone’s (z) development. Therefore, the analysis needs to consider only those trips with either an origin or a destination in zone z, T~zj~<sup>a</sup> or T~ij~<sup>a</sup>, respectively. Any O-D pairs with a trivial amount of traffic can be ignored.

Furthermore, it is useful to define the fractional increase in trip origins from zone z, <sup>o</sup>f, and the fractional increase in trip destinations from zone z, <sup>d</sup>f. Once these fractional increases have been computed, the incremental increase in a link volume can be found by applying these fractions to the O-D matrix. That is,

$$Incremental\quad Volume\quad =\quad _{ }^{ o }{ f\sum _{ j-1 }^{ N }{ { T }_{ zj }^{ a } } +_{ }^{ d }{ f } }\sum _{ i=1 }^{ N }{ { T }_{ iz }^{ a } }$$

Select link analyses can also serve as a check on volumes estimates by other techniques and provide a better understanding for the reasons traffic might increase within a project.

Determination of fractional increases depends upon the type of development. A zone’s current trip generation may be obtained from a trip generation step within the regional model (best) or from the applications of trip generation rates from national sources such as NCHRP Report 716 or NCHRP Report 365 (second best). Pre-assignment time-of-day factors should be applied to production and attraction estimates to obtain origin and destination estimates. A default set of pre-assignment time-of-day factors may be found in NCHRP Report 716. Increases in trip generation may be found in the same way, or they can be determined by applying rates from ITE’s “Trip Generation.”

Guidelines
----------

If the regional travel forecasting model is in substantial error in the base year for the selected link’s volume, then, at the analyst’s judgment, the base-case O-D matrix may be scaled to match an existing ground count, C<sup>a</sup>. In which case, the scale factor, s, is carried through to the forecast.

$$Scaled\quad Incremental\quad Volume\quad =\quad _{ }^{ o }{ fs\sum _{ j-1 }^{ N }{ { T }_{ zj }^{ a } } +_{ }^{ d }{ fs } }\sum _{ i=1 }^{ N }{ { T }_{ iz }^{ a } }$$

The scale factor may be obtained by taking the ratio of the count to the base case forecasted volume, that is:

$$s=\frac { { C }_{ }^{ a } }{ { V }_{ }^{ a } }$$ .

Advice
------

This technique assumes that new traffic from a zone is distributed spatially the same way as existing traffic in the zone. If there is reason to believe that new and existing traffic will be considerably different in its origin-destination pattern, then this technique cannot be used.

This technique assumes that traffic re-routing will not occur due to the incremental change in land use. If substantial traffic re-routing could occur, then this technique cannot be used. Total volume forecasts from this technique should be compared with the capacity of road segment(s) to assure that the amount of traffic can be handled without the need for significant rerouting.

It is possible to extend the analysis to development in multiple zones by adding additional zones, z, within the same select link analysis. However, the technique can become unwieldy with too many zones.

The impact of decreases in development may be found by the same technique by using negative values for the “fractional increase”.

If the regional planning model has the capability, select zone analysis may accomplish the same thing. Select zone analysis gives the number of trips on each link that has an origin or destination at a given zone. However, select zone analysis can often be ambiguous as to directionality for links that are tangential to a zone.

If a scale factor is used to adjust the select link analysis to count value, it is best to use statistical techniques (averaging or time series analysis) to establish that count value rather than use a single piece of count data.

Items to Report
---------------

-   Geography: selected link(s) and zones with assumed increases in development.
-   Fractional increases in origins and destinations.
-   Volume increases on a road segments(s)

.

References
----------

NCHRP Report 765 and NCHRP Report 255

Guidebook on Statewide Travel Forecasting Models, 1999, p. 75.

