webpackJsonp([3],{52:function(e,t,l){"use strict";function n(e){e=new Date(e);var t=e.getMonth()+1;return e.getFullYear()+"-"+t.toString().padStart(2,"0")+"-"+e.getDate()}Object.defineProperty(t,"__esModule",{value:!0});var a=l(0),u=function(e){return e&&e.__esModule?e:{default:e}}(a),r=l(27);t.default=(0,r.withRouteData)(function(e){var t=e.posts;return u.default.createElement("div",null,u.default.createElement("h1",null,"It's blog time."),u.default.createElement("br",null),"All Posts:",u.default.createElement("ul",null,t.sort(function(e,t){return new Date(t.date)-new Date(e.date)}).map(function(e){return u.default.createElement("li",{key:e.slug},n(e.date),": ",u.default.createElement(r.Link,{to:"/blog/post/"+e.slug+"/"},e.title))})))})}});