---
title: "Open Matrix Format"
categories:
  - Needs Review
  - Model Integration
  - Spatial Data
  - Temporal Data
  - Transportation Networks
---

Summary
-------

Open matrix (or OMX) is an open file specification for storing a series of matrices with associated attributes. The OMX project is a collaborative effort to define a standard and includes a specification, APIs in different programming languages for reading/writing OMX files, and commercial travel modeling software plug-ins for reading/writing OMX matrices.

Background
----------

In early 2013, a diverse group of agency, consultant, and research modelers formed a working group to define and implement a new open source matrix file format for use in travel and land use modeling. The justification for the new format was simple — to create a simple standard matrix format for storing and transferring matrix data that can be easily adopted by the industry. The group believes that an open, common format for matrix data across models and software packages will make model development and application easier. The group also believes that the ability to readily share data for a key data structure in a standard format will help spur industry research and innovation, similar to what the ESRI Shapefile did for GIS.

Implementation Basics
---------------------

OMX is based on an open-source file storage technology called HDF5 (Hierarchical Data Format). OMX files can store multiple matrices in one matrix file, can include multiple indexes/lookups (e.g. for TAZ labels), and can contain additional metadata attributes (key/value pairs) for both matrices and indexes.

References
----------

[Open Matrix Website](https://github.com/osPlanning/omx/)

“Collaborative Development of an Open Matrix Standard,” Ben Stabler, Billy Charlton, Brian Gregor, Chris Frazier, Elizabeth Sall, Jeremy Raw, John Abraham, Suzanne Childress, Innovations in Travel Modeling Conference, Baltimore, Maryland, April 2014.

------------------------------------------------------------------------

