import{r as l,h as r}from"./p-3b3d9802.js";import{g as n}from"./p-1133c92e.js";const i=".ld-breadcrumbs .ld-link,.ld-crumb__link::part(anchor){--ld-link-gap:var(--ld-crumb-icon-gap);--ld-link-chevron-gap:var(--ld-crumb-gap);display:inline-flex}.ld-breadcrumbs li:not(:last-of-type) .ld-link,.ld-crumb__link:not(.ld-crumb__link--current)::part(anchor){--ld-link-col:var(--ld-col-neutral-600);font-weight:400;margin-right:calc(var(--ld-crumb-gap) + .5em)}.ld-breadcrumbs li:not(:last-of-type) .ld-link:hover,.ld-crumb__link:not(.ld-crumb__link--current)::part(anchor):hover{--ld-link-col:var(--ld-thm-primary-hover)}.ld-breadcrumbs li:not(:last-of-type) .ld-link:focus:focus-visible,.ld-crumb__link:not(.ld-crumb__link--current)::part(anchor):focus:focus-visible{--ld-link-col:var(--ld-thm-primary-focus)}.ld-breadcrumbs li:not(:last-of-type) .ld-link:active,.ld-crumb__link:not(.ld-crumb__link--current)::part(anchor):active{--ld-link-col:var(--ld-thm-primary-active)}.ld-breadcrumbs li:last-of-type .ld-link,.ld-crumb__link--current{cursor:default;pointer-events:none}";const c=class{constructor(r){l(this,r);this.current=undefined;this.href=undefined}render(){return r("li",{class:"ld-crumb"},r("ld-link",{href:this.href,class:n(["ld-crumb__link",this.current&&"ld-crumb__link--current"]),part:"link","aria-current":this.current?"page":undefined,chevron:this.current?undefined:"end"},r("slot",null)))}};c.style=i;export{c as ld_crumb};
//# sourceMappingURL=p-9a36f98f.entry.js.map