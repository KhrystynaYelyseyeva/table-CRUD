(this["webpackJsonptable-CRUD"]=this["webpackJsonptable-CRUD"]||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),s=a(25),l=a(191),o=a(15),d=a(189),u=a(190),j=a(177),b=a(86),O=a(13),h=a(195),m=a(193),g=a(4);function p(e){return Object(g.jsx)(m.a,Object(O.a)({elevation:3,variant:"filled"},e))}var f=function(e){var t=e.openSnackbar,a=e.handleCloseSnackbar;return Object(g.jsx)(h.a,{open:t,autoHideDuration:3e3,onClose:a,children:Object(g.jsx)(p,{onClose:a,severity:"success",children:"Success!"})})},x=a(11),v=a(125),y=a(94),_=a(127),w=a(175),S=a(194),C=a(173),k=a(174),D=a(197),I=a(178),U=a(176),L=a(21),B=a(42),E="users/ADD",A="users/EDIT",H="users/DELETE",F="users/CLEAN_HISTORY",N=function(e){return{type:E,user:e}},R=function(e,t){return{type:A,userID:e,newData:t}},T=function(e){return{type:H,userID:e}},P=function(){return{type:F}},z=a(45),W=a(26),Z=a(90),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{usersList:Z,history:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(O.a)(Object(O.a)({},e),{},{usersList:[].concat(Object(W.a)(e.usersList),[t.user])});case A:return Object(O.a)(Object(O.a)({},e),{},{usersList:e.usersList.map((function(e){return e.id===t.userID?Object(O.a)({},t.newData):e}))});case H:var a=e.usersList.find((function(e){return e.id===t.userID})),n=Object(O.a)(Object(O.a)({},a),{},{id:e.usersList.length});return Object(O.a)(Object(O.a)({},e),{},{history:[].concat(Object(W.a)(e.history),[n]),usersList:e.usersList.filter((function(e){return e.id!==t.userID}))});case F:var r=!e.history.length;return r?e:Object(O.a)(Object(O.a)({},e),{},{history:[]});default:return e}},G=function(e){return e.users.usersList},q=function(e){return e.users.history[e.users.history.length-1]},J=Object(z.b)({users:M}),$=Object(U.a)((function(e){return{paper:Object(x.a)({margin:"auto",marginTop:e.spacing(2),width:"100vw",padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(4),width:"50vw"}),button:{background:e.palette.success.light}}})),K=function(e){var t=e.handleClose,a=e.type,n=e.currentUserID,r=e.handleOpenSnackbar,c=$(),i=Object(s.b)(),l=Object(s.c)(G),o={};if(n){var d=l.find((function(e){return e.id===n})),u=d.full_name.split(" ");o.first_name=u[0],o.last_name=u[1],o.gender=d.gender,o.language=d.language,o.credit_card=d.credit_card,o.email=d.email,o.id=d.id}var b=n?o:{first_name:"",last_name:"",gender:"Male",language:"",credit_card:"",email:""};return Object(g.jsxs)(v.a,{className:c.paper,children:[Object(g.jsxs)(y.a,{component:"h1",variant:"h5",align:"center",children:["add-user"===a&&"New user:","edit-user"===a&&"Edit user:"]}),Object(g.jsx)(L.c,{initialValues:b,validate:function(e){var t={};return e.first_name?/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(e.first_name)||(t.first_name="Invalid First name"):t.first_name="Required",e.last_name?/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(e.last_name)||(t.last_name="Invalid Last name"):t.last_name="Required",e.language||(t.language="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.credit_card||(t.credit_card="Required"),t},onSubmit:function(e){var c={full_name:"".concat(e.first_name," ").concat(e.last_name),gender:e.gender,language:e.language,credit_card:e.credit_card,email:e.email,id:l.length+1};switch(a){case"add-user":i(N(c));break;case"edit-user":i(R(n,c));break;default:return}t(),r()},children:function(e){var t=e.submitForm;return Object(g.jsx)(L.b,{children:Object(g.jsxs)(j.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch",spacing:3,children:[Object(g.jsx)(j.a,{item:!0,children:Object(g.jsx)(L.a,{component:B.c,name:"first_name",type:"text",label:"First name",autoFocus:!0,fullWidth:!0})}),Object(g.jsx)(j.a,{item:!0,children:Object(g.jsx)(L.a,{component:B.c,name:"last_name",type:"text",label:"Last name",fullWidth:!0})}),Object(g.jsxs)(j.a,{item:!0,children:[Object(g.jsx)(_.a,{component:"legend",children:"Gender"}),Object(g.jsxs)(L.a,{component:B.a,name:"gender",children:[Object(g.jsx)(w.a,{value:"Male",control:Object(g.jsx)(S.a,{}),label:"Male"}),Object(g.jsx)(w.a,{value:"Female",control:Object(g.jsx)(S.a,{}),label:"Female"})]})]}),Object(g.jsx)(j.a,{item:!0,children:Object(g.jsxs)(C.a,{fullWidth:!0,children:[Object(g.jsx)(k.a,{id:"language-label",children:"Language"}),Object(g.jsxs)(L.a,{labelId:"language-label",component:B.b,name:"language",inputProps:{id:"language"},children:[Object(g.jsx)(D.a,{value:"English",children:"English"}),Object(g.jsx)(D.a,{value:"Ukraine",children:"Ukraine"})]})]})}),Object(g.jsx)(j.a,{item:!0,children:Object(g.jsx)(L.a,{component:B.c,name:"email",type:"email",label:"Email",fullWidth:!0})}),Object(g.jsx)(j.a,{item:!0,children:Object(g.jsx)(L.a,{component:B.c,name:"credit_card",type:"number",label:"Credit card number",fullWidth:!0})}),Object(g.jsx)(j.a,{item:!0,container:!0,justify:"flex-end",children:Object(g.jsxs)(I.a,{variant:"contained",className:c.button,onClick:t,children:["add-user"===a&&"Add to users","edit-user"===a&&"Save"]})})]})})}})]})},V=a(126),Y=a(192),Q=a(91),X=a.n(Q),ee=Object(U.a)((function(e){return{button:{display:"block",margin:e.spacing(2),fontWeight:"bold",color:"white",borderColor:"white"}}})),te=function(e){var t=e.children,a=e.type,r=Object(n.useState)(!1),c=Object(o.a)(r,2),i=c[0],s=c[1],l=ee(),d=function(){s(!0)},u=function(){s(!1)};return Object(g.jsxs)("div",{children:["add-user"===a&&Object(g.jsx)(I.a,{variant:"outlined",className:l.button,onClick:d,"aria-label":"add-user",children:"Add user"}),"edit-user"===a&&Object(g.jsx)(V.a,{"aria-label":"edit-user",onClick:d,children:Object(g.jsx)(X.a,{fontSize:"small"})}),Object(g.jsx)(Y.a,{open:i,onClose:u,children:t({handleClose:u,type:a})})]})},ae=a(92),ne=a.n(ae),re=a(196),ce=a(181),ie=a(180),se=a(32),le=a(179),oe=function(e){var t=e.openDialog,a=e.handleCloseDialog,n=e.userID,r=e.handleShowUndoButton,c=Object(se.a)(),i=Object(le.a)(c.breakpoints.down("sm")),l=Object(s.b)();return Object(g.jsx)("div",{children:Object(g.jsxs)(re.a,{fullScreen:i,open:t,onClose:a,"aria-labelledby":"responsive-dialog-title",children:[Object(g.jsx)(ie.a,{id:"responsive-dialog-title",children:"Do you want to delete this user?"}),Object(g.jsxs)(ce.a,{children:[Object(g.jsx)(I.a,{autoFocus:!0,onClick:a,color:"primary",children:"Cancel"}),Object(g.jsx)(I.a,{onClick:function(){l(T(n)),r(),a()},color:"primary",children:"Delete"})]})]})})},de=function(e){var t=e.userID,a=e.handleShowUndoButton,r=Object(n.useState)(!1),c=Object(o.a)(r,2),i=c[0],s=c[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(oe,{openDialog:i,handleCloseDialog:function(){s(!1)},userID:t,handleShowUndoButton:a}),Object(g.jsx)(V.a,{"aria-label":"delete",onClick:function(){s(!0)},children:Object(g.jsx)(ne.a,{fontSize:"small"})})]})},ue=[{Header:"Edit user",id:"edit",Cell:function(e){var t=e.handleOpenSnackbar,a=e.row;return Object(g.jsx)(te,{type:"edit-user",children:function(e){var n=e.handleClose,r=e.type;return Object(g.jsx)(K,{handleClose:n,type:r,currentUserID:a.original.id,handleOpenSnackbar:t})}})}},{Header:"Full Name",accessor:"full_name"},{Header:"Gender",accessor:"gender"},{Header:"Language",accessor:"language"},{Header:"Email",accessor:"email"},{Header:"Credit card",accessor:"credit_card"},{Header:"Delete user",id:"delete",Cell:function(e){var t=e.handleShowUndoButton,a=e.row.original;return Object(g.jsx)(de,{userID:a.id,handleShowUndoButton:t})}}],je=a(183),be=a(187),Oe=a(186),he=a(182),me=a(184),ge=a(185),pe=Object(U.a)({table:{minWidth:650},fontBold:{fontWeight:"bold"}}),fe=function(e){var t=e.getTableProps,a=e.getTableBodyProps,n=e.headerGroups,r=e.rows,c=e.prepareRow,i=e.handleOpenSnackbar,s=e.handleShowUndoButton,l=pe();return Object(g.jsx)(he.a,{component:v.a,children:Object(g.jsxs)(je.a,Object(O.a)(Object(O.a)({},t()),{},{className:l.table,"aria-label":"users table",children:[Object(g.jsx)(me.a,{children:n.map((function(e){return Object(g.jsx)(ge.a,Object(O.a)(Object(O.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(g.jsx)(Oe.a,Object(O.a)(Object(O.a)({},e.getHeaderProps()),{},{className:l.fontBold,align:"center",children:e.render("Header")}))}))}))}))}),Object(g.jsx)(be.a,Object(O.a)(Object(O.a)({},a()),{},{children:r.map((function(e){return c(e),Object(g.jsx)(ge.a,Object(O.a)(Object(O.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(g.jsx)(Oe.a,Object(O.a)(Object(O.a)({},e.getCellProps()),{},{children:e.render("Cell",{handleOpenSnackbar:i,handleShowUndoButton:s})}))}))}),e.name)}))}))]}))})},xe=a(188),ve=Object(U.a)((function(e){return{progress:{marginRight:e.spacing(2),color:"white"},button:{position:"absolute",right:e.spacing(2)}}})),ye=function(e){var t=e.handleHiddenUndoButton,a=ve(),r=Object(s.c)(q),c=Object(s.b)(),i=Object(n.useState)(0),l=Object(o.a)(i,2),d=l[0],u=l[1];Object(n.useEffect)((function(){var e=setInterval((function(){u((function(e){return e>=100?(c(P()),t(),0):e+10}))}),800);return function(){clearInterval(e)}}),[c,t]);return Object(g.jsxs)(I.a,{variant:"contained",color:"secondary",className:a.button,onClick:function(){!function(e){c(N(e)),c(P())}(r),t()},children:[Object(g.jsx)(xe.a,{className:a.progress,variant:"determinate",value:d,size:20}),"return user"]})},_e=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),l=i[0],O=i[1],h=function(){r(!0)},m=Object(s.c)(G),p=Object(n.useMemo)((function(){return ue}),[]),x=Object(n.useMemo)((function(){return m}),[m]),v=Object(b.useTable)({columns:p,data:x}),y=v.getTableProps,_=v.getTableBodyProps,w=v.headerGroups,S=v.rows,C=v.prepareRow;return Object(g.jsxs)(g.Fragment,{children:[a&&Object(g.jsx)(f,{openSnackbar:a,handleCloseSnackbar:function(){r(!1)}}),Object(g.jsx)(d.a,{position:"fixed",children:Object(g.jsxs)(u.a,{children:[Object(g.jsx)(te,{type:"add-user",children:function(e){var t=e.handleClose,a=e.type;return Object(g.jsx)(K,{handleClose:t,type:a,handleOpenSnackbar:h})}}),l&&Object(g.jsx)(ye,{handleHiddenUndoButton:function(){O(!1)}})]})}),Object(g.jsx)(u.a,{}),Object(g.jsx)(u.a,{}),Object(g.jsxs)(j.a,{container:!0,children:[Object(g.jsx)(j.a,{item:!0,lg:1}),Object(g.jsx)(j.a,{item:!0,lg:10,children:Object(g.jsx)(fe,{getTableProps:y,getTableBodyProps:_,headerGroups:w,rows:S,prepareRow:C,handleOpenSnackbar:h,handleShowUndoButton:function(){O(!0)}})}),Object(g.jsx)(j.a,{item:!0,lg:1})]})]})};var we=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(l.a,{}),Object(g.jsx)(_e,{})]})},Se=(a(122),Object(z.c)(J));i.a.render(Object(g.jsx)(s.a,{store:Se,children:Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(we,{})})}),document.getElementById("root"))},90:function(e){e.exports=JSON.parse('[{"id":1,"email":"nshillingford0@tamu.edu","gender":"Female","language":"Ukraine","credit_card":"5010122142675155","full_name":"Nelly Shillingford"},{"id":2,"email":"cgirardengo1@liveinternet.ru","gender":"Man","language":"English","credit_card":"5108753092940075","full_name":"Caddric Girardengo"},{"id":3,"email":"lwitson2@netvibes.com","gender":"Female","language":"English","credit_card":"372301926789696","full_name":"Lionel Witson"},{"id":4,"email":"kvescovo3@yolasite.com","gender":"Man","language":"English","credit_card":"4220007719942832","full_name":"Kala Vescovo"},{"id":5,"email":"kdormer4@stumbleupon.com","gender":"Female","language":"Ukraine","credit_card":"4017955649603","full_name":"Kassandra Dormer"}]')}},[[123,1,2]]]);
//# sourceMappingURL=main.aab4e82a.chunk.js.map