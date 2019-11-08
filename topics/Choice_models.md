---
title: "Choice models"
categories:
  - Needs Review
  - Destination Choice Models
  - Land Use Transport Modeling
  - Topic Circles
---

Econometric discrete choice analysis is an essential component of studying individual choice behavior and is used in many diverse fields to model consumer demand for commodities and services. Typical examples of the use of econometric discrete choice analysis include studying labor force participation, residential location, and house tenure status (owning versus renting) in the economic, geography, and regional science fields, respectively; choice of travel mode, destination and car ownership level in the travel demand field; purchase incidence and brand choice in the marketing field; and choice of marital status and number of children in sociology.

Utility Maximization
--------------------

Most econometric choice models are based on the theory of [utility](utility) maximization. The utility maximization rule is based on two fundamental concepts. The first is that the attribute vector characterizing each alternative can be reduced to a scalar utility value for that alternative. This concept implies a compensatory decision process; that is, it presumes that individuals make "trade-offs" among the attributes characterizing alternatives in determining their choice. The second concept is that the individual selects the alternative with the highest utility value. The focus on utility maximization in travel demand modeling is based on its strong theoretical background, extensive use in the development of human decision making concepts, and amenability to statistical testing of the effects of attributes on choice.

The utility maximization rule states that an individual will select the alternative from his/her set of available alternatives that maximizes his or her utility. Then, if the analyst is privy to all aspects of the internal decision making process of decision agents as well as their perception of alternatives, the analyst would be able to describe that process and predict choice using deterministic utility models. However, the analyst is not privy to all factors influencing the choice decisions of agents. This is recognized in random utility choice models by including stochasticity in the development of the utility function of decision agents, representing the effects of unobserved (to the analyst) factors influencing the valuation of an alternative by an agent. This stochasticity translates utility valuations into the probabilities of choosing each alternative rather than predicting that an individual will choose a particular alternative with certainty. Effectively, these probabilities reflect the population shares of people with the given set of observed (individual and alternative) characteristics and facing the same set of alternatives choosing each one of the alternatives.

Model Classes
-------------

### Binary and Multinomial Logit

