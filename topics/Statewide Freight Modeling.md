---
title: "Statewide Freight Modeling"
categories: "!Needs Review,Freight Modeling,Statewide Models"
---

<span style="background:lightgrey;padding:10px;border-left: thick double #0000aa;"> This page is part of the Category \[.</span>

[Freight modeling](Freight_modeling) can take many forms - in terms of the type of model and it's placement as a component of a larger statewide model or a stand-alone statewide model. There is a considerable amount of literature devoted to freight modeling at several levels of resolution, ranging from urban truck models to inter-regional commodity flow models, to international trade forecasts. Most can be classified as either truck or commodity flow models, and local versus long-distance.

Types of Freight Models
=======================

Per the Task 91, NCHRP project 8-36-B Final Report, statewide freight models can be grouped into the following categories, listed and described below.

### No Freight Model Modeling

This type of freight model may be restricted to MPOs within the state and the state DOT does not operate a model which covers all of the MPOs in
the state as well as the rural areas between MPOs; or the state DOT may operate a model, but that model covers only passenger trips or includes total
highway vehicles, and does not separately report demand or performance for vehicles which carry passengers and those which carry goods.

### Truck Model

The state DOT operates a travel demand model and that model separately forecasts the demand and performance of autos and trucks
on the highway network, but does not distinguish between trucks which carry freight and trucks which provide other functions (e.g., service, maintenance,
construction, local delivery). Also, the travel demand model does not include forecasts for non-highway freight modes.

### Direct Commodity Table Freight Model

The state DOT operates a travel demand model, and that model, rather than including modules which calculate
a trip table for freight vehicles, processes a directly acquired multimodal commodity table into a freight truck trip table. That table is assigned to a
highway network, either separately or most often as part of a multiclass assignment with autos and other trucks.

### Economic Freight Model

The state DOT operates a travel demand model which calculates the demand and consumption of freight as a result of activities modeled in an economic model. The difference from the Four-Step Freight Model above is that the employment or other indicators of economic
activity which generate the production or consumption of freight are not provided exogenously, but are calculated iteratively within the model as a
result of its calculations of transport costs.

### Four-Step Freight Model

The state DOT operates a travel demand model and that model forecasts a freight truck trip table, in addition to trip tables
for other nonhighway modes, through the use of trip generation, trip distribution, and mode choice modules. Freight truck trips are then assigned to
the highway network, either separately or most often as part of a multiclass assignment with autos and other trucks.

#### QRFM Implementation - Data Requirements and Cost

*This section summarizes Section 6.2.3 of NCHRP Synthesis 514. More detailed information can be found in the report.*

The best practices in trip-based freight modeling are assembled in the FHWA **Quick Response Freight Manual** II (QRFM) (Beagan et al. 2007), which uses the same data required for person travel models. This approach can be coupled with the use of **Freight Analysis Framework (FAF)** to quickly implement trip-based statewide freight models. The techniques described can be quickly implemented, albeit only at coarse levels of FAF geography without additional processing of the data. How well such models work within statewide models has not been reported in the literature, although their shortcomings have been widely acknowledged. The trip generation and distribution parameter estimates from the manual can be updated with values from other areas, or iteratively adjusted to better match observed truck flows. Both can be undertaken at low cost.

Most states have few highly reliable **vehicle classification counts**, and typically none within urban areas other than on major highways. These are often supplemented with manual counts, counts from urban areas, and data from HPMS, most of which use adjustment factors derived from those few automatic traffic classifiers to impute the percentage of truck flows by area type and functional class. The experience of the authors is that few investments have as large a payoff as increasing the number of vehicle classification counts within the state. Most of these must be done by contractors, as resources to expand the number of automatic traffic recorders are not available. Data on the cost conducting such counts were not collected in this study, but the experience of the authors suggests the cost runs between \$150,000 and \$250,000 to expand the number of vehicle classification counts across a state to a level that permits robust model validation and insight into unique flow patterns.

#### Other Trip-based Model Implementations - Data Requirements and Cost

Moving beyond the QRFM or comparable models, **expanded count data** requires a considerable investment in data. **Establishment surveys** that include truck travel diaries are often suggested to gain data that captures unique local patterns, obtain finer market segmentation, a wider range of explanatory variables, or capture of non-freight commercial vehicle travel. Hunt & Stefan (2007) used such data, collected at the cost of about \$3.5 million, to build a commercial vehicle model for Calgary. They have transferred their model to several other places, including the first-generation California Statewide Model. The cost appears surprisingly high, until one considers how different combinations of firm classifications, size ranges, and truck categories expand the number of observations required. The number of levels within each dimension can be reduced, but only with corresponding increases in variances associated with parameters derived from the data.

It can be argued that establishment surveys alone cannot provide a holistic view of all truck flows within a city or region, much less flows by all modes of transport. A fusion of shipper-based surveys with third-party truck tracking data can help to better understand truck patterns. A combination of a revived Vehicle Inventory and Use Survey (VIUS), third-party truck tracking data, and agent-based modeling can be used to achieve the same ends.

The cost of such data programs varies, and there is not enough experience with them to generalize the cost and effort involved in conducting them. However, it can confidently be asserted that they are multi-million dollar efforts whose design, testing, execution, and processing will likely last 2 to 3 years. They can be designed as continuous collection efforts rather than single large, costly, and disruptive activities. Moreover, the potential benefits of multi-state collaboration on such efforts appear enormous, but have not been attempted to date.

### Disaggregated Freight Model

A more recent development has been the implementation of disaggregated freight simulation models, that could be viewed as activity-based models for freight.

#### Implementations

*This section summarizes Section 6.2.4 of NCHRP Synthesis 514. More detailed information can be found in the report.*

The benefits of representing the tour structure of urban truck trips, and the associated improvements in functionality and outcomes, are well documented. There appears to be as much progress in implementing such models at the statewide level as there is within urban areas. Oregon developed a microsimulation-based short-distance truck tour model in 2003 that has been subsequently overhauled and adapted in Idaho and Ontario. A similar adaptation of the Calgary model was implemented in the Ohio Statewide Model a few years later. The Calgary model was also implemented in the California Statewide Model. The Calgary adaptations took advantage of extensive establishment survey data collected earlier in Alberta and used in its original development. The adaptations were calibrated to match locally observed patterns.

#### Cost

The cost of implementing these four models ranged from \$75,000 to \$150,000, exclusive of the cost of obtaining and preparing the establishment survey. However, the cost is a bit misleading, for the integrated economic-land use-transport modeling platform they worked within provided additional data required to build and use them. Make and use coefficients derived from economic inputoutput data are used to associate commodities with industries, as well as estimates of production and consumption by firms with each sector. The Oregon model was implemented without the latter until recently, making it an open question of how much data are required to implement such models, versus desirable.

The costs shown reveal the substantial jump in cost and effort required to go from trip-based to advanced freight models. There is little ground in the middle, aside from substituting survey data collected elsewhere for locally collected information. Some states additionally represent rail flows, at least in aggregate, although analyses appear limited to the depiction of high-volume rail corridors and terminals. Thus, type and extent of data required will likely vary by type of model, modes of transport represented, resolution, and other factors. The data shown in Table 6 are to be used only as rough guidelines.
It is likely that more sophisticated freight models will eventually replace the current crop of models, both at the urban and statewide levels. Chase et al. (2013) outline the knowledge, data, models, and sharing required to improve the practice of freight modeling, although there are several competing proposals. A national freight model, if it were to come to fruition, would also dramatically change the freight modeling landscape, as well as substantially reduce the cost. Whether a given state can wait for those proposed initiatives to come to pass, or need to gain such capability earlier, is dictated by the issues and requirements they face.

Other Implementation Considerations
-----------------------------------

*This section summarizes parts of Section 3.1.3 of NCHRP Synthesis 514. More detailed information can be found in the report.*

As freight tends to make up a higher share of traffic on rural roads, statewide models tend to have a larger share of freight traffic than urban models. Therefore, statewide models tend to pay more attention to freight flows, often distinguishing short- and long-distance freight flows.

### Short-distance Truck Modeling

While short-distance trucks are covered by 21 states (62% of all states with statewide models), long-distance trucks are modeled by 26 states (76%).Connecticut uses static truck trips tables, and Nebraska plans to add them within the next year. Doing so enables these states to at least account for truck volumes on the network, even though truck flows would not be scenario sensitive.

Of the 21 states that model short-distance trucks, 19 use trip-based models, and only Ohio and Oregon use tour-based truck models. The limitations of trip-based truck models have been discussed extensively in the literature, yet it is no surprise that tour-based models are uncommon in statewide models. The heterogeneous travel behavior of trucks (depending, among other factors, on truck type and commodities carried) and the limited freight data availability (much more so than for auto travel) make it inherently challenging to represent tour-based travel behavior for trucks. However, a few operational tour-based models in addition to Ohio and Oregon have been implemented for Alberta (Hunt and Stefan 2007), Guatemala City (Holguín-Veras and Thorson 2003), Rome (Nuzzolo and Comi 2013), and the San Pedro Bay Ports in Southern California (You 2012). Given the increasing interest in freight in many states, it is expected that more will follow the examples of Ohio and Oregon in tour-based truck modeling in the future.

### Long-distance Truck Modeling

Long-distance truck modeling is dominated by commodity flow models. Illinois uses a supply chain model, though publicly available data for such modeling approach is very limited. Most of the respondents who reported using commodity flow models in the survey reported that they are based, at least in part, upon origin-destination freight flow data from the Freight Analysis Framework (FAF). Presumably, many of these models are not policy-sensitive commodity flow models, but rather static transformations of exogenous FAF commodity flows converted into truck flows. Nine states use FAF payload factors to convert freight flows in tons into truckload equivalents.

### Mode Choice

A growing number of states apply mode choice models to freight flows as well. Of 26 states that model long-distance freight flows, six states (23%) apply rule-based freight mode choice models. Such models do not attempt to econometrically estimate mode shares, but rather apply simple rules of modal allocation that can be reviewed and changed. For example, rules may include that short-distance flows rarely use rail or water modes, only high-value goods move by air, and vessels can only be used if there is a waterway on at least part of the trip. Logit-based freight mode choice models were implemented by Florida, Georgia, Illinois, Ohio, Oregon, Texas, and Virginia. Although such models provide rich information on driving factors for mode choice, data limitations often make it challenging to reasonably estimate these models. Many of these logit-based models are designed as so-called freight diversion models (i.e., they model the shift from one mode, such as truck, to another mode, such as rail). Starting with the observed mode share and modeling only the potential shift from one mode to another is a powerful way to deal with data limitations in freight modeling while maintaining some freight mode sensitivities to policy scenarios. Ohio and Oregon use a combination of both rule-based and logit-based mode choice models. About half of the 26 states that model freight long-distance flows do not model freight mode choice at all, but instead generate truck flows only. Of the 11 statewide models that represent freight mode choice, all include truck and rail as modal options (Figure 26). Water and air are modeled in eight and seven states, respectively. California, Ohio, Oregon, and Utah even model pipelines, a flow that is inherently difficult to represent because it has the least amount of data available.

Current Models
==============

**Florida**'s "FreightSIM" model is an example of a disaggregated freight model. Its documentation can be downloaded [here](http://www.fsutmsonline.net/index.php?/model_pages/comments/updated_florida_statewide_model_flswm_version_60_passenger_and_freight).

**Oregon**'s StateWide Integrated Model contains a Commercial Transport (CT) component that generates mode split for goods movement flows
and generates truck trips, combining shipments and possible trans-shipment locations, for a typical weekday. More information on the commercial vehicle component can be found [here](https://www.oregon.gov/ODOT/Planning/Documents/Statewide-Integrated-Model-Vers2-5.pdf), from their website.

**California** is currently developed the California Statewide Freight Forecasting Model. More information can be found [here](http://www.dot.ca.gov/hq/tpp/offices/omsp/statewide_modeling/csffm.html).

References
==========

-   Donnelly, R. & Moeckel, *NCHRP Synthesis 514 Statewide and Megaregional Travel Forecasting Models*, Transportation Research Board, Washington, DC, 2017. <http://www.trb.org/NCHRP/Blurbs/176702.aspx>


