---
title: "Open Data Sources"
categories:
  - Needs Review
---

Open Data and Tools
===================

Summary
-------

#### Parent Page and Additional Information

<http://tfresource.org/Urban_Data>
<http://tfresource.org/UrbanDataResources>

#### Contributors:

Marcelo Simas, PhD, Westat\
Erik E. Sabina, P.E., Manager, Information Management Branch, Colorado Department of Transportation\
Charlotte Frei, PhD, DemandTrans Solutions, Inc.

#### Summary Table

| Section | Category                                        | Item                      | Summary and Cross-references          |
|---------|-------------------------------------------------|---------------------------|---------------------------------------|
| Data    | Spatial                                         | OpenStreetMap (OSM)       | Links to other resources              |
| Data    | Spatial                                         | National Address Database | Example links, e.g. NHTS              |
| Data    | Spatial/Service                                 | Open Trip Planner         | TrilliumTransit.Com,etc.              |
| Tools   | OSM Spatial Tools                               | Example                   | Example links                         |
| Tools   | network and Demand Modelling                    | MATSim                    | matsim.org                            |
| Tools   | Production/Analysis                             | R and python              | cran.r-project.org, python.org ,links |
| Tools   | Workflow and Feature management and development | GitHub and BitBucket      | links                                 |
| Trends  | Open Source and Whitelabel services             | Skedgo                    | Example links                         |

Section 1: Data Sources
-----------------------

### OpenStreetMap

OpenStreetMap (OSM - <https://www.openstreetmap.org>) is a crowd-sourced and community-based spatial data/tool available for most of the world, with a focus on routable and addressable roadways. OSM data can be very useful to generate background maps for visualizations and is the source of several free map tile services such as <http://maps.stamen.com>. In addition to being available for download as a single whole-world dataset, tools can be used to extract sections of the map data via API (http://wiki.openstreetmap.org/wiki/API\_v0.6) for regions of the world (e.g. by bounding box or center point) and convert the data into formats appropriate for desktop GIS use.

### National Address Database

<https://www.transportation.gov/nad>
FHWA is in the process of working with partners across the country to create a nationwide address database. As the website at the above link explains, there are other address databases produced at the federal level, but all of them have significant access restrictions placed on this. FHWA’s goal is to produce an open dataset. The project is very much still in process, but the data include geocoded latitude/longitude. Such data are useful for a variety of purposes, including 911 systems, and the development of disaggregate travel models that require highly detailed depictions of household and business location. It may be easiest to obtain the data from the local partner in your area. Contact the federal agency in charge of the NAD to find out who that partners is.

### Open Trip Planner

Section 2: Commonly Used Tools
------------------------------

### OSM Spatial Tools

Here is a short non-exhaustive list of tools that can be used to download and manipulate OSM spatial data:
• OSMAR Package in R (https://cran.r-project.org/web/packages/osmar/osmar.pdf)
• QGIS (http://www.qgis.org)
• ArcGIS Editor for OSM (http://www.esri.com/software/arcgis/extensions/openstreetmap)

### MATSim

### R, python (and associated libraries) for feature analysis

### GitHub, BitBucket for sharing tools

Section 3: Emerging Trends
--------------------------

The increasing popularity, and greater accessibility, of open source data analysis and visualization tools has turned OSM into an attractive and comprehensive source of mapping data that can be used to get a project up to a quick starting point. However, it should be carefully reviewed and evaluated before significant investments are made.

With any open source tool, several alternatives exist. Analysts, consultants, state DOTs etc carefully review the production effort required before investing in a given tool. In our industry, different groups are using different languages to build their products and tools, hence interoperability can be a challenge. The benefit of open source tools is that anyone can contribute and continuously improve upon the tools. For most purposes, however, proprietary tools (like VISSIM, Emme, TransCAD, etc.) continue to dominate analytic functions in the public and private sector, though consultant created open source tools are becoming more and more common.

References
==========

