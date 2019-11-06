---
title: "STOPS"
categories:
  - Needs Review
  - New Starts
---

The Federal Transit Administration's Simplified Trips-on-Project Software (STOPS) was released in September 2013. The latest version is 1.50, which was released May 6, 2015. It is a limited implementation of the conventional “4-step” travel model[^1]. Official STOPS information from FTA can be found [here](http://www.fta.dot.gov/grants/15682.html).

FTA developed STOPS to provide a forecasting tool to potential project sponsors of Capital Investment Grant applications. STOPS is one of three approaches that can be selected by project sponsors. Region-wide travel models and incremental data-driven methods are the other two approaches.

STOPS can be downloaded from FTA’s STOPS page. This page also contains the STOPS user guide and an example application.

Inputs
------

STOPS uses pre-existing data files for nearly all aspects of the forecasting process. The data can be readily obtained from various agencies like FTA, local transit agencies, local MPOs and project sponsors.

![STOPS User Interface](STOPS User Interface.jpg "STOPS User Interface")

#### Census and CTPP Data

STOPS uses the year 2000 Census and CTPP data as one of the inputs. The following data is required by STOPS for each state in the corridor being modeled.

1.  GIS shape file describing the boundaries of the census geography used in the CTPP input files
2.  CTPP Part I file (workers by residence location)
3.  CTPP Part II file (workers by employment location)
4.  CTPP Part III file (journey-to-work flows)
5.  Census Block boundary shape file

This data can be downloaded from [here](http://www.fta.dot.gov/grants/15682_15621.html).

#### Metropolitan Planning Organization Data

STOPS requires the following data from the MPOs.

1.  MPO zone layer with the year 2000 and the current year population and employment for each zone.
2.  Zone to zone current year peak period automobile travel times and distances. This can be obtained from the regional travel demand forecasting model.

Also, in order to develop any future year forecasts, the future year population and employment should be added in the MPO zone layer. The zone to zone automobile travel times and distances for the future year should also be added to represent future year congestion.

#### Transit Networks

STOPS uses a recent advance in online schedule data - General Transit Feed Specification (GTFS) to represent transit supply, instead of the traditional time-consuming approach of manually coding the transit networks. This data format defines the public transportation schedules and associated geographic information. This format is used in [Google maps](https://maps.google.com/) to find the shortest public transit path for a given trip. The full documentation of GTFS can be obtained from [here](https://developers.google.com/transit/gtfs/reference)

GTFS data is publicly available for most transit agencies. It can be downloaded from [here](http://code.google.com/p/googletransitdatafeed/wiki/PublicFeeds). In some cases, the data has to be requested from the local transit agency.

STOPS also provides some extensions to edit GTFS files. For example, coding a new fixed guideway line, rerouting buses to serve the stations, providing park-and-ride access opportunities etc are some of the tasks that can be accomplished by using these extensions. GTFS files are extremely complex and care must be taken while editing these files. The Google developers website includes two tools which can be used to verify and to visualize a GTFS feed. The file containing these tools can be obtained by downloading the most recent version of "Prebuilt Windows versions of FeedValidator, ScheduleViewer, and other tools" from [here](http://code.google.com/p/googletransitdatafeed/downloads/list).

#### Station Locations

STOPS includes a file containing the existing station locations across the United States. The locations and characteristics of new stations on the project can be added to this file by using GIS tools.

#### District Definition

STOPS uses districts to define a logical grouping of zones for two purposes.

1.  Growth factoring of the 2000 CTPP trips to estimate forecast year trips using MPO population and employment forecasts.
2.  Summarizing and mapping of STOPS forecasts.

This is a manual step in STOPS and the districts need to be appropriately defined by grouping zones along the station locations of the project and other existing fixed guideway lines. The definition of these districts is a very crucial part of the ridership forecasting process in STOPS.

Calibration
-----------

STOPS is a nationally calibrated model. Actual fixed guideway ridership in six metropolitan areas was used for calibration and it was validated against station specific counts in nine other metropolitan areas with a fixed guideway system.

STOPS also provides options to locally calibrate the model. STOPS requires the user to input the boardings for all fixed guideway stations in the current year transit system. These numbers are used by STOPS for station-level calibration. Also, the following parameters can be optionally added/changed to accurately reflect the local transit market in STOPS.

1.  The number of current year regional weekday transit unlinked trips.
2.  The number of current year weekday linked journey-to-work and from-work transit trips.
3.  The ratios between current year work and non-work trips on the transit system.

The [National Transit Database](http://www.ntdprogram.gov/ntdprogram/) and local transit on-board surveys are the two main sources for this data.

![Completed alternative run in STOPS](Completed STOPS UI.jpg "Completed alternative run in STOPS")

Outputs
-------

STOPS reports a series of district-to-district and station-to-station flow tables. Some of the results reported by STOPS are listed below:

1.  Linked transit trips (system-wide)
2.  Linked transit trips on the project (FTA's mobility evaluation measure)
3.  Linked fixed guideway transit trips
4.  Change in automobile person miles of travel. This needs to be converted vehicle mils of travel following FTA guidance.

Detailed flow tables by scenario, purpose, path type, access mode and auto ownership level are also included. STOPS results don't include trips by time-of-day.

STOPS also includes the capability to map various results. Dot density maps of trips by transit access mode, trip purpose, household auto-ownership, transit sub-mode can be generated.

![Sample STOPS output showing station utilization](STOPS output.jpg "Sample STOPS output showing station utilization")

Summary of resources
--------------------

The various data sources required to run STOPS are summarized below:

1.  [Software and User Guide](http://www.fta.dot.gov/grants/15682_15620.html)
2.  [Census boundary and CTPP files](http://www.fta.dot.gov/grants/15682_15621.html)
3.  [GTFS data](http://code.google.com/p/googletransitdatafeed/wiki/PublicFeeds)
4.  [National Transit Database](http://www.ntdprogram.gov/ntdprogram/)
5.  [APTA Ridership Reports](http://www.apta.com/resources/statistics/Pages/RidershipArchives.aspx)

References
----------

[^1]: FTA's page on STOPS, <http://www.fta.dot.gov/grants/15682.html>

