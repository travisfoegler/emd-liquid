import{a as e,r as i,h as n,H as s}from"./p-375b7112.js";const t={},l={},c=class{constructor(e){i(this,e),this.name=null}async loadIconPathData(){const{name:i}=this;i&&(this.svg=await async function(i){if(t[i])return t[i];l[i]||(l[i]=fetch(e(`./assets/${i}.svg`)).then((e=>e.text())).catch((e=>(console.error(`"${i}" is not a valid name`,e),""))));const n=await l[i];return t[i]=n,n}(i))}async componentWillLoad(){this.loadIconPathData()}render(){let e="ld-icon";return this.size&&(e+=` ld-icon--${this.size}`),n(s,null,n("span",{class:e,role:"presentation",innerHTML:this.svg},!this.name&&n("slot",null)))}static get assetsDirs(){return["assets"]}static get watchers(){return{name:["loadIconPathData"]}}};c.style=":where(ld-icon){display:inline-grid;align-content:center;justify-content:center;place-content:center}:where(.ld-icon){--ld-icon-size-sm:1rem;--ld-icon-size-md:1.25rem;--ld-icon-size-lg:1.5rem;display:inline-flex;justify-content:center;align-items:center;width:var(--ld-icon-size-md);height:var(--ld-icon-size-md)}:where(.ld-icon) :where(svg){width:var(--ld-icon-size-md);height:var(--ld-icon-size-md);flex-shrink:0}:where(.ld-icon--sm),:where(.ld-icon--sm svg){width:var(--ld-icon-size-sm);height:var(--ld-icon-size-sm)}:where(.ld-icon--lg),:where(.ld-icon--lg svg){width:var(--ld-icon-size-lg);height:var(--ld-icon-size-lg)}";export{c as ld_icon}