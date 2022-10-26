import{r as e,c as a,h as d,H as i,g as r}from"./p-765a6fc5.js";import{g as l}from"./p-891005fd.js";const o=class{constructor(d){e(this,d),this.ldSidenavHeaderToggleClick=a(this,"ldSidenavHeaderToggleClick",7),this.labelCollapse="Collapse side navigation",this.labelExpand="Expand side navigation",this.handleToggleClick=()=>{this.ldSidenavHeaderToggleClick.emit()}}handleSidenavCollapsedChange(e){var a;e.target===this.sidenav&&(this.sidenavCollapsed=e.detail.collapsed,this.sidenavCollapsedFully=e.detail.collapsed&&e.detail.fully,null===(a=this.tooltipRef)||void 0===a||a.hideTooltip())}handleSidenavBreakpointChange(e){var a;e.target===this.sidenav&&(this.sidenavClosable=e.detail,null===(a=this.tooltipRef)||void 0===a||a.hideTooltip())}handleSidenavOpenChange(e){e.target===this.sidenav&&(this.sidenavOpen=this.sidenav.open)}async updateCollapsible(){this.sidenav&&(this.sidenavCollapsible=this.sidenav.collapsible)}componentWillLoad(){this.sidenav=this.el.closest("ld-sidenav"),this.sidenav&&(this.sidenavAlignement=this.sidenav.align,this.sidenavCollapsible=this.sidenav.collapsible,this.sidenavCollapsed=this.sidenav.collapsed)}render(){const e=l(["ld-sidenav-header",!this.sidenavOpen&&this.sidenavClosable&&"ld-sidenav-header--closed",this.sidenavCollapsed&&!this.sidenavClosable&&"ld-sidenav-header--collapsed",this.sidenavCollapsedFully&&!this.sidenavClosable&&"ld-sidenav-header--collapsed-fully","right"===this.sidenavAlignement&&"ld-sidenav-header--right-aligned"]);return d(i,{class:e},this.sidenavCollapsible&&d("ld-tooltip",{arrow:!0,size:"sm",class:"ld-sidenav-header__tooltip",ref:e=>this.tooltipRef=e,"show-delay":"1000",position:"left"===this.sidenavAlignement?"right middle":"left middle",tag:"span"},d("button",{slot:"trigger",role:"switch","brand-color":!0,"aria-checked":this.sidenavCollapsed?"false":"true",class:"ld-sidenav-header__toggle",onClick:this.handleToggleClick,part:"toggle"},d("ld-icon",{class:"ld-sidenav-header__toggle-icon",name:"sidenav-right",part:"toggle-icon"}),d("ld-sr-only",null,this.sidenavCollapsed?this.labelExpand:this.labelCollapse)),d("ld-typo",null,this.sidenavCollapsed?this.labelExpand:this.labelCollapse)),d("a",{class:"ld-sidenav-header__anchor",href:this.href,part:"anchor","aria-label":this.ariaLabel},d("slot",{name:"logo"},d("svg",{class:"ld-sidenav-header__initial-m",fill:"none",preserveAspectRatio:"xMidYMid slice",viewBox:"0 6 24 12"},d("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.5921 7.5H19.1a.2955.2955 0 0 0-.1926.0727l-2.9895 2.6378c-1.0241.9043-2.4024 1.412-3.9177 1.412-1.5796 0-3.0088-.5544-4.0444-1.5266 0 0-2.199-1.9406-2.2179-1.958-.422-.369-1.0028-.624-1.6714-.6379h-1.785C2.126 7.5 2 7.6184 2 7.7645v7.4118c0 .7316.6301 1.3237 1.4083 1.3237h.9133c.1564 0 .2831-.1194.2831-.2661l.0007-2.6375c0-.6893.5987-1.2579 1.3204-1.2579 1.3434 0 2.3067 1.0814 3.177 1.8037 1.0661.8849 1.8871 1.7374 2.8974 1.7374 1.0092 0 1.8306-.8525 2.8966-1.7374.8707-.7223 1.834-1.8037 3.1767-1.8037.718 0 1.3137.5629 1.3208 1.2468v1.591c0 .7316.6305 1.3224 1.4089 1.3224h.6079c.1588 0 .3061.0013.3061.0013.1561 0 .2828-.1194.2828-.2658V8.8237C22 8.0925 21.3692 7.5 20.5921 7.5Z",fill:"currentcolor"}))),d("span",{class:"ld-sidenav-header__slot-wrapper"},d("slot",null))))}get el(){return r(this)}};o.style=':host{--ld-sidenav-header-height:3.125rem;--ld-sidenav-header-col:var(--ld-col-neutral-900);--ld-sidenav-header-bg-col:var(--ld-col-neutral-010);--ld-sidenav-header-anchor-col:var(--ld-thm-primary);--ld-sidenav-header-anchor-col-active:var(--ld-thm-primary-active);--ld-sidenav-header-anchor-col-hover:var(--ld-thm-primary-hover);--ld-sidenav-header-anchor-col-focus:var(--ld-thm-primary);--ld-sidenav-header-indicator-col:#0000;--ld-sidenav-header-indicator-col-focus:var(--ld-thm-primary-focus);--ld-sidenav-header-indicator-col-active:var(--ld-thm-primary);align-items:center;background-color:var(--ld-sidenav-header-bg-col);color:var(--ld-sidenav-header-col);display:flex;flex-direction:row-reverse;flex-shrink:0;gap:.625rem;height:var(--ld-sidenav-header-height);padding:0 var(--ld-sidenav-padding-x);position:relative;z-index:1}:host(.ld-sidenav-header--right-aligned){flex-direction:row}.ld-sidenav-header__anchor{grid-gap:var(--ld-sp-12);align-items:center;border-radius:calc(var(--ld-sidenav-navitem-border-radius));color:inherit;display:grid;font-weight:700;gap:var(--ld-sp-12);grid-auto-flow:column;grid-template-columns:min-content;line-height:var(--ld-sidenav-line-height);margin-right:auto;min-height:calc(var(--ld-sidenav-navitem-icon-size) - var(--ld-sp-12));outline-offset:var(--ld-sidenav-navitem-bg-inset);position:relative;text-decoration:none;transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-header__anchor[href]{color:var(--ld-sidenav-header-anchor-col)}.ld-sidenav-header__anchor[href]:focus:focus-visible{--ld-sidenav-header-indicator-col:var(\n        --ld-sidenav-header-indicator-col-focus\n      );color:var(--ld-sidenav-header-anchor-col-focus);outline:none}.ld-sidenav-header__anchor[href]:focus:focus-visible:after,.ld-sidenav-header__anchor[href]:focus:focus-visible:before{content:""}.ld-sidenav-header__anchor[href]:focus:focus-visible:active{--ld-sidenav-header-indicator-col:var(\n          --ld-sidenav-header-indicator-col-active\n        )}.ld-sidenav-header__anchor[href]:focus:focus-visible:active:before{opacity:.3}@media (hover:hover){.ld-sidenav-header__anchor[href]:hover{color:var(--ld-sidenav-header-anchor-col-hover)}}.ld-sidenav-header__anchor[href]:active,.ld-sidenav-header__anchor[href]:active:focus-visible{color:var(--ld-sidenav-header-anchor-col-active)}.ld-sidenav-header__anchor:after,.ld-sidenav-header__anchor:before{border-radius:var(--ld-sidenav-navitem-border-radius);bottom:calc(var(--ld-sp-6)*-1);display:block;left:calc(var(--ld-sp-6)*-1);position:absolute;right:calc(var(--ld-sp-6)*-1);top:calc(var(--ld-sp-6)*-1)}.ld-sidenav-header__anchor:before{background-color:var(--ld-sidenav-header-indicator-col);opacity:.2;z-index:1}.ld-sidenav-header__anchor:after{background-color:var(--ld-col-wht);z-index:0}:host(.ld-sidenav-header--closed) .ld-sidenav-header__anchor,:host(.ld-sidenav-header--collapsed) .ld-sidenav-header__anchor{transform:translateX(var(--ld-sidenav-translate-x-delta));transition:visibility 0s calc(var(--ld-sidenav-transition-duration-collapse-expand) + var(--ld-sidenav-transition-delay-collapse-expand)) linear,opacity calc(var(--ld-sidenav-transition-duration-collapse-expand)*.5) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease;visibility:hidden}:host(.ld-sidenav-header--collapsed) .ld-sidenav-header__anchor{opacity:0}.ld-sidenav-header__initial-m,:host ::slotted([slot=logo]){color:var(--ld-thm-primary);height:100%;min-width:var(--ld-sidenav-navitem-icon-size);z-index:2}.ld-sidenav-header__initial-m,.ld-sidenav-header__toggle{width:var(--ld-sidenav-navitem-icon-size)}.ld-sidenav-header__toggle{-webkit-touch-callout:none;align-content:center;aspect-ratio:1;background-color:initial;border:0;border-radius:var(--ld-sidenav-navitem-border-radius);color:var(--ld-thm-primary);cursor:pointer;display:grid;justify-content:center;margin:var(--ld-sp-2) 0 auto 0;padding-bottom:0;padding-top:0;place-content:center;touch-action:manipulation;transform:translateX(var(--ld-sp-6));transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease,opacity var(--ld-sidenav-transition-duration-collapse-expand) linear;will-change:transform}.ld-sidenav-header__toggle:after,.ld-sidenav-header__toggle:before{border-radius:inherit;bottom:0;display:block;left:0;position:absolute;right:0;top:0}.ld-sidenav-header__toggle:before{background-color:var(--ld-sidenav-header-indicator-col);opacity:.2;z-index:1}.ld-sidenav-header__toggle:after{background-color:var(--ld-col-wht);z-index:0}.ld-sidenav-header__toggle:where(:focus:focus-visible){--ld-sidenav-header-indicator-col:var(\n      --ld-sidenav-header-indicator-col-focus\n    );color:var(--ld-sidenav-header-anchor-col-focus);outline:none}.ld-sidenav-header__toggle:where(:focus:focus-visible):after,.ld-sidenav-header__toggle:where(:focus:focus-visible):before{content:""}.ld-sidenav-header__toggle:where(:focus:focus-visible):active{--ld-sidenav-header-indicator-col:var(\n        --ld-sidenav-header-indicator-col-active\n      )}.ld-sidenav-header__toggle:where(:focus:focus-visible):active:before{opacity:.3}@media (hover:hover){.ld-sidenav-header__toggle:where(:hover){color:var(--ld-sidenav-header-anchor-col-hover)}}.ld-sidenav-header__toggle:where(:active),.ld-sidenav-header__toggle:where(:active:focus-visible){color:var(--ld-sidenav-header-anchor-col-active)}:host(.ld-sidenav-header--closed) .ld-sidenav-header__toggle,:host(.ld-sidenav-header--collapsed-fully) .ld-sidenav-header__toggle{transition:visibility 0s calc(var(--ld-sidenav-transition-duration-collapse-expand)*2) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease,opacity calc(var(--ld-sidenav-transition-duration-collapse-expand)*.5) linear;visibility:hidden}:host(.ld-sidenav-header--collapsed) .ld-sidenav-header__toggle{transform:none}:host(.ld-sidenav-header--collapsed-fully) .ld-sidenav-header__toggle{opacity:0}:host(.ld-sidenav-header--right-aligned) .ld-sidenav-header__toggle{transform:none}:host(.ld-sidenav-header--right-aligned.ld-sidenav-header--collapsed) .ld-sidenav-header__toggle{transform:translateX(0)}.ld-sidenav-header__toggle-icon{z-index:2}:host(:not(.ld-sidenav-header--collapsed)) .ld-sidenav-header__toggle-icon{transform:scaleX(-100%)}:host(.ld-sidenav-header--right-aligned:not(.ld-sidenav-header--collapsed)) .ld-sidenav-header__toggle-icon{transform:none}:host(.ld-sidenav-header--right-aligned.ld-sidenav-header--collapsed) .ld-sidenav-header__toggle-icon{transform:scaleX(-100%)}.ld-sidenav-header__slot-wrapper{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;max-height:var(--ld-sidenav-header-height);overflow:hidden;position:relative;text-overflow:ellipsis;z-index:2}';export{o as ld_sidenav_header}