(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{394:function(e,t,a){"use strict";a.r(t);var i=a(7),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("PagesInCategory",{attrs:{category:"Network Assignment"}}),e._v(" "),a("h2",{attrs:{id:"what-is-network-assignment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-network-assignment"}},[e._v("#")]),e._v(" What is Network Assignment?")]),e._v(" "),a("p",[e._v("In the metropolitan transportation planning and analysis, the network assignment specifically involves estimating travelers’ route choice behavior when travel destinations and mode of travel are known. Origin-destination travel demand are assigned to a transportation network in order to estimate traffic flows and network travel conditions such as travel time. These estimated outputs from network assignment are compared against observed data such as traffic counts for "),a("a",{attrs:{href:"Model_Validation_and_Reasonableness_Checking_Assignment"}},[e._v("model validation")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:"TrafficAssignment.png",alt:"Caption:Example for a network assignment showing link-level truck volumes",title:"Caption:Example for a network assignment showing link-level truck volumes"}})]),e._v(" "),a("p",[e._v("Network assignment is a mathematical problem which is solved by a solution algorithm through the use of computer. It is usually resolved as a travel cost optimization problem for each origin-destination pair on a model network. For every origin-destination pair, a path is selected that typically minimizes travel costs. The simplest kind of travel cost is travel time from beginning to end of the trip. A more complex form of travel cost, called generalized cost, may include combinations of other costs of travel such as toll cost and auto operating cost on highway networks. Transit networks may include within generalized cost weights to emphasize out-of-vehicle time and penalties to represent onerous tasks. Usually, monetary costs of travel, such as tolls and fares, are converted to time equivalent based on an estimated value of time. The shortest path is found using a "),a("a",{attrs:{href:"Path_Finding_Algorithm"}},[e._v("path finding algorithm")]),e._v(".")]),e._v(" "),a("p",[e._v("The surface "),a("a",{attrs:{href:"Transportation_Networks"}},[e._v("transportation network")]),e._v(" can include the auto network, bus network, passenger rail network, bicycle network, pedestrian network, freight rail network, and truck network. Traditionally, passenger modes are handled separately from vehicular modes. For example, trucks and passenger cars may be assigned to the same network, but bus riders often are assigned to a separate transit network, even though buses travel over roads. Computing traffic volume on any of these networks first requires estimating network specific origin-destination demand. In metropolitan transportation planning practice in the United States, the most common network assignments employed are automobile, truck, bus, and passenger rail. Bicycle, pedestrian, and "),a("a",{attrs:{href:"Freight_assignment"}},[e._v("freight")]),e._v(" rail network assignments are not as frequently practiced.")]),e._v(" "),a("h2",{attrs:{id:"role-of-network-assignment-in-travel-forecasting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#role-of-network-assignment-in-travel-forecasting"}},[e._v("#")]),e._v(" Role of Network Assignment in Travel Forecasting")]),e._v(" "),a("p",[e._v("The urban travel forecasting process is analyzed within the context of four decision choices:")]),e._v(" "),a("ul",[a("li",[e._v("Personal Daily Activity")]),e._v(" "),a("li",[e._v("Locations to Perform those Activities")]),e._v(" "),a("li",[e._v("Mode of Travel to Activity Locations, and")]),e._v(" "),a("li",[e._v("Travel Route to the Activity Locations.")])]),e._v(" "),a("p",[e._v("Usually, these four decision choices are named as "),a("a",{attrs:{href:"Trip_Generation"}},[e._v("Trip Generation")]),e._v(", "),a("a",{attrs:{href:"Spatial_Interaction_Models"}},[e._v("Trip Distribution")]),e._v(", "),a("a",{attrs:{href:"Mode_Choice"}},[e._v("Mode Choice")]),e._v(", and Traffic Assignment. There are variations in techniques on how these travel decision choices are modeled both in practice and in research. Generalized cost, which is typically in units of time and is an output of the "),a("a",{attrs:{href:"Path_Finding_Algorithm"}},[e._v("path-choice step")]),e._v(" of the network assignment process, is the single most important travel input to other travel decision choices, such as where to travel and by which mode. Thus, the whole urban travel forecasting process relies heavily on network assignment. Generalized cost is also a major factor in "),a("a",{attrs:{href:"Land_Use_Transport_Modeling"}},[e._v("predicting socio-demographic")]),e._v(" and "),a("a",{attrs:{href:"Spatial_Data"}},[e._v("spatial")]),e._v(" changes. To ensure consistency in generalized cost between all travel model components in a congested network, travel cost may be fed back to the earlier steps in the model chain. Such feedback is considered “best practice” for urban regional models. Outputs from network assignment are also inputs for estimating mobile source emissions as part of a review of metropolitan area transportation plans, a requirement under the Clean Air Act Amendments of 1990 for areas not in attainment of the National Ambient Air Quality Standard.")]),e._v(" "),a("p",[e._v("A roadway transportation network in the assignment is represented by a set of links and nodes. A link represents a segment of roadway and includes physical characteristics such as estimated capacity, posted speed limit, distance, and number of lanes. A node represents the starting or ending points of a link. A node can be shared between multiple links and therefore represents connectivity between links. This concept is extended to public transit networks, where links represent a segment of a bus or rail line and nodes represent stop or stations.\n"),a("img",{attrs:{src:"NetworkElements.jpeg",alt:"",title:"fig:NetworkElements.jpeg"}})]),e._v(" "),a("h2",{attrs:{id:"overview-of-methods-for-traffic-assignment-for-highways"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-methods-for-traffic-assignment-for-highways"}},[e._v("#")]),e._v(" Overview of Methods for Traffic Assignment for Highways")]),e._v(" "),a("p",[e._v("This topic deals principally with an overview of static traffic assignment. The "),a("a",{attrs:{href:"Dynamic_Traffic_Assignment"}},[e._v("dynamic traffic assignment")]),e._v(" is discussed elsewhere.")]),e._v(" "),a("p",[e._v("There are a large number of traffic assignment methods, but they all have at their core a procedure called “all-or-nothing” (AON) traffic assignment. All-or-nothing traffic assignment places all trips between an origin and destination on the shortest path between that origin and destination and no trips on any other possible path (compare "),a("a",{attrs:{href:"Path_Finding_Algorithm"}},[e._v("path finding algorithm")]),e._v(" for a step-by-step introduction). Shortest paths may be determined by a well-known algorithm by Dijkstra; however, when there are turn penalties in the network a different algorithm, called "),a("a",{attrs:{href:"vine_building"}},[e._v("Vine building")]),e._v(", must be used instead.")]),e._v(" "),a("h2",{attrs:{id:"all-or-nothing-assignments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#all-or-nothing-assignments"}},[e._v("#")]),e._v(" All-or-nothing Assignments")]),e._v(" "),a("p",[e._v("The simplest assignment algorithm is the all-or-nothing traffic assignment. In this algorithm, flows from every origin to every destination are assigned using the "),a("a",{attrs:{href:"Path_Finding_Algorithm"}},[e._v("path finding algorithm")]),e._v(", and travel time remains unchanged regardless of travel volumes.")]),e._v(" "),a("p",[e._v("All-or-nothing traffic assignment may be used when delays are unimportant for a network. Another alternative to the user-equilibrium technique is the "),a("a",{attrs:{href:"Stochastic_Traffic_Assignment"}},[e._v("stochastic traffic assignment")]),e._v(" technique, which assumes variation in link level travel time.")]),e._v(" "),a("p",[e._v("One of the earliest, computationally efficient stochastic traffic assignment algorithms was developed by Robert Dial."),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(" More recently the k-shortest paths algorithm has gained popularity.")]),e._v(" "),a("p",[e._v("The biggest disadvantage of the all-or-nothing assignment and the stochastic assignment is that congestion cannot be considered. In uncongested networks, these algorithms are very useful. In congested conditions, however, these algorithm miss that some travelers would change routes to avoid congestion.")]),e._v(" "),a("h2",{attrs:{id:"incremental-assignment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#incremental-assignment"}},[e._v("#")]),e._v(" Incremental assignment")]),e._v(" "),a("p",[e._v("The incremental assignment method is the simplest way to (somewhat rudimentary) consider congestion. In this method, a certain share of all trips (such as half of all trips) is assigned to the network. Then, travel times are recalculated using a "),a("a",{attrs:{href:"Delay_Estimation_in_Trip_Based_Models"}},[e._v("volume-delay function")]),e._v(", or VDF. Next, a smaller share (such as 25% of all trips) is assigned based using the revised travel times. Using the demand of 50% + 25%, travel times are recalculated again. Next, another smaller share of trips (such as 10% of all trips) is assigned using the latest travel times.")]),e._v(" "),a("p",[e._v("A large benefit of the incremental assignment is model runtime. Usually, flows are assigned within 5 to 10 iterations. Most user-equilibrium assignment methods (see below) require dozens of iterations, which increases the runtime proportionally.")]),e._v(" "),a("p",[e._v("In the incremental assignment, the first share of trips is assigned based on free-flow conditions. Following iterations see some congestion, on only the very last trip to be assigned will consider true congestion levels. This is reasonable for lightly congested networks, as a large number of travelers could travel at free-flow speed.")]),e._v(" "),a("p",[e._v("The incremental assignment works unsatisfactorily in heavily congested networks, as even 50% of the travel demand may lead to congestion on selected roads. The incremental assignment will miss the fact that a portion of the 50% is likely to select different routes.")]),e._v(" "),a("h2",{attrs:{id:"brief-history-of-traffic-equilibrium-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brief-history-of-traffic-equilibrium-concepts"}},[e._v("#")]),e._v(" Brief History of Traffic Equilibrium Concepts")]),e._v(" "),a("p",[e._v("Traffic assignment theory today largely traces its origins to a single principle of “user equilibrium” by Wardrop "),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])]),e._v(" in 1952. Wardrop’s “first” principle simply states (slightly paraphrased) that at equilibrium not a single driver may change paths without incurring a greater travel "),a("a",{attrs:{href:"Impedance"}},[e._v("impedance")]),e._v(". That is, any used path between an origin and destination must have a shortest travel time between the origin and destination, and all other paths must have a greater travel impedance. There may be multiple paths between an origin and destination with the same shortest travel impedance, and all of these paths may be used.")]),e._v(" "),a("p",[e._v("Prior to the early 1970’s there were many algorithms that attempted to solve for Wardrop’s user equilibrium on large networks. All of these algorithms failed because they either did not converge properly or they were too slow computationally. The first algorithm to be able to consistently find a correct user equilibrium on a large traffic network was conceived by a research group at Northwestern University (LeBlanc, Morlok and Pierskalla) in 1973. "),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),e._v(" This algorithm was called “Frank-Wolfe decomposition” after the name of a more general optimization technique that was adapted, and it found the minimum of an “objective function” that came directly from theory attributed to Beckmann from 1956."),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn4",id:"fnref4"}},[e._v("[4]")])]),e._v(" The Frank-Wolfe decomposition formulation was extended to the combined distribution/assignment problem by Evans in 1974."),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn5",id:"fnref5"}},[e._v("[5]")])])]),e._v(" "),a("p",[e._v("A lack of extensibility of these algorithms to more realistic traffic assignments prompted model developers to seek more general methods of traffic assignment. A major development of the 1980s was a realization that user equilibrium traffic assignment is a “variational inequality” and not a minimization problem."),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn6",id:"fnref6"}},[e._v("[6]")])]),e._v(" An algorithm called the method of successive averages (MSA) has become a popular replacement for Frank-Wolfe decomposition because of MSA’s ability to handle very complicated relations between speed and volume and to handle the combined distribution/mode-split/assignment problem. The convergence properties of MSA were proven for elementary traffic assignments by Powell and Sheffi and in 1982."),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn7",id:"fnref7"}},[e._v("[7]")])]),e._v(" MSA is known to be slower on elementary traffic assignment problems than Frank-Wolfe decomposition, although MSA can solve a wider range of traffic assignment formulations allowing for greater realism.")]),e._v(" "),a("p",[e._v("A number of enhancements to the overall theme of Wardop’s first principle have been implemented in various software packages. These enhancements include: faster algorithms for elementary traffic assignments, stochastic multiple paths, OD table spatial disaggregation and multiple vehicle classes.")]),e._v(" "),a("h2",{attrs:{id:"calculating-generalized-costs-from-delays"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calculating-generalized-costs-from-delays"}},[e._v("#")]),e._v(" Calculating Generalized Costs from Delays")]),e._v(" "),a("p",[e._v("Equilibrium traffic assignment needs a method (or series of methods) for calculating "),a("a",{attrs:{href:"Impedance"}},[e._v("impedances")]),e._v(" (which is another term for generalized costs) on all links (and nodes) of the network, considering how those links (and nodes) were loaded with traffic. Elementary traffic assignments rely on "),a("a",{attrs:{href:"Delay_Estimation_in_Trip_Based_Models"}},[e._v("volume-delay functions")]),e._v(" (VDFs), such as the well-known “BPR curve” (see NCHRP Report 365),"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn8",id:"fnref8"}},[e._v("[8]")])]),e._v(" that expressed travel time as a function of link volume and link capacity. The 1985 US Highway Capacity Manual (and later editions through 2010) made it clear to transportation planners that delays on large portions of urban networks occur mainly at intersections, which are nodes on a network, and that the delay on any given intersection approach relates to what is happening on all other approaches. VDFs are not suitable for situations where there is conflicting and opposing traffic that affects delays. Software for implementing trip-based models are now incorporating more sophisticated delay relationships from the Highway Capacity Manual and other sources, although many MPO forecasting models still use VDFs, exclusively.")]),e._v(" "),a("h2",{attrs:{id:"challenges-for-highway-traffic-assignment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#challenges-for-highway-traffic-assignment"}},[e._v("#")]),e._v(" Challenges for Highway Traffic Assignment")]),e._v(" "),a("p",[e._v("Numerous practical and theoretical inadequacies pertaining to Static User Equilibrium network assignment technique are reported in the literature. Among them, most widely noted concerns and challenges are:")]),e._v(" "),a("ul",[a("li",[e._v("Inadequate network convergence;")]),e._v(" "),a("li",[e._v("Continued use of legacy slow convergent network algorithm, despite availability of faster solution methods and computers;")]),e._v(" "),a("li",[e._v("Non-unique route flows and link flows for multi-class assignments and for assignment on networks that include delays from opposing and conflicting traffic;")]),e._v(" "),a("li",[e._v("Continued use of "),a("a",{attrs:{href:"Delay_Estimation_in_Trip_Based_Models"}},[e._v("VDFs")]),e._v(", when superior delay estimation techniques are available;")]),e._v(" "),a("li",[e._v("Unlikeness of a steady-state network condition;")]),e._v(" "),a("li",[e._v("Impractical assumption that all drivers have flawless route information and are acting without bias;")]),e._v(" "),a("li",[e._v("Every driver travels at the same congested speed, no vehicle traveling on the same link overtakes another vehicle;")]),e._v(" "),a("li",[e._v("Oncoming traffic does not affect traffic flows;")]),e._v(" "),a("li",[e._v("Interruptions, such as accidents or inclement weather, are not represented;")]),e._v(" "),a("li",[e._v("Traffic does not form queues;")]),e._v(" "),a("li",[e._v("Continued use of multi-hour time periods, when finer temporal detail gives better estimates of delay and path choice.")])]),e._v(" "),a("h2",{attrs:{id:"transit-assignment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transit-assignment"}},[e._v("#")]),e._v(" Transit Assignment")]),e._v(" "),a("p",[e._v("Most "),a("a",{attrs:{href:"Transit_Network_Assignment"}},[e._v("transit network assignment")]),e._v(" in implementation is allocation of known transit network specific demand based on routes, vehicle frequency, stop location, transfer point location and running times. Transit assignments are not equilibrium, but can be either all-or-nothing or stochastic. Algorithms often use complicated expressions of generalized cost which include the different effects of waiting time, transfer time, walking time (for both access and egress), riding time and fare structures. Estimated transit travel time is not directly dependent on transit passenger volume on routes and at stations (unlike estimated highway travel times, which are dependent on vehicular volumes on roads and at intersection). The possibility of many choices available to riders, such as modes of access to transit and overlaps in services between transit lines for a portion of trip segments, add further complexity to these problems.")]),e._v(" "),a("h2",{attrs:{id:"latest-developments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#latest-developments"}},[e._v("#")]),e._v(" Latest Developments")]),e._v(" "),a("p",[e._v("With the increased emphasis on assessment of travel demand management strategies in the US, there have been some notable increases in the implementation of "),a("a",{attrs:{href:"Activity_Based_Models"}},[e._v("disaggregated modeling")]),e._v(" of individual travel demand behavior. Similar efforts to simulate travel route choice on dynamic transportation network have been proposed, primarily to support the much needed realistic representation of time and duration of roadway congestion. Successful examples of a shift in the network assignment paradigm to include "),a("a",{attrs:{href:"Dynamic_Traffic_Assignment"}},[e._v("dynamic traffic assignment")]),e._v(" on a larger network have emerged in practice. Dynamic traffic assignments are able to follow UE principles. An even newer topic is the incorporation of travel time reliability into path building.")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("Dial , Robert Barkley, Probabilistic Assignment; a Multipath Traffic Assignment Model Which Obviates Path Enumeration, Thesis (Ph.D.), University of Washington, 1971. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[a("p",[e._v("Wardrop, J. C., Some Theoretical Aspects of Road Traffic Research, Proceedings, Institution of Civil Engineers Part 2, 9, pp. 325–378. 1952. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[a("p",[e._v("LeBlanc, Larry J., Morlok, Edward K., Pierskalla, William P., An Efficient Approach to Solving the Road Network Equilibrium Traffic Assignment Problem, Transportation Research 9, 1975, 9, 309–318. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[a("p",[e._v("Beckmann, M. J., McGuire, C. B. and Winsten, C. B., Studies in the Economics of Transportation, Yale University Press, New Haven, Connecticut. 1956, (full text: "),a("a",{attrs:{href:"http://cowles.econ.yale.edu/archive/reprints/specpub-BMW.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://cowles.econ.yale.edu/archive/reprints/specpub-BMW.pdf"),a("OutboundLink")],1),e._v(") "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[a("p",[e._v("Evans, Suzanne P., Derivation and Analysis of Some Models for Combining Trip Distribution and Assignment, Transportation Research, Vol 10, pp 37–57 1976. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn6"}},[a("p",[e._v("Dafermos, S.C., Traffic Equilibrium and Variational Inequalities, Transportation Science 14, 1980, pp. 42-54. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref6"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn7"}},[a("p",[e._v("Powell, Warren B. and Sheffi, Yosef, The Convergence of Equilibrium Algorithms with Predetermined Step Sizes, Transportation Science, February 1, 1982, pp. 45-55. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref7"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn8"}},[a("p",[e._v("Martin, William A. and McGuckin, Nancy A., Travel Estimation Techniques for Urban Planning, National Cooperative Highway Research Program Report 365, 1998 (full text: "),a("a",{attrs:{href:"http://ntl.bts.gov/lib/21000/21500/21563/PB99126724.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://ntl.bts.gov/lib/21000/21500/21563/PB99126724.pdf"),a("OutboundLink")],1),e._v("). "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref8"}},[e._v("↩︎")])])])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);