The simplest random utility maximizing model to analyze choices is the binary logit model (in the case of two alternatives) or the multinomial logit (MNL) model (in the case of more than two unordered alternatives). Most choices studies in transportation modeling correspond to unordered alternatives in that there is no intrinsic ordering implied by the alternatives.
(insert mathematical form of multinomial logit here) Other examples of Multinomial Logit Models are [mode choice models](Mode_Choice), \[ and \[.

#### Assumptions

There are three basic assumptions which underlie the MNL model:

The first assumption is that the random components of the utilities of the different alternatives are independent and identically distributed (IID) with a type I extreme-value (or Gumbel) distribution. The assumption of independence implies that there are no common unobserved factors affecting the utilities of the various alternatives. This assumption is violated, for example, if a decision-maker assigns a higher utility to all transit modes (bus, train, etc.) because of the opportunity to socialize or if the decision maker assigns a lower utility to all the transit modes because of the lack of privacy. In such situations, the same underlying unobserved factor (opportunity to socialize or lack of privacy) impacts on the utilities of all transit modes. The presence of such common underlying factors across modal utilities has implications for competitive structure. The assumption of identically distributed (across alternatives) random utility terms implies that the extent of variation in unobserved factors affecting modal utility is the same across all modes. In general, there is no theoretical reason to believe that this will be the case. For example, if comfort is an unobserved variable the values of which vary considerably for the train mode (based on, say, the degree of crowding on different train routes) but little for the automobile mode, then the random components for the automobile and train modes will have different variances. Unequal error variances have significant implications for competitive structure.

The second assumption of the MNL model is that it maintains homogeneity in responsiveness to attributes of alternatives across individuals (i.e., an assumption of response homogeneity). More specifically, the MNL model does not allow sensitivity (or taste) variations to an attribute (e.g., travel cost or travel time in a mode choice model) due to unobserved individual characteristics. However, unobserved individual characteristics can and generally will affect responsiveness. For example, some individuals by their intrinsic nature may be extremely time-conscious while other individuals may be “laid back” and less time-conscious. Ignoring the effect of unobserved individual attributes can lead to biased and inconsistent parameter and choice probability estimates.

The third assumption of the MNL model is that the error variance-covariance structure of the alternatives is identical across individuals (i.e., an assumption of error variance-covariance homogeneity). The assumption of identical variance across individuals can be violated if, for example, the transit system offers different levels of comfort (an unobserved variable) on different routes (i.e., some routes may be served by transit vehicles with more comfortable seating and temperature control than others). Then, the transit error variance across individuals along the two routes may differ. The assumption of identical error covariance of alternatives across individuals may not be appropriate if the extent of substitutability among alternatives differs across individuals. To summarize, error variance-covariance homogeneity implies the same competitive structure among alternatives for all individuals, an assumption which can be generally difficult to justify.

The three assumptions discussed above together lead to the simple and elegant closed-form mathematical structure of the MNL. However, these assumptions also leave the MNL model saddled with the “independence of irrelevant alternatives” (IIA) property at the individual level. The IIA property states that for any individual, the ratio of the probabilities of choosing two alternatives is independent of the presence or attributes of any other alternative. The premise is that other alternatives are irrelevant to the decision of choosing between the two alternatives in the pair. The IIA property can be unrealistic in many cases. Thus, relaxing the three assumptions may be important in many choice contexts.

Outside Resources
-----------------

The technical details of the MNL model, as discussed in the previous section, as well as models that relax many limitations of the MNL, are discussed in many excellent resources on choice modeling. Three such resources are listed here, and should be on the list of references to read for any person wanting to get seriously into choice modeling:

1.  [Discrete Choice Models with Simulation](http://elsa.berkeley.edu/books/choice2.html) by Kenneth Train (2009)
2.  [A Self Instructing Course in Mode Choice Modeling: Multinomial and Nested Logit Models](http://www.ce.utexas.edu/prof/bhat/courses/lm_draft_060131final-060630.pdf) by Koppelman and Bhat (2006)
3.  [Discrete Choice Analysis: Theory and Application to Travel Demand](http://www.amazon.com/Discrete-Choice-Analysis-Application-Transportation/dp/0262022176) by Ben-Akiva and Lerman (1985)

Videos
------

The resource is structured so that people from all over can contribute text and other materials. To start off on a path of having a rich resource on discrete choice modeling, the site is organized with a set of videos that hopefully will allow for fast, yet deep, returns on time investment.

1.  [General introduction to choice modeling](http://www.caee.utexas.edu/prof/bhat/Videos/Bhat/OnChoiceModeling.pptx)
2.  [Introduction and overview](http://www.caee.utexas.edu/prof/bhat/Videos/Srinivasan/Intro.zip)
3.  [Elements of the choice process](http://www.caee.utexas.edu/prof/bhat/Videos/Castro/Elementsofthechoiceprocess.wmv)
4.  Utility-based choice theory
5.  Components of utility
6.  Binary choice (BC) models: Structure and error distributions
7.  BC models: Logit/probit models and location/scale invariance
8.  Data needs for estimation
9.  BC models: Maximum likelihood estimation
10. [BC models: Fit measures](http://www.educreations.com/lesson/view/on-choice-modeling-goodness-of-fit/10118541/?ref=link)
11. BC models: Specification
12. BC models: Interpretation
13. BC models: Hypothesis testing
14. Multinomial logit (MNL) model: Overview, structure, and scale/location invariance
15. MNL model: Specification & interpretation
16. MNL model: IIA property
17. MNL model: Elasticity/marginal effects and interpretation
18. Consumer surplus and compensating variation from MNL models
19. MNL model: Model building, market segmentation, and closing


