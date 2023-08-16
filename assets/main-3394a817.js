function ah(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var rn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Jv(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var sh={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),Zv=Symbol.for("react.portal"),ey=Symbol.for("react.fragment"),ty=Symbol.for("react.strict_mode"),ny=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),iy=Symbol.for("react.context"),oy=Symbol.for("react.forward_ref"),ay=Symbol.for("react.suspense"),sy=Symbol.for("react.memo"),ly=Symbol.for("react.lazy"),hd=Symbol.iterator;function uy(e){return e===null||typeof e!="object"?null:(e=hd&&e[hd]||e["@@iterator"],typeof e=="function"?e:null)}var lh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uh=Object.assign,ch={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=ch,this.updater=n||lh}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dh(){}dh.prototype=Dr.prototype;function Ku(e,t,n){this.props=e,this.context=t,this.refs=ch,this.updater=n||lh}var Gu=Ku.prototype=new dh;Gu.constructor=Ku;uh(Gu,Dr.prototype);Gu.isPureReactComponent=!0;var gd=Array.isArray,fh=Object.prototype.hasOwnProperty,qu={current:null},ph={key:!0,ref:!0,__self:!0,__source:!0};function hh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)fh.call(t,r)&&!ph.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Vi,type:e,key:o,ref:a,props:i,_owner:qu.current}}function cy(e,t){return{$$typeof:Vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vi}function dy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var md=/\/+/g;function vs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dy(""+e.key):t.toString(36)}function bo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Vi:case Zv:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+vs(a,0):r,gd(i)?(n="",e!=null&&(n=e.replace(md,"$&/")+"/"),bo(i,t,n,"",function(u){return u})):i!=null&&(Qu(i)&&(i=cy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(md,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",gd(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+vs(o,s);a+=bo(o,t,n,l,i)}else if(l=uy(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+vs(o,s++),a+=bo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Zi(e,t,n){if(e==null)return e;var r=[],i=0;return bo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function fy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Co={transition:null},py={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Co,ReactCurrentOwner:qu};X.Children={map:Zi,forEach:function(e,t,n){Zi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zi(e,function(){t++}),t},toArray:function(e){return Zi(e,function(t){return t})||[]},only:function(e){if(!Qu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Dr;X.Fragment=ey;X.Profiler=ny;X.PureComponent=Ku;X.StrictMode=ty;X.Suspense=ay;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=uh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=qu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)fh.call(t,l)&&!ph.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Vi,type:e.type,key:i,ref:o,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:iy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ry,_context:e},e.Consumer=e};X.createElement=hh;X.createFactory=function(e){var t=hh.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:oy,render:e}};X.isValidElement=Qu;X.lazy=function(e){return{$$typeof:ly,_payload:{_status:-1,_result:e},_init:fy}};X.memo=function(e,t){return{$$typeof:sy,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Co.transition;Co.transition={};try{e()}finally{Co.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return De.current.useCallback(e,t)};X.useContext=function(e){return De.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return De.current.useDeferredValue(e)};X.useEffect=function(e,t){return De.current.useEffect(e,t)};X.useId=function(){return De.current.useId()};X.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return De.current.useMemo(e,t)};X.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};X.useRef=function(e){return De.current.useRef(e)};X.useState=function(e){return De.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return De.current.useTransition()};X.version="18.2.0";sh.exports=X;var T=sh.exports;const pt=Vu(T),hy=ah({__proto__:null,default:pt},[T]);var gh={exports:{}},Na={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy=T,my=Symbol.for("react.element"),vy=Symbol.for("react.fragment"),yy=Object.prototype.hasOwnProperty,wy=gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xy={key:!0,ref:!0,__self:!0,__source:!0};function mh(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)yy.call(t,r)&&!xy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:my,type:e,key:o,ref:a,props:i,_owner:wy.current}}Na.Fragment=vy;Na.jsx=mh;Na.jsxs=mh;gh.exports=Na;var h=gh.exports,gl={},vh={exports:{}},Je={},yh={exports:{}},wh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,N){var F=L.length;L.push(N);e:for(;0<F;){var Q=F-1>>>1,K=L[Q];if(0<i(K,N))L[Q]=N,L[F]=K,F=Q;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var N=L[0],F=L.pop();if(F!==N){L[0]=F;e:for(var Q=0,K=L.length,Et=K>>>1;Q<Et;){var $e=2*(Q+1)-1,Vt=L[$e],Ge=$e+1,Pt=L[Ge];if(0>i(Vt,F))Ge<K&&0>i(Pt,Vt)?(L[Q]=Pt,L[Ge]=F,Q=Ge):(L[Q]=Vt,L[$e]=F,Q=$e);else if(Ge<K&&0>i(Pt,F))L[Q]=Pt,L[Ge]=F,Q=Ge;else break e}}return N}function i(L,N){var F=L.sortIndex-N.sortIndex;return F!==0?F:L.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,d=null,f=3,y=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=L)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function x(L){if(w=!1,m(L),!v)if(n(l)!==null)v=!0,B(b);else{var N=n(u);N!==null&&W(x,N.startTime-L)}}function b(L,N){v=!1,w&&(w=!1,g(P),P=-1),y=!0;var F=f;try{for(m(N),d=n(l);d!==null&&(!(d.expirationTime>N)||L&&!A());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,f=d.priorityLevel;var K=Q(d.expirationTime<=N);N=e.unstable_now(),typeof K=="function"?d.callback=K:d===n(l)&&r(l),m(N)}else r(l);d=n(l)}if(d!==null)var Et=!0;else{var $e=n(u);$e!==null&&W(x,$e.startTime-N),Et=!1}return Et}finally{d=null,f=F,y=!1}}var C=!1,E=null,P=-1,R=5,z=-1;function A(){return!(e.unstable_now()-z<R)}function H(){if(E!==null){var L=e.unstable_now();z=L;var N=!0;try{N=E(!0,L)}finally{N?D():(C=!1,E=null)}}else C=!1}var D;if(typeof p=="function")D=function(){p(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,j=$.port2;$.port1.onmessage=H,D=function(){j.postMessage(null)}}else D=function(){k(H,0)};function B(L){E=L,C||(C=!0,D())}function W(L,N){P=k(function(){L(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,B(b))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var F=f;f=N;try{return L()}finally{f=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,N){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var F=f;f=L;try{return N()}finally{f=F}},e.unstable_scheduleCallback=function(L,N,F){var Q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Q+F:Q):F=Q,L){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=F+K,L={id:c++,callback:N,priorityLevel:L,startTime:F,expirationTime:K,sortIndex:-1},F>Q?(L.sortIndex=F,t(u,L),n(l)===null&&L===n(u)&&(w?(g(P),P=-1):w=!0,W(x,F-Q))):(L.sortIndex=K,t(l,L),v||y||(v=!0,B(b))),L},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(L){var N=f;return function(){var F=f;f=N;try{return L.apply(this,arguments)}finally{f=F}}}})(wh);yh.exports=wh;var Sy=yh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh=T,Ye=Sy;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sh=new Set,xi={};function Un(e,t){Sr(e,t),Sr(e+"Capture",t)}function Sr(e,t){for(xi[e]=t,e=0;e<t.length;e++)Sh.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,ky=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vd={},yd={};function by(e){return ml.call(yd,e)?!0:ml.call(vd,e)?!1:ky.test(e)?yd[e]=!0:(vd[e]=!0,!1)}function Cy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $y(e,t,n,r){if(t===null||typeof t>"u"||Cy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xu=/[\-:]([a-z])/g;function Yu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xu,Yu);je[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xu,Yu);je[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xu,Yu);je[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ju(e,t,n,r){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($y(t,n,i,r)&&(n=null),r||i===null?by(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Zu=Symbol.for("react.strict_mode"),vl=Symbol.for("react.profiler"),kh=Symbol.for("react.provider"),bh=Symbol.for("react.context"),ec=Symbol.for("react.forward_ref"),yl=Symbol.for("react.suspense"),wl=Symbol.for("react.suspense_list"),tc=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),Ch=Symbol.for("react.offscreen"),wd=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=wd&&e[wd]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,ys;function ri(e){if(ys===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ys=t&&t[1]||""}return`
`+ys+e}var ws=!1;function xs(e,t){if(!e||ws)return"";ws=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{ws=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ri(e):""}function Oy(e){switch(e.tag){case 5:return ri(e.type);case 16:return ri("Lazy");case 13:return ri("Suspense");case 19:return ri("SuspenseList");case 0:case 2:case 15:return e=xs(e.type,!1),e;case 11:return e=xs(e.type.render,!1),e;case 1:return e=xs(e.type,!0),e;default:return""}}function xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Yn:return"Portal";case vl:return"Profiler";case Zu:return"StrictMode";case yl:return"Suspense";case wl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bh:return(e.displayName||"Context")+".Consumer";case kh:return(e._context.displayName||"Context")+".Provider";case ec:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tc:return t=e.displayName||null,t!==null?t:xl(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return xl(e(t))}catch{}}return null}function Ey(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xl(t);case 8:return t===Zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $h(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Py(e){var t=$h(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function to(e){e._valueTracker||(e._valueTracker=Py(e))}function Oh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$h(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sl(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Eh(e,t){t=t.checked,t!=null&&Ju(e,"checked",t,!1)}function kl(e,t){Eh(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||Fo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ii=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(ii(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function Ph(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var no,Lh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=no.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jy=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(e){jy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),li[t]=li[e]})});function Th(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||li.hasOwnProperty(e)&&li[e]?(""+t).trim():t+"px"}function _h(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Th(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ly=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ol(e,t){if(t){if(Ly[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function El(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pl=null;function nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jl=null,gr=null,mr=null;function Cd(e){if(e=qi(e)){if(typeof jl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Fa(t),jl(e.stateNode,e.type,t))}}function Rh(e){gr?mr?mr.push(e):mr=[e]:gr=e}function zh(){if(gr){var e=gr,t=mr;if(mr=gr=null,Cd(e),t)for(e=0;e<t.length;e++)Cd(t[e])}}function Nh(e,t){return e(t)}function Ih(){}var Ss=!1;function Mh(e,t,n){if(Ss)return e(t,n);Ss=!0;try{return Nh(e,t,n)}finally{Ss=!1,(gr!==null||mr!==null)&&(Ih(),zh())}}function ki(e,t){var n=e.stateNode;if(n===null)return null;var r=Fa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Ll=!1;if(Dt)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Ll=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Ll=!1}function Ty(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ui=!1,Ho=null,Bo=!1,Tl=null,_y={onError:function(e){ui=!0,Ho=e}};function Ry(e,t,n,r,i,o,a,s,l){ui=!1,Ho=null,Ty.apply(_y,arguments)}function zy(e,t,n,r,i,o,a,s,l){if(Ry.apply(this,arguments),ui){if(ui){var u=Ho;ui=!1,Ho=null}else throw Error(_(198));Bo||(Bo=!0,Tl=u)}}function Wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $d(e){if(Wn(e)!==e)throw Error(_(188))}function Ny(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $d(i),e;if(o===r)return $d(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Ah(e){return e=Ny(e),e!==null?Fh(e):null}function Fh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fh(e);if(t!==null)return t;e=e.sibling}return null}var Hh=Ye.unstable_scheduleCallback,Od=Ye.unstable_cancelCallback,Iy=Ye.unstable_shouldYield,My=Ye.unstable_requestPaint,he=Ye.unstable_now,Dy=Ye.unstable_getCurrentPriorityLevel,rc=Ye.unstable_ImmediatePriority,Bh=Ye.unstable_UserBlockingPriority,Uo=Ye.unstable_NormalPriority,Ay=Ye.unstable_LowPriority,Uh=Ye.unstable_IdlePriority,Ia=null,$t=null;function Fy(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Ia,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Uy,Hy=Math.log,By=Math.LN2;function Uy(e){return e>>>=0,e===0?32:31-(Hy(e)/By|0)|0}var ro=64,io=4194304;function oi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=oi(s):(o&=a,o!==0&&(r=oi(o)))}else a=n&~i,a!==0?r=oi(a):o!==0&&(r=oi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),i=1<<n,r|=e[n],t&=~i;return r}function Wy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-ht(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Wy(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wh(){var e=ro;return ro<<=1,!(ro&4194240)&&(ro=64),e}function ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ki(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function Ky(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ht(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ic(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function Vh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kh,oc,Gh,qh,Qh,Rl=!1,oo=[],ln=null,un=null,cn=null,bi=new Map,Ci=new Map,tn=[],Gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ed(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ci.delete(t.pointerId)}}function qr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=qi(t),t!==null&&oc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qy(e,t,n,r,i){switch(t){case"focusin":return ln=qr(ln,e,t,n,r,i),!0;case"dragenter":return un=qr(un,e,t,n,r,i),!0;case"mouseover":return cn=qr(cn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return bi.set(o,qr(bi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ci.set(o,qr(Ci.get(o)||null,e,t,n,r,i)),!0}return!1}function Xh(e){var t=Pn(e.target);if(t!==null){var n=Wn(t);if(n!==null){if(t=n.tag,t===13){if(t=Dh(n),t!==null){e.blockedOn=t,Qh(e.priority,function(){Gh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pl=r,n.target.dispatchEvent(r),Pl=null}else return t=qi(n),t!==null&&oc(t),e.blockedOn=n,!1;t.shift()}return!0}function Pd(e,t,n){$o(e)&&n.delete(t)}function Qy(){Rl=!1,ln!==null&&$o(ln)&&(ln=null),un!==null&&$o(un)&&(un=null),cn!==null&&$o(cn)&&(cn=null),bi.forEach(Pd),Ci.forEach(Pd)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,Rl||(Rl=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Qy)))}function $i(e){function t(i){return Qr(i,e)}if(0<oo.length){Qr(oo[0],e);for(var n=1;n<oo.length;n++){var r=oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&Qr(ln,e),un!==null&&Qr(un,e),cn!==null&&Qr(cn,e),bi.forEach(t),Ci.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)Xh(n),n.blockedOn===null&&tn.shift()}var vr=Bt.ReactCurrentBatchConfig,Vo=!0;function Xy(e,t,n,r){var i=ee,o=vr.transition;vr.transition=null;try{ee=1,ac(e,t,n,r)}finally{ee=i,vr.transition=o}}function Yy(e,t,n,r){var i=ee,o=vr.transition;vr.transition=null;try{ee=4,ac(e,t,n,r)}finally{ee=i,vr.transition=o}}function ac(e,t,n,r){if(Vo){var i=zl(e,t,n,r);if(i===null)_s(e,t,r,Ko,n),Ed(e,r);else if(qy(i,e,t,n,r))r.stopPropagation();else if(Ed(e,r),t&4&&-1<Gy.indexOf(e)){for(;i!==null;){var o=qi(i);if(o!==null&&Kh(o),o=zl(e,t,n,r),o===null&&_s(e,t,r,Ko,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else _s(e,t,r,null,n)}}var Ko=null;function zl(e,t,n,r){if(Ko=null,e=nc(r),e=Pn(e),e!==null)if(t=Wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ko=e,null}function Yh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dy()){case rc:return 1;case Bh:return 4;case Uo:case Ay:return 16;case Uh:return 536870912;default:return 16}default:return 16}}var on=null,sc=null,Oo=null;function Jh(){if(Oo)return Oo;var e,t=sc,n=t.length,r,i="value"in on?on.value:on.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Oo=i.slice(e,1<r?1-r:void 0)}function Eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function jd(){return!1}function Ze(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ao:jd,this.isPropagationStopped=jd,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=Ze(Ar),Gi=de({},Ar,{view:0,detail:0}),Jy=Ze(Gi),bs,Cs,Xr,Ma=de({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(bs=e.screenX-Xr.screenX,Cs=e.screenY-Xr.screenY):Cs=bs=0,Xr=e),bs)},movementY:function(e){return"movementY"in e?e.movementY:Cs}}),Ld=Ze(Ma),Zy=de({},Ma,{dataTransfer:0}),e0=Ze(Zy),t0=de({},Gi,{relatedTarget:0}),$s=Ze(t0),n0=de({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),r0=Ze(n0),i0=de({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),o0=Ze(i0),a0=de({},Ar,{data:0}),Td=Ze(a0),s0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u0[e])?!!t[e]:!1}function uc(){return c0}var d0=de({},Gi,{key:function(e){if(e.key){var t=s0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(e){return e.type==="keypress"?Eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f0=Ze(d0),p0=de({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=Ze(p0),h0=de({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),g0=Ze(h0),m0=de({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),v0=Ze(m0),y0=de({},Ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=Ze(y0),x0=[9,13,27,32],cc=Dt&&"CompositionEvent"in window,ci=null;Dt&&"documentMode"in document&&(ci=document.documentMode);var S0=Dt&&"TextEvent"in window&&!ci,Zh=Dt&&(!cc||ci&&8<ci&&11>=ci),Rd=String.fromCharCode(32),zd=!1;function eg(e,t){switch(e){case"keyup":return x0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function k0(e,t){switch(e){case"compositionend":return tg(t);case"keypress":return t.which!==32?null:(zd=!0,Rd);case"textInput":return e=t.data,e===Rd&&zd?null:e;default:return null}}function b0(e,t){if(Zn)return e==="compositionend"||!cc&&eg(e,t)?(e=Jh(),Oo=sc=on=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zh&&t.locale!=="ko"?null:t.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!C0[e.type]:t==="textarea"}function ng(e,t,n,r){Rh(r),t=Go(t,"onChange"),0<t.length&&(n=new lc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var di=null,Oi=null;function $0(e){pg(e,0)}function Da(e){var t=nr(e);if(Oh(t))return e}function O0(e,t){if(e==="change")return t}var rg=!1;if(Dt){var Os;if(Dt){var Es="oninput"in document;if(!Es){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),Es=typeof Id.oninput=="function"}Os=Es}else Os=!1;rg=Os&&(!document.documentMode||9<document.documentMode)}function Md(){di&&(di.detachEvent("onpropertychange",ig),Oi=di=null)}function ig(e){if(e.propertyName==="value"&&Da(Oi)){var t=[];ng(t,Oi,e,nc(e)),Mh($0,t)}}function E0(e,t,n){e==="focusin"?(Md(),di=t,Oi=n,di.attachEvent("onpropertychange",ig)):e==="focusout"&&Md()}function P0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Da(Oi)}function j0(e,t){if(e==="click")return Da(t)}function L0(e,t){if(e==="input"||e==="change")return Da(t)}function T0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:T0;function Ei(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ml.call(t,i)||!vt(e[i],t[i]))return!1}return!0}function Dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ad(e,t){var n=Dd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dd(n)}}function og(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?og(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ag(){for(var e=window,t=Fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fo(e.document)}return t}function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _0(e){var t=ag(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&og(n.ownerDocument.documentElement,n)){if(r!==null&&dc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ad(n,o);var a=Ad(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var R0=Dt&&"documentMode"in document&&11>=document.documentMode,er=null,Nl=null,fi=null,Il=!1;function Fd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Il||er==null||er!==Fo(r)||(r=er,"selectionStart"in r&&dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fi&&Ei(fi,r)||(fi=r,r=Go(Nl,"onSelect"),0<r.length&&(t=new lc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Ps={},sg={};Dt&&(sg=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Aa(e){if(Ps[e])return Ps[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sg)return Ps[e]=t[n];return e}var lg=Aa("animationend"),ug=Aa("animationiteration"),cg=Aa("animationstart"),dg=Aa("transitionend"),fg=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){fg.set(e,t),Un(t,[e])}for(var js=0;js<Hd.length;js++){var Ls=Hd[js],z0=Ls.toLowerCase(),N0=Ls[0].toUpperCase()+Ls.slice(1);wn(z0,"on"+N0)}wn(lg,"onAnimationEnd");wn(ug,"onAnimationIteration");wn(cg,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(dg,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));function Bd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zy(r,t,void 0,e),e.currentTarget=null}function pg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Bd(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Bd(i,s,u),o=l}}}if(Bo)throw e=Tl,Bo=!1,Tl=null,e}function re(e,t){var n=t[Hl];n===void 0&&(n=t[Hl]=new Set);var r=e+"__bubble";n.has(r)||(hg(t,e,2,!1),n.add(r))}function Ts(e,t,n){var r=0;t&&(r|=4),hg(n,e,r,t)}var lo="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[lo]){e[lo]=!0,Sh.forEach(function(n){n!=="selectionchange"&&(I0.has(n)||Ts(n,!1,e),Ts(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lo]||(t[lo]=!0,Ts("selectionchange",!1,t))}}function hg(e,t,n,r){switch(Yh(t)){case 1:var i=Xy;break;case 4:i=Yy;break;default:i=ac}n=i.bind(null,t,n,e),i=void 0,!Ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _s(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Pn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Mh(function(){var u=o,c=nc(n),d=[];e:{var f=fg.get(e);if(f!==void 0){var y=lc,v=e;switch(e){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":y=f0;break;case"focusin":v="focus",y=$s;break;case"focusout":v="blur",y=$s;break;case"beforeblur":case"afterblur":y=$s;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=e0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=g0;break;case lg:case ug:case cg:y=r0;break;case dg:y=v0;break;case"scroll":y=Jy;break;case"wheel":y=w0;break;case"copy":case"cut":case"paste":y=o0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=_d}var w=(t&4)!==0,k=!w&&e==="scroll",g=w?f!==null?f+"Capture":null:f;w=[];for(var p=u,m;p!==null;){m=p;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,g!==null&&(x=ki(p,g),x!=null&&w.push(ji(p,x,m)))),k)break;p=p.return}0<w.length&&(f=new y(f,v,null,n,c),d.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==Pl&&(v=n.relatedTarget||n.fromElement)&&(Pn(v)||v[At]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Pn(v):null,v!==null&&(k=Wn(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Ld,x="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=_d,x="onPointerLeave",g="onPointerEnter",p="pointer"),k=y==null?f:nr(y),m=v==null?f:nr(v),f=new w(x,p+"leave",y,n,c),f.target=k,f.relatedTarget=m,x=null,Pn(c)===u&&(w=new w(g,p+"enter",v,n,c),w.target=m,w.relatedTarget=k,x=w),k=x,y&&v)t:{for(w=y,g=v,p=0,m=w;m;m=Gn(m))p++;for(m=0,x=g;x;x=Gn(x))m++;for(;0<p-m;)w=Gn(w),p--;for(;0<m-p;)g=Gn(g),m--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=Gn(w),g=Gn(g)}w=null}else w=null;y!==null&&Ud(d,f,y,w,!1),v!==null&&k!==null&&Ud(d,k,v,w,!0)}}e:{if(f=u?nr(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var b=O0;else if(Nd(f))if(rg)b=L0;else{b=P0;var C=E0}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=j0);if(b&&(b=b(e,u))){ng(d,b,n,c);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&bl(f,"number",f.value)}switch(C=u?nr(u):window,e){case"focusin":(Nd(C)||C.contentEditable==="true")&&(er=C,Nl=u,fi=null);break;case"focusout":fi=Nl=er=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,Fd(d,n,c);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":Fd(d,n,c)}var E;if(cc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Zn?eg(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Zh&&n.locale!=="ko"&&(Zn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Zn&&(E=Jh()):(on=c,sc="value"in on?on.value:on.textContent,Zn=!0)),C=Go(u,P),0<C.length&&(P=new Td(P,e,null,n,c),d.push({event:P,listeners:C}),E?P.data=E:(E=tg(n),E!==null&&(P.data=E)))),(E=S0?k0(e,n):b0(e,n))&&(u=Go(u,"onBeforeInput"),0<u.length&&(c=new Td("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}pg(d,t)})}function ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ki(e,n),o!=null&&r.unshift(ji(e,o,i)),o=ki(e,t),o!=null&&r.push(ji(e,o,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ud(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=ki(n,o),l!=null&&a.unshift(ji(n,l,s))):i||(l=ki(n,o),l!=null&&a.push(ji(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var M0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function Wd(e){return(typeof e=="string"?e:""+e).replace(M0,`
`).replace(D0,"")}function uo(e,t,n){if(t=Wd(t),Wd(e)!==t&&n)throw Error(_(425))}function qo(){}var Ml=null,Dl=null;function Al(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fl=typeof setTimeout=="function"?setTimeout:void 0,A0=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,F0=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(e){return Vd.resolve(null).then(e).catch(H0)}:Fl;function H0(e){setTimeout(function(){throw e})}function Rs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$i(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$i(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),bt="__reactFiber$"+Fr,Li="__reactProps$"+Fr,At="__reactContainer$"+Fr,Hl="__reactEvents$"+Fr,B0="__reactListeners$"+Fr,U0="__reactHandles$"+Fr;function Pn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kd(e);e!==null;){if(n=e[bt])return n;e=Kd(e)}return t}e=n,n=e.parentNode}return null}function qi(e){return e=e[bt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Fa(e){return e[Li]||null}var Bl=[],rr=-1;function xn(e){return{current:e}}function oe(e){0>rr||(e.current=Bl[rr],Bl[rr]=null,rr--)}function ne(e,t){rr++,Bl[rr]=e.current,e.current=t}var yn={},ze=xn(yn),We=xn(!1),Dn=yn;function kr(e,t){var n=e.type.contextTypes;if(!n)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(e){return e=e.childContextTypes,e!=null}function Qo(){oe(We),oe(ze)}function Gd(e,t,n){if(ze.current!==yn)throw Error(_(168));ne(ze,t),ne(We,n)}function gg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,Ey(e)||"Unknown",i));return de({},n,r)}function Xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Dn=ze.current,ne(ze,e),ne(We,We.current),!0}function qd(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=gg(e,t,Dn),r.__reactInternalMemoizedMergedChildContext=e,oe(We),oe(ze),ne(ze,e)):oe(We),ne(We,n)}var _t=null,Ha=!1,zs=!1;function mg(e){_t===null?_t=[e]:_t.push(e)}function W0(e){Ha=!0,mg(e)}function Sn(){if(!zs&&_t!==null){zs=!0;var e=0,t=ee;try{var n=_t;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Ha=!1}catch(i){throw _t!==null&&(_t=_t.slice(e+1)),Hh(rc,Sn),i}finally{ee=t,zs=!1}}return null}var ir=[],or=0,Yo=null,Jo=0,tt=[],nt=0,An=null,Rt=1,zt="";function $n(e,t){ir[or++]=Jo,ir[or++]=Yo,Yo=e,Jo=t}function vg(e,t,n){tt[nt++]=Rt,tt[nt++]=zt,tt[nt++]=An,An=e;var r=Rt;e=zt;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var o=32-ht(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Rt=1<<32-ht(t)+i|n<<i|r,zt=o+e}else Rt=1<<o|n<<i|r,zt=e}function fc(e){e.return!==null&&($n(e,1),vg(e,1,0))}function pc(e){for(;e===Yo;)Yo=ir[--or],ir[or]=null,Jo=ir[--or],ir[or]=null;for(;e===An;)An=tt[--nt],tt[nt]=null,zt=tt[--nt],tt[nt]=null,Rt=tt[--nt],tt[nt]=null}var Xe=null,Qe=null,se=!1,ft=null;function yg(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Qe=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:Rt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Qe=null,!0):!1;default:return!1}}function Ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(se){var t=Qe;if(t){var n=t;if(!Qd(e,t)){if(Ul(e))throw Error(_(418));t=dn(n.nextSibling);var r=Xe;t&&Qd(e,t)?yg(r,n):(e.flags=e.flags&-4097|2,se=!1,Xe=e)}}else{if(Ul(e))throw Error(_(418));e.flags=e.flags&-4097|2,se=!1,Xe=e}}}function Xd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function co(e){if(e!==Xe)return!1;if(!se)return Xd(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Al(e.type,e.memoizedProps)),t&&(t=Qe)){if(Ul(e))throw wg(),Error(_(418));for(;t;)yg(e,t),t=dn(t.nextSibling)}if(Xd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Xe?dn(e.stateNode.nextSibling):null;return!0}function wg(){for(var e=Qe;e;)e=dn(e.nextSibling)}function br(){Qe=Xe=null,se=!1}function hc(e){ft===null?ft=[e]:ft.push(e)}var V0=Bt.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Zo=xn(null),ea=null,ar=null,gc=null;function mc(){gc=ar=ea=null}function vc(e){var t=Zo.current;oe(Zo),e._currentValue=t}function Vl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yr(e,t){ea=e,gc=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ue=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(gc!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(ea===null)throw Error(_(308));ar=e,ea.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var jn=null;function yc(e){jn===null?jn=[e]:jn.push(e)}function xg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ft(e,n)}return i=r.interleaved,i===null?(t.next=t,yc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ft(e,n)}function Po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ic(e,n)}}function Yd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ta(e,t,n,r){var i=e.updateQueue;Zt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,c=u=l=null,s=o;do{var f=s.lane,y=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(f=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(y,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(y,d,f):v,f==null)break e;d=de({},d,f);break e;case 2:Zt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else y={eventTime:y,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Hn|=a,e.lanes=a,e.memoizedState=d}}function Jd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var kg=new xh.Component().refs;function Kl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ba={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=hn(e),o=Nt(r,i);o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(gt(t,e,i,r),Po(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=hn(e),o=Nt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(gt(t,e,i,r),Po(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=hn(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=fn(e,i,r),t!==null&&(gt(t,e,r,n),Po(t,e,r))}};function Zd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,r)||!Ei(i,o):!0}function bg(e,t,n){var r=!1,i=yn,o=t.contextType;return typeof o=="object"&&o!==null?o=ot(o):(i=Ve(t)?Dn:ze.current,r=t.contextTypes,o=(r=r!=null)?kr(e,i):yn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ba,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ef(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ba.enqueueReplaceState(t,t.state,null)}function Gl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=kg,wc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ot(o):(o=Ve(t)?Dn:ze.current,i.context=kr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Kl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ba.enqueueReplaceState(i,i.state,null),ta(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===kg&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function fo(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tf(e){var t=e._init;return t(e._payload)}function Cg(e){function t(g,p){if(e){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=gn(g,p),g.index=0,g.sibling=null,g}function o(g,p,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,m,x){return p===null||p.tag!==6?(p=Hs(m,g.mode,x),p.return=g,p):(p=i(p,m),p.return=g,p)}function l(g,p,m,x){var b=m.type;return b===Jn?c(g,p,m.props.children,x,m.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Jt&&tf(b)===p.type)?(x=i(p,m.props),x.ref=Yr(g,p,m),x.return=g,x):(x=zo(m.type,m.key,m.props,null,g.mode,x),x.ref=Yr(g,p,m),x.return=g,x)}function u(g,p,m,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Bs(m,g.mode,x),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function c(g,p,m,x,b){return p===null||p.tag!==7?(p=zn(m,g.mode,x,b),p.return=g,p):(p=i(p,m),p.return=g,p)}function d(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Hs(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case eo:return m=zo(p.type,p.key,p.props,null,g.mode,m),m.ref=Yr(g,null,p),m.return=g,m;case Yn:return p=Bs(p,g.mode,m),p.return=g,p;case Jt:var x=p._init;return d(g,x(p._payload),m)}if(ii(p)||Kr(p))return p=zn(p,g.mode,m,null),p.return=g,p;fo(g,p)}return null}function f(g,p,m,x){var b=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:s(g,p,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case eo:return m.key===b?l(g,p,m,x):null;case Yn:return m.key===b?u(g,p,m,x):null;case Jt:return b=m._init,f(g,p,b(m._payload),x)}if(ii(m)||Kr(m))return b!==null?null:c(g,p,m,x,null);fo(g,m)}return null}function y(g,p,m,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(m)||null,s(p,g,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case eo:return g=g.get(x.key===null?m:x.key)||null,l(p,g,x,b);case Yn:return g=g.get(x.key===null?m:x.key)||null,u(p,g,x,b);case Jt:var C=x._init;return y(g,p,m,C(x._payload),b)}if(ii(x)||Kr(x))return g=g.get(m)||null,c(p,g,x,b,null);fo(p,x)}return null}function v(g,p,m,x){for(var b=null,C=null,E=p,P=p=0,R=null;E!==null&&P<m.length;P++){E.index>P?(R=E,E=null):R=E.sibling;var z=f(g,E,m[P],x);if(z===null){E===null&&(E=R);break}e&&E&&z.alternate===null&&t(g,E),p=o(z,p,P),C===null?b=z:C.sibling=z,C=z,E=R}if(P===m.length)return n(g,E),se&&$n(g,P),b;if(E===null){for(;P<m.length;P++)E=d(g,m[P],x),E!==null&&(p=o(E,p,P),C===null?b=E:C.sibling=E,C=E);return se&&$n(g,P),b}for(E=r(g,E);P<m.length;P++)R=y(E,g,P,m[P],x),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?P:R.key),p=o(R,p,P),C===null?b=R:C.sibling=R,C=R);return e&&E.forEach(function(A){return t(g,A)}),se&&$n(g,P),b}function w(g,p,m,x){var b=Kr(m);if(typeof b!="function")throw Error(_(150));if(m=b.call(m),m==null)throw Error(_(151));for(var C=b=null,E=p,P=p=0,R=null,z=m.next();E!==null&&!z.done;P++,z=m.next()){E.index>P?(R=E,E=null):R=E.sibling;var A=f(g,E,z.value,x);if(A===null){E===null&&(E=R);break}e&&E&&A.alternate===null&&t(g,E),p=o(A,p,P),C===null?b=A:C.sibling=A,C=A,E=R}if(z.done)return n(g,E),se&&$n(g,P),b;if(E===null){for(;!z.done;P++,z=m.next())z=d(g,z.value,x),z!==null&&(p=o(z,p,P),C===null?b=z:C.sibling=z,C=z);return se&&$n(g,P),b}for(E=r(g,E);!z.done;P++,z=m.next())z=y(E,g,P,z.value,x),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?P:z.key),p=o(z,p,P),C===null?b=z:C.sibling=z,C=z);return e&&E.forEach(function(H){return t(g,H)}),se&&$n(g,P),b}function k(g,p,m,x){if(typeof m=="object"&&m!==null&&m.type===Jn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case eo:e:{for(var b=m.key,C=p;C!==null;){if(C.key===b){if(b=m.type,b===Jn){if(C.tag===7){n(g,C.sibling),p=i(C,m.props.children),p.return=g,g=p;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Jt&&tf(b)===C.type){n(g,C.sibling),p=i(C,m.props),p.ref=Yr(g,C,m),p.return=g,g=p;break e}n(g,C);break}else t(g,C);C=C.sibling}m.type===Jn?(p=zn(m.props.children,g.mode,x,m.key),p.return=g,g=p):(x=zo(m.type,m.key,m.props,null,g.mode,x),x.ref=Yr(g,p,m),x.return=g,g=x)}return a(g);case Yn:e:{for(C=m.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Bs(m,g.mode,x),p.return=g,g=p}return a(g);case Jt:return C=m._init,k(g,p,C(m._payload),x)}if(ii(m))return v(g,p,m,x);if(Kr(m))return w(g,p,m,x);fo(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=Hs(m,g.mode,x),p.return=g,g=p),a(g)):n(g,p)}return k}var Cr=Cg(!0),$g=Cg(!1),Qi={},Ot=xn(Qi),Ti=xn(Qi),_i=xn(Qi);function Ln(e){if(e===Qi)throw Error(_(174));return e}function xc(e,t){switch(ne(_i,t),ne(Ti,e),ne(Ot,Qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$l(t,e)}oe(Ot),ne(Ot,t)}function $r(){oe(Ot),oe(Ti),oe(_i)}function Og(e){Ln(_i.current);var t=Ln(Ot.current),n=$l(t,e.type);t!==n&&(ne(Ti,e),ne(Ot,n))}function Sc(e){Ti.current===e&&(oe(Ot),oe(Ti))}var ue=xn(0);function na(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ns=[];function kc(){for(var e=0;e<Ns.length;e++)Ns[e]._workInProgressVersionPrimary=null;Ns.length=0}var jo=Bt.ReactCurrentDispatcher,Is=Bt.ReactCurrentBatchConfig,Fn=0,ce=null,ye=null,Se=null,ra=!1,pi=!1,Ri=0,K0=0;function Le(){throw Error(_(321))}function bc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Cc(e,t,n,r,i,o){if(Fn=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jo.current=e===null||e.memoizedState===null?X0:Y0,e=n(r,i),pi){o=0;do{if(pi=!1,Ri=0,25<=o)throw Error(_(301));o+=1,Se=ye=null,t.updateQueue=null,jo.current=J0,e=n(r,i)}while(pi)}if(jo.current=ia,t=ye!==null&&ye.next!==null,Fn=0,Se=ye=ce=null,ra=!1,t)throw Error(_(300));return e}function $c(){var e=Ri!==0;return Ri=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ce.memoizedState=Se=e:Se=Se.next=e,Se}function at(){if(ye===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Se===null?ce.memoizedState:Se.next;if(t!==null)Se=t,ye=e;else{if(e===null)throw Error(_(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Se===null?ce.memoizedState=Se=e:Se=Se.next=e}return Se}function zi(e,t){return typeof t=="function"?t(e):t}function Ms(e){var t=at(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ye,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((Fn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,ce.lanes|=c,Hn|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,vt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,Hn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ds(e){var t=at(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);vt(o,t.memoizedState)||(Ue=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Eg(){}function Pg(e,t){var n=ce,r=at(),i=t(),o=!vt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ue=!0),r=r.queue,Oc(Tg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Ni(9,Lg.bind(null,n,r,i,t),void 0,null),be===null)throw Error(_(349));Fn&30||jg(n,t,i)}return i}function jg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lg(e,t,n,r){t.value=n,t.getSnapshot=r,_g(t)&&Rg(e)}function Tg(e,t,n){return n(function(){_g(t)&&Rg(e)})}function _g(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Rg(e){var t=Ft(e,1);t!==null&&gt(t,e,1,-1)}function nf(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},t.queue=e,e=e.dispatch=Q0.bind(null,ce,e),[t.memoizedState,e]}function Ni(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zg(){return at().memoizedState}function Lo(e,t,n,r){var i=St();ce.flags|=e,i.memoizedState=Ni(1|t,n,void 0,r===void 0?null:r)}function Ua(e,t,n,r){var i=at();r=r===void 0?null:r;var o=void 0;if(ye!==null){var a=ye.memoizedState;if(o=a.destroy,r!==null&&bc(r,a.deps)){i.memoizedState=Ni(t,n,o,r);return}}ce.flags|=e,i.memoizedState=Ni(1|t,n,o,r)}function rf(e,t){return Lo(8390656,8,e,t)}function Oc(e,t){return Ua(2048,8,e,t)}function Ng(e,t){return Ua(4,2,e,t)}function Ig(e,t){return Ua(4,4,e,t)}function Mg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dg(e,t,n){return n=n!=null?n.concat([e]):null,Ua(4,4,Mg.bind(null,t,e),n)}function Ec(){}function Ag(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fg(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hg(e,t,n){return Fn&21?(vt(n,t)||(n=Wh(),ce.lanes|=n,Hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n)}function G0(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Is.transition;Is.transition={};try{e(!1),t()}finally{ee=n,Is.transition=r}}function Bg(){return at().memoizedState}function q0(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ug(e))Wg(t,n);else if(n=xg(e,t,n,r),n!==null){var i=Me();gt(n,e,r,i),Vg(n,t,r)}}function Q0(e,t,n){var r=hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ug(e))Wg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,vt(s,a)){var l=t.interleaved;l===null?(i.next=i,yc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=xg(e,t,i,r),n!==null&&(i=Me(),gt(n,e,r,i),Vg(n,t,r))}}function Ug(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Wg(e,t){pi=ra=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ic(e,n)}}var ia={readContext:ot,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},X0={readContext:ot,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:rf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lo(4194308,4,Mg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=q0.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:nf,useDebugValue:Ec,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=nf(!1),t=e[0];return e=G0.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=St();if(se){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),be===null)throw Error(_(349));Fn&30||jg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,rf(Tg.bind(null,r,o,e),[e]),r.flags|=2048,Ni(9,Lg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=St(),t=be.identifierPrefix;if(se){var n=zt,r=Rt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ri++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=K0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Y0={readContext:ot,useCallback:Ag,useContext:ot,useEffect:Oc,useImperativeHandle:Dg,useInsertionEffect:Ng,useLayoutEffect:Ig,useMemo:Fg,useReducer:Ms,useRef:zg,useState:function(){return Ms(zi)},useDebugValue:Ec,useDeferredValue:function(e){var t=at();return Hg(t,ye.memoizedState,e)},useTransition:function(){var e=Ms(zi)[0],t=at().memoizedState;return[e,t]},useMutableSource:Eg,useSyncExternalStore:Pg,useId:Bg,unstable_isNewReconciler:!1},J0={readContext:ot,useCallback:Ag,useContext:ot,useEffect:Oc,useImperativeHandle:Dg,useInsertionEffect:Ng,useLayoutEffect:Ig,useMemo:Fg,useReducer:Ds,useRef:zg,useState:function(){return Ds(zi)},useDebugValue:Ec,useDeferredValue:function(e){var t=at();return ye===null?t.memoizedState=e:Hg(t,ye.memoizedState,e)},useTransition:function(){var e=Ds(zi)[0],t=at().memoizedState;return[e,t]},useMutableSource:Eg,useSyncExternalStore:Pg,useId:Bg,unstable_isNewReconciler:!1};function Or(e,t){try{var n="",r=t;do n+=Oy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function As(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Z0=typeof WeakMap=="function"?WeakMap:Map;function Kg(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){aa||(aa=!0,iu=r),ql(e,t)},n}function Gg(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ql(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ql(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function of(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Z0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=pw.bind(null,e,t,n),t.then(e,e))}function af(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e)}var ew=Bt.ReactCurrentOwner,Ue=!1;function Ie(e,t,n,r){t.child=e===null?$g(t,null,n,r):Cr(t,e.child,n,r)}function lf(e,t,n,r,i){n=n.render;var o=t.ref;return yr(t,i),r=Cc(e,t,n,r,o,i),n=$c(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(se&&n&&fc(t),t.flags|=1,Ie(e,t,r,i),t.child)}function uf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Nc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qg(e,t,o,r,i)):(e=zo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(a,r)&&e.ref===t.ref)return Ht(e,t,i)}return t.flags|=1,e=gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function qg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ei(o,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,Ht(e,t,i)}return Ql(e,t,n,r,i)}function Qg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(lr,qe),qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(lr,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(lr,qe),qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(lr,qe),qe|=r;return Ie(e,t,i,n),t.child}function Xg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,n,r,i){var o=Ve(n)?Dn:ze.current;return o=kr(t,o),yr(t,i),n=Cc(e,t,n,r,o,i),r=$c(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(se&&r&&fc(t),t.flags|=1,Ie(e,t,n,i),t.child)}function cf(e,t,n,r,i){if(Ve(n)){var o=!0;Xo(t)}else o=!1;if(yr(t,i),t.stateNode===null)To(e,t),bg(t,n,r),Gl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=Ve(n)?Dn:ze.current,u=kr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&ef(t,a,r,u),Zt=!1;var f=t.memoizedState;a.state=f,ta(t,r,a,i),l=t.memoizedState,s!==r||f!==l||We.current||Zt?(typeof c=="function"&&(Kl(t,n,c,r),l=t.memoizedState),(s=Zt||Zd(t,n,s,r,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Sg(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ut(t.type,s),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=ot(l):(l=Ve(n)?Dn:ze.current,l=kr(t,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||f!==l)&&ef(t,a,r,l),Zt=!1,f=t.memoizedState,a.state=f,ta(t,r,a,i);var v=t.memoizedState;s!==d||f!==v||We.current||Zt?(typeof y=="function"&&(Kl(t,n,y,r),v=t.memoizedState),(u=Zt||Zd(t,n,u,r,f,v,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Xl(e,t,n,r,o,i)}function Xl(e,t,n,r,i,o){Xg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&qd(t,n,!1),Ht(e,t,o);r=t.stateNode,ew.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Cr(t,e.child,null,o),t.child=Cr(t,null,s,o)):Ie(e,t,s,o),t.memoizedState=r.state,i&&qd(t,n,!0),t.child}function Yg(e){var t=e.stateNode;t.pendingContext?Gd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gd(e,t.context,!1),xc(e,t.containerInfo)}function df(e,t,n,r,i){return br(),hc(i),t.flags|=256,Ie(e,t,n,r),t.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jg(e,t,n){var r=t.pendingProps,i=ue.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(ue,i&1),e===null)return Wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ka(a,r,0,null),e=zn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Jl(n),t.memoizedState=Yl,e):Pc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return tw(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=gn(s,o):(o=zn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Jl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Yl,r}return o=e.child,e=o.sibling,r=gn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pc(e,t){return t=Ka({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function po(e,t,n,r){return r!==null&&hc(r),Cr(t,e.child,null,n),e=Pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tw(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=As(Error(_(422))),po(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ka({mode:"visible",children:r.children},i,0,null),o=zn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Cr(t,e.child,null,a),t.child.memoizedState=Jl(a),t.memoizedState=Yl,o);if(!(t.mode&1))return po(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(_(419)),r=As(o,r,void 0),po(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ue||s){if(r=be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ft(e,i),gt(r,e,i,-1))}return zc(),r=As(Error(_(421))),po(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Qe=dn(i.nextSibling),Xe=t,se=!0,ft=null,e!==null&&(tt[nt++]=Rt,tt[nt++]=zt,tt[nt++]=An,Rt=e.id,zt=e.overflow,An=t),t=Pc(t,r.children),t.flags|=4096,t)}function ff(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vl(e.return,t,n)}function Fs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Zg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ie(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ff(e,n,t);else if(e.tag===19)ff(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ue,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&na(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&na(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fs(t,!0,n,null,o);break;case"together":Fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function To(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nw(e,t,n){switch(t.tag){case 3:Yg(t),br();break;case 5:Og(t);break;case 1:Ve(t.type)&&Xo(t);break;case 4:xc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(Zo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?Jg(e,t,n):(ne(ue,ue.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);ne(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,Qg(e,t,n)}return Ht(e,t,n)}var em,Zl,tm,nm;em=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zl=function(){};tm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(Ot.current);var o=null;switch(n){case"input":i=Sl(e,i),r=Sl(e,r),o=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),o=[];break;case"textarea":i=Cl(e,i),r=Cl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qo)}Ol(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};nm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Jr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rw(e,t,n){var r=t.pendingProps;switch(pc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ve(t.type)&&Qo(),Te(t),null;case 3:return r=t.stateNode,$r(),oe(We),oe(ze),kc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(su(ft),ft=null))),Zl(e,t),Te(t),null;case 5:Sc(t);var i=Ln(_i.current);if(n=t.type,e!==null&&t.stateNode!=null)tm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Te(t),null}if(e=Ln(Ot.current),co(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[bt]=t,r[Li]=o,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<ai.length;i++)re(ai[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":xd(r,o),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},re("invalid",r);break;case"textarea":kd(r,o),re("invalid",r)}Ol(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,s,e),i=["children",""+s]):xi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&re("scroll",r)}switch(n){case"input":to(r),Sd(r,o,!0);break;case"textarea":to(r),bd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[bt]=t,e[Li]=r,em(e,t,!1,!1),t.stateNode=e;e:{switch(a=El(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<ai.length;i++)re(ai[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":xd(e,r),i=Sl(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),re("invalid",e);break;case"textarea":kd(e,r),i=Cl(e,r),re("invalid",e);break;default:i=r}Ol(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?_h(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Si(e,l):typeof l=="number"&&Si(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&re("scroll",e):l!=null&&Ju(e,o,l,a))}switch(n){case"input":to(e),Sd(e,r,!1);break;case"textarea":to(e),bd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hr(e,!!r.multiple,o,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)nm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Ln(_i.current),Ln(Ot.current),co(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(o=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return Te(t),null;case 13:if(oe(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Qe!==null&&t.mode&1&&!(t.flags&128))wg(),br(),t.flags|=98560,o=!1;else if(o=co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[bt]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else ft!==null&&(su(ft),ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?we===0&&(we=3):zc())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return $r(),Zl(e,t),e===null&&Pi(t.stateNode.containerInfo),Te(t),null;case 10:return vc(t.type._context),Te(t),null;case 17:return Ve(t.type)&&Qo(),Te(t),null;case 19:if(oe(ue),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Jr(o,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=na(e),a!==null){for(t.flags|=128,Jr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ue,ue.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>Er&&(t.flags|=128,r=!0,Jr(o,!1),t.lanes=4194304)}else{if(!r)if(e=na(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!se)return Te(t),null}else 2*he()-o.renderingStartTime>Er&&n!==1073741824&&(t.flags|=128,r=!0,Jr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,n=ue.current,ne(ue,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Rc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function iw(e,t){switch(pc(t),t.tag){case 1:return Ve(t.type)&&Qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),oe(We),oe(ze),kc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sc(t),null;case 13:if(oe(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ue),null;case 4:return $r(),null;case 10:return vc(t.type._context),null;case 22:case 23:return Rc(),null;case 24:return null;default:return null}}var ho=!1,_e=!1,ow=typeof WeakSet=="function"?WeakSet:Set,M=null;function sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function eu(e,t,n){try{n()}catch(r){fe(e,t,r)}}var pf=!1;function aw(e,t){if(Ml=Vo,e=ag(),dc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++c===r&&(l=a),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dl={focusedElem:e,selectionRange:n},Vo=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:ut(t.type,w),k);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(x){fe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=pf,pf=!1,v}function hi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&eu(t,n,o)}i=i.next}while(i!==r)}}function Wa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function tu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rm(e){var t=e.alternate;t!==null&&(e.alternate=null,rm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[Li],delete t[Hl],delete t[B0],delete t[U0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function im(e){return e.tag===5||e.tag===3||e.tag===4}function hf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||im(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qo));else if(r!==4&&(e=e.child,e!==null))for(nu(e,t,n),e=e.sibling;e!==null;)nu(e,t,n),e=e.sibling}function ru(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ru(e,t,n),e=e.sibling;e!==null;)ru(e,t,n),e=e.sibling}var Ee=null,dt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)om(e,t,n),n=n.sibling}function om(e,t,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Ia,n)}catch{}switch(n.tag){case 5:_e||sr(n,t);case 6:var r=Ee,i=dt;Ee=null,Gt(e,t,n),Ee=r,dt=i,Ee!==null&&(dt?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(dt?(e=Ee,n=n.stateNode,e.nodeType===8?Rs(e.parentNode,n):e.nodeType===1&&Rs(e,n),$i(e)):Rs(Ee,n.stateNode));break;case 4:r=Ee,i=dt,Ee=n.stateNode.containerInfo,dt=!0,Gt(e,t,n),Ee=r,dt=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&eu(n,t,a),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!_e&&(sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){fe(n,t,s)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Gt(e,t,n),_e=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function gf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ow),t.forEach(function(r){var i=gw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ee=s.stateNode,dt=!1;break e;case 3:Ee=s.stateNode.containerInfo,dt=!0;break e;case 4:Ee=s.stateNode.containerInfo,dt=!0;break e}s=s.return}if(Ee===null)throw Error(_(160));om(o,a,i),Ee=null,dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)am(t,e),t=t.sibling}function am(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),xt(e),r&4){try{hi(3,e,e.return),Wa(3,e)}catch(w){fe(e,e.return,w)}try{hi(5,e,e.return)}catch(w){fe(e,e.return,w)}}break;case 1:lt(t,e),xt(e),r&512&&n!==null&&sr(n,n.return);break;case 5:if(lt(t,e),xt(e),r&512&&n!==null&&sr(n,n.return),e.flags&32){var i=e.stateNode;try{Si(i,"")}catch(w){fe(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Eh(i,o),El(s,a);var u=El(s,o);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?_h(i,d):c==="dangerouslySetInnerHTML"?Lh(i,d):c==="children"?Si(i,d):Ju(i,c,d,u)}switch(s){case"input":kl(i,o);break;case"textarea":Ph(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?hr(i,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?hr(i,!!o.multiple,o.defaultValue,!0):hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Li]=o}catch(w){fe(e,e.return,w)}}break;case 6:if(lt(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){fe(e,e.return,w)}}break;case 3:if(lt(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$i(t.containerInfo)}catch(w){fe(e,e.return,w)}break;case 4:lt(t,e),xt(e);break;case 13:lt(t,e),xt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tc=he())),r&4&&gf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||c,lt(t,e),_e=u):lt(t,e),xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(d=M=c;M!==null;){switch(f=M,y=f.child,f.tag){case 0:case 11:case 14:case 15:hi(4,f,f.return);break;case 1:sr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){fe(r,n,w)}}break;case 5:sr(f,f.return);break;case 22:if(f.memoizedState!==null){vf(d);continue}}y!==null?(y.return=f,M=y):vf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Th("display",a))}catch(w){fe(e,e.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){fe(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lt(t,e),xt(e),r&4&&gf(e);break;case 21:break;default:lt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(im(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Si(i,""),r.flags&=-33);var o=hf(e);ru(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=hf(e);nu(e,s,a);break;default:throw Error(_(161))}}catch(l){fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sw(e,t,n){M=e,sm(e)}function sm(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ho;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||_e;s=ho;var u=_e;if(ho=a,(_e=l)&&!u)for(M=i;M!==null;)a=M,l=a.child,a.tag===22&&a.memoizedState!==null?yf(i):l!==null?(l.return=a,M=l):yf(i);for(;o!==null;)M=o,sm(o),o=o.sibling;M=i,ho=s,_e=u}mf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):mf(e)}}function mf(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||Wa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Jd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Jd(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&$i(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}_e||t.flags&512&&tu(t)}catch(f){fe(t,t.return,f)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function vf(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function yf(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wa(4,t)}catch(l){fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){fe(t,i,l)}}var o=t.return;try{tu(t)}catch(l){fe(t,o,l)}break;case 5:var a=t.return;try{tu(t)}catch(l){fe(t,a,l)}}}catch(l){fe(t,t.return,l)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var lw=Math.ceil,oa=Bt.ReactCurrentDispatcher,jc=Bt.ReactCurrentOwner,it=Bt.ReactCurrentBatchConfig,Y=0,be=null,ve=null,Pe=0,qe=0,lr=xn(0),we=0,Ii=null,Hn=0,Va=0,Lc=0,gi=null,Be=null,Tc=0,Er=1/0,Lt=null,aa=!1,iu=null,pn=null,go=!1,an=null,sa=0,mi=0,ou=null,_o=-1,Ro=0;function Me(){return Y&6?he():_o!==-1?_o:_o=he()}function hn(e){return e.mode&1?Y&2&&Pe!==0?Pe&-Pe:V0.transition!==null?(Ro===0&&(Ro=Wh()),Ro):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Yh(e.type)),e):1}function gt(e,t,n,r){if(50<mi)throw mi=0,ou=null,Error(_(185));Ki(e,n,r),(!(Y&2)||e!==be)&&(e===be&&(!(Y&2)&&(Va|=n),we===4&&nn(e,Pe)),Ke(e,r),n===1&&Y===0&&!(t.mode&1)&&(Er=he()+500,Ha&&Sn()))}function Ke(e,t){var n=e.callbackNode;Vy(e,t);var r=Wo(e,e===be?Pe:0);if(r===0)n!==null&&Od(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Od(n),t===1)e.tag===0?W0(wf.bind(null,e)):mg(wf.bind(null,e)),F0(function(){!(Y&6)&&Sn()}),n=null;else{switch(Vh(r)){case 1:n=rc;break;case 4:n=Bh;break;case 16:n=Uo;break;case 536870912:n=Uh;break;default:n=Uo}n=gm(n,lm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lm(e,t){if(_o=-1,Ro=0,Y&6)throw Error(_(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=Wo(e,e===be?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=la(e,r);else{t=r;var i=Y;Y|=2;var o=cm();(be!==e||Pe!==t)&&(Lt=null,Er=he()+500,Rn(e,t));do try{dw();break}catch(s){um(e,s)}while(1);mc(),oa.current=o,Y=i,ve!==null?t=0:(be=null,Pe=0,t=we)}if(t!==0){if(t===2&&(i=_l(e),i!==0&&(r=i,t=au(e,i))),t===1)throw n=Ii,Rn(e,0),nn(e,r),Ke(e,he()),n;if(t===6)nn(e,r);else{if(i=e.current.alternate,!(r&30)&&!uw(i)&&(t=la(e,r),t===2&&(o=_l(e),o!==0&&(r=o,t=au(e,o))),t===1))throw n=Ii,Rn(e,0),nn(e,r),Ke(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:On(e,Be,Lt);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=Tc+500-he(),10<t)){if(Wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fl(On.bind(null,e,Be,Lt),t);break}On(e,Be,Lt);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-ht(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lw(r/1960))-r,10<r){e.timeoutHandle=Fl(On.bind(null,e,Be,Lt),r);break}On(e,Be,Lt);break;case 5:On(e,Be,Lt);break;default:throw Error(_(329))}}}return Ke(e,he()),e.callbackNode===n?lm.bind(null,e):null}function au(e,t){var n=gi;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=la(e,t),e!==2&&(t=Be,Be=n,t!==null&&su(t)),e}function su(e){Be===null?Be=e:Be.push.apply(Be,e)}function uw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~Lc,t&=~Va,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function wf(e){if(Y&6)throw Error(_(327));wr();var t=Wo(e,0);if(!(t&1))return Ke(e,he()),null;var n=la(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=au(e,r))}if(n===1)throw n=Ii,Rn(e,0),nn(e,t),Ke(e,he()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,Be,Lt),Ke(e,he()),null}function _c(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(Er=he()+500,Ha&&Sn())}}function Bn(e){an!==null&&an.tag===0&&!(Y&6)&&wr();var t=Y;Y|=1;var n=it.transition,r=ee;try{if(it.transition=null,ee=1,e)return e()}finally{ee=r,it.transition=n,Y=t,!(Y&6)&&Sn()}}function Rc(){qe=lr.current,oe(lr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,A0(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(pc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qo();break;case 3:$r(),oe(We),oe(ze),kc();break;case 5:Sc(r);break;case 4:$r();break;case 13:oe(ue);break;case 19:oe(ue);break;case 10:vc(r.type._context);break;case 22:case 23:Rc()}n=n.return}if(be=e,ve=e=gn(e.current,null),Pe=qe=t,we=0,Ii=null,Lc=Va=Hn=0,Be=gi=null,jn!==null){for(t=0;t<jn.length;t++)if(n=jn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}jn=null}return e}function um(e,t){do{var n=ve;try{if(mc(),jo.current=ia,ra){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ra=!1}if(Fn=0,Se=ye=ce=null,pi=!1,Ri=0,jc.current=null,n===null||n.return===null){we=1,Ii=t,ve=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Pe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=af(a);if(y!==null){y.flags&=-257,sf(y,a,s,o,t),y.mode&1&&of(o,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){of(o,u,t),zc();break e}l=Error(_(426))}}else if(se&&s.mode&1){var k=af(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),sf(k,a,s,o,t),hc(Or(l,s));break e}}o=l=Or(l,s),we!==4&&(we=2),gi===null?gi=[o]:gi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Kg(o,l,t);Yd(o,g);break e;case 1:s=l;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pn===null||!pn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Gg(o,s,t);Yd(o,x);break e}}o=o.return}while(o!==null)}fm(n)}catch(b){t=b,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function cm(){var e=oa.current;return oa.current=ia,e===null?ia:e}function zc(){(we===0||we===3||we===2)&&(we=4),be===null||!(Hn&268435455)&&!(Va&268435455)||nn(be,Pe)}function la(e,t){var n=Y;Y|=2;var r=cm();(be!==e||Pe!==t)&&(Lt=null,Rn(e,t));do try{cw();break}catch(i){um(e,i)}while(1);if(mc(),Y=n,oa.current=r,ve!==null)throw Error(_(261));return be=null,Pe=0,we}function cw(){for(;ve!==null;)dm(ve)}function dw(){for(;ve!==null&&!Iy();)dm(ve)}function dm(e){var t=hm(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?fm(e):ve=t,jc.current=null}function fm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=iw(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ve=null;return}}else if(n=rw(n,t,qe),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);we===0&&(we=5)}function On(e,t,n){var r=ee,i=it.transition;try{it.transition=null,ee=1,fw(e,t,n,r)}finally{it.transition=i,ee=r}return null}function fw(e,t,n,r){do wr();while(an!==null);if(Y&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ky(e,o),e===be&&(ve=be=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||go||(go=!0,gm(Uo,function(){return wr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=it.transition,it.transition=null;var a=ee;ee=1;var s=Y;Y|=4,jc.current=null,aw(e,n),am(n,e),_0(Dl),Vo=!!Ml,Dl=Ml=null,e.current=n,sw(n),My(),Y=s,ee=a,it.transition=o}else e.current=n;if(go&&(go=!1,an=e,sa=i),o=e.pendingLanes,o===0&&(pn=null),Fy(n.stateNode),Ke(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(aa)throw aa=!1,e=iu,iu=null,e;return sa&1&&e.tag!==0&&wr(),o=e.pendingLanes,o&1?e===ou?mi++:(mi=0,ou=e):mi=0,Sn(),null}function wr(){if(an!==null){var e=Vh(sa),t=it.transition,n=ee;try{if(it.transition=null,ee=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,sa=0,Y&6)throw Error(_(331));var i=Y;for(Y|=4,M=e.current;M!==null;){var o=M,a=o.child;if(M.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:hi(8,c,o)}var d=c.child;if(d!==null)d.return=c,M=d;else for(;M!==null;){c=M;var f=c.sibling,y=c.return;if(rm(c),c===u){M=null;break}if(f!==null){f.return=y,M=f;break}M=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}M=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,M=a;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,M=g;break e}M=o.return}}var p=e.current;for(M=p;M!==null;){a=M;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,M=m;else e:for(a=p;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wa(9,s)}}catch(b){fe(s,s.return,b)}if(s===a){M=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,M=x;break e}M=s.return}}if(Y=i,Sn(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Ia,e)}catch{}r=!0}return r}finally{ee=n,it.transition=t}}return!1}function xf(e,t,n){t=Or(n,t),t=Kg(e,t,1),e=fn(e,t,1),t=Me(),e!==null&&(Ki(e,1,t),Ke(e,t))}function fe(e,t,n){if(e.tag===3)xf(e,e,n);else for(;t!==null;){if(t.tag===3){xf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=Or(n,e),e=Gg(t,e,1),t=fn(t,e,1),e=Me(),t!==null&&(Ki(t,1,e),Ke(t,e));break}}t=t.return}}function pw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Pe&n)===n&&(we===4||we===3&&(Pe&130023424)===Pe&&500>he()-Tc?Rn(e,0):Lc|=n),Ke(e,t)}function pm(e,t){t===0&&(e.mode&1?(t=io,io<<=1,!(io&130023424)&&(io=4194304)):t=1);var n=Me();e=Ft(e,t),e!==null&&(Ki(e,t,n),Ke(e,n))}function hw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pm(e,n)}function gw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),pm(e,n)}var hm;hm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ue=!1,nw(e,t,n);Ue=!!(e.flags&131072)}else Ue=!1,se&&t.flags&1048576&&vg(t,Jo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;To(e,t),e=t.pendingProps;var i=kr(t,ze.current);yr(t,n),i=Cc(null,t,r,e,i,n);var o=$c();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(o=!0,Xo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wc(t),i.updater=Ba,t.stateNode=i,i._reactInternals=t,Gl(t,r,e,n),t=Xl(null,t,r,!0,o,n)):(t.tag=0,se&&o&&fc(t),Ie(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(To(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=vw(r),e=ut(r,e),i){case 0:t=Ql(null,t,r,e,n);break e;case 1:t=cf(null,t,r,e,n);break e;case 11:t=lf(null,t,r,e,n);break e;case 14:t=uf(null,t,r,ut(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ql(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),cf(e,t,r,i,n);case 3:e:{if(Yg(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Sg(e,t),ta(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Or(Error(_(423)),t),t=df(e,t,r,n,i);break e}else if(r!==i){i=Or(Error(_(424)),t),t=df(e,t,r,n,i);break e}else for(Qe=dn(t.stateNode.containerInfo.firstChild),Xe=t,se=!0,ft=null,n=$g(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){t=Ht(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return Og(t),e===null&&Wl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Al(r,i)?a=null:o!==null&&Al(r,o)&&(t.flags|=32),Xg(e,t),Ie(e,t,a,n),t.child;case 6:return e===null&&Wl(t),null;case 13:return Jg(e,t,n);case 4:return xc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cr(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),lf(e,t,r,i,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ne(Zo,r._currentValue),r._currentValue=a,o!==null)if(vt(o.value,a)){if(o.children===i.children&&!We.current){t=Ht(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Nt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Vl(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(_(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Vl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ie(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,yr(t,n),i=ot(i),r=r(i),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),uf(e,t,r,i,n);case 15:return qg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),To(e,t),t.tag=1,Ve(r)?(e=!0,Xo(t)):e=!1,yr(t,n),bg(t,r,i),Gl(t,r,i,n),Xl(null,t,r,!0,e,n);case 19:return Zg(e,t,n);case 22:return Qg(e,t,n)}throw Error(_(156,t.tag))};function gm(e,t){return Hh(e,t)}function mw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new mw(e,t,n,r)}function Nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vw(e){if(typeof e=="function")return Nc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ec)return 11;if(e===tc)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Nc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jn:return zn(n.children,i,o,t);case Zu:a=8,i|=8;break;case vl:return e=rt(12,n,t,i|2),e.elementType=vl,e.lanes=o,e;case yl:return e=rt(13,n,t,i),e.elementType=yl,e.lanes=o,e;case wl:return e=rt(19,n,t,i),e.elementType=wl,e.lanes=o,e;case Ch:return Ka(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kh:a=10;break e;case bh:a=9;break e;case ec:a=11;break e;case tc:a=14;break e;case Jt:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=rt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function zn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Ka(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Ch,e.lanes=n,e.stateNode={isHidden:!1},e}function Hs(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Bs(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ks(0),this.expirationTimes=ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ks(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ic(e,t,n,r,i,o,a,s,l){return e=new yw(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=rt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(o),e}function ww(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mm(e){if(!e)return yn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ve(n))return gg(e,n,t)}return t}function vm(e,t,n,r,i,o,a,s,l){return e=Ic(n,r,!0,e,i,o,a,s,l),e.context=mm(null),n=e.current,r=Me(),i=hn(n),o=Nt(r,i),o.callback=t??null,fn(n,o,i),e.current.lanes=i,Ki(e,i,r),Ke(e,r),e}function Ga(e,t,n,r){var i=t.current,o=Me(),a=hn(i);return n=mm(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(i,t,a),e!==null&&(gt(e,i,a,o),Po(e,i,a)),a}function ua(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mc(e,t){Sf(e,t),(e=e.alternate)&&Sf(e,t)}function xw(){return null}var ym=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dc(e){this._internalRoot=e}qa.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ga(e,t,null,null)};qa.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){Ga(null,e,null,null)}),t[At]=null}};function qa(e){this._internalRoot=e}qa.prototype.unstable_scheduleHydration=function(e){if(e){var t=qh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&Xh(e)}};function Ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kf(){}function Sw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ua(a);o.call(u)}}var a=vm(t,r,e,0,null,!1,!1,"",kf);return e._reactRootContainer=a,e[At]=a.current,Pi(e.nodeType===8?e.parentNode:e),Bn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ua(l);s.call(u)}}var l=Ic(e,0,!1,null,null,!1,!1,"",kf);return e._reactRootContainer=l,e[At]=l.current,Pi(e.nodeType===8?e.parentNode:e),Bn(function(){Ga(t,l,n,r)}),l}function Xa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ua(a);s.call(l)}}Ga(t,a,e,i)}else a=Sw(n,t,e,i,r);return ua(a)}Kh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=oi(t.pendingLanes);n!==0&&(ic(t,n|1),Ke(t,he()),!(Y&6)&&(Er=he()+500,Sn()))}break;case 13:Bn(function(){var r=Ft(e,1);if(r!==null){var i=Me();gt(r,e,1,i)}}),Mc(e,1)}};oc=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Me();gt(t,e,134217728,n)}Mc(e,134217728)}};Gh=function(e){if(e.tag===13){var t=hn(e),n=Ft(e,t);if(n!==null){var r=Me();gt(n,e,t,r)}Mc(e,t)}};qh=function(){return ee};Qh=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};jl=function(e,t,n){switch(t){case"input":if(kl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Fa(r);if(!i)throw Error(_(90));Oh(r),kl(r,i)}}}break;case"textarea":Ph(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};Nh=_c;Ih=Bn;var kw={usingClientEntryPoint:!1,Events:[qi,nr,Fa,Rh,zh,_c]},Zr={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bw={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ah(e),e===null?null:e.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{Ia=mo.inject(bw),$t=mo}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kw;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(t))throw Error(_(200));return ww(e,t,null,n)};Je.createRoot=function(e,t){if(!Ac(e))throw Error(_(299));var n=!1,r="",i=ym;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ic(e,1,!1,null,null,n,!1,r,i),e[At]=t.current,Pi(e.nodeType===8?e.parentNode:e),new Dc(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Ah(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return Bn(e)};Je.hydrate=function(e,t,n){if(!Qa(t))throw Error(_(200));return Xa(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!Ac(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ym;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=vm(t,null,e,1,n??null,i,!1,o,a),e[At]=t.current,Pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qa(t)};Je.render=function(e,t,n){if(!Qa(t))throw Error(_(200));return Xa(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!Qa(e))throw Error(_(40));return e._reactRootContainer?(Bn(function(){Xa(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};Je.unstable_batchedUpdates=_c;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qa(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Xa(e,t,n,!1,r)};Je.version="18.2.0-next-9e3b772b8-20220608";function wm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wm)}catch(e){console.error(e)}}wm(),vh.exports=Je;var Cw=vh.exports,bf=Cw;gl.createRoot=bf.createRoot,gl.hydrateRoot=bf.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mi.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const Cf="popstate";function $w(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return lu("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:xm(i)}return Ew(t,n,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ow(){return Math.random().toString(36).substr(2,8)}function $f(e,t){return{usr:e.state,key:e.key,idx:t}}function lu(e,t,n,r){return n===void 0&&(n=null),Mi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hr(t):t,{state:n,key:t&&t.key||r||Ow()})}function xm(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Hr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ew(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=sn.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(Mi({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){s=sn.Pop;let k=c(),g=k==null?null:k-u;u=k,l&&l({action:s,location:w.location,delta:g})}function f(k,g){s=sn.Push;let p=lu(w.location,k,g);n&&n(p,k),u=c()+1;let m=$f(p,u),x=w.createHref(p);try{a.pushState(m,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(x)}o&&l&&l({action:s,location:w.location,delta:1})}function y(k,g){s=sn.Replace;let p=lu(w.location,k,g);n&&n(p,k),u=c();let m=$f(p,u),x=w.createHref(p);a.replaceState(m,"",x),o&&l&&l({action:s,location:w.location,delta:0})}function v(k){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof k=="string"?k:xm(k);return xe(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return s},get location(){return e(i,a)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Cf,d),l=k,()=>{i.removeEventListener(Cf,d),l=null}},createHref(k){return t(i,k)},createURL:v,encodeLocation(k){let g=v(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:y,go(k){return a.go(k)}};return w}var Of;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Of||(Of={}));function Pw(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Hr(t):t,i=bm(r.pathname||"/",n);if(i==null)return null;let o=Sm(e);jw(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=Dw(o[s],Hw(i));return a}function Sm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Nn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(xe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Sm(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Iw(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of km(o.path))i(o,a,l)}),t}function km(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=km(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function jw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Mw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lw=/^:\w+$/,Tw=3,_w=2,Rw=1,zw=10,Nw=-2,Ef=e=>e==="*";function Iw(e,t){let n=e.split("/"),r=n.length;return n.some(Ef)&&(r+=Nw),t&&(r+=_w),n.filter(i=>!Ef(i)).reduce((i,o)=>i+(Lw.test(o)?Tw:o===""?Rw:zw),r)}function Mw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Dw(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Aw({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=s.route;o.push({params:r,pathname:Nn([i,c.pathname]),pathnameBase:Gw(Nn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Nn([i,c.pathnameBase]))}return o}function Aw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Fw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=s[d]||"";a=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=Bw(s[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Fw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Fc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Hw(e){try{return decodeURI(e)}catch(t){return Fc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Bw(e,t){try{return decodeURIComponent(e)}catch(n){return Fc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function bm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Uw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Hr(e):e;return{pathname:n?n.startsWith("/")?n:Ww(n,t):t,search:qw(r),hash:Qw(i)}}function Ww(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Us(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Kw(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Hr(e):(i=Mi({},e),xe(!i.pathname||!i.pathname.includes("?"),Us("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),Us("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),Us("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let d=t.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}s=d>=0?t[d]:"/"}let l=Uw(i,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Nn=e=>e.join("/").replace(/\/\/+/g,"/"),Gw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Xw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Cm=["post","put","patch","delete"];new Set(Cm);const Yw=["get",...Cm];new Set(Yw);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ca(){return ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ca.apply(this,arguments)}const Hc=T.createContext(null),Jw=T.createContext(null),Ya=T.createContext(null),Ja=T.createContext(null),Br=T.createContext({outlet:null,matches:[],isDataRoute:!1}),$m=T.createContext(null);function Za(){return T.useContext(Ja)!=null}function es(){return Za()||xe(!1),T.useContext(Ja).location}function Om(e){T.useContext(Ya).static||T.useLayoutEffect(e)}function ts(){let{isDataRoute:e}=T.useContext(Br);return e?d1():Zw()}function Zw(){Za()||xe(!1);let e=T.useContext(Hc),{basename:t,navigator:n}=T.useContext(Ya),{matches:r}=T.useContext(Br),{pathname:i}=es(),o=JSON.stringify(Vw(r).map(l=>l.pathnameBase)),a=T.useRef(!1);return Om(()=>{a.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){n.go(l);return}let c=Kw(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Nn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}function e1(e,t){return t1(e,t)}function t1(e,t,n){Za()||xe(!1);let{navigator:r}=T.useContext(Ya),{matches:i}=T.useContext(Br),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=es(),u;if(t){var c;let w=typeof t=="string"?Hr(t):t;s==="/"||(c=w.pathname)!=null&&c.startsWith(s)||xe(!1),u=w}else u=l;let d=u.pathname||"/",f=s==="/"?d:d.slice(s.length)||"/",y=Pw(e,{pathname:f}),v=a1(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Nn([s,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:Nn([s,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&v?T.createElement(Ja.Provider,{value:{location:ca({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:sn.Pop}},v):v}function n1(){let e=c1(),t=Xw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,o)}const r1=T.createElement(n1,null);class i1 extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Br.Provider,{value:this.props.routeContext},T.createElement($m.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function o1(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Hc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Br.Provider,{value:t},r)}function a1(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=o.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||xe(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,u)=>{let c=l.route.id?a==null?void 0:a[l.route.id]:null,d=null;n&&(d=l.route.errorElement||r1);let f=t.concat(o.slice(0,u+1)),y=()=>{let v;return c?v=d:l.route.Component?v=T.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=s,T.createElement(o1,{match:l,routeContext:{outlet:s,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(i1,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var uu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(uu||(uu={}));var Di;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Di||(Di={}));function s1(e){let t=T.useContext(Hc);return t||xe(!1),t}function l1(e){let t=T.useContext(Jw);return t||xe(!1),t}function u1(e){let t=T.useContext(Br);return t||xe(!1),t}function Em(e){let t=u1(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function c1(){var e;let t=T.useContext($m),n=l1(Di.UseRouteError),r=Em(Di.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function d1(){let{router:e}=s1(uu.UseNavigateStable),t=Em(Di.UseNavigateStable),n=T.useRef(!1);return Om(()=>{n.current=!0}),T.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ca({fromRouteId:t},o)))},[e,t])}function No(e){xe(!1)}function f1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=sn.Pop,navigator:o,static:a=!1}=e;Za()&&xe(!1);let s=t.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Hr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:y="default"}=r,v=T.useMemo(()=>{let w=bm(u,s);return w==null?null:{location:{pathname:w,search:c,hash:d,state:f,key:y},navigationType:i}},[s,u,c,d,f,y,i]);return v==null?null:T.createElement(Ya.Provider,{value:l},T.createElement(Ja.Provider,{children:n,value:v}))}function p1(e){let{children:t,location:n}=e;return e1(cu(t),n)}var Pf;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Pf||(Pf={}));new Promise(()=>{});function cu(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let o=[...t,i];if(r.type===T.Fragment){n.push.apply(n,cu(r.props.children,o));return}r.type!==No&&xe(!1),!r.props.index||!r.props.children||xe(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=cu(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const h1="startTransition",jf=hy[h1];function g1(e){let{basename:t,children:n,future:r,window:i}=e,o=T.useRef();o.current==null&&(o.current=$w({window:i,v5Compat:!0}));let a=o.current,[s,l]=T.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=T.useCallback(d=>{u&&jf?jf(()=>l(d)):l(d)},[l,u]);return T.useLayoutEffect(()=>a.listen(c),[a,c]),T.createElement(f1,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}var Lf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Lf||(Lf={}));var Tf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tf||(Tf={}));var Re=function(){return Re=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Re.apply(this,arguments)};function Pr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ie="-ms-",vi="-moz-",Z="-webkit-",Pm="comm",ns="rule",Bc="decl",m1="@import",jm="@keyframes",v1="@layer",y1=Math.abs,Uc=String.fromCharCode,du=Object.assign;function w1(e,t){return ke(e,0)^45?(((t<<2^ke(e,0))<<2^ke(e,1))<<2^ke(e,2))<<2^ke(e,3):0}function Lm(e){return e.trim()}function Tt(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function Io(e,t){return e.indexOf(t)}function ke(e,t){return e.charCodeAt(t)|0}function jr(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function Tm(e){return e.length}function si(e,t){return t.push(e),e}function x1(e,t){return e.map(t).join("")}function _f(e,t){return e.filter(function(n){return!Tt(n,t)})}var rs=1,Lr=1,_m=0,st=0,me=0,Ur="";function is(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:rs,column:Lr,length:a,return:"",siblings:s}}function Yt(e,t){return du(is("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qn(e){for(;e.root;)e=Yt(e.root,{children:[e]});si(e,e.siblings)}function S1(){return me}function k1(){return me=st>0?ke(Ur,--st):0,Lr--,me===10&&(Lr=1,rs--),me}function mt(){return me=st<_m?ke(Ur,st++):0,Lr++,me===10&&(Lr=1,rs++),me}function In(){return ke(Ur,st)}function Mo(){return st}function os(e,t){return jr(Ur,e,t)}function fu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function b1(e){return rs=Lr=1,_m=kt(Ur=e),st=0,[]}function C1(e){return Ur="",e}function Ws(e){return Lm(os(st-1,pu(e===91?e+2:e===40?e+1:e)))}function $1(e){for(;(me=In())&&me<33;)mt();return fu(e)>2||fu(me)>3?"":" "}function O1(e,t){for(;--t&&mt()&&!(me<48||me>102||me>57&&me<65||me>70&&me<97););return os(e,Mo()+(t<6&&In()==32&&mt()==32))}function pu(e){for(;mt();)switch(me){case e:return st;case 34:case 39:e!==34&&e!==39&&pu(me);break;case 40:e===41&&pu(e);break;case 92:mt();break}return st}function E1(e,t){for(;mt()&&e+me!==47+10;)if(e+me===42+42&&In()===47)break;return"/*"+os(t,st-1)+"*"+Uc(e===47?e:mt())}function P1(e){for(;!fu(In());)mt();return os(e,st)}function j1(e){return C1(Do("",null,null,null,[""],e=b1(e),0,[0],e))}function Do(e,t,n,r,i,o,a,s,l){for(var u=0,c=0,d=a,f=0,y=0,v=0,w=1,k=1,g=1,p=0,m="",x=i,b=o,C=r,E=m;k;)switch(v=p,p=mt()){case 40:if(v!=108&&ke(E,d-1)==58){Io(E+=V(Ws(p),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:E+=Ws(p);break;case 9:case 10:case 13:case 32:E+=$1(v);break;case 92:E+=O1(Mo()-1,7);continue;case 47:switch(In()){case 42:case 47:si(L1(E1(mt(),Mo()),t,n,l),l);break;default:E+="/"}break;case 123*w:s[u++]=kt(E)*g;case 125*w:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+c:g==-1&&(E=V(E,/\f/g,"")),y>0&&kt(E)-d&&si(y>32?zf(E+";",r,n,d-1,l):zf(V(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(si(C=Rf(E,t,n,u,c,i,s,m,x=[],b=[],d,o),o),p===123)if(c===0)Do(E,t,C,C,x,o,d,s,b);else switch(f===99&&ke(E,3)===110?100:f){case 100:case 108:case 109:case 115:Do(e,C,C,r&&si(Rf(e,C,C,0,0,i,s,m,i,x=[],d,b),b),i,b,d,s,r?x:b);break;default:Do(E,C,C,C,[""],b,0,s,b)}}u=c=y=0,w=g=1,m=E="",d=a;break;case 58:d=1+kt(E),y=v;default:if(w<1){if(p==123)--w;else if(p==125&&w++==0&&k1()==125)continue}switch(E+=Uc(p),p*w){case 38:g=c>0?1:(E+="\f",-1);break;case 44:s[u++]=(kt(E)-1)*g,g=1;break;case 64:In()===45&&(E+=Ws(mt())),f=In(),c=d=kt(m=E+=P1(Mo())),p++;break;case 45:v===45&&kt(E)==2&&(w=0)}}return o}function Rf(e,t,n,r,i,o,a,s,l,u,c,d){for(var f=i-1,y=i===0?o:[""],v=Tm(y),w=0,k=0,g=0;w<r;++w)for(var p=0,m=jr(e,f+1,f=y1(k=a[w])),x=e;p<v;++p)(x=Lm(k>0?y[p]+" "+m:V(m,/&\f/g,y[p])))&&(l[g++]=x);return is(e,t,n,i===0?ns:s,l,u,c,d)}function L1(e,t,n,r){return is(e,t,n,Pm,Uc(S1()),jr(e,2,-2),0,r)}function zf(e,t,n,r,i){return is(e,t,n,Bc,jr(e,0,r),jr(e,r+1,-1),r,i)}function Rm(e,t,n){switch(w1(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 4789:return vi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+vi+e+ie+e+e;case 5936:switch(ke(e,t+11)){case 114:return Z+e+ie+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+ie+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+ie+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Z+e+ie+e+e;case 6165:return Z+e+ie+"flex-"+e+e;case 5187:return Z+e+V(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+ie+"flex-$1$2")+e;case 5443:return Z+e+ie+"flex-item-"+V(e,/flex-|-self/g,"")+(Tt(e,/flex-|baseline/)?"":ie+"grid-row-"+V(e,/flex-|-self/g,""))+e;case 4675:return Z+e+ie+"flex-line-pack"+V(e,/align-content|flex-|-self/g,"")+e;case 5548:return Z+e+ie+V(e,"shrink","negative")+e;case 5292:return Z+e+ie+V(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+V(e,"-grow","")+Z+e+ie+V(e,"grow","positive")+e;case 4554:return Z+V(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4200:if(!Tt(e,/flex-|baseline/))return ie+"grid-column-align"+jr(e,t)+e;break;case 2592:case 3360:return ie+V(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Tt(r.props,/grid-\w+-end/)})?~Io(e+(n=n[t].value),"span")?e:ie+V(e,"-start","")+e+ie+"grid-row-span:"+(~Io(n,"span")?Tt(n,/\d+/):+Tt(n,/\d+/)-+Tt(e,/\d+/))+";":ie+V(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Tt(r.props,/grid-\w+-start/)})?e:ie+V(V(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(ke(e,t+1)){case 109:if(ke(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+vi+(ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Io(e,"stretch")?Rm(V(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return V(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return ie+i+":"+o+u+(a?ie+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(ke(e,t+6)===121)return V(e,":",":"+Z)+e;break;case 6444:switch(ke(e,ke(e,14)===45?18:11)){case 120:return V(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(ke(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+ie+"$2box$3")+e;case 100:return V(e,":",":"+ie)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(e,"scroll-","scroll-snap-")+e}return e}function da(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function T1(e,t,n,r){switch(e.type){case v1:if(e.children.length)break;case m1:case Bc:return e.return=e.return||e.value;case Pm:return"";case jm:return e.return=e.value+"{"+da(e.children,r)+"}";case ns:if(!kt(e.value=e.props.join(",")))return""}return kt(n=da(e.children,r))?e.return=e.value+"{"+n+"}":""}function _1(e){var t=Tm(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function R1(e){return function(t){t.root||(t=t.return)&&e(t)}}function z1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Bc:e.return=Rm(e.value,e.length,n);return;case jm:return da([Yt(e,{value:V(e.value,"@","@"+Z)})],r);case ns:if(e.length)return x1(n=e.props,function(i){switch(Tt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qn(Yt(e,{props:[V(i,/:(read-\w+)/,":"+vi+"$1")]})),qn(Yt(e,{props:[i]})),du(e,{props:_f(n,r)});break;case"::placeholder":qn(Yt(e,{props:[V(i,/:(plac\w+)/,":"+Z+"input-$1")]})),qn(Yt(e,{props:[V(i,/:(plac\w+)/,":"+vi+"$1")]})),qn(Yt(e,{props:[V(i,/:(plac\w+)/,ie+"input-$1")]})),qn(Yt(e,{props:[i]})),du(e,{props:_f(n,r)});break}return""})}}var N1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Wc=typeof window<"u"&&"HTMLElement"in window,I1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),M1={},Vc=Object.freeze([]),_r=Object.freeze({});function zm(e,t,n){return n===void 0&&(n=_r),e.theme!==n.theme&&e.theme||t||n.theme}var Nm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),D1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,A1=/(^-|-$)/g;function Nf(e){return e.replace(D1,"-").replace(A1,"")}var F1=/(a)(d)/gi,If=function(e){return String.fromCharCode(e+(e>25?39:97))};function hu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=If(t%52)+n;return(If(t%52)+n).replace(F1,"$1-$2")}var Vs,ur=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Im=function(e){return ur(5381,e)};function Kc(e){return hu(Im(e)>>>0)}function H1(e){return e.displayName||e.name||"Component"}function Ks(e){return typeof e=="string"&&!0}var Mm=typeof Symbol=="function"&&Symbol.for,Dm=Mm?Symbol.for("react.memo"):60115,B1=Mm?Symbol.for("react.forward_ref"):60112,U1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},W1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Am={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},V1=((Vs={})[B1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vs[Dm]=Am,Vs);function Mf(e){return("type"in(t=e)&&t.type.$$typeof)===Dm?Am:"$$typeof"in e?V1[e.$$typeof]:U1;var t}var K1=Object.defineProperty,G1=Object.getOwnPropertyNames,Df=Object.getOwnPropertySymbols,q1=Object.getOwnPropertyDescriptor,Q1=Object.getPrototypeOf,Af=Object.prototype;function Fm(e,t,n){if(typeof t!="string"){if(Af){var r=Q1(t);r&&r!==Af&&Fm(e,r,n)}var i=G1(t);Df&&(i=i.concat(Df(t)));for(var o=Mf(e),a=Mf(t),s=0;s<i.length;++s){var l=i[s];if(!(l in W1||n&&n[l]||a&&l in a||o&&l in o)){var u=q1(t,l);try{K1(e,l,u)}catch{}}}}return e}function Rr(e){return typeof e=="function"}function Gc(e){return typeof e=="object"&&"styledComponentId"in e}function Tn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function fa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ai(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gu(e,t,n){if(n===void 0&&(n=!1),!n&&!Ai(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=gu(e[r],t[r]);else if(Ai(t))for(var r in t)e[r]=gu(e[r],t[r]);return e}function qc(e,t){Object.defineProperty(e,"toString",{value:t})}function Xi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var X1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Xi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),Ao=new Map,pa=new Map,Gs=1,vo=function(e){if(Ao.has(e))return Ao.get(e);for(;pa.has(Gs);)Gs++;var t=Gs++;return Ao.set(e,t),pa.set(t,e),t},Y1=function(e,t){Ao.set(e,t),pa.set(t,e)},J1="style[".concat(Tr,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),Z1=new RegExp("^".concat(Tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ex=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},tx=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(Z1);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Y1(c,u),ex(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function nx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Hm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){return Array.from(s.querySelectorAll("style[".concat(Tr,"]"))).at(-1)}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Tr,"active"),r.setAttribute("data-styled-version","6.0.1");var a=nx();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},rx=function(){function e(t){this.element=Hm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Xi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ix=function(){function e(t){this.element=Hm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ox=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ff=Wc,ax={isServer:!Wc,useCSSOMInjection:!I1},ha=function(){function e(t,n,r){t===void 0&&(t=_r),n===void 0&&(n={});var i=this;this.options=Re(Re({},ax),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Wc&&Ff&&(Ff=!1,function(o){for(var a=document.querySelectorAll(J1),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Tr)!=="active"&&(tx(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),qc(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(d){var f=function(g){return pa.get(g)}(d);if(f===void 0)return"continue";var y=o.names.get(f),v=a.getGroup(d);if(y===void 0||v.length===0)return"continue";var w="".concat(Tr,".g").concat(d,'[id="').concat(f,'"]'),k="";y!==void 0&&y.forEach(function(g){g.length>0&&(k+="".concat(g,","))}),l+="".concat(v).concat(w,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},c=0;c<s;c++)u(c);return l}(i)})}return e.registerId=function(t){return vo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new ox(i):r?new rx(i):new ix(i)}(this.options),new X1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(vo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(vo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(vo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),sx=/&/g,lx=/^\s*\/\/.*$/gm;function Bm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Bm(n.children,t)),n})}function ux(e){var t,n,r,i=e===void 0?_r:e,o=i.options,a=o===void 0?_r:o,s=i.plugins,l=s===void 0?Vc:s,u=function(f,y,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===ns&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(sx,n).replace(r,u))}),a.prefix&&c.push(z1),c.push(T1);var d=function(f,y,v,w){y===void 0&&(y=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var k=f.replace(lx,""),g=j1(v||y?"".concat(v," ").concat(y," { ").concat(k," }"):k);a.namespace&&(g=Bm(g,a.namespace));var p=[];return da(g,_1(c.concat(R1(function(m){return p.push(m)})))),p};return d.hash=l.length?l.reduce(function(f,y){return y.name||Xi(15),ur(f,y.name)},5381).toString():"",d}var cx=new ha,mu=ux(),Um=pt.createContext({shouldForwardProp:void 0,styleSheet:cx,stylis:mu});Um.Consumer;pt.createContext(void 0);function vu(){return T.useContext(Um)}var Wm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=mu);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,qc(this,function(){throw Xi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=mu),this.name+t.hash},e}(),dx=function(e){return e>="A"&&e<="Z"};function Hf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;dx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Vm=function(e){return e==null||e===!1||e===""},Km=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Vm(o)&&(Array.isArray(o)&&o.isCss||Rr(o)?r.push("".concat(Hf(i),":"),o,";"):Ai(o)?r.push.apply(r,Pr(Pr(["".concat(i," {")],Km(o),!1),["}"],!1)):r.push("".concat(Hf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in N1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function mn(e,t,n,r){if(Vm(e))return[];if(Gc(e))return[".".concat(e.styledComponentId)];if(Rr(e)){if(!Rr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return mn(i,t,n,r)}var o;return e instanceof Wm?n?(e.inject(n,r),[e.getName(r)]):[e]:Ai(e)?Km(e):Array.isArray(e)?e.flatMap(function(a){return mn(a,t,n,r)}):[e.toString()]}function Gm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Rr(n)&&!Gc(n))return!1}return!0}var fx=Im("6.0.1"),px=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Gm(t),this.componentId=n,this.baseHash=ur(fx,n),this.baseStyle=r,ha.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Tn(i,this.staticRulesId);else{var o=fa(mn(this.rules,t,n,r)),a=hu(ur(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=Tn(i,a),this.staticRulesId=a}else{for(var l=ur(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=fa(mn(d,t,n,r));l=ur(l,f),u+=f}}if(u){var y=hu(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=Tn(i,y)}}return i},e}(),Qc=pt.createContext(void 0);Qc.Consumer;var qs={};function hx(e,t,n){var r=Gc(e),i=e,o=!Ks(e),a=t.attrs,s=a===void 0?Vc:a,l=t.componentId,u=l===void 0?function(x,b){var C=typeof x!="string"?"sc":Nf(x);qs[C]=(qs[C]||0)+1;var E="".concat(C,"-").concat(Kc("6.0.1"+C+qs[C]));return b?"".concat(b,"-").concat(E):E}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(x){return Ks(x)?"styled.".concat(x):"Styled(".concat(H1(x),")")}(e):c,f=t.displayName&&t.componentId?"".concat(Nf(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;v=function(x,b){return w(x,b)&&k(x,b)}}else v=w}var g=new px(n,f,r?i.componentStyle:void 0);g.isStatic&&s.length;function p(x,b){return function(C,E,P,R){var z=C.attrs,A=C.componentStyle,H=C.defaultProps,D=C.foldedComponentIds,$=C.styledComponentId,j=C.target,B=pt.useContext(Qc),W=vu(),L=C.shouldForwardProp||W.shouldForwardProp,N=function(Vt,Ge,Pt){for(var Vr,kn=Re(Re({},Ge),{className:void 0,theme:Pt}),ms=0;ms<Vt.length;ms+=1){var Ji=Rr(Vr=Vt[ms])?Vr(kn):Vr;for(var Kt in Ji)kn[Kt]=Kt==="className"?Tn(kn[Kt],Ji[Kt]):Kt==="style"?Re(Re({},kn[Kt]),Ji[Kt]):Ji[Kt]}return Ge.className&&(kn.className=Tn(kn.className,Ge.className)),kn}(z,E,zm(E,B,H)||_r),F=N.as||j,Q={};for(var K in N)N[K]===void 0||K[0]==="$"||K==="as"||K==="theme"||(K==="forwardedAs"?Q.as=N.forwardedAs:L&&!L(K,F)||(Q[K]=N[K]));var Et=function(Vt,Ge){var Pt=vu(),Vr=Vt.generateAndInjectStyles(Ge,Pt.styleSheet,Pt.stylis);return Vr}(A,N),$e=Tn(D,$);return Et&&($e+=" "+Et),N.className&&($e+=" "+N.className),Q[Ks(F)&&!Nm.has(F)?"class":"className"]=$e,Q.ref=P,T.createElement(F,Q)}(m,x,b)}p.displayName=d;var m=pt.forwardRef(p);return m.attrs=y,m.componentStyle=g,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?Tn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(b){for(var C=[],E=1;E<arguments.length;E++)C[E-1]=arguments[E];for(var P=0,R=C;P<R.length;P++)gu(b,R[P],!0);return b}({},i.defaultProps,x):x}}),qc(m,function(){return".".concat(m.styledComponentId)}),o&&Fm(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Bf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Uf=function(e){return Object.assign(e,{isCss:!0})};function ge(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Rr(e)||Ai(e)){var r=e;return Uf(mn(Bf(Vc,Pr([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?mn(i):Uf(mn(Bf(i,t)))}function yu(e,t,n){if(n===void 0&&(n=_r),!t)throw Xi(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,ge.apply(void 0,Pr([i],o,!1)))};return r.attrs=function(i){return yu(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return yu(e,t,Re(Re({},n),i))},r}var qm=function(e){return yu(hx,e)},S=qm;Nm.forEach(function(e){S[e]=qm(e)});var gx=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Gm(t),ha.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(fa(mn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ha.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function mx(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ge.apply(void 0,Pr([e],t,!1)),i="sc-global-".concat(Kc(JSON.stringify(r))),o=new gx(r,i),a=function(l){var u=vu(),c=pt.useContext(Qc),d=pt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(d,l,u.styleSheet,c,u.stylis),(pt.useInsertionEffect||pt.useLayoutEffect)(function(){if(!u.styleSheet.server)return s(d,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function s(l,u,c,d,f){if(o.isStatic)o.renderStyles(l,M1,c,f);else{var y=Re(Re({},u),{theme:zm(u,d,a.defaultProps)});o.renderStyles(l,y,c,f)}}return pt.memo(a)}function Qm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=fa(ge.apply(void 0,Pr([e],t,!1))),i=Kc(r);return new Wm(i,r)}const O="1000px",J=ge`
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
`;const Xc=ge`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
`,Ut=ge`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`,pe=ge`
  font-family: Gramatika-Regular, sans-serif;
`,Yc=ge`
  font-family: Gramatika-Bold, sans-serif;
`,Wr=ge`
  font-family: Plus_Jakarta_Sans-Regular, sans-serif;
`,Vn=ge`
  font-family: Gramatika-Medium, sans-serif;
`,vx=Qm`
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
`,yx=Qm`
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
`;const Xm=ge`
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
`;const Jc=ge`
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
`,Zc=ge`
  ${J};
  color: ${te.blackColor};
  font-weight: 400;
  font-size: calc(20vw / 14.4);
  font-style: normal;
  line-height: 2.2;

  @media (max-width: ${O}) {
    font-size: calc(20vw / 5.09);
  }
`,yt=()=>{const[e,t]=T.useState(null);return T.useEffect(()=>{const n=()=>{const r=window.innerWidth;t(r<=parseInt(O))};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e};function wx(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const Wf={};function wu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Wf[t[0]]||(typeof t[0]=="string"&&(Wf[t[0]]=new Date),wx(...t))}const Ym=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function Vf(e,t,n){e.loadNamespaces(t,Ym(e,n))}function Kf(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,Ym(e,r))}function xx(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],i=t.options?t.options.fallbackLng:!1,o=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const u=t.services.backendConnector.state[`${s}|${l}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!i||a(o,e)))}function Sx(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(wu("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(i,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,e))return!1}}):xx(e,t,n)}const kx=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,bx={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Cx=e=>bx[e],$x=e=>e.replace(kx,Cx);let xu={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:$x};function Ox(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xu={...xu,...e}}function Ex(){return xu}let Jm;function Px(e){Jm=e}function jx(){return Jm}const Lx={type:"3rdParty",init(e){Ox(e.options.react),Px(e)}},Zm=T.createContext();class Tx{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const _x=(e,t)=>{const n=T.useRef();return T.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function as(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:i}=T.useContext(Zm)||{},o=n||r||jx();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new Tx),!o){wu("You will need to pass in an i18next instance by using initReactI18next");const m=(b,C)=>typeof C=="string"?C:C&&typeof C=="object"&&typeof C.defaultValue=="string"?C.defaultValue:Array.isArray(b)?b[b.length-1]:b,x=[m,{},!1];return x.t=m,x.i18n={},x.ready=!1,x}o.options.react&&o.options.react.wait!==void 0&&wu("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...Ex(),...o.options.react,...t},{useSuspense:s,keyPrefix:l}=a;let u=e||i||o.options&&o.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(u);const c=(o.isInitialized||o.initializedStoreOnce)&&u.every(m=>Sx(m,o,a));function d(){return o.getFixedT(t.lng||null,a.nsMode==="fallback"?u:u[0],l)}const[f,y]=T.useState(d);let v=u.join();t.lng&&(v=`${t.lng}${v}`);const w=_x(v),k=T.useRef(!0);T.useEffect(()=>{const{bindI18n:m,bindI18nStore:x}=a;k.current=!0,!c&&!s&&(t.lng?Kf(o,t.lng,u,()=>{k.current&&y(d)}):Vf(o,u,()=>{k.current&&y(d)})),c&&w&&w!==v&&k.current&&y(d);function b(){k.current&&y(d)}return m&&o&&o.on(m,b),x&&o&&o.store.on(x,b),()=>{k.current=!1,m&&o&&m.split(" ").forEach(C=>o.off(C,b)),x&&o&&x.split(" ").forEach(C=>o.store.off(C,b))}},[o,v]);const g=T.useRef(!0);T.useEffect(()=>{k.current&&!g.current&&y(d),g.current=!1},[o,l]);const p=[f,o,c];if(p.t=f,p.i18n=o,p.ready=c,c||!c&&!s)return p;throw new Promise(m=>{t.lng?Kf(o,t.lng,u,()=>m()):Vf(o,u,()=>m())})}function Rx(e){let{i18n:t,defaultNS:n,children:r}=e;const i=T.useMemo(()=>({i18n:t,defaultNS:n}),[t,n]);return T.createElement(Zm.Provider,{value:i},r)}const ev="https://twitter.com/ThothPay",tv="https://www.facebook.com/profile.php?id=100095060907471",zx="mailto:service@thothpay.com",Nx="https://example.com/instagram",nv="https://example.com/telegram",Ix="https://thothpay.com/merchant",Mx="https://example.com/signup",Dx="https://thothpay.com/merchant",Ax="https://docs.thothpay.com",Fx="https://docs.thothpay.com",Hx="https://docs.thothpay.com",Bx="https://thothpay.com/swagger/index.html",Ux="https://docs.thothpay.com",Wx="https://thothpay.com/swagger/index.html",Vx="https://docs.thothpay.com",Kx="https://example.com/get-support",Gx="https://example.com/contact-team",qx="https://example.com/how-it-works",Qx="https://example.com/featured",Xx="https://example.com/partnership",Yx="https://example.com/business-relation",Jx="https://example.com/events",Zx="https://example.com/blog",eS="https://example.com/podcast",tS="https://example.com/invite-friend",nS="https://example.com/privacy-policy",rS="https://example.com/terms-condition",iS="https://docs.thothpay.com",oS="https://docs.thothpay.com",aS=S.a`
  ${J};
  ${pe};
  color: ${e=>e.color};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
`,wt=({href:e,target:t,rel:n,children:r,...i})=>h.jsx(aS,{href:e,target:t,rel:n,...i,children:r}),ed=["telegram","twitter","facebook","email"],Nr={playIconWhite:"images/common/play-icon-white.svg",playIconGreen:"images/common/play-icon-green.svg"},Gf={src:"images/common/logo.svg",alt:"logo"},ei={telegram:{darkSrc:"images/common/telegram-dark.svg",lightSrc:"images/common/telegram-light.svg",alt:"telegram logo"},twitter:{darkSrc:"images/common/twitter-dark.svg",lightSrc:"images/common/twitter-light.svg",alt:"twitter logo"},facebook:{darkSrc:"images/common/facebook-dark.svg",lightSrc:"images/common/facebook-light.svg",alt:"facebook logo"},instagram:{darkSrc:"images/common/instagram-dark.svg",alt:"instagram logo"},email:{darkSrc:"images/common/email-dark.svg",lightSrc:"images/common/email-light.svg",alt:"email logo"}},ga={src:"images/header/burger-icon.svg",alt:"burger menu icon"},ma={src:"images/header/language-icon-white.svg",alt:"language icon",srcGray:"images/header/language-icon-gray.svg"},sS={background:"images/header/check-mark.svg"},cr={backgroundL:"images/main-page/main-screen/screen-L.svg",backgroundS:"images/main-page/main-screen/screen-S.svg",coinsL:"images/main-page/main-screen/coins-L.svg",coinsS:"images/main-page/main-screen/coins-S.svg",circle:"images/main-page/main-screen/circle.svg",wrapper:"images/main-page/main-screen/wrapper.svg"},It={backgroundL:"images/main-page/how-it-works/background-L.svg",backgroundS:"images/main-page/how-it-works/background-S.svg",leftLineL:"images/main-page/how-it-works/left-line-L.svg",leftLineS:"images/main-page/how-it-works/left-line-S.svg",rightLineL:"images/main-page/how-it-works/right-line-L.svg",rightLineS:"images/main-page/how-it-works/right-line-S.svg",stepOne:{src:"images/main-page/how-it-works/send-invoice.svg",alt:"send invoice"},stepTwo:{src:"images/main-page/how-it-works/payment.svg",alt:"payment"},stepThree:{src:"images/main-page/how-it-works/broadcast.svg",alt:"broadcast"}},qf={backgroundL:"images/main-page/how-it-works/advantages/background-L.svg",backgroundS:"images/main-page/how-it-works/advantages/background-S.svg"},qt={one:{image:"images/main-page/how-it-works/advantages/first-icon.svg",alt:"first icon"},two:{image:"images/main-page/how-it-works/advantages/second-icon.svg",alt:"second icon"},three:{image:"images/main-page/how-it-works/advantages/third-icon.svg",alt:"third icon"},four:{image:"images/main-page/how-it-works/advantages/fourth-icon.svg",alt:"fourth icon"}},dr={backgroundL:"images/main-page/products-and-service/description-L.svg",backgroundS:"images/main-page/products-and-service/description-S.svg",one:{src:"images/main-page/products-and-service/merchants-solution.svg",alt:"image one"},two:{src:"images/main-page/products-and-service/merchants-solution.svg",alt:"image two"},three:{src:"images/main-page/products-and-service/merchants-solution.svg",alt:"image three"},four:{src:"images/main-page/products-and-service/merchants-solution.svg",alt:"image four"}},fr={backgroundL:"images/main-page/products-and-service/mobile-wallet/background-L.svg",backgroundS:"images/main-page/products-and-service/mobile-wallet/background-S.svg",appStore:{src:"images/main-page/products-and-service/mobile-wallet/app-store.svg",alt:"apple store link"},googlePay:{src:"images/main-page/products-and-service/mobile-wallet/google-play.svg",alt:"google play link"}},He={background:"images/main-page/products-and-service/available-currencies/available-currencies.svg",one:{src:"images/main-page/products-and-service/available-currencies/bitcoin.svg",alt:"bitcoin icon"},two:{src:"images/main-page/products-and-service/available-currencies/bitcoin-lightning.svg",alt:"bitcoin lightning icon"},three:{src:"images/main-page/products-and-service/available-currencies/bitcoin-liquid.svg",alt:"bitcoin liquid icon"},four:{src:"images/main-page/products-and-service/available-currencies/binance-coin.svg",alt:"binance coin icon"},five:{src:"images/main-page/products-and-service/available-currencies/tron.svg",alt:"tron icon"},six:{src:"images/main-page/products-and-service/available-currencies/polygon.svg",alt:"polygon icon"},seven:{src:"images/main-page/products-and-service/available-currencies/stellar.svg",alt:"stellar icon"},eight:{src:"images/main-page/products-and-service/available-currencies/EURMTL.svg",alt:"EURMTL icon"},nine:{src:"images/main-page/products-and-service/available-currencies/USDT-ERC20.svg",alt:"USDT ERC20 icon"},ten:{src:"images/main-page/products-and-service/available-currencies/USDT-TRC20.svg",alt:"USDT TRC20 icon"},eleven:{src:"images/main-page/products-and-service/available-currencies/USDT-PLG20.svg",alt:"USDT PLG20 icon"},twelve:{src:"images/main-page/products-and-service/available-currencies/USDT-LIQUID.svg",alt:"USDT LIQUID icon"},thirteen:{src:"images/main-page/products-and-service/available-currencies/BUSD-BEP20.svg",alt:"BUSD BEP20 icon"}},Qf={backgroundL:"images/main-page/products-and-service/slide/background-L.svg",backgroundS:"images/main-page/products-and-service/slide/background-S.svg"},ct={backgroundL:"images/main-page/use-cases-of-our-products/background-L.svg",backgroundS:"images/main-page/use-cases-of-our-products/background-S.svg",slide:"images/main-page/use-cases-of-our-products/slide.svg",one:{one:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionOne.svg",alt:"icon one"},two:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionTwo.svg",alt:"icon two"},three:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionThree.svg",alt:"icon three"},four:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionFour.svg",alt:"icon four"},five:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionFive.svg",alt:"icon five"},six:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionSix.svg",alt:"icon six"}},two:{one:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionOne.svg",alt:"icon one"}},three:{one:{src:"images/main-page/use-cases-of-our-products/merchantsSolutionTwo.svg",alt:"icon one"}}},Su={background:"images/main-page/use-cases-of-our-products/mobile-slider/background-S.svg",right:{src:"images/main-page/use-cases-of-our-products/mobile-slider/slider-button.svg",alt:"arrow right"}},En={backgroundL:"images/main-page/use-cases-of-our-products/news/background-L.svg",backgroundS:"images/main-page/use-cases-of-our-products/news/background-S.svg",one:{src:"images/test/test-photo.jpg",alt:"image 1"},two:{src:"images/test/test-photo.jpg",alt:"image 2"},three:{src:"images/test/test-photo.jpg",alt:"image 3"},four:{src:"images/test/test-photo.jpg",alt:"image 4"},five:{src:"images/test/test-photo.jpg",alt:"image 5"}},yo={existingClient:{src:"images/main-page/use-cases-of-our-products/have-a-question/existing-client.svg",alt:"existing client"},newClient:{src:"images/main-page/use-cases-of-our-products/have-a-question/new-client.svg",alt:"new client"}},{greenColor:pr,lightGreenColor:lS,whiteColor:rv}=te,uS=S.section`
  box-sizing: border-box;
  margin: 0 auto 7vw;
  position: relative;
  background-image: url(${cr.backgroundL});
  ${Ut};
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
`,cS=S.div`
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
    ${Ut};
  }
