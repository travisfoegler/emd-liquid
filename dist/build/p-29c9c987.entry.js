import{r as t,h as l,H as r,g as a}from"./p-e55c60b3.js";import{g as o}from"./p-891005fd.js";const d=class{constructor(l){t(this,l)}handleWindowResize(){this.updateScrollable(),this.updateScrollButtons()}updateScrollable(){const t=2*this.btnScrollLeftRef.getBoundingClientRect().width,l=this.slotContainerRef.getBoundingClientRect().width,r=Array.from(this.el.children).map((t=>t.getBoundingClientRect().width)).reduce(((t,l)=>t+l));this.scrollable=l+(this.scrollable?t:0)<r}updateScrollButtons(){this.scrollable&&(this.scrollLeftEnabled=this.slotContainerRef.scrollLeft>0,this.scrollRightEnabled=this.slotContainerRef.scrollLeft+this.slotContainerRef.getBoundingClientRect().width-this.slotContainerRef.scrollWidth<0)}scroll(t){this.slotContainerRef.scrollTo({left:this.slotContainerRef.scrollLeft+("left"===t?-1:1)*this.slotContainerRef.getBoundingClientRect().width/2,behavior:"smooth"})}focusTab(t,l){const r="left"===l?t.previousElementSibling:t.nextElementSibling;r&&(r.focusInner(),r.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}))}setFocusOnSelectedTabpanel(){var t;null===(t=Array.from(this.el.closest("ld-tabs").querySelectorAll("ld-tabpanel")).find((t=>!t.hasAttribute("hidden"))))||void 0===t||t.focus()}onKeydown(t){switch(t.key){case"ArrowLeft":return t.preventDefault(),void this.focusTab(t.target,"left");case"ArrowRight":return t.preventDefault(),void this.focusTab(t.target,"right");case"ArrowDown":return t.preventDefault(),void this.setFocusOnSelectedTabpanel()}}componentWillLoad(){this.el.querySelectorAll("ld-icon").forEach((t=>{void 0!==this.size?t.setAttribute("size",this.size):t.removeAttribute("size")})),this.el.querySelectorAll(".ld-icon").forEach((t=>{"sm"===this.size?(t.classList.remove("ld-icon--lg"),t.classList.add("ld-icon--sm")):"lg"===this.size?(t.classList.remove("ld-icon--sm"),t.classList.add("ld-icon--lg")):t.classList.remove("ld-icon--sm","ld-icon--lg")}))}componentDidLoad(){setTimeout((()=>{this.updateScrollable(),this.updateScrollButtons()}))}render(){return l(r,{onKeydown:this.onKeydown.bind(this),role:"tablist"},l("div",{class:o(["ld-tablist",this.size&&`ld-tablist--${this.size}`,this.mode&&`ld-tablist--${this.mode}`,this.rounded&&`ld-tablist--rounded-${this.rounded}`]),part:"wrapper"},l("button",{"aria-disabled":this.scrollLeftEnabled?void 0:"true",class:"ld-tablist__btn-scroll ld-tablist__btn-scroll--left",hidden:!this.scrollable,onClick:this.scroll.bind(this,"left"),part:"arrow arrow-left",ref:t=>this.btnScrollLeftRef=t,tabindex:"-1"},l("svg",{fill:"none",height:"16",part:"arrow-icon arrow-icon-left",viewBox:"0 0 16 16",width:"16"},l("title",null,"Scroll left"),l("path",{d:"M10 13L6 8L10 3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}))),l("div",{class:"ld-tablist__scroll-container",onScroll:this.updateScrollButtons.bind(this),part:"scroll-container",ref:t=>this.slotContainerRef=t},l("slot",null)),l("button",{"aria-disabled":this.scrollRightEnabled?void 0:"true",class:"ld-tablist__btn-scroll ld-tablist__btn-scroll--right",hidden:!this.scrollable,onClick:this.scroll.bind(this,"right"),part:"arrow arrow-right",tabindex:"-1"},l("svg",{fill:"none",height:"16",part:"arrow-icon arrow-icon-right",viewBox:"0 0 16 16",width:"16"},l("title",null,"Scroll right"),l("path",{d:"M6 13L10 8L6 3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})))))}get el(){return a(this)}static get watchers(){return{size:["componentWillLoad"]}}};d.style=':host{--ld-tablist-max-height:2.5rem;--ld-tablist-border-col:var(--ld-col-neutral-100);--ld-tablist-border-height:0.1875rem;--ld-tablist-btn-scroll-col:var(--ld-col-neutral-900);--ld-tablist-btn-scroll-col-active:var(--ld-col-neutral-900);--ld-tablist-btn-scroll-bg-col:var(--ld-col-neutral-010);--ld-tablist-btn-scroll-bg-col-hover:var(--ld-col-neutral-100);--ld-tablist-btn-scroll-bg-col-active:var(--ld-col-neutral-300);--ld-tablist-border-brand-col:var(--ld-thm-primary-hover);--ld-tablist-btn-scroll-bg-brand-col-active:var(--ld-thm-primary-active);--ld-tablist-btn-scroll-bg-brand-col-hover:var(--ld-thm-primary-hover);--ld-tablist-btn-scroll-bg-brand-col:var(--ld-thm-primary);--ld-tab-bg-brand-col-active:var(--ld-thm-primary-active);--ld-tab-bg-brand-col-focus:var(--ld-thm-primary-focus);--ld-tab-bg-brand-col-hover:var(--ld-thm-primary-hover);--ld-tab-bg-brand-col:var(--ld-thm-primary);--ld-tab-text-brand-col-focus:var(--ld-thm-primary-active);--ld-tab-disabled-bg-brand-col-focus:var(--ld-thm-primary-active);--ld-tab-disabled-text-brand-col-focus:var(--ld-thm-primary);--ld-tab-disabled-text-brand-col:var(--ld-thm-primary-focus);--ld-tab-selected-border-brand-col:var(--ld-thm-secondary)}.ld-tablist{background-color:var(--ld-tablist-btn-scroll-bg-col);display:flex;max-height:var(\n    --ld-tablist-max-height\n  );overflow:hidden;position:relative;z-index:0}.ld-tablist:after{background-color:var(--ld-tablist-border-col);content:"";height:var(--ld-tablist-border-height);inset:auto 0 0 0;position:absolute;z-index:2}.ld-tablist--rounded-all{border-radius:var(--ld-br-m)}.ld-tablist--rounded-all-lg{border-radius:var(--ld-br-l)}.ld-tablist--rounded-top{border-radius:var(--ld-br-m) var(--ld-br-m) 0 0}.ld-tablist--rounded-top-lg{border-radius:var(--ld-br-l) var(--ld-br-l) 0 0}.ld-tablist ::slotted(ld-tab){--ld-tab-indicator-height:var(--ld-tablist-border-height)}.ld-tablist--sm{--ld-tablist-max-height:2rem}.ld-tablist--sm ::slotted(ld-tab){--ld-tab-font:var(--ld-typo-body-s);--ld-tab-gap:0.375rem;--ld-tab-min-height:2rem;--ld-tab-padding-x:0.625rem;--ld-tab-padding-y:0.5rem}.ld-tablist--lg{--ld-tablist-max-height:3.125rem}.ld-tablist--lg ::slotted(ld-tab){--ld-tab-font:var(--ld-typo-body-l);--ld-tab-gap:0.875rem;--ld-tab-min-height:3.125rem;--ld-tab-padding-x:1.3125rem;--ld-tab-padding-y:0.75rem}.ld-tablist--ghost{--ld-tablist-btn-scroll-bg-col:#0000}.ld-tablist--ghost ::slotted(ld-tab){--ld-tab-bg-col:#0000}.ld-tablist--brand-color{--ld-tablist-btn-scroll-col-active:var(--ld-col-wht);--ld-tablist-btn-scroll-col:var(--ld-col-wht);--ld-tablist-btn-scroll-bg-col:var(--ld-tablist-btn-scroll-bg-brand-col);--ld-tablist-btn-scroll-bg-col-hover:var(\n      --ld-tablist-btn-scroll-bg-brand-col-hover\n    );--ld-tablist-btn-scroll-bg-col-active:var(\n      --ld-tablist-btn-scroll-bg-brand-col-active\n    );--ld-tablist-border-col:var(--ld-tablist-border-brand-col)}.ld-tablist--brand-color ::slotted(ld-tab){--ld-tab-disabled-opacity:0.5;--ld-tab-disabled-content-opacity:1;--ld-tab-selected-text-col-focus:var(--ld-col-wht);--ld-tab-selected-text-col:var(--ld-col-wht);--ld-tab-text-col:var(--ld-col-wht);--ld-tab-bg-col:var(--ld-tab-bg-brand-col);--ld-tab-bg-col-focus:var(--ld-tab-bg-brand-col-focus);--ld-tab-bg-col-hover:var(--ld-tab-bg-brand-col-hover);--ld-tab-bg-col-active:var(--ld-tab-bg-brand-col-active);--ld-tab-disabled-bg-col-focus:var(--ld-tab-disabled-bg-brand-col-focus);--ld-tab-disabled-text-col-focus:var(\n        --ld-tab-disabled-text-brand-col-focus\n      );--ld-tab-disabled-text-col:var(--ld-tab-disabled-text-brand-col);--ld-tab-selected-border-col-focus:var(--ld-tab-selected-border-col);--ld-tab-selected-border-col:var(--ld-tab-selected-border-brand-col);--ld-tab-text-col-focus:var(--ld-tab-text-brand-col-focus)}.ld-tablist__scroll-container{display:flex;margin-bottom:-4rem;overflow-x:auto;padding-bottom:4rem;scroll-snap-type:x mandatory}.ld-tablist__btn-scroll{-webkit-touch-callout:none;align-items:center;background-color:var(--ld-tablist-btn-scroll-bg-col);border:0;box-shadow:var(--ld-shadow-active);color:var(--ld-tablist-btn-scroll-col);justify-content:center;position:relative;text-decoration:none;touch-action:manipulation;-webkit-user-select:none;user-select:none;width:var(--ld-sp-32);z-index:2}.ld-tablist__btn-scroll:focus:focus-visible{outline:none}.ld-tablist__btn-scroll[aria-disabled=true] svg{opacity:.25}.ld-tablist__btn-scroll:where(:not([aria-disabled=true])){cursor:pointer}@media (hover:hover){.ld-tablist__btn-scroll:where(:not([aria-disabled=true])):hover{background-color:var(--ld-tablist-btn-scroll-bg-col-hover)}}.ld-tablist__btn-scroll:where(:not([aria-disabled=true])):active:focus,.ld-tablist__btn-scroll:where(:not([aria-disabled=true])):active:focus:focus-visible{background-color:var(--ld-tablist-btn-scroll-bg-col-active);color:var(--ld-tablist-btn-scroll-col-active)}.ld-tablist__btn-scroll--left{left:0}.ld-tablist__btn-scroll--right{right:0}';export{d as ld_tablist}