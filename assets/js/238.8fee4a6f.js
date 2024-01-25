(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{443:function(e,n,t){"use strict";t.r(n);var a=t(7),o=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),t("p",[e._v("Quantified values of population, households and employment covering the\nmetropolitan area at a fine level of geographic detail are the principal\ndata elements in calculating locally generated person-travel demand over\nthe region’s transportation network. Additional socioeconomic variables are\nalso required to account for the considerable volume of commercial vehicle\ntraffic, especially trucks, having origins and destinations within or\nbeyond the metropolitan region.")]),e._v(" "),t("p",[e._v("Calculating future travel demand requires two robust methodologies to forecast the needed socioeconomic inputs. First, an "),t("em",[e._v("aggregating methodology")]),e._v(" that estimates future small-area population, household and employment values using Census data along with stated assumptions regarding expected land use. Second, a "),t("em",[e._v("disaggregating methodology")]),e._v(" that appropriately assigns determinants of national and global economic growth or decline at the metropolitan scale.")]),e._v(" "),t("p",[e._v("Numerous government agencies typically have land use and transportation\nplanning jurisdiction over the modeling region. These agencies declare,\nwith varying degrees of precision and certainty, future expectations for\npopulation, employment and economic activity in the course of preparing\ntheir long-range plans. Depending on their respective missions, these\norganizations may have diverging outlooks on a future that is essentially\nunknown beyond the next few years. Some agencies (e.g. a State DOT) as\nsteward of tangible assets, may take a risk-averse view and prefer to make\nlong-term planning decisions based on conservative forecasts derived from\nfamiliar conditions and previous outcomes. Other agencies (e.g. a regional\nMPO) may be charged with pursuing structural changes to remedy persistent\nsocial and economic problems and will prepare forecasts that reflect the\noutcome of sweeping policy reforms across the region.")]),e._v(" "),t("p",[e._v("Similarly, federal agencies (along with some private financial services)\nprepare and publish economic projections intended to guide national\npolicy-making and evaluate the investment risk associated with planned\ngovernment actions. As with the local agencies, these national or\nglobal-scale publications can produce a wide range of forecast values\ndepending on their intended use. Some may use econometric techniques to\npredict short and medium-term risk exposure, while others extrapolate\nlong-term historical averages decades into the future.")]),e._v(" "),t("p",[e._v("For purposes of travel demand modeling, these two forecasting sentiments\ncan be reconciled through a technique of constructing alternative future\nscenarios. The scenarios, themselves, are distinguished by a detailed\nspecification of the environmental (i.e. demographic, economic, social)\ninfluences that are expected to establish a pattern and intensity of\nbusiness activity, thereby resulting in a plausible arrangement of land use\nat a prescribed future date. Each future scenario can be further\ndistinguished by describing any supporting or countervailing government\ninterventions assumed to bring about a desired policy objective.\nAlternative future scenarios are usually thematically formed by\narticulating varying levels of capital investment, pricing (e.g. taxes,\ntolls, user fees), or technological innovation. It is also necessary that\nthe forecasting methodology account for the impact that government actions\nmay have on environmental variables such as household composition, labor\nforce participation or technology adoption.")]),e._v(" "),t("p",[e._v("In any case, each unique combination of assumed environmental influences\nand government interventions will affect both the rate and geographic\npattern of population and employment change going forward. There are two\nprevailing approaches to quantifying these changes at the level-of-detail\nneeded for travel demand modeling. One approach is to rely on empirical\nobservation of historic trends, before-after studies and local expert\nopinions to manually apply changes across the region on a case-by-case\nbasis. This approach can almost always withstand local scrutiny provided\nlocal conditions are sufficiently considered and reflected; but it is also\npainstakingly slow, error-prone and difficult to reproduce. A second\napproach is to apply econometrics and spatial statistics to automatically\ndampen or enhance the development potential of a geographic location in\nresponse to influences and interventions specifically stated in the\nscenario definition. This approach has the advantage of producing multiple\nscenarios in shorter time, allows for systematic error-tracking, and is\ncapable of being modified and replicated by others.")]),e._v(" "),t("h2",{attrs:{id:"defining-scenarios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defining-scenarios"}},[e._v("#")]),e._v(" Defining Scenarios")]),e._v(" "),t("p",[e._v("A variety of public and private sources should be inventoried to ascertain\nprevailing trends and influences relevant to the pattern of socioeconomic\nchange in the study area. The sources of information will be drawn\nprimarily from a review of publicly and privately prepared economic\nforecast publications presented at the national, state or regional scale\nalong with capital development programs currently in effect for public\nagencies. While these information sources are substantial, they are rarely\ndelivered in a format suitable for analyzing travel demand. The first task\nis to develop a menu of both observed and conjectured trends and patterns\nof population, employment, households, housing stock, income, commuting,\ninfluential industries, land use constraints, special land uses (e.g.\nairports), and major transportation network changes. From this menu of\nindividual items, thematic future scenarios can be composed guided by\nintuitive consideration of what trends and interventions will have the\nstrongest influence on a positive or negative economic outcome. It should\nbe understood that it is essentially impossible to validate the precise\nimpact of a broad economic assumption on a particular parcel of land. The\neconometric relationships can be clearly documented, but the estimation and\ncalibration of the terms in application are expected to be heuristic.")]),e._v(" "),t("h2",{attrs:{id:"market-constraints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#market-constraints"}},[e._v("#")]),e._v(" Market Constraints")]),e._v(" "),t("p",[e._v("Once the menu of influences and interventions are in place, an objective\nassessment must be performed with respect to the land use constraints that\nwould limit an econometrically derived calculation of growth potential.\nRather than a characteristic of “markets” "),t("code",[e._v("<em>")]),e._v("per se"),t("code",[e._v("</em>")]),e._v(", this is an\nacknowledgement of the essential non-fungibility of land usage given the\nnature of property rights, local land use control and longevity of building\nstock. The inertia of a particular style, density and pattern of\ndevelopment is then built into the menu of influences that can be included\nin any or all future scenarios. To the extent that a radical change in land\nuse has been specified (e.g. redevelopment), the constraint to such an\noutcome can be overridden.")]),e._v(" "),t("h2",{attrs:{id:"micro-level-forecast-adjustments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#micro-level-forecast-adjustments"}},[e._v("#")]),e._v(" Micro-Level Forecast Adjustments")]),e._v(" "),t("p",[e._v("Up to this point, scenario-specific influences and interventions have been\nsystematically applied through the use of spatial statistics and\neconometric equations. This produces a comprehensive and consistent result\nacross the entire modeling region. The outcome of specific transportation\nand land use proposals, however, can be expected to be highly-context\ndependent at the local level. It is therefore advantageous (in areas of\nparticular concern) to depart from the blind objectivity of mathematics,\ncarefully scrutinize local conditions, and then adjust the result to match\nexpert insights or intuition. Through stakeholder outreach and peer\nexchange with those conversant in the development activities and overall\nfuture growth outlook in the area, enforceable land-use policy and zoning\nchanges as well as physical and natural constraints may come to light that\nindicate manually modifying the systematically-derived forecast\ncalculations.")])])}),[],!1,null,null,null);n.default=o.exports}}]);