---
title: "Spatial interaction models"
categories:
  - Destination Choice Models
  - Topic Circles
---

<PagesInCategory category="Spatial Interaction Models" />

Spatial interaction models predict the amount or likelihood of people or goods (or services or information) moving between two locations in space. Generally, the model predicts the interchange of goods or people between all the members of a discrete set of locations or zones resulting in a square matrix of movements or flows from each zone to each zone. However, sometimes spatial interaction models, particularly disaggregate applications, may instead produce a list of interactions or movements rather than a sparse matrix.

In the context of travel forecasting, spatial interaction models have traditionally been called “trip distribution” or simply “distribution” models. Trip distribution was the second step of the [four-step modeling process](Trip_based_models), following trip generation and preceding mode choice and assignment. Distribution models continue to play a critical role in advanced models, such as tour-based or activity-based models; however, in this context, they are frequently referred to as “\[” or “location choice” models since they are formulated in terms of the underlying behavioral choice of a location (given a reference location).

Both common experience as well as academic research[^1] have found that spatial distribution models are the largest source of error in travel forecasting. Despite the development of more advanced alternatives, the most common spatial interaction model in travel forecasting remains the \[.[^2]

Explanatory Variables
=====================

Most spatial interaction models attempt to predict the movement of people or goods in terms of two basic factors, although some models incorporate additional explanatory variables. These two basic factors are:

-   the distance, travel time or more generally, [impedance](Impedance) between the two locations and
    </li>
-   the size or some measure or prediction of the total amount of people or goods attracted to each candidate destination (see Attractions and Size Variables).

Additional explanatory variables that have been incorporated in more complex models include:

-   [Accessibilities](Accessibility), to capture spatial autocorrelation and/or agglomeration effects, convenience or centrality,
-   Psychological Boundaries, such as rivers, ridge lines, railroad tracks or even major highways which decrease the probability of interaction,
-   Demographic Attributes, such as the income, age or employment status of travelers,
-   Destination Qualities (other than its size or the number of attractions) such as its walkability, diversity of land uses, etc., and
-   K-Factors and Other Spatial Bias Factors, which are not explanatory variables, but fixed factors to account for unexplained patterns.

Types of Models
===============

There are several ways that spatial interaction models can be classified. The following section summarizes the basic types of formulations in use in travel forecasting. Significant variations exist within most of these classes of models, and some formulations have been shown to be equivalent and can be re-formulated as others. For instance it has been long established that gravity models are simply a special, limited case of destination choice models[^3]. For that reason, distinctions such as whether the model is doubly constrained, how it balances productions and attractions, etc., can be as or even more important than the formulation, particularly for the model’s results (e.g, in some cases doubly constrained gravity and destination-choice models may be more similar than they are to singly constrained models of the same formulation). However, the formulation remains the main way that spatial interaction models are categorized.

Gravity Models
--------------

The gravity model is the most common spatial interaction model in travel forecasting. The gravity model is based on the assumption that interaction between two locations is proportional to their size and inversely proportional to their distance (or impedance). There are many variations on the gravity model in use, primarily differences in balancing and constraint, as well as the use of k factors. As of 2005, 93% of MPOs in the United States used gravity models, at least for forecasting work commute trips, despite concerns over their accuracy.[^4]

Destination Choice Models
-------------------------

\[, frequently called \[ or sometimes “location choice” models, are the next most common model formulation after gravity. Although they accounted for only slightly more than 5% of models in use by US MPOs in 2005[^5] for forecasting work commute trips, they are becoming more common in practice and are the standard practice in tour-based and activity-based models.

Pivoting, Growth Factor and Data-Driven Models
----------------------------------------------

Another fairly common class of models goes by several names including “data-driven”, “pivoting”, “growth factor” and “Fratar” models. These models are most commonly used for distributing trucks and, more recently, public transit trips but are also used with some regularity for forecasting automobile trips as well. The defining element of these models is their reliance on a “prior” or “seed” matrix. The prior or seed matrix may be actual data on origin-destination patterns observed at some point in time (data-driven approach) or synthesized, most commonly using some method of origin-destination matrix estimation from traffic counts. Although used from the beginning of travel forecasting in the 1950s,[^6] these techniques have recently enjoyed a new wave of popularity, particularly for transit forecasting, and is now required for modeling in the UK and receiving more attention in Europe.[^7]

Intervening Opportunities Models
--------------------------------

Intervening opportunities models were proposed early on (Stouffer, 1940) and continue to be used by a small number of agencies.

Competing Destinations Models
-----------------------------

Competing destinations models (Fotheringham, 1983) have received a fair amount of attention in the geography literature. They have been used in practice by at least one transportation planning agency. Fotheringham’s technique, which introduces an accessibility measure, has now become a common best practice in destination choice modeling (following Bhat et al., 1998).

Combined distribution and assignment models have been shown to be equivalent to the feedback of travel times from assignment to distribution which is the topic of the next section.

Combined Models and Feedback
============================

Originally, spatial interaction models were applied using impedance measures based on free-flow or uncongested travel times. In this case the travel times on which the spatial distribution of trips is based are generally inconsistent with the travel times predicted by assignment. Combined distribution models were formulated and the practice of “feedback” developed to address this problem, especially to support emissions modeling which requires realistic travel times or speeds. In the context of travel forecasting, feedback generally refers to iterating the entire or several steps of the travel demand, network modeling system. At minimum, it generally means the feedback of travel times from assignment in distribution. It was eventually recognized and proved that feedback models are equivalent to and can be formulated as combined distribution-assignment models.

The process is common, and can be required under certain air quality conformity conditions, but is not universal. Although incorporating feedback to distribution is now quite common, there is little consistency in the details of how this feedback is implemented.

The key development in recent years with regard to feedback was the recognition that “naïve” feedback without any averaging of flows or travel times across iterations may not converge.

Although incorporating feedback to distribution is now quite common, there is little consistency in the details of how this feedback is implemented. Feedback can and has been implemented by feeding back trip tables or flow matrices, travel time or skim matrices, link flows or link travel times. Averaging can be done using the method of successive averages (MSA) or fixed factor methods. There are even more different criteria in use to measure the convergence of feedback loops or combined model systems.

Constraints and Balancing
=========================

In one way or another, spatial interaction models generally must reconcile estimates of supply and demand or the production and attraction or consumption of trips or goods. For example, predictions of the number of work trips in a future year will typically be made based both on projections of the number of resident workers and independently from projections of employment. These estimates may come from different agencies and, especially in the future, may vary considerably. Models differ in whether the estimates are scaled (balancing) to be consistent and in whether they are singly-constrained to be consistent with exogenous estimates of supply or demand or doubly-constrained to both. Models also vary in whether or not they include endogenous estimation of demand.

Models have considerably different response properties and can produce considerably different forecasts depending on whether they are singly- or doubly-constrained and how balancing is handled. For instance, singly-constrained models may observe the infamous Independence of Irrelevant Alternatives (IIA) property while doubly-constrained models do not.

Development
===========

Spatial interaction models are typically thought to be less transferable across geographic regions, compared to aspatial models, due to the unique geography of each region. For this reason, spatial interaction or distribution models must be developed and calibrated for each region.

Data Sources
------------

Spatial interaction models rely on a variety of data sources. They typically rely on three types of data:

-   [spatial data](Spatial_data), typically the amount of population, employment, etc., within a zone system;
-   the distance, travel time or more generally, [impedance](Impedance) between the two locations;
-   spatial interaction data or actual observations of spatial interactions.

Spatial data and impedances are common data types used in a variety of travel forecasting processes. However, spatial interaction data is particular to spatial interaction modeling and so deserves a brief treatment here.

### Spatial Interaction Data

Spatial interaction data is required to inform spatial interaction models, whether in the form of prior matrices or through the estimation of structural parameters. Given the fairly specialized nature of this data, there are typically a limited number of sources for it:

-   [Household travel surveys](Travel_survey_data) which record the movements of travelers within a household between locations in space are the most common source of spatial interaction data.
-   [Business establishment surveys](Travel_survey_data) are less common but are also sometimes conducted, in part to collect data on truck and other commercial vehicle movements.
-   The [Census Transportation Planning Package (CTPP)](Destination_choice_data_sources) periodically (roughly every 5-10 years) produces estimates of journey to work flows at various geographies including counties and Census [TAZs](Traffic_analysis_zones) based on the American Communities Survey (ACS).
-   The Longitudinal Employer-Household Dynamics (LEHD) Origin-Destination Employment Statistics (LODES) is also produced by the Census Bureau in collaboration with the Bureau of Labor Statistics based on their Quarterly Census of Earning and Wages (QCEW).
-   Passive data collection is also now beginning to provide spatial interaction data based on tracking of cell-phones, GPS and other devices (for instance, the American Transportation Research Institute has GPS-based data on truck movements).
-   Commodity flow matrices are produced by FHWA as part of its Freight Analysis Framework (FAF) based on the Bureau of Transportation Statistic’s Commodity Flow Survey. Synthetic commodity flow matrices are also commercially available based on the application of doubly-constrained gravity models to inter-regional input-output data.

Estimation, Calibration and Validation
--------------------------------------

The development and adoption of spatial interaction models from spatial interaction data can vary considerably based on the type of model. For example, it is common to statistically estimate destination choice model parameters from disaggregate household survey data, while it is more common to heuristically calibrate gravity model parameters to match aggregate summaries of the same data.

However, despite differences in methods for estimating and/or calibrating model parameters, ultimate evaluation of the goodness-of-fit and validation of spatial interaction models is frequently based on a limited number of common checks. In particular, the most common criteria for evaluating spatial interaction models remains the ability of the model to reproduce an observed trip length frequency distribution measured either by the average trip distance/duration or by a coincidence ratio.

This practice persists despite strong evidence (\[TRB placeholder, 2012\]) that models can easily be over-calibrated to reproduce trip length frequency distributions at the expense of their ability to accurately reproduce actual spatial interaction patterns. Proper evaluation of the validity of spatial interaction models should be based on actual comparisons of the predicted versus actual observed flows whenever such data exists. These comparisons frequently take the form of comparisons of district-to-district summaries of more detailed spatial interactions, such as comparison of modeled county level commute flows to CTPP estimates. However, it is also possible to calculate a correlation coefficient or similar measures depending on the type of data available. It is important to be aware, however, that spatial goodness-of-fit statistics are dependent on spatial aggregation or the zone system used, such that, for instance, district level statistics will appear better than zone level statistics and zone level statistics appear better than parcel level statistics comparing the same model to the same observed data.

See also [Model Validation and Reasonableness Checking](Model_Validation_and_Reasonableness_Checking) on Trip Distribution.

Accuracy and Issues
===================

Both common experience as well as academic research[^8] have found that spatial distribution models are the largest source of error in travel forecasting. This is not surprising given the typical size of the problem (large number of zones or locations) and the limited explanatory variables available (such as the lack of information on the price or quality of goods available at locations). For this reason, many have suggested alternatives to the traditional gravity model including destination choice models and data-driven or pivoting methods.

In addition to the size of the problem and the limited number of explanatory variables typically available, spatial interaction models face particular challenges relative to the scheme by which space itself is aggregated into discrete units or zones. This challenge is commonly known as the [Modifiable Areal Unit Problem](Destination_Choice_Set_Formation#The_Modifiable_Areal_Unit_Problem_(MAUP)) (MAUP) which is basically that the results of the model are not independent of the zone system used. So, as a result, there is no guarantee that a well-calibrated model will still remain well calibrated after a number of zones are split.

Aggregation Bias vs. Computational Burden
-----------------------------------------

One aspect of the MAUP is spatial aggregation bias which is simply the spatial form of aggregation bias common to nonlinear models. The fewer zones used to represent a given amount of space, the more bias can be introduced into key parameters, such as the willingness-to-travel or distance decay parameter(s). However, the use of many zones presents computation challenges for most spatial interaction models because their computational burden and memory requirements are typically related to the number of zones squared.

References
==========

TRB placeholder, 2012
Stouffer, 1940
Fotheringham, 1983
Bhat et al., 1998

Related Content
---------------

[^1]: Zhao, Y. and K. Kockelman (2002) 'The Propagation of Uncertainty through Travel Demand Models', *Annals of Regional Science* 36 (1), pp.145-163

[^2]: [SR 288-Metropolitan Travel Forecasting Current Practice and Future Direction](SR_288_Metropolitan_Travel_Forecasting_Current_Practice_and_Future_Direction)

[^3]: Daly, A. (1982) 'Estimating Choice Models Containing Attraction Variables', "Transportation Research, Part B: Methodological" Vol. 16, No. 1, pp. 5-15

[^4]:

[^5]:

[^6]: Fratar, T. J. “Vehicular Trip Distribution by Successive Approximations”, Traffic Quarterly, 1954.

[^7]: Daly, A., J. Fox, B. Patruni and F. Milthorpe (2012) 'Pivoting in Travel Demand Models' presented at Australasian Transport Research Forum

[^8]:
