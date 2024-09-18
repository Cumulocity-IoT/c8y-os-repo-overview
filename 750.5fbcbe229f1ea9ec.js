"use strict";(self.webpackChunkc8y_os_repo_overview=self.webpackChunkc8y_os_repo_overview||[]).push([[750],{60750:(e,r,t)=>{t.r(r),t.d(r,{FormlyJsonschema:()=>d});var i=t(52383),s=t(29723),n=t(38011),o=t(96806);function a(e){return""===e||null==e}function l(e){return null!=e&&"object"==typeof e&&!Array.isArray(e)}function u(e){return Number.isInteger?Number.isInteger(e):"number"==typeof e&&Math.floor(e)===e}function p(e){return"object"==typeof e&&(e.hasOwnProperty("const")||e.enum&&1===e.enum.length)}function m(e){if(!e.fieldGroup)return(0,n["ɵhasKey"])(e)&&void 0!==(0,n["ɵgetFieldValue"])(e)?1:0;const r=e.fieldGroup.reduce(((e,r)=>m(r)+e),0);if(0===r&&(0,n["ɵhasKey"])(e)){const r=(0,n["ɵgetFieldValue"])(e);if(null===r||void 0!==r&&(e.fieldArray&&Array.isArray(r)||!e.fieldArray&&l(r)))return 1}return r}class d{toFieldConfig(e,r){return this._toFieldConfig(e,{schema:e,...r||{}})}_toFieldConfig(e,{key:r,...t}){e=this.resolveSchema(e,t);const i=this.guessSchemaType(e);let s={type:i[0],defaultValue:e.default,props:{label:e.title,readonly:e.readOnly,description:e.description}};switch(null!=r&&(s.key=r),t.ignoreDefault||!e.readOnly&&!t.readOnly||(s.props.disabled=!0,t={...t,readOnly:!0}),t.resetOnHide&&(s.resetOnHide=!0),r&&t.strict&&this.addValidator(s,"type",((e,r)=>{const t=(0,n["ɵgetFieldValue"])(r);if(null!=t)switch(s.type){case"string":return"string"==typeof t;case"integer":return u(t);case"number":return"number"==typeof t;case"object":return l(t);case"array":return Array.isArray(t)}return!0})),!1===t.shareFormControl&&(s.shareFormControl=!1),t.ignoreDefault&&delete s.defaultValue,this.addValidator(s,"type",{schemaType:i,expression:({value:e})=>{if(void 0===e)return!0;if(null===e&&-1!==i.indexOf("null"))return!0;switch(i[0]){case"null":return null===typeof e;case"string":return"string"==typeof e;case"integer":return u(e);case"number":return"number"==typeof e;case"object":return l(e);case"array":return Array.isArray(e)}return!0}}),s.type){case"number":case"integer":s.parsers=[e=>a(e)?void 0:Number(e)],e.hasOwnProperty("minimum")&&(s.props.min=e.minimum),e.hasOwnProperty("maximum")&&(s.props.max=e.maximum),e.hasOwnProperty("exclusiveMinimum")&&(s.props.exclusiveMinimum=e.exclusiveMinimum,this.addValidator(s,"exclusiveMinimum",(({value:r})=>a(r)||r>e.exclusiveMinimum))),e.hasOwnProperty("exclusiveMaximum")&&(s.props.exclusiveMaximum=e.exclusiveMaximum,this.addValidator(s,"exclusiveMaximum",(({value:r})=>a(r)||r<e.exclusiveMaximum))),e.hasOwnProperty("multipleOf")&&(s.props.step=e.multipleOf,this.addValidator(s,"multipleOf",(({value:r})=>{if(a(r)||"number"!=typeof r||0===r||e.multipleOf<=0)return!0;const t=Math.pow(10,function(e){if(!isFinite(e))return 0;let r=1,t=0;for(;Math.round(e*r)/r!==e;)r*=10,t++;return t}(e.multipleOf));return Math.round(r*t)%Math.round(e.multipleOf*t)==0})));break;case"string":s.parsers=[e=>(-1!==i.indexOf("null")?e=a(e)?null:e:s.props.required||(e=""===e?void 0:e),e)],["minLength","maxLength","pattern"].forEach((r=>{e.hasOwnProperty(r)&&(s.props[r]=e[r])}));break;case"object":{s.fieldGroup||(s.fieldGroup=[]);const{propDeps:r,schemaDeps:i}=this.resolveDependencies(e);Object.keys(e.properties||{}).forEach((n=>{const o=Array.isArray(e.required)&&-1!==e.required.indexOf(n),l=this._toFieldConfig(e.properties[n],{...t,key:n,isOptional:t.isOptional||!o});if(s.fieldGroup.push(l),(o||r[n])&&(l.expressions={...l.expressions||{},"props.required":t=>{let i=t.parent;const s=t.fieldGroup&&null!=t.key?i.model:t.model;for(;null==i.key&&i.parent;)i=i.parent;const o=!(!i||!i.props)&&i.props.required;return!(!s&&!o)&&(!(!Array.isArray(e.required)||-1===e.required.indexOf(n))||r[n]&&t.model&&r[n].some((e=>!a(t.model[e]))))}}),i[n]){const e=e=>e.hasOwnProperty("const")?e.const:e.enum[0],r=i[n].oneOf;r&&r.every((e=>e.properties&&e.properties[n]&&p(e.properties[n])))?r.forEach((r=>{const{[n]:i,...o}=r.properties;s.fieldGroup.push({...this._toFieldConfig({...r,properties:o},{...t,resetOnHide:!0}),expressions:{hide:r=>!r.model||e(i)!==r.model[n]}})})):s.fieldGroup.push({...this._toFieldConfig(i[n],t),expressions:{hide:e=>!e.model||a(e.model[n])}})}})),e.oneOf&&s.fieldGroup.push(this.resolveMultiSchema("oneOf",e.oneOf,{...t,shareFormControl:!1})),e.anyOf&&s.fieldGroup.push(this.resolveMultiSchema("anyOf",e.anyOf,t));break}case"array":e.hasOwnProperty("minItems")&&(s.props.minItems=e.minItems,this.addValidator(s,"minItems",((r,t)=>{const i=(0,n["ɵgetFieldValue"])(t);return a(i)||i.length>=e.minItems})),!t.isOptional&&e.minItems>0&&void 0===s.defaultValue&&(s.defaultValue=Array.from(new Array(e.minItems)))),e.hasOwnProperty("maxItems")&&(s.props.maxItems=e.maxItems,this.addValidator(s,"maxItems",((r,t)=>{const i=(0,n["ɵgetFieldValue"])(t);return a(i)||i.length<=e.maxItems}))),e.hasOwnProperty("uniqueItems")&&(s.props.uniqueItems=e.uniqueItems,this.addValidator(s,"uniqueItems",((r,t)=>{const i=(0,n["ɵgetFieldValue"])(t);if(a(i)||!e.uniqueItems)return!0;return Array.from(new Set(i.map((e=>JSON.stringify(e))))).length===i.length}))),e.items&&!Array.isArray(e.items)&&(e.items=this.resolveSchema(e.items,t)),this.isEnum(e)||(s.fieldArray=r=>{if(!Array.isArray(e.items)){const r=e.items?this._toFieldConfig(e.items,t):{};return r.props&&(r.props.required=!0),r}const i=r.fieldGroup?r.fieldGroup.length:0,s=e.items[i]?e.items[i]:e.additionalItems,n=s?this._toFieldConfig(s,t):{};return n.props&&(n.props.required=!0),e.items[i]&&(n.props.removable=!1),n})}return e.hasOwnProperty("const")&&(s.props.const=e.const,this.addValidator(s,"const",(({value:r})=>r===e.const)),s.type||(s.defaultValue=e.const)),this.isEnum(e)&&(s.props.multiple="array"===s.type,s.type="enum",s.props.options=this.toEnumOptions(e)),e.oneOf&&!s.type&&(delete s.key,s.fieldGroup=[this.resolveMultiSchema("oneOf",e.oneOf,{...t,key:r,shareFormControl:!1})]),e.oneOf&&!s.type&&(delete s.key,s.fieldGroup=[this.resolveMultiSchema("oneOf",e.oneOf,{...t,key:r,shareFormControl:!1})]),e.widget?.formlyConfig&&(s=this.mergeFields(s,e.widget.formlyConfig)),s.templateOptions=s.props,t.map?t.map(s,e):s}resolveSchema(e,r){return e&&e.$ref&&(e=this.resolveDefinition(e,r)),e&&e.allOf&&(e=this.resolveAllOf(e,r)),e}resolveAllOf({allOf:e,...r},t){if(!e.length)throw Error(`allOf array can not be empty ${e}.`);return e.reduce(((e,r)=>(r=this.resolveSchema(r,t),e.required&&r.required&&(e.required=[...e.required,...r.required]),r.uniqueItems&&(e.uniqueItems=r.uniqueItems),["maxLength","maximum","exclusiveMaximum","maxItems","maxProperties"].forEach((t=>{a(e[t])||a(r[t])||(e[t]=e[t]<r[t]?e[t]:r[t])})),["minLength","minimum","exclusiveMinimum","minItems","minProperties"].forEach((t=>{a(e[t])||a(r[t])||(e[t]=e[t]>r[t]?e[t]:r[t])})),(0,n["ɵreverseDeepMerge"])(e,r))),r)}resolveMultiSchema(e,r,t){return{type:"multischema",fieldGroup:[{type:"enum",defaultValue:-1,props:{multiple:"anyOf"===e,options:r.map(((e,r)=>({label:e.title,value:r,disabled:e.readOnly})))},hooks:{onInit:e=>e.formControl.valueChanges.pipe((0,o.M)((()=>e.options.detectChanges(e.parent))))}},{fieldGroup:r.map(((i,s)=>({...this._toFieldConfig(i,{...t,resetOnHide:!0}),expressions:{hide:(i,n)=>{const o=i.parent.parent.fieldGroup[0].formControl;if(-1===o.value||n){let s=i.parent.fieldGroup.map(((e,i)=>[e,i,this.isFieldValid(e,i,r,t)])).sort((([e,,r],[t,,i])=>{if(r!==i)return i?1:-1;const s=m(e),n=m(t);return s===n&&e.props.disabled===t.props.disabled?0:n>s?1:-1})).map((([,e])=>e));if("anyOf"===e){const e=s.filter((e=>m(i.parent.fieldGroup[e])));s=e.length>0?e:[s[0]||0]}s=s.length>0?s:[0],o.setValue("anyOf"===e?s:s[0])}return Array.isArray(o.value)?-1===o.value.indexOf(s):o.value!==s}}})))}]}}resolveDefinition(e,r){const[t,i]=e.$ref.split("#/");if(t)throw Error(`Remote schemas for ${e.$ref} not supported yet.`);const s=i?i.split("/").reduce(((e,r)=>e?.hasOwnProperty(r)?e[r]:null),r.schema):null;if(!s)throw Error(`Cannot find a definition for ${e.$ref}.`);return s.$ref?this.resolveDefinition(s,r):{...s,...["title","description","default","widget"].reduce(((r,t)=>(e.hasOwnProperty(t)&&(r[t]=e[t]),r)),{})}}resolveDependencies(e){const r={},t={};return Object.keys(e.dependencies||{}).forEach((i=>{const s=e.dependencies[i];Array.isArray(s)?s.forEach((e=>{r[e]?r[e].push(i):r[e]=[i]})):t[i]=s})),{propDeps:r,schemaDeps:t}}guessSchemaType(e){const r=e?.type;return!r&&e?.properties?["object"]:Array.isArray(r)?1===r.length?r:2===r.length&&-1!==r.indexOf("null")?r.sort((e=>"null"==e?1:-1)):r:r?[r]:[]}addValidator(e,r,t){e.validators=e.validators||{},e.validators[r]=t}isEnum(e){return!!e.enum||e.anyOf&&e.anyOf.every(p)||e.oneOf&&e.oneOf.every(p)||e.uniqueItems&&e.items&&!Array.isArray(e.items)&&this.isEnum(e.items)}toEnumOptions(e){if(e.enum)return e.enum.map((e=>({value:e,label:e})));const r=e=>{const r=e.hasOwnProperty("const")?e.const:e.enum[0],t={value:r,label:e.title||r};return e.readOnly&&(t.disabled=!0),t};return e.anyOf?e.anyOf.map(r):e.oneOf?e.oneOf.map(r):this.toEnumOptions(e.items)}isFieldValid(e,r,t,i){e._schemasFields||(Object.defineProperty(e,"_schemasFields",{enumerable:!1,writable:!0,configurable:!0}),e._schemasFields={});let o=e._schemasFields[r];const a=e.model?(0,n["ɵclone"])(e.model):e.fieldArray?[]:{};return o?(o.model=a,e.options.build(o)):o=e._schemasFields[r]=e.options.build({form:Array.isArray(a)?new s.FormArray([]):new s.FormGroup({}),fieldGroup:[this._toFieldConfig(t[r],{...i,resetOnHide:!0,ignoreDefault:!0,map:null,strict:!0})],model:a,options:{}}),o.form.valid}mergeFields(e,r){for(let t in r){const i="templateOptions"===t?"props":t;l(e[i])&&l(r[t])?e[i]=this.mergeFields(e[i],r[t]):null!=r[t]&&(e[i]=r[t])}return e}}d.ɵfac=function(e){return new(e||d)},d.ɵprov=i["ɵɵdefineInjectable"]({token:d,factory:d.ɵfac,providedIn:"root"}),("undefined"==typeof ngDevMode||ngDevMode)&&i["ɵsetClassMetadata"](d,[{type:i.Injectable,args:[{providedIn:"root"}]}],null,null)}}]);