(this.webpackJsonpshopper=this.webpackJsonpshopper||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),m=(a(11),a(5)),l=a(1),o=a(2),s=function(e){var t=e.activeTab,a=e.onTabChange;return c.a.createElement("nav",{className:"App-nav"},c.a.createElement("ul",null,c.a.createElement("li",{className:"App-nav-item ".concat(0===t&&"selected")},c.a.createElement("a",{onClick:function(){return a(0)}},"Items")),c.a.createElement("li",{className:"App-nav-item ".concat(1===t&&"selected")},c.a.createElement("a",{onClick:function(){return a(1)}},"Cart"))))},u=(a(12),a(13),function(e){var t=e.item,a=e.children;return c.a.createElement("div",{className:"Item"},c.a.createElement("div",{className:"Item-left"},c.a.createElement("div",{className:"Item-image"}),c.a.createElement("div",{className:"Item-title"},t.name),c.a.createElement("div",{className:"Item-description"},t.description)),c.a.createElement("div",{className:"Item-right"},c.a.createElement("div",{className:"Item-price"},"$",t.price)," ",a," "))});a(14);var d=function(e){var t=e.items,a=e.onAddToCart;return c.a.createElement("ul",{className:"ItemPage-items"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"ItemPage-item"},c.a.createElement(u,{item:e},c.a.createElement("button",{className:"Item-addToCart",onClick:function(){return a(e)}},"Add to Cart")))})))},p=[{id:0,name:"Apple iPad",description:"An iPad like no other. WiFi, 4G, lots of storage.",price:329},{id:1,name:"Apple iPad Pro",description:"Even more expensive than the regular iPad.",price:799},{id:2,name:"Canon T7i",description:"DSLR camera with lots of megapixels.",price:749.99},{id:3,name:"Apple Watch Sport",description:"A watch",price:249.99},{id:4,name:"Apple Watch Silver",description:"A more expensive watch",price:599.99}];a(15);var f=function(e){var t=e.items,a=e.onAddOne,n=e.onRemoveOne;return c.a.createElement("ul",{className:"CartPage-items"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"CartPage-item"},c.a.createElement(u,{item:e},c.a.createElement("div",{className:"CartItem-controls"},c.a.createElement("button",{className:"CartItem-removeOne",onClick:function(){return n(e)}},"\u2013"),c.a.createElement("span",{className:"CartItem-count"},e.count," "),c.a.createElement("button",{className:"CartItem-addOne",onClick:function(){return a(e)}},"+"))))})))},v=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),v=u[0],E=u[1],N=function(e){E([].concat(Object(l.a)(v),[e.id]))},C=function(e){var t=v.indexOf(e.id);E([].concat(Object(l.a)(v.slice(0,t)),Object(l.a)(v.slice(t+1))))},b=function(){var e=v.reduce((function(e,t){return e[t]=e[t]||0,e[t]++,e}),{}),t=Object.keys(e).map((function(t){var a=p.find((function(e){return e.id===parseInt(t,10)}));return Object(m.a)({},a,{count:e[t]})}));return c.a.createElement(f,{items:t,onAddOne:N,onRemoveOne:C})};return c.a.createElement("div",{className:"App"},c.a.createElement(s,{activeTab:a,onTabChange:function(e){r(e)}}),c.a.createElement("main",{className:"App-content"},function(){switch(a){case 0:return c.a.createElement(d,{items:p,onAddToCart:N});case 1:return b();default:return null}}()))};i.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.4c88e6de.chunk.js.map