import{r,h as l,H as c}from"./p-183495a2.js";import{g as s}from"./p-1133c92e.js";const a='.ld-circular-progress,:host{box-sizing:initial!important}.ld-circular-progress,:host{--ld-circular-progress-valuemin:0;--ld-circular-progress-valuemax:100;--ld-circular-progress-valuenow:0;--ld-circular-progress-size:7.5rem;--ld-circular-progress-transition-duration:var(\n    --ld-transition-duration-normal\n  );--ld-circular-progress-stroke-mask:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200"><circle cx="100" cy="100" r="89" stroke="red" stroke-width="20"/></svg>\');--ld-circular-progress-bar-col:var(--ld-thm-primary);--ld-circular-progress-bar-col-overflow:var(--ld-thm-error);--ld-circular-progress-bg-col:var(--ld-col-neutral-100);--ld-circular-progress-bg-col-overflow:var(--ld-thm-error);--ld-circular-progress-circle-bg-col:var(--ld-circular-progress-bg-col);--ld-circular-progress-circle-bg-col-overflow:var(\n    --ld-circular-progress-bg-col-overflow\n  );--ld-circular-progress-pi:3.141592653589793;--ld-circular-progress-wht-overlay-col:var(--ld-col-wht-alpha-high);--ld-circular-progress-calc-valuenow:max(0,calc(var(--ld-circular-progress-valuenow) - var(--ld-circular-progress-valuemin)));--ld-circular-progress-calc-valuemax:calc(var(--ld-circular-progress-valuemax) - var(--ld-circular-progress-valuemin));--ld-circular-progress-calc-relative-progress:calc(var(--ld-circular-progress-calc-valuenow) / var(--ld-circular-progress-calc-valuemax));--ld-circular-progress-has-overflow:max(0,min(calc((var(--ld-circular-progress-calc-relative-progress) - 1) * 99999999999),1));align-items:center;display:inline-flex;flex-direction:column;gap:var(--ld-sp-4);height:calc(7.5rem - 7.5rem * .4);height:calc(var(--ld-circular-progress-size) - var(--ld-circular-progress-size) * .4);justify-content:center;max-width:100%;padding:calc(7.5rem * .165) calc(7.5rem * .2) calc(7.5rem * .235);padding:calc(var(--ld-circular-progress-size) * .165) calc(var(--ld-circular-progress-size) * .2) calc(var(--ld-circular-progress-size) * .235);position:relative;width:calc(7.5rem - 7.5rem * .4);width:calc(var(--ld-circular-progress-size) - var(--ld-circular-progress-size) * .4)}.ld-circular-progress:after,.ld-circular-progress:before,:host:after,:host:before{bottom:0;content:"";left:0;-webkit-mask-image:var(--ld-circular-progress-stroke-mask);mask-image:var(--ld-circular-progress-stroke-mask);position:absolute;right:0;top:0;transition:opacity var(--ld-circular-progress-transition-duration) linear}.ld-circular-progress:before,:host:before{background-color:var(--ld-circular-progress-bg-col);opacity:calc(1 - var(--ld-circular-progress-has-overflow))}.ld-circular-progress:after,:host:after{box-shadow:inset 0 0 0 calc(var(--ld-circular-progress-has-overflow) * 99rem) var(--ld-circular-progress-wht-overlay-col),inset 0 0 0 calc(var(--ld-circular-progress-has-overflow) * 99rem) var(--ld-circular-progress-bg-col-overflow);opacity:var(--ld-circular-progress-has-overflow);position:absolute}.ld-circular-progress--brand-color,:host(.ld-circular-progress--brand-color){--ld-circular-progress-bar-col:var(--ld-col-wht);--ld-circular-progress-bg-col:var(--ld-thm-primary-focus);--ld-circular-progress-bg-col-overflow:var(--ld-thm-error-active);--ld-circular-progress-wht-overlay-col:var(--ld-col-wht-alpha-low)}.ld-circular-progress__stroke{fill:none;bottom:0;left:0;-webkit-mask-image:var(--ld-circular-progress-stroke-mask);mask-image:var(--ld-circular-progress-stroke-mask);position:absolute;right:0;top:0;z-index:1}.ld-circular-progress__stroke circle{stroke-width:2.2;stroke-dasharray:calc(100 / var(--ld-circular-progress-pi));transform:scaleX(-1) rotate(-90deg);transform-origin:center;transition:opacity var(--ld-circular-progress-transition-duration) linear,stroke-dashoffset var(--ld-circular-progress-transition-duration) ease}.ld-circular-progress__stroke circle:first-of-type{stroke:var(--ld-circular-progress-bar-col);stroke-dashoffset:min(0,calc((-100 + var(--ld-circular-progress-calc-relative-progress) * 100 + 1) / var(--ld-circular-progress-pi)));opacity:calc(1 - var(--ld-circular-progress-has-overflow))}.ld-circular-progress__stroke circle:last-of-type{stroke:var(--ld-circular-progress-bar-col-overflow);stroke-dashoffset:max(calc(-100 / var(--ld-circular-progress-pi)),min(0,calc((-100 + (var(--ld-circular-progress-calc-relative-progress) - 1) * 100 + 1) / var(--ld-circular-progress-pi))));opacity:var(--ld-circular-progress-has-overflow)}';const e=class{constructor(l){r(this,l);this.ariaLabeledby=undefined;this.ariaValuemax=100;this.ariaValuemin=0;this.ariaValuenow=undefined;this.ariaValuetext=undefined;this.brandColor=undefined}render(){const r=s(["ld-circular-progress",this.brandColor&&"ld-circular-progress--brand-color"]);return l(c,{class:r,role:"progressbar",style:Object.assign(Object.assign(Object.assign({},this.ariaValuemax!==undefined&&{"--ld-circular-progress-valuemax":this.ariaValuemax+""}),this.ariaValuemin!==undefined&&{"--ld-circular-progress-valuemin":this.ariaValuemin+""}),this.ariaValuenow!==undefined&&{"--ld-circular-progress-valuenow":this.ariaValuenow+""})},l("svg",{class:"ld-circular-progress__stroke",viewBox:"0 0 10 10"},l("circle",{cx:"5",cy:"5",r:"5"}),l("circle",{cx:"5",cy:"5",r:"5"})),l("slot",null))}};e.style=a;export{e as ld_circular_progress};
//# sourceMappingURL=p-8e845c48.entry.js.map