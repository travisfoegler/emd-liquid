import{r as o,h as d,H as r,g as c}from"./p-24a1cdec.js";import{g as a}from"./p-891005fd.js";const i=class{constructor(d){o(this,d),this.scrollIntoViewOnTransitionEnd=!1,this.detached=!1,this.rounded=!1,this.single=!1,this.scrollIntoView=o=>{var d;const r=function(o){let d=getComputedStyle(o);if("fixed"===d.position)return document.scrollingElement;const r="absolute"===d.position,c=/(auto|scroll)/;for(let a=o;a=a.parentElement;)if(d=getComputedStyle(a),(!r||"static"!==d.position)&&c.test(d.overflow+d.overflowY+d.overflowX))return a;return document.scrollingElement}(o),c=o.querySelector("ld-accordion-toggle"),a=o.querySelector("ld-accordion-panel"),i=Array.from(o.parentElement.children),l=this.single&&!this.scrollIntoViewOnTransitionEnd&&(null===(d=i.slice(0,i.findIndex((d=>d===o))).find((o=>o.classList.contains("ld-accordion-section--expanded"))))||void 0===d?void 0:d.children[1].scrollHeight)||0,t=r.scrollTop+a.getBoundingClientRect().top-Math.max(0,r.getBoundingClientRect().top),n=parseFloat(window.getComputedStyle(r).scrollPaddingTop)||0,e=t+Math.min(a.scrollHeight,r.clientHeight-c.clientHeight-n)-l;if(!this.scrollIntoViewOnTransitionEnd&&r.scrollHeight<e)this.scrollIntoViewOnTransitionEnd=!0;else if(!this.el.closest("ld-accordion-panel")&&r.clientHeight+r.scrollTop<e){const o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;r.scrollTo({top:e-r.clientHeight,behavior:o?"auto":"smooth"})}},this.focusToggle=(o,d)=>{var r;const c=null===(r="prev"===d?o.parentElement.previousElementSibling:o.parentElement.nextElementSibling)||void 0===r?void 0:r.querySelector("ld-accordion-toggle");c&&c.focusInner()},this.onKeydown=o=>{if("LD-ACCORDION-TOGGLE"===o.target.tagName)switch(o.key){case"ArrowUp":return o.preventDefault(),void this.focusToggle(o.target,"prev");case"ArrowDown":return o.preventDefault(),void this.focusToggle(o.target,"next")}},this.onTransitionEnd=o=>{const d=o.target;this.scrollIntoViewOnTransitionEnd&&"LD-ACCORDION-PANEL"===d.tagName&&d.closest("ld-accordion")===this.el&&d.closest("ld-accordion-section").expanded&&(this.scrollIntoView(d.closest("ld-accordion-section")),this.scrollIntoViewOnTransitionEnd=!1)}}handleAccordionExpandChange(o){this.single&&o.target.expanded&&[...o.target.parentElement.children].filter((d=>d!==o.target)).forEach((o=>{o.expanded=!1})),o.detail&&this.scrollIntoView(o.target)}render(){const o=a(["ld-accordion",this.detached&&"ld-accordion--detached",this.brandColor&&"ld-accordion--brand-color",!this.brandColor&&this.tone&&`ld-accordion--${this.tone}`,this.rounded&&"ld-accordion--rounded"]);return d(r,{class:o,onKeydown:this.onKeydown,onTransitionEnd:this.onTransitionEnd},d("slot",null))}get el(){return c(this)}};i.style=":host{--ld-accordion-col:var(--ld-col-neutral-900);--ld-accordion-col-disabled:var(--ld-col-neutral-100);--ld-accordion-col-hover:var(--ld-col-neutral-900);--ld-accordion-col-focus:var(--ld-col-neutral-900);--ld-accordion-bg-col:var(--ld-col-wht);--ld-accordion-bg-col-disabled:var(--ld-col-neutral-100);--ld-accordion-bg-col-active:var(--ld-col-wht);--ld-accordion-trigger-icon-col-disabled:var(--ld-col-neutral-100);--ld-accordion-col-active:var(--ld-thm-primary);--ld-accordion-col-selected:var(--ld-thm-primary);--ld-accordion-bg-col-hover:var(--ld-col-neutral-050);--ld-accordion-bg-col-focus:var(--ld-col-neutral-100);--ld-accordion-trigger-icon-col:var(--ld-thm-primary);--ld-accordion-trigger-icon-col-hover:var(--ld-thm-primary-hover);--ld-accordion-trigger-icon-col-focus:var(--ld-thm-primary-focus);--ld-accordion-trigger-icon-col-active:var(--ld-thm-primary-active);--ld-accordion-padding-y:0.45rem;--ld-accordion-padding-x:1.25rem;--ld-accordion-toggle-size:2.5rem;--ld-accordion-toggle-line-height:180%;--ld-accordion-border-radius-size:0;--ld-accordion-border-radius:var(--ld-accordion-border-radius-size);--ld-accordion-gap:var(--ld-sp-1);--ld-accordion-panel-border-top-color:var(--ld-col-neutral-050)}:host(:where(.ld-accordion)){display:block;flex-grow:1}:host(.ld-accordion--rounded){--ld-accordion-border-radius-size:var(--ld-br-m)}:host(.ld-accordion--dark){--ld-accordion-bg-col:var(--ld-col-neutral-010)}:host(.ld-accordion--brand-color){--ld-accordion-bg-col-hover:var(--ld-thm-primary-alpha-lowest);--ld-accordion-bg-col-focus:var(--ld-thm-primary-alpha-low)}:host(.ld-accordion--detached){--ld-accordion-gap:var(--ld-sp-8)}:host(.ld-accordion:not(.ld-accordion--detached)) ::slotted(ld-accordion-section){--ld-accordion-border-radius:0}:host(.ld-accordion:not(.ld-accordion--detached)) ::slotted(ld-accordion-section:first-of-type){--ld-accordion-border-radius:var(--ld-accordion-border-radius-size) var(--ld-accordion-border-radius-size) 0 0}:host(.ld-accordion:not(.ld-accordion--detached)) ::slotted(ld-accordion-section:last-of-type){--ld-accordion-border-radius:0 0 var(--ld-accordion-border-radius-size) var(--ld-accordion-border-radius-size)}:host ::slotted(ld-accordion-section:not(:first-of-type)){margin-top:var(--ld-accordion-gap)}";export{i as ld_accordion}