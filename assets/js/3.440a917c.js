(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{171:function(t,s,i){},197:function(t,s,i){"use strict";i(171)},206:function(t,s,i){"use strict";i.r(s);var n={data:()=>({acronyms:[],terms:{}}),mounted:async function(){console.log("reading acronyms");const t=await fetch("/acronyms.csv"),s=await t.text();for(const t of s.split("\n").slice(1)){const[s,i,n]=t.split(",");console.log(s,i,n),s&&(this.acronyms.push(s.trim()),this.terms[s.trim()]={definition:i.trim(),link:n?n.trim():""})}this.acronyms.sort()}},e=(i(197),i(7)),a=Object(e.a)(n,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"main-content"},t._l(t.acronyms,(function(s){return i("div",{key:s+t.terms[s].definition,staticClass:"topics"},[i("div",{staticClass:"title"},[i("h3",[t._v(t._s(s))])]),i("div",{staticClass:"details"},[i("p",[t._v(t._s(t.terms[s].definition))]),t.terms[s].link?i("p",[t.terms[s].link.startsWith("http")?i("a",{staticClass:"link-text",attrs:{target:"_blank",href:t.terms[s].link}},[t._v(t._s(t.terms[s].link))]):i("router-link",{staticClass:"link-text",attrs:{to:t.terms[s].link}},[t._v(t._s(t.terms[s].link))])],1):t._e()])])})),0)}),[],!1,null,"2b474d6d",null);s.default=a.exports}}]);