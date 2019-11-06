---
title: "User benefits in project-level traffic forecasting"
categories:
   - Needs Review
---

Background
==========

Benefit/cost analyses for highway projects, apart from safety considerations, rely most heavily on travel time savings and travel distance savings for user benefits. Travel time savings are converted to dollars by multiplying by a value of time. Values of time vary by vehicle class and user class. Values of time for personal travel and for non-freight commercial vehicles are pegged to the prevailing wage rate. Values of time (as well as values of distance) for freight vehicles are based on the costs of truck operation.

Guidelines
==========

Travel time savings are estimated from the difference between VHT (vehicle-hours-travel) before and after the project. Travel distance savings are estimated from the difference between VMT (vehicle-miles-travel) before and after the project. VHT and VMT are standard outputs of the traffic assignment step in travel model. Ideally, the traffic assignment step is “multiclass”, thereby giving VHT and VMT separately for each vehicle class with unique values of time and values of distance. In the absence of a “multiclass” traffic assignment, it is possible to refine traffic volumes into vehicle classes by using the methods outlined in [Vehicle mix refinements](Vehicle_mix_refinements_in_project-level_traffic_forecasting) and
[Refining vehicle class forecasts for evaluation](Refining_vehicle_class_forecasts_for_evaluation_in_project-level_traffic_forecasting)
. Values of time are not considered to be affected by highway functional class.

BCA.Net is a benefit/cost analysis tool for highway projects that is maintained by FHWA. BCA.Net needs peak and off-peak AADT traffic volumes and the proportion of vehicles in each of three vehicle classes: automobiles, truck, and buses. Separate peaking and vehicle mix profiles may be defined for weekdays and weekend days.

Most traffic forecasts do not calculate VHT and VMT by user class (e.g., by income or by travel purpose). If desired, estimates of VHT and VMT by user class would require (given outputs from conventional travel model) a post-processing step. For example, VHTs and VMTs may be refined into purposes with trip production rate percentages from NCHRP \#365 (Table 9), pre-assignment time-of-day factors from NCHRP 716 (Table C.11), and known average trip lengths (either from a traffic model or from survey data) appropriate for the community. BCA.Net does not differentiate between user classes.

Using net VHT and net VMT for user benefits assumes that the total number of trips within the system is constant. Another, more robust, measure of user benefits, utilized by BCA.Net, is consumer surplus. Consumer surplus, as implemented in many transportation studies, may be a more appropriate means of estimating user benefits than strict travel time/cost savings when there is an increase (or decrease) in the number of trips within the analysis area.

References
==========

