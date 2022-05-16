import{r as i,c as t,h as s,H as a,g as e}from"./p-24a1cdec.js";import{g as d}from"./p-891005fd.js";const n=i=>{const t=[".hydrated","a[href]","area[href]",'input:not([type="hidden"]):not([type="radio"]):not(:disabled)','input[type="radio"]:not(:disabled)',"select:not(:disabled)","textarea:not(:disabled)","button:not(:disabled)","iframe","audio[controls]","video[controls]","[contenteditable]","[tabindex]"].map((i=>i+':not([tabindex^="-"])')).join(",");return[i,...Array.from(i.querySelectorAll(t))].find((i=>!i.classList.contains("hydrated")||Array.from(i.shadowRoot.querySelectorAll(t)).find(n)))},l=class{constructor(s){i(this,s),this.ldSidenavCollapsedChange=t(this,"ldSidenavCollapsedChange",7),this.ldSidenavOpenChange=t(this,"ldSidenavOpenChange",7),this.ldSidenavBreakpointChange=t(this,"ldSidenavBreakpointChange",7),this.align="left",this.breakpoint="23.4375rem",this.collapsed=!1,this.collapseTrigger="toggle",this.collapsible=!1,this.expandTrigger="toggle",this.label="Side navigation",this.labelCollapse="Collapse side navigation",this.labelExpand="Expand side navigation",this.narrow=!1,this.neutral=!1,this.open=!1,this.toggleTransitionDisabled=!1,this.fullyCollapsible=!1,this.hasActiveSubnav=!1,this.hasShadowBottom=!1,this.hasShadowTop=!1,this.initialized=!1,this.toFocus=void 0,this.focusTimeout=void 0,this.updateFocus=()=>{if(clearTimeout(this.focusTimeout),this.toFocus){if(-1===this.toFocus.tabIndex||"hidden"===window.getComputedStyle(this.toFocus).visibility)return void(this.focusTimeout=setTimeout(this.updateFocus,10));this.toFocus.focus(),this.toFocus=void 0}},this.toggleCollapsedState=()=>{this.collapsed=!this.collapsed},this.onMatchMediaChange=i=>{this.closable=i.matches,this.closable&&this.el.classList.remove("ld-sidenav--transitions"),this.ldSidenavBreakpointChange.emit(this.closable)}}onCollapsedChange(i){this.closable||this.el.classList.add("ld-sidenav--transitions"),this.ldSidenavCollapsedChange.emit(i)}onOpenChange(i){this.el.classList.add("ld-sidenav--transitions"),this.ldSidenavOpenChange.emit(i)}handleClickOutside(i){["clickoutside","mouseout"].includes(this.collapseTrigger)&&i.target.closest("ld-sidenav")!==this.el&&(this.collapsed=this.collapsible)}handleMouseOut(i){"mouseout"===this.collapseTrigger&&i.relatedTarget&&i.relatedTarget.closest("ld-sidenav")!==this.el&&(this.collapsed=this.collapsible)}handleMouseIn(){"mouseenter"===this.expandTrigger&&(this.collapsed=!1)}handleOpen(){this.open=!0}handleClose(){clearTimeout(this.focusTimeout),this.open=!1}handleSlideBack(){clearTimeout(this.focusTimeout);const i=Array.from(this.el.querySelectorAll(".ld-sidenav-subnav--active")).pop(),t=null==i?void 0:i.id,s=null==i?void 0:i.parentElement;this.el.querySelector("ld-sidenav-slider").navigateBack(),this.toFocus=null==s?void 0:s.querySelector(`[to='${t}']`).shadowRoot.querySelector('[part*="focusable"]')}slideToHandler(){var i;clearTimeout(this.focusTimeout);const t=null===(i=this.el.querySelector("ld-sidenav-back"))||void 0===i?void 0:i.shadowRoot.querySelector(".ld-sidenav-back");this.toFocus=t,this.updateFocus()}slideChangeHandler(i){var t,s;clearTimeout(this.focusTimeout),null===(t=this.el.querySelector("ld-sidenav-back"))||void 0===t||t.updateLabel(null===(s=i.detail)||void 0===s?void 0:s.label),this.hasActiveSubnav=!!i.detail;const a=i.detail?document.getElementById(i.detail.id):this.el.querySelector("ld-sidenav-slider"),e=!!Array.from(a.querySelectorAll("ld-sidenav-navitem")).find((({mode:i})=>!i));this.fullyCollapsible=!this.narrow||!e,this.updateFocus()}handleKeyDown(i){const t=document.activeElement.closest("ld-sidenav")===this.el;if(t&&"Tab"===i.key&&!i.shiftKey&&document.activeElement===this.el.querySelector("ld-sidenav-back")){const{currentSubnav:i}=this.el.querySelector("ld-sidenav-slider");if(i){const t=n(this.el.querySelector(`#${i}`));setTimeout((async()=>{"focusInner"in t?await t.focusInner():t.focus()}))}}if(!t&&!this.closable)return;const s=this.el.querySelector("ld-sidenav-slider");if("Escape"===i.key){if(!s&&this.closable)return void(this.open=!1);this.hasActiveSubnav?this.handleSlideBack():this.closable&&(this.open=!1)}}async handleFocusout(i){const t=i.relatedTarget,s=(null==t?void 0:t.closest("ld-sidenav"))===this.el;if(s||null===t||"mouseout"===this.collapseTrigger&&(this.collapsed=this.collapsible),"mouseenter"===this.expandTrigger&&s&&(this.collapsed=!1),!this.closable||!this.open)return;if(void 0===this.trapFocus)return;if(s)return;if(""!==this.trapFocus&&(!t||(null==t?void 0:t.matches(this.trapFocus))))return;const a=i.target,e=a.closest("ld-sidenav")===this.el,d=""!==this.trapFocus&&!!a.closest(this.trapFocus);if(!e&&!d)return;const l=n(this.el),o=""===this.trapFocus?[l]:Array.from(document.querySelectorAll(this.trapFocus)),r=o.find(n),v=l===a,h=r===a,c=Array.from(this.el.querySelectorAll("*")).reverse().find(n),p=o.reverse().find(n),u=e?v?p:r:h?c:l;u&&("focusInner"in u?await u.focusInner():null==u||u.focus())}componentWillLoad(){this.mediaQuery=window.matchMedia(`(max-width: ${this.breakpoint})`),this.mediaQuery.addEventListener("change",this.onMatchMediaChange),this.closable=this.mediaQuery.matches,this.fullyCollapsible=!this.narrow||!this.el.querySelector("ld-sidenav-slider")}componentDidLoad(){this.ldSidenavCollapsedChange.emit(this.collapsible&&this.collapsed),this.ldSidenavOpenChange.emit(this.open),this.ldSidenavBreakpointChange.emit(this.closable),setTimeout((()=>{this.initialized=!0}))}disconnectedCallback(){var i;null===(i=this.mediaQuery)||void 0===i||i.removeEventListener("change",this.onMatchMediaChange)}render(){return s(a,{class:d(["ld-sidenav","right"===this.align&&"ld-sidenav--right",this.initialized&&"ld-sidenav--initialized",this.closable&&"ld-sidenav--closable",this.collapsible&&this.collapsed&&"ld-sidenav--collapsed",this.collapsible&&"ld-sidenav--collapsible",this.fullyCollapsible&&"ld-sidenav--fully-collapsible",this.hasActiveSubnav&&"ld-sidenav--has-active-subnav",this.hasShadowTop&&"ld-sidenav--has-shadow-top",this.hasShadowBottom&&"ld-sidenav--has-shadow-bottom",this.neutral&&"ld-sidenav--neutral",this.open&&"ld-sidenav--open",this.toggleTransitionDisabled&&"ld-sidenav--toggle-transition-disabled"]),role:"navigation","aria-label":this.label},!this.closable&&this.collapsible&&s("button",{role:"switch","brand-color":!0,"aria-checked":this.collapsed?"false":"true",class:"ld-sidenav__toggle",onClick:this.toggleCollapsedState,part:"toggle"},s("ld-icon",{part:"toggle-icon",size:"sm",name:"arrow-left",class:"ld-sidenav__toggle-icon"}),s("ld-sr-only",null,this.collapsed?this.labelExpand:this.labelCollapse)),s("div",{class:"ld-sidenav__content"},s("div",{class:"ld-sidenav__slot-container-top",part:"slot-container-top"},s("slot",{name:"top"})),s("ld-sidenav-scroller-internal",{class:"ld-sidenav__scroller",part:"scroll-container"},s("div",{class:"ld-sidenav__slot-container-default",part:"slot-container"},s("slot",null))),s("div",{class:"ld-sidenav__slot-container-bottom",part:"slot-container-bottom"},s("slot",{name:"bottom"}))))}get el(){return e(this)}static get watchers(){return{collapsed:["onCollapsedChange"],open:["onOpenChange"]}}};l.style=':host{--ld-sidenav-closable-min-width:20rem;--ld-sidenav-padding-x:1rem;--ld-sidenav-padding-y:1rem;--ld-sidenav-padding:var(--ld-sidenav-padding-y) var(--ld-sidenav-padding-x);--ld-sidenav-toggle-size:var(--ld-sp-24);--ld-sidenav-toggle-top:calc(var(--ld-sidenav-padding-y)*2 + var(--ld-sidenav-navitem-icon-size) - var(--ld-sidenav-toggle-size)*0.5);--ld-sidenav-translate-x-delta:calc(var(--ld-sidenav-width) - var(--ld-sidenav-width-collapsed));--ld-sidenav-width:15.625rem;--ld-sidenav-width-collapsed:calc(var(--ld-sidenav-padding-x)*2 + var(--ld-sidenav-navitem-icon-size));--ld-sidenav-width-fully-collapsed:1rem;--ld-sidenav-navitem-icon-size:var(--ld-sp-32);--ld-sidenav-navitem-bg-inset:var(--ld-sp-6);--ld-sidenav-navitem-tertiary-indent:calc(var(--ld-sidenav-padding-x)*3 + 0.3125rem);--ld-sidenav-navitem-tertiary-width:calc(100% - var(--ld-sidenav-padding-x)*4 - 0.3125rem);--ld-sidenav-transition-duration:0.001s;--ld-sidenav-transition-duration-collapse-expand:0.001s;--ld-sidenav-transition-delay:0s;--ld-sidenav-transition-delay-collapse-expand:0s;--ld-sidenav-translate-x-direction:1;--ld-sidenav-bg-color:var(--ld-col-wht);--ld-sidenav-subnav-bg-color:var(--ld-thm-primary-alpha-lowest)}@media (prefers-reduced-motion:no-preference){:host(.ld-sidenav--initialized){--ld-sidenav-transition-duration:0.2s;--ld-sidenav-transition-duration-collapse-expand:0.2s;--ld-sidenav-transition-delay:0.1s;--ld-sidenav-transition-delay-collapse-expand:0.1s}}@media (prefers-reduced-motion:no-preference){:host(.ld-sidenav--toggle-transition-disabled){--ld-sidenav-transition-duration-collapse-expand:0.001s;--ld-sidenav-transition-delay-collapse-expand:0s}}:host(.ld-sidenav--neutral){--ld-sidenav-subnav-bg-color:var(--ld-col-neutral-050)}:host{background-color:var(--ld-sidenav-bg-color);bottom:0;box-sizing:border-box;left:0;position:var(--ld-sidenav-position,fixed);text-align:left;top:0;width:var(--ld-sidenav-width);z-index:0}:host:before{background-color:var(--ld-col-neutral-100);bottom:0;content:"";position:absolute;right:0;top:0;transform:translateX(50%) scaleX(1.5);width:var(--ld-sp-1);z-index:1}:host(.ld-sidenav--transitions){transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}:host(.ld-sidenav--transitions) .ld-sidenav__content{transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear}:host(.ld-sidenav--transitions.ld-sidenav--closable:not(.ld-sidenav--open)) .ld-sidenav__content{transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,visibility 0s var(--ld-sidenav-transition-duration-collapse-expand) linear;visibility:hidden}:host(.ld-sidenav--collapsed:not(.ld-sidenav--closable)){transform:translateX(calc(var(--ld-sidenav-translate-x-direction)*(-100% + var(--ld-sidenav-width-collapsed))))}:host(.ld-sidenav--collapsed.ld-sidenav--fully-collapsible:not(.ld-sidenav--closable)){transform:translateX(calc(var(--ld-sidenav-translate-x-direction)*(-100% + var(--ld-sidenav-width-fully-collapsed))))}:host(.ld-sidenav--collapsed.ld-sidenav--fully-collapsible:not(.ld-sidenav--closable)) .ld-sidenav__content{opacity:0;visibility:hidden}:host(.ld-sidenav--collapsed.ld-sidenav--fully-collapsible.ld-sidenav--transitions:not(.ld-sidenav--closable)) .ld-sidenav__content{transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,visibility 0s var(--ld-sidenav-transition-duration-collapse-expand) linear}:host(.ld-sidenav--right){--ld-sidenav-translate-x-direction:-1;--ld-sidenav-translate-x-delta:0;left:unset;right:0}:host(.ld-sidenav--right):before{left:0;right:unset;transform:translateX(-50%) scaleX(1.5)}:host(.ld-sidenav--closable){min-width:var(--ld-sidenav-closable-min-width);transform:translateX(calc(var(--ld-sidenav-translate-x-direction)*-100%));width:100%}:host(.ld-sidenav--closable.ld-sidenav--open){transform:translateX(0)}:host ::slotted(ld-sidenav-navitem){margin-bottom:var(--ld-sidenav-padding-y)}:host ::slotted(ld-sidenav-navitem[slot=bottom]),:host ::slotted(ld-sidenav-navitem[slot=top]){margin-top:var(--ld-sidenav-padding-y)}:host ::slotted(ld-sidenav-heading){margin:var(--ld-sidenav-padding-y) 0}.ld-sidenav__toggle{-webkit-touch-callout:none;aspect-ratio:1;background-color:var(--ld-col-wht);border:0;border-radius:var(--ld-br-full);box-shadow:var(--ld-shadow-stacked);color:var(--ld-thm-primary);cursor:pointer;display:grid;outline-offset:var(--ld-sp-4);place-content:center;position:absolute;right:0;top:var(--ld-sidenav-toggle-top);touch-action:manipulation;transform:translateX(50%);width:var(--ld-sidenav-toggle-size);will-change:transform;z-index:1}.ld-sidenav__toggle:before{inset:0}.ld-sidenav__toggle:after,.ld-sidenav__toggle:before{border-radius:inherit;content:"";display:block;position:absolute}.ld-sidenav__toggle:after{inset:calc(var(--ld-sp-6)*-1)}.ld-sidenav__toggle:focus:focus-visible:not(:active),.ld-sidenav__toggle:hover:not(:active){box-shadow:var(--ld-shadow-sticky)}.ld-sidenav__toggle:where(:focus:focus-visible){color:var(--ld-thm-primary-hover)}.ld-sidenav__toggle:where(:focus:focus-visible):before{background-color:var(--ld-thm-primary-alpha-low)}@media (hover:hover){.ld-sidenav__toggle:where(:hover){color:var(--ld-thm-primary-hover)}}.ld-sidenav__toggle:where(:active),.ld-sidenav__toggle:where(:active:focus-visible){color:var(--ld-thm-primary-active)}:host(.ld-sidenav--right) .ld-sidenav__toggle{left:0;right:unset;transform:translateX(-50%)}.ld-sidenav__toggle-icon{position:relative;transform-origin:center}:host(.ld-sidenav--collapsed) .ld-sidenav__toggle-icon{transform:rotate(180deg)}:host(.ld-sidenav--right) .ld-sidenav__toggle-icon{transform:rotate(180deg)}:host(.ld-sidenav--right.ld-sidenav--collapsed) .ld-sidenav__toggle-icon{transform:none}.ld-sidenav__content{display:flex;flex-direction:column;height:100%;overflow:hidden;will-change:transform}.ld-sidenav__slot-container-default{height:100%;position:relative}.ld-sidenav__slot-container-bottom,.ld-sidenav__slot-container-top{background-color:var(--ld-sidenav-bg-color);position:relative;z-index:1}.ld-sidenav__slot-container-bottom:before,.ld-sidenav__slot-container-default:before,.ld-sidenav__slot-container-top:before{background-color:var(--ld-sidenav-subnav-bg-color);content:"";inset:0;opacity:0;position:absolute;transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear;visibility:visible;z-index:0}:host(.ld-sidenav--has-active-subnav) .ld-sidenav__slot-container-bottom:before,:host(.ld-sidenav--has-active-subnav) .ld-sidenav__slot-container-default:before,:host(.ld-sidenav--has-active-subnav) .ld-sidenav__slot-container-top:before{opacity:1}';export{l as ld_sidenav}