(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{62:function(e,t,r){},63:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){},73:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(19),s=r.n(a),c=(r(61),r(62),r(6)),o=r(5),j=(r(63),r(10)),i=r(12),l=r(9),b=r(2),d=r(1);function u(e){return Object(d.jsx)("span",{className:"error",children:e.error})}var O=r(11),h=r(17),x=r(23);function p(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var m={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:p,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=p();return e?JSON.parse(atob(e.split(".")[1])).user:null}},g="/api/users/";var f={signup:function(e){return console.log(e,"<--USER SIGN UP"),fetch(g+"signup",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return m.setToken(t)}))},logout:function(){m.removeToken()},login:function(e){return fetch(g+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return m.setToken(t)}))},getUser:function(){return m.getUserFromToken()},getProfile:function(e){return console.log("getProfile calling"),fetch(g+e,{headers:{Authorization:"Bearer "+m.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")}))}},v=r(55),w=r(38),C=r(24),k=r(41);function S(e){e.user;return Object(d.jsx)(C.a,{bg:"light",expand:"lg",children:Object(d.jsxs)(v.a,{children:[Object(d.jsx)(C.a.Brand,{children:"TheGoodEatsCo."}),Object(d.jsx)(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(C.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(w.a,{className:"me-auto",children:[Object(d.jsx)(w.a.Item,{children:Object(d.jsx)(k.LinkContainer,{to:"/",children:Object(d.jsx)(C.a.Brand,{children:Object(d.jsx)(h.a,{variant:"success",children:"Home"})})})}),Object(d.jsx)("br",{}),Object(d.jsx)(w.a.Item,{children:Object(d.jsx)(k.LinkContainer,{to:"/checkout",children:Object(d.jsx)(C.a.Brand,{children:Object(d.jsx)(h.a,{variant:"success",children:"CheckOut"})})})}),Object(d.jsx)("br",{}),Object(d.jsx)(w.a.Item,{children:Object(d.jsx)(k.LinkContainer,{to:"/login",children:Object(d.jsx)(C.a.Brand,{children:Object(d.jsx)(h.a,{variant:"success",children:"Login"})})})}),Object(d.jsx)("br",{}),Object(d.jsx)(w.a.Item,{children:Object(d.jsx)(k.LinkContainer,{to:"/signup",children:Object(d.jsx)(C.a.Brand,{children:Object(d.jsx)(h.a,{variant:"success",children:"Sign Up"})})})})]})})]})})}function y(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(C.a,{bg:"light",expand:"lg",children:"\xa9 2022 The Good Eats Co."})})}function E(e,t){return e===t}function I(e){var t=Object(n.useState)({message:"",passwordError:!1}),r=Object(c.a)(t,2),a=r[0],s=r[1],p=Object(n.useState)({username:"",email:"",password:"",passwordConf:""}),m=Object(c.a)(p,2),g=m[0],v=m[1],w=Object(o.C)();function C(e){v(Object(b.a)(Object(b.a)({},g),{},Object(l.a)({},e.target.name,e.target.value)))}function k(){return(k=Object(i.a)(Object(j.a)().mark((function t(r){return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),E(g.password,g.passwordConf)){t.next=3;break}return t.abrupt("return",s({message:"Passwords Must Match!",passwordError:!0}));case 3:return s({message:"",passwordError:!1}),t.prev=4,t.next=7,f.signup(g);case 7:e.handleSignUpOrLogin(),w("/"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),console.log(t.t0),s({message:t.t0.message,passwordError:!1});case 15:case"end":return t.stop()}}),t,null,[[4,11]])})))).apply(this,arguments)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsx)("h1",{children:"Sign Up"}),Object(d.jsx)(x.a,{children:Object(d.jsx)(x.a.Body,{children:Object(d.jsxs)(O.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(d.jsxs)(O.a.Group,{controlId:"username",children:[Object(d.jsx)(O.a.Label,{children:"Username"}),Object(d.jsx)(O.a.Control,{name:"username",type:"text",placeholder:"username",value:g.username,onChange:C,required:!0})]}),Object(d.jsxs)(O.a.Group,{controlId:"email",children:[Object(d.jsx)(O.a.Label,{children:"Email Address"}),Object(d.jsx)(O.a.Control,{name:"email",type:"text",placeholder:"Enter email",value:g.email,onChange:C,required:!0})]}),Object(d.jsxs)(O.a.Group,{controlId:"password",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{error:a.passwordError,name:"password",type:"password",placeholder:"Enter password",value:g.password,onChange:C,required:!0})]}),Object(d.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(d.jsx)(O.a.Label,{children:"Confirm Password"}),Object(d.jsx)(O.a.Control,{error:a.passwordError,name:"passwordConf",type:"password",placeholder:"Confirm Password",value:g.passwordConf,onChange:C,required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsx)(h.a,{variant:"primary",type:"submit",children:"Sign Up"}),a.message?Object(d.jsx)(u,{error:a.message}):null]})})}),Object(d.jsx)(y,{})]})}r(71);function L(e){var t=Object(n.useState)(""),r=Object(c.a)(t,2),a=r[0],s=r[1],p=Object(n.useState)({email:"",password:""}),m=Object(c.a)(p,2),g=m[0],v=m[1],w=Object(o.C)();function C(e){v(Object(b.a)(Object(b.a)({},g),{},Object(l.a)({},e.target.name,e.target.value)))}function k(){return(k=Object(i.a)(Object(j.a)().mark((function t(r){return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.prev=1,t.next=4,f.login(g);case 4:e.handleSignUpOrLogin(),w("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsx)("h1",{children:"Login"}),Object(d.jsx)(x.a,{children:Object(d.jsx)(x.a.Body,{children:Object(d.jsxs)(O.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(d.jsxs)(O.a.Group,{controlId:"email",children:[Object(d.jsx)(O.a.Label,{children:"Email Address"}),Object(d.jsx)(O.a.Control,{name:"email",type:"text",placeholder:"Enter email",value:g.email,onChange:C,required:!0})]}),Object(d.jsxs)(O.a.Group,{controlId:"password",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{error:a.passwordError,name:"password",type:"password",placeholder:"Enter password",value:g.password,onChange:C,required:!0})]}),Object(d.jsx)(h.a,{variant:"primary",type:"submit",children:"Log In"}),a.message?Object(d.jsx)(u,{error:a.message}):null]})})}),Object(d.jsx)(y,{})]})}r(72);function N(){return Object(d.jsx)("div",{className:"Background",children:Object(d.jsx)(x.a,{className:"meal",children:Object(d.jsxs)(x.a.ImgOverlay,{children:[Object(d.jsx)(x.a.Title,{children:Object(d.jsx)("h1",{children:"Everyday is a Fresh Start "})}),Object(d.jsxs)(x.a.Text,{children:["Eating Healthy doesn't have to be boring, here are some amazing meals!",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(h.a,{variant:"success",size:"lg",children:"Check the Menu Out"})]})]})})})}function G(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsx)(N,{}),Object(d.jsx)(y,{})]})}var T=r(56);function U(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(T.a,{animation:"border",variant:"success"})})}function F(e){e.loggedUser;var t=Object(n.useState)([]),r=Object(c.a)(t,2),a=(r[0],r[1]),s=Object(n.useState)({}),l=Object(c.a)(s,2),b=(l[0],l[1]),O=Object(n.useState)(!0),h=Object(c.a)(O,2),x=h[0],p=h[1],m=Object(n.useState)(""),g=Object(c.a)(m,2),v=g[0],w=g[1],C=o.H.username,k=Object(n.useCallback)(Object(i.a)(Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.getProfile(C);case 3:t=e.sent,p(!1),b(t.data.user),a(t.data.orders),console.log(t),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),w("Profile does not exist! You are not in the right place");case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),[C]);return Object(n.useEffect)((function(){console.log("USE EFFECT FIRING"),k()}),[C,k]),v?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{error:v}),";"]}):x?Object(d.jsx)(d.Fragment,{}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Your Orders!"}),Object(d.jsx)("br",{}),Object(d.jsx)("h1",{children:"Add Orders"})]})}var P=r(15),B=r(35),A=r(53);function z(e){var t=Object(n.useState)({firstName:"",lastName:"",address:"",address2:"",city:"",zip:""}),r=Object(c.a)(t,2),a=r[0],s=r[1];function o(e){s(Object(b.a)(Object(b.a)({},a),{},Object(l.a)({},e.target.name,e.target.value)))}return Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault()},children:[Object(d.jsxs)(A.a,{className:"mb-3",children:[Object(d.jsxs)(O.a.Group,{as:B.a,controlId:"formGridName",children:[Object(d.jsx)(O.a.Label,{children:"First Name"}),Object(d.jsx)(O.a.Control,{type:"name",value:a.firstName,placeholder:"Enter First Name",onChange:o})]}),Object(d.jsxs)(O.a.Group,{as:B.a,controlId:"formGridName",children:[Object(d.jsx)(O.a.Label,{children:"Last Name"}),Object(d.jsx)(O.a.Control,{type:"name",value:a.lastName,placeholder:"Enter Last Name",onChange:o})]})]}),Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formGridAddress",children:[Object(d.jsx)(O.a.Label,{children:"Address"}),Object(d.jsx)(O.a.Control,{placeholder:"1234 Main St",value:a.address,onChange:o})]}),Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formGridAddress2",children:[Object(d.jsx)(O.a.Label,{children:"Address"}),Object(d.jsx)(O.a.Control,{placeholder:"Apartment/Studio/Floor",value:a.address2,onChange:o})]}),Object(d.jsxs)(A.a,{className:"mb-3",children:[Object(d.jsxs)(O.a.Group,{as:B.a,controlId:"formGridCity",children:[Object(d.jsx)(O.a.Label,{children:"City"}),Object(d.jsx)(O.a.Control,{onChange:o,value:a.city})]}),Object(d.jsxs)(O.a.Group,{as:B.a,controlId:"formGridZip",children:[Object(d.jsx)(O.a.Label,{children:"Zip"}),Object(d.jsx)(O.a.Control,{onChange:o,value:a.zip})]})]}),Object(d.jsx)(h.a,{variant:"primary",type:"submit",children:" Next "})]})}var q="/api/orders";function J(e){return fetch(q,{method:"POST",body:e,headers:{Authorization:"Bearer "+m.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}function H(){return fetch(q,{headers:{Authorization:"Bearer "+m.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}function D(e){var t=e.loggedUser,r=Object(n.useState)([]),a=Object(c.a)(r,2),s=a[0],o=a[1],l=Object(n.useState)(!0),b=Object(c.a)(l,2),u=b[0],O=b[1],h=Object(n.useState)(""),x=Object(c.a)(h,2),p=(x[0],x[1]);function m(){return(m=Object(i.a)(Object(j.a)().mark((function e(t){var r;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),e.next=4,J(t);case 4:r=e.sent,console.log(r),o([r.data].concat(Object(P.a)(s))),O(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),p("Error creating post, please try again");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function g(){return(g=Object(i.a)(Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H();case 3:t=e.sent,console.log(t," data"),o(Object(P.a)(t.data)),O(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message,"this is the error"),O(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),u?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S,{loggedUser:t}),Object(d.jsx)(U,{})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsx)("h1",{children:"Place your orders here!"}),Object(d.jsx)(z,{handleAddOrder:function(e){return m.apply(this,arguments)}}),Object(d.jsx)(y,{})]})}var M=function(){var e=Object(n.useState)(f.getUser()),t=Object(c.a)(e,2),r=t[0],a=t[1];function s(){a(f.getUser())}return r?Object(d.jsxs)(o.h,{children:[Object(d.jsx)(o.e,{path:"/",element:Object(d.jsx)(G,{})}),Object(d.jsx)(o.e,{path:"/login",element:Object(d.jsx)(L,{handleSignUpOrLogin:s})}),Object(d.jsx)(o.e,{path:"/signup",element:Object(d.jsx)(I,{handleSignUpOrLogin:s})}),Object(d.jsx)(o.e,{path:"/:username",element:Object(d.jsx)(F,{})}),Object(d.jsx)(o.e,{path:"/checkout",element:Object(d.jsx)(D,{})})]}):Object(d.jsxs)(o.h,{children:[Object(d.jsx)(o.e,{path:"/login",element:Object(d.jsx)(L,{handleSignUpOrLogin:s})}),Object(d.jsx)(o.e,{path:"/signup",element:Object(d.jsx)(I,{handleSignUpOrLogin:s})}),Object(d.jsx)(o.e,{path:"/*",element:Object(d.jsx)(o.c,{to:"/login"})})]})},R=r(28);s.a.render(Object(d.jsx)(R.BrowserRouter,{children:Object(d.jsx)(M,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.4efcf63d.chunk.js.map