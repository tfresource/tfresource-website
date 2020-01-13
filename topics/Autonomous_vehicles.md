---
title: "Autonomous vehicles"
categories:
  - Activity Based Models
  - Topic Circles
  - Trip Based Models
---

<CategoryList category="Autonomous Vehicles" />

Introduction
------------

Connected and autonomous vehicles (CAV) are a rapidly evolving mode of travel, and one of several emerging megatrends in transport planning that will profoundly change travel behavior and patterns over the coming decades. There are several CAV definitions in the literature and press. There are enough that we have created a [lexicon](Autonomous_vehicles_Lexicon) to define our terminology. We follow the [SAE definitions](https://www.sae.org/news/press-room/2018/12/sae-international-releases-updated-visual-chart-for-its-%E2%80%9Clevels-of-driving-automation%E2%80%9D-standard-for-self-driving-vehicles), which include six levels of automation ranging from none at all to fully connected and autonomous vehicles, with the latter including a high level of system-level control of the transport network. The discussion that follows assumes a fully automated future (SAE level 5), which we make explicit with the acronym <b>CAV</b>. Some of the concepts discussed may be applicable to lower levels of automation, but the focus here is upon CAV futures.

CAVs will influence all types of travel, from local commuting to long-distance travel. The discussion that follows applies to personal travel, primarily in the metropolitan settings. The parallel advances in [freight and commercial CAVs](https://link.springer.com/content/pdf/10.1007/978-3-662-48847-8_18.pdf) are not addressed here, nor are related technologies such as [delivery drones](https://en.wikipedia.org/wiki/Delivery_drone) or [hyperloops](https://www.technologyreview.com/s/601417/the-unbelievable-reality-of-the-impossible-hyperloop/). The design of specific models is not addressed in this discussion. Rather, the context, behavioral foundations, modeling mindsets and methods, success stories from elsewhere are profiled.

Simulating CAV effects will require fundamentally rethinking how most transport planning models are structured and applied. There are some effects that can be represented using traditional models, but the majority of likely behavioral changes will affect all traveler preferences, choices, and costs. Many of these will be second or higher-order effects that will be realized through feedback loops or replanning. Discussions about the policy and planning context, major behavioral changes, and modeling frameworks are described in the sections linked to below. Case studies of several evolving models are also presented. The reader should be able to grasp the appropriate modeling approaches in light of their requirements.

This collection of pages proposes a *recipe* illustrated below. The recipe begins with the modeler understanding the policy decisions the model will inform, and then a consideration of which transportation behaviors will be affected by these policies. Only then should the modeler consider which adjustments, if any, need to be applied to the model.

![Recipe to consider the impact of CAVs.](Av_modeling_recipe.png "Recipe to consider the impact of CAVs.")

Planning and policy context
---------------------------

A wide variety of questions about CAV futures are being posed by policymakers. A number of policy papers have been published on the topic, but they describe the problem space much better than specifying forecasting approaches. A number of policy issues and strategies identified in [NCHRP Report 845](http://www.trb.org/Main/Blurbs/176418.aspx) are summarized on the [planning and policy context](Autonomous_vehicles_planning_and_policy_context) page. Other issues identified in other reports have been added to the discussion.

Behavioral considerations
-------------------------

The availability of AVs, either as privately-owned, shared, or hired vehicles, will open a range of travel possibilities not available today, and change many aspects of current modes. Time spent traveling in CAVs will be spent on other activities, reducing the disutility and cost of travel. Sharing a CAV or forgoing private auto ownership will likely become commonplace, further changing mobility patterns and creating new travel opportunities for young, elderly, and disabled persons. These and other [behavioral considerations](Autonomous_vehicles_Behavioral_considerations) will form the basis for model specifications that include the full range of CAV impacts on travel behavior and network performance.

Operational and network considerations
--------------------------------------

`   Under construction: [dead-heading, networks, AV technology, ...]`

Modeling frameworks
-------------------

The likely effects of CAVs will influence all aspects of travel behavior encompassed by travel forecasting models. This will necessitate a revolution in [modeling frameworks](Autonomous_vehicles_Modeling_frameworks) suitable for measuring their extent and impacts. While the range of policy issues and strategies is long and varied, there are few AV futures that are unlikely to influence all aspects of modeled behavior, to include long-term location choices, short-term travel choices (to include daily activity patterns and activity scheduling), and network assignment. While some can be accommodated within the traditional four-step modeling paradigm most will be better addressed using visioning and activity-based travel modeling frameworks.

Forecasting
-----------

Forecasting for uncertain futures has arguably never been more challenging than today, when CAVs are just one of several transformational economic, social, and technological changes likely to result in major changes in travel behavior and network performance. The section on [forecasting](Autonomous_vehicles_Forecasting) discusses several considerations that are particularly germane when modeling CAV futures. It is important to note that new approaches to forecasting may be easier to implement and communicate than adapting existing models. [Strategic Models](Strategic_Models) provide the ability to simulate a wide variety of new transport options, modes, and services, either singly or in combination. They are viable alternatives to more sophisticated behavioral models when screening a large number of alternate futures.

Use cases
---------

Models are designed to inform policy decisions, not to predict the future. Thus, it is difficult to specify a particular model form that is useful or needed for every possible CAV scenario. Instead, you should consider the policies that decision makers want to address, what behaviors may result from those policies, and then consider what model forms or components will address those behaviors. In this page, we walk through this process for three separate policies:

    1. Road widening projects will cease, and funds will be diverted to other uses
    2. Some freeway lanes will be dedicated for CAV use
    3. Authorities will levy an occupancy-differentiated VMT tax

See [Use cases](Autonomous_vehicles_use_cases) for more information.

Early applications
------------------

A number of agencies have already incorporated CAV effects into their transport planning models and forecasts. They have been explicit from the outset in most [visioning](Strategic_Models) models. However, several agencies have begun explicitly representing them in travel forecasts for their region. None approach the ideal frameworks considered in our [forecasting](Autonomous_vehicles_Forecasting) section, but many have or are working towards some of them. The [early applications](Autonomous_vehicles_Early_applications) profiled include recent innovations from the Puget Sound region, the San Francisco Bay Area, and the Canadian province of Ontario.

Further reading
---------------

A number of policymakers and planners have written white papers and reports describing how CAVs might affect land use and travel behavior over the coming decades. Many of these were reviewed in the preparation of this and related pages in TFResource. Some cover the policy, planning, and legal aspects of CAVs, to include:

-   [Advancing Automated and Connected Vehicles: Policy and Planning Strategies for State and Local Transportation Agencies](http://www.trb.org/Main/Blurbs/176418.aspx) (NCHRP Research Report 845)
-   [Driving Towards Driverless: A Guide for Government Agencies](https://www.mayorsinnovation.org/images/uploads/pdf/5_-_Driving_Towards_Driverless.pdf)
-   [Making Better Places: Autonomous Vehicles and Future Opportunities](http://www.wsp-pb.com/Globaln/UK/WSPPB-Farrells-AV-whitepaper.pdf)
-   [Re-Programming Mobility: The Digital Transformation of Transportation in the United States](http://reprogrammingmobility.org/scenarios/)
-   [Blueprint for Autonomous Urbanism](https://nacto.org/publication/bau2/)

There is considerably less definitive guidance on how to include CAVs in travel forecasting models. One emerging resource is the on-going [NCHRP Project 20-102(09)](http://apps.trb.org/cmsfeed/TRBNetProjectDisplay.asp?ProjectID=4008), which seeks to provide guidance on how [trip-based](Trip_based_models), [activity-based](Activity_based_models), and [visioning](Strategic_Models) models might evolve in order to incorporate travel changes due to CAVs. A large number of academic papers and research reports have been recently published or in progress, but most of them cannot be quickly implemented and capable of addressing the issues described in the pages linked above.

References
==========

[Content Charrette: Autonomous Vehicles](Content_Charrette_Autonomous_Vehicles)

