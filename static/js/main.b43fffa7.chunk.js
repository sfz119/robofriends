(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{24:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(2),i=t.n(o),c=t(3),a=t(4),s="CHANGE_SEARCH_FIELD",l="REQUEST_ROBOTS_PENDING",d="REQUEST_ROBOTS_SUCCESS",u="REQUEST_ROBOTS_FAILED",h={searchField:""},b={isPending:!1,robots:[],error:""},f=t(8),j=t(9),g=t(10),v=t(11),p=t(13),O=t(12),m=t(1);var w=function(e){var n=e.id,t=e.name,r=e.username,o=e.email;return Object(m.jsxs)("div",{className:"bg-black dib br3 ma3 pa3 grow tc",children:[Object(m.jsx)("img",{src:"https://robohash.org/".concat(n,"?size=200*200"),"aria-hidden":!0,alt:"image of ".concat(r)}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:t}),Object(m.jsx)("p",{children:o})]})]})};var y=function(e){var n=e.robots;return Object(m.jsx)("div",{children:n.map((function(e,n){return Object(m.jsx)(w,{id:e.id,name:e.name,username:e.username,email:e.email},n)}))})};var R=function(e){var n=e.searchChange;return Object(m.jsx)("div",{children:Object(m.jsx)("input",{className:"pa3 br3 ba b--black bg-dark-gray white mb4 tc","aria-label":"Search Robots",type:"search",placeholder:"Search Robots Here...",onChange:n})})};var x=function(e){return Object(m.jsx)("div",{style:{overflowY:"scroll",height:"70vh"},children:e.children})},S=function(e){Object(p.a)(t,e);var n=Object(O.a)(t);function t(){return Object(g.a)(this,t),n.apply(this,arguments)}return Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.users,o=e.isPending,i=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o?Object(m.jsx)("div",{className:"tc",children:Object(m.jsx)("h2",{id:"header",className:"f1 tc",children:"Loading..."})}):Object(m.jsxs)("div",{className:"tc",children:[Object(m.jsx)("h2",{id:"header",className:"f1 tc",children:"Robo Friends"}),Object(m.jsx)(R,{searchChange:t}),Object(m.jsx)(x,{children:Object(m.jsx)(y,{robots:i})})]})}}]),t}(r.Component),k=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,users:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:s,payload:t}));var t},onRequestRobots:function(){return e((function(e){e({type:l}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:d,payload:n})})).catch((function(n){return e({type:u,payload:n})}))}))}}}))(S),C=(t(24),t(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function E(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=Object(f.createLogger)(),P=Object(a.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case s:return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case l:return Object.assign({},e,{isPending:!0});case d:return Object.assign({},e,{robots:n.payload,isPending:!1});case u:return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),A=Object(a.c)(P,Object(a.a)(j.a,N));i.a.render(Object(m.jsx)(c.a,{store:A,children:Object(m.jsx)(k,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");C?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(n,e)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.b43fffa7.chunk.js.map