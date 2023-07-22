function ky(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ot=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ju(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function by(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var mh={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ai=Symbol.for("react.element"),Oy=Symbol.for("react.portal"),Cy=Symbol.for("react.fragment"),$y=Symbol.for("react.strict_mode"),Ey=Symbol.for("react.profiler"),_y=Symbol.for("react.provider"),Py=Symbol.for("react.context"),Ty=Symbol.for("react.forward_ref"),jy=Symbol.for("react.suspense"),Ly=Symbol.for("react.memo"),Ry=Symbol.for("react.lazy"),kd=Symbol.iterator;function Ny(e){return e===null||typeof e!="object"?null:(e=kd&&e[kd]||e["@@iterator"],typeof e=="function"?e:null)}var vh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yh=Object.assign,wh={};function Rr(e,t,n){this.props=e,this.context=t,this.refs=wh,this.updater=n||vh}Rr.prototype.isReactComponent={};Rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sh(){}Sh.prototype=Rr.prototype;function Zu(e,t,n){this.props=e,this.context=t,this.refs=wh,this.updater=n||vh}var ec=Zu.prototype=new Sh;ec.constructor=Zu;yh(ec,Rr.prototype);ec.isPureReactComponent=!0;var bd=Array.isArray,xh=Object.prototype.hasOwnProperty,tc={current:null},kh={key:!0,ref:!0,__self:!0,__source:!0};function bh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)xh.call(t,r)&&!kh.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ai,type:e,key:o,ref:a,props:i,_owner:tc.current}}function zy(e,t){return{$$typeof:Ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ai}function My(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Od=/\/+/g;function bs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?My(""+e.key):t.toString(36)}function Po(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ai:case Oy:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+bs(a,0):r,bd(i)?(n="",e!=null&&(n=e.replace(Od,"$&/")+"/"),Po(i,t,n,"",function(u){return u})):i!=null&&(nc(i)&&(i=zy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Od,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",bd(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+bs(o,s);a+=Po(o,t,n,l,i)}else if(l=Ny(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+bs(o,s++),a+=Po(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function eo(e,t,n){if(e==null)return e;var r=[],i=0;return Po(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Iy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},To={transition:null},Dy={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:To,ReactCurrentOwner:tc};Y.Children={map:eo,forEach:function(e,t,n){eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eo(e,function(){t++}),t},toArray:function(e){return eo(e,function(t){return t})||[]},only:function(e){if(!nc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Rr;Y.Fragment=Cy;Y.Profiler=Ey;Y.PureComponent=Zu;Y.StrictMode=$y;Y.Suspense=jy;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=yh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=tc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)xh.call(t,l)&&!kh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ai,type:e.type,key:i,ref:o,props:r,_owner:a}};Y.createContext=function(e){return e={$$typeof:Py,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_y,_context:e},e.Consumer=e};Y.createElement=bh;Y.createFactory=function(e){var t=bh.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Ty,render:e}};Y.isValidElement=nc;Y.lazy=function(e){return{$$typeof:Ry,_payload:{_status:-1,_result:e},_init:Iy}};Y.memo=function(e,t){return{$$typeof:Ly,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=To.transition;To.transition={};try{e()}finally{To.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Ae.current.useCallback(e,t)};Y.useContext=function(e){return Ae.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ae.current.useEffect(e,t)};Y.useId=function(){return Ae.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ae.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};Y.useRef=function(e){return Ae.current.useRef(e)};Y.useState=function(e){return Ae.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ae.current.useTransition()};Y.version="18.2.0";mh.exports=Y;var B=mh.exports;const Ot=Ju(B);var Oh={exports:{}},Aa={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay=B,Hy=Symbol.for("react.element"),Fy=Symbol.for("react.fragment"),By=Object.prototype.hasOwnProperty,Uy=Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wy={key:!0,ref:!0,__self:!0,__source:!0};function Ch(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)By.call(t,r)&&!Wy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Hy,type:e,key:o,ref:a,props:i,_owner:Uy.current}}Aa.Fragment=Fy;Aa.jsx=Ch;Aa.jsxs=Ch;Oh.exports=Aa;var h=Oh.exports,Ol={},$h={exports:{}},Ze={},Eh={exports:{}},_h={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,N){var H=T.length;T.push(N);e:for(;0<H;){var G=H-1>>>1,q=T[G];if(0<i(q,N))T[G]=N,T[H]=q,H=G;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var N=T[0],H=T.pop();if(H!==N){T[0]=H;e:for(var G=0,q=T.length,Lt=q>>>1;G<Lt;){var $e=2*(G+1)-1,Qt=T[$e],Qe=$e+1,Rt=T[Qe];if(0>i(Qt,H))Qe<q&&0>i(Rt,Qt)?(T[G]=Rt,T[Qe]=H,G=Qe):(T[G]=Qt,T[$e]=H,G=$e);else if(Qe<q&&0>i(Rt,H))T[G]=Rt,T[Qe]=H,G=Qe;else break e}}return N}function i(T,N){var H=T.sortIndex-N.sortIndex;return H!==0?H:T.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,d=null,f=3,y=!1,v=!1,S=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=T)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function w(T){if(S=!1,m(T),!v)if(n(l)!==null)v=!0,F(k);else{var N=n(u);N!==null&&W(w,N.startTime-T)}}function k(T,N){v=!1,S&&(S=!1,g($),$=-1),y=!0;var H=f;try{for(m(N),d=n(l);d!==null&&(!(d.expirationTime>N)||T&&!D());){var G=d.callback;if(typeof G=="function"){d.callback=null,f=d.priorityLevel;var q=G(d.expirationTime<=N);N=e.unstable_now(),typeof q=="function"?d.callback=q:d===n(l)&&r(l),m(N)}else r(l);d=n(l)}if(d!==null)var Lt=!0;else{var $e=n(u);$e!==null&&W(w,$e.startTime-N),Lt=!1}return Lt}finally{d=null,f=H,y=!1}}var x=!1,O=null,$=-1,L=5,j=-1;function D(){return!(e.unstable_now()-j<L)}function A(){if(O!==null){var T=e.unstable_now();j=T;var N=!0;try{N=O(!0,T)}finally{N?M():(x=!1,O=null)}}else x=!1}var M;if(typeof p=="function")M=function(){p(A)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,P=C.port2;C.port1.onmessage=A,M=function(){P.postMessage(null)}}else M=function(){E(A,0)};function F(T){O=T,x||(x=!0,M())}function W(T,N){$=E(function(){T(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,F(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var H=f;f=N;try{return T()}finally{f=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,N){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var H=f;f=T;try{return N()}finally{f=H}},e.unstable_scheduleCallback=function(T,N,H){var G=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?G+H:G):H=G,T){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=H+q,T={id:c++,callback:N,priorityLevel:T,startTime:H,expirationTime:q,sortIndex:-1},H>G?(T.sortIndex=H,t(u,T),n(l)===null&&T===n(u)&&(S?(g($),$=-1):S=!0,W(w,H-G))):(T.sortIndex=q,t(l,T),v||y||(v=!0,F(k))),T},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(T){var N=f;return function(){var H=f;f=N;try{return T.apply(this,arguments)}finally{f=H}}}})(_h);Eh.exports=_h;var Vy=Eh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph=B,Je=Vy;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Th=new Set,gi={};function Wn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(gi[e]=t,e=0;e<t.length;e++)Th.add(t[e])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cl=Object.prototype.hasOwnProperty,qy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cd={},$d={};function Ky(e){return Cl.call($d,e)?!0:Cl.call(Cd,e)?!1:qy.test(e)?$d[e]=!0:(Cd[e]=!0,!1)}function Qy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gy(e,t,n,r){if(t===null||typeof t>"u"||Qy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var rc=/[\-:]([a-z])/g;function ic(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rc,ic);Pe[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rc,ic);Pe[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rc,ic);Pe[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function oc(e,t,n,r){var i=Pe.hasOwnProperty(t)?Pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gy(t,n,i,r)&&(n=null),r||i===null?Ky(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qt=Ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),$l=Symbol.for("react.profiler"),jh=Symbol.for("react.provider"),Lh=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),El=Symbol.for("react.suspense"),_l=Symbol.for("react.suspense_list"),lc=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),Rh=Symbol.for("react.offscreen"),Ed=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=Ed&&e[Ed]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,Os;function Xr(e){if(Os===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Os=t&&t[1]||""}return`
`+Os+e}var Cs=!1;function $s(e,t){if(!e||Cs)return"";Cs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Cs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xr(e):""}function Yy(e){switch(e.tag){case 5:return Xr(e.type);case 16:return Xr("Lazy");case 13:return Xr("Suspense");case 19:return Xr("SuspenseList");case 0:case 2:case 15:return e=$s(e.type,!1),e;case 11:return e=$s(e.type.render,!1),e;case 1:return e=$s(e.type,!0),e;default:return""}}function Pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Xn:return"Portal";case $l:return"Profiler";case ac:return"StrictMode";case El:return"Suspense";case _l:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lh:return(e.displayName||"Context")+".Consumer";case jh:return(e._context.displayName||"Context")+".Provider";case sc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lc:return t=e.displayName||null,t!==null?t:Pl(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return Pl(e(t))}catch{}}return null}function Xy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pl(t);case 8:return t===ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jy(e){var t=Nh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function no(e){e._valueTracker||(e._valueTracker=Jy(e))}function zh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Nh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tl(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _d(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mh(e,t){t=t.checked,t!=null&&oc(e,"checked",t,!1)}function jl(e,t){Mh(e,t);var n=wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ll(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ll(e,t,n){(t!=="number"||Vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jr=Array.isArray;function dr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Td(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Jr(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function Ih(e,t){var n=wn(t.value),r=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,Ah=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zy=["Webkit","ms","Moz","O"];Object.keys(ii).forEach(function(e){Zy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ii[t]=ii[e]})});function Hh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ii.hasOwnProperty(e)&&ii[e]?(""+t).trim():t+"px"}function Fh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var e0=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(e0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Il=null;function uc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,fr=null,pr=null;function Ld(e){if(e=Bi(e)){if(typeof Dl!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Wa(t),Dl(e.stateNode,e.type,t))}}function Bh(e){fr?pr?pr.push(e):pr=[e]:fr=e}function Uh(){if(fr){var e=fr,t=pr;if(pr=fr=null,Ld(e),t)for(e=0;e<t.length;e++)Ld(t[e])}}function Wh(e,t){return e(t)}function Vh(){}var Es=!1;function qh(e,t,n){if(Es)return e(t,n);Es=!0;try{return Wh(e,t,n)}finally{Es=!1,(fr!==null||pr!==null)&&(Vh(),Uh())}}function vi(e,t){var n=e.stateNode;if(n===null)return null;var r=Wa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Al=!1;if(Bt)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){Al=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Al=!1}function t0(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var oi=!1,qo=null,Ko=!1,Hl=null,n0={onError:function(e){oi=!0,qo=e}};function r0(e,t,n,r,i,o,a,s,l){oi=!1,qo=null,t0.apply(n0,arguments)}function i0(e,t,n,r,i,o,a,s,l){if(r0.apply(this,arguments),oi){if(oi){var u=qo;oi=!1,qo=null}else throw Error(R(198));Ko||(Ko=!0,Hl=u)}}function Vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rd(e){if(Vn(e)!==e)throw Error(R(188))}function o0(e){var t=e.alternate;if(!t){if(t=Vn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Rd(i),e;if(o===r)return Rd(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Qh(e){return e=o0(e),e!==null?Gh(e):null}function Gh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gh(e);if(t!==null)return t;e=e.sibling}return null}var Yh=Je.unstable_scheduleCallback,Nd=Je.unstable_cancelCallback,a0=Je.unstable_shouldYield,s0=Je.unstable_requestPaint,ye=Je.unstable_now,l0=Je.unstable_getCurrentPriorityLevel,cc=Je.unstable_ImmediatePriority,Xh=Je.unstable_UserBlockingPriority,Qo=Je.unstable_NormalPriority,u0=Je.unstable_LowPriority,Jh=Je.unstable_IdlePriority,Ha=null,Et=null;function c0(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Ha,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:p0,d0=Math.log,f0=Math.LN2;function p0(e){return e>>>=0,e===0?32:31-(d0(e)/f0|0)|0}var io=64,oo=4194304;function Zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Go(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Zr(s):(o&=a,o!==0&&(r=Zr(o)))}else a=n&~i,a!==0?r=Zr(a):o!==0&&(r=Zr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),i=1<<n,r|=e[n],t&=~i;return r}function h0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-gt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=h0(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Fl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zh(){var e=io;return io<<=1,!(io&4194240)&&(io=64),e}function _s(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function m0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-gt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function dc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function eg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tg,fc,ng,rg,ig,Bl=!1,ao=[],cn=null,dn=null,fn=null,yi=new Map,wi=new Map,on=[],v0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zd(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(t.pointerId)}}function Br(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Bi(t),t!==null&&fc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function y0(e,t,n,r,i){switch(t){case"focusin":return cn=Br(cn,e,t,n,r,i),!0;case"dragenter":return dn=Br(dn,e,t,n,r,i),!0;case"mouseover":return fn=Br(fn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return yi.set(o,Br(yi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,wi.set(o,Br(wi.get(o)||null,e,t,n,r,i)),!0}return!1}function og(e){var t=Tn(e.target);if(t!==null){var n=Vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Kh(n),t!==null){e.blockedOn=t,ig(e.priority,function(){ng(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Il=r,n.target.dispatchEvent(r),Il=null}else return t=Bi(n),t!==null&&fc(t),e.blockedOn=n,!1;t.shift()}return!0}function Md(e,t,n){jo(e)&&n.delete(t)}function w0(){Bl=!1,cn!==null&&jo(cn)&&(cn=null),dn!==null&&jo(dn)&&(dn=null),fn!==null&&jo(fn)&&(fn=null),yi.forEach(Md),wi.forEach(Md)}function Ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Bl||(Bl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,w0)))}function Si(e){function t(i){return Ur(i,e)}if(0<ao.length){Ur(ao[0],e);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cn!==null&&Ur(cn,e),dn!==null&&Ur(dn,e),fn!==null&&Ur(fn,e),yi.forEach(t),wi.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)og(n),n.blockedOn===null&&on.shift()}var hr=qt.ReactCurrentBatchConfig,Yo=!0;function S0(e,t,n,r){var i=te,o=hr.transition;hr.transition=null;try{te=1,pc(e,t,n,r)}finally{te=i,hr.transition=o}}function x0(e,t,n,r){var i=te,o=hr.transition;hr.transition=null;try{te=4,pc(e,t,n,r)}finally{te=i,hr.transition=o}}function pc(e,t,n,r){if(Yo){var i=Ul(e,t,n,r);if(i===null)Ds(e,t,r,Xo,n),zd(e,r);else if(y0(i,e,t,n,r))r.stopPropagation();else if(zd(e,r),t&4&&-1<v0.indexOf(e)){for(;i!==null;){var o=Bi(i);if(o!==null&&tg(o),o=Ul(e,t,n,r),o===null&&Ds(e,t,r,Xo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ds(e,t,r,null,n)}}var Xo=null;function Ul(e,t,n,r){if(Xo=null,e=uc(r),e=Tn(e),e!==null)if(t=Vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xo=e,null}function ag(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l0()){case cc:return 1;case Xh:return 4;case Qo:case u0:return 16;case Jh:return 536870912;default:return 16}default:return 16}}var ln=null,hc=null,Lo=null;function sg(){if(Lo)return Lo;var e,t=hc,n=t.length,r,i="value"in ln?ln.value:ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Lo=i.slice(e,1<r?1-r:void 0)}function Ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function so(){return!0}function Id(){return!1}function et(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?so:Id,this.isPropagationStopped=Id,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=et(Nr),Fi=he({},Nr,{view:0,detail:0}),k0=et(Fi),Ps,Ts,Wr,Fa=he({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(Ps=e.screenX-Wr.screenX,Ts=e.screenY-Wr.screenY):Ts=Ps=0,Wr=e),Ps)},movementY:function(e){return"movementY"in e?e.movementY:Ts}}),Dd=et(Fa),b0=he({},Fa,{dataTransfer:0}),O0=et(b0),C0=he({},Fi,{relatedTarget:0}),js=et(C0),$0=he({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),E0=et($0),_0=he({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P0=et(_0),T0=he({},Nr,{data:0}),Ad=et(T0),j0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R0[e])?!!t[e]:!1}function mc(){return N0}var z0=he({},Fi,{key:function(e){if(e.key){var t=j0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?L0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(e){return e.type==="keypress"?Ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M0=et(z0),I0=he({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=et(I0),D0=he({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),A0=et(D0),H0=he({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=et(H0),B0=he({},Fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=et(B0),W0=[9,13,27,32],vc=Bt&&"CompositionEvent"in window,ai=null;Bt&&"documentMode"in document&&(ai=document.documentMode);var V0=Bt&&"TextEvent"in window&&!ai,lg=Bt&&(!vc||ai&&8<ai&&11>=ai),Fd=String.fromCharCode(32),Bd=!1;function ug(e,t){switch(e){case"keyup":return W0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function q0(e,t){switch(e){case"compositionend":return cg(t);case"keypress":return t.which!==32?null:(Bd=!0,Fd);case"textInput":return e=t.data,e===Fd&&Bd?null:e;default:return null}}function K0(e,t){if(Zn)return e==="compositionend"||!vc&&ug(e,t)?(e=sg(),Lo=hc=ln=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lg&&t.locale!=="ko"?null:t.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Q0[e.type]:t==="textarea"}function dg(e,t,n,r){Bh(r),t=Jo(t,"onChange"),0<t.length&&(n=new gc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var si=null,xi=null;function G0(e){kg(e,0)}function Ba(e){var t=nr(e);if(zh(t))return e}function Y0(e,t){if(e==="change")return t}var fg=!1;if(Bt){var Ls;if(Bt){var Rs="oninput"in document;if(!Rs){var Wd=document.createElement("div");Wd.setAttribute("oninput","return;"),Rs=typeof Wd.oninput=="function"}Ls=Rs}else Ls=!1;fg=Ls&&(!document.documentMode||9<document.documentMode)}function Vd(){si&&(si.detachEvent("onpropertychange",pg),xi=si=null)}function pg(e){if(e.propertyName==="value"&&Ba(xi)){var t=[];dg(t,xi,e,uc(e)),qh(G0,t)}}function X0(e,t,n){e==="focusin"?(Vd(),si=t,xi=n,si.attachEvent("onpropertychange",pg)):e==="focusout"&&Vd()}function J0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ba(xi)}function Z0(e,t){if(e==="click")return Ba(t)}function ew(e,t){if(e==="input"||e==="change")return Ba(t)}function tw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:tw;function ki(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cl.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kd(e,t){var n=qd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qd(n)}}function hg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gg(){for(var e=window,t=Vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vo(e.document)}return t}function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nw(e){var t=gg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hg(n.ownerDocument.documentElement,n)){if(r!==null&&yc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Kd(n,o);var a=Kd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rw=Bt&&"documentMode"in document&&11>=document.documentMode,er=null,Wl=null,li=null,Vl=!1;function Qd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vl||er==null||er!==Vo(r)||(r=er,"selectionStart"in r&&yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),li&&ki(li,r)||(li=r,r=Jo(Wl,"onSelect"),0<r.length&&(t=new gc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Ns={},mg={};Bt&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Ua(e){if(Ns[e])return Ns[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mg)return Ns[e]=t[n];return e}var vg=Ua("animationend"),yg=Ua("animationiteration"),wg=Ua("animationstart"),Sg=Ua("transitionend"),xg=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){xg.set(e,t),Wn(t,[e])}for(var zs=0;zs<Gd.length;zs++){var Ms=Gd[zs],iw=Ms.toLowerCase(),ow=Ms[0].toUpperCase()+Ms.slice(1);xn(iw,"on"+ow)}xn(vg,"onAnimationEnd");xn(yg,"onAnimationIteration");xn(wg,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Sg,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function Yd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,i0(r,t,void 0,e),e.currentTarget=null}function kg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Yd(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Yd(i,s,u),o=l}}}if(Ko)throw e=Hl,Ko=!1,Hl=null,e}function re(e,t){var n=t[Yl];n===void 0&&(n=t[Yl]=new Set);var r=e+"__bubble";n.has(r)||(bg(t,e,2,!1),n.add(r))}function Is(e,t,n){var r=0;t&&(r|=4),bg(n,e,r,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function bi(e){if(!e[uo]){e[uo]=!0,Th.forEach(function(n){n!=="selectionchange"&&(aw.has(n)||Is(n,!1,e),Is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,Is("selectionchange",!1,t))}}function bg(e,t,n,r){switch(ag(t)){case 1:var i=S0;break;case 4:i=x0;break;default:i=pc}n=i.bind(null,t,n,e),i=void 0,!Al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ds(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Tn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}qh(function(){var u=o,c=uc(n),d=[];e:{var f=xg.get(e);if(f!==void 0){var y=gc,v=e;switch(e){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":y=M0;break;case"focusin":v="focus",y=js;break;case"focusout":v="blur",y=js;break;case"beforeblur":case"afterblur":y=js;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=O0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=A0;break;case vg:case yg:case wg:y=E0;break;case Sg:y=F0;break;case"scroll":y=k0;break;case"wheel":y=U0;break;case"copy":case"cut":case"paste":y=P0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Hd}var S=(t&4)!==0,E=!S&&e==="scroll",g=S?f!==null?f+"Capture":null:f;S=[];for(var p=u,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=vi(p,g),w!=null&&S.push(Oi(p,w,m)))),E)break;p=p.return}0<S.length&&(f=new y(f,v,null,n,c),d.push({event:f,listeners:S}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==Il&&(v=n.relatedTarget||n.fromElement)&&(Tn(v)||v[Ut]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Tn(v):null,v!==null&&(E=Vn(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(S=Dd,w="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Hd,w="onPointerLeave",g="onPointerEnter",p="pointer"),E=y==null?f:nr(y),m=v==null?f:nr(v),f=new S(w,p+"leave",y,n,c),f.target=E,f.relatedTarget=m,w=null,Tn(c)===u&&(S=new S(g,p+"enter",v,n,c),S.target=m,S.relatedTarget=E,w=S),E=w,y&&v)t:{for(S=y,g=v,p=0,m=S;m;m=qn(m))p++;for(m=0,w=g;w;w=qn(w))m++;for(;0<p-m;)S=qn(S),p--;for(;0<m-p;)g=qn(g),m--;for(;p--;){if(S===g||g!==null&&S===g.alternate)break t;S=qn(S),g=qn(g)}S=null}else S=null;y!==null&&Xd(d,f,y,S,!1),v!==null&&E!==null&&Xd(d,E,v,S,!0)}}e:{if(f=u?nr(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var k=Y0;else if(Ud(f))if(fg)k=ew;else{k=J0;var x=X0}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Z0);if(k&&(k=k(e,u))){dg(d,k,n,c);break e}x&&x(e,f,u),e==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&Ll(f,"number",f.value)}switch(x=u?nr(u):window,e){case"focusin":(Ud(x)||x.contentEditable==="true")&&(er=x,Wl=u,li=null);break;case"focusout":li=Wl=er=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,Qd(d,n,c);break;case"selectionchange":if(rw)break;case"keydown":case"keyup":Qd(d,n,c)}var O;if(vc)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Zn?ug(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(lg&&n.locale!=="ko"&&(Zn||$!=="onCompositionStart"?$==="onCompositionEnd"&&Zn&&(O=sg()):(ln=c,hc="value"in ln?ln.value:ln.textContent,Zn=!0)),x=Jo(u,$),0<x.length&&($=new Ad($,e,null,n,c),d.push({event:$,listeners:x}),O?$.data=O:(O=cg(n),O!==null&&($.data=O)))),(O=V0?q0(e,n):K0(e,n))&&(u=Jo(u,"onBeforeInput"),0<u.length&&(c=new Ad("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=O))}kg(d,t)})}function Oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=vi(e,n),o!=null&&r.unshift(Oi(e,o,i)),o=vi(e,t),o!=null&&r.push(Oi(e,o,i))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=vi(n,o),l!=null&&a.unshift(Oi(n,l,s))):i||(l=vi(n,o),l!=null&&a.push(Oi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var sw=/\r\n?/g,lw=/\u0000|\uFFFD/g;function Jd(e){return(typeof e=="string"?e:""+e).replace(sw,`
`).replace(lw,"")}function co(e,t,n){if(t=Jd(t),Jd(e)!==t&&n)throw Error(R(425))}function Zo(){}var ql=null,Kl=null;function Ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gl=typeof setTimeout=="function"?setTimeout:void 0,uw=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,cw=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(e){return Zd.resolve(null).then(e).catch(dw)}:Gl;function dw(e){setTimeout(function(){throw e})}function As(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Si(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Si(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ef(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+zr,Ci="__reactProps$"+zr,Ut="__reactContainer$"+zr,Yl="__reactEvents$"+zr,fw="__reactListeners$"+zr,pw="__reactHandles$"+zr;function Tn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ef(e);e!==null;){if(n=e[Ct])return n;e=ef(e)}return t}e=n,n=e.parentNode}return null}function Bi(e){return e=e[Ct]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Wa(e){return e[Ci]||null}var Xl=[],rr=-1;function kn(e){return{current:e}}function oe(e){0>rr||(e.current=Xl[rr],Xl[rr]=null,rr--)}function ne(e,t){rr++,Xl[rr]=e.current,e.current=t}var Sn={},ze=kn(Sn),We=kn(!1),An=Sn;function Sr(e,t){var n=e.type.contextTypes;if(!n)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(e){return e=e.childContextTypes,e!=null}function ea(){oe(We),oe(ze)}function tf(e,t,n){if(ze.current!==Sn)throw Error(R(168));ne(ze,t),ne(We,n)}function Og(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,Xy(e)||"Unknown",i));return he({},n,r)}function ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,An=ze.current,ne(ze,e),ne(We,We.current),!0}function nf(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Og(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,oe(We),oe(ze),ne(ze,e)):oe(We),ne(We,n)}var It=null,Va=!1,Hs=!1;function Cg(e){It===null?It=[e]:It.push(e)}function hw(e){Va=!0,Cg(e)}function bn(){if(!Hs&&It!==null){Hs=!0;var e=0,t=te;try{var n=It;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,Va=!1}catch(i){throw It!==null&&(It=It.slice(e+1)),Yh(cc,bn),i}finally{te=t,Hs=!1}}return null}var ir=[],or=0,na=null,ra=0,rt=[],it=0,Hn=null,Dt=1,At="";function $n(e,t){ir[or++]=ra,ir[or++]=na,na=e,ra=t}function $g(e,t,n){rt[it++]=Dt,rt[it++]=At,rt[it++]=Hn,Hn=e;var r=Dt;e=At;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var o=32-gt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Dt=1<<32-gt(t)+i|n<<i|r,At=o+e}else Dt=1<<o|n<<i|r,At=e}function wc(e){e.return!==null&&($n(e,1),$g(e,1,0))}function Sc(e){for(;e===na;)na=ir[--or],ir[or]=null,ra=ir[--or],ir[or]=null;for(;e===Hn;)Hn=rt[--it],rt[it]=null,At=rt[--it],rt[it]=null,Dt=rt[--it],rt[it]=null}var Xe=null,Ye=null,le=!1,ht=null;function Eg(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function rf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hn!==null?{id:Dt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ye=null,!0):!1;default:return!1}}function Jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zl(e){if(le){var t=Ye;if(t){var n=t;if(!rf(e,t)){if(Jl(e))throw Error(R(418));t=pn(n.nextSibling);var r=Xe;t&&rf(e,t)?Eg(r,n):(e.flags=e.flags&-4097|2,le=!1,Xe=e)}}else{if(Jl(e))throw Error(R(418));e.flags=e.flags&-4097|2,le=!1,Xe=e}}}function of(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function fo(e){if(e!==Xe)return!1;if(!le)return of(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ql(e.type,e.memoizedProps)),t&&(t=Ye)){if(Jl(e))throw _g(),Error(R(418));for(;t;)Eg(e,t),t=pn(t.nextSibling)}if(of(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Xe?pn(e.stateNode.nextSibling):null;return!0}function _g(){for(var e=Ye;e;)e=pn(e.nextSibling)}function xr(){Ye=Xe=null,le=!1}function xc(e){ht===null?ht=[e]:ht.push(e)}var gw=qt.ReactCurrentBatchConfig;function ft(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ia=kn(null),oa=null,ar=null,kc=null;function bc(){kc=ar=oa=null}function Oc(e){var t=ia.current;oe(ia),e._currentValue=t}function eu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){oa=e,kc=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ue=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(kc!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(oa===null)throw Error(R(308));ar=e,oa.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var jn=null;function Cc(e){jn===null?jn=[e]:jn.push(e)}function Pg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Cc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function $c(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Wt(e,n)}return i=r.interleaved,i===null?(t.next=t,Cc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wt(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dc(e,n)}}function af(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function aa(e,t,n,r){var i=e.updateQueue;nn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,c=u=l=null,s=o;do{var f=s.lane,y=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,S=s;switch(f=t,y=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){d=v.call(y,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,f=typeof v=="function"?v.call(y,d,f):v,f==null)break e;d=he({},d,f);break e;case 2:nn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else y={eventTime:y,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Bn|=a,e.lanes=a,e.memoizedState=d}}function sf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var jg=new Ph.Component().refs;function tu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qa={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),i=mn(e),o=Ht(r,i);o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(mt(t,e,i,r),No(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),i=mn(e),o=Ht(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(mt(t,e,i,r),No(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=mn(e),i=Ht(n,r);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,r),t!==null&&(mt(t,e,r,n),No(t,e,r))}};function lf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ki(n,r)||!ki(i,o):!0}function Lg(e,t,n){var r=!1,i=Sn,o=t.contextType;return typeof o=="object"&&o!==null?o=lt(o):(i=Ve(t)?An:ze.current,r=t.contextTypes,o=(r=r!=null)?Sr(e,i):Sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function uf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qa.enqueueReplaceState(t,t.state,null)}function nu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=jg,$c(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=lt(o):(o=Ve(t)?An:ze.current,i.context=Sr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(tu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&qa.enqueueReplaceState(i,i.state,null),aa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===jg&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cf(e){var t=e._init;return t(e._payload)}function Rg(e){function t(g,p){if(e){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=vn(g,p),g.index=0,g.sibling=null,g}function o(g,p,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,m,w){return p===null||p.tag!==6?(p=Ks(m,g.mode,w),p.return=g,p):(p=i(p,m),p.return=g,p)}function l(g,p,m,w){var k=m.type;return k===Jn?c(g,p,m.props.children,w,m.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===tn&&cf(k)===p.type)?(w=i(p,m.props),w.ref=Vr(g,p,m),w.return=g,w):(w=Ho(m.type,m.key,m.props,null,g.mode,w),w.ref=Vr(g,p,m),w.return=g,w)}function u(g,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Qs(m,g.mode,w),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function c(g,p,m,w,k){return p===null||p.tag!==7?(p=Mn(m,g.mode,w,k),p.return=g,p):(p=i(p,m),p.return=g,p)}function d(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ks(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case to:return m=Ho(p.type,p.key,p.props,null,g.mode,m),m.ref=Vr(g,null,p),m.return=g,m;case Xn:return p=Qs(p,g.mode,m),p.return=g,p;case tn:var w=p._init;return d(g,w(p._payload),m)}if(Jr(p)||Hr(p))return p=Mn(p,g.mode,m,null),p.return=g,p;po(g,p)}return null}function f(g,p,m,w){var k=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(g,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case to:return m.key===k?l(g,p,m,w):null;case Xn:return m.key===k?u(g,p,m,w):null;case tn:return k=m._init,f(g,p,k(m._payload),w)}if(Jr(m)||Hr(m))return k!==null?null:c(g,p,m,w,null);po(g,m)}return null}function y(g,p,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,s(p,g,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case to:return g=g.get(w.key===null?m:w.key)||null,l(p,g,w,k);case Xn:return g=g.get(w.key===null?m:w.key)||null,u(p,g,w,k);case tn:var x=w._init;return y(g,p,m,x(w._payload),k)}if(Jr(w)||Hr(w))return g=g.get(m)||null,c(p,g,w,k,null);po(p,w)}return null}function v(g,p,m,w){for(var k=null,x=null,O=p,$=p=0,L=null;O!==null&&$<m.length;$++){O.index>$?(L=O,O=null):L=O.sibling;var j=f(g,O,m[$],w);if(j===null){O===null&&(O=L);break}e&&O&&j.alternate===null&&t(g,O),p=o(j,p,$),x===null?k=j:x.sibling=j,x=j,O=L}if($===m.length)return n(g,O),le&&$n(g,$),k;if(O===null){for(;$<m.length;$++)O=d(g,m[$],w),O!==null&&(p=o(O,p,$),x===null?k=O:x.sibling=O,x=O);return le&&$n(g,$),k}for(O=r(g,O);$<m.length;$++)L=y(O,g,$,m[$],w),L!==null&&(e&&L.alternate!==null&&O.delete(L.key===null?$:L.key),p=o(L,p,$),x===null?k=L:x.sibling=L,x=L);return e&&O.forEach(function(D){return t(g,D)}),le&&$n(g,$),k}function S(g,p,m,w){var k=Hr(m);if(typeof k!="function")throw Error(R(150));if(m=k.call(m),m==null)throw Error(R(151));for(var x=k=null,O=p,$=p=0,L=null,j=m.next();O!==null&&!j.done;$++,j=m.next()){O.index>$?(L=O,O=null):L=O.sibling;var D=f(g,O,j.value,w);if(D===null){O===null&&(O=L);break}e&&O&&D.alternate===null&&t(g,O),p=o(D,p,$),x===null?k=D:x.sibling=D,x=D,O=L}if(j.done)return n(g,O),le&&$n(g,$),k;if(O===null){for(;!j.done;$++,j=m.next())j=d(g,j.value,w),j!==null&&(p=o(j,p,$),x===null?k=j:x.sibling=j,x=j);return le&&$n(g,$),k}for(O=r(g,O);!j.done;$++,j=m.next())j=y(O,g,$,j.value,w),j!==null&&(e&&j.alternate!==null&&O.delete(j.key===null?$:j.key),p=o(j,p,$),x===null?k=j:x.sibling=j,x=j);return e&&O.forEach(function(A){return t(g,A)}),le&&$n(g,$),k}function E(g,p,m,w){if(typeof m=="object"&&m!==null&&m.type===Jn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case to:e:{for(var k=m.key,x=p;x!==null;){if(x.key===k){if(k=m.type,k===Jn){if(x.tag===7){n(g,x.sibling),p=i(x,m.props.children),p.return=g,g=p;break e}}else if(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===tn&&cf(k)===x.type){n(g,x.sibling),p=i(x,m.props),p.ref=Vr(g,x,m),p.return=g,g=p;break e}n(g,x);break}else t(g,x);x=x.sibling}m.type===Jn?(p=Mn(m.props.children,g.mode,w,m.key),p.return=g,g=p):(w=Ho(m.type,m.key,m.props,null,g.mode,w),w.ref=Vr(g,p,m),w.return=g,g=w)}return a(g);case Xn:e:{for(x=m.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Qs(m,g.mode,w),p.return=g,g=p}return a(g);case tn:return x=m._init,E(g,p,x(m._payload),w)}if(Jr(m))return v(g,p,m,w);if(Hr(m))return S(g,p,m,w);po(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=Ks(m,g.mode,w),p.return=g,g=p),a(g)):n(g,p)}return E}var kr=Rg(!0),Ng=Rg(!1),Ui={},_t=kn(Ui),$i=kn(Ui),Ei=kn(Ui);function Ln(e){if(e===Ui)throw Error(R(174));return e}function Ec(e,t){switch(ne(Ei,t),ne($i,e),ne(_t,Ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nl(t,e)}oe(_t),ne(_t,t)}function br(){oe(_t),oe($i),oe(Ei)}function zg(e){Ln(Ei.current);var t=Ln(_t.current),n=Nl(t,e.type);t!==n&&(ne($i,e),ne(_t,n))}function _c(e){$i.current===e&&(oe(_t),oe($i))}var fe=kn(0);function sa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fs=[];function Pc(){for(var e=0;e<Fs.length;e++)Fs[e]._workInProgressVersionPrimary=null;Fs.length=0}var zo=qt.ReactCurrentDispatcher,Bs=qt.ReactCurrentBatchConfig,Fn=0,pe=null,xe=null,be=null,la=!1,ui=!1,_i=0,mw=0;function je(){throw Error(R(321))}function Tc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function jc(e,t,n,r,i,o){if(Fn=o,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zo.current=e===null||e.memoizedState===null?Sw:xw,e=n(r,i),ui){o=0;do{if(ui=!1,_i=0,25<=o)throw Error(R(301));o+=1,be=xe=null,t.updateQueue=null,zo.current=kw,e=n(r,i)}while(ui)}if(zo.current=ua,t=xe!==null&&xe.next!==null,Fn=0,be=xe=pe=null,la=!1,t)throw Error(R(300));return e}function Lc(){var e=_i!==0;return _i=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?pe.memoizedState=be=e:be=be.next=e,be}function ut(){if(xe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=be===null?pe.memoizedState:be.next;if(t!==null)be=t,xe=e;else{if(e===null)throw Error(R(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},be===null?pe.memoizedState=be=e:be=be.next=e}return be}function Pi(e,t){return typeof t=="function"?t(e):t}function Us(e){var t=ut(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=xe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((Fn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,pe.lanes|=c,Bn|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,yt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,pe.lanes|=o,Bn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ws(e){var t=ut(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);yt(o,t.memoizedState)||(Ue=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Mg(){}function Ig(e,t){var n=pe,r=ut(),i=t(),o=!yt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ue=!0),r=r.queue,Rc(Hg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Ti(9,Ag.bind(null,n,r,i,t),void 0,null),Ce===null)throw Error(R(349));Fn&30||Dg(n,t,i)}return i}function Dg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ag(e,t,n,r){t.value=n,t.getSnapshot=r,Fg(t)&&Bg(e)}function Hg(e,t,n){return n(function(){Fg(t)&&Bg(e)})}function Fg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function Bg(e){var t=Wt(e,1);t!==null&&mt(t,e,1,-1)}function df(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},t.queue=e,e=e.dispatch=ww.bind(null,pe,e),[t.memoizedState,e]}function Ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ug(){return ut().memoizedState}function Mo(e,t,n,r){var i=xt();pe.flags|=e,i.memoizedState=Ti(1|t,n,void 0,r===void 0?null:r)}function Ka(e,t,n,r){var i=ut();r=r===void 0?null:r;var o=void 0;if(xe!==null){var a=xe.memoizedState;if(o=a.destroy,r!==null&&Tc(r,a.deps)){i.memoizedState=Ti(t,n,o,r);return}}pe.flags|=e,i.memoizedState=Ti(1|t,n,o,r)}function ff(e,t){return Mo(8390656,8,e,t)}function Rc(e,t){return Ka(2048,8,e,t)}function Wg(e,t){return Ka(4,2,e,t)}function Vg(e,t){return Ka(4,4,e,t)}function qg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kg(e,t,n){return n=n!=null?n.concat([e]):null,Ka(4,4,qg.bind(null,t,e),n)}function Nc(){}function Qg(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gg(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yg(e,t,n){return Fn&21?(yt(n,t)||(n=Zh(),pe.lanes|=n,Bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n)}function vw(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Bs.transition;Bs.transition={};try{e(!1),t()}finally{te=n,Bs.transition=r}}function Xg(){return ut().memoizedState}function yw(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jg(e))Zg(t,n);else if(n=Pg(e,t,n,r),n!==null){var i=De();mt(n,e,r,i),em(n,t,r)}}function ww(e,t,n){var r=mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jg(e))Zg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,yt(s,a)){var l=t.interleaved;l===null?(i.next=i,Cc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Pg(e,t,i,r),n!==null&&(i=De(),mt(n,e,r,i),em(n,t,r))}}function Jg(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Zg(e,t){ui=la=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function em(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dc(e,n)}}var ua={readContext:lt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Sw={readContext:lt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:ff,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4194308,4,qg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mo(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yw.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:df,useDebugValue:Nc,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=df(!1),t=e[0];return e=vw.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,i=xt();if(le){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Ce===null)throw Error(R(349));Fn&30||Dg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ff(Hg.bind(null,r,o,e),[e]),r.flags|=2048,Ti(9,Ag.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xt(),t=Ce.identifierPrefix;if(le){var n=At,r=Dt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_i++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xw={readContext:lt,useCallback:Qg,useContext:lt,useEffect:Rc,useImperativeHandle:Kg,useInsertionEffect:Wg,useLayoutEffect:Vg,useMemo:Gg,useReducer:Us,useRef:Ug,useState:function(){return Us(Pi)},useDebugValue:Nc,useDeferredValue:function(e){var t=ut();return Yg(t,xe.memoizedState,e)},useTransition:function(){var e=Us(Pi)[0],t=ut().memoizedState;return[e,t]},useMutableSource:Mg,useSyncExternalStore:Ig,useId:Xg,unstable_isNewReconciler:!1},kw={readContext:lt,useCallback:Qg,useContext:lt,useEffect:Rc,useImperativeHandle:Kg,useInsertionEffect:Wg,useLayoutEffect:Vg,useMemo:Gg,useReducer:Ws,useRef:Ug,useState:function(){return Ws(Pi)},useDebugValue:Nc,useDeferredValue:function(e){var t=ut();return xe===null?t.memoizedState=e:Yg(t,xe.memoizedState,e)},useTransition:function(){var e=Ws(Pi)[0],t=ut().memoizedState;return[e,t]},useMutableSource:Mg,useSyncExternalStore:Ig,useId:Xg,unstable_isNewReconciler:!1};function Or(e,t){try{var n="",r=t;do n+=Yy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Vs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ru(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bw=typeof WeakMap=="function"?WeakMap:Map;function tm(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){da||(da=!0,pu=r),ru(e,t)},n}function nm(e,t,n){n=Ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ru(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ru(e,t),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Iw.bind(null,e,t,n),t.then(e,e))}function hf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e)}var Ow=qt.ReactCurrentOwner,Ue=!1;function Ie(e,t,n,r){t.child=e===null?Ng(t,null,n,r):kr(t,e.child,n,r)}function mf(e,t,n,r,i){n=n.render;var o=t.ref;return gr(t,i),r=jc(e,t,n,r,o,i),n=Lc(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(le&&n&&wc(t),t.flags|=1,Ie(e,t,r,i),t.child)}function vf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Bc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,rm(e,t,o,r,i)):(e=Ho(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ki,n(a,r)&&e.ref===t.ref)return Vt(e,t,i)}return t.flags|=1,e=vn(o,r),e.ref=t.ref,e.return=t,t.child=e}function rm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ki(o,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,Vt(e,t,i)}return iu(e,t,n,r,i)}function im(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(lr,Ge),Ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(lr,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(lr,Ge),Ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(lr,Ge),Ge|=r;return Ie(e,t,i,n),t.child}function om(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function iu(e,t,n,r,i){var o=Ve(n)?An:ze.current;return o=Sr(t,o),gr(t,i),n=jc(e,t,n,r,o,i),r=Lc(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(le&&r&&wc(t),t.flags|=1,Ie(e,t,n,i),t.child)}function yf(e,t,n,r,i){if(Ve(n)){var o=!0;ta(t)}else o=!1;if(gr(t,i),t.stateNode===null)Io(e,t),Lg(t,n,r),nu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=Ve(n)?An:ze.current,u=Sr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&uf(t,a,r,u),nn=!1;var f=t.memoizedState;a.state=f,aa(t,r,a,i),l=t.memoizedState,s!==r||f!==l||We.current||nn?(typeof c=="function"&&(tu(t,n,c,r),l=t.memoizedState),(s=nn||lf(t,n,s,r,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Tg(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ft(t.type,s),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=lt(l):(l=Ve(n)?An:ze.current,l=Sr(t,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||f!==l)&&uf(t,a,r,l),nn=!1,f=t.memoizedState,a.state=f,aa(t,r,a,i);var v=t.memoizedState;s!==d||f!==v||We.current||nn?(typeof y=="function"&&(tu(t,n,y,r),v=t.memoizedState),(u=nn||lf(t,n,u,r,f,v,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ou(e,t,n,r,o,i)}function ou(e,t,n,r,i,o){om(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&nf(t,n,!1),Vt(e,t,o);r=t.stateNode,Ow.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=kr(t,e.child,null,o),t.child=kr(t,null,s,o)):Ie(e,t,s,o),t.memoizedState=r.state,i&&nf(t,n,!0),t.child}function am(e){var t=e.stateNode;t.pendingContext?tf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tf(e,t.context,!1),Ec(e,t.containerInfo)}function wf(e,t,n,r,i){return xr(),xc(i),t.flags|=256,Ie(e,t,n,r),t.child}var au={dehydrated:null,treeContext:null,retryLane:0};function su(e){return{baseLanes:e,cachePool:null,transitions:null}}function sm(e,t,n){var r=t.pendingProps,i=fe.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(fe,i&1),e===null)return Zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ya(a,r,0,null),e=Mn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=su(n),t.memoizedState=au,e):zc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Cw(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=vn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=vn(s,o):(o=Mn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?su(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=au,r}return o=e.child,e=o.sibling,r=vn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zc(e,t){return t=Ya({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,r){return r!==null&&xc(r),kr(t,e.child,null,n),e=zc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cw(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Vs(Error(R(422))),ho(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ya({mode:"visible",children:r.children},i,0,null),o=Mn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&kr(t,e.child,null,a),t.child.memoizedState=su(a),t.memoizedState=au,o);if(!(t.mode&1))return ho(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(R(419)),r=Vs(o,r,void 0),ho(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ue||s){if(r=Ce,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Wt(e,i),mt(r,e,i,-1))}return Fc(),r=Vs(Error(R(421))),ho(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Dw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ye=pn(i.nextSibling),Xe=t,le=!0,ht=null,e!==null&&(rt[it++]=Dt,rt[it++]=At,rt[it++]=Hn,Dt=e.id,At=e.overflow,Hn=t),t=zc(t,r.children),t.flags|=4096,t)}function Sf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),eu(e.return,t,n)}function qs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function lm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ie(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sf(e,n,t);else if(e.tag===19)Sf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&sa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&sa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qs(t,!0,n,null,o);break;case"together":qs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Io(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $w(e,t,n){switch(t.tag){case 3:am(t),xr();break;case 5:zg(t);break;case 1:Ve(t.type)&&ta(t);break;case 4:Ec(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(ia,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?sm(e,t,n):(ne(fe,fe.current&1),e=Vt(e,t,n),e!==null?e.sibling:null);ne(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,im(e,t,n)}return Vt(e,t,n)}var um,lu,cm,dm;um=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lu=function(){};cm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(_t.current);var o=null;switch(n){case"input":i=Tl(e,i),r=Tl(e,r),o=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),o=[];break;case"textarea":i=Rl(e,i),r=Rl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zo)}zl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};dm=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ew(e,t,n){var r=t.pendingProps;switch(Sc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Ve(t.type)&&ea(),Le(t),null;case 3:return r=t.stateNode,br(),oe(We),oe(ze),Pc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(mu(ht),ht=null))),lu(e,t),Le(t),null;case 5:_c(t);var i=Ln(Ei.current);if(n=t.type,e!==null&&t.stateNode!=null)cm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Le(t),null}if(e=Ln(_t.current),fo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ct]=t,r[Ci]=o,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<ei.length;i++)re(ei[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":_d(r,o),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},re("invalid",r);break;case"textarea":Td(r,o),re("invalid",r)}zl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&co(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&co(r.textContent,s,e),i=["children",""+s]):gi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&re("scroll",r)}switch(n){case"input":no(r),Pd(r,o,!0);break;case"textarea":no(r),jd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ct]=t,e[Ci]=r,um(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ml(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<ei.length;i++)re(ei[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":_d(e,r),i=Tl(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),re("invalid",e);break;case"textarea":Td(e,r),i=Rl(e,r),re("invalid",e);break;default:i=r}zl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Fh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ah(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&mi(e,l):typeof l=="number"&&mi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(gi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&re("scroll",e):l!=null&&oc(e,o,l,a))}switch(n){case"input":no(e),Pd(e,r,!1);break;case"textarea":no(e),jd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?dr(e,!!r.multiple,o,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)dm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Ln(Ei.current),Ln(_t.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(o=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:co(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&co(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Le(t),null;case 13:if(oe(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Ye!==null&&t.mode&1&&!(t.flags&128))_g(),xr(),t.flags|=98560,o=!1;else if(o=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[Ct]=t}else xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else ht!==null&&(mu(ht),ht=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?ke===0&&(ke=3):Fc())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return br(),lu(e,t),e===null&&bi(t.stateNode.containerInfo),Le(t),null;case 10:return Oc(t.type._context),Le(t),null;case 17:return Ve(t.type)&&ea(),Le(t),null;case 19:if(oe(fe),o=t.memoizedState,o===null)return Le(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)qr(o,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=sa(e),a!==null){for(t.flags|=128,qr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(fe,fe.current&1|2),t.child}e=e.sibling}o.tail!==null&&ye()>Cr&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304)}else{if(!r)if(e=sa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!le)return Le(t),null}else 2*ye()-o.renderingStartTime>Cr&&n!==1073741824&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ye(),t.sibling=null,n=fe.current,ne(fe,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return Hc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function _w(e,t){switch(Sc(t),t.tag){case 1:return Ve(t.type)&&ea(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return br(),oe(We),oe(ze),Pc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _c(t),null;case 13:if(oe(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(fe),null;case 4:return br(),null;case 10:return Oc(t.type._context),null;case 22:case 23:return Hc(),null;case 24:return null;default:return null}}var go=!1,Re=!1,Pw=typeof WeakSet=="function"?WeakSet:Set,I=null;function sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function uu(e,t,n){try{n()}catch(r){ve(e,t,r)}}var xf=!1;function Tw(e,t){if(ql=Yo,e=gg(),yc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++c===r&&(l=a),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kl={focusedElem:e,selectionRange:n},Yo=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,E=v.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:ft(t.type,S),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){ve(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return v=xf,xf=!1,v}function ci(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&uu(t,n,o)}i=i.next}while(i!==r)}}function Qa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function cu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fm(e){var t=e.alternate;t!==null&&(e.alternate=null,fm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Ci],delete t[Yl],delete t[fw],delete t[pw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pm(e){return e.tag===5||e.tag===3||e.tag===4}function kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zo));else if(r!==4&&(e=e.child,e!==null))for(du(e,t,n),e=e.sibling;e!==null;)du(e,t,n),e=e.sibling}function fu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fu(e,t,n),e=e.sibling;e!==null;)fu(e,t,n),e=e.sibling}var Ee=null,pt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)hm(e,t,n),n=n.sibling}function hm(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Ha,n)}catch{}switch(n.tag){case 5:Re||sr(n,t);case 6:var r=Ee,i=pt;Ee=null,Yt(e,t,n),Ee=r,pt=i,Ee!==null&&(pt?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(pt?(e=Ee,n=n.stateNode,e.nodeType===8?As(e.parentNode,n):e.nodeType===1&&As(e,n),Si(e)):As(Ee,n.stateNode));break;case 4:r=Ee,i=pt,Ee=n.stateNode.containerInfo,pt=!0,Yt(e,t,n),Ee=r,pt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&uu(n,t,a),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!Re&&(sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ve(n,t,s)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,Yt(e,t,n),Re=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function bf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pw),t.forEach(function(r){var i=Aw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ee=s.stateNode,pt=!1;break e;case 3:Ee=s.stateNode.containerInfo,pt=!0;break e;case 4:Ee=s.stateNode.containerInfo,pt=!0;break e}s=s.return}if(Ee===null)throw Error(R(160));hm(o,a,i),Ee=null,pt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gm(t,e),t=t.sibling}function gm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),St(e),r&4){try{ci(3,e,e.return),Qa(3,e)}catch(S){ve(e,e.return,S)}try{ci(5,e,e.return)}catch(S){ve(e,e.return,S)}}break;case 1:dt(t,e),St(e),r&512&&n!==null&&sr(n,n.return);break;case 5:if(dt(t,e),St(e),r&512&&n!==null&&sr(n,n.return),e.flags&32){var i=e.stateNode;try{mi(i,"")}catch(S){ve(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Mh(i,o),Ml(s,a);var u=Ml(s,o);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?Fh(i,d):c==="dangerouslySetInnerHTML"?Ah(i,d):c==="children"?mi(i,d):oc(i,c,d,u)}switch(s){case"input":jl(i,o);break;case"textarea":Ih(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?dr(i,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?dr(i,!!o.multiple,o.defaultValue,!0):dr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ci]=o}catch(S){ve(e,e.return,S)}}break;case 6:if(dt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){ve(e,e.return,S)}}break;case 3:if(dt(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(S){ve(e,e.return,S)}break;case 4:dt(t,e),St(e);break;case 13:dt(t,e),St(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Dc=ye())),r&4&&bf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(u=Re)||c,dt(t,e),Re=u):dt(t,e),St(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(I=e,c=e.child;c!==null;){for(d=I=c;I!==null;){switch(f=I,y=f.child,f.tag){case 0:case 11:case 14:case 15:ci(4,f,f.return);break;case 1:sr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(S){ve(r,n,S)}}break;case 5:sr(f,f.return);break;case 22:if(f.memoizedState!==null){Cf(d);continue}}y!==null?(y.return=f,I=y):Cf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Hh("display",a))}catch(S){ve(e,e.return,S)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(S){ve(e,e.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:dt(t,e),St(e),r&4&&bf(e);break;case 21:break;default:dt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pm(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mi(i,""),r.flags&=-33);var o=kf(e);fu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=kf(e);du(e,s,a);break;default:throw Error(R(161))}}catch(l){ve(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jw(e,t,n){I=e,mm(e)}function mm(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||go;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Re;s=go;var u=Re;if(go=a,(Re=l)&&!u)for(I=i;I!==null;)a=I,l=a.child,a.tag===22&&a.memoizedState!==null?$f(i):l!==null?(l.return=a,I=l):$f(i);for(;o!==null;)I=o,mm(o),o=o.sibling;I=i,go=s,Re=u}Of(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):Of(e)}}function Of(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Qa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&sf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Si(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Re||t.flags&512&&cu(t)}catch(f){ve(t,t.return,f)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Cf(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function $f(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qa(4,t)}catch(l){ve(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ve(t,i,l)}}var o=t.return;try{cu(t)}catch(l){ve(t,o,l)}break;case 5:var a=t.return;try{cu(t)}catch(l){ve(t,a,l)}}}catch(l){ve(t,t.return,l)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var Lw=Math.ceil,ca=qt.ReactCurrentDispatcher,Mc=qt.ReactCurrentOwner,st=qt.ReactCurrentBatchConfig,J=0,Ce=null,Se=null,_e=0,Ge=0,lr=kn(0),ke=0,ji=null,Bn=0,Ga=0,Ic=0,di=null,Be=null,Dc=0,Cr=1/0,zt=null,da=!1,pu=null,gn=null,mo=!1,un=null,fa=0,fi=0,hu=null,Do=-1,Ao=0;function De(){return J&6?ye():Do!==-1?Do:Do=ye()}function mn(e){return e.mode&1?J&2&&_e!==0?_e&-_e:gw.transition!==null?(Ao===0&&(Ao=Zh()),Ao):(e=te,e!==0||(e=window.event,e=e===void 0?16:ag(e.type)),e):1}function mt(e,t,n,r){if(50<fi)throw fi=0,hu=null,Error(R(185));Hi(e,n,r),(!(J&2)||e!==Ce)&&(e===Ce&&(!(J&2)&&(Ga|=n),ke===4&&an(e,_e)),qe(e,r),n===1&&J===0&&!(t.mode&1)&&(Cr=ye()+500,Va&&bn()))}function qe(e,t){var n=e.callbackNode;g0(e,t);var r=Go(e,e===Ce?_e:0);if(r===0)n!==null&&Nd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nd(n),t===1)e.tag===0?hw(Ef.bind(null,e)):Cg(Ef.bind(null,e)),cw(function(){!(J&6)&&bn()}),n=null;else{switch(eg(r)){case 1:n=cc;break;case 4:n=Xh;break;case 16:n=Qo;break;case 536870912:n=Jh;break;default:n=Qo}n=Om(n,vm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vm(e,t){if(Do=-1,Ao=0,J&6)throw Error(R(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=Go(e,e===Ce?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pa(e,r);else{t=r;var i=J;J|=2;var o=wm();(Ce!==e||_e!==t)&&(zt=null,Cr=ye()+500,zn(e,t));do try{zw();break}catch(s){ym(e,s)}while(1);bc(),ca.current=o,J=i,Se!==null?t=0:(Ce=null,_e=0,t=ke)}if(t!==0){if(t===2&&(i=Fl(e),i!==0&&(r=i,t=gu(e,i))),t===1)throw n=ji,zn(e,0),an(e,r),qe(e,ye()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!Rw(i)&&(t=pa(e,r),t===2&&(o=Fl(e),o!==0&&(r=o,t=gu(e,o))),t===1))throw n=ji,zn(e,0),an(e,r),qe(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:En(e,Be,zt);break;case 3:if(an(e,r),(r&130023424)===r&&(t=Dc+500-ye(),10<t)){if(Go(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gl(En.bind(null,e,Be,zt),t);break}En(e,Be,zt);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-gt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lw(r/1960))-r,10<r){e.timeoutHandle=Gl(En.bind(null,e,Be,zt),r);break}En(e,Be,zt);break;case 5:En(e,Be,zt);break;default:throw Error(R(329))}}}return qe(e,ye()),e.callbackNode===n?vm.bind(null,e):null}function gu(e,t){var n=di;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=pa(e,t),e!==2&&(t=Be,Be=n,t!==null&&mu(t)),e}function mu(e){Be===null?Be=e:Be.push.apply(Be,e)}function Rw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!yt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~Ic,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Ef(e){if(J&6)throw Error(R(327));mr();var t=Go(e,0);if(!(t&1))return qe(e,ye()),null;var n=pa(e,t);if(e.tag!==0&&n===2){var r=Fl(e);r!==0&&(t=r,n=gu(e,r))}if(n===1)throw n=ji,zn(e,0),an(e,t),qe(e,ye()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e,Be,zt),qe(e,ye()),null}function Ac(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Cr=ye()+500,Va&&bn())}}function Un(e){un!==null&&un.tag===0&&!(J&6)&&mr();var t=J;J|=1;var n=st.transition,r=te;try{if(st.transition=null,te=1,e)return e()}finally{te=r,st.transition=n,J=t,!(J&6)&&bn()}}function Hc(){Ge=lr.current,oe(lr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,uw(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(Sc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ea();break;case 3:br(),oe(We),oe(ze),Pc();break;case 5:_c(r);break;case 4:br();break;case 13:oe(fe);break;case 19:oe(fe);break;case 10:Oc(r.type._context);break;case 22:case 23:Hc()}n=n.return}if(Ce=e,Se=e=vn(e.current,null),_e=Ge=t,ke=0,ji=null,Ic=Ga=Bn=0,Be=di=null,jn!==null){for(t=0;t<jn.length;t++)if(n=jn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}jn=null}return e}function ym(e,t){do{var n=Se;try{if(bc(),zo.current=ua,la){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}la=!1}if(Fn=0,be=xe=pe=null,ui=!1,_i=0,Mc.current=null,n===null||n.return===null){ke=1,ji=t,Se=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=_e,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=hf(a);if(y!==null){y.flags&=-257,gf(y,a,s,o,t),y.mode&1&&pf(o,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var S=new Set;S.add(l),t.updateQueue=S}else v.add(l);break e}else{if(!(t&1)){pf(o,u,t),Fc();break e}l=Error(R(426))}}else if(le&&s.mode&1){var E=hf(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),gf(E,a,s,o,t),xc(Or(l,s));break e}}o=l=Or(l,s),ke!==4&&(ke=2),di===null?di=[o]:di.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=tm(o,l,t);af(o,g);break e;case 1:s=l;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(gn===null||!gn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=nm(o,s,t);af(o,w);break e}}o=o.return}while(o!==null)}xm(n)}catch(k){t=k,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function wm(){var e=ca.current;return ca.current=ua,e===null?ua:e}function Fc(){(ke===0||ke===3||ke===2)&&(ke=4),Ce===null||!(Bn&268435455)&&!(Ga&268435455)||an(Ce,_e)}function pa(e,t){var n=J;J|=2;var r=wm();(Ce!==e||_e!==t)&&(zt=null,zn(e,t));do try{Nw();break}catch(i){ym(e,i)}while(1);if(bc(),J=n,ca.current=r,Se!==null)throw Error(R(261));return Ce=null,_e=0,ke}function Nw(){for(;Se!==null;)Sm(Se)}function zw(){for(;Se!==null&&!a0();)Sm(Se)}function Sm(e){var t=bm(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?xm(e):Se=t,Mc.current=null}function xm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_w(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,Se=null;return}}else if(n=Ew(n,t,Ge),n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);ke===0&&(ke=5)}function En(e,t,n){var r=te,i=st.transition;try{st.transition=null,te=1,Mw(e,t,n,r)}finally{st.transition=i,te=r}return null}function Mw(e,t,n,r){do mr();while(un!==null);if(J&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(m0(e,o),e===Ce&&(Se=Ce=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,Om(Qo,function(){return mr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=st.transition,st.transition=null;var a=te;te=1;var s=J;J|=4,Mc.current=null,Tw(e,n),gm(n,e),nw(Kl),Yo=!!ql,Kl=ql=null,e.current=n,jw(n),s0(),J=s,te=a,st.transition=o}else e.current=n;if(mo&&(mo=!1,un=e,fa=i),o=e.pendingLanes,o===0&&(gn=null),c0(n.stateNode),qe(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(da)throw da=!1,e=pu,pu=null,e;return fa&1&&e.tag!==0&&mr(),o=e.pendingLanes,o&1?e===hu?fi++:(fi=0,hu=e):fi=0,bn(),null}function mr(){if(un!==null){var e=eg(fa),t=st.transition,n=te;try{if(st.transition=null,te=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,fa=0,J&6)throw Error(R(331));var i=J;for(J|=4,I=e.current;I!==null;){var o=I,a=o.child;if(I.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(I=u;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:ci(8,c,o)}var d=c.child;if(d!==null)d.return=c,I=d;else for(;I!==null;){c=I;var f=c.sibling,y=c.return;if(fm(c),c===u){I=null;break}if(f!==null){f.return=y,I=f;break}I=y}}}var v=o.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var E=S.sibling;S.sibling=null,S=E}while(S!==null)}}I=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,I=a;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ci(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,I=g;break e}I=o.return}}var p=e.current;for(I=p;I!==null;){a=I;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,I=m;else e:for(a=p;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Qa(9,s)}}catch(k){ve(s,s.return,k)}if(s===a){I=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,I=w;break e}I=s.return}}if(J=i,bn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Ha,e)}catch{}r=!0}return r}finally{te=n,st.transition=t}}return!1}function _f(e,t,n){t=Or(n,t),t=tm(e,t,1),e=hn(e,t,1),t=De(),e!==null&&(Hi(e,1,t),qe(e,t))}function ve(e,t,n){if(e.tag===3)_f(e,e,n);else for(;t!==null;){if(t.tag===3){_f(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=Or(n,e),e=nm(t,e,1),t=hn(t,e,1),e=De(),t!==null&&(Hi(t,1,e),qe(t,e));break}}t=t.return}}function Iw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(_e&n)===n&&(ke===4||ke===3&&(_e&130023424)===_e&&500>ye()-Dc?zn(e,0):Ic|=n),qe(e,t)}function km(e,t){t===0&&(e.mode&1?(t=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):t=1);var n=De();e=Wt(e,t),e!==null&&(Hi(e,t,n),qe(e,n))}function Dw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),km(e,n)}function Aw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),km(e,n)}var bm;bm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ue=!1,$w(e,t,n);Ue=!!(e.flags&131072)}else Ue=!1,le&&t.flags&1048576&&$g(t,ra,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Io(e,t),e=t.pendingProps;var i=Sr(t,ze.current);gr(t,n),i=jc(null,t,r,e,i,n);var o=Lc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(o=!0,ta(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$c(t),i.updater=qa,t.stateNode=i,i._reactInternals=t,nu(t,r,e,n),t=ou(null,t,r,!0,o,n)):(t.tag=0,le&&o&&wc(t),Ie(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Io(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fw(r),e=ft(r,e),i){case 0:t=iu(null,t,r,e,n);break e;case 1:t=yf(null,t,r,e,n);break e;case 11:t=mf(null,t,r,e,n);break e;case 14:t=vf(null,t,r,ft(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),iu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),yf(e,t,r,i,n);case 3:e:{if(am(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Tg(e,t),aa(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Or(Error(R(423)),t),t=wf(e,t,r,n,i);break e}else if(r!==i){i=Or(Error(R(424)),t),t=wf(e,t,r,n,i);break e}else for(Ye=pn(t.stateNode.containerInfo.firstChild),Xe=t,le=!0,ht=null,n=Ng(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===i){t=Vt(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return zg(t),e===null&&Zl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ql(r,i)?a=null:o!==null&&Ql(r,o)&&(t.flags|=32),om(e,t),Ie(e,t,a,n),t.child;case 6:return e===null&&Zl(t),null;case 13:return sm(e,t,n);case 4:return Ec(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kr(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),mf(e,t,r,i,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ne(ia,r._currentValue),r._currentValue=a,o!==null)if(yt(o.value,a)){if(o.children===i.children&&!We.current){t=Vt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ht(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),eu(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(R(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),eu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ie(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gr(t,n),i=lt(i),r=r(i),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,i=ft(r,t.pendingProps),i=ft(r.type,i),vf(e,t,r,i,n);case 15:return rm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Io(e,t),t.tag=1,Ve(r)?(e=!0,ta(t)):e=!1,gr(t,n),Lg(t,r,i),nu(t,r,i,n),ou(null,t,r,!0,e,n);case 19:return lm(e,t,n);case 22:return im(e,t,n)}throw Error(R(156,t.tag))};function Om(e,t){return Yh(e,t)}function Hw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new Hw(e,t,n,r)}function Bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fw(e){if(typeof e=="function")return Bc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sc)return 11;if(e===lc)return 14}return 2}function vn(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ho(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Bc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jn:return Mn(n.children,i,o,t);case ac:a=8,i|=8;break;case $l:return e=at(12,n,t,i|2),e.elementType=$l,e.lanes=o,e;case El:return e=at(13,n,t,i),e.elementType=El,e.lanes=o,e;case _l:return e=at(19,n,t,i),e.elementType=_l,e.lanes=o,e;case Rh:return Ya(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jh:a=10;break e;case Lh:a=9;break e;case sc:a=11;break e;case lc:a=14;break e;case tn:a=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=at(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Mn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Ya(e,t,n,r){return e=at(22,e,r,t),e.elementType=Rh,e.lanes=n,e.stateNode={isHidden:!1},e}function Ks(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Qs(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_s(0),this.expirationTimes=_s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_s(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uc(e,t,n,r,i,o,a,s,l){return e=new Bw(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=at(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(o),e}function Uw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cm(e){if(!e)return Sn;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Og(e,n,t)}return t}function $m(e,t,n,r,i,o,a,s,l){return e=Uc(n,r,!0,e,i,o,a,s,l),e.context=Cm(null),n=e.current,r=De(),i=mn(n),o=Ht(r,i),o.callback=t??null,hn(n,o,i),e.current.lanes=i,Hi(e,i,r),qe(e,r),e}function Xa(e,t,n,r){var i=t.current,o=De(),a=mn(i);return n=Cm(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(i,t,a),e!==null&&(mt(e,i,a,o),No(e,i,a)),a}function ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wc(e,t){Pf(e,t),(e=e.alternate)&&Pf(e,t)}function Ww(){return null}var Em=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vc(e){this._internalRoot=e}Ja.prototype.render=Vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Xa(e,t,null,null)};Ja.prototype.unmount=Vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){Xa(null,e,null,null)}),t[Ut]=null}};function Ja(e){this._internalRoot=e}Ja.prototype.unstable_scheduleHydration=function(e){if(e){var t=rg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&og(e)}};function qc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tf(){}function Vw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ha(a);o.call(u)}}var a=$m(t,r,e,0,null,!1,!1,"",Tf);return e._reactRootContainer=a,e[Ut]=a.current,bi(e.nodeType===8?e.parentNode:e),Un(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ha(l);s.call(u)}}var l=Uc(e,0,!1,null,null,!1,!1,"",Tf);return e._reactRootContainer=l,e[Ut]=l.current,bi(e.nodeType===8?e.parentNode:e),Un(function(){Xa(t,l,n,r)}),l}function es(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ha(a);s.call(l)}}Xa(t,a,e,i)}else a=Vw(n,t,e,i,r);return ha(a)}tg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zr(t.pendingLanes);n!==0&&(dc(t,n|1),qe(t,ye()),!(J&6)&&(Cr=ye()+500,bn()))}break;case 13:Un(function(){var r=Wt(e,1);if(r!==null){var i=De();mt(r,e,1,i)}}),Wc(e,1)}};fc=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=De();mt(t,e,134217728,n)}Wc(e,134217728)}};ng=function(e){if(e.tag===13){var t=mn(e),n=Wt(e,t);if(n!==null){var r=De();mt(n,e,t,r)}Wc(e,t)}};rg=function(){return te};ig=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Dl=function(e,t,n){switch(t){case"input":if(jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Wa(r);if(!i)throw Error(R(90));zh(r),jl(r,i)}}}break;case"textarea":Ih(e,n);break;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}};Wh=Ac;Vh=Un;var qw={usingClientEntryPoint:!1,Events:[Bi,nr,Wa,Bh,Uh,Ac]},Kr={findFiberByHostInstance:Tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Kw={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qh(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||Ww,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{Ha=vo.inject(Kw),Et=vo}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qw;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qc(t))throw Error(R(200));return Uw(e,t,null,n)};Ze.createRoot=function(e,t){if(!qc(e))throw Error(R(299));var n=!1,r="",i=Em;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Uc(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,bi(e.nodeType===8?e.parentNode:e),new Vc(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Qh(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return Un(e)};Ze.hydrate=function(e,t,n){if(!Za(t))throw Error(R(200));return es(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!qc(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Em;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=$m(t,null,e,1,n??null,i,!1,o,a),e[Ut]=t.current,bi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ja(t)};Ze.render=function(e,t,n){if(!Za(t))throw Error(R(200));return es(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!Za(e))throw Error(R(40));return e._reactRootContainer?(Un(function(){es(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};Ze.unstable_batchedUpdates=Ac;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Za(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return es(e,t,n,!1,r)};Ze.version="18.2.0-next-9e3b772b8-20220608";function _m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_m)}catch(e){console.error(e)}}_m(),$h.exports=Ze;var Pm=$h.exports,jf=Pm;Ol.createRoot=jf.createRoot,Ol.hydrateRoot=jf.hydrateRoot;var Ne=function(){return Ne=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ne.apply(this,arguments)};function Li(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ie="-ms-",pi="-moz-",ee="-webkit-",Tm="comm",ts="rule",Kc="decl",Qw="@import",jm="@keyframes",Gw="@layer",Yw=Math.abs,Qc=String.fromCharCode,vu=Object.assign;function Xw(e,t){return Oe(e,0)^45?(((t<<2^Oe(e,0))<<2^Oe(e,1))<<2^Oe(e,2))<<2^Oe(e,3):0}function Lm(e){return e.trim()}function Mt(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function Fo(e,t){return e.indexOf(t)}function Oe(e,t){return e.charCodeAt(t)|0}function $r(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function Rm(e){return e.length}function ti(e,t){return t.push(e),e}function Jw(e,t){return e.map(t).join("")}function Lf(e,t){return e.filter(function(n){return!Mt(n,t)})}var ns=1,Er=1,Nm=0,ct=0,we=0,Mr="";function rs(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ns,column:Er,length:a,return:"",siblings:s}}function en(e,t){return vu(rs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Kn(e){for(;e.root;)e=en(e.root,{children:[e]});ti(e,e.siblings)}function Zw(){return we}function e1(){return we=ct>0?Oe(Mr,--ct):0,Er--,we===10&&(Er=1,ns--),we}function vt(){return we=ct<Nm?Oe(Mr,ct++):0,Er++,we===10&&(Er=1,ns++),we}function In(){return Oe(Mr,ct)}function Bo(){return ct}function is(e,t){return $r(Mr,e,t)}function yu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function t1(e){return ns=Er=1,Nm=kt(Mr=e),ct=0,[]}function n1(e){return Mr="",e}function Gs(e){return Lm(is(ct-1,wu(e===91?e+2:e===40?e+1:e)))}function r1(e){for(;(we=In())&&we<33;)vt();return yu(e)>2||yu(we)>3?"":" "}function i1(e,t){for(;--t&&vt()&&!(we<48||we>102||we>57&&we<65||we>70&&we<97););return is(e,Bo()+(t<6&&In()==32&&vt()==32))}function wu(e){for(;vt();)switch(we){case e:return ct;case 34:case 39:e!==34&&e!==39&&wu(we);break;case 40:e===41&&wu(e);break;case 92:vt();break}return ct}function o1(e,t){for(;vt()&&e+we!==47+10;)if(e+we===42+42&&In()===47)break;return"/*"+is(t,ct-1)+"*"+Qc(e===47?e:vt())}function a1(e){for(;!yu(In());)vt();return is(e,ct)}function s1(e){return n1(Uo("",null,null,null,[""],e=t1(e),0,[0],e))}function Uo(e,t,n,r,i,o,a,s,l){for(var u=0,c=0,d=a,f=0,y=0,v=0,S=1,E=1,g=1,p=0,m="",w=i,k=o,x=r,O=m;E;)switch(v=p,p=vt()){case 40:if(v!=108&&Oe(O,d-1)==58){Fo(O+=V(Gs(p),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:O+=Gs(p);break;case 9:case 10:case 13:case 32:O+=r1(v);break;case 92:O+=i1(Bo()-1,7);continue;case 47:switch(In()){case 42:case 47:ti(l1(o1(vt(),Bo()),t,n,l),l);break;default:O+="/"}break;case 123*S:s[u++]=kt(O)*g;case 125*S:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+c:g==-1&&(O=V(O,/\f/g,"")),y>0&&kt(O)-d&&ti(y>32?Nf(O+";",r,n,d-1,l):Nf(V(O," ","")+";",r,n,d-2,l),l);break;case 59:O+=";";default:if(ti(x=Rf(O,t,n,u,c,i,s,m,w=[],k=[],d,o),o),p===123)if(c===0)Uo(O,t,x,x,w,o,d,s,k);else switch(f===99&&Oe(O,3)===110?100:f){case 100:case 108:case 109:case 115:Uo(e,x,x,r&&ti(Rf(e,x,x,0,0,i,s,m,i,w=[],d,k),k),i,k,d,s,r?w:k);break;default:Uo(O,x,x,x,[""],k,0,s,k)}}u=c=y=0,S=g=1,m=O="",d=a;break;case 58:d=1+kt(O),y=v;default:if(S<1){if(p==123)--S;else if(p==125&&S++==0&&e1()==125)continue}switch(O+=Qc(p),p*S){case 38:g=c>0?1:(O+="\f",-1);break;case 44:s[u++]=(kt(O)-1)*g,g=1;break;case 64:In()===45&&(O+=Gs(vt())),f=In(),c=d=kt(m=O+=a1(Bo())),p++;break;case 45:v===45&&kt(O)==2&&(S=0)}}return o}function Rf(e,t,n,r,i,o,a,s,l,u,c,d){for(var f=i-1,y=i===0?o:[""],v=Rm(y),S=0,E=0,g=0;S<r;++S)for(var p=0,m=$r(e,f+1,f=Yw(E=a[S])),w=e;p<v;++p)(w=Lm(E>0?y[p]+" "+m:V(m,/&\f/g,y[p])))&&(l[g++]=w);return rs(e,t,n,i===0?ts:s,l,u,c,d)}function l1(e,t,n,r){return rs(e,t,n,Tm,Qc(Zw()),$r(e,2,-2),0,r)}function Nf(e,t,n,r,i){return rs(e,t,n,Kc,$r(e,0,r),$r(e,r+1,-1),r,i)}function zm(e,t,n){switch(Xw(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 4789:return pi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+pi+e+ie+e+e;case 5936:switch(Oe(e,t+11)){case 114:return ee+e+ie+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+ie+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+ie+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+ie+e+e;case 6165:return ee+e+ie+"flex-"+e+e;case 5187:return ee+e+V(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+ie+"flex-$1$2")+e;case 5443:return ee+e+ie+"flex-item-"+V(e,/flex-|-self/g,"")+(Mt(e,/flex-|baseline/)?"":ie+"grid-row-"+V(e,/flex-|-self/g,""))+e;case 4675:return ee+e+ie+"flex-line-pack"+V(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+ie+V(e,"shrink","negative")+e;case 5292:return ee+e+ie+V(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+V(e,"-grow","")+ee+e+ie+V(e,"grow","positive")+e;case 4554:return ee+V(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4200:if(!Mt(e,/flex-|baseline/))return ie+"grid-column-align"+$r(e,t)+e;break;case 2592:case 3360:return ie+V(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Mt(r.props,/grid-\w+-end/)})?~Fo(e+(n=n[t].value),"span")?e:ie+V(e,"-start","")+e+ie+"grid-row-span:"+(~Fo(n,"span")?Mt(n,/\d+/):+Mt(n,/\d+/)-+Mt(e,/\d+/))+";":ie+V(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Mt(r.props,/grid-\w+-start/)})?e:ie+V(V(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(Oe(e,t+1)){case 109:if(Oe(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+pi+(Oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Fo(e,"stretch")?zm(V(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return V(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return ie+i+":"+o+u+(a?ie+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(Oe(e,t+6)===121)return V(e,":",":"+ee)+e;break;case 6444:switch(Oe(e,Oe(e,14)===45?18:11)){case 120:return V(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Oe(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+ie+"$2box$3")+e;case 100:return V(e,":",":"+ie)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(e,"scroll-","scroll-snap-")+e}return e}function ga(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function u1(e,t,n,r){switch(e.type){case Gw:if(e.children.length)break;case Qw:case Kc:return e.return=e.return||e.value;case Tm:return"";case jm:return e.return=e.value+"{"+ga(e.children,r)+"}";case ts:if(!kt(e.value=e.props.join(",")))return""}return kt(n=ga(e.children,r))?e.return=e.value+"{"+n+"}":""}function c1(e){var t=Rm(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function d1(e){return function(t){t.root||(t=t.return)&&e(t)}}function f1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Kc:e.return=zm(e.value,e.length,n);return;case jm:return ga([en(e,{value:V(e.value,"@","@"+ee)})],r);case ts:if(e.length)return Jw(n=e.props,function(i){switch(Mt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Kn(en(e,{props:[V(i,/:(read-\w+)/,":"+pi+"$1")]})),Kn(en(e,{props:[i]})),vu(e,{props:Lf(n,r)});break;case"::placeholder":Kn(en(e,{props:[V(i,/:(plac\w+)/,":"+ee+"input-$1")]})),Kn(en(e,{props:[V(i,/:(plac\w+)/,":"+pi+"$1")]})),Kn(en(e,{props:[V(i,/:(plac\w+)/,ie+"input-$1")]})),Kn(en(e,{props:[i]})),vu(e,{props:Lf(n,r)});break}return""})}}var p1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_r=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Gc=typeof window<"u"&&"HTMLElement"in window,h1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),g1={},Yc=Object.freeze([]),Pr=Object.freeze({});function Mm(e,t,n){return n===void 0&&(n=Pr),e.theme!==n.theme&&e.theme||t||n.theme}var Im=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),m1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,v1=/(^-|-$)/g;function zf(e){return e.replace(m1,"-").replace(v1,"")}var y1=/(a)(d)/gi,Mf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Su(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Mf(t%52)+n;return(Mf(t%52)+n).replace(y1,"$1-$2")}var Ys,ur=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Dm=function(e){return ur(5381,e)};function Am(e){return Su(Dm(e)>>>0)}function w1(e){return e.displayName||e.name||"Component"}function Xs(e){return typeof e=="string"&&!0}var Hm=typeof Symbol=="function"&&Symbol.for,Fm=Hm?Symbol.for("react.memo"):60115,S1=Hm?Symbol.for("react.forward_ref"):60112,x1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},k1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},b1=((Ys={})[S1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ys[Fm]=Bm,Ys);function If(e){return("type"in(t=e)&&t.type.$$typeof)===Fm?Bm:"$$typeof"in e?b1[e.$$typeof]:x1;var t}var O1=Object.defineProperty,C1=Object.getOwnPropertyNames,Df=Object.getOwnPropertySymbols,$1=Object.getOwnPropertyDescriptor,E1=Object.getPrototypeOf,Af=Object.prototype;function Um(e,t,n){if(typeof t!="string"){if(Af){var r=E1(t);r&&r!==Af&&Um(e,r,n)}var i=C1(t);Df&&(i=i.concat(Df(t)));for(var o=If(e),a=If(t),s=0;s<i.length;++s){var l=i[s];if(!(l in k1||n&&n[l]||a&&l in a||o&&l in o)){var u=$1(t,l);try{O1(e,l,u)}catch{}}}}return e}function Tr(e){return typeof e=="function"}function Xc(e){return typeof e=="object"&&"styledComponentId"in e}function Rn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ri(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ku(e,t,n){if(n===void 0&&(n=!1),!n&&!Ri(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ku(e[r],t[r]);else if(Ri(t))for(var r in t)e[r]=ku(e[r],t[r]);return e}function Jc(e,t){Object.defineProperty(e,"toString",{value:t})}function Wi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Wi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),Wo=new Map,ma=new Map,Js=1,yo=function(e){if(Wo.has(e))return Wo.get(e);for(;ma.has(Js);)Js++;var t=Js++;return Wo.set(e,t),ma.set(t,e),t},P1=function(e,t){Wo.set(e,t),ma.set(t,e)},T1="style[".concat(_r,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),j1=new RegExp("^".concat(_r,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),L1=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},R1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(j1);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(P1(c,u),L1(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function N1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Wm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){return Array.from(s.querySelectorAll("style[".concat(_r,"]"))).at(-1)}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(_r,"active"),r.setAttribute("data-styled-version","6.0.1");var a=N1();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},z1=function(){function e(t){this.element=Wm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Wi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),M1=function(){function e(t){this.element=Wm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),I1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Hf=Gc,D1={isServer:!Gc,useCSSOMInjection:!h1},va=function(){function e(t,n,r){t===void 0&&(t=Pr),n===void 0&&(n={});var i=this;this.options=Ne(Ne({},D1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Gc&&Hf&&(Hf=!1,function(o){for(var a=document.querySelectorAll(T1),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(_r)!=="active"&&(R1(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Jc(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(d){var f=function(g){return ma.get(g)}(d);if(f===void 0)return"continue";var y=o.names.get(f),v=a.getGroup(d);if(y===void 0||v.length===0)return"continue";var S="".concat(_r,".g").concat(d,'[id="').concat(f,'"]'),E="";y!==void 0&&y.forEach(function(g){g.length>0&&(E+="".concat(g,","))}),l+="".concat(v).concat(S,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},c=0;c<s;c++)u(c);return l}(i)})}return e.registerId=function(t){return yo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ne(Ne({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new I1(i):r?new z1(i):new M1(i)}(this.options),new _1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(yo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(yo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(yo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),A1=/&/g,H1=/^\s*\/\/.*$/gm;function Vm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Vm(n.children,t)),n})}function F1(e){var t,n,r,i=e===void 0?Pr:e,o=i.options,a=o===void 0?Pr:o,s=i.plugins,l=s===void 0?Yc:s,u=function(f,y,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===ts&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(A1,n).replace(r,u))}),a.prefix&&c.push(f1),c.push(u1);var d=function(f,y,v,S){y===void 0&&(y=""),v===void 0&&(v=""),S===void 0&&(S="&"),t=S,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var E=f.replace(H1,""),g=s1(v||y?"".concat(v," ").concat(y," { ").concat(E," }"):E);a.namespace&&(g=Vm(g,a.namespace));var p=[];return ga(g,c1(c.concat(d1(function(m){return p.push(m)})))),p};return d.hash=l.length?l.reduce(function(f,y){return y.name||Wi(15),ur(f,y.name)},5381).toString():"",d}var B1=new va,bu=F1(),qm=Ot.createContext({shouldForwardProp:void 0,styleSheet:B1,stylis:bu});qm.Consumer;Ot.createContext(void 0);function Ou(){return B.useContext(qm)}var U1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=bu);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Jc(this,function(){throw Wi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=bu),this.name+t.hash},e}(),W1=function(e){return e>="A"&&e<="Z"};function Ff(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;W1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Km=function(e){return e==null||e===!1||e===""},Qm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Km(o)&&(Array.isArray(o)&&o.isCss||Tr(o)?r.push("".concat(Ff(i),":"),o,";"):Ri(o)?r.push.apply(r,Li(Li(["".concat(i," {")],Qm(o),!1),["}"],!1)):r.push("".concat(Ff(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in p1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yn(e,t,n,r){if(Km(e))return[];if(Xc(e))return[".".concat(e.styledComponentId)];if(Tr(e)){if(!Tr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return yn(i,t,n,r)}var o;return e instanceof U1?n?(e.inject(n,r),[e.getName(r)]):[e]:Ri(e)?Qm(e):Array.isArray(e)?e.flatMap(function(a){return yn(a,t,n,r)}):[e.toString()]}function Gm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Tr(n)&&!Xc(n))return!1}return!0}var V1=Dm("6.0.1"),q1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Gm(t),this.componentId=n,this.baseHash=ur(V1,n),this.baseStyle=r,va.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Rn(i,this.staticRulesId);else{var o=xu(yn(this.rules,t,n,r)),a=Su(ur(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=Rn(i,a),this.staticRulesId=a}else{for(var l=ur(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=xu(yn(d,t,n,r));l=ur(l,f),u+=f}}if(u){var y=Su(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=Rn(i,y)}}return i},e}(),Zc=Ot.createContext(void 0);Zc.Consumer;var Zs={};function K1(e,t,n){var r=Xc(e),i=e,o=!Xs(e),a=t.attrs,s=a===void 0?Yc:a,l=t.componentId,u=l===void 0?function(w,k){var x=typeof w!="string"?"sc":zf(w);Zs[x]=(Zs[x]||0)+1;var O="".concat(x,"-").concat(Am("6.0.1"+x+Zs[x]));return k?"".concat(k,"-").concat(O):O}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(w){return Xs(w)?"styled.".concat(w):"Styled(".concat(w1(w),")")}(e):c,f=t.displayName&&t.componentId?"".concat(zf(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var S=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;v=function(w,k){return S(w,k)&&E(w,k)}}else v=S}var g=new q1(n,f,r?i.componentStyle:void 0);g.isStatic&&s.length;function p(w,k){return function(x,O,$,L){var j=x.attrs,D=x.componentStyle,A=x.defaultProps,M=x.foldedComponentIds,C=x.styledComponentId,P=x.target,F=Ot.useContext(Zc),W=Ou(),T=x.shouldForwardProp||W.shouldForwardProp,N=function(Qt,Qe,Rt){for(var Ar,On=Ne(Ne({},Qe),{className:void 0,theme:Rt}),ks=0;ks<Qt.length;ks+=1){var Zi=Tr(Ar=Qt[ks])?Ar(On):Ar;for(var Gt in Zi)On[Gt]=Gt==="className"?Rn(On[Gt],Zi[Gt]):Gt==="style"?Ne(Ne({},On[Gt]),Zi[Gt]):Zi[Gt]}return Qe.className&&(On.className=Rn(On.className,Qe.className)),On}(j,O,Mm(O,F,A)||Pr),H=N.as||P,G={};for(var q in N)N[q]===void 0||q[0]==="$"||q==="as"||q==="theme"||(q==="forwardedAs"?G.as=N.forwardedAs:T&&!T(q,H)||(G[q]=N[q]));var Lt=function(Qt,Qe){var Rt=Ou(),Ar=Qt.generateAndInjectStyles(Qe,Rt.styleSheet,Rt.stylis);return Ar}(D,N),$e=Rn(M,C);return Lt&&($e+=" "+Lt),N.className&&($e+=" "+N.className),G[Xs(H)&&!Im.has(H)?"class":"className"]=$e,G.ref=$,B.createElement(H,G)}(m,w,k)}p.displayName=d;var m=Ot.forwardRef(p);return m.attrs=y,m.componentStyle=g,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?Rn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(k){for(var x=[],O=1;O<arguments.length;O++)x[O-1]=arguments[O];for(var $=0,L=x;$<L.length;$++)ku(k,L[$],!0);return k}({},i.defaultProps,w):w}}),Jc(m,function(){return".".concat(m.styledComponentId)}),o&&Um(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Bf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Uf=function(e){return Object.assign(e,{isCss:!0})};function tt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Tr(e)||Ri(e)){var r=e;return Uf(yn(Bf(Yc,Li([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?yn(i):Uf(yn(Bf(i,t)))}function Cu(e,t,n){if(n===void 0&&(n=Pr),!t)throw Wi(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,tt.apply(void 0,Li([i],o,!1)))};return r.attrs=function(i){return Cu(e,t,Ne(Ne({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Cu(e,t,Ne(Ne({},n),i))},r}var Ym=function(e){return Cu(K1,e)},b=Ym;Im.forEach(function(e){b[e]=Ym(e)});var Q1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Gm(t),va.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(xu(yn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&va.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function G1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=tt.apply(void 0,Li([e],t,!1)),i="sc-global-".concat(Am(JSON.stringify(r))),o=new Q1(r,i),a=function(l){var u=Ou(),c=Ot.useContext(Zc),d=Ot.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(d,l,u.styleSheet,c,u.stylis),(Ot.useInsertionEffect||Ot.useLayoutEffect)(function(){if(!u.styleSheet.server)return s(d,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function s(l,u,c,d,f){if(o.isStatic)o.renderStyles(l,g1,c,f);else{var y=Ne(Ne({},u),{theme:Mm(u,d,a.defaultProps)});o.renderStyles(l,y,c,f)}}return Ot.memo(a)}const _="1000px",X=tt`
  margin: 0;
  padding: 0;
`,wt=tt`
  background-repeat: no-repeat;
  background-size: contain;
`,ge={blueColor:"#366eff",lightBlackColor:"#16202C",blackColor:"#000000",lightGrayColor:"#1A202C",darkGrayColor:"#0b132a",whiteColor:"#ffffff",transparentWhiteColor:"#ffffff80",grayColor:"#fcfcfc",redColor:"#ff0000",lightGreenColor:"#3cc1b3",greenColor:"#20F1C0",darkGreenColor:"#00BAA4",darkColor:"#1C2938",deepColor:"#141E29",deepGrayColor:"#17212D",scrollColor:"#b8b8b8"},Y1=b.button`
  ${X};
  font-family: "Gramatika", sans-serif;
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
`,Xm=tt`
  background-repeat: no-repeat;
  background-position: center bottom;
`,ed=tt`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
`,Pt=tt`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`,Z=tt`
  font-family: Gramatika, sans-serif;
`,Ir=tt`
  font-family: Plus_Jakarta_Sans, sans-serif;
`,td=tt`
  margin-bottom: 2vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: ${_}) {
    flex-direction: column;
    align-items: center;
  }
`,Jm=tt`
  position: absolute;
  background-repeat: no-repeat;
  z-index: 2;
  background-size: cover;

  @media (max-width: ${_}) {
    width: 45vw;
    background-size: auto 100%;
    background-position: center;
  }
`,os=tt`
  color: ${ge.whiteColor};
  padding-bottom: 2.57vw;
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: 1.74vw;
  font-family: Grammatika, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`,nd=tt`
  ${X};
  color: ${ge.whiteColor};
  ${Z};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${_}) {
    font-size: calc(25vw / 5.08);
  }
`,Kt=()=>{const[e,t]=B.useState(null);return B.useEffect(()=>{const n=()=>{const r=window.innerWidth;console.log(parseInt(_)),console.log(r),t(r<=parseInt(_))};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e};function Ke({className:e,children:t,onClick:n,type:r}){return h.jsx(Y1,{type:r,className:e,onClick:n,children:t})}const X1=()=>{console.log("Press button open account")},J1=()=>{console.log("Press button burger menu")},Z1=()=>{console.log("Press button register")},eS=()=>{console.log("Press button login")},tS=()=>{console.log("Press download button")},nS=()=>{console.log("Press fees button")},rS=()=>{console.log("Press button Read more")},iS=()=>{console.log("Button slide 1 clicked")},oS=()=>{console.log("Button slide 2 clicked")},aS=()=>{console.log("Button slide 3 clicked")},sS=()=>{console.log("Button slide 4 clicked")};function lS(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const Wf={};function $u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Wf[t[0]]||(typeof t[0]=="string"&&(Wf[t[0]]=new Date),lS(...t))}const Zm=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function Vf(e,t,n){e.loadNamespaces(t,Zm(e,n))}function qf(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,Zm(e,r))}function uS(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],i=t.options?t.options.fallbackLng:!1,o=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const u=t.services.backendConnector.state[`${s}|${l}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!i||a(o,e)))}function cS(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?($u("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(i,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,e))return!1}}):uS(e,t,n)}const dS=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,fS={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},pS=e=>fS[e],hS=e=>e.replace(dS,pS);let Eu={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:hS};function gS(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Eu={...Eu,...e}}function mS(){return Eu}let ev;function vS(e){ev=e}function yS(){return ev}const wS={type:"3rdParty",init(e){gS(e.options.react),vS(e)}},tv=B.createContext();class SS{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const xS=(e,t)=>{const n=B.useRef();return B.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function nv(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:i}=B.useContext(tv)||{},o=n||r||yS();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new SS),!o){$u("You will need to pass in an i18next instance by using initReactI18next");const m=(k,x)=>typeof x=="string"?x:x&&typeof x=="object"&&typeof x.defaultValue=="string"?x.defaultValue:Array.isArray(k)?k[k.length-1]:k,w=[m,{},!1];return w.t=m,w.i18n={},w.ready=!1,w}o.options.react&&o.options.react.wait!==void 0&&$u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...mS(),...o.options.react,...t},{useSuspense:s,keyPrefix:l}=a;let u=e||i||o.options&&o.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(u);const c=(o.isInitialized||o.initializedStoreOnce)&&u.every(m=>cS(m,o,a));function d(){return o.getFixedT(t.lng||null,a.nsMode==="fallback"?u:u[0],l)}const[f,y]=B.useState(d);let v=u.join();t.lng&&(v=`${t.lng}${v}`);const S=xS(v),E=B.useRef(!0);B.useEffect(()=>{const{bindI18n:m,bindI18nStore:w}=a;E.current=!0,!c&&!s&&(t.lng?qf(o,t.lng,u,()=>{E.current&&y(d)}):Vf(o,u,()=>{E.current&&y(d)})),c&&S&&S!==v&&E.current&&y(d);function k(){E.current&&y(d)}return m&&o&&o.on(m,k),w&&o&&o.store.on(w,k),()=>{E.current=!1,m&&o&&m.split(" ").forEach(x=>o.off(x,k)),w&&o&&w.split(" ").forEach(x=>o.store.off(x,k))}},[o,v]);const g=B.useRef(!0);B.useEffect(()=>{E.current&&!g.current&&y(d),g.current=!1},[o,l]);const p=[f,o,c];if(p.t=f,p.i18n=o,p.ready=c,c||!c&&!s)return p;throw new Promise(m=>{t.lng?qf(o,t.lng,u,()=>m()):Vf(o,u,()=>m())})}function kS(e){let{i18n:t,defaultNS:n,children:r}=e;const i=B.useMemo(()=>({i18n:t,defaultNS:n}),[t,n]);return B.createElement(tv.Provider,{value:i},r)}const{greenColor:cr,lightGreenColor:bS,whiteColor:rv}=ge,OS=b.section`
  box-sizing: border-box;
  margin: 0 auto 7vw;
  position: relative;
  background-image: url(images/main-screen/screen-L.svg);
  ${Pt};
  border-radius: 0 0 1.6vw 1.6vw;
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  min-height: 61.11vw;
  box-shadow: 0 1.6vw 0 ${cr};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-image: url(images/main-screen/coins-L.svg);
    ${wt};
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
    background-color: ${cr};
  }

  @media (max-width: ${_}) {
    margin-bottom: 10vw;
    background-image: url(images/main-screen/screen-S.svg);
    border-radius: 0 0 3.93vw 3.93vw;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3.54vw 0 ${cr};

    &::before {
      content: "";
      position: absolute;
      top: 24.56vw;
      left: 0;
      width: 100vw;
      height: 100%;
      background-image: url(images/main-screen/coins-S.svg);
      ${wt};
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
      background-color: ${cr};
    }
  }
`,CS=b.div`
  box-sizing: border-box;
  margin: 17.47vw 0 2vw 4.28vw;
  width: 50%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: ${_}) {
    margin: 133.05vw 0 10vw 0;
    padding: 1vw 7vw 5vw 9vw;
    width: 100vw;
    background-image: url(images/main-screen/wrapper.svg);
    ${Pt};
  }
`,$S=b.div`
  border-radius: 50%;
  bottom: -5vw;
  left: 16vw;
  position: absolute;
  z-index: 1;
  width: 8.5vw;
  height: 8.5vw;
  background-image: url(images/main-screen/circle.svg);
  ${Pt};

  @media (max-width: ${_}) {
    bottom: -6vw;
    left: 50%;
    transform: translateX(-50%);
    width: 12vw;
    height: 12vw;
  }
`,ES=b.p`
  ${X};
  margin: 0 0 1.9vw;
  color: rgba(255, 255, 255, 0.5);
  ${Z};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
`,_S=b.h1`
  ${X};
  color: ${rv};
  font-size: 3.89vw;
  ${Z};
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: ${_}) {
    font-size: 9.84vw;
  }
