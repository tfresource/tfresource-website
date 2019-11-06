---
title: "Pavement design in project-level traffic forecasting"
categories: "!Needs Review"
---

Guidelines for ESALs Computations
=================================

The major traffic input to the traditional AASHTO procedures is equivalent single axle loads (ESALs). The example below comes from Hawaii. But the Hawaii procedure first converts ESALs per vehicle to ESALs per vehicle per year, called ESALCs. Total ESALs are computed from knowledge of which type of trucks are in the traffic stream, how those trucks are loaded, and how many of those trucks are forecasted to traverse that road segment from the opening year to the design year. A total value for ESALs over all vehicle classes is specific to a single lane in one direction on a specific road segment. Additional data on lane distribution and directional split are required. The analyst may assume that the number of ESALs or ESALCs for a single truck of a standard type has already been computed.

Forecasts may be for all traffic together or broken out by vehicle class. In either case, there is a need convert forecast data into standard vehicles for computing total ESALs. Hawaii uses the vehicle classes in the table below when finding total ESALs. The table also gives example ESALCs, but these values may be subject to change. Light-duty trucks with 4 tires (while not in commercial service) should be categorized with automobiles for pavement design.

| Vehicle Class Description | FHWA Vehicle Type | Approximate ESALCs per Truck |
|---------------------------|-------------------|------------------------------|
| Automobile                | 2                 | None (ESAL \~ 0.0004)        |
| Bus                       | 4                 | 450                          |
| 2 Axle Truck              | 5                 | 30                           |
| 3 Axle Truck              | 6                 | 420                          |
| 4 Axle Truck              | 7, 8              | 600                          |
| 5 Axle Truck              | 9, 11             | 850                          |
| | 6 Axle Truck            | 10, 12, 13        | 950                          |

Source: Draft Pavement Design Manual, Hawaii DOT, 2007.

Depending upon the traffic forecasting methodology, there may be inconsistencies between the vehicle classes from the traffic forecast and vehicle classes needed for pavement design. For example, traffic forecasts following the Quick Response Freight Manual (either edition) breaks trucks into just three vehicle classes: four-tire trucks, single unit trucks of 6 or more tires, and combination trucks. See [Refining vehicle class forecasts for evaluation](Refining_vehicle_class_forecasts_for_evaluation_in_project-level_traffic_forecasting) for details on how to resolve such inconsistencies.

Guidelines for MEPDG Computations
=================================

The Mechanistic-Empirical Pavement Design Guide (MEPDG) also requires forecasts of traffic volumes by vehicle classes. However, the MEPDG requires speeds. Speeds from travel models using operational analysis procedures from the Highway Capacity Manual (or similar) are suitable for pavement design purposes. Otherwise, speed forecasts may need to come from post-processing. See Section 9.4.5 of NCHRP Report 765 for additional details about traffic inputs to the MEPDG.

References
==========

