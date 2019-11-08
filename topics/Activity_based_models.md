---
title: "Activity-based models"
categories:
  - Needs Review
  - Topic Circles
---

**Activity-based models** are based on the principle that [travel demand](http://en.wikipedia.org/wiki/Travel_behavior) is derived from people's daily activity patterns. Activity-based models predict which activities are conducted when, where, for how long, for and with whom, and the travel choices they will make to complete them. Having this type of detailed model at their disposal allows researchers, practitioners, and policy makers to evaluate the effect of alternative policies on individuals travel behavior at a high level of [temporal](Temporal_Data) and [spatial](Spatial_Data) resolution and select the best policy alternative considering a potential wide range of performance indicators. For a comprehensive introductory overview of this paradigm, consider reading the [Activity Based Modeling Primer](Activity_Based_Modeling_Primer) published under SHRP2 in 2014.

Background
----------

Activity based models represent an emerging practice in regional transportation planning. [Explaining activity-based models to a general audience](Explaining_Activity_Based_Models_to_a_General_Audience) remains an ongoing challenge. The genesis and continued support for their development is derived from the challenges of modern transportation planning practice itself, especially with regard to distinguishing between the social outcomes of transportation policy and the underlying choices made by travelers.

While academic research and development has been underway since the 1970s, practical implementation in a handful of, mainly large, urban regions in the US began in the early 2000s. As of 2015, state of practice differs largely between countries. In Europe, a limited number of countries such as The Netherlands and Belgium and Switzerland apply activity-based models in practice.

Uses for Activity-Based Models
------------------------------

Activity-based models are uniquely suited to:

-   Permitting a continuous distribution of value-of- travel-time-savings across the population; essential for highway pricing evaluations
-   A clearer accounting of the full range of costs and utilities associated with both travel and activity by individual persons; improves transit mode choice estimation

These features also improve the analyst's ability to specify the parameters associated with local travel (e.g. walking and biking) as well as person-specific attributes that can effect travel choices (e.g. age, gender, willingness-to-pay). Because each person is uniquely specified and their personal itinerary is preserved, it is easier to make intuitive connections to spatial (e.g. land use, aerial image) databases that can better explain the continuity of activity patterns throughout the day.

Current Practice
----------------

As of 2015, in the US, activity-based modeling is still in its formative stages and not yet standard practice. [Explaining the advantages of activity-based models to a general audience](Explaining_Activity_Based_Models_to_a_General_Audience) is an ongoing challenge. The impetus for developing these models emerged mainly from shift in policy challenges put before transportation planners; specifically the need to evaluate [highway pricing](Pricing_and_Valuation) and other [demand management](http://en.wikipedia.org/wiki/Travel_demand_management) strategies as well as the impacts of [land use planning](http://en.wikipedia.org/wiki/Land_use_planning) that seek to mitigate travel demand, such as [transit-oriented](http://en.wikipedia.org/wiki/Transit_oriented_development) or [neo-tradtional](http://en.wikipedia.org/wiki/New_urbanism) developments. The [modeling features](Benefits_of_Activity_Based_Models) most common to the activity based modeling architectures currently include: [population synthesis](Synthetic_Population), [daily activity pattern](Activity_Travel_Planning_and_Decision_Making_Behaviors) formulation, [tour formation](tour_based_models) and [time_of_day](time_of_day) and [mode choice](Mode_Choice). Also common among current activity based models is the attention paid to maintaining a high degree of specification along both the person and geographic dimensions. This has been made possible by advances in both [GIS](http://en.wikipedia.org/wiki/Geographic_information_system) and computational capacity that permit processing and storage of much finer geographic specification (e.g. parcels) and [microsimulation](http://en.wikipedia.org/wiki/Microsimulation) and tracking of individual travel choices. These features permit the model results to retain the disaggregate character of the original \[Travel survey data|travel survey\] data; making them appealing to a wide variety of policy analyses.

Modeling Approaches
-------------------

Three theoretical approaches are distinguished in the construction of activity based models.

### Constraint-based models

This is the first generation of activity based models. The main goal of these models is to examine whether an individual \[activity agenda\] is feasible within particular space-time constraints. Examples include [PESASP (Lenntorp, 1976)](PESASP_Lenntorp_1976)), CARLA (Jones et al. 1983), BSP (Huigen, 1986), MAGIC (Dijst, 1995; Dijst and Vidakovic, 1997), and GISICAS (Kwan, 1997). There are some [limitations in classic constraint based approaches](limitations_in_classic_constraint_based_approaches)

### Utility-maximizing models

This stream of models are based on the premise that individuals maximize their [utility](utility) when organizing their daily schedule. Some representative examples are are the daily activity schedule model (Ben-Akiva, et al., 1996), and PCATS (Kitamura and Fujii, 1998)

### Computational process models

Some scholars advocate the idea of mimicking decision heuristics to avoid the unrealistic assumption uncertainty analysis\]\] that individuals are maximizing the [utility](utility) of their daily schedule. [ALBATROSS](ALBATROSS) (Arentze and Timmermans, 2000) and TASHA (Roorda and Miller, 2006) are examples of computational process models.

