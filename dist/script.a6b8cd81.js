parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HZNl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=new WeakMap;function t(t,n,o,r){var c,s;if(!t&&!e.has(n))return!1;const a=null!==(c=e.get(n))&&void 0!==c?c:new WeakMap;if(e.set(n,a),!t&&!e.has(n))return!1;const u=null!==(s=a.get(o))&&void 0!==s?s:new Set;a.set(o,u);const i=u.has(r);return t?u.add(r):u.delete(r),i&&t}function n(e){return"function"==typeof e.addEventListener}function o(e,t){let n=e.target;if(n instanceof Text&&(n=n.parentElement),n instanceof Element&&e.currentTarget instanceof Element){const o=n.closest(t);if(o&&e.currentTarget.contains(o))return o}}function r(e,c,s,a,u){if("string"==typeof e&&(e=document.querySelectorAll(e)),!n(e)){const t=Array.prototype.map.call(e,e=>r(e,c,s,a,u));return{destroy(){for(const e of t)e.destroy()}}}const i=e instanceof Document?e.documentElement:e,l=Boolean("object"==typeof u?u.capture:u),f=e=>{const t=o(e,c);t&&(e.delegateTarget=t,a.call(i,e))};"object"==typeof u&&delete u.once;const d=JSON.stringify({selector:c,type:s,capture:l}),p={destroy(){i.removeEventListener(s,f,u),t(!1,i,a,d)}};return t(!0,i,a,d)||i.addEventListener(s,f,u),p}var c=r;exports.default=c;
},{}],"g2kt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e){var r=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return"/"===r[0]&&(r=r.splice(1)),""===r&&(r="homepage"),r};exports.default=e;
},{}],"JK0m":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var o=function(o){window.history.pushState({url:o||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.title,o||window.location.href.split(window.location.hostname)[1])};exports.default=o;
},{}],"iTFX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.query=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"!=typeof e?e:r.querySelector(e)},r=exports.queryAll=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"!=typeof e?e:Array.prototype.slice.call(r.querySelectorAll(e))},t=exports.escapeCssIdentifier=function(e){return window.CSS&&window.CSS.escape?CSS.escape(e):e};
},{}],"Hux7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../utils"),n=function(n,r){var t=document.createElement("html");t.innerHTML=n;var l=[];r.forEach(function(n){if(null==(0,e.query)(n,t))return console.warn("[swup] Container "+n+" not found on page."),null;(0,e.queryAll)(n).length!==(0,e.queryAll)(n,t).length&&console.warn("[swup] Mismatched number of containers found on new page."),(0,e.queryAll)(n).forEach(function(r,u){(0,e.queryAll)(n,t)[u].setAttribute("data-swup",l.length),l.push((0,e.queryAll)(n,t)[u].outerHTML)})});var u={title:(t.querySelector("title")||{}).innerText,pageClass:t.querySelector("body").className,originalContent:n,blocks:l};return t.innerHTML="",t=null,u};exports.default=n;
},{"../utils":"iTFX"}],"AD4e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},t=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={url:window.location.pathname+window.location.search,method:"GET",data:null,headers:{}},n=e({},r,t),o=new XMLHttpRequest;return o.onreadystatechange=function(){4===o.readyState&&(o.status,a(o))},o.open(n.method,n.url,!0),Object.keys(n.headers).forEach(function(e){o.setRequestHeader(e,n.headers[e])}),o.send(n.data),o};exports.default=t;
},{}],"XEBX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){return void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend?"webkitTransitionEnd":"transitionend"};exports.default=n;
},{}],"tQon":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){return void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend?"WebkitTransition":"transition"};exports.default=n;
},{}],"poij":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){return window.location.pathname+window.location.search};exports.default=e;
},{}],"unwl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function n(e){t(this,n),e instanceof Element||e instanceof SVGElement?this.link=e:(this.link=document.createElement("a"),this.link.href=e)}return e(n,[{key:"getPath",value:function(){var e=this.link.pathname;return"/"!==e[0]&&(e="/"+e),e}},{key:"getAddress",value:function(){var e=this.link.pathname+this.link.search;return this.link.getAttribute("xlink:href")&&(e=this.link.getAttribute("xlink:href")),"/"!==e[0]&&(e="/"+e),e}},{key:"getHash",value:function(){return this.link.hash}}]),n}();exports.default=n;
},{}],"JVRp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./Link"),r=t(e);function t(e){return e&&e.__esModule?e:{default:e}}var u=function(e){return new r.default(e).getAddress()};exports.default=u;
},{"./Link":"unwl"}],"efEv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../utils"),t=function(t,r){var u=0;r.forEach(function(r){null==(0,e.query)(r,t)?console.warn("[swup] Container "+r+" not found on page."):(0,e.queryAll)(r).forEach(function(n,o){(0,e.queryAll)(r,t)[o].setAttribute("data-swup",u),u++})})};exports.default=t;
},{"../utils":"iTFX"}],"qElR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){document.documentElement.className.split(" ").forEach(function(e){(new RegExp("^to-").test(e)||"is-changing"===e||"is-rendering"===e||"is-popstate"===e)&&document.documentElement.classList.remove(e)})};exports.default=e;
},{}],"sTZz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cleanupAnimationClasses=exports.Link=exports.markSwupElements=exports.normalizeUrl=exports.getCurrentUrl=exports.transitionProperty=exports.transitionEnd=exports.fetch=exports.getDataFromHtml=exports.createHistoryRecord=exports.classify=void 0;var e=require("./classify"),r=H(e),t=require("./createHistoryRecord"),s=H(t),o=require("./getDataFromHtml"),a=H(o),i=require("./fetch"),n=H(i),l=require("./transitionEnd"),u=H(l),p=require("./transitionProperty"),x=H(p),d=require("./getCurrentUrl"),f=H(d),c=require("./normalizeUrl"),m=H(c),q=require("./markSwupElements"),y=H(q),g=require("./Link"),k=H(g),C=require("./cleanupAnimationClasses"),E=H(C);function H(e){return e&&e.__esModule?e:{default:e}}var U=exports.classify=r.default,v=exports.createHistoryRecord=s.default,P=exports.getDataFromHtml=a.default,_=exports.fetch=n.default,h=exports.transitionEnd=u.default,w=exports.transitionProperty=x.default,z=exports.getCurrentUrl=f.default,A=exports.normalizeUrl=m.default,D=exports.markSwupElements=y.default,F=exports.Link=k.default,L=exports.cleanupAnimationClasses=E.default;
},{"./classify":"g2kt","./createHistoryRecord":"JK0m","./getDataFromHtml":"Hux7","./fetch":"AD4e","./transitionEnd":"XEBX","./transitionProperty":"tQon","./getCurrentUrl":"poij","./normalizeUrl":"JVRp","./markSwupElements":"efEv","./Link":"unwl","./cleanupAnimationClasses":"qElR"}],"NOx8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Cache=void 0;var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),t=require("../helpers");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=exports.Cache=function(){function n(){r(this,n),this.pages={},this.last=null}return e(n,[{key:"cacheUrl",value:function(e){e.url=(0,t.normalizeUrl)(e.url),e.url in this.pages==!1&&(this.pages[e.url]=e),this.last=this.pages[e.url],this.swup.log("Cache ("+Object.keys(this.pages).length+")",this.pages)}},{key:"getPage",value:function(e){return e=(0,t.normalizeUrl)(e),this.pages[e]}},{key:"getCurrentPage",value:function(){return this.getPage((0,t.getCurrentUrl)())}},{key:"exists",value:function(e){return(e=(0,t.normalizeUrl)(e))in this.pages}},{key:"empty",value:function(){this.pages={},this.last=null,this.swup.log("Cache cleared")}},{key:"remove",value:function(e){delete this.pages[e]}}]),n}();exports.default=n;
},{"../helpers":"sTZz"}],"NaI7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(l){i=!0,o=l}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n=require("../helpers"),r=function(r,i){var o=this,a=[],s=void 0;this.triggerEvent("transitionStart",i),null!=r.customTransition?(this.updateTransition(window.location.pathname,r.url,r.customTransition),document.documentElement.classList.add("to-"+(0,n.classify)(r.customTransition))):this.updateTransition(window.location.pathname,r.url),!i||this.options.animateHistoryBrowsing?function(){if(o.triggerEvent("animationOutStart"),document.documentElement.classList.add("is-changing"),document.documentElement.classList.add("is-leaving"),document.documentElement.classList.add("is-animating"),i&&document.documentElement.classList.add("is-popstate"),document.documentElement.classList.add("to-"+(0,n.classify)(r.url)),a=o.getAnimationPromises("out"),Promise.all(a).then(function(){o.triggerEvent("animationOutDone")}),!i){var t=void 0;t=null!=o.scrollToElement?r.url+o.scrollToElement:r.url,(0,n.createHistoryRecord)(t)}}():this.triggerEvent("animationSkipped"),this.cache.exists(r.url)?(s=new Promise(function(t){t(o.cache.getPage(r.url))}),this.triggerEvent("pageRetrievedFromCache")):s=this.preloadPromise&&this.preloadPromise.route==r.url?this.preloadPromise:new Promise(function(t,i){(0,n.fetch)(e({},r,{headers:o.options.requestHeaders}),function(e){if(500===e.status)return o.triggerEvent("serverError"),void i(r.url);var n=o.getPageData(e);null!=n&&n.blocks.length>0?(n.url=r.url,o.cache.cacheUrl(n),o.triggerEvent("pageLoaded"),t(n)):i(r.url)})}),Promise.all([s].concat(a)).then(function(e){var n=t(e,1)[0];o.renderPage(n,i),o.preloadPromise=null}).catch(function(t){o.options.skipPopStateHandling=function(){return window.location=t,!0},window.history.go(-1)})};exports.default=r;
},{"../helpers":"sTZz"}],"VXn3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},e=require("../helpers"),n=function(n,i){var r=this;if(document.documentElement.classList.remove("is-leaving"),this.getCurrentUrl()===n.url){var o=new e.Link(n.responseURL).getPath();window.location.pathname!==o&&(window.history.replaceState({url:o,random:Math.random(),source:"swup"},document.title,o),this.cache.cacheUrl(t({},n,{url:o}))),i&&!this.options.animateHistoryBrowsing||document.documentElement.classList.add("is-rendering"),this.triggerEvent("willReplaceContent",i);for(var s=0;s<n.blocks.length;s++)document.body.querySelector('[data-swup="'+s+'"]').outerHTML=n.blocks[s];if(document.title=n.title,this.triggerEvent("contentReplaced",i),this.triggerEvent("pageView",i),this.options.cache||this.cache.empty(),setTimeout(function(){i&&!r.options.animateHistoryBrowsing||(r.triggerEvent("animationInStart"),document.documentElement.classList.remove("is-animating"))},10),!i||this.options.animateHistoryBrowsing){var a=this.getAnimationPromises("in");Promise.all(a).then(function(){r.triggerEvent("animationInDone"),r.triggerEvent("transitionEnd",i),r.cleanupAnimationClasses()})}else this.triggerEvent("transitionEnd",i);this.scrollToElement=null}};exports.default=n;
},{"../helpers":"sTZz"}],"xhxC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e,t){this._handlers[e].forEach(function(e){try{e(t)}catch(r){console.error(r)}});var r=new CustomEvent("swup:"+e,{detail:e});document.dispatchEvent(r)};exports.default=e;
},{}],"HBjs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e,s){this._handlers[e]?this._handlers[e].push(s):console.warn("Unsupported event "+e+".")};exports.default=e;
},{}],"gXrM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e,n){var s=this;if(null!=e)if(null!=n)if(this._handlers[e]&&this._handlers[e].filter(function(e){return e===n}).length){var r=this._handlers[e].filter(function(e){return e===n})[0],t=this._handlers[e].indexOf(r);t>-1&&this._handlers[e].splice(t,1)}else console.warn("Handler for event '"+e+"' no found.");else this._handlers[e]=[];else Object.keys(this._handlers).forEach(function(e){s._handlers[e]=[]})};exports.default=e;
},{}],"L3vD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(t,e,o){this.transition={from:t,to:e,custom:o}};exports.default=t;
},{}],"R7tR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../utils"),r=function(r){return r?("#"===r.charAt(0)&&(r=r.substring(1)),r=decodeURIComponent(r),r=(0,e.escapeCssIdentifier)(r),(0,e.query)("#"+r)||(0,e.query)("a[name='"+r+"']")):null};exports.default=r;
},{"../utils":"iTFX"}],"bPwH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../utils"),t=require("../helpers"),o=function(){var o=this.options.animationSelector,r=(0,t.transitionProperty)()+"Duration",n=[],i=(0,e.queryAll)(o,document.body);return i.length?(i.forEach(function(e){var i=window.getComputedStyle(e)[r];if(!i||"0s"==i)return console.warn("[swup] No CSS transition duration defined for element of selector "+o),void n.push(Promise.resolve());var s=new Promise(function(o){e.addEventListener((0,t.transitionEnd)(),function(t){e==t.target&&o()})});n.push(s)}),n):(console.warn("[swup] No animated elements found by selector "+o),[Promise.resolve()])};exports.default=o;
},{"../utils":"iTFX","../helpers":"sTZz"}],"slbu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../helpers"),r=function(r){var s=r.responseText,o=(0,e.getDataFromHtml)(s,this.options.containers);return o?(o.responseURL=r.responseURL?r.responseURL:window.location.href,o):(console.warn("[swup] Received page is invalid."),null)};exports.default=r;
},{"../helpers":"sTZz"}],"B3Dx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=exports.use=function(n){if(n.isSwupPlugin)return this.plugins.push(n),n.swup=this,"function"==typeof n._beforeMount&&n._beforeMount(),n.mount(),this.plugins;console.warn("Not swup plugin instance "+n+".")},t=exports.unuse=function(n){var t=void 0;if(t="string"==typeof n?this.plugins.find(function(t){return n===t.name}):n){t.unmount(),"function"==typeof t._afterUnmount&&t._afterUnmount();var u=this.plugins.indexOf(t);return this.plugins.splice(u,1),this.plugins}console.warn("No such plugin.")},u=exports.findPlugin=function(n){return this.plugins.find(function(t){return n===t.name})};
},{}],"bvn7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},t=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),n=require("delegate-it"),i=A(n),a=require("./modules/Cache"),s=A(a),r=require("./modules/loadPage"),o=A(r),l=require("./modules/renderPage"),u=A(l),d=require("./modules/triggerEvent"),h=A(d),c=require("./modules/on"),g=A(c),p=require("./modules/off"),m=A(p),f=require("./modules/updateTransition"),w=A(f),v=require("./modules/getAnchorElement"),E=A(v),P=require("./modules/getAnimationPromises"),b=A(P),y=require("./modules/getPageData"),k=A(y),H=require("./modules/plugins"),S=require("./utils"),q=require("./helpers");function A(e){return e&&e.__esModule?e:{default:e}}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var C=function(){function n(t){L(this,n);var i={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',linkSelector:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',cache:!0,containers:["#swup"],requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},plugins:[],skipPopStateHandling:function(e){return!(e.state&&"swup"===e.state.source)}},a=e({},i,t);this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],openPageInNewTab:[],pageLoaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],serverError:[],transitionStart:[],transitionEnd:[],willReplaceContent:[]},this.scrollToElement=null,this.preloadPromise=null,this.options=a,this.plugins=[],this.transition={},this.delegatedListeners={},this.boundPopStateHandler=this.popStateHandler.bind(this),this.cache=new s.default,this.cache.swup=this,this.loadPage=o.default,this.renderPage=u.default,this.triggerEvent=h.default,this.on=g.default,this.off=m.default,this.updateTransition=w.default,this.getAnimationPromises=b.default,this.getPageData=k.default,this.getAnchorElement=E.default,this.log=function(){},this.use=H.use,this.unuse=H.unuse,this.findPlugin=H.findPlugin,this.getCurrentUrl=q.getCurrentUrl,this.cleanupAnimationClasses=q.cleanupAnimationClasses,this.enable()}return t(n,[{key:"enable",value:function(){var e=this;"undefined"!=typeof Promise?(this.delegatedListeners.click=(0,i.default)(document,this.options.linkSelector,"click",this.linkClickHandler.bind(this)),window.addEventListener("popstate",this.boundPopStateHandler),this.options.cache,(0,q.markSwupElements)(document.documentElement,this.options.containers),this.options.plugins.forEach(function(t){e.use(t)}),window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href),this.triggerEvent("enabled"),document.documentElement.classList.add("swup-enabled"),this.triggerEvent("pageView")):console.warn("Promise is not supported")}},{key:"destroy",value:function(){var e=this;this.delegatedListeners.click.destroy(),window.removeEventListener("popstate",this.boundPopStateHandler),this.cache.empty(),this.options.plugins.forEach(function(t){e.unuse(t)}),(0,S.queryAll)("[data-swup]").forEach(function(e){e.removeAttribute("data-swup")}),this.off(),this.triggerEvent("disabled"),document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function(e){if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)this.triggerEvent("openPageInNewTab",e);else if(0===e.button){this.triggerEvent("clickLink",e),e.preventDefault();var t=new q.Link(e.delegateTarget);if(t.getAddress()==(0,q.getCurrentUrl)()||""==t.getAddress()){if(""!=t.getHash())this.triggerEvent("samePageWithHash",e),null!=(0,E.default)(t.getHash())?history.replaceState({url:t.getAddress()+t.getHash(),random:Math.random(),source:"swup"},document.title,t.getAddress()+t.getHash()):console.warn("Element for offset not found ("+t.getHash()+")");else this.triggerEvent("samePage",e)}else{""!=t.getHash()&&(this.scrollToElement=t.getHash());var n=e.delegateTarget.getAttribute("data-swup-transition");this.loadPage({url:t.getAddress(),customTransition:n},!1)}}}},{key:"popStateHandler",value:function(e){if(!this.options.skipPopStateHandling(e)){var t=new q.Link(e.state?e.state.url:window.location.pathname);""!==t.getHash()?this.scrollToElement=t.getHash():e.preventDefault(),this.triggerEvent("popState",e),this.options.animateHistoryBrowsing||(document.documentElement.classList.remove("is-animating"),(0,q.cleanupAnimationClasses)()),this.loadPage({url:t.getAddress()},e)}}}]),n}();exports.default=C;
},{"delegate-it":"HZNl","./modules/Cache":"NOx8","./modules/loadPage":"NaI7","./modules/renderPage":"VXn3","./modules/triggerEvent":"xhxC","./modules/on":"HBjs","./modules/off":"gXrM","./modules/updateTransition":"L3vD","./modules/getAnchorElement":"R7tR","./modules/getAnimationPromises":"bPwH","./modules/getPageData":"slbu","./modules/plugins":"B3Dx","./utils":"iTFX","./helpers":"sTZz"}],"mpVp":[function(require,module,exports) {
"use strict";var e=u(require("swup"));function u(e){return e&&e.__esModule?e:{default:e}}var r=new e.default;
},{"swup":"bvn7"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.a6b8cd81.js.map