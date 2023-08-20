function Zp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ey(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var eh={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=Symbol.for("react.element"),ty=Symbol.for("react.portal"),ny=Symbol.for("react.fragment"),ry=Symbol.for("react.strict_mode"),iy=Symbol.for("react.profiler"),oy=Symbol.for("react.provider"),ay=Symbol.for("react.context"),sy=Symbol.for("react.forward_ref"),ly=Symbol.for("react.suspense"),uy=Symbol.for("react.memo"),cy=Symbol.for("react.lazy"),id=Symbol.iterator;function dy(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var th={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nh=Object.assign,rh={};function Rr(e,t,n){this.props=e,this.context=t,this.refs=rh,this.updater=n||th}Rr.prototype.isReactComponent={};Rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ih(){}ih.prototype=Rr.prototype;function Iu(e,t,n){this.props=e,this.context=t,this.refs=rh,this.updater=n||th}var Mu=Iu.prototype=new ih;Mu.constructor=Iu;nh(Mu,Rr.prototype);Mu.isPureReactComponent=!0;var od=Array.isArray,oh=Object.prototype.hasOwnProperty,Du={current:null},ah={key:!0,ref:!0,__self:!0,__source:!0};function sh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)oh.call(t,r)&&!ah.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Di,type:e,key:o,ref:a,props:i,_owner:Du.current}}function fy(e,t){return{$$typeof:Di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Au(e){return typeof e=="object"&&e!==null&&e.$$typeof===Di}function py(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ad=/\/+/g;function us(e,t){return typeof e=="object"&&e!==null&&e.key!=null?py(""+e.key):t.toString(36)}function wo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Di:case ty:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+us(a,0):r,od(i)?(n="",e!=null&&(n=e.replace(ad,"$&/")+"/"),wo(i,t,n,"",function(u){return u})):i!=null&&(Au(i)&&(i=fy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ad,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",od(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+us(o,s);a+=wo(o,t,n,l,i)}else if(l=dy(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+us(o,s++),a+=wo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Gi(e,t,n){if(e==null)return e;var r=[],i=0;return wo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function hy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},xo={transition:null},gy={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:xo,ReactCurrentOwner:Du};J.Children={map:Gi,forEach:function(e,t,n){Gi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Gi(e,function(){t++}),t},toArray:function(e){return Gi(e,function(t){return t})||[]},only:function(e){if(!Au(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=Rr;J.Fragment=ny;J.Profiler=iy;J.PureComponent=Iu;J.StrictMode=ry;J.Suspense=ly;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gy;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Du.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)oh.call(t,l)&&!ah.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Di,type:e.type,key:i,ref:o,props:r,_owner:a}};J.createContext=function(e){return e={$$typeof:ay,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:oy,_context:e},e.Consumer=e};J.createElement=sh;J.createFactory=function(e){var t=sh.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:sy,render:e}};J.isValidElement=Au;J.lazy=function(e){return{$$typeof:cy,_payload:{_status:-1,_result:e},_init:hy}};J.memo=function(e,t){return{$$typeof:uy,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=xo.transition;xo.transition={};try{e()}finally{xo.transition=t}};J.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};J.useCallback=function(e,t){return Fe.current.useCallback(e,t)};J.useContext=function(e){return Fe.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};J.useEffect=function(e,t){return Fe.current.useEffect(e,t)};J.useId=function(){return Fe.current.useId()};J.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Fe.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};J.useRef=function(e){return Fe.current.useRef(e)};J.useState=function(e){return Fe.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Fe.current.useTransition()};J.version="18.2.0";eh.exports=J;var j=eh.exports;const gt=zu(j),my=Zp({__proto__:null,default:gt},[j]);var lh={exports:{}},ja={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy=j,yy=Symbol.for("react.element"),wy=Symbol.for("react.fragment"),xy=Object.prototype.hasOwnProperty,Sy=vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,by={key:!0,ref:!0,__self:!0,__source:!0};function uh(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)xy.call(t,r)&&!by.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:yy,type:e,key:o,ref:a,props:i,_owner:Sy.current}}ja.Fragment=wy;ja.jsx=uh;ja.jsxs=uh;lh.exports=ja;var p=lh.exports,il={},ch={exports:{}},et={},dh={exports:{}},fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,z){var H=T.length;T.push(z);e:for(;0<H;){var X=H-1>>>1,K=T[X];if(0<i(K,z))T[X]=z,T[H]=K,H=X;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var z=T[0],H=T.pop();if(H!==z){T[0]=H;e:for(var X=0,K=T.length,Tt=K>>>1;X<Tt;){var Pe=2*(X+1)-1,Gt=T[Pe],Qe=Pe+1,_t=T[Qe];if(0>i(Gt,H))Qe<K&&0>i(_t,Gt)?(T[X]=_t,T[Qe]=H,X=Qe):(T[X]=Gt,T[Pe]=H,X=Pe);else if(Qe<K&&0>i(_t,H))T[X]=_t,T[Qe]=H,X=Qe;else break e}}return z}function i(T,z){var H=T.sortIndex-z.sortIndex;return H!==0?H:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,c=null,f=3,y=!1,v=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=T)r(u),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(u)}}function S(T){if(w=!1,m(T),!v)if(n(l)!==null)v=!0,B(b);else{var z=n(u);z!==null&&q(S,z.startTime-T)}}function b(T,z){v=!1,w&&(w=!1,g(E),E=-1),y=!0;var H=f;try{for(m(z),c=n(l);c!==null&&(!(c.expirationTime>z)||T&&!F());){var X=c.callback;if(typeof X=="function"){c.callback=null,f=c.priorityLevel;var K=X(c.expirationTime<=z);z=e.unstable_now(),typeof K=="function"?c.callback=K:c===n(l)&&r(l),m(z)}else r(l);c=n(l)}if(c!==null)var Tt=!0;else{var Pe=n(u);Pe!==null&&q(S,Pe.startTime-z),Tt=!1}return Tt}finally{c=null,f=H,y=!1}}var $=!1,P=null,E=-1,R=5,N=-1;function F(){return!(e.unstable_now()-N<R)}function U(){if(P!==null){var T=e.unstable_now();N=T;var z=!0;try{z=P(!0,T)}finally{z?A():($=!1,P=null)}}else $=!1}var A;if(typeof h=="function")A=function(){h(U)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,L=O.port2;O.port1.onmessage=U,A=function(){L.postMessage(null)}}else A=function(){C(U,0)};function B(T){P=T,$||($=!0,A())}function q(T,z){E=C(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,B(b))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var H=f;f=z;try{return T()}finally{f=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var H=f;f=T;try{return z()}finally{f=H}},e.unstable_scheduleCallback=function(T,z,H){var X=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?X+H:X):H=X,T){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=H+K,T={id:d++,callback:z,priorityLevel:T,startTime:H,expirationTime:K,sortIndex:-1},H>X?(T.sortIndex=H,t(u,T),n(l)===null&&T===n(u)&&(w?(g(E),E=-1):w=!0,q(S,H-X))):(T.sortIndex=K,t(l,T),v||y||(v=!0,B(b))),T},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(T){var z=f;return function(){var H=f;f=z;try{return T.apply(this,arguments)}finally{f=H}}}})(fh);dh.exports=fh;var ky=dh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph=j,Ze=ky;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hh=new Set,pi={};function Hn(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(pi[e]=t,e=0;e<t.length;e++)hh.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,$y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sd={},ld={};function Cy(e){return ol.call(ld,e)?!0:ol.call(sd,e)?!1:$y.test(e)?ld[e]=!0:(sd[e]=!0,!1)}function Oy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Py(e,t,n,r){if(t===null||typeof t>"u"||Oy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fu=/[\-:]([a-z])/g;function Hu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fu,Hu);Te[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fu,Hu);Te[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fu,Hu);Te[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function Uu(e,t,n,r){var i=Te.hasOwnProperty(t)?Te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Py(t,n,i,r)&&(n=null),r||i===null?Cy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qt=ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ki=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),Bu=Symbol.for("react.strict_mode"),al=Symbol.for("react.profiler"),gh=Symbol.for("react.provider"),mh=Symbol.for("react.context"),Wu=Symbol.for("react.forward_ref"),sl=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),qu=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),vh=Symbol.for("react.offscreen"),ud=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=ud&&e[ud]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,cs;function Yr(e){if(cs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);cs=t&&t[1]||""}return`
`+cs+e}var ds=!1;function fs(e,t){if(!e||ds)return"";ds=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{ds=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function Ey(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=fs(e.type,!1),e;case 11:return e=fs(e.type.render,!1),e;case 1:return e=fs(e.type,!0),e;default:return""}}function ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case Qn:return"Portal";case al:return"Profiler";case Bu:return"StrictMode";case sl:return"Suspense";case ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mh:return(e.displayName||"Context")+".Consumer";case gh:return(e._context.displayName||"Context")+".Provider";case Wu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qu:return t=e.displayName||null,t!==null?t:ul(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return ul(e(t))}catch{}}return null}function jy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(t);case 8:return t===Bu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ly(e){var t=yh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qi(e){e._valueTracker||(e._valueTracker=Ly(e))}function wh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xh(e,t){t=t.checked,t!=null&&Uu(e,"checked",t,!1)}function dl(e,t){xh(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&fl(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fl(e,t,n){(t!=="number"||zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xr=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Xr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function Sh(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yi,kh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yi=Yi||document.createElement("div"),Yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function hi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ty=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(e){Ty.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ti[t]=ti[e]})});function $h(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ti.hasOwnProperty(e)&&ti[e]?(""+t).trim():t+"px"}function Ch(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$h(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _y=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gl(e,t){if(t){if(_y[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function Vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,dr=null,fr=null;function hd(e){if(e=Hi(e)){if(typeof yl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Na(t),yl(e.stateNode,e.type,t))}}function Oh(e){dr?fr?fr.push(e):fr=[e]:dr=e}function Ph(){if(dr){var e=dr,t=fr;if(fr=dr=null,hd(e),t)for(e=0;e<t.length;e++)hd(t[e])}}function Eh(e,t){return e(t)}function jh(){}var ps=!1;function Lh(e,t,n){if(ps)return e(t,n);ps=!0;try{return Eh(e,t,n)}finally{ps=!1,(dr!==null||fr!==null)&&(jh(),Ph())}}function gi(e,t){var n=e.stateNode;if(n===null)return null;var r=Na(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var wl=!1;if(Ht)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){wl=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{wl=!1}function Ry(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ni=!1,Io=null,Mo=!1,xl=null,Ny={onError:function(e){ni=!0,Io=e}};function zy(e,t,n,r,i,o,a,s,l){ni=!1,Io=null,Ry.apply(Ny,arguments)}function Iy(e,t,n,r,i,o,a,s,l){if(zy.apply(this,arguments),ni){if(ni){var u=Io;ni=!1,Io=null}else throw Error(_(198));Mo||(Mo=!0,xl=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Th(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gd(e){if(Un(e)!==e)throw Error(_(188))}function My(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gd(i),e;if(o===r)return gd(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function _h(e){return e=My(e),e!==null?Rh(e):null}function Rh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rh(e);if(t!==null)return t;e=e.sibling}return null}var Nh=Ze.unstable_scheduleCallback,md=Ze.unstable_cancelCallback,Dy=Ze.unstable_shouldYield,Ay=Ze.unstable_requestPaint,me=Ze.unstable_now,Fy=Ze.unstable_getCurrentPriorityLevel,Gu=Ze.unstable_ImmediatePriority,zh=Ze.unstable_UserBlockingPriority,Do=Ze.unstable_NormalPriority,Hy=Ze.unstable_LowPriority,Ih=Ze.unstable_IdlePriority,La=null,Ot=null;function Uy(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(La,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:qy,By=Math.log,Wy=Math.LN2;function qy(e){return e>>>=0,e===0?32:31-(By(e)/Wy|0)|0}var Xi=64,Ji=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Jr(s):(o&=a,o!==0&&(r=Jr(o)))}else a=n&~i,a!==0?r=Jr(a):o!==0&&(r=Jr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),i=1<<n,r|=e[n],t&=~i;return r}function Vy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-mt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Vy(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mh(){var e=Xi;return Xi<<=1,!(Xi&4194240)&&(Xi=64),e}function hs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function Ky(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-mt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ku(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ne=0;function Dh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ah,Qu,Fh,Hh,Uh,bl=!1,Zi=[],sn=null,ln=null,un=null,mi=new Map,vi=new Map,en=[],Qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vd(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function Br(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Hi(t),t!==null&&Qu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yy(e,t,n,r,i){switch(t){case"focusin":return sn=Br(sn,e,t,n,r,i),!0;case"dragenter":return ln=Br(ln,e,t,n,r,i),!0;case"mouseover":return un=Br(un,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return mi.set(o,Br(mi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,vi.set(o,Br(vi.get(o)||null,e,t,n,r,i)),!0}return!1}function Bh(e){var t=Cn(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=Th(n),t!==null){e.blockedOn=t,Uh(e.priority,function(){Fh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return t=Hi(n),t!==null&&Qu(t),e.blockedOn=n,!1;t.shift()}return!0}function yd(e,t,n){So(e)&&n.delete(t)}function Xy(){bl=!1,sn!==null&&So(sn)&&(sn=null),ln!==null&&So(ln)&&(ln=null),un!==null&&So(un)&&(un=null),mi.forEach(yd),vi.forEach(yd)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,bl||(bl=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,Xy)))}function yi(e){function t(i){return Wr(i,e)}if(0<Zi.length){Wr(Zi[0],e);for(var n=1;n<Zi.length;n++){var r=Zi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Wr(sn,e),ln!==null&&Wr(ln,e),un!==null&&Wr(un,e),mi.forEach(t),vi.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Bh(n),n.blockedOn===null&&en.shift()}var pr=qt.ReactCurrentBatchConfig,Fo=!0;function Jy(e,t,n,r){var i=ne,o=pr.transition;pr.transition=null;try{ne=1,Yu(e,t,n,r)}finally{ne=i,pr.transition=o}}function Zy(e,t,n,r){var i=ne,o=pr.transition;pr.transition=null;try{ne=4,Yu(e,t,n,r)}finally{ne=i,pr.transition=o}}function Yu(e,t,n,r){if(Fo){var i=kl(e,t,n,r);if(i===null)$s(e,t,r,Ho,n),vd(e,r);else if(Yy(i,e,t,n,r))r.stopPropagation();else if(vd(e,r),t&4&&-1<Qy.indexOf(e)){for(;i!==null;){var o=Hi(i);if(o!==null&&Ah(o),o=kl(e,t,n,r),o===null&&$s(e,t,r,Ho,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else $s(e,t,r,null,n)}}var Ho=null;function kl(e,t,n,r){if(Ho=null,e=Vu(r),e=Cn(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Th(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ho=e,null}function Wh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fy()){case Gu:return 1;case zh:return 4;case Do:case Hy:return 16;case Ih:return 536870912;default:return 16}default:return 16}}var rn=null,Xu=null,bo=null;function qh(){if(bo)return bo;var e,t=Xu,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return bo=i.slice(e,1<r?1-r:void 0)}function ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function eo(){return!0}function wd(){return!1}function tt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?eo:wd,this.isPropagationStopped=wd,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ju=tt(Nr),Fi=he({},Nr,{view:0,detail:0}),ew=tt(Fi),gs,ms,qr,Ta=he({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(gs=e.screenX-qr.screenX,ms=e.screenY-qr.screenY):ms=gs=0,qr=e),gs)},movementY:function(e){return"movementY"in e?e.movementY:ms}}),xd=tt(Ta),tw=he({},Ta,{dataTransfer:0}),nw=tt(tw),rw=he({},Fi,{relatedTarget:0}),vs=tt(rw),iw=he({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),ow=tt(iw),aw=he({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sw=tt(aw),lw=he({},Nr,{data:0}),Sd=tt(lw),uw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dw[e])?!!t[e]:!1}function Zu(){return fw}var pw=he({},Fi,{key:function(e){if(e.key){var t=uw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(e){return e.type==="keypress"?ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hw=tt(pw),gw=he({},Ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=tt(gw),mw=he({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),vw=tt(mw),yw=he({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ww=tt(yw),xw=he({},Ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sw=tt(xw),bw=[9,13,27,32],ec=Ht&&"CompositionEvent"in window,ri=null;Ht&&"documentMode"in document&&(ri=document.documentMode);var kw=Ht&&"TextEvent"in window&&!ri,Vh=Ht&&(!ec||ri&&8<ri&&11>=ri),kd=String.fromCharCode(32),$d=!1;function Gh(e,t){switch(e){case"keyup":return bw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function $w(e,t){switch(e){case"compositionend":return Kh(t);case"keypress":return t.which!==32?null:($d=!0,kd);case"textInput":return e=t.data,e===kd&&$d?null:e;default:return null}}function Cw(e,t){if(Xn)return e==="compositionend"||!ec&&Gh(e,t)?(e=qh(),bo=Xu=rn=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vh&&t.locale!=="ko"?null:t.data;default:return null}}var Ow={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ow[e.type]:t==="textarea"}function Qh(e,t,n,r){Oh(r),t=Uo(t,"onChange"),0<t.length&&(n=new Ju("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ii=null,wi=null;function Pw(e){ag(e,0)}function _a(e){var t=er(e);if(wh(t))return e}function Ew(e,t){if(e==="change")return t}var Yh=!1;if(Ht){var ys;if(Ht){var ws="oninput"in document;if(!ws){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),ws=typeof Od.oninput=="function"}ys=ws}else ys=!1;Yh=ys&&(!document.documentMode||9<document.documentMode)}function Pd(){ii&&(ii.detachEvent("onpropertychange",Xh),wi=ii=null)}function Xh(e){if(e.propertyName==="value"&&_a(wi)){var t=[];Qh(t,wi,e,Vu(e)),Lh(Pw,t)}}function jw(e,t,n){e==="focusin"?(Pd(),ii=t,wi=n,ii.attachEvent("onpropertychange",Xh)):e==="focusout"&&Pd()}function Lw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _a(wi)}function Tw(e,t){if(e==="click")return _a(t)}function _w(e,t){if(e==="input"||e==="change")return _a(t)}function Rw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:Rw;function xi(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ol.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function Ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jd(e,t){var n=Ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ed(n)}}function Jh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zh(){for(var e=window,t=zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zo(e.document)}return t}function tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nw(e){var t=Zh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jh(n.ownerDocument.documentElement,n)){if(r!==null&&tc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=jd(n,o);var a=jd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zw=Ht&&"documentMode"in document&&11>=document.documentMode,Jn=null,$l=null,oi=null,Cl=!1;function Ld(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cl||Jn==null||Jn!==zo(r)||(r=Jn,"selectionStart"in r&&tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oi&&xi(oi,r)||(oi=r,r=Uo($l,"onSelect"),0<r.length&&(t=new Ju("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function to(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zn={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},xs={},eg={};Ht&&(eg=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function Ra(e){if(xs[e])return xs[e];if(!Zn[e])return e;var t=Zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eg)return xs[e]=t[n];return e}var tg=Ra("animationend"),ng=Ra("animationiteration"),rg=Ra("animationstart"),ig=Ra("transitionend"),og=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){og.set(e,t),Hn(t,[e])}for(var Ss=0;Ss<Td.length;Ss++){var bs=Td[Ss],Iw=bs.toLowerCase(),Mw=bs[0].toUpperCase()+bs.slice(1);yn(Iw,"on"+Mw)}yn(tg,"onAnimationEnd");yn(ng,"onAnimationIteration");yn(rg,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(ig,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function _d(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Iy(r,t,void 0,e),e.currentTarget=null}function ag(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;_d(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;_d(i,s,u),o=l}}}if(Mo)throw e=xl,Mo=!1,xl=null,e}function oe(e,t){var n=t[Ll];n===void 0&&(n=t[Ll]=new Set);var r=e+"__bubble";n.has(r)||(sg(t,e,2,!1),n.add(r))}function ks(e,t,n){var r=0;t&&(r|=4),sg(n,e,r,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function Si(e){if(!e[no]){e[no]=!0,hh.forEach(function(n){n!=="selectionchange"&&(Dw.has(n)||ks(n,!1,e),ks(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,ks("selectionchange",!1,t))}}function sg(e,t,n,r){switch(Wh(t)){case 1:var i=Jy;break;case 4:i=Zy;break;default:i=Yu}n=i.bind(null,t,n,e),i=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $s(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Cn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Lh(function(){var u=o,d=Vu(n),c=[];e:{var f=og.get(e);if(f!==void 0){var y=Ju,v=e;switch(e){case"keypress":if(ko(n)===0)break e;case"keydown":case"keyup":y=hw;break;case"focusin":v="focus",y=vs;break;case"focusout":v="blur",y=vs;break;case"beforeblur":case"afterblur":y=vs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=nw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=vw;break;case tg:case ng:case rg:y=ow;break;case ig:y=ww;break;case"scroll":y=ew;break;case"wheel":y=Sw;break;case"copy":case"cut":case"paste":y=sw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=bd}var w=(t&4)!==0,C=!w&&e==="scroll",g=w?f!==null?f+"Capture":null:f;w=[];for(var h=u,m;h!==null;){m=h;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,g!==null&&(S=gi(h,g),S!=null&&w.push(bi(h,S,m)))),C)break;h=h.return}0<w.length&&(f=new y(f,v,null,n,d),c.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==vl&&(v=n.relatedTarget||n.fromElement)&&(Cn(v)||v[Ut]))break e;if((y||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Cn(v):null,v!==null&&(C=Un(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=xd,S="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=bd,S="onPointerLeave",g="onPointerEnter",h="pointer"),C=y==null?f:er(y),m=v==null?f:er(v),f=new w(S,h+"leave",y,n,d),f.target=C,f.relatedTarget=m,S=null,Cn(d)===u&&(w=new w(g,h+"enter",v,n,d),w.target=m,w.relatedTarget=C,S=w),C=S,y&&v)t:{for(w=y,g=v,h=0,m=w;m;m=Wn(m))h++;for(m=0,S=g;S;S=Wn(S))m++;for(;0<h-m;)w=Wn(w),h--;for(;0<m-h;)g=Wn(g),m--;for(;h--;){if(w===g||g!==null&&w===g.alternate)break t;w=Wn(w),g=Wn(g)}w=null}else w=null;y!==null&&Rd(c,f,y,w,!1),v!==null&&C!==null&&Rd(c,C,v,w,!0)}}e:{if(f=u?er(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var b=Ew;else if(Cd(f))if(Yh)b=_w;else{b=Lw;var $=jw}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=Tw);if(b&&(b=b(e,u))){Qh(c,b,n,d);break e}$&&$(e,f,u),e==="focusout"&&($=f._wrapperState)&&$.controlled&&f.type==="number"&&fl(f,"number",f.value)}switch($=u?er(u):window,e){case"focusin":(Cd($)||$.contentEditable==="true")&&(Jn=$,$l=u,oi=null);break;case"focusout":oi=$l=Jn=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,Ld(c,n,d);break;case"selectionchange":if(zw)break;case"keydown":case"keyup":Ld(c,n,d)}var P;if(ec)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Xn?Gh(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Vh&&n.locale!=="ko"&&(Xn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Xn&&(P=qh()):(rn=d,Xu="value"in rn?rn.value:rn.textContent,Xn=!0)),$=Uo(u,E),0<$.length&&(E=new Sd(E,e,null,n,d),c.push({event:E,listeners:$}),P?E.data=P:(P=Kh(n),P!==null&&(E.data=P)))),(P=kw?$w(e,n):Cw(e,n))&&(u=Uo(u,"onBeforeInput"),0<u.length&&(d=new Sd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=P))}ag(c,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=gi(e,n),o!=null&&r.unshift(bi(e,o,i)),o=gi(e,t),o!=null&&r.push(bi(e,o,i))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=gi(n,o),l!=null&&a.unshift(bi(n,l,s))):i||(l=gi(n,o),l!=null&&a.push(bi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Aw=/\r\n?/g,Fw=/\u0000|\uFFFD/g;function Nd(e){return(typeof e=="string"?e:""+e).replace(Aw,`
`).replace(Fw,"")}function ro(e,t,n){if(t=Nd(t),Nd(e)!==t&&n)throw Error(_(425))}function Bo(){}var Ol=null,Pl=null;function El(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,Hw=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,Uw=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(e){return zd.resolve(null).then(e).catch(Bw)}:jl;function Bw(e){setTimeout(function(){throw e})}function Cs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),yi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yi(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Id(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),$t="__reactFiber$"+zr,ki="__reactProps$"+zr,Ut="__reactContainer$"+zr,Ll="__reactEvents$"+zr,Ww="__reactListeners$"+zr,qw="__reactHandles$"+zr;function Cn(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Id(e);e!==null;){if(n=e[$t])return n;e=Id(e)}return t}e=n,n=e.parentNode}return null}function Hi(e){return e=e[$t]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Na(e){return e[ki]||null}var Tl=[],tr=-1;function wn(e){return{current:e}}function se(e){0>tr||(e.current=Tl[tr],Tl[tr]=null,tr--)}function ie(e,t){tr++,Tl[tr]=e.current,e.current=t}var vn={},Ie=wn(vn),qe=wn(!1),zn=vn;function yr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(e){return e=e.childContextTypes,e!=null}function Wo(){se(qe),se(Ie)}function Md(e,t,n){if(Ie.current!==vn)throw Error(_(168));ie(Ie,t),ie(qe,n)}function lg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,jy(e)||"Unknown",i));return he({},n,r)}function qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,zn=Ie.current,ie(Ie,e),ie(qe,qe.current),!0}function Dd(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=lg(e,t,zn),r.__reactInternalMemoizedMergedChildContext=e,se(qe),se(Ie),ie(Ie,e)):se(qe),ie(qe,n)}var It=null,za=!1,Os=!1;function ug(e){It===null?It=[e]:It.push(e)}function Vw(e){za=!0,ug(e)}function xn(){if(!Os&&It!==null){Os=!0;var e=0,t=ne;try{var n=It;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,za=!1}catch(i){throw It!==null&&(It=It.slice(e+1)),Nh(Gu,xn),i}finally{ne=t,Os=!1}}return null}var nr=[],rr=0,Vo=null,Go=0,nt=[],rt=0,In=null,Mt=1,Dt="";function kn(e,t){nr[rr++]=Go,nr[rr++]=Vo,Vo=e,Go=t}function cg(e,t,n){nt[rt++]=Mt,nt[rt++]=Dt,nt[rt++]=In,In=e;var r=Mt;e=Dt;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var o=32-mt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Mt=1<<32-mt(t)+i|n<<i|r,Dt=o+e}else Mt=1<<o|n<<i|r,Dt=e}function nc(e){e.return!==null&&(kn(e,1),cg(e,1,0))}function rc(e){for(;e===Vo;)Vo=nr[--rr],nr[rr]=null,Go=nr[--rr],nr[rr]=null;for(;e===In;)In=nt[--rt],nt[rt]=null,Dt=nt[--rt],nt[rt]=null,Mt=nt[--rt],nt[rt]=null}var Je=null,Xe=null,ue=!1,ht=null;function dg(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ad(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Xe=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:Mt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Xe=null,!0):!1;default:return!1}}function _l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(ue){var t=Xe;if(t){var n=t;if(!Ad(e,t)){if(_l(e))throw Error(_(418));t=cn(n.nextSibling);var r=Je;t&&Ad(e,t)?dg(r,n):(e.flags=e.flags&-4097|2,ue=!1,Je=e)}}else{if(_l(e))throw Error(_(418));e.flags=e.flags&-4097|2,ue=!1,Je=e}}}function Fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function io(e){if(e!==Je)return!1;if(!ue)return Fd(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!El(e.type,e.memoizedProps)),t&&(t=Xe)){if(_l(e))throw fg(),Error(_(418));for(;t;)dg(e,t),t=cn(t.nextSibling)}if(Fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Je?cn(e.stateNode.nextSibling):null;return!0}function fg(){for(var e=Xe;e;)e=cn(e.nextSibling)}function wr(){Xe=Je=null,ue=!1}function ic(e){ht===null?ht=[e]:ht.push(e)}var Gw=qt.ReactCurrentBatchConfig;function ft(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ko=wn(null),Qo=null,ir=null,oc=null;function ac(){oc=ir=Qo=null}function sc(e){var t=Ko.current;se(Ko),e._currentValue=t}function Nl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hr(e,t){Qo=e,oc=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(oc!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(Qo===null)throw Error(_(308));ir=e,Qo.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var On=null;function lc(e){On===null?On=[e]:On.push(e)}function pg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bt(e,n)}return i=r.interleaved,i===null?(t.next=t,lc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bt(e,n)}function $o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ku(e,n)}}function Hd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yo(e,t,n,r){var i=e.updateQueue;Jt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;a=0,d=u=l=null,s=o;do{var f=s.lane,y=s.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(f=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){c=v.call(y,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(y,c,f):v,f==null)break e;c=he({},c,f);break e;case 2:Jt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else y={eventTime:y,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=y,l=c):d=d.next=y,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Dn|=a,e.lanes=a,e.memoizedState=c}}function Ud(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var gg=new ph.Component().refs;function zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ia={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=pn(e),o=At(r,i);o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(vt(t,e,i,r),$o(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=pn(e),o=At(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(vt(t,e,i,r),$o(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=pn(e),i=At(n,r);i.tag=2,t!=null&&(i.callback=t),t=dn(e,i,r),t!==null&&(vt(t,e,r,n),$o(t,e,r))}};function Bd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!xi(n,r)||!xi(i,o):!0}function mg(e,t,n){var r=!1,i=vn,o=t.contextType;return typeof o=="object"&&o!==null?o=at(o):(i=Ve(t)?zn:Ie.current,r=t.contextTypes,o=(r=r!=null)?yr(e,i):vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ia,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Wd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ia.enqueueReplaceState(t,t.state,null)}function Il(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=gg,uc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=at(o):(o=Ve(t)?zn:Ie.current,i.context=yr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(zl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ia.enqueueReplaceState(i,i.state,null),Yo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===gg&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qd(e){var t=e._init;return t(e._payload)}function vg(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=hn(g,h),g.index=0,g.sibling=null,g}function o(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,m,S){return h===null||h.tag!==6?(h=Rs(m,g.mode,S),h.return=g,h):(h=i(h,m),h.return=g,h)}function l(g,h,m,S){var b=m.type;return b===Yn?d(g,h,m.props.children,S,m.key):h!==null&&(h.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Xt&&qd(b)===h.type)?(S=i(h,m.props),S.ref=Vr(g,h,m),S.return=g,S):(S=Lo(m.type,m.key,m.props,null,g.mode,S),S.ref=Vr(g,h,m),S.return=g,S)}function u(g,h,m,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Ns(m,g.mode,S),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function d(g,h,m,S,b){return h===null||h.tag!==7?(h=Tn(m,g.mode,S,b),h.return=g,h):(h=i(h,m),h.return=g,h)}function c(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Rs(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ki:return m=Lo(h.type,h.key,h.props,null,g.mode,m),m.ref=Vr(g,null,h),m.return=g,m;case Qn:return h=Ns(h,g.mode,m),h.return=g,h;case Xt:var S=h._init;return c(g,S(h._payload),m)}if(Xr(h)||Hr(h))return h=Tn(h,g.mode,m,null),h.return=g,h;oo(g,h)}return null}function f(g,h,m,S){var b=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:s(g,h,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ki:return m.key===b?l(g,h,m,S):null;case Qn:return m.key===b?u(g,h,m,S):null;case Xt:return b=m._init,f(g,h,b(m._payload),S)}if(Xr(m)||Hr(m))return b!==null?null:d(g,h,m,S,null);oo(g,m)}return null}function y(g,h,m,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(m)||null,s(h,g,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ki:return g=g.get(S.key===null?m:S.key)||null,l(h,g,S,b);case Qn:return g=g.get(S.key===null?m:S.key)||null,u(h,g,S,b);case Xt:var $=S._init;return y(g,h,m,$(S._payload),b)}if(Xr(S)||Hr(S))return g=g.get(m)||null,d(h,g,S,b,null);oo(h,S)}return null}function v(g,h,m,S){for(var b=null,$=null,P=h,E=h=0,R=null;P!==null&&E<m.length;E++){P.index>E?(R=P,P=null):R=P.sibling;var N=f(g,P,m[E],S);if(N===null){P===null&&(P=R);break}e&&P&&N.alternate===null&&t(g,P),h=o(N,h,E),$===null?b=N:$.sibling=N,$=N,P=R}if(E===m.length)return n(g,P),ue&&kn(g,E),b;if(P===null){for(;E<m.length;E++)P=c(g,m[E],S),P!==null&&(h=o(P,h,E),$===null?b=P:$.sibling=P,$=P);return ue&&kn(g,E),b}for(P=r(g,P);E<m.length;E++)R=y(P,g,E,m[E],S),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?E:R.key),h=o(R,h,E),$===null?b=R:$.sibling=R,$=R);return e&&P.forEach(function(F){return t(g,F)}),ue&&kn(g,E),b}function w(g,h,m,S){var b=Hr(m);if(typeof b!="function")throw Error(_(150));if(m=b.call(m),m==null)throw Error(_(151));for(var $=b=null,P=h,E=h=0,R=null,N=m.next();P!==null&&!N.done;E++,N=m.next()){P.index>E?(R=P,P=null):R=P.sibling;var F=f(g,P,N.value,S);if(F===null){P===null&&(P=R);break}e&&P&&F.alternate===null&&t(g,P),h=o(F,h,E),$===null?b=F:$.sibling=F,$=F,P=R}if(N.done)return n(g,P),ue&&kn(g,E),b;if(P===null){for(;!N.done;E++,N=m.next())N=c(g,N.value,S),N!==null&&(h=o(N,h,E),$===null?b=N:$.sibling=N,$=N);return ue&&kn(g,E),b}for(P=r(g,P);!N.done;E++,N=m.next())N=y(P,g,E,N.value,S),N!==null&&(e&&N.alternate!==null&&P.delete(N.key===null?E:N.key),h=o(N,h,E),$===null?b=N:$.sibling=N,$=N);return e&&P.forEach(function(U){return t(g,U)}),ue&&kn(g,E),b}function C(g,h,m,S){if(typeof m=="object"&&m!==null&&m.type===Yn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ki:e:{for(var b=m.key,$=h;$!==null;){if($.key===b){if(b=m.type,b===Yn){if($.tag===7){n(g,$.sibling),h=i($,m.props.children),h.return=g,g=h;break e}}else if($.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Xt&&qd(b)===$.type){n(g,$.sibling),h=i($,m.props),h.ref=Vr(g,$,m),h.return=g,g=h;break e}n(g,$);break}else t(g,$);$=$.sibling}m.type===Yn?(h=Tn(m.props.children,g.mode,S,m.key),h.return=g,g=h):(S=Lo(m.type,m.key,m.props,null,g.mode,S),S.ref=Vr(g,h,m),S.return=g,g=S)}return a(g);case Qn:e:{for($=m.key;h!==null;){if(h.key===$)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Ns(m,g.mode,S),h.return=g,g=h}return a(g);case Xt:return $=m._init,C(g,h,$(m._payload),S)}if(Xr(m))return v(g,h,m,S);if(Hr(m))return w(g,h,m,S);oo(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,m),h.return=g,g=h):(n(g,h),h=Rs(m,g.mode,S),h.return=g,g=h),a(g)):n(g,h)}return C}var xr=vg(!0),yg=vg(!1),Ui={},Pt=wn(Ui),$i=wn(Ui),Ci=wn(Ui);function Pn(e){if(e===Ui)throw Error(_(174));return e}function cc(e,t){switch(ie(Ci,t),ie($i,e),ie(Pt,Ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}se(Pt),ie(Pt,t)}function Sr(){se(Pt),se($i),se(Ci)}function wg(e){Pn(Ci.current);var t=Pn(Pt.current),n=hl(t,e.type);t!==n&&(ie($i,e),ie(Pt,n))}function dc(e){$i.current===e&&(se(Pt),se($i))}var fe=wn(0);function Xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ps=[];function fc(){for(var e=0;e<Ps.length;e++)Ps[e]._workInProgressVersionPrimary=null;Ps.length=0}var Co=qt.ReactCurrentDispatcher,Es=qt.ReactCurrentBatchConfig,Mn=0,pe=null,xe=null,ke=null,Jo=!1,ai=!1,Oi=0,Kw=0;function _e(){throw Error(_(321))}function pc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function hc(e,t,n,r,i,o){if(Mn=o,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Co.current=e===null||e.memoizedState===null?Jw:Zw,e=n(r,i),ai){o=0;do{if(ai=!1,Oi=0,25<=o)throw Error(_(301));o+=1,ke=xe=null,t.updateQueue=null,Co.current=e0,e=n(r,i)}while(ai)}if(Co.current=Zo,t=xe!==null&&xe.next!==null,Mn=0,ke=xe=pe=null,Jo=!1,t)throw Error(_(300));return e}function gc(){var e=Oi!==0;return Oi=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?pe.memoizedState=ke=e:ke=ke.next=e,ke}function st(){if(xe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=ke===null?pe.memoizedState:ke.next;if(t!==null)ke=t,xe=e;else{if(e===null)throw Error(_(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},ke===null?pe.memoizedState=ke=e:ke=ke.next=e}return ke}function Pi(e,t){return typeof t=="function"?t(e):t}function js(e){var t=st(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=xe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var d=u.lane;if((Mn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=c,a=r):l=l.next=c,pe.lanes|=d,Dn|=d}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,wt(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,pe.lanes|=o,Dn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ls(e){var t=st(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);wt(o,t.memoizedState)||(We=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function xg(){}function Sg(e,t){var n=pe,r=st(),i=t(),o=!wt(r.memoizedState,i);if(o&&(r.memoizedState=i,We=!0),r=r.queue,mc($g.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Ei(9,kg.bind(null,n,r,i,t),void 0,null),Ce===null)throw Error(_(349));Mn&30||bg(n,t,i)}return i}function bg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kg(e,t,n,r){t.value=n,t.getSnapshot=r,Cg(t)&&Og(e)}function $g(e,t,n){return n(function(){Cg(t)&&Og(e)})}function Cg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Og(e){var t=Bt(e,1);t!==null&&vt(t,e,1,-1)}function Vd(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},t.queue=e,e=e.dispatch=Xw.bind(null,pe,e),[t.memoizedState,e]}function Ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pg(){return st().memoizedState}function Oo(e,t,n,r){var i=bt();pe.flags|=e,i.memoizedState=Ei(1|t,n,void 0,r===void 0?null:r)}function Ma(e,t,n,r){var i=st();r=r===void 0?null:r;var o=void 0;if(xe!==null){var a=xe.memoizedState;if(o=a.destroy,r!==null&&pc(r,a.deps)){i.memoizedState=Ei(t,n,o,r);return}}pe.flags|=e,i.memoizedState=Ei(1|t,n,o,r)}function Gd(e,t){return Oo(8390656,8,e,t)}function mc(e,t){return Ma(2048,8,e,t)}function Eg(e,t){return Ma(4,2,e,t)}function jg(e,t){return Ma(4,4,e,t)}function Lg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tg(e,t,n){return n=n!=null?n.concat([e]):null,Ma(4,4,Lg.bind(null,t,e),n)}function vc(){}function _g(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rg(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ng(e,t,n){return Mn&21?(wt(n,t)||(n=Mh(),pe.lanes|=n,Dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function Qw(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=Es.transition;Es.transition={};try{e(!1),t()}finally{ne=n,Es.transition=r}}function zg(){return st().memoizedState}function Yw(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ig(e))Mg(t,n);else if(n=pg(e,t,n,r),n!==null){var i=Ae();vt(n,e,r,i),Dg(n,t,r)}}function Xw(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ig(e))Mg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,wt(s,a)){var l=t.interleaved;l===null?(i.next=i,lc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=pg(e,t,i,r),n!==null&&(i=Ae(),vt(n,e,r,i),Dg(n,t,r))}}function Ig(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Mg(e,t){ai=Jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ku(e,n)}}var Zo={readContext:at,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},Jw={readContext:at,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Gd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4194308,4,Lg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oo(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yw.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:Vd,useDebugValue:vc,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=Vd(!1),t=e[0];return e=Qw.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,i=bt();if(ue){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Ce===null)throw Error(_(349));Mn&30||bg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Gd($g.bind(null,r,o,e),[e]),r.flags|=2048,Ei(9,kg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bt(),t=Ce.identifierPrefix;if(ue){var n=Dt,r=Mt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zw={readContext:at,useCallback:_g,useContext:at,useEffect:mc,useImperativeHandle:Tg,useInsertionEffect:Eg,useLayoutEffect:jg,useMemo:Rg,useReducer:js,useRef:Pg,useState:function(){return js(Pi)},useDebugValue:vc,useDeferredValue:function(e){var t=st();return Ng(t,xe.memoizedState,e)},useTransition:function(){var e=js(Pi)[0],t=st().memoizedState;return[e,t]},useMutableSource:xg,useSyncExternalStore:Sg,useId:zg,unstable_isNewReconciler:!1},e0={readContext:at,useCallback:_g,useContext:at,useEffect:mc,useImperativeHandle:Tg,useInsertionEffect:Eg,useLayoutEffect:jg,useMemo:Rg,useReducer:Ls,useRef:Pg,useState:function(){return Ls(Pi)},useDebugValue:vc,useDeferredValue:function(e){var t=st();return xe===null?t.memoizedState=e:Ng(t,xe.memoizedState,e)},useTransition:function(){var e=Ls(Pi)[0],t=st().memoizedState;return[e,t]},useMutableSource:xg,useSyncExternalStore:Sg,useId:zg,unstable_isNewReconciler:!1};function br(e,t){try{var n="",r=t;do n+=Ey(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ts(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ml(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var t0=typeof WeakMap=="function"?WeakMap:Map;function Ag(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ta||(ta=!0,Gl=r),Ml(e,t)},n}function Fg(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ml(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ml(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Kd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new t0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=g0.bind(null,e,t,n),t.then(e,e))}function Qd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var n0=qt.ReactCurrentOwner,We=!1;function De(e,t,n,r){t.child=e===null?yg(t,null,n,r):xr(t,e.child,n,r)}function Xd(e,t,n,r,i){n=n.render;var o=t.ref;return hr(t,i),r=hc(e,t,n,r,o,i),n=gc(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(ue&&n&&nc(t),t.flags|=1,De(e,t,r,i),t.child)}function Jd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Cc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Hg(e,t,o,r,i)):(e=Lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:xi,n(a,r)&&e.ref===t.ref)return Wt(e,t,i)}return t.flags|=1,e=hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Hg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(xi(o,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Wt(e,t,i)}return Dl(e,t,n,r,i)}function Ug(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(ar,Ye),Ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(ar,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ie(ar,Ye),Ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ie(ar,Ye),Ye|=r;return De(e,t,i,n),t.child}function Bg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Dl(e,t,n,r,i){var o=Ve(n)?zn:Ie.current;return o=yr(t,o),hr(t,i),n=hc(e,t,n,r,o,i),r=gc(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(ue&&r&&nc(t),t.flags|=1,De(e,t,n,i),t.child)}function Zd(e,t,n,r,i){if(Ve(n)){var o=!0;qo(t)}else o=!1;if(hr(t,i),t.stateNode===null)Po(e,t),mg(t,n,r),Il(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Ve(n)?zn:Ie.current,u=yr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Wd(t,a,r,u),Jt=!1;var f=t.memoizedState;a.state=f,Yo(t,r,a,i),l=t.memoizedState,s!==r||f!==l||qe.current||Jt?(typeof d=="function"&&(zl(t,n,d,r),l=t.memoizedState),(s=Jt||Bd(t,n,s,r,f,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,hg(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ft(t.type,s),a.props=u,c=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=at(l):(l=Ve(n)?zn:Ie.current,l=yr(t,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==c||f!==l)&&Wd(t,a,r,l),Jt=!1,f=t.memoizedState,a.state=f,Yo(t,r,a,i);var v=t.memoizedState;s!==c||f!==v||qe.current||Jt?(typeof y=="function"&&(zl(t,n,y,r),v=t.memoizedState),(u=Jt||Bd(t,n,u,r,f,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Al(e,t,n,r,o,i)}function Al(e,t,n,r,i,o){Bg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Dd(t,n,!1),Wt(e,t,o);r=t.stateNode,n0.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=xr(t,e.child,null,o),t.child=xr(t,null,s,o)):De(e,t,s,o),t.memoizedState=r.state,i&&Dd(t,n,!0),t.child}function Wg(e){var t=e.stateNode;t.pendingContext?Md(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Md(e,t.context,!1),cc(e,t.containerInfo)}function ef(e,t,n,r,i){return wr(),ic(i),t.flags|=256,De(e,t,n,r),t.child}var Fl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function qg(e,t,n){var r=t.pendingProps,i=fe.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(fe,i&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Fa(a,r,0,null),e=Tn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Hl(n),t.memoizedState=Fl,e):yc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return r0(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=hn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=hn(s,o):(o=Tn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Hl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Fl,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yc(e,t){return t=Fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,n,r){return r!==null&&ic(r),xr(t,e.child,null,n),e=yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function r0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ts(Error(_(422))),ao(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Fa({mode:"visible",children:r.children},i,0,null),o=Tn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&xr(t,e.child,null,a),t.child.memoizedState=Hl(a),t.memoizedState=Fl,o);if(!(t.mode&1))return ao(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(_(419)),r=Ts(o,r,void 0),ao(e,t,a,r)}if(s=(a&e.childLanes)!==0,We||s){if(r=Ce,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Bt(e,i),vt(r,e,i,-1))}return $c(),r=Ts(Error(_(421))),ao(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=m0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Xe=cn(i.nextSibling),Je=t,ue=!0,ht=null,e!==null&&(nt[rt++]=Mt,nt[rt++]=Dt,nt[rt++]=In,Mt=e.id,Dt=e.overflow,In=t),t=yc(t,r.children),t.flags|=4096,t)}function tf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nl(e.return,t,n)}function _s(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Vg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(De(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tf(e,n,t);else if(e.tag===19)tf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_s(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_s(t,!0,n,null,o);break;case"together":_s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function i0(e,t,n){switch(t.tag){case 3:Wg(t),wr();break;case 5:wg(t);break;case 1:Ve(t.type)&&qo(t);break;case 4:cc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(Ko,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?qg(e,t,n):(ie(fe,fe.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);ie(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ug(e,t,n)}return Wt(e,t,n)}var Gg,Ul,Kg,Qg;Gg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ul=function(){};Kg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pn(Pt.current);var o=null;switch(n){case"input":i=cl(e,i),r=cl(e,r),o=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),o=[];break;case"textarea":i=pl(e,i),r=pl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}gl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(pi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(pi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&oe("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Qg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function o0(e,t,n){var r=t.pendingProps;switch(rc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Ve(t.type)&&Wo(),Re(t),null;case 3:return r=t.stateNode,Sr(),se(qe),se(Ie),fc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Yl(ht),ht=null))),Ul(e,t),Re(t),null;case 5:dc(t);var i=Pn(Ci.current);if(n=t.type,e!==null&&t.stateNode!=null)Kg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Re(t),null}if(e=Pn(Pt.current),io(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$t]=t,r[ki]=o,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<Zr.length;i++)oe(Zr[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":cd(r,o),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},oe("invalid",r);break;case"textarea":fd(r,o),oe("invalid",r)}gl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ro(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ro(r.textContent,s,e),i=["children",""+s]):pi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&oe("scroll",r)}switch(n){case"input":Qi(r),dd(r,o,!0);break;case"textarea":Qi(r),pd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Bo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[$t]=t,e[ki]=r,Gg(e,t,!1,!1),t.stateNode=e;e:{switch(a=ml(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zr.length;i++)oe(Zr[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":cd(e,r),i=cl(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),oe("invalid",e);break;case"textarea":fd(e,r),i=pl(e,r),oe("invalid",e);break;default:i=r}gl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Ch(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&hi(e,l):typeof l=="number"&&hi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(pi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&oe("scroll",e):l!=null&&Uu(e,o,l,a))}switch(n){case"input":Qi(e),dd(e,r,!1);break;case"textarea":Qi(e),pd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Qg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Pn(Ci.current),Pn(Pt.current),io(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(o=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:ro(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ro(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return Re(t),null;case 13:if(se(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Xe!==null&&t.mode&1&&!(t.flags&128))fg(),wr(),t.flags|=98560,o=!1;else if(o=io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[$t]=t}else wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),o=!1}else ht!==null&&(Yl(ht),ht=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?Se===0&&(Se=3):$c())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return Sr(),Ul(e,t),e===null&&Si(t.stateNode.containerInfo),Re(t),null;case 10:return sc(t.type._context),Re(t),null;case 17:return Ve(t.type)&&Wo(),Re(t),null;case 19:if(se(fe),o=t.memoizedState,o===null)return Re(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Gr(o,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Xo(e),a!==null){for(t.flags|=128,Gr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(fe,fe.current&1|2),t.child}e=e.sibling}o.tail!==null&&me()>kr&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Xo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ue)return Re(t),null}else 2*me()-o.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=me(),t.sibling=null,n=fe.current,ie(fe,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return kc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function a0(e,t){switch(rc(t),t.tag){case 1:return Ve(t.type)&&Wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),se(qe),se(Ie),fc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return dc(t),null;case 13:if(se(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(fe),null;case 4:return Sr(),null;case 10:return sc(t.type._context),null;case 22:case 23:return kc(),null;case 24:return null;default:return null}}var so=!1,Ne=!1,s0=typeof WeakSet=="function"?WeakSet:Set,D=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Bl(e,t,n){try{n()}catch(r){ge(e,t,r)}}var nf=!1;function l0(e,t){if(Ol=Fo,e=Zh(),tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,d=0,c=e,f=null;t:for(;;){for(var y;c!==n||i!==0&&c.nodeType!==3||(s=a+i),c!==o||r!==0&&c.nodeType!==3||(l=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(y=c.firstChild)!==null;)f=c,c=y;for(;;){if(c===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++d===r&&(l=a),(y=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=y}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pl={focusedElem:e,selectionRange:n},Fo=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,C=v.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:ft(t.type,w),C);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(S){ge(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return v=nf,nf=!1,v}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Bl(t,n,o)}i=i.next}while(i!==r)}}function Da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yg(e){var t=e.alternate;t!==null&&(e.alternate=null,Yg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[ki],delete t[Ll],delete t[Ww],delete t[qw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xg(e){return e.tag===5||e.tag===3||e.tag===4}function rf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}var je=null,pt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Jg(e,t,n),n=n.sibling}function Jg(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(La,n)}catch{}switch(n.tag){case 5:Ne||or(n,t);case 6:var r=je,i=pt;je=null,Qt(e,t,n),je=r,pt=i,je!==null&&(pt?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(pt?(e=je,n=n.stateNode,e.nodeType===8?Cs(e.parentNode,n):e.nodeType===1&&Cs(e,n),yi(e)):Cs(je,n.stateNode));break;case 4:r=je,i=pt,je=n.stateNode.containerInfo,pt=!0,Qt(e,t,n),je=r,pt=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Bl(n,t,a),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!Ne&&(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ge(n,t,s)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,Qt(e,t,n),Ne=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function of(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new s0),t.forEach(function(r){var i=v0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:je=s.stateNode,pt=!1;break e;case 3:je=s.stateNode.containerInfo,pt=!0;break e;case 4:je=s.stateNode.containerInfo,pt=!0;break e}s=s.return}if(je===null)throw Error(_(160));Jg(o,a,i),je=null,pt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zg(t,e),t=t.sibling}function Zg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),St(e),r&4){try{si(3,e,e.return),Da(3,e)}catch(w){ge(e,e.return,w)}try{si(5,e,e.return)}catch(w){ge(e,e.return,w)}}break;case 1:dt(t,e),St(e),r&512&&n!==null&&or(n,n.return);break;case 5:if(dt(t,e),St(e),r&512&&n!==null&&or(n,n.return),e.flags&32){var i=e.stateNode;try{hi(i,"")}catch(w){ge(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&xh(i,o),ml(s,a);var u=ml(s,o);for(a=0;a<l.length;a+=2){var d=l[a],c=l[a+1];d==="style"?Ch(i,c):d==="dangerouslySetInnerHTML"?kh(i,c):d==="children"?hi(i,c):Uu(i,d,c,u)}switch(s){case"input":dl(i,o);break;case"textarea":Sh(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?cr(i,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?cr(i,!!o.multiple,o.defaultValue,!0):cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ki]=o}catch(w){ge(e,e.return,w)}}break;case 6:if(dt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ge(e,e.return,w)}}break;case 3:if(dt(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yi(t.containerInfo)}catch(w){ge(e,e.return,w)}break;case 4:dt(t,e),St(e);break;case 13:dt(t,e),St(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Sc=me())),r&4&&of(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(u=Ne)||d,dt(t,e),Ne=u):dt(t,e),St(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(c=D=d;D!==null;){switch(f=D,y=f.child,f.tag){case 0:case 11:case 14:case 15:si(4,f,f.return);break;case 1:or(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ge(r,n,w)}}break;case 5:or(f,f.return);break;case 22:if(f.memoizedState!==null){sf(c);continue}}y!==null?(y.return=f,D=y):sf(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=$h("display",a))}catch(w){ge(e,e.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){ge(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:dt(t,e),St(e),r&4&&of(e);break;case 21:break;default:dt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xg(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hi(i,""),r.flags&=-33);var o=rf(e);Vl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=rf(e);ql(e,s,a);break;default:throw Error(_(161))}}catch(l){ge(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function u0(e,t,n){D=e,em(e)}function em(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||so;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ne;s=so;var u=Ne;if(so=a,(Ne=l)&&!u)for(D=i;D!==null;)a=D,l=a.child,a.tag===22&&a.memoizedState!==null?lf(i):l!==null?(l.return=a,D=l):lf(i);for(;o!==null;)D=o,em(o),o=o.sibling;D=i,so=s,Ne=u}af(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,D=o):af(e)}}function af(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||Da(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ud(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ud(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&yi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ne||t.flags&512&&Wl(t)}catch(f){ge(t,t.return,f)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function sf(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function lf(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Da(4,t)}catch(l){ge(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ge(t,i,l)}}var o=t.return;try{Wl(t)}catch(l){ge(t,o,l)}break;case 5:var a=t.return;try{Wl(t)}catch(l){ge(t,a,l)}}}catch(l){ge(t,t.return,l)}if(t===e){D=null;break}var s=t.sibling;if(s!==null){s.return=t.return,D=s;break}D=t.return}}var c0=Math.ceil,ea=qt.ReactCurrentDispatcher,wc=qt.ReactCurrentOwner,ot=qt.ReactCurrentBatchConfig,ee=0,Ce=null,we=null,Le=0,Ye=0,ar=wn(0),Se=0,ji=null,Dn=0,Aa=0,xc=0,li=null,Be=null,Sc=0,kr=1/0,Nt=null,ta=!1,Gl=null,fn=null,lo=!1,on=null,na=0,ui=0,Kl=null,Eo=-1,jo=0;function Ae(){return ee&6?me():Eo!==-1?Eo:Eo=me()}function pn(e){return e.mode&1?ee&2&&Le!==0?Le&-Le:Gw.transition!==null?(jo===0&&(jo=Mh()),jo):(e=ne,e!==0||(e=window.event,e=e===void 0?16:Wh(e.type)),e):1}function vt(e,t,n,r){if(50<ui)throw ui=0,Kl=null,Error(_(185));Ai(e,n,r),(!(ee&2)||e!==Ce)&&(e===Ce&&(!(ee&2)&&(Aa|=n),Se===4&&tn(e,Le)),Ge(e,r),n===1&&ee===0&&!(t.mode&1)&&(kr=me()+500,za&&xn()))}function Ge(e,t){var n=e.callbackNode;Gy(e,t);var r=Ao(e,e===Ce?Le:0);if(r===0)n!==null&&md(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&md(n),t===1)e.tag===0?Vw(uf.bind(null,e)):ug(uf.bind(null,e)),Uw(function(){!(ee&6)&&xn()}),n=null;else{switch(Dh(r)){case 1:n=Gu;break;case 4:n=zh;break;case 16:n=Do;break;case 536870912:n=Ih;break;default:n=Do}n=lm(n,tm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tm(e,t){if(Eo=-1,jo=0,ee&6)throw Error(_(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=Ao(e,e===Ce?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ra(e,r);else{t=r;var i=ee;ee|=2;var o=rm();(Ce!==e||Le!==t)&&(Nt=null,kr=me()+500,Ln(e,t));do try{p0();break}catch(s){nm(e,s)}while(1);ac(),ea.current=o,ee=i,we!==null?t=0:(Ce=null,Le=0,t=Se)}if(t!==0){if(t===2&&(i=Sl(e),i!==0&&(r=i,t=Ql(e,i))),t===1)throw n=ji,Ln(e,0),tn(e,r),Ge(e,me()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!d0(i)&&(t=ra(e,r),t===2&&(o=Sl(e),o!==0&&(r=o,t=Ql(e,o))),t===1))throw n=ji,Ln(e,0),tn(e,r),Ge(e,me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:$n(e,Be,Nt);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=Sc+500-me(),10<t)){if(Ao(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jl($n.bind(null,e,Be,Nt),t);break}$n(e,Be,Nt);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-mt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c0(r/1960))-r,10<r){e.timeoutHandle=jl($n.bind(null,e,Be,Nt),r);break}$n(e,Be,Nt);break;case 5:$n(e,Be,Nt);break;default:throw Error(_(329))}}}return Ge(e,me()),e.callbackNode===n?tm.bind(null,e):null}function Ql(e,t){var n=li;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=ra(e,t),e!==2&&(t=Be,Be=n,t!==null&&Yl(t)),e}function Yl(e){Be===null?Be=e:Be.push.apply(Be,e)}function d0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~xc,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function uf(e){if(ee&6)throw Error(_(327));gr();var t=Ao(e,0);if(!(t&1))return Ge(e,me()),null;var n=ra(e,t);if(e.tag!==0&&n===2){var r=Sl(e);r!==0&&(t=r,n=Ql(e,r))}if(n===1)throw n=ji,Ln(e,0),tn(e,t),Ge(e,me()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,Be,Nt),Ge(e,me()),null}function bc(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(kr=me()+500,za&&xn())}}function An(e){on!==null&&on.tag===0&&!(ee&6)&&gr();var t=ee;ee|=1;var n=ot.transition,r=ne;try{if(ot.transition=null,ne=1,e)return e()}finally{ne=r,ot.transition=n,ee=t,!(ee&6)&&xn()}}function kc(){Ye=ar.current,se(ar)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hw(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(rc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wo();break;case 3:Sr(),se(qe),se(Ie),fc();break;case 5:dc(r);break;case 4:Sr();break;case 13:se(fe);break;case 19:se(fe);break;case 10:sc(r.type._context);break;case 22:case 23:kc()}n=n.return}if(Ce=e,we=e=hn(e.current,null),Le=Ye=t,Se=0,ji=null,xc=Aa=Dn=0,Be=li=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}On=null}return e}function nm(e,t){do{var n=we;try{if(ac(),Co.current=Zo,Jo){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jo=!1}if(Mn=0,ke=xe=pe=null,ai=!1,Oi=0,wc.current=null,n===null||n.return===null){Se=1,ji=t,we=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Le,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Qd(a);if(y!==null){y.flags&=-257,Yd(y,a,s,o,t),y.mode&1&&Kd(o,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Kd(o,u,t),$c();break e}l=Error(_(426))}}else if(ue&&s.mode&1){var C=Qd(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Yd(C,a,s,o,t),ic(br(l,s));break e}}o=l=br(l,s),Se!==4&&(Se=2),li===null?li=[o]:li.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Ag(o,l,t);Hd(o,g);break e;case 1:s=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(fn===null||!fn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Fg(o,s,t);Hd(o,S);break e}}o=o.return}while(o!==null)}om(n)}catch(b){t=b,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function rm(){var e=ea.current;return ea.current=Zo,e===null?Zo:e}function $c(){(Se===0||Se===3||Se===2)&&(Se=4),Ce===null||!(Dn&268435455)&&!(Aa&268435455)||tn(Ce,Le)}function ra(e,t){var n=ee;ee|=2;var r=rm();(Ce!==e||Le!==t)&&(Nt=null,Ln(e,t));do try{f0();break}catch(i){nm(e,i)}while(1);if(ac(),ee=n,ea.current=r,we!==null)throw Error(_(261));return Ce=null,Le=0,Se}function f0(){for(;we!==null;)im(we)}function p0(){for(;we!==null&&!Dy();)im(we)}function im(e){var t=sm(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?om(e):we=t,wc.current=null}function om(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=a0(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,we=null;return}}else if(n=o0(n,t,Ye),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Se===0&&(Se=5)}function $n(e,t,n){var r=ne,i=ot.transition;try{ot.transition=null,ne=1,h0(e,t,n,r)}finally{ot.transition=i,ne=r}return null}function h0(e,t,n,r){do gr();while(on!==null);if(ee&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ky(e,o),e===Ce&&(we=Ce=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,lm(Do,function(){return gr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ot.transition,ot.transition=null;var a=ne;ne=1;var s=ee;ee|=4,wc.current=null,l0(e,n),Zg(n,e),Nw(Pl),Fo=!!Ol,Pl=Ol=null,e.current=n,u0(n),Ay(),ee=s,ne=a,ot.transition=o}else e.current=n;if(lo&&(lo=!1,on=e,na=i),o=e.pendingLanes,o===0&&(fn=null),Uy(n.stateNode),Ge(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ta)throw ta=!1,e=Gl,Gl=null,e;return na&1&&e.tag!==0&&gr(),o=e.pendingLanes,o&1?e===Kl?ui++:(ui=0,Kl=e):ui=0,xn(),null}function gr(){if(on!==null){var e=Dh(na),t=ot.transition,n=ne;try{if(ot.transition=null,ne=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,na=0,ee&6)throw Error(_(331));var i=ee;for(ee|=4,D=e.current;D!==null;){var o=D,a=o.child;if(D.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:si(8,d,o)}var c=d.child;if(c!==null)c.return=d,D=c;else for(;D!==null;){d=D;var f=d.sibling,y=d.return;if(Yg(d),d===u){D=null;break}if(f!==null){f.return=y,D=f;break}D=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}D=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,D=a;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:si(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,D=g;break e}D=o.return}}var h=e.current;for(D=h;D!==null;){a=D;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,D=m;else e:for(a=h;D!==null;){if(s=D,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Da(9,s)}}catch(b){ge(s,s.return,b)}if(s===a){D=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,D=S;break e}D=s.return}}if(ee=i,xn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(La,e)}catch{}r=!0}return r}finally{ne=n,ot.transition=t}}return!1}function cf(e,t,n){t=br(n,t),t=Ag(e,t,1),e=dn(e,t,1),t=Ae(),e!==null&&(Ai(e,1,t),Ge(e,t))}function ge(e,t,n){if(e.tag===3)cf(e,e,n);else for(;t!==null;){if(t.tag===3){cf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=br(n,e),e=Fg(t,e,1),t=dn(t,e,1),e=Ae(),t!==null&&(Ai(t,1,e),Ge(t,e));break}}t=t.return}}function g0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Le&n)===n&&(Se===4||Se===3&&(Le&130023424)===Le&&500>me()-Sc?Ln(e,0):xc|=n),Ge(e,t)}function am(e,t){t===0&&(e.mode&1?(t=Ji,Ji<<=1,!(Ji&130023424)&&(Ji=4194304)):t=1);var n=Ae();e=Bt(e,t),e!==null&&(Ai(e,t,n),Ge(e,n))}function m0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),am(e,n)}function v0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),am(e,n)}var sm;sm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,i0(e,t,n);We=!!(e.flags&131072)}else We=!1,ue&&t.flags&1048576&&cg(t,Go,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Po(e,t),e=t.pendingProps;var i=yr(t,Ie.current);hr(t,n),i=hc(null,t,r,e,i,n);var o=gc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(o=!0,qo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uc(t),i.updater=Ia,t.stateNode=i,i._reactInternals=t,Il(t,r,e,n),t=Al(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&nc(t),De(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Po(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=w0(r),e=ft(r,e),i){case 0:t=Dl(null,t,r,e,n);break e;case 1:t=Zd(null,t,r,e,n);break e;case 11:t=Xd(null,t,r,e,n);break e;case 14:t=Jd(null,t,r,ft(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Dl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Zd(e,t,r,i,n);case 3:e:{if(Wg(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,hg(e,t),Yo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=br(Error(_(423)),t),t=ef(e,t,r,n,i);break e}else if(r!==i){i=br(Error(_(424)),t),t=ef(e,t,r,n,i);break e}else for(Xe=cn(t.stateNode.containerInfo.firstChild),Je=t,ue=!0,ht=null,n=yg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),r===i){t=Wt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return wg(t),e===null&&Rl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,El(r,i)?a=null:o!==null&&El(r,o)&&(t.flags|=32),Bg(e,t),De(e,t,a,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return qg(e,t,n);case 4:return cc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xr(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Xd(e,t,r,i,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ie(Ko,r._currentValue),r._currentValue=a,o!==null)if(wt(o.value,a)){if(o.children===i.children&&!qe.current){t=Wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=At(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Nl(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(_(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Nl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}De(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hr(t,n),i=at(i),r=r(i),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,i=ft(r,t.pendingProps),i=ft(r.type,i),Jd(e,t,r,i,n);case 15:return Hg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Po(e,t),t.tag=1,Ve(r)?(e=!0,qo(t)):e=!1,hr(t,n),mg(t,r,i),Il(t,r,i,n),Al(null,t,r,!0,e,n);case 19:return Vg(e,t,n);case 22:return Ug(e,t,n)}throw Error(_(156,t.tag))};function lm(e,t){return Nh(e,t)}function y0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new y0(e,t,n,r)}function Cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function w0(e){if(typeof e=="function")return Cc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wu)return 11;if(e===qu)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Cc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Yn:return Tn(n.children,i,o,t);case Bu:a=8,i|=8;break;case al:return e=it(12,n,t,i|2),e.elementType=al,e.lanes=o,e;case sl:return e=it(13,n,t,i),e.elementType=sl,e.lanes=o,e;case ll:return e=it(19,n,t,i),e.elementType=ll,e.lanes=o,e;case vh:return Fa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gh:a=10;break e;case mh:a=9;break e;case Wu:a=11;break e;case qu:a=14;break e;case Xt:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=it(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Tn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function Fa(e,t,n,r){return e=it(22,e,r,t),e.elementType=vh,e.lanes=n,e.stateNode={isHidden:!1},e}function Rs(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Ns(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function x0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hs(0),this.expirationTimes=hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Oc(e,t,n,r,i,o,a,s,l){return e=new x0(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=it(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uc(o),e}function S0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function um(e){if(!e)return vn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ve(n))return lg(e,n,t)}return t}function cm(e,t,n,r,i,o,a,s,l){return e=Oc(n,r,!0,e,i,o,a,s,l),e.context=um(null),n=e.current,r=Ae(),i=pn(n),o=At(r,i),o.callback=t??null,dn(n,o,i),e.current.lanes=i,Ai(e,i,r),Ge(e,r),e}function Ha(e,t,n,r){var i=t.current,o=Ae(),a=pn(i);return n=um(n),t.context===null?t.context=n:t.pendingContext=n,t=At(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(i,t,a),e!==null&&(vt(e,i,a,o),$o(e,i,a)),a}function ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function df(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pc(e,t){df(e,t),(e=e.alternate)&&df(e,t)}function b0(){return null}var dm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ec(e){this._internalRoot=e}Ua.prototype.render=Ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ha(e,t,null,null)};Ua.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){Ha(null,e,null,null)}),t[Ut]=null}};function Ua(e){this._internalRoot=e}Ua.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Bh(e)}};function jc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ff(){}function k0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ia(a);o.call(u)}}var a=cm(t,r,e,0,null,!1,!1,"",ff);return e._reactRootContainer=a,e[Ut]=a.current,Si(e.nodeType===8?e.parentNode:e),An(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ia(l);s.call(u)}}var l=Oc(e,0,!1,null,null,!1,!1,"",ff);return e._reactRootContainer=l,e[Ut]=l.current,Si(e.nodeType===8?e.parentNode:e),An(function(){Ha(t,l,n,r)}),l}function Wa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ia(a);s.call(l)}}Ha(t,a,e,i)}else a=k0(n,t,e,i,r);return ia(a)}Ah=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(Ku(t,n|1),Ge(t,me()),!(ee&6)&&(kr=me()+500,xn()))}break;case 13:An(function(){var r=Bt(e,1);if(r!==null){var i=Ae();vt(r,e,1,i)}}),Pc(e,1)}};Qu=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=Ae();vt(t,e,134217728,n)}Pc(e,134217728)}};Fh=function(e){if(e.tag===13){var t=pn(e),n=Bt(e,t);if(n!==null){var r=Ae();vt(n,e,t,r)}Pc(e,t)}};Hh=function(){return ne};Uh=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};yl=function(e,t,n){switch(t){case"input":if(dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Na(r);if(!i)throw Error(_(90));wh(r),dl(r,i)}}}break;case"textarea":Sh(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};Eh=bc;jh=An;var $0={usingClientEntryPoint:!1,Events:[Hi,er,Na,Oh,Ph,bc]},Kr={findFiberByHostInstance:Cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},C0={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_h(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||b0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{La=uo.inject(C0),Ot=uo}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$0;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jc(t))throw Error(_(200));return S0(e,t,null,n)};et.createRoot=function(e,t){if(!jc(e))throw Error(_(299));var n=!1,r="",i=dm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Oc(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,Si(e.nodeType===8?e.parentNode:e),new Ec(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=_h(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return An(e)};et.hydrate=function(e,t,n){if(!Ba(t))throw Error(_(200));return Wa(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!jc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=dm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=cm(t,null,e,1,n??null,i,!1,o,a),e[Ut]=t.current,Si(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ua(t)};et.render=function(e,t,n){if(!Ba(t))throw Error(_(200));return Wa(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!Ba(e))throw Error(_(40));return e._reactRootContainer?(An(function(){Wa(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};et.unstable_batchedUpdates=bc;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ba(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Wa(e,t,n,!1,r)};et.version="18.2.0-next-9e3b772b8-20220608";function fm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fm)}catch(e){console.error(e)}}fm(),ch.exports=et;var O0=ch.exports,pf=O0;il.createRoot=pf.createRoot,il.hydrateRoot=pf.hydrateRoot;var ze=function(){return ze=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ze.apply(this,arguments)};function $r(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ae="-ms-",ci="-moz-",te="-webkit-",pm="comm",qa="rule",Lc="decl",P0="@import",hm="@keyframes",E0="@layer",j0=Math.abs,Tc=String.fromCharCode,Xl=Object.assign;function L0(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function gm(e){return e.trim()}function zt(e,t){return(e=t.exec(e))?e[0]:e}function G(e,t,n){return e.replace(t,n)}function To(e,t){return e.indexOf(t)}function $e(e,t){return e.charCodeAt(t)|0}function Cr(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function mm(e){return e.length}function ei(e,t){return t.push(e),e}function T0(e,t){return e.map(t).join("")}function hf(e,t){return e.filter(function(n){return!zt(n,t)})}var Va=1,Or=1,vm=0,lt=0,ye=0,Ir="";function Ga(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Va,column:Or,length:a,return:"",siblings:s}}function Yt(e,t){return Xl(Ga("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qn(e){for(;e.root;)e=Yt(e.root,{children:[e]});ei(e,e.siblings)}function _0(){return ye}function R0(){return ye=lt>0?$e(Ir,--lt):0,Or--,ye===10&&(Or=1,Va--),ye}function yt(){return ye=lt<vm?$e(Ir,lt++):0,Or++,ye===10&&(Or=1,Va++),ye}function _n(){return $e(Ir,lt)}function _o(){return lt}function Ka(e,t){return Cr(Ir,e,t)}function Jl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N0(e){return Va=Or=1,vm=kt(Ir=e),lt=0,[]}function z0(e){return Ir="",e}function zs(e){return gm(Ka(lt-1,Zl(e===91?e+2:e===40?e+1:e)))}function I0(e){for(;(ye=_n())&&ye<33;)yt();return Jl(e)>2||Jl(ye)>3?"":" "}function M0(e,t){for(;--t&&yt()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return Ka(e,_o()+(t<6&&_n()==32&&yt()==32))}function Zl(e){for(;yt();)switch(ye){case e:return lt;case 34:case 39:e!==34&&e!==39&&Zl(ye);break;case 40:e===41&&Zl(e);break;case 92:yt();break}return lt}function D0(e,t){for(;yt()&&e+ye!==47+10;)if(e+ye===42+42&&_n()===47)break;return"/*"+Ka(t,lt-1)+"*"+Tc(e===47?e:yt())}function A0(e){for(;!Jl(_n());)yt();return Ka(e,lt)}function F0(e){return z0(Ro("",null,null,null,[""],e=N0(e),0,[0],e))}function Ro(e,t,n,r,i,o,a,s,l){for(var u=0,d=0,c=a,f=0,y=0,v=0,w=1,C=1,g=1,h=0,m="",S=i,b=o,$=r,P=m;C;)switch(v=h,h=yt()){case 40:if(v!=108&&$e(P,c-1)==58){To(P+=G(zs(h),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:P+=zs(h);break;case 9:case 10:case 13:case 32:P+=I0(v);break;case 92:P+=M0(_o()-1,7);continue;case 47:switch(_n()){case 42:case 47:ei(H0(D0(yt(),_o()),t,n,l),l);break;default:P+="/"}break;case 123*w:s[u++]=kt(P)*g;case 125*w:case 59:case 0:switch(h){case 0:case 125:C=0;case 59+d:g==-1&&(P=G(P,/\f/g,"")),y>0&&kt(P)-c&&ei(y>32?mf(P+";",r,n,c-1,l):mf(G(P," ","")+";",r,n,c-2,l),l);break;case 59:P+=";";default:if(ei($=gf(P,t,n,u,d,i,s,m,S=[],b=[],c,o),o),h===123)if(d===0)Ro(P,t,$,$,S,o,c,s,b);else switch(f===99&&$e(P,3)===110?100:f){case 100:case 108:case 109:case 115:Ro(e,$,$,r&&ei(gf(e,$,$,0,0,i,s,m,i,S=[],c,b),b),i,b,c,s,r?S:b);break;default:Ro(P,$,$,$,[""],b,0,s,b)}}u=d=y=0,w=g=1,m=P="",c=a;break;case 58:c=1+kt(P),y=v;default:if(w<1){if(h==123)--w;else if(h==125&&w++==0&&R0()==125)continue}switch(P+=Tc(h),h*w){case 38:g=d>0?1:(P+="\f",-1);break;case 44:s[u++]=(kt(P)-1)*g,g=1;break;case 64:_n()===45&&(P+=zs(yt())),f=_n(),d=c=kt(m=P+=A0(_o())),h++;break;case 45:v===45&&kt(P)==2&&(w=0)}}return o}function gf(e,t,n,r,i,o,a,s,l,u,d,c){for(var f=i-1,y=i===0?o:[""],v=mm(y),w=0,C=0,g=0;w<r;++w)for(var h=0,m=Cr(e,f+1,f=j0(C=a[w])),S=e;h<v;++h)(S=gm(C>0?y[h]+" "+m:G(m,/&\f/g,y[h])))&&(l[g++]=S);return Ga(e,t,n,i===0?qa:s,l,u,d,c)}function H0(e,t,n,r){return Ga(e,t,n,pm,Tc(_0()),Cr(e,2,-2),0,r)}function mf(e,t,n,r,i){return Ga(e,t,n,Lc,Cr(e,0,r),Cr(e,r+1,-1),r,i)}function ym(e,t,n){switch(L0(e,t)){case 5103:return te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+e+e;case 4789:return ci+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return te+e+ci+e+ae+e+e;case 5936:switch($e(e,t+11)){case 114:return te+e+ae+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return te+e+ae+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return te+e+ae+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return te+e+ae+e+e;case 6165:return te+e+ae+"flex-"+e+e;case 5187:return te+e+G(e,/(\w+).+(:[^]+)/,te+"box-$1$2"+ae+"flex-$1$2")+e;case 5443:return te+e+ae+"flex-item-"+G(e,/flex-|-self/g,"")+(zt(e,/flex-|baseline/)?"":ae+"grid-row-"+G(e,/flex-|-self/g,""))+e;case 4675:return te+e+ae+"flex-line-pack"+G(e,/align-content|flex-|-self/g,"")+e;case 5548:return te+e+ae+G(e,"shrink","negative")+e;case 5292:return te+e+ae+G(e,"basis","preferred-size")+e;case 6060:return te+"box-"+G(e,"-grow","")+te+e+ae+G(e,"grow","positive")+e;case 4554:return te+G(e,/([^-])(transform)/g,"$1"+te+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+e+e;case 4200:if(!zt(e,/flex-|baseline/))return ae+"grid-column-align"+Cr(e,t)+e;break;case 2592:case 3360:return ae+G(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,zt(r.props,/grid-\w+-end/)})?~To(e+(n=n[t].value),"span")?e:ae+G(e,"-start","")+e+ae+"grid-row-span:"+(~To(n,"span")?zt(n,/\d+/):+zt(n,/\d+/)-+zt(e,/\d+/))+";":ae+G(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return zt(r.props,/grid-\w+-start/)})?e:ae+G(G(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+ci+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~To(e,"stretch")?ym(G(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return G(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return ae+i+":"+o+u+(a?ae+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if($e(e,t+6)===121)return G(e,":",":"+te)+e;break;case 6444:switch($e(e,$e(e,14)===45?18:11)){case 120:return G(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+te+($e(e,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+ae+"$2box$3")+e;case 100:return G(e,":",":"+ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(e,"scroll-","scroll-snap-")+e}return e}function oa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function U0(e,t,n,r){switch(e.type){case E0:if(e.children.length)break;case P0:case Lc:return e.return=e.return||e.value;case pm:return"";case hm:return e.return=e.value+"{"+oa(e.children,r)+"}";case qa:if(!kt(e.value=e.props.join(",")))return""}return kt(n=oa(e.children,r))?e.return=e.value+"{"+n+"}":""}function B0(e){var t=mm(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function W0(e){return function(t){t.root||(t=t.return)&&e(t)}}function q0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Lc:e.return=ym(e.value,e.length,n);return;case hm:return oa([Yt(e,{value:G(e.value,"@","@"+te)})],r);case qa:if(e.length)return T0(n=e.props,function(i){switch(zt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qn(Yt(e,{props:[G(i,/:(read-\w+)/,":"+ci+"$1")]})),qn(Yt(e,{props:[i]})),Xl(e,{props:hf(n,r)});break;case"::placeholder":qn(Yt(e,{props:[G(i,/:(plac\w+)/,":"+te+"input-$1")]})),qn(Yt(e,{props:[G(i,/:(plac\w+)/,":"+ci+"$1")]})),qn(Yt(e,{props:[G(i,/:(plac\w+)/,ae+"input-$1")]})),qn(Yt(e,{props:[i]})),Xl(e,{props:hf(n,r)});break}return""})}}var V0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",_c=typeof window<"u"&&"HTMLElement"in window,G0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),K0={},Rc=Object.freeze([]),Er=Object.freeze({});function wm(e,t,n){return n===void 0&&(n=Er),e.theme!==n.theme&&e.theme||t||n.theme}var xm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Q0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Y0=/(^-|-$)/g;function vf(e){return e.replace(Q0,"-").replace(Y0,"")}var X0=/(a)(d)/gi,yf=function(e){return String.fromCharCode(e+(e>25?39:97))};function eu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=yf(t%52)+n;return(yf(t%52)+n).replace(X0,"$1-$2")}var Is,sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Sm=function(e){return sr(5381,e)};function Nc(e){return eu(Sm(e)>>>0)}function J0(e){return e.displayName||e.name||"Component"}function Ms(e){return typeof e=="string"&&!0}var bm=typeof Symbol=="function"&&Symbol.for,km=bm?Symbol.for("react.memo"):60115,Z0=bm?Symbol.for("react.forward_ref"):60112,e1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$m={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},n1=((Is={})[Z0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Is[km]=$m,Is);function wf(e){return("type"in(t=e)&&t.type.$$typeof)===km?$m:"$$typeof"in e?n1[e.$$typeof]:e1;var t}var r1=Object.defineProperty,i1=Object.getOwnPropertyNames,xf=Object.getOwnPropertySymbols,o1=Object.getOwnPropertyDescriptor,a1=Object.getPrototypeOf,Sf=Object.prototype;function Cm(e,t,n){if(typeof t!="string"){if(Sf){var r=a1(t);r&&r!==Sf&&Cm(e,r,n)}var i=i1(t);xf&&(i=i.concat(xf(t)));for(var o=wf(e),a=wf(t),s=0;s<i.length;++s){var l=i[s];if(!(l in t1||n&&n[l]||a&&l in a||o&&l in o)){var u=o1(t,l);try{r1(e,l,u)}catch{}}}}return e}function jr(e){return typeof e=="function"}function zc(e){return typeof e=="object"&&"styledComponentId"in e}function En(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function aa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Li(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function tu(e,t,n){if(n===void 0&&(n=!1),!n&&!Li(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=tu(e[r],t[r]);else if(Li(t))for(var r in t)e[r]=tu(e[r],t[r]);return e}function Ic(e,t){Object.defineProperty(e,"toString",{value:t})}function Bi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var s1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Bi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),No=new Map,sa=new Map,Ds=1,co=function(e){if(No.has(e))return No.get(e);for(;sa.has(Ds);)Ds++;var t=Ds++;return No.set(e,t),sa.set(t,e),t},l1=function(e,t){No.set(e,t),sa.set(t,e)},u1="style[".concat(Pr,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),c1=new RegExp("^".concat(Pr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),d1=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},f1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(c1);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(l1(d,u),d1(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function p1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Om=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){return Array.from(s.querySelectorAll("style[".concat(Pr,"]"))).at(-1)}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Pr,"active"),r.setAttribute("data-styled-version","6.0.1");var a=p1();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},h1=function(){function e(t){this.element=Om(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Bi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),g1=function(){function e(t){this.element=Om(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),m1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),bf=_c,v1={isServer:!_c,useCSSOMInjection:!G0},la=function(){function e(t,n,r){t===void 0&&(t=Er),n===void 0&&(n={});var i=this;this.options=ze(ze({},v1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&_c&&bf&&(bf=!1,function(o){for(var a=document.querySelectorAll(u1),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Pr)!=="active"&&(f1(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ic(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(c){var f=function(g){return sa.get(g)}(c);if(f===void 0)return"continue";var y=o.names.get(f),v=a.getGroup(c);if(y===void 0||v.length===0)return"continue";var w="".concat(Pr,".g").concat(c,'[id="').concat(f,'"]'),C="";y!==void 0&&y.forEach(function(g){g.length>0&&(C+="".concat(g,","))}),l+="".concat(v).concat(w,'{content:"').concat(C,'"}').concat(`/*!sc*/
`)},d=0;d<s;d++)u(d);return l}(i)})}return e.registerId=function(t){return co(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ze(ze({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new m1(i):r?new h1(i):new g1(i)}(this.options),new s1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(co(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(co(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(co(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),y1=/&/g,w1=/^\s*\/\/.*$/gm;function Pm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Pm(n.children,t)),n})}function x1(e){var t,n,r,i=e===void 0?Er:e,o=i.options,a=o===void 0?Er:o,s=i.plugins,l=s===void 0?Rc:s,u=function(f,y,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},d=l.slice();d.push(function(f){f.type===qa&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(y1,n).replace(r,u))}),a.prefix&&d.push(q0),d.push(U0);var c=function(f,y,v,w){y===void 0&&(y=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var C=f.replace(w1,""),g=F0(v||y?"".concat(v," ").concat(y," { ").concat(C," }"):C);a.namespace&&(g=Pm(g,a.namespace));var h=[];return oa(g,B0(d.concat(W0(function(m){return h.push(m)})))),h};return c.hash=l.length?l.reduce(function(f,y){return y.name||Bi(15),sr(f,y.name)},5381).toString():"",c}var S1=new la,nu=x1(),Em=gt.createContext({shouldForwardProp:void 0,styleSheet:S1,stylis:nu});Em.Consumer;gt.createContext(void 0);function ru(){return j.useContext(Em)}var jm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=nu);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ic(this,function(){throw Bi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=nu),this.name+t.hash},e}(),b1=function(e){return e>="A"&&e<="Z"};function kf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;b1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Lm=function(e){return e==null||e===!1||e===""},Tm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Lm(o)&&(Array.isArray(o)&&o.isCss||jr(o)?r.push("".concat(kf(i),":"),o,";"):Li(o)?r.push.apply(r,$r($r(["".concat(i," {")],Tm(o),!1),["}"],!1)):r.push("".concat(kf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in V0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function gn(e,t,n,r){if(Lm(e))return[];if(zc(e))return[".".concat(e.styledComponentId)];if(jr(e)){if(!jr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return gn(i,t,n,r)}var o;return e instanceof jm?n?(e.inject(n,r),[e.getName(r)]):[e]:Li(e)?Tm(e):Array.isArray(e)?e.flatMap(function(a){return gn(a,t,n,r)}):[e.toString()]}function _m(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jr(n)&&!zc(n))return!1}return!0}var k1=Sm("6.0.1"),$1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_m(t),this.componentId=n,this.baseHash=sr(k1,n),this.baseStyle=r,la.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=En(i,this.staticRulesId);else{var o=aa(gn(this.rules,t,n,r)),a=eu(sr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=En(i,a),this.staticRulesId=a}else{for(var l=sr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var f=aa(gn(c,t,n,r));l=sr(l,f),u+=f}}if(u){var y=eu(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=En(i,y)}}return i},e}(),Mc=gt.createContext(void 0);Mc.Consumer;var As={};function C1(e,t,n){var r=zc(e),i=e,o=!Ms(e),a=t.attrs,s=a===void 0?Rc:a,l=t.componentId,u=l===void 0?function(S,b){var $=typeof S!="string"?"sc":vf(S);As[$]=(As[$]||0)+1;var P="".concat($,"-").concat(Nc("6.0.1"+$+As[$]));return b?"".concat(b,"-").concat(P):P}(t.displayName,t.parentComponentId):l,d=t.displayName,c=d===void 0?function(S){return Ms(S)?"styled.".concat(S):"Styled(".concat(J0(S),")")}(e):d,f=t.displayName&&t.componentId?"".concat(vf(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;v=function(S,b){return w(S,b)&&C(S,b)}}else v=w}var g=new $1(n,f,r?i.componentStyle:void 0);g.isStatic&&s.length;function h(S,b){return function($,P,E,R){var N=$.attrs,F=$.componentStyle,U=$.defaultProps,A=$.foldedComponentIds,O=$.styledComponentId,L=$.target,B=gt.useContext(Mc),q=ru(),T=$.shouldForwardProp||q.shouldForwardProp,z=function(Gt,Qe,_t){for(var Fr,bn=ze(ze({},Qe),{className:void 0,theme:_t}),ls=0;ls<Gt.length;ls+=1){var Vi=jr(Fr=Gt[ls])?Fr(bn):Fr;for(var Kt in Vi)bn[Kt]=Kt==="className"?En(bn[Kt],Vi[Kt]):Kt==="style"?ze(ze({},bn[Kt]),Vi[Kt]):Vi[Kt]}return Qe.className&&(bn.className=En(bn.className,Qe.className)),bn}(N,P,wm(P,B,U)||Er),H=z.as||L,X={};for(var K in z)z[K]===void 0||K[0]==="$"||K==="as"||K==="theme"||(K==="forwardedAs"?X.as=z.forwardedAs:T&&!T(K,H)||(X[K]=z[K]));var Tt=function(Gt,Qe){var _t=ru(),Fr=Gt.generateAndInjectStyles(Qe,_t.styleSheet,_t.stylis);return Fr}(F,z),Pe=En(A,O);return Tt&&(Pe+=" "+Tt),z.className&&(Pe+=" "+z.className),X[Ms(H)&&!xm.has(H)?"class":"className"]=Pe,X.ref=E,j.createElement(H,X)}(m,S,b)}h.displayName=c;var m=gt.forwardRef(h);return m.attrs=y,m.componentStyle=g,m.displayName=c,m.shouldForwardProp=v,m.foldedComponentIds=r?En(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(b){for(var $=[],P=1;P<arguments.length;P++)$[P-1]=arguments[P];for(var E=0,R=$;E<R.length;E++)tu(b,R[E],!0);return b}({},i.defaultProps,S):S}}),Ic(m,function(){return".".concat(m.styledComponentId)}),o&&Cm(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function $f(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Cf=function(e){return Object.assign(e,{isCss:!0})};function ve(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jr(e)||Li(e)){var r=e;return Cf(gn($f(Rc,$r([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?gn(i):Cf(gn($f(i,t)))}function iu(e,t,n){if(n===void 0&&(n=Er),!t)throw Bi(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,ve.apply(void 0,$r([i],o,!1)))};return r.attrs=function(i){return iu(e,t,ze(ze({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return iu(e,t,ze(ze({},n),i))},r}var Rm=function(e){return iu(C1,e)},x=Rm;xm.forEach(function(e){x[e]=Rm(e)});var O1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=_m(t),la.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(aa(gn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&la.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function P1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ve.apply(void 0,$r([e],t,!1)),i="sc-global-".concat(Nc(JSON.stringify(r))),o=new O1(r,i),a=function(l){var u=ru(),d=gt.useContext(Mc),c=gt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(c,l,u.styleSheet,d,u.stylis),(gt.useInsertionEffect||gt.useLayoutEffect)(function(){if(!u.styleSheet.server)return s(c,l,u.styleSheet,d,u.stylis),function(){return o.removeStyles(c,u.styleSheet)}},[c,l,u.styleSheet,d,u.stylis]),null};function s(l,u,d,c,f){if(o.isStatic)o.renderStyles(l,K0,d,f);else{var y=ze(ze({},u),{theme:wm(u,c,a.defaultProps)});o.renderStyles(l,y,d,f)}}return gt.memo(a)}function Nm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=aa(ve.apply(void 0,$r([e],t,!1))),i=Nc(r);return new jm(i,r)}function E1(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const Of={};function ou(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Of[t[0]]||(typeof t[0]=="string"&&(Of[t[0]]=new Date),E1(...t))}const zm=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function Pf(e,t,n){e.loadNamespaces(t,zm(e,n))}function Ef(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,zm(e,r))}function j1(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],i=t.options?t.options.fallbackLng:!1,o=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const u=t.services.backendConnector.state[`${s}|${l}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!i||a(o,e)))}function L1(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(ou("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(i,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,e))return!1}}):j1(e,t,n)}const T1=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,_1={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},R1=e=>_1[e],N1=e=>e.replace(T1,R1);let au={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:N1};function z1(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};au={...au,...e}}function I1(){return au}let Im;function M1(e){Im=e}function D1(){return Im}const A1={type:"3rdParty",init(e){z1(e.options.react),M1(e)}},Mm=j.createContext();class F1{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const H1=(e,t)=>{const n=j.useRef();return j.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function ut(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:i}=j.useContext(Mm)||{},o=n||r||D1();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new F1),!o){ou("You will need to pass in an i18next instance by using initReactI18next");const m=(b,$)=>typeof $=="string"?$:$&&typeof $=="object"&&typeof $.defaultValue=="string"?$.defaultValue:Array.isArray(b)?b[b.length-1]:b,S=[m,{},!1];return S.t=m,S.i18n={},S.ready=!1,S}o.options.react&&o.options.react.wait!==void 0&&ou("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...I1(),...o.options.react,...t},{useSuspense:s,keyPrefix:l}=a;let u=e||i||o.options&&o.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(u);const d=(o.isInitialized||o.initializedStoreOnce)&&u.every(m=>L1(m,o,a));function c(){return o.getFixedT(t.lng||null,a.nsMode==="fallback"?u:u[0],l)}const[f,y]=j.useState(c);let v=u.join();t.lng&&(v=`${t.lng}${v}`);const w=H1(v),C=j.useRef(!0);j.useEffect(()=>{const{bindI18n:m,bindI18nStore:S}=a;C.current=!0,!d&&!s&&(t.lng?Ef(o,t.lng,u,()=>{C.current&&y(c)}):Pf(o,u,()=>{C.current&&y(c)})),d&&w&&w!==v&&C.current&&y(c);function b(){C.current&&y(c)}return m&&o&&o.on(m,b),S&&o&&o.store.on(S,b),()=>{C.current=!1,m&&o&&m.split(" ").forEach($=>o.off($,b)),S&&o&&S.split(" ").forEach($=>o.store.off($,b))}},[o,v]);const g=j.useRef(!0);j.useEffect(()=>{C.current&&!g.current&&y(c),g.current=!1},[o,l]);const h=[f,o,d];if(h.t=f,h.i18n=o,h.ready=d,d||!d&&!s)return h;throw new Promise(m=>{t.lng?Ef(o,t.lng,u,()=>m()):Pf(o,u,()=>m())})}function U1(e){let{i18n:t,defaultNS:n,children:r}=e;const i=j.useMemo(()=>({i18n:t,defaultNS:n}),[t,n]);return j.createElement(Mm.Provider,{value:i},r)}/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ti(){return Ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ti.apply(this,arguments)}var an;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(an||(an={}));const jf="popstate";function B1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return su("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Dm(i)}return q1(t,n,null,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function W1(){return Math.random().toString(36).substr(2,8)}function Lf(e,t){return{usr:e.state,key:e.key,idx:t}}function su(e,t,n,r){return n===void 0&&(n=null),Ti({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Mr(t):t,{state:n,key:t&&t.key||r||W1()})}function Dm(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Mr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function q1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=an.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(Ti({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function c(){s=an.Pop;let C=d(),g=C==null?null:C-u;u=C,l&&l({action:s,location:w.location,delta:g})}function f(C,g){s=an.Push;let h=su(w.location,C,g);n&&n(h,C),u=d()+1;let m=Lf(h,u),S=w.createHref(h);try{a.pushState(m,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(S)}o&&l&&l({action:s,location:w.location,delta:1})}function y(C,g){s=an.Replace;let h=su(w.location,C,g);n&&n(h,C),u=d();let m=Lf(h,u),S=w.createHref(h);a.replaceState(m,"",S),o&&l&&l({action:s,location:w.location,delta:0})}function v(C){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof C=="string"?C:Dm(C);return be(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let w={get action(){return s},get location(){return e(i,a)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(jf,c),l=C,()=>{i.removeEventListener(jf,c),l=null}},createHref(C){return t(i,C)},createURL:v,encodeLocation(C){let g=v(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:y,go(C){return a.go(C)}};return w}var Tf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Tf||(Tf={}));function V1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Mr(t):t,i=Hm(r.pathname||"/",n);if(i==null)return null;let o=Am(e);G1(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=nx(o[s],ox(i));return a}function Am(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Rn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(be(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Am(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:ex(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of Fm(o.path))i(o,a,l)}),t}function Fm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Fm(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function G1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:tx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const K1=/^:\w+$/,Q1=3,Y1=2,X1=1,J1=10,Z1=-2,_f=e=>e==="*";function ex(e,t){let n=e.split("/"),r=n.length;return n.some(_f)&&(r+=Z1),t&&(r+=Y1),n.filter(i=>!_f(i)).reduce((i,o)=>i+(K1.test(o)?Q1:o===""?X1:J1),r)}function tx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function nx(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=rx({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=s.route;o.push({params:r,pathname:Rn([i,d.pathname]),pathnameBase:dx(Rn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Rn([i,d.pathnameBase]))}return o}function rx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ix(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let f=s[c]||"";a=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[d]=ax(s[c]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function ix(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Dc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ox(e){try{return decodeURI(e)}catch(t){return Dc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ax(e,t){try{return decodeURIComponent(e)}catch(n){return Dc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Hm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function sx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Mr(e):e;return{pathname:n?n.startsWith("/")?n:lx(n,t):t,search:fx(r),hash:px(i)}}function lx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Fs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ux(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cx(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Mr(e):(i=Ti({},e),be(!i.pathname||!i.pathname.includes("?"),Fs("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),Fs("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),Fs("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let c=t.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}s=c>=0?t[c]:"/"}let l=sx(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Rn=e=>e.join("/").replace(/\/\/+/g,"/"),dx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,px=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Um=["post","put","patch","delete"];new Set(Um);const gx=["get",...Um];new Set(gx);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ua.apply(this,arguments)}const Ac=j.createContext(null),mx=j.createContext(null),Qa=j.createContext(null),Ya=j.createContext(null),Bn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Bm=j.createContext(null);function Xa(){return j.useContext(Ya)!=null}function Ja(){return Xa()||be(!1),j.useContext(Ya).location}function Wm(e){j.useContext(Qa).static||j.useLayoutEffect(e)}function Dr(){let{isDataRoute:e}=j.useContext(Bn);return e?Lx():vx()}function vx(){Xa()||be(!1);let e=j.useContext(Ac),{basename:t,navigator:n}=j.useContext(Qa),{matches:r}=j.useContext(Bn),{pathname:i}=Ja(),o=JSON.stringify(ux(r).map(l=>l.pathnameBase)),a=j.useRef(!1);return Wm(()=>{a.current=!0}),j.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){n.go(l);return}let d=cx(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Rn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}function yx(){let{matches:e}=j.useContext(Bn),t=e[e.length-1];return t?t.params:{}}function wx(e,t){return xx(e,t)}function xx(e,t,n){Xa()||be(!1);let{navigator:r}=j.useContext(Qa),{matches:i}=j.useContext(Bn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=Ja(),u;if(t){var d;let w=typeof t=="string"?Mr(t):t;s==="/"||(d=w.pathname)!=null&&d.startsWith(s)||be(!1),u=w}else u=l;let c=u.pathname||"/",f=s==="/"?c:c.slice(s.length)||"/",y=V1(e,{pathname:f}),v=Cx(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Rn([s,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:Rn([s,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&v?j.createElement(Ya.Provider,{value:{location:ua({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:an.Pop}},v):v}function Sx(){let e=jx(),t=hx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,o)}const bx=j.createElement(Sx,null);class kx extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?j.createElement(Bn.Provider,{value:this.props.routeContext},j.createElement(Bm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $x(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(Ac);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Bn.Provider,{value:t},r)}function Cx(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=o.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||be(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,u)=>{let d=l.route.id?a==null?void 0:a[l.route.id]:null,c=null;n&&(c=l.route.errorElement||bx);let f=t.concat(o.slice(0,u+1)),y=()=>{let v;return d?v=c:l.route.Component?v=j.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=s,j.createElement($x,{match:l,routeContext:{outlet:s,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?j.createElement(kx,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var lu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(lu||(lu={}));var _i;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(_i||(_i={}));function Ox(e){let t=j.useContext(Ac);return t||be(!1),t}function Px(e){let t=j.useContext(mx);return t||be(!1),t}function Ex(e){let t=j.useContext(Bn);return t||be(!1),t}function qm(e){let t=Ex(),n=t.matches[t.matches.length-1];return n.route.id||be(!1),n.route.id}function jx(){var e;let t=j.useContext(Bm),n=Px(_i.UseRouteError),r=qm(_i.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Lx(){let{router:e}=Ox(lu.UseNavigateStable),t=qm(_i.UseNavigateStable),n=j.useRef(!1);return Wm(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ua({fromRouteId:t},o)))},[e,t])}function Kn(e){be(!1)}function Tx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=an.Pop,navigator:o,static:a=!1}=e;Xa()&&be(!1);let s=t.replace(/^\/*/,"/"),l=j.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Mr(r));let{pathname:u="/",search:d="",hash:c="",state:f=null,key:y="default"}=r,v=j.useMemo(()=>{let w=Hm(u,s);return w==null?null:{location:{pathname:w,search:d,hash:c,state:f,key:y},navigationType:i}},[s,u,d,c,f,y,i]);return v==null?null:j.createElement(Qa.Provider,{value:l},j.createElement(Ya.Provider,{children:n,value:v}))}function _x(e){let{children:t,location:n}=e;return wx(uu(t),n)}var Rf;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Rf||(Rf={}));new Promise(()=>{});function uu(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,uu(r.props.children,o));return}r.type!==Kn&&be(!1),!r.props.index||!r.props.children||be(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=uu(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Rx="startTransition",Nf=my[Rx];function Nx(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=B1({window:i,v5Compat:!0}));let a=o.current,[s,l]=j.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=j.useCallback(c=>{u&&Nf?Nf(()=>l(c)):l(c)},[l,u]);return j.useLayoutEffect(()=>a.listen(d),[a,d]),j.createElement(Tx,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}var zf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(zf||(zf={}));var If;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(If||(If={}));const k="1000px",Z=ve`
  margin: 0;
  padding: 0;
`,ca=ve`
  background-repeat: no-repeat;
  background-size: contain;
`,re={blueColor:"#366eff",lightBlackColor:"#16202C",blackColor:"#000000",lightGrayColor:"#1A202C",darkGrayColor:"#0b132a",whiteColor:"#ffffff",transparentWhiteColor:"#ffffff80",grayColor:"#fcfcfc",redColor:"#ff0000",lightGreenColor:"#3cc1b3",greenColor:"#20F1C0",darkGreenColor:"#00BAA4",darkColor:"#1C2938",deepColor:"#141E29",deepGrayColor:"#17212D",scrollColor:"#b8b8b8",headerColor:"#16212D",ratesFeesColor:"#fafbfc",navigateLinkColor:"#b7b5b1",notFoundColor:"#d5dee9",smallNewsColor:"#8c8c8c",largeNewsColor:"#3d3d3d",lineNewsColor:"#edf0f4"};x.button`
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
`;const Fc=ve`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
`,Vt=ve`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`,ce=ve`
  font-family: Gramatika-Regular, sans-serif;
`,Wi=ve`
  font-family: Gramatika-Bold, sans-serif;
`,Ar=ve`
  font-family: Plus_Jakarta_Sans-Regular, sans-serif;
`,Et=ve`
  font-family: Gramatika-Medium, sans-serif;
`,zx=Nm`
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
`,Ix=Nm`
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

  @media (max-width: ${k}) {
    flex-direction: column;
    align-items: center;
  }
`;const Vm=ve`
  position: absolute;
  background-repeat: no-repeat;
  z-index: 2;
  background-size: cover;

  @media (max-width: ${k}) {
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
`;const Hc=ve`
  ${Z};
  color: ${re.whiteColor};
  ${ce};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.08);
  }
`,Uc=ve`
  ${Z};
  color: ${re.blackColor};
  font-weight: 400;
  font-size: calc(20vw / 14.4);
  font-style: normal;
  line-height: 2.2;

  @media (max-width: ${k}) {
    font-size: calc(20vw / 5.09);
  }
`,jt=()=>{const[e,t]=j.useState(null);return j.useEffect(()=>{const n=()=>{const r=window.innerWidth;t(r<=parseInt(k))};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e},Gm="https://twitter.com/ThothPay",Km="https://www.facebook.com/profile.php?id=100095060907471",Mx="mailto:service@thothpay.com",Qm="https://example.com/telegram",Dx="https://thothpay.com/merchant",Ax="https://example.com/signup",Fx="https://thothpay.com/merchant",Hx="https://docs.thothpay.com",Ux="https://thothpay.com/swagger/index.html",Bx="https://docs.thothpay.com",Wx="https://thothpay.com/swagger/index.html",qx="https://docs.thothpay.com",Vx="https://example.com/get-support",Gx="https://example.com/contact-team",Kx="https://example.com/how-it-works",Qx="https://example.com/featured",Yx="https://example.com/partnership",Xx="https://example.com/business-relation",Jx="https://example.com/events",Zx="https://example.com/blog",eS="https://example.com/podcast",tS="https://example.com/invite-friend",nS="https://example.com/privacy-policy",rS="https://example.com/terms-condition",iS="https://docs.thothpay.com",oS="https://docs.thothpay.com",aS=x.a`
  ${Z};
  ${ce};
  color: ${e=>e.color};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
`,ct=({href:e,target:t,rel:n,children:r,...i})=>p.jsx(aS,{href:e,target:t,rel:n,...i,children:r});let fo;const sS=new Uint8Array(16);function lS(){if(!fo&&(fo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!fo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return fo(sS)}const Ee=[];for(let e=0;e<256;++e)Ee.push((e+256).toString(16).slice(1));function uS(e,t=0){return(Ee[e[t+0]]+Ee[e[t+1]]+Ee[e[t+2]]+Ee[e[t+3]]+"-"+Ee[e[t+4]]+Ee[e[t+5]]+"-"+Ee[e[t+6]]+Ee[e[t+7]]+"-"+Ee[e[t+8]]+Ee[e[t+9]]+"-"+Ee[e[t+10]]+Ee[e[t+11]]+Ee[e[t+12]]+Ee[e[t+13]]+Ee[e[t+14]]+Ee[e[t+15]]).toLowerCase()}const cS=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Mf={randomUUID:cS};function dS(e,t,n){if(Mf.randomUUID&&!t&&!e)return Mf.randomUUID();e=e||{};const r=e.random||(e.rng||lS)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return uS(r)}const V=()=>dS(),po="/thoth",ho={active:`${po}/images/news-page/rating/star-active.svg`,inactive:`${po}/images/news-page/rating/star-inactive.svg`,time:`${po}/images/news-page/time.svg`,views:`${po}/images/news-page/views.svg`},fS={rating:{active:{src:ho.active,alt:"active star"},inactive:{src:ho.inactive,alt:"inactive star"}},time:{text:"min",src:ho.time,alt:"time icon"},views:{src:ho.views,alt:"views icon"}},Ym=V(),pS=V(),Xm=V(),Jm=V(),hS=V(),Zm=V(),ev=V(),tv=V(),I="/thoth",gS=[{code:"en",name:"English"},{code:"ru",name:"Русский"}],Fn={playIconWhite:"images/common/play-icon-white.svg",playIconGreen:"images/common/play-icon-green.svg"},mS={background:`${I}/images/header/check-mark.svg`},lr={backgroundL:`${I}/images/main-page/main-screen/screen-L.svg`,backgroundS:`${I}/images/main-page/main-screen/screen-S.svg`,coinsL:`${I}/images/main-page/main-screen/coins-L.svg`,coinsS:`${I}/images/main-page/main-screen/coins-S.svg`,circle:`${I}/images/main-page/main-screen/circle.svg`,wrapper:`${I}/images/main-page/main-screen/wrapper.svg`},Lr={backgroundL:`${I}/images/main-page/how-it-works/background-L.svg`,backgroundS:`${I}/images/main-page/how-it-works/background-S.svg`,leftLineL:`${I}/images/main-page/how-it-works/left-line-L.svg`,leftLineS:`${I}/images/main-page/how-it-works/left-line-S.svg`,rightLineL:`${I}/images/main-page/how-it-works/right-line-L.svg`,rightLineS:`${I}/images/main-page/how-it-works/right-line-S.svg`},Df={backgroundL:`${I}/images/main-page/how-it-works/advantages/background-L.svg`,backgroundS:`${I}/images/main-page/how-it-works/advantages/background-S.svg`},Af={backgroundL:`${I}/images/main-page/products-and-service/description-L.svg`,backgroundS:`${I}/images/main-page/products-and-service/description-S.svg`},Ff={backgroundL:`${I}/images/main-page/products-and-service/mobile-wallet/background-L.svg`,backgroundS:`${I}/images/main-page/products-and-service/mobile-wallet/background-S.svg`},vS={background:`${I}/images/main-page/products-and-service/available-currencies/available-currencies.svg`},Hf={backgroundL:`${I}/images/main-page/products-and-service/slide/background-L.svg`,backgroundS:`${I}/images/main-page/products-and-service/slide/background-S.svg`},cu={backgroundL:`${I}/images/main-page/use-cases-of-our-products/background-L.svg`,backgroundS:`${I}/images/main-page/use-cases-of-our-products/background-S.svg`,slide:`${I}/images/main-page/use-cases-of-our-products/slide.svg`},yS={background:`${I}/images/main-page/use-cases-of-our-products/mobile-slider/background-S.svg`},Uf={backgroundL:"images/main-page/use-cases-of-our-products/news/background-L.svg",backgroundS:"images/main-page/use-cases-of-our-products/news/background-S.svg"},go={existingClient:{src:`${I}/images/main-page/use-cases-of-our-products/have-a-question/existing-client.svg`,alt:"existing client"},newClient:{src:`${I}/images/main-page/use-cases-of-our-products/have-a-question/new-client.svg`,alt:"new client"}},xt=(e,t)=>{switch(e){case"Sections":return[{id:Ym,title:t("sections.one")},{id:pS,title:t("sections.two")},{id:Xm,title:t("sections.three")},{id:Jm,title:t("sections.four")}];case"Header":return{loginAndRegister:{signUp:t("header.loginAndRegister.signUp"),signIn:t("header.loginAndRegister.signIn")},closeIcon:{src:`${I}/${Fn.playIconWhite}`,alt:t("header.closeIcon")},language:{src:`${I}/images/header/language-icon-white.svg`,srcGray:`${I}/images/header/language-icon-gray.svg`,alt:t("header.language.alt"),text:t("header.language.text")},menu:{src:`${I}/images/header/burger-icon.svg`,alt:t("header.menu.alt"),text:t("header.menu.text")}};case"MainScreen":return{span:t("mainScreen.span"),title:t("mainScreen.title"),text:t("mainScreen.text"),button:t("mainScreen.button")};case"HowItWorks":return{text:t("sectionHowItWorks.text"),stepOne:{image:{src:`${I}/images/main-page/how-it-works/send-invoice.svg`,alt:t("sectionHowItWorks.stepOne.alt")},subtitle:t("sectionHowItWorks.stepOne.subtitle"),text:t("sectionHowItWorks.stepOne.text")},stepTwo:{image:{src:`${I}/images/main-page/how-it-works/payment.svg`,alt:t("sectionHowItWorks.stepTwo.alt")},subtitle:t("sectionHowItWorks.stepTwo.subtitle"),text:t("sectionHowItWorks.stepTwo.text")},stepThree:{image:{src:`${I}/images/main-page/how-it-works/broadcast.svg`,alt:t("sectionHowItWorks.stepThree.alt")},subtitle:t("sectionHowItWorks.stepThree.subtitle"),text:t("sectionHowItWorks.stepThree.text")},advantages:[{id:V(),subtitle:t("sectionHowItWorks.advantages.advantage1.subtitle"),text:t("sectionHowItWorks.advantages.advantage1.text"),image:`${I}/images/main-page/how-it-works/advantages/first-icon.svg`,alt:t("sectionHowItWorks.advantages.advantage1.alt")},{id:V(),subtitle:t("sectionHowItWorks.advantages.advantage2.subtitle"),text:t("sectionHowItWorks.advantages.advantage2.text"),image:`${I}/images/main-page/how-it-works/advantages/second-icon.svg`,alt:t("sectionHowItWorks.advantages.advantage2.alt")},{id:V(),subtitle:t("sectionHowItWorks.advantages.advantage3.subtitle"),text:t("sectionHowItWorks.advantages.advantage3.text"),image:`${I}/images/main-page/how-it-works/advantages/third-icon.svg`,alt:t("sectionHowItWorks.advantages.advantage3.alt")},{id:V(),subtitle:t("sectionHowItWorks.advantages.advantage4.subtitle"),text:t("sectionHowItWorks.advantages.advantage4.text"),image:`${I}/images/main-page/how-it-works/advantages/fourth-icon.svg`,alt:t("sectionHowItWorks.advantages.advantage4.alt")}]};case"Photo":return{photos:[{id:V(),src:`${I}/images/test/test-photo.jpg`,alt:t("photos.one")},{id:V(),src:`${I}/images/test/test-photo.jpg`,alt:t("photos.two")},{id:V(),src:`${I}/images/test/test-photo.jpg`,alt:t("photos.three")}],photoSlideArrows:{left:{src:`${I}/images/main-page/photo/photo-slider/arrow-left.svg`,alt:t("photos.arrowLeft")},right:{src:`${I}/images/main-page/photo/photo-slider/arrow-right.svg`,alt:t("photos.arrowRight")}}};case"ProductAndService":return{text:"Product Description THOTH",slides:[{id:hS,subtitle:"Merchants Solution",textContent:"The solution for businesses to accept crypto payments in any coins and automatically exchange it all into desired stable or currency.",image:{src:`${I}/images/main-page/products-and-service/slide/slide-one.svg`,alt:"image one"}},{id:Zm,subtitle:"Enterprise Blockchain Wallets",textContent:"We deploy infrastructure to provide coins self-custody for enterprise needs.",link:{value:"docs.thothpay.com",href:Hx},image:{src:`${I}/images/main-page/products-and-service/slide/slide-two.svg`,alt:"image two"}},{id:ev,subtitle:"Wallet App",textContent:"Download Android or iOS application to instantly get access to your account.",image:{src:`${I}/images/main-page/products-and-service/slide/slide-three.svg`,alt:"image three"}},{id:tv,subtitle:"API",textContent:"Automate acceptance in your web store, CRM or application with our feature full API.",link:{value:"Read more",href:Ux},image:{src:`${I}/images/main-page/products-and-service/slide/slide-four.svg`,alt:"image four"}}],mobileWallet:{title:"Mobile Wallet",text:"A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",links:[{id:V(),src:`${I}/images/main-page/products-and-service/mobile-wallet/google-play.svg`,alt:"google play link",href:Bx},{id:V(),src:`${I}/images/main-page/products-and-service/mobile-wallet/app-store.svg`,alt:"apple store link",href:Wx}]},availableCurrencies:{title:"Available Currencies",text:"A vast range of major coins, stablecoins and liquid tokens is available.",subtitle:"Coins",coins:[{id:V(),src:`${I}/images/main-page/products-and-service/available-currencies/bitcoin.svg`,alt:"bitcoin icon"},{id:V(),src:`${I}/images/main-page/products-and-service/available-currencies/bitcoin-lightning.svg`,alt:"bitcoin lightning icon"},{id:V(),src:`${I}/images/main-page/products-and-service/available-currencies/bitcoin-liquid.svg`,alt:"bitcoin liquid icon"},{id:V(),src:`${I}/images/main-page/products-and-service/available-currencies/binance-coin.svg`,alt:"binance coin icon"},{id:V(),src:`${I}/images/main-page/products-and-service/available-currencies/tron.svg`,alt:"tron icon"},{id:V(),src:`${I}/images/main-page/products-and-service/available-currencies/polygon.svg`,alt:"polygon icon"},{id:V(),src:`${I}/images/main-page/products-and-service/available-currencies/stellar.svg`,alt:"stellar icon"},{id:V(),src:`${I}/images/main-page/products-and-service/available-currencies/EURMTL.svg`,alt:"EURMTL icon"},{id:V(),src:`${I}/images/main-page/products-and-service/available-currencies/USDT-ERC20.svg`,alt:"USDT ERC20 icon"},{id:V(),src:`${I}/images/main-page/products-and-service/available-currencies/USDT-TRC20.svg`,alt:"USDT TRC20 icon"},{id:V(),src:`${I}/images/main-page/products-and-service/available-currencies/USDT-PLG20.svg`,alt:"USDT PLG20 icon"},{id:V(),src:`${I}/images/main-page/products-and-service/available-currencies/USDT-LIQUID.svg`,alt:"USDT LIQUID icon"},{id:V(),src:`${I}/images/main-page/products-and-service/available-currencies/BUSD-BEP20.svg`,alt:"BUSD BEP20 icon"}]},videoSlider:{title:"Video",text:"Product Description THOTH",video:[{id:V(),title:"Video title 1",content:"https://www.youtube.com/watch?v=SjX1lRtJdAg"},{id:V(),title:"Video title 2",content:"https://www.youtube.com/watch?v=-1DbYJH2h98"},{id:V(),title:"Video title 3",content:"https://www.youtube.com/watch?v=UpEkHC2k_0I"},{id:V(),title:"Video title 4",content:"https://www.youtube.com/watch?v=-1DbYJH2h98"},{id:V(),title:"Video title 4",content:"https://www.youtube.com/watch?v=-1DbYJH2h98"}]}};case"UseCasesOfOurProducts":return{text:"Product Description THOTH",subtitle:"Merchants Solution",slides:[{id:V(),image:{src:`${I}/images/main-page/use-cases-of-our-products/merchantsSolutionOne.svg`,alt:"icon one"},title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."},{id:V(),image:{src:`${I}/images/main-page/use-cases-of-our-products/merchantsSolutionTwo.svg`,alt:"icon two"},title:"E-commerce",text:"The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments."},{id:V(),image:{src:`${I}/images/main-page/use-cases-of-our-products/merchantsSolutionThree.svg`,alt:"icon three"},title:"Marketplaces",text:"There are many platforms used by businesses to sell their products or services. Offering crypto payments to customers is now the advantage."},{id:V(),image:{src:`${I}/images/main-page/use-cases-of-our-products/merchantsSolutionFour.svg`,alt:"icon four"},title:"Travel Industry",text:"The travel industry is a growing sector. With increasing bookings now made online, it makes financial sense to accept crypto payments."},{id:V(),image:{src:`${I}/images/main-page/use-cases-of-our-products/merchantsSolutionFive.svg`,alt:"icon five"},title:"Gambling",text:"The global online gambling industry is worth billions of dollars. Crypto payments are part for the course."},{id:V(),image:{src:`${I}/images/main-page/use-cases-of-our-products/merchantsSolutionSix.svg`,alt:"icon six"},title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."}],photoSlideArrowRight:{src:`${I}/images/main-page/use-cases-of-our-products/mobile-slider/slider-button.svg`,alt:"arrow right"},fees:{title:"Fees",lineOne:{title:"Incoming Transactions",text:{main:"As low as 0.5%",span:"and going down based on your total transaction volume.",button:"Check pricing details"}},lineTwo:{title:"Outgoing Transactions",text:{main:"Free of charge"}}},news:{title:"News",link:{value:"Read more",href:qx}},questions:{title:"Have a question?",text:"Explore our solutions or you can contact us through ticket system and contact form. Feel free to get in touch..",existing:{title:"For existing clients",text:"If you already have an account please use our ticket system.",linkName:"Get 24\\7 Support",href:Vx},new:{title:"For new clients or partners",text:"Please leave your inquiry and our Business Development Team will contact you shortly.",linkName:"Contact BD Team",href:Gx}}};case"PaymentFees":return{title:t("pagePaymentFees.title"),individual:{subtitle:t("pagePaymentFees.subtitleIndividual"),linkHref:iS,linkLabel:t("pagePaymentFees.linkLabel"),depositFee:{text:t("pagePaymentFees.depositFee"),percent:["0.1%","0.3%"],span:["<1000$",">1000$"]},swapFee:{text:t("pagePaymentFees.swapFee"),percent:["0.5%"]},withdrawFee:{text:t("pagePaymentFees.withdrawFee"),percent:["0.5%"]},fiatBankIn:{text:t("pagePaymentFees.fiatBankIn"),percent:["0.5%"]},fiatBankOut:{text:t("pagePaymentFees.fiatBankOut"),percent:["0.5%"]},depositFeeSpan:{text:t("pagePaymentFees.depositFeeSpan"),percent:["0.5%"]}},enterprise:{subtitle:t("pagePaymentFees.subtitleEnterprise"),linkHref:oS,linkLabel:t("pagePaymentFees.linkLabel"),depositFee:{text:t("pagePaymentFees.depositFee"),percent:["0.1%"]},swapFee:{text:t("pagePaymentFees.swapFee"),percent:["0.5%","0.6%"],span:["<1000$",">1000$"]},withdrawFee:{text:t("pagePaymentFees.withdrawFee"),percent:["0.5%"]},fiatBankIn:{text:t("pagePaymentFees.fiatBankIn"),percent:["0.5%"]},fiatBankOut:{text:t("pagePaymentFees.fiatBankOut"),percent:["0.5%"]},depositFeeSpan:{text:t("pagePaymentFees.depositFeeSpan"),percent:["0.5%"]}},navigation:{button:t("pagePaymentFees.navigation.button"),separator:">",location:t("pagePaymentFees.navigation.location")}};case"News":return fS;case"NotFound":return{navigation:{button:t("pageNotFound.navigation.button"),separator:">",location:t("pageNotFound.navigation.location")},title:"404",subtitle:t("pageNotFound.subtitle"),image:{src:`${I}/images/not-found-page/off.svg`,alt:t("pageNotFound.imageAlt")},text:t("pageNotFound.text"),button:t("pageNotFound.button")};case"Logo":return{src:`${I}/images/common/logo.svg`,alt:t("logo.alt")};case"FeedbackWidgets":return[{id:"telegram",image:{darkSrc:`${I}/images/common/telegram-dark.svg`,lightSrc:`${I}/images/common/telegram-light.svg`,alt:t("feedbackWidgets.telegram")},href:Qm},{id:"twitter",image:{darkSrc:`${I}/images/common/twitter-dark.svg`,lightSrc:`${I}/images/common/twitter-light.svg`,alt:t("feedbackWidgets.twitter")},href:Gm},{id:"facebook",image:{darkSrc:`${I}/images/common/facebook-dark.svg`,lightSrc:`${I}/images/common/facebook-light.svg`,alt:t("feedbackWidgets.facebook")},href:Km},{id:"email",image:{darkSrc:`${I}/images/common/email-dark.svg`,lightSrc:`${I}/images/common/email-light.svg`,alt:t("feedbackWidgets.email")},href:Mx}];default:return null}},{greenColor:ur,lightGreenColor:wS,whiteColor:nv}=re,xS=x.section`
  box-sizing: border-box;
  margin: 0 auto 7vw;
  position: relative;
  background-image: url(${lr.backgroundL});
  ${Vt};
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
    ${ca};
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

  @media (max-width: ${k}) {
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
      ${ca};
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
`,SS=x.div`
  box-sizing: border-box;
  margin: 17.47vw 0 2vw 4.28vw;
  width: 50%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: ${k}) {
    margin: 123.05vw 0 10vw 0;
    padding: 1vw 7vw 5vw 9vw;
    width: 100vw;
    background-image: url(${lr.wrapper});
    ${Vt};
  }
`,bS=x.div`
  border-radius: 50%;
  bottom: -5vw;
  left: 16vw;
  position: absolute;
  z-index: 1;
  width: 8.5vw;
  height: 8.5vw;
  background-image: url(${lr.circle});
  ${Vt};

  @media (max-width: ${k}) {
    bottom: -6vw;
    left: 50%;
    transform: translateX(-50%);
    width: 12vw;
    height: 12vw;
  }
`,kS=x.p`
  ${Z};
  margin: 0 0 1.9vw;
  color: rgba(255, 255, 255, 0.5);
  ${ce};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
`,$S=x.h1`
  ${Z};
  color: ${nv};
  font-size: 3.89vw;
  ${Wi};
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;
  text-transform: uppercase;
  text-align: left;
  word-break: break-word;

  @media (max-width: ${k}) {
    font-size: 9.84vw;
  }
`,CS=x.p`
  ${Z};
  margin: 1.46vw 0 5.9vw;
  ${ce};
  font-size: calc(25vw / 14.4);
  color: ${ur};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${k}) {
    margin: 3.54vw 0 5.9vw;
    font-size: calc(25vw / 5.08);
  }
`,OS=x(ct)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: calc(20vw / 14.4);
  background: linear-gradient(
    133deg,
    ${ur} 0%,
    ${wS} 100%
  );

  @media (max-width: ${k}) {
    padding: calc(12vw / 5.08);
  }
`,PS=x.span`
  ${Z};
  margin-right: calc(20vw / 14.4);
  color: ${nv};
  font-size: 1.11vw;
  ${Wi};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${k}) {
    margin-right: calc(12vw / 5.08);
    font-size: 3.15vw;
  }
`,ES=x.div`
  ${ca};
  width: 1.18vw;
  height: 1.04vw;
  background-image: url(${Fn.playIconWhite});

  @media (max-width: ${k}) {
    width: 3.35vw;
    height: 2.95vw;
  }
`,jS=j.forwardRef((e,t)=>{const{t:n}=ut(),r=xt("MainScreen",n),{span:i,title:o,text:a,button:s}=r,l=jt();return p.jsxs(xS,{className:"main-screen",ref:t,children:[p.jsxs(SS,{children:[l!==null&&!l&&p.jsx(kS,{children:i}),p.jsx($S,{children:o}),p.jsx(CS,{children:a}),p.jsx(OS,{color:"transparent",href:Fx,target:"_blank",rel:"noopener noreferrer",children:p.jsxs(p.Fragment,{children:[p.jsx(PS,{children:s}),p.jsx(ES,{})]})})]}),p.jsx(bS,{})]})}),LS=x("h3")`
  ${Z};
  ${Et};
  font-style: normal;
  font-weight: 500;
  word-wrap: break-word;
`,Sn=({children:e,...t})=>p.jsx(LS,{...t,children:e}),{lightGrayColor:rv}=re,TS=x.div`
  position: relative;
  z-index: 1;
  max-width: 20.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${k}) {
    max-width: 55.33vw;
  }
`,_S=x(Sn)`
  width: 100%;
  color: ${rv};
  text-align: center;
  font-size: calc(26vw / 14.4);
  line-height: 1.5;
  letter-spacing: -0.52px;

  @media (max-width: ${k}) {
    width: 100%;
    font-size: calc(26vw / 5.08);
    margin: 5vw 0 0 0;
  }
`,RS=x.p`
  ${Z};
  margin: 1.11vw 0 2.85vw;
  color: ${rv};
  text-align: center;
  ${ce};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;

  @media (max-width: ${k}) {
    font-size: calc(20vw / 5.08);
    margin: 0.7vw 0 4.72vw;
  }
`,NS=x.img`
  margin-top: ${({$index:e})=>e==="one"?"3.9vw":e==="two"?"2.7vw":"0"};
  margin-bottom: 2vw;
  width: ${({$index:e})=>e==="one"?"7.4vw":e==="two"?"8.6vw":"11.3vw"};
  height: ${({$index:e})=>e==="one"?"7.4vw":e==="two"?"8.6vw":"11.3vw"};

  @media (max-width: ${k}) {
    margin-top: 4vw;
    width: ${({$index:e})=>e==="one"?"20.86vw":e==="two"?"24.56vw":"32.08vw"};
    height: ${({$index:e})=>e==="one"?"20.86vw":e==="two"?"24.56vw":"32.08vw"};
  }
`,Hs=({index:e,content:t})=>p.jsxs(TS,{children:[p.jsx(NS,{$index:e,src:t.image.src,alt:t.image.alt}),p.jsx(_S,{children:t.subtitle}),p.jsx(RS,{children:t.text})]}),{whiteColor:Bc}=re,zS=x.div`
  padding: 1vw 0.5vw;
  display: flex;
  flex-direction: column;
  border-bottom: none;
  align-self: start;
  max-width: 347.5vw;

  @media (max-width: ${k}) {
    align-self: center;
    padding: 10.5vw 3.5vw;
    max-width: 80.3vw;
    border-bottom: 0.5px ${Bc} solid;
  }

  &:last-child {
    border: none;
  }
`,IS=x.div`
  width: 100%;
  min-height: 3.56vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${k}) {
    width: 100%;
  }
`,MS=x(Sn)`
  color: ${Bc};
  font-size: calc(26vw / 14.4);
  line-height: 0.96;
  text-align: left;

  @media (max-width: ${k}) {
    line-height: 0.83;
    font-size: calc(30vw / 5.08);
  }
`,DS=x.p`
  ${Z};
  margin: 2.5vw 0 0 0;
  color: ${Bc};
  ${ce};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  text-align: left;
  max-width: 19vw;

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.08);
    line-height: 1;
    max-width: 100%;
  }
`,AS=({subtitle:e,text:t,svg:n})=>p.jsxs(zS,{children:[p.jsxs(IS,{children:[n,p.jsx(MS,{children:e})]}),p.jsx(DS,{children:t})]}),FS=x.div`
  background-image: url(${Df.backgroundL});
  //border-radius: 1.6vw;
  border-radius: 1.6vw 1.6vw 0 0;
  ${Vt};
  min-height: 25.14vw;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: ${k}) {
    width: 100vw;
    //border-radius: 3.93vw;
    border-radius: 3.93vw 3.93vw 0 0;
    min-height: 212.58vw;
    background-image: url(${Df.backgroundS});
    flex-direction: column;
  }
`,HS=x.div`
  padding: 5vw 3vw;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  justify-items: center;

  @media (max-width: ${k}) {
    padding: 5vw 0;
    grid-template-columns: 1fr;
    align-items: center;
  }
`,US=x.img`
  width: 3.75vw;
  height: 3.75vw;
  margin-right: 1vw;

  @media (max-width: ${k}) {
    margin-right: 5vw;
    width: 13.95vw;
    height: 13.95vw;
  }
`,BS=({advantages:e})=>p.jsx(FS,{children:p.jsx(HS,{children:e.map(t=>p.jsx(AS,{svg:p.jsx(US,{src:t.image,alt:t.alt}),subtitle:t.subtitle,text:t.text},t.id))})}),WS=x.h2`
  ${Z};
  text-align: center;
  font-size: calc(50vw / 14.4);
  ${Et};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -1px;
  color: ${e=>e.color};

  @media (max-width: ${k}) {
    font-size: calc(50vw / 5.08);
    line-height: 1.2;
  }
`,Lt=({children:e,...t})=>p.jsx(WS,{...t,children:e}),qS=x.p`
  ${Z};
  text-align: center;
  font-size: calc(20vw / 14.05);
  ${ce};
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.color};

  @media (max-width: ${k}) {
    ${Ar};
    font-size: calc(18vw / 5.08);
    line-height: 1.5;
  }
`,Wc=({children:e,...t})=>p.jsx(qS,{...t,children:e}),{darkGrayColor:Bf}=re,VS=x.div`
  position: relative;
  margin: 0 auto 2vw;
  ${Fc};
  width: 93.54vw;
  height: auto;
  background-image: url(${Lr.backgroundL});

  @media (max-width: ${k}) {
    padding: 16.7vw 0 5vw;
    width: 90.55vw;
    background-image: url(${Lr.backgroundS});
  }
`,GS=x(Wc)`
  margin: 0.7vw 0 1.71vw;

  @media (max-width: ${k}) {
    margin-bottom: 4.72vw;
  }
`,KS=x.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;

  @media (max-width: ${k}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,Wf=x.div`
  position: relative;

  @media (max-width: ${k}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,QS=x.div`
  ${Vm};
  background-image: url(${Lr.leftLineL});
  top: 4vw;
  left: 15vw;
  width: 20.83vw;
  height: 6.04vw;

  @media (max-width: ${k}) {
    top: 25vw;
    left: 7vw;
    height: calc(100% - 20.86vw + 15vw);
    background-image: url(${Lr.leftLineS});
  }
`,YS=x.div`
  ${Vm};
  background-image: url(${Lr.rightLineL});
  top: 4vw;
  right: -14.5vw;
  width: 19vw;
  height: 6.04vw;

  @media (max-width: ${k}) {
    top: 30vw;
    right: 3vw;
    height: calc(100% - 24.56vw + 15vw);
    background-image: url(${Lr.rightLineS});
  }
`,XS=({id:e,title:t})=>{const{t:n}=ut(),r=xt("HowItWorks",n),{text:i,stepOne:o,stepTwo:a,stepThree:s,advantages:l}=r;return p.jsxs("section",{id:e,children:[p.jsxs(VS,{children:[p.jsx(Lt,{color:Bf,children:t}),p.jsx(GS,{color:Bf,children:i}),p.jsxs(KS,{children:[p.jsxs(Wf,{children:[p.jsx(QS,{}),p.jsx(Hs,{index:"one",content:o})]}),p.jsxs(Wf,{children:[p.jsx(YS,{}),p.jsx(Hs,{index:"two",content:a})]}),p.jsx(Hs,{index:"three",content:s})]})]}),l&&p.jsx(BS,{advantages:l})]})},JS=x.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,ZS=x.img`
  width: calc(218vw / 14.4);
  height: calc(56vw / 14.4);
  border: 0.7px solid white;
  border-radius: 10px;
  padding: 0.5vw;
  box-sizing: border-box;

  @media (max-width: ${k}) {
    width: calc(168vw / 5.08);
    height: calc(50vw / 5.08);
    padding: 1vw;
  }
`,eb=x(ct)`
  pointer-events: none;
  text-decoration: none; 
  cursor: not-allowed;
  opacity: 0.3;
}

  @media (max-width: ${k}) {
    margin-right: calc(72vw / 14.4);
  }
`,iv=({links:e})=>p.jsx(JS,{children:e.map(t=>p.jsx(eb,{color:"transparent",href:t.href,target:"_blank",rel:"noopener noreferrer",children:p.jsx(ZS,{src:t.src,alt:t.alt})},t.id))}),{darkColor:tb,whiteColor:nb,darkGrayColor:rb}=re,ib=x.section`
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  background-color: ${tb};
  min-height: 41.53vw;

  @media (max-width: ${k}) {
    background-color: ${rb};
    box-sizing: border-box;
    min-height: 270.66vw;
    flex-direction: column;
  }
`,ob=x.div`
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
  ${Vt};
  background-image: url(${Ff.backgroundL});

  @media (max-width: ${k}) {
    box-sizing: border-box;
    padding: 0 9vw 4.14vw;
    background-image: url(${Ff.backgroundS});
    justify-content: end;
    align-items: start;
  }
`,ab=x.p`
  max-width: 40%;
  ${Hc};
  margin: 3.06vw 0 3.75vw;

  @media (max-width: ${k}) {
    max-width: 90%;
    margin: 8.82vw 0;
  }
`,sb=x.div`
  width: 35vw;

  @media (max-width: ${k}) {
    width: 70vw;
  }
`,lb=({mobileWallet:e})=>{const{title:t,text:n,links:r}=e;return p.jsx(ib,{children:p.jsxs(ob,{children:[p.jsx(Lt,{color:nb,children:t}),p.jsx(ab,{children:n}),p.jsx(sb,{children:p.jsx(iv,{links:r})})]})})};var ov={},av={},Za={},sv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(sv);var ub="Expected a function",qf=0/0,cb="[object Symbol]",db=/^\s+|\s+$/g,fb=/^[-+]0x[0-9a-f]+$/i,pb=/^0b[01]+$/i,hb=/^0o[0-7]+$/i,gb=parseInt,mb=typeof nn=="object"&&nn&&nn.Object===Object&&nn,vb=typeof self=="object"&&self&&self.Object===Object&&self,yb=mb||vb||Function("return this")(),wb=Object.prototype,xb=wb.toString,Sb=Math.max,bb=Math.min,Us=function(){return yb.Date.now()};function kb(e,t,n){var r,i,o,a,s,l,u=0,d=!1,c=!1,f=!0;if(typeof e!="function")throw new TypeError(ub);t=Vf(t)||0,du(n)&&(d=!!n.leading,c="maxWait"in n,o=c?Sb(Vf(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function y($){var P=r,E=i;return r=i=void 0,u=$,a=e.apply(E,P),a}function v($){return u=$,s=setTimeout(g,t),d?y($):a}function w($){var P=$-l,E=$-u,R=t-P;return c?bb(R,o-E):R}function C($){var P=$-l,E=$-u;return l===void 0||P>=t||P<0||c&&E>=o}function g(){var $=Us();if(C($))return h($);s=setTimeout(g,w($))}function h($){return s=void 0,f&&r?y($):(r=i=void 0,a)}function m(){s!==void 0&&clearTimeout(s),u=0,r=l=i=s=void 0}function S(){return s===void 0?a:h(Us())}function b(){var $=Us(),P=C($);if(r=arguments,i=this,l=$,P){if(s===void 0)return v(l);if(c)return s=setTimeout(g,t),y(l)}return s===void 0&&(s=setTimeout(g,t)),a}return b.cancel=m,b.flush=S,b}function du(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function $b(e){return!!e&&typeof e=="object"}function Cb(e){return typeof e=="symbol"||$b(e)&&xb.call(e)==cb}function Vf(e){if(typeof e=="number")return e;if(Cb(e))return qf;if(du(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=du(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(db,"");var n=pb.test(e);return n||hb.test(e)?gb(e.slice(2),n?2:8):fb.test(e)?qf:+e}var Ob=kb,lv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)t.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(lv);var es=lv.exports,M={};Object.defineProperty(M,"__esModule",{value:!0});M.checkSpecKeys=M.checkNavigable=M.changeSlide=M.canUseDOM=M.canGoNext=void 0;M.clamp=uv;M.swipeStart=M.swipeMove=M.swipeEnd=M.slidesOnRight=M.slidesOnLeft=M.slideHandler=M.siblingDirection=M.safePreventDefault=M.lazyStartIndex=M.lazySlidesOnRight=M.lazySlidesOnLeft=M.lazyEndIndex=M.keyHandler=M.initializedState=M.getWidth=M.getTrackLeft=M.getTrackCSS=M.getTrackAnimateCSS=M.getTotalSlides=M.getSwipeDirection=M.getSlideCount=M.getRequiredLazySlides=M.getPreClones=M.getPostClones=M.getOnDemandLazySlides=M.getNavigableIndexes=M.getHeight=M.extractObject=void 0;var Pb=Eb(j);function Eb(e){return e&&e.__esModule?e:{default:e}}function Gf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gf(Object(n),!0).forEach(function(r){jb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uv(e,t,n){return Math.max(t,Math.min(e,n))}var Nn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};M.safePreventDefault=Nn;var qc=function(t){for(var n=[],r=Vc(t),i=Gc(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};M.getOnDemandLazySlides=qc;var Lb=function(t){for(var n=[],r=Vc(t),i=Gc(t),o=r;o<i;o++)n.push(o);return n};M.getRequiredLazySlides=Lb;var Vc=function(t){return t.currentSlide-cv(t)};M.lazyStartIndex=Vc;var Gc=function(t){return t.currentSlide+dv(t)};M.lazyEndIndex=Gc;var cv=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};M.lazySlidesOnLeft=cv;var dv=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};M.lazySlidesOnRight=dv;var da=function(t){return t&&t.offsetWidth||0};M.getWidth=da;var Kc=function(t){return t&&t.offsetHeight||0};M.getHeight=Kc;var Qc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,a;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),a=Math.round(o*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?"left":a>=135&&a<=225?"right":n===!0?a>=35&&a<=135?"up":"down":"vertical"};M.getSwipeDirection=Qc;var Yc=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};M.canGoNext=Yc;var Tb=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};M.extractObject=Tb;var _b=function(t){var n=Pb.default.Children.count(t.children),r=t.listRef,i=Math.ceil(da(r)),o=t.trackRef&&t.trackRef.node,a=Math.ceil(da(o)),s;if(t.vertical)s=i;else{var l=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(l*=i/100),s=Math.ceil((i-l)/t.slidesToShow)}var u=r&&Kc(r.querySelector('[data-index="0"]')),d=u*t.slidesToShow,c=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(c=n-1-t.initialSlide);var f=t.lazyLoadedList||[],y=qc(le(le({},t),{},{currentSlide:c,lazyLoadedList:f}));f=f.concat(y);var v={slideCount:n,slideWidth:s,listWidth:i,trackWidth:a,currentSlide:c,slideHeight:u,listHeight:d,lazyLoadedList:f};return t.autoplaying===null&&t.autoplay&&(v.autoplaying="playing"),v};M.initializedState=_b;var Rb=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,a=t.index,s=t.slideCount,l=t.lazyLoad,u=t.currentSlide,d=t.centerMode,c=t.slidesToScroll,f=t.slidesToShow,y=t.useCSS,v=t.lazyLoadedList;if(n&&r)return{};var w=a,C,g,h,m={},S={},b=o?a:uv(a,0,s-1);if(i){if(!o&&(a<0||a>=s))return{};a<0?w=a+s:a>=s&&(w=a-s),l&&v.indexOf(w)<0&&(v=v.concat(w)),m={animating:!0,currentSlide:w,lazyLoadedList:v,targetSlide:w},S={animating:!1,targetSlide:w}}else C=w,w<0?(C=w+s,o?s%c!==0&&(C=s-s%c):C=0):!Yc(t)&&w>u?w=C=u:d&&w>=s?(w=o?s:s-1,C=o?0:s-1):w>=s&&(C=w-s,o?s%c!==0&&(C=0):C=s-f),!o&&w+f>=s&&(C=s-f),g=Ni(le(le({},t),{},{slideIndex:w})),h=Ni(le(le({},t),{},{slideIndex:C})),o||(g===h&&(w=C),g=h),l&&(v=v.concat(qc(le(le({},t),{},{currentSlide:w})))),y?(m={animating:!0,currentSlide:C,trackStyle:Xc(le(le({},t),{},{left:g})),lazyLoadedList:v,targetSlide:b},S={animating:!1,currentSlide:C,trackStyle:Ri(le(le({},t),{},{left:h})),swipeLeft:null,targetSlide:b}):m={currentSlide:C,trackStyle:Ri(le(le({},t),{},{left:h})),lazyLoadedList:v,targetSlide:b};return{state:m,nextState:S}};M.slideHandler=Rb;var Nb=function(t,n){var r,i,o,a,s,l=t.slidesToScroll,u=t.slidesToShow,d=t.slideCount,c=t.currentSlide,f=t.targetSlide,y=t.lazyLoad,v=t.infinite;if(a=d%l!==0,r=a?0:(d-c)%l,n.message==="previous")o=r===0?l:u-r,s=c-o,y&&!v&&(i=c-o,s=i===-1?d-1:i),v||(s=f-l);else if(n.message==="next")o=r===0?l:r,s=c+o,y&&!v&&(s=(c+l)%d+r),v||(s=f+l);else if(n.message==="dots")s=n.index*n.slidesToScroll;else if(n.message==="children"){if(s=n.index,v){var w=gv(le(le({},t),{},{targetSlide:s}));s>n.currentSlide&&w==="left"?s=s-d:s<n.currentSlide&&w==="right"&&(s=s+d)}}else n.message==="index"&&(s=Number(n.index));return s};M.changeSlide=Nb;var zb=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};M.keyHandler=zb;var Ib=function(t,n,r){return t.target.tagName==="IMG"&&Nn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};M.swipeStart=Ib;var Mb=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,a=n.swipeToSlide,s=n.verticalSwiping,l=n.rtl,u=n.currentSlide,d=n.edgeFriction,c=n.edgeDragged,f=n.onEdge,y=n.swiped,v=n.swiping,w=n.slideCount,C=n.slidesToScroll,g=n.infinite,h=n.touchObject,m=n.swipeEvent,S=n.listHeight,b=n.listWidth;if(!r){if(i)return Nn(t);o&&a&&s&&Nn(t);var $,P={},E=Ni(n);h.curX=t.touches?t.touches[0].pageX:t.clientX,h.curY=t.touches?t.touches[0].pageY:t.clientY,h.swipeLength=Math.round(Math.sqrt(Math.pow(h.curX-h.startX,2)));var R=Math.round(Math.sqrt(Math.pow(h.curY-h.startY,2)));if(!s&&!v&&R>10)return{scrolling:!0};s&&(h.swipeLength=R);var N=(l?-1:1)*(h.curX>h.startX?1:-1);s&&(N=h.curY>h.startY?1:-1);var F=Math.ceil(w/C),U=Qc(n.touchObject,s),A=h.swipeLength;return g||(u===0&&(U==="right"||U==="down")||u+1>=F&&(U==="left"||U==="up")||!Yc(n)&&(U==="left"||U==="up"))&&(A=h.swipeLength*d,c===!1&&f&&(f(U),P.edgeDragged=!0)),!y&&m&&(m(U),P.swiped=!0),o?$=E+A*(S/b)*N:l?$=E-A*N:$=E+A*N,s&&($=E+A*N),P=le(le({},P),{},{touchObject:h,swipeLeft:$,trackStyle:Ri(le(le({},n),{},{left:$}))}),Math.abs(h.curX-h.startX)<Math.abs(h.curY-h.startY)*.8||h.swipeLength>10&&(P.swiping=!0,Nn(t)),P}};M.swipeMove=Mb;var Db=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,a=n.listWidth,s=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,d=n.swipeToSlide,c=n.scrolling,f=n.onSwipe,y=n.targetSlide,v=n.currentSlide,w=n.infinite;if(!r)return i&&Nn(t),{};var C=l?u/s:a/s,g=Qc(o,l),h={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(c||!o.swipeLength)return h;if(o.swipeLength>C){Nn(t),f&&f(g);var m,S,b=w?v:y;switch(g){case"left":case"up":S=b+pu(n),m=d?fu(n,S):S,h.currentDirection=0;break;case"right":case"down":S=b-pu(n),m=d?fu(n,S):S,h.currentDirection=1;break;default:m=b}h.triggerSlideHandler=m}else{var $=Ni(n);h.trackStyle=Xc(le(le({},n),{},{left:$}))}return h};M.swipeEnd=Db;var fv=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};M.getNavigableIndexes=fv;var fu=function(t,n){var r=fv(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};M.checkNavigable=fu;var pu=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(l){if(t.vertical){if(l.offsetTop+Kc(l)/2>t.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+da(l)/2>t.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var a=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,s=Math.abs(r.dataset.index-a)||1;return s}else return t.slidesToScroll};M.getSlideCount=pu;var ts=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};M.checkSpecKeys=ts;var Ri=function(t){ts(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=hv(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",l=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=le(le({},o),{},{WebkitTransform:a,transform:s,msTransform:l})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};M.getTrackCSS=Ri;var Xc=function(t){ts(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Ri(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};M.getTrackAnimateCSS=Xc;var Ni=function(t){if(t.unslick)return 0;ts(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,a=t.slideCount,s=t.slidesToShow,l=t.slidesToScroll,u=t.slideWidth,d=t.listWidth,c=t.variableWidth,f=t.slideHeight,y=t.fade,v=t.vertical,w=0,C,g,h=0;if(y||t.slideCount===1)return 0;var m=0;if(i?(m=-di(t),a%l!==0&&n+l>a&&(m=-(n>a?s-(n-a):a%l)),o&&(m+=parseInt(s/2))):(a%l!==0&&n+l>a&&(m=s-a%l),o&&(m=parseInt(s/2))),w=m*u,h=m*f,v?C=n*f*-1+h:C=n*u*-1+w,c===!0){var S,b=r&&r.node;if(S=n+di(t),g=b&&b.childNodes[S],C=g?g.offsetLeft*-1:0,o===!0){S=i?n+di(t):n,g=b&&b.children[S],C=0;for(var $=0;$<S;$++)C-=b&&b.children[$]&&b.children[$].offsetWidth;C-=parseInt(t.centerPadding),C+=g&&(d-g.offsetWidth)/2}}return C};M.getTrackLeft=Ni;var di=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};M.getPreClones=di;var pv=function(t){return t.unslick||!t.infinite?0:t.slideCount};M.getPostClones=pv;var hv=function(t){return t.slideCount===1?1:di(t)+t.slideCount+pv(t)};M.getTotalSlides=hv;var gv=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+mv(t)?"left":"right":t.targetSlide<t.currentSlide-vv(t)?"right":"left"};M.siblingDirection=gv;var mv=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),i&&n%2===0&&(a+=1),a}return i?0:n-1};M.slidesOnRight=mv;var vv=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),!i&&n%2===0&&(a+=1),a}return i?n-1:0};M.slidesOnLeft=vv;var Ab=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};M.canUseDOM=Ab;var ns={};function hu(e){"@babel/helpers - typeof";return hu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hu(e)}Object.defineProperty(ns,"__esModule",{value:!0});ns.Track=void 0;var Zt=yv(j),Bs=yv(es),Ws=M;function yv(e){return e&&e.__esModule?e:{default:e}}function gu(){return gu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gu.apply(this,arguments)}function Fb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Hb(e,t,n){return t&&Kf(e.prototype,t),n&&Kf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ub(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&mu(e,t)}function mu(e,t){return mu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},mu(e,t)}function Bb(e){var t=qb();return function(){var r=fa(e),i;if(t){var o=fa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Wb(this,i)}}function Wb(e,t){if(t&&(hu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vu(e)}function vu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fa(e){return fa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},fa(e)}function Qf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qf(Object(n),!0).forEach(function(r){yu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var qs=function(t){var n,r,i,o,a;t.rtl?a=t.slideCount-1-t.index:a=t.index,i=a<0||a>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(a-t.currentSlide)%t.slideCount===0,a>t.currentSlide-o-1&&a<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=a&&a<t.currentSlide+t.slidesToShow;var s;t.targetSlide<0?s=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?s=t.targetSlide-t.slideCount:s=t.targetSlide;var l=a===s;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},Vb=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Vs=function(t,n){return t.key||n},Gb=function(t){var n,r=[],i=[],o=[],a=Zt.default.Children.count(t.children),s=(0,Ws.lazyStartIndex)(t),l=(0,Ws.lazyEndIndex)(t);return Zt.default.Children.forEach(t.children,function(u,d){var c,f={message:"children",index:d,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(d)>=0?c=u:c=Zt.default.createElement("div",null);var y=Vb(Ue(Ue({},t),{},{index:d})),v=c.props.className||"",w=qs(Ue(Ue({},t),{},{index:d}));if(r.push(Zt.default.cloneElement(c,{key:"original"+Vs(c,d),"data-index":d,className:(0,Bs.default)(w,v),tabIndex:"-1","aria-hidden":!w["slick-active"],style:Ue(Ue({outline:"none"},c.props.style||{}),y),onClick:function(h){c.props&&c.props.onClick&&c.props.onClick(h),t.focusOnSelect&&t.focusOnSelect(f)}})),t.infinite&&t.fade===!1){var C=a-d;C<=(0,Ws.getPreClones)(t)&&a!==t.slidesToShow&&(n=-C,n>=s&&(c=u),w=qs(Ue(Ue({},t),{},{index:n})),i.push(Zt.default.cloneElement(c,{key:"precloned"+Vs(c,n),"data-index":n,tabIndex:"-1",className:(0,Bs.default)(w,v),"aria-hidden":!w["slick-active"],style:Ue(Ue({},c.props.style||{}),y),onClick:function(h){c.props&&c.props.onClick&&c.props.onClick(h),t.focusOnSelect&&t.focusOnSelect(f)}}))),a!==t.slidesToShow&&(n=a+d,n<l&&(c=u),w=qs(Ue(Ue({},t),{},{index:n})),o.push(Zt.default.cloneElement(c,{key:"postcloned"+Vs(c,n),"data-index":n,tabIndex:"-1",className:(0,Bs.default)(w,v),"aria-hidden":!w["slick-active"],style:Ue(Ue({},c.props.style||{}),y),onClick:function(h){c.props&&c.props.onClick&&c.props.onClick(h),t.focusOnSelect&&t.focusOnSelect(f)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},Kb=function(e){Ub(n,e);var t=Bb(n);function n(){var r;Fb(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=t.call.apply(t,[this].concat(o)),yu(vu(r),"node",null),yu(vu(r),"handleRef",function(s){r.node=s}),r}return Hb(n,[{key:"render",value:function(){var i=Gb(this.props),o=this.props,a=o.onMouseEnter,s=o.onMouseOver,l=o.onMouseLeave,u={onMouseEnter:a,onMouseOver:s,onMouseLeave:l};return Zt.default.createElement("div",gu({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(Zt.default.PureComponent);ns.Track=Kb;var rs={};function wu(e){"@babel/helpers - typeof";return wu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wu(e)}Object.defineProperty(rs,"__esModule",{value:!0});rs.Dots=void 0;var mo=wv(j),Qb=wv(es),Yf=M;function wv(e){return e&&e.__esModule?e:{default:e}}function Xf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Yb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xf(Object(n),!0).forEach(function(r){Xb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Zb(e,t,n){return t&&Jf(e.prototype,t),n&&Jf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ek(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xu(e,t)}function xu(e,t){return xu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},xu(e,t)}function tk(e){var t=ik();return function(){var r=pa(e),i;if(t){var o=pa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return nk(this,i)}}function nk(e,t){if(t&&(wu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rk(e)}function rk(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ik(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pa(e){return pa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},pa(e)}var ok=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},ak=function(e){ek(n,e);var t=tk(n);function n(){return Jb(this,n),t.apply(this,arguments)}return Zb(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,a=i.onMouseOver,s=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,d=i.slidesToShow,c=i.slideCount,f=i.currentSlide,y=ok({slideCount:c,slidesToScroll:u,slidesToShow:d,infinite:l}),v={onMouseEnter:o,onMouseOver:a,onMouseLeave:s},w=[],C=0;C<y;C++){var g=(C+1)*u-1,h=l?g:(0,Yf.clamp)(g,0,c-1),m=h-(u-1),S=l?m:(0,Yf.clamp)(m,0,c-1),b=(0,Qb.default)({"slick-active":l?f>=S&&f<=h:f===S}),$={message:"dots",index:C,slidesToScroll:u,currentSlide:f},P=this.clickHandler.bind(this,$);w=w.concat(mo.default.createElement("li",{key:C,className:b},mo.default.cloneElement(this.props.customPaging(C),{onClick:P})))}return mo.default.cloneElement(this.props.appendDots(w),Yb({className:this.props.dotsClass},v))}}]),n}(mo.default.PureComponent);rs.Dots=ak;var Tr={};function Su(e){"@babel/helpers - typeof";return Su=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Su(e)}Object.defineProperty(Tr,"__esModule",{value:!0});Tr.PrevArrow=Tr.NextArrow=void 0;var mr=Sv(j),xv=Sv(es),sk=M;function Sv(e){return e&&e.__esModule?e:{default:e}}function ha(){return ha=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ha.apply(this,arguments)}function Zf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ga(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zf(Object(n),!0).forEach(function(r){lk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ep(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function kv(e,t,n){return t&&ep(e.prototype,t),n&&ep(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $v(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&bu(e,t)}function bu(e,t){return bu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},bu(e,t)}function Cv(e){var t=dk();return function(){var r=ma(e),i;if(t){var o=ma(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return uk(this,i)}}function uk(e,t){if(t&&(Su(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ck(e)}function ck(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ma(e){return ma=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ma(e)}var fk=function(e){$v(n,e);var t=Cv(n);function n(){return bv(this,n),t.apply(this,arguments)}return kv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var a={key:"0","data-role":"none",className:(0,xv.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=mr.default.cloneElement(this.props.prevArrow,ga(ga({},a),s)):l=mr.default.createElement("button",ha({key:"0",type:"button"},a)," ","Previous"),l}}]),n}(mr.default.PureComponent);Tr.PrevArrow=fk;var pk=function(e){$v(n,e);var t=Cv(n);function n(){return bv(this,n),t.apply(this,arguments)}return kv(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,sk.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var a={key:"1","data-role":"none",className:(0,xv.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=mr.default.cloneElement(this.props.nextArrow,ga(ga({},a),s)):l=mr.default.createElement("button",ha({key:"1",type:"button"},a)," ","Next"),l}}]),n}(mr.default.PureComponent);Tr.NextArrow=pk;var Ov=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var a=o[i];n.call(r,a[1],a[0])}},t}()}(),ku=typeof window<"u"&&typeof document<"u"&&window.document===document,va=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),hk=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(va):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),gk=2;function mk(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function a(){hk(o)}function s(){var l=Date.now();if(n){if(l-i<gk)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=l}return s}var vk=20,yk=["top","right","bottom","left","width","height","size","weight"],wk=typeof MutationObserver<"u",xk=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=mk(this.refresh.bind(this),vk)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!ku||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),wk?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!ku||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=yk.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Pv=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},_r=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||va},Ev=is(0,0,0,0);function ya(e){return parseFloat(e)||0}function tp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+ya(o)},0)}function Sk(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],a=e["padding-"+o];n[o]=ya(a)}return n}function bk(e){var t=e.getBBox();return is(0,0,t.width,t.height)}function kk(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Ev;var r=_r(e).getComputedStyle(e),i=Sk(r),o=i.left+i.right,a=i.top+i.bottom,s=ya(r.width),l=ya(r.height);if(r.boxSizing==="border-box"&&(Math.round(s+o)!==t&&(s-=tp(r,"left","right")+o),Math.round(l+a)!==n&&(l-=tp(r,"top","bottom")+a)),!Ck(e)){var u=Math.round(s+o)-t,d=Math.round(l+a)-n;Math.abs(u)!==1&&(s-=u),Math.abs(d)!==1&&(l-=d)}return is(i.left,i.top,s,l)}var $k=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof _r(e).SVGGraphicsElement}:function(e){return e instanceof _r(e).SVGElement&&typeof e.getBBox=="function"}}();function Ck(e){return e===_r(e).document.documentElement}function Ok(e){return ku?$k(e)?bk(e):kk(e):Ev}function Pk(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(o.prototype);return Pv(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function is(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Ek=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=is(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Ok(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),jk=function(){function e(t,n){var r=Pk(n);Pv(this,{target:t,contentRect:r})}return e}(),Lk=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Ov,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _r(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Ek(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _r(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new jk(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),jv=typeof WeakMap<"u"?new WeakMap:new Ov,Lv=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=xk.getInstance(),r=new Lk(t,n,this);jv.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Lv.prototype[e]=function(){var t;return(t=jv.get(this))[e].apply(t,arguments)}});var Tk=function(){return typeof va.ResizeObserver<"u"?va.ResizeObserver:Lv}();const _k=Object.freeze(Object.defineProperty({__proto__:null,default:Tk},Symbol.toStringTag,{value:"Module"})),Rk=ey(_k);Object.defineProperty(Za,"__esModule",{value:!0});Za.InnerSlider=void 0;var Me=qi(j),Nk=qi(sv),zk=qi(Ob),Ik=qi(es),de=M,Mk=ns,Dk=rs,np=Tr,Ak=qi(Rk);function qi(e){return e&&e.__esModule?e:{default:e}}function wa(e){"@babel/helpers - typeof";return wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wa(e)}function xa(){return xa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xa.apply(this,arguments)}function Fk(e,t){if(e==null)return{};var n=Hk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Hk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rp(Object(n),!0).forEach(function(r){Y(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Uk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ip(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Bk(e,t,n){return t&&ip(e.prototype,t),n&&ip(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$u(e,t)}function $u(e,t){return $u=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},$u(e,t)}function qk(e){var t=Gk();return function(){var r=Sa(e),i;if(t){var o=Sa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Vk(this,i)}}function Vk(e,t){if(t&&(wa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Q(e)}function Q(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Gk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Sa(e){return Sa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Sa(e)}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Kk=function(e){Wk(n,e);var t=qk(n);function n(r){var i;Uk(this,n),i=t.call(this,r),Y(Q(i),"listRefHandler",function(a){return i.list=a}),Y(Q(i),"trackRefHandler",function(a){return i.track=a}),Y(Q(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var a=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,de.getHeight)(a)+"px"}}),Y(Q(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var a=(0,de.getOnDemandLazySlides)(W(W({},i.props),i.state));a.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}var s=W({listRef:i.list,trackRef:i.track},i.props);i.updateState(s,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new Ak.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),Y(Q(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(a){return clearTimeout(a)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),Y(Q(i),"componentDidUpdate",function(a){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var s=(0,de.getOnDemandLazySlides)(W(W({},i.props),i.state));s.length>0&&(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}i.adaptHeight();var l=W(W({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(a);u&&i.updateState(l,u,function(){i.state.currentSlide>=Me.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Me.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),Y(Q(i),"onWindowResized",function(a){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,zk.default)(function(){return i.resizeWindow(a)},50),i.debouncedResize()}),Y(Q(i),"resizeWindow",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(i.track&&i.track.node);if(s){var l=W(W({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,a,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),Y(Q(i),"updateState",function(a,s,l){var u=(0,de.initializedState)(a);a=W(W(W({},a),u),{},{slideIndex:u.currentSlide});var d=(0,de.getTrackLeft)(a);a=W(W({},a),{},{left:d});var c=(0,de.getTrackCSS)(a);(s||Me.default.Children.count(i.props.children)!==Me.default.Children.count(a.children))&&(u.trackStyle=c),i.setState(u,l)}),Y(Q(i),"ssrInit",function(){if(i.props.variableWidth){var a=0,s=0,l=[],u=(0,de.getPreClones)(W(W(W({},i.props),i.state),{},{slideCount:i.props.children.length})),d=(0,de.getPostClones)(W(W(W({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(P){l.push(P.props.style.width),a+=P.props.style.width});for(var c=0;c<u;c++)s+=l[l.length-1-c],a+=l[l.length-1-c];for(var f=0;f<d;f++)a+=l[f];for(var y=0;y<i.state.currentSlide;y++)s+=l[y];var v={width:a+"px",left:-s+"px"};if(i.props.centerMode){var w="".concat(l[i.state.currentSlide],"px");v.left="calc(".concat(v.left," + (100% - ").concat(w,") / 2 ) ")}return{trackStyle:v}}var C=Me.default.Children.count(i.props.children),g=W(W(W({},i.props),i.state),{},{slideCount:C}),h=(0,de.getPreClones)(g)+(0,de.getPostClones)(g)+C,m=100/i.props.slidesToShow*h,S=100/h,b=-S*((0,de.getPreClones)(g)+i.state.currentSlide)*m/100;i.props.centerMode&&(b+=(100-S*m/100)/2);var $={width:m+"%",left:b+"%"};return{slideWidth:S+"%",trackStyle:$}}),Y(Q(i),"checkImagesLoad",function(){var a=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],s=a.length,l=0;Array.prototype.forEach.call(a,function(u){var d=function(){return++l&&l>=s&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var c=u.onclick;u.onclick=function(){c(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=d,u.onerror=function(){d(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),Y(Q(i),"progressiveLazyLoad",function(){for(var a=[],s=W(W({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,de.getPostClones)(s);l++)if(i.state.lazyLoadedList.indexOf(l)<0){a.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,de.getPreClones)(s);u--)if(i.state.lazyLoadedList.indexOf(u)<0){a.push(u);break}a.length>0?(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),Y(Q(i),"slideHandler",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,d=l.beforeChange,c=l.onLazyLoad,f=l.speed,y=l.afterChange,v=i.state.currentSlide,w=(0,de.slideHandler)(W(W(W({index:a},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!s})),C=w.state,g=w.nextState;if(C){d&&d(v,C.currentSlide);var h=C.lazyLoadedList.filter(function(m){return i.state.lazyLoadedList.indexOf(m)<0});c&&h.length>0&&c(h),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),y&&y(v),delete i.animationEndCallback),i.setState(C,function(){u&&i.asNavForIndex!==a&&(i.asNavForIndex=a,u.innerSlider.slideHandler(a)),g&&(i.animationEndCallback=setTimeout(function(){var m=g.animating,S=Fk(g,["animating"]);i.setState(S,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:m})},10)),y&&y(C.currentSlide),delete i.animationEndCallback})},f))})}}),Y(Q(i),"changeSlide",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=W(W({},i.props),i.state),u=(0,de.changeSlide)(l,a);if(!(u!==0&&!u)&&(s===!0?i.slideHandler(u,s):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var d=i.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),Y(Q(i),"clickHandler",function(a){i.clickable===!1&&(a.stopPropagation(),a.preventDefault()),i.clickable=!0}),Y(Q(i),"keyHandler",function(a){var s=(0,de.keyHandler)(a,i.props.accessibility,i.props.rtl);s!==""&&i.changeSlide({message:s})}),Y(Q(i),"selectHandler",function(a){i.changeSlide(a)}),Y(Q(i),"disableBodyScroll",function(){var a=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=a}),Y(Q(i),"enableBodyScroll",function(){window.ontouchmove=null}),Y(Q(i),"swipeStart",function(a){i.props.verticalSwiping&&i.disableBodyScroll();var s=(0,de.swipeStart)(a,i.props.swipe,i.props.draggable);s!==""&&i.setState(s)}),Y(Q(i),"swipeMove",function(a){var s=(0,de.swipeMove)(a,W(W(W({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));s&&(s.swiping&&(i.clickable=!1),i.setState(s))}),Y(Q(i),"swipeEnd",function(a){var s=(0,de.swipeEnd)(a,W(W(W({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(s){var l=s.triggerSlideHandler;delete s.triggerSlideHandler,i.setState(s),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),Y(Q(i),"touchEnd",function(a){i.swipeEnd(a),i.clickable=!0}),Y(Q(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),Y(Q(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),Y(Q(i),"slickGoTo",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a=Number(a),isNaN(a))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:a,currentSlide:i.state.currentSlide},s)},0))}),Y(Q(i),"play",function(){var a;if(i.props.rtl)a=i.state.currentSlide-i.props.slidesToScroll;else if((0,de.canGoNext)(W(W({},i.props),i.state)))a=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(a)}),Y(Q(i),"autoPlay",function(a){i.autoplayTimer&&clearInterval(i.autoplayTimer);var s=i.state.autoplaying;if(a==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(a==="leave"){if(s==="paused"||s==="focused")return}else if(a==="blur"&&(s==="paused"||s==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),Y(Q(i),"pause",function(a){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var s=i.state.autoplaying;a==="paused"?i.setState({autoplaying:"paused"}):a==="focused"?(s==="hovered"||s==="playing")&&i.setState({autoplaying:"focused"}):s==="playing"&&i.setState({autoplaying:"hovered"})}),Y(Q(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),Y(Q(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),Y(Q(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),Y(Q(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),Y(Q(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),Y(Q(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),Y(Q(i),"render",function(){var a=(0,Ik.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),s=W(W({},i.props),i.state),l=(0,de.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=W(W({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var d;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var c=(0,de.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;c=W(W({},c),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),d=Me.default.createElement(Dk.Dots,c)}var y,v,w=(0,de.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);w.clickHandler=i.changeSlide,i.props.arrows&&(y=Me.default.createElement(np.PrevArrow,w),v=Me.default.createElement(np.NextArrow,w));var C=null;i.props.vertical&&(C={height:i.state.listHeight});var g=null;i.props.vertical===!1?i.props.centerMode===!0&&(g={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(g={padding:i.props.centerPadding+" 0px"});var h=W(W({},C),g),m=i.props.touchMove,S={className:"slick-list",style:h,onClick:i.clickHandler,onMouseDown:m?i.swipeStart:null,onMouseMove:i.state.dragging&&m?i.swipeMove:null,onMouseUp:m?i.swipeEnd:null,onMouseLeave:i.state.dragging&&m?i.swipeEnd:null,onTouchStart:m?i.swipeStart:null,onTouchMove:i.state.dragging&&m?i.swipeMove:null,onTouchEnd:m?i.touchEnd:null,onTouchCancel:i.state.dragging&&m?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},b={className:a,dir:"ltr",style:i.props.style};return i.props.unslick&&(S={className:"slick-list"},b={className:a}),Me.default.createElement("div",b,i.props.unslick?"":y,Me.default.createElement("div",xa({ref:i.listRefHandler},S),Me.default.createElement(Mk.Track,xa({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":v,i.props.unslick?"":d)}),i.list=null,i.track=null,i.state=W(W({},Nk.default),{},{currentSlide:i.props.initialSlide,slideCount:Me.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=W(W({},i.state),o),i}return Bk(n,[{key:"didPropsChange",value:function(i){for(var o=!1,a=0,s=Object.keys(this.props);a<s.length;a++){var l=s[a];if(!i.hasOwnProperty(l)){o=!0;break}if(!(wa(i[l])==="object"||typeof i[l]=="function")&&i[l]!==this.props[l]){o=!0;break}}return o||Me.default.Children.count(this.props.children)!==Me.default.Children.count(i.children)}}]),n}(Me.default.Component);Za.InnerSlider=Kk;var Qk=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},Yk=Qk,Xk=Yk,Jk=function(e){var t=/[height|width]$/;return t.test(e)},op=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=Xk(r),Jk(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},Zk=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=op(n),r<e.length-1&&(t+=", ")}),t):op(e)},e2=Zk,Tv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(j);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(a){return t.default.createElement("ul",{style:{display:"block"}},a)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(a){return t.default.createElement("button",null,a+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(Tv);var Gs,ap;function t2(){if(ap)return Gs;ap=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Gs=e,Gs}var Ks,sp;function _v(){if(sp)return Ks;sp=1;function e(r,i){var o=0,a=r.length,s;for(o;o<a&&(s=i(r[o],o),s!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Ks={isFunction:n,isArray:t,each:e},Ks}var Qs,lp;function n2(){if(lp)return Qs;lp=1;var e=t2(),t=_v().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(a){o.mql=a.currentTarget||a,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,a){if(o.equals(r))return o.destroy(),!i.splice(a,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Qs=n,Qs}var Ys,up;function r2(){if(up)return Ys;up=1;var e=n2(),t=_v(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(a,s,l){var u=this.queries,d=l&&this.browserIsIncapable;return u[a]||(u[a]=new e(a,d)),r(s)&&(s={match:s}),i(s)||(s=[s]),n(s,function(c){r(c)&&(c={match:c}),u[a].addHandler(c)}),this},unregister:function(a,s){var l=this.queries[a];return l&&(s?l.removeHandler(s):(l.clear(),delete this.queries[a])),this}},Ys=o,Ys}var Xs,cp;function i2(){if(cp)return Xs;cp=1;var e=r2();return Xs=new e,Xs}(function(e){function t(E){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},t(E)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(j),r=Za,i=s(e2),o=s(Tv),a=M;function s(E){return E&&E.__esModule?E:{default:E}}function l(){return l=Object.assign||function(E){for(var R=1;R<arguments.length;R++){var N=arguments[R];for(var F in N)Object.prototype.hasOwnProperty.call(N,F)&&(E[F]=N[F])}return E},l.apply(this,arguments)}function u(E,R){var N=Object.keys(E);if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(E);R&&(F=F.filter(function(U){return Object.getOwnPropertyDescriptor(E,U).enumerable})),N.push.apply(N,F)}return N}function d(E){for(var R=1;R<arguments.length;R++){var N=arguments[R]!=null?arguments[R]:{};R%2?u(Object(N),!0).forEach(function(F){b(E,F,N[F])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(N)):u(Object(N)).forEach(function(F){Object.defineProperty(E,F,Object.getOwnPropertyDescriptor(N,F))})}return E}function c(E,R){if(!(E instanceof R))throw new TypeError("Cannot call a class as a function")}function f(E,R){for(var N=0;N<R.length;N++){var F=R[N];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(E,F.key,F)}}function y(E,R,N){return R&&f(E.prototype,R),N&&f(E,N),Object.defineProperty(E,"prototype",{writable:!1}),E}function v(E,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function");E.prototype=Object.create(R&&R.prototype,{constructor:{value:E,writable:!0,configurable:!0}}),Object.defineProperty(E,"prototype",{writable:!1}),R&&w(E,R)}function w(E,R){return w=Object.setPrototypeOf||function(F,U){return F.__proto__=U,F},w(E,R)}function C(E){var R=m();return function(){var F=S(E),U;if(R){var A=S(this).constructor;U=Reflect.construct(F,arguments,A)}else U=F.apply(this,arguments);return g(this,U)}}function g(E,R){if(R&&(t(R)==="object"||typeof R=="function"))return R;if(R!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(E)}function h(E){if(E===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E}function m(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(E){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(N){return N.__proto__||Object.getPrototypeOf(N)},S(E)}function b(E,R,N){return R in E?Object.defineProperty(E,R,{value:N,enumerable:!0,configurable:!0,writable:!0}):E[R]=N,E}var $=(0,a.canUseDOM)()&&i2(),P=function(E){v(N,E);var R=C(N);function N(F){var U;return c(this,N),U=R.call(this,F),b(h(U),"innerSliderRefHandler",function(A){return U.innerSlider=A}),b(h(U),"slickPrev",function(){return U.innerSlider.slickPrev()}),b(h(U),"slickNext",function(){return U.innerSlider.slickNext()}),b(h(U),"slickGoTo",function(A){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return U.innerSlider.slickGoTo(A,O)}),b(h(U),"slickPause",function(){return U.innerSlider.pause("paused")}),b(h(U),"slickPlay",function(){return U.innerSlider.autoPlay("play")}),U.state={breakpoint:null},U._responsiveMediaHandlers=[],U}return y(N,[{key:"media",value:function(U,A){$.register(U,A),this._responsiveMediaHandlers.push({query:U,handler:A})}},{key:"componentDidMount",value:function(){var U=this;if(this.props.responsive){var A=this.props.responsive.map(function(L){return L.breakpoint});A.sort(function(L,B){return L-B}),A.forEach(function(L,B){var q;B===0?q=(0,i.default)({minWidth:0,maxWidth:L}):q=(0,i.default)({minWidth:A[B-1]+1,maxWidth:L}),(0,a.canUseDOM)()&&U.media(q,function(){U.setState({breakpoint:L})})});var O=(0,i.default)({minWidth:A.slice(-1)[0]});(0,a.canUseDOM)()&&this.media(O,function(){U.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(U){$.unregister(U.query,U.handler)})}},{key:"render",value:function(){var U=this,A,O;this.state.breakpoint?(O=this.props.responsive.filter(function(Pe){return Pe.breakpoint===U.state.breakpoint}),A=O[0].settings==="unslick"?"unslick":d(d(d({},o.default),this.props),O[0].settings)):A=d(d({},o.default),this.props),A.centerMode&&(A.slidesToScroll>1,A.slidesToScroll=1),A.fade&&(A.slidesToShow>1,A.slidesToScroll>1,A.slidesToShow=1,A.slidesToScroll=1);var L=n.default.Children.toArray(this.props.children);L=L.filter(function(Pe){return typeof Pe=="string"?!!Pe.trim():!!Pe}),A.variableWidth&&(A.rows>1||A.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),A.variableWidth=!1);for(var B=[],q=null,T=0;T<L.length;T+=A.rows*A.slidesPerRow){for(var z=[],H=T;H<T+A.rows*A.slidesPerRow;H+=A.slidesPerRow){for(var X=[],K=H;K<H+A.slidesPerRow&&(A.variableWidth&&L[K].props.style&&(q=L[K].props.style.width),!(K>=L.length));K+=1)X.push(n.default.cloneElement(L[K],{key:100*T+10*H+K,tabIndex:-1,style:{width:"".concat(100/A.slidesPerRow,"%"),display:"inline-block"}}));z.push(n.default.createElement("div",{key:10*T+H},X))}A.variableWidth?B.push(n.default.createElement("div",{key:T,style:{width:q}},z)):B.push(n.default.createElement("div",{key:T},z))}if(A==="unslick"){var Tt="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:Tt},L)}else B.length<=A.slidesToShow&&(A.unslick=!0);return n.default.createElement(r.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},A),B)}}]),N}(n.default.Component);e.default=P})(av);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(av);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(ov);const os=zu(ov);const o2=x.div`
  margin-right: 1vw;
  width: calc(76vw / 14.4);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 100%;

  @media (max-width: ${k}) {
    width: calc(76vw / 5.08);
    margin-right: 5vw;
  }
`,a2=x.img`
  height: calc(74vw / 14.4);
  width: calc(74vw / 14.4);
  object-fit: contain;

  @media (max-width: ${k}) {
    height: calc(74vw / 5.08);
    width: calc(74vw / 5.08);
  }
`,s2=({slide:e})=>p.jsx(o2,{children:p.jsx(a2,{src:e.src,alt:e.alt})}),l2=x.div`
  margin: 0 2vw;
  width: 69vw;
  position: relative;

  @media (max-width: ${k}) {
    margin: 0 auto;
    width: 100%;
  }
`,dp=({slides:e,size:t})=>{const r={dots:!1,arrows:!1,infinite:!0,slidesToShow:t==="small"?4:11,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1,draggable:!0};return p.jsx(l2,{children:p.jsx(os,{...r,children:e.map(i=>p.jsx(s2,{slide:i},i.id))})})},{whiteColor:Rv,darkGrayColor:u2}=re,c2=x.section`
  width: 100vw;
  box-sizing: border-box;
  ${Vt};
  background-position: center -9.72vw;
  min-height: calc(800vw / 14.4 - 9.72vw);
  padding: 8.26vw 1vw 8.26vw 4.28vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-image: url(${vS.background});
  //border-radius: 0 0 1.6vw 1.6vw;
  border-radius: 0;

  @media (max-width: ${k}) {
    padding: 22vw 0 20.27vw 9vw;
    min-height: 140vw;
    flex-direction: column;
    background-image: none;
    background-color: ${u2};
    border-radius: 0;
    overflow-x: hidden;
  }
`,d2=x.div`
  width: 91vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media (max-width: ${k}) {
    box-sizing: border-box;
    flex-direction: column;
  }
`,f2=x.p`
  ${Hc};
  max-width: 37%;
  margin: 2vw 0 6.18vw;

  @media (max-width: 1400px) {
    max-width: 90%;
    margin: 7.87vw 0 4.3vw;
  }
`,p2=x.p`
  min-width: 22.5vw;
  ${Z};
  ${ce};
  color: ${Rv};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.8px;
  margin: 0 1vw 0 0;
  border-right: 1px solid rgba(255, 255, 255, 0.8);

  @media (max-width: ${k}) {
    align-self: start;
    text-align: start;
    font-size: calc(35vw / 5.8);
    letter-spacing: -0.7px;
    width: 53%;
    border-right: 1px solid rgba(255, 255, 255, 0.8);
    margin: 14.37vw 0 10vw;
  }
`,h2=({availableCurrencies:e})=>{const{title:t,text:n,subtitle:r,coins:i}=e,o=jt();return p.jsxs(c2,{children:[p.jsx(Lt,{color:Rv,children:t}),p.jsx(f2,{children:n}),p.jsxs(d2,{children:[p.jsx(p2,{children:r}),o?p.jsx(dp,{slides:i,size:"small"}):p.jsx(dp,{slides:i,size:"big"})]})]})},g2=x(Sn)`
  color: ${re.whiteColor};
  padding-bottom: 2.57vw;
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: calc(25vw / 14.4);
  line-height: 1.5;

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.09);
    padding-bottom: 0;
  }
`,Jc=({children:e,...t})=>p.jsx(g2,{...t,children:e}),{greenColor:Nv}=re,m2=x.div`
  width: 100%;

  @media (max-width: ${k}) {
    width: 82.41vw;
    margin-right: 7.66vw;
    height: 100%;
    display: flex;
  }
`,v2=x.div`
  margin-top: 2.57vw;
  padding: 0 0 0 6vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 82.25vw;
  ${Fc};
  background-image: url(${Hf.backgroundL});
  border-radius: 30px;

  @media (max-width: ${k}) {
    margin-top: 0;
    padding: 8.86vw 4.53vw;
    justify-content: start;
    flex-direction: column;
    width: 82.41vw;
    height: 100%;
    background-image: url(${Hf.backgroundS});
  }
`,y2=x.p`
  ${Hc};
  margin: 6.74vw 0 2.57vw;

  @media (max-width: ${k}) {
    margin: 12.95vw 0 4.32vw;
  }
`,w2=x.div`
  width: 32vw;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: ${k}) {
    margin: 0 auto;
    width: 70vw;
    box-sizing: border-box;
  }
`,x2=x(ct)`
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${Nv};
  font-size: 1.74vw;
  ${ce};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;

  @media (max-width: ${k}) {
    padding-right: 6vw;
    font-size: 4.91vw;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0.83vw;
    height: 1.04vw;
    background-image: url(${Fn.playIconGreen});
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: ${k}) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`,S2=x(ct)`
  text-decoration: underline;
  width: fit-content;
  background: transparent;
  color: ${Nv};
  font-size: 1.74vw;
  ${ce};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;

  @media (max-width: ${k}) {
    font-size: 4.91vw;
  }
`,b2=x.div`
  height: 20vw;
  width: 40vw;
  padding: 5.24vw 4vw;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  margin: auto;
  display: block;

  @media (max-width: ${k}) {
    margin: 0;
    padding: 6vw 0 0 0;
    height: 30vw;
    width: 70vw;
    object-position: center top;
  }
`,k2=x.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,$2=(e,t)=>{switch(e.id){case Zm:return e.link&&p.jsx(S2,{color:"transparent",href:e.link.href,target:"_blank",rel:"noopener noreferrer",children:e.link.value});case ev:return p.jsx(iv,{links:t});case tv:return e.link&&p.jsx(x2,{color:"transparent",href:e.link.href,target:"_blank",rel:"noopener noreferrer",children:e.link.value});default:return null}},zv=({slide:e,links:t})=>{const n=jt();return p.jsx(m2,{children:p.jsxs(v2,{children:[n&&p.jsx(Jc,{children:e.subtitle}),p.jsxs(w2,{children:[p.jsx(y2,{children:e.textContent}),$2(e,t)]}),p.jsx(b2,{children:p.jsx(k2,{src:e.image.src,alt:e.image.alt})})]})})},C2=x.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,O2=({slides:e,links:t})=>{const n={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return p.jsx(C2,{children:p.jsx(os,{...n,children:e.map(r=>p.jsx(zv,{slide:r,links:t},r.id))})})},P2=x.button`
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
`;function Ke({className:e,children:t,onClick:n,type:r,disabled:i}){return p.jsx(P2,{type:r,className:e,disabled:i,onClick:n,children:t})}const{whiteColor:E2,greenColor:j2}=re,L2=x(Ke)`
  padding: 0 2vw;
  background-color: transparent;
  width: ${({$width:e})=>e};
  border-bottom: 2px solid
    ${({$isActive:e})=>e?j2:E2};
`,T2=({isActive:e,id:t,onClick:n,children:r,width:i})=>p.jsx(L2,{$isActive:e,$width:i,disabled:e,type:"button",onClick:()=>n(t),children:r}),{whiteColor:fp}=re,_2=x.section`
  ${Vt};
  //border-radius: 1.6vw 1.6vw 0 0;
  min-height: calc(901vw / 14.4);
  padding: 4.28vw;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${Af.backgroundL});

  @media (max-width: ${k}) {
    min-height: calc(970vw / 5.08);
    //border-radius: 3.93vw 3.93vw 0 0;
    padding: 14.93vw 0;
    flex-direction: column;
    background-image: url(${Af.backgroundS});
  }
`,R2=x(Lt)`
  width: 80%;
`,N2=x(Wc)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${k}) {
    margin: 1.77vw 0 10.61vw;
  }
`,z2=x.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,I2=({id:e,title:t})=>{const n=jt(),{t:r}=ut(),i=xt("ProductAndService",r),{text:o,slides:a,mobileWallet:s,availableCurrencies:l,videoSlider:u}=i,[d,c]=j.useState(a[0].id),f=w=>{c(w)},y=a.map(w=>w.id),v=a.find(w=>w.id===d);return p.jsxs("section",{id:e,children:[p.jsxs(_2,{children:[p.jsx(R2,{color:fp,children:t}),p.jsx(N2,{color:fp,children:o}),!n&&p.jsx(z2,{children:y.map((w,C)=>{const g=d===w,h=a.find(m=>m.id===w);if(h){const S=[29,29,27,15][C];return p.jsx(T2,{id:h.id,width:`${S}%`,isActive:g,onClick:f,children:p.jsx(Jc,{children:h.subtitle})},h.id)}return null})}),n?p.jsx(O2,{slides:a,links:s.links}):v&&p.jsx(zv,{slide:v,links:s.links})]}),p.jsx(lb,{mobileWallet:s}),p.jsx(h2,{availableCurrencies:l})]})},{whiteColor:M2,greenColor:D2,lightGreenColor:A2}=re,F2=x.div`
  grid-column: 3 / 4;
  width: 100%;
  display: flex;
  justify-content: end;
`,H2=x(Ke)`
  color: transparent;
  padding: 0.8vw 1.7vw 0.8vw 1.7vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    133deg,
    ${D2} 0%,
    ${A2} 100%
  );

  @media (max-width: ${k}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3.5vw 1.7vw 3.5vw 1.7vw;
    margin-top: 10.8vw;
    width: 100%;
  }
`,U2=x.div`
  width: 1.04vw;
  height: 1.18vw;
  background-image: url(${Fn.playIconWhite});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${k}) {
    width: 3.34vw;
    height: 2.95vw;
  }
`,B2=x.span`
  margin-right: 1vw;
  color: ${M2};
  font-size: 1.11vw;
  ${Wi};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.32px;

  @media (max-width: ${k}) {
    margin-right: 4vw;
    font-size: 3.15vw;
  }
`,pp=({text:e})=>{const[t,n]=j.useState(!1),r=Dr(),i=()=>{n(!0),r("/payment-fees"),window.scrollTo({top:0})};return p.jsx(F2,{children:p.jsxs(H2,{type:"button",disabled:t,onClick:i,children:[p.jsx(B2,{children:e}),p.jsx(U2,{})]})})},{lightBlackColor:Iv,blackColor:Mv,darkGreenColor:W2}=re,q2=x.section`
  box-sizing: border-box;
  width: 100vw;
  padding: 5.2vw 4.28vw 6.07vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${k}) {
    padding: 12.37vw 8.25vw 16.89vw 11vw;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
  }
`,hp=x.div`
  margin-bottom: 2.5vw;
  display: grid;
  grid-template-columns: 38% 40% 20%;
  gap: 1vw;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: ${k}) {
    display: flex;
    flex-direction: column;
  }
`,gp=x.div`
  grid-column: 2 / 3;
  width: 100%;
`,V2=x(Lt)`
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

  @media (max-width: ${k}) {
    padding-bottom: 5.09vw;
    margin: 0;
    font-size: 9.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -1px;
  }
`,mp=x(Sn)`
  color: ${Mv};
  font-size: calc(40vw / 14.4);
  line-height: 1.2;
  letter-spacing: -0.8px;

  @media (max-width: ${k}) {
    margin: 9.82vw 0 0 0;
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
  }
`,vp=x.p`
  ${Z};
  ${ce};
  color: ${W2};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.8px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
    margin: 5.1vw 0 3.1vw;
  }
`,G2=x.p`
  ${Z};
  color: ${Mv};
  ${ce};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${k}) {
    margin: 1vw 0;
    width: 80%;
    font-size: calc(20vw / 5.08);
  }
`,K2=({fees:e})=>{const t=jt();return p.jsxs(q2,{children:[p.jsx(V2,{color:Iv,children:e.title}),p.jsxs(hp,{children:[p.jsx(mp,{children:e.lineOne.title}),p.jsxs(gp,{children:[p.jsx(vp,{children:e.lineOne.text.main}),e.lineOne.text.span&&p.jsx(G2,{children:e.lineOne.text.span})]}),!t&&p.jsx(pp,{text:e.lineOne.text.button})]}),p.jsxs(hp,{children:[p.jsx(mp,{children:e.lineTwo.title}),p.jsx(gp,{children:p.jsx(vp,{children:e.lineTwo.text.main})}),t&&p.jsx(pp,{text:e.lineOne.text.button})]})]})},{whiteColor:Zc}=re,Q2=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${k}) {
    width: 80vw;
    min-height: 68.17vw;
    align-items: start;
  }
`,Y2=x.div`
  @media (max-width: ${k}) {
    padding: 7.18vw 0 10.26vw 10vw;
  }
`,X2=x(Jc)`
  @media (max-width: ${k}) {
    width: 100%;
    box-sizing: border-box;
    padding: 9.29vw 1.38vw 5.33vw 12.84vw;
    border-bottom: 1px solid ${Zc};
  }
`,J2=x.img`
  margin-right: 2.15vw;
  width: 2.98vw;
  height: auto;

  @media (max-width: ${k}) {
    width: 12.45vw;
    margin-right: 3.93vw;
  }
`,Z2=x.h4`
  ${Z};
  text-align: left;
  font-size: calc(22vw / 14.4);
  ${Et};
  font-weight: 500;
  line-height: 1.5;
  color: ${Zc};

  @media (max-width: ${k}) {
    font-size: calc(22vw / 5.08);
  }
`,e$=x.p`
  ${Z};
  ${ce};
  color: ${Zc};
  font-size: calc(20vw / 14.05);
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(20vw / 5.08);
  }
`,t$=x.div`
  display: flex;
  flex-direction: row;
  padding-bottom: calc(14vw / 14.4);

  @media (max-width: ${k}) {
    padding-bottom: calc(24vw / 5.08);
  }
`,Dv=({slide:e,subtitle:t})=>{const{image:n,title:r,text:i}=e,o=jt();return p.jsxs(Q2,{children:[o&&p.jsx(X2,{children:t}),p.jsxs(Y2,{children:[p.jsxs(t$,{children:[p.jsx(J2,{src:n.src,alt:n.alt}),p.jsx(Z2,{children:r})]}),p.jsx(e$,{children:i})]})]})},n$=x(Ke)`
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
`,r$=({children:e,className:t,currentSlide:n,slideCount:r,top:i,left:o,right:a,...s})=>{const l={className:t,onClick:s.onClick||(()=>console.log("onClick")),type:"button",disabled:!1};return p.jsxs(n$,{...l,$top:i,$left:o,$right:a,...s,children:[e,!n||!r]})},i$=x.img`
  @media (${k}) {
    border-radius: 50%;
    width: 8.82vw;
    height: 8.82vw};
  }
`,o$=x.div`
  height: 100%;
  background-image: url(${yS.background});
  background-repeat: no-repeat;
  background-size: cover;
`,a$=({slides:e,subtitle:t,photoSlideArrowRight:n})=>{const r={dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,swipe:!1,variableWidth:!0,centerMode:!1,prevArrow:p.jsx(p.Fragment,{}),nextArrow:p.jsx(r$,{className:"arrow next",top:"12.5%",right:"9%",children:p.jsx(i$,{src:n.src,alt:n.alt})})};return p.jsx(o$,{children:p.jsx(os,{...r,children:e.map(i=>p.jsx(Dv,{subtitle:t,slide:i},i.id))})})},{whiteColor:jn,greenColor:s$}=re,l$=x.div`
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  margin-bottom: ${({size:e})=>e==="big"?"calc(42vw / 14.4)":"calc(60vw / 14.4)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 2px solid ${jn};

  &:nth-child(2n) {
    border-bottom: ${({size:e})=>e==="big"?"none":`2px solid ${jn}`};
  }

  @media (max-width: ${k}) {
    margin-bottom: calc(49vw / 5.08);
    border-bottom: ${({size:e})=>e==="small"?"none":`2px solid ${jn}`};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
    margin-left: ${({size:e})=>e==="small"?"8.46vw":"0"};

    &:nth-child(2n) {
      border-bottom: ${({size:e})=>e==="big"?`2px solid ${jn}`:"none"};
    }
  }
`,u$=x.div`
  margin: ${({size:e})=>e==="big"?"2vw 0 0.71vw":"1vw 0 1vw"};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  @media (max-width: ${k}) {
    margin: ${({size:e})=>e==="big"?"calc(45vw / 5.09) 0 calc(12vw / 5.09)":"calc(12vw / 5.09) 0 calc(12vw / 5.09)"};
  }
`,Av=x.p`
  ${Z};
  ${ce};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.09);
  }
`,c$=x(Av)`
  padding-right: 3vw;
  color: ${s$};
`,d$=x(Av)`
  color: ${jn};
`,f$=x(Sn)`
  width: 100%;
  margin-bottom: calc(6.58vw / 14.4);
  color: ${jn};
  font-size: ${({size:e})=>e==="big"?"calc(35vw / 14.4)":"calc(28vw / 14.4)"};
  line-height: 1.2;
  letter-spacing: -0.7px;
  text-align: left;

  @media (max-width: ${k}) {
    margin-bottom: 0;
    font-size: ${({size:e})=>e==="big"?"calc(30vw / 5.09)":"calc(23vw / 5.09)"};
    letter-spacing: -0.6px;
  }
`,p$=x.p`
  ${Z};
  ${ce};
  margin: 0.21vw 0 3.26vw;
  font-size: calc(25vw / 14.4);
  color: ${jn};
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

  @media (max-width: ${k}) {
    margin: 3vw 0 9.84vw;
    font-size: calc(25vw / 5.09);
  }
`,h$=x.img`
  height: ${({size:e})=>e==="big"?"calc(268vw / 14.4)":"calc(154vw / 14.4)"};
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${k}) {
    height: ${({size:e})=>e==="big"?"calc(184vw / 5.08)":"calc(148vw / 5.08)"};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
  }
`,Cu=({slide:e,size:t})=>{const n=Dr(),r=()=>{n(`/news/${e.id}`)};return p.jsxs(l$,{size:t,onClick:r,children:[p.jsx(h$,{size:t,src:e.url,alt:e.title}),p.jsxs(u$,{size:t,children:[p.jsx(c$,{children:e.span}),p.jsx(d$,{children:e.date})]}),p.jsx(f$,{size:t,children:e.title}),t==="big"&&p.jsx(p$,{size:t,children:e.text})]})},g$=x.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,m$=({slides:e,size:t})=>{const n={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return p.jsx(g$,{children:p.jsx(os,{...n,children:e.map(r=>p.jsx(Cu,{slide:r,size:t},r.id))})})},Ou=[{id:"1",date:"01.01.2001",url:"https://picsum.photos/400/300",views:1,rating:5,span:"Corporate News",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.

Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.

Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.`},{id:"2",date:"02.02.2002",url:"https://picsum.photos/400/300",views:0,rating:4,span:"Corporate News",title:"Title 2",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.

Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.`},{id:"3",date:"03.03.2003",url:"https://picsum.photos/400/300",views:1,rating:0,span:"Corporate News",title:"Title 3",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.

Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.

Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.`},{id:"4",date:"04.04.2004",url:"https://picsum.photos/400/300",views:0,rating:0,span:"Corporate News",title:"Title 4",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.

Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.

Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.`},{id:"5",date:"05.05.2005",url:"https://picsum.photos/400/300",span:"Corporate News",views:0,rating:4,title:"Title 5",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.

Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.

Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.`},{id:"6",date:"06.06.2006",url:"https://picsum.photos/400/300",span:"Corporate News",views:0,rating:4,title:"Title 6",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.

Sed feugiat hendrerit libero, ac tincidunt urna venenatis nec. Quisque euismod tincidunt sollicitudin. Sed malesuada urna sit amet diam efficitur tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius erat at ex accumsan, id fringilla tellus pellentesque. Sed sed enim quis elit vestibulum laoreet sed a nunc. Quisque suscipit consectetur sapien ut ultrices. Sed ac justo interdum, pellentesque neque eu, ultrices ex. Nullam tincidunt hendrerit quam, ac interdum elit gravida nec. Donec cursus erat a varius vestibulum. Aliquam id venenatis metus.

Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.`}],{whiteColor:v$,greenColor:y$}=re,w$=x.div`
  box-sizing: border-box;
  width: 100vw;
  padding-bottom: 5vw;
  min-height: calc(1317vw / 14.4);
  background-image: url(${Uf.backgroundL});
  ${Vt};
  border-radius: 1.6vw;

  @media (max-width: ${k}) {
    padding-bottom: 10vw;
    background-image: url(${Uf.backgroundL});
    min-height: calc(1441vw / 5.08);
    border-radius: 3.93vw;
  }
`,x$=x.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${k}) {
    flex-direction: column;
  }
`,S$=x.div`
  padding: 5.06vw 3.92vw;
  display: flex;
  flex-direction: row;
  align-items: end;

  @media (max-width: ${k}) {
    padding: 14vw 3.56vw 7.34vw;
  }
`,b$=x(ct)`
  visibility: hidden;
  margin-left: 3.54vw;
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${y$};
  font-size: 1.74vw;
  ${ce};
  font-style: normal;
  font-weight: 400;
  line-height: 2.2;
  letter-spacing: -0.5px;

  @media (max-width: ${k}) {
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
    background-image: url(${Fn.playIconGreen});
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: ${k}) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`,k$=x.div`
  width: calc(696vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${k}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`,$$=x.div`
  width: calc(414vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${k}) {
    width: 100%;
  }
`,C$=({news:e})=>{const{title:t,link:n}=e,r=Ou,i=jt(),o=r.slice(0,2),a=r.slice(2,5);return p.jsxs(w$,{children:[p.jsxs(S$,{children:[p.jsx(Lt,{color:v$,children:t}),p.jsx(b$,{color:"transparent",href:n.href,target:"_blank",rel:"noopener noreferrer",children:n.value})]}),p.jsxs(x$,{children:[p.jsx(k$,{children:o.map(s=>p.jsx(Cu,{slide:s,size:"big"},s.id))}),i?p.jsx(m$,{slides:a,size:"small"}):p.jsx($$,{children:a.map(s=>p.jsx(Cu,{slide:s,size:"small"},s.id))})]})]})},{deepColor:fi,darkGreenColor:Pu}=re,O$=x.section`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 10.9vw 4.28vw;

  @media (max-width: ${k}) {
    flex-direction: column;
    padding: 12vw 8.01vw 19.1vw;
  }
`,P$=x(Lt)`
  padding: 3.13vw 0 1.8vw;
  align-self: start;
  text-align: left;

  @media (max-width: ${k}) {
    flex-direction: column;
    padding: 0 0 7.28vw;
  }
`,Js=x.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 31.94vw;

  @media (max-width: ${k}) {
    min-width: 100%;
  }
`,yp=x.div`
  min-height: 25.69vw;
  display: flex;
  flex-direction: column;
  max-width: 31.94vw;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${k}) {
    min-width: 100%;
  }
`,Zs=x.p`
  width: 25vw;
  ${Z};
  font-size: calc(25vw / 14.4);
  ${ce};
  color: ${fi};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;
  @media (max-width: ${k}) {
    width: 100%;
    padding: 2.56vw 0 5.5vw;
  }

  &:first-child,
  &.custom-first {
    width: 30.76vw;
    @media (max-width: ${k}) {
      width: 100%;
    }
  }

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.08);
  }
`,wp=x.img`
  width: auto;
  height: calc(58vw / 14.4);
  @media (max-width: ${k}) {
    height: calc(58vw / 5.08);
    margin: 12vw 0 4.92vw;
  }
`,xp=x(Sn)`
  padding: 1.39vw 0 0.1vw 0;
  color: ${fi};
  font-size: calc(30vw / 14.4);
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(30vw / 5.08);
  }
`,Sp=x(ct)`
  color: ${Pu};
  ${Z};
  ${ce};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-decoration-line: underline;

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.08);
  }
`,E$=({questions:e})=>p.jsxs(O$,{children:[p.jsxs(Js,{children:[p.jsx(P$,{color:fi,children:e.title}),p.jsx(Zs,{className:"custom-first",children:e.text})]}),p.jsxs(yp,{children:[p.jsxs(Js,{children:[p.jsx(wp,{src:go.existingClient.src,alt:go.existingClient.alt}),p.jsx(xp,{children:e.existing.title}),p.jsx(Zs,{color:fi,children:e.existing.text})]}),p.jsx(Sp,{href:e.new.href,target:"_blank",rel:"noopener noreferrer",color:Pu,children:e.existing.linkName})]}),p.jsxs(yp,{children:[p.jsxs(Js,{children:[p.jsx(wp,{src:go.newClient.src,alt:go.newClient.alt}),p.jsx(xp,{children:e.new.title}),p.jsx(Zs,{color:fi,children:e.new.text})]}),p.jsx(Sp,{href:e.new.href,target:"_blank",rel:"noopener noreferrer",color:Pu,children:e.new.linkName})]})]}),{whiteColor:bp}=re,j$=x.section`
  box-sizing: border-box;
  width: 100vw;
  min-height: calc(850vw / 14.4);
  padding: 4.28vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${cu.backgroundL});
  ${Vt};
  //border-radius: 1.6vw;
  border-radius: 0 0 1.6vw 1.6vw;

  @media (max-width: ${k}) {
    padding: 14.17vw 0 12.4vw 0;
    box-sizing: border-box;
    min-height: 138.78vw;
    justify-content: space-between;
    flex-direction: column;
    background-image: url(${cu.backgroundS});
    //border-radius: 3.93vw;
    border-radius: 0 0 3.93vw 3.93vw;
  }
`,L$=x.div`
  width: 100%;
`,T$=x(Wc)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${k}) {
    margin: 1.76vw 0 0;
  }
`,_$=x.div`
  margin-top: 2.57vw;
  padding: 4.93vw 6.25vw;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vw;
  width: 88.47vw;
  min-height: 37.15vw;
  ${Fc};
  background-image: url(${cu.slide});
  border-radius: 30px;

  @media (max-width: ${k}) {
    display: block;
    padding: 0;
    background-image: none;
  }
`,R$=({id:e,title:t})=>{const{t:n}=ut(),r=xt("UseCasesOfOurProducts",n),{text:i,subtitle:o,slides:a,photoSlideArrowRight:s,fees:l,news:u,questions:d}=r,c=jt();return p.jsxs("section",{id:e,children:[p.jsxs(j$,{children:[p.jsxs(L$,{children:[p.jsx(Lt,{color:bp,children:t}),p.jsx(T$,{color:bp,children:i})]}),p.jsx(_$,{children:c?p.jsx(a$,{subtitle:o,slides:a,photoSlideArrowRight:s}):a.map(f=>p.jsx(Dv,{subtitle:o,slide:f},f.id))})]}),p.jsx(K2,{fees:l}),p.jsx(C$,{news:u}),p.jsx(E$,{questions:d})]})},N$=({mainScreenRef:e,sections:t})=>p.jsxs(p.Fragment,{children:[p.jsx(jS,{ref:e}),t.map(n=>n.id===Ym?p.jsx(XS,{id:n.id,title:n.title},n.id):n.id===Xm?p.jsx(I2,{id:n.id,title:n.title},n.id):n.id===Jm?p.jsx(R$,{id:n.id,title:n.title},n.id):null)]}),{ratesFeesColor:z$,navigateLinkColor:I$}=re,M$=x.div`
  padding-left: 5.4vw;
  background-color: ${z$};
  display: flex;
  flex-direction: row;
  align-items: start;

  @media (max-width: ${k}) {
    padding-left: 6.4vw;
  }
`,D$=x(Ke)`
  background-color: transparent;
`,el=x.p`
  ${Z};
  margin-right: 0.2vw;
  ${ce};
  color: ${I$};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 2;

  @media (max-width: ${k}) {
    margin-right: 1vw;
    font-size: calc(15vw / 5.09);
  }
`,Fv=({navigation:e})=>{const{button:t,separator:n,location:r}=e,[i,o]=j.useState(!1),a=Dr(),s=()=>{o(!0),a("/")};return p.jsxs(M$,{children:[p.jsx(D$,{type:"button",disabled:i,onClick:s,children:p.jsx(el,{children:t})}),p.jsx(el,{children:n}),p.jsx(el,{children:r})]})},{ratesFeesColor:A$,darkGreenColor:Eu,blackColor:F$,whiteColor:H$}=re,U$=x.div`
  margin: 0 6.25vw 4.58vw 3.23vw;
  display: flex;
  flex-direction: column;

  @media (max-width: ${k}) {
    margin: 0 6.25vw 4.58vw 4.5vw;
  }
`,B$=x.div`
  padding: 2.22vw 0 4.86vw 2.78vw;
  border-top: 1px solid ${Eu};
  border-left: 1px solid ${Eu};
`,W$=x.div`
  display: flex;
  justify-content: space-between;
`,q$=x.p`
  width: calc(270vw / 14.4);
  ${Uc};
  ${ce};

  @media (max-width: ${k}) {
    min-width: calc(210vw / 5.09);
  }
`,V$=x.span`
  margin-left: 1vw;
  text-align: left;
  min-width: calc(90vw / 14.4);
  ${Uc};
  ${ce};

  @media (max-width: ${k}) {
    min-width: calc(70vw / 5.09);
  }
`,G$=x.span`
  text-align: center;
  min-width: calc(180vw / 14.4);
  ${Uc}
  ${Et};

  @media (max-width: ${k}) {
    min-width: calc(140vw / 5.09);
  }
`,K$=x.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  &:nth-child(odd) {
    background-color: ${A$};
  }
`,Q$=x(Sn)`
  margin: 0 0 1.18vw 2.7vw;
  color: ${Eu};
  ${Et};
  text-align: left;
  font-size: calc(30vw / 14.4);
  font-style: normal;
  font-weight: 400;

  @media (max-width: ${k}) {
    font-size: calc(30vw / 5.09);
  }
`,Y$=x(ct)`
  margin-top: 2.26vw;
  display: inline-block;
  ${Et};
  padding: 0.8vw 5.5vw 0.8vw 2.5vw;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  width: fit-content;
  color: ${H$};
  text-align: center;
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  background-color: ${F$};

  &:after {
    content: "";
    position: absolute;
    width: calc(19vw / 14.4);
    height: calc(15.5vw / 14.4);
    background-image: url(${Fn.playIconWhite});
    background-repeat: no-repeat;
    background-size: contain;
    right: 1vw;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: ${k}) {
    padding: 1.5vw 6vw 1.5vw 3vw;
    font-size: calc(17vw / 5.09);

    &:after {
      content: "";
      position: absolute;
      width: calc(12vw / 5.09);
      height: calc(10.5vw / 5.09);
      background-image: url(${Fn.playIconWhite});
      background-repeat: no-repeat;
      background-size: contain;
      right: 1vw;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`,kp=({rates:e})=>p.jsxs(U$,{children:[p.jsx(Q$,{children:e.subtitle}),p.jsxs(B$,{children:[Object.keys(e).map(t=>{const n=e[t];return typeof n=="string"?null:p.jsxs(K$,{children:[p.jsx(q$,{children:n.text}),p.jsx("div",{children:n.percent&&n.percent.map((r,i)=>p.jsxs(W$,{children:[p.jsx(V$,{children:r}),n.span&&n.span[i]&&p.jsx(G$,{children:n.span[i]})]},i))})]},t)}),p.jsx(Y$,{color:"transparent",href:e.linkHref,target:"_blank",rel:"noopener noreferrer",children:e.linkLabel})]})]}),{lightBlackColor:X$}=re,J$=x.main`
  width: 100vw;
`,Z$=x.div`
  display: flex;
  flex-direction: column;
`,eC=x.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,tC=x(Lt)`
  margin: 3.33vw 5.4vw 4.51vw;
  text-align: start;

  @media (max-width: ${k}) {
    margin: 3.33vw 6.4vw 4.51vw;
  }
`,nC=j.forwardRef((e,t)=>{const{t:n}=ut(),r=xt("PaymentFees",n),{title:i,individual:o,enterprise:a,navigation:s}=r;return p.jsxs(J$,{ref:t,children:[p.jsx(Fv,{navigation:s}),p.jsxs(Z$,{children:[p.jsx(tC,{color:X$,children:i}),p.jsxs(eC,{children:[p.jsx(kp,{rates:o}),p.jsx(kp,{rates:a})]})]})]})}),rC=P1`
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
`,{darkGreenColor:iC,lightBlackColor:oC,notFoundColor:aC,headerColor:sC,whiteColor:lC}=re,uC=x.main`
  width: 100vw;
`,cC=x.div`
  padding: 3.5vw 0 7.15vw;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,dC=x.h1`
  ${Z};
  ${Wi};
  color: ${iC};
  text-align: center;
  font-size: calc(150vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -3px;

  @media (max-width: ${k}) {
    font-size: calc(70vw / 5.09);
  }
`,fC=x(Lt)`
  font-size: calc(70vw / 14.4);
  letter-spacing: -1.4px;
  text-transform: capitalize;

  @media (max-width: ${k}) {
    font-size: calc(35vw / 5.09);
  }
`,pC=x.img`
  width: 100%;
  height: auto;
`,hC=x.p`
  ${Z};
  padding-bottom: 2.99vw;
  ${Et};
  color: ${aC};
  text-align: center;
  font-size: calc(25vw / 14.04);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-transform: lowercase;

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.09);
  }
`,gC=x(Ke)`
  ${Z};
  padding: 0.6vw 8.5vw;
  ${Et};
  background-color: ${sC};
  color: ${lC};
  text-align: center;
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.6px;

  @media (max-width: ${k}) {
    font-size: calc(20vw / 5.09);
  }
`,Hv=j.forwardRef((e,t)=>{const n=Dr(),[r,i]=j.useState(!1),{t:o}=ut(),a=xt("NotFound",o),{navigation:s,title:l,subtitle:u,image:d,text:c,button:f}=a,y=()=>{i(!0),n("/")};return p.jsxs(uC,{ref:t,children:[p.jsx(Fv,{navigation:s}),p.jsxs(cC,{children:[p.jsx(dC,{children:l}),p.jsx(fC,{color:oC,children:u}),p.jsx(pC,{src:d.src,alt:d.alt}),p.jsx(hC,{children:c}),p.jsx(gC,{type:"button",disabled:r,onClick:y,children:f})]})]})}),mC={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class ba{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||mC,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new ba(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new ba(this.logger,t)}}var Ct=new ba;class as{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[t]&&[].concat(this.observers[t]).forEach(a=>{a(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(a=>{a.apply(a,[t,...r])})}}function Qr(){let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n}function $p(e){return e==null?"":""+e}function vC(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function ed(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function i(){return!e||typeof e=="string"}const o=typeof t!="string"?[].concat(t):t.split(".");for(;o.length>1;){if(i())return{};const a=r(o.shift());!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return i()?{}:{obj:e,k:r(o.shift())}}function Cp(e,t,n){const{obj:r,k:i}=ed(e,t,Object);r[i]=n}function yC(e,t,n,r){const{obj:i,k:o}=ed(e,t,Object);i[o]=i[o]||[],r&&(i[o]=i[o].concat(n)),r||i[o].push(n)}function ka(e,t){const{obj:n,k:r}=ed(e,t);if(n)return n[r]}function wC(e,t,n){const r=ka(e,n);return r!==void 0?r:ka(t,n)}function Uv(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):Uv(e[r],t[r],n):e[r]=t[r]);return e}function Vn(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var xC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function SC(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>xC[t]):e}const bC=[" ",",","?","!",";"];function kC(e,t,n){t=t||"",n=n||"";const r=bC.filter(a=>t.indexOf(a)<0&&n.indexOf(a)<0);if(r.length===0)return!0;const i=new RegExp(`(${r.map(a=>a==="?"?"\\?":a).join("|")})`);let o=!i.test(e);if(!o){const a=e.indexOf(n);a>0&&!i.test(e.substring(0,a))&&(o=!0)}return o}function $a(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let i=e;for(let o=0;o<r.length;++o){if(!i||typeof i[r[o]]=="string"&&o+1<r.length)return;if(i[r[o]]===void 0){let a=2,s=r.slice(o,o+a).join(n),l=i[s];for(;l===void 0&&r.length>o+a;)a++,s=r.slice(o,o+a).join(n),l=i[s];if(l===void 0)return;if(l===null)return null;if(t.endsWith(s)){if(typeof l=="string")return l;if(s&&typeof l[s]=="string")return l[s]}const u=r.slice(o+a).join(n);return u?$a(l,u,n):void 0}i=i[r[o]]}return i}function Ca(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class Op extends as{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,a=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let s=[t,n];r&&typeof r!="string"&&(s=s.concat(r)),r&&typeof r=="string"&&(s=s.concat(o?r.split(o):r)),t.indexOf(".")>-1&&(s=t.split("."));const l=ka(this.data,s);return l||!a||typeof r!="string"?l:$a(this.data&&this.data[t]&&this.data[t][n],r,o)}addResource(t,n,r,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let s=[t,n];r&&(s=s.concat(a?r.split(a):r)),t.indexOf(".")>-1&&(s=t.split("."),i=n,n=s[1]),this.addNamespaces(n),Cp(this.data,s,i),o.silent||this.emit("added",t,n,r,i)}addResources(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in r)(typeof r[o]=="string"||Object.prototype.toString.apply(r[o])==="[object Array]")&&this.addResource(t,n,o,r[o],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},s=[t,n];t.indexOf(".")>-1&&(s=t.split("."),i=r,r=n,n=s[1]),this.addNamespaces(n);let l=ka(this.data,s)||{};i?Uv(l,r,o):l={...l,...r},Cp(this.data,s,l),a.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var Bv={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(o=>{this.processors[o]&&(t=this.processors[o].process(t,n,r,i))}),t}};const Pp={};class Oa extends as{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),vC(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ct.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const a=r&&t.indexOf(r)>-1,s=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!kC(t,r,i);if(a&&!s){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:o};const u=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(u[0])>-1)&&(o=u.shift()),t=u.join(i)}return typeof o=="string"&&(o=[o]),{key:t,namespaces:o}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:a,namespaces:s}=this.extractFromKey(t[t.length-1],n),l=s[s.length-1],u=n.lng||this.language,d=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(d){const S=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${S}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l}:`${l}${S}${a}`}return i?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l}:a}const c=this.resolve(t,n);let f=c&&c.res;const y=c&&c.usedKey||a,v=c&&c.exactUsedKey||a,w=Object.prototype.toString.apply(f),C=["[object Number]","[object Function]","[object RegExp]"],g=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,h=!this.i18nFormat||this.i18nFormat.handleAsObject;if(h&&f&&(typeof f!="string"&&typeof f!="boolean"&&typeof f!="number")&&C.indexOf(w)<0&&!(typeof g=="string"&&w==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const S=this.options.returnedObjectHandler?this.options.returnedObjectHandler(y,f,{...n,ns:s}):`key '${a} (${this.language})' returned an object instead of string.`;return i?(c.res=S,c):S}if(o){const S=w==="[object Array]",b=S?[]:{},$=S?v:y;for(const P in f)if(Object.prototype.hasOwnProperty.call(f,P)){const E=`${$}${o}${P}`;b[P]=this.translate(E,{...n,joinArrays:!1,ns:s}),b[P]===E&&(b[P]=f[P])}f=b}}else if(h&&typeof g=="string"&&w==="[object Array]")f=f.join(g),f&&(f=this.extendTranslation(f,t,n,r));else{let S=!1,b=!1;const $=n.count!==void 0&&typeof n.count!="string",P=Oa.hasDefaultValue(n),E=$?this.pluralResolver.getSuffix(u,n.count,n):"",R=n.ordinal&&$?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",N=n[`defaultValue${E}`]||n[`defaultValue${R}`]||n.defaultValue;!this.isValidLookup(f)&&P&&(S=!0,f=N),this.isValidLookup(f)||(b=!0,f=a);const U=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&b?void 0:f,A=P&&N!==f&&this.options.updateMissing;if(b||S||A){if(this.logger.log(A?"updateKey":"missingKey",u,l,a,A?N:f),o){const q=this.resolve(a,{...n,keySeparator:!1});q&&q.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let O=[];const L=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&L&&L[0])for(let q=0;q<L.length;q++)O.push(L[q]);else this.options.saveMissingTo==="all"?O=this.languageUtils.toResolveHierarchy(n.lng||this.language):O.push(n.lng||this.language);const B=(q,T,z)=>{const H=P&&z!==f?z:U;this.options.missingKeyHandler?this.options.missingKeyHandler(q,l,T,H,A,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(q,l,T,H,A,n),this.emit("missingKey",q,l,T,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&$?O.forEach(q=>{this.pluralResolver.getSuffixes(q,n).forEach(T=>{B([q],a+T,n[`defaultValue${T}`]||N)})}):B(O,a,N))}f=this.extendTranslation(f,t,n,c,r),b&&f===a&&this.options.appendNamespaceToMissingKey&&(f=`${l}:${a}`),(b||S)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,S?f:void 0):f=this.options.parseMissingKeyHandler(f))}return i?(c.res=f,c):f}extendTranslation(t,n,r,i,o){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(u){const f=t.match(this.interpolator.nestingRegexp);d=f&&f.length}let c=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(c={...this.options.interpolation.defaultVariables,...c}),t=this.interpolator.interpolate(t,c,r.lng||this.language,r),u){const f=t.match(this.interpolator.nestingRegexp),y=f&&f.length;d<y&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var f=arguments.length,y=new Array(f),v=0;v<f;v++)y[v]=arguments[v];return o&&o[0]===y[0]&&!r.context?(a.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`),null):a.translate(...y,n)},r)),r.interpolation&&this.interpolator.reset()}const s=r.postProcess||this.options.postProcess,l=typeof s=="string"?[s]:s;return t!=null&&l&&l.length&&r.applyPostProcessor!==!1&&(t=Bv.handle(l,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:i,...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,o,a,s;return typeof t=="string"&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(l,n),d=u.key;i=d;let c=u.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const f=n.count!==void 0&&typeof n.count!="string",y=f&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),v=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",w=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);c.forEach(C=>{this.isValidLookup(r)||(s=C,!Pp[`${w[0]}-${C}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&(Pp[`${w[0]}-${C}`]=!0,this.logger.warn(`key "${i}" for languages "${w.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(g=>{if(this.isValidLookup(r))return;a=g;const h=[d];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(h,d,g,C,n);else{let S;f&&(S=this.pluralResolver.getSuffix(g,n.count,n));const b=`${this.options.pluralSeparator}zero`,$=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(h.push(d+S),n.ordinal&&S.indexOf($)===0&&h.push(d+S.replace($,this.options.pluralSeparator)),y&&h.push(d+b)),v){const P=`${d}${this.options.contextSeparator}${n.context}`;h.push(P),f&&(h.push(P+S),n.ordinal&&S.indexOf($)===0&&h.push(P+S.replace($,this.options.pluralSeparator)),y&&h.push(P+b))}}let m;for(;m=h.pop();)this.isValidLookup(r)||(o=m,r=this.getResource(g,C,m,n))}))})}),{res:r,usedKey:i,exactUsedKey:o,usedLng:a,usedNS:s}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function tl(e){return e.charAt(0).toUpperCase()+e.slice(1)}class Ep{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ct.create("languageUtils")}getScriptPartFromCode(t){if(t=Ca(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=Ca(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=tl(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=tl(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=tl(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&o.indexOf(i)===0)return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],o=a=>{a&&(this.isSupportedCode(a)?i.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):typeof t=="string"&&o(this.formatLanguageCode(t)),r.forEach(a=>{i.indexOf(a)<0&&o(this.formatLanguageCode(a))}),i}}let $C=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],CC={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}};const OC=["v1","v2","v3"],PC=["v4"],jp={zero:0,one:1,two:2,few:3,many:4,other:5};function EC(){const e={};return $C.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:CC[t.fc]}})}),e}class jC{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=Ct.create("pluralResolver"),(!this.options.compatibilityJSON||PC.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=EC()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Ca(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,o)=>jp[i]-jp[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?o():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!OC.includes(this.options.compatibilityJSON)}}function Lp(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=wC(e,t,n);return!o&&i&&typeof n=="string"&&(o=$a(e,n,r),o===void 0&&(o=$a(t,n,r))),o}class LC{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ct.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:SC,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?Vn(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?Vn(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?Vn(n.nestingPrefix):n.nestingPrefixEscaped||Vn("$t("),this.nestingSuffix=n.nestingSuffix?Vn(n.nestingSuffix):n.nestingSuffixEscaped||Vn(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,i){let o,a,s;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(v){return v.replace(/\$/g,"$$$$")}const d=v=>{if(v.indexOf(this.formatSeparator)<0){const h=Lp(n,l,v,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(h,void 0,r,{...i,...n,interpolationkey:v}):h}const w=v.split(this.formatSeparator),C=w.shift().trim(),g=w.join(this.formatSeparator).trim();return this.format(Lp(n,l,C,this.options.keySeparator,this.options.ignoreJSONStructure),g,r,{...i,...n,interpolationkey:C})};this.resetRegExp();const c=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,f=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:v=>u(v)},{regex:this.regexp,safeValue:v=>this.escapeValue?u(this.escape(v)):u(v)}].forEach(v=>{for(s=0;o=v.regex.exec(t);){const w=o[1].trim();if(a=d(w),a===void 0)if(typeof c=="function"){const g=c(t,o,i);a=typeof g=="string"?g:""}else if(i&&Object.prototype.hasOwnProperty.call(i,w))a="";else if(f){a=o[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${t}`),a="";else typeof a!="string"&&!this.useRawValueToEscape&&(a=$p(a));const C=v.safeValue(a);if(t=t.replace(o[0],C),f?(v.regex.lastIndex+=a.length,v.regex.lastIndex-=o[0].length):v.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,a;function s(l,u){const d=this.nestingOptionsSeparator;if(l.indexOf(d)<0)return l;const c=l.split(new RegExp(`${d}[ ]*{`));let f=`{${c[1]}`;l=c[0],f=this.interpolate(f,a);const y=f.match(/'/g),v=f.match(/"/g);(y&&y.length%2===0&&!v||v.length%2!==0)&&(f=f.replace(/'/g,'"'));try{a=JSON.parse(f),u&&(a={...u,...a})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,w),`${l}${d}${f}`}return delete a.defaultValue,l}for(;i=this.nestingRegexp.exec(t);){let l=[];a={...r},a=a.replace&&typeof a.replace!="string"?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let u=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const d=i[1].split(this.formatSeparator).map(c=>c.trim());i[1]=d.shift(),l=d,u=!0}if(o=n(s.call(this,i[1].trim(),a),a),o&&i[0]===t&&typeof o!="string")return o;typeof o!="string"&&(o=$p(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),u&&(o=l.reduce((d,c)=>this.format(d,c,r.lng,{...r,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}function TC(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(a=>{if(!a)return;const[s,...l]=a.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,"");n[s.trim()]||(n[s.trim()]=u),u==="false"&&(n[s.trim()]=!1),u==="true"&&(n[s.trim()]=!0),isNaN(u)||(n[s.trim()]=parseInt(u,10))})}return{formatName:t,formatOptions:n}}function Gn(e){const t={};return function(r,i,o){const a=i+JSON.stringify(o);let s=t[a];return s||(s=e(Ca(i),o),t[a]=s),s(r)}}class _C{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ct.create("formatter"),this.options=t,this.formats={number:Gn((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return o=>i.format(o)}),currency:Gn((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return o=>i.format(o)}),datetime:Gn((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return o=>i.format(o)}),relativetime:Gn((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return o=>i.format(o,r.range||"day")}),list:Gn((n,r)=>{const i=new Intl.ListFormat(n,{...r});return o=>i.format(o)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=Gn(n)}format(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((s,l)=>{const{formatName:u,formatOptions:d}=TC(l);if(this.formats[u]){let c=s;try{const f=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},y=f.locale||f.lng||i.locale||i.lng||r;c=this.formats[u](s,y,{...d,...i,...f})}catch(f){this.logger.warn(f)}return c}else this.logger.warn(`there was no format function for ${u}`);return s},t)}}function RC(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class NC extends as{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=Ct.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(t,n,r,i){const o={},a={},s={},l={};return t.forEach(u=>{let d=!0;n.forEach(c=>{const f=`${u}|${c}`;!r.reload&&this.store.hasResourceBundle(u,c)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?a[f]===void 0&&(a[f]=!0):(this.state[f]=1,d=!1,a[f]===void 0&&(a[f]=!0),o[f]===void 0&&(o[f]=!0),l[c]===void 0&&(l[c]=!0)))}),d||(s[u]=!0)}),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(l)}}loaded(t,n,r){const i=t.split("|"),o=i[0],a=i[1];n&&this.emit("failedLoading",o,a,n),r&&this.store.addResourceBundle(o,a,r),this.state[t]=n?-1:2;const s={};this.queue.forEach(l=>{yC(l.loaded,[o],a),RC(l,t),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{s[u]||(s[u]={});const d=l.loaded[u];d.length&&d.forEach(c=>{s[u][c]===void 0&&(s[u][c]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(l=>!l.done)}read(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:o,callback:a});return}this.readingCalls++;const s=(u,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const c=this.waitingReads.shift();this.read(c.lng,c.ns,c.fcName,c.tried,c.wait,c.callback)}if(u&&d&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,o*2,a)},o);return}a(u,d)},l=this.backend[r].bind(this.backend);if(l.length===2){try{const u=l(t,n);u&&typeof u.then=="function"?u.then(d=>s(null,d)).catch(s):s(null,u)}catch(u){s(u)}return}return l(t,n,s)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const o=this.queueLoad(t,n,r,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(a=>{this.loadOne(a)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),i=r[0],o=r[1];this.read(i,o,"read",void 0,void 0,(a,s)=>{a&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,a),!a&&s&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,s),this.loaded(t,a,s)})}saveMissing(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const l={...a,isUpdate:o},u=this.backend.create.bind(this.backend);if(u.length<6)try{let d;u.length===5?d=u(t,n,r,i,l):d=u(t,n,r,i),d&&typeof d.then=="function"?d.then(c=>s(null,c)).catch(s):s(null,d)}catch(d){s(d)}else u(t,n,r,i,s,l)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}function Tp(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(i=>{n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function _p(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function vo(){}function zC(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class zi extends as{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=_p(t),this.services={},this.logger=Ct,this.modules={external:[]},zC(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Tp();this.options={...i,...this.options,..._p(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function o(d){return d?typeof d=="function"?new d:d:null}if(!this.options.isClone){this.modules.logger?Ct.init(o(this.modules.logger),this.options):Ct.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:typeof Intl<"u"&&(d=_C);const c=new Ep(this.options);this.store=new Op(this.options.resources,this.options);const f=this.services;f.logger=Ct,f.resourceStore=this.store,f.languageUtils=c,f.pluralResolver=new jC(c,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),d&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(f.formatter=o(d),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new LC(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new NC(o(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(y){for(var v=arguments.length,w=new Array(v>1?v-1:0),C=1;C<v;C++)w[C-1]=arguments[C];t.emit(y,...w)}),this.modules.languageDetector&&(f.languageDetector=o(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=o(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new Oa(this.services,this.options),this.translator.on("*",function(y){for(var v=arguments.length,w=new Array(v>1?v-1:0),C=1;C<v;C++)w[C-1]=arguments[C];t.emit(y,...w)}),this.modules.external.forEach(y=>{y.init&&y.init(this)})}if(this.format=this.options.interpolation.format,r||(r=vo),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=function(){return t.store[d](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=function(){return t.store[d](...arguments),t}});const l=Qr(),u=()=>{const d=(c,f)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(f),r(c,f)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),l}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vo;const i=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode")return r();const o=[],a=s=>{if(!s)return;this.services.languageUtils.toResolveHierarchy(s).forEach(u=>{o.indexOf(u)<0&&o.push(u)})};i?a(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>a(l)),this.options.preload&&this.options.preload.forEach(s=>a(s)),this.services.backendConnector.load(o,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(s)})}else r(null)}reloadResources(t,n,r){const i=Qr();return t||(t=this.languages),n||(n=this.options.ns),r||(r=vo),this.services.backendConnector.reload(t,n,o=>{i.resolve(),r(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Bv.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const i=Qr();this.emit("languageChanging",t);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,u)=>{u?(o(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(l,function(){return r.t(...arguments)})},s=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const u=typeof l=="string"?l:this.services.languageUtils.getBestMatchFromCodes(l);u&&(this.language||o(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,d=>{a(d,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(t),i}getFixedT(t,n,r){var i=this;const o=function(a,s){let l;if(typeof s!="object"){for(var u=arguments.length,d=new Array(u>2?u-2:0),c=2;c<u;c++)d[c-2]=arguments[c];l=i.options.overloadTranslationOptionHandler([a,s].concat(d))}else l={...s};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix=l.keyPrefix||r||o.keyPrefix;const f=i.options.keySeparator||".";let y;return l.keyPrefix&&Array.isArray(a)?y=a.map(v=>`${l.keyPrefix}${f}${v}`):y=l.keyPrefix?`${l.keyPrefix}${f}${a}`:a,i.t(y,l)};return typeof t=="string"?o.lng=t:o.lngs=t,o.ns=n,o.keyPrefix=r,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const u=this.services.backendConnector.state[`${s}|${l}`];return u===-1||u===2};if(n.precheck){const s=n.precheck(this,a);if(s!==void 0)return s}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(r,t)&&(!i||a(o,t)))}loadNamespaces(t,n){const r=Qr();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=Qr();typeof t=="string"&&(t=[t]);const i=this.options.preload||[],o=t.filter(a=>i.indexOf(a)<0);return o.length?(this.options.preload=i.concat(o),this.loadResources(a=>{r.resolve(),n&&n(a)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new Ep(Tp());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new zi(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vo;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new zi(i);return(t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(s=>{o[s]=this[s]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},r&&(o.store=new Op(this.store.data,i),o.services.resourceStore=o.store),o.translator=new Oa(o.services,i),o.translator.on("*",function(s){for(var l=arguments.length,u=new Array(l>1?l-1:0),d=1;d<l;d++)u[d-1]=arguments[d];o.emit(s,...u)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Oe=zi.createInstance();Oe.createInstance=zi.createInstance;Oe.createInstance;Oe.dir;Oe.init;Oe.loadResources;Oe.reloadResources;Oe.use;Oe.changeLanguage;Oe.getFixedT;Oe.t;Oe.exists;Oe.setDefaultNamespace;Oe.hasLoadedNamespace;Oe.loadNamespaces;Oe.loadLanguages;function ju(e){"@babel/helpers - typeof";return ju=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ju(e)}var Wv=[],IC=Wv.forEach,MC=Wv.slice;function Lu(e){return IC.call(MC.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e}function qv(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":ju(XMLHttpRequest))==="object"}function DC(e){return!!e&&typeof e.then=="function"}function AC(e){return DC(e)?e:Promise.resolve(e)}function FC(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Tu={exports:{}},yo={exports:{}},Rp;function HC(){return Rp||(Rp=1,function(e,t){var n=typeof self<"u"?self:nn,r=function(){function o(){this.fetch=!1,this.DOMException=n.DOMException}return o.prototype=n,new o}();(function(o){(function(a){var s={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function l(O){return O&&DataView.prototype.isPrototypeOf(O)}if(s.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(O){return O&&u.indexOf(Object.prototype.toString.call(O))>-1};function c(O){if(typeof O!="string"&&(O=String(O)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(O))throw new TypeError("Invalid character in header field name");return O.toLowerCase()}function f(O){return typeof O!="string"&&(O=String(O)),O}function y(O){var L={next:function(){var B=O.shift();return{done:B===void 0,value:B}}};return s.iterable&&(L[Symbol.iterator]=function(){return L}),L}function v(O){this.map={},O instanceof v?O.forEach(function(L,B){this.append(B,L)},this):Array.isArray(O)?O.forEach(function(L){this.append(L[0],L[1])},this):O&&Object.getOwnPropertyNames(O).forEach(function(L){this.append(L,O[L])},this)}v.prototype.append=function(O,L){O=c(O),L=f(L);var B=this.map[O];this.map[O]=B?B+", "+L:L},v.prototype.delete=function(O){delete this.map[c(O)]},v.prototype.get=function(O){return O=c(O),this.has(O)?this.map[O]:null},v.prototype.has=function(O){return this.map.hasOwnProperty(c(O))},v.prototype.set=function(O,L){this.map[c(O)]=f(L)},v.prototype.forEach=function(O,L){for(var B in this.map)this.map.hasOwnProperty(B)&&O.call(L,this.map[B],B,this)},v.prototype.keys=function(){var O=[];return this.forEach(function(L,B){O.push(B)}),y(O)},v.prototype.values=function(){var O=[];return this.forEach(function(L){O.push(L)}),y(O)},v.prototype.entries=function(){var O=[];return this.forEach(function(L,B){O.push([B,L])}),y(O)},s.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function w(O){if(O.bodyUsed)return Promise.reject(new TypeError("Already read"));O.bodyUsed=!0}function C(O){return new Promise(function(L,B){O.onload=function(){L(O.result)},O.onerror=function(){B(O.error)}})}function g(O){var L=new FileReader,B=C(L);return L.readAsArrayBuffer(O),B}function h(O){var L=new FileReader,B=C(L);return L.readAsText(O),B}function m(O){for(var L=new Uint8Array(O),B=new Array(L.length),q=0;q<L.length;q++)B[q]=String.fromCharCode(L[q]);return B.join("")}function S(O){if(O.slice)return O.slice(0);var L=new Uint8Array(O.byteLength);return L.set(new Uint8Array(O)),L.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(O){this._bodyInit=O,O?typeof O=="string"?this._bodyText=O:s.blob&&Blob.prototype.isPrototypeOf(O)?this._bodyBlob=O:s.formData&&FormData.prototype.isPrototypeOf(O)?this._bodyFormData=O:s.searchParams&&URLSearchParams.prototype.isPrototypeOf(O)?this._bodyText=O.toString():s.arrayBuffer&&s.blob&&l(O)?(this._bodyArrayBuffer=S(O.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(O)||d(O))?this._bodyArrayBuffer=S(O):this._bodyText=O=Object.prototype.toString.call(O):this._bodyText="",this.headers.get("content-type")||(typeof O=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s.searchParams&&URLSearchParams.prototype.isPrototypeOf(O)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s.blob&&(this.blob=function(){var O=w(this);if(O)return O;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?w(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var O=w(this);if(O)return O;if(this._bodyBlob)return h(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(m(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s.formData&&(this.formData=function(){return this.text().then(R)}),this.json=function(){return this.text().then(JSON.parse)},this}var $=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function P(O){var L=O.toUpperCase();return $.indexOf(L)>-1?L:O}function E(O,L){L=L||{};var B=L.body;if(O instanceof E){if(O.bodyUsed)throw new TypeError("Already read");this.url=O.url,this.credentials=O.credentials,L.headers||(this.headers=new v(O.headers)),this.method=O.method,this.mode=O.mode,this.signal=O.signal,!B&&O._bodyInit!=null&&(B=O._bodyInit,O.bodyUsed=!0)}else this.url=String(O);if(this.credentials=L.credentials||this.credentials||"same-origin",(L.headers||!this.headers)&&(this.headers=new v(L.headers)),this.method=P(L.method||this.method||"GET"),this.mode=L.mode||this.mode||null,this.signal=L.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&B)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(B)}E.prototype.clone=function(){return new E(this,{body:this._bodyInit})};function R(O){var L=new FormData;return O.trim().split("&").forEach(function(B){if(B){var q=B.split("="),T=q.shift().replace(/\+/g," "),z=q.join("=").replace(/\+/g," ");L.append(decodeURIComponent(T),decodeURIComponent(z))}}),L}function N(O){var L=new v,B=O.replace(/\r?\n[\t ]+/g," ");return B.split(/\r?\n/).forEach(function(q){var T=q.split(":"),z=T.shift().trim();if(z){var H=T.join(":").trim();L.append(z,H)}}),L}b.call(E.prototype);function F(O,L){L||(L={}),this.type="default",this.status=L.status===void 0?200:L.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in L?L.statusText:"OK",this.headers=new v(L.headers),this.url=L.url||"",this._initBody(O)}b.call(F.prototype),F.prototype.clone=function(){return new F(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},F.error=function(){var O=new F(null,{status:0,statusText:""});return O.type="error",O};var U=[301,302,303,307,308];F.redirect=function(O,L){if(U.indexOf(L)===-1)throw new RangeError("Invalid status code");return new F(null,{status:L,headers:{location:O}})},a.DOMException=o.DOMException;try{new a.DOMException}catch{a.DOMException=function(L,B){this.message=L,this.name=B;var q=Error(L);this.stack=q.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function A(O,L){return new Promise(function(B,q){var T=new E(O,L);if(T.signal&&T.signal.aborted)return q(new a.DOMException("Aborted","AbortError"));var z=new XMLHttpRequest;function H(){z.abort()}z.onload=function(){var X={status:z.status,statusText:z.statusText,headers:N(z.getAllResponseHeaders()||"")};X.url="responseURL"in z?z.responseURL:X.headers.get("X-Request-URL");var K="response"in z?z.response:z.responseText;B(new F(K,X))},z.onerror=function(){q(new TypeError("Network request failed"))},z.ontimeout=function(){q(new TypeError("Network request failed"))},z.onabort=function(){q(new a.DOMException("Aborted","AbortError"))},z.open(T.method,T.url,!0),T.credentials==="include"?z.withCredentials=!0:T.credentials==="omit"&&(z.withCredentials=!1),"responseType"in z&&s.blob&&(z.responseType="blob"),T.headers.forEach(function(X,K){z.setRequestHeader(K,X)}),T.signal&&(T.signal.addEventListener("abort",H),z.onreadystatechange=function(){z.readyState===4&&T.signal.removeEventListener("abort",H)}),z.send(typeof T._bodyInit>"u"?null:T._bodyInit)})}return A.polyfill=!0,o.fetch||(o.fetch=A,o.Headers=v,o.Request=E,o.Response=F),a.Headers=v,a.Request=E,a.Response=F,a.fetch=A,Object.defineProperty(a,"__esModule",{value:!0}),a})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=r;t=i.fetch,t.default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t}(yo,yo.exports)),yo.exports}(function(e,t){var n;if(typeof fetch=="function"&&(typeof nn<"u"&&nn.fetch?n=nn.fetch:typeof window<"u"&&window.fetch?n=window.fetch:n=fetch),typeof FC<"u"&&(typeof window>"u"||typeof window.document>"u")){var r=n||HC();r.default&&(r=r.default),t.default=r,e.exports=t.default}})(Tu,Tu.exports);var Vv=Tu.exports;const Gv=zu(Vv),Np=Zp({__proto__:null,default:Gv},[Vv]);function Pa(e){"@babel/helpers - typeof";return Pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pa(e)}var Ft;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?Ft=global.fetch:typeof window<"u"&&window.fetch?Ft=window.fetch:Ft=fetch);var Ii;qv()&&(typeof global<"u"&&global.XMLHttpRequest?Ii=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Ii=window.XMLHttpRequest));var Ea;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Ea=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Ea=window.ActiveXObject));!Ft&&Np&&!Ii&&!Ea&&(Ft=Gv||Np);typeof Ft!="function"&&(Ft=void 0);var _u=function(t,n){if(n&&Pa(n)==="object"){var r="";for(var i in n)r+="&"+encodeURIComponent(i)+"="+encodeURIComponent(n[i]);if(!r)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+r.slice(1)}return t},zp=function(t,n,r){Ft(t,n).then(function(i){if(!i.ok)return r(i.statusText||"Error",{status:i.status});i.text().then(function(o){r(null,{status:i.status,data:o})}).catch(r)}).catch(r)},Ip=!1,UC=function(t,n,r,i){t.queryStringParams&&(n=_u(n,t.queryStringParams));var o=Lu({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);r&&(o["Content-Type"]="application/json");var a=typeof t.requestOptions=="function"?t.requestOptions(r):t.requestOptions,s=Lu({method:r?"POST":"GET",body:r?t.stringify(r):void 0,headers:o},Ip?{}:a);try{zp(n,s,i)}catch(l){if(!a||Object.keys(a).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(a).forEach(function(u){delete s[u]}),zp(n,s,i),Ip=!0}catch(u){i(u)}}},BC=function(t,n,r,i){r&&Pa(r)==="object"&&(r=_u("",r).slice(1)),t.queryStringParams&&(n=_u(n,t.queryStringParams));try{var o;Ii?o=new Ii:o=new Ea("MSXML2.XMLHTTP.3.0"),o.open(r?"POST":"GET",n,1),t.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!t.withCredentials,r&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var a=t.customHeaders;if(a=typeof a=="function"?a():a,a)for(var s in a)o.setRequestHeader(s,a[s]);o.onreadystatechange=function(){o.readyState>3&&i(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(r)}catch(l){console&&console.log(l)}},WC=function(t,n,r,i){if(typeof r=="function"&&(i=r,r=void 0),i=i||function(){},Ft&&n.indexOf("file:")!==0)return UC(t,n,r,i);if(qv()||typeof ActiveXObject=="function")return BC(t,n,r,i);i(new Error("No fetch and no xhr implementation found!"))};function Mi(e){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mi(e)}function qC(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Mp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Kv(r.key),r)}}function VC(e,t,n){return t&&Mp(e.prototype,t),n&&Mp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function GC(e,t,n){return t=Kv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kv(e){var t=KC(e,"string");return Mi(t)==="symbol"?t:String(t)}function KC(e,t){if(Mi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Mi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var QC=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,r,i){return GC({},r,i||"")},parseLoadPayload:function(n,r){},request:WC,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Qv=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};qC(this,e),this.services=t,this.options=n,this.allOptions=r,this.type="backend",this.init(t,n,r)}return VC(e,[{key:"init",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=n,this.options=Lu(i,this.options||{},QC()),this.allOptions=o,this.services&&this.options.reloadInterval&&setInterval(function(){return r.reload()},this.options.reloadInterval)}},{key:"readMulti",value:function(n,r,i){this._readAny(n,n,r,r,i)}},{key:"read",value:function(n,r,i){this._readAny([n],n,[r],r,i)}},{key:"_readAny",value:function(n,r,i,o,a){var s=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(n,i)),l=AC(l),l.then(function(u){if(!u)return a(null,{});var d=s.services.interpolator.interpolate(u,{lng:n.join("+"),ns:i.join("+")});s.loadUrl(d,a,r,o)})}},{key:"loadUrl",value:function(n,r,i,o){var a=this,s=typeof i=="string"?[i]:i,l=typeof o=="string"?[o]:o,u=this.options.parseLoadPayload(s,l);this.options.request(this.options,n,u,function(d,c){if(c&&(c.status>=500&&c.status<600||!c.status))return r("failed loading "+n+"; status code: "+c.status,!0);if(c&&c.status>=400&&c.status<500)return r("failed loading "+n+"; status code: "+c.status,!1);if(!c&&d&&d.message&&d.message.indexOf("Failed to fetch")>-1)return r("failed loading "+n+": "+d.message,!0);if(d)return r(d,!1);var f,y;try{typeof c.data=="string"?f=a.options.parse(c.data,i,o):f=c.data}catch{y="failed parsing "+n+" to json"}if(y)return r(y,!1);r(null,f)})}},{key:"create",value:function(n,r,i,o,a){var s=this;if(this.options.addPath){typeof n=="string"&&(n=[n]);var l=this.options.parsePayload(r,i,o),u=0,d=[],c=[];n.forEach(function(f){var y=s.options.addPath;typeof s.options.addPath=="function"&&(y=s.options.addPath(f,r));var v=s.services.interpolator.interpolate(y,{lng:f,ns:r});s.options.request(s.options,v,l,function(w,C){u+=1,d.push(w),c.push(C),u===n.length&&typeof a=="function"&&a(d,c)})})}}},{key:"reload",value:function(){var n=this,r=this.services,i=r.backendConnector,o=r.languageUtils,a=r.logger,s=i.language;if(!(s&&s.toLowerCase()==="cimode")){var l=[],u=function(c){var f=o.toResolveHierarchy(c);f.forEach(function(y){l.indexOf(y)<0&&l.push(y)})};u(s),this.allOptions.preload&&this.allOptions.preload.forEach(function(d){return u(d)}),l.forEach(function(d){n.allOptions.ns.forEach(function(c){i.read(d,c,"read",null,null,function(f,y){f&&a.warn("loading namespace ".concat(c," for language ").concat(d," failed"),f),!f&&y&&a.log("loaded namespace ".concat(c," for language ").concat(d),y),i.loaded("".concat(d,"|").concat(c),f,y)})})})}}}]),e}();Qv.type="backend";async function YC(){await Oe.use(Qv).use(A1).init({debug:!1,backend:{loadPath:`${I}/locales/{{lng}}.json`},interpolation:{escapeValue:!1},fallbackLng:"en",supportedLngs:["en","ru"]})}YC();const XC=x.img`
  ${ca};
  width: fit-content;
  height: 2.63vw;

  @media (max-width: ${k}) {
    width: fit-content;
    height: 5.06vw;
  }
`,Yv=()=>{const{t:e}=ut(),t=xt("Logo",e),{src:n,alt:r}=t;return p.jsx(XC,{src:n,alt:r})},JC=x.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  position: ${({$location:e})=>e?"relative":"static"};
  z-index: ${({$location:e})=>e?"11":"1"};

  @media (max-width: ${k}) {
    height: ${({$location:e})=>e?"100%":"auto"};
    justify-content: ${({$location:e})=>e?"end":"center"};
    align-items: ${({$location:e})=>e?"end":"center"};
  }
`,ZC=x(ct)`
  display: flex;
  margin-right: 1.2vw;

  @media (max-width: ${k}) {
    margin-right: 3vw;
  }
`,Dp=x.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${k}) {
    width: 6.61vw;
    height: 6.61vw;
  }
`,eO=x(Ke)`
  display: flex;
  background-color: transparent;
`,td=({type:e,$location:t,onClick:n,...r})=>{const{t:i}=ut(),o=xt("FeedbackWidgets",i);return p.jsx(JC,{$location:t,...r,children:o.map(a=>p.jsx(ZC,{color:"transparent",href:a.href,target:"_blank",rel:"noopener noreferrer",children:n?p.jsx(eO,{type:"button",disabled:!n,onClick:n,children:p.jsx(Dp,{src:a.image[e==="light"?"lightSrc":"darkSrc"],alt:a.image.alt})}):p.jsx(Dp,{src:a.image[e==="light"?"lightSrc":"darkSrc"],alt:a.image.alt})},a.id))})},tO=x.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  @media (max-width: ${k}) {
    gap: 1vw;
  }
`,Ap=x.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${k}) {
    margin: ${({$isButton:e})=>e?"0":"0 2vw"};
    width: ${({$isButton:e})=>e?"3vw":"6.5vw"};
    height: ${({$isButton:e})=>e?"3vw":"6.5vw"};
  }
`,nO=x.p`
  ${Z};
  ${ce};
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.39vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.6px;
  align-self: end;

  @media (max-width: ${k}) {
    font-size: 3.92vw;
  }
`,rO=x(Ke)`
  margin-right: 1vw;
  background: transparent;
  border-radius: 50px;
`,Ru=({image:e,isButton:t=!1,onClick:n})=>{const{src:r,alt:i,text:o}=e;return p.jsxs(tO,{children:[t&&n?p.jsx(rO,{type:"button",disabled:!1,onClick:n,children:p.jsx(Ap,{src:r,alt:i,$isButton:t})}):p.jsx(Ap,{src:r,alt:i,$isButton:t}),p.jsx(nO,{children:o})]})},iO=x.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`,oO=x(Ke)`
  background-color: transparent;
  width: 1.04vw;
  height: 0.83vw;
  display: flex;

  @media (max-width: ${k}) {
    width: 2.95vw;
    height: 2.16vw;
  }
`,aO=x.img`
  width: 100%;
  height: 100%;
`,sO=x.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2.3vw 5vw 2.3vw 1.74vw;
  box-sizing: border-box;

  @media (max-width: ${k}) {
    padding: 16.7vw 5vw 13vw 5vw;
  }
`,lO=x(Ke)`
  ${Z};
  ${ce};
  text-align: left;
  margin: 1.95vw 0 0 1vw;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.18vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.51px;
  background: transparent;

  @media (max-width: ${k}) {
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
        background-image: url(${mS.background});
        background-size: cover;
        width: 1.25vw;
        height: 1vw;

        @media (max-width: ${k}) {
          width: 2.5vw;
          height: 2vw;
          left: 45vw;
        }
      }
    `}
`,uO=({language:e,isLanguagesOpen:t,languagesHandler:n,closeIcon:r})=>{const{i18n:i}=ut(),[o,a]=j.useState(i.language),s=async u=>{a(u),await i.changeLanguage(u),n()},l=u=>async()=>{await s(u)};return p.jsxs(sO,{children:[p.jsxs(iO,{children:[p.jsx(oO,{disabled:!t,type:"button",onClick:n,children:p.jsx(aO,{src:r.src,alt:r.alt})}),p.jsx(Ru,{image:e})]}),gS.map(u=>p.jsx(lO,{type:"button",disabled:!t,$code:u.code,$currentLanguage:o,onClick:l(u.code),children:u.name},u.code))]})},{whiteColor:Xv,greenColor:cO,lightGreenColor:dO}=re,fO=x.div`
  position: relative;
  z-index: 11;
  width: 15.5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${k}) {
    width: 100%;
    justify-content: start;
  }
`,pO=x(ct)`
  border-radius: 5px;
  padding: 0.5vw 2vw;
  background: linear-gradient(
    133deg,
    ${cO} 0%,
    ${dO} 100%
  );
  word-break: break-word;
  @media (max-width: ${k}) {
    padding: 1.7vw 4.4vw;
  }
`,hO=x(ct)`
  visibility: hidden;
  margin: 0 1vw;
  background-color: transparent;
  word-break: break-word;
  @media (max-width: ${k}) {
    margin: 0 7.5vw 0 2vw;
  }
`,Fp=x.span`
  color: ${Xv};
  ${Ar};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.48px;
  text-decoration-line: underline;

  @media (max-width: ${k}) {
    color: rgba(255, 255, 255, 0.9);
    font-size: calc(16vw / 5.09);
  }
`,Hp=x.span`
  color: ${Xv};
  ${Et};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.42px;

  @media (max-width: ${k}) {
    color: rgba(255, 255, 255, 0.9);
    font-size: calc(14vw / 5.09);
  }
`,Up=x(Ke)`
  background-color: transparent;
  display: flex;
`,Jv=({onClick:e,loginAndRegister:t})=>{const{signUp:n,signIn:r}=t;return p.jsxs(fO,{children:[p.jsx(hO,{color:"transparent",href:Ax,target:"_blank",rel:"noopener noreferrer",children:e?p.jsx(Up,{type:"button",disabled:!e,onClick:e,children:p.jsx(Fp,{children:n})}):p.jsx(Fp,{children:n})}),p.jsx(pO,{color:"transparent",href:Dx,target:"_blank",rel:"noopener noreferrer",children:e?p.jsx(Up,{type:"button",disabled:!e,onClick:e,children:p.jsx(Hp,{children:r})}):p.jsx(Hp,{children:r})})]})},gO=x.ul`
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

  @media (max-width: ${k}) {
    border: none;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
`,mO=x.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;

  @media (max-width: ${k}) {
    margin-top: calc(27vw / 5.09);
    justify-content: start;
    align-self: start;
  }
`,vO=x(Ke)`
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

  @media (max-width: ${k}) {
    max-width: 20vw;
    font-size: calc(16vw / 5.08);
  }
`,Zv=({sections:e,headerHeight:t,burgerMenuHandler:n,isLanguagesOpen:r,languagesHandler:i})=>{const o=Dr(),a=Ja(),[s,l]=j.useState(!1),u=async c=>{a.pathname!=="/"&&await o("/");const f=document.getElementById(c);if(f){const y=f.offsetTop-t;window.scrollTo({top:y,behavior:"smooth"})}l(!1)},d=async c=>{l(!0),n&&await n(),i&&r&&await i(),await u(c)};return p.jsx("nav",{children:p.jsx(gO,{children:e.map(c=>p.jsx(mO,{children:p.jsx(vO,{disabled:s,type:"button",onClick:()=>d(c.id),children:c.title})},c.id))})})},yO=x.div`
  display: none;

  @media (max-width: ${k}) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 16.7vw 5vw 15vw 5vw;
    box-sizing: border-box;
  }
`,wO=x.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`,xO=x(Ke)`
  background-color: transparent;
  width: 2.95vw;
  height: 2.16vw;
  border-radius: 0;
  display: flex;
`,SO=x.img`
  width: 100%;
  height: 100%;
`,bO=x.div`
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
`,kO=({language:e,menu:t,sections:n,headerHeight:r,languagesHandler:i,isBurgerMenuOpen:o,burgerMenuHandler:a,loginAndRegister:s,closeIcon:l})=>p.jsxs(yO,{children:[p.jsxs(wO,{children:[p.jsx(xO,{disabled:!o,type:"button",onClick:a,children:p.jsx(SO,{src:l.src,alt:l.alt})}),p.jsx(Ru,{image:t})]}),p.jsx(Zv,{sections:n,headerHeight:r,burgerMenuHandler:a}),p.jsx(bO,{children:p.jsx(Ru,{image:e,isButton:!0,onClick:i})}),p.jsx(Jv,{loginAndRegister:s,onClick:a}),p.jsx(td,{$location:"menu",type:"light",onClick:a})]}),$O=x.div`
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
            animation: ${zx} 0.5s forwards;
          `:ve`
            animation: ${Ix} 0.5s forwards;
          `:""};

  @media (max-width: ${k}) {
    width: 60%;
  }
`,Bp=({containerHeight:e,headerHeight:t,children:n,isOpen:r})=>{const i=Ja(),o=jt(),a=i.pathname==="/";return j.useLayoutEffect(()=>{const s=()=>{document.querySelectorAll(".drop-right").forEach(u=>{u.style.height=`calc(${e}px + ${t}px + ${!o&&a?1.7:0}vw)`})};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[e,t,o]),p.jsx($O,{className:"drop-right",$isOpen:r,children:n})},{whiteColor:CO,headerColor:OO}=re,PO=x.header`
  background-color: ${OO};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  box-sizing: border-box;
  padding-left: 4vw;
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 6.94vw;
  z-index: 10;
  border-bottom: 0.5px ${CO} solid;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  @media (max-width: ${k}) {
    box-sizing: border-box;
    padding: 1vw 8.27vw 0;
    min-height: 12.5vw;
    justify-content: space-between;
  }
`,EO=x(Ke)`
  background-color: transparent;
  border-radius: 0;
  display: flex;
`,jO=x.img`
  width: 6.5vw;
  height: 3.77vw;
`,LO=x.div`
  position: relative;
  z-index: 11;
`,TO=x(td)`
  margin-left: 1.2vw;
  width: 20vw;
  display: flex;
  justify-content: end;
`,_O=x(Ke)`
  margin: 0 2vw;
  background-color: transparent;
  border-radius: 0;
  display: flex;
`,RO=x.img`
  width: 2.22vw;
  height: 2.22vw;
`,NO=j.forwardRef(({sections:e,containerHeight:t,isLanguagesOpen:n,isBurgerMenuOpen:r,languagesHandler:i,burgerMenuHandler:o,headerHeight:a},s)=>{const{t:l}=ut(),u=xt("Header",l),{loginAndRegister:d,language:c,menu:f,closeIcon:y}=u,v=jt();return p.jsxs(p.Fragment,{children:[p.jsxs(PO,{ref:s,children:[p.jsx(LO,{children:p.jsx(Yv,{})}),v!==null&&!v&&p.jsxs(p.Fragment,{children:[p.jsx(TO,{type:"light",$location:"menu"}),p.jsx(Zv,{sections:e,headerHeight:a,isLanguagesOpen:n,languagesHandler:i}),p.jsx(Jv,{loginAndRegister:d}),p.jsx(_O,{disabled:!!n,type:"button",onClick:i,children:p.jsx(RO,{src:c.srcGray,alt:c.alt})})]}),v&&p.jsx(EO,{disabled:!!r,type:"button",onClick:o,children:p.jsx(jO,{src:f.src,alt:f.alt})})]}),v&&p.jsx(Bp,{isOpen:r,headerHeight:a,containerHeight:t,children:p.jsx(kO,{containerHeight:t,sections:e,headerHeight:a,isBurgerMenuOpen:r,burgerMenuHandler:o,languagesHandler:i,language:c,menu:f,loginAndRegister:d,closeIcon:y})}),p.jsx(Bp,{isOpen:n,headerHeight:a,containerHeight:t,children:p.jsx(uO,{containerHeight:t,headerHeight:a,isLanguagesOpen:n,languagesHandler:i,language:c,closeIcon:y})})]})}),{whiteColor:nd}=re,zO=x.div`
  min-width: 10vw;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: ${k}) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10vw;
  }
`,IO=x.h3`
  ${Z};
  margin-bottom: 0.7vw;
  color: ${nd};
  ${Ar};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${k}) {
    margin-bottom: 2vw;
    text-align: center;
    font-size: calc(20vw / 5.08);
    font-weight: bold;
    line-height: 2;
  }
`,MO=x.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${k}) {
    margin: 0.5vw;
  }
`,DO=x.li`
  ${Z};
  margin-bottom: 0.34vw;
  color: ${nd};
  ${Ar};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;

  @media (max-width: ${k}) {
    text-align: center;
    font-size: calc(20vw / 5.08);
  }
`,nl=({data:e})=>p.jsxs(zO,{children:[p.jsx(IO,{children:e.title}),p.jsx(MO,{children:e.links.map(t=>p.jsx(DO,{children:p.jsx(ct,{color:nd,href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.name})},t.name))})]}),{whiteColor:Nu,deepGrayColor:AO}=re,Rt={text:"Our vision is to provide convenience and help increase your sales business.",nav:{about:{title:"About",links:[{name:"How it works",href:Kx},{name:"Featured",href:Qx},{name:"Partnership",href:Yx},{name:"Business Relation",href:Xx}]},community:{title:"Community",links:[{name:"Events",href:Jx},{name:"Blog",href:Zx},{name:"Podcast",href:eS},{name:"Invite a friend",href:tS}]},socials:{title:"Socials",links:[{name:"Telegram",href:Qm},{name:"Twitter",href:Gm},{name:"Facebook",href:Km}]}},rights:"Auto Fast. All rights reserved",policy:{name:"Privacy & Policy",href:nS},condition:{name:"Terms & Condition",href:rS}},FO=x.footer`
  width: 100vw;
  box-sizing: border-box;
  padding: 5.55vw 4.28vw 0.5vw;
  background-color: ${AO};

  @media (max-width: ${k}) {
    padding: 15.7vw 0 4.17vw 0;
  }
`,HO=x.div`
  margin-bottom: 2.5vw;
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${k}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,UO=x.div`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  justify-content: space-between;

  @media (max-width: ${k}) {
    flex-direction: column;
    align-items: center;
  }
`,BO=x.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${k}) {
    flex-direction: column;
  }
`,WO=x(Yv)`
  @media (max-width: ${k}) {
    width: 43.5vw;
    height: 10.24vw;
  }
`,qO=x.div`
  min-width: 10vw;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: ${k}) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10vw;
  }
`,Wp=x.p`
  ${Z};
  margin: 2.54vw 0 2.09vw;
  color: ${Nu};
  ${Ar};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;
  width: calc(274vw / 14.4);

  @media (max-width: ${k}) {
    margin: 5vw 0 5vw;
    text-align: center;
    font-size: calc(16vw / 5.08);
    width: calc(355vw / 5.08);
  }
`,VO=x(td)`
  @media (max-width: ${k}) {
    padding-left: 3vw;
  }
`,qp=x.p`
  ${Z};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(16vw / 5.08);
  }
`,Vp=x(ct)`
  margin-left: 4.2vw;

  @media (max-width: ${k}) {
    margin: 0;
  }
`,GO=()=>{const e=new Date().getFullYear();return p.jsxs(FO,{children:[p.jsxs(HO,{children:[p.jsxs(qO,{children:[p.jsx(WO,{}),p.jsx(Wp,{children:Rt.text}),p.jsx(VO,{type:"dark"})]}),p.jsx(nl,{data:Rt.nav.about}),p.jsx(nl,{data:Rt.nav.community}),p.jsx(nl,{data:Rt.nav.socials})]}),p.jsxs(UO,{children:[p.jsxs(Wp,{children:["© ",e," ",Rt.rights]}),p.jsxs(BO,{children:[p.jsx(Vp,{color:Nu,href:Rt.policy.href,target:"_blank",rel:"noopener noreferrer",children:p.jsx(qp,{children:Rt.policy.name})}),p.jsx(Vp,{color:Nu,href:Rt.condition.href,target:"_blank",rel:"noopener noreferrer",children:p.jsx(qp,{children:Rt.condition.name})})]})]})]})},KO=()=>{const[e,t]=j.useState(""),[n,r]=j.useState([]),i=[{id:"1",question:"What is React?",answer:"React is a JavaScript library for building user interfaces."},{id:"2",question:"How does state work in React?",answer:"State is an object that holds the data that may change over time."}],o=l=>{t(l.target.value)},a=l=>{r(u=>u.includes(l)?u.filter(d=>d!==l):[...u,l])},s=i.filter(l=>l.question.toLowerCase().includes(e.toLowerCase())||l.answer.toLowerCase().includes(e.toLowerCase()));return p.jsxs("div",{children:[p.jsx("input",{type:"text",placeholder:"Search...",value:e,onChange:o}),s.length>0?p.jsx("ul",{children:s.map(l=>p.jsxs("li",{children:[p.jsx("button",{onClick:()=>a(l.id),children:n.includes(l.id)?"Hide Answer":"Show Answer"}),p.jsx("strong",{children:l.question}),n.includes(l.id)&&p.jsx("p",{children:l.answer})]},l.id))}):p.jsx("p",{children:"Sorry, No results found."})]})},QO=x.div`
  display: inline-block;
`,YO=x.img`
  width: calc(20vw / 14.4);
  height: calc(20vw / 14.4);
  cursor: pointer;
  margin-right: calc(5vw / 14.4);
`,XO=({id:e,initialValue:t,ratingData:n})=>{const r=i=>{console.log(i===t?`Отправить запрос на сервер для новости id=${e} поменять rating на 0`:`Отправить запрос на сервер для новости id=${e} поменять rating на ${i}`)};return p.jsx(QO,{children:[1,2,3,4,5].map(i=>p.jsx(YO,{src:i<=t?n.active.src:n.inactive.src,alt:i<=t?n.active.alt:n.inactive.alt,onClick:()=>r(i)},i))})},JO=x.div`
  display: flex;
  gap: 10px;
`,rl=x.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,ZO=({selectedNews:e})=>{const t=()=>{const o=`https://telegram.me/share/url?url=&text=${encodeURIComponent(e.title+`
`+e.text)}`;window.open(o,"_blank")},n=()=>{const o=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;window.open(o,"_blank")},r=()=>{const i=encodeURIComponent(e.title),o=encodeURIComponent(e.title+`
`+e.text),a=`mailto:?subject=${i}&body=${o}`;window.location.href=a};return p.jsxs(JO,{children:[p.jsx(TelegramButton,{}),p.jsx(rl,{onClick:t,children:"Share on Telegram"}),p.jsx(rl,{onClick:n,children:"Share on Facebook"}),";",p.jsx(rl,{onClick:r,children:"Send via Email"})]})},{greenColor:eP,smallNewsColor:rd,largeNewsColor:tP,blackColor:nP,lineNewsColor:rP}=re,iP=x.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: ${k}) {
    flex-direction: column;
    justify-content: center;
  }
`,oP=x.div`
  padding: 2.78vw 3vw 2.78vw 0;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;

  @media (max-width: ${k}) {
    padding: 2.78vw 0;
    align-items: center;
    justify-content: start;
  }
`,aP=x.div`
  padding: 2.78vw 0 2.78vw 3vw;
  border-left: 2px solid ${rP};
  box-sizing: border-box;
  width: calc(450vw / 14.4);
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: ${k}) {
    padding: 2.78vw 3vw 2.78vw 3vw;
    width: 100%;
    align-items: center;
  }
`,sP=x.div`
  width: calc(325vw / 14.4);
  box-sizing: border-box;
  margin-bottom: calc(20vw / 14.4);
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: ${k}) {
    width: calc(325vw / 5.09);
  }
`,Gp=x.img`
  height: ${({size:e})=>e==="big"?"calc(399vw / 14.4)":"calc(154vw / 14.4)"};
  width: ${({size:e})=>e==="big"?"calc(899vw / 14.4)":"calc(325vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${k}) {
    height: ${({size:e})=>e==="big"?"calc(184vw / 5.08)":"calc(148vw / 5.08)"};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
  }
`,lP=x.div`
  width: 100%;
  margin: ${({size:e})=>e==="big"?"2vw 0 0.71vw":"1vw 0 1vw"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  @media (max-width: ${k}) {
    margin: ${({size:e})=>e==="big"?"calc(45vw / 5.09) 0 calc(12vw / 5.09)":"calc(12vw / 5.09) 0 calc(12vw / 5.09)"};
  }
`,ss=x.p`
  ${Z};
  ${ce};
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.09);
  }
`,uP=x(ss)`
  padding-right: 3vw;
  color: ${eP};
  font-size: calc(25vw / 14.4);

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.09);
  }
`,Kp=x(ss)`
  padding-top: 0.5vw;
  color: ${rd};
  font-size: calc(15vw / 14.4);

  @media (max-width: ${k}) {
    font-size: calc(15vw / 5.09);
  }
`,cP=x(ss)`
  margin-top: calc(29vw / 14.4);
  color: ${tP};
  font-size: calc(20vw / 14.4);

  @media (max-width: ${k}) {
    font-size: calc(20vw / 5.09);
  }
`,Qp=x(Sn)`
  width: 100%;
  margin-bottom: calc(15vw / 14.4);
  ${({size:e})=>e==="big"?`${Wi}`:`${Et}`};
  color: ${({size:e})=>e==="big"?`${nP}`:`${rd}`};
  font-size: ${({size:e})=>e==="big"?"calc(50vw / 14.4)":"calc(28vw / 14.4)"};
  line-height: 1.2;
  letter-spacing: -0.7px;
  text-align: left;

  @media (max-width: ${k}) {
    margin-bottom: 0;
    font-size: ${({size:e})=>e==="big"?"calc(30vw / 5.09)":"calc(23vw / 5.09)"};
    letter-spacing: -0.6px;
  }
`,dP=x.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: calc(40vw / 14.4);

  @media (max-width: ${k}) {
    width: 82%;
  }
`,fP=x.div`
  width: calc(660vw / 14.4);

  @media (max-width: ${k}) {
    width: calc(320vw / 5.09);
  }
`,pP=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
`,Yp=x.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`,Xp=x(ss)`
  padding-left: 0.5vw;
  color: ${rd};
  font-size: calc(15vw / 14.4);
  line-height: 1.2;

  @media (max-width: ${k}) {
    font-size: calc(15vw / 5.09);
  }
`,Jp=x.img`
  width: auto;
  height: calc(16vw / 14.4);

  @media (max-width: ${k}) {
    width: auto;
    height: calc(16vw / 5.09);
  }
`,hP=()=>{const{t:e}=ut(),t=xt("News",e),{rating:n}=t,{id:r}=yx(),i=Dr();j.useEffect(()=>{console.log(`добавить просмотр новости с ${r}`)},[r]);const o=Ou.find(c=>c.id===r);if(!o)return p.jsx(Hv,{});const a=Ou.filter(c=>c.id!==r),s=c=>{i(`/news/${c}`)},l=o.text.split(" ").length,d=Math.ceil(l/250);return p.jsxs(iP,{children:[p.jsxs(oP,{children:[p.jsx(Gp,{size:"big",src:o.url,alt:o.title}),p.jsxs(dP,{children:[p.jsx(Kp,{children:o.date}),p.jsxs(fP,{children:[p.jsx(Qp,{size:"big",children:o.title}),p.jsxs(pP,{children:[p.jsx(XO,{id:o.id,initialValue:o.rating,ratingData:n}),p.jsxs(Yp,{children:[p.jsx(Jp,{src:t.views.src,alt:t.views.alt}),p.jsx(Xp,{children:o.views})]}),p.jsxs(Yp,{children:[p.jsx(Jp,{src:t.time.src,alt:t.time.alt}),p.jsxs(Xp,{children:[d," ",t.time.text]})]})]}),p.jsx(cP,{children:o.text})]})]})]}),p.jsxs(aP,{children:[p.jsx(ZO,{selectedNews:o}),a.map(c=>p.jsxs(sP,{onClick:()=>s(c.id),children:[p.jsx(Gp,{size:"small",src:c.url,alt:c.title}),p.jsxs(lP,{size:"small",children:[p.jsx(uP,{children:c.span}),p.jsx(Kp,{children:c.date})]}),p.jsx(Qp,{size:"small",children:c.title})]},c.id))]})]})},gP=x.div`
  max-height: ${({$isBurgerMenuOpen:e,$containerHeight:t,$headerHeight:n,$isLanguagesOpen:r})=>(e||r)&&t<window.innerHeight?`calc(${window.innerHeight}px - ${n}px)`:(e||r)&&t>=window.innerHeight?`${t}px`:"auto"};
  overflow: ${({$isBurgerMenuOpen:e,$isLanguagesOpen:t})=>e||t?"clip":"auto"};
`,mP=()=>{const e=j.useRef(null),t=j.useRef(null),n=j.useRef(null),r=j.useRef(null),[i,o]=j.useState(null),[a,s]=j.useState(null),[l,u]=j.useState(0),[d,c]=j.useState(0),[f,y]=j.useState(0),[v,w]=j.useState(0),{t:C}=ut(),g=xt("Sections",C);j.useEffect(()=>{document.documentElement.lang=Oe.language},[]),j.useEffect(()=>{const b=()=>{if(e.current){const $=e.current.clientHeight;u($)}};return b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}},[e,a,i]),j.useEffect(()=>{const b=()=>{if(t.current){const $=t.current.clientHeight;c($)}};return b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b),c(0)}},[t,a,i]),j.useEffect(()=>{const b=()=>{if(n.current){const $=n.current.clientHeight;y($)}};return b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b),y(0)}},[n,a,i]),j.useEffect(()=>{const b=()=>{if(r.current){const $=r.current.clientHeight;w($)}};return b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b),w(0)}},[r,a,i]);const h=()=>{setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},300)},m=()=>{o(!i),a&&S(),i||h()},S=()=>{s(!a),a||h()};return p.jsx(Nx,{basename:"/thoth/",children:p.jsxs(U1,{i18n:Oe,children:[p.jsx(rC,{}),p.jsx(NO,{ref:e,headerHeight:l,isLanguagesOpen:i,isBurgerMenuOpen:a,languagesHandler:m,burgerMenuHandler:S,containerHeight:d||f||v,paymentFeesHeight:f,sections:g}),p.jsx(gP,{className:"styled-container",$isBurgerMenuOpen:a,$containerHeight:d||f||v,$isLanguagesOpen:i,$headerHeight:l}),p.jsxs(_x,{children:[p.jsx(Kn,{path:"/",element:p.jsx(N$,{mainScreenRef:t,sections:g})}),p.jsx(Kn,{path:"/payment-fees",element:p.jsx(nC,{ref:n})}),p.jsx(Kn,{path:"/faq",element:p.jsx(KO,{})}),p.jsx(Kn,{path:"/news/:id",element:p.jsx(hP,{})}),p.jsx(Kn,{path:"*",element:p.jsx(Hv,{ref:r})})]}),p.jsx(GO,{})]})})};il.createRoot(document.getElementById("root")).render(p.jsx(j.StrictMode,{children:p.jsx(mP,{})}));
//# sourceMappingURL=main-3d7153d6.js.map
