(()=>{"use strict";var e,t,n,r,o,a,i,c,l,s,u,d,f,b,p,g,_,m,h,v,w,A,y,x,C,E,k,O,P,B,I,j,S,Z,W,T,M,D,H,Y,U,L,G,R,F,K,X,$,z,N,V,q,Q,J,ee,te,ne,re,oe,ae,ie,ce,le,se={1560:(e,t,n)=>{var r=n(2414),o=n.n(r),a=n(168),i=n.n(a),c=n(4050),l=n.n(c),s=n(5628),u=n.n(s),d=n(6799),f=n.n(d),b=n(6269),p=n.n(b),g=n(5692),_={};_.styleTagTransform=p(),_.setAttributes=u(),_.insert=l().bind(null,"head"),_.domAPI=i(),_.insertStyleElement=f(),o()(g.Z,_),g.Z&&g.Z.locals&&g.Z.locals;var m=n(5323);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={message:"store.toolbar-slice.message"};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E={message:"store.global-slice.message"};const k=(0,m.xC)({reducer:{toolbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"toolbar/log":var n=e.message+"toolbar/log";return console.log(n),alert(n),e;case"toolbar/message/hello":return v(v({},e),{},{message:"store.toolbar-slice.message.hello"});case"toolbar/message/hi":return v(v({},e),{},{message:"store.toolbar-slice.message.hi"});default:return e}},global:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"global/log":var n=e.message+"global/log";return console.log(n),alert(n),e;case"global/pause":return Q.pauseUpdate(!0),e;case"global/unpause":return Q.pauseUpdate(!1),e;case"global/message/hello":return x(x({},e),{},{message:"store.global-slice.message.hello"});case"global/message/hi":return x(x({},e),{},{message:"store.global-slice.message.hi"});default:return e}}}});var O=n(6687),P=n(1390),B=n(3621),I=n(7219),j=n(1813),S=n(5443),Z=n(2247),W=n(6315),T=n(6803),M=n(7157),D=n(3486),H=function(e){return e.global},Y=function(e){return e.toolbar};function U(){return O.createElement(I.ZP,{colorMode:"night"},O.createElement(M.VK,null,O.createElement(F,null)))}function L(e){return O.createElement(j.Z,{m:0,onClick:e.onClick},e.text)}function G(e){return O.createElement(S.Z,{variant:"small",sx:{my:3,mx:1,px:2}},e.text)}function R(){return O.createElement(Z.Z,{mr:2},O.createElement(W.Z,{display:"block",my:2},O.createElement(T.Z,{as:"a",href:"/"},"Experiments"),O.createElement(T.Z,{as:"a",href:"https://cosmoplankton.studio"},"Home"),O.createElement(T.Z,{as:"a",href:"https://blog.cosmoplankton.studio"},"Blog")))}function F(){return O.createElement(D.rs,null,O.createElement(D.AW,{path:["/webgl","/webgl.html"]},O.createElement(z,{path:"webgl"})),O.createElement(D.AW,{path:["/webgpu","/webgpu.html"]},O.createElement(z,{path:"webgpu"})),O.createElement(D.AW,{exact:!0,path:"/"},O.createElement(z,{path:"index"})))}function K(e){return O.createElement(Z.Z,{display:"flex"},O.createElement(W.Z,{display:"block",m:2},O.createElement(L,{text:"Pause",onClick:e.handlePause}),O.createElement(L,{text:"Start",onClick:e.handleUnPause})))}function X(e){return O.createElement(Z.Z,{display:"flex"})}function $(e){return O.createElement(Z.Z,{display:"flex"},O.createElement(W.Z,{display:"block",m:2},O.createElement(L,{text:"SliceGlobal/Alert",onClick:e.handleClickGlobal}),O.createElement(L,{text:"SliceTools/Alert",onClick:e.handleClickToolbar}),O.createElement(L,{text:"Hello",onClick:e.handleMsgHello}),O.createElement(L,{text:"Hi",onClick:e.handleMsgHi})),O.createElement(G,{text:e.globalStates.message}),O.createElement(G,{text:e.toolbarStates.message}))}function z(e){var t=(0,B.I0)(),n={globalStates:(0,B.v9)(H),toolbarStates:(0,B.v9)(Y),handleClickGlobal:function(){t({type:"global/log",payload:""})},handleClickToolbar:function(){t({type:"toolbar/log",payload:""})},handlePause:function(){t({type:"global/pause",payload:""})},handleUnPause:function(){t({type:"global/unpause",payload:""})},handleMsgHello:function(){t({type:"global/message/hello",payload:""}),t({type:"toolbar/message/hello",payload:""})},handleMsgHi:function(){t({type:"global/message/hi",payload:""}),t({type:"toolbar/message/hi",payload:""})}};return O.createElement(Z.Z,{display:"flex",textShadow:"0px 0px",p:0,m:0,bg:"bg.primary"},"webgl"==e.path&&O.createElement(K,n),"index"==e.path&&O.createElement(X,n),"webgpu"==e.path&&O.createElement($,n),O.createElement(Z.Z,{flexGrow:1}),O.createElement(R,null))}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=n.e(220).then(n.bind(n,8220));const Q=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),V(this,"title",""),V(this,"overlayMount",void 0),V(this,"canvas",void 0),V(this,"glCtx",void 0),this.title=t}var t,n;return t=e,(n=[{key:"initCanvas",value:function(){this.canvas=document.getElementById("appCanvas"),this.glCtx=this.canvas.getContext("webgl",{antialias:!0}),console.log("init done")}},{key:"initOverlay",value:function(){this.overlayMount=document.getElementById("reactApp")}},{key:"runCanvas",value:function(){var e=this;q.then((function(t){if(e.glCtx){console.log("run start");var n=Date.now(),r=-1;!function e(){window.requestAnimationFrame(e);var o=Date.now();if(o>=r+8.333333333333334){r=o;var a=o-n;t.tick(a,window.innerHeight,window.innerWidth)}}()}else alert("Failed to initialize WebGL")}))}},{key:"runOverlay",value:function(){var e,t;e=k,t=this.overlayMount,P.render(O.createElement(B.zt,{store:e},O.createElement(U,null)),t)}},{key:"pauseUpdate",value:function(e){q.then((function(t){t.pause_update(e)}))}}])&&N(t.prototype,n),e}())("cosmoplankton");Q.initCanvas(),Q.initOverlay(),Q.runOverlay(),Q.runCanvas()},5692:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(2690),o=n.n(r),a=n(3036),i=n.n(a)()(o());i.push([e.id,"\nhtml,\nbody {\n    height: 100%;\n    background-color: #102a61;\n    color: #ffffff;\n    text-align: center;\n    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);\n    overflow: hidden;\n    margin: 0;\n}\n\n#container {\n    position: relative;\n    height: 100%;\n    width: 100%;\n}\n#overlay  {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    pointer-events:none; \n}\n#reactApp {\n    pointer-events:auto; \n}\n#appCanvas {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    border: 1px solid black;\n    overflow: hidden;\n}\ndiv.centeredDiv {\n    position: absolute; \n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n}\n","",{version:3,sources:["webpack://./static/common.css"],names:[],mappings:";AACA;;IAEI,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,6CAA6C;IAC7C,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,OAAO;IACP,uBAAuB;IACvB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,4CAA4C;AAChD",sourcesContent:["\nhtml,\nbody {\n    height: 100%;\n    background-color: #102a61;\n    color: #ffffff;\n    text-align: center;\n    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);\n    overflow: hidden;\n    margin: 0;\n}\n\n#container {\n    position: relative;\n    height: 100%;\n    width: 100%;\n}\n#overlay  {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    pointer-events:none; \n}\n#reactApp {\n    pointer-events:auto; \n}\n#appCanvas {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    border: 1px solid black;\n    overflow: hidden;\n}\ndiv.centeredDiv {\n    position: absolute; \n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n}\n"],sourceRoot:""}]);const c=i}},ue={};function de(e){if(ue[e])return ue[e].exports;var t=ue[e]={id:e,loaded:!1,exports:{}};return se[e](t,t.exports,de),t.loaded=!0,t.exports}de.m=se,de.c=ue,de.x=e=>{},de.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return de.d(t,{a:t}),t},de.d=(e,t)=>{for(var n in t)de.o(t,n)&&!de.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},de.f={},de.e=e=>Promise.all(Object.keys(de.f).reduce(((t,n)=>(de.f[n](e,t),t)),[])),de.u=e=>e+".bundle.js",de.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),de.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),de.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="cosmoplankton-studio.github.io:",de.l=(n,r,o,a)=>{if(e[n])e[n].push(r);else{var i,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var u=l[s];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,de.nc&&i.setAttribute("nonce",de.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[r];var d=(t,r)=>{i.onerror=i.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}},de.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;de.g.importScripts&&(e=de.g.location+"");var t=de.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),de.p=e})(),(()=>{var e={88:0},t=[[1560,402]];de.f.j=(t,n)=>{var r=de.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>{r=e[t]=[n,o]}));n.push(r[2]=o);var a=de.p+de.u(t),i=new Error;de.l(a,(n=>{if(de.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}};var n=e=>{},r=(r,o)=>{for(var a,i,[c,l,s,u]=o,d=0,f=[];d<c.length;d++)i=c[d],de.o(e,i)&&e[i]&&f.push(e[i][0]),e[i]=0;for(a in l)de.o(l,a)&&(de.m[a]=l[a]);for(s&&s(de),r&&r(o);f.length;)f.shift()();return u&&t.push.apply(t,u),n()},o=self.webpackChunkcosmoplankton_studio_github_io=self.webpackChunkcosmoplankton_studio_github_io||[];function a(){for(var n,r=0;r<t.length;r++){for(var o=t[r],a=!0,i=1;i<o.length;i++){var c=o[i];0!==e[c]&&(a=!1)}a&&(t.splice(r--,1),n=de(de.s=o[0]))}return 0===t.length&&(de.x(),de.x=e=>{}),n}o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o));var i=de.x;de.x=()=>(de.x=i||(e=>{}),(n=a)())})(),ie={},ce={615:function(){return{"./app-core_bg.js":{__wbindgen_object_drop_ref:function(e){return void 0===n&&(n=de.c[6396].exports),n.ug(e)},__wbg_log_ecc24650a83904e4:function(e,t){return void 0===r&&(r=de.c[6396].exports),r.BR(e,t)},__wbg_error_569d7454c64f6dbe:function(e,t){return void 0===o&&(o=de.c[6396].exports),o.RW(e,t)},__wbg_instanceof_Window_fbe0320f34c4cd31:function(e){return void 0===a&&(a=de.c[6396].exports),a.OC(e)},__wbg_document_2b44f2a86e03665a:function(e){return void 0===i&&(i=de.c[6396].exports),i.vZ(e)},__wbg_getElementById_5bd6efc3d82494aa:function(e,t,n){return void 0===c&&(c=de.c[6396].exports),c.fx(e,t,n)},__wbg_clientWidth_725008becfa6f008:function(e){return void 0===l&&(l=de.c[6396].exports),l.YO(e)},__wbg_clientHeight_cd4d7e2d713d4b5f:function(e){return void 0===s&&(s=de.c[6396].exports),s.I9(e)},__wbg_instanceof_WebGlRenderingContext_5f4db52925ef5603:function(e){return void 0===u&&(u=de.c[6396].exports),u.Vn(e)},__wbg_bufferData_283c9170f3c599d2:function(e,t,n,r){return void 0===d&&(d=de.c[6396].exports),d.yL(e,t,n,r)},__wbg_uniformMatrix4fv_f0d65bec707c0283:function(e,t,n,r,o){return void 0===f&&(f=de.c[6396].exports),f.mR(e,t,n,r,o)},__wbg_attachShader_b10f3a6e94e2e190:function(e,t,n){return void 0===b&&(b=de.c[6396].exports),b.sH(e,t,n)},__wbg_bindBuffer_cdca8a246dc033e5:function(e,t,n){return void 0===p&&(p=de.c[6396].exports),p.yw(e,t,n)},__wbg_blendFunc_b45bbe6bc5e17dd6:function(e,t,n){return void 0===g&&(g=de.c[6396].exports),g.Pq(e,t,n)},__wbg_clear_c7bb0cc46853ad89:function(e,t){return void 0===_&&(_=de.c[6396].exports),_.y2(e,t)},__wbg_clearColor_8b13b519ef2dd2d7:function(e,t,n,r,o){return void 0===m&&(m=de.c[6396].exports),m.z0(e,t,n,r,o)},__wbg_clearDepth_de3cfee3848f5b55:function(e,t){return void 0===h&&(h=de.c[6396].exports),h.vl(e,t)},__wbg_compileShader_406e03b35834cb67:function(e,t){return void 0===v&&(v=de.c[6396].exports),v.jZ(e,t)},__wbg_createBuffer_bad9101b9d0e33e7:function(e){return void 0===w&&(w=de.c[6396].exports),w.$W(e)},__wbg_createProgram_19eb97f37bc7d978:function(e){return void 0===A&&(A=de.c[6396].exports),A.Kh(e)},__wbg_createShader_16e76257819c682b:function(e,t){return void 0===y&&(y=de.c[6396].exports),y.k(e,t)},__wbg_deleteShader_913f6c4e5843248d:function(e,t){return void 0===x&&(x=de.c[6396].exports),x.p$(e,t)},__wbg_drawElements_c16ecda7ff210a65:function(e,t,n,r,o){return void 0===C&&(C=de.c[6396].exports),C.RI(e,t,n,r,o)},__wbg_enable_98a346f4f5f740b7:function(e,t){return void 0===E&&(E=de.c[6396].exports),E.b_(e,t)},__wbg_enableVertexAttribArray_c7db971134fe1d3c:function(e,t){return void 0===k&&(k=de.c[6396].exports),k.Df(e,t)},__wbg_getAttribLocation_8ce6818f0f36aca9:function(e,t,n,r){return void 0===O&&(O=de.c[6396].exports),O.Fo(e,t,n,r)},__wbg_getProgramInfoLog_efa3ee9c01a6c5d6:function(e,t,n){return void 0===P&&(P=de.c[6396].exports),P.Mk(e,t,n)},__wbg_getProgramParameter_f1068d691eca8e1f:function(e,t,n){return void 0===B&&(B=de.c[6396].exports),B.Cd(e,t,n)},__wbg_getShaderInfoLog_c942a4f3fa1537cf:function(e,t,n){return void 0===I&&(I=de.c[6396].exports),I.CS(e,t,n)},__wbg_getShaderParameter_f330a1f677514bd0:function(e,t,n){return void 0===j&&(j=de.c[6396].exports),j.e5(e,t,n)},__wbg_getUniformLocation_e97e7d6bc3036b6d:function(e,t,n,r){return void 0===S&&(S=de.c[6396].exports),S.UT(e,t,n,r)},__wbg_linkProgram_dc8c83ec66322d5e:function(e,t){return void 0===Z&&(Z=de.c[6396].exports),Z.bG(e,t)},__wbg_shaderSource_d8cce8917aa7df4a:function(e,t,n,r){return void 0===W&&(W=de.c[6396].exports),W.Vi(e,t,n,r)},__wbg_uniform1f_26a1f89de22ef689:function(e,t,n){return void 0===T&&(T=de.c[6396].exports),T.K8(e,t,n)},__wbg_useProgram_5a83ef734fbc034b:function(e,t){return void 0===M&&(M=de.c[6396].exports),M.Zn(e,t)},__wbg_vertexAttribPointer_e809b011773856d1:function(e,t,n,r,o,a,i){return void 0===D&&(D=de.c[6396].exports),D.d_(e,t,n,r,o,a,i)},__wbg_viewport_d6e0a7f81b3499c9:function(e,t,n,r,o){return void 0===H&&(H=de.c[6396].exports),H.Us(e,t,n,r,o)},__wbg_instanceof_HtmlCanvasElement_bd2459c62d076bcd:function(e){return void 0===Y&&(Y=de.c[6396].exports),Y.kd(e)},__wbg_width_8225e9e48185d280:function(e){return void 0===U&&(U=de.c[6396].exports),U.a5(e)},__wbg_setwidth_80b60efe20240a3e:function(e,t){return void 0===L&&(L=de.c[6396].exports),L.eM(e,t)},__wbg_height_c55678b905b560e1:function(e){return void 0===G&&(G=de.c[6396].exports),G.LA(e)},__wbg_setheight_5c308278bb4139ed:function(e,t){return void 0===R&&(R=de.c[6396].exports),R.IC(e,t)},__wbg_getContext_7f0328be9fe8c1ec:function(e,t,n){return void 0===F&&(F=de.c[6396].exports),F.h5(e,t,n)},__wbg_call_ab183a630df3a257:function(e,t){return void 0===K&&(K=de.c[6396].exports),K.Kt(e,t)},__wbindgen_object_clone_ref:function(e){return void 0===X&&(X=de.c[6396].exports),X.m_(e)},__wbg_newnoargs_ab5e899738c0eff4:function(e,t){return void 0===$&&($=de.c[6396].exports),$.dM(e,t)},__wbg_self_77eca7b42660e1bb:function(){return void 0===z&&(z=de.c[6396].exports),z.U()},__wbg_window_51dac01569f1ba70:function(){return void 0===N&&(N=de.c[6396].exports),N.KF()},__wbg_globalThis_34bac2d08ebb9b58:function(){return void 0===V&&(V=de.c[6396].exports),V.fe()},__wbg_global_1c436164a66c9c22:function(){return void 0===q&&(q=de.c[6396].exports),q.mm()},__wbindgen_is_undefined:function(e){return void 0===Q&&(Q=de.c[6396].exports),Q.XP(e)},__wbg_buffer_bc64154385c04ac4:function(e){return void 0===J&&(J=de.c[6396].exports),J.gW(e)},__wbg_newwithbyteoffsetandlength_00c580aa4e676e36:function(e,t,n){return void 0===ee&&(ee=de.c[6396].exports),ee.r4(e,t,n)},__wbg_newwithbyteoffsetandlength_193d0d8755287921:function(e,t,n){return void 0===te&&(te=de.c[6396].exports),te.ac(e,t,n)},__wbindgen_boolean_get:function(e){return void 0===ne&&(ne=de.c[6396].exports),ne.HT(e)},__wbindgen_debug_string:function(e,t){return void 0===re&&(re=de.c[6396].exports),re.fY(e,t)},__wbindgen_throw:function(e,t){return void 0===oe&&(oe=de.c[6396].exports),oe.Or(e,t)},__wbindgen_memory:function(){return void 0===ae&&(ae=de.c[6396].exports),ae.oH()}}}}},le={220:[615]},de.w={},de.f.wasm=function(e,t){(le[e]||[]).forEach((function(n,r){var o=ie[n];if(o)t.push(o);else{var a,i=ce[n](),c=fetch(de.p+""+{220:{615:"1e9ea9e5ae57cff20612"}}[e][n]+".module.wasm");a=i instanceof Promise&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(c),i]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(c,i):c.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,i)})),t.push(ie[n]=a.then((function(e){return de.w[n]=(e.instance||e).exports})))}}))},de.x()})();
//# sourceMappingURL=webgl.bundle.js.map