`,PS=b.p`
  ${X};
  margin: 1.46vw 0 5.9vw;
  ${Z};
  font-size: calc(25vw / 14.4);
  color: ${cr};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${_}) {
    margin: 3.54vw 0 5.9vw;
    font-size: calc(25vw / 5.08);
  }
`,TS=b(Ke)`
  padding: calc(20vw / 14.4);
  background: linear-gradient(
    133deg,
    ${cr} 0%,
    ${bS} 100%
  );

  @media (max-width: ${_}) {
    padding: calc(12vw / 5.08);
  }
`,jS=b.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`,LS=b.span`
  ${X};
  margin-right: calc(20vw / 14.4);
  color: ${rv};
  font-size: 1.11vw;
  ${Z};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${_}) {
    margin-right: calc(12vw / 5.08);
    font-size: 3.15vw;
  }
`,RS=b.div`
  ${wt};
  width: 1.18vw;
  height: 1.04vw;
  background-image: url("images/common/play-icon.svg");

  @media (max-width: ${_}) {
    width: 3.35vw;
    height: 2.95vw;
  }
`,NS=()=>{const{t:e}=nv(),t=Kt(),n=h.jsxs(jS,{children:[h.jsx(LS,{children:e("mainScreen.button")}),h.jsx(RS,{})]});return h.jsx(h.Fragment,{children:h.jsxs(OS,{children:[h.jsxs(CS,{children:[!t&&h.jsx(ES,{children:e("mainScreen.span")}),h.jsx(_S,{children:e("mainScreen.title")}),h.jsx(PS,{children:e("mainScreen.text")}),h.jsx(TS,{type:"button",children:n,onClick:X1})]}),h.jsx($S,{})]})})},zS=b.div`
  ${wt};
  width: 11.25vw;
  height: 2.63vw;
  background-image: url("images/common/logo.svg");

  @media (max-width: ${_}) {
    width: 25vw;
    height: 5.06vw;
  }
`,iv=({...e})=>h.jsx(zS,{...e}),MS=b.a`
  ${X};
  color: ${e=>e.color};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`,vr=({href:e,target:t,rel:n,children:r,...i})=>h.jsx(MS,{href:e,target:t,rel:n,...i,children:r}),IS=b.div`
  display: flex;
  flex-direction: ${({$reverseOrder:e})=>"row"};
  justify-content: left;
  align-items: center;

  @media (max-width: ${_}) {
    justify-content: left;
  }
`,Qr=b(vr)`
  margin: 0 1.3vw 0 0;

  @media (max-width: ${_}) {
    margin: 0 1.9vw 0 0;
  }
`,Gr=b.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${_}) {
    width: 6.61vw;
    height: 6.61vw;
  }
