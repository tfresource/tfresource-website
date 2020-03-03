---
title: "Statewide Models: Trip-based Models"
categories:
  - Destination Choice Models
  - Statewide Models
---


*This page summarizes Section 6.2.1 of NCHRP Synthesis 514.*

[Trip-based models](Trip_based_models), also commonly known as **four-step models**, are a well established modeling approach, with well-known requirements for its development and deployment. Current and past statewide models range in terms of data requirements, costs, benefits, and implementation. Below are some examples of the stages of trip-based statewide models from the more basic to the more advanced.

Current Models
==============

-   [The Maryland Statewide Transportation Model (MSTM)](Maryland_Statewide_Transportation_Model) is an advanced trip-based model that covers the State of Maryland plus surrounding areas at the statewide layer and the remainder of North America at the regional layer.The MSTM is a multi-layer trip-based model that covers both person and freight travel demand. The model works at two geographic layers. Short distance trips are modeled for the statewide model study area, and long-distance trips include trips that have one or both trip ends at the national layer outside the statewide model study area.
-   [The Georgia Statewide Model is](Georgia_Statewide_Model) a state-of-practice transportation model. Like many contemporary statewide models it covers the entire country, with considerable network and zonal detail within Georgia, reduced detail in the five adjacent states, and substantially reduced detail beyond them. It includes both person and freight flow models that estimate demand separately, but use a combined traffic assignment procedure to estimate traffic volumes and travel times. The Georgia Statewide Model follows the four-step sequential travel forecasting process widely used in the practice of urban and statewide modeling. This model does not distinguish time-of-day periods but assigns daily volumes.

Data Requirements
=================

The data requirements vary depending on the needs and budget of the state. The data requirements range from minimal to intensive and those variations track align with the costs and benefits of those implemented model systems. Below is a list of some such data requirements.

-   Transferable parameters from the NCHRP reports
-   ACS PUMS data and NHTS microdata
-   Statewide [travel surveys](Travel_surveys), fused urban travel surveys within their state (and sometimes adjacent ones), or relied upon urban surveys for those with one dominant metropolitan area.
-   [Revealed preference (RP) or stated preference (SP) surveys](Stated_preference_surveys)
-   Cellular tracking or "[Big Data](Big_Data)"

Cost
====

The effort required to improve trip-based models can be modest compared with those for developing more advanced models. Those states that can meet their needs with such models will reap significant advantages from such cost-effective incremental improvements. Possibly even larger efficiencies could be gained by pooling funds to conduct travel surveys across several adjacent states, although no such effort has been reported.

An RP/SP survey of the size and scope recently conducted for the California HSR modeling work, described in chapter seven “The California High-Speed Rail Ridership and Revenue Model,” is necessary for estimating a model specific for the modeled area. The cost of that survey was approximately \$350,000.

Utilizing [Big Data](Big_Data) can provide a more cost effective method than conducting travel surveys. Their cost depends upon the geographic scale and duration of data provided. The expected cost of these data, ranging from \$250,000 to \$2 million, should be factored into the cost of all statewide models in the future.

Implementation
==============

Statewide models are often implemented based on the needs of the state and the data available or to be collected. Below are some sample implementation plans.

**[Transferred Model](Model_Transferability)**

Several states have built models that meet their needs with no more than such knowledge, 'transferable parameters from the NCHRP reports listed in chapter four, “Traditional Personal Travel Behavior Data,” and summaries derived from the ACS PUMS data and NHTS microdata. They almost always lack a mode choice modeling component, but are otherwise a competent implementation of best practices in trip-based models. Thus, it is demonstrably easy to build a first-generation model once the initial, and often costly, investment has been made in developing the modeling backplane.

**Using Survey Data**

Some states have conducted statewide travel surveys, fused urban travel surveys within their state (and sometimes adjacent ones), or relied upon urban surveys for those with one dominant metropolitan area, to derive trip characteristics used in the model (e.g., trip production and attractions, trip length frequency, and time-of-day distributions). The existing model can be updated using these data, or extended with new features or greater detail.

**Using RP/SP Data**

Other states need to develop mode choice and network assignment capabilities that facilitate pricing analyses. The auto nest of urban and intercity mode choice models can be extended to include pricing, which requires asserting and calibrating the coefficients associated with the new sub-nest(s), based on experience elsewhere, or conducting or adapting additional revealed preference (RP) or stated preference (SP) surveys.

**Destination Choice Component**

Replacing a traditional trip distribution model with a logit-based \[ often leads to improvements in model validation and explanatory power. Such models are usually estimated using existing **travel survey data**, which often requires adding occupation to the list of variables generated for synthetic populations or zonal estimates. However, the recent availability of OD matrices based on **cellular tracking or "big data"**, with their ability to partition flows by residents versus visitors and trip purpose, is a huge advance that will revolutionize travel modeling.

Benefits
========

References
==========

-   Donnelly, R. & Moeckel, *NCHRP Synthesis 514 Statewide and Megaregional Travel Forecasting Models*, Transportation Research Board, Washington, DC, 2017. <http://www.trb.org/NCHRP/Blurbs/176702.aspx>


