(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Sg(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Op={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pi=Symbol.for("react.element"),xg=Symbol.for("react.portal"),kg=Symbol.for("react.fragment"),_g=Symbol.for("react.strict_mode"),$g=Symbol.for("react.profiler"),Cg=Symbol.for("react.provider"),Og=Symbol.for("react.context"),Eg=Symbol.for("react.forward_ref"),bg=Symbol.for("react.suspense"),Pg=Symbol.for("react.memo"),Tg=Symbol.for("react.lazy"),Yc=Symbol.iterator;function jg(e){return e===null||typeof e!="object"?null:(e=Yc&&e[Yc]||e["@@iterator"],typeof e=="function"?e:null)}var Ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bp=Object.assign,Pp={};function Or(e,t,n){this.props=e,this.context=t,this.refs=Pp,this.updater=n||Ep}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tp(){}Tp.prototype=Or.prototype;function Eu(e,t,n){this.props=e,this.context=t,this.refs=Pp,this.updater=n||Ep}var bu=Eu.prototype=new Tp;bu.constructor=Eu;bp(bu,Or.prototype);bu.isPureReactComponent=!0;var qc=Array.isArray,jp=Object.prototype.hasOwnProperty,Pu={current:null},zp={key:!0,ref:!0,__self:!0,__source:!0};function Lp(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)jp.call(t,r)&&!zp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Pi,type:e,key:o,ref:l,props:i,_owner:Pu.current}}function zg(e,t){return{$$typeof:Pi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pi}function Lg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xc=/\/+/g;function oa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lg(""+e.key):t.toString(36)}function yo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Pi:case xg:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+oa(l,0):r,qc(i)?(n="",e!=null&&(n=e.replace(Xc,"$&/")+"/"),yo(i,t,n,"",function(u){return u})):i!=null&&(Tu(i)&&(i=zg(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Xc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",qc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+oa(o,a);l+=yo(o,t,n,s,i)}else if(s=jg(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+oa(o,a++),l+=yo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ui(e,t,n){if(e==null)return e;var r=[],i=0;return yo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Mg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},wo={transition:null},Rg={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:wo,ReactCurrentOwner:Pu};W.Children={map:Ui,forEach:function(e,t,n){Ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ui(e,function(){t++}),t},toArray:function(e){return Ui(e,function(t){return t})||[]},only:function(e){if(!Tu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Or;W.Fragment=kg;W.Profiler=$g;W.PureComponent=Eu;W.StrictMode=_g;W.Suspense=bg;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rg;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bp({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Pu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)jp.call(t,s)&&!zp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Pi,type:e.type,key:i,ref:o,props:r,_owner:l}};W.createContext=function(e){return e={$$typeof:Og,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cg,_context:e},e.Consumer=e};W.createElement=Lp;W.createFactory=function(e){var t=Lp.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Eg,render:e}};W.isValidElement=Tu;W.lazy=function(e){return{$$typeof:Tg,_payload:{_status:-1,_result:e},_init:Mg}};W.memo=function(e,t){return{$$typeof:Pg,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=wo.transition;wo.transition={};try{e()}finally{wo.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return Ne.current.useCallback(e,t)};W.useContext=function(e){return Ne.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ne.current.useEffect(e,t)};W.useId=function(){return Ne.current.useId()};W.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ne.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};W.useRef=function(e){return Ne.current.useRef(e)};W.useState=function(e){return Ne.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ne.current.useTransition()};W.version="18.2.0";Op.exports=W;var Z=Op.exports;const xt=Cp(Z);var Mp={exports:{}},xl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig=Z,Ng=Symbol.for("react.element"),Dg=Symbol.for("react.fragment"),Ag=Object.prototype.hasOwnProperty,Hg=Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fg={key:!0,ref:!0,__self:!0,__source:!0};function Rp(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ag.call(t,r)&&!Fg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ng,type:e,key:o,ref:l,props:i,_owner:Hg.current}}xl.Fragment=Dg;xl.jsx=Rp;xl.jsxs=Rp;Mp.exports=xl;var d=Mp.exports,os={},Ip={exports:{}},Ke={},Np={exports:{}},Dp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,I){var D=j.length;j.push(I);e:for(;0<D;){var Y=D-1>>>1,U=j[Y];if(0<i(U,I))j[Y]=I,j[D]=U,D=Y;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var I=j[0],D=j.pop();if(D!==I){j[0]=D;e:for(var Y=0,U=j.length,bt=U>>>1;Y<bt;){var _e=2*(Y+1)-1,Wt=j[_e],Qe=_e+1,Pt=j[Qe];if(0>i(Wt,D))Qe<U&&0>i(Pt,Wt)?(j[Y]=Pt,j[Qe]=D,Y=Qe):(j[Y]=Wt,j[_e]=D,Y=_e);else if(Qe<U&&0>i(Pt,D))j[Y]=Pt,j[Qe]=D,Y=Qe;else break e}}return I}function i(j,I){var D=j.sortIndex-I.sortIndex;return D!==0?D:j.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],h=1,f=null,m=3,S=!1,x=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(j){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=j)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function g(j){if(y=!1,v(j),!x)if(n(s)!==null)x=!0,Le(_);else{var I=n(u);I!==null&&et(g,I.startTime-j)}}function _(j,I){x=!1,y&&(y=!1,p(C),C=-1),S=!0;var D=m;try{for(v(I),f=n(s);f!==null&&(!(f.expirationTime>I)||j&&!N());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,m=f.priorityLevel;var U=Y(f.expirationTime<=I);I=e.unstable_now(),typeof U=="function"?f.callback=U:f===n(s)&&r(s),v(I)}else r(s);f=n(s)}if(f!==null)var bt=!0;else{var _e=n(u);_e!==null&&et(g,_e.startTime-I),bt=!1}return bt}finally{f=null,m=D,S=!1}}var k=!1,$=null,C=-1,P=5,T=-1;function N(){return!(e.unstable_now()-T<P)}function R(){if($!==null){var j=e.unstable_now();T=j;var I=!0;try{I=$(!0,j)}finally{I?M():(k=!1,$=null)}}else k=!1}var M;if(typeof c=="function")M=function(){c(R)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,de=ze.port2;ze.port1.onmessage=R,M=function(){de.postMessage(null)}}else M=function(){E(R,0)};function Le(j){$=j,k||(k=!0,M())}function et(j,I){C=E(function(){j(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){x||S||(x=!0,Le(_))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var I=3;break;default:I=m}var D=m;m=I;try{return j()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,I){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var D=m;m=j;try{return I()}finally{m=D}},e.unstable_scheduleCallback=function(j,I,D){var Y=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Y+D:Y):D=Y,j){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=D+U,j={id:h++,callback:I,priorityLevel:j,startTime:D,expirationTime:U,sortIndex:-1},D>Y?(j.sortIndex=D,t(u,j),n(s)===null&&j===n(u)&&(y?(p(C),C=-1):y=!0,et(g,D-Y))):(j.sortIndex=U,t(s,j),x||S||(x=!0,Le(_))),j},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(j){var I=m;return function(){var D=m;m=I;try{return j.apply(this,arguments)}finally{m=D}}}})(Dp);Np.exports=Dp;var Bg=Np.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap=Z,Xe=Bg;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hp=new Set,si={};function Hn(e,t){fr(e,t),fr(e+"Capture",t)}function fr(e,t){for(si[e]=t,e=0;e<t.length;e++)Hp.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ls=Object.prototype.hasOwnProperty,Wg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kc={},Zc={};function Ug(e){return ls.call(Zc,e)?!0:ls.call(Kc,e)?!1:Wg.test(e)?Zc[e]=!0:(Kc[e]=!0,!1)}function Vg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qg(e,t,n,r){if(t===null||typeof t>"u"||Vg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var ju=/[\-:]([a-z])/g;function zu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ju,zu);Oe[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ju,zu);Oe[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ju,zu);Oe[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lu(e,t,n,r){var i=Oe.hasOwnProperty(t)?Oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qg(t,n,i,r)&&(n=null),r||i===null?Ug(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vi=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),Mu=Symbol.for("react.strict_mode"),as=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),Bp=Symbol.for("react.context"),Ru=Symbol.for("react.forward_ref"),ss=Symbol.for("react.suspense"),us=Symbol.for("react.suspense_list"),Iu=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),Wp=Symbol.for("react.offscreen"),Jc=Symbol.iterator;function Mr(e){return e===null||typeof e!="object"?null:(e=Jc&&e[Jc]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,la;function Ur(e){if(la===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);la=t&&t[1]||""}return`
`+la+e}var aa=!1;function sa(e,t){if(!e||aa)return"";aa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{aa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ur(e):""}function Gg(e){switch(e.tag){case 5:return Ur(e.type);case 16:return Ur("Lazy");case 13:return Ur("Suspense");case 19:return Ur("SuspenseList");case 0:case 2:case 15:return e=sa(e.type,!1),e;case 11:return e=sa(e.type.render,!1),e;case 1:return e=sa(e.type,!0),e;default:return""}}function cs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Vn:return"Portal";case as:return"Profiler";case Mu:return"StrictMode";case ss:return"Suspense";case us:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bp:return(e.displayName||"Context")+".Consumer";case Fp:return(e._context.displayName||"Context")+".Provider";case Ru:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Iu:return t=e.displayName||null,t!==null?t:cs(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return cs(e(t))}catch{}}return null}function Yg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cs(t);case 8:return t===Mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Up(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qg(e){var t=Up(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qi(e){e._valueTracker||(e._valueTracker=qg(e))}function Vp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Up(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ds(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ed(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qp(e,t){t=t.checked,t!=null&&Lu(e,"checked",t,!1)}function fs(e,t){Qp(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ps(e,t.type,n):t.hasOwnProperty("defaultValue")&&ps(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function td(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ps(e,t,n){(t!=="number"||Mo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vr=Array.isArray;function ir(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function hs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Vr(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function Gp(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gi,qp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gi=Gi||document.createElement("div"),Gi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ui(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xg=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){Xg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function Xp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function Kp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Kg=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ms(e,t){if(t){if(Kg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ys=null;function Nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,or=null,lr=null;function id(e){if(e=zi(e)){if(typeof ws!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Ol(t),ws(e.stateNode,e.type,t))}}function Zp(e){or?lr?lr.push(e):lr=[e]:or=e}function Jp(){if(or){var e=or,t=lr;if(lr=or=null,id(e),t)for(e=0;e<t.length;e++)id(t[e])}}function eh(e,t){return e(t)}function th(){}var ua=!1;function nh(e,t,n){if(ua)return e(t,n);ua=!0;try{return eh(e,t,n)}finally{ua=!1,(or!==null||lr!==null)&&(th(),Jp())}}function ci(e,t){var n=e.stateNode;if(n===null)return null;var r=Ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var Ss=!1;if(Nt)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{Ss=!1}function Zg(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Zr=!1,Ro=null,Io=!1,xs=null,Jg={onError:function(e){Zr=!0,Ro=e}};function ey(e,t,n,r,i,o,l,a,s){Zr=!1,Ro=null,Zg.apply(Jg,arguments)}function ty(e,t,n,r,i,o,l,a,s){if(ey.apply(this,arguments),Zr){if(Zr){var u=Ro;Zr=!1,Ro=null}else throw Error(b(198));Io||(Io=!0,xs=u)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function od(e){if(Fn(e)!==e)throw Error(b(188))}function ny(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return od(i),e;if(o===r)return od(i),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function ih(e){return e=ny(e),e!==null?oh(e):null}function oh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oh(e);if(t!==null)return t;e=e.sibling}return null}var lh=Xe.unstable_scheduleCallback,ld=Xe.unstable_cancelCallback,ry=Xe.unstable_shouldYield,iy=Xe.unstable_requestPaint,ve=Xe.unstable_now,oy=Xe.unstable_getCurrentPriorityLevel,Du=Xe.unstable_ImmediatePriority,ah=Xe.unstable_UserBlockingPriority,No=Xe.unstable_NormalPriority,ly=Xe.unstable_LowPriority,sh=Xe.unstable_IdlePriority,kl=null,_t=null;function ay(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:cy,sy=Math.log,uy=Math.LN2;function cy(e){return e>>>=0,e===0?32:31-(sy(e)/uy|0)|0}var Yi=64,qi=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Do(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Qr(a):(o&=l,o!==0&&(r=Qr(o)))}else l=n&~i,l!==0?r=Qr(l):o!==0&&(r=Qr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function dy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-pt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=dy(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uh(){var e=Yi;return Yi<<=1,!(Yi&4194240)&&(Yi=64),e}function ca(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ti(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function py(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Au(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var X=0;function ch(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dh,Hu,fh,ph,hh,_s=!1,Xi=[],ln=null,an=null,sn=null,di=new Map,fi=new Map,Jt=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ad(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(t.pointerId)}}function Ir(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=zi(t),t!==null&&Hu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vy(e,t,n,r,i){switch(t){case"focusin":return ln=Ir(ln,e,t,n,r,i),!0;case"dragenter":return an=Ir(an,e,t,n,r,i),!0;case"mouseover":return sn=Ir(sn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return di.set(o,Ir(di.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fi.set(o,Ir(fi.get(o)||null,e,t,n,r,i)),!0}return!1}function vh(e){var t=On(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=rh(n),t!==null){e.blockedOn=t,hh(e.priority,function(){fh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$s(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ys=r,n.target.dispatchEvent(r),ys=null}else return t=zi(n),t!==null&&Hu(t),e.blockedOn=n,!1;t.shift()}return!0}function sd(e,t,n){So(e)&&n.delete(t)}function my(){_s=!1,ln!==null&&So(ln)&&(ln=null),an!==null&&So(an)&&(an=null),sn!==null&&So(sn)&&(sn=null),di.forEach(sd),fi.forEach(sd)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,_s||(_s=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,my)))}function pi(e){function t(i){return Nr(i,e)}if(0<Xi.length){Nr(Xi[0],e);for(var n=1;n<Xi.length;n++){var r=Xi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&Nr(ln,e),an!==null&&Nr(an,e),sn!==null&&Nr(sn,e),di.forEach(t),fi.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)vh(n),n.blockedOn===null&&Jt.shift()}var ar=Ft.ReactCurrentBatchConfig,Ao=!0;function gy(e,t,n,r){var i=X,o=ar.transition;ar.transition=null;try{X=1,Fu(e,t,n,r)}finally{X=i,ar.transition=o}}function yy(e,t,n,r){var i=X,o=ar.transition;ar.transition=null;try{X=4,Fu(e,t,n,r)}finally{X=i,ar.transition=o}}function Fu(e,t,n,r){if(Ao){var i=$s(e,t,n,r);if(i===null)Sa(e,t,r,Ho,n),ad(e,r);else if(vy(i,e,t,n,r))r.stopPropagation();else if(ad(e,r),t&4&&-1<hy.indexOf(e)){for(;i!==null;){var o=zi(i);if(o!==null&&dh(o),o=$s(e,t,n,r),o===null&&Sa(e,t,r,Ho,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Sa(e,t,r,null,n)}}var Ho=null;function $s(e,t,n,r){if(Ho=null,e=Nu(r),e=On(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ho=e,null}function mh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oy()){case Du:return 1;case ah:return 4;case No:case ly:return 16;case sh:return 536870912;default:return 16}default:return 16}}var rn=null,Bu=null,xo=null;function gh(){if(xo)return xo;var e,t=Bu,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return xo=i.slice(e,1<r?1-r:void 0)}function ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ki(){return!0}function ud(){return!1}function Ze(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ki:ud,this.isPropagationStopped=ud,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),t}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wu=Ze(Er),ji=ce({},Er,{view:0,detail:0}),wy=Ze(ji),da,fa,Dr,_l=ce({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dr&&(Dr&&e.type==="mousemove"?(da=e.screenX-Dr.screenX,fa=e.screenY-Dr.screenY):fa=da=0,Dr=e),da)},movementY:function(e){return"movementY"in e?e.movementY:fa}}),cd=Ze(_l),Sy=ce({},_l,{dataTransfer:0}),xy=Ze(Sy),ky=ce({},ji,{relatedTarget:0}),pa=Ze(ky),_y=ce({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),$y=Ze(_y),Cy=ce({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oy=Ze(Cy),Ey=ce({},Er,{data:0}),dd=Ze(Ey),by={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ty[e])?!!t[e]:!1}function Uu(){return jy}var zy=ce({},ji,{key:function(e){if(e.key){var t=by[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Py[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ly=Ze(zy),My=ce({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=Ze(My),Ry=ce({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Iy=Ze(Ry),Ny=ce({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dy=Ze(Ny),Ay=ce({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hy=Ze(Ay),Fy=[9,13,27,32],Vu=Nt&&"CompositionEvent"in window,Jr=null;Nt&&"documentMode"in document&&(Jr=document.documentMode);var By=Nt&&"TextEvent"in window&&!Jr,yh=Nt&&(!Vu||Jr&&8<Jr&&11>=Jr),pd=String.fromCharCode(32),hd=!1;function wh(e,t){switch(e){case"keyup":return Fy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function Wy(e,t){switch(e){case"compositionend":return Sh(t);case"keypress":return t.which!==32?null:(hd=!0,pd);case"textInput":return e=t.data,e===pd&&hd?null:e;default:return null}}function Uy(e,t){if(Gn)return e==="compositionend"||!Vu&&wh(e,t)?(e=gh(),xo=Bu=rn=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yh&&t.locale!=="ko"?null:t.data;default:return null}}var Vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vy[e.type]:t==="textarea"}function xh(e,t,n,r){Zp(r),t=Fo(t,"onChange"),0<t.length&&(n=new Wu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ei=null,hi=null;function Qy(e){zh(e,0)}function $l(e){var t=Xn(e);if(Vp(t))return e}function Gy(e,t){if(e==="change")return t}var kh=!1;if(Nt){var ha;if(Nt){var va="oninput"in document;if(!va){var md=document.createElement("div");md.setAttribute("oninput","return;"),va=typeof md.oninput=="function"}ha=va}else ha=!1;kh=ha&&(!document.documentMode||9<document.documentMode)}function gd(){ei&&(ei.detachEvent("onpropertychange",_h),hi=ei=null)}function _h(e){if(e.propertyName==="value"&&$l(hi)){var t=[];xh(t,hi,e,Nu(e)),nh(Qy,t)}}function Yy(e,t,n){e==="focusin"?(gd(),ei=t,hi=n,ei.attachEvent("onpropertychange",_h)):e==="focusout"&&gd()}function qy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(hi)}function Xy(e,t){if(e==="click")return $l(t)}function Ky(e,t){if(e==="input"||e==="change")return $l(t)}function Zy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Zy;function vi(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ls.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wd(e,t){var n=yd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yd(n)}}function $h(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$h(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ch(){for(var e=window,t=Mo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mo(e.document)}return t}function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jy(e){var t=Ch(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$h(n.ownerDocument.documentElement,n)){if(r!==null&&Qu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=wd(n,o);var l=wd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var e0=Nt&&"documentMode"in document&&11>=document.documentMode,Yn=null,Cs=null,ti=null,Os=!1;function Sd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Os||Yn==null||Yn!==Mo(r)||(r=Yn,"selectionStart"in r&&Qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ti&&vi(ti,r)||(ti=r,r=Fo(Cs,"onSelect"),0<r.length&&(t=new Wu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yn)))}function Zi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:Zi("Animation","AnimationEnd"),animationiteration:Zi("Animation","AnimationIteration"),animationstart:Zi("Animation","AnimationStart"),transitionend:Zi("Transition","TransitionEnd")},ma={},Oh={};Nt&&(Oh=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function Cl(e){if(ma[e])return ma[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Oh)return ma[e]=t[n];return e}var Eh=Cl("animationend"),bh=Cl("animationiteration"),Ph=Cl("animationstart"),Th=Cl("transitionend"),jh=new Map,xd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){jh.set(e,t),Hn(t,[e])}for(var ga=0;ga<xd.length;ga++){var ya=xd[ga],t0=ya.toLowerCase(),n0=ya[0].toUpperCase()+ya.slice(1);gn(t0,"on"+n0)}gn(Eh,"onAnimationEnd");gn(bh,"onAnimationIteration");gn(Ph,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(Th,"onTransitionEnd");fr("onMouseEnter",["mouseout","mouseover"]);fr("onMouseLeave",["mouseout","mouseover"]);fr("onPointerEnter",["pointerout","pointerover"]);fr("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function kd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ty(r,t,void 0,e),e.currentTarget=null}function zh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;kd(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;kd(i,a,u),o=s}}}if(Io)throw e=xs,Io=!1,xs=null,e}function J(e,t){var n=t[js];n===void 0&&(n=t[js]=new Set);var r=e+"__bubble";n.has(r)||(Lh(t,e,2,!1),n.add(r))}function wa(e,t,n){var r=0;t&&(r|=4),Lh(n,e,r,t)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function mi(e){if(!e[Ji]){e[Ji]=!0,Hp.forEach(function(n){n!=="selectionchange"&&(r0.has(n)||wa(n,!1,e),wa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ji]||(t[Ji]=!0,wa("selectionchange",!1,t))}}function Lh(e,t,n,r){switch(mh(t)){case 1:var i=gy;break;case 4:i=yy;break;default:i=Fu}n=i.bind(null,t,n,e),i=void 0,!Ss||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Sa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=On(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}nh(function(){var u=o,h=Nu(n),f=[];e:{var m=jh.get(e);if(m!==void 0){var S=Wu,x=e;switch(e){case"keypress":if(ko(n)===0)break e;case"keydown":case"keyup":S=Ly;break;case"focusin":x="focus",S=pa;break;case"focusout":x="blur",S=pa;break;case"beforeblur":case"afterblur":S=pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=xy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Iy;break;case Eh:case bh:case Ph:S=$y;break;case Th:S=Dy;break;case"scroll":S=wy;break;case"wheel":S=Hy;break;case"copy":case"cut":case"paste":S=Oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=fd}var y=(t&4)!==0,E=!y&&e==="scroll",p=y?m!==null?m+"Capture":null:m;y=[];for(var c=u,v;c!==null;){v=c;var g=v.stateNode;if(v.tag===5&&g!==null&&(v=g,p!==null&&(g=ci(c,p),g!=null&&y.push(gi(c,g,v)))),E)break;c=c.return}0<y.length&&(m=new S(m,x,null,n,h),f.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&n!==ys&&(x=n.relatedTarget||n.fromElement)&&(On(x)||x[Dt]))break e;if((S||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,S?(x=n.relatedTarget||n.toElement,S=u,x=x?On(x):null,x!==null&&(E=Fn(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(S=null,x=u),S!==x)){if(y=cd,g="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=fd,g="onPointerLeave",p="onPointerEnter",c="pointer"),E=S==null?m:Xn(S),v=x==null?m:Xn(x),m=new y(g,c+"leave",S,n,h),m.target=E,m.relatedTarget=v,g=null,On(h)===u&&(y=new y(p,c+"enter",x,n,h),y.target=v,y.relatedTarget=E,g=y),E=g,S&&x)t:{for(y=S,p=x,c=0,v=y;v;v=Bn(v))c++;for(v=0,g=p;g;g=Bn(g))v++;for(;0<c-v;)y=Bn(y),c--;for(;0<v-c;)p=Bn(p),v--;for(;c--;){if(y===p||p!==null&&y===p.alternate)break t;y=Bn(y),p=Bn(p)}y=null}else y=null;S!==null&&_d(f,m,S,y,!1),x!==null&&E!==null&&_d(f,E,x,y,!0)}}e:{if(m=u?Xn(u):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var _=Gy;else if(vd(m))if(kh)_=Ky;else{_=qy;var k=Yy}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=Xy);if(_&&(_=_(e,u))){xh(f,_,n,h);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&ps(m,"number",m.value)}switch(k=u?Xn(u):window,e){case"focusin":(vd(k)||k.contentEditable==="true")&&(Yn=k,Cs=u,ti=null);break;case"focusout":ti=Cs=Yn=null;break;case"mousedown":Os=!0;break;case"contextmenu":case"mouseup":case"dragend":Os=!1,Sd(f,n,h);break;case"selectionchange":if(e0)break;case"keydown":case"keyup":Sd(f,n,h)}var $;if(Vu)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Gn?wh(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(yh&&n.locale!=="ko"&&(Gn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Gn&&($=gh()):(rn=h,Bu="value"in rn?rn.value:rn.textContent,Gn=!0)),k=Fo(u,C),0<k.length&&(C=new dd(C,e,null,n,h),f.push({event:C,listeners:k}),$?C.data=$:($=Sh(n),$!==null&&(C.data=$)))),($=By?Wy(e,n):Uy(e,n))&&(u=Fo(u,"onBeforeInput"),0<u.length&&(h=new dd("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=$))}zh(f,t)})}function gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ci(e,n),o!=null&&r.unshift(gi(e,o,i)),o=ci(e,t),o!=null&&r.push(gi(e,o,i))),e=e.return}return r}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _d(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=ci(n,o),s!=null&&l.unshift(gi(n,s,a))):i||(s=ci(n,o),s!=null&&l.push(gi(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var i0=/\r\n?/g,o0=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(i0,`
`).replace(o0,"")}function eo(e,t,n){if(t=$d(t),$d(e)!==t&&n)throw Error(b(425))}function Bo(){}var Es=null,bs=null;function Ps(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ts=typeof setTimeout=="function"?setTimeout:void 0,l0=typeof clearTimeout=="function"?clearTimeout:void 0,Cd=typeof Promise=="function"?Promise:void 0,a0=typeof queueMicrotask=="function"?queueMicrotask:typeof Cd<"u"?function(e){return Cd.resolve(null).then(e).catch(s0)}:Ts;function s0(e){setTimeout(function(){throw e})}function xa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pi(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),kt="__reactFiber$"+br,yi="__reactProps$"+br,Dt="__reactContainer$"+br,js="__reactEvents$"+br,u0="__reactListeners$"+br,c0="__reactHandles$"+br;function On(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Od(e);e!==null;){if(n=e[kt])return n;e=Od(e)}return t}e=n,n=e.parentNode}return null}function zi(e){return e=e[kt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Ol(e){return e[yi]||null}var zs=[],Kn=-1;function yn(e){return{current:e}}function te(e){0>Kn||(e.current=zs[Kn],zs[Kn]=null,Kn--)}function K(e,t){Kn++,zs[Kn]=e.current,e.current=t}var mn={},je=yn(mn),Be=yn(!1),Rn=mn;function pr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function We(e){return e=e.childContextTypes,e!=null}function Wo(){te(Be),te(je)}function Ed(e,t,n){if(je.current!==mn)throw Error(b(168));K(je,t),K(Be,n)}function Mh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,Yg(e)||"Unknown",i));return ce({},n,r)}function Uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Rn=je.current,K(je,e),K(Be,Be.current),!0}function bd(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=Mh(e,t,Rn),r.__reactInternalMemoizedMergedChildContext=e,te(Be),te(je),K(je,e)):te(Be),K(Be,n)}var Lt=null,El=!1,ka=!1;function Rh(e){Lt===null?Lt=[e]:Lt.push(e)}function d0(e){El=!0,Rh(e)}function wn(){if(!ka&&Lt!==null){ka=!0;var e=0,t=X;try{var n=Lt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,El=!1}catch(i){throw Lt!==null&&(Lt=Lt.slice(e+1)),lh(Du,wn),i}finally{X=t,ka=!1}}return null}var Zn=[],Jn=0,Vo=null,Qo=0,nt=[],rt=0,In=null,Mt=1,Rt="";function kn(e,t){Zn[Jn++]=Qo,Zn[Jn++]=Vo,Vo=e,Qo=t}function Ih(e,t,n){nt[rt++]=Mt,nt[rt++]=Rt,nt[rt++]=In,In=e;var r=Mt;e=Rt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var o=32-pt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Mt=1<<32-pt(t)+i|n<<i|r,Rt=o+e}else Mt=1<<o|n<<i|r,Rt=e}function Gu(e){e.return!==null&&(kn(e,1),Ih(e,1,0))}function Yu(e){for(;e===Vo;)Vo=Zn[--Jn],Zn[Jn]=null,Qo=Zn[--Jn],Zn[Jn]=null;for(;e===In;)In=nt[--rt],nt[rt]=null,Rt=nt[--rt],nt[rt]=null,Mt=nt[--rt],nt[rt]=null}var qe=null,Ye=null,ie=!1,ft=null;function Nh(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ye=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:Mt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ye=null,!0):!1;default:return!1}}function Ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ms(e){if(ie){var t=Ye;if(t){var n=t;if(!Pd(e,t)){if(Ls(e))throw Error(b(418));t=un(n.nextSibling);var r=qe;t&&Pd(e,t)?Nh(r,n):(e.flags=e.flags&-4097|2,ie=!1,qe=e)}}else{if(Ls(e))throw Error(b(418));e.flags=e.flags&-4097|2,ie=!1,qe=e}}}function Td(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function to(e){if(e!==qe)return!1;if(!ie)return Td(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ps(e.type,e.memoizedProps)),t&&(t=Ye)){if(Ls(e))throw Dh(),Error(b(418));for(;t;)Nh(e,t),t=un(t.nextSibling)}if(Td(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=qe?un(e.stateNode.nextSibling):null;return!0}function Dh(){for(var e=Ye;e;)e=un(e.nextSibling)}function hr(){Ye=qe=null,ie=!1}function qu(e){ft===null?ft=[e]:ft.push(e)}var f0=Ft.ReactCurrentBatchConfig;function ct(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Go=yn(null),Yo=null,er=null,Xu=null;function Ku(){Xu=er=Yo=null}function Zu(e){var t=Go.current;te(Go),e._currentValue=t}function Rs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sr(e,t){Yo=e,Xu=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(Xu!==e)if(e={context:e,memoizedValue:t,next:null},er===null){if(Yo===null)throw Error(b(308));er=e,Yo.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return t}var En=null;function Ju(e){En===null?En=[e]:En.push(e)}function Ah(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ju(t)):(n.next=i.next,i.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,At(e,n)}return i=r.interleaved,i===null?(t.next=t,Ju(r)):(t.next=i.next,i.next=t),r.interleaved=t,At(e,n)}function _o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Au(e,n)}}function jd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qo(e,t,n,r){var i=e.updateQueue;Kt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;l=0,h=u=s=null,a=o;do{var m=a.lane,S=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(m=t,S=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(S,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,m=typeof x=="function"?x.call(S,f,m):x,m==null)break e;f=ce({},f,m);break e;case 2:Kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else S={eventTime:S,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=S,s=f):h=h.next=S,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Dn|=l,e.lanes=l,e.memoizedState=f}}function zd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Fh=new Ap.Component().refs;function Is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bl={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=fn(e),o=It(r,i);o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&(ht(t,e,i,r),_o(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=fn(e),o=It(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&(ht(t,e,i,r),_o(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=fn(e),i=It(n,r);i.tag=2,t!=null&&(i.callback=t),t=cn(e,i,r),t!==null&&(ht(t,e,r,n),_o(t,e,r))}};function Ld(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!vi(n,r)||!vi(i,o):!0}function Bh(e,t,n){var r=!1,i=mn,o=t.contextType;return typeof o=="object"&&o!==null?o=lt(o):(i=We(t)?Rn:je.current,r=t.contextTypes,o=(r=r!=null)?pr(e,i):mn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Md(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bl.enqueueReplaceState(t,t.state,null)}function Ns(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Fh,ec(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=lt(o):(o=We(t)?Rn:je.current,i.context=pr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Is(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bl.enqueueReplaceState(i,i.state,null),qo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Fh&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function no(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rd(e){var t=e._init;return t(e._payload)}function Wh(e){function t(p,c){if(e){var v=p.deletions;v===null?(p.deletions=[c],p.flags|=16):v.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=pn(p,c),p.index=0,p.sibling=null,p}function o(p,c,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<c?(p.flags|=2,c):v):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,v,g){return c===null||c.tag!==6?(c=Pa(v,p.mode,g),c.return=p,c):(c=i(c,v),c.return=p,c)}function s(p,c,v,g){var _=v.type;return _===Qn?h(p,c,v.props.children,g,v.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Xt&&Rd(_)===c.type)?(g=i(c,v.props),g.ref=Ar(p,c,v),g.return=p,g):(g=Po(v.type,v.key,v.props,null,p.mode,g),g.ref=Ar(p,c,v),g.return=p,g)}function u(p,c,v,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==v.containerInfo||c.stateNode.implementation!==v.implementation?(c=Ta(v,p.mode,g),c.return=p,c):(c=i(c,v.children||[]),c.return=p,c)}function h(p,c,v,g,_){return c===null||c.tag!==7?(c=zn(v,p.mode,g,_),c.return=p,c):(c=i(c,v),c.return=p,c)}function f(p,c,v){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Pa(""+c,p.mode,v),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Vi:return v=Po(c.type,c.key,c.props,null,p.mode,v),v.ref=Ar(p,null,c),v.return=p,v;case Vn:return c=Ta(c,p.mode,v),c.return=p,c;case Xt:var g=c._init;return f(p,g(c._payload),v)}if(Vr(c)||Mr(c))return c=zn(c,p.mode,v,null),c.return=p,c;no(p,c)}return null}function m(p,c,v,g){var _=c!==null?c.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:a(p,c,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vi:return v.key===_?s(p,c,v,g):null;case Vn:return v.key===_?u(p,c,v,g):null;case Xt:return _=v._init,m(p,c,_(v._payload),g)}if(Vr(v)||Mr(v))return _!==null?null:h(p,c,v,g,null);no(p,v)}return null}function S(p,c,v,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return p=p.get(v)||null,a(c,p,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vi:return p=p.get(g.key===null?v:g.key)||null,s(c,p,g,_);case Vn:return p=p.get(g.key===null?v:g.key)||null,u(c,p,g,_);case Xt:var k=g._init;return S(p,c,v,k(g._payload),_)}if(Vr(g)||Mr(g))return p=p.get(v)||null,h(c,p,g,_,null);no(c,g)}return null}function x(p,c,v,g){for(var _=null,k=null,$=c,C=c=0,P=null;$!==null&&C<v.length;C++){$.index>C?(P=$,$=null):P=$.sibling;var T=m(p,$,v[C],g);if(T===null){$===null&&($=P);break}e&&$&&T.alternate===null&&t(p,$),c=o(T,c,C),k===null?_=T:k.sibling=T,k=T,$=P}if(C===v.length)return n(p,$),ie&&kn(p,C),_;if($===null){for(;C<v.length;C++)$=f(p,v[C],g),$!==null&&(c=o($,c,C),k===null?_=$:k.sibling=$,k=$);return ie&&kn(p,C),_}for($=r(p,$);C<v.length;C++)P=S($,p,C,v[C],g),P!==null&&(e&&P.alternate!==null&&$.delete(P.key===null?C:P.key),c=o(P,c,C),k===null?_=P:k.sibling=P,k=P);return e&&$.forEach(function(N){return t(p,N)}),ie&&kn(p,C),_}function y(p,c,v,g){var _=Mr(v);if(typeof _!="function")throw Error(b(150));if(v=_.call(v),v==null)throw Error(b(151));for(var k=_=null,$=c,C=c=0,P=null,T=v.next();$!==null&&!T.done;C++,T=v.next()){$.index>C?(P=$,$=null):P=$.sibling;var N=m(p,$,T.value,g);if(N===null){$===null&&($=P);break}e&&$&&N.alternate===null&&t(p,$),c=o(N,c,C),k===null?_=N:k.sibling=N,k=N,$=P}if(T.done)return n(p,$),ie&&kn(p,C),_;if($===null){for(;!T.done;C++,T=v.next())T=f(p,T.value,g),T!==null&&(c=o(T,c,C),k===null?_=T:k.sibling=T,k=T);return ie&&kn(p,C),_}for($=r(p,$);!T.done;C++,T=v.next())T=S($,p,C,T.value,g),T!==null&&(e&&T.alternate!==null&&$.delete(T.key===null?C:T.key),c=o(T,c,C),k===null?_=T:k.sibling=T,k=T);return e&&$.forEach(function(R){return t(p,R)}),ie&&kn(p,C),_}function E(p,c,v,g){if(typeof v=="object"&&v!==null&&v.type===Qn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Vi:e:{for(var _=v.key,k=c;k!==null;){if(k.key===_){if(_=v.type,_===Qn){if(k.tag===7){n(p,k.sibling),c=i(k,v.props.children),c.return=p,p=c;break e}}else if(k.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Xt&&Rd(_)===k.type){n(p,k.sibling),c=i(k,v.props),c.ref=Ar(p,k,v),c.return=p,p=c;break e}n(p,k);break}else t(p,k);k=k.sibling}v.type===Qn?(c=zn(v.props.children,p.mode,g,v.key),c.return=p,p=c):(g=Po(v.type,v.key,v.props,null,p.mode,g),g.ref=Ar(p,c,v),g.return=p,p=g)}return l(p);case Vn:e:{for(k=v.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===v.containerInfo&&c.stateNode.implementation===v.implementation){n(p,c.sibling),c=i(c,v.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Ta(v,p.mode,g),c.return=p,p=c}return l(p);case Xt:return k=v._init,E(p,c,k(v._payload),g)}if(Vr(v))return x(p,c,v,g);if(Mr(v))return y(p,c,v,g);no(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,v),c.return=p,p=c):(n(p,c),c=Pa(v,p.mode,g),c.return=p,p=c),l(p)):n(p,c)}return E}var vr=Wh(!0),Uh=Wh(!1),Li={},$t=yn(Li),wi=yn(Li),Si=yn(Li);function bn(e){if(e===Li)throw Error(b(174));return e}function tc(e,t){switch(K(Si,t),K(wi,e),K($t,Li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vs(t,e)}te($t),K($t,t)}function mr(){te($t),te(wi),te(Si)}function Vh(e){bn(Si.current);var t=bn($t.current),n=vs(t,e.type);t!==n&&(K(wi,e),K($t,n))}function nc(e){wi.current===e&&(te($t),te(wi))}var se=yn(0);function Xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _a=[];function rc(){for(var e=0;e<_a.length;e++)_a[e]._workInProgressVersionPrimary=null;_a.length=0}var $o=Ft.ReactCurrentDispatcher,$a=Ft.ReactCurrentBatchConfig,Nn=0,ue=null,ye=null,Se=null,Ko=!1,ni=!1,xi=0,p0=0;function Ee(){throw Error(b(321))}function ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function oc(e,t,n,r,i,o){if(Nn=o,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$o.current=e===null||e.memoizedState===null?g0:y0,e=n(r,i),ni){o=0;do{if(ni=!1,xi=0,25<=o)throw Error(b(301));o+=1,Se=ye=null,t.updateQueue=null,$o.current=w0,e=n(r,i)}while(ni)}if($o.current=Zo,t=ye!==null&&ye.next!==null,Nn=0,Se=ye=ue=null,Ko=!1,t)throw Error(b(300));return e}function lc(){var e=xi!==0;return xi=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ue.memoizedState=Se=e:Se=Se.next=e,Se}function at(){if(ye===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Se===null?ue.memoizedState:Se.next;if(t!==null)Se=t,ye=e;else{if(e===null)throw Error(b(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Se===null?ue.memoizedState=Se=e:Se=Se.next=e}return Se}function ki(e,t){return typeof t=="function"?t(e):t}function Ca(e){var t=at(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=ye,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var h=u.lane;if((Nn&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,ue.lanes|=h,Dn|=h}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,mt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ue.lanes|=o,Dn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oa(e){var t=at(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);mt(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qh(){}function Gh(e,t){var n=ue,r=at(),i=t(),o=!mt(r.memoizedState,i);if(o&&(r.memoizedState=i,Fe=!0),r=r.queue,ac(Xh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,_i(9,qh.bind(null,n,r,i,t),void 0,null),ke===null)throw Error(b(349));Nn&30||Yh(n,t,i)}return i}function Yh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qh(e,t,n,r){t.value=n,t.getSnapshot=r,Kh(t)&&Zh(e)}function Xh(e,t,n){return n(function(){Kh(t)&&Zh(e)})}function Kh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Zh(e){var t=At(e,1);t!==null&&ht(t,e,1,-1)}function Id(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},t.queue=e,e=e.dispatch=m0.bind(null,ue,e),[t.memoizedState,e]}function _i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jh(){return at().memoizedState}function Co(e,t,n,r){var i=yt();ue.flags|=e,i.memoizedState=_i(1|t,n,void 0,r===void 0?null:r)}function Pl(e,t,n,r){var i=at();r=r===void 0?null:r;var o=void 0;if(ye!==null){var l=ye.memoizedState;if(o=l.destroy,r!==null&&ic(r,l.deps)){i.memoizedState=_i(t,n,o,r);return}}ue.flags|=e,i.memoizedState=_i(1|t,n,o,r)}function Nd(e,t){return Co(8390656,8,e,t)}function ac(e,t){return Pl(2048,8,e,t)}function ev(e,t){return Pl(4,2,e,t)}function tv(e,t){return Pl(4,4,e,t)}function nv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rv(e,t,n){return n=n!=null?n.concat([e]):null,Pl(4,4,nv.bind(null,t,e),n)}function sc(){}function iv(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ic(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ov(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ic(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lv(e,t,n){return Nn&21?(mt(n,t)||(n=uh(),ue.lanes|=n,Dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function h0(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=$a.transition;$a.transition={};try{e(!1),t()}finally{X=n,$a.transition=r}}function av(){return at().memoizedState}function v0(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sv(e))uv(t,n);else if(n=Ah(e,t,n,r),n!==null){var i=Ie();ht(n,e,r,i),cv(n,t,r)}}function m0(e,t,n){var r=fn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sv(e))uv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,mt(a,l)){var s=t.interleaved;s===null?(i.next=i,Ju(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Ah(e,t,i,r),n!==null&&(i=Ie(),ht(n,e,r,i),cv(n,t,r))}}function sv(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function uv(e,t){ni=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Au(e,n)}}var Zo={readContext:lt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},g0={readContext:lt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Nd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Co(4194308,4,nv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Co(4194308,4,e,t)},useInsertionEffect:function(e,t){return Co(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=v0.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:Id,useDebugValue:sc,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=Id(!1),t=e[0];return e=h0.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,i=yt();if(ie){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),ke===null)throw Error(b(349));Nn&30||Yh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Nd(Xh.bind(null,r,o,e),[e]),r.flags|=2048,_i(9,qh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yt(),t=ke.identifierPrefix;if(ie){var n=Rt,r=Mt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=p0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},y0={readContext:lt,useCallback:iv,useContext:lt,useEffect:ac,useImperativeHandle:rv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:ov,useReducer:Ca,useRef:Jh,useState:function(){return Ca(ki)},useDebugValue:sc,useDeferredValue:function(e){var t=at();return lv(t,ye.memoizedState,e)},useTransition:function(){var e=Ca(ki)[0],t=at().memoizedState;return[e,t]},useMutableSource:Qh,useSyncExternalStore:Gh,useId:av,unstable_isNewReconciler:!1},w0={readContext:lt,useCallback:iv,useContext:lt,useEffect:ac,useImperativeHandle:rv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:ov,useReducer:Oa,useRef:Jh,useState:function(){return Oa(ki)},useDebugValue:sc,useDeferredValue:function(e){var t=at();return ye===null?t.memoizedState=e:lv(t,ye.memoizedState,e)},useTransition:function(){var e=Oa(ki)[0],t=at().memoizedState;return[e,t]},useMutableSource:Qh,useSyncExternalStore:Gh,useId:av,unstable_isNewReconciler:!1};function gr(e,t){try{var n="",r=t;do n+=Gg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ea(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var S0=typeof WeakMap=="function"?WeakMap:Map;function dv(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){el||(el=!0,Ys=r),Ds(e,t)},n}function fv(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ds(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ds(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Dd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new S0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=M0.bind(null,e,t,n),t.then(e,e))}function Ad(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,cn(n,t,1))),n.lanes|=1),e)}var x0=Ft.ReactCurrentOwner,Fe=!1;function Re(e,t,n,r){t.child=e===null?Uh(t,null,n,r):vr(t,e.child,n,r)}function Fd(e,t,n,r,i){n=n.render;var o=t.ref;return sr(t,i),r=oc(e,t,n,r,o,i),n=lc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(ie&&n&&Gu(t),t.flags|=1,Re(e,t,r,i),t.child)}function Bd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!mc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,pv(e,t,o,r,i)):(e=Po(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:vi,n(l,r)&&e.ref===t.ref)return Ht(e,t,i)}return t.flags|=1,e=pn(o,r),e.ref=t.ref,e.return=t,t.child=e}function pv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(vi(o,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Ht(e,t,i)}return As(e,t,n,r,i)}function hv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(nr,Ge),Ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(nr,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,K(nr,Ge),Ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,K(nr,Ge),Ge|=r;return Re(e,t,i,n),t.child}function vv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function As(e,t,n,r,i){var o=We(n)?Rn:je.current;return o=pr(t,o),sr(t,i),n=oc(e,t,n,r,o,i),r=lc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(ie&&r&&Gu(t),t.flags|=1,Re(e,t,n,i),t.child)}function Wd(e,t,n,r,i){if(We(n)){var o=!0;Uo(t)}else o=!1;if(sr(t,i),t.stateNode===null)Oo(e,t),Bh(t,n,r),Ns(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=We(n)?Rn:je.current,u=pr(t,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Md(t,l,r,u),Kt=!1;var m=t.memoizedState;l.state=m,qo(t,r,l,i),s=t.memoizedState,a!==r||m!==s||Be.current||Kt?(typeof h=="function"&&(Is(t,n,h,r),s=t.memoizedState),(a=Kt||Ld(t,n,a,r,m,s,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Hh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ct(t.type,a),l.props=u,f=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=lt(s):(s=We(n)?Rn:je.current,s=pr(t,s));var S=n.getDerivedStateFromProps;(h=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||m!==s)&&Md(t,l,r,s),Kt=!1,m=t.memoizedState,l.state=m,qo(t,r,l,i);var x=t.memoizedState;a!==f||m!==x||Be.current||Kt?(typeof S=="function"&&(Is(t,n,S,r),x=t.memoizedState),(u=Kt||Ld(t,n,u,r,m,x,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Hs(e,t,n,r,o,i)}function Hs(e,t,n,r,i,o){vv(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&bd(t,n,!1),Ht(e,t,o);r=t.stateNode,x0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=vr(t,e.child,null,o),t.child=vr(t,null,a,o)):Re(e,t,a,o),t.memoizedState=r.state,i&&bd(t,n,!0),t.child}function mv(e){var t=e.stateNode;t.pendingContext?Ed(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ed(e,t.context,!1),tc(e,t.containerInfo)}function Ud(e,t,n,r,i){return hr(),qu(i),t.flags|=256,Re(e,t,n,r),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0};function Bs(e){return{baseLanes:e,cachePool:null,transitions:null}}function gv(e,t,n){var r=t.pendingProps,i=se.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(se,i&1),e===null)return Ms(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=zl(l,r,0,null),e=zn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Bs(n),t.memoizedState=Fs,e):uc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return k0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=pn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=pn(a,o):(o=zn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Bs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Fs,r}return o=e.child,e=o.sibling,r=pn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function uc(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ro(e,t,n,r){return r!==null&&qu(r),vr(t,e.child,null,n),e=uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function k0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Ea(Error(b(422))),ro(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=zl({mode:"visible",children:r.children},i,0,null),o=zn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&vr(t,e.child,null,l),t.child.memoizedState=Bs(l),t.memoizedState=Fs,o);if(!(t.mode&1))return ro(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(b(419)),r=Ea(o,r,void 0),ro(e,t,l,r)}if(a=(l&e.childLanes)!==0,Fe||a){if(r=ke,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,At(e,i),ht(r,e,i,-1))}return vc(),r=Ea(Error(b(421))),ro(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=R0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ye=un(i.nextSibling),qe=t,ie=!0,ft=null,e!==null&&(nt[rt++]=Mt,nt[rt++]=Rt,nt[rt++]=In,Mt=e.id,Rt=e.overflow,In=t),t=uc(t,r.children),t.flags|=4096,t)}function Vd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rs(e.return,t,n)}function ba(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function yv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Re(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vd(e,n,t);else if(e.tag===19)Vd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ba(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ba(t,!0,n,null,o);break;case"together":ba(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _0(e,t,n){switch(t.tag){case 3:mv(t),hr();break;case 5:Vh(t);break;case 1:We(t.type)&&Uo(t);break;case 4:tc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(Go,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?gv(e,t,n):(K(se,se.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);K(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,hv(e,t,n)}return Ht(e,t,n)}var wv,Ws,Sv,xv;wv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ws=function(){};Sv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bn($t.current);var o=null;switch(n){case"input":i=ds(e,i),r=ds(e,r),o=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),o=[];break;case"textarea":i=hs(e,i),r=hs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}ms(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(si.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(si.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&J("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};xv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $0(e,t,n){var r=t.pendingProps;switch(Yu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return We(t.type)&&Wo(),be(t),null;case 3:return r=t.stateNode,mr(),te(Be),te(je),rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(to(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Ks(ft),ft=null))),Ws(e,t),be(t),null;case 5:nc(t);var i=bn(Si.current);if(n=t.type,e!==null&&t.stateNode!=null)Sv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return be(t),null}if(e=bn($t.current),to(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kt]=t,r[yi]=o,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Gr.length;i++)J(Gr[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":ed(r,o),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},J("invalid",r);break;case"textarea":nd(r,o),J("invalid",r)}ms(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&eo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&eo(r.textContent,a,e),i=["children",""+a]):si.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&J("scroll",r)}switch(n){case"input":Qi(r),td(r,o,!0);break;case"textarea":Qi(r),rd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Bo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[kt]=t,e[yi]=r,wv(e,t,!1,!1),t.stateNode=e;e:{switch(l=gs(n,r),n){case"dialog":J("cancel",e),J("close",e),i=r;break;case"iframe":case"object":case"embed":J("load",e),i=r;break;case"video":case"audio":for(i=0;i<Gr.length;i++)J(Gr[i],e);i=r;break;case"source":J("error",e),i=r;break;case"img":case"image":case"link":J("error",e),J("load",e),i=r;break;case"details":J("toggle",e),i=r;break;case"input":ed(e,r),i=ds(e,r),J("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),J("invalid",e);break;case"textarea":nd(e,r),i=hs(e,r),J("invalid",e);break;default:i=r}ms(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Kp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&qp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ui(e,s):typeof s=="number"&&ui(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(si.hasOwnProperty(o)?s!=null&&o==="onScroll"&&J("scroll",e):s!=null&&Lu(e,o,s,l))}switch(n){case"input":Qi(e),td(e,r,!1);break;case"textarea":Qi(e),rd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ir(e,!!r.multiple,o,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)xv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=bn(Si.current),bn($t.current),to(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(o=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&eo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return be(t),null;case 13:if(te(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ye!==null&&t.mode&1&&!(t.flags&128))Dh(),hr(),t.flags|=98560,o=!1;else if(o=to(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[kt]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),o=!1}else ft!==null&&(Ks(ft),ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?we===0&&(we=3):vc())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return mr(),Ws(e,t),e===null&&mi(t.stateNode.containerInfo),be(t),null;case 10:return Zu(t.type._context),be(t),null;case 17:return We(t.type)&&Wo(),be(t),null;case 19:if(te(se),o=t.memoizedState,o===null)return be(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Hr(o,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Xo(e),l!==null){for(t.flags|=128,Hr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(se,se.current&1|2),t.child}e=e.sibling}o.tail!==null&&ve()>yr&&(t.flags|=128,r=!0,Hr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Xo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ie)return be(t),null}else 2*ve()-o.renderingStartTime>yr&&n!==1073741824&&(t.flags|=128,r=!0,Hr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ve(),t.sibling=null,n=se.current,K(se,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return hc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function C0(e,t){switch(Yu(t),t.tag){case 1:return We(t.type)&&Wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),te(Be),te(je),rc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nc(t),null;case 13:if(te(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(se),null;case 4:return mr(),null;case 10:return Zu(t.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var io=!1,Pe=!1,O0=typeof WeakSet=="function"?WeakSet:Set,L=null;function tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Us(e,t,n){try{n()}catch(r){pe(e,t,r)}}var Qd=!1;function E0(e,t){if(Es=Ao,e=Ch(),Qu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,h=0,f=e,m=null;t:for(;;){for(var S;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==o||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(S=f.firstChild)!==null;)m=f,f=S;for(;;){if(f===e)break t;if(m===n&&++u===i&&(a=l),m===o&&++h===r&&(s=l),(S=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=S}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(bs={focusedElem:e,selectionRange:n},Ao=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,E=x.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:ct(t.type,y),E);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(g){pe(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return x=Qd,Qd=!1,x}function ri(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Us(t,n,o)}i=i.next}while(i!==r)}}function Tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kv(e){var t=e.alternate;t!==null&&(e.alternate=null,kv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[yi],delete t[js],delete t[u0],delete t[c0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _v(e){return e.tag===5||e.tag===3||e.tag===4}function Gd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_v(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(Qs(e,t,n),e=e.sibling;e!==null;)Qs(e,t,n),e=e.sibling}function Gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gs(e,t,n),e=e.sibling;e!==null;)Gs(e,t,n),e=e.sibling}var $e=null,dt=!1;function Vt(e,t,n){for(n=n.child;n!==null;)$v(e,t,n),n=n.sibling}function $v(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Pe||tr(n,t);case 6:var r=$e,i=dt;$e=null,Vt(e,t,n),$e=r,dt=i,$e!==null&&(dt?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(dt?(e=$e,n=n.stateNode,e.nodeType===8?xa(e.parentNode,n):e.nodeType===1&&xa(e,n),pi(e)):xa($e,n.stateNode));break;case 4:r=$e,i=dt,$e=n.stateNode.containerInfo,dt=!0,Vt(e,t,n),$e=r,dt=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Us(n,t,l),i=i.next}while(i!==r)}Vt(e,t,n);break;case 1:if(!Pe&&(tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,t,a)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Vt(e,t,n),Pe=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function Yd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new O0),t.forEach(function(r){var i=I0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:$e=a.stateNode,dt=!1;break e;case 3:$e=a.stateNode.containerInfo,dt=!0;break e;case 4:$e=a.stateNode.containerInfo,dt=!0;break e}a=a.return}if($e===null)throw Error(b(160));$v(o,l,i),$e=null,dt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cv(t,e),t=t.sibling}function Cv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),gt(e),r&4){try{ri(3,e,e.return),Tl(3,e)}catch(y){pe(e,e.return,y)}try{ri(5,e,e.return)}catch(y){pe(e,e.return,y)}}break;case 1:ut(t,e),gt(e),r&512&&n!==null&&tr(n,n.return);break;case 5:if(ut(t,e),gt(e),r&512&&n!==null&&tr(n,n.return),e.flags&32){var i=e.stateNode;try{ui(i,"")}catch(y){pe(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Qp(i,o),gs(a,l);var u=gs(a,o);for(l=0;l<s.length;l+=2){var h=s[l],f=s[l+1];h==="style"?Kp(i,f):h==="dangerouslySetInnerHTML"?qp(i,f):h==="children"?ui(i,f):Lu(i,h,f,u)}switch(a){case"input":fs(i,o);break;case"textarea":Gp(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?ir(i,!!o.multiple,S,!1):m!==!!o.multiple&&(o.defaultValue!=null?ir(i,!!o.multiple,o.defaultValue,!0):ir(i,!!o.multiple,o.multiple?[]:"",!1))}i[yi]=o}catch(y){pe(e,e.return,y)}}break;case 6:if(ut(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){pe(e,e.return,y)}}break;case 3:if(ut(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pi(t.containerInfo)}catch(y){pe(e,e.return,y)}break;case 4:ut(t,e),gt(e);break;case 13:ut(t,e),gt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(fc=ve())),r&4&&Yd(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(u=Pe)||h,ut(t,e),Pe=u):ut(t,e),gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(L=e,h=e.child;h!==null;){for(f=L=h;L!==null;){switch(m=L,S=m.child,m.tag){case 0:case 11:case 14:case 15:ri(4,m,m.return);break;case 1:tr(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){pe(r,n,y)}}break;case 5:tr(m,m.return);break;case 22:if(m.memoizedState!==null){Xd(f);continue}}S!==null?(S.return=m,L=S):Xd(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Xp("display",l))}catch(y){pe(e,e.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){pe(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ut(t,e),gt(e),r&4&&Yd(e);break;case 21:break;default:ut(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_v(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ui(i,""),r.flags&=-33);var o=Gd(e);Gs(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Gd(e);Qs(e,a,l);break;default:throw Error(b(161))}}catch(s){pe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function b0(e,t,n){L=e,Ov(e)}function Ov(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||io;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Pe;a=io;var u=Pe;if(io=l,(Pe=s)&&!u)for(L=i;L!==null;)l=L,s=l.child,l.tag===22&&l.memoizedState!==null?Kd(i):s!==null?(s.return=l,L=s):Kd(i);for(;o!==null;)L=o,Ov(o),o=o.sibling;L=i,io=a,Pe=u}qd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):qd(e)}}function qd(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||Tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&zd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&pi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Pe||t.flags&512&&Vs(t)}catch(m){pe(t,t.return,m)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Xd(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Kd(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Tl(4,t)}catch(s){pe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){pe(t,i,s)}}var o=t.return;try{Vs(t)}catch(s){pe(t,o,s)}break;case 5:var l=t.return;try{Vs(t)}catch(s){pe(t,l,s)}}}catch(s){pe(t,t.return,s)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var P0=Math.ceil,Jo=Ft.ReactCurrentDispatcher,cc=Ft.ReactCurrentOwner,ot=Ft.ReactCurrentBatchConfig,Q=0,ke=null,ge=null,Ce=0,Ge=0,nr=yn(0),we=0,$i=null,Dn=0,jl=0,dc=0,ii=null,He=null,fc=0,yr=1/0,jt=null,el=!1,Ys=null,dn=null,oo=!1,on=null,tl=0,oi=0,qs=null,Eo=-1,bo=0;function Ie(){return Q&6?ve():Eo!==-1?Eo:Eo=ve()}function fn(e){return e.mode&1?Q&2&&Ce!==0?Ce&-Ce:f0.transition!==null?(bo===0&&(bo=uh()),bo):(e=X,e!==0||(e=window.event,e=e===void 0?16:mh(e.type)),e):1}function ht(e,t,n,r){if(50<oi)throw oi=0,qs=null,Error(b(185));Ti(e,n,r),(!(Q&2)||e!==ke)&&(e===ke&&(!(Q&2)&&(jl|=n),we===4&&en(e,Ce)),Ue(e,r),n===1&&Q===0&&!(t.mode&1)&&(yr=ve()+500,El&&wn()))}function Ue(e,t){var n=e.callbackNode;fy(e,t);var r=Do(e,e===ke?Ce:0);if(r===0)n!==null&&ld(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ld(n),t===1)e.tag===0?d0(Zd.bind(null,e)):Rh(Zd.bind(null,e)),a0(function(){!(Q&6)&&wn()}),n=null;else{switch(ch(r)){case 1:n=Du;break;case 4:n=ah;break;case 16:n=No;break;case 536870912:n=sh;break;default:n=No}n=Mv(n,Ev.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ev(e,t){if(Eo=-1,bo=0,Q&6)throw Error(b(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=Do(e,e===ke?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=nl(e,r);else{t=r;var i=Q;Q|=2;var o=Pv();(ke!==e||Ce!==t)&&(jt=null,yr=ve()+500,jn(e,t));do try{z0();break}catch(a){bv(e,a)}while(1);Ku(),Jo.current=o,Q=i,ge!==null?t=0:(ke=null,Ce=0,t=we)}if(t!==0){if(t===2&&(i=ks(e),i!==0&&(r=i,t=Xs(e,i))),t===1)throw n=$i,jn(e,0),en(e,r),Ue(e,ve()),n;if(t===6)en(e,r);else{if(i=e.current.alternate,!(r&30)&&!T0(i)&&(t=nl(e,r),t===2&&(o=ks(e),o!==0&&(r=o,t=Xs(e,o))),t===1))throw n=$i,jn(e,0),en(e,r),Ue(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:_n(e,He,jt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=fc+500-ve(),10<t)){if(Do(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ts(_n.bind(null,e,He,jt),t);break}_n(e,He,jt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-pt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*P0(r/1960))-r,10<r){e.timeoutHandle=Ts(_n.bind(null,e,He,jt),r);break}_n(e,He,jt);break;case 5:_n(e,He,jt);break;default:throw Error(b(329))}}}return Ue(e,ve()),e.callbackNode===n?Ev.bind(null,e):null}function Xs(e,t){var n=ii;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=nl(e,t),e!==2&&(t=He,He=n,t!==null&&Ks(t)),e}function Ks(e){He===null?He=e:He.push.apply(He,e)}function T0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!mt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~dc,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function Zd(e){if(Q&6)throw Error(b(327));ur();var t=Do(e,0);if(!(t&1))return Ue(e,ve()),null;var n=nl(e,t);if(e.tag!==0&&n===2){var r=ks(e);r!==0&&(t=r,n=Xs(e,r))}if(n===1)throw n=$i,jn(e,0),en(e,t),Ue(e,ve()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,He,jt),Ue(e,ve()),null}function pc(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(yr=ve()+500,El&&wn())}}function An(e){on!==null&&on.tag===0&&!(Q&6)&&ur();var t=Q;Q|=1;var n=ot.transition,r=X;try{if(ot.transition=null,X=1,e)return e()}finally{X=r,ot.transition=n,Q=t,!(Q&6)&&wn()}}function hc(){Ge=nr.current,te(nr)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,l0(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Yu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wo();break;case 3:mr(),te(Be),te(je),rc();break;case 5:nc(r);break;case 4:mr();break;case 13:te(se);break;case 19:te(se);break;case 10:Zu(r.type._context);break;case 22:case 23:hc()}n=n.return}if(ke=e,ge=e=pn(e.current,null),Ce=Ge=t,we=0,$i=null,dc=jl=Dn=0,He=ii=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}En=null}return e}function bv(e,t){do{var n=ge;try{if(Ku(),$o.current=Zo,Ko){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ko=!1}if(Nn=0,Se=ye=ue=null,ni=!1,xi=0,cc.current=null,n===null||n.return===null){we=1,$i=t,ge=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Ce,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=Ad(l);if(S!==null){S.flags&=-257,Hd(S,l,a,o,t),S.mode&1&&Dd(o,u,t),t=S,s=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(s),t.updateQueue=y}else x.add(s);break e}else{if(!(t&1)){Dd(o,u,t),vc();break e}s=Error(b(426))}}else if(ie&&a.mode&1){var E=Ad(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Hd(E,l,a,o,t),qu(gr(s,a));break e}}o=s=gr(s,a),we!==4&&(we=2),ii===null?ii=[o]:ii.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=dv(o,s,t);jd(o,p);break e;case 1:a=s;var c=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dn===null||!dn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=fv(o,a,t);jd(o,g);break e}}o=o.return}while(o!==null)}jv(n)}catch(_){t=_,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(1)}function Pv(){var e=Jo.current;return Jo.current=Zo,e===null?Zo:e}function vc(){(we===0||we===3||we===2)&&(we=4),ke===null||!(Dn&268435455)&&!(jl&268435455)||en(ke,Ce)}function nl(e,t){var n=Q;Q|=2;var r=Pv();(ke!==e||Ce!==t)&&(jt=null,jn(e,t));do try{j0();break}catch(i){bv(e,i)}while(1);if(Ku(),Q=n,Jo.current=r,ge!==null)throw Error(b(261));return ke=null,Ce=0,we}function j0(){for(;ge!==null;)Tv(ge)}function z0(){for(;ge!==null&&!ry();)Tv(ge)}function Tv(e){var t=Lv(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?jv(e):ge=t,cc.current=null}function jv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=C0(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ge=null;return}}else if(n=$0(n,t,Ge),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);we===0&&(we=5)}function _n(e,t,n){var r=X,i=ot.transition;try{ot.transition=null,X=1,L0(e,t,n,r)}finally{ot.transition=i,X=r}return null}function L0(e,t,n,r){do ur();while(on!==null);if(Q&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(py(e,o),e===ke&&(ge=ke=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oo||(oo=!0,Mv(No,function(){return ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ot.transition,ot.transition=null;var l=X;X=1;var a=Q;Q|=4,cc.current=null,E0(e,n),Cv(n,e),Jy(bs),Ao=!!Es,bs=Es=null,e.current=n,b0(n),iy(),Q=a,X=l,ot.transition=o}else e.current=n;if(oo&&(oo=!1,on=e,tl=i),o=e.pendingLanes,o===0&&(dn=null),ay(n.stateNode),Ue(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(el)throw el=!1,e=Ys,Ys=null,e;return tl&1&&e.tag!==0&&ur(),o=e.pendingLanes,o&1?e===qs?oi++:(oi=0,qs=e):oi=0,wn(),null}function ur(){if(on!==null){var e=ch(tl),t=ot.transition,n=X;try{if(ot.transition=null,X=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,tl=0,Q&6)throw Error(b(331));var i=Q;for(Q|=4,L=e.current;L!==null;){var o=L,l=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(L=u;L!==null;){var h=L;switch(h.tag){case 0:case 11:case 15:ri(8,h,o)}var f=h.child;if(f!==null)f.return=h,L=f;else for(;L!==null;){h=L;var m=h.sibling,S=h.return;if(kv(h),h===u){L=null;break}if(m!==null){m.return=S,L=m;break}L=S}}}var x=o.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}L=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,L=l;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ri(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,L=p;break e}L=o.return}}var c=e.current;for(L=c;L!==null;){l=L;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,L=v;else e:for(l=c;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tl(9,a)}}catch(_){pe(a,a.return,_)}if(a===l){L=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,L=g;break e}L=a.return}}if(Q=i,wn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(kl,e)}catch{}r=!0}return r}finally{X=n,ot.transition=t}}return!1}function Jd(e,t,n){t=gr(n,t),t=dv(e,t,1),e=cn(e,t,1),t=Ie(),e!==null&&(Ti(e,1,t),Ue(e,t))}function pe(e,t,n){if(e.tag===3)Jd(e,e,n);else for(;t!==null;){if(t.tag===3){Jd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=gr(n,e),e=fv(t,e,1),t=cn(t,e,1),e=Ie(),t!==null&&(Ti(t,1,e),Ue(t,e));break}}t=t.return}}function M0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Ce&n)===n&&(we===4||we===3&&(Ce&130023424)===Ce&&500>ve()-fc?jn(e,0):dc|=n),Ue(e,t)}function zv(e,t){t===0&&(e.mode&1?(t=qi,qi<<=1,!(qi&130023424)&&(qi=4194304)):t=1);var n=Ie();e=At(e,t),e!==null&&(Ti(e,t,n),Ue(e,n))}function R0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zv(e,n)}function I0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),zv(e,n)}var Lv;Lv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,_0(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,ie&&t.flags&1048576&&Ih(t,Qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oo(e,t),e=t.pendingProps;var i=pr(t,je.current);sr(t,n),i=oc(null,t,r,e,i,n);var o=lc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(o=!0,Uo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ec(t),i.updater=bl,t.stateNode=i,i._reactInternals=t,Ns(t,r,e,n),t=Hs(null,t,r,!0,o,n)):(t.tag=0,ie&&o&&Gu(t),Re(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=D0(r),e=ct(r,e),i){case 0:t=As(null,t,r,e,n);break e;case 1:t=Wd(null,t,r,e,n);break e;case 11:t=Fd(null,t,r,e,n);break e;case 14:t=Bd(null,t,r,ct(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),As(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Wd(e,t,r,i,n);case 3:e:{if(mv(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Hh(e,t),qo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=gr(Error(b(423)),t),t=Ud(e,t,r,n,i);break e}else if(r!==i){i=gr(Error(b(424)),t),t=Ud(e,t,r,n,i);break e}else for(Ye=un(t.stateNode.containerInfo.firstChild),qe=t,ie=!0,ft=null,n=Uh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hr(),r===i){t=Ht(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return Vh(t),e===null&&Ms(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ps(r,i)?l=null:o!==null&&Ps(r,o)&&(t.flags|=32),vv(e,t),Re(e,t,l,n),t.child;case 6:return e===null&&Ms(t),null;case 13:return gv(e,t,n);case 4:return tc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Fd(e,t,r,i,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,K(Go,r._currentValue),r._currentValue=l,o!==null)if(mt(o.value,l)){if(o.children===i.children&&!Be.current){t=Ht(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=It(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Rs(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(b(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Rs(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Re(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,sr(t,n),i=lt(i),r=r(i),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),Bd(e,t,r,i,n);case 15:return pv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Oo(e,t),t.tag=1,We(r)?(e=!0,Uo(t)):e=!1,sr(t,n),Bh(t,r,i),Ns(t,r,i,n),Hs(null,t,r,!0,e,n);case 19:return yv(e,t,n);case 22:return hv(e,t,n)}throw Error(b(156,t.tag))};function Mv(e,t){return lh(e,t)}function N0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new N0(e,t,n,r)}function mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function D0(e){if(typeof e=="function")return mc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ru)return 11;if(e===Iu)return 14}return 2}function pn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Po(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")mc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Qn:return zn(n.children,i,o,t);case Mu:l=8,i|=8;break;case as:return e=it(12,n,t,i|2),e.elementType=as,e.lanes=o,e;case ss:return e=it(13,n,t,i),e.elementType=ss,e.lanes=o,e;case us:return e=it(19,n,t,i),e.elementType=us,e.lanes=o,e;case Wp:return zl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fp:l=10;break e;case Bp:l=9;break e;case Ru:l=11;break e;case Iu:l=14;break e;case Xt:l=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=it(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function zn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=it(22,e,r,t),e.elementType=Wp,e.lanes=n,e.stateNode={isHidden:!1},e}function Pa(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Ta(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function A0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ca(0),this.expirationTimes=ca(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ca(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gc(e,t,n,r,i,o,l,a,s){return e=new A0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=it(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ec(o),e}function H0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rv(e){if(!e)return mn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(We(n))return Mh(e,n,t)}return t}function Iv(e,t,n,r,i,o,l,a,s){return e=gc(n,r,!0,e,i,o,l,a,s),e.context=Rv(null),n=e.current,r=Ie(),i=fn(n),o=It(r,i),o.callback=t??null,cn(n,o,i),e.current.lanes=i,Ti(e,i,r),Ue(e,r),e}function Ll(e,t,n,r){var i=t.current,o=Ie(),l=fn(i);return n=Rv(n),t.context===null?t.context=n:t.pendingContext=n,t=It(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cn(i,t,l),e!==null&&(ht(e,i,l,o),_o(e,i,l)),l}function rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ef(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yc(e,t){ef(e,t),(e=e.alternate)&&ef(e,t)}function F0(){return null}var Nv=typeof reportError=="function"?reportError:function(e){console.error(e)};function wc(e){this._internalRoot=e}Ml.prototype.render=wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Ll(e,t,null,null)};Ml.prototype.unmount=wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){Ll(null,e,null,null)}),t[Dt]=null}};function Ml(e){this._internalRoot=e}Ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=ph();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&vh(e)}};function Sc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tf(){}function B0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=rl(l);o.call(u)}}var l=Iv(t,r,e,0,null,!1,!1,"",tf);return e._reactRootContainer=l,e[Dt]=l.current,mi(e.nodeType===8?e.parentNode:e),An(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=rl(s);a.call(u)}}var s=gc(e,0,!1,null,null,!1,!1,"",tf);return e._reactRootContainer=s,e[Dt]=s.current,mi(e.nodeType===8?e.parentNode:e),An(function(){Ll(t,s,n,r)}),s}function Il(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=rl(l);a.call(s)}}Ll(t,l,e,i)}else l=B0(n,t,e,i,r);return rl(l)}dh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qr(t.pendingLanes);n!==0&&(Au(t,n|1),Ue(t,ve()),!(Q&6)&&(yr=ve()+500,wn()))}break;case 13:An(function(){var r=At(e,1);if(r!==null){var i=Ie();ht(r,e,1,i)}}),yc(e,1)}};Hu=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Ie();ht(t,e,134217728,n)}yc(e,134217728)}};fh=function(e){if(e.tag===13){var t=fn(e),n=At(e,t);if(n!==null){var r=Ie();ht(n,e,t,r)}yc(e,t)}};ph=function(){return X};hh=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};ws=function(e,t,n){switch(t){case"input":if(fs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ol(r);if(!i)throw Error(b(90));Vp(r),fs(r,i)}}}break;case"textarea":Gp(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};eh=pc;th=An;var W0={usingClientEntryPoint:!1,Events:[zi,Xn,Ol,Zp,Jp,pc]},Fr={findFiberByHostInstance:On,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},U0={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ih(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||F0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{kl=lo.inject(U0),_t=lo}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W0;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sc(t))throw Error(b(200));return H0(e,t,null,n)};Ke.createRoot=function(e,t){if(!Sc(e))throw Error(b(299));var n=!1,r="",i=Nv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gc(e,1,!1,null,null,n,!1,r,i),e[Dt]=t.current,mi(e.nodeType===8?e.parentNode:e),new wc(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=ih(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return An(e)};Ke.hydrate=function(e,t,n){if(!Rl(t))throw Error(b(200));return Il(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Sc(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Nv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Iv(t,null,e,1,n??null,i,!1,o,l),e[Dt]=t.current,mi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ml(t)};Ke.render=function(e,t,n){if(!Rl(t))throw Error(b(200));return Il(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!Rl(e))throw Error(b(40));return e._reactRootContainer?(An(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};Ke.unstable_batchedUpdates=pc;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Rl(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Il(e,t,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";function Dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dv)}catch(e){console.error(e)}}Dv(),Ip.exports=Ke;var Av=Ip.exports,nf=Av;os.createRoot=nf.createRoot,os.hydrateRoot=nf.hydrateRoot;var Te=function(){return Te=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Te.apply(this,arguments)};function Ci(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ee="-ms-",li="-moz-",q="-webkit-",Hv="comm",Nl="rule",xc="decl",V0="@import",Fv="@keyframes",Q0="@layer",G0=Math.abs,kc=String.fromCharCode,Zs=Object.assign;function Y0(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function Bv(e){return e.trim()}function zt(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function To(e,t){return e.indexOf(t)}function xe(e,t){return e.charCodeAt(t)|0}function wr(e,t,n){return e.slice(t,n)}function wt(e){return e.length}function Wv(e){return e.length}function Yr(e,t){return t.push(e),e}function q0(e,t){return e.map(t).join("")}function rf(e,t){return e.filter(function(n){return!zt(n,t)})}var Dl=1,Sr=1,Uv=0,st=0,me=0,Pr="";function Al(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Dl,column:Sr,length:l,return:"",siblings:a}}function qt(e,t){return Zs(Al("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Wn(e){for(;e.root;)e=qt(e.root,{children:[e]});Yr(e,e.siblings)}function X0(){return me}function K0(){return me=st>0?xe(Pr,--st):0,Sr--,me===10&&(Sr=1,Dl--),me}function vt(){return me=st<Uv?xe(Pr,st++):0,Sr++,me===10&&(Sr=1,Dl++),me}function Ln(){return xe(Pr,st)}function jo(){return st}function Hl(e,t){return wr(Pr,e,t)}function Js(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Z0(e){return Dl=Sr=1,Uv=wt(Pr=e),st=0,[]}function J0(e){return Pr="",e}function ja(e){return Bv(Hl(st-1,eu(e===91?e+2:e===40?e+1:e)))}function ew(e){for(;(me=Ln())&&me<33;)vt();return Js(e)>2||Js(me)>3?"":" "}function tw(e,t){for(;--t&&vt()&&!(me<48||me>102||me>57&&me<65||me>70&&me<97););return Hl(e,jo()+(t<6&&Ln()==32&&vt()==32))}function eu(e){for(;vt();)switch(me){case e:return st;case 34:case 39:e!==34&&e!==39&&eu(me);break;case 40:e===41&&eu(e);break;case 92:vt();break}return st}function nw(e,t){for(;vt()&&e+me!==47+10;)if(e+me===42+42&&Ln()===47)break;return"/*"+Hl(t,st-1)+"*"+kc(e===47?e:vt())}function rw(e){for(;!Js(Ln());)vt();return Hl(e,st)}function iw(e){return J0(zo("",null,null,null,[""],e=Z0(e),0,[0],e))}function zo(e,t,n,r,i,o,l,a,s){for(var u=0,h=0,f=l,m=0,S=0,x=0,y=1,E=1,p=1,c=0,v="",g=i,_=o,k=r,$=v;E;)switch(x=c,c=vt()){case 40:if(x!=108&&xe($,f-1)==58){To($+=H(ja(c),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:$+=ja(c);break;case 9:case 10:case 13:case 32:$+=ew(x);break;case 92:$+=tw(jo()-1,7);continue;case 47:switch(Ln()){case 42:case 47:Yr(ow(nw(vt(),jo()),t,n,s),s);break;default:$+="/"}break;case 123*y:a[u++]=wt($)*p;case 125*y:case 59:case 0:switch(c){case 0:case 125:E=0;case 59+h:p==-1&&($=H($,/\f/g,"")),S>0&&wt($)-f&&Yr(S>32?lf($+";",r,n,f-1,s):lf(H($," ","")+";",r,n,f-2,s),s);break;case 59:$+=";";default:if(Yr(k=of($,t,n,u,h,i,a,v,g=[],_=[],f,o),o),c===123)if(h===0)zo($,t,k,k,g,o,f,a,_);else switch(m===99&&xe($,3)===110?100:m){case 100:case 108:case 109:case 115:zo(e,k,k,r&&Yr(of(e,k,k,0,0,i,a,v,i,g=[],f,_),_),i,_,f,a,r?g:_);break;default:zo($,k,k,k,[""],_,0,a,_)}}u=h=S=0,y=p=1,v=$="",f=l;break;case 58:f=1+wt($),S=x;default:if(y<1){if(c==123)--y;else if(c==125&&y++==0&&K0()==125)continue}switch($+=kc(c),c*y){case 38:p=h>0?1:($+="\f",-1);break;case 44:a[u++]=(wt($)-1)*p,p=1;break;case 64:Ln()===45&&($+=ja(vt())),m=Ln(),h=f=wt(v=$+=rw(jo())),c++;break;case 45:x===45&&wt($)==2&&(y=0)}}return o}function of(e,t,n,r,i,o,l,a,s,u,h,f){for(var m=i-1,S=i===0?o:[""],x=Wv(S),y=0,E=0,p=0;y<r;++y)for(var c=0,v=wr(e,m+1,m=G0(E=l[y])),g=e;c<x;++c)(g=Bv(E>0?S[c]+" "+v:H(v,/&\f/g,S[c])))&&(s[p++]=g);return Al(e,t,n,i===0?Nl:a,s,u,h,f)}function ow(e,t,n,r){return Al(e,t,n,Hv,kc(X0()),wr(e,2,-2),0,r)}function lf(e,t,n,r,i){return Al(e,t,n,xc,wr(e,0,r),wr(e,r+1,-1),r,i)}function Vv(e,t,n){switch(Y0(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 4789:return li+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+li+e+ee+e+e;case 5936:switch(xe(e,t+11)){case 114:return q+e+ee+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+ee+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+ee+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return q+e+ee+e+e;case 6165:return q+e+ee+"flex-"+e+e;case 5187:return q+e+H(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+ee+"flex-$1$2")+e;case 5443:return q+e+ee+"flex-item-"+H(e,/flex-|-self/g,"")+(zt(e,/flex-|baseline/)?"":ee+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return q+e+ee+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return q+e+ee+H(e,"shrink","negative")+e;case 5292:return q+e+ee+H(e,"basis","preferred-size")+e;case 6060:return q+"box-"+H(e,"-grow","")+q+e+ee+H(e,"grow","positive")+e;case 4554:return q+H(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4200:if(!zt(e,/flex-|baseline/))return ee+"grid-column-align"+wr(e,t)+e;break;case 2592:case 3360:return ee+H(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,zt(r.props,/grid-\w+-end/)})?~To(e+(n=n[t].value),"span")?e:ee+H(e,"-start","")+e+ee+"grid-row-span:"+(~To(n,"span")?zt(n,/\d+/):+zt(n,/\d+/)-+zt(e,/\d+/))+";":ee+H(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return zt(r.props,/grid-\w+-start/)})?e:ee+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(wt(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+li+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~To(e,"stretch")?Vv(H(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return ee+i+":"+o+u+(l?ee+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(xe(e,t+6)===121)return H(e,":",":"+q)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+q+(xe(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+ee+"$2box$3")+e;case 100:return H(e,":",":"+ee)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function il(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function lw(e,t,n,r){switch(e.type){case Q0:if(e.children.length)break;case V0:case xc:return e.return=e.return||e.value;case Hv:return"";case Fv:return e.return=e.value+"{"+il(e.children,r)+"}";case Nl:if(!wt(e.value=e.props.join(",")))return""}return wt(n=il(e.children,r))?e.return=e.value+"{"+n+"}":""}function aw(e){var t=Wv(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function sw(e){return function(t){t.root||(t=t.return)&&e(t)}}function uw(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case xc:e.return=Vv(e.value,e.length,n);return;case Fv:return il([qt(e,{value:H(e.value,"@","@"+q)})],r);case Nl:if(e.length)return q0(n=e.props,function(i){switch(zt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wn(qt(e,{props:[H(i,/:(read-\w+)/,":"+li+"$1")]})),Wn(qt(e,{props:[i]})),Zs(e,{props:rf(n,r)});break;case"::placeholder":Wn(qt(e,{props:[H(i,/:(plac\w+)/,":"+q+"input-$1")]})),Wn(qt(e,{props:[H(i,/:(plac\w+)/,":"+li+"$1")]})),Wn(qt(e,{props:[H(i,/:(plac\w+)/,ee+"input-$1")]})),Wn(qt(e,{props:[i]})),Zs(e,{props:rf(n,r)});break}return""})}}var cw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",_c=typeof window<"u"&&"HTMLElement"in window,dw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),fw={},$c=Object.freeze([]),kr=Object.freeze({});function Qv(e,t,n){return n===void 0&&(n=kr),e.theme!==n.theme&&e.theme||t||n.theme}var Gv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),pw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hw=/(^-|-$)/g;function af(e){return e.replace(pw,"-").replace(hw,"")}var vw=/(a)(d)/gi,sf=function(e){return String.fromCharCode(e+(e>25?39:97))};function tu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=sf(t%52)+n;return(sf(t%52)+n).replace(vw,"$1-$2")}var za,rr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Yv=function(e){return rr(5381,e)};function qv(e){return tu(Yv(e)>>>0)}function mw(e){return e.displayName||e.name||"Component"}function La(e){return typeof e=="string"&&!0}var Xv=typeof Symbol=="function"&&Symbol.for,Kv=Xv?Symbol.for("react.memo"):60115,gw=Xv?Symbol.for("react.forward_ref"):60112,yw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ww={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sw=((za={})[gw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},za[Kv]=Zv,za);function uf(e){return("type"in(t=e)&&t.type.$$typeof)===Kv?Zv:"$$typeof"in e?Sw[e.$$typeof]:yw;var t}var xw=Object.defineProperty,kw=Object.getOwnPropertyNames,cf=Object.getOwnPropertySymbols,_w=Object.getOwnPropertyDescriptor,$w=Object.getPrototypeOf,df=Object.prototype;function Jv(e,t,n){if(typeof t!="string"){if(df){var r=$w(t);r&&r!==df&&Jv(e,r,n)}var i=kw(t);cf&&(i=i.concat(cf(t)));for(var o=uf(e),l=uf(t),a=0;a<i.length;++a){var s=i[a];if(!(s in ww||n&&n[s]||l&&s in l||o&&s in o)){var u=_w(t,s);try{xw(e,s,u)}catch{}}}}return e}function _r(e){return typeof e=="function"}function Cc(e){return typeof e=="object"&&"styledComponentId"in e}function Pn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function nu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Oi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ru(e,t,n){if(n===void 0&&(n=!1),!n&&!Oi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ru(e[r],t[r]);else if(Oi(t))for(var r in t)e[r]=ru(e[r],t[r]);return e}function Oc(e,t){Object.defineProperty(e,"toString",{value:t})}function Mi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Cw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Mi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),Lo=new Map,ol=new Map,Ma=1,ao=function(e){if(Lo.has(e))return Lo.get(e);for(;ol.has(Ma);)Ma++;var t=Ma++;return Lo.set(e,t),ol.set(t,e),t},Ow=function(e,t){Lo.set(e,t),ol.set(t,e)},Ew="style[".concat(xr,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),bw=new RegExp("^".concat(xr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Pw=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Tw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(bw);if(s){var u=0|parseInt(s[1],10),h=s[2];u!==0&&(Ow(h,u),Pw(e,h,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function jw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var em=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){return Array.from(a.querySelectorAll("style[".concat(xr,"]"))).at(-1)}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(xr,"active"),r.setAttribute("data-styled-version","6.0.1");var l=jw();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},zw=function(){function e(t){this.element=em(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Mi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Lw=function(){function e(t){this.element=em(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Mw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ff=_c,Rw={isServer:!_c,useCSSOMInjection:!dw},ll=function(){function e(t,n,r){t===void 0&&(t=kr),n===void 0&&(n={});var i=this;this.options=Te(Te({},Rw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&_c&&ff&&(ff=!1,function(o){for(var l=document.querySelectorAll(Ew),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(xr)!=="active"&&(Tw(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Oc(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",u=function(f){var m=function(p){return ol.get(p)}(f);if(m===void 0)return"continue";var S=o.names.get(m),x=l.getGroup(f);if(S===void 0||x.length===0)return"continue";var y="".concat(xr,".g").concat(f,'[id="').concat(m,'"]'),E="";S!==void 0&&S.forEach(function(p){p.length>0&&(E+="".concat(p,","))}),s+="".concat(x).concat(y,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},h=0;h<a;h++)u(h);return s}(i)})}return e.registerId=function(t){return ao(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Te(Te({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Mw(i):r?new zw(i):new Lw(i)}(this.options),new Cw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ao(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ao(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ao(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Iw=/&/g,Nw=/^\s*\/\/.*$/gm;function tm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=tm(n.children,t)),n})}function Dw(e){var t,n,r,i=e===void 0?kr:e,o=i.options,l=o===void 0?kr:o,a=i.plugins,s=a===void 0?$c:a,u=function(m,S,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):m},h=s.slice();h.push(function(m){m.type===Nl&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Iw,n).replace(r,u))}),l.prefix&&h.push(uw),h.push(lw);var f=function(m,S,x,y){S===void 0&&(S=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=S,r=new RegExp("\\".concat(n,"\\b"),"g");var E=m.replace(Nw,""),p=iw(x||S?"".concat(x," ").concat(S," { ").concat(E," }"):E);l.namespace&&(p=tm(p,l.namespace));var c=[];return il(p,aw(h.concat(sw(function(v){return c.push(v)})))),c};return f.hash=s.length?s.reduce(function(m,S){return S.name||Mi(15),rr(m,S.name)},5381).toString():"",f}var Aw=new ll,iu=Dw(),nm=xt.createContext({shouldForwardProp:void 0,styleSheet:Aw,stylis:iu});nm.Consumer;xt.createContext(void 0);function ou(){return Z.useContext(nm)}var Hw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=iu);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Oc(this,function(){throw Mi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=iu),this.name+t.hash},e}(),Fw=function(e){return e>="A"&&e<="Z"};function pf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Fw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var rm=function(e){return e==null||e===!1||e===""},im=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!rm(o)&&(Array.isArray(o)&&o.isCss||_r(o)?r.push("".concat(pf(i),":"),o,";"):Oi(o)?r.push.apply(r,Ci(Ci(["".concat(i," {")],im(o),!1),["}"],!1)):r.push("".concat(pf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in cw||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function hn(e,t,n,r){if(rm(e))return[];if(Cc(e))return[".".concat(e.styledComponentId)];if(_r(e)){if(!_r(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return hn(i,t,n,r)}var o;return e instanceof Hw?n?(e.inject(n,r),[e.getName(r)]):[e]:Oi(e)?im(e):Array.isArray(e)?e.flatMap(function(l){return hn(l,t,n,r)}):[e.toString()]}function om(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(_r(n)&&!Cc(n))return!1}return!0}var Bw=Yv("6.0.1"),Ww=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&om(t),this.componentId=n,this.baseHash=rr(Bw,n),this.baseStyle=r,ll.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Pn(i,this.staticRulesId);else{var o=nu(hn(this.rules,t,n,r)),l=tu(rr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Pn(i,l),this.staticRulesId=l}else{for(var s=rr(this.baseHash,r.hash),u="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")u+=f;else if(f){var m=nu(hn(f,t,n,r));s=rr(s,m),u+=m}}if(u){var S=tu(s>>>0);n.hasNameForId(this.componentId,S)||n.insertRules(this.componentId,S,r(u,".".concat(S),void 0,this.componentId)),i=Pn(i,S)}}return i},e}(),Ec=xt.createContext(void 0);Ec.Consumer;var Ra={};function Uw(e,t,n){var r=Cc(e),i=e,o=!La(e),l=t.attrs,a=l===void 0?$c:l,s=t.componentId,u=s===void 0?function(g,_){var k=typeof g!="string"?"sc":af(g);Ra[k]=(Ra[k]||0)+1;var $="".concat(k,"-").concat(qv("6.0.1"+k+Ra[k]));return _?"".concat(_,"-").concat($):$}(t.displayName,t.parentComponentId):s,h=t.displayName,f=h===void 0?function(g){return La(g)?"styled.".concat(g):"Styled(".concat(mw(g),")")}(e):h,m=t.displayName&&t.componentId?"".concat(af(t.displayName),"-").concat(t.componentId):t.componentId||u,S=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;x=function(g,_){return y(g,_)&&E(g,_)}}else x=y}var p=new Ww(n,m,r?i.componentStyle:void 0);p.isStatic&&a.length;function c(g,_){return function(k,$,C,P){var T=k.attrs,N=k.componentStyle,R=k.defaultProps,M=k.foldedComponentIds,ze=k.styledComponentId,de=k.target,Le=xt.useContext(Ec),et=ou(),j=k.shouldForwardProp||et.shouldForwardProp,I=function(Wt,Qe,Pt){for(var Lr,Sn=Te(Te({},Qe),{className:void 0,theme:Pt}),ia=0;ia<Wt.length;ia+=1){var Wi=_r(Lr=Wt[ia])?Lr(Sn):Lr;for(var Ut in Wi)Sn[Ut]=Ut==="className"?Pn(Sn[Ut],Wi[Ut]):Ut==="style"?Te(Te({},Sn[Ut]),Wi[Ut]):Wi[Ut]}return Qe.className&&(Sn.className=Pn(Sn.className,Qe.className)),Sn}(T,$,Qv($,Le,R)||kr),D=I.as||de,Y={};for(var U in I)I[U]===void 0||U[0]==="$"||U==="as"||U==="theme"||(U==="forwardedAs"?Y.as=I.forwardedAs:j&&!j(U,D)||(Y[U]=I[U]));var bt=function(Wt,Qe){var Pt=ou(),Lr=Wt.generateAndInjectStyles(Qe,Pt.styleSheet,Pt.stylis);return Lr}(N,I),_e=Pn(M,ze);return bt&&(_e+=" "+bt),I.className&&(_e+=" "+I.className),Y[La(D)&&!Gv.has(D)?"class":"className"]=_e,Y.ref=C,Z.createElement(D,Y)}(v,g,_)}c.displayName=f;var v=xt.forwardRef(c);return v.attrs=S,v.componentStyle=p,v.displayName=f,v.shouldForwardProp=x,v.foldedComponentIds=r?Pn(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=m,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(_){for(var k=[],$=1;$<arguments.length;$++)k[$-1]=arguments[$];for(var C=0,P=k;C<P.length;C++)ru(_,P[C],!0);return _}({},i.defaultProps,g):g}}),Oc(v,function(){return".".concat(v.styledComponentId)}),o&&Jv(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function hf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var vf=function(e){return Object.assign(e,{isCss:!0})};function Je(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(_r(e)||Oi(e)){var r=e;return vf(hn(hf($c,Ci([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?hn(i):vf(hn(hf(i,t)))}function lu(e,t,n){if(n===void 0&&(n=kr),!t)throw Mi(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Je.apply(void 0,Ci([i],o,!1)))};return r.attrs=function(i){return lu(e,t,Te(Te({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return lu(e,t,Te(Te({},n),i))},r}var lm=function(e){return lu(Uw,e)},w=lm;Gv.forEach(function(e){w[e]=lm(e)});var Vw=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=om(t),ll.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(nu(hn(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ll.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Qw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Je.apply(void 0,Ci([e],t,!1)),i="sc-global-".concat(qv(JSON.stringify(r))),o=new Vw(r,i),l=function(s){var u=ou(),h=xt.useContext(Ec),f=xt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(f,s,u.styleSheet,h,u.stylis),(xt.useInsertionEffect||xt.useLayoutEffect)(function(){if(!u.styleSheet.server)return a(f,s,u.styleSheet,h,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,s,u.styleSheet,h,u.stylis]),null};function a(s,u,h,f,m){if(o.isStatic)o.renderStyles(s,fw,h,m);else{var S=Te(Te({},u),{theme:Qv(u,f,l.defaultProps)});o.renderStyles(s,S,h,m)}}return xt.memo(l)}const O="1000px",V=Je`
  margin: 0;
  padding: 0;
`,Ct=Je`
  background-repeat: no-repeat;
  background-size: contain;
`,he={blueColor:"#366eff",lightBlackColor:"#16202C",blackColor:"#000000",lightGrayColor:"#1A202C",darkGrayColor:"#0b132a",whiteColor:"#ffffff",transparentWhiteColor:"#ffffff80",grayColor:"#fcfcfc",redColor:"#ff0000",lightGreenColor:"#3cc1b3",greenColor:"#20F1C0",darkGreenColor:"#00BAA4",darkColor:"#1C2938",deepColor:"#141E29",deepGrayColor:"#17212D"},Gw=w.button`
  ${V};
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
`,am=Je`
  background-repeat: no-repeat;
  background-position: center bottom;
`,Fl=Je`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
`,Tr=Je`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`,G=Je`
  font-family: Gramatika, sans-serif;
`,jr=Je`
  font-family: Plus_Jakarta_Sans, sans-serif;
`,bc=Je`
  margin-bottom: 2vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: ${O}) {
    flex-direction: column;
    align-items: center;
  }
`,sm=Je`
  position: absolute;
  background-repeat: no-repeat;
  z-index: 2;
  background-size: cover;

  @media (max-width: ${O}) {
    width: 45vw;
    background-size: auto 100%;
    background-position: center;
  }
`,Bl=Je`
  color: ${he.whiteColor};
  padding-bottom: 2.57vw;
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: 1.74vw;
  font-family: Grammatika, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`,Pc=Je`
  ${V};
  color: ${he.whiteColor};
  ${G};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.08);
  }
`,Bt=()=>{const[e,t]=Z.useState(null);return Z.useEffect(()=>{const n=()=>{const r=window.innerWidth;t(r<=parseInt(O))};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e};function Ve({className:e,children:t,onClick:n,type:r}){return d.jsx(Gw,{type:r,className:e,onClick:n,children:t})}const Yw=()=>{console.log("Press button open account")},qw=()=>{console.log("Press button burger menu")},Xw=()=>{console.log("Press button register")},Kw=()=>{console.log("Press button login")},Zw=()=>{console.log("Press download button")},Jw=()=>{console.log("Press fees button")},e1=()=>{console.log("Press button Read more")},t1=()=>{console.log("Button slide 1 clicked")},n1=()=>{console.log("Button slide 2 clicked")},r1=()=>{console.log("Button slide 3 clicked")},i1=()=>{console.log("Button slide 4 clicked")},{greenColor:um,lightGreenColor:o1,whiteColor:cm}=he,so={title:"Accept Bitcoin Payments",text:"Send, Store, Exchange and Accept Cryptocurrency.",button:"Open Account"},l1=w.section`
  ${Fl};
  width: 100%;
  height: auto;
  min-height: 63.47vw;
  background-image: url("images/main-screen/screen-L.svg");

  @media (max-width: ${O}) {
    width: 100vw;
    min-height: 209.25vw;
    background-image: url("images/main-screen/screen-S.svg");
  }
`,a1=w.div`
  max-width: 50.76vw;
  padding: 17.47vw 0 0 4.28vw;
  width: 50%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: ${O}) {
    height: 200vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 133.05vw 0 10vw 0;
    min-width: 85vw;
  }
