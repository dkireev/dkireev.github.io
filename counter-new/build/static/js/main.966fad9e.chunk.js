(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(n,e,t){n.exports=t(30)},22:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),i=t(3),a=t.n(i),c=(t(22),t(4)),l=t(5),s=t(7),u=t(6),d=t(8),f=t(1),g=t(2),h=function(n){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){var n=this.props,e=n.source,t=n.size;return r.a.createElement("img",{src:"/icons/"+e+".svg",width:t,alt:""})}}]),e}(r.a.PureComponent);function p(){var n=Object(f.a)(["\n    width: 48px;\n    height: 48px;\n    background-color: green;\n    position: fixed;\n    right: 16px;\n    bottom: 32px;\n    border-radius: 50%;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n"]);return p=function(){return n},n}var v=Object(g.a)("div")(p()),b=function(){return r.a.createElement(v,null,r.a.createElement(h,{source:"plus",size:32}))};function w(){var n=Object(f.a)(["\n  height: calc(100vh - 48px);\n  padding: 16px;\n  display: grid;\n  align-items: center;\n  text-align: center;\n"]);return w=function(){return n},n}function m(){var n=Object(f.a)(["\n  background-color: #282c34;\n  height: 48px;\n  padding: 0 16px;\n  color: #fff;\n  display: grid;\n  align-items: center;\n  justify-content: space-between;\n"]);return m=function(){return n},n}function j(){var n=Object(f.a)(["\n  height: 100vh;\n  display: grid;\n  grid-auto-flow: row;\n"]);return j=function(){return n},n}var y=Object(g.a)("div")(j()),O=Object(g.a)("div")(m()),k=Object(g.a)("div")(w()),E=function(n){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(y,null,r.a.createElement(O,null,r.a.createElement("span",null,"Personal goals")),r.a.createElement(k,null,r.a.createElement("span",null,"You have no any goals yet...")),r.a.createElement(b,null))}}]),e}(r.a.PureComponent),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}a.a.render(r.a.createElement(E,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");x?(function(n,e){fetch(n).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):W(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):W(e,n)})}}()}},[[16,2,1]]]);
//# sourceMappingURL=main.966fad9e.chunk.js.map