`,dS=S.div`
  border-radius: 50%;
  bottom: -5vw;
  left: 16vw;
  position: absolute;
  z-index: 1;
  width: 8.5vw;
  height: 8.5vw;
  background-image: url(${cr.circle});
  ${Ut};

  @media (max-width: ${O}) {
    bottom: -6vw;
    left: 50%;
    transform: translateX(-50%);
    width: 12vw;
    height: 12vw;
  }
`,fS=S.p`
  ${J};
  margin: 0 0 1.9vw;
  color: rgba(255, 255, 255, 0.5);
  ${pe};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
`,pS=S.h1`
  ${J};
  color: ${rv};
  font-size: 3.89vw;
  ${Yc};
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;
  text-transform: uppercase;
  text-align: left;
  word-break: break-word;

  @media (max-width: ${O}) {
    font-size: 9.84vw;
  }
`,hS=S.p`
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
`,gS=S(wt)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: calc(20vw / 14.4);
  background: linear-gradient(
    133deg,
    ${pr} 0%,
    ${lS} 100%
  );

  @media (max-width: ${O}) {
    padding: calc(12vw / 5.08);
  }
`,mS=S.span`
  ${J};
  margin-right: calc(20vw / 14.4);
  color: ${rv};
  font-size: 1.11vw;
  ${Yc};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${O}) {
    margin-right: calc(12vw / 5.08);
    font-size: 3.15vw;
  }
`,vS=S.div`
  ${zr};
  width: 1.18vw;
  height: 1.04vw;
  background-image: url(${Nr.playIconWhite});

  @media (max-width: ${O}) {
    width: 3.35vw;
    height: 2.95vw;
  }
`,yS=T.forwardRef((e,t)=>{const{t:n}=as(),r=yt();return h.jsxs(uS,{className:"main-screen",ref:t,children:[h.jsxs(cS,{children:[r!==null&&!r&&h.jsx(fS,{children:n("mainScreen.span")}),h.jsx(pS,{children:n("mainScreen.title")}),h.jsx(hS,{children:n("mainScreen.text")}),h.jsx(gS,{color:"transparent",href:Dx,target:"_blank",rel:"noopener noreferrer",children:h.jsxs(h.Fragment,{children:[h.jsx(mS,{children:n("mainScreen.button")}),h.jsx(vS,{})]})})]}),h.jsx(dS,{})]})}),wS=S("h3")`
  ${J};
  ${Vn};
  font-style: normal;
  font-weight: 500;
  word-wrap: break-word;
`,Kn=({children:e,...t})=>h.jsx(wS,{...t,children:e}),{lightGrayColor:iv}=te,xS=S.div`
  position: relative;
  z-index: 1;
  max-width: 20.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${O}) {
    max-width: 55.33vw;
  }
`,SS=S(Kn)`
  width: 100%;
  color: ${iv};
  text-align: center;
  font-size: calc(26vw / 14.4);
  line-height: 1.5;
  letter-spacing: -0.52px;

  @media (max-width: ${O}) {
    width: 100%;
    font-size: calc(26vw / 5.08);
    margin: 5vw 0 0 0;
  }
`,kS=S.p`
  ${J};
  margin: 1.11vw 0 2.85vw;
  color: ${iv};
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
`,bS=S.img`
  margin-top: ${({$index:e})=>e==="one"?"3.9vw":e==="two"?"2.7vw":"0"};
  margin-bottom: 2vw;
  width: ${({$index:e})=>e==="one"?"7.4vw":e==="two"?"8.6vw":"11.3vw"};
  height: ${({$index:e})=>e==="one"?"7.4vw":e==="two"?"8.6vw":"11.3vw"};

  @media (max-width: ${O}) {
    margin-top: 4vw;
    width: ${({$index:e})=>e==="one"?"20.86vw":e==="two"?"24.56vw":"32.08vw"};
    height: ${({$index:e})=>e==="one"?"20.86vw":e==="two"?"24.56vw":"32.08vw"};
  }
`,Qs=({index:e,content:t,image:n})=>h.jsxs(xS,{children:[h.jsx(bS,{$index:e,src:n.src,alt:n.alt}),h.jsx(SS,{children:t.subtitle}),h.jsx(kS,{children:t.text})]}),{whiteColor:td}=te,CS=S.div`
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
    border-bottom: 0.5px ${td} solid;
  }

  &:last-child {
    border: none;
  }
`,$S=S.div`
  width: 100%;
  min-height: 3.56vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${O}) {
    width: 100%;
  }
`,OS=S(Kn)`
  color: ${td};
  font-size: calc(26vw / 14.4);
  line-height: 0.96;
  text-align: left;

  @media (max-width: ${O}) {
    line-height: 0.83;
    font-size: calc(30vw / 5.08);
  }
`,ES=S.p`
  ${J};
  margin: 2.5vw 0 0 0;
  color: ${td};
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
`,PS=({subtitle:e,text:t,svg:n})=>h.jsxs(CS,{children:[h.jsxs($S,{children:[n,h.jsx(OS,{children:e})]}),h.jsx(ES,{children:t})]}),jS=S.div`
  background-image: url(${qf.backgroundL});
  //border-radius: 1.6vw;
  border-radius: 1.6vw 1.6vw 0 0;
  ${Ut};
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
    background-image: url(${qf.backgroundS});
    flex-direction: column;
  }
`,LS=S.div`
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
`,TS=S.img`
  width: 3.75vw;
  height: 3.75vw;
  margin-right: 1vw;

  @media (max-width: ${O}) {
    margin-right: 5vw;
    width: 13.95vw;
    height: 13.95vw;
  }
`,_S=({advantages:e})=>h.jsx(jS,{children:h.jsx(LS,{children:e.map(t=>h.jsx(PS,{svg:h.jsx(TS,{src:t.image,alt:t.alt}),subtitle:t.subtitle,text:t.text},t.index))})}),RS=S.h2`
  ${J};
  text-align: center;
  font-size: calc(50vw / 14.4);
  ${Vn};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -1px;
  color: ${e=>e.color};

  @media (max-width: ${O}) {
    font-size: calc(50vw / 5.08);
    line-height: 1.2;
  }
`,Wt=({children:e,...t})=>h.jsx(RS,{...t,children:e}),zS=S.p`
  ${J};
  text-align: center;
  font-size: calc(20vw / 14.05);
  ${pe};
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.color};

  @media (max-width: ${O}) {
    ${Wr};
    font-size: calc(18vw / 5.08);
    line-height: 1.5;
  }
`,nd=({children:e,...t})=>h.jsx(zS,{...t,children:e}),{darkGrayColor:Xf}=te,ti={text:"Brief description of how the app works",stepOne:{subtitle:"Send invoice",text:"Merchant issues an invoice in their local currency"},stepTwo:{subtitle:"Payment",text:"The user pays in the currency in which it is convenient for him. We take care of all the difficulties with overpayments and underpayments."},stepThree:{subtitle:"Broadcast",text:"Conversion and withdrawal, the merchant at any time withdraws his funds to his wallet in the currency in which he is comfortable."},advantages:[{index:"1",subtitle:"EU Regulated",text:"We support KYC compliance for operation in regulated regions.",image:qt.one.image,alt:qt.one.alt},{index:"2",subtitle:"All types of crypto",text:"Bitcoin, altcoins and stable coins are supported.",image:qt.two.image,alt:qt.two.alt},{index:"3",subtitle:"Major Blockchains",text:"Bitcoin, Lightning Network, Liquid Network, Ethereum, Polygon,  BSC and more.",image:qt.three.image,alt:qt.three.alt},{index:"4",subtitle:"Free of Charge",text:"All outgoing transactions, transfers and payouts in crypto are free of charge.",image:qt.four.image,alt:qt.four.alt}]},NS=S.div`
  position: relative;
  margin: 0 auto 2vw;
  ${Xc};
  width: 93.54vw;
  height: auto;
  background-image: url(${It.backgroundL});

  @media (max-width: ${O}) {
    padding: 16.7vw 0 5vw;
    width: 90.55vw;
    background-image: url(${It.backgroundS});
  }
`,IS=S(nd)`
  margin: 0.7vw 0 1.71vw;

  @media (max-width: ${O}) {
    margin-bottom: 4.72vw;
  }
`,MS=S.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;

  @media (max-width: ${O}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,Yf=S.div`
  position: relative;

  @media (max-width: ${O}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,DS=S.div`
  ${Xm};
  background-image: url(${It.leftLineL});
  top: 4vw;
  left: 15vw;
  width: 20.83vw;
  height: 6.04vw;

  @media (max-width: ${O}) {
    top: 25vw;
    left: 7vw;
    height: calc(100% - 20.86vw + 15vw);
    background-image: url(${It.leftLineS});
  }
`,AS=S.div`
  ${Xm};
  background-image: url(${It.rightLineL});
  top: 4vw;
  right: -14.5vw;
  width: 19vw;
  height: 6.04vw;

  @media (max-width: ${O}) {
    top: 30vw;
    right: 3vw;
    height: calc(100% - 24.56vw + 15vw);
    background-image: url(${It.rightLineS});
  }
`,FS=({id:e,title:t})=>h.jsxs("section",{id:e,children:[h.jsxs(NS,{children:[h.jsx(Wt,{color:Xf,children:t}),h.jsx(IS,{color:Xf,children:ti.text}),h.jsxs(MS,{children:[h.jsxs(Yf,{children:[h.jsx(DS,{}),h.jsx(Qs,{index:"one",image:It.stepOne,content:ti.stepOne})]}),h.jsxs(Yf,{children:[h.jsx(AS,{}),h.jsx(Qs,{index:"two",image:It.stepTwo,content:ti.stepTwo})]}),h.jsx(Qs,{index:"three",image:It.stepThree,content:ti.stepThree})]})]}),h.jsx(_S,{advantages:ti.advantages})]}),{darkColor:HS,whiteColor:BS,darkGrayColor:US}=te,Jf={title:"Mobile Wallet",text:"A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",button:"Download"},WS=S.section`
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  background-color: ${HS};
  min-height: 41.53vw;

  @media (max-width: ${O}) {
    background-color: ${US};
    box-sizing: border-box;
    min-height: 270.66vw;
    flex-direction: column;
  }
`,VS=S.div`
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
  ${Ut};
  background-image: url(${fr.backgroundL});

  @media (max-width: ${O}) {
    box-sizing: border-box;
    padding: 0 9vw 4.14vw;
    background-image: url(${fr.backgroundS});
    justify-content: end;
    align-items: start;
  }
`,KS=S.p`
  max-width: 37%;
  ${Jc};
  margin: 3.06vw 0 3.75vw;

  @media (max-width: ${O}) {
    max-width: 90%;
    margin: 8.82vw 0;
  }
`,GS=S.div``,Zf=S.img`
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
`,ep=S(wt)`
  margin-right: calc(72vw / 14.4);
  pointer-events: none;
  text-decoration: none; 
  cursor: not-allowed;
  opacity: 0.3;
}

  @media (max-width: ${O}) {
    margin-right: calc(72vw / 14.4);
  }
