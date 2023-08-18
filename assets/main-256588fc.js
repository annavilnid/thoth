function Yp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Uv(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Jp={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wi=Symbol.for("react.element"),Wv=Symbol.for("react.portal"),Vv=Symbol.for("react.fragment"),Kv=Symbol.for("react.strict_mode"),Gv=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),Xv=Symbol.for("react.forward_ref"),Yv=Symbol.for("react.suspense"),Jv=Symbol.for("react.memo"),Zv=Symbol.for("react.lazy"),ld=Symbol.iterator;function ey(e){return e===null||typeof e!="object"?null:(e=ld&&e[ld]||e["@@iterator"],typeof e=="function"?e:null)}var Zp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eh=Object.assign,th={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=th,this.updater=n||Zp}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nh(){}nh.prototype=Ar.prototype;function Hu(e,t,n){this.props=e,this.context=t,this.refs=th,this.updater=n||Zp}var Bu=Hu.prototype=new nh;Bu.constructor=Hu;eh(Bu,Ar.prototype);Bu.isPureReactComponent=!0;var ud=Array.isArray,rh=Object.prototype.hasOwnProperty,Uu={current:null},ih={key:!0,ref:!0,__self:!0,__source:!0};function oh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)rh.call(t,r)&&!ih.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Wi,type:e,key:o,ref:a,props:i,_owner:Uu.current}}function ty(e,t){return{$$typeof:Wi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wi}function ny(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var cd=/\/+/g;function ps(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ny(""+e.key):t.toString(36)}function ko(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Wi:case Wv:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ps(a,0):r,ud(i)?(n="",e!=null&&(n=e.replace(cd,"$&/")+"/"),ko(i,t,n,"",function(u){return u})):i!=null&&(Wu(i)&&(i=ty(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(cd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",ud(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+ps(o,s);a+=ko(o,t,n,l,i)}else if(l=ey(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+ps(o,s++),a+=ko(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ji(e,t,n){if(e==null)return e;var r=[],i=0;return ko(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ry(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},bo={transition:null},iy={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:bo,ReactCurrentOwner:Uu};X.Children={map:Ji,forEach:function(e,t,n){Ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ji(e,function(){t++}),t},toArray:function(e){return Ji(e,function(t){return t})||[]},only:function(e){if(!Wu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Ar;X.Fragment=Vv;X.Profiler=Gv;X.PureComponent=Hu;X.StrictMode=Kv;X.Suspense=Yv;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=eh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Uu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)rh.call(t,l)&&!ih.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Wi,type:e.type,key:i,ref:o,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:Qv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qv,_context:e},e.Consumer=e};X.createElement=oh;X.createFactory=function(e){var t=oh.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:Xv,render:e}};X.isValidElement=Wu;X.lazy=function(e){return{$$typeof:Zv,_payload:{_status:-1,_result:e},_init:ry}};X.memo=function(e,t){return{$$typeof:Jv,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=bo.transition;bo.transition={};try{e()}finally{bo.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return De.current.useCallback(e,t)};X.useContext=function(e){return De.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return De.current.useDeferredValue(e)};X.useEffect=function(e,t){return De.current.useEffect(e,t)};X.useId=function(){return De.current.useId()};X.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return De.current.useMemo(e,t)};X.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};X.useRef=function(e){return De.current.useRef(e)};X.useState=function(e){return De.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return De.current.useTransition()};X.version="18.2.0";Jp.exports=X;var T=Jp.exports;const ft=Fu(T),oy=Yp({__proto__:null,default:ft},[T]);var ah={exports:{}},_a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay=T,sy=Symbol.for("react.element"),ly=Symbol.for("react.fragment"),uy=Object.prototype.hasOwnProperty,cy=ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dy={key:!0,ref:!0,__self:!0,__source:!0};function sh(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)uy.call(t,r)&&!dy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:sy,type:e,key:o,ref:a,props:i,_owner:cy.current}}_a.Fragment=ly;_a.jsx=sh;_a.jsxs=sh;ah.exports=_a;var h=ah.exports,cl={},lh={exports:{}},Je={},uh={exports:{}},ch={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,N){var F=L.length;L.push(N);e:for(;0<F;){var Q=F-1>>>1,K=L[Q];if(0<i(K,N))L[Q]=N,L[F]=K,F=Q;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var N=L[0],F=L.pop();if(F!==N){L[0]=F;e:for(var Q=0,K=L.length,Ot=K>>>1;Q<Ot;){var $e=2*(Q+1)-1,Vt=L[$e],Ge=$e+1,Pt=L[Ge];if(0>i(Vt,F))Ge<K&&0>i(Pt,Vt)?(L[Q]=Pt,L[Ge]=F,Q=Ge):(L[Q]=Vt,L[$e]=F,Q=$e);else if(Ge<K&&0>i(Pt,F))L[Q]=Pt,L[Ge]=F,Q=Ge;else break e}}return N}function i(L,N){var F=L.sortIndex-N.sortIndex;return F!==0?F:L.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,c=null,f=3,y=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=L)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function x(L){if(w=!1,m(L),!v)if(n(l)!==null)v=!0,B(b);else{var N=n(u);N!==null&&W(x,N.startTime-L)}}function b(L,N){v=!1,w&&(w=!1,g(E),E=-1),y=!0;var F=f;try{for(m(N),c=n(l);c!==null&&(!(c.expirationTime>N)||L&&!A());){var Q=c.callback;if(typeof Q=="function"){c.callback=null,f=c.priorityLevel;var K=Q(c.expirationTime<=N);N=e.unstable_now(),typeof K=="function"?c.callback=K:c===n(l)&&r(l),m(N)}else r(l);c=n(l)}if(c!==null)var Ot=!0;else{var $e=n(u);$e!==null&&W(x,$e.startTime-N),Ot=!1}return Ot}finally{c=null,f=F,y=!1}}var C=!1,P=null,E=-1,R=5,z=-1;function A(){return!(e.unstable_now()-z<R)}function H(){if(P!==null){var L=e.unstable_now();z=L;var N=!0;try{N=P(!0,L)}finally{N?D():(C=!1,P=null)}}else C=!1}var D;if(typeof p=="function")D=function(){p(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,j=$.port2;$.port1.onmessage=H,D=function(){j.postMessage(null)}}else D=function(){k(H,0)};function B(L){P=L,C||(C=!0,D())}function W(L,N){E=k(function(){L(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,B(b))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var F=f;f=N;try{return L()}finally{f=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,N){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var F=f;f=L;try{return N()}finally{f=F}},e.unstable_scheduleCallback=function(L,N,F){var Q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Q+F:Q):F=Q,L){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=F+K,L={id:d++,callback:N,priorityLevel:L,startTime:F,expirationTime:K,sortIndex:-1},F>Q?(L.sortIndex=F,t(u,L),n(l)===null&&L===n(u)&&(w?(g(E),E=-1):w=!0,W(x,F-Q))):(L.sortIndex=K,t(l,L),v||y||(v=!0,B(b))),L},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(L){var N=f;return function(){var F=f;f=N;try{return L.apply(this,arguments)}finally{f=F}}}})(ch);uh.exports=ch;var fy=uh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh=T,Ye=fy;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fh=new Set,wi={};function Bn(e,t){Sr(e,t),Sr(e+"Capture",t)}function Sr(e,t){for(wi[e]=t,e=0;e<t.length;e++)fh.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dl=Object.prototype.hasOwnProperty,py=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dd={},fd={};function hy(e){return dl.call(fd,e)?!0:dl.call(dd,e)?!1:py.test(e)?fd[e]=!0:(dd[e]=!0,!1)}function gy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function my(e,t,n,r){if(t===null||typeof t>"u"||gy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vu=/[\-:]([a-z])/g;function Ku(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vu,Ku);je[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vu,Ku);je[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vu,Ku);je[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gu(e,t,n,r){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(my(t,n,i,r)&&(n=null),r||i===null?hy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zi=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),qu=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),ph=Symbol.for("react.provider"),hh=Symbol.for("react.context"),Qu=Symbol.for("react.forward_ref"),pl=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),Xu=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),gh=Symbol.for("react.offscreen"),pd=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=pd&&e[pd]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,hs;function ni(e){if(hs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hs=t&&t[1]||""}return`
`+hs+e}var gs=!1;function ms(e,t){if(!e||gs)return"";gs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{gs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ni(e):""}function vy(e){switch(e.tag){case 5:return ni(e.type);case 16:return ni("Lazy");case 13:return ni("Suspense");case 19:return ni("SuspenseList");case 0:case 2:case 15:return e=ms(e.type,!1),e;case 11:return e=ms(e.type.render,!1),e;case 1:return e=ms(e.type,!0),e;default:return""}}function gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Yn:return"Portal";case fl:return"Profiler";case qu:return"StrictMode";case pl:return"Suspense";case hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hh:return(e.displayName||"Context")+".Consumer";case ph:return(e._context.displayName||"Context")+".Provider";case Qu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xu:return t=e.displayName||null,t!==null?t:gl(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return gl(e(t))}catch{}}return null}function yy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gl(t);case 8:return t===qu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wy(e){var t=mh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function eo(e){e._valueTracker||(e._valueTracker=wy(e))}function vh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yh(e,t){t=t.checked,t!=null&&Gu(e,"checked",t,!1)}function vl(e,t){yh(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&yl(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yl(e,t,n){(t!=="number"||Ao(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ri=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function md(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(ri(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function wh(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var to,Sh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=to.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xy=["Webkit","ms","Moz","O"];Object.keys(si).forEach(function(e){xy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),si[t]=si[e]})});function kh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||si.hasOwnProperty(e)&&si[e]?(""+t).trim():t+"px"}function bh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Sy=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sl(e,t){if(t){if(Sy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=null;function Yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cl=null,gr=null,mr=null;function yd(e){if(e=Gi(e)){if(typeof Cl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Ma(t),Cl(e.stateNode,e.type,t))}}function Ch(e){gr?mr?mr.push(e):mr=[e]:gr=e}function $h(){if(gr){var e=gr,t=mr;if(mr=gr=null,yd(e),t)for(e=0;e<t.length;e++)yd(t[e])}}function Oh(e,t){return e(t)}function Ph(){}var vs=!1;function Eh(e,t,n){if(vs)return e(t,n);vs=!0;try{return Oh(e,t,n)}finally{vs=!1,(gr!==null||mr!==null)&&(Ph(),$h())}}function Si(e,t){var n=e.stateNode;if(n===null)return null;var r=Ma(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var $l=!1;if(Mt)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){$l=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{$l=!1}function ky(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var li=!1,Fo=null,Ho=!1,Ol=null,by={onError:function(e){li=!0,Fo=e}};function Cy(e,t,n,r,i,o,a,s,l){li=!1,Fo=null,ky.apply(by,arguments)}function $y(e,t,n,r,i,o,a,s,l){if(Cy.apply(this,arguments),li){if(li){var u=Fo;li=!1,Fo=null}else throw Error(_(198));Ho||(Ho=!0,Ol=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wd(e){if(Un(e)!==e)throw Error(_(188))}function Oy(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return wd(i),e;if(o===r)return wd(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Lh(e){return e=Oy(e),e!==null?Th(e):null}function Th(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Th(e);if(t!==null)return t;e=e.sibling}return null}var _h=Ye.unstable_scheduleCallback,xd=Ye.unstable_cancelCallback,Py=Ye.unstable_shouldYield,Ey=Ye.unstable_requestPaint,he=Ye.unstable_now,jy=Ye.unstable_getCurrentPriorityLevel,Ju=Ye.unstable_ImmediatePriority,Rh=Ye.unstable_UserBlockingPriority,Bo=Ye.unstable_NormalPriority,Ly=Ye.unstable_LowPriority,zh=Ye.unstable_IdlePriority,Ra=null,Ct=null;function Ty(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Ra,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:zy,_y=Math.log,Ry=Math.LN2;function zy(e){return e>>>=0,e===0?32:31-(_y(e)/Ry|0)|0}var no=64,ro=4194304;function ii(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Uo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=ii(s):(o&=a,o!==0&&(r=ii(o)))}else a=n&~i,a!==0?r=ii(a):o!==0&&(r=ii(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ny(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-pt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Ny(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nh(){var e=no;return no<<=1,!(no&4194240)&&(no=64),e}function ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function My(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Zu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function Ih(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mh,ec,Dh,Ah,Fh,El=!1,io=[],sn=null,ln=null,un=null,ki=new Map,bi=new Map,en=[],Dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sd(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(t.pointerId)}}function Qr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Gi(t),t!==null&&ec(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ay(e,t,n,r,i){switch(t){case"focusin":return sn=Qr(sn,e,t,n,r,i),!0;case"dragenter":return ln=Qr(ln,e,t,n,r,i),!0;case"mouseover":return un=Qr(un,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ki.set(o,Qr(ki.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,bi.set(o,Qr(bi.get(o)||null,e,t,n,r,i)),!0}return!1}function Hh(e){var t=Pn(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=jh(n),t!==null){e.blockedOn=t,Fh(e.priority,function(){Dh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bl=r,n.target.dispatchEvent(r),bl=null}else return t=Gi(n),t!==null&&ec(t),e.blockedOn=n,!1;t.shift()}return!0}function kd(e,t,n){Co(e)&&n.delete(t)}function Fy(){El=!1,sn!==null&&Co(sn)&&(sn=null),ln!==null&&Co(ln)&&(ln=null),un!==null&&Co(un)&&(un=null),ki.forEach(kd),bi.forEach(kd)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,El||(El=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Fy)))}function Ci(e){function t(i){return Xr(i,e)}if(0<io.length){Xr(io[0],e);for(var n=1;n<io.length;n++){var r=io[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Xr(sn,e),ln!==null&&Xr(ln,e),un!==null&&Xr(un,e),ki.forEach(t),bi.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Hh(n),n.blockedOn===null&&en.shift()}var vr=Ht.ReactCurrentBatchConfig,Wo=!0;function Hy(e,t,n,r){var i=ee,o=vr.transition;vr.transition=null;try{ee=1,tc(e,t,n,r)}finally{ee=i,vr.transition=o}}function By(e,t,n,r){var i=ee,o=vr.transition;vr.transition=null;try{ee=4,tc(e,t,n,r)}finally{ee=i,vr.transition=o}}function tc(e,t,n,r){if(Wo){var i=jl(e,t,n,r);if(i===null)Es(e,t,r,Vo,n),Sd(e,r);else if(Ay(i,e,t,n,r))r.stopPropagation();else if(Sd(e,r),t&4&&-1<Dy.indexOf(e)){for(;i!==null;){var o=Gi(i);if(o!==null&&Mh(o),o=jl(e,t,n,r),o===null&&Es(e,t,r,Vo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Es(e,t,r,null,n)}}var Vo=null;function jl(e,t,n,r){if(Vo=null,e=Yu(r),e=Pn(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vo=e,null}function Bh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jy()){case Ju:return 1;case Rh:return 4;case Bo:case Ly:return 16;case zh:return 536870912;default:return 16}default:return 16}}var rn=null,nc=null,$o=null;function Uh(){if($o)return $o;var e,t=nc,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return $o=i.slice(e,1<r?1-r:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oo(){return!0}function bd(){return!1}function Ze(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?oo:bd,this.isPropagationStopped=bd,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Ze(Fr),Ki=de({},Fr,{view:0,detail:0}),Uy=Ze(Ki),ws,xs,Yr,za=de({},Ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(ws=e.screenX-Yr.screenX,xs=e.screenY-Yr.screenY):xs=ws=0,Yr=e),ws)},movementY:function(e){return"movementY"in e?e.movementY:xs}}),Cd=Ze(za),Wy=de({},za,{dataTransfer:0}),Vy=Ze(Wy),Ky=de({},Ki,{relatedTarget:0}),Ss=Ze(Ky),Gy=de({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),qy=Ze(Gy),Qy=de({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xy=Ze(Qy),Yy=de({},Fr,{data:0}),$d=Ze(Yy),Jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=e0[e])?!!t[e]:!1}function ic(){return t0}var n0=de({},Ki,{key:function(e){if(e.key){var t=Jy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r0=Ze(n0),i0=de({},za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=Ze(i0),o0=de({},Ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),a0=Ze(o0),s0=de({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),l0=Ze(s0),u0=de({},za,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),c0=Ze(u0),d0=[9,13,27,32],oc=Mt&&"CompositionEvent"in window,ui=null;Mt&&"documentMode"in document&&(ui=document.documentMode);var f0=Mt&&"TextEvent"in window&&!ui,Wh=Mt&&(!oc||ui&&8<ui&&11>=ui),Pd=String.fromCharCode(32),Ed=!1;function Vh(e,t){switch(e){case"keyup":return d0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function p0(e,t){switch(e){case"compositionend":return Kh(t);case"keypress":return t.which!==32?null:(Ed=!0,Pd);case"textInput":return e=t.data,e===Pd&&Ed?null:e;default:return null}}function h0(e,t){if(Zn)return e==="compositionend"||!oc&&Vh(e,t)?(e=Uh(),$o=nc=rn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wh&&t.locale!=="ko"?null:t.data;default:return null}}var g0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!g0[e.type]:t==="textarea"}function Gh(e,t,n,r){Ch(r),t=Ko(t,"onChange"),0<t.length&&(n=new rc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ci=null,$i=null;function m0(e){ig(e,0)}function Na(e){var t=nr(e);if(vh(t))return e}function v0(e,t){if(e==="change")return t}var qh=!1;if(Mt){var ks;if(Mt){var bs="oninput"in document;if(!bs){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),bs=typeof Ld.oninput=="function"}ks=bs}else ks=!1;qh=ks&&(!document.documentMode||9<document.documentMode)}function Td(){ci&&(ci.detachEvent("onpropertychange",Qh),$i=ci=null)}function Qh(e){if(e.propertyName==="value"&&Na($i)){var t=[];Gh(t,$i,e,Yu(e)),Eh(m0,t)}}function y0(e,t,n){e==="focusin"?(Td(),ci=t,$i=n,ci.attachEvent("onpropertychange",Qh)):e==="focusout"&&Td()}function w0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Na($i)}function x0(e,t){if(e==="click")return Na(t)}function S0(e,t){if(e==="input"||e==="change")return Na(t)}function k0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:k0;function Oi(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!dl.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function _d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rd(e,t){var n=_d(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_d(n)}}function Xh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yh(){for(var e=window,t=Ao();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ao(e.document)}return t}function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function b0(e){var t=Yh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xh(n.ownerDocument.documentElement,n)){if(r!==null&&ac(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Rd(n,o);var a=Rd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var C0=Mt&&"documentMode"in document&&11>=document.documentMode,er=null,Ll=null,di=null,Tl=!1;function zd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tl||er==null||er!==Ao(r)||(r=er,"selectionStart"in r&&ac(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),di&&Oi(di,r)||(di=r,r=Ko(Ll,"onSelect"),0<r.length&&(t=new rc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function ao(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},Cs={},Jh={};Mt&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Ia(e){if(Cs[e])return Cs[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jh)return Cs[e]=t[n];return e}var Zh=Ia("animationend"),eg=Ia("animationiteration"),tg=Ia("animationstart"),ng=Ia("transitionend"),rg=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){rg.set(e,t),Bn(t,[e])}for(var $s=0;$s<Nd.length;$s++){var Os=Nd[$s],$0=Os.toLowerCase(),O0=Os[0].toUpperCase()+Os.slice(1);yn($0,"on"+O0)}yn(Zh,"onAnimationEnd");yn(eg,"onAnimationIteration");yn(tg,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(ng,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P0=new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));function Id(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$y(r,t,void 0,e),e.currentTarget=null}function ig(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Id(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Id(i,s,u),o=l}}}if(Ho)throw e=Ol,Ho=!1,Ol=null,e}function re(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(og(t,e,2,!1),n.add(r))}function Ps(e,t,n){var r=0;t&&(r|=4),og(n,e,r,t)}var so="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[so]){e[so]=!0,fh.forEach(function(n){n!=="selectionchange"&&(P0.has(n)||Ps(n,!1,e),Ps(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[so]||(t[so]=!0,Ps("selectionchange",!1,t))}}function og(e,t,n,r){switch(Bh(t)){case 1:var i=Hy;break;case 4:i=By;break;default:i=tc}n=i.bind(null,t,n,e),i=void 0,!$l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Es(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Pn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Eh(function(){var u=o,d=Yu(n),c=[];e:{var f=rg.get(e);if(f!==void 0){var y=rc,v=e;switch(e){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":y=r0;break;case"focusin":v="focus",y=Ss;break;case"focusout":v="blur",y=Ss;break;case"beforeblur":case"afterblur":y=Ss;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Vy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=a0;break;case Zh:case eg:case tg:y=qy;break;case ng:y=l0;break;case"scroll":y=Uy;break;case"wheel":y=c0;break;case"copy":case"cut":case"paste":y=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Od}var w=(t&4)!==0,k=!w&&e==="scroll",g=w?f!==null?f+"Capture":null:f;w=[];for(var p=u,m;p!==null;){m=p;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,g!==null&&(x=Si(p,g),x!=null&&w.push(Ei(p,x,m)))),k)break;p=p.return}0<w.length&&(f=new y(f,v,null,n,d),c.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==bl&&(v=n.relatedTarget||n.fromElement)&&(Pn(v)||v[Dt]))break e;if((y||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Pn(v):null,v!==null&&(k=Un(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Cd,x="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Od,x="onPointerLeave",g="onPointerEnter",p="pointer"),k=y==null?f:nr(y),m=v==null?f:nr(v),f=new w(x,p+"leave",y,n,d),f.target=k,f.relatedTarget=m,x=null,Pn(d)===u&&(w=new w(g,p+"enter",v,n,d),w.target=m,w.relatedTarget=k,x=w),k=x,y&&v)t:{for(w=y,g=v,p=0,m=w;m;m=Gn(m))p++;for(m=0,x=g;x;x=Gn(x))m++;for(;0<p-m;)w=Gn(w),p--;for(;0<m-p;)g=Gn(g),m--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=Gn(w),g=Gn(g)}w=null}else w=null;y!==null&&Md(c,f,y,w,!1),v!==null&&k!==null&&Md(c,k,v,w,!0)}}e:{if(f=u?nr(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var b=v0;else if(jd(f))if(qh)b=S0;else{b=w0;var C=y0}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=x0);if(b&&(b=b(e,u))){Gh(c,b,n,d);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&yl(f,"number",f.value)}switch(C=u?nr(u):window,e){case"focusin":(jd(C)||C.contentEditable==="true")&&(er=C,Ll=u,di=null);break;case"focusout":di=Ll=er=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,zd(c,n,d);break;case"selectionchange":if(C0)break;case"keydown":case"keyup":zd(c,n,d)}var P;if(oc)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Zn?Vh(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Wh&&n.locale!=="ko"&&(Zn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Zn&&(P=Uh()):(rn=d,nc="value"in rn?rn.value:rn.textContent,Zn=!0)),C=Ko(u,E),0<C.length&&(E=new $d(E,e,null,n,d),c.push({event:E,listeners:C}),P?E.data=P:(P=Kh(n),P!==null&&(E.data=P)))),(P=f0?p0(e,n):h0(e,n))&&(u=Ko(u,"onBeforeInput"),0<u.length&&(d=new $d("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=P))}ig(c,t)})}function Ei(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Si(e,n),o!=null&&r.unshift(Ei(e,o,i)),o=Si(e,t),o!=null&&r.push(Ei(e,o,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Md(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Si(n,o),l!=null&&a.unshift(Ei(n,l,s))):i||(l=Si(n,o),l!=null&&a.push(Ei(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var E0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function Dd(e){return(typeof e=="string"?e:""+e).replace(E0,`
`).replace(j0,"")}function lo(e,t,n){if(t=Dd(t),Dd(e)!==t&&n)throw Error(_(425))}function Go(){}var _l=null,Rl=null;function zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,L0=typeof clearTimeout=="function"?clearTimeout:void 0,Ad=typeof Promise=="function"?Promise:void 0,T0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ad<"u"?function(e){return Ad.resolve(null).then(e).catch(_0)}:Nl;function _0(e){setTimeout(function(){throw e})}function js(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ci(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ci(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),kt="__reactFiber$"+Hr,ji="__reactProps$"+Hr,Dt="__reactContainer$"+Hr,Il="__reactEvents$"+Hr,R0="__reactListeners$"+Hr,z0="__reactHandles$"+Hr;function Pn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fd(e);e!==null;){if(n=e[kt])return n;e=Fd(e)}return t}e=n,n=e.parentNode}return null}function Gi(e){return e=e[kt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ma(e){return e[ji]||null}var Ml=[],rr=-1;function wn(e){return{current:e}}function oe(e){0>rr||(e.current=Ml[rr],Ml[rr]=null,rr--)}function ne(e,t){rr++,Ml[rr]=e.current,e.current=t}var vn={},ze=wn(vn),We=wn(!1),Mn=vn;function kr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(e){return e=e.childContextTypes,e!=null}function qo(){oe(We),oe(ze)}function Hd(e,t,n){if(ze.current!==vn)throw Error(_(168));ne(ze,t),ne(We,n)}function ag(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,yy(e)||"Unknown",i));return de({},n,r)}function Qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Mn=ze.current,ne(ze,e),ne(We,We.current),!0}function Bd(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=ag(e,t,Mn),r.__reactInternalMemoizedMergedChildContext=e,oe(We),oe(ze),ne(ze,e)):oe(We),ne(We,n)}var Tt=null,Da=!1,Ls=!1;function sg(e){Tt===null?Tt=[e]:Tt.push(e)}function N0(e){Da=!0,sg(e)}function xn(){if(!Ls&&Tt!==null){Ls=!0;var e=0,t=ee;try{var n=Tt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,Da=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),_h(Ju,xn),i}finally{ee=t,Ls=!1}}return null}var ir=[],or=0,Xo=null,Yo=0,tt=[],nt=0,Dn=null,Rt=1,zt="";function Cn(e,t){ir[or++]=Yo,ir[or++]=Xo,Xo=e,Yo=t}function lg(e,t,n){tt[nt++]=Rt,tt[nt++]=zt,tt[nt++]=Dn,Dn=e;var r=Rt;e=zt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var o=32-pt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Rt=1<<32-pt(t)+i|n<<i|r,zt=o+e}else Rt=1<<o|n<<i|r,zt=e}function sc(e){e.return!==null&&(Cn(e,1),lg(e,1,0))}function lc(e){for(;e===Xo;)Xo=ir[--or],ir[or]=null,Yo=ir[--or],ir[or]=null;for(;e===Dn;)Dn=tt[--nt],tt[nt]=null,zt=tt[--nt],tt[nt]=null,Rt=tt[--nt],tt[nt]=null}var Xe=null,Qe=null,se=!1,dt=null;function ug(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ud(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Qe=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dn!==null?{id:Rt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Qe=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Al(e){if(se){var t=Qe;if(t){var n=t;if(!Ud(e,t)){if(Dl(e))throw Error(_(418));t=cn(n.nextSibling);var r=Xe;t&&Ud(e,t)?ug(r,n):(e.flags=e.flags&-4097|2,se=!1,Xe=e)}}else{if(Dl(e))throw Error(_(418));e.flags=e.flags&-4097|2,se=!1,Xe=e}}}function Wd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function uo(e){if(e!==Xe)return!1;if(!se)return Wd(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zl(e.type,e.memoizedProps)),t&&(t=Qe)){if(Dl(e))throw cg(),Error(_(418));for(;t;)ug(e,t),t=cn(t.nextSibling)}if(Wd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Xe?cn(e.stateNode.nextSibling):null;return!0}function cg(){for(var e=Qe;e;)e=cn(e.nextSibling)}function br(){Qe=Xe=null,se=!1}function uc(e){dt===null?dt=[e]:dt.push(e)}var I0=Ht.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Jo=wn(null),Zo=null,ar=null,cc=null;function dc(){cc=ar=Zo=null}function fc(e){var t=Jo.current;oe(Jo),e._currentValue=t}function Fl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yr(e,t){Zo=e,cc=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ue=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(cc!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(Zo===null)throw Error(_(308));ar=e,Zo.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var En=null;function pc(e){En===null?En=[e]:En.push(e)}function dg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pc(t)):(n.next=i.next,i.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function hc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,At(e,n)}return i=r.interleaved,i===null?(t.next=t,pc(r)):(t.next=i.next,i.next=t),r.interleaved=t,At(e,n)}function Po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zu(e,n)}}function Vd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ea(e,t,n,r){var i=e.updateQueue;Jt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;a=0,d=u=l=null,s=o;do{var f=s.lane,y=s.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(f=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){c=v.call(y,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(y,c,f):v,f==null)break e;c=de({},c,f);break e;case 2:Jt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else y={eventTime:y,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=y,l=c):d=d.next=y,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Fn|=a,e.lanes=a,e.memoizedState=c}}function Kd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var pg=new dh.Component().refs;function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Aa={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=pn(e),o=Nt(r,i);o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(ht(t,e,i,r),Po(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=pn(e),o=Nt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(ht(t,e,i,r),Po(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=pn(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=dn(e,i,r),t!==null&&(ht(t,e,r,n),Po(t,e,r))}};function Gd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Oi(n,r)||!Oi(i,o):!0}function hg(e,t,n){var r=!1,i=vn,o=t.contextType;return typeof o=="object"&&o!==null?o=ot(o):(i=Ve(t)?Mn:ze.current,r=t.contextTypes,o=(r=r!=null)?kr(e,i):vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Aa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Aa.enqueueReplaceState(t,t.state,null)}function Bl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=pg,hc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ot(o):(o=Ve(t)?Mn:ze.current,i.context=kr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Hl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Aa.enqueueReplaceState(i,i.state,null),ea(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===pg&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function co(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qd(e){var t=e._init;return t(e._payload)}function gg(e){function t(g,p){if(e){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=hn(g,p),g.index=0,g.sibling=null,g}function o(g,p,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,m,x){return p===null||p.tag!==6?(p=Ms(m,g.mode,x),p.return=g,p):(p=i(p,m),p.return=g,p)}function l(g,p,m,x){var b=m.type;return b===Jn?d(g,p,m.props.children,x,m.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Yt&&Qd(b)===p.type)?(x=i(p,m.props),x.ref=Jr(g,p,m),x.return=g,x):(x=Ro(m.type,m.key,m.props,null,g.mode,x),x.ref=Jr(g,p,m),x.return=g,x)}function u(g,p,m,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Ds(m,g.mode,x),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function d(g,p,m,x,b){return p===null||p.tag!==7?(p=Rn(m,g.mode,x,b),p.return=g,p):(p=i(p,m),p.return=g,p)}function c(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ms(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Zi:return m=Ro(p.type,p.key,p.props,null,g.mode,m),m.ref=Jr(g,null,p),m.return=g,m;case Yn:return p=Ds(p,g.mode,m),p.return=g,p;case Yt:var x=p._init;return c(g,x(p._payload),m)}if(ri(p)||Gr(p))return p=Rn(p,g.mode,m,null),p.return=g,p;co(g,p)}return null}function f(g,p,m,x){var b=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:s(g,p,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Zi:return m.key===b?l(g,p,m,x):null;case Yn:return m.key===b?u(g,p,m,x):null;case Yt:return b=m._init,f(g,p,b(m._payload),x)}if(ri(m)||Gr(m))return b!==null?null:d(g,p,m,x,null);co(g,m)}return null}function y(g,p,m,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(m)||null,s(p,g,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zi:return g=g.get(x.key===null?m:x.key)||null,l(p,g,x,b);case Yn:return g=g.get(x.key===null?m:x.key)||null,u(p,g,x,b);case Yt:var C=x._init;return y(g,p,m,C(x._payload),b)}if(ri(x)||Gr(x))return g=g.get(m)||null,d(p,g,x,b,null);co(p,x)}return null}function v(g,p,m,x){for(var b=null,C=null,P=p,E=p=0,R=null;P!==null&&E<m.length;E++){P.index>E?(R=P,P=null):R=P.sibling;var z=f(g,P,m[E],x);if(z===null){P===null&&(P=R);break}e&&P&&z.alternate===null&&t(g,P),p=o(z,p,E),C===null?b=z:C.sibling=z,C=z,P=R}if(E===m.length)return n(g,P),se&&Cn(g,E),b;if(P===null){for(;E<m.length;E++)P=c(g,m[E],x),P!==null&&(p=o(P,p,E),C===null?b=P:C.sibling=P,C=P);return se&&Cn(g,E),b}for(P=r(g,P);E<m.length;E++)R=y(P,g,E,m[E],x),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?E:R.key),p=o(R,p,E),C===null?b=R:C.sibling=R,C=R);return e&&P.forEach(function(A){return t(g,A)}),se&&Cn(g,E),b}function w(g,p,m,x){var b=Gr(m);if(typeof b!="function")throw Error(_(150));if(m=b.call(m),m==null)throw Error(_(151));for(var C=b=null,P=p,E=p=0,R=null,z=m.next();P!==null&&!z.done;E++,z=m.next()){P.index>E?(R=P,P=null):R=P.sibling;var A=f(g,P,z.value,x);if(A===null){P===null&&(P=R);break}e&&P&&A.alternate===null&&t(g,P),p=o(A,p,E),C===null?b=A:C.sibling=A,C=A,P=R}if(z.done)return n(g,P),se&&Cn(g,E),b;if(P===null){for(;!z.done;E++,z=m.next())z=c(g,z.value,x),z!==null&&(p=o(z,p,E),C===null?b=z:C.sibling=z,C=z);return se&&Cn(g,E),b}for(P=r(g,P);!z.done;E++,z=m.next())z=y(P,g,E,z.value,x),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?E:z.key),p=o(z,p,E),C===null?b=z:C.sibling=z,C=z);return e&&P.forEach(function(H){return t(g,H)}),se&&Cn(g,E),b}function k(g,p,m,x){if(typeof m=="object"&&m!==null&&m.type===Jn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Zi:e:{for(var b=m.key,C=p;C!==null;){if(C.key===b){if(b=m.type,b===Jn){if(C.tag===7){n(g,C.sibling),p=i(C,m.props.children),p.return=g,g=p;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Yt&&Qd(b)===C.type){n(g,C.sibling),p=i(C,m.props),p.ref=Jr(g,C,m),p.return=g,g=p;break e}n(g,C);break}else t(g,C);C=C.sibling}m.type===Jn?(p=Rn(m.props.children,g.mode,x,m.key),p.return=g,g=p):(x=Ro(m.type,m.key,m.props,null,g.mode,x),x.ref=Jr(g,p,m),x.return=g,g=x)}return a(g);case Yn:e:{for(C=m.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Ds(m,g.mode,x),p.return=g,g=p}return a(g);case Yt:return C=m._init,k(g,p,C(m._payload),x)}if(ri(m))return v(g,p,m,x);if(Gr(m))return w(g,p,m,x);co(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=Ms(m,g.mode,x),p.return=g,g=p),a(g)):n(g,p)}return k}var Cr=gg(!0),mg=gg(!1),qi={},$t=wn(qi),Li=wn(qi),Ti=wn(qi);function jn(e){if(e===qi)throw Error(_(174));return e}function gc(e,t){switch(ne(Ti,t),ne(Li,e),ne($t,qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}oe($t),ne($t,t)}function $r(){oe($t),oe(Li),oe(Ti)}function vg(e){jn(Ti.current);var t=jn($t.current),n=xl(t,e.type);t!==n&&(ne(Li,e),ne($t,n))}function mc(e){Li.current===e&&(oe($t),oe(Li))}var ue=wn(0);function ta(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ts=[];function vc(){for(var e=0;e<Ts.length;e++)Ts[e]._workInProgressVersionPrimary=null;Ts.length=0}var Eo=Ht.ReactCurrentDispatcher,_s=Ht.ReactCurrentBatchConfig,An=0,ce=null,ye=null,Se=null,na=!1,fi=!1,_i=0,M0=0;function Le(){throw Error(_(321))}function yc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function wc(e,t,n,r,i,o){if(An=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=e===null||e.memoizedState===null?H0:B0,e=n(r,i),fi){o=0;do{if(fi=!1,_i=0,25<=o)throw Error(_(301));o+=1,Se=ye=null,t.updateQueue=null,Eo.current=U0,e=n(r,i)}while(fi)}if(Eo.current=ra,t=ye!==null&&ye.next!==null,An=0,Se=ye=ce=null,na=!1,t)throw Error(_(300));return e}function xc(){var e=_i!==0;return _i=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ce.memoizedState=Se=e:Se=Se.next=e,Se}function at(){if(ye===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Se===null?ce.memoizedState:Se.next;if(t!==null)Se=t,ye=e;else{if(e===null)throw Error(_(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Se===null?ce.memoizedState=Se=e:Se=Se.next=e}return Se}function Ri(e,t){return typeof t=="function"?t(e):t}function Rs(e){var t=at(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ye,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var d=u.lane;if((An&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=c,a=r):l=l.next=c,ce.lanes|=d,Fn|=d}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,mt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,Fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zs(e){var t=at(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);mt(o,t.memoizedState)||(Ue=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function yg(){}function wg(e,t){var n=ce,r=at(),i=t(),o=!mt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ue=!0),r=r.queue,Sc(kg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,zi(9,Sg.bind(null,n,r,i,t),void 0,null),be===null)throw Error(_(349));An&30||xg(n,t,i)}return i}function xg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sg(e,t,n,r){t.value=n,t.getSnapshot=r,bg(t)&&Cg(e)}function kg(e,t,n){return n(function(){bg(t)&&Cg(e)})}function bg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Cg(e){var t=At(e,1);t!==null&&ht(t,e,1,-1)}function Xd(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:e},t.queue=e,e=e.dispatch=F0.bind(null,ce,e),[t.memoizedState,e]}function zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $g(){return at().memoizedState}function jo(e,t,n,r){var i=xt();ce.flags|=e,i.memoizedState=zi(1|t,n,void 0,r===void 0?null:r)}function Fa(e,t,n,r){var i=at();r=r===void 0?null:r;var o=void 0;if(ye!==null){var a=ye.memoizedState;if(o=a.destroy,r!==null&&yc(r,a.deps)){i.memoizedState=zi(t,n,o,r);return}}ce.flags|=e,i.memoizedState=zi(1|t,n,o,r)}function Yd(e,t){return jo(8390656,8,e,t)}function Sc(e,t){return Fa(2048,8,e,t)}function Og(e,t){return Fa(4,2,e,t)}function Pg(e,t){return Fa(4,4,e,t)}function Eg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jg(e,t,n){return n=n!=null?n.concat([e]):null,Fa(4,4,Eg.bind(null,t,e),n)}function kc(){}function Lg(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tg(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _g(e,t,n){return An&21?(mt(n,t)||(n=Nh(),ce.lanes|=n,Fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n)}function D0(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=_s.transition;_s.transition={};try{e(!1),t()}finally{ee=n,_s.transition=r}}function Rg(){return at().memoizedState}function A0(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zg(e))Ng(t,n);else if(n=dg(e,t,n,r),n!==null){var i=Me();ht(n,e,r,i),Ig(n,t,r)}}function F0(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zg(e))Ng(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,mt(s,a)){var l=t.interleaved;l===null?(i.next=i,pc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=dg(e,t,i,r),n!==null&&(i=Me(),ht(n,e,r,i),Ig(n,t,r))}}function zg(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Ng(e,t){fi=na=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ig(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zu(e,n)}}var ra={readContext:ot,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},H0={readContext:ot,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Yd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jo(4194308,4,Eg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return jo(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=A0.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:Xd,useDebugValue:kc,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Xd(!1),t=e[0];return e=D0.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=xt();if(se){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),be===null)throw Error(_(349));An&30||xg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Yd(kg.bind(null,r,o,e),[e]),r.flags|=2048,zi(9,Sg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xt(),t=be.identifierPrefix;if(se){var n=zt,r=Rt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_i++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=M0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B0={readContext:ot,useCallback:Lg,useContext:ot,useEffect:Sc,useImperativeHandle:jg,useInsertionEffect:Og,useLayoutEffect:Pg,useMemo:Tg,useReducer:Rs,useRef:$g,useState:function(){return Rs(Ri)},useDebugValue:kc,useDeferredValue:function(e){var t=at();return _g(t,ye.memoizedState,e)},useTransition:function(){var e=Rs(Ri)[0],t=at().memoizedState;return[e,t]},useMutableSource:yg,useSyncExternalStore:wg,useId:Rg,unstable_isNewReconciler:!1},U0={readContext:ot,useCallback:Lg,useContext:ot,useEffect:Sc,useImperativeHandle:jg,useInsertionEffect:Og,useLayoutEffect:Pg,useMemo:Tg,useReducer:zs,useRef:$g,useState:function(){return zs(Ri)},useDebugValue:kc,useDeferredValue:function(e){var t=at();return ye===null?t.memoizedState=e:_g(t,ye.memoizedState,e)},useTransition:function(){var e=zs(Ri)[0],t=at().memoizedState;return[e,t]},useMutableSource:yg,useSyncExternalStore:wg,useId:Rg,unstable_isNewReconciler:!1};function Or(e,t){try{var n="",r=t;do n+=vy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ns(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var W0=typeof WeakMap=="function"?WeakMap:Map;function Mg(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oa||(oa=!0,Zl=r),Ul(e,t)},n}function Dg(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ul(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ul(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Jd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new W0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=iw.bind(null,e,t,n),t.then(e,e))}function Zd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ef(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var V0=Ht.ReactCurrentOwner,Ue=!1;function Ie(e,t,n,r){t.child=e===null?mg(t,null,n,r):Cr(t,e.child,n,r)}function tf(e,t,n,r,i){n=n.render;var o=t.ref;return yr(t,i),r=wc(e,t,n,r,o,i),n=xc(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(se&&n&&sc(t),t.flags|=1,Ie(e,t,r,i),t.child)}function nf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Lc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ag(e,t,o,r,i)):(e=Ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(a,r)&&e.ref===t.ref)return Ft(e,t,i)}return t.flags|=1,e=hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ag(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Oi(o,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,Ft(e,t,i)}return Wl(e,t,n,r,i)}function Fg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(lr,qe),qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(lr,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(lr,qe),qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(lr,qe),qe|=r;return Ie(e,t,i,n),t.child}function Hg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,n,r,i){var o=Ve(n)?Mn:ze.current;return o=kr(t,o),yr(t,i),n=wc(e,t,n,r,o,i),r=xc(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(se&&r&&sc(t),t.flags|=1,Ie(e,t,n,i),t.child)}function rf(e,t,n,r,i){if(Ve(n)){var o=!0;Qo(t)}else o=!1;if(yr(t,i),t.stateNode===null)Lo(e,t),hg(t,n,r),Bl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=Ve(n)?Mn:ze.current,u=kr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&qd(t,a,r,u),Jt=!1;var f=t.memoizedState;a.state=f,ea(t,r,a,i),l=t.memoizedState,s!==r||f!==l||We.current||Jt?(typeof d=="function"&&(Hl(t,n,d,r),l=t.memoizedState),(s=Jt||Gd(t,n,s,r,f,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,fg(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ut(t.type,s),a.props=u,c=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=ot(l):(l=Ve(n)?Mn:ze.current,l=kr(t,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==c||f!==l)&&qd(t,a,r,l),Jt=!1,f=t.memoizedState,a.state=f,ea(t,r,a,i);var v=t.memoizedState;s!==c||f!==v||We.current||Jt?(typeof y=="function"&&(Hl(t,n,y,r),v=t.memoizedState),(u=Jt||Gd(t,n,u,r,f,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Vl(e,t,n,r,o,i)}function Vl(e,t,n,r,i,o){Hg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Bd(t,n,!1),Ft(e,t,o);r=t.stateNode,V0.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Cr(t,e.child,null,o),t.child=Cr(t,null,s,o)):Ie(e,t,s,o),t.memoizedState=r.state,i&&Bd(t,n,!0),t.child}function Bg(e){var t=e.stateNode;t.pendingContext?Hd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hd(e,t.context,!1),gc(e,t.containerInfo)}function of(e,t,n,r,i){return br(),uc(i),t.flags|=256,Ie(e,t,n,r),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ug(e,t,n){var r=t.pendingProps,i=ue.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(ue,i&1),e===null)return Al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ua(a,r,0,null),e=Rn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Gl(n),t.memoizedState=Kl,e):bc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return K0(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=hn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=hn(s,o):(o=Rn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Gl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Kl,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bc(e,t){return t=Ua({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fo(e,t,n,r){return r!==null&&uc(r),Cr(t,e.child,null,n),e=bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ns(Error(_(422))),fo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ua({mode:"visible",children:r.children},i,0,null),o=Rn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Cr(t,e.child,null,a),t.child.memoizedState=Gl(a),t.memoizedState=Kl,o);if(!(t.mode&1))return fo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(_(419)),r=Ns(o,r,void 0),fo(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ue||s){if(r=be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,At(e,i),ht(r,e,i,-1))}return jc(),r=Ns(Error(_(421))),fo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ow.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Qe=cn(i.nextSibling),Xe=t,se=!0,dt=null,e!==null&&(tt[nt++]=Rt,tt[nt++]=zt,tt[nt++]=Dn,Rt=e.id,zt=e.overflow,Dn=t),t=bc(t,r.children),t.flags|=4096,t)}function af(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fl(e.return,t,n)}function Is(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Wg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ie(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&af(e,n,t);else if(e.tag===19)af(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ue,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ta(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Is(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ta(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Is(t,!0,n,null,o);break;case"together":Is(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function G0(e,t,n){switch(t.tag){case 3:Bg(t),br();break;case 5:vg(t);break;case 1:Ve(t.type)&&Qo(t);break;case 4:gc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(Jo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?Ug(e,t,n):(ne(ue,ue.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);ne(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,Fg(e,t,n)}return Ft(e,t,n)}var Vg,ql,Kg,Gg;Vg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ql=function(){};Kg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jn($t.current);var o=null;switch(n){case"input":i=ml(e,i),r=ml(e,r),o=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),o=[];break;case"textarea":i=wl(e,i),r=wl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Go)}Sl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Gg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function q0(e,t,n){var r=t.pendingProps;switch(lc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ve(t.type)&&qo(),Te(t),null;case 3:return r=t.stateNode,$r(),oe(We),oe(ze),vc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(uo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(nu(dt),dt=null))),ql(e,t),Te(t),null;case 5:mc(t);var i=jn(Ti.current);if(n=t.type,e!==null&&t.stateNode!=null)Kg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Te(t),null}if(e=jn($t.current),uo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kt]=t,r[ji]=o,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<oi.length;i++)re(oi[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":hd(r,o),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},re("invalid",r);break;case"textarea":md(r,o),re("invalid",r)}Sl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&lo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&lo(r.textContent,s,e),i=["children",""+s]):wi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&re("scroll",r)}switch(n){case"input":eo(r),gd(r,o,!0);break;case"textarea":eo(r),vd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Go)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[kt]=t,e[ji]=r,Vg(e,t,!1,!1),t.stateNode=e;e:{switch(a=kl(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<oi.length;i++)re(oi[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":hd(e,r),i=ml(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),re("invalid",e);break;case"textarea":md(e,r),i=wl(e,r),re("invalid",e);break;default:i=r}Sl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?bh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xi(e,l):typeof l=="number"&&xi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&re("scroll",e):l!=null&&Gu(e,o,l,a))}switch(n){case"input":eo(e),gd(e,r,!1);break;case"textarea":eo(e),vd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hr(e,!!r.multiple,o,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Gg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=jn(Ti.current),jn($t.current),uo(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(o=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Te(t),null;case 13:if(oe(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Qe!==null&&t.mode&1&&!(t.flags&128))cg(),br(),t.flags|=98560,o=!1;else if(o=uo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[kt]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else dt!==null&&(nu(dt),dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?we===0&&(we=3):jc())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return $r(),ql(e,t),e===null&&Pi(t.stateNode.containerInfo),Te(t),null;case 10:return fc(t.type._context),Te(t),null;case 17:return Ve(t.type)&&qo(),Te(t),null;case 19:if(oe(ue),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Zr(o,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ta(e),a!==null){for(t.flags|=128,Zr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ue,ue.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>Pr&&(t.flags|=128,r=!0,Zr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ta(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!se)return Te(t),null}else 2*he()-o.renderingStartTime>Pr&&n!==1073741824&&(t.flags|=128,r=!0,Zr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,n=ue.current,ne(ue,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Ec(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Q0(e,t){switch(lc(t),t.tag){case 1:return Ve(t.type)&&qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),oe(We),oe(ze),vc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mc(t),null;case 13:if(oe(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ue),null;case 4:return $r(),null;case 10:return fc(t.type._context),null;case 22:case 23:return Ec(),null;case 24:return null;default:return null}}var po=!1,_e=!1,X0=typeof WeakSet=="function"?WeakSet:Set,M=null;function sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Ql(e,t,n){try{n()}catch(r){fe(e,t,r)}}var sf=!1;function Y0(e,t){if(_l=Wo,e=Yh(),ac(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,d=0,c=e,f=null;t:for(;;){for(var y;c!==n||i!==0&&c.nodeType!==3||(s=a+i),c!==o||r!==0&&c.nodeType!==3||(l=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(y=c.firstChild)!==null;)f=c,c=y;for(;;){if(c===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++d===r&&(l=a),(y=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=y}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rl={focusedElem:e,selectionRange:n},Wo=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:ut(t.type,w),k);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(x){fe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=sf,sf=!1,v}function pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ql(t,n,o)}i=i.next}while(i!==r)}}function Ha(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qg(e){var t=e.alternate;t!==null&&(e.alternate=null,qg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[ji],delete t[Il],delete t[R0],delete t[z0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qg(e){return e.tag===5||e.tag===3||e.tag===4}function lf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Go));else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}var Pe=null,ct=!1;function Gt(e,t,n){for(n=n.child;n!==null;)Xg(e,t,n),n=n.sibling}function Xg(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Ra,n)}catch{}switch(n.tag){case 5:_e||sr(n,t);case 6:var r=Pe,i=ct;Pe=null,Gt(e,t,n),Pe=r,ct=i,Pe!==null&&(ct?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(ct?(e=Pe,n=n.stateNode,e.nodeType===8?js(e.parentNode,n):e.nodeType===1&&js(e,n),Ci(e)):js(Pe,n.stateNode));break;case 4:r=Pe,i=ct,Pe=n.stateNode.containerInfo,ct=!0,Gt(e,t,n),Pe=r,ct=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ql(n,t,a),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!_e&&(sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){fe(n,t,s)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Gt(e,t,n),_e=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function uf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new X0),t.forEach(function(r){var i=aw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Pe=s.stateNode,ct=!1;break e;case 3:Pe=s.stateNode.containerInfo,ct=!0;break e;case 4:Pe=s.stateNode.containerInfo,ct=!0;break e}s=s.return}if(Pe===null)throw Error(_(160));Xg(o,a,i),Pe=null,ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yg(t,e),t=t.sibling}function Yg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),wt(e),r&4){try{pi(3,e,e.return),Ha(3,e)}catch(w){fe(e,e.return,w)}try{pi(5,e,e.return)}catch(w){fe(e,e.return,w)}}break;case 1:lt(t,e),wt(e),r&512&&n!==null&&sr(n,n.return);break;case 5:if(lt(t,e),wt(e),r&512&&n!==null&&sr(n,n.return),e.flags&32){var i=e.stateNode;try{xi(i,"")}catch(w){fe(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&yh(i,o),kl(s,a);var u=kl(s,o);for(a=0;a<l.length;a+=2){var d=l[a],c=l[a+1];d==="style"?bh(i,c):d==="dangerouslySetInnerHTML"?Sh(i,c):d==="children"?xi(i,c):Gu(i,d,c,u)}switch(s){case"input":vl(i,o);break;case"textarea":wh(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?hr(i,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?hr(i,!!o.multiple,o.defaultValue,!0):hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ji]=o}catch(w){fe(e,e.return,w)}}break;case 6:if(lt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){fe(e,e.return,w)}}break;case 3:if(lt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ci(t.containerInfo)}catch(w){fe(e,e.return,w)}break;case 4:lt(t,e),wt(e);break;case 13:lt(t,e),wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Oc=he())),r&4&&uf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||d,lt(t,e),_e=u):lt(t,e),wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(c=M=d;M!==null;){switch(f=M,y=f.child,f.tag){case 0:case 11:case 14:case 15:pi(4,f,f.return);break;case 1:sr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){fe(r,n,w)}}break;case 5:sr(f,f.return);break;case 22:if(f.memoizedState!==null){df(c);continue}}y!==null?(y.return=f,M=y):df(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=kh("display",a))}catch(w){fe(e,e.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){fe(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:lt(t,e),wt(e),r&4&&uf(e);break;case 21:break;default:lt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qg(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xi(i,""),r.flags&=-33);var o=lf(e);Jl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=lf(e);Yl(e,s,a);break;default:throw Error(_(161))}}catch(l){fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function J0(e,t,n){M=e,Jg(e)}function Jg(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||po;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||_e;s=po;var u=_e;if(po=a,(_e=l)&&!u)for(M=i;M!==null;)a=M,l=a.child,a.tag===22&&a.memoizedState!==null?ff(i):l!==null?(l.return=a,M=l):ff(i);for(;o!==null;)M=o,Jg(o),o=o.sibling;M=i,po=s,_e=u}cf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):cf(e)}}function cf(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||Ha(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Kd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kd(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Ci(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}_e||t.flags&512&&Xl(t)}catch(f){fe(t,t.return,f)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function df(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function ff(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ha(4,t)}catch(l){fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){fe(t,i,l)}}var o=t.return;try{Xl(t)}catch(l){fe(t,o,l)}break;case 5:var a=t.return;try{Xl(t)}catch(l){fe(t,a,l)}}}catch(l){fe(t,t.return,l)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var Z0=Math.ceil,ia=Ht.ReactCurrentDispatcher,Cc=Ht.ReactCurrentOwner,it=Ht.ReactCurrentBatchConfig,Y=0,be=null,ve=null,Ee=0,qe=0,lr=wn(0),we=0,Ni=null,Fn=0,Ba=0,$c=0,hi=null,Be=null,Oc=0,Pr=1/0,jt=null,oa=!1,Zl=null,fn=null,ho=!1,on=null,aa=0,gi=0,eu=null,To=-1,_o=0;function Me(){return Y&6?he():To!==-1?To:To=he()}function pn(e){return e.mode&1?Y&2&&Ee!==0?Ee&-Ee:I0.transition!==null?(_o===0&&(_o=Nh()),_o):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Bh(e.type)),e):1}function ht(e,t,n,r){if(50<gi)throw gi=0,eu=null,Error(_(185));Vi(e,n,r),(!(Y&2)||e!==be)&&(e===be&&(!(Y&2)&&(Ba|=n),we===4&&tn(e,Ee)),Ke(e,r),n===1&&Y===0&&!(t.mode&1)&&(Pr=he()+500,Da&&xn()))}function Ke(e,t){var n=e.callbackNode;Iy(e,t);var r=Uo(e,e===be?Ee:0);if(r===0)n!==null&&xd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xd(n),t===1)e.tag===0?N0(pf.bind(null,e)):sg(pf.bind(null,e)),T0(function(){!(Y&6)&&xn()}),n=null;else{switch(Ih(r)){case 1:n=Ju;break;case 4:n=Rh;break;case 16:n=Bo;break;case 536870912:n=zh;break;default:n=Bo}n=am(n,Zg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zg(e,t){if(To=-1,_o=0,Y&6)throw Error(_(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=Uo(e,e===be?Ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sa(e,r);else{t=r;var i=Y;Y|=2;var o=tm();(be!==e||Ee!==t)&&(jt=null,Pr=he()+500,_n(e,t));do try{nw();break}catch(s){em(e,s)}while(1);dc(),ia.current=o,Y=i,ve!==null?t=0:(be=null,Ee=0,t=we)}if(t!==0){if(t===2&&(i=Pl(e),i!==0&&(r=i,t=tu(e,i))),t===1)throw n=Ni,_n(e,0),tn(e,r),Ke(e,he()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ew(i)&&(t=sa(e,r),t===2&&(o=Pl(e),o!==0&&(r=o,t=tu(e,o))),t===1))throw n=Ni,_n(e,0),tn(e,r),Ke(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:$n(e,Be,jt);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=Oc+500-he(),10<t)){if(Uo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nl($n.bind(null,e,Be,jt),t);break}$n(e,Be,jt);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-pt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z0(r/1960))-r,10<r){e.timeoutHandle=Nl($n.bind(null,e,Be,jt),r);break}$n(e,Be,jt);break;case 5:$n(e,Be,jt);break;default:throw Error(_(329))}}}return Ke(e,he()),e.callbackNode===n?Zg.bind(null,e):null}function tu(e,t){var n=hi;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=sa(e,t),e!==2&&(t=Be,Be=n,t!==null&&nu(t)),e}function nu(e){Be===null?Be=e:Be.push.apply(Be,e)}function ew(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!mt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~$c,t&=~Ba,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function pf(e){if(Y&6)throw Error(_(327));wr();var t=Uo(e,0);if(!(t&1))return Ke(e,he()),null;var n=sa(e,t);if(e.tag!==0&&n===2){var r=Pl(e);r!==0&&(t=r,n=tu(e,r))}if(n===1)throw n=Ni,_n(e,0),tn(e,t),Ke(e,he()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,Be,jt),Ke(e,he()),null}function Pc(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(Pr=he()+500,Da&&xn())}}function Hn(e){on!==null&&on.tag===0&&!(Y&6)&&wr();var t=Y;Y|=1;var n=it.transition,r=ee;try{if(it.transition=null,ee=1,e)return e()}finally{ee=r,it.transition=n,Y=t,!(Y&6)&&xn()}}function Ec(){qe=lr.current,oe(lr)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,L0(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qo();break;case 3:$r(),oe(We),oe(ze),vc();break;case 5:mc(r);break;case 4:$r();break;case 13:oe(ue);break;case 19:oe(ue);break;case 10:fc(r.type._context);break;case 22:case 23:Ec()}n=n.return}if(be=e,ve=e=hn(e.current,null),Ee=qe=t,we=0,Ni=null,$c=Ba=Fn=0,Be=hi=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}En=null}return e}function em(e,t){do{var n=ve;try{if(dc(),Eo.current=ra,na){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}na=!1}if(An=0,Se=ye=ce=null,fi=!1,_i=0,Cc.current=null,n===null||n.return===null){we=1,Ni=t,ve=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ee,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Zd(a);if(y!==null){y.flags&=-257,ef(y,a,s,o,t),y.mode&1&&Jd(o,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Jd(o,u,t),jc();break e}l=Error(_(426))}}else if(se&&s.mode&1){var k=Zd(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),ef(k,a,s,o,t),uc(Or(l,s));break e}}o=l=Or(l,s),we!==4&&(we=2),hi===null?hi=[o]:hi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Mg(o,l,t);Vd(o,g);break e;case 1:s=l;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(fn===null||!fn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Dg(o,s,t);Vd(o,x);break e}}o=o.return}while(o!==null)}rm(n)}catch(b){t=b,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function tm(){var e=ia.current;return ia.current=ra,e===null?ra:e}function jc(){(we===0||we===3||we===2)&&(we=4),be===null||!(Fn&268435455)&&!(Ba&268435455)||tn(be,Ee)}function sa(e,t){var n=Y;Y|=2;var r=tm();(be!==e||Ee!==t)&&(jt=null,_n(e,t));do try{tw();break}catch(i){em(e,i)}while(1);if(dc(),Y=n,ia.current=r,ve!==null)throw Error(_(261));return be=null,Ee=0,we}function tw(){for(;ve!==null;)nm(ve)}function nw(){for(;ve!==null&&!Py();)nm(ve)}function nm(e){var t=om(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?rm(e):ve=t,Cc.current=null}function rm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Q0(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ve=null;return}}else if(n=q0(n,t,qe),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);we===0&&(we=5)}function $n(e,t,n){var r=ee,i=it.transition;try{it.transition=null,ee=1,rw(e,t,n,r)}finally{it.transition=i,ee=r}return null}function rw(e,t,n,r){do wr();while(on!==null);if(Y&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(My(e,o),e===be&&(ve=be=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,am(Bo,function(){return wr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=it.transition,it.transition=null;var a=ee;ee=1;var s=Y;Y|=4,Cc.current=null,Y0(e,n),Yg(n,e),b0(Rl),Wo=!!_l,Rl=_l=null,e.current=n,J0(n),Ey(),Y=s,ee=a,it.transition=o}else e.current=n;if(ho&&(ho=!1,on=e,aa=i),o=e.pendingLanes,o===0&&(fn=null),Ty(n.stateNode),Ke(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oa)throw oa=!1,e=Zl,Zl=null,e;return aa&1&&e.tag!==0&&wr(),o=e.pendingLanes,o&1?e===eu?gi++:(gi=0,eu=e):gi=0,xn(),null}function wr(){if(on!==null){var e=Ih(aa),t=it.transition,n=ee;try{if(it.transition=null,ee=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,aa=0,Y&6)throw Error(_(331));var i=Y;for(Y|=4,M=e.current;M!==null;){var o=M,a=o.child;if(M.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(M=u;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:pi(8,d,o)}var c=d.child;if(c!==null)c.return=d,M=c;else for(;M!==null;){d=M;var f=d.sibling,y=d.return;if(qg(d),d===u){M=null;break}if(f!==null){f.return=y,M=f;break}M=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}M=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,M=a;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:pi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,M=g;break e}M=o.return}}var p=e.current;for(M=p;M!==null;){a=M;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,M=m;else e:for(a=p;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ha(9,s)}}catch(b){fe(s,s.return,b)}if(s===a){M=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,M=x;break e}M=s.return}}if(Y=i,xn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Ra,e)}catch{}r=!0}return r}finally{ee=n,it.transition=t}}return!1}function hf(e,t,n){t=Or(n,t),t=Mg(e,t,1),e=dn(e,t,1),t=Me(),e!==null&&(Vi(e,1,t),Ke(e,t))}function fe(e,t,n){if(e.tag===3)hf(e,e,n);else for(;t!==null;){if(t.tag===3){hf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=Or(n,e),e=Dg(t,e,1),t=dn(t,e,1),e=Me(),t!==null&&(Vi(t,1,e),Ke(t,e));break}}t=t.return}}function iw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Ee&n)===n&&(we===4||we===3&&(Ee&130023424)===Ee&&500>he()-Oc?_n(e,0):$c|=n),Ke(e,t)}function im(e,t){t===0&&(e.mode&1?(t=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):t=1);var n=Me();e=At(e,t),e!==null&&(Vi(e,t,n),Ke(e,n))}function ow(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),im(e,n)}function aw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),im(e,n)}var om;om=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ue=!1,G0(e,t,n);Ue=!!(e.flags&131072)}else Ue=!1,se&&t.flags&1048576&&lg(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lo(e,t),e=t.pendingProps;var i=kr(t,ze.current);yr(t,n),i=wc(null,t,r,e,i,n);var o=xc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(o=!0,Qo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hc(t),i.updater=Aa,t.stateNode=i,i._reactInternals=t,Bl(t,r,e,n),t=Vl(null,t,r,!0,o,n)):(t.tag=0,se&&o&&sc(t),Ie(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=lw(r),e=ut(r,e),i){case 0:t=Wl(null,t,r,e,n);break e;case 1:t=rf(null,t,r,e,n);break e;case 11:t=tf(null,t,r,e,n);break e;case 14:t=nf(null,t,r,ut(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Wl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),rf(e,t,r,i,n);case 3:e:{if(Bg(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,fg(e,t),ea(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Or(Error(_(423)),t),t=of(e,t,r,n,i);break e}else if(r!==i){i=Or(Error(_(424)),t),t=of(e,t,r,n,i);break e}else for(Qe=cn(t.stateNode.containerInfo.firstChild),Xe=t,se=!0,dt=null,n=mg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){t=Ft(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return vg(t),e===null&&Al(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,zl(r,i)?a=null:o!==null&&zl(r,o)&&(t.flags|=32),Hg(e,t),Ie(e,t,a,n),t.child;case 6:return e===null&&Al(t),null;case 13:return Ug(e,t,n);case 4:return gc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cr(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),tf(e,t,r,i,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ne(Jo,r._currentValue),r._currentValue=a,o!==null)if(mt(o.value,a)){if(o.children===i.children&&!We.current){t=Ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Nt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Fl(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(_(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Fl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ie(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,yr(t,n),i=ot(i),r=r(i),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),nf(e,t,r,i,n);case 15:return Ag(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Lo(e,t),t.tag=1,Ve(r)?(e=!0,Qo(t)):e=!1,yr(t,n),hg(t,r,i),Bl(t,r,i,n),Vl(null,t,r,!0,e,n);case 19:return Wg(e,t,n);case 22:return Fg(e,t,n)}throw Error(_(156,t.tag))};function am(e,t){return _h(e,t)}function sw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new sw(e,t,n,r)}function Lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lw(e){if(typeof e=="function")return Lc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qu)return 11;if(e===Xu)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Lc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jn:return Rn(n.children,i,o,t);case qu:a=8,i|=8;break;case fl:return e=rt(12,n,t,i|2),e.elementType=fl,e.lanes=o,e;case pl:return e=rt(13,n,t,i),e.elementType=pl,e.lanes=o,e;case hl:return e=rt(19,n,t,i),e.elementType=hl,e.lanes=o,e;case gh:return Ua(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ph:a=10;break e;case hh:a=9;break e;case Qu:a=11;break e;case Xu:a=14;break e;case Yt:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=rt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Rn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Ua(e,t,n,r){return e=rt(22,e,r,t),e.elementType=gh,e.lanes=n,e.stateNode={isHidden:!1},e}function Ms(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Ds(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ys(0),this.expirationTimes=ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tc(e,t,n,r,i,o,a,s,l){return e=new uw(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=rt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hc(o),e}function cw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sm(e){if(!e)return vn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ve(n))return ag(e,n,t)}return t}function lm(e,t,n,r,i,o,a,s,l){return e=Tc(n,r,!0,e,i,o,a,s,l),e.context=sm(null),n=e.current,r=Me(),i=pn(n),o=Nt(r,i),o.callback=t??null,dn(n,o,i),e.current.lanes=i,Vi(e,i,r),Ke(e,r),e}function Wa(e,t,n,r){var i=t.current,o=Me(),a=pn(i);return n=sm(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(i,t,a),e!==null&&(ht(e,i,a,o),Po(e,i,a)),a}function la(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _c(e,t){gf(e,t),(e=e.alternate)&&gf(e,t)}function dw(){return null}var um=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rc(e){this._internalRoot=e}Va.prototype.render=Rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Wa(e,t,null,null)};Va.prototype.unmount=Rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){Wa(null,e,null,null)}),t[Dt]=null}};function Va(e){this._internalRoot=e}Va.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ah();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Hh(e)}};function zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mf(){}function fw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=la(a);o.call(u)}}var a=lm(t,r,e,0,null,!1,!1,"",mf);return e._reactRootContainer=a,e[Dt]=a.current,Pi(e.nodeType===8?e.parentNode:e),Hn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=la(l);s.call(u)}}var l=Tc(e,0,!1,null,null,!1,!1,"",mf);return e._reactRootContainer=l,e[Dt]=l.current,Pi(e.nodeType===8?e.parentNode:e),Hn(function(){Wa(t,l,n,r)}),l}function Ga(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=la(a);s.call(l)}}Wa(t,a,e,i)}else a=fw(n,t,e,i,r);return la(a)}Mh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ii(t.pendingLanes);n!==0&&(Zu(t,n|1),Ke(t,he()),!(Y&6)&&(Pr=he()+500,xn()))}break;case 13:Hn(function(){var r=At(e,1);if(r!==null){var i=Me();ht(r,e,1,i)}}),_c(e,1)}};ec=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Me();ht(t,e,134217728,n)}_c(e,134217728)}};Dh=function(e){if(e.tag===13){var t=pn(e),n=At(e,t);if(n!==null){var r=Me();ht(n,e,t,r)}_c(e,t)}};Ah=function(){return ee};Fh=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};Cl=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ma(r);if(!i)throw Error(_(90));vh(r),vl(r,i)}}}break;case"textarea":wh(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};Oh=Pc;Ph=Hn;var pw={usingClientEntryPoint:!1,Events:[Gi,nr,Ma,Ch,$h,Pc]},ei={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hw={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lh(e),e===null?null:e.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||dw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{Ra=go.inject(hw),Ct=go}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pw;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zc(t))throw Error(_(200));return cw(e,t,null,n)};Je.createRoot=function(e,t){if(!zc(e))throw Error(_(299));var n=!1,r="",i=um;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tc(e,1,!1,null,null,n,!1,r,i),e[Dt]=t.current,Pi(e.nodeType===8?e.parentNode:e),new Rc(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Lh(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return Hn(e)};Je.hydrate=function(e,t,n){if(!Ka(t))throw Error(_(200));return Ga(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!zc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=um;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=lm(t,null,e,1,n??null,i,!1,o,a),e[Dt]=t.current,Pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Va(t)};Je.render=function(e,t,n){if(!Ka(t))throw Error(_(200));return Ga(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!Ka(e))throw Error(_(40));return e._reactRootContainer?(Hn(function(){Ga(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};Je.unstable_batchedUpdates=Pc;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ka(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ga(e,t,n,!1,r)};Je.version="18.2.0-next-9e3b772b8-20220608";function cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cm)}catch(e){console.error(e)}}cm(),lh.exports=Je;var gw=lh.exports,vf=gw;cl.createRoot=vf.createRoot,cl.hydrateRoot=vf.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ii(){return Ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ii.apply(this,arguments)}var an;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(an||(an={}));const yf="popstate";function mw(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return ru("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:dm(i)}return yw(t,n,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Nc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function vw(){return Math.random().toString(36).substr(2,8)}function wf(e,t){return{usr:e.state,key:e.key,idx:t}}function ru(e,t,n,r){return n===void 0&&(n=null),Ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Br(t):t,{state:n,key:t&&t.key||r||vw()})}function dm(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function yw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=an.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(Ii({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function c(){s=an.Pop;let k=d(),g=k==null?null:k-u;u=k,l&&l({action:s,location:w.location,delta:g})}function f(k,g){s=an.Push;let p=ru(w.location,k,g);n&&n(p,k),u=d()+1;let m=wf(p,u),x=w.createHref(p);try{a.pushState(m,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(x)}o&&l&&l({action:s,location:w.location,delta:1})}function y(k,g){s=an.Replace;let p=ru(w.location,k,g);n&&n(p,k),u=d();let m=wf(p,u),x=w.createHref(p);a.replaceState(m,"",x),o&&l&&l({action:s,location:w.location,delta:0})}function v(k){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof k=="string"?k:dm(k);return xe(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return s},get location(){return e(i,a)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(yf,c),l=k,()=>{i.removeEventListener(yf,c),l=null}},createHref(k){return t(i,k)},createURL:v,encodeLocation(k){let g=v(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:y,go(k){return a.go(k)}};return w}var xf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xf||(xf={}));function ww(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Br(t):t,i=hm(r.pathname||"/",n);if(i==null)return null;let o=fm(e);xw(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=jw(o[s],_w(i));return a}function fm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=zn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(xe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),fm(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Pw(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of pm(o.path))i(o,a,l)}),t}function pm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=pm(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function xw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ew(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Sw=/^:\w+$/,kw=3,bw=2,Cw=1,$w=10,Ow=-2,Sf=e=>e==="*";function Pw(e,t){let n=e.split("/"),r=n.length;return n.some(Sf)&&(r+=Ow),t&&(r+=bw),n.filter(i=>!Sf(i)).reduce((i,o)=>i+(Sw.test(o)?kw:o===""?Cw:$w),r)}function Ew(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function jw(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Lw({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=s.route;o.push({params:r,pathname:zn([i,d.pathname]),pathnameBase:Dw(zn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=zn([i,d.pathnameBase]))}return o}function Lw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Tw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let f=s[c]||"";a=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[d]=Rw(s[c]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Tw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Nc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function _w(e){try{return decodeURI(e)}catch(t){return Nc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Rw(e,t){try{return decodeURIComponent(e)}catch(n){return Nc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function hm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function zw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Br(e):e;return{pathname:n?n.startsWith("/")?n:Nw(n,t):t,search:Aw(r),hash:Fw(i)}}function Nw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function As(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Iw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Mw(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Br(e):(i=Ii({},e),xe(!i.pathname||!i.pathname.includes("?"),As("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),As("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),As("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let c=t.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}s=c>=0?t[c]:"/"}let l=zw(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const zn=e=>e.join("/").replace(/\/\/+/g,"/"),Dw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Aw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Fw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Hw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gm=["post","put","patch","delete"];new Set(gm);const Bw=["get",...gm];new Set(Bw);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ua.apply(this,arguments)}const Ic=T.createContext(null),Uw=T.createContext(null),qa=T.createContext(null),Qa=T.createContext(null),Ur=T.createContext({outlet:null,matches:[],isDataRoute:!1}),mm=T.createContext(null);function Xa(){return T.useContext(Qa)!=null}function Ya(){return Xa()||xe(!1),T.useContext(Qa).location}function vm(e){T.useContext(qa).static||T.useLayoutEffect(e)}function Ja(){let{isDataRoute:e}=T.useContext(Ur);return e?n1():Ww()}function Ww(){Xa()||xe(!1);let e=T.useContext(Ic),{basename:t,navigator:n}=T.useContext(qa),{matches:r}=T.useContext(Ur),{pathname:i}=Ya(),o=JSON.stringify(Iw(r).map(l=>l.pathnameBase)),a=T.useRef(!1);return vm(()=>{a.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){n.go(l);return}let d=Mw(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:zn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}function Vw(e,t){return Kw(e,t)}function Kw(e,t,n){Xa()||xe(!1);let{navigator:r}=T.useContext(qa),{matches:i}=T.useContext(Ur),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=Ya(),u;if(t){var d;let w=typeof t=="string"?Br(t):t;s==="/"||(d=w.pathname)!=null&&d.startsWith(s)||xe(!1),u=w}else u=l;let c=u.pathname||"/",f=s==="/"?c:c.slice(s.length)||"/",y=ww(e,{pathname:f}),v=Yw(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:zn([s,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:zn([s,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&v?T.createElement(Qa.Provider,{value:{location:ua({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:an.Pop}},v):v}function Gw(){let e=t1(),t=Hw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,o)}const qw=T.createElement(Gw,null);class Qw extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Ur.Provider,{value:this.props.routeContext},T.createElement(mm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xw(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Ic);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Ur.Provider,{value:t},r)}function Yw(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=o.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||xe(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,u)=>{let d=l.route.id?a==null?void 0:a[l.route.id]:null,c=null;n&&(c=l.route.errorElement||qw);let f=t.concat(o.slice(0,u+1)),y=()=>{let v;return d?v=c:l.route.Component?v=T.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=s,T.createElement(Xw,{match:l,routeContext:{outlet:s,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(Qw,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var iu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(iu||(iu={}));var Mi;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Mi||(Mi={}));function Jw(e){let t=T.useContext(Ic);return t||xe(!1),t}function Zw(e){let t=T.useContext(Uw);return t||xe(!1),t}function e1(e){let t=T.useContext(Ur);return t||xe(!1),t}function ym(e){let t=e1(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function t1(){var e;let t=T.useContext(mm),n=Zw(Mi.UseRouteError),r=ym(Mi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function n1(){let{router:e}=Jw(iu.UseNavigateStable),t=ym(Mi.UseNavigateStable),n=T.useRef(!1);return vm(()=>{n.current=!0}),T.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ua({fromRouteId:t},o)))},[e,t])}function zo(e){xe(!1)}function r1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=an.Pop,navigator:o,static:a=!1}=e;Xa()&&xe(!1);let s=t.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Br(r));let{pathname:u="/",search:d="",hash:c="",state:f=null,key:y="default"}=r,v=T.useMemo(()=>{let w=hm(u,s);return w==null?null:{location:{pathname:w,search:d,hash:c,state:f,key:y},navigationType:i}},[s,u,d,c,f,y,i]);return v==null?null:T.createElement(qa.Provider,{value:l},T.createElement(Qa.Provider,{children:n,value:v}))}function i1(e){let{children:t,location:n}=e;return Vw(ou(t),n)}var kf;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(kf||(kf={}));new Promise(()=>{});function ou(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let o=[...t,i];if(r.type===T.Fragment){n.push.apply(n,ou(r.props.children,o));return}r.type!==zo&&xe(!1),!r.props.index||!r.props.children||xe(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ou(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const o1="startTransition",bf=oy[o1];function a1(e){let{basename:t,children:n,future:r,window:i}=e,o=T.useRef();o.current==null&&(o.current=mw({window:i,v5Compat:!0}));let a=o.current,[s,l]=T.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=T.useCallback(c=>{u&&bf?bf(()=>l(c)):l(c)},[l,u]);return T.useLayoutEffect(()=>a.listen(d),[a,d]),T.createElement(r1,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}var Cf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Cf||(Cf={}));var $f;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($f||($f={}));var Re=function(){return Re=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Re.apply(this,arguments)};function Er(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ie="-ms-",mi="-moz-",Z="-webkit-",wm="comm",Za="rule",Mc="decl",s1="@import",xm="@keyframes",l1="@layer",u1=Math.abs,Dc=String.fromCharCode,au=Object.assign;function c1(e,t){return ke(e,0)^45?(((t<<2^ke(e,0))<<2^ke(e,1))<<2^ke(e,2))<<2^ke(e,3):0}function Sm(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function No(e,t){return e.indexOf(t)}function ke(e,t){return e.charCodeAt(t)|0}function jr(e,t,n){return e.slice(t,n)}function St(e){return e.length}function km(e){return e.length}function ai(e,t){return t.push(e),e}function d1(e,t){return e.map(t).join("")}function Of(e,t){return e.filter(function(n){return!Lt(n,t)})}var es=1,Lr=1,bm=0,st=0,me=0,Wr="";function ts(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:es,column:Lr,length:a,return:"",siblings:s}}function Xt(e,t){return au(ts("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qn(e){for(;e.root;)e=Xt(e.root,{children:[e]});ai(e,e.siblings)}function f1(){return me}function p1(){return me=st>0?ke(Wr,--st):0,Lr--,me===10&&(Lr=1,es--),me}function gt(){return me=st<bm?ke(Wr,st++):0,Lr++,me===10&&(Lr=1,es++),me}function Nn(){return ke(Wr,st)}function Io(){return st}function ns(e,t){return jr(Wr,e,t)}function su(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function h1(e){return es=Lr=1,bm=St(Wr=e),st=0,[]}function g1(e){return Wr="",e}function Fs(e){return Sm(ns(st-1,lu(e===91?e+2:e===40?e+1:e)))}function m1(e){for(;(me=Nn())&&me<33;)gt();return su(e)>2||su(me)>3?"":" "}function v1(e,t){for(;--t&&gt()&&!(me<48||me>102||me>57&&me<65||me>70&&me<97););return ns(e,Io()+(t<6&&Nn()==32&&gt()==32))}function lu(e){for(;gt();)switch(me){case e:return st;case 34:case 39:e!==34&&e!==39&&lu(me);break;case 40:e===41&&lu(e);break;case 92:gt();break}return st}function y1(e,t){for(;gt()&&e+me!==47+10;)if(e+me===42+42&&Nn()===47)break;return"/*"+ns(t,st-1)+"*"+Dc(e===47?e:gt())}function w1(e){for(;!su(Nn());)gt();return ns(e,st)}function x1(e){return g1(Mo("",null,null,null,[""],e=h1(e),0,[0],e))}function Mo(e,t,n,r,i,o,a,s,l){for(var u=0,d=0,c=a,f=0,y=0,v=0,w=1,k=1,g=1,p=0,m="",x=i,b=o,C=r,P=m;k;)switch(v=p,p=gt()){case 40:if(v!=108&&ke(P,c-1)==58){No(P+=V(Fs(p),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:P+=Fs(p);break;case 9:case 10:case 13:case 32:P+=m1(v);break;case 92:P+=v1(Io()-1,7);continue;case 47:switch(Nn()){case 42:case 47:ai(S1(y1(gt(),Io()),t,n,l),l);break;default:P+="/"}break;case 123*w:s[u++]=St(P)*g;case 125*w:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+d:g==-1&&(P=V(P,/\f/g,"")),y>0&&St(P)-c&&ai(y>32?Ef(P+";",r,n,c-1,l):Ef(V(P," ","")+";",r,n,c-2,l),l);break;case 59:P+=";";default:if(ai(C=Pf(P,t,n,u,d,i,s,m,x=[],b=[],c,o),o),p===123)if(d===0)Mo(P,t,C,C,x,o,c,s,b);else switch(f===99&&ke(P,3)===110?100:f){case 100:case 108:case 109:case 115:Mo(e,C,C,r&&ai(Pf(e,C,C,0,0,i,s,m,i,x=[],c,b),b),i,b,c,s,r?x:b);break;default:Mo(P,C,C,C,[""],b,0,s,b)}}u=d=y=0,w=g=1,m=P="",c=a;break;case 58:c=1+St(P),y=v;default:if(w<1){if(p==123)--w;else if(p==125&&w++==0&&p1()==125)continue}switch(P+=Dc(p),p*w){case 38:g=d>0?1:(P+="\f",-1);break;case 44:s[u++]=(St(P)-1)*g,g=1;break;case 64:Nn()===45&&(P+=Fs(gt())),f=Nn(),d=c=St(m=P+=w1(Io())),p++;break;case 45:v===45&&St(P)==2&&(w=0)}}return o}function Pf(e,t,n,r,i,o,a,s,l,u,d,c){for(var f=i-1,y=i===0?o:[""],v=km(y),w=0,k=0,g=0;w<r;++w)for(var p=0,m=jr(e,f+1,f=u1(k=a[w])),x=e;p<v;++p)(x=Sm(k>0?y[p]+" "+m:V(m,/&\f/g,y[p])))&&(l[g++]=x);return ts(e,t,n,i===0?Za:s,l,u,d,c)}function S1(e,t,n,r){return ts(e,t,n,wm,Dc(f1()),jr(e,2,-2),0,r)}function Ef(e,t,n,r,i){return ts(e,t,n,Mc,jr(e,0,r),jr(e,r+1,-1),r,i)}function Cm(e,t,n){switch(c1(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 4789:return mi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+mi+e+ie+e+e;case 5936:switch(ke(e,t+11)){case 114:return Z+e+ie+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+ie+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+ie+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Z+e+ie+e+e;case 6165:return Z+e+ie+"flex-"+e+e;case 5187:return Z+e+V(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+ie+"flex-$1$2")+e;case 5443:return Z+e+ie+"flex-item-"+V(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":ie+"grid-row-"+V(e,/flex-|-self/g,""))+e;case 4675:return Z+e+ie+"flex-line-pack"+V(e,/align-content|flex-|-self/g,"")+e;case 5548:return Z+e+ie+V(e,"shrink","negative")+e;case 5292:return Z+e+ie+V(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+V(e,"-grow","")+Z+e+ie+V(e,"grow","positive")+e;case 4554:return Z+V(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return ie+"grid-column-align"+jr(e,t)+e;break;case 2592:case 3360:return ie+V(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Lt(r.props,/grid-\w+-end/)})?~No(e+(n=n[t].value),"span")?e:ie+V(e,"-start","")+e+ie+"grid-row-span:"+(~No(n,"span")?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":ie+V(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Lt(r.props,/grid-\w+-start/)})?e:ie+V(V(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(St(e)-1-t>6)switch(ke(e,t+1)){case 109:if(ke(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+mi+(ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~No(e,"stretch")?Cm(V(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return V(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return ie+i+":"+o+u+(a?ie+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(ke(e,t+6)===121)return V(e,":",":"+Z)+e;break;case 6444:switch(ke(e,ke(e,14)===45?18:11)){case 120:return V(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(ke(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+ie+"$2box$3")+e;case 100:return V(e,":",":"+ie)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(e,"scroll-","scroll-snap-")+e}return e}function ca(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function k1(e,t,n,r){switch(e.type){case l1:if(e.children.length)break;case s1:case Mc:return e.return=e.return||e.value;case wm:return"";case xm:return e.return=e.value+"{"+ca(e.children,r)+"}";case Za:if(!St(e.value=e.props.join(",")))return""}return St(n=ca(e.children,r))?e.return=e.value+"{"+n+"}":""}function b1(e){var t=km(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function C1(e){return function(t){t.root||(t=t.return)&&e(t)}}function $1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Mc:e.return=Cm(e.value,e.length,n);return;case xm:return ca([Xt(e,{value:V(e.value,"@","@"+Z)})],r);case Za:if(e.length)return d1(n=e.props,function(i){switch(Lt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qn(Xt(e,{props:[V(i,/:(read-\w+)/,":"+mi+"$1")]})),qn(Xt(e,{props:[i]})),au(e,{props:Of(n,r)});break;case"::placeholder":qn(Xt(e,{props:[V(i,/:(plac\w+)/,":"+Z+"input-$1")]})),qn(Xt(e,{props:[V(i,/:(plac\w+)/,":"+mi+"$1")]})),qn(Xt(e,{props:[V(i,/:(plac\w+)/,ie+"input-$1")]})),qn(Xt(e,{props:[i]})),au(e,{props:Of(n,r)});break}return""})}}var O1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ac=typeof window<"u"&&"HTMLElement"in window,P1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),E1={},Fc=Object.freeze([]),_r=Object.freeze({});function $m(e,t,n){return n===void 0&&(n=_r),e.theme!==n.theme&&e.theme||t||n.theme}var Om=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),j1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,L1=/(^-|-$)/g;function jf(e){return e.replace(j1,"-").replace(L1,"")}var T1=/(a)(d)/gi,Lf=function(e){return String.fromCharCode(e+(e>25?39:97))};function uu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Lf(t%52)+n;return(Lf(t%52)+n).replace(T1,"$1-$2")}var Hs,ur=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Pm=function(e){return ur(5381,e)};function Hc(e){return uu(Pm(e)>>>0)}function _1(e){return e.displayName||e.name||"Component"}function Bs(e){return typeof e=="string"&&!0}var Em=typeof Symbol=="function"&&Symbol.for,jm=Em?Symbol.for("react.memo"):60115,R1=Em?Symbol.for("react.forward_ref"):60112,z1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},N1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},I1=((Hs={})[R1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hs[jm]=Lm,Hs);function Tf(e){return("type"in(t=e)&&t.type.$$typeof)===jm?Lm:"$$typeof"in e?I1[e.$$typeof]:z1;var t}var M1=Object.defineProperty,D1=Object.getOwnPropertyNames,_f=Object.getOwnPropertySymbols,A1=Object.getOwnPropertyDescriptor,F1=Object.getPrototypeOf,Rf=Object.prototype;function Tm(e,t,n){if(typeof t!="string"){if(Rf){var r=F1(t);r&&r!==Rf&&Tm(e,r,n)}var i=D1(t);_f&&(i=i.concat(_f(t)));for(var o=Tf(e),a=Tf(t),s=0;s<i.length;++s){var l=i[s];if(!(l in N1||n&&n[l]||a&&l in a||o&&l in o)){var u=A1(t,l);try{M1(e,l,u)}catch{}}}}return e}function Rr(e){return typeof e=="function"}function Bc(e){return typeof e=="object"&&"styledComponentId"in e}function Ln(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function da(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Di(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cu(e,t,n){if(n===void 0&&(n=!1),!n&&!Di(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=cu(e[r],t[r]);else if(Di(t))for(var r in t)e[r]=cu(e[r],t[r]);return e}function Uc(e,t){Object.defineProperty(e,"toString",{value:t})}function Qi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var H1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Qi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),Do=new Map,fa=new Map,Us=1,mo=function(e){if(Do.has(e))return Do.get(e);for(;fa.has(Us);)Us++;var t=Us++;return Do.set(e,t),fa.set(t,e),t},B1=function(e,t){Do.set(e,t),fa.set(t,e)},U1="style[".concat(Tr,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),W1=new RegExp("^".concat(Tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),V1=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},K1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(W1);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(B1(d,u),V1(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function G1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _m=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){return Array.from(s.querySelectorAll("style[".concat(Tr,"]"))).at(-1)}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Tr,"active"),r.setAttribute("data-styled-version","6.0.1");var a=G1();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},q1=function(){function e(t){this.element=_m(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Qi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Q1=function(){function e(t){this.element=_m(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),X1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),zf=Ac,Y1={isServer:!Ac,useCSSOMInjection:!P1},pa=function(){function e(t,n,r){t===void 0&&(t=_r),n===void 0&&(n={});var i=this;this.options=Re(Re({},Y1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ac&&zf&&(zf=!1,function(o){for(var a=document.querySelectorAll(U1),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Tr)!=="active"&&(K1(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Uc(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(c){var f=function(g){return fa.get(g)}(c);if(f===void 0)return"continue";var y=o.names.get(f),v=a.getGroup(c);if(y===void 0||v.length===0)return"continue";var w="".concat(Tr,".g").concat(c,'[id="').concat(f,'"]'),k="";y!==void 0&&y.forEach(function(g){g.length>0&&(k+="".concat(g,","))}),l+="".concat(v).concat(w,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},d=0;d<s;d++)u(d);return l}(i)})}return e.registerId=function(t){return mo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new X1(i):r?new q1(i):new Q1(i)}(this.options),new H1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(mo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(mo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(mo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),J1=/&/g,Z1=/^\s*\/\/.*$/gm;function Rm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Rm(n.children,t)),n})}function ex(e){var t,n,r,i=e===void 0?_r:e,o=i.options,a=o===void 0?_r:o,s=i.plugins,l=s===void 0?Fc:s,u=function(f,y,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},d=l.slice();d.push(function(f){f.type===Za&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(J1,n).replace(r,u))}),a.prefix&&d.push($1),d.push(k1);var c=function(f,y,v,w){y===void 0&&(y=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var k=f.replace(Z1,""),g=x1(v||y?"".concat(v," ").concat(y," { ").concat(k," }"):k);a.namespace&&(g=Rm(g,a.namespace));var p=[];return ca(g,b1(d.concat(C1(function(m){return p.push(m)})))),p};return c.hash=l.length?l.reduce(function(f,y){return y.name||Qi(15),ur(f,y.name)},5381).toString():"",c}var tx=new pa,du=ex(),zm=ft.createContext({shouldForwardProp:void 0,styleSheet:tx,stylis:du});zm.Consumer;ft.createContext(void 0);function fu(){return T.useContext(zm)}var Nm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=du);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Uc(this,function(){throw Qi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=du),this.name+t.hash},e}(),nx=function(e){return e>="A"&&e<="Z"};function Nf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;nx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Im=function(e){return e==null||e===!1||e===""},Mm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Im(o)&&(Array.isArray(o)&&o.isCss||Rr(o)?r.push("".concat(Nf(i),":"),o,";"):Di(o)?r.push.apply(r,Er(Er(["".concat(i," {")],Mm(o),!1),["}"],!1)):r.push("".concat(Nf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in O1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function gn(e,t,n,r){if(Im(e))return[];if(Bc(e))return[".".concat(e.styledComponentId)];if(Rr(e)){if(!Rr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return gn(i,t,n,r)}var o;return e instanceof Nm?n?(e.inject(n,r),[e.getName(r)]):[e]:Di(e)?Mm(e):Array.isArray(e)?e.flatMap(function(a){return gn(a,t,n,r)}):[e.toString()]}function Dm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Rr(n)&&!Bc(n))return!1}return!0}var rx=Pm("6.0.1"),ix=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Dm(t),this.componentId=n,this.baseHash=ur(rx,n),this.baseStyle=r,pa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ln(i,this.staticRulesId);else{var o=da(gn(this.rules,t,n,r)),a=uu(ur(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=Ln(i,a),this.staticRulesId=a}else{for(var l=ur(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var f=da(gn(c,t,n,r));l=ur(l,f),u+=f}}if(u){var y=uu(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=Ln(i,y)}}return i},e}(),Wc=ft.createContext(void 0);Wc.Consumer;var Ws={};function ox(e,t,n){var r=Bc(e),i=e,o=!Bs(e),a=t.attrs,s=a===void 0?Fc:a,l=t.componentId,u=l===void 0?function(x,b){var C=typeof x!="string"?"sc":jf(x);Ws[C]=(Ws[C]||0)+1;var P="".concat(C,"-").concat(Hc("6.0.1"+C+Ws[C]));return b?"".concat(b,"-").concat(P):P}(t.displayName,t.parentComponentId):l,d=t.displayName,c=d===void 0?function(x){return Bs(x)?"styled.".concat(x):"Styled(".concat(_1(x),")")}(e):d,f=t.displayName&&t.componentId?"".concat(jf(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;v=function(x,b){return w(x,b)&&k(x,b)}}else v=w}var g=new ix(n,f,r?i.componentStyle:void 0);g.isStatic&&s.length;function p(x,b){return function(C,P,E,R){var z=C.attrs,A=C.componentStyle,H=C.defaultProps,D=C.foldedComponentIds,$=C.styledComponentId,j=C.target,B=ft.useContext(Wc),W=fu(),L=C.shouldForwardProp||W.shouldForwardProp,N=function(Vt,Ge,Pt){for(var Kr,Sn=Re(Re({},Ge),{className:void 0,theme:Pt}),fs=0;fs<Vt.length;fs+=1){var Yi=Rr(Kr=Vt[fs])?Kr(Sn):Kr;for(var Kt in Yi)Sn[Kt]=Kt==="className"?Ln(Sn[Kt],Yi[Kt]):Kt==="style"?Re(Re({},Sn[Kt]),Yi[Kt]):Yi[Kt]}return Ge.className&&(Sn.className=Ln(Sn.className,Ge.className)),Sn}(z,P,$m(P,B,H)||_r),F=N.as||j,Q={};for(var K in N)N[K]===void 0||K[0]==="$"||K==="as"||K==="theme"||(K==="forwardedAs"?Q.as=N.forwardedAs:L&&!L(K,F)||(Q[K]=N[K]));var Ot=function(Vt,Ge){var Pt=fu(),Kr=Vt.generateAndInjectStyles(Ge,Pt.styleSheet,Pt.stylis);return Kr}(A,N),$e=Ln(D,$);return Ot&&($e+=" "+Ot),N.className&&($e+=" "+N.className),Q[Bs(F)&&!Om.has(F)?"class":"className"]=$e,Q.ref=E,T.createElement(F,Q)}(m,x,b)}p.displayName=c;var m=ft.forwardRef(p);return m.attrs=y,m.componentStyle=g,m.displayName=c,m.shouldForwardProp=v,m.foldedComponentIds=r?Ln(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(b){for(var C=[],P=1;P<arguments.length;P++)C[P-1]=arguments[P];for(var E=0,R=C;E<R.length;E++)cu(b,R[E],!0);return b}({},i.defaultProps,x):x}}),Uc(m,function(){return".".concat(m.styledComponentId)}),o&&Tm(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function If(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Mf=function(e){return Object.assign(e,{isCss:!0})};function ge(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Rr(e)||Di(e)){var r=e;return Mf(gn(If(Fc,Er([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?gn(i):Mf(gn(If(i,t)))}function pu(e,t,n){if(n===void 0&&(n=_r),!t)throw Qi(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,ge.apply(void 0,Er([i],o,!1)))};return r.attrs=function(i){return pu(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return pu(e,t,Re(Re({},n),i))},r}var Am=function(e){return pu(ox,e)},S=Am;Om.forEach(function(e){S[e]=Am(e)});var ax=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Dm(t),pa.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(da(gn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&pa.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function sx(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ge.apply(void 0,Er([e],t,!1)),i="sc-global-".concat(Hc(JSON.stringify(r))),o=new ax(r,i),a=function(l){var u=fu(),d=ft.useContext(Wc),c=ft.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(c,l,u.styleSheet,d,u.stylis),(ft.useInsertionEffect||ft.useLayoutEffect)(function(){if(!u.styleSheet.server)return s(c,l,u.styleSheet,d,u.stylis),function(){return o.removeStyles(c,u.styleSheet)}},[c,l,u.styleSheet,d,u.stylis]),null};function s(l,u,d,c,f){if(o.isStatic)o.renderStyles(l,E1,d,f);else{var y=Re(Re({},u),{theme:$m(u,c,a.defaultProps)});o.renderStyles(l,y,d,f)}}return ft.memo(a)}function Fm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=da(ge.apply(void 0,Er([e],t,!1))),i=Hc(r);return new Nm(i,r)}const O="1000px",J=ge`
  margin: 0;
  padding: 0;
`,zr=ge`
  background-repeat: no-repeat;
  background-size: contain;
`,te={blueColor:"#366eff",lightBlackColor:"#16202C",blackColor:"#000000",lightGrayColor:"#1A202C",darkGrayColor:"#0b132a",whiteColor:"#ffffff",transparentWhiteColor:"#ffffff80",grayColor:"#fcfcfc",redColor:"#ff0000",lightGreenColor:"#3cc1b3",greenColor:"#20F1C0",darkGreenColor:"#00BAA4",darkColor:"#1C2938",deepColor:"#141E29",deepGrayColor:"#17212D",scrollColor:"#b8b8b8",headerColor:"#16212D",ratesFeesColor:"#fafbfc",navigateLinkColor:"#b7b5b1"};S.button`
  ${J};
  font-family: Gramatika-Regular, sans-serif;
  font-style: normal;
  border: none;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
`;ge`
  background-repeat: no-repeat;
  background-position: center bottom;
`;const Vc=ge`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
`,Bt=ge`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`,pe=ge`
  font-family: Gramatika-Regular, sans-serif;
`,Kc=ge`
  font-family: Gramatika-Bold, sans-serif;
`,Vr=ge`
  font-family: Plus_Jakarta_Sans-Regular, sans-serif;
`,Wn=ge`
  font-family: Gramatika-Medium, sans-serif;
`,lx=Fm`
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
`,ux=Fm`
  from {
    right: 0;
  }
  to {
    right: -100%;
  }
`;ge`
  margin-bottom: 2vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: ${O}) {
    flex-direction: column;
    align-items: center;
  }
`;const Hm=ge`
  position: absolute;
  background-repeat: no-repeat;
  z-index: 2;
  background-size: cover;

  @media (max-width: ${O}) {
    width: 45vw;
    background-size: auto 100%;
    background-position: center;
  }
`;ge`
  color: ${te.whiteColor};
  padding-bottom: 2.57vw;
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: 1.74vw;
  font-family: Gramatika-Regular, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;const Gc=ge`
  ${J};
  color: ${te.whiteColor};
  ${pe};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.08);
  }
`,qc=ge`
  ${J};
  color: ${te.blackColor};
  font-weight: 400;
  font-size: calc(20vw / 14.4);
  font-style: normal;
  line-height: 2.2;

  @media (max-width: ${O}) {
    font-size: calc(20vw / 5.09);
  }
`,vt=()=>{const[e,t]=T.useState(null);return T.useEffect(()=>{const n=()=>{const r=window.innerWidth;t(r<=parseInt(O))};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e};function cx(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const Df={};function hu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Df[t[0]]||(typeof t[0]=="string"&&(Df[t[0]]=new Date),cx(...t))}const Bm=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function Af(e,t,n){e.loadNamespaces(t,Bm(e,n))}function Ff(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,Bm(e,r))}function dx(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],i=t.options?t.options.fallbackLng:!1,o=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const u=t.services.backendConnector.state[`${s}|${l}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!i||a(o,e)))}function fx(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(hu("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(i,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,e))return!1}}):dx(e,t,n)}const px=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,hx={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},gx=e=>hx[e],mx=e=>e.replace(px,gx);let gu={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:mx};function vx(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};gu={...gu,...e}}function yx(){return gu}let Um;function wx(e){Um=e}function xx(){return Um}const Sx={type:"3rdParty",init(e){vx(e.options.react),wx(e)}},Wm=T.createContext();class kx{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const bx=(e,t)=>{const n=T.useRef();return T.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function Ut(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:i}=T.useContext(Wm)||{},o=n||r||xx();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new kx),!o){hu("You will need to pass in an i18next instance by using initReactI18next");const m=(b,C)=>typeof C=="string"?C:C&&typeof C=="object"&&typeof C.defaultValue=="string"?C.defaultValue:Array.isArray(b)?b[b.length-1]:b,x=[m,{},!1];return x.t=m,x.i18n={},x.ready=!1,x}o.options.react&&o.options.react.wait!==void 0&&hu("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...yx(),...o.options.react,...t},{useSuspense:s,keyPrefix:l}=a;let u=e||i||o.options&&o.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(u);const d=(o.isInitialized||o.initializedStoreOnce)&&u.every(m=>fx(m,o,a));function c(){return o.getFixedT(t.lng||null,a.nsMode==="fallback"?u:u[0],l)}const[f,y]=T.useState(c);let v=u.join();t.lng&&(v=`${t.lng}${v}`);const w=bx(v),k=T.useRef(!0);T.useEffect(()=>{const{bindI18n:m,bindI18nStore:x}=a;k.current=!0,!d&&!s&&(t.lng?Ff(o,t.lng,u,()=>{k.current&&y(c)}):Af(o,u,()=>{k.current&&y(c)})),d&&w&&w!==v&&k.current&&y(c);function b(){k.current&&y(c)}return m&&o&&o.on(m,b),x&&o&&o.store.on(x,b),()=>{k.current=!1,m&&o&&m.split(" ").forEach(C=>o.off(C,b)),x&&o&&x.split(" ").forEach(C=>o.store.off(C,b))}},[o,v]);const g=T.useRef(!0);T.useEffect(()=>{k.current&&!g.current&&y(c),g.current=!1},[o,l]);const p=[f,o,d];if(p.t=f,p.i18n=o,p.ready=d,d||!d&&!s)return p;throw new Promise(m=>{t.lng?Ff(o,t.lng,u,()=>m()):Af(o,u,()=>m())})}function Cx(e){let{i18n:t,defaultNS:n,children:r}=e;const i=T.useMemo(()=>({i18n:t,defaultNS:n}),[t,n]);return T.createElement(Wm.Provider,{value:i},r)}const Vm="https://twitter.com/ThothPay",Km="https://www.facebook.com/profile.php?id=100095060907471",$x="mailto:service@thothpay.com",Gm="https://example.com/telegram",Ox="https://thothpay.com/merchant",Px="https://example.com/signup",Ex="https://thothpay.com/merchant",jx="https://docs.thothpay.com",Lx="https://docs.thothpay.com",Tx="https://docs.thothpay.com",_x="https://thothpay.com/swagger/index.html",Rx="https://docs.thothpay.com",zx="https://thothpay.com/swagger/index.html",Nx="https://docs.thothpay.com",Ix="https://example.com/get-support",Mx="https://example.com/contact-team",Dx="https://example.com/how-it-works",Ax="https://example.com/featured",Fx="https://example.com/partnership",Hx="https://example.com/business-relation",Bx="https://example.com/events",Ux="https://example.com/blog",Wx="https://example.com/podcast",Vx="https://example.com/invite-friend",Kx="https://example.com/privacy-policy",Gx="https://example.com/terms-condition",qx="https://docs.thothpay.com",Qx="https://docs.thothpay.com",Xx=S.a`
  ${J};
  ${pe};
  color: ${e=>e.color};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
`,yt=({href:e,target:t,rel:n,children:r,...i})=>h.jsx(Xx,{href:e,target:t,rel:n,...i,children:r}),Nr={playIconWhite:"images/common/play-icon-white.svg",playIconGreen:"images/common/play-icon-green.svg"},Yx={background:"images/header/check-mark.svg"},cr={backgroundL:"images/main-page/main-screen/screen-L.svg",backgroundS:"images/main-page/main-screen/screen-S.svg",coinsL:"images/main-page/main-screen/coins-L.svg",coinsS:"images/main-page/main-screen/coins-S.svg",circle:"images/main-page/main-screen/circle.svg",wrapper:"images/main-page/main-screen/wrapper.svg"},Ir={backgroundL:"images/main-page/how-it-works/background-L.svg",backgroundS:"images/main-page/how-it-works/background-S.svg",leftLineL:"images/main-page/how-it-works/left-line-L.svg",leftLineS:"images/main-page/how-it-works/left-line-S.svg",rightLineL:"images/main-page/how-it-works/right-line-L.svg",rightLineS:"images/main-page/how-it-works/right-line-S.svg"},Hf={backgroundL:"images/main-page/how-it-works/advantages/background-L.svg",backgroundS:"images/main-page/how-it-works/advantages/background-S.svg"},dr={backgroundL:"images/main-page/products-and-service/description-L.svg",backgroundS:"images/main-page/products-and-service/description-S.svg",one:{src:"images/main-page/products-and-service/merchants-solution.svg",alt:"image one"},two:{src:"images/main-page/products-and-service/merchants-solution.svg",alt:"image two"},three:{src:"images/main-page/products-and-service/merchants-solution.svg",alt:"image three"},four:{src:"images/main-page/products-and-service/merchants-solution.svg",alt:"image four"}},fr={backgroundL:"images/main-page/products-and-service/mobile-wallet/background-L.svg",backgroundS:"images/main-page/products-and-service/mobile-wallet/background-S.svg",appStore:{src:"images/main-page/products-and-service/mobile-wallet/app-store.svg",alt:"apple store link"},googlePay:{src:"images/main-page/products-and-service/mobile-wallet/google-play.svg",alt:"google play link"}},He={background:"images/main-page/products-and-service/available-currencies/available-currencies.svg",one:{src:"images/main-page/products-and-service/available-currencies/bitcoin.svg",alt:"bitcoin icon"},two:{src:"images/main-page/products-and-service/available-currencies/bitcoin-lightning.svg",alt:"bitcoin lightning icon"},three:{src:"images/main-page/products-and-service/available-currencies/bitcoin-liquid.svg",alt:"bitcoin liquid icon"},four:{src:"images/main-page/products-and-service/available-currencies/binance-coin.svg",alt:"binance coin icon"},five:{src:"images/main-page/products-and-service/available-currencies/tron.svg",alt:"tron icon"},six:{src:"images/main-page/products-and-service/available-currencies/polygon.svg",alt:"polygon icon"},seven:{src:"images/main-page/products-and-service/available-currencies/stellar.svg",alt:"stellar icon"},eight:{src:"images/main-page/products-and-service/available-currencies/EURMTL.svg",alt:"EURMTL icon"},nine:{src:"images/main-page/products-and-service/available-currencies/USDT-ERC20.svg",alt:"USDT ERC20 icon"},ten:{src:"images/main-page/products-and-service/available-currencies/USDT-TRC20.svg",alt:"USDT TRC20 icon"},eleven:{src:"images/main-page/products-and-service/available-currencies/USDT-PLG20.svg",alt:"USDT PLG20 icon"},twelve:{src:"images/main-page/products-and-service/available-currencies/USDT-LIQUID.svg",alt:"USDT LIQUID icon"},thirteen:{src:"images/main-page/products-and-service/available-currencies/BUSD-BEP20.svg",alt:"BUSD BEP20 icon"}},Bf={backgroundL:"images/main-page/products-and-service/slide/background-L.svg",backgroundS:"images/main-page/products-and-service/slide/background-S.svg"},_t={backgroundL:"images/main-page/use-cases-of-our-products/background-L.svg",backgroundS:"images/main-page/use-cases-of-our-products/background-S.svg",slide:"images/main-page/use-cases-of-our-products/slide.svg",one:{one:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionOne.svg",alt:"icon one"},two:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionTwo.svg",alt:"icon two"},three:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionThree.svg",alt:"icon three"},four:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionFour.svg",alt:"icon four"},five:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionFive.svg",alt:"icon five"},six:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionSix.svg",alt:"icon six"}},two:{one:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionOne.svg",alt:"icon one"}},three:{one:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionTwo.svg",alt:"icon one"}}},mu={background:"images/main-page/use-cases-of-our-products/mobile-slider/background-S.svg",right:{src:"images/main-page/use-cases-of-our-products/mobile-slider/slider-button.svg",alt:"arrow right"}},On={backgroundL:"images/main-page/use-cases-of-our-products/news/background-L.svg",backgroundS:"images/main-page/use-cases-of-our-products/news/background-S.svg",one:{src:"images/test/test-photo.jpg",alt:"image 1"},two:{src:"images/test/test-photo.jpg",alt:"image 2"},three:{src:"images/test/test-photo.jpg",alt:"image 3"},four:{src:"images/test/test-photo.jpg",alt:"image 4"},five:{src:"images/test/test-photo.jpg",alt:"image 5"}},vo={existingClient:{src:"images/main-page/use-cases-of-our-products/have-a-question/existing-client.svg",alt:"existing client"},newClient:{src:"images/main-page/use-cases-of-our-products/have-a-question/new-client.svg",alt:"new client"}},Vn=(e,t)=>{switch(e){case"Sections":return[{id:"1",title:t("sections.one")},{id:"3",title:t("sections.three")},{id:"4",title:t("sections.four")}];case"Header":return{loginAndRegister:{signUp:t("header.loginAndRegister.signUp"),signIn:t("header.loginAndRegister.signIn")},language:{src:"images/header/language-icon-white.svg",alt:t("header.language.alt"),srcGray:"images/header/language-icon-gray.svg",text:t("header.language.text")},menu:{src:"images/header/burger-icon.svg",alt:t("header.menu.alt"),text:t("header.menu.text")}};case"HowItWorks":return{text:t("sectionHowItWorks.text"),stepOne:{image:{src:"images/main-page/how-it-works/send-invoice.svg",alt:t("sectionHowItWorks.stepOne.alt")},subtitle:t("sectionHowItWorks.stepOne.subtitle"),text:t("sectionHowItWorks.stepOne.text")},stepTwo:{image:{src:"images/main-page/how-it-works/payment.svg",alt:t("sectionHowItWorks.stepTwo.alt")},subtitle:t("sectionHowItWorks.stepTwo.subtitle"),text:t("sectionHowItWorks.stepTwo.text")},stepThree:{image:{src:"images/main-page/how-it-works/broadcast.svg",alt:t("sectionHowItWorks.stepThree.alt")},subtitle:t("sectionHowItWorks.stepThree.subtitle"),text:t("sectionHowItWorks.stepThree.text")},advantages:[{index:"1",subtitle:t("sectionHowItWorks.advantages.advantage1.subtitle"),text:t("sectionHowItWorks.advantages.advantage1.text"),image:"images/main-page/how-it-works/advantages/first-icon.svg",alt:t("sectionHowItWorks.advantages.advantage1.alt")},{index:"2",subtitle:t("sectionHowItWorks.advantages.advantage2.subtitle"),text:t("sectionHowItWorks.advantages.advantage2.text"),image:"images/main-page/how-it-works/advantages/second-icon.svg",alt:t("sectionHowItWorks.advantages.advantage2.alt")},{index:"3",subtitle:t("sectionHowItWorks.advantages.advantage3.subtitle"),text:t("sectionHowItWorks.advantages.advantage3.text"),image:"images/main-page/how-it-works/advantages/third-icon.svg",alt:t("sectionHowItWorks.advantages.advantage3.alt")},{index:"4",subtitle:t("sectionHowItWorks.advantages.advantage4.subtitle"),text:t("sectionHowItWorks.advantages.advantage4.text"),image:"images/main-page/how-it-works/advantages/fourth-icon.svg",alt:t("sectionHowItWorks.advantages.advantage4.alt")}]};case"PaymentFees":return{title:t("pagePaymentFees.title"),individual:{subtitle:t("pagePaymentFees.subtitleIndividual"),linkHref:qx,linkLabel:t("pagePaymentFees.linkLabel"),depositFee:{text:t("pagePaymentFees.depositFee"),percent:["0.1%","0.3%"],span:["<1000$",">1000$"]},swapFee:{text:t("pagePaymentFees.swapFee"),percent:["0.5%"]},withdrawFee:{text:t("pagePaymentFees.withdrawFee"),percent:["0.5%"]},fiatBankIn:{text:t("pagePaymentFees.fiatBankIn"),percent:["0.5%"]},fiatBankOut:{text:t("pagePaymentFees.fiatBankOut"),percent:["0.5%"]},depositFeeSpan:{text:t("pagePaymentFees.depositFeeSpan"),percent:["0.5%"]}},enterprise:{subtitle:t("pagePaymentFees.subtitleEnterprise"),linkHref:Qx,linkLabel:t("pagePaymentFees.linkLabel"),depositFee:{text:t("pagePaymentFees.depositFee"),percent:["0.1%"]},swapFee:{text:t("pagePaymentFees.swapFee"),percent:["0.5%","0.6%"],span:["<1000$",">1000$"]},withdrawFee:{text:t("pagePaymentFees.withdrawFee"),percent:["0.5%"]},fiatBankIn:{text:t("pagePaymentFees.fiatBankIn"),percent:["0.5%"]},fiatBankOut:{text:t("pagePaymentFees.fiatBankOut"),percent:["0.5%"]},depositFeeSpan:{text:t("pagePaymentFees.depositFeeSpan"),percent:["0.5%"]}},navigation:{button:t("pagePaymentFees.navigation.button"),separator:">",location:t("pagePaymentFees.navigation.location")}};case"NotFound":return{title:t("pageNotFound.title"),text:t("pageNotFound.text"),button:t("pageNotFound.button")};case"Logo":return{src:"images/common/logo.svg",alt:t("logo.alt")};case"FeedbackWidgets":return[{id:"telegram",image:{darkSrc:"images/common/telegram-dark.svg",lightSrc:"images/common/telegram-light.svg",alt:t("feedbackWidgets.telegram")},href:Gm},{id:"twitter",image:{darkSrc:"images/common/twitter-dark.svg",lightSrc:"images/common/twitter-light.svg",alt:t("feedbackWidgets.twitter")},href:Vm},{id:"facebook",image:{darkSrc:"images/common/facebook-dark.svg",lightSrc:"images/common/facebook-light.svg",alt:t("feedbackWidgets.facebook")},href:Km},{id:"email",image:{darkSrc:"images/common/email-dark.svg",lightSrc:"images/common/email-light.svg",alt:t("feedbackWidgets.email")},href:$x}];default:return null}},{greenColor:pr,lightGreenColor:Jx,whiteColor:qm}=te,Zx=S.section`
  box-sizing: border-box;
  margin: 0 auto 7vw;
  position: relative;
  background-image: url(${cr.backgroundL});
  ${Bt};
  border-radius: 0 0 0 1.6vw;
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  min-height: 51vw;
  box-shadow: 0 1.6vw 0 ${pr};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-image: url(${cr.coinsL});
    ${zr};
  }

  &::after {
    content: "";
    position: absolute;
    display: flex;
    border-radius: 50%;
    z-index: -5;
    bottom: -6.5vw;
    left: 14.5vw;
    width: 11.5vw;
    height: 11.5vw;
    background-color: ${pr};
  }

  @media (max-width: ${O}) {
    margin-bottom: 10vw;
    background-image: url(${cr.backgroundS});
    border-radius: 0 0 3.93vw 3.93vw;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3.54vw 0 ${pr};

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      background-image: url(${cr.coinsS});
      ${zr};
    }

    &::after {
      content: "";
      position: absolute;
      display: flex;
      border-radius: 50%;
      z-index: -5;
      bottom: -9vw;
      left: 50%;
      transform: translateX(-50%);
      width: 16vw;
      height: 16vw;
      background-color: ${pr};
    }
  }
`,eS=S.div`
  box-sizing: border-box;
  margin: 17.47vw 0 2vw 4.28vw;
  width: 50%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: ${O}) {
    margin: 123.05vw 0 10vw 0;
    padding: 1vw 7vw 5vw 9vw;
    width: 100vw;
    background-image: url(${cr.wrapper});
    ${Bt};
  }
`,tS=S.div`
  border-radius: 50%;
  bottom: -5vw;
  left: 16vw;
  position: absolute;
  z-index: 1;
  width: 8.5vw;
  height: 8.5vw;
  background-image: url(${cr.circle});
  ${Bt};

  @media (max-width: ${O}) {
    bottom: -6vw;
    left: 50%;
    transform: translateX(-50%);
    width: 12vw;
    height: 12vw;
  }
`,nS=S.p`
  ${J};
  margin: 0 0 1.9vw;
  color: rgba(255, 255, 255, 0.5);
  ${pe};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
`,rS=S.h1`
  ${J};
  color: ${qm};
  font-size: 3.89vw;
  ${Kc};
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;
  text-transform: uppercase;
  text-align: left;
  word-break: break-word;

  @media (max-width: ${O}) {
    font-size: 9.84vw;
  }
`,iS=S.p`
  ${J};
  margin: 1.46vw 0 5.9vw;
  ${pe};
  font-size: calc(25vw / 14.4);
  color: ${pr};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${O}) {
    margin: 3.54vw 0 5.9vw;
    font-size: calc(25vw / 5.08);
  }
`,oS=S(yt)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: calc(20vw / 14.4);
  background: linear-gradient(
    133deg,
    ${pr} 0%,
    ${Jx} 100%
  );

  @media (max-width: ${O}) {
    padding: calc(12vw / 5.08);
  }
`,aS=S.span`
  ${J};
  margin-right: calc(20vw / 14.4);
  color: ${qm};
  font-size: 1.11vw;
  ${Kc};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${O}) {
    margin-right: calc(12vw / 5.08);
    font-size: 3.15vw;
  }
`,sS=S.div`
  ${zr};
  width: 1.18vw;
  height: 1.04vw;
  background-image: url(${Nr.playIconWhite});

  @media (max-width: ${O}) {
    width: 3.35vw;
    height: 2.95vw;
  }
`,lS=T.forwardRef((e,t)=>{const{t:n}=Ut(),r=vt();return h.jsxs(Zx,{className:"main-screen",ref:t,children:[h.jsxs(eS,{children:[r!==null&&!r&&h.jsx(nS,{children:n("mainScreen.span")}),h.jsx(rS,{children:n("mainScreen.title")}),h.jsx(iS,{children:n("mainScreen.text")}),h.jsx(oS,{color:"transparent",href:Ex,target:"_blank",rel:"noopener noreferrer",children:h.jsxs(h.Fragment,{children:[h.jsx(aS,{children:n("mainScreen.button")}),h.jsx(sS,{})]})})]}),h.jsx(tS,{})]})}),uS=S("h3")`
  ${J};
  ${Wn};
  font-style: normal;
  font-weight: 500;
  word-wrap: break-word;
`,Kn=({children:e,...t})=>h.jsx(uS,{...t,children:e}),{lightGrayColor:Qm}=te,cS=S.div`
  position: relative;
  z-index: 1;
  max-width: 20.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${O}) {
    max-width: 55.33vw;
  }
`,dS=S(Kn)`
  width: 100%;
  color: ${Qm};
  text-align: center;
  font-size: calc(26vw / 14.4);
  line-height: 1.5;
  letter-spacing: -0.52px;

  @media (max-width: ${O}) {
    width: 100%;
    font-size: calc(26vw / 5.08);
    margin: 5vw 0 0 0;
  }
`,fS=S.p`
  ${J};
  margin: 1.11vw 0 2.85vw;
  color: ${Qm};
  text-align: center;
  ${pe};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;

  @media (max-width: ${O}) {
    font-size: calc(20vw / 5.08);
    margin: 0.7vw 0 4.72vw;
  }
`,pS=S.img`
  margin-top: ${({$index:e})=>e==="one"?"3.9vw":e==="two"?"2.7vw":"0"};
  margin-bottom: 2vw;
  width: ${({$index:e})=>e==="one"?"7.4vw":e==="two"?"8.6vw":"11.3vw"};
  height: ${({$index:e})=>e==="one"?"7.4vw":e==="two"?"8.6vw":"11.3vw"};

  @media (max-width: ${O}) {
    margin-top: 4vw;
    width: ${({$index:e})=>e==="one"?"20.86vw":e==="two"?"24.56vw":"32.08vw"};
    height: ${({$index:e})=>e==="one"?"20.86vw":e==="two"?"24.56vw":"32.08vw"};
  }
`,Vs=({index:e,content:t})=>h.jsxs(cS,{children:[h.jsx(pS,{$index:e,src:t.image.src,alt:t.image.alt}),h.jsx(dS,{children:t.subtitle}),h.jsx(fS,{children:t.text})]}),{whiteColor:Qc}=te,hS=S.div`
  padding: 1vw 0.5vw;
  display: flex;
  flex-direction: column;
  border-bottom: none;
  align-self: start;
  max-width: 347.5vw;

  @media (max-width: ${O}) {
    align-self: center;
    padding: 10.5vw 3.5vw;
    max-width: 80.3vw;
    border-bottom: 0.5px ${Qc} solid;
  }

  &:last-child {
    border: none;
  }
`,gS=S.div`
  width: 100%;
  min-height: 3.56vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${O}) {
    width: 100%;
  }
`,mS=S(Kn)`
  color: ${Qc};
  font-size: calc(26vw / 14.4);
  line-height: 0.96;
  text-align: left;

  @media (max-width: ${O}) {
    line-height: 0.83;
    font-size: calc(30vw / 5.08);
  }
`,vS=S.p`
  ${J};
  margin: 2.5vw 0 0 0;
  color: ${Qc};
  ${pe};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  text-align: left;
  max-width: 19vw;

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.08);
    line-height: 1;
    max-width: 100%;
  }
`,yS=({subtitle:e,text:t,svg:n})=>h.jsxs(hS,{children:[h.jsxs(gS,{children:[n,h.jsx(mS,{children:e})]}),h.jsx(vS,{children:t})]}),wS=S.div`
  background-image: url(${Hf.backgroundL});
  //border-radius: 1.6vw;
  border-radius: 1.6vw 1.6vw 0 0;
  ${Bt};
  min-height: 25.14vw;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: ${O}) {
    width: 100vw;
    //border-radius: 3.93vw;
    border-radius: 3.93vw 3.93vw 0 0;
    min-height: 212.58vw;
    background-image: url(${Hf.backgroundS});
    flex-direction: column;
  }
`,xS=S.div`
  padding: 5vw 3vw;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  justify-items: center;

  @media (max-width: ${O}) {
    padding: 5vw 0;
    grid-template-columns: 1fr;
    align-items: center;
  }
`,SS=S.img`
  width: 3.75vw;
  height: 3.75vw;
  margin-right: 1vw;

  @media (max-width: ${O}) {
    margin-right: 5vw;
    width: 13.95vw;
    height: 13.95vw;
  }
`,kS=({advantages:e})=>h.jsx(wS,{children:h.jsx(xS,{children:e.map(t=>h.jsx(yS,{svg:h.jsx(SS,{src:t.image,alt:t.alt}),subtitle:t.subtitle,text:t.text},t.index))})}),bS=S.h2`
  ${J};
  text-align: center;
  font-size: calc(50vw / 14.4);
  ${Wn};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -1px;
  color: ${e=>e.color};

  @media (max-width: ${O}) {
    font-size: calc(50vw / 5.08);
    line-height: 1.2;
  }
`,Wt=({children:e,...t})=>h.jsx(bS,{...t,children:e}),CS=S.p`
  ${J};
  text-align: center;
  font-size: calc(20vw / 14.05);
  ${pe};
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.color};

  @media (max-width: ${O}) {
    ${Vr};
    font-size: calc(18vw / 5.08);
    line-height: 1.5;
  }
`,Xc=({children:e,...t})=>h.jsx(CS,{...t,children:e}),{darkGrayColor:Uf}=te,$S=S.div`
  position: relative;
  margin: 0 auto 2vw;
  ${Vc};
  width: 93.54vw;
  height: auto;
  background-image: url(${Ir.backgroundL});

  @media (max-width: ${O}) {
    padding: 16.7vw 0 5vw;
    width: 90.55vw;
    background-image: url(${Ir.backgroundS});
  }
`,OS=S(Xc)`
  margin: 0.7vw 0 1.71vw;

  @media (max-width: ${O}) {
    margin-bottom: 4.72vw;
  }
`,PS=S.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;

  @media (max-width: ${O}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,Wf=S.div`
  position: relative;

  @media (max-width: ${O}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,ES=S.div`
  ${Hm};
  background-image: url(${Ir.leftLineL});
  top: 4vw;
  left: 15vw;
  width: 20.83vw;
  height: 6.04vw;

  @media (max-width: ${O}) {
    top: 25vw;
    left: 7vw;
    height: calc(100% - 20.86vw + 15vw);
    background-image: url(${Ir.leftLineS});
  }
`,jS=S.div`
  ${Hm};
  background-image: url(${Ir.rightLineL});
  top: 4vw;
  right: -14.5vw;
  width: 19vw;
  height: 6.04vw;

  @media (max-width: ${O}) {
    top: 30vw;
    right: 3vw;
    height: calc(100% - 24.56vw + 15vw);
    background-image: url(${Ir.rightLineS});
  }
`,LS=({id:e,title:t})=>{const{t:n}=Ut(),r=Vn("HowItWorks",n),{text:i,stepOne:o,stepTwo:a,stepThree:s,advantages:l}=r;return h.jsxs("section",{id:e,children:[h.jsxs($S,{children:[h.jsx(Wt,{color:Uf,children:t}),h.jsx(OS,{color:Uf,children:i}),h.jsxs(PS,{children:[h.jsxs(Wf,{children:[h.jsx(ES,{}),h.jsx(Vs,{index:"one",content:o})]}),h.jsxs(Wf,{children:[h.jsx(jS,{}),h.jsx(Vs,{index:"two",content:a})]}),h.jsx(Vs,{index:"three",content:s})]})]}),l&&h.jsx(kS,{advantages:l})]})},{darkColor:TS,whiteColor:_S,darkGrayColor:RS}=te,Vf={title:"Mobile Wallet",text:"A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",button:"Download"},zS=S.section`
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  background-color: ${TS};
  min-height: 41.53vw;

  @media (max-width: ${O}) {
    background-color: ${RS};
    box-sizing: border-box;
    min-height: 270.66vw;
    flex-direction: column;
  }
`,NS=S.div`
  padding-left: 4.28vw;
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  ${Bt};
  background-image: url(${fr.backgroundL});

  @media (max-width: ${O}) {
    box-sizing: border-box;
    padding: 0 9vw 4.14vw;
    background-image: url(${fr.backgroundS});
    justify-content: end;
    align-items: start;
  }
`,IS=S.p`
  max-width: 37%;
  ${Gc};
  margin: 3.06vw 0 3.75vw;

  @media (max-width: ${O}) {
    max-width: 90%;
    margin: 8.82vw 0;
  }
`,MS=S.div``,Kf=S.img`
  width: calc(218vw / 14.4);
  height: calc(56vw / 14.4);
  border: 0.7px solid white;
  border-radius: 10px;
  padding: 0.5vw;
  box-sizing: border-box;

  @media (max-width: ${O}) {
    width: calc(168vw / 5.08);
    height: calc(50vw / 5.08);
    padding: 1vw;
  }
`,Gf=S(yt)`
  margin-right: calc(72vw / 14.4);
  pointer-events: none;
  text-decoration: none; 
  cursor: not-allowed;
  opacity: 0.3;
}

  @media (max-width: ${O}) {
    margin-right: calc(72vw / 14.4);
  }
`,DS=()=>h.jsx(zS,{children:h.jsxs(NS,{children:[h.jsx(Wt,{color:_S,children:Vf.title}),h.jsx(IS,{children:Vf.text}),h.jsxs(MS,{children:[h.jsx(Gf,{color:"transparent",href:Rx,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Kf,{src:fr.googlePay.src,alt:fr.googlePay.alt})}),h.jsx(Gf,{color:"transparent",href:zx,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Kf,{src:fr.appStore.src,alt:fr.appStore.alt})})]})]})});var Xm={},Ym={},rs={},Jm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Jm);var AS="Expected a function",qf=0/0,FS="[object Symbol]",HS=/^\s+|\s+$/g,BS=/^[-+]0x[0-9a-f]+$/i,US=/^0b[01]+$/i,WS=/^0o[0-7]+$/i,VS=parseInt,KS=typeof nn=="object"&&nn&&nn.Object===Object&&nn,GS=typeof self=="object"&&self&&self.Object===Object&&self,qS=KS||GS||Function("return this")(),QS=Object.prototype,XS=QS.toString,YS=Math.max,JS=Math.min,Ks=function(){return qS.Date.now()};function ZS(e,t,n){var r,i,o,a,s,l,u=0,d=!1,c=!1,f=!0;if(typeof e!="function")throw new TypeError(AS);t=Qf(t)||0,vu(n)&&(d=!!n.leading,c="maxWait"in n,o=c?YS(Qf(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function y(C){var P=r,E=i;return r=i=void 0,u=C,a=e.apply(E,P),a}function v(C){return u=C,s=setTimeout(g,t),d?y(C):a}function w(C){var P=C-l,E=C-u,R=t-P;return c?JS(R,o-E):R}function k(C){var P=C-l,E=C-u;return l===void 0||P>=t||P<0||c&&E>=o}function g(){var C=Ks();if(k(C))return p(C);s=setTimeout(g,w(C))}function p(C){return s=void 0,f&&r?y(C):(r=i=void 0,a)}function m(){s!==void 0&&clearTimeout(s),u=0,r=l=i=s=void 0}function x(){return s===void 0?a:p(Ks())}function b(){var C=Ks(),P=k(C);if(r=arguments,i=this,l=C,P){if(s===void 0)return v(l);if(c)return s=setTimeout(g,t),y(l)}return s===void 0&&(s=setTimeout(g,t)),a}return b.cancel=m,b.flush=x,b}function vu(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ek(e){return!!e&&typeof e=="object"}function tk(e){return typeof e=="symbol"||ek(e)&&XS.call(e)==FS}function Qf(e){if(typeof e=="number")return e;if(tk(e))return qf;if(vu(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=vu(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(HS,"");var n=US.test(e);return n||WS.test(e)?VS(e.slice(2),n?2:8):BS.test(e)?qf:+e}var nk=ZS,Zm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)t.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Zm);var is=Zm.exports,I={};Object.defineProperty(I,"__esModule",{value:!0});I.checkSpecKeys=I.checkNavigable=I.changeSlide=I.canUseDOM=I.canGoNext=void 0;I.clamp=ev;I.swipeStart=I.swipeMove=I.swipeEnd=I.slidesOnRight=I.slidesOnLeft=I.slideHandler=I.siblingDirection=I.safePreventDefault=I.lazyStartIndex=I.lazySlidesOnRight=I.lazySlidesOnLeft=I.lazyEndIndex=I.keyHandler=I.initializedState=I.getWidth=I.getTrackLeft=I.getTrackCSS=I.getTrackAnimateCSS=I.getTotalSlides=I.getSwipeDirection=I.getSlideCount=I.getRequiredLazySlides=I.getPreClones=I.getPostClones=I.getOnDemandLazySlides=I.getNavigableIndexes=I.getHeight=I.extractObject=void 0;var rk=ik(T);function ik(e){return e&&e.__esModule?e:{default:e}}function Xf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xf(Object(n),!0).forEach(function(r){ok(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ok(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ev(e,t,n){return Math.max(t,Math.min(e,n))}var In=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};I.safePreventDefault=In;var Yc=function(t){for(var n=[],r=Jc(t),i=Zc(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};I.getOnDemandLazySlides=Yc;var ak=function(t){for(var n=[],r=Jc(t),i=Zc(t),o=r;o<i;o++)n.push(o);return n};I.getRequiredLazySlides=ak;var Jc=function(t){return t.currentSlide-tv(t)};I.lazyStartIndex=Jc;var Zc=function(t){return t.currentSlide+nv(t)};I.lazyEndIndex=Zc;var tv=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};I.lazySlidesOnLeft=tv;var nv=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};I.lazySlidesOnRight=nv;var ha=function(t){return t&&t.offsetWidth||0};I.getWidth=ha;var ed=function(t){return t&&t.offsetHeight||0};I.getHeight=ed;var td=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,a;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),a=Math.round(o*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?"left":a>=135&&a<=225?"right":n===!0?a>=35&&a<=135?"up":"down":"vertical"};I.getSwipeDirection=td;var nd=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};I.canGoNext=nd;var sk=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};I.extractObject=sk;var lk=function(t){var n=rk.default.Children.count(t.children),r=t.listRef,i=Math.ceil(ha(r)),o=t.trackRef&&t.trackRef.node,a=Math.ceil(ha(o)),s;if(t.vertical)s=i;else{var l=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(l*=i/100),s=Math.ceil((i-l)/t.slidesToShow)}var u=r&&ed(r.querySelector('[data-index="0"]')),d=u*t.slidesToShow,c=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(c=n-1-t.initialSlide);var f=t.lazyLoadedList||[],y=Yc(ae(ae({},t),{},{currentSlide:c,lazyLoadedList:f}));f=f.concat(y);var v={slideCount:n,slideWidth:s,listWidth:i,trackWidth:a,currentSlide:c,slideHeight:u,listHeight:d,lazyLoadedList:f};return t.autoplaying===null&&t.autoplay&&(v.autoplaying="playing"),v};I.initializedState=lk;var uk=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,a=t.index,s=t.slideCount,l=t.lazyLoad,u=t.currentSlide,d=t.centerMode,c=t.slidesToScroll,f=t.slidesToShow,y=t.useCSS,v=t.lazyLoadedList;if(n&&r)return{};var w=a,k,g,p,m={},x={},b=o?a:ev(a,0,s-1);if(i){if(!o&&(a<0||a>=s))return{};a<0?w=a+s:a>=s&&(w=a-s),l&&v.indexOf(w)<0&&(v=v.concat(w)),m={animating:!0,currentSlide:w,lazyLoadedList:v,targetSlide:w},x={animating:!1,targetSlide:w}}else k=w,w<0?(k=w+s,o?s%c!==0&&(k=s-s%c):k=0):!nd(t)&&w>u?w=k=u:d&&w>=s?(w=o?s:s-1,k=o?0:s-1):w>=s&&(k=w-s,o?s%c!==0&&(k=0):k=s-f),!o&&w+f>=s&&(k=s-f),g=Fi(ae(ae({},t),{},{slideIndex:w})),p=Fi(ae(ae({},t),{},{slideIndex:k})),o||(g===p&&(w=k),g=p),l&&(v=v.concat(Yc(ae(ae({},t),{},{currentSlide:w})))),y?(m={animating:!0,currentSlide:k,trackStyle:rd(ae(ae({},t),{},{left:g})),lazyLoadedList:v,targetSlide:b},x={animating:!1,currentSlide:k,trackStyle:Ai(ae(ae({},t),{},{left:p})),swipeLeft:null,targetSlide:b}):m={currentSlide:k,trackStyle:Ai(ae(ae({},t),{},{left:p})),lazyLoadedList:v,targetSlide:b};return{state:m,nextState:x}};I.slideHandler=uk;var ck=function(t,n){var r,i,o,a,s,l=t.slidesToScroll,u=t.slidesToShow,d=t.slideCount,c=t.currentSlide,f=t.targetSlide,y=t.lazyLoad,v=t.infinite;if(a=d%l!==0,r=a?0:(d-c)%l,n.message==="previous")o=r===0?l:u-r,s=c-o,y&&!v&&(i=c-o,s=i===-1?d-1:i),v||(s=f-l);else if(n.message==="next")o=r===0?l:r,s=c+o,y&&!v&&(s=(c+l)%d+r),v||(s=f+l);else if(n.message==="dots")s=n.index*n.slidesToScroll;else if(n.message==="children"){if(s=n.index,v){var w=av(ae(ae({},t),{},{targetSlide:s}));s>n.currentSlide&&w==="left"?s=s-d:s<n.currentSlide&&w==="right"&&(s=s+d)}}else n.message==="index"&&(s=Number(n.index));return s};I.changeSlide=ck;var dk=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};I.keyHandler=dk;var fk=function(t,n,r){return t.target.tagName==="IMG"&&In(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};I.swipeStart=fk;var pk=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,a=n.swipeToSlide,s=n.verticalSwiping,l=n.rtl,u=n.currentSlide,d=n.edgeFriction,c=n.edgeDragged,f=n.onEdge,y=n.swiped,v=n.swiping,w=n.slideCount,k=n.slidesToScroll,g=n.infinite,p=n.touchObject,m=n.swipeEvent,x=n.listHeight,b=n.listWidth;if(!r){if(i)return In(t);o&&a&&s&&In(t);var C,P={},E=Fi(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var R=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!s&&!v&&R>10)return{scrolling:!0};s&&(p.swipeLength=R);var z=(l?-1:1)*(p.curX>p.startX?1:-1);s&&(z=p.curY>p.startY?1:-1);var A=Math.ceil(w/k),H=td(n.touchObject,s),D=p.swipeLength;return g||(u===0&&(H==="right"||H==="down")||u+1>=A&&(H==="left"||H==="up")||!nd(n)&&(H==="left"||H==="up"))&&(D=p.swipeLength*d,c===!1&&f&&(f(H),P.edgeDragged=!0)),!y&&m&&(m(H),P.swiped=!0),o?C=E+D*(x/b)*z:l?C=E-D*z:C=E+D*z,s&&(C=E+D*z),P=ae(ae({},P),{},{touchObject:p,swipeLeft:C,trackStyle:Ai(ae(ae({},n),{},{left:C}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(P.swiping=!0,In(t)),P}};I.swipeMove=pk;var hk=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,a=n.listWidth,s=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,d=n.swipeToSlide,c=n.scrolling,f=n.onSwipe,y=n.targetSlide,v=n.currentSlide,w=n.infinite;if(!r)return i&&In(t),{};var k=l?u/s:a/s,g=td(o,l),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(c||!o.swipeLength)return p;if(o.swipeLength>k){In(t),f&&f(g);var m,x,b=w?v:y;switch(g){case"left":case"up":x=b+wu(n),m=d?yu(n,x):x,p.currentDirection=0;break;case"right":case"down":x=b-wu(n),m=d?yu(n,x):x,p.currentDirection=1;break;default:m=b}p.triggerSlideHandler=m}else{var C=Fi(n);p.trackStyle=rd(ae(ae({},n),{},{left:C}))}return p};I.swipeEnd=hk;var rv=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};I.getNavigableIndexes=rv;var yu=function(t,n){var r=rv(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};I.checkNavigable=yu;var wu=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(l){if(t.vertical){if(l.offsetTop+ed(l)/2>t.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+ha(l)/2>t.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var a=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,s=Math.abs(r.dataset.index-a)||1;return s}else return t.slidesToScroll};I.getSlideCount=wu;var os=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};I.checkSpecKeys=os;var Ai=function(t){os(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=ov(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",l=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ae(ae({},o),{},{WebkitTransform:a,transform:s,msTransform:l})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};I.getTrackCSS=Ai;var rd=function(t){os(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Ai(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};I.getTrackAnimateCSS=rd;var Fi=function(t){if(t.unslick)return 0;os(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,a=t.slideCount,s=t.slidesToShow,l=t.slidesToScroll,u=t.slideWidth,d=t.listWidth,c=t.variableWidth,f=t.slideHeight,y=t.fade,v=t.vertical,w=0,k,g,p=0;if(y||t.slideCount===1)return 0;var m=0;if(i?(m=-vi(t),a%l!==0&&n+l>a&&(m=-(n>a?s-(n-a):a%l)),o&&(m+=parseInt(s/2))):(a%l!==0&&n+l>a&&(m=s-a%l),o&&(m=parseInt(s/2))),w=m*u,p=m*f,v?k=n*f*-1+p:k=n*u*-1+w,c===!0){var x,b=r&&r.node;if(x=n+vi(t),g=b&&b.childNodes[x],k=g?g.offsetLeft*-1:0,o===!0){x=i?n+vi(t):n,g=b&&b.children[x],k=0;for(var C=0;C<x;C++)k-=b&&b.children[C]&&b.children[C].offsetWidth;k-=parseInt(t.centerPadding),k+=g&&(d-g.offsetWidth)/2}}return k};I.getTrackLeft=Fi;var vi=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};I.getPreClones=vi;var iv=function(t){return t.unslick||!t.infinite?0:t.slideCount};I.getPostClones=iv;var ov=function(t){return t.slideCount===1?1:vi(t)+t.slideCount+iv(t)};I.getTotalSlides=ov;var av=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+sv(t)?"left":"right":t.targetSlide<t.currentSlide-lv(t)?"right":"left"};I.siblingDirection=av;var sv=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),i&&n%2===0&&(a+=1),a}return i?0:n-1};I.slidesOnRight=sv;var lv=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),!i&&n%2===0&&(a+=1),a}return i?n-1:0};I.slidesOnLeft=lv;var gk=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};I.canUseDOM=gk;var as={};function xu(e){"@babel/helpers - typeof";return xu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xu(e)}Object.defineProperty(as,"__esModule",{value:!0});as.Track=void 0;var Zt=uv(T),Gs=uv(is),qs=I;function uv(e){return e&&e.__esModule?e:{default:e}}function Su(){return Su=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Su.apply(this,arguments)}function mk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vk(e,t,n){return t&&Yf(e.prototype,t),n&&Yf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function yk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ku(e,t)}function ku(e,t){return ku=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ku(e,t)}function wk(e){var t=Sk();return function(){var r=ga(e),i;if(t){var o=ga(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return xk(this,i)}}function xk(e,t){if(t&&(xu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return bu(e)}function bu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Sk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ga(e){return ga=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ga(e)}function Jf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jf(Object(n),!0).forEach(function(r){Cu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Cu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Qs=function(t){var n,r,i,o,a;t.rtl?a=t.slideCount-1-t.index:a=t.index,i=a<0||a>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(a-t.currentSlide)%t.slideCount===0,a>t.currentSlide-o-1&&a<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=a&&a<t.currentSlide+t.slidesToShow;var s;t.targetSlide<0?s=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?s=t.targetSlide-t.slideCount:s=t.targetSlide;var l=a===s;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},kk=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Xs=function(t,n){return t.key||n},bk=function(t){var n,r=[],i=[],o=[],a=Zt.default.Children.count(t.children),s=(0,qs.lazyStartIndex)(t),l=(0,qs.lazyEndIndex)(t);return Zt.default.Children.forEach(t.children,function(u,d){var c,f={message:"children",index:d,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(d)>=0?c=u:c=Zt.default.createElement("div",null);var y=kk(Fe(Fe({},t),{},{index:d})),v=c.props.className||"",w=Qs(Fe(Fe({},t),{},{index:d}));if(r.push(Zt.default.cloneElement(c,{key:"original"+Xs(c,d),"data-index":d,className:(0,Gs.default)(w,v),tabIndex:"-1","aria-hidden":!w["slick-active"],style:Fe(Fe({outline:"none"},c.props.style||{}),y),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})),t.infinite&&t.fade===!1){var k=a-d;k<=(0,qs.getPreClones)(t)&&a!==t.slidesToShow&&(n=-k,n>=s&&(c=u),w=Qs(Fe(Fe({},t),{},{index:n})),i.push(Zt.default.cloneElement(c,{key:"precloned"+Xs(c,n),"data-index":n,tabIndex:"-1",className:(0,Gs.default)(w,v),"aria-hidden":!w["slick-active"],style:Fe(Fe({},c.props.style||{}),y),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}}))),a!==t.slidesToShow&&(n=a+d,n<l&&(c=u),w=Qs(Fe(Fe({},t),{},{index:n})),o.push(Zt.default.cloneElement(c,{key:"postcloned"+Xs(c,n),"data-index":n,tabIndex:"-1",className:(0,Gs.default)(w,v),"aria-hidden":!w["slick-active"],style:Fe(Fe({},c.props.style||{}),y),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},Ck=function(e){yk(n,e);var t=wk(n);function n(){var r;mk(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=t.call.apply(t,[this].concat(o)),Cu(bu(r),"node",null),Cu(bu(r),"handleRef",function(s){r.node=s}),r}return vk(n,[{key:"render",value:function(){var i=bk(this.props),o=this.props,a=o.onMouseEnter,s=o.onMouseOver,l=o.onMouseLeave,u={onMouseEnter:a,onMouseOver:s,onMouseLeave:l};return Zt.default.createElement("div",Su({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(Zt.default.PureComponent);as.Track=Ck;var ss={};function $u(e){"@babel/helpers - typeof";return $u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$u(e)}Object.defineProperty(ss,"__esModule",{value:!0});ss.Dots=void 0;var yo=cv(T),$k=cv(is),Zf=I;function cv(e){return e&&e.__esModule?e:{default:e}}function ep(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ok(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ep(Object(n),!0).forEach(function(r){Pk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ep(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ek(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jk(e,t,n){return t&&tp(e.prototype,t),n&&tp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Lk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ou(e,t)}function Ou(e,t){return Ou=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ou(e,t)}function Tk(e){var t=zk();return function(){var r=ma(e),i;if(t){var o=ma(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return _k(this,i)}}function _k(e,t){if(t&&($u(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Rk(e)}function Rk(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function zk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ma(e){return ma=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ma(e)}var Nk=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},Ik=function(e){Lk(n,e);var t=Tk(n);function n(){return Ek(this,n),t.apply(this,arguments)}return jk(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,a=i.onMouseOver,s=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,d=i.slidesToShow,c=i.slideCount,f=i.currentSlide,y=Nk({slideCount:c,slidesToScroll:u,slidesToShow:d,infinite:l}),v={onMouseEnter:o,onMouseOver:a,onMouseLeave:s},w=[],k=0;k<y;k++){var g=(k+1)*u-1,p=l?g:(0,Zf.clamp)(g,0,c-1),m=p-(u-1),x=l?m:(0,Zf.clamp)(m,0,c-1),b=(0,$k.default)({"slick-active":l?f>=x&&f<=p:f===x}),C={message:"dots",index:k,slidesToScroll:u,currentSlide:f},P=this.clickHandler.bind(this,C);w=w.concat(yo.default.createElement("li",{key:k,className:b},yo.default.cloneElement(this.props.customPaging(k),{onClick:P})))}return yo.default.cloneElement(this.props.appendDots(w),Ok({className:this.props.dotsClass},v))}}]),n}(yo.default.PureComponent);ss.Dots=Ik;var Mr={};function Pu(e){"@babel/helpers - typeof";return Pu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pu(e)}Object.defineProperty(Mr,"__esModule",{value:!0});Mr.PrevArrow=Mr.NextArrow=void 0;var xr=fv(T),dv=fv(is),Mk=I;function fv(e){return e&&e.__esModule?e:{default:e}}function va(){return va=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},va.apply(this,arguments)}function np(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ya(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?np(Object(n),!0).forEach(function(r){Dk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):np(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hv(e,t,n){return t&&rp(e.prototype,t),n&&rp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function gv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Eu(e,t)}function Eu(e,t){return Eu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Eu(e,t)}function mv(e){var t=Hk();return function(){var r=wa(e),i;if(t){var o=wa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Ak(this,i)}}function Ak(e,t){if(t&&(Pu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Fk(e)}function Fk(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Hk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wa(e){return wa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},wa(e)}var Bk=function(e){gv(n,e);var t=mv(n);function n(){return pv(this,n),t.apply(this,arguments)}return hv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var a={key:"0","data-role":"none",className:(0,dv.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=xr.default.cloneElement(this.props.prevArrow,ya(ya({},a),s)):l=xr.default.createElement("button",va({key:"0",type:"button"},a)," ","Previous"),l}}]),n}(xr.default.PureComponent);Mr.PrevArrow=Bk;var Uk=function(e){gv(n,e);var t=mv(n);function n(){return pv(this,n),t.apply(this,arguments)}return hv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,Mk.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var a={key:"1","data-role":"none",className:(0,dv.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=xr.default.cloneElement(this.props.nextArrow,ya(ya({},a),s)):l=xr.default.createElement("button",va({key:"1",type:"button"},a)," ","Next"),l}}]),n}(xr.default.PureComponent);Mr.NextArrow=Uk;var vv=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var a=o[i];n.call(r,a[1],a[0])}},t}()}(),ju=typeof window<"u"&&typeof document<"u"&&window.document===document,xa=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Wk=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(xa):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Vk=2;function Kk(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function a(){Wk(o)}function s(){var l=Date.now();if(n){if(l-i<Vk)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=l}return s}var Gk=20,qk=["top","right","bottom","left","width","height","size","weight"],Qk=typeof MutationObserver<"u",Xk=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Kk(this.refresh.bind(this),Gk)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!ju||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Qk?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!ju||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=qk.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),yv=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Dr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||xa},wv=ls(0,0,0,0);function Sa(e){return parseFloat(e)||0}function ip(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Sa(o)},0)}function Yk(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],a=e["padding-"+o];n[o]=Sa(a)}return n}function Jk(e){var t=e.getBBox();return ls(0,0,t.width,t.height)}function Zk(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return wv;var r=Dr(e).getComputedStyle(e),i=Yk(r),o=i.left+i.right,a=i.top+i.bottom,s=Sa(r.width),l=Sa(r.height);if(r.boxSizing==="border-box"&&(Math.round(s+o)!==t&&(s-=ip(r,"left","right")+o),Math.round(l+a)!==n&&(l-=ip(r,"top","bottom")+a)),!tb(e)){var u=Math.round(s+o)-t,d=Math.round(l+a)-n;Math.abs(u)!==1&&(s-=u),Math.abs(d)!==1&&(l-=d)}return ls(i.left,i.top,s,l)}var eb=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Dr(e).SVGGraphicsElement}:function(e){return e instanceof Dr(e).SVGElement&&typeof e.getBBox=="function"}}();function tb(e){return e===Dr(e).document.documentElement}function nb(e){return ju?eb(e)?Jk(e):Zk(e):wv}function rb(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(o.prototype);return yv(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function ls(e,t,n,r){return{x:e,y:t,width:n,height:r}}var ib=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ls(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=nb(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),ob=function(){function e(t,n){var r=rb(n);yv(this,{target:t,contentRect:r})}return e}(),ab=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new vv,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Dr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new ib(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Dr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new ob(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),xv=typeof WeakMap<"u"?new WeakMap:new vv,Sv=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Xk.getInstance(),r=new ab(t,n,this);xv.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Sv.prototype[e]=function(){var t;return(t=xv.get(this))[e].apply(t,arguments)}});var sb=function(){return typeof xa.ResizeObserver<"u"?xa.ResizeObserver:Sv}();const lb=Object.freeze(Object.defineProperty({__proto__:null,default:sb},Symbol.toStringTag,{value:"Module"})),ub=Uv(lb);Object.defineProperty(rs,"__esModule",{value:!0});rs.InnerSlider=void 0;var Ne=Xi(T),cb=Xi(Jm),db=Xi(nk),fb=Xi(is),le=I,pb=as,hb=ss,op=Mr,gb=Xi(ub);function Xi(e){return e&&e.__esModule?e:{default:e}}function ka(e){"@babel/helpers - typeof";return ka=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ka(e)}function ba(){return ba=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ba.apply(this,arguments)}function mb(e,t){if(e==null)return{};var n=vb(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ap(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ap(Object(n),!0).forEach(function(r){q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ap(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wb(e,t,n){return t&&sp(e.prototype,t),n&&sp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Lu(e,t)}function Lu(e,t){return Lu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Lu(e,t)}function Sb(e){var t=bb();return function(){var r=Ca(e),i;if(t){var o=Ca(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return kb(this,i)}}function kb(e,t){if(t&&(ka(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return G(e)}function G(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ca(e){return Ca=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ca(e)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Cb=function(e){xb(n,e);var t=Sb(n);function n(r){var i;yb(this,n),i=t.call(this,r),q(G(i),"listRefHandler",function(a){return i.list=a}),q(G(i),"trackRefHandler",function(a){return i.track=a}),q(G(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var a=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,le.getHeight)(a)+"px"}}),q(G(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var a=(0,le.getOnDemandLazySlides)(U(U({},i.props),i.state));a.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}var s=U({listRef:i.list,trackRef:i.track},i.props);i.updateState(s,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new gb.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),q(G(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(a){return clearTimeout(a)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),q(G(i),"componentDidUpdate",function(a){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var s=(0,le.getOnDemandLazySlides)(U(U({},i.props),i.state));s.length>0&&(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}i.adaptHeight();var l=U(U({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(a);u&&i.updateState(l,u,function(){i.state.currentSlide>=Ne.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Ne.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),q(G(i),"onWindowResized",function(a){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,db.default)(function(){return i.resizeWindow(a)},50),i.debouncedResize()}),q(G(i),"resizeWindow",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(i.track&&i.track.node);if(s){var l=U(U({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,a,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),q(G(i),"updateState",function(a,s,l){var u=(0,le.initializedState)(a);a=U(U(U({},a),u),{},{slideIndex:u.currentSlide});var d=(0,le.getTrackLeft)(a);a=U(U({},a),{},{left:d});var c=(0,le.getTrackCSS)(a);(s||Ne.default.Children.count(i.props.children)!==Ne.default.Children.count(a.children))&&(u.trackStyle=c),i.setState(u,l)}),q(G(i),"ssrInit",function(){if(i.props.variableWidth){var a=0,s=0,l=[],u=(0,le.getPreClones)(U(U(U({},i.props),i.state),{},{slideCount:i.props.children.length})),d=(0,le.getPostClones)(U(U(U({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(P){l.push(P.props.style.width),a+=P.props.style.width});for(var c=0;c<u;c++)s+=l[l.length-1-c],a+=l[l.length-1-c];for(var f=0;f<d;f++)a+=l[f];for(var y=0;y<i.state.currentSlide;y++)s+=l[y];var v={width:a+"px",left:-s+"px"};if(i.props.centerMode){var w="".concat(l[i.state.currentSlide],"px");v.left="calc(".concat(v.left," + (100% - ").concat(w,") / 2 ) ")}return{trackStyle:v}}var k=Ne.default.Children.count(i.props.children),g=U(U(U({},i.props),i.state),{},{slideCount:k}),p=(0,le.getPreClones)(g)+(0,le.getPostClones)(g)+k,m=100/i.props.slidesToShow*p,x=100/p,b=-x*((0,le.getPreClones)(g)+i.state.currentSlide)*m/100;i.props.centerMode&&(b+=(100-x*m/100)/2);var C={width:m+"%",left:b+"%"};return{slideWidth:x+"%",trackStyle:C}}),q(G(i),"checkImagesLoad",function(){var a=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],s=a.length,l=0;Array.prototype.forEach.call(a,function(u){var d=function(){return++l&&l>=s&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var c=u.onclick;u.onclick=function(){c(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=d,u.onerror=function(){d(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),q(G(i),"progressiveLazyLoad",function(){for(var a=[],s=U(U({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,le.getPostClones)(s);l++)if(i.state.lazyLoadedList.indexOf(l)<0){a.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,le.getPreClones)(s);u--)if(i.state.lazyLoadedList.indexOf(u)<0){a.push(u);break}a.length>0?(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),q(G(i),"slideHandler",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,d=l.beforeChange,c=l.onLazyLoad,f=l.speed,y=l.afterChange,v=i.state.currentSlide,w=(0,le.slideHandler)(U(U(U({index:a},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!s})),k=w.state,g=w.nextState;if(k){d&&d(v,k.currentSlide);var p=k.lazyLoadedList.filter(function(m){return i.state.lazyLoadedList.indexOf(m)<0});c&&p.length>0&&c(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),y&&y(v),delete i.animationEndCallback),i.setState(k,function(){u&&i.asNavForIndex!==a&&(i.asNavForIndex=a,u.innerSlider.slideHandler(a)),g&&(i.animationEndCallback=setTimeout(function(){var m=g.animating,x=mb(g,["animating"]);i.setState(x,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:m})},10)),y&&y(k.currentSlide),delete i.animationEndCallback})},f))})}}),q(G(i),"changeSlide",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=U(U({},i.props),i.state),u=(0,le.changeSlide)(l,a);if(!(u!==0&&!u)&&(s===!0?i.slideHandler(u,s):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var d=i.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),q(G(i),"clickHandler",function(a){i.clickable===!1&&(a.stopPropagation(),a.preventDefault()),i.clickable=!0}),q(G(i),"keyHandler",function(a){var s=(0,le.keyHandler)(a,i.props.accessibility,i.props.rtl);s!==""&&i.changeSlide({message:s})}),q(G(i),"selectHandler",function(a){i.changeSlide(a)}),q(G(i),"disableBodyScroll",function(){var a=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=a}),q(G(i),"enableBodyScroll",function(){window.ontouchmove=null}),q(G(i),"swipeStart",function(a){i.props.verticalSwiping&&i.disableBodyScroll();var s=(0,le.swipeStart)(a,i.props.swipe,i.props.draggable);s!==""&&i.setState(s)}),q(G(i),"swipeMove",function(a){var s=(0,le.swipeMove)(a,U(U(U({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));s&&(s.swiping&&(i.clickable=!1),i.setState(s))}),q(G(i),"swipeEnd",function(a){var s=(0,le.swipeEnd)(a,U(U(U({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(s){var l=s.triggerSlideHandler;delete s.triggerSlideHandler,i.setState(s),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),q(G(i),"touchEnd",function(a){i.swipeEnd(a),i.clickable=!0}),q(G(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),q(G(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),q(G(i),"slickGoTo",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a=Number(a),isNaN(a))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:a,currentSlide:i.state.currentSlide},s)},0))}),q(G(i),"play",function(){var a;if(i.props.rtl)a=i.state.currentSlide-i.props.slidesToScroll;else if((0,le.canGoNext)(U(U({},i.props),i.state)))a=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(a)}),q(G(i),"autoPlay",function(a){i.autoplayTimer&&clearInterval(i.autoplayTimer);var s=i.state.autoplaying;if(a==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(a==="leave"){if(s==="paused"||s==="focused")return}else if(a==="blur"&&(s==="paused"||s==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),q(G(i),"pause",function(a){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var s=i.state.autoplaying;a==="paused"?i.setState({autoplaying:"paused"}):a==="focused"?(s==="hovered"||s==="playing")&&i.setState({autoplaying:"focused"}):s==="playing"&&i.setState({autoplaying:"hovered"})}),q(G(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),q(G(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),q(G(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),q(G(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),q(G(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),q(G(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),q(G(i),"render",function(){var a=(0,fb.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),s=U(U({},i.props),i.state),l=(0,le.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=U(U({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var d;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var c=(0,le.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;c=U(U({},c),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),d=Ne.default.createElement(hb.Dots,c)}var y,v,w=(0,le.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);w.clickHandler=i.changeSlide,i.props.arrows&&(y=Ne.default.createElement(op.PrevArrow,w),v=Ne.default.createElement(op.NextArrow,w));var k=null;i.props.vertical&&(k={height:i.state.listHeight});var g=null;i.props.vertical===!1?i.props.centerMode===!0&&(g={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(g={padding:i.props.centerPadding+" 0px"});var p=U(U({},k),g),m=i.props.touchMove,x={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:m?i.swipeStart:null,onMouseMove:i.state.dragging&&m?i.swipeMove:null,onMouseUp:m?i.swipeEnd:null,onMouseLeave:i.state.dragging&&m?i.swipeEnd:null,onTouchStart:m?i.swipeStart:null,onTouchMove:i.state.dragging&&m?i.swipeMove:null,onTouchEnd:m?i.touchEnd:null,onTouchCancel:i.state.dragging&&m?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},b={className:a,dir:"ltr",style:i.props.style};return i.props.unslick&&(x={className:"slick-list"},b={className:a}),Ne.default.createElement("div",b,i.props.unslick?"":y,Ne.default.createElement("div",ba({ref:i.listRefHandler},x),Ne.default.createElement(pb.Track,ba({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":v,i.props.unslick?"":d)}),i.list=null,i.track=null,i.state=U(U({},cb.default),{},{currentSlide:i.props.initialSlide,slideCount:Ne.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=U(U({},i.state),o),i}return wb(n,[{key:"didPropsChange",value:function(i){for(var o=!1,a=0,s=Object.keys(this.props);a<s.length;a++){var l=s[a];if(!i.hasOwnProperty(l)){o=!0;break}if(!(ka(i[l])==="object"||typeof i[l]=="function")&&i[l]!==this.props[l]){o=!0;break}}return o||Ne.default.Children.count(this.props.children)!==Ne.default.Children.count(i.children)}}]),n}(Ne.default.Component);rs.InnerSlider=Cb;var $b=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},Ob=$b,Pb=Ob,Eb=function(e){var t=/[height|width]$/;return t.test(e)},lp=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=Pb(r),Eb(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},jb=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=lp(n),r<e.length-1&&(t+=", ")}),t):lp(e)},Lb=jb,kv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(T);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(a){return t.default.createElement("ul",{style:{display:"block"}},a)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(a){return t.default.createElement("button",null,a+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(kv);var Ys,up;function Tb(){if(up)return Ys;up=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Ys=e,Ys}var Js,cp;function bv(){if(cp)return Js;cp=1;function e(r,i){var o=0,a=r.length,s;for(o;o<a&&(s=i(r[o],o),s!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Js={isFunction:n,isArray:t,each:e},Js}var Zs,dp;function _b(){if(dp)return Zs;dp=1;var e=Tb(),t=bv().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(a){o.mql=a.currentTarget||a,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,a){if(o.equals(r))return o.destroy(),!i.splice(a,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Zs=n,Zs}var el,fp;function Rb(){if(fp)return el;fp=1;var e=_b(),t=bv(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(a,s,l){var u=this.queries,d=l&&this.browserIsIncapable;return u[a]||(u[a]=new e(a,d)),r(s)&&(s={match:s}),i(s)||(s=[s]),n(s,function(c){r(c)&&(c={match:c}),u[a].addHandler(c)}),this},unregister:function(a,s){var l=this.queries[a];return l&&(s?l.removeHandler(s):(l.clear(),delete this.queries[a])),this}},el=o,el}var tl,pp;function zb(){if(pp)return tl;pp=1;var e=Rb();return tl=new e,tl}(function(e){function t(E){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},t(E)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(T),r=rs,i=s(Lb),o=s(kv),a=I;function s(E){return E&&E.__esModule?E:{default:E}}function l(){return l=Object.assign||function(E){for(var R=1;R<arguments.length;R++){var z=arguments[R];for(var A in z)Object.prototype.hasOwnProperty.call(z,A)&&(E[A]=z[A])}return E},l.apply(this,arguments)}function u(E,R){var z=Object.keys(E);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(E);R&&(A=A.filter(function(H){return Object.getOwnPropertyDescriptor(E,H).enumerable})),z.push.apply(z,A)}return z}function d(E){for(var R=1;R<arguments.length;R++){var z=arguments[R]!=null?arguments[R]:{};R%2?u(Object(z),!0).forEach(function(A){b(E,A,z[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(z)):u(Object(z)).forEach(function(A){Object.defineProperty(E,A,Object.getOwnPropertyDescriptor(z,A))})}return E}function c(E,R){if(!(E instanceof R))throw new TypeError("Cannot call a class as a function")}function f(E,R){for(var z=0;z<R.length;z++){var A=R[z];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(E,A.key,A)}}function y(E,R,z){return R&&f(E.prototype,R),z&&f(E,z),Object.defineProperty(E,"prototype",{writable:!1}),E}function v(E,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function");E.prototype=Object.create(R&&R.prototype,{constructor:{value:E,writable:!0,configurable:!0}}),Object.defineProperty(E,"prototype",{writable:!1}),R&&w(E,R)}function w(E,R){return w=Object.setPrototypeOf||function(A,H){return A.__proto__=H,A},w(E,R)}function k(E){var R=m();return function(){var A=x(E),H;if(R){var D=x(this).constructor;H=Reflect.construct(A,arguments,D)}else H=A.apply(this,arguments);return g(this,H)}}function g(E,R){if(R&&(t(R)==="object"||typeof R=="function"))return R;if(R!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(E)}function p(E){if(E===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E}function m(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(E){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(z){return z.__proto__||Object.getPrototypeOf(z)},x(E)}function b(E,R,z){return R in E?Object.defineProperty(E,R,{value:z,enumerable:!0,configurable:!0,writable:!0}):E[R]=z,E}var C=(0,a.canUseDOM)()&&zb(),P=function(E){v(z,E);var R=k(z);function z(A){var H;return c(this,z),H=R.call(this,A),b(p(H),"innerSliderRefHandler",function(D){return H.innerSlider=D}),b(p(H),"slickPrev",function(){return H.innerSlider.slickPrev()}),b(p(H),"slickNext",function(){return H.innerSlider.slickNext()}),b(p(H),"slickGoTo",function(D){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return H.innerSlider.slickGoTo(D,$)}),b(p(H),"slickPause",function(){return H.innerSlider.pause("paused")}),b(p(H),"slickPlay",function(){return H.innerSlider.autoPlay("play")}),H.state={breakpoint:null},H._responsiveMediaHandlers=[],H}return y(z,[{key:"media",value:function(H,D){C.register(H,D),this._responsiveMediaHandlers.push({query:H,handler:D})}},{key:"componentDidMount",value:function(){var H=this;if(this.props.responsive){var D=this.props.responsive.map(function(j){return j.breakpoint});D.sort(function(j,B){return j-B}),D.forEach(function(j,B){var W;B===0?W=(0,i.default)({minWidth:0,maxWidth:j}):W=(0,i.default)({minWidth:D[B-1]+1,maxWidth:j}),(0,a.canUseDOM)()&&H.media(W,function(){H.setState({breakpoint:j})})});var $=(0,i.default)({minWidth:D.slice(-1)[0]});(0,a.canUseDOM)()&&this.media($,function(){H.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(H){C.unregister(H.query,H.handler)})}},{key:"render",value:function(){var H=this,D,$;this.state.breakpoint?($=this.props.responsive.filter(function($e){return $e.breakpoint===H.state.breakpoint}),D=$[0].settings==="unslick"?"unslick":d(d(d({},o.default),this.props),$[0].settings)):D=d(d({},o.default),this.props),D.centerMode&&(D.slidesToScroll>1,D.slidesToScroll=1),D.fade&&(D.slidesToShow>1,D.slidesToScroll>1,D.slidesToShow=1,D.slidesToScroll=1);var j=n.default.Children.toArray(this.props.children);j=j.filter(function($e){return typeof $e=="string"?!!$e.trim():!!$e}),D.variableWidth&&(D.rows>1||D.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),D.variableWidth=!1);for(var B=[],W=null,L=0;L<j.length;L+=D.rows*D.slidesPerRow){for(var N=[],F=L;F<L+D.rows*D.slidesPerRow;F+=D.slidesPerRow){for(var Q=[],K=F;K<F+D.slidesPerRow&&(D.variableWidth&&j[K].props.style&&(W=j[K].props.style.width),!(K>=j.length));K+=1)Q.push(n.default.cloneElement(j[K],{key:100*L+10*F+K,tabIndex:-1,style:{width:"".concat(100/D.slidesPerRow,"%"),display:"inline-block"}}));N.push(n.default.createElement("div",{key:10*L+F},Q))}D.variableWidth?B.push(n.default.createElement("div",{key:L,style:{width:W}},N)):B.push(n.default.createElement("div",{key:L},N))}if(D==="unslick"){var Ot="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:Ot},j)}else B.length<=D.slidesToShow&&(D.unslick=!0);return n.default.createElement(r.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},D),B)}}]),z}(n.default.Component);e.default=P})(Ym);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Ym);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(Xm);const us=Fu(Xm);const Nb=S.div`
  margin-right: 1vw;
  width: calc(76vw / 14.4);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 100%;

  @media (max-width: ${O}) {
    width: calc(76vw / 5.08);
    margin-right: 5vw;
  }
`,Ib=S.img`
  height: calc(74vw / 14.4);
  width: calc(74vw / 14.4);
  object-fit: contain;

  @media (max-width: ${O}) {
    height: calc(74vw / 5.08);
    width: calc(74vw / 5.08);
  }
`,Mb=({slide:e})=>h.jsx(Nb,{children:h.jsx(Ib,{src:e.image.src,alt:e.image.alt})}),Db=S.div`
  margin: 0 2vw;
  width: 69vw;
  position: relative;

  @media (max-width: ${O}) {
    margin: 0 auto;
    width: 100%;
  }
`,hp=({slides:e,size:t})=>{const r={dots:!1,arrows:!1,infinite:!0,slidesToShow:t==="small"?4:11,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1,draggable:!0};return h.jsx(Db,{children:h.jsx(us,{...r,children:e.map(i=>h.jsx(Mb,{slide:i},i.id))})})},{whiteColor:Cv,darkGrayColor:Ab}=te,nl={title:"Available Currencies",text:"A vast range of major coins, stablecoins and liquid tokens is available.",imagesContext:[{text:"Coins",coins:[{id:"1",image:He.one},{id:"2",image:He.two},{id:"3",image:He.three},{id:"4",image:He.four},{id:"5",image:He.five},{id:"6",image:He.six},{id:"7",image:He.seven},{id:"8",image:He.eight},{id:"9",image:He.nine},{id:"10",image:He.ten},{id:"11",image:He.eleven},{id:"12",image:He.twelve},{id:"13",image:He.thirteen}]}]},Fb=S.section`
  width: 100vw;
  box-sizing: border-box;
  ${Bt};
  background-position: center -9.72vw;
  min-height: calc(800vw / 14.4 - 9.72vw);
  padding: 8.26vw 1vw 8.26vw 4.28vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-image: url(${He.background});
  //border-radius: 0 0 1.6vw 1.6vw;
  border-radius: 0;

  @media (max-width: ${O}) {
    padding: 22vw 0 20.27vw 9vw;
    min-height: 140vw;
    flex-direction: column;
    background-image: none;
    background-color: ${Ab};
    border-radius: 0;
    overflow-x: hidden;
  }
`,Hb=S.div`
  width: 91vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media (max-width: ${O}) {
    box-sizing: border-box;
    flex-direction: column;
  }
`,Bb=S.p`
  ${Gc};
  max-width: 37%;
  margin: 2vw 0 6.18vw;

  @media (max-width: 1400px) {
    max-width: 90%;
    margin: 7.87vw 0 4.3vw;
  }
`,Ub=S.p`
  min-width: 22.5vw;
  ${J};
  ${pe};
  color: ${Cv};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.8px;
  margin: 0 1vw 0 0;
  border-right: 1px solid rgba(255, 255, 255, 0.8);

  @media (max-width: ${O}) {
    align-self: start;
    text-align: start;
    font-size: calc(35vw / 5.8);
    letter-spacing: -0.7px;
    width: 53%;
    border-right: 1px solid rgba(255, 255, 255, 0.8);
    margin: 14.37vw 0 10vw;
  }
`,Wb=()=>{const e=vt();return h.jsxs(Fb,{children:[h.jsx(Wt,{color:Cv,children:nl.title}),h.jsx(Bb,{children:nl.text}),h.jsx(Hb,{children:nl.imagesContext.map((t,n)=>h.jsxs(T.Fragment,{children:[h.jsx(Ub,{children:t.text}),e?h.jsx(hp,{slides:t.coins,size:"small"}):h.jsx(hp,{slides:t.coins,size:"big"})]},n))})]})},Vb=S(Kn)`
  color: ${te.whiteColor};
  padding-bottom: 2.57vw;
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: calc(25vw / 14.4);
  line-height: 1.5;

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.09);
    padding-bottom: 0;
  }
`,cs=({children:e,...t})=>h.jsx(Vb,{...t,children:e}),{greenColor:Kb}=te,Gb=S.div`
  width: 100%;

  @media (max-width: ${O}) {
    width: 82.41vw;
    margin-right: 7.66vw;
    height: 100%;
    display: flex;
  }
`,qb=S.div`
  margin-top: 2.57vw;
  padding: 0 0 0 6vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 82.25vw;
  ${Vc};
  background-image: url(${Bf.backgroundL});
  border-radius: 30px;

  @media (max-width: ${O}) {
    margin-top: 0;
    padding: 8.86vw 4.53vw;
    justify-content: start;
    flex-direction: column;
    width: 82.41vw;
    height: 100%;
    background-image: url(${Bf.backgroundS});
  }
`,Qb=S.p`
  ${Gc};
  margin: 6.74vw 0 2.57vw;

  @media (max-width: ${O}) {
    margin: 12.95vw 0 4.32vw;
  }
`,Xb=S.div`
  width: 32vw;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: ${O}) {
    margin: 0 auto;
    width: 70vw;
    box-sizing: border-box;
  }
`,Yb=S(yt)`
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${Kb};
  font-size: 1.74vw;
  ${pe};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;

  @media (max-width: ${O}) {
    padding-right: 6vw;
    font-size: 4.91vw;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0.83vw;
    height: 1.04vw;
    background-image: url(${Nr.playIconGreen});
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: ${O}) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`,Jb=S.div`
  height: 20vw;
  width: 40vw;
  padding: 5.24vw 4vw;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  margin: auto;
  display: block;

  @media (max-width: ${O}) {
    margin: 0;
    padding: 6vw 0 0 0;
    height: 30vw;
    width: 70vw;
    object-position: center top;
  }
`,Zb=S.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,$v=({slide:e})=>{const t=vt(),n=r=>{switch(r){case"1":return jx;case"2":return Lx;case"3":return Tx;case"4":return _x;default:return""}};return h.jsx(Gb,{children:h.jsxs(qb,{children:[t&&h.jsx(cs,{children:e.subtitle}),h.jsxs(Xb,{children:[h.jsx(Qb,{children:e.textContent}),h.jsx(Yb,{color:"transparent",href:n(e.id),target:"_blank",rel:"noopener noreferrer",children:e.button})]}),h.jsx(Jb,{children:h.jsx(Zb,{src:e.image.src,alt:e.image.alt})})]})})},e2=S.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,t2=({slides:e})=>{const t={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return h.jsx(e2,{children:h.jsx(us,{...t,children:e.map(n=>h.jsx($v,{slide:n},n.id))})})},n2=S.button`
  ${J};
  font-family: Gramatika-Regular, sans-serif;
  font-style: normal;
  border: none;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }

  ${e=>e.disabled&&ge`
      cursor: not-allowed;
      opacity: 1;
      pointer-events: none;
    `}
