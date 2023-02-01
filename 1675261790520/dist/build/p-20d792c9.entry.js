import{r as t,h as e,H as o,g as i}from"./p-e55ca1f2.js";import{T as l}from"./p-11844eb3.js";import{g as r}from"./p-891005fd.js";import{c as d}from"./p-dfb8e7ac.js";const h=".ld-tooltip__trigger{--ld-tooltip-trigger-icon-col:var(--ld-thm-primary);--ld-tooltip-trigger-icon-col-hover:var(--ld-thm-primary-hover);--ld-tooltip-trigger-icon-col-focus:var(--ld-thm-primary-focus);background:none;border:0;color:inherit;display:inline-block;font-family:inherit;font-size:inherit;padding:0}.ld-tooltip__trigger--clickable{cursor:pointer}.ld-tooltip__trigger:focus:focus-visible .ld-tooltip__icon{color:var(--ld-tooltip-trigger-icon-col-focus)}.ld-tooltip__trigger:hover .ld-tooltip__icon{color:var(--ld-tooltip-trigger-icon-col-hover)}.ld-tooltip__trigger+.ld-tooltip{display:none;opacity:0;position:absolute}.ld-tooltip__icon{color:var(--ld-tooltip-trigger-icon-col);display:flex;height:var(--ld-sp-16);width:var(--ld-sp-16)}";let a=0;const s=class{constructor(e){t(this,e);this.idDescriber=`ld-tooltip-${++a}`;this.mapPositionToAttachment=t=>({"bottom center":"top center","bottom left":"top left","bottom right":"top right","left bottom":"bottom right","left middle":"middle right","left top":"top right","right bottom":"bottom left","right middle":"middle left","right top":"top left","top center":"bottom center","top left":"bottom left","top right":"bottom right"}[t]);this.mapPositionToTargetAttachment=t=>{var e;return(e={"left bottom":"bottom left","left middle":"middle left","left top":"top left","right bottom":"bottom right","right middle":"middle right","right top":"top right"}[t])!==null&&e!==void 0?e:t};this.initTooltip=async()=>{const t=this.mapPositionToAttachment(this.position);const e=this.mapPositionToTargetAttachment(this.position);const o=this.tooltipRef.querySelector("slot").assignedNodes();o.forEach((t=>{this.tooltipRef.appendChild(t)}));const i=typeof this.tetherOptions==="string"?JSON.parse(this.tetherOptions):this.tetherOptions;const r=Object.assign({attachment:t,classPrefix:"ld-tether",constraints:[{attachment:"together",to:"window"}],element:this.tooltipRef,target:this.triggerRef,targetAttachment:e},i);this.popper=new l(r);this.popper.enable();this.popper.enable();this.popper.enable();this.popper.enable();this.visible=true};this.toggleTooltip=()=>{if(this.popper==undefined){return}if(this.visible){this.hideTooltip()}else{this.showTooltip()}};this.handleHideTrigger=()=>{if(this.triggerType==="click"||this.disabled){return}clearTimeout(this.delayTimeout);if(this.popper){this.delayTimeout=setTimeout((()=>{this.hideTooltip()}),this.hideDelay)}};this.handleShowTrigger=()=>{if(this.triggerType==="click"||this.disabled){return}clearTimeout(this.delayTimeout);if(this.popper===undefined){this.delayTimeout=setTimeout(this.initTooltip,this.showDelay)}else{this.delayTimeout=setTimeout(this.showTooltip.bind(this),this.showDelay)}};this.handleToggleTrigger=()=>{if(this.triggerType==="hover"||this.disabled){return}if(this.popper===undefined){this.initTooltip()}else{this.toggleTooltip()}};this.arrow=undefined;this.disabled=undefined;this.hideDelay=0;this.position="top center";this.showDelay=0;this.size=undefined;this.tag="button";this.tetherOptions=undefined;this.triggerType="hover";this.hasDefaultTrigger=true;this.visible=false}updatePopper(t){if(t){this.hideTooltip()}}async hideTooltip(){var t;clearTimeout(this.delayTimeout);(t=this.popper)===null||t===void 0?void 0:t.disable();this.visible=false}async showTooltip(){if(this.disabled)return;clearTimeout(this.delayTimeout);this.popper.enable();this.visible=true}handleClickOutside(t){const e="composedPath"in t?t.composedPath().at(0):t.target;if(t.isTrusted&&this.popper&&this.triggerType==="click"&&d("ld-tooltip",e)!==this.el&&d('[role="tooltip"]',e)!==this.tooltipRef){this.hideTooltip()}}handleTouchOutside(t){this.handleClickOutside(t)}componentWillLoad(){this.hasDefaultTrigger=!this.el.querySelector('[slot="trigger"]')}disconnectedCallback(){var t,e;(t=this.popper)===null||t===void 0?void 0:t.destroy();(e=this.tooltipRef)===null||e===void 0?void 0:e.remove()}render(){const t=this.tag;return e(o,null,e(t,{"aria-describedby":this.idDescriber,class:r(["ld-tooltip__trigger",this.triggerType==="click"&&"ld-tooltip__trigger--clickable"]),onClick:this.handleToggleTrigger,onMouseEnter:this.handleShowTrigger,onFocus:this.handleShowTrigger,onMouseLeave:this.handleHideTrigger,onBlur:this.handleHideTrigger,part:"trigger focusable",ref:t=>{this.triggerRef=t},type:"button"},e("ld-sr-only",null,"Info"),e("slot",{name:"trigger"},e("svg",{class:"ld-tooltip__icon",fill:"none",part:"icon",viewBox:"0 0 24 24"},e("path",{"clip-rule":"evenodd",d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.9249 18.0751 1 12 1C5.9249 1 1 5.9249 1 12C1 18.0751 5.9249 23 12 23Z","fill-rule":"evenodd",fill:"currentColor"}),e("path",{"clip-rule":"evenodd",d:"M11.9996 8.6477C12.9254 8.6477 13.6758 7.8973 13.6758 6.9715C13.6758 6.0458 12.9254 5.2953 11.9996 5.2953C11.0739 5.2953 10.3235 6.0458 10.3235 6.9715C10.3235 7.8973 11.0739 8.6477 11.9996 8.6477ZM10.8453 17.8038C11.1932 18.1517 11.6736 18.3256 12.2865 18.3256H13.4545C13.6864 18.3256 13.8023 18.2263 13.8023 18.0275V12.2873C13.8023 11.6744 13.6284 11.1939 13.2805 10.8461C12.9326 10.4982 12.4522 10.3242 11.8393 10.3242H10.6713C10.4394 10.3242 10.3235 10.4236 10.3235 10.6224V16.3626C10.3235 16.9755 10.4974 17.456 10.8453 17.8038Z","fill-rule":"evenodd",fill:"var(--ld-col-wht)"})))),e("ld-tooltip-popper",{"aria-hidden":this.visible?undefined:"true",arrow:this.arrow,hasDefaultTrigger:this.hasDefaultTrigger,id:this.idDescriber,part:"popper",size:this.size,ref:t=>{this.tooltipRef=t},triggerType:this.triggerType},e("slot",null)))}get el(){return i(this)}static get watchers(){return{disabled:["updatePopper"]}}};s.style=h;const p="@keyframes ld-tooltip-show{0%{opacity:0}to{opacity:1}}@keyframes ld-tooltip-hide{to{visibility:hidden}}:host(.ld-tooltip){--ld-zi-max:2147483647;--ld-tooltip-animation-duration:0s;--ld-tooltip-distance-from-trigger:var(--ld-sp-8);--ld-tooltip-max-width:20rem;--ld-tooltip-offset-x:0px;--ld-tooltip-offset-y:0px;--ld-tooltip-padding:var(--ld-sp-16);--ld-tooltip-sm-padding:var(--ld-sp-6) var(--ld-sp-8);--tooltip-col:var(--ld-col-neutral-900);--tooltip-bg-col:var(--ld-col-wht);animation:ld-tooltip-hide 0s ease var(--ld-tooltip-animation-duration);animation-fill-mode:forwards;background-color:var(--tooltip-bg-col);border-radius:var(--ld-br-m);color:var(--tooltip-col);filter:var(--ld-drop-shadow-hover);margin-left:var(--ld-tooltip-offset-x);margin-top:var(--ld-tooltip-offset-y);max-width:var(--ld-tooltip-max-width);opacity:0;padding:var(--ld-tooltip-padding);pointer-events:none;position:relative;transition:opacity var(--ld-tooltip-animation-duration) ease-in;z-index:var(--ld-zi-max)}@media (prefers-reduced-motion:no-preference){:host(.ld-tooltip--initialized){--ld-tooltip-animation-duration:0.2s}}:host(.ld-tooltip--sm){--ld-tooltip-padding:var(--ld-tooltip-sm-padding)}:host(.ld-tooltip--with-arrow){--ld-tooltip-arrow-size:0.5rem;--ld-tooltip-arrow-offset:var(--ld-sp-16);--ld-tooltip-distance-from-trigger:calc(var(--ld-tooltip-arrow-size) + var(--ld-sp-8))}:host(.ld-tooltip--interactive){pointer-events:auto}:host(.ld-tooltip.ld-tether-enabled){animation:ld-tooltip-show var(--ld-tooltip-animation-duration) ease-out;opacity:1}:host(.ld-tooltip.ld-tether-element-attached-bottom) .ld-tooltip__arrow{bottom:var(--ld-tooltip-arrow-offset)}:host(.ld-tooltip.ld-tether-element-attached-bottom.ld-tether-target-attached-top){margin-top:calc(var(--ld-tooltip-distance-from-trigger)*-1 - var(--ld-tooltip-offset-y))}:host(.ld-tooltip.ld-tether-element-attached-bottom.ld-tether-target-attached-top) .ld-tooltip__arrow{border-top-color:var(--tooltip-bg-col);top:100%}:host(.ld-tooltip.ld-tether-element-attached-center) .ld-tooltip__arrow{left:calc(50% - var(--ld-tooltip-arrow-size))}:host(.ld-tooltip.ld-tether-element-attached-left.ld-tether-target-attached-right){margin-left:calc(var(--ld-tooltip-offset-x) + var(--ld-tooltip-distance-from-trigger))}:host(.ld-tooltip.ld-tether-element-attached-left.ld-tether-target-attached-right) .ld-tooltip__arrow{border-right-color:var(--tooltip-bg-col);right:100%}:host(.ld-tooltip.ld-tether-element-attached-middle) .ld-tooltip__arrow{top:calc(50% - var(--ld-tooltip-arrow-size))}:host(.ld-tooltip.ld-tether-element-attached-right) .ld-tooltip__arrow{right:var(--ld-tooltip-arrow-offset)}:host(.ld-tooltip.ld-tether-element-attached-right.ld-tether-target-attached-left){margin-left:calc(var(--ld-tooltip-distance-from-trigger)*-1 - var(--ld-tooltip-offset-x))}:host(.ld-tooltip.ld-tether-element-attached-right.ld-tether-target-attached-left) .ld-tooltip__arrow{border-left-color:var(--tooltip-bg-col);left:100%}:host(.ld-tooltip.ld-tether-element-attached-top.ld-tether-target-attached-bottom){margin-top:calc(var(--ld-tooltip-distance-from-trigger) + var(--ld-tooltip-offset-y))}:host(.ld-tooltip.ld-tether-element-attached-top.ld-tether-target-attached-bottom) .ld-tooltip__arrow{border-bottom-color:var(--tooltip-bg-col);bottom:100%}:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-bottom.ld-tether-target-attached-top):where(.ld-tether-element-attached-right)),:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-top.ld-tether-target-attached-bottom):where(.ld-tether-element-attached-right)){--ld-tooltip-offset-x:1rem}:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-bottom.ld-tether-target-attached-top):where(.ld-tether-element-attached-left)),:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-top.ld-tether-target-attached-bottom):where(.ld-tether-element-attached-left)){--ld-tooltip-offset-x:-1rem}:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-left.ld-tether-target-attached-right):where(.ld-tether-element-attached-bottom)),:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-right.ld-tether-target-attached-left):where(.ld-tether-element-attached-bottom)){--ld-tooltip-offset-y:1rem}:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-left.ld-tether-target-attached-right):where(.ld-tether-element-attached-top)),:host(.ld-tooltip--with-default-trigger:where(.ld-tooltip--with-arrow):where(.ld-tether-element-attached-right.ld-tether-target-attached-left):where(.ld-tether-element-attached-top)){--ld-tooltip-offset-y:-1rem}.ld-tooltip__arrow{border:var(--ld-tooltip-arrow-size) solid #0000;position:absolute}";const n=class{constructor(e){t(this,e);this.initialized=false;this.arrow=undefined;this.size=undefined;this.triggerType="hover";this.hasDefaultTrigger=undefined}componentDidLoad(){setTimeout((()=>{this.initialized=true}))}render(){return e(o,{class:r(["ld-tooltip",this.arrow&&"ld-tooltip--with-arrow",this.hasDefaultTrigger&&"ld-tooltip--with-default-trigger",this.initialized&&"ld-tooltip--initialized",this.size&&`ld-tooltip--${this.size}`,this.triggerType==="click"&&"ld-tooltip--interactive"]),role:"tooltip"},this.arrow&&e("span",{class:"ld-tooltip__arrow"}),e("slot",null))}get element(){return i(this)}};n.style=p;export{s as ld_tooltip,n as ld_tooltip_popper};
//# sourceMappingURL=p-20d792c9.entry.js.map