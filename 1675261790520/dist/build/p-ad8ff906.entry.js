import{r as t,h as e,H as i}from"./p-e55ca1f2.js";import{e as s,S as n}from"./p-952a4d76.js";var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||false;s.configurable=true;if("value"in s)s.writable=true;Object.defineProperty(t,s.key,s)}}return function(e,i,s){if(i)t(e.prototype,i);if(s)t(e,s);return e}}();function o(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}(function(){if(typeof window==="undefined"){return}var t=Array.prototype.slice;var e=Element.prototype.matches||Element.prototype.msMatchesSelector;var i=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(",");var s=function(){function s(t,e){o(this,s);this._inertManager=e;this._rootElement=t;this._managedNodes=new Set;if(this._rootElement.hasAttribute("aria-hidden")){this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden")}else{this._savedAriaHidden=null}this._rootElement.setAttribute("aria-hidden","true");this._makeSubtreeUnfocusable(this._rootElement);this._observer=new MutationObserver(this._onMutation.bind(this));this._observer.observe(this._rootElement,{attributes:true,childList:true,subtree:true})}r(s,[{key:"destructor",value:function t(){this._observer.disconnect();if(this._rootElement){if(this._savedAriaHidden!==null){this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden)}else{this._rootElement.removeAttribute("aria-hidden")}}this._managedNodes.forEach((function(t){this._unmanageNode(t.node)}),this);this._observer=null;this._rootElement=null;this._managedNodes=null;this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function t(e){var i=this;a(e,(function(t){return i._visitNode(t)}));var s=document.activeElement;if(!document.body.contains(e)){var n=e;var r=undefined;while(n){if(n.nodeType===Node.DOCUMENT_FRAGMENT_NODE){r=n;break}n=n.parentNode}if(r){s=r.activeElement}}if(e.contains(s)){s.blur();if(s===document.activeElement){document.body.focus()}}}},{key:"_visitNode",value:function t(s){if(s.nodeType!==Node.ELEMENT_NODE){return}var n=s;if(n!==this._rootElement&&n.hasAttribute("inert")){this._adoptInertRoot(n)}if(e.call(n,i)||n.hasAttribute("tabindex")){this._manageNode(n)}}},{key:"_manageNode",value:function t(e){var i=this._inertManager.register(e,this);this._managedNodes.add(i)}},{key:"_unmanageNode",value:function t(e){var i=this._inertManager.deregister(e,this);if(i){this._managedNodes["delete"](i)}}},{key:"_unmanageSubtree",value:function t(e){var i=this;a(e,(function(t){return i._unmanageNode(t)}))}},{key:"_adoptInertRoot",value:function t(e){var i=this._inertManager.getInertRoot(e);if(!i){this._inertManager.setInert(e,true);i=this._inertManager.getInertRoot(e)}i.managedNodes.forEach((function(t){this._manageNode(t.node)}),this)}},{key:"_onMutation",value:function e(i,s){i.forEach((function(e){var i=e.target;if(e.type==="childList"){t.call(e.addedNodes).forEach((function(t){this._makeSubtreeUnfocusable(t)}),this);t.call(e.removedNodes).forEach((function(t){this._unmanageSubtree(t)}),this)}else if(e.type==="attributes"){if(e.attributeName==="tabindex"){this._manageNode(i)}else if(i!==this._rootElement&&e.attributeName==="inert"&&i.hasAttribute("inert")){this._adoptInertRoot(i);var s=this._inertManager.getInertRoot(i);this._managedNodes.forEach((function(t){if(i.contains(t.node)){s._manageNode(t.node)}}))}}}),this)}},{key:"managedNodes",get:function t(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function t(){return this._savedAriaHidden!==null}},{key:"savedAriaHidden",set:function t(e){this._savedAriaHidden=e},get:function t(){return this._savedAriaHidden}}]);return s}();var n=function(){function t(e,i){o(this,t);this._node=e;this._overrodeFocusMethod=false;this._inertRoots=new Set([i]);this._savedTabIndex=null;this._destroyed=false;this.ensureUntabbable()}r(t,[{key:"destructor",value:function t(){this._throwIfDestroyed();if(this._node&&this._node.nodeType===Node.ELEMENT_NODE){var e=this._node;if(this._savedTabIndex!==null){e.setAttribute("tabindex",this._savedTabIndex)}else{e.removeAttribute("tabindex")}if(this._overrodeFocusMethod){delete e.focus}}this._node=null;this._inertRoots=null;this._destroyed=true}},{key:"_throwIfDestroyed",value:function t(){if(this.destroyed){throw new Error("Trying to access destroyed InertNode")}}},{key:"ensureUntabbable",value:function t(){if(this.node.nodeType!==Node.ELEMENT_NODE){return}var s=this.node;if(e.call(s,i)){if(s.tabIndex===-1&&this.hasSavedTabIndex){return}if(s.hasAttribute("tabindex")){this._savedTabIndex=s.tabIndex}s.setAttribute("tabindex","-1");if(s.nodeType===Node.ELEMENT_NODE){s.focus=function(){};this._overrodeFocusMethod=true}}else if(s.hasAttribute("tabindex")){this._savedTabIndex=s.tabIndex;s.removeAttribute("tabindex")}}},{key:"addInertRoot",value:function t(e){this._throwIfDestroyed();this._inertRoots.add(e)}},{key:"removeInertRoot",value:function t(e){this._throwIfDestroyed();this._inertRoots["delete"](e);if(this._inertRoots.size===0){this.destructor()}}},{key:"destroyed",get:function t(){return this._destroyed}},{key:"hasSavedTabIndex",get:function t(){return this._savedTabIndex!==null}},{key:"node",get:function t(){this._throwIfDestroyed();return this._node}},{key:"savedTabIndex",set:function t(e){this._throwIfDestroyed();this._savedTabIndex=e},get:function t(){this._throwIfDestroyed();return this._savedTabIndex}}]);return t}();var c=function(){function i(t){o(this,i);if(!t){throw new Error("Missing required argument; InertManager needs to wrap a document.")}this._document=t;this._managedNodes=new Map;this._inertRoots=new Map;this._observer=new MutationObserver(this._watchForInert.bind(this));h(t.head||t.body||t.documentElement);if(t.readyState==="loading"){t.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this))}else{this._onDocumentLoaded()}}r(i,[{key:"setInert",value:function t(e,i){if(i){if(this._inertRoots.has(e)){return}var n=new s(e,this);e.setAttribute("inert","");this._inertRoots.set(e,n);if(!this._document.body.contains(e)){var r=e.parentNode;while(r){if(r.nodeType===11){h(r)}r=r.parentNode}}}else{if(!this._inertRoots.has(e)){return}var o=this._inertRoots.get(e);o.destructor();this._inertRoots["delete"](e);e.removeAttribute("inert")}}},{key:"getInertRoot",value:function t(e){return this._inertRoots.get(e)}},{key:"register",value:function t(e,i){var s=this._managedNodes.get(e);if(s!==undefined){s.addInertRoot(i)}else{s=new n(e,i)}this._managedNodes.set(e,s);return s}},{key:"deregister",value:function t(e,i){var s=this._managedNodes.get(e);if(!s){return null}s.removeInertRoot(i);if(s.destroyed){this._managedNodes["delete"](e)}return s}},{key:"_onDocumentLoaded",value:function e(){var i=t.call(this._document.querySelectorAll("[inert]"));i.forEach((function(t){this.setInert(t,true)}),this);this._observer.observe(this._document.body||this._document.documentElement,{attributes:true,subtree:true,childList:true})}},{key:"_watchForInert",value:function i(s,n){var r=this;s.forEach((function(i){switch(i.type){case"childList":t.call(i.addedNodes).forEach((function(i){if(i.nodeType!==Node.ELEMENT_NODE){return}var s=t.call(i.querySelectorAll("[inert]"));if(e.call(i,"[inert]")){s.unshift(i)}s.forEach((function(t){this.setInert(t,true)}),r)}),r);break;case"attributes":if(i.attributeName!=="inert"){return}var s=i.target;var n=s.hasAttribute("inert");r.setInert(s,n);break}}),this)}}]);return i}();function a(t,e,i){if(t.nodeType==Node.ELEMENT_NODE){var s=t;if(e){e(s)}var n=s.shadowRoot;if(n){a(n,e);return}if(s.localName=="content"){var r=s;var o=r.getDistributedNodes?r.getDistributedNodes():[];for(var c=0;c<o.length;c++){a(o[c],e)}return}if(s.localName=="slot"){var h=s;var l=h.assignedNodes?h.assignedNodes({flatten:true}):[];for(var u=0;u<l.length;u++){a(l[u],e)}return}}var d=t.firstChild;while(d!=null){a(d,e);d=d.nextSibling}}function h(t){if(t.querySelector("style#inert-style, link#inert-style")){return}var e=document.createElement("style");e.setAttribute("id","inert-style");e.textContent="\n"+"[inert] {\n"+"  pointer-events: none;\n"+"  cursor: default;\n"+"}\n"+"\n"+"[inert], [inert] * {\n"+"  -webkit-user-select: none;\n"+"  -moz-user-select: none;\n"+"  -ms-user-select: none;\n"+"  user-select: none;\n"+"}\n";t.appendChild(e)}if(!HTMLElement.prototype.hasOwnProperty("inert")){var l=new c(document);Object.defineProperty(HTMLElement.prototype,"inert",{enumerable:true,get:function t(){return this.hasAttribute("inert")},set:function t(e){l.setInert(this,e)}})}})();function c(t){return!Array.isArray?b(t)==="[object Array]":Array.isArray(t)}const a=1/0;function h(t){if(typeof t=="string"){return t}let e=t+"";return e=="0"&&1/t==-a?"-0":e}function l(t){return t==null?"":h(t)}function u(t){return typeof t==="string"}function d(t){return typeof t==="number"}function f(t){return t===true||t===false||v(t)&&b(t)=="[object Boolean]"}function g(t){return typeof t==="object"}function v(t){return g(t)&&t!==null}function p(t){return t!==undefined&&t!==null}function m(t){return!t.trim().length}function b(t){return t==null?t===undefined?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const y="Extended search is not available";const w="Incorrect 'index' type";const x=t=>`Invalid value for key ${t}`;const _=t=>`Pattern length exceeds max of ${t}.`;const M=t=>`Missing ${t} property in key`;const k=t=>`Property 'weight' in key '${t}' must be a positive integer`;const L=Object.prototype.hasOwnProperty;class S{constructor(t){this._keys=[];this._keyMap={};let e=0;t.forEach((t=>{let i=$(t);e+=i.weight;this._keys.push(i);this._keyMap[i.id]=i;e+=i.weight}));this._keys.forEach((t=>{t.weight/=e}))}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function $(t){let e=null;let i=null;let s=null;let n=1;let r=null;if(u(t)||c(t)){s=t;e=N(t);i=A(t)}else{if(!L.call(t,"name")){throw new Error(M("name"))}const o=t.name;s=o;if(L.call(t,"weight")){n=t.weight;if(n<=0){throw new Error(k(o))}}e=N(o);i=A(o);r=t.getFn}return{path:e,id:i,weight:n,src:s,getFn:r}}function N(t){return c(t)?t:t.split(".")}function A(t){return c(t)?t.join("."):t}function I(t,e){let i=[];let s=false;const n=(t,e,r)=>{if(!p(t)){return}if(!e[r]){i.push(t)}else{let o=e[r];const a=t[o];if(!p(a)){return}if(r===e.length-1&&(u(a)||d(a)||f(a))){i.push(l(a))}else if(c(a)){s=true;for(let t=0,i=a.length;t<i;t+=1){n(a[t],e,r+1)}}else if(e.length){n(a,e,r+1)}}};n(t,u(e)?e.split("."):e,0);return s?i:i[0]}const C={includeMatches:false,findAllMatches:false,minMatchCharLength:1};const R={isCaseSensitive:false,includeScore:false,keys:[],shouldSort:true,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1};const j={location:0,threshold:.6,distance:100};const E={useExtendedSearch:false,getFn:I,ignoreLocation:false,ignoreFieldNorm:false,fieldNormWeight:1};var F={...R,...C,...j,...E};const O=/[^ ]+/g;function T(t=1,e=3){const i=new Map;const s=Math.pow(10,e);return{get(e){const n=e.match(O).length;if(i.has(n)){return i.get(n)}const r=1/Math.pow(n,.5*t);const o=parseFloat(Math.round(r*s)/s);i.set(n,o);return o},clear(){i.clear()}}}class D{constructor({getFn:t=F.getFn,fieldNormWeight:e=F.fieldNormWeight}={}){this.norm=T(e,3);this.getFn=t;this.isCreated=false;this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t;this._keysMap={};t.forEach(((t,e)=>{this._keysMap[t.id]=e}))}create(){if(this.isCreated||!this.docs.length){return}this.isCreated=true;if(u(this.docs[0])){this.docs.forEach(((t,e)=>{this._addString(t,e)}))}else{this.docs.forEach(((t,e)=>{this._addObject(t,e)}))}this.norm.clear()}add(t){const e=this.size();if(u(t)){this._addString(t,e)}else{this._addObject(t,e)}}removeAt(t){this.records.splice(t,1);for(let e=t,i=this.size();e<i;e+=1){this.records[e].i-=1}}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!p(t)||m(t)){return}let i={v:t,i:e,n:this.norm.get(t)};this.records.push(i)}_addObject(t,e){let i={i:e,$:{}};this.keys.forEach(((e,s)=>{let n=e.getFn?e.getFn(t):this.getFn(t,e.path);if(!p(n)){return}if(c(n)){let t=[];const e=[{nestedArrIndex:-1,value:n}];while(e.length){const{nestedArrIndex:i,value:s}=e.pop();if(!p(s)){continue}if(u(s)&&!m(s)){let e={v:s,i,n:this.norm.get(s)};t.push(e)}else if(c(s)){s.forEach(((t,i)=>{e.push({nestedArrIndex:i,value:t})}))}else;}i.$[s]=t}else if(u(n)&&!m(n)){let t={v:n,n:this.norm.get(n)};i.$[s]=t}}));this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function W(t,e,{getFn:i=F.getFn,fieldNormWeight:s=F.fieldNormWeight}={}){const n=new D({getFn:i,fieldNormWeight:s});n.setKeys(t.map($));n.setSources(e);n.create();return n}function z(t,{getFn:e=F.getFn,fieldNormWeight:i=F.fieldNormWeight}={}){const{keys:s,records:n}=t;const r=new D({getFn:e,fieldNormWeight:i});r.setKeys(s);r.setIndexRecords(n);return r}function H(t,{errors:e=0,currentLocation:i=0,expectedLocation:s=0,distance:n=F.distance,ignoreLocation:r=F.ignoreLocation}={}){const o=e/t.length;if(r){return o}const c=Math.abs(s-i);if(!n){return c?1:o}return o+c/n}function P(t=[],e=F.minMatchCharLength){let i=[];let s=-1;let n=-1;let r=0;for(let o=t.length;r<o;r+=1){let o=t[r];if(o&&s===-1){s=r}else if(!o&&s!==-1){n=r-1;if(n-s+1>=e){i.push([s,n])}s=-1}}if(t[r-1]&&r-s>=e){i.push([s,r-1])}return i}const U=32;function J(t,e,i,{location:s=F.location,distance:n=F.distance,threshold:r=F.threshold,findAllMatches:o=F.findAllMatches,minMatchCharLength:c=F.minMatchCharLength,includeMatches:a=F.includeMatches,ignoreLocation:h=F.ignoreLocation}={}){if(e.length>U){throw new Error(_(U))}const l=e.length;const u=t.length;const d=Math.max(0,Math.min(s,u));let f=r;let g=d;const v=c>1||a;const p=v?Array(u):[];let m;while((m=t.indexOf(e,g))>-1){let t=H(e,{currentLocation:m,expectedLocation:d,distance:n,ignoreLocation:h});f=Math.min(t,f);g=m+l;if(v){let t=0;while(t<l){p[m+t]=1;t+=1}}}g=-1;let b=[];let y=1;let w=l+u;const x=1<<l-1;for(let s=0;s<l;s+=1){let r=0;let c=w;while(r<c){const t=H(e,{errors:s,currentLocation:d+c,expectedLocation:d,distance:n,ignoreLocation:h});if(t<=f){r=c}else{w=c}c=Math.floor((w-r)/2+r)}w=c;let a=Math.max(1,d-c+1);let m=o?u:Math.min(d+c,u)+l;let _=Array(m+2);_[m+1]=(1<<s)-1;for(let r=m;r>=a;r-=1){let o=r-1;let c=i[t.charAt(o)];if(v){p[o]=+!!c}_[r]=(_[r+1]<<1|1)&c;if(s){_[r]|=(b[r+1]|b[r])<<1|1|b[r+1]}if(_[r]&x){y=H(e,{errors:s,currentLocation:o,expectedLocation:d,distance:n,ignoreLocation:h});if(y<=f){f=y;g=o;if(g<=d){break}a=Math.max(1,2*d-g)}}}const M=H(e,{errors:s+1,currentLocation:d,expectedLocation:d,distance:n,ignoreLocation:h});if(M>f){break}b=_}const M={isMatch:g>=0,score:Math.max(.001,y)};if(v){const t=P(p,c);if(!t.length){M.isMatch=false}else if(a){M.indices=t}}return M}function K(t){let e={};for(let i=0,s=t.length;i<s;i+=1){const n=t.charAt(i);e[n]=(e[n]||0)|1<<s-i-1}return e}class B{constructor(t,{location:e=F.location,threshold:i=F.threshold,distance:s=F.distance,includeMatches:n=F.includeMatches,findAllMatches:r=F.findAllMatches,minMatchCharLength:o=F.minMatchCharLength,isCaseSensitive:c=F.isCaseSensitive,ignoreLocation:a=F.ignoreLocation}={}){this.options={location:e,threshold:i,distance:s,includeMatches:n,findAllMatches:r,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:a};this.pattern=c?t:t.toLowerCase();this.chunks=[];if(!this.pattern.length){return}const h=(t,e)=>{this.chunks.push({pattern:t,alphabet:K(t),startIndex:e})};const l=this.pattern.length;if(l>U){let t=0;const e=l%U;const i=l-e;while(t<i){h(this.pattern.substr(t,U),t);t+=U}if(e){const t=l-U;h(this.pattern.substr(t),t)}}else{h(this.pattern,0)}}searchIn(t){const{isCaseSensitive:e,includeMatches:i}=this.options;if(!e){t=t.toLowerCase()}if(this.pattern===t){let e={isMatch:true,score:0};if(i){e.indices=[[0,t.length-1]]}return e}const{location:s,distance:n,threshold:r,findAllMatches:o,minMatchCharLength:c,ignoreLocation:a}=this.options;let h=[];let l=0;let u=false;this.chunks.forEach((({pattern:e,alphabet:d,startIndex:f})=>{const{isMatch:g,score:v,indices:p}=J(t,e,d,{location:s+f,distance:n,threshold:r,findAllMatches:o,minMatchCharLength:c,includeMatches:i,ignoreLocation:a});if(g){u=true}l+=v;if(g&&p){h=[...h,...p]}}));let d={isMatch:u,score:u?l/this.chunks.length:1};if(u&&i){d.indices=h}return d}}class q{constructor(t){this.pattern=t}static isMultiMatch(t){return V(t,this.multiRegex)}static isSingleMatch(t){return V(t,this.singleRegex)}search(){}}function V(t,e){const i=t.match(e);return i?i[1]:null}class Y extends q{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class G extends q{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const e=t.indexOf(this.pattern);const i=e===-1;return{isMatch:i,score:i?0:1,indices:[0,t.length-1]}}}class Q extends q{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class X extends q{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class Z extends q{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class tt extends q{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class et extends q{constructor(t,{location:e=F.location,threshold:i=F.threshold,distance:s=F.distance,includeMatches:n=F.includeMatches,findAllMatches:r=F.findAllMatches,minMatchCharLength:o=F.minMatchCharLength,isCaseSensitive:c=F.isCaseSensitive,ignoreLocation:a=F.ignoreLocation}={}){super(t);this._bitapSearch=new B(t,{location:e,threshold:i,distance:s,includeMatches:n,findAllMatches:r,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class it extends q{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e=0;let i;const s=[];const n=this.pattern.length;while((i=t.indexOf(this.pattern,e))>-1){e=i+n;s.push([i,e-1])}const r=!!s.length;return{isMatch:r,score:r?0:1,indices:s}}}const st=[Y,it,Q,X,tt,Z,G,et];const nt=st.length;const rt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const ot="|";function ct(t,e={}){return t.split(ot).map((t=>{let i=t.trim().split(rt).filter((t=>t&&!!t.trim()));let s=[];for(let t=0,n=i.length;t<n;t+=1){const n=i[t];let r=false;let o=-1;while(!r&&++o<nt){const t=st[o];let i=t.isMultiMatch(n);if(i){s.push(new t(i,e));r=true}}if(r){continue}o=-1;while(++o<nt){const t=st[o];let i=t.isSingleMatch(n);if(i){s.push(new t(i,e));break}}}return s}))}const at=new Set([et.type,it.type]);class ht{constructor(t,{isCaseSensitive:e=F.isCaseSensitive,includeMatches:i=F.includeMatches,minMatchCharLength:s=F.minMatchCharLength,ignoreLocation:n=F.ignoreLocation,findAllMatches:r=F.findAllMatches,location:o=F.location,threshold:c=F.threshold,distance:a=F.distance}={}){this.query=null;this.options={isCaseSensitive:e,includeMatches:i,minMatchCharLength:s,findAllMatches:r,ignoreLocation:n,location:o,threshold:c,distance:a};this.pattern=e?t:t.toLowerCase();this.query=ct(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e){return{isMatch:false,score:1}}const{includeMatches:i,isCaseSensitive:s}=this.options;t=s?t:t.toLowerCase();let n=0;let r=[];let o=0;for(let s=0,c=e.length;s<c;s+=1){const c=e[s];r.length=0;n=0;for(let e=0,s=c.length;e<s;e+=1){const s=c[e];const{isMatch:a,indices:h,score:l}=s.search(t);if(a){n+=1;o+=l;if(i){const t=s.constructor.type;if(at.has(t)){r=[...r,...h]}else{r.push(h)}}}else{o=0;n=0;r.length=0;break}}if(n){let t={isMatch:true,score:o/n};if(i){t.indices=r}return t}}return{isMatch:false,score:1}}}const lt=[];function ut(...t){lt.push(...t)}function dt(t,e){for(let i=0,s=lt.length;i<s;i+=1){let s=lt[i];if(s.condition(t,e)){return new s(t,e)}}return new B(t,e)}const ft={AND:"$and",OR:"$or"};const gt={PATH:"$path",PATTERN:"$val"};const vt=t=>!!(t[ft.AND]||t[ft.OR]);const pt=t=>!!t[gt.PATH];const mt=t=>!c(t)&&g(t)&&!vt(t);const bt=t=>({[ft.AND]:Object.keys(t).map((e=>({[e]:t[e]})))});function yt(t,e,{auto:i=true}={}){const s=t=>{let n=Object.keys(t);const r=pt(t);if(!r&&n.length>1&&!vt(t)){return s(bt(t))}if(mt(t)){const s=r?t[gt.PATH]:n[0];const o=r?t[gt.PATTERN]:t[s];if(!u(o)){throw new Error(x(s))}const c={keyId:A(s),pattern:o};if(i){c.searcher=dt(o,e)}return c}let o={children:[],operator:n[0]};n.forEach((e=>{const i=t[e];if(c(i)){i.forEach((t=>{o.children.push(s(t))}))}}));return o};if(!vt(t)){t=bt(t)}return s(t)}function wt(t,{ignoreFieldNorm:e=F.ignoreFieldNorm}){t.forEach((t=>{let i=1;t.matches.forEach((({key:t,norm:s,score:n})=>{const r=t?t.weight:null;i*=Math.pow(n===0&&r?Number.EPSILON:n,(r||1)*(e?1:s))}));t.score=i}))}function xt(t,e){const i=t.matches;e.matches=[];if(!p(i)){return}i.forEach((t=>{if(!p(t.indices)||!t.indices.length){return}const{indices:i,value:s}=t;let n={indices:i,value:s};if(t.key){n.key=t.key.src}if(t.idx>-1){n.refIndex=t.idx}e.matches.push(n)}))}function _t(t,e){e.score=t.score}function Mt(t,e,{includeMatches:i=F.includeMatches,includeScore:s=F.includeScore}={}){const n=[];if(i)n.push(xt);if(s)n.push(_t);return t.map((t=>{const{idx:i}=t;const s={item:e[i],refIndex:i};if(n.length){n.forEach((e=>{e(t,s)}))}return s}))}class kt{constructor(t,e={},i){this.options={...F,...e};if(this.options.useExtendedSearch&&!true){throw new Error(y)}this._keyStore=new S(this.options.keys);this.setCollection(t,i)}setCollection(t,e){this._docs=t;if(e&&!(e instanceof D)){throw new Error(w)}this._myIndex=e||W(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){if(!p(t)){return}this._docs.push(t);this._myIndex.add(t)}remove(t=(()=>false)){const e=[];for(let i=0,s=this._docs.length;i<s;i+=1){const n=this._docs[i];if(t(n,i)){this.removeAt(i);i-=1;s-=1;e.push(n)}}return e}removeAt(t){this._docs.splice(t,1);this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:i,includeScore:s,shouldSort:n,sortFn:r,ignoreFieldNorm:o}=this.options;let c=u(t)?u(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);wt(c,{ignoreFieldNorm:o});if(n){c.sort(r)}if(d(e)&&e>-1){c=c.slice(0,e)}return Mt(c,this._docs,{includeMatches:i,includeScore:s})}_searchStringList(t){const e=dt(t,this.options);const{records:i}=this._myIndex;const s=[];i.forEach((({v:t,i,n})=>{if(!p(t)){return}const{isMatch:r,score:o,indices:c}=e.searchIn(t);if(r){s.push({item:t,idx:i,matches:[{score:o,value:t,norm:n,indices:c}]})}}));return s}_searchLogical(t){const e=yt(t,this.options);const i=(t,e,s)=>{if(!t.children){const{keyId:i,searcher:n}=t;const r=this._findMatches({key:this._keyStore.get(i),value:this._myIndex.getValueForItemAtKeyId(e,i),searcher:n});if(r&&r.length){return[{idx:s,item:e,matches:r}]}return[]}const n=[];for(let r=0,o=t.children.length;r<o;r+=1){const o=t.children[r];const c=i(o,e,s);if(c.length){n.push(...c)}else if(t.operator===ft.AND){return[]}}return n};const s=this._myIndex.records;const n={};const r=[];s.forEach((({$:t,i:s})=>{if(p(t)){let o=i(e,t,s);if(o.length){if(!n[s]){n[s]={idx:s,item:t,matches:[]};r.push(n[s])}o.forEach((({matches:t})=>{n[s].matches.push(...t)}))}}}));return r}_searchObjectList(t){const e=dt(t,this.options);const{keys:i,records:s}=this._myIndex;const n=[];s.forEach((({$:t,i:s})=>{if(!p(t)){return}let r=[];i.forEach(((i,s)=>{r.push(...this._findMatches({key:i,value:t[s],searcher:e}))}));if(r.length){n.push({idx:s,item:t,matches:r})}}));return n}_findMatches({key:t,value:e,searcher:i}){if(!p(e)){return[]}let s=[];if(c(e)){e.forEach((({v:e,i:n,n:r})=>{if(!p(e)){return}const{isMatch:o,score:c,indices:a}=i.searchIn(e);if(o){s.push({score:c,key:t,value:e,idx:n,norm:r,indices:a})}}))}else{const{v:n,n:r}=e;const{isMatch:o,score:c,indices:a}=i.searchIn(n);if(o){s.push({score:c,key:t,value:n,norm:r,indices:a})}}return s}}kt.version="6.6.2";kt.createIndex=W;kt.parseIndex=z;kt.config=F;{kt.parseQuery=yt}{ut(ht)}const Lt='.docs-search{align-items:center;display:flex;height:100%;justify-content:center;opacity:0;position:fixed;top:0;transition:opacity .2s linear,visibility 0s linear .2s;visibility:hidden;width:100%;z-index:2}.docs-search--active{opacity:1;transition:opacity .2s linear;visibility:visible}.docs-search__backdrop{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-appearance:none;appearance:none;background-color:var(--ld-col-neutral-900);border:0;cursor:pointer;height:100%;left:0;opacity:.8;padding:0;position:absolute;top:0;width:100%;z-index:-1}.docs-search__content{height:75vh;max-width:30rem;min-width:18rem;pointer-events:none;width:calc(100% - var(--ld-sp-40))}.docs-search__input{pointer-events:all;width:100%}.docs-search__input:before{box-shadow:none!important}.docs-search__input[aria-expanded=true]{border-bottom-left-radius:0;border-bottom-right-radius:0}.docs-search__input .docs-search__input-icon{margin-left:var(--ld-sp-16)}.docs-search__input-icon{height:var(--ld-sp-16);width:var(--ld-sp-16)}.docs-search__results{background-color:var(--ld-col-wht);border-bottom-left-radius:var(--ld-br-m);border-bottom-right-radius:var(--ld-br-m);list-style:none;max-height:calc(100% - var(--ld-sp-40));overflow-x:hidden;overflow-y:auto;overflow:hidden auto;pointer-events:all;transform:translateY(-1px)}.docs-search__results--expanded:before{background-color:var(--ld-col-neutral-100);content:"";display:block;height:var(--ld-sp-1);margin:0 auto;width:calc(100% - var(--ld-sp-32))}.docs-search__result{font:var(--ld-typo-body-m)}.docs-search__result a{color:var(--ld-col-neutral-900);display:block;outline:none;padding:var(--ld-sp-16);text-decoration:none}.docs-search__result a:focus:focus-visible{background-color:var(--ld-col-neutral-050)}@media (hover:hover){.docs-search__result a:where(:hover){background-color:var(--ld-col-neutral-010)}}.docs-search__result a:active,.docs-search__result a:active:focus-visible{background-color:var(--ld-col-neutral-050)}.docs-search__result-crumbs{display:block}.docs-search__result-crumb:not(:last-of-type){margin-right:var(--ld-sp-4)}.docs-search__result-crumb:not(:last-of-type):after{align-items:center;background-image:url(dist/build/assets/chevron-components-dark.svg);background-repeat:no-repeat;content:"";display:inline-flex;height:1.375rem;justify-content:center;margin-left:var(--ld-sp-12);width:.8rem}';const St=class{constructor(e){t(this,e);this.results=[];this.isActive=undefined}handleClick(t){if(t.target.id==="docs-search-backdrop"){t.preventDefault();this.onSearchClose()}}handleEscapeDown(t){if(!this.isActive){return}if(t.key==="Escape"){t.stopImmediatePropagation();this.onSearchClose()}}handleKeyDown(t){var e,i;if(!this.isActive){return}switch(t.key){case"ArrowDown":{t.preventDefault();if(document.activeElement.closest(".docs-search__input")===this.searchInput){(e=this.searchResults.querySelector(".docs-search__result > a"))===null||e===void 0?void 0:e.focus();return}const s=(i=document.activeElement.closest(".docs-search__result"))===null||i===void 0?void 0:i.nextElementSibling;if(s===null||s===void 0?void 0:s.classList.contains("docs-search__result")){s.querySelector("a").focus()}return}case"ArrowUp":{t.preventDefault();const e=document.activeElement.closest(".docs-search__result");if(e){const t=e.previousElementSibling;if(t===null||t===void 0?void 0:t.classList.contains("docs-search__result")){t.querySelector("a").focus()}else{this.searchInput.shadowRoot.querySelector("input").focus();this.searchResults.scrollTo(0,0)}}return}case" ":{const e=document.activeElement.closest(".docs-search__result");if(e){t.preventDefault();window.location.href=e.querySelector("a").href}return}}}handleSubmit(t){t.preventDefault()}handleChange(){const t=this.fuse.search(this.searchInput.value);this.results=t}componentWillLoad(){this.fuse=new kt(window["__docsSearchIndex__"],{keys:[{name:"title",weight:.4},{name:"tags",weight:.35},{name:"headings",weight:.25}],distance:1e4,threshold:.3})}componentDidLoad(){s.on(n.open,this.onSearchOpen.bind(this))}onSearchOpen(){document.getElementById("docs-layout").setAttribute("inert","true");this.isActive=true;this.searchInput.value="";setTimeout((()=>{this.searchInput.focusInner()}),200)}onSearchClose(){document.getElementById("docs-layout").removeAttribute("inert");this.isActive=false;this.results=[];s.emit(n.close)}render(){return e(i,{inert:!this.isActive,class:`docs-search${this.isActive?" docs-search--active":""}`},e("div",{class:"docs-search__content"},e("form",{role:"search",autocomplete:"off"},e("ld-input",{size:"lg","aria-expanded":this.results.length?"true":"false","aria-controls":"docs-search-results-list",onInput:this.handleChange.bind(this),placeholder:"Search in documentation...",class:"docs-search__input",id:"docs-search-input",ref:t=>this.searchInput=t,type:"search",spellcheck:false},e("svg",{"aria-hidden":"true",slot:"start",class:"docs-search__input-icon",fill:"none",viewBox:"0 0 18 19"},e("ellipse",{cx:"7.54523",cy:"7.74543",stroke:"#091734","stroke-width":"2",rx:"6.54523",ry:"6.54548"}),e("path",{stroke:"#091734","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12.6367 12.8362l4.3635 4.3636"})))),e("ol",{id:"docs-search-results-list",class:`docs-search__results${this.results.length?" docs-search__results--expanded":""}`,"aria-label":"Search results",ref:t=>this.searchResults=t},this.results.length?this.results.map((t=>{if(!t.item.breadcrumbs.length)return"";return e("li",{class:"docs-search__result",key:t.refIndex},e("a",{href:t.item.url},e("b",null,t.item.title),e("span",{class:"docs-search__result-crumbs"},t.item.breadcrumbs.map((t=>e("span",{class:"docs-search__result-crumb"},t))))))})):"")),e("button",{id:"docs-search-backdrop",class:"docs-search__backdrop","aria-label":"Close search"}))}static get assetsDirs(){return["assets"]}};St.style=Lt;export{St as docs_search};
//# sourceMappingURL=p-ad8ff906.entry.js.map