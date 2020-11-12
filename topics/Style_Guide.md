---
title: 'Style Guide'
categories:
  - About
---

**Purpose**: This style guide was created to promote a more uniform organization and voice throughout the TFResource wiki. The intention is not to create burdens that discourage content contribution, but rather to guide the drafting of content so that authors can focus more on the content and spend less time worrying about page organization, intended audience, and tone. 

**Intended audience**: Since modelers frequently collaborate with planners, the wiki should be accessible to both groups of people. This will also benefit modelers and students newer to the field. Please make a concerted effort to write with these groups in mind.

## Page Title
- Carefully consider whether a new page is necessary. Does your new content better fit onto an existing page?
- Make sure that page does not already exist under a similar or different name (search for applicable or shortened keywords).
- All page titles should be uppercase. 
- Keep page titles as short as possible.
- Make them clear - the page title should give a clear indication of the page content
- Use consistent titles that go well with existing page titles. 
	- Examples:
		- [Data Driven Methods](https://tfresource.org/topics/Data_Driven_Methods.html)
		- [Spatial Interaction Models](https://tfresource.org/topics/Spatial_interaction_models.html)
		- [Path Choice Mode Choice Consistency](https://tfresource.org/topics/Path_Choice_Mode_choice_Consistency.html)

## Organization and Structure
- Start with introduction/abstract to set the context; list suggested prerequisites
- Use subheadings/subsections (rule of thumb is 2-3 paragraphs per subsection)
- The page should not be too long; consider subpages if page is significantly longer than other pages (rule of thumb is 3 scrolls)

## Language and Tone
- Professional/Formal
- Free of colloquialism (avoid informal/conversational style).  See [here](https://www.niu.edu/writingtutorial/style/formal-and-informal-style.shtml) for examples
- Friendly (less academic, and not negative about differing approaches)
- Avoid first person
- Concise text (to the point)
- Limit use of abbreviations. If you do use common acronyms (like TAZ and ABM), define them in the acronym list as follows:
	- Add an acronym to the list at `.vuepress/public/acronyms.csv`
	- Call out the acronym in the page text with double equal signs, e.g. `==TRB==` will pull up the definition of the TRB acronym
	- Example of doing this is [here](https://github.com/tfresource/website/commit/d49df8c41a169aa5c1841af6c2f0107a283796dc) 


## Formatting
- **Graphics**
	- Use vector images (SVG format) if possible
	- If you use a raster image:
		- Choose minimum resolution of 72 ppi
		- Avoid large file sizes
			- Suggested maximum size of 10MB
			- Check the image dimensions (avoid images that are much larger than the intended space on the wiki page)
		- Choose PNG or JPG format (JPGs are lossy, however)
- **Links/cross-links**
	- Cross-links: When talking about a topic/term, link to that page from the text. 
	- Use cross-links as often as possible on all pages throughout the wiki. This will make navigating much easier and will guide people to the important pages and topics the text is talking about.
	- Spell the "link text" in the grammatically correct way of your surrounding sentence (including upper- or lowercase). 

## Content
- **No duplication of content**. Explain a topic on one page where it fits best. If you need to refer to that topic on another page, link back to the original page, do not recreate explanations/descriptions/facts twice. This would turn maintenance into a nightmare and invite inconsistency/contradiction. And it is plain bad practice.
- **Do not copy over text from Wikipedia or other similar web resources**. If there is relevant and useful information, provide a link under the section "See also" at the end of the page.
- **Respect all copyright and other intellectual property laws.** This includes academic papers published in other venues (such as TRB) and their abstracts.
- **Try to be write objectively and avoid adding biases and opinions**
- **Give credit where it is due** (plagiarism)
- TODO: DISCUSS REFERENCING STYLE

## Example Pages
If you are looking for an example page that exemplifies the organization, formatting, and tone required by this style guide, see the following page:
- [Skim Matrix](https://tfresource.org/topics/Skim_Matrix.html )

## Tips 

 - **Links**:       You DO NOT NEED the .md extension to link to a page name; just use its full exact name before the .md extension.
 - **Equations**:   All math should use [LaTex](https://en.wikipedia.org/wiki/LaTeX) format.  
                 - Equations that stand alone, centered, on a line should be surrounded by double-\$\$ with no spaces before/after, like so:\
   `$$\alpha + \beta$$` for
$$\alpha + \beta$$
                 - Math that you want in-line as part of a sentence is surrounded by  `$single-dollars$`  instead.  
                 - [Upmath](https://upmath.me/) is a nice interactive editor where you can experiment with LaTeX math codes, and then copy the math codes to your page when you get it right.
 - **Tables**:      We are using Github-flavored tables, there is a [good cheat-sheet here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables)
 - **Old Site**:    If you're reviewing content and want to see what it used to (is supposed to) look like, you can find the old website here: <http://old.tfresource.org>.   