`;function et({className:e,children:t,onClick:n,type:r,disabled:i}){return h.jsx(n2,{type:r,className:e,disabled:i,onClick:n,children:t})}const{whiteColor:r2,greenColor:i2}=te,o2=S(et)`
  padding: 0 2vw;
  background-color: transparent;
  width: calc(100% / ${({$length:e})=>e});
  border-bottom: 2px solid
    ${({$isActive:e})=>e?i2:r2};
`,Ov=({isActive:e,id:t,onClick:n,length:r,children:i})=>h.jsx(o2,{$isActive:e,$length:r,disabled:e,type:"button",onClick:()=>n(t),children:i}),{whiteColor:gp}=te,kn={text:"Product Description THOTH",slides:[{id:"1",subtitle:"Merchants Solution",textContent:"The solution for businesses to accept crypto payments in any coins and automatically exchange it all into desired stable or currency.",button:"Read more",image:dr.one},{id:"2",subtitle:"Enterprise Blockchain Wallets",textContent:"We deploy infrastructure to provide coins self-custody for enterprise needs.",button:"Read more",image:dr.two},{id:"3",subtitle:"Wallet App",textContent:"Download Android or iOS application to instantly get access to your account.",button:"Read more",image:dr.three},{id:"4",subtitle:"API",textContent:"Automate acceptance in your web store, CRM or application with our feature full API.",button:"Read more",image:dr.four}]},a2=S.section`
  ${Bt};
  //border-radius: 1.6vw 1.6vw 0 0;
  min-height: calc(901vw / 14.4);
  padding: 4.28vw;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${dr.backgroundL});

  @media (max-width: ${O}) {
    min-height: calc(970vw / 5.08);
    //border-radius: 3.93vw 3.93vw 0 0;
    padding: 14.93vw 0;
    flex-direction: column;
    background-image: url(${dr.backgroundS});
  }
