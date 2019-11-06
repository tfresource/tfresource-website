---
title: "Public transport (transit) modeling"
categories: "!Needs Review,Public Transport (Transit) Modeling,Topic Circles"
---

Representation of public transport system in a travel model
-----------------------------------------------------------

What aspects (objects and system phenomena) of the real-world public transport system can we capture in a travel model? A general wiki specifically on transit can be found [here](http://www.transitwiki.org/TransitWiki/index.php/Main_Page).

### Transit Service

Transit service is often grouped by operating agency and is a representation for the service that that agency provides. Multiple agencies can operate on the same transit network.

[Transit Route](Transit_Route) represents how [Transit Vehicles](Transit_Vehicles) traverse the physical transit network infrastructure and where they stop.

[Transit Vehicles](Transit_Vehicles) are pretty much as-advertised and is the only capital component to the service.

[Transit Route Frequency](Transit_Route_Frequency) represents the timing of when each route is on the network. This is often an aggregate representation by time period, but can also be represented in continuous time as a schedule.

[Transit Fares](Transit_Fares) can be represented in numerous ways and are highly-dependent upon the commercial modeling system that is used. Ultimately, it is up to the modeler to decide what an appropriate level of approximation is for the purposes of the transit system that is being modeled and the effect that it will have on the project that the model is being used for.

### Transit Network Infrastructure

[Transit Network](Transit_networks)
The transit network infrastructure is the physical infrastructure on which transit service operates. This includes streets, [Transit Stations](Transit_Stations), [Transit Fixed-Guideways](Transit_Fixed-Guideways) and characteristics and components to these that affect how a transit vehicle operates.

Common transit infrastructure components include [Transit Priority Treatments](Transit_Priority_Treatments) such as:

-   Transit-only Lanes
-   Transit Signal Priority (TSP)
-   Queue-Jump lanes

Passenger behavior
------------------

How do passengers interact-with and judge the utility of the transit system? There are generally four components within a typical travel model that involve transit.

1.  [Transit Path Building](Transit_Path_Building) determines how the passengers choose to travel through the transit network
2.  [Transit Network Service Determination](Transit_Network_Service_Determination) determines the value and utility of their transit option
3.  [Mode Choice](Mode_Choice) is the model component where travelers choose whether to ride transit, given their own assessment about service quality compared to their other options
4.  [Transit Network Assignment](Transit_Network_Assignment) is the process by which every traveler that has chosen to ride transit in the mode choice step, is then assigned to the network. The output of transit assignment is the number of boardings and alightings by time of day for each [Transit Route](Transit_Route) at each stop.

Developing a Transit Component in a Travel Model
------------------------------------------------

### Desired Data Sources

Passenger Behavior Data:

-   [On-board Surveys](On-board_Surveys)
-   [Household Travel Surveys](Travel_Survey_Data)
-   Ridership Data (i.e. APC or manual counts)
-   Transit Routes taken by passengers (i.e. GPS)

Transit Network Data:

### Model Design

Typical decisions and considerations include:

-   [Transit Network](Transit_networks) design
-   [Access mode, egress mode, transit mode combinations](transit_mode_combinations)
-   [Schedule-based versus headway-based versus combination](schedule_versus_headway)
-   Calculation of [dwell time](Transit_dwell_time) at stops
-   [Incorporating transit amenities](Incorporating_transit_amenities) such as shelters, etc.
-   Consideration of [transit crowding](Transit_crowding) and park and ride crowding
-   Consideration of [transit reliability](Transit_reliability)
-   [Consistency in path-building and mode-choice parameters](Path_Choice_Mode_choice_Consistency)
-   Assignment of bus vehicles and park and ride vehicles to the auto network
-   [Path building parameters](Transit_Path_Parameters)

### Model Construction

This is the act of coding up your design into the modeling system. This can range from writing your own low-level code, to using a GUI in a commercial modeling package and selecting appropriate parameters and options.

### Model Calibration

The act of adjusting parameters within the model system to more accurately and appropriately reflect what happens in real life. Typical calibration adjustments for public transport modeling include:

-   network path building parameters
-   mode choice parameters (including alternative specific constants)
-   corrections and adjustments to the transit network representation, or the representation of an alternative mode

### Model Validation

This is often an iterative process with model calibration. Validation is an assessment of how well the model is performing at an absolute level AND how appropriate the model sensitivities are. Typical transit model validation items are:

-   Modeled/to observed ridership scatter plots at system, line, and stop level
-   RMSE, R-squared, absolute differences

Performance Measures and Sensitivities
--------------------------------------

What are planners and decision makers typically interested in learning when they look at public transit in travel models? here are a few examples of use-cases and performance measures. It is important to consider that performance measures should not be reported for outputs that have not been validated.

**Performance-measures** (at area, corridor, route, or stop-level):

-   Ridership (possibly segmented into choice or dependent riders)
-   Person miles/hours travelled (AKA PMT or PHT)
-   PMT or PHT in crowded conditions
-   Volume to capacity ratios at a line or link level
-   Travel time
-   Average transfer rates
-   Average walk times/distances
-   Mode share
-   VMT per person trip (measure of trip-efficiency)
-   Wait time
-   Delay

**Use Cases**:

1.  [Small Starts / New Starts](Capital_Investment_Grant_Program_(aka_New_Starts))
2.  [Long range transportation plan](Long_range_transportation_plan)
3.  [Project Prioritization](Project_Prioritization)
4.  [Corridor Study](Corridor_Study)
5.  Policy Study (i.e. cordon-based [congestion pricing](congestion_pricing))

Application and Forecasting Considerations
------------------------------------------

Research Avenues
----------------

-   Person-based dynamic transit assignment
-   Tour-based path evaluation for park and ride facilities

Related Content
---------------

{{\#ask: [:+](:+)
| format=ul
}}

------------------------------------------------------------------------

