---
title: "Screenline refinements in project-level traffic forecasting"
categories:
  - Needs Review
---

Objective
=========

Some traffic assignment methods are poor at forecasting traffic volumes on smaller highways that are operating well under capacity. It is possible that traffic intended for such small roads may be inadvertently allocated to parallel highways. It is also possible for a travel forecasting model to overestimate the amount of traffic on less-traveled highways because capacity restraints are ineffective, especially when the travel forecasting model is using elementary VDFs (volume-delay functions) for travel time estimates. Screenline refinement techniques reallocate traffic across approximately parallel roads in accordance with historical data.

Background
==========

Screenline refinement techniques were first introduced by NCHRP Report 255. These techniques were abridged for NCHRP Report 765. A spreadsheet is available for performing direct screenline refinements by adjusting volumes. These guidelines further abridge what is presented in NCHRP Report 765 and introduce certain enhancements.

Guidelines
==========

Screenline volumes should be adjusted using synthetic O-D table estimation, rather than direct adjustment of volumes, where possible. See [OD table refinements](OD_table_refinements_in_project_level_traffic_forecasting) for details.

When synthetic O-D table estimation cannot be performed, then screenline forecasts may be refined by making either multiplicative or additive adjustments to future year forecasted volumes.
Screenline refinement requires three types of input for each highway i crossing the screenline:

-   Base year counts, *C~i~*;
-   Base year forecast volumes, *Ab~i~*; and
-   Future year forecast volumes, *Af~i~*;

in order to find refined future year volumes, *RAf~i~*. There may be a need to interpolate two forecasts for different years to obtain a base year forecast that matches the correct year of the counts. There might also be a need to adjust counts to the base year using a trend method, since counts can vary as to the year they are collected.

In order to make an additive adjustment for highway i, then

$$RA{ f }_{ i }^{ }=A{ f }_{ i }^{ }-\left( { C }_{ i }^{ }-{ Ab }_{ i }^{ } \right)$$

And, in order to make a multiplicative adjustment for highway i, then

$$RA{ f }_{ i }^{ }=A{ f }_{ i }^{ }\frac { { C }_{ i }^{ } }{ { Ab }_{ i }^{ } } $$ .

There is no absolute requirement that total screenline volume for a future year be held constant throughout the refinement. However, controlling the total refined volume so that it matches total screenline future year volume may be necessary when there is a strong desire to maintain consistency with the travel forecasting model. Controlling for total forecast year volume simply involves factoring all screenline refined volumes by the ratio of total forecast year volume to the total of screenline refined volume.

Refined screenline volumes should be reported to the nearest whole vehicle.

Advice
======

Where long parallel routes exist, where those route connect essentially the same origins and destination, where congestion exists and where drivers have a reasonable choice between routes, Wardrop’s first principle suggests that the travel times for the same O-D pair are close-to-equal regardless of the chosen route. Thus, travel times between various points on either side of a screenline should be calculated to determine whether Wardrop’s first principle is approximately satisfied. Judgment can be used to adjust screenline volumes to better match Wardrop’s first principle, where warranted. Travel time estimation should be done with operational analysis procedures from the 2010 Highway Capacity Manual or similar quality methods. Simple volume-delay functions should be avoided.

Base case assigned volumes should be under the maximum desirable deviation curve from NCHRP Report 255 (see [Half-lane rule and extensions](Half_lane_rule_and_extensions_in_project_level_traffic_forecasting)) prior to performing screenline refinement.

NCHRP Report 255 recommends that screenlines have between 3 and 7 crossing highways for this technique to be most effective. Screenlines should be shorter than 2 miles (urban areas) and 5 miles (rural areas) in length.

Capacity should not be used as a direct variable for adjusting screenline volumes. Capacity is an input to travel time calculations, and travel time may be used to adjust screenline volumes according to Wardrop’s first principle.

