(this.webpackJsonpinitial=this.webpackJsonpinitial||[]).push([[0],[,,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(10),a=n.n(r),o=(n(16),n(3)),l=n(2),s=n(4),u=n(7),d=n(11),h=(n(17),n(18),n(9),n(19),n(0)),f=function(e){var t=e.children,n=e.classNames;return Object(h.jsx)("div",{className:n,children:t})},j=(n(21),function(){function e(){var e=window.innerWidth,t=window.innerHeight,n=document.getElementById("canvas"),c=n.getContext("2d"),i=150,r=[],a=["DodgerBlue","OliveDrab","Gold","Pink","SlateBlue","LightBlue","Gold","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"];function o(){var n,r;this.x=Math.random()*e,this.y=Math.random()*t-t,this.r=(n=11,r=33,Math.floor(Math.random()*(r-n+1)+n)),this.d=Math.random()*i+11,this.color=a[Math.floor(Math.random()*a.length)],this.tilt=Math.floor(33*Math.random())-11,this.tiltAngleIncremental=.07*Math.random()+.05,this.tiltAngle=0,this.draw=function(){return c.beginPath(),c.lineWidth=this.r/2,c.strokeStyle=this.color,c.moveTo(this.x+this.tilt+this.r/3,this.y),c.lineTo(this.x+this.tilt,this.y+this.tilt+this.r/5),c.stroke()}}window.addEventListener("resize",(function(){e=window.innerWidth,t=window.innerHeight,n.width=window.innerWidth,n.height=window.innerHeight}),!1);for(var l=0;l<i;l++)r.push(new o);n.width=e,n.height=t,function n(){var a=[];requestAnimationFrame(n),c.clearRect(0,0,e,window.innerHeight);for(var o=0;o<i;o++)a.push(r[o].draw());for(var l={},s=0;s<i;s++)(l=r[s]).tiltAngle+=l.tiltAngleIncremental,l.y+=(Math.cos(l.d)+3+l.r/2)/2,l.tilt=15*Math.sin(l.tiltAngle-s/3),l.y<=t&&0,(l.x>e+30||l.x<-30||l.y>t)&&(l.x=Math.random()*e,l.y=-30,l.tilt=Math.floor(10*Math.random())-20);return a}()}return Object(c.useEffect)((function(){e()})),Object(h.jsx)("canvas",{id:"canvas"})}),b=function(e){var t=e.children,n=e.onToggle,c=e.isSet;return Object(h.jsx)("div",{onClick:n,className:"tile ".concat(c?"tile--set":""),children:t})},O=function(e){var t=e.children,n=e.reference;return Object(h.jsx)("div",{ref:n,className:"content  fade-in",children:t})},y=function(e){var t=e.onClick,n=e.disabled;return Object(h.jsx)("button",{className:"btn-0",type:"button",disabled:n,onClick:t,children:"Shuffle"})},m=Object(u.a)(Array.from({length:100},(function(e,t){return t}))),p={player1:{checked:{12:!0},won:!1},player2:{checked:{12:!0},won:!1}},v={player1:!0,player2:!0};var x=function(){var e=Object(c.useState)(m),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)({player1:I(m,25),player2:I(m,25)}),a=Object(s.a)(r,2),u=a[0],x=a[1],g=Object(c.useState)(p),w=Object(s.a)(g,2),k=w[0],M=w[1],N=Object(c.useState)(),S=Object(s.a)(N,2),C=S[0],A=S[1],B=Object(c.useState)(v),E=Object(s.a)(B,2),T=E[0],L=E[1],H=Object(c.useRef)(null);function I(e,t){return Object(d.a)(e.slice(0,t))}function W(e,t){var n=Object(l.a)(Object(l.a)({},k[t].checked),{},Object(o.a)({},e,!k[t].checked[e])),c=function(e){var t=[0,1,2,3,4];return void 0!==t.find((function(n){return t.every((function(t){return e[5*n+t]}))}))||void 0!==t.find((function(n){return t.every((function(t){return e[5*t+n]}))}))||t.every((function(t){return e[5*t+t]}))||t.every((function(t){return e[5*t+4-t]}))}(n);M(Object(l.a)(Object(l.a)({},k),{},Object(o.a)({},t,{checked:n,won:c})))}var G=function(e){"player1"===e&&(x((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},e,I(m,25)))})),M((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},e,{checked:{12:!0},won:!1}))}))),"player2"===e&&(x((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},e,I(m,25)))})),M((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},e,{checked:{12:!0},won:!1}))}))),L((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},e,!0))}))};return Object(c.useEffect)((function(){var e;A((e=n)[Math.floor(Math.random()*e.length)])}),[n]),Object(c.useEffect)((function(){if(T.player1||T.player2){var e={player1:!1,player2:!1};setTimeout((function(){L(e)}),2e3)}}),[T]),Object(c.useEffect)((function(){setTimeout((function(){H.current.classList.remove("fade-in")}),1e3)}),[C]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Bingo game"}),Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)(f,{classNames:"box-1",children:Object(h.jsx)(O,{reference:H,children:C})}),Object(h.jsx)("button",{id:"getNextNum-btn",className:"btn-1",onClick:function(){!1===H.current.classList.contains("fade-in")&&(H.current.classList.add("fade-in"),i((function(e){return e.filter((function(e){return e!==C}))})))},children:"Next number"})]}),Object(h.jsxs)("div",{id:"board",children:[Object(h.jsx)("div",{className:"grid",id:"player-1",children:u.player1.map((function(e,t){return 12===t?Object(h.jsx)(y,{disabled:T.player1,onClick:function(){return G("player1")}},"shuffle-btn"):Object(h.jsx)(f,{classNames:"box-0 ".concat(T.player1&&"flip-animation"),children:Object(h.jsx)(b,{isSet:!!k.player1.checked[t],onToggle:function(e){return W(t,"player1")},children:e})},e)}))}),Object(h.jsx)("div",{className:"grid",id:"player-2",children:u.player2.map((function(e,t){return 12===t?Object(h.jsx)(y,{disabled:T.player2,onClick:function(){return G("player2")}},"shuffle-btn"):Object(h.jsx)(f,{classNames:"box-0 ".concat(T.player2&&"flip-animation"),children:Object(h.jsx)(b,{isSet:!!k.player2.checked[t],onToggle:function(e){return W(t,"player2")},children:e})},e)}))})]}),k.player1.won||k.player2.won?Object(h.jsx)(j,{}):null]})};a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.3b99537e.chunk.js.map