import{r,h as o}from"./p-765a6fc5.js";const t=class{constructor(o){r(this,o),this.contributors=void 0}render(){const r=JSON.parse(this.contributors);return r&&0!==r.length?o("section",{class:"docs-contributors"},o("hr",null),o("ld-typo",{class:"docs-contributors__heading",variant:"h4",tag:"h2"},"Contributors"),o("ul",null,r.map((r=>o("li",null,o("a",{href:`https://github.com/${r}`,target:"_blank",rel:"noreferrer noopener"},o("img",{class:"docs-contributors__img",src:`https://github.com/${r}.png?size=90`,loading:"lazy",width:"32",height:"32",alt:`Contributor ${r}`,importance:"low"}))))))):null}};t.style=".docs-contributors__img{border-color:var(--ld-col-wht)}@media (color-index:48){.docs-contributors__img{border-color:var(--ld-col-neutral-800)}}@media (color:48842621){.docs-contributors__img{border-color:var(--ld-col-neutral-800)}}@media (prefers-color-scheme:dark){.docs-contributors__img{border-color:var(--ld-col-neutral-800)}}.docs-ui-light .docs-contributors__img{border-color:var(--ld-col-wht)}.docs-ui-dark .docs-contributors__img{border-color:var(--ld-col-neutral-800)}.docs-contributors{display:block;margin:var(--ld-sp-40) 0}.docs-contributors hr{border:0;height:var(--ld-sp-1);margin-bottom:var(--ld-sp-40)}.docs-contributors ul{display:flex;flex-direction:row-reverse;flex-wrap:wrap;justify-content:flex-end;list-style:none;margin:0;padding:0}.docs-contributors li{flex-shrink:0}.docs-contributors li:not(:last-child){margin-left:calc(var(--ld-sp-8)*-1)}.docs-contributors li:hover{z-index:2}.docs-contributors a{border:0;color:var(--color-dodger-blue);display:inline-flex;text-align:center;text-decoration:none;transition:transform .05s ease}.docs-contributors a:hover{border:0;transform:scale(1.125);z-index:1}.docs-contributors__heading{margin-bottom:var(--ld-sp-12)}.docs-contributors__img{border:var(--ld-sp-2) solid;border-radius:var(--ld-br-full)}";export{t as docs_contributors}