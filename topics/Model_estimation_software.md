---
title: "Model Estimation Software"
categories:
  - Statistical methods
---

This page provides brief summaries of software used in statistical estimation of travel models.  The information provided here is from software developers and publicly available sources.  It should be noted that some of these software packages can be used for other types of model estimation besides travel models, and some packages that are designed more generally for statistical model estimation are used for travel model estimation.  Web site/contact information is provided for each software.

## ALOGIT
### Brief Description
ALOGIT is software for the statistical estimation of the coefficients of multinomial logit, tree-nested logit and simple mixed logit models, using the criterion of maximum likelihood to obtain coefficients that best explain observed behaviour. In this context, observations could be reported behaviour (e.g., in an interview), stated choices, ‘big data’ (e.g. from mobile phone records), or any combination of these.

The concept of ALOGIT is to provide highly tailored, and therefore very efficient, optimisation for a restricted range of model specifications, however including several important generalisations (including, for example, size variables). Highly specialised fast calculation routines are provided, for example to calculate exact first and second derivatives of the likelihood function. In principle, there are no limits to problem sizes.

### Uses of the software and types of users
ALOGIT was originally developed by Hague Consulting Group for its own travel demand forecasting and other choice modelling work. From 1986, it was also offered to clients and more generally. Users include governments, universities, and consultancies in Europe, the Americas and other parts of the world. Over 500 installations have been made, while user requirements have led to many improvements.

The primary use of the software is to estimate the parameters of travel demand models, where the speed and capacity of ALOGIT are important in dealing with the large-scale problems that are encountered in this area of modelling. In other areas, ALOGIT is often used because of its flexibility, for example in combining data from multiple sources, and again where the size of the problem (in terms of the numbers of alternatives, parameters and observations) would present difficulties.

