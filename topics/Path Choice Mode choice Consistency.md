---
title: "Path Choice Mode choice Consistency"
categories:
   - Needs Review
---

It is important to consider the consistency in parameters used for path choice and mode choice. If they are not relatively similar, your model will produce unintuitive results.

For Example:

Path Building
If the path building step weights access time the same as in-vehicle time, then Route A is found to be much better than Route B and in the route evaluation step, it will use the costs found from Route A.

`                  Access Time (1x)    +   In-Vehicle Time (1x)   =  Total Gen. Cost`\
`      Route A           5 x 1 =  5                         1 x 1 = 1          = 6  `\
`      Route B           1 x 1  = 1                           8  x 1 =  8       = 9`

Mode Choice
...but if the mode choice model actually takes into account that people don't like waiting and walking so much as they like riding, Route B looks like the better deal.

`                    Access Time (2x)    +   In-Vehicle Time (1x)   =  Total Gen. Cost`\
`      Route A           5 x 2 = 10                         1   x 2 = 2           = 12`\
`      Route B           1 x 2  = 2                         8  x 1 =  8        = 10`

One of the possible outcomes of this is that you could actually make improvements to the transit network, but they would result in decreases in transit usage because they would be inconsistently evaluated.

------------------------------------------------------------------------