`,s2=S(Wt)`
  width: 80%;
`,l2=S(Xc)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${O}) {
    margin: 1.77vw 0 10.61vw;
  }
`,u2=S.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,c2=({id:e,title:t})=>{const n=vt(),[r,i]=T.useState(kn.slides[0].id),o=l=>{i(l)},a=kn.slides.map(l=>l.id),s=kn.slides.find(l=>l.id===r);return h.jsxs("section",{id:e,children:[h.jsxs(a2,{children:[h.jsx(s2,{color:gp,children:t}),h.jsx(l2,{color:gp,children:kn.text}),!n&&h.jsx(u2,{children:a.map(l=>{const u=r===l,d=kn.slides.find(c=>c.id===l);return d?h.jsx(Ov,{id:d.id,length:kn.slides.length,isActive:u,onClick:o,children:h.jsx(cs,{children:d.subtitle})},d.id):null})}),n?h.jsx(t2,{slides:kn.slides}):s&&h.jsx($v,{slide:s})]}),h.jsx(DS,{}),h.jsx(Wb,{})]})},{whiteColor:d2,greenColor:f2,lightGreenColor:p2}=te,h2=S.div`
  grid-column: 3 / 4;
  width: 100%;
  display: flex;
  justify-content: end;
`,g2=S(et)`
  color: transparent;
  padding: 0.8vw 1.7vw 0.8vw 1.7vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    133deg,
    ${f2} 0%,
    ${p2} 100%
  );

  @media (max-width: ${O}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3.5vw 1.7vw 3.5vw 1.7vw;
    margin-top: 10.8vw;
    width: 100%;
  }
`,m2=S.div`
  width: 1.04vw;
  height: 1.18vw;
  background-image: url(${Nr.playIconWhite});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${O}) {
    width: 3.34vw;
    height: 2.95vw;
  }
`,v2=S.span`
  margin-right: 1vw;
  color: ${d2};
  font-size: 1.11vw;
  ${Kc};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.32px;

  @media (max-width: ${O}) {
    margin-right: 4vw;
    font-size: 3.15vw;
  }
`,mp=({text:e})=>{const[t,n]=T.useState(!1),r=Ja(),i=()=>{n(!0),r("/payment-fees"),window.scrollTo({top:0})};return h.jsx(h2,{children:h.jsxs(g2,{type:"button",disabled:t,onClick:i,children:[h.jsx(v2,{children:e}),h.jsx(m2,{})]})})},{lightBlackColor:Pv,blackColor:Ev,darkGreenColor:y2}=te,qt={title:"Fees",lineOne:{title:"Incoming Transactions",text:{main:"As low as 0.5%",span:"and going down based on your total transaction volume.",button:"Check pricing details"}},lineTwo:{title:"Outgoing Transactions",text:{main:"Free of charge"}}},w2=S.section`
  box-sizing: border-box;
  width: 100vw;
  padding: 5.2vw 4.28vw 6.07vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${O}) {
    padding: 12.37vw 8.25vw 16.89vw 11vw;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
  }
`,vp=S.div`
  margin-bottom: 2.5vw;
  display: grid;
  grid-template-columns: 38% 40% 20%;
  gap: 1vw;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: ${O}) {
    display: flex;
    flex-direction: column;
  }
`,yp=S.div`
  grid-column: 2 / 3;
  width: 100%;
`,x2=S(Wt)`
  grid-column: 1 / 2;
  width: 100%;
  text-align: left;
  padding-bottom: 1.89vw;
  margin-bottom: 3.89vw;
  font-size: 3.47vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -1px;
  border-bottom: 2px solid ${Pv};

  @media (max-width: ${O}) {
    padding-bottom: 5.09vw;
    margin: 0;
    font-size: 9.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -1px;
  }
`,wp=S(Kn)`
  color: ${Ev};
  font-size: calc(40vw / 14.4);
  line-height: 1.2;
  letter-spacing: -0.8px;

  @media (max-width: ${O}) {
    margin: 9.82vw 0 0 0;
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
  }
`,xp=S.p`
  ${J};
  ${pe};
  color: ${y2};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.8px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
    margin: 5.1vw 0 3.1vw;
  }
`,S2=S.p`
  ${J};
  color: ${Ev};
  ${pe};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${O}) {
    margin: 1vw 0;
    width: 80%;
    font-size: calc(20vw / 5.08);
  }
`,k2=()=>{const e=vt();return h.jsxs(w2,{children:[h.jsx(x2,{color:Pv,children:qt.title}),h.jsxs(vp,{children:[h.jsx(wp,{children:qt.lineOne.title}),h.jsxs(yp,{children:[h.jsx(xp,{children:qt.lineOne.text.main}),h.jsx(S2,{children:qt.lineOne.text.span})]}),!e&&h.jsx(mp,{text:qt.lineOne.text.button})]}),h.jsxs(vp,{children:[h.jsx(wp,{children:qt.lineTwo.title}),h.jsx(yp,{children:h.jsx(xp,{children:qt.lineTwo.text.main})}),e&&h.jsx(mp,{text:qt.lineOne.text.button})]})]})},{whiteColor:id}=te,b2=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${O}) {
    width: 80vw;
    min-height: 68.17vw;
    align-items: start;
  }
