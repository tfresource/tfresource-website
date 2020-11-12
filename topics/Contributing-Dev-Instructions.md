---
title: 'Developer Instructions'
categories:
  - About
---

# Building TF-Resource Locally

## Why build locally?

For anything more complex than minor text edits, you may find that the Github website editor is inadequate. The preview panel doesn't always show perfect results, for example. Sometimes it's useful to see immediate results of a change (maybe you're not quite sure what best table layout or heading to use, for example) -- and it takes Github around five minutes to publish a change.

In these situations it's a lot easier to build and test locally, and then only push your changes to Github when you're ready to publish a pull request.

::: tip COMMAND LINE? WHAT COMMAND LINE?
The following instructions require familiarity with the command-line terminal window. If you are unfamiliar with the command line for your computer, you might want to continue using the Github website.

We're glad you want to make bigger changes, though, so if you can figure out these instructions, great!!!
:::

## 1. Install software

The following software is required to build TF Resource locally -- all of this is free, open source software:

- Nodejs, [Node installer here](https://nodejs.org/en/). Download the **recommended LTS** (long-term support) version
- Git, [Git installer here](https://git-scm.com/downloads) if you don't already have Git installed. (Note that the VS Code IDE recommended below has a copy Git included)

In addition, you will need a good Markdown text editor. We recommend using the free tool VS Code, as that's what we are using. There are plenty of others, too, if you have preferences about text editors and IDE's.

- [VS Code installer for Windows/Mac/Linux](https://code.visualstudio.com/)

## 2. Set up your local copy of the site

- On Github, create your personal fork of the repo if you haven't already, using the 'Fork' button in the upper right

Now "clone" (download a copy) of the site on your computer, and install all important dependencies using the following commands:

```bash
git clone https://github.com/[your-github-name]/website.git tfresource
cd tfresource
npm install yarn
npx yarn install
```
If you use a GUI for git, such as Sourcetree or GitKraken, be sure to clone the "source" branch (not the "master" branch which your GUI may default to).

## 3. Make your changes

Now you are ready to build the site (i.e., convert the markdown and page templates to an HTML website) and run a local development web server to review the site.

- Start a local web server which builds and serves the site (this command will take a minute or two):
  - `npx yarn serve`
  - If this command fails, you may need to remove node_modules with the command `rm -rf node_modules`, and rerun `npx yarn install` and `npx yarn serve`
- Open a browser to `http://localhost:8080` to view your local copy of the site (using https may cause errors in some browsers).
- Edit any pages in the `tfresource/topics` subfolder
- Changes should hot-reload / show up automatically in the web browser, but if you don't see your changes you can click reload.

## 4. Creating a pull request

When you're happy with your set of changes to one or multiple files, push them to Github and create a pull request.

You can do this from inside VS Code (go to the source-control panel on the left nav, and add/commit then push your files) , or from the command line:

```bash
git add topics/*
git commit -m "Description of my changes"
git push
```

You then go back to the Github website to create the pull request.
