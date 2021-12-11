# Ordered Response Models
Category: Statistical Models

This page discusses why ordered response models are necessary in certain applications, and discusses beginning details of the standard ordered logit/probit, and generalized ordered response models.

## Ordinal Data
Ordinal data is quite common in the transportation arena. An ordinal variable is a categorical variable in which the categories are intrinsically ordered. For instance, survey data where respondents rate their attitudes or perceptions towards a new travel mode or vehicle technology on a scale such as the Likert response scale are ordinal in nature. Ordered response models are also used in cases when the number of categories are countably finite. For instance, the number of cars owned by a household and the number of daily out-of-home tours/trips made by an individual are examples of ordinal data where the number of ordinal categories are finite and reasonably small. In some cases, continuous data is aggregated into discrete intervals and modeled as ordinal data. For instance, activity duration defined as time spent at a travel destination is aggregated into bins (e.g., <= 15 minutes, >15 minutes and <=30 minutes, and >30 minutes) to  convert into ordinal variables. 

## Ordered Response Framework
In the ordered response framework, a single latent propensity function y<sup>*</sup>
is assumed to be translated into observed ordered outcomes by threshold parameters as follows:

y = j if &theta;<sub>j-1 </sub> <= y<sup>*</sup> <= &theta;<sub>j </sub> 

So, a ordinal variable with J categories requires (J-1) thresholds.

The latent propensity function y<sup>*</sup> is assumed to be comprised of an observed component specified as a function of explanatory variables and an unobserved stochastic component as follows:

y<sup>*</sup> = &beta;<sup>'</sup>X + &epsilon;  

Different assumptions about the stochastic component  &epsilon;  will lead to different variants of the ordered response model. The parameters that the analyst must estimate include the &beta; coefficients and (J-1) &theta; parameters. However, during estimation, it is important to ensure that the threshold parameters are in the monotonically increasing order as follows:

 &theta;<sub>1 </sub> < &theta;<sub>2 </sub> < .... < &theta;<sub>J-1 </sub>

## Ordered Logit and Probit Models
Assuming the &epsilon; term to be i.i.d. realizations from standard logistic distribution leads to the ordered response model with the following probability expression:

P(y=j) =  1/(1+exp(&beta;<sup>'</sup>X-&theta;<sub>j </sub>) - 1/(1+exp(&beta;<sup>'</sup>X-&theta;<sub>j-1 </sub>) 

On the other hand, assuming the &epsilon; term to be i.i.d. realizations from standard normal distribution leads to the ordered response model with the following probability expression:

P(y=j) =  &phi;(&beta;<sup>'</sup>X-&theta;<sub>j </sub>) - &phi;(&beta;<sup>'</sup>X-&theta;<sub>j-1 </sub>), 

where &phi; is the cumulative density function of standard normal distribution.

## Generalized Ordered Response Models
In the standard ordered response models, the threshold parameters &theta; are assumed to be the same across all observations. However, it is possible that different decision-makers have different threshold parameters. So, a natural extension of the standard ordered response models involves parametrizing threshold "j" as function of explanatory variables Z<sub>j</sub> as follows:

&theta;<sub>j </sub> = &theta;<sub>j-1 </sub> + exp(&gamma;<sub>j</sub><sup>'</sup>Z<sub>j</sub>) 

The cumulatively additive and exponential specification of thresholds ensures strict ordered of thresholds needed in the ordered response models.

## References
[Modeling Ordered Choices: A Primer and Recent Developments](https://core.ac.uk/download/pdf/6641727.pdf)