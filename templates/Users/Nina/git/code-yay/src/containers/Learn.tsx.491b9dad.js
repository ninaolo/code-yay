(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{113:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(38),c=e.n(o),u=e(58),i=e.n(u),l=e(59),f=e.n(l),s=e(60),p=e.n(s),m=e(61),d=e.n(m),v=e(62),x=e.n(v),y=e(19),h=e.n(y),w=e(69),E=e(20),b=e(227);function k(){var n=h()(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  align-content: space-evenly;\n  flex-wrap: wrap;\n"]);return k=function(){return n},n}function g(){var n=h()(["\n  margin: 1em 0;\n"]);return g=function(){return n},n}var j=E.b.span(g()),J=E.b.div(k()),P=function(n){function t(){return i()(this,t),p()(this,d()(t).apply(this,arguments))}return x()(t,n),f()(t,[{key:"render",value:function(){var n=function(n){return a.a.createElement(j,null,a.a.createElement(w.a,c()({color:"secondary",variant:"contained",round:!0,box:!0,component:b.a},n),n.text))};return a.a.createElement(J,null,this.props.links.map((function(t){return a.a.createElement(n,{text:t.text,to:t.to,key:t.to})})))}}]),t}(a.a.Component),C=e(45);function D(){var n=Object(C.useRouteData)().node,t=n.children.map((function(t){return{text:t.text,to:t.slug?"".concat(n.fullPath,"/").concat(t.slug):"".concat(n.fullPath,"/").concat(t.route)}}));return a.a.createElement("div",null,a.a.createElement(P,{links:t}))}e.d(t,"default",(function(){return D}))},227:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return f}));var r=e(38),a=e.n(r),o=e(0),c=e.n(o),u=e(29),i=e(69),l=function(n){return c.a.createElement(u.a,a()({to:n.to},n))},f=function(n){return c.a.createElement(i.a,a()({color:n.color?n.color:"primary",variant:"contained",component:l},n),n.text)}}}]);