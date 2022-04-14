import{r as t,h as o,g as l}from"./p-24a1cdec.js";import{c as p}from"./p-0c5b1c57.js";const a=class{constructor(o){t(this,o),this.variant="body-m",this.getDefaultTag=()=>{var t;return null!==(t={"cap-m":"span","cap-l":"span","label-s":"span","label-m":"span",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",b1:"h1",b2:"h2",b3:"h3",b4:"h4",b5:"h5",b6:"h6",xb1:"h1",xb2:"h2",xb3:"h3",xh1:"h1",xh2:"h2",xh3:"h3",xh4:"h4",xh5:"h5",xh6:"h6"}[this.variant])&&void 0!==t?t:"p"}}applyAriaLabel(){["cap-m","cap-l","b1","b2","b3","b4","b5","b6","xb1","xb2","xb3"].includes(this.variant)&&this.root.setAttribute("aria-label",this.ariaLabel||this.el.innerHTML.trim())}componentWillLoad(){this.attributesObserver=p.call(this,["tag","variant"])}componentDidRender(){this.applyAriaLabel()}disconnectedCallback(){var t;null===(t=this.attributesObserver)||void 0===t||t.disconnect()}render(){const t=this.tag||this.getDefaultTag();return o(t,Object.assign({},this.clonedAttributes,{class:`ld-typo ld-typo--${this.variant}`,part:"tag",ref:t=>this.root=t}),o("slot",null))}get el(){return l(this)}};a.style=":host{display:block}:host([variant=b1]),:host([variant=b2]),:host([variant=b3]),:host([variant=b4]),:host([variant=b5]),:host([variant=b6]),:host([variant^=xb]){color:var(--ld-typo-text-brand-color)}:host .ld-typo{color:inherit;margin:0}.ld-typo,:host{--ld-typo-text-brand-color:var(--ld-thm-primary)}:where(.ld-typo){margin:0}.ld-typo,.ld-typo--body-m{font:var(--ld-typo-body-m)}.ld-typo--body-l{font:var(--ld-typo-body-l)}.ld-typo--body-s{font:var(--ld-typo-body-s)}.ld-typo--body-xl{font:var(--ld-typo-body-xl)}.ld-typo--body-xs{font:var(--ld-typo-body-xs)}.ld-typo--cap-l{font:var(--ld-typo-cap-l);letter-spacing:.15em;text-transform:uppercase}.ld-typo--cap-m{font:var(--ld-typo-cap-m);letter-spacing:.1em;text-transform:uppercase}.ld-typo--label-m{font:var(--ld-typo-label-m)}.ld-typo--label-s{font:var(--ld-typo-label-s)}.ld-typo--h1{font:var(--ld-typo-h1)}.ld-typo--h2{font:var(--ld-typo-h2)}.ld-typo--h3{font:var(--ld-typo-h3)}.ld-typo--h4{font:var(--ld-typo-h4)}.ld-typo--h5{font:var(--ld-typo-h5)}.ld-typo--h6{font:var(--ld-typo-h6)}.ld-typo--b1{font:var(--ld-typo-b1)}.ld-typo--b1,.ld-typo--b2{color:var(--ld-typo-text-brand-color);text-transform:uppercase}.ld-typo--b2{font:var(--ld-typo-b2)}.ld-typo--b3{font:var(--ld-typo-b3)}.ld-typo--b3,.ld-typo--b4{color:var(--ld-typo-text-brand-color);text-transform:uppercase}.ld-typo--b4{font:var(--ld-typo-b4)}.ld-typo--b5{font:var(--ld-typo-b5)}.ld-typo--b5,.ld-typo--b6{color:var(--ld-typo-text-brand-color);text-transform:uppercase}.ld-typo--b6{font:var(--ld-typo-b6)}.ld-typo--xb1{font:var(--ld-typo-xb1)}.ld-typo--xb1,.ld-typo--xb2{color:var(--ld-typo-text-brand-color);text-transform:uppercase}.ld-typo--xb2{font:var(--ld-typo-xb2)}.ld-typo--xb3{color:var(--ld-typo-text-brand-color);font:var(--ld-typo-xb3);text-transform:uppercase}.ld-typo--xh1{font:var(--ld-typo-xh1)}.ld-typo--xh2{font:var(--ld-typo-xh2)}.ld-typo--xh3{font:var(--ld-typo-xh3)}.ld-typo--xh4{font:var(--ld-typo-xh4)}.ld-typo--xh5{font:var(--ld-typo-xh5)}.ld-typo--xh6{font:var(--ld-typo-xh6)}";export{a as ld_typo}