import"./hoisted.CuNMzm8Z.js";document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("showQRCode"),i=document.getElementById("qrCodeDisplay");o&&i&&o.addEventListener("click",function(){i.classList.toggle("hidden")})});const g="modulepreload",y=function(o){return"/"+o},h={},C=function(i,a,c){let l=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),r=s?.nonce||s?.getAttribute("nonce");l=Promise.allSettled(a.map(e=>{if(e=y(e),e in h)return;h[e]=!0;const n=e.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${f}`))return;const t=document.createElement("link");if(t.rel=n?"stylesheet":g,n||(t.as="script"),t.crossOrigin="",t.href=e,r&&t.setAttribute("nonce",r),document.head.appendChild(t),n)return new Promise((d,m)=>{t.addEventListener("load",d),t.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${e}`)))})}))}function u(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return l.then(s=>{for(const r of s||[])r.status==="rejected"&&u(r.reason);return i().catch(u)})},E=await C(()=>import("./browser.BXdiCFWD.js").then(o=>o.b),[]),p=E.default;document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("qrModal"),i=document.getElementById("showQRCode"),a=document.getElementById("closeQRCode"),c=document.getElementById("qrCode"),l=()=>{if(c)for(;c.firstChild;)c.removeChild(c.firstChild)},u=async()=>{if(l(),c){const r=document.getElementById("showQRCode")?.dataset.url;if(!r){const e=document.createElement("div");e.style.padding="2rem",e.style.color="#666",e.textContent="暂无可用链接",c.appendChild(e);return}try{const e=document.createElement("canvas");await p.toCanvas(e,r,{width:200,margin:2,color:{dark:"#2937f0",light:"#ffffff"}});const n=e.getContext("2d"),f=200,t=f*.25,d=(f-t)/2;n.fillStyle="#FFFFFF",n.beginPath(),n.roundRect(d-4,d-4,t+8,t+8,8),n.fill();const m=new Image;m.onload=()=>{n.save(),n.beginPath(),n.roundRect(d,d,t,t,6),n.clip(),n.drawImage(m,d,d,t,t),n.restore()},m.src="https://www.google.com/s2/favicons?domain="+new URL(r).hostname+"&sz=128",c.appendChild(e),o.style.display="flex"}catch(e){console.error("Failed to generate QR code:",e)}}};i?.addEventListener("click",()=>{u()}),a?.addEventListener("click",()=>{o.style.display="none",l()}),o?.addEventListener("click",s=>{s.target===o&&(o.style.display="none",l())})});
