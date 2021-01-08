---
title: "Zones"
categories:
  - Destination Choice Models
  - Trip Based Models
  - Activity-based Models
---

In most travel models, the geographic area being analyzed is split into many smaller spatial units or zones. These ==TAZ==s (which stands for travel, transportation, or traffic analysis zones) may have several uses, depending on how a travel model is structured, including: storing information about the people and places in each zone, serving as origins and destinations of trips, and calculating travel times between (and within) zones. There are no specific requirements for how TAZs must be defined or about their size or number, and some models may use multiple zonal hierarchies.

## How TAZs are used

TAZs are usually used to organize and store [spatial data](Spatial_data) that are used as inputs to the travel model, including: demographic and socio-economic information about the people and households residing in each zone; land use and employment information about the places and the people working and studying in each zone; information about the transportation system within each zone (especially related to supply, cost, or time); and other zonal measures of the built environment.

In [trip-based models](Trip_based_models), TAZs are critical elements in the modeling process and are actually the spatial unit at which most calculations take place. [Trip generation models](Trip_Generation) predict the number of trips produced by or attracted to each zone, and [trip distribution models](Trip_distribution) (or [destination choice models](Destination_Choice_Models)) link zonal trip productions and attractions. These steps generate trip tables (matrices) where each cell represents a flow of trips between two zones (often segmented by purpose and mode). [Trip distribution](Trip_distribution) and [mode choice](Mode_choice) models often use similar [skim matrices](Skim_Matrix), which contain zone-to-zone measures of [impedances](Impedance) like travel times. TAZs are the smallest available spatial unit when describing model outputs.

In [activity-based models](Activity_based_models), the sub-models operate on individual people and trips instead of zones, yet TAZs are still very important for many of the same reasons as in trip-based models, such as for structuring spatial input data, performing intermediate calculations about impedances, and spatially summarizing model outputs.

## Zonal sizes and structures

TAZs can be of any shape or size, but some choices make it easier to assemble input data and perform model calculations. The borders of zones usually follow streets and roads and contain one or more blocks of land, so that the [street network](Highway_networks) defines the borders of zones. The shapes of zones should usually be compact and contiguous—avoiding narrow strip, horseshoe, or doughnut shapes—because [skim matrices](Skim_Matrix) assume the same travel time or [impedance](Impedance) from every point in a particular zone. Also, the land uses within zones should often be fairly homogenous, so that single values for certain zonal characteristics can more accurately characterize the contents of that zone. In the U.S., it is often convenient for zones to be consistent with (containing or nested within) Census block groups or tracts, since the demographic and socio-economic data uses in travel modeling is frequently obtained from such sources. However, it is possible for zones to be as small as individual parcels or buildings.

The number of zones in an area depends upon the size of the geographic area being modeled, the desired level of spatial detail, the availability of input data, and the sophistication of the travel model. In general, smaller and more numerous zones provide a greater sensitivity to small-scale variations in the built environment and transportation system, can improve [accessibility](Accessibility) calculations for short-distance modes like walking and walking to transit, and reduces aggregation bias. But, a fine-grained level of spatial detail requires sufficient input data and results in greater computational burden and longer model run times. In particular, the size of trip tables and [skim matrices](Skim_Matrix) grows exponentially with the number of zones. In the U.S., many regional transportation planning models contain in the range of 500 to 5,000 TAZs. 

Some travel models contain multiple zonal structures, each for different modeling tasks. For example, several thousand TAZs could be used to represent automobile travel times, whereas several tens-of-thousands of “microzones” could be to calculate travel times by walking and bicycling.

Travel modeling systems could use spatial analysis units that are of a uniform shape and size, such as squares or hexagons. However, the use of uniform grid cells or hexagonal-shaped zones (as opposed to network-bounded TAZs) is much less common in practice.

## References

[Content Charrette: Destination Choice Models](Content_Charrette_Destination_Choice_Models)

Castiglione, J., Bradley, M., & Gliebe, J. (2015). *Activity-based travel demand models: A primer* (SHRP 2 Report SR-C46-RR-1). Transportation Research Board. https://doi.org/10.17226/22357

Miller, H. J., & Shih-Lung S. (2001). *Geographic information systems for transportation*. Oxford University Press.

Ortúzar, J. d. D., & Willumsen, L. G. (2011). *Modelling transport* (4th ed.). Wiley.
