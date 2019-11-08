---
title: "Traffic dynamics in project-level traffic forecasting"
categories:
  - Needs Review
---

Background
==========

An excellent source of information on DTA is the “Dynamic Traffic Assignment: A Primer”. This document goes well beyond the basics and is a good starting point for anyone interested in implementing or interpreting a DTA. A quick introduction to DTA may be found in the topic [Dynamic Traffic Assignment](Dynamic_Traffic_Assignment) on this site.

DTAs are recommended for projects where traffic is likely to be congested or subject to pronounced peaking. DTAs are also a convenient way to build up multiple hour traffic assignments from one-hour time slices.DTA differs from static traffic assignments by tracking the trajectories of packets of vehicles as they move though the network over time. Any given link at any given time slice may contain packets of vehicles that started their trips at a variety of earlier time slices. There are two major forms of path building:

-   Static paths. Link impedances are established at the time a trip starts. Static paths represent a driver who has little knowledge of the condition on the network and is unwilling or unable to divert should congestion hot spots develop after the trip begins.
-   Dynamic paths. Link impedances are established as the packet reaches the link. Dynamic paths represent a driver who is very knowledgeable about the trip, either because the driver has experienced a similar trip before or because the driver has excellent en route information.

Guidelines
==========

DTAs for travel forecasting in urban areas should use dynamic paths. In addition, DTAs for travel forecasting in urban areas should be run to achieve equilibrium conditions.

DTA requires a dynamic OD table, but it may be possible, depending upon the software and with very little additional effort, to create a dynamic OD table from behavioral principles. One method for accomplishing a dynamic OD table, as mentioned in NCHRP Report 765, is to interpolate time-slice factors from an hourly time-of-day table, such as those found in NCHRP Report 716.

The duration of a time slice for a DTA may range from only a few minutes to a full hour. As a practical matter for travel forecasts, because of data-preparation and validation requirements, time slices should be no less than 15 minutes in duration.

It is most convenient, but not essential, that the DTA be integrated with the travel forecasting modeling software package.

References
==========

