var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,a;function l(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function p(){return m(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function h(t){a=t}const v=[],w=[],k=[],b=[],y=Promise.resolve();let x=!1;function _(t){k.push(t)}const j=new Set;let E=0;function L(){const t=a;do{for(;E<v.length;){const t=v[E];E++,h(t),P(t.$$)}for(h(null),v.length=0,E=0;w.length;)w.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];j.has(e)||(j.add(e),e())}k.length=0}while(v.length);for(;b.length;)b.pop()();x=!1,j.clear(),h(t)}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const T=new Set;function B(t,e){t&&t.i&&(T.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),undefined.c.push((()=>{T.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function S(t){t&&t.c()}function A(t,n,o,i){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=t.$$;a&&a.m(n,o),i||_((()=>{const n=l.map(e).filter(s);c?c.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(_)}function O(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(v.push(t),x||(x=!0,y.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(e,s,o,i,l,c,u,$=[-1]){const m=a;h(e);const p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:n(),dirty:$,skip_bound:!1,root:s.target||m.$$.root};u&&u(p.root);let d=!1;if(p.ctx=o?o(e,s.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),d&&M(e,t)),n})):[],p.update(),d=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();s.intro&&B(e.$$.fragment),A(e,s.target,s.anchor,s.customElement),L()}h(m)}class N{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(e){let n;return{c(){n=$("div"),n.innerHTML='<h1 class="svelte-17wf02x">BACHELORGRUPPE 2</h1> \n    <h2 class="svelte-17wf02x">System for behandling av XML-meldinger</h2>',d(n,"class","svelte-17wf02x")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class q extends N{constructor(t){super(),C(this,t,null,G,o,{})}}function z(e){let n;return{c(){n=$("div"),n.innerHTML='<img src="images/oslomet_logo.png" class="svelte-y5cb61"/>',d(n,"class","svelte-y5cb61")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class F extends N{constructor(t){super(),C(this,t,null,z,o,{})}}function R(e){let n,r,s,o,i,a,l,h,v;return{c(){n=$("div"),r=$("h3"),s=m(e[0]),o=p(),i=$("p"),a=m(e[1]),l=p(),h=$("a"),v=m("Last ned"),d(r,"class","svelte-hwf9n7"),d(h,"href",e[2]),d(h,"download",e[0]),d(h,"class","svelte-hwf9n7"),d(n,"class","svelte-hwf9n7")},m(t,e){u(t,n,e),c(n,r),c(r,s),c(n,o),c(n,i),c(i,a),c(n,l),c(n,h),c(h,v)},p(t,[e]){1&e&&g(s,t[0]),2&e&&g(a,t[1]),4&e&&d(h,"href",t[2]),1&e&&d(h,"download",t[0])},i:t,o:t,d(t){t&&f(n)}}}function D(t,e,n){let{title:r}=e,{description:s}=e,{file:o}=e;return t.$$set=t=>{"title"in t&&n(0,r=t.title),"description"in t&&n(1,s=t.description),"file"in t&&n(2,o=t.file)},[r,s,o]}class J extends N{constructor(t){super(),C(this,t,D,R,o,{title:0,description:1,file:2})}}function K(e){let n,r,s,o,i,a,l,m,g;return r=new J({props:{file:"documents/Statusrapport.pdf",title:"Statusrapport",description:"Tidlig status på hva vi har gjort for å skaffe et prosjekt"}}),o=new J({props:{file:"documents/Prosjektskisse.pdf",title:"Prosjektskisse",description:"Skisse av prosjektet og info om arbeidsgiver"}}),a=new J({props:{file:"documents/Forprosjektrapport.pdf",title:"Forprosjekt",description:"Analyse av prosjektet og planlegging av arbeidet"}}),m=new J({props:{file:"",title:"Prosjektrapport",description:"Sluttdokumentasjonen av prosessen"}}),{c(){n=$("div"),S(r.$$.fragment),s=p(),S(o.$$.fragment),i=p(),S(a.$$.fragment),l=p(),S(m.$$.fragment),d(n,"class","svelte-1ihr5nb")},m(t,e){u(t,n,e),A(r,n,null),c(n,s),A(o,n,null),c(n,i),A(a,n,null),c(n,l),A(m,n,null),g=!0},p:t,i(t){g||(B(r.$$.fragment,t),B(o.$$.fragment,t),B(a.$$.fragment,t),B(m.$$.fragment,t),g=!0)},o(t){H(r.$$.fragment,t),H(o.$$.fragment,t),H(a.$$.fragment,t),H(m.$$.fragment,t),g=!1},d(t){t&&f(n),O(r),O(o),O(a),O(m)}}}class U extends N{constructor(t){super(),C(this,t,null,K,o,{})}}function X(e){let n,r,s,o,i,a,h,v,w,k;return{c(){n=$("div"),r=$("h3"),s=m(e[0]),o=p(),i=$("img"),v=p(),w=$("p"),k=m(e[1]),l(i.src,a=e[2])||d(i,"src",a),d(i,"alt",h="Picture of "+e[0]),d(w,"class","svelte-y3m7kn"),d(n,"class","svelte-y3m7kn")},m(t,e){u(t,n,e),c(n,r),c(r,s),c(n,o),c(n,i),c(n,v),c(n,w),c(w,k)},p(t,[e]){1&e&&g(s,t[0]),4&e&&!l(i.src,a=t[2])&&d(i,"src",a),1&e&&h!==(h="Picture of "+t[0])&&d(i,"alt",h),2&e&&g(k,t[1])},i:t,o:t,d(t){t&&f(n)}}}function I(t,e,n){let{name:r}=e,{description:s}=e,{image:o}=e,{link:i}=e;return t.$$set=t=>{"name"in t&&n(0,r=t.name),"description"in t&&n(1,s=t.description),"image"in t&&n(2,o=t.image),"link"in t&&n(3,i=t.link)},[r,s,o,i]}class Q extends N{constructor(t){super(),C(this,t,I,X,o,{name:0,description:1,image:2,link:3})}}function V(e){let n,r,s,o,i,a,l,m,g,h,v;return r=new Q({props:{name:"Tom H. Basmo",description:W,image:Y}}),o=new Q({props:{name:"Hajin Barzingi",description:W,image:Y}}),a=new Q({props:{name:"Jørund T. Løvlien",description:W,image:Y}}),m=new Q({props:{name:"Nikola Dordevic",description:W,image:Y}}),h=new Q({props:{name:"Ola G. Berg",description:W,image:Y}}),{c(){n=$("div"),S(r.$$.fragment),s=p(),S(o.$$.fragment),i=p(),S(a.$$.fragment),l=p(),S(m.$$.fragment),g=p(),S(h.$$.fragment),d(n,"class","container svelte-y1h9vd")},m(t,e){u(t,n,e),A(r,n,null),c(n,s),A(o,n,null),c(n,i),A(a,n,null),c(n,l),A(m,n,null),c(n,g),A(h,n,null),v=!0},p:t,i(t){v||(B(r.$$.fragment,t),B(o.$$.fragment,t),B(a.$$.fragment,t),B(m.$$.fragment,t),B(h.$$.fragment,t),v=!0)},o(t){H(r.$$.fragment,t),H(o.$$.fragment,t),H(a.$$.fragment,t),H(m.$$.fragment,t),H(h.$$.fragment,t),v=!1},d(t){t&&f(n),O(r),O(o),O(a),O(m),O(h)}}}let W="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat tellus in lacus tempus vestibulum.",Y="images/dummy_person.png";class Z extends N{constructor(t){super(),C(this,t,null,V,o,{})}}function tt(e){let n;return{c(){n=$("div"),n.innerHTML='<a href="https://github.com/bachelor-kreftregisteret" target="_blank" class="svelte-1e0iw9t">Besøk vår GitHub Organization</a> \n    <a href="https://www.kreftregisteret.no/" class="svelte-1e0iw9t">Besøk Kreftregisteret</a>',d(n,"class","svelte-1e0iw9t")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class et extends N{constructor(t){super(),C(this,t,null,tt,o,{})}}function nt(e){let n,r,s,o,i,a,l,m,g,h,v;return r=new F({}),o=new q({}),a=new U({}),m=new Z({}),h=new et({}),{c(){n=$("main"),S(r.$$.fragment),s=p(),S(o.$$.fragment),i=p(),S(a.$$.fragment),l=p(),S(m.$$.fragment),g=p(),S(h.$$.fragment),d(n,"class","svelte-auvtqp")},m(t,e){u(t,n,e),A(r,n,null),c(n,s),A(o,n,null),c(n,i),A(a,n,null),c(n,l),A(m,n,null),c(n,g),A(h,n,null),v=!0},p:t,i(t){v||(B(r.$$.fragment,t),B(o.$$.fragment,t),B(a.$$.fragment,t),B(m.$$.fragment,t),B(h.$$.fragment,t),v=!0)},o(t){H(r.$$.fragment,t),H(o.$$.fragment,t),H(a.$$.fragment,t),H(m.$$.fragment,t),H(h.$$.fragment,t),v=!1},d(t){t&&f(n),O(r),O(o),O(a),O(m),O(h)}}}return new class extends N{constructor(t){super(),C(this,t,null,nt,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
