import{r as o,h as a,H as i}from"./p-375b7112.js";import{e as s,N as e}from"./p-952a4d76.js";const n=class{constructor(a){o(this,a)}onClick(){setTimeout((()=>{history.replaceState({},"",window.location.pathname),s.emit(e.close)}))}render(){return a(i,{class:"docs-nav-backdrop"},a("a",{class:"docs-nav-backdrop__a",href:"#backdrop",id:"sidenav-close",title:"Close Menu","aria-label":"Close Menu",onClick:this.onClick},"Close nav"))}};n.style=".docs-nav-backdrop{visibility:hidden;pointer-events:none;background-color:var(--ld-col-rblck-default);opacity:0;z-index:1}@media (max-width:48rem){.docs-nav-backdrop{transition:opacity .2s linear,visibility 0s linear .2s;position:fixed;width:100%;height:100%}}.docs-nav-backdrop,.docs-nav-backdrop__a{-webkit-user-select:none;user-select:none;touch-action:manipulation}.docs-nav-backdrop__a{position:fixed;width:100%;height:100%}";export{n as docs_nav_backdrop}