`,C2=S.div`
  @media (max-width: ${O}) {
    padding: 7.18vw 0 10.26vw 10vw;
  }
`,$2=S(cs)`
  @media (max-width: ${O}) {
    width: 100%;
    box-sizing: border-box;
    padding: 9.29vw 1.38vw 5.33vw 12.84vw;
    border-bottom: 1px solid ${id};
  }
`,O2=S.img`
  margin-right: 2.15vw;
  width: 2.98vw;
  height: auto;

  @media (max-width: ${O}) {
    width: 12.45vw;
    margin-right: 3.93vw;
  }
`,P2=S.h4`
  ${J};
  text-align: left;
  font-size: calc(22vw / 14.4);
  ${Wn};
  font-weight: 500;
  line-height: 1.5;
  color: ${id};

  @media (max-width: ${O}) {
    font-size: calc(22vw / 5.08);
  }
`,E2=S.p`
  ${J};
  ${pe};
  color: ${id};
  font-size: calc(20vw / 14.05);
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(20vw / 5.08);
  }
`,j2=S.div`
  display: flex;
  flex-direction: row;
  padding-bottom: calc(14vw / 14.4);

  @media (max-width: ${O}) {
    padding-bottom: calc(24vw / 5.08);
  }
`,jv=({slide:e})=>{const t=vt();return h.jsxs(b2,{children:[t&&h.jsx($2,{children:e.subtitle}),h.jsxs(C2,{children:[h.jsxs(j2,{children:[h.jsx(O2,{src:e.image.src,alt:e.image.alt}),h.jsx(P2,{children:e.title})]}),h.jsx(E2,{children:e.text})]})]})};let wo;const L2=new Uint8Array(16);function T2(){if(!wo&&(wo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!wo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return wo(L2)}const Oe=[];for(let e=0;e<256;++e)Oe.push((e+256).toString(16).slice(1));function _2(e,t=0){return(Oe[e[t+0]]+Oe[e[t+1]]+Oe[e[t+2]]+Oe[e[t+3]]+"-"+Oe[e[t+4]]+Oe[e[t+5]]+"-"+Oe[e[t+6]]+Oe[e[t+7]]+"-"+Oe[e[t+8]]+Oe[e[t+9]]+"-"+Oe[e[t+10]]+Oe[e[t+11]]+Oe[e[t+12]]+Oe[e[t+13]]+Oe[e[t+14]]+Oe[e[t+15]]).toLowerCase()}const R2=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Sp={randomUUID:R2};function z2(e,t,n){if(Sp.randomUUID&&!t&&!e)return Sp.randomUUID();e=e||{};const r=e.random||(e.rng||T2)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return _2(r)}const N2=S(et)`
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  transition: background-color 0.3s;
  position: absolute;
  top: ${e=>e.$top||"auto"};
  left: ${e=>e.$left||"auto"};
  right: ${e=>e.$right||"auto"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
`,I2=({children:e,className:t,currentSlide:n,slideCount:r,top:i,left:o,right:a,...s})=>{const l={className:t,onClick:s.onClick||(()=>console.log("onClick")),type:"button",disabled:!1};return h.jsxs(N2,{...l,$top:i,$left:o,$right:a,...s,children:[e,!n||!r]})},M2=S.img`
  @media (${O}) {
    border-radius: 50%;
    width: 8.82vw;
    height: 8.82vw};
  }
