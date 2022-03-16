---
title: "Model and Data Management"
---


The process of travel modeling involves requires complex sets of code and data that should be organized and managed effectively. The needs and approaches vary widely across users and model types, but generally there is a need to: 
-	Maintain a consistent and archived base of model code, scripts, and other processes,
-	manage model inputs and settings,
-	store outputs and results at various scales

Being able to work with a consistent set of code and inputs is critical for an effective and sustainable workflow. Adopting best practices can also help improve the field’s knowledge over time by more easily facilitating strategies such as back casting based on properly archived historical model data. This article discusses motivations and some best practices on the three topics of maintaining model code, inputs, and outputs. 

#### Model Code
Travel models can range from being a collection of automation scripts to fully-fledged software programs. In the short term, maintaining consistency within the structures of this code base is important for being able to reliably run code when needed. Additionally, consistency is critical when comparing model runs for scenario analysis. Modelers should be confident that any differences between scenarios are due exclusively to input and settings changes and not due to different code bases. In the longer term, older versions of code must be maintained to revisit previous studies. This is particularly important for forecasts that are used for long-range transportation plans or other forecasts that may not be updated for several years. As additional development will undoubtedly occur on the code base, older versions should be maintained to address ongoing planning topics and policies related to that forecast. 

One approach to managing code is housing model code and scripts on GitHub and regularly updating changes. Specific code versions can be archived as an official release, which can be tied to a planning project (e.g., code that was used for a regional transportation plan in a specific year). The releases feature in GitHub creates a snapshot of code in a specific state that can be accessed at any time. Users can specify a version number with a unique description of the code. Modelers may choose the frequency of releases they create, but they should generally at least have a version associated with any major planning project or milestone. Software developers use the following [symantic versioning system](https://semver.org/) which would be a suitable approach for modelers:
-	MAJOR.MINOR.PATCH 
  -	MAJOR version when you make incompatible changes,
  -	MINOR version when you add functionality in a backwards compatible manner, and
  - PATCH version when you make backwards compatible bug fixes.
  -	e.g., version 1.1.2 would represent the first major release, with one slight structural change like adding new summary scripts, and two bug fixes added for functionality.

#### Inputs
Travel models depend on many complex inputs for demographics, land use, network, and other attributes, as well as supporting data used in validation and for summaries. At the very least, these inputs should be stored in a systematic folder directory system, with a backup on a shared network drive or server. In some cases, users may prefer to have their models copy inputs directly from a central input source on a shared network drive. This ensures that all model runs populate inputs from a known location. Even with a rigorously enforced central location, input data may be altered or overwritten without the modeler’s knowledge. Some directories may be stored as read-only, or ideally, inputs be added to a database. 

Adding inputs to a database may be useful in cases where inputs are highly static. Databases provide a structured process to editing data and can reduce unintended changes. This rigidity can however make it challenging to change some inputs quickly, which may not be preferable while testing or developing models. Some users may take a hybrid approach, where more static data such as validation data is stored in a database, while other data is stored in a structured folder system. Additionally, some spatial and other data types may prove challenging to fit within a standard database system and may be left out. The challenge with managing inputs is often striking a balance between ensuring consistency and usability.

In addition to code base releases, inputs should also be archived in a similar manner. Files may be zipped and stored on a backup server, or hosted on GitHub or other tools, using the Large File Storage (LFS) system. Currently, GitHub offers 1 GB of free file storage (with more available for paid accounts). This system could serve as a central holding place for inputs that allows the flexibility outside a database structure but managed and archived data; any changes or edits to data can be tracked and reset. 

#### Outputs
Important model runs should be archived for future access, either for internal use, external data requests, or legal obligation. In some cases, all components of the model might be stored together (including the code, inputs, and results) on a shared network or backup server drive. Modelers should take care not to edit or erase pieces of these archived models; it may be best to create an untouched backup on an off-site machine with a more accessible version on a shared or local network. 

Oftentimes, full model runs may consume large amounts of disk space. Purchasing additional cloud storage space may help to at least temporarily store runs that will be deleted after several years (for instance, when a new long-range plan is adopted). In some cases, only certain results or components may be kept if the full model run can be created from them. For instance, final assignment results and skims can be recreated if the previous model results are retained. This allows a full model to be repopulated relatively quickly, while reducing storage demands. This should only be used if there is a very low chance the detailed outputs will need to be consulted often.

#### Other Issues
Proprietary travel modeling software releases periodic updates. In some cases, there may be incompatibility issues using older data with newer releases. Users should be aware of this impediment and understand their software’s policies and abilities. Some software suites allow users to update databases to new formats, while maintaining a copy of the old database. Alternatively, users may still be able to use older version of the software but might have issues running these old versions with newer operating systems.  

#### Model Management Implications
