---
title: "Travel Time Speed and Reliability Data"
categories:
  - Needs Review
---

<big>**TRAVEL TIME SPEED AND RELIABILITY DATA**</big>

Inventory of Data and Tools: Travel Time, Speed, and Reliability Data

Authors: Michael D. Fontaine, P.E., Ph.D. (Virginia Transportation Research Council), Lei Bu, Ph.D. (Jackson State University), Gurcan Comert, Ph.D. (Benedict College), Emily Moylan, Ph.D. (University of New South Wales), Anil Yazici, Ph.D. (Stony Brook University), Mei Chen, Ph.D. (University of Kentucky)

DATA INVENTORY
==============

Data sources for speed, travel time, and reliability analysis can generally be categorized into probe based systems, point detector systems, or systems that fuse both types of data. Probe based systems examine speeds of a subset of vehicles and extrapolate that sample to the overall population. Probe systems typically collect position data on these vehicles as they traverse roadway links, providing an estimate of average performance over a roadway. Point detectors typically collect detailed information on all vehicles that pass a discrete point on a road. While these systems provide data for all vehicles passing by the sensor, the data that is collected at that point may or may not be representative of overall conditions on a link. Data sources that use fused data combine the detailed point detector data with sampled probe data to estimate overall conditions. Major sources of data in each category are discussed below.

Probe Based Data Sources
------------------------

### Bluetooth/Wi-Fi Reidentification