`,ov=({type:e})=>{const t=e==="light",n=!t,r=h.jsx(Gr,{src:"images/common/telegram-light.svg",alt:"Telegram icon"}),i=h.jsx(Gr,{src:t?"images/common/twitter-light.svg":"images/common/twitter-dark.svg",alt:"Twitter icon"}),o=h.jsx(Gr,{src:t?"images/common/facebook-light.svg":"images/common/facebook-dark.svg",alt:"Facebook icon"}),a=h.jsx(Gr,{src:"images/common/instagram-dark.svg",alt:"Instagram icon"}),s=h.jsx(Gr,{src:"images/common/email-light.svg",alt:"Email icon"});return h.jsxs(IS,{$reverseOrder:n,children:[!t&&h.jsx(Qr,{color:"transparent",href:"https://example.com/instagram",target:"_blank",rel:"noopener noreferrer",children:a}),t&&h.jsx(Qr,{color:"transparent",href:"https://example.com/telegram",target:"_blank",rel:"noopener noreferrer",children:r}),h.jsx(Qr,{color:"transparent",href:"https://example.com/twitter",target:"_blank",rel:"noopener noreferrer",children:i}),h.jsx(Qr,{color:"transparent",href:"https://example.com/facebook",target:"_blank",rel:"noopener noreferrer",children:o}),t&&h.jsx(Qr,{color:"transparent",href:"https://example.com/email",target:"_blank",rel:"noopener noreferrer",children:s})]})};var me={},rd={},Vi={},qi={},av="Expected a function",Kf=0/0,DS="[object Symbol]",AS=/^\s+|\s+$/g,HS=/^[-+]0x[0-9a-f]+$/i,FS=/^0b[01]+$/i,BS=/^0o[0-7]+$/i,US=parseInt,WS=typeof ot=="object"&&ot&&ot.Object===Object&&ot,VS=typeof self=="object"&&self&&self.Object===Object&&self,qS=WS||VS||Function("return this")(),KS=Object.prototype,QS=KS.toString,GS=Math.max,YS=Math.min,el=function(){return qS.Date.now()};function XS(e,t,n){var r,i,o,a,s,l,u=0,c=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(av);t=Qf(t)||0,ya(n)&&(c=!!n.leading,d="maxWait"in n,o=d?GS(Qf(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function y(x){var O=r,$=i;return r=i=void 0,u=x,a=e.apply($,O),a}function v(x){return u=x,s=setTimeout(g,t),c?y(x):a}function S(x){var O=x-l,$=x-u,L=t-O;return d?YS(L,o-$):L}function E(x){var O=x-l,$=x-u;return l===void 0||O>=t||O<0||d&&$>=o}function g(){var x=el();if(E(x))return p(x);s=setTimeout(g,S(x))}function p(x){return s=void 0,f&&r?y(x):(r=i=void 0,a)}function m(){s!==void 0&&clearTimeout(s),u=0,r=l=i=s=void 0}function w(){return s===void 0?a:p(el())}function k(){var x=el(),O=E(x);if(r=arguments,i=this,l=x,O){if(s===void 0)return v(l);if(d)return s=setTimeout(g,t),y(l)}return s===void 0&&(s=setTimeout(g,t)),a}return k.cancel=m,k.flush=w,k}function JS(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(av);return ya(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),XS(e,t,{leading:r,maxWait:t,trailing:i})}function ya(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ZS(e){return!!e&&typeof e=="object"}function ex(e){return typeof e=="symbol"||ZS(e)&&QS.call(e)==DS}function Qf(e){if(typeof e=="number")return e;if(ex(e))return Kf;if(ya(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ya(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(AS,"");var n=FS.test(e);return n||BS.test(e)?US(e.slice(2),n?2:8):HS.test(e)?Kf:+e}var tx=JS,Ki={};Object.defineProperty(Ki,"__esModule",{value:!0});Ki.addPassiveEventListener=function(t,n,r){var i=function(){var o=!1;try{var a=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,a)}catch{}return o}();t.addEventListener(n,r,i?{passive:!0}:!1)};Ki.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r)};Object.defineProperty(qi,"__esModule",{value:!0});var nx=tx,rx=ox(nx),ix=Ki;function ox(e){return e&&e.__esModule?e:{default:e}}var ax=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,rx.default)(t,n)},ce={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=ax(function(i){ce.scrollHandler(t)},n);ce.scrollSpyContainers.push(t),(0,ix.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return ce.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=ce.scrollSpyContainers[ce.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(ce.currentPositionX(t),ce.currentPositionY(t))})},addStateHandler:function(t){ce.spySetState.push(t)},addSpyHandler:function(t,n){var r=ce.scrollSpyContainers[ce.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(ce.currentPositionX(n),ce.currentPositionY(n))},updateStates:function(){ce.spySetState.forEach(function(t){return t()})},unmount:function(t,n){ce.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),ce.spySetState&&ce.spySetState.length&&ce.spySetState.indexOf(t)>-1&&ce.spySetState.splice(ce.spySetState.indexOf(t),1),document.removeEventListener("scroll",ce.scrollHandler)},update:function(){return ce.scrollSpyContainers.forEach(function(t){return ce.scrollHandler(t)})}};qi.default=ce;var Dr={},Qi={};Object.defineProperty(Qi,"__esModule",{value:!0});var sx=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,i=r?"#"+r:"",o=window&&window.location,a=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},lx=function(){return window.location.hash.replace(/^#/,"")},ux=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},cx=function(t){return getComputedStyle(t).position!=="static"},tl=function(t,n){for(var r=t.offsetTop,i=t.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},dx=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(cx(t)){if(n.offsetParent!==t){var i=function(c){return c===t||c===document},o=tl(n,i),a=o.offsetTop,s=o.offsetParent;if(s!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var l=function(c){return c===document};return tl(n,l).offsetTop-tl(t,l).offsetTop};Qi.default={updateHash:sx,getHash:lx,filterElementInContainer:ux,scrollOffset:dx};var as={},id={};Object.defineProperty(id,"__esModule",{value:!0});id.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var od={};Object.defineProperty(od,"__esModule",{value:!0});var fx=Ki,px=["mousedown","mousewheel","touchmove","keydown"];od.default={subscribe:function(t){return typeof document<"u"&&px.forEach(function(n){return(0,fx.addPassiveEventListener)(document,n,t)})}};var Gi={};Object.defineProperty(Gi,"__esModule",{value:!0});var _u={registered:{},scrollEvent:{register:function(t,n){_u.registered[t]=n},remove:function(t){_u.registered[t]=null}}};Gi.default=_u;Object.defineProperty(as,"__esModule",{value:!0});var hx=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gx=Qi;ss(gx);var mx=id,Gf=ss(mx),vx=od,yx=ss(vx),wx=Gi,bt=ss(wx);function ss(e){return e&&e.__esModule?e:{default:e}}var sv=function(t){return Gf.default[t.smooth]||Gf.default.defaultEasing},Sx=function(t){return typeof t=="function"?t:function(){return t}},xx=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Pu=function(){return xx()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),lv=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},uv=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},cv=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},kx=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},bx=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},Ox=function e(t,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){bt.default.registered.end&&bt.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=e.bind(null,t,n);Pu.call(window,o);return}bt.default.registered.end&&bt.default.registered.end(i.to,i.target,i.currentPosition)},ad=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},Yi=function(t,n,r,i){if(n.data=n.data||lv(),window.clearTimeout(n.data.delayTimeout),yx.default.subscribe(function(){n.data.cancel=!0}),ad(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?uv(n):cv(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){bt.default.registered.end&&bt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=Sx(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var o=sv(n),a=Ox.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){bt.default.registered.begin&&bt.default.registered.begin(n.data.to,n.data.target),Pu.call(window,a)},n.delay);return}bt.default.registered.begin&&bt.default.registered.begin(n.data.to,n.data.target),Pu.call(window,a)},ls=function(t){return t=hx({},t),t.data=t.data||lv(),t.absolute=!0,t},Cx=function(t){Yi(0,ls(t))},$x=function(t,n){Yi(t,ls(n))},Ex=function(t){t=ls(t),ad(t),Yi(t.horizontal?kx(t):bx(t),t)},_x=function(t,n){n=ls(n),ad(n);var r=n.horizontal?uv(n):cv(n);Yi(t+r,n)};as.default={animateTopScroll:Yi,getAnimationType:sv,scrollToTop:Cx,scrollToBottom:Ex,scrollTo:$x,scrollMore:_x};Object.defineProperty(Dr,"__esModule",{value:!0});var Px=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tx=Qi,jx=sd(Tx),Lx=as,Rx=sd(Lx),Nx=Gi,wo=sd(Nx);function sd(e){return e&&e.__esModule?e:{default:e}}var So={},Yf=void 0;Dr.default={unmount:function(){So={}},register:function(t,n){So[t]=n},unregister:function(t){delete So[t]},get:function(t){return So[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return Yf=t},getActiveLink:function(){return Yf},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=Px({},n,{absolute:!1});var i=n.containerId,o=n.container,a=void 0;i?a=document.getElementById(i):o&&o.nodeType?a=o:a=document,n.absolute=!0;var s=n.horizontal,l=jx.default.scrollOffset(a,r,s)+(n.offset||0);if(!n.smooth){wo.default.registered.begin&&wo.default.registered.begin(t,r),a===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):a.scrollTop=l,wo.default.registered.end&&wo.default.registered.end(t,r);return}Rx.default.animateTopScroll(l,n,t,r)}};var dv={exports:{}},zx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Mx=zx,Ix=Mx;function fv(){}function pv(){}pv.resetWarningCache=fv;var Dx=function(){function e(r,i,o,a,s,l){if(l!==Ix){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:pv,resetWarningCache:fv};return n.PropTypes=n,n};dv.exports=Dx();var us=dv.exports,cs={};Object.defineProperty(cs,"__esModule",{value:!0});var Ax=Qi,nl=Hx(Ax);function Hx(e){return e&&e.__esModule?e:{default:e}}var Fx={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,i=r.get(t);if(i&&(n||t!==r.getActiveLink())){var o=this.containers[t]||document;r.scrollTo(t,{container:o})}},getHash:function(){return nl.default.getHash()},changeHash:function(t,n){this.isInitialized()&&nl.default.getHash()!==t&&nl.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};cs.default=Fx;Object.defineProperty(Vi,"__esModule",{value:!0});var xo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bx=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ux=B,Xf=Xi(Ux),Wx=qi,ko=Xi(Wx),Vx=Dr,qx=Xi(Vx),Kx=us,ae=Xi(Kx),Qx=cs,Xt=Xi(Qx);function Xi(e){return e&&e.__esModule?e:{default:e}}function Gx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yx(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Xx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Jf={to:ae.default.string.isRequired,containerId:ae.default.string,container:ae.default.object,activeClass:ae.default.string,activeStyle:ae.default.object,spy:ae.default.bool,horizontal:ae.default.bool,smooth:ae.default.oneOfType([ae.default.bool,ae.default.string]),offset:ae.default.number,delay:ae.default.number,isDynamic:ae.default.bool,onClick:ae.default.func,duration:ae.default.oneOfType([ae.default.number,ae.default.func]),absolute:ae.default.bool,onSetActive:ae.default.func,onSetInactive:ae.default.func,ignoreCancelEvents:ae.default.bool,hashSpy:ae.default.bool,saveHashHistory:ae.default.bool,spyThrottle:ae.default.number};Vi.default=function(e,t){var n=t||qx.default,r=function(o){Xx(a,o);function a(s){Gx(this,a);var l=Yx(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return i.call(l),l.state={active:!1},l}return Bx(a,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();ko.default.isMounted(l)||ko.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(Xt.default.isMounted()||Xt.default.mount(n),Xt.default.mapContainer(this.props.to,l)),ko.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){ko.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u={};this.state&&this.state.active?u=xo({},this.props.style,this.props.activeStyle):u=xo({},this.props.style);var c=xo({},this.props);for(var d in Jf)c.hasOwnProperty(d)&&delete c[d];return c.className=l,c.style=u,c.onClick=this.handleClick,Xf.default.createElement(e,c)}}]),a}(Xf.default.PureComponent),i=function(){var a=this;this.scrollTo=function(s,l){n.scrollTo(s,xo({},a.state,l))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(s,l){var u=a.getScrollSpyContainer();if(!(Xt.default.isMounted()&&!Xt.default.isInitialized())){var c=a.props.horizontal,d=a.props.to,f=null,y=void 0,v=void 0;if(c){var S=0,E=0,g=0;if(u.getBoundingClientRect){var p=u.getBoundingClientRect();g=p.left}if(!f||a.props.isDynamic){if(f=n.get(d),!f)return;var m=f.getBoundingClientRect();S=m.left-g+s,E=S+m.width}var w=s-a.props.offset;y=w>=Math.floor(S)&&w<Math.floor(E),v=w<Math.floor(S)||w>=Math.floor(E)}else{var k=0,x=0,O=0;if(u.getBoundingClientRect){var $=u.getBoundingClientRect();O=$.top}if(!f||a.props.isDynamic){if(f=n.get(d),!f)return;var L=f.getBoundingClientRect();k=L.top-O+l,x=k+L.height}var j=l-a.props.offset;y=j>=Math.floor(k)&&j<Math.floor(x),v=j<Math.floor(k)||j>=Math.floor(x)}var D=n.getActiveLink();if(v){if(d===D&&n.setActiveLink(void 0),a.props.hashSpy&&Xt.default.getHash()===d){var A=a.props.saveHashHistory,M=A===void 0?!1:A;Xt.default.changeHash("",M)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(d,f))}if(y&&(D!==d||a.state.active===!1)){n.setActiveLink(d);var C=a.props.saveHashHistory,P=C===void 0?!1:C;a.props.hashSpy&&Xt.default.changeHash(d,P),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(d,f))}}}};return r.propTypes=Jf,r.defaultProps={offset:0},r};Object.defineProperty(rd,"__esModule",{value:!0});var Jx=B,Zf=hv(Jx),Zx=Vi,ek=hv(Zx);function hv(e){return e&&e.__esModule?e:{default:e}}function tk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ep(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function nk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var rk=function(e){nk(t,e);function t(){var n,r,i,o;tk(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return o=(r=(i=ep(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),i),i.render=function(){return Zf.default.createElement("a",i.props,i.props.children)},r),ep(i,o)}return t}(Zf.default.Component);rd.default=(0,ek.default)(rk);var ld={};Object.defineProperty(ld,"__esModule",{value:!0});var ik=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ok=B,tp=gv(ok),ak=Vi,sk=gv(ak);function gv(e){return e&&e.__esModule?e:{default:e}}function lk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function uk(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ck(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var dk=function(e){ck(t,e);function t(){return lk(this,t),uk(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return ik(t,[{key:"render",value:function(){return tp.default.createElement("input",this.props,this.props.children)}}]),t}(tp.default.Component);ld.default=(0,sk.default)(dk);var ud={},ds={};Object.defineProperty(ds,"__esModule",{value:!0});var fk=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pk=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),hk=B,np=fs(hk),gk=Pm;fs(gk);var mk=Dr,rp=fs(mk),vk=us,ip=fs(vk);function fs(e){return e&&e.__esModule?e:{default:e}}function yk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wk(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Sk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}ds.default=function(e){var t=function(n){Sk(r,n);function r(i){yk(this,r);var o=wk(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return pk(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;rp.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){rp.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return np.default.createElement(e,fk({},this.props,{parentBindings:this.childBindings}))}}]),r}(np.default.Component);return t.propTypes={name:ip.default.string,id:ip.default.string},t};Object.defineProperty(ud,"__esModule",{value:!0});var op=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xk=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),kk=B,ap=cd(kk),bk=ds,Ok=cd(bk),Ck=us,sp=cd(Ck);function cd(e){return e&&e.__esModule?e:{default:e}}function $k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ek(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function _k(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var mv=function(e){_k(t,e);function t(){return $k(this,t),Ek(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return xk(t,[{key:"render",value:function(){var r=this,i=op({},this.props);return i.parentBindings&&delete i.parentBindings,ap.default.createElement("div",op({},i,{ref:function(a){r.props.parentBindings.domNode=a}}),this.props.children)}}]),t}(ap.default.Component);mv.propTypes={name:sp.default.string,id:sp.default.string};ud.default=(0,Ok.default)(mv);var rl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lp=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function up(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cp(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function dp(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var bo=B,Cn=qi,il=Dr,de=us,Jt=cs,fp={to:de.string.isRequired,containerId:de.string,container:de.object,activeClass:de.string,spy:de.bool,smooth:de.oneOfType([de.bool,de.string]),offset:de.number,delay:de.number,isDynamic:de.bool,onClick:de.func,duration:de.oneOfType([de.number,de.func]),absolute:de.bool,onSetActive:de.func,onSetInactive:de.func,ignoreCancelEvents:de.bool,hashSpy:de.bool,spyThrottle:de.number},Pk={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||il,i=function(a){dp(s,a);function s(l){up(this,s);var u=cp(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,l));return o.call(u),u.state={active:!1},u}return lp(s,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,c=this.props.container;return u?document.getElementById(u):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();Cn.isMounted(u)||Cn.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Jt.isMounted()||Jt.mount(r),Jt.mapContainer(this.props.to,u)),this.props.spy&&Cn.addStateHandler(this.stateHandler),Cn.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){Cn.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var c=rl({},this.props);for(var d in fp)c.hasOwnProperty(d)&&delete c[d];return c.className=u,c.onClick=this.handleClick,bo.createElement(t,c)}}]),s}(bo.Component),o=function(){var s=this;this.scrollTo=function(l,u){r.scrollTo(l,rl({},s.state,u))},this.handleClick=function(l){s.props.onClick&&s.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),s.scrollTo(s.props.to,s.props)},this.stateHandler=function(){r.getActiveLink()!==s.props.to&&(s.state!==null&&s.state.active&&s.props.onSetInactive&&s.props.onSetInactive(),s.setState({active:!1}))},this.spyHandler=function(l){var u=s.getScrollSpyContainer();if(!(Jt.isMounted()&&!Jt.isInitialized())){var c=s.props.to,d=null,f=0,y=0,v=0;if(u.getBoundingClientRect){var S=u.getBoundingClientRect();v=S.top}if(!d||s.props.isDynamic){if(d=r.get(c),!d)return;var E=d.getBoundingClientRect();f=E.top-v+l,y=f+E.height}var g=l-s.props.offset,p=g>=Math.floor(f)&&g<Math.floor(y),m=g<Math.floor(f)||g>=Math.floor(y),w=r.getActiveLink();if(m)return c===w&&r.setActiveLink(void 0),s.props.hashSpy&&Jt.getHash()===c&&Jt.changeHash(),s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive()),Cn.updateStates();if(p&&w!==c)return r.setActiveLink(c),s.props.hashSpy&&Jt.changeHash(c),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(c)),Cn.updateStates()}}};return i.propTypes=fp,i.defaultProps={offset:0},i},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){dp(i,r);function i(o){up(this,i);var a=cp(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return a.childBindings={domNode:null},a}return lp(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;il.unregister(this.props.name)}},{key:"registerElems",value:function(a){il.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return bo.createElement(t,rl({},this.props,{parentBindings:this.childBindings}))}}]),i}(bo.Component);return n.propTypes={name:de.string,id:de.string},n}},Tk=Pk;Object.defineProperty(me,"__esModule",{value:!0});me.Helpers=me.ScrollElement=me.ScrollLink=me.animateScroll=me.scrollSpy=me.Events=me.scroller=ni=me.Element=me.Button=Ev=me.Link=void 0;var jk=rd,vv=Tt(jk),Lk=ld,yv=Tt(Lk),Rk=ud,wv=Tt(Rk),Nk=Dr,Sv=Tt(Nk),zk=Gi,xv=Tt(zk),Mk=qi,kv=Tt(Mk),Ik=as,bv=Tt(Ik),Dk=Vi,Ov=Tt(Dk),Ak=ds,Cv=Tt(Ak),Hk=Tk,$v=Tt(Hk);function Tt(e){return e&&e.__esModule?e:{default:e}}var Ev=me.Link=vv.default;me.Button=yv.default;var ni=me.Element=wv.default;me.scroller=Sv.default;me.Events=xv.default;me.scrollSpy=kv.default;me.animateScroll=bv.default;me.ScrollLink=Ov.default;me.ScrollElement=Cv.default;me.Helpers=$v.default;me.default={Link:vv.default,Button:yv.default,Element:wv.default,scroller:Sv.default,Events:xv.default,scrollSpy:kv.default,animateScroll:bv.default,ScrollLink:Ov.default,ScrollElement:Cv.default,Helpers:$v.default};const{whiteColor:dd,greenColor:Fk,lightGreenColor:Bk}=ge,pp={signUp:"Register",signIn:"Log In"},Uk=b.header`
  overflow-x: hidden;
  box-sizing: border-box;
  padding-left: 4vw;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 6.94vw;
  background-color: transparent;
  z-index: 10;
  border-bottom: 0.5px ${dd} solid;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  @media (max-width: ${_}) {
    box-sizing: border-box;
    padding: 10vw 8.27vw 0;
    min-height: 25vw;
    justify-content: space-between;
  }
