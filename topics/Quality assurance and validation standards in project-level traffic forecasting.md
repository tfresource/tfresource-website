---
title: "Quality assurance and validation standards in project-level traffic forecasting"
categories:
   - Needs Review
   - Project Level Traffic Forecasting
---

Go to [Project-level traffic forecasting](Project-level_traffic_forecasting) topic page.

Inputs from Regional Model
--------------------------

FHWA’s “Travel Model Validation and Reasonableness Checking Manual II” ([VRC](Model_Validation_and_Reasonableness_Checking)) is incorporated in its entirety into these guidelines by reference. This VRC manual is intended for validation of regional travel models, and any regional model that is used for project-level forecasts must meet the requirements stated in the VRC manual.

The VRC manual does not contain specific validation standards for how well regional models must fit ground counts, essentially leaving this decision to individual agencies. There are minimum standards for the use of regional models as inputs into project level travel forecasts in the State of Ohio, as shown in the table below.

| Count Range, ADT | Suggested Minimum Standard | Best Practical Experience |
|------------------|----------------------------|---------------------------|
| 0-499            | 200%                       | 166%                      |
| 500-1499         | 100%                       | 80%                       |
| 1500-2499        | 62%                        | 48%                       |
| 2500-3499        | 54%                        | 47%                       |
| 3500-4499        | 48%                        | 32%                       |
| 4500-5499        | 45%                        | 27%                       |
| 5500-6999        | 42%                        | 25%                       |
| 7000-8499        | 39%                        | 23%                       |
| 8500-9999        | 36%                        | 18%                       |
| 10000-12499      | 34%                        | 19%                       |
| 12500-14999      | 31%                        | 16%                       |
| 15000-17499      | 30%                        | 14%                       |
| 17500-19999      | 28%                        | 11%                       |
| 20000-24999      | 26%                        | 10%                       |
| 25000-34999      | 24%                        |                           |
| 35000-54999      | 21%                        |                           |
| 55000-74999      | 18%                        |                           |
| 75000 or more    | 12%                        |                           |

The validation standards are interpreted as root-mean-square error ([RMSE](https://en.wikipedia.org/wiki/Root-mean-square_deviation)) for all counted links in the count range. The standard for any peak period is identical. For example, if a link has an [ADT](Average_Daily_Traffic) count of 13,000 and a [peak hour count](Design_Hourly_Volume) of 1100, the minimum acceptable RMSE is 31% (not 100%).

Refined Outputs
---------------

Two standards apply to refined outputs from a forecast.

1.  Any refinement technique should not attempt to refine the fit, as measured by RMSE, of a travel forecast to be better than the accuracy of the traffic count data used for the refinement. If a model is fit too tightly to data, then errors inherent in the data will be locked into any future forecast. In addition, any smoothing ability of the refinement technique will be defeated when traffic count data is matched too tightly.
2.  All refined forecasts must meet the requirements of the “half-lane rule and extensions” (see article) with a 50% confidence interval.

It is entirely possible that a refined forecast cannot meet one of the requirements of the above two paragraphs, in which case the forecast is not valid.

