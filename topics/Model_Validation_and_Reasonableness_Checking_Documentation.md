---
title: "Model Validation and Reasonableness Checking/Documentation"
categories:
  - Needs Review
---

Validation Documentation
------------------------

\_\_TOC\_\_

Model validation results should be well documented in order to provide users of the travel forecasts the information they need to establish their confidence in the models.&nbsp; The model documentation should cover the limitations of the models as well as the capabilities of the models.&nbsp; If the model limitations and portions of the model that have not been validated are documented, users of the forecasts can reasonably assess the level of confidence they place in the forecasts.&nbsp; Understanding that a model cannot be used to test a specific issue or policy can, ultimately, lead to increased trust in the travel model when used for analyses for which it has been validated.

Model validation documentation has often been included as a chapter in model estimation and calibration documentation or interspersed in the various chapters of the model development documentation.&nbsp; This practice can minimize the importance of model validation, make the validation information difficult to find, or confuse the concepts of model estimation, calibration, and validation.&nbsp; For these reasons, the development of a standalone model validation document is recommended.

### Executive Summary for Nonmodeler Users of Forecasts

An executive summary should contain sufficient information for the readers to become acquainted with the full report without reading it.&nbsp; The summary should contain:

-   A statement of the purpose and need for the validation;
-   An overview of the validation process, information on the validation data;
-   A summary of the validation results;
-   A summary of model strengths and weaknesses; and
-   Information regarding the types of studies for which the model is valid and for which it should not be used.

The summary of validation results might be presented via a table of the validation tests performed for the various model components along with qualitative assessments of the results.&nbsp; The executive summary should avoid focusing mainly on traffic and transit assignment results and statistics.

Other executive summary information may include:

-   Model area background information with maps of the region and major transportation facilities;
-   Modeling "philosophy" overview describing the purpose and process of the travel model;
-   Modeling process overview detailing the travel demand forecasting process and steps in terms that nonmodeler users can understand;
-   Model development section summarizing the development, calibration, and validation of the model;
-   Recent model enhancements and improvements; and
-   Overview of the report and an explanation of how the validation summaries are reported.

The overall objective for the executive summary is to summarize the report findings so that both experienced model users and nonmodelers understand the usefulness and the limitations of the model.

### Component Validation

Earlier chapters of this manual describe the model components typically present in traditional trip-based and emerging activity and tour-based travel models.&nbsp; Model validation documentation should include sections for each of the model components even if validation tests were not performed for a component.&nbsp; Information that a model component has not been validated is crucial to assessing the overall model validity.

Validation documentation should also discuss the variables included in the model and how those variables influence the results.&nbsp; For example, mode choice documentation might note that auto operating costs are included in the model and that those costs represent items such as fuel costs, fuel efficiency, other out of pocket costs.&nbsp; This discussion might take place even if an explicit validation of model sensitivity to the variable has not been performed.

Throughout this manual, an effort has been made to clearly define model estimation, model calibration, and model validation.&nbsp; Continuing with this distinction suggests that model component validation should focus only on the validation tests performed and validation results obtained.&nbsp; Model adjustments and corrections necessary to obtain the validation results desired should be covered in model estimation and calibration documentation.&nbsp; Documenting model adjustments and corrections (a model calibration task) in the validation documentation introduces the risk that a future model user will not apply the proper model; documenting the information in both locations is acceptable, but introduces the difficulty of maintaining documentation consistency.

### Model System Validation

The documentation of the travel demand forecast model components should be followed by a section summarizing the overall model system validation.&nbsp; The end results of the travel demand modeling process are generally considered to be highway assignments and transit ridership.&nbsp; In the past, "proof" that a model is valid has generally been provided by satisfying specific statistical standards such as obtaining an R2 of 0.89.&nbsp; However, satisfying such a standard is neither necessary nor sufficient to prove that a model is valid.

The above should not be interpreted as dismissing the importance of reporting statistical matches of observed traffic volumes and transit ridership.&nbsp; These statistics may be quite useful in assessing how travel forecasts should be interpreted for project design.&nbsp; Care should be use to ensure that validation statistics are not overstated.&nbsp; For example, a systemwide R2 of 0.95 suggests that 95 percent of the variation in traffic on facilities is "explained" by the travel model.&nbsp; However, a major contributor to such a statistic is the fact that higher-level facilities with more capacity receive more traffic than lower-level facilities.&nbsp; More informative statistics might be the R2 values for facilities stratified by area type and facility type or by capacity or observed volume ranges.

### Model Sensitivities

Sensitivity testing should be presented in a manner that allows the user to understand the impacts of changes in model inputs on forecast results.&nbsp; Sensitivity testing might present true validation results if it results from backcasting or forecasting using a model calibrated using data from a different year.&nbsp; Alternatively, the sensitivity testing might simply provide information on how the travel forecasts are impacted by changes in model inputs.

For New Starts forecasts, the FTA uses the concept that the travel forecasts should "tell a coherent story."&nbsp; For New Starts, this concept relates to the model structure and parameters and how well they describe how people behave in relation to their transportation options.&nbsp; This concept can be easily extended to the documentation of sensitivity testing results.

### Documenting the Limits of the Model Validity

The model validation report should include a section reporting on the limits of the model validity.&nbsp; Travel demand models are often applied to provide forecasts for issues outside the scope or purview of the model.&nbsp; Documenting model limitations and providing guidance on model applications can be a valuable resource for end users.

The validation documentation should also include a section on the high and low variable values used in the model development.&nbsp; Such an approach would help future model users to avoid the use of model parameters that lie outside the range of the validated data used to develop the model.

### Documenting Next Steps in Model Development/Calibration/Validation

The model validation report is a primary document used to communicate information regarding the travel demand forecasting model.&nbsp; For all intents and purposes it is an infomercial for the model set; it details the model set, provides guidance on its use, and can be valuable for planning and prioritizing the next steps required for model development.&nbsp; This section can include:

-   Future work plan elements or suggestions regarding which model components should be updated next;
-   Future data collection efforts and surveys;
-   Estimated schedule for model development and model validation; and
-   Any areas of emerging research of the model development that might impact the users and stakeholders. InstanceEndEditable

\