`,qS=()=>h.jsx(WS,{children:h.jsxs(VS,{children:[h.jsx(Wt,{color:BS,children:Jf.title}),h.jsx(KS,{children:Jf.text}),h.jsxs(GS,{children:[h.jsx(ep,{color:"transparent",href:Ux,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Zf,{src:fr.googlePay.src,alt:fr.googlePay.alt})}),h.jsx(ep,{color:"transparent",href:Wx,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Zf,{src:fr.appStore.src,alt:fr.appStore.alt})})]})]})});var ov={},av={},ss={},sv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(sv);var QS="Expected a function",tp=0/0,XS="[object Symbol]",YS=/^\s+|\s+$/g,JS=/^[-+]0x[0-9a-f]+$/i,ZS=/^0b[01]+$/i,ek=/^0o[0-7]+$/i,tk=parseInt,nk=typeof rn=="object"&&rn&&rn.Object===Object&&rn,rk=typeof self=="object"&&self&&self.Object===Object&&self,ik=nk||rk||Function("return this")(),ok=Object.prototype,ak=ok.toString,sk=Math.max,lk=Math.min,Xs=function(){return ik.Date.now()};function uk(e,t,n){var r,i,o,a,s,l,u=0,c=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(QS);t=np(t)||0,ku(n)&&(c=!!n.leading,d="maxWait"in n,o=d?sk(np(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function y(C){var E=r,P=i;return r=i=void 0,u=C,a=e.apply(P,E),a}function v(C){return u=C,s=setTimeout(g,t),c?y(C):a}function w(C){var E=C-l,P=C-u,R=t-E;return d?lk(R,o-P):R}function k(C){var E=C-l,P=C-u;return l===void 0||E>=t||E<0||d&&P>=o}function g(){var C=Xs();if(k(C))return p(C);s=setTimeout(g,w(C))}function p(C){return s=void 0,f&&r?y(C):(r=i=void 0,a)}function m(){s!==void 0&&clearTimeout(s),u=0,r=l=i=s=void 0}function x(){return s===void 0?a:p(Xs())}function b(){var C=Xs(),E=k(C);if(r=arguments,i=this,l=C,E){if(s===void 0)return v(l);if(d)return s=setTimeout(g,t),y(l)}return s===void 0&&(s=setTimeout(g,t)),a}return b.cancel=m,b.flush=x,b}function ku(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ck(e){return!!e&&typeof e=="object"}function dk(e){return typeof e=="symbol"||ck(e)&&ak.call(e)==XS}function np(e){if(typeof e=="number")return e;if(dk(e))return tp;if(ku(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ku(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(YS,"");var n=ZS.test(e);return n||ek.test(e)?tk(e.slice(2),n?2:8):JS.test(e)?tp:+e}var fk=uk,lv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)t.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(lv);var ls=lv.exports,I={};Object.defineProperty(I,"__esModule",{value:!0});I.checkSpecKeys=I.checkNavigable=I.changeSlide=I.canUseDOM=I.canGoNext=void 0;I.clamp=uv;I.swipeStart=I.swipeMove=I.swipeEnd=I.slidesOnRight=I.slidesOnLeft=I.slideHandler=I.siblingDirection=I.safePreventDefault=I.lazyStartIndex=I.lazySlidesOnRight=I.lazySlidesOnLeft=I.lazyEndIndex=I.keyHandler=I.initializedState=I.getWidth=I.getTrackLeft=I.getTrackCSS=I.getTrackAnimateCSS=I.getTotalSlides=I.getSwipeDirection=I.getSlideCount=I.getRequiredLazySlides=I.getPreClones=I.getPostClones=I.getOnDemandLazySlides=I.getNavigableIndexes=I.getHeight=I.extractObject=void 0;var pk=hk(T);function hk(e){return e&&e.__esModule?e:{default:e}}function rp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rp(Object(n),!0).forEach(function(r){gk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uv(e,t,n){return Math.max(t,Math.min(e,n))}var Mn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};I.safePreventDefault=Mn;var rd=function(t){for(var n=[],r=id(t),i=od(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};I.getOnDemandLazySlides=rd;var mk=function(t){for(var n=[],r=id(t),i=od(t),o=r;o<i;o++)n.push(o);return n};I.getRequiredLazySlides=mk;var id=function(t){return t.currentSlide-cv(t)};I.lazyStartIndex=id;var od=function(t){return t.currentSlide+dv(t)};I.lazyEndIndex=od;var cv=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};I.lazySlidesOnLeft=cv;var dv=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};I.lazySlidesOnRight=dv;var va=function(t){return t&&t.offsetWidth||0};I.getWidth=va;var ad=function(t){return t&&t.offsetHeight||0};I.getHeight=ad;var sd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,a;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),a=Math.round(o*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?"left":a>=135&&a<=225?"right":n===!0?a>=35&&a<=135?"up":"down":"vertical"};I.getSwipeDirection=sd;var ld=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};I.canGoNext=ld;var vk=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};I.extractObject=vk;var yk=function(t){var n=pk.default.Children.count(t.children),r=t.listRef,i=Math.ceil(va(r)),o=t.trackRef&&t.trackRef.node,a=Math.ceil(va(o)),s;if(t.vertical)s=i;else{var l=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(l*=i/100),s=Math.ceil((i-l)/t.slidesToShow)}var u=r&&ad(r.querySelector('[data-index="0"]')),c=u*t.slidesToShow,d=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(d=n-1-t.initialSlide);var f=t.lazyLoadedList||[],y=rd(ae(ae({},t),{},{currentSlide:d,lazyLoadedList:f}));f=f.concat(y);var v={slideCount:n,slideWidth:s,listWidth:i,trackWidth:a,currentSlide:d,slideHeight:u,listHeight:c,lazyLoadedList:f};return t.autoplaying===null&&t.autoplay&&(v.autoplaying="playing"),v};I.initializedState=yk;var wk=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,a=t.index,s=t.slideCount,l=t.lazyLoad,u=t.currentSlide,c=t.centerMode,d=t.slidesToScroll,f=t.slidesToShow,y=t.useCSS,v=t.lazyLoadedList;if(n&&r)return{};var w=a,k,g,p,m={},x={},b=o?a:uv(a,0,s-1);if(i){if(!o&&(a<0||a>=s))return{};a<0?w=a+s:a>=s&&(w=a-s),l&&v.indexOf(w)<0&&(v=v.concat(w)),m={animating:!0,currentSlide:w,lazyLoadedList:v,targetSlide:w},x={animating:!1,targetSlide:w}}else k=w,w<0?(k=w+s,o?s%d!==0&&(k=s-s%d):k=0):!ld(t)&&w>u?w=k=u:c&&w>=s?(w=o?s:s-1,k=o?0:s-1):w>=s&&(k=w-s,o?s%d!==0&&(k=0):k=s-f),!o&&w+f>=s&&(k=s-f),g=Hi(ae(ae({},t),{},{slideIndex:w})),p=Hi(ae(ae({},t),{},{slideIndex:k})),o||(g===p&&(w=k),g=p),l&&(v=v.concat(rd(ae(ae({},t),{},{currentSlide:w})))),y?(m={animating:!0,currentSlide:k,trackStyle:ud(ae(ae({},t),{},{left:g})),lazyLoadedList:v,targetSlide:b},x={animating:!1,currentSlide:k,trackStyle:Fi(ae(ae({},t),{},{left:p})),swipeLeft:null,targetSlide:b}):m={currentSlide:k,trackStyle:Fi(ae(ae({},t),{},{left:p})),lazyLoadedList:v,targetSlide:b};return{state:m,nextState:x}};I.slideHandler=wk;var xk=function(t,n){var r,i,o,a,s,l=t.slidesToScroll,u=t.slidesToShow,c=t.slideCount,d=t.currentSlide,f=t.targetSlide,y=t.lazyLoad,v=t.infinite;if(a=c%l!==0,r=a?0:(c-d)%l,n.message==="previous")o=r===0?l:u-r,s=d-o,y&&!v&&(i=d-o,s=i===-1?c-1:i),v||(s=f-l);else if(n.message==="next")o=r===0?l:r,s=d+o,y&&!v&&(s=(d+l)%c+r),v||(s=f+l);else if(n.message==="dots")s=n.index*n.slidesToScroll;else if(n.message==="children"){if(s=n.index,v){var w=gv(ae(ae({},t),{},{targetSlide:s}));s>n.currentSlide&&w==="left"?s=s-c:s<n.currentSlide&&w==="right"&&(s=s+c)}}else n.message==="index"&&(s=Number(n.index));return s};I.changeSlide=xk;var Sk=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};I.keyHandler=Sk;var kk=function(t,n,r){return t.target.tagName==="IMG"&&Mn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};I.swipeStart=kk;var bk=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,a=n.swipeToSlide,s=n.verticalSwiping,l=n.rtl,u=n.currentSlide,c=n.edgeFriction,d=n.edgeDragged,f=n.onEdge,y=n.swiped,v=n.swiping,w=n.slideCount,k=n.slidesToScroll,g=n.infinite,p=n.touchObject,m=n.swipeEvent,x=n.listHeight,b=n.listWidth;if(!r){if(i)return Mn(t);o&&a&&s&&Mn(t);var C,E={},P=Hi(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var R=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!s&&!v&&R>10)return{scrolling:!0};s&&(p.swipeLength=R);var z=(l?-1:1)*(p.curX>p.startX?1:-1);s&&(z=p.curY>p.startY?1:-1);var A=Math.ceil(w/k),H=sd(n.touchObject,s),D=p.swipeLength;return g||(u===0&&(H==="right"||H==="down")||u+1>=A&&(H==="left"||H==="up")||!ld(n)&&(H==="left"||H==="up"))&&(D=p.swipeLength*c,d===!1&&f&&(f(H),E.edgeDragged=!0)),!y&&m&&(m(H),E.swiped=!0),o?C=P+D*(x/b)*z:l?C=P-D*z:C=P+D*z,s&&(C=P+D*z),E=ae(ae({},E),{},{touchObject:p,swipeLeft:C,trackStyle:Fi(ae(ae({},n),{},{left:C}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(E.swiping=!0,Mn(t)),E}};I.swipeMove=bk;var Ck=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,a=n.listWidth,s=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,d=n.scrolling,f=n.onSwipe,y=n.targetSlide,v=n.currentSlide,w=n.infinite;if(!r)return i&&Mn(t),{};var k=l?u/s:a/s,g=sd(o,l),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!o.swipeLength)return p;if(o.swipeLength>k){Mn(t),f&&f(g);var m,x,b=w?v:y;switch(g){case"left":case"up":x=b+Cu(n),m=c?bu(n,x):x,p.currentDirection=0;break;case"right":case"down":x=b-Cu(n),m=c?bu(n,x):x,p.currentDirection=1;break;default:m=b}p.triggerSlideHandler=m}else{var C=Hi(n);p.trackStyle=ud(ae(ae({},n),{},{left:C}))}return p};I.swipeEnd=Ck;var fv=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};I.getNavigableIndexes=fv;var bu=function(t,n){var r=fv(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};I.checkNavigable=bu;var Cu=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(l){if(t.vertical){if(l.offsetTop+ad(l)/2>t.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+va(l)/2>t.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var a=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,s=Math.abs(r.dataset.index-a)||1;return s}else return t.slidesToScroll};I.getSlideCount=Cu;var us=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};I.checkSpecKeys=us;var Fi=function(t){us(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=hv(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",l=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ae(ae({},o),{},{WebkitTransform:a,transform:s,msTransform:l})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};I.getTrackCSS=Fi;var ud=function(t){us(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Fi(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};I.getTrackAnimateCSS=ud;var Hi=function(t){if(t.unslick)return 0;us(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,a=t.slideCount,s=t.slidesToShow,l=t.slidesToScroll,u=t.slideWidth,c=t.listWidth,d=t.variableWidth,f=t.slideHeight,y=t.fade,v=t.vertical,w=0,k,g,p=0;if(y||t.slideCount===1)return 0;var m=0;if(i?(m=-yi(t),a%l!==0&&n+l>a&&(m=-(n>a?s-(n-a):a%l)),o&&(m+=parseInt(s/2))):(a%l!==0&&n+l>a&&(m=s-a%l),o&&(m=parseInt(s/2))),w=m*u,p=m*f,v?k=n*f*-1+p:k=n*u*-1+w,d===!0){var x,b=r&&r.node;if(x=n+yi(t),g=b&&b.childNodes[x],k=g?g.offsetLeft*-1:0,o===!0){x=i?n+yi(t):n,g=b&&b.children[x],k=0;for(var C=0;C<x;C++)k-=b&&b.children[C]&&b.children[C].offsetWidth;k-=parseInt(t.centerPadding),k+=g&&(c-g.offsetWidth)/2}}return k};I.getTrackLeft=Hi;var yi=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};I.getPreClones=yi;var pv=function(t){return t.unslick||!t.infinite?0:t.slideCount};I.getPostClones=pv;var hv=function(t){return t.slideCount===1?1:yi(t)+t.slideCount+pv(t)};I.getTotalSlides=hv;var gv=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+mv(t)?"left":"right":t.targetSlide<t.currentSlide-vv(t)?"right":"left"};I.siblingDirection=gv;var mv=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),i&&n%2===0&&(a+=1),a}return i?0:n-1};I.slidesOnRight=mv;var vv=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),!i&&n%2===0&&(a+=1),a}return i?n-1:0};I.slidesOnLeft=vv;var $k=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};I.canUseDOM=$k;var cs={};function $u(e){"@babel/helpers - typeof";return $u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$u(e)}Object.defineProperty(cs,"__esModule",{value:!0});cs.Track=void 0;var en=yv(T),Ys=yv(ls),Js=I;function yv(e){return e&&e.__esModule?e:{default:e}}function Ou(){return Ou=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ou.apply(this,arguments)}function Ok(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ip(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ek(e,t,n){return t&&ip(e.prototype,t),n&&ip(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Pk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Eu(e,t)}function Eu(e,t){return Eu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Eu(e,t)}function jk(e){var t=Tk();return function(){var r=ya(e),i;if(t){var o=ya(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Lk(this,i)}}function Lk(e,t){if(t&&($u(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Pu(e)}function Pu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Tk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ya(e){return ya=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ya(e)}function op(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?op(Object(n),!0).forEach(function(r){ju(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):op(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ju(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Zs=function(t){var n,r,i,o,a;t.rtl?a=t.slideCount-1-t.index:a=t.index,i=a<0||a>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(a-t.currentSlide)%t.slideCount===0,a>t.currentSlide-o-1&&a<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=a&&a<t.currentSlide+t.slidesToShow;var s;t.targetSlide<0?s=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?s=t.targetSlide-t.slideCount:s=t.targetSlide;var l=a===s;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},_k=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},el=function(t,n){return t.key||n},Rk=function(t){var n,r=[],i=[],o=[],a=en.default.Children.count(t.children),s=(0,Js.lazyStartIndex)(t),l=(0,Js.lazyEndIndex)(t);return en.default.Children.forEach(t.children,function(u,c){var d,f={message:"children",index:c,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(c)>=0?d=u:d=en.default.createElement("div",null);var y=_k(Fe(Fe({},t),{},{index:c})),v=d.props.className||"",w=Zs(Fe(Fe({},t),{},{index:c}));if(r.push(en.default.cloneElement(d,{key:"original"+el(d,c),"data-index":c,className:(0,Ys.default)(w,v),tabIndex:"-1","aria-hidden":!w["slick-active"],style:Fe(Fe({outline:"none"},d.props.style||{}),y),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})),t.infinite&&t.fade===!1){var k=a-c;k<=(0,Js.getPreClones)(t)&&a!==t.slidesToShow&&(n=-k,n>=s&&(d=u),w=Zs(Fe(Fe({},t),{},{index:n})),i.push(en.default.cloneElement(d,{key:"precloned"+el(d,n),"data-index":n,tabIndex:"-1",className:(0,Ys.default)(w,v),"aria-hidden":!w["slick-active"],style:Fe(Fe({},d.props.style||{}),y),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}}))),a!==t.slidesToShow&&(n=a+c,n<l&&(d=u),w=Zs(Fe(Fe({},t),{},{index:n})),o.push(en.default.cloneElement(d,{key:"postcloned"+el(d,n),"data-index":n,tabIndex:"-1",className:(0,Ys.default)(w,v),"aria-hidden":!w["slick-active"],style:Fe(Fe({},d.props.style||{}),y),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},zk=function(e){Pk(n,e);var t=jk(n);function n(){var r;Ok(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=t.call.apply(t,[this].concat(o)),ju(Pu(r),"node",null),ju(Pu(r),"handleRef",function(s){r.node=s}),r}return Ek(n,[{key:"render",value:function(){var i=Rk(this.props),o=this.props,a=o.onMouseEnter,s=o.onMouseOver,l=o.onMouseLeave,u={onMouseEnter:a,onMouseOver:s,onMouseLeave:l};return en.default.createElement("div",Ou({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(en.default.PureComponent);cs.Track=zk;var ds={};function Lu(e){"@babel/helpers - typeof";return Lu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Lu(e)}Object.defineProperty(ds,"__esModule",{value:!0});ds.Dots=void 0;var wo=wv(T),Nk=wv(ls),ap=I;function wv(e){return e&&e.__esModule?e:{default:e}}function sp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ik(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sp(Object(n),!0).forEach(function(r){Mk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ak(e,t,n){return t&&lp(e.prototype,t),n&&lp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Fk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Tu(e,t)}function Tu(e,t){return Tu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Tu(e,t)}function Hk(e){var t=Wk();return function(){var r=wa(e),i;if(t){var o=wa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Bk(this,i)}}function Bk(e,t){if(t&&(Lu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Uk(e)}function Uk(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Wk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wa(e){return wa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},wa(e)}var Vk=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},Kk=function(e){Fk(n,e);var t=Hk(n);function n(){return Dk(this,n),t.apply(this,arguments)}return Ak(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,a=i.onMouseOver,s=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,d=i.slideCount,f=i.currentSlide,y=Vk({slideCount:d,slidesToScroll:u,slidesToShow:c,infinite:l}),v={onMouseEnter:o,onMouseOver:a,onMouseLeave:s},w=[],k=0;k<y;k++){var g=(k+1)*u-1,p=l?g:(0,ap.clamp)(g,0,d-1),m=p-(u-1),x=l?m:(0,ap.clamp)(m,0,d-1),b=(0,Nk.default)({"slick-active":l?f>=x&&f<=p:f===x}),C={message:"dots",index:k,slidesToScroll:u,currentSlide:f},E=this.clickHandler.bind(this,C);w=w.concat(wo.default.createElement("li",{key:k,className:b},wo.default.cloneElement(this.props.customPaging(k),{onClick:E})))}return wo.default.cloneElement(this.props.appendDots(w),Ik({className:this.props.dotsClass},v))}}]),n}(wo.default.PureComponent);ds.Dots=Kk;var Ir={};function _u(e){"@babel/helpers - typeof";return _u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_u(e)}Object.defineProperty(Ir,"__esModule",{value:!0});Ir.PrevArrow=Ir.NextArrow=void 0;var xr=Sv(T),xv=Sv(ls),Gk=I;function Sv(e){return e&&e.__esModule?e:{default:e}}function xa(){return xa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xa.apply(this,arguments)}function up(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Sa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?up(Object(n),!0).forEach(function(r){qk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):up(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function bv(e,t,n){return t&&cp(e.prototype,t),n&&cp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Cv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ru(e,t)}function Ru(e,t){return Ru=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ru(e,t)}function $v(e){var t=Yk();return function(){var r=ka(e),i;if(t){var o=ka(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Qk(this,i)}}function Qk(e,t){if(t&&(_u(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xk(e)}function Xk(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Yk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ka(e){return ka=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ka(e)}var Jk=function(e){Cv(n,e);var t=$v(n);function n(){return kv(this,n),t.apply(this,arguments)}return bv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var a={key:"0","data-role":"none",className:(0,xv.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=xr.default.cloneElement(this.props.prevArrow,Sa(Sa({},a),s)):l=xr.default.createElement("button",xa({key:"0",type:"button"},a)," ","Previous"),l}}]),n}(xr.default.PureComponent);Ir.PrevArrow=Jk;var Zk=function(e){Cv(n,e);var t=$v(n);function n(){return kv(this,n),t.apply(this,arguments)}return bv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,Gk.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var a={key:"1","data-role":"none",className:(0,xv.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=xr.default.cloneElement(this.props.nextArrow,Sa(Sa({},a),s)):l=xr.default.createElement("button",xa({key:"1",type:"button"},a)," ","Next"),l}}]),n}(xr.default.PureComponent);Ir.NextArrow=Zk;var Ov=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var a=o[i];n.call(r,a[1],a[0])}},t}()}(),zu=typeof window<"u"&&typeof document<"u"&&window.document===document,ba=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),eb=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ba):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),tb=2;function nb(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function a(){eb(o)}function s(){var l=Date.now();if(n){if(l-i<tb)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=l}return s}var rb=20,ib=["top","right","bottom","left","width","height","size","weight"],ob=typeof MutationObserver<"u",ab=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=nb(this.refresh.bind(this),rb)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!zu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),ob?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!zu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=ib.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Ev=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Mr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||ba},Pv=fs(0,0,0,0);function Ca(e){return parseFloat(e)||0}function dp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Ca(o)},0)}function sb(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],a=e["padding-"+o];n[o]=Ca(a)}return n}function lb(e){var t=e.getBBox();return fs(0,0,t.width,t.height)}function ub(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Pv;var r=Mr(e).getComputedStyle(e),i=sb(r),o=i.left+i.right,a=i.top+i.bottom,s=Ca(r.width),l=Ca(r.height);if(r.boxSizing==="border-box"&&(Math.round(s+o)!==t&&(s-=dp(r,"left","right")+o),Math.round(l+a)!==n&&(l-=dp(r,"top","bottom")+a)),!db(e)){var u=Math.round(s+o)-t,c=Math.round(l+a)-n;Math.abs(u)!==1&&(s-=u),Math.abs(c)!==1&&(l-=c)}return fs(i.left,i.top,s,l)}var cb=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Mr(e).SVGGraphicsElement}:function(e){return e instanceof Mr(e).SVGElement&&typeof e.getBBox=="function"}}();function db(e){return e===Mr(e).document.documentElement}function fb(e){return zu?cb(e)?lb(e):ub(e):Pv}function pb(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(o.prototype);return Ev(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function fs(e,t,n,r){return{x:e,y:t,width:n,height:r}}var hb=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=fs(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=fb(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),gb=function(){function e(t,n){var r=pb(n);Ev(this,{target:t,contentRect:r})}return e}(),mb=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Ov,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Mr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new hb(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Mr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new gb(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),jv=typeof WeakMap<"u"?new WeakMap:new Ov,Lv=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=ab.getInstance(),r=new mb(t,n,this);jv.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Lv.prototype[e]=function(){var t;return(t=jv.get(this))[e].apply(t,arguments)}});var vb=function(){return typeof ba.ResizeObserver<"u"?ba.ResizeObserver:Lv}();const yb=Object.freeze(Object.defineProperty({__proto__:null,default:vb},Symbol.toStringTag,{value:"Module"})),wb=Jv(yb);Object.defineProperty(ss,"__esModule",{value:!0});ss.InnerSlider=void 0;var Ne=Yi(T),xb=Yi(sv),Sb=Yi(fk),kb=Yi(ls),le=I,bb=cs,Cb=ds,fp=Ir,$b=Yi(wb);function Yi(e){return e&&e.__esModule?e:{default:e}}function $a(e){"@babel/helpers - typeof";return $a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$a(e)}function Oa(){return Oa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oa.apply(this,arguments)}function Ob(e,t){if(e==null)return{};var n=Eb(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Eb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function pp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pp(Object(n),!0).forEach(function(r){q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jb(e,t,n){return t&&hp(e.prototype,t),n&&hp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Lb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Nu(e,t)}function Nu(e,t){return Nu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Nu(e,t)}function Tb(e){var t=Rb();return function(){var r=Ea(e),i;if(t){var o=Ea(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return _b(this,i)}}function _b(e,t){if(t&&($a(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return G(e)}function G(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Rb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ea(e){return Ea=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ea(e)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var zb=function(e){Lb(n,e);var t=Tb(n);function n(r){var i;Pb(this,n),i=t.call(this,r),q(G(i),"listRefHandler",function(a){return i.list=a}),q(G(i),"trackRefHandler",function(a){return i.track=a}),q(G(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var a=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,le.getHeight)(a)+"px"}}),q(G(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var a=(0,le.getOnDemandLazySlides)(U(U({},i.props),i.state));a.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}var s=U({listRef:i.list,trackRef:i.track},i.props);i.updateState(s,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new $b.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),q(G(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(a){return clearTimeout(a)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),q(G(i),"componentDidUpdate",function(a){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var s=(0,le.getOnDemandLazySlides)(U(U({},i.props),i.state));s.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}i.adaptHeight();var l=U(U({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(a);u&&i.updateState(l,u,function(){i.state.currentSlide>=Ne.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Ne.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),q(G(i),"onWindowResized",function(a){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,Sb.default)(function(){return i.resizeWindow(a)},50),i.debouncedResize()}),q(G(i),"resizeWindow",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(i.track&&i.track.node);if(s){var l=U(U({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,a,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),q(G(i),"updateState",function(a,s,l){var u=(0,le.initializedState)(a);a=U(U(U({},a),u),{},{slideIndex:u.currentSlide});var c=(0,le.getTrackLeft)(a);a=U(U({},a),{},{left:c});var d=(0,le.getTrackCSS)(a);(s||Ne.default.Children.count(i.props.children)!==Ne.default.Children.count(a.children))&&(u.trackStyle=d),i.setState(u,l)}),q(G(i),"ssrInit",function(){if(i.props.variableWidth){var a=0,s=0,l=[],u=(0,le.getPreClones)(U(U(U({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,le.getPostClones)(U(U(U({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(E){l.push(E.props.style.width),a+=E.props.style.width});for(var d=0;d<u;d++)s+=l[l.length-1-d],a+=l[l.length-1-d];for(var f=0;f<c;f++)a+=l[f];for(var y=0;y<i.state.currentSlide;y++)s+=l[y];var v={width:a+"px",left:-s+"px"};if(i.props.centerMode){var w="".concat(l[i.state.currentSlide],"px");v.left="calc(".concat(v.left," + (100% - ").concat(w,") / 2 ) ")}return{trackStyle:v}}var k=Ne.default.Children.count(i.props.children),g=U(U(U({},i.props),i.state),{},{slideCount:k}),p=(0,le.getPreClones)(g)+(0,le.getPostClones)(g)+k,m=100/i.props.slidesToShow*p,x=100/p,b=-x*((0,le.getPreClones)(g)+i.state.currentSlide)*m/100;i.props.centerMode&&(b+=(100-x*m/100)/2);var C={width:m+"%",left:b+"%"};return{slideWidth:x+"%",trackStyle:C}}),q(G(i),"checkImagesLoad",function(){var a=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],s=a.length,l=0;Array.prototype.forEach.call(a,function(u){var c=function(){return++l&&l>=s&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var d=u.onclick;u.onclick=function(){d(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),q(G(i),"progressiveLazyLoad",function(){for(var a=[],s=U(U({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,le.getPostClones)(s);l++)if(i.state.lazyLoadedList.indexOf(l)<0){a.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,le.getPreClones)(s);u--)if(i.state.lazyLoadedList.indexOf(u)<0){a.push(u);break}a.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),q(G(i),"slideHandler",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,c=l.beforeChange,d=l.onLazyLoad,f=l.speed,y=l.afterChange,v=i.state.currentSlide,w=(0,le.slideHandler)(U(U(U({index:a},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!s})),k=w.state,g=w.nextState;if(k){c&&c(v,k.currentSlide);var p=k.lazyLoadedList.filter(function(m){return i.state.lazyLoadedList.indexOf(m)<0});d&&p.length>0&&d(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),y&&y(v),delete i.animationEndCallback),i.setState(k,function(){u&&i.asNavForIndex!==a&&(i.asNavForIndex=a,u.innerSlider.slideHandler(a)),g&&(i.animationEndCallback=setTimeout(function(){var m=g.animating,x=Ob(g,["animating"]);i.setState(x,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:m})},10)),y&&y(k.currentSlide),delete i.animationEndCallback})},f))})}}),q(G(i),"changeSlide",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=U(U({},i.props),i.state),u=(0,le.changeSlide)(l,a);if(!(u!==0&&!u)&&(s===!0?i.slideHandler(u,s):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),q(G(i),"clickHandler",function(a){i.clickable===!1&&(a.stopPropagation(),a.preventDefault()),i.clickable=!0}),q(G(i),"keyHandler",function(a){var s=(0,le.keyHandler)(a,i.props.accessibility,i.props.rtl);s!==""&&i.changeSlide({message:s})}),q(G(i),"selectHandler",function(a){i.changeSlide(a)}),q(G(i),"disableBodyScroll",function(){var a=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=a}),q(G(i),"enableBodyScroll",function(){window.ontouchmove=null}),q(G(i),"swipeStart",function(a){i.props.verticalSwiping&&i.disableBodyScroll();var s=(0,le.swipeStart)(a,i.props.swipe,i.props.draggable);s!==""&&i.setState(s)}),q(G(i),"swipeMove",function(a){var s=(0,le.swipeMove)(a,U(U(U({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));s&&(s.swiping&&(i.clickable=!1),i.setState(s))}),q(G(i),"swipeEnd",function(a){var s=(0,le.swipeEnd)(a,U(U(U({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(s){var l=s.triggerSlideHandler;delete s.triggerSlideHandler,i.setState(s),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),q(G(i),"touchEnd",function(a){i.swipeEnd(a),i.clickable=!0}),q(G(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),q(G(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),q(G(i),"slickGoTo",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a=Number(a),isNaN(a))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:a,currentSlide:i.state.currentSlide},s)},0))}),q(G(i),"play",function(){var a;if(i.props.rtl)a=i.state.currentSlide-i.props.slidesToScroll;else if((0,le.canGoNext)(U(U({},i.props),i.state)))a=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(a)}),q(G(i),"autoPlay",function(a){i.autoplayTimer&&clearInterval(i.autoplayTimer);var s=i.state.autoplaying;if(a==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(a==="leave"){if(s==="paused"||s==="focused")return}else if(a==="blur"&&(s==="paused"||s==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),q(G(i),"pause",function(a){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var s=i.state.autoplaying;a==="paused"?i.setState({autoplaying:"paused"}):a==="focused"?(s==="hovered"||s==="playing")&&i.setState({autoplaying:"focused"}):s==="playing"&&i.setState({autoplaying:"hovered"})}),q(G(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),q(G(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),q(G(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),q(G(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),q(G(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),q(G(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),q(G(i),"render",function(){var a=(0,kb.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),s=U(U({},i.props),i.state),l=(0,le.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=U(U({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=(0,le.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;d=U(U({},d),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),c=Ne.default.createElement(Cb.Dots,d)}var y,v,w=(0,le.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);w.clickHandler=i.changeSlide,i.props.arrows&&(y=Ne.default.createElement(fp.PrevArrow,w),v=Ne.default.createElement(fp.NextArrow,w));var k=null;i.props.vertical&&(k={height:i.state.listHeight});var g=null;i.props.vertical===!1?i.props.centerMode===!0&&(g={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(g={padding:i.props.centerPadding+" 0px"});var p=U(U({},k),g),m=i.props.touchMove,x={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:m?i.swipeStart:null,onMouseMove:i.state.dragging&&m?i.swipeMove:null,onMouseUp:m?i.swipeEnd:null,onMouseLeave:i.state.dragging&&m?i.swipeEnd:null,onTouchStart:m?i.swipeStart:null,onTouchMove:i.state.dragging&&m?i.swipeMove:null,onTouchEnd:m?i.touchEnd:null,onTouchCancel:i.state.dragging&&m?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},b={className:a,dir:"ltr",style:i.props.style};return i.props.unslick&&(x={className:"slick-list"},b={className:a}),Ne.default.createElement("div",b,i.props.unslick?"":y,Ne.default.createElement("div",Oa({ref:i.listRefHandler},x),Ne.default.createElement(bb.Track,Oa({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":v,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=U(U({},xb.default),{},{currentSlide:i.props.initialSlide,slideCount:Ne.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=U(U({},i.state),o),i}return jb(n,[{key:"didPropsChange",value:function(i){for(var o=!1,a=0,s=Object.keys(this.props);a<s.length;a++){var l=s[a];if(!i.hasOwnProperty(l)){o=!0;break}if(!($a(i[l])==="object"||typeof i[l]=="function")&&i[l]!==this.props[l]){o=!0;break}}return o||Ne.default.Children.count(this.props.children)!==Ne.default.Children.count(i.children)}}]),n}(Ne.default.Component);ss.InnerSlider=zb;var Nb=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},Ib=Nb,Mb=Ib,Db=function(e){var t=/[height|width]$/;return t.test(e)},gp=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=Mb(r),Db(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},Ab=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=gp(n),r<e.length-1&&(t+=", ")}),t):gp(e)},Fb=Ab,Tv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(T);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(a){return t.default.createElement("ul",{style:{display:"block"}},a)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(a){return t.default.createElement("button",null,a+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(Tv);var tl,mp;function Hb(){if(mp)return tl;mp=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},tl=e,tl}var nl,vp;function _v(){if(vp)return nl;vp=1;function e(r,i){var o=0,a=r.length,s;for(o;o<a&&(s=i(r[o],o),s!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return nl={isFunction:n,isArray:t,each:e},nl}var rl,yp;function Bb(){if(yp)return rl;yp=1;var e=Hb(),t=_v().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(a){o.mql=a.currentTarget||a,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,a){if(o.equals(r))return o.destroy(),!i.splice(a,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},rl=n,rl}var il,wp;function Ub(){if(wp)return il;wp=1;var e=Bb(),t=_v(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(a,s,l){var u=this.queries,c=l&&this.browserIsIncapable;return u[a]||(u[a]=new e(a,c)),r(s)&&(s={match:s}),i(s)||(s=[s]),n(s,function(d){r(d)&&(d={match:d}),u[a].addHandler(d)}),this},unregister:function(a,s){var l=this.queries[a];return l&&(s?l.removeHandler(s):(l.clear(),delete this.queries[a])),this}},il=o,il}var ol,xp;function Wb(){if(xp)return ol;xp=1;var e=Ub();return ol=new e,ol}(function(e){function t(P){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},t(P)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(T),r=ss,i=s(Fb),o=s(Tv),a=I;function s(P){return P&&P.__esModule?P:{default:P}}function l(){return l=Object.assign||function(P){for(var R=1;R<arguments.length;R++){var z=arguments[R];for(var A in z)Object.prototype.hasOwnProperty.call(z,A)&&(P[A]=z[A])}return P},l.apply(this,arguments)}function u(P,R){var z=Object.keys(P);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(P);R&&(A=A.filter(function(H){return Object.getOwnPropertyDescriptor(P,H).enumerable})),z.push.apply(z,A)}return z}function c(P){for(var R=1;R<arguments.length;R++){var z=arguments[R]!=null?arguments[R]:{};R%2?u(Object(z),!0).forEach(function(A){b(P,A,z[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(z)):u(Object(z)).forEach(function(A){Object.defineProperty(P,A,Object.getOwnPropertyDescriptor(z,A))})}return P}function d(P,R){if(!(P instanceof R))throw new TypeError("Cannot call a class as a function")}function f(P,R){for(var z=0;z<R.length;z++){var A=R[z];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(P,A.key,A)}}function y(P,R,z){return R&&f(P.prototype,R),z&&f(P,z),Object.defineProperty(P,"prototype",{writable:!1}),P}function v(P,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function");P.prototype=Object.create(R&&R.prototype,{constructor:{value:P,writable:!0,configurable:!0}}),Object.defineProperty(P,"prototype",{writable:!1}),R&&w(P,R)}function w(P,R){return w=Object.setPrototypeOf||function(A,H){return A.__proto__=H,A},w(P,R)}function k(P){var R=m();return function(){var A=x(P),H;if(R){var D=x(this).constructor;H=Reflect.construct(A,arguments,D)}else H=A.apply(this,arguments);return g(this,H)}}function g(P,R){if(R&&(t(R)==="object"||typeof R=="function"))return R;if(R!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(P)}function p(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function m(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(P){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(z){return z.__proto__||Object.getPrototypeOf(z)},x(P)}function b(P,R,z){return R in P?Object.defineProperty(P,R,{value:z,enumerable:!0,configurable:!0,writable:!0}):P[R]=z,P}var C=(0,a.canUseDOM)()&&Wb(),E=function(P){v(z,P);var R=k(z);function z(A){var H;return d(this,z),H=R.call(this,A),b(p(H),"innerSliderRefHandler",function(D){return H.innerSlider=D}),b(p(H),"slickPrev",function(){return H.innerSlider.slickPrev()}),b(p(H),"slickNext",function(){return H.innerSlider.slickNext()}),b(p(H),"slickGoTo",function(D){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return H.innerSlider.slickGoTo(D,$)}),b(p(H),"slickPause",function(){return H.innerSlider.pause("paused")}),b(p(H),"slickPlay",function(){return H.innerSlider.autoPlay("play")}),H.state={breakpoint:null},H._responsiveMediaHandlers=[],H}return y(z,[{key:"media",value:function(H,D){C.register(H,D),this._responsiveMediaHandlers.push({query:H,handler:D})}},{key:"componentDidMount",value:function(){var H=this;if(this.props.responsive){var D=this.props.responsive.map(function(j){return j.breakpoint});D.sort(function(j,B){return j-B}),D.forEach(function(j,B){var W;B===0?W=(0,i.default)({minWidth:0,maxWidth:j}):W=(0,i.default)({minWidth:D[B-1]+1,maxWidth:j}),(0,a.canUseDOM)()&&H.media(W,function(){H.setState({breakpoint:j})})});var $=(0,i.default)({minWidth:D.slice(-1)[0]});(0,a.canUseDOM)()&&this.media($,function(){H.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(H){C.unregister(H.query,H.handler)})}},{key:"render",value:function(){var H=this,D,$;this.state.breakpoint?($=this.props.responsive.filter(function($e){return $e.breakpoint===H.state.breakpoint}),D=$[0].settings==="unslick"?"unslick":c(c(c({},o.default),this.props),$[0].settings)):D=c(c({},o.default),this.props),D.centerMode&&(D.slidesToScroll>1,D.slidesToScroll=1),D.fade&&(D.slidesToShow>1,D.slidesToScroll>1,D.slidesToShow=1,D.slidesToScroll=1);var j=n.default.Children.toArray(this.props.children);j=j.filter(function($e){return typeof $e=="string"?!!$e.trim():!!$e}),D.variableWidth&&(D.rows>1||D.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),D.variableWidth=!1);for(var B=[],W=null,L=0;L<j.length;L+=D.rows*D.slidesPerRow){for(var N=[],F=L;F<L+D.rows*D.slidesPerRow;F+=D.slidesPerRow){for(var Q=[],K=F;K<F+D.slidesPerRow&&(D.variableWidth&&j[K].props.style&&(W=j[K].props.style.width),!(K>=j.length));K+=1)Q.push(n.default.cloneElement(j[K],{key:100*L+10*F+K,tabIndex:-1,style:{width:"".concat(100/D.slidesPerRow,"%"),display:"inline-block"}}));N.push(n.default.createElement("div",{key:10*L+F},Q))}D.variableWidth?B.push(n.default.createElement("div",{key:L,style:{width:W}},N)):B.push(n.default.createElement("div",{key:L},N))}if(D==="unslick"){var Et="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:Et},j)}else B.length<=D.slidesToShow&&(D.unslick=!0);return n.default.createElement(r.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},D),B)}}]),z}(n.default.Component);e.default=E})(av);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(av);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(ov);const ps=Vu(ov);const Vb=S.div`
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
`,Kb=S.img`
  height: calc(74vw / 14.4);
  width: calc(74vw / 14.4);
  object-fit: contain;

  @media (max-width: ${O}) {
    height: calc(74vw / 5.08);
    width: calc(74vw / 5.08);
  }
