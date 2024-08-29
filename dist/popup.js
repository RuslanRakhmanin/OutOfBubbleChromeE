(()=>{"use strict";var A={698:(A,n,e)=>{e.d(n,{A:()=>a});var t=e(354),o=e.n(t),r=e(314),i=e.n(r)()(o());i.push([A.id,"/*\n! tailwindcss v3.4.9 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.invisible {\n  visibility: hidden;\n}\n.relative {\n  position: relative;\n}\n.m-1\\.5 {\n  margin: 0.375rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.block {\n  display: block;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.h-8 {\n  height: 2rem;\n}\n.w-16 {\n  width: 4rem;\n}\n.w-96 {\n  width: 24rem;\n}\n.w-\\[240px\\] {\n  width: 240px;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.items-center {\n  align-items: center;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.border-t-2 {\n  border-top-width: 2px;\n}\n.border-green-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(34 197 94 / var(--tw-border-opacity));\n}\n.border-orange-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(249 115 22 / var(--tw-border-opacity));\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-extrabold {\n  font-weight: 800;\n}\n.text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n.text-orange-500 {\n  --tw-text-opacity: 1;\n  color: rgb(249 115 22 / var(--tw-text-opacity));\n}\n.my-input {\n  margin: 0.375rem;\n  display: block;\n  border-radius: 0.5rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n  padding: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n.my-input:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\n}\n.my-center {\n  display: inline-flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.options-button-link {\n  margin: 0.375rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(129 140 248 / var(--tw-text-opacity));\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  transition-timing-function: linear;\n}\n.options-button-link:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.blue-button {\n  background-color: #6275f0; /* Button background color */\n  color: white; /* Text color */\n  border: none; /* Removes border */\n  border-radius: 4px; /* Rounded corners */\n  padding: 4px 8px; /* Space inside the button */\n  font-size: 12px; /* Font size */\n  cursor: pointer; /* Changes cursor to pointer when hovering */\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */\n  transition: background-color 0.3s ease; /* Smooth transition for hover */\n  width: 180px; /* Fixed width */\n}\n.blue-button:hover {\n  background-color: #4e5dc1; /* Darker shade for hover effect */\n}\n.after\\:absolute::after {\n  content: var(--tw-content);\n  position: absolute;\n}\n.after\\:start-\\[4px\\]::after {\n  content: var(--tw-content);\n  inset-inline-start: 4px;\n}\n.after\\:top-0\\.5::after {\n  content: var(--tw-content);\n  top: 0.125rem;\n}\n.after\\:h-7::after {\n  content: var(--tw-content);\n  height: 1.75rem;\n}\n.after\\:w-7::after {\n  content: var(--tw-content);\n  width: 1.75rem;\n}\n.after\\:rounded-full::after {\n  content: var(--tw-content);\n  border-radius: 9999px;\n}\n.after\\:border::after {\n  content: var(--tw-content);\n  border-width: 1px;\n}\n.after\\:border-gray-300::after {\n  content: var(--tw-content);\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.after\\:bg-white::after {\n  content: var(--tw-content);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.after\\:transition-all::after {\n  content: var(--tw-content);\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.after\\:content-\\[\\'\\'\\]::after {\n  --tw-content: '';\n  content: var(--tw-content);\n}\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n.peer:checked ~ .peer-checked\\:bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n.peer:checked ~ .peer-checked\\:after\\:translate-x-full::after {\n  content: var(--tw-content);\n  --tw-translate-x: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.peer:checked ~ .peer-checked\\:after\\:border-white::after {\n  content: var(--tw-content);\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.peer:focus ~ .peer-focus\\:outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.peer:focus ~ .peer-focus\\:ring-4 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.peer:focus ~ .peer-focus\\:ring-blue-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\n}\n.peer:checked ~ .rtl\\:peer-checked\\:after\\:-translate-x-full:where([dir=\"rtl\"], [dir=\"rtl\"] *)::after {\n  content: var(--tw-content);\n  --tw-translate-x: -100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}","",{version:3,sources:["webpack://./src/common.css","webpack://./src/popup.css"],names:[],mappings:"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",sourcesContent:["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n.my-input {\n    @apply block m-1.5 p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500;\n}\n",'@import "./common.css";\n\n.my-center {\n  @apply w-full inline-flex items-center justify-center;\n}\n\n.options-button-link {\n  @apply text-indigo-400 m-1.5 px-3 py-1 text-xs outline-none focus:outline-none ease-linear transition-all duration-150;\n}\n\n.blue-button {\n  background-color: #6275f0; /* Button background color */\n  color: white; /* Text color */\n  border: none; /* Removes border */\n  border-radius: 4px; /* Rounded corners */\n  padding: 4px 8px; /* Space inside the button */\n  font-size: 12px; /* Font size */\n  cursor: pointer; /* Changes cursor to pointer when hovering */\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */\n  transition: background-color 0.3s ease; /* Smooth transition for hover */\n  width: 180px; /* Fixed width */\n}\n\n.blue-button:hover {\n  background-color: #4e5dc1; /* Darker shade for hover effect */\n}'],sourceRoot:""}]);const a=i},314:A=>{A.exports=function(A){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=A(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(A,e,t,o,r){"string"==typeof A&&(A=[[null,A,void 0]]);var i={};if(t)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var d=0;d<A.length;d++){var s=[].concat(A[d]);t&&i[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},354:A=>{A.exports=function(A){var n=A[1],e=A[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),r="/*# ".concat(o," */");return[n].concat([r]).join("\n")}return[n].join("\n")}},745:(A,n,e)=>{e.r(n),e.d(n,{default:()=>h});var t=e(72),o=e.n(t),r=e(825),i=e.n(r),a=e(659),c=e.n(a),d=e(56),s=e.n(d),l=e(540),p=e.n(l),u=e(113),E=e.n(u),m=e(698),B={};B.styleTagTransform=E(),B.setAttributes=s(),B.insert=c().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=p(),o()(m.A,B);const h=m.A&&m.A.locals?m.A.locals:void 0},72:A=>{var n=[];function e(A){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===A){e=t;break}return e}function t(A,t){for(var r={},i=[],a=0;a<A.length;a++){var c=A[a],d=t.base?c[0]+t.base:c[0],s=r[d]||0,l="".concat(d," ").concat(s);r[d]=s+1;var p=e(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var E=o(u,t);t.byIndex=a,n.splice(a,0,{identifier:l,updater:E,references:1})}i.push(l)}return i}function o(A,n){var e=n.domAPI(n);return e.update(A),function(n){if(n){if(n.css===A.css&&n.media===A.media&&n.sourceMap===A.sourceMap&&n.supports===A.supports&&n.layer===A.layer)return;e.update(A=n)}else e.remove()}}A.exports=function(A,o){var r=t(A=A||[],o=o||{});return function(A){A=A||[];for(var i=0;i<r.length;i++){var a=e(r[i]);n[a].references--}for(var c=t(A,o),d=0;d<r.length;d++){var s=e(r[d]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=c}}},659:A=>{var n={};A.exports=function(A,e){var t=function(A){if(void 0===n[A]){var e=document.querySelector(A);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(A){e=null}n[A]=e}return n[A]}(A);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:A=>{A.exports=function(A){var n=document.createElement("style");return A.setAttributes(n,A.attributes),A.insert(n,A.options),n}},56:(A,n,e)=>{A.exports=function(A){var n=e.nc;n&&A.setAttribute("nonce",n)}},825:A=>{A.exports=function(A){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=A.insertStyleElement(A);return{update:function(e){!function(A,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(t,A,n.options)}(n,A,e)},remove:function(){!function(A){if(null===A.parentNode)return!1;A.parentNode.removeChild(A)}(n)}}}},113:A=>{A.exports=function(A,n){if(n.styleSheet)n.styleSheet.cssText=A;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(A))}}},799:(A,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.articleOnPortalURL=n.maxRank=void 0,n.setBadgeText=function(A=""){chrome.action.setBadgeText({text:A})},n.setBadgeIcon=function(A=""){chrome.action.setIcon({path:{128:"icon128.png"}})},n.getScoreFromProperties=function(A,n){var e;return null===(e=A.scales.find((A=>A.name===n)))||void 0===e?void 0:e.score},n.maxRank=5,n.articleOnPortalURL="https://aye-aye-69885.web.app/article/"}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var r=n[t]={id:t,exports:{}};return A[t](r,r.exports,e),r.exports}e.n=A=>{var n=A&&A.__esModule?()=>A.default:()=>A;return e.d(n,{a:n}),n},e.d=(A,n)=>{for(var t in n)e.o(n,t)&&!e.o(A,t)&&Object.defineProperty(A,t,{enumerable:!0,get:n[t]})},e.o=(A,n)=>Object.prototype.hasOwnProperty.call(A,n),e.r=A=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},e.nc=void 0,(()=>{const A=e(799);e(745);const n=document.getElementById("sources"),t=document.getElementById("tactics"),o=document.getElementById("summary");let r;function i(){chrome.storage.sync.get(null,(A=>{var e,r,i,a,c,d;const s=A,l=(null===(e=s.showOtherSources)||void 0===e||e)&&(null===(r=s.enabled)||void 0===r||r);n.style.display=l?"block":"none";const p=(null===(i=s.showPsychologicalTactics)||void 0===i||i)&&(null===(a=s.enabled)||void 0===a||a);t.style.display=p?"block":"none";const u=(null===(c=s.showSummary)||void 0===c||c)&&(null===(d=s.enabled)||void 0===d||d);o.style.display=u?"block":"none"}))}function a(){chrome.runtime.sendMessage({type:"getPropertiesCurrentTab"}).then((A=>{if(null==A)return n.style.display="none",t.style.display="none",void(o.style.display="none");r=A,function(A){if("block"===n.style.display){const e=n.querySelector("h4"),t=n.querySelector("hr");for(;n.firstChild;)n.removeChild(n.firstChild);e&&n.appendChild(e),A.related.forEach((A=>{const e=document.createElement("a");e.href=A.link,e.textContent="➤ "+A.publisher,e.className="block text-blue-600 hover:underline";const t=document.createElement("br");e.addEventListener("click",(n=>{n.preventDefault(),chrome.tabs.create({url:A.link})})),n.appendChild(e),n.appendChild(t)})),t&&n.appendChild(t)}}(r),function(A){if("block"===t.style.display){const n=t.querySelector("h4"),e=t.querySelector("hr");for(;t.firstChild;)t.removeChild(t.firstChild);n&&t.appendChild(n),A.tactics.forEach((A=>{const n=document.createElement("span");n.className="text-orange-500 mr-2",n.textContent="➤";const e=document.createElement("span");e.textContent=A.name;const o=document.createElement("br");t.appendChild(n),t.appendChild(e),t.appendChild(o)})),e&&t.appendChild(e)}}(r),function(A){if("block"===o.style.display){const n=o.querySelector("h4"),e=o.querySelector("hr");for(;o.firstChild;)o.removeChild(o.firstChild);n&&o.appendChild(n);const t=document.createElement("span");t.className="text-green-500 mr-2";const r=document.createElement("span");r.textContent=A.summary;const i=document.createElement("br");o.appendChild(t),o.appendChild(r),o.appendChild(i),e&&o.appendChild(e)}}(r)})).catch((A=>{console.warn("Popup could not send message",A)}))}i(),a();const c=document.querySelector("#go-to-options");c&&c.addEventListener("click",(function(){chrome.runtime.openOptionsPage?chrome.runtime.openOptionsPage().catch((A=>{console.error("Could not open options page",A)})):window.open(chrome.runtime.getURL("options.html"))}));const d=document.querySelector("#go-to-website");d&&d.addEventListener("click",(function(){window.open(A.articleOnPortalURL+r.id)}));const s=document.querySelector("#send-link");s?s.addEventListener("click",(function(){chrome.runtime.sendMessage({type:"sendCurrentURL2Server"}).then((A=>{})).catch((A=>{console.warn("Popup could not send message",A)})),i(),a()})):console.error("Could not find send link element");const l=document.querySelector("#send-text");l?l.addEventListener("click",(function(){chrome.runtime.sendMessage({type:"sendSelectedText2Server"}).then((A=>{})).catch((A=>{console.warn("Popup could not send message",A)})),i(),a()})):console.error("Could not find send text element")})()})();
//# sourceMappingURL=popup.js.map