`,s1=w.p`
  ${V};
  margin: 0 0 1.9vw;
  color: rgba(255, 255, 255, 0.5);
  ${G};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
`,u1=w.h1`
  ${V};
  color: ${cm};
  font-size: 3.89vw;
  ${G};
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: 9.84vw;
  }
`,c1=w.p`
  ${V};
  margin: 1.46vw 0 5.9vw;
  ${G};
  font-size: calc(25vw / 14.4);
  color: ${um};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${O}) {
    margin: 0;
    font-size: calc(25vw / 5.08);
  }
`,d1=w(Ve)`
  padding: calc(20vw / 14.4);
  background: linear-gradient(
    133deg,
    ${um} 0%,
    ${o1} 100%
  );
  @media (max-width: ${O}) {
    padding: calc(12vw / 5.08);
  }
`,f1=w.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`,p1=w.span`
  ${V};
  margin-right: calc(20vw / 14.4);
  color: ${cm};
  font-size: 1.11vw;
  ${G};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${O}) {
    margin-right: calc(12vw / 5.08);
    font-size: 3.15vw;
  }
`,h1=w.div`
  ${Ct};
  width: 1.18vw;
  height: 1.04vw;
  background-image: url("images/common/play-icon.svg");

  @media (max-width: ${O}) {
    width: 3.35vw;
    height: 2.95vw;
  }
`,v1=()=>{const e=Bt(),t=d.jsxs(f1,{children:[d.jsx(p1,{children:so.button}),d.jsx(h1,{})]});return d.jsx(d.Fragment,{children:d.jsx(l1,{children:d.jsxs(a1,{children:[!e&&d.jsx(s1,{children:so.text}),d.jsx(u1,{children:so.title}),d.jsx(c1,{children:so.text}),d.jsx(d1,{type:"button",children:t,onClick:Yw})]})})})},m1=w.div`
  ${Ct};
  width: 11.25vw;
  height: 2.63vw;
  background-image: url("images/common/logo.svg");

  @media (max-width: ${O}) {
    width: 25vw;
    height: 5.06vw;
  }
`,dm=({...e})=>d.jsx(m1,{...e}),g1=w.a`
  ${V};
  color: ${e=>e.color};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`,cr=({href:e,target:t,rel:n,children:r,...i})=>d.jsx(g1,{href:e,target:t,rel:n,...i,children:r}),y1=w.div`
  display: flex;
  flex-direction: ${({$reverseOrder:e})=>"row"};
  justify-content: left;
  align-items: center;

  @media (max-width: ${O}) {
    justify-content: left;
  }
`,Br=w(cr)`
  margin: 0 1.3vw 0 0;

  @media (max-width: ${O}) {
    margin: 0 1.9vw 0 0;
  }
`,Wr=w.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${O}) {
    width: 6.61vw;
    height: 6.61vw;
  }
