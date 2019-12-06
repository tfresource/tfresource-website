---
title: "Impedance"
categories:
  - Destination Choice Models
---

The impedance describes how difficult it is to get from one place to another place. The impedance is commonly calculated as travel time, travel distance, travel costs, or a combination thereof called generalized costs.

Travel costs may include parking, the costs for fuel, maintenance costs and transit fares. For transit, access time, egress time, wait time and number of transfers often is added to a generalized costs term (generally referred to as "level of service" variables).

Mathematical Formulation
------------------------

Some impedance measures combine different level-of-service variables as generalized costs. This is usually done through a linear combination of the component level-of-service variables, similarly to the calculation of utility calculations for mode choice models. For example:

$$Impedance = time_{InVehicle} + \beta_{1} * time_{OutOfVehicle} + beta_2 * costs$$

The parameters $\beta_k$ are either estimated in a mode choice model or asserted based on information from other models. In the equation above, $\beta_1$ represents the weight at which travelers value out-of-vehicle time relative to in-vehicle time (typically by a factor of 2 to 4 worse) and $\beta_2$ represents the monetary value of in-vehicle time.

![]( ImpedanceFunction.png "fig: ImpedanceFunction.png")\
*Common representation of the impedance function*

Impedance Data
--------------

The generation of impedance measures depends on two primary components:

1.  **Network development:** The highway network includes representations of the main roadways in the modeled region, along with characteristics of the highway links, such as free-flow speed or travel time, distance, facility type, number of lanes, or capacity. Transit networks generally represent every bus and rail route in the modeled region along with stop locations. Represented characteristics include routes, such as headways, fares, travel times between stops, and access times to and from stops.
2.  **Network skimming:** Skimming is the process of determining the times, costs, and distances between each pair of zones for which service is available (generally all pairs of zones for auto). [Skims](Skim_Matrix) may be computed for each component of impedance (e.g., auto in-vehicle time, transit in-vehicle time, transit wait time, transit walk access time, etc.) using the appropriate network and network characteristics.

The main decisions regarding skimming concern the assumptions, or settings, used to determine the zone-to-zone paths. This is more prominent in the transit network skims, as there are multiple transit paths between zones. The optimal path may vary under different assumptions. For example, if there are two paths, one with 20 minutes in-vehicle time and 10 minutes out-of-vehicle time, and one with 12 minutes in-vehicle time and 15 minutes out-of-vehicle time. If in-vehicle time and out-of-vehicle time are weighted equally, the second path would be preferred, but if out-of-vehicle time is weighted to be more cumbersome than in-vehicle time, the first path would be preferred.

The accuracy of skim data is critical in obtaining valid mode choice model results. Skim data accuracy is primarily dependent on the accuracy of the network data themselves and on the assumptions made for producing the skims. At the same time, the consistency of path building procedures and mode choice is crucial for producing consistent results from mode choice models when transportation networks are modified to test alternative scenarios.

On the highway side, the main assumptions are the definition of "cost" in determining the lowest cost paths. The main component of generalized highway cost is travel time, but other variables, including toll cost and highway distance may be used as well.

Consistency with Mode Choice
----------------------------

The generalized cost for transit skimming should be consistent with the representation of transportation level-of-service variables in the mode choice utility functions, which often is a linear combination of these variables. For example, if the out-of-vehicle time coefficient is twice as high as the in-vehicle time coefficient in the mode choice model, the same weights should be applied in skimming.

Transit skim procedures often include a set of rules to select a valid transit path. The rules are often based on available observed travel behavior data, such as transit on-board survey data. Some examples include:

-   Maximum walk access distance for transit with walk access modes;
-   Maximum walk egress distance for transit with walk egress modes (generally the same limits as for walk access);
-   Maximum auto access distance for transit with auto access modes;
-   Minimum transit in-vehicle time, to prevent unlikely transit trips of very short distances;
-   Maximum number of transit transfers; and
-   Maximum total travel time or cost.

Cliff Effect
------------

It is important to understand the consequences of these types of limits. While some of the limits are set to eliminate only truly invalid paths (for example, an urban model with a rule that total travel time must be less than five hours), others may exclude some borderline reasonable paths. The analyst, however, must take care to avoid unexpected results. Imagine a case where a maximum walk distance of 1.00 mile to transit is used, and a bus stop is 0.98 miles from an activity center in one scenario is replaced by a rail station 1.02 miles from the same activity center in another scenario. The latter scenario will not result in any transit riders from the activity center, even if the rail service is far superior to the bus service.

This type of problem is known as a "cliff effect" because when the transit availability is visualized, the graph shows a vertical line, or cliff. The upper portion of the figure below shows such a cliff graphically. One approach to reduce the impact of the cliff problem is replacement of the hard limit with a piecewise linear function of the availability of transit with walk access as a function of walk distance, as shown in the lower portion of the figure below.

![]( VandR-Fig3-3.jpg "fig:VandR-Fig3-3.jpg" )\
*"Cliff Effect" in Transit Walk Access Availability*


[Content Charrette: Destination Choice Models](Content_Charrette_Destination_Choice_Models)


