---
title: "Active transport (non-motorized) modeling"
categories:
  - Topic Circles
---

## Overview

As part of their transportation planning mandates, metropolitan planning organizations (MPOs) operate regional travel demand forecasting models (TDMs) that predict travel by various modes as an output of different land use and transportation project scenarios. Originally developed to plan for growing automobile travel, such tools did not begin to consider non-motorized and active transportation modes (walking and bicycling) until the late 1980s and early 1990s, due to limitations with collecting non-motorized trips in household travel surveys and the challenges of representing such trips in a network of major roads and large zones. Throughout the 1990s and continuing into the 2000s, increased attention to relationships between and policies involving travel demand and the built environment led to a gradual increase in the representation of active transportation models (and relevant measures of the built environment) within regional TDMs. In 2005, about half of large MPOs (54%) modeled non-motorized traffic in some way. By 2017, three-quarters (75%) of large MPOs modeled non-motorized travel, and more than two-thirds (69%) of those distinguished between walking and bicycling. 

There are many benefits to including active transportation and non-motorized modes in travel forecasting tools. Forecasts of walking and bicycling amounts may be useful for: active transportation project prioritization, scenario planning, corridor planning, infrastructure gap analysis, as measures of exposure for traffic safety analysis, and as levels of physical activity for health impact assessment. 

## Frameworks

A variety of frameworks have been developed to model active travel within regional TDMs. These approaches can be distinguished by the stage in the modeling process (for [trip-based models](Trip_based_models) or [activity-based models](Activity_based_models)) at which active mode trips are predicted. 

- **Separate trip/tour generation process**: Walk and bicycle trips can be generated completely separately from other modes. This process allows for the deployment of a stand-alone active transportation direct-demand model. Such a model may look and operate completely differently than other regional travel forecasting tools, relying heavily on measures of the built environment and utilizing different zonal/network structures. However, the lack of interactivity between the motorized and non-motorized model components limits this framework’s ability to represent mode shifts. 

-	**Mode split model before or after trip distribution/destination choice**: Alternatively, walk, bicycle, and/or non-motorized trips may be predicted using a mode split model, either directly between [generation](Trip_Generation) and [distribution](Trip_distribution)/[destination choice](Destination_Choice_Models), or immediately prior to (mode choice)[Mode_choice]. This mode split model usually relies on built environment associations with active transportation, and it may or may not incorporate measures of accessibility. As of 2017, fewer MPOs were utilizing this framework than did so the past. 

-	**Within mode choice**: By far the most common method to model pedestrian and bicycle travel in TDMs is within a trip/tour [mode choice model](Mode_choice). In 2012, 18 large MPOs (38%) used this framework; over half of large MPOs (28, 58%) did so in 2017. It is more common for walking and bicycling to be represented as separate modes than as a single non-motorized mode, although they may be grouped within the same non-motorized nest (within a [nested logit model](Choice_models)). Most activity-based models that include active mode trips do so within mode choice models, and many MPOs added non-motorized modeling capabilities during the process of developing activity-based models. 

### Route choice

Few TDMs (assign)[Network_assignment] walk or bicycle trips to the network. Some MPOs are starting to apply bicycle route choice models to their bicycle trips, utilizing sensitivities to grade, turns, stops, traffic volumes, and bicycle facilities obtained through recent GPS-based analyses of bicycling behaviors. As of 2017, no large MPO was assigning walk trips to networks, largely due to a lack of research on pedestrian route choice and the difficulties representing realistic pedestrian networks at a regional scale. 

## Considerations

There are several barriers to active travel mode modeling at a regional level, although some MPOs have taken specific approaches to overcome these challenges. 

### Zones and networks

