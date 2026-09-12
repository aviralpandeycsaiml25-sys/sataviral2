var PM=Object.defineProperty;var LM=(t,e,n)=>e in t?PM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Xe=(t,e,n)=>LM(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function NM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yv={exports:{}},Hu={},Sv={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=Symbol.for("react.element"),DM=Symbol.for("react.portal"),IM=Symbol.for("react.fragment"),FM=Symbol.for("react.strict_mode"),UM=Symbol.for("react.profiler"),kM=Symbol.for("react.provider"),OM=Symbol.for("react.context"),zM=Symbol.for("react.forward_ref"),BM=Symbol.for("react.suspense"),VM=Symbol.for("react.memo"),HM=Symbol.for("react.lazy"),Dg=Symbol.iterator;function GM(t){return t===null||typeof t!="object"?null:(t=Dg&&t[Dg]||t["@@iterator"],typeof t=="function"?t:null)}var bv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mv=Object.assign,wv={};function ko(t,e,n){this.props=t,this.context=e,this.refs=wv,this.updater=n||bv}ko.prototype.isReactComponent={};ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ev(){}Ev.prototype=ko.prototype;function Hp(t,e,n){this.props=t,this.context=e,this.refs=wv,this.updater=n||bv}var Gp=Hp.prototype=new Ev;Gp.constructor=Hp;Mv(Gp,ko.prototype);Gp.isPureReactComponent=!0;var Ig=Array.isArray,Tv=Object.prototype.hasOwnProperty,Wp={current:null},Av={key:!0,ref:!0,__self:!0,__source:!0};function Cv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tv.call(e,i)&&!Av.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ul,type:t,key:s,ref:o,props:r,_owner:Wp.current}}function WM(t,e){return{$$typeof:ul,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ul}function jM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fg=/\/+/g;function _d(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jM(""+t.key):e.toString(36)}function Ac(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ul:case DM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+_d(o,0):i,Ig(r)?(n="",t!=null&&(n=t.replace(Fg,"$&/")+"/"),Ac(r,e,n,"",function(c){return c})):r!=null&&(jp(r)&&(r=WM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Fg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ig(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+_d(s,a);o+=Ac(s,e,n,l,r)}else if(l=GM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+_d(s,a++),o+=Ac(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sl(t,e,n){if(t==null)return t;var i=[],r=0;return Ac(t,i,"","",function(s){return e.call(n,s,r++)}),i}function XM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},Cc={transition:null},$M={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:Cc,ReactCurrentOwner:Wp};function Rv(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Sl,forEach:function(t,e,n){Sl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sl(t,function(){e++}),e},toArray:function(t){return Sl(t,function(e){return e})||[]},only:function(t){if(!jp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=ko;Ke.Fragment=IM;Ke.Profiler=UM;Ke.PureComponent=Hp;Ke.StrictMode=FM;Ke.Suspense=BM;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$M;Ke.act=Rv;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tv.call(e,l)&&!Av.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ul,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t){return t={$$typeof:OM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kM,_context:t},t.Consumer=t};Ke.createElement=Cv;Ke.createFactory=function(t){var e=Cv.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:zM,render:t}};Ke.isValidElement=jp;Ke.lazy=function(t){return{$$typeof:HM,_payload:{_status:-1,_result:t},_init:XM}};Ke.memo=function(t,e){return{$$typeof:VM,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=Cc.transition;Cc.transition={};try{t()}finally{Cc.transition=e}};Ke.unstable_act=Rv;Ke.useCallback=function(t,e){return _n.current.useCallback(t,e)};Ke.useContext=function(t){return _n.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return _n.current.useEffect(t,e)};Ke.useId=function(){return _n.current.useId()};Ke.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return _n.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};Ke.useRef=function(t){return _n.current.useRef(t)};Ke.useState=function(t){return _n.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return _n.current.useTransition()};Ke.version="18.3.1";Sv.exports=Ke;var oe=Sv.exports;const YM=NM(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qM=oe,KM=Symbol.for("react.element"),ZM=Symbol.for("react.fragment"),QM=Object.prototype.hasOwnProperty,JM=qM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,e1={key:!0,ref:!0,__self:!0,__source:!0};function Pv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)QM.call(e,i)&&!e1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:KM,type:t,key:s,ref:o,props:r,_owner:JM.current}}Hu.Fragment=ZM;Hu.jsx=Pv;Hu.jsxs=Pv;yv.exports=Hu;var w=yv.exports,Vf={},Lv={exports:{}},zn={},Nv={exports:{}},Dv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,z){var G=V.length;V.push(z);e:for(;0<G;){var Z=G-1>>>1,ae=V[Z];if(0<r(ae,z))V[Z]=z,V[G]=ae,G=Z;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var z=V[0],G=V.pop();if(G!==z){V[0]=G;e:for(var Z=0,ae=V.length,ve=ae>>>1;Z<ve;){var Ue=2*(Z+1)-1,Ie=V[Ue],Ne=Ue+1,K=V[Ne];if(0>r(Ie,G))Ne<ae&&0>r(K,Ie)?(V[Z]=K,V[Ne]=G,Z=Ne):(V[Z]=Ie,V[Ue]=G,Z=Ue);else if(Ne<ae&&0>r(K,G))V[Z]=K,V[Ne]=G,Z=Ne;else break e}}return z}function r(V,z){var G=V.sortIndex-z.sortIndex;return G!==0?G:V.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=V)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function y(V){if(v=!1,S(V),!g)if(n(l)!==null)g=!0,Y(M);else{var z=n(c);z!==null&&H(y,z.startTime-V)}}function M(V,z){g=!1,v&&(v=!1,h(_),_=-1),p=!0;var G=d;try{for(S(z),f=n(l);f!==null&&(!(f.expirationTime>z)||V&&!L());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,d=f.priorityLevel;var ae=Z(f.expirationTime<=z);z=t.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&i(l),S(z)}else i(l);f=n(l)}if(f!==null)var ve=!0;else{var Ue=n(c);Ue!==null&&H(y,Ue.startTime-z),ve=!1}return ve}finally{f=null,d=G,p=!1}}var E=!1,C=null,_=-1,A=5,R=-1;function L(){return!(t.unstable_now()-R<A)}function D(){if(C!==null){var V=t.unstable_now();R=V;var z=!0;try{z=C(!0,V)}finally{z?B():(E=!1,C=null)}}else E=!1}var B;if(typeof x=="function")B=function(){x(D)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,O=I.port2;I.port1.onmessage=D,B=function(){O.postMessage(null)}}else B=function(){m(D,0)};function Y(V){C=V,E||(E=!0,B())}function H(V,z){_=m(function(){V(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Y(M))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var G=d;d=z;try{return V()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var G=d;d=V;try{return z()}finally{d=G}},t.unstable_scheduleCallback=function(V,z,G){var Z=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Z+G:Z):G=Z,V){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=G+ae,V={id:u++,callback:z,priorityLevel:V,startTime:G,expirationTime:ae,sortIndex:-1},G>Z?(V.sortIndex=G,e(c,V),n(l)===null&&V===n(c)&&(v?(h(_),_=-1):v=!0,H(y,G-Z))):(V.sortIndex=ae,e(l,V),g||p||(g=!0,Y(M))),V},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(V){var z=d;return function(){var G=d;d=z;try{return V.apply(this,arguments)}finally{d=G}}}})(Dv);Nv.exports=Dv;var t1=Nv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1=oe,On=t1;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iv=new Set,Oa={};function Rs(t,e){Eo(t,e),Eo(t+"Capture",e)}function Eo(t,e){for(Oa[t]=e,t=0;t<e.length;t++)Iv.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hf=Object.prototype.hasOwnProperty,i1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ug={},kg={};function r1(t){return Hf.call(kg,t)?!0:Hf.call(Ug,t)?!1:i1.test(t)?kg[t]=!0:(Ug[t]=!0,!1)}function s1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function o1(t,e,n,i){if(e===null||typeof e>"u"||s1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tn[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tn[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tn[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tn[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tn[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tn[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tn[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tn[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tn[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xp=/[\-:]([a-z])/g;function $p(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xp,$p);tn[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xp,$p);tn[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xp,$p);tn[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tn[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});tn.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tn[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yp(t,e,n,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o1(e,n,r,i)&&(n=null),i||r===null?r1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ar=n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bl=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),Qs=Symbol.for("react.fragment"),qp=Symbol.for("react.strict_mode"),Gf=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),Uv=Symbol.for("react.context"),Kp=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),jf=Symbol.for("react.suspense_list"),Zp=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),kv=Symbol.for("react.offscreen"),Og=Symbol.iterator;function Go(t){return t===null||typeof t!="object"?null:(t=Og&&t[Og]||t["@@iterator"],typeof t=="function"?t:null)}var Pt=Object.assign,vd;function ca(t){if(vd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vd=e&&e[1]||""}return`
`+vd+t}var yd=!1;function Sd(t,e){if(!t||yd)return"";yd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function a1(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=Sd(t.type,!1),t;case 11:return t=Sd(t.type.render,!1),t;case 1:return t=Sd(t.type,!0),t;default:return""}}function Xf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qs:return"Fragment";case Zs:return"Portal";case Gf:return"Profiler";case qp:return"StrictMode";case Wf:return"Suspense";case jf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uv:return(t.displayName||"Context")+".Consumer";case Fv:return(t._context.displayName||"Context")+".Provider";case Kp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zp:return e=t.displayName||null,e!==null?e:Xf(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return Xf(t(e))}catch{}}return null}function l1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xf(e);case 8:return e===qp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ov(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c1(t){var e=Ov(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ml(t){t._valueTracker||(t._valueTracker=c1(t))}function zv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ov(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $f(t,e){var n=e.checked;return Pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bv(t,e){e=e.checked,e!=null&&Yp(t,"checked",e,!1)}function Yf(t,e){Bv(t,e);var n=zr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qf(t,e.type,n):e.hasOwnProperty("defaultValue")&&qf(t,e.type,zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qf(t,e,n){(e!=="number"||Jc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function xo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+zr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Kf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(ua(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zr(n)}}function Vv(t,e){var n=zr(e.value),i=zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Hg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wl,Gv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wl=wl||document.createElement("div"),wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u1=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){u1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function Wv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function jv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Wv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var d1=Pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qf(t,e){if(e){if(d1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Jf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=null;function Qp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var th=null,_o=null,vo=null;function Gg(t){if(t=hl(t)){if(typeof th!="function")throw Error(se(280));var e=t.stateNode;e&&(e=$u(e),th(t.stateNode,t.type,e))}}function Xv(t){_o?vo?vo.push(t):vo=[t]:_o=t}function $v(){if(_o){var t=_o,e=vo;if(vo=_o=null,Gg(t),e)for(t=0;t<e.length;t++)Gg(e[t])}}function Yv(t,e){return t(e)}function qv(){}var bd=!1;function Kv(t,e,n){if(bd)return t(e,n);bd=!0;try{return Yv(t,e,n)}finally{bd=!1,(_o!==null||vo!==null)&&(qv(),$v())}}function Ba(t,e){var n=t.stateNode;if(n===null)return null;var i=$u(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var nh=!1;if(tr)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){nh=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{nh=!1}function f1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Sa=!1,eu=null,tu=!1,ih=null,h1={onError:function(t){Sa=!0,eu=t}};function p1(t,e,n,i,r,s,o,a,l){Sa=!1,eu=null,f1.apply(h1,arguments)}function m1(t,e,n,i,r,s,o,a,l){if(p1.apply(this,arguments),Sa){if(Sa){var c=eu;Sa=!1,eu=null}else throw Error(se(198));tu||(tu=!0,ih=c)}}function Ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wg(t){if(Ps(t)!==t)throw Error(se(188))}function g1(t){var e=t.alternate;if(!e){if(e=Ps(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wg(r),t;if(s===i)return Wg(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Qv(t){return t=g1(t),t!==null?Jv(t):null}function Jv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jv(t);if(e!==null)return e;t=t.sibling}return null}var ey=On.unstable_scheduleCallback,jg=On.unstable_cancelCallback,x1=On.unstable_shouldYield,_1=On.unstable_requestPaint,Ft=On.unstable_now,v1=On.unstable_getCurrentPriorityLevel,Jp=On.unstable_ImmediatePriority,ty=On.unstable_UserBlockingPriority,nu=On.unstable_NormalPriority,y1=On.unstable_LowPriority,ny=On.unstable_IdlePriority,Gu=null,Ri=null;function S1(t){if(Ri&&typeof Ri.onCommitFiberRoot=="function")try{Ri.onCommitFiberRoot(Gu,t,void 0,(t.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:w1,b1=Math.log,M1=Math.LN2;function w1(t){return t>>>=0,t===0?32:31-(b1(t)/M1|0)|0}var El=64,Tl=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function iu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=da(a):(s&=o,s!==0&&(i=da(s)))}else o=n&~r,o!==0?i=da(o):s!==0&&(i=da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-di(e),r=1<<n,i|=t[n],e&=~r;return i}function E1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-di(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=E1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iy(){var t=El;return El<<=1,!(El&4194240)&&(El=64),t}function Md(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function dl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-di(e),t[e]=n}function A1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-di(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function em(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ft=0;function ry(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sy,tm,oy,ay,ly,sh=!1,Al=[],Rr=null,Pr=null,Lr=null,Va=new Map,Ha=new Map,Sr=[],C1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xg(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function jo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=hl(e),e!==null&&tm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function R1(t,e,n,i,r){switch(e){case"focusin":return Rr=jo(Rr,t,e,n,i,r),!0;case"dragenter":return Pr=jo(Pr,t,e,n,i,r),!0;case"mouseover":return Lr=jo(Lr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Va.set(s,jo(Va.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ha.set(s,jo(Ha.get(s)||null,t,e,n,i,r)),!0}return!1}function cy(t){var e=cs(t.target);if(e!==null){var n=Ps(e);if(n!==null){if(e=n.tag,e===13){if(e=Zv(n),e!==null){t.blockedOn=e,ly(t.priority,function(){oy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);eh=i,n.target.dispatchEvent(i),eh=null}else return e=hl(n),e!==null&&tm(e),t.blockedOn=n,!1;e.shift()}return!0}function $g(t,e,n){Rc(t)&&n.delete(e)}function P1(){sh=!1,Rr!==null&&Rc(Rr)&&(Rr=null),Pr!==null&&Rc(Pr)&&(Pr=null),Lr!==null&&Rc(Lr)&&(Lr=null),Va.forEach($g),Ha.forEach($g)}function Xo(t,e){t.blockedOn===e&&(t.blockedOn=null,sh||(sh=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,P1)))}function Ga(t){function e(r){return Xo(r,t)}if(0<Al.length){Xo(Al[0],t);for(var n=1;n<Al.length;n++){var i=Al[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Rr!==null&&Xo(Rr,t),Pr!==null&&Xo(Pr,t),Lr!==null&&Xo(Lr,t),Va.forEach(e),Ha.forEach(e),n=0;n<Sr.length;n++)i=Sr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)cy(n),n.blockedOn===null&&Sr.shift()}var yo=ar.ReactCurrentBatchConfig,ru=!0;function L1(t,e,n,i){var r=ft,s=yo.transition;yo.transition=null;try{ft=1,nm(t,e,n,i)}finally{ft=r,yo.transition=s}}function N1(t,e,n,i){var r=ft,s=yo.transition;yo.transition=null;try{ft=4,nm(t,e,n,i)}finally{ft=r,yo.transition=s}}function nm(t,e,n,i){if(ru){var r=oh(t,e,n,i);if(r===null)Dd(t,e,i,su,n),Xg(t,i);else if(R1(r,t,e,n,i))i.stopPropagation();else if(Xg(t,i),e&4&&-1<C1.indexOf(t)){for(;r!==null;){var s=hl(r);if(s!==null&&sy(s),s=oh(t,e,n,i),s===null&&Dd(t,e,i,su,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Dd(t,e,i,null,n)}}var su=null;function oh(t,e,n,i){if(su=null,t=Qp(i),t=cs(t),t!==null)if(e=Ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return su=t,null}function uy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v1()){case Jp:return 1;case ty:return 4;case nu:case y1:return 16;case ny:return 536870912;default:return 16}default:return 16}}var wr=null,im=null,Pc=null;function dy(){if(Pc)return Pc;var t,e=im,n=e.length,i,r="value"in wr?wr.value:wr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pc=r.slice(t,1<i?1-i:void 0)}function Lc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cl(){return!0}function Yg(){return!1}function Bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cl:Yg,this.isPropagationStopped=Yg,this}return Pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),e}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rm=Bn(Oo),fl=Pt({},Oo,{view:0,detail:0}),D1=Bn(fl),wd,Ed,$o,Wu=Pt({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$o&&($o&&t.type==="mousemove"?(wd=t.screenX-$o.screenX,Ed=t.screenY-$o.screenY):Ed=wd=0,$o=t),wd)},movementY:function(t){return"movementY"in t?t.movementY:Ed}}),qg=Bn(Wu),I1=Pt({},Wu,{dataTransfer:0}),F1=Bn(I1),U1=Pt({},fl,{relatedTarget:0}),Td=Bn(U1),k1=Pt({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),O1=Bn(k1),z1=Pt({},Oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),B1=Bn(z1),V1=Pt({},Oo,{data:0}),Kg=Bn(V1),H1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=W1[t])?!!e[t]:!1}function sm(){return j1}var X1=Pt({},fl,{key:function(t){if(t.key){var e=H1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?G1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sm,charCode:function(t){return t.type==="keypress"?Lc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$1=Bn(X1),Y1=Pt({},Wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zg=Bn(Y1),q1=Pt({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sm}),K1=Bn(q1),Z1=Pt({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q1=Bn(Z1),J1=Pt({},Wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ew=Bn(J1),tw=[9,13,27,32],om=tr&&"CompositionEvent"in window,ba=null;tr&&"documentMode"in document&&(ba=document.documentMode);var nw=tr&&"TextEvent"in window&&!ba,fy=tr&&(!om||ba&&8<ba&&11>=ba),Qg=" ",Jg=!1;function hy(t,e){switch(t){case"keyup":return tw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function py(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Js=!1;function iw(t,e){switch(t){case"compositionend":return py(e);case"keypress":return e.which!==32?null:(Jg=!0,Qg);case"textInput":return t=e.data,t===Qg&&Jg?null:t;default:return null}}function rw(t,e){if(Js)return t==="compositionend"||!om&&hy(t,e)?(t=dy(),Pc=im=wr=null,Js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fy&&e.locale!=="ko"?null:e.data;default:return null}}var sw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sw[t.type]:e==="textarea"}function my(t,e,n,i){Xv(i),e=ou(e,"onChange"),0<e.length&&(n=new rm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ma=null,Wa=null;function ow(t){Ty(t,0)}function ju(t){var e=no(t);if(zv(e))return t}function aw(t,e){if(t==="change")return e}var gy=!1;if(tr){var Ad;if(tr){var Cd="oninput"in document;if(!Cd){var t0=document.createElement("div");t0.setAttribute("oninput","return;"),Cd=typeof t0.oninput=="function"}Ad=Cd}else Ad=!1;gy=Ad&&(!document.documentMode||9<document.documentMode)}function n0(){Ma&&(Ma.detachEvent("onpropertychange",xy),Wa=Ma=null)}function xy(t){if(t.propertyName==="value"&&ju(Wa)){var e=[];my(e,Wa,t,Qp(t)),Kv(ow,e)}}function lw(t,e,n){t==="focusin"?(n0(),Ma=e,Wa=n,Ma.attachEvent("onpropertychange",xy)):t==="focusout"&&n0()}function cw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ju(Wa)}function uw(t,e){if(t==="click")return ju(e)}function dw(t,e){if(t==="input"||t==="change")return ju(e)}function fw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pi=typeof Object.is=="function"?Object.is:fw;function ja(t,e){if(pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Hf.call(e,r)||!pi(t[r],e[r]))return!1}return!0}function i0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function r0(t,e){var n=i0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=i0(n)}}function _y(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_y(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vy(){for(var t=window,e=Jc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jc(t.document)}return e}function am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hw(t){var e=vy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_y(n.ownerDocument.documentElement,n)){if(i!==null&&am(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=r0(n,s);var o=r0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pw=tr&&"documentMode"in document&&11>=document.documentMode,eo=null,ah=null,wa=null,lh=!1;function s0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lh||eo==null||eo!==Jc(i)||(i=eo,"selectionStart"in i&&am(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wa&&ja(wa,i)||(wa=i,i=ou(ah,"onSelect"),0<i.length&&(e=new rm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=eo)))}function Rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var to={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},Rd={},yy={};tr&&(yy=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Xu(t){if(Rd[t])return Rd[t];if(!to[t])return t;var e=to[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yy)return Rd[t]=e[n];return t}var Sy=Xu("animationend"),by=Xu("animationiteration"),My=Xu("animationstart"),wy=Xu("transitionend"),Ey=new Map,o0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){Ey.set(t,e),Rs(e,[t])}for(var Pd=0;Pd<o0.length;Pd++){var Ld=o0[Pd],mw=Ld.toLowerCase(),gw=Ld[0].toUpperCase()+Ld.slice(1);Gr(mw,"on"+gw)}Gr(Sy,"onAnimationEnd");Gr(by,"onAnimationIteration");Gr(My,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(wy,"onTransitionEnd");Eo("onMouseEnter",["mouseout","mouseover"]);Eo("onMouseLeave",["mouseout","mouseover"]);Eo("onPointerEnter",["pointerout","pointerover"]);Eo("onPointerLeave",["pointerout","pointerover"]);Rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xw=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function a0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,m1(i,e,void 0,t),t.currentTarget=null}function Ty(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;a0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;a0(r,a,c),s=l}}}if(tu)throw t=ih,tu=!1,ih=null,t}function St(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var i=t+"__bubble";n.has(i)||(Ay(e,t,2,!1),n.add(i))}function Nd(t,e,n){var i=0;e&&(i|=4),Ay(n,t,i,e)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[Pl]){t[Pl]=!0,Iv.forEach(function(n){n!=="selectionchange"&&(xw.has(n)||Nd(n,!1,t),Nd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pl]||(e[Pl]=!0,Nd("selectionchange",!1,e))}}function Ay(t,e,n,i){switch(uy(e)){case 1:var r=L1;break;case 4:r=N1;break;default:r=nm}n=r.bind(null,e,n,t),r=void 0,!nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Dd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=cs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Kv(function(){var c=s,u=Qp(n),f=[];e:{var d=Ey.get(t);if(d!==void 0){var p=rm,g=t;switch(t){case"keypress":if(Lc(n)===0)break e;case"keydown":case"keyup":p=$1;break;case"focusin":g="focus",p=Td;break;case"focusout":g="blur",p=Td;break;case"beforeblur":case"afterblur":p=Td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=F1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=K1;break;case Sy:case by:case My:p=O1;break;case wy:p=Q1;break;case"scroll":p=D1;break;case"wheel":p=ew;break;case"copy":case"cut":case"paste":p=B1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zg}var v=(e&4)!==0,m=!v&&t==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var x=c,S;x!==null;){S=x;var y=S.stateNode;if(S.tag===5&&y!==null&&(S=y,h!==null&&(y=Ba(x,h),y!=null&&v.push($a(x,y,S)))),m)break;x=x.return}0<v.length&&(d=new p(d,g,null,n,u),f.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==eh&&(g=n.relatedTarget||n.fromElement)&&(cs(g)||g[nr]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?cs(g):null,g!==null&&(m=Ps(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=qg,y="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(v=Zg,y="onPointerLeave",h="onPointerEnter",x="pointer"),m=p==null?d:no(p),S=g==null?d:no(g),d=new v(y,x+"leave",p,n,u),d.target=m,d.relatedTarget=S,y=null,cs(u)===c&&(v=new v(h,x+"enter",g,n,u),v.target=S,v.relatedTarget=m,y=v),m=y,p&&g)t:{for(v=p,h=g,x=0,S=v;S;S=Is(S))x++;for(S=0,y=h;y;y=Is(y))S++;for(;0<x-S;)v=Is(v),x--;for(;0<S-x;)h=Is(h),S--;for(;x--;){if(v===h||h!==null&&v===h.alternate)break t;v=Is(v),h=Is(h)}v=null}else v=null;p!==null&&l0(f,d,p,v,!1),g!==null&&m!==null&&l0(f,m,g,v,!0)}}e:{if(d=c?no(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var M=aw;else if(e0(d))if(gy)M=dw;else{M=cw;var E=lw}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=uw);if(M&&(M=M(t,c))){my(f,M,n,u);break e}E&&E(t,d,c),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&qf(d,"number",d.value)}switch(E=c?no(c):window,t){case"focusin":(e0(E)||E.contentEditable==="true")&&(eo=E,ah=c,wa=null);break;case"focusout":wa=ah=eo=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,s0(f,n,u);break;case"selectionchange":if(pw)break;case"keydown":case"keyup":s0(f,n,u)}var C;if(om)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Js?hy(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(fy&&n.locale!=="ko"&&(Js||_!=="onCompositionStart"?_==="onCompositionEnd"&&Js&&(C=dy()):(wr=u,im="value"in wr?wr.value:wr.textContent,Js=!0)),E=ou(c,_),0<E.length&&(_=new Kg(_,t,null,n,u),f.push({event:_,listeners:E}),C?_.data=C:(C=py(n),C!==null&&(_.data=C)))),(C=nw?iw(t,n):rw(t,n))&&(c=ou(c,"onBeforeInput"),0<c.length&&(u=new Kg("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=C))}Ty(f,e)})}function $a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ou(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ba(t,n),s!=null&&i.unshift($a(t,s,r)),s=Ba(t,e),s!=null&&i.push($a(t,s,r))),t=t.return}return i}function Is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function l0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ba(n,s),l!=null&&o.unshift($a(n,l,a))):r||(l=Ba(n,s),l!=null&&o.push($a(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _w=/\r\n?/g,vw=/\u0000|\uFFFD/g;function c0(t){return(typeof t=="string"?t:""+t).replace(_w,`
`).replace(vw,"")}function Ll(t,e,n){if(e=c0(e),c0(t)!==e&&n)throw Error(se(425))}function au(){}var ch=null,uh=null;function dh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,yw=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,Sw=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(t){return u0.resolve(null).then(t).catch(bw)}:fh;function bw(t){setTimeout(function(){throw t})}function Id(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ga(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ga(e)}function Nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function d0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zo=Math.random().toString(36).slice(2),Ei="__reactFiber$"+zo,Ya="__reactProps$"+zo,nr="__reactContainer$"+zo,hh="__reactEvents$"+zo,Mw="__reactListeners$"+zo,ww="__reactHandles$"+zo;function cs(t){var e=t[Ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[Ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=d0(t);t!==null;){if(n=t[Ei])return n;t=d0(t)}return e}t=n,n=t.parentNode}return null}function hl(t){return t=t[Ei]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function no(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function $u(t){return t[Ya]||null}var ph=[],io=-1;function Wr(t){return{current:t}}function Mt(t){0>io||(t.current=ph[io],ph[io]=null,io--)}function vt(t,e){io++,ph[io]=t.current,t.current=e}var Br={},fn=Wr(Br),En=Wr(!1),vs=Br;function To(t,e){var n=t.type.contextTypes;if(!n)return Br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Tn(t){return t=t.childContextTypes,t!=null}function lu(){Mt(En),Mt(fn)}function f0(t,e,n){if(fn.current!==Br)throw Error(se(168));vt(fn,e),vt(En,n)}function Cy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,l1(t)||"Unknown",r));return Pt({},n,i)}function cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,vs=fn.current,vt(fn,t),vt(En,En.current),!0}function h0(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Cy(t,e,vs),i.__reactInternalMemoizedMergedChildContext=t,Mt(En),Mt(fn),vt(fn,t)):Mt(En),vt(En,n)}var ji=null,Yu=!1,Fd=!1;function Ry(t){ji===null?ji=[t]:ji.push(t)}function Ew(t){Yu=!0,Ry(t)}function jr(){if(!Fd&&ji!==null){Fd=!0;var t=0,e=ft;try{var n=ji;for(ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ji=null,Yu=!1}catch(r){throw ji!==null&&(ji=ji.slice(t+1)),ey(Jp,jr),r}finally{ft=e,Fd=!1}}return null}var ro=[],so=0,uu=null,du=0,jn=[],Xn=0,ys=null,Yi=1,qi="";function rs(t,e){ro[so++]=du,ro[so++]=uu,uu=t,du=e}function Py(t,e,n){jn[Xn++]=Yi,jn[Xn++]=qi,jn[Xn++]=ys,ys=t;var i=Yi;t=qi;var r=32-di(i)-1;i&=~(1<<r),n+=1;var s=32-di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Yi=1<<32-di(e)+r|n<<r|i,qi=s+t}else Yi=1<<s|n<<r|i,qi=t}function lm(t){t.return!==null&&(rs(t,1),Py(t,1,0))}function cm(t){for(;t===uu;)uu=ro[--so],ro[so]=null,du=ro[--so],ro[so]=null;for(;t===ys;)ys=jn[--Xn],jn[Xn]=null,qi=jn[--Xn],jn[Xn]=null,Yi=jn[--Xn],jn[Xn]=null}var kn=null,In=null,Et=!1,ai=null;function Ly(t,e){var n=Yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function p0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kn=t,In=Nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kn=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ys!==null?{id:Yi,overflow:qi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kn=t,In=null,!0):!1;default:return!1}}function mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gh(t){if(Et){var e=In;if(e){var n=e;if(!p0(t,e)){if(mh(t))throw Error(se(418));e=Nr(n.nextSibling);var i=kn;e&&p0(t,e)?Ly(i,n):(t.flags=t.flags&-4097|2,Et=!1,kn=t)}}else{if(mh(t))throw Error(se(418));t.flags=t.flags&-4097|2,Et=!1,kn=t}}}function m0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function Nl(t){if(t!==kn)return!1;if(!Et)return m0(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dh(t.type,t.memoizedProps)),e&&(e=In)){if(mh(t))throw Ny(),Error(se(418));for(;e;)Ly(t,e),e=Nr(e.nextSibling)}if(m0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=Nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=kn?Nr(t.stateNode.nextSibling):null;return!0}function Ny(){for(var t=In;t;)t=Nr(t.nextSibling)}function Ao(){In=kn=null,Et=!1}function um(t){ai===null?ai=[t]:ai.push(t)}var Tw=ar.ReactCurrentBatchConfig;function Yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Dl(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function g0(t){var e=t._init;return e(t._payload)}function Dy(t){function e(h,x){if(t){var S=h.deletions;S===null?(h.deletions=[x],h.flags|=16):S.push(x)}}function n(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=Ur(h,x),h.index=0,h.sibling=null,h}function s(h,x,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<x?(h.flags|=2,x):S):(h.flags|=2,x)):(h.flags|=1048576,x)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,x,S,y){return x===null||x.tag!==6?(x=Hd(S,h.mode,y),x.return=h,x):(x=r(x,S),x.return=h,x)}function l(h,x,S,y){var M=S.type;return M===Qs?u(h,x,S.props.children,y,S.key):x!==null&&(x.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_r&&g0(M)===x.type)?(y=r(x,S.props),y.ref=Yo(h,x,S),y.return=h,y):(y=Oc(S.type,S.key,S.props,null,h.mode,y),y.ref=Yo(h,x,S),y.return=h,y)}function c(h,x,S,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=Gd(S,h.mode,y),x.return=h,x):(x=r(x,S.children||[]),x.return=h,x)}function u(h,x,S,y,M){return x===null||x.tag!==7?(x=xs(S,h.mode,y,M),x.return=h,x):(x=r(x,S),x.return=h,x)}function f(h,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Hd(""+x,h.mode,S),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case bl:return S=Oc(x.type,x.key,x.props,null,h.mode,S),S.ref=Yo(h,null,x),S.return=h,S;case Zs:return x=Gd(x,h.mode,S),x.return=h,x;case _r:var y=x._init;return f(h,y(x._payload),S)}if(ua(x)||Go(x))return x=xs(x,h.mode,S,null),x.return=h,x;Dl(h,x)}return null}function d(h,x,S,y){var M=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:a(h,x,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case bl:return S.key===M?l(h,x,S,y):null;case Zs:return S.key===M?c(h,x,S,y):null;case _r:return M=S._init,d(h,x,M(S._payload),y)}if(ua(S)||Go(S))return M!==null?null:u(h,x,S,y,null);Dl(h,S)}return null}function p(h,x,S,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(S)||null,a(x,h,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case bl:return h=h.get(y.key===null?S:y.key)||null,l(x,h,y,M);case Zs:return h=h.get(y.key===null?S:y.key)||null,c(x,h,y,M);case _r:var E=y._init;return p(h,x,S,E(y._payload),M)}if(ua(y)||Go(y))return h=h.get(S)||null,u(x,h,y,M,null);Dl(x,y)}return null}function g(h,x,S,y){for(var M=null,E=null,C=x,_=x=0,A=null;C!==null&&_<S.length;_++){C.index>_?(A=C,C=null):A=C.sibling;var R=d(h,C,S[_],y);if(R===null){C===null&&(C=A);break}t&&C&&R.alternate===null&&e(h,C),x=s(R,x,_),E===null?M=R:E.sibling=R,E=R,C=A}if(_===S.length)return n(h,C),Et&&rs(h,_),M;if(C===null){for(;_<S.length;_++)C=f(h,S[_],y),C!==null&&(x=s(C,x,_),E===null?M=C:E.sibling=C,E=C);return Et&&rs(h,_),M}for(C=i(h,C);_<S.length;_++)A=p(C,h,_,S[_],y),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?_:A.key),x=s(A,x,_),E===null?M=A:E.sibling=A,E=A);return t&&C.forEach(function(L){return e(h,L)}),Et&&rs(h,_),M}function v(h,x,S,y){var M=Go(S);if(typeof M!="function")throw Error(se(150));if(S=M.call(S),S==null)throw Error(se(151));for(var E=M=null,C=x,_=x=0,A=null,R=S.next();C!==null&&!R.done;_++,R=S.next()){C.index>_?(A=C,C=null):A=C.sibling;var L=d(h,C,R.value,y);if(L===null){C===null&&(C=A);break}t&&C&&L.alternate===null&&e(h,C),x=s(L,x,_),E===null?M=L:E.sibling=L,E=L,C=A}if(R.done)return n(h,C),Et&&rs(h,_),M;if(C===null){for(;!R.done;_++,R=S.next())R=f(h,R.value,y),R!==null&&(x=s(R,x,_),E===null?M=R:E.sibling=R,E=R);return Et&&rs(h,_),M}for(C=i(h,C);!R.done;_++,R=S.next())R=p(C,h,_,R.value,y),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?_:R.key),x=s(R,x,_),E===null?M=R:E.sibling=R,E=R);return t&&C.forEach(function(D){return e(h,D)}),Et&&rs(h,_),M}function m(h,x,S,y){if(typeof S=="object"&&S!==null&&S.type===Qs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case bl:e:{for(var M=S.key,E=x;E!==null;){if(E.key===M){if(M=S.type,M===Qs){if(E.tag===7){n(h,E.sibling),x=r(E,S.props.children),x.return=h,h=x;break e}}else if(E.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_r&&g0(M)===E.type){n(h,E.sibling),x=r(E,S.props),x.ref=Yo(h,E,S),x.return=h,h=x;break e}n(h,E);break}else e(h,E);E=E.sibling}S.type===Qs?(x=xs(S.props.children,h.mode,y,S.key),x.return=h,h=x):(y=Oc(S.type,S.key,S.props,null,h.mode,y),y.ref=Yo(h,x,S),y.return=h,h=y)}return o(h);case Zs:e:{for(E=S.key;x!==null;){if(x.key===E)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(h,x.sibling),x=r(x,S.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else e(h,x);x=x.sibling}x=Gd(S,h.mode,y),x.return=h,h=x}return o(h);case _r:return E=S._init,m(h,x,E(S._payload),y)}if(ua(S))return g(h,x,S,y);if(Go(S))return v(h,x,S,y);Dl(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(h,x.sibling),x=r(x,S),x.return=h,h=x):(n(h,x),x=Hd(S,h.mode,y),x.return=h,h=x),o(h)):n(h,x)}return m}var Co=Dy(!0),Iy=Dy(!1),fu=Wr(null),hu=null,oo=null,dm=null;function fm(){dm=oo=hu=null}function hm(t){var e=fu.current;Mt(fu),t._currentValue=e}function xh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function So(t,e){hu=t,dm=oo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wn=!0),t.firstContext=null)}function Zn(t){var e=t._currentValue;if(dm!==t)if(t={context:t,memoizedValue:e,next:null},oo===null){if(hu===null)throw Error(se(308));oo=t,hu.dependencies={lanes:0,firstContext:t}}else oo=oo.next=t;return e}var us=null;function pm(t){us===null?us=[t]:us.push(t)}function Fy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,pm(e)):(n.next=r.next,r.next=n),e.interleaved=n,ir(t,i)}function ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function mm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ir(t,n)}return r=i.interleaved,r===null?(e.next=e,pm(i)):(e.next=r.next,r.next=e),i.interleaved=e,ir(t,n)}function Nc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,em(t,n)}}function x0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pu(t,e,n,i){var r=t.updateQueue;vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=Pt({},f,d);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);bs|=o,t.lanes=o,t.memoizedState=f}}function _0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var pl={},Pi=Wr(pl),qa=Wr(pl),Ka=Wr(pl);function ds(t){if(t===pl)throw Error(se(174));return t}function gm(t,e){switch(vt(Ka,e),vt(qa,t),vt(Pi,pl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zf(e,t)}Mt(Pi),vt(Pi,e)}function Ro(){Mt(Pi),Mt(qa),Mt(Ka)}function ky(t){ds(Ka.current);var e=ds(Pi.current),n=Zf(e,t.type);e!==n&&(vt(qa,t),vt(Pi,n))}function xm(t){qa.current===t&&(Mt(Pi),Mt(qa))}var Tt=Wr(0);function mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ud=[];function _m(){for(var t=0;t<Ud.length;t++)Ud[t]._workInProgressVersionPrimary=null;Ud.length=0}var Dc=ar.ReactCurrentDispatcher,kd=ar.ReactCurrentBatchConfig,Ss=0,Ct=null,Vt=null,$t=null,gu=!1,Ea=!1,Za=0,Aw=0;function rn(){throw Error(se(321))}function vm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pi(t[n],e[n]))return!1;return!0}function ym(t,e,n,i,r,s){if(Ss=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dc.current=t===null||t.memoizedState===null?Lw:Nw,t=n(i,r),Ea){s=0;do{if(Ea=!1,Za=0,25<=s)throw Error(se(301));s+=1,$t=Vt=null,e.updateQueue=null,Dc.current=Dw,t=n(i,r)}while(Ea)}if(Dc.current=xu,e=Vt!==null&&Vt.next!==null,Ss=0,$t=Vt=Ct=null,gu=!1,e)throw Error(se(300));return t}function Sm(){var t=Za!==0;return Za=0,t}function bi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Ct.memoizedState=$t=t:$t=$t.next=t,$t}function Qn(){if(Vt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=$t===null?Ct.memoizedState:$t.next;if(e!==null)$t=e,Vt=t;else{if(t===null)throw Error(se(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},$t===null?Ct.memoizedState=$t=t:$t=$t.next=t}return $t}function Qa(t,e){return typeof e=="function"?e(t):e}function Od(t){var e=Qn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Ss&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Ct.lanes|=u,bs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,pi(i,e.memoizedState)||(wn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,bs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zd(t){var e=Qn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);pi(s,e.memoizedState)||(wn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Oy(){}function zy(t,e){var n=Ct,i=Qn(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,wn=!0),i=i.queue,bm(Hy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,Ja(9,Vy.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(se(349));Ss&30||By(n,e,r)}return r}function By(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vy(t,e,n,i){e.value=n,e.getSnapshot=i,Gy(e)&&Wy(t)}function Hy(t,e,n){return n(function(){Gy(e)&&Wy(t)})}function Gy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pi(t,n)}catch{return!0}}function Wy(t){var e=ir(t,1);e!==null&&fi(e,t,1,-1)}function v0(t){var e=bi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},e.queue=t,t=t.dispatch=Pw.bind(null,Ct,t),[e.memoizedState,t]}function Ja(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function jy(){return Qn().memoizedState}function Ic(t,e,n,i){var r=bi();Ct.flags|=t,r.memoizedState=Ja(1|e,n,void 0,i===void 0?null:i)}function qu(t,e,n,i){var r=Qn();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,i!==null&&vm(i,o.deps)){r.memoizedState=Ja(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=Ja(1|e,n,s,i)}function y0(t,e){return Ic(8390656,8,t,e)}function bm(t,e){return qu(2048,8,t,e)}function Xy(t,e){return qu(4,2,t,e)}function $y(t,e){return qu(4,4,t,e)}function Yy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qy(t,e,n){return n=n!=null?n.concat([t]):null,qu(4,4,Yy.bind(null,e,t),n)}function Mm(){}function Ky(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zy(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Qy(t,e,n){return Ss&21?(pi(n,e)||(n=iy(),Ct.lanes|=n,bs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=n)}function Cw(t,e){var n=ft;ft=n!==0&&4>n?n:4,t(!0);var i=kd.transition;kd.transition={};try{t(!1),e()}finally{ft=n,kd.transition=i}}function Jy(){return Qn().memoizedState}function Rw(t,e,n){var i=Fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},eS(t))tS(e,n);else if(n=Fy(t,e,n,i),n!==null){var r=xn();fi(n,t,i,r),nS(n,e,i)}}function Pw(t,e,n){var i=Fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(eS(t))tS(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,pi(a,o)){var l=e.interleaved;l===null?(r.next=r,pm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Fy(t,e,r,i),n!==null&&(r=xn(),fi(n,t,i,r),nS(n,e,i))}}function eS(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function tS(t,e){Ea=gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nS(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,em(t,n)}}var xu={readContext:Zn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},Lw={readContext:Zn,useCallback:function(t,e){return bi().memoizedState=[t,e===void 0?null:e],t},useContext:Zn,useEffect:y0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4194308,4,Yy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ic(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ic(4,2,t,e)},useMemo:function(t,e){var n=bi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=bi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Rw.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=bi();return t={current:t},e.memoizedState=t},useState:v0,useDebugValue:Mm,useDeferredValue:function(t){return bi().memoizedState=t},useTransition:function(){var t=v0(!1),e=t[0];return t=Cw.bind(null,t[1]),bi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=bi();if(Et){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Yt===null)throw Error(se(349));Ss&30||By(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,y0(Hy.bind(null,i,s,t),[t]),i.flags|=2048,Ja(9,Vy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=bi(),e=Yt.identifierPrefix;if(Et){var n=qi,i=Yi;n=(i&~(1<<32-di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Aw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Nw={readContext:Zn,useCallback:Ky,useContext:Zn,useEffect:bm,useImperativeHandle:qy,useInsertionEffect:Xy,useLayoutEffect:$y,useMemo:Zy,useReducer:Od,useRef:jy,useState:function(){return Od(Qa)},useDebugValue:Mm,useDeferredValue:function(t){var e=Qn();return Qy(e,Vt.memoizedState,t)},useTransition:function(){var t=Od(Qa)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:Oy,useSyncExternalStore:zy,useId:Jy,unstable_isNewReconciler:!1},Dw={readContext:Zn,useCallback:Ky,useContext:Zn,useEffect:bm,useImperativeHandle:qy,useInsertionEffect:Xy,useLayoutEffect:$y,useMemo:Zy,useReducer:zd,useRef:jy,useState:function(){return zd(Qa)},useDebugValue:Mm,useDeferredValue:function(t){var e=Qn();return Vt===null?e.memoizedState=t:Qy(e,Vt.memoizedState,t)},useTransition:function(){var t=zd(Qa)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:Oy,useSyncExternalStore:zy,useId:Jy,unstable_isNewReconciler:!1};function si(t,e){if(t&&t.defaultProps){e=Pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _h(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ku={isMounted:function(t){return(t=t._reactInternals)?Ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=xn(),r=Fr(t),s=Qi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,r),e!==null&&(fi(e,t,r,i),Nc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=xn(),r=Fr(t),s=Qi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,r),e!==null&&(fi(e,t,r,i),Nc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xn(),i=Fr(t),r=Qi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Dr(t,r,i),e!==null&&(fi(e,t,i,n),Nc(e,t,i))}};function S0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ja(n,i)||!ja(r,s):!0}function iS(t,e,n){var i=!1,r=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=Zn(s):(r=Tn(e)?vs:fn.current,i=e.contextTypes,s=(i=i!=null)?To(t,r):Br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ku,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function b0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ku.enqueueReplaceState(e,e.state,null)}function vh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zn(s):(s=Tn(e)?vs:fn.current,r.context=To(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_h(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ku.enqueueReplaceState(r,r.state,null),pu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Po(t,e){try{var n="",i=e;do n+=a1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Bd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Iw=typeof WeakMap=="function"?WeakMap:Map;function rS(t,e,n){n=Qi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){vu||(vu=!0,Ph=i),yh(t,e)},n}function sS(t,e,n){n=Qi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){yh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yh(t,e),typeof i!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function M0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Iw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Yw.bind(null,t,e,n),e.then(t,t))}function w0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function E0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qi(-1,1),e.tag=2,Dr(n,e,1))),n.lanes|=1),t)}var Fw=ar.ReactCurrentOwner,wn=!1;function gn(t,e,n,i){e.child=t===null?Iy(e,null,n,i):Co(e,t.child,n,i)}function T0(t,e,n,i,r){n=n.render;var s=e.ref;return So(e,r),i=ym(t,e,n,i,s,r),n=Sm(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,rr(t,e,r)):(Et&&n&&lm(e),e.flags|=1,gn(t,e,i,r),e.child)}function A0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Lm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,oS(t,e,s,i,r)):(t=Oc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ja,n(o,i)&&t.ref===e.ref)return rr(t,e,r)}return e.flags|=1,t=Ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function oS(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ja(s,i)&&t.ref===e.ref)if(wn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(wn=!0);else return e.lanes=t.lanes,rr(t,e,r)}return Sh(t,e,n,i,r)}function aS(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(lo,Ln),Ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(lo,Ln),Ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(lo,Ln),Ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(lo,Ln),Ln|=i;return gn(t,e,r,n),e.child}function lS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sh(t,e,n,i,r){var s=Tn(n)?vs:fn.current;return s=To(e,s),So(e,r),n=ym(t,e,n,i,s,r),i=Sm(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,rr(t,e,r)):(Et&&i&&lm(e),e.flags|=1,gn(t,e,n,r),e.child)}function C0(t,e,n,i,r){if(Tn(n)){var s=!0;cu(e)}else s=!1;if(So(e,r),e.stateNode===null)Fc(t,e),iS(e,n,i),vh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Zn(c):(c=Tn(n)?vs:fn.current,c=To(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&b0(e,o,i,c),vr=!1;var d=e.memoizedState;o.state=d,pu(e,i,o,r),l=e.memoizedState,a!==i||d!==l||En.current||vr?(typeof u=="function"&&(_h(e,n,u,i),l=e.memoizedState),(a=vr||S0(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Uy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:si(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Zn(l):(l=Tn(n)?vs:fn.current,l=To(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&b0(e,o,i,l),vr=!1,d=e.memoizedState,o.state=d,pu(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||En.current||vr?(typeof p=="function"&&(_h(e,n,p,i),g=e.memoizedState),(c=vr||S0(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return bh(t,e,n,i,s,r)}function bh(t,e,n,i,r,s){lS(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&h0(e,n,!1),rr(t,e,s);i=e.stateNode,Fw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Co(e,t.child,null,s),e.child=Co(e,null,a,s)):gn(t,e,a,s),e.memoizedState=i.state,r&&h0(e,n,!0),e.child}function cS(t){var e=t.stateNode;e.pendingContext?f0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&f0(t,e.context,!1),gm(t,e.containerInfo)}function R0(t,e,n,i,r){return Ao(),um(r),e.flags|=256,gn(t,e,n,i),e.child}var Mh={dehydrated:null,treeContext:null,retryLane:0};function wh(t){return{baseLanes:t,cachePool:null,transitions:null}}function uS(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(Tt,r&1),t===null)return gh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ju(o,i,0,null),t=xs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wh(n),e.memoizedState=Mh,t):wm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Uw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ur(a,s):(s=xs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?wh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mh,i}return s=t.child,t=s.sibling,i=Ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wm(t,e){return e=Ju({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Il(t,e,n,i){return i!==null&&um(i),Co(e,t.child,null,n),t=wm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Uw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Bd(Error(se(422))),Il(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ju({mode:"visible",children:i.children},r,0,null),s=xs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Co(e,t.child,null,o),e.child.memoizedState=wh(o),e.memoizedState=Mh,s);if(!(e.mode&1))return Il(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Bd(s,i,void 0),Il(t,e,o,i)}if(a=(o&t.childLanes)!==0,wn||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ir(t,r),fi(i,t,r,-1))}return Pm(),i=Bd(Error(se(421))),Il(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=qw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,In=Nr(r.nextSibling),kn=e,Et=!0,ai=null,t!==null&&(jn[Xn++]=Yi,jn[Xn++]=qi,jn[Xn++]=ys,Yi=t.id,qi=t.overflow,ys=e),e=wm(e,i.children),e.flags|=4096,e)}function P0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xh(t.return,e,n)}function Vd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function dS(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(gn(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&P0(t,n,e);else if(t.tag===19)P0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&mu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&mu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vd(e,!0,n,null,s);break;case"together":Vd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kw(t,e,n){switch(e.tag){case 3:cS(e),Ao();break;case 5:ky(e);break;case 1:Tn(e.type)&&cu(e);break;case 4:gm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(fu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?uS(t,e,n):(vt(Tt,Tt.current&1),t=rr(t,e,n),t!==null?t.sibling:null);vt(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return dS(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,aS(t,e,n)}return rr(t,e,n)}var fS,Eh,hS,pS;fS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eh=function(){};hS=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ds(Pi.current);var s=null;switch(n){case"input":r=$f(t,r),i=$f(t,i),s=[];break;case"select":r=Pt({},r,{value:void 0}),i=Pt({},i,{value:void 0}),s=[];break;case"textarea":r=Kf(t,r),i=Kf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=au)}Qf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&St("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};pS=function(t,e,n,i){n!==i&&(e.flags|=4)};function qo(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ow(t,e,n){var i=e.pendingProps;switch(cm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return Tn(e.type)&&lu(),sn(e),null;case 3:return i=e.stateNode,Ro(),Mt(En),Mt(fn),_m(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(Dh(ai),ai=null))),Eh(t,e),sn(e),null;case 5:xm(e);var r=ds(Ka.current);if(n=e.type,t!==null&&e.stateNode!=null)hS(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return sn(e),null}if(t=ds(Pi.current),Nl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[Ya]=s,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(r=0;r<fa.length;r++)St(fa[r],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":zg(i,s),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},St("invalid",i);break;case"textarea":Vg(i,s),St("invalid",i)}Qf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ll(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ll(i.textContent,a,t),r=["children",""+a]):Oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&St("scroll",i)}switch(n){case"input":Ml(i),Bg(i,s,!0);break;case"textarea":Ml(i),Hg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=au)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ei]=e,t[Ya]=i,fS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jf(n,i),n){case"dialog":St("cancel",t),St("close",t),r=i;break;case"iframe":case"object":case"embed":St("load",t),r=i;break;case"video":case"audio":for(r=0;r<fa.length;r++)St(fa[r],t);r=i;break;case"source":St("error",t),r=i;break;case"img":case"image":case"link":St("error",t),St("load",t),r=i;break;case"details":St("toggle",t),r=i;break;case"input":zg(t,i),r=$f(t,i),St("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Pt({},i,{value:void 0}),St("invalid",t);break;case"textarea":Vg(t,i),r=Kf(t,i),St("invalid",t);break;default:r=i}Qf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?jv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&za(t,l):typeof l=="number"&&za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&St("scroll",t):l!=null&&Yp(t,s,l,o))}switch(n){case"input":Ml(t),Bg(t,i,!1);break;case"textarea":Ml(t),Hg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+zr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xo(t,!!i.multiple,s,!1):i.defaultValue!=null&&xo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=au)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)pS(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=ds(Ka.current),ds(Pi.current),Nl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==n)&&(t=kn,t!==null))switch(t.tag){case 3:Ll(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ll(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return sn(e),null;case 13:if(Mt(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&In!==null&&e.mode&1&&!(e.flags&128))Ny(),Ao(),e.flags|=98560,s=!1;else if(s=Nl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Ei]=e}else Ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else ai!==null&&(Dh(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?Ht===0&&(Ht=3):Pm())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return Ro(),Eh(t,e),t===null&&Xa(e.stateNode.containerInfo),sn(e),null;case 10:return hm(e.type._context),sn(e),null;case 17:return Tn(e.type)&&lu(),sn(e),null;case 19:if(Mt(Tt),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)qo(s,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mu(t),o!==null){for(e.flags|=128,qo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ft()>Lo&&(e.flags|=128,i=!0,qo(s,!1),e.lanes=4194304)}else{if(!i)if(t=mu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Et)return sn(e),null}else 2*Ft()-s.renderingStartTime>Lo&&n!==1073741824&&(e.flags|=128,i=!0,qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,n=Tt.current,vt(Tt,i?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return Rm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function zw(t,e){switch(cm(e),e.tag){case 1:return Tn(e.type)&&lu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ro(),Mt(En),Mt(fn),_m(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xm(e),null;case 13:if(Mt(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(Tt),null;case 4:return Ro(),null;case 10:return hm(e.type._context),null;case 22:case 23:return Rm(),null;case 24:return null;default:return null}}var Fl=!1,ln=!1,Bw=typeof WeakSet=="function"?WeakSet:Set,we=null;function ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function Th(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var L0=!1;function Vw(t,e){if(ch=ru,t=vy(),am(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uh={focusedElem:t,selectionRange:n},ru=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:si(e.type,v),m);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){Nt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return g=L0,L0=!1,g}function Ta(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Th(e,n,s)}r=r.next}while(r!==i)}}function Zu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mS(t){var e=t.alternate;e!==null&&(t.alternate=null,mS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ei],delete e[Ya],delete e[hh],delete e[Mw],delete e[ww])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gS(t){return t.tag===5||t.tag===3||t.tag===4}function N0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=au));else if(i!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}function Rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}var Zt=null,oi=!1;function dr(t,e,n){for(n=n.child;n!==null;)xS(t,e,n),n=n.sibling}function xS(t,e,n){if(Ri&&typeof Ri.onCommitFiberUnmount=="function")try{Ri.onCommitFiberUnmount(Gu,n)}catch{}switch(n.tag){case 5:ln||ao(n,e);case 6:var i=Zt,r=oi;Zt=null,dr(t,e,n),Zt=i,oi=r,Zt!==null&&(oi?(t=Zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Zt.removeChild(n.stateNode));break;case 18:Zt!==null&&(oi?(t=Zt,n=n.stateNode,t.nodeType===8?Id(t.parentNode,n):t.nodeType===1&&Id(t,n),Ga(t)):Id(Zt,n.stateNode));break;case 4:i=Zt,r=oi,Zt=n.stateNode.containerInfo,oi=!0,dr(t,e,n),Zt=i,oi=r;break;case 0:case 11:case 14:case 15:if(!ln&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Th(n,e,o),r=r.next}while(r!==i)}dr(t,e,n);break;case 1:if(!ln&&(ao(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Nt(n,e,a)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(ln=(i=ln)||n.memoizedState!==null,dr(t,e,n),ln=i):dr(t,e,n);break;default:dr(t,e,n)}}function D0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Bw),e.forEach(function(i){var r=Kw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Zt=a.stateNode,oi=!1;break e;case 3:Zt=a.stateNode.containerInfo,oi=!0;break e;case 4:Zt=a.stateNode.containerInfo,oi=!0;break e}a=a.return}if(Zt===null)throw Error(se(160));xS(s,o,r),Zt=null,oi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_S(e,t),e=e.sibling}function _S(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(e,t),xi(t),i&4){try{Ta(3,t,t.return),Zu(3,t)}catch(v){Nt(t,t.return,v)}try{Ta(5,t,t.return)}catch(v){Nt(t,t.return,v)}}break;case 1:ti(e,t),xi(t),i&512&&n!==null&&ao(n,n.return);break;case 5:if(ti(e,t),xi(t),i&512&&n!==null&&ao(n,n.return),t.flags&32){var r=t.stateNode;try{za(r,"")}catch(v){Nt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bv(r,s),Jf(a,o);var c=Jf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?jv(r,f):u==="dangerouslySetInnerHTML"?Gv(r,f):u==="children"?za(r,f):Yp(r,u,f,c)}switch(a){case"input":Yf(r,s);break;case"textarea":Vv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?xo(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?xo(r,!!s.multiple,s.defaultValue,!0):xo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ya]=s}catch(v){Nt(t,t.return,v)}}break;case 6:if(ti(e,t),xi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Nt(t,t.return,v)}}break;case 3:if(ti(e,t),xi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(v){Nt(t,t.return,v)}break;case 4:ti(e,t),xi(t);break;case 13:ti(e,t),xi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Am=Ft())),i&4&&D0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(ln=(c=ln)||u,ti(e,t),ln=c):ti(e,t),xi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(we=t,u=t.child;u!==null;){for(f=we=u;we!==null;){switch(d=we,p=d.child,d.tag){case 0:case 11:case 14:case 15:Ta(4,d,d.return);break;case 1:ao(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Nt(i,n,v)}}break;case 5:ao(d,d.return);break;case 22:if(d.memoizedState!==null){F0(f);continue}}p!==null?(p.return=d,we=p):F0(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wv("display",o))}catch(v){Nt(t,t.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Nt(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ti(e,t),xi(t),i&4&&D0(t);break;case 21:break;default:ti(e,t),xi(t)}}function xi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gS(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(za(r,""),i.flags&=-33);var s=N0(t);Rh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=N0(t);Ch(t,a,o);break;default:throw Error(se(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hw(t,e,n){we=t,vS(t)}function vS(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Fl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||ln;a=Fl;var c=ln;if(Fl=o,(ln=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?U0(r):l!==null?(l.return=o,we=l):U0(r);for(;s!==null;)we=s,vS(s),s=s.sibling;we=r,Fl=a,ln=c}I0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):I0(t)}}function I0(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||Zu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ln)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:si(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}ln||e.flags&512&&Ah(e)}catch(d){Nt(e,e.return,d)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function F0(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function U0(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zu(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{Ah(e)}catch(l){Nt(e,s,l)}break;case 5:var o=e.return;try{Ah(e)}catch(l){Nt(e,o,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var Gw=Math.ceil,_u=ar.ReactCurrentDispatcher,Em=ar.ReactCurrentOwner,qn=ar.ReactCurrentBatchConfig,nt=0,Yt=null,Bt=null,Jt=0,Ln=0,lo=Wr(0),Ht=0,el=null,bs=0,Qu=0,Tm=0,Aa=null,bn=null,Am=0,Lo=1/0,Wi=null,vu=!1,Ph=null,Ir=null,Ul=!1,Er=null,yu=0,Ca=0,Lh=null,Uc=-1,kc=0;function xn(){return nt&6?Ft():Uc!==-1?Uc:Uc=Ft()}function Fr(t){return t.mode&1?nt&2&&Jt!==0?Jt&-Jt:Tw.transition!==null?(kc===0&&(kc=iy()),kc):(t=ft,t!==0||(t=window.event,t=t===void 0?16:uy(t.type)),t):1}function fi(t,e,n,i){if(50<Ca)throw Ca=0,Lh=null,Error(se(185));dl(t,n,i),(!(nt&2)||t!==Yt)&&(t===Yt&&(!(nt&2)&&(Qu|=n),Ht===4&&br(t,Jt)),An(t,i),n===1&&nt===0&&!(e.mode&1)&&(Lo=Ft()+500,Yu&&jr()))}function An(t,e){var n=t.callbackNode;T1(t,e);var i=iu(t,t===Yt?Jt:0);if(i===0)n!==null&&jg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jg(n),e===1)t.tag===0?Ew(k0.bind(null,t)):Ry(k0.bind(null,t)),Sw(function(){!(nt&6)&&jr()}),n=null;else{switch(ry(i)){case 1:n=Jp;break;case 4:n=ty;break;case 16:n=nu;break;case 536870912:n=ny;break;default:n=nu}n=AS(n,yS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yS(t,e){if(Uc=-1,kc=0,nt&6)throw Error(se(327));var n=t.callbackNode;if(bo()&&t.callbackNode!==n)return null;var i=iu(t,t===Yt?Jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Su(t,i);else{e=i;var r=nt;nt|=2;var s=bS();(Yt!==t||Jt!==e)&&(Wi=null,Lo=Ft()+500,gs(t,e));do try{Xw();break}catch(a){SS(t,a)}while(!0);fm(),_u.current=s,nt=r,Bt!==null?e=0:(Yt=null,Jt=0,e=Ht)}if(e!==0){if(e===2&&(r=rh(t),r!==0&&(i=r,e=Nh(t,r))),e===1)throw n=el,gs(t,0),br(t,i),An(t,Ft()),n;if(e===6)br(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ww(r)&&(e=Su(t,i),e===2&&(s=rh(t),s!==0&&(i=s,e=Nh(t,s))),e===1))throw n=el,gs(t,0),br(t,i),An(t,Ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:ss(t,bn,Wi);break;case 3:if(br(t,i),(i&130023424)===i&&(e=Am+500-Ft(),10<e)){if(iu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){xn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=fh(ss.bind(null,t,bn,Wi),e);break}ss(t,bn,Wi);break;case 4:if(br(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Gw(i/1960))-i,10<i){t.timeoutHandle=fh(ss.bind(null,t,bn,Wi),i);break}ss(t,bn,Wi);break;case 5:ss(t,bn,Wi);break;default:throw Error(se(329))}}}return An(t,Ft()),t.callbackNode===n?yS.bind(null,t):null}function Nh(t,e){var n=Aa;return t.current.memoizedState.isDehydrated&&(gs(t,e).flags|=256),t=Su(t,e),t!==2&&(e=bn,bn=n,e!==null&&Dh(e)),t}function Dh(t){bn===null?bn=t:bn.push.apply(bn,t)}function Ww(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function br(t,e){for(e&=~Tm,e&=~Qu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-di(e),i=1<<n;t[n]=-1,e&=~i}}function k0(t){if(nt&6)throw Error(se(327));bo();var e=iu(t,0);if(!(e&1))return An(t,Ft()),null;var n=Su(t,e);if(t.tag!==0&&n===2){var i=rh(t);i!==0&&(e=i,n=Nh(t,i))}if(n===1)throw n=el,gs(t,0),br(t,e),An(t,Ft()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ss(t,bn,Wi),An(t,Ft()),null}function Cm(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(Lo=Ft()+500,Yu&&jr())}}function Ms(t){Er!==null&&Er.tag===0&&!(nt&6)&&bo();var e=nt;nt|=1;var n=qn.transition,i=ft;try{if(qn.transition=null,ft=1,t)return t()}finally{ft=i,qn.transition=n,nt=e,!(nt&6)&&jr()}}function Rm(){Ln=lo.current,Mt(lo)}function gs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yw(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(cm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lu();break;case 3:Ro(),Mt(En),Mt(fn),_m();break;case 5:xm(i);break;case 4:Ro();break;case 13:Mt(Tt);break;case 19:Mt(Tt);break;case 10:hm(i.type._context);break;case 22:case 23:Rm()}n=n.return}if(Yt=t,Bt=t=Ur(t.current,null),Jt=Ln=e,Ht=0,el=null,Tm=Qu=bs=0,bn=Aa=null,us!==null){for(e=0;e<us.length;e++)if(n=us[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}us=null}return t}function SS(t,e){do{var n=Bt;try{if(fm(),Dc.current=xu,gu){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gu=!1}if(Ss=0,$t=Vt=Ct=null,Ea=!1,Za=0,Em.current=null,n===null||n.return===null){Ht=1,el=e,Bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=w0(o);if(p!==null){p.flags&=-257,E0(p,o,a,s,e),p.mode&1&&M0(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){M0(s,c,e),Pm();break e}l=Error(se(426))}}else if(Et&&a.mode&1){var m=w0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),E0(m,o,a,s,e),um(Po(l,a));break e}}s=l=Po(l,a),Ht!==4&&(Ht=2),Aa===null?Aa=[s]:Aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=rS(s,l,e);x0(s,h);break e;case 1:a=l;var x=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Ir===null||!Ir.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=sS(s,a,e);x0(s,y);break e}}s=s.return}while(s!==null)}wS(n)}catch(M){e=M,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function bS(){var t=_u.current;return _u.current=xu,t===null?xu:t}function Pm(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Yt===null||!(bs&268435455)&&!(Qu&268435455)||br(Yt,Jt)}function Su(t,e){var n=nt;nt|=2;var i=bS();(Yt!==t||Jt!==e)&&(Wi=null,gs(t,e));do try{jw();break}catch(r){SS(t,r)}while(!0);if(fm(),nt=n,_u.current=i,Bt!==null)throw Error(se(261));return Yt=null,Jt=0,Ht}function jw(){for(;Bt!==null;)MS(Bt)}function Xw(){for(;Bt!==null&&!x1();)MS(Bt)}function MS(t){var e=TS(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,e===null?wS(t):Bt=e,Em.current=null}function wS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zw(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,Bt=null;return}}else if(n=Ow(n,e,Ln),n!==null){Bt=n;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Ht===0&&(Ht=5)}function ss(t,e,n){var i=ft,r=qn.transition;try{qn.transition=null,ft=1,$w(t,e,n,i)}finally{qn.transition=r,ft=i}return null}function $w(t,e,n,i){do bo();while(Er!==null);if(nt&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(A1(t,s),t===Yt&&(Bt=Yt=null,Jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ul||(Ul=!0,AS(nu,function(){return bo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=ft;ft=1;var a=nt;nt|=4,Em.current=null,Vw(t,n),_S(n,t),hw(uh),ru=!!ch,uh=ch=null,t.current=n,Hw(n),_1(),nt=a,ft=o,qn.transition=s}else t.current=n;if(Ul&&(Ul=!1,Er=t,yu=r),s=t.pendingLanes,s===0&&(Ir=null),S1(n.stateNode),An(t,Ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(vu)throw vu=!1,t=Ph,Ph=null,t;return yu&1&&t.tag!==0&&bo(),s=t.pendingLanes,s&1?t===Lh?Ca++:(Ca=0,Lh=t):Ca=0,jr(),null}function bo(){if(Er!==null){var t=ry(yu),e=qn.transition,n=ft;try{if(qn.transition=null,ft=16>t?16:t,Er===null)var i=!1;else{if(t=Er,Er=null,yu=0,nt&6)throw Error(se(331));var r=nt;for(nt|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var u=we;switch(u.tag){case 0:case 11:case 15:Ta(8,u,s)}var f=u.child;if(f!==null)f.return=u,we=f;else for(;we!==null;){u=we;var d=u.sibling,p=u.return;if(mS(u),u===c){we=null;break}if(d!==null){d.return=p,we=d;break}we=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ta(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,we=h;break e}we=s.return}}var x=t.current;for(we=x;we!==null;){o=we;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,we=S;else e:for(o=x;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zu(9,a)}}catch(M){Nt(a,a.return,M)}if(a===o){we=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,we=y;break e}we=a.return}}if(nt=r,jr(),Ri&&typeof Ri.onPostCommitFiberRoot=="function")try{Ri.onPostCommitFiberRoot(Gu,t)}catch{}i=!0}return i}finally{ft=n,qn.transition=e}}return!1}function O0(t,e,n){e=Po(n,e),e=rS(t,e,1),t=Dr(t,e,1),e=xn(),t!==null&&(dl(t,1,e),An(t,e))}function Nt(t,e,n){if(t.tag===3)O0(t,t,n);else for(;e!==null;){if(e.tag===3){O0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ir===null||!Ir.has(i))){t=Po(n,t),t=sS(e,t,1),e=Dr(e,t,1),t=xn(),e!==null&&(dl(e,1,t),An(e,t));break}}e=e.return}}function Yw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=xn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(Jt&n)===n&&(Ht===4||Ht===3&&(Jt&130023424)===Jt&&500>Ft()-Am?gs(t,0):Tm|=n),An(t,e)}function ES(t,e){e===0&&(t.mode&1?(e=Tl,Tl<<=1,!(Tl&130023424)&&(Tl=4194304)):e=1);var n=xn();t=ir(t,e),t!==null&&(dl(t,e,n),An(t,n))}function qw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ES(t,n)}function Kw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),ES(t,n)}var TS;TS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||En.current)wn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wn=!1,kw(t,e,n);wn=!!(t.flags&131072)}else wn=!1,Et&&e.flags&1048576&&Py(e,du,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fc(t,e),t=e.pendingProps;var r=To(e,fn.current);So(e,n),r=ym(null,e,i,t,r,n);var s=Sm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tn(i)?(s=!0,cu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mm(e),r.updater=Ku,e.stateNode=r,r._reactInternals=e,vh(e,i,t,n),e=bh(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&lm(e),gn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Qw(i),t=si(i,t),r){case 0:e=Sh(null,e,i,t,n);break e;case 1:e=C0(null,e,i,t,n);break e;case 11:e=T0(null,e,i,t,n);break e;case 14:e=A0(null,e,i,si(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Sh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),C0(t,e,i,r,n);case 3:e:{if(cS(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Uy(t,e),pu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Po(Error(se(423)),e),e=R0(t,e,i,n,r);break e}else if(i!==r){r=Po(Error(se(424)),e),e=R0(t,e,i,n,r);break e}else for(In=Nr(e.stateNode.containerInfo.firstChild),kn=e,Et=!0,ai=null,n=Iy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ao(),i===r){e=rr(t,e,n);break e}gn(t,e,i,n)}e=e.child}return e;case 5:return ky(e),t===null&&gh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,dh(i,r)?o=null:s!==null&&dh(i,s)&&(e.flags|=32),lS(t,e),gn(t,e,o,n),e.child;case 6:return t===null&&gh(e),null;case 13:return uS(t,e,n);case 4:return gm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Co(e,null,i,n):gn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),T0(t,e,i,r,n);case 7:return gn(t,e,e.pendingProps,n),e.child;case 8:return gn(t,e,e.pendingProps.children,n),e.child;case 12:return gn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,vt(fu,i._currentValue),i._currentValue=o,s!==null)if(pi(s.value,o)){if(s.children===r.children&&!En.current){e=rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Qi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,So(e,n),r=Zn(r),i=i(r),e.flags|=1,gn(t,e,i,n),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),A0(t,e,i,r,n);case 15:return oS(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Fc(t,e),e.tag=1,Tn(i)?(t=!0,cu(e)):t=!1,So(e,n),iS(e,i,r),vh(e,i,r,n),bh(null,e,i,!0,t,n);case 19:return dS(t,e,n);case 22:return aS(t,e,n)}throw Error(se(156,e.tag))};function AS(t,e){return ey(t,e)}function Zw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,e,n,i){return new Zw(t,e,n,i)}function Lm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qw(t){if(typeof t=="function")return Lm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kp)return 11;if(t===Zp)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=Yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Lm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qs:return xs(n.children,r,s,e);case qp:o=8,r|=8;break;case Gf:return t=Yn(12,n,e,r|2),t.elementType=Gf,t.lanes=s,t;case Wf:return t=Yn(13,n,e,r),t.elementType=Wf,t.lanes=s,t;case jf:return t=Yn(19,n,e,r),t.elementType=jf,t.lanes=s,t;case kv:return Ju(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fv:o=10;break e;case Uv:o=9;break e;case Kp:o=11;break e;case Zp:o=14;break e;case _r:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Yn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xs(t,e,n,i){return t=Yn(7,t,i,e),t.lanes=n,t}function Ju(t,e,n,i){return t=Yn(22,t,i,e),t.elementType=kv,t.lanes=n,t.stateNode={isHidden:!1},t}function Hd(t,e,n){return t=Yn(6,t,null,e),t.lanes=n,t}function Gd(t,e,n){return e=Yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Md(0),this.expirationTimes=Md(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Md(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nm(t,e,n,i,r,s,o,a,l){return t=new Jw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mm(s),t}function eE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function CS(t){if(!t)return Br;t=t._reactInternals;e:{if(Ps(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(Tn(n))return Cy(t,n,e)}return e}function RS(t,e,n,i,r,s,o,a,l){return t=Nm(n,i,!0,t,r,s,o,a,l),t.context=CS(null),n=t.current,i=xn(),r=Fr(n),s=Qi(i,r),s.callback=e??null,Dr(n,s,r),t.current.lanes=r,dl(t,r,i),An(t,i),t}function ed(t,e,n,i){var r=e.current,s=xn(),o=Fr(r);return n=CS(n),e.context===null?e.context=n:e.pendingContext=n,e=Qi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Dr(r,e,o),t!==null&&(fi(t,r,o,s),Nc(t,r,o)),o}function bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function z0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dm(t,e){z0(t,e),(t=t.alternate)&&z0(t,e)}function tE(){return null}var PS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Im(t){this._internalRoot=t}td.prototype.render=Im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));ed(t,e,null,null)};td.prototype.unmount=Im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ms(function(){ed(null,t,null,null)}),e[nr]=null}};function td(t){this._internalRoot=t}td.prototype.unstable_scheduleHydration=function(t){if(t){var e=ay();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sr.length&&e!==0&&e<Sr[n].priority;n++);Sr.splice(n,0,t),n===0&&cy(t)}};function Fm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function B0(){}function nE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=bu(o);s.call(c)}}var o=RS(e,i,t,0,null,!1,!1,"",B0);return t._reactRootContainer=o,t[nr]=o.current,Xa(t.nodeType===8?t.parentNode:t),Ms(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=bu(l);a.call(c)}}var l=Nm(t,0,!1,null,null,!1,!1,"",B0);return t._reactRootContainer=l,t[nr]=l.current,Xa(t.nodeType===8?t.parentNode:t),Ms(function(){ed(e,l,n,i)}),l}function id(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=bu(o);a.call(l)}}ed(e,o,t,r)}else o=nE(n,e,t,r,i);return bu(o)}sy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(em(e,n|1),An(e,Ft()),!(nt&6)&&(Lo=Ft()+500,jr()))}break;case 13:Ms(function(){var i=ir(t,1);if(i!==null){var r=xn();fi(i,t,1,r)}}),Dm(t,1)}};tm=function(t){if(t.tag===13){var e=ir(t,134217728);if(e!==null){var n=xn();fi(e,t,134217728,n)}Dm(t,134217728)}};oy=function(t){if(t.tag===13){var e=Fr(t),n=ir(t,e);if(n!==null){var i=xn();fi(n,t,e,i)}Dm(t,e)}};ay=function(){return ft};ly=function(t,e){var n=ft;try{return ft=t,e()}finally{ft=n}};th=function(t,e,n){switch(e){case"input":if(Yf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=$u(i);if(!r)throw Error(se(90));zv(i),Yf(i,r)}}}break;case"textarea":Vv(t,n);break;case"select":e=n.value,e!=null&&xo(t,!!n.multiple,e,!1)}};Yv=Cm;qv=Ms;var iE={usingClientEntryPoint:!1,Events:[hl,no,$u,Xv,$v,Cm]},Ko={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rE={bundleType:Ko.bundleType,version:Ko.version,rendererPackageName:Ko.rendererPackageName,rendererConfig:Ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ko.findFiberByHostInstance||tE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Gu=kl.inject(rE),Ri=kl}catch{}}zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iE;zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fm(e))throw Error(se(200));return eE(t,e,null,n)};zn.createRoot=function(t,e){if(!Fm(t))throw Error(se(299));var n=!1,i="",r=PS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nm(t,1,!1,null,null,n,!1,i,r),t[nr]=e.current,Xa(t.nodeType===8?t.parentNode:t),new Im(e)};zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Qv(e),t=t===null?null:t.stateNode,t};zn.flushSync=function(t){return Ms(t)};zn.hydrate=function(t,e,n){if(!nd(e))throw Error(se(200));return id(null,t,e,!0,n)};zn.hydrateRoot=function(t,e,n){if(!Fm(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=PS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=RS(e,null,t,1,n??null,r,!1,s,o),t[nr]=e.current,Xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new td(e)};zn.render=function(t,e,n){if(!nd(e))throw Error(se(200));return id(null,t,e,!1,n)};zn.unmountComponentAtNode=function(t){if(!nd(t))throw Error(se(40));return t._reactRootContainer?(Ms(function(){id(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};zn.unstable_batchedUpdates=Cm;zn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!nd(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return id(t,e,n,!1,i)};zn.version="18.3.1-next-f1338f8080-20240426";function LS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(LS)}catch(t){console.error(t)}}LS(),Lv.exports=zn;var sE=Lv.exports,V0=sE;Vf.createRoot=V0.createRoot,Vf.hydrateRoot=V0.hydrateRoot;function Ol({imageSrc:t,polygon:e,onPolygonChange:n,sceneLabel:i,isDrawing:r,onToggleDrawing:s,accentColor:o="#38bdf8"}){const a=oe.useRef(null),[l,c]=oe.useState(e),[u,f]=oe.useState(null),[d,p]=oe.useState("freehand"),g=oe.useRef(!1);oe.useEffect(()=>{c(e)},[e]);const v=oe.useCallback(_=>{if(!a.current)return null;const A=a.current.getBoundingClientRect(),R=Math.max(0,Math.min(1,(_.clientX-A.left)/A.width)),L=Math.max(0,Math.min(1,(_.clientY-A.top)/A.height));return[Math.round(R*1e3)/1e3,Math.round(L*1e3)/1e3]},[]),m=_=>{if(!r||_.target.closest(".annotator-toolbar"))return;const A=v(_);A&&d==="freehand"&&(g.current=!0,c([A]),n([A]))},h=_=>{if(!r||_.target.closest(".annotator-toolbar"))return;const A=v(_);A&&(f(A),d==="freehand"&&g.current&&c(R=>{if(R.length===0)return[A];const L=R[R.length-1];if(Math.hypot(A[0]-L[0],A[1]-L[1])>.015){const B=[...R,A];return n(B),B}return R}))},x=_=>{var A,R;r&&(_&&((R=(A=_.target).closest)!=null&&R.call(A,".annotator-toolbar"))||d==="freehand"&&g.current&&(g.current=!1,l.length>=3&&(n(l),s())))},S=_=>{if(!r||d!=="polygon"||_.target.closest(".annotator-toolbar"))return;const A=v(_);if(!A)return;if(l.length>=3){const[L,D]=l[0];if(Math.hypot(A[0]-L,A[1]-D)<.05){n(l),s();return}}const R=[...l,A];c(R),n(R)},y=_=>{_.stopPropagation(),l.length>=3&&(n(l),s())},M=_=>{_.stopPropagation(),c([]),n([]),f(null)},E=_=>{_.stopPropagation();const A=[[.2,.2],[.8,.2],[.8,.8],[.2,.8]];c(A),n(A)},C=l.length>=3;return w.jsxs("div",{ref:a,className:`polygon-annotator-container ${r?"drawing-active":""}`,onClick:S,onMouseDown:m,onMouseMove:h,onMouseUp:x,onMouseLeave:()=>{f(null),g.current&&x()},title:r?d==="freehand"?"Hold and drag mouse to freely draw any shape":"Click points to create polygon":"",children:[w.jsx("img",{src:t,alt:i,className:"annotator-bg-image"}),w.jsxs("svg",{className:"polygon-svg-overlay",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[C&&w.jsx("polygon",{points:l.map(([_,A])=>`${_*100},${A*100}`).join(" "),fill:o,fillOpacity:"0.25",stroke:o,strokeWidth:"2.2",strokeDasharray:r?"3,2":void 0,className:"polygon-filled-shape"}),r&&l.length>0&&!C&&w.jsx("polyline",{points:l.map(([_,A])=>`${_*100},${A*100}`).join(" "),fill:"none",stroke:o,strokeWidth:"2.2",strokeDasharray:"3,2"}),r&&d==="polygon"&&l.length>0&&u&&w.jsx("line",{x1:`${l[l.length-1][0]*100}`,y1:`${l[l.length-1][1]*100}`,x2:`${u[0]*100}`,y2:`${u[1]*100}`,stroke:o,strokeWidth:"1.5",strokeDasharray:"2,2",opacity:"0.85"}),l.map(([_,A],R)=>w.jsx("g",{children:w.jsx("circle",{cx:`${_*100}`,cy:`${A*100}`,r:R===0&&r&&l.length>=3?3.5:d==="freehand"?1.5:2.2,fill:R===0&&r&&l.length>=3?"#10b981":o,stroke:"#fff",strokeWidth:"0.8",className:R===0&&r&&l.length>=3?"closing-node":""})},R))]}),w.jsxs("div",{className:"annotator-toolbar",children:[w.jsx("button",{type:"button",className:`annotator-btn ${r?"btn-active":""}`,onClick:_=>{_.stopPropagation(),s()},title:r?"Stop drawing":"Draw shape on this scene",children:w.jsx("span",{children:r?"✏️ Drawing Active":"✏️ Draw Shape"})}),r&&w.jsxs("div",{className:"mode-toggle-group",children:[w.jsx("button",{type:"button",className:`mode-btn ${d==="freehand"?"active":""}`,onClick:_=>{_.stopPropagation(),p("freehand")},title:"Drag mouse freely to trace any shape or lake",children:"🖌️ Freehand"}),w.jsx("button",{type:"button",className:`mode-btn ${d==="polygon"?"active":""}`,onClick:_=>{_.stopPropagation(),p("polygon")},title:"Click point by point",children:"📐 Points"})]}),r&&l.length>=3&&w.jsx("button",{type:"button",className:"annotator-btn btn-finish",onClick:y,title:"Complete shape",children:w.jsx("span",{children:"✔ Finish Shape"})}),!C&&!r&&w.jsx("button",{type:"button",className:"annotator-btn btn-preset",onClick:E,title:"Place center Region of Interest polygon",children:w.jsx("span",{children:"🎯 Center ROI Preset"})}),C&&w.jsx("button",{type:"button",className:"annotator-btn btn-clear",onClick:M,title:"Clear shape",children:w.jsx("span",{children:"✕ Clear"})}),C&&w.jsx("div",{className:"annotator-stat-badge",children:w.jsxs("span",{children:["📐 ROI: ",l.length," pts"]})})]}),r&&w.jsx("div",{className:"drawing-helper-toast",children:w.jsx("span",{children:d==="freehand"?"🖱️ Click and drag mouse over any lake/region to freely sketch a shape":`Click to place points (${l.length} pts). Click P1 or 'Finish' to complete.`})}),w.jsx("style",{children:`
        .polygon-annotator-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 380px;
          border-radius: 8px;
          overflow: hidden;
          background: #020617;
          cursor: default;
          user-select: none;
          display: flex;
        }
        .polygon-annotator-container.drawing-active {
          cursor: crosshair;
        }
        .annotator-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .polygon-svg-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .polygon-filled-shape {
          filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.5));
        }
        .closing-node {
          animation: pulseNode 1.2s infinite ease-in-out;
        }
        @keyframes pulseNode {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.8; }
        }
        .annotator-toolbar {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          z-index: 20;
          pointer-events: auto;
          background: rgba(3, 7, 18, 0.82);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          padding: 6px 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);
        }
        .annotator-btn {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #e2e8f0;
          font-size: 0.76rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.15s ease;
          font-family: inherit;
        }
        .annotator-btn:hover {
          background: rgba(255, 255, 255, 0.16);
          color: #ffffff;
          transform: translateY(-1px);
        }
        .annotator-btn.btn-active {
          background: rgba(14, 165, 233, 0.35);
          color: #7dd3fc;
          border-color: rgba(56, 189, 248, 0.8);
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
        }
        .annotator-btn.btn-finish {
          background: rgba(16, 185, 129, 0.35);
          color: #6ee7b7;
          border-color: rgba(16, 185, 129, 0.7);
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
        }
        .annotator-btn.btn-finish:hover {
          background: rgba(16, 185, 129, 0.5);
          color: #fff;
        }
        .annotator-btn.btn-clear {
          background: rgba(239, 68, 68, 0.15);
          border-color: rgba(239, 68, 68, 0.4);
          color: #fca5a5;
        }
        .annotator-btn.btn-clear:hover {
          background: rgba(239, 68, 68, 0.35);
          color: #fff;
        }
        .annotator-btn.btn-preset {
          background: rgba(234, 179, 8, 0.15);
          border-color: rgba(234, 179, 8, 0.4);
          color: #fde047;
        }
        .annotator-btn.btn-preset:hover {
          background: rgba(234, 179, 8, 0.3);
          color: #fff;
        }
        .annotator-stat-badge {
          margin-left: auto;
          font-size: 0.72rem;
          font-weight: 700;
          color: #38bdf8;
          padding: 3px 8px;
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.35);
          border-radius: 6px;
        }
        .mode-toggle-group {
          display: flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          padding: 2px;
          gap: 2px;
        }
        .mode-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .mode-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }
        .mode-btn.active {
          background: rgba(56, 189, 248, 0.25);
          color: #38bdf8;
          font-weight: 700;
        }
        .drawing-helper-toast {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(3, 7, 18, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(56, 189, 248, 0.4);
          border-radius: 999px;
          padding: 6px 18px;
          font-size: 0.74rem;
          color: #bae6fd;
          text-align: center;
          z-index: 25;
          pointer-events: none;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.6);
          white-space: nowrap;
          max-width: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `})]})}const oE=()=>typeof window<"u"&&("SpeechRecognition"in window||"webkitSpeechRecognition"in window),aE=new Set(["kya","hai","hain","kaise","kahan","kaha","kitna","kitni","kitne","batao","bataiye","batana","pehle","baad","badlav","badla","nuksan","dekh","dekho","dikh","dikhao","dikhaye","ye","yeh","wo","woh","isme","ismein","mai","mein","ko","se","aur","ka","ki","ke","par","hua","hui","huye","hue","hoga","hogi","honge","raha","rahi","rahe","chahiye","karo","kare","karein","kijiye","tasveer","chhavi","pani","baadh","imarat","nadi","kuch","sab","wala","wali","wale","bhi","nahi","nahin","matlab","thoda","jyada","zyada","yahan","wahan","khojo","dhundo","mil","mila","mile","farq","antar","bata","hume","hum","aap","tum","kyun","kab","kis","kisko","kaun","sirf","jungle","ped","sadak","bhavan","shehar","gaon","khet","fasal","sukha"]),lE=t=>!t||!t.trim()?{code:"auto",label:"Auto"}:/[\u0900-\u097F]/.test(t)?{code:"hi-IN",label:"हिंदी (Hindi)"}:/[\u0980-\u09FF]/.test(t)?{code:"bn-IN",label:"বাংলা (Bengali)"}:/[\u0B80-\u0BFF]/.test(t)?{code:"ta-IN",label:"தமிழ் (Tamil)"}:/[\u0C00-\u0C7F]/.test(t)?{code:"te-IN",label:"తెలుగు (Telugu)"}:(t.toLowerCase().match(/\b[a-z]+\b/g)||[]).some(i=>aE.has(i))?{code:"hi-IN",label:"Hinglish (हिन्दी/EN)",isHinglish:!0}:{code:"en-IN",label:"English"};function cE({onAnalyze:t,loading:e}){const[n,i]=oe.useState(""),[r,s]=oe.useState(),[o,a]=oe.useState(),[l,c]=oe.useState(""),[u,f]=oe.useState(""),[d,p]=oe.useState(""),[g,v]=oe.useState(""),[m,h]=oe.useState(),[x,S]=oe.useState(),[y,M]=oe.useState(!1),[E,C]=oe.useState(!1),[_,A]=oe.useState([]),[R,L]=oe.useState([]),[D,B]=oe.useState(!1),[I,O]=oe.useState(!1),[Y,H]=oe.useState(!0),[V,z]=oe.useState(!1),[G,Z]=oe.useState(!1),[ae,ve]=oe.useState(""),Ue=oE(),Ie=oe.useRef(null),Ne=oe.useRef(null),K=oe.useRef(null),te=oe.useRef(null),Se=_.length>=3?_:R.length>=3?R:[],Fe=Se.length>=3,xe=re=>{A(re),Y&&L(re)},ze=re=>{L(re),Y&&A(re)},st=lE(n),Be=oe.useCallback(()=>{if(!Ue||G)return;const re=window.SpeechRecognition||window.webkitSpeechRecognition,N=new re;N.lang=st.code==="hi-IN"?"hi-IN":navigator.language||"en-IN",N.interimResults=!1,N.maxAlternatives=1,Ie.current=N,N.onstart=()=>Z(!0),N.onend=()=>Z(!1),N.onerror=()=>Z(!1),N.onresult=it=>{const We=it.results[0][0].transcript;i(We),ve(`Heard: "${We}"`),Ne.current&&clearTimeout(Ne.current),Ne.current=setTimeout(()=>ve(""),3e3)},N.start()},[Ue,G,st.code]),Ve=oe.useCallback(()=>{var re;(re=Ie.current)==null||re.stop(),Z(!1)},[]);oe.useEffect(()=>()=>{var re;(re=Ie.current)==null||re.stop()},[]);const ot=re=>re<1024?`${re} B`:re<1024*1024?`${(re/1024).toFixed(1)} KB`:`${(re/(1024*1024)).toFixed(2)} MB`,He=(re,N,it,We,P)=>{it(re.name),We(ot(re.size));const b=new FileReader;b.onload=()=>{const k=b.result;P(k),N(k.split(",")[1])},b.readAsDataURL(re)},at=(re,N,it,We,P)=>{var k;const b=(k=re.target.files)==null?void 0:k[0];b&&He(b,N,it,We,P)},wt=(re,N,it,We,P,b)=>{var W;re.preventDefault(),b(!1);const k=(W=re.dataTransfer.files)==null?void 0:W[0];k&&k.type.startsWith("image/")&&He(k,N,it,We,P)},kt=()=>{if(!n.trim()||e)return;const re=st.code!=="auto"?st.code:"en-IN";t({question:n.trim(),image_b64:r,image2_b64:o,language:re,polygon:Fe?Se:void 0,roi_mode:Fe,target_scene:"both"})},ht=re=>{re.key==="Enter"&&(re.ctrlKey||re.metaKey)&&kt()};return w.jsxs("div",{className:"query-composer card fade-in-up",style:{animationDelay:"0.1s"},children:[w.jsxs("div",{className:"flex items-center justify-between mb-4",children:[w.jsxs("div",{children:[w.jsx("p",{className:"section-label",children:"🛰 Query Input"}),w.jsx("h2",{style:{fontSize:"1.25rem",color:"var(--text-primary)",fontWeight:700},children:"Ask your query"})]}),w.jsxs("div",{className:`auto-lang-badge ${st.isHinglish?"badge-hinglish":""}`,title:"Automatically detects language from your query",children:[w.jsx("span",{className:`lang-pulse-dot ${st.code!=="auto"?"active":""} ${st.isHinglish?"dot-hinglish":""}`}),w.jsx("span",{children:st.code!=="auto"?`Detected: ${st.label}`:"Auto Language Detection"})]})]}),w.jsxs("div",{className:"textarea-wrap",children:[w.jsx("textarea",{id:"query-input",className:"query-textarea",placeholder:"Ask your query in any language (English, हिंदी, Hinglish, etc.) — VQA, change detection, grounding, SAR-optical fusion…",value:n,onChange:re=>i(re.target.value),onKeyDown:ht,rows:3,"aria-label":"Query input"}),Ue&&w.jsx("button",{id:"mic-button",className:`btn btn-icon mic-btn ${G?"mic-active glow-pulse":""}`,onClick:G?Ve:Be,title:G?"Stop listening":"Voice input (auto-detect)","aria-label":G?"Stop voice input":"Start voice input",disabled:e,children:G?"🔴":"🎤"})]}),ae&&w.jsxs("div",{className:"voice-toast fade-in",role:"status","aria-live":"polite",children:[w.jsx("span",{children:"🎙"}),w.jsx("span",{children:ae})]}),w.jsxs("div",{className:"temporal-upload-section",children:[w.jsxs("div",{className:"temporal-upload-header",children:[w.jsx("span",{className:"temporal-upload-icon",children:"🛰"}),w.jsx("span",{className:"temporal-upload-title",children:"Temporal Scene Pair"}),w.jsx("span",{className:"temporal-upload-badge",children:"Bi-Temporal Change Detection"}),(m||x)&&w.jsx("button",{type:"button",className:"visualize-trigger-btn",onClick:()=>z(!0),title:"Open large side-by-side visualizer and polygon annotator",children:"🔍 Visualize & Expand ROI"})]}),w.jsxs("div",{className:`temporal-scenes-row ${m||x?"scenes-expanded":""}`,children:[w.jsxs("div",{className:`temporal-scene-card scene-before ${y?"drag-over":""} ${r?"has-image":""}`,onDragOver:re=>{re.preventDefault(),M(!0)},onDragLeave:()=>M(!1),onDrop:re=>wt(re,s,c,p,h,M),id:"scene-1-drop-zone",children:[w.jsx("input",{ref:K,type:"file",accept:"image/*",style:{display:"none"},onChange:re=>at(re,s,c,p,h),id:"image-upload-primary"}),m?w.jsxs("div",{className:"scene-card-inner",children:[w.jsxs("div",{className:"scene-card-header",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("span",{className:"scene-tag-pill tag-before",children:"T₁ · Before"}),l&&w.jsxs("span",{className:"scene-file-title",title:l,children:["📄 ",l]}),d&&w.jsx("span",{className:"scene-file-size",children:d})]}),w.jsxs("div",{className:"flex items-center gap-2",style:{marginLeft:"auto"},children:[w.jsx("button",{type:"button",className:"scene-action-btn btn-expand",onClick:()=>z(!0),title:"Expand to Fullscreen ROI Studio",children:"⛶ Fullscreen"}),w.jsx("button",{type:"button",className:"scene-action-btn btn-remove",onClick:()=>{s(void 0),c(""),p(""),h(void 0),A([])},title:"Remove image",children:"✕"})]})]}),w.jsx("div",{className:"scene-preview-wrap",children:w.jsx(Ol,{imageSrc:m,polygon:_,onPolygonChange:xe,sceneLabel:"Scene 1 (Before)",isDrawing:D,onToggleDrawing:()=>B(!D),accentColor:"#38bdf8"})})]}):w.jsxs("div",{className:"scene-drop-body",onClick:()=>{var re;return(re=K.current)==null?void 0:re.click()},children:[w.jsx("span",{className:"scene-drop-icon",children:y?"📂":"📡"}),w.jsx("p",{className:"scene-drop-heading",children:"Upload Scene 1 (Before)"}),w.jsx("p",{className:"scene-drop-sub",children:"Drag & drop or click to browse"}),w.jsx("p",{className:"scene-drop-hint",children:"PNG · JPG · TIFF · GeoTIFF"}),w.jsx("button",{type:"button",className:"btn btn-secondary btn-sm mt-3",onClick:()=>{var re;return(re=K.current)==null?void 0:re.click()},children:"Browse File"})]})]}),w.jsxs("div",{className:"temporal-connector",children:[w.jsx("div",{className:"connector-line"}),w.jsx("div",{className:"connector-node",title:"Bi-Temporal Baseline",children:w.jsx("span",{className:"connector-icon",children:"⏱"})}),w.jsx("div",{className:"connector-label",children:"Δt"}),w.jsx("div",{className:"connector-line"})]}),w.jsxs("div",{className:`temporal-scene-card scene-after ${E?"drag-over":""} ${o?"has-image":""}`,onDragOver:re=>{re.preventDefault(),C(!0)},onDragLeave:()=>C(!1),onDrop:re=>wt(re,a,f,v,S,C),id:"scene-2-drop-zone",children:[w.jsx("input",{ref:te,type:"file",accept:"image/*",style:{display:"none"},onChange:re=>at(re,a,f,v,S),id:"image-upload-secondary"}),x?w.jsxs("div",{className:"scene-card-inner",children:[w.jsxs("div",{className:"scene-card-header",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("span",{className:"scene-tag-pill tag-after",children:"T₂ · After"}),u&&w.jsxs("span",{className:"scene-file-title",title:u,children:["📄 ",u]}),g&&w.jsx("span",{className:"scene-file-size",children:g})]}),w.jsxs("div",{className:"flex items-center gap-2",style:{marginLeft:"auto"},children:[w.jsx("button",{type:"button",className:"scene-action-btn btn-expand",onClick:()=>z(!0),title:"Expand to Fullscreen ROI Studio",children:"⛶ Fullscreen"}),w.jsx("button",{type:"button",className:"scene-action-btn btn-remove",onClick:()=>{a(void 0),f(""),v(""),S(void 0),L([])},title:"Remove image",children:"✕"})]})]}),w.jsx("div",{className:"scene-preview-wrap",children:w.jsx(Ol,{imageSrc:x,polygon:R,onPolygonChange:ze,sceneLabel:"Scene 2 (After)",isDrawing:I,onToggleDrawing:()=>O(!I),accentColor:"#c084fc"})})]}):w.jsxs("div",{className:"scene-drop-body",onClick:()=>{var re;return(re=te.current)==null?void 0:re.click()},children:[w.jsx("span",{className:"scene-drop-icon",children:E?"📂":"🌍"}),w.jsx("p",{className:"scene-drop-heading",children:"Upload Scene 2 (After)"}),w.jsx("p",{className:"scene-drop-sub",children:"Drag & drop or click to browse"}),w.jsx("p",{className:"scene-drop-hint",children:"PNG · JPG · TIFF · GeoTIFF"}),w.jsx("button",{type:"button",className:"btn btn-secondary btn-sm mt-3",onClick:()=>{var re;return(re=te.current)==null?void 0:re.click()},children:"Browse File"})]})]})]}),Fe&&w.jsxs("div",{className:"roi-followup-panel fade-in",children:[w.jsxs("div",{className:"roi-header",children:[w.jsx("span",{className:"roi-icon",children:"📐"}),w.jsxs("span",{className:"roi-title",children:["Polygon ROI Constrained (",Se.length," vertices)"]}),w.jsx("button",{type:"button",className:`roi-sync-toggle ${Y?"synced":""}`,onClick:()=>H(!Y),title:Y?"ROI coordinates are linked on both T1 and T2":"ROI coordinates are separate",children:Y?"🔗 Linked T₁ ↔ T₂":"🔓 Independent"})]}),w.jsx("p",{className:"roi-desc",children:"Ask follow-up questions focused specifically on this marked area:"}),w.jsxs("div",{className:"roi-chips-row",children:[w.jsx("button",{type:"button",className:"roi-chip",onClick:()=>i("What changes occurred inside this marked polygon region?"),children:"🔄 What changed inside this polygon?"}),w.jsx("button",{type:"button",className:"roi-chip",onClick:()=>i("Calculate the flooded water extent within this marked ROI"),children:"💧 Calculate flood extent in this ROI"}),w.jsx("button",{type:"button",className:"roi-chip",onClick:()=>i("Are there any damaged buildings or infrastructure in this polygon?"),children:"🏢 Are buildings in this polygon damaged?"})]})]}),r&&o&&w.jsxs("div",{className:"temporal-ready-banner",children:[w.jsx("span",{children:"✅"}),w.jsx("span",{children:"Both scenes loaded — ready for bi-temporal analysis"}),w.jsx("button",{type:"button",className:"visualize-banner-btn",onClick:()=>z(!0),children:"🔍 Open Fullscreen Visualizer"})]})]}),w.jsxs("div",{className:"flex items-center justify-between mt-4",style:{gap:"1rem"},children:[w.jsx("p",{className:"text-xs text-muted",children:"Ctrl+Enter to run · Voice auto-submits after pause"}),w.jsx("button",{id:"analyze-button",className:"btn btn-primary btn-lg",onClick:kt,disabled:!n.trim()||e,children:e?w.jsxs(w.Fragment,{children:[w.jsx("span",{className:"spinner"}),w.jsx("span",{children:"Analyzing…"})]}):w.jsxs(w.Fragment,{children:[w.jsx("span",{children:"⚡"}),w.jsx("span",{children:"Analyze"})]})})]}),V&&w.jsx("div",{className:"visualizer-modal-backdrop fade-in",onClick:()=>z(!1),children:w.jsxs("div",{className:"visualizer-modal-dialog",onClick:re=>re.stopPropagation(),children:[w.jsxs("div",{className:"visualizer-header",children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[w.jsx("span",{style:{fontSize:"1.4rem"},children:"🛰"}),w.jsxs("div",{children:[w.jsx("h3",{className:"visualizer-title",children:"Satellite Scene Visualizer & ROI Precision Studio"}),w.jsx("p",{className:"visualizer-subtitle",children:"Large canvas inspection · Draw bounding polygons · Center ROI preset"})]})]}),w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[w.jsx("button",{type:"button",className:`roi-sync-toggle ${Y?"synced":""}`,onClick:()=>H(!Y),children:Y?"🔗 Linked T₁ ↔ T₂":"🔓 Independent"}),w.jsx("button",{type:"button",className:"visualizer-close-btn",onClick:()=>z(!1),title:"Close visualizer",children:"✕"})]})]}),w.jsxs("div",{className:"visualizer-stage-grid",children:[w.jsxs("div",{className:"visualizer-stage-panel panel-before",children:[w.jsxs("div",{className:"stage-panel-header",children:[w.jsx("span",{className:"stage-panel-tag tag-before",children:"T₁ · Scene 1 (Before)"}),l&&w.jsxs("span",{className:"stage-file-name",children:["📄 ",l]}),_.length>=3&&w.jsxs("span",{className:"stage-poly-badge",children:["📐 ",_.length," Vertices"]})]}),w.jsx("div",{className:"stage-annotator-container",children:m?w.jsx(Ol,{imageSrc:m,polygon:_,onPolygonChange:xe,sceneLabel:"Scene 1 (Before)",isDrawing:D,onToggleDrawing:()=>B(!D),accentColor:"#38bdf8"}):w.jsxs("div",{className:"stage-empty-placeholder",onClick:()=>{var re;return(re=K.current)==null?void 0:re.click()},children:[w.jsx("span",{children:"📡"}),w.jsx("p",{children:"No Image Loaded for Scene 1"}),w.jsx("button",{className:"btn btn-secondary btn-sm mt-2",children:"Upload Scene 1"})]})})]}),w.jsxs("div",{className:"visualizer-stage-panel panel-after",children:[w.jsxs("div",{className:"stage-panel-header",children:[w.jsx("span",{className:"stage-panel-tag tag-after",children:"T₂ · Scene 2 (After)"}),u&&w.jsxs("span",{className:"stage-file-name",children:["📄 ",u]}),R.length>=3&&w.jsxs("span",{className:"stage-poly-badge",children:["📐 ",R.length," Vertices"]})]}),w.jsx("div",{className:"stage-annotator-container",children:x?w.jsx(Ol,{imageSrc:x,polygon:R,onPolygonChange:ze,sceneLabel:"Scene 2 (After)",isDrawing:I,onToggleDrawing:()=>O(!I),accentColor:"#c084fc"}):w.jsxs("div",{className:"stage-empty-placeholder",onClick:()=>{var re;return(re=te.current)==null?void 0:re.click()},children:[w.jsx("span",{children:"🌍"}),w.jsx("p",{children:"No Image Loaded for Scene 2"}),w.jsx("button",{className:"btn btn-secondary btn-sm mt-2",children:"Upload Scene 2"})]})})]})]}),w.jsxs("div",{className:"visualizer-footer",children:[w.jsxs("div",{className:"visualizer-footer-left",children:[w.jsxs("div",{className:"visualizer-footer-prompt",children:[w.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"Query:"}),w.jsx("input",{type:"text",className:"visualizer-prompt-input",value:n,onChange:re=>i(re.target.value),placeholder:"Enter query or select a quick ROI prompt below...",onKeyDown:ht})]}),w.jsxs("div",{className:"visualizer-chips",children:[w.jsx("button",{type:"button",className:"roi-chip",onClick:()=>i("What changes occurred inside this marked polygon region?"),children:"🔄 What changed in polygon?"}),w.jsx("button",{type:"button",className:"roi-chip",onClick:()=>i("Calculate the flooded water extent within this marked ROI"),children:"💧 Calculate flood extent"}),w.jsx("button",{type:"button",className:"roi-chip",onClick:()=>i("Are there any damaged buildings or infrastructure in this polygon?"),children:"🏢 Check damaged structures"})]})]}),w.jsxs("div",{className:"visualizer-footer-actions",children:[w.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>z(!1),style:{padding:"0.65rem 1.25rem"},children:"Done Editing"}),w.jsx("button",{type:"button",className:"btn btn-primary btn-lg",onClick:()=>{z(!1),kt()},disabled:!n.trim()||e,style:{padding:"0.65rem 1.5rem",whiteSpace:"nowrap"},children:e?"Analyzing…":"⚡ Analyze"})]})]})]})}),w.jsx("style",{children:`
        .query-composer { position: relative; }
        .auto-lang-badge {
          display: flex; align-items: center; gap: 0.45rem;
          background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.22);
          border-radius: 999px; padding: 4px 12px;
          font-size: 0.78rem; font-weight: 600; color: var(--text-accent);
          transition: all 0.2s ease;
        }
        .auto-lang-badge.badge-hinglish {
          background: rgba(245, 158, 11, 0.12);
          border-color: rgba(245, 158, 11, 0.35);
          color: #fbbf24;
        }
        .lang-pulse-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #10b981; box-shadow: 0 0 6px #10b981;
          display: inline-block; animation: pulseDot 2s infinite ease-in-out;
        }
        .lang-pulse-dot.active {
          background: #38bdf8; box-shadow: 0 0 8px #38bdf8;
        }
        .lang-pulse-dot.dot-hinglish {
          background: #f59e0b;
          box-shadow: 0 0 8px #f59e0b;
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 0.6; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        .textarea-wrap { position: relative; }
        .query-textarea {
          width: 100%; padding: 0.9rem 3.2rem 0.9rem 1rem;
          background: rgba(0,0,0,0.35); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md); color: var(--text-primary);
          font-family: var(--font-sans); font-size: 0.95rem; line-height: 1.55;
          resize: vertical; outline: none; transition: border-color 0.2s;
          min-height: 90px;
        }
        .query-textarea:focus { border-color: var(--accent-primary); box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
        .query-textarea::placeholder { color: var(--text-muted); }
        .mic-btn { position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.07); border: 1px solid var(--border-card); color: var(--text-secondary); font-size: 1rem; transition: all 0.2s; }
        .mic-btn:hover { background: rgba(255,255,255,0.12); }
        .mic-active { background: rgba(239,68,68,0.15) !important; border-color: rgba(239,68,68,0.5) !important; }
        .voice-toast {
          margin-top: 0.5rem; padding: 0.55rem 1rem;
          background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.35);
          border-radius: var(--radius-md); color: #6ee7b7;
          font-size: 0.85rem; display: flex; gap: 0.5rem; align-items: center;
        }
        /* ── Temporal Upload Section ─────────────────────────── */
        .temporal-upload-section {
          margin-top: 1rem;
          background: rgba(0,0,0,0.22);
          border: 1px solid rgba(59,130,246,0.15);
          border-radius: var(--radius-lg);
          padding: 1rem;
        }
        .temporal-upload-header {
          display: flex; align-items: center; gap: 0.55rem;
          margin-bottom: 0.85rem;
        }
        .temporal-upload-icon { font-size: 1rem; }
        .temporal-upload-title {
          font-size: 0.82rem; font-weight: 700; color: var(--text-secondary);
          text-transform: uppercase; letter-spacing: 0.07em;
        }
        .temporal-upload-badge {
          margin-left: auto;
          font-size: 0.68rem; font-weight: 600;
          padding: 2px 10px;
          background: rgba(139,92,246,0.12);
          border: 1px solid rgba(139,92,246,0.28);
          border-radius: 999px;
          color: #c4b5fd;
          letter-spacing: 0.03em;
        }
        /* scenes row */
        .temporal-scenes-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 1rem;
          align-items: stretch;
          transition: all 0.3s ease;
        }
        .temporal-scenes-row.scenes-expanded {
          min-height: 520px;
        }
        /* individual scene card */
        .temporal-scene-card {
          position: relative;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.22s ease;
          overflow: hidden;
          min-height: 220px;
          display: flex; flex-direction: column;
        }
        .temporal-scenes-row.scenes-expanded .temporal-scene-card {
          min-height: 520px;
        }
        .scene-card-inner {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          flex: 1;
          min-height: 480px;
        }
        .scene-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.55);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          flex-shrink: 0;
          z-index: 5;
        }
        .scene-tag-pill {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 9px;
          border-radius: 999px;
          letter-spacing: 0.03em;
        }
        .tag-before { background: rgba(6, 182, 212, 0.22); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.45); }
        .tag-after  { background: rgba(139, 92, 246, 0.22); color: #c4b5fd; border: 1px solid rgba(139, 92, 246, 0.45); }
        .scene-file-title {
          font-size: 0.74rem;
          color: var(--text-secondary);
          max-width: 160px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .scene-file-size {
          font-size: 0.68rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.06);
          padding: 1px 6px;
          border-radius: 4px;
        }
        .scene-action-btn {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 6px;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #e2e8f0;
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .scene-action-btn.btn-expand:hover {
          background: rgba(14, 165, 233, 0.3);
          border-color: rgba(56, 189, 248, 0.6);
          color: #fff;
        }
        .scene-action-btn.btn-remove:hover {
          background: rgba(239, 68, 68, 0.25);
          border-color: rgba(239, 68, 68, 0.5);
          color: #fca5a5;
        }
        .scene-before {
          background: rgba(6,182,212,0.04);
          border: 1.5px dashed rgba(6,182,212,0.3);
        }
        .scene-after {
          background: rgba(139,92,246,0.04);
          border: 1.5px dashed rgba(139,92,246,0.3);
        }
        .temporal-scene-card:hover {
          box-shadow: 0 8px 30px rgba(0,0,0,0.35);
        }
        .scene-before:hover { border-color: rgba(6,182,212,0.65); background: rgba(6,182,212,0.08); }
        .scene-after:hover  { border-color: rgba(139,92,246,0.65); background: rgba(139,92,246,0.08); }
        .temporal-scene-card.drag-over {
          transform: scale(1.01);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.45), 0 12px 40px rgba(0,0,0,0.4);
          border-style: solid;
        }
        .temporal-scene-card.has-image { border-style: solid; }
        /* empty drop body */
        .scene-drop-body {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0.4rem; padding: 2rem 1.5rem;
          text-align: center;
        }
        .scene-drop-icon { font-size: 2.2rem; line-height: 1; }
        .scene-drop-heading { font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin-top: 0.3rem; }
        .scene-drop-sub { font-size: 0.78rem; color: var(--text-muted); }
        .scene-drop-hint { font-size: 0.7rem; color: var(--text-muted); opacity: 0.7; margin-top: 0.2rem; }
        /* preview */
        .scene-preview-wrap {
          position: relative;
          flex: 1;
          min-height: 440px;
          width: 100%;
          height: 100%;
          display: flex;
        }
        /* connector */
        .temporal-connector {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0.3rem; padding: 0.5rem 0;
          flex-shrink: 0;
        }
        .connector-line {
          width: 2px; flex: 1;
          background: linear-gradient(to bottom, transparent, rgba(59,130,246,0.4), transparent);
          min-height: 20px;
        }
        .connector-node {
          width: 38px; height: 38px; border-radius: 50%;
          background: rgba(59,130,246,0.12);
          border: 1.5px solid rgba(59,130,246,0.45);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem;
          box-shadow: 0 0 12px rgba(59,130,246,0.2);
        }
        .connector-label {
          font-size: 0.65rem; font-weight: 700;
          color: var(--text-accent);
          letter-spacing: 0.08em;
        }
        /* ready banner */
        .temporal-ready-banner {
          margin-top: 0.75rem;
          display: flex; align-items: center; gap: 0.5rem;
          padding: 0.65rem 1rem;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: var(--radius-md);
          font-size: 0.8rem; color: #6ee7b7;
          font-weight: 500;
          animation: fadeIn 0.3s ease;
        }
        /* ROI follow-up query panel */
        .roi-followup-panel {
          margin-top: 0.85rem;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.32);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          animation: fadeIn 0.3s ease;
        }
        .roi-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }
        .roi-icon { font-size: 1rem; }
        .roi-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: #7dd3fc;
          letter-spacing: 0.02em;
        }
        .roi-sync-toggle {
          margin-left: auto;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--text-secondary);
          padding: 3px 12px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
        }
        .roi-sync-toggle:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
        }
        .roi-sync-toggle.synced {
          background: rgba(59, 130, 246, 0.25);
          border-color: rgba(59, 130, 246, 0.5);
          color: #93c5fd;
        }
        .roi-desc {
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin-bottom: 0.55rem;
        }
        .roi-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .roi-chip {
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #bae6fd;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
        }
        .roi-chip:hover {
          background: rgba(56, 189, 248, 0.25);
          border-color: rgba(56, 189, 248, 0.6);
          color: #fff;
          transform: translateY(-1px);
        }
        .visualize-trigger-btn {
          margin-left: auto;
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.25), rgba(99, 102, 241, 0.3));
          border: 1.5px solid rgba(56, 189, 248, 0.6);
          color: #bae6fd;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.25);
        }
        .visualize-trigger-btn:hover {
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.45), rgba(99, 102, 241, 0.5));
          border-color: #38bdf8;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
        }
        .visualize-banner-btn {
          margin-left: auto;
          background: rgba(16, 185, 129, 0.25);
          border: 1px solid rgba(16, 185, 129, 0.5);
          color: #a7f3d0;
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 0.74rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .visualize-banner-btn:hover {
          background: rgba(16, 185, 129, 0.4);
          color: #fff;
        }
        /* ── Fullscreen Visualizer Modal Styles ──────────────── */
        .visualizer-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(3, 7, 18, 0.94);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .visualizer-modal-dialog {
          width: 98vw;
          max-width: 1750px;
          height: 96vh;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(56, 189, 248, 0.35);
          border-radius: 16px;
          box-shadow: 0 30px 80px -15px rgba(0, 0, 0, 0.85), 0 0 50px rgba(56, 189, 248, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .visualizer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: rgba(0, 0, 0, 0.45);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          flex-shrink: 0;
        }
        .visualizer-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .visualizer-subtitle {
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin: 2px 0 0 0;
        }
        .visualizer-close-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: var(--text-secondary);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.15s ease;
        }
        .visualizer-close-btn:hover {
          background: rgba(239, 68, 68, 0.25);
          border-color: rgba(239, 68, 68, 0.6);
          color: #fca5a5;
        }
        .visualizer-stage-grid {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          padding: 1.25rem;
          overflow: hidden;
          min-height: 520px;
        }
        .visualizer-stage-panel {
          display: flex;
          flex-direction: column;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          min-height: 0;
        }
        .panel-before { border-color: rgba(6, 182, 212, 0.35); }
        .panel-after  { border-color: rgba(139, 92, 246, 0.35); }
        .stage-panel-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.65rem 1.1rem;
          background: rgba(0, 0, 0, 0.35);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          flex-shrink: 0;
        }
        .stage-panel-tag {
          font-size: 0.74rem;
          font-weight: 700;
          padding: 2px 9px;
          border-radius: 999px;
        }
        .stage-file-name {
          font-size: 0.74rem;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }
        .stage-poly-badge {
          margin-left: auto;
          font-size: 0.72rem;
          font-weight: 600;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.35);
          padding: 2px 8px;
          border-radius: 999px;
        }
        .stage-annotator-container {
          flex: 1;
          position: relative;
          min-height: 480px;
          height: 100%;
          overflow: hidden;
          display: flex;
        }
        .stage-annotator-container .polygon-annotator-container {
          width: 100%;
          height: 100%;
          min-height: 480px;
        }
        .stage-empty-placeholder {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          font-size: 0.88rem;
          cursor: pointer;
        }
        .stage-empty-placeholder span { font-size: 2.8rem; margin-bottom: 0.6rem; }
        .visualizer-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1rem 1.5rem;
          background: rgba(0, 0, 0, 0.55);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          flex-shrink: 0;
        }
        .visualizer-footer-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 0;
        }
        .visualizer-footer-prompt {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .visualizer-prompt-input {
          flex: 1;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 8px;
          padding: 0.65rem 0.95rem;
          color: #ffffff;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.15s ease;
        }
        .visualizer-prompt-input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.25);
        }
        .visualizer-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .visualizer-footer-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-shrink: 0;
        }
        @media (max-width: 860px) {
          .visualizer-stage-grid { grid-template-columns: 1fr; }
          .visualizer-footer { flex-direction: column; align-items: stretch; }
          .visualizer-footer-actions { justify-content: flex-end; }
        }
        @media (max-width: 640px) {
          .temporal-scenes-row { grid-template-columns: 1fr; }
          .temporal-connector { flex-direction: row; }
          .connector-line { width: 100%; height: 2px; flex: 1; min-height: unset; }
        }
      `})]})}const uE={vqa:"badge-blue",captioning:"badge-cyan",grounding:"badge-purple",change_detection:"badge-amber",change_vqa:"badge-amber",sar_optical_joint:"badge-green",unknown:"badge-red"},dE={vqa:"❓",captioning:"📝",grounding:"📍",change_detection:"🔄",change_vqa:"💧",sar_optical_joint:"📡",unknown:"❔"};function fE({spec:t}){const[e,n]=oe.useState(!0);return w.jsxs("div",{className:"card fade-in-up",id:"earthquery-spec-panel",children:[w.jsxs("button",{className:"spec-toggle",onClick:()=>n(i=>!i),"aria-expanded":e,id:"spec-toggle-btn",children:[w.jsxs("span",{className:"flex items-center gap-2",children:[w.jsx("span",{style:{fontSize:"1.1rem"},children:"🧠"}),w.jsx("span",{className:"section-label",style:{margin:0},children:"How I understood your question"}),w.jsxs("span",{className:`badge ${uE[t.task_type]}`,children:[dE[t.task_type]," ",t.task_type.replace(/_/g," ")]})]}),w.jsx("span",{className:"toggle-arrow",children:e?"▲":"▼"})]}),w.jsxs("div",{className:`collapsible-content ${e?"open":"closed"}`,children:[w.jsx("div",{className:"divider"}),w.jsxs("div",{className:"spec-grid",children:[w.jsx(Yr,{label:"Intent",value:t.intent,highlight:!0}),w.jsx(Yr,{label:"Task type",value:t.task_type.replace(/_/g," ")}),w.jsx(Yr,{label:"Requires 2 images",value:t.requires_two_images?"Yes":"No"}),w.jsx(Yr,{label:"Sensor hint",value:t.sensor_hint??"any"}),t.temporal_context&&w.jsx(Yr,{label:"Temporal context",value:t.temporal_context}),w.jsx(Yr,{label:"Extracted entities",value:t.extracted_entities.length>0?t.extracted_entities.join(", "):"(none detected)"}),w.jsx(Yr,{label:"Classification confidence",value:`${(t.confidence*100).toFixed(1)}%`})]})]}),w.jsx("style",{children:`
        .spec-toggle {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; background: none; border: none; cursor: pointer; padding: 0;
          color: var(--text-primary);
        }
        .toggle-arrow { color: var(--text-muted); font-size: 0.75rem; }
        .spec-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
        @media (max-width: 600px) { .spec-grid { grid-template-columns: 1fr; } }
      `})]})}function Yr({label:t,value:e,highlight:n}){return w.jsxs("div",{className:"spec-row",children:[w.jsx("p",{className:"section-label",children:t}),w.jsx("p",{style:{color:n?"var(--text-accent)":"var(--text-primary)",fontSize:"0.88rem",fontWeight:n?600:400},children:e})]})}function hE({sensor:t}){const e=t.selected_sensor.toLowerCase().includes("multi"),n=t.selected_sensor.toLowerCase().includes("sar"),i=e?"🛰+📡":n?"📡":"🛰",r=e?"var(--accent-tertiary)":n?"var(--accent-warning)":"var(--accent-secondary)";return w.jsxs("div",{className:"card sensor-card fade-in-up",id:"sensor-decision-panel",children:[w.jsx("p",{className:"section-label",children:"📡 Sensor Selection"}),w.jsxs("div",{className:"sensor-header",children:[w.jsx("span",{className:"sensor-icon",style:{color:r},children:i}),w.jsxs("div",{children:[w.jsx("h3",{style:{color:r,fontSize:"0.95rem"},children:t.selected_sensor}),t.fallback_considered&&w.jsx("span",{className:"badge badge-amber",style:{marginTop:"4px"},children:"⚠ Fallback considered"})]})]}),w.jsx("p",{className:"sensor-rationale",children:t.rationale}),t.cloud_cover_estimate!==null&&w.jsxs("div",{className:"cloud-row",children:[w.jsx("span",{className:"text-xs text-muted",children:"☁ Cloud cover estimate"}),w.jsxs("div",{className:"cloud-bar-wrap",children:[w.jsx("div",{className:"progress-bar",children:w.jsx("div",{className:"progress-bar-fill",style:{width:`${Math.min(t.cloud_cover_estimate,100)}%`,background:t.cloud_cover_estimate>25?"linear-gradient(90deg, var(--accent-warning), var(--accent-danger))":"linear-gradient(90deg, var(--accent-success), var(--accent-secondary))"}})}),w.jsxs("span",{className:"text-xs",style:{color:t.cloud_cover_estimate>25?"var(--accent-warning)":"var(--accent-success)"},children:[t.cloud_cover_estimate.toFixed(1),"%"]})]})]}),w.jsx("style",{children:`
        .sensor-header { display: flex; align-items: flex-start; gap: 0.75rem; margin: 0.6rem 0 0.5rem; }
        .sensor-icon { font-size: 1.8rem; line-height: 1; flex-shrink: 0; }
        .sensor-rationale { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; }
        .cloud-row { margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.3rem; }
        .cloud-bar-wrap { display: flex; align-items: center; gap: 0.5rem; }
        .cloud-bar-wrap .progress-bar { flex: 1; }
      `})]})}const pE={vqa_agent:"var(--accent-primary)",caption_agent:"var(--accent-secondary)",grounding_agent:"var(--accent-tertiary)",change_detection_agent:"var(--accent-warning)",change_vqa_agent:"var(--accent-warning)",sar_optical_agent:"var(--accent-success)"};function mE({output:t,index:e}){const[n,i]=oe.useState(!0),r=pE[t.agent_id]??"var(--accent-primary)",s=Math.round(t.raw_score*100);return w.jsxs("div",{className:"card agent-card fade-in-up",id:`agent-card-${t.agent_id}`,style:{animationDelay:`${e*.07}s`,borderLeft:`3px solid ${r}`},children:[w.jsxs("div",{className:"agent-header",onClick:()=>i(o=>!o),children:[w.jsxs("div",{className:"agent-title-row",children:[w.jsxs("span",{className:"agent-badge",style:{color:r,borderColor:r},children:["Agent ",e+1]}),w.jsx("span",{style:{fontWeight:600,fontSize:"0.9rem"},children:t.agent_name}),t.error&&w.jsx("span",{className:"badge badge-red",children:"Error"})]}),w.jsxs("div",{className:"agent-meta",children:[w.jsx(gE,{score:s,color:r}),w.jsx("span",{className:"toggle-arrow",children:n?"▲":"▼"})]})]}),w.jsx("p",{className:"text-xs text-muted",style:{marginTop:"4px"},children:t.task}),t.evidence_regions&&t.evidence_regions.length>0&&w.jsx("div",{className:"evidence-chips",children:t.evidence_regions.map((o,a)=>w.jsxs("span",{className:"badge badge-blue",children:["📌 ",o.label," (",(o.confidence*100).toFixed(0),"%)"]},a))}),w.jsxs("div",{className:`collapsible-content ${n?"open":"closed"}`,children:[w.jsx("div",{className:"divider"}),t.error?w.jsxs("p",{className:"text-sm",style:{color:"var(--accent-danger)"},children:["⚠ ",t.error]}):w.jsx(xE,{result:t.result})]}),w.jsx("style",{children:`
        .agent-card { cursor: default; }
        .agent-header { display: flex; align-items: flex-start; justify-content: space-between; cursor: pointer; }
        .agent-title-row { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
        .agent-badge { font-size: 0.68rem; font-weight: 800; text-transform: uppercase; border: 1px solid; border-radius: 4px; padding: 1px 6px; }
        .agent-meta { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
        .evidence-chips { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.5rem; }
        .score-ring { position: relative; width: 36px; height: 36px; flex-shrink: 0; }
        .score-ring svg { transform: rotate(-90deg); }
        .score-ring .score-text { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-weight: 700; }
      `})]})}function gE({score:t,color:e}){const i=2*Math.PI*14,r=t/100*i;return w.jsxs("div",{className:"score-ring",children:[w.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 36 36",children:[w.jsx("circle",{cx:"18",cy:"18",r:14,fill:"none",stroke:"rgba(255,255,255,0.08)",strokeWidth:"3"}),w.jsx("circle",{cx:"18",cy:"18",r:14,fill:"none",stroke:e,strokeWidth:"3",strokeDasharray:`${r} ${i}`,strokeLinecap:"round",style:{transition:"stroke-dasharray 0.8s ease"}})]}),w.jsx("div",{className:"score-text",style:{color:e},children:t})]})}function xE({result:t}){const e=["answer","caption","change_type","change_map_description","severity","changed_area_km2","change_percent","fusion_insights","num_objects_detected","land_cover_distribution"],n=Object.entries(t).filter(([i])=>!i.includes("inference_time")&&i!=="model").sort(([i],[r])=>{const s=e.indexOf(i),o=e.indexOf(r);return(s===-1?99:s)-(o===-1?99:o)});return w.jsxs("div",{className:"result-fields",children:[n.map(([i,r])=>{const s=i.replace(/_/g," ");return Array.isArray(r)?w.jsxs("div",{className:"rf-row",children:[w.jsx("span",{className:"rf-label",children:s}),w.jsx("ul",{className:"rf-list",children:r.map((o,a)=>w.jsx("li",{children:String(o)},a))})]},i):typeof r=="object"&&r!==null?w.jsxs("div",{className:"rf-row",children:[w.jsx("span",{className:"rf-label",children:s}),w.jsx("div",{className:"rf-dict",children:Object.entries(r).map(([o,a])=>w.jsxs("span",{className:"rf-chip",children:[w.jsxs("span",{style:{color:"var(--text-muted)"},children:[o.replace(/_/g," "),": "]}),w.jsx("span",{style:{color:"var(--text-primary)",fontWeight:600},children:String(a)})]},o))})]},i):w.jsxs("div",{className:"rf-row",children:[w.jsx("span",{className:"rf-label",children:s}),w.jsx("span",{className:"rf-value",children:String(r)})]},i)}),w.jsx("style",{children:`
        .result-fields { display: flex; flex-direction: column; gap: 0.5rem; }
        .rf-row { display: grid; grid-template-columns: 140px 1fr; gap: 0.5rem; align-items: baseline; }
        .rf-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); white-space: nowrap; }
        .rf-value { font-size: 0.85rem; color: var(--text-secondary); }
        .rf-list { font-size: 0.82rem; color: var(--text-secondary); padding-left: 1rem; line-height: 1.7; }
        .rf-dict { display: flex; flex-wrap: wrap; gap: 0.3rem; }
        .rf-chip { display: inline-flex; gap: 2px; font-size: 0.75rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 4px; padding: 2px 6px; }
        @media (max-width: 500px) { .rf-row { grid-template-columns: 1fr; } }
      `})]})}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function ml(t){return t+.5|0}const Tr=(t,e,n)=>Math.max(Math.min(t,n),e);function ha(t){return Tr(ml(t*2.55),0,255)}function kr(t){return Tr(ml(t*255),0,255)}function Xi(t){return Tr(ml(t/2.55)/100,0,1)}function H0(t){return Tr(ml(t*100),0,100)}const Hn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ih=[..."0123456789ABCDEF"],_E=t=>Ih[t&15],vE=t=>Ih[(t&240)>>4]+Ih[t&15],zl=t=>(t&240)>>4===(t&15),yE=t=>zl(t.r)&&zl(t.g)&&zl(t.b)&&zl(t.a);function SE(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Hn[t[1]]*17,g:255&Hn[t[2]]*17,b:255&Hn[t[3]]*17,a:e===5?Hn[t[4]]*17:255}:(e===7||e===9)&&(n={r:Hn[t[1]]<<4|Hn[t[2]],g:Hn[t[3]]<<4|Hn[t[4]],b:Hn[t[5]]<<4|Hn[t[6]],a:e===9?Hn[t[7]]<<4|Hn[t[8]]:255})),n}const bE=(t,e)=>t<255?e(t):"";function ME(t){var e=yE(t)?_E:vE;return t?"#"+e(t.r)+e(t.g)+e(t.b)+bE(t.a,e):void 0}const wE=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function NS(t,e,n){const i=e*Math.min(n,1-n),r=(s,o=(s+t/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[r(0),r(8),r(4)]}function EE(t,e,n){const i=(r,s=(r+t/60)%6)=>n-n*e*Math.max(Math.min(s,4-s,1),0);return[i(5),i(3),i(1)]}function TE(t,e,n){const i=NS(t,1,.5);let r;for(e+n>1&&(r=1/(e+n),e*=r,n*=r),r=0;r<3;r++)i[r]*=1-e-n,i[r]+=e;return i}function AE(t,e,n,i,r){return t===r?(e-n)/i+(e<n?6:0):e===r?(n-t)/i+2:(t-e)/i+4}function Um(t){const n=t.r/255,i=t.g/255,r=t.b/255,s=Math.max(n,i,r),o=Math.min(n,i,r),a=(s+o)/2;let l,c,u;return s!==o&&(u=s-o,c=a>.5?u/(2-s-o):u/(s+o),l=AE(n,i,r,u,s),l=l*60+.5),[l|0,c||0,a]}function km(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(kr)}function Om(t,e,n){return km(NS,t,e,n)}function CE(t,e,n){return km(TE,t,e,n)}function RE(t,e,n){return km(EE,t,e,n)}function DS(t){return(t%360+360)%360}function PE(t){const e=wE.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?ha(+e[5]):kr(+e[5]));const r=DS(+e[2]),s=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?i=CE(r,s,o):e[1]==="hsv"?i=RE(r,s,o):i=Om(r,s,o),{r:i[0],g:i[1],b:i[2],a:n}}function LE(t,e){var n=Um(t);n[0]=DS(n[0]+e),n=Om(n),t.r=n[0],t.g=n[1],t.b=n[2]}function NE(t){if(!t)return;const e=Um(t),n=e[0],i=H0(e[1]),r=H0(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${r}%, ${Xi(t.a)})`:`hsl(${n}, ${i}%, ${r}%)`}const G0={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},W0={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function DE(){const t={},e=Object.keys(W0),n=Object.keys(G0);let i,r,s,o,a;for(i=0;i<e.length;i++){for(o=a=e[i],r=0;r<n.length;r++)s=n[r],a=a.replace(s,G0[s]);s=parseInt(W0[o],16),t[a]=[s>>16&255,s>>8&255,s&255]}return t}let Bl;function IE(t){Bl||(Bl=DE(),Bl.transparent=[0,0,0,0]);const e=Bl[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const FE=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function UE(t){const e=FE.exec(t);let n=255,i,r,s;if(e){if(e[7]!==i){const o=+e[7];n=e[8]?ha(o):Tr(o*255,0,255)}return i=+e[1],r=+e[3],s=+e[5],i=255&(e[2]?ha(i):Tr(i,0,255)),r=255&(e[4]?ha(r):Tr(r,0,255)),s=255&(e[6]?ha(s):Tr(s,0,255)),{r:i,g:r,b:s,a:n}}}function kE(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Xi(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Wd=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Fs=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function OE(t,e,n){const i=Fs(Xi(t.r)),r=Fs(Xi(t.g)),s=Fs(Xi(t.b));return{r:kr(Wd(i+n*(Fs(Xi(e.r))-i))),g:kr(Wd(r+n*(Fs(Xi(e.g))-r))),b:kr(Wd(s+n*(Fs(Xi(e.b))-s))),a:t.a+n*(e.a-t.a)}}function Vl(t,e,n){if(t){let i=Um(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=Om(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function IS(t,e){return t&&Object.assign(e||{},t)}function j0(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=kr(t[3]))):(e=IS(t,{r:0,g:0,b:0,a:1}),e.a=kr(e.a)),e}function zE(t){return t.charAt(0)==="r"?UE(t):PE(t)}let FS=class Fh{constructor(e){if(e instanceof Fh)return e;const n=typeof e;let i;n==="object"?i=j0(e):n==="string"&&(i=SE(e)||IE(e)||zE(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=IS(this._rgb);return e&&(e.a=Xi(e.a)),e}set rgb(e){this._rgb=j0(e)}rgbString(){return this._valid?kE(this._rgb):void 0}hexString(){return this._valid?ME(this._rgb):void 0}hslString(){return this._valid?NE(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,r=e.rgb;let s;const o=n===s?.5:n,a=2*o-1,l=i.a-r.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;s=1-c,i.r=255&c*i.r+s*r.r+.5,i.g=255&c*i.g+s*r.g+.5,i.b=255&c*i.b+s*r.b+.5,i.a=o*i.a+(1-o)*r.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=OE(this._rgb,e._rgb,n)),this}clone(){return new Fh(this.rgb)}alpha(e){return this._rgb.a=kr(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=ml(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Vl(this._rgb,2,e),this}darken(e){return Vl(this._rgb,2,-e),this}saturate(e){return Vl(this._rgb,1,e),this}desaturate(e){return Vl(this._rgb,1,-e),this}rotate(e){return LE(this._rgb,e),this}};/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Ui(){}const BE=(()=>{let t=0;return()=>t++})();function bt(t){return t==null}function Dt(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function et(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function hn(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function _i(t,e){return hn(t)?t:e}function mt(t,e){return typeof t>"u"?e:t}const VE=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Lt(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function dt(t,e,n,i){let r,s,o;if(Dt(t))for(s=t.length,r=0;r<s;r++)e.call(n,t[r],r);else if(et(t))for(o=Object.keys(t),s=o.length,r=0;r<s;r++)e.call(n,t[o[r]],o[r])}function Mu(t,e){let n,i,r,s;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(r=t[n],s=e[n],r.datasetIndex!==s.datasetIndex||r.index!==s.index)return!1;return!0}function wu(t){if(Dt(t))return t.map(wu);if(et(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let r=0;for(;r<i;++r)e[n[r]]=wu(t[n[r]]);return e}return t}function US(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function HE(t,e,n,i){if(!US(t))return;const r=e[t],s=n[t];et(r)&&et(s)?tl(r,s,i):e[t]=wu(s)}function tl(t,e,n){const i=Dt(e)?e:[e],r=i.length;if(!et(t))return t;n=n||{};const s=n.merger||HE;let o;for(let a=0;a<r;++a){if(o=i[a],!et(o))continue;const l=Object.keys(o);for(let c=0,u=l.length;c<u;++c)s(l[c],t,o,n)}return t}function Ra(t,e){return tl(t,e,{merger:GE})}function GE(t,e,n){if(!US(t))return;const i=e[t],r=n[t];et(i)&&et(r)?Ra(i,r):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=wu(r))}const X0={"":t=>t,x:t=>t.x,y:t=>t.y};function WE(t){const e=t.split("."),n=[];let i="";for(const r of e)i+=r,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function jE(t){const e=WE(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function nl(t,e){return(X0[e]||(X0[e]=jE(e)))(t)}function zm(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Eu=t=>typeof t<"u",Vr=t=>typeof t=="function",$0=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function XE(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const qt=Math.PI,Kn=2*qt,$E=Kn+qt,Tu=Number.POSITIVE_INFINITY,YE=qt/180,Fn=qt/2,qr=qt/4,Y0=qt*2/3,kS=Math.log10,No=Math.sign;function Pa(t,e,n){return Math.abs(t-e)<n}function q0(t){const e=Math.round(t);t=Pa(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(kS(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function qE(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((r,s)=>r-s).pop(),e}function KE(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function Au(t){return!KE(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function ZE(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function QE(t,e,n){let i,r,s;for(i=0,r=t.length;i<r;i++)s=t[i][n],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function fs(t){return t*(qt/180)}function Bm(t){return t*(180/qt)}function K0(t){if(!hn(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function JE(t,e){const n=e.x-t.x,i=e.y-t.y,r=Math.sqrt(n*n+i*i);let s=Math.atan2(i,n);return s<-.5*qt&&(s+=Kn),{angle:s,distance:r}}function Uh(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function eT(t,e){return(t-e+$E)%Kn-qt}function Nn(t){return(t%Kn+Kn)%Kn}function OS(t,e,n,i){const r=Nn(t),s=Nn(e),o=Nn(n),a=Nn(s-r),l=Nn(o-r),c=Nn(r-s),u=Nn(r-o);return r===s||r===o||i&&s===o||a>l&&c<u}function Ki(t,e,n){return Math.max(e,Math.min(n,t))}function tT(t){return Ki(t,-32768,32767)}function zS(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function Vm(t,e,n){n=n||(o=>t[o]<e);let i=t.length-1,r=0,s;for(;i-r>1;)s=r+i>>1,n(s)?r=s:i=s;return{lo:r,hi:i}}const kh=(t,e,n,i)=>Vm(t,n,i?r=>{const s=t[r][e];return s<n||s===n&&t[r+1][e]===n}:r=>t[r][e]<n),nT=(t,e,n)=>Vm(t,n,i=>t[i][e]>=n);function iT(t,e,n){let i=0,r=t.length;for(;i<r&&t[i]<e;)i++;for(;r>i&&t[r-1]>n;)r--;return i>0||r<t.length?t.slice(i,r):t}const BS=["push","pop","shift","splice","unshift"];function rT(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),BS.forEach(n=>{const i="_onData"+zm(n),r=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...s){const o=r.apply(this,s);return t._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...s)}),o}})})}function Z0(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,r=i.indexOf(e);r!==-1&&i.splice(r,1),!(i.length>0)&&(BS.forEach(s=>{delete t[s]}),delete t._chartjs)}function sT(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const VS=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function HS(t,e){let n=[],i=!1;return function(...r){n=r,i||(i=!0,VS.call(window,()=>{i=!1,t.apply(e,n)}))}}function oT(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const aT=t=>t==="start"?"left":t==="end"?"right":"center",Q0=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,Hl=t=>t===0||t===1,J0=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Kn/n)),ex=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Kn/n)+1,La={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*Fn)+1,easeOutSine:t=>Math.sin(t*Fn),easeInOutSine:t=>-.5*(Math.cos(qt*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>Hl(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Hl(t)?t:J0(t,.075,.3),easeOutElastic:t=>Hl(t)?t:ex(t,.075,.3),easeInOutElastic(t){return Hl(t)?t:t<.5?.5*J0(t*2,.1125,.45):.5+.5*ex(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-La.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?La.easeInBounce(t*2)*.5:La.easeOutBounce(t*2-1)*.5+.5};function Hm(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function tx(t){return Hm(t)?t:new FS(t)}function jd(t){return Hm(t)?t:new FS(t).saturate(.5).darken(.1).hexString()}const lT=["x","y","borderWidth","radius","tension"],cT=["color","borderColor","backgroundColor"];function uT(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:cT},numbers:{type:"number",properties:lT}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function dT(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const nx=new Map;function fT(t,e){e=e||{};const n=t+JSON.stringify(e);let i=nx.get(n);return i||(i=new Intl.NumberFormat(t,e),nx.set(n,i)),i}function GS(t,e,n){return fT(e,n).format(t)}const hT={values(t){return Dt(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let r,s=t;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(r="scientific"),s=pT(t,n)}const o=kS(Math.abs(s)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:r,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),GS(t,i,l)}};function pT(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var WS={formatters:hT};function mT(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:WS.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const ws=Object.create(null),Oh=Object.create(null);function Na(t,e){if(!e)return t;const n=e.split(".");for(let i=0,r=n.length;i<r;++i){const s=n[i];t=t[s]||(t[s]=Object.create(null))}return t}function Xd(t,e,n){return typeof e=="string"?tl(Na(t,e),n):tl(Na(t,""),e)}class gT{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,r)=>jd(r.backgroundColor),this.hoverBorderColor=(i,r)=>jd(r.borderColor),this.hoverColor=(i,r)=>jd(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Xd(this,e,n)}get(e){return Na(this,e)}describe(e,n){return Xd(Oh,e,n)}override(e,n){return Xd(ws,e,n)}route(e,n,i,r){const s=Na(this,e),o=Na(this,i),a="_"+n;Object.defineProperties(s,{[a]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=o[r];return et(l)?Object.assign({},c,l):mt(l,c)},set(l){this[a]=l}}})}apply(e){e.forEach(n=>n(this))}}var Ut=new gT({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[uT,dT,mT]);function xT(t){return!t||bt(t.size)||bt(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Cu(t,e,n,i,r){let s=e[r];return s||(s=e[r]=t.measureText(r).width,n.push(r)),s>i&&(i=s),i}function _T(t,e,n,i){i=i||{};let r=i.data=i.data||{},s=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(r=i.data={},s=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let o=0;const a=n.length;let l,c,u,f,d;for(l=0;l<a;l++)if(f=n[l],f!=null&&!Dt(f))o=Cu(t,r,s,o,f);else if(Dt(f))for(c=0,u=f.length;c<u;c++)d=f[c],d!=null&&!Dt(d)&&(o=Cu(t,r,s,o,d));t.restore();const p=s.length/2;if(p>n.length){for(l=0;l<p;l++)delete r[s[l]];s.splice(0,p)}return o}function Kr(t,e,n){const i=t.currentDevicePixelRatio,r=n!==0?Math.max(n/2,.5):0;return Math.round((e-r)*i)/i+r}function ix(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function zh(t,e,n,i){vT(t,e,n,i)}function vT(t,e,n,i,r){let s,o,a,l,c,u,f,d;const p=e.pointStyle,g=e.rotation,v=e.radius;let m=(g||0)*YE;if(p&&typeof p=="object"&&(s=p.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(m),t.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),t.restore();return}if(!(isNaN(v)||v<=0)){switch(t.beginPath(),p){default:t.arc(n,i,v,0,Kn),t.closePath();break;case"triangle":u=v,t.moveTo(n+Math.sin(m)*u,i-Math.cos(m)*v),m+=Y0,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*v),m+=Y0,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*v),t.closePath();break;case"rectRounded":c=v*.516,l=v-c,o=Math.cos(m+qr)*l,f=Math.cos(m+qr)*l,a=Math.sin(m+qr)*l,d=Math.sin(m+qr)*l,t.arc(n-f,i-a,c,m-qt,m-Fn),t.arc(n+d,i-o,c,m-Fn,m),t.arc(n+f,i+a,c,m,m+Fn),t.arc(n-d,i+o,c,m+Fn,m+qt),t.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*v,u=l,t.rect(n-u,i-l,2*u,2*l);break}m+=qr;case"rectRot":f=Math.cos(m)*v,o=Math.cos(m)*v,a=Math.sin(m)*v,d=Math.sin(m)*v,t.moveTo(n-f,i-a),t.lineTo(n+d,i-o),t.lineTo(n+f,i+a),t.lineTo(n-d,i+o),t.closePath();break;case"crossRot":m+=qr;case"cross":f=Math.cos(m)*v,o=Math.cos(m)*v,a=Math.sin(m)*v,d=Math.sin(m)*v,t.moveTo(n-f,i-a),t.lineTo(n+f,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o);break;case"star":f=Math.cos(m)*v,o=Math.cos(m)*v,a=Math.sin(m)*v,d=Math.sin(m)*v,t.moveTo(n-f,i-a),t.lineTo(n+f,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o),m+=qr,f=Math.cos(m)*v,o=Math.cos(m)*v,a=Math.sin(m)*v,d=Math.sin(m)*v,t.moveTo(n-f,i-a),t.lineTo(n+f,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o);break;case"line":o=Math.cos(m)*v,a=Math.sin(m)*v,t.moveTo(n-o,i-a),t.lineTo(n+o,i+a);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(m)*v,i+Math.sin(m)*v);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Zi(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function Gm(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Wm(t){t.restore()}function yT(t,e,n,i,r){if(!e)return t.lineTo(n.x,n.y);if(r==="middle"){const s=(e.x+n.x)/2;t.lineTo(s,e.y),t.lineTo(s,n.y)}else r==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function ST(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function bT(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),bt(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function MT(t,e,n,i,r){if(r.strikethrough||r.underline){const s=t.measureText(i),o=e-s.actualBoundingBoxLeft,a=e+s.actualBoundingBoxRight,l=n-s.actualBoundingBoxAscent,c=n+s.actualBoundingBoxDescent,u=r.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=r.decorationWidth||2,t.moveTo(o,u),t.lineTo(a,u),t.stroke()}}function wT(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Ru(t,e,n,i,r,s={}){const o=Dt(e)?e:[e],a=s.strokeWidth>0&&s.strokeColor!=="";let l,c;for(t.save(),t.font=r.string,bT(t,s),l=0;l<o.length;++l)c=o[l],s.backdrop&&wT(t,s.backdrop),a&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),bt(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(c,n,i,s.maxWidth)),t.fillText(c,n,i,s.maxWidth),MT(t,n,i,c,s),i+=Number(r.lineHeight);t.restore()}function Bh(t,e){const{x:n,y:i,w:r,h:s,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,1.5*qt,qt,!0),t.lineTo(n,i+s-o.bottomLeft),t.arc(n+o.bottomLeft,i+s-o.bottomLeft,o.bottomLeft,qt,Fn,!0),t.lineTo(n+r-o.bottomRight,i+s),t.arc(n+r-o.bottomRight,i+s-o.bottomRight,o.bottomRight,Fn,0,!0),t.lineTo(n+r,i+o.topRight),t.arc(n+r-o.topRight,i+o.topRight,o.topRight,0,-Fn,!0),t.lineTo(n+o.topLeft,i)}const ET=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,TT=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function AT(t,e){const n=(""+t).match(ET);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const CT=t=>+t||0;function jS(t,e){const n={},i=et(e),r=i?Object.keys(e):e,s=et(t)?i?o=>mt(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of r)n[o]=CT(s(o));return n}function RT(t){return jS(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Da(t){return jS(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Jn(t){const e=RT(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Un(t,e){t=t||{},e=e||Ut.font;let n=mt(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=mt(t.style,e.style);i&&!(""+i).match(TT)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const r={family:mt(t.family,e.family),lineHeight:AT(mt(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:mt(t.weight,e.weight),string:""};return r.string=xT(r),r}function Gl(t,e,n,i){let r,s,o;for(r=0,s=t.length;r<s;++r)if(o=t[r],o!==void 0&&o!==void 0)return o}function PT(t,e,n){const{min:i,max:r}=t,s=VE(e,(r-i)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(i,-Math.abs(s)),max:o(r,s)}}function Xr(t,e){return Object.assign(Object.create(t),e)}function jm(t,e=[""],n,i,r=()=>t[0]){const s=n||t;typeof i>"u"&&(i=qS("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:i,_getTarget:r,override:a=>jm([a,...t],e,s,i)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return $S(a,l,()=>OT(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return sx(a).includes(l)},ownKeys(a){return sx(a)},set(a,l,c){const u=a._storage||(a._storage=r());return a[l]=u[l]=c,delete a._keys,!0}})}function Do(t,e,n,i){const r={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:XS(t,i),setContext:s=>Do(t,s,n,i),override:s=>Do(t.override(s),e,n,i)};return new Proxy(r,{deleteProperty(s,o){return delete s[o],delete t[o],!0},get(s,o,a){return $S(s,o,()=>NT(s,o,a))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(s,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(s,o,a){return t[o]=a,delete s[o],!0}})}function XS(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:r=e.allKeys}=t;return{allKeys:r,scriptable:n,indexable:i,isScriptable:Vr(n)?n:()=>n,isIndexable:Vr(i)?i:()=>i}}const LT=(t,e)=>t?t+zm(e):e,Xm=(t,e)=>et(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function $S(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const i=n();return t[e]=i,i}function NT(t,e,n){const{_proxy:i,_context:r,_subProxy:s,_descriptors:o}=t;let a=i[e];return Vr(a)&&o.isScriptable(e)&&(a=DT(e,a,t,n)),Dt(a)&&a.length&&(a=IT(e,a,t,o.isIndexable)),Xm(e,a)&&(a=Do(a,r,s&&s[e],o)),a}function DT(t,e,n,i){const{_proxy:r,_context:s,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(s,o||i);return a.delete(t),Xm(t,l)&&(l=$m(r._scopes,r,t,l)),l}function IT(t,e,n,i){const{_proxy:r,_context:s,_subProxy:o,_descriptors:a}=n;if(typeof s.index<"u"&&i(t))return e[s.index%e.length];if(et(e[0])){const l=e,c=r._scopes.filter(u=>u!==l);e=[];for(const u of l){const f=$m(c,r,t,u);e.push(Do(f,s,o&&o[t],a))}}return e}function YS(t,e,n){return Vr(t)?t(e,n):t}const FT=(t,e)=>t===!0?e:typeof t=="string"?nl(e,t):void 0;function UT(t,e,n,i,r){for(const s of e){const o=FT(n,s);if(o){t.add(o);const a=YS(o._fallback,n,r);if(typeof a<"u"&&a!==n&&a!==i)return a}else if(o===!1&&typeof i<"u"&&n!==i)return null}return!1}function $m(t,e,n,i){const r=e._rootScopes,s=YS(e._fallback,n,i),o=[...t,...r],a=new Set;a.add(i);let l=rx(a,o,n,s||n,i);return l===null||typeof s<"u"&&s!==n&&(l=rx(a,o,s,l,i),l===null)?!1:jm(Array.from(a),[""],r,s,()=>kT(e,n,i))}function rx(t,e,n,i,r){for(;n;)n=UT(t,e,n,i,r);return n}function kT(t,e,n){const i=t._getTarget();e in i||(i[e]={});const r=i[e];return Dt(r)&&et(n)?n:r||{}}function OT(t,e,n,i){let r;for(const s of e)if(r=qS(LT(s,t),n),typeof r<"u")return Xm(t,r)?$m(n,i,t,r):r}function qS(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function sx(t){let e=t._keys;return e||(e=t._keys=zT(t._scopes)),e}function zT(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(r=>!r.startsWith("_")))e.add(i);return Array.from(e)}function BT(t,e,n,i){const{iScale:r}=t,{key:s="r"}=this._parsing,o=new Array(i);let a,l,c,u;for(a=0,l=i;a<l;++a)c=a+n,u=e[c],o[a]={r:r.parse(nl(u,s),c)};return o}const VT=Number.EPSILON||1e-14,Io=(t,e)=>e<t.length&&!t[e].skip&&t[e],KS=t=>t==="x"?"y":"x";function HT(t,e,n,i){const r=t.skip?e:t,s=e,o=n.skip?e:n,a=Uh(s,r),l=Uh(o,s);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const f=i*c,d=i*u;return{previous:{x:s.x-f*(o.x-r.x),y:s.y-f*(o.y-r.y)},next:{x:s.x+d*(o.x-r.x),y:s.y+d*(o.y-r.y)}}}function GT(t,e,n){const i=t.length;let r,s,o,a,l,c=Io(t,0);for(let u=0;u<i-1;++u)if(l=c,c=Io(t,u+1),!(!l||!c)){if(Pa(e[u],0,VT)){n[u]=n[u+1]=0;continue}r=n[u]/e[u],s=n[u+1]/e[u],a=Math.pow(r,2)+Math.pow(s,2),!(a<=9)&&(o=3/Math.sqrt(a),n[u]=r*o*e[u],n[u+1]=s*o*e[u])}}function WT(t,e,n="x"){const i=KS(n),r=t.length;let s,o,a,l=Io(t,0);for(let c=0;c<r;++c){if(o=a,a=l,l=Io(t,c+1),!a)continue;const u=a[n],f=a[i];o&&(s=(u-o[n])/3,a[`cp1${n}`]=u-s,a[`cp1${i}`]=f-s*e[c]),l&&(s=(l[n]-u)/3,a[`cp2${n}`]=u+s,a[`cp2${i}`]=f+s*e[c])}}function jT(t,e="x"){const n=KS(e),i=t.length,r=Array(i).fill(0),s=Array(i);let o,a,l,c=Io(t,0);for(o=0;o<i;++o)if(a=l,l=c,c=Io(t,o+1),!!l){if(c){const u=c[e]-l[e];r[o]=u!==0?(c[n]-l[n])/u:0}s[o]=a?c?No(r[o-1])!==No(r[o])?0:(r[o-1]+r[o])/2:r[o-1]:r[o]}GT(t,r,s),WT(t,s,e)}function Wl(t,e,n){return Math.max(Math.min(t,n),e)}function XT(t,e){let n,i,r,s,o,a=Zi(t[0],e);for(n=0,i=t.length;n<i;++n)o=s,s=a,a=n<i-1&&Zi(t[n+1],e),s&&(r=t[n],o&&(r.cp1x=Wl(r.cp1x,e.left,e.right),r.cp1y=Wl(r.cp1y,e.top,e.bottom)),a&&(r.cp2x=Wl(r.cp2x,e.left,e.right),r.cp2y=Wl(r.cp2y,e.top,e.bottom)))}function $T(t,e,n,i,r){let s,o,a,l;if(e.spanGaps&&(t=t.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")jT(t,r);else{let c=i?t[t.length-1]:t[0];for(s=0,o=t.length;s<o;++s)a=t[s],l=HT(c,a,t[Math.min(s+1,o-(i?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}e.capBezierPoints&&XT(t,n)}function Ym(){return typeof window<"u"&&typeof document<"u"}function qm(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Pu(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const rd=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function YT(t,e){return rd(t).getPropertyValue(e)}const qT=["top","right","bottom","left"];function _s(t,e,n){const i={};n=n?"-"+n:"";for(let r=0;r<4;r++){const s=qT[r];i[s]=parseFloat(t[e+"-"+s+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const KT=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function ZT(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:r,offsetY:s}=i;let o=!1,a,l;if(KT(r,s,t.target))a=r,l=s;else{const c=e.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function os(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,r=rd(n),s=r.boxSizing==="border-box",o=_s(r,"padding"),a=_s(r,"border","width"),{x:l,y:c,box:u}=ZT(t,n),f=o.left+(u&&a.left),d=o.top+(u&&a.top);let{width:p,height:g}=e;return s&&(p-=o.width+a.width,g-=o.height+a.height),{x:Math.round((l-f)/p*n.width/i),y:Math.round((c-d)/g*n.height/i)}}function QT(t,e,n){let i,r;if(e===void 0||n===void 0){const s=t&&qm(t);if(!s)e=t.clientWidth,n=t.clientHeight;else{const o=s.getBoundingClientRect(),a=rd(s),l=_s(a,"border","width"),c=_s(a,"padding");e=o.width-c.width-l.width,n=o.height-c.height-l.height,i=Pu(a.maxWidth,s,"clientWidth"),r=Pu(a.maxHeight,s,"clientHeight")}}return{width:e,height:n,maxWidth:i||Tu,maxHeight:r||Tu}}const Ar=t=>Math.round(t*10)/10;function JT(t,e,n,i){const r=rd(t),s=_s(r,"margin"),o=Pu(r.maxWidth,t,"clientWidth")||Tu,a=Pu(r.maxHeight,t,"clientHeight")||Tu,l=QT(t,e,n);let{width:c,height:u}=l;if(r.boxSizing==="content-box"){const d=_s(r,"border","width"),p=_s(r,"padding");c-=p.width+d.width,u-=p.height+d.height}return c=Math.max(0,c-s.width),u=Math.max(0,i?c/i:u-s.height),c=Ar(Math.min(c,o,l.maxWidth)),u=Ar(Math.min(u,a,l.maxHeight)),c&&!u&&(u=Ar(c/2)),(e!==void 0||n!==void 0)&&i&&l.height&&u>l.height&&(u=l.height,c=Ar(Math.floor(u*i))),{width:c,height:u}}function ox(t,e,n){const i=e||1,r=Ar(t.height*i),s=Ar(t.width*i);t.height=Ar(t.height),t.width=Ar(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||o.height!==r||o.width!==s?(t.currentDevicePixelRatio=i,o.height=r,o.width=s,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const eA=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};Ym()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t}();function ax(t,e){const n=YT(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function as(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function tA(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function nA(t,e,n,i){const r={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},o=as(t,r,n),a=as(r,s,n),l=as(s,e,n),c=as(o,a,n),u=as(a,l,n);return as(c,u,n)}const iA=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},rA=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function $d(t,e,n){return t?iA(e,n):rA()}function sA(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function oA(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function ZS(t){return t==="angle"?{between:OS,compare:eT,normalize:Nn}:{between:zS,compare:(e,n)=>e-n,normalize:e=>e}}function lx({start:t,end:e,count:n,loop:i,style:r}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:r}}function aA(t,e,n){const{property:i,start:r,end:s}=n,{between:o,normalize:a}=ZS(i),l=e.length;let{start:c,end:u,loop:f}=t,d,p;if(f){for(c+=l,u+=l,d=0,p=l;d<p&&o(a(e[c%l][i]),r,s);++d)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:f,style:t.style}}function QS(t,e,n){if(!n)return[t];const{property:i,start:r,end:s}=n,o=e.length,{compare:a,between:l,normalize:c}=ZS(i),{start:u,end:f,loop:d,style:p}=aA(t,e,n),g=[];let v=!1,m=null,h,x,S;const y=()=>l(r,S,h)&&a(r,S)!==0,M=()=>a(s,h)===0||l(s,S,h),E=()=>v||y(),C=()=>!v||M();for(let _=u,A=u;_<=f;++_)x=e[_%o],!x.skip&&(h=c(x[i]),h!==S&&(v=l(h,r,s),m===null&&E()&&(m=a(h,r)===0?_:A),m!==null&&C()&&(g.push(lx({start:m,end:_,loop:d,count:o,style:p})),m=null),A=_,S=h));return m!==null&&g.push(lx({start:m,end:f,loop:d,count:o,style:p})),g}function JS(t,e){const n=[],i=t.segments;for(let r=0;r<i.length;r++){const s=QS(i[r],t.points,e);s.length&&n.push(...s)}return n}function lA(t,e,n,i){let r=0,s=e-1;if(n&&!i)for(;r<e&&!t[r].skip;)r++;for(;r<e&&t[r].skip;)r++;for(r%=e,n&&(s+=r);s>r&&t[s%e].skip;)s--;return s%=e,{start:r,end:s}}function cA(t,e,n,i){const r=t.length,s=[];let o=e,a=t[e],l;for(l=e+1;l<=n;++l){const c=t[l%r];c.skip||c.stop?a.skip||(i=!1,s.push({start:e%r,end:(l-1)%r,loop:i}),e=o=c.stop?l:null):(o=l,a.skip&&(e=l)),a=c}return o!==null&&s.push({start:e%r,end:o%r,loop:i}),s}function uA(t,e){const n=t.points,i=t.options.spanGaps,r=n.length;if(!r)return[];const s=!!t._loop,{start:o,end:a}=lA(n,r,s,i);if(i===!0)return cx(t,[{start:o,end:a,loop:s}],n,e);const l=a<o?a+r:a,c=!!t._fullLoop&&o===0&&a===r-1;return cx(t,cA(n,o,l,c),n,e)}function cx(t,e,n,i){return!i||!i.setContext||!n?e:dA(t,e,n,i)}function dA(t,e,n,i){const r=t._chart.getContext(),s=ux(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,l=n.length,c=[];let u=s,f=e[0].start,d=f;function p(g,v,m,h){const x=a?-1:1;if(g!==v){for(g+=l;n[g%l].skip;)g-=x;for(;n[v%l].skip;)v+=x;g%l!==v%l&&(c.push({start:g%l,end:v%l,loop:m,style:h}),u=h,f=v%l)}}for(const g of e){f=a?f:g.start;let v=n[f%l],m;for(d=f+1;d<=g.end;d++){const h=n[d%l];m=ux(i.setContext(Xr(r,{type:"segment",p0:v,p1:h,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),fA(m,u)&&p(f,d-1,g.loop,u),v=h,u=m}f<d-1&&p(f,d-1,g.loop,u)}return c}function ux(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function fA(t,e){if(!e)return!1;const n=[],i=function(r,s){return Hm(s)?(n.includes(s)||n.push(s),n.indexOf(s)):s};return JSON.stringify(t,i)!==JSON.stringify(e,i)}function jl(t,e,n){return t.options.clip?t[n]:e[n]}function hA(t,e){const{xScale:n,yScale:i}=t;return n&&i?{left:jl(n,e,"left"),right:jl(n,e,"right"),top:jl(i,e,"top"),bottom:jl(i,e,"bottom")}:e}function eb(t,e){const n=e._clip;if(n.disabled)return!1;const i=hA(e,t.chartArea);return{left:n.left===!1?0:i.left-(n.left===!0?0:n.left),right:n.right===!1?t.width:i.right+(n.right===!0?0:n.right),top:n.top===!1?0:i.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?t.height:i.bottom+(n.bottom===!0?0:n.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class pA{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,r){const s=n.listeners[r],o=n.duration;s.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=VS.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,r)=>{if(!i.running||!i.items.length)return;const s=i.items;let o=s.length-1,a=!1,l;for(;o>=0;--o)l=s[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(e),a=!0):(s[o]=s[s.length-1],s.pop());a&&(r.draw(),this._notify(r,i,e,"progress")),s.length||(i.running=!1,this._notify(r,i,e,"complete"),i.initial=!1),n+=s.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,r)=>Math.max(i,r._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let r=i.length-1;for(;r>=0;--r)i[r].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Hi=new pA;const dx="transparent",mA={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=tx(t||dx),r=i.valid&&tx(e||dx);return r&&r.valid?r.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class gA{constructor(e,n,i,r){const s=n[i];r=Gl([e.to,r,s,e.from]);const o=Gl([e.from,s,r]);this._active=!0,this._fn=e.fn||mA[e.type||typeof o],this._easing=La[e.easing]||La.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=o,this._to=r,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const r=this._target[this._prop],s=i-this._start,o=this._duration-s;this._start=i,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=Gl([e.to,n,r,e.from]),this._from=Gl([e.from,r,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,r=this._prop,s=this._from,o=this._loop,a=this._to;let l;if(this._active=s!==a&&(o||n<i),!this._active){this._target[r]=a,this._notify(!0);return}if(n<0){this._target[r]=s;return}l=n/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[r]=this._fn(s,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let r=0;r<i.length;r++)i[r][n]()}}class tb{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!et(e))return;const n=Object.keys(Ut.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{const s=e[r];if(!et(s))return;const o={};for(const a of n)o[a]=s[a];(Dt(s.properties)&&s.properties||[r]).forEach(a=>{(a===r||!i.has(a))&&i.set(a,o)})})}_animateOptions(e,n){const i=n.options,r=_A(e,i);if(!r)return[];const s=this._createAnimations(r,i);return i.$shared&&xA(e.options.$animations,i).then(()=>{e.options=i},()=>{}),s}_createAnimations(e,n){const i=this._properties,r=[],s=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){r.push(...this._animateOptions(e,n));continue}const u=n[c];let f=s[c];const d=i.get(c);if(f)if(d&&f.active()){f.update(d,u,a);continue}else f.cancel();if(!d||!d.duration){e[c]=u;continue}s[c]=f=new gA(d,e,c,u),r.push(f)}return r}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return Hi.add(this._chart,i),!0}}function xA(t,e){const n=[],i=Object.keys(e);for(let r=0;r<i.length;r++){const s=t[i[r]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function _A(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function fx(t,e){const n=t&&t.options||{},i=n.reverse,r=n.min===void 0?e:0,s=n.max===void 0?e:0;return{start:i?s:r,end:i?r:s}}function vA(t,e,n){if(n===!1)return!1;const i=fx(t,n),r=fx(e,n);return{top:r.end,right:i.end,bottom:r.start,left:i.start}}function yA(t){let e,n,i,r;return et(t)?(e=t.top,n=t.right,i=t.bottom,r=t.left):e=n=i=r=t,{top:e,right:n,bottom:i,left:r,disabled:t===!1}}function nb(t,e){const n=[],i=t._getSortedDatasetMetas(e);let r,s;for(r=0,s=i.length;r<s;++r)n.push(i[r].index);return n}function hx(t,e,n,i={}){const r=t.keys,s=i.mode==="single";let o,a,l,c;if(e===null)return;let u=!1;for(o=0,a=r.length;o<a;++o){if(l=+r[o],l===n){if(u=!0,i.all)continue;break}c=t.values[l],hn(c)&&(s||e===0||No(e)===No(c))&&(e+=c)}return!u&&!i.all?0:e}function SA(t,e){const{iScale:n,vScale:i}=e,r=n.axis==="x"?"x":"y",s=i.axis==="x"?"x":"y",o=Object.keys(t),a=new Array(o.length);let l,c,u;for(l=0,c=o.length;l<c;++l)u=o[l],a[l]={[r]:u,[s]:t[u]};return a}function Yd(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function bA(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function MA(t){const{min:e,max:n,minDefined:i,maxDefined:r}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:r?n:Number.POSITIVE_INFINITY}}function wA(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function px(t,e,n,i){for(const r of e.getMatchingVisibleMetas(i).reverse()){const s=t[r.index];if(n&&s>0||!n&&s<0)return r.index}return null}function mx(t,e){const{chart:n,_cachedMeta:i}=t,r=n._stacks||(n._stacks={}),{iScale:s,vScale:o,index:a}=i,l=s.axis,c=o.axis,u=bA(s,o,i),f=e.length;let d;for(let p=0;p<f;++p){const g=e[p],{[l]:v,[c]:m}=g,h=g._stacks||(g._stacks={});d=h[c]=wA(r,u,v),d[a]=m,d._top=px(d,o,!0,i.type),d._bottom=px(d,o,!1,i.type);const x=d._visualValues||(d._visualValues={});x[a]=m}}function qd(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function EA(t,e){return Xr(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function TA(t,e,n){return Xr(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function Zo(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const r of e){const s=r._stacks;if(!s||s[i]===void 0||s[i][n]===void 0)return;delete s[i][n],s[i]._visualValues!==void 0&&s[i]._visualValues[n]!==void 0&&delete s[i]._visualValues[n]}}}const Kd=t=>t==="reset"||t==="none",gx=(t,e)=>e?t:Object.assign({},t),AA=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:nb(n,!0),values:null};class Ia{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Yd(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Zo(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),r=(f,d,p,g)=>f==="x"?d:f==="r"?g:p,s=n.xAxisID=mt(i.xAxisID,qd(e,"x")),o=n.yAxisID=mt(i.yAxisID,qd(e,"y")),a=n.rAxisID=mt(i.rAxisID,qd(e,"r")),l=n.indexAxis,c=n.iAxisID=r(l,s,o,a),u=n.vAxisID=r(l,o,s,a);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Z0(this._data,this),e._stacked&&Zo(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(et(n)){const r=this._cachedMeta;this._data=SA(n,r)}else if(i!==n){if(i){Z0(i,this);const r=this._cachedMeta;Zo(r),r._parsed=[]}n&&Object.isExtensible(n)&&rT(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let r=!1;this._dataCheck();const s=n._stacked;n._stacked=Yd(n.vScale,n),n.stack!==i.stack&&(r=!0,Zo(n),n.stack=i.stack),this._resyncElements(e),(r||s!==n._stacked)&&(mx(this,n._parsed),n._stacked=Yd(n.vScale,n))}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:r}=this,{iScale:s,_stacked:o}=i,a=s.axis;let l=e===0&&n===r.length?!0:i._sorted,c=e>0&&i._parsed[e-1],u,f,d;if(this._parsing===!1)i._parsed=r,i._sorted=!0,d=r;else{Dt(r[e])?d=this.parseArrayData(i,r,e,n):et(r[e])?d=this.parseObjectData(i,r,e,n):d=this.parsePrimitiveData(i,r,e,n);const p=()=>f[a]===null||c&&f[a]<c[a];for(u=0;u<n;++u)i._parsed[u+e]=f=d[u],l&&(p()&&(l=!1),c=f);i._sorted=l}o&&mx(this,d)}parsePrimitiveData(e,n,i,r){const{iScale:s,vScale:o}=e,a=s.axis,l=o.axis,c=s.getLabels(),u=s===o,f=new Array(r);let d,p,g;for(d=0,p=r;d<p;++d)g=d+i,f[d]={[a]:u||s.parse(c[g],g),[l]:o.parse(n[g],g)};return f}parseArrayData(e,n,i,r){const{xScale:s,yScale:o}=e,a=new Array(r);let l,c,u,f;for(l=0,c=r;l<c;++l)u=l+i,f=n[u],a[l]={x:s.parse(f[0],u),y:o.parse(f[1],u)};return a}parseObjectData(e,n,i,r){const{xScale:s,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(r);let u,f,d,p;for(u=0,f=r;u<f;++u)d=u+i,p=n[d],c[u]={x:s.parse(nl(p,a),d),y:o.parse(nl(p,l),d)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const r=this.chart,s=this._cachedMeta,o=n[e.axis],a={keys:nb(r,!0),values:n._stacks[e.axis]._visualValues};return hx(a,o,s.index,{mode:i})}updateRangeFromParsed(e,n,i,r){const s=i[n.axis];let o=s===null?NaN:s;const a=r&&i._stacks[n.axis];r&&a&&(r.values=a,o=hx(r,s,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const i=this._cachedMeta,r=i._parsed,s=i._sorted&&e===i.iScale,o=r.length,a=this._getOtherScale(e),l=AA(n,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:f}=MA(a);let d,p;function g(){p=r[d];const v=p[a.axis];return!hn(p[e.axis])||u>v||f<v}for(d=0;d<o&&!(!g()&&(this.updateRangeFromParsed(c,e,p,l),s));++d);if(s){for(d=o-1;d>=0;--d)if(!g()){this.updateRangeFromParsed(c,e,p,l);break}}return c}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let r,s,o;for(r=0,s=n.length;r<s;++r)o=n[r][e.axis],hn(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,r=n.vScale,s=this.getParsed(e);return{label:i?""+i.getLabelForValue(s[i.axis]):"",value:r?""+r.getLabelForValue(s[r.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=yA(mt(this.options.clip,vA(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,r=i.data||[],s=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||r.length-a,c=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(e,s,a,l),u=a;u<a+l;++u){const f=r[u];f.hidden||(f.active&&c?o.push(f):f.draw(e,s))}for(u=0;u<o.length;++u)o[u].draw(e,s)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const r=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];s=o.$context||(o.$context=TA(this.getContext(),e,o)),s.parsed=this.getParsed(e),s.raw=r.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=EA(this.chart.getContext(),this.index)),s.dataset=r,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=i,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const r=n==="active",s=this._cachedDataOpts,o=e+"-"+n,a=s[o],l=this.enableOptionSharing&&Eu(i);if(a)return gx(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,e),f=r?[`${e}Hover`,"hover",e,""]:[e,""],d=c.getOptionScopes(this.getDataset(),u),p=Object.keys(Ut.elements[e]),g=()=>this.getContext(i,r,n),v=c.resolveNamedOptions(d,p,g,f);return v.$shared&&(v.$shared=l,s[o]=Object.freeze(gx(v,l))),v}_resolveAnimations(e,n,i){const r=this.chart,s=this._cachedDataOpts,o=`animation-${n}`,a=s[o];if(a)return a;let l;if(r.options.animation!==!1){const u=this.chart.config,f=u.datasetAnimationScopeKeys(this._type,n),d=u.getOptionScopes(this.getDataset(),f);l=u.createResolver(d,this.getContext(e,i,n))}const c=new tb(r,l&&l.animations);return l&&l._cacheable&&(s[o]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||Kd(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),r=this._sharedOptions,s=this.getSharedOptions(i),o=this.includeOptions(n,s)||s!==r;return this.updateSharedOptions(s,n,i),{sharedOptions:s,includeOptions:o}}updateElement(e,n,i,r){Kd(r)?Object.assign(e,i):this._resolveAnimations(n,r).update(e,i)}updateSharedOptions(e,n,i){e&&!Kd(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,r){e.active=r;const s=this.getStyle(n,r);this._resolveAnimations(n,i,r).update(e,{options:!r&&this.getSharedOptions(s)||s})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const r=i.length,s=n.length,o=Math.min(s,r);o&&this.parse(0,o),s>r?this._insertElements(r,s-r,e):s<r&&this._removeElements(s,r-s)}_insertElements(e,n,i=!0){const r=this._cachedMeta,s=r.data,o=e+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=o;a--)c[a]=c[a-n]};for(l(s),a=e;a<o;++a)s[a]=new this.dataElementType;this._parsing&&l(r._parsed),this.parse(e,n),i&&this.updateElements(s,e,n,"reset")}updateElements(e,n,i,r){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const r=i._parsed.splice(e,n);i._stacked&&Zo(i,r)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,r]=e;this[n](i,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}Xe(Ia,"defaults",{}),Xe(Ia,"datasetElementType",null),Xe(Ia,"dataElementType",null);class zc extends Ia{getLabelAndValue(e){const n=this._cachedMeta.vScale,i=this.getParsed(e);return{label:n.getLabels()[e],value:""+n.getLabelForValue(i[n.axis])}}parseObjectData(e,n,i,r){return BT.bind(this)(e,n,i,r)}update(e){const n=this._cachedMeta,i=n.dataset,r=n.data||[],s=n.iScale.getLabels();if(i.points=r,e!=="resize"){const o=this.resolveDatasetElementOptions(e);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:s.length===r.length,options:o};this.updateElement(i,void 0,a,e)}this.updateElements(r,0,r.length,e)}updateElements(e,n,i,r){const s=this._cachedMeta.rScale,o=r==="reset";for(let a=n;a<n+i;a++){const l=e[a],c=this.resolveDataElementOptions(a,l.active?"active":r),u=s.getPointPositionForValue(a,this.getParsed(a).r),f=o?s.xCenter:u.x,d=o?s.yCenter:u.y,p={x:f,y:d,angle:u.angle,skip:isNaN(f)||isNaN(d),options:c};this.updateElement(l,a,p,r)}}}Xe(zc,"id","radar"),Xe(zc,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),Xe(zc,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});function Zr(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Km{constructor(e){Xe(this,"options");this.options=e||{}}static override(e){Object.assign(Km.prototype,e)}init(){}formats(){return Zr()}parse(){return Zr()}format(){return Zr()}add(){return Zr()}diff(){return Zr()}startOf(){return Zr()}endOf(){return Zr()}}var CA={_date:Km};function RA(t,e,n,i){const{controller:r,data:s,_sorted:o}=t,a=r._cachedMeta.iScale,l=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(a&&e===a.axis&&e!=="r"&&o&&s.length){const c=a._reversePixels?nT:kh;if(i){if(r._sharedOptions){const u=s[0],f=typeof u.getRange=="function"&&u.getRange(e);if(f){const d=c(s,e,n-f),p=c(s,e,n+f);return{lo:d.lo,hi:p.hi}}}}else{const u=c(s,e,n);if(l){const{vScale:f}=r._cachedMeta,{_parsed:d}=t,p=d.slice(0,u.lo+1).reverse().findIndex(v=>!bt(v[f.axis]));u.lo-=Math.max(0,p);const g=d.slice(u.hi).findIndex(v=>!bt(v[f.axis]));u.hi+=Math.max(0,g)}return u}}return{lo:0,hi:s.length-1}}function sd(t,e,n,i,r){const s=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,l=s.length;a<l;++a){const{index:c,data:u}=s[a],{lo:f,hi:d}=RA(s[a],e,o,r);for(let p=f;p<=d;++p){const g=u[p];g.skip||i(g,c,p)}}}function PA(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,r){const s=e?Math.abs(i.x-r.x):0,o=n?Math.abs(i.y-r.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function Zd(t,e,n,i,r){const s=[];return!r&&!t.isPointInArea(e)||sd(t,n,e,function(a,l,c){!r&&!Zi(a,t.chartArea,0)||a.inRange(e.x,e.y,i)&&s.push({element:a,datasetIndex:l,index:c})},!0),s}function LA(t,e,n,i){let r=[];function s(o,a,l){const{startAngle:c,endAngle:u}=o.getProps(["startAngle","endAngle"],i),{angle:f}=JE(o,{x:e.x,y:e.y});OS(f,c,u)&&r.push({element:o,datasetIndex:a,index:l})}return sd(t,n,e,s),r}function NA(t,e,n,i,r,s){let o=[];const a=PA(n);let l=Number.POSITIVE_INFINITY;function c(u,f,d){const p=u.inRange(e.x,e.y,r);if(i&&!p)return;const g=u.getCenterPoint(r);if(!(!!s||t.isPointInArea(g))&&!p)return;const m=a(e,g);m<l?(o=[{element:u,datasetIndex:f,index:d}],l=m):m===l&&o.push({element:u,datasetIndex:f,index:d})}return sd(t,n,e,c),o}function Qd(t,e,n,i,r,s){return!s&&!t.isPointInArea(e)?[]:n==="r"&&!i?LA(t,e,n,r):NA(t,e,n,i,r,s)}function xx(t,e,n,i,r){const s=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return sd(t,n,e,(l,c,u)=>{l[o]&&l[o](e[n],r)&&(s.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(e.x,e.y,r))}),i&&!a?[]:s}var DA={modes:{index(t,e,n,i){const r=os(e,t),s=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?Zd(t,r,s,i,o):Qd(t,r,s,!1,i,o),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,f=c.data[u];f&&!f.skip&&l.push({element:f,datasetIndex:c.index,index:u})}),l):[]},dataset(t,e,n,i){const r=os(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?Zd(t,r,s,i,o):Qd(t,r,s,!1,i,o);if(a.length>0){const l=a[0].datasetIndex,c=t.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(t,e,n,i){const r=os(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return Zd(t,r,s,i,o)},nearest(t,e,n,i){const r=os(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return Qd(t,r,s,n.intersect,i,o)},x(t,e,n,i){const r=os(e,t);return xx(t,r,"x",n.intersect,i)},y(t,e,n,i){const r=os(e,t);return xx(t,r,"y",n.intersect,i)}}};const ib=["left","top","right","bottom"];function Qo(t,e){return t.filter(n=>n.pos===e)}function _x(t,e){return t.filter(n=>ib.indexOf(n.pos)===-1&&n.box.axis===e)}function Jo(t,e){return t.sort((n,i)=>{const r=e?i:n,s=e?n:i;return r.weight===s.weight?r.index-s.index:r.weight-s.weight})}function IA(t){const e=[];let n,i,r,s,o,a;for(n=0,i=(t||[]).length;n<i;++n)r=t[n],{position:s,options:{stack:o,stackWeight:a=1}}=r,e.push({index:n,box:r,pos:s,horizontal:r.isHorizontal(),weight:r.weight,stack:o&&s+o,stackWeight:a});return e}function FA(t){const e={};for(const n of t){const{stack:i,pos:r,stackWeight:s}=n;if(!i||!ib.includes(r))continue;const o=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return e}function UA(t,e){const n=FA(t),{vBoxMaxWidth:i,hBoxMaxHeight:r}=e;let s,o,a;for(s=0,o=t.length;s<o;++s){a=t[s];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*i:l&&e.availableWidth,a.height=r):(a.width=i,a.height=u?u*r:l&&e.availableHeight)}return n}function kA(t){const e=IA(t),n=Jo(e.filter(c=>c.box.fullSize),!0),i=Jo(Qo(e,"left"),!0),r=Jo(Qo(e,"right")),s=Jo(Qo(e,"top"),!0),o=Jo(Qo(e,"bottom")),a=_x(e,"x"),l=_x(e,"y");return{fullSize:n,leftAndTop:i.concat(s),rightAndBottom:r.concat(l).concat(o).concat(a),chartArea:Qo(e,"chartArea"),vertical:i.concat(r).concat(l),horizontal:s.concat(o).concat(a)}}function vx(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function rb(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function OA(t,e,n,i){const{pos:r,box:s}=n,o=t.maxPadding;if(!et(r)){n.size&&(t[r]-=n.size);const f=i[n.stack]||{size:0,count:1};f.size=Math.max(f.size,n.horizontal?s.height:s.width),n.size=f.size/f.count,t[r]+=n.size}s.getPadding&&rb(o,s.getPadding());const a=Math.max(0,e.outerWidth-vx(o,t,"left","right")),l=Math.max(0,e.outerHeight-vx(o,t,"top","bottom")),c=a!==t.w,u=l!==t.h;return t.w=a,t.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function zA(t){const e=t.maxPadding;function n(i){const r=Math.max(e[i]-t[i],0);return t[i]+=r,r}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function BA(t,e){const n=e.maxPadding;function i(r){const s={left:0,top:0,right:0,bottom:0};return r.forEach(o=>{s[o]=Math.max(e[o],n[o])}),s}return i(t?["left","right"]:["top","bottom"])}function pa(t,e,n,i){const r=[];let s,o,a,l,c,u;for(s=0,o=t.length,c=0;s<o;++s){a=t[s],l=a.box,l.update(a.width||e.w,a.height||e.h,BA(a.horizontal,e));const{same:f,other:d}=OA(e,n,a,i);c|=f&&r.length,u=u||d,l.fullSize||r.push(a)}return c&&pa(r,e,n,i)||u}function Xl(t,e,n,i,r){t.top=n,t.left=e,t.right=e+i,t.bottom=n+r,t.width=i,t.height=r}function yx(t,e,n,i){const r=n.padding;let{x:s,y:o}=e;for(const a of t){const l=a.box,c=i[a.stack]||{placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const f=e.w*u,d=c.size||l.height;Eu(c.start)&&(o=c.start),l.fullSize?Xl(l,r.left,o,n.outerWidth-r.right-r.left,d):Xl(l,e.left+c.placed,o,f,d),c.start=o,c.placed+=f,o=l.bottom}else{const f=e.h*u,d=c.size||l.width;Eu(c.start)&&(s=c.start),l.fullSize?Xl(l,s,r.top,d,n.outerHeight-r.bottom-r.top):Xl(l,s,e.top+c.placed,d,f),c.start=s,c.placed+=f,s=l.right}}e.x=s,e.y=o}var $l={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const r=Jn(t.options.layout.padding),s=Math.max(e-r.width,0),o=Math.max(n-r.height,0),a=kA(t.boxes),l=a.vertical,c=a.horizontal;dt(t.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const u=l.reduce((v,m)=>m.box.options&&m.box.options.display===!1?v:v+1,0)||1,f=Object.freeze({outerWidth:e,outerHeight:n,padding:r,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/u,hBoxMaxHeight:o/2}),d=Object.assign({},r);rb(d,Jn(i));const p=Object.assign({maxPadding:d,w:s,h:o,x:r.left,y:r.top},r),g=UA(l.concat(c),f);pa(a.fullSize,p,f,g),pa(l,p,f,g),pa(c,p,f,g)&&pa(l,p,f,g),zA(p),yx(a.leftAndTop,p,f,g),p.x+=p.w,p.y+=p.h,yx(a.rightAndBottom,p,f,g),t.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},dt(a.chartArea,v=>{const m=v.box;Object.assign(m,t.chartArea),m.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}};class sb{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,r){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,r?Math.floor(n/r):i)}}isAttached(e){return!0}updateConfig(e){}}class VA extends sb{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Bc="$chartjs",HA={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Sx=t=>t===null||t==="";function GA(t,e){const n=t.style,i=t.getAttribute("height"),r=t.getAttribute("width");if(t[Bc]={initial:{height:i,width:r,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Sx(r)){const s=ax(t,"width");s!==void 0&&(t.width=s)}if(Sx(i))if(t.style.height==="")t.height=t.width/(e||2);else{const s=ax(t,"height");s!==void 0&&(t.height=s)}return t}const ob=eA?{passive:!0}:!1;function WA(t,e,n){t&&t.addEventListener(e,n,ob)}function jA(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,ob)}function XA(t,e){const n=HA[t.type]||t.type,{x:i,y:r}=os(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:r!==void 0?r:null}}function Lu(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function $A(t,e,n){const i=t.canvas,r=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||Lu(a.addedNodes,i),o=o&&!Lu(a.removedNodes,i);o&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}function YA(t,e,n){const i=t.canvas,r=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||Lu(a.removedNodes,i),o=o&&!Lu(a.addedNodes,i);o&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}const il=new Map;let bx=0;function ab(){const t=window.devicePixelRatio;t!==bx&&(bx=t,il.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function qA(t,e){il.size||window.addEventListener("resize",ab),il.set(t,e)}function KA(t){il.delete(t),il.size||window.removeEventListener("resize",ab)}function ZA(t,e,n){const i=t.canvas,r=i&&qm(i);if(!r)return;const s=HS((a,l)=>{const c=r.clientWidth;n(a,l),c<r.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||s(c,u)});return o.observe(r),qA(t,s),o}function Jd(t,e,n){n&&n.disconnect(),e==="resize"&&KA(t)}function QA(t,e,n){const i=t.canvas,r=HS(s=>{t.ctx!==null&&n(XA(s,t))},t);return WA(i,e,r),r}class JA extends sb{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(GA(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Bc])return!1;const i=n[Bc].initial;["height","width"].forEach(s=>{const o=i[s];bt(o)?n.removeAttribute(s):n.setAttribute(s,o)});const r=i.style||{};return Object.keys(r).forEach(s=>{n.style[s]=r[s]}),n.width=n.width,delete n[Bc],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const r=e.$proxies||(e.$proxies={}),o={attach:$A,detach:YA,resize:ZA}[n]||QA;r[n]=o(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),r=i[n];if(!r)return;({attach:Jd,detach:Jd,resize:Jd}[n]||jA)(e,n,r),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,r){return JT(e,n,i,r)}isAttached(e){const n=e&&qm(e);return!!(n&&n.isConnected)}}function eC(t){return!Ym()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?VA:JA}class Es{constructor(){Xe(this,"x");Xe(this,"y");Xe(this,"active",!1);Xe(this,"options");Xe(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return Au(this.x)&&Au(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const r={};return e.forEach(s=>{r[s]=i[s]&&i[s].active()?i[s]._to:this[s]}),r}}Xe(Es,"defaults",{}),Xe(Es,"defaultRoutes");function tC(t,e){const n=t.options.ticks,i=nC(t),r=Math.min(n.maxTicksLimit||i,i),s=n.major.enabled?rC(e):[],o=s.length,a=s[0],l=s[o-1],c=[];if(o>r)return sC(e,c,s,o/r),c;const u=iC(s,e,r);if(o>0){let f,d;const p=o>1?Math.round((l-a)/(o-1)):null;for(Yl(e,c,u,bt(p)?0:a-p,a),f=0,d=o-1;f<d;f++)Yl(e,c,u,s[f],s[f+1]);return Yl(e,c,u,l,bt(p)?e.length:l+p),c}return Yl(e,c,u),c}function nC(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),r=t._maxLength/n;return Math.floor(Math.min(i,r))}function iC(t,e,n){const i=oC(t),r=e.length/n;if(!i)return Math.max(r,1);const s=qE(i);for(let o=0,a=s.length-1;o<a;o++){const l=s[o];if(l>r)return l}return Math.max(r,1)}function rC(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function sC(t,e,n,i){let r=0,s=n[0],o;for(i=Math.ceil(i),o=0;o<t.length;o++)o===s&&(e.push(t[o]),r++,s=n[r*i])}function Yl(t,e,n,i,r){const s=mt(i,0),o=Math.min(mt(r,t.length),t.length);let a=0,l,c,u;for(n=Math.ceil(n),r&&(l=r-i,n=l/Math.floor(l/n)),u=s;u<0;)a++,u=Math.round(s+a*n);for(c=Math.max(s,0);c<o;c++)c===u&&(e.push(t[c]),a++,u=Math.round(s+a*n))}function oC(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const aC=t=>t==="left"?"right":t==="right"?"left":t,Mx=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,wx=(t,e)=>Math.min(e||t,t);function Ex(t,e){const n=[],i=t.length/e,r=t.length;let s=0;for(;s<r;s+=i)n.push(t[Math.floor(s)]);return n}function lC(t,e,n){const i=t.ticks.length,r=Math.min(e,i-1),s=t._startPixel,o=t._endPixel,a=1e-6;let l=t.getPixelForTick(r),c;if(!(n&&(i===1?c=Math.max(l-s,o-l):e===0?c=(t.getPixelForTick(1)-l)/2:c=(l-t.getPixelForTick(r-1))/2,l+=r<e?c:-c,l<s-a||l>o+a)))return l}function cC(t,e){dt(t,n=>{const i=n.gc,r=i.length/2;let s;if(r>e){for(s=0;s<r;++s)delete n.data[i[s]];i.splice(0,r)}})}function ea(t){return t.drawTicks?t.tickLength:0}function Tx(t,e){if(!t.display)return 0;const n=Un(t.font,e),i=Jn(t.padding);return(Dt(t.text)?t.text.length:1)*n.lineHeight+i.height}function uC(t,e){return Xr(t,{scale:e,type:"scale"})}function dC(t,e,n){return Xr(t,{tick:n,index:e,type:"tick"})}function fC(t,e,n){let i=aT(t);return(n&&e!=="right"||!n&&e==="right")&&(i=aC(i)),i}function hC(t,e,n,i){const{top:r,left:s,bottom:o,right:a,chart:l}=t,{chartArea:c,scales:u}=l;let f=0,d,p,g;const v=o-r,m=a-s;if(t.isHorizontal()){if(p=Q0(i,s,a),et(n)){const h=Object.keys(n)[0],x=n[h];g=u[h].getPixelForValue(x)+v-e}else n==="center"?g=(c.bottom+c.top)/2+v-e:g=Mx(t,n,e);d=a-s}else{if(et(n)){const h=Object.keys(n)[0],x=n[h];p=u[h].getPixelForValue(x)-m+e}else n==="center"?p=(c.left+c.right)/2-m+e:p=Mx(t,n,e);g=Q0(i,o,r),f=n==="left"?-Fn:Fn}return{titleX:p,titleY:g,maxWidth:d,rotation:f}}class gl extends Es{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:r}=this;return e=_i(e,Number.POSITIVE_INFINITY),n=_i(n,Number.NEGATIVE_INFINITY),i=_i(i,Number.POSITIVE_INFINITY),r=_i(r,Number.NEGATIVE_INFINITY),{min:_i(e,i),max:_i(n,r),minDefined:hn(e),maxDefined:hn(n)}}getMinMax(e){let{min:n,max:i,minDefined:r,maxDefined:s}=this.getUserBounds(),o;if(r&&s)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,e),r||(n=Math.min(n,o.min)),s||(i=Math.max(i,o.max));return n=s&&n>i?i:n,i=r&&n>i?n:i,{min:_i(n,_i(i,n)),max:_i(i,_i(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Lt(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:r,grace:s,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=PT(this,s,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Ex(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=tC(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Lt(this.options.afterUpdate,[this])}beforeSetDimensions(){Lt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Lt(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),Lt(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Lt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,r,s;for(i=0,r=e.length;i<r;i++)s=e[i],s.label=Lt(n.callback,[s.value,i,e],this)}afterTickToLabelConversion(){Lt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Lt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=wx(this.ticks.length,e.ticks.maxTicksLimit),r=n.minRotation||0,s=n.maxRotation;let o=r,a,l,c;if(!this._isVisible()||!n.display||r>=s||i<=1||!this.isHorizontal()){this.labelRotation=r;return}const u=this._getLabelSizes(),f=u.widest.width,d=u.highest.height,p=Ki(this.chart.width-f,0,this.maxWidth);a=e.offset?this.maxWidth/i:p/(i-1),f+6>a&&(a=p/(i-(e.offset?.5:1)),l=this.maxHeight-ea(e.grid)-n.padding-Tx(e.title,this.chart.options.font),c=Math.sqrt(f*f+d*d),o=Bm(Math.min(Math.asin(Ki((u.highest.height+6)/a,-1,1)),Math.asin(Ki(l/c,-1,1))-Math.asin(Ki(d/c,-1,1)))),o=Math.max(r,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){Lt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Lt(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:r,grid:s}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=Tx(r,n.options.font);if(a?(e.width=this.maxWidth,e.height=ea(s)+l):(e.height=this.maxHeight,e.width=ea(s)+l),i.display&&this.ticks.length){const{first:c,last:u,widest:f,highest:d}=this._getLabelSizes(),p=i.padding*2,g=fs(this.labelRotation),v=Math.cos(g),m=Math.sin(g);if(a){const h=i.mirror?0:m*f.width+v*d.height;e.height=Math.min(this.maxHeight,e.height+h+p)}else{const h=i.mirror?0:v*f.width+m*d.height;e.width=Math.min(this.maxWidth,e.width+h+p)}this._calculatePadding(c,u,m,v)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,r){const{ticks:{align:s,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,f=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,p=0;l?c?(d=r*e.width,p=i*n.height):(d=i*e.height,p=r*n.width):s==="start"?p=n.width:s==="end"?d=e.width:s!=="inner"&&(d=e.width/2,p=n.width/2),this.paddingLeft=Math.max((d-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((p-f+o)*this.width/(this.width-f),0)}else{let u=n.height/2,f=e.height/2;s==="start"?(u=0,f=e.height):s==="end"&&(u=n.height,f=0),this.paddingTop=u+o,this.paddingBottom=f+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Lt(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)bt(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=Ex(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:r,_longestTextCache:s}=this,o=[],a=[],l=Math.floor(n/wx(n,i));let c=0,u=0,f,d,p,g,v,m,h,x,S,y,M;for(f=0;f<n;f+=l){if(g=e[f].label,v=this._resolveTickFontOptions(f),r.font=m=v.string,h=s[m]=s[m]||{data:{},gc:[]},x=v.lineHeight,S=y=0,!bt(g)&&!Dt(g))S=Cu(r,h.data,h.gc,S,g),y=x;else if(Dt(g))for(d=0,p=g.length;d<p;++d)M=g[d],!bt(M)&&!Dt(M)&&(S=Cu(r,h.data,h.gc,S,M),y+=x);o.push(S),a.push(y),c=Math.max(S,c),u=Math.max(y,u)}cC(s,n);const E=o.indexOf(c),C=a.indexOf(u),_=A=>({width:o[A]||0,height:a[A]||0});return{first:_(0),last:_(n-1),widest:_(E),highest:_(C),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return tT(this._alignToPixels?Kr(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=dC(this.getContext(),e,i))}return this.$context||(this.$context=uC(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=fs(this.labelRotation),i=Math.abs(Math.cos(n)),r=Math.abs(Math.sin(n)),s=this._getLabelSizes(),o=e.autoSkipPadding||0,a=s?s.widest.width+o:0,l=s?s.highest.height+o:0;return this.isHorizontal()?l*i>a*r?a/i:l/r:l*r<a*i?l/i:a/r}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,r=this.options,{grid:s,position:o,border:a}=r,l=s.offset,c=this.isHorizontal(),f=this.ticks.length+(l?1:0),d=ea(s),p=[],g=a.setContext(this.getContext()),v=g.display?g.width:0,m=v/2,h=function(Y){return Kr(i,Y,v)};let x,S,y,M,E,C,_,A,R,L,D,B;if(o==="top")x=h(this.bottom),C=this.bottom-d,A=x-m,L=h(e.top)+m,B=e.bottom;else if(o==="bottom")x=h(this.top),L=e.top,B=h(e.bottom)-m,C=x+m,A=this.top+d;else if(o==="left")x=h(this.right),E=this.right-d,_=x-m,R=h(e.left)+m,D=e.right;else if(o==="right")x=h(this.left),R=e.left,D=h(e.right)-m,E=x+m,_=this.left+d;else if(n==="x"){if(o==="center")x=h((e.top+e.bottom)/2+.5);else if(et(o)){const Y=Object.keys(o)[0],H=o[Y];x=h(this.chart.scales[Y].getPixelForValue(H))}L=e.top,B=e.bottom,C=x+m,A=C+d}else if(n==="y"){if(o==="center")x=h((e.left+e.right)/2);else if(et(o)){const Y=Object.keys(o)[0],H=o[Y];x=h(this.chart.scales[Y].getPixelForValue(H))}E=x-m,_=E-d,R=e.left,D=e.right}const I=mt(r.ticks.maxTicksLimit,f),O=Math.max(1,Math.ceil(f/I));for(S=0;S<f;S+=O){const Y=this.getContext(S),H=s.setContext(Y),V=a.setContext(Y),z=H.lineWidth,G=H.color,Z=V.dash||[],ae=V.dashOffset,ve=H.tickWidth,Ue=H.tickColor,Ie=H.tickBorderDash||[],Ne=H.tickBorderDashOffset;y=lC(this,S,l),y!==void 0&&(M=Kr(i,y,z),c?E=_=R=D=M:C=A=L=B=M,p.push({tx1:E,ty1:C,tx2:_,ty2:A,x1:R,y1:L,x2:D,y2:B,width:z,color:G,borderDash:Z,borderDashOffset:ae,tickWidth:ve,tickColor:Ue,tickBorderDash:Ie,tickBorderDashOffset:Ne}))}return this._ticksLength=f,this._borderValue=x,p}_computeLabelItems(e){const n=this.axis,i=this.options,{position:r,ticks:s}=i,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:f}=s,d=ea(i.grid),p=d+u,g=f?-u:p,v=-fs(this.labelRotation),m=[];let h,x,S,y,M,E,C,_,A,R,L,D,B="middle";if(r==="top")E=this.bottom-g,C=this._getXAxisLabelAlignment();else if(r==="bottom")E=this.top+g,C=this._getXAxisLabelAlignment();else if(r==="left"){const O=this._getYAxisLabelAlignment(d);C=O.textAlign,M=O.x}else if(r==="right"){const O=this._getYAxisLabelAlignment(d);C=O.textAlign,M=O.x}else if(n==="x"){if(r==="center")E=(e.top+e.bottom)/2+p;else if(et(r)){const O=Object.keys(r)[0],Y=r[O];E=this.chart.scales[O].getPixelForValue(Y)+p}C=this._getXAxisLabelAlignment()}else if(n==="y"){if(r==="center")M=(e.left+e.right)/2-p;else if(et(r)){const O=Object.keys(r)[0],Y=r[O];M=this.chart.scales[O].getPixelForValue(Y)}C=this._getYAxisLabelAlignment(d).textAlign}n==="y"&&(l==="start"?B="top":l==="end"&&(B="bottom"));const I=this._getLabelSizes();for(h=0,x=a.length;h<x;++h){S=a[h],y=S.label;const O=s.setContext(this.getContext(h));_=this.getPixelForTick(h)+s.labelOffset,A=this._resolveTickFontOptions(h),R=A.lineHeight,L=Dt(y)?y.length:1;const Y=L/2,H=O.color,V=O.textStrokeColor,z=O.textStrokeWidth;let G=C;o?(M=_,C==="inner"&&(h===x-1?G=this.options.reverse?"left":"right":h===0?G=this.options.reverse?"right":"left":G="center"),r==="top"?c==="near"||v!==0?D=-L*R+R/2:c==="center"?D=-I.highest.height/2-Y*R+R:D=-I.highest.height+R/2:c==="near"||v!==0?D=R/2:c==="center"?D=I.highest.height/2-Y*R:D=I.highest.height-L*R,f&&(D*=-1),v!==0&&!O.showLabelBackdrop&&(M+=R/2*Math.sin(v))):(E=_,D=(1-L)*R/2);let Z;if(O.showLabelBackdrop){const ae=Jn(O.backdropPadding),ve=I.heights[h],Ue=I.widths[h];let Ie=D-ae.top,Ne=0-ae.left;switch(B){case"middle":Ie-=ve/2;break;case"bottom":Ie-=ve;break}switch(C){case"center":Ne-=Ue/2;break;case"right":Ne-=Ue;break;case"inner":h===x-1?Ne-=Ue:h>0&&(Ne-=Ue/2);break}Z={left:Ne,top:Ie,width:Ue+ae.width,height:ve+ae.height,color:O.backdropColor}}m.push({label:y,font:A,textOffset:D,options:{rotation:v,color:H,strokeColor:V,strokeWidth:z,textAlign:G,textBaseline:B,translation:[M,E],backdrop:Z}})}return m}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-fs(this.labelRotation))return e==="top"?"left":"right";let r="center";return n.align==="start"?r="left":n.align==="end"?r="right":n.align==="inner"&&(r="inner"),r}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:r,padding:s}}=this.options,o=this._getLabelSizes(),a=e+s,l=o.widest.width;let c,u;return n==="left"?r?(u=this.right+s,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?r?(u=this.left+s,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:r,width:s,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,r,s,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const r=this.ticks.findIndex(s=>s.value===e);return r>=0?n.setContext(this.getContext(r)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,o;const a=(l,c,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(n.display)for(s=0,o=r.length;s<o;++s){const l=r[s];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:r}}=this,s=i.setContext(this.getContext()),o=i.display?s.width:0;if(!o)return;const a=r.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,f,d;this.isHorizontal()?(c=Kr(e,this.left,o)-o/2,u=Kr(e,this.right,a)+a/2,f=d=l):(f=Kr(e,this.top,o)-o/2,d=Kr(e,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=s.width,n.strokeStyle=s.color,n.beginPath(),n.moveTo(c,f),n.lineTo(u,d),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,r=this._computeLabelArea();r&&Gm(i,r);const s=this.getLabelItems(e);for(const o of s){const a=o.options,l=o.font,c=o.label,u=o.textOffset;Ru(i,c,0,u,l,a)}r&&Wm(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:r}}=this;if(!i.display)return;const s=Un(i.font),o=Jn(i.padding),a=i.align;let l=s.lineHeight/2;n==="bottom"||n==="center"||et(n)?(l+=o.bottom,Dt(i.text)&&(l+=s.lineHeight*(i.text.length-1))):l+=o.top;const{titleX:c,titleY:u,maxWidth:f,rotation:d}=hC(this,l,n,a);Ru(e,i.text,0,0,s,{color:i.color,maxWidth:f,rotation:d,textAlign:fC(a,n,r),textBaseline:"middle",translation:[c,u]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=mt(e.grid&&e.grid.z,-1),r=mt(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==gl.prototype.draw?[{z:n,draw:s=>{this.draw(s)}}]:[{z:i,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:n,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",r=[];let s,o;for(s=0,o=n.length;s<o;++s){const a=n[s];a[i]===this.id&&(!e||a.type===e)&&r.push(a)}return r}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return Un(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class ql{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;gC(n)&&(i=this.register(n));const r=this.items,s=e.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in r||(r[s]=e,pC(e,o,i),this.override&&Ut.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,r=this.scope;i in n&&delete n[i],r&&i in Ut[r]&&(delete Ut[r][i],this.override&&delete ws[i])}}function pC(t,e,n){const i=tl(Object.create(null),[n?Ut.get(n):{},Ut.get(e),t.defaults]);Ut.set(e,i),t.defaultRoutes&&mC(e,t.defaultRoutes),t.descriptors&&Ut.describe(e,t.descriptors)}function mC(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),r=i.pop(),s=[t].concat(i).join("."),o=e[n].split("."),a=o.pop(),l=o.join(".");Ut.route(s,r,l,a)})}function gC(t){return"id"in t&&"defaults"in t}class xC{constructor(){this.controllers=new ql(Ia,"datasets",!0),this.elements=new ql(Es,"elements"),this.plugins=new ql(Object,"plugins"),this.scales=new ql(gl,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(r=>{const s=i||this._getRegistryForType(r);i||s.isForType(r)||s===this.plugins&&r.id?this._exec(e,s,r):dt(r,o=>{const a=i||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,i){const r=zm(e);Lt(i["before"+r],[],i),n[e](i),Lt(i["after"+r],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const r=n.get(e);if(r===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return r}}var Mi=new xC;class _C{constructor(){this._init=void 0}notify(e,n,i,r){if(n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install")),this._init===void 0)return;const s=r?this._descriptors(e).filter(r):this._descriptors(e),o=this._notify(s,e,n,i);return n==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall"),this._init=void 0),o}_notify(e,n,i,r){r=r||{};for(const s of e){const o=s.plugin,a=o[i],l=[n,r,s.options];if(Lt(a,l,o)===!1&&r.cancelable)return!1}return!0}invalidate(){bt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,r=mt(i.options&&i.options.plugins,{}),s=vC(i);return r===!1&&!n?[]:SC(e,s,r,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,r=(s,o)=>s.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(r(n,i),e,"stop"),this._notify(r(i,n),e,"start")}}function vC(t){const e={},n=[],i=Object.keys(Mi.plugins.items);for(let s=0;s<i.length;s++)n.push(Mi.getPlugin(i[s]));const r=t.plugins||[];for(let s=0;s<r.length;s++){const o=r[s];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function yC(t,e){return!e&&t===!1?null:t===!0?{}:t}function SC(t,{plugins:e,localIds:n},i,r){const s=[],o=t.getContext();for(const a of e){const l=a.id,c=yC(i[l],r);c!==null&&s.push({plugin:a,options:bC(t.config,{plugin:a,local:n[l]},c,o)})}return s}function bC(t,{plugin:e,local:n},i,r){const s=t.pluginScopeKeys(e),o=t.getOptionScopes(i,s);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Vh(t,e){const n=Ut.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function MC(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function wC(t,e){return t===e?"_index_":"_value_"}function Ax(t){if(t==="x"||t==="y"||t==="r")return t}function EC(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Hh(t,...e){if(Ax(t))return t;for(const n of e){const i=n.axis||EC(n.position)||t.length>1&&Ax(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function Cx(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function TC(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return Cx(t,"x",n[0])||Cx(t,"y",n[0])}return{}}function AC(t,e){const n=ws[t.type]||{scales:{}},i=e.scales||{},r=Vh(t.type,e),s=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!et(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Hh(o,a,TC(o,t),Ut.scales[a.type]),c=wC(l,r),u=n.scales||{};s[o]=Ra(Object.create(null),[{axis:l},a,u[l],u[c]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,l=o.indexAxis||Vh(a,e),u=(ws[a]||{}).scales||{};Object.keys(u).forEach(f=>{const d=MC(f,l),p=o[d+"AxisID"]||d;s[p]=s[p]||Object.create(null),Ra(s[p],[{axis:d},i[p],u[f]])})}),Object.keys(s).forEach(o=>{const a=s[o];Ra(a,[Ut.scales[a.type],Ut.scale])}),s}function lb(t){const e=t.options||(t.options={});e.plugins=mt(e.plugins,{}),e.scales=AC(t,e)}function cb(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function CC(t){return t=t||{},t.data=cb(t.data),lb(t),t}const Rx=new Map,ub=new Set;function Kl(t,e){let n=Rx.get(t);return n||(n=e(),Rx.set(t,n),ub.add(n)),n}const ta=(t,e,n)=>{const i=nl(e,n);i!==void 0&&t.add(i)};class RC{constructor(e){this._config=CC(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=cb(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),lb(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Kl(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return Kl(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return Kl(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return Kl(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let r=i.get(e);return(!r||n)&&(r=new Map,i.set(e,r)),r}getOptionScopes(e,n,i){const{options:r,type:s}=this,o=this._cachedScopes(e,i),a=o.get(n);if(a)return a;const l=new Set;n.forEach(u=>{e&&(l.add(e),u.forEach(f=>ta(l,e,f))),u.forEach(f=>ta(l,r,f)),u.forEach(f=>ta(l,ws[s]||{},f)),u.forEach(f=>ta(l,Ut,f)),u.forEach(f=>ta(l,Oh,f))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),ub.has(n)&&o.set(n,c),c}chartOptionScopes(){const{options:e,type:n}=this;return[e,ws[n]||{},Ut.datasets[n]||{},{type:n},Ut,Oh]}resolveNamedOptions(e,n,i,r=[""]){const s={$shared:!0},{resolver:o,subPrefixes:a}=Px(this._resolverCache,e,r);let l=o;if(LC(o,n)){s.$shared=!1,i=Vr(i)?i():i;const c=this.createResolver(e,i,a);l=Do(o,i,c)}for(const c of n)s[c]=l[c];return s}createResolver(e,n,i=[""],r){const{resolver:s}=Px(this._resolverCache,e,i);return et(n)?Do(s,n,void 0,r):s}}function Px(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const r=n.join();let s=i.get(r);return s||(s={resolver:jm(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},i.set(r,s)),s}const PC=t=>et(t)&&Object.getOwnPropertyNames(t).some(e=>Vr(t[e]));function LC(t,e){const{isScriptable:n,isIndexable:i}=XS(t);for(const r of e){const s=n(r),o=i(r),a=(o||s)&&t[r];if(s&&(Vr(a)||PC(a))||o&&Dt(a))return!0}return!1}var NC="4.5.1";const DC=["top","bottom","left","right","chartArea"];function Lx(t,e){return t==="top"||t==="bottom"||DC.indexOf(t)===-1&&e==="x"}function Nx(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function Dx(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),Lt(n&&n.onComplete,[t],e)}function IC(t){const e=t.chart,n=e.options.animation;Lt(n&&n.onProgress,[t],e)}function db(t){return Ym()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Vc={},Ix=t=>{const e=db(t);return Object.values(Vc).filter(n=>n.canvas===e).pop()};function FC(t,e,n){const i=Object.keys(t);for(const r of i){const s=+r;if(s>=e){const o=t[r];delete t[r],(n>0||s>e)&&(t[s+n]=o)}}}function UC(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}class $i{static register(...e){Mi.add(...e),Fx()}static unregister(...e){Mi.remove(...e),Fx()}constructor(e,n){const i=this.config=new RC(n),r=db(e),s=Ix(r);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||eC(r)),this.platform.updateConfig(i);const a=this.platform.acquireContext(r,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=BE(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new _C,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=oT(f=>this.update(f),o.resizeDelay||0),this._dataChanges=[],Vc[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Hi.listen(this,"complete",Dx),Hi.listen(this,"progress",IC),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:r,_aspectRatio:s}=this;return bt(e)?n&&s?s:r?i/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Mi}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():ox(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return ix(this.canvas,this.ctx),this}stop(){return Hi.stop(this),this}resize(e,n){Hi.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,r=this.canvas,s=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(r,e,n,s),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,ox(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Lt(i.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};dt(n,(i,r)=>{i.id=r})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,r=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let s=[];n&&(s=s.concat(Object.keys(n).map(o=>{const a=n[o],l=Hh(o,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),dt(s,o=>{const a=o.options,l=a.id,c=Hh(l,a),u=mt(a.type,o.dtype);(a.position===void 0||Lx(a.position,c)!==Lx(o.dposition))&&(a.position=o.dposition),r[l]=!0;let f=null;if(l in i&&i[l].type===u)f=i[l];else{const d=Mi.getScale(u);f=new d({id:l,type:u,ctx:this.ctx,chart:this}),i[f.id]=f}f.init(a,e)}),dt(r,(o,a)=>{o||delete i[a]}),dt(i,o=>{$l.configure(this,o,o.options),$l.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((r,s)=>r.index-s.index),i>n){for(let r=n;r<i;++r)this._destroyDatasetMeta(r);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(Nx("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,r)=>{n.filter(s=>s===i._dataset).length===0&&this._destroyDatasetMeta(r)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,r;for(this._removeUnreferencedMetasets(),i=0,r=n.length;i<r;i++){const s=n[i];let o=this.getDatasetMeta(i);const a=s.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=s.indexAxis||Vh(a,this.options),o.order=s.order||0,o.index=i,o.label=""+s.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const l=Mi.getController(a),{datasetElementType:c,dataElementType:u}=Ut.datasets[a];Object.assign(l,{dataElementType:Mi.getElement(u),datasetElementType:c&&Mi.getElement(c)}),o.controller=new l(this,i),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){dt(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:f}=this.getDatasetMeta(c),d=!r&&s.indexOf(f)===-1;f.buildOrUpdateElements(d),o=Math.max(+f.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),r||dt(s,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(Nx("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){dt(this.scales,e=>{$l.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!$0(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:r,count:s}of n){const o=i==="_removeElements"?-s:s;FC(e,r,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=s=>new Set(e.filter(o=>o[0]===s).map((o,a)=>a+","+o.splice(1).join(","))),r=i(0);for(let s=1;s<n;s++)if(!$0(r,i(s)))return;return Array.from(r).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;$l.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],dt(this.boxes,r=>{i&&r.position==="chartArea"||(r.configure&&r.configure(),this._layers.push(...r._layers()))},this),this._layers.forEach((r,s)=>{r._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,Vr(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),r={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",r)!==!1&&(i.controller._update(n),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Hi.has(this)?this.attached&&!Hi.running(this)&&Hi.start(this):(this.draw(),Dx({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:r}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,r)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let r,s;for(r=0,s=n.length;r<s;++r){const o=n[r];(!e||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i={meta:e,index:e.index,cancelable:!0},r=eb(this,e);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(r&&Gm(n,r),e.controller.draw(),r&&Wm(n),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(e){return Zi(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,r){const s=DA.modes[n];return typeof s=="function"?s(this,e,i,r):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let r=i.filter(s=>s&&s._dataset===n).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(r)),r}getContext(){return this.$context||(this.$context=Xr(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const r=i?"show":"hide",s=this.getDatasetMeta(e),o=s.controller._resolveAnimations(void 0,r);Eu(n)?(s.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),o.update(s,{visible:i}),this.update(a=>a.datasetIndex===e?r:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),Hi.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),ix(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Vc[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(s,o)=>{n.addEventListener(this,s,o),e[s]=o},r=(s,o,a)=>{s.offsetX=o,s.offsetY=a,this._eventHandler(s)};dt(this.options.events,s=>i(s,r))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),e[l]=c},r=(l,c)=>{e[l]&&(n.removeEventListener(this,l,c),delete e[l])},s=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{r("attach",a),this.attached=!0,this.resize(),i("resize",s),i("detach",o)};o=()=>{this.attached=!1,r("resize",s),this._stop(),this._resize(0,0),i("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){dt(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},dt(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const r=i?"set":"remove";let s,o,a,l;for(n==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+r+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[r+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:s,index:o})=>{const a=this.getDatasetMeta(s);if(!a)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:a.data[o],index:o}});!Mu(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const r=this.options.hover,s=(l,c)=>l.filter(u=>!c.some(f=>u.datasetIndex===f.datasetIndex&&u.index===f.index)),o=s(n,e),a=i?e:s(e,n);o.length&&this.updateHoverStyle(o,r.mode,!1),a.length&&r.mode&&this.updateHoverStyle(a,r.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},r=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,r)===!1)return;const s=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,r),(s||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:r=[],options:s}=this,o=n,a=this._getActiveElements(e,r,i,o),l=XE(e),c=UC(e,this._lastEvent,i,l);i&&(this._lastEvent=null,Lt(s.onHover,[e,a,this],this),l&&Lt(s.onClick,[e,a,this],this));const u=!Mu(a,r);return(u||n)&&(this._active=a,this._updateHoverStyles(a,r,n)),this._lastEvent=c,u}_getActiveElements(e,n,i,r){if(e.type==="mouseout")return[];if(!i)return n;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,r)}}Xe($i,"defaults",Ut),Xe($i,"instances",Vc),Xe($i,"overrides",ws),Xe($i,"registry",Mi),Xe($i,"version",NC),Xe($i,"getChart",Ix);function Fx(){return dt($i.instances,t=>t._plugins.invalidate())}function fb(t,e,n=e){t.lineCap=mt(n.borderCapStyle,e.borderCapStyle),t.setLineDash(mt(n.borderDash,e.borderDash)),t.lineDashOffset=mt(n.borderDashOffset,e.borderDashOffset),t.lineJoin=mt(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=mt(n.borderWidth,e.borderWidth),t.strokeStyle=mt(n.borderColor,e.borderColor)}function kC(t,e,n){t.lineTo(n.x,n.y)}function OC(t){return t.stepped?yT:t.tension||t.cubicInterpolationMode==="monotone"?ST:kC}function hb(t,e,n={}){const i=t.length,{start:r=0,end:s=i-1}=n,{start:o,end:a}=e,l=Math.max(r,o),c=Math.min(s,a),u=r<o&&s<o||r>a&&s>a;return{count:i,start:l,loop:e.loop,ilen:c<l&&!u?i+c-l:c-l}}function zC(t,e,n,i){const{points:r,options:s}=e,{count:o,start:a,loop:l,ilen:c}=hb(r,n,i),u=OC(s);let{move:f=!0,reverse:d}=i||{},p,g,v;for(p=0;p<=c;++p)g=r[(a+(d?c-p:p))%o],!g.skip&&(f?(t.moveTo(g.x,g.y),f=!1):u(t,v,g,d,s.stepped),v=g);return l&&(g=r[(a+(d?c:0))%o],u(t,v,g,d,s.stepped)),!!l}function BC(t,e,n,i){const r=e.points,{count:s,start:o,ilen:a}=hb(r,n,i),{move:l=!0,reverse:c}=i||{};let u=0,f=0,d,p,g,v,m,h;const x=y=>(o+(c?a-y:y))%s,S=()=>{v!==m&&(t.lineTo(u,m),t.lineTo(u,v),t.lineTo(u,h))};for(l&&(p=r[x(0)],t.moveTo(p.x,p.y)),d=0;d<=a;++d){if(p=r[x(d)],p.skip)continue;const y=p.x,M=p.y,E=y|0;E===g?(M<v?v=M:M>m&&(m=M),u=(f*u+y)/++f):(S(),t.lineTo(y,M),g=E,f=0,v=m=M),h=M}S()}function Gh(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?BC:zC}function VC(t){return t.stepped?tA:t.tension||t.cubicInterpolationMode==="monotone"?nA:as}function HC(t,e,n,i){let r=e._path;r||(r=e._path=new Path2D,e.path(r,n,i)&&r.closePath()),fb(t,e.options),t.stroke(r)}function GC(t,e,n,i){const{segments:r,options:s}=e,o=Gh(e);for(const a of r)fb(t,s,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const WC=typeof Path2D=="function";function jC(t,e,n,i){WC&&!e.options.segment?HC(t,e,n,i):GC(t,e,n,i)}class Cr extends Es{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const r=i.spanGaps?this._loop:this._fullLoop;$T(this._points,i,e,r,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=uA(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,r=e[n],s=this.points,o=JS(this,{property:n,start:r,end:r});if(!o.length)return;const a=[],l=VC(i);let c,u;for(c=0,u=o.length;c<u;++c){const{start:f,end:d}=o[c],p=s[f],g=s[d];if(p===g){a.push(p);continue}const v=Math.abs((r-p[n])/(g[n]-p[n])),m=l(p,g,v,i.stepped);m[n]=e[n],a.push(m)}return a.length===1?a[0]:a}pathSegment(e,n,i){return Gh(this)(e,this,n,i)}path(e,n,i){const r=this.segments,s=Gh(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const a of r)o&=s(e,this,a,{start:n,end:n+i-1});return!!o}draw(e,n,i,r){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),jC(e,this,i,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}Xe(Cr,"id","line"),Xe(Cr,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),Xe(Cr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),Xe(Cr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function Ux(t,e,n,i){const r=t.options,{[n]:s}=t.getProps([n],i);return Math.abs(e-s)<r.radius+r.hitRadius}class Hc extends Es{constructor(n){super();Xe(this,"parsed");Xe(this,"skip");Xe(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,r){const s=this.options,{x:o,y:a}=this.getProps(["x","y"],r);return Math.pow(n-o,2)+Math.pow(i-a,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(n,i){return Ux(this,n,"x",i)}inYRange(n,i){return Ux(this,n,"y",i)}getCenterPoint(n){const{x:i,y:r}=this.getProps(["x","y"],n);return{x:i,y:r}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const r=i&&n.borderWidth||0;return(i+r)*2}draw(n,i){const r=this.options;this.skip||r.radius<.1||!Zi(this,i,this.size(r)/2)||(n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.fillStyle=r.backgroundColor,zh(n,r,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}Xe(Hc,"id","point"),Xe(Hc,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),Xe(Hc,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function XC(t,e,n){const i=t.segments,r=t.points,s=e.points,o=[];for(const a of i){let{start:l,end:c}=a;c=od(l,c,r);const u=Wh(n,r[l],r[c],a.loop);if(!e.segments){o.push({source:a,target:u,start:r[l],end:r[c]});continue}const f=JS(e,u);for(const d of f){const p=Wh(n,s[d.start],s[d.end],d.loop),g=QS(a,r,p);for(const v of g)o.push({source:v,target:d,start:{[n]:kx(u,p,"start",Math.max)},end:{[n]:kx(u,p,"end",Math.min)}})}}return o}function Wh(t,e,n,i){if(i)return;let r=e[t],s=n[t];return t==="angle"&&(r=Nn(r),s=Nn(s)),{property:t,start:r,end:s}}function $C(t,e){const{x:n=null,y:i=null}=t||{},r=e.points,s=[];return e.segments.forEach(({start:o,end:a})=>{a=od(o,a,r);const l=r[o],c=r[a];i!==null?(s.push({x:l.x,y:i}),s.push({x:c.x,y:i})):n!==null&&(s.push({x:n,y:l.y}),s.push({x:n,y:c.y}))}),s}function od(t,e,n){for(;e>t;e--){const i=n[e];if(!isNaN(i.x)&&!isNaN(i.y))break}return e}function kx(t,e,n,i){return t&&e?i(t[n],e[n]):t?t[n]:e?e[n]:0}function pb(t,e){let n=[],i=!1;return Dt(t)?(i=!0,n=t):n=$C(t,e),n.length?new Cr({points:n,options:{tension:0},_loop:i,_fullLoop:i}):null}function Ox(t){return t&&t.fill!==!1}function YC(t,e,n){let r=t[e].fill;const s=[e];let o;if(!n)return r;for(;r!==!1&&s.indexOf(r)===-1;){if(!hn(r))return r;if(o=t[r],!o)return!1;if(o.visible)return r;s.push(r),r=o.fill}return!1}function qC(t,e,n){const i=JC(t);if(et(i))return isNaN(i.value)?!1:i;let r=parseFloat(i);return hn(r)&&Math.floor(r)===r?KC(i[0],e,r,n):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function KC(t,e,n,i){return(t==="-"||t==="+")&&(n=e+n),n===e||n<0||n>=i?!1:n}function ZC(t,e){let n=null;return t==="start"?n=e.bottom:t==="end"?n=e.top:et(t)?n=e.getPixelForValue(t.value):e.getBasePixel&&(n=e.getBasePixel()),n}function QC(t,e,n){let i;return t==="start"?i=n:t==="end"?i=e.options.reverse?e.min:e.max:et(t)?i=t.value:i=e.getBaseValue(),i}function JC(t){const e=t.options,n=e.fill;let i=mt(n&&n.target,n);return i===void 0&&(i=!!e.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function e2(t){const{scale:e,index:n,line:i}=t,r=[],s=i.segments,o=i.points,a=t2(e,n);a.push(pb({x:null,y:e.bottom},i));for(let l=0;l<s.length;l++){const c=s[l];for(let u=c.start;u<=c.end;u++)n2(r,o[u],a)}return new Cr({points:r,options:{}})}function t2(t,e){const n=[],i=t.getMatchingVisibleMetas("line");for(let r=0;r<i.length;r++){const s=i[r];if(s.index===e)break;s.hidden||n.unshift(s.dataset)}return n}function n2(t,e,n){const i=[];for(let r=0;r<n.length;r++){const s=n[r],{first:o,last:a,point:l}=i2(s,e,"x");if(!(!l||o&&a)){if(o)i.unshift(l);else if(t.push(l),!a)break}}t.push(...i)}function i2(t,e,n){const i=t.interpolate(e,n);if(!i)return{};const r=i[n],s=t.segments,o=t.points;let a=!1,l=!1;for(let c=0;c<s.length;c++){const u=s[c],f=o[u.start][n],d=o[u.end][n];if(zS(r,f,d)){a=r===f,l=r===d;break}}return{first:a,last:l,point:i}}class mb{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,n,i){const{x:r,y:s,radius:o}=this;return n=n||{start:0,end:Kn},e.arc(r,s,o,n.end,n.start,!0),!i.bounds}interpolate(e){const{x:n,y:i,radius:r}=this,s=e.angle;return{x:n+Math.cos(s)*r,y:i+Math.sin(s)*r,angle:s}}}function r2(t){const{chart:e,fill:n,line:i}=t;if(hn(n))return s2(e,n);if(n==="stack")return e2(t);if(n==="shape")return!0;const r=o2(t);return r instanceof mb?r:pb(r,i)}function s2(t,e){const n=t.getDatasetMeta(e);return n&&t.isDatasetVisible(e)?n.dataset:null}function o2(t){return(t.scale||{}).getPointPositionForValue?l2(t):a2(t)}function a2(t){const{scale:e={},fill:n}=t,i=ZC(n,e);if(hn(i)){const r=e.isHorizontal();return{x:r?i:null,y:r?null:i}}return null}function l2(t){const{scale:e,fill:n}=t,i=e.options,r=e.getLabels().length,s=i.reverse?e.max:e.min,o=QC(n,e,s),a=[];if(i.grid.circular){const l=e.getPointPositionForValue(0,s);return new mb({x:l.x,y:l.y,radius:e.getDistanceFromCenterForValue(o)})}for(let l=0;l<r;++l)a.push(e.getPointPositionForValue(l,o));return a}function ef(t,e,n){const i=r2(e),{chart:r,index:s,line:o,scale:a,axis:l}=e,c=o.options,u=c.fill,f=c.backgroundColor,{above:d=f,below:p=f}=u||{},g=r.getDatasetMeta(s),v=eb(r,g);i&&o.points.length&&(Gm(t,n),c2(t,{line:o,target:i,above:d,below:p,area:n,scale:a,axis:l,clip:v}),Wm(t))}function c2(t,e){const{line:n,target:i,above:r,below:s,area:o,scale:a,clip:l}=e,c=n._loop?"angle":e.axis;t.save();let u=s;s!==r&&(c==="x"?(zx(t,i,o.top),tf(t,{line:n,target:i,color:r,scale:a,property:c,clip:l}),t.restore(),t.save(),zx(t,i,o.bottom)):c==="y"&&(Bx(t,i,o.left),tf(t,{line:n,target:i,color:s,scale:a,property:c,clip:l}),t.restore(),t.save(),Bx(t,i,o.right),u=r)),tf(t,{line:n,target:i,color:u,scale:a,property:c,clip:l}),t.restore()}function zx(t,e,n){const{segments:i,points:r}=e;let s=!0,o=!1;t.beginPath();for(const a of i){const{start:l,end:c}=a,u=r[l],f=r[od(l,c,r)];s?(t.moveTo(u.x,u.y),s=!1):(t.lineTo(u.x,n),t.lineTo(u.x,u.y)),o=!!e.pathSegment(t,a,{move:o}),o?t.closePath():t.lineTo(f.x,n)}t.lineTo(e.first().x,n),t.closePath(),t.clip()}function Bx(t,e,n){const{segments:i,points:r}=e;let s=!0,o=!1;t.beginPath();for(const a of i){const{start:l,end:c}=a,u=r[l],f=r[od(l,c,r)];s?(t.moveTo(u.x,u.y),s=!1):(t.lineTo(n,u.y),t.lineTo(u.x,u.y)),o=!!e.pathSegment(t,a,{move:o}),o?t.closePath():t.lineTo(n,f.y)}t.lineTo(n,e.first().y),t.closePath(),t.clip()}function tf(t,e){const{line:n,target:i,property:r,color:s,scale:o,clip:a}=e,l=XC(n,i,r);for(const{source:c,target:u,start:f,end:d}of l){const{style:{backgroundColor:p=s}={}}=c,g=i!==!0;t.save(),t.fillStyle=p,u2(t,o,a,g&&Wh(r,f,d)),t.beginPath();const v=!!n.pathSegment(t,c);let m;if(g){v?t.closePath():Vx(t,i,d,r);const h=!!i.pathSegment(t,u,{move:v,reverse:!0});m=v&&h,m||Vx(t,i,f,r)}t.closePath(),t.fill(m?"evenodd":"nonzero"),t.restore()}}function u2(t,e,n,i){const r=e.chart.chartArea,{property:s,start:o,end:a}=i||{};if(s==="x"||s==="y"){let l,c,u,f;s==="x"?(l=o,c=r.top,u=a,f=r.bottom):(l=r.left,c=o,u=r.right,f=a),t.beginPath(),n&&(l=Math.max(l,n.left),u=Math.min(u,n.right),c=Math.max(c,n.top),f=Math.min(f,n.bottom)),t.rect(l,c,u-l,f-c),t.clip()}}function Vx(t,e,n,i){const r=e.interpolate(n,i);r&&t.lineTo(r.x,r.y)}var d2={id:"filler",afterDatasetsUpdate(t,e,n){const i=(t.data.datasets||[]).length,r=[];let s,o,a,l;for(o=0;o<i;++o)s=t.getDatasetMeta(o),a=s.dataset,l=null,a&&a.options&&a instanceof Cr&&(l={visible:t.isDatasetVisible(o),index:o,fill:qC(a,o,i),chart:t,axis:s.controller.options.indexAxis,scale:s.vScale,line:a}),s.$filler=l,r.push(l);for(o=0;o<i;++o)l=r[o],!(!l||l.fill===!1)&&(l.fill=YC(r,o,n.propagate))},beforeDraw(t,e,n){const i=n.drawTime==="beforeDraw",r=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let o=r.length-1;o>=0;--o){const a=r[o].$filler;a&&(a.line.updateControlPoints(s,a.axis),i&&a.fill&&ef(t.ctx,a,s))}},beforeDatasetsDraw(t,e,n){if(n.drawTime!=="beforeDatasetsDraw")return;const i=t.getSortedVisibleDatasetMetas();for(let r=i.length-1;r>=0;--r){const s=i[r].$filler;Ox(s)&&ef(t.ctx,s,t.chartArea)}},beforeDatasetDraw(t,e,n){const i=e.meta.$filler;!Ox(i)||n.drawTime!=="beforeDatasetDraw"||ef(t.ctx,i,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const ma={average(t){if(!t.length)return!1;let e,n,i=new Set,r=0,s=0;for(e=0,n=t.length;e<n;++e){const a=t[e].element;if(a&&a.hasValue()){const l=a.tooltipPosition();i.add(l.x),r+=l.y,++s}}return s===0||i.size===0?!1:{x:[...i].reduce((a,l)=>a+l)/i.size,y:r/s}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,r=Number.POSITIVE_INFINITY,s,o,a;for(s=0,o=t.length;s<o;++s){const l=t[s].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=Uh(e,c);u<r&&(r=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function Si(t,e){return e&&(Dt(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Gi(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function f2(t,e){const{element:n,datasetIndex:i,index:r}=e,s=t.getDatasetMeta(i).controller,{label:o,value:a}=s.getLabelAndValue(r);return{chart:t,label:o,parsed:s.getParsed(r),raw:t.data.datasets[i].data[r],formattedValue:a,dataset:s.getDataset(),dataIndex:r,datasetIndex:i,element:n}}function Hx(t,e){const n=t.chart.ctx,{body:i,footer:r,title:s}=t,{boxWidth:o,boxHeight:a}=e,l=Un(e.bodyFont),c=Un(e.titleFont),u=Un(e.footerFont),f=s.length,d=r.length,p=i.length,g=Jn(e.padding);let v=g.height,m=0,h=i.reduce((y,M)=>y+M.before.length+M.lines.length+M.after.length,0);if(h+=t.beforeBody.length+t.afterBody.length,f&&(v+=f*c.lineHeight+(f-1)*e.titleSpacing+e.titleMarginBottom),h){const y=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;v+=p*y+(h-p)*l.lineHeight+(h-1)*e.bodySpacing}d&&(v+=e.footerMarginTop+d*u.lineHeight+(d-1)*e.footerSpacing);let x=0;const S=function(y){m=Math.max(m,n.measureText(y).width+x)};return n.save(),n.font=c.string,dt(t.title,S),n.font=l.string,dt(t.beforeBody.concat(t.afterBody),S),x=e.displayColors?o+2+e.boxPadding:0,dt(i,y=>{dt(y.before,S),dt(y.lines,S),dt(y.after,S)}),x=0,n.font=u.string,dt(t.footer,S),n.restore(),m+=g.width,{width:m,height:v}}function h2(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function p2(t,e,n,i){const{x:r,width:s}=i,o=n.caretSize+n.caretPadding;if(t==="left"&&r+s+o>e.width||t==="right"&&r-s-o<0)return!0}function m2(t,e,n,i){const{x:r,width:s}=n,{width:o,chartArea:{left:a,right:l}}=t;let c="center";return i==="center"?c=r<=(a+l)/2?"left":"right":r<=s/2?c="left":r>=o-s/2&&(c="right"),p2(c,t,e,n)&&(c="center"),c}function Gx(t,e,n){const i=n.yAlign||e.yAlign||h2(t,n);return{xAlign:n.xAlign||e.xAlign||m2(t,e,n,i),yAlign:i}}function g2(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function x2(t,e,n){let{y:i,height:r}=t;return e==="top"?i+=n:e==="bottom"?i-=r+n:i-=r/2,i}function Wx(t,e,n,i){const{caretSize:r,caretPadding:s,cornerRadius:o}=t,{xAlign:a,yAlign:l}=n,c=r+s,{topLeft:u,topRight:f,bottomLeft:d,bottomRight:p}=Da(o);let g=g2(e,a);const v=x2(e,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(u,d)+r:a==="right"&&(g+=Math.max(f,p)+r),{x:Ki(g,0,i.width-e.width),y:Ki(v,0,i.height-e.height)}}function Zl(t,e,n){const i=Jn(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function jx(t){return Si([],Gi(t))}function _2(t,e,n){return Xr(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function Xx(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const gb={beforeTitle:Ui,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:Ui,beforeBody:Ui,beforeLabel:Ui,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return bt(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Ui,afterBody:Ui,beforeFooter:Ui,footer:Ui,afterFooter:Ui};function yn(t,e,n,i){const r=t[e].call(n,i);return typeof r>"u"?gb[e].call(n,i):r}class jh extends Es{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),r=i.enabled&&n.options.animation&&i.animations,s=new tb(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=_2(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,r=yn(i,"beforeTitle",this,e),s=yn(i,"title",this,e),o=yn(i,"afterTitle",this,e);let a=[];return a=Si(a,Gi(r)),a=Si(a,Gi(s)),a=Si(a,Gi(o)),a}getBeforeBody(e,n){return jx(yn(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,r=[];return dt(e,s=>{const o={before:[],lines:[],after:[]},a=Xx(i,s);Si(o.before,Gi(yn(a,"beforeLabel",this,s))),Si(o.lines,yn(a,"label",this,s)),Si(o.after,Gi(yn(a,"afterLabel",this,s))),r.push(o)}),r}getAfterBody(e,n){return jx(yn(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,r=yn(i,"beforeFooter",this,e),s=yn(i,"footer",this,e),o=yn(i,"afterFooter",this,e);let a=[];return a=Si(a,Gi(r)),a=Si(a,Gi(s)),a=Si(a,Gi(o)),a}_createItems(e){const n=this._active,i=this.chart.data,r=[],s=[],o=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(f2(this.chart,n[l]));return e.filter&&(a=a.filter((u,f,d)=>e.filter(u,f,d,i))),e.itemSort&&(a=a.sort((u,f)=>e.itemSort(u,f,i))),dt(a,u=>{const f=Xx(e.callbacks,u);r.push(yn(f,"labelColor",this,u)),s.push(yn(f,"labelPointStyle",this,u)),o.push(yn(f,"labelTextColor",this,u))}),this.labelColors=r,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const i=this.options.setContext(this.getContext()),r=this._active;let s,o=[];if(!r.length)this.opacity!==0&&(s={opacity:0});else{const a=ma[i.position].call(this,r,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const l=this._size=Hx(this,i),c=Object.assign({},a,l),u=Gx(this.chart,i,c),f=Wx(i,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,s={opacity:1,x:f.x,y:f.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,r){const s=this.getCaretPosition(e,i,r);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(e,n,i){const{xAlign:r,yAlign:s}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:f}=Da(a),{x:d,y:p}=e,{width:g,height:v}=n;let m,h,x,S,y,M;return s==="center"?(y=p+v/2,r==="left"?(m=d,h=m-o,S=y+o,M=y-o):(m=d+g,h=m+o,S=y-o,M=y+o),x=m):(r==="left"?h=d+Math.max(l,u)+o:r==="right"?h=d+g-Math.max(c,f)-o:h=this.caretX,s==="top"?(S=p,y=S-o,m=h-o,x=h+o):(S=p+v,y=S+o,m=h+o,x=h-o),M=S),{x1:m,x2:h,x3:x,y1:S,y2:y,y3:M}}drawTitle(e,n,i){const r=this.title,s=r.length;let o,a,l;if(s){const c=$d(i.rtl,this.x,this.width);for(e.x=Zl(this,i.titleAlign,i),n.textAlign=c.textAlign(i.titleAlign),n.textBaseline="middle",o=Un(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=o.string,l=0;l<s;++l)n.fillText(r[l],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===s&&(e.y+=i.titleMarginBottom-a)}}_drawColorBox(e,n,i,r,s){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=s,u=Un(s.bodyFont),f=Zl(this,"left",s),d=r.x(f),p=l<u.lineHeight?(u.lineHeight-l)/2:0,g=n.y+p;if(s.usePointStyle){const v={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},m=r.leftForLtr(d,c)+c/2,h=g+l/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,zh(e,v,m,h),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,zh(e,v,m,h)}else{e.lineWidth=et(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const v=r.leftForLtr(d,c),m=r.leftForLtr(r.xPlus(d,1),c-2),h=Da(o.borderRadius);Object.values(h).some(x=>x!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,Bh(e,{x:v,y:g,w:c,h:l,radius:h}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),Bh(e,{x:m,y:g+1,w:c-2,h:l-2,radius:h}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(v,g,c,l),e.strokeRect(v,g,c,l),e.fillStyle=o.backgroundColor,e.fillRect(m,g+1,c-2,l-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:r}=this,{bodySpacing:s,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=i,f=Un(i.bodyFont);let d=f.lineHeight,p=0;const g=$d(i.rtl,this.x,this.width),v=function(_){n.fillText(_,g.x(e.x+p),e.y+d/2),e.y+=d+s},m=g.textAlign(o);let h,x,S,y,M,E,C;for(n.textAlign=o,n.textBaseline="middle",n.font=f.string,e.x=Zl(this,m,i),n.fillStyle=i.bodyColor,dt(this.beforeBody,v),p=a&&m!=="right"?o==="center"?c/2+u:c+2+u:0,y=0,E=r.length;y<E;++y){for(h=r[y],x=this.labelTextColors[y],n.fillStyle=x,dt(h.before,v),S=h.lines,a&&S.length&&(this._drawColorBox(n,e,y,g,i),d=Math.max(f.lineHeight,l)),M=0,C=S.length;M<C;++M)v(S[M]),d=f.lineHeight;dt(h.after,v)}p=0,d=f.lineHeight,dt(this.afterBody,v),e.y-=s}drawFooter(e,n,i){const r=this.footer,s=r.length;let o,a;if(s){const l=$d(i.rtl,this.x,this.width);for(e.x=Zl(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",o=Un(i.footerFont),n.fillStyle=i.footerColor,n.font=o.string,a=0;a<s;++a)n.fillText(r[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+i.footerSpacing}}drawBackground(e,n,i,r){const{xAlign:s,yAlign:o}=this,{x:a,y:l}=e,{width:c,height:u}=i,{topLeft:f,topRight:d,bottomLeft:p,bottomRight:g}=Da(r.cornerRadius);n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.beginPath(),n.moveTo(a+f,l),o==="top"&&this.drawCaret(e,n,i,r),n.lineTo(a+c-d,l),n.quadraticCurveTo(a+c,l,a+c,l+d),o==="center"&&s==="right"&&this.drawCaret(e,n,i,r),n.lineTo(a+c,l+u-g),n.quadraticCurveTo(a+c,l+u,a+c-g,l+u),o==="bottom"&&this.drawCaret(e,n,i,r),n.lineTo(a+p,l+u),n.quadraticCurveTo(a,l+u,a,l+u-p),o==="center"&&s==="left"&&this.drawCaret(e,n,i,r),n.lineTo(a,l+f),n.quadraticCurveTo(a,l,a+f,l),n.closePath(),n.fill(),r.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,r=i&&i.x,s=i&&i.y;if(r||s){const o=ma[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Hx(this,e),l=Object.assign({},o,this._size),c=Gx(n,e,l),u=Wx(e,l,c,n);(r._to!==u.x||s._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const r={width:this.width,height:this.height},s={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=Jn(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=i,this.drawBackground(s,e,r,n),sA(e,n.textDirection),s.y+=o.top,this.drawTitle(s,e,n),this.drawBody(s,e,n),this.drawFooter(s,e,n),oA(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,r=e.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),s=!Mu(i,r),o=this._positionChanged(r,n);(s||o)&&(this._active=r,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,s=this._active||[],o=this._getActiveElements(e,s,n,i),a=this._positionChanged(o,e),l=n||!Mu(o,s)||a;return l&&(this._active=o,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,i,r){const s=this.options;if(e.type==="mouseout")return[];if(!r)return n.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(e,s.mode,s,i);return s.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:i,caretY:r,options:s}=this,o=ma[s.position].call(this,e,n);return o!==!1&&(i!==o.x||r!==o.y)}}Xe(jh,"positioners",ma);var v2={id:"tooltip",_element:jh,positioners:ma,afterInit(t,e,n){n&&(t.tooltip=new jh({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:gb},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};function y2(t,e){const n=[],{bounds:r,step:s,min:o,max:a,precision:l,count:c,maxTicks:u,maxDigits:f,includeBounds:d}=t,p=s||1,g=u-1,{min:v,max:m}=e,h=!bt(o),x=!bt(a),S=!bt(c),y=(m-v)/(f+1);let M=q0((m-v)/g/p)*p,E,C,_,A;if(M<1e-14&&!h&&!x)return[{value:v},{value:m}];A=Math.ceil(m/M)-Math.floor(v/M),A>g&&(M=q0(A*M/g/p)*p),bt(l)||(E=Math.pow(10,l),M=Math.ceil(M*E)/E),r==="ticks"?(C=Math.floor(v/M)*M,_=Math.ceil(m/M)*M):(C=v,_=m),h&&x&&s&&ZE((a-o)/s,M/1e3)?(A=Math.round(Math.min((a-o)/M,u)),M=(a-o)/A,C=o,_=a):S?(C=h?o:C,_=x?a:_,A=c-1,M=(_-C)/A):(A=(_-C)/M,Pa(A,Math.round(A),M/1e3)?A=Math.round(A):A=Math.ceil(A));const R=Math.max(K0(M),K0(C));E=Math.pow(10,bt(l)?R:l),C=Math.round(C*E)/E,_=Math.round(_*E)/E;let L=0;for(h&&(d&&C!==o?(n.push({value:o}),C<o&&L++,Pa(Math.round((C+L*M)*E)/E,o,$x(o,y,t))&&L++):C<o&&L++);L<A;++L){const D=Math.round((C+L*M)*E)/E;if(x&&D>a)break;n.push({value:D})}return x&&d&&_!==a?n.length&&Pa(n[n.length-1].value,a,$x(a,y,t))?n[n.length-1].value=a:n.push({value:a}):(!x||_===a)&&n.push({value:_}),n}function $x(t,e,{horizontal:n,minRotation:i}){const r=fs(i),s=(n?Math.sin(r):Math.cos(r))||.001,o=.75*e*(""+t).length;return Math.min(e/s,o)}class Yx extends gl{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return bt(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:r,max:s}=this;const o=l=>r=n?r:l,a=l=>s=i?s:l;if(e){const l=No(r),c=No(s);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(r===s){let l=s===0?1:Math.abs(s*.05);a(s+l),e||o(r-l)}this.min=r,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,r;return i?(r=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),n=n||11),n&&(r=Math.min(n,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const r={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,o=y2(r,s);return e.bounds==="ticks"&&QE(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const r=(i-n)/Math.max(e.length-1,1)/2;n-=r,i+=r}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return GS(e,this.chart.options.locale,this.options.ticks.format)}}function Xh(t){const e=t.ticks;if(e.display&&t.display){const n=Jn(e.backdropPadding);return mt(e.font&&e.font.size,Ut.font.size)+n.height}return 0}function S2(t,e,n){return n=Dt(n)?n:[n],{w:_T(t,e.string,n),h:n.length*e.lineHeight}}function qx(t,e,n,i,r){return t===i||t===r?{start:e-n/2,end:e+n/2}:t<i||t>r?{start:e-n,end:e}:{start:e,end:e+n}}function b2(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),i=[],r=[],s=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?qt/s:0;for(let l=0;l<s;l++){const c=o.setContext(t.getPointLabelContext(l));r[l]=c.padding;const u=t.getPointPosition(l,t.drawingArea+r[l],a),f=Un(c.font),d=S2(t.ctx,f,t._pointLabels[l]);i[l]=d;const p=Nn(t.getIndexAngle(l)+a),g=Math.round(Bm(p)),v=qx(g,u.x,d.w,0,180),m=qx(g,u.y,d.h,90,270);M2(n,e,p,v,m)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=T2(t,i,r)}function M2(t,e,n,i,r){const s=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,l=0;i.start<e.l?(a=(e.l-i.start)/s,t.l=Math.min(t.l,e.l-a)):i.end>e.r&&(a=(i.end-e.r)/s,t.r=Math.max(t.r,e.r+a)),r.start<e.t?(l=(e.t-r.start)/o,t.t=Math.min(t.t,e.t-l)):r.end>e.b&&(l=(r.end-e.b)/o,t.b=Math.max(t.b,e.b+l))}function w2(t,e,n){const i=t.drawingArea,{extra:r,additionalAngle:s,padding:o,size:a}=n,l=t.getPointPosition(e,i+r+o,s),c=Math.round(Bm(Nn(l.angle+Fn))),u=R2(l.y,a.h,c),f=A2(c),d=C2(l.x,a.w,f);return{visible:!0,x:l.x,y:u,textAlign:f,left:d,top:u,right:d+a.w,bottom:u+a.h}}function E2(t,e){if(!e)return!0;const{left:n,top:i,right:r,bottom:s}=t;return!(Zi({x:n,y:i},e)||Zi({x:n,y:s},e)||Zi({x:r,y:i},e)||Zi({x:r,y:s},e))}function T2(t,e,n){const i=[],r=t._pointLabels.length,s=t.options,{centerPointLabels:o,display:a}=s.pointLabels,l={extra:Xh(s)/2,additionalAngle:o?qt/r:0};let c;for(let u=0;u<r;u++){l.padding=n[u],l.size=e[u];const f=w2(t,u,l);i.push(f),a==="auto"&&(f.visible=E2(f,c),f.visible&&(c=f))}return i}function A2(t){return t===0||t===180?"center":t<180?"left":"right"}function C2(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function R2(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function P2(t,e,n){const{left:i,top:r,right:s,bottom:o}=n,{backdropColor:a}=e;if(!bt(a)){const l=Da(e.borderRadius),c=Jn(e.backdropPadding);t.fillStyle=a;const u=i-c.left,f=r-c.top,d=s-i+c.width,p=o-r+c.height;Object.values(l).some(g=>g!==0)?(t.beginPath(),Bh(t,{x:u,y:f,w:d,h:p,radius:l}),t.fill()):t.fillRect(u,f,d,p)}}function L2(t,e){const{ctx:n,options:{pointLabels:i}}=t;for(let r=e-1;r>=0;r--){const s=t._pointLabelItems[r];if(!s.visible)continue;const o=i.setContext(t.getPointLabelContext(r));P2(n,o,s);const a=Un(o.font),{x:l,y:c,textAlign:u}=s;Ru(n,t._pointLabels[r],l,c+a.lineHeight/2,a,{color:o.color,textAlign:u,textBaseline:"middle"})}}function xb(t,e,n,i){const{ctx:r}=t;if(n)r.arc(t.xCenter,t.yCenter,e,0,Kn);else{let s=t.getPointPosition(0,e);r.moveTo(s.x,s.y);for(let o=1;o<i;o++)s=t.getPointPosition(o,e),r.lineTo(s.x,s.y)}}function N2(t,e,n,i,r){const s=t.ctx,o=e.circular,{color:a,lineWidth:l}=e;!o&&!i||!a||!l||n<0||(s.save(),s.strokeStyle=a,s.lineWidth=l,s.setLineDash(r.dash||[]),s.lineDashOffset=r.dashOffset,s.beginPath(),xb(t,n,o,i),s.closePath(),s.stroke(),s.restore())}function D2(t,e,n){return Xr(t,{label:n,index:e,type:"pointLabel"})}class ga extends Yx{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=Jn(Xh(this.options)/2),n=this.width=this.maxWidth-e.width,i=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+i/2+e.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=hn(e)&&!isNaN(e)?e:0,this.max=hn(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Xh(this.options))}generateTickLabels(e){Yx.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,i)=>{const r=Lt(this.options.pointLabels.callback,[n,i],this);return r||r===0?r:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const e=this.options;e.display&&e.pointLabels.display?b2(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,i,r){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((i-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,i,r))}getIndexAngle(e){const n=Kn/(this._pointLabels.length||1),i=this.options.startAngle||0;return Nn(e*n+fs(i))}getDistanceFromCenterForValue(e){if(bt(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(bt(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const i=n[e];return D2(this.getContext(),e,i)}}getPointPosition(e,n,i=0){const r=this.getIndexAngle(e)-Fn+i;return{x:Math.cos(r)*n+this.xCenter,y:Math.sin(r)*n+this.yCenter,angle:r}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:i,right:r,bottom:s}=this._pointLabelItems[e];return{left:n,top:i,right:r,bottom:s}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const i=this.ctx;i.save(),i.beginPath(),xb(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=e,i.fill(),i.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:i,grid:r,border:s}=n,o=this._pointLabels.length;let a,l,c;if(n.pointLabels.display&&L2(this,o),r.display&&this.ticks.forEach((u,f)=>{if(f!==0||f===0&&this.min<0){l=this.getDistanceFromCenterForValue(u.value);const d=this.getContext(f),p=r.setContext(d),g=s.setContext(d);N2(this,p,l,o,g)}}),i.display){for(e.save(),a=o-1;a>=0;a--){const u=i.setContext(this.getPointLabelContext(a)),{color:f,lineWidth:d}=u;!d||!f||(e.lineWidth=d,e.strokeStyle=f,e.setLineDash(u.borderDash),e.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.reverse?this.min:this.max),c=this.getPointPosition(a,l),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const r=this.getIndexAngle(0);let s,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(r),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!n.reverse)return;const c=i.setContext(this.getContext(l)),u=Un(c.font);if(s=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){e.font=u.string,o=e.measureText(a.label).width,e.fillStyle=c.backdropColor;const f=Jn(c.backdropPadding);e.fillRect(-o/2-f.left,-s-u.size/2-f.top,o+f.width,u.size+f.height)}Ru(e,a.label,0,-s,u,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),e.restore()}drawTitle(){}}Xe(ga,"id","radialLinear"),Xe(ga,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:WS.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),Xe(ga,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),Xe(ga,"descriptors",{angleLines:{_fallback:"grid"}});const ad={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Mn=Object.keys(ad);function Kx(t,e){return t-e}function Zx(t,e){if(bt(e))return null;const n=t._adapter,{parser:i,round:r,isoWeekday:s}=t._parseOpts;let o=e;return typeof i=="function"&&(o=i(o)),hn(o)||(o=typeof i=="string"?n.parse(o,i):n.parse(o)),o===null?null:(r&&(o=r==="week"&&(Au(s)||s===!0)?n.startOf(o,"isoWeek",s):n.startOf(o,r)),+o)}function Qx(t,e,n,i){const r=Mn.length;for(let s=Mn.indexOf(t);s<r-1;++s){const o=ad[Mn[s]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=i)return Mn[s]}return Mn[r-1]}function I2(t,e,n,i,r){for(let s=Mn.length-1;s>=Mn.indexOf(n);s--){const o=Mn[s];if(ad[o].common&&t._adapter.diff(r,i,o)>=e-1)return o}return Mn[n?Mn.indexOf(n):0]}function F2(t){for(let e=Mn.indexOf(t)+1,n=Mn.length;e<n;++e)if(ad[Mn[e]].common)return Mn[e]}function Jx(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:r}=Vm(n,e),s=n[i]>=e?n[i]:n[r];t[s]=!0}}function U2(t,e,n,i){const r=t._adapter,s=+r.startOf(e[0].value,i),o=e[e.length-1].value;let a,l;for(a=s;a<=o;a=+r.add(a,1,i))l=n[a],l>=0&&(e[l].major=!0);return e}function e_(t,e,n){const i=[],r={},s=e.length;let o,a;for(o=0;o<s;++o)a=e[o],r[a]=o,i.push({value:a,major:!1});return s===0||!n?i:U2(t,i,r,n)}class Nu extends gl{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),r=this._adapter=new CA._date(e.adapters.date);r.init(n),Ra(i.displayFormats,r.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:Zx(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:r,max:s,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(r=Math.min(r,c.min)),!a&&!isNaN(c.max)&&(s=Math.max(s,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),r=hn(r)&&!isNaN(r)?r:+n.startOf(Date.now(),i),s=hn(s)&&!isNaN(s)?s:+n.endOf(Date.now(),i)+1,this.min=Math.min(r,s-1),this.max=Math.max(r+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,r=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const s=this.min,o=this.max,a=iT(r,s,o);return this._unit=n.unit||(i.autoSkip?Qx(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):I2(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:F2(this._unit),this.initOffsets(r),e.reverse&&a.reverse(),e_(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,r,s;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),e.length===1?n=1-r:n=(this.getDecimalForValue(e[1])-r)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?i=s:i=(s-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=Ki(n,0,o),i=Ki(i,0,o),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,r=this.options,s=r.time,o=s.unit||Qx(s.minUnit,n,i,this._getLabelCapacity(n)),a=mt(r.ticks.stepSize,1),l=o==="week"?s.isoWeekday:!1,c=Au(l)||l===!0,u={};let f=n,d,p;if(c&&(f=+e.startOf(f,"isoWeek",l)),f=+e.startOf(f,c?"day":o),e.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const g=r.ticks.source==="data"&&this.getDataTimestamps();for(d=f,p=0;d<i;d=+e.add(d,a,o),p++)Jx(u,d,g);return(d===i||r.bounds==="ticks"||p===1)&&Jx(u,d,g),Object.keys(u).sort(Kx).map(v=>+v)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const r=this.options.time.displayFormats,s=this._unit,o=n||r[s];return this._adapter.format(e,o)}_tickFormatFunction(e,n,i,r){const s=this.options,o=s.ticks.callback;if(o)return Lt(o,[e,n,i],this);const a=s.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],f=c&&a[c],d=i[n],p=c&&f&&d&&d.major;return this._adapter.format(e,r||(p?f:u))}generateTickLabels(e){let n,i,r;for(n=0,i=e.length;n<i;++n)r=e[n],r.label=this._tickFormatFunction(r.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,r=fs(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(r),o=Math.sin(r),a=this._resolveTickFontOptions(0).size;return{w:i*s+a*o,h:i*o+a*s}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,r=i[n.unit]||i.millisecond,s=this._tickFormatFunction(e,0,e_(this,[e],this._majorUnit),r),o=this._getLabelSize(s),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(n=0,i=r.length;n<i;++n)e=e.concat(r[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const r=this.getLabels();for(n=0,i=r.length;n<i;++n)e.push(Zx(this,r[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return sT(e.sort(Kx))}}Xe(Nu,"id","time"),Xe(Nu,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Ql(t,e,n){let i=0,r=t.length-1,s,o,a,l;n?(e>=t[i].pos&&e<=t[r].pos&&({lo:i,hi:r}=kh(t,"pos",e)),{pos:s,time:a}=t[i],{pos:o,time:l}=t[r]):(e>=t[i].time&&e<=t[r].time&&({lo:i,hi:r}=kh(t,"time",e)),{time:s,pos:a}=t[i],{time:o,pos:l}=t[r]);const c=o-s;return c?a+(l-a)*(e-s)/c:a}class t_ extends Nu{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=Ql(n,this.min),this._tableRange=Ql(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,r=[],s=[];let o,a,l,c,u;for(o=0,a=e.length;o<a;++o)c=e[o],c>=n&&c<=i&&r.push(c);if(r.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(o=0,a=r.length;o<a;++o)u=r[o+1],l=r[o-1],c=r[o],Math.round((u+l)/2)!==c&&s.push({time:c,pos:o/(a-1)});return s}_generate(){const e=this.min,n=this.max;let i=super.getDataTimestamps();return(!i.includes(e)||!i.length)&&i.splice(0,0,e),(!i.includes(n)||i.length===1)&&i.push(n),i.sort((r,s)=>r-s)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(Ql(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return Ql(this._table,i*this._tableRange+this._minPos,!0)}}Xe(t_,"id","timeseries"),Xe(t_,"defaults",Nu.defaults);$i.register(zc,ga,Hc,Cr,d2,v2);const n_=["Task Classification","Sensor Compatibility","Model Output Quality","Evidence Agreement","Temporal Consistency","Answer Groundedness"],i_=["task_classification","sensor_compatibility","model_output_quality","evidence_agreement","temporal_consistency","answer_groundedness"];function Jl(t){return t>=.85?"var(--accent-success)":t>=.65?"var(--accent-warning)":"var(--accent-danger)"}function k2({breakdown:t}){const e=oe.useRef(null),n=oe.useRef(null),i=i_.map(s=>Math.round(t[s]*100));oe.useEffect(()=>{if(e.current)return n.current&&n.current.destroy(),n.current=new $i(e.current,{type:"radar",data:{labels:n_,datasets:[{label:"Confidence",data:i,fill:!0,backgroundColor:"rgba(59,130,246,0.15)",borderColor:"rgba(59,130,246,0.8)",pointBackgroundColor:"rgba(6,182,212,1)",pointRadius:4,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!0,animation:{duration:800,easing:"easeInOutQuart"},scales:{r:{min:0,max:100,ticks:{stepSize:25,color:"rgba(148,163,184,0.6)",font:{size:10},backdropColor:"transparent"},grid:{color:"rgba(255,255,255,0.06)"},pointLabels:{color:"rgba(148,163,184,0.9)",font:{size:11,family:"Inter, sans-serif"}},angleLines:{color:"rgba(255,255,255,0.06)"}}},plugins:{legend:{display:!1},tooltip:{callbacks:{label:s=>`${s.label}: ${s.parsed.r}%`}}}}}),()=>{var s;(s=n.current)==null||s.destroy()}},[t]);const r=Math.round(t.overall*100);return w.jsxs("div",{className:"card fade-in-up",id:"confidence-breakdown-panel",children:[w.jsxs("div",{className:"flex items-center justify-between mb-4",children:[w.jsxs("div",{children:[w.jsx("p",{className:"section-label",children:"📊 Confidence Breakdown"}),w.jsx("p",{className:"text-sm text-muted",children:"6-component analysis · SIH26167 §4.3"})]}),w.jsxs("div",{className:"overall-score",style:{color:Jl(t.overall)},children:[w.jsx("span",{className:"overall-number",children:r}),w.jsx("span",{className:"overall-label",children:"/ 100"})]})]}),w.jsx("div",{className:"radar-wrap",children:w.jsx("canvas",{ref:e,id:"confidence-radar-chart"})}),w.jsx("div",{className:"gauge-list",children:i_.map((s,o)=>{const a=t[s],l=Math.round(a*100);return w.jsxs("div",{className:"gauge-row",id:`gauge-${s}`,children:[w.jsx("span",{className:"gauge-label",children:n_[o]}),w.jsx("div",{className:"progress-bar gauge-bar",children:w.jsx("div",{className:"progress-bar-fill",style:{width:`${l}%`,background:`linear-gradient(90deg, ${Jl(a)}, ${Jl(a)}88)`}})}),w.jsxs("span",{className:"gauge-val",style:{color:Jl(a)},children:[l,"%"]})]},s)})}),w.jsx("style",{children:`
        .overall-score { text-align: right; }
        .overall-number { font-size: 2rem; font-weight: 800; line-height: 1; }
        .overall-label { font-size: 0.85rem; font-weight: 600; opacity: 0.7; }
        .radar-wrap { max-width: 300px; margin: 0 auto 1.25rem; }
        .gauge-list { display: flex; flex-direction: column; gap: 0.55rem; }
        .gauge-row { display: grid; grid-template-columns: 160px 1fr 42px; align-items: center; gap: 0.6rem; }
        .gauge-label { font-size: 0.75rem; font-weight: 600; color: var(--text-secondary); white-space: nowrap; }
        .gauge-bar { height: 8px; }
        .gauge-val { font-size: 0.78rem; font-weight: 700; text-align: right; font-family: var(--font-mono); }
        @media (max-width: 500px) { .gauge-row { grid-template-columns: 1fr; } .gauge-label { font-size: 0.7rem; } }
      `})]})}const r_={success:{icon:"✓",color:"var(--accent-success)",badge:"badge-green"},warning:{icon:"⚠",color:"var(--accent-warning)",badge:"badge-amber"},error:{icon:"✕",color:"var(--accent-danger)",badge:"badge-red"},skipped:{icon:"—",color:"var(--text-muted)",badge:"badge-blue"}};function O2({trace:t}){const[e,n]=oe.useState(null),i=r=>n(s=>s===r?null:r);return w.jsxs("div",{className:"card fade-in-up",id:"provenance-graph-panel",children:[w.jsxs("div",{className:"flex items-center justify-between mb-4",children:[w.jsxs("div",{children:[w.jsx("p",{className:"section-label",children:"🔗 Execution Trace"}),w.jsxs("p",{className:"text-sm text-muted",children:["Trace ID: ",w.jsx("code",{className:"text-mono",style:{color:"var(--text-accent)"},children:t.trace_id})," · ",t.steps.length," steps · ",t.total_duration_ms.toFixed(0)," ms total"]})]}),w.jsx("span",{className:"badge badge-blue",children:"Auditable"})]}),w.jsx("div",{className:"trace-pipeline",children:t.steps.map((r,s)=>w.jsx(z2,{step:r,index:s,isLast:s===t.steps.length-1,expanded:e===r.step_id,onToggle:()=>i(r.step_id)},r.step_id))}),w.jsx("style",{children:`
        .trace-pipeline { display: flex; flex-direction: column; gap: 0; }
      `})]})}function z2({step:t,index:e,isLast:n,expanded:i,onToggle:r}){const s=r_[t.status]??r_.success;return w.jsxs("div",{className:"step-wrap",id:`trace-step-${t.step_id}`,children:[w.jsxs("div",{className:"step-connector-col",children:[w.jsx("div",{className:"step-dot",style:{borderColor:s.color,color:s.color},children:s.icon}),!n&&w.jsx("div",{className:"step-line"})]}),w.jsxs("div",{className:"step-body",children:[w.jsxs("div",{className:"step-header",onClick:r,role:"button",tabIndex:0,onKeyDown:o=>o.key==="Enter"&&r(),children:[w.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[w.jsxs("span",{className:"step-num text-xs text-muted",children:["#",e+1]}),w.jsx("span",{style:{fontWeight:600,fontSize:"0.88rem"},children:t.step_name}),w.jsx("span",{className:`badge ${s.badge}`,children:t.status})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsxs("span",{className:"text-xs",style:{color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:[t.duration_ms.toFixed(1)," ms"]}),w.jsx("span",{className:"text-xs",style:{color:"var(--text-muted)",fontSize:"0.7rem"},children:i?"▲":"▼"})]})]}),w.jsx("p",{className:"step-component text-xs text-muted",style:{marginTop:"2px"},children:t.component}),i&&w.jsx("div",{className:"step-detail fade-in",children:w.jsxs("div",{className:"step-io",children:[w.jsxs("div",{children:[w.jsx("p",{className:"section-label",style:{fontSize:"0.65rem"},children:"Input"}),w.jsx("p",{className:"text-xs text-secondary",children:t.input_summary})]}),w.jsxs("div",{children:[w.jsx("p",{className:"section-label",style:{fontSize:"0.65rem"},children:"Output"}),w.jsx("p",{className:"text-xs text-secondary",children:t.output_summary})]})]})})]}),w.jsx("style",{children:`
        .step-wrap { display: flex; gap: 0.75rem; }
        .step-connector-col { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 28px; }
        .step-dot { width: 28px; height: 28px; border-radius: 50%; border: 2px solid; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; background: var(--bg-card); flex-shrink: 0; }
        .step-line { flex: 1; width: 2px; background: linear-gradient(180deg, rgba(59,130,246,0.25), rgba(59,130,246,0.06)); min-height: 16px; }
        .step-body { flex: 1; padding-bottom: 1rem; min-width: 0; }
        .step-header { display: flex; align-items: center; justify-content: space-between; cursor: pointer; padding: 4px 8px; border-radius: var(--radius-sm); transition: background 0.15s; }
        .step-header:hover { background: rgba(255,255,255,0.04); }
        .step-num { min-width: 18px; }
        .step-component { padding-left: 8px; }
        .step-detail { margin-top: 0.5rem; padding: 0.65rem; background: rgba(0,0,0,0.25); border-radius: var(--radius-sm); border: 1px solid var(--border-card); }
        .step-io { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        @media (max-width: 500px) { .step-io { grid-template-columns: 1fr; } }
      `})]})}function B2({response:t}){const e=t.verifier_result;return w.jsxs("div",{className:"results-panel",id:"results-panel",children:[w.jsxs("div",{className:"card answer-card fade-in-up",id:"answer-card",children:[w.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[w.jsx("span",{style:{fontSize:"1.4rem"},children:"💡"}),w.jsxs("div",{children:[w.jsx("p",{className:"section-label",style:{margin:0},children:"Answer"}),w.jsxs("p",{className:"text-xs text-muted",children:["Query ID: ",w.jsx("code",{className:"text-mono",children:t.query_id})]})]})]}),w.jsx("p",{className:"answer-text",children:t.answer}),w.jsx("a",{href:t.report_url,download:!0,className:"btn btn-secondary btn-sm mt-4",id:"download-report-btn",target:"_blank",rel:"noopener noreferrer",children:"📄 Download Full PDF Report"})]}),w.jsxs("div",{className:`card verifier-card fade-in-up ${e.agreement?"verifier-ok":"verifier-conflict"}`,id:"verifier-result-panel",children:[w.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[w.jsx("span",{style:{fontSize:"1.1rem"},children:e.agreement?"✅":e.replanned?"🔄":"⚠"}),w.jsx("p",{className:"section-label",style:{margin:0},children:"Evidence Verification"}),e.agreement&&w.jsx("span",{className:"badge badge-green",children:"All agents agree"}),!e.agreement&&e.replanned&&w.jsx("span",{className:"badge badge-amber",children:"Re-planned"}),!e.agreement&&!e.replanned&&w.jsx("span",{className:"badge badge-red",children:"Conflicts detected"})]}),e.conflicts_found.length>0&&w.jsx("ul",{className:"conflict-list",children:e.conflicts_found.map((n,i)=>w.jsxs("li",{className:"text-sm",style:{color:"var(--accent-warning)"},children:["⚠ ",n]},i))}),e.replan_reason&&w.jsxs("p",{className:"text-sm mt-2",style:{color:"var(--text-secondary)"},children:["🔄 Re-plan: ",e.replan_reason]})]}),w.jsx(fE,{spec:t.earthquery_spec}),w.jsx(hE,{sensor:t.sensor_selection}),w.jsxs("div",{className:"card fade-in-up",id:"agent-outputs-section",children:[w.jsxs("p",{className:"section-label mb-3",children:["🤖 Specialist Agent Outputs (",t.agent_outputs.length,")"]}),w.jsx("div",{className:"agent-list",children:t.agent_outputs.map((n,i)=>w.jsx(mE,{output:n,index:i},n.agent_id))})]}),w.jsx(k2,{breakdown:t.confidence_breakdown}),w.jsx(O2,{trace:t.execution_trace}),w.jsx("style",{children:`
        .results-panel { display: flex; flex-direction: column; gap: 1.25rem; }
        .answer-card {
          border-left: 4px solid var(--accent-primary);
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(8, 14, 28, 0.98));
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.9), 0 0 35px rgba(56, 189, 248, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.2);
        }
        .answer-text {
          font-family: var(--font-sans);
          font-size: 1rem;
          line-height: 1.75;
          color: #f1f5f9;
          white-space: pre-wrap;
          font-weight: 500;
        }
        .verifier-card {
          border-left: 4px solid;
          box-shadow: var(--shadow-3d);
        }
        .verifier-ok {
          border-color: var(--accent-success);
          background: linear-gradient(145deg, rgba(6, 78, 59, 0.2), rgba(15, 23, 42, 0.85));
          box-shadow: 0 14px 40px rgba(0,0,0,0.8), 0 0 25px rgba(16, 185, 129, 0.15);
        }
        .verifier-conflict {
          border-color: var(--accent-warning);
          background: linear-gradient(145deg, rgba(120, 53, 15, 0.2), rgba(15, 23, 42, 0.85));
          box-shadow: 0 14px 40px rgba(0,0,0,0.8), 0 0 25px rgba(245, 158, 11, 0.15);
        }
        .conflict-list { padding-left: 1rem; display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.5rem; }
        .agent-list { display: flex; flex-direction: column; gap: 1rem; }
      `})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zm="186",V2=0,s_=1,H2=2,Gc=1,G2=2,xa=3,Ts=0,un=1,li=2,Ji=0,Fa=1,Ua=2,o_=3,a_=4,W2=5,Ks=100,j2=101,X2=102,$2=103,Y2=104,q2=200,K2=201,Z2=202,Q2=203,_b=204,vb=205,J2=206,eR=207,tR=208,nR=209,iR=210,rR=211,sR=212,oR=213,aR=214,$h=0,Yh=1,qh=2,rl=3,Kh=4,Zh=5,Qh=6,Jh=7,yb=0,lR=1,cR=2,Li=0,Sb=1,bb=2,Mb=3,Qm=4,wb=5,Eb=6,Tb=7,Ab=300,As=301,Fo=302,nf=303,rf=304,ld=306,Du=1e3,Ti=1001,ep=1002,Qt=1003,uR=1004,ec=1005,cn=1006,sf=1007,hs=1008,Dn=1009,Cb=1010,Rb=1011,sl=1012,Jm=1013,Di=1014,Ai=1015,Ii=1016,eg=1017,tg=1018,ol=1020,Pb=35902,Lb=35899,Nb=1021,Db=1022,ui=1023,sr=1026,ps=1027,Ib=1028,ng=1029,Cs=1030,ig=1031,rg=1033,Wc=33776,jc=33777,Xc=33778,$c=33779,tp=35840,np=35841,ip=35842,rp=35843,sp=36196,op=37492,ap=37496,lp=37488,cp=37489,Iu=37490,up=37491,dp=37808,fp=37809,hp=37810,pp=37811,mp=37812,gp=37813,xp=37814,_p=37815,vp=37816,yp=37817,Sp=37818,bp=37819,Mp=37820,wp=37821,Ep=36492,Tp=36494,Ap=36495,Cp=36283,Rp=36284,Fu=36285,Pp=36286,dR=3200,Lp=0,fR=1,Mr="",Wn="srgb",Uu="srgb-linear",ku="linear",ut="srgb",of=7680,hR=519,pR=512,mR=513,gR=514,sg=515,xR=516,_R=517,og=518,vR=519,yR=35044,l_="300 es",Ci=2e3,al=2001;function SR(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ou(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bR(){const t=Ou("canvas");return t.style.display="block",t}const c_={};function u_(...t){const e="THREE."+t.shift();console.log(e,...t)}function Fb(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ke(...t){t=Fb(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function rt(...t){t=Fb(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Mo(...t){const e=t.join(" ");e in c_||(c_[e]=!0,ke(...t))}function MR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const wR={[$h]:Yh,[qh]:Qh,[Kh]:Jh,[rl]:Zh,[Yh]:$h,[Qh]:qh,[Jh]:Kh,[Zh]:rl};class Ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],af=Math.PI/180,Np=180/Math.PI;function xl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function ER(t,e){return(t%e+e)%e}function lf(t,e,n){return(1-n)*t+n*e}function na(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const _g=class _g{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_g.prototype.isVector2=!0;let Ze=_g;class Bo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(f!==v||l!==d||c!==p||u!==g){let m=l*d+c*p+u*g+f*v;m<0&&(d=-d,p=-p,g=-g,v=-v,m=-m);let h=1-a;if(m<.9995){const x=Math.acos(m),S=Math.sin(x);h=Math.sin(h*x)/S,a=Math.sin(a*x)/S,l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+v*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+v*a;const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vg=class vg{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(d_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(d_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cf.copy(this).projectOnVector(e),this.sub(cf)}reflect(e){return this.sub(cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vg.prototype.isVector3=!0;let $=vg;const cf=new $,d_=new Bo,yg=class yg{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],x=r[1],S=r[4],y=r[7],M=r[2],E=r[5],C=r[8];return s[0]=o*v+a*x+l*M,s[3]=o*m+a*S+l*E,s[6]=o*h+a*y+l*C,s[1]=c*v+u*x+f*M,s[4]=c*m+u*S+f*E,s[7]=c*h+u*y+f*C,s[2]=d*v+p*x+g*M,s[5]=d*m+p*S+g*E,s[8]=d*h+p*y+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return Mo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uf.makeScale(e,n)),this}rotate(e){return Mo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uf.makeRotation(-e)),this}translate(e,n){return Mo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yg.prototype.isMatrix3=!0;let Oe=yg;const uf=new Oe,f_=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h_=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TR(){const t={enabled:!0,workingColorSpace:Uu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=wo(r.r),r.g=wo(r.g),r.b=wo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mr?ku:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Mo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Mo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Uu]:{primaries:e,whitePoint:i,transfer:ku,toXYZ:f_,fromXYZ:h_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:f_,fromXYZ:h_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),t}const Qe=TR();function er(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function wo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Us;class AR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Us===void 0&&(Us=Ou("canvas")),Us.width=e.width,Us.height=e.height;const r=Us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Us}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ou("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=er(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(er(n[i]/255)*255):n[i]=er(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CR=0;class ag{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:CR++}),this.uuid=xl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(df(r[o].image)):s.push(df(r[o]))}else s=df(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function df(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?AR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let RR=0;const ff=new $;class dn extends Ls{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Ti,r=Ti,s=cn,o=hs,a=ui,l=Dn,c=dn.DEFAULT_ANISOTROPY,u=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RR++}),this.uuid=xl(),this.name="",this.source=new ag(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ff).x}get height(){return this.source.getSize(ff).y}get depth(){return this.source.getSize(ff).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ab)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Du:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case ep:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Du:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case ep:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Ab;dn.DEFAULT_ANISOTROPY=1;const Sg=class Sg{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,y=(p+1)/2,M=(h+1)/2,E=(u+d)/4,C=(f+v)/4,_=(g+m)/4;return S>y&&S>M?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=E/i,s=C/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=_/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=C/s,r=_/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sg.prototype.isVector4=!0;let At=Sg;class PR extends Ls{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new dn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ag(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends PR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ub extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LR extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Vu=class Vu{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ks.setFromMatrixColumn(e,0).length(),s=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NR,e,DR)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),fr.crossVectors(i,Rn),fr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),fr.crossVectors(i,Rn)),fr.normalize(),tc.crossVectors(Rn,fr),r[0]=fr.x,r[4]=tc.x,r[8]=Rn.x,r[1]=fr.y,r[5]=tc.y,r[9]=Rn.y,r[2]=fr.z,r[6]=tc.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],x=i[3],S=i[7],y=i[11],M=i[15],E=r[0],C=r[4],_=r[8],A=r[12],R=r[1],L=r[5],D=r[9],B=r[13],I=r[2],O=r[6],Y=r[10],H=r[14],V=r[3],z=r[7],G=r[11],Z=r[15];return s[0]=o*E+a*R+l*I+c*V,s[4]=o*C+a*L+l*O+c*z,s[8]=o*_+a*D+l*Y+c*G,s[12]=o*A+a*B+l*H+c*Z,s[1]=u*E+f*R+d*I+p*V,s[5]=u*C+f*L+d*O+p*z,s[9]=u*_+f*D+d*Y+p*G,s[13]=u*A+f*B+d*H+p*Z,s[2]=g*E+v*R+m*I+h*V,s[6]=g*C+v*L+m*O+h*z,s[10]=g*_+v*D+m*Y+h*G,s[14]=g*A+v*B+m*H+h*Z,s[3]=x*E+S*R+y*I+M*V,s[7]=x*C+S*L+y*O+M*z,s[11]=x*_+S*D+y*Y+M*G,s[15]=x*A+S*B+y*H+M*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15],x=l*p-c*d,S=a*p-c*f,y=a*d-l*f,M=o*p-c*u,E=o*d-l*u,C=o*f-a*u;return n*(v*x-m*S+h*y)-i*(g*x-m*M+h*E)+r*(g*S-v*M+h*C)-s*(g*y-v*E+m*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],x=n*a-i*o,S=n*l-r*o,y=n*c-s*o,M=i*l-r*a,E=i*c-s*a,C=r*c-s*l,_=u*v-f*g,A=u*m-d*g,R=u*h-p*g,L=f*m-d*v,D=f*h-p*v,B=d*h-p*m,I=x*B-S*D+y*L+M*R-E*A+C*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=(a*B-l*D+c*L)*O,e[1]=(r*D-i*B-s*L)*O,e[2]=(v*C-m*E+h*M)*O,e[3]=(d*E-f*C-p*M)*O,e[4]=(l*R-o*B-c*A)*O,e[5]=(n*B-r*R+s*A)*O,e[6]=(m*y-g*C-h*S)*O,e[7]=(u*C-d*y+p*S)*O,e[8]=(o*D-a*R+c*_)*O,e[9]=(i*R-n*D-s*_)*O,e[10]=(g*E-v*y+h*x)*O,e[11]=(f*y-u*E-p*x)*O,e[12]=(a*A-o*L-l*_)*O,e[13]=(n*L-i*A+r*_)*O,e[14]=(v*S-g*M-m*x)*O,e[15]=(u*M-f*S+d*x)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,v=o*u,m=o*f,h=a*f,x=l*c,S=l*u,y=l*f,M=i.x,E=i.y,C=i.z;return r[0]=(1-(v+h))*M,r[1]=(p+y)*M,r[2]=(g-S)*M,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(d+h))*E,r[6]=(m+x)*E,r[7]=0,r[8]=(g+S)*C,r[9]=(m-x)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ks.set(r[0],r[1],r[2]).length();const a=ks.set(r[4],r[5],r[6]).length(),l=ks.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ni.copy(this);const c=1/o,u=1/a,f=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,n.setFromRotationMatrix(ni),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ci,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===Ci)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===al)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ci,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===Ci)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===al)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Vu.prototype.isMatrix4=!0;let Rt=Vu;const ks=new $,ni=new Rt,NR=new $(0,0,0),DR=new $(1,1,1),fr=new $,tc=new $,Rn=new $,p_=new Rt,m_=new Bo;class Hr{constructor(e=0,n=0,i=0,r=Hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return p_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(p_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return m_.setFromEuler(this),this.setFromQuaternion(m_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hr.DEFAULT_ORDER="XYZ";class kb{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IR=0;const g_=new $,Os=new Bo,ki=new Rt,nc=new $,ia=new $,FR=new $,UR=new Bo,x_=new $(1,0,0),__=new $(0,1,0),v_=new $(0,0,1),y_={type:"added"},kR={type:"removed"},zs={type:"childadded",child:null},hf={type:"childremoved",child:null};class en extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IR++}),this.uuid=xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new $,n=new Hr,i=new Bo,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Oe}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(x_,e)}rotateY(e){return this.rotateOnAxis(__,e)}rotateZ(e){return this.rotateOnAxis(v_,e)}translateOnAxis(e,n){return g_.copy(e).applyQuaternion(this.quaternion),this.position.add(g_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(x_,e)}translateY(e){return this.translateOnAxis(__,e)}translateZ(e){return this.translateOnAxis(v_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?nc.copy(e):nc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(ia,nc,this.up):ki.lookAt(nc,ia,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),Os.setFromRotationMatrix(ki),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(y_),zs.child=e,this.dispatchEvent(zs),zs.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kR),hf.child=e,this.dispatchEvent(hf),hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(y_),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,FR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,UR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}en.DEFAULT_UP=new $(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class co extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OR={type:"move"};class pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(OR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new co;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ob={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},ic={h:0,s:0,l:0};function mf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=ER(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=mf(o,s,e+1/3),this.g=mf(o,s,e),this.b=mf(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=Ob[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Qe.workingToColorSpace(an.copy(this),e),Math.round(qe(an.r*255,0,255))*65536+Math.round(qe(an.g*255,0,255))*256+Math.round(qe(an.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Wn){Qe.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(ic);const i=lf(hr.h,ic.h,n),r=lf(hr.s,ic.s,n),s=lf(hr.l,ic.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Je;Je.NAMES=Ob;class zR extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hr,this.environmentIntensity=1,this.environmentRotation=new Hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ii=new $,Oi=new $,gf=new $,zi=new $,Bs=new $,Vs=new $,S_=new $,xf=new $,_f=new $,vf=new $,yf=new At,Sf=new At,bf=new At;class ci{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ii.subVectors(e,n),r.cross(ii);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ii.subVectors(r,n),Oi.subVectors(i,n),gf.subVectors(e,n);const o=ii.dot(ii),a=ii.dot(Oi),l=ii.dot(gf),c=Oi.dot(Oi),u=Oi.dot(gf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return yf.setScalar(0),Sf.setScalar(0),bf.setScalar(0),yf.fromBufferAttribute(e,n),Sf.fromBufferAttribute(e,i),bf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(yf,s.x),o.addScaledVector(Sf,s.y),o.addScaledVector(bf,s.z),o}static isFrontFacing(e,n,i,r){return ii.subVectors(i,n),Oi.subVectors(e,n),ii.cross(Oi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ii.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Bs.subVectors(r,i),Vs.subVectors(s,i),xf.subVectors(e,i);const l=Bs.dot(xf),c=Vs.dot(xf);if(l<=0&&c<=0)return n.copy(i);_f.subVectors(e,r);const u=Bs.dot(_f),f=Vs.dot(_f);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Bs,o);vf.subVectors(e,s);const p=Bs.dot(vf),g=Vs.dot(vf);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Vs,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return S_.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(S_,a);const h=1/(m+v+d);return o=v*h,a=d*h,n.copy(i).addScaledVector(Bs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _l{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rc.copy(i.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),sc.subVectors(this.max,ra),Hs.subVectors(e.a,ra),Gs.subVectors(e.b,ra),Ws.subVectors(e.c,ra),pr.subVectors(Gs,Hs),mr.subVectors(Ws,Gs),Qr.subVectors(Hs,Ws);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Qr.z,Qr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Qr.z,0,-Qr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Qr.y,Qr.x,0];return!Mf(n,Hs,Gs,Ws,sc)||(n=[1,0,0,0,1,0,0,0,1],!Mf(n,Hs,Gs,Ws,sc))?!1:(oc.crossVectors(pr,mr),n=[oc.x,oc.y,oc.z],Mf(n,Hs,Gs,Ws,sc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new $,new $,new $,new $,new $,new $,new $,new $],ri=new $,rc=new _l,Hs=new $,Gs=new $,Ws=new $,pr=new $,mr=new $,Qr=new $,ra=new $,sc=new $,oc=new $,Jr=new $;function Mf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Jr.fromArray(t,s);const a=r.x*Math.abs(Jr.x)+r.y*Math.abs(Jr.y)+r.z*Math.abs(Jr.z),l=e.dot(Jr),c=n.dot(Jr),u=i.dot(Jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zt=new $,ac=new Ze;let BR=0;class Ni extends Ls{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=yR,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ac.fromBufferAttribute(this,n),ac.applyMatrix3(e),this.setXY(n,ac.x,ac.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=na(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=na(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=na(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=na(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class zb extends Ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Bb extends Ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Kt extends Ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}const VR=new _l,sa=new $,wf=new $;class cd{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):VR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const n=sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(wf)),this.expandByPoint(sa.copy(e.center).sub(wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let HR=0;const Gn=new Rt,Ef=new en,js=new $,Pn=new _l,oa=new _l,jt=new $;class Cn extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HR++}),this.uuid=xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(SR(e)?Bb:zb)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,i){return Gn.makeTranslation(e,n,i),this.applyMatrix4(Gn),this}scale(e,n,i){return Gn.makeScale(e,n,i),this.applyMatrix4(Gn),this}lookAt(e){return Ef.lookAt(e),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Pn.min,oa.min),Pn.expandByPoint(jt),jt.addVectors(Pn.max,oa.max),Pn.expandByPoint(jt)):(Pn.expandByPoint(oa.min),Pn.expandByPoint(oa.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(e,c),jt.add(js)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ni(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new $,l[_]=new $;const c=new $,u=new $,f=new $,d=new Ze,p=new Ze,g=new Ze,v=new $,m=new $;function h(_,A,R){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,R),d.fromBufferAttribute(s,_),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,R),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[_].add(v),a[A].add(v),a[R].add(v),l[_].add(m),l[A].add(m),l[R].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,A=x.length;_<A;++_){const R=x[_],L=R.start,D=R.count;for(let B=L,I=L+D;B<I;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new $,y=new $,M=new $,E=new $;function C(_){M.fromBufferAttribute(r,_),E.copy(M);const A=a[_];S.copy(A),S.sub(M.multiplyScalar(M.dot(A))).normalize(),y.crossVectors(E,A);const L=y.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,L)}for(let _=0,A=x.length;_<A;++_){const R=x[_],L=R.start,D=R.count;for(let B=L,I=L+D;B<I;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new Ni(d,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tf=new $,GR=new $,WR=new Oe;class yr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tf.subVectors(i,n).cross(GR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Tf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||WR.getNormalMatrix(e),r=this.coplanarPoint(Tf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let jR=0;class Vo extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jR++}),this.uuid=xl(),this.name="",this.type="Material",this.blending=Fa,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_b,this.blendDst=vb,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hR,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=of,this.stencilZFail=of,this.stencilZPass=of,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new yr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vi=new $,Af=new $,lc=new $,cc=new $;class Vb{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,n),Vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Af.copy(e).add(n).multiplyScalar(.5),lc.copy(n).sub(e).normalize(),cc.copy(this.origin).sub(Af);const s=e.distanceTo(n)*.5,o=-this.direction.dot(lc),a=cc.dot(this.direction),l=-cc.dot(lc),c=cc.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Af).addScaledVector(lc,d),p}intersectSphere(e,n){if(e.radius<0)return null;Vi.subVectors(e.center,this.origin);const i=Vi.dot(this.direction),r=Vi.dot(Vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,d=e.y-o.y,p=e.z-o.z,g=n.x-o.x,v=n.y-o.y,m=n.z-o.z,h=i.x-o.x,x=i.y-o.y,S=i.z-o.z,y=Math.abs(l),M=Math.abs(c),E=Math.abs(u);let C,_,A,R,L,D,B,I,O,Y,H,V;if(y>=M&&y>=E?(A=l,D=f,O=g,V=h,l>=0?(C=c,_=u,R=d,L=p,B=v,I=m,Y=x,H=S):(C=u,_=c,R=p,L=d,B=m,I=v,Y=S,H=x)):M>=E?(A=c,D=d,O=v,V=x,c>=0?(C=u,_=l,R=p,L=f,B=m,I=g,Y=S,H=h):(C=l,_=u,R=f,L=p,B=g,I=m,Y=h,H=S)):(A=u,D=p,O=m,V=S,u>=0?(C=l,_=c,R=f,L=d,B=g,I=v,Y=h,H=x):(C=c,_=l,R=d,L=f,B=v,I=g,Y=x,H=h)),A===0)return null;const z=C/A,G=_/A,Z=1/A,ae=R-z*D,ve=L-G*D,Ue=B-z*O,Ie=I-G*O,Ne=Y-z*V,K=H-G*V,te=Ne*Ie-K*Ue,Se=ae*K-ve*Ne,Fe=Ue*ve-Ie*ae;if(r){if(te<0||Se<0||Fe<0)return null}else if((te<0||Se<0||Fe<0)&&(te>0||Se>0||Fe>0))return null;const xe=te+Se+Fe;if(xe===0)return null;const ze=Z*(te*D+Se*O+Fe*V);return(xe>0?ze<0:ze>0)?null:this.at(ze/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ls extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.combine=yb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const b_=new Rt,es=new Vb,uc=new cd,M_=new $,dc=new $,fc=new $,hc=new $,Cf=new $,pc=new $,w_=new $,mc=new $;class Xt extends en{constructor(e=new Cn,n=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Cf.fromBufferAttribute(f,e),o?pc.addScaledVector(Cf,u):pc.addScaledVector(Cf.sub(n),u))}n.add(pc)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(s),es.copy(e.ray).recast(e.near),!(uc.containsPoint(es.origin)===!1&&(es.intersectSphere(uc,M_)===null||es.origin.distanceToSquared(M_)>(e.far-e.near)**2))&&(b_.copy(s).invert(),es.copy(e.ray).applyMatrix4(b_),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,es)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,M=S;y<M;y+=3){const E=a.getX(y),C=a.getX(y+1),_=a.getX(y+2);r=gc(this,h,e,i,c,u,f,E,C,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const x=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);r=gc(this,o,e,i,c,u,f,x,S,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,M=S;y<M;y+=3){const E=y,C=y+1,_=y+2;r=gc(this,h,e,i,c,u,f,E,C,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const x=m,S=m+1,y=m+2;r=gc(this,o,e,i,c,u,f,x,S,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function XR(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ts,a),l===null)return null;mc.copy(a),mc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(mc);return c<n.near||c>n.far?null:{distance:c,point:mc.clone(),object:t}}function gc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,dc),t.getVertexPosition(l,fc),t.getVertexPosition(c,hc);const u=XR(t,e,n,i,dc,fc,hc,w_);if(u){const f=new $;ci.getBarycoord(w_,dc,fc,hc,f),r&&(u.uv=ci.getInterpolatedAttribute(r,a,l,c,f,new Ze)),s&&(u.uv1=ci.getInterpolatedAttribute(s,a,l,c,f,new Ze)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,f,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new $,materialIndex:0};ci.getNormal(dc,fc,hc,d.normal),u.face=d,u.barycoord=f}return u}class $R extends dn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Qt,u=Qt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ts=new cd,YR=new Ze(.5,.5),xc=new $;class lg{constructor(e=new yr,n=new yr,i=new yr,r=new yr,s=new yr,o=new yr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],g=s[8],v=s[9],m=s[10],h=s[11],x=s[12],S=s[13],y=s[14],M=s[15];if(r[0].setComponents(c-o,p-u,h-g,M-x).normalize(),r[1].setComponents(c+o,p+u,h+g,M+x).normalize(),r[2].setComponents(c+a,p+f,h+v,M+S).normalize(),r[3].setComponents(c-a,p-f,h-v,M-S).normalize(),i)r[4].setComponents(l,d,m,y).normalize(),r[5].setComponents(c-l,p-d,h-m,M-y).normalize();else if(r[4].setComponents(c-l,p-d,h-m,M-y).normalize(),n===Ci)r[5].setComponents(c+l,p+d,h+m,M+y).normalize();else if(n===al)r[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const n=YR.distanceTo(e.center);return ts.radius=.7071067811865476+n,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xc.x=r.normal.x>0?e.max.x:e.min.x,xc.y=r.normal.y>0?e.max.y:e.min.y,xc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hb extends Vo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const E_=new Rt,Dp=new Vb,_c=new cd,vc=new $;class qR extends en{constructor(e=new Cn,n=new Hb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(r),_c.radius+=s,e.ray.intersectsSphere(_c)===!1)return;E_.copy(r).invert(),Dp.copy(e.ray).applyMatrix4(E_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);vc.fromBufferAttribute(f,m),T_(vc,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,v=p;g<v;g++)vc.fromBufferAttribute(f,g),T_(vc,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function T_(t,e,n,i,r,s,o){const a=Dp.distanceSqToPoint(t);if(a<n){const l=new $;Dp.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Gb extends dn{constructor(e=[],n=As,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KR extends dn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ll extends dn{constructor(e,n,i=Di,r,s,o,a=Qt,l=Qt,c,u=sr,f=1){if(u!==sr&&u!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ag(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class ZR extends ll{constructor(e,n=Di,i=As,r,s,o=Qt,a=Qt,l,c=sr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wb extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends Cn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2));function g(v,m,h,x,S,y,M,E,C,_,A){const R=y/C,L=M/_,D=y/2,B=M/2,I=E/2,O=C+1,Y=_+1;let H=0,V=0;const z=new $;for(let G=0;G<Y;G++){const Z=G*L-B;for(let ae=0;ae<O;ae++){const ve=ae*R-D;z[v]=ve*x,z[m]=Z*S,z[h]=I,c.push(z.x,z.y,z.z),z[v]=0,z[m]=0,z[h]=E>0?1:-1,u.push(z.x,z.y,z.z),f.push(ae/C),f.push(1-G/_),H+=1}}for(let G=0;G<_;G++)for(let Z=0;Z<C;Z++){const ae=d+Z+O*G,ve=d+Z+O*(G+1),Ue=d+(Z+1)+O*(G+1),Ie=d+(Z+1)+O*G;l.push(ae,ve,Ie),l.push(ve,Ue,Ie),V+=6}a.addGroup(p,V,A),p+=V,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cg extends Cn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let g=0;const v=[],m=i/2;let h=0;x(),o===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Kt(f,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(p,2));function x(){const y=new $,M=new $;let E=0;const C=(n-e)/i;for(let _=0;_<=s;_++){const A=[],R=_/s,L=R*(n-e)+e;for(let D=0;D<=r;D++){const B=D/r,I=B*l+a,O=Math.sin(I),Y=Math.cos(I);M.x=L*O,M.y=-R*i+m,M.z=L*Y,f.push(M.x,M.y,M.z),y.set(O,C,Y).normalize(),d.push(y.x,y.y,y.z),p.push(B,1-R),A.push(g++)}v.push(A)}for(let _=0;_<r;_++)for(let A=0;A<s;A++){const R=v[A][_],L=v[A+1][_],D=v[A+1][_+1],B=v[A][_+1];(e>0||A!==0)&&(u.push(R,L,B),E+=3),(n>0||A!==s-1)&&(u.push(L,D,B),E+=3)}c.addGroup(h,E,0),h+=E}function S(y){const M=g,E=new Ze,C=new $;let _=0;const A=y===!0?e:n,R=y===!0?1:-1;for(let D=1;D<=r;D++)f.push(0,m*R,0),d.push(0,R,0),p.push(.5,.5),g++;const L=g;for(let D=0;D<=r;D++){const I=D/r*l+a,O=Math.cos(I),Y=Math.sin(I);C.x=A*Y,C.y=m*R,C.z=A*O,f.push(C.x,C.y,C.z),d.push(0,R,0),E.x=O*.5+.5,E.y=Y*.5*R+.5,p.push(E.x,E.y),g++}for(let D=0;D<r;D++){const B=M+D,I=L+D;y===!0?u.push(I,I+1,B):u.push(I+1,I,B),_+=3}c.addGroup(h,_,y===!0?1:2),h+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cg(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ug extends cg{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ug(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ud extends Cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const x=h*d-o;for(let S=0;S<c;S++){const y=S*f-s;g.push(y,-x,0),v.push(0,0,1),m.push(S/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const S=x+c*h,y=x+c*(h+1),M=x+1+c*(h+1),E=x+1+c*h;p.push(S,y,E),p.push(y,M,E)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ud(e.width,e.height,e.widthSegments,e.heightSegments)}}class dg extends Cn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const d=(n-e)/r,p=new $,g=new Ze;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const h=s+m/i*o;p.x=f*Math.cos(h),p.y=f*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,u.push(g.x,g.y)}f+=d}for(let v=0;v<r;v++){const m=v*(i+1);for(let h=0;h<i;h++){const x=h+m,S=x,y=x+i+1,M=x+i+2,E=x+1;a.push(S,y,E),a.push(y,M,E)}}this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dg(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class uo extends Cn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new $,d=new $,p=[],g=[],v=[],m=[];for(let h=0;h<=i;h++){const x=[],S=h/i,y=o+S*a,M=e*Math.cos(y),E=Math.sqrt(e*e-M*M);let C=0;h===0&&o===0?C=.5/n:h===i&&l===Math.PI&&(C=-.5/n);for(let _=0;_<=n;_++){const A=_/n,R=r+A*s;f.x=-E*Math.cos(R),f.y=M,f.z=E*Math.sin(R),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(A+C,1-S),x.push(c++)}u.push(x)}for(let h=0;h<i;h++)for(let x=0;x<n;x++){const S=u[h][x+1],y=u[h][x],M=u[h+1][x],E=u[h+1][x+1];(h!==0||o>0)&&p.push(S,y,E),(h!==i-1||l<Math.PI)&&p.push(y,M,E)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(A_(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(A_(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function mn(t){const e={};for(let n=0;n<t.length;n++){const i=Uo(t[n]);for(const r in i)e[r]=i[r]}return e}function A_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function QR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function jb(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const JR={clone:Uo,merge:mn};var eP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eP,this.fragmentShader=tP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=QR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[i].value=new $().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Rt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class nP extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rf extends Vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lp,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iP extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rP extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xb extends en{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Pf=new Rt,C_=new $,R_=new $;class sP{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lg,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;C_.setFromMatrixPosition(e.matrixWorld),n.position.copy(C_),R_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(R_),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Pf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Pf,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===al||e.reversedDepth?n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),n.multiply(Pf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yc=new $,Sc=new Bo,vi=new $;class $b extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yc,Sc,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yc,Sc,vi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(yc,Sc,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yc,Sc,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gr=new $,P_=new Ze,L_=new Ze;class $n extends $b{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Np*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(af*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Np*2*Math.atan(Math.tan(af*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,P_,L_),n.subVectors(L_,P_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(af*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class fg extends $b{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class oP extends sP{constructor(){super(new fg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class N_ extends Xb{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new oP}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class aP extends Xb{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xs=-90,$s=1;class lP extends en{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $n(Xs,$s,e,n);r.layers=this.layers,this.add(r);const s=new $n(Xs,$s,e,n);s.layers=this.layers,this.add(s);const o=new $n(Xs,$s,e,n);o.layers=this.layers,this.add(o);const a=new $n(Xs,$s,e,n);a.layers=this.layers,this.add(a);const l=new $n(Xs,$s,e,n);l.layers=this.layers,this.add(l);const c=new $n(Xs,$s,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class cP extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uP{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const bg=class bg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};bg.prototype.isMatrix2=!0;let D_=bg;function I_(t,e,n,i){const r=dP(i);switch(n){case Nb:return t*e;case Ib:return t*e/r.components*r.byteLength;case ng:return t*e/r.components*r.byteLength;case Cs:return t*e*2/r.components*r.byteLength;case ig:return t*e*2/r.components*r.byteLength;case Db:return t*e*3/r.components*r.byteLength;case ui:return t*e*4/r.components*r.byteLength;case rg:return t*e*4/r.components*r.byteLength;case Wc:case jc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xc:case $c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case np:case rp:return Math.max(t,16)*Math.max(e,8)/4;case tp:case ip:return Math.max(t,8)*Math.max(e,8)/2;case sp:case op:case lp:case cp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ap:case Iu:case up:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case hp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case pp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case mp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _p:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case vp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case bp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case wp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ep:case Tp:case Ap:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Cp:case Rp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fu:case Pp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dP(t){switch(t){case Dn:case Cb:return{byteLength:1,components:1};case sl:case Rb:case Ii:return{byteLength:2,components:1};case eg:case tg:return{byteLength:2,components:4};case Di:case Jm:case Ai:return{byteLength:4,components:1};case Pb:case Lb:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zm}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yb(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function fP(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var hP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_P=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,UP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,zP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GP="gl_FragColor = linearToOutputTexel( gl_FragColor );",WP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,XP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$P=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,s3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,o3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,g3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,P3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,U3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,G3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,K3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,J3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_L=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,SL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ML=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:hP,alphahash_pars_fragment:pP,alphamap_fragment:mP,alphamap_pars_fragment:gP,alphatest_fragment:xP,alphatest_pars_fragment:_P,aomap_fragment:vP,aomap_pars_fragment:yP,batching_pars_vertex:SP,batching_vertex:bP,begin_vertex:MP,beginnormal_vertex:wP,bsdfs:EP,iridescence_fragment:TP,bumpmap_pars_fragment:AP,clipping_planes_fragment:CP,clipping_planes_pars_fragment:RP,clipping_planes_pars_vertex:PP,clipping_planes_vertex:LP,color_fragment:NP,color_pars_fragment:DP,color_pars_vertex:IP,color_vertex:FP,common:UP,cube_uv_reflection_fragment:kP,defaultnormal_vertex:OP,displacementmap_pars_vertex:zP,displacementmap_vertex:BP,emissivemap_fragment:VP,emissivemap_pars_fragment:HP,colorspace_fragment:GP,colorspace_pars_fragment:WP,envmap_fragment:jP,envmap_common_pars_fragment:XP,envmap_pars_fragment:$P,envmap_pars_vertex:YP,envmap_physical_pars_fragment:s3,envmap_vertex:qP,fog_vertex:KP,fog_pars_vertex:ZP,fog_fragment:QP,fog_pars_fragment:JP,gradientmap_pars_fragment:e3,lightmap_pars_fragment:t3,lights_lambert_fragment:n3,lights_lambert_pars_fragment:i3,lights_pars_begin:r3,lights_toon_fragment:o3,lights_toon_pars_fragment:a3,lights_phong_fragment:l3,lights_phong_pars_fragment:c3,lights_physical_fragment:u3,lights_physical_pars_fragment:d3,lights_fragment_begin:f3,lights_fragment_maps:h3,lights_fragment_end:p3,lightprobes_pars_fragment:m3,logdepthbuf_fragment:g3,logdepthbuf_pars_fragment:x3,logdepthbuf_pars_vertex:_3,logdepthbuf_vertex:v3,map_fragment:y3,map_pars_fragment:S3,map_particle_fragment:b3,map_particle_pars_fragment:M3,metalnessmap_fragment:w3,metalnessmap_pars_fragment:E3,morphinstance_vertex:T3,morphcolor_vertex:A3,morphnormal_vertex:C3,morphtarget_pars_vertex:R3,morphtarget_vertex:P3,normal_fragment_begin:L3,normal_fragment_maps:N3,normal_pars_fragment:D3,normal_pars_vertex:I3,normal_vertex:F3,normalmap_pars_fragment:U3,clearcoat_normal_fragment_begin:k3,clearcoat_normal_fragment_maps:O3,clearcoat_pars_fragment:z3,iridescence_pars_fragment:B3,opaque_fragment:V3,packing:H3,premultiplied_alpha_fragment:G3,project_vertex:W3,dithering_fragment:j3,dithering_pars_fragment:X3,roughnessmap_fragment:$3,roughnessmap_pars_fragment:Y3,shadowmap_pars_fragment:q3,shadowmap_pars_vertex:K3,shadowmap_vertex:Z3,shadowmask_pars_fragment:Q3,skinbase_vertex:J3,skinning_pars_vertex:eL,skinning_vertex:tL,skinnormal_vertex:nL,specularmap_fragment:iL,specularmap_pars_fragment:rL,tonemapping_fragment:sL,tonemapping_pars_fragment:oL,transmission_fragment:aL,transmission_pars_fragment:lL,uv_pars_fragment:cL,uv_pars_vertex:uL,uv_vertex:dL,worldpos_vertex:fL,background_vert:hL,background_frag:pL,backgroundCube_vert:mL,backgroundCube_frag:gL,cube_vert:xL,cube_frag:_L,depth_vert:vL,depth_frag:yL,distance_vert:SL,distance_frag:bL,equirect_vert:ML,equirect_frag:wL,linedashed_vert:EL,linedashed_frag:TL,meshbasic_vert:AL,meshbasic_frag:CL,meshlambert_vert:RL,meshlambert_frag:PL,meshmatcap_vert:LL,meshmatcap_frag:NL,meshnormal_vert:DL,meshnormal_frag:IL,meshphong_vert:FL,meshphong_frag:UL,meshphysical_vert:kL,meshphysical_frag:OL,meshtoon_vert:zL,meshtoon_frag:BL,points_vert:VL,points_frag:HL,shadow_vert:GL,shadow_frag:WL,sprite_vert:jL,sprite_frag:XL},me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},wi={basic:{uniforms:mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:mn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:mn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:mn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:mn([me.points,me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:mn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:mn([me.common,me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:mn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:mn([me.sprite,me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:mn([me.common,me.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:mn([me.lights,me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};wi.physical={uniforms:mn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const bc={r:0,b:0,g:0},$L=new Rt,qb=new Oe;qb.set(-1,0,0,0,1,0,0,0,1);function YL(t,e,n,i,r,s){const o=new Je(0);let a=r===!0?0:1,l,c,u=null,f=0,d=null;function p(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){const y=x.backgroundBlurriness>0;S=e.get(S,y)}return S}function g(x){let S=!1;const y=p(x);y===null?m(o,a):y&&y.isColor&&(m(y,1),S=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(x,S){const y=p(S);y&&(y.isCubeTexture||y.mapping===ld)?(c===void 0&&(c=new Xt(new Or(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Uo(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($L.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qb),c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ut,(u!==y||f!==y.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Xt(new ud(2,2),new Fi({name:"BackgroundMaterial",uniforms:Uo(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,S){x.getRGB(bc,jb(t)),n.buffers.color.setClear(bc.r,bc.g,bc.b,S,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:g,addToRenderList:v,dispose:h}}function qL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(L,D,B,I,O){let Y=!1;const H=f(L,I,B,D);s!==H&&(s=H,c(s.object)),Y=p(L,I,B,O),Y&&g(L,I,B,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(L,D,B,I),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function u(L){return t.deleteVertexArray(L)}function f(L,D,B,I){const O=I.wireframe===!0;let Y=i[D.id];Y===void 0&&(Y={},i[D.id]=Y);const H=L.isInstancedMesh===!0?L.id:0;let V=Y[H];V===void 0&&(V={},Y[H]=V);let z=V[B.id];z===void 0&&(z={},V[B.id]=z);let G=z[O];return G===void 0&&(G=d(l()),z[O]=G),G}function d(L){const D=[],B=[],I=[];for(let O=0;O<n;O++)D[O]=0,B[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:I,object:L,attributes:{},index:null}}function p(L,D,B,I){const O=s.attributes,Y=D.attributes;let H=0;const V=B.getAttributes();for(const z in V)if(V[z].location>=0){const Z=O[z];let ae=Y[z];if(ae===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;H++}return s.attributesNum!==H||s.index!==I}function g(L,D,B,I){const O={},Y=D.attributes;let H=0;const V=B.getAttributes();for(const z in V)if(V[z].location>=0){let Z=Y[z];Z===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),O[z]=ae,H++}s.attributes=O,s.attributesNum=H,s.index=I}function v(){const L=s.newAttributes;for(let D=0,B=L.length;D<B;D++)L[D]=0}function m(L){h(L,0)}function h(L,D){const B=s.newAttributes,I=s.enabledAttributes,O=s.attributeDivisors;B[L]=1,I[L]===0&&(t.enableVertexAttribArray(L),I[L]=1),O[L]!==D&&(t.vertexAttribDivisor(L,D),O[L]=D)}function x(){const L=s.newAttributes,D=s.enabledAttributes;for(let B=0,I=D.length;B<I;B++)D[B]!==L[B]&&(t.disableVertexAttribArray(B),D[B]=0)}function S(L,D,B,I,O,Y,H){H===!0?t.vertexAttribIPointer(L,D,B,O,Y):t.vertexAttribPointer(L,D,B,I,O,Y)}function y(L,D,B,I){v();const O=I.attributes,Y=B.getAttributes(),H=D.defaultAttributeValues;for(const V in Y){const z=Y[V];if(z.location>=0){let G=O[V];if(G===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){const Z=G.normalized,ae=G.itemSize,ve=e.get(G);if(ve===void 0)continue;const Ue=ve.buffer,Ie=ve.type,Ne=ve.bytesPerElement,K=Ie===t.INT||Ie===t.UNSIGNED_INT||G.gpuType===Jm;if(G.isInterleavedBufferAttribute){const te=G.data,Se=te.stride,Fe=G.offset;if(te.isInstancedInterleavedBuffer){for(let xe=0;xe<z.locationSize;xe++)h(z.location+xe,te.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<z.locationSize;xe++)m(z.location+xe);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let xe=0;xe<z.locationSize;xe++)S(z.location+xe,ae/z.locationSize,Ie,Z,Se*Ne,(Fe+ae/z.locationSize*xe)*Ne,K)}else{if(G.isInstancedBufferAttribute){for(let te=0;te<z.locationSize;te++)h(z.location+te,G.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let te=0;te<z.locationSize;te++)m(z.location+te);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let te=0;te<z.locationSize;te++)S(z.location+te,ae/z.locationSize,Ie,Z,ae*Ne,ae/z.locationSize*te*Ne,K)}}else if(H!==void 0){const Z=H[V];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(z.location,Z);break;case 3:t.vertexAttrib3fv(z.location,Z);break;case 4:t.vertexAttrib4fv(z.location,Z);break;default:t.vertexAttrib1fv(z.location,Z)}}}}x()}function M(){A();for(const L in i){const D=i[L];for(const B in D){const I=D[B];for(const O in I){const Y=I[O];for(const H in Y)u(Y[H].object),delete Y[H];delete I[O]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;const D=i[L.id];for(const B in D){const I=D[B];for(const O in I){const Y=I[O];for(const H in Y)u(Y[H].object),delete Y[H];delete I[O]}}delete i[L.id]}function C(L){for(const D in i){const B=i[D];for(const I in B){const O=B[I];if(O[L.id]===void 0)continue;const Y=O[L.id];for(const H in Y)u(Y[H].object),delete Y[H];delete O[L.id]}}}function _(L){for(const D in i){const B=i[D],I=L.isInstancedMesh===!0?L.id:0,O=B[I];if(O!==void 0){for(const Y in O){const H=O[Y];for(const V in H)u(H[V].object),delete H[V];delete O[Y]}delete B[I],Object.keys(B).length===0&&delete i[D]}}}function A(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function KL(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function ZL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==ui&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const _=C===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Dn&&C!==Ai&&!_&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,maxSamples:M,samples:E}}function QL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new yr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,S=x*4;let y=h.clippingState||null;l.value=y,y=u(g,d,S,p);for(let M=0;M!==S;++M)y[M]=n[M];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,y=p;S!==v;++S,y+=4)o.copy(f[S]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const fo=4,JL=6,eN=20,tN=256,aa=new fg,F_=new Je;let Lf=null,Nf=0,Df=0,If=!1;const nN=new $,ns=new $;class U_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=nN}=s;Lf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lf,Nf,Df),this._renderer.xr.enabled=If,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===As||e.mapping===Fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ii,format:ui,colorSpace:Uu,depthBuffer:!1},r=k_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=iN(s)),this._blurMaterial=sN(s,e,n),this._ggxMaterial=rN(s,e,n)}return r}_compileMaterial(e){const n=new Xt(new Cn,e);this._renderer.compile(n,aa)}_sceneToCubeUV(e,n,i,r,s){const l=new $n(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(F_),f.toneMapping=Li,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new Or,new ls({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let h=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,h=!0):(m.color.copy(F_),h=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const M=this._cubeSize;Ys(r,y*M,S>2?M:0,M,M),f.setRenderTarget(r),h&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===As||e.mapping===Fo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ys(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,aa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=c*1.25,p=f*d,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-fo?i-g+fo:0),h=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Ys(s,m,h,3*v,2*v),r.setRenderTarget(s),r.render(a,aa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ys(e,m,h,3*v,2*v),r.setRenderTarget(e),r.render(a,aa)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-fo?r-this._lodMax+fo:0),d=4*(this._cubeSize-u);Ys(n,f,d,3*u,2*u),o.setRenderTarget(n),o.render(l,aa)}}function iN(t){const e=[],n=[];let i=t;const r=t-fo+1+JL;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,d=6,p=3,g=new Float32Array(p*d*f),v=new Float32Array(p*d*f);for(let h=0;h<f;h++){const x=h%3*2/3-1,S=h>2?0:-1,y=[x,S,0,x+2/3,S,0,x+2/3,S+1,0,x,S,0,x+2/3,S+1,0,x,S+1,0];g.set(y,p*d*h);for(let M=0;M<d;M++){const E=u[M*2]*2-1,C=u[M*2+1]*2-1;h===0?ns.set(1,C,E):h===1?ns.set(-E,1,-C):h===2?ns.set(-E,C,1):h===3?ns.set(-1,C,-E):h===4?ns.set(-E,-1,C):ns.set(E,C,-1),ns.toArray(v,(h*d+M)*p)}}const m=new Cn;m.setAttribute("position",new Ni(g,p)),m.setAttribute("outputDirection",new Ni(v,p)),n.push(new Xt(m,null)),i>fo&&i--}return{lodMeshes:n,sizeLods:e}}function k_(t,e,n){const i=new hi(t,e,n);return i.texture.mapping=ld,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ys(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function rN(t,e,n){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function sN(t,e,n){return new Fi({name:"SphericalGaussianBlur",defines:{SAMPLES:eN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function O_(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function z_(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function dd(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Kb extends hi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gb(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Or(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:Uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ji});s.uniforms.tEquirect.value=n;const o=new Xt(r,s),a=n.minFilter;return n.minFilter===hs&&(n.minFilter=cn),new lP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function oN(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===nf||p===rf)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new Kb(g.height);return v.fromEquirectangularTexture(t,d),e.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,g=p===nf||p===rf,v=p===As||p===Fo;if(g||v){let m=n.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new U_(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const x=d.image;return g&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new U_(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,p){return p===nf?d.mapping=As:p===rf&&(d.mapping=Fo),d}function l(d){let p=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function aN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Mo("WebGLRenderer: "+i+" extension not supported."),r}}}function lN(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(p!==null){const x=p.array;v=p.version;for(let S=0,y=x.length;S<y;S+=3){const M=x[S+0],E=x[S+1],C=x[S+2];d.push(M,E,E,C,C,M)}}else{const x=g.array;v=g.version;for(let S=0,y=x.length/3-1;S<y;S+=3){const M=S+0,E=S+1,C=S+2;d.push(M,E,E,C,C,M)}}const m=new(g.count>=65535?Bb:zb)(d,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function cN(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*o),n.update(d,i,1)}function c(f,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,f*o,p),n.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let v=0;for(let m=0;m<p;m++)v+=d[m];n.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function uN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function dN(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let R=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var p=R;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let M=a.attributes.position.count*y,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const C=new Float32Array(M*E*4*f),_=new Ub(C,M,E,f);_.type=Ai,_.needsUpdate=!0;const A=y*4;for(let L=0;L<f;L++){const D=h[L],B=x[L],I=S[L],O=M*E*4*L;for(let Y=0;Y<D.count;Y++){const H=Y*A;g===!0&&(r.fromBufferAttribute(D,Y),C[O+H+0]=r.x,C[O+H+1]=r.y,C[O+H+2]=r.z,C[O+H+3]=0),v===!0&&(r.fromBufferAttribute(B,Y),C[O+H+4]=r.x,C[O+H+5]=r.y,C[O+H+6]=r.z,C[O+H+7]=0),m===!0&&(r.fromBufferAttribute(I,Y),C[O+H+8]=r.x,C[O+H+9]=r.y,C[O+H+10]=r.z,C[O+H+11]=I.itemSize===4?r.w:1)}}d={count:f,texture:_,size:new Ze(M,E)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function fN(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const hN={[Sb]:"LINEAR_TONE_MAPPING",[bb]:"REINHARD_TONE_MAPPING",[Mb]:"CINEON_TONE_MAPPING",[Qm]:"ACES_FILMIC_TONE_MAPPING",[Eb]:"AGX_TONE_MAPPING",[Tb]:"NEUTRAL_TONE_MAPPING",[wb]:"CUSTOM_TONE_MAPPING"};function pN(t,e,n,i,r,s){const o=new hi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Cn;c.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const u=new nP({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Xt(c,u),d=new fg(-1,1,1,-1,0,1);let p=null,g=null,v=!1,m,h=null,x=[],S=!1;this.setSize=function(y,M){o.setSize(y,M),a!==null&&a.setSize(y,M),l!==null&&l.setSize(y,M);for(let E=0;E<x.length;E++){const C=x[E];C.setSize&&C.setSize(y,M)}},this.setEffects=function(y){x=y,S=x.length>0&&x[0].isRenderPass===!0;const M=o.width,E=o.height;x.length>0&&a===null&&(a=new hi(M,E,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new hi(M,E,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<x.length;C++){const _=x[C];_.setSize&&_.setSize(M,E)}},this.begin=function(y,M){if(v||y.toneMapping===Li&&x.length===0)return!1;if(h=M,M!==null){const E=M.width,C=M.height;(o.width!==E||o.height!==C)&&this.setSize(E,C)}return S===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Li,!0},this.hasRenderPass=function(){return S},this.end=function(y,M){y.toneMapping=m,v=!0;let E=o,C=a;for(let _=0;_<x.length;_++){const A=x[_];A.enabled!==!1&&(A.render(y,C,E,M),A.needsSwap!==!1&&(E=C,C=C===a?l:a))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,u.defines={},Qe.getTransfer(p)===ut&&(u.defines.SRGB_TRANSFER="");const _=hN[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(h),y.render(f,d),h=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Zb=new dn,Ip=new ll(1,1),Qb=new Ub,Jb=new LR,eM=new Gb,B_=[],V_=[],H_=new Float32Array(16),G_=new Float32Array(9),W_=new Float32Array(4);function Ho(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=B_[r];if(s===void 0&&(s=new Float32Array(r),B_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fd(t,e){let n=V_[e];n===void 0&&(n=new Int32Array(e),V_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function mN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function gN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function xN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function _N(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function vN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;W_.set(i),t.uniformMatrix2fv(this.addr,!1,W_),Wt(n,i)}}function yN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;G_.set(i),t.uniformMatrix3fv(this.addr,!1,G_),Wt(n,i)}}function SN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;H_.set(i),t.uniformMatrix4fv(this.addr,!1,H_),Wt(n,i)}}function bN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function MN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function wN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function EN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function TN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function AN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function CN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function RN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function PN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ip.compareFunction=n.isReversedDepthBuffer()?og:sg,s=Ip):s=Zb,n.setTexture2D(e||s,r)}function LN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Jb,r)}function NN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||eM,r)}function DN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Qb,r)}function IN(t){switch(t){case 5126:return mN;case 35664:return gN;case 35665:return xN;case 35666:return _N;case 35674:return vN;case 35675:return yN;case 35676:return SN;case 5124:case 35670:return bN;case 35667:case 35671:return MN;case 35668:case 35672:return wN;case 35669:case 35673:return EN;case 5125:return TN;case 36294:return AN;case 36295:return CN;case 36296:return RN;case 35678:case 36198:case 36298:case 36306:case 35682:return PN;case 35679:case 36299:case 36307:return LN;case 35680:case 36300:case 36308:case 36293:return NN;case 36289:case 36303:case 36311:case 36292:return DN}}function FN(t,e){t.uniform1fv(this.addr,e)}function UN(t,e){const n=Ho(e,this.size,2);t.uniform2fv(this.addr,n)}function kN(t,e){const n=Ho(e,this.size,3);t.uniform3fv(this.addr,n)}function ON(t,e){const n=Ho(e,this.size,4);t.uniform4fv(this.addr,n)}function zN(t,e){const n=Ho(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function BN(t,e){const n=Ho(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function VN(t,e){const n=Ho(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function HN(t,e){t.uniform1iv(this.addr,e)}function GN(t,e){t.uniform2iv(this.addr,e)}function WN(t,e){t.uniform3iv(this.addr,e)}function jN(t,e){t.uniform4iv(this.addr,e)}function XN(t,e){t.uniform1uiv(this.addr,e)}function $N(t,e){t.uniform2uiv(this.addr,e)}function YN(t,e){t.uniform3uiv(this.addr,e)}function qN(t,e){t.uniform4uiv(this.addr,e)}function KN(t,e,n){const i=this.cache,r=e.length,s=fd(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Ip:o=Zb;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function ZN(t,e,n){const i=this.cache,r=e.length,s=fd(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Jb,s[o])}function QN(t,e,n){const i=this.cache,r=e.length,s=fd(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||eM,s[o])}function JN(t,e,n){const i=this.cache,r=e.length,s=fd(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Qb,s[o])}function eD(t){switch(t){case 5126:return FN;case 35664:return UN;case 35665:return kN;case 35666:return ON;case 35674:return zN;case 35675:return BN;case 35676:return VN;case 5124:case 35670:return HN;case 35667:case 35671:return GN;case 35668:case 35672:return WN;case 35669:case 35673:return jN;case 5125:return XN;case 36294:return $N;case 36295:return YN;case 36296:return qN;case 35678:case 36198:case 36298:case 36306:case 35682:return KN;case 35679:case 36299:case 36307:return ZN;case 35680:case 36300:case 36308:case 36293:return QN;case 36289:case 36303:case 36311:case 36292:return JN}}class tD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=IN(n.type)}}class nD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eD(n.type)}}class iD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ff=/(\w+)(\])?(\[|\.)?/g;function j_(t,e){t.seq.push(e),t.map[e.id]=e}function rD(t,e,n){const i=t.name,r=i.length;for(Ff.lastIndex=0;;){const s=Ff.exec(i),o=Ff.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){j_(n,c===void 0?new tD(a,t,e):new nD(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new iD(a),j_(n,f)),n=f}}}class Yc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);rD(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function X_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const sD=37297;let oD=0;function aD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const $_=new Oe;function lD(t){Qe._getMatrix($_,Qe.workingColorSpace,t);const e=`mat3( ${$_.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case ku:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Y_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+aD(t.getShaderSource(e),a)}else return s}function cD(t,e){const n=lD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const uD={[Sb]:"Linear",[bb]:"Reinhard",[Mb]:"Cineon",[Qm]:"ACESFilmic",[Eb]:"AgX",[Tb]:"Neutral",[wb]:"Custom"};function dD(t,e){const n=uD[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Mc=new $;function fD(){Qe.getLuminanceCoefficients(Mc);const t=Mc.x.toFixed(4),e=Mc.y.toFixed(4),n=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function pD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function _a(t){return t!==""}function q_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function K_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fp(t){return t.replace(gD,_D)}const xD=new Map;function _D(t,e){let n=$e[e];if(n===void 0){const i=xD.get(e);if(i!==void 0)n=$e[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fp(n)}const vD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(t){return t.replace(vD,yD)}function yD(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Q_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const SD={[Gc]:"SHADOWMAP_TYPE_PCF",[xa]:"SHADOWMAP_TYPE_VSM"};function bD(t){return SD[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MD={[As]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE",[ld]:"ENVMAP_TYPE_CUBE_UV"};function wD(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":MD[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const ED={[Fo]:"ENVMAP_MODE_REFRACTION"};function TD(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":ED[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const AD={[yb]:"ENVMAP_BLENDING_MULTIPLY",[lR]:"ENVMAP_BLENDING_MIX",[cR]:"ENVMAP_BLENDING_ADD"};function CD(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":AD[t.combine]||"ENVMAP_BLENDING_NONE"}function RD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function PD(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=bD(n),c=wD(n),u=TD(n),f=CD(n),d=RD(n),p=hD(n),g=pD(s),v=r.createProgram();let m,h,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(_a).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(_a).join(`
`),h.length>0&&(h+=`
`)):(m=[Q_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),h=[Q_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?$e.tonemapping_pars_fragment:"",n.toneMapping!==Li?dD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,cD("linearToOutputTexel",n.outputColorSpace),fD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_a).join(`
`)),o=Fp(o),o=q_(o,n),o=K_(o,n),a=Fp(a),a=q_(a,n),a=K_(a,n),o=Z_(o),a=Z_(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===l_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===l_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=x+m+o,y=x+h+a,M=X_(r,r.VERTEX_SHADER,S),E=X_(r,r.FRAGMENT_SHADER,y);r.attachShader(v,M),r.attachShader(v,E),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(L){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(v)||"",B=r.getShaderInfoLog(M)||"",I=r.getShaderInfoLog(E)||"",O=D.trim(),Y=B.trim(),H=I.trim();let V=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,M,E);else{const G=Y_(r,M,"vertex"),Z=Y_(r,E,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+G+`
`+Z)}else O!==""?ke("WebGLProgram: Program Info Log:",O):(Y===""||H==="")&&(z=!1);z&&(L.diagnostics={runnable:V,programLog:O,vertexShader:{log:Y,prefix:m},fragmentShader:{log:H,prefix:h}})}r.deleteShader(M),r.deleteShader(E),_=new Yc(r,v),A=mD(r,v)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,sD)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oD++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=E,this}let LD=0;class ND{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new DD(e),n.set(e,i)),i}}class DD{constructor(e){this.id=LD++,this.code=e,this.usedTimes=0}}function ID(t){return t===Cs||t===Iu||t===Fu}function FD(t,e,n,i,r,s){const o=new kb,a=new ND,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,A,R,L,D,B){const I=L.fog,O=D.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||Y,H),z=V&&V.mapping===ld?V.image.height:null,G=p[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=Z!==void 0?Z.length:0;let ve=0;O.morphAttributes.position!==void 0&&(ve=1),O.morphAttributes.normal!==void 0&&(ve=2),O.morphAttributes.color!==void 0&&(ve=3);let Ue,Ie,Ne,K;if(G){const xt=wi[G];Ue=xt.vertexShader,Ie=xt.fragmentShader}else{Ue=_.vertexShader,Ie=_.fragmentShader;const xt=a.getVertexShaderStage(_),lt=a.getFragmentShaderStage(_);a.update(_,xt,lt),Ne=xt.id,K=lt.id}const te=t.getRenderTarget(),Se=t.state.buffers.depth.getReversed(),Fe=D.isInstancedMesh===!0,xe=D.isBatchedMesh===!0,ze=!!_.map,st=!!_.matcap,Be=!!V,Ve=!!_.aoMap,ot=!!_.lightMap,He=!!_.bumpMap&&_.wireframe===!1,at=!!_.normalMap,wt=!!_.displacementMap,kt=!!_.emissiveMap,ht=!!_.metalnessMap,re=!!_.roughnessMap,N=_.anisotropy>0,it=_.clearcoat>0,We=_.dispersion>0,P=_.retroreflectivity>0,b=_.iridescence>0,k=_.sheen>0,W=_.transmission>0,Q=N&&!!_.anisotropyMap,le=it&&!!_.clearcoatMap,ce=it&&!!_.clearcoatNormalMap,J=it&&!!_.clearcoatRoughnessMap,ne=b&&!!_.iridescenceMap,ue=b&&!!_.iridescenceThicknessMap,Re=k&&!!_.sheenColorMap,pe=k&&!!_.sheenRoughnessMap,de=!!_.specularMap,Pe=!!_.specularColorMap,De=!!_.specularIntensityMap,Ge=W&&!!_.transmissionMap,U=W&&!!_.thicknessMap,fe=!!_.gradientMap,ee=!!_.alphaMap,he=_.alphaTest>0,ye=!!_.alphaHash,ie=!!_.extensions;let Le=Li;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=t.toneMapping);const Ae={shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:Ie,defines:_.defines,customVertexShaderID:Ne,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:xe,batchingColor:xe&&D._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&D.instanceColor!==null,instancingMorph:Fe&&D.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:st,envMap:Be,envMapMode:Be&&V.mapping,envMapCubeUVHeight:z,aoMap:Ve,lightMap:ot,bumpMap:He,normalMap:at,displacementMap:wt,emissiveMap:kt,normalMapObjectSpace:at&&_.normalMapType===fR,normalMapTangentSpace:at&&_.normalMapType===Lp,packedNormalMap:at&&_.normalMapType===Lp&&ID(_.normalMap.format),metalnessMap:ht,roughnessMap:re,anisotropy:N,anisotropyMap:Q,clearcoat:it,clearcoatMap:le,clearcoatNormalMap:ce,clearcoatRoughnessMap:J,dispersion:We,retroreflection:P,iridescence:b,iridescenceMap:ne,iridescenceThicknessMap:ue,sheen:k,sheenColorMap:Re,sheenRoughnessMap:pe,specularMap:de,specularColorMap:Pe,specularIntensityMap:De,transmission:W,transmissionMap:Ge,thicknessMap:U,gradientMap:fe,opaque:_.transparent===!1&&_.blending===Fa&&_.alphaToCoverage===!1,alphaMap:ee,alphaTest:he,alphaHash:ye,combine:_.combine,mapUv:ze&&g(_.map.channel),aoMapUv:Ve&&g(_.aoMap.channel),lightMapUv:ot&&g(_.lightMap.channel),bumpMapUv:He&&g(_.bumpMap.channel),normalMapUv:at&&g(_.normalMap.channel),displacementMapUv:wt&&g(_.displacementMap.channel),emissiveMapUv:kt&&g(_.emissiveMap.channel),metalnessMapUv:ht&&g(_.metalnessMap.channel),roughnessMapUv:re&&g(_.roughnessMap.channel),anisotropyMapUv:Q&&g(_.anisotropyMap.channel),clearcoatMapUv:le&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(_.sheenRoughnessMap.channel),specularMapUv:de&&g(_.specularMap.channel),specularColorMapUv:Pe&&g(_.specularColorMap.channel),specularIntensityMapUv:De&&g(_.specularIntensityMap.channel),transmissionMapUv:Ge&&g(_.transmissionMap.channel),thicknessMapUv:U&&g(_.thicknessMap.channel),alphaMapUv:ee&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(at||N),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(ze||ee),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&at===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ve,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Le,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&Qe.getTransfer(_.map.colorSpace)===ut,decodeVideoTextureEmissive:kt&&_.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(_.emissiveMap.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===li,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)A.push(R),A.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(h(A,_),x(A,_),A.push(t.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function h(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function x(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){const A=p[_.type];let R;if(A){const L=wi[A];R=JR.clone(L.uniforms)}else R=_.uniforms;return R}function y(_,A){let R=u.get(A);return R!==void 0?++R.usedTimes:(R=new PD(t,A,_,r),c.push(R),u.set(A,R)),R}function M(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function C(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:C}}function UD(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function kD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function J_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ev(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,g,v,m,h){let x=t[e];return x===void 0?(x={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:h},t[e]=x):(x.id=d.id,x.object=d,x.geometry=p,x.material=g,x.materialVariant=o(d),x.groupOrder=v,x.renderOrder=d.renderOrder,x.z=m,x.group=h),e++,x}function l(d,p,g,v,m,h,x){x.reversedDepth===!0&&(m=-m);const S=a(d,p,g,v,m,h);g.transmission>0?i.push(S):g.transparent===!0?r.push(S):n.push(S)}function c(d,p,g,v,m,h){const x=a(d,p,g,v,m,h);g.transmission>0?i.unshift(x):g.transparent===!0?r.unshift(x):n.unshift(x)}function u(d,p){n.length>1&&n.sort(d||kD),i.length>1&&i.sort(p||J_),r.length>1&&r.sort(p||J_)}function f(){for(let d=e,p=t.length;d<p;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function OD(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ev,t.set(i,[o])):r>=s.length?(o=new ev,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new $,color:new Je};break;case"SpotLight":n={position:new $,direction:new $,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function BD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let VD=0;function HD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function GD(t){const e=new zD,n=BD(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new Rt,o=new Rt;function a(c){let u=0,f=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,x=0,S=0,y=0,M=0,E=0,C=0,_=0,A=0,R=0;c.sort(HD);for(let D=0,B=c.length;D<B;D++){const I=c[D],O=I.color,Y=I.intensity,H=I.distance;let V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Cs?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=O.r*Y,f+=O.g*Y,d+=O.b*Y;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],Y);R++}else if(I.isSunLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,Z=n.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[g]=Z,i.sunShadowMap[g]=V;const ae=G.getViewportCount();for(let ve=0;ve<ae;ve++)i.sunShadowMatrix[v+ve]=G.getMatrix(ve),i.sunShadowCascade[v+ve]=G._cascadeData[ve];v+=ae,g++}i.sun[p]=z,p++}else if(I.isDirectionalLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,Z=n.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=I.shadow.matrix,M++}i.directional[m]=z,m++}else if(I.isSpotLight){const z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(O).multiplyScalar(Y),z.distance=H,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[x]=z;const G=I.shadow;if(I.map&&(i.spotLightMap[_]=I.map,_++,G.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[x]=G.matrix,I.castShadow){const Z=n.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=V,C++}x++}else if(I.isRectAreaLight){const z=e.get(I);z.color.copy(O).multiplyScalar(Y),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=z,S++}else if(I.isPointLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const G=I.shadow,Z=n.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,i.pointShadow[h]=Z,i.pointShadowMap[h]=V,i.pointShadowMatrix[h]=I.shadow.matrix,E++}i.point[h]=z,h++}else if(I.isHemisphereLight){const z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(Y),z.groundColor.copy(I.groundColor).multiplyScalar(Y),i.hemi[y]=z,y++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==h||L.spotLength!==x||L.rectAreaLength!==S||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==M||L.numPointShadows!==E||L.numSpotShadows!==C||L.numSpotMaps!==_||L.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=m,i.spot.length=x,i.rectArea.length=S,i.point.length=h,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-A,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,L.sunLength=p,L.directionalLength=m,L.pointLength=h,L.spotLength=x,L.rectAreaLength=S,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=M,L.numPointShadows=E,L.numSpotShadows=C,L.numSpotMaps=_,L.numLightProbes=R,i.version=VD++)}function l(c,u){let f=0,d=0,p=0,g=0,v=0,m=0;const h=u.matrixWorldInverse;for(let x=0,S=c.length;x<S;x++){const y=c[x];if(y.isSunLight){const M=i.sun[f];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(h),f++}else if(y.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(h),d++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(h),g++}else if(y.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),o.identity(),s.copy(y.matrixWorld),s.premultiply(h),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(h),m++}}}return{setup:a,setupView:l,state:i}}function tv(t){const e=new GD(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function WD(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new tv(t),e.set(r,[a])):s>=o.length?(a=new tv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const jD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$D=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],YD=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],nv=new Rt,la=new $,Uf=new $;function qD(t,e,n){let i=new lg;const r=new Ze,s=new Ze,o=new At,a=new iP,l=new rP,c={},u=n.maxTextureSize,f={[Ts]:un,[un]:Ts,[li]:li},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:jD,fragmentShader:XD}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Cn;g.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let h=this.type;this.render=function(E,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===G2&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gc);const A=t.getRenderTarget(),R=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Ji),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=h!==this.type;B&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=E.length;I<O;I++){const Y=E[I],H=Y.shadow;if(H===void 0){ke("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const V=H.getFrameExtents();r.multiply(V),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,H.mapSize.y=s.y));const z=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=z,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===xa){if(Y.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new hi(r.x,r.y,{format:Cs,type:Ii,minFilter:cn,magFilter:cn,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new ll(r.x,r.y,Ai),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=sr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Qt,H.map.depthTexture.magFilter=Qt}else Y.isPointLight?(H.map=new Kb(r.x),H.map.depthTexture=new ZR(r.x,Di)):(H.map=new hi(r.x,r.y),H.map.depthTexture=new ll(r.x,r.y,Di)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=sr,this.type===Gc?(H.map.depthTexture.compareFunction=z?og:sg,H.map.depthTexture.minFilter=cn,H.map.depthTexture.magFilter=cn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Qt,H.map.depthTexture.magFilter=Qt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==r.x||H.map.height!==r.y)&&H.map.setSize(r.x,r.y);const G=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Y.isPointLight!==!0&&H.updateMatrices(Y,_);for(let Z=0;Z<G;Z++){const ae=H.getCamera(Z);if(Y.isPointLight){const ve=H.camera,Ue=H.matrix,Ie=Y.distance||ve.far;Ie!==ve.far&&(ve.far=Ie,ve.updateProjectionMatrix()),la.setFromMatrixPosition(Y.matrixWorld),ve.position.copy(la),Uf.copy(ve.position),Uf.add($D[Z]),ve.up.copy(YD[Z]),ve.lookAt(Uf),ve.updateMatrixWorld(),Ue.makeTranslation(-la.x,-la.y,-la.z),nv.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),H._frustum.setFromProjectionMatrix(nv,ve.coordinateSystem,ve.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,Z),t.clear();else{Z===0&&(t.setRenderTarget(H.map),t.clear());const ve=H.getViewport(Z);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),D.viewport(o)}i=H.getFrustum(Z),y(C,_,ae,Y,this.type)}H.isPointLightShadow!==!0&&this.type===xa&&x(H,_),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(A,R,L)};function x(E,C){const _=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new hi(r.x,r.y,{format:Cs,type:Ii}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(C,null,_,d,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(C,null,_,p,v,null)}function S(E,C,_,A){let R=null;const L=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)R=L;else if(R=_.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=R.uuid,B=C.uuid;let I=c[D];I===void 0&&(I={},c[D]=I);let O=I[B];O===void 0&&(O=R.clone(),I[B]=O,C.addEventListener("dispose",M)),R=O}if(R.visible=C.visible,R.wireframe=C.wireframe,A===xa?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=t.properties.get(R);D.light=_}return R}function y(E,C,_,A,R){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===xa)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const B=e.update(E),I=E.material;if(Array.isArray(I)){const O=B.groups;for(let Y=0,H=O.length;Y<H;Y++){const V=O[Y],z=I[V.materialIndex];if(z&&z.visible){const G=S(E,z,A,R);E.onBeforeShadow(t,E,C,_,B,G,V),t.renderBufferDirect(_,null,B,G,E,V),E.onAfterShadow(t,E,C,_,B,G,V)}}}else if(I.visible){const O=S(E,I,A,R);E.onBeforeShadow(t,E,C,_,B,O,null),t.renderBufferDirect(_,null,B,O,E,null),E.onAfterShadow(t,E,C,_,B,O,null)}}const D=E.children;for(let B=0,I=D.length;B<I;B++)y(D[B],C,_,A,R)}function M(E){E.target.removeEventListener("dispose",M);for(const _ in c){const A=c[_],R=E.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function KD(t,e){function n(){let U=!1;const fe=new At;let ee=null;const he=new At(0,0,0,0);return{setMask:function(ye){ee!==ye&&!U&&(t.colorMask(ye,ye,ye,ye),ee=ye)},setLocked:function(ye){U=ye},setClear:function(ye,ie,Le,Ae,xt){xt===!0&&(ye*=Ae,ie*=Ae,Le*=Ae),fe.set(ye,ie,Le,Ae),he.equals(fe)===!1&&(t.clearColor(ye,ie,Le,Ae),he.copy(fe))},reset:function(){U=!1,ee=null,he.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,ee=null,he=null,ye=null;return{setReversed:function(ie){if(fe!==ie){const Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),fe=ie;const Ae=ye;ye=null,this.setClear(Ae)}},getReversed:function(){return fe},setTest:function(ie){ie?te(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!U&&(t.depthMask(ie),ee=ie)},setFunc:function(ie){if(fe&&(ie=wR[ie]),he!==ie){switch(ie){case $h:t.depthFunc(t.NEVER);break;case Yh:t.depthFunc(t.ALWAYS);break;case qh:t.depthFunc(t.LESS);break;case rl:t.depthFunc(t.LEQUAL);break;case Kh:t.depthFunc(t.EQUAL);break;case Zh:t.depthFunc(t.GEQUAL);break;case Qh:t.depthFunc(t.GREATER);break;case Jh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=ie}},setLocked:function(ie){U=ie},setClear:function(ie){ye!==ie&&(ye=ie,fe&&(ie=1-ie),t.clearDepth(ie))},reset:function(){U=!1,ee=null,he=null,ye=null,fe=!1}}}function r(){let U=!1,fe=null,ee=null,he=null,ye=null,ie=null,Le=null,Ae=null,xt=null;return{setTest:function(lt){U||(lt?te(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!U&&(t.stencilMask(lt),fe=lt)},setFunc:function(lt,ei,mi){(ee!==lt||he!==ei||ye!==mi)&&(t.stencilFunc(lt,ei,mi),ee=lt,he=ei,ye=mi)},setOp:function(lt,ei,mi){(ie!==lt||Le!==ei||Ae!==mi)&&(t.stencilOp(lt,ei,mi),ie=lt,Le=ei,Ae=mi)},setLocked:function(lt){U=lt},setClear:function(lt){xt!==lt&&(t.clearStencil(lt),xt=lt)},reset:function(){U=!1,fe=null,ee=null,he=null,ye=null,ie=null,Le=null,Ae=null,xt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d={},p=new WeakMap,g=[],v=null,m=!1,h=null,x=null,S=null,y=null,M=null,E=null,C=null,_=new Je(0,0,0),A=0,R=!1,L=null,D=null,B=null,I=null,O=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,V=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=V>=2);let G=null,Z={};const ae=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),Ue=new At().fromArray(ae),Ie=new At().fromArray(ve);function Ne(U,fe,ee,he){const ye=new Uint8Array(4),ie=t.createTexture();t.bindTexture(U,ie),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<ee;Le++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(fe+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return ie}const K={};K[t.TEXTURE_2D]=Ne(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=Ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=Ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=Ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(t.DEPTH_TEST),o.setFunc(rl),He(!1),at(s_),te(t.CULL_FACE),Ve(Ji);function te(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function Se(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function Fe(U,fe){return d[U]!==fe?(t.bindFramebuffer(U,fe),d[U]=fe,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=fe),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function xe(U,fe){let ee=g,he=!1;if(U){ee=p.get(fe),ee===void 0&&(ee=[],p.set(fe,ee));const ye=U.textures;if(ee.length!==ye.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Le=ye.length;ie<Le;ie++)ee[ie]=t.COLOR_ATTACHMENT0+ie;ee.length=ye.length,he=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,he=!0);he&&t.drawBuffers(ee)}function ze(U){return v!==U?(t.useProgram(U),v=U,!0):!1}const st={[Ks]:t.FUNC_ADD,[j2]:t.FUNC_SUBTRACT,[X2]:t.FUNC_REVERSE_SUBTRACT};st[$2]=t.MIN,st[Y2]=t.MAX;const Be={[q2]:t.ZERO,[K2]:t.ONE,[Z2]:t.SRC_COLOR,[_b]:t.SRC_ALPHA,[iR]:t.SRC_ALPHA_SATURATE,[tR]:t.DST_COLOR,[J2]:t.DST_ALPHA,[Q2]:t.ONE_MINUS_SRC_COLOR,[vb]:t.ONE_MINUS_SRC_ALPHA,[nR]:t.ONE_MINUS_DST_COLOR,[eR]:t.ONE_MINUS_DST_ALPHA,[rR]:t.CONSTANT_COLOR,[sR]:t.ONE_MINUS_CONSTANT_COLOR,[oR]:t.CONSTANT_ALPHA,[aR]:t.ONE_MINUS_CONSTANT_ALPHA};function Ve(U,fe,ee,he,ye,ie,Le,Ae,xt,lt){if(U===Ji){m===!0&&(Se(t.BLEND),m=!1);return}if(m===!1&&(te(t.BLEND),m=!0),U!==W2){if(U!==h||lt!==R){if((x!==Ks||M!==Ks)&&(t.blendEquation(t.FUNC_ADD),x=Ks,M=Ks),lt)switch(U){case Fa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ua:t.blendFunc(t.ONE,t.ONE);break;case o_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case a_:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:rt("WebGLState: Invalid blending: ",U);break}else switch(U){case Fa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ua:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case o_:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case a_:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",U);break}S=null,y=null,E=null,C=null,_.set(0,0,0),A=0,h=U,R=lt}return}ye=ye||fe,ie=ie||ee,Le=Le||he,(fe!==x||ye!==M)&&(t.blendEquationSeparate(st[fe],st[ye]),x=fe,M=ye),(ee!==S||he!==y||ie!==E||Le!==C)&&(t.blendFuncSeparate(Be[ee],Be[he],Be[ie],Be[Le]),S=ee,y=he,E=ie,C=Le),(Ae.equals(_)===!1||xt!==A)&&(t.blendColor(Ae.r,Ae.g,Ae.b,xt),_.copy(Ae),A=xt),h=U,R=!1}function ot(U,fe){U.side===li?Se(t.CULL_FACE):te(t.CULL_FACE);let ee=U.side===un;fe&&(ee=!ee),He(ee),U.blending===Fa&&U.transparent===!1?Ve(Ji):Ve(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const he=U.stencilWrite;a.setTest(he),he&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),kt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(U){L!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),L=U)}function at(U){U!==V2?(te(t.CULL_FACE),U!==D&&(U===s_?t.cullFace(t.BACK):U===H2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),D=U}function wt(U){U!==B&&(H&&t.lineWidth(U),B=U)}function kt(U,fe,ee){U?(te(t.POLYGON_OFFSET_FILL),(I!==fe||O!==ee)&&(I=fe,O=ee,o.getReversed()&&(fe=-fe),t.polygonOffset(fe,ee))):Se(t.POLYGON_OFFSET_FILL)}function ht(U){U?te(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function re(U){U===void 0&&(U=t.TEXTURE0+Y-1),G!==U&&(t.activeTexture(U),G=U)}function N(U,fe,ee){ee===void 0&&(G===null?ee=t.TEXTURE0+Y-1:ee=G);let he=Z[ee];he===void 0&&(he={type:void 0,texture:void 0},Z[ee]=he),(he.type!==U||he.texture!==fe)&&(G!==ee&&(t.activeTexture(ee),G=ee),t.bindTexture(U,fe||K[U]),he.type=U,he.texture=fe)}function it(){const U=Z[G];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function We(){try{t.compressedTexImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function b(){try{t.texSubImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function k(){try{t.texSubImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function le(){try{t.texStorage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function ce(){try{t.texStorage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function J(){try{t.texImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function ne(){try{t.texImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function ue(U){return f[U]!==void 0?f[U]:t.getParameter(U)}function Re(U,fe){f[U]!==fe&&(t.pixelStorei(U,fe),f[U]=fe)}function pe(U){Ue.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ue.copy(U))}function de(U){Ie.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ie.copy(U))}function Pe(U,fe){let ee=c.get(fe);ee===void 0&&(ee=new WeakMap,c.set(fe,ee));let he=ee.get(U);he===void 0&&(he=t.getUniformBlockIndex(fe,U.name),ee.set(U,he))}function De(U,fe){const he=c.get(fe).get(U);l.get(fe)!==he&&(t.uniformBlockBinding(fe,he,U.__bindingPointIndex),l.set(fe,he))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},G=null,Z={},d={},p=new WeakMap,g=[],v=null,m=!1,h=null,x=null,S=null,y=null,M=null,E=null,C=null,_=new Je(0,0,0),A=0,R=!1,L=null,D=null,B=null,I=null,O=null,Ue.set(0,0,t.canvas.width,t.canvas.height),Ie.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:Se,bindFramebuffer:Fe,drawBuffers:xe,useProgram:ze,setBlending:Ve,setMaterial:ot,setFlipSided:He,setCullFace:at,setLineWidth:wt,setPolygonOffset:kt,setScissorTest:ht,activeTexture:re,bindTexture:N,unbindTexture:it,compressedTexImage2D:We,compressedTexImage3D:P,texImage2D:J,texImage3D:ne,pixelStorei:Re,getParameter:ue,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:le,texStorage3D:ce,texSubImage2D:b,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:Q,scissor:pe,viewport:de,reset:Ge}}function ZD(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap,f=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,b){return g?new OffscreenCanvas(P,b):Ou("canvas")}function m(P,b,k){let W=1;const Q=We(P);if((Q.width>k||Q.height>k)&&(W=k/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const le=Math.floor(W*Q.width),ce=Math.floor(W*Q.height);d===void 0&&(d=v(le,ce));const J=b?v(le,ce):d;return J.width=le,J.height=ce,J.getContext("2d").drawImage(P,0,0,le,ce),ke("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+le+"x"+ce+")."),J}else return"data"in P&&ke("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function h(P){return P.generateMipmaps}function x(P){t.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(P,b,k,W,Q,le=!1){if(P!==null){if(t[P]!==void 0)return t[P];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce;W&&(ce=e.get("EXT_texture_norm16"),ce||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=b;if(b===t.RED&&(k===t.FLOAT&&(J=t.R32F),k===t.HALF_FLOAT&&(J=t.R16F),k===t.UNSIGNED_BYTE&&(J=t.R8),k===t.UNSIGNED_SHORT&&ce&&(J=ce.R16_EXT),k===t.SHORT&&ce&&(J=ce.R16_SNORM_EXT)),b===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(J=t.R8UI),k===t.UNSIGNED_SHORT&&(J=t.R16UI),k===t.UNSIGNED_INT&&(J=t.R32UI),k===t.BYTE&&(J=t.R8I),k===t.SHORT&&(J=t.R16I),k===t.INT&&(J=t.R32I)),b===t.RG&&(k===t.FLOAT&&(J=t.RG32F),k===t.HALF_FLOAT&&(J=t.RG16F),k===t.UNSIGNED_BYTE&&(J=t.RG8),k===t.UNSIGNED_SHORT&&ce&&(J=ce.RG16_EXT),k===t.SHORT&&ce&&(J=ce.RG16_SNORM_EXT)),b===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(J=t.RG8UI),k===t.UNSIGNED_SHORT&&(J=t.RG16UI),k===t.UNSIGNED_INT&&(J=t.RG32UI),k===t.BYTE&&(J=t.RG8I),k===t.SHORT&&(J=t.RG16I),k===t.INT&&(J=t.RG32I)),b===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(J=t.RGB8UI),k===t.UNSIGNED_SHORT&&(J=t.RGB16UI),k===t.UNSIGNED_INT&&(J=t.RGB32UI),k===t.BYTE&&(J=t.RGB8I),k===t.SHORT&&(J=t.RGB16I),k===t.INT&&(J=t.RGB32I)),b===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),k===t.UNSIGNED_INT&&(J=t.RGBA32UI),k===t.BYTE&&(J=t.RGBA8I),k===t.SHORT&&(J=t.RGBA16I),k===t.INT&&(J=t.RGBA32I)),b===t.RGB&&(k===t.UNSIGNED_SHORT&&ce&&(J=ce.RGB16_EXT),k===t.SHORT&&ce&&(J=ce.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),b===t.RGBA){const ne=le?ku:Qe.getTransfer(Q);k===t.FLOAT&&(J=t.RGBA32F),k===t.HALF_FLOAT&&(J=t.RGBA16F),k===t.UNSIGNED_BYTE&&(J=ne===ut?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&ce&&(J=ce.RGBA16_EXT),k===t.SHORT&&ce&&(J=ce.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(P,b){let k;return P?b===null||b===Di||b===ol?k=t.DEPTH24_STENCIL8:b===Ai?k=t.DEPTH32F_STENCIL8:b===sl&&(k=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Di||b===ol?k=t.DEPTH_COMPONENT24:b===Ai?k=t.DEPTH_COMPONENT32F:b===sl&&(k=t.DEPTH_COMPONENT16),k}function E(P,b){return h(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qt&&P.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function C(P){const b=P.target;b.removeEventListener("dispose",C),A(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&f.delete(b)}function _(P){const b=P.target;b.removeEventListener("dispose",_),L(b)}function A(P){const b=i.get(P);if(b.__webglInit===void 0)return;const k=P.source,W=p.get(k);if(W){const Q=W[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(P),Object.keys(W).length===0&&p.delete(k)}i.remove(P)}function R(P){const b=i.get(P);t.deleteTexture(b.__webglTexture);const k=P.source,W=p.get(k);delete W[b.__cacheKey],o.memory.textures--}function L(P){const b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(b.__webglFramebuffer[W]))for(let Q=0;Q<b.__webglFramebuffer[W].length;Q++)t.deleteFramebuffer(b.__webglFramebuffer[W][Q]);else t.deleteFramebuffer(b.__webglFramebuffer[W]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[W])}else{if(Array.isArray(b.__webglFramebuffer))for(let W=0;W<b.__webglFramebuffer.length;W++)t.deleteFramebuffer(b.__webglFramebuffer[W]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let W=0;W<b.__webglColorRenderbuffer.length;W++)b.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[W]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=P.textures;for(let W=0,Q=k.length;W<Q;W++){const le=i.get(k[W]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(k[W])}i.remove(P)}let D=0;function B(){D=0}function I(){return D}function O(P){D=P}function Y(){const P=D;return P>=r.maxTextures&&ke("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function H(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function V(P,b){const k=i.get(P);if(P.isVideoTexture&&N(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const W=P.image;if(W===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(k,P,b);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+b)}function z(P,b){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){Se(k,P,b);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+b)}function G(P,b){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){Se(k,P,b);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+b)}function Z(P,b){const k=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Fe(k,P,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+b)}const ae={[Du]:t.REPEAT,[Ti]:t.CLAMP_TO_EDGE,[ep]:t.MIRRORED_REPEAT},ve={[Qt]:t.NEAREST,[uR]:t.NEAREST_MIPMAP_NEAREST,[ec]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[sf]:t.LINEAR_MIPMAP_NEAREST,[hs]:t.LINEAR_MIPMAP_LINEAR},Ue={[pR]:t.NEVER,[vR]:t.ALWAYS,[mR]:t.LESS,[sg]:t.LEQUAL,[gR]:t.EQUAL,[og]:t.GEQUAL,[xR]:t.GREATER,[_R]:t.NOTEQUAL};function Ie(P,b){if(b.type===Ai&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===cn||b.magFilter===sf||b.magFilter===ec||b.magFilter===hs||b.minFilter===cn||b.minFilter===sf||b.minFilter===ec||b.minFilter===hs)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,ae[b.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,ae[b.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,ae[b.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,ve[b.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Ue[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qt||b.minFilter!==ec&&b.minFilter!==hs||b.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ne(P,b){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",C));const W=b.source;let Q=p.get(W);Q===void 0&&(Q={},p.set(W,Q));const le=H(b);if(le!==P.__cacheKey){Q[le]===void 0&&(Q[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[le].usedTimes++;const ce=Q[P.__cacheKey];ce!==void 0&&(Q[P.__cacheKey].usedTimes--,ce.usedTimes===0&&R(b)),P.__cacheKey=le,P.__webglTexture=Q[le].texture}return k}function K(P,b,k){return Math.floor(Math.floor(P/k)/b)}function te(P,b,k,W){const le=P.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,k,W,b.data);else{le.sort((Re,pe)=>Re.start-pe.start);let ce=0;for(let Re=1;Re<le.length;Re++){const pe=le[ce],de=le[Re],Pe=pe.start+pe.count,De=K(de.start,b.width,4),Ge=K(pe.start,b.width,4);de.start<=Pe+1&&De===Ge&&K(de.start+de.count-1,b.width,4)===De?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++ce,le[ce]=de)}le.length=ce+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let Re=0,pe=le.length;Re<pe;Re++){const de=le[Re],Pe=Math.floor(de.start/4),De=Math.ceil(de.count/4),Ge=Pe%b.width,U=Math.floor(Pe/b.width),fe=De,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ge,U,fe,ee,k,W,b.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function Se(P,b,k){let W=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(W=t.TEXTURE_3D);const Q=Ne(P,b),le=b.source;n.bindTexture(W,P.__webglTexture,t.TEXTURE0+k);const ce=i.get(le);if(le.version!==ce.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ee=Qe.getPrimaries(Qe.workingColorSpace),he=b.colorSpace===Mr?null:Qe.getPrimaries(b.colorSpace),ye=b.colorSpace===Mr||ee===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment);let ne=m(b.image,!1,r.maxTextureSize);ne=it(b,ne);const ue=s.convert(b.format,b.colorSpace),Re=s.convert(b.type);let pe=y(b.internalFormat,ue,Re,b.normalized,b.colorSpace,b.isVideoTexture);Ie(W,b);let de;const Pe=b.mipmaps,De=b.isVideoTexture!==!0,Ge=ce.__version===void 0||Q===!0,U=le.dataReady,fe=E(b,ne);if(b.isDepthTexture)pe=M(b.format===ps,b.type),Ge&&(De?n.texStorage2D(t.TEXTURE_2D,1,pe,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,pe,ne.width,ne.height,0,ue,Re,null));else if(b.isDataTexture)if(Pe.length>0){De&&Ge&&n.texStorage2D(t.TEXTURE_2D,fe,pe,Pe[0].width,Pe[0].height);for(let ee=0,he=Pe.length;ee<he;ee++)de=Pe[ee],De?U&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,ue,Re,de.data):n.texImage2D(t.TEXTURE_2D,ee,pe,de.width,de.height,0,ue,Re,de.data);b.generateMipmaps=!1}else De?(Ge&&n.texStorage2D(t.TEXTURE_2D,fe,pe,ne.width,ne.height),U&&te(b,ne,ue,Re)):n.texImage2D(t.TEXTURE_2D,0,pe,ne.width,ne.height,0,ue,Re,ne.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){De&&Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,pe,Pe[0].width,Pe[0].height,ne.depth);for(let ee=0,he=Pe.length;ee<he;ee++)if(de=Pe[ee],b.format!==ui)if(ue!==null)if(De){if(U)if(b.layerUpdates.size>0){const ye=I_(de.width,de.height,b.format,b.type);for(const ie of b.layerUpdates){const Le=de.data.subarray(ie*ye/de.data.BYTES_PER_ELEMENT,(ie+1)*ye/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ie,de.width,de.height,1,ue,Le)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,ne.depth,ue,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,pe,de.width,de.height,ne.depth,0,de.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,ne.depth,ue,Re,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,pe,de.width,de.height,ne.depth,0,ue,Re,de.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{De&&Ge&&n.texStorage2D(t.TEXTURE_2D,fe,pe,Pe[0].width,Pe[0].height);for(let ee=0,he=Pe.length;ee<he;ee++)de=Pe[ee],b.format!==ui?ue!==null?De?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,ue,de.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,pe,de.width,de.height,0,de.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?U&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,ue,Re,de.data):n.texImage2D(t.TEXTURE_2D,ee,pe,de.width,de.height,0,ue,Re,de.data)}else if(b.isDataArrayTexture)if(De){if(Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,pe,ne.width,ne.height,ne.depth),U)if(b.layerUpdates.size>0){const ee=I_(ne.width,ne.height,b.format,b.type);for(const he of b.layerUpdates){const ye=ne.data.subarray(he*ee/ne.data.BYTES_PER_ELEMENT,(he+1)*ee/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,ne.width,ne.height,1,ue,Re,ye)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,Re,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,ne.width,ne.height,ne.depth,0,ue,Re,ne.data);else if(b.isData3DTexture)De?(Ge&&n.texStorage3D(t.TEXTURE_3D,fe,pe,ne.width,ne.height,ne.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,Re,ne.data)):n.texImage3D(t.TEXTURE_3D,0,pe,ne.width,ne.height,ne.depth,0,ue,Re,ne.data);else if(b.isFramebufferTexture){if(Ge)if(De)n.texStorage2D(t.TEXTURE_2D,fe,pe,ne.width,ne.height);else{let ee=ne.width,he=ne.height;for(let ye=0;ye<fe;ye++)n.texImage2D(t.TEXTURE_2D,ye,pe,ee,he,0,ue,Re,null),ee>>=1,he>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ne.parentNode!==ee){ee.appendChild(ne),f.add(b),ee.onpaint=he=>{const ye=he.changedElements;for(const ie of f)ye.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{const ye=t.RGBA,ie=t.RGBA,Le=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ye,ie,Le,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(De&&Ge){const ee=We(Pe[0]);n.texStorage2D(t.TEXTURE_2D,fe,pe,ee.width,ee.height)}for(let ee=0,he=Pe.length;ee<he;ee++)de=Pe[ee],De?U&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ue,Re,de):n.texImage2D(t.TEXTURE_2D,ee,pe,ue,Re,de);b.generateMipmaps=!1}else if(De){if(Ge){const ee=We(ne);n.texStorage2D(t.TEXTURE_2D,fe,pe,ee.width,ee.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Re,ne)}else n.texImage2D(t.TEXTURE_2D,0,pe,ue,Re,ne);h(b)&&x(W),ce.__version=le.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Fe(P,b,k){if(b.image.length!==6)return;const W=Ne(P,b),Q=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+k);const le=i.get(Q);if(Q.version!==le.__version||W===!0){n.activeTexture(t.TEXTURE0+k);const ce=Qe.getPrimaries(Qe.workingColorSpace),J=b.colorSpace===Mr?null:Qe.getPrimaries(b.colorSpace),ne=b.colorSpace===Mr||ce===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ue=b.isCompressedTexture||b.image[0].isCompressedTexture,Re=b.image[0]&&b.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!ue&&!Re?pe[ie]=m(b.image[ie],!0,r.maxCubemapSize):pe[ie]=Re?b.image[ie].image:b.image[ie],pe[ie]=it(b,pe[ie]);const de=pe[0],Pe=s.convert(b.format,b.colorSpace),De=s.convert(b.type),Ge=y(b.internalFormat,Pe,De,b.normalized,b.colorSpace),U=b.isVideoTexture!==!0,fe=le.__version===void 0||W===!0,ee=Q.dataReady;let he=E(b,de);Ie(t.TEXTURE_CUBE_MAP,b);let ye;if(ue){U&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ge,de.width,de.height);for(let ie=0;ie<6;ie++){ye=pe[ie].mipmaps;for(let Le=0;Le<ye.length;Le++){const Ae=ye[Le];b.format!==ui?Pe!==null?U?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Ae.width,Ae.height,Pe,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Ge,Ae.width,Ae.height,0,Ae.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Ae.width,Ae.height,Pe,De,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Ge,Ae.width,Ae.height,0,Pe,De,Ae.data)}}}else{if(ye=b.mipmaps,U&&fe){ye.length>0&&he++;const ie=We(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ge,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Re){U?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Pe,De,pe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,pe[ie].width,pe[ie].height,0,Pe,De,pe[ie].data);for(let Le=0;Le<ye.length;Le++){const xt=ye[Le].image[ie].image;U?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,xt.width,xt.height,Pe,De,xt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Ge,xt.width,xt.height,0,Pe,De,xt.data)}}else{U?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,De,pe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,Pe,De,pe[ie]);for(let Le=0;Le<ye.length;Le++){const Ae=ye[Le];U?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Pe,De,Ae.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Ge,Pe,De,Ae.image[ie])}}}h(b)&&x(t.TEXTURE_CUBE_MAP),le.__version=Q.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function xe(P,b,k,W,Q,le){const ce=s.convert(k.format,k.colorSpace),J=s.convert(k.type),ne=y(k.internalFormat,ce,J,k.normalized,k.colorSpace),ue=i.get(b),Re=i.get(k);if(Re.__renderTarget=b,!ue.__hasExternalTextures){const pe=Math.max(1,b.width>>le),de=Math.max(1,b.height>>le);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,le,ne,pe,de,b.depth,0,ce,J,null):n.texImage2D(Q,le,ne,pe,de,0,ce,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),re(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,Q,Re.__webglTexture,0,ht(b)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,Q,Re.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(P,b,k){if(t.bindRenderbuffer(t.RENDERBUFFER,P),b.depthBuffer){const W=b.depthTexture,Q=W&&W.isDepthTexture?W.type:null,le=M(b.stencilBuffer,Q),ce=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;re(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ht(b),le,b.width,b.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ht(b),le,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,le,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,P)}else{const W=b.textures;for(let Q=0;Q<W.length;Q++){const le=W[Q],ce=s.convert(le.format,le.colorSpace),J=s.convert(le.type),ne=y(le.internalFormat,ce,J,le.normalized,le.colorSpace);re(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ht(b),ne,b.width,b.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ht(b),ne,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ne,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function st(P,b,k){const W=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(b.depthTexture);if(Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,b.depthTexture);const ue=s.convert(b.depthTexture.format),Re=s.convert(b.depthTexture.type);let pe;b.depthTexture.format===sr?pe=t.DEPTH_COMPONENT24:b.depthTexture.format===ps&&(pe=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,b.width,b.height,0,ue,Re,null)}}else V(b.depthTexture,0);const le=Q.__webglTexture,ce=ht(b),J=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,ne=b.depthTexture.format===ps?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===sr)re(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,J,le,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,ne,J,le,0);else if(b.depthTexture.format===ps)re(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,J,le,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,ne,J,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(P){const b=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const W=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),W){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=W}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)st(b.__webglFramebuffer[W],P,W);else{const W=P.texture.mipmaps;W&&W.length>0?st(b.__webglFramebuffer[0],P,0):st(b.__webglFramebuffer,P,0)}else if(k){b.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[W]),b.__webglDepthbuffer[W]===void 0)b.__webglDepthbuffer[W]=t.createRenderbuffer(),ze(b.__webglDepthbuffer[W],P,!1);else{const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,le)}}else{const W=P.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),ze(b.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(P,b,k){const W=i.get(P);b!==void 0&&xe(W.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Be(P)}function ot(P){const b=P.texture,k=i.get(P),W=i.get(b);P.addEventListener("dispose",_);const Q=P.textures,le=P.isWebGLCubeRenderTarget===!0,ce=Q.length>1;if(ce||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=b.version,o.memory.textures++),le){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let ne=0;ne<b.mipmaps.length;ne++)k.__webglFramebuffer[J][ne]=t.createFramebuffer()}else k.__webglFramebuffer[J]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<b.mipmaps.length;J++)k.__webglFramebuffer[J]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ce)for(let J=0,ne=Q.length;J<ne;J++){const ue=i.get(Q[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&re(P)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<Q.length;J++){const ne=Q[J];k.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[J]);const ue=s.convert(ne.format,ne.colorSpace),Re=s.convert(ne.type),pe=y(ne.internalFormat,ue,Re,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),de=ht(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,pe,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,k.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),ze(k.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,b);for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0)for(let ne=0;ne<b.mipmaps.length;ne++)xe(k.__webglFramebuffer[J][ne],P,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else xe(k.__webglFramebuffer[J],P,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);h(b)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let J=0,ne=Q.length;J<ne;J++){const ue=Q[J],Re=i.get(ue);let pe=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Re.__webglTexture),Ie(pe,ue),xe(k.__webglFramebuffer,P,ue,t.COLOR_ATTACHMENT0+J,pe,0),h(ue)&&x(pe)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,W.__webglTexture),Ie(J,b),b.mipmaps&&b.mipmaps.length>0)for(let ne=0;ne<b.mipmaps.length;ne++)xe(k.__webglFramebuffer[ne],P,b,t.COLOR_ATTACHMENT0,J,ne);else xe(k.__webglFramebuffer,P,b,t.COLOR_ATTACHMENT0,J,0);h(b)&&x(J),n.unbindTexture()}P.depthBuffer&&Be(P)}function He(P){const b=P.textures;for(let k=0,W=b.length;k<W;k++){const Q=b[k];if(h(Q)){const le=S(P),ce=i.get(Q).__webglTexture;n.bindTexture(le,ce),x(le),n.unbindTexture()}}}const at=[],wt=[];function kt(P){if(P.samples>0){if(re(P)===!1){const b=P.textures,k=P.width,W=P.height;let Q=t.COLOR_BUFFER_BIT;const le=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(P),J=b.length>1;if(J)for(let ue=0;ue<b.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ne=P.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<b.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Re=i.get(b[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,k,W,0,0,k,W,Q,t.NEAREST),l===!0&&(at.length=0,wt.length=0,at.push(t.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(at.push(le),wt.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,wt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<b.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Re=i.get(b[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const b=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function ht(P){return Math.min(r.maxSamples,P.samples)}function re(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function N(P){const b=o.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function it(P,b){const k=P.colorSpace,W=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Uu&&k!==Mr&&(Qe.getTransfer(k)===ut?(W!==ui||Q!==Dn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",k)),b}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=Ve,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function QD(t,e){function n(i,r=Mr){let s;const o=Qe.getTransfer(r);if(i===Dn)return t.UNSIGNED_BYTE;if(i===eg)return t.UNSIGNED_SHORT_4_4_4_4;if(i===tg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Pb)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Lb)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cb)return t.BYTE;if(i===Rb)return t.SHORT;if(i===sl)return t.UNSIGNED_SHORT;if(i===Jm)return t.INT;if(i===Di)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===Ii)return t.HALF_FLOAT;if(i===Nb)return t.ALPHA;if(i===Db)return t.RGB;if(i===ui)return t.RGBA;if(i===sr)return t.DEPTH_COMPONENT;if(i===ps)return t.DEPTH_STENCIL;if(i===Ib)return t.RED;if(i===ng)return t.RED_INTEGER;if(i===Cs)return t.RG;if(i===ig)return t.RG_INTEGER;if(i===rg)return t.RGBA_INTEGER;if(i===Wc||i===jc||i===Xc||i===$c)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$c)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tp||i===np||i===ip||i===rp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===np)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ip)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sp||i===op||i===ap||i===lp||i===cp||i===Iu||i===up)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sp||i===op)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ap)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===lp)return s.COMPRESSED_R11_EAC;if(i===cp)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Iu)return s.COMPRESSED_RG11_EAC;if(i===up)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dp||i===fp||i===hp||i===pp||i===mp||i===gp||i===xp||i===_p||i===vp||i===yp||i===Sp||i===bp||i===Mp||i===wp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_p)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ep||i===Tp||i===Ap)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ep)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ap)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cp||i===Rp||i===Fu||i===Pp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Cp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Rp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ol?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const JD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Wb(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Fi({vertexShader:JD,fragmentShader:eI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xt(new ud(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nI extends Ls{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new tI,h={},x=n.getContextAttributes();let S=null,y=null;const M=[],E=[],C=new Ze;let _=null,A=null;const R=new $n;R.viewport=new At;const L=new $n;L.viewport=new At;const D=[R,L],B=new cP;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=M[K];return te===void 0&&(te=new pf,M[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=M[K];return te===void 0&&(te=new pf,M[K]=te),te.getGripSpace()},this.getHand=function(K){let te=M[K];return te===void 0&&(te=new pf,M[K]=te),te.getHandSpace()};function Y(K){const te=E.indexOf(K.inputSource);if(te===-1)return;const Se=M[te];Se!==void 0&&(Se.update(K.inputSource,K.frame,c||o),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",V);for(let K=0;K<M.length;K++){const te=E[K];te!==null&&(E[K]=null,M[K].disconnect(te))}I=null,O=null,m.reset();for(const K in h)delete h[K];if(e.setRenderTarget(S),p=null,d=null,f=null,r=null,y=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),A!==null){const K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",H),r.addEventListener("inputsourceschange",V),x.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Fe=null,xe=null;x.depth&&(xe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=x.stencil?ps:sr,Fe=x.stencil?ol:Di);const ze={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(ze),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new hi(d.textureWidth,d.textureHeight,{format:ui,type:Dn,depthTexture:new ll(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new hi(p.framebufferWidth,p.framebufferHeight,{format:ui,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(K){for(let te=0;te<K.removed.length;te++){const Se=K.removed[te],Fe=E.indexOf(Se);Fe>=0&&(E[Fe]=null,M[Fe].disconnect(Se))}for(let te=0;te<K.added.length;te++){const Se=K.added[te];let Fe=E.indexOf(Se);if(Fe===-1){for(let ze=0;ze<M.length;ze++)if(ze>=E.length){E.push(Se),Fe=ze;break}else if(E[ze]===null){E[ze]=Se,Fe=ze;break}if(Fe===-1)break}const xe=M[Fe];xe&&xe.connect(Se)}}const z=new $,G=new $;function Z(K,te,Se){z.setFromMatrixPosition(te.matrixWorld),G.setFromMatrixPosition(Se.matrixWorld);const Fe=z.distanceTo(G),xe=te.projectionMatrix.elements,ze=Se.projectionMatrix.elements,st=xe[14]/(xe[10]-1),Be=xe[14]/(xe[10]+1),Ve=(xe[9]+1)/xe[5],ot=(xe[9]-1)/xe[5],He=(xe[8]-1)/xe[0],at=(ze[8]+1)/ze[0],wt=st*He,kt=st*at,ht=Fe/(-He+at),re=ht*-He;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(re),K.translateZ(ht),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const N=st+ht,it=Be+ht,We=wt-re,P=kt+(Fe-re),b=Ve*Be/it*N,k=ot*Be/it*N;K.projectionMatrix.makePerspective(We,P,b,k,N,it),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let te=K.near,Se=K.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),B.near=L.near=R.near=te,B.far=L.far=R.far=Se,(I!==B.near||O!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,O=B.far),B.layers.mask=K.layers.mask|6,R.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const Fe=K.parent,xe=B.cameras;ae(B,Fe);for(let ze=0;ze<xe.length;ze++)ae(xe[ze],Fe);xe.length===2?Z(B,R,L):B.projectionMatrix.copy(R.projectionMatrix),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),ve(K,B,Fe)};function ve(K,te,Se){Se===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Np*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(K){return h[K]};let Ue=null;function Ie(K,te){if(u=te.getViewerPose(c||o),g=te,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Fe=!1;Se.length!==B.cameras.length&&(B.cameras.length=0,Fe=!0);for(let Be=0;Be<Se.length;Be++){const Ve=Se[Be];let ot=null;if(p!==null)ot=p.getViewport(Ve);else{const at=f.getViewSubImage(d,Ve);ot=at.viewport,Be===0&&(e.setRenderTargetTextures(y,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(y))}let He=D[Be];He===void 0&&(He=new $n,He.layers.enable(Be),He.viewport=new At,D[Be]=He),He.matrix.fromArray(Ve.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ve.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ot.x,ot.y,ot.width,ot.height),Be===0&&(B.matrix.copy(He.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Fe===!0&&B.cameras.push(He)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Be=f.getDepthInformation(Se[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,r.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Be=0;Be<Se.length;Be++){const Ve=Se[Be].camera;if(Ve){let ot=h[Ve];ot||(ot=new Wb,h[Ve]=ot);const He=f.getCameraImage(Ve);ot.sourceTexture=He}}}}for(let Se=0;Se<M.length;Se++){const Fe=E[Se],xe=M[Se];Fe!==null&&xe!==void 0&&xe.update(Fe,te,c||o)}Ue&&Ue(K,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ne=new Yb;Ne.setAnimationLoop(Ie),this.setAnimationLoop=function(K){Ue=K},this.dispose=function(){}}}const iI=new Rt,tM=new Oe;tM.set(-1,0,0,0,1,0,0,0,1);function rI(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,jb(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,S,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,S):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===un&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===un&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),S=x.envMap,y=x.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(iI.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tM),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=S*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sI(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const E=M.program;i.uniformBlockBinding(y,E)}function c(y,M){let E=r[y.id];E===void 0&&(m(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",x));const C=M.program;i.updateUBOMapping(y,C);const _=e.render.frame;s[y.id]!==_&&(d(y),s[y.id]=_)}function u(y){const M=f();y.__bindingPointIndex=M;const E=t.createBuffer(),C=y.__size,_=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,E),E}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=r[y.id],E=y.uniforms,C=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let _=0,A=E.length;_<A;_++){const R=E[_];if(Array.isArray(R))for(let L=0,D=R.length;L<D;L++)p(R[L],_,L,C);else p(R,_,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,M,E,C){if(v(y,M,E,C)===!0){const _=y.__offset,A=y.value;if(Array.isArray(A)){let R=0;for(let L=0;L<A.length;L++){const D=A[L],B=h(D);g(D,y.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,y.__data)}}function g(y,M,E){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,E)}function v(y,M,E,C){const _=y.value,A=M+"_"+E;if(C[A]===void 0)return typeof _=="number"||typeof _=="boolean"?C[A]=_:ArrayBuffer.isView(_)?C[A]=_.slice():C[A]=_.clone(),!0;{const R=C[A];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return C[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(y){const M=y.uniforms;let E=0;const C=16;for(let A=0,R=M.length;A<R;A++){const L=Array.isArray(M[A])?M[A]:[M[A]];for(let D=0,B=L.length;D<B;D++){const I=L[D],O=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,H=O.length;Y<H;Y++){const V=O[Y],z=h(V),G=E%C,Z=G%z.boundary,ae=G+Z;E+=Z,ae!==0&&C-ae<z.storage&&(E+=C-ae),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=z.storage}}}const _=E%C;return _>0&&(E+=C-_),y.__size=E,y.__cache={},this}function h(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",y),M}function x(y){const M=y.target;M.removeEventListener("dispose",x);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function S(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:S}}const oI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yi=null;function aI(){return yi===null&&(yi=new $R(oI,16,16,Cs,Ii),yi.name="DFG_LUT",yi.minFilter=cn,yi.magFilter=cn,yi.wrapS=Ti,yi.wrapT=Ti,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}class lI{constructor(e={}){const{canvas:n=bR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Dn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=p,m=new Set([rg,ig,ng]),h=new Set([Dn,Di,sl,ol,eg,tg]),x=new Uint32Array(4),S=new Int32Array(4),y=new $;let M=null,E=null;const C=[],_=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,D=null,B=null,I=null,O=null;this._outputColorSpace=Wn;let Y=0,H=0,V=null,z=-1,G=null;const Z=new At,ae=new At;let ve=null;const Ue=new Je(0);let Ie=0,Ne=n.width,K=n.height,te=1,Se=null,Fe=null;const xe=new At(0,0,Ne,K),ze=new At(0,0,Ne,K);let st=!1;const Be=new lg;let Ve=!1,ot=!1;const He=new Rt,at=new $,wt=new At,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function re(){return V===null?te:1}let N=i;function it(T,F){return n.getContext(T,F)}let We,P,b,k,W,Q,le,ce,J,ne,ue,Re,pe,de,Pe,De,Ge,U,fe,ee,he,ye,ie;try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zm}`),n.addEventListener("webglcontextlost",xt,!1),n.addEventListener("webglcontextrestored",lt,!1),n.addEventListener("webglcontextcreationerror",ei,!1),N===null){const F="webgl2";if(N=it(F,T),N===null)throw it(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(T){throw n.removeEventListener("webglcontextlost",xt,!1),n.removeEventListener("webglcontextrestored",lt,!1),n.removeEventListener("webglcontextcreationerror",ei,!1),rt("WebGLRenderer: "+T.message),T}function Le(){We=new aN(N),We.init(),he=new QD(N,We),P=new ZL(N,We,e,he),b=new KD(N,We),P.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),B=N.createFramebuffer(),I=N.createFramebuffer(),O=N.createFramebuffer(),k=new uN(N),W=new UD,Q=new ZD(N,We,b,W,P,he,k),le=new oN(R),ce=new fP(N),ye=new qL(N,ce),J=new lN(N,ce,k,ye),ne=new fN(N,J,ce,ye,k),U=new dN(N,P,Q),Pe=new QL(W),ue=new FD(R,le,We,P,ye,Pe),Re=new rI(R,W),pe=new OD,de=new WD(We),Ge=new YL(R,le,b,ne,g,l),De=new qD(R,ne,P),ie=new sI(N,k,P,b),fe=new KL(N,We,k),ee=new cN(N,We,k),k.programs=ue.programs,R.capabilities=P,R.extensions=We,R.properties=W,R.renderLists=pe,R.shadowMap=De,R.state=b,R.info=k}v!==Dn&&(A=new pN(v,n.width,n.height,a,r,s));const Ae=new nI(R,N);this.xr=Ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=We.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=We.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(Ne,K,!1))},this.getSize=function(T){return T.set(Ne,K)},this.setSize=function(T,F,q=!0){if(Ae.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=T,K=F,n.width=Math.floor(T*te),n.height=Math.floor(F*te),q===!0&&(n.style.width=T+"px",n.style.height=F+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Ne*te,K*te).floor()},this.setDrawingBufferSize=function(T,F,q){Ne=T,K=F,te=q,n.width=Math.floor(T*q),n.height=Math.floor(F*q),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(v===Dn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Z)},this.getViewport=function(T){return T.copy(xe)},this.setViewport=function(T,F,q,j){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,F,q,j),b.viewport(Z.copy(xe).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(ze)},this.setScissor=function(T,F,q,j){T.isVector4?ze.set(T.x,T.y,T.z,T.w):ze.set(T,F,q,j),b.scissor(ae.copy(ze).multiplyScalar(te).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(T){b.setScissorTest(st=T)},this.setOpaqueSort=function(T){Se=T},this.setTransparentSort=function(T){Fe=T},this.getClearColor=function(T){return T.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,q=!0){let j=0;if(T){let X=!1;if(V!==null){const _e=V.texture.format;X=m.has(_e)}if(X){const _e=V.texture.type,Me=h.has(_e),ge=Ge.getClearColor(),Ee=Ge.getClearAlpha(),Ce=ge.r,je=ge.g,Ye=ge.b;Me?(x[0]=Ce,x[1]=je,x[2]=Ye,x[3]=Ee,N.clearBufferuiv(N.COLOR,0,x)):(S[0]=Ce,S[1]=je,S[2]=Ye,S[3]=Ee,N.clearBufferiv(N.COLOR,0,S))}else j|=N.COLOR_BUFFER_BIT}F&&(j|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){n.removeEventListener("webglcontextlost",xt,!1),n.removeEventListener("webglcontextrestored",lt,!1),n.removeEventListener("webglcontextcreationerror",ei,!1),Ge.dispose(),pe.dispose(),de.dispose(),W.dispose(),le.dispose(),ne.dispose(),ye.dispose(),ie.dispose(),ue.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",wg),Ae.removeEventListener("sessionend",Eg),$r.stop()};function xt(T){T.preventDefault(),u_("WebGLRenderer: Context Lost."),L=!0}function lt(){u_("WebGLRenderer: Context Restored."),L=!1;const T=k.autoReset,F=De.enabled,q=De.autoUpdate,j=De.needsUpdate,X=De.type;Le(),k.autoReset=T,De.enabled=F,De.autoUpdate=q,De.needsUpdate=j,De.type=X}function ei(T){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function mi(T){const F=T.target;F.removeEventListener("dispose",mi),MM(F)}function MM(T){wM(T),W.remove(T)}function wM(T){const F=W.get(T).programs;F!==void 0&&(F.forEach(function(q){ue.releaseProgram(q)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,q,j,X,_e){F===null&&(F=kt);const Me=X.isMesh&&X.matrixWorld.determinantAffine()<0,ge=AM(T,F,q,j,X);b.setMaterial(j,Me);let Ee=q.index,Ce=1;if(j.wireframe===!0){if(Ee=J.getWireframeAttribute(q),Ee===void 0)return;Ce=2}const je=q.drawRange,Ye=q.attributes.position;let Te=je.start*Ce,ct=(je.start+je.count)*Ce;_e!==null&&(Te=Math.max(Te,_e.start*Ce),ct=Math.min(ct,(_e.start+_e.count)*Ce)),Ee!==null?(Te=Math.max(Te,0),ct=Math.min(ct,Ee.count)):Ye!=null&&(Te=Math.max(Te,0),ct=Math.min(ct,Ye.count));const Ot=ct-Te;if(Ot<0||Ot===1/0)return;ye.setup(X,j,ge,q,Ee);let yt,gt=fe;if(Ee!==null&&(yt=ce.get(Ee),gt=ee,gt.setIndex(yt)),X.isMesh)j.wireframe===!0?(b.setLineWidth(j.wireframeLinewidth*re()),gt.setMode(N.LINES)):gt.setMode(N.TRIANGLES);else if(X.isLine){let nn=j.linewidth;nn===void 0&&(nn=1),b.setLineWidth(nn*re()),X.isLineSegments?gt.setMode(N.LINES):X.isLineLoop?gt.setMode(N.LINE_LOOP):gt.setMode(N.LINE_STRIP)}else X.isPoints?gt.setMode(N.POINTS):X.isSprite&&gt.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(We.get("WEBGL_multi_draw"))gt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const nn=X._multiDrawStarts,be=X._multiDrawCounts,pn=X._multiDrawCount,tt=Ee?ce.get(Ee).bytesPerElement:1,Vn=W.get(j).currentProgram.getUniforms();for(let gi=0;gi<pn;gi++)Vn.setValue(N,"_gl_DrawID",gi),gt.render(nn[gi]/tt,be[gi])}else if(X.isInstancedMesh)gt.renderInstances(Te,Ot,X.count);else if(q.isInstancedBufferGeometry){const nn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,nn);gt.renderInstances(Te,Ot,be)}else gt.render(Te,Ot)};function Mg(T,F,q,j){D!==null&&T.isNodeMaterial&&D.setObject(j,T),Ve===!0&&Pe.setState(T,q,!1),T.transparent===!0&&T.side===li&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,yl(T,F,j),T.side=Ts,T.needsUpdate=!0,yl(T,F,j),T.side=li):yl(T,F,j)}this.compile=function(T,F,q=null){q===null&&(q=T),D!==null&&D.renderStart(T,F,q),E=de.get(q),E.init(F),_.push(E),q.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),T!==q&&T.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),ot=this.localClippingEnabled,Ve=Pe.init(this.clippingPlanes,ot),Ve===!0&&Pe.setGlobalState(this.clippingPlanes,F),D!==null&&De.render(E.state.shadowsArray,q,F);const j=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const _e=X.material;if(_e)if(Array.isArray(_e))for(let Me=0;Me<_e.length;Me++){const ge=_e[Me];Mg(ge,q,F,X),j.add(ge)}else Mg(_e,q,F,X),j.add(_e)}),E=_.pop(),D!==null&&D.renderEnd(),j},this.compileAsync=function(T,F,q=null){const j=this.compile(T,F,q);return new Promise(X=>{function _e(){if(j.forEach(function(Me){const Ee=W.get(Me).currentProgram;(Ee===void 0||Ee.isReady())&&j.delete(Me)}),j.size===0){X(T);return}setTimeout(_e,10)}We.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let gd=null;function EM(T){gd&&gd(T)}function wg(){$r.stop()}function Eg(){$r.start()}const $r=new Yb;$r.setAnimationLoop(EM),typeof self<"u"&&$r.setContext(self),this.setAnimationLoop=function(T){gd=T,Ae.setAnimationLoop(T),T===null?$r.stop():$r.start()},Ae.addEventListener("sessionstart",wg),Ae.addEventListener("sessionend",Eg),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(T,F);const q=Ae.enabled===!0&&Ae.isPresenting===!0,j=A!==null&&(V===null||q)&&A.begin(R,V);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(F),F=Ae.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,F,V),E=de.get(T,_.length),E.init(F),E.state.textureUnits=Q.getTextureUnits(),_.push(E),He.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Be.setFromProjectionMatrix(He,Ci,F.reversedDepth),ot=this.localClippingEnabled,Ve=Pe.init(this.clippingPlanes,ot),M=pe.get(T,C.length),M.init(),C.push(M),Ae.enabled===!0&&Ae.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&xd(Me,F,-1/0,R.sortObjects)}xd(T,F,0,R.sortObjects),M.finish(),D!==null&&D.updateLights(E.state.lightsArray),R.sortObjects===!0&&M.sort(Se,Fe),ht=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,ht&&Ge.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ve===!0&&Pe.beginShadows();const X=E.state.shadowsArray;if(De.render(X,T,F),Ve===!0&&Pe.endShadows(),(j&&A.hasRenderPass())===!1){const Me=M.opaque,ge=M.transmissive;if(E.setupLights(),F.isArrayCamera){const Ee=F.cameras;if(ge.length>0)for(let Ce=0,je=Ee.length;Ce<je;Ce++){const Ye=Ee[Ce];Ag(Me,ge,T,Ye)}ht&&Ge.render(T);for(let Ce=0,je=Ee.length;Ce<je;Ce++){const Ye=Ee[Ce];Tg(M,T,Ye,Ye.viewport)}}else ge.length>0&&Ag(Me,ge,T,F),ht&&Ge.render(T),Tg(M,T,F)}V!==null&&H===0&&(Q.updateMultisampleRenderTarget(V),Q.updateRenderTargetMipmap(V)),j&&A.end(R),T.isScene===!0&&T.onAfterRender(R,T,F),ye.resetDefaultState(),z=-1,G=null,_.pop(),_.length>0?(E=_[_.length-1],Q.setTextureUnits(E.state.textureUnits),Ve===!0&&Pe.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,D!==null&&D.renderEnd()};function xd(T,F,q,j){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Be)){j&&wt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(He);const Me=ne.update(T),ge=T.material;ge.visible&&M.push(T,Me,ge,q,wt.z,null,F)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Be))){const Me=ne.update(T),ge=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),wt.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),wt.copy(Me.boundingSphere.center)),wt.applyMatrix4(T.matrixWorld).applyMatrix4(He)),Array.isArray(ge)){const Ee=Me.groups;for(let Ce=0,je=Ee.length;Ce<je;Ce++){const Ye=Ee[Ce],Te=ge[Ye.materialIndex];Te&&Te.visible&&M.push(T,Me,Te,q,wt.z,Ye,F)}}else ge.visible&&M.push(T,Me,ge,q,wt.z,null,F)}}const _e=T.children;for(let Me=0,ge=_e.length;Me<ge;Me++)xd(_e[Me],F,q,j)}function Tg(T,F,q,j){const{opaque:X,transmissive:_e,transparent:Me}=T;E.setupLightsView(q),Ve===!0&&Pe.setGlobalState(R.clippingPlanes,q),j&&b.viewport(Z.copy(j)),X.length>0&&vl(X,F,q),_e.length>0&&vl(_e,F,q),Me.length>0&&vl(Me,F,q),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ag(T,F,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[j.id]===void 0){const Te=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[j.id]=new hi(1,1,{generateMipmaps:!0,type:Te?Ii:Dn,minFilter:hs,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const _e=E.state.transmissionRenderTarget[j.id],Me=j.viewport||Z;_e.setSize(Me.z*R.transmissionResolutionScale,Me.w*R.transmissionResolutionScale);const ge=R.getRenderTarget(),Ee=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(_e),R.getClearColor(Ue),Ie=R.getClearAlpha(),Ie<1&&R.setClearColor(16777215,.5),R.clear(),ht&&Ge.render(q);const je=R.toneMapping;R.toneMapping=Li;const Ye=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),E.setupLightsView(j),Ve===!0&&Pe.setGlobalState(R.clippingPlanes,j),vl(T,q,j),Q.updateMultisampleRenderTarget(_e),Q.updateRenderTargetMipmap(_e),We.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let ct=0,Ot=F.length;ct<Ot;ct++){const yt=F[ct],{object:gt,geometry:nn,material:be,group:pn}=yt;if(be.side===li&&gt.layers.test(j.layers)){const tt=be.side;be.side=un,be.needsUpdate=!0,Cg(gt,q,j,nn,be,pn),be.side=tt,be.needsUpdate=!0,Te=!0}}Te===!0&&(Q.updateMultisampleRenderTarget(_e),Q.updateRenderTargetMipmap(_e))}R.setRenderTarget(ge,Ee,Ce),R.setClearColor(Ue,Ie),Ye!==void 0&&(j.viewport=Ye),R.toneMapping=je}function vl(T,F,q){const j=F.isScene===!0?F.overrideMaterial:null;for(let X=0,_e=T.length;X<_e;X++){const Me=T[X],{object:ge,geometry:Ee,group:Ce}=Me;let je=Me.material;je.allowOverride===!0&&j!==null&&(je=j),ge.layers.test(q.layers)&&Cg(ge,F,q,Ee,je,Ce)}}function Cg(T,F,q,j,X,_e){D!==null&&X.isNodeMaterial&&D.setObject(T,X),T.onBeforeRender(R,F,q,j,X,_e),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(R,F,q,j,T,_e),X.transparent===!0&&X.side===li&&X.forceSinglePass===!1?(X.side=un,X.needsUpdate=!0,R.renderBufferDirect(q,F,j,X,T,_e),X.side=Ts,X.needsUpdate=!0,R.renderBufferDirect(q,F,j,X,T,_e),X.side=li):R.renderBufferDirect(q,F,j,X,T,_e),T.onAfterRender(R,F,q,j,X,_e)}function yl(T,F,q){F.isScene!==!0&&(F=kt);const j=W.get(T),X=E.state.lights,_e=E.state.shadowsArray,Me=X.state.version,ge=ue.getParameters(T,X.state,_e,F,q,E.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(ge);let Ce=j.programs;j.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,j.fog=F.fog;const je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;j.envMap=le.get(T.envMap||j.environment,je),j.envMapRotation=j.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",mi),Ce=new Map,j.programs=Ce);let Ye=Ce.get(Ee);if(Ye!==void 0){if(j.currentProgram===Ye&&j.lightsStateVersion===Me)return Pg(T,ge),Ye}else ge.uniforms=ue.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,q,ge),T.onBeforeCompile(ge,R),Ye=ue.acquireProgram(ge,Ee),Ce.set(Ee,Ye),j.uniforms=ge.uniforms;const Te=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=Pe.uniform),Pg(T,ge),j.needsLights=RM(T),j.lightsStateVersion=Me,j.needsLights&&(Te.ambientLightColor.value=X.state.ambient,Te.lightProbe.value=X.state.probe,Te.sunLights.value=X.state.sun,Te.sunLightShadows.value=X.state.sunShadow,Te.directionalLights.value=X.state.directional,Te.directionalLightShadows.value=X.state.directionalShadow,Te.spotLights.value=X.state.spot,Te.spotLightShadows.value=X.state.spotShadow,Te.rectAreaLights.value=X.state.rectArea,Te.ltc_1.value=X.state.rectAreaLTC1,Te.ltc_2.value=X.state.rectAreaLTC2,Te.pointLights.value=X.state.point,Te.pointLightShadows.value=X.state.pointShadow,Te.hemisphereLights.value=X.state.hemi,Te.sunShadowMatrix.value=X.state.sunShadowMatrix,Te.sunShadowCascade.value=X.state.sunShadowCascade,Te.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Te.spotLightMatrix.value=X.state.spotLightMatrix,Te.spotLightMap.value=X.state.spotLightMap,Te.pointShadowMatrix.value=X.state.pointShadowMatrix),j.lightProbeGrid=E.state.lightProbeGridArray.length>0,j.currentProgram=Ye,j.uniformsList=null,Ye}function Rg(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Yc.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Pg(T,F){const q=W.get(T);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function TM(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let q=0,j=T.length;q<j;q++){const X=T[q];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function AM(T,F,q,j,X){F.isScene!==!0&&(F=kt),Q.resetTextureUnits();const _e=F.fog,Me=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?F.environment:null,ge=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Qe.workingColorSpace,Ee=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ce=le.get(j.envMap||Me,Ee),je=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Te=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,Ot=!!q.morphAttributes.color;let yt=Li;j.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(yt=R.toneMapping);const gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nn=gt!==void 0?gt.length:0,be=W.get(j),pn=E.state.lights;if(Ve===!0&&(ot===!0||T!==G)){const _t=T===G&&j.id===z;Pe.setState(j,T,_t)}let tt=!1;j.version===be.__version?(be.needsLights&&be.lightsStateVersion!==pn.state.version||be.outputColorSpace!==ge||X.isBatchedMesh&&be.batching===!1||!X.isBatchedMesh&&be.batching===!0||X.isBatchedMesh&&be.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&be.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&be.instancing===!1||!X.isInstancedMesh&&be.instancing===!0||X.isSkinnedMesh&&be.skinning===!1||!X.isSkinnedMesh&&be.skinning===!0||X.isInstancedMesh&&be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&be.instancingMorph===!1&&X.morphTexture!==null||be.envMap!==Ce||j.fog===!0&&be.fog!==_e||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Pe.numPlanes||be.numIntersection!==Pe.numIntersection)||be.vertexAlphas!==je||be.vertexTangents!==Ye||be.morphTargets!==Te||be.morphNormals!==ct||be.morphColors!==Ot||be.toneMapping!==yt||be.morphTargetsCount!==nn||!!be.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,be.__version=j.version);let Vn=be.currentProgram;tt===!0&&(Vn=yl(j,F,X),D&&j.isNodeMaterial&&D.onUpdateProgram(j,Vn,be));let gi=!1,lr=!1,Ns=!1;const pt=Vn.getUniforms(),It=be.uniforms;if(b.useProgram(Vn.program)&&(gi=!0,lr=!0,Ns=!0),j.id!==z&&(z=j.id,lr=!0),be.needsLights){const _t=TM(E.state.lightProbeGridArray,X);be.lightProbeGrid!==_t&&(be.lightProbeGrid=_t,lr=!0)}if(gi||G!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),pt.setValue(N,"projectionMatrix",T.projectionMatrix),pt.setValue(N,"viewMatrix",T.matrixWorldInverse);const ur=pt.map.cameraPosition;ur!==void 0&&ur.setValue(N,at.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&pt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&pt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,lr=!0,Ns=!0)}if(be.needsLights&&(pn.state.sunShadowMap.length>0&&pt.setValue(N,"sunShadowMap",pn.state.sunShadowMap,Q),pn.state.directionalShadowMap.length>0&&pt.setValue(N,"directionalShadowMap",pn.state.directionalShadowMap,Q),pn.state.spotShadowMap.length>0&&pt.setValue(N,"spotShadowMap",pn.state.spotShadowMap,Q),pn.state.pointShadowMap.length>0&&pt.setValue(N,"pointShadowMap",pn.state.pointShadowMap,Q)),X.isSkinnedMesh){pt.setOptional(N,X,"bindMatrix"),pt.setOptional(N,X,"bindMatrixInverse");const _t=X.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),pt.setValue(N,"boneTexture",_t.boneTexture,Q))}X.isBatchedMesh&&(pt.setOptional(N,X,"batchingTexture"),pt.setValue(N,"batchingTexture",X._matricesTexture,Q),pt.setOptional(N,X,"batchingIdTexture"),pt.setValue(N,"batchingIdTexture",X._indirectTexture,Q),pt.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&pt.setValue(N,"batchingColorTexture",X._colorsTexture,Q));const cr=q.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&U.update(X,q,Vn),(lr||be.receiveShadow!==X.receiveShadow)&&(be.receiveShadow=X.receiveShadow,pt.setValue(N,"receiveShadow",X.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&F.environment!==null&&(It.envMapIntensity.value=F.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=aI()),lr){if(pt.setValue(N,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&CM(It,Ns),_e&&j.fog===!0&&Re.refreshFogUniforms(It,_e),Re.refreshMaterialUniforms(It,j,te,K,E.state.transmissionRenderTarget[T.id]),be.needsLights&&be.lightProbeGrid){const _t=be.lightProbeGrid;It.probesSH.value=_t.texture,It.probesMin.value.copy(_t.boundingBox.min),It.probesMax.value.copy(_t.boundingBox.max),It.probesResolution.value.copy(_t.resolution)}Yc.upload(N,Rg(be),It,Q)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Yc.upload(N,Rg(be),It,Q),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&pt.setValue(N,"center",X.center),pt.setValue(N,"modelViewMatrix",X.modelViewMatrix),pt.setValue(N,"normalMatrix",X.normalMatrix),pt.setValue(N,"modelMatrix",X.matrixWorld),j.uniformsGroups!==void 0){const _t=j.uniformsGroups;for(let ur=0,Ds=_t.length;ur<Ds;ur++){const Ng=_t[ur];ie.update(Ng,Vn),ie.bind(Ng,Vn)}}return Vn}function CM(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function RM(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(T,F,q){const j=W.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),W.get(T.texture).__webglTexture=F,W.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const q=W.get(T);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,q=0){V=T,Y=F,H=q;let j=null,X=!1,_e=!1;if(T){const ge=W.get(T);if(ge.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(N.FRAMEBUFFER,ge.__webglFramebuffer),Z.copy(T.viewport),ae.copy(T.scissor),ve=T.scissorTest,b.viewport(Z),b.scissor(ae),b.setScissorTest(ve),z=-1;return}else if(ge.__webglFramebuffer===void 0)Q.setupRenderTarget(T);else if(ge.__hasExternalTextures)Q.rebindTextures(T,W.get(T.texture).__webglTexture,W.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const je=T.depthTexture;if(ge.__boundDepthTexture!==je){if(je!==null&&W.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(T)}}const Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);const Ce=W.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[F])?j=Ce[F][q]:j=Ce[F],X=!0):T.samples>0&&Q.useMultisampledRTT(T)===!1?j=W.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?j=Ce[q]:j=Ce,Z.copy(T.viewport),ae.copy(T.scissor),ve=T.scissorTest}else Z.copy(xe).multiplyScalar(te).floor(),ae.copy(ze).multiplyScalar(te).floor(),ve=st;if(q!==0&&(j=B),b.bindFramebuffer(N.FRAMEBUFFER,j)&&b.drawBuffers(T,j),b.viewport(Z),b.scissor(ae),b.setScissorTest(ve),X){const ge=W.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,q)}else if(_e){const ge=F;for(let Ee=0;Ee<T.textures.length;Ee++){const Ce=W.get(T.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,q,ge)}}else if(T!==null&&q!==0){const ge=W.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,q)}z=-1};function Lg(T){const F=W.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=P.textureFormatReadable(T.format),F.__typeReadable=P.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,q,j,X,_e,Me,ge=0){if(!(T&&T.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){b.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const Ce=T.textures[ge],je=Ce.format,Ye=Ce.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge);const Te=Lg(Ce);if(Te.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-j&&q>=0&&q<=T.height-X&&N.readPixels(F,q,j,X,he.convert(je),he.convert(Ye),_e)}finally{const Ce=V!==null?W.get(V).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,F,q,j,X,_e,Me,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee)if(F>=0&&F<=T.width-j&&q>=0&&q<=T.height-X){b.bindFramebuffer(N.FRAMEBUFFER,Ee);const Ce=T.textures[ge],je=Ce.format,Ye=Ce.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge);const Te=Lg(Ce);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ct),N.bufferData(N.PIXEL_PACK_BUFFER,_e.byteLength,N.STREAM_READ),N.readPixels(F,q,j,X,he.convert(je),he.convert(Ye),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Ot=V!==null?W.get(V).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,Ot);const yt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await MR(N,yt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ct),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_e),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ct),N.deleteSync(yt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,q=0){const j=Math.pow(2,-q),X=Math.floor(T.image.width*j),_e=Math.floor(T.image.height*j),Me=F!==null?F.x:0,ge=F!==null?F.y:0;Q.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Me,ge,X,_e),b.unbindTexture()},this.copyTextureToTexture=function(T,F,q=null,j=null,X=0,_e=0){let Me,ge,Ee,Ce,je,Ye,Te,ct,Ot;const yt=T.isCompressedTexture?T.mipmaps[_e]:T.image;if(q!==null)Me=q.max.x-q.min.x,ge=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,Ce=q.min.x,je=q.min.y,Ye=q.isBox3?q.min.z:0;else{const It=Math.pow(2,-X);Me=Math.floor(yt.width*It),ge=Math.floor(yt.height*It),T.isDataArrayTexture?Ee=yt.depth:T.isData3DTexture?Ee=Math.floor(yt.depth*It):Ee=1,Ce=0,je=0,Ye=0}j!==null?(Te=j.x,ct=j.y,Ot=j.z):(Te=0,ct=0,Ot=0);const gt=he.convert(F.format),nn=he.convert(F.type);let be;F.isData3DTexture?(Q.setTexture3D(F,0),be=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),be=N.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),be=N.TEXTURE_2D),b.activeTexture(N.TEXTURE0),b.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),b.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),b.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const pn=b.getParameter(N.UNPACK_ROW_LENGTH),tt=b.getParameter(N.UNPACK_IMAGE_HEIGHT),Vn=b.getParameter(N.UNPACK_SKIP_PIXELS),gi=b.getParameter(N.UNPACK_SKIP_ROWS),lr=b.getParameter(N.UNPACK_SKIP_IMAGES);b.pixelStorei(N.UNPACK_ROW_LENGTH,yt.width),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,yt.height),b.pixelStorei(N.UNPACK_SKIP_PIXELS,Ce),b.pixelStorei(N.UNPACK_SKIP_ROWS,je),b.pixelStorei(N.UNPACK_SKIP_IMAGES,Ye);const Ns=T.isDataArrayTexture||T.isData3DTexture,pt=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const It=W.get(T),cr=W.get(F),_t=W.get(It.__renderTarget),ur=W.get(cr.__renderTarget);b.bindFramebuffer(N.READ_FRAMEBUFFER,_t.__webglFramebuffer),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,ur.__webglFramebuffer);for(let Ds=0;Ds<Ee;Ds++)Ns&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(T).__webglTexture,X,Ye+Ds),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(F).__webglTexture,_e,Ot+Ds)),N.blitFramebuffer(Ce,je,Me,ge,Te,ct,Me,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||W.has(T)){const It=W.get(T),cr=W.get(F);b.bindFramebuffer(N.READ_FRAMEBUFFER,I),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,O);for(let _t=0;_t<Ee;_t++)Ns?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.__webglTexture,X,Ye+_t):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,It.__webglTexture,X),pt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,cr.__webglTexture,_e,Ot+_t):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,cr.__webglTexture,_e),X!==0?N.blitFramebuffer(Ce,je,Me,ge,Te,ct,Me,ge,N.COLOR_BUFFER_BIT,N.NEAREST):pt?N.copyTexSubImage3D(be,_e,Te,ct,Ot+_t,Ce,je,Me,ge):N.copyTexSubImage2D(be,_e,Te,ct,Ce,je,Me,ge);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pt?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(be,_e,Te,ct,Ot,Me,ge,Ee,gt,nn,yt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(be,_e,Te,ct,Ot,Me,ge,Ee,gt,yt.data):N.texSubImage3D(be,_e,Te,ct,Ot,Me,ge,Ee,gt,nn,yt):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,_e,Te,ct,Me,ge,gt,nn,yt.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,_e,Te,ct,yt.width,yt.height,gt,yt.data):N.texSubImage2D(N.TEXTURE_2D,_e,Te,ct,Me,ge,gt,nn,yt);b.pixelStorei(N.UNPACK_ROW_LENGTH,pn),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt),b.pixelStorei(N.UNPACK_SKIP_PIXELS,Vn),b.pixelStorei(N.UNPACK_SKIP_ROWS,gi),b.pixelStorei(N.UNPACK_SKIP_IMAGES,lr),_e===0&&F.generateMipmaps&&N.generateMipmap(be),b.unbindTexture()},this.initRenderTarget=function(T){W.get(T).__webglFramebuffer===void 0&&Q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Q.setTextureCube(T,0):T.isData3DTexture?Q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Q.setTexture2DArray(T,0):Q.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){Y=0,H=0,V=null,b.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}const iv={japan:{lat:36.2048,lon:138.2529,label:"Japan (Honshu Region)"},tokyo:{lat:35.6762,lon:139.6503,label:"Tokyo, Japan"},noto:{lat:37.2842,lon:136.9145,label:"Noto Peninsula, Ishikawa, Japan"},ishikawa:{lat:36.5947,lon:136.6256,label:"Ishikawa Prefecture, Japan"},osaka:{lat:34.6937,lon:135.5023,label:"Osaka, Japan"},kyoto:{lat:35.0116,lon:135.7681,label:"Kyoto, Japan"},assam:{lat:26.2006,lon:92.9376,label:"Assam (Brahmaputra Basin), India"},brahmaputra:{lat:26.1856,lon:91.7485,label:"Brahmaputra River, India"},kerala:{lat:10.8505,lon:76.2711,label:"Kerala (Flood Plains), India"},uttarakhand:{lat:30.0668,lon:79.0193,label:"Uttarakhand Himalayas, India"},bihar:{lat:25.0961,lon:85.3131,label:"Bihar (Kosi Floodplain), India"},kosi:{lat:25.4326,lon:87.2711,label:"Kosi River Zone, India"},nepal:{lat:28.3949,lon:84.124,label:"Nepal / Himalayan Arc"},himalaya:{lat:27.9881,lon:86.925,label:"Himalayan Range"},india:{lat:20.5937,lon:78.9629,label:"India (Central Sector)"}};function rv(t,e=[]){const n=(t+" "+e.join(" ")).toLowerCase();for(const[i,r]of Object.entries(iv))if(n.includes(i))return r;return n.includes("जापान")||n.includes("टोक्यो")?iv.japan:null}function cI(t,e,n){const i=(90-t)*(Math.PI/180),r=(e+180)*(Math.PI/180),s=-(n*Math.sin(i)*Math.cos(r)),o=n*Math.sin(i)*Math.sin(r),a=n*Math.cos(i);return new $(s,a,o)}function uI(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,t.height);n.addColorStop(0,"#030816"),n.addColorStop(.5,"#07152f"),n.addColorStop(1,"#030816"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.strokeStyle="rgba(59, 130, 246, 0.12)",e.lineWidth=1;for(let a=-80;a<=80;a+=20){const l=(90-a)/180*t.height;e.beginPath(),e.moveTo(0,l),e.lineTo(t.width,l),e.stroke()}for(let a=-180;a<=180;a+=30){const l=(a+180)/360*t.width;e.beginPath(),e.moveTo(l,0),e.lineTo(l,t.height),e.stroke()}e.fillStyle="#0f2744",e.strokeStyle="#2563eb",e.lineWidth=2;const i=(a,l)=>[(l+180)/360*t.width,(90-a)/180*t.height],r=(a,l="#112d4e",c="#3b82f6")=>{if(a.length===0)return;e.beginPath();const[u,f]=i(a[0][0],a[0][1]);e.moveTo(u,f);for(let d=1;d<a.length;d++){const[p,g]=i(a[d][0],a[d][1]);e.lineTo(p,g)}e.closePath(),e.fillStyle=l,e.fill(),e.strokeStyle=c,e.stroke()};r([[70,25],[72,60],[70,100],[65,140],[60,170],[50,155],[40,130],[30,122],[22,114],[10,105],[8,77],[25,68],[30,60],[35,45],[42,28],[55,10],[65,15]],"#122e4d","#3b82f6"),r([[35,74],[32,79],[28,88],[26,95],[22,89],[15,80],[8,77],[13,74],[20,72],[25,68],[30,70]],"#15365e","#60a5fa"),r([[45,142],[43,145],[40,140],[36,139],[34,135],[32,130],[33,129],[35,133],[38,138],[42,141]],"#1d4ed8","#93c5fd"),r([[35,-5],[37,10],[32,32],[12,51],[-5,40],[-25,33],[-34,18],[-20,12],[5,10],[12,-15],[25,-15]],"#112b46","#2563eb"),r([[70,-165],[72,-130],[60,-85],[50,-55],[30,-80],[25,-80],[15,-90],[20,-105],[32,-117],[48,-125],[60,-145]],"#112b46","#2563eb"),r([[12,-72],[5,-52],[-10,-36],[-22,-41],[-45,-65],[-55,-68],[-40,-73],[-20,-70],[-5,-80]],"#10273f","#2563eb"),r([[-12,130],[-15,145],[-25,153],[-37,150],[-38,140],[-32,115],[-22,114],[-15,124]],"#122c47","#3b82f6"),e.fillStyle="#60a5fa";const s=[[35.6,139.6],[28.6,77.2],[19,72.8],[13,80.2],[22.5,88.3],[26.2,92.9],[31.2,121.4],[39.9,116.4],[51.5,-.1],[40.7,-74],[48.8,2.3],[37.7,-122.4],[1.3,103.8],[34,-118.2]];for(const[a,l]of s){const[c,u]=i(a,l),f=e.createRadialGradient(c,u,0,c,u,8);f.addColorStop(0,"rgba(147, 197, 253, 1)"),f.addColorStop(.4,"rgba(59, 130, 246, 0.6)"),f.addColorStop(1,"rgba(59, 130, 246, 0)"),e.fillStyle=f,e.beginPath(),e.arc(c,u,8,0,Math.PI*2),e.fill()}const o=new KR(t);return o.wrapS=Du,o.wrapT=Ti,o}function dI({targetLocation:t,onResetTarget:e}){const n=oe.useRef(null),[i,r]=oe.useState(null),[s,o]=oe.useState(!1),[a,l]=oe.useState(.85),c=oe.useRef(null),u=oe.useRef(null),f=oe.useRef(null),d=oe.useRef(null),p=oe.useRef(null),g=oe.useRef(null),v=oe.useRef(null),m=oe.useRef(new $(0,0,3.8)),h=oe.useRef(!1);oe.useEffect(()=>{if(!n.current)return;const S=n.current,y=S.clientWidth||window.innerWidth,M=S.clientHeight||window.innerHeight,E=new zR;c.current=E;const C=new $n(45,y/M,.1,1e3);C.position.set(0,0,3.8),u.current=C;const _=new lI({antialias:!0,alpha:!0});_.setSize(y,M),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.toneMapping=Qm,S.appendChild(_.domElement);const A=new aP(990520,1.8);E.add(A);const R=new N_(16777215,2.5);R.position.set(5,3,5),E.add(R);const L=new N_(3900150,1.2);L.position.set(-5,-2,-3),E.add(L);const D=new Cn,B=1200,I=new Float32Array(B*3);for(let k=0;k<B*3;k+=3)I[k]=(Math.random()-.5)*100,I[k+1]=(Math.random()-.5)*100,I[k+2]=(Math.random()-.5)*100;D.setAttribute("position",new Ni(I,3));const O=new Hb({color:9684477,size:.18,transparent:!0,opacity:.75}),Y=new qR(D,O);E.add(Y);const H=new co;f.current=H,E.add(H);const V=1,z=new uo(V,64,64),G=uI(),Z=new Rf({map:G,roughness:.65,metalness:.15,emissive:new Je(661809),emissiveIntensity:.35}),ae=new Xt(z,Z);d.current=ae,H.add(ae);const ve=new uo(V*1.035,48,48),Ue=new ls({color:3718648,transparent:!0,opacity:.18,blending:Ua,side:un}),Ie=new Xt(ve,Ue);H.add(Ie);const Ne=new uo(V*1.15,32,32),K=new ls({color:1920728,transparent:!0,opacity:.08,blending:Ua,side:un}),te=new Xt(Ne,K);H.add(te);const Se=new uo(.025,16,16),Fe=new ls({color:15680580,transparent:!0,opacity:.95}),xe=new Xt(Se,Fe);xe.visible=!1,p.current=xe,H.add(xe);const ze=new dg(.02,.08,32),st=new ls({color:3718648,side:li,transparent:!0,opacity:.8}),Be=new Xt(ze,st);Be.visible=!1,g.current=Be,H.add(Be);const Ve=new co;v.current=Ve;const ot=new Xt(new Or(.06,.06,.09),new Rf({color:14870768,metalness:.9,roughness:.2}));Ve.add(ot);const He=new Rf({color:1981066,metalness:.8,roughness:.3}),at=new Xt(new Or(.18,.005,.07),He);at.position.set(-.13,0,0),Ve.add(at);const wt=new Xt(new Or(.18,.005,.07),He);wt.position.set(.13,0,0),Ve.add(wt);const kt=new ug(.35,.8,16,1,!0),ht=new ls({color:440020,transparent:!0,opacity:.18,blending:Ua,side:li}),re=new Xt(kt,ht);re.rotation.x=Math.PI,re.position.set(0,-.4,0),Ve.add(re),E.add(Ve);let N=0,it=1,We;const P=()=>{if(We=requestAnimationFrame(P),!(window.scrollY>window.innerHeight*.35||s))return;f.current&&!h.current&&(f.current.rotation.y+=8e-4),N+=.012;const W=1.6;Ve.position.set(Math.cos(N)*W,Math.sin(N*1.5)*.4,Math.sin(N)*W),Ve.lookAt(0,0,0),g.current&&g.current.visible&&(it+=.03,it>2.2&&(it=.8),g.current.scale.set(it,it,it),g.current.material.opacity=Math.max(0,.9-(it-.8)/1.4)),u.current&&u.current.position.lerp(m.current,.045),_.render(E,C)};P();const b=()=>{if(!S||!u.current)return;const k=S.clientWidth||window.innerWidth,W=S.clientHeight||window.innerHeight;u.current.aspect=k/W,u.current.updateProjectionMatrix(),_.setSize(k,W)};return window.addEventListener("resize",b),()=>{cancelAnimationFrame(We),window.removeEventListener("resize",b),_.dispose(),S.contains(_.domElement)&&S.removeChild(_.domElement)}},[]),oe.useEffect(()=>{if(!t||!f.current||!p.current||!g.current){t||(m.current.set(0,0,3.8),h.current=!1,p.current&&(p.current.visible=!1),g.current&&(g.current.visible=!1),r(null));return}r(t),h.current=!0;const S=cI(t.lat,t.lon,1);p.current.position.copy(S),p.current.visible=!0,g.current.position.copy(S.clone().multiplyScalar(1.005)),g.current.lookAt(S.clone().multiplyScalar(2)),g.current.visible=!0;const y=new uP().setFromVector3(S),M=-y.theta+Math.PI/2,E=y.phi-Math.PI/2;f.current&&(f.current.rotation.x=E*.5,f.current.rotation.y=M),m.current.set(0,0,t.zoom||1.9);const C=setTimeout(()=>{h.current=!1},1500);return()=>clearTimeout(C)},[t]);const x=oe.useCallback(()=>{m.current.set(0,0,3.8),h.current=!1,p.current&&(p.current.visible=!1),g.current&&(g.current.visible=!1),r(null),e&&e()},[e]);return w.jsxs("div",{className:`earth-background-wrapper ${s?"cinematic-view":""}`,style:{opacity:a},children:[w.jsx("div",{ref:n,className:"earth-canvas-container"}),w.jsxs("div",{className:"earth-hud-panel fade-in",children:[w.jsxs("div",{className:"earth-hud-badge",children:[w.jsx("span",{className:"earth-status-dot"}),w.jsx("span",{className:"earth-hud-title",children:"3D Orbit: Sentinel / Cartosat"})]}),i&&w.jsxs("div",{className:"earth-target-pill fade-in",children:[w.jsx("span",{className:"target-radar-icon",children:"🎯"}),w.jsxs("div",{className:"target-info",children:[w.jsx("span",{className:"target-label",children:i.label}),w.jsxs("span",{className:"target-coords",children:[i.lat>=0?`${i.lat.toFixed(2)}°N`:`${Math.abs(i.lat).toFixed(2)}°S`," ·"," ",i.lon>=0?`${i.lon.toFixed(2)}°E`:`${Math.abs(i.lon).toFixed(2)}°W`]})]}),w.jsx("button",{className:"target-reset-btn",onClick:x,title:"Reset camera to global orbit",children:"✕"})]}),w.jsxs("div",{className:"earth-hud-actions",children:[w.jsx("button",{className:`earth-hud-btn ${s?"active":""}`,onClick:()=>o(!s),title:s?"Exit full cinematic 3D mode":"Enter full cinematic 3D Earth mode",children:s?"🖥 UI Mode":"🎬 Cinematic 3D"}),w.jsx("button",{className:"earth-hud-btn",onClick:x,title:"Reset globe to full orbit",children:"🔄 Reset"}),w.jsx("button",{className:"earth-hud-btn opacity-btn",onClick:()=>l(a===.85?.45:.85),title:"Toggle background brightness",children:a===.85?"💡 Dim":"✨ Bright"})]})]}),w.jsx("style",{children:`
        .earth-background-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          transition: opacity 0.4s ease;
          overflow: hidden;
        }
        .earth-canvas-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        /* Cinematic view brings canvas on top with transparent UI pass-through */
        .cinematic-view {
          pointer-events: auto;
          z-index: 50;
          background: rgba(6, 10, 20, 0.4);
          backdrop-filter: blur(2px);
        }
        .earth-hud-panel {
          position: absolute;
          bottom: 1.5rem;
          right: 2rem;
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(13, 20, 36, 0.82);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(59, 130, 246, 0.28);
          border-radius: 999px;
          padding: 6px 14px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.15);
          z-index: 100;
        }
        .earth-hud-badge {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .earth-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseDot 2s infinite ease-in-out;
        }
        .earth-hud-title {
          font-size: 0.75rem;
          letter-spacing: 0.02em;
        }
        .earth-target-pill {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          border-radius: 999px;
          padding: 2px 10px;
        }
        .target-radar-icon {
          font-size: 0.85rem;
        }
        .target-info {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .target-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #fca5a5;
        }
        .target-coords {
          font-size: 0.62rem;
          font-family: var(--font-mono);
          color: #f87171;
        }
        .target-reset-btn {
          background: transparent;
          border: none;
          color: #fca5a5;
          cursor: pointer;
          font-size: 0.7rem;
          padding: 0 2px;
          line-height: 1;
        }
        .earth-hud-actions {
          display: flex;
          gap: 0.35rem;
        }
        .earth-hud-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.18s ease;
          font-family: var(--font-sans);
        }
        .earth-hud-btn:hover {
          background: rgba(59, 130, 246, 0.22);
          border-color: rgba(59, 130, 246, 0.5);
          color: #fff;
        }
        .earth-hud-btn.active {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: #fff;
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
        }
        @media (max-width: 768px) {
          .earth-hud-panel {
            bottom: 0.75rem;
            right: 0.75rem;
            left: 0.75rem;
            justify-content: space-between;
          }
        }
      `})]})}function fI(t){const e=oe.useRef(null);return e.current===null&&(e.current=t()),e.current}const hI=typeof window<"u",pI=hI?oe.useLayoutEffect:oe.useEffect;function mI(t,e){t.indexOf(e)===-1&&t.push(e)}function gI(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const hd=(t,e,n)=>n>e?e:n<t?t:n;let xI=()=>{};const hg={},nM=t=>typeof t=="object"&&t!==null;function _I(t){let e;return()=>(e===void 0&&(e=t()),e)}const pd=t=>t,iM=(...t)=>t.reduce((e,n)=>i=>n(e(i))),pg=(t,e,n)=>{const i=e-t;return i?(n-t)/i:1};class vI{constructor(){this.subscriptions=[]}add(e){return mI(this.subscriptions,e),()=>gI(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const rM=(t,e)=>e?t*(1e3/e):0,wc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function yI(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,f=!1)=>{const p=f&&i?e:n;return u&&s.add(c),p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0;const u=e;e=n,n=u,e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const SI=40;function sM(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=wc.reduce((S,y)=>(S[y]=yI(s),S),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:f,preRender:d,render:p,postRender:g}=o,v=()=>{const S=hg.useManualTiming,y=S?r.timestamp:performance.now();n=!1,S||(r.delta=i?1e3/60:Math.max(Math.min(y-r.timestamp,SI),1)),r.timestamp=y,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),f.process(r),d.process(r),p.process(r),g.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(v))},m=()=>{n=!0,i=!0,r.isProcessing||t(v)};return{schedule:wc.reduce((S,y)=>{const M=o[y];return S[y]=(E,C=!1,_=!1)=>(n||m(),M.schedule(E,C,_)),S},{}),cancel:S=>{for(let y=0;y<wc.length;y++)o[wc[y]].cancel(S)},state:r,steps:o}}const{schedule:ho,cancel:Up,state:kp}=sM(typeof requestAnimationFrame<"u"?requestAnimationFrame:pd,!0);let qc;function bI(){qc=void 0}const Kc={now:()=>(qc===void 0&&Kc.set(kp.isProcessing||hg.useManualTiming?kp.timestamp:performance.now()),qc),set:t=>{qc=t,queueMicrotask(bI)}},MI=t=>e=>typeof e=="string"&&e.startsWith(t),wI=MI("var(--"),EI=t=>wI(t)?TI.test(t.split("/*")[0].trim()):!1,TI=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,oM={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},aM={...oM,transform:t=>hd(0,1,t)},ka=t=>Math.round(t*1e5)/1e5,lM=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function AI(t){return t==null}const CI=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,mg=(t,e)=>n=>!!(typeof n=="string"&&CI.test(n)&&n.startsWith(t)||e&&!AI(n)&&Object.prototype.hasOwnProperty.call(n,e)),cM=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(lM);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},RI=t=>hd(0,255,t),kf={...oM,transform:t=>Math.round(RI(t))},ms={test:mg("rgb","red"),parse:cM("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+kf.transform(t)+", "+kf.transform(e)+", "+kf.transform(n)+", "+ka(aM.transform(i))+")"};function PI(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Op={test:mg("#"),parse:PI,transform:ms.transform},LI=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),sv=LI("%"),po={test:mg("hsl","hue"),parse:cM("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+sv.transform(ka(e))+", "+sv.transform(ka(n))+", "+ka(aM.transform(i))+")"},or={test:t=>ms.test(t)||Op.test(t)||po.test(t),parse:t=>ms.test(t)?ms.parse(t):po.test(t)?po.parse(t):Op.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ms.transform(t):po.transform(t),getAnimatableNone:t=>{const e=or.parse(t);return e.alpha=0,or.transform(e)}},NI=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function DI(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(lM))==null?void 0:e.length)||0)+(((n=t.match(NI))==null?void 0:n.length)||0)>0}const uM="number",dM="color",II="var",FI="var(",ov="${}",UI=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function cl(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(UI,l=>(or.test(l)?(i.color.push(s),r.push(dM),n.push(or.parse(l))):l.startsWith(FI)?(i.var.push(s),r.push(II),n.push(l)):(i.number.push(s),r.push(uM),n.push(parseFloat(l))),++s,ov)).split(ov);return{values:n,split:a,indexes:i,types:r}}function kI(t){return cl(t).values}function fM({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const o=e[s];o===uM?r+=ka(i[s]):o===dM?r+=or.transform(i[s]):r+=i[s]}return r}}function OI(t){return fM(cl(t))}const zI=t=>typeof t=="number"?0:or.test(t)?or.getAnimatableNone(t):t,BI=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:zI(t);function VI(t){const e=cl(t);return fM(e)(e.values.map((i,r)=>BI(i,e.split[r])))}const HI={test:DI,parse:kI,createTransformer:OI,getAnimatableNone:VI};function Of(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function GI({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Of(l,a,t+1/3),s=Of(l,a,t),o=Of(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function zu(t,e){return n=>n>0?e:t}const md=(t,e,n)=>t+(e-t)*n,zf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},WI=[Op,ms,po],jI=t=>WI.find(e=>e.test(t));function av(t){const e=jI(t);if(!e)return!1;let n=e.parse(t);return e===po&&(n=GI(n)),n}const lv=(t,e)=>{const n=av(t),i=av(e);if(!n||!i)return zu(t,e);const r={...n};return s=>(r.red=zf(n.red,i.red,s),r.green=zf(n.green,i.green,s),r.blue=zf(n.blue,i.blue,s),r.alpha=md(n.alpha,i.alpha,s),ms.transform(r))},zp=new Set(["none","hidden"]);function XI(t,e){return zp.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function $I(t,e){return n=>md(t,e,n)}function gg(t){return typeof t=="number"?$I:typeof t=="string"?EI(t)?zu:or.test(t)?lv:KI:Array.isArray(t)?hM:typeof t=="object"?or.test(t)?lv:YI:zu}function hM(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>gg(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function YI(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=gg(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function qI(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const KI=(t,e)=>{const n=HI.createTransformer(e),i=cl(t),r=cl(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?zp.has(t)&&!r.values.length||zp.has(e)&&!i.values.length?XI(t,e):iM(hM(qI(i,r),r.values),n):zu(t,e)};function ZI(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?md(t,e,n):gg(t)(t,e)}function QI(t,e,n){const i=[],r=n||hg.mix||ZI,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||pd:e;a=iM(l,a)}i.push(a)}return i}function JI(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(xI(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=QI(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(u<t[f+1]);f++);const d=pg(t[f],t[f+1],u);return a[f](d)};return n?u=>c(hd(t[0],t[s-1],u)):c}function eF(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=pg(0,e,i);t.push(md(n,1,r))}}function tF(t){const e=[0];return eF(e,t.length-1),e}const nF={};function pM(t,e){const n=_I(t);return()=>nF[e]??n()}const mM=pM(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),gM=pM(()=>window.ViewTimeline!==void 0,"viewTimeline"),cv=30,iF=t=>!isNaN(parseFloat(t));class rF{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=Kc.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Kc.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=iF(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new vI);const i=this.events[e].add(n);return e==="change"?()=>{i(),ho.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Kc.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>cv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,cv);return rM(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ec(t,e){return new rF(t,e)}function sF(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const r=document.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}function oF(t){return nM(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Bp,cancel:xM}=sM(queueMicrotask,!1);function aF(t){return nM(t)&&"ownerSVGElement"in t}const Zc=new WeakMap;let xr;const _M=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:aF(i)&&"getBBox"in i?i.getBBox()[e]:i[n],lF=_M("inline","width","offsetWidth"),cF=_M("block","height","offsetHeight");function uF({target:t,borderBoxSize:e}){var n;(n=Zc.get(t))==null||n.forEach(i=>{i(t,{get width(){return lF(t,e)},get height(){return cF(t,e)}})})}function dF(t){t.forEach(uF)}function fF(){typeof ResizeObserver>"u"||(xr=new ResizeObserver(dF))}function hF(t,e){xr||fF();const n=sF(t);return n.forEach(i=>{let r=Zc.get(i);r||(r=new Set,Zc.set(i,r)),r.add(e),xr==null||xr.observe(i)}),()=>{n.forEach(i=>{const r=Zc.get(i);r==null||r.delete(e),r!=null&&r.size||xr==null||xr.unobserve(i)})}}const Qc=new Set;let mo;function pF(){mo=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Qc.forEach(e=>e(t))},window.addEventListener("resize",mo)}function mF(t){return Qc.add(t),mo||pF(),()=>{Qc.delete(t),!Qc.size&&typeof mo=="function"&&(window.removeEventListener("resize",mo),mo=void 0)}}function gF(t,e){return typeof t=="function"?mF(t):hF(t,e)}function vM(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return ho.preUpdate(i,!0),()=>Up(i)}function Bu(t){return typeof window>"u"?!1:t?gM():mM()}const xF=50,uv=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),_F=()=>({time:0,x:uv(),y:uv()}),vF={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function dv(t,e,n,i){const r=n[e],{length:s,position:o}=vF[e],a=r.current,l=n.time;r.current=Math.abs(t[`scroll${o}`]),r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=pg(0,r.scrollLength,r.current);const c=i-l;r.velocity=c>xF?0:rM(r.current-a,c)}function yF(t,e,n){dv(t,"x",e,n),dv(t,"y",e,n),e.time=n}function SF(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(oF(i))n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const Vp={start:0,center:.5,end:1};function fv(t,e,n=0){let i=0;if(t in Vp&&(t=Vp[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const bF=[0,0];function MF(t,e,n,i){let r=Array.isArray(t)?t:bF,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,Vp[t]?t:"0"]),s=fv(r[0],n,i),o=fv(r[1],e),s-o}const va={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},wF={x:0,y:0};function EF(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function TF(t,e,n){const{offset:i=va.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?SF(r,t):wF,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:EF(r),c={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let u=!e[s].interpolate;const f=i.length;for(let d=0;d<f;d++){const p=MF(i[d],c[o],l[o],a[s]);!u&&p!==e[s].interpolatorOffsets[d]&&(u=!0),e[s].offset[d]=p}u&&(e[s].interpolate=JI(e[s].offset,tF(i),{clamp:!1}),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=hd(0,1,e[s].interpolate(e[s].current))}function AF(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function CF(t,e,n,i={}){return{measure:r=>{AF(t,i.target,n),yF(t,n,r),(i.offset||i.target)&&TF(t,n,i)},notify:()=>e(n)}}const qs=new WeakMap,hv=new WeakMap,Bf=new WeakMap,pv=new WeakMap,Tc=new WeakMap,mv=t=>t===document.scrollingElement?window:t;function yM(t,{container:e=document.scrollingElement,trackContentSize:n=!1,...i}={}){if(!e)return pd;let r=Bf.get(e);r||(r=new Set,Bf.set(e,r));const s=_F(),o=CF(e,t,s,i);if(r.add(o),!qs.has(e)){const l=()=>{for(const d of r)d.measure(kp.timestamp);ho.preUpdate(c)},c=()=>{for(const d of r)d.notify()},u=()=>ho.read(l);qs.set(e,u);const f=mv(e);window.addEventListener("resize",u),e!==document.documentElement&&hv.set(e,gF(e,u)),f.addEventListener("scroll",u),u()}if(n&&!Tc.has(e)){const l=qs.get(e),c={width:e.scrollWidth,height:e.scrollHeight};pv.set(e,c);const u=()=>{const d=e.scrollWidth,p=e.scrollHeight;(c.width!==d||c.height!==p)&&(l(),c.width=d,c.height=p)},f=ho.read(u,!0);Tc.set(e,f)}const a=qs.get(e);return ho.read(a,!1,!0),()=>{var f;Up(a);const l=Bf.get(e);if(!l||(l.delete(o),l.size))return;const c=qs.get(e);qs.delete(e),c&&(mv(e).removeEventListener("scroll",c),(f=hv.get(e))==null||f(),window.removeEventListener("resize",c));const u=Tc.get(e);u&&(Up(u),Tc.delete(e)),pv.delete(e)}}const RF=[[va.Enter,"entry"],[va.Exit,"exit"],[va.Any,"cover"],[va.All,"contain"]],gv={start:0,end:1};function PF(t){const e=t.trim().split(/\s+/);if(e.length!==2)return;const n=gv[e[0]],i=gv[e[1]];if(!(n===void 0||i===void 0))return[n,i]}function LF(t){if(t.length!==2)return;const e=[];for(const n of t)if(Array.isArray(n))e.push(n);else if(typeof n=="string"){const i=PF(n);if(!i)return;e.push(i)}else return;return e}function NF(t,e){const n=LF(t);if(!n)return!1;for(let i=0;i<2;i++){const r=n[i],s=e[i];if(r[0]!==s[0]||r[1]!==s[1])return!1}return!0}function xg(t){if(!t)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[e,n]of RF)if(NF(t,e))return{rangeStart:`${n} 0%`,rangeEnd:`${n} 100%`}}const xv=new Map;function _v(t){const e={value:0},n=yM(i=>{e.value=i[t.axis].progress*100},t);return{currentTime:e,cancel:n}}function SM({source:t,container:e,...n}){const{axis:i}=n;t&&(e=t);let r=xv.get(e);r||(r=new Map,xv.set(e,r));const s=n.target??"self";let o=r.get(s);o||(o={},r.set(s,o));const a=i+(n.offset??[]).join(",");return o[a]||(n.target&&Bu(n.target)?xg(n.offset)?o[a]=new ViewTimeline({subject:n.target,axis:i}):o[a]=_v({container:e,...n}):Bu()?o[a]=new ScrollTimeline({source:e,axis:i}):o[a]=_v({container:e,...n})),o[a]}function DF(t,e){const n=SM(e),i=e.target?xg(e.offset):void 0,r=e.target?Bu(e.target)&&!!i:Bu();return t.attachTimeline({timeline:r?n:void 0,...i&&r&&{rangeStart:i.rangeStart,rangeEnd:i.rangeEnd},observe:s=>(s.pause(),vM(o=>{s.time=s.iterationDuration*o},n))})}function IF(t){return t&&(t.target||t.offset)}function FF(t){return t.length===2}function UF(t,e){return FF(t)||IF(e)?yM(n=>{t(n[e.axis].progress,n)},e):vM(t,SM(e))}function bM(t,{axis:e="y",container:n=document.scrollingElement,...i}={}){if(!n)return pd;const r={axis:e,container:n,...i};return typeof t=="function"?UF(t,r):DF(t,r)}const kF=()=>({scrollX:Ec(0),scrollY:Ec(0),scrollXProgress:Ec(0),scrollYProgress:Ec(0)}),go=t=>t?!t.current:!1;function vv(t,e,n,i){return{factory:r=>{let s;const o=()=>{if(go(n)||go(i)){Bp.read(o);return}s=bM(r,{...e,axis:t,container:(n==null?void 0:n.current)||void 0,target:(i==null?void 0:i.current)||void 0})};return Bp.read(o),()=>{xM(o),s==null||s()}},times:[0,1],keyframes:[0,1],ease:r=>r,duration:1}}function OF(t,e){return typeof window>"u"?!1:t?gM()&&!!xg(e):mM()}function zF({container:t,target:e,...n}={}){const i=fI(kF);OF(e,n.offset)&&(i.scrollXProgress.accelerate=vv("x",n,t,e),i.scrollYProgress.accelerate=vv("y",n,t,e));const r=oe.useRef(null),s=oe.useRef(!1),o=oe.useCallback(()=>(r.current=bM((a,{x:l,y:c})=>{i.scrollX.set(l.current),i.scrollXProgress.set(l.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...n,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var a;(a=r.current)==null||a.call(r)}),[t,e,JSON.stringify(n.offset)]);return pI(()=>{if(s.current=!1,go(t)||go(e)){s.current=!0;return}else return o()},[o]),oe.useEffect(()=>{if(!s.current)return;let a;const l=()=>{const c=go(t),u=go(e);!c&&!u&&(a=o())};return Bp.read(l),()=>{xM(l),a==null||a()}},[o]),i}const is=360,BF=1,VF="/SATQUERY-SEQUENCE/sat_",HF=".webp";function GF(t){return`${VF}${String(t).padStart(3,"0")}${HF}`}function WF({progress:t}){const e=Math.round(t*100),n=54,i=2*Math.PI*n;return w.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#030712",zIndex:50},children:[w.jsxs("div",{style:{position:"relative",width:"128px",height:"128px",marginBottom:"24px"},children:[w.jsxs("svg",{style:{width:"100%",height:"100%",transform:"rotate(-90deg)"},viewBox:"0 0 120 120",children:[w.jsx("circle",{cx:"60",cy:"60",r:n,fill:"none",stroke:"rgba(0,240,255,0.08)",strokeWidth:"3"}),w.jsx("circle",{cx:"60",cy:"60",r:n,fill:"none",stroke:"#00f0ff",strokeWidth:"3",strokeDasharray:i,strokeDashoffset:i*(1-t),strokeLinecap:"round",style:{transition:"stroke-dashoffset 0.1s linear"}})]}),w.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:w.jsxs("span",{style:{color:"#67e8f9",fontFamily:"monospace",fontSize:"1.25rem",fontWeight:"bold"},children:[e,"%"]})})]}),w.jsx("p",{style:{fontFamily:"monospace",color:"#22d3ee",fontSize:"11px",letterSpacing:"0.3em",textTransform:"uppercase"},children:"INITIALIZING ORBITAL LINK..."}),w.jsx("div",{style:{marginTop:"16px",width:"192px",height:"1px",backgroundColor:"rgba(22, 78, 99, 0.4)",overflow:"hidden"},children:w.jsx("div",{style:{height:"100%",backgroundColor:"rgba(34, 211, 238, 0.6)",width:`${e}%`,transition:"width 0.1s linear"}})})]})}function jF(){const t=oe.useRef(null),e=oe.useRef(null),n=oe.useRef(null),i=oe.useRef(null),r=oe.useRef([]),s=oe.useRef(0);oe.useRef(null);const[o,a]=oe.useState(0),[l,c]=oe.useState(!1),{scrollYProgress:u}=zF({target:t}),f=oe.useCallback(p=>{const g=e.current,v=Math.max(0,Math.min(is-1,p)),m=r.current[v];if(!g||!m||!m.complete||m.naturalWidth===0)return;i.current||(i.current=g.getContext("2d"));const h=i.current;if(!h)return;const x=g.clientWidth,S=g.clientHeight,y=Math.min(x/m.naturalWidth,S/m.naturalHeight),M=m.naturalWidth*y,E=m.naturalHeight*y;h.clearRect(0,0,x,S),h.drawImage(m,(x-M)/2,(S-E)/2,M,E);const C=h.createRadialGradient(x/2,S/2,S*.38,x/2,S/2,S*.85);C.addColorStop(0,"rgba(3,7,18,0)"),C.addColorStop(1,"rgba(3,7,18,0.40)"),h.fillStyle=C,h.fillRect(0,0,x,S)},[]),d=oe.useCallback(()=>{const p=e.current;if(!p)return;const g=window.devicePixelRatio||1;p.width=window.innerWidth*g,p.height=window.innerHeight*g,p.style.width=`${window.innerWidth}px`,p.style.height=`${window.innerHeight}px`;const v=p.getContext("2d");v&&(v.setTransform(1,0,0,1,0,0),v.scale(g,g),v.imageSmoothingEnabled=!0,v.imageSmoothingQuality="high",i.current=v),f(s.current)},[f]);return oe.useEffect(()=>{let p=0;const g=[];for(let v=0;v<is;v++){const m=new Image;m.decoding="async",m.src=GF(BF+v);const h=()=>{p++,a(p/is),p===is&&c(!0)};m.onload=h,m.onerror=h,g.push(m)}r.current=g},[]),oe.useEffect(()=>(d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)),[d]),oe.useEffect(()=>{l&&(d(),f(0))},[l,d,f]),oe.useEffect(()=>{if(!l)return;let p=0,g=0,v=null;const m=()=>{const S=t.current;if(!S)return;const y=S.getBoundingClientRect(),M=S.offsetHeight-window.innerHeight;if(M<=0)return;const E=-y.top;p=Math.max(0,Math.min(1,E/M))},h=()=>{const S=p-g;Math.abs(S)>1e-5?g+=S*.18:g=p;const y=Math.round(g*(is-1)),M=Math.max(0,Math.min(is-1,y));if(M!==s.current&&(s.current=M,f(M)),n.current){const E=Math.max(0,Math.min(1,(g-.92)/.08));n.current.style.opacity=String(E)}v=requestAnimationFrame(h)};m(),g=p;const x=Math.round(g*(is-1));return s.current=x,f(x),window.addEventListener("scroll",m,{passive:!0}),v=requestAnimationFrame(h),()=>{window.removeEventListener("scroll",m),v!==null&&cancelAnimationFrame(v)}},[l,f]),w.jsx("div",{ref:t,style:{height:"450vh",position:"relative",width:"100%"},children:w.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",width:"100vw",overflow:"hidden",backgroundColor:"#030712",zIndex:10},children:[w.jsx("canvas",{ref:e,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}),!l&&w.jsx(WF,{progress:o}),w.jsx("div",{ref:n,style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, transparent 0%, rgba(3,7,18,0.4) 60%, rgba(6,10,20,1) 100%)",pointerEvents:"none",opacity:0,transition:"opacity 0.05s linear"}})]})})}function XF(){const t=oe.useRef(null),e=oe.useRef(null),n=oe.useRef({x:.5,y:.5,targetX:.5,targetY:.5});return oe.useEffect(()=>{const i=p=>{const g=p.clientX/window.innerWidth,v=p.clientY/window.innerHeight;n.current.targetX=g,n.current.targetY=v};window.addEventListener("mousemove",i);const r=e.current;if(!r)return;const s=r.getContext("2d");if(!s)return;let o,a=r.width=window.innerWidth,l=r.height=window.innerHeight;const c=()=>{r&&(a=r.width=window.innerWidth,l=r.height=window.innerHeight)};window.addEventListener("resize",c);const f=Array.from({length:70},()=>({x:Math.random()*a,y:Math.random()*l,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,size:Math.random()*2+1,color:Math.random()>.4?"#38bdf8":"#818cf8",alpha:Math.random()*.6+.2,depth:Math.random()*.8+.2})),d=()=>{n.current.x+=(n.current.targetX-n.current.x)*.08,n.current.y+=(n.current.targetY-n.current.y)*.08;const p=(n.current.x-.5)*60,g=(n.current.y-.5)*60;t.current&&(t.current.style.transform=`translate3d(${-p*.5}px, ${-g*.5}px, 0) scale(1.05)`),s.clearRect(0,0,a,l);for(let v=0;v<f.length;v++){const m=f[v];m.x+=m.vx,m.y+=m.vy,m.x<0&&(m.x=a),m.x>a&&(m.x=0),m.y<0&&(m.y=l),m.y>l&&(m.y=0);const h=m.x+p*m.depth,x=m.y+g*m.depth;s.beginPath(),s.arc(h,x,m.size,0,Math.PI*2),s.fillStyle=m.color,s.globalAlpha=m.alpha,s.shadowColor=m.color,s.shadowBlur=8,s.fill(),s.shadowBlur=0;for(let S=v+1;S<f.length;S++){const y=f[S],M=y.x+p*y.depth,E=y.y+g*y.depth,C=Math.hypot(h-M,x-E);C<110&&(s.beginPath(),s.moveTo(h,x),s.lineTo(M,E),s.strokeStyle="#38bdf8",s.globalAlpha=(1-C/110)*.18,s.lineWidth=.8,s.stroke())}}s.globalAlpha=1,o=requestAnimationFrame(d)};return o=requestAnimationFrame(d),()=>{window.removeEventListener("mousemove",i),window.removeEventListener("resize",c),cancelAnimationFrame(o)}},[]),w.jsxs("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0},children:[w.jsx("div",{ref:t,style:{position:"absolute",inset:"-5%",width:"110%",height:"110%",backgroundImage:`
            radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 80% 60%, rgba(139, 92, 246, 0.16) 0%, transparent 50%),
            radial-gradient(circle at 50% 85%, rgba(6, 182, 212, 0.12) 0%, transparent 45%),
            radial-gradient(circle at 70% 15%, rgba(59, 130, 246, 0.12) 0%, transparent 40%)
          `,backgroundSize:"cover",transition:"transform 0.1s ease-out",opacity:.85}}),w.jsx("canvas",{ref:e,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",opacity:.75}})]})}async function $F(t){const e=await fetch("/query/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){const n=await e.json().catch(()=>({detail:e.statusText}));throw new Error(n.detail??"API error")}return e.json()}function YF(){const[t,e]=oe.useState(null),[n,i]=oe.useState(!1),[r,s]=oe.useState(null),[o,a]=oe.useState(null),l=oe.useCallback(async c=>{var f;i(!0),s(null),e(null);const u=rv(c.question);u&&a(u);try{const d=await $F(c);e(d);const p=((f=d.earthquery_spec)==null?void 0:f.extracted_entities)||[],g=rv(d.question,p);g&&a(g)}catch(d){s(d instanceof Error?d.message:"Unknown error")}finally{i(!1)}},[]);return w.jsxs("div",{className:"app bg-[#030712]",style:{backgroundColor:"#030712"},children:[w.jsx(jF,{}),w.jsxs("div",{className:"dashboard-container",id:"dashboard-section",style:{position:"relative",minHeight:"100vh",width:"100%",backgroundColor:"#030712",overflow:"hidden"},children:[w.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"180px",background:"linear-gradient(to bottom, #030712 0%, rgba(3,7,18,0.85) 40%, transparent 100%)",pointerEvents:"none",zIndex:15}}),w.jsx("div",{style:{position:"relative",zIndex:25,display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"2rem",paddingBottom:"0.5rem"},children:w.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.6rem",padding:"6px 18px",borderRadius:"999px",background:"rgba(6, 182, 212, 0.08)",border:"1px solid rgba(6, 182, 212, 0.3)",backdropFilter:"blur(12px)",boxShadow:"0 0 25px rgba(6, 182, 212, 0.15)"},children:[w.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#06b6d4",boxShadow:"0 0 10px #06b6d4",display:"inline-block"}}),w.jsx("span",{style:{fontFamily:"monospace",fontSize:"0.74rem",letterSpacing:"0.2em",color:"#67e8f9",textTransform:"uppercase",fontWeight:600},children:"SURFACE TELEMETRY LOCKED · SATELLITE COPILOT ACTIVE"})]})}),w.jsx(XF,{}),w.jsx(dI,{targetLocation:o,onResetTarget:()=>a(null)}),w.jsx("nav",{className:"navbar",id:"main-navbar",style:{position:"relative",zIndex:20},children:w.jsxs("div",{className:"navbar-inner",children:[w.jsxs("div",{className:"nav-brand",children:[w.jsx("div",{className:"nav-logo",children:"🛰"}),w.jsxs("div",{children:[w.jsx("h1",{className:"nav-title gradient-text",children:"SatQuery AI"}),w.jsx("p",{className:"nav-subtitle",children:"Interactive Vision-Language Assistant for Remote Sensing"})]})]}),w.jsxs("div",{className:"nav-badges",children:[w.jsx("span",{className:"badge badge-blue",children:"SIH26167"}),w.jsx("span",{className:"badge badge-cyan",children:"ISRO"}),w.jsx("span",{className:"badge badge-purple",children:"Smart India Hackathon 2026"})]})]})}),w.jsxs("header",{className:"hero",id:"hero-section",style:{position:"relative",zIndex:10},children:[w.jsx("div",{className:"hero-orb hero-orb-1"}),w.jsx("div",{className:"hero-orb hero-orb-2"}),w.jsx("div",{className:"hero-orb hero-orb-3"}),w.jsxs("div",{className:"hero-content",children:[w.jsxs("div",{className:"hero-badge fade-in",children:[w.jsx("span",{children:"🏆"}),w.jsx("span",{children:"ISRO Problem Statement SIH26167"})]}),w.jsxs("h1",{className:"hero-title fade-in-up",style:{animationDelay:"0.05s"},children:["Ask anything about",w.jsx("br",{}),w.jsx("span",{className:"gradient-text",children:"satellite imagery"})]}),w.jsx("p",{className:"hero-desc fade-in-up",style:{animationDelay:"0.1s"},children:"Multimodal VQA · Change Detection · SAR-Optical Fusion · Visual Grounding · Agentic Pipeline"}),w.jsx("div",{className:"hero-pills fade-in-up",style:{animationDelay:"0.15s"},children:["BLIP-2 VQA","ChangeFormer","SAM Grounding","GF-SARNet","6-Component Confidence","Voice Input"].map(c=>w.jsx("span",{className:"hero-pill",children:c},c))})]})]}),w.jsxs("main",{className:"workspace",id:"main-workspace",style:{position:"relative",zIndex:10},children:[w.jsx("section",{className:"workspace-left","aria-label":"Query input",children:w.jsx(cE,{onAnalyze:l,loading:n})}),w.jsxs("section",{className:"workspace-right","aria-label":"Analysis results",children:[n&&w.jsx(qF,{}),r&&w.jsx(KF,{message:r}),t&&!n&&w.jsx(B2,{response:t}),!n&&!r&&!t&&w.jsx(ZF,{})]})]})]}),w.jsx("style",{children:`
        .app { min-height: 100vh; display: flex; flex-direction: column; }
        .dashboard-container { position: relative; }

        /* Navbar */
        .navbar {
          position: sticky; top: 0; z-index: 100;
          background: rgba(6,10,20,0.85); backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-card);
          padding: 0.75rem 2rem;
        }
        .navbar-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; }
        .nav-brand { display: flex; align-items: center; gap: 0.75rem; }
        .nav-logo { font-size: 1.8rem; line-height: 1; }
        .nav-title { font-size: 1.25rem; font-weight: 800; line-height: 1.1; }
        .nav-subtitle { font-size: 0.68rem; color: var(--text-muted); white-space: nowrap; }
        .nav-badges { display: flex; gap: 0.4rem; flex-wrap: wrap; }

        /* Hero */
        .hero {
          position: relative; overflow: hidden;
          padding: 3.5rem 2rem 3rem; text-align: center;
        }
        .hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
        .hero-orb-1 { width: 400px; height: 400px; background: rgba(59,130,246,0.12); top: -100px; left: -100px; }
        .hero-orb-2 { width: 350px; height: 350px; background: rgba(139,92,246,0.10); top: -50px; right: -80px; }
        .hero-orb-3 { width: 300px; height: 300px; background: rgba(6,182,212,0.08); bottom: -80px; left: 50%; transform: translateX(-50%); }
        .hero-content { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: rgba(59,130,246,0.12); border: 1px solid rgba(59,130,246,0.3);
          border-radius: 999px; padding: 5px 16px; font-size: 0.78rem; font-weight: 600;
          color: var(--text-accent); margin-bottom: 1.25rem;
        }
        .hero-title { margin-bottom: 0.8rem; letter-spacing: -0.02em; }
        .hero-desc { font-size: 0.92rem; color: var(--text-muted); margin-bottom: 1.25rem; }
        .hero-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.4rem; }
        .hero-pill {
          padding: 3px 12px; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 999px;
          font-size: 0.72rem; font-weight: 600; color: var(--text-secondary);
        }

        /* Workspace — Half screen 50/50 layout */
        .workspace {
          flex: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
          gap: 2rem;
          padding: 1.5rem 2rem 4rem;
          max-width: 1750px;
          margin: 0 auto;
          width: 96%;
          align-items: start;
        }
        .workspace-left {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: sticky;
          top: 80px;
          min-width: 0;
        }
        .workspace-right {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (max-width: 1200px) {
          .workspace { grid-template-columns: 1fr; max-width: 1000px; }
          .workspace-left { position: static; }
        }
        @media (max-width: 600px) {
          .navbar { padding: 0.6rem 1rem; }
          .workspace { padding: 1rem; width: 100%; }
          .hero { padding: 2rem 1rem; }
          .nav-badges .badge:nth-child(n+3) { display: none; }
        }
      `})]})}function qF(){return w.jsxs("div",{className:"loading-skeleton fade-in",style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[[200,120,160,280,220].map((t,e)=>w.jsx("div",{className:"skeleton",style:{height:`${t}px`,borderRadius:"var(--radius-lg)"}},e)),w.jsxs("div",{className:"loading-label",children:[w.jsx("div",{className:"spinner spinner-lg"}),w.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"Running agentic pipeline…"})]}),w.jsx("style",{children:`
        .loading-label { display: flex; align-items: center; justify-content: center; gap: 1rem; padding: 1.5rem; }
      `})]})}function KF({message:t}){return w.jsxs("div",{className:"card fade-in",style:{borderLeft:"3px solid var(--accent-danger)"},id:"error-card",children:[w.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[w.jsx("span",{style:{fontSize:"1.3rem"},children:"⚠"}),w.jsx("p",{className:"section-label",style:{margin:0,color:"var(--accent-danger)"},children:"Pipeline Error"})]}),w.jsx("p",{className:"text-sm",style:{color:"var(--text-secondary)"},children:t}),w.jsxs("p",{className:"text-xs text-muted mt-3",children:["Make sure the backend is running: ",w.jsx("code",{className:"text-mono",children:"uvicorn backend.main:app --reload"})]})]})}function ZF(){return w.jsxs("div",{className:"empty-state fade-in",id:"empty-state",children:[w.jsx("div",{className:"empty-orb",children:"🛰"}),w.jsx("h2",{style:{fontSize:"1.3rem",fontWeight:700,marginBottom:"0.5rem"},children:"Ready to analyze"}),w.jsx("p",{className:"text-secondary",style:{maxWidth:"360px",textAlign:"center",fontSize:"0.9rem"},children:"Type or speak a question about your satellite imagery. Select one of the suggested query types, or upload your own images and ask anything."}),w.jsx("div",{className:"empty-features",children:["🔍 VQA","📝 Caption","📍 Grounding","🔄 Change","📡 SAR+Optical","🎤 Voice"].map(t=>w.jsx("span",{className:"hero-pill",style:{fontSize:"0.78rem"},children:t},t))}),w.jsx("style",{children:`
        .empty-state { display: flex; flex-direction: column; align-items: center; padding: 3rem 2rem; gap: 1rem; }
        .empty-orb { font-size: 4rem; line-height: 1; filter: drop-shadow(0 0 30px rgba(59,130,246,0.4)); }
        .empty-features { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.4rem; margin-top: 0.5rem; }
      `})]})}Vf.createRoot(document.getElementById("root")).render(w.jsx(YM.StrictMode,{children:w.jsx(YF,{})}));