`,Gb=({slide:e})=>h.jsx(Vb,{children:h.jsx(Kb,{src:e.image.src,alt:e.image.alt})}),qb=S.div`
  margin: 0 2vw;
  width: 69vw;
  position: relative;

  @media (max-width: ${O}) {
    margin: 0 auto;
    width: 100%;
  }
`,Sp=({slides:e,size:t})=>{const r={dots:!1,arrows:!1,infinite:!0,slidesToShow:t==="small"?4:11,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1,draggable:!0};return h.jsx(qb,{children:h.jsx(ps,{...r,children:e.map(i=>h.jsx(Gb,{slide:i},i.id))})})},{whiteColor:Rv,darkGrayColor:Qb}=te,al={title:"Available Currencies",text:"A vast range of major coins, stablecoins and liquid tokens is available.",imagesContext:[{text:"Coins",coins:[{id:"1",image:He.one},{id:"2",image:He.two},{id:"3",image:He.three},{id:"4",image:He.four},{id:"5",image:He.five},{id:"6",image:He.six},{id:"7",image:He.seven},{id:"8",image:He.eight},{id:"9",image:He.nine},{id:"10",image:He.ten},{id:"11",image:He.eleven},{id:"12",image:He.twelve},{id:"13",image:He.thirteen}]}]},Xb=S.section`
  width: 100vw;
  box-sizing: border-box;
  ${Ut};
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
    background-color: ${Qb};
    border-radius: 0;
    overflow-x: hidden;
  }
