"use strict";(self.webpackChunkc8y_os_repo_overview=self.webpackChunkc8y_os_repo_overview||[]).push([[5839],{92834:(r,t,e)=>{e.d(t,{B:()=>u});var n=e(25092),s=e(72581);const i=(0,e(13258).L)((r=>function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}));var o=e(71925),c=e(86929);class u extends n.c{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(r){const t=new l(this,this);return t.operator=r,t}_throwIfClosed(){if(this.closed)throw new i}next(r){(0,c.Y)((()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const t of this.currentObservers)t.next(r)}}))}error(r){(0,c.Y)((()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=r;const{observers:t}=this;for(;t.length;)t.shift().error(r)}}))}complete(){(0,c.Y)((()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:r}=this;for(;r.length;)r.shift().complete()}}))}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var r;return(null===(r=this.observers)||void 0===r?void 0:r.length)>0}_trySubscribe(r){return this._throwIfClosed(),super._trySubscribe(r)}_subscribe(r){return this._throwIfClosed(),this._checkFinalizedStatuses(r),this._innerSubscribe(r)}_innerSubscribe(r){const{hasError:t,isStopped:e,observers:n}=this;return t||e?s.Kn:(this.currentObservers=null,n.push(r),new s.yU((()=>{this.currentObservers=null,(0,o.o)(n,r)})))}_checkFinalizedStatuses(r){const{hasError:t,thrownError:e,isStopped:n}=this;t?r.error(e):n&&r.complete()}asObservable(){const r=new n.c;return r.source=this,r}}u.create=(r,t)=>new l(r,t);class l extends u{constructor(r,t){super(),this.destination=r,this.source=t}next(r){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===e||e.call(t,r)}error(r){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===e||e.call(t,r)}complete(){var r,t;null===(t=null===(r=this.destination)||void 0===r?void 0:r.complete)||void 0===t||t.call(r)}_subscribe(r){var t,e;return null!==(e=null===(t=this.source)||void 0===t?void 0:t.subscribe(r))&&void 0!==e?e:s.Kn}}},60557:(r,t,e)=>{e.d(t,{Ms:()=>v,vU:()=>d});var n=e(20400),s=e(72581),i=e(32599),o=e(29909),c=e(94312);const u=l("C",void 0,void 0);function l(r,t,e){return{kind:r,value:t,error:e}}var h=e(67273),a=e(86929);class d extends s.yU{constructor(r){super(),this.isStopped=!1,r?(this.destination=r,(0,s.Uv)(r)&&r.add(this)):this.destination=y}static create(r,t,e){return new v(r,t,e)}next(r){this.isStopped?m(function(r){return l("N",r,void 0)}(r),this):this._next(r)}error(r){this.isStopped?m(l("E",void 0,r),this):(this.isStopped=!0,this._error(r))}complete(){this.isStopped?m(u,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(r){this.destination.next(r)}_error(r){try{this.destination.error(r)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const f=Function.prototype.bind;function p(r,t){return f.call(r,t)}class b{constructor(r){this.partialObserver=r}next(r){const{partialObserver:t}=this;if(t.next)try{t.next(r)}catch(r){_(r)}}error(r){const{partialObserver:t}=this;if(t.error)try{t.error(r)}catch(r){_(r)}else _(r)}complete(){const{partialObserver:r}=this;if(r.complete)try{r.complete()}catch(r){_(r)}}}class v extends d{constructor(r,t,e){let s;if(super(),(0,n.T)(r)||!r)s={next:null!=r?r:void 0,error:null!=t?t:void 0,complete:null!=e?e:void 0};else{let t;this&&i.$.useDeprecatedNextContext?(t=Object.create(r),t.unsubscribe=()=>this.unsubscribe(),s={next:r.next&&p(r.next,t),error:r.error&&p(r.error,t),complete:r.complete&&p(r.complete,t)}):s=r}this.destination=new b(s)}}function _(r){i.$.useDeprecatedSynchronousErrorHandling?(0,a.l)(r):(0,o.m)(r)}function m(r,t){const{onStoppedNotification:e}=i.$;e&&h.f.setTimeout((()=>e(r,t)))}const y={closed:!0,next:c.l,error:function(r){throw r},complete:c.l}},72581:(r,t,e)=>{e.d(t,{Kn:()=>c,yU:()=>o,Uv:()=>u});var n=e(20400);const s=(0,e(13258).L)((r=>function(t){r(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map(((r,t)=>`${t+1}) ${r.toString()}`)).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t}));var i=e(71925);class o{constructor(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let r;if(!this.closed){this.closed=!0;const{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(const r of t)r.remove(this);else t.remove(this);const{initialTeardown:e}=this;if((0,n.T)(e))try{e()}catch(t){r=t instanceof s?t.errors:[t]}const{_finalizers:i}=this;if(i){this._finalizers=null;for(const t of i)try{l(t)}catch(t){r=null!=r?r:[],t instanceof s?r=[...r,...t.errors]:r.push(t)}}if(r)throw new s(r)}}add(r){var t;if(r&&r!==this)if(this.closed)l(r);else{if(r instanceof o){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=null!==(t=this._finalizers)&&void 0!==t?t:[]).push(r)}}_hasParent(r){const{_parentage:t}=this;return t===r||Array.isArray(t)&&t.includes(r)}_addParent(r){const{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(r),t):t?[t,r]:r}_removeParent(r){const{_parentage:t}=this;t===r?this._parentage=null:Array.isArray(t)&&(0,i.o)(t,r)}remove(r){const{_finalizers:t}=this;t&&(0,i.o)(t,r),r instanceof o&&r._removeParent(this)}}o.EMPTY=(()=>{const r=new o;return r.closed=!0,r})();const c=o.EMPTY;function u(r){return r instanceof o||r&&"closed"in r&&(0,n.T)(r.remove)&&(0,n.T)(r.add)&&(0,n.T)(r.unsubscribe)}function l(r){(0,n.T)(r)?r():r.unsubscribe()}},32599:(r,t,e)=>{e.d(t,{$:()=>n});const n={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},92234:(r,t,e)=>{e.d(t,{H:()=>w});var n=e(90975),s=e(66558),i=e(86005);function o(r,t=0){return(0,i.N)(((e,n)=>{n.add(r.schedule((()=>e.subscribe(n)),t))}))}var c=e(25092);var u=e(98914),l=e(20400),h=e(89220);function a(r,t){if(!r)throw new Error("Iterable cannot be null");return new c.c((e=>{(0,h.N)(e,t,(()=>{const n=r[Symbol.asyncIterator]();(0,h.N)(e,t,(()=>{n.next().then((r=>{r.done?e.complete():e.next(r.value)}))}),0,!0)}))}))}var d=e(198),f=e(23639),p=e(6576),b=e(46490),v=e(72544),_=e(9500),m=e(54311);function y(r,t){if(null!=r){if((0,d.l)(r))return function(r,t){return(0,n.Tg)(r).pipe(o(t),(0,s.Q)(t))}(r,t);if((0,p.X)(r))return function(r,t){return new c.c((e=>{let n=0;return t.schedule((function(){n===r.length?e.complete():(e.next(r[n++]),e.closed||this.schedule())}))}))}(r,t);if((0,f.y)(r))return function(r,t){return(0,n.Tg)(r).pipe(o(t),(0,s.Q)(t))}(r,t);if((0,v.T)(r))return a(r,t);if((0,b.x)(r))return function(r,t){return new c.c((e=>{let n;return(0,h.N)(e,t,(()=>{n=r[u.l](),(0,h.N)(e,t,(()=>{let r,t;try{({value:r,done:t}=n.next())}catch(r){return void e.error(r)}t?e.complete():e.next(r)}),0,!0)})),()=>(0,l.T)(null==n?void 0:n.return)&&n.return()}))}(r,t);if((0,m.U)(r))return function(r,t){return a((0,m.C)(r),t)}(r,t)}throw(0,_.L)(r)}function w(r,t){return t?y(r,t):(0,n.Tg)(r)}},8473:(r,t,e)=>{e.d(t,{_:()=>s});var n=e(60557);function s(r,t,e,n,s){return new i(r,t,e,n,s)}class i extends n.vU{constructor(r,t,e,n,s,i){super(r),this.onFinalize=s,this.shouldUnsubscribe=i,this._next=t?function(e){try{t(e)}catch(t){r.error(t)}}:super._next,this._error=n?function(t){try{n(t)}catch(t){r.error(t)}finally{this.unsubscribe()}}:super._error,this._complete=e?function(){try{e()}catch(t){r.error(t)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:t}=this;super.unsubscribe(),!t&&(null===(r=this.onFinalize)||void 0===r||r.call(this))}}}},66558:(r,t,e)=>{e.d(t,{Q:()=>o});var n=e(89220),s=e(86005),i=e(8473);function o(r,t=0){return(0,s.N)(((e,s)=>{e.subscribe((0,i._)(s,(e=>(0,n.N)(s,r,(()=>s.next(e)),t)),(()=>(0,n.N)(s,r,(()=>s.complete()),t)),(e=>(0,n.N)(s,r,(()=>s.error(e)),t))))}))}},88590:(r,t,e)=>{e.d(t,{Q:()=>c});var n=e(86005),s=e(8473),i=e(90975),o=e(94312);function c(r){return(0,n.N)(((t,e)=>{(0,i.Tg)(r).subscribe((0,s._)(e,(()=>e.complete()),o.l)),!e.closed&&t.subscribe(e)}))}},67273:(r,t,e)=>{e.d(t,{f:()=>n});const n={setTimeout(r,t,...e){const{delegate:s}=n;return(null==s?void 0:s.setTimeout)?s.setTimeout(r,t,...e):setTimeout(r,t,...e)},clearTimeout(r){const{delegate:t}=n;return((null==t?void 0:t.clearTimeout)||clearTimeout)(r)},delegate:void 0}},4285:(r,t,e)=>{e.d(t,{R0:()=>u,lI:()=>c,ms:()=>o});var n=e(20400),s=e(20687);function i(r){return r[r.length-1]}function o(r){return(0,n.T)(i(r))?r.pop():void 0}function c(r){return(0,s.m)(i(r))?r.pop():void 0}function u(r,t){return"number"==typeof i(r)?r.pop():t}},71925:(r,t,e)=>{function n(r,t){if(r){const e=r.indexOf(t);0<=e&&r.splice(e,1)}}e.d(t,{o:()=>n})},13258:(r,t,e)=>{function n(r){const t=r((r=>{Error.call(r),r.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}e.d(t,{L:()=>n})},86929:(r,t,e)=>{e.d(t,{Y:()=>i,l:()=>o});var n=e(32599);let s=null;function i(r){if(n.$.useDeprecatedSynchronousErrorHandling){const t=!s;if(t&&(s={errorThrown:!1,error:null}),r(),t){const{errorThrown:r,error:t}=s;if(s=null,r)throw t}}else r()}function o(r){n.$.useDeprecatedSynchronousErrorHandling&&s&&(s.errorThrown=!0,s.error=r)}},89220:(r,t,e)=>{function n(r,t,e,n=0,s=!1){const i=t.schedule((function(){e(),s?r.add(this.schedule(null,n)):this.unsubscribe()}),n);if(r.add(i),!s)return i}e.d(t,{N:()=>n})},82634:(r,t,e)=>{function n(r){return r}e.d(t,{D:()=>n})},20400:(r,t,e)=>{function n(r){return"function"==typeof r}e.d(t,{T:()=>n})},20687:(r,t,e)=>{e.d(t,{m:()=>s});var n=e(20400);function s(r){return r&&(0,n.T)(r.schedule)}},86005:(r,t,e)=>{e.d(t,{N:()=>i,S:()=>s});var n=e(20400);function s(r){return(0,n.T)(null==r?void 0:r.lift)}function i(r){return t=>{if(s(t))return t.lift((function(t){try{return r(t,this)}catch(r){this.error(r)}}));throw new TypeError("Unable to lift unknown Observable type")}}},94312:(r,t,e)=>{function n(){}e.d(t,{l:()=>n})},29909:(r,t,e)=>{e.d(t,{m:()=>i});var n=e(32599),s=e(67273);function i(r){s.f.setTimeout((()=>{const{onUnhandledError:t}=n.$;if(!t)throw r;t(r)}))}}}]);