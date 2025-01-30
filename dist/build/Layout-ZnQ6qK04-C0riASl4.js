const __vite__fileDeps=["strapi-BOLyzTJJ.js","strapi-COJtagOC.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as P,cb as _,cc as w,aJ as T,u as M,j as i,P as N,b8 as D,b as A,cd as C,r as g,c3 as O,ce as U,cf as R,aF as B,cg as H,bx as K,by as $,bo as F,ap as G,ch as V,ci as J,cj as W,ck as Y,a4 as q}from"./strapi-BOLyzTJJ.js";import{s as z}from"./sortBy-DBERAHtB.js";import{s as Q}from"./selectors-BZApelK9-20D1E5cz.js";import"./_baseMap-CWxuud-a.js";import"./_baseEach-C7bEJik3.js";const X=n=>n.map(a=>{const r=a.links.map(o=>({...o,isDisplayed:!1}));return{...a,links:r}}),Z=()=>{const[{isLoading:n,menu:a},r]=g.useState({isLoading:!0,menu:[]}),o=O("useSettingsMenu",s=>s.checkUserHasPermissions),b=U("useSettingsMenu",s=>s.shouldUpdateStrapi),m=R("useSettingsMenu",s=>s.settings),c=B(Q),f=g.useMemo(()=>H(),[]),{admin:e,global:t}=K(f,async()=>(await $(()=>import("./strapi-BOLyzTJJ.js").then(s=>s.ju),__vite__mapDeps([0,1])).then(s=>s.K)).SETTINGS_LINKS_EE(),{combine(s,l){return{admin:[...l.admin,...s.admin],global:[...s.global,...l.global]}},defaultValue:{admin:[],global:[]}}),h=g.useCallback(s=>{if(!s.id)throw new Error("The settings menu item must have an id attribute.");return{...s,permissions:c.settings?.[s.id]?.main??[]}},[c.settings]);return g.useEffect(()=>{const s=async()=>{const I=await(S=>Promise.all(S.reduce((d,L,k)=>{const x=L.links.map(async(j,p)=>({hasPermission:(await o(j.permissions)).length>0,sectionIndex:k,linkIndex:p}));return[...d,...x]},[])))(v);r(S=>({...S,isLoading:!1,menu:v.map((d,L)=>({...d,links:d.links.map((k,x)=>{const j=I.find(p=>p.sectionIndex===L&&p.linkIndex===x);return{...k,isDisplayed:!!j?.hasPermission}})}))}))},{global:l,...E}=m,v=X([{...l,links:z([...l.links,...t.map(h)],u=>u.id).map(u=>({...u,hasNotification:u.id==="000-application-infos"&&b}))},{id:"permissions",intlLabel:{id:"Settings.permissions",defaultMessage:"Administration Panel"},links:e.map(h)},...Object.values(E)]);s()},[e,t,m,b,h,o]),{isLoading:n,menu:a.map(s=>({...s,links:s.links.filter(l=>l.isDisplayed)}))}},y=P(_)`
  right: 15px;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);

  path {
    fill: ${({theme:n})=>n.colors.warning500};
  }
`,ss=P(w)`
  &.active ${y} {
    right: 13px;
  }
`,ts=({menu:n})=>{const{formatMessage:a}=M(),{trackUsage:r}=F(),{pathname:o}=G(),m=n.filter(e=>!e.links.every(t=>t.isDisplayed===!1)).map(e=>({...e,title:e.intlLabel,links:e.links.map(t=>({...t,title:t.intlLabel,name:t.id}))})),c=a({id:"global.settings",defaultMessage:"Settings"}),f=e=>()=>{r("willNavigate",{from:o,to:e})};return i.jsxs(V,{"aria-label":c,children:[i.jsx(J,{label:c}),i.jsx(W,{children:m.map(e=>i.jsx(Y,{label:a(e.intlLabel),children:e.links.map(t=>i.jsxs(ss,{tag:q,withBullet:t.hasNotification,to:t.to,onClick:f(t.to),position:"relative",children:[a(t.intlLabel),t?.licenseOnly&&i.jsx(y,{width:"1.5rem",height:"1.5rem"})]},t.id))},e.id))})]})},rs=()=>{const n=T("/settings/:settingId/*"),{formatMessage:a}=M(),{isLoading:r,menu:o}=Z();return r?i.jsx(N.Loading,{}):n?.params.settingId?i.jsxs(A.Root,{sideNav:i.jsx(ts,{menu:o}),children:[i.jsx(N.Title,{children:a({id:"global.settings",defaultMessage:"Settings"})}),i.jsx(C,{})]}):i.jsx(D,{to:"application-infos"})};export{rs as Layout};
