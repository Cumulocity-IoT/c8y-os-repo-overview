"use strict";(self.webpackChunkc8y_os_repo_overview=self.webpackChunkc8y_os_repo_overview||[]).push([[6601],{56601:(e,t,a)=>{a.r(t),a.d(t,{PagerComponent:()=>y,PaginationComponent:()=>I,PaginationConfig:()=>v,PaginationModule:()=>k});var i=a(52383),n=a(29723),s=a(63625);const l=(e,t)=>({"pull-left":e,"float-left":t}),o=(e,t)=>({"pull-right":e,"float-right":t}),r=(e,t)=>({disabled:e,currentPage:t}),g=(e,t,a)=>({disabled:e,$implicit:t,currentPage:a});function p(e,t){if(1&e){const e=i["ɵɵgetCurrentView"]();i["ɵɵelementStart"](0,"li",11)(1,"a",12),i["ɵɵlistener"]("click",(function(t){i["ɵɵrestoreView"](e);const a=i["ɵɵnextContext"]();return i["ɵɵresetView"](a.selectPage(1,t))})),i["ɵɵelementContainer"](2,13),i["ɵɵelementEnd"]()()}if(2&e){const e=i["ɵɵnextContext"](),t=i["ɵɵreference"](13);i["ɵɵclassProp"]("disabled",e.noPrevious()||e.disabled),i["ɵɵadvance"](2),i["ɵɵproperty"]("ngTemplateOutlet",e.customFirstTemplate||t)("ngTemplateOutletContext",i["ɵɵpureFunction2"](4,r,e.noPrevious()||e.disabled,e.page))}}function c(e,t){if(1&e){const e=i["ɵɵgetCurrentView"]();i["ɵɵelementStart"](0,"li",14)(1,"a",12),i["ɵɵlistener"]("click",(function(t){i["ɵɵrestoreView"](e);const a=i["ɵɵnextContext"]();return i["ɵɵresetView"](a.selectPage(a.page-1,t))})),i["ɵɵelementContainer"](2,13),i["ɵɵelementEnd"]()()}if(2&e){const e=i["ɵɵnextContext"](),t=i["ɵɵreference"](11);i["ɵɵclassProp"]("disabled",e.noPrevious()||e.disabled),i["ɵɵadvance"](2),i["ɵɵproperty"]("ngTemplateOutlet",e.customPreviousTemplate||t)("ngTemplateOutletContext",i["ɵɵpureFunction2"](4,r,e.noPrevious()||e.disabled,e.page))}}function u(e,t){if(1&e){const e=i["ɵɵgetCurrentView"]();i["ɵɵelementStart"](0,"li",15)(1,"a",12),i["ɵɵlistener"]("click",(function(t){const a=i["ɵɵrestoreView"](e).$implicit,n=i["ɵɵnextContext"]();return i["ɵɵresetView"](n.selectPage(a.number,t))})),i["ɵɵelementContainer"](2,13),i["ɵɵelementEnd"]()()}if(2&e){const e=t.$implicit,a=i["ɵɵnextContext"](),n=i["ɵɵreference"](7);i["ɵɵclassProp"]("active",e.active)("disabled",a.disabled&&!e.active),i["ɵɵadvance"](2),i["ɵɵproperty"]("ngTemplateOutlet",a.customPageTemplate||n)("ngTemplateOutletContext",i["ɵɵpureFunction3"](6,g,a.disabled,e,a.page))}}function m(e,t){if(1&e){const e=i["ɵɵgetCurrentView"]();i["ɵɵelementStart"](0,"li",16)(1,"a",12),i["ɵɵlistener"]("click",(function(t){i["ɵɵrestoreView"](e);const a=i["ɵɵnextContext"]();return i["ɵɵresetView"](a.selectPage(a.page+1,t))})),i["ɵɵelementContainer"](2,13),i["ɵɵelementEnd"]()()}if(2&e){const e=i["ɵɵnextContext"](),t=i["ɵɵreference"](9);i["ɵɵclassProp"]("disabled",e.noNext()||e.disabled),i["ɵɵadvance"](2),i["ɵɵproperty"]("ngTemplateOutlet",e.customNextTemplate||t)("ngTemplateOutletContext",i["ɵɵpureFunction2"](4,r,e.noNext()||e.disabled,e.page))}}function h(e,t){if(1&e){const e=i["ɵɵgetCurrentView"]();i["ɵɵelementStart"](0,"li",17)(1,"a",12),i["ɵɵlistener"]("click",(function(t){i["ɵɵrestoreView"](e);const a=i["ɵɵnextContext"]();return i["ɵɵresetView"](a.selectPage(a.totalPages,t))})),i["ɵɵelementContainer"](2,13),i["ɵɵelementEnd"]()()}if(2&e){const e=i["ɵɵnextContext"](),t=i["ɵɵreference"](15);i["ɵɵclassProp"]("disabled",e.noNext()||e.disabled),i["ɵɵadvance"](2),i["ɵɵproperty"]("ngTemplateOutlet",e.customLastTemplate||t)("ngTemplateOutletContext",i["ɵɵpureFunction2"](4,r,e.noNext()||e.disabled,e.page))}}function d(e,t){if(1&e&&i["ɵɵtext"](0),2&e){const e=t.$implicit;i["ɵɵtextInterpolate"](e.text)}}function f(e,t){if(1&e&&i["ɵɵtext"](0),2&e){const e=i["ɵɵnextContext"]();i["ɵɵtextInterpolate"](e.getText("next"))}}function x(e,t){if(1&e&&i["ɵɵtext"](0),2&e){const e=i["ɵɵnextContext"]();i["ɵɵtextInterpolate"](e.getText("previous"))}}function P(e,t){if(1&e&&i["ɵɵtext"](0),2&e){const e=i["ɵɵnextContext"]();i["ɵɵtextInterpolate"](e.getText("first"))}}function T(e,t){if(1&e&&i["ɵɵtext"](0),2&e){const e=i["ɵɵnextContext"]();i["ɵɵtextInterpolate"](e.getText("last"))}}class v{constructor(){this.main={itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",pageBtnClass:"",rotate:!0},this.pager={itemsPerPage:15,previousText:"« Previous",nextText:"Next »",pageBtnClass:"",align:!0}}static#e=this.ɵfac=function(e){return new(e||v)};static#t=this.ɵprov=i["ɵɵdefineInjectable"]({token:v,factory:v.ɵfac,providedIn:"root"})}("undefined"==typeof ngDevMode||ngDevMode)&&i["ɵsetClassMetadata"](v,[{type:i.Injectable,args:[{providedIn:"root"}]}],null,null);const C={provide:n.NG_VALUE_ACCESSOR,useExisting:(0,i.forwardRef)((()=>y)),multi:!0};class y{constructor(e,t,a){this.elementRef=e,this.changeDetection=a,this.align=!1,this.boundaryLinks=!1,this.directionLinks=!0,this.firstText="First",this.previousText="« Previous",this.nextText="Next »",this.lastText="Last",this.rotate=!0,this.pageBtnClass="",this.disabled=!1,this.numPages=new i.EventEmitter,this.pageChanged=new i.EventEmitter,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.classMap="",this.inited=!1,this._itemsPerPage=15,this._totalItems=0,this._totalPages=0,this._page=1,this.elementRef=e,this.config||this.configureOptions(Object.assign({},t.main,t.pager))}get itemsPerPage(){return this._itemsPerPage}set itemsPerPage(e){this._itemsPerPage=e,this.totalPages=this.calculateTotalPages()}get totalItems(){return this._totalItems}set totalItems(e){this._totalItems=e,this.totalPages=this.calculateTotalPages()}get totalPages(){return this._totalPages}set totalPages(e){this._totalPages=e,this.numPages.emit(e),this.inited&&this.selectPage(this.page)}get page(){return this._page}set page(e){const t=this._page;this._page=e>this.totalPages?this.totalPages:e||1,this.changeDetection.markForCheck(),t!==this._page&&void 0!==t&&this.pageChanged.emit({page:this._page,itemsPerPage:this.itemsPerPage})}configureOptions(e){this.config=Object.assign({},e)}ngOnInit(){"undefined"!=typeof window&&(this.classMap=this.elementRef.nativeElement.getAttribute("class")||""),void 0===this.maxSize&&(this.maxSize=this.config?.maxSize||0),void 0===this.rotate&&(this.rotate=!!this.config?.rotate),void 0===this.boundaryLinks&&(this.boundaryLinks=!!this.config?.boundaryLinks),void 0===this.directionLinks&&(this.directionLinks=!!this.config?.directionLinks),void 0===this.pageBtnClass&&(this.pageBtnClass=this.config?.pageBtnClass||""),void 0===this.itemsPerPage&&(this.itemsPerPage=this.config?.itemsPerPage||0),this.totalPages=this.calculateTotalPages(),this.pages=this.getPages(this.page,this.totalPages),this.inited=!0}writeValue(e){this.page=e,this.pages=this.getPages(this.page,this.totalPages)}getText(e){return this[`${e}Text`]||this.config[`${e}Text`]}noPrevious(){return 1===this.page}noNext(){return this.page===this.totalPages}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}selectPage(e,t){if(t&&t.preventDefault(),!this.disabled){if(t&&t.target){t.target.blur()}this.writeValue(e),this.onChange(this.page)}}makePage(e,t,a){return{text:t,number:e,active:a}}getPages(e,t){const a=[];let i=1,n=t;const s=void 0!==this.maxSize&&this.maxSize<t;s&&this.maxSize&&(this.rotate?(i=Math.max(e-Math.floor(this.maxSize/2),1),n=i+this.maxSize-1,n>t&&(n=t,i=n-this.maxSize+1)):(i=(Math.ceil(e/this.maxSize)-1)*this.maxSize+1,n=Math.min(i+this.maxSize-1,t)));for(let t=i;t<=n;t++){const i=this.makePage(t,t.toString(),t===e);a.push(i)}if(s&&!this.rotate){if(i>1){const e=this.makePage(i-1,"...",!1);a.unshift(e)}if(n<t){const e=this.makePage(n+1,"...",!1);a.push(e)}}return a}calculateTotalPages(){const e=this.itemsPerPage<1?1:Math.ceil(this.totalItems/this.itemsPerPage);return Math.max(e||0,1)}static#e=this.ɵfac=function(e){return new(e||y)(i["ɵɵdirectiveInject"](i.ElementRef),i["ɵɵdirectiveInject"](v),i["ɵɵdirectiveInject"](i.ChangeDetectorRef))};static#t=this.ɵcmp=i["ɵɵdefineComponent"]({type:y,selectors:[["pager"]],inputs:{align:"align",maxSize:"maxSize",boundaryLinks:"boundaryLinks",directionLinks:"directionLinks",firstText:"firstText",previousText:"previousText",nextText:"nextText",lastText:"lastText",rotate:"rotate",pageBtnClass:"pageBtnClass",disabled:"disabled",itemsPerPage:"itemsPerPage",totalItems:"totalItems"},outputs:{numPages:"numPages",pageChanged:"pageChanged"},features:[i["ɵɵProvidersFeature"]([C])],decls:7,vars:24,consts:[[1,"pager"],[3,"ngClass"],["href","",3,"click"]],template:function(e,t){1&e&&(i["ɵɵelementStart"](0,"ul",0)(1,"li",1)(2,"a",2),i["ɵɵlistener"]("click",(function(e){return t.selectPage(t.page-1,e)})),i["ɵɵtext"](3),i["ɵɵelementEnd"]()(),i["ɵɵelementStart"](4,"li",1)(5,"a",2),i["ɵɵlistener"]("click",(function(e){return t.selectPage(t.page+1,e)})),i["ɵɵtext"](6),i["ɵɵelementEnd"]()()()),2&e&&(i["ɵɵadvance"](),i["ɵɵclassMap"](t.pageBtnClass),i["ɵɵclassProp"]("disabled",t.noPrevious())("previous",t.align),i["ɵɵproperty"]("ngClass",i["ɵɵpureFunction2"](18,l,t.align,t.align)),i["ɵɵadvance"](2),i["ɵɵtextInterpolate"](t.getText("previous")),i["ɵɵadvance"](),i["ɵɵclassMap"](t.pageBtnClass),i["ɵɵclassProp"]("disabled",t.noNext())("next",t.align),i["ɵɵproperty"]("ngClass",i["ɵɵpureFunction2"](21,o,t.align,t.align)),i["ɵɵadvance"](2),i["ɵɵtextInterpolate"](t.getText("next")))},dependencies:[s.NgClass],encapsulation:2})}("undefined"==typeof ngDevMode||ngDevMode)&&i["ɵsetClassMetadata"](y,[{type:i.Component,args:[{selector:"pager",providers:[C],template:'<ul class="pager">\n  <li [class.disabled]="noPrevious()" [class.previous]="align"\n      [ngClass]="{\'pull-left\': align, \'float-left\': align}"\n      class="{{ pageBtnClass }}">\n    <a href (click)="selectPage(page - 1, $event)">{{ getText(\'previous\') }}</a>\n  </li>\n  <li [class.disabled]="noNext()" [class.next]="align"\n      [ngClass]="{\'pull-right\': align, \'float-right\': align}"\n      class="{{ pageBtnClass }}">\n    <a href (click)="selectPage(page + 1, $event)">{{ getText(\'next\') }}</a>\n  </li>\n</ul>\n'}]}],(()=>[{type:i.ElementRef},{type:v},{type:i.ChangeDetectorRef}]),{align:[{type:i.Input}],maxSize:[{type:i.Input}],boundaryLinks:[{type:i.Input}],directionLinks:[{type:i.Input}],firstText:[{type:i.Input}],previousText:[{type:i.Input}],nextText:[{type:i.Input}],lastText:[{type:i.Input}],rotate:[{type:i.Input}],pageBtnClass:[{type:i.Input}],disabled:[{type:i.Input}],numPages:[{type:i.Output}],pageChanged:[{type:i.Output}],itemsPerPage:[{type:i.Input}],totalItems:[{type:i.Input}]});const b={provide:n.NG_VALUE_ACCESSOR,useExisting:(0,i.forwardRef)((()=>I)),multi:!0};class I{constructor(e,t,a){this.elementRef=e,this.changeDetection=a,this.align=!0,this.boundaryLinks=!1,this.directionLinks=!0,this.rotate=!0,this.pageBtnClass="",this.disabled=!1,this.numPages=new i.EventEmitter,this.pageChanged=new i.EventEmitter,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.classMap="",this.inited=!1,this._itemsPerPage=10,this._totalItems=0,this._totalPages=0,this._page=1,this.elementRef=e,this.config||this.configureOptions(t.main)}get itemsPerPage(){return this._itemsPerPage}set itemsPerPage(e){this._itemsPerPage=e,this.totalPages=this.calculateTotalPages()}get totalItems(){return this._totalItems}set totalItems(e){this._totalItems=e,this.totalPages=this.calculateTotalPages()}get totalPages(){return this._totalPages}set totalPages(e){this._totalPages=e,this.numPages.emit(e),this.inited&&this.selectPage(this.page)}get page(){return this._page}set page(e){const t=this._page;this._page=e>this.totalPages?this.totalPages:e||1,this.changeDetection.markForCheck(),t!==this._page&&void 0!==t&&this.pageChanged.emit({page:this._page,itemsPerPage:this.itemsPerPage})}configureOptions(e){this.config=Object.assign({},e)}ngOnInit(){"undefined"!=typeof window&&(this.classMap=this.elementRef.nativeElement.getAttribute("class")||""),void 0===this.maxSize&&(this.maxSize=this.config?.maxSize||0),void 0===this.rotate&&(this.rotate=!!this.config?.rotate),void 0===this.boundaryLinks&&(this.boundaryLinks=!!this.config?.boundaryLinks),void 0===this.directionLinks&&(this.directionLinks=!!this.config?.directionLinks),void 0===this.pageBtnClass&&(this.pageBtnClass=this.config?.pageBtnClass||""),void 0===this.itemsPerPage&&(this.itemsPerPage=this.config?.itemsPerPage||0),this.totalPages=this.calculateTotalPages(),this.pages=this.getPages(this.page,this.totalPages),this.inited=!0}writeValue(e){this.page=e,this.pages=this.getPages(this.page,this.totalPages)}getText(e){return this[`${e}Text`]||this.config[`${e}Text`]}noPrevious(){return 1===this.page}noNext(){return this.page===this.totalPages}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}selectPage(e,t){if(t&&t.preventDefault(),!this.disabled){if(t&&t.target){t.target.blur()}this.writeValue(e),this.onChange(this.page)}}makePage(e,t,a){return{text:t,number:e,active:a}}getPages(e,t){const a=[];let i=1,n=t;const s=void 0!==this.maxSize&&this.maxSize<t;s&&this.maxSize&&(this.rotate?(i=Math.max(e-Math.floor(this.maxSize/2),1),n=i+this.maxSize-1,n>t&&(n=t,i=n-this.maxSize+1)):(i=(Math.ceil(e/this.maxSize)-1)*this.maxSize+1,n=Math.min(i+this.maxSize-1,t)));for(let t=i;t<=n;t++){const i=this.makePage(t,t.toString(),t===e);a.push(i)}if(s&&!this.rotate){if(i>1){const e=this.makePage(i-1,"...",!1);a.unshift(e)}if(n<t){const e=this.makePage(n+1,"...",!1);a.push(e)}}return a}calculateTotalPages(){const e=this.itemsPerPage<1?1:Math.ceil(this.totalItems/this.itemsPerPage);return Math.max(e||0,1)}static#e=this.ɵfac=function(e){return new(e||I)(i["ɵɵdirectiveInject"](i.ElementRef),i["ɵɵdirectiveInject"](v),i["ɵɵdirectiveInject"](i.ChangeDetectorRef))};static#t=this.ɵcmp=i["ɵɵdefineComponent"]({type:I,selectors:[["pagination"]],inputs:{align:"align",maxSize:"maxSize",boundaryLinks:"boundaryLinks",directionLinks:"directionLinks",firstText:"firstText",previousText:"previousText",nextText:"nextText",lastText:"lastText",rotate:"rotate",pageBtnClass:"pageBtnClass",disabled:"disabled",customPageTemplate:"customPageTemplate",customNextTemplate:"customNextTemplate",customPreviousTemplate:"customPreviousTemplate",customFirstTemplate:"customFirstTemplate",customLastTemplate:"customLastTemplate",itemsPerPage:"itemsPerPage",totalItems:"totalItems"},outputs:{numPages:"numPages",pageChanged:"pageChanged"},features:[i["ɵɵProvidersFeature"]([b])],decls:16,vars:6,consts:[["defaultPageTemplate",""],["defaultNextTemplate",""],["defaultPreviousTemplate",""],["defaultFirstTemplate",""],["defaultLastTemplate",""],[1,"pagination",3,"ngClass"],["class","pagination-first page-item",3,"disabled",4,"ngIf"],["class","pagination-prev page-item",3,"disabled",4,"ngIf"],["class","pagination-page page-item",3,"active","disabled",4,"ngFor","ngForOf"],["class","pagination-next page-item",3,"disabled",4,"ngIf"],["class","pagination-last page-item",3,"disabled",4,"ngIf"],[1,"pagination-first","page-item"],["href","",1,"page-link",3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"pagination-prev","page-item"],[1,"pagination-page","page-item"],[1,"pagination-next","page-item"],[1,"pagination-last","page-item"]],template:function(e,t){1&e&&(i["ɵɵelementStart"](0,"ul",5),i["ɵɵtemplate"](1,p,3,7,"li",6)(2,c,3,7,"li",7)(3,u,3,10,"li",8)(4,m,3,7,"li",9)(5,h,3,7,"li",10),i["ɵɵelementEnd"](),i["ɵɵtemplate"](6,d,1,1,"ng-template",null,0,i["ɵɵtemplateRefExtractor"])(8,f,1,1,"ng-template",null,1,i["ɵɵtemplateRefExtractor"])(10,x,1,1,"ng-template",null,2,i["ɵɵtemplateRefExtractor"])(12,P,1,1,"ng-template",null,3,i["ɵɵtemplateRefExtractor"])(14,T,1,1,"ng-template",null,4,i["ɵɵtemplateRefExtractor"])),2&e&&(i["ɵɵproperty"]("ngClass",t.classMap),i["ɵɵadvance"](),i["ɵɵproperty"]("ngIf",t.boundaryLinks),i["ɵɵadvance"](),i["ɵɵproperty"]("ngIf",t.directionLinks),i["ɵɵadvance"](),i["ɵɵproperty"]("ngForOf",t.pages),i["ɵɵadvance"](),i["ɵɵproperty"]("ngIf",t.directionLinks),i["ɵɵadvance"](),i["ɵɵproperty"]("ngIf",t.boundaryLinks))},dependencies:[s.NgClass,s.NgForOf,s.NgIf,s.NgTemplateOutlet],encapsulation:2})}("undefined"==typeof ngDevMode||ngDevMode)&&i["ɵsetClassMetadata"](I,[{type:i.Component,args:[{selector:"pagination",providers:[b],template:'<ul class="pagination" [ngClass]="classMap">\n  <li class="pagination-first page-item"\n      *ngIf="boundaryLinks"\n      [class.disabled]="noPrevious() || disabled">\n    <a class="page-link" href (click)="selectPage(1, $event)">\n      <ng-container [ngTemplateOutlet]="customFirstTemplate || defaultFirstTemplate"\n                   [ngTemplateOutletContext]="{disabled: noPrevious() || disabled, currentPage: page}">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class="pagination-prev page-item"\n      *ngIf="directionLinks"\n      [class.disabled]="noPrevious() || disabled">\n    <a class="page-link" href (click)="selectPage(page - 1, $event)">\n      <ng-container [ngTemplateOutlet]="customPreviousTemplate || defaultPreviousTemplate"\n                   [ngTemplateOutletContext]="{disabled: noPrevious() || disabled, currentPage: page}">\n      </ng-container>\n    </a>\n  </li>\n\n  <li *ngFor="let pg of pages"\n      [class.active]="pg.active"\n      [class.disabled]="disabled && !pg.active"\n      class="pagination-page page-item">\n    <a class="page-link" href (click)="selectPage(pg.number, $event)">\n      <ng-container [ngTemplateOutlet]="customPageTemplate || defaultPageTemplate"\n                   [ngTemplateOutletContext]="{disabled: disabled, $implicit: pg, currentPage: page}">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class="pagination-next page-item"\n      *ngIf="directionLinks"\n      [class.disabled]="noNext() || disabled">\n    <a class="page-link" href (click)="selectPage(page + 1, $event)">\n      <ng-container [ngTemplateOutlet]="customNextTemplate || defaultNextTemplate"\n                   [ngTemplateOutletContext]="{disabled: noNext() || disabled, currentPage: page}">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class="pagination-last page-item"\n      *ngIf="boundaryLinks"\n      [class.disabled]="noNext() || disabled">\n    <a class="page-link" href (click)="selectPage(totalPages, $event)">\n      <ng-container [ngTemplateOutlet]="customLastTemplate || defaultLastTemplate"\n                   [ngTemplateOutletContext]="{disabled: noNext() || disabled, currentPage: page}">\n      </ng-container>\n    </a>\n  </li>\n</ul>\n\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\n\n<ng-template #defaultNextTemplate>{{ getText(\'next\') }}</ng-template>\n\n<ng-template #defaultPreviousTemplate>{{ getText(\'previous\') }}</ng-template>\n\n<ng-template #defaultFirstTemplate>{{ getText(\'first\') }}</ng-template>\n\n<ng-template #defaultLastTemplate>{{ getText(\'last\') }}</ng-template>\n'}]}],(()=>[{type:i.ElementRef},{type:v},{type:i.ChangeDetectorRef}]),{align:[{type:i.Input}],maxSize:[{type:i.Input}],boundaryLinks:[{type:i.Input}],directionLinks:[{type:i.Input}],firstText:[{type:i.Input}],previousText:[{type:i.Input}],nextText:[{type:i.Input}],lastText:[{type:i.Input}],rotate:[{type:i.Input}],pageBtnClass:[{type:i.Input}],disabled:[{type:i.Input}],customPageTemplate:[{type:i.Input}],customNextTemplate:[{type:i.Input}],customPreviousTemplate:[{type:i.Input}],customFirstTemplate:[{type:i.Input}],customLastTemplate:[{type:i.Input}],numPages:[{type:i.Output}],pageChanged:[{type:i.Output}],itemsPerPage:[{type:i.Input}],totalItems:[{type:i.Input}]});class k{static forRoot(){return{ngModule:k,providers:[]}}static#e=this.ɵfac=function(e){return new(e||k)};static#t=this.ɵmod=i["ɵɵdefineNgModule"]({type:k,declarations:[y,I],imports:[s.CommonModule],exports:[y,I]});static#a=this.ɵinj=i["ɵɵdefineInjector"]({imports:[s.CommonModule]})}("undefined"==typeof ngDevMode||ngDevMode)&&i["ɵsetClassMetadata"](k,[{type:i.NgModule,args:[{imports:[s.CommonModule],declarations:[y,I],exports:[y,I]}]}],null,null)}}]);