const __vite__fileDeps=["MagicLinkEE-DCazf_P2-oiw5xfJb.js","strapi-BOLyzTJJ.js","strapi-COJtagOC.css","SelectRoles-D1xPS-qt-DHSCRNH7.js","useAdminRoles-BVwapBge-CWfbaxKQ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{g as B,h as C,aY as z,i as E,u as q,aJ as D,a3 as F,n as N,bx as O,by as V,q as H,aN as L,t as Y,bH as $,aT as K,r as Q,j as e,P as c,bI as P,Z as G,b as y,S as J,a0 as Z,bt as W,B as p,F as h,T,Q as l,_ as X,b1 as ee}from"./strapi-BOLyzTJJ.js";import{s as se}from"./selectors-BZApelK9-20D1E5cz.js";import{g as ae}from"./users-8N93LH7R-MOwOr-tf.js";import{M as te,S as re}from"./SelectRoles-D1xPS-qt-DHSCRNH7.js";import{C as ie}from"./validation-D36pWUQH-B42LI-3d.js";import"./useAdminRoles-BVwapBge-CWfbaxKQ.js";const oe=B().shape({...ie,isActive:C(),roles:z().min(1,{id:E.required.id,defaultMessage:"This field is required"}).required({id:E.required.id,defaultMessage:"This field is required"})}),I=["email","firstname","lastname","username","isActive","roles"],ne=()=>{const{formatMessage:s}=q(),b=D("/settings/users/:id")?.params?.id??"",x=F(),{toggleNotification:r}=N(),M=O(te,async()=>(await V(()=>import("./MagicLinkEE-DCazf_P2-oiw5xfJb.js"),__vite__mapDeps([0,1,2,3,4]))).MagicLinkEE),{_unstableFormatAPIError:m,_unstableFormatValidationErrors:_}=H(),A=L(se),{isLoading:v,allowedActions:{canUpdate:u}}=Y({read:A.settings?.users.read??[],update:A.settings?.users.update??[]}),[R]=$(),{data:S,error:i,isLoading:U}=K({id:b},{refetchOnMountOrArgChange:!0}),[o]=S?.users??[];if(Q.useEffect(()=>{i&&(i.name==="UnauthorizedError"?(r({type:"info",message:s({id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"})}),x("/")):r({type:"danger",message:m(i)}))},[i,m,s,x,r]),U||!M||v)return e.jsx(c.Loading,{});const j={...P(o,I),roles:o.roles.map(({id:a})=>a),password:"",confirmPassword:""},k=async(a,n)=>{const{confirmPassword:w,...g}=a,t=await R({id:b,...g});"error"in t&&ee(t.error)?(t.error.name==="ValidationError"&&n.setErrors(_(t.error)),r({type:"danger",message:m(t.error)})):(r({type:"success",message:s({id:"notification.success.saved",defaultMessage:"Saved"})}),n.setValues({...P(a,I),password:"",confirmPassword:""}))};return e.jsxs(c.Main,{children:[e.jsx(c.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Users"})}),e.jsx(G,{method:"PUT",onSubmit:k,initialValues:j,validationSchema:oe,children:({isSubmitting:a,modified:n})=>e.jsxs(e.Fragment,{children:[e.jsx(y.Header,{primaryAction:e.jsx(J,{disabled:a||!u||!n,startIcon:e.jsx(Z,{}),loading:a,type:"submit",children:s({id:"global.save",defaultMessage:"Save"})}),title:s({id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},{name:ae(j)}),navigationAction:e.jsx(W,{fallback:"../users"})}),e.jsxs(y.Content,{children:[o?.registrationToken&&e.jsx(p,{paddingBottom:6,children:e.jsx(M,{registrationToken:o.registrationToken})}),e.jsxs(h,{direction:"column",alignItems:"stretch",gap:7,children:[e.jsx(p,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(h,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(T,{variant:"delta",tag:"h2",children:s({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})}),e.jsx(l.Root,{gap:5,children:de.map(w=>w.map(({size:g,label:t,...d})=>e.jsx(l.Item,{col:g,direction:"column",alignItems:"stretch",children:e.jsx(X,{...d,disabled:!u,label:s(t),placeholder:"placeholder"in d?s(d.placeholder):void 0})},d.name)))})]})}),e.jsx(p,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(h,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(T,{variant:"delta",tag:"h2",children:s({id:"global.roles",defaultMessage:"User's role"})}),e.jsx(l.Root,{gap:5,children:e.jsx(l.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(re,{disabled:!u})})})]})})]})]})]})})]})},de=[[{label:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"string",size:6,required:!0},{label:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"string",size:6}],[{label:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:6,required:!0},{label:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"string",size:6}],[{autoComplete:"new-password",label:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:6},{autoComplete:"new-password",label:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:6}],[{label:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"boolean",size:6}]],fe=()=>{const s=L(f=>f.admin_app.permissions.settings?.users.read);return e.jsx(c.Protect,{permissions:s,children:e.jsx(ne,{})})};export{ne as EditPage,fe as ProtectedEditPage};