`,Yb=S.div`
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
`,Jb=S.p`
  ${Jc};
  max-width: 37%;
  margin: 2vw 0 6.18vw;

  @media (max-width: 1400px) {
    max-width: 90%;
    margin: 7.87vw 0 4.3vw;
  }
`,Zb=S.p`
  min-width: 22.5vw;
  ${J};
  ${pe};
  color: ${Rv};
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
`,e2=()=>{const e=yt();return h.jsxs(Xb,{children:[h.jsx(Wt,{color:Rv,children:al.title}),h.jsx(Jb,{children:al.text}),h.jsx(Yb,{children:al.imagesContext.map((t,n)=>h.jsxs(T.Fragment,{children:[h.jsx(Zb,{children:t.text}),e?h.jsx(Sp,{slides:t.coins,size:"small"}):h.jsx(Sp,{slides:t.coins,size:"big"})]},n))})]})},t2=S(Kn)`
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
`,hs=({children:e,...t})=>h.jsx(t2,{...t,children:e}),{greenColor:n2}=te,r2=S.div`
  width: 100%;

  @media (max-width: ${O}) {
    width: 82.41vw;
    margin-right: 7.66vw;
    height: 100%;
    display: flex;
  }
`,i2=S.div`
  margin-top: 2.57vw;
  padding: 0 0 0 6vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 82.25vw;
  ${Xc};
  background-image: url(${Qf.backgroundL});
  border-radius: 30px;

  @media (max-width: ${O}) {
    margin-top: 0;
    padding: 8.86vw 4.53vw;
    justify-content: start;
    flex-direction: column;
    width: 82.41vw;
    height: 100%;
    background-image: url(${Qf.backgroundS});
  }
