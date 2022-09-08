import{r as i,c as s,h as t,H as a,g as e}from"./p-e55c60b3.js";import{g as l}from"./p-891005fd.js";import{g as d}from"./p-20ac0292.js";const n=class{constructor(t){i(this,t),this.ldSidenavCollapsedChange=s(this,"ldSidenavCollapsedChange",7),this.ldSidenavOpenChange=s(this,"ldSidenavOpenChange",7),this.ldSidenavBreakpointChange=s(this,"ldSidenavBreakpointChange",7),this.align="left",this.breakpoint="23.4375rem",this.collapsed=!1,this.collapseTrigger="toggle",this.collapsible=!1,this.expandTrigger="toggle",this.label="Side navigation",this.narrow=!1,this.open=!1,this.toggleTransitionDisabled=!1,this.fullyCollapsible=!1,this.hasActiveSubnav=!1,this.hasShadowBottom=!1,this.hasShadowTop=!1,this.transitions=!1,this.toFocus=void 0,this.focusTimeout=void 0,this.updateFocus=()=>{if(clearTimeout(this.focusTimeout),this.toFocus){if(-1===this.toFocus.tabIndex||"hidden"===window.getComputedStyle(this.toFocus).visibility)return void(this.focusTimeout=setTimeout(this.updateFocus,10));this.toFocus.focus(),this.toFocus=void 0}},this.toggleCollapsedState=()=>{this.collapsed=!this.collapsed},this.activeSubnavContainsIcons=()=>{const i=this.el.querySelector("ld-sidenav-slider"),s=i.currentSubnav?this.el.querySelector(`#${i.currentSubnav}`):i,t=Array.from(s.children).filter((i=>"LD-SIDENAV-NAVITEM"===i.tagName&&!i.mode)),a=Array.from(s.querySelectorAll('ld-sidenav-accordion > ld-sidenav-navitem[slot="toggle"]')).filter((i=>!i.mode));return!!(t.length+a.length)},this.isToggleOutside=i=>"LD-SIDENAV-TOGGLE-OUTSIDE"===(null==i?void 0:i.tagName),this.onTransitionEnd=i=>{if(i.target===this.el&&(this.transitions=!0,this.fullyCollapsible))if(this.collapsed){const i=this.el.previousElementSibling;this.isToggleOutside(i)&&i.focusInner()}else d(this.el).focus()},this.onMatchMediaChange=i=>{this.closable=i.matches,this.transitions=!1,this.closable&&this.collapsible&&(this.collapsed=!0),this.ldSidenavBreakpointChange.emit(this.closable)}}async toggle(){this.closable?this.open=!this.open:this.toggleCollapsedState()}onCollapsedChange(i){this.ldSidenavCollapsedChange.emit({collapsed:i,fully:this.fullyCollapsible}),i&&(this.open=!1)}onOpenChange(i){this.ldSidenavOpenChange.emit(i),!i&&this.collapsible&&(this.collapsed=!0)}updateFullyCollapsible(){this.fullyCollapsible=this.collapsible&&(!this.narrow||!this.activeSubnavContainsIcons())}handleClickOutside(i){["clickoutside","mouseout"].includes(this.collapseTrigger)&&i.target.closest("ld-sidenav")!==this.el&&(this.collapsed=this.collapsible)}handleMouseOut(i){"mouseout"===this.collapseTrigger&&i.relatedTarget&&i.relatedTarget.closest("ld-sidenav")!==this.el&&(this.collapsed=this.collapsible)}handleMouseIn(){(this.fullyCollapsible||"mouseenter"===this.expandTrigger)&&(this.collapsed=!1)}handleOpen(){this.open=!0}handleClose(){clearTimeout(this.focusTimeout),this.open=!1}handleSlideBack(){clearTimeout(this.focusTimeout);const i=Array.from(this.el.querySelectorAll(".ld-sidenav-subnav--active")).pop(),s=null==i?void 0:i.id,t=null==i?void 0:i.parentElement;this.el.querySelector("ld-sidenav-slider").navigateBack(),this.toFocus=null==t?void 0:t.querySelector(`[to='${s}']`).shadowRoot.querySelector('[part*="focusable"]'),this.collapsed=!1}slideToHandler(){var i;clearTimeout(this.focusTimeout);const s=null===(i=this.el.querySelector("ld-sidenav-back"))||void 0===i?void 0:i.shadowRoot.querySelector(".ld-sidenav-back");this.toFocus=s,this.updateFocus()}slideChangeHandler(i){var s,t;clearTimeout(this.focusTimeout),null===(s=this.el.querySelector("ld-sidenav-back"))||void 0===s||s.updateLabel(null===(t=i.detail)||void 0===t?void 0:t.label),this.hasActiveSubnav=!!i.detail,this.updateFullyCollapsible(),this.updateFocus()}handleKeyDown(i){const s=document.activeElement.closest("ld-sidenav")===this.el;if(s&&"Tab"===i.key&&!i.shiftKey&&document.activeElement===this.el.querySelector("ld-sidenav-back")){const{currentSubnav:i}=this.el.querySelector("ld-sidenav-slider");if(i){const s=d(this.el.querySelector(`#${i}`));setTimeout((async()=>{"focusInner"in s?await s.focusInner():s.focus()}))}}if(!s&&!this.closable)return;const t=this.el.querySelector("ld-sidenav-slider");if("Escape"===i.key){if(!t&&this.closable)return void(this.open=!1);this.hasActiveSubnav?this.handleSlideBack():this.closable&&(this.open=!1)}}async handleFocusout(i){const s=i.relatedTarget,t=(null==s?void 0:s.closest("ld-sidenav"))===this.el;if(t||null===s||"mouseout"===this.collapseTrigger&&(this.collapsed=this.collapsible),"mouseenter"===this.expandTrigger&&t&&(this.collapsed=!1),!this.closable||!this.open)return;if(void 0===this.trapFocus)return;if(t)return;if(""!==this.trapFocus&&(!s||(null==s?void 0:s.matches(this.trapFocus))))return;const a=i.target,e=a.closest("ld-sidenav")===this.el,l=""!==this.trapFocus&&!!a.closest(this.trapFocus);if(!e&&!l)return;const n=d(this.el),o=""===this.trapFocus?[n]:Array.from(document.querySelectorAll(this.trapFocus)),r=o.find(d),v=n===a,h=r===a,c=Array.from(this.el.querySelectorAll("*")).reverse().find(d),p=o.reverse().find(d),u=e?v?p:r:h?c:n;u&&("focusInner"in u?await u.focusInner():null==u||u.focus())}handleHeaderToggleClick(){this.toggle()}componentWillLoad(){this.mediaQuery=window.matchMedia(`(max-width: ${this.breakpoint})`),this.mediaQuery.addEventListener("change",this.onMatchMediaChange),this.closable=this.mediaQuery.matches,this.updateFullyCollapsible()}componentDidLoad(){this.ldSidenavCollapsedChange.emit({collapsed:this.collapsible&&this.collapsed,fully:this.fullyCollapsible}),this.ldSidenavOpenChange.emit(this.open),this.ldSidenavBreakpointChange.emit(this.closable),setTimeout((()=>{this.transitions=!0}))}disconnectedCallback(){var i;null===(i=this.mediaQuery)||void 0===i||i.removeEventListener("change",this.onMatchMediaChange)}render(){return t(a,{onTransitionEnd:this.onTransitionEnd,class:l(["ld-sidenav","right"===this.align&&"ld-sidenav--right",this.transitions&&"ld-sidenav--transitions",this.closable&&"ld-sidenav--closable",this.collapsible&&this.collapsed&&"ld-sidenav--collapsed",this.collapsible&&"ld-sidenav--collapsible",this.fullyCollapsible&&"ld-sidenav--fully-collapsible",this.hasActiveSubnav&&"ld-sidenav--has-active-subnav",this.hasShadowTop&&"ld-sidenav--has-shadow-top",this.hasShadowBottom&&"ld-sidenav--has-shadow-bottom",this.open&&"ld-sidenav--open",this.toggleTransitionDisabled&&"ld-sidenav--toggle-transition-disabled"]),role:"navigation","aria-label":this.label},t("slot",{name:"header"}),t("div",{class:"ld-sidenav__content"},t("div",{class:"ld-sidenav__slot-container-top",part:"slot-container-top"},t("slot",{name:"top"})),t("ld-sidenav-scroller-internal",{class:"ld-sidenav__scroller",part:"scroll-container"},t("div",{class:"ld-sidenav__slot-container-default",part:"slot-container"},t("slot",null))),t("div",{class:"ld-sidenav__slot-container-bottom",part:"slot-container-bottom"},t("slot",{name:"bottom"}))),t("div",{onClick:this.toggle.bind(this),class:"ld-sidenav__fully-collapsed-click-area"}))}get el(){return e(this)}static get watchers(){return{collapsed:["onCollapsedChange"],open:["onOpenChange"],collapsible:["updateFullyCollapsible"],narrow:["updateFullyCollapsible"]}}};n.style=':host{--ld-sidenav-line-height:1.15;--ld-sidenav-padding-x:1rem;--ld-sidenav-padding-y:1rem;--ld-sidenav-padding:var(--ld-sidenav-padding-y) var(--ld-sidenav-padding-x);--ld-sidenav-toggle-size:var(--ld-sp-24);--ld-sidenav-toggle-top:calc(var(--ld-sidenav-padding-y)*2 + var(--ld-sidenav-navitem-icon-size) - var(--ld-sidenav-toggle-size)*0.5);--ld-sidenav-translate-x-delta:calc(var(--ld-sidenav-width) - var(--ld-sidenav-width-collapsed));--ld-sidenav-width:15.625rem;--ld-sidenav-width-collapsed:calc(var(--ld-sidenav-padding-x)*2 + var(--ld-sidenav-navitem-icon-size));--ld-sidenav-width-fully-collapsed:calc(var(--ld-sp-1)*-1);--ld-sidenav-navitem-active-indicator-border-width:0.1875rem;--ld-sidenav-navitem-icon-size:var(--ld-sp-32);--ld-sidenav-navitem-bg-inset:var(--ld-sp-6);--ld-sidenav-navitem-border-radius:var(--ld-br-l);--ld-sidenav-navitem-tertiary-indent:calc(var(--ld-sidenav-padding-x)*3 + 0.3125rem);--ld-sidenav-navitem-tertiary-width:calc(100% - var(--ld-sidenav-padding-x)*4 - 0.3125rem);--ld-sidenav-collapse-content-transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease;--ld-sidenav-transition-delay:0s;--ld-sidenav-transition-delay-collapse-expand:0s;--ld-sidenav-transition-duration:0.001s;--ld-sidenav-transition-duration-collapse-expand:0.001s;--ld-sidenav-translate-x-direction:1;--ld-sidenav-stack-to-top-transition:transform var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) ease;--ld-sidenav-bg-color:var(--ld-col-wht);--ld-sidenav-separator-line-bg-col:var(--ld-col-neutral-100);--ld-sidenav-subnav-bg-color:var(--ld-col-wht)}@media (prefers-reduced-motion:no-preference){:host(.ld-sidenav--transitions){--ld-sidenav-transition-duration:0.2s;--ld-sidenav-transition-duration-collapse-expand:0.2s;--ld-sidenav-transition-delay:0.1s;--ld-sidenav-transition-delay-collapse-expand:0.1s}}@media (prefers-reduced-motion:no-preference){:host(.ld-sidenav--toggle-transition-disabled){--ld-sidenav-transition-duration-collapse-expand:0.001s;--ld-sidenav-transition-delay-collapse-expand:0s}}:host{background-color:var(--ld-sidenav-bg-color);bottom:0;box-sizing:border-box;display:flex;flex-direction:column;font:var(--ld-typo-body-m);left:0;overflow:hidden;position:var(--ld-sidenav-position,fixed);text-align:left;top:0;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease;width:var(--ld-sidenav-width);z-index:0}:host:before{background-color:var(--ld-sidenav-separator-line-bg-col);bottom:0;content:"";position:absolute;right:0;top:0;width:var(--ld-sp-2);z-index:2}:host .ld-sidenav__content{transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear}:host(.ld-sidenav--closable:not(.ld-sidenav--open)) .ld-sidenav__content{transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,visibility 0s var(--ld-sidenav-transition-duration-collapse-expand) linear;visibility:hidden}:host(.ld-sidenav--collapsed:not(.ld-sidenav--closable)){transform:translateX(calc(var(--ld-sidenav-translate-x-direction)*(-100% + var(--ld-sidenav-width-collapsed))))}:host(.ld-sidenav--collapsed.ld-sidenav--fully-collapsible:not(.ld-sidenav--closable)){transform:translateX(calc(var(--ld-sidenav-translate-x-direction)*(-100% + var(--ld-sidenav-width-fully-collapsed))))}:host(.ld-sidenav--collapsed.ld-sidenav--fully-collapsible:not(.ld-sidenav--closable)) .ld-sidenav__content{opacity:0;visibility:hidden}:host(.ld-sidenav--collapsed.ld-sidenav--fully-collapsible.ld-sidenav--transitions:not(.ld-sidenav--closable)) .ld-sidenav__content{transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,visibility 0s var(--ld-sidenav-transition-duration-collapse-expand) linear}:host(.ld-sidenav--right){--ld-sidenav-translate-x-direction:-1;--ld-sidenav-translate-x-delta:0;left:unset;right:0}:host(.ld-sidenav--right):before{left:0;right:unset;transform:translateX(-50%) scaleX(1.5)}:host(.ld-sidenav--closable){--ld-sidenav-collapse-content-transition:none;--ld-sidenav-stack-to-top-transition:none;--ld-slider-navitem-move-up-closable:0;--ld-sidenav-translate-x-delta:0;transform:translateX(calc(var(--ld-sidenav-translate-x-direction)*-100%));width:100%}:host(.ld-sidenav--closable.ld-sidenav--open){transform:translateX(0)}:host ::slotted(ld-sidenav-navitem){margin-bottom:var(--ld-sidenav-padding-y)}:host ::slotted(ld-sidenav-navitem[slot=bottom]),:host ::slotted(ld-sidenav-navitem[slot=top]){margin-top:var(--ld-sidenav-padding-y)}:host ::slotted(ld-sidenav-heading){margin:var(--ld-sidenav-padding-y) 0}.ld-sidenav__toggle{-webkit-touch-callout:none;aspect-ratio:1;background-color:var(--ld-col-wht);border:0;border-radius:var(--ld-br-full);box-shadow:var(--ld-shadow-stacked);color:var(--ld-thm-primary);cursor:pointer;display:grid;outline-offset:var(--ld-sp-4);place-content:center;position:absolute;right:0;top:var(--ld-sidenav-toggle-top);touch-action:manipulation;transform:translateX(50%);width:var(--ld-sidenav-toggle-size);will-change:transform;z-index:1}.ld-sidenav__toggle:before{inset:0}.ld-sidenav__toggle:after,.ld-sidenav__toggle:before{border-radius:inherit;content:"";display:block;position:absolute}.ld-sidenav__toggle:after{inset:calc(var(--ld-sp-6)*-1)}.ld-sidenav__toggle:focus:focus-visible:not(:active),.ld-sidenav__toggle:hover:not(:active){box-shadow:var(--ld-shadow-sticky)}.ld-sidenav__toggle:where(:focus:focus-visible){color:var(--ld-thm-primary-hover)}.ld-sidenav__toggle:where(:focus:focus-visible):before{background-color:var(--ld-thm-primary-alpha-low)}@media (hover:hover){.ld-sidenav__toggle:where(:hover){color:var(--ld-thm-primary-hover)}}.ld-sidenav__toggle:where(:active),.ld-sidenav__toggle:where(:active:focus-visible){color:var(--ld-thm-primary-active)}:host(.ld-sidenav--right) .ld-sidenav__toggle{left:0;right:unset;transform:translateX(-50%)}.ld-sidenav__toggle-icon{position:relative;transform-origin:center}:host(.ld-sidenav--collapsed) .ld-sidenav__toggle-icon{transform:rotate(180deg)}:host(.ld-sidenav--right) .ld-sidenav__toggle-icon{transform:rotate(180deg)}:host(.ld-sidenav--right.ld-sidenav--collapsed) .ld-sidenav__toggle-icon{transform:none}.ld-sidenav__content{display:flex;flex-direction:column;height:100%;overflow:hidden;will-change:transform}.ld-sidenav__slot-container-default{height:100%;position:relative}.ld-sidenav__slot-container-bottom,.ld-sidenav__slot-container-top{background-color:var(--ld-sidenav-bg-color);position:relative;z-index:1}.ld-sidenav__slot-container-bottom:before,.ld-sidenav__slot-container-default:before,.ld-sidenav__slot-container-top:before{background-color:var(--ld-sidenav-subnav-bg-color);content:"";inset:0;opacity:0;position:absolute;transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear;visibility:visible;z-index:0}:host(.ld-sidenav--has-active-subnav) .ld-sidenav__slot-container-bottom:before,:host(.ld-sidenav--has-active-subnav) .ld-sidenav__slot-container-default:before,:host(.ld-sidenav--has-active-subnav) .ld-sidenav__slot-container-top:before{opacity:1}.ld-sidenav__fully-collapsed-click-area{display:none;inset:0;position:absolute;z-index:1}:host(.ld-sidenav--collapsed.ld-sidenav--fully-collapsible:not(.ld-sidenav--closable)) .ld-sidenav__fully-collapsed-click-area{display:block}';export{n as ld_sidenav}