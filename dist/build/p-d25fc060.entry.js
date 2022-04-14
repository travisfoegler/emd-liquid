import{r as a,h as o,a as t}from"./p-24a1cdec.js";const s=class{constructor(o){a(this,o),this.base=document.querySelector("base").href}render(){return o("ld-header",{class:"docs-topbar ld-theme-bubblegum","logo-title":"Home","logo-url":this.base,sticky:!0},o("img",{alt:"Logo",class:"docs-topbar__logo",role:"presentation",slot:"logo",src:t("./assets/logo.svg")}),o("a",{class:"docs-topbar__headline-link",href:this.base,title:"Home"},o("p",{class:"docs-topbar__headline docs-topbar__headline--long"},o("b",null,"Liquid Oxygen")," Documentation"),o("p",{class:"docs-topbar__headline docs-topbar__headline--short"},o("b",null,"Liquid")," Docs")),o("div",{slot:"end",class:"docs-topbar__links"},o("a",{class:"docs-topbar__link",href:"https://www.figma.com/file/8GYcAOePm8Tt9qqJ7Gnv99/Liquid-Oxygen-(Share)?node-id=3%3A14310",rel:"noreferrer noopener",slot:"end",target:"_blank"},o("img",{src:t("./assets/figma.svg"),alt:"Liquid Oxygen on Figma",role:"presentation"})),o("a",{class:"docs-topbar__link",href:"https://github.com/emdgroup-liquid/liquid",rel:"noreferrer noopener",slot:"end",target:"_blank"},o("img",{src:t("./assets/github.svg"),alt:"Liquid Oxygen on GitHub",role:"presentation"}))))}static get assetsDirs(){return["assets"]}};s.style=".docs-topbar{--ld-header-height:var(--docs-header-height);min-width:20rem}.docs-topbar::part(container){margin:0 var(--ld-sp-4);max-width:calc(var(--docs-max-width) - var(--ld-sp-8));padding:0 var(--ld-sp-32)}.docs-topbar__logo{display:block;margin-left:calc(var(--ld-sp-16)*-1)}@media (min-width:48rem){.docs-topbar__logo{margin-left:calc(var(--ld-sp-8)*-1)}}.docs-topbar__links{margin-right:var(--ld-sp-6);padding-left:var(--ld-sp-40);width:var(--docs-toc-width)}@media (max-width:48rem){.docs-topbar__links{margin-right:calc(var(--ld-sp-12)*-1)}}@media (max-width:80rem){.docs-topbar__links{padding-left:var(--ld-sp-24);width:auto}}.docs-topbar__link{height:var(--ld-sp-24);width:var(--ld-sp-24)}.docs-topbar__link:not(:last-of-type){margin-right:var(--ld-sp-24)}@media (hover:hover){.docs-topbar__link{opacity:.8;transition:opacity .2s linear}.docs-topbar__link:hover{opacity:1}}.docs-topbar__headline-link{text-decoration:none}.docs-topbar__headline{color:var(--ld-col-wht);font-family:var(--ld-font-body)}.docs-topbar__headline b{font-weight:900;margin-right:var(--ld-sp-8)}@media (max-width:40rem){.docs-topbar__headline--long{display:none}}.docs-topbar__headline--short{display:none}@media (max-width:40rem){.docs-topbar__headline--short{display:block}}";export{s as docs_topbar}