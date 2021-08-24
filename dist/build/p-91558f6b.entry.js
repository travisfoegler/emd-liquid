import{r as e,h as l,g as d}from"./p-375b7112.js";import{c as h}from"./p-b1ba226f.js";import{a}from"./p-e8172058.js";const t=class{constructor(l){e(this,l)}validateLevel(){if(![1,2,3,4,5,6].includes(parseInt(this.level+"",10)))throw new TypeError(`ld-heading level prop invalid; got ${this.level}`)}validateVisualLevel(){if(![void 0,"h1","h2","h3","h4","h5","h6","b1","b2","b3","b4","b5","b6","xb1","xb2","xb3","xh1","xh2","xh3","xh4","xh5","xh6"].includes(this.visualLevel))throw new TypeError(`ld-heading visualLevel prop invalid; got ${this.visualLevel}`)}applyAriaLabel(){var e,l;if(0===(null===(e=this.visualLevel)||void 0===e?void 0:e.indexOf("b"))||0===(null===(l=this.visualLevel)||void 0===l?void 0:l.indexOf("xb"))){const e=this.el.querySelector(".ld-heading");e.setAttribute("aria-label",this.ariaLabel||e.innerHTML.trim())}}componentWillLoad(){a.apply(this),this.validateLevel(),this.validateVisualLevel()}componentDidRender(){this.applyAriaLabel()}render(){return l(`h${this.level}`,Object.assign({class:`ld-heading ld-heading--${this.visualLevel||"h"+this.level}`},h(this.el)),l("slot",null))}get el(){return d(this)}};t.style=":where(ld-heading){display:block}.ld-heading--h1{font:var(--ld-typo-h1)}.ld-heading--h2{font:var(--ld-typo-h2)}.ld-heading--h3{font:var(--ld-typo-h3)}.ld-heading--h4{font:var(--ld-typo-h4)}.ld-heading--h5{font:var(--ld-typo-h5)}.ld-heading--h6{font:var(--ld-typo-h6)}.ld-heading--b1{font:var(--ld-typo-b1);text-transform:uppercase}.ld-heading--b2{font:var(--ld-typo-b2);text-transform:uppercase}.ld-heading--b3{font:var(--ld-typo-b3);text-transform:uppercase}.ld-heading--b4{font:var(--ld-typo-b4);text-transform:uppercase}.ld-heading--b5{font:var(--ld-typo-b5);text-transform:uppercase}.ld-heading--b6{font:var(--ld-typo-b6);text-transform:uppercase}.ld-heading--xb1{font:var(--ld-typo-xb1);text-transform:uppercase}.ld-heading--xb2{font:var(--ld-typo-xb2);text-transform:uppercase}.ld-heading--xb3{font:var(--ld-typo-xb3);text-transform:uppercase}.ld-heading--xh1{font:var(--ld-typo-xh1)}.ld-heading--xh2{font:var(--ld-typo-xh2)}.ld-heading--xh3{font:var(--ld-typo-xh3)}.ld-heading--xh4{font:var(--ld-typo-xh4)}.ld-heading--xh5{font:var(--ld-typo-xh5)}.ld-heading--xh6{font:var(--ld-typo-xh6)}.ld-heading--h1,.ld-heading--h2,.ld-heading--h3,.ld-heading--h4,.ld-heading--h5,.ld-heading--h6,.ld-heading--xb1,.ld-heading--xb2,.ld-heading--xb3,.ld-heading--xh1,.ld-heading--xh2,.ld-heading--xh3,.ld-heading--xh4,.ld-heading--xh5,.ld-heading--xh6{font-weight:700}:where(:not(ld-heading)>.ld-heading--b1),:where(:not(ld-heading)>.ld-heading--b2),:where(:not(ld-heading)>.ld-heading--b3),:where(:not(ld-heading)>.ld-heading--b4),:where(:not(ld-heading)>.ld-heading--b5),:where(:not(ld-heading)>.ld-heading--b6),:where(:not(ld-heading)>.ld-heading--xb1),:where(:not(ld-heading)>.ld-heading--xb2),:where(:not(ld-heading)>.ld-heading--xb3),:where(ld-heading[visual-level=b1]),:where(ld-heading[visual-level=b2]),:where(ld-heading[visual-level=b3]),:where(ld-heading[visual-level=b4]),:where(ld-heading[visual-level=b5]),:where(ld-heading[visual-level=b6]),:where(ld-heading[visual-level=xb1]),:where(ld-heading[visual-level=xb2]),:where(ld-heading[visual-level=xb3]),:where(ld-heading[visuallevel=b1]),:where(ld-heading[visuallevel=b2]),:where(ld-heading[visuallevel=b3]),:where(ld-heading[visuallevel=b4]),:where(ld-heading[visuallevel=b5]),:where(ld-heading[visuallevel=b6]),:where(ld-heading[visuallevel=xb1]),:where(ld-heading[visuallevel=xb2]),:where(ld-heading[visuallevel=xb3]){color:var(--ld-col-rb-default)}.ld-theme-ocean :where(:not(ld-heading)>.ld-heading--b1),[class*=ld-theme] .ld-theme-ocean :where(:not(ld-heading)>.ld-heading--b1),.ld-theme-ocean :where(:not(ld-heading)>.ld-heading--b2),[class*=ld-theme] .ld-theme-ocean :where(:not(ld-heading)>.ld-heading--b2),.ld-theme-ocean :where(:not(ld-heading)>.ld-heading--b3),[class*=ld-theme] .ld-theme-ocean :where(:not(ld-heading)>.ld-heading--b3),.ld-theme-ocean :where(:not(ld-heading)>.ld-heading--b4),[class*=ld-theme] .ld-theme-ocean :where(:not(ld-heading)>.ld-heading--b4),.ld-theme-ocean :where(:not(ld-heading)>.ld-heading--b5),[class*=ld-theme] .ld-theme-ocean :where(:not(ld-heading)>.ld-heading--b5),.ld-theme-ocean :where(:not(ld-heading)>.ld-heading--b6),[class*=ld-theme] .ld-theme-ocean :where(:not(ld-heading)>.ld-heading--b6),.ld-theme-ocean :where(:not(ld-heading)>.ld-heading--xb1),[class*=ld-theme] .ld-theme-ocean :where(:not(ld-heading)>.ld-heading--xb1),.ld-theme-ocean :where(:not(ld-heading)>.ld-heading--xb2),[class*=ld-theme] .ld-theme-ocean :where(:not(ld-heading)>.ld-heading--xb2),.ld-theme-ocean :where(:not(ld-heading)>.ld-heading--xb3),[class*=ld-theme] .ld-theme-ocean :where(:not(ld-heading)>.ld-heading--xb3),.ld-theme-ocean :where(ld-heading[visual-level=b1]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visual-level=b1]),.ld-theme-ocean :where(ld-heading[visual-level=b2]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visual-level=b2]),.ld-theme-ocean :where(ld-heading[visual-level=b3]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visual-level=b3]),.ld-theme-ocean :where(ld-heading[visual-level=b4]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visual-level=b4]),.ld-theme-ocean :where(ld-heading[visual-level=b5]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visual-level=b5]),.ld-theme-ocean :where(ld-heading[visual-level=b6]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visual-level=b6]),.ld-theme-ocean :where(ld-heading[visual-level=xb1]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visual-level=xb1]),.ld-theme-ocean :where(ld-heading[visual-level=xb2]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visual-level=xb2]),.ld-theme-ocean :where(ld-heading[visual-level=xb3]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visual-level=xb3]),.ld-theme-ocean :where(ld-heading[visuallevel=b1]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visuallevel=b1]),.ld-theme-ocean :where(ld-heading[visuallevel=b2]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visuallevel=b2]),.ld-theme-ocean :where(ld-heading[visuallevel=b3]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visuallevel=b3]),.ld-theme-ocean :where(ld-heading[visuallevel=b4]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visuallevel=b4]),.ld-theme-ocean :where(ld-heading[visuallevel=b5]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visuallevel=b5]),.ld-theme-ocean :where(ld-heading[visuallevel=b6]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visuallevel=b6]),.ld-theme-ocean :where(ld-heading[visuallevel=xb1]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visuallevel=xb1]),.ld-theme-ocean :where(ld-heading[visuallevel=xb2]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visuallevel=xb2]),.ld-theme-ocean :where(ld-heading[visuallevel=xb3]),[class*=ld-theme] .ld-theme-ocean :where(ld-heading[visuallevel=xb3]){color:var(--ld-col-rb-default)}.ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--b1),.ld-theme-shake :where(:not(ld-heading)>.ld-heading--b1),.ld-theme-solvent :where(:not(ld-heading)>.ld-heading--b1),[class*=ld-theme] .ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--b1),[class*=ld-theme] .ld-theme-shake :where(:not(ld-heading)>.ld-heading--b1),[class*=ld-theme] .ld-theme-solvent :where(:not(ld-heading)>.ld-heading--b1),.ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--b2),.ld-theme-shake :where(:not(ld-heading)>.ld-heading--b2),.ld-theme-solvent :where(:not(ld-heading)>.ld-heading--b2),[class*=ld-theme] .ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--b2),[class*=ld-theme] .ld-theme-shake :where(:not(ld-heading)>.ld-heading--b2),[class*=ld-theme] .ld-theme-solvent :where(:not(ld-heading)>.ld-heading--b2),.ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--b3),.ld-theme-shake :where(:not(ld-heading)>.ld-heading--b3),.ld-theme-solvent :where(:not(ld-heading)>.ld-heading--b3),[class*=ld-theme] .ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--b3),[class*=ld-theme] .ld-theme-shake :where(:not(ld-heading)>.ld-heading--b3),[class*=ld-theme] .ld-theme-solvent :where(:not(ld-heading)>.ld-heading--b3),.ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--b4),.ld-theme-shake :where(:not(ld-heading)>.ld-heading--b4),.ld-theme-solvent :where(:not(ld-heading)>.ld-heading--b4),[class*=ld-theme] .ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--b4),[class*=ld-theme] .ld-theme-shake :where(:not(ld-heading)>.ld-heading--b4),[class*=ld-theme] .ld-theme-solvent :where(:not(ld-heading)>.ld-heading--b4),.ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--b5),.ld-theme-shake :where(:not(ld-heading)>.ld-heading--b5),.ld-theme-solvent :where(:not(ld-heading)>.ld-heading--b5),[class*=ld-theme] .ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--b5),[class*=ld-theme] .ld-theme-shake :where(:not(ld-heading)>.ld-heading--b5),[class*=ld-theme] .ld-theme-solvent :where(:not(ld-heading)>.ld-heading--b5),.ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--b6),.ld-theme-shake :where(:not(ld-heading)>.ld-heading--b6),.ld-theme-solvent :where(:not(ld-heading)>.ld-heading--b6),[class*=ld-theme] .ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--b6),[class*=ld-theme] .ld-theme-shake :where(:not(ld-heading)>.ld-heading--b6),[class*=ld-theme] .ld-theme-solvent :where(:not(ld-heading)>.ld-heading--b6),.ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--xb1),.ld-theme-shake :where(:not(ld-heading)>.ld-heading--xb1),.ld-theme-solvent :where(:not(ld-heading)>.ld-heading--xb1),[class*=ld-theme] .ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--xb1),[class*=ld-theme] .ld-theme-shake :where(:not(ld-heading)>.ld-heading--xb1),[class*=ld-theme] .ld-theme-solvent :where(:not(ld-heading)>.ld-heading--xb1),.ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--xb2),.ld-theme-shake :where(:not(ld-heading)>.ld-heading--xb2),.ld-theme-solvent :where(:not(ld-heading)>.ld-heading--xb2),[class*=ld-theme] .ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--xb2),[class*=ld-theme] .ld-theme-shake :where(:not(ld-heading)>.ld-heading--xb2),[class*=ld-theme] .ld-theme-solvent :where(:not(ld-heading)>.ld-heading--xb2),.ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--xb3),.ld-theme-shake :where(:not(ld-heading)>.ld-heading--xb3),.ld-theme-solvent :where(:not(ld-heading)>.ld-heading--xb3),[class*=ld-theme] .ld-theme-bubblegum :where(:not(ld-heading)>.ld-heading--xb3),[class*=ld-theme] .ld-theme-shake :where(:not(ld-heading)>.ld-heading--xb3),[class*=ld-theme] .ld-theme-solvent :where(:not(ld-heading)>.ld-heading--xb3),.ld-theme-bubblegum :where(ld-heading[visual-level=b1]),.ld-theme-shake :where(ld-heading[visual-level=b1]),.ld-theme-solvent :where(ld-heading[visual-level=b1]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visual-level=b1]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visual-level=b1]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visual-level=b1]),.ld-theme-bubblegum :where(ld-heading[visual-level=b2]),.ld-theme-shake :where(ld-heading[visual-level=b2]),.ld-theme-solvent :where(ld-heading[visual-level=b2]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visual-level=b2]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visual-level=b2]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visual-level=b2]),.ld-theme-bubblegum :where(ld-heading[visual-level=b3]),.ld-theme-shake :where(ld-heading[visual-level=b3]),.ld-theme-solvent :where(ld-heading[visual-level=b3]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visual-level=b3]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visual-level=b3]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visual-level=b3]),.ld-theme-bubblegum :where(ld-heading[visual-level=b4]),.ld-theme-shake :where(ld-heading[visual-level=b4]),.ld-theme-solvent :where(ld-heading[visual-level=b4]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visual-level=b4]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visual-level=b4]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visual-level=b4]),.ld-theme-bubblegum :where(ld-heading[visual-level=b5]),.ld-theme-shake :where(ld-heading[visual-level=b5]),.ld-theme-solvent :where(ld-heading[visual-level=b5]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visual-level=b5]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visual-level=b5]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visual-level=b5]),.ld-theme-bubblegum :where(ld-heading[visual-level=b6]),.ld-theme-shake :where(ld-heading[visual-level=b6]),.ld-theme-solvent :where(ld-heading[visual-level=b6]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visual-level=b6]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visual-level=b6]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visual-level=b6]),.ld-theme-bubblegum :where(ld-heading[visual-level=xb1]),.ld-theme-shake :where(ld-heading[visual-level=xb1]),.ld-theme-solvent :where(ld-heading[visual-level=xb1]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visual-level=xb1]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visual-level=xb1]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visual-level=xb1]),.ld-theme-bubblegum :where(ld-heading[visual-level=xb2]),.ld-theme-shake :where(ld-heading[visual-level=xb2]),.ld-theme-solvent :where(ld-heading[visual-level=xb2]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visual-level=xb2]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visual-level=xb2]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visual-level=xb2]),.ld-theme-bubblegum :where(ld-heading[visual-level=xb3]),.ld-theme-shake :where(ld-heading[visual-level=xb3]),.ld-theme-solvent :where(ld-heading[visual-level=xb3]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visual-level=xb3]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visual-level=xb3]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visual-level=xb3]),.ld-theme-bubblegum :where(ld-heading[visuallevel=b1]),.ld-theme-shake :where(ld-heading[visuallevel=b1]),.ld-theme-solvent :where(ld-heading[visuallevel=b1]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visuallevel=b1]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visuallevel=b1]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visuallevel=b1]),.ld-theme-bubblegum :where(ld-heading[visuallevel=b2]),.ld-theme-shake :where(ld-heading[visuallevel=b2]),.ld-theme-solvent :where(ld-heading[visuallevel=b2]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visuallevel=b2]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visuallevel=b2]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visuallevel=b2]),.ld-theme-bubblegum :where(ld-heading[visuallevel=b3]),.ld-theme-shake :where(ld-heading[visuallevel=b3]),.ld-theme-solvent :where(ld-heading[visuallevel=b3]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visuallevel=b3]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visuallevel=b3]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visuallevel=b3]),.ld-theme-bubblegum :where(ld-heading[visuallevel=b4]),.ld-theme-shake :where(ld-heading[visuallevel=b4]),.ld-theme-solvent :where(ld-heading[visuallevel=b4]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visuallevel=b4]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visuallevel=b4]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visuallevel=b4]),.ld-theme-bubblegum :where(ld-heading[visuallevel=b5]),.ld-theme-shake :where(ld-heading[visuallevel=b5]),.ld-theme-solvent :where(ld-heading[visuallevel=b5]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visuallevel=b5]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visuallevel=b5]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visuallevel=b5]),.ld-theme-bubblegum :where(ld-heading[visuallevel=b6]),.ld-theme-shake :where(ld-heading[visuallevel=b6]),.ld-theme-solvent :where(ld-heading[visuallevel=b6]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visuallevel=b6]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visuallevel=b6]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visuallevel=b6]),.ld-theme-bubblegum :where(ld-heading[visuallevel=xb1]),.ld-theme-shake :where(ld-heading[visuallevel=xb1]),.ld-theme-solvent :where(ld-heading[visuallevel=xb1]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visuallevel=xb1]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visuallevel=xb1]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visuallevel=xb1]),.ld-theme-bubblegum :where(ld-heading[visuallevel=xb2]),.ld-theme-shake :where(ld-heading[visuallevel=xb2]),.ld-theme-solvent :where(ld-heading[visuallevel=xb2]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visuallevel=xb2]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visuallevel=xb2]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visuallevel=xb2]),.ld-theme-bubblegum :where(ld-heading[visuallevel=xb3]),.ld-theme-shake :where(ld-heading[visuallevel=xb3]),.ld-theme-solvent :where(ld-heading[visuallevel=xb3]),[class*=ld-theme] .ld-theme-bubblegum :where(ld-heading[visuallevel=xb3]),[class*=ld-theme] .ld-theme-shake :where(ld-heading[visuallevel=xb3]),[class*=ld-theme] .ld-theme-solvent :where(ld-heading[visuallevel=xb3]){color:var(--ld-col-rp-default)}.ld-theme-tea :where(:not(ld-heading)>.ld-heading--b1),[class*=ld-theme] .ld-theme-tea :where(:not(ld-heading)>.ld-heading--b1),.ld-theme-tea :where(:not(ld-heading)>.ld-heading--b2),[class*=ld-theme] .ld-theme-tea :where(:not(ld-heading)>.ld-heading--b2),.ld-theme-tea :where(:not(ld-heading)>.ld-heading--b3),[class*=ld-theme] .ld-theme-tea :where(:not(ld-heading)>.ld-heading--b3),.ld-theme-tea :where(:not(ld-heading)>.ld-heading--b4),[class*=ld-theme] .ld-theme-tea :where(:not(ld-heading)>.ld-heading--b4),.ld-theme-tea :where(:not(ld-heading)>.ld-heading--b5),[class*=ld-theme] .ld-theme-tea :where(:not(ld-heading)>.ld-heading--b5),.ld-theme-tea :where(:not(ld-heading)>.ld-heading--b6),[class*=ld-theme] .ld-theme-tea :where(:not(ld-heading)>.ld-heading--b6),.ld-theme-tea :where(:not(ld-heading)>.ld-heading--xb1),[class*=ld-theme] .ld-theme-tea :where(:not(ld-heading)>.ld-heading--xb1),.ld-theme-tea :where(:not(ld-heading)>.ld-heading--xb2),[class*=ld-theme] .ld-theme-tea :where(:not(ld-heading)>.ld-heading--xb2),.ld-theme-tea :where(:not(ld-heading)>.ld-heading--xb3),[class*=ld-theme] .ld-theme-tea :where(:not(ld-heading)>.ld-heading--xb3),.ld-theme-tea :where(ld-heading[visual-level=b1]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visual-level=b1]),.ld-theme-tea :where(ld-heading[visual-level=b2]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visual-level=b2]),.ld-theme-tea :where(ld-heading[visual-level=b3]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visual-level=b3]),.ld-theme-tea :where(ld-heading[visual-level=b4]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visual-level=b4]),.ld-theme-tea :where(ld-heading[visual-level=b5]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visual-level=b5]),.ld-theme-tea :where(ld-heading[visual-level=b6]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visual-level=b6]),.ld-theme-tea :where(ld-heading[visual-level=xb1]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visual-level=xb1]),.ld-theme-tea :where(ld-heading[visual-level=xb2]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visual-level=xb2]),.ld-theme-tea :where(ld-heading[visual-level=xb3]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visual-level=xb3]),.ld-theme-tea :where(ld-heading[visuallevel=b1]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visuallevel=b1]),.ld-theme-tea :where(ld-heading[visuallevel=b2]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visuallevel=b2]),.ld-theme-tea :where(ld-heading[visuallevel=b3]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visuallevel=b3]),.ld-theme-tea :where(ld-heading[visuallevel=b4]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visuallevel=b4]),.ld-theme-tea :where(ld-heading[visuallevel=b5]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visuallevel=b5]),.ld-theme-tea :where(ld-heading[visuallevel=b6]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visuallevel=b6]),.ld-theme-tea :where(ld-heading[visuallevel=xb1]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visuallevel=xb1]),.ld-theme-tea :where(ld-heading[visuallevel=xb2]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visuallevel=xb2]),.ld-theme-tea :where(ld-heading[visuallevel=xb3]),[class*=ld-theme] .ld-theme-tea :where(ld-heading[visuallevel=xb3]){color:var(--ld-col-rg-default)}";export{t as ld_heading}