var Zepto=function(){function t(t){return null==t?String(t):_[W.call(t)]||"object"}function n(n){return"function"==t(n)}function e(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(n){return"object"==t(n)}function o(t){return r(t)&&!e(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){var n=!!t&&"length"in t&&t.length,i=C.type(t);return"function"!=i&&!e(t)&&("array"==i||0===n||"number"==typeof n&&n>0&&n-1 in t)}function u(t){return Z.call(t,function(t){return null!=t})}function c(t){return t.length>0?C.fn.concat.apply([],t):t}function a(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in M?M[t]:M[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,n){return"number"!=typeof n||z[a(t)]?n:n+"px"}function h(t){var n,e;return j[t]||(n=P.createElement(t),P.body.appendChild(n),e=getComputedStyle(n,"").getPropertyValue("display"),n.parentNode.removeChild(n),"none"==e&&(e="block"),j[t]=e),j[t]}function p(t){return"children"in t?$.call(t.children):C.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,n){var e,i=t?t.length:0;for(e=0;i>e;e++)this[e]=t[e];this.length=i,this.selector=n||""}function m(t,n,e){for(x in n)e&&(o(n[x])||K(n[x]))?(o(n[x])&&!o(t[x])&&(t[x]={}),K(n[x])&&!K(t[x])&&(t[x]=[]),m(t[x],n[x],e)):n[x]!==N&&(t[x]=n[x])}function g(t,n){return null==n?C(t):C(t).filter(n)}function v(t,e,i,r){return n(e)?e.call(t,i,r):e}function y(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function w(t,n){var e=t.className||"",i=e&&e.baseVal!==N;return n===N?i?e.baseVal:e:void(i?e.baseVal=n:t.className=n)}function b(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?C.parseJSON(t):t):t}catch(n){return t}}function E(t,n){n(t);for(var e=0,i=t.childNodes.length;i>e;e++)E(t.childNodes[e],n)}var N,x,C,O,S,T,A=[],L=A.concat,Z=A.filter,$=A.slice,P=window.document,j={},M={},z={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},B=/^\s*<(\w+|!)[^>]*>/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,q=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,V=/^(?:body|html)$/i,D=/([A-Z])/g,F=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],H=P.createElement("table"),I=P.createElement("tr"),J={tr:P.createElement("tbody"),tbody:H,thead:H,tfoot:H,td:I,th:I,"*":P.createElement("div")},U=/^[\w-]*$/,_={},W=_.toString,X={},Y=P.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},K=Array.isArray||function(t){return t instanceof Array};return X.matches=function(t,n){if(!n||!t||1!==t.nodeType)return!1;var e=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(e)return e.call(t,n);var i,r=t.parentNode,o=!r;return o&&(r=Y).appendChild(t),i=~X.qsa(r,n).indexOf(t),o&&Y.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,n){return n?n.toUpperCase():""})},T=function(t){return Z.call(t,function(n,e){return t.indexOf(n)==e})},X.fragment=function(t,n,e){var i,r,s;return k.test(t)&&(i=C(P.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(q,"<$1></$2>")),n===N&&(n=B.test(t)&&RegExp.$1),n in J||(n="*"),s=J[n],s.innerHTML=""+t,i=C.each($.call(s.childNodes),function(){s.removeChild(this)})),o(e)&&(r=C(i),C.each(e,function(t,n){F.indexOf(t)>-1?r[t](n):r.attr(t,n)})),i},X.Z=function(t,n){return new d(t,n)},X.isZ=function(t){return t instanceof X.Z},X.init=function(t,e){var i;if(!t)return X.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&B.test(t))i=X.fragment(t,RegExp.$1,e),t=null;else{if(e!==N)return C(e).find(t);i=X.qsa(P,t)}else{if(n(t))return C(P).ready(t);if(X.isZ(t))return t;if(K(t))i=u(t);else if(r(t))i=[t],t=null;else if(B.test(t))i=X.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==N)return C(e).find(t);i=X.qsa(P,t)}}return X.Z(i,t)},C=function(t,n){return X.init(t,n)},C.extend=function(t){var n,e=$.call(arguments,1);return"boolean"==typeof t&&(n=t,t=e.shift()),e.forEach(function(e){m(t,e,n)}),t},X.qsa=function(t,n){var e,i="#"==n[0],r=!i&&"."==n[0],o=i||r?n.slice(1):n,s=U.test(o);return t.getElementById&&s&&i?(e=t.getElementById(o))?[e]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:$.call(s&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(n):t.querySelectorAll(n))},C.contains=P.documentElement.contains?function(t,n){return t!==n&&t.contains(n)}:function(t,n){for(;n&&(n=n.parentNode);)if(n===t)return!0;return!1},C.type=t,C.isFunction=n,C.isWindow=e,C.isArray=K,C.isPlainObject=o,C.isEmptyObject=function(t){var n;for(n in t)return!1;return!0},C.isNumeric=function(t){var n=Number(t),e=typeof t;return null!=t&&"boolean"!=e&&("string"!=e||t.length)&&!isNaN(n)&&isFinite(n)||!1},C.inArray=function(t,n,e){return A.indexOf.call(n,t,e)},C.camelCase=S,C.trim=function(t){return null==t?"":String.prototype.trim.call(t)},C.uuid=0,C.support={},C.expr={},C.noop=function(){},C.map=function(t,n){var e,i,r,o=[];if(s(t))for(i=0;i<t.length;i++)e=n(t[i],i),null!=e&&o.push(e);else for(r in t)e=n(t[r],r),null!=e&&o.push(e);return c(o)},C.each=function(t,n){var e,i;if(s(t)){for(e=0;e<t.length;e++)if(n.call(t[e],e,t[e])===!1)return t}else for(i in t)if(n.call(t[i],i,t[i])===!1)return t;return t},C.grep=function(t,n){return Z.call(t,n)},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,n){_["[object "+n+"]"]=n.toLowerCase()}),C.fn={constructor:X.Z,length:0,forEach:A.forEach,reduce:A.reduce,push:A.push,sort:A.sort,splice:A.splice,indexOf:A.indexOf,concat:function(){var t,n,e=[];for(t=0;t<arguments.length;t++)n=arguments[t],e[t]=X.isZ(n)?n.toArray():n;return L.apply(X.isZ(this)?this.toArray():this,e)},map:function(t){return C(C.map(this,function(n,e){return t.call(n,e,n)}))},slice:function(){return C($.apply(this,arguments))},ready:function(t){if("complete"===P.readyState||"loading"!==P.readyState&&!P.documentElement.doScroll)setTimeout(function(){t(C)},0);else{var n=function(){P.removeEventListener("DOMContentLoaded",n,!1),window.removeEventListener("load",n,!1),t(C)};P.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)}return this},get:function(t){return t===N?$.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return A.every.call(this,function(n,e){return t.call(n,e,n)!==!1}),this},filter:function(t){return n(t)?this.not(this.not(t)):C(Z.call(this,function(n){return X.matches(n,t)}))},add:function(t,n){return C(T(this.concat(C(t,n))))},is:function(t){return"string"==typeof t?this.length>0&&X.matches(this[0],t):t&&this.selector==t.selector},not:function(t){var e=[];if(n(t)&&t.call!==N)this.each(function(n){t.call(this,n)||e.push(this)});else{var i="string"==typeof t?this.filter(t):s(t)&&n(t.item)?$.call(t):C(t);this.forEach(function(t){i.indexOf(t)<0&&e.push(t)})}return C(e)},has:function(t){return this.filter(function(){return r(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:C(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:C(t)},find:function(t){var n,e=this;return n=t?"object"==typeof t?C(t).filter(function(){var t=this;return A.some.call(e,function(n){return C.contains(n,t)})}):1==this.length?C(X.qsa(this[0],t)):this.map(function(){return X.qsa(this,t)}):C()},closest:function(t,n){var e=[],r="object"==typeof t&&C(t);return this.each(function(o,s){for(;s&&!(r?r.indexOf(s)>=0:X.matches(s,t));)s=s!==n&&!i(s)&&s.parentNode;s&&e.indexOf(s)<0&&e.push(s)}),C(e)},parents:function(t){for(var n=[],e=this;e.length>0;)e=C.map(e,function(t){return(t=t.parentNode)&&!i(t)&&n.indexOf(t)<0?(n.push(t),t):void 0});return g(n,t)},parent:function(t){return g(T(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||$.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,n){return Z.call(p(n.parentNode),function(t){return t!==n})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(n){return n[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t);if(this[0]&&!e)var i=C(t).get(0),r=i.parentNode||this.length>1;return this.each(function(n){C(this).wrapAll(e?t.call(this,n):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t));for(var n;(n=t.children()).length;)t=n.first();C(t).append(this)}return this},wrapInner:function(t){var e=n(t);return this.each(function(n){var i=C(this),r=i.contents(),o=e?t.call(this,n):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=C(this);(t===N?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(n){var e=this.innerHTML;C(this).empty().append(v(this,t,n,e))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(n){var e=v(this,t,n,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,n){var e;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(r(t))for(x in t)y(this,x,t[x]);else y(this,t,v(this,n,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(e=this[0].getAttribute(t))?e:N},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,n){return t=G[t]||t,"string"!=typeof t||1 in arguments?this.each(function(e){if(r(t))for(x in t)this[x]=t[x];else this[t]=v(this,n,e,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=G[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var e="data-"+t.replace(D,"-$1").toLowerCase(),i=1 in arguments?this.attr(e,n):this.attr(e);return null!==i?b(i):N},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(n){this.value=v(this,t,n,this.value)})):this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(n){var e=C(this),i=v(this,t,n,e.offset()),r=e.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==e.css("position")&&(o.position="relative"),e.css(o)});if(!this.length)return null;if(P.documentElement!==this[0]&&!C.contains(P.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+window.pageXOffset,top:n.top+window.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(n,e){if(arguments.length<2){var i=this[0];if("string"==typeof n){if(!i)return;return i.style[S(n)]||getComputedStyle(i,"").getPropertyValue(n)}if(K(n)){if(!i)return;var r={},o=getComputedStyle(i,"");return C.each(n,function(t,n){r[n]=i.style[S(n)]||o.getPropertyValue(n)}),r}}var s="";if("string"==t(n))e||0===e?s=a(n)+":"+f(n,e):this.each(function(){this.style.removeProperty(a(n))});else for(x in n)n[x]||0===n[x]?s+=a(x)+":"+f(x,n[x])+";":this.each(function(){this.style.removeProperty(a(x))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?A.some.call(this,function(t){return this.test(w(t))},l(t)):!1},addClass:function(t){return t?this.each(function(n){if("className"in this){O=[];var e=w(this),i=v(this,t,n,e);i.split(/\s+/g).forEach(function(t){C(this).hasClass(t)||O.push(t)},this),O.length&&w(this,e+(e?" ":"")+O.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===N)return w(this,"");O=w(this),v(this,t,n,O).split(/\s+/g).forEach(function(t){O=O.replace(l(t)," ")}),w(this,O.trim())}})},toggleClass:function(t,n){return t?this.each(function(e){var i=C(this),r=v(this,t,e,w(this));r.split(/\s+/g).forEach(function(t){(n===N?!i.hasClass(t):n)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===N?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===N?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],n=this.offsetParent(),e=this.offset(),i=V.test(n[0].nodeName)?{top:0,left:0}:n.offset();return e.top-=parseFloat(C(t).css("margin-top"))||0,e.left-=parseFloat(C(t).css("margin-left"))||0,i.top+=parseFloat(C(n[0]).css("border-top-width"))||0,i.left+=parseFloat(C(n[0]).css("border-left-width"))||0,{top:e.top-i.top,left:e.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||P.body;t&&!V.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});C.fn[t]=function(r){var o,s=this[0];return r===N?e(s)?s["inner"+n]:i(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(n){s=C(this),s.css(t,v(this,r,n,s[t]()))})}}),R.forEach(function(n,e){var i=e%2;C.fn[n]=function(){var n,r,o=C.map(arguments,function(e){var i=[];return n=t(e),"array"==n?(e.forEach(function(t){return t.nodeType!==N?i.push(t):C.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(X.fragment(t)))}),i):"object"==n||null==e?e:X.fragment(e)}),s=this.length>1;return o.length<1?this:this.each(function(t,n){r=i?n:n.parentNode,n=0==e?n.nextSibling:1==e?n.firstChild:2==e?n:null;var u=C.contains(P.documentElement,r);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!r)return C(t).remove();r.insertBefore(t,n),u&&E(t,function(t){if(!(null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src)){var n=t.ownerDocument?t.ownerDocument.defaultView:window;n.eval.call(n,t.innerHTML)}})})})},C.fn[i?n+"To":"insert"+(e?"Before":"After")]=function(t){return C(t)[n](this),this}}),X.Z.prototype=d.prototype=C.fn,X.uniq=T,X.deserializeValue=b,C.zepto=X,C}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto);