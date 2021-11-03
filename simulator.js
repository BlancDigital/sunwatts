var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function l(){return i(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t){return""===t?null:+t}function p(t,e){t.value=null==e?"":e}let $;function m(t){$=t}const h=[],g=[],x=[],y=[],v=Promise.resolve();let b=!1;function _(t){x.push(t)}let w=!1;const q=new Set;function k(){if(!w){w=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];m(e),E(e.$$)}for(m(null),h.length=0;g.length;)g.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];q.has(e)||(q.add(e),e())}x.length=0}while(h.length);for(;y.length;)y.pop()();b=!1,w=!1,q.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const C=new Set;function A(t,e){-1===t.$$.dirty[0]&&(h.push(t),b||(b=!0,v.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(s,a,u,i,l,f,d,p=[-1]){const h=$;m(s);const g=s.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(h?h.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:a.target||h.$$.root};d&&d(g.root);let x=!1;if(g.ctx=u?u(s,a.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),x&&A(s,t)),e})):[],g.update(),x=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);g.fragment&&g.fragment.l(t),t.forEach(c)}else g.fragment&&g.fragment.c();a.intro&&((y=s.$$.fragment)&&y.i&&(C.delete(y),y.i(v))),function(t,n,s,a){const{fragment:c,on_mount:u,on_destroy:i,after_update:l}=t.$$;c&&c.m(n,s),a||_((()=>{const n=u.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(_)}(s,a.target,a.anchor,a.customElement),k()}var y,v;m(h)}function N(e){let n,o,r,s,$,m,h,g,x,y,v,b,_,w,q,k,E,C=(e[0]-.15*e[0]).toFixed(2)+"";return{c(){n=u("div"),o=u("label"),o.textContent="Quanto você gasta (aproximadamente) por mês com energia?",r=l(),s=u("div"),$=u("span"),$.textContent="R$",m=l(),h=u("input"),g=l(),x=u("p"),x.textContent="Você poderia ter economizado",y=l(),v=u("p"),b=u("span"),b.textContent="R$",_=i(C),w=l(),q=u("span"),q.textContent="/mês",f(o,"for","quantia"),f(o,"class","svelte-1sl3wfq"),f(h,"type","number"),f(h,"name","quantia"),f(h,"min","100"),f(h,"max","3000"),f(h,"id","quantia"),f(h,"class","svelte-1sl3wfq"),f(s,"class","quantia-wrapper svelte-1sl3wfq"),f(x,"class","economia-text svelte-1sl3wfq"),f(b,"class","svelte-1sl3wfq"),f(q,"class","mes svelte-1sl3wfq"),f(v,"class","economia svelte-1sl3wfq"),f(n,"class","wrapper svelte-1sl3wfq")},m(t,c){var u,i,l,f;!function(t,e,n){t.insertBefore(e,n||null)}(t,n,c),a(n,o),a(n,r),a(n,s),a(s,$),a(s,m),a(s,h),p(h,e[0]),a(n,g),a(n,x),a(n,y),a(n,v),a(v,b),a(v,_),a(v,w),a(v,q),k||(u=h,i="input",l=e[1],u.addEventListener(i,l,f),E=()=>u.removeEventListener(i,l,f),k=!0)},p(t,[e]){1&e&&d(h.value)!==t[0]&&p(h,t[0]),1&e&&C!==(C=(t[0]-.15*t[0]).toFixed(2)+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(_,C)},i:t,o:t,d(t){t&&c(n),k=!1,E()}}}function O(t,e,n){let o=250;return t.$$.update=()=>{1&t.$$.dirty&&"null"==typeof o&&n(0,o=100),1&t.$$.dirty&&o>5e4&&n(0,o=5e4),1&t.$$.dirty&&o<0&&n(0,o=0)},[o,function(){o=d(this.value),n(0,o)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,O,N,s,{})}}({target:document.body.querySelector(".simulator")})}();
//# sourceMappingURL=bundle.js.map
