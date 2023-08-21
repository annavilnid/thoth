var dx=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var lF=dx((gt,mt)=>{function rv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Fn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function fx(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var iv={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),px=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),gx=Symbol.for("react.strict_mode"),mx=Symbol.for("react.profiler"),vx=Symbol.for("react.provider"),yx=Symbol.for("react.context"),wx=Symbol.for("react.forward_ref"),xx=Symbol.for("react.suspense"),Sx=Symbol.for("react.memo"),bx=Symbol.for("react.lazy"),Cp=Symbol.iterator;function $x(e){return e===null||typeof e!="object"?null:(e=Cp&&e[Cp]||e["@@iterator"],typeof e=="function"?e:null)}var ov={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},av=Object.assign,sv={};function Li(e,t,n){this.props=e,this.context=t,this.refs=sv,this.updater=n||ov}Li.prototype.isReactComponent={};Li.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Li.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lv(){}lv.prototype=Li.prototype;function Ld(e,t,n){this.props=e,this.context=t,this.refs=sv,this.updater=n||ov}var Rd=Ld.prototype=new lv;Rd.constructor=Ld;av(Rd,Li.prototype);Rd.isPureReactComponent=!0;var Ep=Array.isArray,uv=Object.prototype.hasOwnProperty,Id={current:null},cv={key:!0,ref:!0,__self:!0,__source:!0};function dv(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)uv.call(t,r)&&!cv.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Wo,type:e,key:o,ref:a,props:i,_owner:Id.current}}function kx(e,t){return{$$typeof:Wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wo}function Cx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Op=/\/+/g;function zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cx(""+e.key):t.toString(36)}function Ca(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Wo:case px:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+zl(a,0):r,Ep(i)?(n="",e!=null&&(n=e.replace(Op,"$&/")+"/"),Ca(i,t,n,"",function(u){return u})):i!=null&&(Fd(i)&&(i=kx(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Op,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Ep(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+zl(o,s);a+=Ca(o,t,n,l,i)}else if(l=$x(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+zl(o,s++),a+=Ca(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ea(e,t,n){if(e==null)return e;var r=[],i=0;return Ca(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ex(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var nt={current:null},Ea={transition:null},Ox={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:Id};ie.Children={map:ea,forEach:function(e,t,n){ea(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ea(e,function(){t++}),t},toArray:function(e){return ea(e,function(t){return t})||[]},only:function(e){if(!Fd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Li;ie.Fragment=hx;ie.Profiler=mx;ie.PureComponent=Ld;ie.StrictMode=gx;ie.Suspense=xx;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ox;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=av({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Id.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)uv.call(t,l)&&!cv.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Wo,type:e.type,key:i,ref:o,props:r,_owner:a}};ie.createContext=function(e){return e={$$typeof:yx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vx,_context:e},e.Consumer=e};ie.createElement=dv;ie.createFactory=function(e){var t=dv.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:wx,render:e}};ie.isValidElement=Fd;ie.lazy=function(e){return{$$typeof:bx,_payload:{_status:-1,_result:e},_init:Ex}};ie.memo=function(e,t){return{$$typeof:Sx,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=Ea.transition;Ea.transition={};try{e()}finally{Ea.transition=t}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(e,t){return nt.current.useCallback(e,t)};ie.useContext=function(e){return nt.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return nt.current.useDeferredValue(e)};ie.useEffect=function(e,t){return nt.current.useEffect(e,t)};ie.useId=function(){return nt.current.useId()};ie.useImperativeHandle=function(e,t,n){return nt.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return nt.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return nt.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return nt.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return nt.current.useReducer(e,t,n)};ie.useRef=function(e){return nt.current.useRef(e)};ie.useState=function(e){return nt.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return nt.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return nt.current.useTransition()};ie.version="18.2.0";iv.exports=ie;var E=iv.exports;const Mt=_r(E),_x=rv({__proto__:null,default:Mt},[E]);var fv={exports:{}},Ds={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tx=E,jx=Symbol.for("react.element"),Px=Symbol.for("react.fragment"),Lx=Object.prototype.hasOwnProperty,Rx=Tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ix={key:!0,ref:!0,__self:!0,__source:!0};function pv(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Lx.call(t,r)&&!Ix.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:jx,type:e,key:o,ref:a,props:i,_owner:Rx.current}}Ds.Fragment=Px;Ds.jsx=pv;Ds.jsxs=pv;fv.exports=Ds;var h=fv.exports,Du={},hv={exports:{}},wt={},gv={exports:{}},mv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,N){var V=I.length;I.push(N);e:for(;0<V;){var J=V-1>>>1,Q=I[J];if(0<i(Q,N))I[J]=N,I[V]=Q,V=J;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var N=I[0],V=I.pop();if(V!==N){I[0]=V;e:for(var J=0,Q=I.length,kt=Q>>>1;J<kt;){var Oe=2*(J+1)-1,Je=I[Oe],qe=Oe+1,dt=I[qe];if(0>i(Je,V))qe<Q&&0>i(dt,Je)?(I[J]=dt,I[qe]=V,J=qe):(I[J]=Je,I[Oe]=V,J=Oe);else if(qe<Q&&0>i(dt,V))I[J]=dt,I[qe]=V,J=qe;else break e}}return N}function i(I,N){var V=I.sortIndex-N.sortIndex;return V!==0?V:I.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,d=null,c=3,y=!1,v=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=I)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function S(I){if(w=!1,m(I),!v)if(n(l)!==null)v=!0,W(O);else{var N=n(u);N!==null&&Y(S,N.startTime-I)}}function O(I,N){v=!1,w&&(w=!1,g(_),_=-1),y=!0;var V=c;try{for(m(N),d=n(l);d!==null&&(!(d.expirationTime>N)||I&&!D());){var J=d.callback;if(typeof J=="function"){d.callback=null,c=d.priorityLevel;var Q=J(d.expirationTime<=N);N=e.unstable_now(),typeof Q=="function"?d.callback=Q:d===n(l)&&r(l),m(N)}else r(l);d=n(l)}if(d!==null)var kt=!0;else{var Oe=n(u);Oe!==null&&Y(S,Oe.startTime-N),kt=!1}return kt}finally{d=null,c=V,y=!1}}var $=!1,C=null,_=-1,P=5,L=-1;function D(){return!(e.unstable_now()-L<P)}function U(){if(C!==null){var I=e.unstable_now();L=I;var N=!0;try{N=C(!0,I)}finally{N?A():($=!1,C=null)}}else $=!1}var A;if(typeof p=="function")A=function(){p(U)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,R=T.port2;T.port1.onmessage=U,A=function(){R.postMessage(null)}}else A=function(){b(U,0)};function W(I){C=I,$||($=!0,A())}function Y(I,N){_=b(function(){I(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,W(O))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(c){case 1:case 2:case 3:var N=3;break;default:N=c}var V=c;c=N;try{return I()}finally{c=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,N){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var V=c;c=I;try{return N()}finally{c=V}},e.unstable_scheduleCallback=function(I,N,V){var J=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?J+V:J):V=J,I){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=V+Q,I={id:f++,callback:N,priorityLevel:I,startTime:V,expirationTime:Q,sortIndex:-1},V>J?(I.sortIndex=V,t(u,I),n(l)===null&&I===n(u)&&(w?(g(_),_=-1):w=!0,Y(S,V-J))):(I.sortIndex=Q,t(l,I),v||y||(v=!0,W(O))),I},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(I){var N=c;return function(){var V=c;c=N;try{return I.apply(this,arguments)}finally{c=V}}}})(mv);gv.exports=mv;var Fx=gv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv=E,yt=Fx;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yv=new Set,mo={};function Tr(e,t){gi(e,t),gi(e+"Capture",t)}function gi(e,t){for(mo[e]=t,e=0;e<t.length;e++)yv.add(t[e])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=Object.prototype.hasOwnProperty,Nx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_p={},Tp={};function Ax(e){return Mu.call(Tp,e)?!0:Mu.call(_p,e)?!1:Nx.test(e)?Tp[e]=!0:(_p[e]=!0,!1)}function zx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dx(e,t,n,r){if(t===null||typeof t>"u"||zx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function rt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nd=/[\-:]([a-z])/g;function Ad(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nd,Ad);Ve[t]=new rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nd,Ad);Ve[t]=new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nd,Ad);Ve[t]=new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new rt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function zd(e,t,n,r){var i=Ve.hasOwnProperty(t)?Ve[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dx(t,n,i,r)&&(n=null),r||i===null?Ax(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xn=vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),Uu=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),xv=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),Hu=Symbol.for("react.suspense"),Bu=Symbol.for("react.suspense_list"),Ud=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),Sv=Symbol.for("react.offscreen"),jp=Symbol.iterator;function Mi(e){return e===null||typeof e!="object"?null:(e=jp&&e[jp]||e["@@iterator"],typeof e=="function"?e:null)}var Ce=Object.assign,Dl;function Yi(e){if(Dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dl=t&&t[1]||""}return`
`+Dl+e}var Ml=!1;function Ul(e,t){if(!e||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yi(e):""}function Mx(e){switch(e.tag){case 5:return Yi(e.type);case 16:return Yi("Lazy");case 13:return Yi("Suspense");case 19:return Yi("SuspenseList");case 0:case 2:case 15:return e=Ul(e.type,!1),e;case 11:return e=Ul(e.type.render,!1),e;case 1:return e=Ul(e.type,!0),e;default:return""}}function Wu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qr:return"Fragment";case Vr:return"Portal";case Uu:return"Profiler";case Dd:return"StrictMode";case Hu:return"Suspense";case Bu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xv:return(e.displayName||"Context")+".Consumer";case wv:return(e._context.displayName||"Context")+".Provider";case Md:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ud:return t=e.displayName||null,t!==null?t:Wu(e.type)||"Memo";case Tn:t=e._payload,e=e._init;try{return Wu(e(t))}catch{}}return null}function Ux(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wu(t);case 8:return t===Dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hx(e){var t=bv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function na(e){e._valueTracker||(e._valueTracker=Hx(e))}function $v(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vu(e,t){var n=t.checked;return Ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Qn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kv(e,t){t=t.checked,t!=null&&zd(e,"checked",t,!1)}function qu(e,t){kv(e,t);var n=Qn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gu(e,t.type,Qn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gu(e,t,n){(t!=="number"||Ha(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xi=Array.isArray;function si(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Qn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ku(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Xi(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qn(n)}}function Cv(e,t){var n=Qn(t.value),r=Qn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ip(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ev(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ev(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ra,Ov=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ra=ra||document.createElement("div"),ra.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ra.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bx=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(e){Bx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),to[t]=to[e]})});function _v(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||to.hasOwnProperty(e)&&to[e]?(""+t).trim():t+"px"}function Tv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_v(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wx=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(e,t){if(t){if(Wx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function Xu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ju=null;function Hd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zu=null,li=null,ui=null;function Fp(e){if(e=Go(e)){if(typeof Zu!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Ws(t),Zu(e.stateNode,e.type,t))}}function jv(e){li?ui?ui.push(e):ui=[e]:li=e}function Pv(){if(li){var e=li,t=ui;if(ui=li=null,Fp(e),t)for(e=0;e<t.length;e++)Fp(t[e])}}function Lv(e,t){return e(t)}function Rv(){}var Hl=!1;function Iv(e,t,n){if(Hl)return e(t,n);Hl=!0;try{return Lv(e,t,n)}finally{Hl=!1,(li!==null||ui!==null)&&(Rv(),Pv())}}function yo(e,t){var n=e.stateNode;if(n===null)return null;var r=Ws(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var ec=!1;if(mn)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){ec=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{ec=!1}function Vx(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var no=!1,Ba=null,Wa=!1,tc=null,qx={onError:function(e){no=!0,Ba=e}};function Gx(e,t,n,r,i,o,a,s,l){no=!1,Ba=null,Vx.apply(qx,arguments)}function Kx(e,t,n,r,i,o,a,s,l){if(Gx.apply(this,arguments),no){if(no){var u=Ba;no=!1,Ba=null}else throw Error(F(198));Wa||(Wa=!0,tc=u)}}function jr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Np(e){if(jr(e)!==e)throw Error(F(188))}function Qx(e){var t=e.alternate;if(!t){if(t=jr(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Np(i),e;if(o===r)return Np(i),t;o=o.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Nv(e){return e=Qx(e),e!==null?Av(e):null}function Av(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Av(e);if(t!==null)return t;e=e.sibling}return null}var zv=yt.unstable_scheduleCallback,Ap=yt.unstable_cancelCallback,Yx=yt.unstable_shouldYield,Xx=yt.unstable_requestPaint,_e=yt.unstable_now,Jx=yt.unstable_getCurrentPriorityLevel,Bd=yt.unstable_ImmediatePriority,Dv=yt.unstable_UserBlockingPriority,Va=yt.unstable_NormalPriority,Zx=yt.unstable_LowPriority,Mv=yt.unstable_IdlePriority,Ms=null,Zt=null;function eS(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ms,e,void 0,(e.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:rS,tS=Math.log,nS=Math.LN2;function rS(e){return e>>>=0,e===0?32:31-(tS(e)/nS|0)|0}var ia=64,oa=4194304;function Ji(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Ji(s):(o&=a,o!==0&&(r=Ji(o)))}else a=n&~i,a!==0?r=Ji(a):o!==0&&(r=Ji(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ut(t),i=1<<n,r|=e[n],t&=~i;return r}function iS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ut(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=iS(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function nc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uv(){var e=ia;return ia<<=1,!(ia&4194240)&&(ia=64),e}function Bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ut(t),e[t]=n}function aS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ut(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Wd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ce=0;function Hv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bv,Vd,Wv,Vv,qv,rc=!1,aa=[],Mn=null,Un=null,Hn=null,wo=new Map,xo=new Map,Rn=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(t.pointerId)}}function Hi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Go(t),t!==null&&Vd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lS(e,t,n,r,i){switch(t){case"focusin":return Mn=Hi(Mn,e,t,n,r,i),!0;case"dragenter":return Un=Hi(Un,e,t,n,r,i),!0;case"mouseover":return Hn=Hi(Hn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return wo.set(o,Hi(wo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,xo.set(o,Hi(xo.get(o)||null,e,t,n,r,i)),!0}return!1}function Gv(e){var t=sr(e.target);if(t!==null){var n=jr(t);if(n!==null){if(t=n.tag,t===13){if(t=Fv(n),t!==null){e.blockedOn=t,qv(e.priority,function(){Wv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ic(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ju=r,n.target.dispatchEvent(r),Ju=null}else return t=Go(n),t!==null&&Vd(t),e.blockedOn=n,!1;t.shift()}return!0}function Dp(e,t,n){Oa(e)&&n.delete(t)}function uS(){rc=!1,Mn!==null&&Oa(Mn)&&(Mn=null),Un!==null&&Oa(Un)&&(Un=null),Hn!==null&&Oa(Hn)&&(Hn=null),wo.forEach(Dp),xo.forEach(Dp)}function Bi(e,t){e.blockedOn===t&&(e.blockedOn=null,rc||(rc=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,uS)))}function So(e){function t(i){return Bi(i,e)}if(0<aa.length){Bi(aa[0],e);for(var n=1;n<aa.length;n++){var r=aa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mn!==null&&Bi(Mn,e),Un!==null&&Bi(Un,e),Hn!==null&&Bi(Hn,e),wo.forEach(t),xo.forEach(t),n=0;n<Rn.length;n++)r=Rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rn.length&&(n=Rn[0],n.blockedOn===null);)Gv(n),n.blockedOn===null&&Rn.shift()}var ci=xn.ReactCurrentBatchConfig,Ga=!0;function cS(e,t,n,r){var i=ce,o=ci.transition;ci.transition=null;try{ce=1,qd(e,t,n,r)}finally{ce=i,ci.transition=o}}function dS(e,t,n,r){var i=ce,o=ci.transition;ci.transition=null;try{ce=4,qd(e,t,n,r)}finally{ce=i,ci.transition=o}}function qd(e,t,n,r){if(Ga){var i=ic(e,t,n,r);if(i===null)Zl(e,t,r,Ka,n),zp(e,r);else if(lS(i,e,t,n,r))r.stopPropagation();else if(zp(e,r),t&4&&-1<sS.indexOf(e)){for(;i!==null;){var o=Go(i);if(o!==null&&Bv(o),o=ic(e,t,n,r),o===null&&Zl(e,t,r,Ka,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var Ka=null;function ic(e,t,n,r){if(Ka=null,e=Hd(r),e=sr(e),e!==null)if(t=jr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ka=e,null}function Kv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jx()){case Bd:return 1;case Dv:return 4;case Va:case Zx:return 16;case Mv:return 536870912;default:return 16}default:return 16}}var Nn=null,Gd=null,_a=null;function Qv(){if(_a)return _a;var e,t=Gd,n=t.length,r,i="value"in Nn?Nn.value:Nn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return _a=i.slice(e,1<r?1-r:void 0)}function Ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sa(){return!0}function Mp(){return!1}function xt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?sa:Mp,this.isPropagationStopped=Mp,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),t}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kd=xt(Ri),qo=Ce({},Ri,{view:0,detail:0}),fS=xt(qo),Wl,Vl,Wi,Us=Ce({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wi&&(Wi&&e.type==="mousemove"?(Wl=e.screenX-Wi.screenX,Vl=e.screenY-Wi.screenY):Vl=Wl=0,Wi=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Vl}}),Up=xt(Us),pS=Ce({},Us,{dataTransfer:0}),hS=xt(pS),gS=Ce({},qo,{relatedTarget:0}),ql=xt(gS),mS=Ce({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),vS=xt(mS),yS=Ce({},Ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wS=xt(yS),xS=Ce({},Ri,{data:0}),Hp=xt(xS),SS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$S={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$S[e])?!!t[e]:!1}function Qd(){return kS}var CS=Ce({},qo,{key:function(e){if(e.key){var t=SS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qd,charCode:function(e){return e.type==="keypress"?Ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ES=xt(CS),OS=Ce({},Us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=xt(OS),_S=Ce({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qd}),TS=xt(_S),jS=Ce({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),PS=xt(jS),LS=Ce({},Us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),RS=xt(LS),IS=[9,13,27,32],Yd=mn&&"CompositionEvent"in window,ro=null;mn&&"documentMode"in document&&(ro=document.documentMode);var FS=mn&&"TextEvent"in window&&!ro,Yv=mn&&(!Yd||ro&&8<ro&&11>=ro),Wp=String.fromCharCode(32),Vp=!1;function Xv(e,t){switch(e){case"keyup":return IS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function NS(e,t){switch(e){case"compositionend":return Jv(t);case"keypress":return t.which!==32?null:(Vp=!0,Wp);case"textInput":return e=t.data,e===Wp&&Vp?null:e;default:return null}}function AS(e,t){if(Gr)return e==="compositionend"||!Yd&&Xv(e,t)?(e=Qv(),_a=Gd=Nn=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yv&&t.locale!=="ko"?null:t.data;default:return null}}var zS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zS[e.type]:t==="textarea"}function Zv(e,t,n,r){jv(r),t=Qa(t,"onChange"),0<t.length&&(n=new Kd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var io=null,bo=null;function DS(e){cy(e,0)}function Hs(e){var t=Yr(e);if($v(t))return e}function MS(e,t){if(e==="change")return t}var ey=!1;if(mn){var Gl;if(mn){var Kl="oninput"in document;if(!Kl){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Kl=typeof Gp.oninput=="function"}Gl=Kl}else Gl=!1;ey=Gl&&(!document.documentMode||9<document.documentMode)}function Kp(){io&&(io.detachEvent("onpropertychange",ty),bo=io=null)}function ty(e){if(e.propertyName==="value"&&Hs(bo)){var t=[];Zv(t,bo,e,Hd(e)),Iv(DS,t)}}function US(e,t,n){e==="focusin"?(Kp(),io=t,bo=n,io.attachEvent("onpropertychange",ty)):e==="focusout"&&Kp()}function HS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hs(bo)}function BS(e,t){if(e==="click")return Hs(t)}function WS(e,t){if(e==="input"||e==="change")return Hs(t)}function VS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wt=typeof Object.is=="function"?Object.is:VS;function $o(e,t){if(Wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mu.call(t,i)||!Wt(e[i],t[i]))return!1}return!0}function Qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,t){var n=Qp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qp(n)}}function ny(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ny(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ry(){for(var e=window,t=Ha();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ha(e.document)}return t}function Xd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qS(e){var t=ry(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ny(n.ownerDocument.documentElement,n)){if(r!==null&&Xd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Yp(n,o);var a=Yp(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var GS=mn&&"documentMode"in document&&11>=document.documentMode,Kr=null,oc=null,oo=null,ac=!1;function Xp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ac||Kr==null||Kr!==Ha(r)||(r=Kr,"selectionStart"in r&&Xd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oo&&$o(oo,r)||(oo=r,r=Qa(oc,"onSelect"),0<r.length&&(t=new Kd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kr)))}function la(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qr={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},Ql={},iy={};mn&&(iy=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Bs(e){if(Ql[e])return Ql[e];if(!Qr[e])return e;var t=Qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in iy)return Ql[e]=t[n];return e}var oy=Bs("animationend"),ay=Bs("animationiteration"),sy=Bs("animationstart"),ly=Bs("transitionend"),uy=new Map,Jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(e,t){uy.set(e,t),Tr(t,[e])}for(var Yl=0;Yl<Jp.length;Yl++){var Xl=Jp[Yl],KS=Xl.toLowerCase(),QS=Xl[0].toUpperCase()+Xl.slice(1);Jn(KS,"on"+QS)}Jn(oy,"onAnimationEnd");Jn(ay,"onAnimationIteration");Jn(sy,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(ly,"onTransitionEnd");gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));function Zp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kx(r,t,void 0,e),e.currentTarget=null}function cy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Zp(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Zp(i,s,u),o=l}}}if(Wa)throw e=tc,Wa=!1,tc=null,e}function ge(e,t){var n=t[dc];n===void 0&&(n=t[dc]=new Set);var r=e+"__bubble";n.has(r)||(dy(t,e,2,!1),n.add(r))}function Jl(e,t,n){var r=0;t&&(r|=4),dy(n,e,r,t)}var ua="_reactListening"+Math.random().toString(36).slice(2);function ko(e){if(!e[ua]){e[ua]=!0,yv.forEach(function(n){n!=="selectionchange"&&(YS.has(n)||Jl(n,!1,e),Jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ua]||(t[ua]=!0,Jl("selectionchange",!1,t))}}function dy(e,t,n,r){switch(Kv(t)){case 1:var i=cS;break;case 4:i=dS;break;default:i=qd}n=i.bind(null,t,n,e),i=void 0,!ec||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=sr(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Iv(function(){var u=o,f=Hd(n),d=[];e:{var c=uy.get(e);if(c!==void 0){var y=Kd,v=e;switch(e){case"keypress":if(Ta(n)===0)break e;case"keydown":case"keyup":y=ES;break;case"focusin":v="focus",y=ql;break;case"focusout":v="blur",y=ql;break;case"beforeblur":case"afterblur":y=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=hS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=TS;break;case oy:case ay:case sy:y=vS;break;case ly:y=PS;break;case"scroll":y=fS;break;case"wheel":y=RS;break;case"copy":case"cut":case"paste":y=wS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Bp}var w=(t&4)!==0,b=!w&&e==="scroll",g=w?c!==null?c+"Capture":null:c;w=[];for(var p=u,m;p!==null;){m=p;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,g!==null&&(S=yo(p,g),S!=null&&w.push(Co(p,S,m)))),b)break;p=p.return}0<w.length&&(c=new y(c,v,null,n,f),d.push({event:c,listeners:w}))}}if(!(t&7)){e:{if(c=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",c&&n!==Ju&&(v=n.relatedTarget||n.fromElement)&&(sr(v)||v[vn]))break e;if((y||c)&&(c=f.window===f?f:(c=f.ownerDocument)?c.defaultView||c.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?sr(v):null,v!==null&&(b=jr(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Up,S="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Bp,S="onPointerLeave",g="onPointerEnter",p="pointer"),b=y==null?c:Yr(y),m=v==null?c:Yr(v),c=new w(S,p+"leave",y,n,f),c.target=b,c.relatedTarget=m,S=null,sr(f)===u&&(w=new w(g,p+"enter",v,n,f),w.target=m,w.relatedTarget=b,S=w),b=S,y&&v)t:{for(w=y,g=v,p=0,m=w;m;m=Dr(m))p++;for(m=0,S=g;S;S=Dr(S))m++;for(;0<p-m;)w=Dr(w),p--;for(;0<m-p;)g=Dr(g),m--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=Dr(w),g=Dr(g)}w=null}else w=null;y!==null&&eh(d,c,y,w,!1),v!==null&&b!==null&&eh(d,b,v,w,!0)}}e:{if(c=u?Yr(u):window,y=c.nodeName&&c.nodeName.toLowerCase(),y==="select"||y==="input"&&c.type==="file")var O=MS;else if(qp(c))if(ey)O=WS;else{O=HS;var $=US}else(y=c.nodeName)&&y.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(O=BS);if(O&&(O=O(e,u))){Zv(d,O,n,f);break e}$&&$(e,c,u),e==="focusout"&&($=c._wrapperState)&&$.controlled&&c.type==="number"&&Gu(c,"number",c.value)}switch($=u?Yr(u):window,e){case"focusin":(qp($)||$.contentEditable==="true")&&(Kr=$,oc=u,oo=null);break;case"focusout":oo=oc=Kr=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Xp(d,n,f);break;case"selectionchange":if(GS)break;case"keydown":case"keyup":Xp(d,n,f)}var C;if(Yd)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Gr?Xv(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Yv&&n.locale!=="ko"&&(Gr||_!=="onCompositionStart"?_==="onCompositionEnd"&&Gr&&(C=Qv()):(Nn=f,Gd="value"in Nn?Nn.value:Nn.textContent,Gr=!0)),$=Qa(u,_),0<$.length&&(_=new Hp(_,e,null,n,f),d.push({event:_,listeners:$}),C?_.data=C:(C=Jv(n),C!==null&&(_.data=C)))),(C=FS?NS(e,n):AS(e,n))&&(u=Qa(u,"onBeforeInput"),0<u.length&&(f=new Hp("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=C))}cy(d,t)})}function Co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=yo(e,n),o!=null&&r.unshift(Co(e,o,i)),o=yo(e,t),o!=null&&r.push(Co(e,o,i))),e=e.return}return r}function Dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eh(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=yo(n,o),l!=null&&a.unshift(Co(n,l,s))):i||(l=yo(n,o),l!=null&&a.push(Co(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var XS=/\r\n?/g,JS=/\u0000|\uFFFD/g;function th(e){return(typeof e=="string"?e:""+e).replace(XS,`
`).replace(JS,"")}function ca(e,t,n){if(t=th(t),th(e)!==t&&n)throw Error(F(425))}function Ya(){}var sc=null,lc=null;function uc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,ZS=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,eb=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(e){return nh.resolve(null).then(e).catch(tb)}:cc;function tb(e){setTimeout(function(){throw e})}function eu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),So(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);So(t)}function Bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ii=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Ii,Eo="__reactProps$"+Ii,vn="__reactContainer$"+Ii,dc="__reactEvents$"+Ii,nb="__reactListeners$"+Ii,rb="__reactHandles$"+Ii;function sr(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vn]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rh(e);e!==null;){if(n=e[Xt])return n;e=rh(e)}return t}e=n,n=e.parentNode}return null}function Go(e){return e=e[Xt]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Ws(e){return e[Eo]||null}var fc=[],Xr=-1;function Zn(e){return{current:e}}function ye(e){0>Xr||(e.current=fc[Xr],fc[Xr]=null,Xr--)}function he(e,t){Xr++,fc[Xr]=e.current,e.current=t}var Yn={},Xe=Zn(Yn),lt=Zn(!1),wr=Yn;function mi(e,t){var n=e.type.contextTypes;if(!n)return Yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ut(e){return e=e.childContextTypes,e!=null}function Xa(){ye(lt),ye(Xe)}function ih(e,t,n){if(Xe.current!==Yn)throw Error(F(168));he(Xe,t),he(lt,n)}function fy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,Ux(e)||"Unknown",i));return Ce({},n,r)}function Ja(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,wr=Xe.current,he(Xe,e),he(lt,lt.current),!0}function oh(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=fy(e,t,wr),r.__reactInternalMemoizedMergedChildContext=e,ye(lt),ye(Xe),he(Xe,e)):ye(lt),he(lt,n)}var dn=null,Vs=!1,tu=!1;function py(e){dn===null?dn=[e]:dn.push(e)}function ib(e){Vs=!0,py(e)}function er(){if(!tu&&dn!==null){tu=!0;var e=0,t=ce;try{var n=dn;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dn=null,Vs=!1}catch(i){throw dn!==null&&(dn=dn.slice(e+1)),zv(Bd,er),i}finally{ce=t,tu=!1}}return null}var Jr=[],Zr=0,Za=null,es=0,Et=[],Ot=0,xr=null,fn=1,pn="";function ir(e,t){Jr[Zr++]=es,Jr[Zr++]=Za,Za=e,es=t}function hy(e,t,n){Et[Ot++]=fn,Et[Ot++]=pn,Et[Ot++]=xr,xr=e;var r=fn;e=pn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var o=32-Ut(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,fn=1<<32-Ut(t)+i|n<<i|r,pn=o+e}else fn=1<<o|n<<i|r,pn=e}function Jd(e){e.return!==null&&(ir(e,1),hy(e,1,0))}function Zd(e){for(;e===Za;)Za=Jr[--Zr],Jr[Zr]=null,es=Jr[--Zr],Jr[Zr]=null;for(;e===xr;)xr=Et[--Ot],Et[Ot]=null,pn=Et[--Ot],Et[Ot]=null,fn=Et[--Ot],Et[Ot]=null}var vt=null,ht=null,Se=!1,Dt=null;function gy(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ah(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,ht=Bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xr!==null?{id:fn,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,ht=null,!0):!1;default:return!1}}function pc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hc(e){if(Se){var t=ht;if(t){var n=t;if(!ah(e,t)){if(pc(e))throw Error(F(418));t=Bn(n.nextSibling);var r=vt;t&&ah(e,t)?gy(r,n):(e.flags=e.flags&-4097|2,Se=!1,vt=e)}}else{if(pc(e))throw Error(F(418));e.flags=e.flags&-4097|2,Se=!1,vt=e}}}function sh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function da(e){if(e!==vt)return!1;if(!Se)return sh(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uc(e.type,e.memoizedProps)),t&&(t=ht)){if(pc(e))throw my(),Error(F(418));for(;t;)gy(e,t),t=Bn(t.nextSibling)}if(sh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ht=Bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ht=null}}else ht=vt?Bn(e.stateNode.nextSibling):null;return!0}function my(){for(var e=ht;e;)e=Bn(e.nextSibling)}function vi(){ht=vt=null,Se=!1}function ef(e){Dt===null?Dt=[e]:Dt.push(e)}var ob=xn.ReactCurrentBatchConfig;function At(e,t){if(e&&e.defaultProps){t=Ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ts=Zn(null),ns=null,ei=null,tf=null;function nf(){tf=ei=ns=null}function rf(e){var t=ts.current;ye(ts),e._currentValue=t}function gc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function di(e,t){ns=e,tf=ei=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(st=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(tf!==e)if(e={context:e,memoizedValue:t,next:null},ei===null){if(ns===null)throw Error(F(308));ei=e,ns.dependencies={lanes:0,firstContext:e}}else ei=ei.next=e;return t}var lr=null;function of(e){lr===null?lr=[e]:lr.push(e)}function vy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,of(t)):(n.next=i.next,i.next=n),t.interleaved=n,yn(e,r)}function yn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jn=!1;function af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,yn(e,n)}return i=r.interleaved,i===null?(t.next=t,of(r)):(t.next=i.next,i.next=t),r.interleaved=t,yn(e,n)}function ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wd(e,n)}}function lh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rs(e,t,n,r){var i=e.updateQueue;jn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,f=u=l=null,s=o;do{var c=s.lane,y=s.eventTime;if((r&c)===c){f!==null&&(f=f.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(c=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(y,d,c);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,c=typeof v=="function"?v.call(y,d,c):v,c==null)break e;d=Ce({},d,c);break e;case 2:jn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,c=i.effects,c===null?i.effects=[s]:c.push(s))}else y={eventTime:y,lane:c,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=y,l=d):f=f.next=y,a|=c;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;c=s,s=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(1);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);br|=a,e.lanes=a,e.memoizedState=d}}function uh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var wy=new vv.Component().refs;function mc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={isMounted:function(e){return(e=e._reactInternals)?jr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),i=qn(e),o=hn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Wn(e,o,i),t!==null&&(Ht(t,e,i,r),ja(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),i=qn(e),o=hn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Wn(e,o,i),t!==null&&(Ht(t,e,i,r),ja(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=qn(e),i=hn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Wn(e,i,r),t!==null&&(Ht(t,e,r,n),ja(t,e,r))}};function ch(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!$o(n,r)||!$o(i,o):!0}function xy(e,t,n){var r=!1,i=Yn,o=t.contextType;return typeof o=="object"&&o!==null?o=jt(o):(i=ut(t)?wr:Xe.current,r=t.contextTypes,o=(r=r!=null)?mi(e,i):Yn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function dh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function vc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=wy,af(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=jt(o):(o=ut(t)?wr:Xe.current,i.context=mi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(mc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&qs.enqueueReplaceState(i,i.state,null),rs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===wy&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function fa(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fh(e){var t=e._init;return t(e._payload)}function Sy(e){function t(g,p){if(e){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Gn(g,p),g.index=0,g.sibling=null,g}function o(g,p,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,m,S){return p===null||p.tag!==6?(p=lu(m,g.mode,S),p.return=g,p):(p=i(p,m),p.return=g,p)}function l(g,p,m,S){var O=m.type;return O===qr?f(g,p,m.props.children,S,m.key):p!==null&&(p.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Tn&&fh(O)===p.type)?(S=i(p,m.props),S.ref=Vi(g,p,m),S.return=g,S):(S=Na(m.type,m.key,m.props,null,g.mode,S),S.ref=Vi(g,p,m),S.return=g,S)}function u(g,p,m,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=uu(m,g.mode,S),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function f(g,p,m,S,O){return p===null||p.tag!==7?(p=hr(m,g.mode,S,O),p.return=g,p):(p=i(p,m),p.return=g,p)}function d(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=lu(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ta:return m=Na(p.type,p.key,p.props,null,g.mode,m),m.ref=Vi(g,null,p),m.return=g,m;case Vr:return p=uu(p,g.mode,m),p.return=g,p;case Tn:var S=p._init;return d(g,S(p._payload),m)}if(Xi(p)||Mi(p))return p=hr(p,g.mode,m,null),p.return=g,p;fa(g,p)}return null}function c(g,p,m,S){var O=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return O!==null?null:s(g,p,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ta:return m.key===O?l(g,p,m,S):null;case Vr:return m.key===O?u(g,p,m,S):null;case Tn:return O=m._init,c(g,p,O(m._payload),S)}if(Xi(m)||Mi(m))return O!==null?null:f(g,p,m,S,null);fa(g,m)}return null}function y(g,p,m,S,O){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(m)||null,s(p,g,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ta:return g=g.get(S.key===null?m:S.key)||null,l(p,g,S,O);case Vr:return g=g.get(S.key===null?m:S.key)||null,u(p,g,S,O);case Tn:var $=S._init;return y(g,p,m,$(S._payload),O)}if(Xi(S)||Mi(S))return g=g.get(m)||null,f(p,g,S,O,null);fa(p,S)}return null}function v(g,p,m,S){for(var O=null,$=null,C=p,_=p=0,P=null;C!==null&&_<m.length;_++){C.index>_?(P=C,C=null):P=C.sibling;var L=c(g,C,m[_],S);if(L===null){C===null&&(C=P);break}e&&C&&L.alternate===null&&t(g,C),p=o(L,p,_),$===null?O=L:$.sibling=L,$=L,C=P}if(_===m.length)return n(g,C),Se&&ir(g,_),O;if(C===null){for(;_<m.length;_++)C=d(g,m[_],S),C!==null&&(p=o(C,p,_),$===null?O=C:$.sibling=C,$=C);return Se&&ir(g,_),O}for(C=r(g,C);_<m.length;_++)P=y(C,g,_,m[_],S),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?_:P.key),p=o(P,p,_),$===null?O=P:$.sibling=P,$=P);return e&&C.forEach(function(D){return t(g,D)}),Se&&ir(g,_),O}function w(g,p,m,S){var O=Mi(m);if(typeof O!="function")throw Error(F(150));if(m=O.call(m),m==null)throw Error(F(151));for(var $=O=null,C=p,_=p=0,P=null,L=m.next();C!==null&&!L.done;_++,L=m.next()){C.index>_?(P=C,C=null):P=C.sibling;var D=c(g,C,L.value,S);if(D===null){C===null&&(C=P);break}e&&C&&D.alternate===null&&t(g,C),p=o(D,p,_),$===null?O=D:$.sibling=D,$=D,C=P}if(L.done)return n(g,C),Se&&ir(g,_),O;if(C===null){for(;!L.done;_++,L=m.next())L=d(g,L.value,S),L!==null&&(p=o(L,p,_),$===null?O=L:$.sibling=L,$=L);return Se&&ir(g,_),O}for(C=r(g,C);!L.done;_++,L=m.next())L=y(C,g,_,L.value,S),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?_:L.key),p=o(L,p,_),$===null?O=L:$.sibling=L,$=L);return e&&C.forEach(function(U){return t(g,U)}),Se&&ir(g,_),O}function b(g,p,m,S){if(typeof m=="object"&&m!==null&&m.type===qr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ta:e:{for(var O=m.key,$=p;$!==null;){if($.key===O){if(O=m.type,O===qr){if($.tag===7){n(g,$.sibling),p=i($,m.props.children),p.return=g,g=p;break e}}else if($.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Tn&&fh(O)===$.type){n(g,$.sibling),p=i($,m.props),p.ref=Vi(g,$,m),p.return=g,g=p;break e}n(g,$);break}else t(g,$);$=$.sibling}m.type===qr?(p=hr(m.props.children,g.mode,S,m.key),p.return=g,g=p):(S=Na(m.type,m.key,m.props,null,g.mode,S),S.ref=Vi(g,p,m),S.return=g,g=S)}return a(g);case Vr:e:{for($=m.key;p!==null;){if(p.key===$)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=uu(m,g.mode,S),p.return=g,g=p}return a(g);case Tn:return $=m._init,b(g,p,$(m._payload),S)}if(Xi(m))return v(g,p,m,S);if(Mi(m))return w(g,p,m,S);fa(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=lu(m,g.mode,S),p.return=g,g=p),a(g)):n(g,p)}return b}var yi=Sy(!0),by=Sy(!1),Ko={},en=Zn(Ko),Oo=Zn(Ko),_o=Zn(Ko);function ur(e){if(e===Ko)throw Error(F(174));return e}function sf(e,t){switch(he(_o,t),he(Oo,e),he(en,Ko),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qu(t,e)}ye(en),he(en,t)}function wi(){ye(en),ye(Oo),ye(_o)}function $y(e){ur(_o.current);var t=ur(en.current),n=Qu(t,e.type);t!==n&&(he(Oo,e),he(en,n))}function lf(e){Oo.current===e&&(ye(en),ye(Oo))}var $e=Zn(0);function is(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nu=[];function uf(){for(var e=0;e<nu.length;e++)nu[e]._workInProgressVersionPrimary=null;nu.length=0}var Pa=xn.ReactCurrentDispatcher,ru=xn.ReactCurrentBatchConfig,Sr=0,ke=null,Le=null,Ne=null,os=!1,ao=!1,To=0,ab=0;function Ge(){throw Error(F(321))}function cf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wt(e[n],t[n]))return!1;return!0}function df(e,t,n,r,i,o){if(Sr=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pa.current=e===null||e.memoizedState===null?cb:db,e=n(r,i),ao){o=0;do{if(ao=!1,To=0,25<=o)throw Error(F(301));o+=1,Ne=Le=null,t.updateQueue=null,Pa.current=fb,e=n(r,i)}while(ao)}if(Pa.current=as,t=Le!==null&&Le.next!==null,Sr=0,Ne=Le=ke=null,os=!1,t)throw Error(F(300));return e}function ff(){var e=To!==0;return To=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ke.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Pt(){if(Le===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ne===null?ke.memoizedState:Ne.next;if(t!==null)Ne=t,Le=e;else{if(e===null)throw Error(F(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ne===null?ke.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function jo(e,t){return typeof t=="function"?t(e):t}function iu(e){var t=Pt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var f=u.lane;if((Sr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,ke.lanes|=f,br|=f}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Wt(r,t.memoizedState)||(st=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,br|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ou(e){var t=Pt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Wt(o,t.memoizedState)||(st=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ky(){}function Cy(e,t){var n=ke,r=Pt(),i=t(),o=!Wt(r.memoizedState,i);if(o&&(r.memoizedState=i,st=!0),r=r.queue,pf(_y.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Po(9,Oy.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(F(349));Sr&30||Ey(n,t,i)}return i}function Ey(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Oy(e,t,n,r){t.value=n,t.getSnapshot=r,Ty(t)&&jy(e)}function _y(e,t,n){return n(function(){Ty(t)&&jy(e)})}function Ty(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wt(e,n)}catch{return!0}}function jy(e){var t=yn(e,1);t!==null&&Ht(t,e,1,-1)}function ph(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:e},t.queue=e,e=e.dispatch=ub.bind(null,ke,e),[t.memoizedState,e]}function Po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Py(){return Pt().memoizedState}function La(e,t,n,r){var i=Qt();ke.flags|=e,i.memoizedState=Po(1|t,n,void 0,r===void 0?null:r)}function Gs(e,t,n,r){var i=Pt();r=r===void 0?null:r;var o=void 0;if(Le!==null){var a=Le.memoizedState;if(o=a.destroy,r!==null&&cf(r,a.deps)){i.memoizedState=Po(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Po(1|t,n,o,r)}function hh(e,t){return La(8390656,8,e,t)}function pf(e,t){return Gs(2048,8,e,t)}function Ly(e,t){return Gs(4,2,e,t)}function Ry(e,t){return Gs(4,4,e,t)}function Iy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fy(e,t,n){return n=n!=null?n.concat([e]):null,Gs(4,4,Iy.bind(null,t,e),n)}function hf(){}function Ny(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ay(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zy(e,t,n){return Sr&21?(Wt(n,t)||(n=Uv(),ke.lanes|=n,br|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n)}function sb(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=ru.transition;ru.transition={};try{e(!1),t()}finally{ce=n,ru.transition=r}}function Dy(){return Pt().memoizedState}function lb(e,t,n){var r=qn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},My(e))Uy(t,n);else if(n=vy(e,t,n,r),n!==null){var i=tt();Ht(n,e,r,i),Hy(n,t,r)}}function ub(e,t,n){var r=qn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(My(e))Uy(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Wt(s,a)){var l=t.interleaved;l===null?(i.next=i,of(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=vy(e,t,i,r),n!==null&&(i=tt(),Ht(n,e,r,i),Hy(n,t,r))}}function My(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Uy(e,t){ao=os=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hy(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wd(e,n)}}var as={readContext:jt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},cb={readContext:jt,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:hh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,La(4194308,4,Iy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return La(4194308,4,e,t)},useInsertionEffect:function(e,t){return La(4,2,e,t)},useMemo:function(e,t){var n=Qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lb.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:ph,useDebugValue:hf,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=ph(!1),t=e[0];return e=sb.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Qt();if(Se){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),ze===null)throw Error(F(349));Sr&30||Ey(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,hh(_y.bind(null,r,o,e),[e]),r.flags|=2048,Po(9,Oy.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Qt(),t=ze.identifierPrefix;if(Se){var n=pn,r=fn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=To++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ab++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},db={readContext:jt,useCallback:Ny,useContext:jt,useEffect:pf,useImperativeHandle:Fy,useInsertionEffect:Ly,useLayoutEffect:Ry,useMemo:Ay,useReducer:iu,useRef:Py,useState:function(){return iu(jo)},useDebugValue:hf,useDeferredValue:function(e){var t=Pt();return zy(t,Le.memoizedState,e)},useTransition:function(){var e=iu(jo)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:ky,useSyncExternalStore:Cy,useId:Dy,unstable_isNewReconciler:!1},fb={readContext:jt,useCallback:Ny,useContext:jt,useEffect:pf,useImperativeHandle:Fy,useInsertionEffect:Ly,useLayoutEffect:Ry,useMemo:Ay,useReducer:ou,useRef:Py,useState:function(){return ou(jo)},useDebugValue:hf,useDeferredValue:function(e){var t=Pt();return Le===null?t.memoizedState=e:zy(t,Le.memoizedState,e)},useTransition:function(){var e=ou(jo)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:ky,useSyncExternalStore:Cy,useId:Dy,unstable_isNewReconciler:!1};function xi(e,t){try{var n="",r=t;do n+=Mx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function au(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pb=typeof WeakMap=="function"?WeakMap:Map;function By(e,t,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ls||(ls=!0,_c=r),yc(e,t)},n}function Wy(e,t,n){n=hn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){yc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){yc(e,t),typeof r!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function gh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ob.bind(null,e,t,n),t.then(e,e))}function mh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=hn(-1,1),t.tag=2,Wn(n,t,1))),n.lanes|=1),e)}var hb=xn.ReactCurrentOwner,st=!1;function et(e,t,n,r){t.child=e===null?by(t,null,n,r):yi(t,e.child,n,r)}function yh(e,t,n,r,i){n=n.render;var o=t.ref;return di(t,i),r=df(e,t,n,r,o,i),n=ff(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wn(e,t,i)):(Se&&n&&Jd(t),t.flags|=1,et(e,t,r,i),t.child)}function wh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!bf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Vy(e,t,o,r,i)):(e=Na(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(a,r)&&e.ref===t.ref)return wn(e,t,i)}return t.flags|=1,e=Gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vy(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if($o(o,r)&&e.ref===t.ref)if(st=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(st=!0);else return t.lanes=e.lanes,wn(e,t,i)}return wc(e,t,n,r,i)}function qy(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(ni,ft),ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(ni,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(ni,ft),ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(ni,ft),ft|=r;return et(e,t,i,n),t.child}function Gy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wc(e,t,n,r,i){var o=ut(n)?wr:Xe.current;return o=mi(t,o),di(t,i),n=df(e,t,n,r,o,i),r=ff(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wn(e,t,i)):(Se&&r&&Jd(t),t.flags|=1,et(e,t,n,i),t.child)}function xh(e,t,n,r,i){if(ut(n)){var o=!0;Ja(t)}else o=!1;if(di(t,i),t.stateNode===null)Ra(e,t),xy(t,n,r),vc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=ut(n)?wr:Xe.current,u=mi(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&dh(t,a,r,u),jn=!1;var c=t.memoizedState;a.state=c,rs(t,r,a,i),l=t.memoizedState,s!==r||c!==l||lt.current||jn?(typeof f=="function"&&(mc(t,n,f,r),l=t.memoizedState),(s=jn||ch(t,n,s,r,c,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,yy(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:At(t.type,s),a.props=u,d=t.pendingProps,c=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=jt(l):(l=ut(n)?wr:Xe.current,l=mi(t,l));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||c!==l)&&dh(t,a,r,l),jn=!1,c=t.memoizedState,a.state=c,rs(t,r,a,i);var v=t.memoizedState;s!==d||c!==v||lt.current||jn?(typeof y=="function"&&(mc(t,n,y,r),v=t.memoizedState),(u=jn||ch(t,n,u,r,c,v,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),r=!1)}return xc(e,t,n,r,o,i)}function xc(e,t,n,r,i,o){Gy(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&oh(t,n,!1),wn(e,t,o);r=t.stateNode,hb.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yi(t,e.child,null,o),t.child=yi(t,null,s,o)):et(e,t,s,o),t.memoizedState=r.state,i&&oh(t,n,!0),t.child}function Ky(e){var t=e.stateNode;t.pendingContext?ih(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ih(e,t.context,!1),sf(e,t.containerInfo)}function Sh(e,t,n,r,i){return vi(),ef(i),t.flags|=256,et(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0};function bc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qy(e,t,n){var r=t.pendingProps,i=$e.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he($e,i&1),e===null)return hc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ys(a,r,0,null),e=hr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=bc(n),t.memoizedState=Sc,e):gf(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return gb(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Gn(s,o):(o=hr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?bc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Sc,r}return o=e.child,e=o.sibling,r=Gn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function gf(e,t){return t=Ys({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pa(e,t,n,r){return r!==null&&ef(r),yi(t,e.child,null,n),e=gf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gb(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=au(Error(F(422))),pa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ys({mode:"visible",children:r.children},i,0,null),o=hr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&yi(t,e.child,null,a),t.child.memoizedState=bc(a),t.memoizedState=Sc,o);if(!(t.mode&1))return pa(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(F(419)),r=au(o,r,void 0),pa(e,t,a,r)}if(s=(a&e.childLanes)!==0,st||s){if(r=ze,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,yn(e,i),Ht(r,e,i,-1))}return Sf(),r=au(Error(F(421))),pa(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_b.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ht=Bn(i.nextSibling),vt=t,Se=!0,Dt=null,e!==null&&(Et[Ot++]=fn,Et[Ot++]=pn,Et[Ot++]=xr,fn=e.id,pn=e.overflow,xr=t),t=gf(t,r.children),t.flags|=4096,t)}function bh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gc(e.return,t,n)}function su(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Yy(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(et(e,t,r.children,n),r=$e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bh(e,n,t);else if(e.tag===19)bh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he($e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&is(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),su(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&is(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}su(t,!0,n,null,o);break;case"together":su(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ra(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),br|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=Gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mb(e,t,n){switch(t.tag){case 3:Ky(t),vi();break;case 5:$y(t);break;case 1:ut(t.type)&&Ja(t);break;case 4:sf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(ts,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he($e,$e.current&1),t.flags|=128,null):n&t.child.childLanes?Qy(e,t,n):(he($e,$e.current&1),e=wn(e,t,n),e!==null?e.sibling:null);he($e,$e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yy(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he($e,$e.current),r)break;return null;case 22:case 23:return t.lanes=0,qy(e,t,n)}return wn(e,t,n)}var Xy,$c,Jy,Zy;Xy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$c=function(){};Jy=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ur(en.current);var o=null;switch(n){case"input":i=Vu(e,i),r=Vu(e,r),o=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),o=[];break;case"textarea":i=Ku(e,i),r=Ku(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ya)}Yu(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Zy=function(e,t,n,r){n!==r&&(t.flags|=4)};function qi(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vb(e,t,n){var r=t.pendingProps;switch(Zd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return ut(t.type)&&Xa(),Ke(t),null;case 3:return r=t.stateNode,wi(),ye(lt),ye(Xe),uf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(da(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&(Pc(Dt),Dt=null))),$c(e,t),Ke(t),null;case 5:lf(t);var i=ur(_o.current);if(n=t.type,e!==null&&t.stateNode!=null)Jy(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return Ke(t),null}if(e=ur(en.current),da(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xt]=t,r[Eo]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<Zi.length;i++)ge(Zi[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Pp(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":Rp(r,o),ge("invalid",r)}Yu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ca(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ca(r.textContent,s,e),i=["children",""+s]):mo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":na(r),Lp(r,o,!0);break;case"textarea":na(r),Ip(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ya)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ev(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Xt]=t,e[Eo]=r,Xy(e,t,!1,!1),t.stateNode=e;e:{switch(a=Xu(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zi.length;i++)ge(Zi[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":Pp(e,r),i=Vu(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Rp(e,r),i=Ku(e,r),ge("invalid",e);break;default:i=r}Yu(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Tv(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ov(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vo(e,l):typeof l=="number"&&vo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ge("scroll",e):l!=null&&zd(e,o,l,a))}switch(n){case"input":na(e),Lp(e,r,!1);break;case"textarea":na(e),Ip(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?si(e,!!r.multiple,o,!1):r.defaultValue!=null&&si(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)Zy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=ur(_o.current),ur(en.current),da(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,(o=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:ca(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ca(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r}return Ke(t),null;case 13:if(ye($e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&ht!==null&&t.mode&1&&!(t.flags&128))my(),vi(),t.flags|=98560,o=!1;else if(o=da(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(F(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[Xt]=t}else vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),o=!1}else Dt!==null&&(Pc(Dt),Dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$e.current&1?Re===0&&(Re=3):Sf())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return wi(),$c(e,t),e===null&&ko(t.stateNode.containerInfo),Ke(t),null;case 10:return rf(t.type._context),Ke(t),null;case 17:return ut(t.type)&&Xa(),Ke(t),null;case 19:if(ye($e),o=t.memoizedState,o===null)return Ke(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)qi(o,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=is(e),a!==null){for(t.flags|=128,qi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he($e,$e.current&1|2),t.child}e=e.sibling}o.tail!==null&&_e()>Si&&(t.flags|=128,r=!0,qi(o,!1),t.lanes=4194304)}else{if(!r)if(e=is(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Se)return Ke(t),null}else 2*_e()-o.renderingStartTime>Si&&n!==1073741824&&(t.flags|=128,r=!0,qi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_e(),t.sibling=null,n=$e.current,he($e,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return xf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function yb(e,t){switch(Zd(t),t.tag){case 1:return ut(t.type)&&Xa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wi(),ye(lt),ye(Xe),uf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return lf(t),null;case 13:if(ye($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye($e),null;case 4:return wi(),null;case 10:return rf(t.type._context),null;case 22:case 23:return xf(),null;case 24:return null;default:return null}}var ha=!1,Qe=!1,wb=typeof WeakSet=="function"?WeakSet:Set,B=null;function ti(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function kc(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var $h=!1;function xb(e,t){if(sc=Ga,e=ry(),Xd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,f=0,d=e,c=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(y=d.firstChild)!==null;)c=d,d=y;for(;;){if(d===e)break t;if(c===n&&++u===i&&(s=a),c===o&&++f===r&&(l=a),(y=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=y}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lc={focusedElem:e,selectionRange:n},Ga=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,b=v.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:At(t.type,w),b);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(S){Ee(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return v=$h,$h=!1,v}function so(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&kc(t,n,o)}i=i.next}while(i!==r)}}function Ks(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Cc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function e0(e){var t=e.alternate;t!==null&&(e.alternate=null,e0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[Eo],delete t[dc],delete t[nb],delete t[rb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function t0(e){return e.tag===5||e.tag===3||e.tag===4}function kh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||t0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ya));else if(r!==4&&(e=e.child,e!==null))for(Ec(e,t,n),e=e.sibling;e!==null;)Ec(e,t,n),e=e.sibling}function Oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}var He=null,zt=!1;function Cn(e,t,n){for(n=n.child;n!==null;)n0(e,t,n),n=n.sibling}function n0(e,t,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ms,n)}catch{}switch(n.tag){case 5:Qe||ti(n,t);case 6:var r=He,i=zt;He=null,Cn(e,t,n),He=r,zt=i,He!==null&&(zt?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(zt?(e=He,n=n.stateNode,e.nodeType===8?eu(e.parentNode,n):e.nodeType===1&&eu(e,n),So(e)):eu(He,n.stateNode));break;case 4:r=He,i=zt,He=n.stateNode.containerInfo,zt=!0,Cn(e,t,n),He=r,zt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&kc(n,t,a),i=i.next}while(i!==r)}Cn(e,t,n);break;case 1:if(!Qe&&(ti(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ee(n,t,s)}Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,Cn(e,t,n),Qe=r):Cn(e,t,n);break;default:Cn(e,t,n)}}function Ch(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wb),t.forEach(function(r){var i=Tb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:He=s.stateNode,zt=!1;break e;case 3:He=s.stateNode.containerInfo,zt=!0;break e;case 4:He=s.stateNode.containerInfo,zt=!0;break e}s=s.return}if(He===null)throw Error(F(160));n0(o,a,i),He=null,zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)r0(t,e),t=t.sibling}function r0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),Kt(e),r&4){try{so(3,e,e.return),Ks(3,e)}catch(w){Ee(e,e.return,w)}try{so(5,e,e.return)}catch(w){Ee(e,e.return,w)}}break;case 1:Ft(t,e),Kt(e),r&512&&n!==null&&ti(n,n.return);break;case 5:if(Ft(t,e),Kt(e),r&512&&n!==null&&ti(n,n.return),e.flags&32){var i=e.stateNode;try{vo(i,"")}catch(w){Ee(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&kv(i,o),Xu(s,a);var u=Xu(s,o);for(a=0;a<l.length;a+=2){var f=l[a],d=l[a+1];f==="style"?Tv(i,d):f==="dangerouslySetInnerHTML"?Ov(i,d):f==="children"?vo(i,d):zd(i,f,d,u)}switch(s){case"input":qu(i,o);break;case"textarea":Cv(i,o);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?si(i,!!o.multiple,y,!1):c!==!!o.multiple&&(o.defaultValue!=null?si(i,!!o.multiple,o.defaultValue,!0):si(i,!!o.multiple,o.multiple?[]:"",!1))}i[Eo]=o}catch(w){Ee(e,e.return,w)}}break;case 6:if(Ft(t,e),Kt(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Ee(e,e.return,w)}}break;case 3:if(Ft(t,e),Kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{So(t.containerInfo)}catch(w){Ee(e,e.return,w)}break;case 4:Ft(t,e),Kt(e);break;case 13:Ft(t,e),Kt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(yf=_e())),r&4&&Ch(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(u=Qe)||f,Ft(t,e),Qe=u):Ft(t,e),Kt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(B=e,f=e.child;f!==null;){for(d=B=f;B!==null;){switch(c=B,y=c.child,c.tag){case 0:case 11:case 14:case 15:so(4,c,c.return);break;case 1:ti(c,c.return);var v=c.stateNode;if(typeof v.componentWillUnmount=="function"){r=c,n=c.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){Ee(r,n,w)}}break;case 5:ti(c,c.return);break;case 22:if(c.memoizedState!==null){Oh(d);continue}}y!==null?(y.return=c,B=y):Oh(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=_v("display",a))}catch(w){Ee(e,e.return,w)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Ee(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ft(t,e),Kt(e),r&4&&Ch(e);break;case 21:break;default:Ft(t,e),Kt(e)}}function Kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(t0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vo(i,""),r.flags&=-33);var o=kh(e);Oc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=kh(e);Ec(e,s,a);break;default:throw Error(F(161))}}catch(l){Ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sb(e,t,n){B=e,i0(e)}function i0(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var i=B,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ha;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Qe;s=ha;var u=Qe;if(ha=a,(Qe=l)&&!u)for(B=i;B!==null;)a=B,l=a.child,a.tag===22&&a.memoizedState!==null?_h(i):l!==null?(l.return=a,B=l):_h(i);for(;o!==null;)B=o,i0(o),o=o.sibling;B=i,ha=s,Qe=u}Eh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,B=o):Eh(e)}}function Eh(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Qe||Ks(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:At(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&uh(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uh(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&So(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Qe||t.flags&512&&Cc(t)}catch(c){Ee(t,t.return,c)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function Oh(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function _h(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ks(4,t)}catch(l){Ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ee(t,i,l)}}var o=t.return;try{Cc(t)}catch(l){Ee(t,o,l)}break;case 5:var a=t.return;try{Cc(t)}catch(l){Ee(t,a,l)}}}catch(l){Ee(t,t.return,l)}if(t===e){B=null;break}var s=t.sibling;if(s!==null){s.return=t.return,B=s;break}B=t.return}}var bb=Math.ceil,ss=xn.ReactCurrentDispatcher,mf=xn.ReactCurrentOwner,Tt=xn.ReactCurrentBatchConfig,oe=0,ze=null,Pe=null,We=0,ft=0,ni=Zn(0),Re=0,Lo=null,br=0,Qs=0,vf=0,lo=null,at=null,yf=0,Si=1/0,ln=null,ls=!1,_c=null,Vn=null,ga=!1,An=null,us=0,uo=0,Tc=null,Ia=-1,Fa=0;function tt(){return oe&6?_e():Ia!==-1?Ia:Ia=_e()}function qn(e){return e.mode&1?oe&2&&We!==0?We&-We:ob.transition!==null?(Fa===0&&(Fa=Uv()),Fa):(e=ce,e!==0||(e=window.event,e=e===void 0?16:Kv(e.type)),e):1}function Ht(e,t,n,r){if(50<uo)throw uo=0,Tc=null,Error(F(185));Vo(e,n,r),(!(oe&2)||e!==ze)&&(e===ze&&(!(oe&2)&&(Qs|=n),Re===4&&In(e,We)),ct(e,r),n===1&&oe===0&&!(t.mode&1)&&(Si=_e()+500,Vs&&er()))}function ct(e,t){var n=e.callbackNode;oS(e,t);var r=qa(e,e===ze?We:0);if(r===0)n!==null&&Ap(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ap(n),t===1)e.tag===0?ib(Th.bind(null,e)):py(Th.bind(null,e)),eb(function(){!(oe&6)&&er()}),n=null;else{switch(Hv(r)){case 1:n=Bd;break;case 4:n=Dv;break;case 16:n=Va;break;case 536870912:n=Mv;break;default:n=Va}n=f0(n,o0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function o0(e,t){if(Ia=-1,Fa=0,oe&6)throw Error(F(327));var n=e.callbackNode;if(fi()&&e.callbackNode!==n)return null;var r=qa(e,e===ze?We:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cs(e,r);else{t=r;var i=oe;oe|=2;var o=s0();(ze!==e||We!==t)&&(ln=null,Si=_e()+500,pr(e,t));do try{Cb();break}catch(s){a0(e,s)}while(1);nf(),ss.current=o,oe=i,Pe!==null?t=0:(ze=null,We=0,t=Re)}if(t!==0){if(t===2&&(i=nc(e),i!==0&&(r=i,t=jc(e,i))),t===1)throw n=Lo,pr(e,0),In(e,r),ct(e,_e()),n;if(t===6)In(e,r);else{if(i=e.current.alternate,!(r&30)&&!$b(i)&&(t=cs(e,r),t===2&&(o=nc(e),o!==0&&(r=o,t=jc(e,o))),t===1))throw n=Lo,pr(e,0),In(e,r),ct(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:or(e,at,ln);break;case 3:if(In(e,r),(r&130023424)===r&&(t=yf+500-_e(),10<t)){if(qa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=cc(or.bind(null,e,at,ln),t);break}or(e,at,ln);break;case 4:if(In(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ut(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bb(r/1960))-r,10<r){e.timeoutHandle=cc(or.bind(null,e,at,ln),r);break}or(e,at,ln);break;case 5:or(e,at,ln);break;default:throw Error(F(329))}}}return ct(e,_e()),e.callbackNode===n?o0.bind(null,e):null}function jc(e,t){var n=lo;return e.current.memoizedState.isDehydrated&&(pr(e,t).flags|=256),e=cs(e,t),e!==2&&(t=at,at=n,t!==null&&Pc(t)),e}function Pc(e){at===null?at=e:at.push.apply(at,e)}function $b(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Wt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function In(e,t){for(t&=~vf,t&=~Qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ut(t),r=1<<n;e[n]=-1,t&=~r}}function Th(e){if(oe&6)throw Error(F(327));fi();var t=qa(e,0);if(!(t&1))return ct(e,_e()),null;var n=cs(e,t);if(e.tag!==0&&n===2){var r=nc(e);r!==0&&(t=r,n=jc(e,r))}if(n===1)throw n=Lo,pr(e,0),In(e,t),ct(e,_e()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,at,ln),ct(e,_e()),null}function wf(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Si=_e()+500,Vs&&er())}}function $r(e){An!==null&&An.tag===0&&!(oe&6)&&fi();var t=oe;oe|=1;var n=Tt.transition,r=ce;try{if(Tt.transition=null,ce=1,e)return e()}finally{ce=r,Tt.transition=n,oe=t,!(oe&6)&&er()}}function xf(){ft=ni.current,ye(ni)}function pr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ZS(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Zd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xa();break;case 3:wi(),ye(lt),ye(Xe),uf();break;case 5:lf(r);break;case 4:wi();break;case 13:ye($e);break;case 19:ye($e);break;case 10:rf(r.type._context);break;case 22:case 23:xf()}n=n.return}if(ze=e,Pe=e=Gn(e.current,null),We=ft=t,Re=0,Lo=null,vf=Qs=br=0,at=lo=null,lr!==null){for(t=0;t<lr.length;t++)if(n=lr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}lr=null}return e}function a0(e,t){do{var n=Pe;try{if(nf(),Pa.current=as,os){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}os=!1}if(Sr=0,Ne=Le=ke=null,ao=!1,To=0,mf.current=null,n===null||n.return===null){Re=1,Lo=t,Pe=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=We,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var c=f.alternate;c?(f.updateQueue=c.updateQueue,f.memoizedState=c.memoizedState,f.lanes=c.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=mh(a);if(y!==null){y.flags&=-257,vh(y,a,s,o,t),y.mode&1&&gh(o,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){gh(o,u,t),Sf();break e}l=Error(F(426))}}else if(Se&&s.mode&1){var b=mh(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),vh(b,a,s,o,t),ef(xi(l,s));break e}}o=l=xi(l,s),Re!==4&&(Re=2),lo===null?lo=[o]:lo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=By(o,l,t);lh(o,g);break e;case 1:s=l;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vn===null||!Vn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Wy(o,s,t);lh(o,S);break e}}o=o.return}while(o!==null)}u0(n)}catch(O){t=O,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(1)}function s0(){var e=ss.current;return ss.current=as,e===null?as:e}function Sf(){(Re===0||Re===3||Re===2)&&(Re=4),ze===null||!(br&268435455)&&!(Qs&268435455)||In(ze,We)}function cs(e,t){var n=oe;oe|=2;var r=s0();(ze!==e||We!==t)&&(ln=null,pr(e,t));do try{kb();break}catch(i){a0(e,i)}while(1);if(nf(),oe=n,ss.current=r,Pe!==null)throw Error(F(261));return ze=null,We=0,Re}function kb(){for(;Pe!==null;)l0(Pe)}function Cb(){for(;Pe!==null&&!Yx();)l0(Pe)}function l0(e){var t=d0(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?u0(e):Pe=t,mf.current=null}function u0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yb(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Pe=null;return}}else if(n=vb(n,t,ft),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Re===0&&(Re=5)}function or(e,t,n){var r=ce,i=Tt.transition;try{Tt.transition=null,ce=1,Eb(e,t,n,r)}finally{Tt.transition=i,ce=r}return null}function Eb(e,t,n,r){do fi();while(An!==null);if(oe&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(aS(e,o),e===ze&&(Pe=ze=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ga||(ga=!0,f0(Va,function(){return fi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Tt.transition,Tt.transition=null;var a=ce;ce=1;var s=oe;oe|=4,mf.current=null,xb(e,n),r0(n,e),qS(lc),Ga=!!sc,lc=sc=null,e.current=n,Sb(n),Xx(),oe=s,ce=a,Tt.transition=o}else e.current=n;if(ga&&(ga=!1,An=e,us=i),o=e.pendingLanes,o===0&&(Vn=null),eS(n.stateNode),ct(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ls)throw ls=!1,e=_c,_c=null,e;return us&1&&e.tag!==0&&fi(),o=e.pendingLanes,o&1?e===Tc?uo++:(uo=0,Tc=e):uo=0,er(),null}function fi(){if(An!==null){var e=Hv(us),t=Tt.transition,n=ce;try{if(Tt.transition=null,ce=16>e?16:e,An===null)var r=!1;else{if(e=An,An=null,us=0,oe&6)throw Error(F(331));var i=oe;for(oe|=4,B=e.current;B!==null;){var o=B,a=o.child;if(B.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(B=u;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:so(8,f,o)}var d=f.child;if(d!==null)d.return=f,B=d;else for(;B!==null;){f=B;var c=f.sibling,y=f.return;if(e0(f),f===u){B=null;break}if(c!==null){c.return=y,B=c;break}B=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}B=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,B=a;else e:for(;B!==null;){if(o=B,o.flags&2048)switch(o.tag){case 0:case 11:case 15:so(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,B=g;break e}B=o.return}}var p=e.current;for(B=p;B!==null;){a=B;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,B=m;else e:for(a=p;B!==null;){if(s=B,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ks(9,s)}}catch(O){Ee(s,s.return,O)}if(s===a){B=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,B=S;break e}B=s.return}}if(oe=i,er(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ms,e)}catch{}r=!0}return r}finally{ce=n,Tt.transition=t}}return!1}function jh(e,t,n){t=xi(n,t),t=By(e,t,1),e=Wn(e,t,1),t=tt(),e!==null&&(Vo(e,1,t),ct(e,t))}function Ee(e,t,n){if(e.tag===3)jh(e,e,n);else for(;t!==null;){if(t.tag===3){jh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))){e=xi(n,e),e=Wy(t,e,1),t=Wn(t,e,1),e=tt(),t!==null&&(Vo(t,1,e),ct(t,e));break}}t=t.return}}function Ob(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(We&n)===n&&(Re===4||Re===3&&(We&130023424)===We&&500>_e()-yf?pr(e,0):vf|=n),ct(e,t)}function c0(e,t){t===0&&(e.mode&1?(t=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):t=1);var n=tt();e=yn(e,t),e!==null&&(Vo(e,t,n),ct(e,n))}function _b(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),c0(e,n)}function Tb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),c0(e,n)}var d0;d0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)st=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return st=!1,mb(e,t,n);st=!!(e.flags&131072)}else st=!1,Se&&t.flags&1048576&&hy(t,es,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ra(e,t),e=t.pendingProps;var i=mi(t,Xe.current);di(t,n),i=df(null,t,r,e,i,n);var o=ff();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(o=!0,Ja(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,af(t),i.updater=qs,t.stateNode=i,i._reactInternals=t,vc(t,r,e,n),t=xc(null,t,r,!0,o,n)):(t.tag=0,Se&&o&&Jd(t),et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ra(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Pb(r),e=At(r,e),i){case 0:t=wc(null,t,r,e,n);break e;case 1:t=xh(null,t,r,e,n);break e;case 11:t=yh(null,t,r,e,n);break e;case 14:t=wh(null,t,r,At(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),wc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),xh(e,t,r,i,n);case 3:e:{if(Ky(t),e===null)throw Error(F(387));r=t.pendingProps,o=t.memoizedState,i=o.element,yy(e,t),rs(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=xi(Error(F(423)),t),t=Sh(e,t,r,n,i);break e}else if(r!==i){i=xi(Error(F(424)),t),t=Sh(e,t,r,n,i);break e}else for(ht=Bn(t.stateNode.containerInfo.firstChild),vt=t,Se=!0,Dt=null,n=by(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vi(),r===i){t=wn(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return $y(t),e===null&&hc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,uc(r,i)?a=null:o!==null&&uc(r,o)&&(t.flags|=32),Gy(e,t),et(e,t,a,n),t.child;case 6:return e===null&&hc(t),null;case 13:return Qy(e,t,n);case 4:return sf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yi(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),yh(e,t,r,i,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,he(ts,r._currentValue),r._currentValue=a,o!==null)if(Wt(o.value,a)){if(o.children===i.children&&!lt.current){t=wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=hn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),gc(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(F(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),gc(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,di(t,n),i=jt(i),r=r(i),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,i=At(r,t.pendingProps),i=At(r.type,i),wh(e,t,r,i,n);case 15:return Vy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),Ra(e,t),t.tag=1,ut(r)?(e=!0,Ja(t)):e=!1,di(t,n),xy(t,r,i),vc(t,r,i,n),xc(null,t,r,!0,e,n);case 19:return Yy(e,t,n);case 22:return qy(e,t,n)}throw Error(F(156,t.tag))};function f0(e,t){return zv(e,t)}function jb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,r){return new jb(e,t,n,r)}function bf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pb(e){if(typeof e=="function")return bf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Md)return 11;if(e===Ud)return 14}return 2}function Gn(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Na(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")bf(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case qr:return hr(n.children,i,o,t);case Dd:a=8,i|=8;break;case Uu:return e=_t(12,n,t,i|2),e.elementType=Uu,e.lanes=o,e;case Hu:return e=_t(13,n,t,i),e.elementType=Hu,e.lanes=o,e;case Bu:return e=_t(19,n,t,i),e.elementType=Bu,e.lanes=o,e;case Sv:return Ys(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wv:a=10;break e;case xv:a=9;break e;case Md:a=11;break e;case Ud:a=14;break e;case Tn:a=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=_t(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function hr(e,t,n,r){return e=_t(7,e,r,t),e.lanes=n,e}function Ys(e,t,n,r){return e=_t(22,e,r,t),e.elementType=Sv,e.lanes=n,e.stateNode={isHidden:!1},e}function lu(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function uu(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lb(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $f(e,t,n,r,i,o,a,s,l){return e=new Lb(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_t(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},af(o),e}function Rb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function p0(e){if(!e)return Yn;e=e._reactInternals;e:{if(jr(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(ut(n))return fy(e,n,t)}return t}function h0(e,t,n,r,i,o,a,s,l){return e=$f(n,r,!0,e,i,o,a,s,l),e.context=p0(null),n=e.current,r=tt(),i=qn(n),o=hn(r,i),o.callback=t??null,Wn(n,o,i),e.current.lanes=i,Vo(e,i,r),ct(e,r),e}function Xs(e,t,n,r){var i=t.current,o=tt(),a=qn(i);return n=p0(n),t.context===null?t.context=n:t.pendingContext=n,t=hn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wn(i,t,a),e!==null&&(Ht(e,i,a,o),ja(e,i,a)),a}function ds(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kf(e,t){Ph(e,t),(e=e.alternate)&&Ph(e,t)}function Ib(){return null}var g0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cf(e){this._internalRoot=e}Js.prototype.render=Cf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Xs(e,t,null,null)};Js.prototype.unmount=Cf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$r(function(){Xs(null,e,null,null)}),t[vn]=null}};function Js(e){this._internalRoot=e}Js.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rn.length&&t!==0&&t<Rn[n].priority;n++);Rn.splice(n,0,e),n===0&&Gv(e)}};function Ef(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lh(){}function Fb(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ds(a);o.call(u)}}var a=h0(t,r,e,0,null,!1,!1,"",Lh);return e._reactRootContainer=a,e[vn]=a.current,ko(e.nodeType===8?e.parentNode:e),$r(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ds(l);s.call(u)}}var l=$f(e,0,!1,null,null,!1,!1,"",Lh);return e._reactRootContainer=l,e[vn]=l.current,ko(e.nodeType===8?e.parentNode:e),$r(function(){Xs(t,l,n,r)}),l}function el(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ds(a);s.call(l)}}Xs(t,a,e,i)}else a=Fb(n,t,e,i,r);return ds(a)}Bv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ji(t.pendingLanes);n!==0&&(Wd(t,n|1),ct(t,_e()),!(oe&6)&&(Si=_e()+500,er()))}break;case 13:$r(function(){var r=yn(e,1);if(r!==null){var i=tt();Ht(r,e,1,i)}}),kf(e,1)}};Vd=function(e){if(e.tag===13){var t=yn(e,134217728);if(t!==null){var n=tt();Ht(t,e,134217728,n)}kf(e,134217728)}};Wv=function(e){if(e.tag===13){var t=qn(e),n=yn(e,t);if(n!==null){var r=tt();Ht(n,e,t,r)}kf(e,t)}};Vv=function(){return ce};qv=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Zu=function(e,t,n){switch(t){case"input":if(qu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ws(r);if(!i)throw Error(F(90));$v(r),qu(r,i)}}}break;case"textarea":Cv(e,n);break;case"select":t=n.value,t!=null&&si(e,!!n.multiple,t,!1)}};Lv=wf;Rv=$r;var Nb={usingClientEntryPoint:!1,Events:[Go,Yr,Ws,jv,Pv,wf]},Gi={findFiberByHostInstance:sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ab={bundleType:Gi.bundleType,version:Gi.version,rendererPackageName:Gi.rendererPackageName,rendererConfig:Gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nv(e),e===null?null:e.stateNode},findFiberByHostInstance:Gi.findFiberByHostInstance||Ib,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{Ms=ma.inject(Ab),Zt=ma}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nb;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ef(t))throw Error(F(200));return Rb(e,t,null,n)};wt.createRoot=function(e,t){if(!Ef(e))throw Error(F(299));var n=!1,r="",i=g0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$f(e,1,!1,null,null,n,!1,r,i),e[vn]=t.current,ko(e.nodeType===8?e.parentNode:e),new Cf(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Nv(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return $r(e)};wt.hydrate=function(e,t,n){if(!Zs(t))throw Error(F(200));return el(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!Ef(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=g0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=h0(t,null,e,1,n??null,i,!1,o,a),e[vn]=t.current,ko(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Js(t)};wt.render=function(e,t,n){if(!Zs(t))throw Error(F(200));return el(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!Zs(e))throw Error(F(40));return e._reactRootContainer?($r(function(){el(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1};wt.unstable_batchedUpdates=wf;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zs(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return el(e,t,n,!1,r)};wt.version="18.2.0-next-9e3b772b8-20220608";function m0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m0)}catch(e){console.error(e)}}m0(),hv.exports=wt;var zb=hv.exports,Rh=zb;Du.createRoot=Rh.createRoot,Du.hydrateRoot=Rh.hydrateRoot;var Ye=function(){return Ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ye.apply(this,arguments)};function bi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var me="-ms-",co="-moz-",se="-webkit-",v0="comm",tl="rule",Of="decl",Db="@import",y0="@keyframes",Mb="@layer",Ub=Math.abs,_f=String.fromCharCode,Lc=Object.assign;function Hb(e,t){return Ae(e,0)^45?(((t<<2^Ae(e,0))<<2^Ae(e,1))<<2^Ae(e,2))<<2^Ae(e,3):0}function w0(e){return e.trim()}function un(e,t){return(e=t.exec(e))?e[0]:e}function Z(e,t,n){return e.replace(t,n)}function Aa(e,t){return e.indexOf(t)}function Ae(e,t){return e.charCodeAt(t)|0}function $i(e,t,n){return e.slice(t,n)}function Yt(e){return e.length}function x0(e){return e.length}function eo(e,t){return t.push(e),e}function Bb(e,t){return e.map(t).join("")}function Ih(e,t){return e.filter(function(n){return!un(n,t)})}var nl=1,ki=1,S0=0,Lt=0,je=0,Fi="";function rl(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:nl,column:ki,length:a,return:"",siblings:s}}function _n(e,t){return Lc(rl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mr(e){for(;e.root;)e=_n(e.root,{children:[e]});eo(e,e.siblings)}function Wb(){return je}function Vb(){return je=Lt>0?Ae(Fi,--Lt):0,ki--,je===10&&(ki=1,nl--),je}function Bt(){return je=Lt<S0?Ae(Fi,Lt++):0,ki++,je===10&&(ki=1,nl++),je}function gr(){return Ae(Fi,Lt)}function za(){return Lt}function il(e,t){return $i(Fi,e,t)}function Rc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qb(e){return nl=ki=1,S0=Yt(Fi=e),Lt=0,[]}function Gb(e){return Fi="",e}function cu(e){return w0(il(Lt-1,Ic(e===91?e+2:e===40?e+1:e)))}function Kb(e){for(;(je=gr())&&je<33;)Bt();return Rc(e)>2||Rc(je)>3?"":" "}function Qb(e,t){for(;--t&&Bt()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return il(e,za()+(t<6&&gr()==32&&Bt()==32))}function Ic(e){for(;Bt();)switch(je){case e:return Lt;case 34:case 39:e!==34&&e!==39&&Ic(je);break;case 40:e===41&&Ic(e);break;case 92:Bt();break}return Lt}function Yb(e,t){for(;Bt()&&e+je!==47+10;)if(e+je===42+42&&gr()===47)break;return"/*"+il(t,Lt-1)+"*"+_f(e===47?e:Bt())}function Xb(e){for(;!Rc(gr());)Bt();return il(e,Lt)}function Jb(e){return Gb(Da("",null,null,null,[""],e=qb(e),0,[0],e))}function Da(e,t,n,r,i,o,a,s,l){for(var u=0,f=0,d=a,c=0,y=0,v=0,w=1,b=1,g=1,p=0,m="",S=i,O=o,$=r,C=m;b;)switch(v=p,p=Bt()){case 40:if(v!=108&&Ae(C,d-1)==58){Aa(C+=Z(cu(p),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:C+=cu(p);break;case 9:case 10:case 13:case 32:C+=Kb(v);break;case 92:C+=Qb(za()-1,7);continue;case 47:switch(gr()){case 42:case 47:eo(Zb(Yb(Bt(),za()),t,n,l),l);break;default:C+="/"}break;case 123*w:s[u++]=Yt(C)*g;case 125*w:case 59:case 0:switch(p){case 0:case 125:b=0;case 59+f:g==-1&&(C=Z(C,/\f/g,"")),y>0&&Yt(C)-d&&eo(y>32?Nh(C+";",r,n,d-1,l):Nh(Z(C," ","")+";",r,n,d-2,l),l);break;case 59:C+=";";default:if(eo($=Fh(C,t,n,u,f,i,s,m,S=[],O=[],d,o),o),p===123)if(f===0)Da(C,t,$,$,S,o,d,s,O);else switch(c===99&&Ae(C,3)===110?100:c){case 100:case 108:case 109:case 115:Da(e,$,$,r&&eo(Fh(e,$,$,0,0,i,s,m,i,S=[],d,O),O),i,O,d,s,r?S:O);break;default:Da(C,$,$,$,[""],O,0,s,O)}}u=f=y=0,w=g=1,m=C="",d=a;break;case 58:d=1+Yt(C),y=v;default:if(w<1){if(p==123)--w;else if(p==125&&w++==0&&Vb()==125)continue}switch(C+=_f(p),p*w){case 38:g=f>0?1:(C+="\f",-1);break;case 44:s[u++]=(Yt(C)-1)*g,g=1;break;case 64:gr()===45&&(C+=cu(Bt())),c=gr(),f=d=Yt(m=C+=Xb(za())),p++;break;case 45:v===45&&Yt(C)==2&&(w=0)}}return o}function Fh(e,t,n,r,i,o,a,s,l,u,f,d){for(var c=i-1,y=i===0?o:[""],v=x0(y),w=0,b=0,g=0;w<r;++w)for(var p=0,m=$i(e,c+1,c=Ub(b=a[w])),S=e;p<v;++p)(S=w0(b>0?y[p]+" "+m:Z(m,/&\f/g,y[p])))&&(l[g++]=S);return rl(e,t,n,i===0?tl:s,l,u,f,d)}function Zb(e,t,n,r){return rl(e,t,n,v0,_f(Wb()),$i(e,2,-2),0,r)}function Nh(e,t,n,r,i){return rl(e,t,n,Of,$i(e,0,r),$i(e,r+1,-1),r,i)}function b0(e,t,n){switch(Hb(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 4789:return co+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+co+e+me+e+e;case 5936:switch(Ae(e,t+11)){case 114:return se+e+me+Z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+me+Z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+me+Z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return se+e+me+e+e;case 6165:return se+e+me+"flex-"+e+e;case 5187:return se+e+Z(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+me+"flex-$1$2")+e;case 5443:return se+e+me+"flex-item-"+Z(e,/flex-|-self/g,"")+(un(e,/flex-|baseline/)?"":me+"grid-row-"+Z(e,/flex-|-self/g,""))+e;case 4675:return se+e+me+"flex-line-pack"+Z(e,/align-content|flex-|-self/g,"")+e;case 5548:return se+e+me+Z(e,"shrink","negative")+e;case 5292:return se+e+me+Z(e,"basis","preferred-size")+e;case 6060:return se+"box-"+Z(e,"-grow","")+se+e+me+Z(e,"grow","positive")+e;case 4554:return se+Z(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return Z(Z(Z(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return Z(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return Z(Z(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4200:if(!un(e,/flex-|baseline/))return me+"grid-column-align"+$i(e,t)+e;break;case 2592:case 3360:return me+Z(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,un(r.props,/grid-\w+-end/)})?~Aa(e+(n=n[t].value),"span")?e:me+Z(e,"-start","")+e+me+"grid-row-span:"+(~Aa(n,"span")?un(n,/\d+/):+un(n,/\d+/)-+un(e,/\d+/))+";":me+Z(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return un(r.props,/grid-\w+-start/)})?e:me+Z(Z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Z(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yt(e)-1-t>6)switch(Ae(e,t+1)){case 109:if(Ae(e,t+4)!==45)break;case 102:return Z(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+co+(Ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Aa(e,"stretch")?b0(Z(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return me+i+":"+o+u+(a?me+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(Ae(e,t+6)===121)return Z(e,":",":"+se)+e;break;case 6444:switch(Ae(e,Ae(e,14)===45?18:11)){case 120:return Z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+se+(Ae(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+me+"$2box$3")+e;case 100:return Z(e,":",":"+me)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(e,"scroll-","scroll-snap-")+e}return e}function fs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function e$(e,t,n,r){switch(e.type){case Mb:if(e.children.length)break;case Db:case Of:return e.return=e.return||e.value;case v0:return"";case y0:return e.return=e.value+"{"+fs(e.children,r)+"}";case tl:if(!Yt(e.value=e.props.join(",")))return""}return Yt(n=fs(e.children,r))?e.return=e.value+"{"+n+"}":""}function t$(e){var t=x0(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function n$(e){return function(t){t.root||(t=t.return)&&e(t)}}function r$(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Of:e.return=b0(e.value,e.length,n);return;case y0:return fs([_n(e,{value:Z(e.value,"@","@"+se)})],r);case tl:if(e.length)return Bb(n=e.props,function(i){switch(un(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mr(_n(e,{props:[Z(i,/:(read-\w+)/,":"+co+"$1")]})),Mr(_n(e,{props:[i]})),Lc(e,{props:Ih(n,r)});break;case"::placeholder":Mr(_n(e,{props:[Z(i,/:(plac\w+)/,":"+se+"input-$1")]})),Mr(_n(e,{props:[Z(i,/:(plac\w+)/,":"+co+"$1")]})),Mr(_n(e,{props:[Z(i,/:(plac\w+)/,me+"input-$1")]})),Mr(_n(e,{props:[i]})),Lc(e,{props:Ih(n,r)});break}return""})}}var i$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ci=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Tf=typeof window<"u"&&"HTMLElement"in window,o$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),a$={},jf=Object.freeze([]),Ei=Object.freeze({});function $0(e,t,n){return n===void 0&&(n=Ei),e.theme!==n.theme&&e.theme||t||n.theme}var k0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),s$=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,l$=/(^-|-$)/g;function Ah(e){return e.replace(s$,"-").replace(l$,"")}var u$=/(a)(d)/gi,zh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Fc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=zh(t%52)+n;return(zh(t%52)+n).replace(u$,"$1-$2")}var du,ri=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},C0=function(e){return ri(5381,e)};function Pf(e){return Fc(C0(e)>>>0)}function c$(e){return e.displayName||e.name||"Component"}function fu(e){return typeof e=="string"&&!0}var E0=typeof Symbol=="function"&&Symbol.for,O0=E0?Symbol.for("react.memo"):60115,d$=E0?Symbol.for("react.forward_ref"):60112,f$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},p$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h$=((du={})[d$]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},du[O0]=_0,du);function Dh(e){return("type"in(t=e)&&t.type.$$typeof)===O0?_0:"$$typeof"in e?h$[e.$$typeof]:f$;var t}var g$=Object.defineProperty,m$=Object.getOwnPropertyNames,Mh=Object.getOwnPropertySymbols,v$=Object.getOwnPropertyDescriptor,y$=Object.getPrototypeOf,Uh=Object.prototype;function T0(e,t,n){if(typeof t!="string"){if(Uh){var r=y$(t);r&&r!==Uh&&T0(e,r,n)}var i=m$(t);Mh&&(i=i.concat(Mh(t)));for(var o=Dh(e),a=Dh(t),s=0;s<i.length;++s){var l=i[s];if(!(l in p$||n&&n[l]||a&&l in a||o&&l in o)){var u=v$(t,l);try{g$(e,l,u)}catch{}}}}return e}function Oi(e){return typeof e=="function"}function Lf(e){return typeof e=="object"&&"styledComponentId"in e}function cr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ps(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ro(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Nc(e,t,n){if(n===void 0&&(n=!1),!n&&!Ro(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Nc(e[r],t[r]);else if(Ro(t))for(var r in t)e[r]=Nc(e[r],t[r]);return e}function Rf(e,t){Object.defineProperty(e,"toString",{value:t})}function Qo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var w$=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Qo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),Ma=new Map,hs=new Map,pu=1,va=function(e){if(Ma.has(e))return Ma.get(e);for(;hs.has(pu);)pu++;var t=pu++;return Ma.set(e,t),hs.set(t,e),t},x$=function(e,t){Ma.set(e,t),hs.set(t,e)},S$="style[".concat(Ci,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),b$=new RegExp("^".concat(Ci,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$$=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},k$=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(b$);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(x$(f,u),$$(e,f,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function C$(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var j0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){return Array.from(s.querySelectorAll("style[".concat(Ci,"]"))).at(-1)}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ci,"active"),r.setAttribute("data-styled-version","6.0.1");var a=C$();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},E$=function(){function e(t){this.element=j0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Qo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),O$=function(){function e(t){this.element=j0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),_$=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Hh=Tf,T$={isServer:!Tf,useCSSOMInjection:!o$},gs=function(){function e(t,n,r){t===void 0&&(t=Ei),n===void 0&&(n={});var i=this;this.options=Ye(Ye({},T$),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Tf&&Hh&&(Hh=!1,function(o){for(var a=document.querySelectorAll(S$),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Ci)!=="active"&&(k$(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Rf(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(d){var c=function(g){return hs.get(g)}(d);if(c===void 0)return"continue";var y=o.names.get(c),v=a.getGroup(d);if(y===void 0||v.length===0)return"continue";var w="".concat(Ci,".g").concat(d,'[id="').concat(c,'"]'),b="";y!==void 0&&y.forEach(function(g){g.length>0&&(b+="".concat(g,","))}),l+="".concat(v).concat(w,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},f=0;f<s;f++)u(f);return l}(i)})}return e.registerId=function(t){return va(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ye(Ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new _$(i):r?new E$(i):new O$(i)}(this.options),new w$(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(va(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(va(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(va(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),j$=/&/g,P$=/^\s*\/\/.*$/gm;function P0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=P0(n.children,t)),n})}function L$(e){var t,n,r,i=e===void 0?Ei:e,o=i.options,a=o===void 0?Ei:o,s=i.plugins,l=s===void 0?jf:s,u=function(c,y,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):c},f=l.slice();f.push(function(c){c.type===tl&&c.value.includes("&")&&(c.props[0]=c.props[0].replace(j$,n).replace(r,u))}),a.prefix&&f.push(r$),f.push(e$);var d=function(c,y,v,w){y===void 0&&(y=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var b=c.replace(P$,""),g=Jb(v||y?"".concat(v," ").concat(y," { ").concat(b," }"):b);a.namespace&&(g=P0(g,a.namespace));var p=[];return fs(g,t$(f.concat(n$(function(m){return p.push(m)})))),p};return d.hash=l.length?l.reduce(function(c,y){return y.name||Qo(15),ri(c,y.name)},5381).toString():"",d}var R$=new gs,Ac=L$(),L0=Mt.createContext({shouldForwardProp:void 0,styleSheet:R$,stylis:Ac});L0.Consumer;Mt.createContext(void 0);function zc(){return E.useContext(L0)}var R0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ac);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Rf(this,function(){throw Qo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ac),this.name+t.hash},e}(),I$=function(e){return e>="A"&&e<="Z"};function Bh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;I$(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var I0=function(e){return e==null||e===!1||e===""},F0=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!I0(o)&&(Array.isArray(o)&&o.isCss||Oi(o)?r.push("".concat(Bh(i),":"),o,";"):Ro(o)?r.push.apply(r,bi(bi(["".concat(i," {")],F0(o),!1),["}"],!1)):r.push("".concat(Bh(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in i$||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Kn(e,t,n,r){if(I0(e))return[];if(Lf(e))return[".".concat(e.styledComponentId)];if(Oi(e)){if(!Oi(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Kn(i,t,n,r)}var o;return e instanceof R0?n?(e.inject(n,r),[e.getName(r)]):[e]:Ro(e)?F0(e):Array.isArray(e)?e.flatMap(function(a){return Kn(a,t,n,r)}):[e.toString()]}function N0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Oi(n)&&!Lf(n))return!1}return!0}var F$=C0("6.0.1"),N$=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&N0(t),this.componentId=n,this.baseHash=ri(F$,n),this.baseStyle=r,gs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=cr(i,this.staticRulesId);else{var o=ps(Kn(this.rules,t,n,r)),a=Fc(ri(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=cr(i,a),this.staticRulesId=a}else{for(var l=ri(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")u+=d;else if(d){var c=ps(Kn(d,t,n,r));l=ri(l,c),u+=c}}if(u){var y=Fc(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=cr(i,y)}}return i},e}(),If=Mt.createContext(void 0);If.Consumer;var hu={};function A$(e,t,n){var r=Lf(e),i=e,o=!fu(e),a=t.attrs,s=a===void 0?jf:a,l=t.componentId,u=l===void 0?function(S,O){var $=typeof S!="string"?"sc":Ah(S);hu[$]=(hu[$]||0)+1;var C="".concat($,"-").concat(Pf("6.0.1"+$+hu[$]));return O?"".concat(O,"-").concat(C):C}(t.displayName,t.parentComponentId):l,f=t.displayName,d=f===void 0?function(S){return fu(S)?"styled.".concat(S):"Styled(".concat(c$(S),")")}(e):f,c=t.displayName&&t.componentId?"".concat(Ah(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;v=function(S,O){return w(S,O)&&b(S,O)}}else v=w}var g=new N$(n,c,r?i.componentStyle:void 0);g.isStatic&&s.length;function p(S,O){return function($,C,_,P){var L=$.attrs,D=$.componentStyle,U=$.defaultProps,A=$.foldedComponentIds,T=$.styledComponentId,R=$.target,W=Mt.useContext(If),Y=zc(),I=$.shouldForwardProp||Y.shouldForwardProp,N=function(Je,qe,dt){for(var $n,qt=Ye(Ye({},qe),{className:void 0,theme:dt}),zr=0;zr<Je.length;zr+=1){var kn=Oi($n=Je[zr])?$n(qt):$n;for(var Gt in kn)qt[Gt]=Gt==="className"?cr(qt[Gt],kn[Gt]):Gt==="style"?Ye(Ye({},qt[Gt]),kn[Gt]):kn[Gt]}return qe.className&&(qt.className=cr(qt.className,qe.className)),qt}(L,C,$0(C,W,U)||Ei),V=N.as||R,J={};for(var Q in N)N[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"||(Q==="forwardedAs"?J.as=N.forwardedAs:I&&!I(Q,V)||(J[Q]=N[Q]));var kt=function(Je,qe){var dt=zc(),$n=Je.generateAndInjectStyles(qe,dt.styleSheet,dt.stylis);return $n}(D,N),Oe=cr(A,T);return kt&&(Oe+=" "+kt),N.className&&(Oe+=" "+N.className),J[fu(V)&&!k0.has(V)?"class":"className"]=Oe,J.ref=_,E.createElement(V,J)}(m,S,O)}p.displayName=d;var m=Mt.forwardRef(p);return m.attrs=y,m.componentStyle=g,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?cr(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=c,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(O){for(var $=[],C=1;C<arguments.length;C++)$[C-1]=arguments[C];for(var _=0,P=$;_<P.length;_++)Nc(O,P[_],!0);return O}({},i.defaultProps,S):S}}),Rf(m,function(){return".".concat(m.styledComponentId)}),o&&T0(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Wh(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Vh=function(e){return Object.assign(e,{isCss:!0})};function Te(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Oi(e)||Ro(e)){var r=e;return Vh(Kn(Wh(jf,bi([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Kn(i):Vh(Kn(Wh(i,t)))}function Dc(e,t,n){if(n===void 0&&(n=Ei),!t)throw Qo(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Te.apply(void 0,bi([i],o,!1)))};return r.attrs=function(i){return Dc(e,t,Ye(Ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Dc(e,t,Ye(Ye({},n),i))},r}var A0=function(e){return Dc(A$,e)},x=A0;k0.forEach(function(e){x[e]=A0(e)});var z$=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=N0(t),gs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ps(Kn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&gs.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function D$(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Te.apply(void 0,bi([e],t,!1)),i="sc-global-".concat(Pf(JSON.stringify(r))),o=new z$(r,i),a=function(l){var u=zc(),f=Mt.useContext(If),d=Mt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(d,l,u.styleSheet,f,u.stylis),(Mt.useInsertionEffect||Mt.useLayoutEffect)(function(){if(!u.styleSheet.server)return s(d,l,u.styleSheet,f,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,f,u.stylis]),null};function s(l,u,f,d,c){if(o.isStatic)o.renderStyles(l,a$,f,c);else{var y=Ye(Ye({},u),{theme:$0(u,d,a.defaultProps)});o.renderStyles(l,y,f,c)}}return Mt.memo(a)}function z0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ps(Te.apply(void 0,bi([e],t,!1))),i=Pf(r);return new R0(i,r)}function M$(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const qh={};function Mc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&qh[t[0]]||(typeof t[0]=="string"&&(qh[t[0]]=new Date),M$(...t))}const D0=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function Gh(e,t,n){e.loadNamespaces(t,D0(e,n))}function Kh(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,D0(e,r))}function U$(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],i=t.options?t.options.fallbackLng:!1,o=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const u=t.services.backendConnector.state[`${s}|${l}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!i||a(o,e)))}function H$(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(Mc("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(i,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,e))return!1}}):U$(e,t,n)}const B$=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,W$={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},V$=e=>W$[e],q$=e=>e.replace(B$,V$);let Uc={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:q$};function G$(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Uc={...Uc,...e}}function K$(){return Uc}let M0;function Q$(e){M0=e}function Y$(){return M0}const X$={type:"3rdParty",init(e){G$(e.options.react),Q$(e)}},U0=E.createContext();class J${constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Z$=(e,t)=>{const n=E.useRef();return E.useEffect(()=>{n.current=t?n.current:e},[e,t]),n.current};function Rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:i}=E.useContext(U0)||{},o=n||r||Y$();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new J$),!o){Mc("You will need to pass in an i18next instance by using initReactI18next");const m=(O,$)=>typeof $=="string"?$:$&&typeof $=="object"&&typeof $.defaultValue=="string"?$.defaultValue:Array.isArray(O)?O[O.length-1]:O,S=[m,{},!1];return S.t=m,S.i18n={},S.ready=!1,S}o.options.react&&o.options.react.wait!==void 0&&Mc("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...K$(),...o.options.react,...t},{useSuspense:s,keyPrefix:l}=a;let u=e||i||o.options&&o.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(u);const f=(o.isInitialized||o.initializedStoreOnce)&&u.every(m=>H$(m,o,a));function d(){return o.getFixedT(t.lng||null,a.nsMode==="fallback"?u:u[0],l)}const[c,y]=E.useState(d);let v=u.join();t.lng&&(v=`${t.lng}${v}`);const w=Z$(v),b=E.useRef(!0);E.useEffect(()=>{const{bindI18n:m,bindI18nStore:S}=a;b.current=!0,!f&&!s&&(t.lng?Kh(o,t.lng,u,()=>{b.current&&y(d)}):Gh(o,u,()=>{b.current&&y(d)})),f&&w&&w!==v&&b.current&&y(d);function O(){b.current&&y(d)}return m&&o&&o.on(m,O),S&&o&&o.store.on(S,O),()=>{b.current=!1,m&&o&&m.split(" ").forEach($=>o.off($,O)),S&&o&&S.split(" ").forEach($=>o.store.off($,O))}},[o,v]);const g=E.useRef(!0);E.useEffect(()=>{b.current&&!g.current&&y(d),g.current=!1},[o,l]);const p=[c,o,f];if(p.t=c,p.i18n=o,p.ready=f,f||!f&&!s)return p;throw new Promise(m=>{t.lng?Kh(o,t.lng,u,()=>m()):Gh(o,u,()=>m())})}function ek(e){let{i18n:t,defaultNS:n,children:r}=e;const i=E.useMemo(()=>({i18n:t,defaultNS:n}),[t,n]);return E.createElement(U0.Provider,{value:i},r)}/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Io.apply(this,arguments)}var zn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zn||(zn={}));const Qh="popstate";function tk(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return Hc("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:H0(i)}return rk(t,n,null,e)}function Ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ff(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function nk(){return Math.random().toString(36).substr(2,8)}function Yh(e,t){return{usr:e.state,key:e.key,idx:t}}function Hc(e,t,n,r){return n===void 0&&(n=null),Io({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ni(t):t,{state:n,key:t&&t.key||r||nk()})}function H0(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ni(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function rk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=zn.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(Io({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function d(){s=zn.Pop;let b=f(),g=b==null?null:b-u;u=b,l&&l({action:s,location:w.location,delta:g})}function c(b,g){s=zn.Push;let p=Hc(w.location,b,g);n&&n(p,b),u=f()+1;let m=Yh(p,u),S=w.createHref(p);try{a.pushState(m,"",S)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(S)}o&&l&&l({action:s,location:w.location,delta:1})}function y(b,g){s=zn.Replace;let p=Hc(w.location,b,g);n&&n(p,b),u=f();let m=Yh(p,u),S=w.createHref(p);a.replaceState(m,"",S),o&&l&&l({action:s,location:w.location,delta:0})}function v(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof b=="string"?b:H0(b);return Ie(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return s},get location(){return e(i,a)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Qh,d),l=b,()=>{i.removeEventListener(Qh,d),l=null}},createHref(b){return t(i,b)},createURL:v,encodeLocation(b){let g=v(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:c,replace:y,go(b){return a.go(b)}};return w}var Xh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Xh||(Xh={}));function ik(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ni(t):t,i=V0(r.pathname||"/",n);if(i==null)return null;let o=B0(e);ok(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=hk(o[s],vk(i));return a}function B0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(Ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=mr([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),B0(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:fk(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of W0(o.path))i(o,a,l)}),t}function W0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=W0(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function ok(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:pk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ak=/^:\w+$/,sk=3,lk=2,uk=1,ck=10,dk=-2,Jh=e=>e==="*";function fk(e,t){let n=e.split("/"),r=n.length;return n.some(Jh)&&(r+=dk),t&&(r+=lk),n.filter(i=>!Jh(i)).reduce((i,o)=>i+(ak.test(o)?sk:o===""?uk:ck),r)}function pk(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function hk(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=gk({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let d=s.route;o.push({params:r,pathname:mr([i,f.pathname]),pathnameBase:$k(mr([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=mr([i,f.pathnameBase]))}return o}function gk(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=mk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let c=s[d]||"";a=o.slice(0,o.length-c.length).replace(/(.)\/+$/,"$1")}return u[f]=yk(s[d]||"",f),u},{}),pathname:o,pathnameBase:a,pattern:e}}function mk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ff(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function vk(e){try{return decodeURI(e)}catch(t){return Ff(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yk(e,t){try{return decodeURIComponent(e)}catch(n){return Ff(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function V0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function wk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ni(e):e;return{pathname:n?n.startsWith("/")?n:xk(n,t):t,search:kk(r),hash:Ck(i)}}function xk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bk(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ni(e):(i=Io({},e),Ie(!i.pathname||!i.pathname.includes("?"),gu("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),gu("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),gu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let d=t.length-1;if(a.startsWith("..")){let c=a.split("/");for(;c[0]==="..";)c.shift(),d-=1;i.pathname=c.join("/")}s=d>=0?t[d]:"/"}let l=wk(i,s),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const mr=e=>e.join("/").replace(/\/\/+/g,"/"),$k=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),kk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ck=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ek(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const q0=["post","put","patch","delete"];new Set(q0);const Ok=["get",...q0];new Set(Ok);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ms.apply(this,arguments)}const Nf=E.createContext(null),_k=E.createContext(null),ol=E.createContext(null),al=E.createContext(null),Pr=E.createContext({outlet:null,matches:[],isDataRoute:!1}),G0=E.createContext(null);function sl(){return E.useContext(al)!=null}function ll(){return sl()||Ie(!1),E.useContext(al).location}function K0(e){E.useContext(ol).static||E.useLayoutEffect(e)}function Ai(){let{isDataRoute:e}=E.useContext(Pr);return e?Hk():Tk()}function Tk(){sl()||Ie(!1);let e=E.useContext(Nf),{basename:t,navigator:n}=E.useContext(ol),{matches:r}=E.useContext(Pr),{pathname:i}=ll(),o=JSON.stringify(Sk(r).map(l=>l.pathnameBase)),a=E.useRef(!1);return K0(()=>{a.current=!0}),E.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){n.go(l);return}let f=bk(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:mr([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,o,i,e])}function jk(){let{matches:e}=E.useContext(Pr),t=e[e.length-1];return t?t.params:{}}function Pk(e,t){return Lk(e,t)}function Lk(e,t,n){sl()||Ie(!1);let{navigator:r}=E.useContext(ol),{matches:i}=E.useContext(Pr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=ll(),u;if(t){var f;let w=typeof t=="string"?Ni(t):t;s==="/"||(f=w.pathname)!=null&&f.startsWith(s)||Ie(!1),u=w}else u=l;let d=u.pathname||"/",c=s==="/"?d:d.slice(s.length)||"/",y=ik(e,{pathname:c}),v=Ak(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:mr([s,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:mr([s,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&v?E.createElement(al.Provider,{value:{location:ms({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:zn.Pop}},v):v}function Rk(){let e=Uk(),t=Ek(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,o)}const Ik=E.createElement(Rk,null);class Fk extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(Pr.Provider,{value:this.props.routeContext},E.createElement(G0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Nk(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Nf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Pr.Provider,{value:t},r)}function Ak(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=o.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||Ie(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,u)=>{let f=l.route.id?a==null?void 0:a[l.route.id]:null,d=null;n&&(d=l.route.errorElement||Ik);let c=t.concat(o.slice(0,u+1)),y=()=>{let v;return f?v=d:l.route.Component?v=E.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=s,E.createElement(Nk,{match:l,routeContext:{outlet:s,matches:c,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?E.createElement(Fk,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:y(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):y()},null)}var Bc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Bc||(Bc={}));var Fo;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Fo||(Fo={}));function zk(e){let t=E.useContext(Nf);return t||Ie(!1),t}function Dk(e){let t=E.useContext(_k);return t||Ie(!1),t}function Mk(e){let t=E.useContext(Pr);return t||Ie(!1),t}function Q0(e){let t=Mk(),n=t.matches[t.matches.length-1];return n.route.id||Ie(!1),n.route.id}function Uk(){var e;let t=E.useContext(G0),n=Dk(Fo.UseRouteError),r=Q0(Fo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Hk(){let{router:e}=zk(Bc.UseNavigateStable),t=Q0(Fo.UseNavigateStable),n=E.useRef(!1);return K0(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ms({fromRouteId:t},o)))},[e,t])}function Wr(e){Ie(!1)}function Bk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=zn.Pop,navigator:o,static:a=!1}=e;sl()&&Ie(!1);let s=t.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Ni(r));let{pathname:u="/",search:f="",hash:d="",state:c=null,key:y="default"}=r,v=E.useMemo(()=>{let w=V0(u,s);return w==null?null:{location:{pathname:w,search:f,hash:d,state:c,key:y},navigationType:i}},[s,u,f,d,c,y,i]);return v==null?null:E.createElement(ol.Provider,{value:l},E.createElement(al.Provider,{children:n,value:v}))}function Wk(e){let{children:t,location:n}=e;return Pk(Wc(t),n)}var Zh;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Zh||(Zh={}));new Promise(()=>{});function Wc(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Wc(r.props.children,o));return}r.type!==Wr&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Wc(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Vk="startTransition",eg=_x[Vk];function qk(e){let{basename:t,children:n,future:r,window:i}=e,o=E.useRef();o.current==null&&(o.current=tk({window:i,v5Compat:!0}));let a=o.current,[s,l]=E.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=E.useCallback(d=>{u&&eg?eg(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>a.listen(f),[a,f]),E.createElement(Bk,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}var tg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(tg||(tg={}));var ng;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ng||(ng={}));const k="1000px",ee=Te`
  margin: 0;
  padding: 0;
`,vs=Te`
  background-repeat: no-repeat;
  background-size: contain;
`,ae={blueColor:"#366eff",lightBlackColor:"#16202C",blackColor:"#000000",lightGrayColor:"#1A202C",darkGrayColor:"#0b132a",whiteColor:"#ffffff",transparentWhiteColor:"#ffffff80",grayColor:"#fcfcfc",redColor:"#ff0000",lightGreenColor:"#3cc1b3",greenColor:"#20F1C0",darkGreenColor:"#00BAA4",darkColor:"#1C2938",deepColor:"#141E29",deepGrayColor:"#17212D",scrollColor:"#b8b8b8",headerColor:"#16212D",ratesFeesColor:"#fafbfc",navigateLinkColor:"#b7b5b1",notFoundColor:"#d5dee9",smallNewsColor:"#8c8c8c",largeNewsColor:"#3d3d3d",lineNewsColor:"#edf0f4",inputColor:"#eaeff5"};x.button`
  ${ee};
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
`;Te`
  background-repeat: no-repeat;
  background-position: center bottom;
`;const Af=Te`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
`,Sn=Te`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`,fe=Te`
  font-family: Gramatika-Regular, sans-serif;
`,kr=Te`
  font-family: Gramatika-Bold, sans-serif;
`,zi=Te`
  font-family: Plus_Jakarta_Sans-Regular, sans-serif;
`,It=Te`
  font-family: Gramatika-Medium, sans-serif;
`,Gk=z0`
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
`,Kk=z0`
  from {
    right: 0;
  }
  to {
    right: -100%;
  }
`;Te`
  margin-bottom: 2vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: ${k}) {
    flex-direction: column;
    align-items: center;
  }
`;const Y0=Te`
  position: absolute;
  background-repeat: no-repeat;
  z-index: 2;
  background-size: cover;

  @media (max-width: ${k}) {
    width: 45vw;
    background-size: auto 100%;
    background-position: center;
  }
`;Te`
  color: ${ae.whiteColor};
  padding-bottom: 2.57vw;
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: 1.74vw;
  font-family: Gramatika-Regular, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;const zf=Te`
  ${ee};
  color: ${ae.whiteColor};
  ${fe};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.08);
  }
`,Df=Te`
  ${ee};
  color: ${ae.blackColor};
  font-weight: 400;
  font-size: calc(20vw / 14.4);
  font-style: normal;
  line-height: 2.2;

  @media (max-width: ${k}) {
    font-size: calc(20vw / 5.09);
  }
`,rn=()=>{const[e,t]=E.useState(null);return E.useEffect(()=>{const n=()=>{const r=window.innerWidth;t(r<=parseInt(k))};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e},X0="https://twitter.com/ThothPay",J0="https://www.facebook.com/profile.php?id=100095060907471",Qk="mailto:service@thothpay.com",Z0="https://example.com/telegram",Yk="https://thothpay.com/merchant",Xk="https://example.com/signup",Jk="https://thothpay.com/merchant",Zk="https://docs.thothpay.com",e2="https://thothpay.com/swagger/index.html",t2="https://docs.thothpay.com",n2="https://thothpay.com/swagger/index.html",r2="https://docs.thothpay.com",i2="https://example.com/get-support",o2="https://example.com/contact-team",a2="https://example.com/how-it-works",s2="https://example.com/featured",l2="https://example.com/partnership",u2="https://example.com/business-relation",c2="https://example.com/events",d2="https://example.com/blog",f2="https://example.com/podcast",p2="https://example.com/invite-friend",h2="https://example.com/privacy-policy",g2="https://example.com/terms-condition",m2="https://docs.thothpay.com",v2="https://docs.thothpay.com",y2=x.a`
  ${ee};
  ${fe};
  color: ${e=>e.color};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
`,St=({href:e,target:t,rel:n,children:r,...i})=>h.jsx(y2,{href:e,target:t,rel:n,...i,children:r});let ya;const w2=new Uint8Array(16);function x2(){if(!ya&&(ya=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ya))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ya(w2)}const Ue=[];for(let e=0;e<256;++e)Ue.push((e+256).toString(16).slice(1));function S2(e,t=0){return(Ue[e[t+0]]+Ue[e[t+1]]+Ue[e[t+2]]+Ue[e[t+3]]+"-"+Ue[e[t+4]]+Ue[e[t+5]]+"-"+Ue[e[t+6]]+Ue[e[t+7]]+"-"+Ue[e[t+8]]+Ue[e[t+9]]+"-"+Ue[e[t+10]]+Ue[e[t+11]]+Ue[e[t+12]]+Ue[e[t+13]]+Ue[e[t+14]]+Ue[e[t+15]]).toLowerCase()}const b2=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),rg={randomUUID:b2};function $2(e,t,n){if(rg.randomUUID&&!t&&!e)return rg.randomUUID();e=e||{};const r=e.random||(e.rng||x2)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return S2(r)}const X=()=>$2(),En="/thoth",ew=X(),tw=X(),nw=X(),On={active:`${En}/images/news-page/rating/star-active.svg`,inactive:`${En}/images/news-page/rating/star-inactive.svg`,time:`${En}/images/news-page/time.svg`,views:`${En}/images/news-page/views.svg`,twitter:`${En}/images/news-page/share/twitter.svg`,facebook:`${En}/images/news-page/share/facebook.svg`,email:`${En}/images/news-page/share/email.svg`,chain:`${En}/images/news-page/share/chain.svg`},k2={navigation:{button:"Accept bitcoin payment",separator:">",location:"News"},rating:{active:{src:On.active,alt:"active star"},inactive:{src:On.inactive,alt:"inactive star"}},time:{text:"min",src:On.time,alt:"time icon"},views:{src:On.views,alt:"views icon"},subscribe:{title:"Subscribe",placeholder:"Subscribe to our newsletter",button:"Submit",validation:{empty:"Email is required",invalid:"Invalid email address"}},share:{title:"Share this article",links:[{id:ew,src:On.twitter,alt:"twitter icon"},{id:tw,src:On.facebook,alt:"facebook icon"},{id:nw,src:On.email,alt:"email icon"}],image:{src:On.chain,alt:"chain icon"}},title:"News"},rw=X();X();const iw=X(),ow=X(),C2=X(),aw=X(),sw=X(),lw=X(),z="/thoth",E2=[{code:"en",name:"English"},{code:"ru",name:"Русский"}],Cr={playIconWhite:"images/common/play-icon-white.svg",playIconGreen:"images/common/play-icon-green.svg"},O2={background:`${z}/images/header/check-mark.svg`},ii={backgroundL:`${z}/images/main-page/main-screen/screen-L.svg`,backgroundS:`${z}/images/main-page/main-screen/screen-S.svg`,coinsL:`${z}/images/main-page/main-screen/coins-L.svg`,coinsS:`${z}/images/main-page/main-screen/coins-S.svg`,circle:`${z}/images/main-page/main-screen/circle.svg`,wrapper:`${z}/images/main-page/main-screen/wrapper.svg`},_i={backgroundL:`${z}/images/main-page/how-it-works/background-L.svg`,backgroundS:`${z}/images/main-page/how-it-works/background-S.svg`,leftLineL:`${z}/images/main-page/how-it-works/left-line-L.svg`,leftLineS:`${z}/images/main-page/how-it-works/left-line-S.svg`,rightLineL:`${z}/images/main-page/how-it-works/right-line-L.svg`,rightLineS:`${z}/images/main-page/how-it-works/right-line-S.svg`},ig={backgroundL:`${z}/images/main-page/how-it-works/advantages/background-L.svg`,backgroundS:`${z}/images/main-page/how-it-works/advantages/background-S.svg`},og={backgroundL:`${z}/images/main-page/products-and-service/description-L.svg`,backgroundS:`${z}/images/main-page/products-and-service/description-S.svg`},ag={backgroundL:`${z}/images/main-page/products-and-service/mobile-wallet/background-L.svg`,backgroundS:`${z}/images/main-page/products-and-service/mobile-wallet/background-S.svg`},_2={background:`${z}/images/main-page/products-and-service/available-currencies/available-currencies.svg`},sg={backgroundL:`${z}/images/main-page/products-and-service/slide/background-L.svg`,backgroundS:`${z}/images/main-page/products-and-service/slide/background-S.svg`},Vc={backgroundL:`${z}/images/main-page/use-cases-of-our-products/background-L.svg`,backgroundS:`${z}/images/main-page/use-cases-of-our-products/background-S.svg`,slide:`${z}/images/main-page/use-cases-of-our-products/slide.svg`},T2={background:`${z}/images/main-page/use-cases-of-our-products/mobile-slider/background-S.svg`},lg={backgroundL:"images/main-page/use-cases-of-our-products/news/background-L.svg",backgroundS:"images/main-page/use-cases-of-our-products/news/background-S.svg"},wa={existingClient:{src:`${z}/images/main-page/use-cases-of-our-products/have-a-question/existing-client.svg`,alt:"existing client"},newClient:{src:`${z}/images/main-page/use-cases-of-our-products/have-a-question/new-client.svg`,alt:"new client"}},Vt=(e,t)=>{switch(e){case"Sections":return[{id:rw,title:t("sections.one")},{id:iw,title:t("sections.three")},{id:ow,title:t("sections.four")}];case"Header":return{loginAndRegister:{signUp:t("header.loginAndRegister.signUp"),signIn:t("header.loginAndRegister.signIn")},closeIcon:{src:`${z}/${Cr.playIconWhite}`,alt:t("header.closeIcon")},language:{src:`${z}/images/header/language-icon-white.svg`,srcGray:`${z}/images/header/language-icon-gray.svg`,alt:t("header.language.alt"),text:t("header.language.text")},menu:{src:`${z}/images/header/burger-icon.svg`,alt:t("header.menu.alt"),text:t("header.menu.text")}};case"MainScreen":return{span:t("mainScreen.span"),title:t("mainScreen.title"),text:t("mainScreen.text"),button:t("mainScreen.button")};case"HowItWorks":return{text:t("sectionHowItWorks.text"),stepOne:{image:{src:`${z}/images/main-page/how-it-works/send-invoice.svg`,alt:t("sectionHowItWorks.stepOne.alt")},subtitle:t("sectionHowItWorks.stepOne.subtitle"),text:t("sectionHowItWorks.stepOne.text")},stepTwo:{image:{src:`${z}/images/main-page/how-it-works/payment.svg`,alt:t("sectionHowItWorks.stepTwo.alt")},subtitle:t("sectionHowItWorks.stepTwo.subtitle"),text:t("sectionHowItWorks.stepTwo.text")},stepThree:{image:{src:`${z}/images/main-page/how-it-works/broadcast.svg`,alt:t("sectionHowItWorks.stepThree.alt")},subtitle:t("sectionHowItWorks.stepThree.subtitle"),text:t("sectionHowItWorks.stepThree.text")},advantages:[{id:X(),subtitle:t("sectionHowItWorks.advantages.advantage1.subtitle"),text:t("sectionHowItWorks.advantages.advantage1.text"),image:`${z}/images/main-page/how-it-works/advantages/first-icon.svg`,alt:t("sectionHowItWorks.advantages.advantage1.alt")},{id:X(),subtitle:t("sectionHowItWorks.advantages.advantage2.subtitle"),text:t("sectionHowItWorks.advantages.advantage2.text"),image:`${z}/images/main-page/how-it-works/advantages/second-icon.svg`,alt:t("sectionHowItWorks.advantages.advantage2.alt")},{id:X(),subtitle:t("sectionHowItWorks.advantages.advantage3.subtitle"),text:t("sectionHowItWorks.advantages.advantage3.text"),image:`${z}/images/main-page/how-it-works/advantages/third-icon.svg`,alt:t("sectionHowItWorks.advantages.advantage3.alt")},{id:X(),subtitle:t("sectionHowItWorks.advantages.advantage4.subtitle"),text:t("sectionHowItWorks.advantages.advantage4.text"),image:`${z}/images/main-page/how-it-works/advantages/fourth-icon.svg`,alt:t("sectionHowItWorks.advantages.advantage4.alt")}]};case"Photo":return{photos:[{id:X(),src:`${z}/images/test/test-photo.jpg`,alt:t("photos.one")},{id:X(),src:`${z}/images/test/test-photo.jpg`,alt:t("photos.two")},{id:X(),src:`${z}/images/test/test-photo.jpg`,alt:t("photos.three")}],photoSlideArrows:{left:{src:`${z}/images/main-page/photo/photo-slider/arrow-left.svg`,alt:t("photos.arrowLeft")},right:{src:`${z}/images/main-page/photo/photo-slider/arrow-right.svg`,alt:t("photos.arrowRight")}}};case"ProductAndService":return{text:"Product Description THOTH",slides:[{id:C2,subtitle:"Merchants Solution",textContent:"The solution for businesses to accept crypto payments in any coins and automatically exchange it all into desired stable or currency.",image:{src:`${z}/images/main-page/products-and-service/slide/slide-one.svg`,alt:"image one"}},{id:aw,subtitle:"Enterprise Blockchain Wallets",textContent:"We deploy infrastructure to provide coins self-custody for enterprise needs.",link:{value:"docs.thothpay.com",href:Zk},image:{src:`${z}/images/main-page/products-and-service/slide/slide-two.svg`,alt:"image two"}},{id:sw,subtitle:"Wallet App",textContent:"Download Android or iOS application to instantly get access to your account.",image:{src:`${z}/images/main-page/products-and-service/slide/slide-three.svg`,alt:"image three"}},{id:lw,subtitle:"API",textContent:"Automate acceptance in your web store, CRM or application with our feature full API.",link:{value:"Read more",href:e2},image:{src:`${z}/images/main-page/products-and-service/slide/slide-four.svg`,alt:"image four"}}],mobileWallet:{title:"Mobile Wallet",text:"A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",links:[{id:X(),src:`${z}/images/main-page/products-and-service/mobile-wallet/google-play.svg`,alt:"google play link",href:t2},{id:X(),src:`${z}/images/main-page/products-and-service/mobile-wallet/app-store.svg`,alt:"apple store link",href:n2}]},availableCurrencies:{title:"Available Currencies",text:"A vast range of major coins, stablecoins and liquid tokens is available.",subtitle:"Coins",coins:[{id:X(),src:`${z}/images/main-page/products-and-service/available-currencies/bitcoin.svg`,alt:"bitcoin icon"},{id:X(),src:`${z}/images/main-page/products-and-service/available-currencies/bitcoin-lightning.svg`,alt:"bitcoin lightning icon"},{id:X(),src:`${z}/images/main-page/products-and-service/available-currencies/bitcoin-liquid.svg`,alt:"bitcoin liquid icon"},{id:X(),src:`${z}/images/main-page/products-and-service/available-currencies/binance-coin.svg`,alt:"binance coin icon"},{id:X(),src:`${z}/images/main-page/products-and-service/available-currencies/tron.svg`,alt:"tron icon"},{id:X(),src:`${z}/images/main-page/products-and-service/available-currencies/polygon.svg`,alt:"polygon icon"},{id:X(),src:`${z}/images/main-page/products-and-service/available-currencies/stellar.svg`,alt:"stellar icon"},{id:X(),src:`${z}/images/main-page/products-and-service/available-currencies/EURMTL.svg`,alt:"EURMTL icon"},{id:X(),src:`${z}/images/main-page/products-and-service/available-currencies/USDT-ERC20.svg`,alt:"USDT ERC20 icon"},{id:X(),src:`${z}/images/main-page/products-and-service/available-currencies/USDT-TRC20.svg`,alt:"USDT TRC20 icon"},{id:X(),src:`${z}/images/main-page/products-and-service/available-currencies/USDT-PLG20.svg`,alt:"USDT PLG20 icon"},{id:X(),src:`${z}/images/main-page/products-and-service/available-currencies/USDT-LIQUID.svg`,alt:"USDT LIQUID icon"},{id:X(),src:`${z}/images/main-page/products-and-service/available-currencies/BUSD-BEP20.svg`,alt:"BUSD BEP20 icon"}]},videoSlider:{title:"Video",text:"Product Description THOTH",video:[{id:X(),title:"Video title 1",content:"https://www.youtube.com/watch?v=SjX1lRtJdAg"},{id:X(),title:"Video title 2",content:"https://www.youtube.com/watch?v=-1DbYJH2h98"},{id:X(),title:"Video title 3",content:"https://www.youtube.com/watch?v=UpEkHC2k_0I"},{id:X(),title:"Video title 4",content:"https://www.youtube.com/watch?v=-1DbYJH2h98"},{id:X(),title:"Video title 4",content:"https://www.youtube.com/watch?v=-1DbYJH2h98"}]}};case"UseCasesOfOurProducts":return{text:"Product Description THOTH",subtitle:"Merchants Solution",slides:[{id:X(),image:{src:`${z}/images/main-page/use-cases-of-our-products/merchantsSolutionOne.svg`,alt:"icon one"},title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."},{id:X(),image:{src:`${z}/images/main-page/use-cases-of-our-products/merchantsSolutionTwo.svg`,alt:"icon two"},title:"E-commerce",text:"The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments."},{id:X(),image:{src:`${z}/images/main-page/use-cases-of-our-products/merchantsSolutionThree.svg`,alt:"icon three"},title:"Marketplaces",text:"There are many platforms used by businesses to sell their products or services. Offering crypto payments to customers is now the advantage."},{id:X(),image:{src:`${z}/images/main-page/use-cases-of-our-products/merchantsSolutionFour.svg`,alt:"icon four"},title:"Travel Industry",text:"The travel industry is a growing sector. With increasing bookings now made online, it makes financial sense to accept crypto payments."},{id:X(),image:{src:`${z}/images/main-page/use-cases-of-our-products/merchantsSolutionFive.svg`,alt:"icon five"},title:"Gambling",text:"The global online gambling industry is worth billions of dollars. Crypto payments are part for the course."},{id:X(),image:{src:`${z}/images/main-page/use-cases-of-our-products/merchantsSolutionSix.svg`,alt:"icon six"},title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."}],photoSlideArrowRight:{src:`${z}/images/main-page/use-cases-of-our-products/mobile-slider/slider-button.svg`,alt:"arrow right"},fees:{title:"Fees",lineOne:{title:"Incoming Transactions",text:{main:"As low as 0.5%",span:"and going down based on your total transaction volume.",button:"Check pricing details"}},lineTwo:{title:"Outgoing Transactions",text:{main:"Free of charge"}}},news:{title:"News",link:{value:"Read more",href:r2}},questions:{title:"Have a question?",text:"Explore our solutions or you can contact us through ticket system and contact form. Feel free to get in touch..",existing:{title:"For existing clients",text:"If you already have an account please use our ticket system.",linkName:"Get 24\\7 Support",href:i2},new:{title:"For new clients or partners",text:"Please leave your inquiry and our Business Development Team will contact you shortly.",linkName:"Contact BD Team",href:o2}}};case"PaymentFees":return{title:t("pagePaymentFees.title"),individual:{subtitle:t("pagePaymentFees.subtitleIndividual"),linkHref:m2,linkLabel:t("pagePaymentFees.linkLabel"),depositFee:{text:t("pagePaymentFees.depositFee"),percent:["0.1%","0.3%"],span:["<1000$",">1000$"]},swapFee:{text:t("pagePaymentFees.swapFee"),percent:["0.5%"]},withdrawFee:{text:t("pagePaymentFees.withdrawFee"),percent:["0.5%"]},fiatBankIn:{text:t("pagePaymentFees.fiatBankIn"),percent:["0.5%"]},fiatBankOut:{text:t("pagePaymentFees.fiatBankOut"),percent:["0.5%"]},depositFeeSpan:{text:t("pagePaymentFees.depositFeeSpan"),percent:["0.5%"]}},enterprise:{subtitle:t("pagePaymentFees.subtitleEnterprise"),linkHref:v2,linkLabel:t("pagePaymentFees.linkLabel"),depositFee:{text:t("pagePaymentFees.depositFee"),percent:["0.1%"]},swapFee:{text:t("pagePaymentFees.swapFee"),percent:["0.5%","0.6%"],span:["<1000$",">1000$"]},withdrawFee:{text:t("pagePaymentFees.withdrawFee"),percent:["0.5%"]},fiatBankIn:{text:t("pagePaymentFees.fiatBankIn"),percent:["0.5%"]},fiatBankOut:{text:t("pagePaymentFees.fiatBankOut"),percent:["0.5%"]},depositFeeSpan:{text:t("pagePaymentFees.depositFeeSpan"),percent:["0.5%"]}},navigation:{button:t("pagePaymentFees.navigation.button"),separator:">",location:t("pagePaymentFees.navigation.location")}};case"News":return k2;case"NotFound":return{navigation:{button:t("pageNotFound.navigation.button"),separator:">",location:t("pageNotFound.navigation.location")},title:"404",subtitle:t("pageNotFound.subtitle"),image:{src:`${z}/images/not-found-page/off.svg`,alt:t("pageNotFound.imageAlt")},text:t("pageNotFound.text"),button:t("pageNotFound.button")};case"Logo":return{src:`${z}/images/common/logo.svg`,alt:t("logo.alt")};case"FeedbackWidgets":return[{id:"telegram",image:{darkSrc:`${z}/images/common/telegram-dark.svg`,lightSrc:`${z}/images/common/telegram-light.svg`,alt:t("feedbackWidgets.telegram")},href:Z0},{id:"twitter",image:{darkSrc:`${z}/images/common/twitter-dark.svg`,lightSrc:`${z}/images/common/twitter-light.svg`,alt:t("feedbackWidgets.twitter")},href:X0},{id:"facebook",image:{darkSrc:`${z}/images/common/facebook-dark.svg`,lightSrc:`${z}/images/common/facebook-light.svg`,alt:t("feedbackWidgets.facebook.svg")},href:J0},{id:"email",image:{darkSrc:`${z}/images/common/email-dark.svg`,lightSrc:`${z}/images/common/email-light.svg`,alt:t("feedbackWidgets.email")},href:Qk}];default:return null}},{greenColor:oi,lightGreenColor:j2,whiteColor:uw}=ae,P2=x.section`
  box-sizing: border-box;
  margin: 0 auto 7vw;
  position: relative;
  background-image: url(${ii.backgroundL});
  ${Sn};
  border-radius: 0 0 0 1.6vw;
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  min-height: 51vw;
  box-shadow: 0 1.6vw 0 ${oi};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-image: url(${ii.coinsL});
    ${vs};
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
    background-color: ${oi};
  }

  @media (max-width: ${k}) {
    margin-bottom: 10vw;
    background-image: url(${ii.backgroundS});
    border-radius: 0 0 3.93vw 3.93vw;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3.54vw 0 ${oi};

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      background-image: url(${ii.coinsS});
      ${vs};
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
      background-color: ${oi};
    }
  }
`,L2=x.div`
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
    background-image: url(${ii.wrapper});
    ${Sn};
  }
`,R2=x.div`
  border-radius: 50%;
  bottom: -5vw;
  left: 16vw;
  position: absolute;
  z-index: 1;
  width: 8.5vw;
  height: 8.5vw;
  background-image: url(${ii.circle});
  ${Sn};

  @media (max-width: ${k}) {
    bottom: -6vw;
    left: 50%;
    transform: translateX(-50%);
    width: 12vw;
    height: 12vw;
  }
`,I2=x.p`
  ${ee};
  margin: 0 0 1.9vw;
  color: rgba(255, 255, 255, 0.5);
  ${fe};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
`,F2=x.h1`
  ${ee};
  color: ${uw};
  font-size: 3.89vw;
  ${kr};
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;
  text-transform: uppercase;
  text-align: left;
  word-break: break-word;

  @media (max-width: ${k}) {
    font-size: 9.84vw;
  }
`,N2=x.p`
  ${ee};
  margin: 1.46vw 0 5.9vw;
  ${fe};
  font-size: calc(25vw / 14.4);
  color: ${oi};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${k}) {
    margin: 3.54vw 0 5.9vw;
    font-size: calc(25vw / 5.08);
  }
`,A2=x(St)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: calc(20vw / 14.4);
  background: linear-gradient(
    133deg,
    ${oi} 0%,
    ${j2} 100%
  );

  @media (max-width: ${k}) {
    padding: calc(12vw / 5.08);
  }
`,z2=x.span`
  ${ee};
  margin-right: calc(20vw / 14.4);
  color: ${uw};
  font-size: 1.11vw;
  ${kr};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${k}) {
    margin-right: calc(12vw / 5.08);
    font-size: 3.15vw;
  }
`,D2=x.div`
  ${vs};
  width: 1.18vw;
  height: 1.04vw;
  background-image: url(${Cr.playIconWhite});

  @media (max-width: ${k}) {
    width: 3.35vw;
    height: 2.95vw;
  }
`,M2=E.forwardRef((e,t)=>{const{t:n}=Rt(),r=Vt("MainScreen",n),{span:i,title:o,text:a,button:s}=r,l=rn();return h.jsxs(P2,{className:"main-screen",ref:t,children:[h.jsxs(L2,{children:[l!==null&&!l&&h.jsx(I2,{children:i}),h.jsx(F2,{children:o}),h.jsx(N2,{children:a}),h.jsx(A2,{color:"transparent",href:Jk,target:"_blank",rel:"noopener noreferrer",children:h.jsxs(h.Fragment,{children:[h.jsx(z2,{children:s}),h.jsx(D2,{})]})})]}),h.jsx(R2,{})]})}),U2=x("h3")`
  ${ee};
  ${It};
  font-style: normal;
  font-weight: 500;
  word-wrap: break-word;
`,tr=({children:e,...t})=>h.jsx(U2,{...t,children:e}),{lightGrayColor:cw}=ae,H2=x.div`
  position: relative;
  z-index: 1;
  max-width: 20.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${k}) {
    max-width: 55.33vw;
  }
`,B2=x(tr)`
  width: 100%;
  color: ${cw};
  text-align: center;
  font-size: calc(26vw / 14.4);
  line-height: 1.5;
  letter-spacing: -0.52px;

  @media (max-width: ${k}) {
    width: 100%;
    font-size: calc(26vw / 5.08);
    margin: 5vw 0 0 0;
  }
`,W2=x.p`
  ${ee};
  margin: 1.11vw 0 2.85vw;
  color: ${cw};
  text-align: center;
  ${fe};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;

  @media (max-width: ${k}) {
    font-size: calc(20vw / 5.08);
    margin: 0.7vw 0 4.72vw;
  }
`,V2=x.img`
  margin-top: ${({$index:e})=>e==="one"?"3.9vw":e==="two"?"2.7vw":"0"};
  margin-bottom: 2vw;
  width: ${({$index:e})=>e==="one"?"7.4vw":e==="two"?"8.6vw":"11.3vw"};
  height: ${({$index:e})=>e==="one"?"7.4vw":e==="two"?"8.6vw":"11.3vw"};

  @media (max-width: ${k}) {
    margin-top: 4vw;
    width: ${({$index:e})=>e==="one"?"20.86vw":e==="two"?"24.56vw":"32.08vw"};
    height: ${({$index:e})=>e==="one"?"20.86vw":e==="two"?"24.56vw":"32.08vw"};
  }
`,mu=({index:e,content:t})=>h.jsxs(H2,{children:[h.jsx(V2,{$index:e,src:t.image.src,alt:t.image.alt}),h.jsx(B2,{children:t.subtitle}),h.jsx(W2,{children:t.text})]}),{whiteColor:Mf}=ae,q2=x.div`
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
    border-bottom: 0.5px ${Mf} solid;
  }

  &:last-child {
    border: none;
  }
`,G2=x.div`
  width: 100%;
  min-height: 3.56vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${k}) {
    width: 100%;
  }
`,K2=x(tr)`
  color: ${Mf};
  font-size: calc(26vw / 14.4);
  line-height: 0.96;
  text-align: left;

  @media (max-width: ${k}) {
    line-height: 0.83;
    font-size: calc(30vw / 5.08);
  }
`,Q2=x.p`
  ${ee};
  margin: 2.5vw 0 0 0;
  color: ${Mf};
  ${fe};
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
`,Y2=({subtitle:e,text:t,svg:n})=>h.jsxs(q2,{children:[h.jsxs(G2,{children:[n,h.jsx(K2,{children:e})]}),h.jsx(Q2,{children:t})]}),X2=x.div`
  background-image: url(${ig.backgroundL});
  //border-radius: 1.6vw;
  border-radius: 1.6vw 1.6vw 0 0;
  ${Sn};
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
    background-image: url(${ig.backgroundS});
    flex-direction: column;
  }
`,J2=x.div`
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
`,Z2=x.img`
  width: 3.75vw;
  height: 3.75vw;
  margin-right: 1vw;

  @media (max-width: ${k}) {
    margin-right: 5vw;
    width: 13.95vw;
    height: 13.95vw;
  }
`,eC=({advantages:e})=>h.jsx(X2,{children:h.jsx(J2,{children:e.map(t=>h.jsx(Y2,{svg:h.jsx(Z2,{src:t.image,alt:t.alt}),subtitle:t.subtitle,text:t.text},t.id))})}),tC=x.h2`
  ${ee};
  text-align: center;
  font-size: calc(50vw / 14.4);
  ${It};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -1px;
  color: ${e=>e.color};

  @media (max-width: ${k}) {
    font-size: calc(50vw / 5.08);
    line-height: 1.2;
  }
`,bt=({children:e,...t})=>h.jsx(tC,{...t,children:e}),nC=x.p`
  ${ee};
  text-align: center;
  font-size: calc(20vw / 14.05);
  ${fe};
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.color};

  @media (max-width: ${k}) {
    ${zi};
    font-size: calc(18vw / 5.08);
    line-height: 1.5;
  }
`,Uf=({children:e,...t})=>h.jsx(nC,{...t,children:e}),{darkGrayColor:ug}=ae,rC=x.div`
  position: relative;
  margin: 0 auto 2vw;
  ${Af};
  width: 93.54vw;
  height: auto;
  background-image: url(${_i.backgroundL});

  @media (max-width: ${k}) {
    padding: 16.7vw 0 5vw;
    width: 90.55vw;
    background-image: url(${_i.backgroundS});
  }
`,iC=x(Uf)`
  margin: 0.7vw 0 1.71vw;

  @media (max-width: ${k}) {
    margin-bottom: 4.72vw;
  }
`,oC=x.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;

  @media (max-width: ${k}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,cg=x.div`
  position: relative;

  @media (max-width: ${k}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,aC=x.div`
  ${Y0};
  background-image: url(${_i.leftLineL});
  top: 4vw;
  left: 15vw;
  width: 20.83vw;
  height: 6.04vw;

  @media (max-width: ${k}) {
    top: 25vw;
    left: 7vw;
    height: calc(100% - 20.86vw + 15vw);
    background-image: url(${_i.leftLineS});
  }
`,sC=x.div`
  ${Y0};
  background-image: url(${_i.rightLineL});
  top: 4vw;
  right: -14.5vw;
  width: 19vw;
  height: 6.04vw;

  @media (max-width: ${k}) {
    top: 30vw;
    right: 3vw;
    height: calc(100% - 24.56vw + 15vw);
    background-image: url(${_i.rightLineS});
  }
`,lC=({id:e,title:t})=>{const{t:n}=Rt(),r=Vt("HowItWorks",n),{text:i,stepOne:o,stepTwo:a,stepThree:s,advantages:l}=r;return h.jsxs("section",{id:e,children:[h.jsxs(rC,{children:[h.jsx(bt,{color:ug,children:t}),h.jsx(iC,{color:ug,children:i}),h.jsxs(oC,{children:[h.jsxs(cg,{children:[h.jsx(aC,{}),h.jsx(mu,{index:"one",content:o})]}),h.jsxs(cg,{children:[h.jsx(sC,{}),h.jsx(mu,{index:"two",content:a})]}),h.jsx(mu,{index:"three",content:s})]})]}),l&&h.jsx(eC,{advantages:l})]})},uC=x.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,cC=x.img`
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
`,dC=x(St)`
  pointer-events: none;
  text-decoration: none; 
  cursor: not-allowed;
  opacity: 0.3;
}

  @media (max-width: ${k}) {
    margin-right: calc(72vw / 14.4);
  }
`,dw=({links:e})=>h.jsx(uC,{children:e.map(t=>h.jsx(dC,{color:"transparent",href:t.href,target:"_blank",rel:"noopener noreferrer",children:h.jsx(cC,{src:t.src,alt:t.alt})},t.id))}),{darkColor:fC,whiteColor:pC,darkGrayColor:hC}=ae,gC=x.section`
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  background-color: ${fC};
  min-height: 41.53vw;

  @media (max-width: ${k}) {
    background-color: ${hC};
    box-sizing: border-box;
    min-height: 270.66vw;
    flex-direction: column;
  }
`,mC=x.div`
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
  ${Sn};
  background-image: url(${ag.backgroundL});

  @media (max-width: ${k}) {
    box-sizing: border-box;
    padding: 0 9vw 4.14vw;
    background-image: url(${ag.backgroundS});
    justify-content: end;
    align-items: start;
  }
`,vC=x.p`
  max-width: 40%;
  ${zf};
  margin: 3.06vw 0 3.75vw;

  @media (max-width: ${k}) {
    max-width: 90%;
    margin: 8.82vw 0;
  }
`,yC=x.div`
  width: 35vw;

  @media (max-width: ${k}) {
    width: 70vw;
  }
`,wC=({mobileWallet:e})=>{const{title:t,text:n,links:r}=e;return h.jsx(gC,{children:h.jsxs(mC,{children:[h.jsx(bt,{color:pC,children:t}),h.jsx(vC,{children:n}),h.jsx(yC,{children:h.jsx(dw,{links:r})})]})})};var fw={},pw={},ul={},hw={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(hw);var xC="Expected a function",dg=0/0,SC="[object Symbol]",bC=/^\s+|\s+$/g,$C=/^[-+]0x[0-9a-f]+$/i,kC=/^0b[01]+$/i,CC=/^0o[0-7]+$/i,EC=parseInt,OC=typeof Fn=="object"&&Fn&&Fn.Object===Object&&Fn,_C=typeof self=="object"&&self&&self.Object===Object&&self,TC=OC||_C||Function("return this")(),jC=Object.prototype,PC=jC.toString,LC=Math.max,RC=Math.min,vu=function(){return TC.Date.now()};function IC(e,t,n){var r,i,o,a,s,l,u=0,f=!1,d=!1,c=!0;if(typeof e!="function")throw new TypeError(xC);t=fg(t)||0,qc(n)&&(f=!!n.leading,d="maxWait"in n,o=d?LC(fg(n.maxWait)||0,t):o,c="trailing"in n?!!n.trailing:c);function y($){var C=r,_=i;return r=i=void 0,u=$,a=e.apply(_,C),a}function v($){return u=$,s=setTimeout(g,t),f?y($):a}function w($){var C=$-l,_=$-u,P=t-C;return d?RC(P,o-_):P}function b($){var C=$-l,_=$-u;return l===void 0||C>=t||C<0||d&&_>=o}function g(){var $=vu();if(b($))return p($);s=setTimeout(g,w($))}function p($){return s=void 0,c&&r?y($):(r=i=void 0,a)}function m(){s!==void 0&&clearTimeout(s),u=0,r=l=i=s=void 0}function S(){return s===void 0?a:p(vu())}function O(){var $=vu(),C=b($);if(r=arguments,i=this,l=$,C){if(s===void 0)return v(l);if(d)return s=setTimeout(g,t),y(l)}return s===void 0&&(s=setTimeout(g,t)),a}return O.cancel=m,O.flush=S,O}function qc(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function FC(e){return!!e&&typeof e=="object"}function NC(e){return typeof e=="symbol"||FC(e)&&PC.call(e)==SC}function fg(e){if(typeof e=="number")return e;if(NC(e))return dg;if(qc(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=qc(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(bC,"");var n=kC.test(e);return n||CC.test(e)?EC(e.slice(2),n?2:8):$C.test(e)?dg:+e}var AC=IC,gw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)t.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(gw);var cl=gw.exports,M={};Object.defineProperty(M,"__esModule",{value:!0});M.checkSpecKeys=M.checkNavigable=M.changeSlide=M.canUseDOM=M.canGoNext=void 0;M.clamp=mw;M.swipeStart=M.swipeMove=M.swipeEnd=M.slidesOnRight=M.slidesOnLeft=M.slideHandler=M.siblingDirection=M.safePreventDefault=M.lazyStartIndex=M.lazySlidesOnRight=M.lazySlidesOnLeft=M.lazyEndIndex=M.keyHandler=M.initializedState=M.getWidth=M.getTrackLeft=M.getTrackCSS=M.getTrackAnimateCSS=M.getTotalSlides=M.getSwipeDirection=M.getSlideCount=M.getRequiredLazySlides=M.getPreClones=M.getPostClones=M.getOnDemandLazySlides=M.getNavigableIndexes=M.getHeight=M.extractObject=void 0;var zC=DC(E);function DC(e){return e&&e.__esModule?e:{default:e}}function pg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pg(Object(n),!0).forEach(function(r){MC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function MC(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mw(e,t,n){return Math.max(t,Math.min(e,n))}var vr=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};M.safePreventDefault=vr;var Hf=function(t){for(var n=[],r=Bf(t),i=Wf(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};M.getOnDemandLazySlides=Hf;var UC=function(t){for(var n=[],r=Bf(t),i=Wf(t),o=r;o<i;o++)n.push(o);return n};M.getRequiredLazySlides=UC;var Bf=function(t){return t.currentSlide-vw(t)};M.lazyStartIndex=Bf;var Wf=function(t){return t.currentSlide+yw(t)};M.lazyEndIndex=Wf;var vw=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};M.lazySlidesOnLeft=vw;var yw=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};M.lazySlidesOnRight=yw;var ys=function(t){return t&&t.offsetWidth||0};M.getWidth=ys;var Vf=function(t){return t&&t.offsetHeight||0};M.getHeight=Vf;var qf=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,a;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),a=Math.round(o*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?"left":a>=135&&a<=225?"right":n===!0?a>=35&&a<=135?"up":"down":"vertical"};M.getSwipeDirection=qf;var Gf=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};M.canGoNext=Gf;var HC=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};M.extractObject=HC;var BC=function(t){var n=zC.default.Children.count(t.children),r=t.listRef,i=Math.ceil(ys(r)),o=t.trackRef&&t.trackRef.node,a=Math.ceil(ys(o)),s;if(t.vertical)s=i;else{var l=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(l*=i/100),s=Math.ceil((i-l)/t.slidesToShow)}var u=r&&Vf(r.querySelector('[data-index="0"]')),f=u*t.slidesToShow,d=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(d=n-1-t.initialSlide);var c=t.lazyLoadedList||[],y=Hf(we(we({},t),{},{currentSlide:d,lazyLoadedList:c}));c=c.concat(y);var v={slideCount:n,slideWidth:s,listWidth:i,trackWidth:a,currentSlide:d,slideHeight:u,listHeight:f,lazyLoadedList:c};return t.autoplaying===null&&t.autoplay&&(v.autoplaying="playing"),v};M.initializedState=BC;var WC=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,a=t.index,s=t.slideCount,l=t.lazyLoad,u=t.currentSlide,f=t.centerMode,d=t.slidesToScroll,c=t.slidesToShow,y=t.useCSS,v=t.lazyLoadedList;if(n&&r)return{};var w=a,b,g,p,m={},S={},O=o?a:mw(a,0,s-1);if(i){if(!o&&(a<0||a>=s))return{};a<0?w=a+s:a>=s&&(w=a-s),l&&v.indexOf(w)<0&&(v=v.concat(w)),m={animating:!0,currentSlide:w,lazyLoadedList:v,targetSlide:w},S={animating:!1,targetSlide:w}}else b=w,w<0?(b=w+s,o?s%d!==0&&(b=s-s%d):b=0):!Gf(t)&&w>u?w=b=u:f&&w>=s?(w=o?s:s-1,b=o?0:s-1):w>=s&&(b=w-s,o?s%d!==0&&(b=0):b=s-c),!o&&w+c>=s&&(b=s-c),g=Ao(we(we({},t),{},{slideIndex:w})),p=Ao(we(we({},t),{},{slideIndex:b})),o||(g===p&&(w=b),g=p),l&&(v=v.concat(Hf(we(we({},t),{},{currentSlide:w})))),y?(m={animating:!0,currentSlide:b,trackStyle:Kf(we(we({},t),{},{left:g})),lazyLoadedList:v,targetSlide:O},S={animating:!1,currentSlide:b,trackStyle:No(we(we({},t),{},{left:p})),swipeLeft:null,targetSlide:O}):m={currentSlide:b,trackStyle:No(we(we({},t),{},{left:p})),lazyLoadedList:v,targetSlide:O};return{state:m,nextState:S}};M.slideHandler=WC;var VC=function(t,n){var r,i,o,a,s,l=t.slidesToScroll,u=t.slidesToShow,f=t.slideCount,d=t.currentSlide,c=t.targetSlide,y=t.lazyLoad,v=t.infinite;if(a=f%l!==0,r=a?0:(f-d)%l,n.message==="previous")o=r===0?l:u-r,s=d-o,y&&!v&&(i=d-o,s=i===-1?f-1:i),v||(s=c-l);else if(n.message==="next")o=r===0?l:r,s=d+o,y&&!v&&(s=(d+l)%f+r),v||(s=c+l);else if(n.message==="dots")s=n.index*n.slidesToScroll;else if(n.message==="children"){if(s=n.index,v){var w=bw(we(we({},t),{},{targetSlide:s}));s>n.currentSlide&&w==="left"?s=s-f:s<n.currentSlide&&w==="right"&&(s=s+f)}}else n.message==="index"&&(s=Number(n.index));return s};M.changeSlide=VC;var qC=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};M.keyHandler=qC;var GC=function(t,n,r){return t.target.tagName==="IMG"&&vr(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};M.swipeStart=GC;var KC=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,a=n.swipeToSlide,s=n.verticalSwiping,l=n.rtl,u=n.currentSlide,f=n.edgeFriction,d=n.edgeDragged,c=n.onEdge,y=n.swiped,v=n.swiping,w=n.slideCount,b=n.slidesToScroll,g=n.infinite,p=n.touchObject,m=n.swipeEvent,S=n.listHeight,O=n.listWidth;if(!r){if(i)return vr(t);o&&a&&s&&vr(t);var $,C={},_=Ao(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var P=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!s&&!v&&P>10)return{scrolling:!0};s&&(p.swipeLength=P);var L=(l?-1:1)*(p.curX>p.startX?1:-1);s&&(L=p.curY>p.startY?1:-1);var D=Math.ceil(w/b),U=qf(n.touchObject,s),A=p.swipeLength;return g||(u===0&&(U==="right"||U==="down")||u+1>=D&&(U==="left"||U==="up")||!Gf(n)&&(U==="left"||U==="up"))&&(A=p.swipeLength*f,d===!1&&c&&(c(U),C.edgeDragged=!0)),!y&&m&&(m(U),C.swiped=!0),o?$=_+A*(S/O)*L:l?$=_-A*L:$=_+A*L,s&&($=_+A*L),C=we(we({},C),{},{touchObject:p,swipeLeft:$,trackStyle:No(we(we({},n),{},{left:$}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(C.swiping=!0,vr(t)),C}};M.swipeMove=KC;var QC=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,a=n.listWidth,s=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,f=n.swipeToSlide,d=n.scrolling,c=n.onSwipe,y=n.targetSlide,v=n.currentSlide,w=n.infinite;if(!r)return i&&vr(t),{};var b=l?u/s:a/s,g=qf(o,l),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!o.swipeLength)return p;if(o.swipeLength>b){vr(t),c&&c(g);var m,S,O=w?v:y;switch(g){case"left":case"up":S=O+Kc(n),m=f?Gc(n,S):S,p.currentDirection=0;break;case"right":case"down":S=O-Kc(n),m=f?Gc(n,S):S,p.currentDirection=1;break;default:m=O}p.triggerSlideHandler=m}else{var $=Ao(n);p.trackStyle=Kf(we(we({},n),{},{left:$}))}return p};M.swipeEnd=QC;var ww=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};M.getNavigableIndexes=ww;var Gc=function(t,n){var r=ww(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};M.checkNavigable=Gc;var Kc=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(l){if(t.vertical){if(l.offsetTop+Vf(l)/2>t.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+ys(l)/2>t.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var a=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,s=Math.abs(r.dataset.index-a)||1;return s}else return t.slidesToScroll};M.getSlideCount=Kc;var dl=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};M.checkSpecKeys=dl;var No=function(t){dl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Sw(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",l=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=we(we({},o),{},{WebkitTransform:a,transform:s,msTransform:l})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};M.getTrackCSS=No;var Kf=function(t){dl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=No(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};M.getTrackAnimateCSS=Kf;var Ao=function(t){if(t.unslick)return 0;dl(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,a=t.slideCount,s=t.slidesToShow,l=t.slidesToScroll,u=t.slideWidth,f=t.listWidth,d=t.variableWidth,c=t.slideHeight,y=t.fade,v=t.vertical,w=0,b,g,p=0;if(y||t.slideCount===1)return 0;var m=0;if(i?(m=-fo(t),a%l!==0&&n+l>a&&(m=-(n>a?s-(n-a):a%l)),o&&(m+=parseInt(s/2))):(a%l!==0&&n+l>a&&(m=s-a%l),o&&(m=parseInt(s/2))),w=m*u,p=m*c,v?b=n*c*-1+p:b=n*u*-1+w,d===!0){var S,O=r&&r.node;if(S=n+fo(t),g=O&&O.childNodes[S],b=g?g.offsetLeft*-1:0,o===!0){S=i?n+fo(t):n,g=O&&O.children[S],b=0;for(var $=0;$<S;$++)b-=O&&O.children[$]&&O.children[$].offsetWidth;b-=parseInt(t.centerPadding),b+=g&&(f-g.offsetWidth)/2}}return b};M.getTrackLeft=Ao;var fo=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};M.getPreClones=fo;var xw=function(t){return t.unslick||!t.infinite?0:t.slideCount};M.getPostClones=xw;var Sw=function(t){return t.slideCount===1?1:fo(t)+t.slideCount+xw(t)};M.getTotalSlides=Sw;var bw=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+$w(t)?"left":"right":t.targetSlide<t.currentSlide-kw(t)?"right":"left"};M.siblingDirection=bw;var $w=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),i&&n%2===0&&(a+=1),a}return i?0:n-1};M.slidesOnRight=$w;var kw=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),!i&&n%2===0&&(a+=1),a}return i?n-1:0};M.slidesOnLeft=kw;var YC=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};M.canUseDOM=YC;var fl={};function Qc(e){"@babel/helpers - typeof";return Qc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qc(e)}Object.defineProperty(fl,"__esModule",{value:!0});fl.Track=void 0;var Pn=Cw(E),yu=Cw(cl),wu=M;function Cw(e){return e&&e.__esModule?e:{default:e}}function Yc(){return Yc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yc.apply(this,arguments)}function XC(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function JC(e,t,n){return t&&hg(e.prototype,t),n&&hg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ZC(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Xc(e,t)}function Xc(e,t){return Xc=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Xc(e,t)}function eE(e){var t=nE();return function(){var r=ws(e),i;if(t){var o=ws(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return tE(this,i)}}function tE(e,t){if(t&&(Qc(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Jc(e)}function Jc(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ws(e){return ws=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ws(e)}function gg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gg(Object(n),!0).forEach(function(r){Zc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xu=function(t){var n,r,i,o,a;t.rtl?a=t.slideCount-1-t.index:a=t.index,i=a<0||a>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(a-t.currentSlide)%t.slideCount===0,a>t.currentSlide-o-1&&a<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=a&&a<t.currentSlide+t.slidesToShow;var s;t.targetSlide<0?s=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?s=t.targetSlide-t.slideCount:s=t.targetSlide;var l=a===s;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},rE=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Su=function(t,n){return t.key||n},iE=function(t){var n,r=[],i=[],o=[],a=Pn.default.Children.count(t.children),s=(0,wu.lazyStartIndex)(t),l=(0,wu.lazyEndIndex)(t);return Pn.default.Children.forEach(t.children,function(u,f){var d,c={message:"children",index:f,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(f)>=0?d=u:d=Pn.default.createElement("div",null);var y=rE(ot(ot({},t),{},{index:f})),v=d.props.className||"",w=xu(ot(ot({},t),{},{index:f}));if(r.push(Pn.default.cloneElement(d,{key:"original"+Su(d,f),"data-index":f,className:(0,yu.default)(w,v),tabIndex:"-1","aria-hidden":!w["slick-active"],style:ot(ot({outline:"none"},d.props.style||{}),y),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(c)}})),t.infinite&&t.fade===!1){var b=a-f;b<=(0,wu.getPreClones)(t)&&a!==t.slidesToShow&&(n=-b,n>=s&&(d=u),w=xu(ot(ot({},t),{},{index:n})),i.push(Pn.default.cloneElement(d,{key:"precloned"+Su(d,n),"data-index":n,tabIndex:"-1",className:(0,yu.default)(w,v),"aria-hidden":!w["slick-active"],style:ot(ot({},d.props.style||{}),y),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(c)}}))),a!==t.slidesToShow&&(n=a+f,n<l&&(d=u),w=xu(ot(ot({},t),{},{index:n})),o.push(Pn.default.cloneElement(d,{key:"postcloned"+Su(d,n),"data-index":n,tabIndex:"-1",className:(0,yu.default)(w,v),"aria-hidden":!w["slick-active"],style:ot(ot({},d.props.style||{}),y),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(c)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},oE=function(e){ZC(n,e);var t=eE(n);function n(){var r;XC(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=t.call.apply(t,[this].concat(o)),Zc(Jc(r),"node",null),Zc(Jc(r),"handleRef",function(s){r.node=s}),r}return JC(n,[{key:"render",value:function(){var i=iE(this.props),o=this.props,a=o.onMouseEnter,s=o.onMouseOver,l=o.onMouseLeave,u={onMouseEnter:a,onMouseOver:s,onMouseLeave:l};return Pn.default.createElement("div",Yc({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(Pn.default.PureComponent);fl.Track=oE;var pl={};function ed(e){"@babel/helpers - typeof";return ed=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ed(e)}Object.defineProperty(pl,"__esModule",{value:!0});pl.Dots=void 0;var xa=Ew(E),aE=Ew(cl),mg=M;function Ew(e){return e&&e.__esModule?e:{default:e}}function vg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function sE(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vg(Object(n),!0).forEach(function(r){lE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cE(e,t,n){return t&&yg(e.prototype,t),n&&yg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function dE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&td(e,t)}function td(e,t){return td=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},td(e,t)}function fE(e){var t=gE();return function(){var r=xs(e),i;if(t){var o=xs(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return pE(this,i)}}function pE(e,t){if(t&&(ed(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hE(e)}function hE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function gE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xs(e){return xs=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xs(e)}var mE=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},vE=function(e){dE(n,e);var t=fE(n);function n(){return uE(this,n),t.apply(this,arguments)}return cE(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,a=i.onMouseOver,s=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,f=i.slidesToShow,d=i.slideCount,c=i.currentSlide,y=mE({slideCount:d,slidesToScroll:u,slidesToShow:f,infinite:l}),v={onMouseEnter:o,onMouseOver:a,onMouseLeave:s},w=[],b=0;b<y;b++){var g=(b+1)*u-1,p=l?g:(0,mg.clamp)(g,0,d-1),m=p-(u-1),S=l?m:(0,mg.clamp)(m,0,d-1),O=(0,aE.default)({"slick-active":l?c>=S&&c<=p:c===S}),$={message:"dots",index:b,slidesToScroll:u,currentSlide:c},C=this.clickHandler.bind(this,$);w=w.concat(xa.default.createElement("li",{key:b,className:O},xa.default.cloneElement(this.props.customPaging(b),{onClick:C})))}return xa.default.cloneElement(this.props.appendDots(w),sE({className:this.props.dotsClass},v))}}]),n}(xa.default.PureComponent);pl.Dots=vE;var Ti={};function nd(e){"@babel/helpers - typeof";return nd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nd(e)}Object.defineProperty(Ti,"__esModule",{value:!0});Ti.PrevArrow=Ti.NextArrow=void 0;var pi=_w(E),Ow=_w(cl),yE=M;function _w(e){return e&&e.__esModule?e:{default:e}}function Ss(){return Ss=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ss.apply(this,arguments)}function wg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wg(Object(n),!0).forEach(function(r){wE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jw(e,t,n){return t&&xg(e.prototype,t),n&&xg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Pw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&rd(e,t)}function rd(e,t){return rd=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},rd(e,t)}function Lw(e){var t=bE();return function(){var r=$s(e),i;if(t){var o=$s(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return xE(this,i)}}function xE(e,t){if(t&&(nd(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return SE(e)}function SE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function $s(e){return $s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},$s(e)}var $E=function(e){Pw(n,e);var t=Lw(n);function n(){return Tw(this,n),t.apply(this,arguments)}return jw(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var a={key:"0","data-role":"none",className:(0,Ow.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=pi.default.cloneElement(this.props.prevArrow,bs(bs({},a),s)):l=pi.default.createElement("button",Ss({key:"0",type:"button"},a)," ","Previous"),l}}]),n}(pi.default.PureComponent);Ti.PrevArrow=$E;var kE=function(e){Pw(n,e);var t=Lw(n);function n(){return Tw(this,n),t.apply(this,arguments)}return jw(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,yE.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var a={key:"1","data-role":"none",className:(0,Ow.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=pi.default.cloneElement(this.props.nextArrow,bs(bs({},a),s)):l=pi.default.createElement("button",Ss({key:"1",type:"button"},a)," ","Next"),l}}]),n}(pi.default.PureComponent);Ti.NextArrow=kE;var Rw=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var a=o[i];n.call(r,a[1],a[0])}},t}()}(),id=typeof window<"u"&&typeof document<"u"&&window.document===document,ks=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),CE=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ks):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),EE=2;function OE(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function a(){CE(o)}function s(){var l=Date.now();if(n){if(l-i<EE)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=l}return s}var _E=20,TE=["top","right","bottom","left","width","height","size","weight"],jE=typeof MutationObserver<"u",PE=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=OE(this.refresh.bind(this),_E)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!id||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),jE?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!id||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=TE.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Iw=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},ji=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||ks},Fw=hl(0,0,0,0);function Cs(e){return parseFloat(e)||0}function Sg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Cs(o)},0)}function LE(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],a=e["padding-"+o];n[o]=Cs(a)}return n}function RE(e){var t=e.getBBox();return hl(0,0,t.width,t.height)}function IE(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Fw;var r=ji(e).getComputedStyle(e),i=LE(r),o=i.left+i.right,a=i.top+i.bottom,s=Cs(r.width),l=Cs(r.height);if(r.boxSizing==="border-box"&&(Math.round(s+o)!==t&&(s-=Sg(r,"left","right")+o),Math.round(l+a)!==n&&(l-=Sg(r,"top","bottom")+a)),!NE(e)){var u=Math.round(s+o)-t,f=Math.round(l+a)-n;Math.abs(u)!==1&&(s-=u),Math.abs(f)!==1&&(l-=f)}return hl(i.left,i.top,s,l)}var FE=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof ji(e).SVGGraphicsElement}:function(e){return e instanceof ji(e).SVGElement&&typeof e.getBBox=="function"}}();function NE(e){return e===ji(e).document.documentElement}function AE(e){return id?FE(e)?RE(e):IE(e):Fw}function zE(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(o.prototype);return Iw(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function hl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var DE=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=hl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=AE(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),ME=function(){function e(t,n){var r=zE(n);Iw(this,{target:t,contentRect:r})}return e}(),UE=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Rw,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof ji(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new DE(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof ji(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new ME(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Nw=typeof WeakMap<"u"?new WeakMap:new Rw,Aw=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=PE.getInstance(),r=new UE(t,n,this);Nw.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Aw.prototype[e]=function(){var t;return(t=Nw.get(this))[e].apply(t,arguments)}});var HE=function(){return typeof ks.ResizeObserver<"u"?ks.ResizeObserver:Aw}();const BE=Object.freeze(Object.defineProperty({__proto__:null,default:HE},Symbol.toStringTag,{value:"Module"})),WE=fx(BE);Object.defineProperty(ul,"__esModule",{value:!0});ul.InnerSlider=void 0;var Ze=Yo(E),VE=Yo(hw),qE=Yo(AC),GE=Yo(cl),be=M,KE=fl,QE=pl,bg=Ti,YE=Yo(WE);function Yo(e){return e&&e.__esModule?e:{default:e}}function Es(e){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Es(e)}function Os(){return Os=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Os.apply(this,arguments)}function XE(e,t){if(e==null)return{};var n=JE(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function JE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function $g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$g(Object(n),!0).forEach(function(r){re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$g(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function eO(e,t,n){return t&&kg(e.prototype,t),n&&kg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function tO(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&od(e,t)}function od(e,t){return od=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},od(e,t)}function nO(e){var t=iO();return function(){var r=_s(e),i;if(t){var o=_s(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return rO(this,i)}}function rO(e,t){if(t&&(Es(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ne(e)}function ne(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function iO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _s(e){return _s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_s(e)}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oO=function(e){tO(n,e);var t=nO(n);function n(r){var i;ZE(this,n),i=t.call(this,r),re(ne(i),"listRefHandler",function(a){return i.list=a}),re(ne(i),"trackRefHandler",function(a){return i.track=a}),re(ne(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var a=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,be.getHeight)(a)+"px"}}),re(ne(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var a=(0,be.getOnDemandLazySlides)(K(K({},i.props),i.state));a.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}var s=K({listRef:i.list,trackRef:i.track},i.props);i.updateState(s,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new YE.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),re(ne(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(a){return clearTimeout(a)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),re(ne(i),"componentDidUpdate",function(a){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var s=(0,be.getOnDemandLazySlides)(K(K({},i.props),i.state));s.length>0&&(i.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}i.adaptHeight();var l=K(K({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(a);u&&i.updateState(l,u,function(){i.state.currentSlide>=Ze.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Ze.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),re(ne(i),"onWindowResized",function(a){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,qE.default)(function(){return i.resizeWindow(a)},50),i.debouncedResize()}),re(ne(i),"resizeWindow",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(i.track&&i.track.node);if(s){var l=K(K({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,a,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),re(ne(i),"updateState",function(a,s,l){var u=(0,be.initializedState)(a);a=K(K(K({},a),u),{},{slideIndex:u.currentSlide});var f=(0,be.getTrackLeft)(a);a=K(K({},a),{},{left:f});var d=(0,be.getTrackCSS)(a);(s||Ze.default.Children.count(i.props.children)!==Ze.default.Children.count(a.children))&&(u.trackStyle=d),i.setState(u,l)}),re(ne(i),"ssrInit",function(){if(i.props.variableWidth){var a=0,s=0,l=[],u=(0,be.getPreClones)(K(K(K({},i.props),i.state),{},{slideCount:i.props.children.length})),f=(0,be.getPostClones)(K(K(K({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(C){l.push(C.props.style.width),a+=C.props.style.width});for(var d=0;d<u;d++)s+=l[l.length-1-d],a+=l[l.length-1-d];for(var c=0;c<f;c++)a+=l[c];for(var y=0;y<i.state.currentSlide;y++)s+=l[y];var v={width:a+"px",left:-s+"px"};if(i.props.centerMode){var w="".concat(l[i.state.currentSlide],"px");v.left="calc(".concat(v.left," + (100% - ").concat(w,") / 2 ) ")}return{trackStyle:v}}var b=Ze.default.Children.count(i.props.children),g=K(K(K({},i.props),i.state),{},{slideCount:b}),p=(0,be.getPreClones)(g)+(0,be.getPostClones)(g)+b,m=100/i.props.slidesToShow*p,S=100/p,O=-S*((0,be.getPreClones)(g)+i.state.currentSlide)*m/100;i.props.centerMode&&(O+=(100-S*m/100)/2);var $={width:m+"%",left:O+"%"};return{slideWidth:S+"%",trackStyle:$}}),re(ne(i),"checkImagesLoad",function(){var a=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],s=a.length,l=0;Array.prototype.forEach.call(a,function(u){var f=function(){return++l&&l>=s&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var d=u.onclick;u.onclick=function(){d(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=f,u.onerror=function(){f(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),re(ne(i),"progressiveLazyLoad",function(){for(var a=[],s=K(K({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,be.getPostClones)(s);l++)if(i.state.lazyLoadedList.indexOf(l)<0){a.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,be.getPreClones)(s);u--)if(i.state.lazyLoadedList.indexOf(u)<0){a.push(u);break}a.length>0?(i.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),re(ne(i),"slideHandler",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,f=l.beforeChange,d=l.onLazyLoad,c=l.speed,y=l.afterChange,v=i.state.currentSlide,w=(0,be.slideHandler)(K(K(K({index:a},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!s})),b=w.state,g=w.nextState;if(b){f&&f(v,b.currentSlide);var p=b.lazyLoadedList.filter(function(m){return i.state.lazyLoadedList.indexOf(m)<0});d&&p.length>0&&d(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),y&&y(v),delete i.animationEndCallback),i.setState(b,function(){u&&i.asNavForIndex!==a&&(i.asNavForIndex=a,u.innerSlider.slideHandler(a)),g&&(i.animationEndCallback=setTimeout(function(){var m=g.animating,S=XE(g,["animating"]);i.setState(S,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:m})},10)),y&&y(b.currentSlide),delete i.animationEndCallback})},c))})}}),re(ne(i),"changeSlide",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=K(K({},i.props),i.state),u=(0,be.changeSlide)(l,a);if(!(u!==0&&!u)&&(s===!0?i.slideHandler(u,s):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var f=i.list.querySelectorAll(".slick-current");f[0]&&f[0].focus()}}),re(ne(i),"clickHandler",function(a){i.clickable===!1&&(a.stopPropagation(),a.preventDefault()),i.clickable=!0}),re(ne(i),"keyHandler",function(a){var s=(0,be.keyHandler)(a,i.props.accessibility,i.props.rtl);s!==""&&i.changeSlide({message:s})}),re(ne(i),"selectHandler",function(a){i.changeSlide(a)}),re(ne(i),"disableBodyScroll",function(){var a=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=a}),re(ne(i),"enableBodyScroll",function(){window.ontouchmove=null}),re(ne(i),"swipeStart",function(a){i.props.verticalSwiping&&i.disableBodyScroll();var s=(0,be.swipeStart)(a,i.props.swipe,i.props.draggable);s!==""&&i.setState(s)}),re(ne(i),"swipeMove",function(a){var s=(0,be.swipeMove)(a,K(K(K({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));s&&(s.swiping&&(i.clickable=!1),i.setState(s))}),re(ne(i),"swipeEnd",function(a){var s=(0,be.swipeEnd)(a,K(K(K({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(s){var l=s.triggerSlideHandler;delete s.triggerSlideHandler,i.setState(s),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),re(ne(i),"touchEnd",function(a){i.swipeEnd(a),i.clickable=!0}),re(ne(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),re(ne(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),re(ne(i),"slickGoTo",function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a=Number(a),isNaN(a))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:a,currentSlide:i.state.currentSlide},s)},0))}),re(ne(i),"play",function(){var a;if(i.props.rtl)a=i.state.currentSlide-i.props.slidesToScroll;else if((0,be.canGoNext)(K(K({},i.props),i.state)))a=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(a)}),re(ne(i),"autoPlay",function(a){i.autoplayTimer&&clearInterval(i.autoplayTimer);var s=i.state.autoplaying;if(a==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(a==="leave"){if(s==="paused"||s==="focused")return}else if(a==="blur"&&(s==="paused"||s==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),re(ne(i),"pause",function(a){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var s=i.state.autoplaying;a==="paused"?i.setState({autoplaying:"paused"}):a==="focused"?(s==="hovered"||s==="playing")&&i.setState({autoplaying:"focused"}):s==="playing"&&i.setState({autoplaying:"hovered"})}),re(ne(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),re(ne(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),re(ne(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),re(ne(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),re(ne(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),re(ne(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),re(ne(i),"render",function(){var a=(0,GE.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),s=K(K({},i.props),i.state),l=(0,be.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=K(K({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var f;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=(0,be.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),c=i.props.pauseOnDotsHover;d=K(K({},d),{},{clickHandler:i.changeSlide,onMouseEnter:c?i.onDotsLeave:null,onMouseOver:c?i.onDotsOver:null,onMouseLeave:c?i.onDotsLeave:null}),f=Ze.default.createElement(QE.Dots,d)}var y,v,w=(0,be.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);w.clickHandler=i.changeSlide,i.props.arrows&&(y=Ze.default.createElement(bg.PrevArrow,w),v=Ze.default.createElement(bg.NextArrow,w));var b=null;i.props.vertical&&(b={height:i.state.listHeight});var g=null;i.props.vertical===!1?i.props.centerMode===!0&&(g={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(g={padding:i.props.centerPadding+" 0px"});var p=K(K({},b),g),m=i.props.touchMove,S={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:m?i.swipeStart:null,onMouseMove:i.state.dragging&&m?i.swipeMove:null,onMouseUp:m?i.swipeEnd:null,onMouseLeave:i.state.dragging&&m?i.swipeEnd:null,onTouchStart:m?i.swipeStart:null,onTouchMove:i.state.dragging&&m?i.swipeMove:null,onTouchEnd:m?i.touchEnd:null,onTouchCancel:i.state.dragging&&m?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},O={className:a,dir:"ltr",style:i.props.style};return i.props.unslick&&(S={className:"slick-list"},O={className:a}),Ze.default.createElement("div",O,i.props.unslick?"":y,Ze.default.createElement("div",Os({ref:i.listRefHandler},S),Ze.default.createElement(KE.Track,Os({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":v,i.props.unslick?"":f)}),i.list=null,i.track=null,i.state=K(K({},VE.default),{},{currentSlide:i.props.initialSlide,slideCount:Ze.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=K(K({},i.state),o),i}return eO(n,[{key:"didPropsChange",value:function(i){for(var o=!1,a=0,s=Object.keys(this.props);a<s.length;a++){var l=s[a];if(!i.hasOwnProperty(l)){o=!0;break}if(!(Es(i[l])==="object"||typeof i[l]=="function")&&i[l]!==this.props[l]){o=!0;break}}return o||Ze.default.Children.count(this.props.children)!==Ze.default.Children.count(i.children)}}]),n}(Ze.default.Component);ul.InnerSlider=oO;var aO=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},sO=aO,lO=sO,uO=function(e){var t=/[height|width]$/;return t.test(e)},Cg=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=lO(r),uO(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},cO=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Cg(n),r<e.length-1&&(t+=", ")}),t):Cg(e)},dO=cO,zw={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(E);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(a){return t.default.createElement("ul",{style:{display:"block"}},a)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(a){return t.default.createElement("button",null,a+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(zw);var bu,Eg;function fO(){if(Eg)return bu;Eg=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},bu=e,bu}var $u,Og;function Dw(){if(Og)return $u;Og=1;function e(r,i){var o=0,a=r.length,s;for(o;o<a&&(s=i(r[o],o),s!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return $u={isFunction:n,isArray:t,each:e},$u}var ku,_g;function pO(){if(_g)return ku;_g=1;var e=fO(),t=Dw().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(a){o.mql=a.currentTarget||a,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,a){if(o.equals(r))return o.destroy(),!i.splice(a,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},ku=n,ku}var Cu,Tg;function hO(){if(Tg)return Cu;Tg=1;var e=pO(),t=Dw(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(a,s,l){var u=this.queries,f=l&&this.browserIsIncapable;return u[a]||(u[a]=new e(a,f)),r(s)&&(s={match:s}),i(s)||(s=[s]),n(s,function(d){r(d)&&(d={match:d}),u[a].addHandler(d)}),this},unregister:function(a,s){var l=this.queries[a];return l&&(s?l.removeHandler(s):(l.clear(),delete this.queries[a])),this}},Cu=o,Cu}var Eu,jg;function gO(){if(jg)return Eu;jg=1;var e=hO();return Eu=new e,Eu}(function(e){function t(_){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},t(_)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(E),r=ul,i=s(dO),o=s(zw),a=M;function s(_){return _&&_.__esModule?_:{default:_}}function l(){return l=Object.assign||function(_){for(var P=1;P<arguments.length;P++){var L=arguments[P];for(var D in L)Object.prototype.hasOwnProperty.call(L,D)&&(_[D]=L[D])}return _},l.apply(this,arguments)}function u(_,P){var L=Object.keys(_);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(_);P&&(D=D.filter(function(U){return Object.getOwnPropertyDescriptor(_,U).enumerable})),L.push.apply(L,D)}return L}function f(_){for(var P=1;P<arguments.length;P++){var L=arguments[P]!=null?arguments[P]:{};P%2?u(Object(L),!0).forEach(function(D){O(_,D,L[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(L)):u(Object(L)).forEach(function(D){Object.defineProperty(_,D,Object.getOwnPropertyDescriptor(L,D))})}return _}function d(_,P){if(!(_ instanceof P))throw new TypeError("Cannot call a class as a function")}function c(_,P){for(var L=0;L<P.length;L++){var D=P[L];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(_,D.key,D)}}function y(_,P,L){return P&&c(_.prototype,P),L&&c(_,L),Object.defineProperty(_,"prototype",{writable:!1}),_}function v(_,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(P&&P.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),P&&w(_,P)}function w(_,P){return w=Object.setPrototypeOf||function(D,U){return D.__proto__=U,D},w(_,P)}function b(_){var P=m();return function(){var D=S(_),U;if(P){var A=S(this).constructor;U=Reflect.construct(D,arguments,A)}else U=D.apply(this,arguments);return g(this,U)}}function g(_,P){if(P&&(t(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(_)}function p(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function m(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(_){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(L){return L.__proto__||Object.getPrototypeOf(L)},S(_)}function O(_,P,L){return P in _?Object.defineProperty(_,P,{value:L,enumerable:!0,configurable:!0,writable:!0}):_[P]=L,_}var $=(0,a.canUseDOM)()&&gO(),C=function(_){v(L,_);var P=b(L);function L(D){var U;return d(this,L),U=P.call(this,D),O(p(U),"innerSliderRefHandler",function(A){return U.innerSlider=A}),O(p(U),"slickPrev",function(){return U.innerSlider.slickPrev()}),O(p(U),"slickNext",function(){return U.innerSlider.slickNext()}),O(p(U),"slickGoTo",function(A){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return U.innerSlider.slickGoTo(A,T)}),O(p(U),"slickPause",function(){return U.innerSlider.pause("paused")}),O(p(U),"slickPlay",function(){return U.innerSlider.autoPlay("play")}),U.state={breakpoint:null},U._responsiveMediaHandlers=[],U}return y(L,[{key:"media",value:function(U,A){$.register(U,A),this._responsiveMediaHandlers.push({query:U,handler:A})}},{key:"componentDidMount",value:function(){var U=this;if(this.props.responsive){var A=this.props.responsive.map(function(R){return R.breakpoint});A.sort(function(R,W){return R-W}),A.forEach(function(R,W){var Y;W===0?Y=(0,i.default)({minWidth:0,maxWidth:R}):Y=(0,i.default)({minWidth:A[W-1]+1,maxWidth:R}),(0,a.canUseDOM)()&&U.media(Y,function(){U.setState({breakpoint:R})})});var T=(0,i.default)({minWidth:A.slice(-1)[0]});(0,a.canUseDOM)()&&this.media(T,function(){U.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(U){$.unregister(U.query,U.handler)})}},{key:"render",value:function(){var U=this,A,T;this.state.breakpoint?(T=this.props.responsive.filter(function(Oe){return Oe.breakpoint===U.state.breakpoint}),A=T[0].settings==="unslick"?"unslick":f(f(f({},o.default),this.props),T[0].settings)):A=f(f({},o.default),this.props),A.centerMode&&(A.slidesToScroll>1,A.slidesToScroll=1),A.fade&&(A.slidesToShow>1,A.slidesToScroll>1,A.slidesToShow=1,A.slidesToScroll=1);var R=n.default.Children.toArray(this.props.children);R=R.filter(function(Oe){return typeof Oe=="string"?!!Oe.trim():!!Oe}),A.variableWidth&&(A.rows>1||A.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),A.variableWidth=!1);for(var W=[],Y=null,I=0;I<R.length;I+=A.rows*A.slidesPerRow){for(var N=[],V=I;V<I+A.rows*A.slidesPerRow;V+=A.slidesPerRow){for(var J=[],Q=V;Q<V+A.slidesPerRow&&(A.variableWidth&&R[Q].props.style&&(Y=R[Q].props.style.width),!(Q>=R.length));Q+=1)J.push(n.default.cloneElement(R[Q],{key:100*I+10*V+Q,tabIndex:-1,style:{width:"".concat(100/A.slidesPerRow,"%"),display:"inline-block"}}));N.push(n.default.createElement("div",{key:10*I+V},J))}A.variableWidth?W.push(n.default.createElement("div",{key:I,style:{width:Y}},N)):W.push(n.default.createElement("div",{key:I},N))}if(A==="unslick"){var kt="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:kt},R)}else W.length<=A.slidesToShow&&(A.unslick=!0);return n.default.createElement(r.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},A),W)}}]),L}(n.default.Component);e.default=C})(pw);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(pw);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(fw);const gl=_r(fw),mO=x.div`
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
`,vO=x.img`
  height: calc(74vw / 14.4);
  width: calc(74vw / 14.4);
  object-fit: contain;

  @media (max-width: ${k}) {
    height: calc(74vw / 5.08);
    width: calc(74vw / 5.08);
  }
`,yO=({slide:e})=>h.jsx(mO,{children:h.jsx(vO,{src:e.src,alt:e.alt})}),wO=x.div`
  margin: 0 2vw;
  width: 69vw;
  position: relative;

  @media (max-width: ${k}) {
    margin: 0 auto;
    width: 100%;
  }
`,Pg=({slides:e,size:t})=>{const r={dots:!1,arrows:!1,infinite:!0,slidesToShow:t==="small"?4:11,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1,draggable:!0};return h.jsx(wO,{children:h.jsx(gl,{...r,children:e.map(i=>h.jsx(yO,{slide:i},i.id))})})},{whiteColor:Mw,darkGrayColor:xO}=ae,SO=x.section`
  width: 100vw;
  box-sizing: border-box;
  ${Sn};
  background-position: center -9.72vw;
  min-height: calc(800vw / 14.4 - 9.72vw);
  padding: 8.26vw 1vw 8.26vw 4.28vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-image: url(${_2.background});
  //border-radius: 0 0 1.6vw 1.6vw;
  border-radius: 0;

  @media (max-width: ${k}) {
    padding: 22vw 0 20.27vw 9vw;
    min-height: 140vw;
    flex-direction: column;
    background-image: none;
    background-color: ${xO};
    border-radius: 0;
    overflow-x: hidden;
  }
`,bO=x.div`
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
`,$O=x.p`
  ${zf};
  max-width: 37%;
  margin: 2vw 0 6.18vw;

  @media (max-width: 1400px) {
    max-width: 90%;
    margin: 7.87vw 0 4.3vw;
  }
`,kO=x.p`
  min-width: 22.5vw;
  ${ee};
  ${fe};
  color: ${Mw};
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
`,CO=({availableCurrencies:e})=>{const{title:t,text:n,subtitle:r,coins:i}=e,o=rn();return h.jsxs(SO,{children:[h.jsx(bt,{color:Mw,children:t}),h.jsx($O,{children:n}),h.jsxs(bO,{children:[h.jsx(kO,{children:r}),o?h.jsx(Pg,{slides:i,size:"small"}):h.jsx(Pg,{slides:i,size:"big"})]})]})},EO=x(tr)`
  color: ${ae.whiteColor};
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
`,Qf=({children:e,...t})=>h.jsx(EO,{...t,children:e}),{greenColor:Uw}=ae,OO=x.div`
  width: 100%;

  @media (max-width: ${k}) {
    width: 82.41vw;
    margin-right: 7.66vw;
    height: 100%;
    display: flex;
  }
`,_O=x.div`
  margin-top: 2.57vw;
  padding: 0 0 0 6vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 82.25vw;
  ${Af};
  background-image: url(${sg.backgroundL});
  border-radius: 30px;

  @media (max-width: ${k}) {
    margin-top: 0;
    padding: 8.86vw 4.53vw;
    justify-content: start;
    flex-direction: column;
    width: 82.41vw;
    height: 100%;
    background-image: url(${sg.backgroundS});
  }
`,TO=x.p`
  ${zf};
  margin: 6.74vw 0 2.57vw;

  @media (max-width: ${k}) {
    margin: 12.95vw 0 4.32vw;
  }
`,jO=x.div`
  width: 32vw;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: ${k}) {
    margin: 0 auto;
    width: 70vw;
    box-sizing: border-box;
  }
`,PO=x(St)`
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${Uw};
  font-size: 1.74vw;
  ${fe};
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
    background-image: url(${Cr.playIconGreen});
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
`,LO=x(St)`
  text-decoration: underline;
  width: fit-content;
  background: transparent;
  color: ${Uw};
  font-size: 1.74vw;
  ${fe};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;

  @media (max-width: ${k}) {
    font-size: 4.91vw;
  }
`,RO=x.div`
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
`,IO=x.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,FO=(e,t)=>{switch(e.id){case aw:return e.link&&h.jsx(LO,{color:"transparent",href:e.link.href,target:"_blank",rel:"noopener noreferrer",children:e.link.value});case sw:return h.jsx(dw,{links:t});case lw:return e.link&&h.jsx(PO,{color:"transparent",href:e.link.href,target:"_blank",rel:"noopener noreferrer",children:e.link.value});default:return null}},Hw=({slide:e,links:t})=>{const n=rn();return h.jsx(OO,{children:h.jsxs(_O,{children:[n&&h.jsx(Qf,{children:e.subtitle}),h.jsxs(jO,{children:[h.jsx(TO,{children:e.textContent}),FO(e,t)]}),h.jsx(RO,{children:h.jsx(IO,{src:e.image.src,alt:e.image.alt})})]})})},NO=x.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,AO=({slides:e,links:t})=>{const n={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return h.jsx(NO,{children:h.jsx(gl,{...n,children:e.map(r=>h.jsx(Hw,{slide:r,links:t},r.id))})})},zO=x.button`
  ${ee};
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

  ${e=>e.disabled&&Te`
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    `}
`;function it({className:e,children:t,onClick:n,type:r,disabled:i}){return h.jsx(zO,{type:r,className:e,disabled:i,onClick:n,children:t})}const{whiteColor:DO,greenColor:MO}=ae,UO=x(it)`
  padding: 0 2vw;
  background-color: transparent;
  width: ${({$width:e})=>e};
  border-bottom: 2px solid
    ${({$isActive:e})=>e?MO:DO};
`,HO=({isActive:e,id:t,onClick:n,children:r,width:i})=>h.jsx(UO,{$isActive:e,$width:i,disabled:e,type:"button",onClick:()=>n(t),children:r}),{whiteColor:Lg}=ae,BO=x.section`
  ${Sn};
  //border-radius: 1.6vw 1.6vw 0 0;
  min-height: calc(901vw / 14.4);
  padding: 4.28vw;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${og.backgroundL});

  @media (max-width: ${k}) {
    min-height: calc(970vw / 5.08);
    //border-radius: 3.93vw 3.93vw 0 0;
    padding: 14.93vw 0;
    flex-direction: column;
    background-image: url(${og.backgroundS});
  }
`,WO=x(bt)`
  width: 80%;
`,VO=x(Uf)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${k}) {
    margin: 1.77vw 0 10.61vw;
  }
`,qO=x.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,GO=({id:e,title:t})=>{const n=rn(),{t:r}=Rt(),i=Vt("ProductAndService",r),{text:o,slides:a,mobileWallet:s,availableCurrencies:l,videoSlider:u}=i,[f,d]=E.useState(a[0].id),c=w=>{d(w)},y=a.map(w=>w.id),v=a.find(w=>w.id===f);return h.jsxs("section",{id:e,children:[h.jsxs(BO,{children:[h.jsx(WO,{color:Lg,children:t}),h.jsx(VO,{color:Lg,children:o}),!n&&h.jsx(qO,{children:y.map((w,b)=>{const g=f===w,p=a.find(m=>m.id===w);if(p){const S=[29,29,27,15][b];return h.jsx(HO,{id:p.id,width:`${S}%`,isActive:g,onClick:c,children:h.jsx(Qf,{children:p.subtitle})},p.id)}return null})}),n?h.jsx(AO,{slides:a,links:s.links}):v&&h.jsx(Hw,{slide:v,links:s.links})]}),h.jsx(wC,{mobileWallet:s}),h.jsx(CO,{availableCurrencies:l})]})},{whiteColor:KO,greenColor:QO,lightGreenColor:YO}=ae,XO=x.div`
  grid-column: 3 / 4;
  width: 100%;
  display: flex;
  justify-content: end;
`,JO=x(it)`
  color: transparent;
  padding: 0.8vw 1.7vw 0.8vw 1.7vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    133deg,
    ${QO} 0%,
    ${YO} 100%
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
`,ZO=x.div`
  width: 1.04vw;
  height: 1.18vw;
  background-image: url(${Cr.playIconWhite});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${k}) {
    width: 3.34vw;
    height: 2.95vw;
  }
`,e_=x.span`
  margin-right: 1vw;
  color: ${KO};
  font-size: 1.11vw;
  ${kr};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.32px;

  @media (max-width: ${k}) {
    margin-right: 4vw;
    font-size: 3.15vw;
  }
`,Rg=({text:e})=>{const[t,n]=E.useState(!1),r=Ai(),i=()=>{n(!0),r("/payment-fees"),window.scrollTo({top:0})};return h.jsx(XO,{children:h.jsxs(JO,{type:"button",disabled:t,onClick:i,children:[h.jsx(e_,{children:e}),h.jsx(ZO,{})]})})},{lightBlackColor:Bw,blackColor:Ww,darkGreenColor:t_}=ae,n_=x.section`
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
`,Ig=x.div`
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
`,Fg=x.div`
  grid-column: 2 / 3;
  width: 100%;
`,r_=x(bt)`
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
  border-bottom: 2px solid ${Bw};

  @media (max-width: ${k}) {
    padding-bottom: 5.09vw;
    margin: 0;
    font-size: 9.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -1px;
  }
`,Ng=x(tr)`
  color: ${Ww};
  font-size: calc(40vw / 14.4);
  line-height: 1.2;
  letter-spacing: -0.8px;

  @media (max-width: ${k}) {
    margin: 9.82vw 0 0 0;
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
  }
`,Ag=x.p`
  ${ee};
  ${fe};
  color: ${t_};
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
`,i_=x.p`
  ${ee};
  color: ${Ww};
  ${fe};
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
`,o_=({fees:e})=>{const t=rn();return h.jsxs(n_,{children:[h.jsx(r_,{color:Bw,children:e.title}),h.jsxs(Ig,{children:[h.jsx(Ng,{children:e.lineOne.title}),h.jsxs(Fg,{children:[h.jsx(Ag,{children:e.lineOne.text.main}),e.lineOne.text.span&&h.jsx(i_,{children:e.lineOne.text.span})]}),!t&&h.jsx(Rg,{text:e.lineOne.text.button})]}),h.jsxs(Ig,{children:[h.jsx(Ng,{children:e.lineTwo.title}),h.jsx(Fg,{children:h.jsx(Ag,{children:e.lineTwo.text.main})}),t&&h.jsx(Rg,{text:e.lineOne.text.button})]})]})},{whiteColor:Yf}=ae,a_=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${k}) {
    width: 80vw;
    min-height: 68.17vw;
    align-items: start;
  }
`,s_=x.div`
  @media (max-width: ${k}) {
    padding: 7.18vw 0 10.26vw 10vw;
  }
`,l_=x(Qf)`
  @media (max-width: ${k}) {
    width: 100%;
    box-sizing: border-box;
    padding: 9.29vw 1.38vw 5.33vw 12.84vw;
    border-bottom: 1px solid ${Yf};
  }
`,u_=x.img`
  margin-right: 2.15vw;
  width: 2.98vw;
  height: auto;

  @media (max-width: ${k}) {
    width: 12.45vw;
    margin-right: 3.93vw;
  }
`,c_=x.h4`
  ${ee};
  text-align: left;
  font-size: calc(22vw / 14.4);
  ${It};
  font-weight: 500;
  line-height: 1.5;
  color: ${Yf};

  @media (max-width: ${k}) {
    font-size: calc(22vw / 5.08);
  }
`,d_=x.p`
  ${ee};
  ${fe};
  color: ${Yf};
  font-size: calc(20vw / 14.05);
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(20vw / 5.08);
  }
`,f_=x.div`
  display: flex;
  flex-direction: row;
  padding-bottom: calc(14vw / 14.4);

  @media (max-width: ${k}) {
    padding-bottom: calc(24vw / 5.08);
  }
`,Vw=({slide:e,subtitle:t})=>{const{image:n,title:r,text:i}=e,o=rn();return h.jsxs(a_,{children:[o&&h.jsx(l_,{children:t}),h.jsxs(s_,{children:[h.jsxs(f_,{children:[h.jsx(u_,{src:n.src,alt:n.alt}),h.jsx(c_,{children:r})]}),h.jsx(d_,{children:i})]})]})},p_=x(it)`
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
`,h_=({children:e,className:t,currentSlide:n,slideCount:r,top:i,left:o,right:a,...s})=>{const l={className:t,onClick:s.onClick||(()=>console.log("onClick")),type:"button",disabled:!1};return h.jsxs(p_,{...l,$top:i,$left:o,$right:a,...s,children:[e,!n||!r]})},g_=x.img`
  @media (${k}) {
    border-radius: 50%;
    width: 8.82vw;
    height: 8.82vw};
  }
`,m_=x.div`
  height: 100%;
  background-image: url(${T2.background});
  background-repeat: no-repeat;
  background-size: cover;
`,v_=({slides:e,subtitle:t,photoSlideArrowRight:n})=>{const r={dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,swipe:!1,variableWidth:!0,centerMode:!1,prevArrow:h.jsx(h.Fragment,{}),nextArrow:h.jsx(h_,{className:"arrow next",top:"12.5%",right:"9%",children:h.jsx(g_,{src:n.src,alt:n.alt})})};return h.jsx(m_,{children:h.jsx(gl,{...r,children:e.map(i=>h.jsx(Vw,{subtitle:t,slide:i},i.id))})})},{whiteColor:dr,greenColor:y_}=ae,w_=x.div`
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  margin-bottom: ${({size:e})=>e==="big"?"calc(42vw / 14.4)":"calc(60vw / 14.4)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 2px solid ${dr};

  &:nth-child(2n) {
    border-bottom: ${({size:e})=>e==="big"?"none":`2px solid ${dr}`};
  }

  @media (max-width: ${k}) {
    margin-bottom: calc(49vw / 5.08);
    border-bottom: ${({size:e})=>e==="small"?"none":`2px solid ${dr}`};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
    margin-left: ${({size:e})=>e==="small"?"8.46vw":"0"};

    &:nth-child(2n) {
      border-bottom: ${({size:e})=>e==="big"?`2px solid ${dr}`:"none"};
    }
  }
`,x_=x.div`
  margin: ${({size:e})=>e==="big"?"2vw 0 0.71vw":"1vw 0 1vw"};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  @media (max-width: ${k}) {
    margin: ${({size:e})=>e==="big"?"calc(45vw / 5.09) 0 calc(12vw / 5.09)":"calc(12vw / 5.09) 0 calc(12vw / 5.09)"};
  }
`,qw=x.p`
  ${ee};
  ${fe};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.09);
  }
`,S_=x(qw)`
  padding-right: 3vw;
  color: ${y_};
`,b_=x(qw)`
  color: ${dr};
`,$_=x(tr)`
  width: 100%;
  margin-bottom: calc(6.58vw / 14.4);
  color: ${dr};
  font-size: ${({size:e})=>e==="big"?"calc(35vw / 14.4)":"calc(28vw / 14.4)"};
  line-height: 1.2;
  letter-spacing: -0.7px;
  text-align: left;

  @media (max-width: ${k}) {
    margin-bottom: 0;
    font-size: ${({size:e})=>e==="big"?"calc(30vw / 5.09)":"calc(23vw / 5.09)"};
    letter-spacing: -0.6px;
  }
`,k_=x.p`
  ${ee};
  ${fe};
  margin: 0.21vw 0 3.26vw;
  font-size: calc(25vw / 14.4);
  color: ${dr};
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
`,C_=x.img`
  height: ${({size:e})=>e==="big"?"calc(268vw / 14.4)":"calc(154vw / 14.4)"};
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${k}) {
    height: ${({size:e})=>e==="big"?"calc(184vw / 5.08)":"calc(148vw / 5.08)"};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
  }
`,ad=({slide:e,size:t})=>{const n=Ai(),r=()=>{n(`/news/${e.id}`),window.scrollTo({top:0})};return h.jsxs(w_,{size:t,onClick:r,children:[h.jsx(C_,{size:t,src:e.url,alt:e.title}),h.jsxs(x_,{size:t,children:[h.jsx(S_,{children:e.span}),h.jsx(b_,{children:e.date})]}),h.jsx($_,{size:t,children:e.title}),t==="big"&&h.jsx(k_,{size:t,children:e.text})]})},E_=x.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,O_=({slides:e,size:t})=>{const n={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return h.jsx(E_,{children:h.jsx(gl,{...n,children:e.map(r=>h.jsx(ad,{slide:r,size:t},r.id))})})},sd=[{id:"1",date:"01.01.2001",url:"https://picsum.photos/400/300",views:1,rating:5,span:"Corporate News",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mauris eu urna fringilla rhoncus. Integer sit amet facilisis lectus. Integer in ante sed metus lacinia mattis. Aenean eu augue venenatis, fermentum mauris at, hendrerit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu dolor vitae mi venenatis euismod non et enim. Vivamus non lobortis arcu. Nunc semper quam et arcu laoreet, a vulputate tortor bibendum. Nulla facilisi. In pharetra orci vel ipsum scelerisque, vel pellentesque metus facilisis.

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

Praesent efficitur, velit in euismod posuere, purus nisl interdum metus, nec lacinia purus tortor eu urna. Pellentesque vel tortor vel justo scelerisque laoreet. Suspendisse auctor, metus in facilisis tincidunt, dui dui aliquet urna, vel interdum leo sapien sed nulla. Cras et velit sit amet urna sodales ullamcorper nec id tortor. Proin facilisis ligula et est dictum, at elementum felis finibus. Suspendisse id hendrerit dolor. Nullam feugiat leo et arcu mattis, id venenatis arcu fringilla. Nam fringilla enim et libero scelerisque, at consequat ligula tempus. Nulla facilisi. Fusce nec dolor id ante accumsan blandit. Morbi vestibulum dolor libero, sed egestas libero vulputate nec. Ut a justo sit amet nunc facilisis faucibus. Sed sit amet enim venenatis, faucibus elit ut, fermentum erat. Proin non eros sed odio imperdiet vestibulum ac eget tellus. Integer fringilla auctor nulla, eu suscipit nisl rhoncus non.`}],{whiteColor:__,greenColor:T_}=ae,j_=x.div`
  box-sizing: border-box;
  width: 100vw;
  padding-bottom: 5vw;
  min-height: calc(1317vw / 14.4);
  background-image: url(${lg.backgroundL});
  ${Sn};
  border-radius: 1.6vw;

  @media (max-width: ${k}) {
    padding-bottom: 10vw;
    background-image: url(${lg.backgroundL});
    min-height: calc(1441vw / 5.08);
    border-radius: 3.93vw;
  }
`,P_=x.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${k}) {
    flex-direction: column;
  }
`,L_=x.div`
  padding: 5.06vw 3.92vw;
  display: flex;
  flex-direction: row;
  align-items: end;

  @media (max-width: ${k}) {
    padding: 14vw 3.56vw 7.34vw;
  }
`,R_=x(St)`
  visibility: hidden;
  margin-left: 3.54vw;
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${T_};
  font-size: 1.74vw;
  ${fe};
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
    background-image: url(${Cr.playIconGreen});
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
`,I_=x.div`
  width: calc(696vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${k}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`,F_=x.div`
  width: calc(414vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${k}) {
    width: 100%;
  }
`,N_=({news:e})=>{const{title:t,link:n}=e,r=sd,i=rn(),o=r.slice(0,2),a=r.slice(2,5);return h.jsxs(j_,{children:[h.jsxs(L_,{children:[h.jsx(bt,{color:__,children:t}),h.jsx(R_,{color:"transparent",href:n.href,target:"_blank",rel:"noopener noreferrer",children:n.value})]}),h.jsxs(P_,{children:[h.jsx(I_,{children:o.map(s=>h.jsx(ad,{slide:s,size:"big"},s.id))}),i?h.jsx(O_,{slides:a,size:"small"}):h.jsx(F_,{children:a.map(s=>h.jsx(ad,{slide:s,size:"small"},s.id))})]})]})},{deepColor:po,darkGreenColor:ld}=ae,A_=x.section`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 10.9vw 4.28vw;

  @media (max-width: ${k}) {
    flex-direction: column;
    padding: 12vw 8.01vw 19.1vw;
  }
`,z_=x(bt)`
  padding: 3.13vw 0 1.8vw;
  align-self: start;
  text-align: left;

  @media (max-width: ${k}) {
    flex-direction: column;
    padding: 0 0 7.28vw;
  }
`,Ou=x.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 31.94vw;

  @media (max-width: ${k}) {
    min-width: 100%;
  }
`,zg=x.div`
  min-height: 25.69vw;
  display: flex;
  flex-direction: column;
  max-width: 31.94vw;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${k}) {
    min-width: 100%;
  }
`,_u=x.p`
  width: 25vw;
  ${ee};
  font-size: calc(25vw / 14.4);
  ${fe};
  color: ${po};
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
`,Dg=x.img`
  width: auto;
  height: calc(58vw / 14.4);
  @media (max-width: ${k}) {
    height: calc(58vw / 5.08);
    margin: 12vw 0 4.92vw;
  }
`,Mg=x(tr)`
  padding: 1.39vw 0 0.1vw 0;
  color: ${po};
  font-size: calc(30vw / 14.4);
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(30vw / 5.08);
  }
`,Ug=x(St)`
  color: ${ld};
  ${ee};
  ${fe};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-decoration-line: underline;

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.08);
  }
`,D_=({questions:e})=>h.jsxs(A_,{children:[h.jsxs(Ou,{children:[h.jsx(z_,{color:po,children:e.title}),h.jsx(_u,{className:"custom-first",children:e.text})]}),h.jsxs(zg,{children:[h.jsxs(Ou,{children:[h.jsx(Dg,{src:wa.existingClient.src,alt:wa.existingClient.alt}),h.jsx(Mg,{children:e.existing.title}),h.jsx(_u,{color:po,children:e.existing.text})]}),h.jsx(Ug,{href:e.new.href,target:"_blank",rel:"noopener noreferrer",color:ld,children:e.existing.linkName})]}),h.jsxs(zg,{children:[h.jsxs(Ou,{children:[h.jsx(Dg,{src:wa.newClient.src,alt:wa.newClient.alt}),h.jsx(Mg,{children:e.new.title}),h.jsx(_u,{color:po,children:e.new.text})]}),h.jsx(Ug,{href:e.new.href,target:"_blank",rel:"noopener noreferrer",color:ld,children:e.new.linkName})]})]}),{whiteColor:Hg}=ae,M_=x.section`
  box-sizing: border-box;
  width: 100vw;
  min-height: calc(850vw / 14.4);
  padding: 4.28vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${Vc.backgroundL});
  ${Sn};
  //border-radius: 1.6vw;
  border-radius: 0 0 1.6vw 1.6vw;

  @media (max-width: ${k}) {
    padding: 14.17vw 0 12.4vw 0;
    box-sizing: border-box;
    min-height: 138.78vw;
    justify-content: space-between;
    flex-direction: column;
    background-image: url(${Vc.backgroundS});
    //border-radius: 3.93vw;
    border-radius: 0 0 3.93vw 3.93vw;
  }
`,U_=x.div`
  width: 100%;
`,H_=x(Uf)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${k}) {
    margin: 1.76vw 0 0;
  }
`,B_=x.div`
  margin-top: 2.57vw;
  padding: 4.93vw 6.25vw;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vw;
  width: 88.47vw;
  min-height: 37.15vw;
  ${Af};
  background-image: url(${Vc.slide});
  border-radius: 30px;

  @media (max-width: ${k}) {
    display: block;
    padding: 0;
    background-image: none;
  }
`,W_=({id:e,title:t})=>{const{t:n}=Rt(),r=Vt("UseCasesOfOurProducts",n),{text:i,subtitle:o,slides:a,photoSlideArrowRight:s,fees:l,news:u,questions:f}=r,d=rn();return h.jsxs("section",{id:e,children:[h.jsxs(M_,{children:[h.jsxs(U_,{children:[h.jsx(bt,{color:Hg,children:t}),h.jsx(H_,{color:Hg,children:i})]}),h.jsx(B_,{children:d?h.jsx(v_,{subtitle:o,slides:a,photoSlideArrowRight:s}):a.map(c=>h.jsx(Vw,{subtitle:o,slide:c},c.id))})]}),h.jsx(o_,{fees:l}),h.jsx(N_,{news:u}),h.jsx(D_,{questions:f})]})},V_=({mainScreenRef:e,sections:t})=>h.jsxs(h.Fragment,{children:[h.jsx(M2,{ref:e}),t.map(n=>n.id===rw?h.jsx(lC,{id:n.id,title:n.title},n.id):n.id===iw?h.jsx(GO,{id:n.id,title:n.title},n.id):n.id===ow?h.jsx(W_,{id:n.id,title:n.title},n.id):null)]}),{ratesFeesColor:q_,navigateLinkColor:G_}=ae,K_=x.div`
  padding-left: 5.4vw;
  background-color: ${q_};
  display: flex;
  flex-direction: row;
  align-items: start;

  @media (max-width: ${k}) {
    padding-left: 6.4vw;
  }
`,Q_=x(it)`
  background-color: transparent;
`,Tu=x.p`
  ${ee};
  margin-right: 0.2vw;
  ${fe};
  color: ${G_};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 2;

  @media (max-width: ${k}) {
    margin-right: 1vw;
    font-size: calc(15vw / 5.09);
  }
`,Xf=({navigation:e})=>{const{button:t,separator:n,location:r}=e,[i,o]=E.useState(!1),a=Ai(),s=()=>{o(!0),a("/")};return h.jsxs(K_,{children:[h.jsx(Q_,{type:"button",disabled:i,onClick:s,children:h.jsx(Tu,{children:t})}),h.jsx(Tu,{children:n}),h.jsx(Tu,{children:r})]})},{ratesFeesColor:Y_,darkGreenColor:ud,blackColor:X_,whiteColor:J_}=ae,Z_=x.div`
  margin: 0 6.25vw 4.58vw 3.23vw;
  display: flex;
  flex-direction: column;

  @media (max-width: ${k}) {
    margin: 0 6.25vw 4.58vw 4.5vw;
  }
`,eT=x.div`
  padding: 2.22vw 0 4.86vw 2.78vw;
  border-top: 1px solid ${ud};
  border-left: 1px solid ${ud};
`,tT=x.div`
  display: flex;
  justify-content: space-between;
`,nT=x.p`
  width: calc(270vw / 14.4);
  ${Df};
  ${fe};

  @media (max-width: ${k}) {
    min-width: calc(210vw / 5.09);
  }
`,rT=x.span`
  margin-left: 1vw;
  text-align: left;
  min-width: calc(90vw / 14.4);
  ${Df};
  ${fe};

  @media (max-width: ${k}) {
    min-width: calc(70vw / 5.09);
  }
`,iT=x.span`
  text-align: center;
  min-width: calc(180vw / 14.4);
  ${Df}
  ${It};

  @media (max-width: ${k}) {
    min-width: calc(140vw / 5.09);
  }
`,oT=x.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  &:nth-child(odd) {
    background-color: ${Y_};
  }
`,aT=x(tr)`
  margin: 0 0 1.18vw 2.7vw;
  color: ${ud};
  ${It};
  text-align: left;
  font-size: calc(30vw / 14.4);
  font-style: normal;
  font-weight: 400;

  @media (max-width: ${k}) {
    font-size: calc(30vw / 5.09);
  }
`,sT=x(St)`
  margin-top: 2.26vw;
  display: inline-block;
  ${It};
  padding: 0.8vw 5.5vw 0.8vw 2.5vw;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  width: fit-content;
  color: ${J_};
  text-align: center;
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  background-color: ${X_};

  &:after {
    content: "";
    position: absolute;
    width: calc(19vw / 14.4);
    height: calc(15.5vw / 14.4);
    background-image: url(${Cr.playIconWhite});
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
      background-image: url(${Cr.playIconWhite});
      background-repeat: no-repeat;
      background-size: contain;
      right: 1vw;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`,Bg=({rates:e})=>h.jsxs(Z_,{children:[h.jsx(aT,{children:e.subtitle}),h.jsxs(eT,{children:[Object.keys(e).map(t=>{const n=e[t];return typeof n=="string"?null:h.jsxs(oT,{children:[h.jsx(nT,{children:n.text}),h.jsx("div",{children:n.percent&&n.percent.map((r,i)=>h.jsxs(tT,{children:[h.jsx(rT,{children:r}),n.span&&n.span[i]&&h.jsx(iT,{children:n.span[i]})]},i))})]},t)}),h.jsx(sT,{color:"transparent",href:e.linkHref,target:"_blank",rel:"noopener noreferrer",children:e.linkLabel})]})]}),{lightBlackColor:lT}=ae,uT=x.main`
  width: 100vw;
`,cT=x.div`
  display: flex;
  flex-direction: column;
`,dT=x.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,fT=x(bt)`
  margin: 3.33vw 5.4vw 4.51vw;
  text-align: start;

  @media (max-width: ${k}) {
    margin: 3.33vw 6.4vw 4.51vw;
  }
`,pT=E.forwardRef((e,t)=>{const{t:n}=Rt(),r=Vt("PaymentFees",n),{title:i,individual:o,enterprise:a,navigation:s}=r;return h.jsxs(uT,{ref:t,children:[h.jsx(Xf,{navigation:s}),h.jsxs(cT,{children:[h.jsx(fT,{color:lT,children:i}),h.jsxs(dT,{children:[h.jsx(Bg,{rates:o}),h.jsx(Bg,{rates:a})]})]})]})}),hT=D$`
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
`,{darkGreenColor:gT,lightBlackColor:mT,notFoundColor:vT,headerColor:yT,whiteColor:wT}=ae,xT=x.main`
  width: 100vw;
`,ST=x.div`
  padding: 3.5vw 0 7.15vw;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,bT=x.h1`
  ${ee};
  ${kr};
  color: ${gT};
  text-align: center;
  font-size: calc(150vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -3px;

  @media (max-width: ${k}) {
    font-size: calc(70vw / 5.09);
  }
`,$T=x(bt)`
  font-size: calc(70vw / 14.4);
  letter-spacing: -1.4px;
  text-transform: capitalize;

  @media (max-width: ${k}) {
    font-size: calc(35vw / 5.09);
  }
`,kT=x.img`
  width: 100%;
  height: auto;
`,CT=x.p`
  ${ee};
  padding-bottom: 2.99vw;
  ${It};
  color: ${vT};
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
`,ET=x(it)`
  ${ee};
  padding: 0.6vw 8.5vw;
  ${It};
  background-color: ${yT};
  color: ${wT};
  text-align: center;
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.6px;

  @media (max-width: ${k}) {
    font-size: calc(20vw / 5.09);
  }
`,Gw=E.forwardRef((e,t)=>{const n=Ai(),[r,i]=E.useState(!1),{t:o}=Rt(),a=Vt("NotFound",o),{navigation:s,title:l,subtitle:u,image:f,text:d,button:c}=a,y=()=>{i(!0),n("/")};return h.jsxs(xT,{ref:t,children:[h.jsx(Xf,{navigation:s}),h.jsxs(ST,{children:[h.jsx(bT,{children:l}),h.jsx($T,{color:mT,children:u}),h.jsx(kT,{src:f.src,alt:f.alt}),h.jsx(CT,{children:d}),h.jsx(ET,{type:"button",disabled:r,onClick:y,children:c})]})]})}),OT={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Ts{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||OT,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new Ts(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Ts(this.logger,t)}}var Jt=new Ts;class ml{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]=this.observers[r]||[],this.observers[r].push(n)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(r=>r!==n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[t]&&[].concat(this.observers[t]).forEach(a=>{a(...r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(a=>{a.apply(a,[t,...r])})}}function Ki(){let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n}function Wg(e){return e==null?"":""+e}function _T(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}function Jf(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(/###/g,"."):a}function i(){return!e||typeof e=="string"}const o=typeof t!="string"?[].concat(t):t.split(".");for(;o.length>1;){if(i())return{};const a=r(o.shift());!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return i()?{}:{obj:e,k:r(o.shift())}}function Vg(e,t,n){const{obj:r,k:i}=Jf(e,t,Object);r[i]=n}function TT(e,t,n,r){const{obj:i,k:o}=Jf(e,t,Object);i[o]=i[o]||[],r&&(i[o]=i[o].concat(n)),r||i[o].push(n)}function js(e,t){const{obj:n,k:r}=Jf(e,t);if(n)return n[r]}function jT(e,t,n){const r=js(e,n);return r!==void 0?r:js(t,n)}function Kw(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):Kw(e[r],t[r],n):e[r]=t[r]);return e}function Ur(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var PT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function LT(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>PT[t]):e}const RT=[" ",",","?","!",";"];function IT(e,t,n){t=t||"",n=n||"";const r=RT.filter(a=>t.indexOf(a)<0&&n.indexOf(a)<0);if(r.length===0)return!0;const i=new RegExp(`(${r.map(a=>a==="?"?"\\?":a).join("|")})`);let o=!i.test(e);if(!o){const a=e.indexOf(n);a>0&&!i.test(e.substring(0,a))&&(o=!0)}return o}function Ps(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let i=e;for(let o=0;o<r.length;++o){if(!i||typeof i[r[o]]=="string"&&o+1<r.length)return;if(i[r[o]]===void 0){let a=2,s=r.slice(o,o+a).join(n),l=i[s];for(;l===void 0&&r.length>o+a;)a++,s=r.slice(o,o+a).join(n),l=i[s];if(l===void 0)return;if(l===null)return null;if(t.endsWith(s)){if(typeof l=="string")return l;if(s&&typeof l[s]=="string")return l[s]}const u=r.slice(o+a).join(n);return u?Ps(l,u,n):void 0}i=i[r[o]]}return i}function Ls(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class qg extends ml{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,a=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let s=[t,n];r&&typeof r!="string"&&(s=s.concat(r)),r&&typeof r=="string"&&(s=s.concat(o?r.split(o):r)),t.indexOf(".")>-1&&(s=t.split("."));const l=js(this.data,s);return l||!a||typeof r!="string"?l:Ps(this.data&&this.data[t]&&this.data[t][n],r,o)}addResource(t,n,r,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let s=[t,n];r&&(s=s.concat(a?r.split(a):r)),t.indexOf(".")>-1&&(s=t.split("."),i=n,n=s[1]),this.addNamespaces(n),Vg(this.data,s,i),o.silent||this.emit("added",t,n,r,i)}addResources(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in r)(typeof r[o]=="string"||Object.prototype.toString.apply(r[o])==="[object Array]")&&this.addResource(t,n,o,r[o],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},s=[t,n];t.indexOf(".")>-1&&(s=t.split("."),i=r,r=n,n=s[1]),this.addNamespaces(n);let l=js(this.data,s)||{};i?Kw(l,r,o):l={...l,...r},Vg(this.data,s,l),a.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var Qw={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(o=>{this.processors[o]&&(t=this.processors[o].process(t,n,r,i))}),t}};const Gg={};class Rs extends ml{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),_T(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Jt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const a=r&&t.indexOf(r)>-1,s=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!IT(t,r,i);if(a&&!s){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:o};const u=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(u[0])>-1)&&(o=u.shift()),t=u.join(i)}return typeof o=="string"&&(o=[o]),{key:t,namespaces:o}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:a,namespaces:s}=this.extractFromKey(t[t.length-1],n),l=s[s.length-1],u=n.lng||this.language,f=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(f){const S=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${S}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l}:`${l}${S}${a}`}return i?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l}:a}const d=this.resolve(t,n);let c=d&&d.res;const y=d&&d.usedKey||a,v=d&&d.exactUsedKey||a,w=Object.prototype.toString.apply(c),b=["[object Number]","[object Function]","[object RegExp]"],g=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,p=!this.i18nFormat||this.i18nFormat.handleAsObject;if(p&&c&&(typeof c!="string"&&typeof c!="boolean"&&typeof c!="number")&&b.indexOf(w)<0&&!(typeof g=="string"&&w==="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const S=this.options.returnedObjectHandler?this.options.returnedObjectHandler(y,c,{...n,ns:s}):`key '${a} (${this.language})' returned an object instead of string.`;return i?(d.res=S,d):S}if(o){const S=w==="[object Array]",O=S?[]:{},$=S?v:y;for(const C in c)if(Object.prototype.hasOwnProperty.call(c,C)){const _=`${$}${o}${C}`;O[C]=this.translate(_,{...n,joinArrays:!1,ns:s}),O[C]===_&&(O[C]=c[C])}c=O}}else if(p&&typeof g=="string"&&w==="[object Array]")c=c.join(g),c&&(c=this.extendTranslation(c,t,n,r));else{let S=!1,O=!1;const $=n.count!==void 0&&typeof n.count!="string",C=Rs.hasDefaultValue(n),_=$?this.pluralResolver.getSuffix(u,n.count,n):"",P=n.ordinal&&$?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",L=n[`defaultValue${_}`]||n[`defaultValue${P}`]||n.defaultValue;!this.isValidLookup(c)&&C&&(S=!0,c=L),this.isValidLookup(c)||(O=!0,c=a);const U=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&O?void 0:c,A=C&&L!==c&&this.options.updateMissing;if(O||S||A){if(this.logger.log(A?"updateKey":"missingKey",u,l,a,A?L:c),o){const Y=this.resolve(a,{...n,keySeparator:!1});Y&&Y.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let T=[];const R=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&R&&R[0])for(let Y=0;Y<R.length;Y++)T.push(R[Y]);else this.options.saveMissingTo==="all"?T=this.languageUtils.toResolveHierarchy(n.lng||this.language):T.push(n.lng||this.language);const W=(Y,I,N)=>{const V=C&&N!==c?N:U;this.options.missingKeyHandler?this.options.missingKeyHandler(Y,l,I,V,A,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(Y,l,I,V,A,n),this.emit("missingKey",Y,l,I,c)};this.options.saveMissing&&(this.options.saveMissingPlurals&&$?T.forEach(Y=>{this.pluralResolver.getSuffixes(Y,n).forEach(I=>{W([Y],a+I,n[`defaultValue${I}`]||L)})}):W(T,a,L))}c=this.extendTranslation(c,t,n,d,r),O&&c===a&&this.options.appendNamespaceToMissingKey&&(c=`${l}:${a}`),(O||S)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?c=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,S?c:void 0):c=this.options.parseMissingKeyHandler(c))}return i?(d.res=c,d):c}extendTranslation(t,n,r,i,o){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let f;if(u){const c=t.match(this.interpolator.nestingRegexp);f=c&&c.length}let d=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,r.lng||this.language,r),u){const c=t.match(this.interpolator.nestingRegexp),y=c&&c.length;f<y&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var c=arguments.length,y=new Array(c),v=0;v<c;v++)y[v]=arguments[v];return o&&o[0]===y[0]&&!r.context?(a.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`),null):a.translate(...y,n)},r)),r.interpolation&&this.interpolator.reset()}const s=r.postProcess||this.options.postProcess,l=typeof s=="string"?[s]:s;return t!=null&&l&&l.length&&r.applyPostProcessor!==!1&&(t=Qw.handle(l,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:i,...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,o,a,s;return typeof t=="string"&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(l,n),f=u.key;i=f;let d=u.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const c=n.count!==void 0&&typeof n.count!="string",y=c&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),v=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",w=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach(b=>{this.isValidLookup(r)||(s=b,!Gg[`${w[0]}-${b}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&(Gg[`${w[0]}-${b}`]=!0,this.logger.warn(`key "${i}" for languages "${w.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(g=>{if(this.isValidLookup(r))return;a=g;const p=[f];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(p,f,g,b,n);else{let S;c&&(S=this.pluralResolver.getSuffix(g,n.count,n));const O=`${this.options.pluralSeparator}zero`,$=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(c&&(p.push(f+S),n.ordinal&&S.indexOf($)===0&&p.push(f+S.replace($,this.options.pluralSeparator)),y&&p.push(f+O)),v){const C=`${f}${this.options.contextSeparator}${n.context}`;p.push(C),c&&(p.push(C+S),n.ordinal&&S.indexOf($)===0&&p.push(C+S.replace($,this.options.pluralSeparator)),y&&p.push(C+O))}}let m;for(;m=p.pop();)this.isValidLookup(r)||(o=m,r=this.getResource(g,b,m,n))}))})}),{res:r,usedKey:i,exactUsedKey:o,usedLng:a,usedNS:s}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function ju(e){return e.charAt(0).toUpperCase()+e.slice(1)}class Kg{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Jt.create("languageUtils")}getScriptPartFromCode(t){if(t=Ls(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=Ls(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=ju(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=ju(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=ju(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&o.indexOf(i)===0)return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],o=a=>{a&&(this.isSupportedCode(a)?i.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):typeof t=="string"&&o(this.formatLanguageCode(t)),r.forEach(a=>{i.indexOf(a)<0&&o(this.formatLanguageCode(a))}),i}}let FT=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],NT={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}};const AT=["v1","v2","v3"],zT=["v4"],Qg={zero:0,one:1,two:2,few:3,many:4,other:5};function DT(){const e={};return FT.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:NT[t.fc]}})}),e}class MT{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=Jt.create("pluralResolver"),(!this.options.compatibilityJSON||zT.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=DT()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Ls(t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,o)=>Qg[i]-Qg[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?o():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!AT.includes(this.options.compatibilityJSON)}}function Yg(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=jT(e,t,n);return!o&&i&&typeof n=="string"&&(o=Ps(e,n,r),o===void 0&&(o=Ps(t,n,r))),o}class UT{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Jt.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=n.escape!==void 0?n.escape:LT,this.escapeValue=n.escapeValue!==void 0?n.escapeValue:!0,this.useRawValueToEscape=n.useRawValueToEscape!==void 0?n.useRawValueToEscape:!1,this.prefix=n.prefix?Ur(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?Ur(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?Ur(n.nestingPrefix):n.nestingPrefixEscaped||Ur("$t("),this.nestingSuffix=n.nestingSuffix?Ur(n.nestingSuffix):n.nestingSuffixEscaped||Ur(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=n.alwaysFormat!==void 0?n.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const r=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(r,"g")}interpolate(t,n,r,i){let o,a,s;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(v){return v.replace(/\$/g,"$$$$")}const f=v=>{if(v.indexOf(this.formatSeparator)<0){const p=Yg(n,l,v,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(p,void 0,r,{...i,...n,interpolationkey:v}):p}const w=v.split(this.formatSeparator),b=w.shift().trim(),g=w.join(this.formatSeparator).trim();return this.format(Yg(n,l,b,this.options.keySeparator,this.options.ignoreJSONStructure),g,r,{...i,...n,interpolationkey:b})};this.resetRegExp();const d=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,c=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:v=>u(v)},{regex:this.regexp,safeValue:v=>this.escapeValue?u(this.escape(v)):u(v)}].forEach(v=>{for(s=0;o=v.regex.exec(t);){const w=o[1].trim();if(a=f(w),a===void 0)if(typeof d=="function"){const g=d(t,o,i);a=typeof g=="string"?g:""}else if(i&&Object.prototype.hasOwnProperty.call(i,w))a="";else if(c){a=o[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${t}`),a="";else typeof a!="string"&&!this.useRawValueToEscape&&(a=Wg(a));const b=v.safeValue(a);if(t=t.replace(o[0],b),c?(v.regex.lastIndex+=a.length,v.regex.lastIndex-=o[0].length):v.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,a;function s(l,u){const f=this.nestingOptionsSeparator;if(l.indexOf(f)<0)return l;const d=l.split(new RegExp(`${f}[ ]*{`));let c=`{${d[1]}`;l=d[0],c=this.interpolate(c,a);const y=c.match(/'/g),v=c.match(/"/g);(y&&y.length%2===0&&!v||v.length%2!==0)&&(c=c.replace(/'/g,'"'));try{a=JSON.parse(c),u&&(a={...u,...a})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,w),`${l}${f}${c}`}return delete a.defaultValue,l}for(;i=this.nestingRegexp.exec(t);){let l=[];a={...r},a=a.replace&&typeof a.replace!="string"?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let u=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const f=i[1].split(this.formatSeparator).map(d=>d.trim());i[1]=f.shift(),l=f,u=!0}if(o=n(s.call(this,i[1].trim(),a),a),o&&i[0]===t&&typeof o!="string")return o;typeof o!="string"&&(o=Wg(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),u&&(o=l.reduce((f,d)=>this.format(f,d,r.lng,{...r,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}function HT(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(a=>{if(!a)return;const[s,...l]=a.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,"");n[s.trim()]||(n[s.trim()]=u),u==="false"&&(n[s.trim()]=!1),u==="true"&&(n[s.trim()]=!0),isNaN(u)||(n[s.trim()]=parseInt(u,10))})}return{formatName:t,formatOptions:n}}function Hr(e){const t={};return function(r,i,o){const a=i+JSON.stringify(o);let s=t[a];return s||(s=e(Ls(i),o),t[a]=s),s(r)}}class BT{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Jt.create("formatter"),this.options=t,this.formats={number:Hr((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return o=>i.format(o)}),currency:Hr((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return o=>i.format(o)}),datetime:Hr((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return o=>i.format(o)}),relativetime:Hr((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return o=>i.format(o,r.range||"day")}),list:Hr((n,r)=>{const i=new Intl.ListFormat(n,{...r});return o=>i.format(o)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=Hr(n)}format(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((s,l)=>{const{formatName:u,formatOptions:f}=HT(l);if(this.formats[u]){let d=s;try{const c=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},y=c.locale||c.lng||i.locale||i.lng||r;d=this.formats[u](s,y,{...f,...i,...c})}catch(c){this.logger.warn(c)}return d}else this.logger.warn(`there was no format function for ${u}`);return s},t)}}function WT(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class VT extends ml{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=Jt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(t,n,r,i){const o={},a={},s={},l={};return t.forEach(u=>{let f=!0;n.forEach(d=>{const c=`${u}|${d}`;!r.reload&&this.store.hasResourceBundle(u,d)?this.state[c]=2:this.state[c]<0||(this.state[c]===1?a[c]===void 0&&(a[c]=!0):(this.state[c]=1,f=!1,a[c]===void 0&&(a[c]=!0),o[c]===void 0&&(o[c]=!0),l[d]===void 0&&(l[d]=!0)))}),f||(s[u]=!0)}),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(l)}}loaded(t,n,r){const i=t.split("|"),o=i[0],a=i[1];n&&this.emit("failedLoading",o,a,n),r&&this.store.addResourceBundle(o,a,r),this.state[t]=n?-1:2;const s={};this.queue.forEach(l=>{TT(l.loaded,[o],a),WT(l,t),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{s[u]||(s[u]={});const f=l.loaded[u];f.length&&f.forEach(d=>{s[u][d]===void 0&&(s[u][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(l=>!l.done)}read(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:o,callback:a});return}this.readingCalls++;const s=(u,f)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(u&&f&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,o*2,a)},o);return}a(u,f)},l=this.backend[r].bind(this.backend);if(l.length===2){try{const u=l(t,n);u&&typeof u.then=="function"?u.then(f=>s(null,f)).catch(s):s(null,u)}catch(u){s(u)}return}return l(t,n,s)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const o=this.queueLoad(t,n,r,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(a=>{this.loadOne(a)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),i=r[0],o=r[1];this.read(i,o,"read",void 0,void 0,(a,s)=>{a&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,a),!a&&s&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,s),this.loaded(t,a,s)})}saveMissing(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const l={...a,isUpdate:o},u=this.backend.create.bind(this.backend);if(u.length<6)try{let f;u.length===5?f=u(t,n,r,i,l):f=u(t,n,r,i),f&&typeof f.then=="function"?f.then(d=>s(null,d)).catch(s):s(null,f)}catch(f){s(f)}else u(t,n,r,i,s,l)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}function Xg(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(i=>{n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:(e,t,n,r)=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Jg(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Sa(){}function qT(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class zo extends ml{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Jg(t),this.services={},this.logger=Jt,this.modules={external:[]},qT(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Xg();this.options={...i,...this.options,...Jg(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function o(f){return f?typeof f=="function"?new f:f:null}if(!this.options.isClone){this.modules.logger?Jt.init(o(this.modules.logger),this.options):Jt.init(null,this.options);let f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=BT);const d=new Kg(this.options);this.store=new qg(this.options.resources,this.options);const c=this.services;c.logger=Jt,c.resourceStore=this.store,c.languageUtils=d,c.pluralResolver=new MT(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(c.formatter=o(f),c.formatter.init(c,this.options),this.options.interpolation.format=c.formatter.format.bind(c.formatter)),c.interpolator=new UT(this.options),c.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},c.backendConnector=new VT(o(this.modules.backend),c.resourceStore,c,this.options),c.backendConnector.on("*",function(y){for(var v=arguments.length,w=new Array(v>1?v-1:0),b=1;b<v;b++)w[b-1]=arguments[b];t.emit(y,...w)}),this.modules.languageDetector&&(c.languageDetector=o(this.modules.languageDetector),c.languageDetector.init&&c.languageDetector.init(c,this.options.detection,this.options)),this.modules.i18nFormat&&(c.i18nFormat=o(this.modules.i18nFormat),c.i18nFormat.init&&c.i18nFormat.init(this)),this.translator=new Rs(this.services,this.options),this.translator.on("*",function(y){for(var v=arguments.length,w=new Array(v>1?v-1:0),b=1;b<v;b++)w[b-1]=arguments[b];t.emit(y,...w)}),this.modules.external.forEach(y=>{y.init&&y.init(this)})}if(this.format=this.options.interpolation.format,r||(r=Sa),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const f=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);f.length>0&&f[0]!=="dev"&&(this.options.lng=f[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(f=>{this[f]=function(){return t.store[f](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(f=>{this[f]=function(){return t.store[f](...arguments),t}});const l=Ki(),u=()=>{const f=(d,c)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(c),r(d,c)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return f(null,this.t.bind(this));this.changeLanguage(this.options.lng,f)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),l}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Sa;const i=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode")return r();const o=[],a=s=>{if(!s)return;this.services.languageUtils.toResolveHierarchy(s).forEach(u=>{o.indexOf(u)<0&&o.push(u)})};i?a(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>a(l)),this.options.preload&&this.options.preload.forEach(s=>a(s)),this.services.backendConnector.load(o,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(s)})}else r(null)}reloadResources(t,n,r){const i=Ki();return t||(t=this.languages),n||(n=this.options.ns),r||(r=Sa),this.services.backendConnector.reload(t,n,o=>{i.resolve(),r(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Qw.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const i=Ki();this.emit("languageChanging",t);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,u)=>{u?(o(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(l,function(){return r.t(...arguments)})},s=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const u=typeof l=="string"?l:this.services.languageUtils.getBestMatchFromCodes(l);u&&(this.language||o(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,f=>{a(f,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(t),i}getFixedT(t,n,r){var i=this;const o=function(a,s){let l;if(typeof s!="object"){for(var u=arguments.length,f=new Array(u>2?u-2:0),d=2;d<u;d++)f[d-2]=arguments[d];l=i.options.overloadTranslationOptionHandler([a,s].concat(f))}else l={...s};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix=l.keyPrefix||r||o.keyPrefix;const c=i.options.keySeparator||".";let y;return l.keyPrefix&&Array.isArray(a)?y=a.map(v=>`${l.keyPrefix}${c}${v}`):y=l.keyPrefix?`${l.keyPrefix}${c}${a}`:a,i.t(y,l)};return typeof t=="string"?o.lng=t:o.lngs=t,o.ns=n,o.keyPrefix=r,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const u=this.services.backendConnector.state[`${s}|${l}`];return u===-1||u===2};if(n.precheck){const s=n.precheck(this,a);if(s!==void 0)return s}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(r,t)&&(!i||a(o,t)))}loadNamespaces(t,n){const r=Ki();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=Ki();typeof t=="string"&&(t=[t]);const i=this.options.preload||[],o=t.filter(a=>i.indexOf(a)<0);return o.length?(this.options.preload=i.concat(o),this.loadResources(a=>{r.resolve(),n&&n(a)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new Kg(Xg());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new zo(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Sa;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new zo(i);return(t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(s=>{o[s]=this[s]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},r&&(o.store=new qg(this.store.data,i),o.services.resourceStore=o.store),o.translator=new Rs(o.services,i),o.translator.on("*",function(s){for(var l=arguments.length,u=new Array(l>1?l-1:0),f=1;f<l;f++)u[f-1]=arguments[f];o.emit(s,...u)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const De=zo.createInstance();De.createInstance=zo.createInstance;De.createInstance;De.dir;De.init;De.loadResources;De.reloadResources;De.use;De.changeLanguage;De.getFixedT;De.t;De.exists;De.setDefaultNamespace;De.hasLoadedNamespace;De.loadNamespaces;De.loadLanguages;function cd(e){"@babel/helpers - typeof";return cd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cd(e)}var Yw=[],GT=Yw.forEach,KT=Yw.slice;function dd(e){return GT.call(KT.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e}function Xw(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":cd(XMLHttpRequest))==="object"}function QT(e){return!!e&&typeof e.then=="function"}function YT(e){return QT(e)?e:Promise.resolve(e)}function XT(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var fd={exports:{}},ba={exports:{}},Zg;function JT(){return Zg||(Zg=1,function(e,t){var n=typeof self<"u"?self:Fn,r=function(){function o(){this.fetch=!1,this.DOMException=n.DOMException}return o.prototype=n,new o}();(function(o){(function(a){var s={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function l(T){return T&&DataView.prototype.isPrototypeOf(T)}if(s.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(T){return T&&u.indexOf(Object.prototype.toString.call(T))>-1};function d(T){if(typeof T!="string"&&(T=String(T)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(T))throw new TypeError("Invalid character in header field name");return T.toLowerCase()}function c(T){return typeof T!="string"&&(T=String(T)),T}function y(T){var R={next:function(){var W=T.shift();return{done:W===void 0,value:W}}};return s.iterable&&(R[Symbol.iterator]=function(){return R}),R}function v(T){this.map={},T instanceof v?T.forEach(function(R,W){this.append(W,R)},this):Array.isArray(T)?T.forEach(function(R){this.append(R[0],R[1])},this):T&&Object.getOwnPropertyNames(T).forEach(function(R){this.append(R,T[R])},this)}v.prototype.append=function(T,R){T=d(T),R=c(R);var W=this.map[T];this.map[T]=W?W+", "+R:R},v.prototype.delete=function(T){delete this.map[d(T)]},v.prototype.get=function(T){return T=d(T),this.has(T)?this.map[T]:null},v.prototype.has=function(T){return this.map.hasOwnProperty(d(T))},v.prototype.set=function(T,R){this.map[d(T)]=c(R)},v.prototype.forEach=function(T,R){for(var W in this.map)this.map.hasOwnProperty(W)&&T.call(R,this.map[W],W,this)},v.prototype.keys=function(){var T=[];return this.forEach(function(R,W){T.push(W)}),y(T)},v.prototype.values=function(){var T=[];return this.forEach(function(R){T.push(R)}),y(T)},v.prototype.entries=function(){var T=[];return this.forEach(function(R,W){T.push([W,R])}),y(T)},s.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function w(T){if(T.bodyUsed)return Promise.reject(new TypeError("Already read"));T.bodyUsed=!0}function b(T){return new Promise(function(R,W){T.onload=function(){R(T.result)},T.onerror=function(){W(T.error)}})}function g(T){var R=new FileReader,W=b(R);return R.readAsArrayBuffer(T),W}function p(T){var R=new FileReader,W=b(R);return R.readAsText(T),W}function m(T){for(var R=new Uint8Array(T),W=new Array(R.length),Y=0;Y<R.length;Y++)W[Y]=String.fromCharCode(R[Y]);return W.join("")}function S(T){if(T.slice)return T.slice(0);var R=new Uint8Array(T.byteLength);return R.set(new Uint8Array(T)),R.buffer}function O(){return this.bodyUsed=!1,this._initBody=function(T){this._bodyInit=T,T?typeof T=="string"?this._bodyText=T:s.blob&&Blob.prototype.isPrototypeOf(T)?this._bodyBlob=T:s.formData&&FormData.prototype.isPrototypeOf(T)?this._bodyFormData=T:s.searchParams&&URLSearchParams.prototype.isPrototypeOf(T)?this._bodyText=T.toString():s.arrayBuffer&&s.blob&&l(T)?(this._bodyArrayBuffer=S(T.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(T)||f(T))?this._bodyArrayBuffer=S(T):this._bodyText=T=Object.prototype.toString.call(T):this._bodyText="",this.headers.get("content-type")||(typeof T=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s.searchParams&&URLSearchParams.prototype.isPrototypeOf(T)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s.blob&&(this.blob=function(){var T=w(this);if(T)return T;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?w(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var T=w(this);if(T)return T;if(this._bodyBlob)return p(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(m(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s.formData&&(this.formData=function(){return this.text().then(P)}),this.json=function(){return this.text().then(JSON.parse)},this}var $=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function C(T){var R=T.toUpperCase();return $.indexOf(R)>-1?R:T}function _(T,R){R=R||{};var W=R.body;if(T instanceof _){if(T.bodyUsed)throw new TypeError("Already read");this.url=T.url,this.credentials=T.credentials,R.headers||(this.headers=new v(T.headers)),this.method=T.method,this.mode=T.mode,this.signal=T.signal,!W&&T._bodyInit!=null&&(W=T._bodyInit,T.bodyUsed=!0)}else this.url=String(T);if(this.credentials=R.credentials||this.credentials||"same-origin",(R.headers||!this.headers)&&(this.headers=new v(R.headers)),this.method=C(R.method||this.method||"GET"),this.mode=R.mode||this.mode||null,this.signal=R.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&W)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(W)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})};function P(T){var R=new FormData;return T.trim().split("&").forEach(function(W){if(W){var Y=W.split("="),I=Y.shift().replace(/\+/g," "),N=Y.join("=").replace(/\+/g," ");R.append(decodeURIComponent(I),decodeURIComponent(N))}}),R}function L(T){var R=new v,W=T.replace(/\r?\n[\t ]+/g," ");return W.split(/\r?\n/).forEach(function(Y){var I=Y.split(":"),N=I.shift().trim();if(N){var V=I.join(":").trim();R.append(N,V)}}),R}O.call(_.prototype);function D(T,R){R||(R={}),this.type="default",this.status=R.status===void 0?200:R.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in R?R.statusText:"OK",this.headers=new v(R.headers),this.url=R.url||"",this._initBody(T)}O.call(D.prototype),D.prototype.clone=function(){return new D(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},D.error=function(){var T=new D(null,{status:0,statusText:""});return T.type="error",T};var U=[301,302,303,307,308];D.redirect=function(T,R){if(U.indexOf(R)===-1)throw new RangeError("Invalid status code");return new D(null,{status:R,headers:{location:T}})},a.DOMException=o.DOMException;try{new a.DOMException}catch{a.DOMException=function(R,W){this.message=R,this.name=W;var Y=Error(R);this.stack=Y.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function A(T,R){return new Promise(function(W,Y){var I=new _(T,R);if(I.signal&&I.signal.aborted)return Y(new a.DOMException("Aborted","AbortError"));var N=new XMLHttpRequest;function V(){N.abort()}N.onload=function(){var J={status:N.status,statusText:N.statusText,headers:L(N.getAllResponseHeaders()||"")};J.url="responseURL"in N?N.responseURL:J.headers.get("X-Request-URL");var Q="response"in N?N.response:N.responseText;W(new D(Q,J))},N.onerror=function(){Y(new TypeError("Network request failed"))},N.ontimeout=function(){Y(new TypeError("Network request failed"))},N.onabort=function(){Y(new a.DOMException("Aborted","AbortError"))},N.open(I.method,I.url,!0),I.credentials==="include"?N.withCredentials=!0:I.credentials==="omit"&&(N.withCredentials=!1),"responseType"in N&&s.blob&&(N.responseType="blob"),I.headers.forEach(function(J,Q){N.setRequestHeader(Q,J)}),I.signal&&(I.signal.addEventListener("abort",V),N.onreadystatechange=function(){N.readyState===4&&I.signal.removeEventListener("abort",V)}),N.send(typeof I._bodyInit>"u"?null:I._bodyInit)})}return A.polyfill=!0,o.fetch||(o.fetch=A,o.Headers=v,o.Request=_,o.Response=D),a.Headers=v,a.Request=_,a.Response=D,a.fetch=A,Object.defineProperty(a,"__esModule",{value:!0}),a})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=r;t=i.fetch,t.default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t}(ba,ba.exports)),ba.exports}(function(e,t){var n;if(typeof fetch=="function"&&(typeof Fn<"u"&&Fn.fetch?n=Fn.fetch:typeof window<"u"&&window.fetch?n=window.fetch:n=fetch),typeof XT<"u"&&(typeof window>"u"||typeof window.document>"u")){var r=n||JT();r.default&&(r=r.default),t.default=r,e.exports=t.default}})(fd,fd.exports);var Jw=fd.exports;const Zw=_r(Jw),em=rv({__proto__:null,default:Zw},[Jw]);function Is(e){"@babel/helpers - typeof";return Is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Is(e)}var gn;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?gn=global.fetch:typeof window<"u"&&window.fetch?gn=window.fetch:gn=fetch);var Do;Xw()&&(typeof global<"u"&&global.XMLHttpRequest?Do=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Do=window.XMLHttpRequest));var Fs;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Fs=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Fs=window.ActiveXObject));!gn&&em&&!Do&&!Fs&&(gn=Zw||em);typeof gn!="function"&&(gn=void 0);var pd=function(t,n){if(n&&Is(n)==="object"){var r="";for(var i in n)r+="&"+encodeURIComponent(i)+"="+encodeURIComponent(n[i]);if(!r)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+r.slice(1)}return t},tm=function(t,n,r){gn(t,n).then(function(i){if(!i.ok)return r(i.statusText||"Error",{status:i.status});i.text().then(function(o){r(null,{status:i.status,data:o})}).catch(r)}).catch(r)},nm=!1,ZT=function(t,n,r,i){t.queryStringParams&&(n=pd(n,t.queryStringParams));var o=dd({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);r&&(o["Content-Type"]="application/json");var a=typeof t.requestOptions=="function"?t.requestOptions(r):t.requestOptions,s=dd({method:r?"POST":"GET",body:r?t.stringify(r):void 0,headers:o},nm?{}:a);try{tm(n,s,i)}catch(l){if(!a||Object.keys(a).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(a).forEach(function(u){delete s[u]}),tm(n,s,i),nm=!0}catch(u){i(u)}}},ej=function(t,n,r,i){r&&Is(r)==="object"&&(r=pd("",r).slice(1)),t.queryStringParams&&(n=pd(n,t.queryStringParams));try{var o;Do?o=new Do:o=new Fs("MSXML2.XMLHTTP.3.0"),o.open(r?"POST":"GET",n,1),t.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!t.withCredentials,r&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var a=t.customHeaders;if(a=typeof a=="function"?a():a,a)for(var s in a)o.setRequestHeader(s,a[s]);o.onreadystatechange=function(){o.readyState>3&&i(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(r)}catch(l){console&&console.log(l)}},tj=function(t,n,r,i){if(typeof r=="function"&&(i=r,r=void 0),i=i||function(){},gn&&n.indexOf("file:")!==0)return ZT(t,n,r,i);if(Xw()||typeof ActiveXObject=="function")return ej(t,n,r,i);i(new Error("No fetch and no xhr implementation found!"))};function Mo(e){"@babel/helpers - typeof";return Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mo(e)}function nj(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,e1(r.key),r)}}function rj(e,t,n){return t&&rm(e.prototype,t),n&&rm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ij(e,t,n){return t=e1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function e1(e){var t=oj(e,"string");return Mo(t)==="symbol"?t:String(t)}function oj(e,t){if(Mo(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Mo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var aj=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,r,i){return ij({},r,i||"")},parseLoadPayload:function(n,r){},request:tj,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},t1=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};nj(this,e),this.services=t,this.options=n,this.allOptions=r,this.type="backend",this.init(t,n,r)}return rj(e,[{key:"init",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=n,this.options=dd(i,this.options||{},aj()),this.allOptions=o,this.services&&this.options.reloadInterval&&setInterval(function(){return r.reload()},this.options.reloadInterval)}},{key:"readMulti",value:function(n,r,i){this._readAny(n,n,r,r,i)}},{key:"read",value:function(n,r,i){this._readAny([n],n,[r],r,i)}},{key:"_readAny",value:function(n,r,i,o,a){var s=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(n,i)),l=YT(l),l.then(function(u){if(!u)return a(null,{});var f=s.services.interpolator.interpolate(u,{lng:n.join("+"),ns:i.join("+")});s.loadUrl(f,a,r,o)})}},{key:"loadUrl",value:function(n,r,i,o){var a=this,s=typeof i=="string"?[i]:i,l=typeof o=="string"?[o]:o,u=this.options.parseLoadPayload(s,l);this.options.request(this.options,n,u,function(f,d){if(d&&(d.status>=500&&d.status<600||!d.status))return r("failed loading "+n+"; status code: "+d.status,!0);if(d&&d.status>=400&&d.status<500)return r("failed loading "+n+"; status code: "+d.status,!1);if(!d&&f&&f.message&&f.message.indexOf("Failed to fetch")>-1)return r("failed loading "+n+": "+f.message,!0);if(f)return r(f,!1);var c,y;try{typeof d.data=="string"?c=a.options.parse(d.data,i,o):c=d.data}catch{y="failed parsing "+n+" to json"}if(y)return r(y,!1);r(null,c)})}},{key:"create",value:function(n,r,i,o,a){var s=this;if(this.options.addPath){typeof n=="string"&&(n=[n]);var l=this.options.parsePayload(r,i,o),u=0,f=[],d=[];n.forEach(function(c){var y=s.options.addPath;typeof s.options.addPath=="function"&&(y=s.options.addPath(c,r));var v=s.services.interpolator.interpolate(y,{lng:c,ns:r});s.options.request(s.options,v,l,function(w,b){u+=1,f.push(w),d.push(b),u===n.length&&typeof a=="function"&&a(f,d)})})}}},{key:"reload",value:function(){var n=this,r=this.services,i=r.backendConnector,o=r.languageUtils,a=r.logger,s=i.language;if(!(s&&s.toLowerCase()==="cimode")){var l=[],u=function(d){var c=o.toResolveHierarchy(d);c.forEach(function(y){l.indexOf(y)<0&&l.push(y)})};u(s),this.allOptions.preload&&this.allOptions.preload.forEach(function(f){return u(f)}),l.forEach(function(f){n.allOptions.ns.forEach(function(d){i.read(f,d,"read",null,null,function(c,y){c&&a.warn("loading namespace ".concat(d," for language ").concat(f," failed"),c),!c&&y&&a.log("loaded namespace ".concat(d," for language ").concat(f),y),i.loaded("".concat(f,"|").concat(d),c,y)})})})}}}]),e}();t1.type="backend";async function sj(){await De.use(t1).use(X$).init({debug:!1,backend:{loadPath:`${z}/locales/{{lng}}.json`},interpolation:{escapeValue:!1},fallbackLng:"en",supportedLngs:["en","ru"]})}sj();const lj=x.img`
  ${vs};
  width: fit-content;
  height: 2.63vw;

  @media (max-width: ${k}) {
    width: fit-content;
    height: 5.06vw;
  }
`,n1=()=>{const{t:e}=Rt(),t=Vt("Logo",e),{src:n,alt:r}=t;return h.jsx(lj,{src:n,alt:r})},uj=x.div`
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
`,cj=x(St)`
  display: flex;
  margin-right: 1.2vw;

  @media (max-width: ${k}) {
    margin-right: 3vw;
  }
`,im=x.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${k}) {
    width: 6.61vw;
    height: 6.61vw;
  }
`,dj=x(it)`
  display: flex;
  background-color: transparent;
`,Zf=({type:e,$location:t,onClick:n,...r})=>{const{t:i}=Rt(),o=Vt("FeedbackWidgets",i);return h.jsx(uj,{$location:t,...r,children:o.map(a=>h.jsx(cj,{color:"transparent",href:a.href,target:"_blank",rel:"noopener noreferrer",children:n?h.jsx(dj,{type:"button",disabled:!n,onClick:n,children:h.jsx(im,{src:a.image[e==="light"?"lightSrc":"darkSrc"],alt:a.image.alt})}):h.jsx(im,{src:a.image[e==="light"?"lightSrc":"darkSrc"],alt:a.image.alt})},a.id))})},fj=x.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  @media (max-width: ${k}) {
    gap: 1vw;
  }
`,om=x.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${k}) {
    margin: ${({$isButton:e})=>e?"0":"0 2vw"};
    width: ${({$isButton:e})=>e?"3vw":"6.5vw"};
    height: ${({$isButton:e})=>e?"3vw":"6.5vw"};
  }
`,pj=x.p`
  ${ee};
  ${fe};
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
`,hj=x(it)`
  margin-right: 1vw;
  background: transparent;
  border-radius: 50px;
`,hd=({image:e,isButton:t=!1,onClick:n})=>{const{src:r,alt:i,text:o}=e;return h.jsxs(fj,{children:[t&&n?h.jsx(hj,{type:"button",disabled:!1,onClick:n,children:h.jsx(om,{src:r,alt:i,$isButton:t})}):h.jsx(om,{src:r,alt:i,$isButton:t}),h.jsx(pj,{children:o})]})},gj=x.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`,mj=x(it)`
  background-color: transparent;
  width: 1.04vw;
  height: 0.83vw;
  display: flex;

  @media (max-width: ${k}) {
    width: 2.95vw;
    height: 2.16vw;
  }
`,vj=x.img`
  width: 100%;
  height: 100%;
`,yj=x.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2.3vw 5vw 2.3vw 1.74vw;
  box-sizing: border-box;

  @media (max-width: ${k}) {
    padding: 16.7vw 5vw 13vw 5vw;
  }
`,wj=x(it)`
  ${ee};
  ${fe};
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

  ${({$code:e,$currentLanguage:t})=>e===t&&Te`
      display: flex;
      align-items: center;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 18vw;
        transform: translateY(-50%);
        background-image: url(${O2.background});
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
`,xj=({language:e,isLanguagesOpen:t,languagesHandler:n,closeIcon:r})=>{const{i18n:i}=Rt(),[o,a]=E.useState(i.language),s=async u=>{a(u),await i.changeLanguage(u),n()},l=u=>async()=>{await s(u)};return h.jsxs(yj,{children:[h.jsxs(gj,{children:[h.jsx(mj,{disabled:!t,type:"button",onClick:n,children:h.jsx(vj,{src:r.src,alt:r.alt})}),h.jsx(hd,{image:e})]}),E2.map(u=>h.jsx(wj,{type:"button",disabled:!t,$code:u.code,$currentLanguage:o,onClick:l(u.code),children:u.name},u.code))]})},Sj=x.ul`
  position: relative;
  z-index: 11;
  ${ee};
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
`,bj=x.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;

  @media (max-width: ${k}) {
    margin-top: calc(27vw / 5.09);
    justify-content: start;
    align-self: start;
  }
`,$j=x(it)`
  background-color: transparent;
  ${ee};
  ${zi};
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
`,r1=({sections:e,headerHeight:t,burgerMenuHandler:n,isLanguagesOpen:r,languagesHandler:i})=>{const o=Ai(),a=ll(),[s,l]=E.useState(!1),u=async d=>{a.pathname!=="/"&&await o("/");const c=document.getElementById(d);if(c){const y=c.offsetTop-t;window.scrollTo({top:y,behavior:"smooth"})}l(!1)},f=async d=>{l(!0),n&&await n(),i&&r&&await i(),await u(d)};return h.jsx("nav",{children:h.jsx(Sj,{children:e.map(d=>h.jsx(bj,{children:h.jsx($j,{disabled:s,type:"button",onClick:()=>f(d.id),children:d.title})},d.id))})})},{whiteColor:i1,greenColor:kj,lightGreenColor:Cj}=ae,Ej=x.div`
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
`,Oj=x(St)`
  border-radius: 5px;
  padding: 0.5vw 2vw;
  background: linear-gradient(
    133deg,
    ${kj} 0%,
    ${Cj} 100%
  );
  word-break: break-word;
  @media (max-width: ${k}) {
    padding: 1.7vw 4.4vw;
  }
`,_j=x(St)`
  visibility: hidden;
  margin: 0 1vw;
  background-color: transparent;
  word-break: break-word;
  @media (max-width: ${k}) {
    margin: 0 7.5vw 0 2vw;
  }
`,am=x.span`
  color: ${i1};
  ${zi};
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
`,sm=x.span`
  color: ${i1};
  ${It};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.42px;

  @media (max-width: ${k}) {
    color: rgba(255, 255, 255, 0.9);
    font-size: calc(14vw / 5.09);
  }
`,lm=x(it)`
  background-color: transparent;
  display: flex;
`,o1=({onClick:e,loginAndRegister:t})=>{const{signUp:n,signIn:r}=t;return h.jsxs(Ej,{children:[h.jsx(_j,{color:"transparent",href:Xk,target:"_blank",rel:"noopener noreferrer",children:e?h.jsx(lm,{type:"button",disabled:!e,onClick:e,children:h.jsx(am,{children:n})}):h.jsx(am,{children:n})}),h.jsx(Oj,{color:"transparent",href:Yk,target:"_blank",rel:"noopener noreferrer",children:e?h.jsx(lm,{type:"button",disabled:!e,onClick:e,children:h.jsx(sm,{children:r})}):h.jsx(sm,{children:r})})]})},Tj=x.div`
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
`,jj=x.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`,Pj=x(it)`
  background-color: transparent;
  width: 2.95vw;
  height: 2.16vw;
  border-radius: 0;
  display: flex;
`,Lj=x.img`
  width: 100%;
  height: 100%;
`,Rj=x.div`
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
`,Ij=({language:e,menu:t,sections:n,headerHeight:r,languagesHandler:i,isBurgerMenuOpen:o,burgerMenuHandler:a,loginAndRegister:s,closeIcon:l})=>h.jsxs(Tj,{children:[h.jsxs(jj,{children:[h.jsx(Pj,{disabled:!o,type:"button",onClick:a,children:h.jsx(Lj,{src:l.src,alt:l.alt})}),h.jsx(hd,{image:t})]}),h.jsx(r1,{sections:n,headerHeight:r,burgerMenuHandler:a}),h.jsx(Rj,{children:h.jsx(hd,{image:e,isButton:!0,onClick:i})}),h.jsx(o1,{loginAndRegister:s,onClick:a}),h.jsx(Zf,{$location:"menu",type:"light",onClick:a})]}),Fj=x.div`
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

  ${({$isOpen:e})=>e!==null?e?Te`
            animation: ${Gk} 0.5s forwards;
          `:Te`
            animation: ${Kk} 0.5s forwards;
          `:""};

  @media (max-width: ${k}) {
    width: 60%;
  }
`,um=({containerHeight:e,headerHeight:t,children:n,isOpen:r})=>{const i=ll(),o=rn(),a=i.pathname==="/";return E.useLayoutEffect(()=>{const s=()=>{document.querySelectorAll(".drop-right").forEach(u=>{u.style.height=`calc(${e}px + ${t}px + ${!o&&a?1.7:0}vw)`})};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[e,t,o]),h.jsx(Fj,{className:"drop-right",$isOpen:r,children:n})},{whiteColor:Nj,headerColor:Aj}=ae,zj=x.header`
  background-color: ${Aj};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  box-sizing: border-box;
  padding-left: 4vw;
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 6.94vw;
  z-index: 10;
  border-bottom: 0.5px ${Nj} solid;
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
`,Dj=x(it)`
  background-color: transparent;
  border-radius: 0;
  display: flex;
`,Mj=x.img`
  width: 6.5vw;
  height: 3.77vw;
`,Uj=x.div`
  position: relative;
  z-index: 11;
`,Hj=x(Zf)`
  margin-left: 1.2vw;
  width: 20vw;
  display: flex;
  justify-content: end;
`,Bj=x(it)`
  margin: 0 2vw;
  background-color: transparent;
  border-radius: 0;
  display: flex;
`,Wj=x.img`
  width: 2.22vw;
  height: 2.22vw;
`,Vj=E.forwardRef(({sections:e,containerHeight:t,isLanguagesOpen:n,isBurgerMenuOpen:r,languagesHandler:i,burgerMenuHandler:o,headerHeight:a},s)=>{const{t:l}=Rt(),u=Vt("Header",l),{loginAndRegister:f,language:d,menu:c,closeIcon:y}=u,v=rn();return console.log(t),h.jsxs(h.Fragment,{children:[h.jsxs(zj,{ref:s,children:[h.jsx(Uj,{children:h.jsx(n1,{})}),v!==null&&!v&&h.jsxs(h.Fragment,{children:[h.jsx(Hj,{type:"light",$location:"menu"}),h.jsx(r1,{sections:e,headerHeight:a,isLanguagesOpen:n,languagesHandler:i}),h.jsx(o1,{loginAndRegister:f}),h.jsx(Bj,{disabled:!!n,type:"button",onClick:i,children:h.jsx(Wj,{src:d.srcGray,alt:d.alt})})]}),v&&h.jsx(Dj,{disabled:!!r,type:"button",onClick:o,children:h.jsx(Mj,{src:c.src,alt:c.alt})})]}),v&&h.jsx(um,{isOpen:r,headerHeight:a,containerHeight:t,children:h.jsx(Ij,{containerHeight:t,sections:e,headerHeight:a,isBurgerMenuOpen:r,burgerMenuHandler:o,languagesHandler:i,language:d,menu:c,loginAndRegister:f,closeIcon:y})}),h.jsx(um,{isOpen:n,headerHeight:a,containerHeight:t,children:h.jsx(xj,{containerHeight:t,headerHeight:a,isLanguagesOpen:n,languagesHandler:i,language:d,closeIcon:y})})]})}),{whiteColor:ep}=ae,qj=x.div`
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
`,Gj=x.h3`
  ${ee};
  margin-bottom: 0.7vw;
  color: ${ep};
  ${zi};
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
`,Kj=x.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${k}) {
    margin: 0.5vw;
  }
`,Qj=x.li`
  ${ee};
  margin-bottom: 0.34vw;
  color: ${ep};
  ${zi};
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
`,Pu=({data:e})=>h.jsxs(qj,{children:[h.jsx(Gj,{children:e.title}),h.jsx(Kj,{children:e.links.map(t=>h.jsx(Qj,{children:h.jsx(St,{color:ep,href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.name})},t.name))})]}),{whiteColor:gd,deepGrayColor:Yj}=ae,sn={text:"Our vision is to provide convenience and help increase your sales business.",nav:{about:{title:"About",links:[{name:"How it works",href:a2},{name:"Featured",href:s2},{name:"Partnership",href:l2},{name:"Business Relation",href:u2}]},community:{title:"Community",links:[{name:"Events",href:c2},{name:"Blog",href:d2},{name:"Podcast",href:f2},{name:"Invite a friend",href:p2}]},socials:{title:"Socials",links:[{name:"Telegram",href:Z0},{name:"Twitter",href:X0},{name:"Facebook",href:J0}]}},rights:"Auto Fast. All rights reserved",policy:{name:"Privacy & Policy",href:h2},condition:{name:"Terms & Condition",href:g2}},Xj=x.footer`
  width: 100vw;
  box-sizing: border-box;
  padding: 5.55vw 4.28vw 0.5vw;
  background-color: ${Yj};

  @media (max-width: ${k}) {
    padding: 15.7vw 0 4.17vw 0;
  }
`,Jj=x.div`
  margin-bottom: 2.5vw;
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${k}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,Zj=x.div`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  justify-content: space-between;

  @media (max-width: ${k}) {
    flex-direction: column;
    align-items: center;
  }
`,eP=x.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${k}) {
    flex-direction: column;
  }
`,tP=x(n1)`
  @media (max-width: ${k}) {
    width: 43.5vw;
    height: 10.24vw;
  }
`,nP=x.div`
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
`,cm=x.p`
  ${ee};
  margin: 2.54vw 0 2.09vw;
  color: ${gd};
  ${zi};
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
`,rP=x(Zf)`
  @media (max-width: ${k}) {
    padding-left: 3vw;
  }
`,dm=x.p`
  ${ee};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(16vw / 5.08);
  }
`,fm=x(St)`
  margin-left: 4.2vw;

  @media (max-width: ${k}) {
    margin: 0;
  }
`,iP=()=>{const e=new Date().getFullYear();return h.jsxs(Xj,{children:[h.jsxs(Jj,{children:[h.jsxs(nP,{children:[h.jsx(tP,{}),h.jsx(cm,{children:sn.text}),h.jsx(rP,{type:"dark"})]}),h.jsx(Pu,{data:sn.nav.about}),h.jsx(Pu,{data:sn.nav.community}),h.jsx(Pu,{data:sn.nav.socials})]}),h.jsxs(Zj,{children:[h.jsxs(cm,{children:["© ",e," ",sn.rights]}),h.jsxs(eP,{children:[h.jsx(fm,{color:gd,href:sn.policy.href,target:"_blank",rel:"noopener noreferrer",children:h.jsx(dm,{children:sn.policy.name})}),h.jsx(fm,{color:gd,href:sn.condition.href,target:"_blank",rel:"noopener noreferrer",children:h.jsx(dm,{children:sn.condition.name})})]})]})]})},oP=()=>{const[e,t]=E.useState(""),[n,r]=E.useState([]),i=[{id:"1",question:"What is React?",answer:"React is a JavaScript library for building user interfaces."},{id:"2",question:"How does state work in React?",answer:"State is an object that holds the data that may change over time."}],o=l=>{t(l.target.value)},a=l=>{r(u=>u.includes(l)?u.filter(f=>f!==l):[...u,l])},s=i.filter(l=>l.question.toLowerCase().includes(e.toLowerCase())||l.answer.toLowerCase().includes(e.toLowerCase()));return h.jsxs("div",{children:[h.jsx("input",{type:"text",placeholder:"Search...",value:e,onChange:o}),s.length>0?h.jsx("ul",{children:s.map(l=>h.jsxs("li",{children:[h.jsx("button",{onClick:()=>a(l.id),children:n.includes(l.id)?"Hide Answer":"Show Answer"}),h.jsx("strong",{children:l.question}),n.includes(l.id)&&h.jsx("p",{children:l.answer})]},l.id))}):h.jsx("p",{children:"Sorry, No results found."})]})},aP=x.div`
  display: inline-block;
`,sP=x.img`
  width: calc(20vw / 14.4);
  height: calc(20vw / 14.4);
  cursor: pointer;
  margin-right: calc(5vw / 14.4);

  @media (max-width: ${k}) {
    width: calc(20vw / 5.09);
    height: calc(20vw / 5.09);
  }
`,lP=({id:e,initialValue:t,ratingData:n})=>{const r=i=>{console.log(i===t?`Отправить запрос на сервер для новости id=${e} поменять rating на 0`:`Отправить запрос на сервер для новости id=${e} поменять rating на ${i}`)};return h.jsx(aP,{children:[1,2,3,4,5].map(i=>h.jsx(sP,{src:i<=t?n.active.src:n.inactive.src,alt:i<=t?n.active.alt:n.inactive.alt,onClick:()=>r(i)},i))})},{blackColor:uP}=ae,cP=x.div`
  display: flex;
  flex-direction: column;
  padding-left: 1vw;

  @media (max-width: ${k}) {
    width: calc(325vw / 5.09);
  }
`,dP=x(bt)`
  text-align: left;
  padding: 3.2vw 0 1.2vw 0;
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.4px;

  @media (max-width: ${k}) {
    font-size: calc(20vw / 5.09);
    padding: 6vw 0 1.2vw 0;
  }
`,fP=x.div`
  display: flex;
  gap: 0.7vw;
`,pP=x(St)`
  display: flex;
  margin-right: 1.2vw;

  @media (max-width: ${k}) {
    margin-right: 3vw;
  }
`,pm=x.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${k}) {
    width: 6.61vw;
    height: 6.61vw;
  }
`,hP=({selectedNews:e,share:t})=>{const n=r=>{const i=encodeURIComponent(e.title+`
`+e.text),o=encodeURIComponent(window.location.href),a=encodeURIComponent(e.title),s=encodeURIComponent(e.title+`
`+e.text);switch(r){case ew:return`https://twitter.com/intent/tweet?url=${o}&text=${i}`;case tw:return`https://www.facebook.com/sharer/sharer.php?u=${o}`;case nw:return`mailto:?subject=${a}&body=${s}`;default:return""}};return h.jsxs(cP,{children:[h.jsx(dP,{color:uP,children:t.title}),h.jsxs(fP,{children:[t.links.map(r=>h.jsx(pP,{color:"transparent",href:n(r.id),target:"_blank",rel:"noopener noreferrer",children:h.jsx(pm,{src:r.src,alt:r.alt})},r.id)),h.jsx(pm,{src:t.image.src,alt:t.image.alt})]})]})},{blackColor:a1,greenColor:gP,smallNewsColor:s1}=ae,mP=x.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: ${k}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,vP=x(bt)`
  text-align: left;
  padding: 9.1vw 0 2.5vw 1vw;
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.5px;

  @media (max-width: ${k}) {
    width: calc(325vw / 5.09);
    font-size: calc(25vw / 5.09);
  }
`,yP=x.div`
  width: calc(325vw / 14.4);
  box-sizing: border-box;
  margin-bottom: calc(20vw / 14.4);
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: ${k}) {
    width: calc(325vw / 5.09);
  }
`,wP=x.img`
  height: ${({size:e})=>e==="big"?"calc(399vw / 14.4)":"calc(154vw / 14.4)"};
  width: ${({size:e})=>e==="big"?"calc(899vw / 14.4)":"calc(325vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${k}) {
    height: ${({size:e})=>e==="big"?"calc(184vw / 5.08)":"calc(148vw / 5.08)"};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(325vw / 5.08)"};
  }
`,xP=x(tr)`
  width: 100%;
  margin-bottom: calc(15vw / 14.4);
  ${({size:e})=>e==="big"?`${kr}`:`${It}`};
  color: ${({size:e})=>e==="big"?`${a1}`:`${s1}`};
  font-size: ${({size:e})=>e==="big"?"calc(50vw / 14.4)":"calc(28vw / 14.4)"};
  line-height: 1.2;
  letter-spacing: -0.7px;
  text-align: left;

  @media (max-width: ${k}) {
    margin-bottom: 0;
    font-size: ${({size:e})=>e==="big"?"calc(30vw / 5.09)":"calc(23vw / 5.09)"};
    letter-spacing: -0.6px;
  }
`,SP=x.div`
  width: 100%;
  margin: ${({size:e})=>e==="big"?"2vw 0 0.71vw":"1vw 0 1vw"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  @media (max-width: ${k}) {
    margin: ${({size:e})=>e==="big"?"calc(45vw / 5.09) 0 calc(12vw / 5.09)":"calc(12vw / 5.09) 0 calc(12vw / 5.09)"};
  }
`,l1=x.p`
  ${ee};
  ${fe};
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.09);
  }
`,bP=x(l1)`
  padding-right: 3vw;
  color: ${gP};
  font-size: calc(25vw / 14.4);

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.09);
  }
`,$P=x(l1)`
  padding-top: 0.5vw;
  color: ${s1};
  font-size: calc(15vw / 14.4);

  @media (max-width: ${k}) {
    font-size: calc(15vw / 5.09);
  }
`,kP=({news:e,title:t})=>{const n=Ai(),r=i=>{n(`/news/${i}`)};return h.jsxs(mP,{children:[h.jsx(vP,{color:a1,children:t}),e.map(i=>h.jsxs(yP,{onClick:()=>r(i.id),children:[h.jsx(wP,{size:"small",src:i.url,alt:i.title}),h.jsxs(SP,{size:"small",children:[h.jsx(bP,{children:i.span}),h.jsx($P,{children:i.date})]}),h.jsx(xP,{size:"small",children:i.title})]},i.id))]})};var CP=function(t){return EP(t)&&!OP(t)};function EP(e){return!!e&&typeof e=="object"}function OP(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||jP(e)}var _P=typeof Symbol=="function"&&Symbol.for,TP=_P?Symbol.for("react.element"):60103;function jP(e){return e.$$typeof===TP}function PP(e){return Array.isArray(e)?[]:{}}function Ns(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Uo(PP(e),e,t):e}function LP(e,t,n){return e.concat(t).map(function(r){return Ns(r,n)})}function RP(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=Ns(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=Ns(t[i],n):r[i]=Uo(e[i],t[i],n)}),r}function Uo(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||LP,n.isMergeableObject=n.isMergeableObject||CP;var r=Array.isArray(t),i=Array.isArray(e),o=r===i;return o?r?n.arrayMerge(e,t,n):RP(e,t,n):Ns(t,n)}Uo.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return Uo(r,i,n)},{})};var md=Uo,IP=typeof global=="object"&&global&&global.Object===Object&&global;const u1=IP;var FP=typeof self=="object"&&self&&self.Object===Object&&self,NP=u1||FP||Function("return this")();const on=NP;var AP=on.Symbol;const Xn=AP;var c1=Object.prototype,zP=c1.hasOwnProperty,DP=c1.toString,Qi=Xn?Xn.toStringTag:void 0;function MP(e){var t=zP.call(e,Qi),n=e[Qi];try{e[Qi]=void 0;var r=!0}catch{}var i=DP.call(e);return r&&(t?e[Qi]=n:delete e[Qi]),i}var UP=Object.prototype,HP=UP.toString;function BP(e){return HP.call(e)}var WP="[object Null]",VP="[object Undefined]",hm=Xn?Xn.toStringTag:void 0;function Lr(e){return e==null?e===void 0?VP:WP:hm&&hm in Object(e)?MP(e):BP(e)}function d1(e,t){return function(n){return e(t(n))}}var qP=d1(Object.getPrototypeOf,Object);const tp=qP;function Rr(e){return e!=null&&typeof e=="object"}var GP="[object Object]",KP=Function.prototype,QP=Object.prototype,f1=KP.toString,YP=QP.hasOwnProperty,XP=f1.call(Object);function gm(e){if(!Rr(e)||Lr(e)!=GP)return!1;var t=tp(e);if(t===null)return!0;var n=YP.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&f1.call(n)==XP}var mm=Array.isArray,vm=Object.keys,JP=Object.prototype.hasOwnProperty,ZP=typeof Element<"u";function vd(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=mm(e),r=mm(t),i,o,a;if(n&&r){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!vd(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var s=e instanceof Date,l=t instanceof Date;if(s!=l)return!1;if(s&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,f=t instanceof RegExp;if(u!=f)return!1;if(u&&f)return e.toString()==t.toString();var d=vm(e);if(o=d.length,o!==vm(t).length)return!1;for(i=o;i--!==0;)if(!JP.call(t,d[i]))return!1;if(ZP&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(a=d[i],!(a==="_owner"&&e.$$typeof)&&!vd(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var e4=function(t,n){try{return vd(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Ln=_r(e4);var t4=!0;function p1(e,t){if(!t4){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function n4(){this.__data__=[],this.size=0}function h1(e,t){return e===t||e!==e&&t!==t}function vl(e,t){for(var n=e.length;n--;)if(h1(e[n][0],t))return n;return-1}var r4=Array.prototype,i4=r4.splice;function o4(e){var t=this.__data__,n=vl(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():i4.call(t,n,1),--this.size,!0}function a4(e){var t=this.__data__,n=vl(t,e);return n<0?void 0:t[n][1]}function s4(e){return vl(this.__data__,e)>-1}function l4(e,t){var n=this.__data__,r=vl(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function bn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}bn.prototype.clear=n4;bn.prototype.delete=o4;bn.prototype.get=a4;bn.prototype.has=s4;bn.prototype.set=l4;function u4(){this.__data__=new bn,this.size=0}function c4(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function d4(e){return this.__data__.get(e)}function f4(e){return this.__data__.has(e)}function Xo(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var p4="[object AsyncFunction]",h4="[object Function]",g4="[object GeneratorFunction]",m4="[object Proxy]";function g1(e){if(!Xo(e))return!1;var t=Lr(e);return t==h4||t==g4||t==p4||t==m4}var v4=on["__core-js_shared__"];const Lu=v4;var ym=function(){var e=/[^.]+$/.exec(Lu&&Lu.keys&&Lu.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function y4(e){return!!ym&&ym in e}var w4=Function.prototype,x4=w4.toString;function Ir(e){if(e!=null){try{return x4.call(e)}catch{}try{return e+""}catch{}}return""}var S4=/[\\^$.*+?()[\]{}|]/g,b4=/^\[object .+?Constructor\]$/,$4=Function.prototype,k4=Object.prototype,C4=$4.toString,E4=k4.hasOwnProperty,O4=RegExp("^"+C4.call(E4).replace(S4,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function _4(e){if(!Xo(e)||y4(e))return!1;var t=g1(e)?O4:b4;return t.test(Ir(e))}function T4(e,t){return e==null?void 0:e[t]}function Fr(e,t){var n=T4(e,t);return _4(n)?n:void 0}var j4=Fr(on,"Map");const Ho=j4;var P4=Fr(Object,"create");const Bo=P4;function L4(){this.__data__=Bo?Bo(null):{},this.size=0}function R4(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var I4="__lodash_hash_undefined__",F4=Object.prototype,N4=F4.hasOwnProperty;function A4(e){var t=this.__data__;if(Bo){var n=t[e];return n===I4?void 0:n}return N4.call(t,e)?t[e]:void 0}var z4=Object.prototype,D4=z4.hasOwnProperty;function M4(e){var t=this.__data__;return Bo?t[e]!==void 0:D4.call(t,e)}var U4="__lodash_hash_undefined__";function H4(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Bo&&t===void 0?U4:t,this}function Er(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Er.prototype.clear=L4;Er.prototype.delete=R4;Er.prototype.get=A4;Er.prototype.has=M4;Er.prototype.set=H4;function B4(){this.size=0,this.__data__={hash:new Er,map:new(Ho||bn),string:new Er}}function W4(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function yl(e,t){var n=e.__data__;return W4(t)?n[typeof t=="string"?"string":"hash"]:n.map}function V4(e){var t=yl(this,e).delete(e);return this.size-=t?1:0,t}function q4(e){return yl(this,e).get(e)}function G4(e){return yl(this,e).has(e)}function K4(e,t){var n=yl(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function nr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}nr.prototype.clear=B4;nr.prototype.delete=V4;nr.prototype.get=q4;nr.prototype.has=G4;nr.prototype.set=K4;var Q4=200;function Y4(e,t){var n=this.__data__;if(n instanceof bn){var r=n.__data__;if(!Ho||r.length<Q4-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new nr(r)}return n.set(e,t),this.size=n.size,this}function Di(e){var t=this.__data__=new bn(e);this.size=t.size}Di.prototype.clear=u4;Di.prototype.delete=c4;Di.prototype.get=d4;Di.prototype.has=f4;Di.prototype.set=Y4;function X4(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var J4=function(){try{var e=Fr(Object,"defineProperty");return e({},"",{}),e}catch{}}();const wm=J4;function m1(e,t,n){t=="__proto__"&&wm?wm(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Z4=Object.prototype,e5=Z4.hasOwnProperty;function v1(e,t,n){var r=e[t];(!(e5.call(e,t)&&h1(r,n))||n===void 0&&!(t in e))&&m1(e,t,n)}function wl(e,t,n,r){var i=!n;n||(n={});for(var o=-1,a=t.length;++o<a;){var s=t[o],l=r?r(n[s],e[s],s,n,e):void 0;l===void 0&&(l=e[s]),i?m1(n,s,l):v1(n,s,l)}return n}function t5(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var n5="[object Arguments]";function xm(e){return Rr(e)&&Lr(e)==n5}var y1=Object.prototype,r5=y1.hasOwnProperty,i5=y1.propertyIsEnumerable,o5=xm(function(){return arguments}())?xm:function(e){return Rr(e)&&r5.call(e,"callee")&&!i5.call(e,"callee")};const a5=o5;var s5=Array.isArray;const Jo=s5;function l5(){return!1}var w1=typeof gt=="object"&&gt&&!gt.nodeType&&gt,Sm=w1&&typeof mt=="object"&&mt&&!mt.nodeType&&mt,u5=Sm&&Sm.exports===w1,bm=u5?on.Buffer:void 0,c5=bm?bm.isBuffer:void 0,d5=c5||l5;const x1=d5;var f5=9007199254740991,p5=/^(?:0|[1-9]\d*)$/;function h5(e,t){var n=typeof e;return t=t??f5,!!t&&(n=="number"||n!="symbol"&&p5.test(e))&&e>-1&&e%1==0&&e<t}var g5=9007199254740991;function S1(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=g5}var m5="[object Arguments]",v5="[object Array]",y5="[object Boolean]",w5="[object Date]",x5="[object Error]",S5="[object Function]",b5="[object Map]",$5="[object Number]",k5="[object Object]",C5="[object RegExp]",E5="[object Set]",O5="[object String]",_5="[object WeakMap]",T5="[object ArrayBuffer]",j5="[object DataView]",P5="[object Float32Array]",L5="[object Float64Array]",R5="[object Int8Array]",I5="[object Int16Array]",F5="[object Int32Array]",N5="[object Uint8Array]",A5="[object Uint8ClampedArray]",z5="[object Uint16Array]",D5="[object Uint32Array]",ve={};ve[P5]=ve[L5]=ve[R5]=ve[I5]=ve[F5]=ve[N5]=ve[A5]=ve[z5]=ve[D5]=!0;ve[m5]=ve[v5]=ve[T5]=ve[y5]=ve[j5]=ve[w5]=ve[x5]=ve[S5]=ve[b5]=ve[$5]=ve[k5]=ve[C5]=ve[E5]=ve[O5]=ve[_5]=!1;function M5(e){return Rr(e)&&S1(e.length)&&!!ve[Lr(e)]}function np(e){return function(t){return e(t)}}var b1=typeof gt=="object"&&gt&&!gt.nodeType&&gt,ho=b1&&typeof mt=="object"&&mt&&!mt.nodeType&&mt,U5=ho&&ho.exports===b1,Ru=U5&&u1.process,H5=function(){try{var e=ho&&ho.require&&ho.require("util").types;return e||Ru&&Ru.binding&&Ru.binding("util")}catch{}}();const Pi=H5;var $m=Pi&&Pi.isTypedArray,B5=$m?np($m):M5;const W5=B5;var V5=Object.prototype,q5=V5.hasOwnProperty;function $1(e,t){var n=Jo(e),r=!n&&a5(e),i=!n&&!r&&x1(e),o=!n&&!r&&!i&&W5(e),a=n||r||i||o,s=a?t5(e.length,String):[],l=s.length;for(var u in e)(t||q5.call(e,u))&&!(a&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||h5(u,l)))&&s.push(u);return s}var G5=Object.prototype;function rp(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||G5;return e===n}var K5=d1(Object.keys,Object);const Q5=K5;var Y5=Object.prototype,X5=Y5.hasOwnProperty;function J5(e){if(!rp(e))return Q5(e);var t=[];for(var n in Object(e))X5.call(e,n)&&n!="constructor"&&t.push(n);return t}function k1(e){return e!=null&&S1(e.length)&&!g1(e)}function ip(e){return k1(e)?$1(e):J5(e)}function Z5(e,t){return e&&wl(t,ip(t),e)}function eL(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var tL=Object.prototype,nL=tL.hasOwnProperty;function rL(e){if(!Xo(e))return eL(e);var t=rp(e),n=[];for(var r in e)r=="constructor"&&(t||!nL.call(e,r))||n.push(r);return n}function op(e){return k1(e)?$1(e,!0):rL(e)}function iL(e,t){return e&&wl(t,op(t),e)}var C1=typeof gt=="object"&&gt&&!gt.nodeType&&gt,km=C1&&typeof mt=="object"&&mt&&!mt.nodeType&&mt,oL=km&&km.exports===C1,Cm=oL?on.Buffer:void 0,Em=Cm?Cm.allocUnsafe:void 0;function aL(e,t){if(t)return e.slice();var n=e.length,r=Em?Em(n):new e.constructor(n);return e.copy(r),r}function E1(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function sL(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function O1(){return[]}var lL=Object.prototype,uL=lL.propertyIsEnumerable,Om=Object.getOwnPropertySymbols,cL=Om?function(e){return e==null?[]:(e=Object(e),sL(Om(e),function(t){return uL.call(e,t)}))}:O1;const ap=cL;function dL(e,t){return wl(e,ap(e),t)}function _1(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var fL=Object.getOwnPropertySymbols,pL=fL?function(e){for(var t=[];e;)_1(t,ap(e)),e=tp(e);return t}:O1;const T1=pL;function hL(e,t){return wl(e,T1(e),t)}function j1(e,t,n){var r=t(e);return Jo(e)?r:_1(r,n(e))}function gL(e){return j1(e,ip,ap)}function mL(e){return j1(e,op,T1)}var vL=Fr(on,"DataView");const yd=vL;var yL=Fr(on,"Promise");const wd=yL;var wL=Fr(on,"Set");const xd=wL;var xL=Fr(on,"WeakMap");const Sd=xL;var _m="[object Map]",SL="[object Object]",Tm="[object Promise]",jm="[object Set]",Pm="[object WeakMap]",Lm="[object DataView]",bL=Ir(yd),$L=Ir(Ho),kL=Ir(wd),CL=Ir(xd),EL=Ir(Sd),ar=Lr;(yd&&ar(new yd(new ArrayBuffer(1)))!=Lm||Ho&&ar(new Ho)!=_m||wd&&ar(wd.resolve())!=Tm||xd&&ar(new xd)!=jm||Sd&&ar(new Sd)!=Pm)&&(ar=function(e){var t=Lr(e),n=t==SL?e.constructor:void 0,r=n?Ir(n):"";if(r)switch(r){case bL:return Lm;case $L:return _m;case kL:return Tm;case CL:return jm;case EL:return Pm}return t});const sp=ar;var OL=Object.prototype,_L=OL.hasOwnProperty;function TL(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&_L.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var jL=on.Uint8Array;const Rm=jL;function lp(e){var t=new e.constructor(e.byteLength);return new Rm(t).set(new Rm(e)),t}function PL(e,t){var n=t?lp(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var LL=/\w*$/;function RL(e){var t=new e.constructor(e.source,LL.exec(e));return t.lastIndex=e.lastIndex,t}var Im=Xn?Xn.prototype:void 0,Fm=Im?Im.valueOf:void 0;function IL(e){return Fm?Object(Fm.call(e)):{}}function FL(e,t){var n=t?lp(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var NL="[object Boolean]",AL="[object Date]",zL="[object Map]",DL="[object Number]",ML="[object RegExp]",UL="[object Set]",HL="[object String]",BL="[object Symbol]",WL="[object ArrayBuffer]",VL="[object DataView]",qL="[object Float32Array]",GL="[object Float64Array]",KL="[object Int8Array]",QL="[object Int16Array]",YL="[object Int32Array]",XL="[object Uint8Array]",JL="[object Uint8ClampedArray]",ZL="[object Uint16Array]",eR="[object Uint32Array]";function tR(e,t,n){var r=e.constructor;switch(t){case WL:return lp(e);case NL:case AL:return new r(+e);case VL:return PL(e,n);case qL:case GL:case KL:case QL:case YL:case XL:case JL:case ZL:case eR:return FL(e,n);case zL:return new r;case DL:case HL:return new r(e);case ML:return RL(e);case UL:return new r;case BL:return IL(e)}}var Nm=Object.create,nR=function(){function e(){}return function(t){if(!Xo(t))return{};if(Nm)return Nm(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const rR=nR;function iR(e){return typeof e.constructor=="function"&&!rp(e)?rR(tp(e)):{}}var oR="[object Map]";function aR(e){return Rr(e)&&sp(e)==oR}var Am=Pi&&Pi.isMap,sR=Am?np(Am):aR;const lR=sR;var uR="[object Set]";function cR(e){return Rr(e)&&sp(e)==uR}var zm=Pi&&Pi.isSet,dR=zm?np(zm):cR;const fR=dR;var pR=1,hR=2,gR=4,P1="[object Arguments]",mR="[object Array]",vR="[object Boolean]",yR="[object Date]",wR="[object Error]",L1="[object Function]",xR="[object GeneratorFunction]",SR="[object Map]",bR="[object Number]",R1="[object Object]",$R="[object RegExp]",kR="[object Set]",CR="[object String]",ER="[object Symbol]",OR="[object WeakMap]",_R="[object ArrayBuffer]",TR="[object DataView]",jR="[object Float32Array]",PR="[object Float64Array]",LR="[object Int8Array]",RR="[object Int16Array]",IR="[object Int32Array]",FR="[object Uint8Array]",NR="[object Uint8ClampedArray]",AR="[object Uint16Array]",zR="[object Uint32Array]",pe={};pe[P1]=pe[mR]=pe[_R]=pe[TR]=pe[vR]=pe[yR]=pe[jR]=pe[PR]=pe[LR]=pe[RR]=pe[IR]=pe[SR]=pe[bR]=pe[R1]=pe[$R]=pe[kR]=pe[CR]=pe[ER]=pe[FR]=pe[NR]=pe[AR]=pe[zR]=!0;pe[wR]=pe[L1]=pe[OR]=!1;function go(e,t,n,r,i,o){var a,s=t&pR,l=t&hR,u=t&gR;if(n&&(a=i?n(e,r,i,o):n(e)),a!==void 0)return a;if(!Xo(e))return e;var f=Jo(e);if(f){if(a=TL(e),!s)return E1(e,a)}else{var d=sp(e),c=d==L1||d==xR;if(x1(e))return aL(e,s);if(d==R1||d==P1||c&&!i){if(a=l||c?{}:iR(e),!s)return l?hL(e,iL(a,e)):dL(e,Z5(a,e))}else{if(!pe[d])return i?e:{};a=tR(e,d,s)}}o||(o=new Di);var y=o.get(e);if(y)return y;o.set(e,a),fR(e)?e.forEach(function(b){a.add(go(b,t,n,b,e,o))}):lR(e)&&e.forEach(function(b,g){a.set(g,go(b,t,n,g,e,o))});var v=u?l?mL:gL:l?op:ip,w=f?void 0:v(e);return X4(w||e,function(b,g){w&&(g=b,b=e[g]),v1(a,g,go(b,t,n,g,e,o))}),a}var DR=4;function Dm(e){return go(e,DR)}function I1(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var MR="[object Symbol]";function up(e){return typeof e=="symbol"||Rr(e)&&Lr(e)==MR}var UR="Expected a function";function cp(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(UR);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(cp.Cache||nr),n}cp.Cache=nr;var HR=500;function BR(e){var t=cp(e,function(r){return n.size===HR&&n.clear(),r}),n=t.cache;return t}var WR=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,VR=/\\(\\)?/g,qR=BR(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(WR,function(n,r,i,o){t.push(i?o.replace(VR,"$1"):r||n)}),t});const GR=qR;var KR=1/0;function QR(e){if(typeof e=="string"||up(e))return e;var t=e+"";return t=="0"&&1/e==-KR?"-0":t}var YR=1/0,Mm=Xn?Xn.prototype:void 0,Um=Mm?Mm.toString:void 0;function F1(e){if(typeof e=="string")return e;if(Jo(e))return I1(e,F1)+"";if(up(e))return Um?Um.call(e):"";var t=e+"";return t=="0"&&1/e==-YR?"-0":t}function XR(e){return e==null?"":F1(e)}function N1(e){return Jo(e)?I1(e,QR):up(e)?[e]:E1(GR(XR(e)))}var A1={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=typeof Symbol=="function"&&Symbol.for,dp=Me?Symbol.for("react.element"):60103,fp=Me?Symbol.for("react.portal"):60106,xl=Me?Symbol.for("react.fragment"):60107,Sl=Me?Symbol.for("react.strict_mode"):60108,bl=Me?Symbol.for("react.profiler"):60114,$l=Me?Symbol.for("react.provider"):60109,kl=Me?Symbol.for("react.context"):60110,pp=Me?Symbol.for("react.async_mode"):60111,Cl=Me?Symbol.for("react.concurrent_mode"):60111,El=Me?Symbol.for("react.forward_ref"):60112,Ol=Me?Symbol.for("react.suspense"):60113,JR=Me?Symbol.for("react.suspense_list"):60120,_l=Me?Symbol.for("react.memo"):60115,Tl=Me?Symbol.for("react.lazy"):60116,ZR=Me?Symbol.for("react.block"):60121,e3=Me?Symbol.for("react.fundamental"):60117,t3=Me?Symbol.for("react.responder"):60118,n3=Me?Symbol.for("react.scope"):60119;function $t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case dp:switch(e=e.type,e){case pp:case Cl:case xl:case bl:case Sl:case Ol:return e;default:switch(e=e&&e.$$typeof,e){case kl:case El:case Tl:case _l:case $l:return e;default:return t}}case fp:return t}}}function z1(e){return $t(e)===Cl}de.AsyncMode=pp;de.ConcurrentMode=Cl;de.ContextConsumer=kl;de.ContextProvider=$l;de.Element=dp;de.ForwardRef=El;de.Fragment=xl;de.Lazy=Tl;de.Memo=_l;de.Portal=fp;de.Profiler=bl;de.StrictMode=Sl;de.Suspense=Ol;de.isAsyncMode=function(e){return z1(e)||$t(e)===pp};de.isConcurrentMode=z1;de.isContextConsumer=function(e){return $t(e)===kl};de.isContextProvider=function(e){return $t(e)===$l};de.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===dp};de.isForwardRef=function(e){return $t(e)===El};de.isFragment=function(e){return $t(e)===xl};de.isLazy=function(e){return $t(e)===Tl};de.isMemo=function(e){return $t(e)===_l};de.isPortal=function(e){return $t(e)===fp};de.isProfiler=function(e){return $t(e)===bl};de.isStrictMode=function(e){return $t(e)===Sl};de.isSuspense=function(e){return $t(e)===Ol};de.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xl||e===Cl||e===bl||e===Sl||e===Ol||e===JR||typeof e=="object"&&e!==null&&(e.$$typeof===Tl||e.$$typeof===_l||e.$$typeof===$l||e.$$typeof===kl||e.$$typeof===El||e.$$typeof===e3||e.$$typeof===t3||e.$$typeof===n3||e.$$typeof===ZR)};de.typeOf=$t;A1.exports=de;var r3=A1.exports,hp=r3,i3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},D1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gp={};gp[hp.ForwardRef]=a3;gp[hp.Memo]=D1;function Hm(e){return hp.isMemo(e)?D1:gp[e.$$typeof]||i3}var s3=Object.defineProperty,l3=Object.getOwnPropertyNames,Bm=Object.getOwnPropertySymbols,u3=Object.getOwnPropertyDescriptor,c3=Object.getPrototypeOf,Wm=Object.prototype;function M1(e,t,n){if(typeof t!="string"){if(Wm){var r=c3(t);r&&r!==Wm&&M1(e,r,n)}var i=l3(t);Bm&&(i=i.concat(Bm(t)));for(var o=Hm(e),a=Hm(t),s=0;s<i.length;++s){var l=i[s];if(!o3[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var u=u3(t,l);try{s3(e,l,u)}catch{}}}}return e}var d3=M1;const f3=_r(d3);var p3=1,h3=4;function g3(e){return go(e,p3|h3)}function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function U1(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Dn(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Vm(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var jl=E.createContext(void 0);jl.displayName="FormikContext";var m3=jl.Provider,v3=jl.Consumer;function H1(){var e=E.useContext(jl);return e||p1(!1),e}var qm=function(t){return Array.isArray(t)&&t.length===0},Be=function(t){return typeof t=="function"},Zo=function(t){return t!==null&&typeof t=="object"},y3=function(t){return String(Math.floor(Number(t)))===t},Iu=function(t){return Object.prototype.toString.call(t)==="[object String]"},B1=function(t){return E.Children.count(t)===0},Fu=function(t){return Zo(t)&&Be(t.then)};function xe(e,t,n,r){r===void 0&&(r=0);for(var i=N1(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function tn(e,t,n){for(var r=Dm(e),i=r,o=0,a=N1(t);o<a.length-1;o++){var s=a[o],l=xe(e,a.slice(0,o+1));if(l&&(Zo(l)||Array.isArray(l)))i=i[s]=Dm(l);else{var u=a[o+1];i=i[s]=y3(u)&&Number(u)>=0?[]:{}}}return(o===0?e:i)[a[o]]===n?e:(n===void 0?delete i[a[o]]:i[a[o]]=n,o===0&&n===void 0&&delete r[a[o]],r)}function W1(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,o=Object.keys(e);i<o.length;i++){var a=o[i],s=e[a];Zo(s)?n.get(s)||(n.set(s,!0),r[a]=Array.isArray(s)?[]:{},W1(s,t,n,r[a])):r[a]=t}return r}function w3(e,t){switch(t.type){case"SET_VALUES":return ue({},e,{values:t.payload});case"SET_TOUCHED":return ue({},e,{touched:t.payload});case"SET_ERRORS":return Ln(e.errors,t.payload)?e:ue({},e,{errors:t.payload});case"SET_STATUS":return ue({},e,{status:t.payload});case"SET_ISSUBMITTING":return ue({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return ue({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return ue({},e,{values:tn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return ue({},e,{touched:tn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return ue({},e,{errors:tn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return ue({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return ue({},e,{touched:W1(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return ue({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return ue({},e,{isSubmitting:!1});default:return e}}var rr={},$a={};function x3(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,o=e.validateOnMount,a=o===void 0?!1:o,s=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,f=e.onSubmit,d=Dn(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),c=ue({validateOnChange:n,validateOnBlur:i,validateOnMount:a,onSubmit:f},d),y=E.useRef(c.initialValues),v=E.useRef(c.initialErrors||rr),w=E.useRef(c.initialTouched||$a),b=E.useRef(c.initialStatus),g=E.useRef(!1),p=E.useRef({});E.useEffect(function(){return g.current=!0,function(){g.current=!1}},[]);var m=E.useState(0),S=m[1],O=E.useRef({values:c.initialValues,errors:c.initialErrors||rr,touched:c.initialTouched||$a,status:c.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),$=O.current,C=E.useCallback(function(j){var H=O.current;O.current=w3(H,j),H!==O.current&&S(function(q){return q+1})},[]),_=E.useCallback(function(j,H){return new Promise(function(q,G){var te=c.validate(j,H);te==null?q(rr):Fu(te)?te.then(function(le){q(le||rr)},function(le){G(le)}):q(te)})},[c.validate]),P=E.useCallback(function(j,H){var q=c.validationSchema,G=Be(q)?q(H):q,te=H&&G.validateAt?G.validateAt(H,j):$3(j,G);return new Promise(function(le,Fe){te.then(function(){le(rr)},function(an){an.name==="ValidationError"?le(b3(an)):Fe(an)})})},[c.validationSchema]),L=E.useCallback(function(j,H){return new Promise(function(q){return q(p.current[j].validate(H))})},[]),D=E.useCallback(function(j){var H=Object.keys(p.current).filter(function(G){return Be(p.current[G].validate)}),q=H.length>0?H.map(function(G){return L(G,xe(j,G))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(q).then(function(G){return G.reduce(function(te,le,Fe){return le==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||le&&(te=tn(te,H[Fe],le)),te},{})})},[L]),U=E.useCallback(function(j){return Promise.all([D(j),c.validationSchema?P(j):{},c.validate?_(j):{}]).then(function(H){var q=H[0],G=H[1],te=H[2],le=md.all([q,G,te],{arrayMerge:k3});return le})},[c.validate,c.validationSchema,D,_,P]),A=Ct(function(j){return j===void 0&&(j=$.values),C({type:"SET_ISVALIDATING",payload:!0}),U(j).then(function(H){return g.current&&(C({type:"SET_ISVALIDATING",payload:!1}),C({type:"SET_ERRORS",payload:H})),H})});E.useEffect(function(){a&&g.current===!0&&Ln(y.current,c.initialValues)&&A(y.current)},[a,A]);var T=E.useCallback(function(j){var H=j&&j.values?j.values:y.current,q=j&&j.errors?j.errors:v.current?v.current:c.initialErrors||{},G=j&&j.touched?j.touched:w.current?w.current:c.initialTouched||{},te=j&&j.status?j.status:b.current?b.current:c.initialStatus;y.current=H,v.current=q,w.current=G,b.current=te;var le=function(){C({type:"RESET_FORM",payload:{isSubmitting:!!j&&!!j.isSubmitting,errors:q,touched:G,status:te,values:H,isValidating:!!j&&!!j.isValidating,submitCount:j&&j.submitCount&&typeof j.submitCount=="number"?j.submitCount:0}})};if(c.onReset){var Fe=c.onReset($.values,$p);Fu(Fe)?Fe.then(le):le()}else le()},[c.initialErrors,c.initialStatus,c.initialTouched]);E.useEffect(function(){g.current===!0&&!Ln(y.current,c.initialValues)&&u&&(y.current=c.initialValues,T(),a&&A(y.current))},[u,c.initialValues,T,a,A]),E.useEffect(function(){u&&g.current===!0&&!Ln(v.current,c.initialErrors)&&(v.current=c.initialErrors||rr,C({type:"SET_ERRORS",payload:c.initialErrors||rr}))},[u,c.initialErrors]),E.useEffect(function(){u&&g.current===!0&&!Ln(w.current,c.initialTouched)&&(w.current=c.initialTouched||$a,C({type:"SET_TOUCHED",payload:c.initialTouched||$a}))},[u,c.initialTouched]),E.useEffect(function(){u&&g.current===!0&&!Ln(b.current,c.initialStatus)&&(b.current=c.initialStatus,C({type:"SET_STATUS",payload:c.initialStatus}))},[u,c.initialStatus,c.initialTouched]);var R=Ct(function(j){if(p.current[j]&&Be(p.current[j].validate)){var H=xe($.values,j),q=p.current[j].validate(H);return Fu(q)?(C({type:"SET_ISVALIDATING",payload:!0}),q.then(function(G){return G}).then(function(G){C({type:"SET_FIELD_ERROR",payload:{field:j,value:G}}),C({type:"SET_ISVALIDATING",payload:!1})})):(C({type:"SET_FIELD_ERROR",payload:{field:j,value:q}}),Promise.resolve(q))}else if(c.validationSchema)return C({type:"SET_ISVALIDATING",payload:!0}),P($.values,j).then(function(G){return G}).then(function(G){C({type:"SET_FIELD_ERROR",payload:{field:j,value:xe(G,j)}}),C({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),W=E.useCallback(function(j,H){var q=H.validate;p.current[j]={validate:q}},[]),Y=E.useCallback(function(j){delete p.current[j]},[]),I=Ct(function(j,H){C({type:"SET_TOUCHED",payload:j});var q=H===void 0?i:H;return q?A($.values):Promise.resolve()}),N=E.useCallback(function(j){C({type:"SET_ERRORS",payload:j})},[]),V=Ct(function(j,H){var q=Be(j)?j($.values):j;C({type:"SET_VALUES",payload:q});var G=H===void 0?n:H;return G?A(q):Promise.resolve()}),J=E.useCallback(function(j,H){C({type:"SET_FIELD_ERROR",payload:{field:j,value:H}})},[]),Q=Ct(function(j,H,q){C({type:"SET_FIELD_VALUE",payload:{field:j,value:H}});var G=q===void 0?n:q;return G?A(tn($.values,j,H)):Promise.resolve()}),kt=E.useCallback(function(j,H){var q=H,G=j,te;if(!Iu(j)){j.persist&&j.persist();var le=j.target?j.target:j.currentTarget,Fe=le.type,an=le.name,Nl=le.id,Al=le.value,ux=le.checked,uF=le.outerHTML,kp=le.options,cx=le.multiple;q=H||an||Nl,G=/number|range/.test(Fe)?(te=parseFloat(Al),isNaN(te)?"":te):/checkbox/.test(Fe)?E3(xe($.values,q),ux,Al):kp&&cx?C3(kp):Al}q&&Q(q,G)},[Q,$.values]),Oe=Ct(function(j){if(Iu(j))return function(H){return kt(H,j)};kt(j)}),Je=Ct(function(j,H,q){H===void 0&&(H=!0),C({type:"SET_FIELD_TOUCHED",payload:{field:j,value:H}});var G=q===void 0?i:q;return G?A($.values):Promise.resolve()}),qe=E.useCallback(function(j,H){j.persist&&j.persist();var q=j.target,G=q.name,te=q.id,le=q.outerHTML,Fe=H||G||te;Je(Fe,!0)},[Je]),dt=Ct(function(j){if(Iu(j))return function(H){return qe(H,j)};qe(j)}),$n=E.useCallback(function(j){Be(j)?C({type:"SET_FORMIK_STATE",payload:j}):C({type:"SET_FORMIK_STATE",payload:function(){return j}})},[]),qt=E.useCallback(function(j){C({type:"SET_STATUS",payload:j})},[]),zr=E.useCallback(function(j){C({type:"SET_ISSUBMITTING",payload:j})},[]),kn=Ct(function(){return C({type:"SUBMIT_ATTEMPT"}),A().then(function(j){var H=j instanceof Error,q=!H&&Object.keys(j).length===0;if(q){var G;try{if(G=nx(),G===void 0)return}catch(te){throw te}return Promise.resolve(G).then(function(te){return g.current&&C({type:"SUBMIT_SUCCESS"}),te}).catch(function(te){if(g.current)throw C({type:"SUBMIT_FAILURE"}),te})}else if(g.current&&(C({type:"SUBMIT_FAILURE"}),H))throw j})}),Gt=Ct(function(j){j&&j.preventDefault&&Be(j.preventDefault)&&j.preventDefault(),j&&j.stopPropagation&&Be(j.stopPropagation)&&j.stopPropagation(),kn().catch(function(H){console.warn("Warning: An unhandled error was caught from submitForm()",H)})}),$p={resetForm:T,validateForm:A,validateField:R,setErrors:N,setFieldError:J,setFieldTouched:Je,setFieldValue:Q,setStatus:qt,setSubmitting:zr,setTouched:I,setValues:V,setFormikState:$n,submitForm:kn},nx=Ct(function(){return f($.values,$p)}),rx=Ct(function(j){j&&j.preventDefault&&Be(j.preventDefault)&&j.preventDefault(),j&&j.stopPropagation&&Be(j.stopPropagation)&&j.stopPropagation(),T()}),ix=E.useCallback(function(j){return{value:xe($.values,j),error:xe($.errors,j),touched:!!xe($.touched,j),initialValue:xe(y.current,j),initialTouched:!!xe(w.current,j),initialError:xe(v.current,j)}},[$.errors,$.touched,$.values]),ox=E.useCallback(function(j){return{setValue:function(q,G){return Q(j,q,G)},setTouched:function(q,G){return Je(j,q,G)},setError:function(q){return J(j,q)}}},[Q,Je,J]),ax=E.useCallback(function(j){var H=Zo(j),q=H?j.name:j,G=xe($.values,q),te={name:q,value:G,onChange:Oe,onBlur:dt};if(H){var le=j.type,Fe=j.value,an=j.as,Nl=j.multiple;le==="checkbox"?Fe===void 0?te.checked=!!G:(te.checked=!!(Array.isArray(G)&&~G.indexOf(Fe)),te.value=Fe):le==="radio"?(te.checked=G===Fe,te.value=Fe):an==="select"&&Nl&&(te.value=te.value||[],te.multiple=!0)}return te},[dt,Oe,$.values]),Fl=E.useMemo(function(){return!Ln(y.current,$.values)},[y.current,$.values]),sx=E.useMemo(function(){return typeof s<"u"?Fl?$.errors&&Object.keys($.errors).length===0:s!==!1&&Be(s)?s(c):s:$.errors&&Object.keys($.errors).length===0},[s,Fl,$.errors,c]),lx=ue({},$,{initialValues:y.current,initialErrors:v.current,initialTouched:w.current,initialStatus:b.current,handleBlur:dt,handleChange:Oe,handleReset:rx,handleSubmit:Gt,resetForm:T,setErrors:N,setFormikState:$n,setFieldTouched:Je,setFieldValue:Q,setFieldError:J,setStatus:qt,setSubmitting:zr,setTouched:I,setValues:V,submitForm:kn,validateForm:A,validateField:R,isValid:sx,dirty:Fl,unregisterField:Y,registerField:W,getFieldProps:ax,getFieldMeta:ix,getFieldHelpers:ox,validateOnBlur:i,validateOnChange:n,validateOnMount:a});return lx}function S3(e){var t=x3(e),n=e.component,r=e.children,i=e.render,o=e.innerRef;return E.useImperativeHandle(o,function(){return t}),E.createElement(m3,{value:t},n?E.createElement(n,t):i?i(t):r?Be(r)?r(t):B1(r)?null:E.Children.only(r):null)}function b3(e){var t={};if(e.inner){if(e.inner.length===0)return tn(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var o;if(n){if(r>=i.length)break;o=i[r++]}else{if(r=i.next(),r.done)break;o=r.value}var a=o;xe(t,a.path)||(t=tn(t,a.path,a.message))}}return t}function $3(e,t,n,r){n===void 0&&(n=!1);var i=bd(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function bd(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||gm(i)?bd(i):i!==""?i:void 0}):gm(e[r])?t[r]=bd(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function k3(e,t,n){var r=e.slice();return t.forEach(function(o,a){if(typeof r[a]>"u"){var s=n.clone!==!1,l=s&&n.isMergeableObject(o);r[a]=l?md(Array.isArray(o)?[]:{},o,n):o}else n.isMergeableObject(o)?r[a]=md(e[a],o,n):e.indexOf(o)===-1&&r.push(o)}),r}function C3(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function E3(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,o=-1;if(Array.isArray(e))r=e,o=e.indexOf(n),i=o>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,o).concat(r.slice(o+1)):r}var O3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?E.useLayoutEffect:E.useEffect;function Ct(e){var t=E.useRef(e);return O3(function(){t.current=e}),E.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}function _3(e){var t=e.validate,n=e.name,r=e.render,i=e.children,o=e.as,a=e.component,s=Dn(e,["validate","name","render","children","as","component"]),l=H1(),u=Dn(l,["validate","validationSchema"]),f=u.registerField,d=u.unregisterField;E.useEffect(function(){return f(n,{validate:t}),function(){d(n)}},[f,d,n,t]);var c=u.getFieldProps(ue({name:n},s)),y=u.getFieldMeta(n),v={field:c,form:u};if(r)return r(ue({},v,{meta:y}));if(Be(i))return i(ue({},v,{meta:y}));if(a){if(typeof a=="string"){var w=s.innerRef,b=Dn(s,["innerRef"]);return E.createElement(a,ue({ref:w},c,b),i)}return E.createElement(a,ue({field:c,form:u},s),i)}var g=o||"input";if(typeof g=="string"){var p=s.innerRef,m=Dn(s,["innerRef"]);return E.createElement(g,ue({ref:p},c,m),i)}return E.createElement(g,ue({},c,s),i)}var V1=E.forwardRef(function(e,t){var n=e.action,r=Dn(e,["action"]),i=n??"#",o=H1(),a=o.handleReset,s=o.handleSubmit;return E.createElement("form",ue({onSubmit:s,ref:t,onReset:a,action:i},r))});V1.displayName="Form";function T3(e){var t=function(i){return E.createElement(v3,null,function(o){return o||p1(!1),E.createElement(e,ue({},i,{formik:o}))})},n=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+n+")",f3(t,e)}var j3=function(t,n,r){var i=Or(t),o=i[n];return i.splice(n,1),i.splice(r,0,o),i},P3=function(t,n,r){var i=Or(t),o=i[n];return i[n]=i[r],i[r]=o,i},Nu=function(t,n,r){var i=Or(t);return i.splice(n,0,r),i},L3=function(t,n,r){var i=Or(t);return i[n]=r,i},Or=function(t){if(t){if(Array.isArray(t))return[].concat(t);var n=Object.keys(t).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(ue({},t,{length:n+1}))}else return[]},Gm=function(t,n){var r=typeof t=="function"?t:n;return function(i){if(Array.isArray(i)||Zo(i)){var o=Or(i);return r(o)}return i}},R3=function(e){U1(t,e);function t(r){var i;return i=e.call(this,r)||this,i.updateArrayField=function(o,a,s){var l=i.props,u=l.name,f=l.formik.setFormikState;f(function(d){var c=Gm(s,o),y=Gm(a,o),v=tn(d.values,u,o(xe(d.values,u))),w=s?c(xe(d.errors,u)):void 0,b=a?y(xe(d.touched,u)):void 0;return qm(w)&&(w=void 0),qm(b)&&(b=void 0),ue({},d,{values:v,errors:s?tn(d.errors,u,w):d.errors,touched:a?tn(d.touched,u,b):d.touched})})},i.push=function(o){return i.updateArrayField(function(a){return[].concat(Or(a),[g3(o)])},!1,!1)},i.handlePush=function(o){return function(){return i.push(o)}},i.swap=function(o,a){return i.updateArrayField(function(s){return P3(s,o,a)},!0,!0)},i.handleSwap=function(o,a){return function(){return i.swap(o,a)}},i.move=function(o,a){return i.updateArrayField(function(s){return j3(s,o,a)},!0,!0)},i.handleMove=function(o,a){return function(){return i.move(o,a)}},i.insert=function(o,a){return i.updateArrayField(function(s){return Nu(s,o,a)},function(s){return Nu(s,o,null)},function(s){return Nu(s,o,null)})},i.handleInsert=function(o,a){return function(){return i.insert(o,a)}},i.replace=function(o,a){return i.updateArrayField(function(s){return L3(s,o,a)},!1,!1)},i.handleReplace=function(o,a){return function(){return i.replace(o,a)}},i.unshift=function(o){var a=-1;return i.updateArrayField(function(s){var l=s?[o].concat(s):[o];return a=l.length,l},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),a},i.handleUnshift=function(o){return function(){return i.unshift(o)}},i.handleRemove=function(o){return function(){return i.remove(o)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(Vm(i)),i.pop=i.pop.bind(Vm(i)),i}var n=t.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!Ln(xe(i.formik.values,i.name),xe(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var o;return this.updateArrayField(function(a){var s=a?Or(a):[];return o||(o=s[i]),Be(s.splice)&&s.splice(i,1),Be(s.every)&&s.every(function(l){return l===void 0})?[]:s},!0,!0),o},n.pop=function(){var i;return this.updateArrayField(function(o){var a=o.slice();return i||(i=a&&a.pop&&a.pop()),a},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,a=o.component,s=o.render,l=o.children,u=o.name,f=o.formik,d=Dn(f,["validate","validationSchema"]),c=ue({},i,{form:d,name:u});return a?E.createElement(a,c):s?s(c):l?typeof l=="function"?l(c):B1(l)?null:E.Children.only(l):null},t}(E.Component);R3.defaultProps={validateOnChange:!0};var I3=function(e){U1(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.shouldComponentUpdate=function(i){return xe(this.props.formik.errors,this.props.name)!==xe(i.formik.errors,this.props.name)||xe(this.props.formik.touched,this.props.name)!==xe(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,o=i.component,a=i.formik,s=i.render,l=i.children,u=i.name,f=Dn(i,["component","formik","render","children","name"]),d=xe(a.touched,u),c=xe(a.errors,u);return d&&c?s?Be(s)?s(c):null:l?Be(l)?l(c):null:o?E.createElement(o,f,c):c:null},t}(E.Component),F3=T3(I3);function Nr(e){this._maxSize=e,this.clear()}Nr.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Nr.prototype.get=function(e){return this._values[e]};Nr.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var N3=/[^.^\]^[]+|(?=\[\]|\.\.)/g,q1=/^\d+$/,A3=/^\d/,z3=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,D3=/^\s*(['"]?)(.*?)(\1)\s*$/,mp=512,Km=new Nr(mp),Qm=new Nr(mp),Ym=new Nr(mp),yr={Cache:Nr,split:$d,normalizePath:Au,setter:function(e){var t=Au(e);return Qm.get(e)||Qm.set(e,function(r,i){for(var o=0,a=t.length,s=r;o<a-1;){var l=t[o];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;s=s[t[o++]]}s[t[o]]=i})},getter:function(e,t){var n=Au(e);return Ym.get(e)||Ym.set(e,function(i){for(var o=0,a=n.length;o<a;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(vp(n)||q1.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){M3(Array.isArray(e)?e:$d(e),t,n)}};function Au(e){return Km.get(e)||Km.set(e,$d(e).map(function(t){return t.replace(D3,"$2")}))}function $d(e){return e.match(N3)||[""]}function M3(e,t,n){var r=e.length,i,o,a,s;for(o=0;o<r;o++)i=e[o],i&&(B3(i)&&(i='"'+i+'"'),s=vp(i),a=!s&&/^\d+$/.test(i),t.call(n,i,s,a,o,e))}function vp(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function U3(e){return e.match(A3)&&!e.match(q1)}function H3(e){return z3.test(e)}function B3(e){return!vp(e)&&(U3(e)||H3(e))}const W3=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Pl=e=>e.match(W3)||[],Ll=e=>e[0].toUpperCase()+e.slice(1),yp=(e,t)=>Pl(e).join(t).toLowerCase(),G1=e=>Pl(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),V3=e=>Ll(G1(e)),q3=e=>yp(e,"_"),G3=e=>yp(e,"-"),K3=e=>Ll(yp(e," ")),Q3=e=>Pl(e).map(Ll).join(" ");var zu={words:Pl,upperFirst:Ll,camelCase:G1,pascalCase:V3,snakeCase:q3,kebabCase:G3,sentenceCase:K3,titleCase:Q3},wp={exports:{}};wp.exports=function(e){return K1(Y3(e),e)};wp.exports.array=K1;function K1(e,t){var n=e.length,r=new Array(n),i={},o=n,a=X3(t),s=J3(e);for(t.forEach(function(u){if(!s.has(u[0])||!s.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||l(e[o],o,new Set);return r;function l(u,f,d){if(d.has(u)){var c;try{c=", node was:"+JSON.stringify(u)}catch{c=""}throw new Error("Cyclic dependency"+c)}if(!s.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[f]){i[f]=!0;var y=a.get(u)||new Set;if(y=Array.from(y),f=y.length){d.add(u);do{var v=y[--f];l(v,s.get(v),d)}while(f);d.delete(u)}r[--n]=u}}}function Y3(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function X3(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function J3(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var Z3=wp.exports;const eI=_r(Z3),tI=Object.prototype.toString,nI=Error.prototype.toString,rI=RegExp.prototype.toString,iI=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",oI=/^Symbol\((.*)\)(.*)$/;function aI(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Xm(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return aI(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return iI.call(e).replace(oI,"Symbol($1)");const r=tI.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+nI.call(e)+"]":r==="RegExp"?rI.call(e):null}function hi(e,t){let n=Xm(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=Xm(this[r],t);return o!==null?o:i},2)}function Q1(e){return e==null?[]:[].concat(e)}let sI=/\$\{\s*(\w+)\s*\}/g;class pt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(sI,(i,o)=>hi(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Q1(t).forEach(o=>{pt.isError(o)?(this.errors.push(...o.errors),this.inner=this.inner.concat(o.inner.length?o.inner:o)):this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,pt)}}let cn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${hi(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${hi(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${hi(n,!0)}\``+i}},Nt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},lI={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},kd={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},uI={isValue:"${path} field must be ${value}"},Cd={noUnknown:"${path} field has unspecified keys: ${unknown}"},cI={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:cn,string:Nt,number:lI,date:kd,object:Cd,array:cI,boolean:uI});const xp=e=>e&&e.__isYupSchema__;class As{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,a=typeof r=="function"?r:(...s)=>s.every(l=>l===r);return new As(t,(s,l)=>{var u;let f=a(...s)?i:o;return(u=f==null?void 0:f(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!xp(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const ka={context:"$",value:"."};class Ar{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===ka.context,this.isValue=this.key[0]===ka.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?ka.context:this.isValue?ka.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&yr.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Ar.prototype.__isYupRef=!0;const fr=e=>e==null;function Br(e){function t({value:n,path:r="",options:i,originalValue:o,schema:a},s,l){const{name:u,test:f,params:d,message:c,skipAbsent:y}=e;let{parent:v,context:w,abortEarly:b=a.spec.abortEarly}=i;function g(L){return Ar.isRef(L)?L.getValue(n,v,w):L}function p(L={}){const D=Object.assign({value:n,originalValue:o,label:a.spec.label,path:L.path||r,spec:a.spec},d,L.params);for(const A of Object.keys(D))D[A]=g(D[A]);const U=new pt(pt.formatError(L.message||c,D),n,D.path,L.type||u);return U.params=D,U}const m=b?s:l;let S={path:r,parent:v,type:u,from:i.from,createError:p,resolve:g,options:i,originalValue:o,schema:a};const O=L=>{pt.isError(L)?m(L):L?l(null):m(p())},$=L=>{pt.isError(L)?m(L):s(L)},C=y&&fr(n);if(!i.sync){try{Promise.resolve(C?!0:f.call(S,n,S)).then(O,$)}catch(L){$(L)}return}let _;try{var P;if(_=C?!0:f.call(S,n,S),typeof((P=_)==null?void 0:P.then)=="function")throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(L){$(L);return}O(_)}return t.OPTIONS=e,t}function dI(e,t,n,r=n){let i,o,a;return t?(yr.forEach(t,(s,l,u)=>{let f=l?s.slice(1,s.length-1):s;e=e.resolve({context:r,parent:i,value:n});let d=e.type==="tuple",c=u?parseInt(f,10):0;if(e.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&c>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[c],e=d?e.spec.types[c]:e.innerType}if(!u){if(!e.fields||!e.fields[f])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=n,n=n&&n[f],e=e.fields[f]}o=f,a=l?"["+s+"]":"."+s}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class zs extends Set{describe(){const t=[];for(const n of this.values())t.push(Ar.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new zs(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ai(e,t=new Map){if(xp(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=ai(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,ai(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(ai(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=ai(i,t)}else throw Error(`Unable to clone ${e}`);return n}class nn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new zs,this._blacklist=new zs,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(cn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ai(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&fr(o))return o;let a=hi(t),s=hi(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:o,originalValue:a=t,strict:s=this.spec.strict}=n,l=t;s||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let f of Object.values(this.internalTests))f&&u.push(f);this.runTests({path:o,value:l,originalValue:a,options:n,tests:u},r,f=>{if(f.length)return i(f,l);this.runTests({path:o,value:l,originalValue:a,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:a,originalValue:s,path:l,options:u}=t,f=w=>{i||(i=!0,n(w,a))},d=w=>{i||(i=!0,r(w,a))},c=o.length,y=[];if(!c)return d([]);let v={value:a,originalValue:s,path:l,options:u,schema:this};for(let w=0;w<o.length;w++){const b=o[w];b(v,f,function(p){p&&(y=y.concat(p)),--c<=0&&d(y)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:a}){const s=t??n;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof s=="number";let u=r[s];const f=Object.assign({},a,{strict:!0,parent:r,value:u,originalValue:o[s],key:void 0,[l?"index":"key"]:s,path:l||s.includes(".")?`${i||""}[${u?s:`"${s}"`}]`:(i?`${i}.`:"")+t});return(d,c,y)=>this.resolve(f)._validate(u,f,c,y)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((i,o)=>r._validate(t,n,(a,s)=>{pt.isError(a)&&(a.value=s),o(a)},(a,s)=>{a.length?o(new pt(a,s)):i(s)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),i;return r._validate(t,Object.assign({},n,{sync:!0}),(o,a)=>{throw pt.isError(o)&&(o.value=a),o},(o,a)=>{if(o.length)throw new pt(o,t);i=a}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(pt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(pt.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):ai(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Br({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Br({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=cn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=cn.notNull){return this.nullability(!1,t)}required(t=cn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=cn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Br(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=Q1(t).map(o=>new Ar(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new As(i,n):As.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Br({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=cn.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Br({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),r}notOneOf(t,n=cn.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Br({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:a}=n.spec;return{meta:i,label:r,optional:o,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,f)=>f.findIndex(d=>d.name===l.name)===u)}}}nn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])nn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:a}=dI(this,t,n,r.context);return a[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])nn.prototype[e]=nn.prototype.oneOf;for(const e of["not","nope"])nn.prototype[e]=nn.prototype.notOneOf;let fI=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,pI=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,hI=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,gI=e=>fr(e)||e===e.trim(),mI={}.toString();function Y1(){return new X1}class X1 extends nn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===mI?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||cn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=Nt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=Nt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=Nt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||Nt.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=Nt.email){return this.matches(fI,{name:"email",message:t,excludeEmptyString:!0})}url(t=Nt.url){return this.matches(pI,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Nt.uuid){return this.matches(hI,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Nt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:gI})}lowercase(t=Nt.lowercase){return this.transform(n=>fr(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>fr(n)||n===n.toLowerCase()})}uppercase(t=Nt.uppercase){return this.transform(n=>fr(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>fr(n)||n===n.toUpperCase()})}}Y1.prototype=X1.prototype;var vI=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function yI(e){var t=[1,4,5,6,7,10,11],n=0,r,i;if(i=vI.exec(e)){for(var o=0,a;a=t[o];++o)i[a]=+i[a]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?r=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(n=i[10]*60+i[11],i[9]==="+"&&(n=0-n)),r=Date.UTC(i[1],i[2],i[3],i[4],i[5]+n,i[6],i[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let wI=new Date(""),xI=e=>Object.prototype.toString.call(e)==="[object Date]";class Rl extends nn{constructor(){super({type:"date",check(t){return xI(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=yI(t),isNaN(t)?Rl.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Ar.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=kd.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=kd.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Rl.INVALID_DATE=wI;Rl.prototype;function SI(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([a,s])=>`${a}-${s}`));function o(a,s){let l=yr.split(a)[0];r.add(l),i.has(`${s}-${l}`)||n.push([s,l])}for(const a of Object.keys(e)){let s=e[a];r.add(a),Ar.isRef(s)&&s.isSibling?o(s.path,a):xp(s)&&"deps"in s&&s.deps.forEach(l=>o(l,a))}return eI.array(Array.from(r),n).reverse()}function Jm(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function J1(e){return(t,n)=>Jm(e,t)-Jm(e,n)}const bI=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function Ua(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Ua(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Ua(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Ua)}):"optional"in e?e.optional():e}const $I=(e,t)=>{const n=[...yr.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=yr.getter(yr.join(n),!0)(e);return!!(i&&r in i)};let Zm=e=>Object.prototype.toString.call(e)==="[object Object]";function kI(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const CI=J1([]);function Z1(e){return new ex(e)}class ex extends nn{constructor(t){super({type:"object",check(n){return Zm(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=CI,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let o=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,s=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),f=!1;for(const d of s){let c=o[d],y=d in i;if(c){let v,w=i[d];u.path=(n.path?`${n.path}.`:"")+d,c=c.resolve({value:w,context:n.context,parent:l});let b=c instanceof nn?c.spec:void 0,g=b==null?void 0:b.strict;if(b!=null&&b.strip){f=f||d in i;continue}v=!n.__validating||!g?c.cast(i[d],u):i[d],v!==void 0&&(l[d]=v)}else y&&!a&&(l[d]=i[d]);(y!==d in l||l[d]!==i[d])&&(f=!0)}return f?l:i}_validate(t,n={},r,i){let{from:o=[],originalValue:a=t,recursive:s=this.spec.recursive}=n;n.from=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(l,u)=>{if(!s||!Zm(u)){i(l,u);return}a=a||u;let f=[];for(let d of this._nodes){let c=this.fields[d];!c||Ar.isRef(c)||f.push(c.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:a}))}this.runTests({tests:f,value:u,originalValue:a,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const a=r[i];r[i]=a===void 0?o:a}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const o=this.fields[r];let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),n[r]=o&&"getDefault"in o?o.getDefault(a):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=SI(t,n),r._sortErrors=J1(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return Ua(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n)}omit(t){const n=Object.assign({},this.fields);for(const r of t)delete n[r];return this.setFields(n)}from(t,n,r){let i=yr.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return $I(o,t)&&(a=Object.assign({},o),r||delete a[t],a[n]=i(o)),a})}json(){return this.transform(bI)}noUnknown(t=!0,n=Cd.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=kI(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Cd.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(zu.camelCase)}snakeCase(){return this.transformKeys(zu.snakeCase)}constantCase(){return this.transformKeys(t=>zu.snakeCase(t).toUpperCase())}describe(t){let n=super.describe(t);n.fields={};for(const[i,o]of Object.entries(this.fields)){var r;let a=t;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),n.fields[i]=o.describe(a)}return n}}Z1.prototype=ex.prototype;var Ed={exports:{}},Od={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function n(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(a){return typeof a}:n=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n(i)}function r(i){var o=typeof i=="string"||i instanceof String;if(!o){var a=n(i);throw i===null?a="null":a==="object"&&(a=i.constructor.name),new TypeError("Expected a string but received a ".concat(a))}}e.exports=t.default,e.exports.default=t.default})(Od,Od.exports);var Il=Od.exports,_d={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=r(Il);function r(a){return a&&a.__esModule?a:{default:a}}function i(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(l){return typeof l}:i=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},i(a)}function o(a,s){(0,n.default)(a);var l,u;i(s)==="object"?(l=s.min||0,u=s.max):(l=arguments[1],u=arguments[2]);var f=encodeURI(a).split(/%..|./).length-1;return f>=l&&(typeof u>"u"||f<=u)}e.exports=t.default,e.exports.default=t.default})(_d,_d.exports);var EI=_d.exports,Td={exports:{}},jd={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;for(var o in i)typeof r[o]>"u"&&(r[o]=i[o]);return r}e.exports=t.default,e.exports.default=t.default})(jd,jd.exports);var tx=jd.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var n=i(Il),r=i(tx);function i(s){return s&&s.__esModule?s:{default:s}}var o={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function a(s,l){(0,n.default)(s),l=(0,r.default)(l,o),l.allow_trailing_dot&&s[s.length-1]==="."&&(s=s.substring(0,s.length-1)),l.allow_wildcard===!0&&s.indexOf("*.")===0&&(s=s.substring(2));var u=s.split("."),f=u[u.length-1];return l.require_tld&&(u.length<2||!l.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(f)||/\s/.test(f))||!l.allow_numeric_tld&&/^\d+$/.test(f)?!1:u.every(function(d){return!(d.length>63&&!l.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(d)||/[\uff01-\uff5e]/.test(d)||/^-|-$/.test(d)||!l.allow_underscores&&/_/.test(d))})}e.exports=t.default,e.exports.default=t.default})(Td,Td.exports);var OI=Td.exports,Pd={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n=r(Il);function r(f){return f&&f.__esModule?f:{default:f}}var i="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",o="(".concat(i,"[.]){3}").concat(i),a=new RegExp("^".concat(o,"$")),s="(?:[0-9a-fA-F]{1,4})",l=new RegExp("^("+"(?:".concat(s,":){7}(?:").concat(s,"|:)|")+"(?:".concat(s,":){6}(?:").concat(o,"|:").concat(s,"|:)|")+"(?:".concat(s,":){5}(?::").concat(o,"|(:").concat(s,"){1,2}|:)|")+"(?:".concat(s,":){4}(?:(:").concat(s,"){0,1}:").concat(o,"|(:").concat(s,"){1,3}|:)|")+"(?:".concat(s,":){3}(?:(:").concat(s,"){0,2}:").concat(o,"|(:").concat(s,"){1,4}|:)|")+"(?:".concat(s,":){2}(?:(:").concat(s,"){0,3}:").concat(o,"|(:").concat(s,"){1,5}|:)|")+"(?:".concat(s,":){1}(?:(:").concat(s,"){0,4}:").concat(o,"|(:").concat(s,"){1,6}|:)|")+"(?::((?::".concat(s,"){0,5}:").concat(o,"|(?::").concat(s,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function u(f){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,n.default)(f),d=String(d),d?d==="4"?a.test(f):d==="6"?l.test(f):!1:u(f,4)||u(f,6)}e.exports=t.default,e.exports.default=t.default})(Pd,Pd.exports);var _I=Pd.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=g;var n=s(Il),r=s(EI),i=s(OI),o=s(_I),a=s(tx);function s(p){return p&&p.__esModule?p:{default:p}}var l={allow_display_name:!1,allow_underscores:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},u=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,f=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,d=/^[a-z\d]+$/,c=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,y=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,v=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,w=254;function b(p){var m=p.replace(/^"(.+)"$/,"$1");if(!m.trim())return!1;var S=/[\.";<>]/.test(m);if(S){if(m===p)return!1;var O=m.split('"').length===m.split('\\"').length;if(!O)return!1}return!0}function g(p,m){if((0,n.default)(p),m=(0,a.default)(m,l),m.require_display_name||m.allow_display_name){var S=p.match(u);if(S){var O=S[1];if(p=p.replace(O,"").replace(/(^<|>$)/g,""),O.endsWith(" ")&&(O=O.slice(0,-1)),!b(O))return!1}else if(m.require_display_name)return!1}if(!m.ignore_max_length&&p.length>w)return!1;var $=p.split("@"),C=$.pop(),_=C.toLowerCase();if(m.host_blacklist.includes(_)||m.host_whitelist.length>0&&!m.host_whitelist.includes(_))return!1;var P=$.join("@");if(m.domain_specific_validation&&(_==="gmail.com"||_==="googlemail.com")){P=P.toLowerCase();var L=P.split("+")[0];if(!(0,r.default)(L.replace(/\./g,""),{min:6,max:30}))return!1;for(var D=L.split("."),U=0;U<D.length;U++)if(!d.test(D[U]))return!1}if(m.ignore_max_length===!1&&(!(0,r.default)(P,{max:64})||!(0,r.default)(C,{max:254})))return!1;if(!(0,i.default)(C,{require_tld:m.require_tld,ignore_max_length:m.ignore_max_length,allow_underscores:m.allow_underscores})){if(!m.allow_ip_domain)return!1;if(!(0,o.default)(C)){if(!C.startsWith("[")||!C.endsWith("]"))return!1;var A=C.slice(1,-1);if(A.length===0||!(0,o.default)(A))return!1}}if(P[0]==='"')return P=P.slice(1,P.length-1),m.allow_utf8_local_part?v.test(P):c.test(P);for(var T=m.allow_utf8_local_part?y:f,R=P.split("."),W=0;W<R.length;W++)if(!T.test(R[W]))return!1;return!(m.blacklisted_chars&&P.search(new RegExp("[".concat(m.blacklisted_chars,"]+"),"g"))!==-1)}e.exports=t.default,e.exports.default=t.default})(Ed,Ed.exports);var TI=Ed.exports;const jI=_r(TI),{whiteColor:PI,greenColor:LI,lightGreenColor:RI,inputColor:II,smallNewsColor:FI,redColor:NI,blackColor:AI}=ae,zI=x.div`
  width: calc(325vw / 14.4);

  @media (max-width: ${k}) {
    width: calc(325vw / 5.09);
  }
`,DI=x(bt)`
  text-align: left;
  padding: 3.2vw 0 1.6vw 1vw;
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.5px;

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.09);
  }
`,MI=x(it)`
  width: 100%;
  color: ${PI};
  border-radius: 5px;
  padding: 0.9vw 2vw;
  background: linear-gradient(
    137deg,
    ${LI} 0%,
    ${RI} 100%
  );
  ${It};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.42px;

  @media (max-width: ${k}) {
    color: rgba(255, 255, 255, 0.9);
    font-size: calc(14vw / 5.09);
    padding: 2.5vw 2vw;
  }
`,UI=x(_3)`
  box-sizing: border-box;
  ${ee};
  width: calc(325vw / 14.4);
  min-height: calc(54vw / 14.4);
  padding: 0 1.5vw;
  border-radius: 5px;
  border: none;
  background-color: ${II};
  ${fe};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.42px;

  @media (max-width: ${k}) {
    width: calc(325vw / 5.09);
    min-height: calc(45vw / 5.09);
    font-size: calc(14vw / 5.09);
  }

  &::placeholder {
    color: ${FI};
  }

  @media (max-width: ${k}) {
    min-height: calc(54vw / 5.09);
  }
`,HI=x(F3)`
  ${ee};
  color: ${NI};
  ${fe};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.42px;

  @media (max-width: ${k}) {
    font-size: calc(14vw / 5.09);
  }
`,BI=x.div`
  min-height: 1vw;

  @media (max-width: ${k}) {
    min-height: 5vw;
  }
`,WI=({subscribe:e})=>{const{title:t,placeholder:n,button:r,validation:i}=e,[o,a]=E.useState(!1),s={email:""},l=Z1({email:Y1().email(i.invalid).required(i.empty).test("is-valid",i.invalid,d=>(console.log("Validating email:",d),d?jI(d):!1))}),u=async(d,{resetForm:c})=>{a(!0),console.log(`добавить в рассылку ${d.email}`),await c()},f=()=>{console.log("форма успешно отправлена")};return h.jsxs(zI,{children:[h.jsx(DI,{color:AI,children:t}),h.jsx(S3,{initialValues:s,validationSchema:l,onSubmit:u,children:({isValid:d,isSubmitting:c})=>h.jsxs(V1,{children:[h.jsxs("div",{children:[h.jsx(UI,{type:"email",name:"email",placeholder:n,id:"email"}),h.jsx(BI,{children:h.jsx(HI,{name:"email",as:"div"})})]}),h.jsx("div",{children:h.jsx(MI,{type:"submit",disabled:!d&&o||c,onClick:f,children:r})})]})})]})},{smallNewsColor:Sp,largeNewsColor:VI,blackColor:qI,lineNewsColor:GI}=ae,KI=x.main`
  width: 100%;
`,QI=x.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: ${k}) {
    flex-direction: column;
    justify-content: center;
  }
`,YI=x.div`
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
`,XI=x.div`
  padding: 2.78vw 0 2.78vw 3vw;
  border-left: 2px solid ${GI};
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
`,JI=x.img`
  height: ${({size:e})=>e==="big"?"calc(399vw / 14.4)":"calc(154vw / 14.4)"};
  width: ${({size:e})=>e==="big"?"calc(880vw / 14.4)":"calc(325vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${k}) {
    height: ${({size:e})=>e==="big"?"calc(200vw / 5.08)":"calc(148vw / 5.08)"};
    width: ${({size:e})=>e==="big"?"calc(440vw / 5.08)":"calc(333vw / 5.08)"};
  }
`,bp=x.p`
  ${ee};
  ${fe};
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${k}) {
    font-size: calc(25vw / 5.09);
  }
`,ZI=x(bp)`
  padding-top: 0.5vw;
  color: ${Sp};
  font-size: calc(15vw / 14.4);

  @media (max-width: ${k}) {
    font-size: calc(15vw / 5.09);
  }
`,eF=x(bp)`
  margin-top: calc(29vw / 14.4);
  color: ${VI};
  font-size: calc(20vw / 14.4);

  @media (max-width: ${k}) {
    margin-top: calc(10vw / 5.09);
    font-size: calc(20vw / 5.09);
  }
`,tF=x.h1`
  ${ee};
  width: 100%;
  margin-bottom: calc(18vw / 14.4);
  ${({size:e})=>e==="big"?`${kr}`:`${It}`};
  color: ${({size:e})=>e==="big"?`${qI}`:`${Sp}`};
  font-size: ${({size:e})=>e==="big"?"calc(50vw / 14.4)":"calc(28vw / 14.4)"};
  text-align: left;
  ${kr};
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -1px;

  @media (max-width: ${k}) {
    margin-bottom: calc(10vw / 5.09);
    font-size: ${({size:e})=>e==="big"?"calc(30vw / 5.09)":"calc(23vw / 5.09)"};
  }
`,nF=x.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: calc(40vw / 14.4);

  @media (max-width: ${k}) {
    width: 86%;
  }
`,rF=x.div`
  width: calc(660vw / 14.4);

  @media (max-width: ${k}) {
    width: calc(320vw / 5.09);
  }
`,iF=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20vw;

  @media (max-width: ${k}) {
    width: 50vw;
  }
`,ev=x.div`
  display: flex;
  justify-content: center;
  align-items: end;
`,tv=x(bp)`
  padding-left: 0.5vw;
  color: ${Sp};
  font-size: calc(15vw / 14.4);
  line-height: 1;

  @media (max-width: ${k}) {
    font-size: calc(15vw / 5.09);
    padding-left: 1vw;
  }
`,nv=x.img`
  width: auto;
  height: calc(16vw / 14.4);

  @media (max-width: ${k}) {
    width: auto;
    height: calc(16vw / 5.09);
  }
`,oF=E.forwardRef(({notFoundRef:e},t)=>{const{t:n}=Rt(),r=Vt("News",n),{rating:i,navigation:o,subscribe:a,share:s,title:l,views:u,time:f}=r,{id:d}=jk();E.useEffect(()=>{console.log(`добавить просмотр новости с ${d}`)},[d]);const c=sd.find(g=>g.id===d);if(!c)return h.jsx(Gw,{ref:e});const y=sd.filter(g=>g.id!==d),v=c.text.split(" ").length,b=Math.ceil(v/250);return h.jsxs(KI,{ref:t,children:[h.jsx(Xf,{navigation:o}),h.jsxs(QI,{children:[h.jsxs(YI,{children:[h.jsx(JI,{size:"big",src:c.url,alt:c.title}),h.jsxs(nF,{children:[h.jsx(ZI,{children:c.date}),h.jsxs(rF,{children:[h.jsx(tF,{size:"big",children:c.title}),h.jsxs(iF,{children:[h.jsx(lP,{id:c.id,initialValue:c.rating,ratingData:i}),h.jsxs(ev,{children:[h.jsx(nv,{src:u.src,alt:u.alt}),h.jsx(tv,{children:c.views})]}),h.jsxs(ev,{children:[h.jsx(nv,{src:f.src,alt:f.alt}),h.jsxs(tv,{children:[b," ",r.time.text]})]})]}),h.jsx(eF,{children:c.text})]})]})]}),h.jsxs(XI,{children:[h.jsx(WI,{subscribe:a}),h.jsx(hP,{selectedNews:c,share:s}),h.jsx(kP,{news:y,title:l})]})]})]})}),aF=x.div`
  max-height: ${({$isBurgerMenuOpen:e,$containerHeight:t,$headerHeight:n,$isLanguagesOpen:r})=>(e||r)&&t<window.innerHeight?`calc(${window.innerHeight}px - ${n}px)`:(e||r)&&t>=window.innerHeight?`${t}px`:"auto"};
  overflow: ${({$isBurgerMenuOpen:e,$isLanguagesOpen:t})=>e||t?"clip":"auto"};
`,sF=()=>{const e=E.useRef(null),t=E.useRef(null),n=E.useRef(null),r=E.useRef(null),i=E.useRef(null),[o,a]=E.useState(null),[s,l]=E.useState(null),[u,f]=E.useState(0),[d,c]=E.useState(0),[y,v]=E.useState(0),[w,b]=E.useState(0),[g,p]=E.useState(0),{t:m}=Rt(),S=Vt("Sections",m);E.useEffect(()=>{document.documentElement.lang=De.language},[]),E.useEffect(()=>{const _=()=>{if(e.current){const P=e.current.clientHeight;f(P)}};return _(),window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_)}},[e,s,o]),E.useEffect(()=>{const _=()=>{if(t.current){const P=t.current.clientHeight;c(P)}};return _(),window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),c(0)}},[t,s,o]),E.useEffect(()=>{const _=()=>{if(n.current){const P=n.current.clientHeight;v(P)}};return _(),window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),v(0)}},[n,s,o]),E.useEffect(()=>{const _=()=>{if(r.current){const P=r.current.clientHeight;b(P)}};return _(),window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),b(0)}},[r,s,o]),E.useEffect(()=>{const _=()=>{if(i.current){const P=i.current.clientHeight;p(P)}};return _(),window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),p(0)}},[i,s,o]);const O=()=>{setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},300)},$=()=>{a(!o),s&&C(),o||O()},C=()=>{l(!s),s||O()};return h.jsx(qk,{basename:"/thoth/",children:h.jsxs(ek,{i18n:De,children:[h.jsx(hT,{}),h.jsx(Vj,{ref:e,headerHeight:u,isLanguagesOpen:o,isBurgerMenuOpen:s,languagesHandler:$,burgerMenuHandler:C,containerHeight:d||y||w||g,paymentFeesHeight:y,sections:S}),h.jsxs(aF,{className:"styled-container",$isBurgerMenuOpen:s,$containerHeight:d||y||w||g,$isLanguagesOpen:o,$headerHeight:u,children:[h.jsxs(Wk,{children:[h.jsx(Wr,{path:"/",element:h.jsx(V_,{mainScreenRef:t,sections:S})}),h.jsx(Wr,{path:"/payment-fees",element:h.jsx(pT,{ref:n})}),h.jsx(Wr,{path:"/faq",element:h.jsx(oP,{})}),h.jsx(Wr,{path:"/news/:id",element:h.jsx(oF,{ref:i,notFoundRef:r})}),h.jsx(Wr,{path:"*",element:h.jsx(Gw,{ref:r})})]}),h.jsx(iP,{})]})]})})};Du.createRoot(document.getElementById("root")).render(h.jsx(E.StrictMode,{children:h.jsx(sF,{})}))});export default lF();
//# sourceMappingURL=main-483d79ed.js.map
