---
title: "Accessibilities"
categories: "!Needs Review,Land Use Transport Modeling"
---

Summary
-------

Accessibilities describe for every zone how many destinations can be reached how easily from that particular zone. Destinations of interest often are population and employment. If the number of destinations is growing in my vicinity, accessibility increases. Likewise, if it becomes easier to travel to those destinations (maybe because a new road reduced travel times), my accessibility increases as well.

Relevance of Accessibilities
----------------------------

Accessibilities are used in some advanced travel demand models to define number of trips generated and their trip length, assuming that more accessible neighborhoods tend to generate more short-distance trips. In less accessible regions, travelers are assumed to combine travel to several locations on single tours. [Land use models](Land_Use-Transport_Modeling) often use accessibilities to influence location choice decisions, as both households and firms (and therefore, developers of new floorspace as well) tend to prefer locations with higher accessibilities.

Walter G. Hansen (1959)[^1] proved a high correlation between accessibility and urban development. Although his study focused on residential development the principal idea of his approach is valid for businesses, too. First, he distributed the total metropolitan growth in the Washington, D.C. area to zones according to their share of vacant developable land. This "probable development" most likely differs form the actual development. Hansen calculated the ratio of actual development by probable development and showed that this ratio highly correlates with accessibility. Zones with a better accessibility had a higher share of residential development than their probable development proposed, and zones with a lower accessibility had a lower share of development. Hansen defined accessibility of zone *i* as being directly proportional to the size of activities in all zones and inversely proportional to some function of the distance of each zone to zone *i*.

Mathematical definition
-----------------------

The most popular definition of accessibility today is called potential accessibility or Hansen accessibility.
$${ A }_{ i }=\sum _{ J }^{ }{ W }_{ j }^\alpha \cdot f({ c }_{ ij })$$

where:\
${ A }_{ i }$: Accessibility in *i*\
${ W }_{ j }$: Number of activities in *j*\
$\alpha$: Parameter defining the weight of denser areas\
$f({ c }_{ ij })$: Function describing the travel costs (in terms of distance, travel time, travel costs, or a combination thereof) between *i* and *j*\
The function $f({ c }_{ ij })$ commonly is expressed as an exponential function:
$f({ c }_{ ij }) = \exp(-\beta \cdot {traveltime}_{ij})$. The parameter $\beta$ has a negative sign to reflect that longer travel times decrease accessibility.

This Hansen Accessibility was enhanced by Wilson (1967)[^2] resulting in a similar but behaviourally richer approach to estimate accessibility:

$${ A }_{ i }=\sum _{ J }^{ }{ X }_{ i }{ Y }_{ j }{ O }_{ i }{ D }_{ j } \cdot \exp(-\beta \cdot { c }_{ ij })$$

with $${X}_{i} = [\sum _{ J }^{ }{ Y }_{ j }{ D }_{ j } \cdot \exp(-\beta \cdot { c }_{ ij })]^{-1}$$
and $${Y}_{j} = [\sum _{ i }^{ }{ X }_{ i }{ O }_{ i } \cdot \exp(-\beta \cdot { c }_{ ij })]^{-1}$$
where\
${ A }_{ i }$: Accessibility in *i*\
${ X }_{ i }{ Y }_{ j }{ O }_{ i }{ D }_{ j }$: Term describing the interaction between *i* and *j* depending on number of
activities with origins *O* and destinations *D*\
${ c }_{ ij }$: Travel distance (or travel time) from *i* to *j*\
$\beta$: Parameter that defines the influence of travel distance (or travel time)\
Today, a great variety of different accessibility indicators is used to evaluate access of a location to input materials and in particular to markets. A comprehensive list of accessibilities can be found in Geurs and van Wee (2004)[^3] and Schürmann et al. (1997)[^4].

Example
-------

The maps below show accessibilities that have been calculated using the Maryland Statewide Transportation Model (MSTM). For these graphics, the Hansen Accessibility was used:
$${ A }_{ i }=\sum _{ J }^{ }{ W }_{ j }^\alpha \cdot \exp(-\beta \cdot { t }_{ ij })$$
Auto peak travel time was used as the [impedance](Impedance) ${ t }_{ ij }$.
The four maps visualize the impact of the two parameters $\alpha$ and $\beta$.

|                                                               |                                                               |
|---------------------------------------------------------------|---------------------------------------------------------------|
| Low impact of travel time, low impact of urban centers\       
 $(\alpha = 1.0; \beta = -0.3)$                                 | High impact of travel time, low impact of urban centers\      
                                                                 $(\alpha = 1.0; \beta = -0.5)$                                 |
| ![](accessibilities1.png "accessibilities1.png") | ![](accessibilities2.png "accessibilities2.png") |
| \                                                             | \                                                             |
| Low impact of travel time, high impact of urban centers\      
 $(\alpha = 1.5; \beta = -0.3)$                                 | High impact of travel time, high impact of urban centers\     
                                                                 $(\alpha = 1.5; \beta = -0.5)$                                 |
| ![](accessibilities4.png "accessibilities4.png") | ![](accessibilities5.png "accessibilities5.png") |

References
----------

------------------------------------------------------------------------

[^1]: Hansen, Walter G. (1959) How accessibility shapes land use. Journal of the American Institute of Planners 25: 73-76.

[^2]: Wilson, Alan G. (1967) Statistical Theory of Spatial Distribution Models. Transportation Research 1: 253-269.

[^3]: Karst T. Geurs, Bert van Wee (2004) Accessibility evaluation of land-use and transport strategies: review and research directions. In: Journal of Transport Geography, Volume 12, Issue 2, June 2004. Pages 127-140

[^4]: Schürmann, Carsten, Klaus Spiekermann and Michael Wegener (1997) Accessibility Indicators. Berichte aus dem Institut für Raumplanung 39. Dortmund: Institut für Raumplanung. Online resource: <http://www.spiekermann-wegener.com/pub/pdf/IRPUD_Ber39.pdf>