`,D2=S.div`
  height: 100%;
  background-image: url(${mu.background});
  background-repeat: no-repeat;
  background-size: cover;
`,A2=({slides:e})=>{const t={dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,swipe:!1,variableWidth:!0,centerMode:!1,prevArrow:h.jsx(h.Fragment,{}),nextArrow:h.jsx(I2,{className:"arrow next",top:"12.5%",right:"9%",children:h.jsx(M2,{src:mu.right.src,alt:mu.right.alt})})},n=e.flatMap(r=>r.content.map(i=>({id:z2(),subtitle:r.subtitle,image:i.image,title:i.title,text:i.text})));return h.jsx(D2,{children:h.jsx(us,{...t,children:n.map(r=>h.jsx(jv,{slide:r},r.id))})})},{whiteColor:Tn,greenColor:F2}=te,H2=S.div`
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  margin-bottom: ${({size:e})=>e==="big"?"calc(42vw / 14.4)":"calc(60vw / 14.4)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 2px solid ${Tn};

  &:nth-child(2n) {
    border-bottom: ${({size:e})=>e==="big"?"none":`2px solid ${Tn}`};
  }

  @media (max-width: ${O}) {
    margin-bottom: calc(49vw / 5.08);
    border-bottom: ${({size:e})=>e==="small"?"none":`2px solid ${Tn}`};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
    margin-left: ${({size:e})=>e==="small"?"8.46vw":"0"};

    &:nth-child(2n) {
      border-bottom: ${({size:e})=>e==="big"?`2px solid ${Tn}`:"none"};
    }
  }
`,B2=S.div`
  margin: ${({size:e})=>e==="big"?"2vw 0 0.71vw":"1vw 0 1vw"};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  @media (max-width: ${O}) {
    margin: ${({size:e})=>e==="big"?"calc(45vw / 5.09) 0 calc(12vw / 5.09)":"calc(12vw / 5.09) 0 calc(12vw / 5.09)"};
  }
`,Lv=S.p`
  ${J};
  ${pe};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.09);
  }
