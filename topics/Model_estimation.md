---
title: "Model estimation"
categories:
  - Statistical Methods
---

Model estimation is the use of statistical analysis techniques to find
parameters that most likely explain observed data. Model estimation is a
component of [Model Calibration and Validation](Model_Calibration_and_Validation).

## Notation
Consider a statistical process where an outcome $y$ is a function of various
predictor variables $x_1, x_2, \ldots x_p$. It may be desirable to explain this
process with a *linear* equation,

$$y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \ldots + \beta_p x_p + \varepsilon$$

where $\beta_0, \ldots, \beta_p$ are parameters that "explain" the relationship between
the predictor variables and the outcome variables. The *residual* term $\varepsilon$ is a
random variable that accounts for the difference between the observed $y$ value
and the evaluation output of the linear function $\beta_0 + \beta_1 x_1 + \beta_2 x_2 + \ldots + \beta_p x_p$.

The notation for this equation can be simplified by using a matrix $X$ where the
columns are the different predictor variables $x_1, x_2, \ldots x_p$ and the
rows are different observations in a dataset. The first column consists of
ones and corresponds to the intercept $\beta_0$

$$
X = \begin{vmatrix}
1 & x_{11} & x_{21} & \ldots & x_{p1}\\
1 & x_{12} & x_{22} & \ldots & x_{p2}\\
\vdots & \vdots & \vdots &  & \vdots\\
1 & x_{1n} & x_{2n} & \ldots & x_{pn}\\
\end{vmatrix}
$$

The linear equation above then becomes $y = X\beta + \varepsilon$.
The purpose of *model estimation* is to find estimates of $\beta$ that minimize
the difference between the true observed response $y$ and the "fitted" response
$\hat{y} = X\hat{\beta}$.

### Ordinary Least Squares

Assume we have a linear equation $y = X\beta + \varepsilon$ and we want to find
the estimates $\hat{\beta}$; one plausible method would be to find values $\hat{\beta}$
that minimize the *sum of squared residuals*, or the distance between $y$ and $\hat{y} = X\hat{\beta}$.

$$SSR(\hat{\beta}) = \sum_{i = 1}^{n}(y - X\beta)^2$$

If we take the derivative of this sum with respect to $\beta$, set equal to zero
and solve for $\beta$, we arrive at the following estimator equation:

$$\hat{\beta} = (X'X)^{-1}X'y$$

This estimator is referred to as the *Ordinary Least Squares* (OLS) estimator.
If we assume that the residuals $\varepsilon$ are distributed normally with
variance $\sigma^2$, variance of the OLS estimates is

$$Var(\hat{\beta}) = \sigma^2(X'X)^{-1}$$


### Maximum Likelihood Estimation
OLS is powerful and adequate in many situations; however, there may be cases where
the assumptions of OLS modeling (normally distributed $\varepsilon$, etc.) are violated.
This is common in transportation engineering especially, where the outcome
variable $y$ is often discontinuous. In these cases, it is more common to use
*maximum likelihood estimation* (MLE).


In a linear model, we assume that the points follow a normal (Gaussian) probability
distribution, with mean $X\beta$ and variance $\sigma^2$:  $y = \mathcal{N}(X\beta, \sigma^2)$.
 The equation of this probability density function is:

 $$\frac{1}{\sqrt{2\pi\sigma^2}}\exp{\left(-\frac{(y - X\beta)^2}{2\sigma^2}\right)}$$

What we want to find is the parameters $\beta$ and $\sigma$ that *maximize* this
probability for all points $(x_i, y_i)$. This is the "likelihood" function, $\mathcal{L}$.
$$\mathcal{L} = \prod_{i=1}^n y_i = \dfrac{1}{\sqrt{2\pi\sigma^2}}\exp{\left(-\frac{(y - X\beta)^2}{2\sigma^2}\right)}$$

For various reasons, it's easier to use the log of the likelihood function:

$$\log(\mathcal{L}) = \sum_{i = 1}^n-\frac{n}{2}\log(2\pi) -\frac{n}{2}\log(\sigma^2) - \frac{1}{2\sigma^2}(y - X\beta)^2 $$

Most MLE programs work by having a computer attempt to find values of $\beta$
and $\sigma^2$ that maximize the value of this likelihood function. Note that for
a linear model $y = \beta X + \varepsilon$, the MLE and OLS estimates are equivalent.
MLE is most suitable to problems where an analytical solution is difficult or does
not exist.
