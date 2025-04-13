import{p as n,r as mt,l as Ut}from"./chunk-SYFQ2XB5-u2i9jEjP.js";import{R as Wt}from"./index-EuUU-oN2.js";function Xt(o){if(typeof document>"u")return;let a=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",a.appendChild(e),e.styleSheet?e.styleSheet.cssText=o:e.appendChild(document.createTextNode(o))}const Kt=o=>{switch(o){case"success":return Jt;case"info":return Zt;case"warning":return Qt;case"error":return te;default:return null}},qt=Array(12).fill(0),Gt=({visible:o,className:a})=>n.createElement("div",{className:["sonner-loading-wrapper",a].filter(Boolean).join(" "),"data-visible":o},n.createElement("div",{className:"sonner-spinner"},qt.map((e,s)=>n.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${s}`})))),Jt=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},n.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Qt=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},n.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Zt=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},n.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),te=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},n.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),ee=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),ne=()=>{const[o,a]=n.useState(document.hidden);return n.useEffect(()=>{const e=()=>{a(document.hidden)};return document.addEventListener("visibilitychange",e),()=>window.removeEventListener("visibilitychange",e)},[]),o};let wt=1;class ae{constructor(){this.subscribe=a=>(this.subscribers.push(a),()=>{const e=this.subscribers.indexOf(a);this.subscribers.splice(e,1)}),this.publish=a=>{this.subscribers.forEach(e=>e(a))},this.addToast=a=>{this.publish(a),this.toasts=[...this.toasts,a]},this.create=a=>{var e;const{message:s,...x}=a,d=typeof(a==null?void 0:a.id)=="number"||((e=a.id)==null?void 0:e.length)>0?a.id:wt++,h=this.toasts.find(f=>f.id===d),E=a.dismissible===void 0?!0:a.dismissible;return this.dismissedToasts.has(d)&&this.dismissedToasts.delete(d),h?this.toasts=this.toasts.map(f=>f.id===d?(this.publish({...f,...a,id:d,title:s}),{...f,...a,id:d,dismissible:E,title:s}):f):this.addToast({title:s,...x,dismissible:E,id:d}),d},this.dismiss=a=>(this.dismissedToasts.add(a),a||this.toasts.forEach(e=>{this.subscribers.forEach(s=>s({id:e.id,dismiss:!0}))}),requestAnimationFrame(()=>this.subscribers.forEach(e=>e({id:a,dismiss:!0}))),a),this.message=(a,e)=>this.create({...e,message:a}),this.error=(a,e)=>this.create({...e,message:a,type:"error"}),this.success=(a,e)=>this.create({...e,type:"success",message:a}),this.info=(a,e)=>this.create({...e,type:"info",message:a}),this.warning=(a,e)=>this.create({...e,type:"warning",message:a}),this.loading=(a,e)=>this.create({...e,type:"loading",message:a}),this.promise=(a,e)=>{if(!e)return;let s;e.loading!==void 0&&(s=this.create({...e,promise:a,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));const x=Promise.resolve(a instanceof Function?a():a);let d=s!==void 0,h;const E=x.then(async i=>{if(h=["resolve",i],n.isValidElement(i))d=!1,this.create({id:s,type:"default",message:i});else if(oe(i)&&!i.ok){d=!1;const t=typeof e.error=="function"?await e.error(`HTTP error! status: ${i.status}`):e.error,N=typeof e.description=="function"?await e.description(`HTTP error! status: ${i.status}`):e.description,b=typeof t=="object"?t:{message:t};this.create({id:s,type:"error",description:N,...b})}else if(i instanceof Error){d=!1;const t=typeof e.error=="function"?await e.error(i):e.error,N=typeof e.description=="function"?await e.description(i):e.description,b=typeof t=="object"?t:{message:t};this.create({id:s,type:"error",description:N,...b})}else if(e.success!==void 0){d=!1;const t=typeof e.success=="function"?await e.success(i):e.success,N=typeof e.description=="function"?await e.description(i):e.description,b=typeof t=="object"?t:{message:t};this.create({id:s,type:"success",description:N,...b})}}).catch(async i=>{if(h=["reject",i],e.error!==void 0){d=!1;const y=typeof e.error=="function"?await e.error(i):e.error,t=typeof e.description=="function"?await e.description(i):e.description,N=typeof y=="object"?y:{message:y};this.create({id:s,type:"error",description:t,...N})}}).finally(()=>{d&&(this.dismiss(s),s=void 0),e.finally==null||e.finally.call(e)}),f=()=>new Promise((i,y)=>E.then(()=>h[0]==="reject"?y(h[1]):i(h[1])).catch(y));return typeof s!="string"&&typeof s!="number"?{unwrap:f}:Object.assign(s,{unwrap:f})},this.custom=(a,e)=>{const s=(e==null?void 0:e.id)||wt++;return this.create({jsx:a(s),id:s,...e}),s},this.getActiveToasts=()=>this.toasts.filter(a=>!this.dismissedToasts.has(a.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const k=new ae,se=(o,a)=>{const e=(a==null?void 0:a.id)||wt++;return k.addToast({title:o,...a,id:e}),e},oe=o=>o&&typeof o=="object"&&"ok"in o&&typeof o.ok=="boolean"&&"status"in o&&typeof o.status=="number",re=se,ie=()=>k.toasts,le=()=>k.getActiveToasts(),_e=Object.assign(re,{success:k.success,info:k.info,warning:k.warning,error:k.error,custom:k.custom,message:k.message,promise:k.promise,dismiss:k.dismiss,loading:k.loading},{getHistory:ie,getToasts:le});Xt("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function ft(o){return o.label!==void 0}const de=3,ce="24px",ue="16px",Rt=4e3,fe=356,me=14,pe=45,ge=200;function z(...o){return o.filter(Boolean).join(" ")}function he(o){const[a,e]=o.split("-"),s=[];return a&&s.push(a),e&&s.push(e),s}const be=o=>{var a,e,s,x,d,h,E,f,i;const{invert:y,toast:t,unstyled:N,interacting:b,setHeights:S,visibleToasts:U,heights:c,index:B,toasts:ot,expanded:Q,removeToast:rt,defaultRichColors:D,closeButton:W,style:pt,cancelButtonStyle:it,actionButtonStyle:gt,className:lt="",descriptionClassName:L="",duration:X,position:Z,gap:ht,expandByDefault:O,classNames:l,icons:P,closeButtonAriaLabel:j="Close toast"}=o,[C,tt]=n.useState(null),[u,p]=n.useState(null),[m,M]=n.useState(!1),[F,g]=n.useState(!1),[et,K]=n.useState(!1),[nt,at]=n.useState(!1),[Ct,xt]=n.useState(!1),[At,bt]=n.useState(0),[Ht,Et]=n.useState(0),st=n.useRef(t.duration||X||Rt),Tt=n.useRef(null),Y=n.useRef(null),Ot=B===0,zt=B+1<=U,R=t.type,q=t.dismissible!==!1,Lt=t.className||"",Pt=t.descriptionClassName||"",dt=n.useMemo(()=>c.findIndex(r=>r.toastId===t.id)||0,[c,t.id]),jt=n.useMemo(()=>{var r;return(r=t.closeButton)!=null?r:W},[t.closeButton,W]),St=n.useMemo(()=>t.duration||X||Rt,[t.duration,X]),yt=n.useRef(0),G=n.useRef(0),kt=n.useRef(0),J=n.useRef(null),[Yt,$t]=Z.split("-"),Nt=n.useMemo(()=>c.reduce((r,v,T)=>T>=dt?r:r+v.height,0),[c,dt]),_t=ne(),Ft=t.invert||y,vt=R==="loading";G.current=n.useMemo(()=>dt*ht+Nt,[dt,Nt]),n.useEffect(()=>{st.current=St},[St]),n.useEffect(()=>{M(!0)},[]),n.useEffect(()=>{const r=Y.current;if(r){const v=r.getBoundingClientRect().height;return Et(v),S(T=>[{toastId:t.id,height:v,position:t.position},...T]),()=>S(T=>T.filter(_=>_.toastId!==t.id))}},[S,t.id]),n.useLayoutEffect(()=>{if(!m)return;const r=Y.current,v=r.style.height;r.style.height="auto";const T=r.getBoundingClientRect().height;r.style.height=v,Et(T),S(_=>_.find(w=>w.toastId===t.id)?_.map(w=>w.toastId===t.id?{...w,height:T}:w):[{toastId:t.id,height:T,position:t.position},..._])},[m,t.title,t.description,S,t.id]);const $=n.useCallback(()=>{g(!0),bt(G.current),S(r=>r.filter(v=>v.toastId!==t.id)),setTimeout(()=>{rt(t)},ge)},[t,rt,S,G]);n.useEffect(()=>{if(t.promise&&R==="loading"||t.duration===1/0||t.type==="loading")return;let r;return Q||b||_t?(()=>{if(kt.current<yt.current){const _=new Date().getTime()-yt.current;st.current=st.current-_}kt.current=new Date().getTime()})():(()=>{st.current!==1/0&&(yt.current=new Date().getTime(),r=setTimeout(()=>{t.onAutoClose==null||t.onAutoClose.call(t,t),$()},st.current))})(),()=>clearTimeout(r)},[Q,b,t,R,_t,$]),n.useEffect(()=>{t.delete&&$()},[$,t.delete]);function Vt(){var r;if(P!=null&&P.loading){var v;return n.createElement("div",{className:z(l==null?void 0:l.loader,t==null||(v=t.classNames)==null?void 0:v.loader,"sonner-loader"),"data-visible":R==="loading"},P.loading)}return n.createElement(Gt,{className:z(l==null?void 0:l.loader,t==null||(r=t.classNames)==null?void 0:r.loader),visible:R==="loading"})}var Bt,Dt;return n.createElement("li",{tabIndex:0,ref:Y,className:z(lt,Lt,l==null?void 0:l.toast,t==null||(a=t.classNames)==null?void 0:a.toast,l==null?void 0:l.default,l==null?void 0:l[R],t==null||(e=t.classNames)==null?void 0:e[R]),"data-sonner-toast":"","data-rich-colors":(Bt=t.richColors)!=null?Bt:D,"data-styled":!(t.jsx||t.unstyled||N),"data-mounted":m,"data-promise":!!t.promise,"data-swiped":Ct,"data-removed":F,"data-visible":zt,"data-y-position":Yt,"data-x-position":$t,"data-index":B,"data-front":Ot,"data-swiping":et,"data-dismissible":q,"data-type":R,"data-invert":Ft,"data-swipe-out":nt,"data-swipe-direction":u,"data-expanded":!!(Q||O&&m),style:{"--index":B,"--toasts-before":B,"--z-index":ot.length-B,"--offset":`${F?At:G.current}px`,"--initial-height":O?"auto":`${Ht}px`,...pt,...t.style},onDragEnd:()=>{K(!1),tt(null),J.current=null},onPointerDown:r=>{vt||!q||(Tt.current=new Date,bt(G.current),r.target.setPointerCapture(r.pointerId),r.target.tagName!=="BUTTON"&&(K(!0),J.current={x:r.clientX,y:r.clientY}))},onPointerUp:()=>{var r,v,T;if(nt||!q)return;J.current=null;const _=Number(((r=Y.current)==null?void 0:r.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),ct=Number(((v=Y.current)==null?void 0:v.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),w=new Date().getTime()-((T=Tt.current)==null?void 0:T.getTime()),I=C==="x"?_:ct,ut=Math.abs(I)/w;if(Math.abs(I)>=pe||ut>.11){bt(G.current),t.onDismiss==null||t.onDismiss.call(t,t),p(C==="x"?_>0?"right":"left":ct>0?"down":"up"),$(),at(!0);return}else{var A,H;(A=Y.current)==null||A.style.setProperty("--swipe-amount-x","0px"),(H=Y.current)==null||H.style.setProperty("--swipe-amount-y","0px")}xt(!1),K(!1),tt(null)},onPointerMove:r=>{var v,T,_;if(!J.current||!q||((v=window.getSelection())==null?void 0:v.toString().length)>0)return;const w=r.clientY-J.current.y,I=r.clientX-J.current.x;var ut;const A=(ut=o.swipeDirections)!=null?ut:he(Z);!C&&(Math.abs(I)>1||Math.abs(w)>1)&&tt(Math.abs(I)>Math.abs(w)?"x":"y");let H={x:0,y:0};const Mt=V=>1/(1.5+Math.abs(V)/20);if(C==="y"){if(A.includes("top")||A.includes("bottom"))if(A.includes("top")&&w<0||A.includes("bottom")&&w>0)H.y=w;else{const V=w*Mt(w);H.y=Math.abs(V)<Math.abs(w)?V:w}}else if(C==="x"&&(A.includes("left")||A.includes("right")))if(A.includes("left")&&I<0||A.includes("right")&&I>0)H.x=I;else{const V=I*Mt(I);H.x=Math.abs(V)<Math.abs(I)?V:I}(Math.abs(H.x)>0||Math.abs(H.y)>0)&&xt(!0),(T=Y.current)==null||T.style.setProperty("--swipe-amount-x",`${H.x}px`),(_=Y.current)==null||_.style.setProperty("--swipe-amount-y",`${H.y}px`)}},jt&&!t.jsx&&R!=="loading"?n.createElement("button",{"aria-label":j,"data-disabled":vt,"data-close-button":!0,onClick:vt||!q?()=>{}:()=>{$(),t.onDismiss==null||t.onDismiss.call(t,t)},className:z(l==null?void 0:l.closeButton,t==null||(s=t.classNames)==null?void 0:s.closeButton)},(Dt=P==null?void 0:P.close)!=null?Dt:ee):null,R||t.icon||t.promise?n.createElement("div",{"data-icon":"",className:z(l==null?void 0:l.icon,t==null||(x=t.classNames)==null?void 0:x.icon)},t.promise||t.type==="loading"&&!t.icon?t.icon||Vt():null,t.type!=="loading"?t.icon||(P==null?void 0:P[R])||Kt(R):null):null,n.createElement("div",{"data-content":"",className:z(l==null?void 0:l.content,t==null||(d=t.classNames)==null?void 0:d.content)},n.createElement("div",{"data-title":"",className:z(l==null?void 0:l.title,t==null||(h=t.classNames)==null?void 0:h.title)},t.jsx?t.jsx:typeof t.title=="function"?t.title():t.title),t.description?n.createElement("div",{"data-description":"",className:z(L,Pt,l==null?void 0:l.description,t==null||(E=t.classNames)==null?void 0:E.description)},typeof t.description=="function"?t.description():t.description):null),n.isValidElement(t.cancel)?t.cancel:t.cancel&&ft(t.cancel)?n.createElement("button",{"data-button":!0,"data-cancel":!0,style:t.cancelButtonStyle||it,onClick:r=>{ft(t.cancel)&&q&&(t.cancel.onClick==null||t.cancel.onClick.call(t.cancel,r),$())},className:z(l==null?void 0:l.cancelButton,t==null||(f=t.classNames)==null?void 0:f.cancelButton)},t.cancel.label):null,n.isValidElement(t.action)?t.action:t.action&&ft(t.action)?n.createElement("button",{"data-button":!0,"data-action":!0,style:t.actionButtonStyle||gt,onClick:r=>{ft(t.action)&&(t.action.onClick==null||t.action.onClick.call(t.action,r),!r.defaultPrevented&&$())},className:z(l==null?void 0:l.actionButton,t==null||(i=t.classNames)==null?void 0:i.actionButton)},t.action.label):null)};function It(){if(typeof window>"u"||typeof document>"u")return"ltr";const o=document.documentElement.getAttribute("dir");return o==="auto"||!o?window.getComputedStyle(document.documentElement).direction:o}function ye(o,a){const e={};return[o,a].forEach((s,x)=>{const d=x===1,h=d?"--mobile-offset":"--offset",E=d?ue:ce;function f(i){["top","right","bottom","left"].forEach(y=>{e[`${h}-${y}`]=typeof i=="number"?`${i}px`:i})}typeof s=="number"||typeof s=="string"?f(s):typeof s=="object"?["top","right","bottom","left"].forEach(i=>{s[i]===void 0?e[`${h}-${i}`]=E:e[`${h}-${i}`]=typeof s[i]=="number"?`${s[i]}px`:s[i]}):f(E)}),e}const ve=n.forwardRef(function(a,e){const{invert:s,position:x="bottom-right",hotkey:d=["altKey","KeyT"],expand:h,closeButton:E,className:f,offset:i,mobileOffset:y,theme:t="light",richColors:N,duration:b,style:S,visibleToasts:U=de,toastOptions:c,dir:B=It(),gap:ot=me,icons:Q,containerAriaLabel:rt="Notifications"}=a,[D,W]=n.useState([]),pt=n.useMemo(()=>Array.from(new Set([x].concat(D.filter(u=>u.position).map(u=>u.position)))),[D,x]),[it,gt]=n.useState([]),[lt,L]=n.useState(!1),[X,Z]=n.useState(!1),[ht,O]=n.useState(t!=="system"?t:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),l=n.useRef(null),P=d.join("+").replace(/Key/g,"").replace(/Digit/g,""),j=n.useRef(null),C=n.useRef(!1),tt=n.useCallback(u=>{W(p=>{var m;return(m=p.find(M=>M.id===u.id))!=null&&m.delete||k.dismiss(u.id),p.filter(({id:M})=>M!==u.id)})},[]);return n.useEffect(()=>k.subscribe(u=>{if(u.dismiss){const p=D.map(m=>m.id===u.id?{...m,delete:!0}:m);requestAnimationFrame(()=>{W(p)});return}setTimeout(()=>{Wt.flushSync(()=>{W(p=>{const m=p.findIndex(M=>M.id===u.id);return m!==-1?[...p.slice(0,m),{...p[m],...u},...p.slice(m+1)]:[u,...p]})})})}),[D]),n.useEffect(()=>{if(t!=="system"){O(t);return}if(t==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?O("dark"):O("light")),typeof window>"u")return;const u=window.matchMedia("(prefers-color-scheme: dark)");try{u.addEventListener("change",({matches:p})=>{O(p?"dark":"light")})}catch{u.addListener(({matches:m})=>{try{O(m?"dark":"light")}catch(M){console.error(M)}})}},[t]),n.useEffect(()=>{D.length<=1&&L(!1)},[D]),n.useEffect(()=>{const u=p=>{var m;if(d.every(g=>p[g]||p.code===g)){var F;L(!0),(F=l.current)==null||F.focus()}p.code==="Escape"&&(document.activeElement===l.current||(m=l.current)!=null&&m.contains(document.activeElement))&&L(!1)};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[d]),n.useEffect(()=>{if(l.current)return()=>{j.current&&(j.current.focus({preventScroll:!0}),j.current=null,C.current=!1)}},[l.current]),n.createElement("section",{ref:e,"aria-label":`${rt} ${P}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},pt.map((u,p)=>{var m;const[M,F]=u.split("-");return D.length?n.createElement("ol",{key:u,dir:B==="auto"?It():B,tabIndex:-1,ref:l,className:f,"data-sonner-toaster":!0,"data-sonner-theme":ht,"data-y-position":M,"data-lifted":lt&&D.length>1&&!h,"data-x-position":F,style:{"--front-toast-height":`${((m=it[0])==null?void 0:m.height)||0}px`,"--width":`${fe}px`,"--gap":`${ot}px`,...S,...ye(i,y)},onBlur:g=>{C.current&&!g.currentTarget.contains(g.relatedTarget)&&(C.current=!1,j.current&&(j.current.focus({preventScroll:!0}),j.current=null))},onFocus:g=>{g.target instanceof HTMLElement&&g.target.dataset.dismissible==="false"||C.current||(C.current=!0,j.current=g.relatedTarget)},onMouseEnter:()=>L(!0),onMouseMove:()=>L(!0),onMouseLeave:()=>{X||L(!1)},onDragEnd:()=>L(!1),onPointerDown:g=>{g.target instanceof HTMLElement&&g.target.dataset.dismissible==="false"||Z(!0)},onPointerUp:()=>Z(!1)},D.filter(g=>!g.position&&p===0||g.position===u).map((g,et)=>{var K,nt;return n.createElement(be,{key:g.id,icons:Q,index:et,toast:g,defaultRichColors:N,duration:(K=c==null?void 0:c.duration)!=null?K:b,className:c==null?void 0:c.className,descriptionClassName:c==null?void 0:c.descriptionClassName,invert:s,visibleToasts:U,closeButton:(nt=c==null?void 0:c.closeButton)!=null?nt:E,interacting:X,position:u,style:c==null?void 0:c.style,unstyled:c==null?void 0:c.unstyled,classNames:c==null?void 0:c.classNames,cancelButtonStyle:c==null?void 0:c.cancelButtonStyle,actionButtonStyle:c==null?void 0:c.actionButtonStyle,closeButtonAriaLabel:c==null?void 0:c.closeButtonAriaLabel,removeToast:tt,toasts:D.filter(at=>at.position==g.position),heights:it.filter(at=>at.position==g.position),setHeights:gt,expandByDefault:h,gap:ot,expanded:lt,swipeDirections:a.swipeDirections})})):null}))});var we=(o,a,e,s,x,d,h,E)=>{let f=document.documentElement,i=["light","dark"];function y(b){(Array.isArray(o)?o:[o]).forEach(S=>{let U=S==="class",c=U&&d?x.map(B=>d[B]||B):x;U?(f.classList.remove(...c),f.classList.add(b)):f.setAttribute(S,b)}),t(b)}function t(b){E&&i.includes(b)&&(f.style.colorScheme=b)}function N(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(s)y(s);else try{let b=localStorage.getItem(a)||e,S=h&&b==="system"?N():b;y(S)}catch{}},xe=mt.createContext(void 0),Ee={setTheme:o=>{},themes:[]},Te=()=>{var o;return(o=mt.useContext(xe))!=null?o:Ee};mt.memo(({forcedTheme:o,storageKey:a,attribute:e,enableSystem:s,enableColorScheme:x,defaultTheme:d,value:h,themes:E,nonce:f,scriptProps:i})=>{let y=JSON.stringify([e,a,d,o,E,h,s,x]).slice(1,-1);return mt.createElement("script",{...i,suppressHydrationWarning:!0,nonce:typeof window>"u"?f:"",dangerouslySetInnerHTML:{__html:`(${we.toString()})(${y})`}})});const Be=({...o})=>{const{theme:a="system"}=Te();return Ut.jsx(ve,{theme:a,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...o})};export{Be as T,_e as t};
