---
title: "Skim Matrix"
categories:
   - Needs Review
   - Activity Based Models
   - Land Use Transport Modeling
   - Public Transport (Transit) Modeling
   - Transportation Networks
   - Trip Based Models
   - Urban And Metropolitan Models
---

Introduction
============

A skim matrix is a matrix that provides [impedances](Impedance) between zones. Commonly, skim matrixes have the same number of rows and columns. All transportation modeling packages provide efficient ways of storing large skim files in compressed files.
An open-source format to store matrices called [open matrix](Open_Matrix_Format) (or OMX) is also available and is a good option for moving matrices between packages and/or programming languages.

Highway Skims
=============

A skim matrix provides travel time, distance, costs, or a combination thereof (called Generalized Costs) for each origin-destination zone-pair. Often, skims distinguish travel for single-occupancy vehicles (who may not use HOV lanes, and therefore, may experience different travel times), shared-ride 2 and shared-ride 3+. This distinction, however, is only of value if the network contains links that are limited to shared-ride 2 or shared-ride 3+ vehicles. The graphic below shows a snapshot of a skim table.

![](skimTable.png "fig:skimTable.png")
*Example: Skim Table with time, distance and toll for SOV (Single-Occupancy Vehicles) and HOV (High-Occupancy Vehicles) and time and distance for trucks*

Transit Skims
=============

Transit skims provide information on travel between all zones by transit modes. Such skims often include information on travel time, fare, number of transfers, and many [further attributes](Transit_networks#Values_Skimmed_on_the_Transit_Network). For more advanced [mode choice models](Mode_Choice), travel time is provided for each mode of transit separately, as some transit modes (particularly rail) are commonly evaluated more favorably than others. This way, a trip requiring 10 min by rail and 20 min by bus may be deemed less attractive than a trip that needs 20 min by rail and 10 min by bus.

Logsums
=======

It is common in travel demand modeling to use a combined [impedance](Impedance) across several modes, rather than just using travel time of travel distance by one mode. This combined measurement is called Mode Choice Logsum. It is calculated by

![](Logsum1.png "Logsum1.png")

where *U* is the logsum (or utility) to travel from *i* to *j* for purpose *k* at time *t* and

![](Logsum2.png "Logsum2.png")

where *V* is the impedance for a given mode that may include a mode-specific constant *α*, travel time *T* multiplied with a travel time coefficient *β*, travel costs *C* multiplied with a travel costs coefficient *γ*. Depending on the model design, further parameters could be added for selected modes, such as number of transfers, average wait time, access or egress time, etc.

------------------------------------------------------------------------

