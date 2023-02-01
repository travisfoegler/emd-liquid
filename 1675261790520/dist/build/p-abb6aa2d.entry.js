import{r as o,h as e,H as t}from"./p-e55ca1f2.js";import{e as l,N as s}from"./p-952a4d76.js";const i=".docs-btn-toggle-nav{bottom:var(--ld-sp-24);display:none;position:fixed;right:var(--ld-sp-24);z-index:2}.docs-btn-toggle-nav a{border-radius:100%;box-shadow:var(--ld-shadow-sticky);color:var(--ld-col-vm);outline:none;touch-action:manipulation;-webkit-user-select:none;user-select:none}.docs-btn-toggle-nav a:focus:focus-visible{box-shadow:var(--ld-shadow-hover);color:var(--ld-col-vm-300)}.docs-btn-toggle-nav a:focus:focus-visible rect{fill:var(--ld-col-vm-800)}@media (hover:hover){.docs-btn-toggle-nav a:hover{box-shadow:var(--ld-shadow-hover);color:var(--ld-col-vm-600)}}.docs-btn-toggle-nav a:active,.docs-btn-toggle-nav a:active:focus-visible{box-shadow:var(--ld-shadow-active);color:var(--ld-col-vm-700)}@media (max-width:52rem){.docs-btn-toggle-nav{display:block}}.docs-btn-toggle-nav__close,.docs-btn-toggle-nav__open{display:inline-flex}.docs-btn-toggle-nav__close{display:none}";const a=class{constructor(e){o(this,e);this.isNavOpen=false}onNavOpen(o){o.preventDefault();location.hash="sidenav-open";l.emit(s.open);this.isNavOpen=true;setTimeout((()=>{this.aClose.focus()}))}onNavClose(o){o.preventDefault();location.hash="";l.emit(s.close);this.isNavOpen=false;setTimeout((()=>{history.replaceState({},"",window.location.pathname);this.aOpen.focus()}))}handleKeyDown(o){if(o.key===" "){o.stopImmediatePropagation();o.preventDefault();if(this.isNavOpen){this.aClose.click()}else{this.aOpen.click()}}}componentDidLoad(){l.on(s.open,(()=>{this.isNavOpen=true}));l.on(s.close,(()=>{this.isNavOpen=false}))}render(){return e(t,{class:"docs-btn-toggle-nav"},e("a",{role:"switch","aria-checked":"true",ref:o=>this.aClose=o,onClick:this.onNavClose.bind(this),class:"docs-btn-toggle-nav__close",href:"#"},e("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},e("title",null,"Close nav"),e("circle",{cx:"20",cy:"20",r:"20",fill:"currentColor"}),e("rect",{width:"4",height:"20",x:"25.7",y:"11.5",fill:"#fff",rx:"2",transform:"rotate(45 25.7 11.5)"}),e("rect",{width:"4",height:"20",x:"11.5",y:"14.3",fill:"#fff",rx:"2",transform:"rotate(-45 11.5 14.3)"}))),e("a",{role:"switch","aria-checked":"false",ref:o=>this.aOpen=o,onClick:this.onNavOpen.bind(this),class:"docs-btn-toggle-nav__open",href:"#sidenav-open"},e("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},e("title",null,"Open nav"),e("circle",{cx:"20",cy:"20",r:"20",fill:"currentColor"}),e("rect",{x:"18",y:"10",width:"4",height:"4",rx:"2",fill:"white"}),e("rect",{x:"18",y:"18",width:"4",height:"4",rx:"2",fill:"white"}),e("rect",{x:"18",y:"26",width:"4",height:"4",rx:"2",fill:"white"}))))}};a.style=i;export{a as docs_btn_toggle_nav};
//# sourceMappingURL=p-abb6aa2d.entry.js.map