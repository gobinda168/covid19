(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{29:function(e,a,t){e.exports=t(65)},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},55:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(23),l=t.n(r),s=(t(34),t(35),t(7)),o=t(6),i=(t(36),t(11)),d=t.n(i),m=t(24),u=t(28),v=t(25),E=t.n(v),h=function(e){var a=Object(n.useState)(null),t=Object(u.a)(a,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(a){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(a);case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}})()(e)}),[e]),c},f=(t(55),function(e){var a=e.data,t=e.title,n=e.cls;return c.a.createElement("div",{className:"card-box"},c.a.createElement("p",{className:"Infected"===n?"title red":"recovered"===n?"title green":" title yellow"},t),c.a.createElement("p",{className:"status"},a))}),p=function(){var e=h("https://corona.lmao.ninja/all");return c.a.createElement("div",null,c.a.createElement("h1",{className:"title"},"World Details"),c.a.createElement("div",{className:"cards"},c.a.createElement(f,{data:e?e.cases:"Loading..",title:"Total Infected",cls:"Infected"}),c.a.createElement(f,{data:e?e.recovered:"Loading..",title:"Total Recovered",cls:"recovered"}),c.a.createElement(f,{data:e?e.deaths:"Loading..",title:"Total Deaths",cls:"death"})))},b=function(){return c.a.createElement("div",null,c.a.createElement("nav",{class:"navbar navbar-dark bg-dark"},c.a.createElement(s.b,{class:"navbar-brand",to:"/"},c.a.createElement("img",{src:"/docs/4.4/assets/brand/bootstrap-solid.svg",width:"30",height:"30",class:"d-inline-block align-top",alt:""}),"COVID19 TRACKER"),c.a.createElement(s.b,{to:"/",className:"navItem"},"Home"),c.a.createElement(s.b,{to:"/india",className:"navItem"},"India"),c.a.createElement(s.b,{to:"/country",className:"navItem"},"Country")))},g=function(){var e=h("https://corona.lmao.ninja/countries/india");return c.a.createElement("div",null,c.a.createElement("h1",{className:"title"},"India Details"),c.a.createElement("div",{className:"cards"},c.a.createElement(f,{data:e?e.cases:"Loading..",title:"Total Infected",cls:"Infected"}),c.a.createElement(f,{data:e?e.recovered:"Loading..",title:"Total Recovered",cls:"recovered"}),c.a.createElement(f,{data:e?e.deaths:"Loading..",title:"Total Deaths",cls:"death"})))},N=(t(64),function(e){var a=e.data,t=a.country,n=a.cases,r=a.todayCases,l=a.deaths,s=a.todayDeaths,o=a.recovered;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"title"},t),c.a.createElement("div",{className:"infected"},"Infected: ",n),c.a.createElement("div",{className:"recovered"},"Recovered: ",o," "),c.a.createElement("div",{className:"deaths"},"Deaths: ",l," "),c.a.createElement("div",{className:"todaycases"},"Today's Cases: ",r," "),c.a.createElement("div",{className:"todaydeaths"},"Today's Death: ",s," "))}),y=function(){var e=h("https://corona.lmao.ninja/countries");return c.a.createElement("div",{className:"cards"},e?e.map((function(e){return c.a.createElement(N,{data:e})})):"Loading..")};var I=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s.a,null,c.a.createElement(b,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:p}),c.a.createElement(o.a,{exact:!0,path:"/india",component:g}),c.a.createElement(o.a,{exact:!0,path:"/country",component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.7d6543d6.chunk.js.map