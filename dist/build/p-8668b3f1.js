function t(){if(!this.el)throw new Error(`Component ${this.name} is missing @Element() decorator.`);for(const t in this)if(t!==t.toLowerCase()){const i=this.el.getAttribute(t.toLowerCase());i&&(this[t]=i)}}export{t as a}