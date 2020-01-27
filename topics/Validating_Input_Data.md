---
title: "Validating Input Data"
categories:
  - Model Calibration And Validation
---

Summary
-------

### Input Data

There are two basic types of input data required for travel demand modeling:

-   Socioeconomic data.
-   Transportation network data

Since these input data are the basic building blocks along with the travel demand models to forecast travel in a region, the success or failure of the modeling process rests largely on the quality of the input data. Therefore, the checking of input data is extremely important.

*[Socioeconomic Data](Spatial_Data#Land_Use.2FDemographic.2FSocio-economic_Data)*

Socioeconomic data includes population, households classified by variables such as number of persons, number of workers, income level, and / or auto ownership, school enrollment, and employment data classified by industry type such as retail, manufacturing, service, etc.

Checking socioeconomic data starts with a simple inspection of the data through the use of thematic mapping. It is usually recommended that checks be performed at the TAZ, district, and regional level. Basic checks include mapping and review of population, households, average household size, proportions of households by income level or auto ownership, employment, and employment by category. Various ratios should also be created and reviewed including persons per household, vehicles per household, workers per household, vehicles per worker, population/employment, and income ratios (zonal average income/regional average income). Anomalies, such as zero population and non-zero households, or very low or non-existent employment in a TAZ surrounded by employment, should be checked. For forecast data, trends in the data and derived statistical measures over time for the region should be reviewed to identify any unusual or extreme changes, and corrections should be made where necessary.

The [main sources of socioeconomic data](Model_Validation_and_Reasonableness_Checking_Model_Inputs#Sources_of_Data) are Census data, American Community Survey (ACS) data, Quarterly Census of Employment and Wages (QCEW) data, and market research listings, such as InfoUSA or Dun & Bradstreet.

*[Transportation Network Data](Transportation_Networks)*

Transportation network data represent highway, transit, and other non-motorized mode networks and their attributes.

For the first level of validation testing, color coded plots of the following network attributes should be produced and reviewed:

-   Facility type,
-   Functional class,
-   Number of lanes,
-   Posted speed,
-   Area type,
-   Capacity, and
-   Direction of flow.

Other important checks include network connectivity and path testing. This process will identify dangling links, disconnected link segments, incorrectly coded one-way links or ramps, and disconnected nodes. Highway and transit network paths (or skims) are useful for creating time contours between locations of interest. Contour maps can be analyzed to ensure that all centroids with particularly long or short travel times as compared to surrounding centroids are properly connected to the line layer and that all surrounding links are properly coded.

The [main sources of transportation network data](Transportation_Networks) are Census Bureau Topologically Integrated Geographic Encoding and Referencing (TIGER) files, Regional or local GIS/planning agencies, or commercial distributors. Link and corridor specific traffic speeds by time of day can also be purchased from commercial vendors. The data are collected from cell phone or GPS data from travelers. Some vendors also provide district-to-district level interchange travel times that can be used to verify network speeds and skimming procedures (see, for example, [An Exploration of ‘Big Data’ Sources To Inform Best Practice Travel Time Studies - Lessons Learned From Metro Vancouver](https://www.trbappcon.org/oldsite/2017conf/PresentationDetails1cfe.html?abstractid=300)).

------------------------------------------------------------------------

