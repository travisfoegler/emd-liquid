import{r as o,h as r,H as t,g as l}from"./p-e65bc256.js";let c=class{constructor(r){o(this,r),this.isTransparent=!1}isDark(o){const r=(o=o.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))[1],t=o[2],l=o[3],c=o[4];return Math.sqrt(r*r*.299+t*t*.587+l*l*.114)<=127.5*(c||1)}componentDidLoad(){const o=getComputedStyle(this.bgRef).getPropertyValue("background-color");setTimeout((()=>{this.val=o,this.dark=this.isDark(o)}))}render(){let o="docs-color";return this.dark&&(o+=" docs-color--dark"),this.isTransparent&&(o+=" docs-color--transparent"),r(t,{class:o},r("span",{ref:o=>this.bgRef=o,class:"docs-color__var",style:{background:`var(${this.var})`}},r("docs-copy-to-cb",{textToCopy:this.var}),this.var),r("span",{class:"docs-color__val",style:{background:`var(${this.var})`}},r("docs-copy-to-cb",{textToCopy:this.val}),this.val))}get el(){return l(this)}};c.style='.docs-color{border-color:var(--ld-col-neutral-100)}@media (prefers-color-scheme:dark){.docs-color{border-color:var(--ld-col-neutral-600)}}.docs-ui-dark .docs-color{border-color:var(--ld-col-neutral-600)}.docs-ui-light .docs-color{border-color:var(--ld-col-neutral-100)}.docs-color{background:#090909 url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g><rect height="12" width="12" fill="black"></rect><rect height="12" width="12" y="12" x="12" fill="black"></rect></g></svg>\');display:flex;width:100%;height:var(--ld-sp-40);align-items:center;overflow:hidden;border-style:solid;border-width:var(--ld-sp-1);color:var(--ld-col-neutral-900);overflow-x:auto;scroll-snap-type:x mandatory}.docs-color:first-of-type{border-top-left-radius:var(--ld-br-l);border-top-right-radius:var(--ld-br-l)}.docs-color:last-of-type{border-bottom-left-radius:var(--ld-br-l);border-bottom-right-radius:var(--ld-br-l)}.docs-color:not(:first-of-type){border-top-width:0}.docs-color:not(:last-of-type){border-bottom-width:0}.docs-color--transparent{color:var(--ld-col-wht)}.docs-color--transparent.docs-color--dark{color:var(--ld-col-neutral-900)}.docs-color--transparent .docs-copy-to-cb{filter:invert(1) hue-rotate(180deg)}.docs-color--dark{color:var(--ld-col-wht);background:#f1f1f1 url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g><rect height="12" width="12" fill="white"></rect><rect height="12" width="12" y="12" x="12" fill="white"></rect></g></svg>\')}.docs-color--dark .docs-copy-to-cb{filter:invert(1) hue-rotate(180deg)}.docs-color__val,.docs-color__var{scroll-snap-align:start;display:inline-flex;align-items:center;width:50%;min-width:20rem;font:var(--ld-typo-body-s);font-family:Source Code Pro,Consolas,Monaco,Ubuntu Mono,monospace;flex-shrink:0;padding:var(--ld-sp-8);white-space:nowrap}.docs-color__val .docs-copy-to-cb,.docs-color__var .docs-copy-to-cb{margin-right:var(--ld-sp-8)}.docs-color__val{padding-left:0}';export{c as docs_color}