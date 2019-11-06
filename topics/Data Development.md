---
title: "Data Development"
categories:
   - Needs Review
---

One of the most labor-intensive, tedious and potentially troublesome aspects of travel forecasting is the management and control of numerical data. A well-designed and elegantly executed modeling algorithm is of no value if the data resources upon which it feeds are inadequate, incomplete or incorrect. Data resources used in travel modeling are substantial in volume and widely variable in their application. There is no single construct that can describe the complete relationship between all of the required data inputs and their corresponding model outputs. Therefore, demonstrating a travel forecast's validity and integrity is often substanially reliant on clear documentation of how data resources were managed and controlled in its execution.

<h2 class="TML">
Background

</h2>
Data resources in travel forecasting generally align themselves in two categories: areal (or spatial) data and network data. <span class="WYSIWYG_LINK">[Areal data](Areal_data)</span> refers to information that is specific to a single location. While the areal unit is typically a geographic polygon (i.e a zone) with two (planar) dimensions, travel models typically employ areal data as a single point (i.e. a centroid) reference. This permits a convenient interface with network data. <span class="WYSIWYG_LINK">[Network data](Network_data)</span> refers to information that is specific to the interaction (i.e. links) between two locations (i.e. nodes).<span class="WYSIWYG_HIDDENWHITESPACE" style="{encoded: 's3'};">&\#160;</span>In travel forecasting, it is the topological relationship between zones, centroids, links and nodes that permit the modeling algorithms to do their work.

<h2 class="TML">
Current Practice

</h2>
Even within the comparitively short history of the travel forecasting discipline, significant advancements in information technology have greatly improved the availability of needed data resources and the facility with which they can be handled. Until the 1990s, most travel model data inputs were manually prepared. Paper maps and aerial photography were geocoded by hand to build zonal and network databases; model outputs could be tabulated in numerical format, but also were transcribed from tabular output back to paper maps.<span class="WYSIWYG_HIDDENWHITESPACE" style="{encoded: 's2'};">&\#160;</span>Now considered essential are digitally-produced map resources that can be managed and manipulated within [Geographic Information Systems (GIS)](http://en.wikipedia.org/wiki/GIS). These include commerically prepared network mapping databases upon which to base links and nodes, as well as parcel and other administrative polygons for building zone systems and their corresponding centroids. Note that while GIS is instrumental in managing and preparing data for use in travel modeling, specially design travel demand software is also required to execute the modeling algorithms according to accepted practice.

<h2 class="TML">
Latest Developments

</h2>
Most recently, [Intelligent Transportation System (ITS)](http://en.wikipedia.org/wiki/Intelligent_transportation) resources have begun the practice of archiving and making available operating conditions from their sensor system that provide additional data development resources. These include longitudinal speed sensors on highways and<span class="WYSIWYG_HIDDENWHITESPACE" style="{encoded: 's2'};">&\#160;</span>automatic vehicle location and identification allowing for improved representation of segment performance in network databases.<span class="WYSIWYG_HIDDENWHITESPACE" style="{encoded: 's2'};">&\#160;</span>The public availability of the [general transit feed specification (GTFS)](http://en.wikipedia.org/wiki/GTFS) allows for automatic coding and regular updating of transit itineraries. Wearable [GPS](http://en.wikipedia.org/wiki/GPS) and smartphone technology have eased the burden placed on [Household Travel Survey](Household_Travel_Survey) respondents in recording location and time information associated with daily travel.

<comments />

