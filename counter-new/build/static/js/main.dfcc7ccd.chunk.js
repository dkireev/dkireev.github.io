(this["webpackJsonpcounter-new"]=this["webpackJsonpcounter-new"]||[]).push([[0],[,,,,function(t,e,n){t.exports=n(11)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(2),o=n.n(c),u=(n(9),n(10),function(t,e){return t.reduce((function(t,n){return t+1/e[n.currency]*n.amount}),0)}),i={crypto:[{currency:"BTC",amount:.02127568}],securities:[{currency:"EUR",amount:324.95},{currency:"EUR",amount:124.12}],deposits:[{start:"Mar 4, 2020",currency:"UAH",amount:92155.16,interest:14.2,tax:19.5},{start:"Mar 10, 2020",currency:"UAH",amount:174817.6,interest:17,tax:19.5},{start:"Mar 11, 2020",currency:"UAH",amount:32263.59,interest:17,tax:19.5},{start:"Mar 3, 2020",currency:"UAH",amount:30242.82,interest:16,tax:19.5},{start:"Feb 21, 2020",currency:"UAH",amount:10120.85,interest:13.75,tax:19.5}]},s=n(3),m=function(){var t=Object(r.useState)({}),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(r.useEffect)((function(){fetch("https://openexchangerates.org/api/latest.json?app_id=37ce05177037491283b06fe29e31e8f3&symbols=EUR,BTC,UAH").then((function(t){return t.json()})).then((function(t){return t.rates})).then(a)}),[]),n},f=function(){return i.deposits.map((function(t){var e=((new Date).getTime()-new Date(t.start).getTime())/1e3;return t.interest/31557600*e*t.amount/100})).reduce((function(t,e){return t+e}),0)},l=a.a.memo((function(){var t=m(),e=Object.keys(i).map((function(e){return u(i[e],t)})).reduce((function(t,e){return t+e}),0),n=e*t.UAH,r=f();return a.a.createElement("div",{className:"App"},isNaN(e)?"Loading...":"".concat(n.toFixed(2)," UAH"),a.a.createElement("br",null),a.a.createElement("br",null),r.toFixed(2)," UAH")}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.dfcc7ccd.chunk.js.map