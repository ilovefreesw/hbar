/*!
 * 
 *   hello-bar v1.4.0
 *   https://github.com/AnandChowdhary/hello-bar
 * 
 *   Copyright (c) Anand Chowdhary (https://github.com/AnandChowdhary)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define("HelloBar",[],e):"object"===typeof exports?exports.HelloBar=e():t.HelloBar=e()}(window,(function(){return function(t){var e={};function __webpack_require__(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,__webpack_require__),s.l=!0,s.exports}return __webpack_require__.m=t,__webpack_require__.c=e,__webpack_require__.d=function(t,e,i){__webpack_require__.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},__webpack_require__.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},__webpack_require__.t=function(t,e){if(1&e&&(t=__webpack_require__(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(__webpack_require__.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)__webpack_require__.d(i,s,function(e){return t[e]}.bind(null,s));return i},__webpack_require__.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return __webpack_require__.d(e,"a",e),e},__webpack_require__.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(t,e){t.exports=function(t,e,i){var s=/#/.test(t),r=void 0!==e&&void 0!==i,n=Array.isArray(t),o="#ffffff",a=0;if(s)a=hexToDec(t.substr(1,2)),e=hexToDec(t.substr(3,2)),i=hexToDec(t.substr(5,2));else if(r)a=parseInt(t),e=parseInt(e),i=parseInt(i);else{if(!n)return o;a=parseInt(t[0]),e=parseInt(t[1]),i=parseInt(t[2])}return Math.sqrt(a*a*.241+e*e*.691+i*i*.068)>130&&(o="#000000"),o};var hexToDec=function(t){var e=t.replace(/[^a-f0-9]/gi,"");return parseInt(e,16)}},function(t,e){function debounce(t,e,i){var s,r,n,o,a;function later(){var c=Date.now()-o;c<e&&c>=0?s=setTimeout(later,e-c):(s=null,i||(a=t.apply(n,r),n=r=null))}null==e&&(e=100);var debounced=function(){n=this,r=arguments,o=Date.now();var c=i&&!s;return s||(s=setTimeout(later,e)),c&&(a=t.apply(n,r),n=r=null),a};return debounced.clear=function(){s&&(clearTimeout(s),s=null)},debounced.flush=function(){s&&(a=t.apply(n,r),n=r=null,clearTimeout(s),s=null)},debounced}debounce.debounce=debounce,t.exports=debounce},function(t,e,i){t.exports=i(3)},function(t,e,i){"use strict";i.r(e);var s=i(0),r=i.n(s),n=i(1),o=i.n(n),a=["BE","BG","CZ","DK","DE","EE","IE","EL","ES","FR","HR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","UK"];var c=class{constructor(t){t=t||{},this.settings=t,["i18n","targeting"].forEach((t=>{this.settings[t]=this.settings[t]||{}})),this.settings.targeting.location=this.settings.targeting.location||{},this.settings.targeting.params=this.settings.targeting.params||{},this.settings.targeting.time=this.settings.targeting.time||{},this.settings.targeting.time.before=this.settings.targeting.time.before||{},this.settings.targeting.time.after=this.settings.targeting.time.after||{},this.id="helloBar_"+Math.random().toString(36).substr(2),this.settings.id&&(this.id=this.settings.id),this.bar=document.createElement("div"),this.bar.setAttribute("id",this.id),"object"===typeof this.settings.text?this.text=this.settings.text[Math.floor(Math.random()*this.settings.text.length)]:this.text=this.settings.text,this.bar.innerHTML='<div class="hello-bar-container"><p class="hello-bar-text">'.concat(this.text,'</p></div><div class="hello-bar-text--after"></div>'),this.settings.hideClose||(this.bar.innerHTML+='<button class="hello-bar-button" aria-controls="'.concat(this.id,'" aria-expanded="true" aria-label="').concat(this.settings.i18n.hideText||"Hide announcement",'">\n        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">\n            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>\n        </svg>\n      </button>')),this.bar.classList.add("hello-bar"),this.settings.fixed&&this.bar.classList.add("hello-bar--is-fixed"),this.settings.multiline&&this.bar.classList.add("hello-bar--is-multiline"),"bottom"===this.settings.position?(this.bar.classList.add("hello-bar--is-bottom"),this.marginProp="marginBottom"):this.marginProp="marginTop",this.events={},window.addEventListener("resize",o()((()=>{document.querySelector("#".concat(this.id))&&(this.$emit("window-resize"),this.unMove(),this.calculateHeight(),this.settings.disableBodyMove||this.moveElements(document.body),this.moveElements(this.settings.move),this.colorizeBar())}),200)),this.confirmShow().then((()=>{this.$emit("before-created"),this.insertBar(),this.functionBar(),this.calculateHeight(),this.colorizeBar(),this.settings.disableBodyMove||this.moveElements(document.body),this.moveElements(this.settings.move),this.showBar(),this.$emit("after-created")})).catch((()=>{this.$emit("not-created")}))}on(t,e){this.events[t]=e}$emit(t,e){this.events[t]&&"function"===typeof this.events[t]&&this.events[t](e)}confirmShow(){return new Promise(((t,e)=>{const finishConfirmation=()=>{if(this.settings.targeting.once&&sessionStorage.getItem("hello-bar-".concat(this.id,"--session-showed")))return e();if(this.settings.targeting.onceUser&&localStorage.getItem("hello-bar-".concat(this.id,"--user-showed")))return e();if(Object.keys(this.settings.targeting.time).length){const t={year:"getFullYear",month:"getMonth",day:"getDate",dayOfWeek:"getDay",hour:"getHours",minute:"getMinutes",second:"getSeconds"},i=["getMonth","getDay"];["year","month","day","hour","minute","second"].forEach((s=>{const r=new Date;if(this.settings.targeting.time.after[s]){let n=r[t[s]]();if(i.includes(s)&&(n+=1),n<=this.settings.targeting.time.after[s])return e()}if(this.settings.targeting.time.before[s]){let n=r[t[s]]();if(i.includes(s)&&(n+=1),n>=this.settings.targeting.time.after[s])return e()}}))}return this.settings.targeting.params&&Object.keys(this.settings.targeting.params).forEach((t=>{const i=(t=>{const e=window.location.href;t=t.replace(/[[\]]/g,"\\$&");const i=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);if(i&&i[2])return decodeURIComponent(i[2].replace(/\+/g," "))})(t);if(i&&i!==this.settings.targeting.params[t])return e()})),this.settings.targeting.pathname&&window.location.pathname!==this.settings.targeting.pathname||this.settings.targeting.href&&window.location.href!==this.settings.targeting.href?e():void t()};if(this.settings.hide)return e();Object.keys(this.settings.targeting.location).length?this.getIpInfo().then((t=>{if(this.settings.targeting.location.eu&&!a.includes(t.country))return e();["country","city","ip","postal","region"].forEach((i=>{if(this.settings.targeting.location[i]&&this.settings.targeting.location[i].constructor===Array&&!this.settings.targeting.location[i].includes(t[i]))return e()})),finishConfirmation()})):finishConfirmation()}))}showBar(){document.querySelector("#".concat(this.id))&&(this.bar.style.transition=(this.settings.duration||500)+"ms",setTimeout((()=>{this.bar.classList.add("hello-bar--is-visible")}),this.settings.delay||1),this.$emit("show-bar",this.bar))}unMove(){const t=document.querySelectorAll(".hello-bar--has-moved");for(let e=0;e<t.length;e++){const i=parseInt(t[e].style[this.marginProp]);t[e].style[this.marginProp]="".concat(i-this.height,"px"),t[e].classList.remove("hello-bar--has-moved")}}hideBar(){document.querySelector("#".concat(this.id))&&(this.bar.classList.remove("hello-bar--is-visible"),sessionStorage.setItem("hello-bar-".concat(this.id,"--session-showed"),!0),localStorage.setItem("hello-bar-".concat(this.id,"--user-showed"),!0),this.unMove(),setTimeout((()=>{this.bar.parentNode.removeChild(this.bar)}),(this.settings.duration||500)+1),this.$emit("hide-bar",this.bar))}functionBar(){document.querySelector(".hello-bar button.hello-bar-button")&&document.querySelector(".hello-bar button.hello-bar-button").addEventListener("click",(()=>{this.$emit("close-bar",this.bar),this.hideBar()}));const t={mouseenter:"mouse-enter",mouseleave:"mouse-leave",click:"mouse-click",mouseup:"mouse-up",mousedown:"mouse-down"},e=document.querySelector(".hello-bar .cta");Object.keys(t).forEach((i=>{this.bar.addEventListener(i,(()=>this.$emit(t[i],this.bar))),e&&e.addEventListener(i,(()=>this.$emit("cta-".concat(t[i]),e)))}))}colorizeBar(){if(!document.querySelector("#".concat(this.id)))return;const t=this.settings.background||"#eeeeee",e=this.settings.textColor||r()(t);this.bar.style.backgroundColor=t,document.querySelector(".hello-bar .hello-bar-text--after")&&(document.querySelector(".hello-bar .hello-bar-text--after").style.background="linear-gradient(to right, rgba(0, 0, 0, 0), ".concat(t,")")),this.bar.style.color=e,this.bar.style.textAlign=this.settings.align||"center",document.querySelector(".hello-bar p.hello-bar-text .cta")&&(document.querySelector(".hello-bar p.hello-bar-text .cta").style.color=this.settings.background||"#eeeeee",document.querySelector(".hello-bar p.hello-bar-text .cta").style.background=e,this.$emit("color-bar",{backgroundColor:t,textColor:e}))}calculateHeight(){document.querySelector("#".concat(this.id))&&(this.settings.size&&this.bar.classList.add("hello-bar--size-".concat(this.settings.size)),"function"===typeof this.bar.getBoundingClientRect&&this.bar.getBoundingClientRect().height?this.height=this.bar.getBoundingClientRect().height:this.height=this.bar.offsetHeight,this.height=parseInt(this.height),this.$emit("calculate-height",this.height))}insertBar(){const t=document.querySelector("body > *");t?document.body.insertBefore(this.bar,t):document.body.appendChild(this.bar),this.$emit("created",this.bar)}moveElements(t){if(t)if("string"===typeof t){const e=document.querySelectorAll(t);for(let t=0;t<e.length;t++)this.moveElements(e[t])}else if(t.constructor===Array&&t.length)for(let e=0;e<t.length;e++)this.moveElements(t[e]);else"object"===typeof t&&("object"!==typeof t.classList||"function"!==typeof t.classList.add||t.classList.contains("hello-bar--has-moved")||(t.style[this.marginProp]="".concat(this.height,"px"),this.$emit("move-element",t),t.classList.add("hello-bar--has-moved")))}getIpInfo(){return this.$emit("start-ip-info"),new Promise(((t,e)=>{var i,s;(i=this.settings.ipEndpoint||"https://ipinfo.io/json",new Promise(((t,e)=>{const r="hello_bar_cache_".concat(i).concat(s?"_"+JSON.stringify(s):"");if(localStorage.getItem(r))try{const e=JSON.parse(localStorage.getItem(r));if(e.expires_at>(new Date).getTime())return t(e.cache_value)}catch(n){}fetch(i,s).then((t=>t.json())).then((e=>{localStorage.setItem(r,JSON.stringify({created_at:(new Date).getTime(),expires_at:(new Date).getTime()+6048e5,cache_value:e})),t(e)})).catch((t=>e(t)))}))).then((e=>{this.$emit("fetch-ip-info",e),t(e)})).catch((t=>{this.$emit("error-ip-info",t),e(t)}))}))}};e.default=c}]).default}));
//# sourceMappingURL=index.js.map