import{r as l,h as e,g as t}from"./p-e55ca1f2.js";import{c as a}from"./p-0c5b1c57.js";import{g as d}from"./p-891005fd.js";const s=':host{display:inline-flex}:host .ld-label{width:100%}.ld-label{--ld-label-column-gap:0.625rem;--ld-label-row-gap:var(--ld-sp-6);--ld-label-col:var(--ld-col-neutral-900);--ld-label-disabled-col:var(--ld-col-neutral-300);align-content:flex-start;color:var(--ld-label-col);column-gap:0;display:inline-grid;font:var(--ld-typo-label-s);max-width:100%;row-gap:var(--ld-label-row-gap)}.ld-label--left,.ld-label--right{align-items:center;column-gap:var(--ld-label-column-gap);justify-content:flex-start;row-gap:0}.ld-label--left>.ld-checkbox,.ld-label--left>.ld-input,.ld-label--left>.ld-radio,.ld-label--left>.ld-select,.ld-label--left>.ld-toggle,.ld-label--left>::slotted(.ld-checkbox),.ld-label--left>::slotted(.ld-input),.ld-label--left>::slotted(.ld-radio),.ld-label--left>::slotted(.ld-select),.ld-label--left>::slotted(.ld-toggle),.ld-label--right>.ld-checkbox,.ld-label--right>.ld-input,.ld-label--right>.ld-radio,.ld-label--right>.ld-select,.ld-label--right>.ld-toggle,.ld-label--right>::slotted(.ld-checkbox),.ld-label--right>::slotted(.ld-input),.ld-label--right>::slotted(.ld-radio),.ld-label--right>::slotted(.ld-select),.ld-label--right>::slotted(.ld-toggle){align-self:baseline;grid-area:input}.ld-label--left>.ld-input-message,.ld-label--left>::slotted(.ld-input-message),.ld-label--right>.ld-input-message,.ld-label--right>::slotted(.ld-input-message){grid-area:message;margin-top:var(--ld-sp-4)}.ld-label--align-message.ld-label--left>.ld-input-message,.ld-label--align-message.ld-label--left>::slotted(.ld-input-message){grid-column-start:2}.ld-label--align-message.ld-label--right>.ld-input-message,.ld-label--align-message.ld-label--right>::slotted(.ld-input-message){grid-column-end:2}.ld-label--left{grid-template-areas:"label input" "message message";grid-template-columns:1fr auto}.ld-label--right{grid-template-areas:"input label" "message message";grid-template-columns:auto 1fr}.ld-label--m{font:var(--ld-typo-label-m);line-height:1}';const i=class{constructor(e){l(this,e);this.handleClick=async l=>{const e=this.el.querySelector("ld-input, ld-textarea, ld-toggle, ld-select, ld-button, ld-checkbox, ld-radio, input, textarea, button, select");const t=l.target===e||e.contains(l.target);if(e&&!t&&!e["disabled"]){if("focusInner"in e){await e.focusInner()}else{e.focus()}e.click()}};this.alignMessage=undefined;this.position=undefined;this.size=undefined;this.clonedAttributes=undefined}componentWillLoad(){this.attributesObserver=a.call(this,["align-message","position","size"])}disconnectedCallback(){var l;(l=this.attributesObserver)===null||l===void 0?void 0:l.disconnect()}render(){const l=d(["ld-label",this.alignMessage&&"ld-label--align-message",this.position&&`ld-label--${this.position}`,this.size&&`ld-label--${this.size}`]);return e("label",Object.assign({},this.clonedAttributes,{class:l,onClick:this.handleClick,part:"tag"}),e("slot",null))}get el(){return t(this)}};i.style=s;export{i as ld_label};
//# sourceMappingURL=p-3fb2fc34.entry.js.map