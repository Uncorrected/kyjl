import{O as h,s as m,g as X,r as a}from"./index-a0915313.js";import{e as Y}from"./index-14aec135.js";const g=Symbol();function C(e){const t=h(g,null);t&&m(t,o=>{o&&e()})}function I(e){const t=X();t&&Y(t.proxy,e)}function E(e,t){return e>t?"horizontal":t>e?"vertical":""}function _(){const e=a(0),t=a(0),o=a(0),c=a(0),s=a(0),u=a(0),n=a(""),f=()=>n.value==="vertical",p=()=>n.value==="horizontal",r=()=>{o.value=0,c.value=0,s.value=0,u.value=0,n.value=""};return{move:l=>{const i=l.touches[0];o.value=(i.clientX<0?0:i.clientX)-e.value,c.value=i.clientY-t.value,s.value=Math.abs(o.value),u.value=Math.abs(c.value);const v=10;(!n.value||s.value<v&&u.value<v)&&(n.value=E(s.value,u.value))},start:l=>{r(),e.value=l.touches[0].clientX,t.value=l.touches[0].clientY},reset:r,startX:e,startY:t,deltaX:o,deltaY:c,offsetX:s,offsetY:u,direction:n,isVertical:f,isHorizontal:p}}export{g as P,_ as a,C as o,I as u};
