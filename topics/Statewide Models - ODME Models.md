---
title: "Statewide Models: ODME Models"
categories:
  - Needs Review
  - Statewide Models
---

<span style="background:lightgrey;padding:10px;border-left: thick double #0000aa;"> This page is part of the Category \[.</span>

Some statewide models, or model components (such as truck models), are based on an incremental modeling process which requires less data collection by using a synthetic trip table estimation process using origin–destination matrix estimation (ODME) and ground counts. ODME replaces the trip generation and distribution steps of the traditional four-step model, so only the traffic assignment step is validated.

Current Models
--------------

**Tennessee**

**New Mexico**'s core model is compromised of a ODME process for passenger travel. More information on this model can be found [here](http://onlinepubs.trb.org/onlinepubs/archive/conferences/2008/statewide/pdf/newmexico.pdf).

**Florida Turnpike Enterprise Office**
While the Florida DOT has a statewide model, its Florida Turnpike Enterprise Office has prepared a separate statewide ODME model, reflecting their focus on vehicle trips and market segmentation by toll user types rather than trip purpose, etc.

**I-95 Coalition** developed a Corridor Travel Demand Model (CTDM) that utilizes an ODME approach originally developed based on seed matrices using conventional trip generation and distribution models and available auto and truck trip rate data from several of the Coalition states. Separate matrices were developed for short- and long-distance auto and commercial vehicle trips. These seed matrices served as input to a matrix estimation process,
which used a combination of state- and national-level vehicle counts.

**Appalachian Regional Commission** developed a model to analyze the impacts of auto and freight truck travel as a result of the completion of the Appalachian Development Highway System (ADHS). More information about this model can be found [here](http://www.arc.gov/images/programs/transp/adhs_impact_study_June2008/EconomicImpactStudyofCompletingADHS.pdf).

Data Requirements
-----------------

The modeling approach is more common with statewide models due to lack of detailed statewide survey data, but does require a wealth of traffic count data.

Cost
----

Implementation
--------------

The ODME process requires a seed matrix that adjusts into a trip table and validated to simulate available traffic counts. Suitable preliminary trip tables for automobiles and trucks can be developed from socioeconomic data and quick response trip generation factors of automobile and truck trips per population and employee. The trips can be distributed using a simple gravity model and the average travel times between zones. The trip table required no further adjustment since it is adjusted during the ODME process.

Benefits and Drawbacks
----------------------

This process can be implemented without the cost of survey data and can be developed in a short time frame.
However, ODME models have the drawback of not being linked to the land use/socioeconomic zonal data.

References
==========

