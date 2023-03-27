# Getting Started

New to travel modeling or looking for a refresh? This outline can help direct you to key topics in the field while providing some important context. Read through the following overview and follow the links for more detail on each concept.

Start with the [**Big Picture**](https://tfresource.org/topics/Big_Picture.html). This page provides a broad overview of how travel models work and how they fit into transportation planning and policy analysis.

From there, it will be helpful to read about [**Travel Behavior**](https://tfresource.org/topics/Travel_behavior.html). This page discusses some of the underlying human behavior that we try to anticipate by using travel models. Travel forecasting uses a systematic approach to predict peoples’ choices under different conditions, which allows us to evaluate how things might change in different circumstances (e.g., changes in the transportation system, different population growth patterns, etc.).

Most travel forecasting tools rely on locally collected [**survey data**](https://tfresource.org/topics/Travel_surveys.html) to be able to represent the unique behaviors of a specific place at a certain moment in time. Household travel survey data have traditionally been the primary means of evaluating behaviors in a study area and provide the statistical basis for creating most travel models.

 With some understanding of why behavioral characteristics matter and how they’re measured, we can introduce the components of travel models. There are two major types: trip-based and activity-based models.

[**Trip-based models**](https://tfresource.org/topics/Trip_based_models.html) represent the traditional and widely applied approach to building models of travel behavior. A distinct feature of trip-based models is that they operate strictly at the zone level, often referred to as [**Traffic Analysis Zone (TAZ)**](https://tfresource.org/topics/Traffic_Analysis_Zone.html#how-tazs-are-used) data. TAZ data is common to both types of models so it’s important to understand its role in forecasting.

Trip-based models include multiple components, with the most basic comprising four steps.

1.  [**Trip Generation**](https://tfresource.org/topics/Trip_Generation.html) predicts the magnitude of travel produced in a given area (i.e. TAZs) by different purposes (e.g., work, school, social, etc.)
    
2.  [**Trip Distribution**](https://tfresource.org/topics/Trip_distribution.html) applies a spatial distribution to those trips, by purpose, to represent the likely distance people travel for different purposes and starting locations. The result of this step is a trip table between all zones for each trip purpose.
    
3.  [**Mode Choice**](https://tfresource.org/topics/Mode_choice.html) determines the proportion of trips between zones that use different travel models (e.g., driving alone, driving/riding with others, transit, walk, bike, etc.).
    
4.  [**Network Assignment**](https://tfresource.org/topics/Network_assignment.html) is the final step that assigns vehicle traffic to a network. Once the number of vehicle trips is determined from mode choice, this model component determines the network paths likely to be chosen by travelers between all zones. [**Network data**](https://tfresource.org/topics/Transportation_networks.html) is an important input required to be able to evaluate how travel demand translates to vehicle traffic. In addition to link-level network traffic volume, this process also provides a matrix of time, distance, or cost impedances between all zones, often called “[**skims**](https://tfresource.org/topics/Skim_Matrix.html).” 

The result of these components is a network with total traffic volumes, based on total trips between origin and destination zones. Further refinements may include a [**time-of-day model**](https://tfresource.org/topics/Time_of_Day_Factoring.html) that splits trip tables and assignment into distinct time periods, which allows for modeling of congested time periods.

[**Activity-based models (ABMs)**](https://tfresource.org/topics/Activity_based_models.html)) end up producing much of the same information as a trip-based model, but they work at a much finer scale, and produce additional data from intermediate model steps. The main difference between ABMs and trip-based models is that ABMs perform a microsimulation of choices across a simulated population. This allows for more finer-grained representation of people and choices, allowing for more detailed aggregation across different types of people rather than solely evaluating results at the TAZ or network assignment level alone.

Since ABMs work on such a fine scale, they require detailed population information, which is generated through a process called [**Population Synthesis**](https://tfresource.org/topics/Population_Synthesis.html).

ABMs function similarly to trip-based models in that they predict the magnitude of travel, trip lengths, and mode choice, but the way in which they do this is quite different. ABMs can have many components, but they are almost all some type of a [**discrete choice model**](https://tfresource.org/topics/LM1.html#), where one choice must be chosen from a set of options. (Mode choice is an example of a discrete choice model). In ABMs, a series of components results in a list of trips, which are then applied to the same type of network assignment performed for trip-based models. The ultimate output will be a loaded network, but also a detailed trip list with demographic information. Since demographic data is retained throughout the process, ABMs are often well suited for more person-based studies such as an [**equity analysis**](https://tfresource.org/topics/Equity_Analysis.html).

## Feedback

Four-step and activity-based models have distinct ways to produce travel demand, but this demand is ultimately made available at the zone (TAZ) level in the same format for traffic assignment on a network. The result of traffic assignment affects the travel demand, which in turn affects the traffic assignment results again.

Consider a city with no congestion. With no traffic, a demand model may predict that people take many trips in cars, often for relatively longer distances. However, when those trips are assigned to a network, it will result in heavy congestion. Faced with that increased congestion, the model would predict perhaps fewer trips and certainly shorter tripsin light of the new travel conditions; maybe other modes become competitive or people change the time at which they travel.

This is known as [**feedback**](https://tfresource.org/topics/Integrated_Travel_Demand_and_Network_Models.html), and it’s important to ensure a realistic balance between travel demand and accurate traffic assignment.

## Model Development

Models are built from observed data, which primarily includes [survey data](https://tfresource.org/topics/Travel_surveys.html), [transportation networks](https://tfresource.org/topics/Transportation_networks.html), and information on [population and land use distributions](https://tfresource.org/topics/Spatial_data.html). This data serves as input for parameter estimation and direct inputs to run scenarios.

Model results must be validated against observed data for each component. Adjustments can be made to model parameters to better match data from different sources. This is referred to as model calibration. The process of [validation and calibration](https://tfresource.org/topics/Model_calibration_and_validation.html) is important to creating models that represent current conditions, so we can more confidently analyze alternative scenarios.

While there’s much more to know about the details of all these models and their components, it’s also critical to know how these models are used in practice, and what their limitations are.

## Next Steps

After reviewing the pages suggested here, consider browsing through any remaining topics on the sidebar navigation pane of this website. These are ordered in 3 major groups:

-   *Principles and Concepts*, for background higher-level concepts like travel behavior modeling and statistical methods,
    
-   *Model Development*,  for details on model input, construction techniques and other considerations, and
    
-   *Model Application and Management*