`,Wk=b.ul`
  ${X};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  margin: 0 2vw;
  width: 41.11vw;
  border-left: 1px solid rgba(255, 255, 255, 0.9);
  border-right: 1px solid rgba(255, 255, 255, 0.9);
`,Vk=b.li`
  ${X};
  ${Ir};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.48px;
  text-align: left;
  max-width: 7vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;

  a {
    ${X};
    display: inline-block;
    max-width: 7vw;
    color: rgba(255, 255, 255, 0.9);
  }
`,qk=b(Ke)`
  ${wt};
  background-color: transparent;
  width: 6.5vw;
  height: 3.77vw;
  border-radius: 0;
  background-image: url("images/header/burger-icon.svg");
`,Kk=b.span`
  color: ${dd};
  ${Ir};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.48px;
  text-decoration-line: underline;
`,Qk=b.span`
  color: ${dd};
  ${Z};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.42px;
`,hp=b.div`
  display: flex;
`,Gk=b(Ke)`
  padding: 0.5vw 2vw;
  background: linear-gradient(
    133deg,
    ${Fk} 0%,
    ${Bk} 100%
  );
`,Yk=b(iv)`
  width: 21vw;
  display: flex;
  position: relative;
`,Xk=b(Ke)`
  margin-right: 2vw;
  background-color: transparent;
`,Jk=b.div`
  margin-right: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,Zk=({sections:e})=>{const t=Kt(),n=h.jsx(hp,{children:h.jsx(Kk,{children:pp.signUp})}),r=h.jsx(hp,{children:h.jsx(Qk,{children:pp.signIn})});return console.log(t),t===null?null:h.jsxs(Uk,{children:[h.jsx(Yk,{color:"transparent"}),t&&h.jsx(qk,{type:"button",children:h.jsx(h.Fragment,{}),onClick:J1}),!t&&h.jsxs(h.Fragment,{children:[h.jsx(ov,{type:"light"}),h.jsx("nav",{children:h.jsx(Wk,{children:e.map(i=>h.jsx(Vk,{children:h.jsx(Ev,{to:i.id,spy:!0,smooth:!0,duration:500,children:i.title})},i.id))})}),h.jsxs(Jk,{children:[h.jsx(Xk,{type:"button",children:n,onClick:Z1}),h.jsx(Gk,{type:"button",children:r,onClick:eS})]})]})]})},{lightGrayColor:_v}=ge,eb=b.div`
  position: relative;
  z-index: 1;
  max-width: 19.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${_}) {
    max-width: 54.33vw;
  }
`,tb=b.h3`
  width: 130%;
  ${X};
  color: ${_v};
  text-align: center;
  ${Z};
  font-size: calc(26vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.52px;

  @media (max-width: ${_}) {
    width: 100%;
    font-size: calc(26vw / 5.08);
    margin: 5vw 0 0 0;
  }
`,nb=b.p`
  ${X};
  margin: 1.11vw 0 2.85vw;
  color: ${_v};
  text-align: center;
  ${Z};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;

  @media (max-width: ${_}) {
    font-size: calc(20vw / 5.08);
    margin: 0.7vw 0 4.72vw;
  }
`,ol=({subtitle:e,text:t,svg:n})=>h.jsxs(eb,{children:[n,h.jsx(tb,{children:e}),h.jsx(nb,{children:t})]}),{whiteColor:fd}=ge,rb=b.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  border-bottom: none;
  align-self: start;
  max-width: ((1440vw - 50vw) / 4);

  @media (max-width: ${_}) {
    align-self: center;
    padding: 10.5vw 3.5vw;
    max-width: 80.3vw;
    border-bottom: 0.5px ${fd} solid;
  }

  &:last-child {
    border: none;
  }
`,ib=b.div`
  width: 100%;
  min-height: 3.56vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${_}) {
    width: 100%;
  }
`,ob=b.h3`
  ${X};
  color: ${fd};
  ${Z};
  font-size: calc(26vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 0.96;
  text-align: left;

  @media (max-width: ${_}) {
    line-height: 0.83;
    font-size: calc(30vw / 5.08);
  }
`,ab=b.p`
  ${X};
  margin: 2.5vw 0 0 0;
  color: ${fd};
  ${Z};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  text-align: left;
  max-width: 19vw;

  @media (max-width: ${_}) {
    font-size: calc(25vw / 5.08);
    line-height: 1;
    max-width: 100%;
  }
`,sb=({subtitle:e,text:t,svg:n})=>h.jsxs(rb,{children:[h.jsxs(ib,{children:[n,h.jsx(ob,{children:e})]}),h.jsx(ab,{children:t})]}),lb=b.div`
  background-image: url("images/how-it-works/advantages/advantages-L.svg");
  border-radius: 1.6vw;
  ${Pt};
  min-height: 25.14vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: ${_}) {
    border-radius: 3.93vw;
    min-height: 212.58vw;
    background-image: url("images/how-it-works/advantages/advantages-S.svg");
    flex-direction: column;
  }
