---
title: "Vehicle Counts"
categories:
---

Data Requirement
----------------

For most travel demand models, a minimum of 24-hour volumes (ADTs) and truck percentages are needed. Time of day models also require hourly or period data. Most truck models also use the categories of heavy trucks, light trucks and commercial vehicles.

Visualization
-------------

Visualization is a critical component of understanding traffic data. Traffic count data is usually viewed in traffic count flow maps (see example from the Kentucky Transportation Cabinet for 2008 ADTs for the City of Lexington, Kentucky (<http://www.planning.kytc.ky.gov/maps/count\_maps/maps/lexington.pdf>). Traffic data is also frequently shown in band widths to show the relative value of the traffic volumes. The dirurnal aspect of traffic counts is another frequently used tool to understand traffic data over a 24-hour period or longer periods (an example from Kentucky ATRs is shown on p. 28 of the referenced report: (<http://www.planning.kytc.ky.gov/maps/count_maps/maps/lexington.pdf>). Vehicle classification data is more difficult to visualize because of the numerous categories and is most frequently depicted using the flow maps, band widths and diurnal distibutions for truck percentages.

Reasonableness Check
--------------------

Due to the importance of the role of traffic data's use in model validation and model accuracy, it is critical to perform some review of the source data. Typical checks might include corridor level review for consistency, progression and anomalies, a historcial review of the data (at least 20 years back, possibly more due to the impact of the recession on traffic counts between 2006 and 2010), missing segments in network (especially ramps), and a review to see if the counts were performed properly (were they factored for seasonality/day of week, were they made for at least 24 hours, what are the limitations of the counting technology used).

Research Needs
--------------

Transportation Research Board Urban Transportation Data and Information Systems Committee (ABJ30)
<http://www.trburbandata.org/>
With an interest in the design, collection, analysis, and reporting of transportation supply and demand data needed for urban and metropolitan transportation planning efforts, this committee is focusing particularly on development of the data requirements of new and innovative techniques for measuring and monitoring the performance of metropolitan transportation systems as well as on evaluation of changes in demographic and urban travel characteristics.

Transportation Research Board Highway Traffic Monitoring Committee (ABJ35)
<https://www.mytrb.org/OnlineDirectory/Committee/Details/1350>
This committee is concerned with all aspects of research in the fields of highway traffic monitoring, including detection, counting, classification, and in-motion weighing of highway vehicles. Its scope encompasses the full range of monitoring technology, including traffic sensors (both intrusive and nonintrusive), installation materials and techniques, signal processing algorithms, analysis and reporting techniques, and comprehensive monitoring programs. The committee is also concerned with highway monitoring standards to ensure the applicability and quality of traffic data in all its applications.

Transportation Research Board Statewide Transportation Data and Information Systems Committee (ABJ20)
<https://sites.google.com/site/trbcommitteeabj20/>
The committee’s scope includes research and technology transfer activities pertaining to statewide
transportation planning data and information systems for all modes of transportation. A primary concern is
the capability of information systems to integrate various transportation-related data sources into a strategic multimodal information database for statewide transportation planning. The committee serves as a forum for discussion of current planning data activities.

NATMEC: North American Traffic Monitoring Exhibition and Conference: <https://www.natmec.org/>

SHRP2 – travel time reliability: <http://www.trb.org/StrategicHighwayResearchProgram2SHRP2/Blank2.aspx>

Evaluation of Nonintrusive Traffic Detection Technologies, Phase III (members only)
The Minnesota Department of Transportation (MnDOT), with funding and technical guidance from 13 other states, is implementing a continuation of the “Evaluation of Non-Intrusive Technologies for Traffic Detection” (NIT Phase III) pooled fund project. The goals of this phase are to conduct focused field tests of nonintrusive technologies and examine the traffic data collection capabilities of each sensor, including collection of volume speed and classification data. This meeting is the closeout and final meeting of the pooled fund. For more information on the project,contact Jerry Kotzenmacher (Mn/DOT), jerry.kotzenmacher@dot.state.mn.us, or Steven Jessberger (FHWA)at steven.jessberger@dot.gov.

Loop- and Length-Based Classification (<https://www.pooledfund.org/details/study/416>)
The Minnesota Department of Transportation (Mn/DOT) was the lead agency for a pooled fund project to
determine the feasibility of a common length-based algorithm for Length-Based Vehicle Classification
(LBVC). The pooled fund also sought to determine the optimum loop characteristics to help DOTs collect
accurate vehicle lengths.

History
-------

Traffic data has been an integral part of evaluating highways since the Bureau of Public Roads started planning activities. An example of 1918 flow map from Portland:

<http://www.portlandonline.com/transportation/index.cfm?a=65817&c=36416http://www.portlandonline.com/transportation/index.cfm?a=65817&c=36416>

A paper by David Albright gives a brief overview of traffic statistics:<http://pubsindex.trb.org/view.aspx?id=365623>

Other Resources
--------------------

-   Diurnal Distribution of Traffic Data: National Cooperative Highway Research Program (NCHRP) Report 765: Analytical Travel Forecasting Approaches for Project-Level Planning and Design (<http://www.trb.org/Publications/Blurbs/170900.aspx>) provides tables for look-up values for the dirurnal distribution of traffic for rural areas and for urban areas by population.  This report also gives default k-factors and directional distribution factors. 
-   K-factors and D-factors: KYTC Traffic Forecasting Report <http://www.planning.kytc.ky.gov/traffic/traffic_files/Forecast%20Report%204-25-08_dah.pdf>
-   Count programs and factoring: Traffic Monitoring Guide (<http://www.fhwa.dot.gov/ohim/tmguide/>) gives best practice for traffic counting programs and for factoring individual data.
-   Validation/accuracy: The Travel Model Validation and Reasonableness Checking Manual Second Edition  (<https://www.fhwa.dot.gov/planning/tmip/publications/other_reports/validation_and_reasonableness_2010/fhwahep10042.pdf>) gives insight into the recommended accuracy of modeling by volume group.

References
----------

Traffic Monitoring Guide
<http://www.fhwa.dot.gov/ohim/tmguide/index.htm>

AASHTO Guidelines for Traffic Programs, 2nd Edition - <https://bookstore.transportation.org/Item_details.aspx?id=1392>

Travel Time Data Collection Handbook
<http://wwwcf.fhwa.dot.gov/ohim/timedata.htm>

HPMS Field Manual
<http://www.fhwa.dot.gov/ohim/hpmsmanl/chapt1.cfm>

Urban Mobility Report - <http://mobility.tamu.edu/ums>

FHWA Travel Monitoring and Traffic Volume - <http://www.fhwa.dot.gov/policy/ohpi/travel/adus.cfm>

FDOT (Florida) Traffic Monitoring Handbook - <https://fdotwww.blob.core.windows.net/sitefinity/docs/default-source/statistics/docs/traffic-monitoring-handbook.pdf?sfvrsn=e8a9f204_0>

Glossary/Acronyms
--------------------

-   ADT Average Daily Traffic - see AADT below.
-   AADT Annual Average Daily Traffic - AADT is the average traffic volume going past a point in one day. It is virtually interchangeable with ADT. The key characteristic is that a seaonal count needs to be factored for seasonality and the day of the week.
-   AADTT Annual Average Daily Truck Traffic -Average truck volume going past a point in one day. The truck traffic can be classified using the FHWA vehicle classification scheme with 13 categories (see Traffic Monitoring Guide). Trucks can also be broken into light trucks and heavy trucks.
-   ATR Automatic Continuous Traffic Recorder - ATRs record traffic data continuously (365 days/year). They are used as source data for k-factors, directional factors, and growth trend analysis.
-   AVC Automatic Vehicle Classification - Automatic traffic counters used to record traffic volumes and vehicle classification. A wide variety of technologies is used including road tubes, inductance loops, radar beams, Doppler sound waves, and many more. Most AVCs are able to gather data into the 13 FHWA categories -see figure at:<http://onlinemanuals.txdot.gov/txdotmanuals/tda/fhwa_vehicle_classification_figures.htm> although some are only able to collect length-based data (three or four bins based on vehicle length).
-   Directional factors (D-factor) - D-factors are measures of the peak hour directionality. They are usually based on the average weekday peak hour although ATRs can provide excellent information of D-factor splits over the course of a year.
-   Diurnal distribution - Traffic data varies significantly over time during a 24-hour period with noticeable peaks and valleys when graphed.
-   ESAL Equivalent Single Axle Loading - ESALS are measures of pavement damage and used in pavement design. Key data needed to calculate ESALs are traffic volumes, vehicle classification data and weigh-in-motion data.
-   HPMS Highway Performance Monitoring System - The HPMS (http://www.fhwa.dot.gov/policyinformation/hpms.cfm) is a national level highway information system that includes data on the exten, condition, performance, use and operating characteristics of the nation's highways. It includes very detailed traffic data.
-   K-factors - This factor is based on the 30th higheest hour of the year and is used to compute desigh hour volumes. The k-factor concept comes from research made for the Highway Capacity Manual (see 1965 HCM) and is mandated for design purposes by the AASHTO Green Book. Some states such as Florida will allow the use of a higher threshhold than the 30th highest hour such as the 100th highest hour (see Florida Design Traffic Guidelines).
-   ODME -This modeling technique relies almost exclusively on traffic counts to produce trip tables and validated travel demand models.
-   TMG Traffic Monitoring Guide - The TMG (http://www.fhwa.dot.gov/ohim/tmguide/tmg0.htm) offers suggestions to help improve and advance current traffic monitoring programs.
-   TVT Travel Volume Trends - The TVT is a monthly report published by FHWA (http://www.fhwa.dot.gov/policyinformation/travel\_monitoring/tvt.cfm) based on hourly traffic count data reported by the States. The data are collected at approximately 4,000 ATRs nationwide and are used to estimate the percent change in traffic for the current month compared with the same month in the previous year.
-   Vehicle Miles Traveled (VMT) - In the United States, VMT is the most common unit of measure of travel for an area (e.g., a county, state, or MPO). One VMT is the equivalent of one vehicle traveling one mile.

State Traffic Count Sources
--------------------

Alabama DOT
<http://cpmsweb2.dot.state.al.us/TransPlan/Traffic/Traffic.aspx>

Alaska DOT <http://www.dot.state.ak.us/stwdplng/mapping/trafficmaps/2008/Northern/Overview2008.pdf>

Arizona DOT <http://mpd.azdot.gov/mpd/data/aadt.asp>

Arkansas SH&TD <http://www.arkansashighways.com/planning_research/technical_services/traffic_map.aspx>

California DOT <http://www.dot.ca.gov/hq/traffops/saferesr/trafdata/index.htm>

Colorado DOT <http://www.coloradodot.info/search?SearchableText=traffic+counts>

Connecticut DOT <http://www.ct.gov/dot/cwp/view.asp?a=3532&q=259790>

Deleware DOT <http://deldot.gov/information/pubs_forms/manuals/traffic_counts/index.shtml>

Florida DOT <http://www.dot.state.fl.us/planning/statistics/trafficdata/>

Georgia DOT <http://www.dot.state.ga.us/GDOTSearch/Results.aspx?k=traffic%20counts>

Hawaii DOT <http://hawaii.gov/dot/highways/functionstatement/fs_hwyp.htm/>

Idaho DOT <http://itd.idaho.gov/searchresults.htm?cx=000159539226443205588%3Atnn3vaedgcq&cof=FORID%3A11&q=traffic+cou>

Illinois DOT <http://www.dot.il.gov/trafficmaps/table.htm>

Indiana DOT <http://search.in.gov/search?site=in-gov&client=in-gov&proxystylesheet=in->

Iowa DOT <http://www.iowadot.gov/results.html?cx=007194883812222183389%3Aljheikzrxvu&cof=FORID%3A11&ie=UTF->

Kansas DOT <http://search.ksdot.org/query.html?qt=traffic+counts>

Kentucky TC <http://www.kytc.state.ky.us/>

Louisiana DOT&D <http://www.dotd.la.gov/highways/tatv/default.asp>

Maine DOT <http://www.maine.gov/mdot/traffic/tc.htm>

Maryland DOT <http://search.maryland.gov/search?q=traffic+counts&site=Transportation_MDOT&entqr=0&ud=1&sort=date%3AD%3A>

Massachusetts DOT <http://www.mass.gov/portal/index.jsp?pageID=mg2searchlanding&sid=massgov2&searchMassGov=traffic%20counts&>

Michigan DOT
<http://mdotnetpublic.state.mi.us/tmispublic/>

Minnesota DOT
<http://www.dot.state.mn.us/traffic/data/html/volume_program.html>

Mississippi DOT
<http://www.gomdot.com/Divisions/IntermodalPlanning/Resources/Maps/TrafficVolumeMaps.aspx>

Missouri DOT
<http://search.mo.gov/search?q=traffic+counts&site=modot&output=xml_no_dtd&client=modot&num=10&proxystyles>

Montana DOT
<http://www.mdt.mt.gov/publications/datastats/traffic_factors.shtml>

Nebraska DOT
<http://www.nebraskatransportation.org/maps/#traffvol>

Nevada DOT
<http://www.nevadadot.com/trina/>

New Hampshire DOT
<http://www.nh.gov/dot/org/operations/traffic/tvr/locations/index.htm>

New Jersey DOT
<http://www.state.nj.us/transportation/refdata/roadway/>

New Mexico DOT
<http://www.nmshtd.state.nm.us/main.asp?secid=10971>

New York State DOt
<https://www.nysdot.gov/divisions/engineering/technical-services/highway-data-services>

North Carolina DOT
<http://www.ncdot.gov/travel/statemapping/trafficvolumemaps/>

North Dakota DOt
<http://www.dot.nd.gov/road-map/traffic/>

Ohio DOT
<http://www.dot.state.oh.us/Search/Results.aspx?k=traffic%20counts>

Oklahoma DOT
<http://www.okladot.state.ok.us/aadtcnt/>

Oregon DOT
<http://www.oregon.gov/ODOT/TD/TDATA/tsm/tvt.shtml>

Pennsylvania DOT
<http://www.dot.state.pa.us/Internet/Bureaus/pdPlanRes.nsf/PlanningAndResearchHomePage?OpenFrameset>

Rhode Island DOT
<http://www.dot.state.ri.us/documents/gis/maps/SM02.pdf>

South Carolina DOT
<http://www.scdot.org/search/searchresults.asp?keyword=traffic+counts>

Tennessee DOT
<http://tennessee.google.cdc.nicusa.com/search?q=traffic+counts&site=main&client=tennessee&proxystylesheet=ten>

Texas DOT
<http://www.dot.state.tx.us/search/default.htm>

Utah DOT
<http://www.dot.utah.gov/main/>

Vermont DOT
<http://www.vermont.gov/portal/search.php?q=traffic+counts>

Virginia DOT
<http://www.virginiadot.org/info/ct-TrafficCounts.asp>

Washington DOT
<http://search.usa.gov/search?affiliate=WSDOT&v%3Aproject=firstgov&query=traffic+counts>

West Virginia DOT
<http://www.transportation.wv.gov/Pages/Search.aspx?q=traffic%20counts>

Wisconsin DOT
<http://search.wi.gov/query.html?qp=url%3Awww.dot.wisconsin.gov&style=dot&qt=Traffic+Counts>

Wyoming DOT
<http://www.dot.state.wy.us/wydot/planning_projects/Traffic_Data>

------------------------------------------------------------------------