`,fm=({type:e})=>{const t=e==="light",n=!t,r=d.jsx(Wr,{src:"images/common/telegram-light.svg",alt:"Telegram icon"}),i=d.jsx(Wr,{src:t?"images/common/twitter-light.svg":"images/common/twitter-dark.svg",alt:"Twitter icon"}),o=d.jsx(Wr,{src:t?"images/common/facebook-light.svg":"images/common/facebook-dark.svg",alt:"Facebook icon"}),l=d.jsx(Wr,{src:"images/common/instagram-dark.svg",alt:"Instagram icon"}),a=d.jsx(Wr,{src:"images/common/email-light.svg",alt:"Email icon"});return d.jsxs(y1,{$reverseOrder:n,children:[!t&&d.jsx(Br,{color:"transparent",href:"https://example.com/instagram",target:"_blank",rel:"noopener noreferrer",children:l}),t&&d.jsx(Br,{color:"transparent",href:"https://example.com/telegram",target:"_blank",rel:"noopener noreferrer",children:r}),d.jsx(Br,{color:"transparent",href:"https://example.com/twitter",target:"_blank",rel:"noopener noreferrer",children:i}),d.jsx(Br,{color:"transparent",href:"https://example.com/facebook",target:"_blank",rel:"noopener noreferrer",children:o}),t&&d.jsx(Br,{color:"transparent",href:"https://example.com/email",target:"_blank",rel:"noopener noreferrer",children:a})]})};var fe={},Tc={},Ri={},Ii={},pm="Expected a function",mf=0/0,w1="[object Symbol]",S1=/^\s+|\s+$/g,x1=/^[-+]0x[0-9a-f]+$/i,k1=/^0b[01]+$/i,_1=/^0o[0-7]+$/i,$1=parseInt,C1=typeof nn=="object"&&nn&&nn.Object===Object&&nn,O1=typeof self=="object"&&self&&self.Object===Object&&self,E1=C1||O1||Function("return this")(),b1=Object.prototype,P1=b1.toString,T1=Math.max,j1=Math.min,Ia=function(){return E1.Date.now()};function z1(e,t,n){var r,i,o,l,a,s,u=0,h=!1,f=!1,m=!0;if(typeof e!="function")throw new TypeError(pm);t=gf(t)||0,al(n)&&(h=!!n.leading,f="maxWait"in n,o=f?T1(gf(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m);function S(k){var $=r,C=i;return r=i=void 0,u=k,l=e.apply(C,$),l}function x(k){return u=k,a=setTimeout(p,t),h?S(k):l}function y(k){var $=k-s,C=k-u,P=t-$;return f?j1(P,o-C):P}function E(k){var $=k-s,C=k-u;return s===void 0||$>=t||$<0||f&&C>=o}function p(){var k=Ia();if(E(k))return c(k);a=setTimeout(p,y(k))}function c(k){return a=void 0,m&&r?S(k):(r=i=void 0,l)}function v(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function g(){return a===void 0?l:c(Ia())}function _(){var k=Ia(),$=E(k);if(r=arguments,i=this,s=k,$){if(a===void 0)return x(s);if(f)return a=setTimeout(p,t),S(s)}return a===void 0&&(a=setTimeout(p,t)),l}return _.cancel=v,_.flush=g,_}function L1(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(pm);return al(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),z1(e,t,{leading:r,maxWait:t,trailing:i})}function al(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function M1(e){return!!e&&typeof e=="object"}function R1(e){return typeof e=="symbol"||M1(e)&&P1.call(e)==w1}function gf(e){if(typeof e=="number")return e;if(R1(e))return mf;if(al(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=al(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(S1,"");var n=k1.test(e);return n||_1.test(e)?$1(e.slice(2),n?2:8):x1.test(e)?mf:+e}var I1=L1,Ni={};Object.defineProperty(Ni,"__esModule",{value:!0});Ni.addPassiveEventListener=function(t,n,r){var i=function(){var o=!1;try{var l=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,l)}catch{}return o}();t.addEventListener(n,r,i?{passive:!0}:!1)};Ni.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r)};Object.defineProperty(Ii,"__esModule",{value:!0});var N1=I1,D1=H1(N1),A1=Ni;function H1(e){return e&&e.__esModule?e:{default:e}}var F1=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,D1.default)(t,n)},le={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=F1(function(i){le.scrollHandler(t)},n);le.scrollSpyContainers.push(t),(0,A1.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return le.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=le.scrollSpyContainers[le.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(le.currentPositionX(t),le.currentPositionY(t))})},addStateHandler:function(t){le.spySetState.push(t)},addSpyHandler:function(t,n){var r=le.scrollSpyContainers[le.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(le.currentPositionX(n),le.currentPositionY(n))},updateStates:function(){le.spySetState.forEach(function(t){return t()})},unmount:function(t,n){le.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),le.spySetState&&le.spySetState.length&&le.spySetState.indexOf(t)>-1&&le.spySetState.splice(le.spySetState.indexOf(t),1),document.removeEventListener("scroll",le.scrollHandler)},update:function(){return le.scrollSpyContainers.forEach(function(t){return le.scrollHandler(t)})}};Ii.default=le;var zr={},Di={};Object.defineProperty(Di,"__esModule",{value:!0});var B1=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,i=r?"#"+r:"",o=window&&window.location,l=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",l):history.replaceState(history.state,"",l)},W1=function(){return window.location.hash.replace(/^#/,"")},U1=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},V1=function(t){return getComputedStyle(t).position!=="static"},Na=function(t,n){for(var r=t.offsetTop,i=t.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},Q1=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(V1(t)){if(n.offsetParent!==t){var i=function(h){return h===t||h===document},o=Na(n,i),l=o.offsetTop,a=o.offsetParent;if(a!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return l}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var s=function(h){return h===document};return Na(n,s).offsetTop-Na(t,s).offsetTop};Di.default={updateHash:B1,getHash:W1,filterElementInContainer:U1,scrollOffset:Q1};var Wl={},jc={};Object.defineProperty(jc,"__esModule",{value:!0});jc.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var zc={};Object.defineProperty(zc,"__esModule",{value:!0});var G1=Ni,Y1=["mousedown","mousewheel","touchmove","keydown"];zc.default={subscribe:function(t){return typeof document<"u"&&Y1.forEach(function(n){return(0,G1.addPassiveEventListener)(document,n,t)})}};var Ai={};Object.defineProperty(Ai,"__esModule",{value:!0});var au={registered:{},scrollEvent:{register:function(t,n){au.registered[t]=n},remove:function(t){au.registered[t]=null}}};Ai.default=au;Object.defineProperty(Wl,"__esModule",{value:!0});var q1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X1=Di;Ul(X1);var K1=jc,yf=Ul(K1),Z1=zc,J1=Ul(Z1),eS=Ai,St=Ul(eS);function Ul(e){return e&&e.__esModule?e:{default:e}}var hm=function(t){return yf.default[t.smooth]||yf.default.defaultEasing},tS=function(t){return typeof t=="function"?t:function(){return t}},nS=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},su=function(){return nS()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),vm=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},mm=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},gm=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},rS=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},iS=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},oS=function e(t,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){St.default.registered.end&&St.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=e.bind(null,t,n);su.call(window,o);return}St.default.registered.end&&St.default.registered.end(i.to,i.target,i.currentPosition)},Lc=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},Hi=function(t,n,r,i){if(n.data=n.data||vm(),window.clearTimeout(n.data.delayTimeout),J1.default.subscribe(function(){n.data.cancel=!0}),Lc(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?mm(n):gm(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){St.default.registered.end&&St.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=tS(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var o=hm(n),l=oS.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){St.default.registered.begin&&St.default.registered.begin(n.data.to,n.data.target),su.call(window,l)},n.delay);return}St.default.registered.begin&&St.default.registered.begin(n.data.to,n.data.target),su.call(window,l)},Vl=function(t){return t=q1({},t),t.data=t.data||vm(),t.absolute=!0,t},lS=function(t){Hi(0,Vl(t))},aS=function(t,n){Hi(t,Vl(n))},sS=function(t){t=Vl(t),Lc(t),Hi(t.horizontal?rS(t):iS(t),t)},uS=function(t,n){n=Vl(n),Lc(n);var r=n.horizontal?mm(n):gm(n);Hi(t+r,n)};Wl.default={animateTopScroll:Hi,getAnimationType:hm,scrollToTop:lS,scrollToBottom:sS,scrollTo:aS,scrollMore:uS};Object.defineProperty(zr,"__esModule",{value:!0});var cS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dS=Di,fS=Mc(dS),pS=Wl,hS=Mc(pS),vS=Ai,uo=Mc(vS);function Mc(e){return e&&e.__esModule?e:{default:e}}var co={},wf=void 0;zr.default={unmount:function(){co={}},register:function(t,n){co[t]=n},unregister:function(t){delete co[t]},get:function(t){return co[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return wf=t},getActiveLink:function(){return wf},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=cS({},n,{absolute:!1});var i=n.containerId,o=n.container,l=void 0;i?l=document.getElementById(i):o&&o.nodeType?l=o:l=document,n.absolute=!0;var a=n.horizontal,s=fS.default.scrollOffset(l,r,a)+(n.offset||0);if(!n.smooth){uo.default.registered.begin&&uo.default.registered.begin(t,r),l===document?n.horizontal?window.scrollTo(s,0):window.scrollTo(0,s):l.scrollTop=s,uo.default.registered.end&&uo.default.registered.end(t,r);return}hS.default.animateTopScroll(s,n,t,r)}};var ym={exports:{}},mS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",gS=mS,yS=gS;function wm(){}function Sm(){}Sm.resetWarningCache=wm;var wS=function(){function e(r,i,o,l,a,s){if(s!==yS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Sm,resetWarningCache:wm};return n.PropTypes=n,n};ym.exports=wS();var Ql=ym.exports,Gl={};Object.defineProperty(Gl,"__esModule",{value:!0});var SS=Di,Da=xS(SS);function xS(e){return e&&e.__esModule?e:{default:e}}var kS={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,i=r.get(t);if(i&&(n||t!==r.getActiveLink())){var o=this.containers[t]||document;r.scrollTo(t,{container:o})}},getHash:function(){return Da.default.getHash()},changeHash:function(t,n){this.isInitialized()&&Da.default.getHash()!==t&&Da.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Gl.default=kS;Object.defineProperty(Ri,"__esModule",{value:!0});var fo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_S=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),$S=Z,Sf=Fi($S),CS=Ii,po=Fi(CS),OS=zr,ES=Fi(OS),bS=Ql,ne=Fi(bS),PS=Gl,Qt=Fi(PS);function Fi(e){return e&&e.__esModule?e:{default:e}}function TS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jS(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function zS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var xf={to:ne.default.string.isRequired,containerId:ne.default.string,container:ne.default.object,activeClass:ne.default.string,activeStyle:ne.default.object,spy:ne.default.bool,horizontal:ne.default.bool,smooth:ne.default.oneOfType([ne.default.bool,ne.default.string]),offset:ne.default.number,delay:ne.default.number,isDynamic:ne.default.bool,onClick:ne.default.func,duration:ne.default.oneOfType([ne.default.number,ne.default.func]),absolute:ne.default.bool,onSetActive:ne.default.func,onSetInactive:ne.default.func,ignoreCancelEvents:ne.default.bool,hashSpy:ne.default.bool,saveHashHistory:ne.default.bool,spyThrottle:ne.default.number};Ri.default=function(e,t){var n=t||ES.default,r=function(o){zS(l,o);function l(a){TS(this,l);var s=jS(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,a));return i.call(s),s.state={active:!1},s}return _S(l,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,u=this.props.container;return s&&!u?document.getElementById(s):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();po.default.isMounted(s)||po.default.mount(s,this.props.spyThrottle),this.props.hashSpy&&(Qt.default.isMounted()||Qt.default.mount(n),Qt.default.mapContainer(this.props.to,s)),po.default.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){po.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var u={};this.state&&this.state.active?u=fo({},this.props.style,this.props.activeStyle):u=fo({},this.props.style);var h=fo({},this.props);for(var f in xf)h.hasOwnProperty(f)&&delete h[f];return h.className=s,h.style=u,h.onClick=this.handleClick,Sf.default.createElement(e,h)}}]),l}(Sf.default.PureComponent),i=function(){var l=this;this.scrollTo=function(a,s){n.scrollTo(a,fo({},l.state,s))},this.handleClick=function(a){l.props.onClick&&l.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),l.scrollTo(l.props.to,l.props)},this.spyHandler=function(a,s){var u=l.getScrollSpyContainer();if(!(Qt.default.isMounted()&&!Qt.default.isInitialized())){var h=l.props.horizontal,f=l.props.to,m=null,S=void 0,x=void 0;if(h){var y=0,E=0,p=0;if(u.getBoundingClientRect){var c=u.getBoundingClientRect();p=c.left}if(!m||l.props.isDynamic){if(m=n.get(f),!m)return;var v=m.getBoundingClientRect();y=v.left-p+a,E=y+v.width}var g=a-l.props.offset;S=g>=Math.floor(y)&&g<Math.floor(E),x=g<Math.floor(y)||g>=Math.floor(E)}else{var _=0,k=0,$=0;if(u.getBoundingClientRect){var C=u.getBoundingClientRect();$=C.top}if(!m||l.props.isDynamic){if(m=n.get(f),!m)return;var P=m.getBoundingClientRect();_=P.top-$+s,k=_+P.height}var T=s-l.props.offset;S=T>=Math.floor(_)&&T<Math.floor(k),x=T<Math.floor(_)||T>=Math.floor(k)}var N=n.getActiveLink();if(x){if(f===N&&n.setActiveLink(void 0),l.props.hashSpy&&Qt.default.getHash()===f){var R=l.props.saveHashHistory,M=R===void 0?!1:R;Qt.default.changeHash("",M)}l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive(f,m))}if(S&&(N!==f||l.state.active===!1)){n.setActiveLink(f);var ze=l.props.saveHashHistory,de=ze===void 0?!1:ze;l.props.hashSpy&&Qt.default.changeHash(f,de),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(f,m))}}}};return r.propTypes=xf,r.defaultProps={offset:0},r};Object.defineProperty(Tc,"__esModule",{value:!0});var LS=Z,kf=xm(LS),MS=Ri,RS=xm(MS);function xm(e){return e&&e.__esModule?e:{default:e}}function IS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function NS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var DS=function(e){NS(t,e);function t(){var n,r,i,o;IS(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return o=(r=(i=_f(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.render=function(){return kf.default.createElement("a",i.props,i.props.children)},r),_f(i,o)}return t}(kf.default.Component);Tc.default=(0,RS.default)(DS);var Rc={};Object.defineProperty(Rc,"__esModule",{value:!0});var AS=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),HS=Z,$f=km(HS),FS=Ri,BS=km(FS);function km(e){return e&&e.__esModule?e:{default:e}}function WS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function US(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function VS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var QS=function(e){VS(t,e);function t(){return WS(this,t),US(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return AS(t,[{key:"render",value:function(){return $f.default.createElement("input",this.props,this.props.children)}}]),t}($f.default.Component);Rc.default=(0,BS.default)(QS);var Ic={},Yl={};Object.defineProperty(Yl,"__esModule",{value:!0});var GS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},YS=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),qS=Z,Cf=ql(qS),XS=Av;ql(XS);var KS=zr,Of=ql(KS),ZS=Ql,Ef=ql(ZS);function ql(e){return e&&e.__esModule?e:{default:e}}function JS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ex(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function tx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Yl.default=function(e){var t=function(n){tx(r,n);function r(i){JS(this,r);var o=ex(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return YS(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Of.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){Of.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return Cf.default.createElement(e,GS({},this.props,{parentBindings:this.childBindings}))}}]),r}(Cf.default.Component);return t.propTypes={name:Ef.default.string,id:Ef.default.string},t};Object.defineProperty(Ic,"__esModule",{value:!0});var bf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nx=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),rx=Z,Pf=Nc(rx),ix=Yl,ox=Nc(ix),lx=Ql,Tf=Nc(lx);function Nc(e){return e&&e.__esModule?e:{default:e}}function ax(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sx(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ux(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _m=function(e){ux(t,e);function t(){return ax(this,t),sx(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return nx(t,[{key:"render",value:function(){var r=this,i=bf({},this.props);return i.parentBindings&&delete i.parentBindings,Pf.default.createElement("div",bf({},i,{ref:function(l){r.props.parentBindings.domNode=l}}),this.props.children)}}]),t}(Pf.default.Component);_m.propTypes={name:Tf.default.string,id:Tf.default.string};Ic.default=(0,ox.default)(_m);var Aa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jf=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function zf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lf(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Mf(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ho=Z,xn=Ii,Ha=zr,ae=Ql,Gt=Gl,Rf={to:ae.string.isRequired,containerId:ae.string,container:ae.object,activeClass:ae.string,spy:ae.bool,smooth:ae.oneOfType([ae.bool,ae.string]),offset:ae.number,delay:ae.number,isDynamic:ae.bool,onClick:ae.func,duration:ae.oneOfType([ae.number,ae.func]),absolute:ae.bool,onSetActive:ae.func,onSetInactive:ae.func,ignoreCancelEvents:ae.bool,hashSpy:ae.bool,spyThrottle:ae.number},cx={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Ha,i=function(l){Mf(a,l);function a(s){zf(this,a);var u=Lf(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return o.call(u),u.state={active:!1},u}return jf(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,h=this.props.container;return u?document.getElementById(u):h&&h.nodeType?h:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();xn.isMounted(u)||xn.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Gt.isMounted()||Gt.mount(r),Gt.mapContainer(this.props.to,u)),this.props.spy&&xn.addStateHandler(this.stateHandler),xn.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){xn.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var h=Aa({},this.props);for(var f in Rf)h.hasOwnProperty(f)&&delete h[f];return h.className=u,h.onClick=this.handleClick,ho.createElement(t,h)}}]),a}(ho.Component),o=function(){var a=this;this.scrollTo=function(s,u){r.scrollTo(s,Aa({},a.state,u))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(s){var u=a.getScrollSpyContainer();if(!(Gt.isMounted()&&!Gt.isInitialized())){var h=a.props.to,f=null,m=0,S=0,x=0;if(u.getBoundingClientRect){var y=u.getBoundingClientRect();x=y.top}if(!f||a.props.isDynamic){if(f=r.get(h),!f)return;var E=f.getBoundingClientRect();m=E.top-x+s,S=m+E.height}var p=s-a.props.offset,c=p>=Math.floor(m)&&p<Math.floor(S),v=p<Math.floor(m)||p>=Math.floor(S),g=r.getActiveLink();if(v)return h===g&&r.setActiveLink(void 0),a.props.hashSpy&&Gt.getHash()===h&&Gt.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),xn.updateStates();if(c&&g!==h)return r.setActiveLink(h),a.props.hashSpy&&Gt.changeHash(h),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(h)),xn.updateStates()}}};return i.propTypes=Rf,i.defaultProps={offset:0},i},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Mf(i,r);function i(o){zf(this,i);var l=Lf(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return l.childBindings={domNode:null},l}return jf(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(l){this.props.name!==l.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Ha.unregister(this.props.name)}},{key:"registerElems",value:function(l){Ha.register(l,this.childBindings.domNode)}},{key:"render",value:function(){return ho.createElement(t,Aa({},this.props,{parentBindings:this.childBindings}))}}]),i}(ho.Component);return n.propTypes={name:ae.string,id:ae.string},n}},dx=cx;Object.defineProperty(fe,"__esModule",{value:!0});fe.Helpers=fe.ScrollElement=fe.ScrollLink=fe.animateScroll=fe.scrollSpy=fe.Events=fe.scroller=qr=fe.Element=fe.Button=Mm=fe.Link=void 0;var fx=Tc,$m=Ot(fx),px=Rc,Cm=Ot(px),hx=Ic,Om=Ot(hx),vx=zr,Em=Ot(vx),mx=Ai,bm=Ot(mx),gx=Ii,Pm=Ot(gx),yx=Wl,Tm=Ot(yx),wx=Ri,jm=Ot(wx),Sx=Yl,zm=Ot(Sx),xx=dx,Lm=Ot(xx);function Ot(e){return e&&e.__esModule?e:{default:e}}var Mm=fe.Link=$m.default;fe.Button=Cm.default;var qr=fe.Element=Om.default;fe.scroller=Em.default;fe.Events=bm.default;fe.scrollSpy=Pm.default;fe.animateScroll=Tm.default;fe.ScrollLink=jm.default;fe.ScrollElement=zm.default;fe.Helpers=Lm.default;fe.default={Link:$m.default,Button:Cm.default,Element:Om.default,scroller:Em.default,Events:bm.default,scrollSpy:Pm.default,animateScroll:Tm.default,ScrollLink:jm.default,ScrollElement:zm.default,Helpers:Lm.default};const{whiteColor:Dc,greenColor:kx,lightGreenColor:_x}=he,If={signUp:"Register",signIn:"Log In"},$x=w.header`
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
  border-bottom: 0.5px ${Dc} solid;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  @media (max-width: ${O}) {
    box-sizing: border-box;
    padding: 10vw 8.27vw 0;
    min-height: 25vw;
    justify-content: space-between;
  }
