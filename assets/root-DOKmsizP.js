var U=t=>{throw TypeError(t)};var z=(t,e,s)=>e.has(t)||U("Cannot "+s);var a=(t,e,s)=>(z(t,e,"read from private field"),s?s.call(t):e.get(t)),h=(t,e,s)=>e.has(t)?U("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),c=(t,e,s,r)=>(z(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var F=(t,e,s,r)=>({set _(n){c(t,e,n,s)},get _(){return a(t,e,r)}});import{w as oe,a as ce}from"./with-props-CoYrz0U4.js";import{l as u,M as he,L as le,S as de,n as fe,r as G,O as pe,o as ye}from"./chunk-SYFQ2XB5-u2i9jEjP.js";import{S as ae,h as ne,Q as ge,n as l,m as J,M as me,a as V,b as g,e as Pe,c as ve,d as Oe,f as be,o as W,r as X,g as we,i as Y,p as Z,s as Qe,j as Me,k as xe,l as je}from"./Sidebar-A_LGcpON.js";const Ae="/assets/app-D9loH1e5.css";var y,te,Ee=(te=class extends ae{constructor(e={}){super();h(this,y);this.config=e,c(this,y,new Map)}build(e,s,r){const n=s.queryKey,o=s.queryHash??ne(n,s);let p=this.get(o);return p||(p=new ge({cache:this,queryKey:n,queryHash:o,options:e.defaultQueryOptions(s),state:r,defaultOptions:e.getQueryDefaults(n)}),this.add(p)),p}add(e){a(this,y).has(e.queryHash)||(a(this,y).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const s=a(this,y).get(e.queryHash);s&&(e.destroy(),s===e&&a(this,y).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){l.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return a(this,y).get(e)}getAll(){return[...a(this,y).values()]}find(e){const s={exact:!0,...e};return this.getAll().find(r=>J(s,r))}findAll(e={}){const s=this.getAll();return Object.keys(e).length>0?s.filter(r=>J(e,r)):s}notify(e){l.batch(()=>{this.listeners.forEach(s=>{s(e)})})}onFocus(){l.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){l.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},y=new WeakMap,te),m,f,q,se,qe=(se=class extends ae{constructor(e={}){super();h(this,m);h(this,f);h(this,q);this.config=e,c(this,m,new Set),c(this,f,new Map),c(this,q,0)}build(e,s,r){const n=new me({mutationCache:this,mutationId:++F(this,q)._,options:e.defaultMutationOptions(s),state:r});return this.add(n),n}add(e){a(this,m).add(e);const s=k(e);if(typeof s=="string"){const r=a(this,f).get(s);r?r.push(e):a(this,f).set(s,[e])}this.notify({type:"added",mutation:e})}remove(e){if(a(this,m).delete(e)){const s=k(e);if(typeof s=="string"){const r=a(this,f).get(s);if(r)if(r.length>1){const n=r.indexOf(e);n!==-1&&r.splice(n,1)}else r[0]===e&&a(this,f).delete(s)}}this.notify({type:"removed",mutation:e})}canRun(e){const s=k(e);if(typeof s=="string"){const r=a(this,f).get(s),n=r==null?void 0:r.find(o=>o.state.status==="pending");return!n||n===e}else return!0}runNext(e){var r;const s=k(e);if(typeof s=="string"){const n=(r=a(this,f).get(s))==null?void 0:r.find(o=>o!==e&&o.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}else return Promise.resolve()}clear(){l.batch(()=>{a(this,m).forEach(e=>{this.notify({type:"removed",mutation:e})}),a(this,m).clear(),a(this,f).clear()})}getAll(){return Array.from(a(this,m))}find(e){const s={exact:!0,...e};return this.getAll().find(r=>V(s,r))}findAll(e={}){return this.getAll().filter(s=>V(e,s))}notify(e){l.batch(()=>{this.listeners.forEach(s=>{s(e)})})}resumePausedMutations(){const e=this.getAll().filter(s=>s.state.isPaused);return l.batch(()=>Promise.all(e.map(s=>s.continue().catch(g))))}},m=new WeakMap,f=new WeakMap,q=new WeakMap,se);function k(t){var e;return(e=t.options.scope)==null?void 0:e.id}function $(t){return{onFetch:(e,s)=>{var H,K,L,N,I;const r=e.options,n=(L=(K=(H=e.fetchOptions)==null?void 0:H.meta)==null?void 0:K.fetchMore)==null?void 0:L.direction,o=((N=e.state.data)==null?void 0:N.pages)||[],p=((I=e.state.data)==null?void 0:I.pageParams)||[];let A={pages:[],pageParams:[]},D=0;const T=async()=>{let w=!1;const C=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(e.signal.aborted?w=!0:e.signal.addEventListener("abort",()=>{w=!0}),e.signal)})},ie=Pe(e.options,e.fetchOptions),R=async(d,P,E)=>{if(w)return Promise.reject();if(P==null&&d.pages.length)return Promise.resolve(d);const S={queryKey:e.queryKey,pageParam:P,direction:E?"backward":"forward",meta:e.options.meta};C(S);const ue=await ie(S),{maxPages:B}=e.options,_=E?ve:Oe;return{pages:_(d.pages,ue,B),pageParams:_(d.pageParams,P,B)}};if(n&&o.length){const d=n==="backward",P=d?De:ee,E={pages:o,pageParams:p},S=P(r,E);A=await R(E,S,d)}else{const d=t??o.length;do{const P=D===0?p[0]??r.initialPageParam:ee(r,A);if(D>0&&P==null)break;A=await R(A,P),D++}while(D<d)}return A};e.options.persister?e.fetchFn=()=>{var w,C;return(C=(w=e.options).persister)==null?void 0:C.call(w,T,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s)}:e.fetchFn=T}}}function ee(t,{pages:e,pageParams:s}){const r=e.length-1;return e.length>0?t.getNextPageParam(e[r],e,s[r],s):void 0}function De(t,{pages:e,pageParams:s}){var r;return e.length>0?(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,s[0],s):void 0}var i,v,O,Q,M,b,x,j,re,Ce=(re=class{constructor(t={}){h(this,i);h(this,v);h(this,O);h(this,Q);h(this,M);h(this,b);h(this,x);h(this,j);c(this,i,t.queryCache||new Ee),c(this,v,t.mutationCache||new qe),c(this,O,t.defaultOptions||{}),c(this,Q,new Map),c(this,M,new Map),c(this,b,0)}mount(){F(this,b)._++,a(this,b)===1&&(c(this,x,be.subscribe(async t=>{t&&(await this.resumePausedMutations(),a(this,i).onFocus())})),c(this,j,W.subscribe(async t=>{t&&(await this.resumePausedMutations(),a(this,i).onOnline())})))}unmount(){var t,e;F(this,b)._--,a(this,b)===0&&((t=a(this,x))==null||t.call(this),c(this,x,void 0),(e=a(this,j))==null||e.call(this),c(this,j,void 0))}isFetching(t){return a(this,i).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return a(this,v).findAll({...t,status:"pending"}).length}getQueryData(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=a(this,i).get(e.queryHash))==null?void 0:s.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),s=a(this,i).build(this,e),r=s.state.data;return r===void 0?this.fetchQuery(t):(t.revalidateIfStale&&s.isStaleByTime(X(e.staleTime,s))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(t){return a(this,i).findAll(t).map(({queryKey:e,state:s})=>{const r=s.data;return[e,r]})}setQueryData(t,e,s){const r=this.defaultQueryOptions({queryKey:t}),n=a(this,i).get(r.queryHash),o=n==null?void 0:n.state.data,p=we(e,o);if(p!==void 0)return a(this,i).build(this,r).setData(p,{...s,manual:!0})}setQueriesData(t,e,s){return l.batch(()=>a(this,i).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,s)]))}getQueryState(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=a(this,i).get(e.queryHash))==null?void 0:s.state}removeQueries(t){const e=a(this,i);l.batch(()=>{e.findAll(t).forEach(s=>{e.remove(s)})})}resetQueries(t,e){const s=a(this,i),r={type:"active",...t};return l.batch(()=>(s.findAll(t).forEach(n=>{n.reset()}),this.refetchQueries(r,e)))}cancelQueries(t,e={}){const s={revert:!0,...e},r=l.batch(()=>a(this,i).findAll(t).map(n=>n.cancel(s)));return Promise.all(r).then(g).catch(g)}invalidateQueries(t,e={}){return l.batch(()=>{if(a(this,i).findAll(t).forEach(r=>{r.invalidate()}),(t==null?void 0:t.refetchType)==="none")return Promise.resolve();const s={...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"};return this.refetchQueries(s,e)})}refetchQueries(t,e={}){const s={...e,cancelRefetch:e.cancelRefetch??!0},r=l.batch(()=>a(this,i).findAll(t).filter(n=>!n.isDisabled()).map(n=>{let o=n.fetch(void 0,s);return s.throwOnError||(o=o.catch(g)),n.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(g)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const s=a(this,i).build(this,e);return s.isStaleByTime(X(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(g).catch(g)}fetchInfiniteQuery(t){return t.behavior=$(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(g).catch(g)}ensureInfiniteQueryData(t){return t.behavior=$(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return W.isOnline()?a(this,v).resumePausedMutations():Promise.resolve()}getQueryCache(){return a(this,i)}getMutationCache(){return a(this,v)}getDefaultOptions(){return a(this,O)}setDefaultOptions(t){c(this,O,t)}setQueryDefaults(t,e){a(this,Q).set(Y(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...a(this,Q).values()],s={};return e.forEach(r=>{Z(t,r.queryKey)&&Object.assign(s,r.defaultOptions)}),s}setMutationDefaults(t,e){a(this,M).set(Y(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...a(this,M).values()];let s={};return e.forEach(r=>{Z(t,r.mutationKey)&&(s={...s,...r.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;const e={...a(this,O).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=ne(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===Qe&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...a(this,O).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){a(this,i).clear(),a(this,v).clear()}},i=new WeakMap,v=new WeakMap,O=new WeakMap,Q=new WeakMap,M=new WeakMap,b=new WeakMap,x=new WeakMap,j=new WeakMap,re);function Se({children:t}){const e=new Ce({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});return u.jsx(Me,{client:e,children:u.jsx("div",{className:"w-screen h-screen overflow-hidden",children:u.jsx("div",{className:"h-full w-full flex  flex-col ",children:u.jsxs("div",{className:" flex h-full",children:[u.jsx("div",{className:"max-lg:hidden",children:u.jsx(xe,{})}),u.jsx("main",{className:"bg-background flex-1 max-h-full",children:t})]})})})})}const Ke=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&display=swap"},{rel:"stylesheet",href:Ae}];function Le({children:t}){return u.jsxs("html",{lang:"ar",dir:"rtl",children:[u.jsxs("head",{children:[u.jsx("meta",{charSet:"utf-8"}),u.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),u.jsx(he,{}),u.jsx(le,{})]}),u.jsxs("body",{className:"w-screen h-screen",children:[t,u.jsx(de,{}),u.jsx(fe,{})]})]})}const Ne=oe(function(){G.useEffect(()=>{const r=()=>{window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.SplashScreen&&window.Capacitor.Plugins.SplashScreen.hide()};return r(),document.addEventListener("DOMContentLoaded",r),()=>document.removeEventListener("DOMContentLoaded",r)},[]);const[e,s]=G.useState("");return u.jsx(Se,{children:u.jsx(je,{value:{search:e,setSearch:s},children:u.jsx(pe,{})})})}),Ie=ce(function({error:e}){let s="Oops!",r="An unexpected error occurred.",n;return ye(e)&&(s=e.status===404?"404":"Error",r=e.status===404?"The requested page could not be found.":e.statusText||r),u.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[u.jsx("h1",{children:s}),u.jsx("p",{children:r}),n]})});export{Ie as ErrorBoundary,Le as Layout,Ne as default,Ke as links};
