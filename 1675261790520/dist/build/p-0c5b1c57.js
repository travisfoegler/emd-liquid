function t(t){return t===undefined||t===null||t==="false"}function s(s=[]){const e=new Set(["style","id","class","slot","part",...s]);const n={};for(const s of this.el.attributes){if(e.has(s.name)||t(s.value)){continue}const i=s.value===""?true:s.value;n[s.name]=i}this.clonedAttributes=n;const i=s=>{for(const n of s){const{attributeName:s}=n;if(!e.has(s)){const e=this.el.getAttribute(s);if(t(e)){delete this.clonedAttributes[s]}else{this.clonedAttributes[s]=e}}}this.clonedAttributes=Object.assign({},this.clonedAttributes)};const o=new MutationObserver(i);o.observe(this.el,{subtree:false,childList:false,attributes:true});return o}export{s as c};
//# sourceMappingURL=p-0c5b1c57.js.map