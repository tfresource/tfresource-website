---
title: "Speed and travel time refinements in project-level traffic forecasting"
categories:
   - Needs Review
---

Objective
=========

Many regional travel forecasting models use simple volume-delay functions (VDFs) to calculate travel times along network links. Such models omit delays at network nodes. VDFs are most-often calibrated to obtain good estimates of traffic volumes but not necessarily good estimates of travel times or speeds. If speeds are required outputs of a project forecast, then those speeds must be obtained by post-processing.

Background
==========

Speed (or travel time or delay) estimates are often required for determining the effectiveness of a project. In addition, speeds are inputs to several important performance indexes, such as air pollution emissions, fuel consumption and accessibility. Speed is a variable in the most recent pavement design guidelines (MEPDG) from AASHTO. NCHRP Report 765 states that VDFs are not reliable for estimating node delays at traffic signal or sign controlled intersections. VDFs may be used for calculating delays along uninterrupted sections of highways.

Travel forecasting software products that internally calculate delays according to the US Highway Capacity Manual or from similar quality traffic theory do not require speed refinement.

Guidelines
==========

Future year traffic volumes and turning movements from regional travel forecasting models should first be refined, as described in other topic pages. Future year traffic volumes from other types of models may also require refinement prior to performing speed refinements.
Software products for estimation travel speeds (or travel time or delay) require as inputs traffic volumes, turning movements, road geometry descriptors and operational descriptors. Some computer products have additional input requirements. Documentation for the specific software products should be consulted for the exact requirements.

The following categories of software products may be used for obtaining post-processed speeds (or delays or travel times).

-   Software implementations of the 2010 Highway Capacity Manual.
-   Traffic operations software that is designed to optimize signal timing and progression across networks or within corridors.

Some traffic microsimulation software packages take their traffic data from an O-D table. Traffic microsimulation software products should not be used for speed refinements, unless the software can be configured to use the exact volumes and turning movements from the forecast. The same logic applies to DTA software, unless (a) the DTA software was integrated with the original travel forecasting model and (b) no refinements of volumes and turning movements are performed.

Procedures and software must be capable of analyzing these types of intersections:

-   Signalized intersections;
-   All-way stop controlled intersections;
-   Two-way and one-way stop controlled intersections; and
-   Roundabouts.

Speeds should be reported to the nearest whole MPH. Delays and travel times should be reported to the nearest whole second.

Advice
======

Signal timing is a required input to software used for speed (or travel time or delay) estimation. There are three acceptable methods of setting signal timing within traffic models to best approximate what is happening on the ground:

-   Fixed Timing. Cycle length, phasing and green splits are set to their current values for the signal being analyzed. Timing does not change in response to traffic volumes or turning movements. Fixed timing is appropriate when there is no intention to re-time signals and the forecast year is very close to the base year.
-   Actuated Timing. Cycle length, phasing and green splits can vary with the amount of traffic according to actuation parameters set for that particular signal. Actuated timing is a prevailing traffic control strategy in many locales (e.g., Hawaii).
-   Adaptive Timing. Adaptive timing varies the green splits and phasing to best serve the amount of traffic, regardless of current settings. The timing can be optimized or it can be set according to local engineering practice. Traffic operational software will naturally perform adaptive timing. Adaptive time emulates the long-term actions of a traffic engineering agency as it readjusts fixed-timed signals in the field to accommodate changing traffic volumes.

All methods are valid, but results will differ. Adaptive timing may be the simplest, in practice, since software will develop timings automatically and the need for field data will be minimized, but adaptive timing may result in slightly lower forecasted delays than would be experienced in reality.

Speed refinement also requires that traffic controls be analyzed to determine whether upgrades are necessary to handle future year traffic volumes. Increases (or redistributions) of traffic volumes may necessitate that stop-controlled intersections be upgraded to signals or roundabouts. Upgrades should be made by reference to the “Manual on Uniform Traffic Control Devices”. Peak-hour and design-hour forecasts should use Warrant 3 Peak Hour, although other warrants may pertain, as dictated by project circumstances.

Items to Report

-   Link speeds, link travel times, or link delays
-   Delays at controlled intersections

References
==========

NCHRR Report 765, 2010 Highway Capacity Manual, Manual on Uniform Traffic Control Devices

