---
title: "Freight assignment"
categories:
  - Freight
---

Freight Assignment is a demand segmentation (sub-genre) of [Network Assignment](Network_assignment) that can be defined within travel models where understanding freight movement on the network is of specific interest.  Freight (goods movement) can be shipped on a variety of modes (air, water, rail, road, pipeline), and Freight Assignment can refer to the network assignment of any of these modes on the applicable network (for example, goods shipped via air would be assigned to network of available air routes, with cargo shipment capacities).  The content on this page focuses on discussions and issues related to truck freight shipments being assigned to a roadway network alongside passenger vehicles. 

### Motivations to Assigning Freight Separately

There are likely many reasons in which it might make sense to assign freight separately from passenger vehicles.  Here is a list of some of the reasons freight might be assigned separately:

- Better representing the capacity (or ability for a section of roadway to handle a volume of traffic); truck percentage (or Passenger Car Equivalent, ==PCE==) is a very important element in assessing the volume-to-capacity and ultimately delay for a section of roadway.
- Understanding truck flows across the network different than personal auto flows.
- Visualizing the impacts of industry and freight related scenarios.
- For larger region or Statewide models, some less frequently used roads will have weight or length or height restrictions and it can be to properly represent truck restrictions on to properly represent vehicle movement.
- Tolling projects typically have a rate for freight traffic that is different than auto traffic, and therefore tolling projects might benefit from breaking out freight assignment as a demand segmentation different from an overall traffic assignment.

There are undoubtably many additional reasons a model operator might find value in freight assignment.  Once determining to add freight assignment, it's important to anticipate that the methods and algorithms used for freight assignment will likely be different from those used to assign personal vehicles.

## Considerations and Challenges

### Value of Time

A foundational difference between freight and person vehicle is the value of time (VOT) that each type of traveler uses to make decisions.  While some network assignment implementations may skip discretely representing VOT, VOT should not be skipped or ignored in working to represent freight assignment.  A great reference on this is "“Establishing Values of Time for Freight Trucks in Order to Better Understand the Impact of Toll Policies” by Mei, Jussein, and Horowitz in 2013[^1].  One of the key takeaways of that paper is that "truckers are fairly rational in their route selection in order to minimize cost of haul" (Horwitz).  The authors specifically want to draw the reader’s attention to the bottom half of table 3.

Another critical component to consider regarding VOT is, to use a variety of VOT when possible. Using just one VOT value for trucks can create big shifts in truckers using a path (0% jumping to 100% or the reverse, for many OD pairs).  This can be especially problematic when analyzing tolled facilities.  In reality VOT is a constantly shifting value for all travelers based on the conditions at that moment.  Since a continuous distribution of VOT is not practical to use in assignment (at least in macro based assignment) as simplifying assumption where three or more values of VOTs can be used.

### Generalized Cost

It may be common approach to use a generalized cost formula to represent the various impedances a traveler faces in choosing a route.  A generalized cost formula can consider many variables.  Travel time, costs (tolls), and distance are common variables used, but the (Path Finding)[Path_Finding_Algorithm] page does a good job of listing others that might be considered.  In addition to the types of costs and impedance already listed on the prior link, freight vehicle may value additional or different impedances.  Here is a list of additional terms that may be considered in the generalized cost equation used in freight assignment:

- distance
- free-flow time
- congested travel time
- reliability of travel time
- road hierarchy
- legal restrictions
- smaller lane widths
- driveways/access interference
- inappropriate turn radii
- pedestrian conflicts

### Specific Route Weighting Factors

In addition to some of the cost terms listed above, some practitioners have started to use impedance penalties by functional class (similar to "road hierarchy" listed above).  For example the Freight and Fuel Transportation Optimization Tool (FTOT)[^2], which routes over the national ==FAF== network, multiplies up travel costs for all non-instate roadways, where:
- Interstate Truck Weight = 1.0
- Principal Arterial Truck Weight = 1.1
- Minor Arterial Truck Weight = 1.2
- Local Road Truck Weight = 1.3

An important note on these factors is that FTOT routes on the national (Freight Analysis Framework (FAF))[https://ops.fhwa.dot.gov/freight/freight_analysis/faf/] and therefore this example only has national level roads, it has many links excluded.

### Multi-class Freight Assignment

Breaking out freight assignment different than personal vehicle assignment is typically a large and costly decision to make.  If an entity is moving forward with a separate freight assignment, it might also be good to consider if it makes sense to sub-divide freight vehicles further into a multi-class freight assignment.  The following are some potential ways freight vehicle might be broken up into different classes:

- Potential split between articulated and rigid vehicles.
- Possible range of different size categories.
- Potential split between loaded and unloaded vehicles.
- Are drivers following navigation software? Maybe the alternative route is better, but navigation software is programmed to look at different characteristics? If a lot of drivers are using technology, can you find out what the navigation software is considering and use this to support your solution? Market penetration of navigation assistance could be important.
- How many drivers are personally paying the toll or feel like the toll cuts into their income?
- Many trucks travel directly from the point of production to the point of consumption, but many others do not.

### Other considerations

In addition to the considerations above, modeling peers have also offered the additional suggestions and ideas related to the topic of freight assignment:

- Modelers should consider acquiring additional data (example GPS vehicle traces) and re-estimating assignment to better account for penalties.
- May need to consider a more detailed assignment approach, potentially using a discrete route choice model / multinomial logit choice (having similar benefits to a stochastic approach, where multiple paths are represented for each O-D pair)[^3].  
- Pre-loading trucks (any vehicle class) seems generally to be discouraged across the profession, although a number of peers identify that it can be a very practical solution (simple representation) of behavior that is very difficult to fully enumerate.
- Custom treatments (extra time penalties) are sometimes added to segments known to be problematic (areas with high curvature, or other geometric or highly specific situations). One practitioner added, "Many highway networks, particularly as to local streets, are not very well suited for getting the accurate impedances for trucks. Tweaks may be necessary."
- Assign a different posted or free-flow speed for trucks versus cars (in particular this should be done if the two vehicle types have different posted legal speed limits).  Some advised to use model link speed for trucks to represent speed adjustments for geometric items like grade, curvature, railroad crossings, neighborhood roads / number of access points.
- When considering truck versus car travel speeds, the performance management (NPMRDS) data is a great and standard source for the differences between car and truck speeds. Data sources available to each agency will naturally vary, but the NPMRDS data is the one that’s available for free to all DOTs and MPOs in the US.
- "There is no substitute for a high-level of spatial precision."
- A “truck” model is a big simplification of a “freight” model. “Truck” models can be quite useful, but their limitations need to be recognized.
- It might be beneficial to test assigning external (E-E, E-I, I-E) freight trips differently than internal freight trips.  The modeler might consider doing a one-off multi-class assignment where the truck trip-tables are broken into; E-E, E-I, I-E, and I-I, and then assessing if there are patterns in how each type assigns and assessing if treatments might be applied based on the length of the trip.  Similarly to breaking up trips by external and internal, a modeler might also want to assign freight trips by trip distance to assess and understand any patterns that might help in improving the freight assignment.

## References

[^1]: Qinfen Mei, Mazen I. Hussein, Alan J. Horowitz, “Establishing Values of Time for Freight Trucks in Order to Better Understand the Impact of Toll Policies”, Transportation Research Record, Journal of the Transportation Research Board, Number 2344, 2013, pp 135–143.

[^2]: https://github.com/VolpeUSDOT/FTOT-public

[^3]: https://www.caliper.com/pdfs/traffic-assignment-and-feedback-research-to-support-improved-travel-forecasting.pdf
