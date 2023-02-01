import{r as d,h as l,H as t,g as e}from"./p-e55ca1f2.js";import{g as i}from"./p-891005fd.js";const o=".ld-badge,:host{--ld-badge-size-md:1.0625rem;--ld-badge-size-lg:1rem;--ld-badge-icon-size-md:0.5625rem;--ld-badge-icon-size-lg:0.75rem;--ld-badge-bg-col:var(--ld-thm-primary);--ld-badge-gap-md:var(--ld-sp-6);--ld-badge-gap-lg:var(--ld-sp-8);--ld-badge-padding-block-md:0.2125rem;--ld-badge-padding-block-lg:0.25rem;--ld-badge-padding-inline-md:0.5rem;--ld-badge-padding-inline-lg:0.625rem;align-items:center;background-color:var(--ld-badge-bg-col);border-radius:var(--ld-br-full);box-sizing:border-box;color:var(--ld-col-wht);display:inline-flex;font:var(--ld-typo-body-xs);font-weight:700;gap:var(--ld-badge-gap-md);justify-content:center;line-height:1.1;padding:var(--ld-badge-padding-block-md) var(--ld-badge-padding-inline-md);position:relative}.ld-badge ::slotted(.ld-icon),.ld-badge ::slotted(ld-icon),.ld-badge>.ld-icon,.ld-badge>ld-icon,:host ::slotted(.ld-icon),:host ::slotted(ld-icon),:host>.ld-icon,:host>ld-icon{--ld-icon-size-md:var(--ld-badge-icon-size-md);flex-shrink:0;margin:0 calc(var(--ld-sp-8)*-1)}.ld-badge.ld-badge--with-text ::slotted(.ld-icon),.ld-badge.ld-badge--with-text ::slotted(ld-icon),.ld-badge.ld-badge--with-text>.ld-icon,.ld-badge.ld-badge--with-text>ld-icon,:host(.ld-badge.ld-badge--with-text) ::slotted(.ld-icon),:host(.ld-badge.ld-badge--with-text) ::slotted(ld-icon),:host(.ld-badge.ld-badge--with-text)>.ld-icon,:host(.ld-badge.ld-badge--with-text)>ld-icon,:host(:host.ld-badge--with-text) ::slotted(.ld-icon),:host(:host.ld-badge--with-text) ::slotted(ld-icon),:host(:host.ld-badge--with-text)>.ld-icon,:host(:host.ld-badge--with-text)>ld-icon,:host.ld-badge--with-text ::slotted(.ld-icon),:host.ld-badge--with-text ::slotted(ld-icon),:host.ld-badge--with-text>.ld-icon,:host.ld-badge--with-text>ld-icon{margin:0 auto}.ld-badge--lg,:host(.ld-badge--lg){font:var(--ld-typo-body-s);font-weight:700;gap:var(--ld-badge-gap-lg);line-height:1.1;padding:var(--ld-badge-padding-block-lg) var(--ld-badge-padding-inline-lg)}.ld-badge--lg ::slotted(.ld-icon),.ld-badge--lg ::slotted(ld-icon),.ld-badge--lg>.ld-icon,.ld-badge--lg>ld-icon,:host(.ld-badge--lg) ::slotted(.ld-icon),:host(.ld-badge--lg) ::slotted(ld-icon),:host(.ld-badge--lg)>.ld-icon,:host(.ld-badge--lg)>ld-icon{--ld-icon-size-md:var(--ld-badge-icon-size-lg);transform:none}.ld-badge--brand-color,:host(.ld-badge--brand-color){background-color:var(--ld-col-wht);color:var(--ld-thm-primary)}";const a=class{constructor(l){d(this,l);this.updateState=()=>{this.hasCustomIcon=!!this.el.querySelector('[slot="icon"]');this.hasText=!!this.el.textContent.trim()};this.brandColor=undefined;this.icon=undefined;this.size=undefined;this.hasCustomIcon=false;this.hasText=false}componentWillLoad(){this.observer=new MutationObserver(this.updateState);this.observer.observe(this.el,{subtree:true,childList:true,attributes:false});this.updateState()}disconnectedCallback(){if(this.observer)this.observer.disconnect()}render(){const d=i(["ld-badge",this.size&&`ld-badge--${this.size}`,this.hasText&&"ld-badge--with-text",this.brandColor&&`ld-badge--brand-color`]);return l(t,{class:d},(this.icon||this.hasCustomIcon)&&l("ld-icon",{class:"ld-badge__icon",part:"icon",name:this.icon},l("slot",{name:"icon"})),l("slot",null))}static get assetsDirs(){return["assets"]}get el(){return e(this)}};a.style=o;export{a as ld_badge};
//# sourceMappingURL=p-52f58ed2.entry.js.map