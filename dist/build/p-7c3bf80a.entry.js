import{r as a,h as s,H as o}from"./p-5ccb6a7b.js";const d=class{constructor(s){a(this,s),this.prevTitle="Back",this.nextTitle="Next"}render(){return s(o,{class:"docs-page-nav"},s("div",{class:"docs-page-nav__dark"},s("div",{class:"docs-page-nav__content"},this.prevHref?s("ld-button",{class:"docs-page-nav__pull",mode:"secondary-on-brand-color",href:this.prevHref},this.prevTitle):"",this.nextHref?s("ld-button",{class:"docs-page-nav__push",mode:"on-brand-color",href:this.nextHref},this.nextTitle):"")),s("div",{class:"docs-page-nav__light"},s("div",{class:"docs-page-nav__content"},this.prevHref?s("ld-button",{class:"docs-page-nav__pull",mode:"secondary",href:this.prevHref},this.prevTitle):"",this.nextHref?s("ld-button",{class:"docs-page-nav__push",href:this.nextHref},this.nextTitle):"")))}};d.style=".docs-page-nav__dark{display:none}.docs-page-nav__light{display:block}@media (prefers-color-scheme:dark){.docs-page-nav__dark{display:block}.docs-page-nav__light{display:none}}.docs-ui-dark .docs-page-nav__dark{display:block}.docs-ui-dark .docs-page-nav__light{display:none}.docs-ui-light .docs-page-nav__dark{display:none}.docs-ui-light .docs-page-nav__light{display:block}.docs-page-nav__content{display:flex;grid-auto-flow:column;justify-content:space-between}.docs-page-nav__pull,.docs-page-nav__push{margin-bottom:var(--ld-sp-16)}.docs-page-nav__pull{margin-right:var(--ld-sp-16)}.docs-page-nav__push{margin-left:auto}";export{d as docs_page_nav}