---
title: "Global Positioning Systems (GPS) Data"
categories:
   - Needs Review
---

GPS data is derived from on-board vehicle devices or integrated systems, personal navigational devices, and (in some cases) personal mobile devices. GPS is generally the only type of origin-destination (OD) [big data](Big_Data) that can provide information specific to vehicle classes (e.g., trucks).

Vehicle Types and Sample Penetration
------------------------------------

An important distinction must be made between truck GPS data and other GPS data both because some providers only supply truck GPS data and because the sample penetration is extremely different for trucks and the rest of the population. This difference in sample penetration arises from the fact that most GPS data is derived from on-board vehicle devices or integrated systems which have become widespread in trucks, but cover only a relatively small portion of the general vehicle fleet. Truck GPS samples from multiple providers have been observed in the range of 9-12% of trucks on the road, however non-truck sample penetration may be as low as 1% or less of the vehicles in a corridor. This current low sample size for personal travel significantly limits the degree to which it can be generalized and expanded to accurately represent all travel. However, the non-truck GPS sample penetration may increase and allow it to become a more valuable dataset as vehicle technology advances and the fleet becomes more connected.

Precision
---------

GPS data is the most precise source of locational data. Precision is generally in the range of 1 to 10 meters, and often less than 5 meters. This level of precision allows vehicles to be located not only in zones at their origins and destinations but to individual roadways along their routes which allows identification of ODs for specific facilities. Like other types of passive OD data, GPS data is often purchased or processed to produce aggregate trip OD matrices. However, in some cases, providers may share disaggregate GPS trace data, but only with significant limitations on its use.

Device Identifier Persistence
-----------------------------

Device or vehicle ID persistence varies among GPS datasets. Some truck GPS datasets have significant ID persistence while other truck GPS datasets (and all currently available non-truck GPS datasets) have device persistence of 24 hours or less. Limited device ID persistence precludes the use of more direct methods of correcting for demographic biases and significantly limits the usefulness of data in understanding long-distance (or visitor) travel patterns. The filtering of intermediate stops on long-distance trips is also of importance in many applications. For trucking, the filtering of intermediate stops is important for GPS data to be compared to or combined with commodity flow data.

References
==========

