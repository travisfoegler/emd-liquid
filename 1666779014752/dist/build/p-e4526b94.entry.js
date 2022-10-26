import{r as a,c as d,h as i,g as e}from"./p-765a6fc5.js";import{g as l}from"./p-891005fd.js";import{c as n}from"./p-dfb8e7ac.js";const s=class{constructor(i){a(this,i),this.ldSidenavBack=d(this,"ldSidenavBack",7),this.backLabel="Back",this.parentLabel="",this.rounded=!1,this.onClick=()=>{this.ldSidenavBack.emit()},this.onKeyDown=a=>{[" ","Enter"].includes(a.key)&&(a.preventDefault(),this.ldSidenavBack.emit())}}handleSidenavCollapsedChange(a){a.target===this.sidenav&&(this.sidenavCollapsed=a.detail.collapsed)}handleSidenavBreakpointChange(a){a.target===this.sidenav&&(this.sidenavClosable=a.detail)}async updateLabel(a){this.parentLabel=a||""}componentWillLoad(){this.sidenav=n("ld-sidenav",this.el),this.rounded=!!this.el.querySelector("ld-sidenav-navitem[rounded]")}render(){const a=l(["ld-sidenav-back",this.parentLabel&&"ld-sidenav-back--is-back",this.rounded&&"ld-sidenav-back--rounded",this.sidenavCollapsed&&!this.sidenavClosable&&"ld-sidenav-back--collapsed"]);return i("div",{tabIndex:this.parentLabel?0:void 0,role:this.parentLabel?"button":void 0,"aria-label":this.backLabel,class:a,onClick:this.onClick,onKeyDown:this.onKeyDown,part:"back focusable"},i("div",{class:"ld-sidenav-back__btn-back",part:"btn-back"},i("div",{class:"ld-sidenav-back__bg",part:"bg"},i("div",{class:"ld-sidenav-back__bg-left"}),i("div",{class:"ld-sidenav-back__bg-center"}),i("div",{class:"ld-sidenav-back__bg-right"})),i("div",{class:"ld-sidenav-back__icon",part:"icon-container"},i("svg",{part:"icon",width:"12",height:"12",fill:"none"},i("path",{d:"M4.333 1.832 1 5.999l3.333 4.166M1 6h10",stroke:"#F8F8FC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}))),i("span",{class:"ld-sidenav-back__btn-back-label",part:"label"},this.parentLabel)),i("div",{class:"ld-sidenav-back__slot-container",part:"slot-container"},i("slot",null)))}get el(){return e(this)}};s.style='.ld-sidenav-back{--ld-sidenav-back-bg-inset:var(--ld-sp-6);--ld-sidenav-back-border-radius:var(--ld-br-l);--ld-sidenav-back-icon-size:var(--ld-sp-24);--ld-sidenav-back-col:var(--ld-col-neutral-800);--ld-sidenav-back-col-active:var(--ld-thm-primary-active);--ld-sidenav-back-col-hover:var(--ld-thm-primary);--ld-sidenav-back-col-focus:var(--ld-thm-primary);--ld-sidenav-back-indicator-col:#0000;--ld-sidenav-back-indicator-col-focus:var(--ld-thm-primary-focus);--ld-sidenav-back-indicator-col-active:var(--ld-thm-primary);display:block;outline:none}@media (hover:hover){.ld-sidenav-back:where(:hover){--ld-sidenav-back-col:var(--ld-sidenav-back-col-hover);--ld-sidenav-back-indicator-col:var(--ld-col-neutral-300)}}.ld-sidenav-back:focus:focus-visible{--ld-sidenav-back-col:var(--ld-sidenav-back-col-focus);--ld-sidenav-back-indicator-col:var(--ld-sidenav-back-indicator-col-focus)}.ld-sidenav-back:active{--ld-sidenav-back-col:var(--ld-sidenav-back-col-active);--ld-sidenav-back-indicator-col:var(\n      --ld-sidenav-back-indicator-col-active\n    )}.ld-sidenav-back:active .ld-sidenav-back__bg{opacity:.3}.ld-sidenav-back--rounded{--ld-sidenav-back-border-radius:var(--ld-br-full)}.ld-sidenav-back ::slotted(ld-sidenav-navitem){margin-bottom:var(--ld-sidenav-padding-y);margin-top:var(--ld-sidenav-padding-y)}.ld-sidenav-back.ld-sidenav-back--collapsed .ld-sidenav-back__bg{transform:translateX(calc(var(--ld-sidenav-width) - var(--ld-sidenav-width-collapsed)))}.ld-sidenav-back__btn-back{-webkit-touch-callout:none;align-items:center;background-color:initial;border:0;box-sizing:border-box;color:var(--ld-col-neutral-800);color:var(--ld-sidenav-back,var(--ld-col-neutral-800));cursor:pointer;display:none;font:var(--ld-typo-body-s);font-weight:700;gap:var(--ld-sp-12);grid-template-columns:auto 1fr;line-height:1;margin:var(--ld-sidenav-padding-y) var(--ld-sidenav-padding-x);outline:none;padding:0;position:relative;text-align:left;touch-action:manipulation;-webkit-user-select:none;user-select:none}.ld-sidenav-back__bg{bottom:calc(var(--ld-sidenav-back-bg-inset)*-1);display:block;left:calc(var(--ld-sidenav-back-bg-inset)*-1);opacity:.2;pointer-events:none;position:absolute;right:calc(var(--ld-sidenav-back-bg-inset)*-1);top:calc(var(--ld-sidenav-back-bg-inset)*-1);transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-back__btn-back-label,.ld-sidenav-back__icon{position:relative;z-index:0}.ld-sidenav-back__bg-center,.ld-sidenav-back__bg-left,.ld-sidenav-back__bg-right{background-color:var(--ld-sidenav-back-indicator-col);bottom:0;pointer-events:all;position:absolute;top:0;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-back__bg-left,.ld-sidenav-back__bg-right{width:calc(var(--ld-sidenav-navitem-icon-size)*.5 + var(--ld-sp-6))}.ld-sidenav-back__bg-left{border-bottom-left-radius:calc(var(--ld-sidenav-back-border-radius) + var(--ld-sp-6));border-top-left-radius:calc(var(--ld-sidenav-back-border-radius) + var(--ld-sp-6));left:0}.ld-sidenav-back__bg-right{border-bottom-right-radius:calc(var(--ld-sidenav-back-border-radius) + var(--ld-sp-6));border-top-right-radius:calc(var(--ld-sidenav-back-border-radius) + var(--ld-sp-6));right:0}.ld-sidenav-back--collapsed .ld-sidenav-back__bg-right{transform:translateX(calc(var(--ld-sidenav-translate-x-delta)*-1))}.ld-sidenav-back__bg-center{left:calc(var(--ld-sidenav-navitem-icon-size)*.5 + var(--ld-sp-6));right:calc(var(--ld-sidenav-navitem-icon-size)*.5 + var(--ld-sp-6));transform-origin:left}.ld-sidenav-back--collapsed .ld-sidenav-back__bg-center{transform:scaleX(0)}.ld-sidenav-back--is-back .ld-sidenav-back__btn-back{display:grid}.ld-sidenav-back--is-back .ld-sidenav-back__slot-container{display:none}.ld-sidenav-back__icon{align-items:center;aspect-ratio:1;display:flex;justify-content:center;position:relative;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease;width:var(--ld-sidenav-navitem-icon-size)}.ld-sidenav-back--collapsed .ld-sidenav-back__icon{transform:translateX(var(--ld-sidenav-translate-x-delta))}.ld-sidenav-back__icon:before{background-color:var(--ld-thm-primary-active);border-radius:var(--ld-br-full);content:"";height:var(--ld-sidenav-back-icon-size);overflow:hidden;position:absolute;width:var(--ld-sidenav-back-icon-size);z-index:-1}.ld-sidenav-back__btn-back-label{color:var(--ld-sidenav-back-col);overflow:hidden;padding-right:var(--ld-sp-6);position:relative;text-overflow:ellipsis;transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease;white-space:nowrap}.ld-sidenav-back--collapsed .ld-sidenav-back__btn-back-label{opacity:0;transform:translateX(var(--ld-sidenav-translate-x-delta))}';export{s as ld_sidenav_back}