`,Cx=w.ul`
  ${V};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  margin: 0 2vw;
  width: 41.11vw;
  border-left: 1px solid rgba(255, 255, 255, 0.9);
  border-right: 1px solid rgba(255, 255, 255, 0.9);
`,Ox=w.li`
  ${V};
  ${jr};
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
    ${V};
    display: inline-block;
    max-width: 7vw;
    color: rgba(255, 255, 255, 0.9);
  }
`,Ex=w(Ve)`
  ${Ct};
  background-color: transparent;
  width: 6.5vw;
  height: 3.77vw;
  border-radius: 0;
  background-image: url("images/header/burger-icon.svg");
`,bx=w.span`
  color: ${Dc};
  ${jr};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.48px;
  text-decoration-line: underline;
`,Px=w.span`
  color: ${Dc};
  ${G};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.42px;
`,Nf=w.div`
  display: flex;
`,Tx=w(Ve)`
  padding: 0.5vw 2vw;
  background: linear-gradient(
    133deg,
    ${kx} 0%,
    ${_x} 100%
  );
`,jx=w(dm)`
  width: 21vw;
  display: flex;
  position: relative;
`,zx=w(Ve)`
  margin-right: 2vw;
  background-color: transparent;
`,Lx=w.div`
  margin-right: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,Mx=({sections:e})=>{const t=Bt(),n=d.jsx(Nf,{children:d.jsx(bx,{children:If.signUp})}),r=d.jsx(Nf,{children:d.jsx(Px,{children:If.signIn})});return t===null?null:d.jsxs($x,{children:[d.jsx(jx,{color:"transparent"}),t&&d.jsx(Ex,{type:"button",children:d.jsx(d.Fragment,{}),onClick:qw}),!t&&d.jsxs(d.Fragment,{children:[d.jsx(fm,{type:"light"}),d.jsx("nav",{children:d.jsx(Cx,{children:e.map(i=>d.jsx(Ox,{children:d.jsx(Mm,{to:i.id,spy:!0,smooth:!0,duration:500,children:i.title})},i.id))})}),d.jsxs(Lx,{children:[d.jsx(zx,{type:"button",children:n,onClick:Xw}),d.jsx(Tx,{type:"button",children:r,onClick:Kw})]})]})]})},{lightGrayColor:Rm}=he,Rx=w.div`
  position: relative;
  z-index: 1;
  max-width: 19.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${O}) {
    max-width: 54.33vw;
  }
`,Ix=w.h3`
  width: 130%;
  ${V};
  color: ${Rm};
  text-align: center;
  ${G};
  font-size: calc(26vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.52px;

  @media (max-width: ${O}) {
    width: 100%;
    font-size: calc(26vw / 5.08);
    margin: 5vw 0 0 0;
  }
`,Nx=w.p`
  ${V};
  margin: 1.11vw 0 2.85vw;
  color: ${Rm};
  text-align: center;
  ${G};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;

  @media (max-width: ${O}) {
    font-size: calc(20vw / 5.08);
    margin: 0.7vw 0 4.72vw;
  }
`,Fa=({subtitle:e,text:t,svg:n})=>d.jsxs(Rx,{children:[n,d.jsx(Ix,{children:e}),d.jsx(Nx,{children:t})]}),{whiteColor:Ac}=he,Dx=w.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  border-bottom: none;
  align-self: start;
  max-width: ((1440vw - 50vw) / 4);

  @media (max-width: ${O}) {
    align-self: center;
    padding: 10.5vw 3.5vw;
    max-width: 80.3vw;
    border-bottom: 0.5px ${Ac} solid;
  }

  &:last-child {
    border: none;
  }
