import"./hoisted.DcMsn8fP.js";document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("showQRCode"),c=document.getElementById("qrCodeDisplay");t&&c&&t.addEventListener("click",function(){c.classList.toggle("hidden")})});const y="modulepreload",E=function(t){return"/"+t},u={},C=function(c,i,r){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),n=o?.nonce||o?.getAttribute("nonce");d=Promise.allSettled(i.map(e=>{if(e=E(e),e in u)return;u[e]=!0;const a=e.endsWith(".css"),m=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${m}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":y,a||(s.as="script"),s.crossOrigin="",s.href=e,n&&s.setAttribute("nonce",n),document.head.appendChild(s),a)return new Promise((f,h)=>{s.addEventListener("load",f),s.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${e}`)))})}))}function l(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return d.then(o=>{for(const n of o||[])n.status==="rejected"&&l(n.reason);return c().catch(l)})},g=await C(()=>import("./browser.BXdiCFWD.js").then(t=>t.b),[]),p=g.default;document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("qrModal"),c=document.getElementById("showQRCode"),i=document.getElementById("closeQRCode"),r=document.getElementById("qrCode"),d=()=>{if(r)for(;r.firstChild;)r.removeChild(r.firstChild)},l=async()=>{if(d(),r){const n=document.getElementById("showQRCode")?.dataset.url;if(!n){const e=document.createElement("div");e.style.padding="2rem",e.style.color="#666",e.textContent="暂无可用链接",r.appendChild(e);return}try{const e=document.createElement("canvas");await p.toCanvas(e,n,{width:200,margin:2,color:{dark:"#2937f0",light:"#ffffff"}}),r.appendChild(e),t.style.display="flex"}catch(e){console.error("Failed to generate QR code:",e)}}};c?.addEventListener("click",()=>{l()}),i?.addEventListener("click",()=>{t.style.display="none",d()}),t?.addEventListener("click",o=>{o.target===t&&(t.style.display="none",d())})});
