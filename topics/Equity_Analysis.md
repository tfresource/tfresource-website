---
title: 'Equity Analysis'

---
Introduction and Definition
------------

Infrastructure investments often have long-term and far-reaching impacts on their communities. Choices made decades ago have direct impacts on today’s 
accessibility, economic vitality, and impacts on nearby residents. Historically, investments based in outright and systemic racism led to generational 
harms to People of Color, low-income households, and other marginalized groups. Today, many planners and policy makers are proactively working to address these disparities through equity-focused analyses and planning work. As travel models are often the primary analytical tool used to guide infrastructure investment, there is an increasing need for them to address racial equity in a robust and systematic way. This page provides some context and examples of how travel models have been used to support equity analysis and planning work and highlights some challenges and research needs. While there is a great deal of content to be covered about equity analysis, this page focuses on applications and features specific to travel models.

The FHWA defines equity in transportation as follows:
Equity in transportation seeks fairness in mobility and accessibility to meet the needs of all community members. A central goal of transportation equity
is to facilitate social and economic opportunities by providing equitable levels of access to affordable and reliable transportation options based on 
the needs of the populations being served, particularly populations that are traditionally underserved. This population group includes low-income 
individuals, minority individuals, elderly persons, children, people with LEP, and/or persons with disabilities. An equitable transportation plan 
considers the circumstances that impact a community’s mobility and connectivity needs, and this information is used to determine the measures needed 
to develop an equitable transportation network. To attain an equitable transportation network, all components of Title VI, EJ, and non-discrimination must be considered.
Source: https://www.fhwa.dot.gov/environment/environmental_justice/equity/


Besides accessibility and travel aspects, equity may also cover additional issues such as the unequal distribution of external costs, both in exposure 
and causation. A prominent example is environmental equity in transportation which mostly deals with air pollution and traffic noise. Similar to the 
observation of underserved population groups, some neighborhoods face particular exposure to pollution and noise. These environmental factors are not 
only an outcome of travel but in turn affect the attractiveness of a neighborhood or street block, possibly leading to a degradation of the neighborhood
where many underprivileged households cannot afford to move. This may lead to unequal exposures in vulnerable population groups.

Tools and Techniques
------------

Activity-based travel models (ABMs) are well suited to equity analysis since they model individual people and their daily travel choices. Income-based 
equity analyses are particularly straightforward since synthetic household data relies on income as an important predictor in many choice models such as
vehicle ownership and mode choice. ABM outputs can be aggregated by income classes to understand how lower-income households are affected by projects. 
For example, accessibility to jobs can be compared across income groups to determine who is primarily benefiting from a long-range transportation plan.
While income is frequently available in ABM data, other important variables such as race, disability status, English proficiency and other data are 
typically not included in standard synthetic person and household inputs. It is possible to control for some of these in population synthesizers, but 
there is little existing precedent for these types of analysis. One of the main reasons these variables are not included is simply because demographic 
forecasts are not available for them. For instance, it is possible to have a synthetic population including race for a model base year, but few 
implementations of land use and population forecasting tools (such as UrbanSim) consider race and other variables when forecasting populations.
In lieu of using ABM outputs directly, a more generic approach is to identify geographies with higher concentrations of People of Color, Lower 
Income Households, or any equity indicator available in the data. This technique works for both ABM and 4-step models, since zones could be defined 
as specific TAZs. 
One issue with using pre-defined geographies is that results shown for that area are only reporting an average and are not specifically representing 
the targeted equity group. For instance, if a Census tract is identified to be majority People of Color, the entirety of that tract will likely not 
fit that definition, so behaviors are not a true representation of that equity population. Choosing definitions for equity geographies is important 
to identify meaningfully unique geographies. 

Using a zonal-based equity analysis has similar limitations to relying on equity attributes from a synthetic population: there are challenges in 
confidently forecasting nearly all equity indicators (aside from perhaps age-based indicators). Applying existing equity boundaries to forecast data 
implies that the equity populations will remain the same. Given dramatic demographic shifts due to gentrification and displacement observed in many 
areas, the assumption that existing equity populations remain in the same location over multiple decades is problematic. However, this method does 
provide some data to perform relative comparisons in the base year and some context for understanding the impact of displacement on these locations
over time. For instance, if people living in equity geographies are forecast to see greater-than-average benefits from investments, this speaks to
the importance of pursuing policies that help these people remain in these locations over the long term. 

Examples
------------
Puget Sound Regional Council (PSRC)
PSRC’s Regional Transportation Plan provides changes in active transportation from a base year to a forecast horizon, for the entire population and
multiple Equity Focus Areas (EFA). As shown in the figure below, this analysis allows more detailed understanding of which equity groups are seeing
the biggest increases in walking and biking, and highlights any distinct disparities across the groups. For instance, households in areas with high
concentrations of Youth and People with Disabilities indicate lower-than average walking and biking today and in the future. However, areas with
lower-income households might expect to see greater than average increases in active transportation with modeled policy changes. These analyses
provide a multitude of dimensions to analyze standard model outputs like mode share, vehicle miles traveled (VMT), and accessibility in better context
to the people who are ultimately affected by changes to the transportation and land use system. 

Source: Puget Sound Regional Council Regional Transportation Plan 2050 Equity Analysis: https://psrc.org/sites/default/files/appendix_f_regionalequityanalysis_051322.pdf
