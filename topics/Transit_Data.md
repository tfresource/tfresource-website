---
title: "Transit Data"
categories:
  - Public Transport (Transit) Modeling
  - Transportation Networks
---

## Overview

### Parent Page and Resources

- [Urban Data](Urban_Data)
- [Urban Data Resources](UrbanDataResources)

### Contributors

- Pat Coleman, AECOM
- Charlotte Frei, DemandTrans Solutions, Inc.

| Section | Category         | Item                         | Summary and Other Pages on TFResource                                                                         |
|---------|------------------|------------------------------|---------------------------------------------------------------------------------------------------------------|
| Data    | Ridership        | Smartcard or Fare card       | Publicly available tap data?                                                                                  |
| Data    | Ridership        | Automatic Passenger Counters | Example of public set, another page.                                                                          |
| Data    | Ridership        | Travel Surveys               | Cross reference to Travel Behavior, Census sections on TFResource                                             |
| Data    | Operations       | AVAS/AVL                     | External cross ref or another site on TF Resource                                                             |
| Data    | Schedule Data    | GTFS and GTFS-Flex           | Cross-reference (add a row on Trapeze, Hastus sched?)                                                         |
| Tools   | Travel Forecasts | Regional MPO Models          | Link to Forecasting main pages on TFResource                                                                  |
| Tools   | Forecast         | FTA STOPS                    | [STOPS](STOPS)                                                                                                    |
| Trends  | Data use         | Open Source Planning Tools   | [AVAIL](http://www.albany.edu/avail/)                                                                         |
| Trends  | Planning         | Interoperability             | [Consortium Approach to Interoperability](https://trilliumtransit.com/2017/01/10/consortium-approach-to-itd/) |

## Data

### Ridership Data Sources

Automated Passenger Counts (APC), farebox/farecard data, and other boarding counts are typically available from transit providers.

#### Smartcard or Fare Data

Some transit systems have tap-on/tap-off systems, while others need only tap into the system. When riders must tap on and off the system, origin/destination data for transit trips is available, and specific routes can be inferred. If only origin fare data is available, agencies can infer destinations by comparing trends of a given user over time. This kind of origin-destination data allows analysts to understand where and when users are travelling.

#### Automatic Passenger Counters

Buses and rail cars may be equipped with devices that count each passenger who boards and alights a vehicle. These are typically an infrared sensor that has a source and reader, and the line is broken when a passenger steps in front, triggering a count. While very helpful, APC counts may need to be carefully calibrated due to strollers, luggage, crowding or heavy on/off loading.

#### Travel Surveys

In addition to fare data and counters on vehicles, [travel surveys](Travel_Surveys) can provide specific origin, destination and route choice information for transit modes if specific questions are included in the survey.

##### On-board Surveys

Typically obtained directly from transit providers. [On-board surveys](On_Board_Transit_Survey) are often conducted by consulting firms in partnership with agencies as part of a specific project or objective.

##### Household Travel Surveys

Used as a secondary data source. Usually obtained from a region’s Metropolitan Planning Organization (MPO) or sometimes a Department of Transportation. [Household travel surveys](Household_travel_surveys) are useful if there are in “diary” or tour format since On Board surveys are typically trips based. The [National Household Travel Survey (NHTS)](http://nhts.ornl.gov/download.shtml) “add on” data can also be considered. Several agencies and regions are beginning to use [GPS-enabled travel surveys](GPS_enabled_surveys).

#### Other Travel Flow Data

Other (mainly) Federal data sources are also useful:

- [US Census: Census Transportation Planning Package (CTPP)](http://ctpp.transportation.org) and the more recent [American Community Survey (ACS)](https://www.census.gov/programs-surveys/acs/)
- [Longitudinal Employer Household Data (LEHD)](https://lehd.ces.census.gov/)

### Operations Data Sources

#### Automatic Voice Annunciation Systems

Some agencies’ buses are equipped with systems which announce the next stop based on the location of the vehicle. These systems record, on a stop-by-stop basis, the time when a bus enters a geoboundary that defines a stop and whether the stop was serviced or not. This enables agencies and analysts to study things like dwell time at stops and the speed between stops at a high level of detail. (Some example companies providing this data include…)

#### GPS or other devices

As part of AVAS or independently, buses would have GPS devices installed in order to compare relative position to the position of bus stops. Whether or not a bus has an automated annunciation system announcing the stops for passengers, vehicles may have GPS somewhere on the vehicle to record position for operations management. GPS devices make real-time vehicle tracking (such as bus tracker services) and prediction possible, typically using past performance data and current location to predict arrival times at downstream stops.

### Schedule Data

It is often useful to compare scheduled bus data to actual operations data. Over the last several years, more and more agencies have begun releasing their schedule data in the General Transit Feed Specification (GTFS) format in order to facilitate application development. Schedule data may also be formatted in other ways for internal agency purposes. Comparing schedule data to actual operating data is one way to study possible system improvements.

#### GTFS and GTFS Flex

The General Transit Feed Specification (formerly Google Transit Feed Specification) is a format for transit data which is transferable across agencies. This enables application developers, including Google, to provide information regarding bus and train arrivals. As of January 2016, Google is working with researchers and practitioners to develop GTFS Flex specification – which will allow improved real-time arrival prediction (as opposed to reporting arrivals based on schedule) for both fixed and flexible (i.e. demand response) services. For demand response services, this will improve planning, scheduling, and customer information.

## Tools

### Mapping and Spatial analysis

TBD - cross references and text.

### Modeling and Forecasting

### Regional Travel Forecasting Models

These are typically available from Metropolitan Planning Organizations and in some cases the transit providers. These models must be validated to regional and study corridor conditions before forecasts can be prepared.

### Federal Transit Administration (FTA) Simplified Trips-on-Project Software

The [STOPS](STOPS) modeling package is available from FTA and includes guidelines for system calibration and study area validation. It uses GTFS and Census data as inputs. A few useful links are below:

-   [STOPS](https://www.transit.dot.gov/funding/grant-programs/capital-investments/stops)
-   [STOPS - General Transit Feed Specification (GTFS) Data](https://www.transit.dot.gov/funding/grant-programs/capital-investments/stops-%E2%80%93-general-transit-feed-specification-gtfs-data)
-   [STOPS – Data from the Census](https://www.transit.dot.gov/funding/grant-programs/capital-investments/stops-data-census)

## Trends

## References
