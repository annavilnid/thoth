(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var en=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function mg(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var xp={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei=Symbol.for("react.element"),gg=Symbol.for("react.portal"),yg=Symbol.for("react.fragment"),wg=Symbol.for("react.strict_mode"),Sg=Symbol.for("react.profiler"),xg=Symbol.for("react.provider"),kg=Symbol.for("react.context"),_g=Symbol.for("react.forward_ref"),Cg=Symbol.for("react.suspense"),Og=Symbol.for("react.memo"),$g=Symbol.for("react.lazy"),Vc=Symbol.iterator;function Eg(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_p=Object.assign,Cp={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=Cp,this.updater=n||kp}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Op(){}Op.prototype=Cr.prototype;function Ou(e,t,n){this.props=e,this.context=t,this.refs=Cp,this.updater=n||kp}var $u=Ou.prototype=new Op;$u.constructor=Ou;_p($u,Cr.prototype);$u.isPureReactComponent=!0;var Qc=Array.isArray,$p=Object.prototype.hasOwnProperty,Eu={current:null},Ep={key:!0,ref:!0,__self:!0,__source:!0};function Pp(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)$p.call(t,r)&&!Ep.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ei,type:e,key:o,ref:l,props:i,_owner:Eu.current}}function Pg(e,t){return{$$typeof:Ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ei}function bg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gc=/\/+/g;function ra(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bg(""+e.key):t.toString(36)}function mo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ei:case gg:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ra(l,0):r,Qc(i)?(n="",e!=null&&(n=e.replace(Gc,"$&/")+"/"),mo(i,t,n,"",function(u){return u})):i!=null&&(Pu(i)&&(i=Pg(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Gc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Qc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+ra(o,a);l+=mo(o,t,n,s,i)}else if(s=Eg(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+ra(o,a++),l+=mo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Bi(e,t,n){if(e==null)return e;var r=[],i=0;return mo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Tg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},go={transition:null},jg={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:go,ReactCurrentOwner:Eu};W.Children={map:Bi,forEach:function(e,t,n){Bi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bi(e,function(){t++}),t},toArray:function(e){return Bi(e,function(t){return t})||[]},only:function(e){if(!Pu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Cr;W.Fragment=yg;W.Profiler=Sg;W.PureComponent=Ou;W.StrictMode=wg;W.Suspense=Cg;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jg;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_p({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Eu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)$p.call(t,s)&&!Ep.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ei,type:e.type,key:i,ref:o,props:r,_owner:l}};W.createContext=function(e){return e={$$typeof:kg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xg,_context:e},e.Consumer=e};W.createElement=Pp;W.createFactory=function(e){var t=Pp.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:_g,render:e}};W.isValidElement=Pu;W.lazy=function(e){return{$$typeof:$g,_payload:{_status:-1,_result:e},_init:Tg}};W.memo=function(e,t){return{$$typeof:Og,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=go.transition;go.transition={};try{e()}finally{go.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return Ne.current.useCallback(e,t)};W.useContext=function(e){return Ne.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ne.current.useEffect(e,t)};W.useId=function(){return Ne.current.useId()};W.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ne.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};W.useRef=function(e){return Ne.current.useRef(e)};W.useState=function(e){return Ne.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ne.current.useTransition()};W.version="18.2.0";xp.exports=W;var Z=xp.exports;const St=Sp(Z);var bp={exports:{}},wl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg=Z,Lg=Symbol.for("react.element"),Rg=Symbol.for("react.fragment"),Mg=Object.prototype.hasOwnProperty,Ig=zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ng={key:!0,ref:!0,__self:!0,__source:!0};function Tp(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Mg.call(t,r)&&!Ng.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Lg,type:e,key:o,ref:l,props:i,_owner:Ig.current}}wl.Fragment=Rg;wl.jsx=Tp;wl.jsxs=Tp;bp.exports=wl;var d=bp.exports,rs={},jp={exports:{}},Ke={},zp={exports:{}},Lp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,I){var D=j.length;j.push(I);e:for(;0<D;){var Y=D-1>>>1,U=j[Y];if(0<i(U,I))j[Y]=I,j[D]=U,D=Y;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var I=j[0],D=j.pop();if(D!==I){j[0]=D;e:for(var Y=0,U=j.length,Et=U>>>1;Y<Et;){var _e=2*(Y+1)-1,Bt=j[_e],Qe=_e+1,Pt=j[Qe];if(0>i(Bt,D))Qe<U&&0>i(Pt,Bt)?(j[Y]=Pt,j[Qe]=D,Y=Qe):(j[Y]=Bt,j[_e]=D,Y=_e);else if(Qe<U&&0>i(Pt,D))j[Y]=Pt,j[Qe]=D,Y=Qe;else break e}}return I}function i(j,I){var D=j.sortIndex-I.sortIndex;return D!==0?D:j.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],h=1,f=null,m=3,w=!1,x=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(j){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=j)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function g(j){if(y=!1,v(j),!x)if(n(s)!==null)x=!0,Le(_);else{var I=n(u);I!==null&&et(g,I.startTime-j)}}function _(j,I){x=!1,y&&(y=!1,p(O),O=-1),w=!0;var D=m;try{for(v(I),f=n(s);f!==null&&(!(f.expirationTime>I)||j&&!N());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,m=f.priorityLevel;var U=Y(f.expirationTime<=I);I=e.unstable_now(),typeof U=="function"?f.callback=U:f===n(s)&&r(s),v(I)}else r(s);f=n(s)}if(f!==null)var Et=!0;else{var _e=n(u);_e!==null&&et(g,_e.startTime-I),Et=!1}return Et}finally{f=null,m=D,w=!1}}var k=!1,C=null,O=-1,b=5,T=-1;function N(){return!(e.unstable_now()-T<b)}function M(){if(C!==null){var j=e.unstable_now();T=j;var I=!0;try{I=C(!0,j)}finally{I?R():(k=!1,C=null)}}else k=!1}var R;if(typeof c=="function")R=function(){c(M)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,fe=ze.port2;ze.port1.onmessage=M,R=function(){fe.postMessage(null)}}else R=function(){E(M,0)};function Le(j){C=j,k||(k=!0,R())}function et(j,I){O=E(function(){j(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,Le(_))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var I=3;break;default:I=m}var D=m;m=I;try{return j()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,I){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var D=m;m=j;try{return I()}finally{m=D}},e.unstable_scheduleCallback=function(j,I,D){var Y=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Y+D:Y):D=Y,j){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=D+U,j={id:h++,callback:I,priorityLevel:j,startTime:D,expirationTime:U,sortIndex:-1},D>Y?(j.sortIndex=D,t(u,j),n(s)===null&&j===n(u)&&(y?(p(O),O=-1):y=!0,et(g,D-Y))):(j.sortIndex=U,t(s,j),x||w||(x=!0,Le(_))),j},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(j){var I=m;return function(){var D=m;m=I;try{return j.apply(this,arguments)}finally{m=D}}}})(Lp);zp.exports=Lp;var Dg=zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp=Z,Xe=Dg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mp=new Set,li={};function An(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(li[e]=t,e=0;e<t.length;e++)Mp.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),is=Object.prototype.hasOwnProperty,Ag=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yc={},qc={};function Hg(e){return is.call(qc,e)?!0:is.call(Yc,e)?!1:Ag.test(e)?qc[e]=!0:(Yc[e]=!0,!1)}function Fg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bg(e,t,n,r){if(t===null||typeof t>"u"||Fg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var bu=/[\-:]([a-z])/g;function Tu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bu,Tu);$e[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bu,Tu);$e[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bu,Tu);$e[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function ju(e,t,n,r){var i=$e.hasOwnProperty(t)?$e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bg(t,n,i,r)&&(n=null),r||i===null?Hg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wi=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),zu=Symbol.for("react.strict_mode"),os=Symbol.for("react.profiler"),Ip=Symbol.for("react.provider"),Np=Symbol.for("react.context"),Lu=Symbol.for("react.forward_ref"),ls=Symbol.for("react.suspense"),as=Symbol.for("react.suspense_list"),Ru=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Dp=Symbol.for("react.offscreen"),Xc=Symbol.iterator;function jr(e){return e===null||typeof e!="object"?null:(e=Xc&&e[Xc]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,ia;function Fr(e){if(ia===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ia=t&&t[1]||""}return`
`+ia+e}var oa=!1;function la(e,t){if(!e||oa)return"";oa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{oa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fr(e):""}function Wg(e){switch(e.tag){case 5:return Fr(e.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return e=la(e.type,!1),e;case 11:return e=la(e.type.render,!1),e;case 1:return e=la(e.type,!0),e;default:return""}}function ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case Un:return"Portal";case os:return"Profiler";case zu:return"StrictMode";case ls:return"Suspense";case as:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Np:return(e.displayName||"Context")+".Consumer";case Ip:return(e._context.displayName||"Context")+".Provider";case Lu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ru:return t=e.displayName||null,t!==null?t:ss(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return ss(e(t))}catch{}}return null}function Ug(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ss(t);case 8:return t===zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ap(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vg(e){var t=Ap(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ui(e){e._valueTracker||(e._valueTracker=Vg(e))}function Hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ap(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function us(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fp(e,t){t=t.checked,t!=null&&ju(e,"checked",t,!1)}function cs(e,t){Fp(e,t);var n=pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ds(e,t.type,n):t.hasOwnProperty("defaultValue")&&ds(e,t.type,pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ds(e,t,n){(t!=="number"||zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Br=Array.isArray;function rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function fs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Br(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pn(n)}}function Bp(e,t){var n=pn(t.value),r=pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ed(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ps(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vi,Up=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vi=Vi||document.createElement("div"),Vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qg=["Webkit","ms","Moz","O"];Object.keys(Yr).forEach(function(e){Qg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yr[t]=Yr[e]})});function Vp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yr.hasOwnProperty(e)&&Yr[e]?(""+t).trim():t+"px"}function Qp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Gg=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hs(e,t){if(t){if(Gg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function vs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ms=null;function Mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gs=null,ir=null,or=null;function td(e){if(e=Ti(e)){if(typeof gs!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Cl(t),gs(e.stateNode,e.type,t))}}function Gp(e){ir?or?or.push(e):or=[e]:ir=e}function Yp(){if(ir){var e=ir,t=or;if(or=ir=null,td(e),t)for(e=0;e<t.length;e++)td(t[e])}}function qp(e,t){return e(t)}function Xp(){}var aa=!1;function Kp(e,t,n){if(aa)return e(t,n);aa=!0;try{return qp(e,t,n)}finally{aa=!1,(ir!==null||or!==null)&&(Xp(),Yp())}}function si(e,t){var n=e.stateNode;if(n===null)return null;var r=Cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var ys=!1;if(It)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){ys=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{ys=!1}function Yg(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var qr=!1,Lo=null,Ro=!1,ws=null,qg={onError:function(e){qr=!0,Lo=e}};function Xg(e,t,n,r,i,o,l,a,s){qr=!1,Lo=null,Yg.apply(qg,arguments)}function Kg(e,t,n,r,i,o,l,a,s){if(Xg.apply(this,arguments),qr){if(qr){var u=Lo;qr=!1,Lo=null}else throw Error(P(198));Ro||(Ro=!0,ws=u)}}function Hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nd(e){if(Hn(e)!==e)throw Error(P(188))}function Zg(e){var t=e.alternate;if(!t){if(t=Hn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return nd(i),e;if(o===r)return nd(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Jp(e){return e=Zg(e),e!==null?eh(e):null}function eh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=eh(e);if(t!==null)return t;e=e.sibling}return null}var th=Xe.unstable_scheduleCallback,rd=Xe.unstable_cancelCallback,Jg=Xe.unstable_shouldYield,ey=Xe.unstable_requestPaint,ve=Xe.unstable_now,ty=Xe.unstable_getCurrentPriorityLevel,Iu=Xe.unstable_ImmediatePriority,nh=Xe.unstable_UserBlockingPriority,Mo=Xe.unstable_NormalPriority,ny=Xe.unstable_LowPriority,rh=Xe.unstable_IdlePriority,Sl=null,kt=null;function ry(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Sl,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:ly,iy=Math.log,oy=Math.LN2;function ly(e){return e>>>=0,e===0?32:31-(iy(e)/oy|0)|0}var Qi=64,Gi=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Io(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Wr(a):(o&=l,o!==0&&(r=Wr(o)))}else l=n&~i,l!==0?r=Wr(l):o!==0&&(r=Wr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function ay(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-ft(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=ay(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Ss(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ih(){var e=Qi;return Qi<<=1,!(Qi&4194240)&&(Qi=64),e}function sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function uy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Nu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var X=0;function oh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lh,Du,ah,sh,uh,xs=!1,Yi=[],rn=null,on=null,ln=null,ui=new Map,ci=new Map,Zt=[],cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function id(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function Lr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ti(t),t!==null&&Du(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function dy(e,t,n,r,i){switch(t){case"focusin":return rn=Lr(rn,e,t,n,r,i),!0;case"dragenter":return on=Lr(on,e,t,n,r,i),!0;case"mouseover":return ln=Lr(ln,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ui.set(o,Lr(ui.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ci.set(o,Lr(ci.get(o)||null,e,t,n,r,i)),!0}return!1}function ch(e){var t=On(e.target);if(t!==null){var n=Hn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zp(n),t!==null){e.blockedOn=t,uh(e.priority,function(){ah(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ms=r,n.target.dispatchEvent(r),ms=null}else return t=Ti(n),t!==null&&Du(t),e.blockedOn=n,!1;t.shift()}return!0}function od(e,t,n){yo(e)&&n.delete(t)}function fy(){xs=!1,rn!==null&&yo(rn)&&(rn=null),on!==null&&yo(on)&&(on=null),ln!==null&&yo(ln)&&(ln=null),ui.forEach(od),ci.forEach(od)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,xs||(xs=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,fy)))}function di(e){function t(i){return Rr(i,e)}if(0<Yi.length){Rr(Yi[0],e);for(var n=1;n<Yi.length;n++){var r=Yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&Rr(rn,e),on!==null&&Rr(on,e),ln!==null&&Rr(ln,e),ui.forEach(t),ci.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)ch(n),n.blockedOn===null&&Zt.shift()}var lr=Ht.ReactCurrentBatchConfig,No=!0;function py(e,t,n,r){var i=X,o=lr.transition;lr.transition=null;try{X=1,Au(e,t,n,r)}finally{X=i,lr.transition=o}}function hy(e,t,n,r){var i=X,o=lr.transition;lr.transition=null;try{X=4,Au(e,t,n,r)}finally{X=i,lr.transition=o}}function Au(e,t,n,r){if(No){var i=ks(e,t,n,r);if(i===null)ya(e,t,r,Do,n),id(e,r);else if(dy(i,e,t,n,r))r.stopPropagation();else if(id(e,r),t&4&&-1<cy.indexOf(e)){for(;i!==null;){var o=Ti(i);if(o!==null&&lh(o),o=ks(e,t,n,r),o===null&&ya(e,t,r,Do,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ya(e,t,r,null,n)}}var Do=null;function ks(e,t,n,r){if(Do=null,e=Mu(r),e=On(e),e!==null)if(t=Hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Do=e,null}function dh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ty()){case Iu:return 1;case nh:return 4;case Mo:case ny:return 16;case rh:return 536870912;default:return 16}default:return 16}}var tn=null,Hu=null,wo=null;function fh(){if(wo)return wo;var e,t=Hu,n=t.length,r,i="value"in tn?tn.value:tn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return wo=i.slice(e,1<r?1-r:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function ld(){return!1}function Ze(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qi:ld,this.isPropagationStopped=ld,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fu=Ze(Or),bi=de({},Or,{view:0,detail:0}),vy=Ze(bi),ua,ca,Mr,xl=de({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(ua=e.screenX-Mr.screenX,ca=e.screenY-Mr.screenY):ca=ua=0,Mr=e),ua)},movementY:function(e){return"movementY"in e?e.movementY:ca}}),ad=Ze(xl),my=de({},xl,{dataTransfer:0}),gy=Ze(my),yy=de({},bi,{relatedTarget:0}),da=Ze(yy),wy=de({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),Sy=Ze(wy),xy=de({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ky=Ze(xy),_y=de({},Or,{data:0}),sd=Ze(_y),Cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$y[e])?!!t[e]:!1}function Bu(){return Ey}var Py=de({},bi,{key:function(e){if(e.key){var t=Cy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Oy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),by=Ze(Py),Ty=de({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=Ze(Ty),jy=de({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),zy=Ze(jy),Ly=de({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ry=Ze(Ly),My=de({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=Ze(My),Ny=[9,13,27,32],Wu=It&&"CompositionEvent"in window,Xr=null;It&&"documentMode"in document&&(Xr=document.documentMode);var Dy=It&&"TextEvent"in window&&!Xr,ph=It&&(!Wu||Xr&&8<Xr&&11>=Xr),cd=String.fromCharCode(32),dd=!1;function hh(e,t){switch(e){case"keyup":return Ny.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function Ay(e,t){switch(e){case"compositionend":return vh(t);case"keypress":return t.which!==32?null:(dd=!0,cd);case"textInput":return e=t.data,e===cd&&dd?null:e;default:return null}}function Hy(e,t){if(Qn)return e==="compositionend"||!Wu&&hh(e,t)?(e=fh(),wo=Hu=tn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ph&&t.locale!=="ko"?null:t.data;default:return null}}var Fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fy[e.type]:t==="textarea"}function mh(e,t,n,r){Gp(r),t=Ao(t,"onChange"),0<t.length&&(n=new Fu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kr=null,fi=null;function By(e){Eh(e,0)}function kl(e){var t=qn(e);if(Hp(t))return e}function Wy(e,t){if(e==="change")return t}var gh=!1;if(It){var fa;if(It){var pa="oninput"in document;if(!pa){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),pa=typeof pd.oninput=="function"}fa=pa}else fa=!1;gh=fa&&(!document.documentMode||9<document.documentMode)}function hd(){Kr&&(Kr.detachEvent("onpropertychange",yh),fi=Kr=null)}function yh(e){if(e.propertyName==="value"&&kl(fi)){var t=[];mh(t,fi,e,Mu(e)),Kp(By,t)}}function Uy(e,t,n){e==="focusin"?(hd(),Kr=t,fi=n,Kr.attachEvent("onpropertychange",yh)):e==="focusout"&&hd()}function Vy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(fi)}function Qy(e,t){if(e==="click")return kl(t)}function Gy(e,t){if(e==="input"||e==="change")return kl(t)}function Yy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Yy;function pi(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!is.call(t,i)||!vt(e[i],t[i]))return!1}return!0}function vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function md(e,t){var n=vd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vd(n)}}function wh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sh(){for(var e=window,t=zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zo(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qy(e){var t=Sh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wh(n.ownerDocument.documentElement,n)){if(r!==null&&Uu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=md(n,o);var l=md(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xy=It&&"documentMode"in document&&11>=document.documentMode,Gn=null,_s=null,Zr=null,Cs=!1;function gd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cs||Gn==null||Gn!==zo(r)||(r=Gn,"selectionStart"in r&&Uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&pi(Zr,r)||(Zr=r,r=Ao(_s,"onSelect"),0<r.length&&(t=new Fu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function Xi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:Xi("Animation","AnimationEnd"),animationiteration:Xi("Animation","AnimationIteration"),animationstart:Xi("Animation","AnimationStart"),transitionend:Xi("Transition","TransitionEnd")},ha={},xh={};It&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function _l(e){if(ha[e])return ha[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xh)return ha[e]=t[n];return e}var kh=_l("animationend"),_h=_l("animationiteration"),Ch=_l("animationstart"),Oh=_l("transitionend"),$h=new Map,yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){$h.set(e,t),An(t,[e])}for(var va=0;va<yd.length;va++){var ma=yd[va],Ky=ma.toLowerCase(),Zy=ma[0].toUpperCase()+ma.slice(1);vn(Ky,"on"+Zy)}vn(kh,"onAnimationEnd");vn(_h,"onAnimationIteration");vn(Ch,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(Oh,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function wd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kg(r,t,void 0,e),e.currentTarget=null}function Eh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;wd(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;wd(i,a,u),o=s}}}if(Ro)throw e=ws,Ro=!1,ws=null,e}function ee(e,t){var n=t[bs];n===void 0&&(n=t[bs]=new Set);var r=e+"__bubble";n.has(r)||(Ph(t,e,2,!1),n.add(r))}function ga(e,t,n){var r=0;t&&(r|=4),Ph(n,e,r,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function hi(e){if(!e[Ki]){e[Ki]=!0,Mp.forEach(function(n){n!=="selectionchange"&&(Jy.has(n)||ga(n,!1,e),ga(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,ga("selectionchange",!1,t))}}function Ph(e,t,n,r){switch(dh(t)){case 1:var i=py;break;case 4:i=hy;break;default:i=Au}n=i.bind(null,t,n,e),i=void 0,!ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ya(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=On(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Kp(function(){var u=o,h=Mu(n),f=[];e:{var m=$h.get(e);if(m!==void 0){var w=Fu,x=e;switch(e){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":w=by;break;case"focusin":x="focus",w=da;break;case"focusout":x="blur",w=da;break;case"beforeblur":case"afterblur":w=da;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=zy;break;case kh:case _h:case Ch:w=Sy;break;case Oh:w=Ry;break;case"scroll":w=vy;break;case"wheel":w=Iy;break;case"copy":case"cut":case"paste":w=ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ud}var y=(t&4)!==0,E=!y&&e==="scroll",p=y?m!==null?m+"Capture":null:m;y=[];for(var c=u,v;c!==null;){v=c;var g=v.stateNode;if(v.tag===5&&g!==null&&(v=g,p!==null&&(g=si(c,p),g!=null&&y.push(vi(c,g,v)))),E)break;c=c.return}0<y.length&&(m=new w(m,x,null,n,h),f.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==ms&&(x=n.relatedTarget||n.fromElement)&&(On(x)||x[Nt]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=u,x=x?On(x):null,x!==null&&(E=Hn(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=u),w!==x)){if(y=ad,g="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=ud,g="onPointerLeave",p="onPointerEnter",c="pointer"),E=w==null?m:qn(w),v=x==null?m:qn(x),m=new y(g,c+"leave",w,n,h),m.target=E,m.relatedTarget=v,g=null,On(h)===u&&(y=new y(p,c+"enter",x,n,h),y.target=v,y.relatedTarget=E,g=y),E=g,w&&x)t:{for(y=w,p=x,c=0,v=y;v;v=Fn(v))c++;for(v=0,g=p;g;g=Fn(g))v++;for(;0<c-v;)y=Fn(y),c--;for(;0<v-c;)p=Fn(p),v--;for(;c--;){if(y===p||p!==null&&y===p.alternate)break t;y=Fn(y),p=Fn(p)}y=null}else y=null;w!==null&&Sd(f,m,w,y,!1),x!==null&&E!==null&&Sd(f,E,x,y,!0)}}e:{if(m=u?qn(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var _=Wy;else if(fd(m))if(gh)_=Gy;else{_=Vy;var k=Uy}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=Qy);if(_&&(_=_(e,u))){mh(f,_,n,h);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&ds(m,"number",m.value)}switch(k=u?qn(u):window,e){case"focusin":(fd(k)||k.contentEditable==="true")&&(Gn=k,_s=u,Zr=null);break;case"focusout":Zr=_s=Gn=null;break;case"mousedown":Cs=!0;break;case"contextmenu":case"mouseup":case"dragend":Cs=!1,gd(f,n,h);break;case"selectionchange":if(Xy)break;case"keydown":case"keyup":gd(f,n,h)}var C;if(Wu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Qn?hh(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(ph&&n.locale!=="ko"&&(Qn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Qn&&(C=fh()):(tn=h,Hu="value"in tn?tn.value:tn.textContent,Qn=!0)),k=Ao(u,O),0<k.length&&(O=new sd(O,e,null,n,h),f.push({event:O,listeners:k}),C?O.data=C:(C=vh(n),C!==null&&(O.data=C)))),(C=Dy?Ay(e,n):Hy(e,n))&&(u=Ao(u,"onBeforeInput"),0<u.length&&(h=new sd("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=C))}Eh(f,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ao(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=si(e,n),o!=null&&r.unshift(vi(e,o,i)),o=si(e,t),o!=null&&r.push(vi(e,o,i))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sd(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=si(n,o),s!=null&&l.unshift(vi(n,s,a))):i||(s=si(n,o),s!=null&&l.push(vi(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var e0=/\r\n?/g,t0=/\u0000|\uFFFD/g;function xd(e){return(typeof e=="string"?e:""+e).replace(e0,`
`).replace(t0,"")}function Zi(e,t,n){if(t=xd(t),xd(e)!==t&&n)throw Error(P(425))}function Ho(){}var Os=null,$s=null;function Es(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ps=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,kd=typeof Promise=="function"?Promise:void 0,r0=typeof queueMicrotask=="function"?queueMicrotask:typeof kd<"u"?function(e){return kd.resolve(null).then(e).catch(i0)}:Ps;function i0(e){setTimeout(function(){throw e})}function wa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),di(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);di(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _d(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $r=Math.random().toString(36).slice(2),xt="__reactFiber$"+$r,mi="__reactProps$"+$r,Nt="__reactContainer$"+$r,bs="__reactEvents$"+$r,o0="__reactListeners$"+$r,l0="__reactHandles$"+$r;function On(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_d(e);e!==null;){if(n=e[xt])return n;e=_d(e)}return t}e=n,n=e.parentNode}return null}function Ti(e){return e=e[xt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Cl(e){return e[mi]||null}var Ts=[],Xn=-1;function mn(e){return{current:e}}function ne(e){0>Xn||(e.current=Ts[Xn],Ts[Xn]=null,Xn--)}function K(e,t){Xn++,Ts[Xn]=e.current,e.current=t}var hn={},je=mn(hn),Be=mn(!1),Rn=hn;function dr(e,t){var n=e.type.contextTypes;if(!n)return hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function We(e){return e=e.childContextTypes,e!=null}function Fo(){ne(Be),ne(je)}function Cd(e,t,n){if(je.current!==hn)throw Error(P(168));K(je,t),K(Be,n)}function bh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Ug(e)||"Unknown",i));return de({},n,r)}function Bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,Rn=je.current,K(je,e),K(Be,Be.current),!0}function Od(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=bh(e,t,Rn),r.__reactInternalMemoizedMergedChildContext=e,ne(Be),ne(je),K(je,e)):ne(Be),K(Be,n)}var zt=null,Ol=!1,Sa=!1;function Th(e){zt===null?zt=[e]:zt.push(e)}function a0(e){Ol=!0,Th(e)}function gn(){if(!Sa&&zt!==null){Sa=!0;var e=0,t=X;try{var n=zt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,Ol=!1}catch(i){throw zt!==null&&(zt=zt.slice(e+1)),th(Iu,gn),i}finally{X=t,Sa=!1}}return null}var Kn=[],Zn=0,Wo=null,Uo=0,tt=[],nt=0,Mn=null,Lt=1,Rt="";function xn(e,t){Kn[Zn++]=Uo,Kn[Zn++]=Wo,Wo=e,Uo=t}function jh(e,t,n){tt[nt++]=Lt,tt[nt++]=Rt,tt[nt++]=Mn,Mn=e;var r=Lt;e=Rt;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var o=32-ft(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Lt=1<<32-ft(t)+i|n<<i|r,Rt=o+e}else Lt=1<<o|n<<i|r,Rt=e}function Vu(e){e.return!==null&&(xn(e,1),jh(e,1,0))}function Qu(e){for(;e===Wo;)Wo=Kn[--Zn],Kn[Zn]=null,Uo=Kn[--Zn],Kn[Zn]=null;for(;e===Mn;)Mn=tt[--nt],tt[nt]=null,Rt=tt[--nt],tt[nt]=null,Lt=tt[--nt],tt[nt]=null}var qe=null,Ye=null,oe=!1,dt=null;function zh(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $d(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ye=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mn!==null?{id:Lt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ye=null,!0):!1;default:return!1}}function js(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zs(e){if(oe){var t=Ye;if(t){var n=t;if(!$d(e,t)){if(js(e))throw Error(P(418));t=an(n.nextSibling);var r=qe;t&&$d(e,t)?zh(r,n):(e.flags=e.flags&-4097|2,oe=!1,qe=e)}}else{if(js(e))throw Error(P(418));e.flags=e.flags&-4097|2,oe=!1,qe=e}}}function Ed(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Ji(e){if(e!==qe)return!1;if(!oe)return Ed(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Es(e.type,e.memoizedProps)),t&&(t=Ye)){if(js(e))throw Lh(),Error(P(418));for(;t;)zh(e,t),t=an(t.nextSibling)}if(Ed(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=qe?an(e.stateNode.nextSibling):null;return!0}function Lh(){for(var e=Ye;e;)e=an(e.nextSibling)}function fr(){Ye=qe=null,oe=!1}function Gu(e){dt===null?dt=[e]:dt.push(e)}var s0=Ht.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Vo=mn(null),Qo=null,Jn=null,Yu=null;function qu(){Yu=Jn=Qo=null}function Xu(e){var t=Vo.current;ne(Vo),e._currentValue=t}function Ls(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){Qo=e,Yu=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(Yu!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(Qo===null)throw Error(P(308));Jn=e,Qo.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var $n=null;function Ku(e){$n===null?$n=[e]:$n.push(e)}function Rh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ku(t)):(n.next=i.next,i.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Dt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ku(r)):(t.next=i.next,i.next=t),r.interleaved=t,Dt(e,n)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nu(e,n)}}function Pd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,r){var i=e.updateQueue;Xt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;l=0,h=u=s=null,a=o;do{var m=a.lane,w=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(m=t,w=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(w,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,m=typeof x=="function"?x.call(w,f,m):x,m==null)break e;f=de({},f,m);break e;case 2:Xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=w,s=f):h=h.next=w,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Nn|=l,e.lanes=l,e.memoizedState=f}}function bd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Ih=new Rp.Component().refs;function Rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $l={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=cn(e),o=Mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=sn(e,o,i),t!==null&&(pt(t,e,i,r),xo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=cn(e),o=Mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=sn(e,o,i),t!==null&&(pt(t,e,i,r),xo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=cn(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=sn(e,i,r),t!==null&&(pt(t,e,r,n),xo(t,e,r))}};function Td(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!pi(n,r)||!pi(i,o):!0}function Nh(e,t,n){var r=!1,i=hn,o=t.contextType;return typeof o=="object"&&o!==null?o=ot(o):(i=We(t)?Rn:je.current,r=t.contextTypes,o=(r=r!=null)?dr(e,i):hn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function jd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$l.enqueueReplaceState(t,t.state,null)}function Ms(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ih,Zu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ot(o):(o=We(t)?Rn:je.current,i.context=dr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Rs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&$l.enqueueReplaceState(i,i.state,null),Go(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Ih&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function eo(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zd(e){var t=e._init;return t(e._payload)}function Dh(e){function t(p,c){if(e){var v=p.deletions;v===null?(p.deletions=[c],p.flags|=16):v.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=dn(p,c),p.index=0,p.sibling=null,p}function o(p,c,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<c?(p.flags|=2,c):v):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,v,g){return c===null||c.tag!==6?(c=Ea(v,p.mode,g),c.return=p,c):(c=i(c,v),c.return=p,c)}function s(p,c,v,g){var _=v.type;return _===Vn?h(p,c,v.props.children,g,v.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===qt&&zd(_)===c.type)?(g=i(c,v.props),g.ref=Ir(p,c,v),g.return=p,g):(g=Eo(v.type,v.key,v.props,null,p.mode,g),g.ref=Ir(p,c,v),g.return=p,g)}function u(p,c,v,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==v.containerInfo||c.stateNode.implementation!==v.implementation?(c=Pa(v,p.mode,g),c.return=p,c):(c=i(c,v.children||[]),c.return=p,c)}function h(p,c,v,g,_){return c===null||c.tag!==7?(c=jn(v,p.mode,g,_),c.return=p,c):(c=i(c,v),c.return=p,c)}function f(p,c,v){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ea(""+c,p.mode,v),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Wi:return v=Eo(c.type,c.key,c.props,null,p.mode,v),v.ref=Ir(p,null,c),v.return=p,v;case Un:return c=Pa(c,p.mode,v),c.return=p,c;case qt:var g=c._init;return f(p,g(c._payload),v)}if(Br(c)||jr(c))return c=jn(c,p.mode,v,null),c.return=p,c;eo(p,c)}return null}function m(p,c,v,g){var _=c!==null?c.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:a(p,c,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wi:return v.key===_?s(p,c,v,g):null;case Un:return v.key===_?u(p,c,v,g):null;case qt:return _=v._init,m(p,c,_(v._payload),g)}if(Br(v)||jr(v))return _!==null?null:h(p,c,v,g,null);eo(p,v)}return null}function w(p,c,v,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return p=p.get(v)||null,a(c,p,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wi:return p=p.get(g.key===null?v:g.key)||null,s(c,p,g,_);case Un:return p=p.get(g.key===null?v:g.key)||null,u(c,p,g,_);case qt:var k=g._init;return w(p,c,v,k(g._payload),_)}if(Br(g)||jr(g))return p=p.get(v)||null,h(c,p,g,_,null);eo(c,g)}return null}function x(p,c,v,g){for(var _=null,k=null,C=c,O=c=0,b=null;C!==null&&O<v.length;O++){C.index>O?(b=C,C=null):b=C.sibling;var T=m(p,C,v[O],g);if(T===null){C===null&&(C=b);break}e&&C&&T.alternate===null&&t(p,C),c=o(T,c,O),k===null?_=T:k.sibling=T,k=T,C=b}if(O===v.length)return n(p,C),oe&&xn(p,O),_;if(C===null){for(;O<v.length;O++)C=f(p,v[O],g),C!==null&&(c=o(C,c,O),k===null?_=C:k.sibling=C,k=C);return oe&&xn(p,O),_}for(C=r(p,C);O<v.length;O++)b=w(C,p,O,v[O],g),b!==null&&(e&&b.alternate!==null&&C.delete(b.key===null?O:b.key),c=o(b,c,O),k===null?_=b:k.sibling=b,k=b);return e&&C.forEach(function(N){return t(p,N)}),oe&&xn(p,O),_}function y(p,c,v,g){var _=jr(v);if(typeof _!="function")throw Error(P(150));if(v=_.call(v),v==null)throw Error(P(151));for(var k=_=null,C=c,O=c=0,b=null,T=v.next();C!==null&&!T.done;O++,T=v.next()){C.index>O?(b=C,C=null):b=C.sibling;var N=m(p,C,T.value,g);if(N===null){C===null&&(C=b);break}e&&C&&N.alternate===null&&t(p,C),c=o(N,c,O),k===null?_=N:k.sibling=N,k=N,C=b}if(T.done)return n(p,C),oe&&xn(p,O),_;if(C===null){for(;!T.done;O++,T=v.next())T=f(p,T.value,g),T!==null&&(c=o(T,c,O),k===null?_=T:k.sibling=T,k=T);return oe&&xn(p,O),_}for(C=r(p,C);!T.done;O++,T=v.next())T=w(C,p,O,T.value,g),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?O:T.key),c=o(T,c,O),k===null?_=T:k.sibling=T,k=T);return e&&C.forEach(function(M){return t(p,M)}),oe&&xn(p,O),_}function E(p,c,v,g){if(typeof v=="object"&&v!==null&&v.type===Vn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Wi:e:{for(var _=v.key,k=c;k!==null;){if(k.key===_){if(_=v.type,_===Vn){if(k.tag===7){n(p,k.sibling),c=i(k,v.props.children),c.return=p,p=c;break e}}else if(k.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===qt&&zd(_)===k.type){n(p,k.sibling),c=i(k,v.props),c.ref=Ir(p,k,v),c.return=p,p=c;break e}n(p,k);break}else t(p,k);k=k.sibling}v.type===Vn?(c=jn(v.props.children,p.mode,g,v.key),c.return=p,p=c):(g=Eo(v.type,v.key,v.props,null,p.mode,g),g.ref=Ir(p,c,v),g.return=p,p=g)}return l(p);case Un:e:{for(k=v.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===v.containerInfo&&c.stateNode.implementation===v.implementation){n(p,c.sibling),c=i(c,v.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Pa(v,p.mode,g),c.return=p,p=c}return l(p);case qt:return k=v._init,E(p,c,k(v._payload),g)}if(Br(v))return x(p,c,v,g);if(jr(v))return y(p,c,v,g);eo(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,v),c.return=p,p=c):(n(p,c),c=Ea(v,p.mode,g),c.return=p,p=c),l(p)):n(p,c)}return E}var pr=Dh(!0),Ah=Dh(!1),ji={},_t=mn(ji),gi=mn(ji),yi=mn(ji);function En(e){if(e===ji)throw Error(P(174));return e}function Ju(e,t){switch(K(yi,t),K(gi,e),K(_t,ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ps(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ps(t,e)}ne(_t),K(_t,t)}function hr(){ne(_t),ne(gi),ne(yi)}function Hh(e){En(yi.current);var t=En(_t.current),n=ps(t,e.type);t!==n&&(K(gi,e),K(_t,n))}function ec(e){gi.current===e&&(ne(_t),ne(gi))}var ue=mn(0);function Yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xa=[];function tc(){for(var e=0;e<xa.length;e++)xa[e]._workInProgressVersionPrimary=null;xa.length=0}var ko=Ht.ReactCurrentDispatcher,ka=Ht.ReactCurrentBatchConfig,In=0,ce=null,ye=null,Se=null,qo=!1,Jr=!1,wi=0,u0=0;function Ee(){throw Error(P(321))}function nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function rc(e,t,n,r,i,o){if(In=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?p0:h0,e=n(r,i),Jr){o=0;do{if(Jr=!1,wi=0,25<=o)throw Error(P(301));o+=1,Se=ye=null,t.updateQueue=null,ko.current=v0,e=n(r,i)}while(Jr)}if(ko.current=Xo,t=ye!==null&&ye.next!==null,In=0,Se=ye=ce=null,qo=!1,t)throw Error(P(300));return e}function ic(){var e=wi!==0;return wi=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ce.memoizedState=Se=e:Se=Se.next=e,Se}function lt(){if(ye===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Se===null?ce.memoizedState:Se.next;if(t!==null)Se=t,ye=e;else{if(e===null)throw Error(P(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Se===null?ce.memoizedState=Se=e:Se=Se.next=e}return Se}function Si(e,t){return typeof t=="function"?t(e):t}function _a(e){var t=lt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ye,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var h=u.lane;if((In&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,ce.lanes|=h,Nn|=h}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,vt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,Nn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ca(e){var t=lt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);vt(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fh(){}function Bh(e,t){var n=ce,r=lt(),i=t(),o=!vt(r.memoizedState,i);if(o&&(r.memoizedState=i,Fe=!0),r=r.queue,oc(Vh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,xi(9,Uh.bind(null,n,r,i,t),void 0,null),ke===null)throw Error(P(349));In&30||Wh(n,t,i)}return i}function Wh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uh(e,t,n,r){t.value=n,t.getSnapshot=r,Qh(t)&&Gh(e)}function Vh(e,t,n){return n(function(){Qh(t)&&Gh(e)})}function Qh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Gh(e){var t=Dt(e,1);t!==null&&pt(t,e,1,-1)}function Ld(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:e},t.queue=e,e=e.dispatch=f0.bind(null,ce,e),[t.memoizedState,e]}function xi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yh(){return lt().memoizedState}function _o(e,t,n,r){var i=gt();ce.flags|=e,i.memoizedState=xi(1|t,n,void 0,r===void 0?null:r)}function El(e,t,n,r){var i=lt();r=r===void 0?null:r;var o=void 0;if(ye!==null){var l=ye.memoizedState;if(o=l.destroy,r!==null&&nc(r,l.deps)){i.memoizedState=xi(t,n,o,r);return}}ce.flags|=e,i.memoizedState=xi(1|t,n,o,r)}function Rd(e,t){return _o(8390656,8,e,t)}function oc(e,t){return El(2048,8,e,t)}function qh(e,t){return El(4,2,e,t)}function Xh(e,t){return El(4,4,e,t)}function Kh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zh(e,t,n){return n=n!=null?n.concat([e]):null,El(4,4,Kh.bind(null,t,e),n)}function lc(){}function Jh(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ev(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tv(e,t,n){return In&21?(vt(n,t)||(n=ih(),ce.lanes|=n,Nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function c0(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=ka.transition;ka.transition={};try{e(!1),t()}finally{X=n,ka.transition=r}}function nv(){return lt().memoizedState}function d0(e,t,n){var r=cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rv(e))iv(t,n);else if(n=Rh(e,t,n,r),n!==null){var i=Ie();pt(n,e,r,i),ov(n,t,r)}}function f0(e,t,n){var r=cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rv(e))iv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,vt(a,l)){var s=t.interleaved;s===null?(i.next=i,Ku(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Rh(e,t,i,r),n!==null&&(i=Ie(),pt(n,e,r,i),ov(n,t,r))}}function rv(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function iv(e,t){Jr=qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ov(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nu(e,n)}}var Xo={readContext:ot,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},p0={readContext:ot,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Rd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_o(4194308,4,Kh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _o(4194308,4,e,t)},useInsertionEffect:function(e,t){return _o(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=d0.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Ld,useDebugValue:lc,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Ld(!1),t=e[0];return e=c0.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=gt();if(oe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ke===null)throw Error(P(349));In&30||Wh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Rd(Vh.bind(null,r,o,e),[e]),r.flags|=2048,xi(9,Uh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=gt(),t=ke.identifierPrefix;if(oe){var n=Rt,r=Lt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=u0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},h0={readContext:ot,useCallback:Jh,useContext:ot,useEffect:oc,useImperativeHandle:Zh,useInsertionEffect:qh,useLayoutEffect:Xh,useMemo:ev,useReducer:_a,useRef:Yh,useState:function(){return _a(Si)},useDebugValue:lc,useDeferredValue:function(e){var t=lt();return tv(t,ye.memoizedState,e)},useTransition:function(){var e=_a(Si)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Fh,useSyncExternalStore:Bh,useId:nv,unstable_isNewReconciler:!1},v0={readContext:ot,useCallback:Jh,useContext:ot,useEffect:oc,useImperativeHandle:Zh,useInsertionEffect:qh,useLayoutEffect:Xh,useMemo:ev,useReducer:Ca,useRef:Yh,useState:function(){return Ca(Si)},useDebugValue:lc,useDeferredValue:function(e){var t=lt();return ye===null?t.memoizedState=e:tv(t,ye.memoizedState,e)},useTransition:function(){var e=Ca(Si)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Fh,useSyncExternalStore:Bh,useId:nv,unstable_isNewReconciler:!1};function vr(e,t){try{var n="",r=t;do n+=Wg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Oa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Is(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var m0=typeof WeakMap=="function"?WeakMap:Map;function lv(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zo||(Zo=!0,Qs=r),Is(e,t)},n}function av(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Is(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Is(e,t),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Md(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new m0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=T0.bind(null,e,t,n),t.then(e,e))}function Id(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e)}var g0=Ht.ReactCurrentOwner,Fe=!1;function Me(e,t,n,r){t.child=e===null?Ah(t,null,n,r):pr(t,e.child,n,r)}function Dd(e,t,n,r,i){n=n.render;var o=t.ref;return ar(t,i),r=rc(e,t,n,r,o,i),n=ic(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(oe&&n&&Vu(t),t.flags|=1,Me(e,t,r,i),t.child)}function Ad(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!hc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,sv(e,t,o,r,i)):(e=Eo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(l,r)&&e.ref===t.ref)return At(e,t,i)}return t.flags|=1,e=dn(o,r),e.ref=t.ref,e.return=t,t.child=e}function sv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(pi(o,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,At(e,t,i)}return Ns(e,t,n,r,i)}function uv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(tr,Ge),Ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(tr,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,K(tr,Ge),Ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,K(tr,Ge),Ge|=r;return Me(e,t,i,n),t.child}function cv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ns(e,t,n,r,i){var o=We(n)?Rn:je.current;return o=dr(t,o),ar(t,i),n=rc(e,t,n,r,o,i),r=ic(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(oe&&r&&Vu(t),t.flags|=1,Me(e,t,n,i),t.child)}function Hd(e,t,n,r,i){if(We(n)){var o=!0;Bo(t)}else o=!1;if(ar(t,i),t.stateNode===null)Co(e,t),Nh(t,n,r),Ms(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=We(n)?Rn:je.current,u=dr(t,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&jd(t,l,r,u),Xt=!1;var m=t.memoizedState;l.state=m,Go(t,r,l,i),s=t.memoizedState,a!==r||m!==s||Be.current||Xt?(typeof h=="function"&&(Rs(t,n,h,r),s=t.memoizedState),(a=Xt||Td(t,n,a,r,m,s,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Mh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ut(t.type,a),l.props=u,f=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=ot(s):(s=We(n)?Rn:je.current,s=dr(t,s));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||m!==s)&&jd(t,l,r,s),Xt=!1,m=t.memoizedState,l.state=m,Go(t,r,l,i);var x=t.memoizedState;a!==f||m!==x||Be.current||Xt?(typeof w=="function"&&(Rs(t,n,w,r),x=t.memoizedState),(u=Xt||Td(t,n,u,r,m,x,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ds(e,t,n,r,o,i)}function Ds(e,t,n,r,i,o){cv(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Od(t,n,!1),At(e,t,o);r=t.stateNode,g0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=pr(t,e.child,null,o),t.child=pr(t,null,a,o)):Me(e,t,a,o),t.memoizedState=r.state,i&&Od(t,n,!0),t.child}function dv(e){var t=e.stateNode;t.pendingContext?Cd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cd(e,t.context,!1),Ju(e,t.containerInfo)}function Fd(e,t,n,r,i){return fr(),Gu(i),t.flags|=256,Me(e,t,n,r),t.child}var As={dehydrated:null,treeContext:null,retryLane:0};function Hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function fv(e,t,n){var r=t.pendingProps,i=ue.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(ue,i&1),e===null)return zs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Tl(l,r,0,null),e=jn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Hs(n),t.memoizedState=As,e):ac(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return y0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=dn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=dn(a,o):(o=jn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Hs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=As,r}return o=e.child,e=o.sibling,r=dn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ac(e,t){return t=Tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function to(e,t,n,r){return r!==null&&Gu(r),pr(t,e.child,null,n),e=ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function y0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Oa(Error(P(422))),to(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Tl({mode:"visible",children:r.children},i,0,null),o=jn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&pr(t,e.child,null,l),t.child.memoizedState=Hs(l),t.memoizedState=As,o);if(!(t.mode&1))return to(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(P(419)),r=Oa(o,r,void 0),to(e,t,l,r)}if(a=(l&e.childLanes)!==0,Fe||a){if(r=ke,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Dt(e,i),pt(r,e,i,-1))}return pc(),r=Oa(Error(P(421))),to(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=j0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ye=an(i.nextSibling),qe=t,oe=!0,dt=null,e!==null&&(tt[nt++]=Lt,tt[nt++]=Rt,tt[nt++]=Mn,Lt=e.id,Rt=e.overflow,Mn=t),t=ac(t,r.children),t.flags|=4096,t)}function Bd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ls(e.return,t,n)}function $a(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function pv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Me(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bd(e,n,t);else if(e.tag===19)Bd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(ue,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Yo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$a(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Yo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$a(t,!0,n,null,o);break;case"together":$a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Co(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function w0(e,t,n){switch(t.tag){case 3:dv(t),fr();break;case 5:Hh(t);break;case 1:We(t.type)&&Bo(t);break;case 4:Ju(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(Vo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?fv(e,t,n):(K(ue,ue.current&1),e=At(e,t,n),e!==null?e.sibling:null);K(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,uv(e,t,n)}return At(e,t,n)}var hv,Fs,vv,mv;hv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fs=function(){};vv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,En(_t.current);var o=null;switch(n){case"input":i=us(e,i),r=us(e,r),o=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),o=[];break;case"textarea":i=fs(e,i),r=fs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ho)}hs(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(li.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(li.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ee("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};mv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function S0(e,t,n){var r=t.pendingProps;switch(Qu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return We(t.type)&&Fo(),Pe(t),null;case 3:return r=t.stateNode,hr(),ne(Be),ne(je),tc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(qs(dt),dt=null))),Fs(e,t),Pe(t),null;case 5:ec(t);var i=En(yi.current);if(n=t.type,e!==null&&t.stateNode!=null)vv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Pe(t),null}if(e=En(_t.current),Ji(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[xt]=t,r[mi]=o,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Ur.length;i++)ee(Ur[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Kc(r,o),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ee("invalid",r);break;case"textarea":Jc(r,o),ee("invalid",r)}hs(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,a,e),i=["children",""+a]):li.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ee("scroll",r)}switch(n){case"input":Ui(r),Zc(r,o,!0);break;case"textarea":Ui(r),ed(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ho)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[xt]=t,e[mi]=r,hv(e,t,!1,!1),t.stateNode=e;e:{switch(l=vs(n,r),n){case"dialog":ee("cancel",e),ee("close",e),i=r;break;case"iframe":case"object":case"embed":ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ur.length;i++)ee(Ur[i],e);i=r;break;case"source":ee("error",e),i=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),i=r;break;case"details":ee("toggle",e),i=r;break;case"input":Kc(e,r),i=us(e,r),ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),ee("invalid",e);break;case"textarea":Jc(e,r),i=fs(e,r),ee("invalid",e);break;default:i=r}hs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Qp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Up(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ai(e,s):typeof s=="number"&&ai(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(li.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ee("scroll",e):s!=null&&ju(e,o,s,l))}switch(n){case"input":Ui(e),Zc(e,r,!1);break;case"textarea":Ui(e),ed(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?rr(e,!!r.multiple,o,!1):r.defaultValue!=null&&rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)mv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=En(yi.current),En(_t.current),Ji(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(o=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Pe(t),null;case 13:if(ne(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ye!==null&&t.mode&1&&!(t.flags&128))Lh(),fr(),t.flags|=98560,o=!1;else if(o=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[xt]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),o=!1}else dt!==null&&(qs(dt),dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?we===0&&(we=3):pc())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return hr(),Fs(e,t),e===null&&hi(t.stateNode.containerInfo),Pe(t),null;case 10:return Xu(t.type._context),Pe(t),null;case 17:return We(t.type)&&Fo(),Pe(t),null;case 19:if(ne(ue),o=t.memoizedState,o===null)return Pe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Nr(o,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Yo(e),l!==null){for(t.flags|=128,Nr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ue,ue.current&1|2),t.child}e=e.sibling}o.tail!==null&&ve()>mr&&(t.flags|=128,r=!0,Nr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Yo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!oe)return Pe(t),null}else 2*ve()-o.renderingStartTime>mr&&n!==1073741824&&(t.flags|=128,r=!0,Nr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ve(),t.sibling=null,n=ue.current,K(ue,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return fc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function x0(e,t){switch(Qu(t),t.tag){case 1:return We(t.type)&&Fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),ne(Be),ne(je),tc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ec(t),null;case 13:if(ne(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ue),null;case 4:return hr(),null;case 10:return Xu(t.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var no=!1,be=!1,k0=typeof WeakSet=="function"?WeakSet:Set,L=null;function er(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function Bs(e,t,n){try{n()}catch(r){he(e,t,r)}}var Wd=!1;function _0(e,t){if(Os=No,e=Sh(),Uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,h=0,f=e,m=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==o||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===e)break t;if(m===n&&++u===i&&(a=l),m===o&&++h===r&&(s=l),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for($s={focusedElem:e,selectionRange:n},No=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,E=x.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:ut(t.type,y),E);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(g){he(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return x=Wd,Wd=!1,x}function ei(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Bs(t,n,o)}i=i.next}while(i!==r)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ws(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gv(e){var t=e.alternate;t!==null&&(e.alternate=null,gv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[mi],delete t[bs],delete t[o0],delete t[l0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yv(e){return e.tag===5||e.tag===3||e.tag===4}function Ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Us(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ho));else if(r!==4&&(e=e.child,e!==null))for(Us(e,t,n),e=e.sibling;e!==null;)Us(e,t,n),e=e.sibling}function Vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}var Ce=null,ct=!1;function Ut(e,t,n){for(n=n.child;n!==null;)wv(e,t,n),n=n.sibling}function wv(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:be||er(n,t);case 6:var r=Ce,i=ct;Ce=null,Ut(e,t,n),Ce=r,ct=i,Ce!==null&&(ct?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(ct?(e=Ce,n=n.stateNode,e.nodeType===8?wa(e.parentNode,n):e.nodeType===1&&wa(e,n),di(e)):wa(Ce,n.stateNode));break;case 4:r=Ce,i=ct,Ce=n.stateNode.containerInfo,ct=!0,Ut(e,t,n),Ce=r,ct=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Bs(n,t,l),i=i.next}while(i!==r)}Ut(e,t,n);break;case 1:if(!be&&(er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,t,a)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Ut(e,t,n),be=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function Vd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new k0),t.forEach(function(r){var i=z0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,ct=!1;break e;case 3:Ce=a.stateNode.containerInfo,ct=!0;break e;case 4:Ce=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(Ce===null)throw Error(P(160));wv(o,l,i),Ce=null,ct=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){he(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sv(t,e),t=t.sibling}function Sv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),mt(e),r&4){try{ei(3,e,e.return),Pl(3,e)}catch(y){he(e,e.return,y)}try{ei(5,e,e.return)}catch(y){he(e,e.return,y)}}break;case 1:st(t,e),mt(e),r&512&&n!==null&&er(n,n.return);break;case 5:if(st(t,e),mt(e),r&512&&n!==null&&er(n,n.return),e.flags&32){var i=e.stateNode;try{ai(i,"")}catch(y){he(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Fp(i,o),vs(a,l);var u=vs(a,o);for(l=0;l<s.length;l+=2){var h=s[l],f=s[l+1];h==="style"?Qp(i,f):h==="dangerouslySetInnerHTML"?Up(i,f):h==="children"?ai(i,f):ju(i,h,f,u)}switch(a){case"input":cs(i,o);break;case"textarea":Bp(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?rr(i,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?rr(i,!!o.multiple,o.defaultValue,!0):rr(i,!!o.multiple,o.multiple?[]:"",!1))}i[mi]=o}catch(y){he(e,e.return,y)}}break;case 6:if(st(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){he(e,e.return,y)}}break;case 3:if(st(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(y){he(e,e.return,y)}break;case 4:st(t,e),mt(e);break;case 13:st(t,e),mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(cc=ve())),r&4&&Vd(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(be=(u=be)||h,st(t,e),be=u):st(t,e),mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(L=e,h=e.child;h!==null;){for(f=L=h;L!==null;){switch(m=L,w=m.child,m.tag){case 0:case 11:case 14:case 15:ei(4,m,m.return);break;case 1:er(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){he(r,n,y)}}break;case 5:er(m,m.return);break;case 22:if(m.memoizedState!==null){Gd(f);continue}}w!==null?(w.return=m,L=w):Gd(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Vp("display",l))}catch(y){he(e,e.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){he(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:st(t,e),mt(e),r&4&&Vd(e);break;case 21:break;default:st(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yv(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ai(i,""),r.flags&=-33);var o=Ud(e);Vs(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ud(e);Us(e,a,l);break;default:throw Error(P(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function C0(e,t,n){L=e,xv(e)}function xv(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||no;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||be;a=no;var u=be;if(no=l,(be=s)&&!u)for(L=i;L!==null;)l=L,s=l.child,l.tag===22&&l.memoizedState!==null?Yd(i):s!==null?(s.return=l,L=s):Yd(i);for(;o!==null;)L=o,xv(o),o=o.sibling;L=i,no=a,be=u}Qd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Qd(e)}}function Qd(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||Pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&bd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&di(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}be||t.flags&512&&Ws(t)}catch(m){he(t,t.return,m)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Gd(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Yd(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){he(t,i,s)}}var o=t.return;try{Ws(t)}catch(s){he(t,o,s)}break;case 5:var l=t.return;try{Ws(t)}catch(s){he(t,l,s)}}}catch(s){he(t,t.return,s)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var O0=Math.ceil,Ko=Ht.ReactCurrentDispatcher,sc=Ht.ReactCurrentOwner,it=Ht.ReactCurrentBatchConfig,V=0,ke=null,ge=null,Oe=0,Ge=0,tr=mn(0),we=0,ki=null,Nn=0,bl=0,uc=0,ti=null,He=null,cc=0,mr=1/0,Tt=null,Zo=!1,Qs=null,un=null,ro=!1,nn=null,Jo=0,ni=0,Gs=null,Oo=-1,$o=0;function Ie(){return V&6?ve():Oo!==-1?Oo:Oo=ve()}function cn(e){return e.mode&1?V&2&&Oe!==0?Oe&-Oe:s0.transition!==null?($o===0&&($o=ih()),$o):(e=X,e!==0||(e=window.event,e=e===void 0?16:dh(e.type)),e):1}function pt(e,t,n,r){if(50<ni)throw ni=0,Gs=null,Error(P(185));Pi(e,n,r),(!(V&2)||e!==ke)&&(e===ke&&(!(V&2)&&(bl|=n),we===4&&Jt(e,Oe)),Ue(e,r),n===1&&V===0&&!(t.mode&1)&&(mr=ve()+500,Ol&&gn()))}function Ue(e,t){var n=e.callbackNode;sy(e,t);var r=Io(e,e===ke?Oe:0);if(r===0)n!==null&&rd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&rd(n),t===1)e.tag===0?a0(qd.bind(null,e)):Th(qd.bind(null,e)),r0(function(){!(V&6)&&gn()}),n=null;else{switch(oh(r)){case 1:n=Iu;break;case 4:n=nh;break;case 16:n=Mo;break;case 536870912:n=rh;break;default:n=Mo}n=bv(n,kv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kv(e,t){if(Oo=-1,$o=0,V&6)throw Error(P(327));var n=e.callbackNode;if(sr()&&e.callbackNode!==n)return null;var r=Io(e,e===ke?Oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var i=V;V|=2;var o=Cv();(ke!==e||Oe!==t)&&(Tt=null,mr=ve()+500,Tn(e,t));do try{P0();break}catch(a){_v(e,a)}while(1);qu(),Ko.current=o,V=i,ge!==null?t=0:(ke=null,Oe=0,t=we)}if(t!==0){if(t===2&&(i=Ss(e),i!==0&&(r=i,t=Ys(e,i))),t===1)throw n=ki,Tn(e,0),Jt(e,r),Ue(e,ve()),n;if(t===6)Jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!$0(i)&&(t=el(e,r),t===2&&(o=Ss(e),o!==0&&(r=o,t=Ys(e,o))),t===1))throw n=ki,Tn(e,0),Jt(e,r),Ue(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:kn(e,He,Tt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=cc+500-ve(),10<t)){if(Io(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ps(kn.bind(null,e,He,Tt),t);break}kn(e,He,Tt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-ft(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*O0(r/1960))-r,10<r){e.timeoutHandle=Ps(kn.bind(null,e,He,Tt),r);break}kn(e,He,Tt);break;case 5:kn(e,He,Tt);break;default:throw Error(P(329))}}}return Ue(e,ve()),e.callbackNode===n?kv.bind(null,e):null}function Ys(e,t){var n=ti;return e.current.memoizedState.isDehydrated&&(Tn(e,t).flags|=256),e=el(e,t),e!==2&&(t=He,He=n,t!==null&&qs(t)),e}function qs(e){He===null?He=e:He.push.apply(He,e)}function $0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~uc,t&=~bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function qd(e){if(V&6)throw Error(P(327));sr();var t=Io(e,0);if(!(t&1))return Ue(e,ve()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=Ss(e);r!==0&&(t=r,n=Ys(e,r))}if(n===1)throw n=ki,Tn(e,0),Jt(e,t),Ue(e,ve()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,He,Tt),Ue(e,ve()),null}function dc(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(mr=ve()+500,Ol&&gn())}}function Dn(e){nn!==null&&nn.tag===0&&!(V&6)&&sr();var t=V;V|=1;var n=it.transition,r=X;try{if(it.transition=null,X=1,e)return e()}finally{X=r,it.transition=n,V=t,!(V&6)&&gn()}}function fc(){Ge=tr.current,ne(tr)}function Tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,n0(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Qu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fo();break;case 3:hr(),ne(Be),ne(je),tc();break;case 5:ec(r);break;case 4:hr();break;case 13:ne(ue);break;case 19:ne(ue);break;case 10:Xu(r.type._context);break;case 22:case 23:fc()}n=n.return}if(ke=e,ge=e=dn(e.current,null),Oe=Ge=t,we=0,ki=null,uc=bl=Nn=0,He=ti=null,$n!==null){for(t=0;t<$n.length;t++)if(n=$n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}$n=null}return e}function _v(e,t){do{var n=ge;try{if(qu(),ko.current=Xo,qo){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qo=!1}if(In=0,Se=ye=ce=null,Jr=!1,wi=0,sc.current=null,n===null||n.return===null){we=1,ki=t,ge=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Oe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Id(l);if(w!==null){w.flags&=-257,Nd(w,l,a,o,t),w.mode&1&&Md(o,u,t),t=w,s=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(s),t.updateQueue=y}else x.add(s);break e}else{if(!(t&1)){Md(o,u,t),pc();break e}s=Error(P(426))}}else if(oe&&a.mode&1){var E=Id(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Nd(E,l,a,o,t),Gu(vr(s,a));break e}}o=s=vr(s,a),we!==4&&(we=2),ti===null?ti=[o]:ti.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=lv(o,s,t);Pd(o,p);break e;case 1:a=s;var c=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(un===null||!un.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=av(o,a,t);Pd(o,g);break e}}o=o.return}while(o!==null)}$v(n)}catch(_){t=_,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(1)}function Cv(){var e=Ko.current;return Ko.current=Xo,e===null?Xo:e}function pc(){(we===0||we===3||we===2)&&(we=4),ke===null||!(Nn&268435455)&&!(bl&268435455)||Jt(ke,Oe)}function el(e,t){var n=V;V|=2;var r=Cv();(ke!==e||Oe!==t)&&(Tt=null,Tn(e,t));do try{E0();break}catch(i){_v(e,i)}while(1);if(qu(),V=n,Ko.current=r,ge!==null)throw Error(P(261));return ke=null,Oe=0,we}function E0(){for(;ge!==null;)Ov(ge)}function P0(){for(;ge!==null&&!Jg();)Ov(ge)}function Ov(e){var t=Pv(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?$v(e):ge=t,sc.current=null}function $v(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=x0(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ge=null;return}}else if(n=S0(n,t,Ge),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);we===0&&(we=5)}function kn(e,t,n){var r=X,i=it.transition;try{it.transition=null,X=1,b0(e,t,n,r)}finally{it.transition=i,X=r}return null}function b0(e,t,n,r){do sr();while(nn!==null);if(V&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(uy(e,o),e===ke&&(ge=ke=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,bv(Mo,function(){return sr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=it.transition,it.transition=null;var l=X;X=1;var a=V;V|=4,sc.current=null,_0(e,n),Sv(n,e),qy($s),No=!!Os,$s=Os=null,e.current=n,C0(n),ey(),V=a,X=l,it.transition=o}else e.current=n;if(ro&&(ro=!1,nn=e,Jo=i),o=e.pendingLanes,o===0&&(un=null),ry(n.stateNode),Ue(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zo)throw Zo=!1,e=Qs,Qs=null,e;return Jo&1&&e.tag!==0&&sr(),o=e.pendingLanes,o&1?e===Gs?ni++:(ni=0,Gs=e):ni=0,gn(),null}function sr(){if(nn!==null){var e=oh(Jo),t=it.transition,n=X;try{if(it.transition=null,X=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Jo=0,V&6)throw Error(P(331));var i=V;for(V|=4,L=e.current;L!==null;){var o=L,l=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(L=u;L!==null;){var h=L;switch(h.tag){case 0:case 11:case 15:ei(8,h,o)}var f=h.child;if(f!==null)f.return=h,L=f;else for(;L!==null;){h=L;var m=h.sibling,w=h.return;if(gv(h),h===u){L=null;break}if(m!==null){m.return=w,L=m;break}L=w}}}var x=o.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}L=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,L=l;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ei(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,L=p;break e}L=o.return}}var c=e.current;for(L=c;L!==null;){l=L;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,L=v;else e:for(l=c;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Pl(9,a)}}catch(_){he(a,a.return,_)}if(a===l){L=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,L=g;break e}L=a.return}}if(V=i,gn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Sl,e)}catch{}r=!0}return r}finally{X=n,it.transition=t}}return!1}function Xd(e,t,n){t=vr(n,t),t=lv(e,t,1),e=sn(e,t,1),t=Ie(),e!==null&&(Pi(e,1,t),Ue(e,t))}function he(e,t,n){if(e.tag===3)Xd(e,e,n);else for(;t!==null;){if(t.tag===3){Xd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=vr(n,e),e=av(t,e,1),t=sn(t,e,1),e=Ie(),t!==null&&(Pi(t,1,e),Ue(t,e));break}}t=t.return}}function T0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Oe&n)===n&&(we===4||we===3&&(Oe&130023424)===Oe&&500>ve()-cc?Tn(e,0):uc|=n),Ue(e,t)}function Ev(e,t){t===0&&(e.mode&1?(t=Gi,Gi<<=1,!(Gi&130023424)&&(Gi=4194304)):t=1);var n=Ie();e=Dt(e,t),e!==null&&(Pi(e,t,n),Ue(e,n))}function j0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ev(e,n)}function z0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Ev(e,n)}var Pv;Pv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,w0(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,oe&&t.flags&1048576&&jh(t,Uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Co(e,t),e=t.pendingProps;var i=dr(t,je.current);ar(t,n),i=rc(null,t,r,e,i,n);var o=ic();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(o=!0,Bo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zu(t),i.updater=$l,t.stateNode=i,i._reactInternals=t,Ms(t,r,e,n),t=Ds(null,t,r,!0,o,n)):(t.tag=0,oe&&o&&Vu(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Co(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=R0(r),e=ut(r,e),i){case 0:t=Ns(null,t,r,e,n);break e;case 1:t=Hd(null,t,r,e,n);break e;case 11:t=Dd(null,t,r,e,n);break e;case 14:t=Ad(null,t,r,ut(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ns(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Hd(e,t,r,i,n);case 3:e:{if(dv(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Mh(e,t),Go(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=vr(Error(P(423)),t),t=Fd(e,t,r,n,i);break e}else if(r!==i){i=vr(Error(P(424)),t),t=Fd(e,t,r,n,i);break e}else for(Ye=an(t.stateNode.containerInfo.firstChild),qe=t,oe=!0,dt=null,n=Ah(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===i){t=At(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return Hh(t),e===null&&zs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Es(r,i)?l=null:o!==null&&Es(r,o)&&(t.flags|=32),cv(e,t),Me(e,t,l,n),t.child;case 6:return e===null&&zs(t),null;case 13:return fv(e,t,n);case 4:return Ju(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Dd(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,K(Vo,r._currentValue),r._currentValue=l,o!==null)if(vt(o.value,l)){if(o.children===i.children&&!Be.current){t=At(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Mt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ls(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(P(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ls(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ar(t,n),i=ot(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),Ad(e,t,r,i,n);case 15:return sv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Co(e,t),t.tag=1,We(r)?(e=!0,Bo(t)):e=!1,ar(t,n),Nh(t,r,i),Ms(t,r,i,n),Ds(null,t,r,!0,e,n);case 19:return pv(e,t,n);case 22:return uv(e,t,n)}throw Error(P(156,t.tag))};function bv(e,t){return th(e,t)}function L0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new L0(e,t,n,r)}function hc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function R0(e){if(typeof e=="function")return hc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lu)return 11;if(e===Ru)return 14}return 2}function dn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Eo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")hc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Vn:return jn(n.children,i,o,t);case zu:l=8,i|=8;break;case os:return e=rt(12,n,t,i|2),e.elementType=os,e.lanes=o,e;case ls:return e=rt(13,n,t,i),e.elementType=ls,e.lanes=o,e;case as:return e=rt(19,n,t,i),e.elementType=as,e.lanes=o,e;case Dp:return Tl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ip:l=10;break e;case Np:l=9;break e;case Lu:l=11;break e;case Ru:l=14;break e;case qt:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=rt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function jn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Tl(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Dp,e.lanes=n,e.stateNode={isHidden:!1},e}function Ea(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Pa(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function M0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sa(0),this.expirationTimes=sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vc(e,t,n,r,i,o,l,a,s){return e=new M0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=rt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(o),e}function I0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tv(e){if(!e)return hn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(We(n))return bh(e,n,t)}return t}function jv(e,t,n,r,i,o,l,a,s){return e=vc(n,r,!0,e,i,o,l,a,s),e.context=Tv(null),n=e.current,r=Ie(),i=cn(n),o=Mt(r,i),o.callback=t??null,sn(n,o,i),e.current.lanes=i,Pi(e,i,r),Ue(e,r),e}function jl(e,t,n,r){var i=t.current,o=Ie(),l=cn(i);return n=Tv(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(i,t,l),e!==null&&(pt(e,i,l,o),xo(e,i,l)),l}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mc(e,t){Kd(e,t),(e=e.alternate)&&Kd(e,t)}function N0(){return null}var zv=typeof reportError=="function"?reportError:function(e){console.error(e)};function gc(e){this._internalRoot=e}zl.prototype.render=gc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));jl(e,t,null,null)};zl.prototype.unmount=gc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){jl(null,e,null,null)}),t[Nt]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=sh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&ch(e)}};function yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zd(){}function D0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=tl(l);o.call(u)}}var l=jv(t,r,e,0,null,!1,!1,"",Zd);return e._reactRootContainer=l,e[Nt]=l.current,hi(e.nodeType===8?e.parentNode:e),Dn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=tl(s);a.call(u)}}var s=vc(e,0,!1,null,null,!1,!1,"",Zd);return e._reactRootContainer=s,e[Nt]=s.current,hi(e.nodeType===8?e.parentNode:e),Dn(function(){jl(t,s,n,r)}),s}function Rl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=tl(l);a.call(s)}}jl(t,l,e,i)}else l=D0(n,t,e,i,r);return tl(l)}lh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wr(t.pendingLanes);n!==0&&(Nu(t,n|1),Ue(t,ve()),!(V&6)&&(mr=ve()+500,gn()))}break;case 13:Dn(function(){var r=Dt(e,1);if(r!==null){var i=Ie();pt(r,e,1,i)}}),mc(e,1)}};Du=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Ie();pt(t,e,134217728,n)}mc(e,134217728)}};ah=function(e){if(e.tag===13){var t=cn(e),n=Dt(e,t);if(n!==null){var r=Ie();pt(n,e,t,r)}mc(e,t)}};sh=function(){return X};uh=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};gs=function(e,t,n){switch(t){case"input":if(cs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Cl(r);if(!i)throw Error(P(90));Hp(r),cs(r,i)}}}break;case"textarea":Bp(e,n);break;case"select":t=n.value,t!=null&&rr(e,!!n.multiple,t,!1)}};qp=dc;Xp=Dn;var A0={usingClientEntryPoint:!1,Events:[Ti,qn,Cl,Gp,Yp,dc]},Dr={findFiberByHostInstance:On,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},H0={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jp(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||N0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{Sl=io.inject(H0),kt=io}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(t))throw Error(P(200));return I0(e,t,null,n)};Ke.createRoot=function(e,t){if(!yc(e))throw Error(P(299));var n=!1,r="",i=zv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vc(e,1,!1,null,null,n,!1,r,i),e[Nt]=t.current,hi(e.nodeType===8?e.parentNode:e),new gc(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Jp(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return Dn(e)};Ke.hydrate=function(e,t,n){if(!Ll(t))throw Error(P(200));return Rl(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!yc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=zv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=jv(t,null,e,1,n??null,i,!1,o,l),e[Nt]=t.current,hi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zl(t)};Ke.render=function(e,t,n){if(!Ll(t))throw Error(P(200));return Rl(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(P(40));return e._reactRootContainer?(Dn(function(){Rl(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};Ke.unstable_batchedUpdates=dc;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ll(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Rl(e,t,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";function Lv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv)}catch(e){console.error(e)}}Lv(),jp.exports=Ke;var Rv=jp.exports,Jd=Rv;rs.createRoot=Jd.createRoot,rs.hydrateRoot=Jd.hydrateRoot;var Te=function(){return Te=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Te.apply(this,arguments)};function _i(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var te="-ms-",ri="-moz-",q="-webkit-",Mv="comm",Ml="rule",wc="decl",F0="@import",Iv="@keyframes",B0="@layer",W0=Math.abs,Sc=String.fromCharCode,Xs=Object.assign;function U0(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function Nv(e){return e.trim()}function jt(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function Po(e,t){return e.indexOf(t)}function xe(e,t){return e.charCodeAt(t)|0}function gr(e,t,n){return e.slice(t,n)}function yt(e){return e.length}function Dv(e){return e.length}function Vr(e,t){return t.push(e),e}function V0(e,t){return e.map(t).join("")}function ef(e,t){return e.filter(function(n){return!jt(n,t)})}var Il=1,yr=1,Av=0,at=0,me=0,Er="";function Nl(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Il,column:yr,length:l,return:"",siblings:a}}function Yt(e,t){return Xs(Nl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Bn(e){for(;e.root;)e=Yt(e.root,{children:[e]});Vr(e,e.siblings)}function Q0(){return me}function G0(){return me=at>0?xe(Er,--at):0,yr--,me===10&&(yr=1,Il--),me}function ht(){return me=at<Av?xe(Er,at++):0,yr++,me===10&&(yr=1,Il++),me}function zn(){return xe(Er,at)}function bo(){return at}function Dl(e,t){return gr(Er,e,t)}function Ks(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y0(e){return Il=yr=1,Av=yt(Er=e),at=0,[]}function q0(e){return Er="",e}function ba(e){return Nv(Dl(at-1,Zs(e===91?e+2:e===40?e+1:e)))}function X0(e){for(;(me=zn())&&me<33;)ht();return Ks(e)>2||Ks(me)>3?"":" "}function K0(e,t){for(;--t&&ht()&&!(me<48||me>102||me>57&&me<65||me>70&&me<97););return Dl(e,bo()+(t<6&&zn()==32&&ht()==32))}function Zs(e){for(;ht();)switch(me){case e:return at;case 34:case 39:e!==34&&e!==39&&Zs(me);break;case 40:e===41&&Zs(e);break;case 92:ht();break}return at}function Z0(e,t){for(;ht()&&e+me!==47+10;)if(e+me===42+42&&zn()===47)break;return"/*"+Dl(t,at-1)+"*"+Sc(e===47?e:ht())}function J0(e){for(;!Ks(zn());)ht();return Dl(e,at)}function ew(e){return q0(To("",null,null,null,[""],e=Y0(e),0,[0],e))}function To(e,t,n,r,i,o,l,a,s){for(var u=0,h=0,f=l,m=0,w=0,x=0,y=1,E=1,p=1,c=0,v="",g=i,_=o,k=r,C=v;E;)switch(x=c,c=ht()){case 40:if(x!=108&&xe(C,f-1)==58){Po(C+=H(ba(c),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:C+=ba(c);break;case 9:case 10:case 13:case 32:C+=X0(x);break;case 92:C+=K0(bo()-1,7);continue;case 47:switch(zn()){case 42:case 47:Vr(tw(Z0(ht(),bo()),t,n,s),s);break;default:C+="/"}break;case 123*y:a[u++]=yt(C)*p;case 125*y:case 59:case 0:switch(c){case 0:case 125:E=0;case 59+h:p==-1&&(C=H(C,/\f/g,"")),w>0&&yt(C)-f&&Vr(w>32?nf(C+";",r,n,f-1,s):nf(H(C," ","")+";",r,n,f-2,s),s);break;case 59:C+=";";default:if(Vr(k=tf(C,t,n,u,h,i,a,v,g=[],_=[],f,o),o),c===123)if(h===0)To(C,t,k,k,g,o,f,a,_);else switch(m===99&&xe(C,3)===110?100:m){case 100:case 108:case 109:case 115:To(e,k,k,r&&Vr(tf(e,k,k,0,0,i,a,v,i,g=[],f,_),_),i,_,f,a,r?g:_);break;default:To(C,k,k,k,[""],_,0,a,_)}}u=h=w=0,y=p=1,v=C="",f=l;break;case 58:f=1+yt(C),w=x;default:if(y<1){if(c==123)--y;else if(c==125&&y++==0&&G0()==125)continue}switch(C+=Sc(c),c*y){case 38:p=h>0?1:(C+="\f",-1);break;case 44:a[u++]=(yt(C)-1)*p,p=1;break;case 64:zn()===45&&(C+=ba(ht())),m=zn(),h=f=yt(v=C+=J0(bo())),c++;break;case 45:x===45&&yt(C)==2&&(y=0)}}return o}function tf(e,t,n,r,i,o,l,a,s,u,h,f){for(var m=i-1,w=i===0?o:[""],x=Dv(w),y=0,E=0,p=0;y<r;++y)for(var c=0,v=gr(e,m+1,m=W0(E=l[y])),g=e;c<x;++c)(g=Nv(E>0?w[c]+" "+v:H(v,/&\f/g,w[c])))&&(s[p++]=g);return Nl(e,t,n,i===0?Ml:a,s,u,h,f)}function tw(e,t,n,r){return Nl(e,t,n,Mv,Sc(Q0()),gr(e,2,-2),0,r)}function nf(e,t,n,r,i){return Nl(e,t,n,wc,gr(e,0,r),gr(e,r+1,-1),r,i)}function Hv(e,t,n){switch(U0(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 4789:return ri+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+ri+e+te+e+e;case 5936:switch(xe(e,t+11)){case 114:return q+e+te+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+te+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+te+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return q+e+te+e+e;case 6165:return q+e+te+"flex-"+e+e;case 5187:return q+e+H(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+te+"flex-$1$2")+e;case 5443:return q+e+te+"flex-item-"+H(e,/flex-|-self/g,"")+(jt(e,/flex-|baseline/)?"":te+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return q+e+te+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return q+e+te+H(e,"shrink","negative")+e;case 5292:return q+e+te+H(e,"basis","preferred-size")+e;case 6060:return q+"box-"+H(e,"-grow","")+q+e+te+H(e,"grow","positive")+e;case 4554:return q+H(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4200:if(!jt(e,/flex-|baseline/))return te+"grid-column-align"+gr(e,t)+e;break;case 2592:case 3360:return te+H(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,jt(r.props,/grid-\w+-end/)})?~Po(e+(n=n[t].value),"span")?e:te+H(e,"-start","")+e+te+"grid-row-span:"+(~Po(n,"span")?jt(n,/\d+/):+jt(n,/\d+/)-+jt(e,/\d+/))+";":te+H(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return jt(r.props,/grid-\w+-start/)})?e:te+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yt(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+ri+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Po(e,"stretch")?Hv(H(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return te+i+":"+o+u+(l?te+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(xe(e,t+6)===121)return H(e,":",":"+q)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+q+(xe(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+te+"$2box$3")+e;case 100:return H(e,":",":"+te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function nl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function nw(e,t,n,r){switch(e.type){case B0:if(e.children.length)break;case F0:case wc:return e.return=e.return||e.value;case Mv:return"";case Iv:return e.return=e.value+"{"+nl(e.children,r)+"}";case Ml:if(!yt(e.value=e.props.join(",")))return""}return yt(n=nl(e.children,r))?e.return=e.value+"{"+n+"}":""}function rw(e){var t=Dv(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function iw(e){return function(t){t.root||(t=t.return)&&e(t)}}function ow(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case wc:e.return=Hv(e.value,e.length,n);return;case Iv:return nl([Yt(e,{value:H(e.value,"@","@"+q)})],r);case Ml:if(e.length)return V0(n=e.props,function(i){switch(jt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bn(Yt(e,{props:[H(i,/:(read-\w+)/,":"+ri+"$1")]})),Bn(Yt(e,{props:[i]})),Xs(e,{props:ef(n,r)});break;case"::placeholder":Bn(Yt(e,{props:[H(i,/:(plac\w+)/,":"+q+"input-$1")]})),Bn(Yt(e,{props:[H(i,/:(plac\w+)/,":"+ri+"$1")]})),Bn(Yt(e,{props:[H(i,/:(plac\w+)/,te+"input-$1")]})),Bn(Yt(e,{props:[i]})),Xs(e,{props:ef(n,r)});break}return""})}}var lw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",xc=typeof window<"u"&&"HTMLElement"in window,aw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),sw={},kc=Object.freeze([]),Sr=Object.freeze({});function Fv(e,t,n){return n===void 0&&(n=Sr),e.theme!==n.theme&&e.theme||t||n.theme}var Bv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),uw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cw=/(^-|-$)/g;function rf(e){return e.replace(uw,"-").replace(cw,"")}var dw=/(a)(d)/gi,of=function(e){return String.fromCharCode(e+(e>25?39:97))};function Js(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=of(t%52)+n;return(of(t%52)+n).replace(dw,"$1-$2")}var Ta,nr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Wv=function(e){return nr(5381,e)};function Uv(e){return Js(Wv(e)>>>0)}function fw(e){return e.displayName||e.name||"Component"}function ja(e){return typeof e=="string"&&!0}var Vv=typeof Symbol=="function"&&Symbol.for,Qv=Vv?Symbol.for("react.memo"):60115,pw=Vv?Symbol.for("react.forward_ref"):60112,hw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Gv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mw=((Ta={})[pw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ta[Qv]=Gv,Ta);function lf(e){return("type"in(t=e)&&t.type.$$typeof)===Qv?Gv:"$$typeof"in e?mw[e.$$typeof]:hw;var t}var gw=Object.defineProperty,yw=Object.getOwnPropertyNames,af=Object.getOwnPropertySymbols,ww=Object.getOwnPropertyDescriptor,Sw=Object.getPrototypeOf,sf=Object.prototype;function Yv(e,t,n){if(typeof t!="string"){if(sf){var r=Sw(t);r&&r!==sf&&Yv(e,r,n)}var i=yw(t);af&&(i=i.concat(af(t)));for(var o=lf(e),l=lf(t),a=0;a<i.length;++a){var s=i[a];if(!(s in vw||n&&n[s]||l&&s in l||o&&s in o)){var u=ww(t,s);try{gw(e,s,u)}catch{}}}}return e}function xr(e){return typeof e=="function"}function _c(e){return typeof e=="object"&&"styledComponentId"in e}function Pn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ci(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function tu(e,t,n){if(n===void 0&&(n=!1),!n&&!Ci(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=tu(e[r],t[r]);else if(Ci(t))for(var r in t)e[r]=tu(e[r],t[r]);return e}function Cc(e,t){Object.defineProperty(e,"toString",{value:t})}function zi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var xw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw zi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),jo=new Map,rl=new Map,za=1,oo=function(e){if(jo.has(e))return jo.get(e);for(;rl.has(za);)za++;var t=za++;return jo.set(e,t),rl.set(t,e),t},kw=function(e,t){jo.set(e,t),rl.set(t,e)},_w="style[".concat(wr,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),Cw=new RegExp("^".concat(wr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ow=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},$w=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(Cw);if(s){var u=0|parseInt(s[1],10),h=s[2];u!==0&&(kw(h,u),Ow(e,h,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Ew(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){return Array.from(a.querySelectorAll("style[".concat(wr,"]"))).at(-1)}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(wr,"active"),r.setAttribute("data-styled-version","6.0.1");var l=Ew();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Pw=function(){function e(t){this.element=qv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw zi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),bw=function(){function e(t){this.element=qv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Tw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),uf=xc,jw={isServer:!xc,useCSSOMInjection:!aw},il=function(){function e(t,n,r){t===void 0&&(t=Sr),n===void 0&&(n={});var i=this;this.options=Te(Te({},jw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&xc&&uf&&(uf=!1,function(o){for(var l=document.querySelectorAll(_w),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(wr)!=="active"&&($w(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Cc(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",u=function(f){var m=function(p){return rl.get(p)}(f);if(m===void 0)return"continue";var w=o.names.get(m),x=l.getGroup(f);if(w===void 0||x.length===0)return"continue";var y="".concat(wr,".g").concat(f,'[id="').concat(m,'"]'),E="";w!==void 0&&w.forEach(function(p){p.length>0&&(E+="".concat(p,","))}),s+="".concat(x).concat(y,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},h=0;h<a;h++)u(h);return s}(i)})}return e.registerId=function(t){return oo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Te(Te({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Tw(i):r?new Pw(i):new bw(i)}(this.options),new xw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(oo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(oo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(oo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),zw=/&/g,Lw=/^\s*\/\/.*$/gm;function Xv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Xv(n.children,t)),n})}function Rw(e){var t,n,r,i=e===void 0?Sr:e,o=i.options,l=o===void 0?Sr:o,a=i.plugins,s=a===void 0?kc:a,u=function(m,w,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):m},h=s.slice();h.push(function(m){m.type===Ml&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(zw,n).replace(r,u))}),l.prefix&&h.push(ow),h.push(nw);var f=function(m,w,x,y){w===void 0&&(w=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var E=m.replace(Lw,""),p=ew(x||w?"".concat(x," ").concat(w," { ").concat(E," }"):E);l.namespace&&(p=Xv(p,l.namespace));var c=[];return nl(p,rw(h.concat(iw(function(v){return c.push(v)})))),c};return f.hash=s.length?s.reduce(function(m,w){return w.name||zi(15),nr(m,w.name)},5381).toString():"",f}var Mw=new il,nu=Rw(),Kv=St.createContext({shouldForwardProp:void 0,styleSheet:Mw,stylis:nu});Kv.Consumer;St.createContext(void 0);function ru(){return Z.useContext(Kv)}var Iw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=nu);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Cc(this,function(){throw zi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=nu),this.name+t.hash},e}(),Nw=function(e){return e>="A"&&e<="Z"};function cf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Nw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Zv=function(e){return e==null||e===!1||e===""},Jv=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Zv(o)&&(Array.isArray(o)&&o.isCss||xr(o)?r.push("".concat(cf(i),":"),o,";"):Ci(o)?r.push.apply(r,_i(_i(["".concat(i," {")],Jv(o),!1),["}"],!1)):r.push("".concat(cf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in lw||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function fn(e,t,n,r){if(Zv(e))return[];if(_c(e))return[".".concat(e.styledComponentId)];if(xr(e)){if(!xr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return fn(i,t,n,r)}var o;return e instanceof Iw?n?(e.inject(n,r),[e.getName(r)]):[e]:Ci(e)?Jv(e):Array.isArray(e)?e.flatMap(function(l){return fn(l,t,n,r)}):[e.toString()]}function em(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xr(n)&&!_c(n))return!1}return!0}var Dw=Wv("6.0.1"),Aw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&em(t),this.componentId=n,this.baseHash=nr(Dw,n),this.baseStyle=r,il.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Pn(i,this.staticRulesId);else{var o=eu(fn(this.rules,t,n,r)),l=Js(nr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Pn(i,l),this.staticRulesId=l}else{for(var s=nr(this.baseHash,r.hash),u="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")u+=f;else if(f){var m=eu(fn(f,t,n,r));s=nr(s,m),u+=m}}if(u){var w=Js(s>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),i=Pn(i,w)}}return i},e}(),Oc=St.createContext(void 0);Oc.Consumer;var La={};function Hw(e,t,n){var r=_c(e),i=e,o=!ja(e),l=t.attrs,a=l===void 0?kc:l,s=t.componentId,u=s===void 0?function(g,_){var k=typeof g!="string"?"sc":rf(g);La[k]=(La[k]||0)+1;var C="".concat(k,"-").concat(Uv("6.0.1"+k+La[k]));return _?"".concat(_,"-").concat(C):C}(t.displayName,t.parentComponentId):s,h=t.displayName,f=h===void 0?function(g){return ja(g)?"styled.".concat(g):"Styled(".concat(fw(g),")")}(e):h,m=t.displayName&&t.componentId?"".concat(rf(t.displayName),"-").concat(t.componentId):t.componentId||u,w=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;x=function(g,_){return y(g,_)&&E(g,_)}}else x=y}var p=new Aw(n,m,r?i.componentStyle:void 0);p.isStatic&&a.length;function c(g,_){return function(k,C,O,b){var T=k.attrs,N=k.componentStyle,M=k.defaultProps,R=k.foldedComponentIds,ze=k.styledComponentId,fe=k.target,Le=St.useContext(Oc),et=ru(),j=k.shouldForwardProp||et.shouldForwardProp,I=function(Bt,Qe,Pt){for(var Tr,yn=Te(Te({},Qe),{className:void 0,theme:Pt}),na=0;na<Bt.length;na+=1){var Fi=xr(Tr=Bt[na])?Tr(yn):Tr;for(var Wt in Fi)yn[Wt]=Wt==="className"?Pn(yn[Wt],Fi[Wt]):Wt==="style"?Te(Te({},yn[Wt]),Fi[Wt]):Fi[Wt]}return Qe.className&&(yn.className=Pn(yn.className,Qe.className)),yn}(T,C,Fv(C,Le,M)||Sr),D=I.as||fe,Y={};for(var U in I)I[U]===void 0||U[0]==="$"||U==="as"||U==="theme"||(U==="forwardedAs"?Y.as=I.forwardedAs:j&&!j(U,D)||(Y[U]=I[U]));var Et=function(Bt,Qe){var Pt=ru(),Tr=Bt.generateAndInjectStyles(Qe,Pt.styleSheet,Pt.stylis);return Tr}(N,I),_e=Pn(R,ze);return Et&&(_e+=" "+Et),I.className&&(_e+=" "+I.className),Y[ja(D)&&!Bv.has(D)?"class":"className"]=_e,Y.ref=O,Z.createElement(D,Y)}(v,g,_)}c.displayName=f;var v=St.forwardRef(c);return v.attrs=w,v.componentStyle=p,v.displayName=f,v.shouldForwardProp=x,v.foldedComponentIds=r?Pn(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=m,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(_){for(var k=[],C=1;C<arguments.length;C++)k[C-1]=arguments[C];for(var O=0,b=k;O<b.length;O++)tu(_,b[O],!0);return _}({},i.defaultProps,g):g}}),Cc(v,function(){return".".concat(v.styledComponentId)}),o&&Yv(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function df(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ff=function(e){return Object.assign(e,{isCss:!0})};function Je(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(xr(e)||Ci(e)){var r=e;return ff(fn(df(kc,_i([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?fn(i):ff(fn(df(i,t)))}function iu(e,t,n){if(n===void 0&&(n=Sr),!t)throw zi(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Je.apply(void 0,_i([i],o,!1)))};return r.attrs=function(i){return iu(e,t,Te(Te({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return iu(e,t,Te(Te({},n),i))},r}var tm=function(e){return iu(Hw,e)},S=tm;Bv.forEach(function(e){S[e]=tm(e)});var Fw=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=em(t),il.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(eu(fn(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&il.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Bw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Je.apply(void 0,_i([e],t,!1)),i="sc-global-".concat(Uv(JSON.stringify(r))),o=new Fw(r,i),l=function(s){var u=ru(),h=St.useContext(Oc),f=St.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(f,s,u.styleSheet,h,u.stylis),(St.useInsertionEffect||St.useLayoutEffect)(function(){if(!u.styleSheet.server)return a(f,s,u.styleSheet,h,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,s,u.styleSheet,h,u.stylis]),null};function a(s,u,h,f,m){if(o.isStatic)o.renderStyles(s,sw,h,m);else{var w=Te(Te({},u),{theme:Fv(u,f,l.defaultProps)});o.renderStyles(s,w,h,m)}}return St.memo(l)}const $="1400px",Q=Je`
  margin: 0;
  padding: 0;
`,J={blueColor:"#366eff",lightBlackColor:"#16202C",blackColor:"#000000",lightGrayColor:"#1A202C",darkGrayColor:"#0b132a",whiteColor:"#ffffff",transparentWhiteColor:"#ffffff80",grayColor:"#fcfcfc",redColor:"#ff0000",lightGreenColor:"#3cc1b3",greenColor:"#20F1C0",darkGreenColor:"#00BAA4",darkColor:"#1C2938",deepColor:"#141E29"},Ww=S.button`
  ${Q};
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
`,nm=Je`
  background-repeat: no-repeat;
  background-position: center bottom;
`,Al=Je`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
`,Ct=Je`
  background-repeat: no-repeat;
  background-size: contain;
`,Pr=Je`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`,G=Je`
  font-family: Gramatika, sans-serif;
`,$c=Je`
  font-family: Plus_Jakarta_Sans, sans-serif;
`,Ec=Je`
  margin-bottom: 2vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: ${$}) {
    flex-direction: column;
    align-items: center;
  }
`,rm=Je`
  position: absolute;
  background-repeat: no-repeat;
  z-index: 2;

  @media (max-width: ${$}) {
    width: 45vw;
    background-size: auto 100%;
    background-position: center;
  }
`,Hl=Je`
  color: ${J.whiteColor};
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
  ${Q};
  color: ${J.whiteColor};
  ${G};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${$}) {
    font-size: calc(25vw / 5.08);
  }
`,Ft=()=>{const[e,t]=Z.useState(null);return Z.useEffect(()=>{const n=()=>{const r=window.innerWidth;t(r<=1400)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e};function Ve({className:e,children:t,onClick:n,type:r}){return d.jsx(Ww,{type:r,className:e,onClick:n,children:t})}const{greenColor:im,lightGreenColor:Uw,whiteColor:om}=J,lo={title:"Accept Bitcoin Payments",text:"Send, Store, Exchange and Accept Cryptocurrency.",button:"Open Account"},Vw=S.section`
  ${Al};
  width: 100%;
  height: auto;
  min-height: 63.47vw;
  background-image: url("/images/main-screen/screen-L.svg");

  @media (max-width: ${$}) {
    width: 100vw;
    min-height: 209.25vw;
    background-image: url("/images/main-screen/screen-S.svg");
  }
`,Qw=S.div`
  max-width: 50.76vw;
  padding: 17.47vw 0 0 4.28vw;
  width: 50%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: ${$}) {
    height: 200vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 133.05vw 0 10vw 0;
    min-width: 85vw;
  }
`,Gw=S.p`
  ${Q};
  margin: 0 0 1.9vw;
  color: rgba(255, 255, 255, 0.5);
  ${G};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
`,Yw=S.h1`
  ${Q};
  color: ${om};
  font-size: 3.89vw;
  ${G};
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: ${$}) {
    font-size: 9.84vw;
  }
`,qw=S.p`
  ${Q};
  margin: 1.46vw 0 5.9vw;
  ${G};
  font-size: calc(25vw / 14.4);
  color: ${im};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${$}) {
    margin: 0;
    font-size: calc(25vw / 5.08);
  }
`,Xw=S(Ve)`
  padding: calc(20vw / 14.4);
  background: linear-gradient(
    133deg,
    ${im} 0%,
    ${Uw} 100%
  );
  @media (max-width: ${$}) {
    padding: calc(12vw / 5.08);
  }
`,Kw=S.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`,Zw=S.span`
  ${Q};
  margin-right: calc(20vw / 14.4);
  color: ${om};
  font-size: 1.11vw;
  ${G};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${$}) {
    margin-right: calc(12vw / 5.08);
    font-size: 3.15vw;
  }
`,Jw=S.div`
  ${Ct};
  width: 1.18vw;
  height: 1.04vw;
  background-image: url("/images/common/play-icon.svg");

  @media (max-width: ${$}) {
    width: 3.35vw;
    height: 2.95vw;
  }
`,e1=()=>{const e=Ft(),t=()=>{console.log("Press button open account")},n=d.jsxs(Kw,{children:[d.jsx(Zw,{children:lo.button}),d.jsx(Jw,{})]});return d.jsx(d.Fragment,{children:d.jsx(Vw,{children:d.jsxs(Qw,{children:[!e&&d.jsx(Gw,{children:lo.text}),d.jsx(Yw,{children:lo.title}),d.jsx(qw,{children:lo.text}),d.jsx(Xw,{type:"button",children:n,onClick:t})]})})})},t1=S.div`
  ${Ct};
  width: 11.25vw;
  height: 2.63vw;
  background-image: url("/images/logo.svg");

  @media (max-width: ${$}) {
    width: 25vw;
    height: 5.06vw;
  }
`,lm=()=>d.jsx(t1,{}),n1=S.a`
  ${Q};
  color: ${e=>e.color};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`,ii=({href:e,target:t,rel:n,children:r,...i})=>d.jsx(n1,{href:e,target:t,rel:n,...i,children:r}),r1=S.div`
  display: flex;
  flex-direction: ${({$reverseOrder:e})=>"row"};
  justify-content: center;
  align-items: center;
`,Ar=S(ii)`
  margin: 0 0.69vw;

  @media (max-width: 1400px) {
    margin: 0 1.97vw;
  }
`,Hr=S.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: 1400px) {
    width: 6.61vw;
    height: 6.61vw;
  }
`,am=({type:e})=>{const t=e==="light",n=!t,r=d.jsx(Hr,{src:"/src/assets/images/telegram-light.svg",alt:"Telegram icon"}),i=d.jsx(Hr,{src:t?"/src/assets/images/twitter-light.svg":"/src/assets/images/twitter-dark.svg",alt:"Twitter icon"}),o=d.jsx(Hr,{src:t?"/src/assets/images/facebook-light.svg":"/src/assets/images/facebook-dark.svg",alt:"Facebook icon"}),l=d.jsx(Hr,{src:"/src/assets/images/instagram-dark.svg",alt:"Instagram icon"}),a=d.jsx(Hr,{src:"/src/assets/images/email-light.svg",alt:"Email icon"});return d.jsxs(r1,{$reverseOrder:n,children:[!t&&d.jsx(Ar,{color:"transparent",href:"https://example.com/instagram",target:"_blank",rel:"noopener noreferrer",children:l}),t&&d.jsx(Ar,{color:"transparent",href:"https://example.com/telegram",target:"_blank",rel:"noopener noreferrer",children:r}),d.jsx(Ar,{color:"transparent",href:"https://example.com/twitter",target:"_blank",rel:"noopener noreferrer",children:i}),d.jsx(Ar,{color:"transparent",href:"https://example.com/facebook",target:"_blank",rel:"noopener noreferrer",children:o}),t&&d.jsx(Ar,{color:"transparent",href:"https://example.com/email",target:"_blank",rel:"noopener noreferrer",children:a})]})};var pe={},bc={},Li={},Ri={},sm="Expected a function",pf=0/0,i1="[object Symbol]",o1=/^\s+|\s+$/g,l1=/^[-+]0x[0-9a-f]+$/i,a1=/^0b[01]+$/i,s1=/^0o[0-7]+$/i,u1=parseInt,c1=typeof en=="object"&&en&&en.Object===Object&&en,d1=typeof self=="object"&&self&&self.Object===Object&&self,f1=c1||d1||Function("return this")(),p1=Object.prototype,h1=p1.toString,v1=Math.max,m1=Math.min,Ra=function(){return f1.Date.now()};function g1(e,t,n){var r,i,o,l,a,s,u=0,h=!1,f=!1,m=!0;if(typeof e!="function")throw new TypeError(sm);t=hf(t)||0,ol(n)&&(h=!!n.leading,f="maxWait"in n,o=f?v1(hf(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m);function w(k){var C=r,O=i;return r=i=void 0,u=k,l=e.apply(O,C),l}function x(k){return u=k,a=setTimeout(p,t),h?w(k):l}function y(k){var C=k-s,O=k-u,b=t-C;return f?m1(b,o-O):b}function E(k){var C=k-s,O=k-u;return s===void 0||C>=t||C<0||f&&O>=o}function p(){var k=Ra();if(E(k))return c(k);a=setTimeout(p,y(k))}function c(k){return a=void 0,m&&r?w(k):(r=i=void 0,l)}function v(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function g(){return a===void 0?l:c(Ra())}function _(){var k=Ra(),C=E(k);if(r=arguments,i=this,s=k,C){if(a===void 0)return x(s);if(f)return a=setTimeout(p,t),w(s)}return a===void 0&&(a=setTimeout(p,t)),l}return _.cancel=v,_.flush=g,_}function y1(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(sm);return ol(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g1(e,t,{leading:r,maxWait:t,trailing:i})}function ol(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function w1(e){return!!e&&typeof e=="object"}function S1(e){return typeof e=="symbol"||w1(e)&&h1.call(e)==i1}function hf(e){if(typeof e=="number")return e;if(S1(e))return pf;if(ol(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ol(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(o1,"");var n=a1.test(e);return n||s1.test(e)?u1(e.slice(2),n?2:8):l1.test(e)?pf:+e}var x1=y1,Mi={};Object.defineProperty(Mi,"__esModule",{value:!0});Mi.addPassiveEventListener=function(t,n,r){var i=function(){var o=!1;try{var l=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,l)}catch{}return o}();t.addEventListener(n,r,i?{passive:!0}:!1)};Mi.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r)};Object.defineProperty(Ri,"__esModule",{value:!0});var k1=x1,_1=O1(k1),C1=Mi;function O1(e){return e&&e.__esModule?e:{default:e}}var $1=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,_1.default)(t,n)},ae={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=$1(function(i){ae.scrollHandler(t)},n);ae.scrollSpyContainers.push(t),(0,C1.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return ae.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=ae.scrollSpyContainers[ae.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(ae.currentPositionX(t),ae.currentPositionY(t))})},addStateHandler:function(t){ae.spySetState.push(t)},addSpyHandler:function(t,n){var r=ae.scrollSpyContainers[ae.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(ae.currentPositionX(n),ae.currentPositionY(n))},updateStates:function(){ae.spySetState.forEach(function(t){return t()})},unmount:function(t,n){ae.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),ae.spySetState&&ae.spySetState.length&&ae.spySetState.indexOf(t)>-1&&ae.spySetState.splice(ae.spySetState.indexOf(t),1),document.removeEventListener("scroll",ae.scrollHandler)},update:function(){return ae.scrollSpyContainers.forEach(function(t){return ae.scrollHandler(t)})}};Ri.default=ae;var br={},Ii={};Object.defineProperty(Ii,"__esModule",{value:!0});var E1=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,i=r?"#"+r:"",o=window&&window.location,l=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",l):history.replaceState(history.state,"",l)},P1=function(){return window.location.hash.replace(/^#/,"")},b1=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},T1=function(t){return getComputedStyle(t).position!=="static"},Ma=function(t,n){for(var r=t.offsetTop,i=t.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},j1=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(T1(t)){if(n.offsetParent!==t){var i=function(h){return h===t||h===document},o=Ma(n,i),l=o.offsetTop,a=o.offsetParent;if(a!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return l}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var s=function(h){return h===document};return Ma(n,s).offsetTop-Ma(t,s).offsetTop};Ii.default={updateHash:E1,getHash:P1,filterElementInContainer:b1,scrollOffset:j1};var Fl={},Tc={};Object.defineProperty(Tc,"__esModule",{value:!0});Tc.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var jc={};Object.defineProperty(jc,"__esModule",{value:!0});var z1=Mi,L1=["mousedown","mousewheel","touchmove","keydown"];jc.default={subscribe:function(t){return typeof document<"u"&&L1.forEach(function(n){return(0,z1.addPassiveEventListener)(document,n,t)})}};var Ni={};Object.defineProperty(Ni,"__esModule",{value:!0});var ou={registered:{},scrollEvent:{register:function(t,n){ou.registered[t]=n},remove:function(t){ou.registered[t]=null}}};Ni.default=ou;Object.defineProperty(Fl,"__esModule",{value:!0});var R1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M1=Ii;Bl(M1);var I1=Tc,vf=Bl(I1),N1=jc,D1=Bl(N1),A1=Ni,wt=Bl(A1);function Bl(e){return e&&e.__esModule?e:{default:e}}var um=function(t){return vf.default[t.smooth]||vf.default.defaultEasing},H1=function(t){return typeof t=="function"?t:function(){return t}},F1=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},lu=function(){return F1()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),cm=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},dm=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},fm=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},B1=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},W1=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},U1=function e(t,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){wt.default.registered.end&&wt.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=e.bind(null,t,n);lu.call(window,o);return}wt.default.registered.end&&wt.default.registered.end(i.to,i.target,i.currentPosition)},zc=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},Di=function(t,n,r,i){if(n.data=n.data||cm(),window.clearTimeout(n.data.delayTimeout),D1.default.subscribe(function(){n.data.cancel=!0}),zc(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?dm(n):fm(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){wt.default.registered.end&&wt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=H1(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var o=um(n),l=U1.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){wt.default.registered.begin&&wt.default.registered.begin(n.data.to,n.data.target),lu.call(window,l)},n.delay);return}wt.default.registered.begin&&wt.default.registered.begin(n.data.to,n.data.target),lu.call(window,l)},Wl=function(t){return t=R1({},t),t.data=t.data||cm(),t.absolute=!0,t},V1=function(t){Di(0,Wl(t))},Q1=function(t,n){Di(t,Wl(n))},G1=function(t){t=Wl(t),zc(t),Di(t.horizontal?B1(t):W1(t),t)},Y1=function(t,n){n=Wl(n),zc(n);var r=n.horizontal?dm(n):fm(n);Di(t+r,n)};Fl.default={animateTopScroll:Di,getAnimationType:um,scrollToTop:V1,scrollToBottom:G1,scrollTo:Q1,scrollMore:Y1};Object.defineProperty(br,"__esModule",{value:!0});var q1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X1=Ii,K1=Lc(X1),Z1=Fl,J1=Lc(Z1),eS=Ni,ao=Lc(eS);function Lc(e){return e&&e.__esModule?e:{default:e}}var so={},mf=void 0;br.default={unmount:function(){so={}},register:function(t,n){so[t]=n},unregister:function(t){delete so[t]},get:function(t){return so[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return mf=t},getActiveLink:function(){return mf},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=q1({},n,{absolute:!1});var i=n.containerId,o=n.container,l=void 0;i?l=document.getElementById(i):o&&o.nodeType?l=o:l=document,n.absolute=!0;var a=n.horizontal,s=K1.default.scrollOffset(l,r,a)+(n.offset||0);if(!n.smooth){ao.default.registered.begin&&ao.default.registered.begin(t,r),l===document?n.horizontal?window.scrollTo(s,0):window.scrollTo(0,s):l.scrollTop=s,ao.default.registered.end&&ao.default.registered.end(t,r);return}J1.default.animateTopScroll(s,n,t,r)}};var pm={exports:{}},tS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nS=tS,rS=nS;function hm(){}function vm(){}vm.resetWarningCache=hm;var iS=function(){function e(r,i,o,l,a,s){if(s!==rS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:vm,resetWarningCache:hm};return n.PropTypes=n,n};pm.exports=iS();var Ul=pm.exports,Vl={};Object.defineProperty(Vl,"__esModule",{value:!0});var oS=Ii,Ia=lS(oS);function lS(e){return e&&e.__esModule?e:{default:e}}var aS={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,i=r.get(t);if(i&&(n||t!==r.getActiveLink())){var o=this.containers[t]||document;r.scrollTo(t,{container:o})}},getHash:function(){return Ia.default.getHash()},changeHash:function(t,n){this.isInitialized()&&Ia.default.getHash()!==t&&Ia.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Vl.default=aS;Object.defineProperty(Li,"__esModule",{value:!0});var uo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sS=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),uS=Z,gf=Ai(uS),cS=Ri,co=Ai(cS),dS=br,fS=Ai(dS),pS=Ul,re=Ai(pS),hS=Vl,Vt=Ai(hS);function Ai(e){return e&&e.__esModule?e:{default:e}}function vS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mS(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function gS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var yf={to:re.default.string.isRequired,containerId:re.default.string,container:re.default.object,activeClass:re.default.string,activeStyle:re.default.object,spy:re.default.bool,horizontal:re.default.bool,smooth:re.default.oneOfType([re.default.bool,re.default.string]),offset:re.default.number,delay:re.default.number,isDynamic:re.default.bool,onClick:re.default.func,duration:re.default.oneOfType([re.default.number,re.default.func]),absolute:re.default.bool,onSetActive:re.default.func,onSetInactive:re.default.func,ignoreCancelEvents:re.default.bool,hashSpy:re.default.bool,saveHashHistory:re.default.bool,spyThrottle:re.default.number};Li.default=function(e,t){var n=t||fS.default,r=function(o){gS(l,o);function l(a){vS(this,l);var s=mS(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,a));return i.call(s),s.state={active:!1},s}return sS(l,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,u=this.props.container;return s&&!u?document.getElementById(s):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();co.default.isMounted(s)||co.default.mount(s,this.props.spyThrottle),this.props.hashSpy&&(Vt.default.isMounted()||Vt.default.mount(n),Vt.default.mapContainer(this.props.to,s)),co.default.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){co.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var u={};this.state&&this.state.active?u=uo({},this.props.style,this.props.activeStyle):u=uo({},this.props.style);var h=uo({},this.props);for(var f in yf)h.hasOwnProperty(f)&&delete h[f];return h.className=s,h.style=u,h.onClick=this.handleClick,gf.default.createElement(e,h)}}]),l}(gf.default.PureComponent),i=function(){var l=this;this.scrollTo=function(a,s){n.scrollTo(a,uo({},l.state,s))},this.handleClick=function(a){l.props.onClick&&l.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),l.scrollTo(l.props.to,l.props)},this.spyHandler=function(a,s){var u=l.getScrollSpyContainer();if(!(Vt.default.isMounted()&&!Vt.default.isInitialized())){var h=l.props.horizontal,f=l.props.to,m=null,w=void 0,x=void 0;if(h){var y=0,E=0,p=0;if(u.getBoundingClientRect){var c=u.getBoundingClientRect();p=c.left}if(!m||l.props.isDynamic){if(m=n.get(f),!m)return;var v=m.getBoundingClientRect();y=v.left-p+a,E=y+v.width}var g=a-l.props.offset;w=g>=Math.floor(y)&&g<Math.floor(E),x=g<Math.floor(y)||g>=Math.floor(E)}else{var _=0,k=0,C=0;if(u.getBoundingClientRect){var O=u.getBoundingClientRect();C=O.top}if(!m||l.props.isDynamic){if(m=n.get(f),!m)return;var b=m.getBoundingClientRect();_=b.top-C+s,k=_+b.height}var T=s-l.props.offset;w=T>=Math.floor(_)&&T<Math.floor(k),x=T<Math.floor(_)||T>=Math.floor(k)}var N=n.getActiveLink();if(x){if(f===N&&n.setActiveLink(void 0),l.props.hashSpy&&Vt.default.getHash()===f){var M=l.props.saveHashHistory,R=M===void 0?!1:M;Vt.default.changeHash("",R)}l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive(f,m))}if(w&&(N!==f||l.state.active===!1)){n.setActiveLink(f);var ze=l.props.saveHashHistory,fe=ze===void 0?!1:ze;l.props.hashSpy&&Vt.default.changeHash(f,fe),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(f,m))}}}};return r.propTypes=yf,r.defaultProps={offset:0},r};Object.defineProperty(bc,"__esModule",{value:!0});var yS=Z,wf=mm(yS),wS=Li,SS=mm(wS);function mm(e){return e&&e.__esModule?e:{default:e}}function xS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Sf(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function kS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _S=function(e){kS(t,e);function t(){var n,r,i,o;xS(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return o=(r=(i=Sf(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.render=function(){return wf.default.createElement("a",i.props,i.props.children)},r),Sf(i,o)}return t}(wf.default.Component);bc.default=(0,SS.default)(_S);var Rc={};Object.defineProperty(Rc,"__esModule",{value:!0});var CS=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),OS=Z,xf=gm(OS),$S=Li,ES=gm($S);function gm(e){return e&&e.__esModule?e:{default:e}}function PS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bS(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function TS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var jS=function(e){TS(t,e);function t(){return PS(this,t),bS(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return CS(t,[{key:"render",value:function(){return xf.default.createElement("input",this.props,this.props.children)}}]),t}(xf.default.Component);Rc.default=(0,ES.default)(jS);var Mc={},Ql={};Object.defineProperty(Ql,"__esModule",{value:!0});var zS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},LS=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),RS=Z,kf=Gl(RS),MS=Rv;Gl(MS);var IS=br,_f=Gl(IS),NS=Ul,Cf=Gl(NS);function Gl(e){return e&&e.__esModule?e:{default:e}}function DS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function AS(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function HS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Ql.default=function(e){var t=function(n){HS(r,n);function r(i){DS(this,r);var o=AS(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return LS(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;_f.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){_f.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return kf.default.createElement(e,zS({},this.props,{parentBindings:this.childBindings}))}}]),r}(kf.default.Component);return t.propTypes={name:Cf.default.string,id:Cf.default.string},t};Object.defineProperty(Mc,"__esModule",{value:!0});var Of=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},FS=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),BS=Z,$f=Ic(BS),WS=Ql,US=Ic(WS),VS=Ul,Ef=Ic(VS);function Ic(e){return e&&e.__esModule?e:{default:e}}function QS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function GS(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function YS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ym=function(e){YS(t,e);function t(){return QS(this,t),GS(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return FS(t,[{key:"render",value:function(){var r=this,i=Of({},this.props);return i.parentBindings&&delete i.parentBindings,$f.default.createElement("div",Of({},i,{ref:function(l){r.props.parentBindings.domNode=l}}),this.props.children)}}]),t}($f.default.Component);ym.propTypes={name:Ef.default.string,id:Ef.default.string};Mc.default=(0,US.default)(ym);var Na=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pf=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function bf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Tf(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function jf(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var fo=Z,wn=Ri,Da=br,se=Ul,Qt=Vl,zf={to:se.string.isRequired,containerId:se.string,container:se.object,activeClass:se.string,spy:se.bool,smooth:se.oneOfType([se.bool,se.string]),offset:se.number,delay:se.number,isDynamic:se.bool,onClick:se.func,duration:se.oneOfType([se.number,se.func]),absolute:se.bool,onSetActive:se.func,onSetInactive:se.func,ignoreCancelEvents:se.bool,hashSpy:se.bool,spyThrottle:se.number},qS={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Da,i=function(l){jf(a,l);function a(s){bf(this,a);var u=Tf(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return o.call(u),u.state={active:!1},u}return Pf(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,h=this.props.container;return u?document.getElementById(u):h&&h.nodeType?h:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();wn.isMounted(u)||wn.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Qt.isMounted()||Qt.mount(r),Qt.mapContainer(this.props.to,u)),this.props.spy&&wn.addStateHandler(this.stateHandler),wn.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){wn.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var h=Na({},this.props);for(var f in zf)h.hasOwnProperty(f)&&delete h[f];return h.className=u,h.onClick=this.handleClick,fo.createElement(t,h)}}]),a}(fo.Component),o=function(){var a=this;this.scrollTo=function(s,u){r.scrollTo(s,Na({},a.state,u))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(s){var u=a.getScrollSpyContainer();if(!(Qt.isMounted()&&!Qt.isInitialized())){var h=a.props.to,f=null,m=0,w=0,x=0;if(u.getBoundingClientRect){var y=u.getBoundingClientRect();x=y.top}if(!f||a.props.isDynamic){if(f=r.get(h),!f)return;var E=f.getBoundingClientRect();m=E.top-x+s,w=m+E.height}var p=s-a.props.offset,c=p>=Math.floor(m)&&p<Math.floor(w),v=p<Math.floor(m)||p>=Math.floor(w),g=r.getActiveLink();if(v)return h===g&&r.setActiveLink(void 0),a.props.hashSpy&&Qt.getHash()===h&&Qt.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),wn.updateStates();if(c&&g!==h)return r.setActiveLink(h),a.props.hashSpy&&Qt.changeHash(h),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(h)),wn.updateStates()}}};return i.propTypes=zf,i.defaultProps={offset:0},i},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){jf(i,r);function i(o){bf(this,i);var l=Tf(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return l.childBindings={domNode:null},l}return Pf(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(l){this.props.name!==l.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Da.unregister(this.props.name)}},{key:"registerElems",value:function(l){Da.register(l,this.childBindings.domNode)}},{key:"render",value:function(){return fo.createElement(t,Na({},this.props,{parentBindings:this.childBindings}))}}]),i}(fo.Component);return n.propTypes={name:se.string,id:se.string},n}},XS=qS;Object.defineProperty(pe,"__esModule",{value:!0});pe.Helpers=pe.ScrollElement=pe.ScrollLink=pe.animateScroll=pe.scrollSpy=pe.Events=pe.scroller=Qr=pe.Element=pe.Button=bm=pe.Link=void 0;var KS=bc,wm=Ot(KS),ZS=Rc,Sm=Ot(ZS),JS=Mc,xm=Ot(JS),ex=br,km=Ot(ex),tx=Ni,_m=Ot(tx),nx=Ri,Cm=Ot(nx),rx=Fl,Om=Ot(rx),ix=Li,$m=Ot(ix),ox=Ql,Em=Ot(ox),lx=XS,Pm=Ot(lx);function Ot(e){return e&&e.__esModule?e:{default:e}}var bm=pe.Link=wm.default;pe.Button=Sm.default;var Qr=pe.Element=xm.default;pe.scroller=km.default;pe.Events=_m.default;pe.scrollSpy=Cm.default;pe.animateScroll=Om.default;pe.ScrollLink=$m.default;pe.ScrollElement=Em.default;pe.Helpers=Pm.default;pe.default={Link:wm.default,Button:Sm.default,Element:xm.default,scroller:km.default,Events:_m.default,scrollSpy:Cm.default,animateScroll:Om.default,ScrollLink:$m.default,ScrollElement:Em.default,Helpers:Pm.default};const Lf={signUp:"Register",signIn:"Log In"},ax=S.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 6.94vw;
  background-color: transparent;
  z-index: 10;
  border-bottom: 0.5px ${J.whiteColor} solid;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  @media (max-width: 1400px) {
    box-sizing: border-box;
    padding: 0 8.27vw;
    min-height: 25vw;
    justify-content: space-between;
  }
`,sx=S.ul`
  ${Q};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  width: 41.11vw;
  border-left: 1px solid rgba(255, 255, 255, 0.9);
  border-right: 1px solid rgba(255, 255, 255, 0.9);
`,ux=S.li`
  ${Q};
  ${$c};
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
    ${Q};
    display: inline-block;
    max-width: 7vw;
    color: rgba(255, 255, 255, 0.9);
  }
`,cx=S.div`
  ${Ct};
  width: 6.5vw;
  height: 3.77vw;
  background-image: url("/images/burger-icon.svg");
`,dx=S.span`
  color: ${J.whiteColor};
  ${$c};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.48px;
  text-decoration-line: underline;
`,fx=S.span`
  color: ${J.whiteColor};
  ${G};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.42px;
`,Rf=S.div`
  display: flex;
`,px=S(Ve)`
  padding: 0.5vw 2vw;
  background: linear-gradient(
    133deg,
    ${J.greenColor} 0%,
    ${J.lightGreenColor} 100%
  );
`,hx=S(lm)`
  border: 1px solid red;
`,vx=S(Ve)`
  background-color: transparent;
`,mx=({sections:e})=>{const t=Ft(),n=()=>{console.log("Press button burger menu")},r=()=>{console.log("Press button register")},i=()=>{console.log("Press button login")},o=d.jsx(cx,{}),l=d.jsx(Rf,{children:d.jsx(dx,{children:Lf.signUp})}),a=d.jsx(Rf,{children:d.jsx(fx,{children:Lf.signIn})});return t===null?null:d.jsxs(ax,{children:[d.jsx("p",{children:"test1"}),d.jsx(hx,{}),t&&d.jsx(Ve,{type:"button",children:o,onClick:n}),!t&&d.jsxs(d.Fragment,{children:[d.jsx(am,{type:"light"}),d.jsx("nav",{children:d.jsx(sx,{children:e.map(s=>d.jsx(ux,{children:d.jsx(bm,{to:s.id,spy:!0,smooth:!0,duration:500,children:s.title})},s.id))})}),d.jsxs("div",{children:[d.jsx(vx,{type:"button",children:l,onClick:r}),d.jsx(px,{type:"button",children:a,onClick:i})]})]})]})},{lightGrayColor:Tm}=J,gx=S.div`
  position: relative;
  z-index: 1;
  max-width: 19.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${$}) {
    max-width: 54.33vw;
  }
`,yx=S.h3`
  width: 130%;
  ${Q};
  color: ${Tm};
  text-align: center;
  ${G};
  font-size: calc(26vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.52px;

  @media (max-width: ${$}) {
    width: 100%;
    font-size: calc(26vw / 5.08);
    margin: 5vw 0 0 0;
  }
`,wx=S.p`
  ${Q};
  margin: 1.11vw 0 2.85vw;
  color: ${Tm};
  text-align: center;
  ${G};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;

  @media (max-width: ${$}) {
    font-size: calc(20vw / 5.08);
    margin: 0.7vw 0 4.72vw;
  }
`,Aa=({subtitle:e,text:t,svg:n})=>d.jsxs(gx,{children:[n,d.jsx(yx,{children:e}),d.jsx(wx,{children:t})]}),{whiteColor:jm}=J,Sx=S.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  border-bottom: none;
  align-self: start;
  max-width: ((1440vw - 50vw) / 4);

  @media (max-width: ${$}) {
    align-self: center;
    padding: 10.5vw 3.5vw;
    max-width: 80.3vw;
    border-bottom: 0.5px ${J.whiteColor} solid;
  }

  &:last-child {
    border: none;
  }
`,xx=S.div`
  width: 100%;
  min-height: 3.56vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${$}) {
    width: 100%;
  }
`,kx=S.h3`
  ${Q};
  color: ${jm};
  ${G};
  font-size: calc(26vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 0.96;
  text-align: left;

  @media (max-width: ${$}) {
    line-height: 0.83;
    font-size: calc(30vw / 5.08);
  }
`,_x=S.p`
  ${Q};
  margin: 2.5vw 0 0 0;
  color: ${jm};
  ${G};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  text-align: left;
  max-width: 19vw;

  @media (max-width: ${$}) {
    font-size: calc(25vw / 5.08);
    line-height: 1;
    max-width: 100%;
  }
`,Cx=({subtitle:e,text:t,svg:n})=>d.jsxs(Sx,{children:[d.jsxs(xx,{children:[n,d.jsx(kx,{children:e})]}),d.jsx(_x,{children:t})]}),Ox=S.div`
  ${Ct};
  height: 25.14vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url("/images/how-it-works/advantages/advantages-L.svg");

  @media (max-width: ${$}) {
    min-height: 212.58vw;
    background-image: url("/images/how-it-works/advantages/advantages-S.svg");
    flex-direction: column;
  }
`,$x=S.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${$}) {
    justify-content: center;
    flex-direction: column;
  }
`,Ex=S.div`
  ${Ct};
  width: 3.75vw;
  height: 3.75vw;
  margin-right: 1vw;
  background-image: url(${({$image:e})=>e});

  @media (max-width: ${$}) {
    margin-right: 5vw;
    width: 13.95vw;
    height: 13.95vw;
  }
`,Px=({advantages:e})=>d.jsx(Ox,{children:d.jsx($x,{children:e.map(t=>d.jsx(Cx,{svg:d.jsx(Ex,{$image:t.image}),subtitle:t.subtitle,text:t.text},t.index))})}),bx=S.h2`
  ${Q};
  text-align: center;
  font-size: calc(50vw / 14.4);
  ${G};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -1px;
  color: ${e=>e.color};

  @media (max-width: ${$}) {
    font-size: calc(50vw / 5.08);
    line-height: 1.2;
  }
`,$t=({children:e,...t})=>d.jsx(bx,{...t,children:e}),Tx=S.p`
  ${Q};
  text-align: center;
  font-size: calc(20vw / 14.05);
  ${G};
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.color};

  @media (max-width: ${$}) {
    ${$c};
    font-size: calc(18vw / 5.08);
    line-height: 1.5;
  }
`,Yl=({children:e,...t})=>d.jsx(Tx,{...t,children:e}),{darkGrayColor:Mf}=J,bt={title:"How it work",text:'"Brief description of how the app works"',stepOne:{subtitle:"Send invoice",text:"Merchant issues an invoice in their local currency"},stepTwo:{subtitle:"Payment",text:"The user pays in the currency in which it is convenient for him. We take care of all the difficulties with overpayments and underpayments."},stepThree:{subtitle:"Broadcast",text:"Conversion and withdrawal, the merchant at any time withdraws his funds to his wallet in the currency in which he is comfortable."},advantages:[{index:"1",subtitle:"EU Regulated",text:"is fully regulated underEstionian License.",image:"/src/assets/images/how-it-works/advantages/advantages-first-icon.svg"},{index:"2",subtitle:"All types of crypto",text:"Coins, StableCoins, Tokens are supported.",image:"/src/assets/images/how-it-works/advantages/advantages-second-icon.svg"},{index:"3",subtitle:"Major Blockchains",text:"Bitcoin, Ethereum, Solana, BinanceSmart Chain, Ripple, etc.",image:"/src/assets/images/how-it-works/advantages/advantages-third-icon.svg"},{index:"4",subtitle:"Free of Charge",text:"All outgoing transactions, transfers and payouts in crypto are free of charge.",image:"/src/assets/images/how-it-works/advantages/advantages-fourth-icon.svg"}]},jx=S.div`
  position: relative;
  margin: 0 auto 2vw;
  ${Al};
  width: 93.54vw;
  height: auto;
  background-image: url("/images/how-it-works/steps-L.svg");

  @media (max-width: ${$}) {
    padding-top: 16.7vw;
    width: 90.55vw;
    background-image: url("/images/how-it-works/steps-S.svg");
  }
`,zx=S(Yl)`
  margin: 0.7vw 0 1.71vw;

  @media (max-width: ${$}) {
    margin-bottom: 4.72vw;
  }
`,Lx=S.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;

  @media (max-width: ${$}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,If=S.div`
  position: relative;

  @media (max-width: ${$}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,Rx=S.div`
  ${rm};
  background-image: url("/images/how-it-works/left-line-L.svg");
  top: 4vw;
  left: 14.5vw;
  width: 20.83vw;
  height: 6.04vw;

  @media (max-width: ${$}) {
    top: 25vw;
    left: 7vw;
    height: calc(100% - 20.86vw + 15vw);
    background-image: url("/images/how-it-works/left-line-S.svg");
  }
`,Mx=S.div`
  ${rm};
  background-image: url("/images/how-it-works/right-line-L.svg");
  top: 4vw;
  right: -15vw;
  width: 19vw;
  height: 6.04vw;

  @media (max-width: ${$}) {
    top: 30vw;
    right: 3vw;
    height: calc(100% - 24.56vw + 15vw);
    background-image: url("/images/how-it-works/right-line-S.svg");
  }
`,Ix=S.div`
  ${Ec};
  margin-bottom: 2vw;
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("/images/how-it-works/send-invoice.svg");
  ${nm};
  background-size: 7.4vw 7.4vw;

  @media (max-width: ${$}) {
    margin-top: 2vw;
    width: 20.86vw;
    height: 20.86vw;
    background-image: url("/images/how-it-works/send-invoice.svg");
    ${Ct}
  }
`,Nx=S.div`
  ${Ec};
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("/images/how-it-works/payment.jpg");
  ${nm};
  background-size: 8.6vw 8.6vw;

  @media (max-width: ${$}) {
    margin-top: 4vw;
    width: 24.56vw;
    height: 24.56vw;
    background-image: url("/images/how-it-works/payment.jpg");
    ${Ct};
  }
}
`,Dx=S.div`
  ${Ec};
  top: 0;
  left: 0;
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("/images/how-it-works/brodcast.jpg");
  ${Ct};

  @media (max-width: ${$}) {
    margin: 4vw 0 4vw;
    width: 32.08vw;
    height: 32.08vw;
    background-image: url("/images/how-it-works/brodcast.jpg");
  }
`,Ax=()=>d.jsxs(d.Fragment,{children:[d.jsxs(jx,{children:[d.jsx($t,{color:Mf,children:bt.title}),d.jsx(zx,{color:Mf,children:bt.text}),d.jsxs(Lx,{children:[d.jsxs(If,{children:[d.jsx(Rx,{}),d.jsx(Aa,{svg:d.jsx(Ix,{}),subtitle:bt.stepOne.subtitle,text:bt.stepOne.text})]}),d.jsxs(If,{children:[d.jsx(Mx,{}),d.jsx(Aa,{svg:d.jsx(Nx,{}),subtitle:bt.stepTwo.subtitle,text:bt.stepTwo.text})]}),d.jsx(Aa,{svg:d.jsx(Dx,{}),subtitle:bt.stepThree.subtitle,text:bt.stepThree.text})]})]}),d.jsx(Px,{advantages:bt.advantages})]}),{darkColor:Hx,whiteColor:zm,darkGrayColor:Fx,lightGreenColor:Bx,greenColor:Wx}=J,au={title:"Mobile Wallet",text:"A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",button:"Download"},Ux=S.section`
  position: relative;
  background-color: ${Hx};
  min-height: 41.53vw;

  @media (max-width: ${$}) {
    background-color: ${Fx};
    box-sizing: border-box;
    min-height: 270.66vw;
    flex-direction: column;
  }
`,Vx=S.div`
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
  ${Pr};
  background-image: url("/images/products-and-service/mobile-wallet-L.svg");

  @media (max-width: ${$}) {
    box-sizing: border-box;
    padding: 0 9vw 4.14vw;
    background-image: url("/images/products-and-service/mobile-wallet-S.svg");
    justify-content: end;
    align-items: start;
  }
`,Qx=S.p`
  max-width: 37%;
  ${Pc};
  margin: 3.06vw 0 3.75vw;

  @media (max-width: ${$}) {
    max-width: 90%;
    margin: 8.82vw 0;
  }
`,Gx=S(Ve)`
  background: linear-gradient(
    133deg,
    ${Wx} 0%,
    ${Bx} 100%
  );
  border-radius: 0;
`,Yx=S.div`
  padding: 0.8vw 1.7vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${$}) {
    min-width: 33vw;
    min-height: 8.33vw;
  }
`,qx=S.span`
  margin-left: 2.29vw;
  color: ${zm};
  font-size: 1.11vw;
  ${G};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${$}) {
    margin-left: 6vw;
    font-size: 3.19vw;
  }
`,Xx=S.div`
  ${Ct};
  width: 0.97vw;
  height: 1.53vw;
  background-image: url("/images/products-and-service/download-icon.svg");

  @media (max-width: ${$}) {
    width: 2.39vw;
    height: 2.79vw;
  }
`,Kx=()=>{console.log("Press download button")},Zx=d.jsxs(Yx,{children:[d.jsx(Xx,{}),d.jsx(qx,{children:au.button})]}),Jx=()=>d.jsx(Ux,{children:d.jsxs(Vx,{children:[d.jsx($t,{color:zm,children:au.title}),d.jsx(Qx,{children:au.text}),d.jsx(Gx,{type:"button",children:Zx,onClick:Kx})]})}),{whiteColor:Lm,darkGrayColor:ek}=J,Ha={title:"Avaible Currencies",text:"A vast range of major coins, stablecoins and liquid tokens is available.",imagesContext:[{text:"Coins",image:"/src/assets/images/products-and-service/lineOne.svg"},{text:"Stablekoins",image:"/src/assets/images/products-and-service/lineTwo.svg"},{text:"Tokens",image:"/src/assets/images/products-and-service/lineThree.svg"}]},tk=S.section`
  ${Pr};
  background-position: center -9.72vw;
  min-height: calc(1116vw / 14.4 - 9.72vw);
  padding: 8.26vw 0 8.26vw 4.93vw;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-image: url("/images/products-and-service/avaible-currencies.svg");

  @media (max-width: ${$}) {
    padding: 22vw 0 20.27vw 4.93vw;
    min-height: 212.58vw;
    flex-direction: column;
    background-image: none;
    background-color: ${ek};
  }
`,nk=S.div`
  display: grid;
  grid-template-columns: 19vw 1fr;
  grid-template-rows: auto auto auto;
  gap: 5.2vw 1vw;

  @media (max-width: ${$}) {
    display: flex;
    flex-direction: column;
  }
`,rk=S.div`
  grid-column: 1;
  display: flex;
  align-items: center;

  @media (max-width: ${$}) {
    width: 52%;
    align-items: center;
  }
`,ik=S.div`
  grid-column: 2;
  display: flex;
  align-items: center;

  @media (max-width: ${$}) {
    align-items: end;
    justify-content: end;
  }
`,Nf=S.img`
  width: 74vw;
  height: auto;

  @media (max-width: ${$}) {
    padding-left: 3.5vw;
    width: 92vw;
  }
`,ok=S.p`
  ${Pc};
  max-width: 37%;
  margin: 2vw 0 6.18vw;

  @media (max-width: 1400px) {
    max-width: 90%;
    margin: 7.87vw 0 4.3vw;
  }
`,lk=S.p`
  ${Q};
  ${G};
  color: ${Lm};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.8px;
  margin: 0 1vw 0 0;

  @media (max-width: ${$}) {
    line-height: 1;
    font-size: calc(35vw / 5.8);
    letter-spacing: -0.7px;
    width: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.8);
    margin: 14.37vw 0 10vw;
  }
`,ak=()=>{const e=Ft();return d.jsxs(tk,{children:[d.jsx($t,{color:Lm,children:Ha.title}),d.jsx(ok,{children:Ha.text}),d.jsx(nk,{children:Ha.imagesContext.map((t,n)=>d.jsxs(Z.Fragment,{children:[d.jsx(rk,{children:d.jsx(lk,{children:t.text})}),d.jsx(ik,{children:e?d.jsx(Nf,{src:"/src/assets/images/products-and-service/line-S.svg",alt:t.text}):d.jsx(Nf,{src:t.image,alt:t.text})})]},n))})]})},{whiteColor:sk}=J,uk=S.h4`
  ${Q};
  text-align: center;
  font-size: calc(22vw / 14.05);
  ${G};
  font-weight: 500;
  line-height: 1.5;
  color: ${sk};

  @media (max-width: ${$}) {
    font-size: calc(22vw / 5.08);
  }
`,ck=({children:e,...t})=>d.jsx(uk,{...t,children:e}),{greenColor:dk}=J,fk=S.div`
  width: 82.25vw;

  @media (max-width: ${$}) {
    width: 82.41vw;
    margin-right: 7.66vw;
    height: 100%;
    display: flex;
  }
`,pk=S.div`
  margin-top: 2.57vw;
  padding: 0 0 0 6vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 82.25vw;
  ${Al};
  background-image: url("/images/products-and-service/item-L.svg");
  border-radius: 30px;

  @media (max-width: ${$}) {
    margin-top: 0;
    padding: 8.86vw 4.53vw;
    justify-content: start;
    flex-direction: column;
    width: 82.41vw;
    height: 100%;
    background-image: url("/images/products-and-service/item-S.svg");
  }
`,hk=S.p`
  ${Pc};
  margin: 6.74vw 0 2.57vw;

  @media (max-width: ${$}) {
    margin: 12.95vw 0 4.32vw;
  }
`,vk=S.div`
  width: 32vw;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: ${$}) {
    margin: 0 auto;
    width: 70vw;
    box-sizing: border-box;
  }
`,mk=S(Ve)`
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${dk};
  font-size: 1.74vw;
  ${G};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;

  @media (max-width: ${$}) {
    padding-right: 6vw;
    font-size: 4.91vw;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0.83vw;
    height: 1.04vw;
    background-image: url("/images/products-and-service/play.svg");
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 60%;
    transform: translateY(-60%);

    @media (max-width: ${$}) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`,gk=S.div`
  height: 20vw;
  width: 40vw;
  padding: 5.24vw 4vw;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  margin: auto;
  display: block;

  @media (max-width: ${$}) {
    margin: 0;
    padding: 6vw 0 0 0;
    height: 30vw;
    width: 70vw;
    object-position: center top;
  }
`,yk=S.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,Rm=({slide:e})=>{const t=Ft(),n=()=>{console.log("Button slide 1 clicked")},r=()=>{console.log("Button slide 2 clicked")},i=()=>{console.log("Button slide 3 clicked")},o=()=>{console.log("Button slide 4 clicked")},l=a=>{switch(a){case"1":n();break;case"2":r();break;case"3":i();break;case"4":o();break}};return d.jsx(fk,{children:d.jsxs(pk,{children:[t&&d.jsx(ck,{children:e.mainButton}),d.jsxs(vk,{children:[d.jsx(hk,{children:e.textContent}),d.jsx(mk,{type:"button",onClick:()=>l(e.id),children:e.button})]}),d.jsx(gk,{children:d.jsx(yk,{src:e.image,alt:"Image"})})]})})};var Mm={},Im={},ql={},Nm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Nm);var wk="Expected a function",Df=0/0,Sk="[object Symbol]",xk=/^\s+|\s+$/g,kk=/^[-+]0x[0-9a-f]+$/i,_k=/^0b[01]+$/i,Ck=/^0o[0-7]+$/i,Ok=parseInt,$k=typeof en=="object"&&en&&en.Object===Object&&en,Ek=typeof self=="object"&&self&&self.Object===Object&&self,Pk=$k||Ek||Function("return this")(),bk=Object.prototype,Tk=bk.toString,jk=Math.max,zk=Math.min,Fa=function(){return Pk.Date.now()};function Lk(e,t,n){var r,i,o,l,a,s,u=0,h=!1,f=!1,m=!0;if(typeof e!="function")throw new TypeError(wk);t=Af(t)||0,su(n)&&(h=!!n.leading,f="maxWait"in n,o=f?jk(Af(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m);function w(k){var C=r,O=i;return r=i=void 0,u=k,l=e.apply(O,C),l}function x(k){return u=k,a=setTimeout(p,t),h?w(k):l}function y(k){var C=k-s,O=k-u,b=t-C;return f?zk(b,o-O):b}function E(k){var C=k-s,O=k-u;return s===void 0||C>=t||C<0||f&&O>=o}function p(){var k=Fa();if(E(k))return c(k);a=setTimeout(p,y(k))}function c(k){return a=void 0,m&&r?w(k):(r=i=void 0,l)}function v(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function g(){return a===void 0?l:c(Fa())}function _(){var k=Fa(),C=E(k);if(r=arguments,i=this,s=k,C){if(a===void 0)return x(s);if(f)return a=setTimeout(p,t),w(s)}return a===void 0&&(a=setTimeout(p,t)),l}return _.cancel=v,_.flush=g,_}function su(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Rk(e){return!!e&&typeof e=="object"}function Mk(e){return typeof e=="symbol"||Rk(e)&&Tk.call(e)==Sk}function Af(e){if(typeof e=="number")return e;if(Mk(e))return Df;if(su(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=su(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(xk,"");var n=_k.test(e);return n||Ck.test(e)?Ok(e.slice(2),n?2:8):kk.test(e)?Df:+e}var Ik=Lk,Dm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Dm);var Xl=Dm.exports,z={};Object.defineProperty(z,"__esModule",{value:!0});z.checkSpecKeys=z.checkNavigable=z.changeSlide=z.canUseDOM=z.canGoNext=void 0;z.clamp=Am;z.swipeStart=z.swipeMove=z.swipeEnd=z.slidesOnRight=z.slidesOnLeft=z.slideHandler=z.siblingDirection=z.safePreventDefault=z.lazyStartIndex=z.lazySlidesOnRight=z.lazySlidesOnLeft=z.lazyEndIndex=z.keyHandler=z.initializedState=z.getWidth=z.getTrackLeft=z.getTrackCSS=z.getTrackAnimateCSS=z.getTotalSlides=z.getSwipeDirection=z.getSlideCount=z.getRequiredLazySlides=z.getPreClones=z.getPostClones=z.getOnDemandLazySlides=z.getNavigableIndexes=z.getHeight=z.extractObject=void 0;var Nk=Dk(Z);function Dk(e){return e&&e.__esModule?e:{default:e}}function Hf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hf(Object(n),!0).forEach(function(r){Ak(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ak(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Am(e,t,n){return Math.max(t,Math.min(e,n))}var Ln=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};z.safePreventDefault=Ln;var Nc=function(t){for(var n=[],r=Dc(t),i=Ac(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};z.getOnDemandLazySlides=Nc;var Hk=function(t){for(var n=[],r=Dc(t),i=Ac(t),o=r;o<i;o++)n.push(o);return n};z.getRequiredLazySlides=Hk;var Dc=function(t){return t.currentSlide-Hm(t)};z.lazyStartIndex=Dc;var Ac=function(t){return t.currentSlide+Fm(t)};z.lazyEndIndex=Ac;var Hm=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};z.lazySlidesOnLeft=Hm;var Fm=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};z.lazySlidesOnRight=Fm;var ll=function(t){return t&&t.offsetWidth||0};z.getWidth=ll;var Hc=function(t){return t&&t.offsetHeight||0};z.getHeight=Hc;var Fc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};z.getSwipeDirection=Fc;var Bc=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};z.canGoNext=Bc;var Fk=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};z.extractObject=Fk;var Bk=function(t){var n=Nk.default.Children.count(t.children),r=t.listRef,i=Math.ceil(ll(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(ll(o)),a;if(t.vertical)a=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),a=Math.ceil((i-s)/t.slidesToShow)}var u=r&&Hc(r.querySelector('[data-index="0"]')),h=u*t.slidesToShow,f=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(f=n-1-t.initialSlide);var m=t.lazyLoadedList||[],w=Nc(ie(ie({},t),{},{currentSlide:f,lazyLoadedList:m}));m=m.concat(w);var x={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:f,slideHeight:u,listHeight:h,lazyLoadedList:m};return t.autoplaying===null&&t.autoplay&&(x.autoplaying="playing"),x};z.initializedState=Bk;var Wk=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,s=t.lazyLoad,u=t.currentSlide,h=t.centerMode,f=t.slidesToScroll,m=t.slidesToShow,w=t.useCSS,x=t.lazyLoadedList;if(n&&r)return{};var y=l,E,p,c,v={},g={},_=o?l:Am(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&x.indexOf(y)<0&&(x=x.concat(y)),v={animating:!0,currentSlide:y,lazyLoadedList:x,targetSlide:y},g={animating:!1,targetSlide:y}}else E=y,y<0?(E=y+a,o?a%f!==0&&(E=a-a%f):E=0):!Bc(t)&&y>u?y=E=u:h&&y>=a?(y=o?a:a-1,E=o?0:a-1):y>=a&&(E=y-a,o?a%f!==0&&(E=0):E=a-m),!o&&y+m>=a&&(E=a-m),p=$i(ie(ie({},t),{},{slideIndex:y})),c=$i(ie(ie({},t),{},{slideIndex:E})),o||(p===c&&(y=E),p=c),s&&(x=x.concat(Nc(ie(ie({},t),{},{currentSlide:y})))),w?(v={animating:!0,currentSlide:E,trackStyle:Wc(ie(ie({},t),{},{left:p})),lazyLoadedList:x,targetSlide:_},g={animating:!1,currentSlide:E,trackStyle:Oi(ie(ie({},t),{},{left:c})),swipeLeft:null,targetSlide:_}):v={currentSlide:E,trackStyle:Oi(ie(ie({},t),{},{left:c})),lazyLoadedList:x,targetSlide:_};return{state:v,nextState:g}};z.slideHandler=Wk;var Uk=function(t,n){var r,i,o,l,a,s=t.slidesToScroll,u=t.slidesToShow,h=t.slideCount,f=t.currentSlide,m=t.targetSlide,w=t.lazyLoad,x=t.infinite;if(l=h%s!==0,r=l?0:(h-f)%s,n.message==="previous")o=r===0?s:u-r,a=f-o,w&&!x&&(i=f-o,a=i===-1?h-1:i),x||(a=m-s);else if(n.message==="next")o=r===0?s:r,a=f+o,w&&!x&&(a=(f+s)%h+r),x||(a=m+s);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,x){var y=Vm(ie(ie({},t),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-h:a<n.currentSlide&&y==="right"&&(a=a+h)}}else n.message==="index"&&(a=Number(n.index));return a};z.changeSlide=Uk;var Vk=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};z.keyHandler=Vk;var Qk=function(t,n,r){return t.target.tagName==="IMG"&&Ln(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};z.swipeStart=Qk;var Gk=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,s=n.rtl,u=n.currentSlide,h=n.edgeFriction,f=n.edgeDragged,m=n.onEdge,w=n.swiped,x=n.swiping,y=n.slideCount,E=n.slidesToScroll,p=n.infinite,c=n.touchObject,v=n.swipeEvent,g=n.listHeight,_=n.listWidth;if(!r){if(i)return Ln(t);o&&l&&a&&Ln(t);var k,C={},O=$i(n);c.curX=t.touches?t.touches[0].pageX:t.clientX,c.curY=t.touches?t.touches[0].pageY:t.clientY,c.swipeLength=Math.round(Math.sqrt(Math.pow(c.curX-c.startX,2)));var b=Math.round(Math.sqrt(Math.pow(c.curY-c.startY,2)));if(!a&&!x&&b>10)return{scrolling:!0};a&&(c.swipeLength=b);var T=(s?-1:1)*(c.curX>c.startX?1:-1);a&&(T=c.curY>c.startY?1:-1);var N=Math.ceil(y/E),M=Fc(n.touchObject,a),R=c.swipeLength;return p||(u===0&&(M==="right"||M==="down")||u+1>=N&&(M==="left"||M==="up")||!Bc(n)&&(M==="left"||M==="up"))&&(R=c.swipeLength*h,f===!1&&m&&(m(M),C.edgeDragged=!0)),!w&&v&&(v(M),C.swiped=!0),o?k=O+R*(g/_)*T:s?k=O-R*T:k=O+R*T,a&&(k=O+R*T),C=ie(ie({},C),{},{touchObject:c,swipeLeft:k,trackStyle:Oi(ie(ie({},n),{},{left:k}))}),Math.abs(c.curX-c.startX)<Math.abs(c.curY-c.startY)*.8||c.swipeLength>10&&(C.swiping=!0,Ln(t)),C}};z.swipeMove=Gk;var Yk=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,h=n.swipeToSlide,f=n.scrolling,m=n.onSwipe,w=n.targetSlide,x=n.currentSlide,y=n.infinite;if(!r)return i&&Ln(t),{};var E=s?u/a:l/a,p=Fc(o,s),c={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!o.swipeLength)return c;if(o.swipeLength>E){Ln(t),m&&m(p);var v,g,_=y?x:w;switch(p){case"left":case"up":g=_+cu(n),v=h?uu(n,g):g,c.currentDirection=0;break;case"right":case"down":g=_-cu(n),v=h?uu(n,g):g,c.currentDirection=1;break;default:v=_}c.triggerSlideHandler=v}else{var k=$i(n);c.trackStyle=Wc(ie(ie({},n),{},{left:k}))}return c};z.swipeEnd=Yk;var Bm=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};z.getNavigableIndexes=Bm;var uu=function(t,n){var r=Bm(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};z.checkNavigable=uu;var cu=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+Hc(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+ll(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll};z.getSlideCount=cu;var Kl=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};z.checkSpecKeys=Kl;var Oi=function(t){Kl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Um(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ie(ie({},o),{},{WebkitTransform:l,transform:a,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};z.getTrackCSS=Oi;var Wc=function(t){Kl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Oi(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};z.getTrackAnimateCSS=Wc;var $i=function(t){if(t.unslick)return 0;Kl(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,h=t.listWidth,f=t.variableWidth,m=t.slideHeight,w=t.fade,x=t.vertical,y=0,E,p,c=0;if(w||t.slideCount===1)return 0;var v=0;if(i?(v=-oi(t),l%s!==0&&n+s>l&&(v=-(n>l?a-(n-l):l%s)),o&&(v+=parseInt(a/2))):(l%s!==0&&n+s>l&&(v=a-l%s),o&&(v=parseInt(a/2))),y=v*u,c=v*m,x?E=n*m*-1+c:E=n*u*-1+y,f===!0){var g,_=r&&r.node;if(g=n+oi(t),p=_&&_.childNodes[g],E=p?p.offsetLeft*-1:0,o===!0){g=i?n+oi(t):n,p=_&&_.children[g],E=0;for(var k=0;k<g;k++)E-=_&&_.children[k]&&_.children[k].offsetWidth;E-=parseInt(t.centerPadding),E+=p&&(h-p.offsetWidth)/2}}return E};z.getTrackLeft=$i;var oi=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};z.getPreClones=oi;var Wm=function(t){return t.unslick||!t.infinite?0:t.slideCount};z.getPostClones=Wm;var Um=function(t){return t.slideCount===1?1:oi(t)+t.slideCount+Wm(t)};z.getTotalSlides=Um;var Vm=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Qm(t)?"left":"right":t.targetSlide<t.currentSlide-Gm(t)?"right":"left"};z.siblingDirection=Vm;var Qm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};z.slidesOnRight=Qm;var Gm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};z.slidesOnLeft=Gm;var qk=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};z.canUseDOM=qk;var Zl={};function du(e){"@babel/helpers - typeof";return du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},du(e)}Object.defineProperty(Zl,"__esModule",{value:!0});Zl.Track=void 0;var Kt=Ym(Z),Ba=Ym(Xl),Wa=z;function Ym(e){return e&&e.__esModule?e:{default:e}}function fu(){return fu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fu.apply(this,arguments)}function Xk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ff(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Kk(e,t,n){return t&&Ff(e.prototype,t),n&&Ff(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pu(e,t)}function pu(e,t){return pu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},pu(e,t)}function Jk(e){var t=t2();return function(){var r=al(e),i;if(t){var o=al(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return e2(this,i)}}function e2(e,t){if(t&&(du(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hu(e)}function hu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function t2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function al(e){return al=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},al(e)}function Bf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bf(Object(n),!0).forEach(function(r){vu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ua=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var s=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},n2=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Va=function(t,n){return t.key||n},r2=function(t){var n,r=[],i=[],o=[],l=Kt.default.Children.count(t.children),a=(0,Wa.lazyStartIndex)(t),s=(0,Wa.lazyEndIndex)(t);return Kt.default.Children.forEach(t.children,function(u,h){var f,m={message:"children",index:h,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(h)>=0?f=u:f=Kt.default.createElement("div",null);var w=n2(Ae(Ae({},t),{},{index:h})),x=f.props.className||"",y=Ua(Ae(Ae({},t),{},{index:h}));if(r.push(Kt.default.cloneElement(f,{key:"original"+Va(f,h),"data-index":h,className:(0,Ba.default)(y,x),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Ae(Ae({outline:"none"},f.props.style||{}),w),onClick:function(c){f.props&&f.props.onClick&&f.props.onClick(c),t.focusOnSelect&&t.focusOnSelect(m)}})),t.infinite&&t.fade===!1){var E=l-h;E<=(0,Wa.getPreClones)(t)&&l!==t.slidesToShow&&(n=-E,n>=a&&(f=u),y=Ua(Ae(Ae({},t),{},{index:n})),i.push(Kt.default.cloneElement(f,{key:"precloned"+Va(f,n),"data-index":n,tabIndex:"-1",className:(0,Ba.default)(y,x),"aria-hidden":!y["slick-active"],style:Ae(Ae({},f.props.style||{}),w),onClick:function(c){f.props&&f.props.onClick&&f.props.onClick(c),t.focusOnSelect&&t.focusOnSelect(m)}}))),l!==t.slidesToShow&&(n=l+h,n<s&&(f=u),y=Ua(Ae(Ae({},t),{},{index:n})),o.push(Kt.default.cloneElement(f,{key:"postcloned"+Va(f,n),"data-index":n,tabIndex:"-1",className:(0,Ba.default)(y,x),"aria-hidden":!y["slick-active"],style:Ae(Ae({},f.props.style||{}),w),onClick:function(c){f.props&&f.props.onClick&&f.props.onClick(c),t.focusOnSelect&&t.focusOnSelect(m)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},i2=function(e){Zk(n,e);var t=Jk(n);function n(){var r;Xk(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),vu(hu(r),"node",null),vu(hu(r),"handleRef",function(a){r.node=a}),r}return Kk(n,[{key:"render",value:function(){var i=r2(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:a,onMouseLeave:s};return Kt.default.createElement("div",fu({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(Kt.default.PureComponent);Zl.Track=i2;var Jl={};function mu(e){"@babel/helpers - typeof";return mu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mu(e)}Object.defineProperty(Jl,"__esModule",{value:!0});Jl.Dots=void 0;var po=qm(Z),o2=qm(Xl),Wf=z;function qm(e){return e&&e.__esModule?e:{default:e}}function Uf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function l2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uf(Object(n),!0).forEach(function(r){a2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function a2(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u2(e,t,n){return t&&Vf(e.prototype,t),n&&Vf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&gu(e,t)}function gu(e,t){return gu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},gu(e,t)}function d2(e){var t=h2();return function(){var r=sl(e),i;if(t){var o=sl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return f2(this,i)}}function f2(e,t){if(t&&(mu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p2(e)}function p2(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function sl(e){return sl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},sl(e)}var v2=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},m2=function(e){c2(n,e);var t=d2(n);function n(){return s2(this,n),t.apply(this,arguments)}return u2(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,h=i.slidesToShow,f=i.slideCount,m=i.currentSlide,w=v2({slideCount:f,slidesToScroll:u,slidesToShow:h,infinite:s}),x={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},y=[],E=0;E<w;E++){var p=(E+1)*u-1,c=s?p:(0,Wf.clamp)(p,0,f-1),v=c-(u-1),g=s?v:(0,Wf.clamp)(v,0,f-1),_=(0,o2.default)({"slick-active":s?m>=g&&m<=c:m===g}),k={message:"dots",index:E,slidesToScroll:u,currentSlide:m},C=this.clickHandler.bind(this,k);y=y.concat(po.default.createElement("li",{key:E,className:_},po.default.cloneElement(this.props.customPaging(E),{onClick:C})))}return po.default.cloneElement(this.props.appendDots(y),l2({className:this.props.dotsClass},x))}}]),n}(po.default.PureComponent);Jl.Dots=m2;var kr={};function yu(e){"@babel/helpers - typeof";return yu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yu(e)}Object.defineProperty(kr,"__esModule",{value:!0});kr.PrevArrow=kr.NextArrow=void 0;var ur=Km(Z),Xm=Km(Xl),g2=z;function Km(e){return e&&e.__esModule?e:{default:e}}function ul(){return ul=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ul.apply(this,arguments)}function Qf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qf(Object(n),!0).forEach(function(r){y2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function y2(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Jm(e,t,n){return t&&Gf(e.prototype,t),n&&Gf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function eg(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&wu(e,t)}function wu(e,t){return wu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},wu(e,t)}function tg(e){var t=x2();return function(){var r=dl(e),i;if(t){var o=dl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return w2(this,i)}}function w2(e,t){if(t&&(yu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return S2(e)}function S2(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function dl(e){return dl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},dl(e)}var k2=function(e){eg(n,e);var t=tg(n);function n(){return Zm(this,n),t.apply(this,arguments)}return Jm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Xm.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=ur.default.cloneElement(this.props.prevArrow,cl(cl({},l),a)):s=ur.default.createElement("button",ul({key:"0",type:"button"},l)," ","Previous"),s}}]),n}(ur.default.PureComponent);kr.PrevArrow=k2;var _2=function(e){eg(n,e);var t=tg(n);function n(){return Zm(this,n),t.apply(this,arguments)}return Jm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,g2.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Xm.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=ur.default.cloneElement(this.props.nextArrow,cl(cl({},l),a)):s=ur.default.createElement("button",ul({key:"1",type:"button"},l)," ","Next"),s}}]),n}(ur.default.PureComponent);kr.NextArrow=_2;var ng=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),Su=typeof window<"u"&&typeof document<"u"&&window.document===document,fl=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),C2=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(fl):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),O2=2;function $2(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){C2(o)}function a(){var s=Date.now();if(n){if(s-i<O2)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=s}return a}var E2=20,P2=["top","right","bottom","left","width","height","size","weight"],b2=typeof MutationObserver<"u",T2=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=$2(this.refresh.bind(this),E2)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Su||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),b2?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Su||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=P2.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),rg=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},_r=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||fl},ig=ea(0,0,0,0);function pl(e){return parseFloat(e)||0}function Yf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+pl(o)},0)}function j2(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=pl(l)}return n}function z2(e){var t=e.getBBox();return ea(0,0,t.width,t.height)}function L2(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return ig;var r=_r(e).getComputedStyle(e),i=j2(r),o=i.left+i.right,l=i.top+i.bottom,a=pl(r.width),s=pl(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Yf(r,"left","right")+o),Math.round(s+l)!==n&&(s-=Yf(r,"top","bottom")+l)),!M2(e)){var u=Math.round(a+o)-t,h=Math.round(s+l)-n;Math.abs(u)!==1&&(a-=u),Math.abs(h)!==1&&(s-=h)}return ea(i.left,i.top,a,s)}var R2=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof _r(e).SVGGraphicsElement}:function(e){return e instanceof _r(e).SVGElement&&typeof e.getBBox=="function"}}();function M2(e){return e===_r(e).document.documentElement}function I2(e){return Su?R2(e)?z2(e):L2(e):ig}function N2(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return rg(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function ea(e,t,n,r){return{x:e,y:t,width:n,height:r}}var D2=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ea(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=I2(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),A2=function(){function e(t,n){var r=N2(n);rg(this,{target:t,contentRect:r})}return e}(),H2=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new ng,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _r(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new D2(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _r(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new A2(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),og=typeof WeakMap<"u"?new WeakMap:new ng,lg=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=T2.getInstance(),r=new H2(t,n,this);og.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){lg.prototype[e]=function(){var t;return(t=og.get(this))[e].apply(t,arguments)}});var F2=function(){return typeof fl.ResizeObserver<"u"?fl.ResizeObserver:lg}();const B2=Object.freeze(Object.defineProperty({__proto__:null,default:F2},Symbol.toStringTag,{value:"Module"})),W2=mg(B2);Object.defineProperty(ql,"__esModule",{value:!0});ql.InnerSlider=void 0;var Re=Hi(Z),U2=Hi(Nm),V2=Hi(Ik),Q2=Hi(Xl),le=z,G2=Zl,Y2=Jl,qf=kr,q2=Hi(W2);function Hi(e){return e&&e.__esModule?e:{default:e}}function hl(e){"@babel/helpers - typeof";return hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hl(e)}function vl(){return vl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vl.apply(this,arguments)}function X2(e,t){if(e==null)return{};var n=K2(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function K2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Xf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xf(Object(n),!0).forEach(function(r){B(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Z2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J2(e,t,n){return t&&Kf(e.prototype,t),n&&Kf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function e_(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xu(e,t)}function xu(e,t){return xu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},xu(e,t)}function t_(e){var t=r_();return function(){var r=ml(e),i;if(t){var o=ml(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return n_(this,i)}}function n_(e,t){if(t&&(hl(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ml(e){return ml=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ml(e)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i_=function(e){e_(n,e);var t=t_(n);function n(r){var i;Z2(this,n),i=t.call(this,r),B(F(i),"listRefHandler",function(l){return i.list=l}),B(F(i),"trackRefHandler",function(l){return i.track=l}),B(F(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,le.getHeight)(l)+"px"}}),B(F(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,le.getOnDemandLazySlides)(A(A({},i.props),i.state));l.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=A({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new q2.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),B(F(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),B(F(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,le.getOnDemandLazySlides)(A(A({},i.props),i.state));a.length>0&&(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var s=A(A({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(s,u,function(){i.state.currentSlide>=Re.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Re.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),B(F(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,V2.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),B(F(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var s=A(A({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),B(F(i),"updateState",function(l,a,s){var u=(0,le.initializedState)(l);l=A(A(A({},l),u),{},{slideIndex:u.currentSlide});var h=(0,le.getTrackLeft)(l);l=A(A({},l),{},{left:h});var f=(0,le.getTrackCSS)(l);(a||Re.default.Children.count(i.props.children)!==Re.default.Children.count(l.children))&&(u.trackStyle=f),i.setState(u,s)}),B(F(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,s=[],u=(0,le.getPreClones)(A(A(A({},i.props),i.state),{},{slideCount:i.props.children.length})),h=(0,le.getPostClones)(A(A(A({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(C){s.push(C.props.style.width),l+=C.props.style.width});for(var f=0;f<u;f++)a+=s[s.length-1-f],l+=s[s.length-1-f];for(var m=0;m<h;m++)l+=s[m];for(var w=0;w<i.state.currentSlide;w++)a+=s[w];var x={width:l+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");x.left="calc(".concat(x.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:x}}var E=Re.default.Children.count(i.props.children),p=A(A(A({},i.props),i.state),{},{slideCount:E}),c=(0,le.getPreClones)(p)+(0,le.getPostClones)(p)+E,v=100/i.props.slidesToShow*c,g=100/c,_=-g*((0,le.getPreClones)(p)+i.state.currentSlide)*v/100;i.props.centerMode&&(_+=(100-g*v/100)/2);var k={width:v+"%",left:_+"%"};return{slideWidth:g+"%",trackStyle:k}}),B(F(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,s=0;Array.prototype.forEach.call(l,function(u){var h=function(){return++s&&s>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var f=u.onclick;u.onclick=function(){f(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=h,u.onerror=function(){h(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),B(F(i),"progressiveLazyLoad",function(){for(var l=[],a=A(A({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,le.getPostClones)(a);s++)if(i.state.lazyLoadedList.indexOf(s)<0){l.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,le.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),B(F(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,h=s.beforeChange,f=s.onLazyLoad,m=s.speed,w=s.afterChange,x=i.state.currentSlide,y=(0,le.slideHandler)(A(A(A({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),E=y.state,p=y.nextState;if(E){h&&h(x,E.currentSlide);var c=E.lazyLoadedList.filter(function(v){return i.state.lazyLoadedList.indexOf(v)<0});f&&c.length>0&&f(c),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),w&&w(x),delete i.animationEndCallback),i.setState(E,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),p&&(i.animationEndCallback=setTimeout(function(){var v=p.animating,g=X2(p,["animating"]);i.setState(g,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:v})},10)),w&&w(E.currentSlide),delete i.animationEndCallback})},m))})}}),B(F(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=A(A({},i.props),i.state),u=(0,le.changeSlide)(s,l);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var h=i.list.querySelectorAll(".slick-current");h[0]&&h[0].focus()}}),B(F(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),B(F(i),"keyHandler",function(l){var a=(0,le.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),B(F(i),"selectHandler",function(l){i.changeSlide(l)}),B(F(i),"disableBodyScroll",function(){var l=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=l}),B(F(i),"enableBodyScroll",function(){window.ontouchmove=null}),B(F(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,le.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),B(F(i),"swipeMove",function(l){var a=(0,le.swipeMove)(l,A(A(A({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),B(F(i),"swipeEnd",function(l){var a=(0,le.swipeEnd)(l,A(A(A({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),B(F(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),B(F(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),B(F(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),B(F(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),B(F(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,le.canGoNext)(A(A({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),B(F(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),B(F(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),B(F(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),B(F(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),B(F(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),B(F(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),B(F(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),B(F(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),B(F(i),"render",function(){var l=(0,Q2.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=A(A({},i.props),i.state),s=(0,le.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=A(A({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var h;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,le.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),m=i.props.pauseOnDotsHover;f=A(A({},f),{},{clickHandler:i.changeSlide,onMouseEnter:m?i.onDotsLeave:null,onMouseOver:m?i.onDotsOver:null,onMouseLeave:m?i.onDotsLeave:null}),h=Re.default.createElement(Y2.Dots,f)}var w,x,y=(0,le.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(w=Re.default.createElement(qf.PrevArrow,y),x=Re.default.createElement(qf.NextArrow,y));var E=null;i.props.vertical&&(E={height:i.state.listHeight});var p=null;i.props.vertical===!1?i.props.centerMode===!0&&(p={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(p={padding:i.props.centerPadding+" 0px"});var c=A(A({},E),p),v=i.props.touchMove,g={className:"slick-list",style:c,onClick:i.clickHandler,onMouseDown:v?i.swipeStart:null,onMouseMove:i.state.dragging&&v?i.swipeMove:null,onMouseUp:v?i.swipeEnd:null,onMouseLeave:i.state.dragging&&v?i.swipeEnd:null,onTouchStart:v?i.swipeStart:null,onTouchMove:i.state.dragging&&v?i.swipeMove:null,onTouchEnd:v?i.touchEnd:null,onTouchCancel:i.state.dragging&&v?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},_={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(g={className:"slick-list"},_={className:l}),Re.default.createElement("div",_,i.props.unslick?"":w,Re.default.createElement("div",vl({ref:i.listRefHandler},g),Re.default.createElement(G2.Track,vl({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":x,i.props.unslick?"":h)}),i.list=null,i.track=null,i.state=A(A({},U2.default),{},{currentSlide:i.props.initialSlide,slideCount:Re.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=A(A({},i.state),o),i}return J2(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var s=a[l];if(!i.hasOwnProperty(s)){o=!0;break}if(!(hl(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||Re.default.Children.count(this.props.children)!==Re.default.Children.count(i.children)}}]),n}(Re.default.Component);ql.InnerSlider=i_;var o_=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},l_=o_,a_=l_,s_=function(e){var t=/[height|width]$/;return t.test(e)},Zf=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=a_(r),s_(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},u_=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Zf(n),r<e.length-1&&(t+=", ")}),t):Zf(e)},c_=u_,ag={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Z);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(ag);var Qa,Jf;function d_(){if(Jf)return Qa;Jf=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Qa=e,Qa}var Ga,ep;function sg(){if(ep)return Ga;ep=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Ga={isFunction:n,isArray:t,each:e},Ga}var Ya,tp;function f_(){if(tp)return Ya;tp=1;var e=d_(),t=sg().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Ya=n,Ya}var qa,np;function p_(){if(np)return qa;np=1;var e=f_(),t=sg(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,s){var u=this.queries,h=s&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,h)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(f){r(f)&&(f={match:f}),u[l].addHandler(f)}),this},unregister:function(l,a){var s=this.queries[l];return s&&(a?s.removeHandler(a):(s.clear(),delete this.queries[l])),this}},qa=o,qa}var Xa,rp;function h_(){if(rp)return Xa;rp=1;var e=p_();return Xa=new e,Xa}(function(e){function t(O){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},t(O)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(Z),r=ql,i=a(c_),o=a(ag),l=z;function a(O){return O&&O.__esModule?O:{default:O}}function s(){return s=Object.assign||function(O){for(var b=1;b<arguments.length;b++){var T=arguments[b];for(var N in T)Object.prototype.hasOwnProperty.call(T,N)&&(O[N]=T[N])}return O},s.apply(this,arguments)}function u(O,b){var T=Object.keys(O);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(O);b&&(N=N.filter(function(M){return Object.getOwnPropertyDescriptor(O,M).enumerable})),T.push.apply(T,N)}return T}function h(O){for(var b=1;b<arguments.length;b++){var T=arguments[b]!=null?arguments[b]:{};b%2?u(Object(T),!0).forEach(function(N){_(O,N,T[N])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(T)):u(Object(T)).forEach(function(N){Object.defineProperty(O,N,Object.getOwnPropertyDescriptor(T,N))})}return O}function f(O,b){if(!(O instanceof b))throw new TypeError("Cannot call a class as a function")}function m(O,b){for(var T=0;T<b.length;T++){var N=b[T];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(O,N.key,N)}}function w(O,b,T){return b&&m(O.prototype,b),T&&m(O,T),Object.defineProperty(O,"prototype",{writable:!1}),O}function x(O,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");O.prototype=Object.create(b&&b.prototype,{constructor:{value:O,writable:!0,configurable:!0}}),Object.defineProperty(O,"prototype",{writable:!1}),b&&y(O,b)}function y(O,b){return y=Object.setPrototypeOf||function(N,M){return N.__proto__=M,N},y(O,b)}function E(O){var b=v();return function(){var N=g(O),M;if(b){var R=g(this).constructor;M=Reflect.construct(N,arguments,R)}else M=N.apply(this,arguments);return p(this,M)}}function p(O,b){if(b&&(t(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(O)}function c(O){if(O===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O}function v(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function g(O){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(T){return T.__proto__||Object.getPrototypeOf(T)},g(O)}function _(O,b,T){return b in O?Object.defineProperty(O,b,{value:T,enumerable:!0,configurable:!0,writable:!0}):O[b]=T,O}var k=(0,l.canUseDOM)()&&h_(),C=function(O){x(T,O);var b=E(T);function T(N){var M;return f(this,T),M=b.call(this,N),_(c(M),"innerSliderRefHandler",function(R){return M.innerSlider=R}),_(c(M),"slickPrev",function(){return M.innerSlider.slickPrev()}),_(c(M),"slickNext",function(){return M.innerSlider.slickNext()}),_(c(M),"slickGoTo",function(R){var ze=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return M.innerSlider.slickGoTo(R,ze)}),_(c(M),"slickPause",function(){return M.innerSlider.pause("paused")}),_(c(M),"slickPlay",function(){return M.innerSlider.autoPlay("play")}),M.state={breakpoint:null},M._responsiveMediaHandlers=[],M}return w(T,[{key:"media",value:function(M,R){k.register(M,R),this._responsiveMediaHandlers.push({query:M,handler:R})}},{key:"componentDidMount",value:function(){var M=this;if(this.props.responsive){var R=this.props.responsive.map(function(fe){return fe.breakpoint});R.sort(function(fe,Le){return fe-Le}),R.forEach(function(fe,Le){var et;Le===0?et=(0,i.default)({minWidth:0,maxWidth:fe}):et=(0,i.default)({minWidth:R[Le-1]+1,maxWidth:fe}),(0,l.canUseDOM)()&&M.media(et,function(){M.setState({breakpoint:fe})})});var ze=(0,i.default)({minWidth:R.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(ze,function(){M.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(M){k.unregister(M.query,M.handler)})}},{key:"render",value:function(){var M=this,R,ze;this.state.breakpoint?(ze=this.props.responsive.filter(function(_e){return _e.breakpoint===M.state.breakpoint}),R=ze[0].settings==="unslick"?"unslick":h(h(h({},o.default),this.props),ze[0].settings)):R=h(h({},o.default),this.props),R.centerMode&&(R.slidesToScroll>1,R.slidesToScroll=1),R.fade&&(R.slidesToShow>1,R.slidesToScroll>1,R.slidesToShow=1,R.slidesToScroll=1);var fe=n.default.Children.toArray(this.props.children);fe=fe.filter(function(_e){return typeof _e=="string"?!!_e.trim():!!_e}),R.variableWidth&&(R.rows>1||R.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),R.variableWidth=!1);for(var Le=[],et=null,j=0;j<fe.length;j+=R.rows*R.slidesPerRow){for(var I=[],D=j;D<j+R.rows*R.slidesPerRow;D+=R.slidesPerRow){for(var Y=[],U=D;U<D+R.slidesPerRow&&(R.variableWidth&&fe[U].props.style&&(et=fe[U].props.style.width),!(U>=fe.length));U+=1)Y.push(n.default.cloneElement(fe[U],{key:100*j+10*D+U,tabIndex:-1,style:{width:"".concat(100/R.slidesPerRow,"%"),display:"inline-block"}}));I.push(n.default.createElement("div",{key:10*j+D},Y))}R.variableWidth?Le.push(n.default.createElement("div",{key:j,style:{width:et}},I)):Le.push(n.default.createElement("div",{key:j},I))}if(R==="unslick"){var Et="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:Et},fe)}else Le.length<=R.slidesToShow&&(R.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},R),Le)}}]),T}(n.default.Component);e.default=C})(Im);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Im);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(Mm);const ta=Sp(Mm);const ug=Bw`
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
`,v_=S.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,m_=({slides:e})=>{const t={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return d.jsxs(v_,{children:[d.jsx(ug,{}),d.jsx(ta,{...t,children:e.map(n=>d.jsx(Rm,{slide:n},n.id))})]})},{darkColor:ku}=J,ho={title:"Video",text:"Product Description THOTH",movies:[{id:"1",title:"Video title 1",content:"Slide 1"},{id:"2",title:"Video title 2",content:"Slide 2"},{id:"3",title:"Video title 3",content:"Slide 3"},{id:"4",title:"Video title 4",content:"Slide 4"},{id:"5",title:"Video title 5",content:"Slide 5"}]},g_=S.section`
  margin: calc(50vw / 14.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,y_=S.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${$}) {
    flex-direction: column;
  }
`,w_=S($t)`
  width: 80%;
`,S_=S(Yl)`
  margin: 1vw 0 2.57vw;
`,x_=S.div`
  width: 54%;
  height: 100%;

  @media (max-width: ${$}) {
    width: 100%;
  }
`,k_=S.div`
  border-radius: 20px;
  width: 37%;
  ${Pr};
  height: auto;
  background-image: url("/images/products-and-service/video.svg");

  @media (max-width: ${$}) {
    width: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,__=S.div`
  height: 40vw;
  overflow-y: scroll;

  @media (max-width: ${$}) {
    height: 125vw;
  }
`,C_=S.div`
  box-sizing: border-box;
  position: relative;
  height: 14.73vw;
  width: 28.26vw;
  margin: 2.23vw 1.23vw 4.44vw;
  background-color: gray;
  cursor: pointer;
  border-radius: 20px;

  @media (max-width: ${$}) {
    height: 44.48vw;
    width: 81.3vw;
    margin: 12vw 6vw 12vw 0;
  }
`,ip=S.p`
  max-width: 100%;
  position: absolute;
  bottom: -2.5vw;
  left: 2.5vw;
  ${Q};
  color: ${ku};
  ${G};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.5px;

  @media (max-width: ${$}) {
    font-size: calc(25vw / 5.08);
    bottom: -8vw;
  }
`,O_=S.div`
  position: relative;
  height: 37vw;
  margin: 0 1.23vw 0.79vw;
  background-color: lightblue;
  border-radius: 20px;
  > p {
    bottom: -4vw;
    font-size: calc(30vw / 14.4);
  }

  @media (max-width: ${$}) {
    height: 53.34vw;
    margin: 0 6.1vw 12vw;
    > p {
      bottom: -8vw;
      font-size: calc(25vw / 5.08);
    }
  }
`,op=S.div`
  margin-top: 0.79vw;
`,$_=()=>{const[e,t]=Z.useState("1"),n=r=>{t(r)};return d.jsxs(g_,{children:[d.jsx(w_,{color:ku,children:ho.title}),d.jsx(S_,{color:ku,children:ho.text}),d.jsxs(y_,{children:[d.jsx(x_,{children:ho.movies.map(r=>e===r.id?d.jsxs(O_,{children:[d.jsx(ip,{children:r.title}),d.jsx(op,{children:r.content})]},r.id):null)}),d.jsx(k_,{children:d.jsx(__,{children:ho.movies.map(r=>d.jsxs(C_,{onClick:()=>n(r.id),style:{backgroundColor:e===r.id?"lightblue":"lightgray"},children:[d.jsx(op,{children:r.content}),d.jsx(ip,{children:r.title})]},r.id))})})]})]})},{whiteColor:gl,greenColor:lp}=J,Wn={title:"Products and Services",text:"Product Description THOTH",slides:[{id:"1",mainButton:"Merchants Solution",textContent:"A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",button:"Read more",image:"/src/assets/images/products-and-service/merchants-solution.svg"},{id:"2",mainButton:"Enterprise Blockchain Wallets",textContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",button:"test",image:"/src/assets/images/products-and-service/merchants-solution.svg"},{id:"3",mainButton:"Wallet App",textContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",button:"test",image:"/src/assets/images/products-and-service/merchants-solution.svg"},{id:"4",mainButton:"Staking",textContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",button:"test",image:"/src/assets/images/test/test-photo.jpg"}]},E_=S.section`
  ${Pr};
  height: calc(901vw / 14.4);
  padding: 4.86vw;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/images/products-and-service/description-L.svg");

  @media (max-width: ${$}) {
    height: calc(970vw / 5.08);
    padding: 14.93vw 0;
    flex-direction: column;
    background-image: url("/images/products-and-service/description-S.svg");
  }
`,P_=S($t)`
  width: 80%;
`,b_=S(Yl)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${$}) {
    margin: 1.77vw 0 10.61vw;
  }
`,T_=S.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,j_=S(Ve)`
  width: calc(90% / 4);
  ${Hl};
  border-bottom: 2px solid ${lp};

  &:hover {
    border-bottom: 2px solid ${lp};
  }
`,z_=S(Ve)`
  width: calc(90% / 4);
  ${Hl};
  border-bottom: 2px solid ${gl};

  &:hover {
    border-bottom: 2px solid ${gl};
  }
`,L_=()=>{const e=Ft(),[t,n]=Z.useState("1"),r=l=>{n(l)},i=Wn.slides.map(l=>l.id),o=Wn.slides.find(l=>l.id===t);return d.jsxs(d.Fragment,{children:[d.jsxs(E_,{children:[d.jsx(P_,{color:gl,children:Wn.title}),d.jsx(b_,{color:gl,children:Wn.text}),!e&&d.jsx(T_,{children:i.map(l=>{const s=t===l?j_:z_,u=Wn.slides.find(h=>h.id===l);return u?d.jsx(s,{type:"button",onClick:()=>r(u.id),children:u.mainButton},u.id):null})}),e?d.jsx(m_,{slides:Wn.slides}):o&&d.jsx(Rm,{slide:o})]}),d.jsx(Jx,{}),d.jsx(ak,{}),d.jsx($_,{})]})},R_="/thoth/assets/arrow-left-cdb5cf81.svg",M_="/thoth/assets/arrow-right-068d5467.svg",I_=S.div`
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
`,N_=S.div`
  margin: 0;
  padding: 0;
  border-radius: 20px;
  width: calc(100% - 4.58vw);
  height: 100%;

  @media (max-width: ${$}) {
    width: calc(100% - 4.72vw);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (max-width: ${$}) {
    width: calc(100% - 4.72vw);
  }
`,cg=S(Ve)`
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

  @media (max-width: ${$}) {
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
`,dg=S.img`
  width: 100%;
  height: 100%;
`,D_=S.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  .slick-track {
    display: flex;
    align-items: flex-end;
  }
`,A_=({children:e,index:t})=>{const n=Ft(),r=parseInt(t);let i="",o="";return n?(o=r%3===0?"50vw":r%3===1?"57.28vw":"44.49vw",i=r%3===0?"58.26vw":r%3===1?"66.14vw":"52.36vw"):(o=r%3===0?"50vw":r%3===1?"55.83vw":"44.44vw",i=r%3===0?"56.91vw":r%3===1?"64.44vw":"51.11vw"),d.jsx(I_,{style:{height:o,width:i},children:e})},H_=({onClick:e})=>d.jsx(cg,{type:"button",className:"arrow next",onClick:e,children:d.jsx(dg,{src:M_,alt:"Next"})}),F_=({onClick:e})=>d.jsx(cg,{type:"button",className:"arrow prev",onClick:e,$isPrev:!0,children:d.jsx(dg,{src:R_,alt:"Next"})}),B_=({slides:e})=>{const t={className:"center",centerMode:!0,infinite:!0,slidesToShow:1,speed:1e3,nextArrow:d.jsx(H_,{}),prevArrow:d.jsx(F_,{}),variableWidth:!0,initialSlide:0};return d.jsx(D_,{children:d.jsx(ta,{...t,children:e.map(n=>d.jsx(A_,{index:n.index,children:d.jsx(N_,{children:d.jsx("img",{src:n.image,alt:n.alt})})},n.index))})})},{darkGrayColor:W_}=J,ap={title:"Photo",slides:[{index:"0",image:"src/assets/images/test/test-photo.jpg",alt:"Slide 1"},{index:"1",image:"src/assets/images/test/test-photo.jpg",alt:"Slide 1"},{index:"2",image:"src/assets/images/test/test-photo.jpg",alt:"Slide 1"}]},U_=S.div`
  padding-bottom: 4.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 74.44vw;

  @media (max-width: ${$}) {
    box-sizing: border-box;
    padding: 0;
    min-height: 91.26vw;
    justify-content: space-around;
  }
`,V_=()=>d.jsxs(U_,{children:[d.jsx($t,{color:W_,children:ap.title}),d.jsx(B_,{slides:ap.slides})]}),{lightBlackColor:fg,blackColor:pg,darkGreenColor:Q_,whiteColor:G_,greenColor:Y_,lightGreenColor:q_}=J,_n={title:"Fees",lineOne:{title:"Incoming Transactions",text:{main:"As low as 0.5%",span:"and going down based on your total transaction volume.",button:"Check pricing details"}},lineTwo:{title:"Outgoing Transactions",text:{main:"Free of charge"}}},X_=S.section`
  margin: 5.2vw auto 6.07vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 94%;

  @media (max-width: ${$}) {
    padding: 12.37vw 8.25vw 16.89vw 11vw;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
  }
`,sp=S.div`
  margin-bottom: 2.5vw;
  display: grid;
  grid-template-columns: 38% 40% 20%;
  gap: 1vw;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: ${$}) {
    display: flex;
    flex-direction: column;
  }
`,up=S.div`
  grid-column: 2 / 3;
  width: 100%;
`,K_=S.div`
  grid-column: 3 / 4;
  width: 100%;
  display: flex;
  justify-content: end;
`,Z_=S($t)`
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
  border-bottom: 2px solid ${fg};

  @media (max-width: ${$}) {
    padding-bottom: 5.09vw;
    margin: 0;
    font-size: 9.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -1px;
  }
`,cp=S.h3`
  ${Q};
  color: ${pg};
  ${G};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;

  @media (max-width: ${$}) {
    margin: 9.82vw 0 0 0;
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
  }
`,dp=S.p`
  ${Q};
  ${G};
  color: ${Q_};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.8px;
  text-align: left;

  @media (max-width: ${$}) {
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
    margin: 5.1vw 0 3.1vw;
  }
`,J_=S.p`
  ${Q};
  color: ${pg};
  ${G};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${$}) {
    margin: 1vw 0;
    width: 80%;
    font-size: calc(20vw / 5.08);
  }
`,eC=S(Ve)`
  border-radius: 0;

  @media (max-width: ${$}) {
    margin-top: 10.8vw;
    width: 100%;
  }
`,tC=S.div`
  padding: 0.8vw 1.7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    133deg,
    ${Y_} 0%,
    ${q_} 100%
  );

  @media (max-width: ${$}) {
    min-width: 33vw;
    min-height: 8.33vw;
  }
`,nC=S.span`
  margin-right: 1.29vw;
  color: ${G_};
  font-size: 1.11vw;
  ${G};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${$}) {
    margin-right: 6.5vw;
    font-size: 3.15vw;
  }
`,rC=S.div`
  ${Ct};
  width: 1.04vw;
  height: 1.18vw;
  background-image: url("/images/common/play-icon.svg");

  @media (max-width: ${$}) {
    width: 3.34vw;
    height: 2.95vw;
  }
`,iC=d.jsxs(tC,{children:[d.jsx(nC,{children:_n.lineOne.text.button}),d.jsx(rC,{})]}),oC=()=>{console.log("Press fees button")},fp=()=>d.jsx(K_,{children:d.jsx(eC,{type:"button",children:iC,onClick:oC})}),lC=()=>{const e=Ft();return d.jsxs(X_,{children:[d.jsx(Z_,{color:fg,children:_n.title}),d.jsxs(sp,{children:[d.jsx(cp,{children:_n.lineOne.title}),d.jsxs(up,{children:[d.jsx(dp,{children:_n.lineOne.text.main}),d.jsx(J_,{children:_n.lineOne.text.span})]}),!e&&d.jsx(fp,{})]}),d.jsxs(sp,{children:[d.jsx(cp,{children:_n.lineTwo.title}),d.jsx(up,{children:d.jsx(dp,{children:_n.lineTwo.text.main})}),e&&d.jsx(fp,{})]})]})},{whiteColor:aC}=J,sC=S.h3`
  ${Q};
  text-align: center;
  font-size: calc(25vw / 14.4);
  ${G};
  font-weight: 500;
  line-height: 1.5;
  color: ${aC};

  @media (max-width: ${$}) {
    font-size: calc(25vw / 5.08);
  }
`,uC=({children:e,...t})=>d.jsx(sC,{...t,children:e}),{whiteColor:Uc}=J,cC=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${$}) {
    width: 80vw;
    min-height: 68.17vw;
    align-items: start;
  }
`,dC=S.div`
  @media (max-width: ${$}) {
    padding: 7.18vw 0 10.26vw 5vw;
  }
`,fC=S(uC)`
  @media (max-width: ${$}) {
    width: 100%;
    box-sizing: border-box;
    padding: 9.29vw 1.38vw 5.33vw 12.84vw;
    border-bottom: 1px solid ${Uc};
  }
`,pC=S.img`
  margin-right: 2.15vw;
  width: 2.98vw;
  height: auto;

  @media (max-width: ${$}) {
    width: 12.45vw;
    margin-right: 3.93vw;
  }
`,hC=S.h4`
  ${Q};
  text-align: left;
  font-size: calc(22vw / 14.4);
  ${G};
  font-weight: 500;
  line-height: 1.5;
  color: ${Uc};

  @media (max-width: ${$}) {
    font-size: calc(22vw / 5.08);
  }
`,vC=S.p`
  ${Q};
  ${G};
  color: ${Uc};
  font-size: calc(20vw / 14.05);
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${$}) {
    font-size: calc(20vw / 5.08);
  }
`,mC=S.div`
  display: flex;
  flex-direction: row;
  padding-bottom: calc(14vw / 14.4);

  @media (max-width: ${$}) {
    padding-bottom: calc(24vw / 5.08);
  }
`,hg=({button:e,image:t,title:n,text:r})=>d.jsxs(cC,{children:[e&&d.jsx(fC,{children:e}),d.jsxs(dC,{children:[d.jsxs(mC,{children:[d.jsx(pC,{src:t,alt:n}),d.jsx(hC,{children:n})]}),d.jsx(vC,{children:r})]})]}),gC="/thoth/assets/slider-bitton-a733b85e.svg",yC=S(Ve)`
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
`,wC=S.img`
  width: 100%;
  height: 100%;
`,SC=S.div`
  height: 100%;
  background-image: url("/images/use-cases-of-our-products/slide-S.svg");
  background-repeat: no-repeat;
  background-size: cover;
`,xC=({onClick:e})=>d.jsx(yC,{type:"button",className:"arrow next",onClick:e,children:d.jsx(wC,{src:gC,alt:"Next"})}),kC=({slides:e})=>{const t={dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,swipe:!1,variableWidth:!0,centerMode:!1,prevArrow:d.jsx(d.Fragment,{}),nextArrow:d.jsx(xC,{})},r=Object.keys(e).flatMap(i=>e[i].content.map(o=>({button:e[i].button,image:o.image,title:o.title,text:o.text})));return d.jsx(SC,{children:d.jsx(ta,{...t,children:r.map((i,o)=>d.jsx(hg,{button:i.button,image:i.image,title:i.title,text:i.text},o))})})},{whiteColor:bn,greenColor:_C}=J,CC=S.div`
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  margin-bottom: ${({size:e})=>e==="big"?"calc(42vw / 14.4)":"calc(50vw / 14.4)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 2px solid ${bn};

  &:nth-child(2n) {
    border-bottom: ${({size:e})=>e==="big"?"none":`2px solid ${bn}`};
  }

  @media (max-width: ${$}) {
    margin-bottom: calc(49vw / 5.08);
    border-bottom: ${({size:e})=>e==="small"?"none":`2px solid ${bn}`};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
    margin-left: ${({size:e})=>e==="small"?"8.46vw":"0"};

    &:nth-child(2n) {
      border-bottom: ${({size:e})=>e==="big"?`2px solid ${bn}`:"none"};
    }
  }
`,OC=S.div`
  margin: ${({size:e})=>e==="big"?"2vw 0 0.71vw":"1vw 0 1vw"};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  @media (max-width: ${$}) {
    margin: ${({size:e})=>e==="big"?"calc(45vw / 5.09) 0 calc(12vw / 5.09)":"calc(12vw / 5.09) 0 calc(12vw / 5.09)"};
  }
`,vg=S.p`
  ${Q};
  ${G};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${$}) {
    font-size: calc(25vw / 5.09);
  }
`,$C=S(vg)`
  padding-right: 3vw;
  color: ${_C};
`,EC=S(vg)`
  color: ${bn};
`,PC=S.h3`
  margin-bottom: calc(6.58vw / 14.4);
  ${Q};
  ${G};
  color: ${bn};
  font-size: ${({size:e})=>e==="big"?"calc(35vw / 14.4)":"calc(28vw / 14.4)"};
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.7px;
  text-align: left;

  @media (max-width: ${$}) {
    margin-bottom: 0;
    font-size: ${({size:e})=>e==="big"?"calc(30vw / 5.09)":"calc(23vw / 5.09)"};
    letter-spacing: -0.6px;
  }
`,bC=S.p`
  ${Q};
  ${G};
  margin: 0.21vw 0 3.26vw;
  font-size: calc(25vw / 14.4);
  color: ${bn};
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;
  align-self: start;

  @media (max-width: ${$}) {
    margin: 3vw 0 9.84vw;
    font-size: calc(25vw / 5.09);
  }
`,TC=S.img`
  height: ${({size:e})=>e==="big"?"calc(268vw / 14.4)":"calc(154vw / 14.4)"};
  width: ${({size:e})=>e==="big"?"calc(696vw / 14.4)":"calc(413vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${$}) {
    height: ${({size:e})=>e==="big"?"calc(184vw / 5.08)":"calc(148vw / 5.08)"};
    width: ${({size:e})=>e==="big"?"calc(414vw / 5.08)":"calc(333vw / 5.08)"};
  }
`,_u=({slide:e,size:t})=>d.jsxs(CC,{size:t,children:[d.jsx(TC,{size:t,src:e.image,alt:e.alt}),d.jsxs(OC,{size:t,children:[d.jsx($C,{children:e.span}),d.jsx(EC,{children:e.date})]}),d.jsx(PC,{size:t,children:e.title}),t==="big"&&d.jsx(bC,{size:t,children:e.text})]}),jC=S.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`,zC=({slides:e,size:t})=>{const n={dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0,centerMode:!1};return d.jsxs(jC,{children:[d.jsx(ug,{}),d.jsx(ta,{...n,children:e.map(r=>d.jsx(_u,{slide:r,size:t},r.id))})]})},{whiteColor:LC,greenColor:RC}=J,Ka={title:"News",button:"Read more",slides:[{id:"1",span:"Corporate News",date:"20.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"/src/assets/images/test/test-photo.jpg",alt:"Image"},{id:"2",span:"Corporate News",date:"21.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"/src/assets/images/test/test-photo.jpg",alt:"Image"},{id:"3",span:"Corporate News",date:"22.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"/src/assets/images/test/test-photo.jpg",alt:"Image"},{id:"4",span:"Corporate News",date:"23.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"/src/assets/images/test/test-photo.jpg",alt:"Image"},{id:"5",span:"Corporate News",date:"24.04.2022",title:"Athletic Club and B2BinPay Join Forces in Historic Partnership",text:"Athletic Club and B2BinPay Join Forces in Historic Partnership",image:"/src/assets/images/test/test-photo.jpg",alt:"Image"}]},MC=S.div`
  ${Pr};
  min-height: calc(1317vw / 14.4);
  box-sizing: border-box;
  width: 100%;
  background-image: url("/images/news/news-L.svg");

  @media (max-width: ${$}) {
    background-image: url("/images/news/news-S.svg");
    min-height: calc(1441vw / 5.08);
  }
`,IC=S.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${$}) {
    flex-direction: column;
  }
`,NC=S.div`
  padding: 5.06vw 3.92vw;
  display: flex;
  flex-direction: row;
  align-items: end;

  @media (max-width: ${$}) {
    padding: 14vw 3.56vw 7.34vw;
  }
`,DC=S(Ve)`
  margin-left: 3.54vw;
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${RC};
  font-size: 1.74vw;
  ${G};
  font-style: normal;
  font-weight: 400;
  line-height: 2.2;
  letter-spacing: -0.5px;

  @media (max-width: ${$}) {
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
    background-image: url("/images/products-and-service/play.svg");
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 60%;
    transform: translateY(-60%);

    @media (max-width: ${$}) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`,AC=S.div`
  width: calc(696vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${$}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`,HC=S.div`
  width: calc(414vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${$}) {
    width: 100%;
  }
`,FC=()=>{const e=Ft(),t=Ka.slides,n=t.slice(0,2),r=t.slice(2,5),i=()=>{console.log("Press button Read more")};return d.jsxs(MC,{children:[d.jsxs(NC,{children:[d.jsx($t,{color:LC,children:Ka.title}),d.jsx(DC,{type:"button",onClick:i,children:Ka.button})]}),d.jsxs(IC,{children:[d.jsx(AC,{children:n.map(o=>d.jsx(_u,{slide:o,size:"big"},o.id))}),e?d.jsx(zC,{slides:r,size:"small"}):d.jsx(HC,{children:r.map(o=>d.jsx(_u,{slide:o,size:"small"},o.id))})]})]})},{deepColor:Cn,darkGreenColor:Cu}=J,Gt={title:"Have a question?",text:"Explore our solutions or you can contact us throughticket system and contact form. Feel free to get in touch..",existing:{title:"For existing clients",text:"If you already have an account please use our ticket system.",linkName:"Get 24\\7 Support"},new:{title:"For new clients or partners",text:"Please leave your inquiry and our Buisness Development Team will contact you shortly.",linkName:"Contact BD Team"}},BC=S.section`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 10.9vw 3.54vw;

  @media (max-width: ${$}) {
    flex-direction: column;
    padding: 12vw 8.01vw 19.1vw;
  }
`,WC=S($t)`
  padding: 3.13vw 0 1.8vw;
  align-self: start;
  text-align: left;

  @media (max-width: ${$}) {
    flex-direction: column;
    padding: 0 0 7.28vw;
  }
`,Za=S.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 31.94vw;

  @media (max-width: ${$}) {
    min-width: 100%;
  }
`,pp=S.div`
  min-height: 25.69vw;
  display: flex;
  flex-direction: column;
  max-width: 31.94vw;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${$}) {
    min-width: 100%;
  }
`,Ja=S.p`
  width: 25vw;
  ${Q};
  font-size: calc(25vw / 14.4);
  ${G};
  color: ${Cn};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;
  @media (max-width: ${$}) {
    width: 100%;
    padding: 2.56vw 0 5.5vw;
  }

  &:first-child,
  &.custom-first {
    width: 30.76vw;
    @media (max-width: ${$}) {
      width: 100%;
    }
  }

  @media (max-width: ${$}) {
    font-size: calc(25vw / 5.08);
  }
`,hp=S.img`
  width: auto;
  height: calc(58vw / 14.4);
  @media (max-width: ${$}) {
    height: calc(58vw / 5.08);
    margin: 12vw 0 4.92vw;
  }
`,vp=S.h3`
  ${Q};
  padding: 1.39vw 0 0.1vw 0;
  ${G};
  color: ${Cn};
  font-size: calc(30vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-align: left;

  @media (max-width: ${$}) {
    font-size: calc(30vw / 5.08);
  }
`,mp=S(ii)`
  color: ${Cu};
  ${Q};
  ${G};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-decoration-line: underline;

  @media (max-width: ${$}) {
    font-size: calc(25vw / 5.08);
  }
`,UC=()=>d.jsxs(BC,{children:[d.jsxs(Za,{children:[d.jsx(WC,{color:Cn,children:Gt.title}),d.jsx(Ja,{className:"custom-first",children:Gt.text})]}),d.jsxs(pp,{children:[d.jsxs(Za,{children:[d.jsx(hp,{src:"/src/assets/images/use-cases-of-our-products/existing-client.svg",alt:"existing client"}),d.jsx(vp,{color:Cn,children:Gt.existing.title}),d.jsx(Ja,{color:Cn,children:Gt.existing.text})]}),d.jsx(mp,{href:"example.com",target:"_blank",rel:"noopener noreferrer",color:Cu,children:Gt.existing.linkName})]}),d.jsxs(pp,{children:[d.jsxs(Za,{children:[d.jsx(hp,{src:"/src/assets/images/use-cases-of-our-products/new-client.svg",alt:"new client"}),d.jsx(vp,{color:Cn,children:Gt.new.title}),d.jsx(Ja,{color:Cn,children:Gt.new.text})]}),d.jsx(mp,{href:"example.com",target:"_blank",rel:"noopener noreferrer",color:Cu,children:Gt.new.linkName})]})]}),{greenColor:gp,whiteColor:yl}=J,Gr={One:{button:"Merchants Solution",content:[{image:"/src/assets/images/use-cases-of-our-products/merchantsSolutionOne.svg",title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."},{image:"/src/assets/images/use-cases-of-our-products/merchantsSolutionTwo.svg",title:"E-commerce",text:"The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments."},{image:"/src/assets/images/use-cases-of-our-products/merchantsSolutionThree.svg",title:"Marketplaces",text:"There are many platforms used by businesses to sell their products or services. Offering crypto payments to customers is now the advantage."},{image:"/src/assets/images/use-cases-of-our-products/merchantsSolutionFour.svg",title:"Travel Industry",text:"The travel industry is a growing sector. With increasing bookings now made online, it makes financial sense to accept crypto payments."},{image:"/src/assets/images/use-cases-of-our-products/merchantsSolutionFive.svg",title:"Gambling",text:"The global online gambling industry is worth billions of dollars. Crypto payments are part for the course."},{image:"/src/assets/images/use-cases-of-our-products/merchantsSolutionSix.svg",title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."}]},Two:{button:"Enterprise Solution",content:[{image:"/src/assets/images/use-cases-of-our-products/merchantsSolutionOne.svg",title:"FOREX & CFD Brokers",text:"Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies."}]},Three:{button:"White Label",content:[{image:"/src/assets/images/use-cases-of-our-products/merchantsSolutionTwo.svg",title:"E-commerce",text:"The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments."}]}},yp={title:"Use Cases of Our Products",text:"Product Description THOTH",slides:Gr},VC=S.section`
  ${Pr};
  min-height: calc(1015vw / 14.4);
  padding: 4.86vw;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/images/use-cases-of-our-products/background-L.svg");

  @media (max-width: ${$}) {
    padding: 14.17vw 0 12.4vw 0;
    box-sizing: border-box;
    min-height: 138.78vw;
    justify-content: space-between;
    flex-direction: column;
    background-image: url("/images/use-cases-of-our-products/background-S.svg");
  }
`,QC=S.div`
  width: 100%;
`,GC=S(Yl)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${$}) {
    margin: 1.76vw 0 0;
  }
`,YC=S.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,qC=S.div`
  margin-top: 2.57vw;
  padding: 4.93vw 6.25vw;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vw;
  width: 88.47vw;
  min-height: 37.15vw;
  ${Al};
  background-image: url("/images/use-cases-of-our-products/slide-L.svg");
  border-radius: 30px;

  @media (max-width: ${$}) {
    display: block;
    padding: 0;
    background-image: none;
  }
`,XC=S(Ve)`
  width: calc(100% / 3);
  ${Hl};
  border-bottom: 2px solid ${gp};

  &:hover {
    border-bottom: 2px solid ${gp};
  }
`,KC=S(Ve)`
  width: calc(100% / 3);
  ${Hl};
  border-bottom: 2px solid ${yl};

  &:hover {
    border-bottom: 2px solid ${yl};
  }
`,ZC=()=>{const e=Ft(),[t,n]=Z.useState("One");Z.useEffect(()=>{n("One")},[]);const r=o=>{n(o)},i=Object.keys(Gr);return d.jsxs(d.Fragment,{children:[d.jsxs(VC,{children:[d.jsxs(QC,{children:[d.jsx($t,{color:yl,children:yp.title}),d.jsx(GC,{color:yl,children:yp.text}),!e&&d.jsx(YC,{children:i.map(o=>{const a=t===o?XC:KC;return d.jsx(a,{type:"button",onClick:()=>r(o),children:Gr[o].button},o)})})]}),d.jsx(qC,{children:e?d.jsx(kC,{slides:Gr}):Gr[t].content.map((o,l)=>d.jsx(hg,{image:o.image,title:o.title,text:o.text},l))})]}),d.jsx(lC,{}),d.jsx(FC,{}),d.jsx(UC,{})]})},JC=S.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: black;

  @media (max-width: 1400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,vo=S.div`
  flex: 1;
  margin-right: 20px;
  text-align: left; /* Выравнивание текста по левому краю */
`,es=S.h4`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: left; /* Выравнивание текста по левому краю */
`,ts=S.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,ns=S.li`
  margin-bottom: 5px;
  text-align: left; /* Выравнивание текста по левому краю */
`,eO=S.p`
  font-size: 16px;
  text-align: left; /* Выравнивание текста по левому краю */
`,Sn={text:"Our vision is to provide convenience and help increase your sales business.",nav:{about:{title:"About",links:[{name:"How it works",href:"https://example.com/how-it-works"},{name:"Featured",href:"https://example.com/featured"},{name:"Partnership",href:"https://example.com/partnership"},{name:"Business Relation",href:"https://example.com/business-relation"}]},community:{title:"Community",links:[{name:"Events",href:"https://example.com/events"},{name:"Blog",href:"https://example.com/blog"},{name:"Podcast",href:"https://example.com/podcast"},{name:"Invite a friend",href:"https://example.com/invite-friend"}]},socials:{title:"Socials",links:[{name:"Discord",href:"https://example.com/discord"},{name:"Instagram",href:"https://example.com/instagram"},{name:"Twitter",href:"https://example.com/twitter"},{name:"Facebook",href:"https://example.com/facebook"}]}}};function tO(){return d.jsxs(JC,{children:[d.jsxs(vo,{children:[d.jsx(lm,{}),d.jsx(eO,{children:Sn.text}),d.jsx(am,{type:"dark"})]}),d.jsxs(vo,{children:[d.jsx(es,{children:Sn.nav.about.title}),d.jsx(ts,{children:Sn.nav.about.links.map(e=>d.jsx(ns,{children:d.jsx(ii,{color:"pink",href:e.href,target:"_blank",rel:"noopener noreferrer",children:e.name})},e.name))})]}),d.jsxs(vo,{children:[d.jsx(es,{children:Sn.nav.community.title}),d.jsx(ts,{children:Sn.nav.community.links.map(e=>d.jsx(ns,{children:d.jsx(ii,{color:"pink",href:e.href,target:"_blank",rel:"noopener noreferrer",children:e.name})},e.name))})]}),d.jsxs(vo,{children:[d.jsx(es,{children:Sn.nav.socials.title}),d.jsx(ts,{children:Sn.nav.socials.links.map(e=>d.jsx(ns,{children:d.jsx(ii,{color:"pink",href:e.href,target:"_blank",rel:"noopener noreferrer",children:e.name})},e.name))})]})]})}const wp=[{id:"1",title:"How it Works"},{id:"2",title:"Photo"},{id:"3",title:"Products and Services"},{id:"4",title:"Use Cases of Our Products"}],nO=()=>d.jsxs(d.Fragment,{children:[d.jsx(mx,{sections:wp}),d.jsx(e1,{}),wp.map(e=>e.id==="1"?d.jsx(Qr,{name:e.id,children:d.jsx(Ax,{})},e.id):e.id==="2"?d.jsx(Qr,{name:e.id,children:d.jsx(V_,{})},e.id):e.id==="3"?d.jsx(Qr,{name:e.id,children:d.jsx(L_,{})},e.id):e.id==="4"?d.jsx(Qr,{name:e.id,children:d.jsx(ZC,{})},e.id):null),d.jsx(tO,{})]});rs.createRoot(document.getElementById("root")).render(d.jsx(Z.StrictMode,{children:d.jsx(nO,{})}));
