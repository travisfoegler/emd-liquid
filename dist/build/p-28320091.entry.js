import{r as a,h as o,H as s}from"./p-e55c60b3.js";import{e as d,N as r}from"./p-952a4d76.js";const c=class{constructor(o){a(this,o),this.isNavOpen=!1}onNavOpen(){this.isNavOpen=!0,document.getElementById("main").setAttribute("inert","true")}onNavClose(){this.isNavOpen=!1,document.getElementById("main").removeAttribute("inert")}handleResize(){window.matchMedia("(max-width: 52rem)").matches?this.isNavOpen&&document.getElementById("main").setAttribute("inert","true"):document.getElementById("main").removeAttribute("inert")}handleClick(a){const o=a.target.closest(".docs-nav__li a");o&&(window.location.href=o.href)}componentWillLoad(){"#sidenav-open"===location.hash&&(location.hash="",setTimeout((()=>{history.replaceState({},"",window.location.pathname)})))}componentDidLoad(){d.on(r.open,this.onNavOpen.bind(this)),d.on(r.close,this.onNavClose.bind(this))}render(){return o(s,{class:"docs-nav",id:"sidenav-open"},o("div",{class:"docs-nav__content"},o("div",{class:"docs-nav__section"},o("docs-switch-dark-light",null),o("docs-btn-search",null)),o("div",{class:"docs-nav__section"},o("nav",{class:"docs-nav__nav",role:"navigation"},o("slot",null))),o("div",{class:"docs-nav__section"},o("p",null,o("span",{class:"docs-nav__dimmed"},"© 2021, Merck KGaA, Darmstadt, Germany")),o("br",null),o("p",null,o("span",{class:"docs-nav__dimmed"},"Get in touch:"),o("span",{class:"docs-nav__contact-links"},o("a",{href:"https://github.com/emdgroup-liquid/liquid/discussions",target:"_blank",rel:"noreferrer noopener"},"GitHub discussions"),o("br",null),o("a",{href:"https://teams.microsoft.com/l/channel/19%3aeae3b35b0cbf42659e45c2b5592e0c0e%40thread.tacv2/General?groupId=88f23881-53e2-4a99-ad5c-8188c1087bbf&tenantId=db76fb59-a377-4120-bc54-59dead7d39c9",target:"_blank",rel:"noreferrer noopener"},"Teams")))),o("div",{class:"docs-nav__section"},o("p",{class:"docs-nav__legal-links"},o("a",{href:"legal/license/"},"License"),o("a",{href:"legal/terms/"},"Terms and Conditions"),o("a",{href:"legal/privacy/"},"Privacy Statement"),o("a",{href:"legal/imprint/"},"Imprint")))))}static get assetsDirs(){return["assets"]}};c.style='.docs-nav__content{box-shadow:var(--ld-sp-1) 0 0 0 var(--ld-col-neutral-100)}.docs-nav:before,.docs-nav__content{background-color:var(--ld-col-neutral-010)}.docs-nav__section{border-bottom-color:var(--ld-col-neutral-100)}.docs-nav__li{color:var(--ld-col-neutral-600)}.docs-nav__li a:hover,.docs-nav__li.docs-nav__li--active{color:var(--ld-col-neutral-900)}.docs-nav__summary--introduction .docs-nav__arrow,.docs-nav__summary--introduction+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-introduction-dark.svg)}.docs-nav__summary--introduction .docs-nav__summary-toggle,.docs-nav__summary--introduction+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-rb)}.docs-nav__summary--guides .docs-nav__arrow,.docs-nav__summary--guides+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-guides-dark.svg)}.docs-nav__summary--guides .docs-nav__summary-toggle,.docs-nav__summary--guides+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-vc)}.docs-nav__summary--globals .docs-nav__arrow,.docs-nav__summary--globals+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-globals-dark.svg)}.docs-nav__summary--globals .docs-nav__summary-toggle,.docs-nav__summary--globals+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-rp)}.docs-nav__summary--components .docs-nav__arrow,.docs-nav__summary--components+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-components-dark.svg)}.docs-nav__summary--components .docs-nav__summary-toggle,.docs-nav__summary--components+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-rg)}.docs-nav__summary--data-visualization .docs-nav__arrow,.docs-nav__summary--data-visualization+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-data-visualization-dark.svg)}.docs-nav__summary--data-visualization .docs-nav__summary-toggle,.docs-nav__summary--data-visualization+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-vm)}.docs-nav__li--active .docs-nav__summary--introduction{color:var(--ld-col-rb)}.docs-nav__li--active .docs-nav__summary--guides{color:var(--ld-col-vc)}.docs-nav__li--active .docs-nav__summary--globals{color:var(--ld-col-rp)}.docs-nav__li--active .docs-nav__summary--components{color:var(--ld-col-rg)}.docs-nav__li--active .docs-nav__summary--data-visualization{color:var(--ld-col-vm)}@media (prefers-color-scheme:dark){.docs-nav__content{box-shadow:var(--ld-sp-1) 0 0 0 var(--ld-col-neutral-600)}.docs-nav:before,.docs-nav__content{background-color:var(--ld-col-neutral-900)}.docs-nav__section{border-bottom-color:var(--ld-col-neutral-800)}.docs-nav__li{color:var(--ld-col-neutral-200)}.docs-nav__li a:hover,.docs-nav__li.docs-nav__li--active{color:var(--ld-col-wht)}.docs-nav__summary--introduction .docs-nav__arrow,.docs-nav__summary--introduction+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-introduction-light.svg)}.docs-nav__summary--introduction .docs-nav__summary-toggle,.docs-nav__summary--introduction+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-rb)}.docs-nav__summary--guides .docs-nav__arrow,.docs-nav__summary--guides+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-guides-light.svg)}.docs-nav__summary--guides .docs-nav__summary-toggle,.docs-nav__summary--guides+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-vc)}.docs-nav__summary--globals .docs-nav__arrow,.docs-nav__summary--globals+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-globals-light.svg)}.docs-nav__summary--globals .docs-nav__summary-toggle,.docs-nav__summary--globals+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-rp)}.docs-nav__summary--components .docs-nav__arrow,.docs-nav__summary--components+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-components-light.svg)}.docs-nav__summary--components .docs-nav__summary-toggle,.docs-nav__summary--components+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-rg)}.docs-nav__summary--data-visualization .docs-nav__arrow,.docs-nav__summary--data-visualization+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-data-visualization-light.svg)}.docs-nav__summary--data-visualization .docs-nav__summary-toggle,.docs-nav__summary--data-visualization+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-vm)}.docs-nav__li--active .docs-nav__summary--introduction{color:var(--ld-col-rb-400)}.docs-nav__li--active .docs-nav__summary--guides{color:var(--ld-col-vc-400)}.docs-nav__li--active .docs-nav__summary--globals{color:var(--ld-col-rp-400)}.docs-nav__li--active .docs-nav__summary--components{color:var(--ld-col-rg-400)}.docs-nav__li--active .docs-nav__summary--data-visualization{color:var(--ld-col-vm-400)}}.docs-ui-dark .docs-nav__content{box-shadow:var(--ld-sp-1) 0 0 0 var(--ld-col-neutral-600)}.docs-ui-dark .docs-nav:before,.docs-ui-dark .docs-nav__content{background-color:var(--ld-col-neutral-900)}.docs-ui-dark .docs-nav__section{border-bottom-color:var(--ld-col-neutral-800)}.docs-ui-dark .docs-nav__li{color:var(--ld-col-neutral-200)}.docs-ui-dark .docs-nav__li a:hover,.docs-ui-dark .docs-nav__li.docs-nav__li--active{color:var(--ld-col-wht)}.docs-ui-dark .docs-nav__summary--introduction .docs-nav__arrow,.docs-ui-dark .docs-nav__summary--introduction+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-introduction-light.svg)}.docs-ui-dark .docs-nav__summary--introduction .docs-nav__summary-toggle,.docs-ui-dark .docs-nav__summary--introduction+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-rb)}.docs-ui-dark .docs-nav__summary--guides .docs-nav__arrow,.docs-ui-dark .docs-nav__summary--guides+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-guides-light.svg)}.docs-ui-dark .docs-nav__summary--guides .docs-nav__summary-toggle,.docs-ui-dark .docs-nav__summary--guides+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-vc)}.docs-ui-dark .docs-nav__summary--globals .docs-nav__arrow,.docs-ui-dark .docs-nav__summary--globals+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-globals-light.svg)}.docs-ui-dark .docs-nav__summary--globals .docs-nav__summary-toggle,.docs-ui-dark .docs-nav__summary--globals+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-rp)}.docs-ui-dark .docs-nav__summary--components .docs-nav__arrow,.docs-ui-dark .docs-nav__summary--components+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-components-light.svg)}.docs-ui-dark .docs-nav__summary--components .docs-nav__summary-toggle,.docs-ui-dark .docs-nav__summary--components+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-rg)}.docs-ui-dark .docs-nav__summary--data-visualization .docs-nav__arrow,.docs-ui-dark .docs-nav__summary--data-visualization+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-data-visualization-light.svg)}.docs-ui-dark .docs-nav__summary--data-visualization .docs-nav__summary-toggle,.docs-ui-dark .docs-nav__summary--data-visualization+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-vm)}.docs-ui-dark .docs-nav__li--active .docs-nav__summary--introduction{color:var(--ld-col-rb-400)}.docs-ui-dark .docs-nav__li--active .docs-nav__summary--guides{color:var(--ld-col-vc-400)}.docs-ui-dark .docs-nav__li--active .docs-nav__summary--globals{color:var(--ld-col-rp-400)}.docs-ui-dark .docs-nav__li--active .docs-nav__summary--components{color:var(--ld-col-rg-400)}.docs-ui-dark .docs-nav__li--active .docs-nav__summary--data-visualization{color:var(--ld-col-vm-400)}.docs-ui-light .docs-nav__content{box-shadow:var(--ld-sp-1) 0 0 0 var(--ld-col-neutral-100)}.docs-ui-light .docs-nav:before,.docs-ui-light .docs-nav__content{background-color:var(--ld-col-neutral-010)}.docs-ui-light .docs-nav__section{border-bottom-color:var(--ld-col-neutral-100)}.docs-ui-light .docs-nav__li{color:var(--ld-col-neutral-600)}.docs-ui-light .docs-nav__li a:hover,.docs-ui-light .docs-nav__li.docs-nav__li--active{color:var(--ld-col-neutral-900)}.docs-ui-light .docs-nav__summary--introduction .docs-nav__arrow,.docs-ui-light .docs-nav__summary--introduction+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-introduction-dark.svg)}.docs-ui-light .docs-nav__summary--introduction .docs-nav__summary-toggle,.docs-ui-light .docs-nav__summary--introduction+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-rb)}.docs-ui-light .docs-nav__summary--guides .docs-nav__arrow,.docs-ui-light .docs-nav__summary--guides+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-guides-dark.svg)}.docs-ui-light .docs-nav__summary--guides .docs-nav__summary-toggle,.docs-ui-light .docs-nav__summary--guides+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-vc)}.docs-ui-light .docs-nav__summary--globals .docs-nav__arrow,.docs-ui-light .docs-nav__summary--globals+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-globals-dark.svg)}.docs-ui-light .docs-nav__summary--globals .docs-nav__summary-toggle,.docs-ui-light .docs-nav__summary--globals+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-rp)}.docs-ui-light .docs-nav__summary--components .docs-nav__arrow,.docs-ui-light .docs-nav__summary--components+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-components-dark.svg)}.docs-ui-light .docs-nav__summary--components .docs-nav__summary-toggle,.docs-ui-light .docs-nav__summary--components+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-rg)}.docs-ui-light .docs-nav__summary--data-visualization .docs-nav__arrow,.docs-ui-light .docs-nav__summary--data-visualization+ul .docs-nav__summary .docs-nav__arrow{background-image:url(dist/build/assets/chevron-data-visualization-dark.svg)}.docs-ui-light .docs-nav__summary--data-visualization .docs-nav__summary-toggle,.docs-ui-light .docs-nav__summary--data-visualization+ul .docs-nav__summary .docs-nav__summary-toggle{background-color:var(--ld-col-vm)}.docs-ui-light .docs-nav__li--active .docs-nav__summary--introduction{color:var(--ld-col-rb)}.docs-ui-light .docs-nav__li--active .docs-nav__summary--guides{color:var(--ld-col-vc)}.docs-ui-light .docs-nav__li--active .docs-nav__summary--globals{color:var(--ld-col-rp)}.docs-ui-light .docs-nav__li--active .docs-nav__summary--components{color:var(--ld-col-rg)}.docs-ui-light .docs-nav__li--active .docs-nav__summary--data-visualization{color:var(--ld-col-vm)}.docs-nav{flex-shrink:0;font:var(--ld-typo-body-s);overflow-x:hidden;overflow-y:auto;overflow:hidden auto;overscroll-behavior:contain;pointer-events:none;z-index:2}.docs-nav:before{content:"";display:block;height:100%;left:0;position:fixed;width:calc(50vw - var(--docs-max-width)/2 + 2rem);z-index:-1}.docs-nav ul{list-style:none;pointer-events:all}.docs-nav details[open]>summary .docs-nav__arrow{transform:rotate(90deg)}.docs-nav .docs-switch-dark-light{display:block;margin-bottom:var(--ld-sp-32)}.docs-nav__content{bottom:0;overflow-x:hidden;overflow-y:scroll;overflow:hidden scroll;overscroll-behavior:contain;padding:var(--ld-sp-24) var(--ld-sp-24) var(--ld-sp-24) var(--ld-sp-32);pointer-events:all;position:fixed;top:3.125rem;width:var(--docs-nav-width)}@media (max-width:52rem){.docs-nav__content{position:fixed;top:0}}.docs-nav__section{border-bottom-style:solid;border-bottom-width:var(--ld-sp-1);padding:var(--ld-sp-24) var(--ld-sp-8) var(--ld-sp-24) 0}.docs-nav__section:first-of-type{padding-top:0}.docs-nav__section:last-of-type{border-bottom:0;padding-bottom:0}.docs-nav__nav>ul>li:first-of-type{margin-top:0}.docs-nav__summary{cursor:pointer;display:inline-block;font:var(--ld-typo-label-s);font-weight:700;margin:var(--ld-sp-24) 0 var(--ld-sp-6);outline:none;pointer-events:none;position:relative;text-transform:uppercase;-webkit-user-select:none;user-select:none;width:100%}.docs-nav__summary::-webkit-details-marker,.docs-nav__summary::marker{display:none}.docs-nav__summary a{padding-left:var(--ld-sp-40);pointer-events:all}.docs-nav__summary a:before{height:var(--ld-sp-24);opacity:.5;outline:none;position:absolute;transform:translate(-170%,-20%);width:var(--ld-sp-24)}.docs-nav__li--active .docs-nav__summary a:before,.docs-nav__summary a:hover:before{opacity:1}li ul .docs-nav__summary{font-weight:inherit;margin-top:0;text-transform:none}li ul .docs-nav__summary+ul{margin-left:var(--ld-sp-12)}li ul li.docs-nav__li--active>details>.docs-nav__summary{font-weight:700}.docs-nav__arrow{align-items:center;background-position:50%;background-repeat:no-repeat;height:1rem;justify-content:center;pointer-events:none;width:.8rem;z-index:1}.docs-nav__arrow,.docs-nav__summary-toggle{position:absolute;right:0;top:calc(var(--ld-sp-1)*-1)}.docs-nav__summary-toggle{border-radius:var(--ld-br-m);height:var(--ld-sp-24);opacity:0;outline:none;pointer-events:all;transform:translate(25%,-20%);width:var(--ld-sp-24)}.docs-nav__summary-toggle:hover{opacity:.5}body:not(.safari) .docs-nav__summary:focus:focus-visible{outline:auto;outline:5px auto -webkit-focus-ring-color}.docs-nav__summary--introduction a:before{background-image:url(dist/build/assets/introduction.svg);content:""}.docs-nav__summary--guides a:before{background-image:url(dist/build/assets/guides.svg);content:""}.docs-nav__summary--components a:before{background-image:url(dist/build/assets/components.svg);content:""}.docs-nav__summary--data-visualization a:before{background-image:url(dist/build/assets/data-visualization.svg);content:""}.docs-nav__summary--globals a:before{background-image:url(dist/build/assets/globals.svg);content:""}.docs-nav__li{margin-top:var(--ld-sp-12)}.docs-nav__li ul{padding-left:var(--ld-sp-40)}.docs-nav__li>a{display:block}.docs-nav__li .docs-nav__li .docs-nav__summary a,.docs-nav__li .docs-nav__li ul{padding:0}.docs-nav__li--active>a{font-weight:700}.docs-nav__contact-links,.docs-nav__legal-links{display:flex}.docs-nav__contact-links a,.docs-nav__legal-links a{opacity:.8}@media (hover:hover){.docs-nav__contact-links a:hover,.docs-nav__legal-links a:hover{opacity:1}}.docs-nav__contact-links{flex-wrap:wrap;margin-top:var(--ld-sp-12)}.docs-nav__contact-links a{margin-right:var(--ld-sp-24)}.docs-nav__legal-links{flex-direction:column}.docs-nav__legal-links a:not(:first-of-type){margin-top:var(--ld-sp-12)}.docs-nav__dimmed{opacity:.8}';export{c as docs_nav}