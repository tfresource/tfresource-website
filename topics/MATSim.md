---
title: "MATSim"
categories:
- Dynamic Network Models
- Activity Based Models
- Destination Choice Models
- Dynamic Traffic Assignment
- Mode choice
- Model integration
- Network assignment
- Public transport (transit) modelling
---

MATSim stands for Multi-Agent Transport Simulation.  It is a project that came in part out of [TRANSIMS](TRANSIMS); it decomposes traffic assignment into iterating between route choice and network loading, and then integrates additional choice dimensions, such as mode or departure time choice, into that loop.  The iterations follow a co-evolutionary approach. That is, the synthetic travellers (or "agents") from time to time come up with new alternatives (= new plans), try them out on the network loading (called "mobility simulation"), and obtain a score/utility for these new alternatives.  If they do not come up with new alternatives, each synthetic person selects between its existing alternatives according to the score/utility.

Information about MATSim can be found at [matsim.org](https://matsim.org).   The following links may be helpful for a quicker start:
* The [MATSim example project](https://github.com/matsim-org/matsim-example-project) is meant as the general entry point.  It is possible to download the contents as a zipfile, unzip it, generate a Java "jar" file, and run it; only a Java Runtime Environment (JRE) needs to be installed for this.  In general, one would probably rather github-fork the project, clone the fork, and run it out of an IDE (e.g. Intellij or Eclipse). 
* For other installation options, including how to use MATSim as a maven dependency, see [here](https://matsim.org/downloads).
* Tutorials can be found [here](https://matsim.org/docs/#tutorials).
* The [user guide](https://matsim.org/docs/userguide/) is a regulartly updated extract from the [MATSim book](https://matsim.org/the-book).
* The [code examples repository](https://github.com/matsim-org/matsim-code-examples) contains code examples of how to use the MATSim Java API.
* Pointers to open scenario data can be found [here](https://matsim.org/open-scenario-data).
* [Here](https://matsim.org/faq) is the place where to ask questions.
