(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7842)}])},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(8754),i=r(1757),o=i._(r(7294)),a=n._(r(2636)),s=r(7757),l=r(3735),c=r(3341);r(4210);let u=n._(r(7746)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function h(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,i,o,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function g(e){let[t,r]=o.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,o.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:a,className:s,imgStyle:l,blurStyle:c,isLazy:u,fetchPriority:d,fill:f,placeholder:h,loading:p,srcString:x,config:v,unoptimized:j,loader:w,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:_,setShowAltText:k,onLoad:C,onError:E,...S}=e;return p=u?"lazy":p,o.default.createElement("img",{...S,...g(d),loading:p,width:i,height:n,decoding:"async","data-nimg":f?"fill":"1",className:s,style:{...l,...c},...r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&m(e,x,h,b,y,_,j))},[x,h,b,y,_,E,j,t]),onLoad:e=>{let t=e.currentTarget;m(t,x,h,b,y,_,j)},onError:e=>{k(!0),"blur"===h&&_(!0),E&&E(e)}})}),x=(0,o.forwardRef)((e,t)=>{var r;let n,i,{src:m,sizes:x,unoptimized:v=!1,priority:j=!1,loading:w,className:b,quality:y,width:_,height:k,fill:C,style:E,onLoad:S,onLoadingComplete:N,placeholder:O="empty",blurDataURL:P,fetchPriority:z,layout:R,objectFit:A,objectPosition:F,lazyBoundary:G,lazyRoot:I,...M}=e,T=(0,o.useContext)(c.ImageConfigContext),W=(0,o.useMemo)(()=>{let e=d||T||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[T]),D=M.loader||u.default;delete M.loader;let J="__next_img_default"in D;if(J){if("custom"===W.loader)throw Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...n}=t;return e(n)}}if(R){"fill"===R&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(E={...E,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!x&&(x=t)}let B="",L=h(_),X=h(k);if("object"==typeof(r=m)&&(f(r)||void 0!==r.src)){let e=f(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,i=e.blurHeight,P=P||e.blurDataURL,B=e.src,!C){if(L||X){if(L&&!X){let t=L/e.width;X=Math.round(e.height*t)}else if(!L&&X){let t=X/e.height;L=Math.round(e.width*t)}}else L=e.width,X=e.height}}let $=!j&&("lazy"===w||void 0===w);(!(m="string"==typeof m?m:B)||m.startsWith("data:")||m.startsWith("blob:"))&&(v=!0,$=!1),W.unoptimized&&(v=!0),J&&m.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(v=!0),j&&(z="high");let[H,V]=(0,o.useState)(!1),[q,Q]=(0,o.useState)(!1),U=h(y),Y=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:F}:{},q?{}:{color:"transparent"},E),K="blur"===O&&P&&!H?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:L,heightInt:X,blurWidth:n,blurHeight:i,blurDataURL:P,objectFit:Y.objectFit})+'")'}:{},Z=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),u=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,n)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:s({config:t,src:r,quality:o,width:l[u]})}}({config:W,src:m,unoptimized:v,width:L,quality:U,sizes:x,loader:D}),ee=m,et=(0,o.useRef)(S);(0,o.useEffect)(()=>{et.current=S},[S]);let er=(0,o.useRef)(N);(0,o.useEffect)(()=>{er.current=N},[N]);let en={isLazy:$,imgAttributes:Z,heightInt:X,widthInt:L,qualityInt:U,className:b,imgStyle:Y,blurStyle:K,loading:w,config:W,fetchPriority:z,fill:C,unoptimized:v,placeholder:O,loader:D,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:V,setShowAltText:Q,...M};return o.default.createElement(o.default.Fragment,null,o.default.createElement(p,{...en,ref:t}),j?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:M.crossOrigin,...g(z)})):null)}),v=x;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,s=n||t,l=i||r,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+s+" "+l+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&i?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},7842:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(5893),i=r(5716),o=r.n(i),a=r(9008),s=r.n(a),l=r(5675),c=r.n(l),u=r(3100),d=r(7306),f=r(6877),h=r(5059),m=r(1337),g=(0,h.G)(function(e,t){let{templateAreas:r,gap:i,rowGap:o,columnGap:a,column:s,row:l,autoFlow:c,autoRows:u,templateRows:d,autoColumns:f,templateColumns:h,...g}=e;return(0,n.jsx)(m.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:r,gridGap:i,gridRowGap:o,gridColumnGap:a,gridAutoColumns:f,gridColumn:s,gridRow:l,gridAutoFlow:c,gridAutoRows:u,gridTemplateRows:d,gridTemplateColumns:h},...g})});g.displayName="Grid";var p=r(5119),x=r(4629),v=r(3951),j=(0,h.G)(function(e,t){let{columns:r,spacingX:i,spacingY:o,spacing:a,minChildWidth:s,...l}=e,c=(0,p.F)(),u=s?(0,v.XQ)(s,e=>{let t=(0,x.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(c);return null===e?null:`repeat(auto-fit, minmax(${t}, 1fr))`}):(0,v.XQ)(r,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`);return(0,n.jsx)(g,{ref:t,gap:a,columnGap:i,rowGap:o,templateColumns:u,...l})});j.displayName="SimpleGrid";var[w,b]=(0,r(6452).eC)("Card"),y=r(5432),_=r(3179),k=r(1639),C=(0,h.G)(function(e,t){let{className:r,children:i,direction:o="column",justify:a,align:s,...l}=(0,_.Lr)(e),c=(0,k.jC)("Card",e);return(0,n.jsx)(m.m.div,{ref:t,className:(0,y.cx)("chakra-card",r),__css:{display:"flex",flexDirection:o,justifyContent:a,alignItems:s,position:"relative",minWidth:0,wordWrap:"break-word",...c.container},...l,children:(0,n.jsx)(w,{value:c,children:i})})}),E=(0,h.G)(function(e,t){let{className:r,...i}=e,o=b();return(0,n.jsx)(m.m.div,{ref:t,className:(0,y.cx)("chakra-card__body",r),__css:o.body,...i})}),S=r(8193);function N(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:" th2ch-g HP "}),(0,n.jsx)("meta",{name:"description",content:"th2ch-g HP"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)(u.xu,{className:o().className,children:[(0,n.jsx)(u.xu,{textAlign:"center",fontSize:100,children:"th2ch-g"}),(0,n.jsx)(c(),{src:"",width:100,height:100,alt:"Figure not found"}),(0,n.jsxs)(d.K,{direction:"row",children:[(0,n.jsx)(f.J,{as:S.RrF,boxSize:100}),(0,n.jsx)(f.J,{as:S.RrF,boxSize:100}),(0,n.jsx)(f.J,{as:S.RrF,boxSize:100})]}),(0,n.jsxs)(j,{columns:2,marginTop:10,spacing:100,children:[(0,n.jsx)(u.xu,{children:(0,n.jsx)(C,{children:(0,n.jsx)(E,{children:"aldsjfhla;sdkjfha;ldsjhf"})})}),(0,n.jsx)(u.xu,{children:"a;kjsdhf;aksjdhf;akjdshf"}),(0,n.jsx)(u.xu,{children:"a;kjsdhf;aksjdhf;akjdshf"}),(0,n.jsx)(u.xu,{children:"a;kjsdhf;aksjdhf;akjdshf"}),(0,n.jsx)(u.xu,{children:"a;kjsdhf;aksjdhf;akjdshf"}),(0,n.jsx)(u.xu,{children:"a;kjsdhf;aksjdhf;akjdshf"})]}),(0,n.jsx)(u.xu,{textAlign:"center",fontSize:100,id:"contact",children:"Contact"}),(0,n.jsx)(u.xu,{textAlign:"center",children:"Contact"})]})]})}},5716:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_JP_338855', '__Noto_Sans_JP_Fallback_338855'",fontStyle:"normal"},className:"__className_338855"}},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(3740)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function l(e){return function(t){return n.createElement(c,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,i=e.attr,o=e.size,l=e.title,c=s(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(i)}}},function(e){e.O(0,[617,373,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);