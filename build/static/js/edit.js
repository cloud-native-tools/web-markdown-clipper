!function(){"use strict";function e(e,n){return Array(n+1).join(e)}var n=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function t(e){return a(e,n)}var r=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function i(e){return a(e,r)}var o=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function a(e,n){return n.indexOf(e.nodeName)>=0}function l(e,n){return e.getElementsByTagName&&n.some((function(n){return e.getElementsByTagName(n).length}))}var u={};function c(e){return e?e.replace(/(\n+\s*)+/g,"\n"):""}function s(e){for(var n in this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[],e.rules)this.array.push(e.rules[n])}function f(e,n,t){for(var r=0;r<e.length;r++){var i=e[r];if(d(i,n,t))return i}}function d(e,n,t){var r=e.filter;if("string"===typeof r){if(r===n.nodeName.toLowerCase())return!0}else if(Array.isArray(r)){if(r.indexOf(n.nodeName.toLowerCase())>-1)return!0}else{if("function"!==typeof r)throw new TypeError("`filter` needs to be a string, array, or function");if(r.call(e,n,t))return!0}}function p(e){var n=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),n}function g(e,n,t){return e&&e.parentNode===n||t(n)?n.nextSibling||n.parentNode:n.firstChild||n.nextSibling||n.parentNode}u.paragraph={filter:"p",replacement:function(e){return"\n\n"+e+"\n\n"}},u.lineBreak={filter:"br",replacement:function(e,n,t){return t.br+"\n"}},u.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(n,t,r){var i=Number(t.nodeName.charAt(1));return"setext"===r.headingStyle&&i<3?"\n\n"+n+"\n"+e(1===i?"=":"-",n.length)+"\n\n":"\n\n"+e("#",i)+" "+n+"\n\n"}},u.blockquote={filter:"blockquote",replacement:function(e){return"\n\n"+(e=(e=e.replace(/^\n+|\n+$/g,"")).replace(/^/gm,"> "))+"\n\n"}},u.list={filter:["ul","ol"],replacement:function(e,n){var t=n.parentNode;return"LI"===t.nodeName&&t.lastElementChild===n?"\n"+e:"\n\n"+e+"\n\n"}},u.listItem={filter:"li",replacement:function(e,n,t){e=e.replace(/^\n+/,"").replace(/\n+$/,"\n").replace(/\n/gm,"\n    ");var r=t.bulletListMarker+"   ",i=n.parentNode;if("OL"===i.nodeName){var o=i.getAttribute("start"),a=Array.prototype.indexOf.call(i.children,n);r=(o?Number(o)+a:a+1)+".  "}return r+e+(n.nextSibling&&!/\n$/.test(e)?"\n":"")}},u.indentedCodeBlock={filter:function(e,n){return"indented"===n.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,n,t){return"\n\n    "+n.firstChild.textContent.replace(/\n/g,"\n    ")+"\n\n"}},u.fencedCodeBlock={filter:function(e,n){return"fenced"===n.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(n,t,r){for(var i,o=((t.firstChild.getAttribute("class")||"").match(/language-(\S+)/)||[null,""])[1],a=t.firstChild.textContent,l=r.fence.charAt(0),u=3,c=new RegExp("^"+l+"{3,}","gm");i=c.exec(a);)i[0].length>=u&&(u=i[0].length+1);var s=e(l,u);return"\n\n"+s+o+"\n"+a.replace(/\n$/,"")+"\n"+s+"\n\n"}},u.horizontalRule={filter:"hr",replacement:function(e,n,t){return"\n\n"+t.hr+"\n\n"}},u.inlineLink={filter:function(e,n){return"inlined"===n.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,n){var t=n.getAttribute("href"),r=c(n.getAttribute("title"));return r&&(r=' "'+r+'"'),"["+e+"]("+t+r+")"}},u.referenceLink={filter:function(e,n){return"referenced"===n.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,n,t){var r,i,o=n.getAttribute("href"),a=c(n.getAttribute("title"));switch(a&&(a=' "'+a+'"'),t.linkReferenceStyle){case"collapsed":r="["+e+"][]",i="["+e+"]: "+o+a;break;case"shortcut":r="["+e+"]",i="["+e+"]: "+o+a;break;default:var l=this.references.length+1;r="["+e+"]["+l+"]",i="["+l+"]: "+o+a}return this.references.push(i),r},references:[],append:function(e){var n="";return this.references.length&&(n="\n\n"+this.references.join("\n")+"\n\n",this.references=[]),n}},u.emphasis={filter:["em","i"],replacement:function(e,n,t){return e.trim()?t.emDelimiter+e+t.emDelimiter:""}},u.strong={filter:["strong","b"],replacement:function(e,n,t){return e.trim()?t.strongDelimiter+e+t.strongDelimiter:""}},u.code={filter:function(e){var n=e.previousSibling||e.nextSibling,t="PRE"===e.parentNode.nodeName&&!n;return"CODE"===e.nodeName&&!t},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var n=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",t="`",r=e.match(/`+/gm)||[];-1!==r.indexOf(t);)t+="`";return t+n+e+n+t}},u.image={filter:"img",replacement:function(e,n){var t=c(n.getAttribute("alt")),r=n.getAttribute("src")||"",i=c(n.getAttribute("title"));return r?"!["+t+"]("+r+(i?' "'+i+'"':"")+")":""}},s.prototype={add:function(e,n){this.array.unshift(n)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){return e.isBlank?this.blankRule:(n=f(this.array,e,this.options))||(n=f(this._keep,e,this.options))||(n=f(this._remove,e,this.options))?n:this.defaultRule;var n},forEach:function(e){for(var n=0;n<this.array.length;n++)e(this.array[n],n)}};var h="undefined"!==typeof window?window:{};var m,v=function(){var e=h.DOMParser,n=!1;try{(new e).parseFromString("","text/html")&&(n=!0)}catch(t){}return n}()?h.DOMParser:function(){var e=function(){};return!function(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch(n){window.ActiveXObject&&(e=!0)}return e}()?e.prototype.parseFromString=function(e){var n=document.implementation.createHTMLDocument("");return n.open(),n.write(e),n.close(),n}:e.prototype.parseFromString=function(e){var n=new window.ActiveXObject("htmlfile");return n.designMode="on",n.open(),n.write(e),n.close(),n},e}();function A(e,n){var r;"string"===typeof e?r=(m=m||new v).parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html").getElementById("turndown-root"):r=e.cloneNode(!0);return function(e){var n=e.element,t=e.isBlock,r=e.isVoid,i=e.isPre||function(e){return"PRE"===e.nodeName};if(n.firstChild&&!i(n)){for(var o=null,a=!1,l=null,u=g(l,n,i);u!==n;){if(3===u.nodeType||4===u.nodeType){var c=u.data.replace(/[ \r\n\t]+/g," ");if(o&&!/ $/.test(o.data)||a||" "!==c[0]||(c=c.substr(1)),!c){u=p(u);continue}u.data=c,o=u}else{if(1!==u.nodeType){u=p(u);continue}t(u)||"BR"===u.nodeName?(o&&(o.data=o.data.replace(/ $/,"")),o=null,a=!1):r(u)||i(u)?(o=null,a=!0):o&&(a=!1)}var s=g(l,u,i);l=u,u=s}o&&(o.data=o.data.replace(/ $/,""),o.data||p(o))}}({element:r,isBlock:t,isVoid:i,isPre:n.preformattedCode?y:null}),r}function y(e){return"PRE"===e.nodeName||"CODE"===e.nodeName}function E(e,n){return e.isBlock=t(e),e.isCode="CODE"===e.nodeName||e.parentNode.isCode,e.isBlank=function(e){return!i(e)&&!function(e){return a(e,o)}(e)&&/^\s*$/i.test(e.textContent)&&!function(e){return l(e,r)}(e)&&!function(e){return l(e,o)}(e)}(e),e.flankingWhitespace=function(e,n){if(e.isBlock||n.preformattedCode&&e.isCode)return{leading:"",trailing:""};var t=function(e){var n=e.match(/^(([ \t\r\n]*)(\s*))[\s\S]*?((\s*?)([ \t\r\n]*))$/);return{leading:n[1],leadingAscii:n[2],leadingNonAscii:n[3],trailing:n[4],trailingNonAscii:n[5],trailingAscii:n[6]}}(e.textContent);t.leadingAscii&&N("left",e,n)&&(t.leading=t.leadingNonAscii);t.trailingAscii&&N("right",e,n)&&(t.trailing=t.trailingNonAscii);return{leading:t.leading,trailing:t.trailing}}(e,n),e}function N(e,n,r){var i,o,a;return"left"===e?(i=n.previousSibling,o=/ $/):(i=n.nextSibling,o=/^ /),i&&(3===i.nodeType?a=o.test(i.nodeValue):r.preformattedCode&&"CODE"===i.nodeName?a=!1:1!==i.nodeType||t(i)||(a=o.test(i.textContent))),a}var T=Array.prototype.reduce,C=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function R(e){if(!(this instanceof R))return new R(e);var n={rules:u,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(e,n){return n.isBlock?"\n\n":""},keepReplacement:function(e,n){return n.isBlock?"\n\n"+n.outerHTML+"\n\n":n.outerHTML},defaultReplacement:function(e,n){return n.isBlock?"\n\n"+e+"\n\n":e}};this.options=function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}return e}({},n,e),this.rules=new s(this.options)}function k(e){var n=this;return T.call(e.childNodes,(function(e,t){var r="";return 3===(t=new E(t,n.options)).nodeType?r=t.isCode?t.nodeValue:n.escape(t.nodeValue):1===t.nodeType&&(r=D.call(n,t)),O(e,r)}),"")}function b(e){var n=this;return this.rules.forEach((function(t){"function"===typeof t.append&&(e=O(e,t.append(n.options)))})),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function D(e){var n=this.rules.forNode(e),t=k.call(this,e),r=e.flankingWhitespace;return(r.leading||r.trailing)&&(t=t.trim()),r.leading+n.replacement(t,e,this.options)+r.trailing}function O(e,n){var t=function(e){for(var n=e.length;n>0&&"\n"===e[n-1];)n--;return e.substring(0,n)}(e),r=n.replace(/^\n*/,""),i=Math.max(e.length-t.length,n.length-r.length);return t+"\n\n".substring(0,i)+r}R.prototype={turndown:function(e){if(!function(e){return null!=e&&("string"===typeof e||e.nodeType&&(1===e.nodeType||9===e.nodeType||11===e.nodeType))}(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(""===e)return"";var n=k.call(this,new A(e,this.options));return b.call(this,n)},use:function(e){if(Array.isArray(e))for(var n=0;n<e.length;n++)this.use(e[n]);else{if("function"!==typeof e)throw new TypeError("plugin must be a Function or an Array of Functions");e(this)}return this},addRule:function(e,n){return this.rules.add(e,n),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return C.reduce((function(e,n){return e.replace(n[0],n[1])}),e)}};var w=new R,S=function(){var e=B(),n=w.turndown(e),t=new Date;return{created:"".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDate()," ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds()),source:document.baseURI,title:document.title,markdown:"[".concat(document.title,"](").concat(document.baseURI,")\n\n").concat(n)}},B=function(){var e=window.getSelection();if(e&&e.rangeCount>0){for(var n=[],t=0;t<e.rangeCount;t++){var r=e.getRangeAt(0).cloneContents(),i=document.createElement("div");i.appendChild(r),n.push(i.innerHTML)}return n.join("")}return""};console.log("edit script loaded");var I=S();chrome.runtime.sendMessage({clip:I})}();