`,ub=b.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${_}) {
    justify-content: center;
    flex-direction: column;
  }
`,cb=b.div`
  ${wt};
  width: 3.75vw;
  height: 3.75vw;
  margin-right: 1vw;
  background-image: url(${({$image:e})=>e});

  @media (max-width: ${_}) {
    margin-right: 5vw;
    width: 13.95vw;
    height: 13.95vw;
  }
`,db=({advantages:e})=>h.jsx(lb,{children:h.jsx(ub,{children:e.map(t=>h.jsx(sb,{svg:h.jsx(cb,{$image:t.image}),subtitle:t.subtitle,text:t.text},t.index))})}),fb=b.h2`
  ${X};
  text-align: center;
  font-size: calc(50vw / 14.4);
  ${Z};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -1px;
  color: ${e=>e.color};

  @media (max-width: ${_}) {
    font-size: calc(50vw / 5.08);
    line-height: 1.2;
  }
`,jt=({children:e,...t})=>h.jsx(fb,{...t,children:e}),pb=b.p`
  ${X};
  text-align: center;
  font-size: calc(20vw / 14.05);
  ${Z};
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.color};

  @media (max-width: ${_}) {
    ${Ir};
    font-size: calc(18vw / 5.08);
    line-height: 1.5;
  }
`,ps=({children:e,...t})=>h.jsx(pb,{...t,children:e}),{darkGrayColor:gp}=ge,Nt={title:"How it work",text:'"Brief description of how the app works"',stepOne:{subtitle:"Send invoice",text:"Merchant issues an invoice in their local currency"},stepTwo:{subtitle:"Payment",text:"The user pays in the currency in which it is convenient for him. We take care of all the difficulties with overpayments and underpayments."},stepThree:{subtitle:"Broadcast",text:"Conversion and withdrawal, the merchant at any time withdraws his funds to his wallet in the currency in which he is comfortable."},advantages:[{index:"1",subtitle:"EU Regulated",text:"is fully regulated underEstionian License.",image:"images/how-it-works/advantages/advantages-first-icon.svg"},{index:"2",subtitle:"All types of crypto",text:"Coins, StableCoins, Tokens are supported.",image:"images/how-it-works/advantages/advantages-second-icon.svg"},{index:"3",subtitle:"Major Blockchains",text:"Bitcoin, Ethereum, Solana, BinanceSmart Chain, Ripple, etc.",image:"images/how-it-works/advantages/advantages-third-icon.svg"},{index:"4",subtitle:"Free of Charge",text:"All outgoing transactions, transfers and payouts in crypto are free of charge.",image:"images/how-it-works/advantages/advantages-fourth-icon.svg"}]},hb=b.div`
  position: relative;
  margin: 0 auto 2vw;
  ${ed};
  width: 93.54vw;
  height: auto;
  background-image: url("images/how-it-works/steps-L.svg");

  @media (max-width: ${_}) {
    padding-top: 16.7vw;
    width: 90.55vw;
    background-image: url("images/how-it-works/steps-S.svg");
  }
`,gb=b(ps)`
  margin: 0.7vw 0 1.71vw;

  @media (max-width: ${_}) {
    margin-bottom: 4.72vw;
  }
`,mb=b.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;

  @media (max-width: ${_}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,mp=b.div`
  position: relative;

  @media (max-width: ${_}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,vb=b.div`
  ${Jm};
  background-image: url("images/how-it-works/left-line-L.svg");
  top: 4vw;
  left: 14.5vw;
  width: 20.83vw;
  height: 6.04vw;
  z-index: 888;

  @media (max-width: ${_}) {
    top: 25vw;
    left: 7vw;
    height: calc(100% - 20.86vw + 15vw);
    background-image: url("images/how-it-works/left-line-S.svg");
  }
`,yb=b.div`
  ${Jm};
  background-image: url("images/how-it-works/right-line-L.svg");
  top: 4vw;
  right: -15vw;
  width: 19vw;
  height: 6.04vw;

  @media (max-width: ${_}) {
    top: 30vw;
    right: 3vw;
    height: calc(100% - 24.56vw + 15vw);
    background-image: url("images/how-it-works/right-line-S.svg");
  }
`,wb=b.div`
  ${td};
  margin-bottom: 2vw;
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("images/how-it-works/send-invoice.svg");
  ${Xm};
  background-size: 7.4vw 7.4vw;

  @media (max-width: ${_}) {
    margin-top: 2vw;
    width: 20.86vw;
    height: 20.86vw;
    background-image: url("images/how-it-works/send-invoice.svg");
    ${wt}
  }
`,Sb=b.div`
  ${td};
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("images/how-it-works/payment.jpg");
  ${Xm};
  background-size: 8.6vw 8.6vw;

  @media (max-width: ${_}) {
    margin-top: 4vw;
    width: 24.56vw;
    height: 24.56vw;
    background-image: url("images/how-it-works/payment.jpg");
    ${wt};
  }
}
`,xb=b.div`
  ${td};
  top: 0;
  left: 0;
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("images/how-it-works/brodcast.jpg");
  ${wt};

  @media (max-width: ${_}) {
    margin: 4vw 0 4vw;
    width: 32.08vw;
    height: 32.08vw;
    background-image: url("images/how-it-works/brodcast.jpg");
  }
`,kb=()=>h.jsxs(h.Fragment,{children:[h.jsxs(hb,{children:[h.jsx(jt,{color:gp,children:Nt.title}),h.jsx(gb,{color:gp,children:Nt.text}),h.jsxs(mb,{children:[h.jsxs(mp,{children:[h.jsx(vb,{}),h.jsx(ol,{svg:h.jsx(wb,{}),subtitle:Nt.stepOne.subtitle,text:Nt.stepOne.text})]}),h.jsxs(mp,{children:[h.jsx(yb,{}),h.jsx(ol,{svg:h.jsx(Sb,{}),subtitle:Nt.stepTwo.subtitle,text:Nt.stepTwo.text})]}),h.jsx(ol,{svg:h.jsx(xb,{}),subtitle:Nt.stepThree.subtitle,text:Nt.stepThree.text})]})]}),h.jsx(db,{advantages:Nt.advantages})]}),{darkColor:bb,whiteColor:Pv,darkGrayColor:Ob,lightGreenColor:Cb,greenColor:$b}=ge,Tu={title:"Mobile Wallet",text:"A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",button:"Download"},Eb=b.section`
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  background-color: ${bb};
  min-height: 41.53vw;

  @media (max-width: ${_}) {
    background-color: ${Ob};
    box-sizing: border-box;
    min-height: 270.66vw;
    flex-direction: column;
  }
`,_b=b.div`
  padding-left: 4.5vw;
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
  ${Pt};
  background-image: url("images/products-and-service/mobile-wallet-L.svg");

  @media (max-width: ${_}) {
    box-sizing: border-box;
    padding: 0 9vw 4.14vw;
    background-image: url("images/products-and-service/mobile-wallet-S.svg");
    justify-content: end;
    align-items: start;
  }
`,Pb=b.p`
  max-width: 37%;
  ${nd};
  margin: 3.06vw 0 3.75vw;

  @media (max-width: ${_}) {
    max-width: 90%;
    margin: 8.82vw 0;
  }
`,Tb=b(Ke)`
  background: linear-gradient(
    133deg,
    ${$b} 0%,
    ${Cb} 100%
  );
  border-radius: 0;
`,jb=b.div`
  padding: 0.8vw 1.7vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${_}) {
    min-width: 33vw;
    min-height: 8.33vw;
  }
`,Lb=b.span`
  margin-left: 2.29vw;
  color: ${Pv};
  font-size: 1.11vw;
  ${Z};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${_}) {
    margin-left: 6vw;
    font-size: 3.19vw;
  }
`,Rb=b.div`
  ${wt};
  width: 0.97vw;
  height: 1.53vw;
  background-image: url("images/products-and-service/download-icon.svg");

  @media (max-width: ${_}) {
    width: 2.39vw;
    height: 2.79vw;
  }
`,Nb=h.jsxs(jb,{children:[h.jsx(Rb,{}),h.jsx(Lb,{children:Tu.button})]}),zb=()=>h.jsx(Eb,{children:h.jsxs(_b,{children:[h.jsx(jt,{color:Pv,children:Tu.title}),h.jsx(Pb,{children:Tu.text}),h.jsx(Tb,{type:"button",children:Nb,onClick:tS})]})}),{whiteColor:Tv,darkGrayColor:Mb}=ge,al={title:"Avaible Currencies",text:"A vast range of major coins, stablecoins and liquid tokens is available.",imagesContext:[{text:"Coins",image:"images/products-and-service/lineOne.svg"},{text:"Stablekoins",image:"images/products-and-service/lineTwo.svg"},{text:"Tokens",image:"images/products-and-service/lineThree.svg"}]},Ib=b.section`
  width: 100vw;
  box-sizing: border-box;
  ${Pt};
  background-position: center -9.72vw;
  min-height: calc(1116vw / 14.4 - 9.72vw);
  padding: 8.26vw 0 8.26vw 4.93vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-image: url("images/products-and-service/avaible-currencies.svg");

  @media (max-width: ${_}) {
    padding: 22vw 0 20.27vw 9vw;
    min-height: 212.58vw;
    flex-direction: column;
    background-image: none;
    background-color: ${Mb};
    overflow-x: hidden;
  }
`,Db=b.div`
  display: grid;
  grid-template-columns: 19vw 1fr;
  grid-template-rows: auto auto auto;
  gap: 5.2vw 1vw;

  @media (max-width: ${_}) {
    display: flex;
    flex-direction: column;
  }
`,Ab=b.div`
  grid-column: 1;
  display: flex;
  align-items: center;

  @media (max-width: ${_}) {
    width: 52%;
    align-items: center;
  }
`,Hb=b.div`
  grid-column: 2;
  display: flex;
  align-items: center;

  @media (max-width: ${_}) {
    align-items: end;
    justify-content: end;
  }
`,vp=b.img`
  width: 74vw;
  height: auto;

  @media (max-width: ${_}) {
    width: 92vw;
    overflow-x: hidden;
  }
`,Fb=b.p`
  ${nd};
  max-width: 37%;
  margin: 2vw 0 6.18vw;

  @media (max-width: 1400px) {
    max-width: 90%;
    margin: 7.87vw 0 4.3vw;
  }
`,Bb=b.p`
  ${X};
  ${Z};
  color: ${Tv};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.8px;
  margin: 0 1vw 0 0;

  @media (max-width: ${_}) {
    text-align: start;
    line-height: 1;
    font-size: calc(35vw / 5.8);
    letter-spacing: -0.7px;
    width: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.8);
    margin: 14.37vw 0 10vw;
  }
`,Ub=()=>{const e=Kt();return h.jsxs(Ib,{children:[h.jsx(jt,{color:Tv,children:al.title}),h.jsx(Fb,{children:al.text}),h.jsx(Db,{children:al.imagesContext.map((t,n)=>h.jsxs(B.Fragment,{children:[h.jsx(Ab,{children:h.jsx(Bb,{children:t.text})}),h.jsx(Hb,{children:e?h.jsx(vp,{src:"images/products-and-service/line-S.svg",alt:t.text}):h.jsx(vp,{src:t.image,alt:t.text})})]},n))})]})},{whiteColor:Wb}=ge,Vb=b.h4`
  ${X};
  text-align: center;
  font-size: calc(22vw / 14.05);
  ${Z};
  font-weight: 500;
  line-height: 1.5;
  color: ${Wb};

  @media (max-width: ${_}) {
    font-size: calc(22vw / 5.08);
  }
`,qb=({children:e,...t})=>h.jsx(Vb,{...t,children:e}),{greenColor:Kb}=ge,Qb=b.div`
  width: 82.25vw;

  @media (max-width: ${_}) {
    width: 82.41vw;
    margin-right: 7.66vw;
    height: 100%;
    display: flex;
  }
`,Gb=b.div`
  margin-top: 2.57vw;
  padding: 0 0 0 6vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 82.25vw;
  ${ed};
  background-image: url("images/products-and-service/item-L.svg");
  border-radius: 30px;

  @media (max-width: ${_}) {
    margin-top: 0;
    padding: 8.86vw 4.53vw;
    justify-content: start;
    flex-direction: column;
    width: 82.41vw;
    height: 100%;
    background-image: url("images/products-and-service/item-S.svg");
  }
`,Yb=b.p`
  ${nd};
  margin: 6.74vw 0 2.57vw;

  @media (max-width: ${_}) {
    margin: 12.95vw 0 4.32vw;
  }
`,Xb=b.div`
  width: 32vw;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: ${_}) {
    margin: 0 auto;
    width: 70vw;
    box-sizing: border-box;
  }
