---
title: "Transit Path Parameters"
categories:
---

Transit path building parameters are segmented by each transit user class.

Parameter Types
---------------

There are two types of parameters that are typically included in [transit path building](Transit_Network_Service_Determination):

1\. Parameters used to limit the scope of the built paths to those that are feasible and considered (for a specific mode, time of day, etc.)

-   Maximum initial wait time
-   Maximum access time/distance/cost by access mode
-   Maximum transfer time/distance
-   Maximum number of transfers
-   Maximum total path time/cost
-   Maximum access/egress zones
-   Spread parameters (for multi-path)

2\. Parameters that change the way time/cost are interpreted/perceived

-   \[available access and egress network mode type | \[Modal hierarchy\]\]
-   Boarding and transfer penalties between network mode type
-   Time penalties for certain network modes (including out-of-vehicle time)
-   Averaging maximums

Specific Parameters
-------------------

### Transfer and Boarding Penalties

Often certain features or an [impedance](Impedance) that may affect path choice cannot be represented in the literal time or cost of a path (as calculated by the software). Transfer and boarding penalties exist to reflect a multitude of factors such as:

-   Path unreliability associated with having to transfer (i.e., "transfer penalty")
-   Timed transfers between specific modes, which can make the transfer penalty smaller
-   The time and effort required to change platforms, stations, heights, sides of the street, or just to get on and off the vehicle

The difference between a boarding penalty and a transfer penalty is that a boarding penalty can be assigned to the boarding of a specific network mode (i.e., commuter rail, express bus, etc.) whereas a transfer penalty can reflect a transfer from one network mode to another (i.e., local bus to commuter rail vs. walking to commuter rail).

#### Real World Examples

-   The Metropolitan Transportation Commission (MTC) uses progressive boarding penalties of 5, 10, and 30 minutes for the first, second, and third transfers respectively. This approach makes paths with three transfers possible, but extremely unlikely.

-   The San Francisco County Transportation Authority uses a flat 6 minute penalty per transfer.

### Network Mode Weighting

Network mode weighting is instituted in order to both force the use of a particular submode even if it is suboptimal in terms of pure time, and to accurately represent the increased disutility of some aspects of a path such as waiting and walking between stops.

It is important that this set of paths also be considered optimal by the mode choice model; thus general consistency between the weights in path-building and weights in mode choice are critical.

#### Real World Examples

The following are examples of weights applied to specific path components, relative to in-vehicle time. 

The Metropolitan Transportation Commission uses the following weighting scheme (as of Travel Model One):

-   2.0 - Initial wait time, transfer wait time, walk access time, walk transfer time, walk egress time
-   1.0 - Drive access time, drive egress time
-   0.75 - Submode for which the skim is being built (i.e., BART for a Walk-to-BART skim)

The San Francisco County Transportation Authority uses the following weighting scheme (as of CHAMP 5.0):

-   2.0 - Initial wait time, transfer wait time, walk transfer time
-   1.0 - Drive access time, drive egress time (includes equiv. minutes for distance and tolls as generalized cost)
-   0.2 - Submode for which the skim is being built (i.e,. BART for a Walk-to-BART skim)

\~varying based on quality for Walk Access and Walk Egress. Max: 2.0, Min 0.5. Walk quality is determined based on an estimated generalized cost of distance, rise (slope), indirectness, road capacity, and density

Calibration
-----------

The calibration of path building and evaluating parameters is best-acheived by an [on-board survey](On_Board_Transit_Survey). The records from the on-board survey can be used to create an origin-destination trip-table, which can then be assigned to the network based on the above parameters and then compared to the on-board survey paths.

Implementation Considerations
-----------------------------

-   There are significant differences in the capabilities and interpretation of transit path parameters across software packages. Be sure to read the documentation that comes with your software package and understand how it works.

Reasonableness Checks
---------------------

-   Network mode weights and other parameters should be plausible and easily explained by real-life behavior.
-   Paths should reasonably reflect the on-board survey when assigned.
-   \[Path Choice Mode Choice Consistency\] should be maintained.
-   Map paths for representative origin-destination pairs.

Reporting Guidelines
--------------------

-   Report weights used for all modes and the behavioral explanation for their plausibility.
-   Report parameters used in path building and the underlying assumptions that they put in your model.
-   Report a comparison between your model paths and on-board survey paths using a parameter such as "path overlap."
-   Map

------------------------------------------------------------------------

