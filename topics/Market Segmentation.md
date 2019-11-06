---
title: "Market Segmentation"
categories: "!Needs Review"
---

Idea of market segmentation in [Choice Models](Choice_Models) is that there is variation in the value attributed to various factors that individuals weigh as part of the decision-making process. There is often variation in tastes across:

-   Situations (i.e. working, escorting children, recreation)
-   Household attributes (i.e. number of autos, number of workers)
-   Personal attributes (i.e. age, gender)

##### Example market segmentation

Segmentation variable: auto availability
Idea that is being explored in this market segmentation: do individuals in zero auto households differently value transit across the variables of time, cost, and any variable not represented in the utility equation (aka the alternative specific constant)

No Segmentation (AKA a "pooled model")

:   Single coefficient for both time and cost
:   Utility (Transit) = C + βTime + βCost + ....

Partial Segmentation

:   Separate constant for zero auto households; and additional coefficient for the effect of time for zero auto households
:   Utility (Transit) = C + βZeroAutoHH + βTime + βTime\*ZeroAutoHH + βCost + ....

Full Segmentation

:   Every variable and constant are separate for zero auto households
:   Utility (Transit, for Zero Auto HH) = C + βTime + βCost + ....
:   Utility (Transit, for HH with Autos) = C + βTime + βCost + ....

Choosing Market Segments
------------------------

Market segmentation can occur at various levels, from one market segment, to a market segment for every individual, household, and situational variable. What is the appropriate level? A few considerations include:

-   Preferences and sensitivities to the dependent variable should be fairly homogenous across the segment. If there is variation, consider further segmentation.
-   Market segments should be statistically valid.
    -   Example null hypothesis: "sensitivity to mode choice is the same for zero auto households and households with autos"
    -   Sometimes your market segmentation is limited by the statistical validity of the sample size.
-   Market segments should be statistically helpful - they should improve the statistical power of the model
    -   Compare log-likelihoods

Popular Market Segments
-----------------------

Popular variables across which to segment models include:

-   Value of time / income group
-   Auto ownership / Auto Constraints
-   Trip purpose
-   Gender
-   Age
-   Households with Children

References
----------

------------------------------------------------------------------------