`,U2=S(Lv)`
  padding-right: 3vw;
  color: ${F2};
`,W2=S(Lv)`
  color: ${Tn};
`,V2=S(Kn)`
  margin-bottom: calc(6.58vw / 14.4);
  color: ${Tn};
  font-size: ${({size:e})=>e==="big"?"calc(35vw / 14.4)":"calc(28vw / 14.4)"};
  line-height: 1.2;
  letter-spacing: -0.7px;
  text-align: left;

  @media (max-width: ${O}) {
    margin-bottom: 0;
    font-size: ${({size:e})=>e==="big"?"calc(30vw / 5.09)":"calc(23vw / 5.09)"};
    letter-spacing: -0.6px;
  }
`,K2=S.p`
  ${J};
  ${pe};
  margin: 0.21vw 0 3.26vw;
  font-size: calc(25vw / 14.4);
  color: ${Tn};
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;
  align-self: start;

  @media (max-width: ${O}) {
    margin: 3vw 0 9.84vw;
    font-size: calc(25vw / 5.09);
  }
`,G2=S.img`
  height: ${({size:e})=>e==="big"?"calc(268vw / 14.4)":"calc(154vw / 14.4)"};
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${O}) {
    height: ${({size:e})=>e==="big"?"calc(184vw / 5.08)":"calc(148vw / 5.08)"};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
  }
`,Tu=({slide:e,size:t})=>h.jsxs(H2,{size:t,children:[h.jsx(G2,{size:t,src:e.image.src,alt:e.image.alt}),h.jsxs(B2,{size:t,children:[h.jsx(U2,{children:e.span}),h.jsx(W2,{children:e.date})]}),h.jsx(V2,{size:t,children:e.title}),t==="big"&&h.jsx(K2,{size:t,children:e.text})]}),q2=S.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,Q2=({slides:e,size:t})=>{const n={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return h.jsx(q2,{children:h.jsx(us,{...n,children:e.map(r=>h.jsx(Tu,{slide:r,size:t},r.id))})})},{whiteColor:X2,greenColor:Y2}=te,rl={title:"News",button:"Read more",slides:[{id:"1",span:"Corporate News",date:"20.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:On.one},{id:"2",span:"Corporate News",date:"21.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:On.two},{id:"3",span:"Corporate News",date:"22.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:On.three},{id:"4",span:"Corporate News",date:"23.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:On.four},{id:"5",span:"Corporate News",date:"24.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:On.five}]},J2=S.div`
  box-sizing: border-box;
  width: 100vw;
  padding-bottom: 5vw;
  min-height: calc(1317vw / 14.4);
  background-image: url(${On.backgroundL});
  ${Bt};
  border-radius: 1.6vw;

  @media (max-width: ${O}) {
    padding-bottom: 10vw;
    background-image: url(${On.backgroundL});
    min-height: calc(1441vw / 5.08);
    border-radius: 3.93vw;
  }
`,Z2=S.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${O}) {
    flex-direction: column;
  }
`,eC=S.div`
  visibility: hidden;
  padding: 5.06vw 3.92vw;
  display: flex;
  flex-direction: row;
  align-items: end;

  @media (max-width: ${O}) {
    padding: 14vw 3.56vw 7.34vw;
  }
`,tC=S(yt)`
  margin-left: 3.54vw;
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${Y2};
  font-size: 1.74vw;
  ${pe};
  font-style: normal;
  font-weight: 400;
  line-height: 2.2;
  letter-spacing: -0.5px;

  @media (max-width: ${O}) {
    margin-left: 10vw;
    padding-right: 6vw;
    font-size: 4.91vw;
    line-height: 1.7;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0.83vw;
    height: 1.04vw;
    background-image: url(${Nr.playIconGreen});
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: ${O}) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`,nC=S.div`
  width: calc(696vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${O}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`,rC=S.div`
  width: calc(414vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${O}) {
    width: 100%;
  }
`,iC=()=>{const e=vt(),t=rl.slides,n=t.slice(0,2),r=t.slice(2,5);return h.jsxs(J2,{children:[h.jsxs(eC,{children:[h.jsx(Wt,{color:X2,children:rl.title}),h.jsx(tC,{color:"transparent",href:Nx,target:"_blank",rel:"noopener noreferrer",children:rl.button})]}),h.jsxs(Z2,{children:[h.jsx(nC,{children:n.map(i=>h.jsx(Tu,{slide:i,size:"big"},i.id))}),e?h.jsx(Q2,{slides:r,size:"small"}):h.jsx(rC,{children:r.map(i=>h.jsx(Tu,{slide:i,size:"small"},i.id))})]})]})},{deepColor:yi,darkGreenColor:_u}=te,Qt={title:"Have a question?",text:"Explore our solutions or you can contact us throughticket system and contact form. Feel free to get in touch..",existing:{title:"For existing clients",text:"If you already have an account please use our ticket system.",linkName:"Get 24\\7 Support"},new:{title:"For new clients or partners",text:"Please leave your inquiry and our Buisness Development Team will contact you shortly.",linkName:"Contact BD Team"}},oC=S.section`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 10.9vw 4.28vw;

  @media (max-width: ${O}) {
    flex-direction: column;
    padding: 12vw 8.01vw 19.1vw;
  }
`,aC=S(Wt)`
  padding: 3.13vw 0 1.8vw;
  align-self: start;
  text-align: left;

  @media (max-width: ${O}) {
    flex-direction: column;
    padding: 0 0 7.28vw;
  }
`,il=S.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 31.94vw;

  @media (max-width: ${O}) {
    min-width: 100%;
  }
`,kp=S.div`
  min-height: 25.69vw;
  display: flex;
  flex-direction: column;
  max-width: 31.94vw;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${O}) {
    min-width: 100%;
  }
`,ol=S.p`
  width: 25vw;
  ${J};
  font-size: calc(25vw / 14.4);
  ${pe};
  color: ${yi};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;
  @media (max-width: ${O}) {
    width: 100%;
    padding: 2.56vw 0 5.5vw;
  }

  &:first-child,
  &.custom-first {
    width: 30.76vw;
    @media (max-width: ${O}) {
      width: 100%;
    }
  }

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.08);
  }
`,bp=S.img`
  width: auto;
  height: calc(58vw / 14.4);
  @media (max-width: ${O}) {
    height: calc(58vw / 5.08);
    margin: 12vw 0 4.92vw;
  }
`,Cp=S(Kn)`
  padding: 1.39vw 0 0.1vw 0;
  color: ${yi};
  font-size: calc(30vw / 14.4);
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(30vw / 5.08);
  }
`,$p=S(yt)`
  color: ${_u};
  ${J};
  ${pe};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-decoration-line: underline;

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.08);
  }