Bluetooth and Wi-Fi re-identification systems detect media access control (MAC) addresses that are broadcast by wireless phones, computers, connected cars, and other devices located in vehicles. These MAC addresses serve as unique identifiers that can be re-identified throughout the network in order to generate travel time and speed data, or even origin-destination data if probe density is high enough. Depending on the system configuration, roadway class, and spacing between sensors, Bluetooth probe re-identification rates are often between 2 and 8 percent. Wi-Fi re-identification rates are often higher. If deployed, the location of the readers and the methods used to filter outliers are often critical decisions that must be considered to ensure accuracy of the data. These systems have been deployed extensively. Example datasets are posted in FHWA’ Research Data Exchange (RDE) database (https://www.its-rde.net/). Moreover, some applications can be found at :(http://www.wsdot.wa.gov/research/reports/fullreports/810.1.pdf www.oregon.gov/ODOT/TD/TP\_RES/ResearchReports/WirelessData.pdf)

### Automatic Vehicle Identification (AVI) /Toll Tag Data

If a vehicle is equipped with an electronic toll collection tag, the unique identifier associated with the toll tag can be logged as the vehicle traverses the network. By examining the time elapsed between when the tag is registered at different toll collection gantries, speeds can be estimated over a network. These systems can provide very accurate speed measurements at locations where electronic toll collection is widespread, but may not be reliable on roads further away from tolled facilities. A discussion of an application of these systems in Florida can be found at (https://ops.fhwa.dot.gov/publications/fhwahop08050/chap\_4.htm).

### Automatic Vehicle Location (AVL) Data

AVL systems rely on processing GPS data that is provided by a subset of vehicles in the traffic stream, typically fleet vehicles. Past applications have involved using data from transit vehicles, taxis, or trucking fleets to generate travel time and speed estimates. Key considerations in using this data include the number of probes on the network, their spatial/temporal distribution across the region, and whether the travel behavior of the fleet is representative of overall conditions. For example, screening of passenger pick up and drop off may need to occur to eliminate stopped time for taxis and transit vehicles. Similarly, experienced taxi drivers are not necessarily a perfect sample to represent regular drivers. Nevertheless, taxi drivers' experience-based route choices can be assumed to represent the best-case scenario. Another issue regarding AVL data is the existence of point-by-point coordinates along a route ("breadcrumb data"). Breadcrumb data can help achieve detailed route-based analysis of travel times, rather than system-wide travel time trends. For instance, most available taxi GPS trip records do not include breadcrumbs, and route travel times cannot be extracted. When breadcrumb data are available, the update frequency of the location data is also a crucial factor. For example, a 1-minute interval for position update for a truck fleet data can be more than sufficient to extract the route on a suburban or intercity highway. However, considerably more frequent updates are needed for urban cities in order to extract the route consisting of short links within city blocks – New York City is a good example of such city. An example dataset from the New York Taxi and Livery Commission can be found at <http://www.nyc.gov/html/tlc/html/about/trip_record_data.shtml>.

### National Performance Measurement Research Data Set (NPMRDS)

NPMRDS is a national probe data set that has been provided for state DOT and MPO use by the Federal Highway Administration to generate performance measures (https://ops.fhwa.dot.gov/freight/freight\_analysis/perform\_meas/index.htm). As of early 2017, the currently available data set was generated by the company Here. A key difference between the NPMRDS data set and those purchased directly from a private sector company is that NPMRDS contains no modeled data, only raw probe data. NPMRDS contains coverage for all National Highway System routes in the United States, and is considered a special case of private sector data sources discussion in the data fusion section. FHWA is in the process of re-bidding the NPMRDS data, so the source of the data may be changing in 2017 depending on the outcome of that process. Information on NPMRDS can be found at: <https://ops.fhwa.dot.gov/freight/freight_analysis/perform_meas/vpds/npmrdsfaqs.htm>.

Point Detector Data Sources'
----------------------------

### Inductive Loop Detectors

Loop detectors provide a complete census of the vehicles passing a given point. They are more commonly used on freeways than arterials where complex turning movements can make it difficult to track the flows of vehicles. Using appropriate assumptions about the length of the vehicles, detector occupancy can be converted to speed at the loop's location. Using sensible spatial and temporal interpolation, the speeds can provide travel times for the covered segment and subsections within that segment. Although the census nature of this data source addresses some of the biases present for probe data, loop detectors have some limitations. The speeds reported at the detectors may not be representative of the segment as a whole depending on how closely spaced the detectors are. Where single loop detectors are used, the travel times are sensitive to mis-calibrations of the average vehicle length which can vary by location, time of day, and season. Loop detector data tends to be more accurate for times when the traffic conditions are changing slowly, which does not correspond to peak interest in accurate and nuanced travel times. Example datasets can be found in FHWA’ Research Data Exchange (RDE) database (https://www.its-rde.net/). Similarly, some open datasets are shared by DOTs such as California (http://pems.dot.ca.gov/). RDE also contains traffic analysis toolboxes and applications.

### Side Fire Radar

Side fire radar systems such as RTMS and Wavetronix are another commonly used source of speed data. These systems are mounted on the side of the road, and use microwave radar to detect vehicles traversing the road perpendicular to the beam. These systems can generate speed data, but can suffer from occlusion problems where trucks and other large vehicles can block the detection of smaller vehicles in neighboring lanes. Length-based vehicle classifications can also be obtained. Speeds from side fire radar are generally regarded as being comparable to those generated from loop detectors, and they are common elements of many freeway management systems.

Fused Data Sources'
-------------------

### Private Sector Probe Data

Over the last 10 years, a number of private sector probe data providers have emerged that sell processed travel time and speed data to transportation agencies. These providers typically fuse data from a variety of sources including AVL data from trucking fleets, GPS data from smartphone apps or navigation systems, and available DOT sensors to estimate the average travel time on a roadway link. Commonly used providers in the United States are HERE, INRIX, and TomTom. An advantage of these systems is that they often provide very broad coverage at a relatively low cost per mile. Given that these data streams provide travel time estimates from the company's proprietary computations, there is a need for agencies to establish their validity, however. One example of a long-running data quality assessment program is the I-95 Corridor Coalition Vehicle Probe Project (http://i95coalition.org/projects/vehicle-probe-project/). Their website contains numerous data quality reports documenting the performance of the three major data providers. In general, freeway data quality has been well-validated and deemed to be reliable. Results for arterial routes are more variable, and may vary from site to site.

### Google Maps API

The Google Maps API provides access to real-time, spatially-specific information about the traffic network. In particular, the Distance Matrix API and Directions API both provide duration-in-traffic (travel time) measures over user-specified links or routes. The data are fused from multiple sources including historical values, traditional sources, Android users, and travelers who are passively or actively using a number of Google apps including navigation. Each API key allows a free daily query cap (currently 2500) that can be increased by purchasing a plan. One strength of the Google Maps API is the data is flexible to a number of use cases including specification of waypoints versus shortest path, comparison between modes or routes, and interpretation of a variety of common origin and destination location formats.

Since the data fusion algorithms are proprietary, users have limited visibility on the biases present in the results and, to some extent, the quality of the data with respect to the balance between real-time and historical input to a particular query. Compared to other data sources that archive experienced travel times for planning applications, Google Maps API results are relevant to the time of the query and use departure time as an input for predicting the travel time. As a result, queries over long routes or for future departure times will tend towards historical averages rather than using real-time results from probes.

TOOLS
=====

Data analysis of travel time, speed, and reliability data often is conducted using custom tools developed by researchers or agencies. Common tools used to store and analyze these data sets include commercial statistical analysis packages like SAS, R, Matlab, or SPSS as well as relational databases that have SQL functionality. Some performance management applications have been developed to archive and analyze traffic data specifically and are discussed below.

### i**PeMS**

IPeMS is a performance measurement package current supported by Iteris, Inc. (https://www.iteris.com/products/performance-analytics/ipems). iPeMS is an evolution of the Caltrans Performance Measurement system (PeMS) (http://pems.dot.ca.gov/) that has been used to store and process detector data in California since 1999. The iPeMS system can serve as a data archive for point detector data, as well as probe data. It offers capabilities to assess and process archived detector data, including assessments of detector quality and ability to download performance reports.

### **RITIS**

The Regional Integrated Transportation Information System (RITIS) (www.ritis.org) is a performance measurement and monitoring system developed by the University of Maryland Center for Advanced Transportation Technology Laboratory. The system contains point detector data, incident data, and a supplemental Vehicle Probe Project suite that contains private sector data for members of the I-95 Corridor Coalition. RITIS offers the capability to calculate travel time, delay, and reliability measures using the stored 3rd party data. Trend maps, bottleneck identification, and performance charts can all be generated from the system. A draft module for calculating MAP-21 performance measures using NPMRDS data has also been included in the system.

### **DTALITE**

DTALITE is an open-source light-weight dynamic traffic assignment (DTA) package that allows a rapid utilization of advanced dynamic traffic analysis capabilities. The package can perform dynamic traffic assignment of a large-scale network consisting of up to 2,000 traffic zones, 200,000 links, and 2-10 million vehicles. It also can be used to prepare basic data for (1) optimizing signal timing (e.g., Synchro), (2) microsimulation packages (e.g., Vissim), and (3) exporting data traffic capacity and reliability analysis packages (e.g., HCS). More information can be found at <https://github.com/xzhou99/dtalite_software_release>

EMERGING TRENDS
===============

The emerging trends in travel time, speed, and reliability data can be summarized under three broad categories: 1) enhancing existing data quality through data fusion and improving tools, 2) identifying and assessing emerging data sources, and 3) developing consistent definitions and practices for performance measurement.

**Data Fusion and Improved Analysis Tools**
-------------------------------------------

### *Guidance and Best Practices for Data Fusion*

Fusion of data from multiple sources reduces the uncertainty from individual sources, and also enhances the information quality. Given the variety of travel time, speed, and reliability related data sources and their respective limitations, efficient data fusion techniques can create substantial improvements for data utilization. Best practices and guidance are needed to help agencies and researchers fuse data sets with varying characteristics together as effectively as possible. In order to develop efficient data fusion, the following steps need to be achieved.
• Data Comparison: The initial step of the data fusion process is to develop an understanding of the data. Research is needed to develop a comparative overview of the characteristics of various data sources in terms of coverage, quality, granularity, data lag, usability, accessibility, spatial referencing, license conditions (where applicable). It is also important to understand the variables (such as location, time of day, day of week etc.) that can affect the above characteristics. These considerations should help define the strength and weakness of each dataset in meeting the travel time, speed and reliability needs.
• Model selection: Literature on data fusion algorithms is fairly broad. These data fusion algorithms include artificial neural networks, fuzzy logic, Dempster-Shafer evidence theory, Bayesian inference, and Kalman filtering. How to select a model? is a basic question that needs to be addressed. The answer to this requires development of appropriate criteria for model selection. The selection criteria should focus on the effectiveness, simplicity, operational constraints and requisites for a priori information.

### *Development of Improved Analysis Tools*

Most existing travel time, speed, and reliability datasets (even before any data fusion) are very rich, falling into the Big Data category. Analysis of such rich datasets requires Data Science skills. For instance, several probe data providers are offering detailed vehicle trajectory data for sale. These data sets include vehicle positions up to every second. This is potentially a very rich data set that could be used for traffic monitoring, but data sets are large and typical agency tools are insufficient to process and analyze these data sets. Similarly, as connected and automated vehicles enter the vehicle fleet, there is the potential for a tremendous expansion in the amount of speed and trajectory data that will become available. Methods to collect, process, and archive this data as the market share for these vehicles increase is needed. In these respects, there is a need for tools to process and analyze the available datasets. Meanwhile, the researchers and the practitioners have different expectations from data analysis tools. Hence, it is also important to differentiate the tools with respect to their potential users.

### **Emerging Needs and Data Sources**

Due to advancements in sensor technologies and increasing market penetration of mobile devices, researchers have been gaining access to more data sources (such as smart phone apps provide point-by-point GPS data) that contain richer and richer data. As discussed above, efficient utilization of those emerging data sources for travel time, speed, and reliability research is crucial. There is a continued need to assess emerging data sources to determine their added value and if they can fill current gaps in the data.

### *Arterial Speed and Travel Time Data*

Probe systems have historically had more difficulty estimating average conditions on arterial routes than freeway systems. Travel time distributions are much more variable on arterials, particularly in locations where traffic control like signals may create multimodal travel time distributions or locations where there are numerous access points. Probe systems that rely on MAC addresses may have to screen out data from non-vehicular traffic like bicycles and pedestrians in order to estimate average performance. The density of fleet data used by AVL and private sector data streams may also be lower on arterial roads than freeways. High resolution data from traffic signal controllers has also been used to try to improve the quality of data on these roads. The 2016 North American Traffic Monitoring Exhibition and Conference held a workshop that discussed may of the ongoing issues related to arterial data (http://onlinepubs.trb.org/onlinepubs/conferences/2016/NATMEC/ArterialWorkshop.pdf). There is an ongoing need to continue to evaluate and refine data on arterial roadways so that performance can be fairly assessed.

### *Connected and Automated Vehicle Data*

As connected and automated vehicles (CAVs) enter the vehicle fleet, there is the potential for a tremendous expansion in the amount of speed and trajectory data that will become available. Methods to collect, process, and archive this data as the market share for these vehicles increase are needed. While there have been past studies that have examined how vehicle to infrastructure (V2I) systems can be used for traffic monitoring, methods and best practices for archiving and processing these data are needed. This relates directly to the issues of big data analytics discussed earlier.
Some data from several test sites can be found at FHWA's Research Data Exchange (https://www.its-rde.net/).

### *Crowdsourced Data*

Various smart phones apps generate an abundant amount of data (mostly user-generated) which can be used directly or as an auxiliary data source for travel time, speed, and reliability research. For instance, map and routing applications (i.e. Google Maps, Waze) collect travel time data at a large scale which can be used directly for analysis. However, such app data are mostly proprietary and may require comprehensive agreements with the provider companies. The agreement between Florida DOT and Waze is an example of such collaboration, and illustrates the potential challenges for similar efforts. There are also efforts to use other sources (such as Twitter) to extract traffic related information. Since similar social media contents do not necessarily track location, the information is mainly limited to incidents and traffic conditions. Given the strong connection between reliability and traffic incidents, crowdsourced data can serve as auxiliary source for TTSR analysis. There is a need to further examine the quality and applications of these data sets, particularly when fused with more traditional datasets.

### *Cybersecurity Issues: Applications and Data Sources*

Transportation networks are considered as one of the critical physical infrastructures for resilient cities. In efforts to minimize adverse effects, the National Highway Traffic Safety Administration (NHTSA) of the US Department of Transportation (USDOT) focuses on cybersecurity and transportation applications research (trbcybersecurity.erau.edu/files/Transportation-Standards-Plan.pdf, <https://www.nhtsa.gov/staticfiles/nvs/pdf/812333_CybersecurityForModernVehicles.pdf>). From recent reports, several benefits are foreseen with mostly abovementioned new data collection technologies and tools such as up to 80% reduction in fatalities from multi-vehicle crashes and preventing majority of human error related incidents which takes 94% of all. However, these intelligent applications come at a price, for example, in 2015 alone 1.5 million vehicles were recalled because of cybersecurity vulnerabilities. NHTSA’s current research focus areas on connected and autonomous vehicles (CAVs) involves heavily of secure implementations which will bring the field and technology experts to harness efficient system design that will be reliable and secure. In ITS similarly, in order to increase security, reliability, and resilience due to possible attacks or benign system errors by different events, research is needed for detection using various sensors and data types. Furthermore, research is necessary in areas such as enhancing confidence in sensor readings by checking consistency with other sensors and information sources as well as validating control system commands (Peisert et al. \[2014\]).
Overall, ITS applications require protocols that conflict with anonymity and privacy requirements and report on quantifying such risks and traffic control under either lost communications based on correct or faulty communication errors. In sum, studies on quick detection of such cases and possible redundant data resources (i.e., data fusion may alleviate some of the adverse effects) for cost effective control are needed for resiliency on transportation networks.

**Developing Consistent Definitions for Performance Measurement**
-----------------------------------------------------------------

There is growing interest in using various travel time and speed data sources to develop comprehensive system performance measures for large roadway networks. Measures of reliability have typically relied upon defining percentiles of performance from historic data. Speed and travel time data is reported at varying levels of spatial granularity, and there is no standard for how these data could be aggregated to develop corridor or regional performance measures. As data is aggregated, variation tends to be smoothed which could cause the estimates to lose statistical significance depending on how the data is combined. There is a need to develop methods for representing regional reliability that retain statistical meaning given the characteristics of the data sets.

RESOURCES
=========

How-to collect manuals: chapters in various traffic engineering textbooks, plus FHWA’s data collection handbook at <https://www.fhwa.dot.gov/ohim/tvtw/natmec/00020.pdf>

“Floating car” travel time results:
Statewide floating car studies done by Ohio DOT staff (see report at <https://www.dot.state.oh.us/Divisions/Planning/SPR/ModelForecastingUnit/Documents/SpeedStudy081110.pdf> )
Samuel C. Tignor and Davey Warren. "Driver Speed Behavior on U.S. Streets and Highways." Institute of Transportation Engineers: 1990 Compendium of Technical Papers, 1990 August, p. 86.

Travel time and route choice: (Zhu, S., Levinson, D.: Do people use the shortest path? An empirical test of Wardrop’s first principle. Paper presented at the 91st annual meeting of the Transportation Research Board, Washington, 2012.) Available at <http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0134322>

Travel demand modeling using travel time reliability: (Horowitz, A. J., and S. Granato. Practical Considerations in Implementing Reliability of Travel Time in Forecasting of Region-wide Travel. In Transportation Research Record: Journal of the Transportation Research Board, No. 2302, Transportation Research Board of the National Academies, Washington, D.C., 2012, pp. 184–191. Also available at <https://pantherfile.uwm.edu/horowitz/www/PracticalConsiderationsTravelTimeReliabilityHorowitzGranatoTRB2012Final.pdf> )