Early Applications in the US
----------------------------

Among the US agencies that pioneered activity-based modeling applications, studies have been conducted that evaluate their experience and performance. [ARC's Experience Using its CT-RAMP Activity-Based Model](ARC_s_Experience_Using_its_CT_RAMP_Activity_Based_Model) focuses on ARC’s original stated impetus for the development of an ABM, which was to enhance the theoretical integrity of their travel demand forecasting system. [DRCOG's Experience Using its FOCUS Activity-Based Model](DRCOG_s_Experience_Using_its_FOCUS_Activity_Based_Model) covers topics ranging from the development of the initial vision for the project, the design of the model’s theoretical and software structures, the calibration and validation of the model, to DRCOG’s uses of the model during the two years since completion of its initial version. [SFCTA's Experience Using its SF-CHAMP Activity-Based Model](SFCTA_s_Experience_Using_its_SF_CHAMP_Activity_Based_Model) focuses on how SFCTA has modified and applied SF-CHAMP to answer the questions being asked by planners and decision-makers, as well as what resources, tools and tricks have aided their success. [The ARC and SACOG Experience with Activity-Based Models - Synthesis and Lessons Learned](The_ARC_and_SACOG_Experience_with_Activity_Based_Models__Synthesis_and_Lessons_Learned) was a study commissioned by the Association of Metropolitan Planning Organizations (AMPO) to better understand the experiences of metropolitan planning organizations (MPOs) that have operational activity-based models (ABMs) for use in their planning processes. The [Comparison of Four-Step Versus Tour-Based Models in Predicting Travel Behavior Before and After Transportation System Changes – Results Interpretation and Recommendations](http://www.dot.state.oh.us/Divisions/Planning/SPR/Research/reportsandplans/Reports/2011/Planning/134368_FR.pdf) was a study commissioned by the Ohio Department of Transportation to compare the earliest of tour-based models to a similar trip-based model for Columbus, Ohio.

Latest Developments
-------------------

All of the original implementations were developed in an [open source](http://en.wikipedia.org/wiki/Open_source) environment. As acceptance of the fundamental features of activity-based model converges some efforts have been made to standardize data definitions and execution code with the goal of offering robust proprietary applications for widespread use.

Additional challenges remain, however, particularly in the integration of improved [transportation supply](Transportation_Networks) information produced by network [microsimulation](http://en.wikipedia.org/wiki/Microsimulation) tools (e.g. dynamic traffic assignment) and the level-of-service information required by the activity based demand model.

Future Prospects
----------------

There are still several issues remaining in the current designs and implementations of activity based models that need further attention and discussion. [Future prospect for activity-based models](Future_prospect_for_activity_based_models) on one hand increase the complexity of these models and increase the necessity to do formal uncertainty analysis. On the other hand, these future prospects for these activity based models may help promote and establish the activity based model as a more integrated, interdependent framework.

