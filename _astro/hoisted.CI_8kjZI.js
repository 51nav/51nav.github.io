import"./hoisted.DSrKbc4P.js";var H={},bt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},gt={},I={};let it;const Rt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];I.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};I.getSymbolTotalCodewords=function(t){return Rt[t]};I.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};I.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');it=t};I.isKanjiModeEnabled=function(){return typeof it<"u"};I.toSJIS=function(t){return it(t)};var $={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,n){if(e.isValid(r))return r;try{return t(r)}catch{return n}}})($);function ht(){this.buffer=[],this.length=0}ht.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Lt=ht;function V(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}V.prototype.set=function(e,t,i,r){const n=e*this.size+t;this.data[n]=i,r&&(this.reservedBit[n]=!0)};V.prototype.get=function(e,t){return this.data[e*this.size+t]};V.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};V.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var _t=V,wt={};(function(e){const t=I.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const n=Math.floor(r/7)+2,o=t(r),s=o===145?26:Math.ceil((o-13)/(2*n-2))*2,u=[o-7];for(let c=1;c<n-1;c++)u[c]=u[c-1]-s;return u.push(6),u.reverse()},e.getPositions=function(r){const n=[],o=e.getRowColCoords(r),s=o.length;for(let u=0;u<s;u++)for(let c=0;c<s;c++)u===0&&c===0||u===0&&c===s-1||u===s-1&&c===0||n.push([o[u],o[c]]);return n}})(wt);var mt={};const Ut=I.getSymbolSize,at=7;mt.getPositions=function(t){const i=Ut(t);return[[0,0],[i-at,0],[0,i-at]]};var yt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},e.from=function(n){return e.isValid(n)?parseInt(n,10):void 0},e.getPenaltyN1=function(n){const o=n.size;let s=0,u=0,c=0,a=null,l=null;for(let E=0;E<o;E++){u=c=0,a=l=null;for(let d=0;d<o;d++){let f=n.get(E,d);f===a?u++:(u>=5&&(s+=t.N1+(u-5)),a=f,u=1),f=n.get(d,E),f===l?c++:(c>=5&&(s+=t.N1+(c-5)),l=f,c=1)}u>=5&&(s+=t.N1+(u-5)),c>=5&&(s+=t.N1+(c-5))}return s},e.getPenaltyN2=function(n){const o=n.size;let s=0;for(let u=0;u<o-1;u++)for(let c=0;c<o-1;c++){const a=n.get(u,c)+n.get(u,c+1)+n.get(u+1,c)+n.get(u+1,c+1);(a===4||a===0)&&s++}return s*t.N2},e.getPenaltyN3=function(n){const o=n.size;let s=0,u=0,c=0;for(let a=0;a<o;a++){u=c=0;for(let l=0;l<o;l++)u=u<<1&2047|n.get(a,l),l>=10&&(u===1488||u===93)&&s++,c=c<<1&2047|n.get(l,a),l>=10&&(c===1488||c===93)&&s++}return s*t.N3},e.getPenaltyN4=function(n){let o=0;const s=n.data.length;for(let c=0;c<s;c++)o+=n.data[c];return Math.abs(Math.ceil(o*100/s/5)-10)*t.N4};function i(r,n,o){switch(r){case e.Patterns.PATTERN000:return(n+o)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return o%3===0;case e.Patterns.PATTERN011:return(n+o)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(o/3))%2===0;case e.Patterns.PATTERN101:return n*o%2+n*o%3===0;case e.Patterns.PATTERN110:return(n*o%2+n*o%3)%2===0;case e.Patterns.PATTERN111:return(n*o%3+(n+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(n,o){const s=o.size;for(let u=0;u<s;u++)for(let c=0;c<s;c++)o.isReserved(c,u)||o.xor(c,u,i(n,c,u))},e.getBestMask=function(n,o){const s=Object.keys(e.Patterns).length;let u=0,c=1/0;for(let a=0;a<s;a++){o(a),e.applyMask(a,n);const l=e.getPenaltyN1(n)+e.getPenaltyN2(n)+e.getPenaltyN3(n)+e.getPenaltyN4(n);e.applyMask(a,n),l<c&&(c=l,u=a)}return u}})(yt);var j={};const R=$,K=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],J=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];j.getBlocksCount=function(t,i){switch(i){case R.L:return K[(t-1)*4+0];case R.M:return K[(t-1)*4+1];case R.Q:return K[(t-1)*4+2];case R.H:return K[(t-1)*4+3];default:return}};j.getTotalCodewordsCount=function(t,i){switch(i){case R.L:return J[(t-1)*4+0];case R.M:return J[(t-1)*4+1];case R.Q:return J[(t-1)*4+2];case R.H:return J[(t-1)*4+3];default:return}};var Ct={},q={};const z=new Uint8Array(512),Y=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)z[i]=t,Y[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)z[i]=z[i-255]})();q.log=function(t){if(t<1)throw new Error("log("+t+")");return Y[t]};q.exp=function(t){return z[t]};q.mul=function(t,i){return t===0||i===0?0:z[Y[t]+Y[i]]};(function(e){const t=q;e.mul=function(r,n){const o=new Uint8Array(r.length+n.length-1);for(let s=0;s<r.length;s++)for(let u=0;u<n.length;u++)o[s+u]^=t.mul(r[s],n[u]);return o},e.mod=function(r,n){let o=new Uint8Array(r);for(;o.length-n.length>=0;){const s=o[0];for(let c=0;c<n.length;c++)o[c]^=t.mul(n[c],s);let u=0;for(;u<o.length&&o[u]===0;)u++;o=o.slice(u)}return o},e.generateECPolynomial=function(r){let n=new Uint8Array([1]);for(let o=0;o<r;o++)n=e.mul(n,new Uint8Array([1,t.exp(o)]));return n}})(Ct);const Et=Ct;function st(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}st.prototype.initialize=function(t){this.degree=t,this.genPoly=Et.generateECPolynomial(this.degree)};st.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=Et.mod(i,this.genPoly),n=this.degree-r.length;if(n>0){const o=new Uint8Array(this.degree);return o.set(r,n),o}return r};var Dt=st,pt={},L={},ct={};ct.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var S={};const Bt="[0-9]+",Ft="[A-Z $%*+\\-./:]+";let v="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";v=v.replace(/u/g,"\\u");const kt="(?:(?![A-Z0-9 $%*+\\-./:]|"+v+`)(?:.|[\r
]))+`;S.KANJI=new RegExp(v,"g");S.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");S.BYTE=new RegExp(kt,"g");S.NUMERIC=new RegExp(Bt,"g");S.ALPHANUMERIC=new RegExp(Ft,"g");const zt=new RegExp("^"+v+"$"),vt=new RegExp("^"+Bt+"$"),Ht=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");S.testKanji=function(t){return zt.test(t)};S.testNumeric=function(t){return vt.test(t)};S.testAlphanumeric=function(t){return Ht.test(t)};(function(e){const t=ct,i=S;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},e.getBestModeForData=function(o){return i.testNumeric(o)?e.NUMERIC:i.testAlphanumeric(o)?e.ALPHANUMERIC:i.testKanji(o)?e.KANJI:e.BYTE},e.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},e.isValid=function(o){return o&&o.bit&&o.ccBits};function r(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+n)}}e.from=function(o,s){if(e.isValid(o))return o;try{return r(o)}catch{return s}}})(L);(function(e){const t=I,i=j,r=$,n=L,o=ct,s=7973,u=t.getBCHDigit(s);function c(d,f,m){for(let y=1;y<=40;y++)if(f<=e.getCapacity(y,m,d))return y}function a(d,f){return n.getCharCountIndicator(d,f)+4}function l(d,f){let m=0;return d.forEach(function(y){const T=a(y.mode,f);m+=T+y.getBitsLength()}),m}function E(d,f){for(let m=1;m<=40;m++)if(l(d,m)<=e.getCapacity(m,f,n.MIXED))return m}e.from=function(f,m){return o.isValid(f)?parseInt(f,10):m},e.getCapacity=function(f,m,y){if(!o.isValid(f))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=n.BYTE);const T=t.getSymbolTotalCodewords(f),w=i.getTotalCodewordsCount(f,m),C=(T-w)*8;if(y===n.MIXED)return C;const h=C-a(y,f);switch(y){case n.NUMERIC:return Math.floor(h/10*3);case n.ALPHANUMERIC:return Math.floor(h/11*2);case n.KANJI:return Math.floor(h/13);case n.BYTE:default:return Math.floor(h/8)}},e.getBestVersionForData=function(f,m){let y;const T=r.from(m,r.M);if(Array.isArray(f)){if(f.length>1)return E(f,T);if(f.length===0)return 1;y=f[0]}else y=f;return c(y.mode,y.getLength(),T)},e.getEncodedBits=function(f){if(!o.isValid(f)||f<7)throw new Error("Invalid QR Code version");let m=f<<12;for(;t.getBCHDigit(m)-u>=0;)m^=s<<t.getBCHDigit(m)-u;return f<<12|m}})(pt);var At={};const et=I,Tt=1335,Vt=21522,ft=et.getBCHDigit(Tt);At.getEncodedBits=function(t,i){const r=t.bit<<3|i;let n=r<<10;for(;et.getBCHDigit(n)-ft>=0;)n^=Tt<<et.getBCHDigit(n)-ft;return(r<<10|n)^Vt};var It={};const Kt=L;function _(e){this.mode=Kt.NUMERIC,this.data=e.toString()}_.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};_.prototype.getLength=function(){return this.data.length};_.prototype.getBitsLength=function(){return _.getBitsLength(this.data.length)};_.prototype.write=function(t){let i,r,n;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),n=parseInt(r,10),t.put(n,10);const o=this.data.length-i;o>0&&(r=this.data.substr(i),n=parseInt(r,10),t.put(n,o*3+1))};var Jt=_;const Yt=L,X=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function U(e){this.mode=Yt.ALPHANUMERIC,this.data=e}U.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=X.indexOf(this.data[i])*45;r+=X.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(X.indexOf(this.data[i]),6)};var Ot=U;const $t=L;function D(e){this.mode=$t.BYTE,typeof e=="string"?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}D.getBitsLength=function(t){return t*8};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var jt=D;const qt=L,Qt=I;function F(e){this.mode=qt.KANJI,this.data=e}F.getBitsLength=function(t){return t*13};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=Qt.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var Gt=F,Nt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,r,n){var o={},s={};s[r]=0;var u=t.PriorityQueue.make();u.push(r,0);for(var c,a,l,E,d,f,m,y,T;!u.empty();){c=u.pop(),a=c.value,E=c.cost,d=i[a]||{};for(l in d)d.hasOwnProperty(l)&&(f=d[l],m=E+f,y=s[l],T=typeof s[l]>"u",(T||y>m)&&(s[l]=m,u.push(l,m),o[l]=a))}if(typeof n<"u"&&typeof s[n]>"u"){var w=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(w)}return o},extract_shortest_path_from_predecessor_list:function(i,r){for(var n=[],o=r;o;)n.push(o),i[o],o=i[o];return n.reverse(),n},find_path:function(i,r,n){var o=t.single_source_shortest_paths(i,r,n);return t.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,n={},o;i=i||{};for(o in r)r.hasOwnProperty(o)&&(n[o]=r[o]);return n.queue=[],n.sorter=i.sorter||r.default_sorter,n},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var n={value:i,cost:r};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Nt);var Xt=Nt.exports;(function(e){const t=L,i=Jt,r=Ot,n=jt,o=Gt,s=S,u=I,c=Xt;function a(w){return unescape(encodeURIComponent(w)).length}function l(w,C,h){const g=[];let p;for(;(p=w.exec(h))!==null;)g.push({data:p[0],index:p.index,mode:C,length:p[0].length});return g}function E(w){const C=l(s.NUMERIC,t.NUMERIC,w),h=l(s.ALPHANUMERIC,t.ALPHANUMERIC,w);let g,p;return u.isKanjiModeEnabled()?(g=l(s.BYTE,t.BYTE,w),p=l(s.KANJI,t.KANJI,w)):(g=l(s.BYTE_KANJI,t.BYTE,w),p=[]),C.concat(h,g,p).sort(function(A,N){return A.index-N.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function d(w,C){switch(C){case t.NUMERIC:return i.getBitsLength(w);case t.ALPHANUMERIC:return r.getBitsLength(w);case t.KANJI:return o.getBitsLength(w);case t.BYTE:return n.getBitsLength(w)}}function f(w){return w.reduce(function(C,h){const g=C.length-1>=0?C[C.length-1]:null;return g&&g.mode===h.mode?(C[C.length-1].data+=h.data,C):(C.push(h),C)},[])}function m(w){const C=[];for(let h=0;h<w.length;h++){const g=w[h];switch(g.mode){case t.NUMERIC:C.push([g,{data:g.data,mode:t.ALPHANUMERIC,length:g.length},{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.ALPHANUMERIC:C.push([g,{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.KANJI:C.push([g,{data:g.data,mode:t.BYTE,length:a(g.data)}]);break;case t.BYTE:C.push([{data:g.data,mode:t.BYTE,length:a(g.data)}])}}return C}function y(w,C){const h={},g={start:{}};let p=["start"];for(let B=0;B<w.length;B++){const A=w[B],N=[];for(let b=0;b<A.length;b++){const M=A[b],k=""+B+b;N.push(k),h[k]={node:M,lastCount:0},g[k]={};for(let G=0;G<p.length;G++){const P=p[G];h[P]&&h[P].node.mode===M.mode?(g[P][k]=d(h[P].lastCount+M.length,M.mode)-d(h[P].lastCount,M.mode),h[P].lastCount+=M.length):(h[P]&&(h[P].lastCount=M.length),g[P][k]=d(M.length,M.mode)+4+t.getCharCountIndicator(M.mode,C))}}p=N}for(let B=0;B<p.length;B++)g[p[B]].end=0;return{map:g,table:h}}function T(w,C){let h;const g=t.getBestModeForData(w);if(h=t.from(C,g),h!==t.BYTE&&h.bit<g.bit)throw new Error('"'+w+'" cannot be encoded with mode '+t.toString(h)+`.
 Suggested mode is: `+t.toString(g));switch(h===t.KANJI&&!u.isKanjiModeEnabled()&&(h=t.BYTE),h){case t.NUMERIC:return new i(w);case t.ALPHANUMERIC:return new r(w);case t.KANJI:return new o(w);case t.BYTE:return new n(w)}}e.fromArray=function(C){return C.reduce(function(h,g){return typeof g=="string"?h.push(T(g,null)):g.data&&h.push(T(g.data,g.mode)),h},[])},e.fromString=function(C,h){const g=E(C,u.isKanjiModeEnabled()),p=m(g),B=y(p,h),A=c.find_path(B.map,"start","end"),N=[];for(let b=1;b<A.length-1;b++)N.push(B.table[A[b]].node);return e.fromArray(f(N))},e.rawSplit=function(C){return e.fromArray(E(C,u.isKanjiModeEnabled()))}})(It);const Q=I,W=$,Wt=Lt,Zt=_t,xt=wt,te=mt,nt=yt,ot=j,ee=Dt,O=pt,ne=At,oe=L,Z=It;function re(e,t){const i=e.size,r=te.getPositions(t);for(let n=0;n<r.length;n++){const o=r[n][0],s=r[n][1];for(let u=-1;u<=7;u++)if(!(o+u<=-1||i<=o+u))for(let c=-1;c<=7;c++)s+c<=-1||i<=s+c||(u>=0&&u<=6&&(c===0||c===6)||c>=0&&c<=6&&(u===0||u===6)||u>=2&&u<=4&&c>=2&&c<=4?e.set(o+u,s+c,!0,!0):e.set(o+u,s+c,!1,!0))}}function ie(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function se(e,t){const i=xt.getPositions(t);for(let r=0;r<i.length;r++){const n=i[r][0],o=i[r][1];for(let s=-2;s<=2;s++)for(let u=-2;u<=2;u++)s===-2||s===2||u===-2||u===2||s===0&&u===0?e.set(n+s,o+u,!0,!0):e.set(n+s,o+u,!1,!0)}}function ce(e,t){const i=e.size,r=O.getEncodedBits(t);let n,o,s;for(let u=0;u<18;u++)n=Math.floor(u/3),o=u%3+i-8-3,s=(r>>u&1)===1,e.set(n,o,s,!0),e.set(o,n,s,!0)}function x(e,t,i){const r=e.size,n=ne.getEncodedBits(t,i);let o,s;for(o=0;o<15;o++)s=(n>>o&1)===1,o<6?e.set(o,8,s,!0):o<8?e.set(o+1,8,s,!0):e.set(r-15+o,8,s,!0),o<8?e.set(8,r-o-1,s,!0):o<9?e.set(8,15-o-1+1,s,!0):e.set(8,15-o-1,s,!0);e.set(r-8,8,1,!0)}function ue(e,t){const i=e.size;let r=-1,n=i-1,o=7,s=0;for(let u=i-1;u>0;u-=2)for(u===6&&u--;;){for(let c=0;c<2;c++)if(!e.isReserved(n,u-c)){let a=!1;s<t.length&&(a=(t[s]>>>o&1)===1),e.set(n,u-c,a),o--,o===-1&&(s++,o=7)}if(n+=r,n<0||i<=n){n-=r,r=-r;break}}}function le(e,t,i){const r=new Wt;i.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),oe.getCharCountIndicator(c.mode,e)),c.write(r)});const n=Q.getSymbolTotalCodewords(e),o=ot.getTotalCodewordsCount(e,t),s=(n-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const u=(s-r.getLengthInBits())/8;for(let c=0;c<u;c++)r.put(c%2?17:236,8);return ae(r,e,t)}function ae(e,t,i){const r=Q.getSymbolTotalCodewords(t),n=ot.getTotalCodewordsCount(t,i),o=r-n,s=ot.getBlocksCount(t,i),u=r%s,c=s-u,a=Math.floor(r/s),l=Math.floor(o/s),E=l+1,d=a-l,f=new ee(d);let m=0;const y=new Array(s),T=new Array(s);let w=0;const C=new Uint8Array(e.buffer);for(let A=0;A<s;A++){const N=A<c?l:E;y[A]=C.slice(m,m+N),T[A]=f.encode(y[A]),m+=N,w=Math.max(w,N)}const h=new Uint8Array(r);let g=0,p,B;for(p=0;p<w;p++)for(B=0;B<s;B++)p<y[B].length&&(h[g++]=y[B][p]);for(p=0;p<d;p++)for(B=0;B<s;B++)h[g++]=T[B][p];return h}function fe(e,t,i,r){let n;if(Array.isArray(e))n=Z.fromArray(e);else if(typeof e=="string"){let a=t;if(!a){const l=Z.rawSplit(e);a=O.getBestVersionForData(l,i)}n=Z.fromString(e,a||40)}else throw new Error("Invalid data");const o=O.getBestVersionForData(n,i);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=o;else if(t<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=le(t,i,n),u=Q.getSymbolSize(t),c=new Zt(u);return re(c,t),ie(c),se(c,t),x(c,i,0),t>=7&&ce(c,t),ue(c,s),isNaN(r)&&(r=nt.getBestMask(c,x.bind(null,c,i))),nt.applyMask(r,c),x(c,i,r),{modules:c,version:t,errorCorrectionLevel:i,maskPattern:r,segments:n}}gt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=W.M,n,o;return typeof i<"u"&&(r=W.from(i.errorCorrectionLevel,W.M),n=O.from(i.version),o=nt.from(i.maskPattern),i.toSJISFunc&&Q.setToSJISFunction(i.toSJISFunc)),fe(t,n,r,o)};var Mt={},ut={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const n=parseInt(r.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const n=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:n,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,n){return n.width&&n.width>=r+n.margin*2?n.width/(r+n.margin*2):n.scale},e.getImageWidth=function(r,n){const o=e.getScale(r,n);return Math.floor((r+n.margin*2)*o)},e.qrToImageData=function(r,n,o){const s=n.modules.size,u=n.modules.data,c=e.getScale(s,o),a=Math.floor((s+o.margin*2)*c),l=o.margin*c,E=[o.color.light,o.color.dark];for(let d=0;d<a;d++)for(let f=0;f<a;f++){let m=(d*a+f)*4,y=o.color.light;if(d>=l&&f>=l&&d<a-l&&f<a-l){const T=Math.floor((d-l)/c),w=Math.floor((f-l)/c);y=E[u[T*s+w]?1:0]}r[m++]=y.r,r[m++]=y.g,r[m++]=y.b,r[m]=y.a}}})(ut);(function(e){const t=ut;function i(n,o,s){n.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(o,s,u){let c=u,a=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(a=r()),c=t.getOptions(c);const l=t.getImageWidth(o.modules.size,c),E=a.getContext("2d"),d=E.createImageData(l,l);return t.qrToImageData(d.data,o,c),i(E,a,l),E.putImageData(d,0,0),a},e.renderToDataURL=function(o,s,u){let c=u;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const a=e.render(o,s,c),l=c.type||"image/png",E=c.rendererOpts||{};return a.toDataURL(l,E.quality)}})(Mt);var St={};const de=ut;function dt(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function tt(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function ge(e,t,i){let r="",n=0,o=!1,s=0;for(let u=0;u<e.length;u++){const c=Math.floor(u%t),a=Math.floor(u/t);!c&&!o&&(o=!0),e[u]?(s++,u>0&&c>0&&e[u-1]||(r+=o?tt("M",c+i,.5+a+i):tt("m",n,0),n=0,o=!1),c+1<t&&e[u+1]||(r+=tt("h",s),s=0)):n++}return r}St.render=function(t,i,r){const n=de.getOptions(i),o=t.modules.size,s=t.modules.data,u=o+n.margin*2,c=n.color.light.a?"<path "+dt(n.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",a="<path "+dt(n.color.dark,"stroke")+' d="'+ge(s,o,n.margin)+'"/>',l='viewBox="0 0 '+u+" "+u+'"',d='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+l+' shape-rendering="crispEdges">'+c+a+`</svg>
