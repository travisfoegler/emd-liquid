import{r as t,h as e,H as a}from"./p-e55ca1f2.js";const s=".docs-iframe{bottom:0;left:0;left:max(calc(var(--docs-nav-width) + 50vw - var(--docs-max-width)/2),var(--docs-nav-width));position:fixed;right:0;top:0;top:var(--docs-header-height)}@media (max-width:52rem){.docs-iframe{left:0}}.docs-iframe iframe{height:100%;width:100%}";const i=class{constructor(e){t(this,e);this.src=undefined;this.darkMode=undefined;this.loaded=false}async setDarkMode(t){this.darkMode=t}updateDarkMode(t){if(!this.loaded)return;this.iframe.contentWindow.postMessage({mode:"updateDarkmode",darkMode:t})}componentDidLoad(){this.iframe.addEventListener("load",(()=>{this.loaded=true;this.updateDarkMode(this.darkMode)}))}render(){return e(a,{class:"docs-iframe"},e("iframe",{ref:t=>this.iframe=t,src:this.src}))}static get watchers(){return{darkMode:["updateDarkMode"]}}};i.style=s;export{i as docs_iframe};
//# sourceMappingURL=p-c2b051f5.entry.js.map