`,sC=()=>h.jsxs(oC,{children:[h.jsxs(il,{children:[h.jsx(aC,{color:yi,children:Qt.title}),h.jsx(ol,{className:"custom-first",children:Qt.text})]}),h.jsxs(kp,{children:[h.jsxs(il,{children:[h.jsx(bp,{src:vo.existingClient.src,alt:vo.existingClient.alt}),h.jsx(Cp,{children:Qt.existing.title}),h.jsx(ol,{color:yi,children:Qt.existing.text})]}),h.jsx($p,{href:Ix,target:"_blank",rel:"noopener noreferrer",color:_u,children:Qt.existing.linkName})]}),h.jsxs(kp,{children:[h.jsxs(il,{children:[h.jsx(bp,{src:vo.newClient.src,alt:vo.newClient.alt}),h.jsx(Cp,{children:Qt.new.title}),h.jsx(ol,{color:yi,children:Qt.new.text})]}),h.jsx($p,{href:Mx,target:"_blank",rel:"noopener noreferrer",color:_u,children:Qt.new.linkName})]})]}),{whiteColor:Op}=te,bn={text:"Product Description THOTH",slides:[{id:"1",subtitle:"Merchants Solution",content:[{id:"1",image:_t.one.one,title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."},{id:"2",image:_t.one.two,title:"E-commerce",text:"The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments."},{id:"3",image:_t.one.three,title:"Marketplaces",text:"There are many platforms used by businesses to sell their products or services. Offering crypto payments to customers is now the advantage."},{id:"4",image:_t.one.four,title:"Travel Industry",text:"The travel industry is a growing sector. With increasing bookings now made online, it makes financial sense to accept crypto payments."},{id:"5",image:_t.one.five,title:"Gambling",text:"The global online gambling industry is worth billions of dollars. Crypto payments are part for the course."},{id:"6",image:_t.one.six,title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."}]}]},lC=S.section`
  box-sizing: border-box;
  width: 100vw;
  min-height: calc(850vw / 14.4);
  padding: 4.28vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${_t.backgroundL});
  ${Bt};
  //border-radius: 1.6vw;
  border-radius: 0 0 1.6vw 1.6vw;

  @media (max-width: ${O}) {
    padding: 14.17vw 0 12.4vw 0;
    box-sizing: border-box;
    min-height: 138.78vw;
    justify-content: space-between;
    flex-direction: column;
    background-image: url(${_t.backgroundS});
    //border-radius: 3.93vw;
    border-radius: 0 0 3.93vw 3.93vw;
  }
`,uC=S.div`
  width: 100%;
`,cC=S(Xc)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${O}) {
    margin: 1.76vw 0 0;
  }
`,dC=S.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,fC=S.div`
  margin-top: 2.57vw;
  padding: 4.93vw 6.25vw;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vw;
  width: 88.47vw;
  min-height: 37.15vw;
  ${Vc};
  background-image: url(${_t.slide});
  border-radius: 30px;

  @media (max-width: ${O}) {
    display: block;
    padding: 0;
    background-image: none;
  }
`,pC=({id:e,title:t})=>{const n=vt(),[r,i]=T.useState(bn.slides[0].id),o=l=>{i(l)},a=bn.slides.map(l=>l.id),s=bn.slides.find(l=>l.id===r);return h.jsxs("section",{id:e,children:[h.jsxs(lC,{children:[h.jsxs(uC,{children:[h.jsx(Wt,{color:Op,children:t}),h.jsx(cC,{color:Op,children:bn.text}),!n&&h.jsx(dC,{style:{display:"none"},children:a.map(l=>{const u=r===l,d=bn.slides.find(c=>c.id===l);return d?h.jsx(Ov,{id:d.id,length:bn.slides.length,isActive:u,onClick:o,children:h.jsx(cs,{children:d.subtitle})},d.id):null})})]}),h.jsx(fC,{children:n?h.jsx(A2,{slides:bn.slides}):s&&s.content.map(l=>h.jsx(jv,{slide:l},l.id))})]}),h.jsx(k2,{}),h.jsx(iC,{}),h.jsx(sC,{})]})},hC=({mainScreenRef:e,sections:t})=>h.jsxs(h.Fragment,{children:[h.jsx(lS,{ref:e}),t.map(n=>n.id==="1"?h.jsx(LS,{id:n.id,title:n.title},n.id):n.id==="3"?h.jsx(c2,{id:n.id,title:n.title},n.id):n.id==="4"?h.jsx(pC,{id:n.id,title:n.title},n.id):null)]}),{ratesFeesColor:gC,navigateLinkColor:mC}=te,vC=S.div`
  padding-left: 5.4vw;
  background-color: ${gC};
  display: flex;
  flex-direction: row;
  align-items: start;

  @media (max-width: ${O}) {
    padding-left: 6.4vw;
  }
`,yC=S(et)`
  background-color: transparent;
`,al=S.p`
  ${J};
  margin-right: 0.2vw;
  ${pe};
  color: ${mC};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 2;

  @media (max-width: ${O}) {
    margin-right: 1vw;
    font-size: calc(15vw / 5.09);
  }
`,wC=({navigation:e})=>{const{button:t,separator:n,location:r}=e,[i,o]=T.useState(!1),a=Ja(),s=()=>{o(!0),a("/thoth/")};return h.jsxs(vC,{children:[h.jsx(yC,{type:"button",disabled:i,onClick:s,children:h.jsx(al,{children:t})}),h.jsx(al,{children:n}),h.jsx(al,{children:r})]})},{ratesFeesColor:xC,darkGreenColor:Ru,blackColor:SC,whiteColor:kC}=te,bC=S.div`
  margin: 0 6.25vw 4.58vw 3.23vw;
  display: flex;
  flex-direction: column;

  @media (max-width: ${O}) {
    margin: 0 6.25vw 4.58vw 4.5vw;
  }
`,CC=S.div`
  padding: 2.22vw 0 4.86vw 2.78vw;
  border-top: 1px solid ${Ru};
  border-left: 1px solid ${Ru};
`,$C=S.div`
  display: flex;
  justify-content: space-between;
`,OC=S.p`
  width: calc(270vw / 14.4);
  ${qc};
  ${pe};

  @media (max-width: ${O}) {
    min-width: calc(210vw / 5.09);
  }
`,PC=S.span`
  margin-left: 1vw;
  text-align: left;
  min-width: calc(90vw / 14.4);
  ${qc};
  ${pe};

  @media (max-width: ${O}) {
    min-width: calc(70vw / 5.09);
  }
`,EC=S.span`
  text-align: center;
  min-width: calc(180vw / 14.4);
  ${qc}
  ${Wn};

  @media (max-width: ${O}) {
    min-width: calc(140vw / 5.09);
  }
`,jC=S.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  &:nth-child(odd) {
    background-color: ${xC};
  }
`,LC=S(Kn)`
  margin: 0 0 1.18vw 2.7vw;
  color: ${Ru};
  ${Wn};
  text-align: left;
  font-size: calc(30vw / 14.4);
  font-style: normal;
  font-weight: 400;

  @media (max-width: ${O}) {
    font-size: calc(30vw / 5.09);
  }
`,TC=S(yt)`
  margin-top: 2.26vw;
  display: inline-block;
  ${Wn};
  padding: 0.8vw 5.5vw 0.8vw 2.5vw;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  width: fit-content;
  color: ${kC};
  text-align: center;
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  background-color: ${SC};

  &:after {
    content: "";
    position: absolute;
    width: calc(19vw / 14.4);
    height: calc(15.5vw / 14.4);
    background-image: url(${Nr.playIconWhite});
    background-repeat: no-repeat;
    background-size: contain;
    right: 1vw;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: ${O}) {
    padding: 1.5vw 6vw 1.5vw 3vw;
    font-size: calc(17vw / 5.09);

    &:after {
      content: "";
      position: absolute;
      width: calc(12vw / 5.09);
      height: calc(10.5vw / 5.09);
      background-image: url(${Nr.playIconWhite});
      background-repeat: no-repeat;
      background-size: contain;
      right: 1vw;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`,Pp=({rates:e})=>h.jsxs(bC,{children:[h.jsx(LC,{children:e.subtitle}),h.jsxs(CC,{children:[Object.keys(e).map(t=>{const n=e[t];return typeof n=="string"?null:h.jsxs(jC,{children:[h.jsx(OC,{children:n.text}),h.jsx("div",{children:n.percent&&n.percent.map((r,i)=>h.jsxs($C,{children:[h.jsx(PC,{children:r}),n.span&&n.span[i]&&h.jsx(EC,{children:n.span[i]})]},i))})]},t)}),h.jsx(TC,{color:"transparent",href:e.linkHref,target:"_blank",rel:"noopener noreferrer",children:e.linkLabel})]})]}),{lightBlackColor:_C}=te,RC=S.main`
  width: 100vw;
`,zC=S.div`
  display: flex;
  flex-direction: column;
`,NC=S.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,IC=S(Wt)`
  margin: 3.33vw 5.4vw 4.51vw;
  text-align: start;

  @media (max-width: ${O}) {
    margin: 3.33vw 6.4vw 4.51vw;
  }
`,MC=T.forwardRef((e,t)=>{const{t:n}=Ut(),r=Vn("PaymentFees",n),{title:i,individual:o,enterprise:a,navigation:s}=r;return h.jsxs(RC,{ref:t,children:[h.jsx(wC,{navigation:s}),h.jsxs(zC,{children:[h.jsx(IC,{color:_C,children:i}),h.jsxs(NC,{children:[h.jsx(Pp,{rates:o}),h.jsx(Pp,{rates:a})]})]})]})}),DC=sx`
  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    margin: 0;
    height: inherit !important;

    &.slick-slide {
      > div {
        height: 100%;
      }
    }
  }

  .slick-prev:before,
  .slick-next:before {
    content: none !important;
  }
`,AC=()=>{Ja();const{t:e}=Ut(),t=Vn("NotFound",e);return console.log(t),h.jsxs("div",{children:[h.jsx("h1",{children:t.title}),h.jsx("p",{children:t.text}),h.jsx("button",{children:t.button})]})},FC=S.img`
  ${zr};
  width: fit-content;
  height: 2.63vw;

  @media (max-width: ${O}) {
    width: fit-content;
    height: 5.06vw;
  }
`,Tv=()=>{const{t:e}=Ut(),t=Vn("Logo",e),{src:n,alt:r}=t;return h.jsx(FC,{src:n,alt:r})},HC=S.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  position: ${({$location:e})=>e?"relative":"static"};
  z-index: ${({$location:e})=>e?"11":"1"};

  @media (max-width: ${O}) {
    height: ${({$location:e})=>e?"100%":"auto"};
    justify-content: ${({$location:e})=>e?"end":"center"};
    align-items: ${({$location:e})=>e?"end":"center"};
  }
`,BC=S(yt)`
  display: flex;
  margin-right: 1.2vw;

  @media (max-width: ${O}) {
    margin-right: 3vw;
  }
`,Ep=S.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${O}) {
    width: 6.61vw;
    height: 6.61vw;
  }
`,UC=S(et)`
  display: flex;
  background-color: transparent;
`,od=({type:e,$location:t,onClick:n,...r})=>{const{t:i}=Ut(),o=Vn("FeedbackWidgets",i);return h.jsx(HC,{$location:t,...r,children:o.map(a=>h.jsx(BC,{color:"transparent",href:a.href,target:"_blank",rel:"noopener noreferrer",children:n?h.jsx(UC,{type:"button",disabled:!n,onClick:n,children:h.jsx(Ep,{src:a.image[e==="light"?"lightSrc":"darkSrc"],alt:a.image.alt})}):h.jsx(Ep,{src:a.image[e==="light"?"lightSrc":"darkSrc"],alt:a.image.alt})},a.id))})},WC=S.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  @media (max-width: ${O}) {
    gap: 1vw;
  }
`,jp=S.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${O}) {
    margin: ${({$isButton:e})=>e?"0":"0 2vw"};
    width: ${({$isButton:e})=>e?"3vw":"6.5vw"};
    height: ${({$isButton:e})=>e?"3vw":"6.5vw"};
  }
`,VC=S.p`
  ${J};
  ${pe};
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.39vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.6px;
  align-self: end;

  @media (max-width: ${O}) {
    font-size: 3.92vw;
  }
`,KC=S(et)`
  margin-right: 1vw;
  background: transparent;
  border-radius: 50px;
`,zu=({image:e,isButton:t=!1,onClick:n})=>{const{src:r,alt:i,text:o}=e;return h.jsxs(WC,{children:[t&&n?h.jsx(KC,{type:"button",disabled:!1,onClick:n,children:h.jsx(jp,{src:r,alt:i,$isButton:t})}):h.jsx(jp,{src:r,alt:i,$isButton:t}),h.jsx(VC,{children:o})]})},GC=[{code:"en",name:"English"},{code:"ru",name:"Русский"}],qC=S.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`,QC=S(et)`
  ${zr};
  background-color: transparent;
  width: 1.04vw;
  height: 0.83vw;
  border-radius: 0;
  background-image: url("images/header/close-icon.svg");

  @media (max-width: ${O}) {
    width: 2.95vw;
    height: 2.16vw;
  }
`,XC=S.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2.3vw 5vw 2.3vw 1.74vw;
  box-sizing: border-box;

  @media (max-width: ${O}) {
    padding: 16.7vw 5vw 13vw 5vw;
  }
`,YC=S(et)`
  ${J};
  ${pe};
  text-align: left;
  margin: 1.95vw 0 0 1vw;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.18vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.51px;
  background: transparent;

  @media (max-width: ${O}) {
    font-size: calc(16vw / 5.08);
    margin: 4vw 0 0 2vw;
  }

  ${({$code:e,$currentLanguage:t})=>e===t&&ge`
      display: flex;
      align-items: center;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 18vw;
        transform: translateY(-50%);
        background-image: url(${Yx.background});
        background-size: cover;
        width: 1.25vw;
        height: 1vw;

        @media (max-width: ${O}) {
          width: 2.5vw;
          height: 2vw;
          left: 45vw;
        }
      }
    `}
`,JC=({language:e,isLanguagesOpen:t,languagesHandler:n})=>{const{i18n:r}=Ut(),[i,o]=T.useState(r.language),a=async l=>{o(l),await r.changeLanguage(l),n()},s=l=>async()=>{await a(l)};return h.jsxs(XC,{children:[h.jsxs(qC,{children:[h.jsx(QC,{disabled:!t,type:"button",onClick:n}),h.jsx(zu,{image:e})]}),GC.map(l=>h.jsx(YC,{type:"button",disabled:!t,$code:l.code,$currentLanguage:i,onClick:s(l.code),children:l.name},l.code))]})},{whiteColor:_v,greenColor:ZC,lightGreenColor:e$}=te,t$=S.div`
  position: relative;
  z-index: 11;
  width: 15.5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${O}) {
    width: 100%;
    justify-content: start;
  }
`,n$=S(yt)`
  border-radius: 5px;
  padding: 0.5vw 2vw;
  background: linear-gradient(
    133deg,
    ${ZC} 0%,
    ${e$} 100%
  );
  word-break: break-word;
  @media (max-width: ${O}) {
    padding: 1.7vw 4.4vw;
  }
`,r$=S(yt)`
  visibility: hidden;
  margin: 0 1vw;
  background-color: transparent;
  word-break: break-word;
  @media (max-width: ${O}) {
    margin: 0 7.5vw 0 2vw;
  }
`,Lp=S.span`
  color: ${_v};
  ${Vr};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.48px;
  text-decoration-line: underline;

  @media (max-width: ${O}) {
    color: rgba(255, 255, 255, 0.9);
    font-size: calc(16vw / 5.09);
  }
`,Tp=S.span`
  color: ${_v};
  ${Wn};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.42px;

  @media (max-width: ${O}) {
    color: rgba(255, 255, 255, 0.9);
    font-size: calc(14vw / 5.09);
  }
`,_p=S(et)`
  background-color: transparent;
  display: flex;
`,Rv=({onClick:e,loginAndRegister:t})=>{const{signUp:n,signIn:r}=t;return h.jsxs(t$,{children:[h.jsx(r$,{color:"transparent",href:Px,target:"_blank",rel:"noopener noreferrer",children:e?h.jsx(_p,{type:"button",disabled:!e,onClick:e,children:h.jsx(Lp,{children:n})}):h.jsx(Lp,{children:n})}),h.jsx(n$,{color:"transparent",href:Ox,target:"_blank",rel:"noopener noreferrer",children:e?h.jsx(_p,{type:"button",disabled:!e,onClick:e,children:h.jsx(Tp,{children:r})}):h.jsx(Tp,{children:r})})]})},i$=S.ul`
  position: relative;
  z-index: 11;
  ${J};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0 1vw;
  min-width: 40vw;
  border-left: 1px solid rgba(255, 255, 255, 0.9);
  border-right: 1px solid rgba(255, 255, 255, 0.9);
  flex-wrap: wrap;

  @media (max-width: ${O}) {
    border: none;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
`,o$=S.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;

  @media (max-width: ${O}) {
    margin-top: calc(27vw / 5.09);
    justify-content: start;
    align-self: start;
  }
`,a$=S(et)`
  background-color: transparent;
  ${J};
  ${Vr};
  color: rgba(255, 255, 255, 0.9);
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.48px;
  text-align: left;
  max-width: 7vw;

  @media (max-width: ${O}) {
    max-width: 20vw;
    font-size: calc(16vw / 5.08);
  }
`,zv=({sections:e,headerHeight:t,burgerMenuHandler:n,isLanguagesOpen:r,languagesHandler:i})=>{const o=Ja(),a=Ya(),[s,l]=T.useState(!1),u=async c=>{a.pathname!=="/"&&await o("/");const f=document.getElementById(c);if(f){const y=f.offsetTop-t;window.scrollTo({top:y,behavior:"smooth"})}l(!1)},d=async c=>{l(!0),n&&await n(),i&&r&&await i(),await u(c)};return h.jsx("nav",{children:h.jsx(i$,{children:e.map(c=>h.jsx(o$,{children:h.jsx(a$,{disabled:s,type:"button",onClick:()=>d(c.id),children:c.title})},c.id))})})},s$=S.div`
  display: none;

  @media (max-width: ${O}) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 16.7vw 5vw 15vw 5vw;
    box-sizing: border-box;
  }
`,l$=S.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`,u$=S(et)`
  ${zr};
  background-color: transparent;
  width: 2.95vw;
  height: 2.16vw;
  border-radius: 0;
  background-image: url("images/header/close-icon.svg");
`,c$=S.div`
  box-sizing: border-box;
  margin: 6.88vw 0 4.51vw 1vw;
  padding: 5.09vw 0;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.45);
  border-bottom: 1px solid rgba(255, 255, 255, 0.45);
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`,d$=({language:e,menu:t,sections:n,headerHeight:r,languagesHandler:i,isBurgerMenuOpen:o,burgerMenuHandler:a,loginAndRegister:s})=>h.jsxs(s$,{children:[h.jsxs(l$,{children:[h.jsx(u$,{disabled:!o,type:"button",onClick:a}),h.jsx(zu,{image:t})]}),h.jsx(zv,{sections:n,headerHeight:r,burgerMenuHandler:a}),h.jsx(c$,{children:h.jsx(zu,{image:e,isButton:!0,onClick:i})}),h.jsx(Rv,{loginAndRegister:s,onClick:a}),h.jsx(od,{$location:"menu",type:"light",onClick:a})]}),f$=S.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  background: rgba(23, 42, 68, 0.6);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  position: absolute;
  top: 0;
  right: -100%;
  width: 23.5%;
  z-index: 100;

  ${({$isOpen:e})=>e!==null?e?ge`
            animation: ${lx} 0.5s forwards;
          `:ge`
            animation: ${ux} 0.5s forwards;
          `:""};

  @media (max-width: ${O}) {
    width: 60%;
  }
`,Rp=({containerHeight:e,headerHeight:t,children:n,isOpen:r})=>{const i=Ya(),o=vt(),a=i.pathname==="/";return T.useLayoutEffect(()=>{const s=()=>{document.querySelectorAll(".drop-right").forEach(u=>{u.style.height=`calc(${e}px + ${t}px + ${!o&&a?1.7:0}vw)`,u.style.border="1px solid red"})};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[e,t,o]),h.jsx(f$,{className:"drop-right",$isOpen:r,children:n})},{whiteColor:p$,headerColor:h$}=te,g$=S.header`
  background-color: ${h$};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  box-sizing: border-box;
  padding-left: 4vw;
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 6.94vw;
  z-index: 10;
  border-bottom: 0.5px ${p$} solid;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  @media (max-width: ${O}) {
    box-sizing: border-box;
    padding: 1vw 8.27vw 0;
    min-height: 12.5vw;
    justify-content: space-between;
  }
`,m$=S(et)`
  background-color: transparent;
  border-radius: 0;
  display: flex;
`,v$=S.img`
  width: 6.5vw;
  height: 3.77vw;
`,y$=S.div`
  position: relative;
  z-index: 11;
`,w$=S(od)`
  margin-left: 1.2vw;
  width: 20vw;
  display: flex;
  justify-content: end;
`,x$=S(et)`
  margin: 0 2vw;
  background-color: transparent;
  border-radius: 0;
  display: flex;
`,S$=S.img`
  width: 2.22vw;
  height: 2.22vw;
`,k$=T.forwardRef(({sections:e,containerHeight:t,isLanguagesOpen:n,isBurgerMenuOpen:r,languagesHandler:i,burgerMenuHandler:o,headerHeight:a},s)=>{const{t:l}=Ut(),u=Vn("Header",l),{loginAndRegister:d,language:c,menu:f}=u,y=vt();return h.jsxs(h.Fragment,{children:[h.jsxs(g$,{ref:s,children:[h.jsx(y$,{children:h.jsx(Tv,{})}),y!==null&&!y&&h.jsxs(h.Fragment,{children:[h.jsx(w$,{type:"light",$location:"menu"}),h.jsx(zv,{sections:e,headerHeight:a,isLanguagesOpen:n,languagesHandler:i}),h.jsx(Rv,{loginAndRegister:d}),h.jsx(x$,{disabled:!!n,type:"button",onClick:i,children:h.jsx(S$,{src:c.srcGray,alt:c.alt})})]}),y&&h.jsx(m$,{disabled:!!r,type:"button",onClick:o,children:h.jsx(v$,{src:f.src,alt:f.alt})})]}),y&&h.jsx(Rp,{isOpen:r,headerHeight:a,containerHeight:t,children:h.jsx(d$,{containerHeight:t,sections:e,headerHeight:a,isBurgerMenuOpen:r,burgerMenuHandler:o,languagesHandler:i,language:c,menu:f,loginAndRegister:d})}),h.jsx(Rp,{isOpen:n,headerHeight:a,containerHeight:t,children:h.jsx(JC,{containerHeight:t,headerHeight:a,isLanguagesOpen:n,languagesHandler:i,language:c})})]})}),{whiteColor:ad}=te,b$=S.div`
  min-width: 10vw;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: ${O}) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10vw;
  }
`,C$=S.h3`
  ${J};
  margin-bottom: 0.7vw;
  color: ${ad};
  ${Vr};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${O}) {
    margin-bottom: 2vw;
    text-align: center;
    font-size: calc(20vw / 5.08);
    font-weight: bold;
    line-height: 2;
  }
`,$$=S.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${O}) {
    margin: 0.5vw;
  }
`,O$=S.li`
  ${J};
  margin-bottom: 0.34vw;
  color: ${ad};
  ${Vr};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;

  @media (max-width: ${O}) {
    text-align: center;
    font-size: calc(20vw / 5.08);
  }
`,sl=({data:e})=>h.jsxs(b$,{children:[h.jsx(C$,{children:e.title}),h.jsx($$,{children:e.links.map(t=>h.jsx(O$,{children:h.jsx(yt,{color:ad,href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.name})},t.name))})]}),{whiteColor:Nu,deepGrayColor:P$}=te,Et={text:"Our vision is to provide convenience and help increase your sales business.",nav:{about:{title:"About",links:[{name:"How it works",href:Dx},{name:"Featured",href:Ax},{name:"Partnership",href:Fx},{name:"Business Relation",href:Hx}]},community:{title:"Community",links:[{name:"Events",href:Bx},{name:"Blog",href:Ux},{name:"Podcast",href:Wx},{name:"Invite a friend",href:Vx}]},socials:{title:"Socials",links:[{name:"Telegram",href:Gm},{name:"Twitter",href:Vm},{name:"Facebook",href:Km}]}},rights:"Auto Fast. All rights reserved",policy:{name:"Privacy & Policy",href:Kx},condition:{name:"Terms & Condition",href:Gx}},E$=S.footer`
  width: 100vw;
  box-sizing: border-box;
  padding: 5.55vw 4.28vw 0.5vw;
  background-color: ${P$};

  @media (max-width: ${O}) {
    padding: 15.7vw 0 4.17vw 0;
  }
`,j$=S.div`
  margin-bottom: 2.5vw;
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${O}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,L$=S.div`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  justify-content: space-between;

  @media (max-width: ${O}) {
    flex-direction: column;
    align-items: center;
  }
`,T$=S.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${O}) {
    flex-direction: column;
  }
`,_$=S(Tv)`
  @media (max-width: ${O}) {
    width: 43.5vw;
    height: 10.24vw;
  }
`,R$=S.div`
  min-width: 10vw;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: ${O}) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10vw;
  }
`,zp=S.p`
  ${J};
  margin: 2.54vw 0 2.09vw;
  color: ${Nu};
  ${Vr};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;
  width: calc(274vw / 14.4);

  @media (max-width: ${O}) {
    margin: 5vw 0 5vw;
    text-align: center;
    font-size: calc(16vw / 5.08);
    width: calc(355vw / 5.08);
  }
`,z$=S(od)`
  @media (max-width: ${O}) {
    padding-left: 3vw;
  }
`,Np=S.p`
  ${J};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(16vw / 5.08);
  }
`,Ip=S(yt)`
  margin-left: 4.2vw;

  @media (max-width: ${O}) {
    margin: 0;
  }