[Website](https://alogit.com)

## Apollo
### Brief Description
Apollo is a very flexible tool for the estimation and application of choice models in the R programming language. A number of popular models are available to use and combine, including multinomial, ordered, nested, cross-nested, exploded and fractional logit, as well as multiple discrete continuous and user-defined models. Mixing and hybrid structures (e.g. latent variables) can be easily combined with any kind of model. Random heterogeneity, such as random coefficients or latent classes, are supported for all and any kind of model. Multiple post-estimation analysis tools are available, such as forecasting, cross-validation, bootstrap, and posterior (individual-level) parameter estimation. Apollo allows for both classical and Bayesian estimation. Built-in multi-threading support allows for seamless transition to high-performance-computing.

Thorough documentation, multiple examples, and an active community forum are
available at the [project website]( https://www.ApolloChoiceModelling.com).

### Uses of the software and types of users
Choice models are extensively used to analyse discrete choice experiments as well as revealed preferences data in areas such as transport demand analysis, marketing, health and environmental economics, and many others. In transport, they are used to study mode choice, destination choice, and time use, among others.

[Website](https://www.ApolloChoiceModelling.com).
[Forum](https://www.ApolloChoiceModelling.com/forum).

## Biogeme
### Brief Description
Biogeme is a open source Python package designed for the maximum likelihood estimation of parametric models in general, with a special emphasis on discrete choice models. It relies on the package Python Data Analysis Library called Pandas.
For the sake of computational efficiency, the core of Biogeme is implemented in C++ and relies on parallel computing.
Biogeme provides an automatic differentiation module that allows one to obtain analytical first and second derivatives for any model, so that the user focuses only on the modeling, not on the implementation details of the estimation. The documentation consists on several videos, technical reports, and many examples that show concretely how to develop various models.

### Uses of the software and types of users
The software has been designed for beginners in choice models and in Python, and is used a lot for teaching. Simple models can be estimated without advanced programming skills. But advanced users can also benefit from the Python environment to investigate complex models. It is therefore also used for research, and by professionals from the private sector.
Website:
https://biogeme.epfl.ch/index.html

## Gauss
### Brief Description
The GAUSS platform is a complete analysis environment with the built-in tools you need for estimation, forecasting, simulation, visualization, and more. GAUSS can be used to run the latest models from researchers or for building custom models.
### Uses of the software and types of users
Government agencies and corporations use GAUSS to get access to the latest transportation and choice models created by top researchers. GAUSS integrates with any internal or customer facing data source, application, or interface so you can get the results you need in a friendly and familiar environment.

[Website](www.aptech.com)
[Contact](https://www.aptech.com/contact-us/)

## Larch
### Brief Description
Larch is a free, open-source Python library that provides tools for the estimation and application of logit-based discrete choice models, primarily multinomial logit and nested logit models, although cross-nested, latent class and mixed logit model are also available.  It is designed to integrate with other popular open-source Python tools including numpy, numba, xarray, and sharrow, to facilitate exceptionally fast processing of large-scale linear-in-parameters models.  Larch has been used successfully to estimate multinomial and nested logit models with thousands of nests, tens of thousands of alternatives, and using datasets with tens of millions of discrete observations. It also includes facilities for creating and re-using logsums, making it a convenient tool for estimating chains of choice models, as often found in activity-based models.  Model estimation results are available in multiple formats, including live review in a Jupyter notebook, as well as via customizable reports in Excel and HTML files.

### Uses of the software and types of users
Larch is primarily designed for parameter estimation in discrete choice models, but it also can be used in model application.  The primary audience is model developers.  Users who are familiar with both Python and the mathematical structure of discrete choice models should be able to dive in using the documentation and examples at on the project [https://larch.newman.me]().  Users with less experience in either may also benefit from the online course on these topic at [https://pytransport.github.io/]().

[Website](https://larch.newman.me)
Jeff Newman, jeff@newman.me

## NLOGIT
### Brief Description:
NLOGIT is a general econometrics package.  It is used for estimation and analysis of a large variety of regression type models, with a focus on models for discrete outcomes. The largest segment of the suite of programs is used for estimation and analysis of the sort of multinomial choice models used in modeling individual demand and behavior in the realm of transport.  The essential parts of the package are used for statistical analysis, model development and post estimation analysis.  One of the common uses is in the analysis of data from survey based choice experiments.  NLOGIT partners with the experimental design package, Ngene (http://www.choice-metrics.com).  Models such as multinomial logit and probit, mixed logit, nested logit, etc., are provided for estimation based on the user's data.  There is also a command language that lets users program their own estimation and analysis routines. Data may also be simulated for experimental analyses.

### Uses of the software and types of users:
Econometric analysis involves data preparation, model estimation, hypothesis testing, and post estimation analysis such as computation of partial effects, elasticities, willing to pay measures, and model simulation of market behavior.  Among the users of NLOGIT are applications in banking, government regulatory authorities, official statistics bureaus, public planning authorities, central banks around the world, public utility authorities, marketing research institutes, agricultural authorities, social research departments, medical and health research institutes, and thousands of other diverse private, government, and educational sites where powerful modeling tools are used.

[Website](www.nlogit.com)

## R
### Brief Description:
The statistical programming language R is the most commonly used software for model estimation. In contrast to commercial packages, R is free of charge and can be downloaded and installed on Linux, macOS and Windows. It is an established package that is used both by beginners and professionals. Most users of R also install the free integrated development environment (IDE) software RStudio, which provides a nice interface to handle code, input data and outputs. While both the Apollo package and the Biogeme software (see below) are more powerful, the standard features in R are sufficient for many applications in transportation.

Regression analysis is used if the dependent variable is a continuous (metric) variable, such as miles driven, income or population. The ml() command is used is used in R for regression analysis. Discrete choice analysis is used to estimate coefficients for a nominal or ordinal dependent variable, such as mode of transport, vehicle type or trip destination. The logit model (and its derivations) is the most common method for discrete choice analysis. Typically, the mlogit library is loaded into R to estimate logit models, which will provide the command mlogit(). For many basic multinomial logit estimations, this commands is sufficient. Some more complex estimations, such as nested logit models, mixed logit models, probit models or rank-ordered logit models are included in the mlogit package as well. For more complex formulations (such as a nested model with an exogenously given nesting coefficient, cross nested models), the Apollo package and the Biogeme software (see below) are necessary.

### Uses of the software and types of users:
Various researchers and practitioners.

The R-Software can be downloaded for free here: [https://www.r-project.org/]()
The integrated development environment (IDE) RStudio can be downloaded for free as open-source edition here: [https://www.rstudio.com/products/rstudio/]()

## statsmodels
### Brief Description:
statsmodels is a Python module that provides classes and functions for the estimation of many different statistical models, as well as for conducting statistical tests, and statistical data exploration. An extensive list of result statistics are available for each estimator. The results are tested against existing statistical packages to ensure that they are correct. The package is released under the open source Modified BSD (3-clause) license.

### Uses of the software and types of users:
Various researchers and practitioners.

[Website](https://www.statsmodels.org)

## TransCAD
### Brief Description:
TransCAD, in addition to its functionality as a model application platform and GIS, is also a model estimation software.  TransCAD supports the estimation of linear regression and logit discrete choice models, the two most commonly used model forms for travel demand modeling.  TransCAD’s model estimation functionality is directly and easily accessible through the user interface, with no need for coding, but can also be scripted for testing a number of model specifications.  TransCAD produces maximum likelihood estimates of model parameters along with standard errors of the estimates and T statistics for each variable as well as overall model goodness-of-fit statistics such as R-squared and pseudo-r-squared.  TransCAD’s logit model estimation supports simple binary and multinomial logit models, complex multi-level nested logit models, and spatial logit or destination choice models.  The module is flexible and allows the user to build complex utility functions using market segmentation and variables from multiple files including both tables (e.g., for zonal variables) and matrices (e.g., for impedances).  TransCAD saves the model estimation results in a file which can then be used directly in model application.

### Uses of the software and types of users:
TransCAD can be used to develop both regression and logit models for use in travel demand modeling or other applications.  With its easy-to-use, graphical interface and scripting capabilities it is both accessible to novice model developers and powerful enough to support advanced users.

[Website](www.caliper.com)
Contact: sales@caliper.com or tcsupport@caliper.com
