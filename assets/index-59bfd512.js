import{c as L,t as G,m as U,I as O,w as V,n as R,a as D,e as X,g as ge,x as J,q as j,G as ve,R as be,f as le,h as M,k as ie,C as q,v as _e,p as Te,D as Q,r as ke,E as se,A as ee}from"./index-14aec135.js";import{L as re,f as ue,u as xe,F as ye,i as Se}from"./request-950452bd.js";import{I as we}from"./index-273486c6.js";import{S as Ce}from"./index-87faba9c.js";import{a as $e,S as Ie}from"./index-659952c0.js";import{d as P,c as n,T as Pe,r as k,a as Be,v as de,s as z,m as fe,M as pe,y as Y,k as Re,N as De,x as me,B as Le,C as Ve,b as te,w as I,u as B,i as W,F as ne,o as K,l as Ee,h as Ae,e as p,t as A,_ as He}from"./index-a0915313.js";import{u as Z,o as Ne,a as Fe}from"./use-touch-a4d081dc.js";import{H as Ue}from"./use-route-c3a680bb.js";const[Oe,ae]=L("tag"),ze={size:String,mark:Boolean,show:G,type:U("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var Me=P({name:Oe,props:ze,emits:["close"],setup(e,{slots:t,emit:c}){const d=u=>{u.stopPropagation(),c("close",u)},f=()=>e.plain?{color:e.textColor||e.color,borderColor:e.color}:{color:e.textColor,background:e.color},h=()=>{var u;const{type:i,mark:s,plain:m,round:T,size:_,closeable:r}=e,o={mark:s,plain:m,round:T};_&&(o[_]=_);const b=r&&n(O,{name:"cross",class:[ae("close"),Ue],onClick:d},null);return n("span",{style:f(),class:ae([o,i])},[(u=t.default)==null?void 0:u.call(t),b])};return()=>n(Pe,{name:e.closeable?"van-fade":void 0},{default:()=>[e.show?h():null]})}});const qe=V(Me);function je(e,t){let c=null,d=0;return function(...f){if(c)return;const h=Date.now()-d,u=()=>{d=Date.now(),c=!1,e.apply(this,f)};h>=t?u():c=setTimeout(u,t)}}const[We,oe]=L("back-top"),Ke={right:R,bottom:R,zIndex:R,target:[String,Object],offset:D(200),immediate:Boolean,teleport:{type:[String,Object],default:"body"}};var Ge=P({name:We,inheritAttrs:!1,props:Ke,emits:["click"],setup(e,{emit:t,slots:c,attrs:d}){const f=k(!1),h=k(),u=k(),i=Be(()=>X(ge(e.zIndex),{right:J(e.right),bottom:J(e.bottom)})),s=r=>{var o;t("click",r),(o=u.value)==null||o.scrollTo({top:0,behavior:e.immediate?"auto":"smooth"})},m=()=>{f.value=u.value?le(u.value)>=e.offset:!1},T=()=>{const{target:r}=e;if(typeof r=="string"){const o=document.querySelector(r);if(o)return o}else return r},_=()=>{ve&&Y(()=>{u.value=e.target?T():be(h.value),m()})};return j("scroll",je(m,100),{target:u}),de(_),z(()=>e.target,_),()=>{const r=n("div",fe({ref:h,class:oe({active:f.value}),style:i.value,onClick:s},d),[c.default?c.default():n(O,{name:"back-top",class:oe("icon")},null)]);return e.teleport?n(pe,{to:e.teleport},{default:()=>[r]}):r}}});const Xe=V(Ge),[Ye,S]=L("card"),Ze={tag:String,num:R,desc:String,thumb:String,title:String,price:R,centered:Boolean,lazyLoad:Boolean,currency:U("¥"),thumbLink:String,originPrice:R};var Je=P({name:Ye,props:Ze,emits:["clickThumb"],setup(e,{slots:t,emit:c}){const d=()=>{if(t.title)return t.title();if(e.title)return n("div",{class:[S("title"),"van-multi-ellipsis--l2"]},[e.title])},f=()=>{if(t.tag||e.tag)return n("div",{class:S("tag")},[t.tag?t.tag():n(qe,{mark:!0,type:"primary"},{default:()=>[e.tag]})])},h=()=>t.thumb?t.thumb():n(we,{src:e.thumb,fit:"cover",width:"100%",height:"100%",lazyLoad:e.lazyLoad},null),u=()=>{if(t.thumb||e.thumb)return n("a",{href:e.thumbLink,class:S("thumb"),onClick:m=>c("clickThumb",m)},[h(),f()])},i=()=>{if(t.desc)return t.desc();if(e.desc)return n("div",{class:[S("desc"),"van-ellipsis"]},[e.desc])},s=()=>{const m=e.price.toString().split(".");return n("div",null,[n("span",{class:S("price-currency")},[e.currency]),n("span",{class:S("price-integer")},[m[0]]),Re("."),n("span",{class:S("price-decimal")},[m[1]])])};return()=>{var m,T,_;const r=t.num||M(e.num),o=t.price||M(e.price),b=t["origin-price"]||M(e.originPrice),v=r||o||b||t.bottom,g=o&&n("div",{class:S("price")},[t.price?t.price():s()]),x=b&&n("div",{class:S("origin-price")},[t["origin-price"]?t["origin-price"]():`${e.currency} ${e.originPrice}`]),w=r&&n("div",{class:S("num")},[t.num?t.num():`x${e.num}`]),C=t.footer&&n("div",{class:S("footer")},[t.footer()]),l=v&&n("div",{class:S("bottom")},[(m=t["price-top"])==null?void 0:m.call(t),g,x,w,(T=t.bottom)==null?void 0:T.call(t)]);return n("div",{class:S()},[n("div",{class:S("header")},[u(),n("div",{class:S("content",{centered:e.centered})},[n("div",null,[d(),i(),(_=t.tags)==null?void 0:_.call(t)]),l])]),C])}}});const Qe=V(Je),[et,E,tt]=L("list"),nt={error:Boolean,offset:D(300),loading:Boolean,disabled:Boolean,finished:Boolean,errorText:String,direction:U("down"),loadingText:String,finishedText:String,immediateCheck:G};var at=P({name:et,props:nt,emits:["load","update:error","update:loading"],setup(e,{emit:t,slots:c}){const d=k(e.loading),f=k(),h=k(),u=$e(),i=ie(f),s=()=>{Y(()=>{if(d.value||e.finished||e.disabled||e.error||(u==null?void 0:u.value)===!1)return;const{offset:o,direction:b}=e,v=q(i);if(!v.height||_e(f))return;let g=!1;const x=q(h);b==="up"?g=v.top-x.top<=o:g=x.bottom-v.bottom<=o,g&&(d.value=!0,t("update:loading",!0),t("load"))})},m=()=>{if(e.finished){const o=c.finished?c.finished():e.finishedText;if(o)return n("div",{class:E("finished-text")},[o])}},T=()=>{t("update:error",!1),s()},_=()=>{if(e.error){const o=c.error?c.error():e.errorText;if(o)return n("div",{role:"button",class:E("error-text"),tabindex:0,onClick:T},[o])}},r=()=>{if(d.value&&!e.finished&&!e.disabled)return n("div",{class:E("loading")},[c.loading?c.loading():n(re,{class:E("loading-icon")},{default:()=>[e.loadingText||tt("loading")]})])};return z(()=>[e.loading,e.finished,e.error],s),u&&z(u,o=>{o&&s()}),De(()=>{d.value=e.loading}),de(()=>{e.immediateCheck&&s()}),Z({check:s}),j("scroll",s,{target:i,passive:!0}),()=>{var o;const b=(o=c.default)==null?void 0:o.call(c),v=n("div",{ref:h,class:E("placeholder")},null);return n("div",{ref:f,role:"feed",class:E(),"aria-busy":d.value},[e.direction==="down"?b:v,r(),m(),_(),e.direction==="up"?b:v])}}});const ot=V(at),[ct,H]=L("notice-bar"),lt={text:String,mode:String,color:String,delay:D(1),speed:D(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}};var it=P({name:ct,props:lt,emits:["close","replay"],setup(e,{emit:t,slots:c}){let d=0,f=0,h;const u=k(),i=k(),s=me({show:!0,offset:0,duration:0}),m=()=>{if(c["left-icon"])return c["left-icon"]();if(e.leftIcon)return n(O,{class:H("left-icon"),name:e.leftIcon},null)},T=()=>{if(e.mode==="closeable")return"cross";if(e.mode==="link")return"arrow"},_=g=>{e.mode==="closeable"&&(s.show=!1,t("close",g))},r=()=>{if(c["right-icon"])return c["right-icon"]();const g=T();if(g)return n(O,{name:g,class:H("right-icon"),onClick:_},null)},o=()=>{s.offset=d,s.duration=0,ke(()=>{Q(()=>{s.offset=-f,s.duration=(f+d)/+e.speed,t("replay")})})},b=()=>{const g=e.scrollable===!1&&!e.wrapable,x={transform:s.offset?`translateX(${s.offset}px)`:"",transitionDuration:`${s.duration}s`};return n("div",{ref:u,role:"marquee",class:H("wrap")},[n("div",{ref:i,style:x,class:[H("content"),{"van-ellipsis":g}],onTransitionend:o},[c.default?c.default():e.text])])},v=()=>{const{delay:g,speed:x,scrollable:w}=e,C=M(g)?+g*1e3:0;d=0,f=0,s.offset=0,s.duration=0,clearTimeout(h),h=setTimeout(()=>{if(!u.value||!i.value||w===!1)return;const l=q(u).width,a=q(i).width;(w||a>l)&&Q(()=>{d=l,f=a,s.offset=-f,s.duration=f/+x})},C)};return Ne(v),Te(v),j("pageshow",v),Z({reset:v}),z(()=>[e.text,e.scrollable],v),()=>{const{color:g,wrapable:x,background:w}=e;return Le(n("div",{role:"alert",class:H({wrapable:x}),style:{color:g,background:w}},[m(),b(),r()]),[[Ve,s.show]])}}});const st=V(it),[rt,N,ut]=L("pull-refresh"),he=50,dt=["pulling","loosing","success"],ft={disabled:Boolean,modelValue:Boolean,headHeight:D(he),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:R,successDuration:D(500),animationDuration:D(300)};var mt=P({name:rt,props:ft,emits:["change","refresh","update:modelValue"],setup(e,{emit:t,slots:c}){let d;const f=k(),h=k(),u=ie(f),i=me({status:"normal",distance:0,duration:0}),s=Fe(),m=()=>{if(e.headHeight!==he)return{height:`${e.headHeight}px`}},T=()=>i.status!=="loading"&&i.status!=="success"&&!e.disabled,_=l=>{const a=+(e.pullDistance||e.headHeight);return l>a&&(l<a*2?l=a+(l-a)/2:l=a*1.5+(l-a*2)/4),Math.round(l)},r=(l,a)=>{const $=+(e.pullDistance||e.headHeight);i.distance=l,a?i.status="loading":l===0?i.status="normal":l<$?i.status="pulling":i.status="loosing",t("change",{status:i.status,distance:l})},o=()=>{const{status:l}=i;return l==="normal"?"":e[`${l}Text`]||ut(l)},b=()=>{const{status:l,distance:a}=i;if(c[l])return c[l]({distance:a});const $=[];return dt.includes(l)&&$.push(n("div",{class:N("text")},[o()])),l==="loading"&&$.push(n(re,{class:N("loading")},{default:o})),$},v=()=>{i.status="success",setTimeout(()=>{r(0)},+e.successDuration)},g=l=>{d=le(u.value)===0,d&&(i.duration=0,s.start(l))},x=l=>{T()&&g(l)},w=l=>{if(T()){d||g(l);const{deltaY:a}=s;s.move(l),d&&a.value>=0&&s.isVertical()&&(se(l),r(_(a.value)))}},C=()=>{d&&s.deltaY.value&&T()&&(i.duration=+e.animationDuration,i.status==="loosing"?(r(+e.headHeight,!0),t("update:modelValue",!0),Y(()=>t("refresh"))):r(0))};return z(()=>e.modelValue,l=>{i.duration=+e.animationDuration,l?r(+e.headHeight,!0):c.success||e.successText?v():r(0,!1)}),j("touchmove",w,{target:h}),()=>{var l;const a={transitionDuration:`${i.duration}ms`,transform:i.distance?`translate3d(0,${i.distance}px, 0)`:""};return n("div",{ref:f,class:N()},[n("div",{ref:h,class:N("track"),style:a,onTouchstartPassive:x,onTouchend:C,onTouchcancel:C},[n("div",{class:N("head"),style:m()},[b()]),(l=c.default)==null?void 0:l.call(c)])])}}});const ht=V(mt),[gt,F,vt]=L("search"),bt=X({},ue,{label:String,shape:U("square"),leftIcon:U("search"),clearable:G,actionText:String,background:String,showAction:Boolean});var _t=P({name:gt,props:bt,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:t,slots:c,attrs:d}){const f=xe(),h=k(),u=()=>{c.action||(t("update:modelValue",""),t("cancel"))},i=a=>{a.keyCode===13&&(se(a),t("search",e.modelValue))},s=()=>e.id||`${f}-input`,m=()=>{if(c.label||e.label)return n("label",{class:F("label"),for:s()},[c.label?c.label():e.label])},T=()=>{if(e.showAction){const a=e.actionText||vt("cancel");return n("div",{class:F("action"),role:"button",tabindex:0,onClick:u},[c.action?c.action():a])}},_=()=>{var a;return(a=h.value)==null?void 0:a.blur()},r=()=>{var a;return(a=h.value)==null?void 0:a.focus()},o=a=>t("blur",a),b=a=>t("focus",a),v=a=>t("clear",a),g=a=>t("clickInput",a),x=a=>t("clickLeftIcon",a),w=a=>t("clickRightIcon",a),C=Object.keys(ue),l=()=>{const a=X({},d,ee(e,C),{id:s()}),$=y=>t("update:modelValue",y);return n(ye,fe({ref:h,type:"search",class:F("field"),border:!1,onBlur:o,onFocus:b,onClear:v,onKeypress:i,onClickInput:g,onClickLeftIcon:x,onClickRightIcon:w,"onUpdate:modelValue":$},a),ee(c,["left-icon","right-icon"]))};return Z({focus:r,blur:_}),()=>{var a;return n("div",{class:F({"show-action":e.showAction}),style:{background:e.background}},[(a=c.left)==null?void 0:a.call(c),n("div",{class:F("content",e.shape)},[m(),l()]),T()])}}});const Tt=V(_t);const ce=e=>Se.get("/post",{params:e}),kt={class:"desc"},xt=P({__name:"index",setup(e){const t=k(""),c=(()=>{let r;return function(o){clearTimeout(r),r=setTimeout(async()=>{var v;const b=await h({key:o});f.value=b,(v=u.value)==null||v.check()},1500)}})(),d=k("无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"),f=k([]),h=async({page:r=1,pageSize:o=10,key:b=""})=>await ce({page:r,pageSize:o,key:b}),u=k(),i=k(!1),s=async()=>{var o;const r=await h({});f.value=r,i.value=!1,(o=u.value)==null||o.check()},m=k(!1),T=k(!1),_=async()=>{const r=await ce({key:t.value});f.value.push(...r),m.value=!1};return(r,o)=>{const b=Tt,v=Ie,g=st,x=Ce,w=O,C=Qe,l=ot,a=ht,$=Xe;return K(),te(ne,null,[n(v,null,{default:I(()=>[n(b,{modelValue:B(t),"onUpdate:modelValue":[o[0]||(o[0]=y=>W(t)?t.value=y:null),B(c)],placeholder:"请输入搜索关键词"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),n(g,{"left-icon":"volume-o",mode:"closeable",text:B(d)},null,8,["text"]),n(a,{class:"pull-refresh",modelValue:B(i),"onUpdate:modelValue":o[2]||(o[2]=y=>W(i)?i.value=y:null),"success-text":"刷新成功",onRefresh:s},{default:I(()=>[n(l,{ref_key:"listRef",ref:u,loading:B(m),"onUpdate:loading":o[1]||(o[1]=y=>W(m)?m.value=y:null),finished:B(T),"finished-text":"没有更多了",onLoad:_},{default:I(()=>[(K(!0),te(ne,null,Ee(B(f),y=>(K(),Ae(C,{title:y.title,thumb:y.imgURL},{desc:I(()=>[p("div",kt,A(y.summary),1)]),price:I(()=>[n(x,null,{default:I(()=>[p("span",null,A(y.author),1),p("span",null,A(y.date),1)]),_:2},1024)]),num:I(()=>[n(x,null,{default:I(()=>[p("span",null,[n(w,{name:"good-job-o"}),p("span",null,A(y.liveTotal),1)]),p("span",null,[n(w,{name:"chat-o"}),p("span",null,A(y.comentTotal),1)])]),_:2},1024)]),_:2},1032,["title","thumb"]))),256))]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"]),n($,{right:"6vw",bottom:"8vh"})],64)}}});const pt=He(xt,[["__scopeId","data-v-c3ffd4cc"]]);export{pt as default};
