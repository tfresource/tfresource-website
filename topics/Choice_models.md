---
title: "A Self Instructing Course in Choice Modeling"
categories:
  - Logit Manual

---

Introduction
------------
Logistic regression, or as they are often referred to in travel forecasting, logit models are one of the fundamental and most widely used methods in modeling and forecasting travel behavior and patterns.  

Logit models predict the probability of two or more discrete categorical or nominal variables, generally based on various explanatory observed or independent variables.  For example, given some conditions such as a married couple owns one car, a logit model preicts the probability that either A) the husband chooses to drive to work or B) he chooses to take public transit.  

Logit models can describe probabilities of discrete events or outcomes of stochastic processes that have nothing to do with human agents, but are more commonly used, especial in transportation science, to model human behavior like the example above, and in this context are refered to as choice models.  Choice models predict the probability that a human agent chooses given alternative actions.  The explanatory variables and their associated parameters are understood in this context as describing the attractiveness or "utility" of an alternative to the choice-maker or agent.  The mathematical form of the models can actually be derived from the economic theory of random utility maximization.  Technically, logit models are only one form of discrete choice model, corresponding to the assumption of a particular distributional form for the random component or error term of the utility; however, logit models are by far the most widely used discrete choice models because they have a convenient closed mathematical form which is much easier to use and understand than alternatives.  

Logit models are used in travel forecasting to predict many choices made by travelers about their travel.  They were first used to predict the [choice of travel mode](Mode_choice), e.g., personal automobile or public transit, as early as the 1960s.  Since then, their use has expanded to [destination choice](Destination_Choice_Models), activity participation choices, temporal choices, and route choices among many others.  

Given this widespread use for so many aspects of travel behavior, it is valuable for professionals involved in travel forecasting to have a fundamental grasp of logit models, and this section of the TFResource site, the Self Instructing Course in Choice Modeling, or Logit Manual, for short, is offered as a resource for those interested in developing this core competency.  

Overview
--------
The Logit Manual is divided into several sections or modules:  

- [Introduction to Logit Modeling](LM1)
- [Elements of the Choice Decision Process](LM2)
- [Utility-Based Choice Theory](LM3)
- [The Multinomial Logit Model](LM4)
- [Data Preparation and Estimation of Simple Multinomial Logit Models](LM5)
- [The Nested Logit Model](LM8)
- [Advanced Discrete Choice Modeling](LM12)

Acknowledgments
---------------
The content of this section or 'category' of the TFResource site has been developed based on "A Self Instructing Course in Mode Choice Modeling: Multinomial and Nested Logit Models" prepared for the U.S. Department of Transportation, Federal Transit Administration by Frank S. Koppelman and Chandra Bhat with technical support from Vaneet Sethi, Sriram Subramanian, Vincent Bernardin, and Jian Zhang, 2006.  

The original content was prepared under funding of the United States Department of Transportation through the Federal Transit Administration (Agmt. 8-17-04-A1/DTFT60-99-D-4013/0012) to AECOMConsult and Northwestern University.  Valuable reviews and comments were provided by students in travel demand modeling classes at Northwestern University and the Georgia Institute of Technology.  In addition, valuable comments, suggestions and questions were given by Rick Donnelly, Laurie Garrow, Joel Freedman, Chuck Purvis, Kimon Proussaloglou, Bruce Williams, Bill Woodford and others.  

The original manual in pdf format, [A Self Instructing Course in Mode Choice Modeling: Multinomial and Nested Logit Models](http://www.ce.utexas.edu/prof/bhat/courses/lm_draft_060131final-060630.pdf) by Koppelman and Bhat (2006), is still available and remains a valuable reference.  

The content presented here has been edited and adapted for incorporation in the TFResource.org site as a living document by Vince Bernardin, Greg MacFarlane, and Jeff Newman with the intent and hope that the original material could be made more accessible to a broader audience, especially a new generation of professionals and students more oriented towards web-based information.  The editors consulted the original authors before embarking on this new edition, and both Frank and Chandra responded with enthusiam for the new edition. 

>*"We are very pleased that you are considering making the contents of the manual more widely available. Our sole purpose when writing the manual was to help people get into this exciting field, and we could not be happier to learn about your efforts that further our original purpose."* - Chandra Bhat, 10/14/2020 

FTA was also consulted and agreed that the material was already in the public domain and gave its blessing on the project to make the manual more accessible.  

As with the original manual, the editors and original authors are indebted to all who contributed to or commented on any version of but retain responsibility for any errors or omissions.  

<PagesInCategory category="Logit Manual" />


Other Text Resources
--------------------

In addition to the materials presented here, we recommend these two additional references which should be on the reading list for any person wanting to get seriously into choice modeling:

1.  [Discrete Choice Models with Simulation](http://elsa.berkeley.edu/books/choice2.html) by Kenneth Train (2009)
2.  [Discrete Choice Analysis: Theory and Application to Travel Demand](http://www.amazon.com/Discrete-Choice-Analysis-Application-Transportation/dp/0262022176) by Ben-Akiva and Lerman (1985)

Videos
------

To start off on a path of having a rich resource on discrete choice modeling, Chandra Bhat has also contributed a set of videos that hopefully will allow for fast, yet deep, returns on time investment.

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
