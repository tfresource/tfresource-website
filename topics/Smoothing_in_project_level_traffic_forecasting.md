---
title: "Smoothing in project-level traffic forecasting"
categories:
  - Needs Review
---

Objective
---------

The objective of smoothing is to reveal the underlying trend in a time series so that the time series can be more clearly related to explanatory variables.

Background
----------

Smoothing is used to stabilize a time series containing considerable variations, but smoothing is used in traffic forecast principally for removing cyclical variations prior to any estimation process. For example, smoothing can be used to eliminate seasonal variations in traffic due to vacations, school sessions, holiday shopping and other effects tied to the time of year. One set of results from smoothing are “seasonal adjustment factors” that can be used to relate smoothed or yearly forecasts to individual time periods (such as months). The preferred method of smoothing of traffic data is central moving average.

Guidelines
----------

Smoothing can be helpful when developing a linear trend model or a linear model with explanatory variables.
Central moving average takes the average of traffic counts for exactly one complete cycle with ½ cycle before a particular period and ½ cycle after that period, including the period itself. For example, if the moving average of traffic is being calculated for May of 2005, then the average should be taken over the twelve months between November of 2004 and October of 2005. The smoothed data series will terminate about ½ cycle ahead of the unsmoothed data series.

Smoothing is done prior to the statistical analysis step. When dealing with cycles of an even number of periods, the averaging range should be selected such that the last complete smoothed data point is as near to recent as possible.
The statistical analysis of the smoothed data is carried out in the same way as unsmoothed data, using linear regression. See [Trend models](Trend_models_in_project_level_traffic_forecasting) and [Linear models with explanatory variables](Linear_models_with_explanatory_variables_in_project_level_traffic_forecasting).

A seasonal adjustment factor for a period is average of the ratios of the unsmoothed data series to the smoothed data series. A traffic forecast for a specific time period in the future may be obtained by applying that period’s seasonal adjustment factor to a forecast of the smoothed traffic.

Advice
------

A series of monthly average traffic counts can be statistically stronger than a series of annual traffic counts, given that there are more data points. However, explanatory variables should be available monthly or nearly so for a monthly traffic forecast. Some interpolation to obtain monthly data is acceptable.

Central moving average may be used to smooth any cyclical data series, such a traffic counts across a day or across a week.

Other simple smoothing techniques from the literature, such as “exponential smoothing”, have not been shown to be advantageous for analysis of traffic counts.

Explanatory variables exhibiting cyclical variations should also be smoothed. In such cases, a smoothed forecasted value for the explanatory variable should be used in any forecast.

Items to Report
---------------

-   Seasonal adjustment factors

References
----------

NCHRP Report 765.