`,Jb=b(Ke)`
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${Kb};
  font-size: 1.74vw;
  ${Z};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;

  @media (max-width: ${_}) {
    padding-right: 6vw;
    font-size: 4.91vw;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0.83vw;
    height: 1.04vw;
    background-image: url("images/products-and-service/play.svg");
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 60%;
    transform: translateY(-60%);

    @media (max-width: ${_}) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`,Zb=b.div`
  height: 20vw;
  width: 40vw;
  padding: 5.24vw 4vw;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  margin: auto;
  display: block;

  @media (max-width: ${_}) {
    margin: 0;
    padding: 6vw 0 0 0;
    height: 30vw;
    width: 70vw;
    object-position: center top;
  }
`,e2=b.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,jv=({slide:e})=>{const t=Kt(),n=r=>{switch(r){case"1":iS();break;case"2":oS();break;case"3":aS();break;case"4":sS();break}};return h.jsx(Qb,{children:h.jsxs(Gb,{children:[t&&h.jsx(qb,{children:e.mainButton}),h.jsxs(Xb,{children:[h.jsx(Yb,{children:e.textContent}),h.jsx(Jb,{type:"button",onClick:()=>n(e.id),children:e.button})]}),h.jsx(Zb,{children:h.jsx(e2,{src:e.image,alt:"Image"})})]})})};var Lv={},Rv={},hs={},Nv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Nv);var t2="Expected a function",yp=0/0,n2="[object Symbol]",r2=/^\s+|\s+$/g,i2=/^[-+]0x[0-9a-f]+$/i,o2=/^0b[01]+$/i,a2=/^0o[0-7]+$/i,s2=parseInt,l2=typeof ot=="object"&&ot&&ot.Object===Object&&ot,u2=typeof self=="object"&&self&&self.Object===Object&&self,c2=l2||u2||Function("return this")(),d2=Object.prototype,f2=d2.toString,p2=Math.max,h2=Math.min,sl=function(){return c2.Date.now()};function g2(e,t,n){var r,i,o,a,s,l,u=0,c=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(t2);t=wp(t)||0,ju(n)&&(c=!!n.leading,d="maxWait"in n,o=d?p2(wp(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function y(x){var O=r,$=i;return r=i=void 0,u=x,a=e.apply($,O),a}function v(x){return u=x,s=setTimeout(g,t),c?y(x):a}function S(x){var O=x-l,$=x-u,L=t-O;return d?h2(L,o-$):L}function E(x){var O=x-l,$=x-u;return l===void 0||O>=t||O<0||d&&$>=o}function g(){var x=sl();if(E(x))return p(x);s=setTimeout(g,S(x))}function p(x){return s=void 0,f&&r?y(x):(r=i=void 0,a)}function m(){s!==void 0&&clearTimeout(s),u=0,r=l=i=s=void 0}function w(){return s===void 0?a:p(sl())}function k(){var x=sl(),O=E(x);if(r=arguments,i=this,l=x,O){if(s===void 0)return v(l);if(d)return s=setTimeout(g,t),y(l)}return s===void 0&&(s=setTimeout(g,t)),a}return k.cancel=m,k.flush=w,k}function ju(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function m2(e){return!!e&&typeof e=="object"}function v2(e){return typeof e=="symbol"||m2(e)&&f2.call(e)==n2}function wp(e){if(typeof e=="number")return e;if(v2(e))return yp;if(ju(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ju(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(r2,"");var n=o2.test(e);return n||a2.test(e)?s2(e.slice(2),n?2:8):i2.test(e)?yp:+e}var y2=g2,zv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)t.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(zv);var gs=zv.exports,z={};Object.defineProperty(z,"__esModule",{value:!0});z.checkSpecKeys=z.checkNavigable=z.changeSlide=z.canUseDOM=z.canGoNext=void 0;z.clamp=Mv;z.swipeStart=z.swipeMove=z.swipeEnd=z.slidesOnRight=z.slidesOnLeft=z.slideHandler=z.siblingDirection=z.safePreventDefault=z.lazyStartIndex=z.lazySlidesOnRight=z.lazySlidesOnLeft=z.lazyEndIndex=z.keyHandler=z.initializedState=z.getWidth=z.getTrackLeft=z.getTrackCSS=z.getTrackAnimateCSS=z.getTotalSlides=z.getSwipeDirection=z.getSlideCount=z.getRequiredLazySlides=z.getPreClones=z.getPostClones=z.getOnDemandLazySlides=z.getNavigableIndexes=z.getHeight=z.extractObject=void 0;var w2=S2(B);function S2(e){return e&&e.__esModule?e:{default:e}}function Sp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sp(Object(n),!0).forEach(function(r){x2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function x2(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mv(e,t,n){return Math.max(t,Math.min(e,n))}var Dn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};z.safePreventDefault=Dn;var pd=function(t){for(var n=[],r=hd(t),i=gd(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};z.getOnDemandLazySlides=pd;var k2=function(t){for(var n=[],r=hd(t),i=gd(t),o=r;o<i;o++)n.push(o);return n};z.getRequiredLazySlides=k2;var hd=function(t){return t.currentSlide-Iv(t)};z.lazyStartIndex=hd;var gd=function(t){return t.currentSlide+Dv(t)};z.lazyEndIndex=gd;var Iv=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};z.lazySlidesOnLeft=Iv;var Dv=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};z.lazySlidesOnRight=Dv;var wa=function(t){return t&&t.offsetWidth||0};z.getWidth=wa;var md=function(t){return t&&t.offsetHeight||0};z.getHeight=md;var vd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,a;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),a=Math.round(o*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?"left":a>=135&&a<=225?"right":n===!0?a>=35&&a<=135?"up":"down":"vertical"};z.getSwipeDirection=vd;var yd=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};z.canGoNext=yd;var b2=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};z.extractObject=b2;var O2=function(t){var n=w2.default.Children.count(t.children),r=t.listRef,i=Math.ceil(wa(r)),o=t.trackRef&&t.trackRef.node,a=Math.ceil(wa(o)),s;if(t.vertical)s=i;else{var l=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(l*=i/100),s=Math.ceil((i-l)/t.slidesToShow)}var u=r&&md(r.querySelector('[data-index="0"]')),c=u*t.slidesToShow,d=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(d=n-1-t.initialSlide);var f=t.lazyLoadedList||[],y=pd(se(se({},t),{},{currentSlide:d,lazyLoadedList:f}));f=f.concat(y);var v={slideCount:n,slideWidth:s,listWidth:i,trackWidth:a,currentSlide:d,slideHeight:u,listHeight:c,lazyLoadedList:f};return t.autoplaying===null&&t.autoplay&&(v.autoplaying="playing"),v};z.initializedState=O2;var C2=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,a=t.index,s=t.slideCount,l=t.lazyLoad,u=t.currentSlide,c=t.centerMode,d=t.slidesToScroll,f=t.slidesToShow,y=t.useCSS,v=t.lazyLoadedList;if(n&&r)return{};var S=a,E,g,p,m={},w={},k=o?a:Mv(a,0,s-1);if(i){if(!o&&(a<0||a>=s))return{};a<0?S=a+s:a>=s&&(S=a-s),l&&v.indexOf(S)<0&&(v=v.concat(S)),m={animating:!0,currentSlide:S,lazyLoadedList:v,targetSlide:S},w={animating:!1,targetSlide:S}}else E=S,S<0?(E=S+s,o?s%d!==0&&(E=s-s%d):E=0):!yd(t)&&S>u?S=E=u:c&&S>=s?(S=o?s:s-1,E=o?0:s-1):S>=s&&(E=S-s,o?s%d!==0&&(E=0):E=s-f),!o&&S+f>=s&&(E=s-f),g=zi(se(se({},t),{},{slideIndex:S})),p=zi(se(se({},t),{},{slideIndex:E})),o||(g===p&&(S=E),g=p),l&&(v=v.concat(pd(se(se({},t),{},{currentSlide:S})))),y?(m={animating:!0,currentSlide:E,trackStyle:wd(se(se({},t),{},{left:g})),lazyLoadedList:v,targetSlide:k},w={animating:!1,currentSlide:E,trackStyle:Ni(se(se({},t),{},{left:p})),swipeLeft:null,targetSlide:k}):m={currentSlide:E,trackStyle:Ni(se(se({},t),{},{left:p})),lazyLoadedList:v,targetSlide:k};return{state:m,nextState:w}};z.slideHandler=C2;var $2=function(t,n){var r,i,o,a,s,l=t.slidesToScroll,u=t.slidesToShow,c=t.slideCount,d=t.currentSlide,f=t.targetSlide,y=t.lazyLoad,v=t.infinite;if(a=c%l!==0,r=a?0:(c-d)%l,n.message==="previous")o=r===0?l:u-r,s=d-o,y&&!v&&(i=d-o,s=i===-1?c-1:i),v||(s=f-l);else if(n.message==="next")o=r===0?l:r,s=d+o,y&&!v&&(s=(d+l)%c+r),v||(s=f+l);else if(n.message==="dots")s=n.index*n.slidesToScroll;else if(n.message==="children"){if(s=n.index,v){var S=Bv(se(se({},t),{},{targetSlide:s}));s>n.currentSlide&&S==="left"?s=s-c:s<n.currentSlide&&S==="right"&&(s=s+c)}}else n.message==="index"&&(s=Number(n.index));return s};z.changeSlide=$2;var E2=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};z.keyHandler=E2;var _2=function(t,n,r){return t.target.tagName==="IMG"&&Dn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};z.swipeStart=_2;var P2=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,a=n.swipeToSlide,s=n.verticalSwiping,l=n.rtl,u=n.currentSlide,c=n.edgeFriction,d=n.edgeDragged,f=n.onEdge,y=n.swiped,v=n.swiping,S=n.slideCount,E=n.slidesToScroll,g=n.infinite,p=n.touchObject,m=n.swipeEvent,w=n.listHeight,k=n.listWidth;if(!r){if(i)return Dn(t);o&&a&&s&&Dn(t);var x,O={},$=zi(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var L=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!s&&!v&&L>10)return{scrolling:!0};s&&(p.swipeLength=L);var j=(l?-1:1)*(p.curX>p.startX?1:-1);s&&(j=p.curY>p.startY?1:-1);var D=Math.ceil(S/E),A=vd(n.touchObject,s),M=p.swipeLength;return g||(u===0&&(A==="right"||A==="down")||u+1>=D&&(A==="left"||A==="up")||!yd(n)&&(A==="left"||A==="up"))&&(M=p.swipeLength*c,d===!1&&f&&(f(A),O.edgeDragged=!0)),!y&&m&&(m(A),O.swiped=!0),o?x=$+M*(w/k)*j:l?x=$-M*j:x=$+M*j,s&&(x=$+M*j),O=se(se({},O),{},{touchObject:p,swipeLeft:x,trackStyle:Ni(se(se({},n),{},{left:x}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(O.swiping=!0,Dn(t)),O}};z.swipeMove=P2;var T2=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,a=n.listWidth,s=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,d=n.scrolling,f=n.onSwipe,y=n.targetSlide,v=n.currentSlide,S=n.infinite;if(!r)return i&&Dn(t),{};var E=l?u/s:a/s,g=vd(o,l),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!o.swipeLength)return p;if(o.swipeLength>E){Dn(t),f&&f(g);var m,w,k=S?v:y;switch(g){case"left":case"up":w=k+Ru(n),m=c?Lu(n,w):w,p.currentDirection=0;break;case"right":case"down":w=k-Ru(n),m=c?Lu(n,w):w,p.currentDirection=1;break;default:m=k}p.triggerSlideHandler=m}else{var x=zi(n);p.trackStyle=wd(se(se({},n),{},{left:x}))}return p};z.swipeEnd=T2;var Av=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};z.getNavigableIndexes=Av;var Lu=function(t,n){var r=Av(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};z.checkNavigable=Lu;var Ru=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(l){if(t.vertical){if(l.offsetTop+md(l)/2>t.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+wa(l)/2>t.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var a=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,s=Math.abs(r.dataset.index-a)||1;return s}else return t.slidesToScroll};z.getSlideCount=Ru;var ms=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};z.checkSpecKeys=ms;var Ni=function(t){ms(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Fv(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",l=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=se(se({},o),{},{WebkitTransform:a,transform:s,msTransform:l})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};z.getTrackCSS=Ni;var wd=function(t){ms(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Ni(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};z.getTrackAnimateCSS=wd;var zi=function(t){if(t.unslick)return 0;ms(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,a=t.slideCount,s=t.slidesToShow,l=t.slidesToScroll,u=t.slideWidth,c=t.listWidth,d=t.variableWidth,f=t.slideHeight,y=t.fade,v=t.vertical,S=0,E,g,p=0;if(y||t.slideCount===1)return 0;var m=0;if(i?(m=-hi(t),a%l!==0&&n+l>a&&(m=-(n>a?s-(n-a):a%l)),o&&(m+=parseInt(s/2))):(a%l!==0&&n+l>a&&(m=s-a%l),o&&(m=parseInt(s/2))),S=m*u,p=m*f,v?E=n*f*-1+p:E=n*u*-1+S,d===!0){var w,k=r&&r.node;if(w=n+hi(t),g=k&&k.childNodes[w],E=g?g.offsetLeft*-1:0,o===!0){w=i?n+hi(t):n,g=k&&k.children[w],E=0;for(var x=0;x<w;x++)E-=k&&k.children[x]&&k.children[x].offsetWidth;E-=parseInt(t.centerPadding),E+=g&&(c-g.offsetWidth)/2}}return E};z.getTrackLeft=zi;var hi=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};z.getPreClones=hi;var Hv=function(t){return t.unslick||!t.infinite?0:t.slideCount};z.getPostClones=Hv;var Fv=function(t){return t.slideCount===1?1:hi(t)+t.slideCount+Hv(t)};z.getTotalSlides=Fv;var Bv=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Uv(t)?"left":"right":t.targetSlide<t.currentSlide-Wv(t)?"right":"left"};z.siblingDirection=Bv;var Uv=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),i&&n%2===0&&(a+=1),a}return i?0:n-1};z.slidesOnRight=Uv;var Wv=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),!i&&n%2===0&&(a+=1),a}return i?n-1:0};z.slidesOnLeft=Wv;var j2=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};z.canUseDOM=j2;var vs={};function Nu(e){"@babel/helpers - typeof";return Nu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nu(e)}Object.defineProperty(vs,"__esModule",{value:!0});vs.Track=void 0;var rn=Vv(B),ll=Vv(gs),ul=z;function Vv(e){return e&&e.__esModule?e:{default:e}}function zu(){return zu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zu.apply(this,arguments)}function L2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R2(e,t,n){return t&&xp(e.prototype,t),n&&xp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function N2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Mu(e,t)}function Mu(e,t){return Mu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Mu(e,t)}function z2(e){var t=I2();return function(){var r=Sa(e),i;if(t){var o=Sa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return M2(this,i)}}function M2(e,t){if(t&&(Nu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Iu(e)}function Iu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Sa(e){return Sa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Sa(e)}function kp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kp(Object(n),!0).forEach(function(r){Du(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Du(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var cl=function(t){var n,r,i,o,a;t.rtl?a=t.slideCount-1-t.index:a=t.index,i=a<0||a>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(a-t.currentSlide)%t.slideCount===0,a>t.currentSlide-o-1&&a<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=a&&a<t.currentSlide+t.slidesToShow;var s;t.targetSlide<0?s=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?s=t.targetSlide-t.slideCount:s=t.targetSlide;var l=a===s;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},D2=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},dl=function(t,n){return t.key||n},A2=function(t){var n,r=[],i=[],o=[],a=rn.default.Children.count(t.children),s=(0,ul.lazyStartIndex)(t),l=(0,ul.lazyEndIndex)(t);return rn.default.Children.forEach(t.children,function(u,c){var d,f={message:"children",index:c,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(c)>=0?d=u:d=rn.default.createElement("div",null);var y=D2(Fe(Fe({},t),{},{index:c})),v=d.props.className||"",S=cl(Fe(Fe({},t),{},{index:c}));if(r.push(rn.default.cloneElement(d,{key:"original"+dl(d,c),"data-index":c,className:(0,ll.default)(S,v),tabIndex:"-1","aria-hidden":!S["slick-active"],style:Fe(Fe({outline:"none"},d.props.style||{}),y),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})),t.infinite&&t.fade===!1){var E=a-c;E<=(0,ul.getPreClones)(t)&&a!==t.slidesToShow&&(n=-E,n>=s&&(d=u),S=cl(Fe(Fe({},t),{},{index:n})),i.push(rn.default.cloneElement(d,{key:"precloned"+dl(d,n),"data-index":n,tabIndex:"-1",className:(0,ll.default)(S,v),"aria-hidden":!S["slick-active"],style:Fe(Fe({},d.props.style||{}),y),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}}))),a!==t.slidesToShow&&(n=a+c,n<l&&(d=u),S=cl(Fe(Fe({},t),{},{index:n})),o.push(rn.default.cloneElement(d,{key:"postcloned"+dl(d,n),"data-index":n,tabIndex:"-1",className:(0,ll.default)(S,v),"aria-hidden":!S["slick-active"],style:Fe(Fe({},d.props.style||{}),y),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},H2=function(e){N2(n,e);var t=z2(n);function n(){var r;L2(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=t.call.apply(t,[this].concat(o)),Du(Iu(r),"node",null),Du(Iu(r),"handleRef",function(s){r.node=s}),r}return R2(n,[{key:"render",value:function(){var i=A2(this.props),o=this.props,a=o.onMouseEnter,s=o.onMouseOver,l=o.onMouseLeave,u={onMouseEnter:a,onMouseOver:s,onMouseLeave:l};return rn.default.createElement("div",zu({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(rn.default.PureComponent);vs.Track=H2;var ys={};function Au(e){"@babel/helpers - typeof";return Au=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Au(e)}Object.defineProperty(ys,"__esModule",{value:!0});ys.Dots=void 0;var Oo=qv(B),F2=qv(gs),bp=z;function qv(e){return e&&e.__esModule?e:{default:e}}function Op(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function B2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Op(Object(n),!0).forEach(function(r){U2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Op(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function U2(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Cp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V2(e,t,n){return t&&Cp(e.prototype,t),n&&Cp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function q2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Hu(e,t)}function Hu(e,t){return Hu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Hu(e,t)}function K2(e){var t=Y2();return function(){var r=xa(e),i;if(t){var o=xa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Q2(this,i)}}function Q2(e,t){if(t&&(Au(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return G2(e)}function G2(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xa(e){return xa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xa(e)}var X2=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},J2=function(e){q2(n,e);var t=K2(n);function n(){return W2(this,n),t.apply(this,arguments)}return V2(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,a=i.onMouseOver,s=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,d=i.slideCount,f=i.currentSlide,y=X2({slideCount:d,slidesToScroll:u,slidesToShow:c,infinite:l}),v={onMouseEnter:o,onMouseOver:a,onMouseLeave:s},S=[],E=0;E<y;E++){var g=(E+1)*u-1,p=l?g:(0,bp.clamp)(g,0,d-1),m=p-(u-1),w=l?m:(0,bp.clamp)(m,0,d-1),k=(0,F2.default)({"slick-active":l?f>=w&&f<=p:f===w}),x={message:"dots",index:E,slidesToScroll:u,currentSlide:f},O=this.clickHandler.bind(this,x);S=S.concat(Oo.default.createElement("li",{key:E,className:k},Oo.default.cloneElement(this.props.customPaging(E),{onClick:O})))}return Oo.default.cloneElement(this.props.appendDots(S),B2({className:this.props.dotsClass},v))}}]),n}(Oo.default.PureComponent);ys.Dots=J2;var jr={};function Fu(e){"@babel/helpers - typeof";return Fu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fu(e)}Object.defineProperty(jr,"__esModule",{value:!0});jr.PrevArrow=jr.NextArrow=void 0;var yr=Qv(B),Kv=Qv(gs),Z2=z;function Qv(e){return e&&e.__esModule?e:{default:e}}function ka(){return ka=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}function $p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ba(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$p(Object(n),!0).forEach(function(r){eO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$p(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eO(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ep(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Yv(e,t,n){return t&&Ep(e.prototype,t),n&&Ep(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Bu(e,t)}function Bu(e,t){return Bu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Bu(e,t)}function Jv(e){var t=rO();return function(){var r=Oa(e),i;if(t){var o=Oa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return tO(this,i)}}function tO(e,t){if(t&&(Fu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return nO(e)}function nO(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Oa(e){return Oa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Oa(e)}var iO=function(e){Xv(n,e);var t=Jv(n);function n(){return Gv(this,n),t.apply(this,arguments)}return Yv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var a={key:"0","data-role":"none",className:(0,Kv.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=yr.default.cloneElement(this.props.prevArrow,ba(ba({},a),s)):l=yr.default.createElement("button",ka({key:"0",type:"button"},a)," ","Previous"),l}}]),n}(yr.default.PureComponent);jr.PrevArrow=iO;var oO=function(e){Xv(n,e);var t=Jv(n);function n(){return Gv(this,n),t.apply(this,arguments)}return Yv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,Z2.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var a={key:"1","data-role":"none",className:(0,Kv.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=yr.default.cloneElement(this.props.nextArrow,ba(ba({},a),s)):l=yr.default.createElement("button",ka({key:"1",type:"button"},a)," ","Next"),l}}]),n}(yr.default.PureComponent);jr.NextArrow=oO;var Zv=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var a=o[i];n.call(r,a[1],a[0])}},t}()}(),Uu=typeof window<"u"&&typeof document<"u"&&window.document===document,Ca=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),aO=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ca):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),sO=2;function lO(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function a(){aO(o)}function s(){var l=Date.now();if(n){if(l-i<sO)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=l}return s}var uO=20,cO=["top","right","bottom","left","width","height","size","weight"],dO=typeof MutationObserver<"u",fO=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=lO(this.refresh.bind(this),uO)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Uu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),dO?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Uu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=cO.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),ey=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Lr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Ca},ty=ws(0,0,0,0);function $a(e){return parseFloat(e)||0}function _p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+$a(o)},0)}function pO(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],a=e["padding-"+o];n[o]=$a(a)}return n}function hO(e){var t=e.getBBox();return ws(0,0,t.width,t.height)}function gO(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return ty;var r=Lr(e).getComputedStyle(e),i=pO(r),o=i.left+i.right,a=i.top+i.bottom,s=$a(r.width),l=$a(r.height);if(r.boxSizing==="border-box"&&(Math.round(s+o)!==t&&(s-=_p(r,"left","right")+o),Math.round(l+a)!==n&&(l-=_p(r,"top","bottom")+a)),!vO(e)){var u=Math.round(s+o)-t,c=Math.round(l+a)-n;Math.abs(u)!==1&&(s-=u),Math.abs(c)!==1&&(l-=c)}return ws(i.left,i.top,s,l)}var mO=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Lr(e).SVGGraphicsElement}:function(e){return e instanceof Lr(e).SVGElement&&typeof e.getBBox=="function"}}();function vO(e){return e===Lr(e).document.documentElement}function yO(e){return Uu?mO(e)?hO(e):gO(e):ty}function wO(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(o.prototype);return ey(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function ws(e,t,n,r){return{x:e,y:t,width:n,height:r}}var SO=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ws(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=yO(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),xO=function(){function e(t,n){var r=wO(n);ey(this,{target:t,contentRect:r})}return e}(),kO=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Zv,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Lr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new SO(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Lr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new xO(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),ny=typeof WeakMap<"u"?new WeakMap:new Zv,ry=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=fO.getInstance(),r=new kO(t,n,this);ny.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){ry.prototype[e]=function(){var t;return(t=ny.get(this))[e].apply(t,arguments)}});var bO=function(){return typeof Ca.ResizeObserver<"u"?Ca.ResizeObserver:ry}();const OO=Object.freeze(Object.defineProperty({__proto__:null,default:bO},Symbol.toStringTag,{value:"Module"})),CO=by(OO);Object.defineProperty(hs,"__esModule",{value:!0});hs.InnerSlider=void 0;var Me=Ji(B),$O=Ji(Nv),EO=Ji(y2),_O=Ji(gs),ue=z,PO=vs,TO=ys,Pp=jr,jO=Ji(CO);function Ji(e){return e&&e.__esModule?e:{default:e}}function Ea(e){"@babel/helpers - typeof";return Ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ea(e)}function _a(){return _a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_a.apply(this,arguments)}function LO(e,t){if(e==null)return{};var n=RO(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function RO(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Tp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tp(Object(n),!0).forEach(function(r){Q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function NO(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function zO(e,t,n){return t&&jp(e.prototype,t),n&&jp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function MO(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Wu(e,t)}function Wu(e,t){return Wu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Wu(e,t)}function IO(e){var t=AO();return function(){var r=Pa(e),i;if(t){var o=Pa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return DO(this,i)}}function DO(e,t){if(t&&(Ea(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return K(e)}function K(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function AO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Pa(e){return Pa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Pa(e)}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var HO=function(e){MO(n,e);var t=IO(n);function n(r){var i;NO(this,n),i=t.call(this,r),Q(K(i),"listRefHandler",function(a){return i.list=a}),Q(K(i),"trackRefHandler",function(a){return i.track=a}),Q(K(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var a=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,ue.getHeight)(a)+"px"}}),Q(K(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var a=(0,ue.getOnDemandLazySlides)(U(U({},i.props),i.state));a.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}var s=U({listRef:i.list,trackRef:i.track},i.props);i.updateState(s,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new jO.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),Q(K(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(a){return clearTimeout(a)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),Q(K(i),"componentDidUpdate",function(a){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var s=(0,ue.getOnDemandLazySlides)(U(U({},i.props),i.state));s.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}i.adaptHeight();var l=U(U({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(a);u&&i.updateState(l,u,function(){i.state.currentSlide>=Me.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Me.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),Q(K(i),"onWindowResized",function(a){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,EO.default)(function(){return i.resizeWindow(a)},50),i.debouncedResize()}),Q(K(i),"resizeWindow",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(i.track&&i.track.node);if(s){var l=U(U({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,a,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),Q(K(i),"updateState",function(a,s,l){var u=(0,ue.initializedState)(a);a=U(U(U({},a),u),{},{slideIndex:u.currentSlide});var c=(0,ue.getTrackLeft)(a);a=U(U({},a),{},{left:c});var d=(0,ue.getTrackCSS)(a);(s||Me.default.Children.count(i.props.children)!==Me.default.Children.count(a.children))&&(u.trackStyle=d),i.setState(u,l)}),Q(K(i),"ssrInit",function(){if(i.props.variableWidth){var a=0,s=0,l=[],u=(0,ue.getPreClones)(U(U(U({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,ue.getPostClones)(U(U(U({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(O){l.push(O.props.style.width),a+=O.props.style.width});for(var d=0;d<u;d++)s+=l[l.length-1-d],a+=l[l.length-1-d];for(var f=0;f<c;f++)a+=l[f];for(var y=0;y<i.state.currentSlide;y++)s+=l[y];var v={width:a+"px",left:-s+"px"};if(i.props.centerMode){var S="".concat(l[i.state.currentSlide],"px");v.left="calc(".concat(v.left," + (100% - ").concat(S,") / 2 ) ")}return{trackStyle:v}}var E=Me.default.Children.count(i.props.children),g=U(U(U({},i.props),i.state),{},{slideCount:E}),p=(0,ue.getPreClones)(g)+(0,ue.getPostClones)(g)+E,m=100/i.props.slidesToShow*p,w=100/p,k=-w*((0,ue.getPreClones)(g)+i.state.currentSlide)*m/100;i.props.centerMode&&(k+=(100-w*m/100)/2);var x={width:m+"%",left:k+"%"};return{slideWidth:w+"%",trackStyle:x}}),Q(K(i),"checkImagesLoad",function(){var a=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],s=a.length,l=0;Array.prototype.forEach.call(a,function(u){var c=function(){return++l&&l>=s&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var d=u.onclick;u.onclick=function(){d(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),Q(K(i),"progressiveLazyLoad",function(){for(var a=[],s=U(U({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,ue.getPostClones)(s);l++)if(i.state.lazyLoadedList.indexOf(l)<0){a.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,ue.getPreClones)(s);u--)if(i.state.lazyLoadedList.indexOf(u)<0){a.push(u);break}a.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),Q(K(i),"slideHandler",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,c=l.beforeChange,d=l.onLazyLoad,f=l.speed,y=l.afterChange,v=i.state.currentSlide,S=(0,ue.slideHandler)(U(U(U({index:a},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!s})),E=S.state,g=S.nextState;if(E){c&&c(v,E.currentSlide);var p=E.lazyLoadedList.filter(function(m){return i.state.lazyLoadedList.indexOf(m)<0});d&&p.length>0&&d(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),y&&y(v),delete i.animationEndCallback),i.setState(E,function(){u&&i.asNavForIndex!==a&&(i.asNavForIndex=a,u.innerSlider.slideHandler(a)),g&&(i.animationEndCallback=setTimeout(function(){var m=g.animating,w=LO(g,["animating"]);i.setState(w,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:m})},10)),y&&y(E.currentSlide),delete i.animationEndCallback})},f))})}}),Q(K(i),"changeSlide",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=U(U({},i.props),i.state),u=(0,ue.changeSlide)(l,a);if(!(u!==0&&!u)&&(s===!0?i.slideHandler(u,s):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),Q(K(i),"clickHandler",function(a){i.clickable===!1&&(a.stopPropagation(),a.preventDefault()),i.clickable=!0}),Q(K(i),"keyHandler",function(a){var s=(0,ue.keyHandler)(a,i.props.accessibility,i.props.rtl);s!==""&&i.changeSlide({message:s})}),Q(K(i),"selectHandler",function(a){i.changeSlide(a)}),Q(K(i),"disableBodyScroll",function(){var a=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=a}),Q(K(i),"enableBodyScroll",function(){window.ontouchmove=null}),Q(K(i),"swipeStart",function(a){i.props.verticalSwiping&&i.disableBodyScroll();var s=(0,ue.swipeStart)(a,i.props.swipe,i.props.draggable);s!==""&&i.setState(s)}),Q(K(i),"swipeMove",function(a){var s=(0,ue.swipeMove)(a,U(U(U({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));s&&(s.swiping&&(i.clickable=!1),i.setState(s))}),Q(K(i),"swipeEnd",function(a){var s=(0,ue.swipeEnd)(a,U(U(U({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(s){var l=s.triggerSlideHandler;delete s.triggerSlideHandler,i.setState(s),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),Q(K(i),"touchEnd",function(a){i.swipeEnd(a),i.clickable=!0}),Q(K(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),Q(K(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),Q(K(i),"slickGoTo",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a=Number(a),isNaN(a))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:a,currentSlide:i.state.currentSlide},s)},0))}),Q(K(i),"play",function(){var a;if(i.props.rtl)a=i.state.currentSlide-i.props.slidesToScroll;else if((0,ue.canGoNext)(U(U({},i.props),i.state)))a=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(a)}),Q(K(i),"autoPlay",function(a){i.autoplayTimer&&clearInterval(i.autoplayTimer);var s=i.state.autoplaying;if(a==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(a==="leave"){if(s==="paused"||s==="focused")return}else if(a==="blur"&&(s==="paused"||s==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),Q(K(i),"pause",function(a){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var s=i.state.autoplaying;a==="paused"?i.setState({autoplaying:"paused"}):a==="focused"?(s==="hovered"||s==="playing")&&i.setState({autoplaying:"focused"}):s==="playing"&&i.setState({autoplaying:"hovered"})}),Q(K(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),Q(K(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),Q(K(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),Q(K(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),Q(K(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),Q(K(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),Q(K(i),"render",function(){var a=(0,_O.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),s=U(U({},i.props),i.state),l=(0,ue.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=U(U({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=(0,ue.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;d=U(U({},d),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),c=Me.default.createElement(TO.Dots,d)}var y,v,S=(0,ue.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);S.clickHandler=i.changeSlide,i.props.arrows&&(y=Me.default.createElement(Pp.PrevArrow,S),v=Me.default.createElement(Pp.NextArrow,S));var E=null;i.props.vertical&&(E={height:i.state.listHeight});var g=null;i.props.vertical===!1?i.props.centerMode===!0&&(g={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(g={padding:i.props.centerPadding+" 0px"});var p=U(U({},E),g),m=i.props.touchMove,w={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:m?i.swipeStart:null,onMouseMove:i.state.dragging&&m?i.swipeMove:null,onMouseUp:m?i.swipeEnd:null,onMouseLeave:i.state.dragging&&m?i.swipeEnd:null,onTouchStart:m?i.swipeStart:null,onTouchMove:i.state.dragging&&m?i.swipeMove:null,onTouchEnd:m?i.touchEnd:null,onTouchCancel:i.state.dragging&&m?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},k={className:a,dir:"ltr",style:i.props.style};return i.props.unslick&&(w={className:"slick-list"},k={className:a}),Me.default.createElement("div",k,i.props.unslick?"":y,Me.default.createElement("div",_a({ref:i.listRefHandler},w),Me.default.createElement(PO.Track,_a({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":v,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=U(U({},$O.default),{},{currentSlide:i.props.initialSlide,slideCount:Me.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=U(U({},i.state),o),i}return zO(n,[{key:"didPropsChange",value:function(i){for(var o=!1,a=0,s=Object.keys(this.props);a<s.length;a++){var l=s[a];if(!i.hasOwnProperty(l)){o=!0;break}if(!(Ea(i[l])==="object"||typeof i[l]=="function")&&i[l]!==this.props[l]){o=!0;break}}return o||Me.default.Children.count(this.props.children)!==Me.default.Children.count(i.children)}}]),n}(Me.default.Component);hs.InnerSlider=HO;var FO=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},BO=FO,UO=BO,WO=function(e){var t=/[height|width]$/;return t.test(e)},Lp=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=UO(r),WO(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},VO=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Lp(n),r<e.length-1&&(t+=", ")}),t):Lp(e)},qO=VO,iy={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(B);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(a){return t.default.createElement("ul",{style:{display:"block"}},a)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(a){return t.default.createElement("button",null,a+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(iy);var fl,Rp;function KO(){if(Rp)return fl;Rp=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},fl=e,fl}var pl,Np;function oy(){if(Np)return pl;Np=1;function e(r,i){var o=0,a=r.length,s;for(o;o<a&&(s=i(r[o],o),s!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return pl={isFunction:n,isArray:t,each:e},pl}var hl,zp;function QO(){if(zp)return hl;zp=1;var e=KO(),t=oy().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(a){o.mql=a.currentTarget||a,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,a){if(o.equals(r))return o.destroy(),!i.splice(a,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},hl=n,hl}var gl,Mp;function GO(){if(Mp)return gl;Mp=1;var e=QO(),t=oy(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(a,s,l){var u=this.queries,c=l&&this.browserIsIncapable;return u[a]||(u[a]=new e(a,c)),r(s)&&(s={match:s}),i(s)||(s=[s]),n(s,function(d){r(d)&&(d={match:d}),u[a].addHandler(d)}),this},unregister:function(a,s){var l=this.queries[a];return l&&(s?l.removeHandler(s):(l.clear(),delete this.queries[a])),this}},gl=o,gl}var ml,Ip;function YO(){if(Ip)return ml;Ip=1;var e=GO();return ml=new e,ml}(function(e){function t($){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},t($)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(B),r=hs,i=s(qO),o=s(iy),a=z;function s($){return $&&$.__esModule?$:{default:$}}function l(){return l=Object.assign||function($){for(var L=1;L<arguments.length;L++){var j=arguments[L];for(var D in j)Object.prototype.hasOwnProperty.call(j,D)&&($[D]=j[D])}return $},l.apply(this,arguments)}function u($,L){var j=Object.keys($);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols($);L&&(D=D.filter(function(A){return Object.getOwnPropertyDescriptor($,A).enumerable})),j.push.apply(j,D)}return j}function c($){for(var L=1;L<arguments.length;L++){var j=arguments[L]!=null?arguments[L]:{};L%2?u(Object(j),!0).forEach(function(D){k($,D,j[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties($,Object.getOwnPropertyDescriptors(j)):u(Object(j)).forEach(function(D){Object.defineProperty($,D,Object.getOwnPropertyDescriptor(j,D))})}return $}function d($,L){if(!($ instanceof L))throw new TypeError("Cannot call a class as a function")}function f($,L){for(var j=0;j<L.length;j++){var D=L[j];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty($,D.key,D)}}function y($,L,j){return L&&f($.prototype,L),j&&f($,j),Object.defineProperty($,"prototype",{writable:!1}),$}function v($,L){if(typeof L!="function"&&L!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(L&&L.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),Object.defineProperty($,"prototype",{writable:!1}),L&&S($,L)}function S($,L){return S=Object.setPrototypeOf||function(D,A){return D.__proto__=A,D},S($,L)}function E($){var L=m();return function(){var D=w($),A;if(L){var M=w(this).constructor;A=Reflect.construct(D,arguments,M)}else A=D.apply(this,arguments);return g(this,A)}}function g($,L){if(L&&(t(L)==="object"||typeof L=="function"))return L;if(L!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p($)}function p($){if($===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return $}function m(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function w($){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(j){return j.__proto__||Object.getPrototypeOf(j)},w($)}function k($,L,j){return L in $?Object.defineProperty($,L,{value:j,enumerable:!0,configurable:!0,writable:!0}):$[L]=j,$}var x=(0,a.canUseDOM)()&&YO(),O=function($){v(j,$);var L=E(j);function j(D){var A;return d(this,j),A=L.call(this,D),k(p(A),"innerSliderRefHandler",function(M){return A.innerSlider=M}),k(p(A),"slickPrev",function(){return A.innerSlider.slickPrev()}),k(p(A),"slickNext",function(){return A.innerSlider.slickNext()}),k(p(A),"slickGoTo",function(M){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return A.innerSlider.slickGoTo(M,C)}),k(p(A),"slickPause",function(){return A.innerSlider.pause("paused")}),k(p(A),"slickPlay",function(){return A.innerSlider.autoPlay("play")}),A.state={breakpoint:null},A._responsiveMediaHandlers=[],A}return y(j,[{key:"media",value:function(A,M){x.register(A,M),this._responsiveMediaHandlers.push({query:A,handler:M})}},{key:"componentDidMount",value:function(){var A=this;if(this.props.responsive){var M=this.props.responsive.map(function(P){return P.breakpoint});M.sort(function(P,F){return P-F}),M.forEach(function(P,F){var W;F===0?W=(0,i.default)({minWidth:0,maxWidth:P}):W=(0,i.default)({minWidth:M[F-1]+1,maxWidth:P}),(0,a.canUseDOM)()&&A.media(W,function(){A.setState({breakpoint:P})})});var C=(0,i.default)({minWidth:M.slice(-1)[0]});(0,a.canUseDOM)()&&this.media(C,function(){A.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(A){x.unregister(A.query,A.handler)})}},{key:"render",value:function(){var A=this,M,C;this.state.breakpoint?(C=this.props.responsive.filter(function($e){return $e.breakpoint===A.state.breakpoint}),M=C[0].settings==="unslick"?"unslick":c(c(c({},o.default),this.props),C[0].settings)):M=c(c({},o.default),this.props),M.centerMode&&(M.slidesToScroll>1,M.slidesToScroll=1),M.fade&&(M.slidesToShow>1,M.slidesToScroll>1,M.slidesToShow=1,M.slidesToScroll=1);var P=n.default.Children.toArray(this.props.children);P=P.filter(function($e){return typeof $e=="string"?!!$e.trim():!!$e}),M.variableWidth&&(M.rows>1||M.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),M.variableWidth=!1);for(var F=[],W=null,T=0;T<P.length;T+=M.rows*M.slidesPerRow){for(var N=[],H=T;H<T+M.rows*M.slidesPerRow;H+=M.slidesPerRow){for(var G=[],q=H;q<H+M.slidesPerRow&&(M.variableWidth&&P[q].props.style&&(W=P[q].props.style.width),!(q>=P.length));q+=1)G.push(n.default.cloneElement(P[q],{key:100*T+10*H+q,tabIndex:-1,style:{width:"".concat(100/M.slidesPerRow,"%"),display:"inline-block"}}));N.push(n.default.createElement("div",{key:10*T+H},G))}M.variableWidth?F.push(n.default.createElement("div",{key:T,style:{width:W}},N)):F.push(n.default.createElement("div",{key:T},N))}if(M==="unslick"){var Lt="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:Lt},P)}else F.length<=M.slidesToShow&&(M.unslick=!0);return n.default.createElement(r.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},M),F)}}]),j}(n.default.Component);e.default=O})(Rv);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Rv);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(Lv);const Ss=Ju(Lv);const ay=G1`
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
`,XO=b.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,JO=({slides:e})=>{const t={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return h.jsxs(XO,{children:[h.jsx(ay,{}),h.jsx(Ss,{...t,children:e.map(n=>h.jsx(jv,{slide:n},n.id))})]})},{scrollColor:sy}=ge,ZO=b.div`
  position: relative;
  height: 40vw;
  overflow: hidden;

  @media (max-width: ${_}) {
    width: 95%;
    height: 120vw;
  }
`,eC=b.div`
  height: 100%;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,tC=b.div`
  position: absolute;
  top: 2.2vw;
  right: 2.75vw;
  bottom: 2.2vw;
  width: 3px;
  background-color: ${sy};

  @media (max-width: ${_}) {
    top: 6vw;
    bottom: 6vw;
    right: 3.75vw;
  }
`,nC=b.div`
  position: absolute;
  top: 2.2vw;
  right: calc(2.75vw - 4px); /* Центрируем бегунок по горизонтали */
  background-color: ${sy};
  width: 11px;
  height: 7%;
  min-height: 30px;
  border-radius: 5px;
  touch-action: none;
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  transform: ${({$translateY:e})=>`translateY(${e}px)`};

  @media (max-width: ${_}) {
    top: 6vw;
    right: calc(3.75vw - 4px);
  }
`,rC=({children:e})=>{var E,g;const t=B.useRef(null),n=B.useRef(null),r=B.useRef(null),[i,o]=B.useState(!1),a=B.useRef(0),[s,l]=B.useState(0),u=B.useCallback(p=>{p.preventDefault(),o(!0)},[]),c=B.useCallback(()=>{o(!1)},[]),d=B.useCallback(p=>{if(i&&t.current&&r.current&&n.current){const{clientHeight:m,scrollHeight:w}=t.current,{clientHeight:k}=n.current,x=w-m,O=k-r.current.clientHeight,L=(p.clientY-n.current.getBoundingClientRect().top)/O*x,j=Math.max(0,Math.min((s+L)/x,1));l(j),t.current.scrollTop=j*x}},[i,s]),f=B.useCallback(()=>{o(!0)},[]),y=B.useCallback(p=>{if(i&&t.current&&r.current&&n.current){const{clientHeight:m,scrollHeight:w}=t.current,{clientHeight:k}=n.current,x=w-m,O=k-r.current.clientHeight,L=(p.touches[0].clientY-n.current.getBoundingClientRect().top)/O*x,j=Math.max(0,Math.min((s+L)/x,1));l(j),t.current.scrollTop=j*x}},[i,s]),v=B.useCallback(()=>{o(!1)},[]);B.useEffect(()=>(i?(document.addEventListener("mousemove",d),document.addEventListener("mouseup",c),document.addEventListener("touchmove",y),document.addEventListener("touchend",v)):(document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",v)),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",v)}),[i,d,c,y,v]),B.useEffect(()=>{const p=t.current,m=()=>{if(p){const{scrollTop:w,scrollHeight:k,clientHeight:x}=p,O=k-x;a.current=w/O}};return p==null||p.addEventListener("scroll",m),()=>{p==null||p.removeEventListener("scroll",m)}},[]);const S=(p,m,w)=>p*(m-w);return h.jsxs(ZO,{children:[h.jsx(eC,{ref:t,children:e}),h.jsx(tC,{ref:n}),h.jsx(nC,{ref:r,onMouseDown:u,onTouchStart:f,$isDragging:i,$translateY:S(s,((E=n.current)==null?void 0:E.clientHeight)??0,((g=r.current)==null?void 0:g.clientHeight)??0)})]})},{darkColor:Vu}=ge,Co={title:"Video",text:"Product Description THOTH",movies:[{id:"1",title:"Video title 1",content:"Slide 1"},{id:"2",title:"Video title 2",content:"Slide 2"},{id:"3",title:"Video title 3",content:"Slide 3"},{id:"4",title:"Video title 4",content:"Slide 4"},{id:"5",title:"Video title 5",content:"Slide 5"}]},iC=b.section`
  width: 100vw;
  box-sizing: border-box;
  padding: calc(50vw / 14.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,oC=b.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${_}) {
    flex-direction: column;
  }
`,aC=b(jt)`
  width: 80%;
`,sC=b(ps)`
  margin: 1vw 0 2.57vw;
`,lC=b.div`
  width: 54%;
  height: 100%;

  @media (max-width: ${_}) {
    width: 100%;
  }
`,uC=b.div`
  border-radius: 20px;
  width: 37%;
  ${Pt};
  height: auto;
  background-image: url("images/products-and-service/video.svg");

  @media (max-width: ${_}) {
    width: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,cC=b.div``,dC=b.div`
  box-sizing: border-box;
  position: relative;
  height: 14.73vw;
  width: 28.26vw;
  margin: 2.23vw 1.23vw 4.44vw;
  background-color: gray;
  cursor: pointer;
  border-radius: 20px;

  @media (max-width: ${_}) {
    height: 44.48vw;
    width: 81.3vw;
    margin: 6vw 3vw 14vw 3vw;
  }
`,Dp=b.p`
  max-width: 100%;
  position: absolute;
  bottom: -2.5vw;
  left: 2.5vw;
  ${X};
  color: ${Vu};
  ${Z};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.5px;

  @media (max-width: ${_}) {
    font-size: calc(25vw / 5.08);
    bottom: -8vw;
  }
`,fC=b.div`
  position: relative;
  height: 37vw;
  margin: 0 1.23vw 0.79vw;
  background-color: lightblue;
  border-radius: 20px;

  > p {
    bottom: -4vw;
    font-size: calc(30vw / 14.4);
  }

  @media (max-width: ${_}) {
    height: 53.34vw;
    margin: 0 6.1vw 12vw;
    > p {
      bottom: -8vw;
      font-size: calc(25vw / 5.08);
    }
  }
`,Ap=b.div`
  margin-top: 0.79vw;
`,pC=()=>{const[e,t]=B.useState("1"),n=r=>{t(r)};return h.jsxs(iC,{children:[h.jsx(aC,{color:Vu,children:Co.title}),h.jsx(sC,{color:Vu,children:Co.text}),h.jsxs(oC,{children:[h.jsx(lC,{children:Co.movies.map(r=>e===r.id?h.jsxs(fC,{children:[h.jsx(Dp,{children:r.title}),h.jsx(Ap,{children:r.content})]},r.id):null)}),h.jsx(uC,{className:"slider-container",children:h.jsx(rC,{children:h.jsx(cC,{children:Co.movies.map(r=>h.jsxs(dC,{onClick:()=>n(r.id),style:{backgroundColor:e===r.id?"lightblue":"lightgray"},children:[h.jsx(Ap,{children:r.content}),h.jsx(Dp,{children:r.title})]},r.id))})})})]})]})},{whiteColor:Ta,greenColor:Hp}=ge,Qn={title:"Products and Services",text:"Product Description THOTH",slides:[{id:"1",mainButton:"Merchants Solution",textContent:"A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",button:"Read more",image:"images/products-and-service/merchants-solution.svg"},{id:"2",mainButton:"Enterprise Blockchain Wallets",textContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",button:"test",image:"images/products-and-service/merchants-solution.svg"},{id:"3",mainButton:"Wallet App",textContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",button:"test",image:"images/products-and-service/merchants-solution.svg"},{id:"4",mainButton:"Staking",textContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",button:"test",image:"images/test/test-photo.jpg"}]},hC=b.section`
  ${Pt};
  border-radius: 1.6vw 1.6vw 0 0;
  min-height: calc(901vw / 14.4);
  padding: 4.86vw;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("images/products-and-service/description-L.svg");

  @media (max-width: ${_}) {
    min-height: calc(970vw / 5.08);
    border-radius: 3.93vw 3.93vw 0 0;
    padding: 14.93vw 0;
    flex-direction: column;
    background-image: url("images/products-and-service/description-S.svg");
  }
`,gC=b(jt)`
  width: 80%;
`,mC=b(ps)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${_}) {
    margin: 1.77vw 0 10.61vw;
  }
`,vC=b.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,yC=b(Ke)`
  width: calc(90% / 4);
  padding-left: 2vw;
  padding-right: 2vw;
  ${os};
  border-bottom: 2px solid ${Hp};

  &:hover {
    border-bottom: 2px solid ${Hp};
  }
`,wC=b(Ke)`
  width: calc(90% / 4);
  padding-left: 2vw;
  padding-right: 2vw;
  ${os};
  border-bottom: 2px solid ${Ta};

  &:hover {
    border-bottom: 2px solid ${Ta};
  }
`,SC=()=>{const e=Kt(),[t,n]=B.useState("1"),r=a=>{n(a)},i=Qn.slides.map(a=>a.id),o=Qn.slides.find(a=>a.id===t);return h.jsxs(h.Fragment,{children:[h.jsxs(hC,{children:[h.jsx(gC,{color:Ta,children:Qn.title}),h.jsx(mC,{color:Ta,children:Qn.text}),!e&&h.jsx(vC,{children:i.map(a=>{const l=t===a?yC:wC,u=Qn.slides.find(c=>c.id===a);return u?h.jsx(l,{type:"button",onClick:()=>r(u.id),children:u.mainButton},u.id):null})}),e?h.jsx(JO,{slides:Qn.slides}):o&&h.jsx(jv,{slide:o})]}),h.jsx(zb,{}),h.jsx(Ub,{}),h.jsx(pC,{})]})},xC="/thoth/assets/arrow-left-cdb5cf81.svg",kC="/thoth/assets/arrow-right-068d5467.svg",bC=b.div`
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
  }
`,OC=b.div`
  margin: 0;
  padding: 0;
  border-radius: 20px;
  width: calc(100% - 4.58vw);
  height: 100%;

  @media (max-width: ${_}) {
    width: calc(100% - 4.72vw);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (max-width: ${_}) {
    width: calc(100% - 4.72vw);
  }
`,ly=b(Ke)`
  padding: 0;
  border: none;
  position: absolute;
  top: ${e=>e.$isPrev?"42.5%":"40%"};
  width: ${e=>e.$isPrev?"6.55vw":"8.62vw"};
  height: ${e=>e.$isPrev?"6.55vw":"8.62vw"};
  border-radius: 50%;
  background: transparent;
  z-index: 10;
  transition: background-color 0.3s;

  @media (max-width: ${_}) {
    width: ${e=>e.$isPrev?"6.39vw":"8.82vw"};
    height: ${e=>e.$isPrev?"6.39vw":"8.82vw"};
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &.prev {
    left: 7.82vw;
  }

  &.next {
    right: 1.96vw;
  }
`,uy=b.img`
  width: 100%;
  height: 100%;
`,CC=b.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  .slick-track {
    display: flex;
    align-items: flex-end;
  }
