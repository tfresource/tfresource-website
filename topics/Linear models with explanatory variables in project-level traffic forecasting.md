---
title: "Linear models with explanatory variables in project-level traffic forecasting"
categories:
   - Needs Review
---

Objective
=========

Alternatively to trend models, future traffic volumes may be strongly related to socioeconomic and demographic conditions rather than simple time. Regression equations that model traffic volumes using one or more explanatory variable may be more useful than simple trend models during scenario testing. Variables that have been related to traffic levels in previous studies include total personal income (as a proxy for local GDP), population and employment.

Traffic is often referred to as a derived demand. Traffic occurs because of personal and business activities. If traffic counts can be related to amounts of such activities, then it would be possible to forecast future volumes given changes in the amounts of these activities. With the use of any explanatory variable, it is important to make sure that a causal relationship exists and that the direction of causality make sense. A high correlation between variables suggests causality, but a high correlation does not assure causality.

Background
==========

A linear model with explanatory variables has the form:

$${ T }_{ n }^{ }={ a }_{ 0 }^{ }+\sum _{ i=1 }^{ N }{ { a }_{ i }^{ } } { x }_{ i }^{ }$$

where *T~n~* is the forecasted traffic volume (the dependent variable), *x~i~*‘s are the explanatory variables (or independent variables) and the *a~i~*’s are estimated coefficients.

Each explanatory variable must satisfy all of these criteria:

-   Plausibility. There must be a well understood relationship between traffic volume and the explanatory variable.
-   Correct direction of causality. A change in the variable must cause a change in traffic, not the other way around.
-   Importance. The coefficient for the variable must be significant and have the correct sign.
-   Ability to be forecast. The variable must be able to be forecasted into the future or has already been forecasted.
-   Objectivity. The variable must not be subjective, such as a result of a public opinion poll, and it must be measurable “on the ground”.
-   Uniqueness. The variable must not measure essentially the same thing as another explanatory variable in the equation or be a close restatement of the dependent variable (traffic count).

When choosing explanatory variables, it is important to remember that a traffic increase may be associated with any of these three effects.

-   There may be more traffic because there may be more vehicle trips.
-   There may be more traffic because vehicle trips may be longer.
-   There may be more traffic because drivers may have rerouted themselves to the facility being studied from some other facility.

Explanatory variables with the correct causality should have a direct, indisputable relationship to one of these three effects.

Guidelines
==========

Explanatory variables should be kept simple. They should be, for the most part, well-recognized socioeconomic or demographic characteristics.
An explanatory variable may be interpolated between years to replace missing data in the time series, provided that visual inspection of the time series shows that it is reasonably smooth and interpolation will not introduce distortions of the variable.

Explanatory variables may be “dummy”, having the values of 0 or 1. A dummy variable is 1 when something was happening and 0 when something was not happening. Dummy variables most often come in one or two forms:

-   Impulse: Something happened for only a short time and then stopped; or
-   Step: Something happened and that something continued to the end of the time series.

Traffic counts should be plotted against each candidate explanatory variable to visually determine that a good correlation exists, that the relationship has the correct slope and that there are no anomalies.

It is possible to improve the performance of an explanatory variable by limiting its geographic scope. For example, the population of a county would likely be a better explanatory variable for a road’s traffic in a place like Hawaii than the population of the whole state.

Particular care needs to be exercised when choosing highway supply characteristics as explanatory variables. Supply characteristics include such items as the number of lanes, functional class and quality of progression. Any given supply characteristic can be important, deceptive, irrelevant or complicated, depending upon the situation. The direction of causality is often unclear. While the use of supply characteristics is not prohibited, they need special justification for their inclusion as explanatory variables.

It is important to avoid multicollinearity within the regression equation that is caused by two or more explanatory variables that are highly correlated with each other. For example, the inclusion of both population and employment in the equation would likely increase its goodness-of-fit, but population and employment (most places) are nearly proportional to one another. It is possible that the coefficient for either population or employment will be given the wrong sign by the statistical software. A wrong sign may or may not be an issue, depending upon how the forecast is made, but the model, at best, will be difficult for the public to understand.

The use of “stepwise” regression to select among many explanatory variables should be avoided. Variables should be selected logically on their merits.

Advice
======

It is best if explanatory variables have already been forecasted by the state, a local MPO or another organization. County-level socioeconomic and demographic forecasts are available by purchase from private companies. Linear trend models may be used for forecasting explanatory variables as a last resort.

The coefficient for any explanatory variable must be significantly different from zero with a 95% probability as indicated by the t-score. If the equation has only one explanatory variable, the minimum absolute value of the t-score should be 7.0 for an implied accuracy of that coefficient to one full significant digit. If there are two explanatory variables, at least one coefficient should have a t-score no less than 5.0.
Time should be avoided as an explanatory variable.

When considering a models with many explanatory variables, it is best to have fewer variables (according to the Principle of Parsimony) than more variables, so long as the model explains the dependent variable well. The inclusion of many, weakly significant terms, without good theoretical rationale should be discouraged.

Items to Report
===============

-   Forecasts of explanatory variables.
-   Regression statistics, including R^2^, standard error of the estimate, and the t-score for all coefficients on explanatory variables.
-   Forecasted traffic volume for the design year.
-   The range associated with the 50% error in the forecast.

References
==========

