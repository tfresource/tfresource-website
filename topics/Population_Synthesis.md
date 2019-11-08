---
title: "Population Synthesis"
categories:
  - Needs Review
  - Activity Based Models
  - Land Use Transport Modeling
---

Summary
-------

A Synthetic Population describes socio-economic data microscopically. For example, instead of providing the number of households by zone (as common in [trip-based models](Trip_Based_Models)), a synthetic population provides information for every household separately (as commonly required in [activity-based models](Activity_Based_Models)). Microscopic [land use models](Land_Use_Transport_Modeling#Land_Use_Model_Types) require a synthetic population as well. Usually, such information is provided in list format, where every row describes a single household. Synthetic populations may be created for many objects, including households, persons, vehicles, firms, dwelling, nonresidential floorspace, etc.

In travel forecasting, *population synthesis* refers to the task of expanding a representative sample of persons—ascribed with variable attributes such as gender, age and ethnicity—into a fully enumerated census of the population under study. Because each individual’s combination of attributes varies, it is not appropriate to have that person represent a larger subset of the population based on any single attribute. Instead, a typical population synthesis will iterate through a set of attributes for each person in the sample, assigning and adjusting their expansion weights, until a prescribed total for each attribute representing the population is achieved.

Basic Components
----------------

Each population synthesizer will vary in the specifics of its inputs/outputs and its inner workings. However, the basic components are:

1.  Marginal distribution targets of household and person attributes. These are often based on Census and ACS, or other household survey data for a base year, and land use forecasts for future years.
2.  Household and Person samples. These are frequently PUMS records, which are a detailed microsample of the population collected with the ACS where each record represents a household or person in detail.
3.  An algorithm for selecting the sample records from (2) into a synthetic population such that the attributes of that population match the marginal targets in (1).

Adapting a population synthesizer for application (What do I need to get started?)
----------------------------------------------------------------------------------

This will vary depending on the particular synthesizer you are using, but this list should serve as a starting point. There are the basics (i.e. “basic components” from above): marginal categories to serve as a target to match your population to and a sample population to expand to a synthetic population. Additionally, you will need a geographic correspondence to resolve marginals and the sample to your model’s unit of spatial analysis. In most travel modeling the spatial analysis unit is the TAZ; Census data is available down to a blockgroup level; ACS data may only be available at the coarser tract level; and PUMS data is produced in PUMAs. Taking the first as an example, you would need a geographic correspondence between each blockgroup and the TAZs within that blockgroup. Furthermore the correspondence should define the percentage of the blockgroup that should be allocated to each TAZ.

### Selecting marginal categories

The selection of marginal categories will be decided by the needs of your model and the availability of data, or the ability to collect new data. Marginal categories should be selected to match attributes which feed the choice models in your travel demand model, and which categories can segment the population effectively. Usually, marginal targets are derived from Census, ACS, other household surveys and, for future years, forecasts from MPOs or other land use agencies. Local, regional, or statewide travel surveys may also be available which can complement national datasets and provide a better picture of local travel behavior.

### Processing marginal categories

Marginal distributions on control variables of interest are often available only along a single dimension. However, when generating a synthetic population, it is often desired to obtain a synthetic population whose characteristics mimic the joint distribution of attributes in the true population. In order to do this, the marginal distributions on control variables are processed iteratively to derive a joint distribution (across multiple dimensions) for the population at large. This iterative process is facilitated through the definition of a seed matrix derived from a sample data source. Microdata drawn from a survey or census sample (such as the Public Use Microdata Sample, or PUMS data in the United States) serves as a source for this seed matrix. The seed matrix is then expanded using the iterative proportional fitting (IPF) algorithm to obtain a population-wide joint distribution that adheres to the marginal control distributions. In the IPF algorithm, cell values in the seed matrix are amplified to iteratively match row totals and column totals that are available from the marginal distributions. The IPF algorithm converges when the expanded joint distribution provides row and column totals that match the univariate marginal distributions within an acceptable tolerance level, a very small value usually specified by the analyst. The synthetic population is generated such that amplified cell totals in the joint distribution of marginal control variables (derived from IPF procedure) are matched.

Resources
---------

[Population Synthesis For Microsimulating Travel Behavior](Population_Synthesis_For_Microsimulating_Travel_Behavior)

[Synthetic populations: review of the different approaches](Synthetic_populations_review_of_the_different_approaches)

------------------------------------------------------------------------

