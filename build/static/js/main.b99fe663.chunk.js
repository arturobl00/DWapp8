(this.webpackJsonpapp8=this.webpackJsonpapp8||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),c=n(19),o=n.n(c),s=(n(25),n(20)),l=n(7),i=n.n(l),u=n(14),b=n(12),d=n(10),p=(n(27),n(16));n(31);p.a.initializeApp({apiKey:"AIzaSyCyfR3Cl13RtT7P901ORA8JOF6vXpJlWSs",authDomain:"crudreact-9462a.firebaseapp.com",projectId:"crudreact-9462a",storageBucket:"crudreact-9462a.appspot.com",messagingSenderId:"125727015229",appId:"1:125727015229:web:f47b5b8cf00a11d88c4554"});var j=n(2);var m=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(d.a)(o,2),m=l[0],f=l[1],g=Object(a.useState)(""),h=Object(d.a)(g,2),O=h[0],v=h[1],x=Object(a.useState)(""),k=Object(d.a)(x,2),w=k[0],y=k[1],S=Object(a.useState)(!1),N=Object(d.a)(S,2),A=N[0],C=N[1];r.a.useEffect((function(){var e=function(){var e=Object(b.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=p.a.firestore(),e.next=4,t.collection("tareas").get();case 4:return n=e.sent,console.log(n.docs),e.next=8,n.docs.map((function(e){return Object(u.a)({id:e.id},e.data())}));case 8:a=e.sent,console.log(a),c(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var E=function(){var e=Object(b.a)(i.a.mark((function e(t){var a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Se esta ejecutando la funcion Agregar"),t.preventDefault(),!(!m.trim()|!O.trim())){e.next=5;break}return console.log("Falta un Campo"),e.abrupt("return");case 5:return e.prev=5,a=p.a.firestore(),r={name:m,date:O},e.next=10,a.collection("tareas").add(r);case 10:o=e.sent,c([].concat(Object(s.a)(n),[Object(u.a)(Object(u.a)({},r),{},{id:o.id})])),f(""),v(""),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.log(e.t0);case 19:console.log(m);case 20:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),a=p.a.firestore(),e.next=5,a.collection("tareas").doc(t).delete();case 5:r=n.filter((function(e){return e.id!==t})),console.log("Arreglo completo",n),console.log("Arreglo Filtrado",r),c(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(i.a.mark((function e(t){var a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Se esta ejecutando la funcion editar"),t.preventDefault(),!(!m.trim()|!O.trim())){e.next=5;break}return console.log("Falta un Campo"),e.abrupt("return");case 5:return e.prev=5,a=p.a.firestore(),r={name:m,date:O},e.next=10,a.collection("tareas").doc(w).update(r);case 10:o=n.map((function(e){return e.id===w?r:e})),c(o),f(""),v(""),y(""),C(!1),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Proyecto Firebase"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-md-6",children:[Object(j.jsx)("h3",{children:"Lista de Tareas"}),Object(j.jsx)("ul",{className:"list-group",children:n.map((function(e){return Object(j.jsxs)("li",{className:"list-group-item",children:[Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:e.date}),Object(j.jsx)("button",{className:"btn btn-danger btn-sm float-right",onClick:function(){return I(e.id)},children:"Eliminar"}),Object(j.jsx)("button",{className:"btn btn-warning btn-sm float-right mr-2",onClick:function(){return function(e){C(!0),console.log("Elemento name",e.name),f(e.name),console.log("Elemento date",e.date),v(e.date),console.log("Elemento id",e.id),y(e.id)}(e)},children:"Editar"})]},e.id)}))})]}),Object(j.jsxs)("div",{className:"col-md-6",children:[Object(j.jsx)("h3",{children:A?"Editar Tarea":"Agregar Tarea"}),Object(j.jsxs)("form",{onSubmit:A?F:E,children:[Object(j.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Ingrese Tarea",value:m,onChange:function(e){return f(e.target.value)}}),Object(j.jsx)("input",{type:"datetime-local",className:"form-control mb-2",value:O,onChange:function(e){return v(e.target.value)}}),Object(j.jsx)("button",{type:"submit",className:A?"btn btn-warning btn-block btn-sm":"btn btn-dark btn-block btn-sm",children:A?"Actualizar":"Guardar"})]})]})]})]})};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.b99fe663.chunk.js.map