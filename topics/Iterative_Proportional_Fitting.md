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

## Solution ##

The table is filled with starting values and adjusted iteratively to match row totals and column totals. 

First, starting values for each cell in this matrix needs to be set. If no better information is available, the initial values could be set to 1. Better yet, starting values could be more likely values, such as values that were observed in a different study area. 

### Iteration 1 ###

Below, the table was filles with 1's as better data were not available. Next, the row sum is calculated (the process could equally well start with column sums). Obviously, the row sum is far off from row target. The ratio between the two describes the correction that is needed to reach the row totals. 

![](hhTable_1.png 'Households by Size and Car-Ownership: Iteration 1')

After multiplying every cell in the matrix with the corresponding row ratio, the table has these values:

![](hhTable_2.png 'Households by Size and Car-Ownership: Iteration 1 after adjustment')

The sum of every row perfectly matches the row totals. 

### Iteration 2 ###

However, the column totals are far off. The number of households by household size is not matched yet. By summing up values across columns, the ratios between target column totals and actual column totals are calculated. 

![](hhTable_3.png 'Households by Size and Car-Ownership: Iteration 2')

Next, every cell is multiplied with the column-specific ratio, which corrects values to perfectly match target column totals. 

![](hhTable_4.png 'Households by Size and Car-Ownership: Iteration 2 after adjustment')

In this simple example, both row and column targets are met after two iterations. 

## Refinements ##

If better starting values than 1's can be obtained, the resulting matrix will be more reasonable. Additional iterations will be required to match both column and row totals, but results will be more realistic.

It is also possible to set selected cells to 0. For example, if there was evidence that there were no 1-person households with 3 or more cars, the lower right cell could be set to 0. As adjustments are made by multiplication, the resulting table will have no households with size 1 and 3+ cars, while column and row totals are still matched:  

![](hhTable_5.png 'Households by Size and Car-Ownership: Setting selected cells to 0')

## Multi-dimensional IPF ##

IPF can be conducted by multiple (more than two) dimensions. For example, there might be interest to create a three-dimensional matrix of households by 

- size
- number of cars
- income group

Each iteration will adjust the matrix three times to match the control totals in these three dimensions. 

[//]: # %% Note: to add this page to the menu on the left, go to website/.vuepress/sidebar.js
