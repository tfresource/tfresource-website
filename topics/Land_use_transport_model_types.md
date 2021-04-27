---
title: "Land use-transport model types"
categories:
  - Topic Circles
  - Land Use Transport Modeling
---
<PagesInCategory category="Land Use Transport Modeling" />


Land Use Model Types
--------------------

As in any field of science that is developing over several decades, various different model designs have been proposed over the course of the years. The predominant types are listed below, with examples of categories provided in parenthesis.

-   Aspatial (Forrester’s Urban Interactions)
-   Gravity (Lowry, DRAM/EMPAL)
-   Entropy (Wilson's Entropy Model)
-   Sketch planning (WhatIf, I-PLACE^3^S, U-PLAN, CommunityViz)
-   Discrete choice (DELTA, IRPUD)
-   Cellular Automata (LEAM)
-   Input/Output style (MEPLAN, TRANUS, PECAS)
-   Microsimulation (UrbanSim, SILO)

Even though Forrester's aspatial has not been applied widely, it was a milestone of urban modeling that stimulated the development of further land use models. The [gravity](Destination_Choice_Theoretical_Foundations.md#gravity-models) model has been popular for its simplicity over decades, and some regions apply derivates of gravity models even today. Wilson's entropy model has been further developed many times, though it remained an academic exercise for most part. Sketch planning models are used widely as planning support systems to date. They commonly do not integrate with travel demand models, but rather serve to visualize various assumptions of growth distributions. Discrete choice models simulate spatial decisions (such as household move, business relocation or the location choice for a developer) explicitly, rather than estimating the emerging outcome on the aggregate. Cellular Automata models do the opposite. Those models estimate the change of raster cells based on characteristics of neighboring raster cells. The underlaying decisions of single households that may lead to population growth is commonly not analyzed by Cellular Automata.

The most prominent modeling concepts in operation today are models that follow the Input/Output model paradigm or are built as microsimulation models. It should be noted that there is some overlap between these categories. For example, many microsimulation land use models follow the discrete choice paradigm. Some Input/Output style models include microsimulations for selected aspects of the model. However, the majority of models can be grouped by these land use model types.

Although the basic design structure is similar for many land use models, there are at least three fundamental design features handled differently in various land use models:

### Behavioral or structure-explaining approach

Behavioral approaches aim at simulating the explicit behavior (such as marriage, birth, or re-location), whereas structure-explaining approaches attempt to simulate the outcome (such as population distribution) directly without dealing with the motivation that led population to be distributed in a certain way. Certainly, this distinction is simplifying and many models are somewhere between these two approaches. A common example for structure-explaining models is a Cellular Automata that simulates the state of a single raster cell based on the state of the surrounding raster cells. Cellular Automata models do not explain the change of a raster cell, but rather simulate the changed outcome. Another example are household evolution models and demographic models that frequently update a [synthetic population](Population_Synthesis) to a future year without dealing explicitly with choices that lead to a future population. Structure-explaining models tend to be less sensitive to policy scenarios because behavior is not represented explicitly in the model. Behavioral models, in contrast, aim at modeling the decision-making process of households, businesses, developers, among others, that may result in structural changes.

### Bid-rent or discrete choice approach

A classic distinction in land use models is the bid-rent approach and the discrete-choice approach. The bid-rent theory was first proposed by Alonso[^1]. According to this theory, every actor on the land use market makes bids for a piece of land, and the bidder with the highest offer gets the land. Because of transportation costs, actors are willing to make higher bids for land in more central locations. Because most office firms value transportation costs more than most households, the office employment makes the higher bids in the city center, whereas households bid higher in the suburbs. The [discrete-choice theory](Choice_models) commonly calculates [utilities](Utility) used to model decisions. The most popular discrete-choice approach is the [Logit Model](Choice_models), developed by Domencich and McFadden[^12]. Households, firms, and developers make choices among a finite set of alternatives. The utility of every choice is used to select one alternative; the higher the utility of a given alternative, the greater the probability this alternative will be selected. Not everyone chooses the best solution, but some deviation from the optimum distribution is realized.

An advantage of the bid-rent approach is that prices are simulated endogenously in the bidding process. A well-calibrated model generates realistic prices that represent well the highest bid made for every location. To reach the equilibrium price, the model needs to iterate until equilibrium prices are found and no one is willing to make a higher bid for any location. The bid-rent approach assumes market transparency and users who maximize their profit. The discrete-choice approach requires an additional land-price model, as prices are not updated automatically. Limited information is introduced explicitly in the discrete-choice approach by [logit models](Choice_models): owing to the lack of time and money to analyze all alternatives as well as the result of personal preferences, habits, and prejudices, some users make seemingly non-optimal choices in [logit models](Choice_models), which some argue is more realistic than the equilibrium outcome of bid-rent approaches. Overall, actors in the discrete-choice approach aim to satisfy their needs and not to maximize their profits.

Martinez (1992)[^13] has shown that the two approaches lead to similar model results. As a rule of thumb, bid-rent approaches work best in markets that are highly competitive and transparent. Discrete-choice approaches work better in markets that react with some time lag and in which users have to make decisions at a certain level of uncertainty.

### Aggregate or microscopic simulation

The third characteristic analyzed in this context is the distinction between aggregate and microsimulation land use models. Aggregate models cluster actors into certain groups, such as households by zone and by household type or firms by zone and by industry type. All actors in each group are assumed to have homogenous preferences. With a smaller number of groups, aggregate models store data efficiently and tend to have shorter run times. If more detail is added to the model, the handling of many groups may become cumbersome, and a disaggregated approach may become more appropriate. Disaggregate models store socio-economic data in a [synthetic population](Population_Synthesis) that defines every individual separately (usually, the unit of analysis is a household). Orcutt (1960)[^14] introduced microsimulation. In the following decades, land use, [travel demand](Activity_based_models) and network models have been developed that simulate every actor individually. The great advantage of microsimulation is the explicit simulation of the interaction between individuals. Hägerstrand (1967)[^15] showed in his theory of spatial diffusion how innovations are spread from a single actor to other actors who live in spatial proximity. Individuals who received the innovation become a sender themselves, further spreading this innovation at the microscopic level. Nobel Prize laureate Schelling (1978)[^16] showed with the self-forming neighborhood model how microscopically simulated households choose more segregated locations than the aggregate segregation desire would suggest.

Microsimulation models allow storing complex data sets more efficiently. Often, microscopic approaches are easier to communicate, as describing the behavior of single actors is less abstract than describing the homogenous behavior of groups. Because microscopic models simulate individual interaction explicitly, model results tend to be more coherent with urban theory.

However, model developments focused on adding ever more detail do not necessarily lead to the best models. By adding detail, model run times may suffer and in some cases the complexity of the model may exceed time and budget allocated to the model development. Microsimulation models require a random number generator to simulate choices. With different random numbers in each model run, the results in every run are slightly different due to the stochastic variation. This difference is insignificant if a very large number of actors are simulated (such as a location choice of 1 million households). Stochastic variation makes model output invalid if the output is analyzed at a detailed level (such as location behavior of a hundred households of household type 1 in neighborhood A), as the stochastic variation may exceed the scenario impact.


References
----------

[^1]: Alonso, W. (1960) A theory of the urban land market. In: Papers and Proceedings of the Regional Science Association, Vol. 6, No. 1, pp. 149-157.

[^12]: Domencich, T.A. and D. McFadden (1975) Urban travel demand: a behavioral analysis. North-Holland Publishing, Amsterdam.

[^13]: Martinez, F.J. (1992) The bid-choice land-use model: an integrated economic framework. In: Environment and Planning A, Vol. 24, No. 6, pp. 871-885.

[^14]: Orcutt, G.H. (1960) Simulation of economic systems. In: American Economic Review, Vol. 50, No. 5, pp. 893-907.

[^15]: Hägerstrand, T. (1967) Innovation diffusion as a spatial process. The University of Chicago Press, Chicago.

[^16]: Schelling, T.C. (1978) Micromotives and macro behavior. W. W. Norton & Company, New York. Pages 147 ff.