`,$C=({children:e,index:t})=>{const n=Kt(),r=parseInt(t);let i="",o="";return n?(o=r%3===0?"50vw":r%3===1?"57.28vw":"44.49vw",i=r%3===0?"58.26vw":r%3===1?"66.14vw":"52.36vw"):(o=r%3===0?"50vw":r%3===1?"55.83vw":"44.44vw",i=r%3===0?"56.91vw":r%3===1?"64.44vw":"51.11vw"),h.jsx(bC,{style:{height:o,width:i},children:e})},EC=({onClick:e})=>h.jsx(ly,{type:"button",className:"arrow next",onClick:e,children:h.jsx(uy,{src:kC,alt:"Next"})}),_C=({onClick:e})=>h.jsx(ly,{type:"button",className:"arrow prev",onClick:e,$isPrev:!0,children:h.jsx(uy,{src:xC,alt:"Next"})}),PC=({slides:e})=>{const t={className:"center",centerMode:!0,infinite:!0,slidesToShow:1,speed:1e3,nextArrow:h.jsx(EC,{}),prevArrow:h.jsx(_C,{}),variableWidth:!0,initialSlide:0};return h.jsx(CC,{children:h.jsx(Ss,{...t,children:e.map(n=>h.jsx($C,{index:n.index,children:h.jsx(OC,{children:h.jsx("img",{src:n.image,alt:n.alt})})},n.index))})})},{darkGrayColor:TC}=ge,Fp={title:"Photo",slides:[{index:"0",image:"images/test/test-photo.jpg",alt:"Slide 1"},{index:"1",image:"images/test/test-photo.jpg",alt:"Slide 1"},{index:"2",image:"images/test/test-photo.jpg",alt:"Slide 1"}]},jC=b.div`
  box-sizing: border-box;
  width: 100vw;
  padding-bottom: 4.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 74.44vw;

  @media (max-width: ${_}) {
    box-sizing: border-box;
    padding: 0;
    min-height: 91.26vw;
    justify-content: space-around;
  }
`,LC=()=>h.jsxs(jC,{children:[h.jsx(jt,{color:TC,children:Fp.title}),h.jsx(PC,{slides:Fp.slides})]}),{lightBlackColor:cy,blackColor:dy,darkGreenColor:RC,whiteColor:NC,greenColor:zC,lightGreenColor:MC}=ge,_n={title:"Fees",lineOne:{title:"Incoming Transactions",text:{main:"As low as 0.5%",span:"and going down based on your total transaction volume.",button:"Check pricing details"}},lineTwo:{title:"Outgoing Transactions",text:{main:"Free of charge"}}},IC=b.section`
  box-sizing: border-box;
  width: 100vw;
  padding: 5.2vw 10vw 6.07vw 10vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${_}) {
    padding: 12.37vw 8.25vw 16.89vw 11vw;
    margin: 0;
    box-sizing: border-box;
  }
`,Bp=b.div`
  margin-bottom: 2.5vw;
  display: grid;
  grid-template-columns: 38% 40% 20%;
  gap: 1vw;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: ${_}) {
    display: flex;
    flex-direction: column;
  }
`,Up=b.div`
  grid-column: 2 / 3;
  width: 100%;
`,DC=b.div`
  grid-column: 3 / 4;
  width: 100%;
  display: flex;
  justify-content: end;
`,AC=b(jt)`
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
  border-bottom: 2px solid ${cy};

  @media (max-width: ${_}) {
    padding-bottom: 5.09vw;
    margin: 0;
    font-size: 9.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -1px;
  }
`,Wp=b.h3`
  ${X};
  color: ${dy};
  ${Z};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;

  @media (max-width: ${_}) {
    margin: 9.82vw 0 0 0;
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
  }
`,Vp=b.p`
  ${X};
  ${Z};
  color: ${RC};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.8px;
  text-align: left;

  @media (max-width: ${_}) {
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
    margin: 5.1vw 0 3.1vw;
  }
`,HC=b.p`
  ${X};
  color: ${dy};
  ${Z};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${_}) {
    margin: 1vw 0;
    width: 80%;
    font-size: calc(20vw / 5.08);
  }
`,FC=b(Ke)`
  border-radius: 0;

  @media (max-width: ${_}) {
    margin-top: 10.8vw;
    width: 100%;
  }
`,BC=b.div`
  padding: 0.8vw 1.7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    133deg,
    ${zC} 0%,
    ${MC} 100%
  );

  @media (max-width: ${_}) {
    min-width: 33vw;
    min-height: 8.33vw;
  }
`,UC=b.span`
  margin-right: 1.29vw;
  color: ${NC};
  font-size: 1.11vw;
  ${Z};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${_}) {
    margin-right: 6.5vw;
    font-size: 3.15vw;
  }
`,WC=b.div`
  ${wt};
  width: 1.04vw;
  height: 1.18vw;
  background-image: url("images/common/play-icon.svg");

  @media (max-width: ${_}) {
    width: 3.34vw;
    height: 2.95vw;
  }
`,VC=h.jsxs(BC,{children:[h.jsx(UC,{children:_n.lineOne.text.button}),h.jsx(WC,{})]}),qp=()=>h.jsx(DC,{children:h.jsx(FC,{type:"button",children:VC,onClick:nS})}),qC=()=>{const e=Kt();return h.jsxs(IC,{children:[h.jsx(AC,{color:cy,children:_n.title}),h.jsxs(Bp,{children:[h.jsx(Wp,{children:_n.lineOne.title}),h.jsxs(Up,{children:[h.jsx(Vp,{children:_n.lineOne.text.main}),h.jsx(HC,{children:_n.lineOne.text.span})]}),!e&&h.jsx(qp,{})]}),h.jsxs(Bp,{children:[h.jsx(Wp,{children:_n.lineTwo.title}),h.jsx(Up,{children:h.jsx(Vp,{children:_n.lineTwo.text.main})}),e&&h.jsx(qp,{})]})]})},{whiteColor:KC}=ge,QC=b.h3`
  ${X};
  text-align: center;
  font-size: calc(25vw / 14.4);
  ${Z};
  font-weight: 500;
  line-height: 1.5;
  color: ${KC};

  @media (max-width: ${_}) {
    font-size: calc(25vw / 5.08);
  }