However, refined forecasted volumes should be compared with capacities. Any forecasted volume should not exceed capacity over short intervals of time (such as one hour or less). If a refined forecasted volume exceeds capacity, then it should be reduced to capacity and the excess volume should be apportioned to other highways of the screenline, considering the amount of volume already allocated to those highways for the future year.

The analyst must determine whether an additive or a multiplicative adjustment is appropriate. The results of these two strategies should not be averaged together. If any additive adjustment would create a negative refined volume, then multiplicative adjustments must be used.

The analyst should exercise judgment when there are substantial changes in land use near the screenline. Select link analysis may be helpful in determining how adjustments may be made.

Example
=======

Highway AA crosses a screenline along with Highway BB and Highway CC. These three highways are roughly parallel to each other and are spaced about 1 mile apart. Thus, under congested conditions, they would each serve as a relief road for the others. Highway AA is now a two-lane road, and both Highways BB and CC are four-lane roads. Capacity is constrained by signals along the three roads, where each approach at each intersection has roughly equal priority. Highway AA is slated to be rebuilt as a four-lane road. Highways AA, BB and CC will get modest access management treatments. The first table contains data acquired for the base and forecast years and the second table contains the necessary calculations.

|                                  | Highway AA | Highway BB | Highway CC | Total |
|----------------------------------|------------|------------|------------|-------|
| Base Year Traffic Count          | 13825      | 23567      | 19678      | 55070 |
| Base Year Forecast               | 11260      | 26944      | 23351      | 61555 |
| Forecast Year Traffic from Model | 13534      | 33421      | 28077      | 75032 |
| Base Year Capacity, vph          | 800        | 1700       | 1700       |       |
| Future year Capacity             | 1900       | 1900       | 1900       |       |
| Peak Hour K Factor, PM Peak      | 0.073      | 0.073      | 0.073      |       |

|                                    | Highway AA | Highway BB | Highway CC | Total |
|------------------------------------|------------|------------|------------|-------|
| Ratio, Count to Base Year Forecast | 1.2278     | 0.8747     | 0.8427     |       |
| Difference, Count – Base Year      | 2565       | -3377      | -3673      |       |
| Adjusted Forecast, Ratios          | 16617      | 29232      | 23661      |       |
| Adjusted Forecast, Differences     | 16099      | 30044      | 24404      |       |
| Estimated Hourly Forecast, Ratios  | 1213       | 2134       | 1727       |       |
| Excess Peak Hour Volume            | 0          | 234        | 0          | 234   |
| Reallocated Peak Hour Volume       | 97         | -234       | 137        | 234   |
| Future Year Peak Hour Forecast     | 1310       | 1900       | 1864       |       |

This example assumes that the base year for the forecast is the same as the year of the counts. The counts and the forecast volumes for the base year are compared by taking their ratios and their differences. It is assumed that the base-year counts are perfect and the base-year forecast volumes are inaccurate, and it is assumed that this same inaccuracy will also be present in the future-year forecast. All differences between counts and base-year forecast volumes fall under the “maximum desirable deviation” curve (see [Half-lane rule and extensions](Half_lane_rule_and_extensions_in_project_level_traffic_forecasting)). There is a total screenline error of about 10%, which also falls under this curve. There are no obvious reasons for choosing ratios instead of differences for the remainder of the procedure. Ratios could be problematic if any particular forecast volume was very small (or zero). Differences could be problematic if any particular count was very small. In this case, the analyst chose ratios. Applying the base-year ratios to the future year raw forecast gives the adjusted forecast for the future year. Those future year forecasts need to be checked against capacity for any peak or near-peak hour. Today, when the roads are only lightly congested in the peak hour, the time-of-day adjustment factor (K) is 0.73 for all roads. Applying this factor gives the estimated hourly future-year forecast volumes. Highway BB has too much traffic. This excess traffic is reallocated to Highways AA and CC in proportion to their already forecasted hourly volume. The last line of the second table gives the final forecast for the whole screenline during the peak hour.

Items to Report
===============

-   Adjusted future year volumes on all highways crossing the screenline.

References
==========

NCHRP Report 765.