`,o2=S.p`
  ${Jc};
  margin: 6.74vw 0 2.57vw;

  @media (max-width: ${O}) {
    margin: 12.95vw 0 4.32vw;
  }
`,a2=S.div`
  width: 32vw;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: ${O}) {
    margin: 0 auto;
    width: 70vw;
    box-sizing: border-box;
  }
`,s2=S(wt)`
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${n2};
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
`,l2=S.div`
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
`,u2=S.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,zv=({slide:e})=>{const t=yt(),n=r=>{switch(r){case"1":return Ax;case"2":return Fx;case"3":return Hx;case"4":return Bx;default:return""}};return h.jsx(r2,{children:h.jsxs(i2,{children:[t&&h.jsx(hs,{children:e.subtitle}),h.jsxs(a2,{children:[h.jsx(o2,{children:e.textContent}),h.jsx(s2,{color:"transparent",href:n(e.id),target:"_blank",rel:"noopener noreferrer",children:e.button})]}),h.jsx(l2,{children:h.jsx(u2,{src:e.image.src,alt:e.image.alt})})]})})},c2=S.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,d2=({slides:e})=>{const t={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return h.jsx(c2,{children:h.jsx(ps,{...t,children:e.map(n=>h.jsx(zv,{slide:n},n.id))})})},f2=S.button`
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
`;function et({className:e,children:t,onClick:n,type:r,disabled:i}){return h.jsx(f2,{type:r,className:e,disabled:i,onClick:n,children:t})}const{whiteColor:p2,greenColor:h2}=te,g2=S(et)`
  padding: 0 2vw;
  background-color: transparent;
  width: calc(100% / ${({$length:e})=>e});
  border-bottom: 2px solid
    ${({$isActive:e})=>e?h2:p2};
`,Nv=({isActive:e,id:t,onClick:n,length:r,children:i})=>h.jsx(g2,{$isActive:e,$length:r,disabled:e,type:"button",onClick:()=>n(t),children:i}),{whiteColor:kp}=te,bn={text:"Product Description THOTH",slides:[{id:"1",subtitle:"Merchants Solution",textContent:"The solution for businesses to accept crypto payments in any coins and automatically exchange it all into desired stable or currency.",button:"Read more",image:dr.one},{id:"2",subtitle:"Enterprise Blockchain Wallets",textContent:"We deploy infrastructure to provide coins self-custody for enterprise needs.",button:"Read more",image:dr.two},{id:"3",subtitle:"Wallet App",textContent:"Download Android or iOS application to instantly get access to your account.",button:"Read more",image:dr.three},{id:"4",subtitle:"API",textContent:"Automate acceptance in your web store, CRM or application with our feature full API.",button:"Read more",image:dr.four}]},m2=S.section`
  ${Ut};
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
`,v2=S(Wt)`
  width: 80%;
`,y2=S(nd)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${O}) {
    margin: 1.77vw 0 10.61vw;
  }
`,w2=S.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,x2=({id:e,title:t})=>{const n=yt(),[r,i]=T.useState(bn.slides[0].id),o=l=>{i(l)},a=bn.slides.map(l=>l.id),s=bn.slides.find(l=>l.id===r);return h.jsxs("section",{id:e,children:[h.jsxs(m2,{children:[h.jsx(v2,{color:kp,children:t}),h.jsx(y2,{color:kp,children:bn.text}),!n&&h.jsx(w2,{children:a.map(l=>{const u=r===l,c=bn.slides.find(d=>d.id===l);return c?h.jsx(Nv,{id:c.id,length:bn.slides.length,isActive:u,onClick:o,children:h.jsx(hs,{children:c.subtitle})},c.id):null})}),n?h.jsx(d2,{slides:bn.slides}):s&&h.jsx(zv,{slide:s})]}),h.jsx(qS,{}),h.jsx(e2,{})]})},{whiteColor:S2,greenColor:k2,lightGreenColor:b2}=te,C2=S.div`
  grid-column: 3 / 4;
  width: 100%;
  display: flex;
  justify-content: end;
`,$2=S(et)`
  color: transparent;
  padding: 0.8vw 1.7vw 0.8vw 1.7vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    133deg,
    ${k2} 0%,
    ${b2} 100%
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
`,O2=S.div`
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
`,E2=S.span`
  margin-right: 1vw;
  color: ${S2};
  font-size: 1.11vw;
  ${Yc};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.32px;

  @media (max-width: ${O}) {
    margin-right: 4vw;
    font-size: 3.15vw;
  }
`,bp=({text:e})=>{const[t,n]=T.useState(!1),r=ts(),i=()=>{n(!0),r("/payment-fees"),window.scrollTo({top:0})};return h.jsx(C2,{children:h.jsxs($2,{type:"button",disabled:t,onClick:i,children:[h.jsx(E2,{children:e}),h.jsx(O2,{})]})})},{lightBlackColor:Iv,blackColor:Mv,darkGreenColor:P2}=te,Qt={title:"Fees",lineOne:{title:"Incoming Transactions",text:{main:"As low as 0.5%",span:"and going down based on your total transaction volume.",button:"Check pricing details"}},lineTwo:{title:"Outgoing Transactions",text:{main:"Free of charge"}}},j2=S.section`
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
`,Cp=S.div`
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
`,$p=S.div`
  grid-column: 2 / 3;
  width: 100%;
`,L2=S(Wt)`
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
  border-bottom: 2px solid ${Iv};

  @media (max-width: ${O}) {
    padding-bottom: 5.09vw;
    margin: 0;
    font-size: 9.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -1px;
  }
`,Op=S(Kn)`
  color: ${Mv};
  font-size: calc(40vw / 14.4);
  line-height: 1.2;
  letter-spacing: -0.8px;

  @media (max-width: ${O}) {
    margin: 9.82vw 0 0 0;
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
  }
`,Ep=S.p`
  ${J};
  ${pe};
  color: ${P2};
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
`,T2=S.p`
  ${J};
  color: ${Mv};
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
`,_2=()=>{const e=yt();return h.jsxs(j2,{children:[h.jsx(L2,{color:Iv,children:Qt.title}),h.jsxs(Cp,{children:[h.jsx(Op,{children:Qt.lineOne.title}),h.jsxs($p,{children:[h.jsx(Ep,{children:Qt.lineOne.text.main}),h.jsx(T2,{children:Qt.lineOne.text.span})]}),!e&&h.jsx(bp,{text:Qt.lineOne.text.button})]}),h.jsxs(Cp,{children:[h.jsx(Op,{children:Qt.lineTwo.title}),h.jsx($p,{children:h.jsx(Ep,{children:Qt.lineTwo.text.main})}),e&&h.jsx(bp,{text:Qt.lineOne.text.button})]})]})},{whiteColor:cd}=te,R2=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${O}) {
    width: 80vw;
    min-height: 68.17vw;
    align-items: start;
  }
`,z2=S.div`
  @media (max-width: ${O}) {
    padding: 7.18vw 0 10.26vw 10vw;
  }
`,N2=S(hs)`
  @media (max-width: ${O}) {
    width: 100%;
    box-sizing: border-box;
    padding: 9.29vw 1.38vw 5.33vw 12.84vw;
    border-bottom: 1px solid ${cd};
  }
`,I2=S.img`
  margin-right: 2.15vw;
  width: 2.98vw;
  height: auto;

  @media (max-width: ${O}) {
    width: 12.45vw;
    margin-right: 3.93vw;
  }
`,M2=S.h4`
  ${J};
  text-align: left;
  font-size: calc(22vw / 14.4);
  ${Vn};
  font-weight: 500;
  line-height: 1.5;
  color: ${cd};

  @media (max-width: ${O}) {
    font-size: calc(22vw / 5.08);
  }
`,D2=S.p`
  ${J};
  ${pe};
  color: ${cd};
  font-size: calc(20vw / 14.05);
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(20vw / 5.08);
  }
`,A2=S.div`
  display: flex;
  flex-direction: row;
  padding-bottom: calc(14vw / 14.4);

  @media (max-width: ${O}) {
    padding-bottom: calc(24vw / 5.08);
  }
`,Dv=({slide:e})=>{const t=yt();return h.jsxs(R2,{children:[t&&h.jsx(N2,{children:e.subtitle}),h.jsxs(z2,{children:[h.jsxs(A2,{children:[h.jsx(I2,{src:e.image.src,alt:e.image.alt}),h.jsx(M2,{children:e.title})]}),h.jsx(D2,{children:e.text})]})]})};let xo;const F2=new Uint8Array(16);function H2(){if(!xo&&(xo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!xo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return xo(F2)}const Oe=[];for(let e=0;e<256;++e)Oe.push((e+256).toString(16).slice(1));function B2(e,t=0){return(Oe[e[t+0]]+Oe[e[t+1]]+Oe[e[t+2]]+Oe[e[t+3]]+"-"+Oe[e[t+4]]+Oe[e[t+5]]+"-"+Oe[e[t+6]]+Oe[e[t+7]]+"-"+Oe[e[t+8]]+Oe[e[t+9]]+"-"+Oe[e[t+10]]+Oe[e[t+11]]+Oe[e[t+12]]+Oe[e[t+13]]+Oe[e[t+14]]+Oe[e[t+15]]).toLowerCase()}const U2=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Pp={randomUUID:U2};function W2(e,t,n){if(Pp.randomUUID&&!t&&!e)return Pp.randomUUID();e=e||{};const r=e.random||(e.rng||H2)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return B2(r)}const V2=S(et)`
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
`,K2=({children:e,className:t,currentSlide:n,slideCount:r,top:i,left:o,right:a,...s})=>{const l={className:t,onClick:s.onClick||(()=>console.log("onClick")),type:"button",disabled:!1};return h.jsxs(V2,{...l,$top:i,$left:o,$right:a,...s,children:[e,!n||!r]})},G2=S.img`
  @media (${O}) {
    border-radius: 50%;
    width: 8.82vw;
    height: 8.82vw};
  }
`,q2=S.div`
  height: 100%;
  background-image: url(${Su.background});
  background-repeat: no-repeat;
  background-size: cover;
`,Q2=({slides:e})=>{const t={dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,swipe:!1,variableWidth:!0,centerMode:!1,prevArrow:h.jsx(h.Fragment,{}),nextArrow:h.jsx(K2,{className:"arrow next",top:"12.5%",right:"9%",children:h.jsx(G2,{src:Su.right.src,alt:Su.right.alt})})},n=e.flatMap(r=>r.content.map(i=>({id:W2(),subtitle:r.subtitle,image:i.image,title:i.title,text:i.text})));return h.jsx(q2,{children:h.jsx(ps,{...t,children:n.map(r=>h.jsx(Dv,{slide:r},r.id))})})},{whiteColor:_n,greenColor:X2}=te,Y2=S.div`
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  margin-bottom: ${({size:e})=>e==="big"?"calc(42vw / 14.4)":"calc(60vw / 14.4)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 2px solid ${_n};

  &:nth-child(2n) {
    border-bottom: ${({size:e})=>e==="big"?"none":`2px solid ${_n}`};
  }

  @media (max-width: ${O}) {
    margin-bottom: calc(49vw / 5.08);
    border-bottom: ${({size:e})=>e==="small"?"none":`2px solid ${_n}`};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
    margin-left: ${({size:e})=>e==="small"?"8.46vw":"0"};

    &:nth-child(2n) {
      border-bottom: ${({size:e})=>e==="big"?`2px solid ${_n}`:"none"};
    }
  }
`,J2=S.div`
  margin: ${({size:e})=>e==="big"?"2vw 0 0.71vw":"1vw 0 1vw"};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  @media (max-width: ${O}) {
    margin: ${({size:e})=>e==="big"?"calc(45vw / 5.09) 0 calc(12vw / 5.09)":"calc(12vw / 5.09) 0 calc(12vw / 5.09)"};
  }
`,Av=S.p`
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
`,Z2=S(Av)`
  padding-right: 3vw;
  color: ${X2};
`,eC=S(Av)`
  color: ${_n};
`,tC=S(Kn)`
  margin-bottom: calc(6.58vw / 14.4);
  color: ${_n};
  font-size: ${({size:e})=>e==="big"?"calc(35vw / 14.4)":"calc(28vw / 14.4)"};
  line-height: 1.2;
  letter-spacing: -0.7px;
  text-align: left;

  @media (max-width: ${O}) {
    margin-bottom: 0;
    font-size: ${({size:e})=>e==="big"?"calc(30vw / 5.09)":"calc(23vw / 5.09)"};
    letter-spacing: -0.6px;
  }
`,nC=S.p`
  ${J};
  ${pe};
  margin: 0.21vw 0 3.26vw;
  font-size: calc(25vw / 14.4);
  color: ${_n};
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
`,rC=S.img`
  height: ${({size:e})=>e==="big"?"calc(268vw / 14.4)":"calc(154vw / 14.4)"};
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${O}) {
    height: ${({size:e})=>e==="big"?"calc(184vw / 5.08)":"calc(148vw / 5.08)"};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
  }
`,Iu=({slide:e,size:t})=>h.jsxs(Y2,{size:t,children:[h.jsx(rC,{size:t,src:e.image.src,alt:e.image.alt}),h.jsxs(J2,{size:t,children:[h.jsx(Z2,{children:e.span}),h.jsx(eC,{children:e.date})]}),h.jsx(tC,{size:t,children:e.title}),t==="big"&&h.jsx(nC,{size:t,children:e.text})]}),iC=S.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,oC=({slides:e,size:t})=>{const n={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return h.jsx(iC,{children:h.jsx(ps,{...n,children:e.map(r=>h.jsx(Iu,{slide:r,size:t},r.id))})})},{whiteColor:aC,greenColor:sC}=te,sl={title:"News",button:"Read more",slides:[{id:"1",span:"Corporate News",date:"20.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:En.one},{id:"2",span:"Corporate News",date:"21.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:En.two},{id:"3",span:"Corporate News",date:"22.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:En.three},{id:"4",span:"Corporate News",date:"23.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:En.four},{id:"5",span:"Corporate News",date:"24.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:En.five}]},lC=S.div`
  box-sizing: border-box;
  width: 100vw;
  padding-bottom: 5vw;
  min-height: calc(1317vw / 14.4);
  background-image: url(${En.backgroundL});
  ${Ut};
  border-radius: 1.6vw;

  @media (max-width: ${O}) {
    padding-bottom: 10vw;
    background-image: url(${En.backgroundL});
    min-height: calc(1441vw / 5.08);
    border-radius: 3.93vw;
  }
`,uC=S.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${O}) {
    flex-direction: column;
  }
`,cC=S.div`
  visibility: hidden;
  padding: 5.06vw 3.92vw;
  display: flex;
  flex-direction: row;
  align-items: end;

  @media (max-width: ${O}) {
    padding: 14vw 3.56vw 7.34vw;
  }
`,dC=S(wt)`
  margin-left: 3.54vw;
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${sC};
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
`,fC=S.div`
  width: calc(696vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${O}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`,pC=S.div`
  width: calc(414vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${O}) {
    width: 100%;
  }
`,hC=()=>{const e=yt(),t=sl.slides,n=t.slice(0,2),r=t.slice(2,5);return h.jsxs(lC,{children:[h.jsxs(cC,{children:[h.jsx(Wt,{color:aC,children:sl.title}),h.jsx(dC,{color:"transparent",href:Vx,target:"_blank",rel:"noopener noreferrer",children:sl.button})]}),h.jsxs(uC,{children:[h.jsx(fC,{children:n.map(i=>h.jsx(Iu,{slide:i,size:"big"},i.id))}),e?h.jsx(oC,{slides:r,size:"small"}):h.jsx(pC,{children:r.map(i=>h.jsx(Iu,{slide:i,size:"small"},i.id))})]})]})},{deepColor:wi,darkGreenColor:Mu}=te,Xt={title:"Have a question?",text:"Explore our solutions or you can contact us throughticket system and contact form. Feel free to get in touch..",existing:{title:"For existing clients",text:"If you already have an account please use our ticket system.",linkName:"Get 24\\7 Support"},new:{title:"For new clients or partners",text:"Please leave your inquiry and our Buisness Development Team will contact you shortly.",linkName:"Contact BD Team"}},gC=S.section`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 10.9vw 4.28vw;

  @media (max-width: ${O}) {
    flex-direction: column;
    padding: 12vw 8.01vw 19.1vw;
  }
`,mC=S(Wt)`
  padding: 3.13vw 0 1.8vw;
  align-self: start;
  text-align: left;

  @media (max-width: ${O}) {
    flex-direction: column;
    padding: 0 0 7.28vw;
  }
`,ll=S.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 31.94vw;

  @media (max-width: ${O}) {
    min-width: 100%;
  }
`,jp=S.div`
  min-height: 25.69vw;
  display: flex;
  flex-direction: column;
  max-width: 31.94vw;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${O}) {
    min-width: 100%;
  }
`,ul=S.p`
  width: 25vw;
  ${J};
  font-size: calc(25vw / 14.4);
  ${pe};
  color: ${wi};
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
`,Lp=S.img`
  width: auto;
  height: calc(58vw / 14.4);
  @media (max-width: ${O}) {
    height: calc(58vw / 5.08);
    margin: 12vw 0 4.92vw;
  }
`,Tp=S(Kn)`
  padding: 1.39vw 0 0.1vw 0;
  color: ${wi};
  font-size: calc(30vw / 14.4);
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(30vw / 5.08);
  }
