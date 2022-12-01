import{r as t,h as s,H as a,g as i}from"./p-765a6fc5.js";import{g as e}from"./p-891005fd.js";import{c as o}from"./p-dfb8e7ac.js";import{t as l}from"./p-f9bdba5e.js";const r=class{constructor(s){t(this,s),this.hasShadowBottom=!1,this.hasShadowTop=!1,this.needsHRBottom=void 0,this.needsHRTop=void 0,this.relative=void 0,this.sidenavClosable=void 0,this.sidenavCollapsed=void 0}handleSidenavCollapsedChange(t){t.target===this.sidenav&&(this.sidenavCollapsed=t.detail.collapsed)}handleSidenavBreakpointChange(t){t.target===this.sidenav&&(this.sidenavClosable=t.detail)}async updateShadows(){const t=this.el;t&&(this.hasShadowBottom=t.scrollTop<t.scrollHeight-t.clientHeight-10,this.hasShadowTop=t.scrollTop>10)}async scrollToTop(t=!1){const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches;try{this.el.scrollTo({top:0,behavior:t&&!s?"smooth":"auto"})}catch(t){}}componentWillLoad(){this.sidenav=o("ld-sidenav",this.el),this.sidenav&&(this.needsHRTop=!!this.sidenav.querySelector('[slot="top"]'),this.needsHRBottom=!!this.sidenav.querySelector('[slot="bottom"]'),this.relative=!this.sidenav.querySelector("ld-sidenav-slider"))}componentDidLoad(){setTimeout((()=>{this.updateShadows()}))}render(){const t=e(["ld-sidenav-scroller-internal",this.relative&&"ld-sidenav-scroller-internal--relative",this.sidenavCollapsed&&!this.sidenavClosable&&"ld-sidenav-scroller-internal--collapsed"]);return s(a,{class:t,onScroll:this.updateShadows.bind(this),onLdSidenavAccordionTransitionEnd:this.updateShadows.bind(this),"data-needs-bottom":this.needsHRBottom,"data-needs-top":this.needsHRTop},s("div",{class:"ld-sidenav-scroller-internal__shadow-top",style:{opacity:this.hasShadowTop?"1":"0"},part:"shadow-top"}),s("div",{class:"ld-sidenav-scroller-internal__shadow-bottom",style:{opacity:this.hasShadowBottom?"1":"0"},part:"shadow-bottom"}),this.needsHRTop&&s("ld-sidenav-separator",{class:"ld-sidenav-scroller-internal__hr-top",style:{opacity:this.hasShadowTop?"0":"1"}}),this.needsHRBottom&&s("ld-sidenav-separator",{class:"ld-sidenav-scroller-internal__hr-bottom",style:{opacity:this.hasShadowBottom?"0":"1"}}),s("slot",null))}get el(){return i(this)}};r.style=':host{--ld-scroll-shadow-height:1.5rem;--ld-scroll-shadow-intensity:0.1;display:flex;flex-direction:column;height:100%;overflow-x:hidden;overflow-y:auto;overflow:hidden auto;overscroll-behavior:none;padding-right:var(--ld-sp-32);scrollbar-width:none;width:100%}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host ::slotted(ld-sidenav-heading:first-child),:host ::slotted(ld-sidenav-navitem:first-child){margin-top:var(--ld-sidenav-padding-y)}:host ::slotted(ld-sidenav-navitem){margin-bottom:var(--ld-sidenav-padding-y);will-change:opacity}:host(.ld-sidenav-scroller-internal--relative){position:relative}:host(.ld-sidenav-scroller-internal--relative) .ld-sidenav-scroller-internal__hr-bottom,:host(.ld-sidenav-scroller-internal--relative) .ld-sidenav-scroller-internal__hr-top{position:sticky}:host(.ld-sidenav-scroller-internal--collapsed) .ld-sidenav-scroller-internal__shadow-bottom,:host(.ld-sidenav-scroller-internal--collapsed) .ld-sidenav-scroller-internal__shadow-top{transform:translateX(calc(var(--ld-sidenav-translate-x-direction)*(50% - var(--ld-sidenav-width-collapsed)*0.5)))}.ld-sidenav-scroller-internal__shadow-bottom,.ld-sidenav-scroller-internal__shadow-top{height:0;left:0;opacity:0;pointer-events:none;position:sticky;transition:opacity var(--ld-sidenav-transition-duration) linear,transform var(--ld-sidenav-transition-duration) ease;width:100%;z-index:1}.ld-sidenav-scroller-internal__shadow-bottom:after,.ld-sidenav-scroller-internal__shadow-top:after{content:"";display:block;height:var(--ld-scroll-shadow-height);width:100%}.ld-sidenav-scroller-internal__shadow-top{top:0}.ld-sidenav-scroller-internal__shadow-top:after{background:radial-gradient(farthest-side at 50% 0,rgb(0,0,0,var(--ld-scroll-shadow-intensity)),#0000) 0 100% no-repeat}.ld-sidenav-scroller-internal__shadow-bottom{top:100%}.ld-sidenav-scroller-internal__shadow-bottom:after{background:radial-gradient(farthest-side at 50% 100%,rgb(0,0,0,var(--ld-scroll-shadow-intensity)),#0000) 0 100% no-repeat;transform:translateY(-100%)}.ld-sidenav-scroller-internal__hr-bottom,.ld-sidenav-scroller-internal__hr-top{margin-bottom:0;margin-top:0;position:absolute;width:calc(100% - var(--ld-sidenav-padding-y)*2)}.ld-sidenav-scroller-internal__hr-top{top:0}.ld-sidenav-scroller-internal__hr-bottom{top:calc(100% - var(--ld-sp-1)*1.5)}';const n=class{constructor(s){t(this,s),this.computeScaleXCollapsed=()=>{const t=parseFloat(window.getComputedStyle(this.sidenav).getPropertyValue("--ld-sidenav-width")),s=parseFloat(window.getComputedStyle(this.sidenav).getPropertyValue("--ld-sidenav-padding-x"));return parseFloat(window.getComputedStyle(this.sidenav).getPropertyValue("--ld-sidenav-navitem-icon-size"))/(t-2*s)},this.updateStackToTop=()=>{l(this.el,!this.sidenavClosable&&this.sidenav.narrow&&this.sidenavCollapsed)},this.sidenavCollapsed=void 0,this.sidenavClosable=void 0,this.scaleXCollapsed=1}handleSidenavCollapsedChange(t){t.target===this.sidenav&&(this.sidenavCollapsed=t.detail.collapsed,this.el.parentElement&&!["LD-SIDENAV-SLIDER","LD-SIDENAV-SUBNAV"].includes(this.el.parentElement.tagName)||this.sidenav.narrow&&l(this.el,this.sidenavCollapsed))}handleSidenavBreakpointChange(t){t.target===this.sidenav&&(this.sidenavClosable=t.detail,this.updateStackToTop())}componentWillLoad(){this.sidenav=o("ld-sidenav",this.el),this.sidenav&&(this.scaleXCollapsed=this.computeScaleXCollapsed()||1,this.sidenavCollapsed=this.sidenav.collapsed)}componentDidLoad(){setTimeout((()=>{this.updateStackToTop()}))}render(){const t=e(["ld-sidenav-separator",this.sidenavCollapsed&&!this.sidenavClosable&&"ld-sidenav-separator--collapsed"]);return s(a,{style:{"--ld-sidenav-separator-scale-x-collapsed":this.scaleXCollapsed.toString()},class:t},s("hr",{part:"hr"}))}get el(){return i(this)}};n.style=":host{display:block;margin:0 var(--ld-sidenav-padding-x) var(--ld-sidenav-padding-y);transform-origin:left;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}:host hr{background-color:var(--ld-sidenav-separator-line-bg-col);border:0;border-radius:var(--ld-br-full);height:var(--ld-sp-2);margin:0;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}:host(.ld-sidenav-separator--collapsed){transform:translateX(var(--ld-sidenav-translate-x-delta)) scaleX(var(--ld-sidenav-separator-scale-x-collapsed))}:host(.ld-sidenav-separator--collapsed) hr{transform:translateY(0);transform:translateY(var(\n          --ld-sidenav-navitem-move-up-closable,var(--ld-sidenav-navitem-move-up,0)\n        ));transition:var(--ld-sidenav-stack-to-top-transition)}";export{r as ld_sidenav_scroller_internal,n as ld_sidenav_separator}