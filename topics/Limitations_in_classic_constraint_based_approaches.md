---
title: "Limitations in classic constraint based approaches"
categories:
  - Needs Review
  - Activity Based Models
---

Classic constraints-based approaches are characterized by some limitations:

## 1. Individual accessibility


Most models consider individual [accessibility](Accessibility) not household accessibility.
Recently, research has accumulated which has attempted to address these limitations.

### Individual accessibility to household accessibility

[Neutens, et al. (2008)](http://www.sciencedirect.com/science/article/pii/S019897150800032X) and [Soo, et al. (2009)](http://books.google.nl/books/about/Towards_a_Multi_Activity_Multi_Person_Ac.html?id=R4fhSAAACAAJ&redir_esc=y) suggested extensions of individual-level measures of accessibility to household-level measures based on space-time prisms. Their work has in common that (i) household members consider possible task allocations, (ii) the feasibility of the resulting schedules is examined using classic concepts, and (iii) individual’s utility as a measure of accessibility is combined in some manner to arrive at a household utility measure. The two approaches differ in terms of operational decisions. [Neutens, et al. (2008)](http://www.sciencedirect.com/science/article/pii/S019897150800032X) did not explicitly consider task allocation within household, whereas [Soo, et al. (2009)](http://books.google.nl/books/about/Towards_a_Multi_Activity_Multi_Person_Ac.html?id=R4fhSAAACAAJ&redir_esc=y) started with possible agendas that result from task allocation. In addition, [Neutens, et al. (2008)](http://www.sciencedirect.com/science/article/pii/S019897150800032X) only considered the space-time prism to examine the feasibility of a schedule, whereas [Soo, et al. (2009)](http://books.google.nl/books/about/Towards_a_Multi_Activity_Multi_Person_Ac.html?id=R4fhSAAACAAJ&redir_esc=y) also took into account time windows, travel time ratios, minimum duration and travel price. Finally, [Neutens, et al. (2008)](http://www.sciencedirect.com/science/article/pii/S019897150800032X) used the simple sum of individual utilities, whereas [Soo, et al. (2009)](http://books.google.nl/books/about/Towards_a_Multi_Activity_Multi_Person_Ac.html?id=R4fhSAAACAAJ&redir_esc=y) apply a more complex function, originally introduced in travel behavior research by [Zhang and Fujiwara (2006)](http://www.sciencedirect.com/science/article/pii/S019126150500010X), which accounts for interactions between household members and interactions between activities. Liao, et al. (2013) suggested a more powerful framework, based on multi-state supernetwork to simulate household accessibility.

## 2. Isotropic environment


Classic space-time prisms assume isotropic conditions in the sense that travel is equally easy in all directions, which is invalid.Recently several algorithms have been developed to identify space-time prisms under such non-isotropic conditions

### Non-isotropic condition

([Kwan and Hong 1998](http://meipokwan.org/GS_1998.html); [Kwan , 2000](http://meipokwan.org/Extend_2000.html); [Wu and Miller](http://www.rita.dot.gov/bts/sites/rita.dot.gov.bts/files/publications/journal_of_transportation_and_statistics/volume_04_number_23/paper_01/index.html), [Miller, 2005a](http://onlinelibrary.wiley.com/doi/10.1111/j.1538-4632.2005.00575.x/abstract), [2005b](https://journals.sagepub.com/doi/abs/10.1068/b31154), [Neutens, et al., 2008](http://www.sciencedirect.com/science/article/pii/S019897150800032X); [Yu and Shaw, 2008](http://www.tandfonline.com/doi/abs/10.1080/13658810701427569#preview); [Shaw and Yu, 2009](http://www.sciencedirect.com/science/article/pii/S0966692308001324), and [Miller and Bridwell, 2009](http://www.tandfonline.com/doi/abs/10.1080/00045600802471049#preview); [Fang, et al., 2011](http://www.sciencedirect.com/science/article/pii/S0966692310001006)). [Downs and Horner, (2012)](http://www.sciencedirect.com/science/article/pii/S0966692312000804) suggested and illustrated the concept of adaptive velocity density estimation, which allows the velocity to vary in time and space. Their approach involves breaking down the space-time path into discrete segments and allowing the maximum speed to vary between segments of the space-time path. [Kuijpers, et al. (2010)](http://www.tandfonline.com/doi/abs/10.1080/13658810903321339#preview) generalized the concept of anchor points to anchor regions: This approach, based on rough sets, involves constructing a lower and an upper bound, representing respectively an individual’s minimum and maximum space-time prisms under travel time uncertainty. The locations inside the lower bound are certainly reachable, while the area outside the upper bound represents space-time locations that are certainly unreachable. [Chen, et al. (2013)](http://www.tandfonline.com/doi/abs/10.1080/00045608.2013.834236#preview) generalized this notion in their reliable space-time prism model, defined as the set of space-time locations where an individual can participate in an activity and arrive at the destination with at least α on-time arrival probability. Their model can represent individuals’ space-time extents under various on-time arrival probabilities (i.e. ∀α ∈ (0,1) and therefore is a generalization of Neutens, et al. (2007), which only describes the minimum and maximum space-time extents (i.e. α ≈ 0 and α ≈1).

## 3. Uncertainty representation

Conceptualization of individual and household choice behavior does not include any mechanisms related to choice behavior under uncertainty. A few papers addressed the issue of decision-making under uncertainty.

### Uncertainty

[Ettema and Timmermans (2007)](http://onlinelibrary.wiley.com/doi/10.1111/j.1538-4632.2007.00702.x/abstract) considered the implications for measurement of accessibility. They derived equations for (i) fixed respectively free end time of the first activity, (ii) fixed respectively free duration of the second activity and (iii) free respectively fixed start time of the third activity. Rasouli and Timmermans (2013)simulated schedule adaptations due to travel time uncertainty.

Generalisation
--------------

The recent literature has also evidenced some interesting generalisations of the classic space-time prism concept. [Neutens, et al. (2008)](http://www.sciencedirect.com/science/article/pii/S019897150800032X) and [Kang and Scott (2008)](http://link.springer.com/article/10.1007%2Fs11116-007-9146-4) derived overlapping prisms for two persons, later generalized to the concept of social interaction potential([Farber, et al. (2013)](https://www.tandfonline.com/doi/abs/10.1080/00045608.2012.689238)). Space-time prisms are also increasingly used to define choice sets ([Arentze and Timmermans, 2000](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.474.9610&rep=rep1&type=pdf); [Scott and He, 2012](http://www.sciencedirect.com/science/article/pii/S0966692312000841); [Yoon, et al., 2012](http://link.springer.com/article/10.1007%2Fs11116-012-9407-8); [Chen and Kwan, 2012](http://www.tandfonline.com/doi/abs/10.1080/13658816.2011.624520#preview)), and have been extended to include ICT (e.g., [Kwan, 2007](http://dspace.library.uu.nl/handle/1874/31656); [Yu and Shaw, 2008](http://www.tandfonline.com/doi/abs/10.1080/13658810701427569#preview); [Schwanen and Kwan, 2008](http://www.sciencedirect.com/science/article/pii/S0016718507001790); [Yin, et al., 2011](http://www.sciencedirect.com/science/article/pii/S0966692310001547)). Examples of this work have recently been brought together in a special issue of Environment and Planning B ([Rasouli and Timmermans, 2013](http://vivo.libr.tue.nl/display/publication283401)).


