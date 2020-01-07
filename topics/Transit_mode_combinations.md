---
title: "Transit mode combinations"
categories:
  - Needs Review
---

There are important considerations that affect how trips that include multiple transit modes are modeled.  Modst models use the following terms to describe the modes that constitute certain parts of the overall trip:

**Main Mode:** The mode that is considered to be the most important in a multi-mode transit trip. There is disagreement about how to define the main mode for multi-mode trips.

The most common way to determine the main mode is through a [modal hierarchy](Modal_hierarchy), but there are other possible ways to define the main mode, including the following:
-   The mode with the highest percentage of time on the trip,
-   The mode that covers the longest distance on the trip, or 
-   The mode with the highest monetary cost.

**Access Mode:** A mode used to get from a trip origin to a "main mode"

**Egress Mode:** A mode used to get from the "main mode" to the trip destination.

Traditionally, access and egress modes to and from transit have included walk and drive (auto), sometimes broken out into park-and-ride and kiss-and ride. Recently, there has been more interest in including bike as a transit access or egress mode. If one transit mode is used to access another main mode, it can also be considered an access mode (i.e. using local bus to get to commuter rail).

The rapid increase in the availability of shared mobility modes has generated substantial interest in their uses for transit access and egress.  Transportation network companies (TNCs), bikesharing, and micromobility (such as e-scooters) have expanded transit access and egress possibilities for travelers who may not own autos or bicycles or who may wish to use these modes for transit egress, where their personal vehicles are unavailable.  Some models now include bike access and egress and/or TNC access and egress.

### Modal Aggregation

The number of transit modes to consider as separate choices in [Mode Choice](Mode_Choice) is an important design consideration for the modeling process. On one end of the spectrum, all route choices that use transit could be considered a singular "transit" mode, often with separte walk and auto access modes (or possibley separate egress modes). On the other end of the spectrum, one could consider every possible [transit sub-mode](transit_sub_mode) as separate, also possibly diversified by access and egress mode.  Common definitions for the main mode include:

-   Local Bus
-   Express/Premium Bus
-   Commuter Rail
-   Ferry
-   Subway
-   Light Rail

### Considerations

The way mode choice models work, each additional choice will add an additional attractiveness to transit in general, so it is very important that each combination should:

-   be a feasible and known alternative to the subject the model is applied to (or estimated from) in mode choice
-   provide an additional level of accessibility to the choice. Being able to take a red bus or bus shouldn't make transit more attractive than taking a blue bus...but it is likely true that being able to take either the ferry, subway, or bus makes transit as a whole more attractive.

------------------------------------------------------------------------

