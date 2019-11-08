---
title: "Box-Cox transformations in project-level traffic forecasting"
categories:
  - Needs Review
---

Objective
=========

A Box-Cox transformation is used to stabilize the amount of variation in a time series.

Background
==========

Linear regression assumes that the statistical distribution of data across a time series is roughly constant (technically called “homoscedastic”). For example, the amount of variation early in a time series should be similar to the amount of variation late in a time series. In places where traffic is growing over time, this assumption is often violated. Such violations are said to be “heteroscedastic”. A Box-Cox transformation creates a new data series, which potentially has better statistical properties. After a model has been estimated, results must be inversely transformed back to the units of the original data series.

Guidelines
==========

A Box-Cox transformation uses the following formulas to stabilize the amount of variation in a data series.

$${ T }_{ \beta }^{ }=\frac { { T }_{ }^{ \beta }-1 }{ \beta } ,\quad \beta &gt;0$$

or

$${ T }_{ \beta }^{ }=\ln { T } ,\quad \beta =0$$

where β is a constant to be selected by the analyst, T is the original variable and T~β~ is the transformed variable. Each item in the data series of the dependent variable (e.g., traffic count) is so transformed prior to the regression analysis. Subsequently, the estimates from a regression equation must be inversely transformed with these formulas.

$$T={ \left( 1+\beta { T }_{ \beta }^{ } \right) }^{ \frac { 1 }{ \beta } },\quad \beta &gt;0$$

or

$$T={ e }^{ { T }_{ \beta }^{ } },\beta =0$$

given the originally selected value of β.

Importantly, a value of β must be selected so as to best improve the stability of the variation in the data series. Because variability in traffic count data tends to be related to time, a good value of β can be found by a simple trial-and-error process.

There are three natural values of β, but another value of β may be selected empirically. A value of β = 0 implies that variation in the data series is proportional to the value of the data series itself. A value of β = 0.5 implies that variation in the data series is made up of many similar random influences where the number of those influences is proportional to the value of the data series. A value of β = 1 implies that the data series is sufficiently homoscedastic without need for any transformation.

The following steps should be followed to determine the value of β for a series of traffic counts.

-   Step 1. Divide the traffic count data series into thirds: early, middle and late.
-   Step 2. Using a single value of β apply a Box-Cox transformation to each third. Start with a value of β between 0 and 1, i.e., within the range of values with natural interpretations.
-   Step 3. Compute the standard deviation of each transformed third. If the three standard deviations are similar, then use this value of β. If not try another value of β.
-   Step 4. Select a value for β that best equalizes the standard deviations of the thirds by repeating Steps 2 and 3 until satisfied.

An important goodness-of-fit statistic, the standard error, is no longer usable for determining the confidence range of the forecast, since the standard error as reported by the statistical software will not be in the correct, natural units, i.e., vehicles. The standard error cannot be inversely transformed. Therefore, it is necessary to use the model to backcast the entire inversely transformed data series, then find the standard error by making a slight adjustment to the population standard deviation of the residuals. (A residual is the difference between the data series and the model for any given point in time.) Use this formula for getting the correct standard error, SE:

$$SE=\sigma \sqrt { \frac { n }{ n-k-1 } }$$

where σ is the population standard deviation of the residuals, n is the number of periods in the data, and k is the number of independent variables.

Advice
======

Box-Cox transformations are optional. Box-Cox transformations may be skipped when:

-   The data series looks reasonably homoscedastic when graphed;
-   The analyst makes an overt decision to emphasize those data points with higher traffic counts, often the most recent counts; or
-   There is little growth is traffic for the road segment across the whole time series.

As a rule of thumb, a Box-Cox transformation should be seriously considered when there is a factor of two difference between the early-third standard deviation and the late-third standard deviation.

Items to Report
===============

-   All reportable items from the linear regression or AR analysis.
-   Standard deviation of the inversely transformed residuals.

References
==========

