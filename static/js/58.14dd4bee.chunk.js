"use strict";(self.webpackChunkmini_ecommerce=self.webpackChunkmini_ecommerce||[]).push([[58],{1246:function(t,e,n){n.d(e,{Z:function(){return k}});var r=n(9439),c=n(3695),a=n(6106),s=n(914),i=n(6698),o=n(2791),u=n(5509),l=n(7504),d=n(6533),f=n(6256),p=n(6871),h=n(3504),g=n(3455),x=n(184),m=u.Z.Meta;var j=function(t){var e=t.item,n=t.addToCartStore,r=t.loading,c=(0,p.s0)();return(0,x.jsx)(x.Fragment,{children:r?(0,x.jsx)(l.Z,{active:!0}):(0,x.jsxs)(u.Z,{cover:(0,x.jsx)("img",{alt:"example",src:e.images[0]}),actions:[(0,x.jsx)(d.Z,{onClick:function(){return n(e)}},"cart"),(0,x.jsx)(f.Z,{onClick:function(){return c("/product/".concat(e.id))}},"detail")],children:[(0,x.jsx)(m,{title:(0,x.jsx)(h.rU,{to:"".concat(g.lx,"/").concat(e.id),children:(0,x.jsx)("strong",{children:e.title})})}),(0,x.jsx)(m,{title:"".concat(e.price,"$")})]})})},Z=n(4192),v=n(9434),C=n(7375);var k=function(t){var e=t.products,n=t.loading,u=t.currentPage,l=t.setCurrentPage,d=t.total,f=t.isCategory,m=(0,p.s0)(),k=(0,h.lr)(),w=(0,r.Z)(k,2),S=w[0],y=(w[1],(0,v.I0)()),P=(0,v.I0)();(0,o.useEffect)((function(){var t,e=S.get("page");t=e?parseInt(e):1,l(t),P((0,C.AW)())}),[]);var N=function(t){c.ZP.success("Added to cart"),y((0,Z.Xq)(t))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a.Z,{gutter:[16,16],className:"min-height",children:e.map((function(t){return(0,x.jsx)(s.Z,{className:"gutter-row",lg:6,md:8,sm:8,xs:12,children:(0,x.jsx)(j,{addToCartStore:N,loading:n,item:t})},t.id)}))}),(0,x.jsx)("div",{className:"horizontal-center pagination heading",children:(0,x.jsx)(i.Z,{showTotal:function(t){return"Total ".concat(t," products")},defaultPageSize:10,onChange:function(t,e){if(l(t),f)return m({pathname:"".concat(g.yo,"/").concat(f),search:"?page=".concat(t)});m({pathname:g.a0,search:"?page=".concat(t)})},current:u,total:d})})]})}},7058:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(4165),c=n(5861),a=n(9439),s=n(2791),i=n(7788),o=n(1246),u=n(6871),l=n(184),d=i.Z.Title;function f(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],i=e[1],f=(0,s.useState)(0),p=(0,a.Z)(f,2),h=p[0],g=p[1],x=(0,s.useState)(!1),m=(0,a.Z)(x,2),j=m[0],Z=m[1],v=(0,s.useState)(1),C=(0,a.Z)(v,2),k=C[0],w=C[1],S=(0,u.UO)().id,y=(0,s.useState)({}),P=(0,a.Z)(y,2),N=P[0],T=P[1],z=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n,c,a,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 10,Z(!0),t.next=4,fetch("https://api.escuelajs.co/api/v1/categories/".concat(S,"/products?offset=").concat(10*(e-1),"&limit=").concat(10));case 4:return n=t.sent,t.next=7,n.json();case 7:return c=t.sent,t.next=10,fetch("https://api.escuelajs.co/api/v1/categories/".concat(S,"/products"));case 10:return a=t.sent,t.next=13,a.json();case 13:s=t.sent,Z(!1),g(s.length),i(c);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var e,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.escuelajs.co/api/v1/categories/".concat(S));case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,T(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,s.useEffect)((function(){E()}),[S]),(0,s.useEffect)((function(){z(k)}),[k,S]),(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"horizontal-center heading",children:(0,l.jsxs)(d,{children:["Category: ",N&&N.name]})}),(0,l.jsx)(o.Z,{products:n,loading:j,setCurrentPage:function(t){return w(t)},total:h,currentPage:k,isCategory:S})]})}}}]);
//# sourceMappingURL=58.14dd4bee.chunk.js.map