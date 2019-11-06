---
title: "Re-simulating link volumes to reflect uncertainty in highway assignment"
categories:
   - Needs Review
   - Network Assignment
---

In the highway project prioritization process, congestion benefits of capacity-adding highway projects are often calculated by comparing Build and No-Build scenarios using a regional travel demand model, with the results presented as point estimates (i.e., one number) in the congestion scores and Benefit/Cost ratios. Although point estimates are easier to communicate and understand, they do not provide any information about the reliability of the results.

One way to represent the lower reliability associated with links that validate poorly is through the use of “volume correction factors”, defined as the amount by which the modeled daily total volume must be multiplied in order to match the observed volume on a link. For example, a volume correction factor of 0.1 means that the modeled volume needs to be divided by 10 in order to match the observed volume. 1.0 means that the modeled volume equals the observed volume, and 10 means that the modeled volume needs to be multiplied by 10 in order to match the observed volume.

The volume correction factor distribution for a given project describes the frequency and magnitude by which the assignment “erred” in predicting volumes in the base-year network as a function of facility size. The volume correction factors can then be used to adjust the link volumes for a project using a \[Monte Carlo\] approach. First, the average total daily link volume for a project is calculated over all of the links comprising the project. The corresponding volume correction factor distribution is then selected based on the estimated average daily volume. Next, a random number generator is used to pick a number between 0 and 1 (inclusive). Based on this number, a value for the volume correction factor is selected from the corresponding cumulative frequency distribution. The resulting volume correction factor is then applied to all of the project link volumes.

The congested travel times on all of the project links are updated based on the adjusted V/C ratios and using AM and PM peak volume-delay functions. Using the link free-flow travel times, the adjusted congested travel times, and the adjusted link volumes, the link delays are recalculated on all links of the project. The same methodology and assumptions that were used to calculate the monetized benefits of reduced delay and fuel consumption are used to recalculate the congestion benefits based on the adjusted link delays and volumes.

Automate this procedure and repeat it 1000 times. The results of each run are stored and statistics developed (e.g., average benefit, low value, high value, 90th percentile, etc.).
Such an approach may still actually overestimate forecast reliability since it does not account for uncertainties associated with the socioeconomic forecasts. If, however, there is a high degree of overlap between uncertainty ranges, it might suggest that the assignment itself cannot make meaningful distinctions between the potential congestion benefits of the project.

------------------------------------------------------------------------

