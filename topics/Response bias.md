---
title: "Response bias"
categories:
  - Needs Review
  - Travel Survey Data
---

In travel surveys, a response bias is a systematic tendency to respond to a range of questionnaire items on some basis other than the specific item content. Response bias is sometimes used synonymously with non-response bias.

There are two causes of response bias in transit origin/destination (O/D) surveys: (1) the inadequacy of the assumption or assertion that all surveyed travel variables and characteristics are normally distributed and (2) the practical consequence that surveys are completed and returned at a rate unequal to their distribution rate. A combination of the first and second causes can occur in some instances.

Statistically significant sample sizes are highly correlated to the distribution of the variables to be analyzed. This distribution is either known or estimated through previous research or previously-conducted surveys. In cases where the distribution is impossible to know a priori, the distribution is simply asserted. In the social sciences, variables are typically assumed to be normally distributed. Normal distributions have the practical consequence of requiring very small sample sizes, thereby minimizing the resources needed to conduct a survey. For some variables, such as gender and income, this assumption has been found to be accurate. For other key information, such as travel flows, this assumption has been found to be inadequate. Unfortunately, the sample sizes are not increased to address the non-normality of these variables, usually for budgetary and schedule reasons but also if those non-normally distribution variables are not a primary focus of the survey.

A similar simplifying assumption is made to the completion and return of surveys. Again, for some variables this assumption is a good one while the assumption falls short for others. Short transit trips are typically identified as one trip category that likely suffers from this assumption. This is due to the fact that the traditional Origin/Destination (O/D) survey instrument cannot be reasonably completed in less than 7-10 minutes, so trips of that length or shorter are unable to complete it and mail-back procedures fail to generate significant response rates. Other trips that have been found to suffer from this assumption are:

-   Walk-access riders, who typically respond less frequently than auto-access riders,
-   Riders who are less than 16 years of age, as these are unlikely to be surveyed for policy reasons,
-   Afternoon and evening riders, who may suffer from “survey fatigue” after completing an identical survey form for their trips earlier in the day, and
-   Trips occurring in heavy load conditions, which make the process of distributing and completing surveys very challenging.

Three situations occur if non-response bias is evident:

1.  The O/D survey has a meaningful number of records matching the rider or trip characteristic, but these are known to or suspected of being severely biased in some way,
2.  The O/D survey has a modest or insufficient number of records matching the rider or trip characteristic, and
3.  The O/D survey is devoid of any records matching the rider or trip characteristic.

It is important to note that a survey dataset can have one of these situations for each survey variable. Therefore, a practical conclusion is that all survey datasets have some level of non-response bias. What is important is to address non-response bias for the variables that are most important to the analysis at hand.

### State of Applied Practice

Practitioners have been aware of non-response bias for some time, particularly with respect to differences in response rates by individual routes and times of the day. Consequently, the traditional approach to handle these types of non-response biases is to expand the survey dataset by 3 dimensions: route, time-of-day and direction (RTD). Control totals are developed either by using boarding and alighting counts from Automated Passenger Counters (APCs) or through a manual counting process. This procedure mitigates for non-responses biases in these areas where the survey was able to capture a meaningful number of records across these dimensions.

Practitioners’ ability to resolve other types of non-response bias have been more limited in situations where the survey dataset is devoid or does not contain a sufficient number of records in the biased rider or trip category. Typically, the heavily-compressed schedules of onboard surveys usually prevent a full investigation of all non-response bias of the survey dataset and means to correct the non-response bias. Further complicating efforts is the practical consequence that transit surveys are conducted outside the purview of modeling staffs.

More recently, addressing non-response biases beyond RTD have elevated in importance. This has been partially caused by encouragement from the Federal Transit Administration (FTA) for sponsors seeking Small/New Starts funding to use, when possible, more straightforward forecasting methods. For instance, FTA has accepted methods that comprise of an expanded survey dataset and straightforward elasticity calculations. Another cause is the desire by transit modeling practitioners, also encouraged by the FTA, to use the expanded survey datasets to test and verify certain model parameters, such as pathbuilding component weights and the mode choice structure. These new procedures require a much higher accuracy than traditional surveying and expansion procedures are commonly able to provide.

Consequently, modeling practitioners are beginning to address non-response bias more rigorously. One area is by testing and applying weighting strategies beyond the standard RTD process. Iterative proportional fitting techniques (IFPT) for expansion are being used to detect and, if possible, correct for non-response bias related to trip distance.

Model practitioners are also taking a stronger role in survey development to ensure that the surveying methods themselves address or avoid entirely certain non-response biases. A common method now in onboard surveys is to collect auxiliary data to verify the survey expansion as well as support more complex survey expansion methods. This technique is now considered standard advanced practice.

Going forward, model practitioners are going even further by testing new and innovative sampling and surveying strategies. To address non-response bias from certain rail travel markets for their 2009 transit onboard survey, the Atlanta Regional Commission ensured that the survey results would match the actual distribution of riders by reviewing rail station-to-station flows and bus boardings by stop and segment. Most critically, ARC developed and applied its sampling strategy from these flows.

