"use strict";(self.webpackChunkc8y_os_repo_overview=self.webpackChunkc8y_os_repo_overview||[]).push([[2288,6806,4425,9653,9911],{99911:(r,e,t)=>{t.d(e,{t:()=>n});var s=t(92834);class n extends s.B{constructor(r){super(),this._value=r}get value(){return this.getValue()}_subscribe(r){const e=super._subscribe(r);return!e.closed&&r.next(this._value),e}getValue(){const{hasError:r,thrownError:e,_value:t}=this;if(r)throw e;return this._throwIfClosed(),t}next(r){super.next(this._value=r)}}},25092:(r,e,t)=>{t.d(e,{c:()=>a});var s=t(60557),n=t(72581),i=t(99049),o=t(67016),c=t(32599),u=t(20400),l=t(86929);class a{constructor(r){r&&(this._subscribe=r)}lift(r){const e=new a;return e.source=this,e.operator=r,e}subscribe(r,e,t){const i=(o=r)&&o instanceof s.vU||function(r){return r&&(0,u.T)(r.next)&&(0,u.T)(r.error)&&(0,u.T)(r.complete)}(o)&&(0,n.Uv)(o)?r:new s.Ms(r,e,t);var o;return(0,l.Y)((()=>{const{operator:r,source:e}=this;i.add(r?r.call(i,e):e?this._subscribe(i):this._trySubscribe(i))})),i}_trySubscribe(r){try{return this._subscribe(r)}catch(e){r.error(e)}}forEach(r,e){return new(e=h(e))(((e,t)=>{const n=new s.Ms({next:e=>{try{r(e)}catch(r){t(r),n.unsubscribe()}},error:t,complete:e});this.subscribe(n)}))}_subscribe(r){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(r)}[i.s](){return this}pipe(...r){return(0,o.m)(r)(this)}toPromise(r){return new(r=h(r))(((r,e)=>{let t;this.subscribe((r=>t=r),(r=>e(r)),(()=>r(t)))}))}}function h(r){var e;return null!==(e=null!=r?r:c.$.Promise)&&void 0!==e?e:Promise}a.create=r=>new a(r)},92834:(r,e,t)=>{t.d(e,{B:()=>u});var s=t(25092),n=t(72581);const i=(0,t(13258).L)((r=>function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}));var o=t(71925),c=t(86929);class u extends s.c{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(r){const e=new l(this,this);return e.operator=r,e}_throwIfClosed(){if(this.closed)throw new i}next(r){(0,c.Y)((()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const e of this.currentObservers)e.next(r)}}))}error(r){(0,c.Y)((()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=r;const{observers:e}=this;for(;e.length;)e.shift().error(r)}}))}complete(){(0,c.Y)((()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:r}=this;for(;r.length;)r.shift().complete()}}))}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var r;return(null===(r=this.observers)||void 0===r?void 0:r.length)>0}_trySubscribe(r){return this._throwIfClosed(),super._trySubscribe(r)}_subscribe(r){return this._throwIfClosed(),this._checkFinalizedStatuses(r),this._innerSubscribe(r)}_innerSubscribe(r){const{hasError:e,isStopped:t,observers:s}=this;return e||t?n.Kn:(this.currentObservers=null,s.push(r),new n.yU((()=>{this.currentObservers=null,(0,o.o)(s,r)})))}_checkFinalizedStatuses(r){const{hasError:e,thrownError:t,isStopped:s}=this;e?r.error(t):s&&r.complete()}asObservable(){const r=new s.c;return r.source=this,r}}u.create=(r,e)=>new l(r,e);class l extends u{constructor(r,e){super(),this.destination=r,this.source=e}next(r){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===t||t.call(e,r)}error(r){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===t||t.call(e,r)}complete(){var r,e;null===(e=null===(r=this.destination)||void 0===r?void 0:r.complete)||void 0===e||e.call(r)}_subscribe(r){var e,t;return null!==(t=null===(e=this.source)||void 0===e?void 0:e.subscribe(r))&&void 0!==t?t:n.Kn}}},60557:(r,e,t)=>{t.d(e,{Ms:()=>f,vU:()=>d});var s=t(20400),n=t(72581),i=t(32599),o=t(29909),c=t(94312);const u=l("C",void 0,void 0);function l(r,e,t){return{kind:r,value:e,error:t}}var a=t(67273),h=t(86929);class d extends n.yU{constructor(r){super(),this.isStopped=!1,r?(this.destination=r,(0,n.Uv)(r)&&r.add(this)):this.destination=y}static create(r,e,t){return new f(r,e,t)}next(r){this.isStopped?m(function(r){return l("N",r,void 0)}(r),this):this._next(r)}error(r){this.isStopped?m(l("E",void 0,r),this):(this.isStopped=!0,this._error(r))}complete(){this.isStopped?m(u,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(r){this.destination.next(r)}_error(r){try{this.destination.error(r)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const b=Function.prototype.bind;function p(r,e){return b.call(r,e)}class v{constructor(r){this.partialObserver=r}next(r){const{partialObserver:e}=this;if(e.next)try{e.next(r)}catch(r){_(r)}}error(r){const{partialObserver:e}=this;if(e.error)try{e.error(r)}catch(r){_(r)}else _(r)}complete(){const{partialObserver:r}=this;if(r.complete)try{r.complete()}catch(r){_(r)}}}class f extends d{constructor(r,e,t){let n;if(super(),(0,s.T)(r)||!r)n={next:null!=r?r:void 0,error:null!=e?e:void 0,complete:null!=t?t:void 0};else{let e;this&&i.$.useDeprecatedNextContext?(e=Object.create(r),e.unsubscribe=()=>this.unsubscribe(),n={next:r.next&&p(r.next,e),error:r.error&&p(r.error,e),complete:r.complete&&p(r.complete,e)}):n=r}this.destination=new v(n)}}function _(r){i.$.useDeprecatedSynchronousErrorHandling?(0,h.l)(r):(0,o.m)(r)}function m(r,e){const{onStoppedNotification:t}=i.$;t&&a.f.setTimeout((()=>t(r,e)))}const y={closed:!0,next:c.l,error:function(r){throw r},complete:c.l}},72581:(r,e,t)=>{t.d(e,{Kn:()=>c,yU:()=>o,Uv:()=>u});var s=t(20400);const n=(0,t(13258).L)((r=>function(e){r(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map(((r,e)=>`${e+1}) ${r.toString()}`)).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e}));var i=t(71925);class o{constructor(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let r;if(!this.closed){this.closed=!0;const{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(const r of e)r.remove(this);else e.remove(this);const{initialTeardown:t}=this;if((0,s.T)(t))try{t()}catch(e){r=e instanceof n?e.errors:[e]}const{_finalizers:i}=this;if(i){this._finalizers=null;for(const e of i)try{l(e)}catch(e){r=null!=r?r:[],e instanceof n?r=[...r,...e.errors]:r.push(e)}}if(r)throw new n(r)}}add(r){var e;if(r&&r!==this)if(this.closed)l(r);else{if(r instanceof o){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=null!==(e=this._finalizers)&&void 0!==e?e:[]).push(r)}}_hasParent(r){const{_parentage:e}=this;return e===r||Array.isArray(e)&&e.includes(r)}_addParent(r){const{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(r),e):e?[e,r]:r}_removeParent(r){const{_parentage:e}=this;e===r?this._parentage=null:Array.isArray(e)&&(0,i.o)(e,r)}remove(r){const{_finalizers:e}=this;e&&(0,i.o)(e,r),r instanceof o&&r._removeParent(this)}}o.EMPTY=(()=>{const r=new o;return r.closed=!0,r})();const c=o.EMPTY;function u(r){return r instanceof o||r&&"closed"in r&&(0,s.T)(r.remove)&&(0,s.T)(r.add)&&(0,s.T)(r.unsubscribe)}function l(r){(0,s.T)(r)?r():r.unsubscribe()}},32599:(r,e,t)=>{t.d(e,{$:()=>s});const s={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},8473:(r,e,t)=>{t.d(e,{_:()=>n});var s=t(60557);function n(r,e,t,s,n){return new i(r,e,t,s,n)}class i extends s.vU{constructor(r,e,t,s,n,i){super(r),this.onFinalize=n,this.shouldUnsubscribe=i,this._next=e?function(t){try{e(t)}catch(e){r.error(e)}}:super._next,this._error=s?function(e){try{s(e)}catch(e){r.error(e)}finally{this.unsubscribe()}}:super._error,this._complete=t?function(){try{t()}catch(e){r.error(e)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:e}=this;super.unsubscribe(),!e&&(null===(r=this.onFinalize)||void 0===r||r.call(this))}}}},79653:(r,e,t)=>{t.d(e,{p:()=>i});var s=t(86005),n=t(8473);function i(r,e){return(0,s.N)(((t,s)=>{let i=0;t.subscribe((0,n._)(s,(t=>r.call(e,t,i++)&&s.next(t))))}))}},92801:(r,e,t)=>{t.d(e,{T:()=>i});var s=t(86005),n=t(8473);function i(r,e){return(0,s.N)(((t,s)=>{let i=0;t.subscribe((0,n._)(s,(t=>{s.next(r.call(e,t,i++))})))}))}},96806:(r,e,t)=>{t.d(e,{M:()=>c});var s=t(20400),n=t(86005),i=t(8473),o=t(82634);function c(r,e,t){const c=(0,s.T)(r)||e||t?{next:r,error:e,complete:t}:r;return c?(0,n.N)(((r,e)=>{var t;null===(t=c.subscribe)||void 0===t||t.call(c);let s=!0;r.subscribe((0,i._)(e,(r=>{var t;null===(t=c.next)||void 0===t||t.call(c,r),e.next(r)}),(()=>{var r;s=!1,null===(r=c.complete)||void 0===r||r.call(c),e.complete()}),(r=>{var t;s=!1,null===(t=c.error)||void 0===t||t.call(c,r),e.error(r)}),(()=>{var r,e;s&&(null===(r=c.unsubscribe)||void 0===r||r.call(c)),null===(e=c.finalize)||void 0===e||e.call(c)})))})):o.D}},67273:(r,e,t)=>{t.d(e,{f:()=>s});const s={setTimeout(r,e,...t){const{delegate:n}=s;return(null==n?void 0:n.setTimeout)?n.setTimeout(r,e,...t):setTimeout(r,e,...t)},clearTimeout(r){const{delegate:e}=s;return((null==e?void 0:e.clearTimeout)||clearTimeout)(r)},delegate:void 0}},99049:(r,e,t)=>{t.d(e,{s:()=>s});const s="function"==typeof Symbol&&Symbol.observable||"@@observable"},71925:(r,e,t)=>{function s(r,e){if(r){const t=r.indexOf(e);0<=t&&r.splice(t,1)}}t.d(e,{o:()=>s})},13258:(r,e,t)=>{function s(r){const e=r((r=>{Error.call(r),r.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}t.d(e,{L:()=>s})},86929:(r,e,t)=>{t.d(e,{Y:()=>i,l:()=>o});var s=t(32599);let n=null;function i(r){if(s.$.useDeprecatedSynchronousErrorHandling){const e=!n;if(e&&(n={errorThrown:!1,error:null}),r(),e){const{errorThrown:r,error:e}=n;if(n=null,r)throw e}}else r()}function o(r){s.$.useDeprecatedSynchronousErrorHandling&&n&&(n.errorThrown=!0,n.error=r)}},82634:(r,e,t)=>{function s(r){return r}t.d(e,{D:()=>s})},20400:(r,e,t)=>{function s(r){return"function"==typeof r}t.d(e,{T:()=>s})},86005:(r,e,t)=>{t.d(e,{N:()=>i,S:()=>n});var s=t(20400);function n(r){return(0,s.T)(null==r?void 0:r.lift)}function i(r){return e=>{if(n(e))return e.lift((function(e){try{return r(e,this)}catch(r){this.error(r)}}));throw new TypeError("Unable to lift unknown Observable type")}}},94312:(r,e,t)=>{function s(){}t.d(e,{l:()=>s})},67016:(r,e,t)=>{t.d(e,{F:()=>n,m:()=>i});var s=t(82634);function n(...r){return i(r)}function i(r){return 0===r.length?s.D:1===r.length?r[0]:function(e){return r.reduce(((r,e)=>e(r)),e)}}},29909:(r,e,t)=>{t.d(e,{m:()=>i});var s=t(32599),n=t(67273);function i(r){n.f.setTimeout((()=>{const{onUnhandledError:e}=s.$;if(!e)throw r;e(r)}))}}}]);