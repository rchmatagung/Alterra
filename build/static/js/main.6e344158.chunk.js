(this.webpackJsonptester=this.webpackJsonptester||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),a=n(22),o=n.n(a),i=(n(32),n(33),n(10)),r=n(15),l=n(14),u=n(8),d=n(23),j=n(1),b=[{title:"Home",path:"/",icon:Object(j.jsx)(l.a,{}),cName:"nav-text"},{title:"About App",path:"/About/About-App",icon:Object(j.jsx)(r.b,{}),cName:"nav-text"},{title:"About Author",path:"/About/About-Author",icon:Object(j.jsx)(d.a,{}),cName:"nav-text"}],p=(n(35),n(0));var m=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],a=function(){return c(!n)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(p.b.Provider,{value:{color:"#fff"},children:[Object(j.jsx)("div",{className:"navbar",children:Object(j.jsx)(u.b,{to:"#",className:"menu-bars",children:Object(j.jsx)(r.a,{onClick:a})})}),Object(j.jsx)("nav",{className:n?"nav-menu active":"nav-menu",children:Object(j.jsxs)("ul",{className:"nav-menu-items",onClick:a,children:[Object(j.jsx)("li",{className:"navbar-toggle",children:Object(j.jsx)(u.b,{to:"#",className:"menu-bars",children:Object(j.jsx)(l.b,{})})}),b.map((function(e,t){return Object(j.jsx)("li",{className:e.cName,children:Object(j.jsxs)(u.b,{to:e.path,children:[e.icon,Object(j.jsx)("span",{children:e.title})]})},t)}))]})})]})})},h=n(3),O=n(19),x=n.n(O),f=n(27),v=n(26),g=function(e){var t=e.setInputText,n=e.todos,s=e.setTodos,c=e.inputText,a=e.setStatus,o=(e.setNameVal,function(){var e=Object(v.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),s([].concat(Object(f.a)(n),[{text:c,completed:!1,id:Math.random()}])),t("");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{value:c,onChange:function(e){t(e.target.value)},type:"text",className:"todo-input",required:!0}),Object(j.jsx)("button",{onClick:o,className:"todo-button",type:"submit",children:Object(j.jsx)("i",{className:"fas fa-plus-square"})}),Object(j.jsx)("div",{className:"select",children:Object(j.jsxs)("select",{onChange:function(e){a(e.target.value)},name:"todos",className:"filter-todo",children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"completed",children:"Completed"}),Object(j.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},y=n(20),k=function(e){var t=e.text,n=e.todo,s=e.todos,c=e.setTodos;return Object(j.jsxs)("div",{className:"todo",children:[Object(j.jsx)("li",{className:"todo-item ".concat(n.completed?"completed":""),children:t}),Object(j.jsx)("button",{onClick:function(){c(s.map((function(e){return e.id===n.id?Object(y.a)(Object(y.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn",children:Object(j.jsx)("i",{className:"fa fa-check"})}),Object(j.jsx)("button",{onClick:function(){c(s.filter((function(e){return e.id!==n.id})))},className:"trash-btn",children:Object(j.jsx)("i",{className:"fa fa-trash"})})]})},N=function(e){var t=e.todos,n=e.setTodos,s=e.filteredTodos;return Object(j.jsx)("div",{className:"todo-container",children:Object(j.jsx)("ul",{className:"todo-list",children:s.map((function(e){return Object(j.jsx)(k,{setTodos:n,todos:t,todo:e,text:e.text},e.id)}))})})};n(42);var A=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)([]),o=Object(i.a)(a,2),r=o[0],l=o[1],u=Object(s.useState)("all"),d=Object(i.a)(u,2),b=d[0],p=d[1],m=Object(s.useState)([]),h=Object(i.a)(m,2),O=h[0],x=h[1];Object(s.useEffect)((function(){y()}),[]),Object(s.useEffect)((function(){f(),v()}),[r,b]);var f=function(){switch(b){case"completed":x(r.filter((function(e){return!0===e.completed})));break;case"uncompleted":x(r.filter((function(e){return!1===e.completed})));break;default:x(r)}},v=function(){localStorage.setItem("todos",JSON.stringify(r))},y=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));l(e)}};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"Todo List App"})}),Object(j.jsx)(g,{inputText:n,todos:r,setTodos:l,setInputText:c,setStatus:p}),Object(j.jsx)(N,{filteredTodos:O,setTodos:l,todos:r})]})};var I=function(){return Object(j.jsx)("div",{className:"aboutauthor",children:Object(j.jsxs)("div",{class:"about",children:[Object(j.jsx)("h1",{children:"About App"}),Object(j.jsx)("p",{class:"isiaboutapp",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"})]})})};var S=function(){return Object(j.jsx)("div",{className:"aboutauthor",children:Object(j.jsxs)("div",{class:"about",children:[Object(j.jsx)("h1",{children:"About Author"}),Object(j.jsx)("p",{class:"isiaboutapp",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"})]})})};n(43);var T=function(){return Object(j.jsx)("div",{id:"container",children:Object(j.jsxs)("div",{class:"content",children:[Object(j.jsx)("h2",{children:"404"}),Object(j.jsx)("h4",{children:"Oops! Page not found"}),Object(j.jsx)("p",{children:"Page Yang Anda Masukkan Tidak Ada, Silahkan Menggunakan Alamat URL Yang Tersedia Saja"}),Object(j.jsx)(u.b,{to:"/",children:"Back To Home"})]})})};var w=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(u.a,{children:[Object(j.jsx)(m,{}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{path:"/",exact:!0,component:A}),Object(j.jsx)(h.a,{path:"/About/About-App",component:I}),Object(j.jsx)(h.a,{path:"/About/About-Author",component:S}),Object(j.jsx)(h.a,{component:T})]})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),L()}},[[44,1,2]]]);
//# sourceMappingURL=main.6e344158.chunk.js.map