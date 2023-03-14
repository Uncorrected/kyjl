import{c as U,t as A,n as K,a as _,b as re,o as ve,K as fe,X as de,q as he,v as V,D as I,E as ge,H as R,w as j,d as me}from"./index-14aec135.js";import{a as we,u as F,o as ye}from"./use-touch-a4d081dc.js";import{d as G,r as q,x as J,a as d,s as $,v as Q,z as pe,L as xe,I as be,c as E,y as Z}from"./index-a0915313.js";const[ee,M]=U("swipe"),Se={loop:A,width:K,height:K,vertical:Boolean,autoplay:_(0),duration:_(500),touchable:A,lazyRender:Boolean,initialSwipe:_(0),indicatorColor:String,showIndicators:A,stopPropagation:A},te=Symbol(ee);var Te=G({name:ee,props:Se,emits:["change","dragStart","dragEnd"],setup(a,{emit:p,slots:g}){const u=q(),h=q(),t=J({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let x=!1;const r=we(),{children:m,linkChildren:s}=re(te),i=d(()=>m.length),l=d(()=>t[a.vertical?"height":"width"]),v=d(()=>a.vertical?r.deltaY.value:r.deltaX.value),y=d(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-l.value*i.value:0),k=d(()=>l.value?Math.ceil(Math.abs(y.value)/l.value):i.value),D=d(()=>i.value*l.value),b=d(()=>(t.active+i.value)%i.value),B=d(()=>{const e=a.vertical?"vertical":"horizontal";return r.direction.value===e}),ae=d(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${t.offset}px)`};if(l.value){const o=a.vertical?"height":"width",n=a.vertical?"width":"height";e[o]=`${D.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:o}=t;return e?a.loop?R(o+e,-1,i.value):R(o+e,0,k.value):o},X=(e,o=0)=>{let n=e*l.value;a.loop||(n=Math.min(n,-y.value));let f=o-n;return a.loop||(f=R(f,y.value,0)),f},w=({pace:e=0,offset:o=0,emitChange:n})=>{if(i.value<=1)return;const{active:f}=t,c=ie(e),C=X(c,o);if(a.loop){if(m[0]&&C!==y.value){const O=C<y.value;m[0].setOffset(O?D.value:0)}if(m[i.value-1]&&C!==0){const O=C>0;m[i.value-1].setOffset(O?-D.value:0)}}t.active=c,t.offset=C,n&&c!==f&&p("change",b.value)},z=()=>{t.swiping=!0,t.active<=-1?w({pace:i.value}):t.active>=i.value&&w({pace:-i.value})},ne=()=>{z(),r.reset(),I(()=>{t.swiping=!1,w({pace:-1,emitChange:!0})})},Y=()=>{z(),r.reset(),I(()=>{t.swiping=!1,w({pace:1,emitChange:!0})})};let H;const T=()=>clearTimeout(H),P=()=>{T(),a.autoplay>0&&i.value>1&&(H=setTimeout(()=>{Y(),P()},+a.autoplay))},S=(e=+a.initialSwipe)=>{if(!u.value)return;const o=()=>{var n,f;if(!V(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};t.rect=c,t.width=+((n=a.width)!=null?n:c.width),t.height=+((f=a.height)!=null?f:c.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=X(e),m.forEach(c=>{c.setOffset(0)}),P()};V(u)?Z().then(o):o()},L=()=>S(t.active);let N;const oe=e=>{!a.touchable||e.touches.length>1||(r.start(e),x=!1,N=Date.now(),T(),z())},le=e=>{a.touchable&&t.swiping&&(r.move(e),B.value&&(!a.loop&&(t.active===0&&v.value>0||t.active===i.value-1&&v.value<0)||(ge(e,a.stopPropagation),w({offset:v.value}),x||(p("dragStart",{index:b.value}),x=!0))))},W=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-N,o=v.value/e;if((Math.abs(o)>.25||Math.abs(v.value)>l.value/2)&&B.value){const f=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=f>0?v.value>0?-1:1:0:c=-Math[v.value>0?"ceil":"floor"](v.value/l.value),w({pace:c,emitChange:!0})}else v.value&&w({pace:0});x=!1,t.swiping=!1,p("dragEnd",{index:b.value}),P()},se=(e,o={})=>{z(),r.reset(),I(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,o.immediate?I(()=>{t.swiping=!1}):t.swiping=!1,w({pace:n-t.active,emitChange:!0})})},ce=(e,o)=>{const n=o===b.value,f=n?{backgroundColor:a.indicatorColor}:void 0;return E("i",{style:f,class:M("indicator",{active:n})},null)},ue=()=>{if(g.indicator)return g.indicator({active:b.value,total:i.value});if(a.showIndicators&&i.value>1)return E("div",{class:M("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return F({prev:ne,next:Y,state:t,resize:L,swipeTo:se}),s({size:l,props:a,count:i,activeIndicator:b}),$(()=>a.initialSwipe,e=>S(+e)),$(i,()=>S(t.active)),$(()=>a.autoplay,P),$([ve,fe],L),$(de(),e=>{e==="visible"?P():T()}),Q(S),pe(()=>S(t.active)),ye(()=>S(t.active)),xe(T),be(T),he("touchmove",le,{target:h}),()=>{var e;return E("div",{ref:u,class:M()},[E("div",{ref:h,style:ae.value,class:M("track",{vertical:a.vertical}),onTouchstartPassive:oe,onTouchend:W,onTouchcancel:W},[(e=g.default)==null?void 0:e.call(g)]),ue()])}}});const Ie=j(Te),[Pe,Ce]=U("swipe-item");var $e=G({name:Pe,setup(a,{slots:p}){let g;const u=J({offset:0,inited:!1,mounted:!1}),{parent:h,index:t}=me(te);if(!h)return;const x=d(()=>{const s={},{vertical:i}=h.props;return h.size.value&&(s[i?"height":"width"]=`${h.size.value}px`),u.offset&&(s.transform=`translate${i?"Y":"X"}(${u.offset}px)`),s}),r=d(()=>{const{loop:s,lazyRender:i}=h.props;if(!i||g)return!0;if(!u.mounted)return!1;const l=h.activeIndicator.value,v=h.count.value-1,y=l===0&&s?v:l-1,k=l===v&&s?0:l+1;return g=t.value===l||t.value===y||t.value===k,g}),m=s=>{u.offset=s};return Q(()=>{Z(()=>{u.mounted=!0})}),F({setOffset:m}),()=>{var s;return E("div",{class:Ce(),style:x.value},[r.value?(s=p.default)==null?void 0:s.call(p):null])}}});const Me=j($e);export{Ie as S,Me as a};