`;return typeof r=="function"&&r(null,d),d};const he=bt,rt=gt,Pt=Mt,we=St;function lt(e,t,i,r,n){const o=[].slice.call(arguments,1),s=o.length,u=typeof o[s-1]=="function";if(!u&&!he())throw new Error("Callback required as last argument");if(u){if(s<2)throw new Error("Too few arguments provided");s===2?(n=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof n>"u"?(n=r,r=void 0):(n=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(c,a){try{const l=rt.create(i,r);c(e(l,t,r))}catch(l){a(l)}})}try{const c=rt.create(i,r);n(null,e(c,t,r))}catch(c){n(c)}}H.create=rt.create;H.toCanvas=lt.bind(null,Pt.render);H.toDataURL=lt.bind(null,Pt.renderToDataURL);H.toString=lt.bind(null,function(e,t,i){return we.render(e,i)});window.showQRCode=async e=>{const t=e.currentTarget,i=t.dataset.url;if(!i)return;const r=document.getElementById("qrModal"),n=document.getElementById("qrcode");if(!(!r||!n))try{const o=document.createElement("canvas");await H.toCanvas(o,i,{width:256,margin:2,color:{dark:"#000000",light:"#ffffff"},errorCorrectionLevel:"H"});const s=o.getContext("2d");if(s){const u=new URL(i).hostname,c=new Image;c.crossOrigin="anonymous",c.src=`https://www.google.com/s2/favicons?domain=${u}&sz=128`;const a=t.closest(".flex-1")?.querySelector("h1")?.textContent||"";c.onload=()=>{const l=o.width*.2,E=(o.width-l)/2,d=(o.height-l)/2;s.fillStyle="white",s.fillRect(E-2,d-2,l+4,l+4),s.drawImage(c,E,d,l,l),n.innerHTML="",n.appendChild(o),r.style.display="flex"},c.onerror=()=>{const l=o.width*.2,E=(o.width-l)/2,d=(o.height-l)/2;s.fillStyle="#2937f0",s.fillRect(E,d,l,l),s.fillStyle="white",s.font=`bold ${l*.6}px Arial`,s.textAlign="center",s.textBaseline="middle",s.fillText(a.charAt(0).toUpperCase(),o.width*.5,o.height*.5),n.innerHTML="",n.appendChild(o),r.style.display="flex"}}}catch(o){console.error("Failed to generate QR code:",o)}};window.closeQRCode=()=>{const e=document.getElementById("qrModal");e&&(e.style.display="none")};const me=document.getElementById("qrModal");me?.addEventListener("click",e=>{e.target===e.currentTarget&&window.closeQRCode()});
