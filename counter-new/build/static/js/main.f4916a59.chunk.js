(this["webpackJsonpcounter-new"]=this["webpackJsonpcounter-new"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),c=n.n(a),u=(n(9),n(10),n(3)),i=function(){var e=Object(r.useState)({}),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(r.useEffect)((function(){fetch("https://dkireev.github.io/counter/latest.json").then((function(e){return e.json()})).then((function(e){return e.rates})).then(o)}),[]),n},s=function(e){var t=i();return e.reduce((function(e,n){return e+1/t[n.currency]*n.amount}),0)},l=1e6,m=[{currency:"BTC",amount:.02127568}],f=[{currency:"EUR",amount:350.78},{currency:"EUR",amount:133.83}],h=[{start:"Mar 4, 2020",currency:"UAH",amount:92155.16,interest:14.2},{start:"Mar 10, 2020",currency:"UAH",amount:174817.6,interest:17},{start:"Mar 11, 2020",currency:"UAH",amount:32263.59,interest:17},{start:"Mar 3, 2020",currency:"UAH",amount:30242.82,interest:16},{start:"Feb 21, 2020",currency:"UAH",amount:10120.85,interest:13.75}],d=o.a.memo((function(){var e=i(),t=s(m)+s(f)+s(h),n=t*e.UAH;return o.a.createElement("div",{className:"App"},"Total: ",t.toFixed(2)," USD",o.a.createElement("br",null),o.a.createElement("br",null),"Total: ",n.toFixed(2)," UAH",o.a.createElement("br",null),o.a.createElement("br",null),"Goal completion: ",(100*t/l).toFixed(2),"%")}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.f4916a59.chunk.js.map