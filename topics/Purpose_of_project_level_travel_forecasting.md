---
title: "Purpose of project-level travel forecasting"
categories:
  - Needs Review
  - Project Level Traffic Forecasting
---

<span style="background:lightgrey;padding:10px;border-left: thick double #0000aa;"> This page is part of the Category \[.</span>

Go to [Project-level traffic forecasting](Project_level_traffic_forecasting) topic page.

Overview
--------

The purpose of these guidelines is to describe both best practice and acceptable practice for performing project-level traffic forecasts for the state DOT's and similar agencies. The guidelines describe a number of techniques and options that are all acceptable within their intended scope, specific to the technique. Techniques include:

-   Custom travel forecasts using conventional three-step or four-step travel forecasting software;
-   Refinement of existing travel forecasts or of new forecasts from existing models; and
-   Statistical analysis of time series.

To the extent possible these guidelines are consistent with national standards as described in these source reports:

-   “Analytical Travel Forecasting Approaches for Project Level Planning and Design,” [NCHRP Report 765](NCHRP_Report_765), which is an update of NCHRP Report 255;
-   FHWA’s “[Travel Model Validation and Reasonableness Checking Manual II](Model_Validation_and_Reasonableness_Checking)”
-   TRB’s "[2010 Highway Capacity Manual](Highway_Capacity_Manual)"
-   FHWA’s [“Interim Guidance on the Application of Travel and Land Use Forecasting in NEPA](https://www.environment.fhwa.dot.gov/projdev/travel_landUse.asp)”
-   ITE’s [“Trip Generation”](http://www.ite.org/tripgeneration/trippubs.asp)
-   FHWA’s [“Traffic Monitoring Guide”](https://www.fhwa.dot.gov/policyinformation/tmguide/)
-   FHWA’s [“Manual on Uniform Traffic Control Devices”](https://mutcd.fhwa.dot.gov/index.htm)
-   FHWA’s [“Quick Response Freight Manual”, 1st and 2nd editions](https://ops.fhwa.dot.gov/freight/publications/qrfm2/index.htm)

These source reports are considered essential for fully describing procedures and techniques; therefore, key sections of these source reports are incorporated into these guidelines by reference.
In addition the guidelines benefit from a review of state DOT travel forecasting guidelines, especially:

-   ["Florida Project Traffic Forecasting Handbook”](https://www.fdot.gov/planning/statistics/trafficdata/ptf.pdf)
-   \[<https://www.dot.state.oh.us/>.../Documents/OH\_Cert\_Traffic\_Manual.pdf “Ohio Certified Traffic Manual”\]
-   [“North Carolina Project-Level Traffic Forecasting”](https://connect.ncdot.gov/projects/planning/TPB%20Systems%20Planning/Traffic%20Forecasting%20-%20Administrative%20Procedures%20Handbook%20.pdf)
-   [“Oregon Analysis Procedure Model”](https://www.oregon.gov/ODOT/Planning/Documents/APMv1.pdf)

Additional back ground material on conventional or advanced travel forecasting may be found in:

-   TRB’s [“Dynamic Traffic Assignment: A Primer”](http://onlinepubs.trb.org/onlinepubs/circulars/ec153.pdf)
-   FHWA’s [“Handbook for Estimating Transportation Greenhouse Gas Emissions for Integration into the Planning Process”](https://www.fhwa.dot.gov/environment/sustainability/energy/publications/ghg_handbook/index.cfm)
-   “Travel Demand Forecasting Parameters and Techniques,” [NCHRP Report 716](http://www.trb.org/Publications/Blurbs/167055.aspx), which is an update of NCHRP Report 365.

In some cases more than one technique might satisfy the requirements of the forecast. In those instances, the analyst is expected to use professional experience to choose the technique that best fits the available budget, matches the time horizon of the project, correctly applies to the spatial extent of the project, provides sufficiently robust results, has sufficient accuracy and has all the necessary data and software requirements.

Many highway projects require much more precise and detailed traffic forecasts than are typically performed for evaluating regional transportation plans. An existing regional planning model may still be used for project forecasts. However, the model must be evaluated to determine if its outputs meet the detail and accuracy requirements of the project. In many cases, outputs from regional planning models can be sufficiently improved by taking them though one or more refinement steps. A refinement process uses ground data to adjust or disaggregate regional model outputs.

Elements of a forecast
----------------------

A project-level traffic forecast for a highway project consists primarily of traffic volumes and traffic speeds on roads in some future year. Ordinarily, there will be at least two forecasts for comparison: one forecast with the project and one forecast (“do nothing”) without the project. In addition, both of these forecasts may be repeated for different future scenarios -- a scenario being a future state of the transportation system with variable conditions that are beyond the definition of the project. Additional forecasts may be required when there is more than one project alternative.

A “do nothing” alternative is not neglectful. This alternative includes any low-cost improvements that would be undertaken as part of normal operations and maintenance. Sometimes agencies refer to the “do-nothing” alternative as the [Transportation Systems Management Alternative (TSM).](http://www.sdforward.com/pdfs/DraftAppendixE-TransportationSystemAndDemandManagementProgramsAndEmergingTechnologies.pdf)

Traffic volumes and traffic speeds may require interpretation. Often this interpretation is handled by post-processors that can accept traffic volumes and speeds as inputs and give impact indicators as outputs. Indicators may include a variety of items, such as [Levels of Service (LOS)](Levels_of_Service_LOS)), queue lengths, benefit-cost ratios, pavement conditions and noise levels.

Project types
-------------

A highway project may range in scope from several miles of new freeway to spot improvements to individual road segments or intersections. These guidelines are limited to those highway projects that have at most modest geographical scope as to their impacts, that is, projects whose major impacts affect an area substantially smaller than a county, thereby excluding those projects that are more appropriately evaluated with a regional travel model. Examples of project components covered by these guidelines are:

-   Intersection geometric design changes
-   Signalization changes
-   Access management
-   Lane widening (increasing the number of through lanes)
-   Road diet (decreasing the number of through lanes)
-   Other cross-section modification
-   New facilities, including bypasses
-   Detour/diversion analysis for work zones traffic planning
-   Travel demand management
-   Site impact analysis
-   New pavements

Projects may consist of many components, sometimes combining two or more items from the above list. For example, a project under the “Complete Streets” initiative in Hawaii might involve reducing or increasing the number of lanes, adding bike lanes and sidewalks, changing intersection geometry, and changing signalization, among several options.

Transit or non-motorized options are included only to the extent that they might be affected by or bundled with a change to the highway system. A highway project could include both physical and operational aspects.

Defining forecast requirements
------------------------------

Prior to performing a forecast, the broad requirements of the project must be identified. FHWA’s [“Interim Guidance on the Application of Travel and Land Use Forecasting in NEPA”](https://www.environment.fhwa.dot.gov/projdev/travel_landUse.asp)describes those requirements in some depth.

### Identifying analysis years

All the analysis years of the project need to be identified by their role in the project evaluation and the number of years into the future. The table below is a suggested way to describe those years.

Definition of Analysis Years (Source: “Interim Guidance on the Application of Travel and Land Use Forecasting in NEPA”)

| Base Years           |                                                                                                                                                |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Base model year      | The calibration year for the travel model                                                                                                      |
| Base project year    | This could be different from the base model year; it is an updated base year that is validated and is as close as possible to the current year |
| Forecast Years       |                                                                                                                                                |
| Open‐to‐traffic year | Expected future year that the project will open; in the case of phased projects this might be a sequence of intermediate forecast years        |
| Plan horizon year    | A future forecast year that often corresponds with the long-range plan horizon                                                                 |
| Design year          | An alternative future forecast year for the project that may be earlier or further into the future than the forecast year                      |
||

A forecast for the base model year or project year is required for validation purposes. In addition, forecast years should be further categorized as to whether fundamental inputs to the forecasting process might vary significantly. These categories were defined in [NCHRP Report 765](NCHRP_Report_765):

-   Short range (no appreciable change in trip generation or trip distribution);
-   Interim (no appreciable change in trip distribution); and
-   Long range.

Consequently, whether a project is short range, long range or interim depends more upon the variable nature of travel demands than on the actual time elapsed from the project year.

For example, Hawaii uses these time horizons beyond the opening year for its routine forecasts:

-   5 years for maintenance projects, considered to be interim;
-   10 years for resurfacing projects, considered to be long range; and
-   20 years for new highways or changes in geometric design for existing highways, also considered to be long range.

Examples of short-range “projects” are site impact assessments and work-zone traffic planning.

When a forecast year for the project fails to correspond to the forecast year of a regional plan, interpolation or extrapolation of the regional forecast results may be necessary to resolve the conflict.

### Geographic scope of analysis

The choice of forecasting technique also depends upon the expanse of the impact area of the project, referred to as the geographic scope. The geographic scope of a project forecast depends both upon the size of the area of impact and the types of trips being made in and though the area. For this discussion, trips are categorized as being internal-to-internal (I-I), internal-to-external (I-E), external-to-internal (E-I), or external-to-external (E-E).

[NCHRP Report 765](NCHRP_Report_765) defines these areas:

-   Site. A site contains one or more trip generators in a single development. A site has no significant internal traffic and no through traffic, thus all trips are exclusively I-E or E-I. A site is most conveniently represented within a modeling context as consisting of one or more parking lots.
-   Corridor. A corridor is focused on a single street, as represented by one or more highway segments strung end-to-end. Similar to a site, a corridor has no significant internal traffic. Traffic can move through, in or out of a corridor in a variety of directions, depending upon the type and variety of cross-streets. Trips may be assumed to be I-E, E-I or E-E. An individual road segment is classified as a corridor. Small corridors, such as single street segments, may be assumed to have only E-E traffic, if the number and sizes of adjacent trip generators are small.
-   Small area. A small area encompasses sizeable tracks of land, which can generate traffic; however, traffic volumes on streets within a small area a dominated by external flows (E-E, E-I or I-E), but may contain moderate amounts of strictly internal traffic (I-I).
-   Wide area. A wide area covers a large enough expanse that internal traffic (I-I) is a significant percentage of all traffic and needs to be carefully modeled. Wide area models are similar in structure to regional models, but may not necessarily cover a whole region. In addition, any project for which internal traffic is important (such as some access management projects), should be considered wide area, regardless of the actual expanse of the impact area.

### Level of detail required in the analysis

Project-level traffic forecasts can vary in detail. In some cases details will need to be obtained by a refinement step, because the forecasting techniques do not themselves contain the necessary prerequisites. Types of detail for project-level traffic forecasts were described in NCHRP Report 255 and then adopted by [NCHRP Report 765](NCHRP_Report_765).

-   Functional class detail. Regional travel forecasting models rarely include functional classes lower than minor arterial. Some project-level traffic forecasts may require collectors, selected local streets and driveways.
-   Daily temporal detail. Many regional travel forecasting models do forecasts for a full 24 hours of a typical weekday. Some other regional travel forecasting models do forecasts for multiple-hour peak periods. Project-level traffic forecasts often need forecasts for peak hours. In rare cases, forecasts might be needed for time periods of less than one hour, such as those forecasts that can be achieved with dynamic traffic assignments.
-   Vehicle class detail. Many regional travel forecasting models have just one or two vehicle classes (automobile and/or truck). Some project level traffic forecasts, such as those done for pavement analysis, may require several vehicle classes.
-   Turning movement detail. Regional travel forecasting models are known to be poor in their turning movement forecasts. However, some projects, such as those involving changes to traffic controls, require good turning movement forecasts.
-   Directional split detail. Some AADT forecasts for individual road segments are bidirectional, because traffic counts that underlie the forecast are bidirectional. Additional information may be necessary to determine the correct directional split for the forecast.
-   Speed detail. Many regional travel forecasting models are designed to provide the best possible estimates of traffic volumes, but these models may not have been validated for speeds or travel times. Additional post-processing may be required to achieve reliable speed or travel time estimates. Post processing may be accomplished with the “2010 [Highway Capacity Manual](Highway_Capacity_Manual)” or similar procedures that are consistent with well-established traffic theory.

### Tool Requirements and Technical Resources

Tools for project-level forecasts are selected mainly on the basis of the technical resources that might be available for applying those tools. The existence or lack of existence of these resources will dictate which techniques are most appropriate. These technical resources were defined in [NCHRP Report 765](NCHRP_Report_765):

-   Urban travel model
-   Urban travel model, outputs only
-   O-D matrix from survey
-   O-D matrix from model
-   Recent mainline traffic counts, all vehicles together (also by vehicle class)
-   Recent mainline traffic counts, broken out by vehicle classes
-   Recent intersection counts
-   Recent speeds or travel times
-   Historical traffic counts
-   Existing and proposed geometry

• Network data

-   Demographic data organized by zones, districts, block groups, or places

It should be noted that some of these resources could be obtained as part of the forecasting effort, with sufficient lead time and budget.

### Other requirements

The amounts of lead time and budget have a strong influence on the chosen technique. While it is desirable to always use the best method, real-world considerations often dictate that compromises be made. Professional experience must be used to assure that the chosen technique does not undermine the validity of the forecast when shortcuts are being taken.

Professional expertise is required to implement forecasting techniques. Those individuals charged with performing a forecast must be able to demonstrate proficiency with a technique through prior training or prior experience with the technique. Those individuals must also have sufficient professional expertise to make sound judgments as to when shortcuts can be taken, when interpreting forecast results or when assuring that validation standards have been met.

