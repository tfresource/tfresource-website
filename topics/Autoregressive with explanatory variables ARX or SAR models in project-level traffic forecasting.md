---
title: "Autoregressive with explanatory variables (ARX or SAR) models in project-level traffic forecasting"
categories:
   - Needs Review
---

Objective
=========

Autoregressive (AR) models may be made statistically stronger and more policy sensitive by including explanatory variables. Explanatory variables may be demographic or socioeconomic or they can be spatial.

Background
==========

The most elementary of ARX and SAR models look like:

T~n~=a~0~ + a~1~T~(n-1)~ + b~1~x~1~

where x~1~ is an explanatory variable and b~1~ is an empirical coefficient. If the explanatory variable is a demographic or socioeconomic, then this equation would be an ARX model. If the explanatory variable is traffic count on another highway segment (lagged or unlagged), then this equation would be an SAR model. SAR models have shown to be particularly useful for very short-term traffic forecasts (e.g., 15 minutes into the future).

Guidelines
==========

Statistical models of traffic volume are stronger when they contain causal variables and do not rely upon arbitrary trend assumptions. Ideally, the inclusion of an explanatory variable will reduce a lagged term’s significance far enough so that it can be removed from the model.

Explanatory variables are most often socioeconomic or demographic. They must be able to be forecasted into the future.

Advice
======

A SAR model may be considered when the traffic on the highway segment is known to be well correlated with traffic on a second segment (upstream, downstream or parallel) and the traffic on that second segment has already been forecasted with some degree of confidence, such as from a regional travel forecasting model.

Items to Report
===============

-   Regression statistics, including R^2^, standard error of the estimate, and the t-score on the coefficient for each lagged variable and each explanatory variable.
-   Forecasted traffic volume for the design year.
-   The range associated with the 50% error in the forecast.

References
==========

