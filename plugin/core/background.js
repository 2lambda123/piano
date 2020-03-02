!function(e){var o={};function t(n){if(o[n])return o[n].exports;var d=o[n]={i:n,l:!1,exports:{}};return e[n].call(d.exports,d,d.exports,t),d.l=!0,d.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var d in e)t.d(n,d,function(o){return e[o]}.bind(null,d));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=642)}({642:function(e,o){const t={};let n,d,c,r;chrome.runtime.onConnect.addListener((function(e){const o=function(o){return"original"==o.name&&(t[o.tabId]=e),!0};e.onMessage.addListener(o),e.onDisconnect.addListener((function(e){e.onMessage.removeListener(o);const n=Object.keys(t);for(let o=0,d=n.length;o<d;o++)if(t[n[o]]==e){delete t[n[o]];break}}))}));let i=document.getElementById("localVideo"),l=document.getElementById("recordedVideo"),a=document.getElementById("record"),s=document.getElementById("play"),u=document.getElementById("download");function m(e){let o=(window.performance.now()/1e3).toFixed(3);console.log(o+":"+e)}function p(e){console.log(e),e.onremovetrack=()=>{alert("Recording has ended")},m("getUserMedia() got stream!"),a.disabled=!1,window.stream=e,r=e,i.srcObject=e,document.getElementById("record").click()}function g(e){document.getElementById("record").click(),document.getElementById("download").click()}s.disabled=!0,u.disabled=!0,a.onclick=function(){if("Start Recording"===a.textContent)!function(){d=[];let e={mimeType:"video/webm;codecs=vp9"};MediaRecorder.isTypeSupported(e.mimeType)||(console.log(e.mimeType+"is not Supported"),e={mimeType:"video/webm;codecs=vp8"},MediaRecorder.isTypeSupported(e.mimeType)||(console.log(e.mimeType+"is not Supported"),e={mimeType:"video/webm;codecs=vp8"},MediaRecorder.isTypeSupported(e.mimeType)||(console.log(e.mimeType+"is not Supported"),e={mimeType:""})));try{n=new MediaRecorder(window.stream,e)}catch(e){return void console.log("Exception while creating MediaRecorder: "+e)}console.log("Created MediaRecorder",n,"with options",e),a.textContent="Stop Recording",s.disabled=!0,u.disabled=!0,n.onstop=w,n.ondataavailable=b,n.start(10),console.log("MediaRecorder started",n)}();else{n.stop(),console.log("Recorded Blobs: ",d),l.controls=!0,a.textContent="Start Recording",s.disabled=!1,u.disabled=!1;let e=document.getElementById("test"),o=new Blob(d,{type:"video/webm"});e.src=window.URL.createObjectURL(o)}},s.onclick=function(){m("Starting call"),r.getVideoTracks().length>0&&m("Using video device: "+r.getVideoTracks()[0].label);r.getAudioTracks().length>0&&m("Using audio device: "+r.getAudioTracks()[0].label)},u.onclick=function(){let e=new Blob(d,{type:"video/webm"}),o=window.URL.createObjectURL(e),t=document.createElement("a");t.style.display="none",t.href=o,t.download="test.webm",document.body.appendChild(t),t.click(),setTimeout((function(){document.body.removeChild(t),window.URL.revokeObjectURL(o)}),100)};let f={video:!0,audio:!1},y=new MediaSource;function b(e){e.data&&e.data.size>0&&d.push(e.data)}function w(e){console.log("Recorder stopped: ",e)}y.addEventListener("sourceopen",(function(e){m("MediaSource opened！"),c=y.addSourceBuffer("video/webm;codecs='vp8'"),m(c)}),!1),l.addEventListener("error",(function(e){document.getElementById("record").click(),document.getElementById("download").click(),m("MediaRecording.recordedMedia.error()")}),!0),chrome.runtime.onMessage.addListener((e,o,n)=>{if("startRecordScreen"===e.payload&&navigator.mediaDevices.getDisplayMedia(f).then(p).catch(g),"stopRecordScreen"===e.payload&&(document.getElementById("record").click(),document.getElementById("download").click()),"startScreenShot"===e.payload)return chrome.tabs.captureVisibleTab(null,{},e=>{const o=document.createElement("a");o.download="screenshot.png",o.href=e,document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o)},100)}),!0;if("startWatchClipboardContents"===e.payload&&(clearInterval(window.pasteRecord),window.pasteRecord=setInterval(()=>{let e=[...localStorage.getItem("paste-info")?JSON.parse(localStorage.getItem("paste-info")):[]];console.log(e);let o=document.createElement("input");document.body.appendChild(o),o.focus(),document.execCommand("paste");let t=o.value;e.length>0?e[e.length-1]!==t&&(e.push(t),localStorage.setItem("paste-info",JSON.stringify(e))):0===e.length&&(e.push(t),localStorage.setItem("paste-info",JSON.stringify(e))),console.log(t),document.body.removeChild(o)},1e3)),"stopWatchClipboardContents"===e.payload&&clearInterval(window.pasteRecord),console.log("收到来自content-script的消息："),console.log(e,o,n),o.tab){const n=o.tab.id;n in t?(console.log("sender.tab is defined."),t[n].postMessage(e)):console.log("Tab not found in connection list.")}else console.log("sender.tab not defined.");return!0})}});