---
title: "Regression Analysis"
categories:
  - Statistics
  - Topic Circles
---

<PagesInCategory category="Statistics" />

## Introduction ##

Regression analysis serves to explore the relationship between different variables, such as the number of cars registered in a city and the population of a city. This figure shows that there is -- not surprisingly -- a close relationship between the population in a city and the number of cars registered. 

![](regressionCarsPopulation.png 'regressionCarsPopulation.png')

We write can write this relationship as 
$$cars = f(population) + \epsilon$$
Read: The number of $cars$ is a function of $population$ plus the error term $\epsilon$ (epsilon). The figure above shows that population does not perfectly predict the number of registered cars (otherwise, all point would align on a perfect diagonal line). The error term $\epsilon$ captures this missing information, as well as measurement errors and suboptimal model specifications. By collecting more data, we could reduce the error term $\epsilon$.

$cars$ is the dependend variable (also called response or target), and $population$ serves as the independent variable (also called inputs, regressors, covariates, features) with which we try to explain the number of cars registered in the city. 

## Purpose of regression analysis ##

The goal of regression analysis is to:
- Accurately predict unseen cases.
- Understand which independent variables affect the dependent variable by which degree.
- Assess the quality of the available predictors and inferences.

## Notation ##

The function $f(population)$ is commonly written as $f(Y)$, where $Y$ is the usual notation of the dependent variable. In the simplest form, two parameters need to be estimated with a statistical software:
$$f(Y) = \beta_0 + \beta_1 \times population$$
Where
- $\beta_0$ is a constant
- $\beta_1$ a paremeter that defines the impact of population on the number of registered cars
- $population$ is the population in a given city

## Parameter estimation ##

Using the statistical software R, the coefficients were estimated as:

Variable | Estimate   | Std. Error | t value | Pr(>t)
------   | ------| ------| ------| ------
(Intercept) | 105752.3 | 1.082e+05  | -1.752  | 0.099 
Population | 0.3378216 | 2.287e-01 | 11.562 | 3.52e-09

Multiple R-squared:  0.8931,	Adjusted R-squared:  0.8864 

This estimate can be used in our equation as:
$$f(Y) = 105752.3 + 0.3378216 \times population$$
This equation can be used to calculate the number of registered cars for another city. For example, a city with a population of 500,000 would be expected to have  274,663 registered cars. 

This example shows a linear regression analysis, which is the simplest form of regression analyses. Linear regressions are almost never ''correct'', but a linear model often serves as a good and interpretable approximation to the unknown true function. 

## Transformation of variables ##

It is also possible to apply transformations of independent variables (or even the dependent variable). For example, a polinomial transformation improves the model fit slightly:

$$f(Y) = \beta_0 + \beta_1 \times population + \beta_2 \times population^2$$

Variable | Estimate   | Std. Error | t value | Pr(>t)
------   | ------| ------| ------| ------
(Intercept) | 104.6245 | 5.99e+04  | 0.00  | 0.099 
Population | 0.5518616 | 1.08e-01 | 5.10 | 0.00013
Population^2 | -0.0000000589 | 2.88e-08 | -2.04 | 0.05929

Multiple R-squared:  0.916,	Adjusted R-squared:  0.905 

Using the resulting equation
$$f(Y) = 104.6 + 0.552 \times population - 0.0000000589 \times population^2$$
The number of registered cars for a city with a population of 500,000 would be 261,321.

The most common transformations in regression analysis include: 
- Logarithmic transformation: $\beta_0 + log(x)$
- Power transformation: $\beta_0 + \beta_1 \times x^\alpha$
- Polynomial transformation: $\beta_0 + \beta_1 \times x + \beta_2 \times x^2 + \beta_3 \times x^3 ...$
