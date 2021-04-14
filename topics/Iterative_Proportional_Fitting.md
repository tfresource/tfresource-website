---
title: "Iterative Proportional Fitting"
categories:
  - Statistics
  - Topic Circles
---

<PagesInCategory category="Statistics" />

## Introduction ##

Iterative proportional fitting (IPF) serves to create two-dimensional tables (such as households by income and household size) from one-dimensional input data (such as one list with households by income and another list with households by size). 

Iterative proportional fitting is also known as matrix balancing and RAS method, these terms describe the process. 

## Problem setup ##

Imagine, you have data on number of households by household size, and number of households by auto-ownership. 

![](hhBySize.png 'Households by Size')
*Example: Households by Size*

![](hhByCarOwnership.png 'Households by Car-Ownership')
*Example: Households by Car-Ownership*

If you need the number of households by size and car-ownership, you can use IPF to create those numbers, respecting the given totals of households by size and households by car-ownership. In other words, the goal of IPF is to fill the cells in this matrix, while respecting row and column totals:

![](hhTable.png 'Households by Size and Car-Ownership')
*Example: Households by Size and Car-Ownership*



%% Note: to add this page to the menu on the left, go to website/.vuepress/sidebar.js