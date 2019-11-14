---
title: '**Tips for Reviewing Pages'
categories:
  - About
---

Hello TF Resource volunteers!! Here are some common problems in the raw imported pages, and how to fix them!

- Markdown format [cheat-sheet here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

The best way to see what a page is _supposed_ to look like is to open up the old http://tfresource.org website, and navigate to the page with the same name. (Use the search bar to get there quickly). Having that page open side-by-side will help you figure out what needs to be done.

## Page Junk

Sometimes there will be some random things like

}}

\_\_TOC\_\_

or just random headings with no content below them.

Just **DELETE** random page junk.

## Broken Links

Many TF Resource page names got changed because of spaces, capitalization, etc. Check every link on your page, and if it leads to a "404" page then it very likely is just a matter of fixing the file name.

- Pages now begin with an initial capital letter, and all spaces have been changed to under_scores.
- e.g. a link pointing to `temporal data` would now be `Temporal_data`
- Note you DO NOT NEED the `.md` extension to link to a page name: just use its full exact name _before_ the .md extension.

## Missing Images

If you see a broken image icon like this: ![](/broken_link)

...it probably means the filename of the image file was _slightly modified_. Every image filename now starts with a capital letter, and spaces in filenames were converted to under_scores.

- Try capitalizing the first letter of the filename in the link so for example\
   `![my-image](this image.jpg) --> ![my-image](This_image.jpg)`

- See if replacing spaces or hyphens with underlines does the trick.

- Look on Github at the folder containing all of the images here; and copy its filename exactly.\
   ==> All images files are [listed here on Github](https://github.com/tfresource/tfresource.github.io/tree/source/.vuepress/public/topics).

If none of these tricks work, maybe the image didn't get copied over correctly. You can copy it directly from the old site:

- Find and click on the image on <http://tfresource.org>
- Right-click and "Save As...", and save to your computer somewhere
- Then upload that file to the `.vuepress/public/topics` folder, where all image files are stored.

## Math and Equations

Some math imported properly, but some didn't. All math should use LaTex format.

- Equations that stand alone, centered, on a line should be surrounded by double-\$\$ with no spaces before/after, like so:\
   `$$\alpha + \beta$$`
- Math that you want in-line as part of a sentence is surrounded by `$single-dollars$` instead.

- [Upmath](https://upmath.me/) is a nice interactive editor where you can experiment with LaTeX math codes, and then copy the math codes to your page when you get it right.

## Tables

Oh, tables. Simple tables get converted easily. Complicated tables did not survive the conversion very well. It might be easiest to go back to the original table code on tfresource.org and start from there, if it is really truly mangled.

You'll probably find that fixing tables is difficult in the web editor; you may want to follow the [Developer Instructions](Contributing-Dev-Instructions) instead.

- We are using Github-flavored tables, there is a [good cheat-sheet here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables)
- Get rid of `<center>blah</center>` formatting, it generally just breaks everything
  Billy will review/fix the worst of the tables if they are too much for you.

## When you're finished

Check out the **Preview Changes** tab in the web editor to see a (more or less) accurate rendering of your page.

Save your file in the web editor by clicking **Propose Changes** and then **Create Pull Request**.

- Remember, your changes won't show up live until they've been reviewed and merged. So just move on to the next page! :-)

Thanks for your help!
