"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,o(o({ref:e},s),{},{components:r})):n.createElement(m,o({ref:e},s))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59881:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={sidebar_position:1},u="Sift",c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Sift",description:"Sift is a utility library for working with immutable data structures in Luau and roblox-ts.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/sift/docs/intro",editUrl:"https://github.com/csqrl/sift/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Installation",permalink:"/sift/docs/Installation"}},s=[{value:"Get Started",id:"get-started",children:[],level:2},{value:"Why Immutable?",id:"why-immutable",children:[],level:2}],p={toc:s};function f(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sift"},"Sift"),(0,i.kt)("p",null,"Sift is a utility library for working with immutable data structures in Luau and roblox-ts."),(0,i.kt)("h2",{id:"get-started"},"Get Started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Installation"},"Installation guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api"},(0,i.kt)("strong",{parentName:"a"},"API Documentation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Examples"},"Examples"))),(0,i.kt)("h2",{id:"why-immutable"},"Why Immutable?"),(0,i.kt)("p",null,"With immutable data structures, you're in control of your data. You can't accidentally change the data, and you can always predict what will happen to your data and the state of your data. This helps you to prevent bugs and unexpected behavior."),(0,i.kt)("p",null,"Because immutable data structures cannot be changed, this allows for tracking of changes to your data. This is useful for debugging and testing."),(0,i.kt)("p",null,"While Sift doesn't enforce immutability, it provides a way to work with data as if it were immutable."))}f.isMDXComponent=!0}}]);