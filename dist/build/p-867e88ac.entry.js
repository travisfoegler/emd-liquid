import{r as o,h as e,H as l}from"./p-765a6fc5.js";import{g as s}from"./p-891005fd.js";const d=class{constructor(e){o(this,e),this.centered=!1,this.hasBorder=!1,this.hasPadding=!1,this.opened=!1,this.stacked=!1,this.styles="{}",this.themable=!1,this.currentTheme="ocean",this.isCodeVisible=this.opened,this.isWebComponent=!0,this.handlePickTheme=o=>{this.currentTheme=o.detail},this.handleToggleCode=o=>{this.isCodeVisible=o.detail},this.handleSwitchComponent=()=>{this.isWebComponent=!this.isWebComponent,this.isCodeVisible=!0}}render(){const o=["docs-example",this.isCodeVisible&&"docs-example--code-visible",this.hasBorder&&"docs-example--has-border",this.hasPadding&&"docs-example--has-padding",this.isWebComponent?"docs-example--web-component":" docs-example--css-component"];let d="docs-example__show";return this.themable&&this.currentTheme&&(d+=" ld-theme-"+this.currentTheme.toLowerCase()),this.centered&&(d+=" docs-example__show--centered"),this.stacked&&(d+=" docs-example__show--stacked"),this.background&&(d+=` docs-example__show--${this.background}`),e(l,{class:s(o)},e("div",{class:d,style:JSON.parse(this.styles)},e("slot",{name:"show"}),e("slot",{name:"showCssComponent"})),e("div",{class:"docs-example__tools-scroll-container"},e("div",{class:"docs-example__tools"},this.codeCssComponent&&e("ld-switch",{onLdswitchchange:this.handleSwitchComponent,class:"docs-example__tool-switch",size:"sm"},e("ld-switch-item",{checked:this.isWebComponent},e("ld-icon",{slot:"icon-start",size:"sm","aria-label":"Web Component"},e("svg",{viewBox:"0 0 800 800"},e("path",{fill:"currentColor",d:"M196.3 400l200 346.4H200L0 400 200 53.6h196.3L196.3 400zM505.4 53.6H600L800 400 600 746.4h-94.6l-98-169.8H502L604 400 502 223.4h-94.7l98-169.8z"})))),e("ld-switch-item",{checked:!this.isWebComponent},e("ld-icon",{slot:"icon-start",size:"sm","aria-label":"CSS component"},e("svg",{viewBox:"0 0 800 300",style:{transform:"scale(1.2)"}},e("path",{fill:"currentColor",d:"M0 0h238.7v99.8H99.8v99.8h139v99.9H0V0zM283.2 0h235.3v85.6H381.6v17h136.9v196.9H283.2v-89.9h136.9v-17H283.2V0zM564.7 0H800v85.6H663.1v17H800v196.9H564.7v-89.9h136.9v-17H564.7V0z"}))))),e("div",{class:"docs-example__tool-buttons"},this.themable&&e("docs-pick-theme",{onPickTheme:this.handlePickTheme}),e("docs-toggle-code",{onToggleCode:this.handleToggleCode,isOn:this.isCodeVisible})))),e("div",{class:"docs-example__code"},e("docs-copy-to-cb",{class:"docs-example__copy-to-clipboard",textToCopy:decodeURIComponent(this.isWebComponent?this.code:this.codeCssComponent)}),e("slot",{name:"code"}),e("slot",{name:"codeCssComponent"})))}};d.style=".docs-example__code{background-color:var(--ld-col-neutral-010)}.docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-100);border-color:var(--ld-col-neutral-100)}.docs-example__tools{stroke:var(--ld-col-neutral-900)}.docs-example__copy-to-clipboard,.docs-example__tool-buttons,.docs-example__tool-switch{filter:none}@media (color-index:48){.docs-example__code{background-color:var(--ld-col-neutral-900)}.docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-600);border-color:var(--ld-col-neutral-600)}.docs-example__tools{stroke:var(--ld-col-wht)}.docs-example__copy-to-clipboard,.docs-example__tool-buttons,.docs-example__tool-switch{filter:invert(1) hue-rotate(180deg)}}@media (color:48842621){.docs-example__code{background-color:var(--ld-col-neutral-900)}.docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-600);border-color:var(--ld-col-neutral-600)}.docs-example__tools{stroke:var(--ld-col-wht)}.docs-example__copy-to-clipboard,.docs-example__tool-buttons,.docs-example__tool-switch{filter:invert(1) hue-rotate(180deg)}}@media (prefers-color-scheme:dark){.docs-example__code{background-color:var(--ld-col-neutral-900)}.docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-600);border-color:var(--ld-col-neutral-600)}.docs-example__tools{stroke:var(--ld-col-wht)}.docs-example__copy-to-clipboard,.docs-example__tool-buttons,.docs-example__tool-switch{filter:invert(1) hue-rotate(180deg)}}.docs-ui-light .docs-example__code{background-color:var(--ld-col-neutral-010)}.docs-ui-light .docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-100);border-color:var(--ld-col-neutral-100)}.docs-ui-light .docs-example__tools{stroke:var(--ld-col-neutral-900)}.docs-ui-light .docs-example__copy-to-clipboard,.docs-ui-light .docs-example__tool-buttons,.docs-ui-light .docs-example__tool-switch{filter:none}.docs-ui-dark .docs-example__code{background-color:var(--ld-col-neutral-900)}.docs-ui-dark .docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-600);border-color:var(--ld-col-neutral-600)}.docs-ui-dark .docs-example__tools{stroke:var(--ld-col-wht)}.docs-ui-dark .docs-example__copy-to-clipboard,.docs-ui-dark .docs-example__tool-buttons,.docs-ui-dark .docs-example__tool-switch{filter:invert(1) hue-rotate(180deg)}.docs-example{display:block}.docs-example__code{display:none;overflow:hidden;position:relative}.docs-example__code,.docs-example__code pre{border-bottom-left-radius:var(--ld-br-l);border-bottom-right-radius:var(--ld-br-l)}.docs-example__tools-scroll-container{border-bottom-left-radius:var(--ld-br-l);border-bottom-right-radius:var(--ld-br-l);border-style:solid;border-width:var(--ld-sp-1);display:flex;overflow:auto;position:relative;width:100%}.docs-example__tools{align-items:center;display:flex;flex-grow:1;justify-content:space-between;padding:var(--ld-sp-8)}.docs-example__tool-switch{background-color:var(--ld-col-wht);border-radius:calc(var(--ld-br-m) + 1px);flex-shrink:0;margin-right:var(--ld-sp-24)}.docs-example__tool-buttons{align-items:center;display:flex;flex:1 0;justify-content:flex-end}.docs-example__tool-buttons>:not(:first-child){margin-left:var(--ld-sp-12)}.docs-example__show{background-color:var(--ld-col-neutral-010);border-bottom-width:0;border-top-left-radius:var(--ld-br-l);border-top-right-radius:var(--ld-br-l);color:var(--ld-col-neutral-900);overflow:hidden;will-change:transform}.docs-example--has-border .docs-example__show{border:var(--ld-sp-1) solid var(--ld-col-neutral-100)}.docs-example--has-padding .docs-example__show{padding:0 var(--ld-sp-8) var(--ld-sp-24)}@media (max-width:52rem){.docs-example--has-padding .docs-example__show{padding:0 0 var(--ld-sp-24)}}.docs-example--has-padding .docs-example__show>div>:not(.ld-modal){margin:var(--ld-sp-24) var(--ld-sp-24) 0;max-width:calc(100% - var(--ld-sp-24)*2)}.docs-example__show>div{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:space-evenly;width:100%}.docs-example__show--centered>div{align-items:center}.docs-example__show--stacked>div{flex-direction:column}.docs-example__show--stacked:not(.docs-example__show--centered)>div{align-items:stretch}.docs-example__show--brand{border-color:#0000}.docs-example__show--brand.ld-theme-ocean{background-color:var(--ld-thm-ocean-primary)}.docs-example__show--brand.ld-theme-bubblegum,.docs-example__show--brand.ld-theme-shake,.docs-example__show--brand.ld-theme-solvent{background-color:var(--ld-thm-shake-primary)}.docs-example__show--brand.ld-theme-tea{background-color:var(--ld-thm-tea-primary)}.docs-example__show--light{background-color:var(--ld-col-wht)}.docs-example--code-visible .docs-example__tools-scroll-container{border-radius:0}.docs-example--code-visible .docs-example__code{display:block}.docs-example--css-component [slot=code],.docs-example--css-component [slot=show],.docs-example--web-component [slot=codeCssComponent],.docs-example--web-component [slot=showCssComponent]{display:none}.docs-example__copy-to-clipboard{background-color:var(--ld-col-wht);border-radius:var(--ld-br-m);margin:var(--ld-sp-2) var(--ld-sp-1);position:absolute;right:var(--ld-sp-8);top:var(--ld-sp-8)}";export{d as docs_example}