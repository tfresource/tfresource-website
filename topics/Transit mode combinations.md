---
title: "Transit mode combinations"
categories:
  - Needs Review
---

**Main Mode:** The mode that you consider to be the most important in your trip. It is is fairly debatable as to what you would consider to be the main mode.

The most common way to determine the main mode is through a [modal hierarchy](modal_hierarchy), but other possible ways to determine the main mode are using the mode that takes either the longest time, covers the longest distance, or costs the most.

**Access Mode:** A mode used to get from a trip origin to a "main mode"
**Egress Mode:** A mode used to get from the "main mode" to the trip destination.

Common access and egress modes to transit include walk and drive, sometimes broken out into park-and-ride and kiss-and ride. Recently, there has been more interest in including bike as a transit access mode. If one transit mode is used to access another main mode, it can also be considered an access mode (i.e. using local bus to get to commuter rail).

### Modal Aggregation

The number of transit modes to consider as separate choices in [Mode Choice](Mode_Choice) is an important design consideration for the modeling process. On one end of the spectrum, all route choices that use transit could be considered a singular "transit" mode. On the other end of the spectrum, one could consider every possible [transit sub-mode](transit_sub-mode) as separate, also possibly diversified by access and egress mode.

Common combinations include:

Aggregate transit mode used as a catch-all for all transit in the mode choice model:

-   Transit

Very Disaggregate access/transit/egress mode choices, each considered a separate choice in the mode choice model:

Main Mode:

-   Local Bus
-   Express/Premium Bus
-   Commuter Rail
-   Ferry
-   Subway
-   Light Rail

Also diversified by....

Access/Egress Modes:

-   Walk
-   Park and Ride
-   Kiss and Ride
-   Bike

### Considerations

The way mode choice models work, each additional choice will add an additional attractiveness to transit in general, so it is very important that each combination should:

-   be a feasible and known alternative to the subject the model is applied to (or estimated from) in mode choice
-   provide an additional level of accessibility to the choice. Being able to take a red bus or bus shouldn't make transit more attractive than taking a blue bus...but it is likely true that being able to take either the ferry, subway, or bus makes transit as a whole more attractive.

------------------------------------------------------------------------