`,N$=()=>{const e=new Date().getFullYear();return h.jsxs(E$,{children:[h.jsxs(j$,{children:[h.jsxs(R$,{children:[h.jsx(_$,{}),h.jsx(zp,{children:Et.text}),h.jsx(z$,{type:"dark"})]}),h.jsx(sl,{data:Et.nav.about}),h.jsx(sl,{data:Et.nav.community}),h.jsx(sl,{data:Et.nav.socials})]}),h.jsxs(L$,{children:[h.jsxs(zp,{children:["© ",e," ",Et.rights]}),h.jsxs(T$,{children:[h.jsx(Ip,{color:Nu,href:Et.policy.href,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Np,{children:Et.policy.name})}),h.jsx(Ip,{color:Nu,href:Et.condition.href,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Np,{children:Et.condition.name})})]})]})]})},I$={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class $a{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||I$,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new $a(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new $a(this.logger,t)}}var bt=new $a;class ds{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[t]&&[].concat(this.observers[t]).forEach(a=>{a(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(a=>{a.apply(a,[t,...r])})}}function ti(){let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n}function Mp(e){return e==null?"":""+e}function M$(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function sd(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function i(){return!e||typeof e=="string"}const o=typeof t!="string"?[].concat(t):t.split(".");for(;o.length>1;){if(i())return{};const a=r(o.shift());!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return i()?{}:{obj:e,k:r(o.shift())}}function Dp(e,t,n){const{obj:r,k:i}=sd(e,t,Object);r[i]=n}function D$(e,t,n,r){const{obj:i,k:o}=sd(e,t,Object);i[o]=i[o]||[],r&&(i[o]=i[o].concat(n)),r||i[o].push(n)}function Oa(e,t){const{obj:n,k:r}=sd(e,t);if(n)return n[r]}function A$(e,t,n){const r=Oa(e,n);return r!==void 0?r:Oa(t,n)}function Nv(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):Nv(e[r],t[r],n):e[r]=t[r]);return e}function Qn(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var F$={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function H$(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>F$[t]):e}const B$=[" ",",","?","!",";"];function U$(e,t,n){t=t||"",n=n||"";const r=B$.filter(a=>t.indexOf(a)<0&&n.indexOf(a)<0);if(r.length===0)return!0;const i=new RegExp(`(${r.map(a=>a==="?"?"\\?":a).join("|")})`);let o=!i.test(e);if(!o){const a=e.indexOf(n);a>0&&!i.test(e.substring(0,a))&&(o=!0)}return o}function Pa(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let i=e;for(let o=0;o<r.length;++o){if(!i||typeof i[r[o]]=="string"&&o+1<r.length)return;if(i[r[o]]===void 0){let a=2,s=r.slice(o,o+a).join(n),l=i[s];for(;l===void 0&&r.length>o+a;)a++,s=r.slice(o,o+a).join(n),l=i[s];if(l===void 0)return;if(l===null)return null;if(t.endsWith(s)){if(typeof l=="string")return l;if(s&&typeof l[s]=="string")return l[s]}const u=r.slice(o+a).join(n);return u?Pa(l,u,n):void 0}i=i[r[o]]}return i}function Ea(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class Ap extends ds{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,a=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let s=[t,n];r&&typeof r!="string"&&(s=s.concat(r)),r&&typeof r=="string"&&(s=s.concat(o?r.split(o):r)),t.indexOf(".")>-1&&(s=t.split("."));const l=Oa(this.data,s);return l||!a||typeof r!="string"?l:Pa(this.data&&this.data[t]&&this.data[t][n],r,o)}addResource(t,n,r,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let s=[t,n];r&&(s=s.concat(a?r.split(a):r)),t.indexOf(".")>-1&&(s=t.split("."),i=n,n=s[1]),this.addNamespaces(n),Dp(this.data,s,i),o.silent||this.emit("added",t,n,r,i)}addResources(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in r)(typeof r[o]=="string"||Object.prototype.toString.apply(r[o])==="[object Array]")&&this.addResource(t,n,o,r[o],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},s=[t,n];t.indexOf(".")>-1&&(s=t.split("."),i=r,r=n,n=s[1]),this.addNamespaces(n);let l=Oa(this.data,s)||{};i?Nv(l,r,o):l={...l,...r},Dp(this.data,s,l),a.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var Iv={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(o=>{this.processors[o]&&(t=this.processors[o].process(t,n,r,i))}),t}};const Fp={};class ja extends ds{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),M$(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=bt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const a=r&&t.indexOf(r)>-1,s=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!U$(t,r,i);if(a&&!s){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:o};const u=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(u[0])>-1)&&(o=u.shift()),t=u.join(i)}return typeof o=="string"&&(o=[o]),{key:t,namespaces:o}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:a,namespaces:s}=this.extractFromKey(t[t.length-1],n),l=s[s.length-1],u=n.lng||this.language,d=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(d){const x=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${x}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l}:`${l}${x}${a}`}return i?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l}:a}const c=this.resolve(t,n);let f=c&&c.res;const y=c&&c.usedKey||a,v=c&&c.exactUsedKey||a,w=Object.prototype.toString.apply(f),k=["[object Number]","[object Function]","[object RegExp]"],g=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,p=!this.i18nFormat||this.i18nFormat.handleAsObject;if(p&&f&&(typeof f!="string"&&typeof f!="boolean"&&typeof f!="number")&&k.indexOf(w)<0&&!(typeof g=="string"&&w==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(y,f,{...n,ns:s}):`key '${a} (${this.language})' returned an object instead of string.`;return i?(c.res=x,c):x}if(o){const x=w==="[object Array]",b=x?[]:{},C=x?v:y;for(const P in f)if(Object.prototype.hasOwnProperty.call(f,P)){const E=`${C}${o}${P}`;b[P]=this.translate(E,{...n,joinArrays:!1,ns:s}),b[P]===E&&(b[P]=f[P])}f=b}}else if(p&&typeof g=="string"&&w==="[object Array]")f=f.join(g),f&&(f=this.extendTranslation(f,t,n,r));else{let x=!1,b=!1;const C=n.count!==void 0&&typeof n.count!="string",P=ja.hasDefaultValue(n),E=C?this.pluralResolver.getSuffix(u,n.count,n):"",R=n.ordinal&&C?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",z=n[`defaultValue${E}`]||n[`defaultValue${R}`]||n.defaultValue;!this.isValidLookup(f)&&P&&(x=!0,f=z),this.isValidLookup(f)||(b=!0,f=a);const H=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&b?void 0:f,D=P&&z!==f&&this.options.updateMissing;if(b||x||D){if(this.logger.log(D?"updateKey":"missingKey",u,l,a,D?z:f),o){const W=this.resolve(a,{...n,keySeparator:!1});W&&W.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let $=[];const j=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&j&&j[0])for(let W=0;W<j.length;W++)$.push(j[W]);else this.options.saveMissingTo==="all"?$=this.languageUtils.toResolveHierarchy(n.lng||this.language):$.push(n.lng||this.language);const B=(W,L,N)=>{const F=P&&N!==f?N:H;this.options.missingKeyHandler?this.options.missingKeyHandler(W,l,L,F,D,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(W,l,L,F,D,n),this.emit("missingKey",W,l,L,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&C?$.forEach(W=>{this.pluralResolver.getSuffixes(W,n).forEach(L=>{B([W],a+L,n[`defaultValue${L}`]||z)})}):B($,a,z))}f=this.extendTranslation(f,t,n,c,r),b&&f===a&&this.options.appendNamespaceToMissingKey&&(f=`${l}:${a}`),(b||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,x?f:void 0):f=this.options.parseMissingKeyHandler(f))}return i?(c.res=f,c):f}extendTranslation(t,n,r,i,o){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(u){const f=t.match(this.interpolator.nestingRegexp);d=f&&f.length}let c=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(c={...this.options.interpolation.defaultVariables,...c}),t=this.interpolator.interpolate(t,c,r.lng||this.language,r),u){const f=t.match(this.interpolator.nestingRegexp),y=f&&f.length;d<y&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var f=arguments.length,y=new Array(f),v=0;v<f;v++)y[v]=arguments[v];return o&&o[0]===y[0]&&!r.context?(a.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`),null):a.translate(...y,n)},r)),r.interpolation&&this.interpolator.reset()}const s=r.postProcess||this.options.postProcess,l=typeof s=="string"?[s]:s;return t!=null&&l&&l.length&&r.applyPostProcessor!==!1&&(t=Iv.handle(l,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:i,...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,o,a,s;return typeof t=="string"&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(l,n),d=u.key;i=d;let c=u.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const f=n.count!==void 0&&typeof n.count!="string",y=f&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),v=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",w=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);c.forEach(k=>{this.isValidLookup(r)||(s=k,!Fp[`${w[0]}-${k}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&(Fp[`${w[0]}-${k}`]=!0,this.logger.warn(`key "${i}" for languages "${w.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(g=>{if(this.isValidLookup(r))return;a=g;const p=[d];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(p,d,g,k,n);else{let x;f&&(x=this.pluralResolver.getSuffix(g,n.count,n));const b=`${this.options.pluralSeparator}zero`,C=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(p.push(d+x),n.ordinal&&x.indexOf(C)===0&&p.push(d+x.replace(C,this.options.pluralSeparator)),y&&p.push(d+b)),v){const P=`${d}${this.options.contextSeparator}${n.context}`;p.push(P),f&&(p.push(P+x),n.ordinal&&x.indexOf(C)===0&&p.push(P+x.replace(C,this.options.pluralSeparator)),y&&p.push(P+b))}}let m;for(;m=p.pop();)this.isValidLookup(r)||(o=m,r=this.getResource(g,k,m,n))}))})}),{res:r,usedKey:i,exactUsedKey:o,usedLng:a,usedNS:s}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function ll(e){return e.charAt(0).toUpperCase()+e.slice(1)}class Hp{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=bt.create("languageUtils")}getScriptPartFromCode(t){if(t=Ea(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=Ea(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=ll(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=ll(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=ll(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&o.indexOf(i)===0)return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],o=a=>{a&&(this.isSupportedCode(a)?i.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):typeof t=="string"&&o(this.formatLanguageCode(t)),r.forEach(a=>{i.indexOf(a)<0&&o(this.formatLanguageCode(a))}),i}}let W$=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],V$={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}};const K$=["v1","v2","v3"],G$=["v4"],Bp={zero:0,one:1,two:2,few:3,many:4,other:5};function q$(){const e={};return W$.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:V$[t.fc]}})}),e}class Q${constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=bt.create("pluralResolver"),(!this.options.compatibilityJSON||G$.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=q$()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Ea(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,o)=>Bp[i]-Bp[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?o():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!K$.includes(this.options.compatibilityJSON)}}function Up(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=A$(e,t,n);return!o&&i&&typeof n=="string"&&(o=Pa(e,n,r),o===void 0&&(o=Pa(t,n,r))),o}class X${constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=bt.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:H$,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?Qn(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?Qn(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?Qn(n.nestingPrefix):n.nestingPrefixEscaped||Qn("$t("),this.nestingSuffix=n.nestingSuffix?Qn(n.nestingSuffix):n.nestingSuffixEscaped||Qn(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,i){let o,a,s;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(v){return v.replace(/\$/g,"$$$$")}const d=v=>{if(v.indexOf(this.formatSeparator)<0){const p=Up(n,l,v,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(p,void 0,r,{...i,...n,interpolationkey:v}):p}const w=v.split(this.formatSeparator),k=w.shift().trim(),g=w.join(this.formatSeparator).trim();return this.format(Up(n,l,k,this.options.keySeparator,this.options.ignoreJSONStructure),g,r,{...i,...n,interpolationkey:k})};this.resetRegExp();const c=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,f=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:v=>u(v)},{regex:this.regexp,safeValue:v=>this.escapeValue?u(this.escape(v)):u(v)}].forEach(v=>{for(s=0;o=v.regex.exec(t);){const w=o[1].trim();if(a=d(w),a===void 0)if(typeof c=="function"){const g=c(t,o,i);a=typeof g=="string"?g:""}else if(i&&Object.prototype.hasOwnProperty.call(i,w))a="";else if(f){a=o[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${t}`),a="";else typeof a!="string"&&!this.useRawValueToEscape&&(a=Mp(a));const k=v.safeValue(a);if(t=t.replace(o[0],k),f?(v.regex.lastIndex+=a.length,v.regex.lastIndex-=o[0].length):v.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,a;function s(l,u){const d=this.nestingOptionsSeparator;if(l.indexOf(d)<0)return l;const c=l.split(new RegExp(`${d}[ ]*{`));let f=`{${c[1]}`;l=c[0],f=this.interpolate(f,a);const y=f.match(/'/g),v=f.match(/"/g);(y&&y.length%2===0&&!v||v.length%2!==0)&&(f=f.replace(/'/g,'"'));try{a=JSON.parse(f),u&&(a={...u,...a})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,w),`${l}${d}${f}`}return delete a.defaultValue,l}for(;i=this.nestingRegexp.exec(t);){let l=[];a={...r},a=a.replace&&typeof a.replace!="string"?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let u=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const d=i[1].split(this.formatSeparator).map(c=>c.trim());i[1]=d.shift(),l=d,u=!0}if(o=n(s.call(this,i[1].trim(),a),a),o&&i[0]===t&&typeof o!="string")return o;typeof o!="string"&&(o=Mp(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),u&&(o=l.reduce((d,c)=>this.format(d,c,r.lng,{...r,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}function Y$(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(a=>{if(!a)return;const[s,...l]=a.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,"");n[s.trim()]||(n[s.trim()]=u),u==="false"&&(n[s.trim()]=!1),u==="true"&&(n[s.trim()]=!0),isNaN(u)||(n[s.trim()]=parseInt(u,10))})}return{formatName:t,formatOptions:n}}function Xn(e){const t={};return function(r,i,o){const a=i+JSON.stringify(o);let s=t[a];return s||(s=e(Ea(i),o),t[a]=s),s(r)}}class J${constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=bt.create("formatter"),this.options=t,this.formats={number:Xn((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return o=>i.format(o)}),currency:Xn((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return o=>i.format(o)}),datetime:Xn((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return o=>i.format(o)}),relativetime:Xn((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return o=>i.format(o,r.range||"day")}),list:Xn((n,r)=>{const i=new Intl.ListFormat(n,{...r});return o=>i.format(o)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=Xn(n)}format(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((s,l)=>{const{formatName:u,formatOptions:d}=Y$(l);if(this.formats[u]){let c=s;try{const f=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},y=f.locale||f.lng||i.locale||i.lng||r;c=this.formats[u](s,y,{...d,...i,...f})}catch(f){this.logger.warn(f)}return c}else this.logger.warn(`there was no format function for ${u}`);return s},t)}}function Z$(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class eO extends ds{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=bt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(t,n,r,i){const o={},a={},s={},l={};return t.forEach(u=>{let d=!0;n.forEach(c=>{const f=`${u}|${c}`;!r.reload&&this.store.hasResourceBundle(u,c)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?a[f]===void 0&&(a[f]=!0):(this.state[f]=1,d=!1,a[f]===void 0&&(a[f]=!0),o[f]===void 0&&(o[f]=!0),l[c]===void 0&&(l[c]=!0)))}),d||(s[u]=!0)}),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(l)}}loaded(t,n,r){const i=t.split("|"),o=i[0],a=i[1];n&&this.emit("failedLoading",o,a,n),r&&this.store.addResourceBundle(o,a,r),this.state[t]=n?-1:2;const s={};this.queue.forEach(l=>{D$(l.loaded,[o],a),Z$(l,t),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{s[u]||(s[u]={});const d=l.loaded[u];d.length&&d.forEach(c=>{s[u][c]===void 0&&(s[u][c]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(l=>!l.done)}read(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:o,callback:a});return}this.readingCalls++;const s=(u,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const c=this.waitingReads.shift();this.read(c.lng,c.ns,c.fcName,c.tried,c.wait,c.callback)}if(u&&d&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,o*2,a)},o);return}a(u,d)},l=this.backend[r].bind(this.backend);if(l.length===2){try{const u=l(t,n);u&&typeof u.then=="function"?u.then(d=>s(null,d)).catch(s):s(null,u)}catch(u){s(u)}return}return l(t,n,s)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const o=this.queueLoad(t,n,r,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(a=>{this.loadOne(a)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),i=r[0],o=r[1];this.read(i,o,"read",void 0,void 0,(a,s)=>{a&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,a),!a&&s&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,s),this.loaded(t,a,s)})}saveMissing(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const l={...a,isUpdate:o},u=this.backend.create.bind(this.backend);if(u.length<6)try{let d;u.length===5?d=u(t,n,r,i,l):d=u(t,n,r,i),d&&typeof d.then=="function"?d.then(c=>s(null,c)).catch(s):s(null,d)}catch(d){s(d)}else u(t,n,r,i,s,l)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}function Wp(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(i=>{n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Vp(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function xo(){}function tO(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class Hi extends ds{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Vp(t),this.services={},this.logger=bt,this.modules={external:[]},tO(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Wp();this.options={...i,...this.options,...Vp(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function o(d){return d?typeof d=="function"?new d:d:null}if(!this.options.isClone){this.modules.logger?bt.init(o(this.modules.logger),this.options):bt.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:typeof Intl<"u"&&(d=J$);const c=new Hp(this.options);this.store=new Ap(this.options.resources,this.options);const f=this.services;f.logger=bt,f.resourceStore=this.store,f.languageUtils=c,f.pluralResolver=new Q$(c,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),d&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(f.formatter=o(d),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new X$(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new eO(o(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(y){for(var v=arguments.length,w=new Array(v>1?v-1:0),k=1;k<v;k++)w[k-1]=arguments[k];t.emit(y,...w)}),this.modules.languageDetector&&(f.languageDetector=o(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=o(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new ja(this.services,this.options),this.translator.on("*",function(y){for(var v=arguments.length,w=new Array(v>1?v-1:0),k=1;k<v;k++)w[k-1]=arguments[k];t.emit(y,...w)}),this.modules.external.forEach(y=>{y.init&&y.init(this)})}if(this.format=this.options.interpolation.format,r||(r=xo),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=function(){return t.store[d](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=function(){return t.store[d](...arguments),t}});const l=ti(),u=()=>{const d=(c,f)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(f),r(c,f)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),l}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xo;const i=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode")return r();const o=[],a=s=>{if(!s)return;this.services.languageUtils.toResolveHierarchy(s).forEach(u=>{o.indexOf(u)<0&&o.push(u)})};i?a(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>a(l)),this.options.preload&&this.options.preload.forEach(s=>a(s)),this.services.backendConnector.load(o,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(s)})}else r(null)}reloadResources(t,n,r){const i=ti();return t||(t=this.languages),n||(n=this.options.ns),r||(r=xo),this.services.backendConnector.reload(t,n,o=>{i.resolve(),r(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Iv.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const i=ti();this.emit("languageChanging",t);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,u)=>{u?(o(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(l,function(){return r.t(...arguments)})},s=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const u=typeof l=="string"?l:this.services.languageUtils.getBestMatchFromCodes(l);u&&(this.language||o(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,d=>{a(d,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(t),i}getFixedT(t,n,r){var i=this;const o=function(a,s){let l;if(typeof s!="object"){for(var u=arguments.length,d=new Array(u>2?u-2:0),c=2;c<u;c++)d[c-2]=arguments[c];l=i.options.overloadTranslationOptionHandler([a,s].concat(d))}else l={...s};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix=l.keyPrefix||r||o.keyPrefix;const f=i.options.keySeparator||".";let y;return l.keyPrefix&&Array.isArray(a)?y=a.map(v=>`${l.keyPrefix}${f}${v}`):y=l.keyPrefix?`${l.keyPrefix}${f}${a}`:a,i.t(y,l)};return typeof t=="string"?o.lng=t:o.lngs=t,o.ns=n,o.keyPrefix=r,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const u=this.services.backendConnector.state[`${s}|${l}`];return u===-1||u===2};if(n.precheck){const s=n.precheck(this,a);if(s!==void 0)return s}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(r,t)&&(!i||a(o,t)))}loadNamespaces(t,n){const r=ti();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=ti();typeof t=="string"&&(t=[t]);const i=this.options.preload||[],o=t.filter(a=>i.indexOf(a)<0);return o.length?(this.options.preload=i.concat(o),this.loadResources(a=>{r.resolve(),n&&n(a)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new Hp(Wp());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Hi(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xo;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new Hi(i);return(t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(s=>{o[s]=this[s]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},r&&(o.store=new Ap(this.store.data,i),o.services.resourceStore=o.store),o.translator=new ja(o.services,i),o.translator.on("*",function(s){for(var l=arguments.length,u=new Array(l>1?l-1:0),d=1;d<l;d++)u[d-1]=arguments[d];o.emit(s,...u)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Ce=Hi.createInstance();Ce.createInstance=Hi.createInstance;Ce.createInstance;Ce.dir;Ce.init;Ce.loadResources;Ce.reloadResources;Ce.use;Ce.changeLanguage;Ce.getFixedT;Ce.t;Ce.exists;Ce.setDefaultNamespace;Ce.hasLoadedNamespace;Ce.loadNamespaces;Ce.loadLanguages;function Iu(e){"@babel/helpers - typeof";return Iu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Iu(e)}var Mv=[],nO=Mv.forEach,rO=Mv.slice;function Mu(e){return nO.call(rO.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e}function Dv(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Iu(XMLHttpRequest))==="object"}function iO(e){return!!e&&typeof e.then=="function"}function oO(e){return iO(e)?e:Promise.resolve(e)}function aO(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Du={exports:{}},So={exports:{}},Kp;function sO(){return Kp||(Kp=1,function(e,t){var n=typeof self<"u"?self:nn,r=function(){function o(){this.fetch=!1,this.DOMException=n.DOMException}return o.prototype=n,new o}();(function(o){(function(a){var s={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function l($){return $&&DataView.prototype.isPrototypeOf($)}if(s.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function($){return $&&u.indexOf(Object.prototype.toString.call($))>-1};function c($){if(typeof $!="string"&&($=String($)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test($))throw new TypeError("Invalid character in header field name");return $.toLowerCase()}function f($){return typeof $!="string"&&($=String($)),$}function y($){var j={next:function(){var B=$.shift();return{done:B===void 0,value:B}}};return s.iterable&&(j[Symbol.iterator]=function(){return j}),j}function v($){this.map={},$ instanceof v?$.forEach(function(j,B){this.append(B,j)},this):Array.isArray($)?$.forEach(function(j){this.append(j[0],j[1])},this):$&&Object.getOwnPropertyNames($).forEach(function(j){this.append(j,$[j])},this)}v.prototype.append=function($,j){$=c($),j=f(j);var B=this.map[$];this.map[$]=B?B+", "+j:j},v.prototype.delete=function($){delete this.map[c($)]},v.prototype.get=function($){return $=c($),this.has($)?this.map[$]:null},v.prototype.has=function($){return this.map.hasOwnProperty(c($))},v.prototype.set=function($,j){this.map[c($)]=f(j)},v.prototype.forEach=function($,j){for(var B in this.map)this.map.hasOwnProperty(B)&&$.call(j,this.map[B],B,this)},v.prototype.keys=function(){var $=[];return this.forEach(function(j,B){$.push(B)}),y($)},v.prototype.values=function(){var $=[];return this.forEach(function(j){$.push(j)}),y($)},v.prototype.entries=function(){var $=[];return this.forEach(function(j,B){$.push([B,j])}),y($)},s.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function w($){if($.bodyUsed)return Promise.reject(new TypeError("Already read"));$.bodyUsed=!0}function k($){return new Promise(function(j,B){$.onload=function(){j($.result)},$.onerror=function(){B($.error)}})}function g($){var j=new FileReader,B=k(j);return j.readAsArrayBuffer($),B}function p($){var j=new FileReader,B=k(j);return j.readAsText($),B}function m($){for(var j=new Uint8Array($),B=new Array(j.length),W=0;W<j.length;W++)B[W]=String.fromCharCode(j[W]);return B.join("")}function x($){if($.slice)return $.slice(0);var j=new Uint8Array($.byteLength);return j.set(new Uint8Array($)),j.buffer}function b(){return this.bodyUsed=!1,this._initBody=function($){this._bodyInit=$,$?typeof $=="string"?this._bodyText=$:s.blob&&Blob.prototype.isPrototypeOf($)?this._bodyBlob=$:s.formData&&FormData.prototype.isPrototypeOf($)?this._bodyFormData=$:s.searchParams&&URLSearchParams.prototype.isPrototypeOf($)?this._bodyText=$.toString():s.arrayBuffer&&s.blob&&l($)?(this._bodyArrayBuffer=x($.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf($)||d($))?this._bodyArrayBuffer=x($):this._bodyText=$=Object.prototype.toString.call($):this._bodyText="",this.headers.get("content-type")||(typeof $=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s.searchParams&&URLSearchParams.prototype.isPrototypeOf($)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s.blob&&(this.blob=function(){var $=w(this);if($)return $;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?w(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var $=w(this);if($)return $;if(this._bodyBlob)return p(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(m(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s.formData&&(this.formData=function(){return this.text().then(R)}),this.json=function(){return this.text().then(JSON.parse)},this}var C=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function P($){var j=$.toUpperCase();return C.indexOf(j)>-1?j:$}function E($,j){j=j||{};var B=j.body;if($ instanceof E){if($.bodyUsed)throw new TypeError("Already read");this.url=$.url,this.credentials=$.credentials,j.headers||(this.headers=new v($.headers)),this.method=$.method,this.mode=$.mode,this.signal=$.signal,!B&&$._bodyInit!=null&&(B=$._bodyInit,$.bodyUsed=!0)}else this.url=String($);if(this.credentials=j.credentials||this.credentials||"same-origin",(j.headers||!this.headers)&&(this.headers=new v(j.headers)),this.method=P(j.method||this.method||"GET"),this.mode=j.mode||this.mode||null,this.signal=j.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&B)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(B)}E.prototype.clone=function(){return new E(this,{body:this._bodyInit})};function R($){var j=new FormData;return $.trim().split("&").forEach(function(B){if(B){var W=B.split("="),L=W.shift().replace(/\+/g," "),N=W.join("=").replace(/\+/g," ");j.append(decodeURIComponent(L),decodeURIComponent(N))}}),j}function z($){var j=new v,B=$.replace(/\r?\n[\t ]+/g," ");return B.split(/\r?\n/).forEach(function(W){var L=W.split(":"),N=L.shift().trim();if(N){var F=L.join(":").trim();j.append(N,F)}}),j}b.call(E.prototype);function A($,j){j||(j={}),this.type="default",this.status=j.status===void 0?200:j.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in j?j.statusText:"OK",this.headers=new v(j.headers),this.url=j.url||"",this._initBody($)}b.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},A.error=function(){var $=new A(null,{status:0,statusText:""});return $.type="error",$};var H=[301,302,303,307,308];A.redirect=function($,j){if(H.indexOf(j)===-1)throw new RangeError("Invalid status code");return new A(null,{status:j,headers:{location:$}})},a.DOMException=o.DOMException;try{new a.DOMException}catch{a.DOMException=function(j,B){this.message=j,this.name=B;var W=Error(j);this.stack=W.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function D($,j){return new Promise(function(B,W){var L=new E($,j);if(L.signal&&L.signal.aborted)return W(new a.DOMException("Aborted","AbortError"));var N=new XMLHttpRequest;function F(){N.abort()}N.onload=function(){var Q={status:N.status,statusText:N.statusText,headers:z(N.getAllResponseHeaders()||"")};Q.url="responseURL"in N?N.responseURL:Q.headers.get("X-Request-URL");var K="response"in N?N.response:N.responseText;B(new A(K,Q))},N.onerror=function(){W(new TypeError("Network request failed"))},N.ontimeout=function(){W(new TypeError("Network request failed"))},N.onabort=function(){W(new a.DOMException("Aborted","AbortError"))},N.open(L.method,L.url,!0),L.credentials==="include"?N.withCredentials=!0:L.credentials==="omit"&&(N.withCredentials=!1),"responseType"in N&&s.blob&&(N.responseType="blob"),L.headers.forEach(function(Q,K){N.setRequestHeader(K,Q)}),L.signal&&(L.signal.addEventListener("abort",F),N.onreadystatechange=function(){N.readyState===4&&L.signal.removeEventListener("abort",F)}),N.send(typeof L._bodyInit>"u"?null:L._bodyInit)})}return D.polyfill=!0,o.fetch||(o.fetch=D,o.Headers=v,o.Request=E,o.Response=A),a.Headers=v,a.Request=E,a.Response=A,a.fetch=D,Object.defineProperty(a,"__esModule",{value:!0}),a})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=r;t=i.fetch,t.default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t}(So,So.exports)),So.exports}(function(e,t){var n;if(typeof fetch=="function"&&(typeof nn<"u"&&nn.fetch?n=nn.fetch:typeof window<"u"&&window.fetch?n=window.fetch:n=fetch),typeof aO<"u"&&(typeof window>"u"||typeof window.document>"u")){var r=n||sO();r.default&&(r=r.default),t.default=r,e.exports=t.default}})(Du,Du.exports);var Av=Du.exports;const Fv=Fu(Av),Gp=Yp({__proto__:null,default:Fv},[Av]);function La(e){"@babel/helpers - typeof";return La=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},La(e)}var It;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?It=global.fetch:typeof window<"u"&&window.fetch?It=window.fetch:It=fetch);var Bi;Dv()&&(typeof global<"u"&&global.XMLHttpRequest?Bi=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Bi=window.XMLHttpRequest));var Ta;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Ta=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Ta=window.ActiveXObject));!It&&Gp&&!Bi&&!Ta&&(It=Fv||Gp);typeof It!="function"&&(It=void 0);var Au=function(t,n){if(n&&La(n)==="object"){var r="";for(var i in n)r+="&"+encodeURIComponent(i)+"="+encodeURIComponent(n[i]);if(!r)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+r.slice(1)}return t},qp=function(t,n,r){It(t,n).then(function(i){if(!i.ok)return r(i.statusText||"Error",{status:i.status});i.text().then(function(o){r(null,{status:i.status,data:o})}).catch(r)}).catch(r)},Qp=!1,lO=function(t,n,r,i){t.queryStringParams&&(n=Au(n,t.queryStringParams));var o=Mu({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);r&&(o["Content-Type"]="application/json");var a=typeof t.requestOptions=="function"?t.requestOptions(r):t.requestOptions,s=Mu({method:r?"POST":"GET",body:r?t.stringify(r):void 0,headers:o},Qp?{}:a);try{qp(n,s,i)}catch(l){if(!a||Object.keys(a).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(a).forEach(function(u){delete s[u]}),qp(n,s,i),Qp=!0}catch(u){i(u)}}},uO=function(t,n,r,i){r&&La(r)==="object"&&(r=Au("",r).slice(1)),t.queryStringParams&&(n=Au(n,t.queryStringParams));try{var o;Bi?o=new Bi:o=new Ta("MSXML2.XMLHTTP.3.0"),o.open(r?"POST":"GET",n,1),t.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!t.withCredentials,r&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var a=t.customHeaders;if(a=typeof a=="function"?a():a,a)for(var s in a)o.setRequestHeader(s,a[s]);o.onreadystatechange=function(){o.readyState>3&&i(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(r)}catch(l){console&&console.log(l)}},cO=function(t,n,r,i){if(typeof r=="function"&&(i=r,r=void 0),i=i||function(){},It&&n.indexOf("file:")!==0)return lO(t,n,r,i);if(Dv()||typeof ActiveXObject=="function")return uO(t,n,r,i);i(new Error("No fetch and no xhr implementation found!"))};function Ui(e){"@babel/helpers - typeof";return Ui=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ui(e)}function dO(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Hv(r.key),r)}}function fO(e,t,n){return t&&Xp(e.prototype,t),n&&Xp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pO(e,t,n){return t=Hv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hv(e){var t=hO(e,"string");return Ui(t)==="symbol"?t:String(t)}function hO(e,t){if(Ui(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Ui(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var gO=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,r,i){return pO({},r,i||"")},parseLoadPayload:function(n,r){},request:cO,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Bv=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};dO(this,e),this.services=t,this.options=n,this.allOptions=r,this.type="backend",this.init(t,n,r)}return fO(e,[{key:"init",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=n,this.options=Mu(i,this.options||{},gO()),this.allOptions=o,this.services&&this.options.reloadInterval&&setInterval(function(){return r.reload()},this.options.reloadInterval)}},{key:"readMulti",value:function(n,r,i){this._readAny(n,n,r,r,i)}},{key:"read",value:function(n,r,i){this._readAny([n],n,[r],r,i)}},{key:"_readAny",value:function(n,r,i,o,a){var s=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(n,i)),l=oO(l),l.then(function(u){if(!u)return a(null,{});var d=s.services.interpolator.interpolate(u,{lng:n.join("+"),ns:i.join("+")});s.loadUrl(d,a,r,o)})}},{key:"loadUrl",value:function(n,r,i,o){var a=this,s=typeof i=="string"?[i]:i,l=typeof o=="string"?[o]:o,u=this.options.parseLoadPayload(s,l);this.options.request(this.options,n,u,function(d,c){if(c&&(c.status>=500&&c.status<600||!c.status))return r("failed loading "+n+"; status code: "+c.status,!0);if(c&&c.status>=400&&c.status<500)return r("failed loading "+n+"; status code: "+c.status,!1);if(!c&&d&&d.message&&d.message.indexOf("Failed to fetch")>-1)return r("failed loading "+n+": "+d.message,!0);if(d)return r(d,!1);var f,y;try{typeof c.data=="string"?f=a.options.parse(c.data,i,o):f=c.data}catch{y="failed parsing "+n+" to json"}if(y)return r(y,!1);r(null,f)})}},{key:"create",value:function(n,r,i,o,a){var s=this;if(this.options.addPath){typeof n=="string"&&(n=[n]);var l=this.options.parsePayload(r,i,o),u=0,d=[],c=[];n.forEach(function(f){var y=s.options.addPath;typeof s.options.addPath=="function"&&(y=s.options.addPath(f,r));var v=s.services.interpolator.interpolate(y,{lng:f,ns:r});s.options.request(s.options,v,l,function(w,k){u+=1,d.push(w),c.push(k),u===n.length&&typeof a=="function"&&a(d,c)})})}}},{key:"reload",value:function(){var n=this,r=this.services,i=r.backendConnector,o=r.languageUtils,a=r.logger,s=i.language;if(!(s&&s.toLowerCase()==="cimode")){var l=[],u=function(c){var f=o.toResolveHierarchy(c);f.forEach(function(y){l.indexOf(y)<0&&l.push(y)})};u(s),this.allOptions.preload&&this.allOptions.preload.forEach(function(d){return u(d)}),l.forEach(function(d){n.allOptions.ns.forEach(function(c){i.read(d,c,"read",null,null,function(f,y){f&&a.warn("loading namespace ".concat(c," for language ").concat(d," failed"),f),!f&&y&&a.log("loaded namespace ".concat(c," for language ").concat(d),y),i.loaded("".concat(d,"|").concat(c),f,y)})})})}}}]),e}();Bv.type="backend";Ce.use(Bv).use(Sx).init({debug:!0,backend:{loadPath:"/thoth/locales/{{lng}}.json"},interpolation:{escapeValue:!1},fallbackLng:"en",supportedLngs:["en","ru"]});const mO=S.div`
  max-height: ${({$isBurgerMenuOpen:e,$containerHeight:t,$headerHeight:n,$isLanguagesOpen:r})=>(e||r)&&t<window.innerHeight?`calc(${window.innerHeight}px - ${n}px)`:(e||r)&&t>=window.innerHeight?`${t}px`:"auto"};
  overflow: ${({$isBurgerMenuOpen:e,$isLanguagesOpen:t})=>e||t?"clip":"auto"};
`,ul=({children:e,sections:t,isLanguagesOpen:n,isBurgerMenuOpen:r,languagesHandler:i,burgerMenuHandler:o,paymentFeesHeight:a,mainScreenHeight:s})=>{const l=T.useRef(null),[u,d]=T.useState(0),c=vt();return T.useEffect(()=>{document.documentElement.lang=Ce.language},[]),T.useEffect(()=>{const f=()=>{if(l.current){const y=l.current.clientHeight;d(y)}};return f(),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)}},[l,r,n,c]),h.jsxs(Cx,{i18n:Ce,children:[h.jsx(k$,{ref:l,headerHeight:u,isLanguagesOpen:n,isBurgerMenuOpen:r,languagesHandler:i,burgerMenuHandler:o,containerHeight:s||a,paymentFeesHeight:a,sections:t}),h.jsxs(mO,{className:"styled-container",$isBurgerMenuOpen:r,$containerHeight:s||a,$isLanguagesOpen:n,$headerHeight:u,children:[e,h.jsx(N$,{})]})]})},vO=()=>{const e=T.useRef(null),t=T.useRef(null),[n,r]=T.useState(null),[i,o]=T.useState(null),[a,s]=T.useState(0),[l,u]=T.useState(0),{t:d}=Ut(),c=Vn("Sections",d);T.useEffect(()=>{const w=()=>{if(e.current){const k=e.current.clientHeight;s(k)}};return w(),window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w)}},[e,i,n]),T.useEffect(()=>{const w=()=>{if(t.current){const k=t.current.clientHeight;u(k)}};return w(),window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w)}},[t,i,n]);const f=()=>{setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},300)},y=()=>{r(!n),i&&v(),n||f()},v=()=>{o(!i),i||f()};return h.jsxs(a1,{basename:"/thoth/",children:[h.jsx(DC,{}),h.jsxs(i1,{children:[h.jsx(zo,{path:"/",element:h.jsx(ul,{isLanguagesOpen:n,isBurgerMenuOpen:i,languagesHandler:y,burgerMenuHandler:v,paymentFeesHeight:l,mainScreenHeight:a,sections:c,children:h.jsx(hC,{mainScreenRef:e,sections:c})})}),h.jsx(zo,{path:"/payment-fees",element:h.jsx(ul,{isLanguagesOpen:n,isBurgerMenuOpen:i,languagesHandler:y,burgerMenuHandler:v,paymentFeesHeight:l,mainScreenHeight:a,sections:c,children:h.jsx(MC,{ref:t})})}),h.jsx(zo,{path:"*",element:h.jsx(ul,{isLanguagesOpen:n,isBurgerMenuOpen:i,languagesHandler:y,burgerMenuHandler:v,paymentFeesHeight:l,mainScreenHeight:a,sections:c,children:h.jsx(AC,{})})})]})]})};cl.createRoot(document.getElementById("root")).render(h.jsx(T.StrictMode,{children:h.jsx(vO,{})}));
//# sourceMappingURL=main-256588fc.js.map
