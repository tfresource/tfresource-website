(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{297:function(t,a,e){"use strict";e.r(a);var r=e(7),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("The following example was developed from the same original data used in NCHRP Report 765 that was first published by Savage (1997). The example in this section goes beyond what is contained in NCHRP Report 765 by using more years of data and including an optional Box-Cox transformation within the autoregression. This example was developed entirely within Excel using its Analysis ToolPak. This section illustrates the most sophisticated analysis that can be accomplished within these guidelines.")]),t._v(" "),e("h2",{attrs:{id:"data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" Data")]),t._v(" "),e("p",[t._v("Table 1 shows monthly ferry ridership counts over a six year period of time.")]),t._v(" "),e("p",[t._v("Table 1 Ferry Traffic Count Data (Savage, 1997)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Month")]),t._v(" "),e("th",[t._v("Year 1")]),t._v(" "),e("th",[t._v("Year 2")]),t._v(" "),e("th",[t._v("Year 3")]),t._v(" "),e("th",[t._v("Year 4")]),t._v(" "),e("th",[t._v("Year 5")]),t._v(" "),e("th",[t._v("Year 6")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("January")]),t._v(" "),e("td",[t._v("2593")]),t._v(" "),e("td",[t._v("2374")]),t._v(" "),e("td",[t._v("2469")]),t._v(" "),e("td",[t._v("2848")]),t._v(" "),e("td",[t._v("2465")]),t._v(" "),e("td",[t._v("3464")])]),t._v(" "),e("tr",[e("td",[t._v("February")]),t._v(" "),e("td",[t._v("2345")]),t._v(" "),e("td",[t._v("2474")]),t._v(" "),e("td",[t._v("2513")]),t._v(" "),e("td",[t._v("2502")]),t._v(" "),e("td",[t._v("2555")]),t._v(" "),e("td",[t._v("3095")])]),t._v(" "),e("tr",[e("td",[t._v("March")]),t._v(" "),e("td",[t._v("2948")]),t._v(" "),e("td",[t._v("2000")]),t._v(" "),e("td",[t._v("2546")]),t._v(" "),e("td",[t._v("2814")]),t._v(" "),e("td",[t._v("3446")]),t._v(" "),e("td",[t._v("4035")])]),t._v(" "),e("tr",[e("td",[t._v("April")]),t._v(" "),e("td",[t._v("4282")]),t._v(" "),e("td",[t._v("4387")]),t._v(" "),e("td",[t._v("4035")]),t._v(" "),e("td",[t._v("4350")]),t._v(" "),e("td",[t._v("4797")]),t._v(" "),e("td",[t._v("5295")])]),t._v(" "),e("tr",[e("td",[t._v("May")]),t._v(" "),e("td",[t._v("5744")]),t._v(" "),e("td",[t._v("5668")]),t._v(" "),e("td",[t._v("5612")]),t._v(" "),e("td",[t._v("5656")]),t._v(" "),e("td",[t._v("6059")]),t._v(" "),e("td",[t._v("6790")])]),t._v(" "),e("tr",[e("td",[t._v("June")]),t._v(" "),e("td",[t._v("7449")]),t._v(" "),e("td",[t._v("7441")]),t._v(" "),e("td",[t._v("7283")]),t._v(" "),e("td",[t._v("7623")]),t._v(" "),e("td",[t._v("8440")]),t._v(" "),e("td",[t._v("9286")])]),t._v(" "),e("tr",[e("td",[t._v("July")]),t._v(" "),e("td",[t._v("8706")]),t._v(" "),e("td",[t._v("8971")]),t._v(" "),e("td",[t._v("8659")]),t._v(" "),e("td",[t._v("9263")]),t._v(" "),e("td",[t._v("10819")]),t._v(" "),e("td",[t._v("11294")])]),t._v(" "),e("tr",[e("td",[t._v("August")]),t._v(" "),e("td",[t._v("9966")]),t._v(" "),e("td",[t._v("9588")]),t._v(" "),e("td",[t._v("8200")]),t._v(" "),e("td",[t._v("9949")]),t._v(" "),e("td",[t._v("11904")]),t._v(" "),e("td",[t._v("11672")])]),t._v(" "),e("tr",[e("td",[t._v("September")]),t._v(" "),e("td",[t._v("7982")]),t._v(" "),e("td",[t._v("7848")]),t._v(" "),e("td",[t._v("7713")]),t._v(" "),e("td",[t._v("7680")]),t._v(" "),e("td",[t._v("8949")]),t._v(" "),e("td",[t._v("9221")])]),t._v(" "),e("tr",[e("td",[t._v("October")]),t._v(" "),e("td",[t._v("5507")]),t._v(" "),e("td",[t._v("5703")]),t._v(" "),e("td",[t._v("6072")]),t._v(" "),e("td",[t._v("6147")]),t._v(" "),e("td",[t._v("6896")]),t._v(" "),e("td",[t._v("7000")])]),t._v(" "),e("tr",[e("td",[t._v("November")]),t._v(" "),e("td",[t._v("4744")]),t._v(" "),e("td",[t._v("4428")]),t._v(" "),e("td",[t._v("4095")]),t._v(" "),e("td",[t._v("4737")]),t._v(" "),e("td",[t._v("5322")]),t._v(" "),e("td",[t._v("5605")])]),t._v(" "),e("tr",[e("td",[t._v("December")]),t._v(" "),e("td",[t._v("3500")]),t._v(" "),e("td",[t._v("4673")]),t._v(" "),e("td",[t._v("4288")]),t._v(" "),e("td",[t._v("4665")]),t._v(" "),e("td",[t._v("5040")]),t._v(" "),e("td",[t._v("5241")])])])]),t._v(" "),e("p",[t._v("Visual observations of the time series would suggest that there is a yearly cycle to the data and that the variation within a year is growing slowly over time. These observations imply that an autoregressive model would need at least two lag terms and that there might be some advantage to a Box-Cox transformation.")]),t._v(" "),e("p",[e("img",{attrs:{src:"FerryData.jpg",alt:"",title:"FerryData.jpg"}})]),t._v(" "),e("h2",{attrs:{id:"transformations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transformations"}},[t._v("#")]),t._v(" Transformations")]),t._v(" "),e("p",[t._v("The count data series is divided into thirds (two full years in each), transformed, and checked for similarity of standard deviations. Table 2 shows the results of five different values of β (1.0, 0.8, 0.5, 0.3, 0.0). For example, the transformation for a value of β = 0.5 for the very first month (January of Year 1) is accomplished by this calculation:")]),t._v(" "),e("p"),e("p",[e("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[e("svg",{staticStyle:{"vertical-align":"-1.602ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24.608ex",height:"5.156ex",viewBox:"0 -1571 10876.7 2279"}},[e("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[e("g",{attrs:{"data-mml-node":"math"}},[e("g",{attrs:{"data-mml-node":"msubsup"}},[e("g",{attrs:{"data-mml-node":"TeXAtom"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("path",{attrs:{"data-c":"54",d:"M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"}})])]),e("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(778, 413) scale(0.707)"}}),e("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(584, -247) scale(0.707)"}},[e("g",{attrs:{"data-mml-node":"mn"}},[e("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}}),e("path",{attrs:{"data-c":"2E",d:"M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",transform:"translate(500, 0)"}}),e("path",{attrs:{"data-c":"35",d:"M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",transform:"translate(778, 0)"}})])])]),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(1537.7, 0)"}},[e("path",{attrs:{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}})]),e("g",{attrs:{"data-mml-node":"mfrac",transform:"translate(2593.5, 0)"}},[e("g",{attrs:{"data-mml-node":"mrow",transform:"translate(220, 707)"}},[e("g",{attrs:{"data-mml-node":"msubsup"}},[e("g",{attrs:{"data-mml-node":"TeXAtom"}},[e("g",{attrs:{"data-mml-node":"mn"}},[e("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}}),e("path",{attrs:{"data-c":"35",d:"M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",transform:"translate(500, 0)"}}),e("path",{attrs:{"data-c":"39",d:"M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z",transform:"translate(1000, 0)"}}),e("path",{attrs:{"data-c":"33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",transform:"translate(1500, 0)"}})])]),e("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(2000, 393.1) scale(0.707)"}},[e("g",{attrs:{"data-mml-node":"mn"}},[e("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}}),e("path",{attrs:{"data-c":"2E",d:"M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",transform:"translate(500, 0)"}}),e("path",{attrs:{"data-c":"35",d:"M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",transform:"translate(778, 0)"}})])]),e("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(2000, -247) scale(0.707)"}})]),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(2953.7, 0)"}},[e("path",{attrs:{"data-c":"2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}})]),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(3731.7, 0)"}},[e("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})])]),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(1696.8, -686)"}},[e("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}}),e("path",{attrs:{"data-c":"2E",d:"M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",transform:"translate(500, 0)"}}),e("path",{attrs:{"data-c":"35",d:"M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",transform:"translate(778, 0)"}})]),e("rect",{attrs:{width:"4431.7",height:"60",x:"120",y:"220"}})]),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(7542.9, 0)"}},[e("path",{attrs:{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}})]),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(8598.7, 0)"}},[e("path",{attrs:{"data-c":"39",d:"M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z"}}),e("path",{attrs:{"data-c":"39",d:"M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z",transform:"translate(500, 0)"}}),e("path",{attrs:{"data-c":"2E",d:"M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",transform:"translate(1000, 0)"}}),e("path",{attrs:{"data-c":"38",d:"M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",transform:"translate(1278, 0)"}}),e("path",{attrs:{"data-c":"34",d:"M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",transform:"translate(1778, 0)"}})])])])])])],1),e("p"),t._v(" "),e("p",[t._v("And the transformation for a value of β = 1 for this same month is:")]),t._v(" "),e("p"),e("p",[e("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[e("svg",{staticStyle:{"vertical-align":"-1.602ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23.979ex",height:"5.156ex",viewBox:"0 -1571 10598.7 2279"}},[e("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[e("g",{attrs:{"data-mml-node":"math"}},[e("g",{attrs:{"data-mml-node":"msubsup"}},[e("g",{attrs:{"data-mml-node":"TeXAtom"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("path",{attrs:{"data-c":"54",d:"M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"}})])]),e("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(778, 413) scale(0.707)"}}),e("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(584, -247) scale(0.707)"}},[e("g",{attrs:{"data-mml-node":"mn"}},[e("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),e("path",{attrs:{"data-c":"2E",d:"M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",transform:"translate(500, 0)"}}),e("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",transform:"translate(778, 0)"}})])])]),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(1537.7, 0)"}},[e("path",{attrs:{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}})]),e("g",{attrs:{"data-mml-node":"mfrac",transform:"translate(2593.5, 0)"}},[e("g",{attrs:{"data-mml-node":"mrow",transform:"translate(220, 707)"}},[e("g",{attrs:{"data-mml-node":"msubsup"}},[e("g",{attrs:{"data-mml-node":"TeXAtom"}},[e("g",{attrs:{"data-mml-node":"mn"}},[e("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}}),e("path",{attrs:{"data-c":"35",d:"M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",transform:"translate(500, 0)"}}),e("path",{attrs:{"data-c":"39",d:"M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z",transform:"translate(1000, 0)"}}),e("path",{attrs:{"data-c":"33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",transform:"translate(1500, 0)"}})])]),e("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(2000, 393.1) scale(0.707)"}},[e("g",{attrs:{"data-mml-node":"mn"}},[e("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),e("path",{attrs:{"data-c":"2E",d:"M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",transform:"translate(500, 0)"}}),e("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",transform:"translate(778, 0)"}})])]),e("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(2000, -247) scale(0.707)"}})]),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(2953.7, 0)"}},[e("path",{attrs:{"data-c":"2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}})]),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(3731.7, 0)"}},[e("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})])]),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(1696.8, -686)"}},[e("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),e("path",{attrs:{"data-c":"2E",d:"M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",transform:"translate(500, 0)"}}),e("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",transform:"translate(778, 0)"}})]),e("rect",{attrs:{width:"4431.7",height:"60",x:"120",y:"220"}})]),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(7542.9, 0)"}},[e("path",{attrs:{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}})]),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(8598.7, 0)"}},[e("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}}),e("path",{attrs:{"data-c":"35",d:"M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",transform:"translate(500, 0)"}}),e("path",{attrs:{"data-c":"39",d:"M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z",transform:"translate(1000, 0)"}}),e("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",transform:"translate(1500, 0)"}})])])])])])],1),e("p"),t._v(" "),e("p",[t._v("Notice that the standard deviations between values of β are quite different from each other, since the data series transformations are quite different from each other.")]),t._v(" "),e("p",[t._v("Table 2 Standard Deviations of the Count Data Series Transformations")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("β")]),t._v(" "),e("th",[t._v("1")]),t._v(" "),e("th",[t._v("0.8")]),t._v(" "),e("th",[t._v("0.5")]),t._v(" "),e("th",[t._v("0.3")]),t._v(" "),e("th",[t._v("0")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Early Third")]),t._v(" "),e("td",[t._v("2446")]),t._v(" "),e("td",[t._v("438.5")]),t._v(" "),e("td",[t._v("33.74")]),t._v(" "),e("td",[t._v("6.160")]),t._v(" "),e("td",[t._v("0.4874")])]),t._v(" "),e("tr",[e("td",[t._v("Middle Third")]),t._v(" "),e("td",[t._v("2306")]),t._v(" "),e("td",[t._v("413.0")]),t._v(" "),e("td",[t._v("31.66")]),t._v(" "),e("td",[t._v("5.755")]),t._v(" "),e("td",[t._v("0.4514")])]),t._v(" "),e("tr",[e("td",[t._v("Late Third")]),t._v(" "),e("td",[t._v("2896")]),t._v(" "),e("td",[t._v("497.5")]),t._v(" "),e("td",[t._v("35.91")]),t._v(" "),e("td",[t._v("6.284")]),t._v(" "),e("td",[t._v("0.4667")])])])]),t._v(" "),e("p",[t._v("The most consistent standard deviations occur with a value of β = 0.3, but none of the inconstancies are obviously bad to the point where they will distort the forecast. The use of a Box-Cox transformation could be bypassed for these data; however, a transformation with a value of β = 0.3 will be continued throughout this example in order to further illustrate the concept.")]),t._v(" "),e("h2",{attrs:{id:"analysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#analysis"}},[t._v("#")]),t._v(" Analysis")]),t._v(" "),e("p",[t._v("Table 3 lists the autocorrelations for the transformed counts at the first 14 lags. A single lag is a one month offset. The autocorrelations confirm what can be gleaned from graph of counts. The highest autocorrelation is with lag 12 (exactly one full year earlier) with fairly strong autocorrelations also at lags 11 and 13. There is a strong autocorrelation at lag 1, as is typical of count data, and there is another strong, but negative, autocorrelation at lag 6. The reasons for these autocorrelations seem fairly obvious. The graph does not suggest a need to do smoothing, so there are only a few possibilities for sets of independent variables in an AR model, such as:")]),t._v(" "),e("ul",[e("li",[t._v("AR(1) with a lag at 1;")]),t._v(" "),e("li",[t._v("AR(1) with a lag at 12;")]),t._v(" "),e("li",[t._v("AR(2) with lags at 1 and 12;")]),t._v(" "),e("li",[t._v("AR(3) with lags at 1, 12 and either 11 or 13;")]),t._v(" "),e("li",[t._v("AR(2) with lags at 1 and 6.")])]),t._v(" "),e("p",[t._v("Table 3 Autocorrelations of the Transformed Counts through the First 14 Lags")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Lag")]),t._v(" "),e("th",[t._v("Autocorrelation")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0.8379")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("0.4977")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("0.0443")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("-0.3923")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("-0.7383")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("-0.8789")])]),t._v(" "),e("tr",[e("td",[t._v("7")]),t._v(" "),e("td",[t._v("-0.7546")])]),t._v(" "),e("tr",[e("td",[t._v("8")]),t._v(" "),e("td",[t._v("-0.4006")])]),t._v(" "),e("tr",[e("td",[t._v("9")]),t._v(" "),e("td",[t._v("0.0347")])]),t._v(" "),e("tr",[e("td",[t._v("10")]),t._v(" "),e("td",[t._v("0.4905")])]),t._v(" "),e("tr",[e("td",[t._v("11")]),t._v(" "),e("td",[t._v("0.8225")])]),t._v(" "),e("tr",[e("td",[t._v("12")]),t._v(" "),e("td",[t._v("0.9759")])]),t._v(" "),e("tr",[e("td",[t._v("13")]),t._v(" "),e("td",[t._v("0.8314")])]),t._v(" "),e("tr",[e("td",[t._v("14")]),t._v(" "),e("td",[t._v("0.4853")])])])]),t._v(" "),e("p",[t._v("Using the lag at 6 might be OK empirically, but it has a dubious interpretation. It does not seem reasonable that high peaks in the summer should be a good indicator of low valleys in the winter or vice versa, since the natures of traffic at these times of year are likely quite different. It is much more reasonable to suggest that peaks indicate peaks and valleys indicate valleys. So the AR(2) model with lags at 1 and 6 is discarded on logical grounds.\nHere are the results of the remaining linear regressions: two AR(1) models an AR(2) model and an AR(3) model.")]),t._v(" "),e("p",[t._v("T"),e("sub",[t._v("n")]),t._v("=7.198+0.8259T"),e("sub",[t._v("n-1")])]),t._v(" "),e("p",[t._v("(Adjusted R-square = 0.697677)")]),t._v(" "),e("p",[t._v("T"),e("sub",[t._v("n")]),t._v("=1.205+0.9855T"),e("sub",[t._v("n-12")])]),t._v(" "),e("p",[t._v("(Adjusted R-square = 0.951588)")]),t._v(" "),e("p",[t._v("T"),e("sub",[t._v("n")]),t._v("=0.5443+0.09445T"),e("sub",[t._v("n-1")]),t._v("+0.9062T"),e("sub",[t._v("n-12")])]),t._v(" "),e("p",[t._v("(Adjusted R-square = 0.953712)")]),t._v(" "),e("p",[t._v("T"),e("sub",[t._v("n")]),t._v("=0.8479+0.27214T"),e("sub",[t._v("n-1")]),t._v("+0.9130T"),e("sub",[t._v("n-12")]),t._v("-0.1940T"),e("sub",[t._v("n-13")])]),t._v(" "),e("p",[t._v("(Adjusted R-square = 0.954200)")]),t._v(" "),e("p",[t._v("All the lag terms are statistically significant except for the lag at 13 in the AR(3) model. Not only is that term insignificant, but it also has the wrong sign. Thus, the AR(3) model can be discarded. The AR(1) model with a lag of 1 has inferior goodness-of-fit as indicated by the R-square, so it can be discarded, too. Lastly, the AR(2) model with lags at 1 and 12 has a slightly superior R-square to the AR(1) model with a lag at 12, only.\nThe AR(2) model (with lags at 1 and 12) will be selected for forecasting. Figure 2 shows the output from Excel’s regression tool. The t-statistics shows that the lag at 1 is significant at the 90% confidence level, but the lag at 12 is significant well beyond the 95% level. The model is judged to be suitable for short-range forecasting.")]),t._v(" "),e("p",[e("img",{attrs:{src:"AutoregressionExampleDetails.jpg",alt:"",title:"AutoregressionExampleDetails.jpg"}})]),t._v(" "),e("p",[t._v("Figure 2 Output from Excel’s Regression Tool for an AR(2) Model of Ferry Traffic with Lags at 1 and 12")]),t._v(" "),e("p",[t._v("Determining the standard error first requires finding the residuals in the original units, vehicles. This requires estimating the whole time series, as transformed, then inversing the transformation for those estimates for all periods with data. For example, the forecast for the last (most recent) month, December of Year 6, is 40.383, which is:")]),t._v(" "),e("p",[t._v("T=(1+0.3T"),e("sub",[t._v("0.3")]),t._v(" )^1⁄0.3^=(1+0.3*40.383)^1⁄0.3^=5320 vehicles")]),t._v(" "),e("p",[t._v("The traffic count for that same month was 5241 vehicles, so the residual is (5241-5320) = 79 vehicles. The population standard deviation of all the residuals is 554 vehicles, which is very close to the standard error of the estimate of 569 vehicles. A spot check of the all residuals indicates that the model is doing a good job at matching the cyclic pattern in the data and that the model is not biased with respect to time.")]),t._v(" "),e("p",[t._v("Just as a validity check, a similar AR(2) model can be easily estimated on the original, untransformed, data. The estimated equation is:")]),t._v(" "),e("p",[t._v("T"),e("sub",[t._v("n")]),t._v("=67.01+0.09360T"),e("sub",[t._v("n-1")]),t._v("+0.9384T"),e("sub",[t._v("n-12")])]),t._v(" "),e("p",[t._v("(Adjusted R-square = 0.954543)")]),t._v(" "),e("p",[t._v("with a standard error of the estimate of 569 vehicles, obtained directly from the output of the regression analysis. The transformed and untransformed AR(2) models are nearly identical, except for the constant term.")]),t._v(" "),e("p",[t._v("In order to forecast with the transformed AR(2) model, it is necessary to forecast all time periods beyond the end of the data until the forecast period is reached. So, for example, if a forecast is desired for December of Year 8, there is also a need for forecasts for November of Year 8 and December of Year 7. Similar logic applies to all earlier time periods. The earliest forecasted time periods can use some real data for independent variables, but eventually all independent variables are forecasts, themselves.")]),t._v(" "),e("p",[t._v("Table 4 shows all the transformed data necessary to forecast December of Year 8. The columns for Year 7 and Year 8 are all forecasts. There is no need for any real data prior to Year 6, because the largest lag is 12 months.")]),t._v(" "),e("p",[t._v("Table 4 Transformed Data for Year 6 and Transformed Forecasts for Years 7 and 8")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Month")]),t._v(" "),e("th",[t._v("Year 6")]),t._v(" "),e("th",[t._v("Year 7")]),t._v(" "),e("th",[t._v("Year 8")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("January")]),t._v(" "),e("td",[t._v("35.1039")]),t._v(" "),e("td",[t._v("36.1525")]),t._v(" "),e("td",[t._v("37.1732")])]),t._v(" "),e("tr",[e("td",[t._v("February")]),t._v(" "),e("td",[t._v("33.8268")]),t._v(" "),e("td",[t._v("34.6139")]),t._v(" "),e("td",[t._v("35.4237")])]),t._v(" "),e("tr",[e("td",[t._v("March")]),t._v(" "),e("td",[t._v("36.9042")]),t._v(" "),e("td",[t._v("37.2576")]),t._v(" "),e("td",[t._v("37.6542")])]),t._v(" "),e("tr",[e("td",[t._v("April")]),t._v(" "),e("td",[t._v("40.3221")]),t._v(" "),e("td",[t._v("40.6047")]),t._v(" "),e("td",[t._v("40.8982")])]),t._v(" "),e("tr",[e("td",[t._v("May")]),t._v(" "),e("td",[t._v("43.7037")]),t._v(" "),e("td",[t._v("43.9853")]),t._v(" "),e("td",[t._v("44.2682")])]),t._v(" "),e("tr",[e("td",[t._v("June")]),t._v(" "),e("td",[t._v("48.3353")]),t._v(" "),e("td",[t._v("48.5020")]),t._v(" "),e("td",[t._v("48.6797")])]),t._v(" "),e("tr",[e("td",[t._v("Jul")]),t._v(" "),e("td",[t._v("51.4607")]),t._v(" "),e("td",[t._v("51.7609")]),t._v(" "),e("td",[t._v("52.0497")])]),t._v(" "),e("tr",[e("td",[t._v("August")]),t._v(" "),e("td",[t._v("52.0045")]),t._v(" "),e("td",[t._v("52.5615")]),t._v(" "),e("td",[t._v("53.0936")])]),t._v(" "),e("tr",[e("td",[t._v("September")]),t._v(" "),e("td",[t._v("48.2266")]),t._v(" "),e("td",[t._v("49.2134")]),t._v(" "),e("td",[t._v("50.1580")])]),t._v(" "),e("tr",[e("td",[t._v("October")]),t._v(" "),e("td",[t._v("44.1355")]),t._v(" "),e("td",[t._v("45.1897")]),t._v(" "),e("td",[t._v("46.2342")])]),t._v(" "),e("tr",[e("td",[t._v("November")]),t._v(" "),e("td",[t._v("41.0737")]),t._v(" "),e("td",[t._v("42.0349")]),t._v(" "),e("td",[t._v("43.0047")])]),t._v(" "),e("tr",[e("td",[t._v("December")]),t._v(" "),e("td",[t._v("40.1881")]),t._v(" "),e("td",[t._v("40.9344")]),t._v(" "),e("td",[t._v("41.7023")])])])]),t._v(" "),e("p",[t._v("The forecast for December of Year 8 was accomplished by this calculation:")]),t._v(" "),e("p",[t._v("T"),e("sub",[t._v("n")]),t._v("=0.5443+0.09445*43.0047+0.9062*40.9344=41.7023")]),t._v(" "),e("p",[t._v("And applying an inverse transformation to this transformed forecast gives a result of 5874 vehicles. The 50% confidence interval for this forecast is:")]),t._v(" "),e("p",[t._v("E"),e("sub",[t._v("50")]),t._v("=±0.6745*569=±384")]),t._v(" "),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")])])}),[],!1,null,null,null);a.default=s.exports}}]);