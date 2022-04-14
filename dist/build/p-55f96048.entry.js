import{r as o,c as l,h as i,g as d,H as t}from"./p-24a1cdec.js";import{g as a}from"./p-891005fd.js";const r=class{constructor(i){o(this,i),this.ldaccordiontoggleclick=l(this,"ldaccordiontoggleclick",7),this.ldaccordionlabelclick=l(this,"ldaccordionlabelclick",7),this.toggleLabel="Toggle",this.hasCustomIcon=!1,this.handleToggleClick=o=>{o.preventDefault(),this.disabled||this.ldaccordiontoggleclick.emit()},this.handleLabelClick=o=>{o.preventDefault(),this.disabled||this.ldaccordionlabelclick.emit()}}async focusInner(){this.btnRef.focus({preventScroll:!0})}async setExpanded(o){this.expanded=o}componentWillLoad(){this.hasCustomIcon=!!this.el.querySelector('[slot="icon"]')}render(){const o=a(["ld-accordion-toggle",this.expanded&&"ld-accordion-toggle--expanded",this.split&&"ld-accordion-toggle--split"]),l=i("div",{class:"ld-accordion-toggle__trigger-content"},i("slot",{name:"icon"}),!this.hasCustomIcon&&i("ld-icon",{name:"arrow-down",size:"sm",part:"trigger-icon","aria-hidden":"true",class:"ld-accordion-toggle__trigger-icon"})),d=this.split?i("button",{part:"trigger focusable",class:"ld-accordion-toggle__trigger","aria-disabled":this.disabled?"true":void 0,"aria-expanded":this.expanded?"true":void 0,"aria-label":this.toggleLabel,onClick:this.handleToggleClick,ref:o=>this.btnRef=o},l):i("div",{part:"trigger",class:"ld-accordion-toggle__trigger"},l),r=this.split?i("button",{part:"label focusable","aria-disabled":this.disabled?"true":void 0,class:"ld-accordion-toggle__label",onClick:this.handleLabelClick},i("div",{class:"ld-accordion-toggle__label-content"},i("slot",null))):i("div",{part:"label",class:"ld-accordion-toggle__label"},i("div",{class:"ld-accordion-toggle__label-content"},i("slot",null))),e=i("div",{part:"content",class:"ld-accordion-toggle__content"},r,d),c=this.split?i("div",{part:"toggle focusable",class:"ld-accordion-toggle__button"},e):i("button",{"aria-disabled":this.disabled?"true":void 0,"aria-expanded":this.expanded?"true":void 0,class:"ld-accordion-toggle__button",onClick:this.handleToggleClick,part:"toggle focusable",ref:o=>this.btnRef=o,"tab-index":this.ldTabindex},e);return i(t,{class:o},c)}get el(){return d(this)}};r.style=':host{background-color:var(--ld-col-wht);border-radius:var(--ld-accordion-border-radius);display:block}.ld-accordion-toggle__button,.ld-accordion-toggle__label,.ld-accordion-toggle__trigger{-webkit-touch-callout:none;border:0;box-sizing:border-box;margin:0;text-align:left;touch-action:manipulation;-webkit-user-select:none;user-select:none;width:100%}.ld-accordion-toggle__button{align-items:center;background-color:var(--ld-accordion-bg-col);border-radius:inherit;color:var(--ld-accordion-col);display:grid;font:var(--ld-typo-body-m);grid-template-columns:1fr var(--ld-accordion-toggle-size);padding:0;position:relative}.ld-accordion-toggle__button[aria-disabled]{color:var(--ld-accordion-col-disabled)}.ld-accordion-toggle__button:not([aria-disabled]){cursor:pointer}.ld-accordion-toggle__button:not([aria-disabled]):where(:focus:focus-visible){background-color:var(--ld-accordion-bg-col-focus);color:var(--ld-accordion-col-focus)}@media (hover:hover){.ld-accordion-toggle__button:not([aria-disabled]):where(:hover){background-color:var(--ld-accordion-bg-col-hover);color:var(--ld-accordion-col-hover)}}.ld-accordion-toggle__button:not([aria-disabled]):where(:active),.ld-accordion-toggle__button:not([aria-disabled]):where(:active:focus-visible){background-color:var(--ld-accordion-bg-col-active);color:var(--ld-accordion-col-active)}.ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__trigger{color:var(--ld-accordion-trigger-icon-col)}.ld-accordion-toggle__button:not([aria-disabled]):active .ld-accordion-toggle__trigger,.ld-accordion-toggle__button:not([aria-disabled]):active:focus-visible .ld-accordion-toggle__trigger,.ld-accordion-toggle__button:not([aria-disabled]):focus:focus-visible .ld-accordion-toggle__trigger,.ld-accordion-toggle__button:not([aria-disabled]):hover .ld-accordion-toggle__trigger{color:inherit}.ld-accordion-toggle__label,.ld-accordion-toggle__trigger{background-color:initial;font:inherit}.ld-accordion-toggle__label:not([aria-disabled]),.ld-accordion-toggle__trigger:not([aria-disabled]){cursor:pointer}.ld-accordion-toggle__label{padding:var(--ld-accordion-padding-y) var(--ld-accordion-padding-x);position:relative}.ld-accordion-toggle__trigger{height:var(--ld-accordion-toggle-size);overflow:hidden;place-items:center;width:var(--ld-accordion-toggle-size)}.ld-accordion-toggle__label-content,.ld-accordion-toggle__trigger,.ld-accordion-toggle__trigger-content{display:grid;position:relative}:host(.ld-accordion-toggle--expanded){border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.ld-accordion-toggle--expanded) .ld-accordion-toggle__trigger-icon{transform:scaleY(-1)}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__label:before,:host(.ld-accordion-toggle--split) .ld-accordion-toggle__trigger:before{border-radius:var(--ld-br-s);content:"";inset:var(--ld-sp-4);position:absolute}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__label[aria-disabled],:host(.ld-accordion-toggle--split) .ld-accordion-toggle__trigger[aria-disabled]{color:var(--ld-accordion-col-disabled)}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]){background-color:var(--ld-accordion-bg-col)}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__label:not([aria-disabled]){color:var(--ld-accordion-col)}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__trigger:not([aria-disabled]){color:var(--ld-thm-primary)}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__label:not([aria-disabled]):where(:focus:focus-visible),:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__trigger:not([aria-disabled]):where(:focus:focus-visible){color:var(--ld-accordion-col-focus)}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__label:not([aria-disabled]):where(:focus:focus-visible):before,:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__trigger:not([aria-disabled]):where(:focus:focus-visible):before{background-color:var(--ld-accordion-bg-col-focus)}@media (hover:hover){:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__label:not([aria-disabled]):where(:hover),:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__trigger:not([aria-disabled]):where(:hover){color:var(--ld-accordion-col-hover)}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__label:not([aria-disabled]):where(:hover):before,:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__trigger:not([aria-disabled]):where(:hover):before{background-color:var(--ld-accordion-bg-col-hover)}}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__label:not([aria-disabled]):where(:active),:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__label:not([aria-disabled]):where(:active:focus-visible),:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__trigger:not([aria-disabled]):where(:active),:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__trigger:not([aria-disabled]):where(:active:focus-visible){color:var(--ld-accordion-col-active)}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__label:not([aria-disabled]):where(:active):before,:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__label:not([aria-disabled]):where(:active:focus-visible):before,:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__trigger:not([aria-disabled]):where(:active):before,:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__trigger:not([aria-disabled]):where(:active:focus-visible):before{background-color:var(--ld-accordion-bg-col-active)}.ld-accordion-toggle__content{display:contents}';export{r as ld_accordion_toggle}