`,Ax=w.div`
  width: 100%;
  min-height: 3.56vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${O}) {
    width: 100%;
  }
`,Hx=w.h3`
  ${V};
  color: ${Ac};
  ${G};
  font-size: calc(26vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 0.96;
  text-align: left;

  @media (max-width: ${O}) {
    line-height: 0.83;
    font-size: calc(30vw / 5.08);
  }
`,Fx=w.p`
  ${V};
  margin: 2.5vw 0 0 0;
  color: ${Ac};
  ${G};
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
`,Bx=({subtitle:e,text:t,svg:n})=>d.jsxs(Dx,{children:[d.jsxs(Ax,{children:[n,d.jsx(Hx,{children:e})]}),d.jsx(Fx,{children:t})]}),Wx=w.div`
  ${Ct};
  height: 25.14vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url("images/how-it-works/advantages/advantages-L.svg");

  @media (max-width: ${O}) {
    min-height: 212.58vw;
    background-image: url("images/how-it-works/advantages/advantages-S.svg");
    flex-direction: column;
  }
`,Ux=w.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${O}) {
    justify-content: center;
    flex-direction: column;
  }
`,Vx=w.div`
  ${Ct};
  width: 3.75vw;
  height: 3.75vw;
  margin-right: 1vw;
  background-image: url(${({$image:e})=>e});

  @media (max-width: ${O}) {
    margin-right: 5vw;
    width: 13.95vw;
    height: 13.95vw;
  }
`,Qx=({advantages:e})=>d.jsx(Wx,{children:d.jsx(Ux,{children:e.map(t=>d.jsx(Bx,{svg:d.jsx(Vx,{$image:t.image}),subtitle:t.subtitle,text:t.text},t.index))})}),Gx=w.h2`
  ${V};
  text-align: center;
  font-size: calc(50vw / 14.4);
  ${G};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -1px;
  color: ${e=>e.color};

  @media (max-width: ${O}) {
    font-size: calc(50vw / 5.08);
    line-height: 1.2;
  }
`,Et=({children:e,...t})=>d.jsx(Gx,{...t,children:e}),Yx=w.p`
  ${V};
  text-align: center;
  font-size: calc(20vw / 14.05);
  ${G};
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.color};

  @media (max-width: ${O}) {
    ${jr};
    font-size: calc(18vw / 5.08);
    line-height: 1.5;
  }
`,Xl=({children:e,...t})=>d.jsx(Yx,{...t,children:e}),{darkGrayColor:Df}=he,Tt={title:"How it work",text:'"Brief description of how the app works"',stepOne:{subtitle:"Send invoice",text:"Merchant issues an invoice in their local currency"},stepTwo:{subtitle:"Payment",text:"The user pays in the currency in which it is convenient for him. We take care of all the difficulties with overpayments and underpayments."},stepThree:{subtitle:"Broadcast",text:"Conversion and withdrawal, the merchant at any time withdraws his funds to his wallet in the currency in which he is comfortable."},advantages:[{index:"1",subtitle:"EU Regulated",text:"is fully regulated underEstionian License.",image:"images/how-it-works/advantages/advantages-first-icon.svg"},{index:"2",subtitle:"All types of crypto",text:"Coins, StableCoins, Tokens are supported.",image:"images/how-it-works/advantages/advantages-second-icon.svg"},{index:"3",subtitle:"Major Blockchains",text:"Bitcoin, Ethereum, Solana, BinanceSmart Chain, Ripple, etc.",image:"images/how-it-works/advantages/advantages-third-icon.svg"},{index:"4",subtitle:"Free of Charge",text:"All outgoing transactions, transfers and payouts in crypto are free of charge.",image:"images/how-it-works/advantages/advantages-fourth-icon.svg"}]},qx=w.div`
  position: relative;
  margin: 0 auto 2vw;
  ${Fl};
  width: 93.54vw;
  height: auto;
  background-image: url("images/how-it-works/steps-L.svg");

  @media (max-width: ${O}) {
    padding-top: 16.7vw;
    width: 90.55vw;
    background-image: url("images/how-it-works/steps-S.svg");
  }
`,Xx=w(Xl)`
  margin: 0.7vw 0 1.71vw;

  @media (max-width: ${O}) {
    margin-bottom: 4.72vw;
  }
`,Kx=w.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;

  @media (max-width: ${O}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,Af=w.div`
  position: relative;

  @media (max-width: ${O}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,Zx=w.div`
  ${sm};
  background-image: url("images/how-it-works/left-line-L.svg");
  top: 4vw;
  left: 14.5vw;
  width: 20.83vw;
  height: 6.04vw;
  z-index: 888;

  @media (max-width: ${O}) {
    top: 25vw;
    left: 7vw;
    height: calc(100% - 20.86vw + 15vw);
    background-image: url("images/how-it-works/left-line-S.svg");
  }
`,Jx=w.div`
  ${sm};
  background-image: url("images/how-it-works/right-line-L.svg");
  top: 4vw;
  right: -15vw;
  width: 19vw;
  height: 6.04vw;

  @media (max-width: ${O}) {
    top: 30vw;
    right: 3vw;
    height: calc(100% - 24.56vw + 15vw);
    background-image: url("images/how-it-works/right-line-S.svg");
  }
`,ek=w.div`
  ${bc};
  margin-bottom: 2vw;
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("images/how-it-works/send-invoice.svg");
  ${am};
  background-size: 7.4vw 7.4vw;

  @media (max-width: ${O}) {
    margin-top: 2vw;
    width: 20.86vw;
    height: 20.86vw;
    background-image: url("images/how-it-works/send-invoice.svg");
    ${Ct}
  }
`,tk=w.div`
  ${bc};
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("images/how-it-works/payment.jpg");
  ${am};
  background-size: 8.6vw 8.6vw;

  @media (max-width: ${O}) {
    margin-top: 4vw;
    width: 24.56vw;
    height: 24.56vw;
    background-image: url("images/how-it-works/payment.jpg");
    ${Ct};
  }
}
`,nk=w.div`
  ${bc};
  top: 0;
  left: 0;
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("images/how-it-works/brodcast.jpg");
  ${Ct};

  @media (max-width: ${O}) {
    margin: 4vw 0 4vw;
    width: 32.08vw;
    height: 32.08vw;
    background-image: url("images/how-it-works/brodcast.jpg");
  }
`,rk=()=>d.jsxs(d.Fragment,{children:[d.jsxs(qx,{children:[d.jsx(Et,{color:Df,children:Tt.title}),d.jsx(Xx,{color:Df,children:Tt.text}),d.jsxs(Kx,{children:[d.jsxs(Af,{children:[d.jsx(Zx,{}),d.jsx(Fa,{svg:d.jsx(ek,{}),subtitle:Tt.stepOne.subtitle,text:Tt.stepOne.text})]}),d.jsxs(Af,{children:[d.jsx(Jx,{}),d.jsx(Fa,{svg:d.jsx(tk,{}),subtitle:Tt.stepTwo.subtitle,text:Tt.stepTwo.text})]}),d.jsx(Fa,{svg:d.jsx(nk,{}),subtitle:Tt.stepThree.subtitle,text:Tt.stepThree.text})]})]}),d.jsx(Qx,{advantages:Tt.advantages})]}),{darkColor:ik,whiteColor:Im,darkGrayColor:ok,lightGreenColor:lk,greenColor:ak}=he,uu={title:"Mobile Wallet",text:"A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",button:"Download"},sk=w.section`
  position: relative;
  background-color: ${ik};
  min-height: 41.53vw;

  @media (max-width: ${O}) {
    background-color: ${ok};
    box-sizing: border-box;
    min-height: 270.66vw;
    flex-direction: column;
  }
`,uk=w.div`
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
  ${Tr};
  background-image: url("images/products-and-service/mobile-wallet-L.svg");

  @media (max-width: ${O}) {
    box-sizing: border-box;
    padding: 0 9vw 4.14vw;
    background-image: url("images/products-and-service/mobile-wallet-S.svg");
    justify-content: end;
    align-items: start;
  }
`,ck=w.p`
  max-width: 37%;
  ${Pc};
  margin: 3.06vw 0 3.75vw;

  @media (max-width: ${O}) {
    max-width: 90%;
    margin: 8.82vw 0;
  }
`,dk=w(Ve)`
  background: linear-gradient(
    133deg,
    ${ak} 0%,
    ${lk} 100%
  );
  border-radius: 0;
`,fk=w.div`
  padding: 0.8vw 1.7vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${O}) {
    min-width: 33vw;
    min-height: 8.33vw;
  }