`,_p=S(wt)`
  color: ${Mu};
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
`,vC=()=>h.jsxs(gC,{children:[h.jsxs(ll,{children:[h.jsx(mC,{color:wi,children:Xt.title}),h.jsx(ul,{className:"custom-first",children:Xt.text})]}),h.jsxs(jp,{children:[h.jsxs(ll,{children:[h.jsx(Lp,{src:yo.existingClient.src,alt:yo.existingClient.alt}),h.jsx(Tp,{children:Xt.existing.title}),h.jsx(ul,{color:wi,children:Xt.existing.text})]}),h.jsx(_p,{href:Kx,target:"_blank",rel:"noopener noreferrer",color:Mu,children:Xt.existing.linkName})]}),h.jsxs(jp,{children:[h.jsxs(ll,{children:[h.jsx(Lp,{src:yo.newClient.src,alt:yo.newClient.alt}),h.jsx(Tp,{children:Xt.new.title}),h.jsx(ul,{color:wi,children:Xt.new.text})]}),h.jsx(_p,{href:Gx,target:"_blank",rel:"noopener noreferrer",color:Mu,children:Xt.new.linkName})]})]}),{whiteColor:Rp}=te,Cn={text:"Product Description THOTH",slides:[{id:"1",subtitle:"Merchants Solution",content:[{id:"1",image:ct.one.one,title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."},{id:"2",image:ct.one.two,title:"E-commerce",text:"The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments."},{id:"3",image:ct.one.three,title:"Marketplaces",text:"There are many platforms used by businesses to sell their products or services. Offering crypto payments to customers is now the advantage."},{id:"4",image:ct.one.four,title:"Travel Industry",text:"The travel industry is a growing sector. With increasing bookings now made online, it makes financial sense to accept crypto payments."},{id:"5",image:ct.one.five,title:"Gambling",text:"The global online gambling industry is worth billions of dollars. Crypto payments are part for the course."},{id:"6",image:ct.one.six,title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."}]},{id:"2",subtitle:"Enterprise Solution",content:[{id:"1",image:ct.two.one,title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."}]},{id:"3",subtitle:"White Label",content:[{id:"1",image:ct.three.one,title:"E-commerce",text:"The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments."}]}]},yC=S.section`
  box-sizing: border-box;
  width: 100vw;
  min-height: calc(1015vw / 14.4);
  padding: 4.28vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${ct.backgroundL});
  ${Ut};
  //border-radius: 1.6vw;
  border-radius: 0 0 1.6vw 1.6vw;

  @media (max-width: ${O}) {
    padding: 14.17vw 0 12.4vw 0;
    box-sizing: border-box;
    min-height: 138.78vw;
    justify-content: space-between;
    flex-direction: column;
    background-image: url(${ct.backgroundS});
    //border-radius: 3.93vw;
    border-radius: 0 0 3.93vw 3.93vw;
  }
`,wC=S.div`
  width: 100%;
`,xC=S(nd)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${O}) {
    margin: 1.76vw 0 0;
  }
`,SC=S.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,kC=S.div`
  margin-top: 2.57vw;
  padding: 4.93vw 6.25vw;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vw;
  width: 88.47vw;
  min-height: 37.15vw;
  ${Xc};
  background-image: url(${ct.slide});
  border-radius: 30px;

  @media (max-width: ${O}) {
    display: block;
    padding: 0;
    background-image: none;
  }
`,bC=({id:e,title:t})=>{const n=yt(),[r,i]=T.useState(Cn.slides[0].id),o=l=>{i(l)},a=Cn.slides.map(l=>l.id),s=Cn.slides.find(l=>l.id===r);return h.jsxs("section",{id:e,children:[h.jsxs(yC,{children:[h.jsxs(wC,{children:[h.jsx(Wt,{color:Rp,children:t}),h.jsx(xC,{color:Rp,children:Cn.text}),!n&&h.jsx(SC,{children:a.map(l=>{const u=r===l,c=Cn.slides.find(d=>d.id===l);return c?h.jsx(Nv,{id:c.id,length:Cn.slides.length,isActive:u,onClick:o,children:h.jsx(hs,{children:c.subtitle})},c.id):null})})]}),h.jsx(kC,{children:n?h.jsx(Q2,{slides:Cn.slides}):s&&s.content.map(l=>h.jsx(Dv,{slide:l},l.id))})]}),h.jsx(_2,{}),h.jsx(hC,{}),h.jsx(vC,{})]})},CC=({mainScreenRef:e,sections:t})=>(console.log(t),h.jsxs(h.Fragment,{children:[h.jsx(yS,{ref:e}),t.map(n=>n.id==="1"?h.jsx(FS,{id:n.id,title:n.title},n.id):n.id==="3"?h.jsx(x2,{id:n.id,title:n.title},n.id):n.id==="4"?h.jsx(bC,{id:n.id,title:n.title},n.id):null)]})),{ratesFeesColor:$C,navigateLinkColor:OC}=te,cl={button:"Accept bitcoin payment",separator:">",location:"Payment fees"},EC=S.div`
  padding-left: 5.4vw;
  background-color: ${$C};
  display: flex;
  flex-direction: row;
  align-items: start;

  @media (max-width: ${O}) {
    padding-left: 6.4vw;
  }
`,PC=S(et)`
  background-color: transparent;
`,dl=S.p`
  ${J};
  margin-right: 0.2vw;
  ${pe};
  color: ${OC};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 2;

  @media (max-width: ${O}) {
    margin-right: 1vw;
    font-size: calc(15vw / 5.09);
  }
`,jC=()=>{const[e,t]=T.useState(!1),n=ts(),r=()=>{t(!0),n("/thoth")};return h.jsxs(EC,{children:[h.jsx(PC,{type:"button",disabled:e,onClick:r,children:h.jsx(dl,{children:cl.button})}),h.jsx(dl,{children:cl.separator}),h.jsx(dl,{children:cl.location})]})},{ratesFeesColor:LC,darkGreenColor:Du,blackColor:TC,whiteColor:_C}=te,RC=S.div`
  margin: 0 6.25vw 4.58vw 3.23vw;
  display: flex;
  flex-direction: column;

  @media (max-width: ${O}) {
    margin: 0 6.25vw 4.58vw 4.5vw;
  }
`,zC=S.div`
  padding: 2.22vw 0 4.86vw 2.78vw;
  border-top: 1px solid ${Du};
  border-left: 1px solid ${Du};
`,NC=S.div`
  display: flex;
  justify-content: space-between;
`,IC=S.p`
  width: calc(270vw / 14.4);
  ${Zc};
  ${pe};

  @media (max-width: ${O}) {
    min-width: calc(210vw / 5.09);
  }
`,MC=S.span`
  margin-left: 1vw;
  text-align: left;
  min-width: calc(90vw / 14.4);
  ${Zc};
  ${pe};

  @media (max-width: ${O}) {
    min-width: calc(70vw / 5.09);
  }
`,DC=S.span`
  text-align: center;
  min-width: calc(180vw / 14.4);
  ${Zc}
  ${Vn};

  @media (max-width: ${O}) {
    min-width: calc(140vw / 5.09);
  }
`,AC=S.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  &:nth-child(odd) {
    background-color: ${LC};
  }
`,FC=S(Kn)`
  margin: 0 0 1.18vw 2.7vw;
  color: ${Du};
  ${Vn};
  text-align: left;
  font-size: calc(30vw / 14.4);
  font-style: normal;
  font-weight: 400;

  @media (max-width: ${O}) {
    font-size: calc(30vw / 5.09);
  }
`,HC=S(wt)`
  margin-top: 2.26vw;
  display: inline-block;
  ${Vn};
  padding: 0.8vw 5.5vw 0.8vw 2.5vw;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  width: fit-content;
  color: ${_C};
  text-align: center;
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  background-color: ${TC};

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
`,zp=({rates:e})=>h.jsxs(RC,{children:[h.jsx(FC,{children:e.subtitle}),h.jsxs(zC,{children:[Object.keys(e).map(t=>{const n=e[t];return typeof n=="string"?null:h.jsxs(AC,{children:[h.jsx(IC,{children:n.text}),h.jsx("div",{children:n.percent&&n.percent.map((r,i)=>h.jsxs(NC,{children:[h.jsx(MC,{children:r}),n.span&&n.span[i]&&h.jsx(DC,{children:n.span[i]})]},i))})]},t)}),h.jsx(HC,{color:"transparent",href:e.linkHref,target:"_blank",rel:"noopener noreferrer",children:e.linkLabel})]})]}),{lightBlackColor:BC}=te,fl={title:"Payment fees",individual:{subtitle:"Individual",linkHref:iS,linkLabel:"Try now",depositFee:{text:"Deposit Fee",percent:["0.1%","0.3%"],span:["<1000$",">1000$"]},swapFee:{text:"Swap Fee",percent:["0.5%"]},withdrawFee:{text:"Withdraw Fee",percent:["0.5%"]},fiatBankIn:{text:"Fiat Bank In",percent:["0.5%"]},fiatBankOut:{text:"Fiat Bank Out",percent:["0.5%"]},depositFeeSpan:{text:"Deposit Fee Span",percent:["0.5%"]}},enterprise:{subtitle:"Enterprise",linkHref:oS,linkLabel:"Try Now",depositFee:{text:"Deposit Fee",percent:["0.1%"]},swapFee:{text:"Swap Fee",percent:["0.5%","0.6%"],span:["<1000$",">1000$"]},withdrawFee:{text:"Withdraw Fee",percent:["0.5%"]},fiatBankIn:{text:"Fiat Bank In",percent:["0.5%"]},fiatBankOut:{text:"Fiat Bank Out",percent:["0.5%"]},depositFeeSpan:{text:"Deposit Fee Span",percent:["0.5%"]}}},UC=S.main`
  width: 100vw;
`,WC=S.div`
  display: flex;
  flex-direction: column;
`,VC=S.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,KC=S(Wt)`
  margin: 3.33vw 5.4vw 4.51vw;
  text-align: start;

  @media (max-width: ${O}) {
    margin: 3.33vw 6.4vw 4.51vw;
  }
`,GC=T.forwardRef((e,t)=>h.jsxs(UC,{ref:t,children:[h.jsx(jC,{}),h.jsxs(WC,{children:[h.jsx(KC,{color:BC,children:fl.title}),h.jsxs(VC,{children:[h.jsx(zp,{rates:fl.individual}),h.jsx(zp,{rates:fl.enterprise})]})]})]})),qC=mx`
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
`,QC=()=>{const e=ts();return T.useEffect(()=>{e("/")},[e]),null},XC=S.img`
  ${zr};
  width: fit-content;
  height: 2.63vw;

  @media (max-width: ${O}) {
    width: fit-content;
    height: 5.06vw;
  }
`,Fv=({...e})=>h.jsx(XC,{src:Gf.src,alt:Gf.alt,...e}),YC=[{id:"instagram",image:ei.instagram,href:Nx},{id:"telegram",image:ei.telegram,href:nv},{id:"twitter",image:ei.twitter,href:ev},{id:"facebook",image:ei.facebook,href:tv},{id:"email",image:ei.email,href:zx}],JC=S.div`
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
`,ZC=S(wt)`
  display: flex;
  margin-right: 1.2vw;

  @media (max-width: ${O}) {
    margin-right: 3vw;
  }
`,Np=S.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${O}) {
    width: 6.61vw;
    height: 6.61vw;
  }
`,e$=S(et)`
  display: flex;
  background-color: transparent;
`,dd=({iconsToShow:e,type:t,$location:n,onClick:r,...i})=>h.jsx(JC,{$location:n,...i,children:e.map(o=>{const a=YC.find(s=>s.id===o);return a?h.jsx(ZC,{color:"transparent",href:a.href,target:"_blank",rel:"noopener noreferrer",children:r?h.jsx(e$,{type:"button",disabled:!r,onClick:r,children:h.jsx(Np,{src:a.image[t==="light"?"lightSrc":"darkSrc"],alt:a.image.alt})}):h.jsx(Np,{src:a.image[t==="light"?"lightSrc":"darkSrc"],alt:a.image.alt})},a.id):null})}),t$=S.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  @media (max-width: ${O}) {
    gap: 1vw;
  }
`,Ip=S.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${O}) {
    margin: ${({$isButton:e})=>e?"0":"0 2vw"};
    width: ${({$isButton:e})=>e?"3vw":"6.5vw"};
    height: ${({$isButton:e})=>e?"3vw":"6.5vw"};
  }
`,n$=S.p`
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
`,r$=S(et)`
  margin-right: 1vw;
  background: transparent;
  border-radius: 50px;
`,Au=({type:e,text:t,isButton:n=!1,onClick:r})=>{const i=e==="burger menu"?ga.src:ma.src,o=e==="burger menu"?ga.alt:ma.alt;return h.jsxs(t$,{children:[n&&r?h.jsx(r$,{type:"button",disabled:!1,onClick:r,children:h.jsx(Ip,{src:i,alt:o,$isButton:n})}):h.jsx(Ip,{src:i,alt:o,$isButton:n}),h.jsx(n$,{children:t})]})},i$=[{code:"en",name:"English"},{code:"ru",name:"Русский"}],o$=S.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`,a$=S(et)`
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
`,s$=S.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2.3vw 5vw 2.3vw 1.74vw;
  box-sizing: border-box;

  @media (max-width: ${O}) {
    padding: 16.7vw 5vw 13vw 5vw;
  }
`,l$=S(et)`
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
        background-image: url(${sS.background});
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
`,u$=({language:e,isLanguagesOpen:t,languagesHandler:n})=>{const{i18n:r}=as(),[i,o]=T.useState(r.language),a=async l=>{o(l),await r.changeLanguage(l),n()},s=l=>async()=>{await a(l)};return h.jsxs(s$,{children:[h.jsxs(o$,{children:[h.jsx(a$,{disabled:!t,type:"button",onClick:n}),h.jsx(Au,{type:"language",text:e})]}),i$.map(l=>h.jsx(l$,{type:"button",disabled:!t,$code:l.code,$currentLanguage:i,onClick:s(l.code),children:l.name},l.code))]})},{whiteColor:Hv,greenColor:c$,lightGreenColor:d$}=te,f$=S.div`
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
`,p$=S(wt)`
  border-radius: 5px;
  padding: 0.5vw 2vw;
  background: linear-gradient(
    133deg,
    ${c$} 0%,
    ${d$} 100%
  );
  @media (max-width: ${O}) {
    padding: 1.7vw 4.4vw;
  }
`,h$=S(wt)`
  visibility: hidden;
  margin: 0 1vw;
  background-color: transparent;
  @media (max-width: ${O}) {
    margin: 0 7.5vw 0 2vw;
  }
`,Mp=S.span`
  color: ${Hv};
  ${Wr};
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
`,Dp=S.span`
  color: ${Hv};
  ${Vn};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.42px;

  @media (max-width: ${O}) {
    color: rgba(255, 255, 255, 0.9);
    font-size: calc(14vw / 5.09);
  }
`,Ap=S(et)`
  background-color: transparent;
  display: flex;
`,Bv=({onClick:e})=>{const{t}=as(),n={signUp:t("headerLinks.signUp"),signIn:t("headerLinks.signIn")};return console.log(n),h.jsxs(f$,{children:[h.jsx(h$,{color:"transparent",href:Mx,target:"_blank",rel:"noopener noreferrer",children:e?h.jsx(Ap,{type:"button",disabled:!e,onClick:e,children:h.jsx(Mp,{children:n.signUp})}):h.jsx(Mp,{children:n.signUp})}),h.jsx(p$,{color:"transparent",href:Ix,target:"_blank",rel:"noopener noreferrer",children:e?h.jsx(Ap,{type:"button",disabled:!e,onClick:e,children:h.jsx(Dp,{children:n.signIn})}):h.jsx(Dp,{children:n.signIn})})]})},g$=S.ul`
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
`,m$=S.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;

  @media (max-width: ${O}) {
    margin-top: calc(27vw / 5.09);
    justify-content: start;
    align-self: start;
  }
`,v$=S(et)`
  background-color: transparent;
  ${J};
  ${Wr};
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
`,Uv=({sections:e,headerHeight:t,burgerMenuHandler:n,isLanguagesOpen:r,languagesHandler:i})=>{const o=ts(),a=es(),[s,l]=T.useState(!1),u=async d=>{a.pathname!=="/"&&await o("/");const f=document.getElementById(d);if(f){const y=f.offsetTop-t;window.scrollTo({top:y,behavior:"smooth"})}l(!1)},c=async d=>{l(!0),n&&await n(),i&&r&&await i(),await u(d)};return h.jsx("nav",{children:h.jsx(g$,{children:e.map(d=>h.jsx(m$,{children:h.jsx(v$,{disabled:s,type:"button",onClick:()=>c(d.id),children:d.title})},d.id))})})},y$=S.div`
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
`,w$=S.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`,x$=S(et)`
  ${zr};
  background-color: transparent;
  width: 2.95vw;
  height: 2.16vw;
  border-radius: 0;
  background-image: url("images/header/close-icon.svg");
`,S$=S.div`
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
`,k$=({language:e,menu:t,sections:n,headerHeight:r,languagesHandler:i,isBurgerMenuOpen:o,burgerMenuHandler:a})=>h.jsxs(y$,{children:[h.jsxs(w$,{children:[h.jsx(x$,{disabled:!o,type:"button",onClick:a}),h.jsx(Au,{type:"burger menu",text:t})]}),h.jsx(Uv,{sections:n,headerHeight:r,burgerMenuHandler:a}),h.jsx(S$,{children:h.jsx(Au,{type:"language",text:e,isButton:!0,onClick:i})}),h.jsx(Bv,{onClick:a}),h.jsx(dd,{$location:"menu",type:"light",iconsToShow:ed,onClick:a})]}),b$=S.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  position: absolute;
  top: 0;
  right: -100%;
  width: 23.5%;
  z-index: 100;

  ${({$isOpen:e})=>e!==null?e?ge`
            animation: ${vx} 0.5s forwards;
          `:ge`
            animation: ${yx} 0.5s forwards;
          `:""};

  @media (max-width: ${O}) {
    width: 60%;
  }
`,Fp=({containerHeight:e,headerHeight:t,children:n,isOpen:r})=>{const i=es(),o=yt(),a=i.pathname==="/";return T.useLayoutEffect(()=>{const s=()=>{document.querySelectorAll(".drop-right").forEach(u=>{u.style.height=`calc(${e}px + ${t}px + ${!o&&a?1.7:0}vw)`})};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[e,t]),h.jsx(b$,{className:"drop-right",$isOpen:r,children:n})},{whiteColor:C$,headerColor:$$}=te,Hp={text:"Language"},O$={text:"Menu"},E$=S.header`
  background-color: ${$$};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  box-sizing: border-box;
  padding-left: 4vw;
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 6.94vw;
  z-index: 10;
  border-bottom: 0.5px ${C$} solid;
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
`,P$=S(et)`
  background-color: transparent;
  border-radius: 0;
  display: flex;
`,j$=S.img`
  width: 6.5vw;
  height: 3.77vw;
`,L$=S.div`
  position: relative;
  z-index: 11;
`,T$=S(dd)`
  margin-left: 1.2vw;
  width: 20vw;
  display: flex;
  justify-content: end;
`,_$=S(et)`
  margin: 0 2vw;
  background-color: transparent;
  border-radius: 0;
  display: flex;
`,R$=S.img`
  width: 2.22vw;
  height: 2.22vw;
`,z$=T.forwardRef(({sections:e,containerHeight:t,isLanguagesOpen:n,isBurgerMenuOpen:r,languagesHandler:i,burgerMenuHandler:o,headerHeight:a},s)=>{const l=yt();return h.jsxs(h.Fragment,{children:[h.jsxs(E$,{ref:s,children:[h.jsx(L$,{children:h.jsx(Fv,{color:"transparent"})}),l!==null&&!l&&h.jsxs(h.Fragment,{children:[h.jsx(T$,{type:"light",$location:"menu",iconsToShow:ed}),h.jsx(Uv,{sections:e,headerHeight:a,isLanguagesOpen:n,languagesHandler:i}),h.jsx(Bv,{}),h.jsx(_$,{disabled:!!n,type:"button",onClick:i,children:h.jsx(R$,{src:ma.srcGray,alt:ma.alt})})]}),l&&h.jsx(P$,{disabled:!!r,type:"button",onClick:o,children:h.jsx(j$,{src:ga.src,alt:ga.alt})})]}),h.jsx(Fp,{isOpen:r,headerHeight:a,containerHeight:t,children:h.jsx(k$,{containerHeight:t,sections:e,headerHeight:a,isBurgerMenuOpen:r,burgerMenuHandler:o,languagesHandler:i,language:Hp.text,menu:O$.text})}),h.jsx(Fp,{isOpen:n,headerHeight:a,containerHeight:t,children:h.jsx(u$,{containerHeight:t,headerHeight:a,isLanguagesOpen:n,languagesHandler:i,language:Hp.text})})]})}),{whiteColor:fd}=te,N$=S.div`
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
`,I$=S.h3`
  ${J};
  margin-bottom: 0.7vw;
  color: ${fd};
  ${Wr};
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
`,M$=S.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${O}) {
    margin: 0.5vw;
  }
`,D$=S.li`
  ${J};
  margin-bottom: 0.34vw;
  color: ${fd};
  ${Wr};
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
`,pl=({data:e})=>h.jsxs(N$,{children:[h.jsx(I$,{children:e.title}),h.jsx(M$,{children:e.links.map(t=>h.jsx(D$,{children:h.jsx(wt,{color:fd,href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.name})},t.name))})]}),{whiteColor:Fu,deepGrayColor:A$}=te,jt={text:"Our vision is to provide convenience and help increase your sales business.",nav:{about:{title:"About",links:[{name:"How it works",href:qx},{name:"Featured",href:Qx},{name:"Partnership",href:Xx},{name:"Business Relation",href:Yx}]},community:{title:"Community",links:[{name:"Events",href:Jx},{name:"Blog",href:Zx},{name:"Podcast",href:eS},{name:"Invite a friend",href:tS}]},socials:{title:"Socials",links:[{name:"Telegram",href:nv},{name:"Twitter",href:ev},{name:"Facebook",href:tv}]}},rights:"Auto Fast. All rights reserved",policy:{name:"Privacy & Policy",href:nS},condition:{name:"Terms & Condition",href:rS}},F$=S.footer`
  width: 100vw;
  box-sizing: border-box;
  padding: 5.55vw 4.28vw 0.5vw;
  background-color: ${A$};

  @media (max-width: ${O}) {
    padding: 15.7vw 0 4.17vw 0;
  }
`,H$=S.div`
  margin-bottom: 2.5vw;
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${O}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,B$=S.div`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  justify-content: space-between;

  @media (max-width: ${O}) {
    flex-direction: column;
    align-items: center;
  }
