"use strict";(self.webpackChunkmini_ecommerce=self.webpackChunkmini_ecommerce||[]).push([[203],{6386:function(t,e,n){n.d(e,{Z:function(){return v}});var r=n(9439),c=n(3695),a=n(6106),s=n(914),i=n(6698),o=n(2791),u=n(5509),l=n(7504),d=n(6533),f=n(6256),h=n(6871),p=n(3504),g=n(184),x=u.Z.Meta;var m=function(t){var e=t.item,n=t.addToCartStore,r=t.loading,c=(0,h.s0)();return(0,g.jsx)(g.Fragment,{children:r?(0,g.jsx)(l.Z,{active:!0}):(0,g.jsxs)(u.Z,{cover:(0,g.jsx)("img",{alt:"example",src:e.images[0]}),actions:[(0,g.jsx)(d.Z,{onClick:function(){return n(e)}},"cart"),(0,g.jsx)(f.Z,{onClick:function(){return c("/product/".concat(e.id))}},"detail")],children:[(0,g.jsx)(x,{title:(0,g.jsx)(p.rU,{to:"/product/".concat(e.id),children:(0,g.jsx)("strong",{children:e.title})})}),(0,g.jsx)(x,{title:"".concat(e.price,"$")})]})})},j=n(4192),Z=n(9434);var v=function(t){var e=t.products,n=t.loading,u=t.currentPage,l=t.setCurrentPage,d=t.total,f=t.isCategory,x=(0,h.s0)(),v=(0,p.lr)(),C=(0,r.Z)(v,2),k=C[0],P=(C[1],(0,Z.I0)());(0,o.useEffect)((function(){var t,e=k.get("page");t=e?parseInt(e):1,l(t)}),[]);var S=function(t){c.ZP.success("Added to cart"),P((0,j.Xq)(t))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.Z,{gutter:[16,16],className:"min-height",children:e.map((function(t){return(0,g.jsx)(s.Z,{className:"gutter-row",lg:6,md:8,sm:8,xs:12,children:(0,g.jsx)(m,{addToCartStore:S,loading:n,item:t})},t.id)}))}),(0,g.jsx)("div",{className:"horizontal-center pagination heading",children:(0,g.jsx)(i.Z,{showTotal:function(t){return"Total ".concat(t," products")},defaultPageSize:10,onChange:function(t,e){if(l(t),f)return x({pathname:"/category/".concat(f),search:"?page=".concat(t)});x({pathname:"/",search:"?page=".concat(t)})},current:u,total:d})})]})}},203:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(4165),c=n(5861),a=n(9439),s=n(2791),i=n(7788),o=n(6386),u=n(184),l=i.Z.Title;function d(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],i=e[1],d=(0,s.useState)(0),f=(0,a.Z)(d,2),h=f[0],p=f[1],g=(0,s.useState)(!1),x=(0,a.Z)(g,2),m=x[0],j=x[1],Z=(0,s.useState)(1),v=(0,a.Z)(Z,2),C=v[0],k=v[1],P=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n,c,a,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 10,j(!0),t.next=4,fetch("https://api.escuelajs.co/api/v1/products?offset=".concat(10*(e-1),"&limit=").concat(10));case 4:return n=t.sent,t.next=7,n.json();case 7:return c=t.sent,t.next=10,fetch("https://api.escuelajs.co/api/v1/products");case 10:return a=t.sent,t.next=13,a.json();case 13:s=t.sent,j(!1),p(s.length),i(c);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,s.useEffect)((function(){P(C)}),[C]),(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("div",{className:"horizontal-center heading",children:(0,u.jsx)(l,{children:"All Products"})}),(0,u.jsx)(o.Z,{products:n,loading:m,setCurrentPage:function(t){return k(t)},total:h,currentPage:C})]})}}}]);
//# sourceMappingURL=203.daaf5672.chunk.js.map