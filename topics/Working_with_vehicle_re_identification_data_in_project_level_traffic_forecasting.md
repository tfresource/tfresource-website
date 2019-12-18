---
title: "Working with vehicle re-identification data in project-level traffic forecasting"
categories:
  - Needs Review
---

Objective
---------

An O-D table determined empirically is preferred for windowing over a synthetic O-D table. There are several methods for surveying vehicles within the traffic stream, such that an observed O-D table may be constructed. Some of these methods involve vehicle re-identification, that is, the process of tracking a vehicle as it enters and subsequently leaves a cordoned area. Technologies for vehicle re-identification include video license plate matching and Bluetooth MAC address matching.

Background
----------

Vehicle re-identification involves the detection of a specific vehicle at least twice as it moves through a cordoned area. A single identification is inherently a sample with an unknown sampling rate. In addition, the sampling rate may vary from one location to another, due to the composition of the traffic stream or the ability of a particular detector to positively identify a vehicle due to environmental factors. The sampled O-D table needs to be adjusted to match known traffic counts.

Guidelines
----------

Traffic counters are required at all locations where there are vehicle identification detectors.
Efforts must be made to eliminate the detection of unwanted vehicles, such as those traveling on parallel arterials.
Most detection problems can be remedied by applying Fratar factoring (sometimes referred to as iterative proportional fitting) to the sampled O-D table. A two-step process is recommended. First, factor up the whole table by a constant so that the total number of trips matches the total number of vehicles entering the cordon. Second, apply Fratar factoring so that the row and column totals match the number of vehicles entering and exiting the cordoned area, respectively.

The implied sampling rate may be determined by dividing the original row and column totals by the adjusted row and column totals. The sampling rate may vary by location.

Advice
------

The largest source of error is the failure to detect a vehicle that has already been detected. A significant error, if not caught, is the detection of vehicles on another road. Other errors are possible but rarer, such as a vehicle that passed through the cordoned area twice, but re-identified only once, thereby giving a false O-D. It is important to screen the data for anomalies, particularly those vehicles whose average speeds seems to be unusually low.
It is helpful to determine the approximate re-identification rate. This can be accomplished by placing two detectors in such close proximity to each other that a single vehicle must pass by both detectors or by neither detector.

An origin destination table from a vehicle re-identification survey is a preferred method of ascertaining traffic demand for a network window that has no internal zones.

Items to Report
---------------

-   Implied sampling rate.
-   The factored O-D table can be conveyed in a spreadsheet or in another suitable format.

References
----------

