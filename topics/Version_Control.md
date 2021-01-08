---
title: "Version Control"
---

Software development rarely starts and ends with one static, bug-free piece of code. Instead, new components may be added to the project over time, bugs may be discovered and fixed, or any number of other adjustments made that generate different versions of the software. Version control is a systematic approach to managing and tracking these development changes, and is critical to orderly maintaining even the smallest project.        

Fortunately, version control software is widely available for all levels of projects and users. Different software approaches exist to managing version control, but many of them contain a core of common features.

-   Keep historical versions of code, and allow them to be retrieved
-   Allow developers to commit new changes to the code base
-   Allow forking and branching of code

In this paradigm, any version of code that is stored is never overwritten by newer versions and can generally be retrieved as needed. The version control system provides a method for tracking changes made over time, which is helpful for accessing specific versions of code, identifying bugs, or archiving a version used for a specific task or project. For instance, in travel forecasting applications, one version of the model code may be used for consistency during a long-running project. Archiving that specific version is simplified with a version control system, and allows new code development to occur without affecting the static code required for application.  

#### Software

-   [Git](https://git-scm.com/)
-   [SVN](https://subversion.apache.org/)

#### Platforms

In addition to archiving changes, version control is also helpful for project management and development on teams or broader collaboration (for instance, between an agency and a consultant team or other contributers). This is often faciliated through free-to-use web-based platforms such as [GitHub](http://github.com). The easiest way to get started with version control in through GitHub, which [offers resources for quickly learning](https://lab.github.com/) how to set up and manage projects for version control for individual or team-based projects.

#### Example Implementations

Many MPOs and planning agencies use version control to maintain travel and land use models and other projects. Frequently hosted on GitHub, code can be made publicly available along with documentation and links to inputs and other source material. (Code can also be stored privately as needed.)

-   [ActivitySim](https://github.com/activitysim/activitysim) is an example of an open-source travel modeling project with contributions from multiple sources that use GitHub to host code releases, documentation, and manages collaboration between multiple user groups. 
-   Many MPOs manage their travel model development on GitHub
    - [San Diego Association of Governments](https://github.com/SANDAG/ABM)
    - [Puget Sound Regional Council](https://github.com/psrc/soundcast)
    - [Metropolitan Transporation Commission](https://github.com/BayAreaMetro/travel-model-one)


------------------------------------------------------------------------

