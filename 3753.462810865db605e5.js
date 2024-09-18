"use strict";(self.webpackChunkc8y_os_repo_overview=self.webpackChunkc8y_os_repo_overview||[]).push([[3753,5291,5839,6806,4425],{99911:(e,t,r)=>{r.d(t,{t:()=>s});var n=r(92834);class s extends n.B{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){const t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){const{hasError:e,thrownError:t,_value:r}=this;if(e)throw t;return this._throwIfClosed(),r}next(e){super.next(this._value=e)}}},92834:(e,t,r)=>{r.d(t,{B:()=>u});var n=r(25092),s=r(72581);const i=(0,r(13258).L)((e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}));var o=r(71925),c=r(86929);class u extends n.c{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){const t=new l(this,this);return t.operator=e,t}_throwIfClosed(){if(this.closed)throw new i}next(e){(0,c.Y)((()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const t of this.currentObservers)t.next(e)}}))}error(e){(0,c.Y)((()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;const{observers:t}=this;for(;t.length;)t.shift().error(e)}}))}complete(){(0,c.Y)((()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:e}=this;for(;e.length;)e.shift().complete()}}))}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){const{hasError:t,isStopped:r,observers:n}=this;return t||r?s.Kn:(this.currentObservers=null,n.push(e),new s.yU((()=>{this.currentObservers=null,(0,o.o)(n,e)})))}_checkFinalizedStatuses(e){const{hasError:t,thrownError:r,isStopped:n}=this;t?e.error(r):n&&e.complete()}asObservable(){const e=new n.c;return e.source=this,e}}u.create=(e,t)=>new l(e,t);class l extends u{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===r||r.call(t,e)}error(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===r||r.call(t,e)}complete(){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===t||t.call(e)}_subscribe(e){var t,r;return null!==(r=null===(t=this.source)||void 0===t?void 0:t.subscribe(e))&&void 0!==r?r:s.Kn}}},60557:(e,t,r)=>{r.d(t,{Ms:()=>b,vU:()=>d});var n=r(20400),s=r(72581),i=r(32599),o=r(29909),c=r(94312);const u=l("C",void 0,void 0);function l(e,t,r){return{kind:e,value:t,error:r}}var h=r(67273),a=r(86929);class d extends s.yU{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,(0,s.Uv)(e)&&e.add(this)):this.destination=y}static create(e,t,r){return new b(e,t,r)}next(e){this.isStopped?w(function(e){return l("N",e,void 0)}(e),this):this._next(e)}error(e){this.isStopped?w(l("E",void 0,e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?w(u,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const f=Function.prototype.bind;function v(e,t){return f.call(e,t)}class p{constructor(e){this.partialObserver=e}next(e){const{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(e){_(e)}}error(e){const{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(e){_(e)}else _(e)}complete(){const{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(e){_(e)}}}class b extends d{constructor(e,t,r){let s;if(super(),(0,n.T)(e)||!e)s={next:null!=e?e:void 0,error:null!=t?t:void 0,complete:null!=r?r:void 0};else{let t;this&&i.$.useDeprecatedNextContext?(t=Object.create(e),t.unsubscribe=()=>this.unsubscribe(),s={next:e.next&&v(e.next,t),error:e.error&&v(e.error,t),complete:e.complete&&v(e.complete,t)}):s=e}this.destination=new p(s)}}function _(e){i.$.useDeprecatedSynchronousErrorHandling?(0,a.l)(e):(0,o.m)(e)}function w(e,t){const{onStoppedNotification:r}=i.$;r&&h.f.setTimeout((()=>r(e,t)))}const y={closed:!0,next:c.l,error:function(e){throw e},complete:c.l}},72581:(e,t,r)=>{r.d(t,{Kn:()=>c,yU:()=>o,Uv:()=>u});var n=r(20400);const s=(0,r(13258).L)((e=>function(t){e(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map(((e,t)=>`${t+1}) ${e.toString()}`)).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t}));var i=r(71925);class o{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(const e of t)e.remove(this);else t.remove(this);const{initialTeardown:r}=this;if((0,n.T)(r))try{r()}catch(t){e=t instanceof s?t.errors:[t]}const{_finalizers:i}=this;if(i){this._finalizers=null;for(const t of i)try{l(t)}catch(t){e=null!=e?e:[],t instanceof s?e=[...e,...t.errors]:e.push(t)}}if(e)throw new s(e)}}add(e){var t;if(e&&e!==this)if(this.closed)l(e);else{if(e instanceof o){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(t=this._finalizers)&&void 0!==t?t:[]).push(e)}}_hasParent(e){const{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){const{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){const{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&(0,i.o)(t,e)}remove(e){const{_finalizers:t}=this;t&&(0,i.o)(t,e),e instanceof o&&e._removeParent(this)}}o.EMPTY=(()=>{const e=new o;return e.closed=!0,e})();const c=o.EMPTY;function u(e){return e instanceof o||e&&"closed"in e&&(0,n.T)(e.remove)&&(0,n.T)(e.add)&&(0,n.T)(e.unsubscribe)}function l(e){(0,n.T)(e)?e():e.unsubscribe()}},32599:(e,t,r)=>{r.d(t,{$:()=>n});const n={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},73113:(e,t,r)=>{r.d(t,{x:()=>o});var n=r(13188);var s=r(4285),i=r(92234);function o(...e){return(0,n.U)(1)((0,i.H)(e,(0,s.lI)(e)))}},87666:(e,t,r)=>{r.d(t,{I:()=>i,w:()=>s});var n=r(25092);const s=new n.c((e=>e.complete()));function i(e){return e?function(e){return new n.c((t=>e.schedule((()=>t.complete()))))}(e):s}},92234:(e,t,r)=>{r.d(t,{H:()=>m});var n=r(90975),s=r(66558),i=r(86005);function o(e,t=0){return(0,i.N)(((r,n)=>{n.add(e.schedule((()=>r.subscribe(n)),t))}))}var c=r(25092);var u=r(98914),l=r(20400),h=r(89220);function a(e,t){if(!e)throw new Error("Iterable cannot be null");return new c.c((r=>{(0,h.N)(r,t,(()=>{const n=e[Symbol.asyncIterator]();(0,h.N)(r,t,(()=>{n.next().then((e=>{e.done?r.complete():r.next(e.value)}))}),0,!0)}))}))}var d=r(198),f=r(23639),v=r(6576),p=r(46490),b=r(72544),_=r(9500),w=r(54311);function y(e,t){if(null!=e){if((0,d.l)(e))return function(e,t){return(0,n.Tg)(e).pipe(o(t),(0,s.Q)(t))}(e,t);if((0,v.X)(e))return function(e,t){return new c.c((r=>{let n=0;return t.schedule((function(){n===e.length?r.complete():(r.next(e[n++]),r.closed||this.schedule())}))}))}(e,t);if((0,f.y)(e))return function(e,t){return(0,n.Tg)(e).pipe(o(t),(0,s.Q)(t))}(e,t);if((0,b.T)(e))return a(e,t);if((0,p.x)(e))return function(e,t){return new c.c((r=>{let n;return(0,h.N)(r,t,(()=>{n=e[u.l](),(0,h.N)(r,t,(()=>{let e,t;try{({value:e,done:t}=n.next())}catch(e){return void r.error(e)}t?r.complete():r.next(e)}),0,!0)})),()=>(0,l.T)(null==n?void 0:n.return)&&n.return()}))}(e,t);if((0,w.U)(e))return function(e,t){return a((0,w.C)(e),t)}(e,t)}throw(0,_.L)(e)}function m(e,t){return t?y(e,t):(0,n.Tg)(e)}},47666:(e,t,r)=>{r.d(t,{Y:()=>i});var n=r(26367),s=r(9157);function i(e=0,t=n.E){return e<0&&(e=0),(0,s.O)(e,e,t)}},69251:(e,t,r)=>{r.d(t,{h:()=>u});var n=r(13188),s=r(90975),i=r(87666),o=r(4285),c=r(92234);function u(...e){const t=(0,o.lI)(e),r=(0,o.R0)(e,1/0),u=e;return u.length?1===u.length?(0,s.Tg)(u[0]):(0,n.U)(r)((0,c.H)(u,t)):i.w}},9157:(e,t,r)=>{r.d(t,{O:()=>o});var n=r(25092),s=r(26367),i=r(20687);function o(e=0,t,r=s.b){let o=-1;return null!=t&&((0,i.m)(t)?r=t:o=t),new n.c((t=>{let n=(s=e)instanceof Date&&!isNaN(s)?+e-r.now():e;var s;n<0&&(n=0);let i=0;return r.schedule((function(){t.closed||(t.next(i++),0<=o?this.schedule(void 0,o):t.complete())}),n)}))}},8473:(e,t,r)=>{r.d(t,{_:()=>s});var n=r(60557);function s(e,t,r,n,s){return new i(e,t,r,n,s)}class i extends n.vU{constructor(e,t,r,n,s,i){super(e),this.onFinalize=s,this.shouldUnsubscribe=i,this._next=t?function(r){try{t(r)}catch(t){e.error(t)}}:super._next,this._error=n?function(t){try{n(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(t){e.error(t)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:t}=this;super.unsubscribe(),!t&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}}}},92801:(e,t,r)=>{r.d(t,{T:()=>i});var n=r(86005),s=r(8473);function i(e,t){return(0,n.N)(((r,n)=>{let i=0;r.subscribe((0,s._)(n,(r=>{n.next(e.call(t,r,i++))})))}))}},13188:(e,t,r)=>{r.d(t,{U:()=>i});var n=r(92765),s=r(82634);function i(e=1/0){return(0,n.Z)(s.D,e)}},57981:(e,t,r)=>{r.d(t,{h:()=>o});var n=r(90975),s=r(89220),i=r(8473);function o(e,t,r,o,c,u,l,h){const a=[];let d=0,f=0,v=!1;const p=()=>{!v||a.length||d||t.complete()},b=e=>d<o?_(e):a.push(e),_=e=>{u&&t.next(e),d++;let h=!1;(0,n.Tg)(r(e,f++)).subscribe((0,i._)(t,(e=>{null==c||c(e),u?b(e):t.next(e)}),(()=>{h=!0}),void 0,(()=>{if(h)try{for(d--;a.length&&d<o;){const e=a.shift();l?(0,s.N)(t,l,(()=>_(e))):_(e)}p()}catch(e){t.error(e)}})))};return e.subscribe((0,i._)(t,b,(()=>{v=!0,p()}))),()=>{null==h||h()}}},92765:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(92801),s=r(90975),i=r(86005),o=r(57981),c=r(20400);function u(e,t,r=1/0){return(0,c.T)(t)?u(((r,i)=>(0,n.T)(((e,n)=>t(r,e,i,n)))((0,s.Tg)(e(r,i)))),r):("number"==typeof t&&(r=t),(0,i.N)(((t,n)=>(0,o.h)(t,n,e,r))))}},66558:(e,t,r)=>{r.d(t,{Q:()=>o});var n=r(89220),s=r(86005),i=r(8473);function o(e,t=0){return(0,s.N)(((r,s)=>{r.subscribe((0,i._)(s,(r=>(0,n.N)(s,e,(()=>s.next(r)),t)),(()=>(0,n.N)(s,e,(()=>s.complete()),t)),(r=>(0,n.N)(s,e,(()=>s.error(r)),t))))}))}},12947:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(73113),s=r(4285),i=r(86005);function o(...e){const t=(0,s.lI)(e);return(0,i.N)(((r,s)=>{(t?(0,n.x)(e,r,t):(0,n.x)(e,r)).subscribe(s)}))}},72485:(e,t,r)=>{r.d(t,{n:()=>o});var n=r(90975),s=r(86005),i=r(8473);function o(e,t){return(0,s.N)(((r,s)=>{let o=null,c=0,u=!1;const l=()=>u&&!o&&s.complete();r.subscribe((0,i._)(s,(r=>{null==o||o.unsubscribe();let u=0;const h=c++;(0,n.Tg)(e(r,h)).subscribe(o=(0,i._)(s,(e=>s.next(t?t(r,e,h,u++):e)),(()=>{o=null,l()})))}),(()=>{u=!0,l()})))}))}},89416:(e,t,r)=>{r.d(t,{s:()=>o});var n=r(87666),s=r(86005),i=r(8473);function o(e){return e<=0?()=>n.w:(0,s.N)(((t,r)=>{let n=0;t.subscribe((0,i._)(r,(t=>{++n<=e&&(r.next(t),e<=n&&r.complete())})))}))}},88590:(e,t,r)=>{r.d(t,{Q:()=>c});var n=r(86005),s=r(8473),i=r(90975),o=r(94312);function c(e){return(0,n.N)(((t,r)=>{(0,i.Tg)(e).subscribe((0,s._)(r,(()=>r.complete()),o.l)),!r.closed&&t.subscribe(r)}))}},96806:(e,t,r)=>{r.d(t,{M:()=>c});var n=r(20400),s=r(86005),i=r(8473),o=r(82634);function c(e,t,r){const c=(0,n.T)(e)||t||r?{next:e,error:t,complete:r}:e;return c?(0,s.N)(((e,t)=>{var r;null===(r=c.subscribe)||void 0===r||r.call(c);let n=!0;e.subscribe((0,i._)(t,(e=>{var r;null===(r=c.next)||void 0===r||r.call(c,e),t.next(e)}),(()=>{var e;n=!1,null===(e=c.complete)||void 0===e||e.call(c),t.complete()}),(e=>{var r;n=!1,null===(r=c.error)||void 0===r||r.call(c,e),t.error(e)}),(()=>{var e,t;n&&(null===(e=c.unsubscribe)||void 0===e||e.call(c)),null===(t=c.finalize)||void 0===t||t.call(c)})))})):o.D}},72661:(e,t,r)=>{r.d(t,{R:()=>c});var n=r(72581);class s extends n.yU{constructor(e,t){super()}schedule(e,t=0){return this}}const i={setInterval(e,t,...r){const{delegate:n}=i;return(null==n?void 0:n.setInterval)?n.setInterval(e,t,...r):setInterval(e,t,...r)},clearInterval(e){const{delegate:t}=i;return((null==t?void 0:t.clearInterval)||clearInterval)(e)},delegate:void 0};var o=r(71925);class c extends s{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){var r;if(this.closed)return this;this.state=e;const n=this.id,s=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(s,n,t)),this.pending=!0,this.delay=t,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(s,this.id,t),this}requestAsyncId(e,t,r=0){return i.setInterval(e.flush.bind(e,this),r)}recycleAsyncId(e,t,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return t;null!=t&&i.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(e,t);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let r,n=!1;try{this.work(e)}catch(e){n=!0,r=e||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:e,scheduler:t}=this,{actions:r}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,o.o)(r,this),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}}},66750:(e,t,r)=>{r.d(t,{q:()=>i});var n=r(35134);class s{constructor(e,t=s.now){this.schedulerActionCtor=e,this.now=t}schedule(e,t=0,r){return new this.schedulerActionCtor(this,e).schedule(r,t)}}s.now=n.U.now;class i extends s{constructor(e,t=s.now){super(e,t),this.actions=[],this._active=!1}flush(e){const{actions:t}=this;if(this._active)return void t.push(e);let r;this._active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=t.shift());if(this._active=!1,r){for(;e=t.shift();)e.unsubscribe();throw r}}}},26367:(e,t,r)=>{r.d(t,{E:()=>s,b:()=>i});var n=r(72661);const s=new(r(66750).q)(n.R),i=s},35134:(e,t,r)=>{r.d(t,{U:()=>n});const n={now:()=>(n.delegate||Date).now(),delegate:void 0}},67273:(e,t,r)=>{r.d(t,{f:()=>n});const n={setTimeout(e,t,...r){const{delegate:s}=n;return(null==s?void 0:s.setTimeout)?s.setTimeout(e,t,...r):setTimeout(e,t,...r)},clearTimeout(e){const{delegate:t}=n;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0}},4285:(e,t,r)=>{r.d(t,{R0:()=>u,lI:()=>c,ms:()=>o});var n=r(20400),s=r(20687);function i(e){return e[e.length-1]}function o(e){return(0,n.T)(i(e))?e.pop():void 0}function c(e){return(0,s.m)(i(e))?e.pop():void 0}function u(e,t){return"number"==typeof i(e)?e.pop():t}},71925:(e,t,r)=>{function n(e,t){if(e){const r=e.indexOf(t);0<=r&&e.splice(r,1)}}r.d(t,{o:()=>n})},13258:(e,t,r)=>{function n(e){const t=e((e=>{Error.call(e),e.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}r.d(t,{L:()=>n})},86929:(e,t,r)=>{r.d(t,{Y:()=>i,l:()=>o});var n=r(32599);let s=null;function i(e){if(n.$.useDeprecatedSynchronousErrorHandling){const t=!s;if(t&&(s={errorThrown:!1,error:null}),e(),t){const{errorThrown:e,error:t}=s;if(s=null,e)throw t}}else e()}function o(e){n.$.useDeprecatedSynchronousErrorHandling&&s&&(s.errorThrown=!0,s.error=e)}},89220:(e,t,r)=>{function n(e,t,r,n=0,s=!1){const i=t.schedule((function(){r(),s?e.add(this.schedule(null,n)):this.unsubscribe()}),n);if(e.add(i),!s)return i}r.d(t,{N:()=>n})},82634:(e,t,r)=>{function n(e){return e}r.d(t,{D:()=>n})},20400:(e,t,r)=>{function n(e){return"function"==typeof e}r.d(t,{T:()=>n})},20687:(e,t,r)=>{r.d(t,{m:()=>s});var n=r(20400);function s(e){return e&&(0,n.T)(e.schedule)}},86005:(e,t,r)=>{r.d(t,{N:()=>i,S:()=>s});var n=r(20400);function s(e){return(0,n.T)(null==e?void 0:e.lift)}function i(e){return t=>{if(s(t))return t.lift((function(t){try{return e(t,this)}catch(e){this.error(e)}}));throw new TypeError("Unable to lift unknown Observable type")}}},94312:(e,t,r)=>{function n(){}r.d(t,{l:()=>n})},29909:(e,t,r)=>{r.d(t,{m:()=>i});var n=r(32599),s=r(67273);function i(e){s.f.setTimeout((()=>{const{onUnhandledError:t}=n.$;if(!t)throw e;t(e)}))}}}]);