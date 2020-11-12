---
title: "Trip-based models"
categories:
  - Network Assignment
  - Topic Circles
---

<PagesInCategory category="Trip Based Models" />

Trip-based models, also commonly known as *four-step models*, are so called because the primary unit of analysis is the [trip interchange](Trip_interchange) (i.e. origin-destination pair) between two geographic locations. The primary work done by trip-based models is to estimate all of the trips in a region, classify them by location and mode, and predict their use of transportation networks.

## Background

Trip-based models represent the current standard of practice in regional transportation planning. Originally (and still often) called *four-step models* because the principal sequence of equations are devoted to calculating:

1.  [Trip Generation](Trip_Generation),
2.  [Trip Distribution](Trip_distribution),
3.  [Mode Choice](Mode_choice), and
4.  [Network Assignment](Network_assignment)

(A trip distribution step is a form of a [spatial interaction models](https://tfresource.org/topics/Spatial_interaction_models.html).) The procedures themselves are borrowed from a variety of disciplines including statistics, physics, geography, economics and engineering. The procedures were assembled beginning in the 1950s to quantifiably predict demand for proposed transportation facilities. At the time, the primary inquiry was to understand the predicted use of new interstate highways in urban areas, but trip-based model application quickly spread to interpreting the share of demand between highway and transit facilities. Data versatility and computational transparency soon made trip-based models popular for both general transportation system planning and studying any transportation project involving a change in capacity or level-of-service.

## Current Practice

Trip-based models have advanced considerably in recent decades, belying the four-step label. In current practice, each of the modeling steps is expected to adhere to principles that ensure validity, equilibration and consistency between steps. For example: Trip Generation Models are expected to equilibrate their estimates of total trip attractions with the total trip productions. This principle carries through the remaining model steps to ensure that at each sequence all estimated trips are equal and consistently defined across purposes, geography and mode. Equilibration between modal demand and the resulting transportation system level-of-service also receives considerable attention. Trip-based models typically iterate globally several times, feeding back travel cost information in order to balance demand with the available supply.

Trip-based models are designed to handle any sized urban region. They are particularly appropriate for small-areas, through such techniques as windowing and sub-area focusing. Trip-based models are often preferred for rigorous evaluation of traffic impacts from land developments. Furthermore, trip-based models have been shown to be a good source of origin-destination tables that are required for traffic microsimulations.

## Latest Developments

Most recent advancements to trip-based models have occurred with the advent of [dynamic traffic assignment](Dynamic_Traffic_Assignment) (DTA) which requires greater attention to how trip-based demand occurs continuously over time throughout the day. The demand estimation components of trip-based models have matured, with most advanced practicing proceeding through the [Activity-Based Models](Activity_based_models) paradigm.

A large number of methods support the development, utilization and interpretation of trip-based models. These methods include origin-destination table refinement from traffic counts, select-link analysis, select-zone analysis, multiclass traffic assignment, [Time of Day Factoring](Time_of_Day_Factoring)/models, automobile availability models, automobile occupancy tables/models, OD table disaggregation, [delay estimation](Delay_Estimation_in_Trip_Based_Models), value of time in travel, and reliability impedances.

Statewide travel forecasting models in the US are predominantly trip-based (see [NCHRP Synthesis 358](http://onlinepubs.trb.org/onlinepubs/nchrp/nchrp_syn_358.pdf)).

## References

Most college-level transportation planning texts include a thorough discussion of trip-based modeling techniques and applications. There is a wealth of supporting technical documents, including [NCHRP Report 365](http://onlinepubs.trb.org/onlinepubs/nchrp/nchrp_rpt_365.pdf), [NCHRP Report 716](http://onlinepubs.trb.org/onlinepubs/nchrp/nchrp_rpt_716.pdf), the forthcoming NCHRP Report 765 (replaces NCHRP Report 255), ITE's "Trip Generation", and FHWA’s “Travel Model Validation and Reasonableness Checking Manual.”

## Related Content

[Trip Generation](Trip_Generation)

[Trip Distribution](Trip_distribution)

[Mode Choice](Mode_choice)

[Network Assignment](Network_assignment)