`,pk=w.span`
  margin-left: 2.29vw;
  color: ${Im};
  font-size: 1.11vw;
  ${G};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${O}) {
    margin-left: 6vw;
    font-size: 3.19vw;
  }
`,hk=w.div`
  ${Ct};
  width: 0.97vw;
  height: 1.53vw;
  background-image: url("images/products-and-service/download-icon.svg");

  @media (max-width: ${O}) {
    width: 2.39vw;
    height: 2.79vw;
  }
`,vk=d.jsxs(fk,{children:[d.jsx(hk,{}),d.jsx(pk,{children:uu.button})]}),mk=()=>d.jsx(sk,{children:d.jsxs(uk,{children:[d.jsx(Et,{color:Im,children:uu.title}),d.jsx(ck,{children:uu.text}),d.jsx(dk,{type:"button",children:vk,onClick:Zw})]})}),{whiteColor:Nm,darkGrayColor:gk}=he,Ba={title:"Avaible Currencies",text:"A vast range of major coins, stablecoins and liquid tokens is available.",imagesContext:[{text:"Coins",image:"images/products-and-service/lineOne.svg"},{text:"Stablekoins",image:"images/products-and-service/lineTwo.svg"},{text:"Tokens",image:"images/products-and-service/lineThree.svg"}]},yk=w.section`
  ${Tr};
  background-position: center -9.72vw;
  min-height: calc(1116vw / 14.4 - 9.72vw);
  padding: 8.26vw 0 8.26vw 4.93vw;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-image: url("images/products-and-service/avaible-currencies.svg");

  @media (max-width: ${O}) {
    padding: 22vw 0 20.27vw 9vw;
    min-height: 212.58vw;
    flex-direction: column;
    background-image: none;
    background-color: ${gk};
    overflow-x: hidden;
  }
`,wk=w.div`
  display: grid;
  grid-template-columns: 19vw 1fr;
  grid-template-rows: auto auto auto;
  gap: 5.2vw 1vw;

  @media (max-width: ${O}) {
    display: flex;
    flex-direction: column;
  }
`,Sk=w.div`
  grid-column: 1;
  display: flex;
  align-items: center;

  @media (max-width: ${O}) {
    width: 52%;
    align-items: center;
  }
`,xk=w.div`
  grid-column: 2;
  display: flex;
  align-items: center;

  @media (max-width: ${O}) {
    align-items: end;
    justify-content: end;
  }
`,Hf=w.img`
  width: 74vw;
  height: auto;

  @media (max-width: ${O}) {
    width: 92vw;
    overflow-x: hidden;
  }
`,kk=w.p`
  ${Pc};
  max-width: 37%;
  margin: 2vw 0 6.18vw;

  @media (max-width: 1400px) {
    max-width: 90%;
    margin: 7.87vw 0 4.3vw;
  }
`,_k=w.p`
  ${V};
  ${G};
  color: ${Nm};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.8px;
  margin: 0 1vw 0 0;

  @media (max-width: ${O}) {
    text-align: start;
    line-height: 1;
    font-size: calc(35vw / 5.8);
    letter-spacing: -0.7px;
    width: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.8);
    margin: 14.37vw 0 10vw;
  }
`,$k=()=>{const e=Bt();return d.jsxs(yk,{children:[d.jsx(Et,{color:Nm,children:Ba.title}),d.jsx(kk,{children:Ba.text}),d.jsx(wk,{children:Ba.imagesContext.map((t,n)=>d.jsxs(Z.Fragment,{children:[d.jsx(Sk,{children:d.jsx(_k,{children:t.text})}),d.jsx(xk,{children:e?d.jsx(Hf,{src:"images/products-and-service/line-S.svg",alt:t.text}):d.jsx(Hf,{src:t.image,alt:t.text})})]},n))})]})},{whiteColor:Ck}=he,Ok=w.h4`
  ${V};
  text-align: center;
  font-size: calc(22vw / 14.05);
  ${G};
  font-weight: 500;
  line-height: 1.5;
  color: ${Ck};

  @media (max-width: ${O}) {
    font-size: calc(22vw / 5.08);
  }
`,Ek=({children:e,...t})=>d.jsx(Ok,{...t,children:e}),{greenColor:bk}=he,Pk=w.div`
  width: 82.25vw;

  @media (max-width: ${O}) {
    width: 82.41vw;
    margin-right: 7.66vw;
    height: 100%;
    display: flex;
  }
`,Tk=w.div`
  margin-top: 2.57vw;
  padding: 0 0 0 6vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 82.25vw;
  ${Fl};
  background-image: url("images/products-and-service/item-L.svg");
  border-radius: 30px;

  @media (max-width: ${O}) {
    margin-top: 0;
    padding: 8.86vw 4.53vw;
    justify-content: start;
    flex-direction: column;
    width: 82.41vw;
    height: 100%;
    background-image: url("images/products-and-service/item-S.svg");
  }
`,jk=w.p`
  ${Pc};
  margin: 6.74vw 0 2.57vw;

  @media (max-width: ${O}) {
    margin: 12.95vw 0 4.32vw;
  }
`,zk=w.div`
  width: 32vw;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: ${O}) {
    margin: 0 auto;
    width: 70vw;
    box-sizing: border-box;
  }