`,U$=S.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${O}) {
    flex-direction: column;
  }
`,W$=S(Fv)`
  @media (max-width: ${O}) {
    width: 43.5vw;
    height: 10.24vw;
  }
`,V$=S.div`
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
`,Bp=S.p`
  ${J};
  margin: 2.54vw 0 2.09vw;
  color: ${Fu};
  ${Wr};
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
`,K$=S(dd)`
  @media (max-width: ${O}) {
    padding-left: 3vw;
  }
`,Up=S.p`
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
`,Wp=S(wt)`
  margin-left: 4.2vw;

  @media (max-width: ${O}) {
    margin: 0;
  }
`,G$=()=>{const e=new Date().getFullYear();return h.jsxs(F$,{children:[h.jsxs(H$,{children:[h.jsxs(V$,{children:[h.jsx(W$,{color:"transparent"}),h.jsx(Bp,{children:jt.text}),h.jsx(K$,{iconsToShow:ed,type:"dark"})]}),h.jsx(pl,{data:jt.nav.about}),h.jsx(pl,{data:jt.nav.community}),h.jsx(pl,{data:jt.nav.socials})]}),h.jsxs(B$,{children:[h.jsxs(Bp,{children:["© ",e," ",jt.rights]}),h.jsxs(U$,{children:[h.jsx(Wp,{color:Fu,href:jt.policy.href,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Up,{children:jt.policy.name})}),h.jsx(Wp,{color:Fu,href:jt.condition.href,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Up,{children:jt.condition.name})})]})]})]})},q$={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Pa{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||q$,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new Pa(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Pa(this.logger,t)}}var Ct=new Pa;class gs{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[t]&&[].concat(this.observers[t]).forEach(a=>{a(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(a=>{a.apply(a,[t,...r])})}}function ni(){let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n}function Vp(e){return e==null?"":""+e}function Q$(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function pd(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function i(){return!e||typeof e=="string"}const o=typeof t!="string"?[].concat(t):t.split(".");for(;o.length>1;){if(i())return{};const a=r(o.shift());!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return i()?{}:{obj:e,k:r(o.shift())}}function Kp(e,t,n){const{obj:r,k:i}=pd(e,t,Object);r[i]=n}function X$(e,t,n,r){const{obj:i,k:o}=pd(e,t,Object);i[o]=i[o]||[],r&&(i[o]=i[o].concat(n)),r||i[o].push(n)}function ja(e,t){const{obj:n,k:r}=pd(e,t);if(n)return n[r]}function Y$(e,t,n){const r=ja(e,n);return r!==void 0?r:ja(t,n)}function Wv(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):Wv(e[r],t[r],n):e[r]=t[r]);return e}function Qn(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var J$={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Z$(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>J$[t]):e}const eO=[" ",",","?","!",";"];function tO(e,t,n){t=t||"",n=n||"";const r=eO.filter(a=>t.indexOf(a)<0&&n.indexOf(a)<0);if(r.length===0)return!0;const i=new RegExp(`(${r.map(a=>a==="?"?"\\?":a).join("|")})`);let o=!i.test(e);if(!o){const a=e.indexOf(n);a>0&&!i.test(e.substring(0,a))&&(o=!0)}return o}function La(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let i=e;for(let o=0;o<r.length;++o){if(!i||typeof i[r[o]]=="string"&&o+1<r.length)return;if(i[r[o]]===void 0){let a=2,s=r.slice(o,o+a).join(n),l=i[s];for(;l===void 0&&r.length>o+a;)a++,s=r.slice(o,o+a).join(n),l=i[s];if(l===void 0)return;if(l===null)return null;if(t.endsWith(s)){if(typeof l=="string")return l;if(s&&typeof l[s]=="string")return l[s]}const u=r.slice(o+a).join(n);return u?La(l,u,n):void 0}i=i[r[o]]}return i}function Ta(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class Gp extends gs{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,a=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let s=[t,n];r&&typeof r!="string"&&(s=s.concat(r)),r&&typeof r=="string"&&(s=s.concat(o?r.split(o):r)),t.indexOf(".")>-1&&(s=t.split("."));const l=ja(this.data,s);return l||!a||typeof r!="string"?l:La(this.data&&this.data[t]&&this.data[t][n],r,o)}addResource(t,n,r,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let s=[t,n];r&&(s=s.concat(a?r.split(a):r)),t.indexOf(".")>-1&&(s=t.split("."),i=n,n=s[1]),this.addNamespaces(n),Kp(this.data,s,i),o.silent||this.emit("added",t,n,r,i)}addResources(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in r)(typeof r[o]=="string"||Object.prototype.toString.apply(r[o])==="[object Array]")&&this.addResource(t,n,o,r[o],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},s=[t,n];t.indexOf(".")>-1&&(s=t.split("."),i=r,r=n,n=s[1]),this.addNamespaces(n);let l=ja(this.data,s)||{};i?Wv(l,r,o):l={...l,...r},Kp(this.data,s,l),a.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var Vv={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(o=>{this.processors[o]&&(t=this.processors[o].process(t,n,r,i))}),t}};const qp={};class _a extends gs{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Q$(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ct.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const a=r&&t.indexOf(r)>-1,s=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!tO(t,r,i);if(a&&!s){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:o};const u=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(u[0])>-1)&&(o=u.shift()),t=u.join(i)}return typeof o=="string"&&(o=[o]),{key:t,namespaces:o}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:a,namespaces:s}=this.extractFromKey(t[t.length-1],n),l=s[s.length-1],u=n.lng||this.language,c=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(c){const x=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${x}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l}:`${l}${x}${a}`}return i?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l}:a}const d=this.resolve(t,n);let f=d&&d.res;const y=d&&d.usedKey||a,v=d&&d.exactUsedKey||a,w=Object.prototype.toString.apply(f),k=["[object Number]","[object Function]","[object RegExp]"],g=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,p=!this.i18nFormat||this.i18nFormat.handleAsObject;if(p&&f&&(typeof f!="string"&&typeof f!="boolean"&&typeof f!="number")&&k.indexOf(w)<0&&!(typeof g=="string"&&w==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(y,f,{...n,ns:s}):`key '${a} (${this.language})' returned an object instead of string.`;return i?(d.res=x,d):x}if(o){const x=w==="[object Array]",b=x?[]:{},C=x?v:y;for(const E in f)if(Object.prototype.hasOwnProperty.call(f,E)){const P=`${C}${o}${E}`;b[E]=this.translate(P,{...n,joinArrays:!1,ns:s}),b[E]===P&&(b[E]=f[E])}f=b}}else if(p&&typeof g=="string"&&w==="[object Array]")f=f.join(g),f&&(f=this.extendTranslation(f,t,n,r));else{let x=!1,b=!1;const C=n.count!==void 0&&typeof n.count!="string",E=_a.hasDefaultValue(n),P=C?this.pluralResolver.getSuffix(u,n.count,n):"",R=n.ordinal&&C?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",z=n[`defaultValue${P}`]||n[`defaultValue${R}`]||n.defaultValue;!this.isValidLookup(f)&&E&&(x=!0,f=z),this.isValidLookup(f)||(b=!0,f=a);const H=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&b?void 0:f,D=E&&z!==f&&this.options.updateMissing;if(b||x||D){if(this.logger.log(D?"updateKey":"missingKey",u,l,a,D?z:f),o){const W=this.resolve(a,{...n,keySeparator:!1});W&&W.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let $=[];const j=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&j&&j[0])for(let W=0;W<j.length;W++)$.push(j[W]);else this.options.saveMissingTo==="all"?$=this.languageUtils.toResolveHierarchy(n.lng||this.language):$.push(n.lng||this.language);const B=(W,L,N)=>{const F=E&&N!==f?N:H;this.options.missingKeyHandler?this.options.missingKeyHandler(W,l,L,F,D,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(W,l,L,F,D,n),this.emit("missingKey",W,l,L,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&C?$.forEach(W=>{this.pluralResolver.getSuffixes(W,n).forEach(L=>{B([W],a+L,n[`defaultValue${L}`]||z)})}):B($,a,z))}f=this.extendTranslation(f,t,n,d,r),b&&f===a&&this.options.appendNamespaceToMissingKey&&(f=`${l}:${a}`),(b||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,x?f:void 0):f=this.options.parseMissingKeyHandler(f))}return i?(d.res=f,d):f}extendTranslation(t,n,r,i,o){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(u){const f=t.match(this.interpolator.nestingRegexp);c=f&&f.length}let d=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,r.lng||this.language,r),u){const f=t.match(this.interpolator.nestingRegexp),y=f&&f.length;c<y&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var f=arguments.length,y=new Array(f),v=0;v<f;v++)y[v]=arguments[v];return o&&o[0]===y[0]&&!r.context?(a.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`),null):a.translate(...y,n)},r)),r.interpolation&&this.interpolator.reset()}const s=r.postProcess||this.options.postProcess,l=typeof s=="string"?[s]:s;return t!=null&&l&&l.length&&r.applyPostProcessor!==!1&&(t=Vv.handle(l,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:i,...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,o,a,s;return typeof t=="string"&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(l,n),c=u.key;i=c;let d=u.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const f=n.count!==void 0&&typeof n.count!="string",y=f&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),v=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",w=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach(k=>{this.isValidLookup(r)||(s=k,!qp[`${w[0]}-${k}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&(qp[`${w[0]}-${k}`]=!0,this.logger.warn(`key "${i}" for languages "${w.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(g=>{if(this.isValidLookup(r))return;a=g;const p=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(p,c,g,k,n);else{let x;f&&(x=this.pluralResolver.getSuffix(g,n.count,n));const b=`${this.options.pluralSeparator}zero`,C=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(p.push(c+x),n.ordinal&&x.indexOf(C)===0&&p.push(c+x.replace(C,this.options.pluralSeparator)),y&&p.push(c+b)),v){const E=`${c}${this.options.contextSeparator}${n.context}`;p.push(E),f&&(p.push(E+x),n.ordinal&&x.indexOf(C)===0&&p.push(E+x.replace(C,this.options.pluralSeparator)),y&&p.push(E+b))}}let m;for(;m=p.pop();)this.isValidLookup(r)||(o=m,r=this.getResource(g,k,m,n))}))})}),{res:r,usedKey:i,exactUsedKey:o,usedLng:a,usedNS:s}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function hl(e){return e.charAt(0).toUpperCase()+e.slice(1)}class Qp{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ct.create("languageUtils")}getScriptPartFromCode(t){if(t=Ta(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=Ta(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=hl(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=hl(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=hl(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&o.indexOf(i)===0)return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],o=a=>{a&&(this.isSupportedCode(a)?i.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):typeof t=="string"&&o(this.formatLanguageCode(t)),r.forEach(a=>{i.indexOf(a)<0&&o(this.formatLanguageCode(a))}),i}}let nO=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],rO={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}};const iO=["v1","v2","v3"],oO=["v4"],Xp={zero:0,one:1,two:2,few:3,many:4,other:5};function aO(){const e={};return nO.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:rO[t.fc]}})}),e}class sO{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=Ct.create("pluralResolver"),(!this.options.compatibilityJSON||oO.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=aO()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Ta(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,o)=>Xp[i]-Xp[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?o():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!iO.includes(this.options.compatibilityJSON)}}function Yp(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=Y$(e,t,n);return!o&&i&&typeof n=="string"&&(o=La(e,n,r),o===void 0&&(o=La(t,n,r))),o}class lO{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ct.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:Z$,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?Qn(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?Qn(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?Qn(n.nestingPrefix):n.nestingPrefixEscaped||Qn("$t("),this.nestingSuffix=n.nestingSuffix?Qn(n.nestingSuffix):n.nestingSuffixEscaped||Qn(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,i){let o,a,s;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(v){return v.replace(/\$/g,"$$$$")}const c=v=>{if(v.indexOf(this.formatSeparator)<0){const p=Yp(n,l,v,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(p,void 0,r,{...i,...n,interpolationkey:v}):p}const w=v.split(this.formatSeparator),k=w.shift().trim(),g=w.join(this.formatSeparator).trim();return this.format(Yp(n,l,k,this.options.keySeparator,this.options.ignoreJSONStructure),g,r,{...i,...n,interpolationkey:k})};this.resetRegExp();const d=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,f=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:v=>u(v)},{regex:this.regexp,safeValue:v=>this.escapeValue?u(this.escape(v)):u(v)}].forEach(v=>{for(s=0;o=v.regex.exec(t);){const w=o[1].trim();if(a=c(w),a===void 0)if(typeof d=="function"){const g=d(t,o,i);a=typeof g=="string"?g:""}else if(i&&Object.prototype.hasOwnProperty.call(i,w))a="";else if(f){a=o[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${t}`),a="";else typeof a!="string"&&!this.useRawValueToEscape&&(a=Vp(a));const k=v.safeValue(a);if(t=t.replace(o[0],k),f?(v.regex.lastIndex+=a.length,v.regex.lastIndex-=o[0].length):v.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,a;function s(l,u){const c=this.nestingOptionsSeparator;if(l.indexOf(c)<0)return l;const d=l.split(new RegExp(`${c}[ ]*{`));let f=`{${d[1]}`;l=d[0],f=this.interpolate(f,a);const y=f.match(/'/g),v=f.match(/"/g);(y&&y.length%2===0&&!v||v.length%2!==0)&&(f=f.replace(/'/g,'"'));try{a=JSON.parse(f),u&&(a={...u,...a})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,w),`${l}${c}${f}`}return delete a.defaultValue,l}for(;i=this.nestingRegexp.exec(t);){let l=[];a={...r},a=a.replace&&typeof a.replace!="string"?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let u=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const c=i[1].split(this.formatSeparator).map(d=>d.trim());i[1]=c.shift(),l=c,u=!0}if(o=n(s.call(this,i[1].trim(),a),a),o&&i[0]===t&&typeof o!="string")return o;typeof o!="string"&&(o=Vp(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),u&&(o=l.reduce((c,d)=>this.format(c,d,r.lng,{...r,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}function uO(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(a=>{if(!a)return;const[s,...l]=a.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,"");n[s.trim()]||(n[s.trim()]=u),u==="false"&&(n[s.trim()]=!1),u==="true"&&(n[s.trim()]=!0),isNaN(u)||(n[s.trim()]=parseInt(u,10))})}return{formatName:t,formatOptions:n}}function Xn(e){const t={};return function(r,i,o){const a=i+JSON.stringify(o);let s=t[a];return s||(s=e(Ta(i),o),t[a]=s),s(r)}}class cO{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ct.create("formatter"),this.options=t,this.formats={number:Xn((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return o=>i.format(o)}),currency:Xn((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return o=>i.format(o)}),datetime:Xn((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return o=>i.format(o)}),relativetime:Xn((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return o=>i.format(o,r.range||"day")}),list:Xn((n,r)=>{const i=new Intl.ListFormat(n,{...r});return o=>i.format(o)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=Xn(n)}format(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((s,l)=>{const{formatName:u,formatOptions:c}=uO(l);if(this.formats[u]){let d=s;try{const f=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},y=f.locale||f.lng||i.locale||i.lng||r;d=this.formats[u](s,y,{...c,...i,...f})}catch(f){this.logger.warn(f)}return d}else this.logger.warn(`there was no format function for ${u}`);return s},t)}}function dO(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class fO extends gs{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=Ct.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(t,n,r,i){const o={},a={},s={},l={};return t.forEach(u=>{let c=!0;n.forEach(d=>{const f=`${u}|${d}`;!r.reload&&this.store.hasResourceBundle(u,d)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?a[f]===void 0&&(a[f]=!0):(this.state[f]=1,c=!1,a[f]===void 0&&(a[f]=!0),o[f]===void 0&&(o[f]=!0),l[d]===void 0&&(l[d]=!0)))}),c||(s[u]=!0)}),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(l)}}loaded(t,n,r){const i=t.split("|"),o=i[0],a=i[1];n&&this.emit("failedLoading",o,a,n),r&&this.store.addResourceBundle(o,a,r),this.state[t]=n?-1:2;const s={};this.queue.forEach(l=>{X$(l.loaded,[o],a),dO(l,t),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{s[u]||(s[u]={});const c=l.loaded[u];c.length&&c.forEach(d=>{s[u][d]===void 0&&(s[u][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(l=>!l.done)}read(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:o,callback:a});return}this.readingCalls++;const s=(u,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(u&&c&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,o*2,a)},o);return}a(u,c)},l=this.backend[r].bind(this.backend);if(l.length===2){try{const u=l(t,n);u&&typeof u.then=="function"?u.then(c=>s(null,c)).catch(s):s(null,u)}catch(u){s(u)}return}return l(t,n,s)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const o=this.queueLoad(t,n,r,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(a=>{this.loadOne(a)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),i=r[0],o=r[1];this.read(i,o,"read",void 0,void 0,(a,s)=>{a&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,a),!a&&s&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,s),this.loaded(t,a,s)})}saveMissing(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const l={...a,isUpdate:o},u=this.backend.create.bind(this.backend);if(u.length<6)try{let c;u.length===5?c=u(t,n,r,i,l):c=u(t,n,r,i),c&&typeof c.then=="function"?c.then(d=>s(null,d)).catch(s):s(null,c)}catch(c){s(c)}else u(t,n,r,i,s,l)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}function Jp(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(i=>{n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Zp(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function So(){}function pO(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class Bi extends gs{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Zp(t),this.services={},this.logger=Ct,this.modules={external:[]},pO(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Jp();this.options={...i,...this.options,...Zp(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function o(c){return c?typeof c=="function"?new c:c:null}if(!this.options.isClone){this.modules.logger?Ct.init(o(this.modules.logger),this.options):Ct.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=cO);const d=new Qp(this.options);this.store=new Gp(this.options.resources,this.options);const f=this.services;f.logger=Ct,f.resourceStore=this.store,f.languageUtils=d,f.pluralResolver=new sO(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(f.formatter=o(c),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new lO(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new fO(o(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(y){for(var v=arguments.length,w=new Array(v>1?v-1:0),k=1;k<v;k++)w[k-1]=arguments[k];t.emit(y,...w)}),this.modules.languageDetector&&(f.languageDetector=o(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=o(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new _a(this.services,this.options),this.translator.on("*",function(y){for(var v=arguments.length,w=new Array(v>1?v-1:0),k=1;k<v;k++)w[k-1]=arguments[k];t.emit(y,...w)}),this.modules.external.forEach(y=>{y.init&&y.init(this)})}if(this.format=this.options.interpolation.format,r||(r=So),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return t.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return t.store[c](...arguments),t}});const l=ni(),u=()=>{const c=(d,f)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(f),r(d,f)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),l}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:So;const i=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode")return r();const o=[],a=s=>{if(!s)return;this.services.languageUtils.toResolveHierarchy(s).forEach(u=>{o.indexOf(u)<0&&o.push(u)})};i?a(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>a(l)),this.options.preload&&this.options.preload.forEach(s=>a(s)),this.services.backendConnector.load(o,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(s)})}else r(null)}reloadResources(t,n,r){const i=ni();return t||(t=this.languages),n||(n=this.options.ns),r||(r=So),this.services.backendConnector.reload(t,n,o=>{i.resolve(),r(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Vv.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const i=ni();this.emit("languageChanging",t);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,u)=>{u?(o(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(l,function(){return r.t(...arguments)})},s=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const u=typeof l=="string"?l:this.services.languageUtils.getBestMatchFromCodes(l);u&&(this.language||o(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,c=>{a(c,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(t),i}getFixedT(t,n,r){var i=this;const o=function(a,s){let l;if(typeof s!="object"){for(var u=arguments.length,c=new Array(u>2?u-2:0),d=2;d<u;d++)c[d-2]=arguments[d];l=i.options.overloadTranslationOptionHandler([a,s].concat(c))}else l={...s};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix=l.keyPrefix||r||o.keyPrefix;const f=i.options.keySeparator||".";let y;return l.keyPrefix&&Array.isArray(a)?y=a.map(v=>`${l.keyPrefix}${f}${v}`):y=l.keyPrefix?`${l.keyPrefix}${f}${a}`:a,i.t(y,l)};return typeof t=="string"?o.lng=t:o.lngs=t,o.ns=n,o.keyPrefix=r,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const u=this.services.backendConnector.state[`${s}|${l}`];return u===-1||u===2};if(n.precheck){const s=n.precheck(this,a);if(s!==void 0)return s}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(r,t)&&(!i||a(o,t)))}loadNamespaces(t,n){const r=ni();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=ni();typeof t=="string"&&(t=[t]);const i=this.options.preload||[],o=t.filter(a=>i.indexOf(a)<0);return o.length?(this.options.preload=i.concat(o),this.loadResources(a=>{r.resolve(),n&&n(a)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new Qp(Jp());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Bi(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:So;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new Bi(i);return(t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(s=>{o[s]=this[s]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},r&&(o.store=new Gp(this.store.data,i),o.services.resourceStore=o.store),o.translator=new _a(o.services,i),o.translator.on("*",function(s){for(var l=arguments.length,u=new Array(l>1?l-1:0),c=1;c<l;c++)u[c-1]=arguments[c];o.emit(s,...u)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Ce=Bi.createInstance();Ce.createInstance=Bi.createInstance;Ce.createInstance;Ce.dir;Ce.init;Ce.loadResources;Ce.reloadResources;Ce.use;Ce.changeLanguage;Ce.getFixedT;Ce.t;Ce.exists;Ce.setDefaultNamespace;Ce.hasLoadedNamespace;Ce.loadNamespaces;Ce.loadLanguages;function Hu(e){"@babel/helpers - typeof";return Hu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hu(e)}var Kv=[],hO=Kv.forEach,gO=Kv.slice;function Bu(e){return hO.call(gO.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e}function Gv(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Hu(XMLHttpRequest))==="object"}function mO(e){return!!e&&typeof e.then=="function"}function vO(e){return mO(e)?e:Promise.resolve(e)}function yO(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Uu={exports:{}},ko={exports:{}},eh;function wO(){return eh||(eh=1,function(e,t){var n=typeof self<"u"?self:rn,r=function(){function o(){this.fetch=!1,this.DOMException=n.DOMException}return o.prototype=n,new o}();(function(o){(function(a){var s={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function l($){return $&&DataView.prototype.isPrototypeOf($)}if(s.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function($){return $&&u.indexOf(Object.prototype.toString.call($))>-1};function d($){if(typeof $!="string"&&($=String($)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test($))throw new TypeError("Invalid character in header field name");return $.toLowerCase()}function f($){return typeof $!="string"&&($=String($)),$}function y($){var j={next:function(){var B=$.shift();return{done:B===void 0,value:B}}};return s.iterable&&(j[Symbol.iterator]=function(){return j}),j}function v($){this.map={},$ instanceof v?$.forEach(function(j,B){this.append(B,j)},this):Array.isArray($)?$.forEach(function(j){this.append(j[0],j[1])},this):$&&Object.getOwnPropertyNames($).forEach(function(j){this.append(j,$[j])},this)}v.prototype.append=function($,j){$=d($),j=f(j);var B=this.map[$];this.map[$]=B?B+", "+j:j},v.prototype.delete=function($){delete this.map[d($)]},v.prototype.get=function($){return $=d($),this.has($)?this.map[$]:null},v.prototype.has=function($){return this.map.hasOwnProperty(d($))},v.prototype.set=function($,j){this.map[d($)]=f(j)},v.prototype.forEach=function($,j){for(var B in this.map)this.map.hasOwnProperty(B)&&$.call(j,this.map[B],B,this)},v.prototype.keys=function(){var $=[];return this.forEach(function(j,B){$.push(B)}),y($)},v.prototype.values=function(){var $=[];return this.forEach(function(j){$.push(j)}),y($)},v.prototype.entries=function(){var $=[];return this.forEach(function(j,B){$.push([B,j])}),y($)},s.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function w($){if($.bodyUsed)return Promise.reject(new TypeError("Already read"));$.bodyUsed=!0}function k($){return new Promise(function(j,B){$.onload=function(){j($.result)},$.onerror=function(){B($.error)}})}function g($){var j=new FileReader,B=k(j);return j.readAsArrayBuffer($),B}function p($){var j=new FileReader,B=k(j);return j.readAsText($),B}function m($){for(var j=new Uint8Array($),B=new Array(j.length),W=0;W<j.length;W++)B[W]=String.fromCharCode(j[W]);return B.join("")}function x($){if($.slice)return $.slice(0);var j=new Uint8Array($.byteLength);return j.set(new Uint8Array($)),j.buffer}function b(){return this.bodyUsed=!1,this._initBody=function($){this._bodyInit=$,$?typeof $=="string"?this._bodyText=$:s.blob&&Blob.prototype.isPrototypeOf($)?this._bodyBlob=$:s.formData&&FormData.prototype.isPrototypeOf($)?this._bodyFormData=$:s.searchParams&&URLSearchParams.prototype.isPrototypeOf($)?this._bodyText=$.toString():s.arrayBuffer&&s.blob&&l($)?(this._bodyArrayBuffer=x($.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf($)||c($))?this._bodyArrayBuffer=x($):this._bodyText=$=Object.prototype.toString.call($):this._bodyText="",this.headers.get("content-type")||(typeof $=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s.searchParams&&URLSearchParams.prototype.isPrototypeOf($)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s.blob&&(this.blob=function(){var $=w(this);if($)return $;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?w(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var $=w(this);if($)return $;if(this._bodyBlob)return p(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(m(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s.formData&&(this.formData=function(){return this.text().then(R)}),this.json=function(){return this.text().then(JSON.parse)},this}var C=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function E($){var j=$.toUpperCase();return C.indexOf(j)>-1?j:$}function P($,j){j=j||{};var B=j.body;if($ instanceof P){if($.bodyUsed)throw new TypeError("Already read");this.url=$.url,this.credentials=$.credentials,j.headers||(this.headers=new v($.headers)),this.method=$.method,this.mode=$.mode,this.signal=$.signal,!B&&$._bodyInit!=null&&(B=$._bodyInit,$.bodyUsed=!0)}else this.url=String($);if(this.credentials=j.credentials||this.credentials||"same-origin",(j.headers||!this.headers)&&(this.headers=new v(j.headers)),this.method=E(j.method||this.method||"GET"),this.mode=j.mode||this.mode||null,this.signal=j.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&B)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(B)}P.prototype.clone=function(){return new P(this,{body:this._bodyInit})};function R($){var j=new FormData;return $.trim().split("&").forEach(function(B){if(B){var W=B.split("="),L=W.shift().replace(/\+/g," "),N=W.join("=").replace(/\+/g," ");j.append(decodeURIComponent(L),decodeURIComponent(N))}}),j}function z($){var j=new v,B=$.replace(/\r?\n[\t ]+/g," ");return B.split(/\r?\n/).forEach(function(W){var L=W.split(":"),N=L.shift().trim();if(N){var F=L.join(":").trim();j.append(N,F)}}),j}b.call(P.prototype);function A($,j){j||(j={}),this.type="default",this.status=j.status===void 0?200:j.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in j?j.statusText:"OK",this.headers=new v(j.headers),this.url=j.url||"",this._initBody($)}b.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},A.error=function(){var $=new A(null,{status:0,statusText:""});return $.type="error",$};var H=[301,302,303,307,308];A.redirect=function($,j){if(H.indexOf(j)===-1)throw new RangeError("Invalid status code");return new A(null,{status:j,headers:{location:$}})},a.DOMException=o.DOMException;try{new a.DOMException}catch{a.DOMException=function(j,B){this.message=j,this.name=B;var W=Error(j);this.stack=W.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function D($,j){return new Promise(function(B,W){var L=new P($,j);if(L.signal&&L.signal.aborted)return W(new a.DOMException("Aborted","AbortError"));var N=new XMLHttpRequest;function F(){N.abort()}N.onload=function(){var Q={status:N.status,statusText:N.statusText,headers:z(N.getAllResponseHeaders()||"")};Q.url="responseURL"in N?N.responseURL:Q.headers.get("X-Request-URL");var K="response"in N?N.response:N.responseText;B(new A(K,Q))},N.onerror=function(){W(new TypeError("Network request failed"))},N.ontimeout=function(){W(new TypeError("Network request failed"))},N.onabort=function(){W(new a.DOMException("Aborted","AbortError"))},N.open(L.method,L.url,!0),L.credentials==="include"?N.withCredentials=!0:L.credentials==="omit"&&(N.withCredentials=!1),"responseType"in N&&s.blob&&(N.responseType="blob"),L.headers.forEach(function(Q,K){N.setRequestHeader(K,Q)}),L.signal&&(L.signal.addEventListener("abort",F),N.onreadystatechange=function(){N.readyState===4&&L.signal.removeEventListener("abort",F)}),N.send(typeof L._bodyInit>"u"?null:L._bodyInit)})}return D.polyfill=!0,o.fetch||(o.fetch=D,o.Headers=v,o.Request=P,o.Response=A),a.Headers=v,a.Request=P,a.Response=A,a.fetch=D,Object.defineProperty(a,"__esModule",{value:!0}),a})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=r;t=i.fetch,t.default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t}(ko,ko.exports)),ko.exports}(function(e,t){var n;if(typeof fetch=="function"&&(typeof rn<"u"&&rn.fetch?n=rn.fetch:typeof window<"u"&&window.fetch?n=window.fetch:n=fetch),typeof yO<"u"&&(typeof window>"u"||typeof window.document>"u")){var r=n||wO();r.default&&(r=r.default),t.default=r,e.exports=t.default}})(Uu,Uu.exports);var qv=Uu.exports;const Qv=Vu(qv),th=ah({__proto__:null,default:Qv},[qv]);function Ra(e){"@babel/helpers - typeof";return Ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ra(e)}var Mt;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?Mt=global.fetch:typeof window<"u"&&window.fetch?Mt=window.fetch:Mt=fetch);var Ui;Gv()&&(typeof global<"u"&&global.XMLHttpRequest?Ui=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Ui=window.XMLHttpRequest));var za;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?za=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(za=window.ActiveXObject));!Mt&&th&&!Ui&&!za&&(Mt=Qv||th);typeof Mt!="function"&&(Mt=void 0);var Wu=function(t,n){if(n&&Ra(n)==="object"){var r="";for(var i in n)r+="&"+encodeURIComponent(i)+"="+encodeURIComponent(n[i]);if(!r)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+r.slice(1)}return t},nh=function(t,n,r){Mt(t,n).then(function(i){if(!i.ok)return r(i.statusText||"Error",{status:i.status});i.text().then(function(o){r(null,{status:i.status,data:o})}).catch(r)}).catch(r)},rh=!1,xO=function(t,n,r,i){t.queryStringParams&&(n=Wu(n,t.queryStringParams));var o=Bu({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);r&&(o["Content-Type"]="application/json");var a=typeof t.requestOptions=="function"?t.requestOptions(r):t.requestOptions,s=Bu({method:r?"POST":"GET",body:r?t.stringify(r):void 0,headers:o},rh?{}:a);try{nh(n,s,i)}catch(l){if(!a||Object.keys(a).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(a).forEach(function(u){delete s[u]}),nh(n,s,i),rh=!0}catch(u){i(u)}}},SO=function(t,n,r,i){r&&Ra(r)==="object"&&(r=Wu("",r).slice(1)),t.queryStringParams&&(n=Wu(n,t.queryStringParams));try{var o;Ui?o=new Ui:o=new za("MSXML2.XMLHTTP.3.0"),o.open(r?"POST":"GET",n,1),t.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!t.withCredentials,r&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var a=t.customHeaders;if(a=typeof a=="function"?a():a,a)for(var s in a)o.setRequestHeader(s,a[s]);o.onreadystatechange=function(){o.readyState>3&&i(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(r)}catch(l){console&&console.log(l)}},kO=function(t,n,r,i){if(typeof r=="function"&&(i=r,r=void 0),i=i||function(){},Mt&&n.indexOf("file:")!==0)return xO(t,n,r,i);if(Gv()||typeof ActiveXObject=="function")return SO(t,n,r,i);i(new Error("No fetch and no xhr implementation found!"))};function Wi(e){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wi(e)}function bO(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ih(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Xv(r.key),r)}}function CO(e,t,n){return t&&ih(e.prototype,t),n&&ih(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $O(e,t,n){return t=Xv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xv(e){var t=OO(e,"string");return Wi(t)==="symbol"?t:String(t)}function OO(e,t){if(Wi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Wi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var EO=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,r,i){return $O({},r,i||"")},parseLoadPayload:function(n,r){},request:kO,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Yv=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};bO(this,e),this.services=t,this.options=n,this.allOptions=r,this.type="backend",this.init(t,n,r)}return CO(e,[{key:"init",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=n,this.options=Bu(i,this.options||{},EO()),this.allOptions=o,this.services&&this.options.reloadInterval&&setInterval(function(){return r.reload()},this.options.reloadInterval)}},{key:"readMulti",value:function(n,r,i){this._readAny(n,n,r,r,i)}},{key:"read",value:function(n,r,i){this._readAny([n],n,[r],r,i)}},{key:"_readAny",value:function(n,r,i,o,a){var s=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(n,i)),l=vO(l),l.then(function(u){if(!u)return a(null,{});var c=s.services.interpolator.interpolate(u,{lng:n.join("+"),ns:i.join("+")});s.loadUrl(c,a,r,o)})}},{key:"loadUrl",value:function(n,r,i,o){var a=this,s=typeof i=="string"?[i]:i,l=typeof o=="string"?[o]:o,u=this.options.parseLoadPayload(s,l);this.options.request(this.options,n,u,function(c,d){if(d&&(d.status>=500&&d.status<600||!d.status))return r("failed loading "+n+"; status code: "+d.status,!0);if(d&&d.status>=400&&d.status<500)return r("failed loading "+n+"; status code: "+d.status,!1);if(!d&&c&&c.message&&c.message.indexOf("Failed to fetch")>-1)return r("failed loading "+n+": "+c.message,!0);if(c)return r(c,!1);var f,y;try{typeof d.data=="string"?f=a.options.parse(d.data,i,o):f=d.data}catch{y="failed parsing "+n+" to json"}if(y)return r(y,!1);r(null,f)})}},{key:"create",value:function(n,r,i,o,a){var s=this;if(this.options.addPath){typeof n=="string"&&(n=[n]);var l=this.options.parsePayload(r,i,o),u=0,c=[],d=[];n.forEach(function(f){var y=s.options.addPath;typeof s.options.addPath=="function"&&(y=s.options.addPath(f,r));var v=s.services.interpolator.interpolate(y,{lng:f,ns:r});s.options.request(s.options,v,l,function(w,k){u+=1,c.push(w),d.push(k),u===n.length&&typeof a=="function"&&a(c,d)})})}}},{key:"reload",value:function(){var n=this,r=this.services,i=r.backendConnector,o=r.languageUtils,a=r.logger,s=i.language;if(!(s&&s.toLowerCase()==="cimode")){var l=[],u=function(d){var f=o.toResolveHierarchy(d);f.forEach(function(y){l.indexOf(y)<0&&l.push(y)})};u(s),this.allOptions.preload&&this.allOptions.preload.forEach(function(c){return u(c)}),l.forEach(function(c){n.allOptions.ns.forEach(function(d){i.read(c,d,"read",null,null,function(f,y){f&&a.warn("loading namespace ".concat(d," for language ").concat(c," failed"),f),!f&&y&&a.log("loaded namespace ".concat(d," for language ").concat(c),y),i.loaded("".concat(c,"|").concat(d),f,y)})})})}}}]),e}();Yv.type="backend";Ce.use(Yv).use(Lx).init({debug:!0,backend:{loadPath:"/thoth/locales/{{lng}}.json"},interpolation:{escapeValue:!1},fallbackLng:"en",supportedLngs:["en","ru"]});const PO=S.div`
  max-height: ${({$isBurgerMenuOpen:e,$containerHeight:t,$headerHeight:n,$isLanguagesOpen:r})=>(e||r)&&t<window.innerHeight?`calc(${window.innerHeight}px - ${n}px)`:(e||r)&&t>=window.innerHeight?`${t}px`:"auto"};
  overflow: ${({$isBurgerMenuOpen:e,$isLanguagesOpen:t})=>e||t?"clip":"auto"};
`,oh=({children:e,sections:t,isLanguagesOpen:n,isBurgerMenuOpen:r,languagesHandler:i,burgerMenuHandler:o,paymentFeesHeight:a,mainScreenHeight:s})=>{const l=T.useRef(null),[u,c]=T.useState(0),d=yt();return T.useEffect(()=>{document.documentElement.lang=Ce.language},[]),T.useEffect(()=>{const f=()=>{if(l.current){const y=l.current.clientHeight;c(y)}};return f(),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)}},[l,r,n,d]),h.jsxs(Rx,{i18n:Ce,children:[h.jsx(z$,{ref:l,headerHeight:u,isLanguagesOpen:n,isBurgerMenuOpen:r,languagesHandler:i,burgerMenuHandler:o,containerHeight:s||a,paymentFeesHeight:a,sections:t}),h.jsxs(PO,{className:"styled-container",$isBurgerMenuOpen:r,$containerHeight:s||a,$isLanguagesOpen:n,$headerHeight:u,children:[e,h.jsx(G$,{})]})]})},jO=()=>{const e=T.useRef(null),t=T.useRef(null),[n,r]=T.useState(null),[i,o]=T.useState(null),[a,s]=T.useState(0),[l,u]=T.useState(0),{t:c}=as(),d=[{id:"1",title:c("sections.one")},{id:"3",title:c("sections.three")},{id:"4",title:c("sections.four")}];T.useEffect(()=>{const w=()=>{if(e.current){const k=e.current.clientHeight;s(k)}};return w(),window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w)}},[e,i,n]),T.useEffect(()=>{const w=()=>{if(t.current){const k=t.current.clientHeight;u(k)}};return w(),window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w)}},[t,i,n]);const f=()=>{setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},300)},y=()=>{r(!n),i&&v(),n||f()},v=()=>{o(!i),i||f()};return h.jsxs(g1,{basename:"/thoth/",children:[h.jsx(qC,{}),h.jsxs(p1,{children:[h.jsx(No,{path:"/",element:h.jsx(oh,{isLanguagesOpen:n,isBurgerMenuOpen:i,languagesHandler:y,burgerMenuHandler:v,paymentFeesHeight:l,mainScreenHeight:a,sections:d,children:h.jsx(CC,{mainScreenRef:e,sections:d})})}),h.jsx(No,{path:"/payment-fees",element:h.jsx(oh,{isLanguagesOpen:n,isBurgerMenuOpen:i,languagesHandler:y,burgerMenuHandler:v,paymentFeesHeight:l,mainScreenHeight:a,sections:d,children:h.jsx(GC,{ref:t})})}),h.jsx(No,{path:"*",element:h.jsx(QC,{})})]})]})};gl.createRoot(document.getElementById("root")).render(h.jsx(T.StrictMode,{children:h.jsx(jO,{})}));
//# sourceMappingURL=main-3394a817.js.map
