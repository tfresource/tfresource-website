(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{499:function(e,a,t){"use strict";t.r(a);var i=t(7),s=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Transit path building parameters are segmented by each transit user class.")]),e._v(" "),t("h2",{attrs:{id:"parameter-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter-types"}},[e._v("#")]),e._v(" Parameter Types")]),e._v(" "),t("p",[e._v("There are two types of parameters that are typically included in "),t("a",{attrs:{href:"Transit_Network_Service_Determination"}},[e._v("transit path building")]),e._v(":")]),e._v(" "),t("p",[e._v("1. Parameters used to limit the scope of the built paths to those that are feasible and considered (for a specific mode, time of day, etc.)")]),e._v(" "),t("ul",[t("li",[e._v("Maximum initial wait time")]),e._v(" "),t("li",[e._v("Maximum access time/distance/cost by access mode")]),e._v(" "),t("li",[e._v("Maximum transfer time/distance")]),e._v(" "),t("li",[e._v("Maximum number of transfers")]),e._v(" "),t("li",[e._v("Maximum total path time/cost")]),e._v(" "),t("li",[e._v("Maximum access/egress zones")]),e._v(" "),t("li",[e._v("Spread parameters (for multi-path)")])]),e._v(" "),t("p",[e._v("2. Parameters that change the way time/cost are interpreted/perceived")]),e._v(" "),t("ul",[t("li",[e._v("[available access and egress network mode type | [Modal hierarchy]]")]),e._v(" "),t("li",[e._v("Boarding and transfer penalties between network mode type")]),e._v(" "),t("li",[e._v("Time penalties for certain network modes (including out-of-vehicle time)")]),e._v(" "),t("li",[e._v("Averaging maximums")])]),e._v(" "),t("h2",{attrs:{id:"specific-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specific-parameters"}},[e._v("#")]),e._v(" Specific Parameters")]),e._v(" "),t("h3",{attrs:{id:"transfer-and-boarding-penalties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transfer-and-boarding-penalties"}},[e._v("#")]),e._v(" Transfer and Boarding Penalties")]),e._v(" "),t("p",[e._v("Often certain features or an "),t("a",{attrs:{href:"Impedance"}},[e._v("impedance")]),e._v(" that may affect path choice cannot be represented in the literal time or cost of a path (as calculated by the software). Transfer and boarding penalties exist to reflect a multitude of factors such as:")]),e._v(" "),t("ul",[t("li",[e._v('Path unreliability associated with having to transfer (i.e., "transfer penalty")')]),e._v(" "),t("li",[e._v("Timed transfers between specific modes, which can make the transfer penalty smaller")]),e._v(" "),t("li",[e._v("The time and effort required to change platforms, stations, heights, sides of the street, or just to get on and off the vehicle")])]),e._v(" "),t("p",[e._v("The difference between a boarding penalty and a transfer penalty is that a boarding penalty can be assigned to the boarding of a specific network mode (i.e., commuter rail, express bus, etc.) whereas a transfer penalty can reflect a transfer from one network mode to another (i.e., local bus to commuter rail vs. walking to commuter rail).")]),e._v(" "),t("h4",{attrs:{id:"real-world-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#real-world-examples"}},[e._v("#")]),e._v(" Real World Examples")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The Metropolitan Transportation Commission (MTC) uses progressive boarding penalties of 5, 10, and 30 minutes for the first, second, and third transfers respectively. This approach makes paths with three transfers possible, but extremely unlikely.")])]),e._v(" "),t("li",[t("p",[e._v("The San Francisco County Transportation Authority uses a flat 6 minute penalty per transfer.")])])]),e._v(" "),t("h3",{attrs:{id:"network-mode-weighting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-mode-weighting"}},[e._v("#")]),e._v(" Network Mode Weighting")]),e._v(" "),t("p",[e._v("Network mode weighting is instituted in order to both force the use of a particular submode even if it is suboptimal in terms of pure time, and to accurately represent the increased disutility of some aspects of a path such as waiting and walking between stops.")]),e._v(" "),t("p",[e._v("It is important that this set of paths also be considered optimal by the mode choice model; thus general consistency between the weights in path-building and weights in mode choice are critical.")]),e._v(" "),t("h4",{attrs:{id:"real-world-examples-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#real-world-examples-2"}},[e._v("#")]),e._v(" Real World Examples")]),e._v(" "),t("p",[e._v("The following are examples of weights applied to specific path components, relative to in-vehicle time.")]),e._v(" "),t("p",[e._v("The Metropolitan Transportation Commission uses the following weighting scheme (as of Travel Model One):")]),e._v(" "),t("ul",[t("li",[e._v("2.0 - Initial wait time, transfer wait time, walk access time, walk transfer time, walk egress time")]),e._v(" "),t("li",[e._v("1.0 - Drive access time, drive egress time")]),e._v(" "),t("li",[e._v("0.75 - Submode for which the skim is being built (i.e., BART for a Walk-to-BART skim)")])]),e._v(" "),t("p",[e._v("The San Francisco County Transportation Authority uses the following weighting scheme (as of CHAMP 5.0):")]),e._v(" "),t("ul",[t("li",[e._v("2.0 - Initial wait time, transfer wait time, walk transfer time")]),e._v(" "),t("li",[e._v("1.0 - Drive access time, drive egress time (includes equiv. minutes for distance and tolls as generalized cost)")]),e._v(" "),t("li",[e._v("0.2 - Submode for which the skim is being built (i.e,. BART for a Walk-to-BART skim)")])]),e._v(" "),t("p",[e._v("~varying based on quality for Walk Access and Walk Egress. Max: 2.0, Min 0.5. Walk quality is determined based on an estimated generalized cost of distance, rise (slope), indirectness, road capacity, and density")]),e._v(" "),t("h2",{attrs:{id:"calibration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calibration"}},[e._v("#")]),e._v(" Calibration")]),e._v(" "),t("p",[e._v("The calibration of path building and evaluating parameters is best-acheived by an "),t("a",{attrs:{href:"On_Board_Transit_Survey"}},[e._v("on-board survey")]),e._v(". The records from the on-board survey can be used to create an origin-destination trip-table, which can then be assigned to the network based on the above parameters and then compared to the on-board survey paths.")]),e._v(" "),t("h2",{attrs:{id:"implementation-considerations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation-considerations"}},[e._v("#")]),e._v(" Implementation Considerations")]),e._v(" "),t("ul",[t("li",[e._v("There are significant differences in the capabilities and interpretation of transit path parameters across software packages. Be sure to read the documentation that comes with your software package and understand how it works.")])]),e._v(" "),t("h2",{attrs:{id:"reasonableness-checks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reasonableness-checks"}},[e._v("#")]),e._v(" Reasonableness Checks")]),e._v(" "),t("ul",[t("li",[e._v("Network mode weights and other parameters should be plausible and easily explained by real-life behavior.")]),e._v(" "),t("li",[e._v("Paths should reasonably reflect the on-board survey when assigned.")]),e._v(" "),t("li",[e._v("[Path Choice Mode Choice Consistency] should be maintained.")]),e._v(" "),t("li",[e._v("Map paths for representative origin-destination pairs.")])]),e._v(" "),t("h2",{attrs:{id:"reporting-guidelines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reporting-guidelines"}},[e._v("#")]),e._v(" Reporting Guidelines")]),e._v(" "),t("ul",[t("li",[e._v("Report weights used for all modes and the behavioral explanation for their plausibility.")]),e._v(" "),t("li",[e._v("Report parameters used in path building and the underlying assumptions that they put in your model.")]),e._v(" "),t("li",[e._v('Report a comparison between your model paths and on-board survey paths using a parameter such as "path overlap."')]),e._v(" "),t("li",[e._v("Map")])]),e._v(" "),t("hr")])}),[],!1,null,null,null);a.default=s.exports}}]);