The large [zonal](Traffic_Analysis_Zone) and aggregate [network](Transportation_networks) structures used in most TDMs are not necessarily compatible with bicycle and especially pedestrian travel, as many walk trips may be intrazonal and utilize local streets and paths that are not modeled. To address this issue, some MPOs are using micro-zones that approach the size of a block as well as all-streets-and-paths networks for active transportation mode modeling or to calculate pedestrian and bicycle travel times and impedances. These finer-grained zonal and network structures may only be used for non-motorized travel [skims](Skim_Matrix). Attention also could be paid to the walking and bicycling speeds assumed when calculating travel times, and the effects of grade on bicycle speeds. 

### Built environment

TDMs can be made more sensitive to policies that affect active transportation modes by including more fine-grained measures of the [built environment](Spatial_data#land-use-demographic-socio-economic-data) into models of key decisions such as trip/tour generation, destination choice, and/or mode choice. Considerable amounts of research have identified how measures of built environment (activity density, land use diversity, street network design, proximity to destinations and public transit, etc.) are correlated with mode shares and traveler behaviors. A challenge in this area is forecasting the built environment in future scenarios. 

### Travel behavior data

By far the biggest challenge reported by MPO modelers in a 2017 survey was a lack of active transportation mode behavior data available to estimate walk and/or bicycle (mode choice) models. This challenge is directly linked to the small sample sizes and general difficulty of measuring such travel through region-wide household [travel surveys](Travel_surveys): short walk trips may be forgotten, and many respondents may not make any walk or bicycle trips. As MPOs adopt more GPS-based household travel surveys, missing trips may become less of an issue, but oversampling households in walkable and bicycle-friendly areas may still be necessary to achieve sufficient sample sizes for model estimation. The emerging use of external data sources on non-motorized volumes (such as from location-based services data) could also help to improve the validation of these processes within TDMs.

## References

Broach, J., Dill, J., & Gliebe, J. (2012). Where do cyclists ride? A route choice model developed with revealed preference GPS data. *Transportation Research Part A: Policy and Practice, 46*(10), 1730-1740. https://doi.org/10.1016/j.tra.2012.07.005

Clifton, K. J., Singleton, P. A., Muhs, C. D., & Schneider, R. J. (2016a). Representing pedestrian activity in travel demand models: Framework and application. *Journal of Transport Geography, 52*, 111–122. http://doi.org/10.1016/j.jtrangeo.2016.03.009

Ewing, R., & Cervero, R. (2010). Travel and the built environment: A meta-analysis. *Journal of the American Planning Association, 76*(3), 265-294. https://doi.org/10.1080/01944361003766766

Hood, J., Sall, E., & Charlton, B. (2011). A GPS-based bicycle route choice model for San Francisco, California. *Transportation Letters, 3*(1), 63-75. https://doi.org/10.3328/TL.2011.03.01.63-75

Kuzmyak, J. R., Walters, J., Bradley, M., & Kockelman, K. M. (2014). *Estimating bicycling and walking for planning and project development: A guidebook* (NCHRP Report 770). Transportation Research Board. https://doi.org/10.17226/22330

Saelens, B. E., & Handy, S. L. (2008). Built environment correlates of walking: A review. *Medicine and Science in Sports and Exercise, 40*(7 Suppl), S550. https://doi.org/10.1249/MSS.0b013e31817c67a4

Singleton, P. A., Totten, J. C., Orrego-Oñate, J. P., Schneider, R. J., & Clifton, K. J. (2018). Making strides: state of the practice of pedestrian forecasting in regional travel models. *Transportation Research Record: Journal of the Transportation Research Board, 2672*(35), 58-68. https://doi.org/10.1177/0361198118773555

Transportation Research Board (TRB). (2007). *Metropolitan travel forecasting: Current practice and future direction* (Special Report 288). Transportation Research Board. https://onlinepubs.trb.org/onlinepubs/sr/sr288.pdf

Vanasse Hangen Brustlin, Inc. (VHB). (2007). *Determination of the state of the practice in metropolitan area travel forecasting: Findings of the surveys of metropolitan planning organizations*. Transportation Research Board. http://onlinepubs.trb.org/onlinepubs/reports/VHB-2007-Final.pdf
