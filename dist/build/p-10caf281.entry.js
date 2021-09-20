import{r as t,h as i,H as o}from"./p-694e6e18.js";const n=class{constructor(i){t(this,i),this.placement="top",this.queue=[],this.queueDismissed=[],this.fadeoutTimeouts=[]}updateDismissTimeout(){clearTimeout(this.dismissTimeout),this.currentNotification&&"alert"!==this.currentNotification.type&&0!==this.currentNotification.timeout&&(this.dismissTimeout=setTimeout((()=>{this.handleNotificationDismiss()}),this.currentNotification.timeout||6e3))}handleNotification(t){t.stopImmediatePropagation();const i=t.detail;if(this.queue.some((t=>t.content===i.content&&t.type===i.type)))return;if("alert"===i.type)return this.queue=[...this.queue,i],void(this.currentNotification=i);const o=this.queue.findIndex((t=>"alert"===t.type));if(-1===o)return this.queue=[...this.queue,i],void(this.currentNotification=i);this.queue.splice(o,0,i),this.queue=[...this.queue]}handleNotificationDismiss(){this.currentNotification&&(this.queueDismissed.unshift(this.queue.pop()),this.queueDismissed=[...this.queueDismissed],this.queue=[...this.queue],this.currentNotification=this.queue[this.queue.length-1],this.fadeoutTimeouts.push(setTimeout((()=>{this.queueDismissed=this.queueDismissed.slice(0,-1)}),200)))}handleNotificationClear(){this.queueDismissed=[...this.queue],this.queue=[],this.currentNotification=void 0,this.fadeoutTimeouts.forEach(clearTimeout),this.fadeoutTimeouts.push(setTimeout((()=>{this.queueDismissed=[]}),200))}renderNotification(t,o=!1){let n=`ld-notification__item ld-notification__item--${t.type}`;return o&&(n+=" ld-notification__item--dismissed"),i("div",{class:n,key:t.type+t.content},i("div",{class:"ld-notification__item-content",innerHTML:t.content,role:"alert"===t.type?"alert":"status"}),i("button",{class:"ld-notification__btn-dismiss",onClick:o?void 0:this.handleNotificationDismiss.bind(this)},i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("title",null,"Dismiss"),i("path",{d:"M6 6L18 18",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}),i("path",{d:"M6 18L18 6",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}))))}disconnectedCallback(){clearTimeout(this.dismissTimeout),this.fadeoutTimeouts.forEach(clearTimeout)}render(){return i(o,{class:`ld-notification ld-notification--${this.placement}`,role:"region","aria-label":"Notifications"},this.queue.map((t=>this.renderNotification.call(this,t))),this.queueDismissed.map((t=>this.renderNotification.call(this,t,!0))))}static get watchers(){return{currentNotification:["updateDismissTimeout"]}}};n.style=".ld-notification{position:fixed;z-index:2147483647;display:flex;justify-content:center;top:0;bottom:0;left:0;right:0;min-width:20rem;font:var(--ld-typo-body-m);pointer-events:none}@keyframes ld-notification-fade-in{0%{opacity:0}to{opacity:1}}@keyframes ld-notification-fade-out{0%{transform:none;opacity:1}to{transform:none;opacity:0}}.ld-notification__item{pointer-events:auto;position:absolute;transform-origin:center;box-shadow:var(--ld-shadow-sticky);width:-moz-fit-content;width:fit-content;min-width:19rem;max-width:calc(90% - 1rem);max-height:80vh;min-height:var(--ld-sp-40);overflow-y:auto;border-radius:var(--ld-br-m);display:flex;justify-content:space-between;transition:transform .2s ease,opacity .2s linear}.ld-notification__item:where(:not(.ld-notification__item--dismissed)){animation:ld-notification-fade-in .2s linear}.ld-notification__item:nth-last-of-type(n+5){opacity:0}.ld-notification__item:nth-last-of-type(n+2) .ld-notification__btn-dismiss,.ld-notification__item:nth-last-of-type(n+2) .ld-notification__item-content{opacity:0}.ld-notification__item:nth-last-of-type(2){opacity:.75}.ld-notification__item:nth-last-of-type(3){opacity:.5}.ld-notification__item:nth-last-of-type(4){opacity:.25}.ld-notification__item.ld-notification__item--dismissed{opacity:0;animation:ld-notification-fade-out .2s linear forwards}.ld-notification--bottom .ld-notification__item{bottom:var(--ld-sp-32)}.ld-notification--bottom .ld-notification__item:nth-last-of-type(2){transform:scale(.975) translateY(25%)}.ld-notification--bottom .ld-notification__item:nth-last-of-type(3){transform:scale(.95) translateY(50%)}.ld-notification--bottom .ld-notification__item:nth-last-of-type(4){transform:scale(.925) translateY(75%)}.ld-notification--top .ld-notification__item{top:var(--ld-sp-32)}.ld-notification--top .ld-notification__item:nth-last-of-type(2){transform:scale(.975) translateY(-25%)}.ld-notification--top .ld-notification__item:nth-last-of-type(3){transform:scale(.95) translateY(-50%)}.ld-notification--top .ld-notification__item:nth-last-of-type(4){transform:scale(.925) translateY(-75%)}.ld-notification__item--info{background-color:var(--ld-notification-item-color);color:var(--ld-col-wht)}.ld-notification__item--warn{background-color:var(--ld-col-vy-default);color:var(--ld-col-rblck-default)}.ld-notification__item--alert{background-color:var(--ld-col-rr-default);color:var(--ld-col-wht)}.ld-notification__btn-dismiss,.ld-notification__item-content{transition:opacity .2s linear}.ld-notification__item-content{display:grid;grid-auto-flow:column;align-items:baseline;grid-gap:var(--ld-sp-12);gap:var(--ld-sp-12);padding:var(--ld-sp-6) var(--ld-sp-12)}.ld-notification__item-content>*{align-self:center}.ld-notification__btn-dismiss{margin-left:var(--ld-sp-16);align-self:center;flex-shrink:0;border:0;border-radius:var(--ld-br-full);background-color:initial;cursor:pointer;padding:0;height:var(--ld-sp-40);width:var(--ld-sp-40);display:inline-grid;align-items:center;justify-items:center;place-items:center;color:inherit;-webkit-user-select:none;user-select:none;touch-action:manipulation;-webkit-touch-callout:none}.ld-notification__item--info,:where(.ld-theme-ocean) .ld-notification__item--info,:where([class*=ld-theme] .ld-theme-ocean) .ld-notification__item--info{--ld-notification-item-color:var(--ld-thm-ocean-bg-primary)}:where(.ld-theme-tea) .ld-notification__item--info,:where([class*=ld-theme] .ld-theme-tea) .ld-notification__item--info{--ld-notification-item-color:var(--ld-thm-tea-bg-primary)}:where(.ld-theme-bubblegum) .ld-notification__item--info,:where([class*=ld-theme] .ld-theme-bubblegum) .ld-notification__item--info{--ld-notification-item-color:var(--ld-thm-bubblegum-bg-primary)}:where(.ld-theme-shake) .ld-notification__item--info,:where([class*=ld-theme] .ld-theme-shake) .ld-notification__item--info{--ld-notification-item-color:var(--ld-thm-shake-bg-primary)}:where(.ld-theme-solvent) .ld-notification__item--info,:where([class*=ld-theme] .ld-theme-solvent) .ld-notification__item--info{--ld-notification-item-color:var(--ld-thm-solvent-bg-primary)}";export{n as ld_notification}