`,Lk=w(Ve)`
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${bk};
  font-size: 1.74vw;
  ${G};
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
    background-image: url("images/products-and-service/play.svg");
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 60%;
    transform: translateY(-60%);

    @media (max-width: ${O}) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`,Mk=w.div`
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
`,Rk=w.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,Dm=({slide:e})=>{const t=Bt(),n=r=>{switch(r){case"1":t1();break;case"2":n1();break;case"3":r1();break;case"4":i1();break}};return d.jsx(Pk,{children:d.jsxs(Tk,{children:[t&&d.jsx(Ek,{children:e.mainButton}),d.jsxs(zk,{children:[d.jsx(jk,{children:e.textContent}),d.jsx(Lk,{type:"button",onClick:()=>n(e.id),children:e.button})]}),d.jsx(Mk,{children:d.jsx(Rk,{src:e.image,alt:"Image"})})]})})};var Am={},Hm={},Kl={},Fm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Fm);var Ik="Expected a function",Ff=0/0,Nk="[object Symbol]",Dk=/^\s+|\s+$/g,Ak=/^[-+]0x[0-9a-f]+$/i,Hk=/^0b[01]+$/i,Fk=/^0o[0-7]+$/i,Bk=parseInt,Wk=typeof nn=="object"&&nn&&nn.Object===Object&&nn,Uk=typeof self=="object"&&self&&self.Object===Object&&self,Vk=Wk||Uk||Function("return this")(),Qk=Object.prototype,Gk=Qk.toString,Yk=Math.max,qk=Math.min,Wa=function(){return Vk.Date.now()};function Xk(e,t,n){var r,i,o,l,a,s,u=0,h=!1,f=!1,m=!0;if(typeof e!="function")throw new TypeError(Ik);t=Bf(t)||0,cu(n)&&(h=!!n.leading,f="maxWait"in n,o=f?Yk(Bf(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m);function S(k){var $=r,C=i;return r=i=void 0,u=k,l=e.apply(C,$),l}function x(k){return u=k,a=setTimeout(p,t),h?S(k):l}function y(k){var $=k-s,C=k-u,P=t-$;return f?qk(P,o-C):P}function E(k){var $=k-s,C=k-u;return s===void 0||$>=t||$<0||f&&C>=o}function p(){var k=Wa();if(E(k))return c(k);a=setTimeout(p,y(k))}function c(k){return a=void 0,m&&r?S(k):(r=i=void 0,l)}function v(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function g(){return a===void 0?l:c(Wa())}function _(){var k=Wa(),$=E(k);if(r=arguments,i=this,s=k,$){if(a===void 0)return x(s);if(f)return a=setTimeout(p,t),S(s)}return a===void 0&&(a=setTimeout(p,t)),l}return _.cancel=v,_.flush=g,_}function cu(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Kk(e){return!!e&&typeof e=="object"}function Zk(e){return typeof e=="symbol"||Kk(e)&&Gk.call(e)==Nk}function Bf(e){if(typeof e=="number")return e;if(Zk(e))return Ff;if(cu(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=cu(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Dk,"");var n=Hk.test(e);return n||Fk.test(e)?Bk(e.slice(2),n?2:8):Ak.test(e)?Ff:+e}var Jk=Xk,Bm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Bm);var Zl=Bm.exports,z={};Object.defineProperty(z,"__esModule",{value:!0});z.checkSpecKeys=z.checkNavigable=z.changeSlide=z.canUseDOM=z.canGoNext=void 0;z.clamp=Wm;z.swipeStart=z.swipeMove=z.swipeEnd=z.slidesOnRight=z.slidesOnLeft=z.slideHandler=z.siblingDirection=z.safePreventDefault=z.lazyStartIndex=z.lazySlidesOnRight=z.lazySlidesOnLeft=z.lazyEndIndex=z.keyHandler=z.initializedState=z.getWidth=z.getTrackLeft=z.getTrackCSS=z.getTrackAnimateCSS=z.getTotalSlides=z.getSwipeDirection=z.getSlideCount=z.getRequiredLazySlides=z.getPreClones=z.getPostClones=z.getOnDemandLazySlides=z.getNavigableIndexes=z.getHeight=z.extractObject=void 0;var e2=t2(Z);function t2(e){return e&&e.__esModule?e:{default:e}}function Wf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wf(Object(n),!0).forEach(function(r){n2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function n2(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wm(e,t,n){return Math.max(t,Math.min(e,n))}var Mn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};z.safePreventDefault=Mn;var Hc=function(t){for(var n=[],r=Fc(t),i=Bc(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};z.getOnDemandLazySlides=Hc;var r2=function(t){for(var n=[],r=Fc(t),i=Bc(t),o=r;o<i;o++)n.push(o);return n};z.getRequiredLazySlides=r2;var Fc=function(t){return t.currentSlide-Um(t)};z.lazyStartIndex=Fc;var Bc=function(t){return t.currentSlide+Vm(t)};z.lazyEndIndex=Bc;var Um=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};z.lazySlidesOnLeft=Um;var Vm=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};z.lazySlidesOnRight=Vm;var sl=function(t){return t&&t.offsetWidth||0};z.getWidth=sl;var Wc=function(t){return t&&t.offsetHeight||0};z.getHeight=Wc;var Uc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};z.getSwipeDirection=Uc;var Vc=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};z.canGoNext=Vc;var i2=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};z.extractObject=i2;var o2=function(t){var n=e2.default.Children.count(t.children),r=t.listRef,i=Math.ceil(sl(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(sl(o)),a;if(t.vertical)a=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),a=Math.ceil((i-s)/t.slidesToShow)}var u=r&&Wc(r.querySelector('[data-index="0"]')),h=u*t.slidesToShow,f=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(f=n-1-t.initialSlide);var m=t.lazyLoadedList||[],S=Hc(re(re({},t),{},{currentSlide:f,lazyLoadedList:m}));m=m.concat(S);var x={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:f,slideHeight:u,listHeight:h,lazyLoadedList:m};return t.autoplaying===null&&t.autoplay&&(x.autoplaying="playing"),x};z.initializedState=o2;var l2=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,s=t.lazyLoad,u=t.currentSlide,h=t.centerMode,f=t.slidesToScroll,m=t.slidesToShow,S=t.useCSS,x=t.lazyLoadedList;if(n&&r)return{};var y=l,E,p,c,v={},g={},_=o?l:Wm(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&x.indexOf(y)<0&&(x=x.concat(y)),v={animating:!0,currentSlide:y,lazyLoadedList:x,targetSlide:y},g={animating:!1,targetSlide:y}}else E=y,y<0?(E=y+a,o?a%f!==0&&(E=a-a%f):E=0):!Vc(t)&&y>u?y=E=u:h&&y>=a?(y=o?a:a-1,E=o?0:a-1):y>=a&&(E=y-a,o?a%f!==0&&(E=0):E=a-m),!o&&y+m>=a&&(E=a-m),p=bi(re(re({},t),{},{slideIndex:y})),c=bi(re(re({},t),{},{slideIndex:E})),o||(p===c&&(y=E),p=c),s&&(x=x.concat(Hc(re(re({},t),{},{currentSlide:y})))),S?(v={animating:!0,currentSlide:E,trackStyle:Qc(re(re({},t),{},{left:p})),lazyLoadedList:x,targetSlide:_},g={animating:!1,currentSlide:E,trackStyle:Ei(re(re({},t),{},{left:c})),swipeLeft:null,targetSlide:_}):v={currentSlide:E,trackStyle:Ei(re(re({},t),{},{left:c})),lazyLoadedList:x,targetSlide:_};return{state:v,nextState:g}};z.slideHandler=l2;var a2=function(t,n){var r,i,o,l,a,s=t.slidesToScroll,u=t.slidesToShow,h=t.slideCount,f=t.currentSlide,m=t.targetSlide,S=t.lazyLoad,x=t.infinite;if(l=h%s!==0,r=l?0:(h-f)%s,n.message==="previous")o=r===0?s:u-r,a=f-o,S&&!x&&(i=f-o,a=i===-1?h-1:i),x||(a=m-s);else if(n.message==="next")o=r===0?s:r,a=f+o,S&&!x&&(a=(f+s)%h+r),x||(a=m+s);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,x){var y=qm(re(re({},t),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-h:a<n.currentSlide&&y==="right"&&(a=a+h)}}else n.message==="index"&&(a=Number(n.index));return a};z.changeSlide=a2;var s2=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};z.keyHandler=s2;var u2=function(t,n,r){return t.target.tagName==="IMG"&&Mn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};z.swipeStart=u2;var c2=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,s=n.rtl,u=n.currentSlide,h=n.edgeFriction,f=n.edgeDragged,m=n.onEdge,S=n.swiped,x=n.swiping,y=n.slideCount,E=n.slidesToScroll,p=n.infinite,c=n.touchObject,v=n.swipeEvent,g=n.listHeight,_=n.listWidth;if(!r){if(i)return Mn(t);o&&l&&a&&Mn(t);var k,$={},C=bi(n);c.curX=t.touches?t.touches[0].pageX:t.clientX,c.curY=t.touches?t.touches[0].pageY:t.clientY,c.swipeLength=Math.round(Math.sqrt(Math.pow(c.curX-c.startX,2)));var P=Math.round(Math.sqrt(Math.pow(c.curY-c.startY,2)));if(!a&&!x&&P>10)return{scrolling:!0};a&&(c.swipeLength=P);var T=(s?-1:1)*(c.curX>c.startX?1:-1);a&&(T=c.curY>c.startY?1:-1);var N=Math.ceil(y/E),R=Uc(n.touchObject,a),M=c.swipeLength;return p||(u===0&&(R==="right"||R==="down")||u+1>=N&&(R==="left"||R==="up")||!Vc(n)&&(R==="left"||R==="up"))&&(M=c.swipeLength*h,f===!1&&m&&(m(R),$.edgeDragged=!0)),!S&&v&&(v(R),$.swiped=!0),o?k=C+M*(g/_)*T:s?k=C-M*T:k=C+M*T,a&&(k=C+M*T),$=re(re({},$),{},{touchObject:c,swipeLeft:k,trackStyle:Ei(re(re({},n),{},{left:k}))}),Math.abs(c.curX-c.startX)<Math.abs(c.curY-c.startY)*.8||c.swipeLength>10&&($.swiping=!0,Mn(t)),$}};z.swipeMove=c2;var d2=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,h=n.swipeToSlide,f=n.scrolling,m=n.onSwipe,S=n.targetSlide,x=n.currentSlide,y=n.infinite;if(!r)return i&&Mn(t),{};var E=s?u/a:l/a,p=Uc(o,s),c={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!o.swipeLength)return c;if(o.swipeLength>E){Mn(t),m&&m(p);var v,g,_=y?x:S;switch(p){case"left":case"up":g=_+fu(n),v=h?du(n,g):g,c.currentDirection=0;break;case"right":case"down":g=_-fu(n),v=h?du(n,g):g,c.currentDirection=1;break;default:v=_}c.triggerSlideHandler=v}else{var k=bi(n);c.trackStyle=Qc(re(re({},n),{},{left:k}))}return c};z.swipeEnd=d2;var Qm=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};z.getNavigableIndexes=Qm;var du=function(t,n){var r=Qm(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};z.checkNavigable=du;var fu=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+Wc(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+sl(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll};z.getSlideCount=fu;var Jl=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};z.checkSpecKeys=Jl;var Ei=function(t){Jl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Ym(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=re(re({},o),{},{WebkitTransform:l,transform:a,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};z.getTrackCSS=Ei;var Qc=function(t){Jl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Ei(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};z.getTrackAnimateCSS=Qc;var bi=function(t){if(t.unslick)return 0;Jl(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,h=t.listWidth,f=t.variableWidth,m=t.slideHeight,S=t.fade,x=t.vertical,y=0,E,p,c=0;if(S||t.slideCount===1)return 0;var v=0;if(i?(v=-ai(t),l%s!==0&&n+s>l&&(v=-(n>l?a-(n-l):l%s)),o&&(v+=parseInt(a/2))):(l%s!==0&&n+s>l&&(v=a-l%s),o&&(v=parseInt(a/2))),y=v*u,c=v*m,x?E=n*m*-1+c:E=n*u*-1+y,f===!0){var g,_=r&&r.node;if(g=n+ai(t),p=_&&_.childNodes[g],E=p?p.offsetLeft*-1:0,o===!0){g=i?n+ai(t):n,p=_&&_.children[g],E=0;for(var k=0;k<g;k++)E-=_&&_.children[k]&&_.children[k].offsetWidth;E-=parseInt(t.centerPadding),E+=p&&(h-p.offsetWidth)/2}}return E};z.getTrackLeft=bi;var ai=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};z.getPreClones=ai;var Gm=function(t){return t.unslick||!t.infinite?0:t.slideCount};z.getPostClones=Gm;var Ym=function(t){return t.slideCount===1?1:ai(t)+t.slideCount+Gm(t)};z.getTotalSlides=Ym;var qm=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Xm(t)?"left":"right":t.targetSlide<t.currentSlide-Km(t)?"right":"left"};z.siblingDirection=qm;var Xm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};z.slidesOnRight=Xm;var Km=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};z.slidesOnLeft=Km;var f2=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};z.canUseDOM=f2;var ea={};function pu(e){"@babel/helpers - typeof";return pu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pu(e)}Object.defineProperty(ea,"__esModule",{value:!0});ea.Track=void 0;var Zt=Zm(Z),Ua=Zm(Zl),Va=z;function Zm(e){return e&&e.__esModule?e:{default:e}}function hu(){return hu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hu.apply(this,arguments)}function p2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Uf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h2(e,t,n){return t&&Uf(e.prototype,t),n&&Uf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function v2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&vu(e,t)}function vu(e,t){return vu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},vu(e,t)}function m2(e){var t=y2();return function(){var r=ul(e),i;if(t){var o=ul(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return g2(this,i)}}function g2(e,t){if(t&&(pu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mu(e)}function mu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ul(e){return ul=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ul(e)}function Vf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vf(Object(n),!0).forEach(function(r){gu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Qa=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var s=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},w2=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Ga=function(t,n){return t.key||n},S2=function(t){var n,r=[],i=[],o=[],l=Zt.default.Children.count(t.children),a=(0,Va.lazyStartIndex)(t),s=(0,Va.lazyEndIndex)(t);return Zt.default.Children.forEach(t.children,function(u,h){var f,m={message:"children",index:h,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(h)>=0?f=u:f=Zt.default.createElement("div",null);var S=w2(Ae(Ae({},t),{},{index:h})),x=f.props.className||"",y=Qa(Ae(Ae({},t),{},{index:h}));if(r.push(Zt.default.cloneElement(f,{key:"original"+Ga(f,h),"data-index":h,className:(0,Ua.default)(y,x),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Ae(Ae({outline:"none"},f.props.style||{}),S),onClick:function(c){f.props&&f.props.onClick&&f.props.onClick(c),t.focusOnSelect&&t.focusOnSelect(m)}})),t.infinite&&t.fade===!1){var E=l-h;E<=(0,Va.getPreClones)(t)&&l!==t.slidesToShow&&(n=-E,n>=a&&(f=u),y=Qa(Ae(Ae({},t),{},{index:n})),i.push(Zt.default.cloneElement(f,{key:"precloned"+Ga(f,n),"data-index":n,tabIndex:"-1",className:(0,Ua.default)(y,x),"aria-hidden":!y["slick-active"],style:Ae(Ae({},f.props.style||{}),S),onClick:function(c){f.props&&f.props.onClick&&f.props.onClick(c),t.focusOnSelect&&t.focusOnSelect(m)}}))),l!==t.slidesToShow&&(n=l+h,n<s&&(f=u),y=Qa(Ae(Ae({},t),{},{index:n})),o.push(Zt.default.cloneElement(f,{key:"postcloned"+Ga(f,n),"data-index":n,tabIndex:"-1",className:(0,Ua.default)(y,x),"aria-hidden":!y["slick-active"],style:Ae(Ae({},f.props.style||{}),S),onClick:function(c){f.props&&f.props.onClick&&f.props.onClick(c),t.focusOnSelect&&t.focusOnSelect(m)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},x2=function(e){v2(n,e);var t=m2(n);function n(){var r;p2(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),gu(mu(r),"node",null),gu(mu(r),"handleRef",function(a){r.node=a}),r}return h2(n,[{key:"render",value:function(){var i=S2(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:a,onMouseLeave:s};return Zt.default.createElement("div",hu({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(Zt.default.PureComponent);ea.Track=x2;var ta={};function yu(e){"@babel/helpers - typeof";return yu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yu(e)}Object.defineProperty(ta,"__esModule",{value:!0});ta.Dots=void 0;var vo=Jm(Z),k2=Jm(Zl),Qf=z;function Jm(e){return e&&e.__esModule?e:{default:e}}function Gf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gf(Object(n),!0).forEach(function(r){$2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $2(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O2(e,t,n){return t&&Yf(e.prototype,t),n&&Yf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function E2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&wu(e,t)}function wu(e,t){return wu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},wu(e,t)}function b2(e){var t=j2();return function(){var r=cl(e),i;if(t){var o=cl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return P2(this,i)}}function P2(e,t){if(t&&(yu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T2(e)}function T2(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cl(e){return cl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},cl(e)}var z2=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},L2=function(e){E2(n,e);var t=b2(n);function n(){return C2(this,n),t.apply(this,arguments)}return O2(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,h=i.slidesToShow,f=i.slideCount,m=i.currentSlide,S=z2({slideCount:f,slidesToScroll:u,slidesToShow:h,infinite:s}),x={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},y=[],E=0;E<S;E++){var p=(E+1)*u-1,c=s?p:(0,Qf.clamp)(p,0,f-1),v=c-(u-1),g=s?v:(0,Qf.clamp)(v,0,f-1),_=(0,k2.default)({"slick-active":s?m>=g&&m<=c:m===g}),k={message:"dots",index:E,slidesToScroll:u,currentSlide:m},$=this.clickHandler.bind(this,k);y=y.concat(vo.default.createElement("li",{key:E,className:_},vo.default.cloneElement(this.props.customPaging(E),{onClick:$})))}return vo.default.cloneElement(this.props.appendDots(y),_2({className:this.props.dotsClass},x))}}]),n}(vo.default.PureComponent);ta.Dots=L2;var $r={};function Su(e){"@babel/helpers - typeof";return Su=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Su(e)}Object.defineProperty($r,"__esModule",{value:!0});$r.PrevArrow=$r.NextArrow=void 0;var dr=tg(Z),eg=tg(Zl),M2=z;function tg(e){return e&&e.__esModule?e:{default:e}}function dl(){return dl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dl.apply(this,arguments)}function qf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function fl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qf(Object(n),!0).forEach(function(r){R2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function R2(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ng(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function rg(e,t,n){return t&&Xf(e.prototype,t),n&&Xf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ig(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xu(e,t)}function xu(e,t){return xu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},xu(e,t)}function og(e){var t=D2();return function(){var r=pl(e),i;if(t){var o=pl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return I2(this,i)}}function I2(e,t){if(t&&(Su(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return N2(e)}function N2(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pl(e){return pl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},pl(e)}var A2=function(e){ig(n,e);var t=og(n);function n(){return ng(this,n),t.apply(this,arguments)}return rg(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,eg.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=dr.default.cloneElement(this.props.prevArrow,fl(fl({},l),a)):s=dr.default.createElement("button",dl({key:"0",type:"button"},l)," ","Previous"),s}}]),n}(dr.default.PureComponent);$r.PrevArrow=A2;var H2=function(e){ig(n,e);var t=og(n);function n(){return ng(this,n),t.apply(this,arguments)}return rg(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,M2.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,eg.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=dr.default.cloneElement(this.props.nextArrow,fl(fl({},l),a)):s=dr.default.createElement("button",dl({key:"1",type:"button"},l)," ","Next"),s}}]),n}(dr.default.PureComponent);$r.NextArrow=H2;var lg=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),ku=typeof window<"u"&&typeof document<"u"&&window.document===document,hl=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),F2=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(hl):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),B2=2;function W2(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){F2(o)}function a(){var s=Date.now();if(n){if(s-i<B2)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=s}return a}var U2=20,V2=["top","right","bottom","left","width","height","size","weight"],Q2=typeof MutationObserver<"u",G2=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=W2(this.refresh.bind(this),U2)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!ku||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Q2?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!ku||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=V2.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),ag=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Cr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||hl},sg=na(0,0,0,0);function vl(e){return parseFloat(e)||0}function Kf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+vl(o)},0)}function Y2(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=vl(l)}return n}function q2(e){var t=e.getBBox();return na(0,0,t.width,t.height)}function X2(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return sg;var r=Cr(e).getComputedStyle(e),i=Y2(r),o=i.left+i.right,l=i.top+i.bottom,a=vl(r.width),s=vl(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Kf(r,"left","right")+o),Math.round(s+l)!==n&&(s-=Kf(r,"top","bottom")+l)),!Z2(e)){var u=Math.round(a+o)-t,h=Math.round(s+l)-n;Math.abs(u)!==1&&(a-=u),Math.abs(h)!==1&&(s-=h)}return na(i.left,i.top,a,s)}var K2=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Cr(e).SVGGraphicsElement}:function(e){return e instanceof Cr(e).SVGElement&&typeof e.getBBox=="function"}}();function Z2(e){return e===Cr(e).document.documentElement}function J2(e){return ku?K2(e)?q2(e):X2(e):sg}function e_(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return ag(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function na(e,t,n,r){return{x:e,y:t,width:n,height:r}}var t_=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=na(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=J2(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),n_=function(){function e(t,n){var r=e_(n);ag(this,{target:t,contentRect:r})}return e}(),r_=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new lg,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Cr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new t_(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Cr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new n_(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),ug=typeof WeakMap<"u"?new WeakMap:new lg,cg=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=G2.getInstance(),r=new r_(t,n,this);ug.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){cg.prototype[e]=function(){var t;return(t=ug.get(this))[e].apply(t,arguments)}});var i_=function(){return typeof hl.ResizeObserver<"u"?hl.ResizeObserver:cg}();const o_=Object.freeze(Object.defineProperty({__proto__:null,default:i_},Symbol.toStringTag,{value:"Module"})),l_=Sg(o_);Object.defineProperty(Kl,"__esModule",{value:!0});Kl.InnerSlider=void 0;var Me=Bi(Z),a_=Bi(Fm),s_=Bi(Jk),u_=Bi(Zl),oe=z,c_=ea,d_=ta,Zf=$r,f_=Bi(l_);function Bi(e){return e&&e.__esModule?e:{default:e}}function ml(e){"@babel/helpers - typeof";return ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ml(e)}function gl(){return gl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gl.apply(this,arguments)}function p_(e,t){if(e==null)return{};var n=h_(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function h_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jf(Object(n),!0).forEach(function(r){B(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function v_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ep(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m_(e,t,n){return t&&ep(e.prototype,t),n&&ep(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function g_(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_u(e,t)}function _u(e,t){return _u=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},_u(e,t)}function y_(e){var t=S_();return function(){var r=yl(e),i;if(t){var o=yl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return w_(this,i)}}function w_(e,t){if(t&&(ml(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function yl(e){return yl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},yl(e)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x_=function(e){g_(n,e);var t=y_(n);function n(r){var i;v_(this,n),i=t.call(this,r),B(F(i),"listRefHandler",function(l){return i.list=l}),B(F(i),"trackRefHandler",function(l){return i.track=l}),B(F(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,oe.getHeight)(l)+"px"}}),B(F(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,oe.getOnDemandLazySlides)(A(A({},i.props),i.state));l.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=A({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new f_.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),B(F(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),B(F(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,oe.getOnDemandLazySlides)(A(A({},i.props),i.state));a.length>0&&(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var s=A(A({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(s,u,function(){i.state.currentSlide>=Me.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Me.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),B(F(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,s_.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),B(F(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var s=A(A({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),B(F(i),"updateState",function(l,a,s){var u=(0,oe.initializedState)(l);l=A(A(A({},l),u),{},{slideIndex:u.currentSlide});var h=(0,oe.getTrackLeft)(l);l=A(A({},l),{},{left:h});var f=(0,oe.getTrackCSS)(l);(a||Me.default.Children.count(i.props.children)!==Me.default.Children.count(l.children))&&(u.trackStyle=f),i.setState(u,s)}),B(F(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,s=[],u=(0,oe.getPreClones)(A(A(A({},i.props),i.state),{},{slideCount:i.props.children.length})),h=(0,oe.getPostClones)(A(A(A({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function($){s.push($.props.style.width),l+=$.props.style.width});for(var f=0;f<u;f++)a+=s[s.length-1-f],l+=s[s.length-1-f];for(var m=0;m<h;m++)l+=s[m];for(var S=0;S<i.state.currentSlide;S++)a+=s[S];var x={width:l+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");x.left="calc(".concat(x.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:x}}var E=Me.default.Children.count(i.props.children),p=A(A(A({},i.props),i.state),{},{slideCount:E}),c=(0,oe.getPreClones)(p)+(0,oe.getPostClones)(p)+E,v=100/i.props.slidesToShow*c,g=100/c,_=-g*((0,oe.getPreClones)(p)+i.state.currentSlide)*v/100;i.props.centerMode&&(_+=(100-g*v/100)/2);var k={width:v+"%",left:_+"%"};return{slideWidth:g+"%",trackStyle:k}}),B(F(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,s=0;Array.prototype.forEach.call(l,function(u){var h=function(){return++s&&s>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var f=u.onclick;u.onclick=function(){f(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=h,u.onerror=function(){h(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),B(F(i),"progressiveLazyLoad",function(){for(var l=[],a=A(A({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,oe.getPostClones)(a);s++)if(i.state.lazyLoadedList.indexOf(s)<0){l.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,oe.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),B(F(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,h=s.beforeChange,f=s.onLazyLoad,m=s.speed,S=s.afterChange,x=i.state.currentSlide,y=(0,oe.slideHandler)(A(A(A({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),E=y.state,p=y.nextState;if(E){h&&h(x,E.currentSlide);var c=E.lazyLoadedList.filter(function(v){return i.state.lazyLoadedList.indexOf(v)<0});f&&c.length>0&&f(c),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),S&&S(x),delete i.animationEndCallback),i.setState(E,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),p&&(i.animationEndCallback=setTimeout(function(){var v=p.animating,g=p_(p,["animating"]);i.setState(g,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:v})},10)),S&&S(E.currentSlide),delete i.animationEndCallback})},m))})}}),B(F(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=A(A({},i.props),i.state),u=(0,oe.changeSlide)(s,l);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var h=i.list.querySelectorAll(".slick-current");h[0]&&h[0].focus()}}),B(F(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),B(F(i),"keyHandler",function(l){var a=(0,oe.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),B(F(i),"selectHandler",function(l){i.changeSlide(l)}),B(F(i),"disableBodyScroll",function(){var l=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=l}),B(F(i),"enableBodyScroll",function(){window.ontouchmove=null}),B(F(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,oe.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),B(F(i),"swipeMove",function(l){var a=(0,oe.swipeMove)(l,A(A(A({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),B(F(i),"swipeEnd",function(l){var a=(0,oe.swipeEnd)(l,A(A(A({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),B(F(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),B(F(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),B(F(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),B(F(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),B(F(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,oe.canGoNext)(A(A({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),B(F(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),B(F(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),B(F(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),B(F(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),B(F(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),B(F(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),B(F(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),B(F(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),B(F(i),"render",function(){var l=(0,u_.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=A(A({},i.props),i.state),s=(0,oe.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=A(A({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var h;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,oe.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),m=i.props.pauseOnDotsHover;f=A(A({},f),{},{clickHandler:i.changeSlide,onMouseEnter:m?i.onDotsLeave:null,onMouseOver:m?i.onDotsOver:null,onMouseLeave:m?i.onDotsLeave:null}),h=Me.default.createElement(d_.Dots,f)}var S,x,y=(0,oe.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(S=Me.default.createElement(Zf.PrevArrow,y),x=Me.default.createElement(Zf.NextArrow,y));var E=null;i.props.vertical&&(E={height:i.state.listHeight});var p=null;i.props.vertical===!1?i.props.centerMode===!0&&(p={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(p={padding:i.props.centerPadding+" 0px"});var c=A(A({},E),p),v=i.props.touchMove,g={className:"slick-list",style:c,onClick:i.clickHandler,onMouseDown:v?i.swipeStart:null,onMouseMove:i.state.dragging&&v?i.swipeMove:null,onMouseUp:v?i.swipeEnd:null,onMouseLeave:i.state.dragging&&v?i.swipeEnd:null,onTouchStart:v?i.swipeStart:null,onTouchMove:i.state.dragging&&v?i.swipeMove:null,onTouchEnd:v?i.touchEnd:null,onTouchCancel:i.state.dragging&&v?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},_={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(g={className:"slick-list"},_={className:l}),Me.default.createElement("div",_,i.props.unslick?"":S,Me.default.createElement("div",gl({ref:i.listRefHandler},g),Me.default.createElement(c_.Track,gl({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":x,i.props.unslick?"":h)}),i.list=null,i.track=null,i.state=A(A({},a_.default),{},{currentSlide:i.props.initialSlide,slideCount:Me.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=A(A({},i.state),o),i}return m_(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var s=a[l];if(!i.hasOwnProperty(s)){o=!0;break}if(!(ml(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||Me.default.Children.count(this.props.children)!==Me.default.Children.count(i.children)}}]),n}(Me.default.Component);Kl.InnerSlider=x_;var k_=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},__=k_,$_=__,C_=function(e){var t=/[height|width]$/;return t.test(e)},tp=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=$_(r),C_(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},O_=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=tp(n),r<e.length-1&&(t+=", ")}),t):tp(e)},E_=O_,dg={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Z);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(dg);var Ya,np;function b_(){if(np)return Ya;np=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Ya=e,Ya}var qa,rp;function fg(){if(rp)return qa;rp=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return qa={isFunction:n,isArray:t,each:e},qa}var Xa,ip;function P_(){if(ip)return Xa;ip=1;var e=b_(),t=fg().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Xa=n,Xa}var Ka,op;function T_(){if(op)return Ka;op=1;var e=P_(),t=fg(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,s){var u=this.queries,h=s&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,h)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(f){r(f)&&(f={match:f}),u[l].addHandler(f)}),this},unregister:function(l,a){var s=this.queries[l];return s&&(a?s.removeHandler(a):(s.clear(),delete this.queries[l])),this}},Ka=o,Ka}var Za,lp;function j_(){if(lp)return Za;lp=1;var e=T_();return Za=new e,Za}(function(e){function t(C){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},t(C)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(Z),r=Kl,i=a(E_),o=a(dg),l=z;function a(C){return C&&C.__esModule?C:{default:C}}function s(){return s=Object.assign||function(C){for(var P=1;P<arguments.length;P++){var T=arguments[P];for(var N in T)Object.prototype.hasOwnProperty.call(T,N)&&(C[N]=T[N])}return C},s.apply(this,arguments)}function u(C,P){var T=Object.keys(C);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(C);P&&(N=N.filter(function(R){return Object.getOwnPropertyDescriptor(C,R).enumerable})),T.push.apply(T,N)}return T}function h(C){for(var P=1;P<arguments.length;P++){var T=arguments[P]!=null?arguments[P]:{};P%2?u(Object(T),!0).forEach(function(N){_(C,N,T[N])}):Object.getOwnPropertyDescriptors?Object.defineProperties(C,Object.getOwnPropertyDescriptors(T)):u(Object(T)).forEach(function(N){Object.defineProperty(C,N,Object.getOwnPropertyDescriptor(T,N))})}return C}function f(C,P){if(!(C instanceof P))throw new TypeError("Cannot call a class as a function")}function m(C,P){for(var T=0;T<P.length;T++){var N=P[T];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(C,N.key,N)}}function S(C,P,T){return P&&m(C.prototype,P),T&&m(C,T),Object.defineProperty(C,"prototype",{writable:!1}),C}function x(C,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");C.prototype=Object.create(P&&P.prototype,{constructor:{value:C,writable:!0,configurable:!0}}),Object.defineProperty(C,"prototype",{writable:!1}),P&&y(C,P)}function y(C,P){return y=Object.setPrototypeOf||function(N,R){return N.__proto__=R,N},y(C,P)}function E(C){var P=v();return function(){var N=g(C),R;if(P){var M=g(this).constructor;R=Reflect.construct(N,arguments,M)}else R=N.apply(this,arguments);return p(this,R)}}function p(C,P){if(P&&(t(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(C)}function c(C){if(C===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C}function v(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function g(C){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(T){return T.__proto__||Object.getPrototypeOf(T)},g(C)}function _(C,P,T){return P in C?Object.defineProperty(C,P,{value:T,enumerable:!0,configurable:!0,writable:!0}):C[P]=T,C}var k=(0,l.canUseDOM)()&&j_(),$=function(C){x(T,C);var P=E(T);function T(N){var R;return f(this,T),R=P.call(this,N),_(c(R),"innerSliderRefHandler",function(M){return R.innerSlider=M}),_(c(R),"slickPrev",function(){return R.innerSlider.slickPrev()}),_(c(R),"slickNext",function(){return R.innerSlider.slickNext()}),_(c(R),"slickGoTo",function(M){var ze=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return R.innerSlider.slickGoTo(M,ze)}),_(c(R),"slickPause",function(){return R.innerSlider.pause("paused")}),_(c(R),"slickPlay",function(){return R.innerSlider.autoPlay("play")}),R.state={breakpoint:null},R._responsiveMediaHandlers=[],R}return S(T,[{key:"media",value:function(R,M){k.register(R,M),this._responsiveMediaHandlers.push({query:R,handler:M})}},{key:"componentDidMount",value:function(){var R=this;if(this.props.responsive){var M=this.props.responsive.map(function(de){return de.breakpoint});M.sort(function(de,Le){return de-Le}),M.forEach(function(de,Le){var et;Le===0?et=(0,i.default)({minWidth:0,maxWidth:de}):et=(0,i.default)({minWidth:M[Le-1]+1,maxWidth:de}),(0,l.canUseDOM)()&&R.media(et,function(){R.setState({breakpoint:de})})});var ze=(0,i.default)({minWidth:M.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(ze,function(){R.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(R){k.unregister(R.query,R.handler)})}},{key:"render",value:function(){var R=this,M,ze;this.state.breakpoint?(ze=this.props.responsive.filter(function(_e){return _e.breakpoint===R.state.breakpoint}),M=ze[0].settings==="unslick"?"unslick":h(h(h({},o.default),this.props),ze[0].settings)):M=h(h({},o.default),this.props),M.centerMode&&(M.slidesToScroll>1,M.slidesToScroll=1),M.fade&&(M.slidesToShow>1,M.slidesToScroll>1,M.slidesToShow=1,M.slidesToScroll=1);var de=n.default.Children.toArray(this.props.children);de=de.filter(function(_e){return typeof _e=="string"?!!_e.trim():!!_e}),M.variableWidth&&(M.rows>1||M.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),M.variableWidth=!1);for(var Le=[],et=null,j=0;j<de.length;j+=M.rows*M.slidesPerRow){for(var I=[],D=j;D<j+M.rows*M.slidesPerRow;D+=M.slidesPerRow){for(var Y=[],U=D;U<D+M.slidesPerRow&&(M.variableWidth&&de[U].props.style&&(et=de[U].props.style.width),!(U>=de.length));U+=1)Y.push(n.default.cloneElement(de[U],{key:100*j+10*D+U,tabIndex:-1,style:{width:"".concat(100/M.slidesPerRow,"%"),display:"inline-block"}}));I.push(n.default.createElement("div",{key:10*j+D},Y))}M.variableWidth?Le.push(n.default.createElement("div",{key:j,style:{width:et}},I)):Le.push(n.default.createElement("div",{key:j},I))}if(M==="unslick"){var bt="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:bt},de)}else Le.length<=M.slidesToShow&&(M.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},M),Le)}}]),T}(n.default.Component);e.default=$})(Hm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Hm);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(Am);const ra=Cp(Am);const pg=Qw`
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
`,z_=w.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,L_=({slides:e})=>{const t={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return d.jsxs(z_,{children:[d.jsx(pg,{}),d.jsx(ra,{...t,children:e.map(n=>d.jsx(Dm,{slide:n},n.id))})]})},{darkColor:$u}=he,mo={title:"Video",text:"Product Description THOTH",movies:[{id:"1",title:"Video title 1",content:"Slide 1"},{id:"2",title:"Video title 2",content:"Slide 2"},{id:"3",title:"Video title 3",content:"Slide 3"},{id:"4",title:"Video title 4",content:"Slide 4"},{id:"5",title:"Video title 5",content:"Slide 5"}]},M_=w.section`
  margin: calc(50vw / 14.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,R_=w.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${O}) {
    flex-direction: column;
  }
`,I_=w(Et)`
  width: 80%;
`,N_=w(Xl)`
  margin: 1vw 0 2.57vw;
`,D_=w.div`
  width: 54%;
  height: 100%;

  @media (max-width: ${O}) {
    width: 100%;
  }
