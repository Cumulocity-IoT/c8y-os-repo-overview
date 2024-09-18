"use strict";(self.webpackChunkc8y_os_repo_overview=self.webpackChunkc8y_os_repo_overview||[]).push([[303,5839],{99911:(e,r,t)=>{t.d(r,{t:()=>s});var n=t(92834);class s extends n.B{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){const r=super._subscribe(e);return!r.closed&&e.next(this._value),r}getValue(){const{hasError:e,thrownError:r,_value:t}=this;if(e)throw r;return this._throwIfClosed(),t}next(e){super.next(this._value=e)}}},92834:(e,r,t)=>{t.d(r,{B:()=>u});var n=t(25092),s=t(72581);const i=(0,t(13258).L)((e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}));var o=t(71925),c=t(86929);class u extends n.c{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){const r=new l(this,this);return r.operator=e,r}_throwIfClosed(){if(this.closed)throw new i}next(e){(0,c.Y)((()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const r of this.currentObservers)r.next(e)}}))}error(e){(0,c.Y)((()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;const{observers:r}=this;for(;r.length;)r.shift().error(e)}}))}complete(){(0,c.Y)((()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:e}=this;for(;e.length;)e.shift().complete()}}))}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){const{hasError:r,isStopped:t,observers:n}=this;return r||t?s.Kn:(this.currentObservers=null,n.push(e),new s.yU((()=>{this.currentObservers=null,(0,o.o)(n,e)})))}_checkFinalizedStatuses(e){const{hasError:r,thrownError:t,isStopped:n}=this;r?e.error(t):n&&e.complete()}asObservable(){const e=new n.c;return e.source=this,e}}u.create=(e,r)=>new l(e,r);class l extends u{constructor(e,r){super(),this.destination=e,this.source=r}next(e){var r,t;null===(t=null===(r=this.destination)||void 0===r?void 0:r.next)||void 0===t||t.call(r,e)}error(e){var r,t;null===(t=null===(r=this.destination)||void 0===r?void 0:r.error)||void 0===t||t.call(r,e)}complete(){var e,r;null===(r=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===r||r.call(e)}_subscribe(e){var r,t;return null!==(t=null===(r=this.source)||void 0===r?void 0:r.subscribe(e))&&void 0!==t?t:s.Kn}}},60557:(e,r,t)=>{t.d(r,{Ms:()=>v,vU:()=>d});var n=t(20400),s=t(72581),i=t(32599),o=t(29909),c=t(94312);const u=l("C",void 0,void 0);function l(e,r,t){return{kind:e,value:r,error:t}}var h=t(67273),a=t(86929);class d extends s.yU{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,(0,s.Uv)(e)&&e.add(this)):this.destination=w}static create(e,r,t){return new v(e,r,t)}next(e){this.isStopped?m(function(e){return l("N",e,void 0)}(e),this):this._next(e)}error(e){this.isStopped?m(l("E",void 0,e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?m(u,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const f=Function.prototype.bind;function p(e,r){return f.call(e,r)}class b{constructor(e){this.partialObserver=e}next(e){const{partialObserver:r}=this;if(r.next)try{r.next(e)}catch(e){_(e)}}error(e){const{partialObserver:r}=this;if(r.error)try{r.error(e)}catch(e){_(e)}else _(e)}complete(){const{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(e){_(e)}}}class v extends d{constructor(e,r,t){let s;if(super(),(0,n.T)(e)||!e)s={next:null!=e?e:void 0,error:null!=r?r:void 0,complete:null!=t?t:void 0};else{let r;this&&i.$.useDeprecatedNextContext?(r=Object.create(e),r.unsubscribe=()=>this.unsubscribe(),s={next:e.next&&p(e.next,r),error:e.error&&p(e.error,r),complete:e.complete&&p(e.complete,r)}):s=e}this.destination=new b(s)}}function _(e){i.$.useDeprecatedSynchronousErrorHandling?(0,a.l)(e):(0,o.m)(e)}function m(e,r){const{onStoppedNotification:t}=i.$;t&&h.f.setTimeout((()=>t(e,r)))}const w={closed:!0,next:c.l,error:function(e){throw e},complete:c.l}},72581:(e,r,t)=>{t.d(r,{Kn:()=>c,yU:()=>o,Uv:()=>u});var n=t(20400);const s=(0,t(13258).L)((e=>function(r){e(this),this.message=r?`${r.length} errors occurred during unsubscription:\n${r.map(((e,r)=>`${r+1}) ${e.toString()}`)).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=r}));var i=t(71925);class o{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{_parentage:r}=this;if(r)if(this._parentage=null,Array.isArray(r))for(const e of r)e.remove(this);else r.remove(this);const{initialTeardown:t}=this;if((0,n.T)(t))try{t()}catch(r){e=r instanceof s?r.errors:[r]}const{_finalizers:i}=this;if(i){this._finalizers=null;for(const r of i)try{l(r)}catch(r){e=null!=e?e:[],r instanceof s?e=[...e,...r.errors]:e.push(r)}}if(e)throw new s(e)}}add(e){var r;if(e&&e!==this)if(this.closed)l(e);else{if(e instanceof o){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(e)}}_hasParent(e){const{_parentage:r}=this;return r===e||Array.isArray(r)&&r.includes(e)}_addParent(e){const{_parentage:r}=this;this._parentage=Array.isArray(r)?(r.push(e),r):r?[r,e]:e}_removeParent(e){const{_parentage:r}=this;r===e?this._parentage=null:Array.isArray(r)&&(0,i.o)(r,e)}remove(e){const{_finalizers:r}=this;r&&(0,i.o)(r,e),e instanceof o&&e._removeParent(this)}}o.EMPTY=(()=>{const e=new o;return e.closed=!0,e})();const c=o.EMPTY;function u(e){return e instanceof o||e&&"closed"in e&&(0,n.T)(e.remove)&&(0,n.T)(e.add)&&(0,n.T)(e.unsubscribe)}function l(e){(0,n.T)(e)?e():e.unsubscribe()}},32599:(e,r,t)=>{t.d(r,{$:()=>n});const n={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},87666:(e,r,t)=>{t.d(r,{I:()=>i,w:()=>s});var n=t(25092);const s=new n.c((e=>e.complete()));function i(e){return e?function(e){return new n.c((r=>e.schedule((()=>r.complete()))))}(e):s}},92234:(e,r,t)=>{t.d(r,{H:()=>y});var n=t(90975),s=t(66558),i=t(86005);function o(e,r=0){return(0,i.N)(((t,n)=>{n.add(e.schedule((()=>t.subscribe(n)),r))}))}var c=t(25092);var u=t(98914),l=t(20400),h=t(89220);function a(e,r){if(!e)throw new Error("Iterable cannot be null");return new c.c((t=>{(0,h.N)(t,r,(()=>{const n=e[Symbol.asyncIterator]();(0,h.N)(t,r,(()=>{n.next().then((e=>{e.done?t.complete():t.next(e.value)}))}),0,!0)}))}))}var d=t(198),f=t(23639),p=t(6576),b=t(46490),v=t(72544),_=t(9500),m=t(54311);function w(e,r){if(null!=e){if((0,d.l)(e))return function(e,r){return(0,n.Tg)(e).pipe(o(r),(0,s.Q)(r))}(e,r);if((0,p.X)(e))return function(e,r){return new c.c((t=>{let n=0;return r.schedule((function(){n===e.length?t.complete():(t.next(e[n++]),t.closed||this.schedule())}))}))}(e,r);if((0,f.y)(e))return function(e,r){return(0,n.Tg)(e).pipe(o(r),(0,s.Q)(r))}(e,r);if((0,v.T)(e))return a(e,r);if((0,b.x)(e))return function(e,r){return new c.c((t=>{let n;return(0,h.N)(t,r,(()=>{n=e[u.l](),(0,h.N)(t,r,(()=>{let e,r;try{({value:e,done:r}=n.next())}catch(e){return void t.error(e)}r?t.complete():t.next(e)}),0,!0)})),()=>(0,l.T)(null==n?void 0:n.return)&&n.return()}))}(e,r);if((0,m.U)(e))return function(e,r){return a((0,m.C)(e),r)}(e,r)}throw(0,_.L)(e)}function y(e,r){return r?w(e,r):(0,n.Tg)(e)}},99330:(e,r,t)=>{t.d(r,{of:()=>i});var n=t(4285),s=t(92234);function i(...e){const r=(0,n.lI)(e);return(0,s.H)(e,r)}},8473:(e,r,t)=>{t.d(r,{_:()=>s});var n=t(60557);function s(e,r,t,n,s){return new i(e,r,t,n,s)}class i extends n.vU{constructor(e,r,t,n,s,i){super(e),this.onFinalize=s,this.shouldUnsubscribe=i,this._next=r?function(t){try{r(t)}catch(r){e.error(r)}}:super._next,this._error=n?function(r){try{n(r)}catch(r){e.error(r)}finally{this.unsubscribe()}}:super._error,this._complete=t?function(){try{t()}catch(r){e.error(r)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:r}=this;super.unsubscribe(),!r&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}}}},66558:(e,r,t)=>{t.d(r,{Q:()=>o});var n=t(89220),s=t(86005),i=t(8473);function o(e,r=0){return(0,s.N)(((t,s)=>{t.subscribe((0,i._)(s,(t=>(0,n.N)(s,e,(()=>s.next(t)),r)),(()=>(0,n.N)(s,e,(()=>s.complete()),r)),(t=>(0,n.N)(s,e,(()=>s.error(t)),r))))}))}},89416:(e,r,t)=>{t.d(r,{s:()=>o});var n=t(87666),s=t(86005),i=t(8473);function o(e){return e<=0?()=>n.w:(0,s.N)(((r,t)=>{let n=0;r.subscribe((0,i._)(t,(r=>{++n<=e&&(t.next(r),e<=n&&t.complete())})))}))}},88590:(e,r,t)=>{t.d(r,{Q:()=>c});var n=t(86005),s=t(8473),i=t(90975),o=t(94312);function c(e){return(0,n.N)(((r,t)=>{(0,i.Tg)(e).subscribe((0,s._)(t,(()=>t.complete()),o.l)),!t.closed&&r.subscribe(t)}))}},67273:(e,r,t)=>{t.d(r,{f:()=>n});const n={setTimeout(e,r,...t){const{delegate:s}=n;return(null==s?void 0:s.setTimeout)?s.setTimeout(e,r,...t):setTimeout(e,r,...t)},clearTimeout(e){const{delegate:r}=n;return((null==r?void 0:r.clearTimeout)||clearTimeout)(e)},delegate:void 0}},4285:(e,r,t)=>{t.d(r,{R0:()=>u,lI:()=>c,ms:()=>o});var n=t(20400),s=t(20687);function i(e){return e[e.length-1]}function o(e){return(0,n.T)(i(e))?e.pop():void 0}function c(e){return(0,s.m)(i(e))?e.pop():void 0}function u(e,r){return"number"==typeof i(e)?e.pop():r}},71925:(e,r,t)=>{function n(e,r){if(e){const t=e.indexOf(r);0<=t&&e.splice(t,1)}}t.d(r,{o:()=>n})},13258:(e,r,t)=>{function n(e){const r=e((e=>{Error.call(e),e.stack=(new Error).stack}));return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}t.d(r,{L:()=>n})},86929:(e,r,t)=>{t.d(r,{Y:()=>i,l:()=>o});var n=t(32599);let s=null;function i(e){if(n.$.useDeprecatedSynchronousErrorHandling){const r=!s;if(r&&(s={errorThrown:!1,error:null}),e(),r){const{errorThrown:e,error:r}=s;if(s=null,e)throw r}}else e()}function o(e){n.$.useDeprecatedSynchronousErrorHandling&&s&&(s.errorThrown=!0,s.error=e)}},89220:(e,r,t)=>{function n(e,r,t,n=0,s=!1){const i=r.schedule((function(){t(),s?e.add(this.schedule(null,n)):this.unsubscribe()}),n);if(e.add(i),!s)return i}t.d(r,{N:()=>n})},82634:(e,r,t)=>{function n(e){return e}t.d(r,{D:()=>n})},20400:(e,r,t)=>{function n(e){return"function"==typeof e}t.d(r,{T:()=>n})},72481:(e,r,t)=>{t.d(r,{A:()=>i});var n=t(25092),s=t(20400);function i(e){return!!e&&(e instanceof n.c||(0,s.T)(e.lift)&&(0,s.T)(e.subscribe))}},20687:(e,r,t)=>{t.d(r,{m:()=>s});var n=t(20400);function s(e){return e&&(0,n.T)(e.schedule)}},86005:(e,r,t)=>{t.d(r,{N:()=>i,S:()=>s});var n=t(20400);function s(e){return(0,n.T)(null==e?void 0:e.lift)}function i(e){return r=>{if(s(r))return r.lift((function(r){try{return e(r,this)}catch(e){this.error(e)}}));throw new TypeError("Unable to lift unknown Observable type")}}},94312:(e,r,t)=>{function n(){}t.d(r,{l:()=>n})},29909:(e,r,t)=>{t.d(r,{m:()=>i});var n=t(32599),s=t(67273);function i(e){s.f.setTimeout((()=>{const{onUnhandledError:r}=n.$;if(!r)throw e;r(e)}))}}}]);