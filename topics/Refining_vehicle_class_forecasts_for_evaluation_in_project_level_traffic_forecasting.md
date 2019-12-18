---
title: "Refining vehicle class forecasts for evaluation in project-level traffic forecasting"
categories:
  - Needs Review
---

Several of the methods for project level traffic forecasting depend upon having good vehicle class forecasts. Very often forecasts are done for all vehicles together or for aggregations of vehicle classes. Forecasts may be “refined” as to their vehicle classes by using a technique from NCHRP Report 255 (Chapter 11 of the “Users Guide”) and NCHRP Report 765 (Section 9.3). See [Vehicle mix refinements](Vehicle_mix_refinements_in_project_level_traffic_forecasting) for a brief introduction. Essentially, this technique employs data from recent classification counts in order to factor broad truck (or total vehicle) categories into narrower truck categories. Classification data from the exact highway being analyzed are preferred to data from similar locations or data from regional-wide averages. The analyst should follow these steps (as an expansion and application of Step 4 from [Vehicle mix refinements](Vehicle_mix_refinements_in_project_level_traffic_forecasting)).

-   Step 1. Obtain classification counts for the highway(s) being forecast. Counts should be tabulated by FHWA vehicle classes.
-   Step 2. Identify the vehicle classes in the original forecast by associating each class with one or more FHWA vehicle classes.
-   Step 3. Identify the vehicles classes in the refined forecast by associating each class with one or more FHWA vehicle classes.
-   Step 4. Using the classifications counts from Step 1, calculate the proportion of vehicles in each FHWA vehicle class.
-   Step 5. Calculate the portion of each original class (Step 2) to be associated with each refined class (Step 3).
-   Step 6. Apply the proportions in Step 5 to each original class forecast to obtain FHWA vehicle class forecast(s).
-   Step 7. Aggregate FHWA vehicle class forecasts to obtain the refined forecasts, as necessary.

The table below illustrates this concept on a hypothetical Highway AA where the original forecast follows the Quick Response Freight Manual and the refined forecast will be used for the purpose of establishing ESALs for a repaving project.

| FHWA Vehicle Class Description | FHWA Vehicle Type | QRFM Category (Step 2) | Hawaii Pavement Category (Step 3) | Percent of Truck + Bus (Step 4) | Percent of QRFM Category (Step 5) |
|--------------------------------|-------------------|------------------------|-----------------------------------|---------------------------------|-----------------------------------|
| Motorcycle                     | 1                 | 80%                    |                                   |                                 | -                                 |
| Automobile                     | 2                 | Automobile             | Automobile                        |                                 | 100.00                            |
| Pickup, Panel, Van             | 3                 | 4-Tire                 | Automobile                        |                                 | 100.00                            |
| Bus                            | 4                 |                        | Bus                               | 7.06                            | -                                 |
| 2 Axle Truck, Single Unit      | 5                 | Single Unit            | 2 Axle                            | 42.04                           | 75.41                             |
| 3 Axle Truck, Single Unit      | 6                 | Single Unit            | 3 Axle                            | 13.46                           | 24.14                             |
| 4+ Axle Truck, Single Unit     | 7                 | Single Unit            | 4-Axle                            | 0.25                            | 0.45                              |
| 3,4 Axle Truck, 1 Trailer      | 8                 | Combination            | 4-Axle                            | 12.22                           | 39.23                             |
| 5 Axle Truck, 1 Trailer        | 9                 | Combination            | 5 Axle                            | 15.01                           | 48.19                             |
| 6+ Axle Truck, 1 Trailer       | 10                | Combination            | 6 Axle                            | 2.31                            | 7.41                              |
| 5 Axle Truck, 2+ Trailer       | 11                | Combination            | 5 Axle                            | 0.00                            | 0.00                              |
| 6 Axle Truck, 2+ Trailer       | 12                | Combination            | 6 Axle                            | 0.05                            | 0.16                              |
| 7+ Axle Truck, 2+ Trailer      | 13                | Combination            | 6 Axle                            | 1.56                            | 5.01                              |

For this example, the QRFM forecast is refined by the computations shown in the next table below.

| FHWA Vehicle Class Description | Hawaii Pavement Category (Step 3) | Percent of QRFM Category (Step 5) | QRFM Forecast, Highway AA | Forecast for Pavement Category (Step 6) | Aggregated Categories (Step 7) |
|--------------------------------|-----------------------------------|-----------------------------------|---------------------------|-----------------------------------------|--------------------------------|
| Motorcycle                     |                                   | \*                                | \*                        |                                         |                                |
| Automobile                     | Automobile                        | 100.00                            | 8257                      | 8257                                    | 10807                          |
| Pickup, Panel, Van             | Automobile                        | 100.00                            | 2550                      | 2550                                    |                                |
| Bus                            | Bus                               | \*                                |                           |                                         |                                |
| 2 Axle Truck, Single Unit      | 2 Axle                            | 75.41                             |                           | 712                                     | 712                            |
| 3 Axle Truck, Single Unit      | 3 Axle                            | 24.14                             | 944                       | 228                                     | 228                            |
| | 4+ Axle Truck, Single Unit   | 4-Axle                            | 0.45                              |                           | 4                                       | 189                            |
| 3,4 Axle Truck, 1 Trailer      | 4-Axle                            | 39.23                             |                           | 185                                     |                                |
| 5 Axle Truck, 1 Trailer        | 5 Axle                            | 48.19                             |                           | 227                                     | 227                            |
| 6+ Axle Truck, 1 Trailer       | 6 Axle                            | 7.41                              | 472                       | 35                                      | 35                             |
| 5 Axle Truck, 2+ Trailer       | 5 Axle                            | 0.00                              |                           | 0                                       | 0                              |
| 6 Axle Truck, 2+ Trailer       | 6 Axle                            | 0.16                              |                           | 1                                       | 25                             |
| 7+ Axle Truck, 2+ Trailer      | 6 Axle                            | 5.01                              |                           | 24                                      |                                |

The QRFM forecast for Highway AA gives traffic volumes for four vehicle classes: automobiles = 8257 vpd; 4-tire trucks = 2550 vpd; single-unit trucks = 944 vpd; and combination trucks = 472 vpd. There is no need to disaggregate 4-tire trucks since all of them will be combined with automobiles in Step 7. Single-unit trucks must be disaggregated into 2-axle, 3-axle, and 4-axle trucks (FHWA classes 5, 6 and7). A similar disaggregation needs to occur for combination trucks (FHWA classes 8, 9, 10, 11, 12 and 13). As the last step, similar FHWA vehicle classes (7+8 and 12+13) are aggregated.

References
----------

NCHRP Report 255 and NCHRP Report 765

