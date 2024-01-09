import{_ as p}from"./iframe-b3bfIz86.js";import{R as e,r as c}from"./index-G6kSzgdV.js";import{r as l,u}from"./react-18-ddhwO6bc.js";import{C as h,A as E,H as d,D as x}from"./index-yBs24-Q1.js";import"../sb-preview/runtime.js";import"./index-UiEO8yJN.js";import"./index-ogXoivrg.js";import"./index-xt_wVKZ3.js";import"./index-PPLHz8o0.js";var _={code:h,a:E,...d},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},F=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,a)=>{p(()=>import("./index-e65Witd7.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:i})=>l(e.createElement(D,{showException:a,key:Math.random()},e.createElement(i,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{F as DocsRenderer,_ as defaultComponents};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-e65Witd7.js","./index-G6kSzgdV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
