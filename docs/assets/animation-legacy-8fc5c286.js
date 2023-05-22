System.register(["./index-legacy-7e0dc246.js"],(function(e,t){"use strict";var n,i;return{setters:[e=>{n=e.q,i=e.r}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
let t;const o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=e=>{if(void 0===t){const n=void 0!==e.style.animationName,i=void 0!==e.style.webkitAnimationName;t=!n&&i?"-webkit-":""}return t},r=(e,t,n)=>{const i=t.startsWith("animation")?a(e):"";e.style.setProperty(i+t,n)},s=(e,t)=>{const n=t.startsWith("animation")?a(e):"";e.style.removeProperty(n+t)},l=[],f=(e=[],t)=>{if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e};e("c",(e=>{let t,c,d,m,h,u,p,g,y,v,E,$,A,b=[],C=[],w=[],S=!1,T={},k=[],D=[],L={},P=0,R=!1,F=!1,N=!0,x=!1,O=!0,W=!1;const K=e,j=[],I=[],q=[],M=[],z=[],Z=[],B=[],G=[],H=[],J=[],Q="function"==typeof AnimationEffect||void 0!==n&&"function"==typeof n.AnimationEffect,U="function"==typeof Element&&"function"==typeof Element.prototype.animate&&Q,V=()=>J,X=e=>{ee(),e&&te()},Y=(e,t)=>(((null==t?void 0:t.oneTimeCallback)?I:j).push({c:e,o:t}),A),_=()=>(j.length=0,I.length=0,A),ee=()=>{if(U)J.forEach((e=>{e.cancel()})),J.length=0;else{const e=q.slice();i((()=>{e.forEach((e=>{s(e,"animation-name"),s(e,"animation-duration"),s(e,"animation-timing-function"),s(e,"animation-iteration-count"),s(e,"animation-delay"),s(e,"animation-play-state"),s(e,"animation-fill-mode"),s(e,"animation-direction")}))}))}},te=()=>{z.forEach((e=>{(null==e?void 0:e.parentNode)&&e.parentNode.removeChild(e)})),z.length=0},ne=()=>void 0!==h?h:p?p.getFill():"both",ie=()=>void 0!==y?y:void 0!==u?u:p?p.getDirection():"normal",oe=()=>R?"linear":void 0!==d?d:p?p.getEasing():"linear",ae=()=>F?0:void 0!==v?v:void 0!==c?c:p?p.getDuration():0,re=()=>void 0!==m?m:p?p.getIterations():1,se=()=>void 0!==E?E:void 0!==t?t:p?p.getDelay():0,le=e=>{U?V().forEach((t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(e);else{const n=new KeyframeEffect(t.effect.target,e,t.effect.getTiming());t.effect=n}})):ce()},fe=()=>{0!==P&&(P--,0===P&&((()=>{ve(),G.forEach((e=>e())),H.forEach((e=>e()));const e=N?1:0,t=k,n=D,i=L;q.forEach((e=>{const o=e.classList;t.forEach((e=>o.add(e))),n.forEach((e=>o.remove(e)));for(const t in i)i.hasOwnProperty(t)&&r(e,t,i[t])})),j.forEach((t=>t.c(e,A))),I.forEach((t=>t.c(e,A))),I.length=0,O=!0,N&&(x=!0),N=!0})(),p&&p.animationFinish()))},ce=(t=!0)=>{te();const n=(e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t)e["animation-timing-function"]=n,delete e[t];else{const i=o(t);i!==t&&(e[i]=n,delete e[t])}}})),e))(b);q.forEach((o=>{if(n.length>0){const s=((e=[])=>e.map((e=>{const t=e.offset,n=[];for(const i in e)e.hasOwnProperty(i)&&"offset"!==i&&n.push(`${i}: ${e[i]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" "))(n);$=void 0!==e?e:(e=>{let t=l.indexOf(e);return t<0&&(t=l.push(e)-1),`ion-animation-${t}`})(s);const f=((e,t,n)=>{var i;const o=(e=>{const t=void 0!==e.getRootNode?e.getRootNode():e;return t.head||t})(n),r=a(n),s=o.querySelector("#"+e);if(s)return s;const l=(null!==(i=n.ownerDocument)&&void 0!==i?i:document).createElement("style");return l.id=e,l.textContent=`@${r}keyframes ${e} { ${t} } @${r}keyframes ${e}-alt { ${t} }`,o.appendChild(l),l})($,s,o);z.push(f),r(o,"animation-duration",`${ae()}ms`),r(o,"animation-timing-function",oe()),r(o,"animation-delay",`${se()}ms`),r(o,"animation-fill-mode",ne()),r(o,"animation-direction",ie());const c=re()===1/0?"infinite":re().toString();r(o,"animation-iteration-count",c),r(o,"animation-play-state","paused"),t&&r(o,"animation-name",`${f.id}-alt`),i((()=>{r(o,"animation-name",f.id||null)}))}}))},de=(e=!0)=>{(()=>{Z.forEach((e=>e())),B.forEach((e=>e()));const e=C,t=w,n=T;q.forEach((i=>{const o=i.classList;e.forEach((e=>o.add(e))),t.forEach((e=>o.remove(e)));for(const e in n)n.hasOwnProperty(e)&&r(i,e,n[e])}))})(),b.length>0&&(U?(q.forEach((e=>{const t=e.animate(b,{id:K,delay:se(),duration:ae(),easing:oe(),iterations:re(),fill:ne(),direction:ie()});t.pause(),J.push(t)})),J.length>0&&(J[0].onfinish=()=>{fe()})):ce(e)),S=!0},me=e=>{if(e=Math.min(Math.max(e,0),.9999),U)J.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+ae()*e,t.pause()}));else{const t=`-${ae()*e}ms`;q.forEach((e=>{b.length>0&&(r(e,"animation-delay",t),r(e,"animation-play-state","paused"))}))}},he=e=>{J.forEach((e=>{e.effect.updateTiming({delay:se(),duration:ae(),easing:oe(),iterations:re(),fill:ne(),direction:ie()})})),void 0!==e&&me(e)},ue=(e=!0,t)=>{i((()=>{q.forEach((n=>{r(n,"animation-name",$||null),r(n,"animation-duration",`${ae()}ms`),r(n,"animation-timing-function",oe()),r(n,"animation-delay",void 0!==t?`-${t*ae()}ms`:`${se()}ms`),r(n,"animation-fill-mode",ne()||null),r(n,"animation-direction",ie()||null);const o=re()===1/0?"infinite":re().toString();r(n,"animation-iteration-count",o),e&&r(n,"animation-name",`${$}-alt`),i((()=>{r(n,"animation-name",$||null)}))}))}))},pe=(e=!1,t=!0,n)=>(e&&M.forEach((i=>{i.update(e,t,n)})),U?he(n):ue(t,n),A),ge=()=>{S&&(U?J.forEach((e=>{e.pause()})):q.forEach((e=>{r(e,"animation-play-state","paused")})),W=!0)},ye=()=>{g=void 0,fe()},ve=()=>{g&&clearTimeout(g)},Ee=()=>{q.forEach((e=>{s(e,"animation-duration"),s(e,"animation-delay"),s(e,"animation-play-state")}))},$e=e=>new Promise((t=>{(null==e?void 0:e.sync)&&(F=!0,Y((()=>F=!1),{oneTimeCallback:!0})),S||de(),x&&(U?(me(0),he()):ue(),x=!1),O&&(P=M.length+1,O=!1),Y((()=>t()),{oneTimeCallback:!0}),M.forEach((e=>{e.play()})),U?(J.forEach((e=>{e.play()})),0!==b.length&&0!==q.length||fe()):(()=>{if(ve(),i((()=>{q.forEach((e=>{b.length>0&&r(e,"animation-play-state","running")}))})),0===b.length||0===q.length)fe();else{const e=se()||0,t=ae()||0,n=re()||1;isFinite(n)&&(g=setTimeout(ye,e+t*n+100)),((e,t)=>{let n;const i={passive:!0},o=()=>{n&&n()},a=n=>{e===n.target&&(o(),t(n))};e&&(e.addEventListener("webkitAnimationEnd",a,i),e.addEventListener("animationend",a,i),n=()=>{e.removeEventListener("webkitAnimationEnd",a,i),e.removeEventListener("animationend",a,i)})})(q[0],(()=>{ve(),i((()=>{Ee(),i(fe)}))}))}})(),W=!1})),Ae=(e,t)=>{const n=b[0];return void 0===n||void 0!==n.offset&&0!==n.offset?b=[{offset:0,[e]:t},...b]:n[e]=t,A};return A={parentAnimation:p,elements:q,childAnimations:M,id:K,animationFinish:fe,from:Ae,to:(e,t)=>{const n=b[b.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?b=[...b,{offset:1,[e]:t}]:n[e]=t,A},fromTo:(e,t,n)=>Ae(e,t).to(e,n),parent:e=>(p=e,A),play:$e,pause:()=>(M.forEach((e=>{e.pause()})),ge(),A),stop:()=>{M.forEach((e=>{e.stop()})),S&&(ee(),S=!1),R=!1,F=!1,O=!0,y=void 0,v=void 0,E=void 0,P=0,x=!1,N=!0,W=!1},destroy:e=>(M.forEach((t=>{t.destroy(e)})),X(e),q.length=0,M.length=0,b.length=0,_(),S=!1,O=!0,A),keyframes:e=>{const t=b!==e;return b=e,t&&le(b),A},addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(A),M.push(t);else e.parent(A),M.push(e);return A},addElement:e=>{if(null!=e)if(1===e.nodeType)q.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)q.push(e[t]);else console.error("Invalid addElement value");return A},update:pe,fill:e=>(h=e,pe(!0),A),direction:e=>(u=e,pe(!0),A),iterations:e=>(m=e,pe(!0),A),duration:e=>(U||0!==e||(e=1),c=e,pe(!0),A),easing:e=>(d=e,pe(!0),A),delay:e=>(t=e,pe(!0),A),getWebAnimations:V,getKeyframes:()=>b,getFill:ne,getDirection:ie,getDelay:se,getIterations:re,getEasing:oe,getDuration:ae,afterAddRead:e=>(G.push(e),A),afterAddWrite:e=>(H.push(e),A),afterClearStyles:(e=[])=>{for(const t of e)L[t]="";return A},afterStyles:(e={})=>(L=e,A),afterRemoveClass:e=>(D=f(D,e),A),afterAddClass:e=>(k=f(k,e),A),beforeAddRead:e=>(Z.push(e),A),beforeAddWrite:e=>(B.push(e),A),beforeClearStyles:(e=[])=>{for(const t of e)T[t]="";return A},beforeStyles:(e={})=>(T=e,A),beforeRemoveClass:e=>(w=f(w,e),A),beforeAddClass:e=>(C=f(C,e),A),onFinish:Y,isRunning:()=>0!==P&&!W,progressStart:(e=!1,t)=>(M.forEach((n=>{n.progressStart(e,t)})),ge(),R=e,S||de(),pe(!1,!0,t),A),progressStep:e=>(M.forEach((t=>{t.progressStep(e)})),me(e),A),progressEnd:(e,t,n)=>(R=!1,M.forEach((i=>{i.progressEnd(e,t,n)})),void 0!==n&&(v=n),x=!1,N=!0,0===e?(y="reverse"===ie()?"normal":"reverse","reverse"===y&&(N=!1),U?(pe(),me(1-t)):(E=(1-t)*ae()*-1,pe(!1,!1))):1===e&&(U?(pe(),me(t)):(E=t*ae()*-1,pe(!1,!1))),void 0!==e&&(Y((()=>{v=void 0,y=void 0,E=void 0}),{oneTimeCallback:!0}),p||$e()),A)}}))}}}));
