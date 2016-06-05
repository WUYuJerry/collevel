/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();;

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'), args);
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
Drupal.locale = { 'strings': { "Unspecified error": "發生不明錯誤", "An error occurred. \n@uri\n@text": "發生了一個錯誤： \n@uri\n@text", "An error occurred. \n@uri\n(no information available).": "發生了一個錯誤：\n@uri\n(無法取得任何訊息).", "An HTTP error @status occurred. \n@uri": "發生了一個HTTP錯誤@status： \n@uri", "Drag to re-order": "抓取項目進行重新排列", "Changes made in this table will not be saved until the form is submitted.": "在送出這個表單之前，這個表格中的變更不會被儲存。", "Select all rows in this table": "選取表格中的所有列", "Deselect all rows in this table": "取消烜區表格中的所有列", "Split summary at cursor": "將滑鼠指標之前的內容設定為文章摘要", "Join summary": "將摘要整合到全文裡（顯示全文）", "Your server has been successfully tested to support this feature.": "你的伺服器已經成功地通過測試，可以支援此功能。", "Your system configuration does not currently support this feature. The \x3ca href=\"http://drupal.org/node/15365\"\x3ehandbook page on Clean URLs\x3c/a\x3e has additional troubleshooting information.": "你的系統設定目前並不支援此功能。\x3ca href=\"http://drupal.org/node/15365\"\x3e關於簡潔網址的說明文件\x3c/a\x3e有更多的障礙排除說明。", "Testing clean URLs...": "測試簡潔網址...", "The changes to these blocks will not be saved until the \x3cem\x3eSave blocks\x3c/em\x3e button is clicked.": "這些區塊的變更不會被儲存起來，除非您按下\x3cem\x3e儲存區塊\x3c/em\x3e 的按鈕。" } };;
/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});
;
/*! Magnific Popup - v1.0.0 - 2015-01-03
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",b.ev=c.mainEl&&c.mainEl.length?c.mainEl.eq(0):d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.wrap.css(b.fixedContentPos?{overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}:{top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),b.currTemplate[d]=f?a(f):!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||2!==c.which&&!c.ctrlKey&&!c.metaKey){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});;
// -----------------------------------
// Slidebars
// Version 0.10.3
// http://plugins.adchsm.me/slidebars/
//
// Written by Adam Smith
// http://www.adchsm.me/
//
// Released under MIT License
// http://plugins.adchsm.me/slidebars/license.txt
//
// ---------------------
// Index of Slidebars.js
//
// 001 - Default Settings
// 002 - Feature Detection
// 003 - User Agents
// 004 - Setup
// 005 - Animation
// 006 - Operations
// 007 - API
// 008 - User Input

;( function ( $ ) {

	$.slidebars = function ( options ) {

		// ----------------------
		// 001 - Default Settings

		var settings = $.extend( {
			siteClose: true, // true or false - Enable closing of Slidebars by clicking on #sb-site.
			scrollLock: false, // true or false - Prevent scrolling of site when a Slidebar is open.
			disableOver: false, // integer or false - Hide Slidebars over a specific width.
			hideControlClasses: false // true or false - Hide controls at same width as disableOver.
		}, options );

		// -----------------------
		// 002 - Feature Detection

		var test = document.createElement( 'div' ).style, // Create element to test on.
		supportTransition = false, // Variable for testing transitions.
		supportTransform = false; // variable for testing transforms.

		// Test for CSS Transitions
		if ( test.MozTransition === '' || test.WebkitTransition === '' || test.OTransition === '' || test.transition === '' ) supportTransition = true;

		// Test for CSS Transforms
		if ( test.MozTransform === '' || test.WebkitTransform === '' || test.OTransform === '' || test.transform === '' ) supportTransform = true;

		// -----------------
		// 003 - User Agents

		var ua = navigator.userAgent, // Get user agent string.
		android = false, // Variable for storing android version.
		iOS = false; // Variable for storing iOS version.
		
		if ( /Android/.test( ua ) ) { // Detect Android in user agent string.
			android = ua.substr( ua.indexOf( 'Android' )+8, 3 ); // Set version of Android.
		} else if ( /(iPhone|iPod|iPad)/.test( ua ) ) { // Detect iOS in user agent string.
			iOS = ua.substr( ua.indexOf( 'OS ' )+3, 3 ).replace( '_', '.' ); // Set version of iOS.
		}
		
		if ( android && android < 3 || iOS && iOS < 5 ) $( 'html' ).addClass( 'sb-static' ); // Add helper class for older versions of Android & iOS.

		// -----------
		// 004 - Setup

		// Site container
		var $site = $( '#sb-site, .sb-site-container' ); // Cache the selector.

		// Left Slidebar	
		if ( $( '.sb-left' ).length ) { // Check if the left Slidebar exists.
			var $left = $( '.sb-left' ), // Cache the selector.
			leftActive = false; // Used to check whether the left Slidebar is open or closed.
		}

		// Right Slidebar
		if ( $( '.sb-right' ).length ) { // Check if the right Slidebar exists.
			var $right = $( '.sb-right' ), // Cache the selector.
			rightActive = false; // Used to check whether the right Slidebar is open or closed.
		}
				
		var init = false, // Initialisation variable.
		windowWidth = $( window ).width(), // Get width of window.
		$controls = $( '.sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close' ), // Cache the control classes.
		$slide = $( '.sb-slide' ); // Cache users elements to animate.
		
		// Initailise Slidebars
		function initialise () {
			if ( ! settings.disableOver || ( typeof settings.disableOver === 'number' && settings.disableOver >= windowWidth ) ) { // False or larger than window size. 
				init = true; // true enabled Slidebars to open.
				$( 'html' ).addClass( 'sb-init' ); // Add helper class.
				if ( settings.hideControlClasses ) $controls.removeClass( 'sb-hide' ); // Remove class just incase Slidebars was originally disabled.
				css(); // Set required inline styles.
			} else if ( typeof settings.disableOver === 'number' && settings.disableOver < windowWidth ) { // Less than window size.
				init = false; // false stop Slidebars from opening.
				$( 'html' ).removeClass( 'sb-init' ); // Remove helper class.
				if ( settings.hideControlClasses ) $controls.addClass( 'sb-hide' ); // Hide controls
				$site.css( 'minHeight', '' ); // Remove minimum height.
				if ( leftActive || rightActive ) close(); // Close Slidebars if open.
			}
		}
		initialise();
		
		// Inline CSS
		function css() {
			// Site container height.
			$site.css( 'minHeight', '' );
			var siteHeight = parseInt( $site.css( 'height' ), 10 ),
			htmlHeight = parseInt( $( 'html' ).css( 'height' ), 10 );
			if ( siteHeight < htmlHeight ) $site.css( 'minHeight', $( 'html' ).css( 'height' ) ); // Test height for vh support..
			
			// Custom Slidebar widths.
			if ( $left && $left.hasClass( 'sb-width-custom' ) ) $left.css( 'width', $left.attr( 'data-sb-width' ) ); // Set user custom width.
			if ( $right && $right.hasClass( 'sb-width-custom' ) ) $right.css( 'width', $right.attr( 'data-sb-width' ) ); // Set user custom width.
			
			// Set off-canvas margins for Slidebars with push and overlay animations.
			if ( $left && ( $left.hasClass( 'sb-style-push' ) || $left.hasClass( 'sb-style-overlay' ) ) ) $left.css( 'marginLeft', '-' + $left.css( 'width' ) );
			if ( $right && ( $right.hasClass( 'sb-style-push' ) || $right.hasClass( 'sb-style-overlay' ) ) ) $right.css( 'marginRight', '-' + $right.css( 'width' ) );
			
			// Site scroll locking.
			if ( settings.scrollLock ) $( 'html' ).addClass( 'sb-scroll-lock' );
		}
		
		// Resize Functions
		$( window ).resize( function () {
			var resizedWindowWidth = $( window ).width(); // Get resized window width.
			if ( windowWidth !== resizedWindowWidth ) { // Slidebars is running and window was actually resized.
				windowWidth = resizedWindowWidth; // Set the new window width.
				initialise(); // Call initalise to see if Slidebars should still be running.
				if ( leftActive ) open( 'left' ); // If left Slidebar is open, calling open will ensure it is the correct size.
				if ( rightActive ) open( 'right' ); // If right Slidebar is open, calling open will ensure it is the correct size.
			}
		} );
		// I may include a height check along side a width check here in future.

		// ---------------
		// 005 - Animation

		var animation; // Animation type.

		// Set animation type.
		if ( supportTransition && supportTransform ) { // Browser supports css transitions and transforms.
			animation = 'translate'; // Translate for browsers that support it.
			if ( android && android < 4.4 ) animation = 'side'; // Android supports both, but can't translate any fixed positions, so use left instead.
		} else {
			animation = 'jQuery'; // Browsers that don't support css transitions and transitions.
		}

		// Animate mixin.
		function animate( object, amount, side ) {
			
			// Choose selectors depending on animation style.
			var selector;
			
			if ( object.hasClass( 'sb-style-push' ) ) {
				selector = $site.add( object ).add( $slide ); // Push - Animate site, Slidebar and user elements.
			} else if ( object.hasClass( 'sb-style-overlay' ) ) {
				selector = object; // Overlay - Animate Slidebar only.
			} else {
				selector = $site.add( $slide ); // Reveal - Animate site and user elements.
			}
			
			// Apply animation
			if ( animation === 'translate' ) {
				if ( amount === '0px' ) {
					removeAnimation();
				} else {
					selector.css( 'transform', 'translate( ' + amount + ' )' ); // Apply the animation.
				}

			} else if ( animation === 'side' ) {
				if ( amount === '0px' ) {
					removeAnimation();
				} else {
					if ( amount[0] === '-' ) amount = amount.substr( 1 ); // Remove the '-' from the passed amount for side animations.
					selector.css( side, '0px' ); // Add a 0 value so css transition works.
					setTimeout( function () { // Set a timeout to allow the 0 value to be applied above.
						selector.css( side, amount ); // Apply the animation.
					}, 1 );
				}

			} else if ( animation === 'jQuery' ) {
				if ( amount[0] === '-' ) amount = amount.substr( 1 ); // Remove the '-' from the passed amount for jQuery animations.
				var properties = {};
				properties[side] = amount;
				selector.stop().animate( properties, 400 ); // Stop any current jQuery animation before starting another.
			}
			
			// Remove animation
			function removeAnimation () {
				selector.removeAttr( 'style' );
				css();
			}
		}

		// ----------------
		// 006 - Operations

		// Open a Slidebar
		function open( side ) {
			// Check to see if opposite Slidebar is open.
			if ( side === 'left' && $left && rightActive || side === 'right' && $right && leftActive ) { // It's open, close it, then continue.
				close();
				setTimeout( proceed, 400 );
			} else { // Its not open, continue.
				proceed();
			}

			// Open
			function proceed() {
				if ( init && side === 'left' && $left ) { // Slidebars is initiated, left is in use and called to open.
					$( 'html' ).addClass( 'sb-active sb-active-left' ); // Add active classes.
					$left.addClass( 'sb-active' );
					animate( $left, $left.css( 'width' ), 'left' ); // Animation
					setTimeout( function () { leftActive = true; }, 400 ); // Set active variables.
				} else if ( init && side === 'right' && $right ) { // Slidebars is initiated, right is in use and called to open.
					$( 'html' ).addClass( 'sb-active sb-active-right' ); // Add active classes.
					$right.addClass( 'sb-active' );
					animate( $right, '-' + $right.css( 'width' ), 'right' ); // Animation
					setTimeout( function () { rightActive = true; }, 400 ); // Set active variables.
				}
			}
		}
			
		// Close either Slidebar
		function close( url, target ) {
			if ( leftActive || rightActive ) { // If a Slidebar is open.
				if ( leftActive ) {
					animate( $left, '0px', 'left' ); // Animation
					leftActive = false;
				}
				if ( rightActive ) {
					animate( $right, '0px', 'right' ); // Animation
					rightActive = false;
				}
			
				setTimeout( function () { // Wait for closing animation to finish.
					$( 'html' ).removeClass( 'sb-active sb-active-left sb-active-right' ); // Remove active classes.
					if ( $left ) $left.removeClass( 'sb-active' );
					if ( $right ) $right.removeClass( 'sb-active' );
					if ( typeof url !== 'undefined' ) { // If a link has been passed to the function, go to it.
						if ( typeof target === undefined ) target = '_self'; // Set to _self if undefined.
						window.open( url, target ); // Open the url.
					}
				}, 400 );
			}
		}
		
		// Toggle either Slidebar
		function toggle( side ) {
			if ( side === 'left' && $left ) { // If left Slidebar is called and in use.
				if ( ! leftActive ) {
					open( 'left' ); // Slidebar is closed, open it.
				} else {
					close(); // Slidebar is open, close it.
				}
			}
			if ( side === 'right' && $right ) { // If right Slidebar is called and in use.
				if ( ! rightActive ) {
					open( 'right' ); // Slidebar is closed, open it.
				} else {
					close(); // Slidebar is open, close it.
				}
			}
		}

		// ---------
		// 007 - API
		
		this.slidebars = {
			open: open, // Maps user variable name to the open method.
			close: close, // Maps user variable name to the close method.
			toggle: toggle, // Maps user variable name to the toggle method.
			init: function () { // Returns true or false whether Slidebars are running or not.
				return init; // Returns true or false whether Slidebars are running.
			},
			active: function ( side ) { // Returns true or false whether Slidebar is open or closed.
				if ( side === 'left' && $left ) return leftActive;
				if ( side === 'right' && $right ) return rightActive;
			},
			destroy: function ( side ) { // Removes the Slidebar from the DOM.
				if ( side === 'left' && $left ) {
					if ( leftActive ) close(); // Close if its open.
					setTimeout( function () {
						$left.remove(); // Remove it.
						$left = false; // Set variable to false so it cannot be opened again.
					}, 400 );
				}
				if ( side === 'right' && $right) {
					if ( rightActive ) close(); // Close if its open.
					setTimeout( function () {
						$right.remove(); // Remove it.
						$right = false; // Set variable to false so it cannot be opened again.
					}, 400 );
				}
			}
		};

		// ----------------
		// 008 - User Input
		
		function eventHandler( event, selector ) {
			event.stopPropagation(); // Stop event bubbling.
			event.preventDefault(); // Prevent default behaviour.
			if ( event.type === 'touchend' ) selector.off( 'click' ); // If event type was touch, turn off clicks to prevent phantom clicks.
		}
		
		// Toggle left Slidebar
		$( '.sb-toggle-left' ).on( 'touchend click', function ( event ) {
			eventHandler( event, $( this ) ); // Handle the event.
			toggle( 'left' ); // Toggle the left Slidbar.
		} );
		
		// Toggle right Slidebar
		$( '.sb-toggle-right' ).on( 'touchend click', function ( event ) {
			eventHandler( event, $( this ) ); // Handle the event.
			toggle( 'right' ); // Toggle the right Slidbar.
		} );
		
		// Open left Slidebar
		$( '.sb-open-left' ).on( 'touchend click', function ( event ) {
			eventHandler( event, $( this ) ); // Handle the event.
			open( 'left' ); // Open the left Slidebar.
		} );
		
		// Open right Slidebar
		$( '.sb-open-right' ).on( 'touchend click', function ( event ) {
			eventHandler( event, $( this ) ); // Handle the event.
			open( 'right' ); // Open the right Slidebar.
		} );
		
		// Close Slidebar
		$( '.sb-close' ).on( 'touchend click', function ( event ) {
			if ( $( this ).is( 'a' ) || $( this ).children().is( 'a' ) ) { // Is a link or contains a link.
				if ( event.type === 'click' ) { // Make sure the user wanted to follow the link.
					event.stopPropagation(); // Stop events propagating
					event.preventDefault(); // Stop default behaviour
					
					var link = ( $( this ).is( 'a' ) ? $( this ) : $( this ).find( 'a' ) ), // Get the link selector.
					url = link.attr( 'href' ), // Get the link url.
					target = ( link.attr( 'target' ) ? link.attr( 'target' ) : '_self' ); // Set target, default to _self if not provided
					
					close( url, target ); // Close Slidebar and pass link target.
				}
			} else { // Just a normal control class.
				eventHandler( event, $( this ) ); // Handle the event.
				close(); // Close Slidebar.
			}
		} );
		
		// Close Slidebar via site
		$site.on( 'touchend click', function ( event ) {
			if ( settings.siteClose && ( leftActive || rightActive ) ) { // If settings permit closing by site and left or right Slidebar is open.
				eventHandler( event, $( this ) ); // Handle the event.
				close(); // Close it.
			}
		} );
		
	}; // End Slidebars function.

} ) ( jQuery );;
(function($){$.fn.sidebar=function(options){var self=this;if(self.length>1){return self.each(function(){$(this).sidebar(options)})}var width=self.outerWidth();var height=self.outerHeight();var settings=$.extend({speed:200,side:"left",isClosed:false,close:true},options);self.on("sidebar:open",function(ev,data){var properties={};properties[settings.side]=0;settings.isClosed=null;self.stop().animate(properties,$.extend({},settings,data).speed,function(){settings.isClosed=false;self.trigger("sidebar:opened")})});self.on("sidebar:close",function(ev,data){var properties={};if(settings.side==="left"||settings.side==="right"){properties[settings.side]=-self.outerWidth()}else{properties[settings.side]=-self.outerHeight()}settings.isClosed=null;self.stop().animate(properties,$.extend({},settings,data).speed,function(){settings.isClosed=true;self.trigger("sidebar:closed")})});self.on("sidebar:toggle",function(ev,data){if(settings.isClosed){self.trigger("sidebar:open",[data])}else{self.trigger("sidebar:close",[data])}});function closeWithNoAnimation(){self.trigger("sidebar:close",[{speed:0}])}if(!settings.isClosed&&settings.close){closeWithNoAnimation()}$(window).on("resize",function(){if(!settings.isClosed){return}closeWithNoAnimation()});self.data("sidebar",settings);return self};$.fn.sidebar.version="3.3.2"})(jQuery);
;
$(document).ready(function() {

	$('#debug-trigger').click(function(e) {
	
		e.preventDefault();
		$('#debug').toggleClass('open');
	
	});
	
	$('#debug-nav').find('a').click(function(e) {
	
		e.preventDefault();
		
		var $self = $(this),
			action = $self.attr('rel'),
			arg = $self.attr('data-arg'),
			arg = arg || null;
			
			$('#content').infinitescroll(action,arg);
			
	
	});
	
});;
/*global jQuery: true */

/*!
   --------------------------------
   Infinite Scroll
   --------------------------------
   + https://github.com/paulirish/infinite-scroll
   + version 2.1.0
   + Copyright 2011/12 Paul Irish & Luke Shumard
   + Licensed under the MIT license

   + Documentation: http://infinite-scroll.com/
*/

// Uses AMD or browser globals to create a jQuery plugin.
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($, undefined) {
    'use strict';

    $.infinitescroll = function infscr(options, callback, element) {
        this.element = $(element);

        // Flag the object in the event of a failed creation
        if (!this._create(options, callback)) {
            this.failed = true;
        }
    };

    $.infinitescroll.defaults = {
        loading: {
            finished: undefined,
            finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
            img: 'data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7',
            msg: null,
            msgText: '<em>Loading the next set of posts...</em>',
            selector: null,
            speed: 'fast',
            start: undefined
        },
        state: {
            isDuringAjax: false,
            isInvalidPage: false,
            isDestroyed: false,
            isDone: false, // For when it goes all the way through the archive.
            isPaused: false,
            isBeyondMaxPage: false,
            currPage: 1
        },
        debug: false,
        behavior: undefined,
        binder: $(window), // used to cache the selector
        nextSelector: 'div.navigation a:first',
        navSelector: 'div.navigation',
        contentSelector: null, // rename to pageFragment
        extraScrollPx: 150,
        itemSelector: 'div.post',
        animate: false,
        pathParse: undefined,
        dataType: 'html',
        appendCallback: true,
        bufferPx: 40,
        errorCallback: function () { },
        infid: 0, //Instance ID
        pixelsFromNavToBottom: undefined,
        path: undefined, // Either parts of a URL as an array (e.g. ["/page/", "/"] or a function that takes in the page number and returns a URL
        prefill: false, // When the document is smaller than the window, load data until the document is larger or links are exhausted
        maxPage: undefined // to manually control maximum page (when maxPage is undefined, maximum page limitation is not work)
    };

    $.infinitescroll.prototype = {

        /*
            ----------------------------
            Private methods
            ----------------------------
            */

        // Bind or unbind from scroll
        _binding: function infscr_binding(binding) {

            var instance = this,
            opts = instance.options;

            opts.v = '2.0b2.120520';

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_binding_'+opts.behavior] !== undefined) {
                this['_binding_'+opts.behavior].call(this);
                return;
            }

            if (binding !== 'bind' && binding !== 'unbind') {
                this._debug('Binding value  ' + binding + ' not valid');
                return false;
            }

            if (binding === 'unbind') {
                (this.options.binder).unbind('smartscroll.infscr.' + instance.options.infid);
            } else {
                (this.options.binder)[binding]('smartscroll.infscr.' + instance.options.infid, function () {
                    instance.scroll();
                });
            }

            this._debug('Binding', binding);
        },

        // Fundamental aspects of the plugin are initialized
        _create: function infscr_create(options, callback) {

            // Add custom options to defaults
            var opts = $.extend(true, {}, $.infinitescroll.defaults, options);
            this.options = opts;
            var $window = $(window);
            var instance = this;

            // Validate selectors
            if (!instance._validate(options)) {
                return false;
            }

            // Validate page fragment path
            var path = $(opts.nextSelector).attr('href');
            if (!path) {
                this._debug('Navigation selector not found');
                return false;
            }

            // Set the path to be a relative URL from root.
            opts.path = opts.path || this._determinepath(path);

            // contentSelector is 'page fragment' option for .load() / .ajax() calls
            opts.contentSelector = opts.contentSelector || this.element;

            // loading.selector - if we want to place the load message in a specific selector, defaulted to the contentSelector
            opts.loading.selector = opts.loading.selector || opts.contentSelector;

            // Define loading.msg
            opts.loading.msg = opts.loading.msg || $('<div id="infscr-loading"><img alt="Loading..." src="' + opts.loading.img + '" /><div>' + opts.loading.msgText + '</div></div>');

            // Preload loading.img
            (new Image()).src = opts.loading.img;

            // distance from nav links to bottom
            // computed as: height of the document + top offset of container - top offset of nav link
            if(opts.pixelsFromNavToBottom === undefined) {
                opts.pixelsFromNavToBottom = $(document).height() - $(opts.navSelector).offset().top;
                this._debug('pixelsFromNavToBottom: ' + opts.pixelsFromNavToBottom);
            }

            var self = this;

            // determine loading.start actions
            opts.loading.start = opts.loading.start || function() {
                $(opts.navSelector).hide();
                opts.loading.msg
                .appendTo(opts.loading.selector)
                .show(opts.loading.speed, $.proxy(function() {
                    this.beginAjax(opts);
                }, self));
            };

            // determine loading.finished actions
            opts.loading.finished = opts.loading.finished || function() {
                if (!opts.state.isBeyondMaxPage)
                    opts.loading.msg.fadeOut(opts.loading.speed);
            };

            // callback loading
            opts.callback = function(instance, data, url) {
                if (!!opts.behavior && instance['_callback_'+opts.behavior] !== undefined) {
                    instance['_callback_'+opts.behavior].call($(opts.contentSelector)[0], data, url);
                }

                if (callback) {
                    callback.call($(opts.contentSelector)[0], data, opts, url);
                }

                if (opts.prefill) {
                    $window.bind('resize.infinite-scroll', instance._prefill);
                }
            };

            if (options.debug) {
                // Tell IE9 to use its built-in console
                if (Function.prototype.bind && (typeof console === 'object' || typeof console === 'function') && typeof console.log === 'object') {
                    ['log','info','warn','error','assert','dir','clear','profile','profileEnd']
                        .forEach(function (method) {
                            console[method] = this.call(console[method], console);
                        }, Function.prototype.bind);
                }
            }

            this._setup();

            // Setups the prefill method for use
            if (opts.prefill) {
                this._prefill();
            }

            // Return true to indicate successful creation
            return true;
        },

        _prefill: function infscr_prefill() {
            var instance = this;
            var $window = $(window);

            function needsPrefill() {
                return ( $(instance.options.contentSelector).height() <= $window.height() );
            }

            this._prefill = function() {
                if (needsPrefill()) {
                    instance.scroll();
                }

                $window.bind('resize.infinite-scroll', function() {
                    if (needsPrefill()) {
                        $window.unbind('resize.infinite-scroll');
                        instance.scroll();
                    }
                });
            };

            // Call self after setting up the new function
            this._prefill();
        },

        // Console log wrapper
        _debug: function infscr_debug() {
            if (true !== this.options.debug) {
                return;
            }

            if (typeof console !== 'undefined' && typeof console.log === 'function') {
                // Modern browsers
                // Single argument, which is a string
                if ((Array.prototype.slice.call(arguments)).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === 'string') {
                    console.log( (Array.prototype.slice.call(arguments)).toString() );
                } else {
                    console.log( Array.prototype.slice.call(arguments) );
                }
            } else if (!Function.prototype.bind && typeof console !== 'undefined' && typeof console.log === 'object') {
                // IE8
                Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));
            }
        },

        // find the number to increment in the path.
        _determinepath: function infscr_determinepath(path) {

            var opts = this.options;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_determinepath_'+opts.behavior] !== undefined) {
                return this['_determinepath_'+opts.behavior].call(this,path);
            }

            if (!!opts.pathParse) {

                this._debug('pathParse manual');
                return opts.pathParse(path, this.options.state.currPage+1);

            } else if (path.match(/^(.*?)\b2\b(.*?$)/)) {
                path = path.match(/^(.*?)\b2\b(.*?$)/).slice(1);

                // if there is any 2 in the url at all.
            } else if (path.match(/^(.*?)2(.*?$)/)) {

                // page= is used in django:
                // http://www.infinite-scroll.com/changelog/comment-page-1/#comment-127
                if (path.match(/^(.*?page=)2(\/.*|$)/)) {
                    path = path.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    return path;
                }

                path = path.match(/^(.*?)2(.*?$)/).slice(1);

            } else {

                // page= is used in drupal too but second page is page=1 not page=2:
                // thx Jerod Fritz, vladikoff
                if (path.match(/^(.*?page=)1(\/.*|$)/)) {
                    path = path.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    return path;
                } else {
                    this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
                    // Get rid of isInvalidPage to allow permalink to state
                    opts.state.isInvalidPage = true;  //prevent it from running on this page.
                }
            }
            this._debug('determinePath', path);
            return path;

        },

        // Custom error
        _error: function infscr_error(xhr) {

            var opts = this.options;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_error_'+opts.behavior] !== undefined) {
                this['_error_'+opts.behavior].call(this,xhr);
                return;
            }

            if (xhr !== 'destroy' && xhr !== 'end') {
                xhr = 'unknown';
            }

            this._debug('Error', xhr);

            if (xhr === 'end' || opts.state.isBeyondMaxPage) {
                this._showdonemsg();
            }

            opts.state.isDone = true;
            opts.state.currPage = 1; // if you need to go back to this instance
            opts.state.isPaused = false;
            opts.state.isBeyondMaxPage = false;
            this._binding('unbind');

        },

        // Load Callback
        _loadcallback: function infscr_loadcallback(box, data, url) {
            var opts = this.options,
            callback = this.options.callback, // GLOBAL OBJECT FOR CALLBACK
            result = (opts.state.isDone) ? 'done' : (!opts.appendCallback) ? 'no-append' : 'append',
            frag;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_loadcallback_'+opts.behavior] !== undefined) {
                this['_loadcallback_'+opts.behavior].call(this,box,data,url);
                return;
            }

            switch (result) {
                case 'done':
                    this._showdonemsg();
                    return false;

                case 'no-append':
                    if (opts.dataType === 'html') {
                        data = '<div>' + data + '</div>';
                        data = $(data).find(opts.itemSelector);
                    }

                    // if it didn't return anything
                    if (data.length === 0) {
                        return this._error('end');
                    }

                    break;

                case 'append':
                    var children = box.children();
                    // if it didn't return anything
                    if (children.length === 0) {
                        return this._error('end');
                    }

                    // use a documentFragment because it works when content is going into a table or UL
                    frag = document.createDocumentFragment();
                    while (box[0].firstChild) {
                        frag.appendChild(box[0].firstChild);
                    }

                    this._debug('contentSelector', $(opts.contentSelector)[0]);
                    $(opts.contentSelector)[0].appendChild(frag);
                    // previously, we would pass in the new DOM element as context for the callback
                    // however we're now using a documentfragment, which doesn't have parents or children,
                    // so the context is the contentContainer guy, and we pass in an array
                    // of the elements collected as the first argument.

                    data = children.get();
                    break;
            }

            // loadingEnd function
            opts.loading.finished.call($(opts.contentSelector)[0],opts);

            // smooth scroll to ease in the new content
            if (opts.animate) {
                var scrollTo = $(window).scrollTop() + $(opts.loading.msg).height() + opts.extraScrollPx + 'px';
                $('html,body').animate({ scrollTop: scrollTo }, 800, function () { opts.state.isDuringAjax = false; });
            }

            if (!opts.animate) {
                // once the call is done, we can allow it again.
                opts.state.isDuringAjax = false;
            }

            callback(this, data, url);

            if (opts.prefill) {
                this._prefill();
            }
        },

        _nearbottom: function infscr_nearbottom() {

            var opts = this.options,
            pixelsFromWindowBottomToBottom = 0 + $(document).height() - (opts.binder.scrollTop()) - $(window).height();

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_nearbottom_'+opts.behavior] !== undefined) {
                return this['_nearbottom_'+opts.behavior].call(this);
            }

            this._debug('math:', pixelsFromWindowBottomToBottom, opts.pixelsFromNavToBottom);

            // if distance remaining in the scroll (including buffer) is less than the orignal nav to bottom....
            return (pixelsFromWindowBottomToBottom - opts.bufferPx < opts.pixelsFromNavToBottom);

        },

        // Pause / temporarily disable plugin from firing
        _pausing: function infscr_pausing(pause) {

            var opts = this.options;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_pausing_'+opts.behavior] !== undefined) {
                this['_pausing_'+opts.behavior].call(this,pause);
                return;
            }

            // If pause is not 'pause' or 'resume', toggle it's value
            if (pause !== 'pause' && pause !== 'resume' && pause !== null) {
                this._debug('Invalid argument. Toggling pause value instead');
            }

            pause = (pause && (pause === 'pause' || pause === 'resume')) ? pause : 'toggle';

            switch (pause) {
                case 'pause':
                    opts.state.isPaused = true;
                break;

                case 'resume':
                    opts.state.isPaused = false;
                break;

                case 'toggle':
                    opts.state.isPaused = !opts.state.isPaused;
                break;
            }

            this._debug('Paused', opts.state.isPaused);
            return false;

        },

        // Behavior is determined
        // If the behavior option is undefined, it will set to default and bind to scroll
        _setup: function infscr_setup() {

            var opts = this.options;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_setup_'+opts.behavior] !== undefined) {
                this['_setup_'+opts.behavior].call(this);
                return;
            }

            this._binding('bind');

            return false;

        },

        // Show done message
        _showdonemsg: function infscr_showdonemsg() {

            var opts = this.options;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_showdonemsg_'+opts.behavior] !== undefined) {
                this['_showdonemsg_'+opts.behavior].call(this);
                return;
            }

            opts.loading.msg
            .find('img')
            .hide()
            .parent()
            .find('div').html(opts.loading.finishedMsg).animate({ opacity: 1 }, 2000, function () {
                $(this).parent().fadeOut(opts.loading.speed);
            });

            // user provided callback when done
            opts.errorCallback.call($(opts.contentSelector)[0],'done');
        },

        // grab each selector option and see if any fail
        _validate: function infscr_validate(opts) {
            for (var key in opts) {
                if (key.indexOf && key.indexOf('Selector') > -1 && $(opts[key]).length === 0) {
                    this._debug('Your ' + key + ' found no elements.');
                    return false;
                }
            }

            return true;
        },

        /*
            ----------------------------
            Public methods
            ----------------------------
            */

        // Bind to scroll
        bind: function infscr_bind() {
            this._binding('bind');
        },

        // Destroy current instance of plugin
        destroy: function infscr_destroy() {
            this.options.state.isDestroyed = true;
            this.options.loading.finished();
            return this._error('destroy');
        },

        // Set pause value to false
        pause: function infscr_pause() {
            this._pausing('pause');
        },

        // Set pause value to false
        resume: function infscr_resume() {
            this._pausing('resume');
        },

        beginAjax: function infscr_ajax(opts) {
            var instance = this,
                path = opts.path,
                box, desturl, method, condition;

            // increment the URL bit. e.g. /page/3/
            opts.state.currPage++;

            // Manually control maximum page
            if ( opts.maxPage !== undefined && opts.state.currPage > opts.maxPage ){
                opts.state.isBeyondMaxPage = true;
                this.destroy();
                return;
            }

            // if we're dealing with a table we can't use DIVs
            box = $(opts.contentSelector).is('table, tbody') ? $('<tbody/>') : $('<div/>');

            desturl = (typeof path === 'function') ? path(opts.state.currPage) : path.join(opts.state.currPage);
            instance._debug('heading into ajax', desturl);

            method = (opts.dataType === 'html' || opts.dataType === 'json' ) ? opts.dataType : 'html+callback';
            if (opts.appendCallback && opts.dataType === 'html') {
                method += '+callback';
            }

            switch (method) {
                case 'html+callback':
                    instance._debug('Using HTML via .load() method');
                    box.load(desturl + ' ' + opts.itemSelector, undefined, function infscr_ajax_callback(responseText) {
                        instance._loadcallback(box, responseText, desturl);
                    });

                    break;

                case 'html':
                    instance._debug('Using ' + (method.toUpperCase()) + ' via $.ajax() method');
                    $.ajax({
                        // params
                        url: desturl,
                        dataType: opts.dataType,
                        complete: function infscr_ajax_callback(jqXHR, textStatus) {
                            condition = (typeof (jqXHR.isResolved) !== 'undefined') ? (jqXHR.isResolved()) : (textStatus === 'success' || textStatus === 'notmodified');
                            if (condition) {
                                instance._loadcallback(box, jqXHR.responseText, desturl);
                            } else {
                                instance._error('end');
                            }
                        }
                    });

                    break;
                case 'json':
                    instance._debug('Using ' + (method.toUpperCase()) + ' via $.ajax() method');
                    $.ajax({
                        dataType: 'json',
                        type: 'GET',
                        url: desturl,
                        success: function (data, textStatus, jqXHR) {
                            condition = (typeof (jqXHR.isResolved) !== 'undefined') ? (jqXHR.isResolved()) : (textStatus === 'success' || textStatus === 'notmodified');
                            if (opts.appendCallback) {
                                // if appendCallback is true, you must defined template in options.
                                // note that data passed into _loadcallback is already an html (after processed in opts.template(data)).
                                if (opts.template !== undefined) {
                                    var theData = opts.template(data);
                                    box.append(theData);
                                    if (condition) {
                                        instance._loadcallback(box, theData);
                                    } else {
                                        instance._error('end');
                                    }
                                } else {
                                    instance._debug('template must be defined.');
                                    instance._error('end');
                                }
                            } else {
                                // if appendCallback is false, we will pass in the JSON object. you should handle it yourself in your callback.
                                if (condition) {
                                    instance._loadcallback(box, data, desturl);
                                } else {
                                    instance._error('end');
                                }
                            }
                        },
                        error: function() {
                            instance._debug('JSON ajax request failed.');
                            instance._error('end');
                        }
                    });

                    break;
            }
        },

        // Retrieve next set of content items
        retrieve: function infscr_retrieve(pageNum) {
            pageNum = pageNum || null;

            var instance = this,
            opts = instance.options;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['retrieve_'+opts.behavior] !== undefined) {
                this['retrieve_'+opts.behavior].call(this,pageNum);
                return;
            }

            // for manual triggers, if destroyed, get out of here
            if (opts.state.isDestroyed) {
                this._debug('Instance is destroyed');
                return false;
            }

            // we dont want to fire the ajax multiple times
            opts.state.isDuringAjax = true;

            opts.loading.start.call($(opts.contentSelector)[0],opts);
        },

        // Check to see next page is needed
        scroll: function infscr_scroll() {

            var opts = this.options,
            state = opts.state;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['scroll_'+opts.behavior] !== undefined) {
                this['scroll_'+opts.behavior].call(this);
                return;
            }

            if (state.isDuringAjax || state.isInvalidPage || state.isDone || state.isDestroyed || state.isPaused) {
                return;
            }

            if (!this._nearbottom()) {
                return;
            }

            this.retrieve();

        },

        // Toggle pause value
        toggle: function infscr_toggle() {
            this._pausing();
        },

        // Unbind from scroll
        unbind: function infscr_unbind() {
            this._binding('unbind');
        },

        // update options
        update: function infscr_options(key) {
            if ($.isPlainObject(key)) {
                this.options = $.extend(true,this.options,key);
            }
        }
    };


    /*
        ----------------------------
        Infinite Scroll function
        ----------------------------

        Borrowed logic from the following...

        jQuery UI
        - https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.widget.js

        jCarousel
        - https://github.com/jsor/jcarousel/blob/master/lib/jquery.jcarousel.js

        Masonry
        - https://github.com/desandro/masonry/blob/master/jquery.masonry.js

*/

    $.fn.infinitescroll = function infscr_init(options, callback) {


        var thisCall = typeof options;

        switch (thisCall) {

            // method
            case 'string':
                var args = Array.prototype.slice.call(arguments, 1);

                this.each(function () {
                    var instance = $.data(this, 'infinitescroll');

                    if (!instance) {
                        // not setup yet
                        // return $.error('Method ' + options + ' cannot be called until Infinite Scroll is setup');
                        return false;
                    }

                    if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
                        // return $.error('No such method ' + options + ' for Infinite Scroll');
                        return false;
                    }

                    // no errors!
                    instance[options].apply(instance, args);
                });

            break;

            // creation
            case 'object':

                this.each(function () {

                var instance = $.data(this, 'infinitescroll');

                if (instance) {

                    // update options of current instance
                    instance.update(options);

                } else {

                    // initialize new instance
                    instance = new $.infinitescroll(options, callback, this);

                    // don't attach if instantiation failed
                    if (!instance.failed) {
                        $.data(this, 'infinitescroll', instance);
                    }

                }

            });

            break;

        }

        return this;
    };



    /*
     * smartscroll: debounced scroll event for jQuery *
     * https://github.com/lukeshumard/smartscroll
     * Based on smartresize by @louis_remi: https://github.com/lrbabe/jquery.smartresize.js *
     * Copyright 2011 Louis-Remi & Luke Shumard * Licensed under the MIT license. *
     */

    var event = $.event,
    scrollTimeout;

    event.special.smartscroll = {
        setup: function () {
            $(this).bind('scroll', event.special.smartscroll.handler);
        },
        teardown: function () {
            $(this).unbind('scroll', event.special.smartscroll.handler);
        },
        handler: function (event, execAsap) {
            // Save the context
            var context = this,
            args = arguments;

            // set correct event type
            event.type = 'smartscroll';

            if (scrollTimeout) { clearTimeout(scrollTimeout); }
            scrollTimeout = setTimeout(function () {
                $(context).trigger('smartscroll', args);
            }, execAsap === 'execAsap' ? 0 : 100);
        }
    };

    $.fn.smartscroll = function (fn) {
        return fn ? this.bind('smartscroll', fn) : this.trigger('smartscroll', ['execAsap']);
    };

}));
;
(function($) {
  // put together the name of the new jQuery variable
  var version = $().jquery;
  var versionName = version.replace(/\./g, '');
  // save the new version of jQuery globally and restore Drupal version
  window['jq' + versionName] = jQuery.noConflict(true);
})(jQuery);;
/**
 * Add the following features to the date combo widget
 *   Update the "to" field when changing the "from" field to maintain duration
 *   Add a dropdown timepicker
 *   Add an "All Day" button
 */
Drupal.dateTweaks = {
    duration : [],
    restore : []
};

/**
 * When document loads, process the date field and set event handlers
 */
$(document).ready(function() { 
  // Process evey combo
  $('.datetweaks-datecombo').each(function(){
    var combo = $(this);
    
    // When the "from" field changes, automatically adjust the "to" field
    combo.find('.datetweaks-value input').change(function(){
      Drupal.dateTweaks.setTo(combo);

      // When the timpicker changes the "from" field, automatically adjust the "to" field
    }).bind('time-change', function(){
      Drupal.dateTweaks.setTo(combo);
    });

    // When the "to" field changes, calculate the duration
    combo.find('.datetweaks-value2 input').change(function(){
      Drupal.dateTweaks.setDuration(combo);

    // When the timpicker changes the "to" field, calculate the duration
    }).bind('time-change', function(){
      Drupal.dateTweaks.setDuration(combo);
    });
    
    // Set the initial duration
    Drupal.dateTweaks.setDuration(combo);
    
    // When All Day checkbox changes, process all day
    var allDay = combo.find('.datetweaks-all-day');
    allDay.click(function(){
      Drupal.dateTweaks.setAllDay(combo);
    });

    // If All Day, disable the time values
    if (allDay.attr('checked')) {
      Drupal.dateTweaks.setAllDay(combo);
    }
  });
  
  // If set, change every "time" field to a dropdown timepicker
  if (Drupal.settings.datetweaks.use_dropdown == true) {
    $('.datetweaks-time').each(function() {
      var timeField = $(this);
      var date = Date.parseDate(timeField.val(), timeField.attr('format'));
      
      // Convert to compatible format for timepicker
      var timeFormat = timeField.attr('format').replace('i', 'mm').replace('A', 'p');
      timeField.timepicker({timeFormat: timeFormat, interval : 15, startTime : date});
    });
  }
});


/**
 * Set the "to" field
 */
Drupal.dateTweaks.setTo = function (combo) {
  var id = combo.attr('id');
  var duration = this.duration[id];
  if (duration == null) {
    this.setDuration(combo);
  } else {
    var start = this.getDateValue(combo.find('.datetweaks-value'));
    var end = start.getTime() + duration;
    end = new Date(end);
    dateField2 = combo.find('.datetweaks-value2 .datetweaks-date');
    dateField2.val(end.dateFormat(dateField2.attr('format')));
    timeField2 = combo.find('.datetweaks-value2 .datetweaks-time');
    timeField2.val(end.dateFormat(timeField2.attr('format')));
    this.setTimepicker(timeField2, end);
  }
};

/**
 * Calculate the duration
 */
Drupal.dateTweaks.setDuration = function (combo) {
  try {
    var id = combo.attr('id');
    var start = this.getDateValue(combo.find('.datetweaks-value'));
    var end = this.getDateValue(combo.find('.datetweaks-value2'));
    this.duration[id] = end.getTime() - start.getTime();
  }catch(e){
    this.duration[id] = null;
  }
};

/**
 * Check the state of the "All Day" checkbox - if on, disable the time fields; otherwise,
 * restore previously set times
 */
Drupal.dateTweaks.setAllDay = function (combo) {
  var id = combo.attr('id');
  var allDay = combo.find('.datetweaks-all-day');
  var dateField1 = combo.find('.datetweaks-value .datetweaks-date');
  var dateField2 = combo.find('.datetweaks-value2 .datetweaks-date');
  var timeField1 = combo.find('.datetweaks-value .datetweaks-time');
  var timeField2 = combo.find('.datetweaks-value2 .datetweaks-time');
  
  if (allDay.attr('checked')) {
    this.restore[id] = {
      date1 : dateField1.val(), 
      time1 : timeField1.val(), 
      date2 : dateField2.val(), 
      time2 : timeField2.val()
    };
    var format = dateField1.attr('format') + ' h:i';
    var date = Date.parseDate(dateField1.val() + ' 00:00', format);
    if (date != null) {
      timeField1.val(date.dateFormat(timeField1.attr('format')));
      timeField2.val(date.dateFormat(timeField2.attr('format')));
    }
    timeField1.attr('disabled', 'disabled');
    timeField2.attr('disabled', 'disabled');
    var hidden = $('<input type="hidden" class="datetweaks-all-day-time"/>').attr('name',timeField1.attr('name')).val(timeField1.val());
    combo.append(hidden);
    hidden = $('<input type="hidden" class="datetweaks-all-day-time"/>').attr('name',timeField2.attr('name')).val(timeField2.val());
    combo.append(hidden);
  }
  else{
    var restore = this.restore[id];
    if (restore == null || restore.time1 == null || restore.time2 == null || restore.time1 == restore.time2) {
      var start = new Date();
      var minutes = start.getMinutes();
      minutes = Math.round(minutes / 60 * 4) * 15; // 15 minute increments
      start.setMinutes(minutes, 0, 0);
      dateField1.val(start.dateFormat(dateField1.attr('format')));
      timeField1.val(start.dateFormat(timeField1.attr('format'))).attr('disabled', '');
      this.setTimepicker(timeField1, start);
      this.duration[id] = 60 * 60 * 1000;  // 1 hour duration
    }
    else  if (restore != null) {
      dateField1.val(restore.date1);
      timeField1.val(restore.time1).attr('disabled', '');
    }
    timeField2.attr('disabled', '');
    this.setTo(combo);
    combo.find('.datetweaks-all-day-time').remove();
  }
};

/**
 * Set the timepicker dropdown to the current value in the time field
 */
Drupal.dateTweaks.setTimepicker = function (timeField, time) {
  if (Drupal.settings.datetweaks.use_dropdown == true) {
    // Set the timepicker to the new time.
    // The time picker normalize off an arbitary date - kinda wierd
    date = new Date(1988, 7, 24, time.getHours(), time.getMinutes(), 00);
    var timePicker = timeField.data('TimePicker');
    if (timePicker != null) {
      timePicker.setTime(date);
    }
  }
};

/**
 * Parse date and time into a Date Object
 */
Drupal.dateTweaks.getDateValue = function(value) {
  var dateField = value.find('.datetweaks-date');
  var dateVal = dateField.val();
  var timeField = value.find('.datetweaks-time');
  var timeVal = timeField.val();
  var dateStr = dateVal + ' ' + timeVal;
  var format = dateField.attr('format') + ' ' + timeField.attr('format');
  return Date.parseDate(dateStr, format);
};

;
﻿/*
 * http://code.google.com/p/flexible-js-formatting/
 * 
 * Copyright (C) 2004 Baron Schwartz <baron at sequent dot org>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Date.parseFunctions = {count:0};
Date.parseRegexes = [];
Date.formatFunctions = {count:0};

Date.prototype.dateFormat = function(format, ignore_offset) {
    if (Date.formatFunctions[format] == null) {
        Date.createNewFormat(format);
    }
    var func = Date.formatFunctions[format];
    if (ignore_offset || ! this.offset) {
      return this[func]();
    } else {
      return (new Date(this.valueOf() - this.offset))[func]();
    }
};

Date.createNewFormat = function(format) {
    var funcName = "format" + Date.formatFunctions.count++;
    Date.formatFunctions[format] = funcName;
    var code = "Date.prototype." + funcName + " = function(){return ";
    var special = false;
    var ch = '';
    for (var i = 0; i < format.length; ++i) {
        ch = format.charAt(i);
		// escape character start
        if (!special && ch == "\\") {
            special = true;
        }
		// escaped string
        else if (!special && ch == '"') {
			var end = format.indexOf('"', i+1);
			if (end==-1)
			{
				end = format.length;
			}
            code += "'" + String.escape(format.substring(i+1, end)) + "' + ";
			i = end;
        }
		// escaped character
        else if (special) {
            special = false;
            code += "'" + String.escape(ch) + "' + ";
        }
        else {
            code += Date.getFormatCode(ch);
        }
    }
    eval(code.substring(0, code.length - 3) + ";}");
};

Date.getFormatCode = function(character) {
    switch (character) {
    case "d":
        return "String.leftPad(this.getDate(), 2, '0') + ";
    case "D":
        return "Date.dayNames[this.getDay()].substring(0, 3) + ";
    case "j":
        return "this.getDate() + ";
    case "l":
        return "Date.dayNames[this.getDay()] + ";
    case "S":
        return "this.getSuffix() + ";
    case "w":
        return "this.getDay() + ";
    case "z":
        return "this.getDayOfYear() + ";
    case "W":
        return "this.getWeekOfYear() + ";
    case "F":
        return "Date.monthNames[this.getMonth()] + ";
    case "m":
        return "String.leftPad(this.getMonth() + 1, 2, '0') + ";
    case "M":
        return "Date.monthNames[this.getMonth()].substring(0, 3) + ";
    case "n":
        return "(this.getMonth() + 1) + ";
    case "t":
        return "this.getDaysInMonth() + ";
    case "L":
        return "(this.isLeapYear() ? 1 : 0) + ";
    case "Y":
        return "this.getFullYear() + ";
    case "y":
        return "('' + this.getFullYear()).substring(2, 4) + ";
    case "a":
        return "(this.getHours() < 12 ? 'am' : 'pm') + ";
    case "A":
        return "(this.getHours() < 12 ? 'AM' : 'PM') + ";
    case "g":
        return "((this.getHours() %12) ? this.getHours() % 12 : 12) + ";
    case "G":
        return "this.getHours() + ";
    case "h":
        return "String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";
    case "H":
        return "String.leftPad(this.getHours(), 2, '0') + ";
    case "i":
        return "String.leftPad(this.getMinutes(), 2, '0') + ";
    case "s":
        return "String.leftPad(this.getSeconds(), 2, '0') + ";
    case "X":
        return "String.leftPad(this.getMilliseconds(), 3, '0') + ";
    case "O":
        return "this.getGMTOffset() + ";
    case "T":
        return "this.getTimezone() + ";
    case "Z":
        return "(this.getTimezoneOffset() * -60) + ";
    case "q":	// quarter num, Q for name?
        return "this.getQuarter() + ";
    default:
        return "'" + String.escape(character) + "' + ";
    }
};

Date.parseDate = function(input, format) {
    if (Date.parseFunctions[format] == null) {
        Date.createParser(format);
    }
    var func = Date.parseFunctions[format];
    return Date[func](input);
};

Date.createParser = function(format) {
    var funcName = "parse" + Date.parseFunctions.count++;
    var regexNum = Date.parseRegexes.length;
    var currentGroup = 1;
    Date.parseFunctions[format] = funcName;

    var code = "Date." + funcName + " = function(input){\n"
        + "var y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, ms = -1, z = 0;\n"
        + "var d = new Date();\n"
        + "y = d.getFullYear();\n"
        + "m = d.getMonth();\n"
        + "d = d.getDate();\n"
        + "var results = input.match(Date.parseRegexes[" + regexNum + "]);\n"
        + "if (results && results.length > 0) {" ;
    var regex = "";

    var special = false;
    var ch = '';
    for (var i = 0; i < format.length; ++i) {
        ch = format.charAt(i);
        if (!special && ch == "\\") {
            special = true;
        }
        else if (special) {
            special = false;
            regex += String.escape(ch);
        }
        else {
            obj = Date.formatCodeToRegex(ch, currentGroup);
            currentGroup += obj.g;
            regex += obj.s;
            if (obj.g && obj.c) {
                code += obj.c;
            }
        }
    }

    code += "if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0 && ms >= 0)\n"
        + "{return new Date(y, m, d, h, i, s, ms).applyOffset(z);}\n"
        + "if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n"
        + "{return new Date(y, m, d, h, i, s).applyOffset(z);}\n"
        + "else if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n"
        + "{return new Date(y, m, d, h, i).applyOffset(z);}\n"
        + "else if (y > 0 && m >= 0 && d > 0 && h >= 0)\n"
        + "{return new Date(y, m, d, h).applyOffset(z);}\n"
        + "else if (y > 0 && m >= 0 && d > 0)\n"
        + "{return new Date(y, m, d).applyOffset(z);}\n"
        + "else if (y > 0 && m >= 0)\n"
        + "{return new Date(y, m).applyOffset(z);}\n"
        + "else if (y > 0)\n"
        + "{return new Date(y).applyOffset(z);}\n"
        + "}return null;}";

    Date.parseRegexes[regexNum] = new RegExp("^" + regex + "$");
    eval(code);
};

Date.formatCodeToRegex = function(character, currentGroup) {
    switch (character) {
    case "D":
        return {g:0,
        c:null,
        s:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};
    case "j":
    case "d":
        return {g:1,
            c:"d = parseInt(results[" + currentGroup + "], 10);\n",
            s:"(\\d{1,2})"};
    case "l":
        return {g:0,
            c:null,
            s:"(?:" + Date.dayNames.join("|") + ")"};
    case "S":
        return {g:0,
            c:null,
            s:"(?:st|nd|rd|th)"};
    case "w":
        return {g:0,
            c:null,
            s:"\\d"};
    case "z":
        return {g:0,
            c:null,
            s:"(?:\\d{1,3})"};
    case "W":
        return {g:0,
            c:null,
            s:"(?:\\d{2})"};
    case "F":
        return {g:1,
            c:"m = parseInt(Date.monthNumbers[results[" + currentGroup + "].substring(0, 3)], 10);\n",
            s:"(" + Date.monthNames.join("|") + ")"};
    case "M":
        return {g:1,
            c:"m = parseInt(Date.monthNumbers[results[" + currentGroup + "]], 10);\n",
            s:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};
    case "n":
    case "m":
        return {g:1,
            c:"m = parseInt(results[" + currentGroup + "], 10) - 1;\n",
            s:"(\\d{1,2})"};
    case "t":
        return {g:0,
            c:null,
            s:"\\d{1,2}"};
    case "L":
        return {g:0,
            c:null,
            s:"(?:1|0)"};
    case "Y":
        return {g:1,
            c:"y = parseInt(results[" + currentGroup + "], 10);\n",
            s:"(\\d{4})"};
    case "y":
        return {g:1,
            c:"var ty = parseInt(results[" + currentGroup + "], 10);\n"
                + "y = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",
            s:"(\\d{1,2})"};
    case "a":
        return {g:1,
            c:"if (results[" + currentGroup + "] == 'am') {\n"
                + "if (h == 12) { h = 0; }\n"
                + "} else { if (h < 12) { h += 12; }}",
            s:"(am|pm)"};
    case "A":
        return {g:1,
            c:"if (results[" + currentGroup + "] == 'AM') {\n"
                + "if (h == 12) { h = 0; }\n"
                + "} else { if (h < 12) { h += 12; }}",
            s:"(AM|PM)"};
    case "g":
    case "G":
    case "h":
    case "H":
        return {g:1,
            c:"h = parseInt(results[" + currentGroup + "], 10);\n",
            s:"(\\d{1,2})"};
    case "i":
        return {g:1,
            c:"i = parseInt(results[" + currentGroup + "], 10);\n",
            s:"(\\d{2})"};
    case "s":
        return {g:1,
            c:"s = parseInt(results[" + currentGroup + "], 10);\n",
            s:"(\\d{2})"};
    case "X":
      return {g:1,
          c:"ms = parseInt(results[" + currentGroup + "], 10);\n",
          s:"(\\d{3})"};
    case "O":
    case "P":
        return {g:1,
            c:"z = Date.parseOffset(results[" + currentGroup + "], 10);\n",
            s:"(Z|[+-]\\d{2}:?\\d{2})"}; // "Z", "+05:00", "+0500" all acceptable.
    case "T":
        return {g:0,
            c:null,
            s:"[A-Z]{3}"};
    case "Z":
        return {g:1,
            c:"s = parseInt(results[" + currentGroup + "], 10);\n",
            s:"([+-]\\d{1,5})"};
    default:
        return {g:0,
            c:null,
            s:String.escape(character)};
    }
};

Date.parseOffset = function(str) {
  if (str == "Z") { return 0 ; } // UTC, no offset.
  var seconds ;
  seconds = parseInt(str[0] + str[1] + str[2]) * 3600 ; // e.g., "+05" or "-08"
  if (str[3] == ":") {            // "+HH:MM" is preferred iso8601 format ("O")
    seconds += parseInt(str[4] + str[5]) * 60;
  } else {                      // "+HHMM" is frequently used, though. ("P")
    seconds += parseInt(str[3] + str[4]) * 60;
  }
  return seconds ;
};

// convert the parsed date into UTC, but store the offset so we can optionally use it in dateFormat()
Date.prototype.applyOffset = function(offset_seconds) {
  this.offset = offset_seconds * 1000 ;
  this.setTime(this.valueOf() + this.offset);
  return this ;
};

Date.prototype.getTimezone = function() {
    return this.toString().replace(
        /^.*? ([A-Z]{3}) [0-9]{4}.*$/, "$1").replace(
        /^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, "$1$2$3").replace(
        /^.*?[0-9]{4} \(([A-Z]{3})\)/, "$1");
};

Date.prototype.getGMTOffset = function() {
    return (this.getTimezoneOffset() > 0 ? "-" : "+")
        + String.leftPad(Math.floor(this.getTimezoneOffset() / 60), 2, "0")
        + String.leftPad(this.getTimezoneOffset() % 60, 2, "0");
};

Date.prototype.getDayOfYear = function() {
    var num = 0;
    Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
    for (var i = 0; i < this.getMonth(); ++i) {
        num += Date.daysInMonth[i];
    }
    return num + this.getDate() - 1;
};

Date.prototype.getWeekOfYear = function() {
    // Skip to Thursday of this week
    var now = this.getDayOfYear() + (4 - this.getDay());
    // Find the first Thursday of the year
    var jan1 = new Date(this.getFullYear(), 0, 1);
    var then = (7 - jan1.getDay() + 4);
    document.write(then);
    return String.leftPad(((now - then) / 7) + 1, 2, "0");
};

Date.prototype.isLeapYear = function() {
    var year = this.getFullYear();
    return ((year & 3) == 0 && (year % 100 || (year % 400 == 0 && year)));
};

Date.prototype.getFirstDayOfMonth = function() {
    var day = (this.getDay() - (this.getDate() - 1)) % 7;
    return (day < 0) ? (day + 7) : day;
};

Date.prototype.getLastDayOfMonth = function() {
    var day = (this.getDay() + (Date.daysInMonth[this.getMonth()] - this.getDate())) % 7;
    return (day < 0) ? (day + 7) : day;
};

Date.prototype.getDaysInMonth = function() {
    Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
    return Date.daysInMonth[this.getMonth()];
};
Date.prototype.getQuarter = function() {
    return Date.quarterFromMonthNum[this.getMonth()];
};

Date.prototype.getSuffix = function() {
    switch (this.getDate()) {
        case 1:
        case 21:
        case 31:
            return "st";
        case 2:
        case 22:
            return "nd";
        case 3:
        case 23:
            return "rd";
        default:
            return "th";
    }
};

String.escape = function(string) {
    return string.replace(/('|\\)/g, "\\$1");
};

String.leftPad = function (val, size, ch) {
    var result = new String(val);
    if (ch == null) {
        ch = " ";
    }
    while (result.length < size) {
        result = ch + result;
    }
    return result;
};

Date.quarterFromMonthNum = [1,1,1,2,2,2,3,3,3,4,4,4];
Date.daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
Date.monthNames =
   ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];
Date.dayNames =
   ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];
Date.y2kYear = 50;
Date.monthNumbers = {
    Jan:0,
    Feb:1,
    Mar:2,
    Apr:3,
    May:4,
    Jun:5,
    Jul:6,
    Aug:7,
    Sep:8,
    Oct:9,
    Nov:10,
    Dec:11};
Date.patterns = {
    ISO8601LongPattern: "Y\\-m\\-d\\TH\\:i\\:sO",
    ISO8601ShortPattern: "Y\\-m\\-d",
    ShortDatePattern: "n/j/Y",
    LongDatePattern: "l, F d, Y",
    FullDateTimePattern: "l, F d, Y g:i:s A",
    MonthDayPattern: "F d",
    ShortTimePattern: "g:i A",
    LongTimePattern: "g:i:s A",
    SortableDateTimePattern: "Y-m-d\\TH:i:s",
    UniversalSortableDateTimePattern: "Y-m-d H:i:sO",
    YearMonthPattern: "F, Y"};
;
// $Id: dhtml_menu.js,v 1.18.2.10 2009/01/12 10:13:30 arancaytar Exp $

/**
 * @file dhtml_menu.js
 * The Javascript code for DHTML Menu
 */
 
Drupal.dhtmlMenu = {};

/**
 * Initialize the module's JS functions
 */
Drupal.behaviors.dhtmlMenu = function() {
  // Do not run this function more than once.
  if (Drupal.dhtmlMenu.init) {
    return;
  }
  else {
    Drupal.dhtmlMenu.init = true;
  }

  // Get the settings.
  var effects = Drupal.settings.dhtmlMenu;

  $('.collapsed').removeClass('expanded');

  // Get cookie
  if (!effects.siblings) {
    var cookie = Drupal.dhtmlMenu.cookieGet();
    for (var i in cookie) {
      // If the cookie was not applied to the HTML code yet, do so now.
      var li = $('#dhtml_menu-' + cookie[i]).parents('li:first');
      if ($(li).hasClass('collapsed')) {
        Drupal.dhtmlMenu.toggleMenu(li);
      }
    }
  }

  /* Add jQuery effects and listeners to all menu items.
   * The ~ (sibling) selector is unidirectional and selects 
   * only the latter element, so we must use siblings() to get 
   * back to the link element.
   */
   $('ul.menu li.dhtml-menu:not(.leaf,.no-dhtml)').each(function() {
    var li = this;
    if (effects.clone) {
      var ul = $(li).find('ul:first');
      if (ul.length) {
        $(li).find('a:first').clone().prependTo(ul).wrap('<li class="leaf fake-leaf"></li>');
      }
    }

    if (effects.doubleclick) {
      $(li).find('a:first').dblclick(function(e) {
        window.location = this.href;
      });
    }

    $(li).find('a:first').click(function(e) {
      Drupal.dhtmlMenu.toggleMenu($(li));
      return false;
    });
  });
}

/**
 * Toggles the menu's state between open and closed.
 *
 * @param li
 *   Object. The <li> element that will be expanded or collapsed.
 */
Drupal.dhtmlMenu.toggleMenu = function(li) {
  var effects = Drupal.settings.dhtmlMenu;

  // If the menu is expanded, collapse it.
  if($(li).hasClass('expanded')) {
    if (effects.slide) {
      $(li).find('ul:first').animate({height: 'hide', opacity: 'hide'}, '1000');
    }
    else $(li).find('ul:first').css('display', 'none');

    // If children are closed automatically, find and close them now.
    if (effects.children) {
      if (effects.slide) {
        $(li).find('li.expanded').find('ul:first').animate({height: 'hide', opacity: 'hide'}, '1000');
      }
      else $(li).find('li.expanded').find('ul:first').css('display', 'none');

      $(li).find('li.expanded').removeClass('expanded').addClass('collapsed')
    }

    $(li).removeClass('expanded').addClass('collapsed');
  }

  // Otherwise, expand it.
  else {
    if (effects.slide) {
      $(li).find('ul:first').animate({height: 'show', opacity: 'show'}, '1000');
    }
    else $(li).find('ul:first').css('display', 'block');
    $(li).removeClass('collapsed').addClass('expanded');

    // If the siblings effect is on, close all sibling menus.
    if (effects.siblings) {
      var id = $(li).find('a:first').attr('id');

      // Siblings are all open menus that are neither parents nor children of this menu.
      $(li).find('li').addClass('own-children-temp');
	  
      // If the relativity option is on, select only the siblings that have the same parent
      if (effects.relativity) {
        var siblings = $(li).parent().find('li.expanded').not('.own-children-temp').not(':has(#' + id + ')');
      }
      // Otherwise, select all menus of the same level
      else {
        var siblings = $('ul.menu li.expanded').not('.own-children-temp').not(':has(#' + id + ')');
      }

      // If children should not get closed automatically...
      if (!effects.children) {
        // Remove items that are currently hidden from view (do not close these).
        $('li.collapsed li.expanded').addClass('sibling-children-temp');
        // Only close the top-most open sibling, not its children.
        $(siblings).find('li.expanded').addClass('sibling-children-temp');
        siblings = $(siblings).not('.sibling-children-temp');
      }

      $('.own-children-temp, .sibling-children-temp').removeClass('own-children-temp').removeClass('sibling-children-temp');

      if (effects.slide) {
        $(siblings).find('ul:first').animate({height: 'hide', opacity: 'hide'}, '1000');
      }
      else $(siblings).find('ul:first').css('display', 'none');

      $(siblings).removeClass('expanded').addClass('collapsed');
    }
  }

  // Save the current state of the menus in the cookie.
  Drupal.dhtmlMenu.cookieSet();
}

/**
 * Reads the dhtml_menu cookie.
 */
Drupal.dhtmlMenu.cookieGet = function() {
  var c = /dhtml_menu=(.*?)(;|$)/.exec(document.cookie);
  if (c) {
    return c[1];
  }
  else return '';
}

/**
 * Saves the dhtml_menu cooki.
 */
Drupal.dhtmlMenu.cookieSet = function() {
  var expanded = new Array();
  $('li.expanded').each(function() {
    expanded.push($(this).find('a:first').attr('id').substr(5));
  });
  document.cookie = 'dhtml_menu=' + expanded.join(',') + ';path=/';
}

;

(function ($) {
  Drupal.Panels = {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
;
/****************************
 * Node Types http://www.w3schools.com/dom/dom_nodetype.asp
 * NodeType 	Named Constant
 * 1 	ELEMENT_NODE
 * 2 	ATTRIBUTE_NODE
 * 3 	TEXT_NODE
 * 4 	CDATA_SECTION_NODE
 * 5 	ENTITY_REFERENCE_NODE
 * 6 	ENTITY_NODE
 * 7 	PROCESSING_INSTRUCTION_NODE
 * 8 	COMMENT_NODE
 * 9 	DOCUMENT_NODE
 * 10 	DOCUMENT_TYPE_NODE
 * 11 	DOCUMENT_FRAGMENT_NODE
 * 12 	NOTATION_NODE
 ****************************/

var TongWen = (function () {
	var
		version  = "0.2",         // 版本

		flagSimp = "simplified",  // 簡體
		flagTrad = "traditional", // 繁體

		zhEncodesSimp = ["gb2312", "gbk", "x-gbk", "gb18030", "hz-gb-2312", "iso-2022-cn"],
		zhEncodesTrad = ["big5", "big5-hkscs", "x-euc-tw"],
		zhEncodesAll  = zhEncodesSimp.concat(zhEncodesTrad, ["utf-7", "utf-8", "utf-16le", "x-user-defined"]),

		t2s = {},                 // 繁轉簡 對照表
		s2t = {},                 // 簡轉繁 對照表

		maxSTLen = 1,             // 簡轉繁 最長的詞句
		maxTSLen = 1,             // 繁轉簡 最長的詞句

		curZhFlag      = "",      // 目前網頁編碼
		toolbarShow    = false;
		return init();
		// TongWen = window.TongWen = init();

	function init() {
		var that = this;
		toolbarId = "tongwen-" + Math.ceil(Math.random() * 1000000);

		if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", function () { winLoad() }, false);
		} else if (window.attachEvent) {
			window.attachEvent("onload", winLoad);
		}

		return {
			version    : version,
			flagSimp   : flagSimp,
			flagTrad   : flagTrad,
			addS2TTable: addS2TTable,
			addT2STable: addT2STable,
			convert    : convert,
			transPage  : transPage,
			trans2Trad : trans2Trad,
			trans2Simp : trans2Simp,
			transAuto  : transAuto
		}
	}

	function winLoad() {
		// createToolbar();
	}

	function createToolbar() {
		var node = document.createElement("div");
		node.style.width = "200px";
		node.style.height = "100px";
		node.style.position = "fixed";
		node.style.top = "10px";
		node.style.right = "10px";
		node.style.backgroundColor = "#F00";
		document.body.appendChild(node);
	}

// =============================================================================

	// 新增 簡轉繁 對照表
	function addS2TTable(table) {
		for (var i in table) {
			maxSTLen = Math.max(maxSTLen, table[i].length);
			s2t[i] = table[i];
		}
	}

	// 新增 繁轉簡 對照表
	function addT2STable(table) {
		for (var i in table) {
			maxTSLen = Math.max(maxTSLen, table[i].length);
			t2s[i] = table[i];
		}
	}

	function setZhFlag(doc, zhflag) {
		doc.documentElement.setAttribute("zhtongwen", zhflag);
	};

	function getZhFlag(doc) {
		var zhflag = "";
		if (doc && doc.documentElement) {
			zhflag = doc.documentElement.getAttribute("zhtongwen");
			if (zhflag == null) zhflag = "";
		}
		return zhflag;
	};

	// 繁簡轉換
	function convert(str, zhflag) {
		var leng = 4;
		var zmap = null;

		if (zhflag == flagSimp) {
			// 繁轉簡
			zmap = t2s;
			leng = Math.min(maxTSLen, str.length);
		} else {
			// 簡轉繁
			zmap = s2t;
			leng = Math.min(maxSTLen, str.length);
		}

		// 單字轉換
		str = str.split("");
		for (var i = 0, c = str.length; i < c; i++) {
			str[i] = zmap[str[i]] || str[i];
		}
		str = str.join("");

		// 詞彙轉換
		var txt = "", s = "", bol = true;
		for (var i = 0, c = str.length; i < c;) {
			bol = true;
			for (var j = leng; j > 1; j--) {
				s = str.substr(i, j);
				if (s in zmap) {
					txt += zmap[s];
					i += j;
					bol = false;
					break;
				}
			}

			if (bol) {
				txt += str.substr(i, 1);
				i++;
			}
		}
		if (txt != "") str = txt;
		return str;
	}

	function parseTree(doc, zhflag) {
		var nodes = [];
		var frame = [];

		function step() {
			if (nodes.length <= 0) {
				if (frame.length <= 0) {
					return;
				} else {
					transPage(frame.shift(), zhflag);
				}
			}
			var node = nodes.shift();
			var attr = null;

			// Node Types http://www.w3schools.com/dom/dom_nodetype.asp
			switch (node.nodeType) {
				case 1: // ELEMENT_NODE
					switch (node.nodeName.toLowerCase()) {
						case "frame" :
						case "iframe":
							if (typeof node.contentDocument != "undefined") {
								transPage(node.contentDocument, zhflag);
								// frame.push(node.contentDocument);
							} else if ((typeof node.contentWindow != "undefined") && (typeof node.contentWindow.document != "undefined")) {
								transPage(node.contentWindow.document, zhflag);
								// frame.push(node.contentWindow.document);
							}
							// transPage(node.contentDocument || node.contentWindow.document, zhflag);
							// frame.push(node.contentDocument || node.contentWindow.document);
							break;
						case "embed"   :
						case "object"  :
						case "script"  :
						case "style"   :
						case "title"   :
						case "br"      :
						case "hr"      :
						case "noscript":
						case "script"  :
							break;
						case "img":
							attr = node.getAttribute("title");
							if (attr != null) {
								node.setAttribute("title", convert(attr, zhflag));
							}
							attr = node.getAttribute("alt");
							if (attr != null) {
								node.setAttribute("alt", convert(attr, zhflag));
							}
							break;
						case "input":
							switch(node.type.toLowerCase()){
								case "button":
								case "submit":
								case "reset":
								// case "text": // keep org value
									if (node.value.length > 0) {
										node.value = convert(node.value, zhflag);
									}
									break;
								default:
							}
							break;
						case "option":
							if (node.text.length > 0) {
								node.text = convert(node.text, zhflag);
							}
							break;
						default:
							attr = node.getAttribute("title");
							if (attr != null) {
								node.setAttribute("title", convert(attr, zhflag));
							}
							if (node.hasChildNodes()) {
								for (var i = 0, c = node.childNodes.length; i < c; i++) {
									if ("139".indexOf(node.childNodes[i].nodeType) < 0) continue;
									nodes.push(node.childNodes[i]);
								}
							}
							break;
					}
					break;
				case 3: // TEXT_NODE
					var val = node.nodeValue;
					if (val.length > 0) {
						node.nodeValue = convert(val, zhflag);
					}
					step();
					break;
				case 9: // DOCUMENT_NODE
					if (node.hasChildNodes()) {
						for (var i = 0, c = node.childNodes.length; i < c; i++) {
							if ("139".indexOf(node.childNodes[i].nodeType) < 0) continue;
							nodes.push(node.childNodes[i]);
						}
					}
					break;
			}

			if ((nodes.length > 0) || (frame.length > 0)) {
				setTimeout(step, 1);
			}
		}

		nodes.push(doc);
		setTimeout(step, 1);
	}

	function transPage(doc, zhflag) {
		curZhFlag = zhflag;
		setZhFlag(doc, zhflag);
		doc.title = convert(doc.title, zhflag);
		parseTree(doc, zhflag);
	}

	function trans2Trad(doc) {
		transPage(doc || document, flagTrad);
	}

	function trans2Simp(doc) {
		transPage(doc || document, flagSimp);
	}

	function transAuto(doc) {
		var curDoc  = doc || document;
		var charset = curDoc.characterSet.toLowerCase();

		curZhFlag = getZhFlag(doc);
		if (curZhFlag == "") {
			var lang = curDoc.documentElement.getAttribute("lang");
			if (lang != null) {
				switch (lang.toLowerCase()) {
					case "zh-tw":
					case "zh-hk":
						curZhFlag = flagSimp;
						break;
					case "zh-cn":
						curZhFlag = flagTrad;
						break;
				}
			}

			if ((curZhFlag == "") && (zhEncodesAll.indexOf(charset) >= 0)) {
				curZhFlag = (zhEncodesTrad.indexOf(charset) >= 0) ? flagSimp : flagTrad;
			}
		} else {
			curZhFlag = (curZhFlag == flagTrad) ? flagSimp : flagTrad;
		}
		if (curZhFlag == "") return;

		transPage(curDoc, curZhFlag);
	}

})();
;
/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.88 (08-JUN-2010)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.2.6 or later
 */
(function($){var ver="2.88";if($.support==undefined){$.support={opacity:!($.browser.msie)};}function debug(s){if($.fn.cycle.debug){log(s);}}function log(){if(window.console&&window.console.log){window.console.log("[cycle] "+Array.prototype.join.call(arguments," "));}}$.fn.cycle=function(options,arg2){var o={s:this.selector,c:this.context};if(this.length===0&&options!="stop"){if(!$.isReady&&o.s){log("DOM not ready, queuing slideshow");$(function(){$(o.s,o.c).cycle(options,arg2);});return this;}log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));return this;}return this.each(function(){var opts=handleArguments(this,options,arg2);if(opts===false){return;}opts.updateActivePagerLink=opts.updateActivePagerLink||$.fn.cycle.updateActivePagerLink;if(this.cycleTimeout){clearTimeout(this.cycleTimeout);}this.cycleTimeout=this.cyclePause=0;var $cont=$(this);var $slides=opts.slideExpr?$(opts.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){log("terminating; too few slides: "+els.length);return;}var opts2=buildOptions($cont,$slides,els,opts,o);if(opts2===false){return;}var startTime=opts2.continuous?10:getTimeout(els[opts2.currSlide],els[opts2.nextSlide],opts2,!opts2.rev);if(startTime){startTime+=(opts2.delay||0);if(startTime<10){startTime=10;}debug("first timeout: "+startTime);this.cycleTimeout=setTimeout(function(){go(els,opts2,0,(!opts2.rev&&!opts.backwards));},startTime);}});};function handleArguments(cont,options,arg2){if(cont.cycleStop==undefined){cont.cycleStop=0;}if(options===undefined||options===null){options={};}if(options.constructor==String){switch(options){case"destroy":case"stop":var opts=$(cont).data("cycle.opts");if(!opts){return false;}cont.cycleStop++;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);}cont.cycleTimeout=0;$(cont).removeData("cycle.opts");if(options=="destroy"){destroy(opts);}return false;case"toggle":cont.cyclePause=(cont.cyclePause===1)?0:1;checkInstantResume(cont.cyclePause,arg2,cont);return false;case"pause":cont.cyclePause=1;return false;case"resume":cont.cyclePause=0;checkInstantResume(false,arg2,cont);return false;case"prev":case"next":var opts=$(cont).data("cycle.opts");if(!opts){log('options not found, "prev/next" ignored');return false;}$.fn.cycle[options](opts);return false;default:options={fx:options};}return options;}else{if(options.constructor==Number){var num=options;options=$(cont).data("cycle.opts");if(!options){log("options not found, can not advance slide");return false;}if(num<0||num>=options.elements.length){log("invalid slide index: "+num);return false;}options.nextSlide=num;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}if(typeof arg2=="string"){options.oneTimeFx=arg2;}go(options.elements,options,1,num>=options.currSlide);return false;}}return options;function checkInstantResume(isPaused,arg2,cont){if(!isPaused&&arg2===true){var options=$(cont).data("cycle.opts");if(!options){log("options not found, can not resume");return false;}if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}go(options.elements,options,1,(!opts.rev&&!opts.backwards));}}}function removeFilter(el,opts){if(!$.support.opacity&&opts.cleartype&&el.style.filter){try{el.style.removeAttribute("filter");}catch(smother){}}}function destroy(opts){if(opts.next){$(opts.next).unbind(opts.prevNextEvent);}if(opts.prev){$(opts.prev).unbind(opts.prevNextEvent);}if(opts.pager||opts.pagerAnchorBuilder){$.each(opts.pagerAnchors||[],function(){this.unbind().remove();});}opts.pagerAnchors=null;if(opts.destroy){opts.destroy(opts);}}function buildOptions($cont,$slides,els,options,o){var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});if(opts.autostop){opts.countdown=opts.autostopCount||els.length;}var cont=$cont[0];$cont.data("cycle.opts",opts);opts.$cont=$cont;opts.stopCount=cont.cycleStop;opts.elements=els;opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];opts.after.unshift(function(){opts.busy=0;});if(!$.support.opacity&&opts.cleartype){opts.after.push(function(){removeFilter(this,opts);});}if(opts.continuous){opts.after.push(function(){go(els,opts,0,(!opts.rev&&!opts.backwards));});}saveOriginalOpts(opts);if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($slides);}if($cont.css("position")=="static"){$cont.css("position","relative");}if(opts.width){$cont.width(opts.width);}if(opts.height&&opts.height!="auto"){$cont.height(opts.height);}if(opts.startingSlide){opts.startingSlide=parseInt(opts.startingSlide);}else{if(opts.backwards){opts.startingSlide=els.length-1;}}if(opts.random){opts.randomMap=[];for(var i=0;i<els.length;i++){opts.randomMap.push(i);}opts.randomMap.sort(function(a,b){return Math.random()-0.5;});opts.randomIndex=1;opts.startingSlide=opts.randomMap[1];}else{if(opts.startingSlide>=els.length){opts.startingSlide=0;}}opts.currSlide=opts.startingSlide||0;var first=opts.startingSlide;$slides.css({position:"absolute",top:0,left:0}).hide().each(function(i){var z;if(opts.backwards){z=first?i<=first?els.length+(i-first):first-i:els.length-i;}else{z=first?i>=first?els.length-(i-first):first-i:els.length-i;}$(this).css("z-index",z);});$(els[first]).css("opacity",1).show();removeFilter(els[first],opts);if(opts.fit&&opts.width){$slides.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}var reshape=opts.containerResize&&!$cont.innerHeight();if(reshape){var maxw=0,maxh=0;for(var j=0;j<els.length;j++){var $e=$(els[j]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();if(!w){w=e.offsetWidth||e.width||$e.attr("width");}if(!h){h=e.offsetHeight||e.height||$e.attr("height");}maxw=w>maxw?w:maxw;maxh=h>maxh?h:maxh;}if(maxw>0&&maxh>0){$cont.css({width:maxw+"px",height:maxh+"px"});}}if(opts.pause){$cont.hover(function(){this.cyclePause++;},function(){this.cyclePause--;});}if(supportMultiTransitions(opts)===false){return false;}var requeue=false;options.requeueAttempts=options.requeueAttempts||0;$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:($el.height()||this.offsetHeight||this.height||$el.attr("height")||0);this.cycleW=(opts.fit&&opts.width)?opts.width:($el.width()||this.offsetWidth||this.width||$el.attr("width")||0);if($el.is("img")){var loadingIE=($.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var loadingFF=($.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);var loadingOp=($.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);var loadingOther=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(loadingIE||loadingFF||loadingOp||loadingOther){if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){log(options.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){$(o.s,o.c).cycle(options);},opts.requeueTimeout);requeue=true;return false;}else{log("could not determine size of image: "+this.src,this.cycleW,this.cycleH);}}}return true;});if(requeue){return false;}opts.cssBefore=opts.cssBefore||{};opts.animIn=opts.animIn||{};opts.animOut=opts.animOut||{};$slides.not(":eq("+first+")").css(opts.cssBefore);if(opts.cssFirst){$($slides[first]).css(opts.cssFirst);}if(opts.timeout){opts.timeout=parseInt(opts.timeout);if(opts.speed.constructor==String){opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed);}if(!opts.sync){opts.speed=opts.speed/2;}var buffer=opts.fx=="shuffle"?500:250;while((opts.timeout-opts.speed)<buffer){opts.timeout+=opts.speed;}}if(opts.easing){opts.easeIn=opts.easeOut=opts.easing;}if(!opts.speedIn){opts.speedIn=opts.speed;}if(!opts.speedOut){opts.speedOut=opts.speed;}opts.slideCount=els.length;opts.currSlide=opts.lastSlide=first;if(opts.random){if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.backwards){opts.nextSlide=opts.startingSlide==0?(els.length-1):opts.startingSlide-1;}else{opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;}}if(!opts.multiFx){var init=$.fn.cycle.transitions[opts.fx];if($.isFunction(init)){init($cont,$slides,opts);}else{if(opts.fx!="custom"&&!opts.multiFx){log("unknown transition: "+opts.fx,"; slideshow terminating");return false;}}}var e0=$slides[first];if(opts.before.length){opts.before[0].apply(e0,[e0,e0,opts,true]);}if(opts.after.length>1){opts.after[1].apply(e0,[e0,e0,opts,true]);}if(opts.next){$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?-1:1);});}if(opts.prev){$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?1:-1);});}if(opts.pager||opts.pagerAnchorBuilder){buildPager(els,opts);}exposeAddSlide(opts,els);return opts;}function saveOriginalOpts(opts){opts.original={before:[],after:[]};opts.original.cssBefore=$.extend({},opts.cssBefore);opts.original.cssAfter=$.extend({},opts.cssAfter);opts.original.animIn=$.extend({},opts.animIn);opts.original.animOut=$.extend({},opts.animOut);$.each(opts.before,function(){opts.original.before.push(this);});$.each(opts.after,function(){opts.original.after.push(this);});}function supportMultiTransitions(opts){var i,tx,txs=$.fn.cycle.transitions;if(opts.fx.indexOf(",")>0){opts.multiFx=true;opts.fxs=opts.fx.replace(/\s*/g,"").split(",");for(i=0;i<opts.fxs.length;i++){var fx=opts.fxs[i];tx=txs[fx];if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){log("discarding unknown transition: ",fx);opts.fxs.splice(i,1);i--;}}if(!opts.fxs.length){log("No valid transitions named; slideshow terminating.");return false;}}else{if(opts.fx=="all"){opts.multiFx=true;opts.fxs=[];for(p in txs){tx=txs[p];if(txs.hasOwnProperty(p)&&$.isFunction(tx)){opts.fxs.push(p);}}}}if(opts.multiFx&&opts.randomizeEffects){var r1=Math.floor(Math.random()*20)+30;for(i=0;i<r1;i++){var r2=Math.floor(Math.random()*opts.fxs.length);opts.fxs.push(opts.fxs.splice(r2,1)[0]);}debug("randomized fx sequence: ",opts.fxs);}return true;}function exposeAddSlide(opts,els){opts.addSlide=function(newSlide,prepend){var $s=$(newSlide),s=$s[0];if(!opts.autostopCount){opts.countdown++;}els[prepend?"unshift":"push"](s);if(opts.els){opts.els[prepend?"unshift":"push"](s);}opts.slideCount=els.length;$s.css("position","absolute");$s[prepend?"prependTo":"appendTo"](opts.$cont);if(prepend){opts.currSlide++;opts.nextSlide++;}if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($s);}if(opts.fit&&opts.width){$s.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();$s.css(opts.cssBefore);if(opts.pager||opts.pagerAnchorBuilder){$.fn.cycle.createPagerAnchor(els.length-1,s,$(opts.pager),els,opts);}if($.isFunction(opts.onAddSlide)){opts.onAddSlide($s);}else{$s.hide();}};}$.fn.cycle.resetState=function(opts,fx){fx=fx||opts.fx;opts.before=[];opts.after=[];opts.cssBefore=$.extend({},opts.original.cssBefore);opts.cssAfter=$.extend({},opts.original.cssAfter);opts.animIn=$.extend({},opts.original.animIn);opts.animOut=$.extend({},opts.original.animOut);opts.fxFn=null;$.each(opts.original.before,function(){opts.before.push(this);});$.each(opts.original.after,function(){opts.after.push(this);});var init=$.fn.cycle.transitions[fx];if($.isFunction(init)){init(opts.$cont,$(opts.elements),opts);}};function go(els,opts,manual,fwd){if(manual&&opts.busy&&opts.manualTrump){debug("manualTrump in go(), stopping active transition");$(els).stop(true,true);opts.busy=false;}if(opts.busy){debug("transition active, ignoring new tx request");return;}var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual){return;}if(!manual&&!p.cyclePause&&!opts.bounce&&((opts.autostop&&(--opts.countdown<=0))||(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){if(opts.end){opts.end(opts);}return;}var changed=false;if((manual||!p.cyclePause)&&(opts.nextSlide!=opts.currSlide)){changed=true;var fx=opts.fx;curr.cycleH=curr.cycleH||$(curr).height();curr.cycleW=curr.cycleW||$(curr).width();next.cycleH=next.cycleH||$(next).height();next.cycleW=next.cycleW||$(next).width();if(opts.multiFx){if(opts.lastFx==undefined||++opts.lastFx>=opts.fxs.length){opts.lastFx=0;}fx=opts.fxs[opts.lastFx];opts.currFx=fx;}if(opts.oneTimeFx){fx=opts.oneTimeFx;opts.oneTimeFx=null;}$.fn.cycle.resetState(opts,fx);if(opts.before.length){$.each(opts.before,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});}var after=function(){$.each(opts.after,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});};debug("tx firing; currSlide: "+opts.currSlide+"; nextSlide: "+opts.nextSlide);opts.busy=1;if(opts.fxFn){opts.fxFn(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{if($.isFunction($.fn.cycle[opts.fx])){$.fn.cycle[opts.fx](curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{$.fn.cycle.custom(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}}}if(changed||opts.nextSlide==opts.currSlide){opts.lastSlide=opts.currSlide;if(opts.random){opts.currSlide=opts.nextSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];if(opts.nextSlide==opts.currSlide){opts.nextSlide=(opts.currSlide==opts.slideCount-1)?0:opts.currSlide+1;}}else{if(opts.backwards){var roll=(opts.nextSlide-1)<0;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=1;opts.currSlide=0;}else{opts.nextSlide=roll?(els.length-1):opts.nextSlide-1;opts.currSlide=roll?0:opts.nextSlide+1;}}else{var roll=(opts.nextSlide+1)==els.length;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=els.length-2;opts.currSlide=els.length-1;}else{opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1;}}}}if(changed&&opts.pager){opts.updateActivePagerLink(opts.pager,opts.currSlide,opts.activePagerClass);}var ms=0;if(opts.timeout&&!opts.continuous){ms=getTimeout(els[opts.currSlide],els[opts.nextSlide],opts,fwd);}else{if(opts.continuous&&p.cyclePause){ms=10;}}if(ms>0){p.cycleTimeout=setTimeout(function(){go(els,opts,0,(!opts.rev&&!opts.backwards));},ms);}}$.fn.cycle.updateActivePagerLink=function(pager,currSlide,clsName){$(pager).each(function(){$(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);});};function getTimeout(curr,next,opts,fwd){if(opts.timeoutFn){var t=opts.timeoutFn.call(curr,curr,next,opts,fwd);while((t-opts.speed)<250){t+=opts.speed;}debug("calculated timeout: "+t+"; speed: "+opts.speed);if(t!==false){return t;}}return opts.timeout;}$.fn.cycle.next=function(opts){advance(opts,opts.rev?-1:1);};$.fn.cycle.prev=function(opts){advance(opts,opts.rev?1:-1);};function advance(opts,val){var els=opts.elements;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if(opts.random&&val<0){opts.randomIndex--;if(--opts.randomIndex==-2){opts.randomIndex=els.length-2;}else{if(opts.randomIndex==-1){opts.randomIndex=els.length-1;}}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.random){opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){if(opts.nowrap){return false;}opts.nextSlide=els.length-1;}else{if(opts.nextSlide>=els.length){if(opts.nowrap){return false;}opts.nextSlide=0;}}}}var cb=opts.onPrevNextEvent||opts.prevNextClick;if($.isFunction(cb)){cb(val>0,opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,val>=0);return false;}function buildPager(els,opts){var $p=$(opts.pager);$.each(els,function(i,o){$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);});opts.updateActivePagerLink(opts.pager,opts.startingSlide,opts.activePagerClass);}$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){var a;if($.isFunction(opts.pagerAnchorBuilder)){a=opts.pagerAnchorBuilder(i,el);debug("pagerAnchorBuilder("+i+", el) returned: "+a);}else{a='<a href="#">'+(i+1)+"</a>";}if(!a){return;}var $a=$(a);if($a.parents("body").length===0){var arr=[];if($p.length>1){$p.each(function(){var $clone=$a.clone(true);$(this).append($clone);arr.push($clone[0]);});$a=$(arr);}else{$a.appendTo($p);}}opts.pagerAnchors=opts.pagerAnchors||[];opts.pagerAnchors.push($a);$a.bind(opts.pagerEvent,function(e){e.preventDefault();opts.nextSlide=i;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}var cb=opts.onPagerEvent||opts.pagerClick;if($.isFunction(cb)){cb(opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,opts.currSlide<i);});if(!/^click/.test(opts.pagerEvent)&&!opts.allowPagerClickBubble){$a.bind("click.cycle",function(){return false;});}if(opts.pauseOnPagerHover){$a.hover(function(){opts.$cont[0].cyclePause++;},function(){opts.$cont[0].cyclePause--;});}};$.fn.cycle.hopsFromLast=function(opts,fwd){var hops,l=opts.lastSlide,c=opts.currSlide;if(fwd){hops=c>l?c-l:opts.slideCount-l;}else{hops=c<l?l-c:l+opts.slideCount-c;}return hops;};function clearTypeFix($slides){debug("applying clearType background-color hack");function hex(s){s=parseInt(s).toString(16);return s.length<2?"0"+s:s;}function getBg(e){for(;e&&e.nodeName.toLowerCase()!="html";e=e.parentNode){var v=$.css(e,"background-color");if(v.indexOf("rgb")>=0){var rgb=v.match(/\d+/g);return"#"+hex(rgb[0])+hex(rgb[1])+hex(rgb[2]);}if(v&&v!="transparent"){return v;}}return"#ffffff";}$slides.each(function(){$(this).css("background-color",getBg(this));});}$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){$(opts.elements).not(curr).hide();opts.cssBefore.opacity=1;opts.cssBefore.display="block";if(w!==false&&next.cycleW>0){opts.cssBefore.width=next.cycleW;}if(h!==false&&next.cycleH>0){opts.cssBefore.height=next.cycleH;}opts.cssAfter=opts.cssAfter||{};opts.cssAfter.display="none";$(curr).css("zIndex",opts.slideCount+(rev===true?1:0));$(next).css("zIndex",opts.slideCount+(rev===true?0:1));};$.fn.cycle.custom=function(curr,next,opts,cb,fwd,speedOverride){var $l=$(curr),$n=$(next);var speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut;$n.css(opts.cssBefore);if(speedOverride){if(typeof speedOverride=="number"){speedIn=speedOut=speedOverride;}else{speedIn=speedOut=1;}easeIn=easeOut=null;}var fn=function(){$n.animate(opts.animIn,speedIn,easeIn,cb);};$l.animate(opts.animOut,speedOut,easeOut,function(){if(opts.cssAfter){$l.css(opts.cssAfter);}if(!opts.sync){fn();}});if(opts.sync){fn();}};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(":eq("+opts.currSlide+")").css("opacity",0);opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.opacity=0;});opts.animIn={opacity:1};opts.animOut={opacity:0};opts.cssBefore={top:0,left:0};}};$.fn.cycle.ver=function(){return ver;};$.fn.cycle.defaults={fx:"fade",timeout:4000,timeoutFn:null,continuous:0,speed:1000,speedIn:null,speedOut:null,next:null,prev:null,onPrevNextEvent:null,prevNextEvent:"click.cycle",pager:null,onPagerEvent:null,pagerEvent:"click.cycle",allowPagerClickBubble:false,pagerAnchorBuilder:null,before:null,after:null,end:null,easing:null,easeIn:null,easeOut:null,shuffle:null,animIn:null,animOut:null,cssBefore:null,cssAfter:null,fxFn:null,height:"auto",startingSlide:0,sync:1,random:0,fit:0,containerResize:1,pause:0,pauseOnPagerHover:0,autostop:0,autostopCount:0,delay:0,slideExpr:null,cleartype:!$.support.opacity,cleartypeNoBg:false,nowrap:0,fastOnEvent:0,randomizeEffects:1,rev:0,manualTrump:true,requeueOnImageNotLoaded:true,requeueTimeout:250,activePagerClass:"activeSlide",updateActivePagerLink:null,backwards:false};})(jQuery);
/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.72
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.cycle.transitions.none=function($cont,$slides,opts){opts.fxFn=function(curr,next,opts,after){$(next).show();$(curr).hide();after();};};$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssBefore={top:h,left:0};opts.cssFirst={top:0};opts.animIn={top:0};opts.animOut={top:-h};};$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssFirst={top:0};opts.cssBefore={top:-h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:0-w};};$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:-w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);opts.animOut.left=fwd?-curr.cycleW:curr.cycleW;});opts.cssFirst={left:0};opts.cssBefore={top:0};opts.animIn={left:0};opts.animOut={top:0};};$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);opts.animOut.top=fwd?curr.cycleH:-curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0};opts.animIn={top:0};opts.animOut={left:0};};$.fn.cycle.transitions.slideX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;});opts.cssBefore={left:0,top:0,width:0};opts.animIn={width:"show"};opts.animOut={width:0};};$.fn.cycle.transitions.slideY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;});opts.cssBefore={left:0,top:0,height:0};opts.animIn={height:"show"};opts.animOut={height:0};};$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){var i,w=$cont.css("overflow","visible").width();$slides.css({left:0,top:0});opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);});if(!opts.speedAdjusted){opts.speed=opts.speed/2;opts.speedAdjusted=true;}opts.random=0;opts.shuffle=opts.shuffle||{left:-w,top:15};opts.els=[];for(i=0;i<$slides.length;i++){opts.els.push($slides[i]);}for(i=0;i<opts.currSlide;i++){opts.els.push(opts.els.shift());}opts.fxFn=function(curr,next,opts,cb,fwd){var $el=fwd?$(curr):$(next);$(next).css(opts.cssBefore);var count=opts.slideCount;$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){var hops=$.fn.cycle.hopsFromLast(opts,fwd);for(var k=0;k<hops;k++){fwd?opts.els.push(opts.els.shift()):opts.els.unshift(opts.els.pop());}if(fwd){for(var i=0,len=opts.els.length;i<len;i++){$(opts.els[i]).css("z-index",len-i+count);}}else{var z=$(curr).css("z-index");$el.css("z-index",parseInt(z)+1+count);}$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){$(fwd?this:curr).hide();if(cb){cb();}});});};opts.cssBefore={display:"block",opacity:1,top:0,left:0};};$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=next.cycleH;opts.animIn.height=next.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,height:0};opts.animIn={top:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,top:0,height:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=next.cycleW;opts.animIn.width=next.cycleW;});opts.cssBefore={top:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={top:0,left:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.zoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false,true);opts.cssBefore.top=next.cycleH/2;opts.cssBefore.left=next.cycleW/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};opts.animOut={width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2};});opts.cssFirst={top:0,left:0};opts.cssBefore={width:0,height:0};};$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false);opts.cssBefore.left=next.cycleW/2;opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};});opts.cssBefore={width:0,height:0};opts.animOut={opacity:0};};$.fn.cycle.transitions.blindX=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.blindY=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();var w=$cont.width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:w};opts.animIn={top:0,left:0};opts.animOut={top:h,left:w};};$.fn.cycle.transitions.growX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=this.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:0};});opts.cssBefore={width:0,top:0};};$.fn.cycle.transitions.growY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=this.cycleH/2;opts.animIn={top:0,height:this.cycleH};opts.animOut={top:0};});opts.cssBefore={height:0,left:0};};$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true,true);opts.cssBefore.left=next.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:curr.cycleW/2,width:0};});opts.cssBefore={top:0,width:0};};$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false,true);opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,height:next.cycleH};opts.animOut={top:curr.cycleH/2,height:0};});opts.cssBefore={left:0,height:0};};$.fn.cycle.transitions.cover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);if(d=="right"){opts.cssBefore.left=-w;}else{if(d=="up"){opts.cssBefore.top=h;}else{if(d=="down"){opts.cssBefore.top=-h;}else{opts.cssBefore.left=w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.uncover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(d=="right"){opts.animOut.left=w;}else{if(d=="up"){opts.animOut.top=-h;}else{if(d=="down"){opts.animOut.top=h;}else{opts.animOut.left=-w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.toss=function($cont,$slides,opts){var w=$cont.css("overflow","visible").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(!opts.animOut.left&&!opts.animOut.top){opts.animOut={left:w*2,top:-h/2,opacity:0};}else{opts.animOut.opacity=0;}});opts.cssBefore={left:0,top:0};opts.animIn={left:0};};$.fn.cycle.transitions.wipe=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.cssBefore=opts.cssBefore||{};var clip;if(opts.clip){if(/l2r/.test(opts.clip)){clip="rect(0px 0px "+h+"px 0px)";}else{if(/r2l/.test(opts.clip)){clip="rect(0px "+w+"px "+h+"px "+w+"px)";}else{if(/t2b/.test(opts.clip)){clip="rect(0px "+w+"px 0px 0px)";}else{if(/b2t/.test(opts.clip)){clip="rect("+h+"px "+w+"px "+h+"px 0px)";}else{if(/zoom/.test(opts.clip)){var top=parseInt(h/2);var left=parseInt(w/2);clip="rect("+top+"px "+left+"px "+top+"px "+left+"px)";}}}}}}opts.cssBefore.clip=opts.cssBefore.clip||clip||"rect(0px 0px 0px 0px)";var d=opts.cssBefore.clip.match(/(\d+)/g);var t=parseInt(d[0]),r=parseInt(d[1]),b=parseInt(d[2]),l=parseInt(d[3]);opts.before.push(function(curr,next,opts){if(curr==next){return;}var $curr=$(curr),$next=$(next);$.fn.cycle.commonReset(curr,next,opts,true,true,false);opts.cssAfter.display="block";var step=1,count=parseInt((opts.speedIn/13))-1;(function f(){var tt=t?t-parseInt(step*(t/count)):0;var ll=l?l-parseInt(step*(l/count)):0;var bb=b<h?b+parseInt(step*((h-b)/count||1)):h;var rr=r<w?r+parseInt(step*((w-r)/count||1)):w;$next.css({clip:"rect("+tt+"px "+rr+"px "+bb+"px "+ll+"px)"});(step++<=count)?setTimeout(f,13):$curr.css("display","none");})();});opts.cssBefore={display:"block",opacity:1,top:0,left:0};opts.animIn={left:0};opts.animOut={left:0};};})(jQuery);;
// $Id: views_slideshow.js,v 1.1.2.1.2.39 2010/07/01 03:29:08 redndahead Exp $

/**
 *  @file
 *  A simple jQuery SingleFrame Div Slideshow Rotator.
 */

/**
 * This will set our initial behavior, by starting up each individual slideshow.
 */
Drupal.behaviors.viewsSlideshowSingleFrame = function (context) {
  $('.views_slideshow_singleframe_main:not(.viewsSlideshowSingleFrame-processed)', context).addClass('viewsSlideshowSingleFrame-processed').each(function() {
    var fullId = '#' + $(this).attr('id');
    var settings = Drupal.settings.viewsSlideshowSingleFrame[fullId];
    settings.targetId = '#' + $(fullId + " :first").attr('id');
    settings.paused = false;

    settings.opts = {
      speed:settings.speed,
      timeout:parseInt(settings.timeout),
      delay:parseInt(settings.delay),
      sync:settings.sync==1,
      random:settings.random==1,
      pause:false,
      allowPagerClickBubble:(settings.pager_hover==1 || settings.pager_click_to_page),
      prev:(settings.controls > 0)?'#views_slideshow_singleframe_prev_' + settings.vss_id:null,
      next:(settings.controls > 0)?'#views_slideshow_singleframe_next_' + settings.vss_id:null,
      pager:(settings.pager > 0)?'#views_slideshow_singleframe_pager_' + settings.vss_id:null,
      nowrap:parseInt(settings.nowrap),
      pagerAnchorBuilder: function(idx, slide) {
        var classes = 'pager-item pager-num-' + (idx+1);
        if (idx == 0) {
          classes += ' first';
        }
        if ($(slide).siblings().length == idx) {
          classes += ' last';
        }

        if (idx % 2) {
          classes += ' odd';
        }
        else {
          classes += ' even';
        }
        
        var theme = 'viewsSlideshowPager' + settings.pager_type;
        return Drupal.theme.prototype[theme] ? Drupal.theme(theme, classes, idx, slide, settings) : '';
      },
      after:function(curr, next, opts) {
        // Used for Image Counter.
        if (settings.image_count) {
          $('#views_slideshow_singleframe_image_count_' + settings.vss_id + ' span.num').html(opts.currSlide + 1);
          $('#views_slideshow_singleframe_image_count_' + settings.vss_id + ' span.total').html(opts.slideCount);
        }
      },
      before:function(curr, next, opts) {
        // Remember last slide.
        if (settings.remember_slide) {
          createCookie(settings.vss_id, opts.currSlide + 1, settings.remember_slide_days);
        }

        // Make variable height.
        if (settings.fixed_height == 0) {
          //get the height of the current slide
          var $ht = $(this).height();
          //set the container's height to that of the current slide
          $(this).parent().animate({height: $ht});
        }
      },
      cleartype:(settings.ie.cleartype == 'true')? true : false,
      cleartypeNoBg:(settings.ie.cleartypenobg == 'true')? true : false
    }
    
    // Set the starting slide if we are supposed to remember the slide
    if (settings.remember_slide) {
      var startSlide = readCookie(settings.vss_id);
      if (startSlide == null) {
        startSlide = 0;
      }
      settings.opts.startingSlide =  startSlide;
    }

    if (settings.pager_hover == 1) {
      settings.opts.pagerEvent = 'mouseover';
      settings.opts.pauseOnPagerHover = true;
    }

    if (settings.effect == 'none') {
      settings.opts.speed = 1;
    }
    else {
      settings.opts.fx = settings.effect;
    }

    // Pause on hover.
    if (settings.pause == 1) {
      $('#views_slideshow_singleframe_teaser_section_' + settings.vss_id).hover(function() {
        $(settings.targetId).cycle('pause');
      }, function() {
        if (settings.paused == false) {
          $(settings.targetId).cycle('resume');
        }
      });
    }

    // Pause on clicking of the slide.
    if (settings.pause_on_click == 1) {
      $('#views_slideshow_singleframe_teaser_section_' + settings.vss_id).click(function() { 
        viewsSlideshowSingleFramePause(settings);
      });
    }

    // Add additional settings.
		if (settings.advanced != "\n") {
      var advanced = settings.advanced.split("\n");
      for (i=0; i<advanced.length; i++) {
        var prop = '';
        var value = '';
        var property = advanced[i].split(":");
        for (j=0; j<property.length; j++) {
          if (j == 0) {
            prop = property[j];
          }
          else if (j == 1) {
            value = property[j];
          }
          else {
            value += ":" + property[j];
          }
        }

        // Need to evaluate so true, false and numerics aren't a string.
        if (value == 'true' || value == 'false' || IsNumeric(value)) {
          value = eval(value);
        }
        else {
          // Parse strings into functions.
          var func = value.match(/function\s*\((.*?)\)\s*\{(.*)\}/i);
          if (func) {
            value = new Function(func[1].match(/(\w+)/g), func[2]);
          }
        }
	
        // Call both functions if prop was set previously.
        if (typeof(value) == "function" && prop in settings.opts) {
          var callboth = function(before_func, new_func) {
            return function() {
              before_func.apply(null, arguments);
              new_func.apply(null, arguments);
            };
          };
          settings.opts[prop] = callboth(settings.opts[prop], value);
        }
        else {
          settings.opts[prop] = value;
        }
      }
    }
    
    $(settings.targetId).cycle(settings.opts);

    // Start Paused
    if (settings.start_paused) {
      viewsSlideshowSingleFramePause(settings);
    }
    
    // Pause if hidden.
    if (settings.pause_when_hidden) {
      var checkPause = function(settings) {
        // If the slideshow is visible and it is paused then resume.
        // otherwise if the slideshow is not visible and it is not paused then
        // pause it.
        var visible = viewsSlideshowSingleFrameIsVisible(settings.targetId, settings.pause_when_hidden_type, settings.amount_allowed_visible);
        if (visible && settings.paused) {
          viewsSlideshowSingleFrameResume(settings);
        }
        else if (!visible && !settings.paused) {
          viewsSlideshowSingleFramePause(settings);
        }
      }
     
      // Check when scrolled.
      $(window).scroll(function() {
       checkPause(settings);
      });
      
      // Check when the window is resized.
      $(window).resize(function() {
        checkPause(settings);
      });
    }

    // Show image count for people who have js enabled.
    $('#views_slideshow_singleframe_image_count_' + settings.vss_id).show();

    if (settings.controls > 0) {
      // Show controls for people who have js enabled browsers.
      $('#views_slideshow_singleframe_controls_' + settings.vss_id).show();
      
      $('#views_slideshow_singleframe_playpause_' + settings.vss_id).click(function(e) {
      	if (settings.paused) {
      	  viewsSlideshowSingleFrameResume(settings);
      	}
      	else {
      	  viewsSlideshowSingleFramePause(settings);
      	}
        e.preventDefault();
      });
    }
  });
}

// Pause the slideshow 
viewsSlideshowSingleFramePause = function (settings) {
  //make Resume translatable
  var resume = Drupal.t('Resume');

  $(settings.targetId).cycle('pause');
  if (settings.controls > 0) {
    $('#views_slideshow_singleframe_playpause_' + settings.vss_id)
      .addClass('views_slideshow_singleframe_play')
      .addClass('views_slideshow_play')
      .removeClass('views_slideshow_singleframe_pause')
      .removeClass('views_slideshow_pause')
      .text(resume);
  }
  settings.paused = true;
}

// Resume the slideshow
viewsSlideshowSingleFrameResume = function (settings) {
  $(settings.targetId).cycle('resume');
  if (settings.controls > 0) {
    $('#views_slideshow_singleframe_playpause_' + settings.vss_id)
      .addClass('views_slideshow_singleframe_pause')
      .addClass('views_slideshow_pause')
      .removeClass('views_slideshow_singleframe_play')
      .removeClass('views_slideshow_play')
      .text('Pause');
  }
  settings.paused = false;
}

Drupal.theme.prototype.viewsSlideshowPagerThumbnails = function (classes, idx, slide, settings) {
  var href = '#';
  if (settings.pager_click_to_page) {
    href = $(slide).find('a').attr('href');
  }
  return '<div class="' + classes + '"><a href="' + href + '"><img src="' + $(slide).find('img').attr('src') + '" /></a></div>';
}

Drupal.theme.prototype.viewsSlideshowPagerNumbered = function (classes, idx, slide, settings) {
  var href = '#';
  if (settings.pager_click_to_page) {
    href = $(slide).find('a').attr('href');
  }
  return '<div class="' + classes + '"><a href="' + href + '">' + (idx+1) + '</a></div>';
}

// Verify that the value is a number.
function IsNumeric(sText) {
  var ValidChars = "0123456789";
  var IsNumber=true;
  var Char;

  for (var i=0; i < sText.length && IsNumber == true; i++) { 
    Char = sText.charAt(i); 
    if (ValidChars.indexOf(Char) == -1) {
      IsNumber = false;
    }
  }
  return IsNumber;
}

/**
 * Cookie Handling Functions
 */
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else {
    var expires = "";
  }
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length,c.length);
    }
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

/**
 * Checks to see if the slide is visible enough.
 * elem = element to check.
 * type = The way to calculate how much is visible.
 * amountVisible = amount that should be visible. Either in percent or px. If
 *                it's not defined then all of the slide must be visible.
 *
 * Returns true or false
 */
function viewsSlideshowSingleFrameIsVisible(elem, type, amountVisible) {
  // Get the top and bottom of the window;
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var docViewLeft = $(window).scrollLeft();
  var docViewRight = docViewLeft + $(window).width();

  // Get the top, bottom, and height of the slide;
  var elemTop = $(elem).offset().top;
  var elemHeight = $(elem).height();
  var elemBottom = elemTop + elemHeight;
  var elemLeft = $(elem).offset().left;
  var elemWidth = $(elem).width();
  var elemRight = elemLeft + elemWidth;
  var elemArea = elemHeight * elemWidth;
  
  // Calculate what's hiding in the slide.
  var missingLeft = 0;
  var missingRight = 0;
  var missingTop = 0;
  var missingBottom = 0;
  
  // Find out how much of the slide is missing from the left.
  if (elemLeft < docViewLeft) {
    missingLeft = docViewLeft - elemLeft;
  }

  // Find out how much of the slide is missing from the right.
  if (elemRight > docViewRight) {
    missingRight = elemRight - docViewRight;
  }
  
  // Find out how much of the slide is missing from the top.
  if (elemTop < docViewTop) {
    missingTop = docViewTop - elemTop;
  }

  // Find out how much of the slide is missing from the bottom.
  if (elemBottom > docViewBottom) {
    missingBottom = elemBottom - docViewBottom;
  }
  
  // If there is no amountVisible defined then check to see if the whole slide
  // is visible.
  if (type == 'full') {
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
    && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop)
    && (elemLeft >= docViewLeft) && (elemRight <= docViewRight)
    && (elemLeft <= docViewRight) && (elemRight >= docViewLeft));
  }
  else if(type == 'vertical') {
    var verticalShowing = elemHeight - missingTop - missingBottom;
    
    // If user specified a percentage then find out if the current shown percent
    // is larger than the allowed percent.
    // Otherwise check to see if the amount of px shown is larger than the
    // allotted amount.
    if (amountVisible.indexOf('%')) {
      return (((verticalShowing/elemHeight)*100) >= parseInt(amountVisible));
    }
    else {
      return (verticalShowing >= parseInt(amountVisible));
    }
  }
  else if(type == 'horizontal') {
    var horizontalShowing = elemWidth - missingLeft - missingRight;
    
    // If user specified a percentage then find out if the current shown percent
    // is larger than the allowed percent.
    // Otherwise check to see if the amount of px shown is larger than the
    // allotted amount.
    if (amountVisible.indexOf('%')) {
      return (((horizontalShowing/elemWidth)*100) >= parseInt(amountVisible));
    }
    else {
      return (horizontalShowing >= parseInt(amountVisible));
    }
  }
  else if(type == 'area') {
    var areaShowing = (elemWidth - missingLeft - missingRight) * (elemHeight - missingTop - missingBottom);
    
    // If user specified a percentage then find out if the current shown percent
    // is larger than the allowed percent.
    // Otherwise check to see if the amount of px shown is larger than the
    // allotted amount.
    if (amountVisible.indexOf('%')) {
      return (((areaShowing/elemArea)*100) >= parseInt(amountVisible));
    }
    else {
      return (areaShowing >= parseInt(amountVisible));
    }
  }
}

;
// $Id: views_slideshow.js,v 1.1.2.2.2.35 2010/07/01 03:29:08 redndahead Exp $

/**
 * @file
 * A simple jQuery ThumbnailHover Div Slideshow Rotator.
 */

/**
 * This will set our initial behavior, by starting up each individual slideshow.
 */
Drupal.behaviors.viewsSlideshowThumbnailHover = function (context) {
  $('.views_slideshow_thumbnailhover_main:not(.viewsSlideshowThumbnailHover-processed)', context).addClass('viewsSlideshowThumbnailHover-processed').each(function() {
    var fullId = '#' + $(this).attr('id');
    var settings = Drupal.settings.viewsSlideshowThumbnailHover[fullId];
    settings.targetId = '#' + $(fullId + " :first").attr('id');
		settings.paused = false;
		
    settings.opts = {
      speed:settings.speed,
      timeout:parseInt(settings.timeout),
      delay:parseInt(settings.delay),
      sync:settings.sync==1,
      random:settings.random==1,
      pause:false,
      allowPagerClickBubble:(settings.pager_event=='click')? false : true,
      pager:(settings.pager_event == 'hoverIntent') ? null : '#views_slideshow_breakout_teasers_' + settings.vss_id,
      nowrap:parseInt(settings.nowrap),
      pagerAnchorBuilder:(settings.pager_event == 'hoverIntent') ? null : function(idx, slide) { 
        return '#views_slideshow_thumbnailhover_div_breakout_teaser_' + settings.vss_id + '_' + idx; 
      },
      after:function(curr, next, opts) {
        // Used for Image Counter.
        if (settings.image_count) {
          $('#views_slideshow_thumbnailhover_image_count_' + settings.vss_id + ' span.num').html(opts.currSlide + 1);
          $('#views_slideshow_thumbnailhover_image_count_' + settings.vss_id + ' span.total').html(opts.slideCount);
        }
      },
      before:function(current, next, opts) {
        // Remember last slide.
        if (settings.remember_slide) {
          createCookie(settings.view_id, opts.currSlide + 1, settings.remember_slide_days);
        }

        // Make variable height.
        if (settings.fixed_height == 0) {
          //get the height of the current slide
          var $ht = $(this).height();
          //set the container's height to that of the current slide
          $(this).parent().animate({height: $ht});
        }
        
        var currId = (currId=$(current).attr('id')).substring(currId.lastIndexOf('_')+1)
        var nextId = (nextId=$(next).attr('id')).substring(nextId.lastIndexOf('_')+1)
        $('#views_slideshow_thumbnailhover_div_breakout_teaser_' + settings.vss_id + '_' + currId).removeClass('activeSlide');
        $('#views_slideshow_thumbnailhover_div_breakout_teaser_' + settings.vss_id + '_' + nextId).addClass('activeSlide');
      },
      pagerEvent: (settings.pager_event == 'hoverIntent') ? null : settings.pager_event,
      prev:(settings.controls > 0)?'#views_slideshow_thumbnailhover_prev_' + settings.vss_id:null,
      next:(settings.controls > 0)?'#views_slideshow_thumbnailhover_next_' + settings.vss_id:null,
      cleartype:(settings.ie.cleartype == 'true')? true : false,
      cleartypeNoBg:(settings.ie.cleartypenobg == 'true')? true : false
    };

    // Set the starting slide if we are supposed to remember the slide
    if (settings.remember_slide) {
      var startSlide = readCookie(settings.view_id);
      if (startSlide == null) {
        startSlide = 0;
      }
      settings.opts.startingSlide =  startSlide;
    }

    if (settings.effect == 'none') {
      settings.opts.speed = 1;
    }
    else {
      settings.opts.fx = settings.effect;
    }

    // Pause on hover.
    if (settings.pause == 1) {
      $('#views_slideshow_thumbnailhover_teaser_section_' + settings.vss_id).hover(function() {
        $(settings.targetId).cycle('pause');
      }, function() {
        if (settings.paused == false) {
          $(settings.targetId).cycle('resume');
        }
      });
    }

    // Pause on clicking of the slide.
    if (settings.pause_on_click == 1) {
      $('#views_slideshow_thumbnailhover_teaser_section_' + settings.vss_id).click(function() { 
        viewsSlideshowThumbnailHoverPause(settings);
      });
    }
    
    // Add additional settings.
		if (settings.advanced != "\n") {
      var advanced = settings.advanced.split("\n");
      for (i=0; i<advanced.length; i++) {
        var prop = '';
        var value = '';
        var property = advanced[i].split(":");
        for (j=0; j<property.length; j++) {
          if (j == 0) {
            prop = property[j];
          }
          else if (j == 1) {
            value = property[j];
          }
          else {
            value += ":" + property[j];
          }
        }

        // Need to evaluate so true, false and numerics aren't a string.
        if (value == 'true' || value == 'false' || IsNumeric(value)) {
          value = eval(value);
        }
        else {
          // Parse strings into functions.
          var func = value.match(/function\s*\((.*?)\)\s*\{(.*)\}/i);
          if (func) {
            value = new Function(func[1].match(/(\w+)/g), func[2]);
          }
        }
	
        // Call both functions if prop was set previously.
        if (typeof(value) == "function" && prop in settings.opts) {
          var callboth = function(before_func, new_func) {
            return function() {
              before_func.apply(null, arguments);
              new_func.apply(null, arguments);
            };
          };
          settings.opts[prop] = callboth(settings.opts[prop], value);
        }
        else {
          settings.opts[prop] = value;
        }
      }
    }

    $(settings.targetId).cycle(settings.opts);

    // Start Paused
    if (settings.start_paused) {
      viewsSlideshowThumbnailHoverPause(settings);
    }
    
    // Pause if hidden.
    if (settings.pause_when_hidden) {
      var checkPause = function(settings) {
        // If the slideshow is visible and it is paused then resume.
        // otherwise if the slideshow is not visible and it is not paused then
        // pause it.
        var visible = viewsSlideshowThumbnailHoverIsVisible(settings.targetId, settings.pause_when_hidden_type, settings.amount_allowed_visible);
        if (visible && settings.paused) {
          viewsSlideshowThumbnailHoverResume(settings);
        }
        else if (!visible && !settings.paused) {
          viewsSlideshowThumbnailHoverPause(settings);
        }
      }
     
      // Check when scrolled.
      $(window).scroll(function() {
       checkPause(settings);
      });
      
      // Check when window is resized.
      $(window).resize(function() {
        checkPause(settings);
      });
    }

    // Show image count for people who have js enabled.
    $('#views_slideshow_thumbnailhover_image_count_' + settings.vss_id).show();
    
    if (settings.pager_event == 'hoverIntent') {
      $('#views_slideshow_thumbnailhover_breakout_teasers_' + settings.vss_id + ' .views_slideshow_thumbnailhover_div_breakout_teaser').each(function(i,obj) {
        $(obj).hoverIntent(
          function() {
            $('.views_slideshow_thumbnailhover_div_breakout_teaser').removeClass('activeSlide');
            var id = $(this).attr('id');
            id = parseInt(id.substring(id.lastIndexOf('_')+1));
            $(settings.targetId).cycle(id);
            $('#views_slideshow_thumbnailhover_div_breakout_teaser_' + settings.vss_id + '_' + id).addClass('activeSlide');
            $(settings.targetId).cycle('stop');
          },
          function() {
            var id = $(this).attr('id');
            settings.opts.startingSlide = parseInt(id.substring(id.lastIndexOf('_')+1));
            $(settings.targetId).cycle(settings.opts);
          }
        );
      });
    }

    if (settings.controls > 0) {
      // Show controls for people who have js enabled browsers.
      $('#views_slideshow_thumbnailhover_controls_' + settings.vss_id).show();
      
      $('#views_slideshow_thumbnailhover_playpause_' + settings.vss_id).click(function(e) {
        if (settings.paused) {
          viewsSlideshowThumbnailHoverResume(settings);
        }
        else {
          viewsSlideshowThumbnailHoverPause(settings);
        }
        e.preventDefault();
      });
    }
  });
}

// Pause the slideshow 
viewsSlideshowThumbnailHoverPause = function (settings) {
  //make Resume translatable
  var resume = Drupal.t('Resume');

  $(settings.targetId).cycle('pause');
  if (settings.controls > 0) {
    $('#views_slideshow_thumbnailhover_playpause_' + settings.vss_id)
      .addClass('views_slideshow_thumbnailhover_play')
      .addClass('views_slideshow_play')
      .removeClass('views_slideshow_thumbnailhover_pause')
      .removeClass('views_slideshow_pause')
      .text(resume);
  }
  settings.paused = true;
}

// Resume the slideshow
viewsSlideshowThumbnailHoverResume = function (settings) {
  $(settings.targetId).cycle('resume');
  if (settings.controls > 0) {
    $('#views_slideshow_thumbnailhover_playpause_' + settings.vss_id)
      .addClass('views_slideshow_thumbnailhover_pause')
      .addClass('views_slideshow_pause')
      .removeClass('views_slideshow_thumbnailhover_play')
      .removeClass('views_slideshow_play')
      .text('Pause');
  }
  settings.paused = false;
}

// Verify that the value is a number.
function IsNumeric(sText) {
  var ValidChars = "0123456789";
  var IsNumber=true;
  var Char;

  for (var i=0; i < sText.length && IsNumber == true; i++) { 
    Char = sText.charAt(i); 
    if (ValidChars.indexOf(Char) == -1) {
      IsNumber = false;
    }
  }
  return IsNumber;
}

/**
 * Cookie Handling Functions
 */
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else {
    var expires = "";
  }
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length,c.length);
    }
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

/**
 * Checks to see if the slide is visible enough.
 * elem = element to check.
 * amountVisible = amount that should be visible. Either in percent or px. If
 *                it's not defined then all of the slide must be visible.
 *
 * Returns true or false
 */
function viewsSlideshowThumbnailHoverIsVisible(elem, type, amountVisible) {
  // Get the top and bottom of the window;
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var docViewLeft = $(window).scrollLeft();
  var docViewRight = docViewLeft + $(window).width();

  // Get the top, bottom, and height of the slide;
  var elemTop = $(elem).offset().top;
  var elemHeight = $(elem).height();
  var elemBottom = elemTop + elemHeight;
  var elemLeft = $(elem).offset().left;
  var elemWidth = $(elem).width();
  var elemRight = elemLeft + elemWidth;
  var elemArea = elemHeight * elemWidth;
  
  // Calculate what's hiding in the slide.
  var missingLeft = 0;
  var missingRight = 0;
  var missingTop = 0;
  var missingBottom = 0;
  
  // Find out how much of the slide is missing from the left.
  if (elemLeft < docViewLeft) {
    missingLeft = docViewLeft - elemLeft;
  }

  // Find out how much of the slide is missing from the right.
  if (elemRight > docViewRight) {
    missingRight = elemRight - docViewRight;
  }
  
  // Find out how much of the slide is missing from the top.
  if (elemTop < docViewTop) {
    missingTop = docViewTop - elemTop;
  }

  // Find out how much of the slide is missing from the bottom.
  if (elemBottom > docViewBottom) {
    missingBottom = elemBottom - docViewBottom;
  }
  
  // If there is no amountVisible defined then check to see if the whole slide
  // is visible.
  if (type == 'full') {
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
    && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop)
    && (elemLeft >= docViewLeft) && (elemRight <= docViewRight)
    && (elemLeft <= docViewRight) && (elemRight >= docViewLeft));
  }
  else if(type == 'vertical') {
    var verticalShowing = elemHeight - missingTop - missingBottom;
    
    // If user specified a percentage then find out if the current shown percent
    // is larger than the allowed percent.
    // Otherwise check to see if the amount of px shown is larger than the
    // allotted amount.
    if (amountVisible.indexOf('%')) {
      return (((verticalShowing/elemHeight)*100) >= parseInt(amountVisible));
    }
    else {
      return (verticalShowing >= parseInt(amountVisible));
    }
  }
  else if(type == 'horizontal') {
    var horizontalShowing = elemWidth - missingLeft - missingRight;
    
    // If user specified a percentage then find out if the current shown percent
    // is larger than the allowed percent.
    // Otherwise check to see if the amount of px shown is larger than the
    // allotted amount.
    if (amountVisible.indexOf('%')) {
      return (((horizontalShowing/elemWidth)*100) >= parseInt(amountVisible));
    }
    else {
      return (horizontalShowing >= parseInt(amountVisible));
    }
  }
  else if(type == 'area') {
    var areaShowing = (elemWidth - missingLeft - missingRight) * (elemHeight - missingTop - missingBottom);
    
    // If user specified a percentage then find out if the current shown percent
    // is larger than the allowed percent.
    // Otherwise check to see if the amount of px shown is larger than the
    // allotted amount.
    if (amountVisible.indexOf('%')) {
      return (((areaShowing/elemArea)*100) >= parseInt(amountVisible));
    }
    else {
      return (areaShowing >= parseInt(amountVisible));
    }
  }
}
;

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
;
/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2007-06-19 20:25:28 -0500 (Tue, 19 Jun 2007) $
 * $Rev: 2111 $
 *
 * Version 2.1
 */
(function($){$.fn.bgIframe=$.fn.bgiframe=function(s){if($.browser.msie&&parseInt($.browser.version)<=6){s=$.extend({top:'auto',left:'auto',width:'auto',height:'auto',opacity:true,src:'javascript:false;'},s||{});var prop=function(n){return n&&n.constructor==Number?n+'px':n;},html='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+'style="display:block;position:absolute;z-index:-1;'+(s.opacity!==false?'filter:Alpha(Opacity=\'0\');':'')+'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+'"/>';return this.each(function(){if($('> iframe.bgiframe',this).length==0)this.insertBefore(document.createElement(html),this.firstChild);});}return this;};if(!$.browser.version)$.browser.version=navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)[1];})(jQuery);;
﻿/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);;
// $Id: nice_menus.js,v 1.21 2010/06/18 06:14:12 vordude Exp $

// This uses Superfish 1.4.8
// (http://users.tpg.com.au/j_birch/plugins/superfish)

// Add Superfish to all Nice menus with some basic options.
(function ($) {
  $(document).ready(function() {
    $('ul.nice-menu').superfish({
      // Apply a generic hover class.
      hoverClass: 'over',
      // Disable generation of arrow mark-up.
      autoArrows: false,
      // Disable drop shadows.
      dropShadows: false,
      // Mouse delay.
      delay: Drupal.settings.nice_menus_options.delay,
      // Animation speed.
      speed: Drupal.settings.nice_menus_options.speed
    // Add in Brandon Aaron’s bgIframe plugin for IE select issues.
    // http://plugins.jquery.com/node/46/release
    }).find('ul').bgIframe({opacity:false});
    $('ul.nice-menu ul').css('display', 'none');
  });
})(jQuery);
;
// $Id: extlink.js,v 1.4.2.12 2010/05/26 01:25:56 quicksketch Exp $
(function ($) {

function extlinkAttach(context) {
  // Strip the host name down, removing ports, subdomains, or www.
  var pattern = /^(([^\/:]+?\.)*)([^\.:]{4,})((\.[a-z]{1,4})*)(:[0-9]{1,5})?$/;
  var host = window.location.host.replace(pattern, '$3$4');
  var subdomain = window.location.host.replace(pattern, '$1');

  // Determine what subdomains are considered internal.
  if (Drupal.settings.extlink.extSubdomains) {
    var subdomains = "([^/]*\\.)?";
  }
  else if (subdomain == 'www.' || subdomain == '') {
    var subdomains = "(www\\.)?";
  }
  else {
    var subdomains = subdomain.replace(".", "\\.");
  }

  // Build regular expressions that define an internal link.
  var internal_link = new RegExp("^https?://" + subdomains + host, "i");

  // Extra internal link matching.
  var extInclude = false;
  if (Drupal.settings.extlink.extInclude) {
    extInclude = new RegExp(Drupal.settings.extlink.extInclude.replace(/\\/, '\\'));
  }

  // Extra external link matching.
  var extExclude = false;
  if (Drupal.settings.extlink.extExclude) {
    extExclude = new RegExp(Drupal.settings.extlink.extExclude.replace(/\\/, '\\'));
  }

  // Find all links which are NOT internal and begin with http (as opposed
  // to ftp://, javascript:, etc. other kinds of links.
  // When operating on the 'this' variable, the host has been appended to
  // all links by the browser, even local ones.
  // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
  // available in jQuery 1.0 (Drupal 5 default).
  var external_links = new Array();
  var mailto_links = new Array();
  $("a:not(." + Drupal.settings.extlink.extClass + ", ." + Drupal.settings.extlink.mailtoClass + ")", context).each(function(el) {
    try {
      var url = this.href.toLowerCase();
      if (url.indexOf('http') == 0 && (!url.match(internal_link) || (extInclude && url.match(extInclude))) && !(extExclude && url.match(extExclude))) {
        external_links.push(this);
      }
      else if (url.indexOf('mailto:') == 0) {
        mailto_links.push(this);
      }
    }
    // IE7 throws errors often when dealing with irregular links, such as:
    // <a href="node/10"></a> Empty tags.
    // <a href="http://user:pass@example.com">example</a> User:pass syntax.
    catch(error) {
      return false;
    }
  });

  if (Drupal.settings.extlink.extClass) {
    // Apply the "ext" class to all links not containing images.
    if (parseFloat($().jquery) < 1.2) {
      $(external_links).not('[img]').addClass(Drupal.settings.extlink.extClass).each(function() { if ($(this).css('display') == 'inline') $(this).after('<span class=' + Drupal.settings.extlink.extClass + '></span>'); });
    }
    else {
      $(external_links).not($(external_links).find('img').parents('a')).addClass(Drupal.settings.extlink.extClass).each(function() { if ($(this).css('display') == 'inline') $(this).after('<span class=' + Drupal.settings.extlink.extClass + '></span>'); });
    }
  }

  if (Drupal.settings.extlink.mailtoClass) {
    // Apply the "mailto" class to all mailto links not containing images.
    if (parseFloat($().jquery) < 1.2) {
      $(mailto_links).not('[img]').addClass(Drupal.settings.extlink.mailtoClass).each(function() { if ($(this).css('display') == 'inline') $(this).after('<span class=' + Drupal.settings.extlink.mailtoClass + '></span>'); });
    }
    else {
      $(mailto_links).not($(mailto_links).find('img').parents('a')).addClass(Drupal.settings.extlink.mailtoClass).each(function() { if ($(this).css('display') == 'inline') $(this).after('<span class=' + Drupal.settings.extlink.mailtoClass + '></span>'); });
    }
  }

  if (Drupal.settings.extlink.extTarget) {
    // Apply the target attribute to all links.
    $(external_links).attr('target', Drupal.settings.extlink.extTarget);
  }

  if (Drupal.settings.extlink.extAlert) {
    // Add pop-up click-through dialog.
    $(external_links).click(function(e) {
     return confirm(Drupal.settings.extlink.extAlertText);
    });
  }

  // Work around for Internet Explorer box model problems.
  if (($.support && !($.support.boxModel === undefined) && !$.support.boxModel) || ($.browser.msie && parseInt($.browser.version) <= 7)) {
    $('span.ext, span.mailto').css('display', 'inline-block');
  }
}

Drupal.behaviors.extlink = function(context) {
  extlinkAttach(context);
}

})(jQuery);
;
if (Drupal.jsEnabled) {
  $(document).ready(function(){
    $('a.service-links-facebook-like').each(function(){
      var iframe_txt = '<iframe src="' + $(this).attr('href').replace('http://', '//') + 
        '" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:' +
        Drupal.settings.ws_fl.width + 'px; height:' +
        Drupal.settings.ws_fl.height + 'px;" allowTransparency="true"></iframe>';
      $(this).replaceWith(iframe_txt);
    });
  });
}
;
if (Drupal.jsEnabled) {
  $(document).ready(function(){
    $('a.service-links-google-plus-one').each(function(){
      var counter = Drupal.settings.ws_gpo.counter ? '' : 'count="false" ';
      var type = (Drupal.settings.ws_gpo.type == '') ? '' : 'size="'+ Drupal.settings.ws_gpo.type + '" ';
      var g_text = '<g:plusone ' + counter + type + 'href="' + $(this).attr('href') + '" >' + '</g:plusone>';
      $(this).replaceWith(g_text);
    });
  });
}
;
(function ($) {
  $(document).ready(function() {
    $.ajax({
      type: "POST",
      cache: false,
      url: Drupal.settings.statistics.url,
      data: Drupal.settings.statistics.data
    });
  });
})(jQuery);
;
(function($) {

  "use strict";

  $(document).ready(function() {
    var ScrollUp = function() {
      $(window).scroll(function(){
          if ($(this).scrollTop() > 100) {
              $('.scrollup').fadeIn();
          } else {
              $('.scrollup').fadeOut();
          }
      });

      $('.scrollup').click(function(){
          $("html, body").animate({ scrollTop: 0 }, 600);
          return false;
      });
    }
    ScrollUp();
  });

})(jQuery);;
(function($) {

  "use strict";

  $(document).ready(function() {

    console.log("slidebars !");

    //$.slidebars();
    var mySlidebars = new $.slidebars({
      siteClose: false, // true or false
    });

    $('.mbtn-sd-left').on('click', function(e) {
      e.preventDefault();
      mySlidebars.slidebars.toggle('left');
      var btnActive = $(this).hasClass("mbtn") ? "mbtn-active" : "mlink-active";
      var panelOpen = "panel-open";
      if ($(this).hasClass(btnActive)) {
        // close
        $(this).removeClass(btnActive);
        if ($(".mbtn-active").length == 0 && $(".mlink-active").length == 0) {
          $("body").removeClass(panelOpen);
        }
      } else {
        // open
        $(this).addClass(btnActive);
        $("#mobile-theme-menu").removeClass("active");
        if ($(".mbtn-active").length > 0 || $(".mlink-active").length > 0) {
          //$("body").delay(350).queue(function(){
          $("body").queue(function(){
            $(this).addClass(panelOpen).dequeue();
            $(this).removeClass("overlay");
          });
        }
      }
    });

    $(".m-mask").on("click", function() {
      mySlidebars.slidebars.close();
      $(".mbtn, .mlink").each(function() {
        var btnActive = $(this).hasClass("mbtn") ? "mbtn-active" : "mlink-active";
        $(this).removeClass(btnActive);
      });
      if ($("body").hasClass("panel-open")) {
        $("body").removeClass("panel-open");
      }
      if ($("body").hasClass("overlay")) {
        $("body").removeClass("overlay");
      }
      if ($("#mobile-theme-menu").hasClass("active")) {
        $("#mobile-theme-menu").removeClass("active");
      }

    });

    $('#mlink-thememenu').on('click', function(e) {
      e.preventDefault();
      var panelOpen = "panel-open";
      mySlidebars.slidebars.close();
      $("body").removeClass(panelOpen);
      $(".mbtn, .mlink").each(function() {
        var btnActive = $(this).hasClass("mbtn") ? "mbtn-active" : "mlink-active";
        $(this).removeClass(btnActive);
      });
      $("#mobile-theme-menu").delay(350).queue(function(){
        $(this).addClass("active").dequeue();
      });
      $("body").addClass("overlay");
    });

    $('.my-third-button').click(mySlidebars.slidebars.close);

  });

})(jq1110);;
(function($) {

  "use strict";

  // Get viewport
  var viewport;
  var getViewport = function() {
    viewport = {
      width  : $(window).width(),
      height : $(window).height()
    };
  }
  getViewport();

  var rwdEvent = function(vw) {
    $('.contact-popup').magnificPopup({
      type: 'iframe',
      disableOn: function() {
        if(vw < 768) {
          return false;
        }
        return true;
      }
    });
  }

  $(document).ready(function(){
    $('.magnific-popup-iframe').magnificPopup({
      type: 'iframe',
    });
    rwdEvent(viewport.width);
  });

  // Window resize
  var resizeTimer;
  var windowResize = function() {
    getViewport();
    rwdEvent(viewport.width);
  };

  $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(windowResize, 250);
  });

})(jq1110);;
if (typeof jq1110 !== 'undefined') {
  (function($) {

    "use strict";

    $(document).ready(function() {
      // console.log("jquery.slidebar start !!");
      var $sidebar = $(".jq-sidebar.left");

      if ($("body").hasClass("page-front")) {
        $sidebar.sidebar().trigger("sidebar:open");
      } else {
        $sidebar.sidebar();
      }

      $(".side-theme-menu-btn").on("click", function(e) {
        $sidebar.trigger("sidebar:toggle");
        e.preventDefault();
      });

      $sidebar.on("sidebar:opened", function () {
         $(this).removeClass("jq-sidebar-close");
         $(this).addClass("jq-sidebar-open");
      });

      $sidebar.on("sidebar:closed", function () {
         $(this).removeClass("jq-sidebar-open");
         $(this).addClass("jq-sidebar-close");
      });


    });

  })(jq1110);
};
(function($) {

  "use strict";

  $(document).ready(function(){

    var ggAmount = jQuery(".sidebar-gg-list .views-row").length;
    var ggRender = function(i) {
      i = i % ggAmount == 0 ? ggAmount : i % ggAmount;
      i--;
      var ad = jQuery(".sidebar-gg-list .views-row").eq(i).html();
      ad = $.trim(ad);
      ad = "<div class='m-gg-item mobile-mode'>" + ad + "</div>";
      console.log(ad);
      return ad;
    }

    var content = "#content-main";

    var ifScroll = function(elem) {
      if ($(".pager-last:first a").length > 0) {
        var pathArr = $(".pager-last:first a").attr("href").split("?page=");
        var lastPage = parseInt(pathArr[1]) + 1;
        //console.log(pathArr);
        //console.log("lastPage: " + lastPage);
        var renderOption = function(elem) {
          var option = {
            loading: {
              //finishedMsg: "<em class='all-loaded'>已經載完所有內容了！</em>",
              img: "http://seinsights.asia/sites/all/libraries/infinite_scroll/images/loading_m.gif",
              //msgText: '<em>正在載入更多內容...</em>',
              speed: "slow"
            },
            navSelector   : elem + " .pager-next:last",
            nextSelector  : elem + " .pager-next:last a",
            itemSelector  : ".infinite-list",
            debug: true,
            dataType: 'html',
            maxPage: lastPage,
            animate: true,
            path: function(index) {
              index -= 1;
              return pathArr[0] + "?page=" + index;
            }
          }
          return option;
        }

        var callbackCode = "\
          console.log(url);\
          var urlArr = url.split(\"?page=\");\
          var index = parseInt(urlArr[1]);\
          var wrapClass = \"infinite-row infinite-row-\" + index;\
          console.log(wrapClass);\
          var wrapSelector = \".infinite-row-\" + index;\
          var wrapHTML = \"<div class='\" + wrapClass + \"'></div>\";\
          $(this).append(wrapHTML);\
          $(wrapSelector).append(newElements);\
          FB.XFBML.parse();\
          gapi.plusone.go();\
        ";

        if (!$("body").hasClass("page-node")) {
          var callbackCode = "\
            console.log(url);\
            var urlArr = url.split(\"?page=\");\
            var index = parseInt(urlArr[1]);\
            var wrapClass = \"infinite-row infinite-row-\" + index;\
            console.log(wrapClass);\
            var wrapSelector = \".infinite-row-\" + index;\
            var wrapHTML = \"<div class='\" + wrapClass + \"'></div>\";\
            $(this).append(wrapHTML);\
            var gi = index + 1;\
            console.log(gi);\
            var gg = ggRender(gi);\
            $(wrapSelector).append(newElements).append(gg);\
            FB.XFBML.parse();\
            gapi.plusone.go();\
          ";
        }

        /*
        var callbackCode = "\
          console.log(url);\
          var urlArr = url.split(\"?page=\");\
          var index = parseInt(urlArr[1]);\
          var wrapClass = \"infinite-row infinite-row-\" + index;\
          console.log(wrapClass);\
          var wrapSelector = \".infinite-row-\" + index;\
          var wrapHTML = \"<div class='\" + wrapClass + \"'></div>\";\
          var qk = renderQk(index);\
          $(this).append(wrapHTML);\
          $(wrapSelector).append(newElements).append(qk);\
        ";
        */

        $(elem).infinitescroll(renderOption(elem), function(newElements, data, url){ eval(callbackCode); });
      }
    }



    /*
    var qkLastIndex = qk.length - 1;
    var renderQk = function(index) {
      if (index > qkLastIndex) {
        index = index % qk.length;
      }
      var qkImg = qk[index]['img'];
      var qkTitle = qk[index]['title'];
      var output = "<div class='qk'><img src='" + qkImg + "'></div>";
      //var output = "<div class='qk'></div>";
      return output;
    }

    var firstQk = renderQk(0);
    $(content + " .post-list:first").after(firstQk);
    */

    if (!$("body").hasClass("page-node")) {
      var ggFirst = ggRender(1);
      $(content + " .infinite-list:first").after(ggFirst);
    }

    var addNext = function(elem) {
      var nextFirst = elem + " .pager-next:first a";
      var item = elem + " .infinite-list";
      $(nextFirst).clone().insertAfter(item).wrap("<div class='pager-next'></div>");
    }
    addNext(content);


    ifScroll(content);

  });

})(jq1110);;
//
// Note: This file depends on the jQuery library.
//

// Automatically calls all functions in FORMALIZE.init
jQuery(document).ready(function() {
	FORMALIZE.go();
});

// Module pattern:
// http://yuiblog.com/blog/2007/06/12/module-pattern/
var FORMALIZE = (function($, window, document, undefined) {
	// Private constants.
	var PLACEHOLDER_SUPPORTED = 'placeholder' in document.createElement('input');
	var AUTOFOCUS_SUPPORTED = 'autofocus' in document.createElement('input');
	var WEBKIT = 'webkitAppearance' in document.createElement('select').style;
	var IE6 = !!($.browser.msie && parseInt($.browser.version, 10) === 6);
	var IE7 = !!($.browser.msie && parseInt($.browser.version, 10) === 7);

	// Expose innards of FORMALIZE.
	return {
		// FORMALIZE.go
		go: function() {
			for (var i in FORMALIZE.init) {
				FORMALIZE.init[i]();
			}
		},
		// FORMALIZE.init
		init: {
			detect_webkit: function() {			
				if (!WEBKIT) {
					return;
				}

				// Tweaks for Safari + Chrome.
				$('html').addClass('is_webkit');
			},
			// FORMALIZE.init.full_input_size
			full_input_size: function() {
				if (!IE7 || !$('textarea, input.input_full').length) {
					return;
				}

				// This fixes width: 100% on <textarea> and class="input_full".
				// It ensures that form elements don't go wider than container.
				$('textarea, input.input_full').wrap('<span class="input_full_wrap"></span>');
			},
			// FORMALIZE.init.ie6_skin_inputs
			ie6_skin_inputs: function() {
				// Test for Internet Explorer 6.
				if (!IE6 || !$('input, select, textarea').length) {
					// Exit if the browser is not IE6,
					// or if no form elements exist.
					return;
				}

				// For <input type="submit" />, etc.
				var button_regex = /button|submit|reset/;

				// For <input type="text" />, etc.
				var type_regex = /date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;

				$('input').each(function() {
					var el = $(this);

					// Is it a button?
					if (this.getAttribute('type').match(button_regex)) {
						el.addClass('ie6_button');

						/* Is it disabled? */
						if (this.disabled) {
							el.addClass('ie6_button_disabled');
						}
					}
					// Or is it a textual input?
					else if (this.getAttribute('type').match(type_regex)) {
						el.addClass('ie6_input');

						/* Is it disabled? */
						if (this.disabled) {
							el.addClass('ie6_input_disabled');
						}
					}
				});

				$('textarea, select').each(function() {
					/* Is it disabled? */
					if (this.disabled) {
						$(this).addClass('ie6_input_disabled');
					}
				});
			},
			// FORMALIZE.init.placeholder
			placeholder: function() {
				if (PLACEHOLDER_SUPPORTED || !$(':input[placeholder]').length) {
					// Exit if placeholder is supported natively,
					// or if page does not have any placeholder.
					return;
				}

				$(':input[placeholder]').each(function() {
					var el = $(this);
					var text = el.attr('placeholder');

					function add_placeholder() {
						if (!el.val() || el.val() === text) {
							el.val(text).addClass('placeholder_text');
						}
					}

					add_placeholder();

					el.focus(function() {
						if (el.val() === text) {
							el.val('').removeClass('placeholder_text');;
						}
					}).blur(function() {
						add_placeholder();
					});

					// Prevent <form> from accidentally
					// submitting the placeholder text.
					el.closest('form').submit(function() {
						if (el.val() === text) {
							el.val('');
						}
					}).bind('reset', function() {
						setTimeout(add_placeholder, 50);
					});
				});
			},
			// FORMALIZE.init.autofocus
			autofocus: function() {
				if (AUTOFOCUS_SUPPORTED || !$(':input[autofocus]').length) {
					return;
				}

				$(':input[autofocus]:visible:first').select();
			}
		}
	};
// Alias jQuery, window, document.
})(jQuery, this, this.document);;
Drupal.behaviors.vigor = function (context) {

  $('#growl > div:not(.processed)').each(function() {
    $(this).addClass('processed');
    $('span.close', this).click(function() {
      $(this).parent().hide('fast');
    });
    if ($(this).is('.autoclose')) {
      // If a message contains a link, autoclosing is probably a bad idea.
      if ($('a', this).size() > 0) {
        $(this).removeClass('autoclose');
      }
      else {
        // This essentially adds a 3 second pause before hiding the message.
        $(this).animate({opacity:.95}, 5000, 'linear', function() {
          $(this).hide('fast');
        });
      }
    }
  });

  $('fieldset.collapsible:not(.vigor-processed) > legend > .fieldset-title').each(function() {
    var fieldset = $(this).parents('fieldset').eq(0);
    fieldset.addClass('vigor-processed');

    // Expand any fieldsets containing errors.
    if ($('input.error, textarea.error, select.error', fieldset).size() > 0) {
      $(fieldset).removeClass('collapsed');
    }

    // Add a click handler for toggling fieldset state.
    $(this).click(function() {
      if (fieldset.is('.collapsed')) {
        $(fieldset).removeClass('collapsed').children('.fieldset-content').show();
      }
      else {
        $(fieldset).addClass('collapsed').children('.fieldset-content').hide();
      }
      return false;
    });
  });

  $(".page-admin table tr").hover(
    function() {
      $(this).addClass("highlight");
    },
    function() {
      $(this).removeClass("highlight");
    }
  );

  $('.bmui .help').hide();
  if ($(".page-admin .help").find("p").length == 0 ) {
    $(".toolbar-help").hide();
  }
  else {
    $(".page-admin .toolbar-help").click(function() {
      $(".help").toggle(300);
    });
  }

}
;
(function($) {

  "use strict";

  //var $header = $("#header");
  //console.log($header);

  var pathname = window.location.pathname;

  // Get viewport
  var viewport;
  var getViewport = function() {
    viewport = {
      width  : $(window).width(),
      height : $(window).height()
    };
  }

  //
  var getParameterByName = function(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  var getCurrentDate = function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  // Mobile button click
  var mobileBtnClick = function() {
    $(".mobile-btn").click(function() {
      var thisId = $(this).attr("id");
      var activeClass = "mobile-btn-active " + thisId + "-active";
      if ($(this).hasClass(activeClass)) {
        $(this).removeClass(activeClass);
      } else {
        $(this).addClass(activeClass);
      }
    });
  }

  var headerOffset;
  var getHeaderOffset = function() {
    headerOffset = $("#header").height();
  }

  var headerFixed = function(scroll) {
    if (scroll >= headerOffset) {
      if (!$("body").hasClass("page-admin")) {
        $("#header").addClass("header-fixed");
      }
    } else {
      $("#header").removeClass("header-fixed");
    }
  }

  // slideTo
  var slideTo =  function($slide, $slideContent, direction, duration) {
    var options = {};
    var borderWidth = 0;
    direction = typeof direction !== 'undefined' ? "margin" + direction : 'marginLeft';
    options[direction] = parseInt($slide.css(direction), 10) == 0 ? 0 - $slideContent.width() - borderWidth : 0;
    options[direction] == 0 ? $slide.addClass("slide-active") : $slide.removeClass("slide-active");
    if ($slide && $slideContent) {
      $slide.animate(options, duration);
    }
  }


  var smoothScroll = function() {
    var headerHeight = 138;
    var editormenu = 0;
    if ($(".simplemenu-enabled").length > 0) {
      headerHeight = headerHeight * 2;
    }
    var t = headerHeight + editormenu;
    console.log(t);
    $('a[href*=#]:not([href=#]):not([href*=#mobile])').click(function() {
      if (!$(this).hasClass("no-smooth")) {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          var tt = target.offset().top - t;
          console.log(tt);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - t
            }, 1000);
            return false;
          }
        }
      }
    });
  }

  var eventsFilter = function() {
    if ($("#views-exposed-form-event-v3-default").length > 0) {

      var upcoming = getParameterByName('field_event_date_value2_1%5Bvalue%5D%5Bdate%5D');
      var past = getParameterByName('field_event_date_value2_2%5Bvalue%5D%5Bdate%5D');
      var currentDate = getCurrentDate();
      console.log(currentDate);
      var dateSelect = "\
        <div class=\"views-exposed-widget\">\
          <select name=\"events-date\" id=\"events-date\" class=\"form-select\">\
            <option value=\"All\" selected=\"selected\">全部時間</option>\
            <option value=\"upcoming\">即將舉辦</option>\
            <option value=\"past\">過往活動</option>\
          </select>\
        </div>\
      ";
      $("#views-exposed-form-event-v3-default .views-exposed-widgets").prepend(dateSelect);

      $("#events-date").on("change", function(){
        console.log($(this).val());
        $("input.date-date").val("");
        switch($(this).val()) {
          case 'upcoming':
            $("#edit-field-event-date-value2-1-value-date").val(currentDate);
            break;
          case 'past':
            $("#edit-field-event-date-value2-2-value-date").val(currentDate);
            break;
        }
      });

      if ($(".events-group").length > 0) {
        if (upcoming) {
          $(".events-past").hide();
        }
        if (past) {
          $(".events-upcoming").hide();
        }
      }
      if ($("#events-date").length > 0) {
        if (upcoming) {
          $("#events-date").val("upcoming");
        }
        if (past) {
          $("#events-date").val("past");
        }
      }
    }
  }

  var exposedFilter = function() {
    if ($("#views-exposed-form-event-v3-default .form-submit").length > 0) {
      $("#views-exposed-form-event-v3-default .form-submit").val("搜尋");
    }
    if ($("#views-exposed-form-network-sub-v3-page-1 .form-submit").length > 0) {
      $("#views-exposed-form-network-sub-v3-page-1 .form-submit").val("搜尋");
    }
    if ($("#views-exposed-form-se-archive-v3-page-1  .form-submit").length > 0) {
      $("#views-exposed-form-se-archive-v3-page-1  .form-submit").val("搜尋");
    }
    if ($("#views-exposed-form-job-v3-page-1 .form-submit").length > 0) {
      $("#views-exposed-form-job-v3-page-1 .form-submit").val("搜尋");
    }
  }

  var allDayFix = function() {
    if ($(".date-display-single").length > 0) {
      $(".date-display-single").each(function() {
        if ($(this).html() == '&nbsp;') {
          $(this).parent(".event-time").hide();
        }
      });
    }
  }

  var hideLatestArticle = function() {
    var allow = ["news", "cases", "reviews"];
    if ($.inArray(pathname, allow)) {
      if ($(".theme-info-main").length > 0) {
        var latestHref = $(".theme-content a").attr("href");
        //console.log("latestHref: " + latestHref);
        if ($(".tab-panel").length > 0) {
          $(".tab-panel").each(function() {
            var $firstRow = $(this).find(".views-row-first");
            var firstRowHref = $(this).find(".views-row-first .article-title a").attr("href");
            //console.log("firstRowHref: " + firstRowHref);
            if (latestHref == firstRowHref) {
              $firstRow.hide();
            }
          });
        } else {
          $("#content-main .article-list").each(function() {
            var $firstRow = $(this).find(".views-row-first");
            var firstRowHref = $(this).find(".views-row-first .article-title a").attr("href");
            //console.log("firstRowHref: " + firstRowHref);
            if (latestHref == firstRowHref) {
              $firstRow.hide();
            }
          });
        }
      }
    }
  }

  var pastEventMore = function() {
    if ($(".events-past .views-row").length > 6) {
      $(".events-past .views-row").eq(5).after("<hr>");
      var content = $(".events-past .view-content").html().split("<hr>");
      content[0] += "<div class='more'><a id='more-past-events-btn' class='btn-link' href='#'>顯示所有過往活動</a>";
      content[1] = "<div class='more-past-events close'>" + content[1] + "</div></div>";
      $(".events-past .view-content").html(content[0] + content[1]);
      var $moreBtn = $("#more-past-events-btn");
        $moreBtn.on("click", function() {
        var $morePastEvents = $(".more-past-events");
        if ($morePastEvents.hasClass("close")) {
          $morePastEvents.slideDown("slow");
          $("#more-past-events-btn").hide();
          //$moreBtn.text("隱藏所有過往活動");
        } else {
          //$morePastEvents.removeClass("open").addClass("close");
          //$moreBtn.text("展開所有過往活動");
        }
        return false;
      });
    }
  }

  var newbieStep1Media = function() {
    $("#step-1-video-btn").click(function() {
      $("#step-1-slide").fadeOut("fast");
      $("#step-1-video").fadeIn("fast");
      return false;
    });
    $("#step-1-slide-btn").click(function() {
      $("#step-1-video").fadeOut("fast");
      $("#step-1-slide").fadeIn("fast");
      return false;
    });
  }

  var noLink = function(selector) {
    $(selector).attr("href", "#").removeClass("active").on("click", function() {
      return false;
    });
  }

  var scrollbarMeasure = function() {
    // Create the measurement node
    var scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    console.log(scrollbarWidth);

    // Delete the DIV
    document.body.removeChild(scrollDiv);
  }

  var searchTitleReplace = function() {
    if ($(".faceted-search-stage-results").length > 0 || $(".faceted-search-stage-facet").length > 0) {
      var siteTitle = "社企流 | 華文界最具影響力的社會企業平台 Social Enterprise Insights";
      var searchTitle = "搜尋";
      var searchStr = "";
      var rs1 = getParameterByName("rs1");

      console.log(rs1);

      if ($(".faceted-search-facet-active").length == 0 && !rs1) {
        var pd = decodeURI(pathname);
        var pdArr = pd.split("/");
        console.log(pdArr);
        if (pdArr[1] == "search" && pdArr[2] == "results" && 3 in pdArr) {
          console.log(pdArr[3]);
          searchStr = pdArr[3];
        }
      } else {
        if (rs1) {
          searchStr = rs1;
        }
      }

      searchTitle += "：" + searchStr;
      //if (searchTitle) {
        $(".page-title").text(searchTitle).css("opacity", "1");
        document.title = searchTitle + " | " + siteTitle;
      //}

      $(".faceted-search-facet a[href^='/search/']").each(function() {
        var href = $(this).attr("href");
        href += "?rs1=" + searchStr;
        $(this).attr("href", href);
      });
    }
  }

  // Window resize
  var resizeTimer;
  var windowResize = function() {
    //console.log("window resize");
    mobileBtnClick();
    //getHeaderOffset();
  };

  // Document ready
  $(document).ready(function() {
    //console.log($.fn.jquery);

    getHeaderOffset();
    //console.log("headerOffset: " + headerOffset);
    mobileBtnClick();
    smoothScroll();
    searchTitleReplace();

    noLink("#dhtml_menu-7235");

    $("#theme-menu-slide .slide-to-btn").click(function(e){
      e.preventDefault();
      slideTo($("#theme-menu-slide"), $("#theme-menu-slide .slide-to-content"));
    });

    $("#edit-query-wrapper").before("<label for='edit-query'>搜尋</label>");

    hideLatestArticle();
    exposedFilter();
    eventsFilter();
    allDayFix();

    if ($("#block-netivism_sei-newbie_step_1 #step-1").length > 0) {
      newbieStep1Media();
    }

    if ($(".events-past").length) {
      pastEventMore();
    }
    //var field_region_taxonomy_value = getParameterByName('field_region_taxonomy_value%5B%5D');

    //$('input, textarea').placeholder();

    scrollbarMeasure();

  });

  $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(windowResize, 250);
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    //console.log("window scroll: " + scroll);
    headerFixed(scroll);
  });

  //windowResize();

})(jq1110);;
TongWen.addT2STable({
"¯" :"ˉ",
"‥":"¨" ,
"‧":"·" ,
"‵":"｀",
"≒":"≈" ,
"≦":"≤" ,
"≧":"≥" ,
"╱":"／",
"╲":"＼",
"╴":"＿",
"「":"“",
"」":"”",
"『":"‘",
"』":"’",
"㑳":"㑇",
"㘚":"㘎",
"㥮":"㤘",
"㩳":"㧐",
"䎱":"䎬",
"䙡":"䙌",
"䝼":"䞍",
"䥇":"䦂",
"䦛":"䦶",
"䦟":"䦷",
"䱷":"䲣",
"丟":"丢",
"並":"并",
"丼":"井",
"乾":"干",
"亂":"乱",
"亙":"亘",
"亞":"亚",
"伕":"夫",
"佇":"伫",
"佈":"布",
"佔":"占",
"佪":"徊",
"併":"并",
"來":"来",
"侖":"仑",
"侚":"徇",
"侶":"侣",
"侷":"局",
"俁":"俣",
"係":"系",
"俠":"侠",
"倀":"伥",
"倆":"俩",
"倉":"仓",
"個":"个",
"們":"们",
"倖":"幸",
"倣":"仿",
"倫":"伦",
"偉":"伟",
"偪":"逼",
"側":"侧",
"偵":"侦",
"偺":"咱",
"偽":"伪",
"傑":"杰",
"傖":"伧",
"傘":"伞",
"備":"备",
"傚":"效",
"傢":"家",
"傭":"佣",
"傯":"偬",
"傳":"传",
"傴":"伛",
"債":"债",
"傷":"伤",
"傾":"倾",
"僂":"偻",
"僅":"仅",
"僉":"佥",
"僊":"仙",
"僑":"侨",
"僕":"仆",
"僞":"伪",
"僣":"僭",
"僥":"侥",
"僨":"偾",
"僱":"雇",
"價":"价",
"儀":"仪",
"儂":"侬",
"億":"亿",
"儅":"当",
"儈":"侩",
"儉":"俭",
"儐":"傧",
"儔":"俦",
"儕":"侪",
"儘":"尽",
"償":"偿",
"優":"优",
"儲":"储",
"儷":"俪",
"儸":"罗",
"儺":"傩",
"儻":"傥",
"儼":"俨",
"兇":"凶",
"兌":"兑",
"兒":"儿",
"兗":"兖",
"內":"内",
"兩":"两",
"冊":"册",
"冑":"胄",
"冪":"幂",
"凅":"涸",
"凈":"净",
"凍":"冻",
"凜":"凛",
"凱":"凯",
"別":"别",
"刪":"删",
"剄":"刭",
"則":"则",
"剉":"锉",
"剋":"克",
"剎":"刹",
"剗":"刬",
"剛":"刚",
"剝":"剥",
"剮":"剐",
"剴":"剀",
"創":"创",
"剷":"铲",
"劃":"划",
"劄":"札",
"劇":"剧",
"劉":"刘",
"劊":"刽",
"劌":"刿",
"劍":"剑",
"劑":"剂",
"劻":"匡",
"勁":"劲",
"動":"动",
"勗":"勖",
"務":"务",
"勛":"勋",
"勝":"胜",
"勞":"劳",
"勢":"势",
"勣":"绩",
"勦":"剿",
"勩":"勚",
"勱":"劢",
"勳":"勋",
"勵":"励",
"勸":"劝",
"勻":"匀",
"匋":"陶",
"匭":"匦",
"匯":"汇",
"匱":"匮",
"區":"区",
"卄":"廿",
"協":"协",
"卬":"昂",
"卹":"恤",
"卻":"却",
"厙":"厍",
"厭":"厌",
"厲":"厉",
"厴":"厣",
"參":"参",
"叡":"睿",
"叢":"丛",
"吋":"寸",
"后":"后",
"吳":"吴",
"吶":"呐",
"呂":"吕",
"呎":"尺",
"咷":"啕",
"咼":"呙",
"員":"员",
"唄":"呗",
"唝":"嗊",
"唸":"念",
"問":"问",
"啓":"启",
"啗":"啖",
"啞":"哑",
"啟":"启",
"啢":"唡",
"啣":"衔",
"喎":"㖞",
"喚":"唤",
"喪":"丧",
"喫":"吃",
"喬":"乔",
"單":"单",
"喲":"哟",
"嗆":"呛",
"嗇":"啬",
"嗎":"吗",
"嗚":"呜",
"嗩":"唢",
"嗶":"哔",
"嘆":"叹",
"嘍":"喽",
"嘔":"呕",
"嘖":"啧",
"嘗":"尝",
"嘜":"唛",
"嘩":"哗",
"嘮":"唠",
"嘯":"啸",
"嘰":"叽",
"嘵":"哓",
"嘸":"呒",
"噁":"恶",
"噓":"嘘",
"噝":"咝",
"噠":"哒",
"噥":"哝",
"噦":"哕",
"噯":"嗳",
"噲":"哙",
"噴":"喷",
"噸":"吨",
"噹":"当",
"嚀":"咛",
"嚇":"吓",
"嚌":"哜",
"嚐":"尝",
"嚕":"噜",
"嚙":"啮",
"嚥":"咽",
"嚦":"呖",
"嚨":"咙",
"嚮":"向",
"嚳":"喾",
"嚴":"严",
"嚶":"嘤",
"囀":"啭",
"囁":"嗫",
"囂":"嚣",
"囅":"冁",
"囈":"呓",
"囉":"啰",
"囌":"苏",
"囑":"嘱",
"囓":"啮",
"囪":"囱",
"圇":"囵",
"國":"国",
"圍":"围",
"圏":"圈",
"園":"园",
"圓":"圆",
"圖":"图",
"團":"团",
"坵":"丘",
"埜":"野",
"埡":"垭",
"執":"执",
"埼":"崎",
"堅":"坚",
"堊":"垩",
"堖":"垴",
"堝":"埚",
"堯":"尧",
"報":"报",
"場":"场",
"塊":"块",
"塋":"茔",
"塏":"垲",
"塒":"埘",
"塗":"涂",
"塚":"冢",
"塢":"坞",
"塤":"埙",
"塵":"尘",
"塹":"堑",
"墊":"垫",
"墑":"墒",
"墜":"坠",
"墫":"樽",
"墮":"堕",
"墳":"坟",
"墻":"墙",
"墾":"垦",
"壇":"坛",
"壎":"埙",
"壓":"压",
"壘":"垒",
"壙":"圹",
"壚":"垆",
"壞":"坏",
"壟":"垄",
"壢":"坜",
"壩":"坝",
"壯":"壮",
"壺":"壶",
"壽":"寿",
"夠":"够",
"夢":"梦",
"夾":"夹",
"奐":"奂",
"奧":"奥",
"奩":"奁",
"奪":"夺",
"奮":"奋",
"妝":"妆",
"姍":"姗",
"姦":"奸",
"姪":"侄",
"娛":"娱",
"婁":"娄",
"婦":"妇",
"婬":"淫",
"婭":"娅",
"媧":"娲",
"媮":"偷",
"媯":"妫",
"媼":"媪",
"媽":"妈",
"媿":"愧",
"嫋":"袅",
"嫗":"妪",
"嫵":"妩",
"嫻":"娴",
"嫿":"婳",
"嬈":"娆",
"嬋":"婵",
"嬌":"娇",
"嬙":"嫱",
"嬝":"袅",
"嬡":"嫒",
"嬤":"嬷",
"嬪":"嫔",
"嬭":"奶",
"嬰":"婴",
"嬸":"婶",
"孃":"娘",
"孌":"娈",
"孫":"孙",
"學":"学",
"孿":"孪",
"宮":"宫",
"寘":"置",
"寢":"寝",
"實":"实",
"寧":"宁",
"審":"审",
"寫":"写",
"寬":"宽",
"寵":"宠",
"寶":"宝",
"將":"将",
"專":"专",
"尋":"寻",
"對":"对",
"導":"导",
"尷":"尴",
"屆":"届",
"屍":"尸",
"屜":"屉",
"屝":"扉",
"屢":"屡",
"層":"层",
"屨":"屦",
"屬":"属",
"岡":"冈",
"峴":"岘",
"島":"岛",
"峽":"峡",
"崍":"崃",
"崑":"昆",
"崗":"岗",
"崙":"仑",
"崠":"岽",
"崢":"峥",
"崳":"嵛",
"嵐":"岚",
"嵒":"岩",
"嶁":"嵝",
"嶄":"崭",
"嶇":"岖",
"嶔":"嵚",
"嶗":"崂",
"嶠":"峤",
"嶢":"峣",
"嶧":"峄",
"嶨":"峃",
"嶸":"嵘",
"嶺":"岭",
"嶼":"屿",
"嶽":"岳",
"巋":"岿",
"巒":"峦",
"巔":"巅",
"巖":"岩",
"巰":"巯",
"巹":"卺",
"帥":"帅",
"師":"师",
"帳":"帐",
"帶":"带",
"幀":"帧",
"幃":"帏",
"幗":"帼",
"幘":"帻",
"幟":"帜",
"幣":"币",
"幫":"帮",
"幬":"帱",
"幵":"开",
"幷":"并",
"幹":"干",
"幾":"几",
"庂":"仄",
"庫":"库",
"廁":"厕",
"廂":"厢",
"廄":"厩",
"廈":"厦",
"廎":"庼",
"廚":"厨",
"廝":"厮",
"廟":"庙",
"廠":"厂",
"廡":"庑",
"廢":"废",
"廣":"广",
"廩":"廪",
"廬":"庐",
"廱":"痈",
"廳":"厅",
"弒":"弑",
"弔":"吊",
"弳":"弪",
"張":"张",
"強":"强",
"彆":"别",
"彈":"弹",
"彌":"弥",
"彎":"弯",
"彙":"汇",
"彚":"汇",
"彥":"彦",
"彫":"雕",
"彿":"佛",
"後":"后",
"徑":"径",
"從":"从",
"徠":"徕",
"復":"复",
"徬":"旁",
"徵":"征",
"徹":"彻",
"恆":"恒",
"恥":"耻",
"悅":"悦",
"悵":"怅",
"悶":"闷",
"悽":"凄",
"惇":"敦",
"惡":"恶",
"惱":"恼",
"惲":"恽",
"惷":"蠢",
"惻":"恻",
"愛":"爱",
"愜":"惬",
"愨":"悫",
"愴":"怆",
"愷":"恺",
"愾":"忾",
"慄":"栗",
"慇":"殷",
"態":"态",
"慍":"愠",
"慘":"惨",
"慚":"惭",
"慟":"恸",
"慣":"惯",
"慪":"怄",
"慫":"怂",
"慮":"虑",
"慳":"悭",
"慶":"庆",
"慼":"戚",
"慾":"欲",
"憂":"忧",
"憊":"惫",
"憐":"怜",
"憑":"凭",
"憒":"愦",
"憚":"惮",
"憤":"愤",
"憫":"悯",
"憮":"怃",
"憲":"宪",
"憶":"忆",
"懃":"勤",
"懇":"恳",
"應":"应",
"懌":"怿",
"懍":"懔",
"懞":"蒙",
"懟":"怼",
"懣":"懑",
"懨":"恹",
"懲":"惩",
"懶":"懒",
"懷":"怀",
"懸":"悬",
"懺":"忏",
"懼":"惧",
"懾":"慑",
"戀":"恋",
"戇":"戆",
"戉":"钺",
"戔":"戋",
"戧":"戗",
"戩":"戬",
"戰":"战",
"戲":"戏",
"戶":"户",
"扐":"仂",
"扞":"捍",
"扱":"插",
"扺":"抵",
"抃":"拚",
"抔":"抱",
"抴":"曳",
"拋":"抛",
"拑":"钳",
"挌":"格",
"挶":"局",
"挾":"挟",
"捨":"舍",
"捫":"扪",
"捲":"卷",
"掃":"扫",
"掄":"抡",
"掆":"㧏",
"掗":"挜",
"掙":"挣",
"掛":"挂",
"採":"采",
"揀":"拣",
"揚":"扬",
"換":"换",
"揮":"挥",
"揹":"背",
"搆":"构",
"損":"损",
"搖":"摇",
"搗":"捣",
"搟":"擀",
"搥":"捶",
"搨":"打",
"搯":"掏",
"搶":"抢",
"搾":"榨",
"摀":"捂",
"摃":"扛",
"摑":"掴",
"摜":"掼",
"摟":"搂",
"摯":"挚",
"摳":"抠",
"摶":"抟",
"摻":"掺",
"撈":"捞",
"撏":"挦",
"撐":"撑",
"撓":"挠",
"撚":"拈",
"撟":"挢",
"撢":"掸",
"撣":"掸",
"撥":"拨",
"撦":"扯",
"撫":"抚",
"撲":"扑",
"撳":"揿",
"撻":"挞",
"撾":"挝",
"撿":"捡",
"擁":"拥",
"擄":"掳",
"擇":"择",
"擊":"击",
"擋":"挡",
"擓":"㧟",
"擔":"担",
"據":"据",
"擠":"挤",
"擡":"抬",
"擣":"捣",
"擬":"拟",
"擯":"摈",
"擰":"拧",
"擱":"搁",
"擲":"掷",
"擴":"扩",
"擷":"撷",
"擺":"摆",
"擻":"擞",
"擼":"撸",
"擾":"扰",
"攄":"摅",
"攆":"撵",
"攏":"拢",
"攔":"拦",
"攖":"撄",
"攙":"搀",
"攛":"撺",
"攜":"携",
"攝":"摄",
"攢":"攒",
"攣":"挛",
"攤":"摊",
"攪":"搅",
"攬":"揽",
"攷":"考",
"敗":"败",
"敘":"叙",
"敵":"敌",
"數":"数",
"斂":"敛",
"斃":"毙",
"斕":"斓",
"斬":"斩",
"斷":"断",
"於":"于",
"旂":"旗",
"旛":"幡",
"昇":"升",
"時":"时",
"晉":"晋",
"晝":"昼",
"晞":"曦",
"晢":"晰",
"晳":"晰",
"晻":"暗",
"暈":"晕",
"暉":"晖",
"暘":"阳",
"暢":"畅",
"暫":"暂",
"暱":"昵",
"暸":"了",
"曄":"晔",
"曆":"历",
"曇":"昙",
"曉":"晓",
"曏":"向",
"曖":"暧",
"曠":"旷",
"曨":"昽",
"曬":"晒",
"書":"书",
"會":"会",
"朢":"望",
"朧":"胧",
"朮":"术",
"杇":"圬",
"東":"东",
"枴":"拐",
"柵":"栅",
"柺":"拐",
"栒":"旬",
"桮":"杯",
"桿":"杆",
"梔":"栀",
"梘":"枧",
"條":"条",
"梟":"枭",
"梱":"捆",
"棄":"弃",
"棖":"枨",
"棗":"枣",
"棟":"栋",
"棡":"㭎",
"棧":"栈",
"棲":"栖",
"椏":"桠",
"楄":"匾",
"楊":"杨",
"楓":"枫",
"楙":"茂",
"楜":"胡",
"楨":"桢",
"業":"业",
"極":"极",
"榦":"干",
"榪":"杩",
"榮":"荣",
"榿":"桤",
"槃":"盘",
"構":"构",
"槍":"枪",
"槓":"杠",
"槧":"椠",
"槨":"椁",
"槳":"桨",
"樁":"桩",
"樂":"乐",
"樅":"枞",
"樑":"梁",
"樓":"楼",
"標":"标",
"樞":"枢",
"樣":"样",
"樸":"朴",
"樹":"树",
"樺":"桦",
"橈":"桡",
"橋":"桥",
"機":"机",
"橢":"椭",
"橦":"幢",
"橫":"横",
"檁":"檩",
"檉":"柽",
"檔":"档",
"檜":"桧",
"檟":"槚",
"檢":"检",
"檣":"樯",
"檯":"台",
"檳":"槟",
"檸":"柠",
"檻":"槛",
"櫂":"棹",
"櫃":"柜",
"櫐":"累",
"櫓":"橹",
"櫚":"榈",
"櫛":"栉",
"櫝":"椟",
"櫞":"橼",
"櫟":"栎",
"櫥":"橱",
"櫧":"槠",
"櫨":"栌",
"櫪":"枥",
"櫫":"橥",
"櫬":"榇",
"櫳":"栊",
"櫸":"榉",
"櫺":"棂",
"櫻":"樱",
"欄":"栏",
"權":"权",
"欏":"椤",
"欒":"栾",
"欖":"榄",
"欞":"棂",
"欸":"唉",
"欽":"钦",
"歎":"叹",
"歐":"欧",
"歟":"欤",
"歡":"欢",
"歲":"岁",
"歷":"历",
"歸":"归",
"歿":"殁",
"殀":"夭",
"殘":"残",
"殞":"殒",
"殤":"殇",
"殫":"殚",
"殭":"僵",
"殮":"殓",
"殯":"殡",
"殲":"歼",
"殺":"杀",
"殼":"壳",
"殽":"肴",
"毀":"毁",
"毆":"殴",
"毌":"毋",
"毘":"毗",
"毬":"球",
"毿":"毵",
"氈":"毡",
"氌":"氇",
"氣":"气",
"氫":"氢",
"氬":"氩",
"氳":"氲",
"氾":"泛",
"汍":"丸",
"汎":"泛",
"汙":"污",
"決":"决",
"沍":"冱",
"沒":"没",
"沖":"冲",
"況":"况",
"泝":"溯",
"洟":"涕",
"洩":"泄",
"洶":"汹",
"浬":"里",
"浹":"浃",
"涇":"泾",
"涼":"凉",
"淒":"凄",
"淚":"泪",
"淥":"渌",
"淨":"净",
"淪":"沦",
"淵":"渊",
"淶":"涞",
"淺":"浅",
"渙":"涣",
"減":"减",
"渢":"沨",
"渦":"涡",
"測":"测",
"渾":"浑",
"湊":"凑",
"湞":"浈",
"湣":"闵",
"湧":"涌",
"湯":"汤",
"溈":"沩",
"準":"准",
"溝":"沟",
"溫":"温",
"溮":"浉",
"溳":"涢",
"溼":"湿",
"滄":"沧",
"滅":"灭",
"滌":"涤",
"滎":"荥",
"滬":"沪",
"滯":"滞",
"滲":"渗",
"滷":"卤",
"滸":"浒",
"滻":"浐",
"滾":"滚",
"滿":"满",
"漁":"渔",
"漊":"溇",
"漚":"沤",
"漢":"汉",
"漣":"涟",
"漬":"渍",
"漲":"涨",
"漵":"溆",
"漸":"渐",
"漿":"浆",
"潁":"颍",
"潑":"泼",
"潔":"洁",
"潛":"潜",
"潟":"舄",
"潤":"润",
"潯":"浔",
"潰":"溃",
"潷":"滗",
"潿":"涠",
"澀":"涩",
"澂":"澄",
"澆":"浇",
"澇":"涝",
"澔":"浩",
"澗":"涧",
"澠":"渑",
"澤":"泽",
"澦":"滪",
"澩":"泶",
"澮":"浍",
"澱":"淀",
"澾":"㳠",
"濁":"浊",
"濃":"浓",
"濕":"湿",
"濘":"泞",
"濛":"蒙",
"濜":"浕",
"濟":"济",
"濤":"涛",
"濫":"滥",
"濬":"浚",
"濰":"潍",
"濱":"滨",
"濺":"溅",
"濼":"泺",
"濾":"滤",
"瀁":"漾",
"瀅":"滢",
"瀆":"渎",
"瀉":"泻",
"瀋":"沈",
"瀏":"浏",
"瀕":"濒",
"瀘":"泸",
"瀝":"沥",
"瀟":"潇",
"瀠":"潆",
"瀦":"潴",
"瀧":"泷",
"瀨":"濑",
"瀰":"弥",
"瀲":"潋",
"瀾":"澜",
"灃":"沣",
"灄":"滠",
"灑":"洒",
"灕":"漓",
"灘":"滩",
"灝":"灏",
"灣":"湾",
"灤":"滦",
"灩":"滟",
"災":"灾",
"炤":"照",
"炰":"炮",
"為":"为",
"烏":"乌",
"烴":"烃",
"無":"无",
"煉":"炼",
"煒":"炜",
"煖":"暖",
"煙":"烟",
"煢":"茕",
"煥":"焕",
"煩":"烦",
"煬":"炀",
"熒":"荧",
"熗":"炝",
"熱":"热",
"熾":"炽",
"燁":"烨",
"燄":"焰",
"燈":"灯",
"燉":"炖",
"燐":"磷",
"燒":"烧",
"燙":"烫",
"燜":"焖",
"營":"营",
"燦":"灿",
"燬":"毁",
"燭":"烛",
"燴":"烩",
"燻":"熏",
"燼":"烬",
"燾":"焘",
"燿":"耀",
"爍":"烁",
"爐":"炉",
"爛":"烂",
"爭":"争",
"爲":"为",
"爺":"爷",
"爾":"尔",
"牆":"墙",
"牘":"牍",
"牠":"它",
"牴":"抵",
"牽":"牵",
"犖":"荦",
"犛":"牦",
"犢":"犊",
"犧":"牺",
"狀":"状",
"狚":"旦",
"狹":"狭",
"狽":"狈",
"猙":"狰",
"猶":"犹",
"猻":"狲",
"獁":"犸",
"獃":"呆",
"獄":"狱",
"獅":"狮",
"獎":"奖",
"獨":"独",
"獪":"狯",
"獫":"猃",
"獮":"狝",
"獰":"狞",
"獲":"获",
"獵":"猎",
"獷":"犷",
"獸":"兽",
"獺":"獭",
"獻":"献",
"獼":"猕",
"玀":"猡",
"玅":"妙",
"玆":"兹",
"玨":"珏",
"珪":"圭",
"珮":"佩",
"現":"现",
"琱":"雕",
"琺":"珐",
"琿":"珲",
"瑋":"玮",
"瑣":"琐",
"瑤":"瑶",
"瑩":"莹",
"瑪":"玛",
"瑯":"琅",
"瑲":"玱",
"璉":"琏",
"璡":"琎",
"璣":"玑",
"璦":"瑷",
"環":"环",
"璽":"玺",
"璿":"璇",
"瓊":"琼",
"瓏":"珑",
"瓔":"璎",
"瓖":"镶",
"瓚":"瓒",
"甌":"瓯",
"甕":"瓮",
"產":"产",
"産":"产",
"甦":"苏",
"甪":"角",
"畝":"亩",
"畢":"毕",
"畫":"画",
"畬":"畲",
"異":"异",
"當":"当",
"疇":"畴",
"疊":"叠",
"疿":"痱",
"痙":"痉",
"痠":"酸",
"痲":"麻",
"痳":"麻",
"痺":"痹",
"痾":"疴",
"瘂":"痖",
"瘉":"愈",
"瘋":"疯",
"瘍":"疡",
"瘓":"痪",
"瘞":"瘗",
"瘡":"疮",
"瘧":"疟",
"瘺":"瘘",
"瘻":"瘘",
"療":"疗",
"癆":"痨",
"癇":"痫",
"癉":"瘅",
"癒":"愈",
"癘":"疠",
"癟":"瘪",
"癡":"痴",
"癢":"痒",
"癤":"疖",
"癥":"症",
"癧":"疬",
"癩":"癞",
"癬":"癣",
"癭":"瘿",
"癮":"瘾",
"癰":"痈",
"癱":"瘫",
"癲":"癫",
"發":"发",
"皁":"皂",
"皚":"皑",
"皰":"疱",
"皸":"皲",
"皺":"皱",
"盃":"杯",
"盜":"盗",
"盞":"盏",
"盡":"尽",
"監":"监",
"盤":"盘",
"盧":"卢",
"盪":"荡",
"眥":"眦",
"眾":"众",
"睏":"困",
"睜":"睁",
"睞":"睐",
"睪":"睾",
"瞇":"眯",
"瞘":"眍",
"瞜":"䁖",
"瞞":"瞒",
"瞼":"睑",
"矇":"蒙",
"矓":"眬",
"矚":"瞩",
"矯":"矫",
"砲":"炮",
"硃":"朱",
"硤":"硖",
"硨":"砗",
"硯":"砚",
"碕":"崎",
"碩":"硕",
"碪":"砧",
"碭":"砀",
"碸":"砜",
"確":"确",
"碼":"码",
"磑":"硙",
"磚":"砖",
"磣":"碜",
"磧":"碛",
"磯":"矶",
"磽":"硗",
"礄":"硚",
"礎":"础",
"礙":"碍",
"礦":"矿",
"礪":"砺",
"礫":"砾",
"礬":"矾",
"礱":"砻",
"祂":"他",
"祅":"祆",
"祇":"只",
"祐":"佑",
"祼":"裸",
"祿":"禄",
"禍":"祸",
"禎":"祯",
"禕":"祎",
"禦":"御",
"禪":"禅",
"禮":"礼",
"禱":"祷",
"禿":"秃",
"秈":"籼",
"秏":"耗",
"稅":"税",
"稈":"秆",
"稜":"棱",
"稟":"禀",
"稨":"扁",
"種":"种",
"稱":"称",
"穀":"谷",
"穇":"䅟",
"穌":"稣",
"積":"积",
"穎":"颖",
"穡":"穑",
"穢":"秽",
"穨":"颓",
"穩":"稳",
"穫":"获",
"窩":"窝",
"窪":"洼",
"窮":"穷",
"窯":"窑",
"窵":"窎",
"窶":"窭",
"窺":"窥",
"竄":"窜",
"竅":"窍",
"竇":"窦",
"竊":"窃",
"競":"竞",
"笻":"筇",
"筆":"笔",
"筍":"笋",
"筧":"笕",
"筴":"策",
"箄":"箅",
"箇":"个",
"箋":"笺",
"箏":"筝",
"箠":"棰",
"節":"节",
"範":"范",
"築":"筑",
"篋":"箧",
"篛":"箬",
"篠":"筱",
"篤":"笃",
"篩":"筛",
"篲":"彗",
"篳":"筚",
"簀":"箦",
"簍":"篓",
"簑":"蓑",
"簞":"箪",
"簡":"简",
"簣":"篑",
"簫":"箫",
"簷":"檐",
"簽":"签",
"簾":"帘",
"籃":"篮",
"籌":"筹",
"籐":"藤",
"籙":"箓",
"籜":"箨",
"籟":"籁",
"籠":"笼",
"籤":"签",
"籥":"龠",
"籩":"笾",
"籪":"簖",
"籬":"篱",
"籮":"箩",
"籲":"吁",
"粧":"妆",
"粵":"粤",
"糝":"糁",
"糞":"粪",
"糧":"粮",
"糰":"团",
"糲":"粝",
"糴":"籴",
"糶":"粜",
"糾":"纠",
"紀":"纪",
"紂":"纣",
"約":"约",
"紅":"红",
"紆":"纡",
"紇":"纥",
"紈":"纨",
"紉":"纫",
"紋":"纹",
"納":"纳",
"紐":"纽",
"紓":"纾",
"純":"纯",
"紕":"纰",
"紖":"纼",
"紗":"纱",
"紘":"纮",
"紙":"纸",
"級":"级",
"紛":"纷",
"紜":"纭",
"紝":"纴",
"紡":"纺",
"紬":"䌷",
"紮":"扎",
"細":"细",
"紱":"绂",
"紲":"绁",
"紳":"绅",
"紹":"绍",
"紺":"绀",
"紼":"绋",
"紿":"绐",
"絀":"绌",
"終":"终",
"絃":"弦",
"組":"组",
"絆":"绊",
"絎":"绗",
"結":"结",
"絕":"绝",
"絛":"绦",
"絝":"绔",
"絞":"绞",
"絡":"络",
"絢":"绚",
"給":"给",
"絨":"绒",
"絰":"绖",
"統":"统",
"絲":"丝",
"絳":"绛",
"絹":"绢",
"綁":"绑",
"綃":"绡",
"綆":"绠",
"綈":"绨",
"綏":"绥",
"綑":"捆",
"經":"经",
"綜":"综",
"綞":"缍",
"綠":"绿",
"綢":"绸",
"綣":"绻",
"綫":"线",
"綬":"绶",
"維":"维",
"綰":"绾",
"綱":"纲",
"網":"网",
"綴":"缀",
"綵":"彩",
"綸":"纶",
"綹":"绺",
"綺":"绮",
"綻":"绽",
"綽":"绰",
"綾":"绫",
"綿":"绵",
"緄":"绲",
"緇":"缁",
"緊":"紧",
"緋":"绯",
"緒":"绪",
"緔":"绱",
"緗":"缃",
"緘":"缄",
"緙":"缂",
"線":"线",
"緝":"缉",
"緞":"缎",
"締":"缔",
"緡":"缗",
"緣":"缘",
"緦":"缌",
"編":"编",
"緩":"缓",
"緬":"缅",
"緯":"纬",
"緱":"缑",
"緲":"缈",
"練":"练",
"緶":"缏",
"緹":"缇",
"緻":"致",
"縈":"萦",
"縉":"缙",
"縊":"缢",
"縋":"缒",
"縐":"绉",
"縑":"缣",
"縕":"缊",
"縗":"缞",
"縚":"绦",
"縛":"缚",
"縝":"缜",
"縞":"缟",
"縟":"缛",
"縣":"县",
"縫":"缝",
"縭":"缡",
"縮":"缩",
"縯":"演",
"縱":"纵",
"縲":"缧",
"縳":"缚",
"縴":"纤",
"縵":"缦",
"縶":"絷",
"縷":"缕",
"縹":"缥",
"總":"总",
"績":"绩",
"繃":"绷",
"繅":"缫",
"繆":"缪",
"繈":"襁",
"繒":"缯",
"織":"织",
"繕":"缮",
"繙":"翻",
"繚":"缭",
"繞":"绕",
"繡":"绣",
"繢":"缋",
"繩":"绳",
"繪":"绘",
"繫":"系",
"繭":"茧",
"繯":"缳",
"繰":"缲",
"繳":"缴",
"繹":"绎",
"繼":"继",
"繽":"缤",
"繾":"缱",
"纈":"缬",
"纊":"纩",
"續":"续",
"纍":"累",
"纏":"缠",
"纓":"缨",
"纔":"才",
"纖":"纤",
"纘":"缵",
"纜":"缆",
"缽":"钵",
"缾":"瓶",
"罈":"坛",
"罌":"罂",
"罦":"罘",
"罰":"罚",
"罵":"骂",
"罷":"罢",
"羅":"罗",
"羆":"罴",
"羈":"羁",
"羋":"芈",
"羥":"羟",
"羨":"羡",
"義":"义",
"羶":"膻",
"習":"习",
"翬":"翚",
"翹":"翘",
"耑":"端",
"耡":"助",
"耤":"藉",
"耬":"耧",
"耮":"耢",
"聖":"圣",
"聞":"闻",
"聯":"联",
"聰":"聪",
"聲":"声",
"聳":"耸",
"聵":"聩",
"聶":"聂",
"職":"职",
"聹":"聍",
"聽":"听",
"聾":"聋",
"肅":"肃",
"肏":"操",
"肐":"胳",
"胇":"肺",
"胊":"朐",
"脅":"胁",
"脈":"脉",
"脛":"胫",
"脣":"唇",
"脩":"修",
"脫":"脱",
"脹":"胀",
"腎":"肾",
"腖":"胨",
"腡":"脶",
"腦":"脑",
"腫":"肿",
"腳":"脚",
"腸":"肠",
"膃":"腽",
"膆":"嗉",
"膕":"腘",
"膚":"肤",
"膞":"䏝",
"膠":"胶",
"膩":"腻",
"膽":"胆",
"膾":"脍",
"膿":"脓",
"臉":"脸",
"臍":"脐",
"臏":"膑",
"臕":"膘",
"臘":"腊",
"臙":"胭",
"臚":"胪",
"臟":"脏",
"臠":"脔",
"臢":"臜",
"臥":"卧",
"臨":"临",
"臺":"台",
"與":"与",
"興":"兴",
"舉":"举",
"舊":"旧",
"舋":"衅",
"舖":"铺",
"艙":"舱",
"艣":"橹",
"艤":"舣",
"艦":"舰",
"艫":"舻",
"艱":"艰",
"艷":"艳",
"艸":"艹",
"芻":"刍",
"苧":"苎",
"苺":"莓",
"茍":"苟",
"茲":"兹",
"荅":"答",
"荊":"荆",
"荳":"豆",
"莊":"庄",
"莖":"茎",
"莢":"荚",
"莧":"苋",
"菫":"堇",
"華":"华",
"菴":"庵",
"萇":"苌",
"萊":"莱",
"萬":"万",
"萵":"莴",
"葉":"叶",
"葒":"荭",
"著":"着",
"葤":"荮",
"葦":"苇",
"葯":"药",
"葷":"荤",
"蒐":"搜",
"蒔":"莳",
"蒞":"莅",
"蒼":"苍",
"蓀":"荪",
"蓆":"席",
"蓋":"盖",
"蓮":"莲",
"蓯":"苁",
"蓴":"莼",
"蓽":"荜",
"蔆":"菱",
"蔔":"卜",
"蔞":"蒌",
"蔣":"蒋",
"蔥":"葱",
"蔦":"茑",
"蔭":"荫",
"蕁":"荨",
"蕆":"蒇",
"蕎":"荞",
"蕒":"荬",
"蕕":"莸",
"蕘":"荛",
"蕢":"蒉",
"蕩":"荡",
"蕪":"芜",
"蕭":"萧",
"蕷":"蓣",
"薈":"荟",
"薊":"蓟",
"薌":"芗",
"薑":"姜",
"薔":"蔷",
"薙":"剃",
"薟":"莶",
"薦":"荐",
"薩":"萨",
"薺":"荠",
"藍":"蓝",
"藎":"荩",
"藝":"艺",
"藥":"药",
"藪":"薮",
"藭":"䓖",
"藶":"苈",
"藷":"薯",
"藹":"蔼",
"藺":"蔺",
"蘀":"萚",
"蘄":"蕲",
"蘆":"芦",
"蘇":"苏",
"蘊":"蕴",
"蘋":"苹",
"蘗":"蘖",
"蘚":"藓",
"蘞":"蔹",
"蘢":"茏",
"蘭":"兰",
"蘺":"蓠",
"蘿":"萝",
"處":"处",
"虖":"呼",
"虛":"虚",
"虜":"虏",
"號":"号",
"虧":"亏",
"虯":"虬",
"蛺":"蛱",
"蛻":"蜕",
"蜆":"蚬",
"蜺":"霓",
"蝕":"蚀",
"蝟":"猬",
"蝦":"虾",
"蝨":"虱",
"蝸":"蜗",
"螄":"蛳",
"螞":"蚂",
"螢":"萤",
"螻":"蝼",
"蟄":"蛰",
"蟈":"蝈",
"蟎":"螨",
"蟣":"虮",
"蟬":"蝉",
"蟯":"蛲",
"蟲":"虫",
"蟶":"蛏",
"蟺":"蟮",
"蟻":"蚁",
"蠅":"蝇",
"蠆":"虿",
"蠍":"蝎",
"蠐":"蛴",
"蠑":"蝾",
"蠔":"蚝",
"蠟":"蜡",
"蠣":"蛎",
"蠨":"蟏",
"蠱":"蛊",
"蠶":"蚕",
"蠷":"蠼",
"蠻":"蛮",
"衆":"众",
"衊":"蔑",
"衒":"炫",
"術":"术",
"衚":"胡",
"衛":"卫",
"衝":"冲",
"衹":"只",
"袞":"衮",
"袪":"祛",
"裊":"袅",
"裏":"里",
"補":"补",
"裝":"装",
"裡":"里",
"製":"制",
"複":"复",
"褎":"袖",
"褲":"裤",
"褳":"裢",
"褸":"褛",
"褻":"亵",
"襉":"裥",
"襖":"袄",
"襝":"裣",
"襠":"裆",
"襤":"褴",
"襪":"袜",
"襬":"摆",
"襯":"衬",
"襲":"袭",
"襾":"西",
"覈":"核",
"見":"见",
"覎":"觃",
"規":"规",
"覓":"觅",
"視":"视",
"覘":"觇",
"覜":"眺",
"覡":"觋",
"覦":"觎",
"親":"亲",
"覬":"觊",
"覯":"觏",
"覲":"觐",
"覷":"觑",
"覺":"觉",
"覽":"览",
"覿":"觌",
"觀":"观",
"觔":"筋",
"觝":"抵",
"觴":"觞",
"觶":"觯",
"觸":"触",
"訂":"订",
"訃":"讣",
"計":"计",
"訊":"讯",
"訌":"讧",
"討":"讨",
"訐":"讦",
"訓":"训",
"訕":"讪",
"訖":"讫",
"託":"托",
"記":"记",
"訛":"讹",
"訝":"讶",
"訟":"讼",
"訢":"欣",
"訣":"诀",
"訥":"讷",
"訩":"讻",
"訪":"访",
"設":"设",
"許":"许",
"訴":"诉",
"訶":"诃",
"診":"诊",
"註":"注",
"証":"证",
"詁":"诂",
"詆":"诋",
"詎":"讵",
"詐":"诈",
"詒":"诒",
"詔":"诏",
"評":"评",
"詗":"诇",
"詘":"诎",
"詛":"诅",
"詞":"词",
"詠":"咏",
"詡":"诩",
"詢":"询",
"詣":"诣",
"試":"试",
"詩":"诗",
"詫":"诧",
"詬":"诟",
"詭":"诡",
"詮":"诠",
"詰":"诘",
"話":"话",
"該":"该",
"詳":"详",
"詵":"诜",
"詶":"酬",
"詻":"咯",
"詼":"诙",
"詿":"诖",
"誄":"诔",
"誅":"诛",
"誆":"诓",
"誇":"夸",
"誌":"志",
"認":"认",
"誑":"诳",
"誒":"诶",
"誕":"诞",
"誘":"诱",
"誚":"诮",
"語":"语",
"誠":"诚",
"誡":"诫",
"誣":"诬",
"誤":"误",
"誥":"诰",
"誦":"诵",
"誨":"诲",
"說":"说",
"説":"说",
"誰":"谁",
"課":"课",
"誶":"谇",
"誹":"诽",
"誼":"谊",
"調":"调",
"諂":"谄",
"諄":"谆",
"談":"谈",
"諉":"诿",
"請":"请",
"諍":"诤",
"諏":"诹",
"諑":"诼",
"諒":"谅",
"論":"论",
"諗":"谂",
"諛":"谀",
"諜":"谍",
"諝":"谞",
"諞":"谝",
"諠":"喧",
"諢":"诨",
"諤":"谔",
"諦":"谛",
"諧":"谐",
"諫":"谏",
"諭":"谕",
"諮":"谘",
"諱":"讳",
"諳":"谙",
"諶":"谌",
"諷":"讽",
"諸":"诸",
"諺":"谚",
"諼":"谖",
"諾":"诺",
"謀":"谋",
"謁":"谒",
"謂":"谓",
"謄":"誊",
"謅":"诌",
"謊":"谎",
"謎":"谜",
"謐":"谧",
"謔":"谑",
"謖":"谡",
"謗":"谤",
"謙":"谦",
"謚":"谥",
"講":"讲",
"謝":"谢",
"謠":"谣",
"謨":"谟",
"謫":"谪",
"謬":"谬",
"謳":"讴",
"謹":"谨",
"謼":"呼",
"謾":"谩",
"譁":"哗",
"譆":"嘻",
"證":"证",
"譎":"谲",
"譏":"讥",
"譔":"撰",
"譖":"谮",
"識":"识",
"譙":"谯",
"譚":"谭",
"譜":"谱",
"譟":"噪",
"譫":"谵",
"譭":"毁",
"譯":"译",
"議":"议",
"譴":"谴",
"護":"护",
"譽":"誉",
"譾":"谫",
"讀":"读",
"讅":"谉",
"變":"变",
"讌":"宴",
"讎":"雠",
"讒":"谗",
"讓":"让",
"讕":"谰",
"讖":"谶",
"讚":"赞",
"讜":"谠",
"讞":"谳",
"谿":"溪",
"豈":"岂",
"豎":"竖",
"豐":"丰",
"豔":"艳",
"豖":"亍",
"豬":"猪",
"豶":"豮",
"貍":"狸",
"貓":"猫",
"貝":"贝",
"貞":"贞",
"負":"负",
"財":"财",
"貢":"贡",
"貧":"贫",
"貨":"货",
"販":"贩",
"貪":"贪",
"貫":"贯",
"責":"责",
"貯":"贮",
"貰":"贳",
"貲":"赀",
"貳":"贰",
"貴":"贵",
"貶":"贬",
"買":"买",
"貸":"贷",
"貺":"贶",
"費":"费",
"貼":"贴",
"貽":"贻",
"貿":"贸",
"賀":"贺",
"賁":"贲",
"賂":"赂",
"賃":"赁",
"賄":"贿",
"賅":"赅",
"資":"资",
"賈":"贾",
"賊":"贼",
"賑":"赈",
"賒":"赊",
"賓":"宾",
"賕":"赇",
"賙":"赒",
"賚":"赉",
"賜":"赐",
"賞":"赏",
"賠":"赔",
"賡":"赓",
"賢":"贤",
"賣":"卖",
"賤":"贱",
"賦":"赋",
"賧":"赕",
"質":"质",
"賬":"账",
"賭":"赌",
"賴":"赖",
"賵":"赗",
"賸":"剩",
"賺":"赚",
"賻":"赙",
"購":"购",
"賽":"赛",
"賾":"赜",
"贄":"贽",
"贅":"赘",
"贈":"赠",
"贊":"赞",
"贋":"赝",
"贍":"赡",
"贏":"赢",
"贐":"赆",
"贓":"赃",
"贖":"赎",
"贛":"赣",
"趕":"赶",
"趙":"赵",
"趨":"趋",
"趲":"趱",
"跡":"迹",
"跼":"局",
"踐":"践",
"踡":"蜷",
"踫":"碰",
"踰":"逾",
"踴":"踊",
"蹌":"跄",
"蹕":"跸",
"蹟":"迹",
"蹠":"跖",
"蹣":"蹒",
"蹤":"踪",
"蹧":"糟",
"蹺":"跷",
"躉":"趸",
"躊":"踌",
"躋":"跻",
"躍":"跃",
"躑":"踯",
"躒":"跞",
"躓":"踬",
"躕":"蹰",
"躚":"跹",
"躡":"蹑",
"躥":"蹿",
"躦":"躜",
"躪":"躏",
"軀":"躯",
"車":"车",
"軋":"轧",
"軌":"轨",
"軍":"军",
"軒":"轩",
"軔":"轫",
"軛":"轭",
"軟":"软",
"軤":"轷",
"軫":"轸",
"軲":"轱",
"軸":"轴",
"軹":"轵",
"軺":"轺",
"軻":"轲",
"軼":"轶",
"軾":"轼",
"較":"较",
"輅":"辂",
"輇":"辁",
"載":"载",
"輊":"轾",
"輒":"辄",
"輓":"挽",
"輔":"辅",
"輕":"轻",
"輛":"辆",
"輜":"辎",
"輝":"辉",
"輞":"辋",
"輟":"辍",
"輥":"辊",
"輦":"辇",
"輩":"辈",
"輪":"轮",
"輯":"辑",
"輳":"辏",
"輸":"输",
"輻":"辐",
"輾":"辗",
"輿":"舆",
"轂":"毂",
"轄":"辖",
"轅":"辕",
"轆":"辘",
"轉":"转",
"轍":"辙",
"轎":"轿",
"轔":"辚",
"轟":"轰",
"轡":"辔",
"轢":"轹",
"轤":"轳",
"辦":"办",
"辭":"辞",
"辮":"辫",
"辯":"辩",
"農":"农",
"迆":"迤",
"迴":"回",
"迺":"乃",
"逕":"迳",
"這":"这",
"連":"连",
"週":"周",
"進":"进",
"遊":"游",
"運":"运",
"過":"过",
"達":"达",
"違":"违",
"遙":"遥",
"遜":"逊",
"遞":"递",
"遠":"远",
"適":"适",
"遲":"迟",
"遷":"迁",
"選":"选",
"遺":"遗",
"遼":"辽",
"邁":"迈",
"還":"还",
"邇":"迩",
"邊":"边",
"邏":"逻",
"邐":"逦",
"郟":"郏",
"郵":"邮",
"鄆":"郓",
"鄉":"乡",
"鄒":"邹",
"鄔":"邬",
"鄖":"郧",
"鄧":"邓",
"鄭":"郑",
"鄰":"邻",
"鄲":"郸",
"鄴":"邺",
"鄶":"郐",
"鄺":"邝",
"酈":"郦",
"酖":"鸩",
"醃":"腌",
"醆":"盏",
"醜":"丑",
"醞":"酝",
"醫":"医",
"醬":"酱",
"醱":"发",
"醼":"宴",
"釀":"酿",
"釁":"衅",
"釃":"酾",
"釅":"酽",
"釆":"采",
"釋":"释",
"釐":"厘",
"釓":"钆",
"釔":"钇",
"釕":"钌",
"釗":"钊",
"釘":"钉",
"釙":"钋",
"針":"针",
"釣":"钓",
"釤":"钐",
"釦":"扣",
"釧":"钏",
"釩":"钒",
"釵":"钗",
"釷":"钍",
"釹":"钕",
"釺":"钎",
"釾":"䥺",
"鈀":"钯",
"鈁":"钫",
"鈃":"钘",
"鈄":"钭",
"鈈":"钚",
"鈉":"钠",
"鈍":"钝",
"鈐":"钤",
"鈑":"钣",
"鈔":"钞",
"鈕":"钮",
"鈞":"钧",
"鈣":"钙",
"鈥":"钬",
"鈦":"钛",
"鈧":"钪",
"鈮":"铌",
"鈰":"铈",
"鈳":"钶",
"鈴":"铃",
"鈷":"钴",
"鈸":"钹",
"鈹":"铍",
"鈺":"钰",
"鈽":"钸",
"鈾":"铀",
"鈿":"钿",
"鉀":"钾",
"鉅":"钜",
"鉆":"钻",
"鉈":"铊",
"鉉":"铉",
"鉋":"刨",
"鉍":"铋",
"鉑":"铂",
"鉕":"钷",
"鉗":"钳",
"鉚":"铆",
"鉛":"铅",
"鉞":"钺",
"鉢":"钵",
"鉤":"钩",
"鉦":"钲",
"鉬":"钼",
"鉭":"钽",
"鉶":"铏",
"鉸":"铰",
"鉺":"铒",
"鉻":"铬",
"鉿":"铪",
"銀":"银",
"銃":"铳",
"銅":"铜",
"銑":"铣",
"銓":"铨",
"銖":"铢",
"銘":"铭",
"銚":"铫",
"銜":"衔",
"銠":"铑",
"銣":"铷",
"銥":"铱",
"銦":"铟",
"銨":"铵",
"銩":"铥",
"銪":"铕",
"銫":"铯",
"銬":"铐",
"銱":"铞",
"銲":"焊",
"銳":"锐",
"銷":"销",
"銹":"锈",
"銻":"锑",
"銼":"锉",
"鋁":"铝",
"鋃":"锒",
"鋅":"锌",
"鋇":"钡",
"鋌":"铤",
"鋏":"铗",
"鋒":"锋",
"鋝":"锊",
"鋟":"锓",
"鋣":"铘",
"鋤":"锄",
"鋥":"锃",
"鋦":"锔",
"鋨":"锇",
"鋩":"铓",
"鋪":"铺",
"鋮":"铖",
"鋯":"锆",
"鋰":"锂",
"鋱":"铽",
"鋶":"锍",
"鋸":"锯",
"鋻":"鉴",
"鋼":"钢",
"錁":"锞",
"錄":"录",
"錆":"锖",
"錇":"锫",
"錈":"锩",
"錐":"锥",
"錒":"锕",
"錕":"锟",
"錘":"锤",
"錙":"锱",
"錚":"铮",
"錛":"锛",
"錟":"锬",
"錠":"锭",
"錢":"钱",
"錦":"锦",
"錨":"锚",
"錫":"锡",
"錮":"锢",
"錯":"错",
"錳":"锰",
"錶":"表",
"錸":"铼",
"鍀":"锝",
"鍁":"锨",
"鍃":"锪",
"鍆":"钔",
"鍇":"锴",
"鍊":"炼",
"鍋":"锅",
"鍍":"镀",
"鍔":"锷",
"鍘":"铡",
"鍚":"钖",
"鍛":"锻",
"鍤":"锸",
"鍥":"锲",
"鍩":"锘",
"鍬":"锹",
"鍰":"锾",
"鍵":"键",
"鍶":"锶",
"鍺":"锗",
"鍼":"针",
"鍾":"钟",
"鎂":"镁",
"鎄":"锿",
"鎇":"镅",
"鎊":"镑",
"鎌":"镰",
"鎔":"镕",
"鎖":"锁",
"鎗":"枪",
"鎘":"镉",
"鎚":"锤",
"鎡":"镃",
"鎢":"钨",
"鎣":"蓥",
"鎦":"镏",
"鎧":"铠",
"鎩":"铩",
"鎪":"锼",
"鎬":"镐",
"鎮":"镇",
"鎰":"镒",
"鎳":"镍",
"鎵":"镓",
"鎿":"镎",
"鏃":"镞",
"鏇":"镟",
"鏈":"链",
"鏌":"镆",
"鏍":"镙",
"鏑":"镝",
"鏗":"铿",
"鏘":"锵",
"鏜":"镗",
"鏝":"镘",
"鏞":"镛",
"鏟":"铲",
"鏡":"镜",
"鏢":"镖",
"鏤":"镂",
"鏨":"錾",
"鏰":"镚",
"鏵":"铧",
"鏷":"镤",
"鏹":"镪",
"鏺":"䥽",
"鏽":"锈",
"鐃":"铙",
"鐉":"铣",
"鐋":"铴",
"鐐":"镣",
"鐒":"铹",
"鐓":"镦",
"鐔":"镡",
"鐘":"钟",
"鐙":"镫",
"鐝":"镢",
"鐠":"镨",
"鐥":"䦅",
"鐦":"锎",
"鐧":"锏",
"鐨":"镄",
"鐫":"镌",
"鐮":"镰",
"鐯":"䦃",
"鐲":"镯",
"鐳":"镭",
"鐵":"铁",
"鐶":"镮",
"鐸":"铎",
"鐺":"铛",
"鐿":"镱",
"鑄":"铸",
"鑊":"镬",
"鑌":"镔",
"鑑":"鉴",
"鑒":"鉴",
"鑔":"镲",
"鑕":"锧",
"鑞":"镴",
"鑠":"铄",
"鑣":"镳",
"鑤":"刨",
"鑥":"镥",
"鑪":"炉",
"鑭":"镧",
"鑰":"钥",
"鑲":"镶",
"鑵":"罐",
"鑷":"镊",
"鑹":"镩",
"鑼":"锣",
"鑽":"钻",
"鑾":"銮",
"鑿":"凿",
"钁":"䦆",
"钂":"镋",
"長":"长",
"門":"门",
"閂":"闩",
"閃":"闪",
"閆":"闫",
"閉":"闭",
"開":"开",
"閌":"闶",
"閎":"闳",
"閏":"闰",
"閑":"闲",
"閒":"闲",
"間":"间",
"閔":"闵",
"閘":"闸",
"閡":"阂",
"閣":"阁",
"閤":"合",
"閥":"阀",
"閨":"闺",
"閩":"闽",
"閫":"阃",
"閬":"阆",
"閭":"闾",
"閱":"阅",
"閶":"阊",
"閹":"阉",
"閻":"阎",
"閼":"阏",
"閽":"阍",
"閾":"阈",
"閿":"阌",
"闃":"阒",
"闆":"板",
"闇":"暗",
"闈":"闱",
"闊":"阔",
"闋":"阕",
"闌":"阑",
"闐":"阗",
"闓":"闿",
"闔":"阖",
"闕":"阙",
"闖":"闯",
"關":"关",
"闞":"阚",
"闡":"阐",
"闢":"辟",
"闥":"闼",
"阨":"厄",
"阬":"坑",
"阯":"址",
"陏":"隋",
"陘":"陉",
"陝":"陕",
"陞":"升",
"陣":"阵",
"陰":"阴",
"陳":"陈",
"陸":"陆",
"陽":"阳",
"隄":"堤",
"隉":"陧",
"隊":"队",
"階":"阶",
"隕":"陨",
"際":"际",
"隤":"颓",
"隨":"随",
"險":"险",
"隱":"隐",
"隴":"陇",
"隸":"隶",
"隻":"只",
"雋":"隽",
"雖":"虽",
"雙":"双",
"雛":"雏",
"雜":"杂",
"雞":"鸡",
"離":"离",
"難":"难",
"雲":"云",
"電":"电",
"霤":"溜",
"霧":"雾",
"霽":"霁",
"靂":"雳",
"靄":"霭",
"靆":"叇",
"靈":"灵",
"靉":"叆",
"靚":"靓",
"靜":"静",
"靦":"腼",
"靨":"靥",
"鞏":"巩",
"鞦":"秋",
"韁":"缰",
"韃":"鞑",
"韆":"千",
"韉":"鞯",
"韋":"韦",
"韌":"韧",
"韍":"韨",
"韓":"韩",
"韙":"韪",
"韜":"韬",
"韞":"韫",
"韻":"韵",
"響":"响",
"頁":"页",
"頂":"顶",
"頃":"顷",
"項":"项",
"順":"顺",
"頇":"顸",
"須":"须",
"頊":"顼",
"頌":"颂",
"頎":"颀",
"頏":"颃",
"預":"预",
"頑":"顽",
"頒":"颁",
"頓":"顿",
"頗":"颇",
"領":"领",
"頜":"颌",
"頡":"颉",
"頤":"颐",
"頦":"颏",
"頫":"俯",
"頭":"头",
"頰":"颊",
"頲":"颋",
"頷":"颔",
"頸":"颈",
"頹":"颓",
"頻":"频",
"顆":"颗",
"題":"题",
"額":"额",
"顎":"腭",
"顏":"颜",
"顒":"颙",
"顓":"颛",
"顔":"颜",
"願":"愿",
"顙":"颡",
"顛":"颠",
"類":"类",
"顢":"颟",
"顥":"颢",
"顧":"顾",
"顫":"颤",
"顬":"颥",
"顯":"显",
"顰":"颦",
"顱":"颅",
"顳":"颞",
"顴":"颧",
"風":"风",
"颮":"飑",
"颯":"飒",
"颱":"台",
"颳":"刮",
"颶":"飓",
"颸":"飔",
"颺":"扬",
"颼":"飕",
"飀":"飗",
"飄":"飘",
"飆":"飙",
"飈":"飚",
"飛":"飞",
"飢":"饥",
"飥":"饦",
"飩":"饨",
"飪":"饪",
"飫":"饫",
"飭":"饬",
"飯":"饭",
"飲":"饮",
"飴":"饴",
"飼":"饲",
"飽":"饱",
"飾":"饰",
"飿":"饳",
"餃":"饺",
"餄":"饸",
"餅":"饼",
"餈":"糍",
"餉":"饷",
"養":"养",
"餌":"饵",
"餎":"饹",
"餏":"饻",
"餑":"饽",
"餒":"馁",
"餓":"饿",
"餔":"哺",
"餘":"余",
"餚":"肴",
"餛":"馄",
"餜":"馃",
"餞":"饯",
"餡":"馅",
"館":"馆",
"餬":"糊",
"餱":"糇",
"餳":"饧",
"餵":"喂",
"餶":"馉",
"餷":"馇",
"餺":"馎",
"餼":"饩",
"餽":"馈",
"餾":"馏",
"餿":"馊",
"饃":"馍",
"饅":"馒",
"饈":"馐",
"饉":"馑",
"饊":"馓",
"饋":"馈",
"饌":"馔",
"饑":"饥",
"饒":"饶",
"饗":"飨",
"饜":"餍",
"饞":"馋",
"饟":"馕",
"馬":"马",
"馭":"驭",
"馮":"冯",
"馱":"驮",
"馳":"驰",
"馴":"驯",
"駁":"驳",
"駐":"驻",
"駑":"驽",
"駒":"驹",
"駔":"驵",
"駕":"驾",
"駘":"骀",
"駙":"驸",
"駛":"驶",
"駝":"驼",
"駟":"驷",
"駢":"骈",
"駭":"骇",
"駮":"驳",
"駱":"骆",
"駸":"骎",
"駿":"骏",
"騁":"骋",
"騃":"呆",
"騅":"骓",
"騍":"骒",
"騎":"骑",
"騏":"骐",
"騖":"骛",
"騙":"骗",
"騣":"鬃",
"騫":"骞",
"騭":"骘",
"騮":"骝",
"騰":"腾",
"騶":"驺",
"騷":"骚",
"騸":"骟",
"騾":"骡",
"驀":"蓦",
"驁":"骜",
"驂":"骖",
"驃":"骠",
"驄":"骢",
"驅":"驱",
"驊":"骅",
"驍":"骁",
"驏":"骣",
"驕":"骄",
"驗":"验",
"驚":"惊",
"驛":"驿",
"驟":"骤",
"驢":"驴",
"驤":"骧",
"驥":"骥",
"驪":"骊",
"骯":"肮",
"髏":"髅",
"髒":"脏",
"體":"体",
"髕":"髌",
"髖":"髋",
"髣":"仿",
"髮":"发",
"鬆":"松",
"鬍":"胡",
"鬚":"须",
"鬢":"鬓",
"鬥":"斗",
"鬧":"闹",
"鬨":"哄",
"鬩":"阋",
"鬮":"阄",
"鬱":"郁",
"魎":"魉",
"魘":"魇",
"魚":"鱼",
"魛":"鱽",
"魨":"豚",
"魯":"鲁",
"魴":"鲂",
"魷":"鱿",
"鮁":"鲅",
"鮃":"鲆",
"鮍":"鲏",
"鮐":"鲐",
"鮑":"鲍",
"鮒":"鲋",
"鮓":"鲊",
"鮚":"鲒",
"鮞":"鲕",
"鮣":"䲟",
"鮦":"鲖",
"鮪":"鲔",
"鮫":"鲛",
"鮭":"鲑",
"鮮":"鲜",
"鮺":"鲝",
"鯀":"鲧",
"鯁":"鲠",
"鯇":"鲩",
"鯉":"鲤",
"鯊":"鲨",
"鯔":"鲻",
"鯖":"鲭",
"鯗":"鲞",
"鯛":"鲷",
"鯝":"鲴",
"鯡":"鲱",
"鯢":"鲵",
"鯤":"鲲",
"鯧":"鲳",
"鯨":"鲸",
"鯪":"鲮",
"鯫":"鲰",
"鯰":"鲇",
"鯴":"鲺",
"鯽":"鲫",
"鯿":"鳊",
"鰂":"鲗",
"鰈":"鲽",
"鰉":"鳇",
"鰌":"䲡",
"鰍":"鳅",
"鰒":"鳆",
"鰓":"鳃",
"鰛":"鳁",
"鰜":"鳒",
"鰟":"鳑",
"鰠":"鳋",
"鰣":"鲥",
"鰥":"鳏",
"鰧":"䲢",
"鰨":"鳎",
"鰩":"鳐",
"鰭":"鳍",
"鰱":"鲢",
"鰲":"鳌",
"鰳":"鳓",
"鰵":"鳘",
"鰷":"鲦",
"鰹":"鲣",
"鰻":"鳗",
"鰼":"鳛",
"鰾":"鳔",
"鱅":"鳙",
"鱈":"鳕",
"鱉":"鳖",
"鱒":"鳟",
"鱔":"鳝",
"鱖":"鳜",
"鱗":"鳞",
"鱘":"鲟",
"鱝":"鲼",
"鱟":"鲎",
"鱠":"鲙",
"鱣":"鳣",
"鱧":"鳢",
"鱨":"鲿",
"鱭":"鲚",
"鱷":"鳄",
"鱸":"鲈",
"鱺":"鲡",
"鳥":"鸟",
"鳧":"凫",
"鳩":"鸠",
"鳳":"凤",
"鳴":"鸣",
"鳶":"鸢",
"鳾":"䴓",
"鴆":"鸩",
"鴇":"鸨",
"鴈":"雁",
"鴉":"鸦",
"鴒":"鸰",
"鴕":"鸵",
"鴛":"鸳",
"鴝":"鸲",
"鴞":"鸮",
"鴟":"鸱",
"鴣":"鸪",
"鴦":"鸯",
"鴨":"鸭",
"鴯":"鸸",
"鴰":"鸹",
"鴴":"鸻",
"鴷":"䴕",
"鴻":"鸿",
"鴿":"鸽",
"鵁":"䴔",
"鵂":"鸺",
"鵃":"鸼",
"鵑":"鹃",
"鵒":"鹆",
"鵓":"鹁",
"鵜":"鹈",
"鵝":"鹅",
"鵠":"鹄",
"鵡":"鹉",
"鵪":"鹌",
"鵬":"鹏",
"鵮":"鹐",
"鵯":"鹎",
"鵰":"雕",
"鵲":"鹊",
"鶄":"䴖",
"鶇":"鸫",
"鶉":"鹑",
"鶊":"鹒",
"鶏":"鸡",
"鶓":"鹋",
"鶖":"鹙",
"鶘":"鹕",
"鶚":"鹗",
"鶡":"鹖",
"鶥":"鹛",
"鶩":"鹜",
"鶪":"䴗",
"鶬":"鸧",
"鶯":"莺",
"鶱":"骞",
"鶴":"鹤",
"鶺":"鹡",
"鶻":"鹘",
"鶼":"鹣",
"鶿":"鹚",
"鷂":"鹞",
"鷉":"䴘",
"鷓":"鹧",
"鷖":"鹥",
"鷗":"鸥",
"鷙":"鸷",
"鷚":"鹨",
"鷥":"鸶",
"鷦":"鹪",
"鷯":"鹩",
"鷰":"燕",
"鷲":"鹫",
"鷳":"鹇",
"鷴":"鹇",
"鷸":"鹬",
"鷹":"鹰",
"鷺":"鹭",
"鸇":"鹯",
"鸊":"䴙",
"鸌":"鹱",
"鸕":"鸬",
"鸚":"鹦",
"鸛":"鹳",
"鸝":"鹂",
"鸞":"鸾",
"鹵":"卤",
"鹹":"咸",
"鹺":"鹾",
"鹼":"硷",
"鹽":"盐",
"麗":"丽",
"麥":"麦",
"麩":"麸",
"麵":"面",
"麼":"么",
"黃":"黄",
"黌":"黉",
"點":"点",
"黨":"党",
"黲":"黪",
"黴":"霉",
"黶":"黡",
"黷":"黩",
"黽":"黾",
"黿":"鼋",
"鼇":"鳌",
"鼉":"鼍",
"鼕":"冬",
"鼴":"鼹",
"齊":"齐",
"齋":"斋",
"齎":"赍",
"齏":"齑",
"齒":"齿",
"齔":"龀",
"齙":"龅",
"齜":"龇",
"齟":"龃",
"齠":"龆",
"齡":"龄",
"齣":"出",
"齦":"龈",
"齧":"啮",
"齪":"龊",
"齬":"龉",
"齲":"龋",
"齶":"腭",
"齷":"龌",
"龍":"龙",
"龐":"庞",
"龑":"䶮",
"龔":"龚",
"龕":"龛",
"龜":"龟",
"兀":"兀",
"︰":"∶",
"︱":"｜",
"︳":"｜",
"︿":"∧",
"﹀":"∨",
"﹐":"，",
"﹑":"、",
"﹒":"．",
"﹔":"；",
"﹕":"：",
"﹖":"？",
"﹗":"！",
"﹙":"（",
"﹚":"）",
"﹛":"｛",
"﹜":"｝",
"﹝":"［",
"﹞":"］",
"﹟":"＃",
"﹠":"＆",
"﹡":"＊",
"﹢":"＋",
"﹣":"－",
"﹤":"＜",
"﹥":"＞",
"﹦":"＝",
"﹩":"＄",
"﹪":"％",
"﹫":"＠"
});
;
TongWen.addS2TTable({
"·" :"‧",
"―":"─",
"‖":"∥",
"‘":"『",
"’":"』",
"“":"「",
"”":"」",
"″":"〞",
"∏":"Π",
"∑":"Σ",
"∧":"︿",
"∨":"﹀",
"∶":"︰",
"≈":"≒",
"≤":"≦",
"≥":"≧",
"━":"─",
"┃":"│",
"┏":"┌",
"┓":"┐",
"┗":"└",
"┛":"┘",
"┣":"├",
"┫":"┤",
"┳":"┬",
"┻":"┴",
"╋":"┼",
"〖":"【",
"〗":"】",
"㑇":"㑳",
"㖞":"喎",
"㘎":"㘚",
"㤘":"㥮",
"㧏":"掆",
"㧐":"㩳",
"㧟":"擓",
"㭎":"棡",
"㳠":"澾",
"䁖":"瞜",
"䅟":"穇",
"䌷":"紬",
"䎬":"䎱",
"䏝":"膞",
"䓖":"藭",
"䙌":"䙡",
"䜣":"訢",
"䜩":"讌",
"䞍":"䝼",
"䥺":"釾",
"䥽":"鏺",
"䦂":"䥇",
"䦃":"鐯",
"䦅":"鐥",
"䦆":"钁",
"䦶":"䦛",
"䦷":"䦟",
"䲟":"鮣",
"䲡":"鰌",
"䲢":"鰧",
"䲣":"䱷",
"䴓":"鳾",
"䴔":"鵁",
"䴕":"鴷",
"䴖":"鶄",
"䴗":"鶪",
"䴘":"鷉",
"䴙":"鸊",
"䶮":"龑",
"万":"萬",
"与":"與",
"专":"專",
"业":"業",
"丛":"叢",
"东":"東",
"丝":"絲",
"丢":"丟",
"两":"兩",
"严":"嚴",
"丧":"喪",
"个":"個",
"丰":"豐",
"临":"臨",
"为":"為",
"丽":"麗",
"举":"舉",
"么":"麼",
"义":"義",
"乌":"烏",
"乐":"樂",
"乔":"喬",
"习":"習",
"乡":"鄉",
"书":"書",
"买":"買",
"乱":"亂",
"争":"爭",
"于":"於",
"亏":"虧",
"云":"雲",
"亘":"亙",
"亚":"亞",
"产":"產",
"亩":"畝",
"亲":"親",
"亵":"褻",
"亿":"億",
"仅":"僅",
"仆":"僕",
"从":"從",
"仑":"侖",
"仓":"倉",
"仪":"儀",
"们":"們",
"价":"價",
"众":"眾",
"优":"優",
"会":"會",
"伛":"傴",
"伞":"傘",
"伟":"偉",
"传":"傳",
"伤":"傷",
"伥":"倀",
"伦":"倫",
"伧":"傖",
"伪":"偽",
"伫":"佇",
"伲":"你",
"体":"體",
"佣":"傭",
"佥":"僉",
"侠":"俠",
"侣":"侶",
"侥":"僥",
"侦":"偵",
"侧":"側",
"侨":"僑",
"侩":"儈",
"侪":"儕",
"侬":"儂",
"俣":"俁",
"俦":"儔",
"俨":"儼",
"俩":"倆",
"俪":"儷",
"俭":"儉",
"倮":"裸",
"债":"債",
"倾":"傾",
"偬":"傯",
"偻":"僂",
"偾":"僨",
"偿":"償",
"傥":"儻",
"傧":"儐",
"储":"儲",
"傩":"儺",
"儿":"兒",
"兑":"兌",
"兖":"兗",
"党":"黨",
"兰":"蘭",
"关":"關",
"兴":"興",
"兹":"茲",
"养":"養",
"兽":"獸",
"冁":"囅",
"内":"內",
"冈":"岡",
"册":"冊",
"写":"寫",
"军":"軍",
"农":"農",
"冯":"馮",
"冲":"沖",
"决":"決",
"况":"況",
"冻":"凍",
"净":"淨",
"凄":"淒",
"凇":"淞",
"凉":"涼",
"减":"減",
"凑":"湊",
"凛":"凜",
"几":"幾",
"凤":"鳳",
"処":"處",
"凫":"鳧",
"凭":"憑",
"凯":"凱",
"击":"擊",
"凼":"幽",
"凿":"鑿",
"刍":"芻",
"划":"劃",
"刘":"劉",
"则":"則",
"刚":"剛",
"创":"創",
"删":"刪",
"别":"別",
"刬":"剗",
"刭":"剄",
"刹":"剎",
"刽":"劊",
"刿":"劌",
"剀":"剴",
"剂":"劑",
"剐":"剮",
"剑":"劍",
"剥":"剝",
"剧":"劇",
"剳":"劄",
"劝":"勸",
"办":"辦",
"务":"務",
"劢":"勱",
"动":"動",
"励":"勵",
"劲":"勁",
"劳":"勞",
"势":"勢",
"勋":"勳",
"勚":"勩",
"勛":"勳",
"勦":"剿",
"匀":"勻",
"匦":"匭",
"匮":"匱",
"区":"區",
"医":"醫",
"华":"華",
"协":"協",
"单":"單",
"卖":"賣",
"占":"佔",
"卢":"盧",
"卤":"鹵",
"卧":"臥",
"卫":"衛",
"却":"卻",
"卺":"巹",
"厂":"廠",
"厅":"廳",
"历":"歷",
"厉":"厲",
"压":"壓",
"厌":"厭",
"厍":"厙",
"厕":"廁",
"厘":"釐",
"厢":"廂",
"厣":"厴",
"厦":"廈",
"厨":"廚",
"厩":"廄",
"厮":"廝",
"县":"縣",
"叁":"參",
"参":"參",
"叆":"靉",
"叇":"靆",
"双":"雙",
"发":"發",
"变":"變",
"叙":"敘",
"叠":"疊",
"叶":"葉",
"号":"號",
"叹":"嘆",
"叽":"嘰",
"吁":"籲",
"后":"後",
"吓":"嚇",
"吕":"呂",
"吗":"嗎",
"吨":"噸",
"听":"聽",
"启":"啟",
"吴":"吳",
"呐":"吶",
"呒":"嘸",
"呓":"囈",
"呕":"嘔",
"呖":"嚦",
"呗":"唄",
"员":"員",
"呙":"咼",
"呛":"嗆",
"呜":"嗚",
"咏":"詠",
"咙":"嚨",
"咛":"嚀",
"咝":"噝",
"哌":"呱",
"响":"響",
"哑":"啞",
"哒":"噠",
"哓":"嘵",
"哔":"嗶",
"哕":"噦",
"哗":"嘩",
"哙":"噲",
"哜":"嚌",
"哝":"噥",
"哟":"喲",
"唛":"嘜",
"唝":"嗊",
"唠":"嘮",
"唡":"啢",
"唢":"嗩",
"唤":"喚",
"啓":"啟",
"啧":"嘖",
"啬":"嗇",
"啭":"囀",
"啮":"齧",
"啰":"囉",
"啸":"嘯",
"喷":"噴",
"喽":"嘍",
"喾":"嚳",
"嗫":"囁",
"嗬":"呵",
"嗳":"噯",
"嘘":"噓",
"嘤":"嚶",
"嘱":"囑",
"噜":"嚕",
"嚣":"囂",
"嚮":"向",
"团":"團",
"园":"園",
"囯":"國",
"囱":"囪",
"围":"圍",
"囵":"圇",
"国":"國",
"图":"圖",
"圆":"圓",
"圣":"聖",
"圹":"壙",
"场":"場",
"坂":"阪",
"坏":"壞",
"块":"塊",
"坚":"堅",
"坛":"壇",
"坜":"壢",
"坝":"壩",
"坞":"塢",
"坟":"墳",
"坠":"墜",
"垄":"壟",
"垅":"壟",
"垆":"壚",
"垒":"壘",
"垦":"墾",
"垩":"堊",
"垫":"墊",
"垭":"埡",
"垲":"塏",
"垴":"堖",
"埘":"塒",
"埙":"壎",
"埚":"堝",
"堑":"塹",
"堕":"墮",
"墒":"墑",
"墙":"牆",
"壮":"壯",
"声":"聲",
"壳":"殼",
"壶":"壺",
"处":"處",
"备":"備",
"复":"復",
"够":"夠",
"头":"頭",
"夸":"誇",
"夹":"夾",
"夺":"奪",
"奁":"奩",
"奂":"奐",
"奋":"奮",
"奖":"獎",
"奥":"奧",
"奬":"獎",
"妆":"妝",
"妇":"婦",
"妈":"媽",
"妩":"嫵",
"妪":"嫗",
"妫":"媯",
"姗":"姍",
"娄":"婁",
"娅":"婭",
"娆":"嬈",
"娇":"嬌",
"娈":"孌",
"娱":"娛",
"娲":"媧",
"娴":"嫻",
"婳":"嫿",
"婴":"嬰",
"婵":"嬋",
"婶":"嬸",
"媪":"媼",
"嫒":"嬡",
"嫔":"嬪",
"嫱":"嬙",
"嬷":"嬤",
"孙":"孫",
"学":"學",
"孪":"孿",
"宁":"寧",
"宝":"寶",
"实":"實",
"宠":"寵",
"审":"審",
"宪":"憲",
"宫":"宮",
"宽":"寬",
"宾":"賓",
"寀":"采",
"寝":"寢",
"对":"對",
"寻":"尋",
"导":"導",
"寿":"壽",
"将":"將",
"尔":"爾",
"尘":"塵",
"尜":"嘎",
"尝":"嘗",
"尧":"堯",
"尴":"尷",
"尸":"屍",
"尽":"盡",
"层":"層",
"屉":"屜",
"届":"屆",
"属":"屬",
"屡":"屢",
"屦":"屨",
"屿":"嶼",
"岁":"歲",
"岂":"豈",
"岖":"嶇",
"岗":"崗",
"岘":"峴",
"岚":"嵐",
"岛":"島",
"岭":"嶺",
"岽":"崠",
"岿":"巋",
"峃":"嶨",
"峄":"嶧",
"峡":"峽",
"峣":"嶢",
"峤":"嶠",
"峥":"崢",
"峦":"巒",
"峯":"峰",
"崂":"嶗",
"崃":"崍",
"崐":"崑",
"崭":"嶄",
"嵘":"嶸",
"嵚":"嶔",
"嵛":"崳",
"嵝":"嶁",
"巅":"巔",
"巌":"巖",
"巩":"鞏",
"巯":"巰",
"币":"幣",
"帅":"帥",
"师":"師",
"帏":"幃",
"帐":"帳",
"帘":"簾",
"帜":"幟",
"带":"帶",
"帧":"幀",
"帮":"幫",
"帱":"幬",
"帻":"幘",
"帼":"幗",
"幂":"冪",
"幵":"開",
"并":"並",
"幷":"並",
"广":"廣",
"庄":"莊",
"庆":"慶",
"庐":"廬",
"庑":"廡",
"库":"庫",
"应":"應",
"庙":"廟",
"庞":"龐",
"废":"廢",
"庼":"廎",
"廪":"廩",
"开":"開",
"异":"異",
"弃":"棄",
"弑":"弒",
"张":"張",
"弥":"彌",
"弪":"弳",
"弯":"彎",
"弹":"彈",
"强":"強",
"归":"歸",
"当":"當",
"彔":"录",
"录":"錄",
"彚":"彙",
"彦":"彥",
"彻":"徹",
"径":"徑",
"徕":"徠",
"忆":"憶",
"忏":"懺",
"忧":"憂",
"忾":"愾",
"怀":"懷",
"态":"態",
"怂":"慫",
"怃":"憮",
"怄":"慪",
"怅":"悵",
"怆":"愴",
"怜":"憐",
"总":"總",
"怼":"懟",
"怿":"懌",
"恋":"戀",
"恒":"恆",
"恳":"懇",
"恶":"惡",
"恸":"慟",
"恹":"懨",
"恺":"愷",
"恻":"惻",
"恼":"惱",
"恽":"惲",
"悦":"悅",
"悫":"愨",
"悬":"懸",
"悭":"慳",
"悯":"憫",
"惊":"驚",
"惧":"懼",
"惨":"慘",
"惩":"懲",
"惫":"憊",
"惬":"愜",
"惭":"慚",
"惮":"憚",
"惯":"慣",
"愠":"慍",
"愤":"憤",
"愦":"憒",
"愿":"願",
"慑":"懾",
"懑":"懣",
"懒":"懶",
"懔":"懍",
"戆":"戇",
"戋":"戔",
"戏":"戲",
"戗":"戧",
"战":"戰",
"戬":"戩",
"户":"戶",
"扑":"撲",
"执":"執",
"扩":"擴",
"扪":"捫",
"扫":"掃",
"扬":"揚",
"扰":"擾",
"抚":"撫",
"抛":"拋",
"抟":"摶",
"抠":"摳",
"抡":"掄",
"抢":"搶",
"护":"護",
"报":"報",
"担":"擔",
"拟":"擬",
"拢":"攏",
"拣":"揀",
"拥":"擁",
"拦":"攔",
"拧":"擰",
"拨":"撥",
"择":"擇",
"挂":"掛",
"挚":"摯",
"挛":"攣",
"挜":"掗",
"挝":"撾",
"挞":"撻",
"挟":"挾",
"挠":"撓",
"挡":"擋",
"挢":"撟",
"挣":"掙",
"挤":"擠",
"挥":"揮",
"挦":"撏",
"捜":"搜",
"捞":"撈",
"损":"損",
"捡":"撿",
"换":"換",
"捣":"搗",
"据":"據",
"掳":"擄",
"掴":"摑",
"掷":"擲",
"掸":"撣",
"掺":"摻",
"掼":"摜",
"揽":"攬",
"揿":"撳",
"搀":"攙",
"搁":"擱",
"搂":"摟",
"搅":"攪",
"携":"攜",
"摄":"攝",
"摅":"攄",
"摆":"擺",
"摇":"搖",
"摈":"擯",
"摊":"攤",
"撄":"攖",
"撑":"撐",
"撵":"攆",
"撷":"擷",
"撸":"擼",
"撺":"攛",
"擀":"搟",
"擞":"擻",
"攒":"攢",
"敌":"敵",
"敛":"斂",
"数":"數",
"斋":"齋",
"斓":"斕",
"斩":"斬",
"断":"斷",
"无":"無",
"旧":"舊",
"时":"時",
"旷":"曠",
"旸":"暘",
"昙":"曇",
"昵":"暱",
"昼":"晝",
"昽":"曨",
"显":"顯",
"晋":"晉",
"晒":"曬",
"晓":"曉",
"晔":"曄",
"晕":"暈",
"晖":"暉",
"暂":"暫",
"暧":"曖",
"暸":"瞭",
"朮":"術",
"术":"術",
"机":"機",
"杀":"殺",
"杂":"雜",
"权":"權",
"杆":"桿",
"杠":"槓",
"条":"條",
"来":"來",
"杨":"楊",
"杩":"榪",
"杰":"傑",
"极":"極",
"构":"構",
"枞":"樅",
"枢":"樞",
"枣":"棗",
"枥":"櫪",
"枧":"梘",
"枨":"棖",
"枪":"槍",
"枫":"楓",
"枭":"梟",
"柜":"櫃",
"柠":"檸",
"柽":"檉",
"栀":"梔",
"栅":"柵",
"标":"標",
"栈":"棧",
"栉":"櫛",
"栊":"櫳",
"栋":"棟",
"栌":"櫨",
"栎":"櫟",
"栏":"欄",
"树":"樹",
"栖":"棲",
"样":"樣",
"栾":"欒",
"桔":"橘",
"桠":"椏",
"桡":"橈",
"桢":"楨",
"档":"檔",
"桤":"榿",
"桥":"橋",
"桦":"樺",
"桧":"檜",
"桨":"槳",
"桩":"樁",
"梦":"夢",
"检":"檢",
"棂":"櫺",
"椁":"槨",
"椟":"櫝",
"椠":"槧",
"椤":"欏",
"椭":"橢",
"楼":"樓",
"榄":"欖",
"榇":"櫬",
"榈":"櫚",
"榉":"櫸",
"榘":"矩",
"槚":"檟",
"槛":"檻",
"槟":"檳",
"槠":"櫧",
"槼":"規",
"横":"橫",
"樯":"檣",
"樱":"櫻",
"橥":"櫫",
"橱":"櫥",
"橹":"櫓",
"橼":"櫞",
"檐":"簷",
"檩":"檁",
"欢":"歡",
"欤":"歟",
"欧":"歐",
"歎":"嘆",
"歼":"殲",
"殁":"歿",
"殇":"殤",
"残":"殘",
"殒":"殞",
"殓":"殮",
"殚":"殫",
"殡":"殯",
"殴":"毆",
"毁":"毀",
"毂":"轂",
"毕":"畢",
"毙":"斃",
"毡":"氈",
"毵":"毿",
"氇":"氌",
"气":"氣",
"氢":"氫",
"氩":"氬",
"氲":"氳",
"氽":"汆",
"汇":"匯",
"汉":"漢",
"汤":"湯",
"汹":"洶",
"沟":"溝",
"没":"沒",
"沣":"灃",
"沤":"漚",
"沥":"瀝",
"沦":"淪",
"沧":"滄",
"沨":"渢",
"沩":"溈",
"沪":"滬",
"沲":"沱",
"泄":"洩",
"泞":"濘",
"泪":"淚",
"泶":"澩",
"泷":"瀧",
"泸":"瀘",
"泺":"濼",
"泻":"瀉",
"泼":"潑",
"泽":"澤",
"泾":"涇",
"洁":"潔",
"洒":"灑",
"洼":"窪",
"浃":"浹",
"浅":"淺",
"浆":"漿",
"浇":"澆",
"浈":"湞",
"浉":"溮",
"浊":"濁",
"测":"測",
"浍":"澮",
"济":"濟",
"浏":"瀏",
"浐":"滻",
"浑":"渾",
"浒":"滸",
"浓":"濃",
"浔":"潯",
"浕":"濜",
"浜":"濱",
"涌":"湧",
"涛":"濤",
"涝":"澇",
"涞":"淶",
"涟":"漣",
"涠":"潿",
"涡":"渦",
"涢":"溳",
"涣":"渙",
"涤":"滌",
"润":"潤",
"涧":"澗",
"涨":"漲",
"涩":"澀",
"渊":"淵",
"渌":"淥",
"渍":"漬",
"渎":"瀆",
"渐":"漸",
"渑":"澠",
"渔":"漁",
"渖":"瀋",
"渗":"滲",
"温":"溫",
"湾":"灣",
"湿":"濕",
"溃":"潰",
"溅":"濺",
"溆":"漵",
"溇":"漊",
"溼":"濕",
"滗":"潷",
"滚":"滾",
"滞":"滯",
"滟":"灩",
"滠":"灄",
"满":"滿",
"滢":"瀅",
"滤":"濾",
"滥":"濫",
"滦":"灤",
"滨":"濱",
"滩":"灘",
"滪":"澦",
"潆":"瀠",
"潇":"瀟",
"潋":"瀲",
"潍":"濰",
"潜":"潛",
"潴":"瀦",
"澜":"瀾",
"濑":"瀨",
"濒":"瀕",
"灏":"灝",
"灭":"滅",
"灯":"燈",
"灵":"靈",
"灾":"災",
"灿":"燦",
"炀":"煬",
"炉":"爐",
"炖":"燉",
"炜":"煒",
"炝":"熗",
"炤":"照",
"点":"點",
"炼":"煉",
"炽":"熾",
"烁":"爍",
"烂":"爛",
"烃":"烴",
"烛":"燭",
"烟":"煙",
"烦":"煩",
"烧":"燒",
"烨":"燁",
"烩":"燴",
"烫":"燙",
"烬":"燼",
"热":"熱",
"焕":"煥",
"焖":"燜",
"焘":"燾",
"煅":"鍛",
"爱":"愛",
"爲":"為",
"爷":"爺",
"牀":"床",
"牍":"牘",
"牦":"犛",
"牵":"牽",
"牺":"犧",
"犊":"犢",
"状":"狀",
"犷":"獷",
"犸":"獁",
"犹":"猶",
"狈":"狽",
"狝":"獮",
"狞":"獰",
"独":"獨",
"狭":"狹",
"狮":"獅",
"狯":"獪",
"狰":"猙",
"狱":"獄",
"狲":"猻",
"猃":"獫",
"猎":"獵",
"猕":"獼",
"猡":"玀",
"猪":"豬",
"猫":"貓",
"猬":"蝟",
"献":"獻",
"獃":"呆",
"獭":"獺",
"玑":"璣",
"玛":"瑪",
"玮":"瑋",
"环":"環",
"现":"現",
"玱":"瑲",
"玺":"璽",
"珉":"玟",
"珏":"玨",
"珐":"琺",
"珑":"瓏",
"珲":"琿",
"琎":"璡",
"琏":"璉",
"琐":"瑣",
"琯":"管",
"琼":"瓊",
"瑶":"瑤",
"瑷":"璦",
"璎":"瓔",
"瓒":"瓚",
"瓮":"甕",
"瓯":"甌",
"産":"產",
"电":"電",
"画":"畫",
"畅":"暢",
"畲":"畬",
"畴":"疇",
"疖":"癤",
"疗":"療",
"疟":"瘧",
"疠":"癘",
"疡":"瘍",
"疬":"癧",
"疮":"瘡",
"疯":"瘋",
"疱":"皰",
"疴":"痾",
"痈":"癰",
"痉":"痙",
"痒":"癢",
"痖":"瘂",
"痨":"癆",
"痪":"瘓",
"痫":"癇",
"痹":"痺",
"瘅":"癉",
"瘗":"瘞",
"瘘":"瘻",
"瘪":"癟",
"瘫":"癱",
"瘾":"癮",
"瘿":"癭",
"癞":"癩",
"癡":"痴",
"癣":"癬",
"癫":"癲",
"皑":"皚",
"皰":"疱",
"皱":"皺",
"皲":"皸",
"盏":"盞",
"盐":"鹽",
"监":"監",
"盖":"蓋",
"盗":"盜",
"盘":"盤",
"眍":"瞘",
"眎":"視",
"眦":"眥",
"眬":"矓",
"着":"著",
"睁":"睜",
"睐":"睞",
"睑":"瞼",
"瞒":"瞞",
"瞩":"矚",
"矫":"矯",
"矶":"磯",
"矾":"礬",
"矿":"礦",
"砀":"碭",
"码":"碼",
"砖":"磚",
"砗":"硨",
"砚":"硯",
"砜":"碸",
"砺":"礪",
"砻":"礱",
"砾":"礫",
"础":"礎",
"硕":"碩",
"硖":"硤",
"硗":"磽",
"硙":"磑",
"硚":"礄",
"确":"確",
"硷":"鹼",
"碍":"礙",
"碛":"磧",
"碜":"磣",
"碱":"鹼",
"礡":"礴",
"礼":"禮",
"祎":"禕",
"祯":"禎",
"祷":"禱",
"祸":"禍",
"禀":"稟",
"禄":"祿",
"禅":"禪",
"禰":"祢",
"离":"離",
"秃":"禿",
"秆":"稈",
"种":"種",
"积":"積",
"称":"稱",
"秽":"穢",
"税":"稅",
"稣":"穌",
"稭":"秸",
"稳":"穩",
"穑":"穡",
"穷":"窮",
"窃":"竊",
"窍":"竅",
"窎":"窵",
"窑":"窯",
"窜":"竄",
"窝":"窩",
"窥":"窺",
"窦":"竇",
"窭":"窶",
"竖":"豎",
"竞":"競",
"笃":"篤",
"笋":"筍",
"笔":"筆",
"笕":"筧",
"笺":"箋",
"笼":"籠",
"笾":"籩",
"筑":"築",
"筚":"篳",
"筛":"篩",
"筝":"箏",
"筹":"籌",
"签":"簽",
"简":"簡",
"箓":"籙",
"箦":"簀",
"箧":"篋",
"箨":"籜",
"箩":"籮",
"箪":"簞",
"箫":"簫",
"篑":"簣",
"篓":"簍",
"篮":"籃",
"篱":"籬",
"簖":"籪",
"籁":"籟",
"籴":"糴",
"类":"類",
"籼":"秈",
"粜":"糶",
"粝":"糲",
"粤":"粵",
"粪":"糞",
"粮":"糧",
"糁":"糝",
"糇":"餱",
"糍":"餈",
"紥":"紮",
"紧":"緊",
"絷":"縶",
"綫":"線",
"纠":"糾",
"纡":"紆",
"红":"紅",
"纣":"紂",
"纤":"纖",
"纥":"紇",
"约":"約",
"级":"級",
"纨":"紈",
"纩":"纊",
"纪":"紀",
"纫":"紉",
"纬":"緯",
"纭":"紜",
"纮":"紘",
"纯":"純",
"纰":"紕",
"纱":"紗",
"纲":"綱",
"纳":"納",
"纴":"紝",
"纵":"縱",
"纶":"綸",
"纷":"紛",
"纸":"紙",
"纹":"紋",
"纺":"紡",
"纼":"紖",
"纽":"紐",
"纾":"紓",
"线":"線",
"绀":"紺",
"绁":"紲",
"绂":"紱",
"练":"練",
"组":"組",
"绅":"紳",
"细":"細",
"织":"織",
"终":"終",
"绉":"縐",
"绊":"絆",
"绋":"紼",
"绌":"絀",
"绍":"紹",
"绎":"繹",
"经":"經",
"绐":"紿",
"绑":"綁",
"绒":"絨",
"结":"結",
"绔":"絝",
"绕":"繞",
"绖":"絰",
"绗":"絎",
"绘":"繪",
"给":"給",
"绚":"絢",
"绛":"絳",
"络":"絡",
"绝":"絕",
"绞":"絞",
"统":"統",
"绠":"綆",
"绡":"綃",
"绢":"絹",
"绣":"繡",
"绥":"綏",
"绦":"絛",
"继":"繼",
"绨":"綈",
"绩":"績",
"绪":"緒",
"绫":"綾",
"续":"續",
"绮":"綺",
"绯":"緋",
"绰":"綽",
"绱":"緔",
"绲":"緄",
"绳":"繩",
"维":"維",
"绵":"綿",
"绶":"綬",
"绷":"繃",
"绸":"綢",
"绺":"綹",
"绻":"綣",
"综":"綜",
"绽":"綻",
"绾":"綰",
"绿":"綠",
"缀":"綴",
"缁":"緇",
"缂":"緙",
"缃":"緗",
"缄":"緘",
"缅":"緬",
"缆":"纜",
"缇":"緹",
"缈":"緲",
"缉":"緝",
"缊":"縕",
"缋":"繢",
"缌":"緦",
"缍":"綞",
"缎":"緞",
"缏":"緶",
"缑":"緱",
"缒":"縋",
"缓":"緩",
"缔":"締",
"缕":"縷",
"编":"編",
"缗":"緡",
"缘":"緣",
"缙":"縉",
"缚":"縛",
"缛":"縟",
"缜":"縝",
"缝":"縫",
"缞":"縗",
"缟":"縞",
"缠":"纏",
"缡":"縭",
"缢":"縊",
"缣":"縑",
"缤":"繽",
"缥":"縹",
"缦":"縵",
"缧":"縲",
"缨":"纓",
"缩":"縮",
"缪":"繆",
"缫":"繅",
"缬":"纈",
"缭":"繚",
"缮":"繕",
"缯":"繒",
"缰":"韁",
"缱":"繾",
"缲":"繰",
"缳":"繯",
"缴":"繳",
"缵":"纘",
"罂":"罌",
"罎":"罈",
"网":"網",
"罗":"羅",
"罚":"罰",
"罢":"罷",
"罴":"羆",
"羁":"羈",
"羟":"羥",
"羡":"羨",
"翘":"翹",
"翚":"翬",
"耢":"耮",
"耧":"耬",
"耸":"聳",
"耻":"恥",
"聂":"聶",
"聋":"聾",
"职":"職",
"聍":"聹",
"联":"聯",
"聩":"聵",
"聪":"聰",
"肀":"聿",
"肃":"肅",
"肠":"腸",
"肤":"膚",
"肮":"骯",
"肾":"腎",
"肿":"腫",
"胀":"脹",
"胁":"脅",
"胆":"膽",
"胜":"勝",
"胧":"朧",
"胨":"腖",
"胪":"臚",
"胫":"脛",
"胶":"膠",
"脉":"脈",
"脍":"膾",
"脏":"髒",
"脐":"臍",
"脑":"腦",
"脓":"膿",
"脔":"臠",
"脚":"腳",
"脣":"唇",
"脩":"修",
"脱":"脫",
"脶":"腡",
"脸":"臉",
"腊":"臘",
"腌":"醃",
"腘":"膕",
"腭":"顎",
"腻":"膩",
"腼":"靦",
"腽":"膃",
"腾":"騰",
"膑":"臏",
"膻":"羶",
"臜":"臢",
"舆":"輿",
"舣":"艤",
"舰":"艦",
"舱":"艙",
"舻":"艫",
"艰":"艱",
"艳":"豔",
"艺":"藝",
"节":"節",
"芈":"羋",
"芗":"薌",
"芜":"蕪",
"芦":"蘆",
"苁":"蓯",
"苇":"葦",
"苈":"藶",
"苋":"莧",
"苌":"萇",
"苍":"蒼",
"苎":"苧",
"苏":"蘇",
"苹":"蘋",
"茎":"莖",
"茏":"蘢",
"茑":"蔦",
"茔":"塋",
"茕":"煢",
"茧":"繭",
"荆":"荊",
"荐":"薦",
"荚":"莢",
"荛":"蕘",
"荜":"蓽",
"荞":"蕎",
"荟":"薈",
"荠":"薺",
"荡":"蕩",
"荣":"榮",
"荤":"葷",
"荥":"滎",
"荦":"犖",
"荧":"熒",
"荨":"蕁",
"荩":"藎",
"荪":"蓀",
"荫":"蔭",
"荬":"蕒",
"荭":"葒",
"荮":"葤",
"药":"藥",
"莅":"蒞",
"莱":"萊",
"莲":"蓮",
"莳":"蒔",
"莴":"萵",
"莶":"薟",
"获":"獲",
"莸":"蕕",
"莹":"瑩",
"莺":"鶯",
"莼":"蓴",
"萚":"蘀",
"萝":"蘿",
"萤":"螢",
"营":"營",
"萦":"縈",
"萧":"蕭",
"萨":"薩",
"著":"著",
"葯":"藥",
"葱":"蔥",
"蒇":"蕆",
"蒉":"蕢",
"蒋":"蔣",
"蒌":"蔞",
"蓝":"藍",
"蓟":"薊",
"蓠":"蘺",
"蓣":"蕷",
"蓥":"鎣",
"蓦":"驀",
"蔴":"麻",
"蔷":"薔",
"蔹":"蘞",
"蔺":"藺",
"蔼":"藹",
"蕲":"蘄",
"蕴":"蘊",
"薮":"藪",
"藓":"蘚",
"蘖":"蘗",
"虏":"虜",
"虑":"慮",
"虚":"虛",
"虫":"蟲",
"虬":"虯",
"虮":"蟣",
"虱":"蝨",
"虽":"雖",
"虾":"蝦",
"虿":"蠆",
"蚀":"蝕",
"蚁":"蟻",
"蚂":"螞",
"蚕":"蠶",
"蚬":"蜆",
"蛊":"蠱",
"蛎":"蠣",
"蛏":"蟶",
"蛮":"蠻",
"蛰":"蟄",
"蛱":"蛺",
"蛲":"蟯",
"蛳":"螄",
"蛴":"蠐",
"蜕":"蛻",
"蜗":"蝸",
"蜡":"蠟",
"蝇":"蠅",
"蝈":"蟈",
"蝉":"蟬",
"蝎":"蠍",
"蝰":"虺",
"蝼":"螻",
"蝾":"蠑",
"螨":"蟎",
"蟏":"蠨",
"蟮":"蟺",
"衅":"釁",
"衆":"眾",
"衔":"銜",
"补":"補",
"衬":"襯",
"衮":"袞",
"袄":"襖",
"袅":"裊",
"袜":"襪",
"袭":"襲",
"装":"裝",
"裆":"襠",
"裏":"裡",
"裢":"褳",
"裣":"襝",
"裤":"褲",
"裥":"襉",
"褛":"褸",
"褴":"襤",
"见":"見",
"观":"觀",
"觃":"覎",
"规":"規",
"觅":"覓",
"视":"視",
"觇":"覘",
"览":"覽",
"觉":"覺",
"觊":"覬",
"觋":"覡",
"觌":"覿",
"觎":"覦",
"觏":"覯",
"觐":"覲",
"觑":"覷",
"觞":"觴",
"触":"觸",
"觯":"觶",
"証":"證",
"誉":"譽",
"誊":"謄",
"计":"計",
"订":"訂",
"讣":"訃",
"认":"認",
"讥":"譏",
"讦":"訐",
"讧":"訌",
"讨":"討",
"让":"讓",
"讪":"訕",
"讫":"訖",
"训":"訓",
"议":"議",
"讯":"訊",
"记":"記",
"讲":"講",
"讳":"諱",
"讴":"謳",
"讵":"詎",
"讶":"訝",
"讷":"訥",
"许":"許",
"讹":"訛",
"论":"論",
"讻":"訩",
"讼":"訟",
"讽":"諷",
"设":"設",
"访":"訪",
"诀":"訣",
"证":"證",
"诂":"詁",
"诃":"訶",
"评":"評",
"诅":"詛",
"识":"識",
"诇":"詗",
"诈":"詐",
"诉":"訴",
"诊":"診",
"诋":"詆",
"诌":"謅",
"词":"詞",
"诎":"詘",
"诏":"詔",
"译":"譯",
"诒":"詒",
"诓":"誆",
"诔":"誄",
"试":"試",
"诖":"詿",
"诗":"詩",
"诘":"詰",
"诙":"詼",
"诚":"誠",
"诛":"誅",
"诜":"詵",
"话":"話",
"诞":"誕",
"诟":"詬",
"诠":"詮",
"诡":"詭",
"询":"詢",
"诣":"詣",
"诤":"諍",
"该":"該",
"详":"詳",
"诧":"詫",
"诨":"諢",
"诩":"詡",
"诫":"誡",
"诬":"誣",
"语":"語",
"诮":"誚",
"误":"誤",
"诰":"誥",
"诱":"誘",
"诲":"誨",
"诳":"誑",
"说":"說",
"诵":"誦",
"诶":"誒",
"请":"請",
"诸":"諸",
"诹":"諏",
"诺":"諾",
"读":"讀",
"诼":"諑",
"诽":"誹",
"课":"課",
"诿":"諉",
"谀":"諛",
"谁":"誰",
"谂":"諗",
"调":"調",
"谄":"諂",
"谅":"諒",
"谆":"諄",
"谇":"誶",
"谈":"談",
"谉":"讅",
"谊":"誼",
"谋":"謀",
"谌":"諶",
"谍":"諜",
"谎":"謊",
"谏":"諫",
"谐":"諧",
"谑":"謔",
"谒":"謁",
"谓":"謂",
"谔":"諤",
"谕":"諭",
"谖":"諼",
"谗":"讒",
"谘":"諮",
"谙":"諳",
"谚":"諺",
"谛":"諦",
"谜":"謎",
"谝":"諞",
"谞":"諝",
"谟":"謨",
"谠":"讜",
"谡":"謖",
"谢":"謝",
"谣":"謠",
"谤":"謗",
"谥":"謚",
"谦":"謙",
"谧":"謐",
"谨":"謹",
"谩":"謾",
"谪":"謫",
"谫":"譾",
"谬":"謬",
"谭":"譚",
"谮":"譖",
"谯":"譙",
"谰":"讕",
"谱":"譜",
"谲":"譎",
"谳":"讞",
"谴":"譴",
"谵":"譫",
"谶":"讖",
"豮":"豶",
"贜":"贓",
"贝":"貝",
"贞":"貞",
"负":"負",
"贡":"貢",
"财":"財",
"责":"責",
"贤":"賢",
"败":"敗",
"账":"賬",
"货":"貨",
"质":"質",
"贩":"販",
"贪":"貪",
"贫":"貧",
"贬":"貶",
"购":"購",
"贮":"貯",
"贯":"貫",
"贰":"貳",
"贱":"賤",
"贲":"賁",
"贳":"貰",
"贴":"貼",
"贵":"貴",
"贶":"貺",
"贷":"貸",
"贸":"貿",
"费":"費",
"贺":"賀",
"贻":"貽",
"贼":"賊",
"贽":"贄",
"贾":"賈",
"贿":"賄",
"赀":"貲",
"赁":"賃",
"赂":"賂",
"赃":"贓",
"资":"資",
"赅":"賅",
"赆":"贐",
"赇":"賕",
"赈":"賑",
"赉":"賚",
"赊":"賒",
"赋":"賦",
"赌":"賭",
"赍":"齎",
"赎":"贖",
"赏":"賞",
"赐":"賜",
"赒":"賙",
"赓":"賡",
"赔":"賠",
"赕":"賧",
"赖":"賴",
"赗":"賵",
"赘":"贅",
"赙":"賻",
"赚":"賺",
"赛":"賽",
"赜":"賾",
"赝":"贋",
"赞":"贊",
"赟":"贇",
"赠":"贈",
"赡":"贍",
"赢":"贏",
"赣":"贛",
"赵":"趙",
"赶":"趕",
"趋":"趨",
"趱":"趲",
"趸":"躉",
"跃":"躍",
"跄":"蹌",
"跞":"躒",
"践":"踐",
"跷":"蹺",
"跸":"蹕",
"跹":"躚",
"跻":"躋",
"踊":"踴",
"踌":"躊",
"踪":"蹤",
"踬":"躓",
"踯":"躑",
"蹑":"躡",
"蹒":"蹣",
"蹰":"躕",
"蹿":"躥",
"躏":"躪",
"躜":"躦",
"躯":"軀",
"躰":"體",
"车":"車",
"轧":"軋",
"轨":"軌",
"轩":"軒",
"轫":"軔",
"转":"轉",
"轭":"軛",
"轮":"輪",
"软":"軟",
"轰":"轟",
"轱":"軲",
"轲":"軻",
"轳":"轤",
"轴":"軸",
"轵":"軹",
"轶":"軼",
"轷":"軤",
"轸":"軫",
"轹":"轢",
"轺":"軺",
"轻":"輕",
"轼":"軾",
"载":"載",
"轾":"輊",
"轿":"轎",
"辁":"輇",
"辂":"輅",
"较":"較",
"辄":"輒",
"辅":"輔",
"辆":"輛",
"辇":"輦",
"辈":"輩",
"辉":"輝",
"辊":"輥",
"辋":"輞",
"辍":"輟",
"辎":"輜",
"辏":"輳",
"辐":"輻",
"辑":"輯",
"输":"輸",
"辔":"轡",
"辕":"轅",
"辖":"轄",
"辗":"輾",
"辘":"轆",
"辙":"轍",
"辚":"轔",
"辞":"辭",
"辩":"辯",
"辫":"辮",
"边":"邊",
"辽":"遼",
"达":"達",
"迁":"遷",
"过":"過",
"迈":"邁",
"运":"運",
"还":"還",
"这":"這",
"进":"進",
"远":"遠",
"违":"違",
"连":"連",
"迟":"遲",
"迩":"邇",
"迳":"逕",
"迹":"跡",
"适":"適",
"选":"選",
"逊":"遜",
"递":"遞",
"逦":"邐",
"逻":"邏",
"遗":"遺",
"遥":"遙",
"邓":"鄧",
"邝":"鄺",
"邬":"鄔",
"邮":"郵",
"邹":"鄒",
"邺":"鄴",
"邻":"鄰",
"郃":"合",
"郄":"隙",
"郏":"郟",
"郐":"鄶",
"郑":"鄭",
"郓":"鄆",
"郦":"酈",
"郧":"鄖",
"郸":"鄲",
"酝":"醞",
"酱":"醬",
"酽":"釅",
"酾":"釃",
"酿":"釀",
"醖":"醞",
"释":"釋",
"里":"裡",
"鈈":"鈽",
"鈡":"鐘",
"鉆":"鑽",
"鉴":"鑑",
"銮":"鑾",
"銼":"剉",
"鋻":"鑑",
"錘":"鎚",
"録":"錄",
"錾":"鏨",
"鑒":"鑑",
"钆":"釓",
"钇":"釔",
"针":"針",
"钉":"釘",
"钊":"釗",
"钋":"釙",
"钌":"釕",
"钍":"釷",
"钎":"釺",
"钏":"釧",
"钐":"釤",
"钒":"釩",
"钓":"釣",
"钔":"鍆",
"钕":"釹",
"钖":"鍚",
"钗":"釵",
"钘":"鈃",
"钙":"鈣",
"钚":"鈈",
"钛":"鈦",
"钜":"鉅",
"钝":"鈍",
"钞":"鈔",
"钟":"鐘",
"钠":"鈉",
"钡":"鋇",
"钢":"鋼",
"钣":"鈑",
"钤":"鈐",
"钥":"鑰",
"钦":"欽",
"钧":"鈞",
"钨":"鎢",
"钩":"鉤",
"钪":"鈧",
"钫":"鈁",
"钬":"鈥",
"钭":"鈄",
"钮":"鈕",
"钯":"鈀",
"钰":"鈺",
"钱":"錢",
"钲":"鉦",
"钳":"鉗",
"钴":"鈷",
"钵":"缽",
"钶":"鈳",
"钷":"鉕",
"钸":"鈽",
"钹":"鈸",
"钺":"鉞",
"钻":"鑽",
"钼":"鉬",
"钽":"鉭",
"钾":"鉀",
"钿":"鈿",
"铀":"鈾",
"铁":"鐵",
"铂":"鉑",
"铃":"鈴",
"铄":"鑠",
"铅":"鉛",
"铆":"鉚",
"铈":"鈰",
"铉":"鉉",
"铊":"鉈",
"铋":"鉍",
"铌":"鈮",
"铍":"鈹",
"铎":"鐸",
"铏":"鉶",
"铐":"銬",
"铑":"銠",
"铒":"鉺",
"铓":"鋩",
"铕":"銪",
"铖":"鋮",
"铗":"鋏",
"铘":"鋣",
"铙":"鐃",
"铛":"鐺",
"铜":"銅",
"铝":"鋁",
"铞":"銱",
"铟":"銦",
"铠":"鎧",
"铡":"鍘",
"铢":"銖",
"铣":"銑",
"铤":"鋌",
"铥":"銩",
"铧":"鏵",
"铨":"銓",
"铩":"鎩",
"铪":"鉿",
"铫":"銚",
"铬":"鉻",
"铭":"銘",
"铮":"錚",
"铯":"銫",
"铰":"鉸",
"铱":"銥",
"铲":"鏟",
"铳":"銃",
"铴":"鐋",
"铵":"銨",
"银":"銀",
"铷":"銣",
"铸":"鑄",
"铹":"鐒",
"铺":"鋪",
"铼":"錸",
"铽":"鋱",
"链":"鏈",
"铿":"鏗",
"销":"銷",
"锁":"鎖",
"锂":"鋰",
"锃":"鋥",
"锄":"鋤",
"锅":"鍋",
"锆":"鋯",
"锇":"鋨",
"锈":"鏽",
"锉":"銼",
"锊":"鋝",
"锋":"鋒",
"锌":"鋅",
"锍":"鋶",
"锎":"鐦",
"锏":"鐧",
"锐":"銳",
"锑":"銻",
"锒":"鋃",
"锓":"鋟",
"锔":"鋦",
"锕":"錒",
"锖":"錆",
"锗":"鍺",
"锘":"鍩",
"错":"錯",
"锚":"錨",
"锛":"錛",
"锜":"錡",
"锝":"鍀",
"锞":"錁",
"锟":"錕",
"锡":"錫",
"锢":"錮",
"锣":"鑼",
"锤":"錘",
"锥":"錐",
"锦":"錦",
"锧":"鑕",
"锨":"鍁",
"锩":"錈",
"锪":"鍃",
"锫":"錇",
"锬":"錟",
"锭":"錠",
"键":"鍵",
"锯":"鋸",
"锰":"錳",
"锱":"錙",
"锲":"鍥",
"锴":"鍇",
"锵":"鏘",
"锶":"鍶",
"锷":"鍔",
"锸":"鍤",
"锹":"鍬",
"锺":"鍾",
"锻":"鍛",
"锼":"鎪",
"锾":"鍰",
"锿":"鎄",
"镀":"鍍",
"镁":"鎂",
"镂":"鏤",
"镃":"鎡",
"镄":"鐨",
"镅":"鎇",
"镆":"鏌",
"镇":"鎮",
"镉":"鎘",
"镊":"鑷",
"镋":"钂",
"镌":"鐫",
"镍":"鎳",
"镎":"鎿",
"镏":"鎦",
"镐":"鎬",
"镑":"鎊",
"镒":"鎰",
"镓":"鎵",
"镔":"鑌",
"镕":"鎔",
"镖":"鏢",
"镗":"鏜",
"镘":"鏝",
"镙":"鏍",
"镚":"鏰",
"镛":"鏞",
"镜":"鏡",
"镝":"鏑",
"镞":"鏃",
"镟":"鏇",
"镡":"鐔",
"镢":"鐝",
"镣":"鐐",
"镤":"鏷",
"镥":"鑥",
"镦":"鐓",
"镧":"鑭",
"镨":"鐠",
"镩":"鑹",
"镪":"鏹",
"镫":"鐙",
"镬":"鑊",
"镭":"鐳",
"镮":"鐶",
"镯":"鐲",
"镰":"鐮",
"镱":"鐿",
"镲":"鑔",
"镳":"鑣",
"镴":"鑞",
"镶":"鑲",
"长":"長",
"閑":"閒",
"閧":"鬨",
"门":"門",
"闩":"閂",
"闪":"閃",
"闫":"閆",
"闭":"閉",
"问":"問",
"闯":"闖",
"闰":"閏",
"闱":"闈",
"闲":"閒",
"闳":"閎",
"间":"間",
"闵":"閔",
"闶":"閌",
"闷":"悶",
"闸":"閘",
"闹":"鬧",
"闺":"閨",
"闻":"聞",
"闼":"闥",
"闽":"閩",
"闾":"閭",
"闿":"闓",
"阀":"閥",
"阁":"閣",
"阂":"閡",
"阃":"閫",
"阄":"鬮",
"阅":"閱",
"阆":"閬",
"阈":"閾",
"阉":"閹",
"阊":"閶",
"阋":"鬩",
"阌":"閿",
"阍":"閽",
"阎":"閻",
"阏":"閼",
"阐":"闡",
"阑":"闌",
"阒":"闃",
"阔":"闊",
"阕":"闋",
"阖":"闔",
"阗":"闐",
"阙":"闕",
"阚":"闞",
"队":"隊",
"阳":"陽",
"阴":"陰",
"阵":"陣",
"阶":"階",
"际":"際",
"陆":"陸",
"陇":"隴",
"陈":"陳",
"陉":"陘",
"陕":"陝",
"陧":"隉",
"陨":"隕",
"险":"險",
"随":"隨",
"隐":"隱",
"隶":"隸",
"隽":"雋",
"难":"難",
"雏":"雛",
"雠":"讎",
"雳":"靂",
"雾":"霧",
"霁":"霽",
"霉":"黴",
"霭":"靄",
"靓":"靚",
"静":"靜",
"靣":"面",
"靥":"靨",
"鞑":"韃",
"鞒":"橇",
"鞯":"韉",
"韦":"韋",
"韧":"韌",
"韨":"韍",
"韩":"韓",
"韪":"韙",
"韫":"韞",
"韬":"韜",
"韵":"韻",
"页":"頁",
"顶":"頂",
"顷":"頃",
"顸":"頇",
"项":"項",
"顺":"順",
"须":"須",
"顼":"頊",
"顽":"頑",
"顾":"顧",
"顿":"頓",
"颀":"頎",
"颁":"頒",
"颂":"頌",
"颃":"頏",
"预":"預",
"颅":"顱",
"领":"領",
"颇":"頗",
"颈":"頸",
"颉":"頡",
"颊":"頰",
"颋":"頲",
"颌":"頜",
"颍":"潁",
"颏":"頦",
"颐":"頤",
"频":"頻",
"颓":"頹",
"颔":"頷",
"颖":"穎",
"颗":"顆",
"题":"題",
"颙":"顒",
"颚":"顎",
"颛":"顓",
"颜":"顏",
"额":"額",
"颞":"顳",
"颟":"顢",
"颠":"顛",
"颡":"顙",
"颢":"顥",
"颤":"顫",
"颥":"顬",
"颦":"顰",
"颧":"顴",
"风":"風",
"飑":"颮",
"飒":"颯",
"飓":"颶",
"飔":"颸",
"飕":"颼",
"飗":"飀",
"飘":"飄",
"飙":"飆",
"飚":"飈",
"飞":"飛",
"飨":"饗",
"餍":"饜",
"饥":"飢",
"饦":"飥",
"饧":"餳",
"饨":"飩",
"饩":"餼",
"饪":"飪",
"饫":"飫",
"饬":"飭",
"饭":"飯",
"饮":"飲",
"饯":"餞",
"饰":"飾",
"饱":"飽",
"饲":"飼",
"饳":"飿",
"饴":"飴",
"饵":"餌",
"饶":"饒",
"饷":"餉",
"饸":"餄",
"饹":"餎",
"饺":"餃",
"饻":"餏",
"饼":"餅",
"饽":"餑",
"饿":"餓",
"馀":"餘",
"馁":"餒",
"馃":"餜",
"馄":"餛",
"馅":"餡",
"馆":"館",
"馇":"餷",
"馈":"饋",
"馉":"餶",
"馊":"餿",
"馋":"饞",
"馍":"饃",
"馎":"餺",
"馏":"餾",
"馐":"饈",
"馑":"饉",
"馒":"饅",
"馓":"饊",
"馔":"饌",
"馕":"饟",
"騃":"呆",
"马":"馬",
"驭":"馭",
"驮":"馱",
"驯":"馴",
"驰":"馳",
"驱":"驅",
"驳":"駁",
"驴":"驢",
"驵":"駔",
"驶":"駛",
"驷":"駟",
"驸":"駙",
"驹":"駒",
"驺":"騶",
"驻":"駐",
"驼":"駝",
"驽":"駑",
"驾":"駕",
"驿":"驛",
"骀":"駘",
"骁":"驍",
"骂":"罵",
"骄":"驕",
"骅":"驊",
"骆":"駱",
"骇":"駭",
"骈":"駢",
"骊":"驪",
"骋":"騁",
"验":"驗",
"骎":"駸",
"骏":"駿",
"骐":"騏",
"骑":"騎",
"骒":"騍",
"骓":"騅",
"骖":"驂",
"骗":"騙",
"骘":"騭",
"骚":"騷",
"骛":"騖",
"骜":"驁",
"骝":"騮",
"骞":"騫",
"骟":"騸",
"骠":"驃",
"骡":"騾",
"骢":"驄",
"骣":"驏",
"骤":"驟",
"骥":"驥",
"骧":"驤",
"髅":"髏",
"髋":"髖",
"髌":"髕",
"鬓":"鬢",
"魇":"魘",
"魉":"魎",
"鱼":"魚",
"鱽":"魛",
"鱿":"魷",
"鲁":"魯",
"鲂":"魴",
"鲅":"鮁",
"鲆":"鮃",
"鲇":"鯰",
"鲈":"鱸",
"鲊":"鮓",
"鲋":"鮒",
"鲍":"鮑",
"鲎":"鱟",
"鲏":"鮍",
"鲐":"鮐",
"鲑":"鮭",
"鲒":"鮚",
"鲔":"鮪",
"鲕":"鮞",
"鲖":"鮦",
"鲗":"鰂",
"鲙":"鱠",
"鲚":"鱭",
"鲛":"鮫",
"鲜":"鮮",
"鲝":"鮺",
"鲞":"鯗",
"鲟":"鱘",
"鲠":"鯁",
"鲡":"鱺",
"鲢":"鰱",
"鲣":"鰹",
"鲤":"鯉",
"鲥":"鰣",
"鲦":"鰷",
"鲧":"鯀",
"鲨":"鯊",
"鲩":"鯇",
"鲫":"鯽",
"鲭":"鯖",
"鲮":"鯪",
"鲰":"鯫",
"鲱":"鯡",
"鲲":"鯤",
"鲳":"鯧",
"鲴":"鯝",
"鲵":"鯢",
"鲶":"鯰",
"鲷":"鯛",
"鲸":"鯨",
"鲺":"鯴",
"鲻":"鯔",
"鲼":"鱝",
"鲽":"鰈",
"鲿":"鱨",
"鳁":"鰛",
"鳃":"鰓",
"鳄":"鱷",
"鳅":"鰍",
"鳆":"鰒",
"鳇":"鰉",
"鳊":"鯿",
"鳋":"鰠",
"鳌":"鰲",
"鳍":"鰭",
"鳎":"鰨",
"鳏":"鰥",
"鳐":"鰩",
"鳑":"鰟",
"鳒":"鰜",
"鳓":"鰳",
"鳔":"鰾",
"鳕":"鱈",
"鳖":"鱉",
"鳗":"鰻",
"鳘":"鰵",
"鳙":"鱅",
"鳛":"鰼",
"鳜":"鱖",
"鳝":"鱔",
"鳞":"鱗",
"鳟":"鱒",
"鳢":"鱧",
"鳣":"鱣",
"鶏":"雞",
"鷄":"雞",
"鸟":"鳥",
"鸠":"鳩",
"鸡":"雞",
"鸢":"鳶",
"鸣":"鳴",
"鸥":"鷗",
"鸦":"鴉",
"鸧":"鶬",
"鸨":"鴇",
"鸩":"鴆",
"鸪":"鴣",
"鸫":"鶇",
"鸬":"鸕",
"鸭":"鴨",
"鸮":"鴞",
"鸯":"鴦",
"鸰":"鴒",
"鸱":"鴟",
"鸲":"鴝",
"鸳":"鴛",
"鸵":"鴕",
"鸶":"鷥",
"鸷":"鷙",
"鸸":"鴯",
"鸹":"鴰",
"鸺":"鵂",
"鸻":"鴴",
"鸼":"鵃",
"鸽":"鴿",
"鸾":"鸞",
"鸿":"鴻",
"鹁":"鵓",
"鹂":"鸝",
"鹃":"鵑",
"鹄":"鵠",
"鹅":"鵝",
"鹆":"鵒",
"鹇":"鷴",
"鹈":"鵜",
"鹉":"鵡",
"鹊":"鵲",
"鹋":"鶓",
"鹌":"鵪",
"鹎":"鵯",
"鹏":"鵬",
"鹐":"鵮",
"鹑":"鶉",
"鹒":"鶊",
"鹕":"鶘",
"鹖":"鶡",
"鹗":"鶚",
"鹘":"鶻",
"鹙":"鶖",
"鹚":"鶿",
"鹛":"鶥",
"鹜":"鶩",
"鹞":"鷂",
"鹡":"鶺",
"鹣":"鶼",
"鹤":"鶴",
"鹥":"鷖",
"鹦":"鸚",
"鹧":"鷓",
"鹨":"鷚",
"鹩":"鷯",
"鹪":"鷦",
"鹫":"鷲",
"鹬":"鷸",
"鹭":"鷺",
"鹯":"鸇",
"鹰":"鷹",
"鹱":"鸌",
"鹳":"鸛",
"鹾":"鹺",
"麦":"麥",
"麸":"麩",
"麽":"麼",
"黄":"黃",
"黉":"黌",
"黡":"黶",
"黩":"黷",
"黪":"黲",
"黾":"黽",
"鼋":"黿",
"鼍":"鼉",
"鼹":"鼴",
"齐":"齊",
"齑":"齏",
"齶":"顎",
"齿":"齒",
"龀":"齔",
"龃":"齟",
"龄":"齡",
"龅":"齙",
"龆":"齠",
"龇":"齜",
"龈":"齦",
"龉":"齬",
"龊":"齪",
"龋":"齲",
"龌":"齷",
"龙":"龍",
"龚":"龔",
"龛":"龕",
"龟":"龜",
"":"　"
});
;
TongWen.addT2STable({
"专着":"专著",
"亲着":"亲著",
"卓着":"卓著",
"原着":"原著",
"发着":"发著",
"合着":"合著",
"名着":"名著",
"吐着":"吐著",
"土着":"土著",
"大着":"大著",
"巨着":"巨著",
"干丝":"乾丝",
"干乾":"康乾",
"干元":"乾元",
"干卦":"乾卦",
"干县":"乾县",
"干图":"乾图",
"干圖":"乾图",
"干坤":"乾坤",
"干宅":"乾宅",
"干断":"乾断",
"干旦":"乾旦",
"干曜":"乾曜",
"干清":"干清",
"干清宮":"乾清宫",
"干盛":"干盛",
"干盛世":"乾盛世",
"干着":"干着",
"干着急":"乾着急",
"干紅":"乾红",
"干綱":"乾纲",
"干红":"乾紅",
"干纲":"乾纲",
"干象":"乾象",
"干陵":"乾陵",
"干隆":"乾隆",
"張法":"張法",
"張法干":"张法乾",
"彰明":"彰明",
"彰明较着":"彰明较著",
"所着":"所著",
"所着手":"所着手",
"批着":"批著",
"撰着":"撰著",
"新着":"新著",
"旧着":"旧著",
"昭着":"昭著",
"显着":"显著",
"显着性":"显著性",
"洋泾":"洋泾",
"洋泾滨":"洋泾浜",
"着书":"著书",
"着作":"著作",
"着名":"著名",
"着庸":"著庸",
"着录":"著录",
"着明":"著明",
"着有":"著有",
"着毋":"着毋",
"着毋庸议":"著毋庸议",
"着称":"著称",
"着籍":"著籍",
"着绩":"著绩",
"着者":"著者",
"着述":"著述",
"着迷":"着迷",
"纨裤":"纨绔",
"纨裤子弟":"纨绔子弟",
"绮襦":"绮襦",
"绮襦纨裤":"绮襦纨绔",
"编着":"编著",
"萧干":"萧乾",
"蕭干":"萧乾",
"裤下":"裤下",
"裤下之辱":"绔下之辱",
"见微":"见微",
"见微知着":"见微知著",
"计画":"计划",
"论着":"论著",
"译着":"译著",
"象征":"象征",
"象征着":"象徵着",
"遗着":"遗著",
"郭子":"郭子",
"郭子干":"郭子乾",
"颇着":"颇著",
"鲇鱼":"鲶鱼"
});
;
TongWen.addS2TTable({
"0余":"0餘",
"0天":"0天",
"0天后":"0天後",
"0寸":"0吋",
"0海":"0海",
"0海裡":"0海里",
"0裡":"0里",
"1天":"1天",
"1天后":"1天後",
"1寸":"1吋",
"1海":"1海",
"1海裡":"1海里",
"1裡":"1里",
"2天":"2天",
"2天后":"2天後",
"2寸":"2吋",
"2海":"2海",
"2海裡":"2海里",
"2裡":"2里",
"3天":"3天",
"3天后":"3天後",
"3寸":"3吋",
"3海":"3海",
"3海裡":"3海里",
"3裡":"3里",
"4天":"4天",
"4天后":"4天後",
"4寸":"4吋",
"4海":"4海",
"4海裡":"4海里",
"4裡":"4里",
"5天":"5天",
"5天后":"5天後",
"5寸":"5吋",
"5海":"5海",
"5海裡":"5海里",
"5裡":"5里",
"6天":"6天",
"6天后":"6天後",
"6寸":"6吋",
"6海":"6海",
"6海裡":"6海里",
"6裡":"6里",
"7天":"7天",
"7天后":"7天後",
"7寸":"7吋",
"7海":"7海",
"7海裡":"7海里",
"7裡":"7里",
"8天":"8天",
"8天后":"8天後",
"8寸":"8吋",
"8海":"8海",
"8海裡":"8海里",
"8裡":"8里",
"9天":"9天",
"9天后":"9天後",
"9寸":"9吋",
"9海":"9海",
"9海裡":"9海里",
"9裡":"9里",
"A』":"A'",
"B』":"B'",
"C』":"C'",
"D』":"D'",
"E』":"E'",
"F』":"F'",
"G』":"G'",
"H』":"H'",
"I』":"I'",
"J』":"J'",
"K』":"K'",
"L』":"L'",
"M』":"M'",
"N』":"N'",
"O』":"O'",
"P』":"P'",
"Q』":"Q'",
"R』":"R'",
"S』":"S'",
"T』":"T'",
"U』":"U'",
"V』":"V'",
"W』":"W'",
"X』":"X'",
"Y』":"Y'",
"Z』":"Z'",
"a』":"a'",
"b』":"b'",
"c』":"c'",
"d』":"d'",
"e』":"e'",
"f』":"f'",
"g』":"g'",
"h』":"h'",
"i』":"i'",
"j』":"j'",
"k』":"k'",
"l』":"l'",
"m』":"m'",
"n』":"n'",
"o』":"o'",
"p』":"p'",
"q』":"q'",
"r』":"r'",
"s』":"s'",
"t』":"t'",
"u』":"u'",
"v』":"v'",
"w』":"w'",
"x』":"x'",
"y』":"y'",
"z』":"z'",
"○余":"○餘",
"○海":"○海",
"○海裡":"○海里",
"○裡":"○里",
"「恩":"「嗯",
"「恩！":"「嗯！",
"「當":"「當",
"「當」":"「噹」",
"「當！":"「噹！",
"一並":"一併",
"一並不":"一並不",
"一並且":"一並且",
"一並非":"一並非",
"一伙":"一夥",
"一個":"一個",
"一出":"一出",
"一出京劇":"一齣京劇",
"一出劇":"一齣劇",
"一出劇院":"一出劇院",
"一出好戲":"一齣好戲",
"一出戲":"一齣戲",
"一出話劇":"一齣話劇",
"一出電影":"一齣電影",
"一制":"一制",
"一制作":"一製作",
"一制程":"一製程",
"一制藥":"一製藥",
"一只":"一隻",
"一只只":"一隻隻",
"一只只夠":"一隻只夠",
"一只只有":"一隻只有",
"一周":"一週",
"一大":"一大",
"一大伙":"一大夥",
"一天":"一天",
"一天后":"一天後",
"一干":"一干",
"一干二淨":"一乾二淨",
"一干就":"一幹就",
"一干而盡":"一乾而盡",
"一斗":"一斗",
"一斗不":"一鬥不",
"一斗再斗":"一鬥再鬥",
"一松":"一鬆",
"一松林":"一松林",
"一松樹":"一松樹",
"一松鼠":"一松鼠",
"一樹":"一樹",
"一樹百獲":"一樹百穫",
"一毫":"一毫",
"一毫一發":"一毫一髮",
"一沖":"一沖",
"一沖一撞":"一衝一撞",
"一海":"一海",
"一海裡":"一海里",
"一涂":"一塗",
"一游":"一遊",
"一物":"一物",
"一物克一":"一物剋一",
"一發":"一發",
"一發之差":"一髮之差",
"一發之間":"一髮之間",
"一發千鈞":"一髮千鈞",
"一直":"一直",
"一直干":"一直幹",
"一直發女":"一直髮女",
"一箭":"一箭",
"一箭雙雕":"一箭雙鵰",
"一般":"一般",
"一般只":"一般只",
"一裡":"一里",
"一裡余":"一里餘",
"一贊":"一讚",
"一鍋":"一鍋",
"一鍋面":"一鍋麵",
"一面":"一面",
"一點":"一點",
"一點丑":"一點醜",
"丁當":"叮噹",
"丁鈴":"叮鈴",
"七只":"七隻",
"七天":"七天",
"七天后":"七天後",
"七海":"七海",
"七海裡":"七海里",
"七海裡面":"七海裡面",
"七裡":"七里",
"七裡余":"七里餘",
"七面":"七面",
"丈余":"丈餘",
"三個":"三個",
"三只":"三隻",
"三周":"三週",
"三嘆":"三歎",
"三國":"三國",
"三國志":"三國志",
"三天":"三天",
"三海":"三海",
"三海裡":"三海里",
"三裡":"三里",
"三裡余":"三里餘",
"三豐":"三丰",
"上准":"上準",
"上周":"上週",
"上布":"上佈",
"上折":"上摺",
"上梁":"上樑",
"上梁山":"上梁山",
"上沖":"上衝",
"上沖刷":"上沖刷",
"上沖水":"上沖水",
"上沖洗":"上沖洗",
"上沖涼":"上沖涼",
"上沖澡":"上沖澡",
"上簽":"上籤",
"下台":"下台",
"下咽":"下嚥",
"下擺":"下襬",
"下梁":"下樑",
"下沖":"下衝",
"下簽":"下籤",
"下裡":"下里",
"不丑":"不醜",
"不並":"不併",
"不余":"不餘",
"不修":"不修",
"不修篇幅":"不修邊幅",
"不值":"不值",
"不值一曬":"不值一哂",
"不大":"不大",
"不大象":"不大像",
"不寒":"不寒",
"不寒而栗":"不寒而慄",
"不干":"不干",
"不干不淨":"不乾不淨",
"不干他":"不干他",
"不干休":"不干休",
"不干你":"不干你",
"不干她":"不干她",
"不干我":"不干我",
"不干擾":"不干擾",
"不干政":"不干政",
"不干杯":"不乾杯",
"不干涉":"不干涉",
"不干淨":"不乾淨",
"不干系":"不干係",
"不干脆":"不乾脆",
"不干著急":"不乾著急",
"不干裂":"不乾裂",
"不干預":"不干預",
"不愈":"不癒",
"不斗":"不鬥",
"不斷":"不斷",
"不斷發展":"不斷發展",
"不方":"不方",
"不方便":"不方便",
"不松":"不松",
"不松下":"不鬆下",
"不涂":"不塗",
"不當":"不當",
"不當准":"不當準",
"不系":"不繫",
"不能":"不能",
"不能干":"不能干",
"不能象":"不能象",
"不能象征":"不能象徵",
"不舍":"不捨",
"不要":"不要",
"不要干":"不要干",
"不要象":"不要象",
"不象":"不像",
"不贊":"不讚",
"不采":"不採",
"丑一":"丑一",
"丑一點":"醜一點",
"丑不":"丑不",
"丑不丑":"醜不醜",
"丑丑":"醜醜",
"丑丫":"丑丫",
"丑丫頭":"醜丫頭",
"丑丫鬟":"醜丫鬟",
"丑也":"丑也",
"丑也丑":"醜也醜",
"丑事":"醜事",
"丑人":"醜人",
"丑似":"醜似",
"丑俊":"醜俊",
"丑八":"丑八",
"丑八怪":"醜八怪",
"丑八戒":"醜八戒",
"丑劇":"醜劇",
"丑化":"醜化",
"丑名":"醜名",
"丑女":"醜女",
"丑如":"醜如",
"丑婆":"醜婆",
"丑婦":"醜婦",
"丑媳":"丑媳",
"丑媳婦":"醜媳婦",
"丑家":"丑家",
"丑家伙":"醜傢伙",
"丑小":"丑小",
"丑小子":"醜小子",
"丑小鴨":"醜小鴨",
"丑少":"丑少",
"丑少年":"醜少年",
"丑巴":"丑巴",
"丑巴怪":"醜巴怪",
"丑得":"醜得",
"丑得象":"醜得像",
"丑怪":"醜怪",
"丑惡":"醜惡",
"丑態":"醜態",
"丑東":"丑東",
"丑東西":"醜東西",
"丑模":"丑模",
"丑模樣":"醜模樣",
"丑樣":"醜樣",
"丑死":"醜死",
"丑漢":"醜漢",
"丑煞":"丑煞",
"丑煞人":"醜煞人",
"丑男":"醜男",
"丑的":"醜的",
"丑老":"醜老",
"丑老頭":"醜老頭",
"丑聞":"醜聞",
"丑聲":"醜聲",
"丑臉":"醜臉",
"丑行":"醜行",
"丑詆":"醜詆",
"丑話":"醜話",
"丑語":"醜語",
"丑貌":"醜貌",
"丑陋":"醜陋",
"丑面":"醜面",
"丑類":"醜類",
"丑鬼":"醜鬼",
"且斗":"且斗",
"且斗且":"且鬥且",
"世界":"世界",
"世界杯":"世界盃",
"丟丑":"丟醜",
"丟了":"丟了",
"丟了丑":"丟了醜",
"並不":"並不",
"並不並":"併不併",
"並入":"併入",
"並力":"併力",
"並包":"并包",
"並合":"併合",
"並吞":"併吞",
"並圖":"併圖",
"並攏":"併攏",
"並案":"併案",
"並疊":"併疊",
"並發":"並發",
"並發症":"併發症",
"並砌":"併砌",
"並科":"併科",
"並肩":"並肩",
"並肩子":"併肩子",
"並肩干":"並肩幹",
"並負":"併負",
"並負責":"並負責",
"並購":"併購",
"並購買":"並購買",
"並贓":"併贓",
"並贓拿賊":"併贓拿賊",
"並贓治罪":"併贓治罪",
"並采":"並採",
"並除":"併除",
"並隴":"併攏",
"中侖":"中崙",
"中岳":"中嶽",
"中布":"中佈",
"中簽":"中籤",
"主干":"主幹",
"久斗":"久鬥",
"之余":"之餘",
"之准":"之準",
"之欲":"之慾",
"之游":"之遊",
"九只":"九隻",
"九嘆":"九歎",
"九天":"九天",
"九天后":"九天後",
"九海":"九海",
"九海裡":"九海里",
"九裡":"九里",
"九裡余":"九里餘",
"九面":"九面",
"也沒":"也沒",
"也沒干":"也沒幹",
"也舍":"也舍",
"也舍下":"也捨下",
"也舍棄":"也捨棄",
"也象":"也像",
"亂斗":"亂鬥",
"亂沖":"亂衝",
"亂涂":"亂塗",
"了准":"了准",
"了准備":"了準備",
"了准時":"了準時",
"了准有":"了準有",
"了准的":"了準的",
"了准確":"了準確",
"了如":"了如",
"了如指掌":"瞭如指掌",
"了望":"瞭望",
"了然":"瞭然",
"了然於胸":"了然於胸",
"了若":"了若",
"了若指掌":"瞭若指掌",
"了解":"瞭解",
"事也":"事也",
"事也干":"事也幹",
"事可":"事可",
"事可干":"事可幹",
"事好":"事好",
"事好干":"事好幹",
"事干":"事幹",
"事干擾":"事干擾",
"事干涉":"事干涉",
"事干淨":"事乾淨",
"事干系":"事幹係",
"事干脆":"事乾脆",
"事干預":"事干預",
"事情":"事情",
"事情可干":"事情可幹",
"事情好干":"事情好幹",
"事情干":"事情幹",
"事跡":"事蹟",
"事都":"事都",
"事都干":"事都幹",
"事關":"事關",
"二個":"二個",
"二只":"二隻",
"二天":"二天",
"二天后":"二天後",
"二手":"二手",
"二手煙":"二手菸",
"二撇":"二撇",
"二撇胡":"二撇鬍",
"二海":"二海",
"二海裡":"二海里",
"二裡":"二里",
"二面":"二面",
"互斗":"互鬥",
"五只":"五隻",
"五周":"五週",
"五天":"五天",
"五岳":"五嶽",
"五海":"五海",
"五海裡":"五海里",
"五裡":"五里",
"五裡余":"五里餘",
"五谷":"五穀",
"五髒":"五臟",
"些丑":"些醜",
"些干":"些干",
"些干頭":"些幹頭",
"些象":"些像",
"亞裡":"亞里",
"交托":"交託",
"交游":"交遊",
"亦舍":"亦舍",
"亦舍下":"亦捨下",
"亦雲":"亦云",
"京沈":"京瀋",
"亮丑":"亮醜",
"人丑":"人醜",
"人像":"人像",
"人像征":"人象徵",
"人干":"人幹",
"人欲":"人欲",
"人欲橫流":"人慾橫流",
"人游":"人遊",
"人物":"人物",
"人物志":"人物誌",
"人象":"人像",
"人贊":"人讚",
"人雲":"人云",
"人雲亦雲":"人云亦云",
"人雲游":"人云遊",
"人雲集":"人雲集",
"什幺":"什麼",
"什幺女人":"什麼女人",
"什錦":"什錦",
"什錦面":"什錦麵",
"什麼":"什麼",
"介系":"介系",
"介系詞":"介係詞",
"介胄":"介冑",
"仍斗":"仍鬥",
"仍象":"仍像",
"他不":"他不",
"他不干渴":"他不乾渴",
"他丑":"他醜",
"他干":"他幹",
"他干一杯":"他乾一杯",
"他干兒子":"他乾兒子",
"他干女兒":"他乾女兒",
"他干擾":"他干擾",
"他干涉":"他干涉",
"他干淨":"他乾淨",
"他干爹":"他乾爹",
"他干脆":"他乾脆",
"他干預":"他干預",
"他白":"他白",
"他白干":"他白幹",
"他象":"他像",
"他象征戰":"他像征戰",
"付托":"付託",
"仙後":"仙后",
"仙游":"仙遊",
"仙范":"仙範",
"代征":"代徵",
"代理":"代理",
"令媛":"令嬡",
"仰沖":"仰衝",
"仿佛":"彷彿",
"仿制":"仿製",
"仿徉":"彷徉",
"仿徨":"徬徨",
"仿效":"倣傚",
"休克":"休克",
"伙伴":"夥伴",
"伙同":"夥同",
"伙夫":"伙伕",
"伙眾":"夥眾",
"伙計":"夥計",
"估不":"估不",
"估不准":"估不準",
"伴伙":"伴夥",
"伴游":"伴遊",
"伶敏":"靈敏",
"伸卷":"伸捲",
"伺奉":"侍奉",
"似松":"似松",
"似松實緊":"似鬆實緊",
"但雲":"但云",
"低蕩":"低盪",
"低迥":"低迴",
"住扎":"住紮",
"佔人":"占人",
"佔候":"占候",
"佔卜":"占卜",
"佔卦":"占卦",
"佔士":"佔士",
"佔士邦":"占士邦",
"佔夢":"占夢",
"佔射":"占射",
"佔拜":"占拜",
"佔斷":"占斷",
"佔星":"占星",
"佔有":"佔有",
"佔有欲":"佔有慾",
"佔親":"占親",
"佔課":"占課",
"佔身":"占身",
"佔風":"佔風",
"佔風使帆":"占風使帆",
"佔驗":"占驗",
"佔鳳":"占鳳",
"余丈":"餘丈",
"余下":"餘下",
"余事":"餘事",
"余人":"餘人",
"余位":"餘位",
"余低":"餘低",
"余僇":"餘僇",
"余僧":"餘僧",
"余光":"餘光",
"余光中":"余光中",
"余刃":"餘刃",
"余利":"餘利",
"余剩":"餘剩",
"余力":"餘力",
"余勁":"餘勁",
"余勇":"餘勇",
"余勢":"餘勢",
"余匪":"餘匪",
"余匹":"餘匹",
"余只":"餘隻",
"余名":"餘名",
"余味":"餘味",
"余地":"餘地",
"余天":"餘天",
"余姚":"餘姚",
"余威":"餘威",
"余子":"餘子",
"余子碌碌":"餘子碌碌",
"余字":"餘字",
"余存":"餘存",
"余孬":"餘孬",
"余孽":"餘孽",
"余寸":"餘寸",
"余尺":"餘尺",
"余年":"餘年",
"余座":"餘座",
"余廕":"餘廕",
"余弦":"餘弦",
"余怒":"餘怒",
"余恨":"餘恨",
"余息":"餘息",
"余悸":"餘悸",
"余情":"餘情",
"余慶":"餘慶",
"余憤":"餘憤",
"余數":"餘數",
"余日":"餘日",
"余暇":"餘暇",
"余暉":"餘暉",
"余月":"餘月",
"余杭":"餘杭",
"余枝":"餘枝",
"余桶":"餘桶",
"余次":"餘次",
"余款":"餘款",
"余歲":"餘歲",
"余殃":"餘殃",
"余毒":"餘毒",
"余氣":"餘氣",
"余水":"餘水",
"余波":"餘波",
"余海":"余海",
"余海裡":"餘海里",
"余溫":"餘溫",
"余漏":"餘漏",
"余瀝":"餘瀝",
"余烈":"餘烈",
"余熱":"餘熱",
"余燼":"餘燼",
"余物":"餘物",
"余生":"餘生",
"余畝":"餘畝",
"余眾":"餘眾",
"余禍":"餘禍",
"余糧":"餘糧",
"余線":"餘線",
"余缺":"餘缺",
"余羹":"餘羹",
"余者":"餘者",
"余脈":"餘脈",
"余興":"餘興",
"余蔭":"餘蔭",
"余裕":"餘裕",
"余裡":"餘裡",
"余責":"餘責",
"余賊":"餘賊",
"余路":"餘路",
"余載":"餘載",
"余輝":"餘輝",
"余辜":"餘辜",
"余部":"餘部",
"余錢":"餘錢",
"余閒":"餘閒",
"余震":"餘震",
"余音":"餘音",
"余韻":"餘韻",
"余額":"餘額",
"余風":"餘風",
"余飯":"餘飯",
"余香":"餘香",
"余騎":"餘騎",
"余點":"餘點",
"余黨":"餘黨",
"佛歷":"佛曆",
"佛象":"佛像",
"作准":"作準",
"作奸":"作奸",
"作奸犯科":"作姦犯科",
"作崇":"作祟",
"作廢":"作廢",
"作廢後":"作廢後",
"作的":"作的",
"作的准":"作的準",
"你丑":"你醜",
"你干":"你幹",
"你干一杯":"你乾一杯",
"你干兒子":"你乾兒子",
"你干女兒":"你乾女兒",
"你干擾":"你干擾",
"你干涉":"你干涉",
"你干爹":"你乾爹",
"你干脆":"你乾脆",
"你干那杯":"你乾那杯",
"你干預":"你干預",
"你白":"你白",
"你白干":"你白幹",
"你象":"你像",
"佩環":"珮環",
"佩飾":"珮飾",
"佳肴":"佳餚",
"佳裡":"佳里",
"使心":"使心",
"使心作幸":"使心作倖",
"來干":"來幹",
"來干擾":"來干擾",
"來干旱":"來乾旱",
"來干杯":"來乾杯",
"來干枯":"來乾枯",
"來干涉":"來干涉",
"來干淨":"來乾淨",
"來干爽":"來乾爽",
"來干脆":"來乾脆",
"來干裂":"來乾裂",
"來干預":"來干預",
"來范":"來範",
"來象":"來像",
"例范":"例範",
"侏羅":"侏儸",
"侖背":"崙背",
"供制":"供製",
"依准":"依準",
"依托":"依託",
"侵並":"侵併",
"侵范":"侵範",
"便吃":"便吃",
"便吃干":"便吃乾",
"便松":"便鬆",
"便象":"便像",
"俊丑":"俊醜",
"保不":"保不",
"保不准":"保不準",
"保准":"保準",
"信托":"信託",
"信緘":"信箋",
"信而":"信而",
"信而有征":"信而有徵",
"修浚":"修濬",
"修胡":"修胡",
"修胡刀":"修鬍刀",
"俯沖":"俯衝",
"俱象":"俱像",
"個象":"個像",
"倍余":"倍餘",
"倏松":"倏鬆",
"們干":"們幹",
"們干兒子":"們干兒子",
"們干女兒":"們干女兒",
"們干擾":"們干擾",
"們干涉":"們干涉",
"們干淨":"們干淨",
"們干爹":"們干爹",
"們干脆":"們干脆",
"們干預":"們干預",
"倒僕":"倒仆",
"倒卷":"倒捲",
"倒象":"倒像",
"倒黴":"倒霉",
"倛丑":"倛醜",
"借以":"藉以",
"借口":"藉口",
"借托":"借託",
"借故":"藉故",
"借機":"藉機",
"借著":"藉著",
"借詞":"藉詞",
"倦游":"倦遊",
"值得":"值得",
"值得一干":"值得一幹",
"值得干":"值得幹",
"假發":"假髮",
"做了":"做了",
"做出":"做出",
"做出好戲":"做齣好戲",
"做到":"做到",
"做到象":"做到像",
"停制":"停製",
"停征":"停徵",
"側沖":"側衝",
"偶象":"偶像",
"偷梁":"偷樑",
"傅裡":"傅裡",
"傅裡葉":"傅里葉",
"傍徨":"徬徨",
"傑倫":"杰倫",
"傒幸":"傒倖",
"備注":"備註",
"傭金":"佣金",
"傭錢":"佣錢",
"傳布":"傳佈",
"傷愈":"傷癒",
"傷難":"傷難",
"傷難愈":"傷難癒",
"傾刻":"頃刻",
"傾復":"傾覆",
"僂羅":"僂儸",
"僅余":"僅餘",
"像征":"象徵",
"像贊":"像贊",
"像贊他":"像讚他",
"像贊你":"像讚你",
"像贊嘆":"像讚嘆",
"像贊她":"像讚她",
"像贊我":"像讚我",
"像贊揚":"像讚揚",
"像贊美":"像讚美",
"像贊許":"像讚許",
"像贊譽":"像讚譽",
"像贊賞":"像讚賞",
"像贊頌":"像讚頌",
"僕倒":"仆倒",
"僕地":"仆地",
"僕然":"仆然",
"僕街":"仆街",
"僥天":"僥天",
"僥天之幸":"僥天之悻",
"僥幸":"僥倖",
"僥悻":"僥倖",
"僵僕":"僵仆",
"僵屍":"殭屍",
"僵繩":"韁繩",
"僵蠶":"殭蠶",
"儀范":"儀範",
"億余":"億餘",
"儆效":"儆傚",
"儉朴":"儉樸",
"儌幸":"儌倖",
"儒子":"儒子",
"儒子可教":"孺子可教",
"優游":"優遊",
"兀術":"兀朮",
"元凶":"元兇",
"元勳":"元勛",
"充飢":"充飢",
"充飢畫餅":"充饑畫餅",
"先奸":"先姦",
"先干":"先干",
"先干為敬":"先乾為敬",
"光念":"光唸",
"光致":"光致",
"光致致":"光緻緻",
"克克":"剋剋",
"克剜":"剋剜",
"克夫":"剋夫",
"克扣":"剋扣",
"克日":"剋日",
"克星":"剋星",
"克期":"剋期",
"克死":"剋死",
"克苦":"刻苦",
"克薄":"剋薄",
"克裡":"克里",
"克裡斯多":"克里斯多",
"克裡斯托":"克里斯托",
"免征":"免徵",
"兜卷":"兜捲",
"入伙":"入夥",
"內函":"內涵",
"內制":"內製",
"內哄":"內鬨",
"內斗":"內鬥",
"內松":"內松",
"內松外緊":"內鬆外緊",
"內緊":"內緊",
"內緊外松":"內緊外鬆",
"內裡":"內裡",
"內髒":"內臟",
"全台":"全台",
"全日":"全日",
"全日制":"全日制",
"全裡":"全里",
"全象":"全像",
"兩個":"兩個",
"兩個中":"兩個中",
"兩制":"兩制",
"兩只":"兩隻",
"兩周":"兩週",
"兩天":"兩天",
"兩撇":"兩撇",
"兩撇胡":"兩撇鬍",
"兩海":"兩海",
"兩海裡":"兩海里",
"兩裡":"兩里",
"兩裡余":"兩里餘",
"八只":"八隻",
"八周":"八週",
"八天":"八天",
"八天后":"八天後",
"八字":"八字",
"八字胡":"八字鬍",
"八海":"八海",
"八海裡":"八海里",
"八裡":"八里",
"八裡余":"八里餘",
"公余":"公餘",
"公厘":"公釐",
"公布":"公佈",
"公干":"公幹",
"公歷":"公曆",
"公裡":"公里",
"六只":"六隻",
"六周":"六週",
"六天":"六天",
"六天后":"六天後",
"六欲":"六慾",
"六沖":"六衝",
"六海":"六海",
"六海裡":"六海里",
"六裡":"六里",
"六裡余":"六里餘",
"六須":"六須",
"六須鯰":"六鬚鯰",
"共制":"共製",
"共御":"共禦",
"共斗":"共鬥",
"兵簽":"兵籤",
"其丑":"其醜",
"其余":"其餘",
"典范":"典範",
"兼並":"兼併",
"再丑":"再醜",
"再制":"再製",
"再卷":"再捲",
"再干":"再幹",
"再干一杯":"再乾一杯",
"再斗":"再鬥",
"再斗一斗":"再鬥一鬥",
"再斗斗":"再鬥鬥",
"再松":"再鬆",
"再沖":"再衝",
"再象":"再像",
"冗余":"冗餘",
"冬台":"冬颱",
"冶游":"冶遊",
"准不":"准不",
"准不准備":"準不準備",
"准不准確":"準不準確",
"准不及":"準不及",
"准不可":"準不可",
"准不得":"準不得",
"准不成":"準不成",
"准不是":"準不是",
"准不會":"準不會",
"准不能":"準不能",
"准且":"准且",
"准且勁":"準且勁",
"准些":"準些",
"准以":"准以",
"准以為":"準以為",
"准倒":"准倒",
"准倒黴":"準倒霉",
"准備":"準備",
"准兒":"準兒",
"准准":"準準",
"准到":"準到",
"准則":"準則",
"准博":"准博",
"准博士":"準博士",
"准叫":"準叫",
"准叫你":"準叫你",
"准可":"準可",
"准司":"准司",
"准司法":"準司法",
"准吃":"准吃",
"准吃虧":"準吃虧",
"准噶":"准噶",
"准噶爾":"準噶爾",
"准外":"准外",
"准外母":"準外母",
"准外父":"準外父",
"准夠":"準夠",
"准女":"准女",
"准女婿":"準女婿",
"准媽":"准媽",
"准媽媽":"準媽媽",
"准定":"準定",
"准平":"准平",
"准平原":"準平原",
"准度":"準度",
"准得":"準得",
"准成":"準成",
"准把":"準把",
"准據":"準據",
"准擬":"準擬",
"准新":"准新",
"准新娘":"準新娘",
"准新郎":"準新郎",
"准星":"準星",
"准是":"準是",
"准時":"準時",
"准會":"準會",
"准有":"準有",
"准極":"準極",
"准死":"準死",
"准決":"準決",
"准決斗":"准決鬥",
"准決賽":"準決賽",
"准沒":"準沒",
"准爸":"准爸",
"准爸爸":"準爸爸",
"准直":"準直",
"准知":"準知",
"准確":"準確",
"准線":"準線",
"准繩":"準繩",
"准而":"准而",
"准而快":"準而快",
"准能":"準能",
"准被":"準被",
"准要":"準要",
"准話":"準話",
"准譜":"准譜",
"准譜兒":"準譜兒",
"准錯":"准錯",
"准錯不了":"準錯不了",
"准頭":"準頭",
"准點":"準點",
"准！":"準！",
"凜列":"凜洌",
"凜栗":"凜慄",
"凝干":"凝乾",
"凱裡":"凱里",
"凶嫌":"兇嫌",
"凶徒":"兇徒",
"凶懼":"兇懼",
"凶案":"兇案",
"凶殺":"兇殺",
"凶犯":"兇犯",
"凶猛":"兇猛",
"出丑":"出醜",
"出了":"出了",
"出了丑":"出了醜",
"出個":"出個",
"出個丑":"出個醜",
"出槌":"出鎚",
"出游":"出遊",
"出的":"出的",
"出的丑":"出的醜",
"出糴":"出糶",
"出過":"出過",
"出過丑":"出過醜",
"出電":"出電",
"出電影":"齣電影",
"函容":"涵容",
"函復":"函覆",
"函意":"涵意",
"函數":"函數",
"函洞":"涵洞",
"函濡":"涵濡",
"函煦":"涵煦",
"函管":"涵管",
"函義":"涵義",
"函蓄":"涵蓄",
"函蓋":"涵蓋",
"函蘊":"涵蘊",
"函養":"涵養",
"刀削":"刀削",
"刀削面":"刀削麵",
"分伙":"分夥",
"分別":"分別",
"分布":"分佈",
"分象":"分像",
"分道":"分道",
"分道揚鏢":"分道揚鑣",
"分量":"份量",
"分鐘":"分鐘",
"刑余":"刑餘",
"初愈":"初癒",
"初斗":"初鬥",
"初斗然":"初陡然",
"別干":"別幹",
"別干擾":"別干擾",
"別干杯":"別乾杯",
"別干涉":"別干涉",
"別干淨":"別乾淨",
"別干燥":"別乾燥",
"別干爽":"別乾爽",
"別干裂":"別乾裂",
"別干預":"別干預",
"別扭":"彆扭",
"別扭來":"別扭來",
"別拗":"彆拗",
"別斗":"別鬥",
"別氣":"彆氣",
"別腳":"彆腳",
"別致":"別緻",
"刨冰":"鉋冰",
"刨刀":"鉋刀",
"刨削":"鉋削",
"刨子":"鉋子",
"刨成":"鉋成",
"刨花":"鉋花",
"利欲":"利慾",
"刮倒":"颳倒",
"刮大":"刮大",
"刮大風":"颳大風",
"刮胡":"刮鬍",
"刮胡刀":"刮鬍刀",
"刮胡須":"刮鬍鬚",
"刮起":"颳起",
"刮須":"刮鬚",
"刮風":"颳風",
"制丹":"製丹",
"制件":"製件",
"制作":"製作",
"制做":"製做",
"制備":"製備",
"制冰":"製冰",
"制冷":"製冷",
"制出":"製出",
"制劑":"製劑",
"制品":"製品",
"制器":"製器",
"制圖":"製圖",
"制成":"製成",
"制播":"製播",
"制材":"製材",
"制毒":"製毒",
"制法":"製法",
"制為":"製為",
"制煉":"製煉",
"制片":"製片",
"制版":"製版",
"制程":"製程",
"制糖":"製糖",
"制紙":"製紙",
"制藥":"製藥",
"制衣":"製衣",
"制表":"製表",
"制造":"製造",
"制醋":"製醋",
"制面":"製麵",
"制面具":"製面具",
"制革":"製革",
"制鞋":"製鞋",
"制餡":"製餡",
"制鹽":"製鹽",
"刺不":"刺不",
"刺不准":"刺不準",
"刺准":"刺準",
"刻象":"刻像",
"刻象征服":"刻像征服",
"剃發":"剃髮",
"剃須":"剃鬚",
"則象":"則像",
"則象征戰":"則像征戰",
"則象征服":"則像征服",
"則采":"則採",
"剉刀":"銼刀",
"剉工":"銼工",
"剉平":"銼平",
"削發":"削髮",
"剌刀":"刺刀",
"前僕":"前僕",
"前僕後":"前仆後",
"前沖":"前衝",
"剩余":"剩餘",
"剩肴":"剩餚",
"剪彩":"剪綵",
"剪發":"剪髮",
"剪除":"翦除",
"副丑":"副丑",
"副丑相":"副醜相",
"割舍":"割捨",
"創制":"創製",
"劃不":"劃不",
"劃不來":"劃不來",
"劃來":"划來",
"劃去":"划去",
"劃單":"劃單",
"劃單人艇":"划單人艇",
"劃子":"划子",
"劃拳":"划拳",
"劃槳":"划槳",
"劃步":"划步",
"劃水":"划水",
"劃獨":"划獨",
"劃算":"划算",
"劃舟":"划舟",
"劃船":"划船",
"劃艇":"划艇",
"劃雙":"劃雙",
"劃雙人":"划雙人",
"劃龍":"划龍",
"劇斗":"劇鬥",
"劈裡":"劈里",
"力干":"力幹",
"力干擾":"力干擾",
"力干政":"力干政",
"力干涉":"力干涉",
"力干預":"力干預",
"力拼":"力拚",
"力斗":"力鬥",
"功勳":"功勛",
"功虧":"功虧",
"功虧一匱":"功虧一簣",
"加上":"加上",
"加卷":"加捲",
"加涂":"加塗",
"加裡":"加里",
"助理":"助理",
"劫余":"劫餘",
"劭雍":"邵雍",
"劾系":"劾繫",
"勁斗":"勁鬥",
"勇斗":"勇鬥",
"動蕩":"動盪",
"勘亂":"戡亂",
"勝余":"勝餘",
"勞力":"勞力",
"勞力士表":"勞力士錶",
"勞騷":"牢騷",
"勤朴":"勤樸",
"勳爵":"勛爵",
"勳章":"勛章",
"勳級":"勛級",
"勾干":"勾幹",
"包准":"包準",
"包函":"包涵",
"包卷":"包捲",
"包扎":"包紮",
"包谷":"包穀",
"北回":"北迴",
"北岳":"北嶽",
"北極":"北極",
"北極象":"北極象",
"北沖":"北衝",
"北游":"北遊",
"北裡":"北里",
"匣缽":"匣砵",
"匪干":"匪幹",
"匯刊":"彙刊",
"匯整":"彙整",
"匯編":"彙編",
"匯總":"彙總",
"匯纂":"彙纂",
"匯萃":"薈萃",
"匯輯":"彙輯",
"匯集":"彙集",
"區別":"區別",
"十余":"十餘",
"十余只":"十餘隻",
"十余裡":"十餘里",
"十分":"十分",
"十分丑":"十分醜",
"十分准":"十分準",
"十分干":"十分乾",
"十分的准":"十分的準",
"十卷":"十捲",
"十只":"十隻",
"十周":"十週",
"十天":"十天",
"十海":"十海",
"十海裡":"十海里",
"十裡":"十里",
"十裡余":"十里餘",
"十面":"十面",
"千余":"千餘",
"千余只":"千餘隻",
"千余裡":"千餘里",
"千只":"千隻",
"千層":"千層",
"千層面":"千層麵",
"千海":"千海",
"千海裡":"千海里",
"千裡":"千里",
"千鈞":"千鈞",
"千鈞一發":"千鈞一髮",
"千鎚":"千錘",
"卅余":"卅餘",
"升官":"陞官",
"升平":"昇平",
"升汞":"昇汞",
"升泰":"昇泰",
"升華":"昇華",
"升遷":"陞遷",
"升陽":"昇陽",
"半只":"半隻",
"半干":"半乾",
"卒悉":"窣窸",
"卒發":"捽髮",
"卒草":"捽草",
"卓約":"卓約",
"卓約風姿":"綽約風姿",
"南回":"南迴",
"南岳":"南嶽",
"南沖":"南衝",
"南游":"南遊",
"南裡":"南里",
"博斗":"博鬥",
"卡裡":"卡里",
"卯上":"卯上",
"卯上干":"卯上幹",
"印制":"印製",
"印象":"印象",
"印象是":"印象是",
"即像":"即像",
"即像征服":"即像征服",
"即像限制":"即像限制",
"即象":"即像",
"卷一":"卷一",
"卷一卷":"捲一捲",
"卷上":"捲上",
"卷不":"卷不",
"卷不起":"捲不起",
"卷了":"捲了",
"卷伏":"捲伏",
"卷伴":"捲伴",
"卷住":"捲住",
"卷來":"捲來",
"卷個":"捲個",
"卷兒":"捲兒",
"卷入":"捲入",
"卷出":"捲出",
"卷到":"捲到",
"卷動":"捲動",
"卷去":"捲去",
"卷向":"捲向",
"卷回":"捲回",
"卷圖":"捲圖",
"卷土":"捲土",
"卷土重來":"捲土重來",
"卷好":"捲好",
"卷射":"捲射",
"卷尺":"捲尺",
"卷往":"捲往",
"卷得":"捲得",
"卷心":"捲心",
"卷心菜":"捲心菜",
"卷成":"捲成",
"卷拂":"捲拂",
"卷掃":"捲掃",
"卷攏":"捲攏",
"卷旋":"捲旋",
"卷曲":"捲曲",
"卷款":"捲款",
"卷毛":"捲毛",
"卷浪":"捲浪",
"卷湧":"捲湧",
"卷滾":"捲滾",
"卷煙":"捲菸",
"卷發":"捲髮",
"卷碎":"捲碎",
"卷筒":"捲筒",
"卷簾":"捲簾",
"卷紙":"捲紙",
"卷縮":"捲縮",
"卷繞":"捲繞",
"卷纏":"捲纏",
"卷罩":"捲罩",
"卷翹":"捲翹",
"卷臥":"捲臥",
"卷至":"捲至",
"卷舌":"捲舌",
"卷舞":"捲舞",
"卷菸":"捲菸",
"卷落":"卷落",
"卷落葉":"捲落葉",
"卷著":"捲著",
"卷蕩":"捲蕩",
"卷衣":"卷衣",
"卷衣袖":"捲衣袖",
"卷袖":"捲袖",
"卷裹":"捲裹",
"卷襲":"捲襲",
"卷走":"捲走",
"卷起":"捲起",
"卷身":"捲身",
"卷軸":"捲軸",
"卷逃":"捲逃",
"卷進":"捲進",
"卷過":"捲過",
"卷鋪":"卷鋪",
"卷鋪蓋":"捲鋪蓋",
"卷鋼":"捲鋼",
"卷開":"捲開",
"卷須":"捲鬚",
"卷風":"捲風",
"卷飛":"捲飛",
"卻象":"卻像",
"厄立":"厄立",
"厄立特裡":"厄立特里",
"厘出":"釐出",
"厘定":"釐定",
"厘正":"釐正",
"厘清":"釐清",
"厘米":"釐米",
"厘訂":"釐訂",
"去卷":"去捲",
"去干":"去幹",
"去干一杯":"去乾一杯",
"去干了杯":"去乾了杯",
"去干洗":"去乾洗",
"去干淨":"去乾淨",
"去干耗":"去乾耗",
"去干著急":"去乾著急",
"又丑":"又醜",
"又咸":"又鹹",
"又干":"又幹",
"又干又":"又乾又",
"又干又硬":"又乾又硬",
"又干擾":"又干擾",
"又干政":"又干政",
"又干涉":"又干涉",
"又干淨":"又乾淨",
"又干預":"又干預",
"又斗":"又鬥",
"又松":"又鬆",
"又沖":"又沖",
"又沖掉":"又衝掉",
"又象":"又像",
"又雲":"又云",
"反卷":"反捲",
"反反":"反反",
"反反復復":"反反覆覆",
"反復":"反覆",
"反朴":"反朴",
"反朴歸真":"反璞歸真",
"反沖":"反衝",
"取余":"取餘",
"取准":"取準",
"取舍":"取捨",
"取諦":"取締",
"受人":"受人",
"受人之托":"受人之託",
"受托":"受託",
"受雇":"受僱",
"口佔":"口占",
"口干":"口乾",
"口干一":"口幹一",
"口干什":"口幹什",
"口干員":"口幹員",
"口干掉":"口幹掉",
"口干活":"口幹活",
"口干著":"口幹著",
"口干這":"口幹這",
"口干那":"口幹那",
"古朴":"古樸",
"古法":"古法",
"古法自制":"古法自製",
"古跡":"古蹟",
"古雲":"古云",
"另辟":"另闢",
"只余":"只餘",
"只兔":"隻兔",
"只大":"只大",
"只大老鼠":"隻大老鼠",
"只字":"隻字",
"只巨":"只巨",
"只巨獸":"隻巨獸",
"只影":"隻影",
"只怪":"只怪",
"只怪物":"隻怪物",
"只怪獸":"隻怪獸",
"只手":"隻手",
"只招":"只招",
"只招子":"隻招子",
"只母":"只母",
"只母老虎":"隻母老虎",
"只涂":"只塗",
"只牛":"隻牛",
"只犬":"隻犬",
"只狐":"只狐",
"只狐狸":"隻狐狸",
"只狗":"隻狗",
"只狼":"隻狼",
"只猛":"只猛",
"只猛獸":"隻猛獸",
"只猴":"隻猴",
"只獅":"隻獅",
"只畜":"只畜",
"只畜生":"隻畜生",
"只眼":"隻眼",
"只羊":"隻羊",
"只老":"只老",
"只老狐狸":"隻老狐狸",
"只老虎":"隻老虎",
"只老鼠":"隻老鼠",
"只聲":"只聲",
"只聲不出":"隻聲不出",
"只虎":"隻虎",
"只蛋":"隻蛋",
"只言":"只言",
"只言片字":"隻言片字",
"只言片語":"隻言片語",
"只豬":"隻豬",
"只貓":"隻貓",
"只身":"隻身",
"只身分":"隻身份",
"只野":"只野",
"只野獸":"隻野獸",
"只雞":"隻雞",
"只馬":"隻馬",
"只騾":"隻騾",
"只驢":"隻驢",
"只鬼":"隻鬼",
"只鳥":"隻鳥",
"只鳳":"隻鳳",
"只鴨":"隻鴨",
"只鵝":"隻鵝",
"只鷹":"隻鷹",
"只鹿":"隻鹿",
"叫於":"叫于",
"叮叮":"叮叮",
"叮叮當當":"叮叮噹噹",
"叮當":"叮噹",
"可以":"可以",
"可以干擾":"可以干擾",
"可以干涉":"可以干涉",
"可以干預":"可以干預",
"可以象":"可以像",
"可余":"可餘",
"可干":"可干",
"可干拭":"可乾拭",
"可干擦":"可乾擦",
"可干洗":"可乾洗",
"可干濕":"可乾濕",
"可干燥":"可乾燥",
"可干衣":"可乾衣",
"可干製":"可乾製",
"可干飲":"可乾飲",
"可緊":"可緊",
"可緊可松":"可緊可鬆",
"可象":"可像",
"可象征戰":"可像征戰",
"可贊":"可讚",
"可采":"可採",
"台凳":"檯凳",
"台制":"台製",
"台子":"檯子",
"台布":"檯布",
"台布下":"台佈下",
"台布告":"台佈告",
"台布滿":"台佈滿",
"台布置":"台佈置",
"台布署":"台佈署",
"台布道":"台佈道",
"台布防":"台佈防",
"台干":"台幹",
"台歷":"檯曆",
"台灣":"台灣",
"台灣制":"台灣製",
"台灣制定":"台灣制定",
"台灣制度":"台灣制度",
"台灣制訂":"台灣制訂",
"台燈":"檯燈",
"台球":"檯球",
"台鐘":"檯鐘",
"台面":"檯面",
"台風":"颱風",
"史跡":"史蹟",
"右沖":"右衝",
"叼擾":"叨擾",
"叼難":"刁難",
"吃不":"吃不",
"吃不准":"吃不準",
"吃准":"吃準",
"吃完":"吃完",
"吃完面":"吃完麵",
"吃干":"吃乾",
"吃干了":"吃乾了",
"吃茶":"喫茶",
"吃著":"吃著",
"吃過":"吃過",
"吃過面":"吃過麵",
"吃面":"吃麵",
"各干":"各干",
"各干各":"各幹各",
"合並":"合併",
"合並不":"合並不",
"合並且":"合並且",
"合並非":"合並非",
"合伙":"合夥",
"合府":"闔府",
"合斗":"合鬥",
"合眼":"闔眼",
"合第":"闔第",
"吉佔":"吉占",
"吉裡":"吉里",
"吊信":"弔信",
"吊取":"弔取",
"吊古":"弔古",
"吊唁":"弔唁",
"吊問":"弔問",
"吊喉":"弔喉",
"吊喪":"弔喪",
"吊場":"弔場",
"吊奠":"弔奠",
"吊孝":"弔孝",
"吊客":"弔客",
"吊影":"弔影",
"吊念":"弔念",
"吊慰":"弔慰",
"吊文":"弔文",
"吊旗":"弔旗",
"吊書":"弔書",
"吊死":"吊死",
"吊死問疾":"弔死問疾",
"吊民":"弔民",
"吊民伐罪":"弔民伐罪",
"吊祭":"弔祭",
"吊系":"吊繫",
"吊考":"弔考",
"吊膀":"吊膀",
"吊膀子":"弔膀子",
"吊詞":"弔詞",
"吊詭":"弔詭",
"吊賀":"弔賀",
"吊錢":"弔錢",
"同仇":"同仇",
"同仇敵慨":"同仇敵愾",
"同伙":"同夥",
"同游":"同遊",
"名字":"名字",
"名字是於":"名字是于",
"名跡":"名蹟",
"后衛":"後衛",
"吐干":"吐乾",
"向准":"向準",
"向午":"晌午",
"向外":"向外",
"向外沖":"向外衝",
"向導":"嚮導",
"向導游":"嚮導遊",
"向往":"嚮往",
"向後":"向後",
"向後沖":"向後衝",
"向應":"嚮應",
"君子":"君子",
"君子好求":"君子好逑",
"吞並":"吞併",
"吞咽":"吞嚥",
"吟游":"吟遊",
"吧台":"吧檯",
"吮干":"吮乾",
"吵斗":"吵鬥",
"吸干":"吸乾",
"吸得":"吸得",
"吸得干干":"吸得乾乾",
"吸煙":"吸菸",
"吹卷":"吹捲",
"吹干":"吹乾",
"吹發":"吹髮",
"吹胡":"吹鬍",
"吹須":"吹鬚",
"呂後":"呂后",
"呆致":"呆致",
"呆致致":"呆緻緻",
"告僥":"告饒",
"告別":"告別",
"周一":"週一",
"周一岳":"周一嶽",
"周三":"週三",
"周二":"週二",
"周五":"週五",
"周休":"週休",
"周六":"週六",
"周刊":"週刊",
"周四":"週四",
"周報":"週報",
"周年":"週年",
"周息":"週息",
"周數":"週數",
"周日":"週日",
"周會":"週會",
"周期":"週期",
"周末":"週末",
"周歲":"週歲",
"周歷":"週曆",
"周波":"週波",
"周游":"周遊",
"周潤":"周潤",
"周潤發":"周潤發",
"周濟":"賙濟",
"周而":"周而",
"周而復始":"週而復始",
"周薪":"週薪",
"周記":"週記",
"周遭":"週遭",
"呷干":"呷乾",
"呼卷":"呼捲",
"咀咽":"咀嚥",
"咎征":"咎徵",
"咕老":"咕老",
"咕老肉":"咕咾肉",
"咨商":"諮商",
"咨詢":"諮詢",
"咨諏":"諮諏",
"咨謀":"諮謀",
"咨議":"諮議",
"咬姜":"咬姜",
"咬姜呷醋":"咬薑呷醋",
"咬字":"咬字",
"咬字不准":"咬字不準",
"咸味":"鹹味",
"咸咸":"鹹鹹",
"咸土":"鹹土",
"咸度":"鹹度",
"咸得":"鹹得",
"咸水":"鹹水",
"咸海":"鹹海",
"咸淡":"鹹淡",
"咸湖":"鹹湖",
"咸湯":"鹹湯",
"咸濕":"鹹濕",
"咸的":"鹹的",
"咸肉":"鹹肉",
"咸菜":"鹹菜",
"咸蛋":"鹹蛋",
"咸豬":"鹹豬",
"咸類":"鹹類",
"咸魚":"鹹魚",
"咸鴨":"鹹鴨",
"咸鹵":"鹹鹵",
"咽一":"咽一",
"咽一口":"嚥一口",
"咽下":"嚥下",
"咽不":"咽不",
"咽不下":"嚥不下",
"咽不了":"嚥不了",
"咽了":"嚥了",
"咽住":"嚥住",
"咽入":"嚥入",
"咽口":"咽口",
"咽口水":"嚥口水",
"咽唾":"嚥唾",
"咽嚼":"嚥嚼",
"咽回":"嚥回",
"咽得":"咽得",
"咽得下":"嚥得下",
"咽氣":"嚥氣",
"咽苦":"咽苦",
"咽苦吞甘":"嚥苦吞甘",
"咽著":"嚥著",
"咽食":"嚥食",
"哀吊":"哀弔",
"品匯":"品彙",
"品嘗":"品嚐",
"哆羅":"哆羅",
"哆羅哆嗦":"哆囉哆嗦",
"哈羅":"哈囉",
"哈裡":"哈里",
"員干":"員干",
"員干將":"員幹將",
"哥裡":"哥里",
"哪裡":"哪裡",
"哪象":"哪像",
"哲雲":"哲云",
"唁吊":"唁弔",
"唇干":"唇乾",
"唇燥":"唇燥",
"唇燥舌干":"唇燥舌乾",
"唱游":"唱遊",
"唾面":"唾面",
"唾面自干":"唾面自乾",
"商周":"商周",
"商歷":"商曆",
"商鋪":"商舖",
"啟發":"啟發",
"啷當":"啷噹",
"喂動":"喂動",
"喂動物":"餵動物",
"喂它":"餵牠",
"喂羊":"餵羊",
"喂豬":"餵豬",
"喂馬":"餵馬",
"喂魚":"餵魚",
"善斗":"善鬥",
"喉干":"喉乾",
"喉干舌燥":"喉乾舌燥",
"喉頭":"喉頭",
"喉頭發干":"喉頭發乾",
"喑啞":"瘖啞",
"喝一":"喝一",
"喝一壇":"喝一罈",
"喝三":"喝三",
"喝三壇":"喝三罈",
"喝兩":"喝兩",
"喝兩壇":"喝兩罈",
"喝干":"喝乾",
"喝斗":"喝斗",
"喝斗聲":"喝鬥聲",
"喝白":"喝白",
"喝白干":"喝白乾",
"喧染":"渲染",
"單單":"單單",
"單於":"單于",
"嗟籲":"嗟吁",
"嘆服":"歎服",
"嘆為":"歎為",
"嘆籲":"嘆吁",
"嘆羨":"歎羨",
"嘆賞":"歎賞",
"嘍羅":"嘍囉",
"嘩眾":"嘩眾",
"嘩眾取寵":"譁眾取寵",
"嘮叼":"嘮叨",
"嘴干":"嘴乾",
"嘹亮":"嘹喨",
"噓唏":"歔欷",
"噪動":"譟動",
"噪詐":"譟詐",
"噫籲":"噫吁",
"噴涂":"噴塗",
"嚕嚕":"嚕嚕",
"嚕嚕蘇蘇":"嚕嚕囌囌",
"嚕蘇":"嚕囌",
"嚴複":"嚴復",
"囉裡":"囉里",
"囑托":"囑託",
"四個":"四個",
"四只":"四隻",
"四天":"四天",
"四海":"四海",
"四海裡":"四海里",
"四舍":"四捨",
"四裡":"四里",
"四裡余":"四里餘",
"回傭":"回佣",
"回光":"回光",
"回光反照":"迴光反照",
"回光返照":"迴光返照",
"回卷":"回捲",
"回圈":"迴圈",
"回報":"回報",
"回廊":"迴廊",
"回復":"回覆",
"回文":"回文",
"回文詩":"迴文詩",
"回旋":"迴旋",
"回歷":"回曆",
"回沖":"回衝",
"回游":"迴游",
"回然":"迥然",
"回環":"迴環",
"回紋":"迴紋",
"回繞":"迴繞",
"回翔":"迴翔",
"回腸":"迴腸",
"回腸蕩氣":"迴腸蕩氣",
"回蕩":"迴蕩",
"回誦":"迴誦",
"回避":"迴避",
"回鑾":"迴鑾",
"回陽":"回陽",
"回陽蕩氣":"迴陽蕩氣",
"回響":"迴響",
"回響當":"迴響當",
"回風":"迴風",
"因奸":"因奸",
"因奸成孕":"因姦成孕",
"困乏":"睏乏",
"困倦":"睏倦",
"困意":"睏意",
"困獸":"困獸",
"困獸之斗":"困獸之鬥",
"困獸斗":"困獸鬥",
"困獸猶斗":"困獸猶鬥",
"囹圍":"囹圉",
"固定":"固定",
"固定制":"固定制",
"圈梁":"圈樑",
"國制":"國製",
"國制定":"國制定",
"國制度":"國制度",
"國制訂":"國制訂",
"國家":"國家",
"國小":"國小",
"國小只":"國小只",
"國歷":"國曆",
"國歷代":"國歷代",
"國歷任":"國歷任",
"國歷史":"國歷史",
"國歷屆":"國歷屆",
"國歷年":"國歷年",
"國歷盡":"國歷盡",
"國歷經":"國歷經",
"國歷險":"國歷險",
"園游":"園游",
"園游會":"園遊會",
"圓椎":"圓錐",
"圖象":"圖像",
"團伙":"團夥",
"團子":"糰子",
"團粉":"糰粉",
"土制":"土製",
"地一":"地一",
"地一卷":"地一捲",
"地卷":"地捲",
"地干":"地干",
"地干吧":"地幹吧",
"地干杯":"地乾杯 ",
"地干燥":"地乾燥",
"地干裂":"地乾裂",
"地志":"地誌",
"地沖":"地衝",
"均沾":"均霑",
"坎頂":"崁頂",
"坐著":"坐著",
"坤范":"坤範",
"坦護":"袒護",
"垂發":"垂髮",
"垂范":"垂範",
"型狀":"形狀",
"型范":"型範",
"埃裡":"埃裡",
"埃裡溫":"埃里溫",
"埔裡":"埔里",
"基准":"基準",
"基干":"基幹",
"報廢":"報廢",
"報廢後":"報廢後",
"報道":"報導",
"塑象":"塑像",
"塔裡":"塔裡",
"塔裡木":"塔里木",
"墓志":"墓誌",
"墜胎":"墮胎",
"增辟":"增闢",
"墨沈":"墨沈",
"墨沈未干":"墨瀋未乾",
"墾辟":"墾闢",
"壇佳":"壇佳",
"壇佳釀":"罈佳釀",
"壇壇":"壇壇",
"壇壇罐罐":"罈罈罐罐",
"壇女":"壇女",
"壇女兒紅":"罈女兒紅",
"壇好":"壇好",
"壇好酒":"罈好酒",
"壇子":"罈子",
"壇燒":"壇燒",
"壇燒刀子":"罈燒刀子",
"壇白":"壇白",
"壇白干":"罈白干",
"壇美":"壇美",
"壇美酒":"罈美酒",
"壇老":"壇老",
"壇老酒":"罈老酒",
"壇酒":"罈酒",
"壇醋":"罈醋",
"壇陳":"壇陳",
"壇陳年":"罈陳年",
"壇騞":"罈騞",
"壇高":"壇高",
"壇高粱":"罈高粱",
"壑然":"豁然",
"壓咸":"壓鹹",
"壓面":"壓面",
"壓面棍":"壓麵棍",
"壞簽":"壞籤",
"壺范":"壺範",
"壽面":"壽麵",
"夏歷":"夏曆",
"外制":"外製",
"外強":"外強",
"外強中干":"外強中乾",
"外御":"外御",
"外御強敵":"外禦強敵",
"外松":"外松",
"外松內緊":"外鬆內緊",
"外涂":"外塗",
"多丑":"多醜",
"多余":"多餘",
"多出":"多出",
"多出電影":"多齣電影",
"多少":"多少",
"多少只":"多少隻",
"多干":"多干",
"多干了":"多乾了",
"多干干":"多乾乾",
"多干擾":"多干擾",
"多干杯":"多乾杯",
"多干涉":"多干涉",
"多干淨":"多乾淨",
"多干燥":"多乾燥",
"多干爽":"多乾爽",
"多干系":"多干系",
"多干脆":"多乾脆",
"多干預":"多干預",
"多海":"多海",
"多海裡":"多海里",
"多裡":"多里",
"多麼":"多麼",
"多麼丑":"多麼醜",
"夜光":"夜光",
"夜光表":"夜光錶",
"夜游":"夜遊",
"夠不":"夠不",
"夠不著":"搆不著",
"夠准":"夠準",
"夠怨":"搆怨",
"夠涂":"夠塗",
"夠贊":"夠讚",
"夠鐘":"夠鐘",
"夠鐘情":"夠鍾情",
"夠鐘愛":"夠鍾愛",
"夢回":"夢迴",
"夢游":"夢遊",
"夢系":"夢繫",
"大丑":"大醜",
"大伙":"大夥",
"大伙人":"大夥人",
"大伙兒":"大夥兒",
"大利":"大利",
"大利面":"大利麵",
"大只":"大隻",
"大小":"大小",
"大小只":"大小只",
"大干":"大干",
"大干特干":"大幹特幹",
"大斗":"大鬥",
"大歷":"大曆",
"大歷史":"大歷史",
"大潤":"大潤",
"大潤發":"大潤發",
"大衝":"大沖",
"大衝擊":"大衝擊",
"大贊":"大讚",
"天佑":"天祐",
"天干":"天干",
"天干物燥":"天乾物燥",
"天後":"天后",
"天生":"天生",
"天生干":"天生幹",
"天翻":"天翻",
"天翻地復":"天翻地覆",
"天象":"天象",
"太不":"太不",
"太不准":"太不準",
"太丑":"太醜",
"太准":"太準",
"太初":"太初",
"太初歷":"太初曆",
"太咸":"太鹹",
"太太":"太太",
"太干":"太乾",
"太後":"太后",
"太後面":"太後面",
"太松":"太鬆",
"太監":"太監",
"太象":"太像",
"夫奸":"夫姦",
"夫役":"伕役",
"失准":"失準",
"夾衣":"裌衣",
"夾襖":"裌襖",
"奇丑":"奇醜",
"奇准":"奇準",
"奇跡":"奇蹟",
"奏折":"奏摺",
"奕棋":"弈棋",
"奧斯":"奧斯",
"奧斯卡":"奧斯卡",
"奪斗":"奪鬥",
"奪杯":"奪盃",
"奮斗":"奮鬥",
"奸凶":"姦凶",
"奸夫":"姦夫",
"奸婦":"姦婦",
"奸屍":"姦屍",
"奸情":"姦情",
"奸拐":"姦拐",
"奸殺":"姦殺",
"奸污":"姦污",
"奸淫":"姦淫",
"奸盜":"姦盜",
"奸通":"姦通",
"她丑":"她醜",
"她干":"她幹",
"她干兒子":"她乾兒子",
"她干女兒":"她乾女兒",
"她干擾":"她干擾",
"她干涉":"她干涉",
"她干淨":"她乾淨",
"她干爹":"她乾爹",
"她干脆":"她乾脆",
"她干預":"她干預",
"她象":"她像",
"好丑":"好醜",
"好像":"好像",
"好像征式":"好象徵式",
"好像征性":"好象徵性",
"好准":"好準",
"好咸":"好鹹",
"好困":"好困",
"好困吧":"好睏吧",
"好困啊":"好睏啊",
"好好":"好好",
"好好地干":"好好地幹",
"好好干":"好好幹",
"好干":"好幹",
"好斗":"好鬥",
"好煙":"好菸",
"好簽":"好籤",
"好象":"好像",
"如何":"如何",
"如何干":"如何幹",
"如坐":"如坐",
"如坐針毯":"如坐針氈",
"如果":"如果",
"如果象":"如果像",
"姑負":"辜負",
"姓名":"姓名",
"姓名是於":"姓名是于",
"姓於":"姓于",
"姓鐘":"姓鍾",
"委托":"委託",
"姜就":"姜就",
"姜就是老":"薑就是老",
"姜愈":"姜愈",
"姜愈老":"薑愈老",
"姜是":"薑是",
"姜是老":"薑是老",
"姜末":"薑末",
"姜汁":"薑汁",
"姜油":"薑油",
"姜湯":"薑湯",
"姜片":"薑片",
"姜糖":"薑糖",
"姜絲":"薑絲",
"姜老":"姜老",
"姜老辣":"薑老辣",
"姜花":"薑花",
"姜茶":"薑茶",
"姜蔥":"薑蔥",
"姜還":"姜還",
"姜還是老":"薑還是老",
"姜醋":"薑醋",
"姜餅":"薑餅",
"姜黃":"薑黃",
"姣潔":"皎潔",
"娉亭":"娉婷",
"婀挪":"婀娜",
"嫌凶":"嫌兇",
"嬉游":"嬉遊",
"嬌揉":"嬌揉",
"嬌揉造作":"矯揉造作",
"嬖幸":"嬖倖",
"嬴余":"嬴餘",
"子姜":"子薑",
"子鍾":"子鐘",
"子雲":"子云",
"字匯":"字彙",
"存折":"存摺",
"孱雜":"羼雜",
"它象":"它像",
"宅弟":"宅第",
"宅紫":"奼紫",
"守御":"守禦",
"安全":"安全",
"宏基":"宏碁",
"定准":"定準",
"定制":"定製",
"定干":"定幹",
"定干吧":"定幹吧",
"客游":"客遊",
"宣傳":"宣傳",
"宣傳周":"宣傳週",
"宣布":"宣佈",
"室內":"室內",
"宦游":"宦遊",
"宴游":"宴遊",
"家丑":"家醜",
"家伙":"傢伙",
"家俱":"傢俱",
"家私":"傢俬",
"家裡":"家裡",
"宸游":"宸遊",
"容范":"容範",
"寂聊":"寂寥",
"寄托":"寄託",
"密布":"密佈",
"密折":"密摺",
"密致":"密緻",
"富余":"富餘",
"寒倉":"寒傖",
"寒喧":"寒暄",
"寒栗":"寒慄",
"寒而":"寒而",
"寒而栗":"寒而慄",
"寡欲":"寡慾",
"實干":"實幹",
"實象":"實像",
"寧舍":"寧捨",
"寫字":"寫字",
"寫字台":"寫字檯",
"寬松":"寬鬆",
"寬范":"寬範",
"寸余":"寸餘",
"封後":"封后",
"射不":"射不",
"射不准":"射不準",
"射准":"射準",
"射雕":"射鵰",
"專干":"專幹",
"尊范":"尊範",
"尋准":"尋準",
"尋麻":"蕁麻",
"對准":"對準",
"對干":"對幹",
"對華":"對華",
"對著":"對著",
"對象":"對象",
"對象征":"對象徵",
"導游":"導遊",
"小丑":"小丑",
"小丑丫鬟":"小醜丫鬟",
"小伙":"小夥",
"少干":"少幹",
"少干擾":"少干擾",
"少干涉":"少干涉",
"少干系":"少干係",
"少干預":"少干預",
"少沖":"少衝",
"少海":"少海",
"少海裡":"少海里",
"少裡":"少里",
"尚余":"尚餘",
"尤如":"猶如",
"尤帶":"猶帶",
"尤憐":"猶憐",
"尤疑":"猶疑",
"尤裡":"尤里",
"尤豫":"猶豫",
"就像":"就像",
"就像征":"就象徵",
"就吃":"就吃",
"就吃干":"就吃乾",
"就干":"就干",
"就干一":"就幹一",
"就干一杯":"就乾一杯",
"就干吧":"就幹吧",
"就干擾":"就干擾",
"就干杯":"就乾杯",
"就干涉":"就干涉",
"就干淨":"就乾淨",
"就干爽":"就乾爽",
"就干脆":"就乾脆",
"就干預":"就干預",
"就范":"就範",
"就象":"就像",
"尺余":"尺餘",
"局促":"侷促",
"局蹙":"跼蹙",
"局躅":"跼躅",
"局限":"侷限",
"居裡":"居里",
"屋內":"屋內",
"屋梁":"屋樑",
"屍位":"尸位",
"屍祿":"尸祿",
"展布":"展佈",
"屢僕":"屢仆",
"層理":"層理",
"屬制":"屬製",
"屯扎":"屯紮",
"山岳":"山嶽",
"山涯":"山崖",
"山羊":"山羊",
"山羊胡":"山羊鬍",
"山羊須":"山羊鬚",
"岳峙":"嶽峙",
"岳立":"嶽立",
"峇裡":"峇里",
"峇釐":"峇里",
"峰回":"峰迴",
"島煉":"島鍊",
"嵇首":"稽首",
"巡回":"巡迴",
"巡戈":"巡弋",
"巡游":"巡遊",
"工余":"工餘",
"左沖":"左衝",
"巧干":"巧幹",
"巨制":"巨製",
"巨子":"鉅子",
"巨細":"鉅細",
"巨細靡遺":"鉅細靡遺",
"巨須":"巨鬚",
"巨鹿":"鉅鹿",
"己干":"己幹",
"已余":"已餘",
"已愈":"已癒",
"已松":"已鬆",
"已松下":"已鬆下",
"已經":"已經",
"已經斗":"已經鬥",
"已經象":"已經像",
"已象":"已像",
"已象征戰":"已像征戰",
"已象征服":"已像征服",
"巴爾":"巴爾",
"巴爾干":"巴爾幹",
"巴西":"巴西",
"巴釐":"峇里",
"布一":"布一",
"布一個":"佈一個",
"布伏":"佈伏",
"布個":"佈個",
"布兵":"佈兵",
"布告":"佈告",
"布壇":"佈壇",
"布導":"佈導",
"布局":"佈局",
"布崗":"佈崗",
"布於":"佈於",
"布施":"佈施",
"布景":"佈景",
"布滿":"佈滿",
"布疑":"布疑",
"布疑陣":"佈疑陣",
"布置":"佈置",
"布署":"佈署",
"布著":"佈著",
"布裡":"布里",
"布裡斯托":"布里斯托",
"布谷":"布穀",
"布防":"佈防",
"布陣":"佈陣",
"布雷":"佈雷",
"希拉":"希拉",
"希拉裡":"希拉里",
"帕特":"帕特",
"帕特裡":"帕特里",
"帝後":"帝后",
"師云":"師云",
"師云而雲":"師云而云",
"師范":"師範",
"席卷":"席捲",
"席子":"蓆子",
"帶征":"帶徵",
"帶發":"帶髮",
"帶著":"帶著",
"常干":"常幹",
"帽瓔":"帽纓",
"幡間":"墦間",
"干一":"幹一",
"干一壇":"乾一罈",
"干一壇法":"幹一壇法",
"干一杯":"乾一杯",
"干一碗":"乾一碗",
"干上":"幹上",
"干下":"干下",
"干下去":"幹下去",
"干不":"幹不",
"干不下":"幹不下",
"干不干":"幹不幹",
"干不干杯":"乾不乾杯",
"干不干淨":"乾不乾淨",
"干了":"幹了",
"干事":"幹事",
"干井":"乾井",
"干些":"幹些",
"干什":"幹什",
"干他":"幹他",
"干件":"幹件",
"干任":"干任",
"干任何":"幹任何",
"干份":"幹份",
"干伸":"干伸",
"干伸舌":"乾伸舌",
"干似":"乾似",
"干何":"干何",
"干何事":"幹何事",
"干你":"幹你",
"干你娘":"幹你娘",
"干個":"幹個",
"干假":"幹假",
"干傻":"干傻",
"干傻事":"幹傻事",
"干兒":"乾兒",
"干兩":"干兩",
"干兩年":"幹兩年",
"干兩杯":"乾兩杯",
"干冒":"干冒",
"干冒煙":"乾冒煙",
"干冰":"乾冰",
"干冷":"乾冷",
"干出":"幹出",
"干別":"干別",
"干別的":"幹別的",
"干到":"幹到",
"干勁":"幹勁",
"干化":"乾化",
"干又":"干又",
"干又熱":"乾又熱",
"干吏":"幹吏",
"干咳":"乾咳",
"干咽":"乾嚥",
"干品":"乾品",
"干員":"幹員",
"干哥":"乾哥",
"干哪":"幹哪",
"干哭":"乾哭",
"干啞":"乾啞",
"干啥":"幹啥",
"干嗎":"幹嗎",
"干嘔":"乾嘔",
"干嘛":"幹嘛",
"干嚎":"乾嚎",
"干土":"乾土",
"干坐":"干坐",
"干坐著":"乾坐著",
"干坤":"乾坤",
"干壇":"乾罈",
"干壇主":"幹壇主",
"干壇法":"幹壇法",
"干壞":"干壞",
"干壞事":"幹壞事",
"干大":"干大",
"干大事":"幹大事",
"干女":"干女",
"干女兒":"乾女兒",
"干女友":"幹女友",
"干女同事":"幹女同事",
"干女婿":"乾女婿",
"干女教師":"幹女教師",
"干她":"幹她",
"干好":"幹好",
"干妹":"乾妹",
"干姊":"乾姊",
"干姐":"乾姐",
"干姜":"乾薑",
"干娘":"乾娘",
"干媽":"乾媽",
"干季":"乾季",
"干孫":"乾孫",
"干完":"幹完",
"干就":"干就",
"干就干":"幹就幹",
"干屍":"乾屍",
"干巴":"乾巴",
"干巴巴":"乾巴巴",
"干布":"乾布",
"干干":"乾乾",
"干干巴巴":"乾乾巴巴",
"干干淨淨":"乾乾淨淨",
"干干爽爽":"乾乾爽爽",
"干干瘦瘦":"乾乾瘦瘦",
"干干的":"乾乾的",
"干干脆脆":"乾乾脆脆",
"干幾":"干幾",
"干幾件":"幹幾件",
"干幾宗":"幹幾宗",
"干幾手":"乾幾手",
"干幾杯":"乾幾杯",
"干幾樁":"幹幾樁",
"干幾番":"幹幾番",
"干幾碗":"乾幾碗",
"干幾輩":"幹幾輩",
"干底":"乾底",
"干弋":"干戈",
"干式":"乾式",
"干弟":"乾弟",
"干強":"干強",
"干強盜":"幹強盜",
"干得":"幹得",
"干得一杯":"乾得一杯",
"干得三杯":"乾得三杯",
"干得兩杯":"乾得兩杯",
"干得很":"乾得很",
"干性":"乾性",
"干慣":"幹慣",
"干成":"幹成",
"干我":"幹我",
"干手":"干手",
"干手淨腳":"乾手淨腳",
"干才":"幹才",
"干打":"干打",
"干打雷":"乾打雷",
"干掉":"幹掉",
"干掉一杯":"乾掉一杯",
"干掉一瓶":"乾掉一瓶",
"干掉一碗":"乾掉一碗",
"干掉杯":"乾掉杯",
"干掉這杯":"乾掉這杯",
"干掉這碗":"乾掉這碗",
"干掉那杯":"乾掉那杯",
"干掉那碗":"乾掉那碗",
"干探":"幹探",
"干撇":"干撇",
"干撇下":"乾撇下",
"干擱":"乾擱",
"干數":"干數",
"干數杯":"乾數杯",
"干料":"乾料",
"干旱":"乾旱",
"干曬":"乾曬",
"干材":"幹材",
"干杯":"乾杯",
"干果":"乾果",
"干枝":"乾枝",
"干枯":"乾枯",
"干架":"幹架",
"干柴":"乾柴",
"干校":"幹校",
"干梅":"乾梅",
"干樁":"幹樁",
"干正":"干正",
"干正事":"幹正事",
"干此":"幹此",
"干此壇":"乾此罈",
"干此杯":"乾此杯",
"干毛":"干毛",
"干毛巾":"乾毛巾",
"干江":"灨江",
"干沙":"乾沙",
"干泥":"乾泥",
"干洗":"乾洗",
"干活":"幹活",
"干流":"幹流",
"干涸":"乾涸",
"干淨":"乾淨",
"干清":"干清",
"干清宮":"乾清宮",
"干渴":"乾渴",
"干澀":"乾澀",
"干澗":"乾澗",
"干濕":"乾濕",
"干濕發":"乾濕髮",
"干焦":"乾焦",
"干熬":"乾熬",
"干熱":"乾熱",
"干燒":"乾燒",
"干燥":"乾燥",
"干爸":"乾爸",
"干爹":"乾爹",
"干爽":"乾爽",
"干犯":"干犯",
"干犯法":"幹犯法",
"干球":"幹球",
"干甚":"幹甚",
"干生":"干生",
"干生氣":"乾生氣",
"干疤":"乾疤",
"干瘦":"乾瘦",
"干癟":"乾癟",
"干癮":"乾癮",
"干發":"乾髮",
"干的":"干的",
"干的好":"幹的好",
"干盡":"幹盡",
"干盡一壇":"乾盡一磹",
"干盡一壺":"乾盡一壺",
"干盡一杯":"乾盡一杯",
"干盡一碗":"乾盡一碗",
"干眼":"乾眼",
"干瞪":"乾瞪",
"干硬":"乾硬",
"干窘":"乾窘",
"干站":"干站",
"干站著":"乾站著",
"干笑":"乾笑",
"干等":"乾等",
"干粉":"乾粉",
"干粗":"干粗",
"干粗活":"幹粗活",
"干糧":"乾糧",
"干系":"干係",
"干細":"干細",
"干細胞":"幹細胞",
"干結":"乾結",
"干絲":"乾絲",
"干綱":"干綱",
"干綱不振":"乾綱不振",
"干線":"幹線",
"干練":"幹練",
"干耗":"乾耗",
"干聲":"乾聲",
"干肉":"乾肉",
"干肉販":"幹肉販",
"干股":"乾股",
"干脆":"乾脆",
"干花":"乾花",
"干草":"乾草",
"干菜":"乾菜",
"干葉":"乾葉",
"干著":"幹著",
"干著急":"乾著急",
"干薪":"乾薪",
"干號":"乾號",
"干衣":"乾衣",
"干裂":"乾裂",
"干警":"幹警",
"干貨":"乾貨",
"干貨物":"幹貨物",
"干買":"干買",
"干買賣":"幹買賣",
"干起":"幹起",
"干路":"幹路",
"干辦":"幹辦",
"干農":"干農",
"干農活":"幹農活",
"干透":"乾透",
"干這":"幹這",
"干這一杯":"乾這一杯",
"干這杯":"乾這杯",
"干過":"幹過",
"干過一杯":"乾過一杯",
"干過杯":"乾過杯",
"干過癮":"乾過癮",
"干道":"幹道",
"干那":"幹那",
"干那一杯":"乾那一杯",
"干那杯":"乾那杯",
"干部":"幹部",
"干酪":"乾酪",
"干醋":"乾醋",
"干錯":"幹錯",
"干陽":"乾陽",
"干隆":"乾隆",
"干電":"干電",
"干電池":"乾電池",
"干面":"乾麵",
"干面前":"乾面前",
"干飯":"乾飯",
"干麼":"幹麼",
"干點":"幹點",
"干！":"幹！",
"平准":"平準",
"平台":"平台",
"年余":"年餘",
"年准":"年准",
"年准到":"年準到",
"年歷":"年曆",
"年歷史":"年歷史",
"幸免":"倖免",
"幸存":"倖存",
"幸幸":"倖幸",
"幽郁":"幽鬱",
"幾乎":"幾乎",
"幾乎象":"幾乎像",
"幾個":"幾個",
"幾出":"幾齣",
"幾只":"幾隻",
"幾周":"幾週",
"幾天":"幾天",
"幾天后":"幾天後",
"幾案":"几案",
"幾海":"幾海",
"幾海裡":"幾海里",
"幾淨":"几淨",
"幾裡":"幾里",
"庇裡":"庇裡",
"庇裡牛斯":"庇里牛斯",
"床席":"床蓆",
"床第":"床笫",
"底裡":"底里",
"店伙":"店夥",
"店鋪":"店舖",
"座象":"座像",
"康愈":"康癒",
"廚余":"廚餘",
"廝斗":"廝鬥",
"廝斗然":"廝陡然",
"廢後":"廢后",
"廣布":"廣佈",
"廣征":"廣徵",
"延長":"延長",
"廿余":"廿餘",
"弄干":"弄乾",
"弄松":"弄鬆",
"弄面":"弄面",
"弄面吃":"弄麵吃",
"引發":"引發",
"弘歷":"弘曆",
"弛騁":"馳騁",
"弦樂":"絃樂",
"弦歌":"絃歌",
"弦琴":"絃琴",
"弦管":"絃管",
"弦索":"絃索",
"弦線":"絃線",
"弱干":"弱幹",
"強力":"強力",
"強力干性":"強力乾性",
"強力干濕":"強力乾濕",
"強台":"強颱",
"強奸":"強姦",
"強干":"強幹",
"強干擾":"強干擾",
"強干杯":"強乾杯",
"強干涉":"強干涉",
"強干脆":"強乾脆",
"強干預":"強干預",
"強征":"強徵",
"強御":"強禦",
"強沖":"強衝",
"強界":"疆界",
"彈子":"彈子",
"彈子台":"彈子檯",
"彈涂":"彈塗",
"彈珠":"彈珠",
"彈珠台":"彈珠檯",
"彌山":"彌山",
"彌山遍野":"瀰山遍野",
"彌彌":"瀰瀰",
"彌散":"瀰散",
"彌漫":"瀰漫",
"彌蒙":"瀰濛",
"形單":"形單",
"形單影只":"形單影隻",
"形影":"形影",
"形影相吊":"形影相弔",
"形象":"形象",
"彩女":"綵女",
"彩帶":"綵帶",
"彩排":"綵排",
"彩杖":"綵杖",
"彩棚":"綵棚",
"彩樓":"綵樓",
"彩燈":"綵燈",
"彩牌":"綵牌",
"彩球":"綵球",
"彩筆":"彩筆",
"彩筆生":"綵筆生",
"彩綢":"綵綢",
"彩線":"綵線",
"彩緞":"綵緞",
"彩繒":"綵繒",
"彩衣":"綵衣",
"彩裳":"綵裳",
"彩頭":"綵頭",
"彩鳳":"綵鳳",
"彩鸞":"綵鸞",
"影後":"影后",
"影象":"影像",
"彷佛":"彷彿",
"彷徨":"徬徨",
"彼彼":"彼彼",
"彼彼皆是":"比比皆是",
"往外":"往外",
"往外斗":"往外鬥",
"往外沖":"往外衝",
"往後":"往後",
"往後沖":"往後衝",
"征了":"徵了",
"征人":"徵人",
"征信":"徵信",
"征個":"徵個",
"征候":"徵候",
"征兆":"徵兆",
"征入":"徵入",
"征兵":"徵兵",
"征募":"徵募",
"征去":"徵去",
"征友":"徵友",
"征取":"徵取",
"征召":"徵召",
"征啟":"徵啟",
"征地":"徵地",
"征婚":"徵婚",
"征引":"徵引",
"征得":"徵得",
"征意":"征意",
"征意見":"徵意見",
"征收":"徵收",
"征斂":"徵斂",
"征文":"徵文",
"征服":"征服",
"征服兵":"徵服兵",
"征求":"徵求",
"征片":"徵片",
"征狀":"徵狀",
"征用":"徵用",
"征稅":"徵稅",
"征稿":"徵稿",
"征管":"徵管",
"征糧":"徵糧",
"征納":"徵納",
"征繳":"徵繳",
"征聘":"徵聘",
"征詔":"徵詔",
"征詢":"徵詢",
"征調":"徵調",
"征象":"徵象",
"征財":"徵財",
"征費":"徵費",
"征賦":"徵賦",
"征購":"徵購",
"征逐":"徵逐",
"征選":"徵選",
"征集":"徵集",
"很丑":"很醜",
"很准":"很準",
"很咸":"很鹹",
"很干":"很乾",
"很松":"很鬆",
"很象":"很像",
"後冠":"后冠",
"後制":"後製",
"後土":"后土",
"後奸":"後姦",
"後妃":"后妃",
"後梁":"後樑",
"後稷":"后稷",
"後羿":"后羿",
"後象":"後像",
"後象征服":"後像征服",
"徑取":"逕取",
"徑啟":"逕啟",
"徑寄":"逕寄",
"徑庭":"逕庭",
"徑砸":"逕砸",
"徑答":"逕答",
"徑自":"逕自",
"徒峭":"陡峭",
"徒托":"徒託",
"得准":"得準",
"得准不准":"得準不準",
"得象":"得像",
"徜若":"倘若",
"御侮":"禦侮",
"御制":"御製",
"御寇":"禦寇",
"御寒":"禦寒",
"御敵":"禦敵",
"徨恐":"惶恐",
"復亡":"覆亡",
"復仞":"復仞",
"復仞年如":"複仞年如",
"復以":"復以",
"復以百萬":"複以百萬",
"復信":"覆信",
"復函":"覆函",
"復分":"復分",
"復分數":"複分數",
"復分解":"複分解",
"復列":"複列",
"復利":"複利",
"復制":"複製",
"復印":"複印",
"復句":"複句",
"復合":"復合",
"復合傳動":"複合傳動",
"復合包裝":"複合包裝",
"復合型":"複合型",
"復合增長":"複合增長",
"復合字":"複合字",
"復合式":"複合式",
"復合性":"複合性",
"復合技":"複合技",
"復合材料":"複合材料",
"復合板":"複合板",
"復合架":"複合架",
"復合模":"複合模",
"復合機":"複合機",
"復合物":"複合物",
"復合管":"複合管",
"復合膜":"複合膜",
"復合藥":"複合藥",
"復合裝甲":"複合裝甲",
"復合詞":"複合詞",
"復合金屬":"複合金屬",
"復合體":"複合體",
"復名":"復名",
"復命":"覆命",
"復基":"復基",
"復基因":"複基因",
"復壁":"複壁",
"復姓":"複姓",
"復字":"復字",
"復字鍵":"複字鍵",
"復審":"覆審",
"復寫":"複寫",
"復巢":"覆巢",
"復式":"複式",
"復復":"覆覆",
"復敗":"覆敗",
"復數":"複數",
"復文":"覆文",
"復方":"複方",
"復書":"覆書",
"復本":"複本",
"復查":"複查",
"復核":"覆核",
"復檢":"複檢",
"復次":"複次",
"復比":"複比",
"復水":"復水",
"復水難收":"覆水難收",
"復決":"複決",
"復沒":"覆沒",
"復測":"複測",
"復滅":"覆滅",
"復疊":"覆疊",
"復目":"複目",
"復相":"復相",
"復相關":"複相關",
"復眼":"複眼",
"復種":"複種",
"復線":"複線",
"復習":"複習",
"復舟":"覆舟",
"復色":"複色",
"復葉":"複葉",
"復蓋":"覆蓋",
"復蘇":"復甦",
"復診":"複診",
"復詞":"複詞",
"復試":"複試",
"復變":"複變",
"復賽":"複賽",
"復車":"復車",
"復車之戒":"覆車之戒",
"復轍":"覆轍",
"復述":"複述",
"復選":"複選",
"復錢":"複錢",
"復閱":"複閱",
"復雜":"複雜",
"復電":"覆電",
"復音":"複音",
"復韻":"複韻",
"微松":"微鬆",
"微軟":"微軟",
"微須":"微鬚",
"德裡":"德里",
"徽菌":"黴菌",
"心底":"心底",
"心底裡":"心底裡",
"心理":"心理",
"心相":"心相",
"心相系":"心相繫",
"心系":"心繫",
"心系統":"心系統",
"心細":"心細",
"心細似發":"心細似髮",
"心細如發":"心細如髮",
"心髒":"心臟",
"必游":"必遊",
"必須":"必須",
"必須品":"必需品",
"忍飢":"忍饑",
"志哀":"誌哀",
"志喜":"誌喜",
"志慶":"誌慶",
"志異":"誌異",
"志發":"志發",
"快且":"快且",
"快且准":"快且準",
"快卷":"快捲",
"快又":"快又",
"快又准":"快又準",
"快吃":"快吃",
"快吃干":"快吃乾",
"快干":"快干",
"快干不":"快幹不",
"快干了":"快乾了",
"快干事":"快幹事",
"快干吧":"快幹吧",
"快干嘛":"快幹嘛",
"快干完":"快幹完",
"快干杯":"快乾杯",
"快干死":"快幹死",
"快干活":"快幹活",
"快干裂":"快乾裂",
"快幹":"快幹",
"快幹啊":"快幹啊",
"快快":"快快",
"快快干":"快快幹",
"快松":"快松",
"快松下":"快鬆下",
"快沖":"快衝",
"快狠":"快狠",
"快狠准":"快狠準",
"快而":"快而",
"快而准":"快而準",
"快舍":"快舍",
"快舍下":"快捨下",
"念一":"念一",
"念一念":"唸一唸",
"念一聲":"唸一聲",
"念下":"念下",
"念下去":"唸下去",
"念了":"念了",
"念了一聲":"唸了一聲",
"念佛":"唸佛",
"念作":"唸作",
"念來":"念來",
"念來念去":"唸來唸去",
"念到":"唸到",
"念咒":"唸咒",
"念好":"唸好",
"念完":"唸完",
"念得":"唸得",
"念念":"唸唸",
"念成":"唸成",
"念書":"唸書",
"念法":"唸法",
"念給":"唸給",
"念經":"唸經",
"念著":"唸著",
"念誦":"唸誦",
"念起":"念起",
"念起來":"唸起來",
"念過":"唸過",
"念錯":"唸錯",
"念點":"唸點",
"忽松":"忽鬆",
"忽舍":"忽舍",
"忽舍下":"忽捨下",
"怎幺":"怎麼",
"怎麼":"怎麼",
"怎麼干":"怎麼幹",
"怎麼斗":"怎麼鬥",
"怒氣":"怒氣",
"怒氣沖沖":"怒氣衝衝",
"怒發":"怒發",
"怒發沖冠":"怒髮衝冠",
"怒發沖天":"怒髮衝天",
"怕丑":"怕醜",
"怖栗":"怖慄",
"急卷":"急捲",
"急征":"急徵",
"急沖":"急衝",
"性征":"性徵",
"性欲":"性慾",
"恂栗":"恂慄",
"恢複":"恢復",
"恥奪":"褫奪",
"恭逢":"躬逢",
"息影":"息影",
"息影後":"息影後",
"恰象":"恰像",
"悒郁":"悒鬱",
"悚栗":"悚慄",
"悠游":"悠遊",
"悲戚":"悲慼",
"悲泯":"悲憫",
"悲郁":"悲鬱",
"悶郁":"悶鬱",
"悸栗":"悸慄",
"情欲":"情慾",
"惕栗":"惕慄",
"惡心":"噁心",
"惡斗":"惡鬥",
"想干":"想幹",
"想干淨":"想乾淨",
"想干笑":"想乾笑",
"想干脆":"想乾脆",
"想斗":"想鬥",
"想著":"想著",
"想象":"想像",
"惴栗":"惴慄",
"惶栗":"惶慄",
"惺松":"惺忪",
"愁郁":"愁鬱",
"愈卷":"愈捲",
"愈合":"癒合",
"愈合乎":"愈合乎",
"愈合他":"愈合他",
"愈合作":"愈合作",
"愈合她":"愈合她",
"愈合式":"愈合式",
"愈合得":"愈合得",
"愈合心":"愈合心",
"愈合情":"愈合情",
"愈合意":"愈合意",
"愈合我":"愈合我",
"愈合拍":"愈合拍",
"愈合攏":"愈合攏",
"愈合於":"愈合於",
"愈合理":"愈合理",
"愈合用":"愈合用",
"愈合身":"愈合身",
"愈合適":"愈合適",
"愈斗":"愈斗",
"愈斗愈":"愈鬥愈",
"愈瘡":"癒瘡",
"愈象":"愈像",
"意函":"意涵",
"意興":"意興",
"意興闌姍":"意興闌珊",
"愚暗":"愚闇",
"愛屋":"愛屋",
"愛屋及鳥":"愛屋及烏",
"愛欲":"愛慾",
"感覺":"感覺",
"感覺象":"感覺像",
"慘栗":"慘慄",
"慢咽":"慢嚥",
"慰借":"慰藉",
"憂郁":"憂鬱",
"憋腳":"蹩腳",
"憑借":"憑藉",
"憑准":"憑準",
"憑吊":"憑弔",
"憔瘁":"憔悴",
"懇托":"懇託",
"懈松":"懈鬆",
"懈迨":"懈怠",
"應征":"應徵",
"應象":"應像",
"懊郁":"懊鬱",
"懍栗":"懍慄",
"懰栗":"懰慄",
"懷表":"懷錶",
"懸梁":"懸樑",
"懸臂":"懸臂",
"懸臂梁":"懸臂樑",
"懼栗":"懼慄",
"懿范":"懿範",
"戊戍":"戊戌",
"戊衛":"戌衛",
"成長":"成長",
"我丑":"我醜",
"我干":"我幹",
"我干一杯":"我乾一杯",
"我干兒子":"我乾兒子",
"我干女兒":"我乾女兒",
"我干擾":"我干擾",
"我干杯":"我乾杯",
"我干涉":"我干涉",
"我干爹":"我乾爹",
"我干脆":"我乾脆",
"我干預":"我干預",
"我白":"我白",
"我白干":"我白幹",
"我象":"我像",
"戒煙":"戒菸",
"或咸":"或鹹",
"或松":"或鬆",
"或系":"或系",
"或系之牛":"或繫之牛",
"或采":"或採",
"戚嗟":"慼嗟",
"戚憂":"慼憂",
"戚戚":"慼慼",
"戚然":"慼然",
"戚顏":"慼顏",
"戰天":"戰天",
"戰天斗地":"戰天鬥地",
"戰斗":"戰鬥",
"戰栗":"顫慄",
"戲彩":"戲綵",
"戲扎":"戲紮",
"戴克":"戴克",
"戴克裡先":"戴克里先",
"戴表":"戴錶",
"所余":"所餘",
"所制":"所制",
"所制約":"所制約",
"所制造":"所製造",
"所卷":"所捲",
"所布":"所布",
"所布之":"所佈之",
"所布的":"所佈的",
"所干":"所幹",
"所扎":"所紮",
"所系":"所繫",
"所見":"所見",
"所見而雲":"所見而云",
"所謂":"所謂",
"所謂而雲":"所謂而云",
"所譏":"所譏",
"所譏而雲":"所譏而云",
"所采":"改採",
"所鐘":"所鍾",
"所雲":"所云",
"扁剉":"扁銼",
"扇動":"搧動",
"扇耳":"扇耳",
"扇耳光":"搧耳光",
"扇開":"搧開",
"扇風":"搧風",
"手一":"手一",
"手一卷":"手一捲",
"手一松":"手一鬆",
"手不":"手不",
"手不松":"手不鬆",
"手松":"手鬆",
"手煉":"手鍊",
"手表":"手錶",
"手表態":"手表態",
"手表演":"手表演",
"手表現":"手表現",
"手表示":"手表示",
"手表達":"手表達",
"手裡":"手裡",
"手裡余":"手裡餘",
"手采":"手採",
"才不":"才不",
"才不干杯":"才不乾杯",
"才不干枯":"才不乾枯",
"才不干涸":"才不乾涸",
"才不干渴":"才不乾渴",
"才不干燥":"才不乾燥",
"才干":"才幹",
"才干了杯":"才乾了杯",
"才干干淨":"才乾乾淨",
"才干旱":"才乾旱",
"才干杯":"才乾杯",
"才干枯":"才乾枯",
"才干涸":"才乾涸",
"才干淨":"才乾淨",
"才干爽":"才乾爽",
"才干耗":"才乾耗",
"才干脆":"才乾脆",
"才干著急":"才乾著急",
"才干透":"才乾透",
"才干這杯":"才乾這杯",
"才干那杯":"才乾那杯",
"才松":"才松",
"才松下":"才鬆下",
"才象":"才像",
"扎上":"紮上",
"扎下":"紮下",
"扎了":"紮了",
"扎住":"紮住",
"扎囮":"紮囮",
"扎在":"紮在",
"扎好":"紮好",
"扎實":"紮實",
"扎寨":"紮寨",
"扎帶":"紮帶",
"扎彩":"紮彩",
"扎成":"紮成",
"扎扎":"紮紮",
"扎根":"紮根",
"扎營":"紮營",
"扎穩":"紮穩",
"扎結":"紮結",
"扎緊":"紮緊",
"扎腳":"紮腳",
"扎著":"紮著",
"扎裹":"紮裹",
"扎詐":"紮詐",
"扎起":"紮起",
"扎辮":"紮辮",
"打不":"打不",
"打不准":"打不準",
"打制":"打製",
"打拼":"打拚",
"打斗":"打鬥",
"打谷":"打穀",
"托了":"託了",
"托事":"託事",
"托交":"託交",
"托人":"託人",
"托付":"託付",
"托古":"託古",
"托名":"託名",
"托咎":"託咎",
"托夢":"託夢",
"托大":"託大",
"托孤":"託孤",
"托故":"託故",
"托疾":"託疾",
"托病":"託病",
"托管":"託管",
"托言":"託言",
"托詞":"託詞",
"托買":"託買",
"托賣":"託賣",
"托身":"託身",
"托辭":"託辭",
"托運":"託運",
"托過":"託過",
"扛丸":"摃丸",
"扛龜":"摃龜",
"扣准":"扣準",
"扮象":"扮像",
"扶余":"扶餘",
"批復":"批覆",
"批斗":"批鬥",
"批注":"批註",
"扼塞":"阨塞",
"找不":"找不",
"找不准":"找不準",
"找准":"找準",
"承制":"承製",
"抉別":"訣別",
"把你":"把你",
"把你干":"把我幹",
"把姜":"把薑",
"把方":"把方",
"把方才":"把才纔",
"抑制":"抑制",
"抑郁":"抑鬱",
"抓不":"抓不",
"抓不准":"抓不準",
"抓准":"抓準",
"抓奸":"抓姦",
"抓斗":"抓鬥",
"投不":"投不",
"投不准":"投不準",
"投准":"投準",
"抗御":"抗禦",
"抗斗":"抗鬥",
"折》":"摺》",
"折卷":"折捲",
"折子":"摺子",
"折扇":"摺扇",
"折沖":"折衝",
"折疊":"摺疊",
"折痕":"摺痕",
"折紙":"摺紙",
"折裙":"摺裙",
"披發":"披髮",
"抬扛":"抬摃",
"抱著":"抱著",
"抵御":"抵禦",
"抵牾":"牴牾",
"抵犢":"抵犢",
"抵犢情深":"舐犢情深",
"抵礪":"砥礪",
"抵觸":"牴觸",
"抹剎":"抹煞",
"抹台":"抹檯",
"抹干":"抹乾",
"抺干":"抺乾",
"抽傭":"抽佣",
"抽干":"抽乾",
"抽煙":"抽菸",
"抽簽":"抽籤",
"抽象":"抽象",
"抿滅":"泯滅",
"拂須":"拂鬚",
"拆伙":"拆夥",
"拆封":"拆封",
"拆封後":"拆封後",
"拆斗":"拆鬥",
"拈須":"拈鬚",
"拉煉":"拉鍊",
"拉纖":"拉縴",
"拉著":"拉著",
"拉裡":"拉里",
"拉面":"拉麵",
"拋准":"拋準",
"拌面":"拌麵",
"拍出":"拍出",
"拍出好戲":"拍齣好戲",
"拍台":"拍台",
"拍台拍凳":"拍檯拍凳",
"拐子":"枴子",
"拐杖":"枴杖",
"拓本":"搨本",
"拓朴":"拓樸",
"拓朴學":"拓樸學",
"拓碑":"搨碑",
"拗別":"拗彆",
"拘系":"拘繫",
"拙壯":"茁壯",
"拚命":"拚命",
"拚命干":"拚命幹",
"拚斗":"拚鬥",
"招魂":"招魂",
"招魂幡":"招魂旛",
"拜佔":"拜佔",
"拜佔庭":"拜占庭",
"拜托":"拜託",
"拭干":"拭乾",
"拮據":"拮据",
"拼一":"拼一",
"拼一拼":"拚一拚",
"拼上":"拼上",
"拼上一拼":"拚上一拚",
"拼個":"拚個",
"拼力":"拚力",
"拼勁":"拚勁",
"拼命":"拚命",
"拼得":"拼得",
"拼得過":"拚得過",
"拼搏":"拚搏",
"拼政":"拚政",
"拼斗":"拚鬥",
"拼死":"拚死",
"拼殺":"拚殺",
"拼活":"拚活",
"拼生":"拚生",
"拼經":"拚經",
"拼舍":"拚捨",
"拿不":"拿不",
"拿不准":"拿不準",
"拿准":"拿準",
"拿奸":"拿姦",
"拿破":"拿破",
"拿破侖":"拿破崙",
"挑了":"挑了",
"挑了只":"挑了隻",
"挑大":"挑大",
"挑大梁":"挑大樑",
"挑斗":"挑鬥",
"挖松":"挖鬆",
"振蕩":"振盪",
"挹郁":"挹鬱",
"挺准":"挺準",
"挺而":"鋌而",
"挺象":"挺像",
"挽歌":"輓歌",
"挽發":"挽髮",
"挽聯":"輓聯",
"挽詞":"輓詞",
"挽詩":"輓詩",
"挽近":"輓近",
"捂不":"捂不",
"捂不住":"摀不住",
"捂住":"摀住",
"捂蓋":"摀蓋",
"捆扎":"捆紮",
"捉不":"捉不",
"捉不准":"捉不準",
"捉准":"捉準",
"捉只":"捉隻",
"捉奸":"捉姦",
"捉狹":"促狹",
"捋胡":"捋鬍",
"捋虎":"捋虎",
"捋虎須":"捋虎鬚",
"捋須":"捋鬚",
"捍御":"捍禦",
"捍拒":"扞拒",
"捍格":"扞格",
"捏不":"捏不",
"捏不准":"捏不準",
"捏准":"捏準",
"捏制":"捏製",
"捭合":"捭闔",
"捶台":"捶台",
"捶台拍凳":"捶檯拍凳",
"捻手":"撚手",
"捻指":"撚指",
"捻胡":"捻鬍",
"捻花":"撚花",
"捻錢":"撚錢",
"捻須":"撚鬚",
"捻香":"撚香",
"掀卷":"掀捲",
"掃卷":"掃捲",
"掃描":"掃瞄",
"掉發":"掉髮",
"掉發出":"掉發出",
"掉發現":"掉發現",
"掉發現象":"掉髮現象",
"掌握":"掌握",
"排洩":"排泄",
"排骨":"排骨",
"排骨面":"排骨麵",
"掘松":"掘鬆",
"掙松":"掙鬆",
"掛彩":"掛綵",
"掛歷":"掛曆",
"掛礙":"罣礙",
"掠沖":"掠衝",
"探知":"探知",
"探知欲":"探知慾",
"接斗":"接鬥",
"控制":"控制",
"控制欲":"控制慾",
"控制面板":"控制面板",
"推刨":"推鉋",
"推情":"推情",
"推情准理":"推情準理",
"揉制":"揉製",
"揉躪":"蹂躪",
"揉面":"揉麵",
"描涂":"描塗",
"換只":"換隻",
"換簽":"換籤",
"握不":"握不",
"握不准":"握不準",
"握准":"握準",
"握發":"握髮",
"握著":"握著",
"揩台":"揩檯",
"揩干":"揩乾",
"揪采":"揪採",
"揭丑":"揭醜",
"揮別":"揮別",
"揮卷":"揮捲",
"揮桿":"揮杆",
"揮發":"揮發",
"揮發油":"揮發油",
"搏斗":"搏鬥",
"搜羅":"蒐羅",
"搜證":"蒐證",
"搜購":"蒐購",
"搜集":"蒐集",
"摒息":"屏息",
"摸不":"摸不",
"摸不准":"摸不準",
"摸准":"摸準",
"摺雲":"摺云",
"撞球":"撞球",
"撞球台":"撞球檯",
"撣子":"撢子",
"撫恤":"撫卹",
"撫須":"撫鬚",
"撬松":"撬鬆",
"撲卷":"撲捲",
"撻虜":"韃虜",
"擋御":"擋禦",
"擐系":"擐繫",
"擔仔":"擔仔",
"擔仔面":"擔仔麵",
"擔擔":"擔擔",
"擔擔面":"擔擔麵",
"擢發":"擢髮",
"擢足":"濯足",
"擦干":"擦乾",
"擦幹":"擦乾",
"擰干":"擰乾",
"擰松":"擰鬆",
"擺布":"擺佈",
"擺蕩":"擺盪",
"攏斷":"壟斷",
"攝制":"攝製",
"攝影":"攝影",
"攝影後":"攝影後",
"攝服":"懾服",
"攝象":"攝像",
"攣生":"孿生",
"支干":"支幹",
"支煙":"支菸",
"支簽":"支籤",
"收獲":"收穫",
"收采":"收採",
"改念":"改唸",
"改采":"改採",
"放姜":"放薑",
"放松":"放鬆",
"放著":"放著",
"故布":"故佈",
"故裡":"故里",
"效尤":"傚尤",
"效法":"傚法",
"敖游":"敖遊",
"教悔":"教誨",
"教范":"教範",
"敢再":"敢再",
"敢再干杯":"敢再乾杯",
"敢干":"敢幹",
"敢念":"敢唸",
"敢拼":"敢拚",
"敢斗":"敢鬥",
"敢松":"敢鬆",
"散伙":"散夥",
"散布":"散佈",
"散署":"佈署",
"敦厚":"惇厚",
"敦敦":"惇惇",
"敦朴":"惇樸",
"敦睦":"惇睦",
"敦篤":"惇篤",
"敦誨":"惇誨",
"敦謹":"惇謹",
"整並":"整併",
"整個":"整個",
"整出":"整出",
"整出劇":"整齣劇",
"整出戲":"整齣戲",
"整只":"整隻",
"整周":"整週",
"敷涂":"敷塗",
"數只":"數隻",
"數周":"數週",
"數天":"數天",
"數海":"數海",
"數海裡":"數海里",
"數裡":"數里",
"文丑":"文醜",
"文匯":"文匯",
"文匯報":"文匯報",
"文斗":"文鬥",
"斑爛":"斑斕",
"斗一":"鬥一",
"斗一斗":"鬥一鬥",
"斗上":"鬥上",
"斗上一斗":"鬥上一鬥",
"斗下":"斗下",
"斗下去":"鬥下去",
"斗不":"鬥不",
"斗不過":"鬥不過",
"斗久":"鬥久",
"斗了":"鬥了",
"斗了一斗":"鬥了一鬥",
"斗什":"斗什",
"斗什麼":"鬥什麼",
"斗他":"鬥他",
"斗他一斗":"鬥他一鬥",
"斗你":"鬥你",
"斗來":"鬥來",
"斗個":"鬥個",
"斗倒":"鬥倒",
"斗傳":"鬥傳",
"斗內":"斗內",
"斗內力":"鬥內力",
"斗出":"鬥出",
"斗到":"鬥到",
"斗劍":"鬥劍",
"斗力":"鬥力",
"斗勁":"鬥勁",
"斗勇":"鬥勇",
"斗勝":"鬥勝",
"斗十":"斗十",
"斗十余":"鬥十餘",
"斗去":"鬥去",
"斗口":"鬥口",
"斗命":"鬥命",
"斗嘴":"鬥嘴",
"斗在":"鬥在",
"斗垮":"鬥垮",
"斗場":"鬥場",
"斗士":"鬥士",
"斗奇":"鬥奇",
"斗她":"鬥她",
"斗她一斗":"鬥她一鬥",
"斗妍":"鬥妍",
"斗完":"鬥完",
"斗定":"斗定",
"斗定力":"鬥定力",
"斗將":"鬥將",
"斗就":"斗就",
"斗就斗":"鬥就鬥",
"斗弄":"鬥弄",
"斗得":"鬥得",
"斗心":"鬥心",
"斗忍":"鬥忍",
"斗志":"鬥志",
"斗快":"鬥快",
"斗惡":"鬥惡",
"斗意":"鬥意",
"斗成":"鬥成",
"斗我":"鬥我",
"斗戰":"鬥戰",
"斗批":"鬥批",
"斗技":"鬥技",
"斗招":"鬥招",
"斗拱":"斗栱",
"斗拳":"鬥拳",
"斗掌":"鬥掌",
"斗擻":"抖擻",
"斗敗":"鬥敗",
"斗敵":"鬥敵",
"斗斗":"鬥鬥",
"斗智":"鬥智",
"斗本":"斗本",
"斗本事":"鬥本事",
"斗棋":"鬥棋",
"斗機":"斗機",
"斗機智":"鬥機智",
"斗殺":"鬥殺",
"斗毆":"鬥毆",
"斗氣":"鬥氣",
"斗法":"鬥法",
"斗灼":"斗杓",
"斗然":"陡然",
"斗爭":"鬥爭",
"斗牛":"鬥牛",
"斗狗":"鬥狗",
"斗狠":"鬥狠",
"斗獸":"鬥獸",
"斗畢":"鬥畢",
"斗百":"斗百",
"斗百余":"鬥百餘",
"斗的":"斗的",
"斗的過":"鬥的過",
"斗眼":"鬥眼",
"斗神":"鬥神",
"斗私":"鬥私",
"斗艦":"鬥艦",
"斗草":"鬥草",
"斗著":"鬥著",
"斗藝":"鬥藝",
"斗蟋":"斗蟋",
"斗蟋蟀":"鬥蟋蟀",
"斗角":"鬥角",
"斗豔":"鬥豔",
"斗贏":"鬥贏",
"斗起":"鬥起",
"斗趣":"鬥趣",
"斗輸":"鬥輸",
"斗過":"鬥過",
"斗酒":"鬥酒",
"斗雞":"鬥雞",
"斗飲":"鬥飲",
"斗鬧":"鬥鬧",
"斗魂":"鬥魂",
"斗魚":"鬥魚",
"斗鵪":"斗鵪",
"斗鵪鶉":"鬥鵪鶉",
"斗麗":"鬥麗",
"斗！":"鬥！",
"料不":"料不",
"料不准":"料不準",
"料准":"料準",
"斛斗":"觔斗",
"斜沖":"斜衝",
"斯裡":"斯里",
"新征":"新徵",
"新歷":"新曆",
"新歷史":"新歷史",
"新舄":"新潟",
"斷發":"斷髮",
"方便":"方便",
"方便面":"方便麵",
"於先":"於先",
"於先生":"于先生",
"於右":"於右",
"於右任":"于右任",
"於嗟":"于嗟",
"於小":"於小",
"於小姐":"于小姐",
"於思":"於思",
"於思於思":"于思于思",
"於成":"於成",
"於成龍":"于成龍",
"於於":"于于",
"於歸":"于歸",
"於歸來":"於歸來",
"於歸去":"於歸去",
"於歸回":"於歸回",
"於歸家":"於歸家",
"於歸程":"於歸程",
"於歸路":"於歸路",
"於歸途":"於歸途",
"於歸還":"於歸還",
"於氏":"于氏",
"於美":"於美",
"於美人":"于美人",
"於謙":"于謙",
"於闐":"于闐",
"於飛":"於飛",
"於飛之樂":"于飛之樂",
"施舍":"施捨",
"旁征":"旁征",
"旁征博引":"旁徵博引",
"旁徨":"徬徨",
"旁惶":"徬徨",
"旁注":"旁註",
"旅游":"旅遊",
"旋卷":"旋捲",
"旋松":"旋鬆",
"旋渦":"漩渦",
"旗幡":"旗旛",
"旗桿":"旗杆",
"既准":"既准",
"既准且":"既準且",
"既象":"既像",
"日余":"日餘",
"日制":"日製",
"日制定":"日制定",
"日制訂":"日制訂",
"日升":"日昇",
"日干":"日干",
"日干夜干":"日幹夜幹",
"日志":"日誌",
"日本":"日本",
"日本制":"日本製",
"日本制定":"日本制定",
"日本制訂":"日本制訂",
"日歷":"日曆",
"日歷史":"日歷史",
"日歷年":"日歷年",
"日歷經":"日歷經",
"日游":"日遊",
"早佔":"早佔",
"早佔勿藥":"早占勿藥",
"旬余":"旬餘",
"旱煙":"旱菸",
"昆侖":"崑崙",
"昆山":"崑山",
"昆曲":"崑曲",
"昆腔":"崑腔",
"明范":"明範",
"昏瞑":"昏暝",
"易斗":"易斗",
"易斗的":"易鬥的",
"易松":"易鬆",
"星歷":"星曆",
"星歷代":"星歷代",
"星歷任":"星歷任",
"星歷史":"星歷史",
"星歷盡":"星歷盡",
"星歷經":"星歷經",
"星歷險":"星歷險",
"星辰":"星辰",
"星辰表":"星辰錶",
"映象":"映像",
"春卷":"春捲",
"春游":"春遊",
"是丑":"是醜",
"是干":"是干",
"是干的":"是乾的",
"是干脆":"是乾脆",
"是白":"是白",
"是白干":"是白幹",
"時干":"時干",
"時干下":"時幹下",
"時憲":"時憲",
"時憲歷":"時憲曆",
"晉升":"晉陞",
"普裡":"普里",
"景致":"景緻",
"智斗":"智鬥",
"晾干":"晾乾",
"暗倫":"闇倫",
"暗冥":"闇冥",
"暗劣":"闇劣",
"暗弱":"闇弱",
"暗斗":"暗鬥",
"暗然":"闇然",
"暗藏":"暗藏",
"暗藏著":"暗藏著",
"暗贊":"暗讚",
"暝目":"瞑目",
"暢游":"暢遊",
"暫松":"暫鬆",
"暴卷":"暴捲",
"暴沖":"暴衝",
"暴珍":"暴珍",
"暴珍天物":"暴殄天物",
"曬干":"曬乾",
"曬谷":"曬穀",
"曲卷":"曲捲",
"曲薛":"麴薛",
"曲酒":"麴酒",
"更丑":"更醜",
"更准":"更準",
"更加":"更加",
"更加丑":"更加醜",
"更咸":"更鹹",
"更松":"更鬆",
"更要":"更要",
"更要丑":"更要醜",
"更象":"更像",
"書台":"書檯",
"書童":"書僮",
"書簽":"書籤",
"最丑":"最醜",
"最准":"最準",
"會干":"會幹",
"會干擾":"會干擾",
"會干杯":"會乾杯",
"會干涸":"會乾涸",
"會干淨":"會乾淨",
"會干脆":"會乾脆",
"會干裂":"會乾裂",
"會斗":"會鬥",
"會象":"會像",
"會象棋":"會象棋",
"月余":"月餘",
"月歷":"月曆",
"有余":"有餘",
"有出":"有出",
"有出好戲":"有齣好戲",
"有得":"有得",
"有得斗":"有得鬥",
"有感":"有感",
"有感而雲":"有感而云",
"有象":"有像",
"有象征":"有象徵",
"有關":"有關",
"有關系":"有關係",
"有點":"有點",
"有點丑":"有點醜",
"服贗":"服膺",
"朝干":"朝乾",
"木制":"木製",
"木梁":"木樑",
"木簽":"木籤",
"木納":"木訥",
"未干":"未乾",
"未愈":"未癒",
"未斗":"未鬥",
"未松":"未松",
"未松下":"未鬆下",
"未松口":"未鬆口",
"未端":"末端",
"本周":"本週",
"朱喻":"硃喻",
"朱批":"硃批",
"朱砂":"硃砂",
"朱磯":"硃磯",
"朱筆":"硃筆",
"朴修":"朴修",
"朴修斯":"樸修斯",
"朴學":"樸學",
"朴實":"樸實",
"朴拙":"樸拙",
"朴玉":"璞玉",
"朴直":"樸直",
"朴素":"樸素",
"朴質":"樸質",
"朴野":"樸野",
"李鐘":"李鐘",
"李鐘郁":"李鍾郁",
"材干":"材幹",
"村落":"村落",
"束發":"束髮",
"杯干":"杯乾",
"杯白":"杯白",
"杯白干":"杯白乾",
"杯面":"杯麵",
"東升":"東昇",
"東周":"東周",
"東岳":"東嶽",
"東東":"東東",
"東東裡面":"東東裡面",
"東沖":"東衝",
"東涂":"東塗",
"東游":"東遊",
"東湧":"東涌",
"東裡":"東里",
"松一":"松一",
"松一下":"鬆一下",
"松一些":"鬆一些",
"松一口氣":"鬆一口氣",
"松一松":"鬆一鬆",
"松下":"松下",
"松下一口":"鬆下一口",
"松下了":"鬆下了",
"松下來":"鬆下來",
"松不":"松不",
"松不松":"鬆不鬆",
"松不緊":"鬆不緊",
"松不開":"鬆不開",
"松了":"鬆了",
"松了松":"鬆了鬆",
"松些":"鬆些",
"松出":"松出",
"松出一":"鬆出一",
"松出口":"鬆出口",
"松勁":"鬆勁",
"松動":"鬆動",
"松化":"鬆化",
"松去":"鬆去",
"松口":"鬆口",
"松土":"鬆土",
"松垮":"鬆垮",
"松塌":"鬆塌",
"松寬":"鬆寬",
"松干":"松幹",
"松弛":"鬆弛",
"松得":"松得",
"松得多":"鬆得多",
"松快":"鬆快",
"松懈":"鬆懈",
"松手":"鬆手",
"松掉":"鬆掉",
"松放":"鬆放",
"松散":"鬆散",
"松晃":"鬆晃",
"松松":"鬆鬆",
"松柔":"鬆柔",
"松毛":"松毛",
"松毛松翼":"鬆毛鬆翼",
"松氣":"鬆氣",
"松油":"松油",
"松油管":"鬆油管",
"松油門":"鬆油門",
"松泛":"鬆泛",
"松泥":"鬆泥",
"松浮":"鬆浮",
"松球":"松毬",
"松甩":"鬆甩",
"松筋":"鬆筋",
"松糕":"鬆糕",
"松綁":"鬆綁",
"松緊":"鬆緊",
"松線":"鬆線",
"松緩":"鬆緩",
"松繩":"鬆繩",
"松肘":"鬆肘",
"松肩":"鬆肩",
"松脆":"鬆脆",
"松脫":"鬆脫",
"松腰":"鬆腰",
"松蛋":"鬆蛋",
"松解":"鬆解",
"松起":"鬆起",
"松軟":"鬆軟",
"松通":"鬆通",
"松開":"鬆開",
"松閒":"鬆閒",
"松餅":"鬆餅",
"松馳":"鬆弛",
"松骨":"鬆骨",
"松齒":"鬆齒",
"板剉":"板銼",
"果干":"果乾",
"果系":"果係",
"果系統":"果系統",
"枝干":"枝幹",
"枝芽":"枝枒",
"枯干":"枯幹",
"架梁":"架樑",
"某只":"某隻",
"染發":"染髮",
"柔發":"柔髮",
"柱梁":"柱樑",
"栓住":"拴住",
"栗人":"慄人",
"栗冽":"慄冽",
"栗栗":"慄慄",
"栗然":"慄然",
"栗聲":"慄聲",
"栗驚":"慄驚",
"校准":"校準",
"株象":"株像",
"核復":"核覆",
"根煙":"根菸",
"格斗":"格鬥",
"格范":"格範",
"格裡":"格里",
"格裡歷":"格里曆",
"桅桿":"桅杆",
"案幾":"案几",
"桌面":"桌面",
"桑干":"桑乾",
"桿面":"桿麵",
"梁上":"樑上",
"梁下":"樑下",
"梁折":"樑折",
"梁柱":"樑柱",
"梁脊":"樑脊",
"梗直":"鯁直",
"梯沖":"梯衝",
"械斗":"械鬥",
"梳發":"梳髮",
"棄舍":"棄捨",
"棉制":"棉製",
"棕發":"棕髮",
"棟梁":"棟樑",
"棵象":"棵像",
"植發":"植髮",
"業余":"業餘",
"極丑":"極醜",
"極准":"極準",
"極干":"極乾",
"極待":"極待",
"極待救":"亟待救",
"極待解":"亟待解",
"極極":"亟亟",
"極象":"極像",
"榔頭":"鎯頭",
"榨取":"搾取",
"榨干":"榨乾",
"榨渣":"搾渣",
"榨甘":"榨甘",
"榨甘蔗":"搾甘蔗",
"榴連":"榴槤",
"構陷":"搆陷",
"槌打":"搥打",
"槌背":"搥背",
"槌胸":"搥胸",
"槌頭":"鎚頭",
"槌鼓":"搥鼓",
"標准":"標準",
"標志":"標誌",
"標桿":"標竿",
"標注":"標註",
"標簽":"標籤",
"標致":"標緻",
"樞鈕":"樞紐",
"模制":"模製",
"模范":"模範",
"樣丑":"樣醜",
"樣干":"樣幹",
"樣范":"樣範",
"樵采":"樵採",
"樹干":"樹幹",
"橋梁":"橋樑",
"橘梗":"桔梗",
"機器":"機器",
"機器壓制":"機器壓製",
"機抒":"機杼",
"橫卷":"橫捲",
"橫征":"橫徵",
"橫梁":"橫樑",
"橫沖":"橫衝",
"櫃台":"櫃檯",
"欄桿":"欄杆",
"權力":"權力",
"權力欲":"權力慾",
"權斗":"權鬥",
"欠准":"欠準",
"欲令":"欲令",
"欲令智昏":"慾令智昏",
"欲壑":"慾壑",
"欲女":"慾女",
"欲孽":"慾孽",
"欲念":"慾念",
"欲望":"慾望",
"欲求":"欲求",
"欲求不滿":"慾求不滿",
"欲海":"慾海",
"欲火":"慾火",
"欲舍":"欲捨",
"欲障":"慾障",
"欷籲":"欷吁",
"欺蒙":"欺矇",
"欽崎":"嶔崎",
"歉咎":"歉疚",
"歐游":"歐遊",
"正正":"正正",
"正正當當":"正正當當",
"正象":"正像",
"此丑":"此醜",
"步步":"步步",
"步步高升":"步步高陞",
"武斗":"武鬥",
"歷數":"曆數",
"歷日":"曆日",
"歷書":"曆書",
"歷月":"曆月",
"歷法":"曆法",
"歷落":"曆落",
"歷象":"曆象",
"歸並":"歸併",
"歸並不":"歸並不",
"歸並且":"歸並且",
"歸並非":"歸並非",
"歸依":"歸依",
"歸依佛門":"皈依佛門",
"歸依我佛":"皈依我佛",
"歸朴":"歸璞",
"歸真":"歸真",
"歸真反朴":"歸真反璞",
"歸究":"歸咎",
"歸裡":"歸里",
"死斗":"死鬥",
"殊勳":"殊勛",
"殘余":"殘餘",
"殘干":"殘幹",
"殘廢":"殘廢",
"殘廢後":"殘廢後",
"殘肴":"殘餚",
"殷勤":"慇勤",
"毀謗":"譭謗",
"毆斗":"毆鬥",
"母丑":"母醜",
"母後":"母后",
"母范":"母範",
"每只":"每隻",
"每周":"每週",
"比拼":"比拚",
"比斗":"比鬥",
"毛制":"毛製",
"毛姜":"毛薑",
"毛發":"毛髮",
"毛裡":"毛裡",
"毛裡求斯":"毛里求斯",
"毛裡裘斯":"毛里裘斯",
"毛須":"毛鬚",
"毫厘":"毫釐",
"毫發":"毫髮",
"民制":"民製",
"氣一":"氣一",
"氣一沖":"氣一衝",
"氣慨":"氣概",
"氣象":"氣象",
"氣郁":"氣鬱",
"氤郁":"氤鬱",
"水一":"水一",
"水一沖":"水一衝",
"水再":"水再",
"水再沖":"水再衝",
"水准":"水準",
"水又":"水又",
"水又沖":"水又衝",
"水已":"水已",
"水已干":"水已乾",
"水已沖":"水已衝",
"水干":"水乾",
"水干掉":"水乾掉",
"水干盡":"水乾盡",
"水急":"水急",
"水急沖":"水急衝",
"水才":"水才",
"水才干":"水才乾",
"水沖":"水沖",
"水泄":"水泄",
"水泄不通":"水洩不通",
"水清":"水清",
"水清可見":"水清可鑑",
"水濂":"水簾",
"水谷":"水谷",
"水谷之海":"水穀之海",
"水道":"水道",
"永志":"永誌",
"永歷":"永曆",
"求知":"求知",
"求知欲":"求知慾",
"求簽":"求籤",
"污蔑":"污衊",
"汨沒":"汩沒",
"決心":"決心",
"決心干":"決心幹",
"決擇":"抉擇",
"決斗":"決鬥",
"沈淀":"沈澱",
"沈郁":"沈鬱",
"沈陽":"瀋陽",
"沉淀":"沉澱",
"沉郁":"沉鬱",
"沒准":"沒準",
"沒干":"沒幹",
"沒干淨":"沒乾淨",
"沒干頭":"沒幹頭",
"沒念":"沒唸",
"沒松":"沒松",
"沒松下":"沒鬆下",
"沒松口":"沒鬆口",
"沒松手":"沒鬆手",
"沒白":"沒白",
"沒白干":"沒白幹",
"沒輒":"沒轍",
"沖上":"沖上",
"沖上來":"衝上來",
"沖下":"衝下",
"沖不":"沖不",
"沖不上":"衝不上",
"沖不下":"衝不下",
"沖不入":"衝不入",
"沖不出":"衝不出",
"沖不破":"衝不破",
"沖不進":"衝不進",
"沖不過":"衝不過",
"沖不開":"衝不開",
"沖亂":"衝亂",
"沖了":"沖了",
"沖了上":"衝了上",
"沖了下":"衝了下",
"沖了來":"衝了來",
"沖了入":"衝了入",
"沖了出":"衝了出",
"沖了進":"衝了進",
"沖了過":"衝了過",
"沖他":"衝他",
"沖你":"衝你",
"沖來":"衝來",
"沖倒":"衝倒",
"沖克":"衝克",
"沖入":"衝入",
"沖冠":"衝冠",
"沖出":"衝出",
"沖到":"衝到",
"沖刺":"衝刺",
"沖剋":"衝剋",
"沖剌":"衝剌",
"沖前":"衝前",
"沖劍":"衝劍",
"沖力":"衝力",
"沖勁":"衝勁",
"沖動":"衝動",
"沖勢":"衝勢",
"沖去":"衝去",
"沖口":"衝口",
"沖向":"衝向",
"沖向前":"衝向前",
"沖呀":"衝呀",
"沖咱":"衝咱",
"沖啊":"衝啊",
"沖回":"衝回",
"沖在":"沖在",
"沖在下":"衝在下",
"沖在前":"衝在前",
"沖在最前":"衝在最前",
"沖堅":"衝堅",
"沖墜":"衝墜",
"沖天":"衝天",
"沖奔":"衝奔",
"沖她":"衝她",
"沖將":"衝將",
"沖往":"衝往",
"沖得":"沖得",
"沖得入":"衝得入",
"沖得出":"衝得出",
"沖得進":"衝得進",
"沖得過":"衝得過",
"沖心":"衝心",
"沖我":"衝我",
"沖拳":"衝拳",
"沖掠":"衝掠",
"沖撞":"衝撞",
"沖撲":"衝撲",
"沖擊":"衝擊",
"沖斷":"衝斷",
"沖殺":"衝殺",
"沖決":"衝決",
"沖沖":"沖沖",
"沖沖沖":"衝衝衝",
"沖波":"衝波",
"沖浪":"衝浪",
"沖激":"衝激",
"沖然":"衝然",
"沖犯":"衝犯",
"沖盹":"沖盹",
"沖盹兒":"衝盹兒",
"沖破":"衝破",
"沖程":"衝程",
"沖穴":"衝穴",
"沖突":"衝突",
"沖脈":"衝脈",
"沖自":"沖自",
"沖自己":"衝自己",
"沖至":"衝至",
"沖落":"衝落",
"沖著":"衝著",
"沖要":"衝要",
"沖起":"衝起",
"沖越":"衝越",
"沖跑":"衝跑",
"沖軍":"衝軍",
"沖近":"衝近",
"沖進":"衝進",
"沖過":"衝過",
"沖量":"衝量",
"沖鋒":"衝鋒",
"沖鋒槍":"衝鋒槍",
"沖錯":"衝錯",
"沖門":"衝門",
"沖開":"衝開",
"沖闖":"衝闖",
"沖陣":"衝陣",
"沖陷":"衝陷",
"沖頭":"沖頭",
"沖頭陣":"衝頭陣",
"沖風":"衝風",
"沖馳":"衝馳",
"沖！":"衝！",
"河落":"河落",
"河落海干":"河落海乾",
"油面":"油麵",
"治愈":"治癒",
"治疔":"治療",
"沾汙":"玷汙",
"沾污":"玷汙",
"沾辱":"玷辱",
"沿著":"沿著",
"泛游":"泛遊",
"泛濫":"氾濫",
"泡制":"泡製",
"泡面":"泡麵",
"波裡":"波里",
"泥涂":"泥塗",
"泥象":"泥像",
"注:":"註:",
"注上":"註上",
"注冊":"註冊",
"注失":"註失",
"注明":"註明",
"注標":"註標",
"注生":"注生",
"注生娘娘":"註生娘娘",
"注疏":"註疏",
"注腳":"註腳",
"注解":"註解",
"注記":"註記",
"注譯":"註譯",
"注釋":"註釋",
"注銷":"註銷",
"注：":"註：",
"泰歷":"泰曆",
"泱郁":"泱鬱",
"洗手":"洗手",
"洗手不干":"洗手不幹",
"洗發":"洗髮",
"洗發動機":"洗發動機",
"洩欲":"洩慾",
"洩殖":"泄殖",
"洩沓":"泄沓",
"洩洩":"泄泄",
"洪范":"洪範",
"洲杯":"洲盃",
"洲游":"洲遊",
"活干":"活幹",
"活象":"活像",
"流卷":"流捲",
"流干":"流乾",
"流風":"流風",
"流風余":"流風餘",
"浚深":"濬深",
"浪一":"浪一",
"浪一沖":"浪一衝",
"浪卷":"浪捲",
"浪又":"浪又",
"浪又沖":"浪又衝",
"浪沖":"浪衝",
"浪琴":"浪琴",
"浪琴表":"浪琴錶",
"浮松":"浮鬆",
"浮簽":"浮籤",
"海函":"海涵",
"海干":"海乾",
"浸制":"浸製",
"涂上":"塗上",
"涂了":"塗了",
"涂來":"涂來",
"涂來涂去":"塗來塗去",
"涂到":"塗到",
"涂制":"塗製",
"涂去":"塗去",
"涂在":"塗在",
"涂地":"塗地",
"涂好":"塗好",
"涂寫":"塗寫",
"涂層":"塗層",
"涂布":"塗布",
"涂得":"塗得",
"涂成":"塗成",
"涂抹":"塗抹",
"涂掉":"塗掉",
"涂改":"塗改",
"涂料":"塗料",
"涂有":"塗有",
"涂油":"塗油",
"涂涂":"塗塗",
"涂消":"塗消",
"涂滿":"塗滿",
"涂漆":"塗漆",
"涂潭":"塗潭",
"涂炭":"塗炭",
"涂竄":"塗竄",
"涂粉":"塗粉",
"涂脂":"塗脂",
"涂膠":"塗膠",
"涂色":"塗色",
"涂著":"塗著",
"涂藥":"塗藥",
"涂蠟":"塗蠟",
"涂裝":"塗裝",
"涂覆":"塗覆",
"涂說":"塗說",
"涂過":"塗過",
"涂銷":"塗銷",
"涂飾":"塗飾",
"涂鴉":"塗鴉",
"涂鴨":"塗鴨",
"涂黑":"塗黑",
"涅盤":"涅槃",
"消費":"消費",
"消費欲":"消費慾",
"液晶":"液晶",
"液晶表":"液晶錶",
"涼席":"涼蓆",
"涼面":"涼麵",
"淀粉":"澱粉",
"淑范":"淑範",
"淒息":"棲息",
"淒戚":"悽慼",
"淚干":"淚乾",
"淚難":"淚難",
"淚難干":"淚難乾",
"淨余":"淨餘",
"淨幾":"淨几",
"淫欲":"淫慾",
"淬厲":"淬礪",
"淳於":"淳于",
"淳朴":"淳樸",
"混肴":"混淆",
"清掃":"清掃",
"清掃夫":"清掃伕",
"清淅":"清晰",
"清理":"清理",
"清道":"清道",
"清道夫":"清道伕",
"減征":"減徵",
"渠沖":"渠衝",
"測不":"測不",
"測不准":"測不準",
"測准":"測準",
"港制":"港製",
"游中":"游中",
"游中國":"遊中國",
"游亞":"游亞",
"游亞洲":"遊亞洲",
"游人":"遊人",
"游仙":"遊仙",
"游伴":"遊伴",
"游俠":"遊俠",
"游兵":"遊兵",
"游冶":"遊冶",
"游刃":"遊刃",
"游北":"游北",
"游北美":"遊北美",
"游台":"游台",
"游台灣":"遊台灣",
"游唱":"遊唱",
"游園":"遊園",
"游子":"遊子",
"游學":"遊學",
"游客":"遊客",
"游宦":"遊宦",
"游山":"遊山",
"游巡":"遊巡",
"游廊":"遊廊",
"游必":"游必",
"游必有方":"遊必有方",
"游惰":"遊惰",
"游憩":"遊憩",
"游戲":"遊戲",
"游斗":"游鬥",
"游方":"遊方",
"游星":"遊星",
"游樂":"遊樂",
"游歐":"游歐",
"游歐洲":"遊歐洲",
"游歷":"遊歷",
"游湖":"遊湖",
"游澳":"游澳",
"游澳洲":"遊澳洲",
"游牧":"遊牧",
"游狎":"遊狎",
"游獵":"遊獵",
"游玩":"遊玩",
"游目":"遊目",
"游美":"游美",
"游美洲":"遊美洲",
"游興":"遊興",
"游船":"遊船",
"游艇":"遊艇",
"游蕩":"遊蕩",
"游藝":"遊藝",
"游蜂":"遊蜂",
"游行":"遊行",
"游街":"遊街",
"游覽":"遊覽",
"游觀":"遊觀",
"游記":"遊記",
"游說":"遊說",
"游豫":"遊豫",
"游走":"遊走",
"游蹤":"遊蹤",
"游軍":"遊軍",
"游逛":"遊逛",
"游遍":"遊遍",
"游錯":"遊錯",
"游非":"游非",
"游非洲":"遊非洲",
"游香":"游香",
"游香港":"遊香港",
"游騎":"遊騎",
"游魂":"遊魂",
"渾函":"渾涵",
"湧卷":"湧捲",
"湮郁":"湮鬱",
"湯團":"湯糰",
"湯面":"湯麵",
"溜達":"溜躂",
"溜須":"溜須",
"溜須拍馬":"溜鬚拍馬",
"溪壑":"谿壑",
"溶岩":"熔岩",
"溶接":"熔接",
"溶爐":"熔爐",
"溶銷":"熔銷",
"溶鑄":"熔鑄",
"滴干":"滴乾",
"滾卷":"滾捲",
"滿布":"滿佈",
"漓水":"灕水",
"漓江":"灕江",
"漓湘":"灕湘",
"漢周":"漢周",
"漫游":"漫遊",
"漬已":"漬已",
"漬已干":"漬已乾",
"漸愈":"漸癒",
"漸松":"漸鬆",
"漿劃":"槳劃",
"潤發":"潤髮",
"潦闊":"遼闊",
"潮卷":"潮捲",
"澆制":"澆製",
"激干":"激幹",
"激斗":"激鬥",
"激蕩":"激盪",
"濃發":"濃髮",
"濃纖":"穠纖",
"濕發":"濕髮",
"濛松":"濛鬆",
"濫征":"濫徵",
"濫芋":"濫芋",
"濫芋充數":"濫竽充數",
"瀝干":"瀝乾",
"灌制":"灌製",
"灘涂":"灘塗",
"火折":"火摺",
"火拼":"火拚",
"火簽":"火籤",
"灰發":"灰髮",
"灰盡":"灰燼",
"灰胡":"灰鬍",
"灰蒙":"灰濛",
"灰郁":"灰鬱",
"灸熱":"炙熱",
"炒干":"炒乾",
"炒面":"炒麵",
"炮制":"炮製",
"炸毀":"炸燬",
"為准":"為準",
"為范":"為範",
"烏丘":"烏坵",
"烏發":"烏髮",
"烏裡":"烏里",
"烏龍":"烏龍",
"烏龍面":"烏龍麵",
"烘制":"烘製",
"烘干":"烘乾",
"烘熏":"烘燻",
"烤干":"烤乾",
"烹制":"烹製",
"焊接":"銲接",
"焙干":"焙乾",
"焚毀":"焚燬",
"無余":"無餘",
"無梁":"無樑",
"無欲":"無慾",
"無煙":"無煙",
"無煙室":"無菸室",
"無煙環境":"無菸環境",
"無煙餐廳":"無菸餐廳",
"無釐":"無釐",
"無釐頭":"無厘頭",
"焦干":"焦乾",
"然斗":"然斗",
"然斗不":"然鬥不",
"然無":"然無",
"然無幸":"然無倖",
"然象":"然像",
"煉制":"煉製",
"煉子":"鍊子",
"煉鎖":"鍊鎖",
"煎制":"煎製",
"煙卷":"菸捲",
"煙商":"菸商",
"煙客":"菸客",
"煙槍":"菸槍",
"煙民":"菸民",
"煙沒":"湮沒",
"煙灰":"菸灰",
"煙焦":"煙焦",
"煙焦油":"菸焦油",
"煙熏":"煙燻",
"煙癮":"菸癮",
"煙草":"菸草",
"煙酒":"菸酒",
"煙頭":"菸頭",
"煙鬼":"菸鬼",
"煙齡":"菸齡",
"照准":"照準",
"照干":"照幹",
"照象":"照像",
"煨干":"煨乾",
"煩郁":"煩鬱",
"煮面":"煮麵",
"熏制":"燻製",
"熏煙":"燻煙",
"熏煮":"燻煮",
"熏熏":"燻燻",
"熏熟":"燻熟",
"熏熱":"燻熱",
"熏肉":"燻肉",
"熏蒸":"燻蒸",
"熏豬":"燻豬",
"熏鴨":"燻鴨",
"熏鵝":"燻鵝",
"熏黑":"燻黑",
"熒光":"螢光",
"熒屏":"螢屏",
"熒幕":"螢幕",
"熒郁":"熒鬱",
"熔毀":"熔燬",
"熨干":"熨乾",
"熬制":"熬製",
"燈彩":"燈綵",
"燎發":"燎髮",
"燒制":"燒製",
"燒干":"燒乾",
"燒毀":"燒燬",
"燕游":"燕遊",
"燕燕":"燕燕",
"燕燕於飛":"燕燕于飛",
"燙發":"燙髮",
"燙面":"燙麵",
"營干":"營幹",
"燴制":"燴製",
"燴干":"燴乾",
"燼余":"燼餘",
"爭斗":"爭鬥",
"片姜":"片薑",
"片紙":"片紙",
"片紙只字":"片紙隻字",
"片言":"片言",
"片言只語":"片言隻語",
"牙簽":"牙籤",
"牛只":"牛隻",
"牛柳":"牛柳",
"牛柳面":"牛柳麵",
"物志":"物誌",
"物欲":"物慾",
"牲干":"牲干",
"牲干下":"牲幹下",
"特制":"特製",
"特征":"特徵",
"牽一":"牽一",
"牽一發":"牽一髮",
"牽系":"牽繫",
"犁牛":"犛牛",
"犬只":"犬隻",
"狂卷":"狂捲",
"狂征":"狂徵",
"狂沖":"狂衝",
"狂贊":"狂讚",
"狠、":"狠、",
"狠、准":"狠、準",
"狠且":"狠且",
"狠且准":"狠且準",
"狠又":"狠又",
"狠又准":"狠又準",
"狠干":"狠幹",
"狠斗":"狠鬥",
"狼借":"狼藉",
"猛卷":"猛捲",
"猛干":"猛幹",
"猛斗":"猛鬥",
"猛沖":"猛衝",
"猜准":"猜準",
"猶太":"猶太",
"猶太歷":"猶太曆",
"猷豫":"猶豫",
"獎杯":"獎盃",
"獨斗":"獨鬥",
"獨游":"獨遊",
"獨辟":"獨闢",
"獨辟蹊徑":"獨闢蹊徑",
"獨鐘":"獨鍾",
"獸奸":"獸姦",
"獸欲":"獸慾",
"獻丑":"獻醜",
"玉佩":"玉珮",
"玉制":"玉製",
"王後":"王后",
"玲朧":"玲瓏",
"玻裡":"玻裡",
"玻裡尼西":"玻里尼西",
"現丑":"現醜",
"現象":"現象",
"球台":"球檯",
"球果":"毬果",
"球桿":"球杆",
"球童":"球僮",
"琅嬛":"瑯嬛",
"琅當":"琅璫",
"理發":"理髮",
"琢制":"琢製",
"琳琅":"琳瑯",
"琺琅":"琺瑯",
"瑞哲":"睿哲",
"瑞智":"睿智",
"瑤簽":"瑤籤",
"璀燦":"璀璨",
"璨爛":"燦爛",
"環佩":"環珮",
"環游":"環遊",
"瓶白":"瓶白",
"瓶白干":"瓶白乾",
"瓷制":"瓷製",
"甘乃":"甘乃",
"甘乃迪":"甘迺迪",
"甘薯":"甘藷",
"甚丑":"甚醜",
"甚准":"甚準",
"甚松":"甚鬆",
"甚麼":"甚麼",
"甚麼都干":"甚麼都幹",
"甜面":"甜面",
"甜面醬":"甜麵醬",
"生克":"生剋",
"生力":"生力",
"生力面":"生力麵",
"生姜":"生薑",
"生得":"生得",
"生得丑":"生得醜",
"生理":"生理",
"生發":"生發",
"生發水":"生髮水",
"生發藥":"生髮藥",
"生長":"生長",
"甩發":"甩髮",
"甲胄":"甲冑",
"男用":"男用",
"男用表":"男用錶",
"留發":"留髮",
"畛懷":"軫懷",
"畝余":"畝餘",
"略干":"略乾",
"略松":"略鬆",
"畦徑":"畦逕",
"番薯":"蕃薯",
"畫象":"畫像",
"畫餅":"畫餅",
"畫餅充飢":"畫餅充饑",
"當一":"當一",
"當一聲":"噹一聲",
"當其":"當其",
"當其沖":"當其衝",
"當准":"當準",
"當周":"當週",
"當周潤發":"當周潤發",
"當啷":"噹啷",
"當局":"當局",
"當年":"當年",
"當然":"當然",
"當然羅！":"當然囉！",
"當當":"噹噹",
"當當當":"噹噹噹",
"當的":"當的",
"當的一聲":"噹的一聲",
"當的一響":"噹的一響",
"當郎":"噹啷",
"疆弩":"疆弩",
"疆弩之末":"彊弩之末",
"疏松":"疏鬆",
"疏浚":"疏濬",
"疑系":"疑係",
"疔傷":"療傷",
"疲困":"疲睏",
"疾卷":"疾捲",
"疾沖":"疾衝",
"病入":"病入",
"病入膏盲":"病入膏肓",
"病征":"病徵",
"病愈":"病癒",
"病難":"病難",
"病難愈":"病難癒",
"症結":"癥結",
"痊愈":"痊癒",
"痙孿":"痙攣",
"發乳":"髮乳",
"發亂":"發亂",
"發亂釵橫":"髮亂釵橫",
"發冠":"髮冠",
"發卷":"髮捲",
"發型":"髮型",
"發夾":"髮夾",
"發套":"髮套",
"發如":"發如",
"發如飛蓬":"髮如飛蓬",
"發妻":"髮妻",
"發姐":"髮姐",
"發布":"發佈",
"發帶":"髮帶",
"發干":"發乾",
"發廊":"髮廊",
"發式":"髮式",
"發指":"髮指",
"發指令":"發指令",
"發挽":"發挽",
"發挽雙髻":"髮挽雙髻",
"發束":"髮束",
"發根":"髮根",
"發梢":"髮梢",
"發梳":"髮梳",
"發油":"髮油",
"發皓":"髮皓",
"發箋":"髮箋",
"發箍":"髮箍",
"發簪":"髮簪",
"發絲":"髮絲",
"發纓":"髮纓",
"發膚":"髮膚",
"發膠":"髮膠",
"發色":"髮色",
"發菜":"髮菜",
"發蠟":"髮蠟",
"發表":"發表",
"發表欲":"發表慾",
"發質":"髮質",
"發辮":"髮辮",
"發醅":"醱醅",
"發針":"髮針",
"發釵":"髮釵",
"發長":"髮長",
"發長音":"發長音",
"發際":"髮際",
"發雕":"髮雕",
"發霜":"髮霜",
"發面":"發麵",
"發須":"發須",
"發須俱":"髮鬚俱",
"發須已":"髮鬚已",
"發須斑":"髮鬚斑",
"發須皆":"髮鬚皆",
"發須都":"髮鬚都",
"發飾":"髮飾",
"發香":"髮香",
"發髯":"髮髯",
"發髻":"髮髻",
"發鬢":"髮鬢",
"發黴":"發霉",
"白淅":"白皙",
"白澈":"白皙",
"白發":"白髮",
"白白":"白白",
"白白干":"白白幹",
"白術":"白朮",
"白面":"白面",
"白面無須":"白面無鬚",
"白須":"白鬚",
"百余":"百餘",
"百余只":"百餘隻",
"百余裡":"百餘里",
"百只":"百隻",
"百天":"百天",
"百天后":"百天後",
"百姓":"百姓",
"百姓於":"百姓於",
"百拙":"百拙",
"百拙千丑":"百拙千醜",
"百海":"百海",
"百海裡":"百海里",
"百裡":"百里",
"的丑":"的醜",
"的丑相":"的醜相",
"的亮":"的亮",
"的亮發":"的亮髮",
"的發":"的發",
"的發型":"的髮型",
"的發式":"的髮式",
"皆准":"皆準",
"皆雲":"皆云",
"皇後":"皇后",
"皇歷":"皇曆",
"皓發":"皓髮",
"皮制":"皮製",
"皮松":"皮鬆",
"皺折":"皺摺",
"盆吊":"盆弔",
"盈余":"盈餘",
"盍然":"溘然",
"盍盍":"溘溘",
"盍謝":"溘謝",
"盍逝":"溘逝",
"盛贊":"盛讚",
"盜采":"盜採",
"盡先":"儘先",
"盡可":"盡可",
"盡可能":"儘可能",
"盡夠":"儘夠",
"盡干":"盡幹",
"盡教":"儘教",
"盡早":"儘早",
"盡是":"儘是",
"盡有":"盡有",
"盡有可能":"儘有可能",
"盡管":"儘管",
"盡量":"儘量",
"監制":"監製",
"盤卷":"盤捲",
"盤回":"盤迴",
"盤涅":"槃涅",
"盤游":"盤遊",
"目定":"目定",
"目定口呆":"目瞪口呆",
"目我":"目我",
"目我於思":"目我于思",
"盯准":"盯準",
"盲干":"盲幹",
"盲沖":"盲衝",
"直卷":"直捲",
"直干":"直幹",
"直沖":"直衝",
"直發":"直髮",
"直發抖":"直發抖",
"直發毛":"直發毛",
"直發汗":"直發汗",
"相並":"相併",
"相克":"相剋",
"相准":"相準",
"相奸":"相姦",
"相干":"相干",
"相形":"相形",
"相形見拙":"相形見絀",
"相拼":"相拚",
"相斗":"相鬥",
"相當":"相當",
"相當准":"相當準",
"相象":"相像",
"相關":"相關",
"眈誤":"耽誤",
"看不":"看不",
"看不准":"看不準",
"看准":"看準",
"看出":"看出",
"看出電影":"看齣電影",
"看著":"看著",
"真丑":"真醜",
"真准":"真準",
"真凶":"真兇",
"真知":"真知",
"真知卓見":"真知灼見",
"真締":"真諦",
"真象":"真像",
"真象科":"真象科",
"眩耀":"炫耀",
"眼困":"眼睏",
"眼框":"眼眶",
"眼花":"眼花",
"眼花了亂":"眼花瞭亂",
"睡眠":"睡眠",
"睡眠欲":"睡眠慾",
"瞄不":"瞄不",
"瞄不准":"瞄不準",
"瞄准":"瞄準",
"瞅不":"瞅不",
"瞅不准":"瞅不準",
"瞅准":"瞅準",
"瞌然":"瞌然",
"瞌然長逝":"溘然長逝",
"瞎沖":"瞎衝",
"瞥准":"瞥準",
"瞧不":"瞧不",
"瞧不准":"瞧不準",
"瞧准":"瞧準",
"瞧著":"瞧著",
"知丑":"知醜",
"短小":"短小",
"短小精干":"短小精悍",
"短發":"短髮",
"短發性":"短發性",
"短須":"短鬚",
"石制":"石製",
"石梁":"石樑",
"石膏":"石膏",
"石膏象":"石膏像",
"石英":"石英",
"石英表":"石英錶",
"石英鐘":"石英鍾",
"石象":"石像",
"砌並":"砌併",
"砍准":"砍準",
"研制":"研製",
"砰當":"砰噹",
"破壞":"破壞",
"破壞欲":"破壞慾",
"硬干":"硬幹",
"硬拼":"硬拚",
"硬沖":"硬衝",
"硬發":"硬髮",
"碎發":"碎髮",
"碑志":"碑誌",
"碗干":"碗乾",
"碗白":"碗白",
"碗白干":"碗白乾",
"碗素":"碗素",
"碗素面":"碗素麵",
"碗面":"碗麵",
"碧咸":"碧咸",
"確系":"確係",
"確系著":"確繫著",
"磁制":"磁製",
"磋跎":"蹉跎",
"磨制":"磨製",
"示范":"示範",
"神佑":"神祐",
"神准":"神準",
"神只":"神祇",
"神游":"神遊",
"神祗":"神祇",
"神經":"神經",
"神經干":"神經幹",
"神象":"神像",
"神跡":"神蹟",
"祭吊":"祭弔",
"禁欲":"禁慾",
"禁煙":"禁菸",
"禁若":"禁若",
"禁若寒蟬":"噤若寒蟬",
"禮贊":"禮讚",
"禿發":"禿髮",
"秀發":"秀髮",
"私下":"私下",
"私下裡":"私下裡",
"私斗":"私鬥",
"私欲":"私慾",
"秋不":"秋不",
"秋不干":"秋不乾",
"秋千":"鞦韆",
"秋台":"秋颱",
"秋游":"秋遊",
"秒表":"秒錶",
"秘制":"秘製",
"租貸":"租賃",
"秤鎚":"秤錘",
"稀松":"稀鬆",
"稀裡":"稀里",
"稍干":"稍干",
"稍干的":"稍乾的",
"稍有":"稍有",
"稍有不准":"稍有不準",
"稍松":"稍鬆",
"稟復":"稟覆",
"種師":"種師",
"種師中":"种師中",
"種師道":"种師道",
"種放":"种放",
"種發":"種發",
"種發式":"種髮式",
"種谷":"種穀",
"稱贊":"稱讚",
"稻桿":"稻稈",
"稻谷":"稻穀",
"稽康":"嵇康",
"稽征":"稽徵",
"積淀":"積澱",
"積谷":"積穀",
"積郁":"積鬱",
"穩且":"穩且",
"穩且准":"穩且準",
"穩扎":"穩紮",
"穩穩":"穩穩",
"穩穩當當":"穩穩當當",
"空余":"空餘",
"空蒙":"空濛",
"穿著":"穿著",
"窒欲":"窒慾",
"窗台":"窗檯",
"窣悉":"窣窸",
"窩裡":"窩裡",
"窩裡斗":"窩裡鬥",
"窺准":"窺準",
"竟斗":"竟斗",
"竟斗不":"竟鬥不",
"竟象":"竟像",
"童仆":"僮僕",
"童婢":"僮婢",
"競斗":"競鬥",
"竹制":"竹製",
"竹席":"竹蓆",
"竹框":"竹筐",
"竹桿":"竹竿",
"竹簽":"竹籤",
"竹荀":"竹筍",
"竹藤":"竹籐",
"竽頭":"芋頭",
"笆蕉":"芭蕉",
"笑容":"笑容",
"笑容可鞠":"笑容可掬",
"笑訥":"笑納",
"笑魘":"笑靨",
"符錄":"符籙",
"筆禿":"筆禿",
"筆禿墨干":"筆禿墨乾",
"等侯":"等候",
"筋斗":"觔斗",
"筍干":"筍乾",
"筍況":"荀況",
"答復":"答覆",
"策勳":"策勛",
"算不":"算不",
"算不准":"算不準",
"算丑":"算醜",
"算准":"算準",
"管理":"管理",
"箱函":"箱涵",
"節余":"節餘",
"節欲":"節慾",
"篷松":"篷鬆",
"篾簞":"篾簟",
"簡朴":"簡樸",
"簫條":"蕭條",
"簽卜":"籤卜",
"簽文":"籤文",
"簽條":"籤條",
"簽爪":"籤爪",
"簽筒":"籤筒",
"簽詩":"籤詩",
"籍口":"藉口",
"籮卜":"蘿蔔",
"籲了":"吁了",
"籲俞":"吁俞",
"籲咈":"吁咈",
"籲嗟":"吁嗟",
"籲嘆":"吁嘆",
"籲噓":"吁噓",
"籲氣":"吁氣",
"籲籲":"吁吁",
"米余":"米餘",
"米谷":"米穀",
"粉制":"粉製",
"粉干":"粉乾",
"粗制":"粗製",
"粗朴":"粗樸",
"精准":"精準",
"精制":"精製",
"精干":"精幹",
"精致":"精緻",
"精辟":"精闢",
"糊口":"餬口",
"糊涂":"糊塗",
"糟塌":"糟蹋",
"糟達":"蹧躂",
"糟遢":"糟蹋",
"糸於":"糸於",
"糸於一線":"繫於一線",
"系一":"系一",
"系一片":"係一片",
"系一番":"係一番",
"系一種":"係一種",
"系一線":"繫一線",
"系上":"繫上",
"系乎":"繫乎",
"系了":"繫了",
"系住":"繫住",
"系個":"繫個",
"系囚":"繫囚",
"系塊":"繫塊",
"系妥":"繫妥",
"系帶":"繫帶",
"系引":"係引",
"系心":"繫心",
"系念":"繫念",
"系懷":"繫懷",
"系手":"繫手",
"系指":"係指",
"系掛":"繫掛",
"系數":"係數",
"系於":"繫於",
"系於一發":"繫於一髮",
"系條":"繫條",
"系為":"係為",
"系爭":"係爭",
"系牢":"繫牢",
"系獲":"係獲",
"系留":"繫留",
"系發":"系發",
"系發帶":"繫髮帶",
"系累":"係累",
"系絆":"繫絆",
"系絲":"系絲",
"系絲帶":"繫絲帶",
"系緊":"繫緊",
"系縛":"繫縛",
"系繩":"繫繩",
"系纜":"繫纜",
"系腰":"繫腰",
"系腳":"繫腳",
"系膜":"繫膜",
"系著":"繫著",
"系裹":"繫裹",
"系褲":"系褲",
"系褲子":"繫褲子",
"系起":"繫起",
"系踵":"係踵",
"系辭":"繫辭",
"系鈴":"繫鈴",
"系鈴人":"繫鈴人",
"系鞋":"系鞋",
"系鞋帶":"繫鞋帶",
"系頭":"系頭",
"系頭巾":"繫頭巾",
"系頸":"繫頸",
"系頸闕庭":"係頸闕庭",
"系風":"系風",
"系風捕景":"係風捕景",
"系馬":"繫馬",
"紀念":"紀念",
"紀念周":"紀念週",
"紀歷":"紀曆",
"約斗":"約鬥",
"約雇":"約僱",
"紅簽":"紅籤",
"紅須":"紅須",
"紅須綠眼":"紅鬚綠眼",
"紆余":"紆餘",
"紆回":"紆迴",
"紆郁":"紆鬱",
"紈絝":"紈袴",
"紈絝子弟":"紈褲子弟",
"紈袴":"紈褲",
"納征":"納徵",
"純朴":"純樸",
"純系":"純係",
"紙扎":"紙紮",
"素朴":"素樸",
"素食":"素食",
"素食面":"素食麵",
"紡鎚":"紡錘",
"索馬":"索馬",
"索馬利裡":"索馬利里",
"索馬裡":"索馬里",
"索馬裡蘭":"索馬里蘭",
"紫姜":"紫薑",
"累累":"纍纍",
"細致":"細緻",
"結伙":"結夥",
"結余":"結餘",
"結彩":"結綵",
"結扎":"結紮",
"結發":"結髮",
"絞干":"絞乾",
"給他":"給他",
"給他干糧":"給他乾糧",
"給你":"給你",
"給你干糧":"給你乾糧",
"給她":"給她",
"給她干糧":"給她乾糧",
"給我":"給我",
"給我干淨":"給我乾淨",
"絲制":"絲製",
"絲弦":"絲絃",
"綁扎":"綁紮",
"經斗":"經斗",
"經斗數":"經鬥數",
"經理":"經理",
"經白":"經白",
"經白干":"經白幹",
"綜合":"綜合",
"綜合征":"綜合徵",
"綢密":"稠密",
"維系":"維繫",
"綰發":"綰髮",
"網志":"網誌",
"網游":"網遊",
"緊卷":"緊捲",
"緊扎":"緊紮",
"緒余":"緒餘",
"緝凶":"緝兇",
"編發":"編髮",
"編篡":"編纂",
"編采":"編採",
"緩征":"緩徵",
"緩沖":"緩衝",
"緲茫":"渺茫",
"縈回":"縈迴",
"縝致":"縝緻",
"縣志":"縣誌",
"縫制":"縫製",
"縫扎":"縫紮",
"縫紝":"縫紉",
"縮栗":"縮慄",
"縱橫":"縱橫",
"縱橫交布":"縱橫交佈",
"縱欲":"縱慾",
"縻系":"縻繫",
"總理":"總理",
"繁復":"繁複",
"繞梁":"繞樑",
"繡象":"繡像",
"繪制":"繪製",
"繼續":"繼續",
"繼續干":"繼續幹",
"纂位":"篡位",
"續弦":"續絃",
"纏卷":"纏捲",
"纏斗":"纏鬥",
"纖夫":"縴夫",
"缺舌":"鴃舌",
"罔然":"惘然",
"罔罔":"惘惘",
"罩准":"罩準",
"罩卷":"罩捲",
"罷斗":"罷鬥",
"羅哩":"囉哩",
"羅唆":"囉唆",
"羅嗦":"囉嗦",
"羅囉":"囉囉",
"羅囉唆唆":"囉囉唆唆",
"羅囉嗦嗦":"囉囉嗦嗦",
"羅羅":"羅羅",
"羅羅蘇蘇":"囉囉囌囌",
"羅蘇":"囉囌",
"羅裡":"羅里",
"羅裡囉唆":"囉哩囉唆",
"羅裡囉嗦":"囉哩囉嗦",
"羅裡羅蘇":"囉哩囉囌",
"羅難":"罹難",
"羅音":"囉音",
"羈拌":"羈絆",
"美丑":"美醜",
"美制":"美製",
"美制定":"美制定",
"美制訂":"美制訂",
"美或":"美或",
"美或丑":"美或醜",
"美與":"美與",
"美與丑":"美與醜",
"羞赦":"羞赧",
"羡余":"羨餘",
"群斗":"群鬥",
"群象":"群像",
"羹面":"羹麵",
"翕辟":"翕闢",
"翦彩":"翦綵",
"翱游":"翱遊",
"翻來":"翻來",
"翻來復去":"翻來覆去",
"翻卷":"翻捲",
"翻台":"翻檯",
"翻松":"翻鬆",
"翻雲":"翻雲",
"翻雲復雨":"翻雲覆雨",
"老丑":"老醜",
"老且":"老且",
"老且丑":"老且醜",
"老姜":"老薑",
"老板":"老闆",
"老麼":"老么",
"考征":"考徵",
"者系":"者係",
"者雲":"者云",
"而云":"而云",
"而云然雲":"而云然",
"而云爾雲":"而云爾",
"而云詩雲":"而云詩",
"而象":"而像",
"耐心":"耐心",
"耐心細緻":"耐心細緻",
"耕獲":"耕穫",
"耗干":"耗乾",
"聊天":"聊天",
"聊齋":"聊齋",
"聊齋志異":"聊齋誌異",
"聖嘆":"聖歎",
"聖杯":"聖盃",
"聖象":"聖像",
"聖跡":"聖蹟",
"聘雇":"聘僱",
"聯准":"聯准",
"聯准局":"聯準局",
"聯征":"聯徵",
"聯手":"聯手",
"聯手斗":"聯手鬥",
"聯系":"聯繫",
"聯系統":"聯系統",
"聽不":"聽不",
"聽不准":"聽不準",
"聽著":"聽著",
"肆業":"肄業",
"肉干":"肉乾",
"肉松":"肉鬆",
"肉欲":"肉慾",
"肉絲":"肉絲",
"肉絲面":"肉絲麵",
"肉面":"肉麵",
"肖象":"肖像",
"肝髒":"肝臟",
"股栗":"股慄",
"肢体":"肢體",
"肯干":"肯幹",
"肯干啊":"肯幹啊",
"肴撰":"餚饌",
"肺髒":"肺臟",
"胃髒":"胃臟",
"背影":"背影",
"背影後":"背影後",
"背系":"背繫",
"胡子":"鬍子",
"胡干":"胡幹",
"胡梢":"鬍梢",
"胡涂":"胡塗",
"胡渣":"鬍渣",
"胡碴":"胡碴",
"胡碴子":"鬍碴子",
"胡裡":"胡裡",
"胡裡胡涂":"糊裡糊塗",
"胡雪":"胡雪",
"胡雪岩":"胡雪巖",
"胡須":"鬍鬚",
"胡髭":"鬍髭",
"胡髯":"鬍髯",
"胡鬢":"鬍鬢",
"胰髒":"胰臟",
"能干":"能幹",
"能干休":"能干休",
"能干嚎":"能乾嚎",
"能干巴巴":"能乾巴巴",
"能干擱":"能乾擱",
"能干擾":"能干擾",
"能干政":"能干政",
"能干杯":"能乾杯",
"能干涉":"能干涉",
"能干淨":"能乾淨",
"能干瞪":"能乾瞪",
"能干笑":"能乾笑",
"能干系":"能干系",
"能干耗":"能乾耗",
"能干脆":"能乾脆",
"能干著急":"能乾著急",
"能干預":"能干預",
"能舍":"能捨",
"能象":"能像",
"能象征":"能象徵",
"能象征性":"能象徵性",
"脈沖":"脈衝",
"脊梁":"脊樑",
"脣干":"脣乾",
"脫發":"脫髮",
"脺髒":"脺臟",
"脾髒":"脾臟",
"腎髒":"腎臟",
"腐余":"腐餘",
"腑髒":"腑臟",
"腕表":"腕錶",
"腦干":"腦幹",
"腮胡":"腮鬍",
"腰一":"腰一",
"腰一卷":"腰一捲",
"腰干":"腰幹",
"腰系":"腰繫",
"腰間":"腰間",
"腰間系":"腰間繫",
"腳夫":"腳伕",
"腳注":"腳註",
"腳煉":"腳鍊",
"腸髒":"腸臟",
"膠制":"膠製",
"膨松":"膨鬆",
"膺品":"贗品",
"膽戰":"膽顫",
"臂一":"臂一",
"臂一卷":"臂一捲",
"臥游":"臥遊",
"自助":"自助",
"自助游":"自助遊",
"自愈":"自癒",
"自贊":"自讚",
"自采":"自採",
"致密":"緻密",
"舂谷":"舂穀",
"舄湖":"潟湖",
"與他":"與他",
"與他一斗":"與他一鬥",
"與女":"與女",
"與女斗":"與女鬥",
"與她":"與她",
"與她一斗":"與她一鬥",
"舊歷":"舊曆",
"舊歷史":"舊歷史",
"舊游":"舊遊",
"舌一":"舌一",
"舌一卷":"舌一捲",
"舍下":"舍下",
"舍下他":"捨下他",
"舍下你":"捨下你",
"舍下她":"捨下她",
"舍下我":"捨下我",
"舍不":"舍不",
"舍不得":"捨不得",
"舍出":"捨出",
"舍去":"捨去",
"舍命":"捨命",
"舍己":"捨己",
"舍得":"捨得",
"舍我":"舍我",
"舍我其誰":"捨我其誰",
"舍本":"捨本",
"舍棄":"捨棄",
"舍死":"捨死",
"舍生":"捨生",
"舍短":"捨短",
"舍舊":"舍舊",
"舍舊迎新":"捨舊迎新",
"舍身":"捨身",
"舍車":"舍車",
"舍車保帥":"捨車保帥",
"舍近":"捨近",
"舒卷":"舒捲",
"舒寧":"舒寧",
"舒寧咸":"舒寧咸",
"舔干":"舔乾",
"舞卷":"舞捲",
"舞娘":"舞孃",
"舞後":"舞后",
"舟揖":"舟楫",
"航海":"航海",
"航海歷":"航海曆",
"般准":"般準",
"舶船":"泊船",
"船只":"船隻",
"船夫":"船伕",
"船梁":"船樑",
"船漿":"船槳",
"船纖":"船縴",
"船蓬":"船篷",
"艦只":"艦隻",
"艨沖":"艨衝",
"良游":"良遊",
"色欲":"色慾",
"花卷":"花捲",
"花發":"花發",
"花發老":"花髮老",
"花雕":"花彫",
"苛征":"苛徵",
"若干":"若干",
"若象":"若像",
"苦干":"苦幹",
"苦斗":"苦鬥",
"苦瓜":"苦瓜",
"苦瓜干":"苦瓜乾",
"英九":"英九",
"英寸":"英吋",
"英尺":"英呎",
"英裡":"英里",
"范不":"范不",
"范不著":"範不著",
"范例":"範例",
"范圍":"範圍",
"范式":"範式",
"范文":"範文",
"范本":"範本",
"范疇":"範疇",
"范行":"範行",
"范險":"範險",
"茅蘆":"茅廬",
"茶余":"茶餘",
"茶已":"茶已",
"茶已干":"茶已乾",
"茶干":"茶干",
"茶干掉":"荼乾掉",
"茶干盡":"茶乾盡",
"茶幾":"茶几",
"茶毒":"荼毒",
"茶鹵":"茶滷",
"草席":"草蓆",
"草管":"草管",
"草管人命":"草菅人命",
"荊朴":"荊璞",
"荷裡":"荷裡",
"荷裡活":"荷里活",
"莒光":"莒光",
"莒光周":"莒光週",
"莖干":"莖幹",
"莫明":"莫明",
"莫明其妙":"莫名其妙",
"莫裡":"莫里",
"菜干":"菜乾",
"菜肴":"菜餚",
"華裡":"華裡",
"華裡沙":"華里沙",
"萬余":"萬餘",
"萬余只":"萬餘隻",
"萬余裡":"萬餘里",
"萬只":"萬隻",
"萬只怕":"萬只怕",
"萬歷":"萬曆",
"萬海":"萬海",
"萬海裡":"萬海里",
"萬裡":"萬里",
"落發":"落髮",
"葉裡":"葉裡",
"葉裡溫":"葉里溫",
"著干":"著幹",
"葡萄":"葡萄",
"葡萄干":"葡萄乾",
"蒙住":"矇住",
"蒙叟":"矇叟",
"蒙懂":"懞懂",
"蒙敝":"矇蔽",
"蒙昧":"矇昧",
"蒙朧":"矇矓",
"蒙沖":"蒙衝",
"蒙混":"矇混",
"蒙瞀":"矇瞀",
"蒙瞢":"矇瞢",
"蒙瞽":"矇瞽",
"蒙矓":"矇矓",
"蒙蒙":"濛濛",
"蒙蒙朧":"朦朦朧",
"蒙蒙朧朧":"矇矇矓矓",
"蒙蒙矓":"矇矇矓",
"蒙蔽":"矇蔽",
"蒙霧":"濛霧",
"蒙騙":"矇騙",
"蒲席":"蒲蓆",
"蒸干":"蒸乾",
"蒼術":"蒼朮",
"蒼郁":"蒼鬱",
"蓄發":"蓄髮",
"蓄須":"蓄鬚",
"蓊郁":"蓊鬱",
"蓬松":"蓬鬆",
"蓬發":"蓬髮",
"蓬蓬":"蓬蓬",
"蓬蓬松松":"蓬蓬鬆鬆",
"蔣干":"蔣幹",
"蔥郁":"蔥鬱",
"蔭郁":"蔭鬱",
"蕩口":"盪口",
"蕩氣":"蕩氣",
"蕩氣回腸":"蕩氣迴腸",
"蕩氣回陽":"蕩氣迴陽",
"蕩秋":"蕩秋",
"蕩秋千":"盪鞦韆",
"蕩舟":"盪舟",
"蕩開":"盪開",
"薄幸":"薄倖",
"薦飢":"薦饑",
"藤制":"藤製",
"藤條":"籐條",
"藤椅":"籐椅",
"藥制":"藥製",
"藥簽":"藥籤",
"藥而":"藥而",
"藥而愈":"藥而癒",
"蘇裡":"蘇里",
"蘇醒":"甦醒",
"蘊借":"蘊藉",
"蘊函":"蘊涵",
"蘊釀":"醞釀",
"蘿卜":"蘿蔔",
"蘿卜干":"蘿蔔乾",
"虎咽":"虎嚥",
"虎斗":"虎鬥",
"虎須":"虎鬚",
"處理":"處理",
"處高":"處高",
"處高務遠":"處高鶩遠",
"虛象":"虛像",
"號志":"號誌",
"虯須":"虯鬚",
"蛋卷":"蛋捲",
"蛩音":"跫音",
"蝨目":"虱目",
"蟹螫":"蟹螯",
"蠟象":"蠟像",
"蠻准":"蠻準",
"蠻干":"蠻幹",
"蠻干淨":"蠻乾淨",
"蠻干燥":"蠻乾燥",
"蠻干爽":"蠻乾爽",
"血已":"血已",
"血已干":"血已乾",
"血才":"血才",
"血才干":"血才乾",
"血斗":"血鬥",
"行事":"行事",
"行事歷":"行事曆",
"行凶":"行兇",
"行屍":"行尸",
"行李":"行李",
"行李卷":"行李捲",
"行游":"行遊",
"衣物":"衣物",
"衣物已干":"衣物已乾",
"衣物漸干":"衣物漸乾",
"衣衫":"衣衫",
"衣衫已干":"衣衫已乾",
"衣驅":"衣袪",
"表帶":"錶帶",
"表店":"錶店",
"表廠":"錶廠",
"表征":"表徵",
"表殼":"錶殼",
"表演":"表演",
"表演欲":"表演慾",
"表煉":"錶鏈",
"表范":"表範",
"表鏈":"錶鏈",
"衫畢":"衫畢",
"衫畢挺":"衫筆挺",
"袖一":"袖一",
"袖一卷":"袖一捲",
"被並":"被併",
"被卷":"被捲",
"被干":"被幹",
"被干擾":"被干擾",
"被干涉":"被干涉",
"被干預":"被干預",
"被復":"被覆",
"被發":"被發",
"被發左衽":"被髮左衽",
"被褥":"被縟",
"裁並":"裁併",
"裁制":"裁製",
"裊雄":"梟雄",
"裕余":"裕餘",
"裙擺":"裙襬",
"補注":"補註",
"裝璜":"裝潢",
"裡亞":"里亞",
"裡仁":"里仁",
"裡余":"裡餘",
"裡士":"裡士",
"裡士滿":"里士滿",
"裡夫":"里夫",
"裡奧":"里奧",
"裡尼":"里尼",
"裡布":"里布",
"裡拉":"里拉",
"裡斯":"裡斯",
"裡斯本":"里斯本",
"裡昂":"里昂",
"裡根":"里根",
"裡民":"里民",
"裡爾":"里爾",
"裡科":"里科",
"裡程":"里程",
"裡約":"里約",
"裡納":"里納",
"裡美":"里美",
"裡肌":"里肌",
"裡蘭":"里蘭",
"裡象":"裡像",
"裡路":"里路",
"裡里":"里奇",
"裡長":"里長",
"裡面":"裡面",
"裡面沖":"裡面衝",
"裡面沖水":"裡面沖水",
"裡面沖洗":"裡面沖洗",
"裡面沖涼":"裡面沖涼",
"裡面沖澡":"裡面沖澡",
"裡面沖身":"裡面沖身",
"裹屍":"裹尸",
"裹扎":"裹紮",
"褐發":"褐髮",
"褻讀":"褻瀆",
"襁保":"襁褓",
"襤縷":"襤褸",
"襲卷":"襲捲",
"西周":"西周",
"西岳":"西嶽",
"西後":"西后",
"西昆":"西崑",
"西歷":"西曆",
"西沖":"西衝",
"西游":"西遊",
"西裝":"西裝",
"西裝畢挺":"西裝筆挺",
"西裡":"西里",
"要丑":"要丑",
"要丑上":"要醜上",
"要干":"要干",
"要干了":"要乾了",
"要干什麼":"要幹什麼",
"要干嘛":"要幹嘛",
"要干杯":"要乾杯",
"要斗":"要鬥",
"要衝":"要衝",
"要衝廁":"要沖廁",
"要衝水":"要沖水",
"要衝涼":"要沖涼",
"要象":"要像",
"規划":"規劃",
"規模":"規模",
"規范":"規範",
"覓准":"覓準",
"親自":"親自",
"親自干":"親自幹",
"覬幸":"覬倖",
"覷准":"覷準",
"觀斗":"觀鬥",
"觀采":"觀採",
"角斗":"角鬥",
"角落":"角落",
"解簽":"解籤",
"解簽約":"解簽約",
"解象":"解像",
"解雇":"解僱",
"觴子":"殤子",
"觸須":"觸鬚",
"訂制":"訂製",
"計准":"計準",
"評擊":"抨擊",
"評注":"評註",
"詞余":"詞餘",
"詞匯":"詞彙",
"詠嘆":"詠歎",
"試卷":"試卷",
"詩余":"詩餘",
"詩雲":"詩云",
"話雲":"話云",
"該像":"該像",
"該像征":"該象徵",
"該象":"該像",
"詳征":"詳徵",
"詳注":"詳註",
"誇克":"夸克",
"誇克星":"夸克星",
"誇父":"夸父",
"誇爾":"夸爾",
"誇特":"夸特",
"誇脫":"夸脫",
"誇贊":"誇讚",
"認丑":"認醜",
"認准":"認準",
"誘奸":"誘姦",
"誘欲":"誘慾",
"誘發":"誘發",
"誘發型":"誘發型",
"語匯":"語彙",
"語雲":"語云",
"誠征":"誠徵",
"誠朴":"誠樸",
"誣蔑":"誣衊",
"誤沖":"誤衝",
"說不":"說不",
"說不准":"說不準",
"說干":"說干",
"說干便干":"說幹便幹",
"說干就干":"說幹就幹",
"說得":"說得",
"說得個准":"說得個準",
"說的":"說的",
"說的准":"說的準",
"說簽":"說籤",
"誰干":"誰幹",
"誰干淨":"誰乾淨",
"誰干脆":"誰乾脆",
"誰是":"誰是",
"誰是於":"誰是于",
"課余":"課餘",
"課征":"課徵",
"調准":"調準",
"調制":"調製",
"調制解調":"調制解調",
"調松":"調鬆",
"請托":"請託",
"諸余":"諸餘",
"諸候":"諸侯",
"諺雲":"諺云",
"謀干":"謀幹",
"謬贊":"謬讚",
"謷丑":"謷醜",
"譁啦":"嘩啦",
"譁喇":"嘩喇",
"譁的":"譁的",
"譁的一聲":"嘩的一聲",
"譁譁":"嘩嘩",
"警剔":"警惕",
"譯注":"譯註",
"護發":"護髮",
"讀取":"讀取",
"讀取頭":"讀取頭",
"讀寫":"讀寫",
"讀寫頭":"讀寫頭",
"變丑":"變醜",
"變征":"變徵",
"變松":"變鬆",
"讖悔":"懺悔",
"谷倉":"穀倉",
"谷場":"穀場",
"谷子":"穀子",
"谷殼":"穀殼",
"谷物":"穀物",
"谷皮":"穀皮",
"谷神":"穀神",
"谷稻":"穀稻",
"谷米":"穀米",
"谷粉":"穀粉",
"谷粒":"穀粒",
"谷粟":"穀粟",
"谷艙":"穀艙",
"谷苗":"穀苗",
"谷草":"穀草",
"谷賤":"穀賤",
"谷道":"穀道",
"谷雨":"穀雨",
"谷類":"穀類",
"谷麥":"穀麥",
"豁上":"豁上",
"豁上干":"豁上幹",
"豁出":"豁出",
"豁出命干":"豁出命幹",
"豁命":"豁命",
"豁命干":"豁命幹",
"豁壑":"谿壑",
"豁死":"豁死",
"豁死干":"豁死幹",
"豁起":"豁起",
"豁起來干":"豁起來幹",
"豆制":"豆製",
"豆腐":"豆腐",
"豆腐干":"豆腐乾",
"豆蔻":"荳蔻",
"豆鼓":"豆豉",
"豐姿":"丰姿",
"豐度":"丰度",
"豐情":"丰情",
"豐神":"丰神",
"豐諛":"豐腴",
"豐韻":"丰韻",
"豔後":"豔后",
"象一":"像一",
"象三":"像三",
"象不":"象不",
"象不像":"像不像",
"象之":"象之",
"象之前":"像之前",
"象二":"像二",
"象些":"像些",
"象人":"像人",
"象什":"像什",
"象今":"像今",
"象他":"像他",
"象以":"象以",
"象以前":"像以前",
"象以往":"像以往",
"象似":"像似",
"象你":"像你",
"象個":"像個",
"象兩":"像兩",
"象其":"像其",
"象別":"像別",
"象剛":"像剛",
"象嗎":"像嗎",
"象在":"像在",
"象夢":"像夢",
"象她":"像她",
"象它":"像它",
"象已":"像已",
"象帶":"像帶",
"象平":"象平",
"象平時":"像平時",
"象往":"像往",
"象征":"象徵",
"象征戰":"像征戰",
"象征服":"像征服",
"象您":"像您",
"象我":"像我",
"象所":"象所",
"象所有":"像所有",
"象昨":"像昨",
"象是":"像是",
"象有":"像有",
"象極":"像極",
"象樣":"像樣",
"象水":"像水",
"象永":"像永",
"象片":"像片",
"象牙":"象牙",
"象牙齒":"像牙齒",
"象現":"像現",
"象甚":"像甚",
"象當":"像當",
"象瘋":"像瘋",
"象素":"像素",
"象自":"象自",
"象自己":"像自己",
"象要":"像要",
"象話":"像話",
"象誰":"像誰",
"象贊":"像贊",
"象這":"像這",
"象過":"象過",
"象過去":"像過去",
"象那":"像那",
"象銀":"像銀",
"象雨":"像雨",
"象風":"像風",
"象鬼":"像鬼",
"象麼":"像麼",
"豪華":"豪華",
"豪華游":"豪華遊",
"豬只":"豬隻",
"豬肝":"豬肝",
"豬肝面":"豬肝麵",
"豬腳":"豬腳",
"豬腳面":"豬腳麵",
"豬舌":"豬舌",
"豬舌面":"豬舌麵",
"貌丑":"貌醜",
"貝胄":"貝冑",
"貝裡":"貝里",
"財欲":"財慾",
"貪欲":"貪慾",
"貴干":"貴幹",
"買凶":"買兇",
"買姜":"買薑",
"買煙":"買菸",
"貼志":"貼誌",
"貼著":"貼著",
"賑飢":"賑饑",
"賜復":"賜覆",
"賣奸":"賣姦",
"賣姜":"賣薑",
"質朴":"質樸",
"賭台":"賭檯",
"賭台灣":"賭台灣",
"賭斗":"賭鬥",
"賸余":"賸餘",
"購並":"購併",
"購並不":"購並不",
"購並且":"購並且",
"購並非":"購並非",
"購買":"購買",
"購買欲":"購買慾",
"贊一":"贊一",
"贊一句":"讚一句",
"贊一聲":"讚一聲",
"贊一贊":"讚一讚",
"贊不":"贊不",
"贊不絕口":"讚不絕口",
"贊了":"讚了",
"贊他":"讚他",
"贊仰":"讚仰",
"贊你":"讚你",
"贊佩":"讚佩",
"贊個":"贊個",
"贊個不":"讚個不",
"贊兩":"贊兩",
"贊兩句":"讚兩句",
"贊口":"贊口",
"贊口不":"讚口不",
"贊嘆":"讚歎",
"贊她":"讚她",
"贊好":"讚好",
"贊妙":"讚妙",
"贊得":"讚得",
"贊您":"讚您",
"贊我":"讚我",
"贊捧":"讚捧",
"贊揚":"讚揚",
"贊樂":"讚樂",
"贊歌":"讚歌",
"贊的":"讚的",
"贊美":"讚美",
"贊羡":"讚羨",
"贊羨":"讚羨",
"贊聲":"讚聲",
"贊自":"贊自",
"贊自己":"讚自己",
"贊著":"讚著",
"贊許":"讚許",
"贊詞":"讚詞",
"贊詠":"讚詠",
"贊誦":"讚誦",
"贊譽":"讚譽",
"贊賞":"讚賞",
"贊辭":"讚辭",
"贊這":"讚這",
"贊過":"讚過",
"贊道":"讚道",
"贊那":"讚那",
"贊頌":"讚頌",
"贊：":"讚：",
"贏余":"贏餘",
"赤坎":"赤崁",
"赤發":"赤髮",
"起來":"起來",
"起來象":"起來像",
"起哄":"起鬨",
"起干":"起幹",
"超征":"超徵",
"越丑":"越醜",
"越准":"越準",
"越咸":"越鹹",
"越斗":"越鬥",
"越象":"越像",
"趕制":"趕製",
"趨之":"趨之",
"趨之若務":"趨之若鶩",
"跌沖":"跌衝",
"跖骨":"蹠骨",
"跟他":"跟他",
"跟他一斗":"跟他一鬥",
"跟他斗":"跟他鬥",
"跟你":"跟你",
"跟你斗":"跟你鬥",
"跟女":"跟女",
"跟女斗":"跟女鬥",
"跟她":"跟她",
"跟她斗":"跟她鬥",
"跟我":"跟我",
"跟我斗":"跟我鬥",
"跟斗":"觔斗",
"跟蹌":"踉蹌",
"路簽":"路籤",
"路裡":"路里",
"跳只":"跳只",
"跳只舞":"跳隻舞",
"跳梁":"跳樑",
"跳表":"跳錶",
"踅門":"踅門",
"踅門了戶":"踅門瞭戶",
"踐道":"棧道",
"踢踏":"踢踏",
"踢踏舞":"踢躂舞",
"蹉陀":"蹉跎",
"蹣頇":"顢頇",
"躁郁":"躁鬱",
"身分":"身份",
"身系":"身繫",
"躬敬":"恭敬",
"軀干":"軀幹",
"車夫":"車伕",
"車游":"車遊",
"軌范":"軌範",
"軒辟":"軒闢",
"軔性":"韌性",
"軟發":"軟髮",
"軫域":"畛域",
"較丑":"較醜",
"較像":"較像",
"較像征":"較象徵",
"較准":"較準",
"較斗":"較鬥",
"較松":"較鬆",
"較象":"較像",
"輕台":"輕颱",
"輕挑":"輕佻",
"輕松":"輕鬆",
"輕篾":"輕蔑",
"輕輕":"輕輕",
"輕輕松松":"輕輕鬆鬆",
"輩子":"輩子",
"輩子干":"輩子幹",
"輪回":"輪迴",
"輪奸":"輪姦",
"輪流":"輪流",
"輪流干":"輪流幹",
"輯凶":"輯兇",
"轉寰":"轉圜",
"轉戾":"轉戾",
"轉戾點":"轉捩點",
"轉托":"轉託",
"轎夫":"轎伕",
"辟佛":"闢佛",
"辟作":"闢作",
"辟劃":"闢劃",
"辟土":"闢土",
"辟地":"闢地",
"辟室":"闢室",
"辟建":"闢建",
"辟為":"闢為",
"辟田":"闢田",
"辟築":"闢築",
"辟謠":"闢謠",
"辟謬":"闢謬",
"辟谷":"辟榖",
"辟蹊":"辟蹊",
"辟蹊徑":"闢蹊徑",
"辟透":"闢透",
"辟邪":"闢邪",
"辟門":"辟門",
"辟門戶":"闢門戶",
"辟闔":"闢闔",
"辣面":"辣麵",
"辨奸":"辨奸",
"辨奸論":"辨姦論",
"辭匯":"辭彙",
"辮發":"辮髮",
"農歷":"農曆",
"農民":"農民",
"農民歷":"農民曆",
"農獲":"農穫",
"迂回":"迂迴",
"迎斗":"迎鬥",
"迥廊":"迴廊",
"迥避":"迴避",
"迨盡":"殆盡",
"迷奸":"迷姦",
"迷朦":"迷濛",
"迷罔":"迷惘",
"迷蒙":"迷濛",
"迷迷":"迷迷",
"迷迷蒙蒙":"迷迷濛濛",
"迻邐":"迆邐",
"追凶":"追兇",
"追朔":"追溯",
"追根":"追根",
"追根究抵":"追根究柢",
"追謚":"追諡",
"透辟":"透闢",
"這伙":"這伙",
"這伙人":"這夥人",
"這出":"這出",
"這出劇":"這齣劇",
"這出好戲":"這齣好戲",
"這出戲":"這齣戲",
"這出電影":"這齣電影",
"這般":"這般",
"這般准":"這般準",
"這般干法":"這般幹法",
"這裡":"這裡",
"這麼":"這麼",
"這麼丑":"這麼醜",
"這麼像征":"這麼象徵",
"這麼准":"這麼準",
"這麼干":"這麼幹",
"通奸":"通姦",
"通心":"通心",
"通心面":"通心麵",
"通浚":"通濬",
"通諜":"通牒",
"通輯":"通緝",
"逞凶":"逞兇",
"速干":"速乾",
"速食":"速食",
"速食面":"速食麵",
"造象":"造像",
"連傑":"連杰",
"連卷":"連捲",
"連抉":"連袂",
"連斗":"連鬥",
"連系":"連繫",
"連系統":"連系統",
"連絡":"聯絡",
"逼奸":"逼姦",
"逾年":"踰年",
"逾矩":"踰矩",
"逾越":"踰越",
"逾閒":"踰閒",
"遇著":"遇著",
"運籌":"運籌",
"運籌惟幄":"運籌帷幄",
"遍布":"遍佈",
"過松":"過鬆",
"遐疵":"瑕疵",
"道坎":"道檻",
"道裡":"道里",
"道贊":"道讚",
"遞回":"遞迴",
"遠揚":"遠颺",
"遠游":"遠遊",
"遨游":"遨遊",
"遮丑":"遮醜",
"選准":"選準",
"遺撼":"遺憾",
"遺范":"遺範",
"遺象":"遺像",
"遺跡":"遺蹟",
"遼亮":"嘹喨",
"遼沈":"遼瀋",
"邀天":"邀天",
"邀天之幸":"邀天之倖",
"邀斗":"邀鬥",
"邂怠":"懈怠",
"還丑":"還醜",
"還要":"還要",
"還要丑":"還要醜",
"還象":"還像",
"還象征服":"還像征服",
"邊斗":"邊斗",
"邊斗邊":"邊鬥邊",
"邋塌":"邋遢",
"邋蹋":"邋遢",
"那伙":"那伙",
"那伙人":"那夥人",
"那出":"那出",
"那出劇":"那齣劇",
"那出好戲":"那齣好戲",
"那出戲":"那齣戲",
"那出電影":"那齣電影",
"那只":"那隻",
"那只不過":"那只不過",
"那只佔":"那只佔",
"那只剩":"那只剩",
"那只加":"那只加",
"那只在":"那只在",
"那只增":"那只增",
"那只多了":"那只多了",
"那只夠":"那只夠",
"那只好":"那只好",
"那只差":"那只差",
"那只是":"那只是",
"那只會":"那只會",
"那只有":"那只有",
"那只減":"那只減",
"那只缺":"那只缺",
"那只能":"那只能",
"那只要":"那只要",
"那只需":"那只需",
"那般":"那般",
"那般准":"那般準",
"那裡":"那裡",
"那麼":"那麼",
"那麼丑":"那麼醜",
"那麼准":"那麼準",
"那麼干":"那麼幹",
"邪欲":"邪慾",
"郁卒":"鬱卒",
"郁堙":"鬱堙",
"郁塞":"鬱塞",
"郁壘":"鬱壘",
"郁巍":"鬱巍",
"郁律":"鬱律",
"郁怒":"鬱怒",
"郁悒":"鬱悒",
"郁悶":"鬱悶",
"郁憤":"鬱憤",
"郁抑":"鬱抑",
"郁挹":"鬱挹",
"郁於":"鬱於",
"郁暗":"鬱暗",
"郁林":"鬱林",
"郁沈":"鬱沈",
"郁沉":"鬱沉",
"郁泱":"鬱泱",
"郁火":"鬱火",
"郁熱":"鬱熱",
"郁燠":"鬱燠",
"郁症":"鬱症",
"郁痛":"鬱痛",
"郁積":"鬱積",
"郁紆":"鬱紆",
"郁結":"鬱結",
"郁蓊":"鬱蓊",
"郁血":"鬱血",
"郁邑":"鬱邑",
"郁郁":"鬱鬱",
"郁金":"郁金",
"郁金香":"鬱金香",
"郁閉":"鬱閉",
"郁黑":"鬱黑",
"郊游":"郊遊",
"郎鐺":"啷鐺",
"部落":"部落",
"郭朴":"郭璞",
"都肯":"都肯",
"都肯干":"都肯幹",
"都舍":"都舍",
"都舍下":"都捨下",
"都象":"都像",
"鄉裡":"鄉里",
"鄉願":"鄉愿",
"鄉願意":"鄉願意",
"鄭凱":"鄭凱",
"鄭凱云":"鄭凱云",
"鄰裡":"鄰里",
"配制":"配製",
"配膳":"配膳",
"配膳台":"配膳檯",
"酒一":"酒一",
"酒一壇":"酒一罈",
"酒壇":"酒罈",
"酒已":"酒已",
"酒已干":"酒已乾",
"酒干":"酒干",
"酒干了":"酒乾了",
"酒干掉":"酒乾掉",
"酒干盡":"酒乾盡",
"酒曲":"酒麴",
"酒肴":"酒餚",
"酣斗":"酣鬥",
"酥松":"酥鬆",
"酬傭":"酬佣",
"酸疼":"痠疼",
"酸痛":"痠痛",
"酸軟":"痠軟",
"醃制":"醃製",
"醃臢":"腌臢",
"醇朴":"醇樸",
"醋壇":"醋罈",
"醬面":"醬麵",
"醮墨":"蘸墨",
"釀制":"釀製",
"采伐":"採伐",
"采供":"採供",
"采信":"採信",
"采光":"採光",
"采卵":"採卵",
"采取":"採取",
"采寫":"採寫",
"采拾":"採拾",
"采挖":"採挖",
"采掘":"採掘",
"采摘":"採摘",
"采摭":"採摭",
"采擇":"採擇",
"采擷":"採擷",
"采收":"採收",
"采桑":"採桑",
"采梅":"採梅",
"采樣":"採樣",
"采樵":"採樵",
"采樹":"採樹",
"采檢":"採檢",
"采水":"採水",
"采油":"採油",
"采煤":"採煤",
"采獲":"採獲",
"采獵":"採獵",
"采珠":"採珠",
"采生":"採生",
"采用":"採用",
"采石":"採石",
"采硫":"採硫",
"采礦":"採礦",
"采種":"採種",
"采稿":"採稿",
"采粉":"採粉",
"采精":"採精",
"采納":"採納",
"采編":"採編",
"采花":"採花",
"采芹":"採芹",
"采茶":"採茶",
"采草":"採草",
"采蓮":"採蓮",
"采薇":"採薇",
"采藥":"採藥",
"采蜜":"採蜜",
"采血":"採血",
"采行":"採行",
"采補":"採補",
"采計":"採計",
"采訪":"採訪",
"采認":"採認",
"采證":"採證",
"采買":"採買",
"采購":"採購",
"采辦":"採辦",
"采選":"採選",
"采金":"採金",
"采錄":"採錄",
"采集":"採集",
"采風":"采風",
"采風力":"採風力",
"采食":"採食",
"采餌":"採餌",
"采驗":"採驗",
"重復":"重複",
"重托":"重託",
"重涂":"重塗",
"重游":"重遊",
"重簷":"重檐",
"野游":"野遊",
"金侖":"金崙",
"金杯":"金盃",
"金橘":"金桔",
"金象":"金象",
"金象獎":"金像獎",
"釘槌":"釘鎚",
"針炙":"針灸",
"針黹":"鍼黹",
"釣游":"釣遊",
"釵環":"釵鐶",
"鉗制":"箝制",
"鉗口":"箝口",
"鉛鎚":"鉛錘",
"鉸煉":"鉸鍊",
"銀制":"銀製",
"銀須":"銀鬚",
"銅制":"銅製",
"銅象":"銅像",
"銜土":"啣土",
"銜泥":"啣泥",
"銜環":"啣環",
"銜草":"啣草",
"銷溶":"銷鎔",
"鋁制":"鋁製",
"鋪位":"舖位",
"鋼制":"鋼製",
"鋼梁":"鋼樑",
"錄制":"錄製",
"錄影":"錄影",
"錄影後":"錄影後",
"錄象":"錄像",
"錙衣":"緇衣",
"錢鐘":"錢鐘",
"錢鐘書":"錢鍾書",
"錦鏢":"錦標",
"錫制":"錫製",
"錫坤":"錫堃",
"鍛煉":"鍛鍊",
"鍛羽":"鎩羽",
"鍛鏈":"鍛鍊",
"鍾山":"鍾山",
"鎖煉":"鎖鍊",
"鎖碎":"瑣碎",
"鎚煉":"錘煉",
"鎧胄":"鎧冑",
"鏟刈":"剷刈",
"鏟去":"剷去",
"鏟平":"剷平",
"鏟滅":"剷滅",
"鏟起":"剷起",
"鏟除":"剷除",
"鏡象":"鏡像",
"鐘不":"鍾不",
"鐘情":"鍾情",
"鐘意":"鍾意",
"鐘愛":"鍾愛",
"鐘欣":"鐘欣",
"鐘欣桐":"鍾欣桐",
"鐘無":"鐘無",
"鐘無豔":"鍾無艷",
"鐘表":"鐘錶",
"鐘表態":"鍾表態",
"鐘表明":"鍾表明",
"鐘表決":"鍾表決",
"鐘表演":"鐘表演",
"鐘表現":"鐘表現",
"鐘表示":"鍾表示",
"鐘表露":"鍾表露",
"鐘表面":"鐘錶面",
"鐘馗":"鍾馗",
"鐵制":"鐵製",
"鐵槌":"鐵鎚",
"鐵煉":"鐵鍊",
"鐵練":"鐵鍊",
"鑲制":"鑲製",
"鑲崁":"鑲嵌",
"長台":"長檯",
"長得":"長得",
"長得丑":"長得醜",
"長發":"長發",
"長發布":"長發布",
"長發邨":"長發邨",
"長籲":"長吁",
"長象":"長像",
"長須":"長鬚",
"門坎":"門檻",
"門斗":"門鬥",
"門梁":"門樑",
"閃鑠":"閃爍",
"開征":"開徵",
"開浚":"開濬",
"開發":"開發",
"開辟":"開闢",
"開采":"開採",
"開鋪":"開舖",
"閒余":"閒餘",
"閒游":"閒遊",
"閒遐":"閒暇",
"閒靜":"閑靜",
"間不":"間不",
"間不容發":"間不容髮",
"閨范":"閨範",
"閫范":"閫範",
"闔家":"閤家",
"闔府":"閤府",
"闔府上下":"閤府上下",
"關注":"關注",
"關系":"關係",
"關系統":"關系統",
"防台":"防颱",
"防台灣":"防台灣",
"防御":"防禦",
"防水":"防水",
"防水表":"防水錶",
"防礙":"妨礙",
"防范":"防範",
"防飢":"防饑",
"阿腴":"阿諛",
"阿裡":"阿里",
"陀手":"舵手",
"陀表":"陀錶",
"附注":"附註",
"限制":"限制",
"陡松":"陡鬆",
"陪吊":"陪弔",
"陪著":"陪著",
"陰干":"陰乾",
"陰歷":"陰曆",
"陰郁":"陰鬱",
"陷井":"陷阱",
"陽春":"陽春",
"陽春面":"陽春麵",
"陽歷":"陽曆",
"隆准":"隆準",
"隔周":"隔週",
"雄赳":"雄赳",
"雄赳赳":"雄糾糾",
"雅致":"雅緻",
"雅范":"雅範",
"集團":"集團",
"集游":"集游",
"集游法":"集遊法",
"雇不":"雇不",
"雇不起":"僱不起",
"雇主":"僱主",
"雇人":"僱人",
"雇傭":"僱傭",
"雇員":"僱員",
"雇役":"僱役",
"雇有":"僱有",
"雇用":"僱用",
"雇舟":"僱舟",
"雇船":"僱船",
"雇請":"僱請",
"雇車":"僱車",
"雇農":"僱農",
"雇馬":"僱馬",
"雕喪":"彫喪",
"雕梁":"雕樑",
"雕殘":"彫殘",
"雕落":"彫落",
"雕蟲":"彫蟲",
"雕謝":"彫謝",
"雕象":"雕像",
"雕零":"彫零",
"雖然":"雖然",
"雖然丑":"雖然醜",
"雙並":"雙併",
"雙周":"雙週",
"雙斗":"雙鬥",
"雜志":"雜誌",
"雞只":"雞隻",
"雞奸":"雞姦",
"雞絲":"雞絲",
"雞絲面":"雞絲麵",
"雞腿":"雞腿",
"雞腿面":"雞腿麵",
"難咽":"難嚥",
"難干":"難乾",
"難斗":"難斗",
"難斗的":"難鬥的",
"難舍":"難捨",
"雲吞":"雲吞",
"雲吞面":"雲吞麵",
"雲宵":"雲霄",
"雲游":"雲遊",
"雲爾":"云爾",
"雲雲":"云云",
"雲：":"云：",
"電子":"電子",
"電子表":"電子錶",
"電子表單":"電子表單",
"電子表情":"電子表情",
"電子表格":"電子表格",
"電子表示":"電子表示",
"電子鐘":"電子鐘",
"電影":"電影",
"電影後":"電影後",
"電桿":"電杆",
"電線":"電線",
"電線桿":"電線杆",
"震松":"震鬆",
"震栗":"震慄",
"震蕩":"震盪",
"露丑":"露醜",
"靈俐":"伶俐",
"靈幡":"靈旛",
"靈欲":"靈慾",
"青棵":"青稞",
"青笞":"青苔",
"非常":"非常",
"非常不准":"非常不準",
"非常丑":"非常醜",
"非常准":"非常準",
"非常象":"非常像",
"非涂":"非涂",
"非涂不可":"非塗不可",
"非象":"非像",
"非象征服":"非像征服",
"面丑":"面醜",
"面價":"麵價",
"面價值":"面價值",
"面團":"麵糰",
"面店":"麵店",
"面店鋪":"麵店舖",
"面廠":"麵廠",
"面攤":"麵攤",
"面攤牌":"面攤牌",
"面攤開":"面攤開",
"面杖":"麵杖",
"面湯":"麵湯",
"面灰":"麵灰",
"面疙":"面疙",
"面疙瘩":"麵疙瘩",
"面白":"面白",
"面白無須":"面白無鬚",
"面碗":"麵碗",
"面筋":"麵筋",
"面粉":"麵粉",
"面糊":"麵糊",
"面線":"麵線",
"面茶":"麵茶",
"面食":"麵食",
"面食面":"麵食麵",
"面餃":"麵餃",
"面餅":"麵餅",
"面館":"麵館",
"面饃":"麵饃",
"面龜":"麵龜",
"靦典":"靦腆",
"鞣制":"鞣製",
"韃伐":"撻伐",
"韋席":"韋蓆",
"韋後":"韋后",
"韓制":"韓製",
"音不":"音不",
"音不准":"音不準",
"音准":"音準",
"音象":"音像",
"響當":"響噹",
"響當當":"響噹噹",
"頁簽":"頁籤",
"頁面":"頁面",
"頂凶":"頂兇",
"頂頂":"頂頂",
"頂頂大名":"鼎鼎大名",
"項煉":"項鍊",
"順發":"順發",
"順發凝露":"順髮凝露",
"順發水":"順髮水",
"順發液":"順髮液",
"順發素":"順髮素",
"順發霧":"順髮霧",
"順發露":"順髮露",
"順順":"順順",
"順順當當":"順順當當",
"須叟":"須臾",
"須子":"鬚子",
"須根":"鬚根",
"須毛":"鬚毛",
"須求":"需求",
"須發":"鬚髮",
"須發展":"須發展",
"須發文":"須發文",
"須發表":"須發表",
"須眉":"鬚眉",
"須采":"須採",
"須須":"鬚鬚",
"須髯":"鬚髯",
"須鬢":"鬚鬢",
"須鯨":"鬚鯨",
"頌贊":"頌讚",
"預制":"預製",
"預布":"預佈",
"頗准":"頗準",
"頗象":"頗像",
"領袖":"領袖",
"領袖欲":"領袖慾",
"頜須":"頜鬚",
"頭亮":"頭亮",
"頭亮發":"頭亮髮",
"頭扎":"頭紮",
"頭散":"頭散",
"頭散發":"頭散髮",
"頭發":"頭髮",
"頭發了狂":"頭發了狂",
"頭發了瘋":"頭發了瘋",
"頭發光":"頭發光",
"頭發出":"頭發出",
"頭發力":"頭發力",
"頭發功":"頭發功",
"頭發呆":"頭發呆",
"頭發售":"頭發售",
"頭發炎":"頭發炎",
"頭發狂":"頭發狂",
"頭發現":"頭發現",
"頭發生":"頭發生",
"頭發瘋":"頭發瘋",
"頭發育":"頭發育",
"頭發麻":"頭發麻",
"頭發黑":"頭發黑",
"頭發黴":"頭發霉",
"頭花":"頭花",
"頭花發":"頭花髮",
"頰須":"頰鬚",
"頸系":"頸繫",
"頹圯":"頹圮",
"題簽":"題籤",
"願干":"願幹",
"願干一杯":"願乾一杯",
"願干坤":"願乾坤",
"願干旱":"願乾旱",
"願干杯":"願乾杯",
"願干涸":"願乾涸",
"願干淨":"願乾淨",
"願干燥":"願乾燥",
"願干糧":"願乾糧",
"願干脆":"願乾脆",
"願干這杯":"願乾這杯",
"願干那杯":"願乾那杯",
"願意":"願意",
"願意干":"願意幹",
"願意干坤":"願意乾坤",
"顛僕":"顛仆",
"顛復":"顛覆",
"顛顛":"顛顛",
"顛顛僕僕":"顛顛仆仆",
"顧恤":"顧卹",
"顫斗":"顫抖",
"顫栗":"顫慄",
"顯象":"顯像",
"風刮":"風颳",
"風卷":"風捲",
"風卷殘雲":"風捲殘雲",
"風土":"風土",
"風土志":"風土誌",
"風姿":"風姿",
"風姿卓約":"風姿綽約",
"風干":"風乾",
"風物":"風物",
"風物志":"風物誌",
"風范":"風範",
"飄游":"飄遊",
"飆卷":"飆捲",
"飛升":"飛昇",
"飛卷":"飛捲",
"食欲":"食慾",
"食面":"食麵",
"飢年":"饑年",
"飢荒":"饑荒",
"飢饉":"饑饉",
"飩面":"飩麵",
"飯團":"飯糰",
"飲一":"飲一",
"飲一壇":"飲一罈",
"飲三":"飲三",
"飲三壇":"飲三罈",
"飲兩":"飲兩",
"飲兩壇":"飲兩罈",
"飲干":"飲乾",
"飲白":"飲白",
"飲白干":"飲白乾",
"飲而":"飲而",
"飲而干":"飲而乾",
"餅干":"餅乾",
"養發":"養髮",
"餐台":"餐檯",
"餛飩":"餛飩",
"餛飩面":"餛飩麵",
"饋贈":"餽贈",
"首只":"首隻",
"首周":"首週",
"首發":"首發",
"香港":"香港",
"香港游":"香港遊",
"香煙":"香菸",
"馬僵":"馬韁",
"馬夫":"馬伕",
"馬夫人":"馬夫人",
"馬斯":"馬斯",
"馬斯特裡":"馬斯特里",
"馬表":"馬錶",
"馬裡":"馬里",
"馬裡蘭":"馬里蘭",
"駐扎":"駐紮",
"騁凶":"騁兇",
"騰格":"騰格",
"騰格裡":"騰格里",
"騷首":"騷首",
"騷首弄姿":"搔首弄姿",
"驚栗":"驚慄",
"驚螫":"驚蟄",
"驚贊":"驚讚",
"驟松":"驟鬆",
"骨壇":"骨罈",
"骨干":"骨幹",
"骨松":"骨鬆",
"骨灰":"骨灰",
"骨灰壇":"骨灰罈",
"骼膊":"胳膊",
"髒器":"臟器",
"髒腑":"臟腑",
"體征":"體徵",
"體范":"體範",
"高升":"高昇",
"高干":"高幹",
"高干脆":"高乾脆",
"髭須":"髭鬚",
"髯發":"髯髮",
"髯胡":"髯鬍",
"髯須":"髯鬚",
"鬈發":"鬈髮",
"鬢發":"鬢髮",
"鬢須":"鬢鬚",
"鬼谷":"鬼谷",
"鬼谷子":"鬼谷子",
"魁悟":"魁梧",
"魂游":"魂遊",
"魏征":"魏徵",
"魚干":"魚乾",
"魚干擾":"魚干擾",
"魚松":"魚鬆",
"鮮于":"鮮于",
"鯨須":"鯨鬚",
"鳳佔":"鳳占",
"鳳凰":"鳳凰",
"鳳凰於飛":"鳳凰于飛",
"鳳斗":"鳳鬥",
"鳳皇":"鳳皇",
"鳳皇於蜚":"鳳皇于蜚",
"鴻准":"鴻準",
"鴻范":"鴻範",
"鵝准":"鵝準",
"鶴發":"鶴髮",
"鸕慈":"鸕鶿",
"鹵制":"滷製",
"鹵味":"滷味",
"鹵水":"滷水",
"鹵汁":"滷汁",
"鹵牛":"鹵牛",
"鹵牛肉":"滷牛肉",
"鹵肉":"滷肉",
"鹵菜":"滷菜",
"鹵蛋":"滷蛋",
"鹵醬":"滷醬",
"鹵雞":"滷雞",
"鹵面":"滷麵",
"鹵鵝":"滷鵝",
"鹽余":"鹽餘",
"鹽鹵":"鹽滷",
"麥面":"麥麵",
"麻病":"痲病",
"麻瘋":"痲瘋",
"麼丑":"麼醜",
"麼像":"麼像",
"麼像征":"麼象徵",
"麼兒":"么兒",
"麼准":"麼准",
"麼准的":"麼準的",
"麼女":"么女",
"麼妹":"么妹",
"麼子":"么子",
"麼干":"麼幹",
"麼弟":"么弟",
"麼象":"麼像",
"黃歷":"黃曆",
"黃發":"黃髮",
"黃發垂髫":"黃髮垂髫",
"黃金":"黃金",
"黃金周":"黃金週",
"黑亮":"黑亮",
"黑亮發":"黑亮髮",
"黑發":"黑髮",
"黑發暗":"黑發暗",
"黑須":"黑鬚",
"點干":"點幹",
"點干吧":"點幹吧",
"點松":"點鬆",
"點象":"點像",
"黴味":"霉味",
"黴天":"霉天",
"黴氣":"霉氣",
"黴濕":"霉濕",
"黴爛":"霉爛",
"黴運":"霉運",
"黴雨":"霉雨",
"黴頭":"霉頭",
"鼎邊":"鼎邊",
"鼎邊剉":"鼎邊銼",
"鼻准":"鼻準",
"鼻梁":"鼻樑",
"齊沖":"齊衝",
"齧齒":"囓齒",
"龍卷":"龍卷",
"龍卷風":"龍捲風",
"龍眼":"龍眼",
"龍眼干":"龍眼乾",
"龍鐘":"龍鍾",
"龍須":"龍鬚",
"！恩":"！嗯",
"！象":"！像",
"０余":"０餘",
"０海":"０海",
"０海裡":"０海里",
"０裡":"０里",
"披肩發":"披肩髮"
});
;
$(document).ready(function (){

  var check = true;

  if ( $.browser.msie ) {
    $IEversion = parseInt( $.browser.version );
    if($IEversion < 9){
      check = false;
    }
  }

  if(check){
    var cookie = 'tongwen';
    var cookie_options = { path: '/', expires: 100 };
    var cookie_lang = $.cookie(cookie);

    /*
    if(cookie_lang){
      var userLang = cookie_lang;
    }
    else{
      var userLang = (navigator.language) ? navigator.language : navigator.userLanguage;
    }

    if(userLang.toLocaleLowerCase() == 'zh-tw' || userLang.toLocaleLowerCase() == 'zh-hk'){
      // TongWen.trans2Trad(document);
      $.cookie(cookie, 'zh-TW', cookie_options);
    }
    else{
      $.cookie(cookie, 'zh-CN', cookie_options);
      TongWen.trans2Simp(document);
    }
    */

    if (cookie_lang) {
      if (cookie_lang.toLocaleLowerCase() == 'zh-cn') {
        $.cookie(cookie, 'zh-CN', cookie_options);
        TongWen.trans2Simp(document);
      }
    }

    $('.tongwen_s2t a').click(function(){
      $.cookie(cookie, 'zh-TW', cookie_options);
      TongWen.trans2Trad(document);
    });
    $('.tongwen_t2s a').click(function(){
      $.cookie(cookie, 'zh-CN', cookie_options);
      TongWen.trans2Simp(document);
    });
  }


});
;
