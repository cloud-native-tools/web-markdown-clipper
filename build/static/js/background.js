/*! For license information please see background.js.LICENSE.txt */
!function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}function n(){n=function(){return t};var t={},r=Object.prototype,i=r.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(C){s=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),c=new x(r||[]);return o(a,"_invoke",{value:A(e,n,c)}),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=f;var d={};function p(){}function m(){}function g(){}var v={};s(v,c,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(L([])));w&&w!==r&&i.call(w,c)&&(v=w);var b=g.prototype=p.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function N(t,n){function r(o,a,c,u){var l=h(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==e(f)&&i.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,c,u)}),(function(e){r("throw",e,c,u)})):n.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,u)}))}u(l.arg)}var a;o(this,"_invoke",{value:function(e,t){function i(){return new n((function(n,i){r(e,t,n,i)}))}return a=a?a.then(i,i):i()}})}function A(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return S()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=T(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function T(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,T(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=h(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,d;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=g,o(b,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=s(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,l,"GeneratorFunction")),e.prototype=Object.create(b),e},t.awrap=function(e){return{__await:e}},E(N.prototype),s(N.prototype,u,(function(){return this})),t.AsyncIterator=N,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new N(f(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(b),s(b,l,"Generator"),s(b,c,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function r(e,t,n,r,i,o,a){try{var c=e[o](a),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,i)}function i(e,t){return Array(t+1).join(e)}var o=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function a(e){return s(e,o)}var c=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function u(e){return s(e,c)}var l=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function s(e,t){return t.indexOf(e.nodeName)>=0}function f(e,t){return e.getElementsByTagName&&t.some((function(t){return e.getElementsByTagName(t).length}))}var h={};function d(e){return e?e.replace(/(\n+\s*)+/g,"\n"):""}function p(e){for(var t in this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[],e.rules)this.array.push(e.rules[t])}function m(e,t,n){for(var r=0;r<e.length;r++){var i=e[r];if(g(i,t,n))return i}}function g(e,t,n){var r=e.filter;if("string"===typeof r){if(r===t.nodeName.toLowerCase())return!0}else if(Array.isArray(r)){if(r.indexOf(t.nodeName.toLowerCase())>-1)return!0}else{if("function"!==typeof r)throw new TypeError("`filter` needs to be a string, array, or function");if(r.call(e,t,n))return!0}}function v(e){var t=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),t}function y(e,t,n){return e&&e.parentNode===t||n(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}h.paragraph={filter:"p",replacement:function(e){return"\n\n"+e+"\n\n"}},h.lineBreak={filter:"br",replacement:function(e,t,n){return n.br+"\n"}},h.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,t,n){var r=Number(t.nodeName.charAt(1));return"setext"===n.headingStyle&&r<3?"\n\n"+e+"\n"+i(1===r?"=":"-",e.length)+"\n\n":"\n\n"+i("#",r)+" "+e+"\n\n"}},h.blockquote={filter:"blockquote",replacement:function(e){return"\n\n"+(e=(e=e.replace(/^\n+|\n+$/g,"")).replace(/^/gm,"> "))+"\n\n"}},h.list={filter:["ul","ol"],replacement:function(e,t){var n=t.parentNode;return"LI"===n.nodeName&&n.lastElementChild===t?"\n"+e:"\n\n"+e+"\n\n"}},h.listItem={filter:"li",replacement:function(e,t,n){e=e.replace(/^\n+/,"").replace(/\n+$/,"\n").replace(/\n/gm,"\n    ");var r=n.bulletListMarker+"   ",i=t.parentNode;if("OL"===i.nodeName){var o=i.getAttribute("start"),a=Array.prototype.indexOf.call(i.children,t);r=(o?Number(o)+a:a+1)+".  "}return r+e+(t.nextSibling&&!/\n$/.test(e)?"\n":"")}},h.indentedCodeBlock={filter:function(e,t){return"indented"===t.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,t,n){return"\n\n    "+t.firstChild.textContent.replace(/\n/g,"\n    ")+"\n\n"}},h.fencedCodeBlock={filter:function(e,t){return"fenced"===t.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,t,n){for(var r,o=((t.firstChild.getAttribute("class")||"").match(/language-(\S+)/)||[null,""])[1],a=t.firstChild.textContent,c=n.fence.charAt(0),u=3,l=new RegExp("^"+c+"{3,}","gm");r=l.exec(a);)r[0].length>=u&&(u=r[0].length+1);var s=i(c,u);return"\n\n"+s+o+"\n"+a.replace(/\n$/,"")+"\n"+s+"\n\n"}},h.horizontalRule={filter:"hr",replacement:function(e,t,n){return"\n\n"+n.hr+"\n\n"}},h.inlineLink={filter:function(e,t){return"inlined"===t.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,t){var n=t.getAttribute("href"),r=d(t.getAttribute("title"));return r&&(r=' "'+r+'"'),"["+e+"]("+n+r+")"}},h.referenceLink={filter:function(e,t){return"referenced"===t.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,t,n){var r,i,o=t.getAttribute("href"),a=d(t.getAttribute("title"));switch(a&&(a=' "'+a+'"'),n.linkReferenceStyle){case"collapsed":r="["+e+"][]",i="["+e+"]: "+o+a;break;case"shortcut":r="["+e+"]",i="["+e+"]: "+o+a;break;default:var c=this.references.length+1;r="["+e+"]["+c+"]",i="["+c+"]: "+o+a}return this.references.push(i),r},references:[],append:function(e){var t="";return this.references.length&&(t="\n\n"+this.references.join("\n")+"\n\n",this.references=[]),t}},h.emphasis={filter:["em","i"],replacement:function(e,t,n){return e.trim()?n.emDelimiter+e+n.emDelimiter:""}},h.strong={filter:["strong","b"],replacement:function(e,t,n){return e.trim()?n.strongDelimiter+e+n.strongDelimiter:""}},h.code={filter:function(e){var t=e.previousSibling||e.nextSibling,n="PRE"===e.parentNode.nodeName&&!t;return"CODE"===e.nodeName&&!n},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var t=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",n="`",r=e.match(/`+/gm)||[];-1!==r.indexOf(n);)n+="`";return n+t+e+t+n}},h.image={filter:"img",replacement:function(e,t){var n=d(t.getAttribute("alt")),r=t.getAttribute("src")||"",i=d(t.getAttribute("title"));return r?"!["+n+"]("+r+(i?' "'+i+'"':"")+")":""}},p.prototype={add:function(e,t){this.array.unshift(t)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){return e.isBlank?this.blankRule:(t=m(this.array,e,this.options))||(t=m(this._keep,e,this.options))||(t=m(this._remove,e,this.options))?t:this.defaultRule;var t},forEach:function(e){for(var t=0;t<this.array.length;t++)e(this.array[t],t)}};var w="undefined"!==typeof window?window:{};var b,E=function(){var e=w.DOMParser,t=!1;try{(new e).parseFromString("","text/html")&&(t=!0)}catch(n){}return t}()?w.DOMParser:function(){var e=function(){};return!function(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch(t){window.ActiveXObject&&(e=!0)}return e}()?e.prototype.parseFromString=function(e){var t=document.implementation.createHTMLDocument("");return t.open(),t.write(e),t.close(),t}:e.prototype.parseFromString=function(e){var t=new window.ActiveXObject("htmlfile");return t.designMode="on",t.open(),t.write(e),t.close(),t},e}();function N(e,t){var n;"string"===typeof e?n=(b=b||new E).parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html").getElementById("turndown-root"):n=e.cloneNode(!0);return function(e){var t=e.element,n=e.isBlock,r=e.isVoid,i=e.isPre||function(e){return"PRE"===e.nodeName};if(t.firstChild&&!i(t)){for(var o=null,a=!1,c=null,u=y(c,t,i);u!==t;){if(3===u.nodeType||4===u.nodeType){var l=u.data.replace(/[ \r\n\t]+/g," ");if(o&&!/ $/.test(o.data)||a||" "!==l[0]||(l=l.substr(1)),!l){u=v(u);continue}u.data=l,o=u}else{if(1!==u.nodeType){u=v(u);continue}n(u)||"BR"===u.nodeName?(o&&(o.data=o.data.replace(/ $/,"")),o=null,a=!1):r(u)||i(u)?(o=null,a=!0):o&&(a=!1)}var s=y(c,u,i);c=u,u=s}o&&(o.data=o.data.replace(/ $/,""),o.data||v(o))}}({element:n,isBlock:a,isVoid:u,isPre:t.preformattedCode?A:null}),n}function A(e){return"PRE"===e.nodeName||"CODE"===e.nodeName}function T(e,t){return e.isBlock=a(e),e.isCode="CODE"===e.nodeName||e.parentNode.isCode,e.isBlank=function(e){return!u(e)&&!function(e){return s(e,l)}(e)&&/^\s*$/i.test(e.textContent)&&!function(e){return f(e,c)}(e)&&!function(e){return f(e,l)}(e)}(e),e.flankingWhitespace=function(e,t){if(e.isBlock||t.preformattedCode&&e.isCode)return{leading:"",trailing:""};var n=function(e){var t=e.match(/^(([ \t\r\n]*)(\s*))[\s\S]*?((\s*?)([ \t\r\n]*))$/);return{leading:t[1],leadingAscii:t[2],leadingNonAscii:t[3],trailing:t[4],trailingNonAscii:t[5],trailingAscii:t[6]}}(e.textContent);n.leadingAscii&&k("left",e,t)&&(n.leading=n.leadingNonAscii);n.trailingAscii&&k("right",e,t)&&(n.trailing=n.trailingNonAscii);return{leading:n.leading,trailing:n.trailing}}(e,t),e}function k(e,t,n){var r,i,o;return"left"===e?(r=t.previousSibling,i=/ $/):(r=t.nextSibling,i=/^ /),r&&(3===r.nodeType?o=i.test(r.nodeValue):n.preformattedCode&&"CODE"===r.nodeName?o=!1:1!==r.nodeType||a(r)||(o=i.test(r.textContent))),o}var O=Array.prototype.reduce,x=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function L(e){if(!(this instanceof L))return new L(e);var t={rules:h,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(e,t){return t.isBlock?"\n\n":""},keepReplacement:function(e,t){return t.isBlock?"\n\n"+t.outerHTML+"\n\n":t.outerHTML},defaultReplacement:function(e,t){return t.isBlock?"\n\n"+e+"\n\n":e}};this.options=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}({},t,e),this.rules=new p(this.options)}function S(e){var t=this;return O.call(e.childNodes,(function(e,n){var r="";return 3===(n=new T(n,t.options)).nodeType?r=n.isCode?n.nodeValue:t.escape(n.nodeValue):1===n.nodeType&&(r=R.call(t,n)),D(e,r)}),"")}function C(e){var t=this;return this.rules.forEach((function(n){"function"===typeof n.append&&(e=D(e,n.append(t.options)))})),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function R(e){var t=this.rules.forNode(e),n=S.call(this,e),r=e.flankingWhitespace;return(r.leading||r.trailing)&&(n=n.trim()),r.leading+t.replacement(n,e,this.options)+r.trailing}function D(e,t){var n=function(e){for(var t=e.length;t>0&&"\n"===e[t-1];)t--;return e.substring(0,t)}(e),r=t.replace(/^\n*/,""),i=Math.max(e.length-n.length,t.length-r.length);return n+"\n\n".substring(0,i)+r}L.prototype={turndown:function(e){if(!function(e){return null!=e&&("string"===typeof e||e.nodeType&&(1===e.nodeType||9===e.nodeType||11===e.nodeType))}(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(""===e)return"";var t=S.call(this,new N(e,this.options));return C.call(this,t)},use:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.use(e[t]);else{if("function"!==typeof e)throw new TypeError("plugin must be a Function or an Array of Functions");e(this)}return this},addRule:function(e,t){return this.rules.add(e,t),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return x.reduce((function(e,t){return e.replace(t[0],t[1])}),e)}};new L;var P=function(e){return"".concat(e.title,"-").concat(e.created)},_=function(){var e,t=(e=n().mark((function e(t){var r,i;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,chrome.tabs.query({active:!0,currentWindow:!0});case 2:(r=e.sent).length>0&&(i=r[0])&&i.id&&(console.info("inject code [".concat(t,"] to active tab [").concat(i.title,"]")),chrome.scripting.executeScript({target:{tabId:i.id},files:[t]}));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function c(e){r(a,i,o,c,u,"next",e)}function u(e){r(a,i,o,c,u,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}();chrome.commands.onCommand.addListener((function(e){console.log("command [".concat(e,"] is triggered")),"download_selection_as_markdown"==e?_("static/js/content.js"):"edit_selection_as_markdown"==e&&_("static/js/edit.js")})),chrome.runtime.onMessage.addListener((function(e){console.log("received a ".concat(e," on background script"));var n,r,i,o=P(e),a=(n={},i=e,(r=t(r=o))in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n);chrome.storage.local.set(a)}))}();