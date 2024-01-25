(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{271:function(e,t,o){"use strict";o.r(t);var a=o(7),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("This page describes how to run a local instance of the website for viewing local edits. Not all contributors to the site will need or want to do this.")]),e._v(" "),o("h2",{attrs:{id:"why-build-locally"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-build-locally"}},[e._v("#")]),e._v(" Why build locally?")]),e._v(" "),o("p",[e._v("For anything more complex than minor text edits, you may find that the Github website editor is inadequate. The preview panel doesn't always show perfect results, for example. Sometimes it's useful to see immediate results of a change (maybe you're not quite sure what best table layout or heading to use, for example) -- and it takes Github around five minutes to publish a change.")]),e._v(" "),o("p",[e._v("In these situations it's a lot easier to build and test locally, and then only push your changes to Github when you're ready to publish a pull request.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("COMMAND LINE? WHAT COMMAND LINE?")]),e._v(" "),o("p",[e._v("The following instructions require familiarity with the command-line terminal window. If you are unfamiliar with the command line for your computer, you might want to continue using the Github website.")]),e._v(" "),o("p",[e._v("We're glad you want to make bigger changes, though, so if you can figure out these instructions, great!!!")])]),e._v(" "),o("h2",{attrs:{id:"_1-install-software"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-software"}},[e._v("#")]),e._v(" 1. Install software")]),e._v(" "),o("p",[e._v("The following software is required to build TF Resource locally -- all of this is free, open source software:")]),e._v(" "),o("ul",[o("li",[e._v("Nodejs, "),o("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node installer here"),o("OutboundLink")],1),e._v(". Download the "),o("strong",[e._v("recommended LTS")]),e._v(" (long-term support) version")]),e._v(" "),o("li",[e._v("Git, "),o("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git installer here"),o("OutboundLink")],1),e._v(" if you don't already have Git installed. (Note that the VS Code IDE recommended below has a copy Git included)")])]),e._v(" "),o("p",[e._v("In addition, you will need a good Markdown text editor. We recommend using the free tool VS Code, as that's what we are using. There are plenty of others, too, if you have preferences about text editors and IDE's.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code installer for Windows/Mac/Linux"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"_2-set-up-your-local-copy-of-the-site"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-up-your-local-copy-of-the-site"}},[e._v("#")]),e._v(" 2. Set up your local copy of the site")]),e._v(" "),o("ul",[o("li",[e._v("On Github, create your personal fork of the repo if you haven't already, using the 'Fork' button in the upper right")])]),e._v(" "),o("p",[e._v('Now "clone" (download a copy) of the site on your computer, and install all important dependencies using the following commands:')]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("your-github-name"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("/tfresource-website.git tfresource-website\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" tfresource-website\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v("\nnpx "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),o("p",[e._v('If you use a GUI for git, such as Sourcetree or GitKraken, be sure to clone the "source" branch (not the "master" branch which your GUI may default to).')]),e._v(" "),o("h2",{attrs:{id:"_3-make-your-changes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-make-your-changes"}},[e._v("#")]),e._v(" 3. Make your changes")]),e._v(" "),o("p",[e._v("Now you are ready to build the site (i.e., convert the markdown and page templates to an HTML website) and run a local development web server to review the site.")]),e._v(" "),o("ul",[o("li",[e._v("Start a local web server which builds and serves the site (this command will take a minute or two):\n"),o("ul",[o("li",[o("code",[e._v("npx yarn serve")])]),e._v(" "),o("li",[e._v("If this command fails, you may need to remove "),o("code",[e._v("node_modules")]),e._v(" with the command "),o("code",[e._v("rm -rf node_modules")]),e._v(", and rerun "),o("code",[e._v("npx yarn install")]),e._v(" and "),o("code",[e._v("npx yarn serve")])]),e._v(" "),o("li",[e._v("If you get an error with "),o("code",[e._v("ERR_OSSL_EVP_UNSUPPORTED")]),e._v(", you may need to run "),o("code",[e._v("export NODE_OPTIONS=--openssl-legacy-provider")]),e._v(" (see this "),o("a",{attrs:{href:"https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported",target:"_blank",rel:"noopener noreferrer"}},[e._v("stackoverflow"),o("OutboundLink")],1),e._v(")")])])]),e._v(" "),o("li",[e._v("Open a browser to "),o("code",[e._v("http://localhost:8080")]),e._v(" to view your local copy of the site (using https may cause errors in some browsers).")]),e._v(" "),o("li",[e._v("Edit any pages in the "),o("code",[e._v("tfresource-website/topics")]),e._v(" subfolder")]),e._v(" "),o("li",[e._v("Changes should hot-reload / show up automatically in the web browser, but if you don't see your changes you can click reload.")])]),e._v(" "),o("h2",{attrs:{id:"_4-creating-a-pull-request"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-creating-a-pull-request"}},[e._v("#")]),e._v(" 4. Creating a pull request")]),e._v(" "),o("p",[e._v("When you're happy with your set of changes to one or multiple files, push them to Github and create a pull request.")]),e._v(" "),o("p",[e._v("You can do this from inside VS Code (go to the source-control panel on the left nav, and add/commit then push your files) , or from the command line:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" topics/*\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Description of my changes"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push\n")])])]),o("p",[e._v("You then go back to the Github website to create the pull request.")])])}),[],!1,null,null,null);t.default=s.exports}}]);