`,A_=w.div`
  border-radius: 20px;
  width: 37%;
  ${Tr};
  height: auto;
  background-image: url("images/products-and-service/video.svg");

  @media (max-width: ${O}) {
    width: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,H_=w.div`
  height: 40vw;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 20px;
    background-color: #f8bbd0;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #f06292;
    background-color: #f8bbd0;

    // Add Border on Track
    border-left: 4px solid white;
    border-right: 4px solid white;

  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    -webkit-box-shadow: inset 0 0 #ad1457;
    background-color: #e91e63;

  }

  @media (max-width: ${O}) {
    height: 125vw;
  }
`,F_=w.div`
  box-sizing: border-box;
  position: relative;
  height: 14.73vw;
  width: 28.26vw;
  margin: 2.23vw 1.23vw 4.44vw;
  background-color: gray;
  cursor: pointer;
  border-radius: 20px;

  @media (max-width: ${O}) {
    height: 44.48vw;
    width: 81.3vw;
    margin: 12vw 6vw 12vw 0;
  }
`,ap=w.p`
  max-width: 100%;
  position: absolute;
  bottom: -2.5vw;
  left: 2.5vw;
  ${V};
  color: ${$u};
  ${G};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.5px;

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.08);
    bottom: -8vw;
  }
`,B_=w.div`
  position: relative;
  height: 37vw;
  margin: 0 1.23vw 0.79vw;
  background-color: lightblue;
  border-radius: 20px;
  > p {
    bottom: -4vw;
    font-size: calc(30vw / 14.4);
  }

  @media (max-width: ${O}) {
    height: 53.34vw;
    margin: 0 6.1vw 12vw;
    > p {
      bottom: -8vw;
      font-size: calc(25vw / 5.08);
    }
  }
`,sp=w.div`
  margin-top: 0.79vw;
`,W_=()=>{const[e,t]=Z.useState("1"),n=r=>{t(r)};return d.jsxs(M_,{children:[d.jsx(I_,{color:$u,children:mo.title}),d.jsx(N_,{color:$u,children:mo.text}),d.jsxs(R_,{children:[d.jsx(D_,{children:mo.movies.map(r=>e===r.id?d.jsxs(B_,{children:[d.jsx(ap,{children:r.title}),d.jsx(sp,{children:r.content})]},r.id):null)}),d.jsx(A_,{children:d.jsx(H_,{children:mo.movies.map(r=>d.jsxs(F_,{onClick:()=>n(r.id),style:{backgroundColor:e===r.id?"lightblue":"lightgray"},children:[d.jsx(sp,{children:r.content}),d.jsx(ap,{children:r.title})]},r.id))})})]})]})},{whiteColor:wl,greenColor:up}=he,Un={title:"Products and Services",text:"Product Description THOTH",slides:[{id:"1",mainButton:"Merchants Solution",textContent:"A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",button:"Read more",image:"images/products-and-service/merchants-solution.svg"},{id:"2",mainButton:"Enterprise Blockchain Wallets",textContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",button:"test",image:"images/products-and-service/merchants-solution.svg"},{id:"3",mainButton:"Wallet App",textContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",button:"test",image:"images/products-and-service/merchants-solution.svg"},{id:"4",mainButton:"Staking",textContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",button:"test",image:"images/test/test-photo.jpg"}]},U_=w.section`
  ${Tr};
  height: calc(901vw / 14.4);
  padding: 4.86vw;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("images/products-and-service/description-L.svg");

  @media (max-width: ${O}) {
    height: calc(970vw / 5.08);
    padding: 14.93vw 0;
    flex-direction: column;
    background-image: url("images/products-and-service/description-S.svg");
  }
`,V_=w(Et)`
  width: 80%;
`,Q_=w(Xl)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${O}) {
    margin: 1.77vw 0 10.61vw;
  }
`,G_=w.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,Y_=w(Ve)`
  width: calc(90% / 4);
  padding-left: 2vw;
  padding-right: 2vw;
  ${Bl};
  border-bottom: 2px solid ${up};

  &:hover {
    border-bottom: 2px solid ${up};
  }
`,q_=w(Ve)`
  width: calc(90% / 4);
  padding-left: 2vw;
  padding-right: 2vw;
  ${Bl};
  border-bottom: 2px solid ${wl};

  &:hover {
    border-bottom: 2px solid ${wl};
  }
`,X_=()=>{const e=Bt(),[t,n]=Z.useState("1"),r=l=>{n(l)},i=Un.slides.map(l=>l.id),o=Un.slides.find(l=>l.id===t);return d.jsxs(d.Fragment,{children:[d.jsxs(U_,{children:[d.jsx(V_,{color:wl,children:Un.title}),d.jsx(Q_,{color:wl,children:Un.text}),!e&&d.jsx(G_,{children:i.map(l=>{const s=t===l?Y_:q_,u=Un.slides.find(h=>h.id===l);return u?d.jsx(s,{type:"button",onClick:()=>r(u.id),children:u.mainButton},u.id):null})}),e?d.jsx(L_,{slides:Un.slides}):o&&d.jsx(Dm,{slide:o})]}),d.jsx(mk,{}),d.jsx($k,{}),d.jsx(W_,{})]})},K_="/thoth/assets/arrow-left-cdb5cf81.svg",Z_="/thoth/assets/arrow-right-068d5467.svg",J_=w.div`
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
`,e$=w.div`
  margin: 0;
  padding: 0;
  border-radius: 20px;
  width: calc(100% - 4.58vw);
  height: 100%;

  @media (max-width: ${O}) {
    width: calc(100% - 4.72vw);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (max-width: ${O}) {
    width: calc(100% - 4.72vw);
  }
`,hg=w(Ve)`
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

  @media (max-width: ${O}) {
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
`,vg=w.img`
  width: 100%;
  height: 100%;
`,t$=w.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  .slick-track {
    display: flex;
    align-items: flex-end;
  }
`,n$=({children:e,index:t})=>{const n=Bt(),r=parseInt(t);let i="",o="";return n?(o=r%3===0?"50vw":r%3===1?"57.28vw":"44.49vw",i=r%3===0?"58.26vw":r%3===1?"66.14vw":"52.36vw"):(o=r%3===0?"50vw":r%3===1?"55.83vw":"44.44vw",i=r%3===0?"56.91vw":r%3===1?"64.44vw":"51.11vw"),d.jsx(J_,{style:{height:o,width:i},children:e})},r$=({onClick:e})=>d.jsx(hg,{type:"button",className:"arrow next",onClick:e,children:d.jsx(vg,{src:Z_,alt:"Next"})}),i$=({onClick:e})=>d.jsx(hg,{type:"button",className:"arrow prev",onClick:e,$isPrev:!0,children:d.jsx(vg,{src:K_,alt:"Next"})}),o$=({slides:e})=>{const t={className:"center",centerMode:!0,infinite:!0,slidesToShow:1,speed:1e3,nextArrow:d.jsx(r$,{}),prevArrow:d.jsx(i$,{}),variableWidth:!0,initialSlide:0};return d.jsx(t$,{children:d.jsx(ra,{...t,children:e.map(n=>d.jsx(n$,{index:n.index,children:d.jsx(e$,{children:d.jsx("img",{src:n.image,alt:n.alt})})},n.index))})})},{darkGrayColor:l$}=he,cp={title:"Photo",slides:[{index:"0",image:"images/test/test-photo.jpg",alt:"Slide 1"},{index:"1",image:"images/test/test-photo.jpg",alt:"Slide 1"},{index:"2",image:"images/test/test-photo.jpg",alt:"Slide 1"}]},a$=w.div`
  padding-bottom: 4.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 74.44vw;

  @media (max-width: ${O}) {
    box-sizing: border-box;
    padding: 0;
    min-height: 91.26vw;
    justify-content: space-around;
  }
`,s$=()=>d.jsxs(a$,{children:[d.jsx(Et,{color:l$,children:cp.title}),d.jsx(o$,{slides:cp.slides})]}),{lightBlackColor:mg,blackColor:gg,darkGreenColor:u$,whiteColor:c$,greenColor:d$,lightGreenColor:f$}=he,$n={title:"Fees",lineOne:{title:"Incoming Transactions",text:{main:"As low as 0.5%",span:"and going down based on your total transaction volume.",button:"Check pricing details"}},lineTwo:{title:"Outgoing Transactions",text:{main:"Free of charge"}}},p$=w.section`
  margin: 5.2vw auto 6.07vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 94%;

  @media (max-width: ${O}) {
    padding: 12.37vw 8.25vw 16.89vw 11vw;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
  }
`,dp=w.div`
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
`,fp=w.div`
  grid-column: 2 / 3;
  width: 100%;
`,h$=w.div`
  grid-column: 3 / 4;
  width: 100%;
  display: flex;
  justify-content: end;
`,v$=w(Et)`
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
  border-bottom: 2px solid ${mg};

  @media (max-width: ${O}) {
    padding-bottom: 5.09vw;
    margin: 0;
    font-size: 9.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -1px;
  }
`,pp=w.h3`
  ${V};
  color: ${gg};
  ${G};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;

  @media (max-width: ${O}) {
    margin: 9.82vw 0 0 0;
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
  }
`,hp=w.p`
  ${V};
  ${G};
  color: ${u$};
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
`,m$=w.p`
  ${V};
  color: ${gg};
  ${G};
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
`,g$=w(Ve)`
  border-radius: 0;

  @media (max-width: ${O}) {
    margin-top: 10.8vw;
    width: 100%;
  }
`,y$=w.div`
  padding: 0.8vw 1.7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    133deg,
    ${d$} 0%,
    ${f$} 100%
  );

  @media (max-width: ${O}) {
    min-width: 33vw;
    min-height: 8.33vw;
  }
`,w$=w.span`
  margin-right: 1.29vw;
  color: ${c$};
  font-size: 1.11vw;
  ${G};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${O}) {
    margin-right: 6.5vw;
    font-size: 3.15vw;
  }
`,S$=w.div`
  ${Ct};
  width: 1.04vw;
  height: 1.18vw;
  background-image: url("images/common/play-icon.svg");

  @media (max-width: ${O}) {
    width: 3.34vw;
    height: 2.95vw;
  }
`,x$=d.jsxs(y$,{children:[d.jsx(w$,{children:$n.lineOne.text.button}),d.jsx(S$,{})]}),vp=()=>d.jsx(h$,{children:d.jsx(g$,{type:"button",children:x$,onClick:Jw})}),k$=()=>{const e=Bt();return d.jsxs(p$,{children:[d.jsx(v$,{color:mg,children:$n.title}),d.jsxs(dp,{children:[d.jsx(pp,{children:$n.lineOne.title}),d.jsxs(fp,{children:[d.jsx(hp,{children:$n.lineOne.text.main}),d.jsx(m$,{children:$n.lineOne.text.span})]}),!e&&d.jsx(vp,{})]}),d.jsxs(dp,{children:[d.jsx(pp,{children:$n.lineTwo.title}),d.jsx(fp,{children:d.jsx(hp,{children:$n.lineTwo.text.main})}),e&&d.jsx(vp,{})]})]})},{whiteColor:_$}=he,$$=w.h3`
  ${V};
  text-align: center;
  font-size: calc(25vw / 14.4);
  ${G};
  font-weight: 500;
  line-height: 1.5;
  color: ${_$};

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.08);
  }
`,C$=({children:e,...t})=>d.jsx($$,{...t,children:e}),{whiteColor:Gc}=he,O$=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${O}) {
    width: 80vw;
    min-height: 68.17vw;
    align-items: start;
  }
`,E$=w.div`
  @media (max-width: ${O}) {
    padding: 7.18vw 0 10.26vw 5vw;
  }
`,b$=w(C$)`
  @media (max-width: ${O}) {
    width: 100%;
    box-sizing: border-box;
    padding: 9.29vw 1.38vw 5.33vw 12.84vw;
    border-bottom: 1px solid ${Gc};
  }
`,P$=w.img`
  margin-right: 2.15vw;
  width: 2.98vw;
  height: auto;

  @media (max-width: ${O}) {
    width: 12.45vw;
    margin-right: 3.93vw;
  }
`,T$=w.h4`
  ${V};
  text-align: left;
  font-size: calc(22vw / 14.4);
  ${G};
  font-weight: 500;
  line-height: 1.5;
  color: ${Gc};

  @media (max-width: ${O}) {
    font-size: calc(22vw / 5.08);
  }
`,j$=w.p`
  ${V};
  ${G};
  color: ${Gc};
  font-size: calc(20vw / 14.05);
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(20vw / 5.08);
  }
`,z$=w.div`
  display: flex;
  flex-direction: row;
  padding-bottom: calc(14vw / 14.4);

  @media (max-width: ${O}) {
    padding-bottom: calc(24vw / 5.08);
  }
`,yg=({button:e,image:t,title:n,text:r})=>d.jsxs(O$,{children:[e&&d.jsx(b$,{children:e}),d.jsxs(E$,{children:[d.jsxs(z$,{children:[d.jsx(P$,{src:t,alt:n}),d.jsx(T$,{children:n})]}),d.jsx(j$,{children:r})]})]}),L$="/thoth/assets/slider-bitton-a733b85e.svg",M$=w(Ve)`
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
`,R$=w.img`
  width: 100%;
  height: 100%;
`,I$=w.div`
  height: 100%;
  background-image: url("images/use-cases-of-our-products/slide-S.svg");
  background-repeat: no-repeat;
  background-size: cover;
`,N$=({onClick:e})=>d.jsx(M$,{type:"button",className:"arrow next",onClick:e,children:d.jsx(R$,{src:L$,alt:"Next"})}),D$=({slides:e})=>{const t={dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,swipe:!1,variableWidth:!0,centerMode:!1,prevArrow:d.jsx(d.Fragment,{}),nextArrow:d.jsx(N$,{})},r=Object.keys(e).flatMap(i=>e[i].content.map(o=>({button:e[i].button,image:o.image,title:o.title,text:o.text})));return d.jsx(I$,{children:d.jsx(ra,{...t,children:r.map((i,o)=>d.jsx(yg,{button:i.button,image:i.image,title:i.title,text:i.text},o))})})},{whiteColor:Tn,greenColor:A$}=he,H$=w.div`
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  margin-bottom: ${({size:e})=>e==="big"?"calc(42vw / 14.4)":"calc(50vw / 14.4)"};
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
`,F$=w.div`
  margin: ${({size:e})=>e==="big"?"2vw 0 0.71vw":"1vw 0 1vw"};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  @media (max-width: ${O}) {
    margin: ${({size:e})=>e==="big"?"calc(45vw / 5.09) 0 calc(12vw / 5.09)":"calc(12vw / 5.09) 0 calc(12vw / 5.09)"};
  }
`,wg=w.p`
  ${V};
  ${G};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.09);
  }
`,B$=w(wg)`
  padding-right: 3vw;
  color: ${A$};
`,W$=w(wg)`
  color: ${Tn};
`,U$=w.h3`
  margin-bottom: calc(6.58vw / 14.4);
  ${V};
  ${G};
  color: ${Tn};
  font-size: ${({size:e})=>e==="big"?"calc(35vw / 14.4)":"calc(28vw / 14.4)"};
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.7px;
  text-align: left;

  @media (max-width: ${O}) {
    margin-bottom: 0;
    font-size: ${({size:e})=>e==="big"?"calc(30vw / 5.09)":"calc(23vw / 5.09)"};
    letter-spacing: -0.6px;
  }
`,V$=w.p`
  ${V};
  ${G};
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
`,Q$=w.img`
  height: ${({size:e})=>e==="big"?"calc(268vw / 14.4)":"calc(154vw / 14.4)"};
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${O}) {
    height: ${({size:e})=>e==="big"?"calc(184vw / 5.08)":"calc(148vw / 5.08)"};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
  }
`,Cu=({slide:e,size:t})=>d.jsxs(H$,{size:t,children:[d.jsx(Q$,{size:t,src:e.image,alt:e.alt}),d.jsxs(F$,{size:t,children:[d.jsx(B$,{children:e.span}),d.jsx(W$,{children:e.date})]}),d.jsx(U$,{size:t,children:e.title}),t==="big"&&d.jsx(V$,{size:t,children:e.text})]}),G$=w.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,Y$=({slides:e,size:t})=>{const n={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return d.jsxs(G$,{children:[d.jsx(pg,{}),d.jsx(ra,{...n,children:e.map(r=>d.jsx(Cu,{slide:r,size:t},r.id))})]})},{whiteColor:q$,greenColor:X$}=he,Ja={title:"News",button:"Read more",slides:[{id:"1",span:"Corporate News",date:"20.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"images/test/test-photo.jpg",alt:"Image"},{id:"2",span:"Corporate News",date:"21.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"images/test/test-photo.jpg",alt:"Image"},{id:"3",span:"Corporate News",date:"22.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"images/test/test-photo.jpg",alt:"Image"},{id:"4",span:"Corporate News",date:"23.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"images/test/test-photo.jpg",alt:"Image"},{id:"5",span:"Corporate News",date:"24.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"images/test/test-photo.jpg",alt:"Image"}]},K$=w.div`
  ${Tr};
  min-height: calc(1317vw / 14.4);
  box-sizing: border-box;
  width: 100%;
  background-image: url("images/news/news-L.svg");

  @media (max-width: ${O}) {
    background-image: url("images/news/news-S.svg");
    min-height: calc(1441vw / 5.08);
  }
`,Z$=w.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${O}) {
    flex-direction: column;
  }
`,J$=w.div`
  padding: 5.06vw 3.92vw;
  display: flex;
  flex-direction: row;
  align-items: end;

  @media (max-width: ${O}) {
    padding: 14vw 3.56vw 7.34vw;
  }
`,eC=w(Ve)`
  margin-left: 3.54vw;
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${X$};
  font-size: 1.74vw;
  ${G};
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
    background-image: url("images/products-and-service/play.svg");
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 60%;
    transform: translateY(-60%);

    @media (max-width: ${O}) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`,tC=w.div`
  width: calc(696vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${O}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`,nC=w.div`
  width: calc(414vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${O}) {
    width: 100%;
  }
`,rC=()=>{const e=Bt(),t=Ja.slides,n=t.slice(0,2),r=t.slice(2,5);return d.jsxs(K$,{children:[d.jsxs(J$,{children:[d.jsx(Et,{color:q$,children:Ja.title}),d.jsx(eC,{type:"button",onClick:e1,children:Ja.button})]}),d.jsxs(Z$,{children:[d.jsx(tC,{children:n.map(i=>d.jsx(Cu,{slide:i,size:"big"},i.id))}),e?d.jsx(Y$,{slides:r,size:"small"}):d.jsx(nC,{children:r.map(i=>d.jsx(Cu,{slide:i,size:"small"},i.id))})]})]})},{deepColor:Cn,darkGreenColor:Ou}=he,Yt={title:"Have a question?",text:"Explore our solutions or you can contact us throughticket system and contact form. Feel free to get in touch..",existing:{title:"For existing clients",text:"If you already have an account please use our ticket system.",linkName:"Get 24\\7 Support"},new:{title:"For new clients or partners",text:"Please leave your inquiry and our Buisness Development Team will contact you shortly.",linkName:"Contact BD Team"}},iC=w.section`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 10.9vw 3.54vw;

  @media (max-width: ${O}) {
    flex-direction: column;
    padding: 12vw 8.01vw 19.1vw;
  }
`,oC=w(Et)`
  padding: 3.13vw 0 1.8vw;
  align-self: start;
  text-align: left;

  @media (max-width: ${O}) {
    flex-direction: column;
    padding: 0 0 7.28vw;
  }
`,es=w.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 31.94vw;

  @media (max-width: ${O}) {
    min-width: 100%;
  }
`,mp=w.div`
  min-height: 25.69vw;
  display: flex;
  flex-direction: column;
  max-width: 31.94vw;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${O}) {
    min-width: 100%;
  }
`,ts=w.p`
  width: 25vw;
  ${V};
  font-size: calc(25vw / 14.4);
  ${G};
  color: ${Cn};
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
`,gp=w.img`
  width: auto;
  height: calc(58vw / 14.4);
  @media (max-width: ${O}) {
    height: calc(58vw / 5.08);
    margin: 12vw 0 4.92vw;
  }
`,yp=w.h3`
  ${V};
  padding: 1.39vw 0 0.1vw 0;
  ${G};
  color: ${Cn};
  font-size: calc(30vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-align: left;

  @media (max-width: ${O}) {
    font-size: calc(30vw / 5.08);
  }
`,wp=w(cr)`
  color: ${Ou};
  ${V};
  ${G};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-decoration-line: underline;

  @media (max-width: ${O}) {
    font-size: calc(25vw / 5.08);
  }
`,lC=()=>d.jsxs(iC,{children:[d.jsxs(es,{children:[d.jsx(oC,{color:Cn,children:Yt.title}),d.jsx(ts,{className:"custom-first",children:Yt.text})]}),d.jsxs(mp,{children:[d.jsxs(es,{children:[d.jsx(gp,{src:"images/use-cases-of-our-products/existing-client.svg",alt:"existing client"}),d.jsx(yp,{color:Cn,children:Yt.existing.title}),d.jsx(ts,{color:Cn,children:Yt.existing.text})]}),d.jsx(wp,{href:"example.com",target:"_blank",rel:"noopener noreferrer",color:Ou,children:Yt.existing.linkName})]}),d.jsxs(mp,{children:[d.jsxs(es,{children:[d.jsx(gp,{src:"images/use-cases-of-our-products/new-client.svg",alt:"new client"}),d.jsx(yp,{color:Cn,children:Yt.new.title}),d.jsx(ts,{color:Cn,children:Yt.new.text})]}),d.jsx(wp,{href:"example.com",target:"_blank",rel:"noopener noreferrer",color:Ou,children:Yt.new.linkName})]})]}),{greenColor:Sp,whiteColor:Sl}=he,Xr={One:{button:"Merchants Solution",content:[{image:"images/use-cases-of-our-products/merchantsSolutionOne.svg",title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."},{image:"images/use-cases-of-our-products/merchantsSolutionTwo.svg",title:"E-commerce",text:"The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments."},{image:"images/use-cases-of-our-products/merchantsSolutionThree.svg",title:"Marketplaces",text:"There are many platforms used by businesses to sell their products or services. Offering crypto payments to customers is now the advantage."},{image:"images/use-cases-of-our-products/merchantsSolutionFour.svg",title:"Travel Industry",text:"The travel industry is a growing sector. With increasing bookings now made online, it makes financial sense to accept crypto payments."},{image:"images/use-cases-of-our-products/merchantsSolutionFive.svg",title:"Gambling",text:"The global online gambling industry is worth billions of dollars. Crypto payments are part for the course."},{image:"images/use-cases-of-our-products/merchantsSolutionSix.svg",title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."}]},Two:{button:"Enterprise Solution",content:[{image:"images/use-cases-of-our-products/merchantsSolutionOne.svg",title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."}]},Three:{button:"White Label",content:[{image:"images/use-cases-of-our-products/merchantsSolutionTwo.svg",title:"E-commerce",text:"The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments."}]}},xp={title:"Use Cases of Our Products",text:"Product Description THOTH",slides:Xr},aC=w.section`
  ${Tr};
  min-height: calc(1015vw / 14.4);
  padding: 4.86vw;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("images/use-cases-of-our-products/background-L.svg");

  @media (max-width: ${O}) {
    padding: 14.17vw 0 12.4vw 0;
    box-sizing: border-box;
    min-height: 138.78vw;
    justify-content: space-between;
    flex-direction: column;
    background-image: url("images/use-cases-of-our-products/background-S.svg");
  }
`,sC=w.div`
  width: 100%;
`,uC=w(Xl)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${O}) {
    margin: 1.76vw 0 0;
  }
`,cC=w.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,dC=w.div`
  margin-top: 2.57vw;
  padding: 4.93vw 6.25vw;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vw;
  width: 88.47vw;
  min-height: 37.15vw;
  ${Fl};
  background-image: url("images/use-cases-of-our-products/slide-L.svg");
  border-radius: 30px;

  @media (max-width: ${O}) {
    display: block;
    padding: 0;
    background-image: none;
  }
`,fC=w(Ve)`
  width: calc(100% / 3);
  ${Bl};
  border-bottom: 2px solid ${Sp};

  &:hover {
    border-bottom: 2px solid ${Sp};
  }
`,pC=w(Ve)`
  width: calc(100% / 3);
  ${Bl};
  border-bottom: 2px solid ${Sl};

  &:hover {
    border-bottom: 2px solid ${Sl};
  }
`,hC=()=>{const e=Bt(),[t,n]=Z.useState("One");Z.useEffect(()=>{n("One")},[]);const r=o=>{n(o)},i=Object.keys(Xr);return d.jsxs(d.Fragment,{children:[d.jsxs(aC,{children:[d.jsxs(sC,{children:[d.jsx(Et,{color:Sl,children:xp.title}),d.jsx(uC,{color:Sl,children:xp.text}),!e&&d.jsx(cC,{children:i.map(o=>{const a=t===o?fC:pC;return d.jsx(a,{type:"button",onClick:()=>r(o),children:Xr[o].button},o)})})]}),d.jsx(dC,{children:e?d.jsx(D$,{slides:Xr}):Xr[t].content.map((o,l)=>d.jsx(yg,{image:o.image,title:o.title,text:o.text},l))})]}),d.jsx(k$,{}),d.jsx(rC,{}),d.jsx(lC,{})]})},{whiteColor:tn,deepGrayColor:vC}=he,tt={text:"Our vision is to provide convenience and help increase your sales business.",nav:{about:{title:"About",links:[{name:"How it works",href:"https://example.com/how-it-works"},{name:"Featured",href:"https://example.com/featured"},{name:"Partnership",href:"https://example.com/partnership"},{name:"Business Relation",href:"https://example.com/business-relation"}]},community:{title:"Community",links:[{name:"Events",href:"https://example.com/events"},{name:"Blog",href:"https://example.com/blog"},{name:"Podcast",href:"https://example.com/podcast"},{name:"Invite a friend",href:"https://example.com/invite-friend"}]},socials:{title:"Socials",links:[{name:"Discord",href:"https://example.com/discord"},{name:"Instagram",href:"https://example.com/instagram"},{name:"Twitter",href:"https://example.com/twitter"},{name:"Facebook",href:"https://example.com/facebook"}]}},rights:"Auto Fast. All rights reserved",policy:{name:"Privacy & Policy",href:"https://example.com/privacy-policy"},condition:{name:"Terms & Condition",href:"https://example.com/terms-condition"}},mC=w.footer`
  padding: 5.55vw 10vw 4.17vw 4.17vw;
  background-color: ${vC};
  border-radius: 0 0 50px 50px;

  @media (max-width: ${O}) {
    border-radius: 0 0 20px 20px;
  }
`,gC=w.div`
  margin-bottom: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${O}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,yC=w.div`
  width: 107%;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  justify-content: space-between;

  @media (max-width: ${O}) {
    flex-direction: column;
    align-items: center;
  }
`,wC=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,SC=w(dm)`
  @media (max-width: ${O}) {
    width: 43.5vw;
    height: 10.24vw;
  }
`,go=w.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: ${O}) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 5vw;
  }
`,ns=w.h4`
  ${V};
  margin-bottom: 0.7vw;
  color: ${tn};
  ${jr};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${O}) {
    text-align: center;
    font-size: calc(20vw / 5.08);
    font-weight: bold;
    line-height: 2;
  }
`,rs=w.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,is=w.li`
  ${V};
  margin-bottom: 0.34vw;
  color: ${tn};
  ${jr};
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
`,kp=w.p`
  ${V};
  margin: 2.54vw 0 2.09vw;
  color: ${tn};
  ${jr};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;
  width: calc(274vw / 14.4);

  @media (max-width: ${O}) {
    margin: 8.01vw 0 10.82vw;
    text-align: center;
    font-size: calc(16vw / 5.08);
    width: calc(355vw / 5.08);
  }
`,_p=w(cr)`
  margin-left: 4.2vw;
`;function xC(){const e=new Date().getFullYear();return d.jsxs(mC,{children:[d.jsxs(gC,{children:[d.jsxs(go,{children:[d.jsx(SC,{color:"transparent"}),d.jsx(kp,{children:tt.text}),d.jsx(fm,{type:"dark"})]}),d.jsxs(go,{children:[d.jsx(ns,{children:tt.nav.about.title}),d.jsx(rs,{children:tt.nav.about.links.map(t=>d.jsx(is,{children:d.jsx(cr,{color:tn,href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.name})},t.name))})]}),d.jsxs(go,{children:[d.jsx(ns,{children:tt.nav.community.title}),d.jsx(rs,{children:tt.nav.community.links.map(t=>d.jsx(is,{children:d.jsx(cr,{color:tn,href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.name})},t.name))})]}),d.jsxs(go,{children:[d.jsx(ns,{children:tt.nav.socials.title}),d.jsx(rs,{children:tt.nav.socials.links.map(t=>d.jsx(is,{children:d.jsx(cr,{color:tn,href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.name})},t.name))})]})]}),d.jsxs(yC,{children:[d.jsxs(kp,{children:["©",e,tt.rights]}),d.jsxs(wC,{children:[d.jsx(_p,{color:tn,href:tt.policy.href,target:"_blank",rel:"noopener noreferrer",children:tt.policy.name}),d.jsx(_p,{color:tn,href:tt.condition.href,target:"_blank",rel:"noopener noreferrer",children:tt.condition.name})]})]})]})}const $p=[{id:"1",title:"How it Works"},{id:"2",title:"Photo"},{id:"3",title:"Products and Services"},{id:"4",title:"Use Cases of Our Products"}],kC=()=>d.jsxs(d.Fragment,{children:[d.jsx(Mx,{sections:$p}),d.jsx(v1,{}),$p.map(e=>e.id==="1"?d.jsx(qr,{name:e.id,children:d.jsx(rk,{})},e.id):e.id==="2"?d.jsx(qr,{name:e.id,children:d.jsx(s$,{})},e.id):e.id==="3"?d.jsx(qr,{name:e.id,children:d.jsx(X_,{})},e.id):e.id==="4"?d.jsx(qr,{name:e.id,children:d.jsx(hC,{})},e.id):null),d.jsx(xC,{})]});os.createRoot(document.getElementById("root")).render(d.jsx(Z.StrictMode,{children:d.jsx(kC,{})}));
