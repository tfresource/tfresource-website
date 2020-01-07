---
title: "Autoregressive (AR) models in project-level traffic forecasting "
categories:
  - Needs Review
---

## Objective

Autoregressive (AR) models are linear equations containing independent variables that consist of the data series to be forecasted itself but with the data series lagged by a fixed number of periods.  AR models are particularly useful for analyzing a data series with complex cyclical patterns with difficult to describe behavioral mechanisms.

## Background

A closely related set of statistical models was developed by Box and Jenkins for the analysis of time series data.  In total this set is referred to as ARIMA, autoregressive integrated moving average.  Only the autoregressive (AR) part of ARIMA has proved consistently useful for the analysis of highway traffic data within the transportation engineering literature.  AR models (exclusive of MA terms) also have the advantage of being estimable on a spreadsheet, as well as within stand-alone statistical analysis software packages.  Each of the three parts of ARIMA have their own particular advantages and they can be used in combination with one another:

- Autoregressive (AR).  Autoregressive models use the data series to forecast itself.  That is, the data series is both the dependent variable and the independent variable, but “lagged” by a fixed amount of time (as represented by an integer number of periods earlier in time).  Multiple lags can be created.  Autoregressive models are similar to linear trend models in some respects, but they also have the ability to cleanly handle cyclical variations in the dependent variable.  By careful choice of lags, it is also possible to do some data smoothing with an AR model.  AR models can be enhanced by including explanatory variables. (See [Autoregressive with explanatory variables (ARX or SAR) models in project-level traffic forecasting](Autoregressive_with_explanatory_variables_ARX_or_SAR_models_in_project_level_traffic_forecasting).)
- Integrated (I).  Integrated models forecast the period-to-period differences in the data series.
- Moving Average (MA).  Moving average models perform data smoothing by accounting for errors that occur when the data series is used to backcast itself.

ARIMA models may be enhanced by including explanatory variables or by including spatially-related variables.  An AR model with an explanatory variable may be referred to as an ARX model.  An AR model with a spatial variable may be referred to as an SAR model.
Names for AR models often embed the number of lags.  For example, an AR(2) model would include two lag terms.  Here are two elementary AR models:

T<sub>n</sub>=a<sub>0</sub>+a<sub>1</sub> T<sub>(n-1)</sub>

(AR model with a single lag at one period)

T<sub>n</sub>=a<sub>0</sub>+a<sub>1</sub> T<sub>(n-1)</sub>+a<sub>2</sub> T<sub>(n-12)</sub>

(AR model with a lag at one period and a lag at twelve periods)

The second example is typical of AR models for forecasting monthly traffic counts.  Ideally, lags should be chosen both statistically and logically.

## Guidelines

Traffic data have certain qualities that are well understood, so the lags for AR models are often logically selected.  There needs to be one lag for each cyclical pattern in the traffic count time series.  In addition, there needs to be at least one lag to the most recent earlier traffic count, so that the period-to-period trend can be established.

Statistical packages with built-in ARIMA capabilities routinely give two series of statistics that are helpful in choosing lags:  autocorrelations and partial autocorrelations.  Of these two, the autocorrelation is most understandable and most compatible with logical selection of variables for an AR model.  An autocorrelation is a Pearson’s correlation coefficient, r, of the series with itself at a given lag.  Thus, there can be many autocorrelations.  A large autocorrelation (in magnitude, that is near -1 or +1) at a specific lag would suggest that the lag be included in the AR model.  Autocorrelations can also be created on a spreadsheet.  A partial autocorrelation is a Person’s correlation coefficient of the series with itself, but after all smaller (e.g., more recent) lags have been accounted for in a regression equation.  There are also many partial autocorrelations.  While partial autocorrelations can theoretically be calculated on a spreadsheet, the calculation process is tedious and, therefore, not recommended for routine analyses.

Given the simplicity of AR models, lags should be selected logically with the assistance of the autocorrelations.  Then each lag should be tested to determine whether it is statistically significant within the regression equation.  A trial-and-error process works well, in most cases, to create a good and complete set of lags.

Choosing closely spaced or redundant lags can be helpful for data smoothing.  For example, a highly irregular time series might benefit by including a lag at two periods as well as a lag at one period.  A cycle might have a clearer effect if the lag for the cycle is doubled, for example by including a lag at 24 periods as well as a lag at 12 periods for monthly data.
Since lags are required independent variables, forecasting with an AR model usually means forecasting every time period between the most recent data point and the desired future period, thereby allowing all lags to be forecast, too.
The 50% error range may be computed from the standard error.  For details see [Trend models](Trend_models_in_project_level_traffic_forecasting).

## Advice

The follow steps constitute a recommended procedure for developing an AR model of traffic volumes on a highway segment.

- Step 1.  Assemble all count data.  Graph the data.  Determine any cyclical patterns in the data.  For example daily count data would have both a yearly cycle and a weekly cycle.
- Step 2.  Calculate the series of autocorrelations for all lags through at least two full cycles of the shortest cycle.  Calculate several autocorrelations near all logical lags for other cycles.  Autocorrelations will generally spike at lags that should be included within the model.  However, an autocorrelation tends to decrease as the number of periods in the lag increases, so this decrease should be incorporated into the interpretation of a “spike”.  See the note below about how to calculate autocorrelations on a spreadsheet.  Stand-alone statistical software packages with ARIMA capabilities will automatically calculate autocorrelations and provide those autocorrelations graphically.
- Step 3.  Select a set of candidate lags.  It is a good idea to start with a recent lag and one lag for each cycle.  It may be necessary or desirable to increase the number of terms to create an average.  Several closely clustered lags can remove natural and random fluctuations in the independent variable terms.
- Step 4.  Estimate the model.  See the note below about how to estimate an AR(1) model on a spreadsheet.
- Step 5.  Determine whether the estimated model is good and complete.  Check all terms for statistical significance.  Take note of the standard error of the estimate.  If the model is not satisfactory, revise the model by adding or removing lag terms and repeat Step 4.
- Step 6.  Perform a forecast with the model.  A forecast well into the future requires calculating the traffic volume for every period between the most-recent end of the data series and that future time.  Calculated volumes become calculated lags as the analysis steps forward in time.

Note on calculating autocorrelations on a spreadsheet.  An autocorrelation can be computed on a spreadsheet by placing the data series in two adjacent columns, but shifting one of the columns down by a number of rows corresponding to the lag.  Then any spreadsheet method for computing a Pearson r, such as the PEARSON function or the Analysis ToolPak in Excel, can be applied to the rows with data.

Note on estimating a simple AR model on a spreadsheet.  An AR model may be estimated on a spreadsheet using either built-in functions or statistical tools, such as the Analysis ToolPak in Excel.  An AR(1) model may be estimated by placing the data series in two columns, but shifting one of the columns down by the number of rows corresponding to the desired lag.  The original data series (unshifted) is the dependent variable and the shifted data series is the independent variable.  The regression uses all rows for which data is complete.  An AR(2) model may be estimated by adding a third column, but shifted down by another amount of rows corresponding to its lag.  Within Excel, all independent variables must be in adjacent columns.  An AR(2) model requires the Analysis ToolPak.

## Items to Report

- Regression statistics, including R<sup>2</sup>, standard error of the estimate, and the t-score on the coefficient for each lagged variable.
- Forecasted traffic volume for the design year.
- The range associated with the 50% error in the forecast.

## References

- Guidebook on Statewide Travel Forecasting Models
- NCHRP Report 765.
