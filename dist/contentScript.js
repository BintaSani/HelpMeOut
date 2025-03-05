/*! For license information please see contentScript.js.LICENSE.txt */
(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(){"use strict";n=function(){return r};var e,r={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(e){p=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),s=new R(n||[]);return i(a,"_invoke",{value:S(t,r,s)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=d;var f="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function b(){}function w(){}function x(){}var k={};p(k,c,(function(){return this}));var E=Object.getPrototypeOf,j=E&&E(E(B([])));j&&j!==o&&a.call(j,c)&&(k=j);var L=x.prototype=b.prototype=Object.create(k);function T(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function C(e,r){function n(o,i,s,c){var l=h(e[o],e,i);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==t(p)&&a.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):r.resolve(p).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function S(t,r,n){var o=f;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var c=_(s,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=h(t,r,n);if("normal"===l.type){if(o=n.done?v:y,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function _(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=h(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function B(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function t(){for(;++o<r.length;)if(a.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}throw new TypeError(t(r)+" is not iterable")}return w.prototype=x,i(L,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=p(x,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,p(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},T(C.prototype),p(C.prototype,l,(function(){return this})),r.AsyncIterator=C,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new C(d(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},T(L),p(L,u,"Generator"),p(L,c,(function(){return this})),p(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=B,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:B(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},r}function o(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function s(t){o(i,n,a,s,c,"next",t)}function c(t){o(i,n,a,s,c,"throw",t)}s(void 0)}))}}var i=["http://localhost:3000","https://help-me-out-ext.netlify.app/","https://chrome-ext-40d06.firebaseapp.com","chrome-extension://".concat(chrome.runtime.id),"https://firebase.google.com","https://helpmeout-be.vercel.app/"];window.postMessage({type:"REQUEST_UID_AND_TOKEN"},i),console.log("uid and token");var s=null;window.addEventListener("message",function(){var t=a(n().mark((function t(e){var r,o,a,c,l,u,p,d;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i.includes(e.origin)){t.next=2;break}return t.abrupt("return");case 2:if(r=e.data,o=r.type,a=r.token,c=r.uid,"SEND_TOKEN"!==o){t.next=20;break}return console.log("Received token and UID from hosted site:",{token:a,uid:c}),t.prev=5,s=c,t.next=9,z(s);case 9:l=t.sent,u=l.signature,p=l.timestamp,d=l.folder,console.log("Signature details:",{signature:u,timestamp:p,folder:d}),console.log(s),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(5),console.error("Error processing received UID or token:",t.t0);case 20:case"end":return t.stop()}}),t,null,[[5,17]])})));return function(e){return t.apply(this,arguments)}}());var c=document.createElement("div");c.style.color="white",c.style.display="flex",c.style.cursor="pointer",c.style.width="25%",c.innerHTML='<p style="display: flex; align-items: center" ><span id="time" style="font-size: 1.7rem;">00:00:00</span><span>&nbsp;</span></p>';var l=document.createElement("img");l.src="https://res.cloudinary.com/ddtbgrglm/image/upload/v1732530647/dot_bog23u.svg",c.alt="dot",l.style.width="10px",l.style.height="10px",l.style.margin="auto",c.appendChild(l);var u=document.createElement("div");u.style.justifyItems="center",u.style.justifyContent="center",u.style.border="none";var p=document.createElement("img");p.style.height="5vh",p.style.marginTop="auto",p.style.marginBottom="auto",p.src="https://res.cloudinary.com/ddtbgrglm/image/upload/v1732531164/divider_w8u8ah.svg",p.alt="divider",u.appendChild(p);var d=document.createElement("button");d.style.cursor="pointer",d.style.justifyItems="center",d.style.justifyContent="center",d.style.background="#ffffff",d.style.border="none",d.style.height="5vh",d.style.width="14%",d.style.borderRadius="50px",d.style.marginTop="auto",d.style.marginBottom="auto",d.style.paddingTop="0.5vh";var h=document.createElement("img");h.style.height="3vh",h.style.width="45%",h.style.margin="auto",h.src="https://i.ibb.co/6Z030k8/play-svgrepo-com-2.png",h.alt="play",d.appendChild(h);var f=document.createElement("button");f.style.cursor="pointer",f.style.justifyItems="center",f.style.justifyContent="center",f.style.background="#ffffff",f.style.border="none",f.style.height="5vh",f.style.width="14%",f.style.borderRadius="50px",f.style.marginTop="auto",f.style.marginBottom="auto",f.style.paddingBottom="0.5vh";var y=document.createElement("img");y.style.height="5vh",y.style.width="80%",y.style.margin="auto",y.src="https://i.ibb.co/k4bjQn0/stop-svgrepo-com-1.png",y.alt="stop",f.appendChild(y);var m=document.createElement("button");m.style.cursor="pointer",m.style.justifyItems="center",m.style.justifyContent="center",m.style.background="#ffffff",m.style.border="none",m.style.height="5vh",m.style.width="14%",m.style.borderRadius="50px",m.style.marginTop="auto",m.style.marginBottom="auto",m.style.paddingTop="0.5vh";var v=document.createElement("img");v.style.height="3vh",v.style.width="55%",v.style.margin="auto",v.src="https://i.ibb.co/PMjHVPv/video-camera-svgrepo-com-3.png",v.alt="video",m.appendChild(v);var g=document.createElement("button");g.style.cursor="pointer",g.style.justifyItems="center",g.style.justifyContent="center",g.style.background="#ffffff",g.style.border="none",g.style.height="5vh",g.style.width="14%",g.style.borderRadius="50px",g.style.marginTop="auto",g.style.marginBottom="auto",g.style.paddingTop="0.5vh";var b=document.createElement("img");b.style.height="3vh",b.style.width="70%",b.style.margin="auto",b.src="https://i.ibb.co/gtjr5BY/mic-microphone-podcast-svgrepo-com.png",b.alt="audio",g.appendChild(b);var w=document.createElement("button");w.style.cursor="pointer",w.style.justifyItems="center",w.style.justifyContent="center",w.style.background="#4B4B4B",w.style.border="none",w.style.height="5vh",w.style.width="14%",w.style.borderRadius="50px",w.style.marginTop="auto",w.style.marginBottom="auto";var x=document.createElement("img");x.style.height="3vh",x.style.width="50%",x.style.margin="auto",x.src="https://i.ibb.co/P12hFgn/bin.png",x.alt="trash",w.appendChild(x);var k=document.createElement("div");k.style.borderRadius="50%",k.style.height="10rem",k.style.width="10rem",k.style.overflow="hidden",k.style.display="none";var E=document.createElement("video");E.style.width="100%",E.style.height="100%",E.style.objectFit="cover",E.style.objectPosition="center",k.appendChild(E);var j=document.createElement("div");j.style.display="flex",j.style.justifyContent="space-between",j.style.width="70%",j.appendChild(d),j.appendChild(f),j.appendChild(m),j.appendChild(g),j.appendChild(w);var L=document.createElement("div");L.style.background="#141414",L.style.display="flex",L.style.width="72%",L.style.height="9vh",L.style.borderRadius="50px",L.style.border="7px solid #4B4B4B",L.style.alignItems="center",L.style.justifyContent="space-between",L.style.paddingLeft="1%",L.style.paddingRight="1%",L.style.marginTop="auto",L.style.marginBottom="auto",L.appendChild(c),L.appendChild(u),L.appendChild(j);var T=document.createElement("div");T.appendChild(k),T.appendChild(L),T.style.display="flex",T.style.margin="0 0 0 2rem",T.style.gap="0.5rem",T.style.alignItems="center",T.style.position="fixed",T.style.zIndex="50",T.style.bottom="5vh",T.style.left="1.2%",T.style.width="40%",T.style.justifyContent="space-between",document.body.appendChild(T);var C,S,_=null,O=null,I=[],R=null,B=null,P=null,M=0,D=0,N=0;function A(){60==++M&&(M=0,60==++D&&(D=0,N++));var t="".concat(N.toString().padStart(2,"0"),":").concat(D.toString().padStart(2,"0"),":").concat(M.toString().padStart(2,"0"));document.getElementById("time").textContent=t}function F(){S||(S=setInterval(A,1e3))}function U(){S&&(clearInterval(S),S=null)}function G(){return G=a(n().mark((function t(){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_=!0,O=!1,!C||"recording"!==C.state){t.next=8;break}C.pause(),U(),console.log("recording paused"),t.next=21;break;case 8:if(!C||"paused"!==C.state){t.next=15;break}C.resume(),S||F(),console.log("resumed recording"),t.next=21;break;case 15:return R=navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}),B=navigator.mediaDevices.getUserMedia({video:!1,audio:!0}),t.next=19,B;case 19:r=t.sent,R.then(function(){var t=a(n().mark((function t(o){var a,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=new MediaStream([].concat(e(o.getTracks()),e(r.getAudioTracks()))),C=new MediaRecorder(a,{mimeType:"video/webm;codecs=vp9,opus"}),i=null==o?void 0:o.getAudioTracks(),console.log(i,"audio track"),C.ondataavailable=function(t){t.data.size>0&&I.push(t.data)},C.start(),F(),console.log("recording started");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.error("Error accessing media devices:",t)}));case 21:case"end":return t.stop()}}),t)}))),G.apply(this,arguments)}function z(t){return H.apply(this,arguments)}function H(){return(H=a(n().mark((function t(e){var r,o,a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Math.floor(Date.now()/1e3),t.prev=1,t.next=4,fetch("https://helpmeout-be.vercel.app/generate-signature",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({timestamp:r,uid:e})});case 4:if((o=t.sent).ok){t.next=7;break}throw new Error("Failed to fetch signature");case 7:return t.next=9,o.json();case 9:return a=t.sent,t.abrupt("return",{signature:a.signature,timestamp:r,folder:a.folder});case 13:throw t.prev=13,t.t0=t.catch(1),console.error("Error fetching signature:",t.t0),t.t0;case 17:case"end":return t.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}function K(){return(K=a(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O=!0,_=!1,console.log({isRecording:_,isStopped:O},"checking "),alert("capturing has ended"),C&&"inactive"!==C.state&&(C.stop(),U(),M=0,D=0,N=0,A(),C.onstop=a(n().mark((function t(){var e,r,o,a,i,c,l,u,p,d;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=new Blob(I,{mimeType:"video/webm;codecs=vp9,opus"}),I=[],!R){t.next=8;break}return t.next=5,R;case 5:t.sent.getTracks().forEach((function(t){return t.stop()})),R=null;case 8:if(!B){t.next=14;break}return t.next=11,B;case 11:t.sent.getTracks().forEach((function(t){return t.stop()})),B=null;case 14:return console.log(e,"blob here"),t.next=17,z(s);case 17:return r=t.sent,o=r.signature,a=r.timestamp,i=r.folder,(c=new FormData).append("file",e,"HelpMeOut_video_".concat((new Date).getTime(),".webm")),c.append("api_key","247557432484292"),c.append("timestamp",a),c.append("signature",o),c.append("folder",i),t.prev=27,t.next=30,fetch("https://api.cloudinary.com/v1_1/ddtbgrglm/video/upload",{method:"POST",body:c});case 30:if((l=t.sent).ok){t.next=33;break}throw new Error("Failed to upload video");case 33:return t.next=35,l.json();case 35:u=t.sent,console.log("Upload success:",u),(p=u.secure_url)&&(d="".concat("http://localhost:3000","/playback?recording=").concat(p,"&filename=HMO_").concat(u.public_id,".webm"),window.open(d)),t.next=44;break;case 41:t.prev=41,t.t0=t.catch(27),console.error("Error during video upload or transcription:",t.t0);case 44:case"end":return t.stop()}}),t,null,[[27,41]])}))));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Y(){return Z.apply(this,arguments)}function Z(){return(Z=a(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:!0}).then((function(t){E.srcObject=t,E.addEventListener("loadedmetadata",(function(){E.play()}))}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("Error occurred",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}function Q(){if(E){var t=E.srcObject,e=null==t?void 0:t.getTracks();void 0!==e&&(null==e||e.forEach((function(t){return t.stop()}))),E.srcObject=null}}function J(){return V.apply(this,arguments)}function V(){return V=a(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then((function(t){mediaRecorder=new MediaRecorder(t),mediaRecorder.ondataavailable=function(t){t.data.size>0&&I.push(t.data)}}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("no audio");case 8:case"end":return t.stop()}}),t,null,[[0,5]])}))),V.apply(this,arguments)}console.log({isRecording:_,isStopped:O},"check "),d.addEventListener("click",(function(t){d.style.background="#4b4b4b",_&&"https://i.ibb.co/6Z030k8/play-svgrepo-com-2.png"===h.src?(d.style.background="#4b4b4b",d.style.paddingTop="0.5vh",h.style.height="2vh",h.style.width="40%",h.style.margin="auto",h.src="https://i.ibb.co/0mbndK6/pause-1006-svgrepo-com.png",h.alt="pause"):(h.style.height="3vh",h.style.width="40%",h.style.margin="auto",h.src="https://i.ibb.co/6Z030k8/play-svgrepo-com-2.png"),function(){G.apply(this,arguments)}()})),f.addEventListener("click",(function(t){f.style.background=O?"#4b4b4b":"#ffffff",setTimeout((function(){!function(){K.apply(this,arguments)}()}),1e3)})),m.addEventListener("click",function(){var t=a(n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m.style.background="#4b4b4b",P){t.next=9;break}return alert("camera activated"),P=!0,k.style.display="block",t.next=7,Y();case 7:t.next=12;break;case 9:P=!1,k.style.display="none",Q();case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),g.addEventListener("click",function(){var t=a(n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g.style.background="#4b4b4b",t.next=3,J();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),x.addEventListener("click",function(){var t=a(n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w.style.background="#ffffff",I=[],E.srcObject="",mediaRecorder&&mediaRecorder.stream&&mediaRecorder.stream.getTracks().forEach((function(t){return t.stop()})),k.style.display="none";case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})();