import{r as t,c as i,h as s,H as e,g as l}from"./p-375b7112.js";import{a as n}from"./p-8668b3f1.js";const o=class{constructor(s){t(this,s),this.ldOptionSelect=i(this,"ldOptionSelect",7),this.selected=!1,this.disabled=!1}handleClick(){this.disabled||this.selected&&this.el.closest(".ld-select__popper--prevent-deselection")||(this.selected=!this.selected,this.ldOptionSelect.emit(this.selected))}handleKeyDown(t){" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),t.stopImmediatePropagation(),this.handleClick())}componentWillLoad(){n.apply(this),void 0===this.value&&window.requestAnimationFrame((()=>{this.value=this.el.innerText}))}render(){return s(e,{class:"ld-option-internal",role:"option","aria-selected":this.selected?"true":"false","aria-disabled":this.disabled?"true":"false",onClick:this.handleClick.bind(this),tabindex:"-1"},s("div",{class:"ld-option-internal__checkbox-wrapper",role:"presentation"},s("ld-checkbox",{class:"ld-option-internal__checkbox",checked:this.selected,disabled:this.disabled})),s("svg",{role:"presentation",class:"ld-option-internal__check",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{style:{visibility:this.selected?"inherit":"hidden"},d:"M15 7L8.40795 13L5 9.63964",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"})),s("span",{class:"ld-option-internal__label",title:this.title},s("slot",null)))}get el(){return l(this)}};o.style="";export{o as ld_option_internal}