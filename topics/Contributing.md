---
title: 'Contributing to the Travel Forecasting Resource'
categories:
  - Needs Review
  - About
---

This website serves as a community resource for travel forecasting research and practice. We welcome your participation!

This community is comprised of [Volunteers](TF_Resource_Volunteers), many of whom are affiliated with the Transportation Research Board's ADB45 Committee on Travel Forecasting Resources.

## Getting started

TF Resource is a collection of pages written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) plain-text format, stored on Github.com. Github uses a "pull request" workflow, which means that **you don't need anyone's permission** to suggest whatever changes you see fit! Rather, you make changes to your own copy of a page, and then you request that those changes be pulled into the site by our team of volunteers.

::: tip
You must create a free account on Github in order to make changes to the site.
:::

This removes the need for complicated permissions management or gatekeeping on the site, while still allowing the TF Resource editors to prevent spam or incomplete/incorrect changes. After review, TF Resource volunteers may then either approve/merge the edits or suggest additional changes.

#### Should I edit directly on the Github website?

Small changes can be made directly on Github using the "Edit this Page" link at the top of every page.

For larger changes, we recommend following the detailed setup instructions to create a local copy of the site on your own computer. Then you can iterate and verify changes locally on that copy before you request that they be published.

This will reduce the number of "round trips" while saving and publishing -- which will save you a lot of time.

## Editing a page

::: tip HI TFR REVIEWERS!
TF Resource volunteers! Thanks for reviewing content for us!

Be sure to **REMOVE the 'Needs Review'** category line from the top of a page -- after you have verified it and made any necessary updates! :-)

Thank you!!!
:::

- Click the _Edit this Page_ link at the top of any page to create your own copy of the page and start editing.
  - If you are not logged into Github, you will be asked to log in or create a new (free) account
  - If this is the first time you are editing, you will be asked to **Fork this repository.** Yes, fork the repository. That means you are creating your own personal copy of the site, on which you can make whatever changes you wish.
- You'll be taken to a page with the full text of that page in an editor window. Make changes as you see fit.
  - Page text is in [Markdown format](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), with standard Github-flavored extensions for tables and LaTeX/MathJax equations.
- You can review your changes in the **Preview Changes** tab, but be warned that some content such as math equations and complex tables may not preview correctly. I wish I knew how to fix this! If you are doing lots of editing, you might want to [build locally](Contributing-Dev-Instructions) instead of using the web editor to get around this.
- When you are happy with your edits, save the file using the **Propose file change** button. You can add a description to the edits if you like.
- After proposing the changes, create the pull request and sit back.
- Someone at TF Resource will review your changes and either approve, reject, or suggest further edits to your submission.

## Creating a new page

- All pages must be stored in the `topics` subfolder of the site. Pages must be in Markdown format and must include a yaml header with the page title and any categories you want the page to be part of.
- Please name the file without any spaces or other non-alphanumeric characters.
- It is probably easiest to make a copy of an existing page, and start from that, instead of trying to create a blank page with the proper formatting from scratch.

## Uploading files and media

- For now, store all images and other attachments in the `.vuepress/public/topics` folder. We're working on finding a better place for these items.
- You can then refer to images using the syntax\
  `![Image description](name_of_my_file.jpg "Optional Tooltip Text")`

## Using categories for organization

- Please use categories!
- Please use categories that already exist! We have too many categories already, and don't need any more.
- Be sure to spell and capitalize all categories correctly to ensure that reviewers accept your changes.

---
