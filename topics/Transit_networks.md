---
title: "Transit networks"
categories:
  - Needs Review
  - Transportation Networks
---

Transit networks are a spatial representation of bus, rail, and other types of transit routes available in a region. In a transit network, each transit route is coded with links representing the path it follows and nodes representing the stops along the path. Further detail about each route often includes route fares, schedules, headways, and speeds.

Transit networks are an essential input for all travel models that include transit as a mode. They are used to compute trip times and costs for using transit.

Relationship to Highway Networks and Transit Network Types
----------------------------------------------------------

Transit routes may be coded on top of an underlying highway network, since many transit routes use roadway links. In effect, this shows how highway congestion can slow transit speeds.

As congestion levels and service frequency differ by peak and off-peak levels, transit networks may be separately represented by time-of-day.

Transit networks also may be separately created by sub-mode to represent the differing levels of service provided by different kinds of service. For example, rail transit, express bus transit and local bus may all have different networks associated with them to show how the services differ.

Access Modes
------------

Transit networks also need to represent how people access a transit stop, either by walking or driving. The transit access mode, called either Walk Access to Transit or Drive Access to Transit, may also have separate networks showing how travel times and costs differ by access mode.

Access times may be limited based on data that shows the maximum distance a person is willing to walk or drive to transit in a region. The maximum walk access distance is usually in the range of 1-2 miles. Also a capture area may be specified for drive access trips to represent markets served by a park and ride.

Special Node and Link Types for Transit Networks
------------------------------------------------

Transit networks often involve special transit link and node types. For example, High Occupancy Vehicle (HOV) links may be coded on the underlying highway layer to allow only for transit use and carpooling. Transit-only links may be specified for rights-of-way that only transit may use. Rail typically is coded on transit-only links because cars cannot use these facilities. Bus Rapid Transit (BRT) may also be coded on transit-only links if the facilities are exclusively used by buses.

Similarly, walk-only links are often needed to represent how people can walk to transit because the sparseness of the highway network does not provide sufficient detail of where people can actually walk. These links may not allow vehicles on them because they are not actual paths a vehicle could use.

Special detailed information may also be coded about stops. For example, stops are often specified as park and rides meaning that they can serve drive-to-transit trips.

How are Transit Networks Created and Maintained?
------------------------------------------------

Transit networks may be coded using available transit system maps to draw routes spatially and schedules to depict transit times and fares. Because transit network creation and maintenance can involve hundreds of routes and thousands of stops, detailed cross-checking of the transit network coding against available transit maps and schedules should be performed to ensure that errors are not made. Such checking can be performed by building transit paths on the network and checking the paths against actual known transit routes. The transit networks will need to periodically updated and checked as transit systems evolve and plans change.

Future year transit networks depend on regional plans to improve and maintain transit service. Typically future year transit networks are created on 5 year increments starting at a base year (i.e. 2010) with modifications to the networks every five years until the final planning horizon year (i.e. 2040). Alternately transit networks may be created in a subtractive fashion, starting at a final horizon year and subtracting transit service on each increment until the base year.

Transit Networks Use in Models
------------------------------

The following depicts how the transit networks are used throughout the model process.

1.  First, transit network paths are built for a particular trip origin-destination pair by finding the best path in terms of travel time and cost.
2.  The network path information is then sent to the [transit skims](Skim_Matrix#Transit_Skims). The transit skims are a set of matrices that show travel times and costs for transit for each origin-destination zone-pair.
3.  The transit skim data is used in mode choice and trip distribution/destination choice models.
4.  Finally, trips are assigned to the transit network. The output provided by transit assignment shows the number of transit boardings and alightings by route by time of day. It also often shows the number of boardings and alightings by stop.

Values Skimmed on the Transit Network
-------------------------------------

Transit network data is essential in depicting both how transit compares against highway service and also which routes will be used on a transit trip. The depiction of transit network paths is used in the [skims](Skim_Matrix) to show the [impedance](Impedance) associated with a given origin-destination pair.

Transit network information that is typically skimmed includes:

:   access walk time
:   access drive time
:   egress walk time
:   transfer walk time
:   access wait time
:   egress wait time
:   transfer wait time
:   in-vehicle time
:   fare/cost
:   transfer penalty.

Advanced Transit Network Attribution
------------------------------------

One way to improve transit networks is depict greater detail about transit routes and stops. For example, the transit network could contain stop information such as if the stop includes automated bus schedule message signs or has a low level of lighting. This could be used to classify stops as more or less desirable. Furthermore, more advanced ways of representing transit fares could be provided to show such complexities as fare zones and reduced fares for students or seniors create variable fares dependent on location and person type.

The more detailed the base year and future year data about the transit network is, the more realistic the mode and route choices will be. Furthermore, with more realistic depiction of transit attributes, the smaller alternative specific constants will have to be in the mode choice model since the explainable part of the model will be larger, so the part of the model which is not explainable that is embodied in the constant will be smaller.

------------------------------------------------------------------------

