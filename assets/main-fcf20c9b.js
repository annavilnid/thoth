function Wp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Wv(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var qp={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=Symbol.for("react.element"),qv=Symbol.for("react.portal"),Vv=Symbol.for("react.fragment"),Gv=Symbol.for("react.strict_mode"),Kv=Symbol.for("react.profiler"),Qv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),Xv=Symbol.for("react.forward_ref"),Jv=Symbol.for("react.suspense"),Zv=Symbol.for("react.memo"),ey=Symbol.for("react.lazy"),Zc=Symbol.iterator;function ty(e){return e===null||typeof e!="object"?null:(e=Zc&&e[Zc]||e["@@iterator"],typeof e=="function"?e:null)}var Vp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Kp={};function Rr(e,t,n){this.props=e,this.context=t,this.refs=Kp,this.updater=n||Vp}Rr.prototype.isReactComponent={};Rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qp(){}Qp.prototype=Rr.prototype;function _u(e,t,n){this.props=e,this.context=t,this.refs=Kp,this.updater=n||Vp}var Ru=_u.prototype=new Qp;Ru.constructor=_u;Gp(Ru,Rr.prototype);Ru.isPureReactComponent=!0;var ed=Array.isArray,Yp=Object.prototype.hasOwnProperty,Nu={current:null},Xp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Yp.call(t,r)&&!Xp.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Di,type:e,key:o,ref:a,props:i,_owner:Nu.current}}function ny(e,t){return{$$typeof:Di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Iu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Di}function ry(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var td=/\/+/g;function as(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ry(""+e.key):t.toString(36)}function mo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Di:case qv:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+as(a,0):r,ed(i)?(n="",e!=null&&(n=e.replace(td,"$&/")+"/"),mo(i,t,n,"",function(u){return u})):i!=null&&(Iu(i)&&(i=ny(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(td,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",ed(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+as(o,s);a+=mo(o,t,n,l,i)}else if(l=ty(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+as(o,s++),a+=mo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Vi(e,t,n){if(e==null)return e;var r=[],i=0;return mo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function iy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},vo={transition:null},oy={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:vo,ReactCurrentOwner:Nu};J.Children={map:Vi,forEach:function(e,t,n){Vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vi(e,function(){t++}),t},toArray:function(e){return Vi(e,function(t){return t})||[]},only:function(e){if(!Iu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=Rr;J.Fragment=Vv;J.Profiler=Kv;J.PureComponent=_u;J.StrictMode=Gv;J.Suspense=Jv;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Nu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Yp.call(t,l)&&!Xp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Di,type:e.type,key:i,ref:o,props:r,_owner:a}};J.createContext=function(e){return e={$$typeof:Yv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qv,_context:e},e.Consumer=e};J.createElement=Jp;J.createFactory=function(e){var t=Jp.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:Xv,render:e}};J.isValidElement=Iu;J.lazy=function(e){return{$$typeof:ey,_payload:{_status:-1,_result:e},_init:iy}};J.memo=function(e,t){return{$$typeof:Zv,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=vo.transition;vo.transition={};try{e()}finally{vo.transition=t}};J.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};J.useCallback=function(e,t){return Fe.current.useCallback(e,t)};J.useContext=function(e){return Fe.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};J.useEffect=function(e,t){return Fe.current.useEffect(e,t)};J.useId=function(){return Fe.current.useId()};J.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Fe.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};J.useRef=function(e){return Fe.current.useRef(e)};J.useState=function(e){return Fe.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Fe.current.useTransition()};J.version="18.2.0";qp.exports=J;var j=qp.exports;const gt=Tu(j),ay=Wp({__proto__:null,default:gt},[j]);var Zp={exports:{}},Oa={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy=j,ly=Symbol.for("react.element"),uy=Symbol.for("react.fragment"),cy=Object.prototype.hasOwnProperty,dy=sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fy={key:!0,ref:!0,__self:!0,__source:!0};function eh(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)cy.call(t,r)&&!fy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ly,type:e,key:o,ref:a,props:i,_owner:dy.current}}Oa.Fragment=uy;Oa.jsx=eh;Oa.jsxs=eh;Zp.exports=Oa;var h=Zp.exports,el={},th={exports:{}},et={},nh={exports:{}},rh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,I){var H=T.length;T.push(I);e:for(;0<H;){var X=H-1>>>1,K=T[X];if(0<i(K,I))T[X]=I,T[H]=K,H=X;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var I=T[0],H=T.pop();if(H!==I){T[0]=H;e:for(var X=0,K=T.length,Lt=K>>>1;X<Lt;){var Pe=2*(X+1)-1,Gt=T[Pe],Qe=Pe+1,Tt=T[Qe];if(0>i(Gt,H))Qe<K&&0>i(Tt,Gt)?(T[X]=Tt,T[Qe]=H,X=Qe):(T[X]=Gt,T[Pe]=H,X=Pe);else if(Qe<K&&0>i(Tt,H))T[X]=Tt,T[Qe]=H,X=Qe;else break e}}return I}function i(T,I){var H=T.sortIndex-I.sortIndex;return H!==0?H:T.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,d=null,f=3,y=!1,v=!1,w=!1,$=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=T)r(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function x(T){if(w=!1,m(T),!v)if(n(l)!==null)v=!0,B(b);else{var I=n(u);I!==null&&q(x,I.startTime-T)}}function b(T,I){v=!1,w&&(w=!1,g(E),E=-1),y=!0;var H=f;try{for(m(I),d=n(l);d!==null&&(!(d.expirationTime>I)||T&&!F());){var X=d.callback;if(typeof X=="function"){d.callback=null,f=d.priorityLevel;var K=X(d.expirationTime<=I);I=e.unstable_now(),typeof K=="function"?d.callback=K:d===n(l)&&r(l),m(I)}else r(l);d=n(l)}if(d!==null)var Lt=!0;else{var Pe=n(u);Pe!==null&&q(x,Pe.startTime-I),Lt=!1}return Lt}finally{d=null,f=H,y=!1}}var k=!1,P=null,E=-1,R=5,N=-1;function F(){return!(e.unstable_now()-N<R)}function U(){if(P!==null){var T=e.unstable_now();N=T;var I=!0;try{I=P(!0,T)}finally{I?A():(k=!1,P=null)}}else k=!1}var A;if(typeof p=="function")A=function(){p(U)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,L=C.port2;C.port1.onmessage=U,A=function(){L.postMessage(null)}}else A=function(){$(U,0)};function B(T){P=T,k||(k=!0,A())}function q(T,I){E=$(function(){T(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,B(b))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var H=f;f=I;try{return T()}finally{f=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,I){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var H=f;f=T;try{return I()}finally{f=H}},e.unstable_scheduleCallback=function(T,I,H){var X=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?X+H:X):H=X,T){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=H+K,T={id:c++,callback:I,priorityLevel:T,startTime:H,expirationTime:K,sortIndex:-1},H>X?(T.sortIndex=H,t(u,T),n(l)===null&&T===n(u)&&(w?(g(E),E=-1):w=!0,q(x,H-X))):(T.sortIndex=K,t(l,T),v||y||(v=!0,B(b))),T},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(T){var I=f;return function(){var H=f;f=I;try{return T.apply(this,arguments)}finally{f=H}}}})(rh);nh.exports=rh;var py=nh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih=j,Ze=py;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oh=new Set,pi={};function Fn(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(pi[e]=t,e=0;e<t.length;e++)oh.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,hy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nd={},rd={};function gy(e){return tl.call(rd,e)?!0:tl.call(nd,e)?!1:hy.test(e)?rd[e]=!0:(nd[e]=!0,!1)}function my(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vy(e,t,n,r){if(t===null||typeof t>"u"||my(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var zu=/[\-:]([a-z])/g;function Mu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zu,Mu);Te[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zu,Mu);Te[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zu,Mu);Te[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function Du(e,t,n,r){var i=Te.hasOwnProperty(t)?Te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vy(t,n,i,r)&&(n=null),r||i===null?gy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gi=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),Au=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),ah=Symbol.for("react.provider"),sh=Symbol.for("react.context"),Fu=Symbol.for("react.forward_ref"),rl=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),Hu=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),lh=Symbol.for("react.offscreen"),id=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,ss;function Yr(e){if(ss===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ss=t&&t[1]||""}return`
`+ss+e}var ls=!1;function us(e,t){if(!e||ls)return"";ls=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{ls=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function yy(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=us(e.type,!1),e;case 11:return e=us(e.type.render,!1),e;case 1:return e=us(e.type,!0),e;default:return""}}function ol(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case Qn:return"Portal";case nl:return"Profiler";case Au:return"StrictMode";case rl:return"Suspense";case il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sh:return(e.displayName||"Context")+".Consumer";case ah:return(e._context.displayName||"Context")+".Provider";case Fu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hu:return t=e.displayName||null,t!==null?t:ol(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return ol(e(t))}catch{}}return null}function wy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ol(t);case 8:return t===Au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xy(e){var t=uh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ki(e){e._valueTracker||(e._valueTracker=xy(e))}function ch(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function al(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function od(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dh(e,t){t=t.checked,t!=null&&Du(e,"checked",t,!1)}function sl(e,t){dh(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&ll(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ad(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ll(e,t,n){(t!=="number"||_o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xr=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Xr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function fh(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ld(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ph(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ph(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qi,hh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qi=Qi||document.createElement("div"),Qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function hi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sy=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(e){Sy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ti[t]=ti[e]})});function gh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ti.hasOwnProperty(e)&&ti[e]?(""+t).trim():t+"px"}function mh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var by=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dl(e,t){if(t){if(by[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pl=null;function Uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,dr=null,fr=null;function ud(e){if(e=Hi(e)){if(typeof hl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Ta(t),hl(e.stateNode,e.type,t))}}function vh(e){dr?fr?fr.push(e):fr=[e]:dr=e}function yh(){if(dr){var e=dr,t=fr;if(fr=dr=null,ud(e),t)for(e=0;e<t.length;e++)ud(t[e])}}function wh(e,t){return e(t)}function xh(){}var cs=!1;function Sh(e,t,n){if(cs)return e(t,n);cs=!0;try{return wh(e,t,n)}finally{cs=!1,(dr!==null||fr!==null)&&(xh(),yh())}}function gi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ta(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var gl=!1;if(Ft)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){gl=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{gl=!1}function ky(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ni=!1,Ro=null,No=!1,ml=null,$y={onError:function(e){ni=!0,Ro=e}};function Cy(e,t,n,r,i,o,a,s,l){ni=!1,Ro=null,ky.apply($y,arguments)}function Oy(e,t,n,r,i,o,a,s,l){if(Cy.apply(this,arguments),ni){if(ni){var u=Ro;ni=!1,Ro=null}else throw Error(_(198));No||(No=!0,ml=u)}}function Hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cd(e){if(Hn(e)!==e)throw Error(_(188))}function Py(e){var t=e.alternate;if(!t){if(t=Hn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cd(i),e;if(o===r)return cd(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function kh(e){return e=Py(e),e!==null?$h(e):null}function $h(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$h(e);if(t!==null)return t;e=e.sibling}return null}var Ch=Ze.unstable_scheduleCallback,dd=Ze.unstable_cancelCallback,Ey=Ze.unstable_shouldYield,jy=Ze.unstable_requestPaint,me=Ze.unstable_now,Ly=Ze.unstable_getCurrentPriorityLevel,Bu=Ze.unstable_ImmediatePriority,Oh=Ze.unstable_UserBlockingPriority,Io=Ze.unstable_NormalPriority,Ty=Ze.unstable_LowPriority,Ph=Ze.unstable_IdlePriority,Pa=null,Ot=null;function _y(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Pa,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Iy,Ry=Math.log,Ny=Math.LN2;function Iy(e){return e>>>=0,e===0?32:31-(Ry(e)/Ny|0)|0}var Yi=64,Xi=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Jr(s):(o&=a,o!==0&&(r=Jr(o)))}else a=n&~i,a!==0?r=Jr(a):o!==0&&(r=Jr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),i=1<<n,r|=e[n],t&=~i;return r}function zy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function My(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-mt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=zy(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eh(){var e=Yi;return Yi<<=1,!(Yi&4194240)&&(Yi=64),e}function ds(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function Dy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-mt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Wu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ne=0;function jh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lh,qu,Th,_h,Rh,yl=!1,Ji=[],sn=null,ln=null,un=null,mi=new Map,vi=new Map,en=[],Ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function Br(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Hi(t),t!==null&&qu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fy(e,t,n,r,i){switch(t){case"focusin":return sn=Br(sn,e,t,n,r,i),!0;case"dragenter":return ln=Br(ln,e,t,n,r,i),!0;case"mouseover":return un=Br(un,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return mi.set(o,Br(mi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,vi.set(o,Br(vi.get(o)||null,e,t,n,r,i)),!0}return!1}function Nh(e){var t=$n(e.target);if(t!==null){var n=Hn(t);if(n!==null){if(t=n.tag,t===13){if(t=bh(n),t!==null){e.blockedOn=t,Rh(e.priority,function(){Th(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pl=r,n.target.dispatchEvent(r),pl=null}else return t=Hi(n),t!==null&&qu(t),e.blockedOn=n,!1;t.shift()}return!0}function pd(e,t,n){yo(e)&&n.delete(t)}function Hy(){yl=!1,sn!==null&&yo(sn)&&(sn=null),ln!==null&&yo(ln)&&(ln=null),un!==null&&yo(un)&&(un=null),mi.forEach(pd),vi.forEach(pd)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,yl||(yl=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,Hy)))}function yi(e){function t(i){return Wr(i,e)}if(0<Ji.length){Wr(Ji[0],e);for(var n=1;n<Ji.length;n++){var r=Ji[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Wr(sn,e),ln!==null&&Wr(ln,e),un!==null&&Wr(un,e),mi.forEach(t),vi.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Nh(n),n.blockedOn===null&&en.shift()}var pr=Wt.ReactCurrentBatchConfig,Mo=!0;function Uy(e,t,n,r){var i=ne,o=pr.transition;pr.transition=null;try{ne=1,Vu(e,t,n,r)}finally{ne=i,pr.transition=o}}function By(e,t,n,r){var i=ne,o=pr.transition;pr.transition=null;try{ne=4,Vu(e,t,n,r)}finally{ne=i,pr.transition=o}}function Vu(e,t,n,r){if(Mo){var i=wl(e,t,n,r);if(i===null)Ss(e,t,r,Do,n),fd(e,r);else if(Fy(i,e,t,n,r))r.stopPropagation();else if(fd(e,r),t&4&&-1<Ay.indexOf(e)){for(;i!==null;){var o=Hi(i);if(o!==null&&Lh(o),o=wl(e,t,n,r),o===null&&Ss(e,t,r,Do,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ss(e,t,r,null,n)}}var Do=null;function wl(e,t,n,r){if(Do=null,e=Uu(r),e=$n(e),e!==null)if(t=Hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Do=e,null}function Ih(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ly()){case Bu:return 1;case Oh:return 4;case Io:case Ty:return 16;case Ph:return 536870912;default:return 16}default:return 16}}var rn=null,Gu=null,wo=null;function zh(){if(wo)return wo;var e,t=Gu,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return wo=i.slice(e,1<r?1-r:void 0)}function xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function hd(){return!1}function tt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zi:hd,this.isPropagationStopped=hd,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ku=tt(Nr),Fi=pe({},Nr,{view:0,detail:0}),Wy=tt(Fi),fs,ps,qr,Ea=pe({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(fs=e.screenX-qr.screenX,ps=e.screenY-qr.screenY):ps=fs=0,qr=e),fs)},movementY:function(e){return"movementY"in e?e.movementY:ps}}),gd=tt(Ea),qy=pe({},Ea,{dataTransfer:0}),Vy=tt(qy),Gy=pe({},Fi,{relatedTarget:0}),hs=tt(Gy),Ky=pe({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qy=tt(Ky),Yy=pe({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xy=tt(Yy),Jy=pe({},Nr,{data:0}),md=tt(Jy),Zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=t0[e])?!!t[e]:!1}function Qu(){return n0}var r0=pe({},Fi,{key:function(e){if(e.key){var t=Zy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qu,charCode:function(e){return e.type==="keypress"?xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),i0=tt(r0),o0=pe({},Ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=tt(o0),a0=pe({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qu}),s0=tt(a0),l0=pe({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),u0=tt(l0),c0=pe({},Ea,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d0=tt(c0),f0=[9,13,27,32],Yu=Ft&&"CompositionEvent"in window,ri=null;Ft&&"documentMode"in document&&(ri=document.documentMode);var p0=Ft&&"TextEvent"in window&&!ri,Mh=Ft&&(!Yu||ri&&8<ri&&11>=ri),yd=String.fromCharCode(32),wd=!1;function Dh(e,t){switch(e){case"keyup":return f0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ah(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function h0(e,t){switch(e){case"compositionend":return Ah(t);case"keypress":return t.which!==32?null:(wd=!0,yd);case"textInput":return e=t.data,e===yd&&wd?null:e;default:return null}}function g0(e,t){if(Xn)return e==="compositionend"||!Yu&&Dh(e,t)?(e=zh(),wo=Gu=rn=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mh&&t.locale!=="ko"?null:t.data;default:return null}}var m0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!m0[e.type]:t==="textarea"}function Fh(e,t,n,r){vh(r),t=Ao(t,"onChange"),0<t.length&&(n=new Ku("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ii=null,wi=null;function v0(e){Xh(e,0)}function ja(e){var t=er(e);if(ch(t))return e}function y0(e,t){if(e==="change")return t}var Hh=!1;if(Ft){var gs;if(Ft){var ms="oninput"in document;if(!ms){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),ms=typeof Sd.oninput=="function"}gs=ms}else gs=!1;Hh=gs&&(!document.documentMode||9<document.documentMode)}function bd(){ii&&(ii.detachEvent("onpropertychange",Uh),wi=ii=null)}function Uh(e){if(e.propertyName==="value"&&ja(wi)){var t=[];Fh(t,wi,e,Uu(e)),Sh(v0,t)}}function w0(e,t,n){e==="focusin"?(bd(),ii=t,wi=n,ii.attachEvent("onpropertychange",Uh)):e==="focusout"&&bd()}function x0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ja(wi)}function S0(e,t){if(e==="click")return ja(t)}function b0(e,t){if(e==="input"||e==="change")return ja(t)}function k0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:k0;function xi(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tl.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $d(e,t){var n=kd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kd(n)}}function Bh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wh(){for(var e=window,t=_o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_o(e.document)}return t}function Xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $0(e){var t=Wh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bh(n.ownerDocument.documentElement,n)){if(r!==null&&Xu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$d(n,o);var a=$d(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var C0=Ft&&"documentMode"in document&&11>=document.documentMode,Jn=null,xl=null,oi=null,Sl=!1;function Cd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||Jn==null||Jn!==_o(r)||(r=Jn,"selectionStart"in r&&Xu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oi&&xi(oi,r)||(oi=r,r=Ao(xl,"onSelect"),0<r.length&&(t=new Ku("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zn={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},vs={},qh={};Ft&&(qh=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function La(e){if(vs[e])return vs[e];if(!Zn[e])return e;var t=Zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qh)return vs[e]=t[n];return e}var Vh=La("animationend"),Gh=La("animationiteration"),Kh=La("animationstart"),Qh=La("transitionend"),Yh=new Map,Od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){Yh.set(e,t),Fn(t,[e])}for(var ys=0;ys<Od.length;ys++){var ws=Od[ys],O0=ws.toLowerCase(),P0=ws[0].toUpperCase()+ws.slice(1);yn(O0,"on"+P0)}yn(Vh,"onAnimationEnd");yn(Gh,"onAnimationIteration");yn(Kh,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Qh,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function Pd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Oy(r,t,void 0,e),e.currentTarget=null}function Xh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Pd(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Pd(i,s,u),o=l}}}if(No)throw e=ml,No=!1,ml=null,e}function oe(e,t){var n=t[Ol];n===void 0&&(n=t[Ol]=new Set);var r=e+"__bubble";n.has(r)||(Jh(t,e,2,!1),n.add(r))}function xs(e,t,n){var r=0;t&&(r|=4),Jh(n,e,r,t)}var to="_reactListening"+Math.random().toString(36).slice(2);function Si(e){if(!e[to]){e[to]=!0,oh.forEach(function(n){n!=="selectionchange"&&(E0.has(n)||xs(n,!1,e),xs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[to]||(t[to]=!0,xs("selectionchange",!1,t))}}function Jh(e,t,n,r){switch(Ih(t)){case 1:var i=Uy;break;case 4:i=By;break;default:i=Vu}n=i.bind(null,t,n,e),i=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ss(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=$n(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Sh(function(){var u=o,c=Uu(n),d=[];e:{var f=Yh.get(e);if(f!==void 0){var y=Ku,v=e;switch(e){case"keypress":if(xo(n)===0)break e;case"keydown":case"keyup":y=i0;break;case"focusin":v="focus",y=hs;break;case"focusout":v="blur",y=hs;break;case"beforeblur":case"afterblur":y=hs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Vy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=s0;break;case Vh:case Gh:case Kh:y=Qy;break;case Qh:y=u0;break;case"scroll":y=Wy;break;case"wheel":y=d0;break;case"copy":case"cut":case"paste":y=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=vd}var w=(t&4)!==0,$=!w&&e==="scroll",g=w?f!==null?f+"Capture":null:f;w=[];for(var p=u,m;p!==null;){m=p;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,g!==null&&(x=gi(p,g),x!=null&&w.push(bi(p,x,m)))),$)break;p=p.return}0<w.length&&(f=new y(f,v,null,n,c),d.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==pl&&(v=n.relatedTarget||n.fromElement)&&($n(v)||v[Ht]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?$n(v):null,v!==null&&($=Hn(v),v!==$||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=gd,x="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=vd,x="onPointerLeave",g="onPointerEnter",p="pointer"),$=y==null?f:er(y),m=v==null?f:er(v),f=new w(x,p+"leave",y,n,c),f.target=$,f.relatedTarget=m,x=null,$n(c)===u&&(w=new w(g,p+"enter",v,n,c),w.target=m,w.relatedTarget=$,x=w),$=x,y&&v)t:{for(w=y,g=v,p=0,m=w;m;m=Wn(m))p++;for(m=0,x=g;x;x=Wn(x))m++;for(;0<p-m;)w=Wn(w),p--;for(;0<m-p;)g=Wn(g),m--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=Wn(w),g=Wn(g)}w=null}else w=null;y!==null&&Ed(d,f,y,w,!1),v!==null&&$!==null&&Ed(d,$,v,w,!0)}}e:{if(f=u?er(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var b=y0;else if(xd(f))if(Hh)b=b0;else{b=x0;var k=w0}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=S0);if(b&&(b=b(e,u))){Fh(d,b,n,c);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&ll(f,"number",f.value)}switch(k=u?er(u):window,e){case"focusin":(xd(k)||k.contentEditable==="true")&&(Jn=k,xl=u,oi=null);break;case"focusout":oi=xl=Jn=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,Cd(d,n,c);break;case"selectionchange":if(C0)break;case"keydown":case"keyup":Cd(d,n,c)}var P;if(Yu)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Xn?Dh(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Mh&&n.locale!=="ko"&&(Xn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Xn&&(P=zh()):(rn=c,Gu="value"in rn?rn.value:rn.textContent,Xn=!0)),k=Ao(u,E),0<k.length&&(E=new md(E,e,null,n,c),d.push({event:E,listeners:k}),P?E.data=P:(P=Ah(n),P!==null&&(E.data=P)))),(P=p0?h0(e,n):g0(e,n))&&(u=Ao(u,"onBeforeInput"),0<u.length&&(c=new md("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}Xh(d,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ao(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=gi(e,n),o!=null&&r.unshift(bi(e,o,i)),o=gi(e,t),o!=null&&r.push(bi(e,o,i))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ed(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=gi(n,o),l!=null&&a.unshift(bi(n,l,s))):i||(l=gi(n,o),l!=null&&a.push(bi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var j0=/\r\n?/g,L0=/\u0000|\uFFFD/g;function jd(e){return(typeof e=="string"?e:""+e).replace(j0,`
`).replace(L0,"")}function no(e,t,n){if(t=jd(t),jd(e)!==t&&n)throw Error(_(425))}function Fo(){}var bl=null,kl=null;function $l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cl=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,Ld=typeof Promise=="function"?Promise:void 0,_0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ld<"u"?function(e){return Ld.resolve(null).then(e).catch(R0)}:Cl;function R0(e){setTimeout(function(){throw e})}function bs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),yi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yi(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Td(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),$t="__reactFiber$"+Ir,ki="__reactProps$"+Ir,Ht="__reactContainer$"+Ir,Ol="__reactEvents$"+Ir,N0="__reactListeners$"+Ir,I0="__reactHandles$"+Ir;function $n(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ht]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Td(e);e!==null;){if(n=e[$t])return n;e=Td(e)}return t}e=n,n=e.parentNode}return null}function Hi(e){return e=e[$t]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ta(e){return e[ki]||null}var Pl=[],tr=-1;function wn(e){return{current:e}}function se(e){0>tr||(e.current=Pl[tr],Pl[tr]=null,tr--)}function ie(e,t){tr++,Pl[tr]=e.current,e.current=t}var vn={},ze=wn(vn),qe=wn(!1),Nn=vn;function yr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(e){return e=e.childContextTypes,e!=null}function Ho(){se(qe),se(ze)}function _d(e,t,n){if(ze.current!==vn)throw Error(_(168));ie(ze,t),ie(qe,n)}function Zh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,wy(e)||"Unknown",i));return pe({},n,r)}function Uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Nn=ze.current,ie(ze,e),ie(qe,qe.current),!0}function Rd(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Zh(e,t,Nn),r.__reactInternalMemoizedMergedChildContext=e,se(qe),se(ze),ie(ze,e)):se(qe),ie(qe,n)}var It=null,_a=!1,ks=!1;function eg(e){It===null?It=[e]:It.push(e)}function z0(e){_a=!0,eg(e)}function xn(){if(!ks&&It!==null){ks=!0;var e=0,t=ne;try{var n=It;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,_a=!1}catch(i){throw It!==null&&(It=It.slice(e+1)),Ch(Bu,xn),i}finally{ne=t,ks=!1}}return null}var nr=[],rr=0,Bo=null,Wo=0,nt=[],rt=0,In=null,zt=1,Mt="";function bn(e,t){nr[rr++]=Wo,nr[rr++]=Bo,Bo=e,Wo=t}function tg(e,t,n){nt[rt++]=zt,nt[rt++]=Mt,nt[rt++]=In,In=e;var r=zt;e=Mt;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var o=32-mt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,zt=1<<32-mt(t)+i|n<<i|r,Mt=o+e}else zt=1<<o|n<<i|r,Mt=e}function Ju(e){e.return!==null&&(bn(e,1),tg(e,1,0))}function Zu(e){for(;e===Bo;)Bo=nr[--rr],nr[rr]=null,Wo=nr[--rr],nr[rr]=null;for(;e===In;)In=nt[--rt],nt[rt]=null,Mt=nt[--rt],nt[rt]=null,zt=nt[--rt],nt[rt]=null}var Je=null,Xe=null,ue=!1,ht=null;function ng(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Xe=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:zt,overflow:Mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Xe=null,!0):!1;default:return!1}}function El(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(ue){var t=Xe;if(t){var n=t;if(!Nd(e,t)){if(El(e))throw Error(_(418));t=cn(n.nextSibling);var r=Je;t&&Nd(e,t)?ng(r,n):(e.flags=e.flags&-4097|2,ue=!1,Je=e)}}else{if(El(e))throw Error(_(418));e.flags=e.flags&-4097|2,ue=!1,Je=e}}}function Id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function ro(e){if(e!==Je)return!1;if(!ue)return Id(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$l(e.type,e.memoizedProps)),t&&(t=Xe)){if(El(e))throw rg(),Error(_(418));for(;t;)ng(e,t),t=cn(t.nextSibling)}if(Id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Je?cn(e.stateNode.nextSibling):null;return!0}function rg(){for(var e=Xe;e;)e=cn(e.nextSibling)}function wr(){Xe=Je=null,ue=!1}function ec(e){ht===null?ht=[e]:ht.push(e)}var M0=Wt.ReactCurrentBatchConfig;function ft(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var qo=wn(null),Vo=null,ir=null,tc=null;function nc(){tc=ir=Vo=null}function rc(e){var t=qo.current;se(qo),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hr(e,t){Vo=e,tc=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(tc!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(Vo===null)throw Error(_(308));ir=e,Vo.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var Cn=null;function ic(e){Cn===null?Cn=[e]:Cn.push(e)}function ig(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ic(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function oc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function og(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ut(e,n)}return i=r.interleaved,i===null?(t.next=t,ic(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ut(e,n)}function So(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wu(e,n)}}function zd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,r){var i=e.updateQueue;Jt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,c=u=l=null,s=o;do{var f=s.lane,y=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(f=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(y,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(y,d,f):v,f==null)break e;d=pe({},d,f);break e;case 2:Jt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else y={eventTime:y,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Mn|=a,e.lanes=a,e.memoizedState=d}}function Md(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var ag=new ih.Component().refs;function Tl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ra={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=pn(e),o=Dt(r,i);o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(vt(t,e,i,r),So(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=pn(e),o=Dt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(vt(t,e,i,r),So(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=pn(e),i=Dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=dn(e,i,r),t!==null&&(vt(t,e,r,n),So(t,e,r))}};function Dd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!xi(n,r)||!xi(i,o):!0}function sg(e,t,n){var r=!1,i=vn,o=t.contextType;return typeof o=="object"&&o!==null?o=at(o):(i=Ve(t)?Nn:ze.current,r=t.contextTypes,o=(r=r!=null)?yr(e,i):vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ra,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ad(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ra.enqueueReplaceState(t,t.state,null)}function _l(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ag,oc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=at(o):(o=Ve(t)?Nn:ze.current,i.context=yr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Tl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ra.enqueueReplaceState(i,i.state,null),Go(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===ag&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function io(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fd(e){var t=e._init;return t(e._payload)}function lg(e){function t(g,p){if(e){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=hn(g,p),g.index=0,g.sibling=null,g}function o(g,p,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,m,x){return p===null||p.tag!==6?(p=Ls(m,g.mode,x),p.return=g,p):(p=i(p,m),p.return=g,p)}function l(g,p,m,x){var b=m.type;return b===Yn?c(g,p,m.props.children,x,m.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Xt&&Fd(b)===p.type)?(x=i(p,m.props),x.ref=Vr(g,p,m),x.return=g,x):(x=Po(m.type,m.key,m.props,null,g.mode,x),x.ref=Vr(g,p,m),x.return=g,x)}function u(g,p,m,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Ts(m,g.mode,x),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function c(g,p,m,x,b){return p===null||p.tag!==7?(p=Ln(m,g.mode,x,b),p.return=g,p):(p=i(p,m),p.return=g,p)}function d(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ls(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gi:return m=Po(p.type,p.key,p.props,null,g.mode,m),m.ref=Vr(g,null,p),m.return=g,m;case Qn:return p=Ts(p,g.mode,m),p.return=g,p;case Xt:var x=p._init;return d(g,x(p._payload),m)}if(Xr(p)||Hr(p))return p=Ln(p,g.mode,m,null),p.return=g,p;io(g,p)}return null}function f(g,p,m,x){var b=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:s(g,p,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Gi:return m.key===b?l(g,p,m,x):null;case Qn:return m.key===b?u(g,p,m,x):null;case Xt:return b=m._init,f(g,p,b(m._payload),x)}if(Xr(m)||Hr(m))return b!==null?null:c(g,p,m,x,null);io(g,m)}return null}function y(g,p,m,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(m)||null,s(p,g,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gi:return g=g.get(x.key===null?m:x.key)||null,l(p,g,x,b);case Qn:return g=g.get(x.key===null?m:x.key)||null,u(p,g,x,b);case Xt:var k=x._init;return y(g,p,m,k(x._payload),b)}if(Xr(x)||Hr(x))return g=g.get(m)||null,c(p,g,x,b,null);io(p,x)}return null}function v(g,p,m,x){for(var b=null,k=null,P=p,E=p=0,R=null;P!==null&&E<m.length;E++){P.index>E?(R=P,P=null):R=P.sibling;var N=f(g,P,m[E],x);if(N===null){P===null&&(P=R);break}e&&P&&N.alternate===null&&t(g,P),p=o(N,p,E),k===null?b=N:k.sibling=N,k=N,P=R}if(E===m.length)return n(g,P),ue&&bn(g,E),b;if(P===null){for(;E<m.length;E++)P=d(g,m[E],x),P!==null&&(p=o(P,p,E),k===null?b=P:k.sibling=P,k=P);return ue&&bn(g,E),b}for(P=r(g,P);E<m.length;E++)R=y(P,g,E,m[E],x),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?E:R.key),p=o(R,p,E),k===null?b=R:k.sibling=R,k=R);return e&&P.forEach(function(F){return t(g,F)}),ue&&bn(g,E),b}function w(g,p,m,x){var b=Hr(m);if(typeof b!="function")throw Error(_(150));if(m=b.call(m),m==null)throw Error(_(151));for(var k=b=null,P=p,E=p=0,R=null,N=m.next();P!==null&&!N.done;E++,N=m.next()){P.index>E?(R=P,P=null):R=P.sibling;var F=f(g,P,N.value,x);if(F===null){P===null&&(P=R);break}e&&P&&F.alternate===null&&t(g,P),p=o(F,p,E),k===null?b=F:k.sibling=F,k=F,P=R}if(N.done)return n(g,P),ue&&bn(g,E),b;if(P===null){for(;!N.done;E++,N=m.next())N=d(g,N.value,x),N!==null&&(p=o(N,p,E),k===null?b=N:k.sibling=N,k=N);return ue&&bn(g,E),b}for(P=r(g,P);!N.done;E++,N=m.next())N=y(P,g,E,N.value,x),N!==null&&(e&&N.alternate!==null&&P.delete(N.key===null?E:N.key),p=o(N,p,E),k===null?b=N:k.sibling=N,k=N);return e&&P.forEach(function(U){return t(g,U)}),ue&&bn(g,E),b}function $(g,p,m,x){if(typeof m=="object"&&m!==null&&m.type===Yn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Gi:e:{for(var b=m.key,k=p;k!==null;){if(k.key===b){if(b=m.type,b===Yn){if(k.tag===7){n(g,k.sibling),p=i(k,m.props.children),p.return=g,g=p;break e}}else if(k.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Xt&&Fd(b)===k.type){n(g,k.sibling),p=i(k,m.props),p.ref=Vr(g,k,m),p.return=g,g=p;break e}n(g,k);break}else t(g,k);k=k.sibling}m.type===Yn?(p=Ln(m.props.children,g.mode,x,m.key),p.return=g,g=p):(x=Po(m.type,m.key,m.props,null,g.mode,x),x.ref=Vr(g,p,m),x.return=g,g=x)}return a(g);case Qn:e:{for(k=m.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Ts(m,g.mode,x),p.return=g,g=p}return a(g);case Xt:return k=m._init,$(g,p,k(m._payload),x)}if(Xr(m))return v(g,p,m,x);if(Hr(m))return w(g,p,m,x);io(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=Ls(m,g.mode,x),p.return=g,g=p),a(g)):n(g,p)}return $}var xr=lg(!0),ug=lg(!1),Ui={},Pt=wn(Ui),$i=wn(Ui),Ci=wn(Ui);function On(e){if(e===Ui)throw Error(_(174));return e}function ac(e,t){switch(ie(Ci,t),ie($i,e),ie(Pt,Ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cl(t,e)}se(Pt),ie(Pt,t)}function Sr(){se(Pt),se($i),se(Ci)}function cg(e){On(Ci.current);var t=On(Pt.current),n=cl(t,e.type);t!==n&&(ie($i,e),ie(Pt,n))}function sc(e){$i.current===e&&(se(Pt),se($i))}var de=wn(0);function Ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $s=[];function lc(){for(var e=0;e<$s.length;e++)$s[e]._workInProgressVersionPrimary=null;$s.length=0}var bo=Wt.ReactCurrentDispatcher,Cs=Wt.ReactCurrentBatchConfig,zn=0,fe=null,xe=null,ke=null,Qo=!1,ai=!1,Oi=0,D0=0;function _e(){throw Error(_(321))}function uc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function cc(e,t,n,r,i,o){if(zn=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bo.current=e===null||e.memoizedState===null?U0:B0,e=n(r,i),ai){o=0;do{if(ai=!1,Oi=0,25<=o)throw Error(_(301));o+=1,ke=xe=null,t.updateQueue=null,bo.current=W0,e=n(r,i)}while(ai)}if(bo.current=Yo,t=xe!==null&&xe.next!==null,zn=0,ke=xe=fe=null,Qo=!1,t)throw Error(_(300));return e}function dc(){var e=Oi!==0;return Oi=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?fe.memoizedState=ke=e:ke=ke.next=e,ke}function st(){if(xe===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=ke===null?fe.memoizedState:ke.next;if(t!==null)ke=t,xe=e;else{if(e===null)throw Error(_(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},ke===null?fe.memoizedState=ke=e:ke=ke.next=e}return ke}function Pi(e,t){return typeof t=="function"?t(e):t}function Os(e){var t=st(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=xe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((zn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,fe.lanes|=c,Mn|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,wt(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,fe.lanes|=o,Mn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ps(e){var t=st(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);wt(o,t.memoizedState)||(We=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function dg(){}function fg(e,t){var n=fe,r=st(),i=t(),o=!wt(r.memoizedState,i);if(o&&(r.memoizedState=i,We=!0),r=r.queue,fc(gg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Ei(9,hg.bind(null,n,r,i,t),void 0,null),Ce===null)throw Error(_(349));zn&30||pg(n,t,i)}return i}function pg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hg(e,t,n,r){t.value=n,t.getSnapshot=r,mg(t)&&vg(e)}function gg(e,t,n){return n(function(){mg(t)&&vg(e)})}function mg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function vg(e){var t=Ut(e,1);t!==null&&vt(t,e,1,-1)}function Hd(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},t.queue=e,e=e.dispatch=H0.bind(null,fe,e),[t.memoizedState,e]}function Ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yg(){return st().memoizedState}function ko(e,t,n,r){var i=bt();fe.flags|=e,i.memoizedState=Ei(1|t,n,void 0,r===void 0?null:r)}function Na(e,t,n,r){var i=st();r=r===void 0?null:r;var o=void 0;if(xe!==null){var a=xe.memoizedState;if(o=a.destroy,r!==null&&uc(r,a.deps)){i.memoizedState=Ei(t,n,o,r);return}}fe.flags|=e,i.memoizedState=Ei(1|t,n,o,r)}function Ud(e,t){return ko(8390656,8,e,t)}function fc(e,t){return Na(2048,8,e,t)}function wg(e,t){return Na(4,2,e,t)}function xg(e,t){return Na(4,4,e,t)}function Sg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bg(e,t,n){return n=n!=null?n.concat([e]):null,Na(4,4,Sg.bind(null,t,e),n)}function pc(){}function kg(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $g(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cg(e,t,n){return zn&21?(wt(n,t)||(n=Eh(),fe.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function A0(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=Cs.transition;Cs.transition={};try{e(!1),t()}finally{ne=n,Cs.transition=r}}function Og(){return st().memoizedState}function F0(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pg(e))Eg(t,n);else if(n=ig(e,t,n,r),n!==null){var i=Ae();vt(n,e,r,i),jg(n,t,r)}}function H0(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pg(e))Eg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,wt(s,a)){var l=t.interleaved;l===null?(i.next=i,ic(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ig(e,t,i,r),n!==null&&(i=Ae(),vt(n,e,r,i),jg(n,t,r))}}function Pg(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Eg(e,t){ai=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wu(e,n)}}var Yo={readContext:at,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},U0={readContext:at,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Ud,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ko(4194308,4,Sg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return ko(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=F0.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:Hd,useDebugValue:pc,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=Hd(!1),t=e[0];return e=A0.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=bt();if(ue){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Ce===null)throw Error(_(349));zn&30||pg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ud(gg.bind(null,r,o,e),[e]),r.flags|=2048,Ei(9,hg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bt(),t=Ce.identifierPrefix;if(ue){var n=Mt,r=zt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=D0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B0={readContext:at,useCallback:kg,useContext:at,useEffect:fc,useImperativeHandle:bg,useInsertionEffect:wg,useLayoutEffect:xg,useMemo:$g,useReducer:Os,useRef:yg,useState:function(){return Os(Pi)},useDebugValue:pc,useDeferredValue:function(e){var t=st();return Cg(t,xe.memoizedState,e)},useTransition:function(){var e=Os(Pi)[0],t=st().memoizedState;return[e,t]},useMutableSource:dg,useSyncExternalStore:fg,useId:Og,unstable_isNewReconciler:!1},W0={readContext:at,useCallback:kg,useContext:at,useEffect:fc,useImperativeHandle:bg,useInsertionEffect:wg,useLayoutEffect:xg,useMemo:$g,useReducer:Ps,useRef:yg,useState:function(){return Ps(Pi)},useDebugValue:pc,useDeferredValue:function(e){var t=st();return xe===null?t.memoizedState=e:Cg(t,xe.memoizedState,e)},useTransition:function(){var e=Ps(Pi)[0],t=st().memoizedState;return[e,t]},useMutableSource:dg,useSyncExternalStore:fg,useId:Og,unstable_isNewReconciler:!1};function br(e,t){try{var n="",r=t;do n+=yy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var q0=typeof WeakMap=="function"?WeakMap:Map;function Lg(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jo||(Jo=!0,Bl=r),Rl(e,t)},n}function Tg(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Rl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Rl(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Bd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new q0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ow.bind(null,e,t,n),t.then(e,e))}function Wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var V0=Wt.ReactCurrentOwner,We=!1;function De(e,t,n,r){t.child=e===null?ug(t,null,n,r):xr(t,e.child,n,r)}function Vd(e,t,n,r,i){n=n.render;var o=t.ref;return hr(t,i),r=cc(e,t,n,r,o,i),n=dc(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(ue&&n&&Ju(t),t.flags|=1,De(e,t,r,i),t.child)}function Gd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Sc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_g(e,t,o,r,i)):(e=Po(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:xi,n(a,r)&&e.ref===t.ref)return Bt(e,t,i)}return t.flags|=1,e=hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function _g(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(xi(o,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Bt(e,t,i)}return Nl(e,t,n,r,i)}function Rg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(ar,Ye),Ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(ar,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ie(ar,Ye),Ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ie(ar,Ye),Ye|=r;return De(e,t,i,n),t.child}function Ng(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Nl(e,t,n,r,i){var o=Ve(n)?Nn:ze.current;return o=yr(t,o),hr(t,i),n=cc(e,t,n,r,o,i),r=dc(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(ue&&r&&Ju(t),t.flags|=1,De(e,t,n,i),t.child)}function Kd(e,t,n,r,i){if(Ve(n)){var o=!0;Uo(t)}else o=!1;if(hr(t,i),t.stateNode===null)$o(e,t),sg(t,n,r),_l(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Ve(n)?Nn:ze.current,u=yr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Ad(t,a,r,u),Jt=!1;var f=t.memoizedState;a.state=f,Go(t,r,a,i),l=t.memoizedState,s!==r||f!==l||qe.current||Jt?(typeof c=="function"&&(Tl(t,n,c,r),l=t.memoizedState),(s=Jt||Dd(t,n,s,r,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,og(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ft(t.type,s),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=at(l):(l=Ve(n)?Nn:ze.current,l=yr(t,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||f!==l)&&Ad(t,a,r,l),Jt=!1,f=t.memoizedState,a.state=f,Go(t,r,a,i);var v=t.memoizedState;s!==d||f!==v||qe.current||Jt?(typeof y=="function"&&(Tl(t,n,y,r),v=t.memoizedState),(u=Jt||Dd(t,n,u,r,f,v,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,o,i)}function Il(e,t,n,r,i,o){Ng(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Rd(t,n,!1),Bt(e,t,o);r=t.stateNode,V0.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=xr(t,e.child,null,o),t.child=xr(t,null,s,o)):De(e,t,s,o),t.memoizedState=r.state,i&&Rd(t,n,!0),t.child}function Ig(e){var t=e.stateNode;t.pendingContext?_d(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_d(e,t.context,!1),ac(e,t.containerInfo)}function Qd(e,t,n,r,i){return wr(),ec(i),t.flags|=256,De(e,t,n,r),t.child}var zl={dehydrated:null,treeContext:null,retryLane:0};function Ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function zg(e,t,n){var r=t.pendingProps,i=de.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(de,i&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ma(a,r,0,null),e=Ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ml(n),t.memoizedState=zl,e):hc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return G0(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=hn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=hn(s,o):(o=Ln(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ml(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=zl,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hc(e,t){return t=Ma({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oo(e,t,n,r){return r!==null&&ec(r),xr(t,e.child,null,n),e=hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function G0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Es(Error(_(422))),oo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ma({mode:"visible",children:r.children},i,0,null),o=Ln(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&xr(t,e.child,null,a),t.child.memoizedState=Ml(a),t.memoizedState=zl,o);if(!(t.mode&1))return oo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(_(419)),r=Es(o,r,void 0),oo(e,t,a,r)}if(s=(a&e.childLanes)!==0,We||s){if(r=Ce,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ut(e,i),vt(r,e,i,-1))}return xc(),r=Es(Error(_(421))),oo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=aw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Xe=cn(i.nextSibling),Je=t,ue=!0,ht=null,e!==null&&(nt[rt++]=zt,nt[rt++]=Mt,nt[rt++]=In,zt=e.id,Mt=e.overflow,In=t),t=hc(t,r.children),t.flags|=4096,t)}function Yd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function js(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Mg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(De(e,t,r.children,n),r=de.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yd(e,n,t);else if(e.tag===19)Yd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(de,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ko(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),js(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ko(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}js(t,!0,n,null,o);break;case"together":js(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $o(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function K0(e,t,n){switch(t.tag){case 3:Ig(t),wr();break;case 5:cg(t);break;case 1:Ve(t.type)&&Uo(t);break;case 4:ac(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(qo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(de,de.current&1),t.flags|=128,null):n&t.child.childLanes?zg(e,t,n):(ie(de,de.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);ie(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,Rg(e,t,n)}return Bt(e,t,n)}var Dg,Dl,Ag,Fg;Dg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dl=function(){};Ag=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,On(Pt.current);var o=null;switch(n){case"input":i=al(e,i),r=al(e,r),o=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),o=[];break;case"textarea":i=ul(e,i),r=ul(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fo)}dl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(pi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(pi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&oe("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Fg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Q0(e,t,n){var r=t.pendingProps;switch(Zu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Ve(t.type)&&Ho(),Re(t),null;case 3:return r=t.stateNode,Sr(),se(qe),se(ze),lc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Vl(ht),ht=null))),Dl(e,t),Re(t),null;case 5:sc(t);var i=On(Ci.current);if(n=t.type,e!==null&&t.stateNode!=null)Ag(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Re(t),null}if(e=On(Pt.current),ro(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$t]=t,r[ki]=o,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<Zr.length;i++)oe(Zr[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":od(r,o),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},oe("invalid",r);break;case"textarea":sd(r,o),oe("invalid",r)}dl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&no(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&no(r.textContent,s,e),i=["children",""+s]):pi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&oe("scroll",r)}switch(n){case"input":Ki(r),ad(r,o,!0);break;case"textarea":Ki(r),ld(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ph(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[$t]=t,e[ki]=r,Dg(e,t,!1,!1),t.stateNode=e;e:{switch(a=fl(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zr.length;i++)oe(Zr[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":od(e,r),i=al(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":sd(e,r),i=ul(e,r),oe("invalid",e);break;default:i=r}dl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?mh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&hi(e,l):typeof l=="number"&&hi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(pi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&oe("scroll",e):l!=null&&Du(e,o,l,a))}switch(n){case"input":Ki(e),ad(e,r,!1);break;case"textarea":Ki(e),ld(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Fg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=On(Ci.current),On(Pt.current),ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(o=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:no(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return Re(t),null;case 13:if(se(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Xe!==null&&t.mode&1&&!(t.flags&128))rg(),wr(),t.flags|=98560,o=!1;else if(o=ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[$t]=t}else wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),o=!1}else ht!==null&&(Vl(ht),ht=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?Se===0&&(Se=3):xc())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return Sr(),Dl(e,t),e===null&&Si(t.stateNode.containerInfo),Re(t),null;case 10:return rc(t.type._context),Re(t),null;case 17:return Ve(t.type)&&Ho(),Re(t),null;case 19:if(se(de),o=t.memoizedState,o===null)return Re(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Gr(o,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ko(e),a!==null){for(t.flags|=128,Gr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(de,de.current&1|2),t.child}e=e.sibling}o.tail!==null&&me()>kr&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ko(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ue)return Re(t),null}else 2*me()-o.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=me(),t.sibling=null,n=de.current,ie(de,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return wc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Y0(e,t){switch(Zu(t),t.tag){case 1:return Ve(t.type)&&Ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),se(qe),se(ze),lc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return sc(t),null;case 13:if(se(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(de),null;case 4:return Sr(),null;case 10:return rc(t.type._context),null;case 22:case 23:return wc(),null;case 24:return null;default:return null}}var ao=!1,Ne=!1,X0=typeof WeakSet=="function"?WeakSet:Set,D=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Al(e,t,n){try{n()}catch(r){ge(e,t,r)}}var Xd=!1;function J0(e,t){if(bl=Mo,e=Wh(),Xu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++c===r&&(l=a),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kl={focusedElem:e,selectionRange:n},Mo=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,$=v.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:ft(t.type,w),$);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(x){ge(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return v=Xd,Xd=!1,v}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Al(t,n,o)}i=i.next}while(i!==r)}}function Ia(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hg(e){var t=e.alternate;t!==null&&(e.alternate=null,Hg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[ki],delete t[Ol],delete t[N0],delete t[I0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ug(e){return e.tag===5||e.tag===3||e.tag===4}function Jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ug(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fo));else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}var je=null,pt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Bg(e,t,n),n=n.sibling}function Bg(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Pa,n)}catch{}switch(n.tag){case 5:Ne||or(n,t);case 6:var r=je,i=pt;je=null,Qt(e,t,n),je=r,pt=i,je!==null&&(pt?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(pt?(e=je,n=n.stateNode,e.nodeType===8?bs(e.parentNode,n):e.nodeType===1&&bs(e,n),yi(e)):bs(je,n.stateNode));break;case 4:r=je,i=pt,je=n.stateNode.containerInfo,pt=!0,Qt(e,t,n),je=r,pt=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Al(n,t,a),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!Ne&&(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ge(n,t,s)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,Qt(e,t,n),Ne=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new X0),t.forEach(function(r){var i=sw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:je=s.stateNode,pt=!1;break e;case 3:je=s.stateNode.containerInfo,pt=!0;break e;case 4:je=s.stateNode.containerInfo,pt=!0;break e}s=s.return}if(je===null)throw Error(_(160));Bg(o,a,i),je=null,pt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wg(t,e),t=t.sibling}function Wg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),St(e),r&4){try{si(3,e,e.return),Ia(3,e)}catch(w){ge(e,e.return,w)}try{si(5,e,e.return)}catch(w){ge(e,e.return,w)}}break;case 1:dt(t,e),St(e),r&512&&n!==null&&or(n,n.return);break;case 5:if(dt(t,e),St(e),r&512&&n!==null&&or(n,n.return),e.flags&32){var i=e.stateNode;try{hi(i,"")}catch(w){ge(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&dh(i,o),fl(s,a);var u=fl(s,o);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?mh(i,d):c==="dangerouslySetInnerHTML"?hh(i,d):c==="children"?hi(i,d):Du(i,c,d,u)}switch(s){case"input":sl(i,o);break;case"textarea":fh(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?cr(i,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?cr(i,!!o.multiple,o.defaultValue,!0):cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ki]=o}catch(w){ge(e,e.return,w)}}break;case 6:if(dt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ge(e,e.return,w)}}break;case 3:if(dt(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yi(t.containerInfo)}catch(w){ge(e,e.return,w)}break;case 4:dt(t,e),St(e);break;case 13:dt(t,e),St(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(vc=me())),r&4&&Zd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(u=Ne)||c,dt(t,e),Ne=u):dt(t,e),St(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(D=e,c=e.child;c!==null;){for(d=D=c;D!==null;){switch(f=D,y=f.child,f.tag){case 0:case 11:case 14:case 15:si(4,f,f.return);break;case 1:or(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ge(r,n,w)}}break;case 5:or(f,f.return);break;case 22:if(f.memoizedState!==null){tf(d);continue}}y!==null?(y.return=f,D=y):tf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=gh("display",a))}catch(w){ge(e,e.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ge(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:dt(t,e),St(e),r&4&&Zd(e);break;case 21:break;default:dt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ug(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hi(i,""),r.flags&=-33);var o=Jd(e);Ul(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Jd(e);Hl(e,s,a);break;default:throw Error(_(161))}}catch(l){ge(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Z0(e,t,n){D=e,qg(e)}function qg(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ao;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ne;s=ao;var u=Ne;if(ao=a,(Ne=l)&&!u)for(D=i;D!==null;)a=D,l=a.child,a.tag===22&&a.memoizedState!==null?nf(i):l!==null?(l.return=a,D=l):nf(i);for(;o!==null;)D=o,qg(o),o=o.sibling;D=i,ao=s,Ne=u}ef(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,D=o):ef(e)}}function ef(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||Ia(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Md(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Md(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&yi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ne||t.flags&512&&Fl(t)}catch(f){ge(t,t.return,f)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function tf(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function nf(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ia(4,t)}catch(l){ge(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ge(t,i,l)}}var o=t.return;try{Fl(t)}catch(l){ge(t,o,l)}break;case 5:var a=t.return;try{Fl(t)}catch(l){ge(t,a,l)}}}catch(l){ge(t,t.return,l)}if(t===e){D=null;break}var s=t.sibling;if(s!==null){s.return=t.return,D=s;break}D=t.return}}var ew=Math.ceil,Xo=Wt.ReactCurrentDispatcher,gc=Wt.ReactCurrentOwner,ot=Wt.ReactCurrentBatchConfig,ee=0,Ce=null,we=null,Le=0,Ye=0,ar=wn(0),Se=0,ji=null,Mn=0,za=0,mc=0,li=null,Be=null,vc=0,kr=1/0,Rt=null,Jo=!1,Bl=null,fn=null,so=!1,on=null,Zo=0,ui=0,Wl=null,Co=-1,Oo=0;function Ae(){return ee&6?me():Co!==-1?Co:Co=me()}function pn(e){return e.mode&1?ee&2&&Le!==0?Le&-Le:M0.transition!==null?(Oo===0&&(Oo=Eh()),Oo):(e=ne,e!==0||(e=window.event,e=e===void 0?16:Ih(e.type)),e):1}function vt(e,t,n,r){if(50<ui)throw ui=0,Wl=null,Error(_(185));Ai(e,n,r),(!(ee&2)||e!==Ce)&&(e===Ce&&(!(ee&2)&&(za|=n),Se===4&&tn(e,Le)),Ge(e,r),n===1&&ee===0&&!(t.mode&1)&&(kr=me()+500,_a&&xn()))}function Ge(e,t){var n=e.callbackNode;My(e,t);var r=zo(e,e===Ce?Le:0);if(r===0)n!==null&&dd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dd(n),t===1)e.tag===0?z0(rf.bind(null,e)):eg(rf.bind(null,e)),_0(function(){!(ee&6)&&xn()}),n=null;else{switch(jh(r)){case 1:n=Bu;break;case 4:n=Oh;break;case 16:n=Io;break;case 536870912:n=Ph;break;default:n=Io}n=Zg(n,Vg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vg(e,t){if(Co=-1,Oo=0,ee&6)throw Error(_(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=zo(e,e===Ce?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ea(e,r);else{t=r;var i=ee;ee|=2;var o=Kg();(Ce!==e||Le!==t)&&(Rt=null,kr=me()+500,jn(e,t));do try{rw();break}catch(s){Gg(e,s)}while(1);nc(),Xo.current=o,ee=i,we!==null?t=0:(Ce=null,Le=0,t=Se)}if(t!==0){if(t===2&&(i=vl(e),i!==0&&(r=i,t=ql(e,i))),t===1)throw n=ji,jn(e,0),tn(e,r),Ge(e,me()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!tw(i)&&(t=ea(e,r),t===2&&(o=vl(e),o!==0&&(r=o,t=ql(e,o))),t===1))throw n=ji,jn(e,0),tn(e,r),Ge(e,me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:kn(e,Be,Rt);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=vc+500-me(),10<t)){if(zo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Cl(kn.bind(null,e,Be,Rt),t);break}kn(e,Be,Rt);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-mt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ew(r/1960))-r,10<r){e.timeoutHandle=Cl(kn.bind(null,e,Be,Rt),r);break}kn(e,Be,Rt);break;case 5:kn(e,Be,Rt);break;default:throw Error(_(329))}}}return Ge(e,me()),e.callbackNode===n?Vg.bind(null,e):null}function ql(e,t){var n=li;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=ea(e,t),e!==2&&(t=Be,Be=n,t!==null&&Vl(t)),e}function Vl(e){Be===null?Be=e:Be.push.apply(Be,e)}function tw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~mc,t&=~za,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function rf(e){if(ee&6)throw Error(_(327));gr();var t=zo(e,0);if(!(t&1))return Ge(e,me()),null;var n=ea(e,t);if(e.tag!==0&&n===2){var r=vl(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=ji,jn(e,0),tn(e,t),Ge(e,me()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Be,Rt),Ge(e,me()),null}function yc(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(kr=me()+500,_a&&xn())}}function Dn(e){on!==null&&on.tag===0&&!(ee&6)&&gr();var t=ee;ee|=1;var n=ot.transition,r=ne;try{if(ot.transition=null,ne=1,e)return e()}finally{ne=r,ot.transition=n,ee=t,!(ee&6)&&xn()}}function wc(){Ye=ar.current,se(ar)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,T0(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Zu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ho();break;case 3:Sr(),se(qe),se(ze),lc();break;case 5:sc(r);break;case 4:Sr();break;case 13:se(de);break;case 19:se(de);break;case 10:rc(r.type._context);break;case 22:case 23:wc()}n=n.return}if(Ce=e,we=e=hn(e.current,null),Le=Ye=t,Se=0,ji=null,mc=za=Mn=0,Be=li=null,Cn!==null){for(t=0;t<Cn.length;t++)if(n=Cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Cn=null}return e}function Gg(e,t){do{var n=we;try{if(nc(),bo.current=Yo,Qo){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qo=!1}if(zn=0,ke=xe=fe=null,ai=!1,Oi=0,gc.current=null,n===null||n.return===null){Se=1,ji=t,we=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Le,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Wd(a);if(y!==null){y.flags&=-257,qd(y,a,s,o,t),y.mode&1&&Bd(o,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Bd(o,u,t),xc();break e}l=Error(_(426))}}else if(ue&&s.mode&1){var $=Wd(a);if($!==null){!($.flags&65536)&&($.flags|=256),qd($,a,s,o,t),ec(br(l,s));break e}}o=l=br(l,s),Se!==4&&(Se=2),li===null?li=[o]:li.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Lg(o,l,t);zd(o,g);break e;case 1:s=l;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(fn===null||!fn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Tg(o,s,t);zd(o,x);break e}}o=o.return}while(o!==null)}Yg(n)}catch(b){t=b,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function Kg(){var e=Xo.current;return Xo.current=Yo,e===null?Yo:e}function xc(){(Se===0||Se===3||Se===2)&&(Se=4),Ce===null||!(Mn&268435455)&&!(za&268435455)||tn(Ce,Le)}function ea(e,t){var n=ee;ee|=2;var r=Kg();(Ce!==e||Le!==t)&&(Rt=null,jn(e,t));do try{nw();break}catch(i){Gg(e,i)}while(1);if(nc(),ee=n,Xo.current=r,we!==null)throw Error(_(261));return Ce=null,Le=0,Se}function nw(){for(;we!==null;)Qg(we)}function rw(){for(;we!==null&&!Ey();)Qg(we)}function Qg(e){var t=Jg(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?Yg(e):we=t,gc.current=null}function Yg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Y0(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,we=null;return}}else if(n=Q0(n,t,Ye),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Se===0&&(Se=5)}function kn(e,t,n){var r=ne,i=ot.transition;try{ot.transition=null,ne=1,iw(e,t,n,r)}finally{ot.transition=i,ne=r}return null}function iw(e,t,n,r){do gr();while(on!==null);if(ee&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Dy(e,o),e===Ce&&(we=Ce=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||so||(so=!0,Zg(Io,function(){return gr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ot.transition,ot.transition=null;var a=ne;ne=1;var s=ee;ee|=4,gc.current=null,J0(e,n),Wg(n,e),$0(kl),Mo=!!bl,kl=bl=null,e.current=n,Z0(n),jy(),ee=s,ne=a,ot.transition=o}else e.current=n;if(so&&(so=!1,on=e,Zo=i),o=e.pendingLanes,o===0&&(fn=null),_y(n.stateNode),Ge(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jo)throw Jo=!1,e=Bl,Bl=null,e;return Zo&1&&e.tag!==0&&gr(),o=e.pendingLanes,o&1?e===Wl?ui++:(ui=0,Wl=e):ui=0,xn(),null}function gr(){if(on!==null){var e=jh(Zo),t=ot.transition,n=ne;try{if(ot.transition=null,ne=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,Zo=0,ee&6)throw Error(_(331));var i=ee;for(ee|=4,D=e.current;D!==null;){var o=D,a=o.child;if(D.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:si(8,c,o)}var d=c.child;if(d!==null)d.return=c,D=d;else for(;D!==null;){c=D;var f=c.sibling,y=c.return;if(Hg(c),c===u){D=null;break}if(f!==null){f.return=y,D=f;break}D=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var $=w.sibling;w.sibling=null,w=$}while(w!==null)}}D=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,D=a;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:si(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,D=g;break e}D=o.return}}var p=e.current;for(D=p;D!==null;){a=D;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,D=m;else e:for(a=p;D!==null;){if(s=D,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ia(9,s)}}catch(b){ge(s,s.return,b)}if(s===a){D=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,D=x;break e}D=s.return}}if(ee=i,xn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Pa,e)}catch{}r=!0}return r}finally{ne=n,ot.transition=t}}return!1}function of(e,t,n){t=br(n,t),t=Lg(e,t,1),e=dn(e,t,1),t=Ae(),e!==null&&(Ai(e,1,t),Ge(e,t))}function ge(e,t,n){if(e.tag===3)of(e,e,n);else for(;t!==null;){if(t.tag===3){of(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=br(n,e),e=Tg(t,e,1),t=dn(t,e,1),e=Ae(),t!==null&&(Ai(t,1,e),Ge(t,e));break}}t=t.return}}function ow(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Le&n)===n&&(Se===4||Se===3&&(Le&130023424)===Le&&500>me()-vc?jn(e,0):mc|=n),Ge(e,t)}function Xg(e,t){t===0&&(e.mode&1?(t=Xi,Xi<<=1,!(Xi&130023424)&&(Xi=4194304)):t=1);var n=Ae();e=Ut(e,t),e!==null&&(Ai(e,t,n),Ge(e,n))}function aw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xg(e,n)}function sw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Xg(e,n)}var Jg;Jg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,K0(e,t,n);We=!!(e.flags&131072)}else We=!1,ue&&t.flags&1048576&&tg(t,Wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$o(e,t),e=t.pendingProps;var i=yr(t,ze.current);hr(t,n),i=cc(null,t,r,e,i,n);var o=dc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(o=!0,Uo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,oc(t),i.updater=Ra,t.stateNode=i,i._reactInternals=t,_l(t,r,e,n),t=Il(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&Ju(t),De(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($o(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=uw(r),e=ft(r,e),i){case 0:t=Nl(null,t,r,e,n);break e;case 1:t=Kd(null,t,r,e,n);break e;case 11:t=Vd(null,t,r,e,n);break e;case 14:t=Gd(null,t,r,ft(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Nl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Kd(e,t,r,i,n);case 3:e:{if(Ig(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,og(e,t),Go(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=br(Error(_(423)),t),t=Qd(e,t,r,n,i);break e}else if(r!==i){i=br(Error(_(424)),t),t=Qd(e,t,r,n,i);break e}else for(Xe=cn(t.stateNode.containerInfo.firstChild),Je=t,ue=!0,ht=null,n=ug(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),r===i){t=Bt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return cg(t),e===null&&jl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,$l(r,i)?a=null:o!==null&&$l(r,o)&&(t.flags|=32),Ng(e,t),De(e,t,a,n),t.child;case 6:return e===null&&jl(t),null;case 13:return zg(e,t,n);case 4:return ac(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xr(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Vd(e,t,r,i,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ie(qo,r._currentValue),r._currentValue=a,o!==null)if(wt(o.value,a)){if(o.children===i.children&&!qe.current){t=Bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Dt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ll(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(_(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ll(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}De(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hr(t,n),i=at(i),r=r(i),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,i=ft(r,t.pendingProps),i=ft(r.type,i),Gd(e,t,r,i,n);case 15:return _g(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),$o(e,t),t.tag=1,Ve(r)?(e=!0,Uo(t)):e=!1,hr(t,n),sg(t,r,i),_l(t,r,i,n),Il(null,t,r,!0,e,n);case 19:return Mg(e,t,n);case 22:return Rg(e,t,n)}throw Error(_(156,t.tag))};function Zg(e,t){return Ch(e,t)}function lw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new lw(e,t,n,r)}function Sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uw(e){if(typeof e=="function")return Sc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fu)return 11;if(e===Hu)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Po(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Sc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Yn:return Ln(n.children,i,o,t);case Au:a=8,i|=8;break;case nl:return e=it(12,n,t,i|2),e.elementType=nl,e.lanes=o,e;case rl:return e=it(13,n,t,i),e.elementType=rl,e.lanes=o,e;case il:return e=it(19,n,t,i),e.elementType=il,e.lanes=o,e;case lh:return Ma(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ah:a=10;break e;case sh:a=9;break e;case Fu:a=11;break e;case Hu:a=14;break e;case Xt:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=it(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ln(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function Ma(e,t,n,r){return e=it(22,e,r,t),e.elementType=lh,e.lanes=n,e.stateNode={isHidden:!1},e}function Ls(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Ts(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ds(0),this.expirationTimes=ds(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ds(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bc(e,t,n,r,i,o,a,s,l){return e=new cw(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=it(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oc(o),e}function dw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function em(e){if(!e)return vn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Zh(e,n,t)}return t}function tm(e,t,n,r,i,o,a,s,l){return e=bc(n,r,!0,e,i,o,a,s,l),e.context=em(null),n=e.current,r=Ae(),i=pn(n),o=Dt(r,i),o.callback=t??null,dn(n,o,i),e.current.lanes=i,Ai(e,i,r),Ge(e,r),e}function Da(e,t,n,r){var i=t.current,o=Ae(),a=pn(i);return n=em(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(i,t,a),e!==null&&(vt(e,i,a,o),So(e,i,a)),a}function ta(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kc(e,t){af(e,t),(e=e.alternate)&&af(e,t)}function fw(){return null}var nm=typeof reportError=="function"?reportError:function(e){console.error(e)};function $c(e){this._internalRoot=e}Aa.prototype.render=$c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Da(e,t,null,null)};Aa.prototype.unmount=$c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){Da(null,e,null,null)}),t[Ht]=null}};function Aa(e){this._internalRoot=e}Aa.prototype.unstable_scheduleHydration=function(e){if(e){var t=_h();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Nh(e)}};function Cc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sf(){}function pw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ta(a);o.call(u)}}var a=tm(t,r,e,0,null,!1,!1,"",sf);return e._reactRootContainer=a,e[Ht]=a.current,Si(e.nodeType===8?e.parentNode:e),Dn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ta(l);s.call(u)}}var l=bc(e,0,!1,null,null,!1,!1,"",sf);return e._reactRootContainer=l,e[Ht]=l.current,Si(e.nodeType===8?e.parentNode:e),Dn(function(){Da(t,l,n,r)}),l}function Ha(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ta(a);s.call(l)}}Da(t,a,e,i)}else a=pw(n,t,e,i,r);return ta(a)}Lh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(Wu(t,n|1),Ge(t,me()),!(ee&6)&&(kr=me()+500,xn()))}break;case 13:Dn(function(){var r=Ut(e,1);if(r!==null){var i=Ae();vt(r,e,1,i)}}),kc(e,1)}};qu=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Ae();vt(t,e,134217728,n)}kc(e,134217728)}};Th=function(e){if(e.tag===13){var t=pn(e),n=Ut(e,t);if(n!==null){var r=Ae();vt(n,e,t,r)}kc(e,t)}};_h=function(){return ne};Rh=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};hl=function(e,t,n){switch(t){case"input":if(sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ta(r);if(!i)throw Error(_(90));ch(r),sl(r,i)}}}break;case"textarea":fh(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};wh=yc;xh=Dn;var hw={usingClientEntryPoint:!1,Events:[Hi,er,Ta,vh,yh,yc]},Kr={findFiberByHostInstance:$n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gw={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kh(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Pa=lo.inject(gw),Ot=lo}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hw;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cc(t))throw Error(_(200));return dw(e,t,null,n)};et.createRoot=function(e,t){if(!Cc(e))throw Error(_(299));var n=!1,r="",i=nm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=bc(e,1,!1,null,null,n,!1,r,i),e[Ht]=t.current,Si(e.nodeType===8?e.parentNode:e),new $c(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=kh(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return Dn(e)};et.hydrate=function(e,t,n){if(!Fa(t))throw Error(_(200));return Ha(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!Cc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=nm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=tm(t,null,e,1,n??null,i,!1,o,a),e[Ht]=t.current,Si(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Aa(t)};et.render=function(e,t,n){if(!Fa(t))throw Error(_(200));return Ha(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!Fa(e))throw Error(_(40));return e._reactRootContainer?(Dn(function(){Ha(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1};et.unstable_batchedUpdates=yc;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fa(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ha(e,t,n,!1,r)};et.version="18.2.0-next-9e3b772b8-20220608";function rm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rm)}catch(e){console.error(e)}}rm(),th.exports=et;var mw=th.exports,lf=mw;el.createRoot=lf.createRoot,el.hydrateRoot=lf.hydrateRoot;var Ie=function(){return Ie=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ie.apply(this,arguments)};function $r(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ae="-ms-",ci="-moz-",te="-webkit-",im="comm",Ua="rule",Oc="decl",vw="@import",om="@keyframes",yw="@layer",ww=Math.abs,Pc=String.fromCharCode,Gl=Object.assign;function xw(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function am(e){return e.trim()}function Nt(e,t){return(e=t.exec(e))?e[0]:e}function G(e,t,n){return e.replace(t,n)}function Eo(e,t){return e.indexOf(t)}function $e(e,t){return e.charCodeAt(t)|0}function Cr(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function sm(e){return e.length}function ei(e,t){return t.push(e),e}function Sw(e,t){return e.map(t).join("")}function uf(e,t){return e.filter(function(n){return!Nt(n,t)})}var Ba=1,Or=1,lm=0,lt=0,ye=0,zr="";function Wa(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ba,column:Or,length:a,return:"",siblings:s}}function Yt(e,t){return Gl(Wa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qn(e){for(;e.root;)e=Yt(e.root,{children:[e]});ei(e,e.siblings)}function bw(){return ye}function kw(){return ye=lt>0?$e(zr,--lt):0,Or--,ye===10&&(Or=1,Ba--),ye}function yt(){return ye=lt<lm?$e(zr,lt++):0,Or++,ye===10&&(Or=1,Ba++),ye}function Tn(){return $e(zr,lt)}function jo(){return lt}function qa(e,t){return Cr(zr,e,t)}function Kl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $w(e){return Ba=Or=1,lm=kt(zr=e),lt=0,[]}function Cw(e){return zr="",e}function _s(e){return am(qa(lt-1,Ql(e===91?e+2:e===40?e+1:e)))}function Ow(e){for(;(ye=Tn())&&ye<33;)yt();return Kl(e)>2||Kl(ye)>3?"":" "}function Pw(e,t){for(;--t&&yt()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return qa(e,jo()+(t<6&&Tn()==32&&yt()==32))}function Ql(e){for(;yt();)switch(ye){case e:return lt;case 34:case 39:e!==34&&e!==39&&Ql(ye);break;case 40:e===41&&Ql(e);break;case 92:yt();break}return lt}function Ew(e,t){for(;yt()&&e+ye!==47+10;)if(e+ye===42+42&&Tn()===47)break;return"/*"+qa(t,lt-1)+"*"+Pc(e===47?e:yt())}function jw(e){for(;!Kl(Tn());)yt();return qa(e,lt)}function Lw(e){return Cw(Lo("",null,null,null,[""],e=$w(e),0,[0],e))}function Lo(e,t,n,r,i,o,a,s,l){for(var u=0,c=0,d=a,f=0,y=0,v=0,w=1,$=1,g=1,p=0,m="",x=i,b=o,k=r,P=m;$;)switch(v=p,p=yt()){case 40:if(v!=108&&$e(P,d-1)==58){Eo(P+=G(_s(p),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:P+=_s(p);break;case 9:case 10:case 13:case 32:P+=Ow(v);break;case 92:P+=Pw(jo()-1,7);continue;case 47:switch(Tn()){case 42:case 47:ei(Tw(Ew(yt(),jo()),t,n,l),l);break;default:P+="/"}break;case 123*w:s[u++]=kt(P)*g;case 125*w:case 59:case 0:switch(p){case 0:case 125:$=0;case 59+c:g==-1&&(P=G(P,/\f/g,"")),y>0&&kt(P)-d&&ei(y>32?df(P+";",r,n,d-1,l):df(G(P," ","")+";",r,n,d-2,l),l);break;case 59:P+=";";default:if(ei(k=cf(P,t,n,u,c,i,s,m,x=[],b=[],d,o),o),p===123)if(c===0)Lo(P,t,k,k,x,o,d,s,b);else switch(f===99&&$e(P,3)===110?100:f){case 100:case 108:case 109:case 115:Lo(e,k,k,r&&ei(cf(e,k,k,0,0,i,s,m,i,x=[],d,b),b),i,b,d,s,r?x:b);break;default:Lo(P,k,k,k,[""],b,0,s,b)}}u=c=y=0,w=g=1,m=P="",d=a;break;case 58:d=1+kt(P),y=v;default:if(w<1){if(p==123)--w;else if(p==125&&w++==0&&kw()==125)continue}switch(P+=Pc(p),p*w){case 38:g=c>0?1:(P+="\f",-1);break;case 44:s[u++]=(kt(P)-1)*g,g=1;break;case 64:Tn()===45&&(P+=_s(yt())),f=Tn(),c=d=kt(m=P+=jw(jo())),p++;break;case 45:v===45&&kt(P)==2&&(w=0)}}return o}function cf(e,t,n,r,i,o,a,s,l,u,c,d){for(var f=i-1,y=i===0?o:[""],v=sm(y),w=0,$=0,g=0;w<r;++w)for(var p=0,m=Cr(e,f+1,f=ww($=a[w])),x=e;p<v;++p)(x=am($>0?y[p]+" "+m:G(m,/&\f/g,y[p])))&&(l[g++]=x);return Wa(e,t,n,i===0?Ua:s,l,u,c,d)}function Tw(e,t,n,r){return Wa(e,t,n,im,Pc(bw()),Cr(e,2,-2),0,r)}function df(e,t,n,r,i){return Wa(e,t,n,Oc,Cr(e,0,r),Cr(e,r+1,-1),r,i)}function um(e,t,n){switch(xw(e,t)){case 5103:return te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+e+e;case 4789:return ci+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return te+e+ci+e+ae+e+e;case 5936:switch($e(e,t+11)){case 114:return te+e+ae+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return te+e+ae+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return te+e+ae+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return te+e+ae+e+e;case 6165:return te+e+ae+"flex-"+e+e;case 5187:return te+e+G(e,/(\w+).+(:[^]+)/,te+"box-$1$2"+ae+"flex-$1$2")+e;case 5443:return te+e+ae+"flex-item-"+G(e,/flex-|-self/g,"")+(Nt(e,/flex-|baseline/)?"":ae+"grid-row-"+G(e,/flex-|-self/g,""))+e;case 4675:return te+e+ae+"flex-line-pack"+G(e,/align-content|flex-|-self/g,"")+e;case 5548:return te+e+ae+G(e,"shrink","negative")+e;case 5292:return te+e+ae+G(e,"basis","preferred-size")+e;case 6060:return te+"box-"+G(e,"-grow","")+te+e+ae+G(e,"grow","positive")+e;case 4554:return te+G(e,/([^-])(transform)/g,"$1"+te+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+e+e;case 4200:if(!Nt(e,/flex-|baseline/))return ae+"grid-column-align"+Cr(e,t)+e;break;case 2592:case 3360:return ae+G(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Nt(r.props,/grid-\w+-end/)})?~Eo(e+(n=n[t].value),"span")?e:ae+G(e,"-start","")+e+ae+"grid-row-span:"+(~Eo(n,"span")?Nt(n,/\d+/):+Nt(n,/\d+/)-+Nt(e,/\d+/))+";":ae+G(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Nt(r.props,/grid-\w+-start/)})?e:ae+G(G(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+ci+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Eo(e,"stretch")?um(G(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return G(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return ae+i+":"+o+u+(a?ae+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if($e(e,t+6)===121)return G(e,":",":"+te)+e;break;case 6444:switch($e(e,$e(e,14)===45?18:11)){case 120:return G(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+te+($e(e,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+ae+"$2box$3")+e;case 100:return G(e,":",":"+ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(e,"scroll-","scroll-snap-")+e}return e}function na(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function _w(e,t,n,r){switch(e.type){case yw:if(e.children.length)break;case vw:case Oc:return e.return=e.return||e.value;case im:return"";case om:return e.return=e.value+"{"+na(e.children,r)+"}";case Ua:if(!kt(e.value=e.props.join(",")))return""}return kt(n=na(e.children,r))?e.return=e.value+"{"+n+"}":""}function Rw(e){var t=sm(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function Nw(e){return function(t){t.root||(t=t.return)&&e(t)}}function Iw(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Oc:e.return=um(e.value,e.length,n);return;case om:return na([Yt(e,{value:G(e.value,"@","@"+te)})],r);case Ua:if(e.length)return Sw(n=e.props,function(i){switch(Nt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qn(Yt(e,{props:[G(i,/:(read-\w+)/,":"+ci+"$1")]})),qn(Yt(e,{props:[i]})),Gl(e,{props:uf(n,r)});break;case"::placeholder":qn(Yt(e,{props:[G(i,/:(plac\w+)/,":"+te+"input-$1")]})),qn(Yt(e,{props:[G(i,/:(plac\w+)/,":"+ci+"$1")]})),qn(Yt(e,{props:[G(i,/:(plac\w+)/,ae+"input-$1")]})),qn(Yt(e,{props:[i]})),Gl(e,{props:uf(n,r)});break}return""})}}var zw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ec=typeof window<"u"&&"HTMLElement"in window,Mw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Dw={},jc=Object.freeze([]),Er=Object.freeze({});function cm(e,t,n){return n===void 0&&(n=Er),e.theme!==n.theme&&e.theme||t||n.theme}var dm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Aw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Fw=/(^-|-$)/g;function ff(e){return e.replace(Aw,"-").replace(Fw,"")}var Hw=/(a)(d)/gi,pf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Yl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=pf(t%52)+n;return(pf(t%52)+n).replace(Hw,"$1-$2")}var Rs,sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},fm=function(e){return sr(5381,e)};function Lc(e){return Yl(fm(e)>>>0)}function Uw(e){return e.displayName||e.name||"Component"}function Ns(e){return typeof e=="string"&&!0}var pm=typeof Symbol=="function"&&Symbol.for,hm=pm?Symbol.for("react.memo"):60115,Bw=pm?Symbol.for("react.forward_ref"):60112,Ww={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vw=((Rs={})[Bw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rs[hm]=gm,Rs);function hf(e){return("type"in(t=e)&&t.type.$$typeof)===hm?gm:"$$typeof"in e?Vw[e.$$typeof]:Ww;var t}var Gw=Object.defineProperty,Kw=Object.getOwnPropertyNames,gf=Object.getOwnPropertySymbols,Qw=Object.getOwnPropertyDescriptor,Yw=Object.getPrototypeOf,mf=Object.prototype;function mm(e,t,n){if(typeof t!="string"){if(mf){var r=Yw(t);r&&r!==mf&&mm(e,r,n)}var i=Kw(t);gf&&(i=i.concat(gf(t)));for(var o=hf(e),a=hf(t),s=0;s<i.length;++s){var l=i[s];if(!(l in qw||n&&n[l]||a&&l in a||o&&l in o)){var u=Qw(t,l);try{Gw(e,l,u)}catch{}}}}return e}function jr(e){return typeof e=="function"}function Tc(e){return typeof e=="object"&&"styledComponentId"in e}function Pn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ra(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Li(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xl(e,t,n){if(n===void 0&&(n=!1),!n&&!Li(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xl(e[r],t[r]);else if(Li(t))for(var r in t)e[r]=Xl(e[r],t[r]);return e}function _c(e,t){Object.defineProperty(e,"toString",{value:t})}function Bi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Xw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Bi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),To=new Map,ia=new Map,Is=1,uo=function(e){if(To.has(e))return To.get(e);for(;ia.has(Is);)Is++;var t=Is++;return To.set(e,t),ia.set(t,e),t},Jw=function(e,t){To.set(e,t),ia.set(t,e)},Zw="style[".concat(Pr,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),e1=new RegExp("^".concat(Pr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),t1=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},n1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(e1);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Jw(c,u),t1(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function r1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){return Array.from(s.querySelectorAll("style[".concat(Pr,"]"))).at(-1)}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Pr,"active"),r.setAttribute("data-styled-version","6.0.1");var a=r1();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},i1=function(){function e(t){this.element=vm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Bi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),o1=function(){function e(t){this.element=vm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),a1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),vf=Ec,s1={isServer:!Ec,useCSSOMInjection:!Mw},oa=function(){function e(t,n,r){t===void 0&&(t=Er),n===void 0&&(n={});var i=this;this.options=Ie(Ie({},s1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ec&&vf&&(vf=!1,function(o){for(var a=document.querySelectorAll(Zw),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Pr)!=="active"&&(n1(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),_c(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(d){var f=function(g){return ia.get(g)}(d);if(f===void 0)return"continue";var y=o.names.get(f),v=a.getGroup(d);if(y===void 0||v.length===0)return"continue";var w="".concat(Pr,".g").concat(d,'[id="').concat(f,'"]'),$="";y!==void 0&&y.forEach(function(g){g.length>0&&($+="".concat(g,","))}),l+="".concat(v).concat(w,'{content:"').concat($,'"}').concat(`/*!sc*/
`)},c=0;c<s;c++)u(c);return l}(i)})}return e.registerId=function(t){return uo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ie(Ie({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new a1(i):r?new i1(i):new o1(i)}(this.options),new Xw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(uo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(uo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(uo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),l1=/&/g,u1=/^\s*\/\/.*$/gm;function ym(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ym(n.children,t)),n})}function c1(e){var t,n,r,i=e===void 0?Er:e,o=i.options,a=o===void 0?Er:o,s=i.plugins,l=s===void 0?jc:s,u=function(f,y,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===Ua&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(l1,n).replace(r,u))}),a.prefix&&c.push(Iw),c.push(_w);var d=function(f,y,v,w){y===void 0&&(y=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var $=f.replace(u1,""),g=Lw(v||y?"".concat(v," ").concat(y," { ").concat($," }"):$);a.namespace&&(g=ym(g,a.namespace));var p=[];return na(g,Rw(c.concat(Nw(function(m){return p.push(m)})))),p};return d.hash=l.length?l.reduce(function(f,y){return y.name||Bi(15),sr(f,y.name)},5381).toString():"",d}var d1=new oa,Jl=c1(),wm=gt.createContext({shouldForwardProp:void 0,styleSheet:d1,stylis:Jl});wm.Consumer;gt.createContext(void 0);function Zl(){return j.useContext(wm)}var xm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Jl);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,_c(this,function(){throw Bi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Jl),this.name+t.hash},e}(),f1=function(e){return e>="A"&&e<="Z"};function yf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;f1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Sm=function(e){return e==null||e===!1||e===""},bm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Sm(o)&&(Array.isArray(o)&&o.isCss||jr(o)?r.push("".concat(yf(i),":"),o,";"):Li(o)?r.push.apply(r,$r($r(["".concat(i," {")],bm(o),!1),["}"],!1)):r.push("".concat(yf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in zw||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function gn(e,t,n,r){if(Sm(e))return[];if(Tc(e))return[".".concat(e.styledComponentId)];if(jr(e)){if(!jr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return gn(i,t,n,r)}var o;return e instanceof xm?n?(e.inject(n,r),[e.getName(r)]):[e]:Li(e)?bm(e):Array.isArray(e)?e.flatMap(function(a){return gn(a,t,n,r)}):[e.toString()]}function km(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jr(n)&&!Tc(n))return!1}return!0}var p1=fm("6.0.1"),h1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&km(t),this.componentId=n,this.baseHash=sr(p1,n),this.baseStyle=r,oa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Pn(i,this.staticRulesId);else{var o=ra(gn(this.rules,t,n,r)),a=Yl(sr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=Pn(i,a),this.staticRulesId=a}else{for(var l=sr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=ra(gn(d,t,n,r));l=sr(l,f),u+=f}}if(u){var y=Yl(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=Pn(i,y)}}return i},e}(),Rc=gt.createContext(void 0);Rc.Consumer;var zs={};function g1(e,t,n){var r=Tc(e),i=e,o=!Ns(e),a=t.attrs,s=a===void 0?jc:a,l=t.componentId,u=l===void 0?function(x,b){var k=typeof x!="string"?"sc":ff(x);zs[k]=(zs[k]||0)+1;var P="".concat(k,"-").concat(Lc("6.0.1"+k+zs[k]));return b?"".concat(b,"-").concat(P):P}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(x){return Ns(x)?"styled.".concat(x):"Styled(".concat(Uw(x),")")}(e):c,f=t.displayName&&t.componentId?"".concat(ff(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;v=function(x,b){return w(x,b)&&$(x,b)}}else v=w}var g=new h1(n,f,r?i.componentStyle:void 0);g.isStatic&&s.length;function p(x,b){return function(k,P,E,R){var N=k.attrs,F=k.componentStyle,U=k.defaultProps,A=k.foldedComponentIds,C=k.styledComponentId,L=k.target,B=gt.useContext(Rc),q=Zl(),T=k.shouldForwardProp||q.shouldForwardProp,I=function(Gt,Qe,Tt){for(var Fr,Sn=Ie(Ie({},Qe),{className:void 0,theme:Tt}),os=0;os<Gt.length;os+=1){var qi=jr(Fr=Gt[os])?Fr(Sn):Fr;for(var Kt in qi)Sn[Kt]=Kt==="className"?Pn(Sn[Kt],qi[Kt]):Kt==="style"?Ie(Ie({},Sn[Kt]),qi[Kt]):qi[Kt]}return Qe.className&&(Sn.className=Pn(Sn.className,Qe.className)),Sn}(N,P,cm(P,B,U)||Er),H=I.as||L,X={};for(var K in I)I[K]===void 0||K[0]==="$"||K==="as"||K==="theme"||(K==="forwardedAs"?X.as=I.forwardedAs:T&&!T(K,H)||(X[K]=I[K]));var Lt=function(Gt,Qe){var Tt=Zl(),Fr=Gt.generateAndInjectStyles(Qe,Tt.styleSheet,Tt.stylis);return Fr}(F,I),Pe=Pn(A,C);return Lt&&(Pe+=" "+Lt),I.className&&(Pe+=" "+I.className),X[Ns(H)&&!dm.has(H)?"class":"className"]=Pe,X.ref=E,j.createElement(H,X)}(m,x,b)}p.displayName=d;var m=gt.forwardRef(p);return m.attrs=y,m.componentStyle=g,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?Pn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(b){for(var k=[],P=1;P<arguments.length;P++)k[P-1]=arguments[P];for(var E=0,R=k;E<R.length;E++)Xl(b,R[E],!0);return b}({},i.defaultProps,x):x}}),_c(m,function(){return".".concat(m.styledComponentId)}),o&&mm(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function wf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var xf=function(e){return Object.assign(e,{isCss:!0})};function ve(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jr(e)||Li(e)){var r=e;return xf(gn(wf(jc,$r([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?gn(i):xf(gn(wf(i,t)))}function eu(e,t,n){if(n===void 0&&(n=Er),!t)throw Bi(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,ve.apply(void 0,$r([i],o,!1)))};return r.attrs=function(i){return eu(e,t,Ie(Ie({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return eu(e,t,Ie(Ie({},n),i))},r}var $m=function(e){return eu(g1,e)},S=$m;dm.forEach(function(e){S[e]=$m(e)});var m1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=km(t),oa.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ra(gn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&oa.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function v1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ve.apply(void 0,$r([e],t,!1)),i="sc-global-".concat(Lc(JSON.stringify(r))),o=new m1(r,i),a=function(l){var u=Zl(),c=gt.useContext(Rc),d=gt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(d,l,u.styleSheet,c,u.stylis),(gt.useInsertionEffect||gt.useLayoutEffect)(function(){if(!u.styleSheet.server)return s(d,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function s(l,u,c,d,f){if(o.isStatic)o.renderStyles(l,Dw,c,f);else{var y=Ie(Ie({},u),{theme:cm(u,d,a.defaultProps)});o.renderStyles(l,y,c,f)}}return gt.memo(a)}function Cm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ra(ve.apply(void 0,$r([e],t,!1))),i=Lc(r);return new xm(i,r)}function y1(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const Sf={};function tu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Sf[t[0]]||(typeof t[0]=="string"&&(Sf[t[0]]=new Date),y1(...t))}const Om=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function bf(e,t,n){e.loadNamespaces(t,Om(e,n))}function kf(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,Om(e,r))}function w1(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],i=t.options?t.options.fallbackLng:!1,o=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const u=t.services.backendConnector.state[`${s}|${l}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!i||a(o,e)))}function x1(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(tu("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(i,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,e))return!1}}):w1(e,t,n)}const S1=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,b1={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},k1=e=>b1[e],$1=e=>e.replace(S1,k1);let nu={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:$1};function C1(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};nu={...nu,...e}}function O1(){return nu}let Pm;function P1(e){Pm=e}function E1(){return Pm}const j1={type:"3rdParty",init(e){C1(e.options.react),P1(e)}},Em=j.createContext();class L1{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const T1=(e,t)=>{const n=j.useRef();return j.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function ut(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:i}=j.useContext(Em)||{},o=n||r||E1();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new L1),!o){tu("You will need to pass in an i18next instance by using initReactI18next");const m=(b,k)=>typeof k=="string"?k:k&&typeof k=="object"&&typeof k.defaultValue=="string"?k.defaultValue:Array.isArray(b)?b[b.length-1]:b,x=[m,{},!1];return x.t=m,x.i18n={},x.ready=!1,x}o.options.react&&o.options.react.wait!==void 0&&tu("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...O1(),...o.options.react,...t},{useSuspense:s,keyPrefix:l}=a;let u=e||i||o.options&&o.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(u);const c=(o.isInitialized||o.initializedStoreOnce)&&u.every(m=>x1(m,o,a));function d(){return o.getFixedT(t.lng||null,a.nsMode==="fallback"?u:u[0],l)}const[f,y]=j.useState(d);let v=u.join();t.lng&&(v=`${t.lng}${v}`);const w=T1(v),$=j.useRef(!0);j.useEffect(()=>{const{bindI18n:m,bindI18nStore:x}=a;$.current=!0,!c&&!s&&(t.lng?kf(o,t.lng,u,()=>{$.current&&y(d)}):bf(o,u,()=>{$.current&&y(d)})),c&&w&&w!==v&&$.current&&y(d);function b(){$.current&&y(d)}return m&&o&&o.on(m,b),x&&o&&o.store.on(x,b),()=>{$.current=!1,m&&o&&m.split(" ").forEach(k=>o.off(k,b)),x&&o&&x.split(" ").forEach(k=>o.store.off(k,b))}},[o,v]);const g=j.useRef(!0);j.useEffect(()=>{$.current&&!g.current&&y(d),g.current=!1},[o,l]);const p=[f,o,c];if(p.t=f,p.i18n=o,p.ready=c,c||!c&&!s)return p;throw new Promise(m=>{t.lng?kf(o,t.lng,u,()=>m()):bf(o,u,()=>m())})}function _1(e){let{i18n:t,defaultNS:n,children:r}=e;const i=j.useMemo(()=>({i18n:t,defaultNS:n}),[t,n]);return j.createElement(Em.Provider,{value:i},r)}/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ti(){return Ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ti.apply(this,arguments)}var an;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(an||(an={}));const $f="popstate";function R1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return ru("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:jm(i)}return I1(t,n,null,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Nc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function N1(){return Math.random().toString(36).substr(2,8)}function Cf(e,t){return{usr:e.state,key:e.key,idx:t}}function ru(e,t,n,r){return n===void 0&&(n=null),Ti({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Mr(t):t,{state:n,key:t&&t.key||r||N1()})}function jm(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Mr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function I1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=an.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(Ti({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){s=an.Pop;let $=c(),g=$==null?null:$-u;u=$,l&&l({action:s,location:w.location,delta:g})}function f($,g){s=an.Push;let p=ru(w.location,$,g);n&&n(p,$),u=c()+1;let m=Cf(p,u),x=w.createHref(p);try{a.pushState(m,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(x)}o&&l&&l({action:s,location:w.location,delta:1})}function y($,g){s=an.Replace;let p=ru(w.location,$,g);n&&n(p,$),u=c();let m=Cf(p,u),x=w.createHref(p);a.replaceState(m,"",x),o&&l&&l({action:s,location:w.location,delta:0})}function v($){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof $=="string"?$:jm($);return be(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return s},get location(){return e(i,a)},listen($){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener($f,d),l=$,()=>{i.removeEventListener($f,d),l=null}},createHref($){return t(i,$)},createURL:v,encodeLocation($){let g=v($);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:y,go($){return a.go($)}};return w}var Of;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Of||(Of={}));function z1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Mr(t):t,i=_m(r.pathname||"/",n);if(i==null)return null;let o=Lm(e);M1(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=V1(o[s],Q1(i));return a}function Lm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=_n([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(be(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Lm(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:W1(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of Tm(o.path))i(o,a,l)}),t}function Tm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Tm(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function M1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:q1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const D1=/^:\w+$/,A1=3,F1=2,H1=1,U1=10,B1=-2,Pf=e=>e==="*";function W1(e,t){let n=e.split("/"),r=n.length;return n.some(Pf)&&(r+=B1),t&&(r+=F1),n.filter(i=>!Pf(i)).reduce((i,o)=>i+(D1.test(o)?A1:o===""?H1:U1),r)}function q1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function V1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=G1({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=s.route;o.push({params:r,pathname:_n([i,c.pathname]),pathnameBase:tx(_n([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=_n([i,c.pathnameBase]))}return o}function G1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=K1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=s[d]||"";a=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=Y1(s[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function K1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Nc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Q1(e){try{return decodeURI(e)}catch(t){return Nc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Y1(e,t){try{return decodeURIComponent(e)}catch(n){return Nc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function _m(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function X1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Mr(e):e;return{pathname:n?n.startsWith("/")?n:J1(n,t):t,search:nx(r),hash:rx(i)}}function J1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ms(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ex(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Mr(e):(i=Ti({},e),be(!i.pathname||!i.pathname.includes("?"),Ms("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),Ms("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),Ms("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let d=t.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}s=d>=0?t[d]:"/"}let l=X1(i,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const _n=e=>e.join("/").replace(/\/\/+/g,"/"),tx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,rx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ix(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Rm=["post","put","patch","delete"];new Set(Rm);const ox=["get",...Rm];new Set(ox);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},aa.apply(this,arguments)}const Ic=j.createContext(null),ax=j.createContext(null),Va=j.createContext(null),Ga=j.createContext(null),Un=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Nm=j.createContext(null);function Ka(){return j.useContext(Ga)!=null}function Qa(){return Ka()||be(!1),j.useContext(Ga).location}function Im(e){j.useContext(Va).static||j.useLayoutEffect(e)}function Dr(){let{isDataRoute:e}=j.useContext(Un);return e?xx():sx()}function sx(){Ka()||be(!1);let e=j.useContext(Ic),{basename:t,navigator:n}=j.useContext(Va),{matches:r}=j.useContext(Un),{pathname:i}=Qa(),o=JSON.stringify(Z1(r).map(l=>l.pathnameBase)),a=j.useRef(!1);return Im(()=>{a.current=!0}),j.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){n.go(l);return}let c=ex(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:_n([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}function lx(){let{matches:e}=j.useContext(Un),t=e[e.length-1];return t?t.params:{}}function ux(e,t){return cx(e,t)}function cx(e,t,n){Ka()||be(!1);let{navigator:r}=j.useContext(Va),{matches:i}=j.useContext(Un),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=Qa(),u;if(t){var c;let w=typeof t=="string"?Mr(t):t;s==="/"||(c=w.pathname)!=null&&c.startsWith(s)||be(!1),u=w}else u=l;let d=u.pathname||"/",f=s==="/"?d:d.slice(s.length)||"/",y=z1(e,{pathname:f}),v=gx(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:_n([s,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:_n([s,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&v?j.createElement(Ga.Provider,{value:{location:aa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:an.Pop}},v):v}function dx(){let e=wx(),t=ix(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,o)}const fx=j.createElement(dx,null);class px extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?j.createElement(Un.Provider,{value:this.props.routeContext},j.createElement(Nm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hx(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(Ic);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Un.Provider,{value:t},r)}function gx(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=o.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||be(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,u)=>{let c=l.route.id?a==null?void 0:a[l.route.id]:null,d=null;n&&(d=l.route.errorElement||fx);let f=t.concat(o.slice(0,u+1)),y=()=>{let v;return c?v=d:l.route.Component?v=j.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=s,j.createElement(hx,{match:l,routeContext:{outlet:s,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?j.createElement(px,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var iu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(iu||(iu={}));var _i;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(_i||(_i={}));function mx(e){let t=j.useContext(Ic);return t||be(!1),t}function vx(e){let t=j.useContext(ax);return t||be(!1),t}function yx(e){let t=j.useContext(Un);return t||be(!1),t}function zm(e){let t=yx(),n=t.matches[t.matches.length-1];return n.route.id||be(!1),n.route.id}function wx(){var e;let t=j.useContext(Nm),n=vx(_i.UseRouteError),r=zm(_i.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function xx(){let{router:e}=mx(iu.UseNavigateStable),t=zm(_i.UseNavigateStable),n=j.useRef(!1);return Im(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,aa({fromRouteId:t},o)))},[e,t])}function Kn(e){be(!1)}function Sx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=an.Pop,navigator:o,static:a=!1}=e;Ka()&&be(!1);let s=t.replace(/^\/*/,"/"),l=j.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Mr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:y="default"}=r,v=j.useMemo(()=>{let w=_m(u,s);return w==null?null:{location:{pathname:w,search:c,hash:d,state:f,key:y},navigationType:i}},[s,u,c,d,f,y,i]);return v==null?null:j.createElement(Va.Provider,{value:l},j.createElement(Ga.Provider,{children:n,value:v}))}function bx(e){let{children:t,location:n}=e;return ux(ou(t),n)}var Ef;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Ef||(Ef={}));new Promise(()=>{});function ou(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,ou(r.props.children,o));return}r.type!==Kn&&be(!1),!r.props.index||!r.props.children||be(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ou(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const kx="startTransition",jf=ay[kx];function $x(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=R1({window:i,v5Compat:!0}));let a=o.current,[s,l]=j.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=j.useCallback(d=>{u&&jf?jf(()=>l(d)):l(d)},[l,u]);return j.useLayoutEffect(()=>a.listen(c),[a,c]),j.createElement(Sx,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}var Lf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Lf||(Lf={}));var Tf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tf||(Tf={}));const O="1000px",Z=ve`
  margin: 0;
  padding: 0;
`,sa=ve`
  background-repeat: no-repeat;
  background-size: contain;
`,re={blueColor:"#366eff",lightBlackColor:"#16202C",blackColor:"#000000",lightGrayColor:"#1A202C",darkGrayColor:"#0b132a",whiteColor:"#ffffff",transparentWhiteColor:"#ffffff80",grayColor:"#fcfcfc",redColor:"#ff0000",lightGreenColor:"#3cc1b3",greenColor:"#20F1C0",darkGreenColor:"#00BAA4",darkColor:"#1C2938",deepColor:"#141E29",deepGrayColor:"#17212D",scrollColor:"#b8b8b8",headerColor:"#16212D",ratesFeesColor:"#fafbfc",navigateLinkColor:"#b7b5b1",notFoundColor:"#d5dee9"};S.button`
  ${Z};
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
`;ve`
  background-repeat: no-repeat;
  background-position: center bottom;
`;const zc=ve`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
`,qt=ve`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`,he=ve`
  font-family: Gramatika-Regular, sans-serif;
`,Ya=ve`
  font-family: Gramatika-Bold, sans-serif;
`,Ar=ve`
  font-family: Plus_Jakarta_Sans-Regular, sans-serif;
`,Vt=ve`
  font-family: Gramatika-Medium, sans-serif;
`,Cx=Cm`
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
`,Ox=Cm`
  from {
    right: 0;
  }
  to {
    right: -100%;
  }
`;ve`
  margin-bottom: 2vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: ${O}) {
    flex-direction: column;
    align-items: center;
  }
`;const Mm=ve`
  position: absolute;
  background-repeat: no-repeat;
  z-index: 2;
  background-size: cover;

  @media (max-width: ${O}) {
    width: 45vw;
    background-size: auto 100%;
    background-position: center;
  }
`;ve`
  color: ${re.whiteColor};
  padding-bottom: 2.57vw;
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: 1.74vw;
  font-family: Gramatika-Regular, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;const Mc=ve`
  ${Z};
  color: ${re.whiteColor};
  ${he};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.08);
  }
`,Dc=ve`
  ${Z};
  color: ${re.blackColor};
  font-weight: 400;
  font-size: calc(20vw / 14.4);
  font-style: normal;
  line-height: 2.2;

  @media (max-width: ${O}) {
    font-size: calc(20vw / 5.09);
  }
`,Et=()=>{const[e,t]=j.useState(null);return j.useEffect(()=>{const n=()=>{const r=window.innerWidth;t(r<=parseInt(O))};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e},Dm="https://twitter.com/ThothPay",Am="https://www.facebook.com/profile.php?id=100095060907471",Px="mailto:service@thothpay.com",Fm="https://example.com/telegram",Ex="https://thothpay.com/merchant",jx="https://example.com/signup",Lx="https://thothpay.com/merchant",Tx="https://docs.thothpay.com",_x="https://thothpay.com/swagger/index.html",Rx="https://docs.thothpay.com",Nx="https://thothpay.com/swagger/index.html",Ix="https://docs.thothpay.com",zx="https://example.com/get-support",Mx="https://example.com/contact-team",Dx="https://example.com/how-it-works",Ax="https://example.com/featured",Fx="https://example.com/partnership",Hx="https://example.com/business-relation",Ux="https://example.com/events",Bx="https://example.com/blog",Wx="https://example.com/podcast",qx="https://example.com/invite-friend",Vx="https://example.com/privacy-policy",Gx="https://example.com/terms-condition",Kx="https://docs.thothpay.com",Qx="https://docs.thothpay.com",Yx=S.a`
  ${Z};
  ${he};
  color: ${e=>e.color};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
`,ct=({href:e,target:t,rel:n,children:r,...i})=>h.jsx(Yx,{href:e,target:t,rel:n,...i,children:r});let co;const Xx=new Uint8Array(16);function Jx(){if(!co&&(co=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!co))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return co(Xx)}const Ee=[];for(let e=0;e<256;++e)Ee.push((e+256).toString(16).slice(1));function Zx(e,t=0){return(Ee[e[t+0]]+Ee[e[t+1]]+Ee[e[t+2]]+Ee[e[t+3]]+"-"+Ee[e[t+4]]+Ee[e[t+5]]+"-"+Ee[e[t+6]]+Ee[e[t+7]]+"-"+Ee[e[t+8]]+Ee[e[t+9]]+"-"+Ee[e[t+10]]+Ee[e[t+11]]+Ee[e[t+12]]+Ee[e[t+13]]+Ee[e[t+14]]+Ee[e[t+15]]).toLowerCase()}const eS=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_f={randomUUID:eS};function tS(e,t,n){if(_f.randomUUID&&!t&&!e)return _f.randomUUID();e=e||{};const r=e.random||(e.rng||Jx)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return Zx(r)}const V=()=>tS(),Rf="/thoth",Nf={active:`${Rf}images/news-page/rating/star-active.svg`,inactive:`${Rf}images/news-page/rating/star-inactive.svg`},nS={rating:{active:{src:Nf.active,alt:"active star"},inactive:{src:Nf.inactive,alt:"inactive star"}}},Hm=V(),rS=V(),Um=V(),Bm=V(),iS=V(),Wm=V(),qm=V(),Vm=V(),z="/thoth",oS=[{code:"en",name:"English"},{code:"ru",name:"Русский"}],An={playIconWhite:"images/common/play-icon-white.svg",playIconGreen:"images/common/play-icon-green.svg"},aS={background:`${z}/images/header/check-mark.svg`},lr={backgroundL:`${z}/images/main-page/main-screen/screen-L.svg`,backgroundS:`${z}/images/main-page/main-screen/screen-S.svg`,coinsL:`${z}/images/main-page/main-screen/coins-L.svg`,coinsS:`${z}/images/main-page/main-screen/coins-S.svg`,circle:`${z}/images/main-page/main-screen/circle.svg`,wrapper:`${z}/images/main-page/main-screen/wrapper.svg`},Lr={backgroundL:`${z}/images/main-page/how-it-works/background-L.svg`,backgroundS:`${z}/images/main-page/how-it-works/background-S.svg`,leftLineL:`${z}/images/main-page/how-it-works/left-line-L.svg`,leftLineS:`${z}/images/main-page/how-it-works/left-line-S.svg`,rightLineL:`${z}/images/main-page/how-it-works/right-line-L.svg`,rightLineS:`${z}/images/main-page/how-it-works/right-line-S.svg`},If={backgroundL:`${z}/images/main-page/how-it-works/advantages/background-L.svg`,backgroundS:`${z}/images/main-page/how-it-works/advantages/background-S.svg`},zf={backgroundL:`${z}/images/main-page/products-and-service/description-L.svg`,backgroundS:`${z}/images/main-page/products-and-service/description-S.svg`},Mf={backgroundL:`${z}/images/main-page/products-and-service/mobile-wallet/background-L.svg`,backgroundS:`${z}/images/main-page/products-and-service/mobile-wallet/background-S.svg`},sS={background:`${z}/images/main-page/products-and-service/available-currencies/available-currencies.svg`},Df={backgroundL:`${z}/images/main-page/products-and-service/slide/background-L.svg`,backgroundS:`${z}/images/main-page/products-and-service/slide/background-S.svg`},au={backgroundL:`${z}/images/main-page/use-cases-of-our-products/background-L.svg`,backgroundS:`${z}/images/main-page/use-cases-of-our-products/background-S.svg`,slide:`${z}/images/main-page/use-cases-of-our-products/slide.svg`},lS={background:`${z}/images/main-page/use-cases-of-our-products/mobile-slider/background-S.svg`},Af={backgroundL:"images/main-page/use-cases-of-our-products/news/background-L.svg",backgroundS:"images/main-page/use-cases-of-our-products/news/background-S.svg"},fo={existingClient:{src:`${z}/images/main-page/use-cases-of-our-products/have-a-question/existing-client.svg`,alt:"existing client"},newClient:{src:`${z}/images/main-page/use-cases-of-our-products/have-a-question/new-client.svg`,alt:"new client"}},xt=(e,t)=>{switch(e){case"Sections":return[{id:Hm,title:t("sections.one")},{id:rS,title:t("sections.two")},{id:Um,title:t("sections.three")},{id:Bm,title:t("sections.four")}];case"Header":return{loginAndRegister:{signUp:t("header.loginAndRegister.signUp"),signIn:t("header.loginAndRegister.signIn")},closeIcon:{src:`${z}/${An.playIconWhite}`,alt:t("header.closeIcon")},language:{src:`${z}/images/header/language-icon-white.svg`,srcGray:`${z}/images/header/language-icon-gray.svg`,alt:t("header.language.alt"),text:t("header.language.text")},menu:{src:`${z}/images/header/burger-icon.svg`,alt:t("header.menu.alt"),text:t("header.menu.text")}};case"MainScreen":return{span:t("mainScreen.span"),title:t("mainScreen.title"),text:t("mainScreen.text"),button:t("mainScreen.button")};case"HowItWorks":return{text:t("sectionHowItWorks.text"),stepOne:{image:{src:`${z}/images/main-page/how-it-works/send-invoice.svg`,alt:t("sectionHowItWorks.stepOne.alt")},subtitle:t("sectionHowItWorks.stepOne.subtitle"),text:t("sectionHowItWorks.stepOne.text")},stepTwo:{image:{src:`${z}/images/main-page/how-it-works/payment.svg`,alt:t("sectionHowItWorks.stepTwo.alt")},subtitle:t("sectionHowItWorks.stepTwo.subtitle"),text:t("sectionHowItWorks.stepTwo.text")},stepThree:{image:{src:`${z}/images/main-page/how-it-works/broadcast.svg`,alt:t("sectionHowItWorks.stepThree.alt")},subtitle:t("sectionHowItWorks.stepThree.subtitle"),text:t("sectionHowItWorks.stepThree.text")},advantages:[{id:V(),subtitle:t("sectionHowItWorks.advantages.advantage1.subtitle"),text:t("sectionHowItWorks.advantages.advantage1.text"),image:`${z}/images/main-page/how-it-works/advantages/first-icon.svg`,alt:t("sectionHowItWorks.advantages.advantage1.alt")},{id:V(),subtitle:t("sectionHowItWorks.advantages.advantage2.subtitle"),text:t("sectionHowItWorks.advantages.advantage2.text"),image:`${z}/images/main-page/how-it-works/advantages/second-icon.svg`,alt:t("sectionHowItWorks.advantages.advantage2.alt")},{id:V(),subtitle:t("sectionHowItWorks.advantages.advantage3.subtitle"),text:t("sectionHowItWorks.advantages.advantage3.text"),image:`${z}/images/main-page/how-it-works/advantages/third-icon.svg`,alt:t("sectionHowItWorks.advantages.advantage3.alt")},{id:V(),subtitle:t("sectionHowItWorks.advantages.advantage4.subtitle"),text:t("sectionHowItWorks.advantages.advantage4.text"),image:`${z}/images/main-page/how-it-works/advantages/fourth-icon.svg`,alt:t("sectionHowItWorks.advantages.advantage4.alt")}]};case"Photo":return{photos:[{id:V(),src:`${z}/images/test/test-photo.jpg`,alt:t("photos.one")},{id:V(),src:`${z}/images/test/test-photo.jpg`,alt:t("photos.two")},{id:V(),src:`${z}/images/test/test-photo.jpg`,alt:t("photos.three")}],photoSlideArrows:{left:{src:`${z}/images/main-page/photo/photo-slider/arrow-left.svg`,alt:t("photos.arrowLeft")},right:{src:`${z}/images/main-page/photo/photo-slider/arrow-right.svg`,alt:t("photos.arrowRight")}}};case"ProductAndService":return{text:"Product Description THOTH",slides:[{id:iS,subtitle:"Merchants Solution",textContent:"The solution for businesses to accept crypto payments in any coins and automatically exchange it all into desired stable or currency.",image:{src:`${z}/images/main-page/products-and-service/slide/slide-one.svg`,alt:"image one"}},{id:Wm,subtitle:"Enterprise Blockchain Wallets",textContent:"We deploy infrastructure to provide coins self-custody for enterprise needs.",link:{value:"docs.thothpay.com",href:Tx},image:{src:`${z}/images/main-page/products-and-service/slide/slide-two.svg`,alt:"image two"}},{id:qm,subtitle:"Wallet App",textContent:"Download Android or iOS application to instantly get access to your account.",image:{src:`${z}/images/main-page/products-and-service/slide/slide-three.svg`,alt:"image three"}},{id:Vm,subtitle:"API",textContent:"Automate acceptance in your web store, CRM or application with our feature full API.",link:{value:"Read more",href:_x},image:{src:`${z}/images/main-page/products-and-service/slide/slide-four.svg`,alt:"image four"}}],mobileWallet:{title:"Mobile Wallet",text:"A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",links:[{id:V(),src:`${z}/images/main-page/products-and-service/mobile-wallet/google-play.svg`,alt:"google play link",href:Rx},{id:V(),src:`${z}/images/main-page/products-and-service/mobile-wallet/app-store.svg`,alt:"apple store link",href:Nx}]},availableCurrencies:{title:"Available Currencies",text:"A vast range of major coins, stablecoins and liquid tokens is available.",subtitle:"Coins",coins:[{id:V(),src:`${z}/images/main-page/products-and-service/available-currencies/bitcoin.svg`,alt:"bitcoin icon"},{id:V(),src:`${z}/images/main-page/products-and-service/available-currencies/bitcoin-lightning.svg`,alt:"bitcoin lightning icon"},{id:V(),src:`${z}/images/main-page/products-and-service/available-currencies/bitcoin-liquid.svg`,alt:"bitcoin liquid icon"},{id:V(),src:`${z}/images/main-page/products-and-service/available-currencies/binance-coin.svg`,alt:"binance coin icon"},{id:V(),src:`${z}/images/main-page/products-and-service/available-currencies/tron.svg`,alt:"tron icon"},{id:V(),src:`${z}/images/main-page/products-and-service/available-currencies/polygon.svg`,alt:"polygon icon"},{id:V(),src:`${z}/images/main-page/products-and-service/available-currencies/stellar.svg`,alt:"stellar icon"},{id:V(),src:`${z}/images/main-page/products-and-service/available-currencies/EURMTL.svg`,alt:"EURMTL icon"},{id:V(),src:`${z}/images/main-page/products-and-service/available-currencies/USDT-ERC20.svg`,alt:"USDT ERC20 icon"},{id:V(),src:`${z}/images/main-page/products-and-service/available-currencies/USDT-TRC20.svg`,alt:"USDT TRC20 icon"},{id:V(),src:`${z}/images/main-page/products-and-service/available-currencies/USDT-PLG20.svg`,alt:"USDT PLG20 icon"},{id:V(),src:`${z}/images/main-page/products-and-service/available-currencies/USDT-LIQUID.svg`,alt:"USDT LIQUID icon"},{id:V(),src:`${z}/images/main-page/products-and-service/available-currencies/BUSD-BEP20.svg`,alt:"BUSD BEP20 icon"}]},videoSlider:{title:"Video",text:"Product Description THOTH",video:[{id:V(),title:"Video title 1",content:"https://www.youtube.com/watch?v=SjX1lRtJdAg"},{id:V(),title:"Video title 2",content:"https://www.youtube.com/watch?v=-1DbYJH2h98"},{id:V(),title:"Video title 3",content:"https://www.youtube.com/watch?v=UpEkHC2k_0I"},{id:V(),title:"Video title 4",content:"https://www.youtube.com/watch?v=-1DbYJH2h98"},{id:V(),title:"Video title 4",content:"https://www.youtube.com/watch?v=-1DbYJH2h98"}]}};case"UseCasesOfOurProducts":return{text:"Product Description THOTH",subtitle:"Merchants Solution",slides:[{id:V(),image:{src:`${z}/images/main-page/use-cases-of-our-products/merchantsSolutionOne.svg`,alt:"icon one"},title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."},{id:V(),image:{src:`${z}/images/main-page/use-cases-of-our-products/merchantsSolutionTwo.svg`,alt:"icon two"},title:"E-commerce",text:"The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments."},{id:V(),image:{src:`${z}/images/main-page/use-cases-of-our-products/merchantsSolutionThree.svg`,alt:"icon three"},title:"Marketplaces",text:"There are many platforms used by businesses to sell their products or services. Offering crypto payments to customers is now the advantage."},{id:V(),image:{src:`${z}/images/main-page/use-cases-of-our-products/merchantsSolutionFour.svg`,alt:"icon four"},title:"Travel Industry",text:"The travel industry is a growing sector. With increasing bookings now made online, it makes financial sense to accept crypto payments."},{id:V(),image:{src:`${z}/images/main-page/use-cases-of-our-products/merchantsSolutionFive.svg`,alt:"icon five"},title:"Gambling",text:"The global online gambling industry is worth billions of dollars. Crypto payments are part for the course."},{id:V(),image:{src:`${z}/images/main-page/use-cases-of-our-products/merchantsSolutionSix.svg`,alt:"icon six"},title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."}],photoSlideArrowRight:{src:`${z}/images/main-page/use-cases-of-our-products/mobile-slider/slider-button.svg`,alt:"arrow right"},fees:{title:"Fees",lineOne:{title:"Incoming Transactions",text:{main:"As low as 0.5%",span:"and going down based on your total transaction volume.",button:"Check pricing details"}},lineTwo:{title:"Outgoing Transactions",text:{main:"Free of charge"}}},news:{title:"News",link:{value:"Read more",href:Ix}},questions:{title:"Have a question?",text:"Explore our solutions or you can contact us through ticket system and contact form. Feel free to get in touch..",existing:{title:"For existing clients",text:"If you already have an account please use our ticket system.",linkName:"Get 24\\7 Support",href:zx},new:{title:"For new clients or partners",text:"Please leave your inquiry and our Business Development Team will contact you shortly.",linkName:"Contact BD Team",href:Mx}}};case"PaymentFees":return{title:t("pagePaymentFees.title"),individual:{subtitle:t("pagePaymentFees.subtitleIndividual"),linkHref:Kx,linkLabel:t("pagePaymentFees.linkLabel"),depositFee:{text:t("pagePaymentFees.depositFee"),percent:["0.1%","0.3%"],span:["<1000$",">1000$"]},swapFee:{text:t("pagePaymentFees.swapFee"),percent:["0.5%"]},withdrawFee:{text:t("pagePaymentFees.withdrawFee"),percent:["0.5%"]},fiatBankIn:{text:t("pagePaymentFees.fiatBankIn"),percent:["0.5%"]},fiatBankOut:{text:t("pagePaymentFees.fiatBankOut"),percent:["0.5%"]},depositFeeSpan:{text:t("pagePaymentFees.depositFeeSpan"),percent:["0.5%"]}},enterprise:{subtitle:t("pagePaymentFees.subtitleEnterprise"),linkHref:Qx,linkLabel:t("pagePaymentFees.linkLabel"),depositFee:{text:t("pagePaymentFees.depositFee"),percent:["0.1%"]},swapFee:{text:t("pagePaymentFees.swapFee"),percent:["0.5%","0.6%"],span:["<1000$",">1000$"]},withdrawFee:{text:t("pagePaymentFees.withdrawFee"),percent:["0.5%"]},fiatBankIn:{text:t("pagePaymentFees.fiatBankIn"),percent:["0.5%"]},fiatBankOut:{text:t("pagePaymentFees.fiatBankOut"),percent:["0.5%"]},depositFeeSpan:{text:t("pagePaymentFees.depositFeeSpan"),percent:["0.5%"]}},navigation:{button:t("pagePaymentFees.navigation.button"),separator:">",location:t("pagePaymentFees.navigation.location")}};case"News":return nS;case"NotFound":return{navigation:{button:t("pageNotFound.navigation.button"),separator:">",location:t("pageNotFound.navigation.location")},title:"404",subtitle:t("pageNotFound.subtitle"),image:{src:`${z}/images/not-found-page/off.svg`,alt:t("pageNotFound.imageAlt")},text:t("pageNotFound.text"),button:t("pageNotFound.button")};case"Logo":return{src:`${z}/images/common/logo.svg`,alt:t("logo.alt")};case"FeedbackWidgets":return[{id:"telegram",image:{darkSrc:`${z}/images/common/telegram-dark.svg`,lightSrc:`${z}/images/common/telegram-light.svg`,alt:t("feedbackWidgets.telegram")},href:Fm},{id:"twitter",image:{darkSrc:`${z}/images/common/twitter-dark.svg`,lightSrc:`${z}/images/common/twitter-light.svg`,alt:t("feedbackWidgets.twitter")},href:Dm},{id:"facebook",image:{darkSrc:`${z}/images/common/facebook-dark.svg`,lightSrc:`${z}/images/common/facebook-light.svg`,alt:t("feedbackWidgets.facebook")},href:Am},{id:"email",image:{darkSrc:`${z}/images/common/email-dark.svg`,lightSrc:`${z}/images/common/email-light.svg`,alt:t("feedbackWidgets.email")},href:Px}];default:return null}},{greenColor:ur,lightGreenColor:uS,whiteColor:Gm}=re,cS=S.section`
  box-sizing: border-box;
  margin: 0 auto 7vw;
  position: relative;
  background-image: url(${lr.backgroundL});
  ${qt};
  border-radius: 0 0 0 1.6vw;
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  min-height: 51vw;
  box-shadow: 0 1.6vw 0 ${ur};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-image: url(${lr.coinsL});
    ${sa};
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
    background-color: ${ur};
  }

  @media (max-width: ${O}) {
    margin-bottom: 10vw;
    background-image: url(${lr.backgroundS});
    border-radius: 0 0 3.93vw 3.93vw;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3.54vw 0 ${ur};

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      background-image: url(${lr.coinsS});
      ${sa};
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
      background-color: ${ur};
    }
  }
`,dS=S.div`
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
    background-image: url(${lr.wrapper});
    ${qt};
  }
`,fS=S.div`
  border-radius: 50%;
  bottom: -5vw;
  left: 16vw;
  position: absolute;
  z-index: 1;
  width: 8.5vw;
  height: 8.5vw;
  background-image: url(${lr.circle});
  ${qt};

  @media (max-width: ${O}) {
    bottom: -6vw;
    left: 50%;
    transform: translateX(-50%);
    width: 12vw;
    height: 12vw;
  }
`,pS=S.p`
  ${Z};
  margin: 0 0 1.9vw;
  color: rgba(255, 255, 255, 0.5);
  ${he};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
`,hS=S.h1`
  ${Z};
  color: ${Gm};
  font-size: 3.89vw;
  ${Ya};
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;
  text-transform: uppercase;
  text-align: left;
  word-break: break-word;

  @media (max-width: ${O}) {
    font-size: 9.84vw;
  }
`,gS=S.p`
  ${Z};
  margin: 1.46vw 0 5.9vw;
  ${he};
  font-size: calc(25vw / 14.4);
  color: ${ur};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${O}) {
    margin: 3.54vw 0 5.9vw;
    font-size: calc(25vw / 5.08);
  }
`,mS=S(ct)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: calc(20vw / 14.4);
  background: linear-gradient(
    133deg,
    ${ur} 0%,
    ${uS} 100%
  );

  @media (max-width: ${O}) {
    padding: calc(12vw / 5.08);
  }
`,vS=S.span`
  ${Z};
  margin-right: calc(20vw / 14.4);
  color: ${Gm};
  font-size: 1.11vw;
  ${Ya};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${O}) {
    margin-right: calc(12vw / 5.08);
    font-size: 3.15vw;
  }
`,yS=S.div`
  ${sa};
  width: 1.18vw;
  height: 1.04vw;
  background-image: url(${An.playIconWhite});

  @media (max-width: ${O}) {
    width: 3.35vw;
    height: 2.95vw;
  }
`,wS=j.forwardRef((e,t)=>{const{t:n}=ut(),r=xt("MainScreen",n),{span:i,title:o,text:a,button:s}=r,l=Et();return h.jsxs(cS,{className:"main-screen",ref:t,children:[h.jsxs(dS,{children:[l!==null&&!l&&h.jsx(pS,{children:i}),h.jsx(hS,{children:o}),h.jsx(gS,{children:a}),h.jsx(mS,{color:"transparent",href:Lx,target:"_blank",rel:"noopener noreferrer",children:h.jsxs(h.Fragment,{children:[h.jsx(vS,{children:s}),h.jsx(yS,{})]})})]}),h.jsx(fS,{})]})}),xS=S("h3")`
  ${Z};
  ${Vt};
  font-style: normal;
  font-weight: 500;
  word-wrap: break-word;
`,Bn=({children:e,...t})=>h.jsx(xS,{...t,children:e}),{lightGrayColor:Km}=re,SS=S.div`
  position: relative;
  z-index: 1;
  max-width: 20.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${O}) {
    max-width: 55.33vw;
  }
`,bS=S(Bn)`
  width: 100%;
  color: ${Km};
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
  ${Z};
  margin: 1.11vw 0 2.85vw;
  color: ${Km};
  text-align: center;
  ${he};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;

  @media (max-width: ${O}) {
    font-size: calc(20vw / 5.08);
    margin: 0.7vw 0 4.72vw;
  }
`,$S=S.img`
  margin-top: ${({$index:e})=>e==="one"?"3.9vw":e==="two"?"2.7vw":"0"};
  margin-bottom: 2vw;
  width: ${({$index:e})=>e==="one"?"7.4vw":e==="two"?"8.6vw":"11.3vw"};
  height: ${({$index:e})=>e==="one"?"7.4vw":e==="two"?"8.6vw":"11.3vw"};

  @media (max-width: ${O}) {
    margin-top: 4vw;
    width: ${({$index:e})=>e==="one"?"20.86vw":e==="two"?"24.56vw":"32.08vw"};
    height: ${({$index:e})=>e==="one"?"20.86vw":e==="two"?"24.56vw":"32.08vw"};
  }
`,Ds=({index:e,content:t})=>h.jsxs(SS,{children:[h.jsx($S,{$index:e,src:t.image.src,alt:t.image.alt}),h.jsx(bS,{children:t.subtitle}),h.jsx(kS,{children:t.text})]}),{whiteColor:Ac}=re,CS=S.div`
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
    border-bottom: 0.5px ${Ac} solid;
  }

  &:last-child {
    border: none;
  }
`,OS=S.div`
  width: 100%;
  min-height: 3.56vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${O}) {
    width: 100%;
  }
`,PS=S(Bn)`
  color: ${Ac};
  font-size: calc(26vw / 14.4);
  line-height: 0.96;
  text-align: left;

  @media (max-width: ${O}) {
    line-height: 0.83;
    font-size: calc(30vw / 5.08);
  }
`,ES=S.p`
  ${Z};
  margin: 2.5vw 0 0 0;
  color: ${Ac};
  ${he};
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
`,jS=({subtitle:e,text:t,svg:n})=>h.jsxs(CS,{children:[h.jsxs(OS,{children:[n,h.jsx(PS,{children:e})]}),h.jsx(ES,{children:t})]}),LS=S.div`
  background-image: url(${If.backgroundL});
  //border-radius: 1.6vw;
  border-radius: 1.6vw 1.6vw 0 0;
  ${qt};
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
    background-image: url(${If.backgroundS});
    flex-direction: column;
  }
`,TS=S.div`
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
`,_S=S.img`
  width: 3.75vw;
  height: 3.75vw;
  margin-right: 1vw;

  @media (max-width: ${O}) {
    margin-right: 5vw;
    width: 13.95vw;
    height: 13.95vw;
  }
`,RS=({advantages:e})=>h.jsx(LS,{children:h.jsx(TS,{children:e.map(t=>h.jsx(jS,{svg:h.jsx(_S,{src:t.image,alt:t.alt}),subtitle:t.subtitle,text:t.text},t.id))})}),NS=S.h2`
  ${Z};
  text-align: center;
  font-size: calc(50vw / 14.4);
  ${Vt};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -1px;
  color: ${e=>e.color};

  @media (max-width: ${O}) {
    font-size: calc(50vw / 5.08);
    line-height: 1.2;
  }
`,jt=({children:e,...t})=>h.jsx(NS,{...t,children:e}),IS=S.p`
  ${Z};
  text-align: center;
  font-size: calc(20vw / 14.05);
  ${he};
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.color};

  @media (max-width: ${O}) {
    ${Ar};
    font-size: calc(18vw / 5.08);
    line-height: 1.5;
  }
`,Fc=({children:e,...t})=>h.jsx(IS,{...t,children:e}),{darkGrayColor:Ff}=re,zS=S.div`
  position: relative;
  margin: 0 auto 2vw;
  ${zc};
  width: 93.54vw;
  height: auto;
  background-image: url(${Lr.backgroundL});

  @media (max-width: ${O}) {
    padding: 16.7vw 0 5vw;
    width: 90.55vw;
    background-image: url(${Lr.backgroundS});
  }
`,MS=S(Fc)`
  margin: 0.7vw 0 1.71vw;

  @media (max-width: ${O}) {
    margin-bottom: 4.72vw;
  }
`,DS=S.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;

  @media (max-width: ${O}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,Hf=S.div`
  position: relative;

  @media (max-width: ${O}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,AS=S.div`
  ${Mm};
  background-image: url(${Lr.leftLineL});
  top: 4vw;
  left: 15vw;
  width: 20.83vw;
  height: 6.04vw;

  @media (max-width: ${O}) {
    top: 25vw;
    left: 7vw;
    height: calc(100% - 20.86vw + 15vw);
    background-image: url(${Lr.leftLineS});
  }
`,FS=S.div`
  ${Mm};
  background-image: url(${Lr.rightLineL});
  top: 4vw;
  right: -14.5vw;
  width: 19vw;
  height: 6.04vw;

  @media (max-width: ${O}) {
    top: 30vw;
    right: 3vw;
    height: calc(100% - 24.56vw + 15vw);
    background-image: url(${Lr.rightLineS});
  }
`,HS=({id:e,title:t})=>{const{t:n}=ut(),r=xt("HowItWorks",n),{text:i,stepOne:o,stepTwo:a,stepThree:s,advantages:l}=r;return h.jsxs("section",{id:e,children:[h.jsxs(zS,{children:[h.jsx(jt,{color:Ff,children:t}),h.jsx(MS,{color:Ff,children:i}),h.jsxs(DS,{children:[h.jsxs(Hf,{children:[h.jsx(AS,{}),h.jsx(Ds,{index:"one",content:o})]}),h.jsxs(Hf,{children:[h.jsx(FS,{}),h.jsx(Ds,{index:"two",content:a})]}),h.jsx(Ds,{index:"three",content:s})]})]}),l&&h.jsx(RS,{advantages:l})]})},US=S.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,BS=S.img`
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
`,WS=S(ct)`
  pointer-events: none;
  text-decoration: none; 
  cursor: not-allowed;
  opacity: 0.3;
}

  @media (max-width: ${O}) {
    margin-right: calc(72vw / 14.4);
  }
`,Qm=({links:e})=>h.jsx(US,{children:e.map(t=>h.jsx(WS,{color:"transparent",href:t.href,target:"_blank",rel:"noopener noreferrer",children:h.jsx(BS,{src:t.src,alt:t.alt})},t.id))}),{darkColor:qS,whiteColor:VS,darkGrayColor:GS}=re,KS=S.section`
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  background-color: ${qS};
  min-height: 41.53vw;

  @media (max-width: ${O}) {
    background-color: ${GS};
    box-sizing: border-box;
    min-height: 270.66vw;
    flex-direction: column;
  }
`,QS=S.div`
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
  ${qt};
  background-image: url(${Mf.backgroundL});

  @media (max-width: ${O}) {
    box-sizing: border-box;
    padding: 0 9vw 4.14vw;
    background-image: url(${Mf.backgroundS});
    justify-content: end;
    align-items: start;
  }
`,YS=S.p`
  max-width: 40%;
  ${Mc};
  margin: 3.06vw 0 3.75vw;

  @media (max-width: ${O}) {
    max-width: 90%;
    margin: 8.82vw 0;
  }
`,XS=S.div`
  width: 35vw;

  @media (max-width: ${O}) {
    width: 70vw;
  }
`,JS=({mobileWallet:e})=>{const{title:t,text:n,links:r}=e;return h.jsx(KS,{children:h.jsxs(QS,{children:[h.jsx(jt,{color:VS,children:t}),h.jsx(YS,{children:n}),h.jsx(XS,{children:h.jsx(Qm,{links:r})})]})})};var Ym={},Xm={},Xa={},Jm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Jm);var ZS="Expected a function",Uf=0/0,eb="[object Symbol]",tb=/^\s+|\s+$/g,nb=/^[-+]0x[0-9a-f]+$/i,rb=/^0b[01]+$/i,ib=/^0o[0-7]+$/i,ob=parseInt,ab=typeof nn=="object"&&nn&&nn.Object===Object&&nn,sb=typeof self=="object"&&self&&self.Object===Object&&self,lb=ab||sb||Function("return this")(),ub=Object.prototype,cb=ub.toString,db=Math.max,fb=Math.min,As=function(){return lb.Date.now()};function pb(e,t,n){var r,i,o,a,s,l,u=0,c=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(ZS);t=Bf(t)||0,su(n)&&(c=!!n.leading,d="maxWait"in n,o=d?db(Bf(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function y(k){var P=r,E=i;return r=i=void 0,u=k,a=e.apply(E,P),a}function v(k){return u=k,s=setTimeout(g,t),c?y(k):a}function w(k){var P=k-l,E=k-u,R=t-P;return d?fb(R,o-E):R}function $(k){var P=k-l,E=k-u;return l===void 0||P>=t||P<0||d&&E>=o}function g(){var k=As();if($(k))return p(k);s=setTimeout(g,w(k))}function p(k){return s=void 0,f&&r?y(k):(r=i=void 0,a)}function m(){s!==void 0&&clearTimeout(s),u=0,r=l=i=s=void 0}function x(){return s===void 0?a:p(As())}function b(){var k=As(),P=$(k);if(r=arguments,i=this,l=k,P){if(s===void 0)return v(l);if(d)return s=setTimeout(g,t),y(l)}return s===void 0&&(s=setTimeout(g,t)),a}return b.cancel=m,b.flush=x,b}function su(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function hb(e){return!!e&&typeof e=="object"}function gb(e){return typeof e=="symbol"||hb(e)&&cb.call(e)==eb}function Bf(e){if(typeof e=="number")return e;if(gb(e))return Uf;if(su(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=su(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(tb,"");var n=rb.test(e);return n||ib.test(e)?ob(e.slice(2),n?2:8):nb.test(e)?Uf:+e}var mb=pb,Zm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)t.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Zm);var Ja=Zm.exports,M={};Object.defineProperty(M,"__esModule",{value:!0});M.checkSpecKeys=M.checkNavigable=M.changeSlide=M.canUseDOM=M.canGoNext=void 0;M.clamp=ev;M.swipeStart=M.swipeMove=M.swipeEnd=M.slidesOnRight=M.slidesOnLeft=M.slideHandler=M.siblingDirection=M.safePreventDefault=M.lazyStartIndex=M.lazySlidesOnRight=M.lazySlidesOnLeft=M.lazyEndIndex=M.keyHandler=M.initializedState=M.getWidth=M.getTrackLeft=M.getTrackCSS=M.getTrackAnimateCSS=M.getTotalSlides=M.getSwipeDirection=M.getSlideCount=M.getRequiredLazySlides=M.getPreClones=M.getPostClones=M.getOnDemandLazySlides=M.getNavigableIndexes=M.getHeight=M.extractObject=void 0;var vb=yb(j);function yb(e){return e&&e.__esModule?e:{default:e}}function Wf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wf(Object(n),!0).forEach(function(r){wb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ev(e,t,n){return Math.max(t,Math.min(e,n))}var Rn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};M.safePreventDefault=Rn;var Hc=function(t){for(var n=[],r=Uc(t),i=Bc(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};M.getOnDemandLazySlides=Hc;var xb=function(t){for(var n=[],r=Uc(t),i=Bc(t),o=r;o<i;o++)n.push(o);return n};M.getRequiredLazySlides=xb;var Uc=function(t){return t.currentSlide-tv(t)};M.lazyStartIndex=Uc;var Bc=function(t){return t.currentSlide+nv(t)};M.lazyEndIndex=Bc;var tv=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};M.lazySlidesOnLeft=tv;var nv=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};M.lazySlidesOnRight=nv;var la=function(t){return t&&t.offsetWidth||0};M.getWidth=la;var Wc=function(t){return t&&t.offsetHeight||0};M.getHeight=Wc;var qc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,a;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),a=Math.round(o*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?"left":a>=135&&a<=225?"right":n===!0?a>=35&&a<=135?"up":"down":"vertical"};M.getSwipeDirection=qc;var Vc=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};M.canGoNext=Vc;var Sb=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};M.extractObject=Sb;var bb=function(t){var n=vb.default.Children.count(t.children),r=t.listRef,i=Math.ceil(la(r)),o=t.trackRef&&t.trackRef.node,a=Math.ceil(la(o)),s;if(t.vertical)s=i;else{var l=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(l*=i/100),s=Math.ceil((i-l)/t.slidesToShow)}var u=r&&Wc(r.querySelector('[data-index="0"]')),c=u*t.slidesToShow,d=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(d=n-1-t.initialSlide);var f=t.lazyLoadedList||[],y=Hc(le(le({},t),{},{currentSlide:d,lazyLoadedList:f}));f=f.concat(y);var v={slideCount:n,slideWidth:s,listWidth:i,trackWidth:a,currentSlide:d,slideHeight:u,listHeight:c,lazyLoadedList:f};return t.autoplaying===null&&t.autoplay&&(v.autoplaying="playing"),v};M.initializedState=bb;var kb=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,a=t.index,s=t.slideCount,l=t.lazyLoad,u=t.currentSlide,c=t.centerMode,d=t.slidesToScroll,f=t.slidesToShow,y=t.useCSS,v=t.lazyLoadedList;if(n&&r)return{};var w=a,$,g,p,m={},x={},b=o?a:ev(a,0,s-1);if(i){if(!o&&(a<0||a>=s))return{};a<0?w=a+s:a>=s&&(w=a-s),l&&v.indexOf(w)<0&&(v=v.concat(w)),m={animating:!0,currentSlide:w,lazyLoadedList:v,targetSlide:w},x={animating:!1,targetSlide:w}}else $=w,w<0?($=w+s,o?s%d!==0&&($=s-s%d):$=0):!Vc(t)&&w>u?w=$=u:c&&w>=s?(w=o?s:s-1,$=o?0:s-1):w>=s&&($=w-s,o?s%d!==0&&($=0):$=s-f),!o&&w+f>=s&&($=s-f),g=Ni(le(le({},t),{},{slideIndex:w})),p=Ni(le(le({},t),{},{slideIndex:$})),o||(g===p&&(w=$),g=p),l&&(v=v.concat(Hc(le(le({},t),{},{currentSlide:w})))),y?(m={animating:!0,currentSlide:$,trackStyle:Gc(le(le({},t),{},{left:g})),lazyLoadedList:v,targetSlide:b},x={animating:!1,currentSlide:$,trackStyle:Ri(le(le({},t),{},{left:p})),swipeLeft:null,targetSlide:b}):m={currentSlide:$,trackStyle:Ri(le(le({},t),{},{left:p})),lazyLoadedList:v,targetSlide:b};return{state:m,nextState:x}};M.slideHandler=kb;var $b=function(t,n){var r,i,o,a,s,l=t.slidesToScroll,u=t.slidesToShow,c=t.slideCount,d=t.currentSlide,f=t.targetSlide,y=t.lazyLoad,v=t.infinite;if(a=c%l!==0,r=a?0:(c-d)%l,n.message==="previous")o=r===0?l:u-r,s=d-o,y&&!v&&(i=d-o,s=i===-1?c-1:i),v||(s=f-l);else if(n.message==="next")o=r===0?l:r,s=d+o,y&&!v&&(s=(d+l)%c+r),v||(s=f+l);else if(n.message==="dots")s=n.index*n.slidesToScroll;else if(n.message==="children"){if(s=n.index,v){var w=av(le(le({},t),{},{targetSlide:s}));s>n.currentSlide&&w==="left"?s=s-c:s<n.currentSlide&&w==="right"&&(s=s+c)}}else n.message==="index"&&(s=Number(n.index));return s};M.changeSlide=$b;var Cb=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};M.keyHandler=Cb;var Ob=function(t,n,r){return t.target.tagName==="IMG"&&Rn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};M.swipeStart=Ob;var Pb=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,a=n.swipeToSlide,s=n.verticalSwiping,l=n.rtl,u=n.currentSlide,c=n.edgeFriction,d=n.edgeDragged,f=n.onEdge,y=n.swiped,v=n.swiping,w=n.slideCount,$=n.slidesToScroll,g=n.infinite,p=n.touchObject,m=n.swipeEvent,x=n.listHeight,b=n.listWidth;if(!r){if(i)return Rn(t);o&&a&&s&&Rn(t);var k,P={},E=Ni(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var R=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!s&&!v&&R>10)return{scrolling:!0};s&&(p.swipeLength=R);var N=(l?-1:1)*(p.curX>p.startX?1:-1);s&&(N=p.curY>p.startY?1:-1);var F=Math.ceil(w/$),U=qc(n.touchObject,s),A=p.swipeLength;return g||(u===0&&(U==="right"||U==="down")||u+1>=F&&(U==="left"||U==="up")||!Vc(n)&&(U==="left"||U==="up"))&&(A=p.swipeLength*c,d===!1&&f&&(f(U),P.edgeDragged=!0)),!y&&m&&(m(U),P.swiped=!0),o?k=E+A*(x/b)*N:l?k=E-A*N:k=E+A*N,s&&(k=E+A*N),P=le(le({},P),{},{touchObject:p,swipeLeft:k,trackStyle:Ri(le(le({},n),{},{left:k}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(P.swiping=!0,Rn(t)),P}};M.swipeMove=Pb;var Eb=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,a=n.listWidth,s=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,d=n.scrolling,f=n.onSwipe,y=n.targetSlide,v=n.currentSlide,w=n.infinite;if(!r)return i&&Rn(t),{};var $=l?u/s:a/s,g=qc(o,l),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!o.swipeLength)return p;if(o.swipeLength>$){Rn(t),f&&f(g);var m,x,b=w?v:y;switch(g){case"left":case"up":x=b+uu(n),m=c?lu(n,x):x,p.currentDirection=0;break;case"right":case"down":x=b-uu(n),m=c?lu(n,x):x,p.currentDirection=1;break;default:m=b}p.triggerSlideHandler=m}else{var k=Ni(n);p.trackStyle=Gc(le(le({},n),{},{left:k}))}return p};M.swipeEnd=Eb;var rv=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};M.getNavigableIndexes=rv;var lu=function(t,n){var r=rv(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};M.checkNavigable=lu;var uu=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(l){if(t.vertical){if(l.offsetTop+Wc(l)/2>t.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+la(l)/2>t.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var a=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,s=Math.abs(r.dataset.index-a)||1;return s}else return t.slidesToScroll};M.getSlideCount=uu;var Za=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};M.checkSpecKeys=Za;var Ri=function(t){Za(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=ov(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",l=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=le(le({},o),{},{WebkitTransform:a,transform:s,msTransform:l})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};M.getTrackCSS=Ri;var Gc=function(t){Za(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Ri(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};M.getTrackAnimateCSS=Gc;var Ni=function(t){if(t.unslick)return 0;Za(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,a=t.slideCount,s=t.slidesToShow,l=t.slidesToScroll,u=t.slideWidth,c=t.listWidth,d=t.variableWidth,f=t.slideHeight,y=t.fade,v=t.vertical,w=0,$,g,p=0;if(y||t.slideCount===1)return 0;var m=0;if(i?(m=-di(t),a%l!==0&&n+l>a&&(m=-(n>a?s-(n-a):a%l)),o&&(m+=parseInt(s/2))):(a%l!==0&&n+l>a&&(m=s-a%l),o&&(m=parseInt(s/2))),w=m*u,p=m*f,v?$=n*f*-1+p:$=n*u*-1+w,d===!0){var x,b=r&&r.node;if(x=n+di(t),g=b&&b.childNodes[x],$=g?g.offsetLeft*-1:0,o===!0){x=i?n+di(t):n,g=b&&b.children[x],$=0;for(var k=0;k<x;k++)$-=b&&b.children[k]&&b.children[k].offsetWidth;$-=parseInt(t.centerPadding),$+=g&&(c-g.offsetWidth)/2}}return $};M.getTrackLeft=Ni;var di=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};M.getPreClones=di;var iv=function(t){return t.unslick||!t.infinite?0:t.slideCount};M.getPostClones=iv;var ov=function(t){return t.slideCount===1?1:di(t)+t.slideCount+iv(t)};M.getTotalSlides=ov;var av=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+sv(t)?"left":"right":t.targetSlide<t.currentSlide-lv(t)?"right":"left"};M.siblingDirection=av;var sv=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),i&&n%2===0&&(a+=1),a}return i?0:n-1};M.slidesOnRight=sv;var lv=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),!i&&n%2===0&&(a+=1),a}return i?n-1:0};M.slidesOnLeft=lv;var jb=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};M.canUseDOM=jb;var es={};function cu(e){"@babel/helpers - typeof";return cu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cu(e)}Object.defineProperty(es,"__esModule",{value:!0});es.Track=void 0;var Zt=uv(j),Fs=uv(Ja),Hs=M;function uv(e){return e&&e.__esModule?e:{default:e}}function du(){return du=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},du.apply(this,arguments)}function Lb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Tb(e,t,n){return t&&qf(e.prototype,t),n&&qf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _b(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fu(e,t)}function fu(e,t){return fu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},fu(e,t)}function Rb(e){var t=Ib();return function(){var r=ua(e),i;if(t){var o=ua(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Nb(this,i)}}function Nb(e,t){if(t&&(cu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pu(e)}function pu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ib(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ua(e){return ua=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ua(e)}function Vf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vf(Object(n),!0).forEach(function(r){hu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Us=function(t){var n,r,i,o,a;t.rtl?a=t.slideCount-1-t.index:a=t.index,i=a<0||a>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(a-t.currentSlide)%t.slideCount===0,a>t.currentSlide-o-1&&a<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=a&&a<t.currentSlide+t.slidesToShow;var s;t.targetSlide<0?s=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?s=t.targetSlide-t.slideCount:s=t.targetSlide;var l=a===s;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},zb=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Bs=function(t,n){return t.key||n},Mb=function(t){var n,r=[],i=[],o=[],a=Zt.default.Children.count(t.children),s=(0,Hs.lazyStartIndex)(t),l=(0,Hs.lazyEndIndex)(t);return Zt.default.Children.forEach(t.children,function(u,c){var d,f={message:"children",index:c,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(c)>=0?d=u:d=Zt.default.createElement("div",null);var y=zb(Ue(Ue({},t),{},{index:c})),v=d.props.className||"",w=Us(Ue(Ue({},t),{},{index:c}));if(r.push(Zt.default.cloneElement(d,{key:"original"+Bs(d,c),"data-index":c,className:(0,Fs.default)(w,v),tabIndex:"-1","aria-hidden":!w["slick-active"],style:Ue(Ue({outline:"none"},d.props.style||{}),y),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})),t.infinite&&t.fade===!1){var $=a-c;$<=(0,Hs.getPreClones)(t)&&a!==t.slidesToShow&&(n=-$,n>=s&&(d=u),w=Us(Ue(Ue({},t),{},{index:n})),i.push(Zt.default.cloneElement(d,{key:"precloned"+Bs(d,n),"data-index":n,tabIndex:"-1",className:(0,Fs.default)(w,v),"aria-hidden":!w["slick-active"],style:Ue(Ue({},d.props.style||{}),y),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}}))),a!==t.slidesToShow&&(n=a+c,n<l&&(d=u),w=Us(Ue(Ue({},t),{},{index:n})),o.push(Zt.default.cloneElement(d,{key:"postcloned"+Bs(d,n),"data-index":n,tabIndex:"-1",className:(0,Fs.default)(w,v),"aria-hidden":!w["slick-active"],style:Ue(Ue({},d.props.style||{}),y),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},Db=function(e){_b(n,e);var t=Rb(n);function n(){var r;Lb(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=t.call.apply(t,[this].concat(o)),hu(pu(r),"node",null),hu(pu(r),"handleRef",function(s){r.node=s}),r}return Tb(n,[{key:"render",value:function(){var i=Mb(this.props),o=this.props,a=o.onMouseEnter,s=o.onMouseOver,l=o.onMouseLeave,u={onMouseEnter:a,onMouseOver:s,onMouseLeave:l};return Zt.default.createElement("div",du({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(Zt.default.PureComponent);es.Track=Db;var ts={};function gu(e){"@babel/helpers - typeof";return gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gu(e)}Object.defineProperty(ts,"__esModule",{value:!0});ts.Dots=void 0;var po=cv(j),Ab=cv(Ja),Gf=M;function cv(e){return e&&e.__esModule?e:{default:e}}function Kf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kf(Object(n),!0).forEach(function(r){Hb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ub(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Bb(e,t,n){return t&&Qf(e.prototype,t),n&&Qf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&mu(e,t)}function mu(e,t){return mu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},mu(e,t)}function qb(e){var t=Kb();return function(){var r=ca(e),i;if(t){var o=ca(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Vb(this,i)}}function Vb(e,t){if(t&&(gu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Gb(e)}function Gb(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Kb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ca(e){return ca=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ca(e)}var Qb=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},Yb=function(e){Wb(n,e);var t=qb(n);function n(){return Ub(this,n),t.apply(this,arguments)}return Bb(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,a=i.onMouseOver,s=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,d=i.slideCount,f=i.currentSlide,y=Qb({slideCount:d,slidesToScroll:u,slidesToShow:c,infinite:l}),v={onMouseEnter:o,onMouseOver:a,onMouseLeave:s},w=[],$=0;$<y;$++){var g=($+1)*u-1,p=l?g:(0,Gf.clamp)(g,0,d-1),m=p-(u-1),x=l?m:(0,Gf.clamp)(m,0,d-1),b=(0,Ab.default)({"slick-active":l?f>=x&&f<=p:f===x}),k={message:"dots",index:$,slidesToScroll:u,currentSlide:f},P=this.clickHandler.bind(this,k);w=w.concat(po.default.createElement("li",{key:$,className:b},po.default.cloneElement(this.props.customPaging($),{onClick:P})))}return po.default.cloneElement(this.props.appendDots(w),Fb({className:this.props.dotsClass},v))}}]),n}(po.default.PureComponent);ts.Dots=Yb;var Tr={};function vu(e){"@babel/helpers - typeof";return vu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vu(e)}Object.defineProperty(Tr,"__esModule",{value:!0});Tr.PrevArrow=Tr.NextArrow=void 0;var mr=fv(j),dv=fv(Ja),Xb=M;function fv(e){return e&&e.__esModule?e:{default:e}}function da(){return da=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},da.apply(this,arguments)}function Yf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function fa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yf(Object(n),!0).forEach(function(r){Jb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hv(e,t,n){return t&&Xf(e.prototype,t),n&&Xf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function gv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&yu(e,t)}function yu(e,t){return yu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},yu(e,t)}function mv(e){var t=tk();return function(){var r=pa(e),i;if(t){var o=pa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Zb(this,i)}}function Zb(e,t){if(t&&(vu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ek(e)}function ek(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pa(e){return pa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},pa(e)}var nk=function(e){gv(n,e);var t=mv(n);function n(){return pv(this,n),t.apply(this,arguments)}return hv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var a={key:"0","data-role":"none",className:(0,dv.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=mr.default.cloneElement(this.props.prevArrow,fa(fa({},a),s)):l=mr.default.createElement("button",da({key:"0",type:"button"},a)," ","Previous"),l}}]),n}(mr.default.PureComponent);Tr.PrevArrow=nk;var rk=function(e){gv(n,e);var t=mv(n);function n(){return pv(this,n),t.apply(this,arguments)}return hv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,Xb.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var a={key:"1","data-role":"none",className:(0,dv.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=mr.default.cloneElement(this.props.nextArrow,fa(fa({},a),s)):l=mr.default.createElement("button",da({key:"1",type:"button"},a)," ","Next"),l}}]),n}(mr.default.PureComponent);Tr.NextArrow=rk;var vv=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var a=o[i];n.call(r,a[1],a[0])}},t}()}(),wu=typeof window<"u"&&typeof document<"u"&&window.document===document,ha=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),ik=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ha):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),ok=2;function ak(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function a(){ik(o)}function s(){var l=Date.now();if(n){if(l-i<ok)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=l}return s}var sk=20,lk=["top","right","bottom","left","width","height","size","weight"],uk=typeof MutationObserver<"u",ck=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=ak(this.refresh.bind(this),sk)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!wu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),uk?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!wu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=lk.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),yv=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},_r=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||ha},wv=ns(0,0,0,0);function ga(e){return parseFloat(e)||0}function Jf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+ga(o)},0)}function dk(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],a=e["padding-"+o];n[o]=ga(a)}return n}function fk(e){var t=e.getBBox();return ns(0,0,t.width,t.height)}function pk(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return wv;var r=_r(e).getComputedStyle(e),i=dk(r),o=i.left+i.right,a=i.top+i.bottom,s=ga(r.width),l=ga(r.height);if(r.boxSizing==="border-box"&&(Math.round(s+o)!==t&&(s-=Jf(r,"left","right")+o),Math.round(l+a)!==n&&(l-=Jf(r,"top","bottom")+a)),!gk(e)){var u=Math.round(s+o)-t,c=Math.round(l+a)-n;Math.abs(u)!==1&&(s-=u),Math.abs(c)!==1&&(l-=c)}return ns(i.left,i.top,s,l)}var hk=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof _r(e).SVGGraphicsElement}:function(e){return e instanceof _r(e).SVGElement&&typeof e.getBBox=="function"}}();function gk(e){return e===_r(e).document.documentElement}function mk(e){return wu?hk(e)?fk(e):pk(e):wv}function vk(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(o.prototype);return yv(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function ns(e,t,n,r){return{x:e,y:t,width:n,height:r}}var yk=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ns(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=mk(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),wk=function(){function e(t,n){var r=vk(n);yv(this,{target:t,contentRect:r})}return e}(),xk=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new vv,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _r(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new yk(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _r(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new wk(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),xv=typeof WeakMap<"u"?new WeakMap:new vv,Sv=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=ck.getInstance(),r=new xk(t,n,this);xv.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Sv.prototype[e]=function(){var t;return(t=xv.get(this))[e].apply(t,arguments)}});var Sk=function(){return typeof ha.ResizeObserver<"u"?ha.ResizeObserver:Sv}();const bk=Object.freeze(Object.defineProperty({__proto__:null,default:Sk},Symbol.toStringTag,{value:"Module"})),kk=Wv(bk);Object.defineProperty(Xa,"__esModule",{value:!0});Xa.InnerSlider=void 0;var Me=Wi(j),$k=Wi(Jm),Ck=Wi(mb),Ok=Wi(Ja),ce=M,Pk=es,Ek=ts,Zf=Tr,jk=Wi(kk);function Wi(e){return e&&e.__esModule?e:{default:e}}function ma(e){"@babel/helpers - typeof";return ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ma(e)}function va(){return va=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},va.apply(this,arguments)}function Lk(e,t){if(e==null)return{};var n=Tk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Tk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ep(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ep(Object(n),!0).forEach(function(r){Y(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ep(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Rk(e,t,n){return t&&tp(e.prototype,t),n&&tp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Nk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xu(e,t)}function xu(e,t){return xu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},xu(e,t)}function Ik(e){var t=Mk();return function(){var r=ya(e),i;if(t){var o=ya(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return zk(this,i)}}function zk(e,t){if(t&&(ma(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Q(e)}function Q(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Mk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ya(e){return ya=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ya(e)}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Dk=function(e){Nk(n,e);var t=Ik(n);function n(r){var i;_k(this,n),i=t.call(this,r),Y(Q(i),"listRefHandler",function(a){return i.list=a}),Y(Q(i),"trackRefHandler",function(a){return i.track=a}),Y(Q(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var a=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,ce.getHeight)(a)+"px"}}),Y(Q(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var a=(0,ce.getOnDemandLazySlides)(W(W({},i.props),i.state));a.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}var s=W({listRef:i.list,trackRef:i.track},i.props);i.updateState(s,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new jk.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),Y(Q(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(a){return clearTimeout(a)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),Y(Q(i),"componentDidUpdate",function(a){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var s=(0,ce.getOnDemandLazySlides)(W(W({},i.props),i.state));s.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}i.adaptHeight();var l=W(W({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(a);u&&i.updateState(l,u,function(){i.state.currentSlide>=Me.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Me.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),Y(Q(i),"onWindowResized",function(a){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,Ck.default)(function(){return i.resizeWindow(a)},50),i.debouncedResize()}),Y(Q(i),"resizeWindow",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(i.track&&i.track.node);if(s){var l=W(W({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,a,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),Y(Q(i),"updateState",function(a,s,l){var u=(0,ce.initializedState)(a);a=W(W(W({},a),u),{},{slideIndex:u.currentSlide});var c=(0,ce.getTrackLeft)(a);a=W(W({},a),{},{left:c});var d=(0,ce.getTrackCSS)(a);(s||Me.default.Children.count(i.props.children)!==Me.default.Children.count(a.children))&&(u.trackStyle=d),i.setState(u,l)}),Y(Q(i),"ssrInit",function(){if(i.props.variableWidth){var a=0,s=0,l=[],u=(0,ce.getPreClones)(W(W(W({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,ce.getPostClones)(W(W(W({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(P){l.push(P.props.style.width),a+=P.props.style.width});for(var d=0;d<u;d++)s+=l[l.length-1-d],a+=l[l.length-1-d];for(var f=0;f<c;f++)a+=l[f];for(var y=0;y<i.state.currentSlide;y++)s+=l[y];var v={width:a+"px",left:-s+"px"};if(i.props.centerMode){var w="".concat(l[i.state.currentSlide],"px");v.left="calc(".concat(v.left," + (100% - ").concat(w,") / 2 ) ")}return{trackStyle:v}}var $=Me.default.Children.count(i.props.children),g=W(W(W({},i.props),i.state),{},{slideCount:$}),p=(0,ce.getPreClones)(g)+(0,ce.getPostClones)(g)+$,m=100/i.props.slidesToShow*p,x=100/p,b=-x*((0,ce.getPreClones)(g)+i.state.currentSlide)*m/100;i.props.centerMode&&(b+=(100-x*m/100)/2);var k={width:m+"%",left:b+"%"};return{slideWidth:x+"%",trackStyle:k}}),Y(Q(i),"checkImagesLoad",function(){var a=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],s=a.length,l=0;Array.prototype.forEach.call(a,function(u){var c=function(){return++l&&l>=s&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var d=u.onclick;u.onclick=function(){d(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),Y(Q(i),"progressiveLazyLoad",function(){for(var a=[],s=W(W({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,ce.getPostClones)(s);l++)if(i.state.lazyLoadedList.indexOf(l)<0){a.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,ce.getPreClones)(s);u--)if(i.state.lazyLoadedList.indexOf(u)<0){a.push(u);break}a.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),Y(Q(i),"slideHandler",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,c=l.beforeChange,d=l.onLazyLoad,f=l.speed,y=l.afterChange,v=i.state.currentSlide,w=(0,ce.slideHandler)(W(W(W({index:a},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!s})),$=w.state,g=w.nextState;if($){c&&c(v,$.currentSlide);var p=$.lazyLoadedList.filter(function(m){return i.state.lazyLoadedList.indexOf(m)<0});d&&p.length>0&&d(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),y&&y(v),delete i.animationEndCallback),i.setState($,function(){u&&i.asNavForIndex!==a&&(i.asNavForIndex=a,u.innerSlider.slideHandler(a)),g&&(i.animationEndCallback=setTimeout(function(){var m=g.animating,x=Lk(g,["animating"]);i.setState(x,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:m})},10)),y&&y($.currentSlide),delete i.animationEndCallback})},f))})}}),Y(Q(i),"changeSlide",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=W(W({},i.props),i.state),u=(0,ce.changeSlide)(l,a);if(!(u!==0&&!u)&&(s===!0?i.slideHandler(u,s):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),Y(Q(i),"clickHandler",function(a){i.clickable===!1&&(a.stopPropagation(),a.preventDefault()),i.clickable=!0}),Y(Q(i),"keyHandler",function(a){var s=(0,ce.keyHandler)(a,i.props.accessibility,i.props.rtl);s!==""&&i.changeSlide({message:s})}),Y(Q(i),"selectHandler",function(a){i.changeSlide(a)}),Y(Q(i),"disableBodyScroll",function(){var a=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=a}),Y(Q(i),"enableBodyScroll",function(){window.ontouchmove=null}),Y(Q(i),"swipeStart",function(a){i.props.verticalSwiping&&i.disableBodyScroll();var s=(0,ce.swipeStart)(a,i.props.swipe,i.props.draggable);s!==""&&i.setState(s)}),Y(Q(i),"swipeMove",function(a){var s=(0,ce.swipeMove)(a,W(W(W({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));s&&(s.swiping&&(i.clickable=!1),i.setState(s))}),Y(Q(i),"swipeEnd",function(a){var s=(0,ce.swipeEnd)(a,W(W(W({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(s){var l=s.triggerSlideHandler;delete s.triggerSlideHandler,i.setState(s),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),Y(Q(i),"touchEnd",function(a){i.swipeEnd(a),i.clickable=!0}),Y(Q(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),Y(Q(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),Y(Q(i),"slickGoTo",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a=Number(a),isNaN(a))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:a,currentSlide:i.state.currentSlide},s)},0))}),Y(Q(i),"play",function(){var a;if(i.props.rtl)a=i.state.currentSlide-i.props.slidesToScroll;else if((0,ce.canGoNext)(W(W({},i.props),i.state)))a=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(a)}),Y(Q(i),"autoPlay",function(a){i.autoplayTimer&&clearInterval(i.autoplayTimer);var s=i.state.autoplaying;if(a==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(a==="leave"){if(s==="paused"||s==="focused")return}else if(a==="blur"&&(s==="paused"||s==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),Y(Q(i),"pause",function(a){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var s=i.state.autoplaying;a==="paused"?i.setState({autoplaying:"paused"}):a==="focused"?(s==="hovered"||s==="playing")&&i.setState({autoplaying:"focused"}):s==="playing"&&i.setState({autoplaying:"hovered"})}),Y(Q(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),Y(Q(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),Y(Q(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),Y(Q(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),Y(Q(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),Y(Q(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),Y(Q(i),"render",function(){var a=(0,Ok.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),s=W(W({},i.props),i.state),l=(0,ce.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=W(W({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=(0,ce.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;d=W(W({},d),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),c=Me.default.createElement(Ek.Dots,d)}var y,v,w=(0,ce.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);w.clickHandler=i.changeSlide,i.props.arrows&&(y=Me.default.createElement(Zf.PrevArrow,w),v=Me.default.createElement(Zf.NextArrow,w));var $=null;i.props.vertical&&($={height:i.state.listHeight});var g=null;i.props.vertical===!1?i.props.centerMode===!0&&(g={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(g={padding:i.props.centerPadding+" 0px"});var p=W(W({},$),g),m=i.props.touchMove,x={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:m?i.swipeStart:null,onMouseMove:i.state.dragging&&m?i.swipeMove:null,onMouseUp:m?i.swipeEnd:null,onMouseLeave:i.state.dragging&&m?i.swipeEnd:null,onTouchStart:m?i.swipeStart:null,onTouchMove:i.state.dragging&&m?i.swipeMove:null,onTouchEnd:m?i.touchEnd:null,onTouchCancel:i.state.dragging&&m?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},b={className:a,dir:"ltr",style:i.props.style};return i.props.unslick&&(x={className:"slick-list"},b={className:a}),Me.default.createElement("div",b,i.props.unslick?"":y,Me.default.createElement("div",va({ref:i.listRefHandler},x),Me.default.createElement(Pk.Track,va({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":v,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=W(W({},$k.default),{},{currentSlide:i.props.initialSlide,slideCount:Me.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=W(W({},i.state),o),i}return Rk(n,[{key:"didPropsChange",value:function(i){for(var o=!1,a=0,s=Object.keys(this.props);a<s.length;a++){var l=s[a];if(!i.hasOwnProperty(l)){o=!0;break}if(!(ma(i[l])==="object"||typeof i[l]=="function")&&i[l]!==this.props[l]){o=!0;break}}return o||Me.default.Children.count(this.props.children)!==Me.default.Children.count(i.children)}}]),n}(Me.default.Component);Xa.InnerSlider=Dk;var Ak=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},Fk=Ak,Hk=Fk,Uk=function(e){var t=/[height|width]$/;return t.test(e)},np=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=Hk(r),Uk(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},Bk=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=np(n),r<e.length-1&&(t+=", ")}),t):np(e)},Wk=Bk,bv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(j);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(a){return t.default.createElement("ul",{style:{display:"block"}},a)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(a){return t.default.createElement("button",null,a+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(bv);var Ws,rp;function qk(){if(rp)return Ws;rp=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Ws=e,Ws}var qs,ip;function kv(){if(ip)return qs;ip=1;function e(r,i){var o=0,a=r.length,s;for(o;o<a&&(s=i(r[o],o),s!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return qs={isFunction:n,isArray:t,each:e},qs}var Vs,op;function Vk(){if(op)return Vs;op=1;var e=qk(),t=kv().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(a){o.mql=a.currentTarget||a,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,a){if(o.equals(r))return o.destroy(),!i.splice(a,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Vs=n,Vs}var Gs,ap;function Gk(){if(ap)return Gs;ap=1;var e=Vk(),t=kv(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(a,s,l){var u=this.queries,c=l&&this.browserIsIncapable;return u[a]||(u[a]=new e(a,c)),r(s)&&(s={match:s}),i(s)||(s=[s]),n(s,function(d){r(d)&&(d={match:d}),u[a].addHandler(d)}),this},unregister:function(a,s){var l=this.queries[a];return l&&(s?l.removeHandler(s):(l.clear(),delete this.queries[a])),this}},Gs=o,Gs}var Ks,sp;function Kk(){if(sp)return Ks;sp=1;var e=Gk();return Ks=new e,Ks}(function(e){function t(E){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},t(E)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(j),r=Xa,i=s(Wk),o=s(bv),a=M;function s(E){return E&&E.__esModule?E:{default:E}}function l(){return l=Object.assign||function(E){for(var R=1;R<arguments.length;R++){var N=arguments[R];for(var F in N)Object.prototype.hasOwnProperty.call(N,F)&&(E[F]=N[F])}return E},l.apply(this,arguments)}function u(E,R){var N=Object.keys(E);if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(E);R&&(F=F.filter(function(U){return Object.getOwnPropertyDescriptor(E,U).enumerable})),N.push.apply(N,F)}return N}function c(E){for(var R=1;R<arguments.length;R++){var N=arguments[R]!=null?arguments[R]:{};R%2?u(Object(N),!0).forEach(function(F){b(E,F,N[F])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(N)):u(Object(N)).forEach(function(F){Object.defineProperty(E,F,Object.getOwnPropertyDescriptor(N,F))})}return E}function d(E,R){if(!(E instanceof R))throw new TypeError("Cannot call a class as a function")}function f(E,R){for(var N=0;N<R.length;N++){var F=R[N];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(E,F.key,F)}}function y(E,R,N){return R&&f(E.prototype,R),N&&f(E,N),Object.defineProperty(E,"prototype",{writable:!1}),E}function v(E,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function");E.prototype=Object.create(R&&R.prototype,{constructor:{value:E,writable:!0,configurable:!0}}),Object.defineProperty(E,"prototype",{writable:!1}),R&&w(E,R)}function w(E,R){return w=Object.setPrototypeOf||function(F,U){return F.__proto__=U,F},w(E,R)}function $(E){var R=m();return function(){var F=x(E),U;if(R){var A=x(this).constructor;U=Reflect.construct(F,arguments,A)}else U=F.apply(this,arguments);return g(this,U)}}function g(E,R){if(R&&(t(R)==="object"||typeof R=="function"))return R;if(R!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(E)}function p(E){if(E===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E}function m(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(E){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(N){return N.__proto__||Object.getPrototypeOf(N)},x(E)}function b(E,R,N){return R in E?Object.defineProperty(E,R,{value:N,enumerable:!0,configurable:!0,writable:!0}):E[R]=N,E}var k=(0,a.canUseDOM)()&&Kk(),P=function(E){v(N,E);var R=$(N);function N(F){var U;return d(this,N),U=R.call(this,F),b(p(U),"innerSliderRefHandler",function(A){return U.innerSlider=A}),b(p(U),"slickPrev",function(){return U.innerSlider.slickPrev()}),b(p(U),"slickNext",function(){return U.innerSlider.slickNext()}),b(p(U),"slickGoTo",function(A){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return U.innerSlider.slickGoTo(A,C)}),b(p(U),"slickPause",function(){return U.innerSlider.pause("paused")}),b(p(U),"slickPlay",function(){return U.innerSlider.autoPlay("play")}),U.state={breakpoint:null},U._responsiveMediaHandlers=[],U}return y(N,[{key:"media",value:function(U,A){k.register(U,A),this._responsiveMediaHandlers.push({query:U,handler:A})}},{key:"componentDidMount",value:function(){var U=this;if(this.props.responsive){var A=this.props.responsive.map(function(L){return L.breakpoint});A.sort(function(L,B){return L-B}),A.forEach(function(L,B){var q;B===0?q=(0,i.default)({minWidth:0,maxWidth:L}):q=(0,i.default)({minWidth:A[B-1]+1,maxWidth:L}),(0,a.canUseDOM)()&&U.media(q,function(){U.setState({breakpoint:L})})});var C=(0,i.default)({minWidth:A.slice(-1)[0]});(0,a.canUseDOM)()&&this.media(C,function(){U.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(U){k.unregister(U.query,U.handler)})}},{key:"render",value:function(){var U=this,A,C;this.state.breakpoint?(C=this.props.responsive.filter(function(Pe){return Pe.breakpoint===U.state.breakpoint}),A=C[0].settings==="unslick"?"unslick":c(c(c({},o.default),this.props),C[0].settings)):A=c(c({},o.default),this.props),A.centerMode&&(A.slidesToScroll>1,A.slidesToScroll=1),A.fade&&(A.slidesToShow>1,A.slidesToScroll>1,A.slidesToShow=1,A.slidesToScroll=1);var L=n.default.Children.toArray(this.props.children);L=L.filter(function(Pe){return typeof Pe=="string"?!!Pe.trim():!!Pe}),A.variableWidth&&(A.rows>1||A.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),A.variableWidth=!1);for(var B=[],q=null,T=0;T<L.length;T+=A.rows*A.slidesPerRow){for(var I=[],H=T;H<T+A.rows*A.slidesPerRow;H+=A.slidesPerRow){for(var X=[],K=H;K<H+A.slidesPerRow&&(A.variableWidth&&L[K].props.style&&(q=L[K].props.style.width),!(K>=L.length));K+=1)X.push(n.default.cloneElement(L[K],{key:100*T+10*H+K,tabIndex:-1,style:{width:"".concat(100/A.slidesPerRow,"%"),display:"inline-block"}}));I.push(n.default.createElement("div",{key:10*T+H},X))}A.variableWidth?B.push(n.default.createElement("div",{key:T,style:{width:q}},I)):B.push(n.default.createElement("div",{key:T},I))}if(A==="unslick"){var Lt="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:Lt},L)}else B.length<=A.slidesToShow&&(A.unslick=!0);return n.default.createElement(r.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},A),B)}}]),N}(n.default.Component);e.default=P})(Xm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Xm);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(Ym);const rs=Tu(Ym);const Qk=S.div`
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
`,Yk=S.img`
  height: calc(74vw / 14.4);
  width: calc(74vw / 14.4);
  object-fit: contain;

  @media (max-width: ${O}) {
    height: calc(74vw / 5.08);
    width: calc(74vw / 5.08);
  }
`,Xk=({slide:e})=>h.jsx(Qk,{children:h.jsx(Yk,{src:e.src,alt:e.alt})}),Jk=S.div`
  margin: 0 2vw;
  width: 69vw;
  position: relative;

  @media (max-width: ${O}) {
    margin: 0 auto;
    width: 100%;
  }
`,lp=({slides:e,size:t})=>{const r={dots:!1,arrows:!1,infinite:!0,slidesToShow:t==="small"?4:11,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1,draggable:!0};return h.jsx(Jk,{children:h.jsx(rs,{...r,children:e.map(i=>h.jsx(Xk,{slide:i},i.id))})})},{whiteColor:$v,darkGrayColor:Zk}=re,e2=S.section`
  width: 100vw;
  box-sizing: border-box;
  ${qt};
  background-position: center -9.72vw;
  min-height: calc(800vw / 14.4 - 9.72vw);
  padding: 8.26vw 1vw 8.26vw 4.28vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-image: url(${sS.background});
  //border-radius: 0 0 1.6vw 1.6vw;
  border-radius: 0;

  @media (max-width: ${O}) {
    padding: 22vw 0 20.27vw 9vw;
    min-height: 140vw;
    flex-direction: column;
    background-image: none;
    background-color: ${Zk};
    border-radius: 0;
    overflow-x: hidden;
  }
`,t2=S.div`
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
`,n2=S.p`
  ${Mc};
  max-width: 37%;
  margin: 2vw 0 6.18vw;

  @media (max-width: 1400px) {
    max-width: 90%;
    margin: 7.87vw 0 4.3vw;
  }
`,r2=S.p`
  min-width: 22.5vw;
  ${Z};
  ${he};
  color: ${$v};
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
`,i2=({availableCurrencies:e})=>{const{title:t,text:n,subtitle:r,coins:i}=e,o=Et();return h.jsxs(e2,{children:[h.jsx(jt,{color:$v,children:t}),h.jsx(n2,{children:n}),h.jsxs(t2,{children:[h.jsx(r2,{children:r}),o?h.jsx(lp,{slides:i,size:"small"}):h.jsx(lp,{slides:i,size:"big"})]})]})},o2=S(Bn)`
  color: ${re.whiteColor};
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
`,Kc=({children:e,...t})=>h.jsx(o2,{...t,children:e}),{greenColor:Cv}=re,a2=S.div`
  width: 100%;

  @media (max-width: ${O}) {
    width: 82.41vw;
    margin-right: 7.66vw;
    height: 100%;
    display: flex;
  }
`,s2=S.div`
  margin-top: 2.57vw;
  padding: 0 0 0 6vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 82.25vw;
  ${zc};
  background-image: url(${Df.backgroundL});
  border-radius: 30px;

  @media (max-width: ${O}) {
    margin-top: 0;
    padding: 8.86vw 4.53vw;
    justify-content: start;
    flex-direction: column;
    width: 82.41vw;
    height: 100%;
    background-image: url(${Df.backgroundS});
  }
`,l2=S.p`
  ${Mc};
  margin: 6.74vw 0 2.57vw;

  @media (max-width: ${O}) {
    margin: 12.95vw 0 4.32vw;
  }
`,u2=S.div`
  width: 32vw;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: ${O}) {
    margin: 0 auto;
    width: 70vw;
    box-sizing: border-box;
  }
`,c2=S(ct)`
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${Cv};
  font-size: 1.74vw;
  ${he};
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
    background-image: url(${An.playIconGreen});
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
`,d2=S(ct)`
  text-decoration: underline;
  width: fit-content;
  background: transparent;
  color: ${Cv};
  font-size: 1.74vw;
  ${he};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;

  @media (max-width: ${O}) {
    font-size: 4.91vw;
  }
`,f2=S.div`
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
`,p2=S.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,h2=(e,t)=>{switch(e.id){case Wm:return e.link&&h.jsx(d2,{color:"transparent",href:e.link.href,target:"_blank",rel:"noopener noreferrer",children:e.link.value});case qm:return h.jsx(Qm,{links:t});case Vm:return e.link&&h.jsx(c2,{color:"transparent",href:e.link.href,target:"_blank",rel:"noopener noreferrer",children:e.link.value});default:return null}},Ov=({slide:e,links:t})=>{const n=Et();return h.jsx(a2,{children:h.jsxs(s2,{children:[n&&h.jsx(Kc,{children:e.subtitle}),h.jsxs(u2,{children:[h.jsx(l2,{children:e.textContent}),h2(e,t)]}),h.jsx(f2,{children:h.jsx(p2,{src:e.image.src,alt:e.image.alt})})]})})},g2=S.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,m2=({slides:e,links:t})=>{const n={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return h.jsx(g2,{children:h.jsx(rs,{...n,children:e.map(r=>h.jsx(Ov,{slide:r,links:t},r.id))})})},v2=S.button`
  ${Z};
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

  ${e=>e.disabled&&ve`
      cursor: not-allowed;
      opacity: 1;
      pointer-events: none;
    `}
`;function Ke({className:e,children:t,onClick:n,type:r,disabled:i}){return h.jsx(v2,{type:r,className:e,disabled:i,onClick:n,children:t})}const{whiteColor:y2,greenColor:w2}=re,x2=S(Ke)`
  padding: 0 2vw;
  background-color: transparent;
  width: ${({$width:e})=>e};
  border-bottom: 2px solid
    ${({$isActive:e})=>e?w2:y2};
`,S2=({isActive:e,id:t,onClick:n,children:r,width:i})=>h.jsx(x2,{$isActive:e,$width:i,disabled:e,type:"button",onClick:()=>n(t),children:r}),{whiteColor:up}=re,b2=S.section`
  ${qt};
  //border-radius: 1.6vw 1.6vw 0 0;
  min-height: calc(901vw / 14.4);
  padding: 4.28vw;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${zf.backgroundL});

  @media (max-width: ${O}) {
    min-height: calc(970vw / 5.08);
    //border-radius: 3.93vw 3.93vw 0 0;
    padding: 14.93vw 0;
    flex-direction: column;
    background-image: url(${zf.backgroundS});
  }
`,k2=S(jt)`
  width: 80%;
`,$2=S(Fc)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${O}) {
    margin: 1.77vw 0 10.61vw;
  }
`,C2=S.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,O2=({id:e,title:t})=>{const n=Et(),{t:r}=ut(),i=xt("ProductAndService",r),{text:o,slides:a,mobileWallet:s,availableCurrencies:l,videoSlider:u}=i,[c,d]=j.useState(a[0].id),f=w=>{d(w)},y=a.map(w=>w.id),v=a.find(w=>w.id===c);return h.jsxs("section",{id:e,children:[h.jsxs(b2,{children:[h.jsx(k2,{color:up,children:t}),h.jsx($2,{color:up,children:o}),!n&&h.jsx(C2,{children:y.map((w,$)=>{const g=c===w,p=a.find(m=>m.id===w);if(p){const x=[29,29,27,15][$];return h.jsx(S2,{id:p.id,width:`${x}%`,isActive:g,onClick:f,children:h.jsx(Kc,{children:p.subtitle})},p.id)}return null})}),n?h.jsx(m2,{slides:a,links:s.links}):v&&h.jsx(Ov,{slide:v,links:s.links})]}),h.jsx(JS,{mobileWallet:s}),h.jsx(i2,{availableCurrencies:l})]})},{whiteColor:P2,greenColor:E2,lightGreenColor:j2}=re,L2=S.div`
  grid-column: 3 / 4;
  width: 100%;
  display: flex;
  justify-content: end;
`,T2=S(Ke)`
  color: transparent;
  padding: 0.8vw 1.7vw 0.8vw 1.7vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    133deg,
    ${E2} 0%,
    ${j2} 100%
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
`,_2=S.div`
  width: 1.04vw;
  height: 1.18vw;
  background-image: url(${An.playIconWhite});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${O}) {
    width: 3.34vw;
    height: 2.95vw;
  }
`,R2=S.span`
  margin-right: 1vw;
  color: ${P2};
  font-size: 1.11vw;
  ${Ya};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.32px;

  @media (max-width: ${O}) {
    margin-right: 4vw;
    font-size: 3.15vw;
  }
`,cp=({text:e})=>{const[t,n]=j.useState(!1),r=Dr(),i=()=>{n(!0),r("/payment-fees"),window.scrollTo({top:0})};return h.jsx(L2,{children:h.jsxs(T2,{type:"button",disabled:t,onClick:i,children:[h.jsx(R2,{children:e}),h.jsx(_2,{})]})})},{lightBlackColor:Pv,blackColor:Ev,darkGreenColor:N2}=re,I2=S.section`
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
`,dp=S.div`
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
`,fp=S.div`
  grid-column: 2 / 3;
  width: 100%;
`,z2=S(jt)`
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
`,pp=S(Bn)`
  color: ${Ev};
  font-size: calc(40vw / 14.4);
  line-height: 1.2;
  letter-spacing: -0.8px;

  @media (max-width: ${O}) {
    margin: 9.82vw 0 0 0;
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
  }
`,hp=S.p`
  ${Z};
  ${he};
  color: ${N2};
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
`,M2=S.p`
  ${Z};
  color: ${Ev};
  ${he};
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
`,D2=({fees:e})=>{const t=Et();return h.jsxs(I2,{children:[h.jsx(z2,{color:Pv,children:e.title}),h.jsxs(dp,{children:[h.jsx(pp,{children:e.lineOne.title}),h.jsxs(fp,{children:[h.jsx(hp,{children:e.lineOne.text.main}),e.lineOne.text.span&&h.jsx(M2,{children:e.lineOne.text.span})]}),!t&&h.jsx(cp,{text:e.lineOne.text.button})]}),h.jsxs(dp,{children:[h.jsx(pp,{children:e.lineTwo.title}),h.jsx(fp,{children:h.jsx(hp,{children:e.lineTwo.text.main})}),t&&h.jsx(cp,{text:e.lineOne.text.button})]})]})},{whiteColor:Qc}=re,A2=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${O}) {
    width: 80vw;
    min-height: 68.17vw;
    align-items: start;
  }
`,F2=S.div`
  @media (max-width: ${O}) {
    padding: 7.18vw 0 10.26vw 10vw;
  }
`,H2=S(Kc)`
  @media (max-width: ${O}) {
    width: 100%;
    box-sizing: border-box;
    padding: 9.29vw 1.38vw 5.33vw 12.84vw;
    border-bottom: 1px solid ${Qc};
  }
`,U2=S.img`
  margin-right: 2.15vw;
  width: 2.98vw;
  height: auto;

  @media (max-width: ${O}) {
    width: 12.45vw;
    margin-right: 3.93vw;
  }
`,B2=S.h4`
  ${Z};
  text-align: left;
  font-size: calc(22vw / 14.4);
  ${Vt};
  font-weight: 500;
  line-height: 1.5;
  color: ${Qc};

  @media (max-width: ${O}) {
    font-size: calc(22vw / 5.08);
  }
`,W2=S.p`
  ${Z};
  ${he};
  color: ${Qc};
  font-size: calc(20vw / 14.05);
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(20vw / 5.08);
  }
`,q2=S.div`
  display: flex;
  flex-direction: row;
  padding-bottom: calc(14vw / 14.4);

  @media (max-width: ${O}) {
    padding-bottom: calc(24vw / 5.08);
  }
`,jv=({slide:e,subtitle:t})=>{const{image:n,title:r,text:i}=e,o=Et();return h.jsxs(A2,{children:[o&&h.jsx(H2,{children:t}),h.jsxs(F2,{children:[h.jsxs(q2,{children:[h.jsx(U2,{src:n.src,alt:n.alt}),h.jsx(B2,{children:r})]}),h.jsx(W2,{children:i})]})]})},V2=S(Ke)`
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
`,G2=({children:e,className:t,currentSlide:n,slideCount:r,top:i,left:o,right:a,...s})=>{const l={className:t,onClick:s.onClick||(()=>console.log("onClick")),type:"button",disabled:!1};return h.jsxs(V2,{...l,$top:i,$left:o,$right:a,...s,children:[e,!n||!r]})},K2=S.img`
  @media (${O}) {
    border-radius: 50%;
    width: 8.82vw;
    height: 8.82vw};
  }
`,Q2=S.div`
  height: 100%;
  background-image: url(${lS.background});
  background-repeat: no-repeat;
  background-size: cover;
`,Y2=({slides:e,subtitle:t,photoSlideArrowRight:n})=>{const r={dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,swipe:!1,variableWidth:!0,centerMode:!1,prevArrow:h.jsx(h.Fragment,{}),nextArrow:h.jsx(G2,{className:"arrow next",top:"12.5%",right:"9%",children:h.jsx(K2,{src:n.src,alt:n.alt})})};return h.jsx(Q2,{children:h.jsx(rs,{...r,children:e.map(i=>h.jsx(jv,{subtitle:t,slide:i},i.id))})})},{whiteColor:En,greenColor:X2}=re,J2=S.div`
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  margin-bottom: ${({size:e})=>e==="big"?"calc(42vw / 14.4)":"calc(60vw / 14.4)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 2px solid ${En};

  &:nth-child(2n) {
    border-bottom: ${({size:e})=>e==="big"?"none":`2px solid ${En}`};
  }

  @media (max-width: ${O}) {
    margin-bottom: calc(49vw / 5.08);
    border-bottom: ${({size:e})=>e==="small"?"none":`2px solid ${En}`};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
    margin-left: ${({size:e})=>e==="small"?"8.46vw":"0"};

    &:nth-child(2n) {
      border-bottom: ${({size:e})=>e==="big"?`2px solid ${En}`:"none"};
    }
  }
`,Z2=S.div`
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
  ${Z};
  ${he};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.09);
  }
`,e$=S(Lv)`
  padding-right: 3vw;
  color: ${X2};
`,t$=S(Lv)`
  color: ${En};
`,n$=S(Bn)`
  width: 100%;
  margin-bottom: calc(6.58vw / 14.4);
  color: ${En};
  font-size: ${({size:e})=>e==="big"?"calc(35vw / 14.4)":"calc(28vw / 14.4)"};
  line-height: 1.2;
  letter-spacing: -0.7px;
  text-align: left;

  @media (max-width: ${O}) {
    margin-bottom: 0;
    font-size: ${({size:e})=>e==="big"?"calc(30vw / 5.09)":"calc(23vw / 5.09)"};
    letter-spacing: -0.6px;
  }
`,r$=S.p`
  ${Z};
  ${he};
  margin: 0.21vw 0 3.26vw;
  font-size: calc(25vw / 14.4);
  color: ${En};
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;
  align-self: start;
  max-height: 5vw;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis; /* Добавление многоточия после обрезанного текста */
  white-space: nowrap;

  @media (max-width: ${O}) {
    margin: 3vw 0 9.84vw;
    font-size: calc(25vw / 5.09);
  }
`,i$=S.img`
  height: ${({size:e})=>e==="big"?"calc(268vw / 14.4)":"calc(154vw / 14.4)"};
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${O}) {
    height: ${({size:e})=>e==="big"?"calc(184vw / 5.08)":"calc(148vw / 5.08)"};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
  }
`,Su=({slide:e,size:t})=>{const n=Dr(),r=()=>{n(`/news/${e.id}`)};return h.jsxs(J2,{size:t,onClick:r,children:[h.jsx(i$,{size:t,src:e.url,alt:e.title}),h.jsxs(Z2,{size:t,children:[h.jsx(e$,{children:e.span}),h.jsx(t$,{children:e.date})]}),h.jsx(n$,{size:t,children:e.title}),t==="big"&&h.jsx(r$,{size:t,children:e.text})]})},o$=S.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,a$=({slides:e,size:t})=>{const n={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return h.jsx(o$,{children:h.jsx(rs,{...n,children:e.map(r=>h.jsx(Su,{slide:r,size:t},r.id))})})},bu=[{id:"1",date:"01.01.01",url:"https://picsum.photos/400/300",span:"Corporate News",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.

Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.

Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.`},{id:"2",date:"02.02.02",url:"https://picsum.photos/400/300",span:"Corporate News",title:"Title 2",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.

Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.

Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.`},{id:"3",date:"03.03.03",url:"https://picsum.photos/400/300",span:"Corporate News",title:"Title 3",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.

Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.

Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.`},{id:"4",date:"04.04.04",url:"https://picsum.photos/400/300",span:"Corporate News",title:"Title 4",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.

Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.

Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.`},{id:"5",date:"05.05.05",url:"https://picsum.photos/400/300",span:"Corporate News",title:"Title 5",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.

Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.

Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.`},{id:"6",date:"06.06.06",url:"https://picsum.photos/400/300",span:"Corporate News",title:"Title 6",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.

Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.

Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.`}],{whiteColor:s$,greenColor:l$}=re,u$=S.div`
  box-sizing: border-box;
  width: 100vw;
  padding-bottom: 5vw;
  min-height: calc(1317vw / 14.4);
  background-image: url(${Af.backgroundL});
  ${qt};
  border-radius: 1.6vw;

  @media (max-width: ${O}) {
    padding-bottom: 10vw;
    background-image: url(${Af.backgroundL});
    min-height: calc(1441vw / 5.08);
    border-radius: 3.93vw;
  }
`,c$=S.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${O}) {
    flex-direction: column;
  }
`,d$=S.div`
  padding: 5.06vw 3.92vw;
  display: flex;
  flex-direction: row;
  align-items: end;

  @media (max-width: ${O}) {
    padding: 14vw 3.56vw 7.34vw;
  }
`,f$=S(ct)`
  visibility: hidden;
  margin-left: 3.54vw;
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${l$};
  font-size: 1.74vw;
  ${he};
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
    background-image: url(${An.playIconGreen});
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
`,p$=S.div`
  width: calc(696vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${O}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`,h$=S.div`
  width: calc(414vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${O}) {
    width: 100%;
  }
`,g$=({news:e})=>{const{title:t,link:n}=e,r=bu,i=Et(),o=r.slice(0,2),a=r.slice(2,5);return h.jsxs(u$,{children:[h.jsxs(d$,{children:[h.jsx(jt,{color:s$,children:t}),h.jsx(f$,{color:"transparent",href:n.href,target:"_blank",rel:"noopener noreferrer",children:n.value})]}),h.jsxs(c$,{children:[h.jsx(p$,{children:o.map(s=>h.jsx(Su,{slide:s,size:"big"},s.id))}),i?h.jsx(a$,{slides:a,size:"small"}):h.jsx(h$,{children:a.map(s=>h.jsx(Su,{slide:s,size:"small"},s.id))})]})]})},{deepColor:fi,darkGreenColor:ku}=re,m$=S.section`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 10.9vw 4.28vw;

  @media (max-width: ${O}) {
    flex-direction: column;
    padding: 12vw 8.01vw 19.1vw;
  }
`,v$=S(jt)`
  padding: 3.13vw 0 1.8vw;
  align-self: start;
  text-align: left;

  @media (max-width: ${O}) {
    flex-direction: column;
    padding: 0 0 7.28vw;
  }
`,Qs=S.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 31.94vw;

  @media (max-width: ${O}) {
    min-width: 100%;
  }
`,gp=S.div`
  min-height: 25.69vw;
  display: flex;
  flex-direction: column;
  max-width: 31.94vw;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${O}) {
    min-width: 100%;
  }
`,Ys=S.p`
  width: 25vw;
  ${Z};
  font-size: calc(25vw / 14.4);
  ${he};
  color: ${fi};
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
`,mp=S.img`
  width: auto;
  height: calc(58vw / 14.4);
  @media (max-width: ${O}) {
    height: calc(58vw / 5.08);
    margin: 12vw 0 4.92vw;
  }
`,vp=S(Bn)`
  padding: 1.39vw 0 0.1vw 0;
  color: ${fi};
  font-size: calc(30vw / 14.4);
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(30vw / 5.08);
  }
`,yp=S(ct)`
  color: ${ku};
  ${Z};
  ${he};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-decoration-line: underline;

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.08);
  }
`,y$=({questions:e})=>h.jsxs(m$,{children:[h.jsxs(Qs,{children:[h.jsx(v$,{color:fi,children:e.title}),h.jsx(Ys,{className:"custom-first",children:e.text})]}),h.jsxs(gp,{children:[h.jsxs(Qs,{children:[h.jsx(mp,{src:fo.existingClient.src,alt:fo.existingClient.alt}),h.jsx(vp,{children:e.existing.title}),h.jsx(Ys,{color:fi,children:e.existing.text})]}),h.jsx(yp,{href:e.new.href,target:"_blank",rel:"noopener noreferrer",color:ku,children:e.existing.linkName})]}),h.jsxs(gp,{children:[h.jsxs(Qs,{children:[h.jsx(mp,{src:fo.newClient.src,alt:fo.newClient.alt}),h.jsx(vp,{children:e.new.title}),h.jsx(Ys,{color:fi,children:e.new.text})]}),h.jsx(yp,{href:e.new.href,target:"_blank",rel:"noopener noreferrer",color:ku,children:e.new.linkName})]})]}),{whiteColor:wp}=re,w$=S.section`
  box-sizing: border-box;
  width: 100vw;
  min-height: calc(850vw / 14.4);
  padding: 4.28vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${au.backgroundL});
  ${qt};
  //border-radius: 1.6vw;
  border-radius: 0 0 1.6vw 1.6vw;

  @media (max-width: ${O}) {
    padding: 14.17vw 0 12.4vw 0;
    box-sizing: border-box;
    min-height: 138.78vw;
    justify-content: space-between;
    flex-direction: column;
    background-image: url(${au.backgroundS});
    //border-radius: 3.93vw;
    border-radius: 0 0 3.93vw 3.93vw;
  }
`,x$=S.div`
  width: 100%;
`,S$=S(Fc)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${O}) {
    margin: 1.76vw 0 0;
  }
`,b$=S.div`
  margin-top: 2.57vw;
  padding: 4.93vw 6.25vw;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vw;
  width: 88.47vw;
  min-height: 37.15vw;
  ${zc};
  background-image: url(${au.slide});
  border-radius: 30px;

  @media (max-width: ${O}) {
    display: block;
    padding: 0;
    background-image: none;
  }
`,k$=({id:e,title:t})=>{const{t:n}=ut(),r=xt("UseCasesOfOurProducts",n),{text:i,subtitle:o,slides:a,photoSlideArrowRight:s,fees:l,news:u,questions:c}=r,d=Et();return h.jsxs("section",{id:e,children:[h.jsxs(w$,{children:[h.jsxs(x$,{children:[h.jsx(jt,{color:wp,children:t}),h.jsx(S$,{color:wp,children:i})]}),h.jsx(b$,{children:d?h.jsx(Y2,{subtitle:o,slides:a,photoSlideArrowRight:s}):a.map(f=>h.jsx(jv,{subtitle:o,slide:f},f.id))})]}),h.jsx(D2,{fees:l}),h.jsx(g$,{news:u}),h.jsx(y$,{questions:c})]})},$$=({mainScreenRef:e,sections:t})=>h.jsxs(h.Fragment,{children:[h.jsx(wS,{ref:e}),t.map(n=>n.id===Hm?h.jsx(HS,{id:n.id,title:n.title},n.id):n.id===Um?h.jsx(O2,{id:n.id,title:n.title},n.id):n.id===Bm?h.jsx(k$,{id:n.id,title:n.title},n.id):null)]}),{ratesFeesColor:C$,navigateLinkColor:O$}=re,P$=S.div`
  padding-left: 5.4vw;
  background-color: ${C$};
  display: flex;
  flex-direction: row;
  align-items: start;

  @media (max-width: ${O}) {
    padding-left: 6.4vw;
  }
`,E$=S(Ke)`
  background-color: transparent;
`,Xs=S.p`
  ${Z};
  margin-right: 0.2vw;
  ${he};
  color: ${O$};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 2;

  @media (max-width: ${O}) {
    margin-right: 1vw;
    font-size: calc(15vw / 5.09);
  }
`,Tv=({navigation:e})=>{const{button:t,separator:n,location:r}=e,[i,o]=j.useState(!1),a=Dr(),s=()=>{o(!0),a("/")};return h.jsxs(P$,{children:[h.jsx(E$,{type:"button",disabled:i,onClick:s,children:h.jsx(Xs,{children:t})}),h.jsx(Xs,{children:n}),h.jsx(Xs,{children:r})]})},{ratesFeesColor:j$,darkGreenColor:$u,blackColor:L$,whiteColor:T$}=re,_$=S.div`
  margin: 0 6.25vw 4.58vw 3.23vw;
  display: flex;
  flex-direction: column;

  @media (max-width: ${O}) {
    margin: 0 6.25vw 4.58vw 4.5vw;
  }
`,R$=S.div`
  padding: 2.22vw 0 4.86vw 2.78vw;
  border-top: 1px solid ${$u};
  border-left: 1px solid ${$u};
`,N$=S.div`
  display: flex;
  justify-content: space-between;
`,I$=S.p`
  width: calc(270vw / 14.4);
  ${Dc};
  ${he};

  @media (max-width: ${O}) {
    min-width: calc(210vw / 5.09);
  }
`,z$=S.span`
  margin-left: 1vw;
  text-align: left;
  min-width: calc(90vw / 14.4);
  ${Dc};
  ${he};

  @media (max-width: ${O}) {
    min-width: calc(70vw / 5.09);
  }
`,M$=S.span`
  text-align: center;
  min-width: calc(180vw / 14.4);
  ${Dc}
  ${Vt};

  @media (max-width: ${O}) {
    min-width: calc(140vw / 5.09);
  }
`,D$=S.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  &:nth-child(odd) {
    background-color: ${j$};
  }
`,A$=S(Bn)`
  margin: 0 0 1.18vw 2.7vw;
  color: ${$u};
  ${Vt};
  text-align: left;
  font-size: calc(30vw / 14.4);
  font-style: normal;
  font-weight: 400;

  @media (max-width: ${O}) {
    font-size: calc(30vw / 5.09);
  }
`,F$=S(ct)`
  margin-top: 2.26vw;
  display: inline-block;
  ${Vt};
  padding: 0.8vw 5.5vw 0.8vw 2.5vw;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  width: fit-content;
  color: ${T$};
  text-align: center;
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  background-color: ${L$};

  &:after {
    content: "";
    position: absolute;
    width: calc(19vw / 14.4);
    height: calc(15.5vw / 14.4);
    background-image: url(${An.playIconWhite});
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
      background-image: url(${An.playIconWhite});
      background-repeat: no-repeat;
      background-size: contain;
      right: 1vw;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`,xp=({rates:e})=>h.jsxs(_$,{children:[h.jsx(A$,{children:e.subtitle}),h.jsxs(R$,{children:[Object.keys(e).map(t=>{const n=e[t];return typeof n=="string"?null:h.jsxs(D$,{children:[h.jsx(I$,{children:n.text}),h.jsx("div",{children:n.percent&&n.percent.map((r,i)=>h.jsxs(N$,{children:[h.jsx(z$,{children:r}),n.span&&n.span[i]&&h.jsx(M$,{children:n.span[i]})]},i))})]},t)}),h.jsx(F$,{color:"transparent",href:e.linkHref,target:"_blank",rel:"noopener noreferrer",children:e.linkLabel})]})]}),{lightBlackColor:H$}=re,U$=S.main`
  width: 100vw;
`,B$=S.div`
  display: flex;
  flex-direction: column;
`,W$=S.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,q$=S(jt)`
  margin: 3.33vw 5.4vw 4.51vw;
  text-align: start;

  @media (max-width: ${O}) {
    margin: 3.33vw 6.4vw 4.51vw;
  }
`,V$=j.forwardRef((e,t)=>{const{t:n}=ut(),r=xt("PaymentFees",n),{title:i,individual:o,enterprise:a,navigation:s}=r;return h.jsxs(U$,{ref:t,children:[h.jsx(Tv,{navigation:s}),h.jsxs(B$,{children:[h.jsx(q$,{color:H$,children:i}),h.jsxs(W$,{children:[h.jsx(xp,{rates:o}),h.jsx(xp,{rates:a})]})]})]})}),G$=v1`
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
`,{darkGreenColor:K$,lightBlackColor:Q$,notFoundColor:Y$,headerColor:X$,whiteColor:J$}=re,Z$=S.main`
  width: 100vw;
`,eC=S.div`
  padding: 3.5vw 0 7.15vw;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,tC=S.h1`
  ${Z};
  ${Ya};
  color: ${K$};
  text-align: center;
  font-size: calc(150vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -3px;

  @media (max-width: ${O}) {
    font-size: calc(70vw / 5.09);
  }
`,nC=S(jt)`
  font-size: calc(70vw / 14.4);
  letter-spacing: -1.4px;
  text-transform: capitalize;

  @media (max-width: ${O}) {
    font-size: calc(35vw / 5.09);
  }
`,rC=S.img`
  width: 100%;
  height: auto;
`,iC=S.p`
  ${Z};
  padding-bottom: 2.99vw;
  ${Vt};
  color: ${Y$};
  text-align: center;
  font-size: calc(25vw / 14.04);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-transform: lowercase;

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.09);
  }
`,oC=S(Ke)`
  ${Z};
  padding: 0.6vw 8.5vw;
  ${Vt};
  background-color: ${X$};
  color: ${J$};
  text-align: center;
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.6px;

  @media (max-width: ${O}) {
    font-size: calc(20vw / 5.09);
  }
`,aC=j.forwardRef((e,t)=>{const n=Dr(),[r,i]=j.useState(!1),{t:o}=ut(),a=xt("NotFound",o),{navigation:s,title:l,subtitle:u,image:c,text:d,button:f}=a,y=()=>{i(!0),n("/")};return h.jsxs(Z$,{ref:t,children:[h.jsx(Tv,{navigation:s}),h.jsxs(eC,{children:[h.jsx(tC,{children:l}),h.jsx(nC,{color:Q$,children:u}),h.jsx(rC,{src:c.src,alt:c.alt}),h.jsx(iC,{children:d}),h.jsx(oC,{type:"button",disabled:r,onClick:y,children:f})]})]})}),sC={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class wa{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||sC,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new wa(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new wa(this.logger,t)}}var Ct=new wa;class is{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[t]&&[].concat(this.observers[t]).forEach(a=>{a(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(a=>{a.apply(a,[t,...r])})}}function Qr(){let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n}function Sp(e){return e==null?"":""+e}function lC(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function Yc(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function i(){return!e||typeof e=="string"}const o=typeof t!="string"?[].concat(t):t.split(".");for(;o.length>1;){if(i())return{};const a=r(o.shift());!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return i()?{}:{obj:e,k:r(o.shift())}}function bp(e,t,n){const{obj:r,k:i}=Yc(e,t,Object);r[i]=n}function uC(e,t,n,r){const{obj:i,k:o}=Yc(e,t,Object);i[o]=i[o]||[],r&&(i[o]=i[o].concat(n)),r||i[o].push(n)}function xa(e,t){const{obj:n,k:r}=Yc(e,t);if(n)return n[r]}function cC(e,t,n){const r=xa(e,n);return r!==void 0?r:xa(t,n)}function _v(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):_v(e[r],t[r],n):e[r]=t[r]);return e}function Vn(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var dC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function fC(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>dC[t]):e}const pC=[" ",",","?","!",";"];function hC(e,t,n){t=t||"",n=n||"";const r=pC.filter(a=>t.indexOf(a)<0&&n.indexOf(a)<0);if(r.length===0)return!0;const i=new RegExp(`(${r.map(a=>a==="?"?"\\?":a).join("|")})`);let o=!i.test(e);if(!o){const a=e.indexOf(n);a>0&&!i.test(e.substring(0,a))&&(o=!0)}return o}function Sa(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let i=e;for(let o=0;o<r.length;++o){if(!i||typeof i[r[o]]=="string"&&o+1<r.length)return;if(i[r[o]]===void 0){let a=2,s=r.slice(o,o+a).join(n),l=i[s];for(;l===void 0&&r.length>o+a;)a++,s=r.slice(o,o+a).join(n),l=i[s];if(l===void 0)return;if(l===null)return null;if(t.endsWith(s)){if(typeof l=="string")return l;if(s&&typeof l[s]=="string")return l[s]}const u=r.slice(o+a).join(n);return u?Sa(l,u,n):void 0}i=i[r[o]]}return i}function ba(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class kp extends is{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,a=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let s=[t,n];r&&typeof r!="string"&&(s=s.concat(r)),r&&typeof r=="string"&&(s=s.concat(o?r.split(o):r)),t.indexOf(".")>-1&&(s=t.split("."));const l=xa(this.data,s);return l||!a||typeof r!="string"?l:Sa(this.data&&this.data[t]&&this.data[t][n],r,o)}addResource(t,n,r,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let s=[t,n];r&&(s=s.concat(a?r.split(a):r)),t.indexOf(".")>-1&&(s=t.split("."),i=n,n=s[1]),this.addNamespaces(n),bp(this.data,s,i),o.silent||this.emit("added",t,n,r,i)}addResources(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in r)(typeof r[o]=="string"||Object.prototype.toString.apply(r[o])==="[object Array]")&&this.addResource(t,n,o,r[o],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},s=[t,n];t.indexOf(".")>-1&&(s=t.split("."),i=r,r=n,n=s[1]),this.addNamespaces(n);let l=xa(this.data,s)||{};i?_v(l,r,o):l={...l,...r},bp(this.data,s,l),a.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var Rv={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(o=>{this.processors[o]&&(t=this.processors[o].process(t,n,r,i))}),t}};const $p={};class ka extends is{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),lC(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ct.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const a=r&&t.indexOf(r)>-1,s=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!hC(t,r,i);if(a&&!s){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:o};const u=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(u[0])>-1)&&(o=u.shift()),t=u.join(i)}return typeof o=="string"&&(o=[o]),{key:t,namespaces:o}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:a,namespaces:s}=this.extractFromKey(t[t.length-1],n),l=s[s.length-1],u=n.lng||this.language,c=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(c){const x=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${x}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l}:`${l}${x}${a}`}return i?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l}:a}const d=this.resolve(t,n);let f=d&&d.res;const y=d&&d.usedKey||a,v=d&&d.exactUsedKey||a,w=Object.prototype.toString.apply(f),$=["[object Number]","[object Function]","[object RegExp]"],g=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,p=!this.i18nFormat||this.i18nFormat.handleAsObject;if(p&&f&&(typeof f!="string"&&typeof f!="boolean"&&typeof f!="number")&&$.indexOf(w)<0&&!(typeof g=="string"&&w==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(y,f,{...n,ns:s}):`key '${a} (${this.language})' returned an object instead of string.`;return i?(d.res=x,d):x}if(o){const x=w==="[object Array]",b=x?[]:{},k=x?v:y;for(const P in f)if(Object.prototype.hasOwnProperty.call(f,P)){const E=`${k}${o}${P}`;b[P]=this.translate(E,{...n,joinArrays:!1,ns:s}),b[P]===E&&(b[P]=f[P])}f=b}}else if(p&&typeof g=="string"&&w==="[object Array]")f=f.join(g),f&&(f=this.extendTranslation(f,t,n,r));else{let x=!1,b=!1;const k=n.count!==void 0&&typeof n.count!="string",P=ka.hasDefaultValue(n),E=k?this.pluralResolver.getSuffix(u,n.count,n):"",R=n.ordinal&&k?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",N=n[`defaultValue${E}`]||n[`defaultValue${R}`]||n.defaultValue;!this.isValidLookup(f)&&P&&(x=!0,f=N),this.isValidLookup(f)||(b=!0,f=a);const U=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&b?void 0:f,A=P&&N!==f&&this.options.updateMissing;if(b||x||A){if(this.logger.log(A?"updateKey":"missingKey",u,l,a,A?N:f),o){const q=this.resolve(a,{...n,keySeparator:!1});q&&q.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let C=[];const L=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&L&&L[0])for(let q=0;q<L.length;q++)C.push(L[q]);else this.options.saveMissingTo==="all"?C=this.languageUtils.toResolveHierarchy(n.lng||this.language):C.push(n.lng||this.language);const B=(q,T,I)=>{const H=P&&I!==f?I:U;this.options.missingKeyHandler?this.options.missingKeyHandler(q,l,T,H,A,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(q,l,T,H,A,n),this.emit("missingKey",q,l,T,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&k?C.forEach(q=>{this.pluralResolver.getSuffixes(q,n).forEach(T=>{B([q],a+T,n[`defaultValue${T}`]||N)})}):B(C,a,N))}f=this.extendTranslation(f,t,n,d,r),b&&f===a&&this.options.appendNamespaceToMissingKey&&(f=`${l}:${a}`),(b||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,x?f:void 0):f=this.options.parseMissingKeyHandler(f))}return i?(d.res=f,d):f}extendTranslation(t,n,r,i,o){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(u){const f=t.match(this.interpolator.nestingRegexp);c=f&&f.length}let d=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,r.lng||this.language,r),u){const f=t.match(this.interpolator.nestingRegexp),y=f&&f.length;c<y&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var f=arguments.length,y=new Array(f),v=0;v<f;v++)y[v]=arguments[v];return o&&o[0]===y[0]&&!r.context?(a.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`),null):a.translate(...y,n)},r)),r.interpolation&&this.interpolator.reset()}const s=r.postProcess||this.options.postProcess,l=typeof s=="string"?[s]:s;return t!=null&&l&&l.length&&r.applyPostProcessor!==!1&&(t=Rv.handle(l,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:i,...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,o,a,s;return typeof t=="string"&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(l,n),c=u.key;i=c;let d=u.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const f=n.count!==void 0&&typeof n.count!="string",y=f&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),v=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",w=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach($=>{this.isValidLookup(r)||(s=$,!$p[`${w[0]}-${$}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&($p[`${w[0]}-${$}`]=!0,this.logger.warn(`key "${i}" for languages "${w.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(g=>{if(this.isValidLookup(r))return;a=g;const p=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(p,c,g,$,n);else{let x;f&&(x=this.pluralResolver.getSuffix(g,n.count,n));const b=`${this.options.pluralSeparator}zero`,k=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(p.push(c+x),n.ordinal&&x.indexOf(k)===0&&p.push(c+x.replace(k,this.options.pluralSeparator)),y&&p.push(c+b)),v){const P=`${c}${this.options.contextSeparator}${n.context}`;p.push(P),f&&(p.push(P+x),n.ordinal&&x.indexOf(k)===0&&p.push(P+x.replace(k,this.options.pluralSeparator)),y&&p.push(P+b))}}let m;for(;m=p.pop();)this.isValidLookup(r)||(o=m,r=this.getResource(g,$,m,n))}))})}),{res:r,usedKey:i,exactUsedKey:o,usedLng:a,usedNS:s}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function Js(e){return e.charAt(0).toUpperCase()+e.slice(1)}class Cp{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ct.create("languageUtils")}getScriptPartFromCode(t){if(t=ba(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=ba(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Js(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Js(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=Js(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&o.indexOf(i)===0)return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],o=a=>{a&&(this.isSupportedCode(a)?i.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):typeof t=="string"&&o(this.formatLanguageCode(t)),r.forEach(a=>{i.indexOf(a)<0&&o(this.formatLanguageCode(a))}),i}}let gC=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],mC={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}};const vC=["v1","v2","v3"],yC=["v4"],Op={zero:0,one:1,two:2,few:3,many:4,other:5};function wC(){const e={};return gC.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:mC[t.fc]}})}),e}class xC{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=Ct.create("pluralResolver"),(!this.options.compatibilityJSON||yC.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=wC()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(ba(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,o)=>Op[i]-Op[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?o():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!vC.includes(this.options.compatibilityJSON)}}function Pp(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=cC(e,t,n);return!o&&i&&typeof n=="string"&&(o=Sa(e,n,r),o===void 0&&(o=Sa(t,n,r))),o}class SC{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ct.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:fC,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?Vn(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?Vn(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?Vn(n.nestingPrefix):n.nestingPrefixEscaped||Vn("$t("),this.nestingSuffix=n.nestingSuffix?Vn(n.nestingSuffix):n.nestingSuffixEscaped||Vn(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,i){let o,a,s;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(v){return v.replace(/\$/g,"$$$$")}const c=v=>{if(v.indexOf(this.formatSeparator)<0){const p=Pp(n,l,v,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(p,void 0,r,{...i,...n,interpolationkey:v}):p}const w=v.split(this.formatSeparator),$=w.shift().trim(),g=w.join(this.formatSeparator).trim();return this.format(Pp(n,l,$,this.options.keySeparator,this.options.ignoreJSONStructure),g,r,{...i,...n,interpolationkey:$})};this.resetRegExp();const d=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,f=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:v=>u(v)},{regex:this.regexp,safeValue:v=>this.escapeValue?u(this.escape(v)):u(v)}].forEach(v=>{for(s=0;o=v.regex.exec(t);){const w=o[1].trim();if(a=c(w),a===void 0)if(typeof d=="function"){const g=d(t,o,i);a=typeof g=="string"?g:""}else if(i&&Object.prototype.hasOwnProperty.call(i,w))a="";else if(f){a=o[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${t}`),a="";else typeof a!="string"&&!this.useRawValueToEscape&&(a=Sp(a));const $=v.safeValue(a);if(t=t.replace(o[0],$),f?(v.regex.lastIndex+=a.length,v.regex.lastIndex-=o[0].length):v.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,a;function s(l,u){const c=this.nestingOptionsSeparator;if(l.indexOf(c)<0)return l;const d=l.split(new RegExp(`${c}[ ]*{`));let f=`{${d[1]}`;l=d[0],f=this.interpolate(f,a);const y=f.match(/'/g),v=f.match(/"/g);(y&&y.length%2===0&&!v||v.length%2!==0)&&(f=f.replace(/'/g,'"'));try{a=JSON.parse(f),u&&(a={...u,...a})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,w),`${l}${c}${f}`}return delete a.defaultValue,l}for(;i=this.nestingRegexp.exec(t);){let l=[];a={...r},a=a.replace&&typeof a.replace!="string"?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let u=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const c=i[1].split(this.formatSeparator).map(d=>d.trim());i[1]=c.shift(),l=c,u=!0}if(o=n(s.call(this,i[1].trim(),a),a),o&&i[0]===t&&typeof o!="string")return o;typeof o!="string"&&(o=Sp(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),u&&(o=l.reduce((c,d)=>this.format(c,d,r.lng,{...r,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}function bC(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(a=>{if(!a)return;const[s,...l]=a.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,"");n[s.trim()]||(n[s.trim()]=u),u==="false"&&(n[s.trim()]=!1),u==="true"&&(n[s.trim()]=!0),isNaN(u)||(n[s.trim()]=parseInt(u,10))})}return{formatName:t,formatOptions:n}}function Gn(e){const t={};return function(r,i,o){const a=i+JSON.stringify(o);let s=t[a];return s||(s=e(ba(i),o),t[a]=s),s(r)}}class kC{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ct.create("formatter"),this.options=t,this.formats={number:Gn((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return o=>i.format(o)}),currency:Gn((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return o=>i.format(o)}),datetime:Gn((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return o=>i.format(o)}),relativetime:Gn((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return o=>i.format(o,r.range||"day")}),list:Gn((n,r)=>{const i=new Intl.ListFormat(n,{...r});return o=>i.format(o)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=Gn(n)}format(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((s,l)=>{const{formatName:u,formatOptions:c}=bC(l);if(this.formats[u]){let d=s;try{const f=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},y=f.locale||f.lng||i.locale||i.lng||r;d=this.formats[u](s,y,{...c,...i,...f})}catch(f){this.logger.warn(f)}return d}else this.logger.warn(`there was no format function for ${u}`);return s},t)}}function $C(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class CC extends is{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=Ct.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(t,n,r,i){const o={},a={},s={},l={};return t.forEach(u=>{let c=!0;n.forEach(d=>{const f=`${u}|${d}`;!r.reload&&this.store.hasResourceBundle(u,d)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?a[f]===void 0&&(a[f]=!0):(this.state[f]=1,c=!1,a[f]===void 0&&(a[f]=!0),o[f]===void 0&&(o[f]=!0),l[d]===void 0&&(l[d]=!0)))}),c||(s[u]=!0)}),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(l)}}loaded(t,n,r){const i=t.split("|"),o=i[0],a=i[1];n&&this.emit("failedLoading",o,a,n),r&&this.store.addResourceBundle(o,a,r),this.state[t]=n?-1:2;const s={};this.queue.forEach(l=>{uC(l.loaded,[o],a),$C(l,t),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{s[u]||(s[u]={});const c=l.loaded[u];c.length&&c.forEach(d=>{s[u][d]===void 0&&(s[u][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(l=>!l.done)}read(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:o,callback:a});return}this.readingCalls++;const s=(u,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(u&&c&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,o*2,a)},o);return}a(u,c)},l=this.backend[r].bind(this.backend);if(l.length===2){try{const u=l(t,n);u&&typeof u.then=="function"?u.then(c=>s(null,c)).catch(s):s(null,u)}catch(u){s(u)}return}return l(t,n,s)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const o=this.queueLoad(t,n,r,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(a=>{this.loadOne(a)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),i=r[0],o=r[1];this.read(i,o,"read",void 0,void 0,(a,s)=>{a&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,a),!a&&s&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,s),this.loaded(t,a,s)})}saveMissing(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const l={...a,isUpdate:o},u=this.backend.create.bind(this.backend);if(u.length<6)try{let c;u.length===5?c=u(t,n,r,i,l):c=u(t,n,r,i),c&&typeof c.then=="function"?c.then(d=>s(null,d)).catch(s):s(null,c)}catch(c){s(c)}else u(t,n,r,i,s,l)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}function Ep(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(i=>{n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function jp(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function ho(){}function OC(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class Ii extends is{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=jp(t),this.services={},this.logger=Ct,this.modules={external:[]},OC(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Ep();this.options={...i,...this.options,...jp(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function o(c){return c?typeof c=="function"?new c:c:null}if(!this.options.isClone){this.modules.logger?Ct.init(o(this.modules.logger),this.options):Ct.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=kC);const d=new Cp(this.options);this.store=new kp(this.options.resources,this.options);const f=this.services;f.logger=Ct,f.resourceStore=this.store,f.languageUtils=d,f.pluralResolver=new xC(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(f.formatter=o(c),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new SC(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new CC(o(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(y){for(var v=arguments.length,w=new Array(v>1?v-1:0),$=1;$<v;$++)w[$-1]=arguments[$];t.emit(y,...w)}),this.modules.languageDetector&&(f.languageDetector=o(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=o(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new ka(this.services,this.options),this.translator.on("*",function(y){for(var v=arguments.length,w=new Array(v>1?v-1:0),$=1;$<v;$++)w[$-1]=arguments[$];t.emit(y,...w)}),this.modules.external.forEach(y=>{y.init&&y.init(this)})}if(this.format=this.options.interpolation.format,r||(r=ho),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return t.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return t.store[c](...arguments),t}});const l=Qr(),u=()=>{const c=(d,f)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(f),r(d,f)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),l}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ho;const i=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode")return r();const o=[],a=s=>{if(!s)return;this.services.languageUtils.toResolveHierarchy(s).forEach(u=>{o.indexOf(u)<0&&o.push(u)})};i?a(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>a(l)),this.options.preload&&this.options.preload.forEach(s=>a(s)),this.services.backendConnector.load(o,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(s)})}else r(null)}reloadResources(t,n,r){const i=Qr();return t||(t=this.languages),n||(n=this.options.ns),r||(r=ho),this.services.backendConnector.reload(t,n,o=>{i.resolve(),r(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Rv.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const i=Qr();this.emit("languageChanging",t);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,u)=>{u?(o(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(l,function(){return r.t(...arguments)})},s=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const u=typeof l=="string"?l:this.services.languageUtils.getBestMatchFromCodes(l);u&&(this.language||o(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,c=>{a(c,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(t),i}getFixedT(t,n,r){var i=this;const o=function(a,s){let l;if(typeof s!="object"){for(var u=arguments.length,c=new Array(u>2?u-2:0),d=2;d<u;d++)c[d-2]=arguments[d];l=i.options.overloadTranslationOptionHandler([a,s].concat(c))}else l={...s};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix=l.keyPrefix||r||o.keyPrefix;const f=i.options.keySeparator||".";let y;return l.keyPrefix&&Array.isArray(a)?y=a.map(v=>`${l.keyPrefix}${f}${v}`):y=l.keyPrefix?`${l.keyPrefix}${f}${a}`:a,i.t(y,l)};return typeof t=="string"?o.lng=t:o.lngs=t,o.ns=n,o.keyPrefix=r,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const u=this.services.backendConnector.state[`${s}|${l}`];return u===-1||u===2};if(n.precheck){const s=n.precheck(this,a);if(s!==void 0)return s}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(r,t)&&(!i||a(o,t)))}loadNamespaces(t,n){const r=Qr();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=Qr();typeof t=="string"&&(t=[t]);const i=this.options.preload||[],o=t.filter(a=>i.indexOf(a)<0);return o.length?(this.options.preload=i.concat(o),this.loadResources(a=>{r.resolve(),n&&n(a)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new Cp(Ep());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Ii(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ho;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new Ii(i);return(t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(s=>{o[s]=this[s]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},r&&(o.store=new kp(this.store.data,i),o.services.resourceStore=o.store),o.translator=new ka(o.services,i),o.translator.on("*",function(s){for(var l=arguments.length,u=new Array(l>1?l-1:0),c=1;c<l;c++)u[c-1]=arguments[c];o.emit(s,...u)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Oe=Ii.createInstance();Oe.createInstance=Ii.createInstance;Oe.createInstance;Oe.dir;Oe.init;Oe.loadResources;Oe.reloadResources;Oe.use;Oe.changeLanguage;Oe.getFixedT;Oe.t;Oe.exists;Oe.setDefaultNamespace;Oe.hasLoadedNamespace;Oe.loadNamespaces;Oe.loadLanguages;function Cu(e){"@babel/helpers - typeof";return Cu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cu(e)}var Nv=[],PC=Nv.forEach,EC=Nv.slice;function Ou(e){return PC.call(EC.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e}function Iv(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Cu(XMLHttpRequest))==="object"}function jC(e){return!!e&&typeof e.then=="function"}function LC(e){return jC(e)?e:Promise.resolve(e)}function TC(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Pu={exports:{}},go={exports:{}},Lp;function _C(){return Lp||(Lp=1,function(e,t){var n=typeof self<"u"?self:nn,r=function(){function o(){this.fetch=!1,this.DOMException=n.DOMException}return o.prototype=n,new o}();(function(o){(function(a){var s={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function l(C){return C&&DataView.prototype.isPrototypeOf(C)}if(s.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(C){return C&&u.indexOf(Object.prototype.toString.call(C))>-1};function d(C){if(typeof C!="string"&&(C=String(C)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(C))throw new TypeError("Invalid character in header field name");return C.toLowerCase()}function f(C){return typeof C!="string"&&(C=String(C)),C}function y(C){var L={next:function(){var B=C.shift();return{done:B===void 0,value:B}}};return s.iterable&&(L[Symbol.iterator]=function(){return L}),L}function v(C){this.map={},C instanceof v?C.forEach(function(L,B){this.append(B,L)},this):Array.isArray(C)?C.forEach(function(L){this.append(L[0],L[1])},this):C&&Object.getOwnPropertyNames(C).forEach(function(L){this.append(L,C[L])},this)}v.prototype.append=function(C,L){C=d(C),L=f(L);var B=this.map[C];this.map[C]=B?B+", "+L:L},v.prototype.delete=function(C){delete this.map[d(C)]},v.prototype.get=function(C){return C=d(C),this.has(C)?this.map[C]:null},v.prototype.has=function(C){return this.map.hasOwnProperty(d(C))},v.prototype.set=function(C,L){this.map[d(C)]=f(L)},v.prototype.forEach=function(C,L){for(var B in this.map)this.map.hasOwnProperty(B)&&C.call(L,this.map[B],B,this)},v.prototype.keys=function(){var C=[];return this.forEach(function(L,B){C.push(B)}),y(C)},v.prototype.values=function(){var C=[];return this.forEach(function(L){C.push(L)}),y(C)},v.prototype.entries=function(){var C=[];return this.forEach(function(L,B){C.push([B,L])}),y(C)},s.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function w(C){if(C.bodyUsed)return Promise.reject(new TypeError("Already read"));C.bodyUsed=!0}function $(C){return new Promise(function(L,B){C.onload=function(){L(C.result)},C.onerror=function(){B(C.error)}})}function g(C){var L=new FileReader,B=$(L);return L.readAsArrayBuffer(C),B}function p(C){var L=new FileReader,B=$(L);return L.readAsText(C),B}function m(C){for(var L=new Uint8Array(C),B=new Array(L.length),q=0;q<L.length;q++)B[q]=String.fromCharCode(L[q]);return B.join("")}function x(C){if(C.slice)return C.slice(0);var L=new Uint8Array(C.byteLength);return L.set(new Uint8Array(C)),L.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(C){this._bodyInit=C,C?typeof C=="string"?this._bodyText=C:s.blob&&Blob.prototype.isPrototypeOf(C)?this._bodyBlob=C:s.formData&&FormData.prototype.isPrototypeOf(C)?this._bodyFormData=C:s.searchParams&&URLSearchParams.prototype.isPrototypeOf(C)?this._bodyText=C.toString():s.arrayBuffer&&s.blob&&l(C)?(this._bodyArrayBuffer=x(C.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(C)||c(C))?this._bodyArrayBuffer=x(C):this._bodyText=C=Object.prototype.toString.call(C):this._bodyText="",this.headers.get("content-type")||(typeof C=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s.searchParams&&URLSearchParams.prototype.isPrototypeOf(C)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s.blob&&(this.blob=function(){var C=w(this);if(C)return C;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?w(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var C=w(this);if(C)return C;if(this._bodyBlob)return p(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(m(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s.formData&&(this.formData=function(){return this.text().then(R)}),this.json=function(){return this.text().then(JSON.parse)},this}var k=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function P(C){var L=C.toUpperCase();return k.indexOf(L)>-1?L:C}function E(C,L){L=L||{};var B=L.body;if(C instanceof E){if(C.bodyUsed)throw new TypeError("Already read");this.url=C.url,this.credentials=C.credentials,L.headers||(this.headers=new v(C.headers)),this.method=C.method,this.mode=C.mode,this.signal=C.signal,!B&&C._bodyInit!=null&&(B=C._bodyInit,C.bodyUsed=!0)}else this.url=String(C);if(this.credentials=L.credentials||this.credentials||"same-origin",(L.headers||!this.headers)&&(this.headers=new v(L.headers)),this.method=P(L.method||this.method||"GET"),this.mode=L.mode||this.mode||null,this.signal=L.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&B)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(B)}E.prototype.clone=function(){return new E(this,{body:this._bodyInit})};function R(C){var L=new FormData;return C.trim().split("&").forEach(function(B){if(B){var q=B.split("="),T=q.shift().replace(/\+/g," "),I=q.join("=").replace(/\+/g," ");L.append(decodeURIComponent(T),decodeURIComponent(I))}}),L}function N(C){var L=new v,B=C.replace(/\r?\n[\t ]+/g," ");return B.split(/\r?\n/).forEach(function(q){var T=q.split(":"),I=T.shift().trim();if(I){var H=T.join(":").trim();L.append(I,H)}}),L}b.call(E.prototype);function F(C,L){L||(L={}),this.type="default",this.status=L.status===void 0?200:L.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in L?L.statusText:"OK",this.headers=new v(L.headers),this.url=L.url||"",this._initBody(C)}b.call(F.prototype),F.prototype.clone=function(){return new F(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},F.error=function(){var C=new F(null,{status:0,statusText:""});return C.type="error",C};var U=[301,302,303,307,308];F.redirect=function(C,L){if(U.indexOf(L)===-1)throw new RangeError("Invalid status code");return new F(null,{status:L,headers:{location:C}})},a.DOMException=o.DOMException;try{new a.DOMException}catch{a.DOMException=function(L,B){this.message=L,this.name=B;var q=Error(L);this.stack=q.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function A(C,L){return new Promise(function(B,q){var T=new E(C,L);if(T.signal&&T.signal.aborted)return q(new a.DOMException("Aborted","AbortError"));var I=new XMLHttpRequest;function H(){I.abort()}I.onload=function(){var X={status:I.status,statusText:I.statusText,headers:N(I.getAllResponseHeaders()||"")};X.url="responseURL"in I?I.responseURL:X.headers.get("X-Request-URL");var K="response"in I?I.response:I.responseText;B(new F(K,X))},I.onerror=function(){q(new TypeError("Network request failed"))},I.ontimeout=function(){q(new TypeError("Network request failed"))},I.onabort=function(){q(new a.DOMException("Aborted","AbortError"))},I.open(T.method,T.url,!0),T.credentials==="include"?I.withCredentials=!0:T.credentials==="omit"&&(I.withCredentials=!1),"responseType"in I&&s.blob&&(I.responseType="blob"),T.headers.forEach(function(X,K){I.setRequestHeader(K,X)}),T.signal&&(T.signal.addEventListener("abort",H),I.onreadystatechange=function(){I.readyState===4&&T.signal.removeEventListener("abort",H)}),I.send(typeof T._bodyInit>"u"?null:T._bodyInit)})}return A.polyfill=!0,o.fetch||(o.fetch=A,o.Headers=v,o.Request=E,o.Response=F),a.Headers=v,a.Request=E,a.Response=F,a.fetch=A,Object.defineProperty(a,"__esModule",{value:!0}),a})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=r;t=i.fetch,t.default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t}(go,go.exports)),go.exports}(function(e,t){var n;if(typeof fetch=="function"&&(typeof nn<"u"&&nn.fetch?n=nn.fetch:typeof window<"u"&&window.fetch?n=window.fetch:n=fetch),typeof TC<"u"&&(typeof window>"u"||typeof window.document>"u")){var r=n||_C();r.default&&(r=r.default),t.default=r,e.exports=t.default}})(Pu,Pu.exports);var zv=Pu.exports;const Mv=Tu(zv),Tp=Wp({__proto__:null,default:Mv},[zv]);function $a(e){"@babel/helpers - typeof";return $a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$a(e)}var At;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?At=global.fetch:typeof window<"u"&&window.fetch?At=window.fetch:At=fetch);var zi;Iv()&&(typeof global<"u"&&global.XMLHttpRequest?zi=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(zi=window.XMLHttpRequest));var Ca;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Ca=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Ca=window.ActiveXObject));!At&&Tp&&!zi&&!Ca&&(At=Mv||Tp);typeof At!="function"&&(At=void 0);var Eu=function(t,n){if(n&&$a(n)==="object"){var r="";for(var i in n)r+="&"+encodeURIComponent(i)+"="+encodeURIComponent(n[i]);if(!r)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+r.slice(1)}return t},_p=function(t,n,r){At(t,n).then(function(i){if(!i.ok)return r(i.statusText||"Error",{status:i.status});i.text().then(function(o){r(null,{status:i.status,data:o})}).catch(r)}).catch(r)},Rp=!1,RC=function(t,n,r,i){t.queryStringParams&&(n=Eu(n,t.queryStringParams));var o=Ou({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);r&&(o["Content-Type"]="application/json");var a=typeof t.requestOptions=="function"?t.requestOptions(r):t.requestOptions,s=Ou({method:r?"POST":"GET",body:r?t.stringify(r):void 0,headers:o},Rp?{}:a);try{_p(n,s,i)}catch(l){if(!a||Object.keys(a).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(a).forEach(function(u){delete s[u]}),_p(n,s,i),Rp=!0}catch(u){i(u)}}},NC=function(t,n,r,i){r&&$a(r)==="object"&&(r=Eu("",r).slice(1)),t.queryStringParams&&(n=Eu(n,t.queryStringParams));try{var o;zi?o=new zi:o=new Ca("MSXML2.XMLHTTP.3.0"),o.open(r?"POST":"GET",n,1),t.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!t.withCredentials,r&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var a=t.customHeaders;if(a=typeof a=="function"?a():a,a)for(var s in a)o.setRequestHeader(s,a[s]);o.onreadystatechange=function(){o.readyState>3&&i(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(r)}catch(l){console&&console.log(l)}},IC=function(t,n,r,i){if(typeof r=="function"&&(i=r,r=void 0),i=i||function(){},At&&n.indexOf("file:")!==0)return RC(t,n,r,i);if(Iv()||typeof ActiveXObject=="function")return NC(t,n,r,i);i(new Error("No fetch and no xhr implementation found!"))};function Mi(e){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mi(e)}function zC(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Np(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Dv(r.key),r)}}function MC(e,t,n){return t&&Np(e.prototype,t),n&&Np(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function DC(e,t,n){return t=Dv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dv(e){var t=AC(e,"string");return Mi(t)==="symbol"?t:String(t)}function AC(e,t){if(Mi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Mi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var FC=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,r,i){return DC({},r,i||"")},parseLoadPayload:function(n,r){},request:IC,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Av=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};zC(this,e),this.services=t,this.options=n,this.allOptions=r,this.type="backend",this.init(t,n,r)}return MC(e,[{key:"init",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=n,this.options=Ou(i,this.options||{},FC()),this.allOptions=o,this.services&&this.options.reloadInterval&&setInterval(function(){return r.reload()},this.options.reloadInterval)}},{key:"readMulti",value:function(n,r,i){this._readAny(n,n,r,r,i)}},{key:"read",value:function(n,r,i){this._readAny([n],n,[r],r,i)}},{key:"_readAny",value:function(n,r,i,o,a){var s=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(n,i)),l=LC(l),l.then(function(u){if(!u)return a(null,{});var c=s.services.interpolator.interpolate(u,{lng:n.join("+"),ns:i.join("+")});s.loadUrl(c,a,r,o)})}},{key:"loadUrl",value:function(n,r,i,o){var a=this,s=typeof i=="string"?[i]:i,l=typeof o=="string"?[o]:o,u=this.options.parseLoadPayload(s,l);this.options.request(this.options,n,u,function(c,d){if(d&&(d.status>=500&&d.status<600||!d.status))return r("failed loading "+n+"; status code: "+d.status,!0);if(d&&d.status>=400&&d.status<500)return r("failed loading "+n+"; status code: "+d.status,!1);if(!d&&c&&c.message&&c.message.indexOf("Failed to fetch")>-1)return r("failed loading "+n+": "+c.message,!0);if(c)return r(c,!1);var f,y;try{typeof d.data=="string"?f=a.options.parse(d.data,i,o):f=d.data}catch{y="failed parsing "+n+" to json"}if(y)return r(y,!1);r(null,f)})}},{key:"create",value:function(n,r,i,o,a){var s=this;if(this.options.addPath){typeof n=="string"&&(n=[n]);var l=this.options.parsePayload(r,i,o),u=0,c=[],d=[];n.forEach(function(f){var y=s.options.addPath;typeof s.options.addPath=="function"&&(y=s.options.addPath(f,r));var v=s.services.interpolator.interpolate(y,{lng:f,ns:r});s.options.request(s.options,v,l,function(w,$){u+=1,c.push(w),d.push($),u===n.length&&typeof a=="function"&&a(c,d)})})}}},{key:"reload",value:function(){var n=this,r=this.services,i=r.backendConnector,o=r.languageUtils,a=r.logger,s=i.language;if(!(s&&s.toLowerCase()==="cimode")){var l=[],u=function(d){var f=o.toResolveHierarchy(d);f.forEach(function(y){l.indexOf(y)<0&&l.push(y)})};u(s),this.allOptions.preload&&this.allOptions.preload.forEach(function(c){return u(c)}),l.forEach(function(c){n.allOptions.ns.forEach(function(d){i.read(c,d,"read",null,null,function(f,y){f&&a.warn("loading namespace ".concat(d," for language ").concat(c," failed"),f),!f&&y&&a.log("loaded namespace ".concat(d," for language ").concat(c),y),i.loaded("".concat(c,"|").concat(d),f,y)})})})}}}]),e}();Av.type="backend";async function HC(){await Oe.use(Av).use(j1).init({debug:!1,backend:{loadPath:`${z}/locales/{{lng}}.json`},interpolation:{escapeValue:!1},fallbackLng:"en",supportedLngs:["en","ru"]})}HC();const UC=S.img`
  ${sa};
  width: fit-content;
  height: 2.63vw;

  @media (max-width: ${O}) {
    width: fit-content;
    height: 5.06vw;
  }
`,Fv=()=>{const{t:e}=ut(),t=xt("Logo",e),{src:n,alt:r}=t;return h.jsx(UC,{src:n,alt:r})},BC=S.div`
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
`,WC=S(ct)`
  display: flex;
  margin-right: 1.2vw;

  @media (max-width: ${O}) {
    margin-right: 3vw;
  }
`,Ip=S.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${O}) {
    width: 6.61vw;
    height: 6.61vw;
  }
`,qC=S(Ke)`
  display: flex;
  background-color: transparent;
`,Xc=({type:e,$location:t,onClick:n,...r})=>{const{t:i}=ut(),o=xt("FeedbackWidgets",i);return h.jsx(BC,{$location:t,...r,children:o.map(a=>h.jsx(WC,{color:"transparent",href:a.href,target:"_blank",rel:"noopener noreferrer",children:n?h.jsx(qC,{type:"button",disabled:!n,onClick:n,children:h.jsx(Ip,{src:a.image[e==="light"?"lightSrc":"darkSrc"],alt:a.image.alt})}):h.jsx(Ip,{src:a.image[e==="light"?"lightSrc":"darkSrc"],alt:a.image.alt})},a.id))})},VC=S.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  @media (max-width: ${O}) {
    gap: 1vw;
  }
`,zp=S.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${O}) {
    margin: ${({$isButton:e})=>e?"0":"0 2vw"};
    width: ${({$isButton:e})=>e?"3vw":"6.5vw"};
    height: ${({$isButton:e})=>e?"3vw":"6.5vw"};
  }
`,GC=S.p`
  ${Z};
  ${he};
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
`,KC=S(Ke)`
  margin-right: 1vw;
  background: transparent;
  border-radius: 50px;
`,ju=({image:e,isButton:t=!1,onClick:n})=>{const{src:r,alt:i,text:o}=e;return h.jsxs(VC,{children:[t&&n?h.jsx(KC,{type:"button",disabled:!1,onClick:n,children:h.jsx(zp,{src:r,alt:i,$isButton:t})}):h.jsx(zp,{src:r,alt:i,$isButton:t}),h.jsx(GC,{children:o})]})},QC=S.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`,YC=S(Ke)`
  background-color: transparent;
  width: 1.04vw;
  height: 0.83vw;
  display: flex;

  @media (max-width: ${O}) {
    width: 2.95vw;
    height: 2.16vw;
  }
`,XC=S.img`
  width: 100%;
  height: 100%;
`,JC=S.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2.3vw 5vw 2.3vw 1.74vw;
  box-sizing: border-box;

  @media (max-width: ${O}) {
    padding: 16.7vw 5vw 13vw 5vw;
  }
`,ZC=S(Ke)`
  ${Z};
  ${he};
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

  ${({$code:e,$currentLanguage:t})=>e===t&&ve`
      display: flex;
      align-items: center;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 18vw;
        transform: translateY(-50%);
        background-image: url(${aS.background});
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
`,eO=({language:e,isLanguagesOpen:t,languagesHandler:n,closeIcon:r})=>{const{i18n:i}=ut(),[o,a]=j.useState(i.language),s=async u=>{a(u),await i.changeLanguage(u),n()},l=u=>async()=>{await s(u)};return h.jsxs(JC,{children:[h.jsxs(QC,{children:[h.jsx(YC,{disabled:!t,type:"button",onClick:n,children:h.jsx(XC,{src:r.src,alt:r.alt})}),h.jsx(ju,{image:e})]}),oS.map(u=>h.jsx(ZC,{type:"button",disabled:!t,$code:u.code,$currentLanguage:o,onClick:l(u.code),children:u.name},u.code))]})},{whiteColor:Hv,greenColor:tO,lightGreenColor:nO}=re,rO=S.div`
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
`,iO=S(ct)`
  border-radius: 5px;
  padding: 0.5vw 2vw;
  background: linear-gradient(
    133deg,
    ${tO} 0%,
    ${nO} 100%
  );
  word-break: break-word;
  @media (max-width: ${O}) {
    padding: 1.7vw 4.4vw;
  }
`,oO=S(ct)`
  visibility: hidden;
  margin: 0 1vw;
  background-color: transparent;
  word-break: break-word;
  @media (max-width: ${O}) {
    margin: 0 7.5vw 0 2vw;
  }
`,Mp=S.span`
  color: ${Hv};
  ${Ar};
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
  ${Vt};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.42px;

  @media (max-width: ${O}) {
    color: rgba(255, 255, 255, 0.9);
    font-size: calc(14vw / 5.09);
  }
`,Ap=S(Ke)`
  background-color: transparent;
  display: flex;
`,Uv=({onClick:e,loginAndRegister:t})=>{const{signUp:n,signIn:r}=t;return h.jsxs(rO,{children:[h.jsx(oO,{color:"transparent",href:jx,target:"_blank",rel:"noopener noreferrer",children:e?h.jsx(Ap,{type:"button",disabled:!e,onClick:e,children:h.jsx(Mp,{children:n})}):h.jsx(Mp,{children:n})}),h.jsx(iO,{color:"transparent",href:Ex,target:"_blank",rel:"noopener noreferrer",children:e?h.jsx(Ap,{type:"button",disabled:!e,onClick:e,children:h.jsx(Dp,{children:r})}):h.jsx(Dp,{children:r})})]})},aO=S.ul`
  position: relative;
  z-index: 11;
  ${Z};
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
`,sO=S.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;

  @media (max-width: ${O}) {
    margin-top: calc(27vw / 5.09);
    justify-content: start;
    align-self: start;
  }
`,lO=S(Ke)`
  background-color: transparent;
  ${Z};
  ${Ar};
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
`,Bv=({sections:e,headerHeight:t,burgerMenuHandler:n,isLanguagesOpen:r,languagesHandler:i})=>{const o=Dr(),a=Qa(),[s,l]=j.useState(!1),u=async d=>{a.pathname!=="/"&&await o("/");const f=document.getElementById(d);if(f){const y=f.offsetTop-t;window.scrollTo({top:y,behavior:"smooth"})}l(!1)},c=async d=>{l(!0),n&&await n(),i&&r&&await i(),await u(d)};return h.jsx("nav",{children:h.jsx(aO,{children:e.map(d=>h.jsx(sO,{children:h.jsx(lO,{disabled:s,type:"button",onClick:()=>c(d.id),children:d.title})},d.id))})})},uO=S.div`
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
`,cO=S.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`,dO=S(Ke)`
  background-color: transparent;
  width: 2.95vw;
  height: 2.16vw;
  border-radius: 0;
  display: flex;
`,fO=S.img`
  width: 100%;
  height: 100%;
`,pO=S.div`
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
`,hO=({language:e,menu:t,sections:n,headerHeight:r,languagesHandler:i,isBurgerMenuOpen:o,burgerMenuHandler:a,loginAndRegister:s,closeIcon:l})=>h.jsxs(uO,{children:[h.jsxs(cO,{children:[h.jsx(dO,{disabled:!o,type:"button",onClick:a,children:h.jsx(fO,{src:l.src,alt:l.alt})}),h.jsx(ju,{image:t})]}),h.jsx(Bv,{sections:n,headerHeight:r,burgerMenuHandler:a}),h.jsx(pO,{children:h.jsx(ju,{image:e,isButton:!0,onClick:i})}),h.jsx(Uv,{loginAndRegister:s,onClick:a}),h.jsx(Xc,{$location:"menu",type:"light",onClick:a})]}),gO=S.div`
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

  ${({$isOpen:e})=>e!==null?e?ve`
            animation: ${Cx} 0.5s forwards;
          `:ve`
            animation: ${Ox} 0.5s forwards;
          `:""};

  @media (max-width: ${O}) {
    width: 60%;
  }
`,Fp=({containerHeight:e,headerHeight:t,children:n,isOpen:r})=>{const i=Qa(),o=Et(),a=i.pathname==="/";return j.useLayoutEffect(()=>{const s=()=>{document.querySelectorAll(".drop-right").forEach(u=>{u.style.height=`calc(${e}px + ${t}px + ${!o&&a?1.7:0}vw)`})};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[e,t,o]),h.jsx(gO,{className:"drop-right",$isOpen:r,children:n})},{whiteColor:mO,headerColor:vO}=re,yO=S.header`
  background-color: ${vO};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  box-sizing: border-box;
  padding-left: 4vw;
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 6.94vw;
  z-index: 10;
  border-bottom: 0.5px ${mO} solid;
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
`,wO=S(Ke)`
  background-color: transparent;
  border-radius: 0;
  display: flex;
`,xO=S.img`
  width: 6.5vw;
  height: 3.77vw;
`,SO=S.div`
  position: relative;
  z-index: 11;
`,bO=S(Xc)`
  margin-left: 1.2vw;
  width: 20vw;
  display: flex;
  justify-content: end;
`,kO=S(Ke)`
  margin: 0 2vw;
  background-color: transparent;
  border-radius: 0;
  display: flex;
`,$O=S.img`
  width: 2.22vw;
  height: 2.22vw;
`,CO=j.forwardRef(({sections:e,containerHeight:t,isLanguagesOpen:n,isBurgerMenuOpen:r,languagesHandler:i,burgerMenuHandler:o,headerHeight:a},s)=>{const{t:l}=ut(),u=xt("Header",l),{loginAndRegister:c,language:d,menu:f,closeIcon:y}=u,v=Et();return h.jsxs(h.Fragment,{children:[h.jsxs(yO,{ref:s,children:[h.jsx(SO,{children:h.jsx(Fv,{})}),v!==null&&!v&&h.jsxs(h.Fragment,{children:[h.jsx(bO,{type:"light",$location:"menu"}),h.jsx(Bv,{sections:e,headerHeight:a,isLanguagesOpen:n,languagesHandler:i}),h.jsx(Uv,{loginAndRegister:c}),h.jsx(kO,{disabled:!!n,type:"button",onClick:i,children:h.jsx($O,{src:d.srcGray,alt:d.alt})})]}),v&&h.jsx(wO,{disabled:!!r,type:"button",onClick:o,children:h.jsx(xO,{src:f.src,alt:f.alt})})]}),v&&h.jsx(Fp,{isOpen:r,headerHeight:a,containerHeight:t,children:h.jsx(hO,{containerHeight:t,sections:e,headerHeight:a,isBurgerMenuOpen:r,burgerMenuHandler:o,languagesHandler:i,language:d,menu:f,loginAndRegister:c,closeIcon:y})}),h.jsx(Fp,{isOpen:n,headerHeight:a,containerHeight:t,children:h.jsx(eO,{containerHeight:t,headerHeight:a,isLanguagesOpen:n,languagesHandler:i,language:d,closeIcon:y})})]})}),{whiteColor:Jc}=re,OO=S.div`
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
`,PO=S.h3`
  ${Z};
  margin-bottom: 0.7vw;
  color: ${Jc};
  ${Ar};
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
`,EO=S.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${O}) {
    margin: 0.5vw;
  }
`,jO=S.li`
  ${Z};
  margin-bottom: 0.34vw;
  color: ${Jc};
  ${Ar};
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
`,Zs=({data:e})=>h.jsxs(OO,{children:[h.jsx(PO,{children:e.title}),h.jsx(EO,{children:e.links.map(t=>h.jsx(jO,{children:h.jsx(ct,{color:Jc,href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.name})},t.name))})]}),{whiteColor:Lu,deepGrayColor:LO}=re,_t={text:"Our vision is to provide convenience and help increase your sales business.",nav:{about:{title:"About",links:[{name:"How it works",href:Dx},{name:"Featured",href:Ax},{name:"Partnership",href:Fx},{name:"Business Relation",href:Hx}]},community:{title:"Community",links:[{name:"Events",href:Ux},{name:"Blog",href:Bx},{name:"Podcast",href:Wx},{name:"Invite a friend",href:qx}]},socials:{title:"Socials",links:[{name:"Telegram",href:Fm},{name:"Twitter",href:Dm},{name:"Facebook",href:Am}]}},rights:"Auto Fast. All rights reserved",policy:{name:"Privacy & Policy",href:Vx},condition:{name:"Terms & Condition",href:Gx}},TO=S.footer`
  width: 100vw;
  box-sizing: border-box;
  padding: 5.55vw 4.28vw 0.5vw;
  background-color: ${LO};

  @media (max-width: ${O}) {
    padding: 15.7vw 0 4.17vw 0;
  }
`,_O=S.div`
  margin-bottom: 2.5vw;
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${O}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,RO=S.div`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  justify-content: space-between;

  @media (max-width: ${O}) {
    flex-direction: column;
    align-items: center;
  }
`,NO=S.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${O}) {
    flex-direction: column;
  }
`,IO=S(Fv)`
  @media (max-width: ${O}) {
    width: 43.5vw;
    height: 10.24vw;
  }
`,zO=S.div`
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
`,Hp=S.p`
  ${Z};
  margin: 2.54vw 0 2.09vw;
  color: ${Lu};
  ${Ar};
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
`,MO=S(Xc)`
  @media (max-width: ${O}) {
    padding-left: 3vw;
  }
`,Up=S.p`
  ${Z};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(16vw / 5.08);
  }
`,Bp=S(ct)`
  margin-left: 4.2vw;

  @media (max-width: ${O}) {
    margin: 0;
  }
`,DO=()=>{const e=new Date().getFullYear();return h.jsxs(TO,{children:[h.jsxs(_O,{children:[h.jsxs(zO,{children:[h.jsx(IO,{}),h.jsx(Hp,{children:_t.text}),h.jsx(MO,{type:"dark"})]}),h.jsx(Zs,{data:_t.nav.about}),h.jsx(Zs,{data:_t.nav.community}),h.jsx(Zs,{data:_t.nav.socials})]}),h.jsxs(RO,{children:[h.jsxs(Hp,{children:["© ",e," ",_t.rights]}),h.jsxs(NO,{children:[h.jsx(Bp,{color:Lu,href:_t.policy.href,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Up,{children:_t.policy.name})}),h.jsx(Bp,{color:Lu,href:_t.condition.href,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Up,{children:_t.condition.name})})]})]})]})},AO=()=>{const[e,t]=j.useState(""),[n,r]=j.useState([]),i=[{id:"1",question:"What is React?",answer:"React is a JavaScript library for building user interfaces."},{id:"2",question:"How does state work in React?",answer:"State is an object that holds the data that may change over time."}],o=l=>{t(l.target.value)},a=l=>{r(u=>u.includes(l)?u.filter(c=>c!==l):[...u,l])},s=i.filter(l=>l.question.toLowerCase().includes(e.toLowerCase())||l.answer.toLowerCase().includes(e.toLowerCase()));return h.jsxs("div",{children:[h.jsx("input",{type:"text",placeholder:"Search...",value:e,onChange:o}),s.length>0?h.jsx("ul",{children:s.map(l=>h.jsxs("li",{children:[h.jsx("button",{onClick:()=>a(l.id),children:n.includes(l.id)?"Hide Answer":"Show Answer"}),h.jsx("strong",{children:l.question}),n.includes(l.id)&&h.jsx("p",{children:l.answer})]},l.id))}):h.jsx("p",{children:"Sorry, No results found."})]})},FO=S.div`
  display: inline-block;
`,HO=S.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 5px;
`,UO=({initialValue:e,ratingData:t})=>{const[n,r]=j.useState(e),i=o=>{r(o===n?0:o)};return h.jsx(FO,{children:[1,2,3,4,5].map(o=>h.jsx(HO,{src:o<=n?t.active.src:t.inactive.src,alt:o<=n?t.active.alt:t.inactive.alt,onClick:()=>i(o)},o))})},BO=S.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,WO=S.div`
  width: 60%;
  padding: 20px;
  background-color: #f0f0f0;
`,qO=S.div`
  width: 30%;
  padding: 20px;
`,VO=S.div`
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
`,GO=()=>{const{t:e}=ut(),t=xt("News",e),{rating:n}=t,{id:r}=lx(),i=Dr(),o=bu.find(l=>l.id===r);if(!o)return h.jsx("div",{children:"News not found"});const a=bu.filter(l=>l.id!==r),s=l=>{i(`/news/${l}`)};return h.jsxs(BO,{children:[h.jsxs(WO,{children:[h.jsx("img",{src:o.url,alt:o.title}),h.jsx(UO,{initialValue:0,ratingData:n}),h.jsx("h1",{children:o.title}),h.jsx("p",{children:o.text})]}),h.jsx(qO,{children:a.map(l=>h.jsxs(VO,{onClick:()=>s(l.id),children:[h.jsx("img",{src:l.url,alt:l.title}),h.jsx("h2",{children:l.title}),h.jsx("p",{children:l.text})]},l.id))})]})},KO=S.div`
  max-height: ${({$isBurgerMenuOpen:e,$containerHeight:t,$headerHeight:n,$isLanguagesOpen:r})=>(e||r)&&t<window.innerHeight?`calc(${window.innerHeight}px - ${n}px)`:(e||r)&&t>=window.innerHeight?`${t}px`:"auto"};
  overflow: ${({$isBurgerMenuOpen:e,$isLanguagesOpen:t})=>e||t?"clip":"auto"};
`,QO=()=>{const e=j.useRef(null),t=j.useRef(null),n=j.useRef(null),r=j.useRef(null),[i,o]=j.useState(null),[a,s]=j.useState(null),[l,u]=j.useState(0),[c,d]=j.useState(0),[f,y]=j.useState(0),[v,w]=j.useState(0),{t:$}=ut(),g=xt("Sections",$);j.useEffect(()=>{document.documentElement.lang=Oe.language},[]),j.useEffect(()=>{const b=()=>{if(e.current){const k=e.current.clientHeight;u(k)}};return b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}},[e,a,i]),j.useEffect(()=>{const b=()=>{if(t.current){const k=t.current.clientHeight;d(k)}};return b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b),d(0)}},[t,a,i]),j.useEffect(()=>{const b=()=>{if(n.current){const k=n.current.clientHeight;y(k)}};return b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b),y(0)}},[n,a,i]),j.useEffect(()=>{const b=()=>{if(r.current){const k=r.current.clientHeight;w(k)}};return b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b),w(0)}},[r,a,i]);const p=()=>{setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},300)},m=()=>{o(!i),a&&x(),i||p()},x=()=>{s(!a),a||p()};return h.jsx($x,{basename:"/thoth/",children:h.jsxs(_1,{i18n:Oe,children:[h.jsx(G$,{}),h.jsx(CO,{ref:e,headerHeight:l,isLanguagesOpen:i,isBurgerMenuOpen:a,languagesHandler:m,burgerMenuHandler:x,containerHeight:c||f||v,paymentFeesHeight:f,sections:g}),h.jsx(KO,{className:"styled-container",$isBurgerMenuOpen:a,$containerHeight:c||f||v,$isLanguagesOpen:i,$headerHeight:l}),h.jsxs(bx,{children:[h.jsx(Kn,{path:"/",element:h.jsx($$,{mainScreenRef:t,sections:g})}),h.jsx(Kn,{path:"/payment-fees",element:h.jsx(V$,{ref:n})}),h.jsx(Kn,{path:"/faq",element:h.jsx(AO,{})}),h.jsx(Kn,{path:"/news/:id",element:h.jsx(GO,{})}),h.jsx(Kn,{path:"*",element:h.jsx(aC,{ref:r})})]}),h.jsx(DO,{})]})})};el.createRoot(document.getElementById("root")).render(h.jsx(j.StrictMode,{children:h.jsx(QO,{})}));
//# sourceMappingURL=main-fcf20c9b.js.map
