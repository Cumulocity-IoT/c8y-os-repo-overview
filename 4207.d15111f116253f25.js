"use strict";(self.webpackChunkc8y_os_repo_overview=self.webpackChunkc8y_os_repo_overview||[]).push([[4207],{73677:(r,e,n)=>{n.d(e,{P:()=>p,z:()=>y});var t=n(25092),o=n(86354),c=n(92234),s=n(82634),u=n(6409),i=n(4285),l=n(5235),f=n(8473),a=n(89220);function y(...r){const e=(0,i.lI)(r),n=(0,i.ms)(r),{args:f,keys:a}=(0,o.D)(r);if(0===f.length)return(0,c.H)([],e);const y=new t.c(p(f,e,a?r=>(0,l.e)(a,r):s.D));return n?y.pipe((0,u.I)(n)):y}function p(r,e,n=s.D){return t=>{v(e,(()=>{const{length:o}=r,s=new Array(o);let u=o,i=o;for(let l=0;l<o;l++)v(e,(()=>{const o=(0,c.H)(r[l],e);let a=!1;o.subscribe((0,f._)(t,(r=>{s[l]=r,a||(a=!0,i--),i||t.next(n(s.slice()))}),(()=>{--u||t.complete()})))}),t)}),t)}}function v(r,e,n){r?(0,a.N)(n,r,e):e()}},73113:(r,e,n)=>{n.d(e,{x:()=>s});var t=n(13188);var o=n(4285),c=n(92234);function s(...r){return(0,t.U)(1)((0,c.H)(r,(0,o.lI)(r)))}},13188:(r,e,n)=>{n.d(e,{U:()=>c});var t=n(92765),o=n(82634);function c(r=1/0){return(0,t.Z)(o.D,r)}},57981:(r,e,n)=>{n.d(e,{h:()=>s});var t=n(90975),o=n(89220),c=n(8473);function s(r,e,n,s,u,i,l,f){const a=[];let y=0,p=0,v=!1;const b=()=>{!v||a.length||y||e.complete()},h=r=>y<s?g(r):a.push(r),g=r=>{i&&e.next(r),y++;let f=!1;(0,t.Tg)(n(r,p++)).subscribe((0,c._)(e,(r=>{null==u||u(r),i?h(r):e.next(r)}),(()=>{f=!0}),void 0,(()=>{if(f)try{for(y--;a.length&&y<s;){const r=a.shift();l?(0,o.N)(e,l,(()=>g(r))):g(r)}b()}catch(r){e.error(r)}})))};return r.subscribe((0,c._)(e,h,(()=>{v=!0,b()}))),()=>{null==f||f()}}},92765:(r,e,n)=>{n.d(e,{Z:()=>i});var t=n(92801),o=n(90975),c=n(86005),s=n(57981),u=n(20400);function i(r,e,n=1/0){return(0,u.T)(e)?i(((n,c)=>(0,t.T)(((r,t)=>e(n,r,c,t)))((0,o.Tg)(r(n,c)))),n):("number"==typeof e&&(n=e),(0,c.N)(((e,t)=>(0,s.h)(e,t,r,n))))}},12947:(r,e,n)=>{n.d(e,{Z:()=>s});var t=n(73113),o=n(4285),c=n(86005);function s(...r){const e=(0,o.lI)(r);return(0,c.N)(((n,o)=>{(e?(0,t.x)(r,n,e):(0,t.x)(r,n)).subscribe(o)}))}},86354:(r,e,n)=>{n.d(e,{D:()=>u});const{isArray:t}=Array,{getPrototypeOf:o,prototype:c,keys:s}=Object;function u(r){if(1===r.length){const n=r[0];if(t(n))return{args:n,keys:null};if((e=n)&&"object"==typeof e&&o(e)===c){const r=s(n);return{args:r.map((r=>n[r])),keys:r}}}var e;return{args:r,keys:null}}},5235:(r,e,n)=>{function t(r,e){return r.reduce(((r,n,t)=>(r[n]=e[t],r)),{})}n.d(e,{e:()=>t})},6409:(r,e,n)=>{n.d(e,{I:()=>c});var t=n(92801);const{isArray:o}=Array;function c(r){return(0,t.T)((e=>function(r,e){return o(e)?r(...e):r(e)}(r,e)))}}}]);