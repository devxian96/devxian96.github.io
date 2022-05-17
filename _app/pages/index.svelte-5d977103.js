import{S as U,i as O,s as G,e as d,c as g,a as V,d as a,b as k,g as p,G as P,H as Y,I as J,r as S,p as R,F as K,k as F,m as T,J as D,o as lt,q as st,R as pt,M as ht,T as gt,x as C,y as N,z as A,C as y,P as ft,t as E,h as I,j as bt,n as M,w as dt,U as vt,K as wt}from"../chunks/index-e8f8a4fd.js";import{c as L,p as W,a as nt,m as kt,R as x,C as Et,B as It,g as St,s as Rt}from"../chunks/Breadcrumbs-e74a1c3d.js";import"../chunks/singletons-d1fb5791.js";const Bt=i=>({}),it=i=>({}),Dt=i=>({}),ot=i=>({});function at(i){let t,l;const e=i[7].title,s=K(e,i,i[6],ot);return{c(){t=d("div"),s&&s.c(),this.h()},l(r){t=g(r,"DIV",{class:!0});var n=V(t);s&&s.l(n),n.forEach(a),this.h()},h(){k(t,"class",i[1])},m(r,n){p(r,t,n),s&&s.m(t,null),l=!0},p(r,n){s&&s.p&&(!l||n&64)&&P(s,e,r,r[6],l?J(e,r[6],n,Dt):Y(r[6]),ot)},i(r){l||(S(s,r),l=!0)},o(r){R(s,r),l=!1},d(r){r&&a(t),s&&s.d(r)}}}function ut(i){let t,l;const e=i[7].action,s=K(e,i,i[6],it);return{c(){t=d("div"),s&&s.c(),this.h()},l(r){t=g(r,"DIV",{class:!0});var n=V(t);s&&s.l(n),n.forEach(a),this.h()},h(){k(t,"class",i[3])},m(r,n){p(r,t,n),s&&s.m(t,null),l=!0},p(r,n){s&&s.p&&(!l||n&64)&&P(s,e,r,r[6],l?J(e,r[6],n,Bt):Y(r[6]),it)},i(r){l||(S(s,r),l=!0)},o(r){R(s,r),l=!1},d(r){r&&a(t),s&&s.d(r)}}}function Vt(i){let t,l,e,s,r,n=i[4].title&&at(i);const f=i[7].default,o=K(f,i,i[6],null);let u=i[4].action&&ut(i);return{c(){t=d("section"),n&&n.c(),l=F(),e=d("div"),o&&o.c(),s=F(),u&&u.c(),this.h()},l(_){t=g(_,"SECTION",{class:!0});var m=V(t);n&&n.l(m),l=T(m),e=g(m,"DIV",{class:!0});var v=V(e);o&&o.l(v),s=T(v),u&&u.l(v),v.forEach(a),m.forEach(a),this.h()},h(){k(e,"class",i[2]),k(t,"class",i[0])},m(_,m){p(_,t,m),n&&n.m(t,null),D(t,l),D(t,e),o&&o.m(e,null),D(e,s),u&&u.m(e,null),r=!0},p(_,[m]){_[4].title?n?(n.p(_,m),m&16&&S(n,1)):(n=at(_),n.c(),S(n,1),n.m(t,l)):n&&(lt(),R(n,1,1,()=>{n=null}),st()),o&&o.p&&(!r||m&64)&&P(o,f,_,_[6],r?J(f,_[6],m,null):Y(_[6]),null),_[4].action?u?(u.p(_,m),m&16&&S(u,1)):(u=ut(_),u.c(),S(u,1),u.m(e,null)):u&&(lt(),R(u,1,1,()=>{u=null}),st())},i(_){r||(S(n),S(o,_),S(u),r=!0)},o(_){R(n),R(o,_),R(u),r=!1},d(_){_&&a(t),n&&n.d(),o&&o.d(_),u&&u.d()}}}function zt(i,t,l){let{$$slots:e={},$$scope:s}=t;const r=pt(e);let{flat:n=!1}=t;const f=L`
		border-radius: 10px;
		background-color: ${n?W:nt};
		color: white;
		padding: 0.5rem;
		box-shadow: ${!n&&"-10px 50px 100px -70px black;"};
	`,o=L`
		padding: 2rem;
		font-size: 20px;
		font-weight: 600;
		line-height: 1.4;
	`,u=L`
		padding: 2rem;
		border-radius: 10px;
		color: smoke;
		background-color: ${nt};
		font-size: 22px;
		font-weight: 300;
		line-height: 1.5;
	`,_=L`
		margin-top: 1.5rem;
	`;return i.$$set=m=>{"flat"in m&&l(5,n=m.flat),"$$scope"in m&&l(6,s=m.$$scope)},[f,o,u,_,r,n,s,e]}class X extends U{constructor(t){super(),O(this,t,zt,Vt,G,{flat:5})}}function Ct(i){let t,l,e,s;const r=i[4].default,n=K(r,i,i[3],null);return{c(){t=d("button"),n&&n.c(),this.h()},l(f){t=g(f,"BUTTON",{class:!0});var o=V(t);n&&n.l(o),o.forEach(a),this.h()},h(){k(t,"class",i[0])},m(f,o){p(f,t,o),n&&n.m(t,null),l=!0,e||(s=ht(t,"click",i[5]),e=!0)},p(f,[o]){n&&n.p&&(!l||o&8)&&P(n,r,f,f[3],l?J(r,f[3],o,null):Y(f[3]),null)},i(f){l||(S(n,f),l=!0)},o(f){R(n,f),l=!1},d(f){f&&a(t),n&&n.d(f),e=!1,s()}}}function Nt(i,t,l){let{$$slots:e={},$$scope:s}=t,{color:r="white"}=t,{background:n=kt}=t;const f=L`
		position: relative;
		max-width: 100%;
		width: 100%;
		padding: 25px;
		border-radius: 10px;
		border: none;
		background-color: ${n};
		color: ${r};
		font-size: 15px;
		font-weight: 600;
		line-height: 20px;
		&:hover {
			opacity: 0.85;
			cursor: pointer;
		}
	`;function o(u){gt.call(this,i,u)}return i.$$set=u=>{"color"in u&&l(1,r=u.color),"background"in u&&l(2,n=u.background),"$$scope"in u&&l(3,s=u.$$scope)},[f,r,n,s,e,o]}class Z extends U{constructor(t){super(),O(this,t,Nt,Ct,G,{color:1,background:2})}}function At(i){let t,l,e;const s=i[4].default,r=K(s,i,i[3],null);return{c(){t=d("div"),r&&r.c(),this.h()},l(n){t=g(n,"DIV",{class:!0});var f=V(t);r&&r.l(f),f.forEach(a),this.h()},h(){k(t,"class",l=i[1]+(" "+i[0]))},m(n,f){p(n,t,f),r&&r.m(t,null),e=!0},p(n,[f]){r&&r.p&&(!e||f&8)&&P(r,s,n,n[3],e?J(s,n[3],f,null):Y(n[3]),null),(!e||f&1&&l!==(l=n[1]+(" "+n[0])))&&k(t,"class",l)},i(n){e||(S(r,n),e=!0)},o(n){R(r,n),e=!1},d(n){n&&a(t),r&&r.d(n)}}}function yt(i,t,l){let{$$slots:e={},$$scope:s}=t,{className:r=""}=t,{width:n="100%"}=t;const f=L`
		max-width: ${n};
		flex-grow: 1;
		flex-basis: 300px;
	`;return i.$$set=o=>{"className"in o&&l(0,r=o.className),"width"in o&&l(2,n=o.width),"$$scope"in o&&l(3,s=o.$$scope)},[r,f,n,s,e]}class q extends U{constructor(t){super(),O(this,t,yt,At,G,{className:0,width:2})}}function ct(i){let t,l;return t=new q({props:{width:"40%",$$slots:{default:[Ht]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,s){A(t,e,s),l=!0},p(e,s){const r={};s&8192&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){l||(S(t.$$.fragment,e),l=!0)},o(e){R(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function Ht(i){let t,l;const e=i[12].default,s=K(e,i,i[13],null);return{c(){t=d("div"),s&&s.c(),this.h()},l(r){t=g(r,"DIV",{class:!0});var n=V(t);s&&s.l(n),n.forEach(a),this.h()},h(){k(t,"class",i[8])},m(r,n){p(r,t,n),s&&s.m(t,null),l=!0},p(r,n){s&&s.p&&(!l||n&8192)&&P(s,e,r,r[13],l?J(e,r[13],n,null):Y(r[13]),null)},i(r){l||(S(s,r),l=!0)},o(r){R(s,r),l=!1},d(r){r&&a(t),s&&s.d(r)}}}function Ft(i){let t,l,e;return{c(){t=d("img"),this.h()},l(s){t=g(s,"IMG",{class:!0,loading:!0,src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){k(t,"class",i[6]),k(t,"loading",l=i[4]?"lazy":"auto"),ft(t.src,e=i[2])||k(t,"src",e),k(t,"alt",i[3]),k(t,"width",i[0]),k(t,"height",i[1])},m(s,r){p(s,t,r)},p(s,r){r&16&&l!==(l=s[4]?"lazy":"auto")&&k(t,"loading",l),r&4&&!ft(t.src,e=s[2])&&k(t,"src",e),r&8&&k(t,"alt",s[3]),r&1&&k(t,"width",s[0]),r&2&&k(t,"height",s[1])},d(s){s&&a(t)}}}function Tt(i){let t,l,e,s,r,n=i[10].default&&ct(i);return e=new q({props:{className:i[9],$$slots:{default:[Ft]},$$scope:{ctx:i}}}),{c(){t=d("div"),n&&n.c(),l=F(),C(e.$$.fragment),this.h()},l(f){t=g(f,"DIV",{class:!0});var o=V(t);n&&n.l(o),l=T(o),N(e.$$.fragment,o),o.forEach(a),this.h()},h(){k(t,"class",s=i[7]+(" "+i[5]))},m(f,o){p(f,t,o),n&&n.m(t,null),D(t,l),A(e,t,null),r=!0},p(f,[o]){f[10].default?n?(n.p(f,o),o&1024&&S(n,1)):(n=ct(f),n.c(),S(n,1),n.m(t,l)):n&&(lt(),R(n,1,1,()=>{n=null}),st());const u={};o&8223&&(u.$$scope={dirty:o,ctx:f}),e.$set(u),(!r||o&32&&s!==(s=f[7]+(" "+f[5])))&&k(t,"class",s)},i(f){r||(S(n),S(e.$$.fragment,f),r=!0)},o(f){R(n),R(e.$$.fragment,f),r=!1},d(f){f&&a(t),n&&n.d(),y(e)}}}function Lt(i,t,l){let{$$slots:e={},$$scope:s}=t;const r=pt(e);let{width:n="100%"}=t,{height:f="auto"}=t,{src:o}=t,{alt:u=""}=t,{lazy:_=!1}=t,{backgroundColor:m=W}=t,{className:v=""}=t;const b=L`
		border-radius: 10px;
		margin: auto;
	`,w=L`
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: ${f};
		border-radius: 10px;
		background-color: ${m};
	`,$=L`
		padding: 2rem;
		display: flex;
		flex-direction: column;
		height: calc(${f} - 4rem);
		justify-content: center;
		color: white;
		gap: 1rem;

		h1 {
			font-size: 28px;
			font-weight: 700;
			line-height: 1.3;
			margin-bottom: 30px;
			color: ${W};
		}

		div {
			font-size: 50px;
			font-weight: 700;
			line-height: 1.4;
		}

		small {
			font-size: 22px;
			font-weight: 300;
			line-height: 1.5;
			color: smoke;
		}
	`,h=L`
		text-align: center;
	`;return i.$$set=c=>{"width"in c&&l(0,n=c.width),"height"in c&&l(1,f=c.height),"src"in c&&l(2,o=c.src),"alt"in c&&l(3,u=c.alt),"lazy"in c&&l(4,_=c.lazy),"backgroundColor"in c&&l(11,m=c.backgroundColor),"className"in c&&l(5,v=c.className),"$$scope"in c&&l(13,s=c.$$scope)},[n,f,o,u,_,v,b,w,$,h,r,m,e,s]}class tt extends U{constructor(t){super(),O(this,t,Lt,Tt,G,{width:0,height:1,src:2,alt:3,lazy:4,backgroundColor:11,className:5})}}function jt(i){let t,l;return{c(){t=d("div"),l=E(i[0]),this.h()},l(e){t=g(e,"DIV",{class:!0});var s=V(t);l=I(s,i[0]),s.forEach(a),this.h()},h(){k(t,"class",i[1])},m(e,s){p(e,t,s),D(t,l)},p(e,[s]){s&1&&bt(l,e[0])},i:M,o:M,d(e){e&&a(t)}}}function Mt(i,t,l){let{count:e=10}=t,{color:s="white"}=t,r=0;const n=L`
		color: ${s};
		font-size: 2rem;
		font-weight: bold;
		padding-left: 6px;
		padding-right: 6px;
	`;return dt(()=>{const f=setInterval(()=>{l(0,r+=1),r===e&&clearInterval(f)},100)}),i.$$set=f=>{"count"in f&&l(2,e=f.count),"color"in f&&l(3,s=f.color)},[r,n,e,s]}class $t extends U{constructor(t){super(),O(this,t,Mt,jt,G,{count:2,color:3})}}function mt(i,t,l){const e=i.slice();return e[14]=t[l],e[16]=l,e}function _t(i){let t,l,e,s,r;function n(){return i[11](i[16])}return{c(){t=d("button"),this.h()},l(f){t=g(f,"BUTTON",{class:!0,type:!0,"aria-label":!0}),V(t).forEach(a),this.h()},h(){k(t,"class",l=i[0](i[16]+1)),k(t,"type","button"),k(t,"aria-label",e=i[16]+1+" \uC2AC\uB77C\uC774\uB4DC")},m(f,o){p(f,t,o),s||(r=ht(t,"click",n),s=!0)},p(f,o){i=f,o&1&&l!==(l=i[0](i[16]+1))&&k(t,"class",l)},d(f){f&&a(t),s=!1,r()}}}function qt(i){let t,l,e,s,r,n;const f=i[10].default,o=K(f,i,i[12],null);let u=new Array(et),_=[];for(let m=0;m<u.length;m+=1)_[m]=_t(mt(i,u,m));return{c(){t=d("div"),o&&o.c(),l=F(),e=d("div");for(let m=0;m<_.length;m+=1)_[m].c();s=F(),r=d("div"),this.h()},l(m){t=g(m,"DIV",{class:!0,style:!0});var v=V(t);o&&o.l(v),v.forEach(a),l=T(m),e=g(m,"DIV",{class:!0});var b=V(e);for(let w=0;w<_.length;w+=1)_[w].l(b);b.forEach(a),s=T(m),r=g(m,"DIV",{class:!0}),V(r).forEach(a),this.h()},h(){k(t,"class",i[4]),k(t,"style",i[1]),k(e,"class",i[5]),k(r,"class",i[3])},m(m,v){p(m,t,v),o&&o.m(t,null),p(m,l,v),p(m,e,v);for(let b=0;b<_.length;b+=1)_[b].m(e,null);p(m,s,v),p(m,r,v),n=!0},p(m,v){if(o&&o.p&&(!n||v&4096)&&P(o,f,m,m[12],n?J(f,m[12],v,null):Y(m[12]),null),(!n||v&2)&&k(t,"style",m[1]),v&65){u=new Array(et);let b;for(b=0;b<u.length;b+=1){const w=mt(m,u,b);_[b]?_[b].p(w,v):(_[b]=_t(w),_[b].c(),_[b].m(e,null))}for(;b<_.length;b+=1)_[b].d(1);_.length=u.length}},i(m){n||(S(o,m),n=!0)},o(m){R(o,m),n=!1},d(m){m&&a(t),o&&o.d(m),m&&a(l),m&&a(e),vt(_,m),m&&a(s),m&&a(r)}}}function Ut(i){let t,l;return t=new x({props:{className:i[2],$$slots:{default:[qt]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,s){A(t,e,s),l=!0},p(e,[s]){const r={};s&4099&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){l||(S(t.$$.fragment,e),l=!0)},o(e){R(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}let et=3;function Ot(i,t,l){let e,s,{$$slots:r={},$$scope:n}=t,{height:f="400px"}=t,o=1,u=0;const _=L`
		position: relative;
		overflow: hidden;
		height: calc(${f} + 20px);
		padding: 0;
		border-radius: 10px;
	`,m=L`
		position: absolute;
		bottom: 0px;
		border-radius: 0 0 10px 10px;
		transform: translate(2%, 0);
		width: 96%;
		height: 20px;
		background-color: tomato;
	`,v=L`
		display: -webkit-inline-box;
		width: 100%;
		position: absolute;
		top: 0;
	`,b=L`
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		right: 0;

		button {
			width: 12px;
			height: 12px;
			background-color: rgba(255, 255, 255, 0.2);
			border: none;
			border-radius: 50%;
			margin: 12px;
			cursor: pointer;
		}
		.active {
			background-color: white;
		}
	`,w=async()=>{const c=setInterval(()=>{u<o*100?l(9,u+=1):u>o*100?l(9,u-=1):o>=et-1?(l(8,o=0),clearInterval(c)):(l(8,o+=1),clearInterval(c))},5)},$=c=>{o!==c&&(l(8,o=c-1),w())};dt(()=>{const c=setInterval(()=>{requestAnimationFrame(w)},12e3);return()=>clearInterval(c)});const h=c=>$(c+1);return i.$$set=c=>{"height"in c&&l(7,f=c.height),"$$scope"in c&&l(12,n=c.$$scope)},i.$$.update=()=>{i.$$.dirty&512&&l(1,e=`left: -${u}%`),i.$$.dirty&256&&l(0,s=c=>{if(o===c)return"active";if(o===0&&c===et)return"active"})},[s,e,_,m,v,b,$,f,o,u,r,h,n]}class Gt extends U{constructor(t){super(),O(this,t,Ot,Ut,G,{height:7})}}function Pt(i){let t,l;return{c(){t=d("i"),l=E(" \uD648"),this.h()},l(e){t=g(e,"I",{class:!0}),V(t).forEach(a),l=I(e," \uD648"),this.h()},h(){k(t,"class","ri-home-line")},m(e,s){p(e,t,s),p(e,l,s)},p:M,d(e){e&&a(t),e&&a(l)}}}function Yt(i){let t,l;return{c(){t=d("span"),l=E("\uC548\uB155\uD558\uC138\uC694."),this.h()},l(e){t=g(e,"SPAN",{slot:!0});var s=V(t);l=I(s,"\uC548\uB155\uD558\uC138\uC694."),s.forEach(a),this.h()},h(){k(t,"slot","summary")},m(e,s){p(e,t,s),D(t,l)},p:M,d(e){e&&a(t)}}}function Jt(i){let t;return{c(){t=E("\uC800\uC7A5\uC18C\uB85C \uC774\uB3D9\uD558\uAE30")},l(l){t=I(l,"\uC800\uC7A5\uC18C\uB85C \uC774\uB3D9\uD558\uAE30")},m(l,e){p(l,t,e)},d(l){l&&a(t)}}}function Kt(i){let t,l,e,s,r,n,f,o,u,_,m,v,b,w,$,h,c,z;return c=new Z({props:{$$slots:{default:[Jt]},$$scope:{ctx:i}}}),{c(){t=d("h1"),l=E("\uB77C\uC774\uBE0C\uB7EC\uB9AC"),e=F(),s=d("div"),r=E("React\uC5D0\uC11C\uB3C4,"),n=d("br"),f=E("\uAE00\uB85C\uBC8C \uCEF4\uD3EC\uB10C\uD2B8"),o=F(),u=d("small"),_=E("\uD55C\uBC88\uC758 \uC120\uC5B8\uC73C\uB85C"),m=d("br"),v=E("\uC804\uCCB4 \uC18C\uC2A4\uCF54\uB4DC\uC5D0\uC11C"),b=d("br"),w=E("\uBC14\uB85C\uC0AC\uC6A9"),$=F(),h=d("a"),C(c.$$.fragment),this.h()},l(B){t=g(B,"H1",{});var H=V(t);l=I(H,"\uB77C\uC774\uBE0C\uB7EC\uB9AC"),H.forEach(a),e=T(B),s=g(B,"DIV",{});var j=V(s);r=I(j,"React\uC5D0\uC11C\uB3C4,"),n=g(j,"BR",{}),f=I(j,"\uAE00\uB85C\uBC8C \uCEF4\uD3EC\uB10C\uD2B8"),j.forEach(a),o=T(B),u=g(B,"SMALL",{});var Q=V(u);_=I(Q,"\uD55C\uBC88\uC758 \uC120\uC5B8\uC73C\uB85C"),m=g(Q,"BR",{}),v=I(Q,"\uC804\uCCB4 \uC18C\uC2A4\uCF54\uB4DC\uC5D0\uC11C"),b=g(Q,"BR",{}),w=I(Q,"\uBC14\uB85C\uC0AC\uC6A9"),Q.forEach(a),$=T(B),h=g(B,"A",{href:!0,target:!0});var rt=V(h);N(c.$$.fragment,rt),rt.forEach(a),this.h()},h(){k(h,"href","https://github.com/devxian96/react-global-components"),k(h,"target","_blank")},m(B,H){p(B,t,H),D(t,l),p(B,e,H),p(B,s,H),D(s,r),D(s,n),D(s,f),p(B,o,H),p(B,u,H),D(u,_),D(u,m),D(u,v),D(u,b),D(u,w),p(B,$,H),p(B,h,H),A(c,h,null),z=!0},p(B,H){const j={};H&16&&(j.$$scope={dirty:H,ctx:B}),c.$set(j)},i(B){z||(S(c.$$.fragment,B),z=!0)},o(B){R(c.$$.fragment,B),z=!1},d(B){B&&a(t),B&&a(e),B&&a(s),B&&a(o),B&&a(u),B&&a($),B&&a(h),y(c)}}}function Qt(i){let t;return{c(){t=E("\uC800\uC7A5\uC18C\uB85C \uC774\uB3D9\uD558\uAE30")},l(l){t=I(l,"\uC800\uC7A5\uC18C\uB85C \uC774\uB3D9\uD558\uAE30")},m(l,e){p(l,t,e)},d(l){l&&a(t)}}}function Wt(i){let t,l,e,s,r,n,f,o,u,_,m,v,b,w,$,h;return $=new Z({props:{$$slots:{default:[Qt]},$$scope:{ctx:i}}}),{c(){t=d("h1"),l=E("\uD504\uB808\uC784\uC6CC\uD06C"),e=F(),s=d("div"),r=E("Express\uB97C php\uC5D0\uC11C"),n=F(),f=d("small"),o=E("\uAC19\uC740 \uAC1C\uBC1C \uACBD\uD5D8"),u=d("br"),_=E("\uC124\uBA85\uC774 \uD544\uC694 \uC5C6\uB294"),m=d("br"),v=E("\uC9C1\uAD00\uC801\uC778 \uCF54\uB4DC"),b=F(),w=d("a"),C($.$$.fragment),this.h()},l(c){t=g(c,"H1",{});var z=V(t);l=I(z,"\uD504\uB808\uC784\uC6CC\uD06C"),z.forEach(a),e=T(c),s=g(c,"DIV",{});var B=V(s);r=I(B,"Express\uB97C php\uC5D0\uC11C"),B.forEach(a),n=T(c),f=g(c,"SMALL",{});var H=V(f);o=I(H,"\uAC19\uC740 \uAC1C\uBC1C \uACBD\uD5D8"),u=g(H,"BR",{}),_=I(H,"\uC124\uBA85\uC774 \uD544\uC694 \uC5C6\uB294"),m=g(H,"BR",{}),v=I(H,"\uC9C1\uAD00\uC801\uC778 \uCF54\uB4DC"),H.forEach(a),b=T(c),w=g(c,"A",{href:!0,target:!0});var j=V(w);N($.$$.fragment,j),j.forEach(a),this.h()},h(){k(w,"href","https://github.com/devxian96/phpExpress"),k(w,"target","_blank")},m(c,z){p(c,t,z),D(t,l),p(c,e,z),p(c,s,z),D(s,r),p(c,n,z),p(c,f,z),D(f,o),D(f,u),D(f,_),D(f,m),D(f,v),p(c,b,z),p(c,w,z),A($,w,null),h=!0},p(c,z){const B={};z&16&&(B.$$scope={dirty:z,ctx:c}),$.$set(B)},i(c){h||(S($.$$.fragment,c),h=!0)},o(c){R($.$$.fragment,c),h=!1},d(c){c&&a(t),c&&a(e),c&&a(s),c&&a(n),c&&a(f),c&&a(b),c&&a(w),y($)}}}function Xt(i){let t;return{c(){t=E("\uC800\uC7A5\uC18C\uB85C \uC774\uB3D9\uD558\uAE30")},l(l){t=I(l,"\uC800\uC7A5\uC18C\uB85C \uC774\uB3D9\uD558\uAE30")},m(l,e){p(l,t,e)},d(l){l&&a(t)}}}function Zt(i){let t,l,e,s,r,n,f,o,u,_,m,v,b,w,$,h;return $=new Z({props:{$$slots:{default:[Xt]},$$scope:{ctx:i}}}),{c(){t=d("h1"),l=E("\uD504\uB808\uC784\uC6CC\uD06C"),e=F(),s=d("div"),r=E("\uB274\uBAA8\uD53C\uC998 \uB514\uC790\uC778"),n=F(),f=d("small"),o=E("UI \uD2B8\uB79C\uB4DC"),u=d("br"),_=E("\uD50C\uB7AB \uB514\uC790\uC778\uC758 \uB300\uC548"),m=d("br"),v=E("\uBBF8\uB798\uC801\uC778 \uB290\uB08C"),b=F(),w=d("a"),C($.$$.fragment),this.h()},l(c){t=g(c,"H1",{});var z=V(t);l=I(z,"\uD504\uB808\uC784\uC6CC\uD06C"),z.forEach(a),e=T(c),s=g(c,"DIV",{});var B=V(s);r=I(B,"\uB274\uBAA8\uD53C\uC998 \uB514\uC790\uC778"),B.forEach(a),n=T(c),f=g(c,"SMALL",{});var H=V(f);o=I(H,"UI \uD2B8\uB79C\uB4DC"),u=g(H,"BR",{}),_=I(H,"\uD50C\uB7AB \uB514\uC790\uC778\uC758 \uB300\uC548"),m=g(H,"BR",{}),v=I(H,"\uBBF8\uB798\uC801\uC778 \uB290\uB08C"),H.forEach(a),b=T(c),w=g(c,"A",{href:!0,target:!0});var j=V(w);N($.$$.fragment,j),j.forEach(a),this.h()},h(){k(w,"href","https://github.com/neomorphism/neomo"),k(w,"target","_blank")},m(c,z){p(c,t,z),D(t,l),p(c,e,z),p(c,s,z),D(s,r),p(c,n,z),p(c,f,z),D(f,o),D(f,u),D(f,_),D(f,m),D(f,v),p(c,b,z),p(c,w,z),A($,w,null),h=!0},p(c,z){const B={};z&16&&(B.$$scope={dirty:z,ctx:c}),$.$set(B)},i(c){h||(S($.$$.fragment,c),h=!0)},o(c){R($.$$.fragment,c),h=!1},d(c){c&&a(t),c&&a(e),c&&a(s),c&&a(n),c&&a(f),c&&a(b),c&&a(w),y($)}}}function xt(i){let t,l,e,s,r,n;return t=new tt({props:{src:"/img/virus.webp",width:"550px",height:"600px",backgroundColor:"#282c34",lazy:!0,$$slots:{default:[Kt]},$$scope:{ctx:i}}}),e=new tt({props:{src:"/img/phpExpressLogo.webp",width:"550px",height:"600px",backgroundColor:"#333",$$slots:{default:[Wt]},$$scope:{ctx:i}}}),r=new tt({props:{src:"/img/neomo.webp",width:"550px",height:"600px",backgroundColor:Rt,lazy:!0,$$slots:{default:[Zt]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment),l=F(),C(e.$$.fragment),s=F(),C(r.$$.fragment)},l(f){N(t.$$.fragment,f),l=T(f),N(e.$$.fragment,f),s=T(f),N(r.$$.fragment,f)},m(f,o){A(t,f,o),p(f,l,o),A(e,f,o),p(f,s,o),A(r,f,o),n=!0},p(f,o){const u={};o&16&&(u.$$scope={dirty:o,ctx:f}),t.$set(u);const _={};o&16&&(_.$$scope={dirty:o,ctx:f}),e.$set(_);const m={};o&16&&(m.$$scope={dirty:o,ctx:f}),r.$set(m)},i(f){n||(S(t.$$.fragment,f),S(e.$$.fragment,f),S(r.$$.fragment,f),n=!0)},o(f){R(t.$$.fragment,f),R(e.$$.fragment,f),R(r.$$.fragment,f),n=!1},d(f){y(t,f),f&&a(l),y(e,f),f&&a(s),y(r,f)}}}function te(i){let t,l;return t=new Gt({props:{height:"600px",$$slots:{default:[xt]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,s){A(t,e,s),l=!0},p(e,s){const r={};s&16&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){l||(S(t.$$.fragment,e),l=!0)},o(e){R(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function ee(i){let t,l,e,s,r,n,f,o,u,_,m,v,b,w,$;return e=new $t({props:{count:new Date().getFullYear()-2011}}),o=new $t({props:{color:W,count:new Date().getFullYear()-2020}}),m=new tt({props:{src:"/img/mypic.webp",width:"100%",height:"100%"}}),{c(){t=d("div"),l=E("\uAC1C\uBC1C \uACF5\uBD80\uB97C \uC2DC\uC791\uD55C\uC9C0"),C(e.$$.fragment),s=E("\uB144 \uB418\uC5C8\uACE0,"),r=F(),n=d("div"),f=E("\uACF5\uC2DD \uACBD\uB825\uC73C\uB85C\uB294"),C(o.$$.fragment),u=E(`\uB144
					\uCC28\uC5D0\uC694.`),_=F(),C(m.$$.fragment),v=E(`

				\uD55C\uB9BC\uB300\uD559\uAD50 \uBE45\uB370\uC774\uD130\uD559\uACFC`),b=d("br"),w=E(`
				\uC5EC\uC8FC\uB300\uD559\uAD50 \uCEF4\uD4E8\uD130 \uC815\uBCF4\uACFC`),this.h()},l(h){t=g(h,"DIV",{class:!0});var c=V(t);l=I(c,"\uAC1C\uBC1C \uACF5\uBD80\uB97C \uC2DC\uC791\uD55C\uC9C0"),N(e.$$.fragment,c),s=I(c,"\uB144 \uB418\uC5C8\uACE0,"),c.forEach(a),r=T(h),n=g(h,"DIV",{class:!0});var z=V(n);f=I(z,"\uACF5\uC2DD \uACBD\uB825\uC73C\uB85C\uB294"),N(o.$$.fragment,z),u=I(z,`\uB144
					\uCC28\uC5D0\uC694.`),z.forEach(a),_=T(h),N(m.$$.fragment,h),v=I(h,`

				\uD55C\uB9BC\uB300\uD559\uAD50 \uBE45\uB370\uC774\uD130\uD559\uACFC`),b=g(h,"BR",{}),w=I(h,`
				\uC5EC\uC8FC\uB300\uD559\uAD50 \uCEF4\uD4E8\uD130 \uC815\uBCF4\uACFC`),this.h()},h(){k(t,"class",i[0]),k(n,"class",i[0])},m(h,c){p(h,t,c),D(t,l),A(e,t,null),D(t,s),p(h,r,c),p(h,n,c),D(n,f),A(o,n,null),D(n,u),p(h,_,c),A(m,h,c),p(h,v,c),p(h,b,c),p(h,w,c),$=!0},p:M,i(h){$||(S(e.$$.fragment,h),S(o.$$.fragment,h),S(m.$$.fragment,h),$=!0)},o(h){R(e.$$.fragment,h),R(o.$$.fragment,h),R(m.$$.fragment,h),$=!1},d(h){h&&a(t),y(e),h&&a(r),h&&a(n),y(o),h&&a(_),y(m,h),h&&a(v),h&&a(b),h&&a(w)}}}function le(i){let t,l;return{c(){t=d("h5"),l=E("\uC7A5\uC11D\uD604 [Full-Stack]"),this.h()},l(e){t=g(e,"H5",{slot:!0});var s=V(t);l=I(s,"\uC7A5\uC11D\uD604 [Full-Stack]"),s.forEach(a),this.h()},h(){k(t,"slot","title")},m(e,s){p(e,t,s),D(t,l)},p:M,d(e){e&&a(t)}}}function se(i){let t,l;return t=new X({props:{flat:!0,$$slots:{title:[le],default:[ee]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,s){A(t,e,s),l=!0},p(e,s){const r={};s&16&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){l||(S(t.$$.fragment,e),l=!0)},o(e){R(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function re(i){let t,l,e,s,r,n,f,o,u,_,m,v,b,w;return{c(){t=d("div"),l=d("i"),e=E(`
				React, Vue, Angluar, Svelte, Solidjs`),s=d("br"),r=E(`
				\uAC19\uC740 Front-End \uD504\uB808\uC784\uC6CC\uD06C\uB97C`),n=d("br"),f=E(`
				\uAC1C\uBC1C\uD574 \uBCF4\uACE0 \uC2F6\uC5B4\uC694.`),o=d("br"),u=d("br"),_=E(`
				\uB9CE\uC740 \uC0AC\uB78C\uB4E4\uC774 \uC81C\uAC00 \uAC1C\uBC1C\uD55C`),m=d("br"),v=E(`
				\uB77C\uC774\uBE0C\uB7EC\uB9AC\uB098 \uD504\uB808\uC784\uC6CC\uD06C, \uC81C\uD488\uC744`),b=d("br"),w=E(`
				\uC0AC\uC6A9\uD558\uC5EC \uC88B\uC740 \uACBD\uD5D8\uC744 \uD588\uC73C\uBA74 \uC88B\uACA0\uC5B4\uC694.`),this.h()},l($){t=g($,"DIV",{class:!0});var h=V(t);l=g(h,"I",{class:!0}),V(l).forEach(a),h.forEach(a),e=I($,`
				React, Vue, Angluar, Svelte, Solidjs`),s=g($,"BR",{}),r=I($,`
				\uAC19\uC740 Front-End \uD504\uB808\uC784\uC6CC\uD06C\uB97C`),n=g($,"BR",{}),f=I($,`
				\uAC1C\uBC1C\uD574 \uBCF4\uACE0 \uC2F6\uC5B4\uC694.`),o=g($,"BR",{}),u=g($,"BR",{}),_=I($,`
				\uB9CE\uC740 \uC0AC\uB78C\uB4E4\uC774 \uC81C\uAC00 \uAC1C\uBC1C\uD55C`),m=g($,"BR",{}),v=I($,`
				\uB77C\uC774\uBE0C\uB7EC\uB9AC\uB098 \uD504\uB808\uC784\uC6CC\uD06C, \uC81C\uD488\uC744`),b=g($,"BR",{}),w=I($,`
				\uC0AC\uC6A9\uD558\uC5EC \uC88B\uC740 \uACBD\uD5D8\uC744 \uD588\uC73C\uBA74 \uC88B\uACA0\uC5B4\uC694.`),this.h()},h(){k(l,"class","ri-pushpin-line"),k(t,"class",i[1])},m($,h){p($,t,h),D(t,l),p($,e,h),p($,s,h),p($,r,h),p($,n,h),p($,f,h),p($,o,h),p($,u,h),p($,_,h),p($,m,h),p($,v,h),p($,b,h),p($,w,h)},p:M,d($){$&&a(t),$&&a(e),$&&a(s),$&&a(r),$&&a(n),$&&a(f),$&&a(o),$&&a(u),$&&a(_),$&&a(m),$&&a(v),$&&a(b),$&&a(w)}}}function fe(i){let t,l;return{c(){t=d("h5"),l=E("\uBAA9\uD45C"),this.h()},l(e){t=g(e,"H5",{slot:!0});var s=V(t);l=I(s,"\uBAA9\uD45C"),s.forEach(a),this.h()},h(){k(t,"slot","title")},m(e,s){p(e,t,s),D(t,l)},p:M,d(e){e&&a(t)}}}function ne(i){let t,l;return t=new X({props:{$$slots:{title:[fe],default:[re]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,s){A(t,e,s),l=!0},p(e,s){const r={};s&16&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){l||(S(t.$$.fragment,e),l=!0)},o(e){R(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function ie(i){let t,l,e,s,r,n,f,o,u,_,m,v,b,w;return{c(){t=d("div"),l=d("i"),e=E(`
				\uC0C8\uB85C\uC6B4 \uAE30\uC220\uC744 \uD559\uC2B5\uD558\uB294 \uAC83\uC744 \uC88B\uC544\uD574\uC694.`),s=d("br"),r=E(`
				\uCD5C\uADFC\uC5D0\uB294 Solidjs\uC5D0 \uAD00\uC2EC\uC774 \uC788\uC5B4\uC694.`),n=d("br"),f=d("br"),o=E(`
				\uC11C\uBE44\uC2A4 \uC6B4\uC601\uACFC \uC774\uC288 \uCC98\uB9AC\uB97C \uD558\uBA70 \uC5BB\uB294`),u=d("br"),_=E(`
				\uACBD\uD5D8\uC744 \uACF5\uC720\uD558\uACE0 \uBC30\uC6B0\uAE30\uB3C4 \uD574\uC694.`),m=d("br"),v=E(`
				\uAE30\uD68D\uC790, \uB514\uC790\uC774\uB108, \uB9C8\uCF00\uD130\uC640 \uB300\uD654\uD558\uACE0`),b=d("br"),w=E(`
				\uC0C8\uB85C\uC6B4 \uC2DC\uAC01\uC744 \uC54C\uC544\uAC00\uB294 \uAC83\uB3C4 \uC88B\uC544\uD574\uC694.`),this.h()},l($){t=g($,"DIV",{class:!0});var h=V(t);l=g(h,"I",{class:!0}),V(l).forEach(a),h.forEach(a),e=I($,`
				\uC0C8\uB85C\uC6B4 \uAE30\uC220\uC744 \uD559\uC2B5\uD558\uB294 \uAC83\uC744 \uC88B\uC544\uD574\uC694.`),s=g($,"BR",{}),r=I($,`
				\uCD5C\uADFC\uC5D0\uB294 Solidjs\uC5D0 \uAD00\uC2EC\uC774 \uC788\uC5B4\uC694.`),n=g($,"BR",{}),f=g($,"BR",{}),o=I($,`
				\uC11C\uBE44\uC2A4 \uC6B4\uC601\uACFC \uC774\uC288 \uCC98\uB9AC\uB97C \uD558\uBA70 \uC5BB\uB294`),u=g($,"BR",{}),_=I($,`
				\uACBD\uD5D8\uC744 \uACF5\uC720\uD558\uACE0 \uBC30\uC6B0\uAE30\uB3C4 \uD574\uC694.`),m=g($,"BR",{}),v=I($,`
				\uAE30\uD68D\uC790, \uB514\uC790\uC774\uB108, \uB9C8\uCF00\uD130\uC640 \uB300\uD654\uD558\uACE0`),b=g($,"BR",{}),w=I($,`
				\uC0C8\uB85C\uC6B4 \uC2DC\uAC01\uC744 \uC54C\uC544\uAC00\uB294 \uAC83\uB3C4 \uC88B\uC544\uD574\uC694.`),this.h()},h(){k(l,"class","ri-heart-2-line"),k(t,"class",i[1])},m($,h){p($,t,h),D(t,l),p($,e,h),p($,s,h),p($,r,h),p($,n,h),p($,f,h),p($,o,h),p($,u,h),p($,_,h),p($,m,h),p($,v,h),p($,b,h),p($,w,h)},p:M,d($){$&&a(t),$&&a(e),$&&a(s),$&&a(r),$&&a(n),$&&a(f),$&&a(o),$&&a(u),$&&a(_),$&&a(m),$&&a(v),$&&a(b),$&&a(w)}}}function oe(i){let t,l;return{c(){t=d("h5"),l=E("\uAD00\uC2EC\uC0AC"),this.h()},l(e){t=g(e,"H5",{slot:!0});var s=V(t);l=I(s,"\uAD00\uC2EC\uC0AC"),s.forEach(a),this.h()},h(){k(t,"slot","title")},m(e,s){p(e,t,s),D(t,l)},p:M,d(e){e&&a(t)}}}function ae(i){let t,l;return t=new X({props:{$$slots:{title:[oe],default:[ie]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,s){A(t,e,s),l=!0},p(e,s){const r={};s&16&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){l||(S(t.$$.fragment,e),l=!0)},o(e){R(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function ue(i){let t,l,e,s,r,n;return t=new q({props:{$$slots:{default:[se]},$$scope:{ctx:i}}}),e=new q({props:{$$slots:{default:[ne]},$$scope:{ctx:i}}}),r=new q({props:{$$slots:{default:[ae]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment),l=F(),C(e.$$.fragment),s=F(),C(r.$$.fragment)},l(f){N(t.$$.fragment,f),l=T(f),N(e.$$.fragment,f),s=T(f),N(r.$$.fragment,f)},m(f,o){A(t,f,o),p(f,l,o),A(e,f,o),p(f,s,o),A(r,f,o),n=!0},p(f,o){const u={};o&16&&(u.$$scope={dirty:o,ctx:f}),t.$set(u);const _={};o&16&&(_.$$scope={dirty:o,ctx:f}),e.$set(_);const m={};o&16&&(m.$$scope={dirty:o,ctx:f}),r.$set(m)},i(f){n||(S(t.$$.fragment,f),S(e.$$.fragment,f),S(r.$$.fragment,f),n=!0)},o(f){R(t.$$.fragment,f),R(e.$$.fragment,f),R(r.$$.fragment,f),n=!1},d(f){y(t,f),f&&a(l),y(e,f),f&&a(s),y(r,f)}}}function ce(i){let t;return{c(){t=E("\uC5B4\uB5A4 \uBA4B\uC9C4 \uAE30\uC220\uC744 \uAC00\uC9C0\uACE0 \uC788\uB294\uC9C0 \uC18C\uAC1C \uD560\uAC8C\uC694.")},l(l){t=I(l,"\uC5B4\uB5A4 \uBA4B\uC9C4 \uAE30\uC220\uC744 \uAC00\uC9C0\uACE0 \uC788\uB294\uC9C0 \uC18C\uAC1C \uD560\uAC8C\uC694.")},m(l,e){p(l,t,e)},d(l){l&&a(t)}}}function $e(i){let t,l;return{c(){t=d("h5"),l=E("\uBCF4\uC720\uAE30\uC220"),this.h()},l(e){t=g(e,"H5",{slot:!0});var s=V(t);l=I(s,"\uBCF4\uC720\uAE30\uC220"),s.forEach(a),this.h()},h(){k(t,"slot","title")},m(e,s){p(e,t,s),D(t,l)},p:M,d(e){e&&a(t)}}}function me(i){let t;return{c(){t=E("\uC790\uC138\uD788 \uBCF4\uAE30")},l(l){t=I(l,"\uC790\uC138\uD788 \uBCF4\uAE30")},m(l,e){p(l,t,e)},d(l){l&&a(t)}}}function _e(i){let t,l;return t=new Z({props:{slot:"action",$$slots:{default:[me]},$$scope:{ctx:i}}}),t.$on("click",i[3]),{c(){C(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,s){A(t,e,s),l=!0},p(e,s){const r={};s&16&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){l||(S(t.$$.fragment,e),l=!0)},o(e){R(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function pe(i){let t,l;return t=new X({props:{$$slots:{action:[_e],title:[$e],default:[ce]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,s){A(t,e,s),l=!0},p(e,s){const r={};s&16&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){l||(S(t.$$.fragment,e),l=!0)},o(e){R(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function he(i){let t;return{c(){t=E("\uC774 \uC0AC\uC774\uD2B8\uB97C \uC5B4\uB5BB\uAC8C \uB9CC\uB4E4\uC5C8\uB294\uC9C0 \uD568\uAED8 \uBCFC\uAE4C\uC694?")},l(l){t=I(l,"\uC774 \uC0AC\uC774\uD2B8\uB97C \uC5B4\uB5BB\uAC8C \uB9CC\uB4E4\uC5C8\uB294\uC9C0 \uD568\uAED8 \uBCFC\uAE4C\uC694?")},m(l,e){p(l,t,e)},d(l){l&&a(t)}}}function de(i){let t,l;return{c(){t=d("h5"),l=E("\uD3EC\uD2B8\uD3F4\uB9AC\uC624"),this.h()},l(e){t=g(e,"H5",{slot:!0});var s=V(t);l=I(s,"\uD3EC\uD2B8\uD3F4\uB9AC\uC624"),s.forEach(a),this.h()},h(){k(t,"slot","title")},m(e,s){p(e,t,s),D(t,l)},p:M,d(e){e&&a(t)}}}function ge(i){let t;return{c(){t=E("\uB124, \uC88B\uC544\uC694")},l(l){t=I(l,"\uB124, \uC88B\uC544\uC694")},m(l,e){p(l,t,e)},d(l){l&&a(t)}}}function be(i){let t,l;return t=new Z({props:{slot:"action",background:W,$$slots:{default:[ge]},$$scope:{ctx:i}}}),t.$on("click",i[2]),{c(){C(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,s){A(t,e,s),l=!0},p(e,s){const r={};s&16&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){l||(S(t.$$.fragment,e),l=!0)},o(e){R(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function ve(i){let t,l;return t=new X({props:{$$slots:{action:[be],title:[de],default:[he]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,s){A(t,e,s),l=!0},p(e,s){const r={};s&16&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){l||(S(t.$$.fragment,e),l=!0)},o(e){R(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function we(i){let t,l,e,s;return t=new q({props:{$$slots:{default:[pe]},$$scope:{ctx:i}}}),e=new q({props:{$$slots:{default:[ve]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment),l=F(),C(e.$$.fragment)},l(r){N(t.$$.fragment,r),l=T(r),N(e.$$.fragment,r)},m(r,n){A(t,r,n),p(r,l,n),A(e,r,n),s=!0},p(r,n){const f={};n&16&&(f.$$scope={dirty:n,ctx:r}),t.$set(f);const o={};n&16&&(o.$$scope={dirty:n,ctx:r}),e.$set(o)},i(r){s||(S(t.$$.fragment,r),S(e.$$.fragment,r),s=!0)},o(r){R(t.$$.fragment,r),R(e.$$.fragment,r),s=!1},d(r){y(t,r),r&&a(l),y(e,r)}}}function ke(i){let t,l,e,s,r,n,f,o;return t=new It({props:{$$slots:{summary:[Yt],default:[Pt]},$$scope:{ctx:i}}}),e=new x({props:{$$slots:{default:[te]},$$scope:{ctx:i}}}),r=new x({props:{$$slots:{default:[ue]},$$scope:{ctx:i}}}),f=new x({props:{$$slots:{default:[we]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment),l=F(),C(e.$$.fragment),s=F(),C(r.$$.fragment),n=F(),C(f.$$.fragment)},l(u){N(t.$$.fragment,u),l=T(u),N(e.$$.fragment,u),s=T(u),N(r.$$.fragment,u),n=T(u),N(f.$$.fragment,u)},m(u,_){A(t,u,_),p(u,l,_),A(e,u,_),p(u,s,_),A(r,u,_),p(u,n,_),A(f,u,_),o=!0},p(u,_){const m={};_&16&&(m.$$scope={dirty:_,ctx:u}),t.$set(m);const v={};_&16&&(v.$$scope={dirty:_,ctx:u}),e.$set(v);const b={};_&16&&(b.$$scope={dirty:_,ctx:u}),r.$set(b);const w={};_&16&&(w.$$scope={dirty:_,ctx:u}),f.$set(w)},i(u){o||(S(t.$$.fragment,u),S(e.$$.fragment,u),S(r.$$.fragment,u),S(f.$$.fragment,u),o=!0)},o(u){R(t.$$.fragment,u),R(e.$$.fragment,u),R(r.$$.fragment,u),R(f.$$.fragment,u),o=!1},d(u){y(t,u),u&&a(l),y(e,u),u&&a(s),y(r,u),u&&a(n),y(f,u)}}}function Ee(i){let t,l,e;return l=new Et({props:{$$slots:{default:[ke]},$$scope:{ctx:i}}}),{c(){t=F(),C(l.$$.fragment),this.h()},l(s){wt('[data-svelte="svelte-n6dk1o"]',document.head).forEach(a),t=T(s),N(l.$$.fragment,s),this.h()},h(){document.title="\uD648"},m(s,r){p(s,t,r),A(l,s,r),e=!0},p(s,[r]){const n={};r&16&&(n.$$scope={dirty:r,ctx:s}),l.$set(n)},i(s){e||(S(l.$$.fragment,s),e=!0)},o(s){R(l.$$.fragment,s),e=!1},d(s){s&&a(t),y(l,s)}}}function Ie(i){const t=L`
		display: flex;
		width: 100%;
		color: white;
		font-size: 22px;
		font-weight: 300;
		line-height: 1.5;
	`,l=L`
		font-size: 188px;
		text-align: center;
	`;return[t,l,()=>alert("hi"),()=>St("/skills")]}class De extends U{constructor(t){super(),O(this,t,Ie,Ee,G,{})}}export{De as default};
