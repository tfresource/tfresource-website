---
title: "Transit Network Assignment"
categories:
  - Network Assignment
  - Public Transport (Transit) Modeling
  - Transportation Networks
  - Urban And Metropolitan Models
---

Transit network assignment is the process of determining the routes taken by the transit demand from the mode choice model. The same networks, parameters, and methods should be used for transit assignment that were used for determining the [transit network service levels](Transit_Network_Service_Determination). In fact, in many packages there is just one more key word in the script that separates the two processes (i.e. ASSIGN=TRUE, TRIPS=MatrixName)

For a base year, the output of transit assignment can be compared with observed [transit data](Transit_Data) through a process called [validation](Model_Calibration_and_Validation#Trip_Assignment_Models).