`,GC=({children:e,...t})=>h.jsx(QC,{...t,children:e}),{whiteColor:Sd}=ge,YC=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${_}) {
    width: 80vw;
    min-height: 68.17vw;
    align-items: start;
  }
`,XC=b.div`
  @media (max-width: ${_}) {
    padding: 7.18vw 0 10.26vw 5vw;
  }
`,JC=b(GC)`
  @media (max-width: ${_}) {
    width: 100%;
    box-sizing: border-box;
    padding: 9.29vw 1.38vw 5.33vw 12.84vw;
    border-bottom: 1px solid ${Sd};
  }
`,ZC=b.img`
  margin-right: 2.15vw;
  width: 2.98vw;
  height: auto;

  @media (max-width: ${_}) {
    width: 12.45vw;
    margin-right: 3.93vw;
  }
`,e$=b.h4`
  ${X};
  text-align: left;
  font-size: calc(22vw / 14.4);
  ${Z};
  font-weight: 500;
  line-height: 1.5;
  color: ${Sd};

  @media (max-width: ${_}) {
    font-size: calc(22vw / 5.08);
  }
`,t$=b.p`
  ${X};
  ${Z};
  color: ${Sd};
  font-size: calc(20vw / 14.05);
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${_}) {
    font-size: calc(20vw / 5.08);
  }
`,n$=b.div`
  display: flex;
  flex-direction: row;
  padding-bottom: calc(14vw / 14.4);

  @media (max-width: ${_}) {
    padding-bottom: calc(24vw / 5.08);
  }
`,fy=({button:e,image:t,title:n,text:r})=>h.jsxs(YC,{children:[e&&h.jsx(JC,{children:e}),h.jsxs(XC,{children:[h.jsxs(n$,{children:[h.jsx(ZC,{src:t,alt:n}),h.jsx(e$,{children:n})]}),h.jsx(t$,{children:r})]})]}),r$="/thoth/assets/slider-bitton-a733b85e.svg",i$=b(Ke)`
  padding: 0;
  border: none;
  position: absolute;
  top: 12.5%;
  right: 5%;
  width: 9.8vw;
  height: 9.8vw;
  border-radius: 50%;
  background: transparent;
  z-index: 10;
  transition: background-color 0.3s;

  @media (max-width: 1400px) {
    width: ${e=>e.isPrev?"6.39vw":"8.82vw"};
    height: ${e=>e.isPrev?"6.39vw":"8.82vw"};
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`,o$=b.img`
  width: 100%;
  height: 100%;
`,a$=b.div`
  height: 100%;
  background-image: url("images/use-cases-of-our-products/slide-S.svg");
  background-repeat: no-repeat;
  background-size: cover;
`,s$=({onClick:e})=>h.jsx(i$,{type:"button",className:"arrow next",onClick:e,children:h.jsx(o$,{src:r$,alt:"Next"})}),l$=({slides:e})=>{const t={dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,swipe:!1,variableWidth:!0,centerMode:!1,prevArrow:h.jsx(h.Fragment,{}),nextArrow:h.jsx(s$,{})},r=Object.keys(e).flatMap(i=>e[i].content.map(o=>({button:e[i].button,image:o.image,title:o.title,text:o.text})));return h.jsx(a$,{children:h.jsx(Ss,{...t,children:r.map((i,o)=>h.jsx(fy,{button:i.button,image:i.image,title:i.title,text:i.text},o))})})},{whiteColor:Nn,greenColor:u$}=ge,c$=b.div`
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  margin-bottom: ${({size:e})=>e==="big"?"calc(42vw / 14.4)":"calc(50vw / 14.4)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 2px solid ${Nn};

  &:nth-child(2n) {
    border-bottom: ${({size:e})=>e==="big"?"none":`2px solid ${Nn}`};
  }

  @media (max-width: ${_}) {
    margin-bottom: calc(49vw / 5.08);
    border-bottom: ${({size:e})=>e==="small"?"none":`2px solid ${Nn}`};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
    margin-left: ${({size:e})=>e==="small"?"8.46vw":"0"};

    &:nth-child(2n) {
      border-bottom: ${({size:e})=>e==="big"?`2px solid ${Nn}`:"none"};
    }
  }
`,d$=b.div`
  margin: ${({size:e})=>e==="big"?"2vw 0 0.71vw":"1vw 0 1vw"};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  @media (max-width: ${_}) {
    margin: ${({size:e})=>e==="big"?"calc(45vw / 5.09) 0 calc(12vw / 5.09)":"calc(12vw / 5.09) 0 calc(12vw / 5.09)"};
  }
`,py=b.p`
  ${X};
  ${Z};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${_}) {
    font-size: calc(25vw / 5.09);
  }
`,f$=b(py)`
  padding-right: 3vw;
  color: ${u$};
`,p$=b(py)`
  color: ${Nn};
`,h$=b.h3`
  margin-bottom: calc(6.58vw / 14.4);
  ${X};
  ${Z};
  color: ${Nn};
  font-size: ${({size:e})=>e==="big"?"calc(35vw / 14.4)":"calc(28vw / 14.4)"};
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.7px;
  text-align: left;

  @media (max-width: ${_}) {
    margin-bottom: 0;
    font-size: ${({size:e})=>e==="big"?"calc(30vw / 5.09)":"calc(23vw / 5.09)"};
    letter-spacing: -0.6px;
  }
`,g$=b.p`
  ${X};
  ${Z};
  margin: 0.21vw 0 3.26vw;
  font-size: calc(25vw / 14.4);
  color: ${Nn};
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;
  align-self: start;

  @media (max-width: ${_}) {
    margin: 3vw 0 9.84vw;
    font-size: calc(25vw / 5.09);
  }
`,m$=b.img`
  height: ${({size:e})=>e==="big"?"calc(268vw / 14.4)":"calc(154vw / 14.4)"};
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${_}) {
    height: ${({size:e})=>e==="big"?"calc(184vw / 5.08)":"calc(148vw / 5.08)"};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
  }
`,qu=({slide:e,size:t})=>h.jsxs(c$,{size:t,children:[h.jsx(m$,{size:t,src:e.image,alt:e.alt}),h.jsxs(d$,{size:t,children:[h.jsx(f$,{children:e.span}),h.jsx(p$,{children:e.date})]}),h.jsx(h$,{size:t,children:e.title}),t==="big"&&h.jsx(g$,{size:t,children:e.text})]}),v$=b.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,y$=({slides:e,size:t})=>{const n={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return h.jsxs(v$,{children:[h.jsx(ay,{}),h.jsx(Ss,{...n,children:e.map(r=>h.jsx(qu,{slide:r,size:t},r.id))})]})},{whiteColor:w$,greenColor:S$}=ge,vl={title:"News",button:"Read more",slides:[{id:"1",span:"Corporate News",date:"20.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"images/test/test-photo.jpg",alt:"Image"},{id:"2",span:"Corporate News",date:"21.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"images/test/test-photo.jpg",alt:"Image"},{id:"3",span:"Corporate News",date:"22.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"images/test/test-photo.jpg",alt:"Image"},{id:"4",span:"Corporate News",date:"23.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"images/test/test-photo.jpg",alt:"Image"},{id:"5",span:"Corporate News",date:"24.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"images/test/test-photo.jpg",alt:"Image"}]},x$=b.div`
  box-sizing: border-box;
  width: 100vw;
  padding-bottom: 5vw;
  min-height: calc(1317vw / 14.4);
  background-image: url("images/news/news-L.svg");
  ${Pt};
  border-radius: 1.6vw;

  @media (max-width: ${_}) {
    padding-bottom: 10vw;
    background-image: url("images/news/news-S.svg");
    min-height: calc(1441vw / 5.08);
    border-radius: 3.93vw;
  }
`,k$=b.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${_}) {
    flex-direction: column;
  }
`,b$=b.div`
  padding: 5.06vw 3.92vw;
  display: flex;
  flex-direction: row;
  align-items: end;

  @media (max-width: ${_}) {
    padding: 14vw 3.56vw 7.34vw;
  }
`,O$=b(Ke)`
  margin-left: 3.54vw;
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${S$};
  font-size: 1.74vw;
  ${Z};
  font-style: normal;
  font-weight: 400;
  line-height: 2.2;
  letter-spacing: -0.5px;

  @media (max-width: ${_}) {
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
    background-image: url("images/products-and-service/play.svg");
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 60%;
    transform: translateY(-60%);

    @media (max-width: ${_}) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`,C$=b.div`
  width: calc(696vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${_}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`,$$=b.div`
  width: calc(414vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${_}) {
    width: 100%;
  }
`,E$=()=>{const e=Kt(),t=vl.slides,n=t.slice(0,2),r=t.slice(2,5);return h.jsxs(x$,{children:[h.jsxs(b$,{children:[h.jsx(jt,{color:w$,children:vl.title}),h.jsx(O$,{type:"button",onClick:rS,children:vl.button})]}),h.jsxs(k$,{children:[h.jsx(C$,{children:n.map(i=>h.jsx(qu,{slide:i,size:"big"},i.id))}),e?h.jsx(y$,{slides:r,size:"small"}):h.jsx($$,{children:r.map(i=>h.jsx(qu,{slide:i,size:"small"},i.id))})]})]})},{deepColor:Pn,darkGreenColor:Ku}=ge,Zt={title:"Have a question?",text:"Explore our solutions or you can contact us throughticket system and contact form. Feel free to get in touch..",existing:{title:"For existing clients",text:"If you already have an account please use our ticket system.",linkName:"Get 24\\7 Support"},new:{title:"For new clients or partners",text:"Please leave your inquiry and our Buisness Development Team will contact you shortly.",linkName:"Contact BD Team"}},_$=b.section`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 10.9vw 3.54vw;

  @media (max-width: ${_}) {
    flex-direction: column;
    padding: 12vw 8.01vw 19.1vw;
  }
`,P$=b(jt)`
  padding: 3.13vw 0 1.8vw;
  align-self: start;
  text-align: left;

  @media (max-width: ${_}) {
    flex-direction: column;
    padding: 0 0 7.28vw;
  }
`,yl=b.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 31.94vw;

  @media (max-width: ${_}) {
    min-width: 100%;
  }
`,Kp=b.div`
  min-height: 25.69vw;
  display: flex;
  flex-direction: column;
  max-width: 31.94vw;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${_}) {
    min-width: 100%;
  }
`,wl=b.p`
  width: 25vw;
  ${X};
  font-size: calc(25vw / 14.4);
  ${Z};
  color: ${Pn};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;
  @media (max-width: ${_}) {
    width: 100%;
    padding: 2.56vw 0 5.5vw;
  }

  &:first-child,
  &.custom-first {
    width: 30.76vw;
    @media (max-width: ${_}) {
      width: 100%;
    }
  }

  @media (max-width: ${_}) {
    font-size: calc(25vw / 5.08);
  }
`,Qp=b.img`
  width: auto;
  height: calc(58vw / 14.4);
  @media (max-width: ${_}) {
    height: calc(58vw / 5.08);
    margin: 12vw 0 4.92vw;
  }
`,Gp=b.h3`
  ${X};
  padding: 1.39vw 0 0.1vw 0;
  ${Z};
  color: ${Pn};
  font-size: calc(30vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-align: left;

  @media (max-width: ${_}) {
    font-size: calc(30vw / 5.08);
  }
`,Yp=b(vr)`
  color: ${Ku};
  ${X};
  ${Z};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-decoration-line: underline;

  @media (max-width: ${_}) {
    font-size: calc(25vw / 5.08);
  }
`,T$=()=>h.jsxs(_$,{children:[h.jsxs(yl,{children:[h.jsx(P$,{color:Pn,children:Zt.title}),h.jsx(wl,{className:"custom-first",children:Zt.text})]}),h.jsxs(Kp,{children:[h.jsxs(yl,{children:[h.jsx(Qp,{src:"images/use-cases-of-our-products/existing-client.svg",alt:"existing client"}),h.jsx(Gp,{color:Pn,children:Zt.existing.title}),h.jsx(wl,{color:Pn,children:Zt.existing.text})]}),h.jsx(Yp,{href:"example.com",target:"_blank",rel:"noopener noreferrer",color:Ku,children:Zt.existing.linkName})]}),h.jsxs(Kp,{children:[h.jsxs(yl,{children:[h.jsx(Qp,{src:"images/use-cases-of-our-products/new-client.svg",alt:"new client"}),h.jsx(Gp,{color:Pn,children:Zt.new.title}),h.jsx(wl,{color:Pn,children:Zt.new.text})]}),h.jsx(Yp,{href:"example.com",target:"_blank",rel:"noopener noreferrer",color:Ku,children:Zt.new.linkName})]})]}),{greenColor:Xp,whiteColor:ja}=ge,ri={One:{button:"Merchants Solution",content:[{image:"images/use-cases-of-our-products/merchantsSolutionOne.svg",title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."},{image:"images/use-cases-of-our-products/merchantsSolutionTwo.svg",title:"E-commerce",text:"The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments."},{image:"images/use-cases-of-our-products/merchantsSolutionThree.svg",title:"Marketplaces",text:"There are many platforms used by businesses to sell their products or services. Offering crypto payments to customers is now the advantage."},{image:"images/use-cases-of-our-products/merchantsSolutionFour.svg",title:"Travel Industry",text:"The travel industry is a growing sector. With increasing bookings now made online, it makes financial sense to accept crypto payments."},{image:"images/use-cases-of-our-products/merchantsSolutionFive.svg",title:"Gambling",text:"The global online gambling industry is worth billions of dollars. Crypto payments are part for the course."},{image:"images/use-cases-of-our-products/merchantsSolutionSix.svg",title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."}]},Two:{button:"Enterprise Solution",content:[{image:"images/use-cases-of-our-products/merchantsSolutionOne.svg",title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."}]},Three:{button:"White Label",content:[{image:"images/use-cases-of-our-products/merchantsSolutionTwo.svg",title:"E-commerce",text:"The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments."}]}},Jp={title:"Use Cases of Our Products",text:"Product Description THOTH",slides:ri},j$=b.section`
  box-sizing: border-box;
  width: 100vw;
  min-height: calc(1015vw / 14.4);
  padding: 4.86vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("images/use-cases-of-our-products/background-L.svg");
  ${Pt};
  border-radius: 1.6vw;

  @media (max-width: ${_}) {
    padding: 14.17vw 0 12.4vw 0;
    box-sizing: border-box;
    min-height: 138.78vw;
    justify-content: space-between;
    flex-direction: column;
    background-image: url("images/use-cases-of-our-products/background-S.svg");
    border-radius: 3.93vw;
  }
`,L$=b.div`
  width: 100%;
`,R$=b(ps)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${_}) {
    margin: 1.76vw 0 0;
  }
`,N$=b.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,z$=b.div`
  margin-top: 2.57vw;
  padding: 4.93vw 6.25vw;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vw;
  width: 88.47vw;
  min-height: 37.15vw;
  ${ed};
  background-image: url("images/use-cases-of-our-products/slide-L.svg");
  border-radius: 30px;

  @media (max-width: ${_}) {
    display: block;
    padding: 0;
    background-image: none;
  }
`,M$=b(Ke)`
  width: calc(100% / 3);
  ${os};
  border-bottom: 2px solid ${Xp};

  &:hover {
    border-bottom: 2px solid ${Xp};
  }
`,I$=b(Ke)`
  width: calc(100% / 3);
  ${os};
  border-bottom: 2px solid ${ja};

  &:hover {
    border-bottom: 2px solid ${ja};
  }
`,D$=()=>{const e=Kt(),[t,n]=B.useState("One");B.useEffect(()=>{n("One")},[]);const r=o=>{n(o)},i=Object.keys(ri);return h.jsxs(h.Fragment,{children:[h.jsxs(j$,{children:[h.jsxs(L$,{children:[h.jsx(jt,{color:ja,children:Jp.title}),h.jsx(R$,{color:ja,children:Jp.text}),!e&&h.jsx(N$,{children:i.map(o=>{const s=t===o?M$:I$;return h.jsx(s,{type:"button",onClick:()=>r(o),children:ri[o].button},o)})})]}),h.jsx(z$,{children:e?h.jsx(l$,{slides:ri}):ri[t].content.map((o,a)=>h.jsx(fy,{image:o.image,title:o.title,text:o.text},a))})]}),h.jsx(qC,{}),h.jsx(E$,{}),h.jsx(T$,{})]})},{whiteColor:sn,deepGrayColor:A$}=ge,nt={text:"Our vision is to provide convenience and help increase your sales business.",nav:{about:{title:"About",links:[{name:"How it works",href:"https://example.com/how-it-works"},{name:"Featured",href:"https://example.com/featured"},{name:"Partnership",href:"https://example.com/partnership"},{name:"Business Relation",href:"https://example.com/business-relation"}]},community:{title:"Community",links:[{name:"Events",href:"https://example.com/events"},{name:"Blog",href:"https://example.com/blog"},{name:"Podcast",href:"https://example.com/podcast"},{name:"Invite a friend",href:"https://example.com/invite-friend"}]},socials:{title:"Socials",links:[{name:"Discord",href:"https://example.com/discord"},{name:"Instagram",href:"https://example.com/instagram"},{name:"Twitter",href:"https://example.com/twitter"},{name:"Facebook",href:"https://example.com/facebook"}]}},rights:"Auto Fast. All rights reserved",policy:{name:"Privacy & Policy",href:"https://example.com/privacy-policy"},condition:{name:"Terms & Condition",href:"https://example.com/terms-condition"}},H$=b.footer`
  padding: 5.55vw 10vw 4.17vw 4.17vw;
  background-color: ${A$};


  @media (max-width: ${_}) {
    padding: 5.55vw 0 4.17vw 0;
  }
`,F$=b.div`
  margin-bottom: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${_}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,B$=b.div`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  justify-content: space-between;

  @media (max-width: ${_}) {
    flex-direction: column;
    align-items: center;
  }
`,U$=b.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${_}) {
    padding-bottom: 4vw;
    flex-direction: column;
  }
`,W$=b(iv)`
  @media (max-width: ${_}) {
    width: 43.5vw;
    height: 10.24vw;
  }
`,$o=b.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: ${_}) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 5vw;
  }
`,Sl=b.h4`
  ${X};
  margin-bottom: 0.7vw;
  color: ${sn};
  ${Ir};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${_}) {
    text-align: center;
    font-size: calc(20vw / 5.08);
    font-weight: bold;
    line-height: 2;
  }
`,xl=b.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,kl=b.li`
  ${X};
  margin-bottom: 0.34vw;
  color: ${sn};
  ${Ir};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;

  @media (max-width: ${_}) {
    text-align: center;
    font-size: calc(20vw / 5.08);
  }
`,Zp=b.p`
  ${X};
  margin: 2.54vw 0 2.09vw;
  color: ${sn};
  ${Ir};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;
  width: calc(274vw / 14.4);

  @media (max-width: ${_}) {
    margin: 8.01vw 0 10.82vw;
    text-align: center;
    font-size: calc(16vw / 5.08);
    width: calc(355vw / 5.08);
  }
`,eh=b(vr)`
  margin-left: 4.2vw;

  @media (max-width: ${_}) {
    margin: 0;
  }
`;function V$(){const e=new Date().getFullYear();return h.jsxs(H$,{children:[h.jsxs(F$,{children:[h.jsxs($o,{children:[h.jsx(W$,{color:"transparent"}),h.jsx(Zp,{children:nt.text}),h.jsx(ov,{type:"dark"})]}),h.jsxs($o,{children:[h.jsx(Sl,{children:nt.nav.about.title}),h.jsx(xl,{children:nt.nav.about.links.map(t=>h.jsx(kl,{children:h.jsx(vr,{color:sn,href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.name})},t.name))})]}),h.jsxs($o,{children:[h.jsx(Sl,{children:nt.nav.community.title}),h.jsx(xl,{children:nt.nav.community.links.map(t=>h.jsx(kl,{children:h.jsx(vr,{color:sn,href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.name})},t.name))})]}),h.jsxs($o,{children:[h.jsx(Sl,{children:nt.nav.socials.title}),h.jsx(xl,{children:nt.nav.socials.links.map(t=>h.jsx(kl,{children:h.jsx(vr,{color:sn,href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.name})},t.name))})]})]}),h.jsxs(B$,{children:[h.jsxs(Zp,{children:["©",e,nt.rights]}),h.jsxs(U$,{children:[h.jsx(eh,{color:sn,href:nt.policy.href,target:"_blank",rel:"noopener noreferrer",children:nt.policy.name}),h.jsx(eh,{color:sn,href:nt.condition.href,target:"_blank",rel:"noopener noreferrer",children:nt.condition.name})]})]})]})}const q$=()=>{const{i18n:e}=nv(),t=n=>{e.changeLanguage(n.target.value)};return h.jsxs("select",{value:e.language,onChange:t,children:[h.jsx("option",{value:"en",children:"English"}),h.jsx("option",{value:"ru",children:"Русский"}),h.jsx("option",{value:"fr",children:"Français"})]})},K$={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class La{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||K$,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new La(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new La(this.logger,t)}}var $t=new La;class xs{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[t]&&[].concat(this.observers[t]).forEach(a=>{a(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(a=>{a.apply(a,[t,...r])})}}function Yr(){let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n}function th(e){return e==null?"":""+e}function Q$(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function xd(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function i(){return!e||typeof e=="string"}const o=typeof t!="string"?[].concat(t):t.split(".");for(;o.length>1;){if(i())return{};const a=r(o.shift());!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return i()?{}:{obj:e,k:r(o.shift())}}function nh(e,t,n){const{obj:r,k:i}=xd(e,t,Object);r[i]=n}function G$(e,t,n,r){const{obj:i,k:o}=xd(e,t,Object);i[o]=i[o]||[],r&&(i[o]=i[o].concat(n)),r||i[o].push(n)}function Ra(e,t){const{obj:n,k:r}=xd(e,t);if(n)return n[r]}function Y$(e,t,n){const r=Ra(e,n);return r!==void 0?r:Ra(t,n)}function hy(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):hy(e[r],t[r],n):e[r]=t[r]);return e}function Gn(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var X$={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function J$(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>X$[t]):e}const Z$=[" ",",","?","!",";"];function eE(e,t,n){t=t||"",n=n||"";const r=Z$.filter(a=>t.indexOf(a)<0&&n.indexOf(a)<0);if(r.length===0)return!0;const i=new RegExp(`(${r.map(a=>a==="?"?"\\?":a).join("|")})`);let o=!i.test(e);if(!o){const a=e.indexOf(n);a>0&&!i.test(e.substring(0,a))&&(o=!0)}return o}function Na(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let i=e;for(let o=0;o<r.length;++o){if(!i||typeof i[r[o]]=="string"&&o+1<r.length)return;if(i[r[o]]===void 0){let a=2,s=r.slice(o,o+a).join(n),l=i[s];for(;l===void 0&&r.length>o+a;)a++,s=r.slice(o,o+a).join(n),l=i[s];if(l===void 0)return;if(l===null)return null;if(t.endsWith(s)){if(typeof l=="string")return l;if(s&&typeof l[s]=="string")return l[s]}const u=r.slice(o+a).join(n);return u?Na(l,u,n):void 0}i=i[r[o]]}return i}function za(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class rh extends xs{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,a=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let s=[t,n];r&&typeof r!="string"&&(s=s.concat(r)),r&&typeof r=="string"&&(s=s.concat(o?r.split(o):r)),t.indexOf(".")>-1&&(s=t.split("."));const l=Ra(this.data,s);return l||!a||typeof r!="string"?l:Na(this.data&&this.data[t]&&this.data[t][n],r,o)}addResource(t,n,r,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let s=[t,n];r&&(s=s.concat(a?r.split(a):r)),t.indexOf(".")>-1&&(s=t.split("."),i=n,n=s[1]),this.addNamespaces(n),nh(this.data,s,i),o.silent||this.emit("added",t,n,r,i)}addResources(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in r)(typeof r[o]=="string"||Object.prototype.toString.apply(r[o])==="[object Array]")&&this.addResource(t,n,o,r[o],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},s=[t,n];t.indexOf(".")>-1&&(s=t.split("."),i=r,r=n,n=s[1]),this.addNamespaces(n);let l=Ra(this.data,s)||{};i?hy(l,r,o):l={...l,...r},nh(this.data,s,l),a.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var gy={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(o=>{this.processors[o]&&(t=this.processors[o].process(t,n,r,i))}),t}};const ih={};class Ma extends xs{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Q$(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=$t.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const a=r&&t.indexOf(r)>-1,s=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!eE(t,r,i);if(a&&!s){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:o};const u=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(u[0])>-1)&&(o=u.shift()),t=u.join(i)}return typeof o=="string"&&(o=[o]),{key:t,namespaces:o}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:a,namespaces:s}=this.extractFromKey(t[t.length-1],n),l=s[s.length-1],u=n.lng||this.language,c=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(c){const w=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${w}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l}:`${l}${w}${a}`}return i?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l}:a}const d=this.resolve(t,n);let f=d&&d.res;const y=d&&d.usedKey||a,v=d&&d.exactUsedKey||a,S=Object.prototype.toString.apply(f),E=["[object Number]","[object Function]","[object RegExp]"],g=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,p=!this.i18nFormat||this.i18nFormat.handleAsObject;if(p&&f&&(typeof f!="string"&&typeof f!="boolean"&&typeof f!="number")&&E.indexOf(S)<0&&!(typeof g=="string"&&S==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(y,f,{...n,ns:s}):`key '${a} (${this.language})' returned an object instead of string.`;return i?(d.res=w,d):w}if(o){const w=S==="[object Array]",k=w?[]:{},x=w?v:y;for(const O in f)if(Object.prototype.hasOwnProperty.call(f,O)){const $=`${x}${o}${O}`;k[O]=this.translate($,{...n,joinArrays:!1,ns:s}),k[O]===$&&(k[O]=f[O])}f=k}}else if(p&&typeof g=="string"&&S==="[object Array]")f=f.join(g),f&&(f=this.extendTranslation(f,t,n,r));else{let w=!1,k=!1;const x=n.count!==void 0&&typeof n.count!="string",O=Ma.hasDefaultValue(n),$=x?this.pluralResolver.getSuffix(u,n.count,n):"",L=n.ordinal&&x?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",j=n[`defaultValue${$}`]||n[`defaultValue${L}`]||n.defaultValue;!this.isValidLookup(f)&&O&&(w=!0,f=j),this.isValidLookup(f)||(k=!0,f=a);const A=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&k?void 0:f,M=O&&j!==f&&this.options.updateMissing;if(k||w||M){if(this.logger.log(M?"updateKey":"missingKey",u,l,a,M?j:f),o){const W=this.resolve(a,{...n,keySeparator:!1});W&&W.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let C=[];const P=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&P&&P[0])for(let W=0;W<P.length;W++)C.push(P[W]);else this.options.saveMissingTo==="all"?C=this.languageUtils.toResolveHierarchy(n.lng||this.language):C.push(n.lng||this.language);const F=(W,T,N)=>{const H=O&&N!==f?N:A;this.options.missingKeyHandler?this.options.missingKeyHandler(W,l,T,H,M,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(W,l,T,H,M,n),this.emit("missingKey",W,l,T,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&x?C.forEach(W=>{this.pluralResolver.getSuffixes(W,n).forEach(T=>{F([W],a+T,n[`defaultValue${T}`]||j)})}):F(C,a,j))}f=this.extendTranslation(f,t,n,d,r),k&&f===a&&this.options.appendNamespaceToMissingKey&&(f=`${l}:${a}`),(k||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,w?f:void 0):f=this.options.parseMissingKeyHandler(f))}return i?(d.res=f,d):f}extendTranslation(t,n,r,i,o){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(u){const f=t.match(this.interpolator.nestingRegexp);c=f&&f.length}let d=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,r.lng||this.language,r),u){const f=t.match(this.interpolator.nestingRegexp),y=f&&f.length;c<y&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var f=arguments.length,y=new Array(f),v=0;v<f;v++)y[v]=arguments[v];return o&&o[0]===y[0]&&!r.context?(a.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`),null):a.translate(...y,n)},r)),r.interpolation&&this.interpolator.reset()}const s=r.postProcess||this.options.postProcess,l=typeof s=="string"?[s]:s;return t!=null&&l&&l.length&&r.applyPostProcessor!==!1&&(t=gy.handle(l,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:i,...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,o,a,s;return typeof t=="string"&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(l,n),c=u.key;i=c;let d=u.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const f=n.count!==void 0&&typeof n.count!="string",y=f&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),v=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",S=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach(E=>{this.isValidLookup(r)||(s=E,!ih[`${S[0]}-${E}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&(ih[`${S[0]}-${E}`]=!0,this.logger.warn(`key "${i}" for languages "${S.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),S.forEach(g=>{if(this.isValidLookup(r))return;a=g;const p=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(p,c,g,E,n);else{let w;f&&(w=this.pluralResolver.getSuffix(g,n.count,n));const k=`${this.options.pluralSeparator}zero`,x=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(p.push(c+w),n.ordinal&&w.indexOf(x)===0&&p.push(c+w.replace(x,this.options.pluralSeparator)),y&&p.push(c+k)),v){const O=`${c}${this.options.contextSeparator}${n.context}`;p.push(O),f&&(p.push(O+w),n.ordinal&&w.indexOf(x)===0&&p.push(O+w.replace(x,this.options.pluralSeparator)),y&&p.push(O+k))}}let m;for(;m=p.pop();)this.isValidLookup(r)||(o=m,r=this.getResource(g,E,m,n))}))})}),{res:r,usedKey:i,exactUsedKey:o,usedLng:a,usedNS:s}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function bl(e){return e.charAt(0).toUpperCase()+e.slice(1)}class oh{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=$t.create("languageUtils")}getScriptPartFromCode(t){if(t=za(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=za(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=bl(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=bl(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=bl(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&o.indexOf(i)===0)return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],o=a=>{a&&(this.isSupportedCode(a)?i.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):typeof t=="string"&&o(this.formatLanguageCode(t)),r.forEach(a=>{i.indexOf(a)<0&&o(this.formatLanguageCode(a))}),i}}let tE=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],nE={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}};const rE=["v1","v2","v3"],iE=["v4"],ah={zero:0,one:1,two:2,few:3,many:4,other:5};function oE(){const e={};return tE.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:nE[t.fc]}})}),e}class aE{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=$t.create("pluralResolver"),(!this.options.compatibilityJSON||iE.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=oE()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(za(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,o)=>ah[i]-ah[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?o():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!rE.includes(this.options.compatibilityJSON)}}function sh(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=Y$(e,t,n);return!o&&i&&typeof n=="string"&&(o=Na(e,n,r),o===void 0&&(o=Na(t,n,r))),o}class sE{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=$t.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:J$,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?Gn(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?Gn(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?Gn(n.nestingPrefix):n.nestingPrefixEscaped||Gn("$t("),this.nestingSuffix=n.nestingSuffix?Gn(n.nestingSuffix):n.nestingSuffixEscaped||Gn(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,i){let o,a,s;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(v){return v.replace(/\$/g,"$$$$")}const c=v=>{if(v.indexOf(this.formatSeparator)<0){const p=sh(n,l,v,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(p,void 0,r,{...i,...n,interpolationkey:v}):p}const S=v.split(this.formatSeparator),E=S.shift().trim(),g=S.join(this.formatSeparator).trim();return this.format(sh(n,l,E,this.options.keySeparator,this.options.ignoreJSONStructure),g,r,{...i,...n,interpolationkey:E})};this.resetRegExp();const d=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,f=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:v=>u(v)},{regex:this.regexp,safeValue:v=>this.escapeValue?u(this.escape(v)):u(v)}].forEach(v=>{for(s=0;o=v.regex.exec(t);){const S=o[1].trim();if(a=c(S),a===void 0)if(typeof d=="function"){const g=d(t,o,i);a=typeof g=="string"?g:""}else if(i&&Object.prototype.hasOwnProperty.call(i,S))a="";else if(f){a=o[0];continue}else this.logger.warn(`missed to pass in variable ${S} for interpolating ${t}`),a="";else typeof a!="string"&&!this.useRawValueToEscape&&(a=th(a));const E=v.safeValue(a);if(t=t.replace(o[0],E),f?(v.regex.lastIndex+=a.length,v.regex.lastIndex-=o[0].length):v.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,a;function s(l,u){const c=this.nestingOptionsSeparator;if(l.indexOf(c)<0)return l;const d=l.split(new RegExp(`${c}[ ]*{`));let f=`{${d[1]}`;l=d[0],f=this.interpolate(f,a);const y=f.match(/'/g),v=f.match(/"/g);(y&&y.length%2===0&&!v||v.length%2!==0)&&(f=f.replace(/'/g,'"'));try{a=JSON.parse(f),u&&(a={...u,...a})}catch(S){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,S),`${l}${c}${f}`}return delete a.defaultValue,l}for(;i=this.nestingRegexp.exec(t);){let l=[];a={...r},a=a.replace&&typeof a.replace!="string"?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let u=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const c=i[1].split(this.formatSeparator).map(d=>d.trim());i[1]=c.shift(),l=c,u=!0}if(o=n(s.call(this,i[1].trim(),a),a),o&&i[0]===t&&typeof o!="string")return o;typeof o!="string"&&(o=th(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),u&&(o=l.reduce((c,d)=>this.format(c,d,r.lng,{...r,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}function lE(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(a=>{if(!a)return;const[s,...l]=a.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,"");n[s.trim()]||(n[s.trim()]=u),u==="false"&&(n[s.trim()]=!1),u==="true"&&(n[s.trim()]=!0),isNaN(u)||(n[s.trim()]=parseInt(u,10))})}return{formatName:t,formatOptions:n}}function Yn(e){const t={};return function(r,i,o){const a=i+JSON.stringify(o);let s=t[a];return s||(s=e(za(i),o),t[a]=s),s(r)}}class uE{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=$t.create("formatter"),this.options=t,this.formats={number:Yn((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return o=>i.format(o)}),currency:Yn((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return o=>i.format(o)}),datetime:Yn((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return o=>i.format(o)}),relativetime:Yn((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return o=>i.format(o,r.range||"day")}),list:Yn((n,r)=>{const i=new Intl.ListFormat(n,{...r});return o=>i.format(o)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=Yn(n)}format(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((s,l)=>{const{formatName:u,formatOptions:c}=lE(l);if(this.formats[u]){let d=s;try{const f=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},y=f.locale||f.lng||i.locale||i.lng||r;d=this.formats[u](s,y,{...c,...i,...f})}catch(f){this.logger.warn(f)}return d}else this.logger.warn(`there was no format function for ${u}`);return s},t)}}function cE(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class dE extends xs{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=$t.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(t,n,r,i){const o={},a={},s={},l={};return t.forEach(u=>{let c=!0;n.forEach(d=>{const f=`${u}|${d}`;!r.reload&&this.store.hasResourceBundle(u,d)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?a[f]===void 0&&(a[f]=!0):(this.state[f]=1,c=!1,a[f]===void 0&&(a[f]=!0),o[f]===void 0&&(o[f]=!0),l[d]===void 0&&(l[d]=!0)))}),c||(s[u]=!0)}),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(l)}}loaded(t,n,r){const i=t.split("|"),o=i[0],a=i[1];n&&this.emit("failedLoading",o,a,n),r&&this.store.addResourceBundle(o,a,r),this.state[t]=n?-1:2;const s={};this.queue.forEach(l=>{G$(l.loaded,[o],a),cE(l,t),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{s[u]||(s[u]={});const c=l.loaded[u];c.length&&c.forEach(d=>{s[u][d]===void 0&&(s[u][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(l=>!l.done)}read(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:o,callback:a});return}this.readingCalls++;const s=(u,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(u&&c&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,o*2,a)},o);return}a(u,c)},l=this.backend[r].bind(this.backend);if(l.length===2){try{const u=l(t,n);u&&typeof u.then=="function"?u.then(c=>s(null,c)).catch(s):s(null,u)}catch(u){s(u)}return}return l(t,n,s)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const o=this.queueLoad(t,n,r,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(a=>{this.loadOne(a)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),i=r[0],o=r[1];this.read(i,o,"read",void 0,void 0,(a,s)=>{a&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,a),!a&&s&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,s),this.loaded(t,a,s)})}saveMissing(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const l={...a,isUpdate:o},u=this.backend.create.bind(this.backend);if(u.length<6)try{let c;u.length===5?c=u(t,n,r,i,l):c=u(t,n,r,i),c&&typeof c.then=="function"?c.then(d=>s(null,d)).catch(s):s(null,c)}catch(c){s(c)}else u(t,n,r,i,s,l)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}function lh(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(i=>{n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function uh(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Eo(){}function fE(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class Mi extends xs{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=uh(t),this.services={},this.logger=$t,this.modules={external:[]},fE(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=lh();this.options={...i,...this.options,...uh(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function o(c){return c?typeof c=="function"?new c:c:null}if(!this.options.isClone){this.modules.logger?$t.init(o(this.modules.logger),this.options):$t.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=uE);const d=new oh(this.options);this.store=new rh(this.options.resources,this.options);const f=this.services;f.logger=$t,f.resourceStore=this.store,f.languageUtils=d,f.pluralResolver=new aE(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(f.formatter=o(c),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new sE(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new dE(o(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(y){for(var v=arguments.length,S=new Array(v>1?v-1:0),E=1;E<v;E++)S[E-1]=arguments[E];t.emit(y,...S)}),this.modules.languageDetector&&(f.languageDetector=o(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=o(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new Ma(this.services,this.options),this.translator.on("*",function(y){for(var v=arguments.length,S=new Array(v>1?v-1:0),E=1;E<v;E++)S[E-1]=arguments[E];t.emit(y,...S)}),this.modules.external.forEach(y=>{y.init&&y.init(this)})}if(this.format=this.options.interpolation.format,r||(r=Eo),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return t.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return t.store[c](...arguments),t}});const l=Yr(),u=()=>{const c=(d,f)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(f),r(d,f)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),l}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Eo;const i=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode")return r();const o=[],a=s=>{if(!s)return;this.services.languageUtils.toResolveHierarchy(s).forEach(u=>{o.indexOf(u)<0&&o.push(u)})};i?a(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>a(l)),this.options.preload&&this.options.preload.forEach(s=>a(s)),this.services.backendConnector.load(o,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(s)})}else r(null)}reloadResources(t,n,r){const i=Yr();return t||(t=this.languages),n||(n=this.options.ns),r||(r=Eo),this.services.backendConnector.reload(t,n,o=>{i.resolve(),r(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&gy.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const i=Yr();this.emit("languageChanging",t);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,u)=>{u?(o(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(l,function(){return r.t(...arguments)})},s=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const u=typeof l=="string"?l:this.services.languageUtils.getBestMatchFromCodes(l);u&&(this.language||o(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,c=>{a(c,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(t),i}getFixedT(t,n,r){var i=this;const o=function(a,s){let l;if(typeof s!="object"){for(var u=arguments.length,c=new Array(u>2?u-2:0),d=2;d<u;d++)c[d-2]=arguments[d];l=i.options.overloadTranslationOptionHandler([a,s].concat(c))}else l={...s};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix=l.keyPrefix||r||o.keyPrefix;const f=i.options.keySeparator||".";let y;return l.keyPrefix&&Array.isArray(a)?y=a.map(v=>`${l.keyPrefix}${f}${v}`):y=l.keyPrefix?`${l.keyPrefix}${f}${a}`:a,i.t(y,l)};return typeof t=="string"?o.lng=t:o.lngs=t,o.ns=n,o.keyPrefix=r,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const u=this.services.backendConnector.state[`${s}|${l}`];return u===-1||u===2};if(n.precheck){const s=n.precheck(this,a);if(s!==void 0)return s}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(r,t)&&(!i||a(o,t)))}loadNamespaces(t,n){const r=Yr();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=Yr();typeof t=="string"&&(t=[t]);const i=this.options.preload||[],o=t.filter(a=>i.indexOf(a)<0);return o.length?(this.options.preload=i.concat(o),this.loadResources(a=>{r.resolve(),n&&n(a)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new oh(lh());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Mi(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Eo;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new Mi(i);return(t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(s=>{o[s]=this[s]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},r&&(o.store=new rh(this.store.data,i),o.services.resourceStore=o.store),o.translator=new Ma(o.services,i),o.translator.on("*",function(s){for(var l=arguments.length,u=new Array(l>1?l-1:0),c=1;c<l;c++)u[c-1]=arguments[c];o.emit(s,...u)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Te=Mi.createInstance();Te.createInstance=Mi.createInstance;Te.createInstance;Te.dir;Te.init;Te.loadResources;Te.reloadResources;Te.use;Te.changeLanguage;Te.getFixedT;Te.t;Te.exists;Te.setDefaultNamespace;Te.hasLoadedNamespace;Te.loadNamespaces;Te.loadLanguages;function Qu(e){"@babel/helpers - typeof";return Qu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qu(e)}var my=[],pE=my.forEach,hE=my.slice;function Gu(e){return pE.call(hE.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e}function vy(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Qu(XMLHttpRequest))==="object"}function gE(e){return!!e&&typeof e.then=="function"}function mE(e){return gE(e)?e:Promise.resolve(e)}function vE(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Yu={exports:{}},_o={exports:{}},ch;function yE(){return ch||(ch=1,function(e,t){var n=typeof self<"u"?self:ot,r=function(){function o(){this.fetch=!1,this.DOMException=n.DOMException}return o.prototype=n,new o}();(function(o){(function(a){var s={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function l(C){return C&&DataView.prototype.isPrototypeOf(C)}if(s.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(C){return C&&u.indexOf(Object.prototype.toString.call(C))>-1};function d(C){if(typeof C!="string"&&(C=String(C)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(C))throw new TypeError("Invalid character in header field name");return C.toLowerCase()}function f(C){return typeof C!="string"&&(C=String(C)),C}function y(C){var P={next:function(){var F=C.shift();return{done:F===void 0,value:F}}};return s.iterable&&(P[Symbol.iterator]=function(){return P}),P}function v(C){this.map={},C instanceof v?C.forEach(function(P,F){this.append(F,P)},this):Array.isArray(C)?C.forEach(function(P){this.append(P[0],P[1])},this):C&&Object.getOwnPropertyNames(C).forEach(function(P){this.append(P,C[P])},this)}v.prototype.append=function(C,P){C=d(C),P=f(P);var F=this.map[C];this.map[C]=F?F+", "+P:P},v.prototype.delete=function(C){delete this.map[d(C)]},v.prototype.get=function(C){return C=d(C),this.has(C)?this.map[C]:null},v.prototype.has=function(C){return this.map.hasOwnProperty(d(C))},v.prototype.set=function(C,P){this.map[d(C)]=f(P)},v.prototype.forEach=function(C,P){for(var F in this.map)this.map.hasOwnProperty(F)&&C.call(P,this.map[F],F,this)},v.prototype.keys=function(){var C=[];return this.forEach(function(P,F){C.push(F)}),y(C)},v.prototype.values=function(){var C=[];return this.forEach(function(P){C.push(P)}),y(C)},v.prototype.entries=function(){var C=[];return this.forEach(function(P,F){C.push([F,P])}),y(C)},s.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function S(C){if(C.bodyUsed)return Promise.reject(new TypeError("Already read"));C.bodyUsed=!0}function E(C){return new Promise(function(P,F){C.onload=function(){P(C.result)},C.onerror=function(){F(C.error)}})}function g(C){var P=new FileReader,F=E(P);return P.readAsArrayBuffer(C),F}function p(C){var P=new FileReader,F=E(P);return P.readAsText(C),F}function m(C){for(var P=new Uint8Array(C),F=new Array(P.length),W=0;W<P.length;W++)F[W]=String.fromCharCode(P[W]);return F.join("")}function w(C){if(C.slice)return C.slice(0);var P=new Uint8Array(C.byteLength);return P.set(new Uint8Array(C)),P.buffer}function k(){return this.bodyUsed=!1,this._initBody=function(C){this._bodyInit=C,C?typeof C=="string"?this._bodyText=C:s.blob&&Blob.prototype.isPrototypeOf(C)?this._bodyBlob=C:s.formData&&FormData.prototype.isPrototypeOf(C)?this._bodyFormData=C:s.searchParams&&URLSearchParams.prototype.isPrototypeOf(C)?this._bodyText=C.toString():s.arrayBuffer&&s.blob&&l(C)?(this._bodyArrayBuffer=w(C.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(C)||c(C))?this._bodyArrayBuffer=w(C):this._bodyText=C=Object.prototype.toString.call(C):this._bodyText="",this.headers.get("content-type")||(typeof C=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s.searchParams&&URLSearchParams.prototype.isPrototypeOf(C)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s.blob&&(this.blob=function(){var C=S(this);if(C)return C;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?S(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var C=S(this);if(C)return C;if(this._bodyBlob)return p(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(m(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s.formData&&(this.formData=function(){return this.text().then(L)}),this.json=function(){return this.text().then(JSON.parse)},this}var x=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function O(C){var P=C.toUpperCase();return x.indexOf(P)>-1?P:C}function $(C,P){P=P||{};var F=P.body;if(C instanceof $){if(C.bodyUsed)throw new TypeError("Already read");this.url=C.url,this.credentials=C.credentials,P.headers||(this.headers=new v(C.headers)),this.method=C.method,this.mode=C.mode,this.signal=C.signal,!F&&C._bodyInit!=null&&(F=C._bodyInit,C.bodyUsed=!0)}else this.url=String(C);if(this.credentials=P.credentials||this.credentials||"same-origin",(P.headers||!this.headers)&&(this.headers=new v(P.headers)),this.method=O(P.method||this.method||"GET"),this.mode=P.mode||this.mode||null,this.signal=P.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&F)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(F)}$.prototype.clone=function(){return new $(this,{body:this._bodyInit})};function L(C){var P=new FormData;return C.trim().split("&").forEach(function(F){if(F){var W=F.split("="),T=W.shift().replace(/\+/g," "),N=W.join("=").replace(/\+/g," ");P.append(decodeURIComponent(T),decodeURIComponent(N))}}),P}function j(C){var P=new v,F=C.replace(/\r?\n[\t ]+/g," ");return F.split(/\r?\n/).forEach(function(W){var T=W.split(":"),N=T.shift().trim();if(N){var H=T.join(":").trim();P.append(N,H)}}),P}k.call($.prototype);function D(C,P){P||(P={}),this.type="default",this.status=P.status===void 0?200:P.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in P?P.statusText:"OK",this.headers=new v(P.headers),this.url=P.url||"",this._initBody(C)}k.call(D.prototype),D.prototype.clone=function(){return new D(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},D.error=function(){var C=new D(null,{status:0,statusText:""});return C.type="error",C};var A=[301,302,303,307,308];D.redirect=function(C,P){if(A.indexOf(P)===-1)throw new RangeError("Invalid status code");return new D(null,{status:P,headers:{location:C}})},a.DOMException=o.DOMException;try{new a.DOMException}catch{a.DOMException=function(P,F){this.message=P,this.name=F;var W=Error(P);this.stack=W.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function M(C,P){return new Promise(function(F,W){var T=new $(C,P);if(T.signal&&T.signal.aborted)return W(new a.DOMException("Aborted","AbortError"));var N=new XMLHttpRequest;function H(){N.abort()}N.onload=function(){var G={status:N.status,statusText:N.statusText,headers:j(N.getAllResponseHeaders()||"")};G.url="responseURL"in N?N.responseURL:G.headers.get("X-Request-URL");var q="response"in N?N.response:N.responseText;F(new D(q,G))},N.onerror=function(){W(new TypeError("Network request failed"))},N.ontimeout=function(){W(new TypeError("Network request failed"))},N.onabort=function(){W(new a.DOMException("Aborted","AbortError"))},N.open(T.method,T.url,!0),T.credentials==="include"?N.withCredentials=!0:T.credentials==="omit"&&(N.withCredentials=!1),"responseType"in N&&s.blob&&(N.responseType="blob"),T.headers.forEach(function(G,q){N.setRequestHeader(q,G)}),T.signal&&(T.signal.addEventListener("abort",H),N.onreadystatechange=function(){N.readyState===4&&T.signal.removeEventListener("abort",H)}),N.send(typeof T._bodyInit>"u"?null:T._bodyInit)})}return M.polyfill=!0,o.fetch||(o.fetch=M,o.Headers=v,o.Request=$,o.Response=D),a.Headers=v,a.Request=$,a.Response=D,a.fetch=M,Object.defineProperty(a,"__esModule",{value:!0}),a})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=r;t=i.fetch,t.default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t}(_o,_o.exports)),_o.exports}(function(e,t){var n;if(typeof fetch=="function"&&(typeof ot<"u"&&ot.fetch?n=ot.fetch:typeof window<"u"&&window.fetch?n=window.fetch:n=fetch),typeof vE<"u"&&(typeof window>"u"||typeof window.document>"u")){var r=n||yE();r.default&&(r=r.default),t.default=r,e.exports=t.default}})(Yu,Yu.exports);var yy=Yu.exports;const wy=Ju(yy),dh=ky({__proto__:null,default:wy},[yy]);function Ia(e){"@babel/helpers - typeof";return Ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ia(e)}var Ft;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?Ft=global.fetch:typeof window<"u"&&window.fetch?Ft=window.fetch:Ft=fetch);var Ii;vy()&&(typeof global<"u"&&global.XMLHttpRequest?Ii=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Ii=window.XMLHttpRequest));var Da;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Da=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Da=window.ActiveXObject));!Ft&&dh&&!Ii&&!Da&&(Ft=wy||dh);typeof Ft!="function"&&(Ft=void 0);var Xu=function(t,n){if(n&&Ia(n)==="object"){var r="";for(var i in n)r+="&"+encodeURIComponent(i)+"="+encodeURIComponent(n[i]);if(!r)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+r.slice(1)}return t},fh=function(t,n,r){Ft(t,n).then(function(i){if(!i.ok)return r(i.statusText||"Error",{status:i.status});i.text().then(function(o){r(null,{status:i.status,data:o})}).catch(r)}).catch(r)},ph=!1,wE=function(t,n,r,i){t.queryStringParams&&(n=Xu(n,t.queryStringParams));var o=Gu({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);r&&(o["Content-Type"]="application/json");var a=typeof t.requestOptions=="function"?t.requestOptions(r):t.requestOptions,s=Gu({method:r?"POST":"GET",body:r?t.stringify(r):void 0,headers:o},ph?{}:a);try{fh(n,s,i)}catch(l){if(!a||Object.keys(a).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(a).forEach(function(u){delete s[u]}),fh(n,s,i),ph=!0}catch(u){i(u)}}},SE=function(t,n,r,i){r&&Ia(r)==="object"&&(r=Xu("",r).slice(1)),t.queryStringParams&&(n=Xu(n,t.queryStringParams));try{var o;Ii?o=new Ii:o=new Da("MSXML2.XMLHTTP.3.0"),o.open(r?"POST":"GET",n,1),t.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!t.withCredentials,r&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var a=t.customHeaders;if(a=typeof a=="function"?a():a,a)for(var s in a)o.setRequestHeader(s,a[s]);o.onreadystatechange=function(){o.readyState>3&&i(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(r)}catch(l){console&&console.log(l)}},xE=function(t,n,r,i){if(typeof r=="function"&&(i=r,r=void 0),i=i||function(){},Ft&&n.indexOf("file:")!==0)return wE(t,n,r,i);if(vy()||typeof ActiveXObject=="function")return SE(t,n,r,i);i(new Error("No fetch and no xhr implementation found!"))};function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Di(e)}function kE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Sy(r.key),r)}}function bE(e,t,n){return t&&hh(e.prototype,t),n&&hh(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function OE(e,t,n){return t=Sy(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sy(e){var t=CE(e,"string");return Di(t)==="symbol"?t:String(t)}function CE(e,t){if(Di(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Di(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var $E=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,r,i){return OE({},r,i||"")},parseLoadPayload:function(n,r){},request:xE,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},xy=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};kE(this,e),this.services=t,this.options=n,this.allOptions=r,this.type="backend",this.init(t,n,r)}return bE(e,[{key:"init",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=n,this.options=Gu(i,this.options||{},$E()),this.allOptions=o,this.services&&this.options.reloadInterval&&setInterval(function(){return r.reload()},this.options.reloadInterval)}},{key:"readMulti",value:function(n,r,i){this._readAny(n,n,r,r,i)}},{key:"read",value:function(n,r,i){this._readAny([n],n,[r],r,i)}},{key:"_readAny",value:function(n,r,i,o,a){var s=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(n,i)),l=mE(l),l.then(function(u){if(!u)return a(null,{});var c=s.services.interpolator.interpolate(u,{lng:n.join("+"),ns:i.join("+")});s.loadUrl(c,a,r,o)})}},{key:"loadUrl",value:function(n,r,i,o){var a=this,s=typeof i=="string"?[i]:i,l=typeof o=="string"?[o]:o,u=this.options.parseLoadPayload(s,l);this.options.request(this.options,n,u,function(c,d){if(d&&(d.status>=500&&d.status<600||!d.status))return r("failed loading "+n+"; status code: "+d.status,!0);if(d&&d.status>=400&&d.status<500)return r("failed loading "+n+"; status code: "+d.status,!1);if(!d&&c&&c.message&&c.message.indexOf("Failed to fetch")>-1)return r("failed loading "+n+": "+c.message,!0);if(c)return r(c,!1);var f,y;try{typeof d.data=="string"?f=a.options.parse(d.data,i,o):f=d.data}catch{y="failed parsing "+n+" to json"}if(y)return r(y,!1);r(null,f)})}},{key:"create",value:function(n,r,i,o,a){var s=this;if(this.options.addPath){typeof n=="string"&&(n=[n]);var l=this.options.parsePayload(r,i,o),u=0,c=[],d=[];n.forEach(function(f){var y=s.options.addPath;typeof s.options.addPath=="function"&&(y=s.options.addPath(f,r));var v=s.services.interpolator.interpolate(y,{lng:f,ns:r});s.options.request(s.options,v,l,function(S,E){u+=1,c.push(S),d.push(E),u===n.length&&typeof a=="function"&&a(c,d)})})}}},{key:"reload",value:function(){var n=this,r=this.services,i=r.backendConnector,o=r.languageUtils,a=r.logger,s=i.language;if(!(s&&s.toLowerCase()==="cimode")){var l=[],u=function(d){var f=o.toResolveHierarchy(d);f.forEach(function(y){l.indexOf(y)<0&&l.push(y)})};u(s),this.allOptions.preload&&this.allOptions.preload.forEach(function(c){return u(c)}),l.forEach(function(c){n.allOptions.ns.forEach(function(d){i.read(c,d,"read",null,null,function(f,y){f&&a.warn("loading namespace ".concat(d," for language ").concat(c," failed"),f),!f&&y&&a.log("loaded namespace ".concat(d," for language ").concat(c),y),i.loaded("".concat(c,"|").concat(d),f,y)})})})}}}]),e}();xy.type="backend";Te.use(xy).use(wS).init({debug:!0,backend:{loadPath:"locales/{{lng}}.json"},interpolation:{escapeValue:!1},fallbackLng:"en",supportedLngs:["en","ru","fr"]});const gh=[{id:"1",title:"How it Works"},{id:"2",title:"Photo"},{id:"3",title:"Products and Services"},{id:"4",title:"Use Cases of Our Products"}],EE=()=>h.jsxs(h.Fragment,{children:[h.jsxs(kS,{i18n:Te,children:[h.jsx(Zk,{sections:gh}),h.jsx(NS,{}),gh.map(e=>e.id==="1"?h.jsx(ni,{name:e.id,children:h.jsx(kb,{})},e.id):e.id==="2"?h.jsx(ni,{name:e.id,children:h.jsx(LC,{})},e.id):e.id==="3"?h.jsx(ni,{name:e.id,children:h.jsx(SC,{})},e.id):e.id==="4"?h.jsx(ni,{name:e.id,children:h.jsx(D$,{})},e.id):null),h.jsx(V$,{})]}),h.jsx(q$,{})]});Ol.createRoot(document.getElementById("root")).render(h.jsx(B.StrictMode,{children:h.jsx(EE,{})}));
