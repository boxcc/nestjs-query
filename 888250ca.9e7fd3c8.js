/*! For license information please see 888250ca.9e7fd3c8.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(1),a=(n(0),n(122)),i=n(126),l=n(127);const o={title:"Queries",sidebar_label:"Queries"},c={id:"typeorm/query",title:"Queries",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/typeorm/query.mdx",permalink:"/nestjs-query/docs/typeorm/query",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/website/docs/typeorm/query.mdx",sidebar_label:"Queries",sidebar:"docs",previous:{title:"Service",permalink:"/nestjs-query/docs/typeorm/services"},next:{title:"DTOs",permalink:"/nestjs-query/docs/graphql/dtos"}},b=[{value:"Filtering",id:"filtering",children:[{value:"Simple",id:"simple",children:[]},{value:"Multiple Fields",id:"multiple-fields",children:[]},{value:"And/Or",id:"andor",children:[]}]},{value:"Paging",id:"paging",children:[]},{value:"Sorting",id:"sorting",children:[]}],s={rightToc:b},p="wrapper";function u({components:e,...t}){return Object(a.b)(p,Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The core of ",Object(a.b)("inlineCode",{parentName:"p"},"nestjs-query")," is the query type. The query interface contains three optional fields."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"filter")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"paging")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"sorting"))),Object(a.b)("p",null,"All examples will be based on the following class."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"interface Entity {\n  title: string;\n  completed: true;\n  age: number;\n}\n")),Object(a.b)("h2",{id:"filtering"},"Filtering"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"filter")," field allows the filtering of fields based on the shape of the object the filter is used for."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NOTE")," The ",Object(a.b)("inlineCode",{parentName:"p"},"Filter")," interface is typesafe and will complain if you include extra fields that are not present on the\ntype you are creating the query for."),Object(a.b)("p",null,"Lets create a simple filter that would allow us to filter for titles equal to ",Object(a.b)("inlineCode",{parentName:"p"},"'Foo Bar'")),Object(a.b)("h3",{id:"simple"},"Simple"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { Query } from '@nestjs-query/core';\n\nconst q: Query<Entity> = {\n  filter: {\n    title: {eq: 'Foo Bar'},\n  },\n};\n")),Object(a.b)("h3",{id:"multiple-fields"},"Multiple Fields"),Object(a.b)("p",null,"You can also filter on multiple fields."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { Query } from '@nestjs-query/core';\n\nconst q: Query<Entity> = {\n  filter: {\n    // the fields will be ANDed together by default\n    title: {eq: 'Foo Bar'},\n    completed: { is: true },\n    age: {gt: 10},\n  },\n};\n")),Object(a.b)("h3",{id:"andor"},"And/Or"),Object(a.b)("p",null,"The filter also allows for more complex ",Object(a.b)("inlineCode",{parentName:"p"},"and")," and ",Object(a.b)("inlineCode",{parentName:"p"},"or")," filters. The ",Object(a.b)("inlineCode",{parentName:"p"},"and")," and ",Object(a.b)("inlineCode",{parentName:"p"},"or")," accept an array of filters allowing\nfor nested complex queries."),Object(a.b)("p",null,"In this example we ",Object(a.b)("inlineCode",{parentName:"p"},"AND")," two filters for the same property together: ",Object(a.b)("inlineCode",{parentName:"p"},"age >= 10 AND age <= 20"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const q: Query<Entity> = {\n  filter: {\n    and: [\n      { age: { gte: 10 } },\n      { age: { lte: 20 } },\n    ],\n  },\n};\n")),Object(a.b)("p",null,"In this example a simple ",Object(a.b)("inlineCode",{parentName:"p"},"OR")," condition is created: ",Object(a.b)("inlineCode",{parentName:"p"},"age >= 10 OR title NOT LIKE '%bar'")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const q: Query<Entity> = {\n  filter: {\n    or: [\n      { age: { gte: 10 } },\n      { title: { notLike: '%bar' } },\n    ],\n  },\n};\n")),Object(a.b)("p",null,"This example combines ",Object(a.b)("inlineCode",{parentName:"p"},"AND")," and ",Object(a.b)("inlineCode",{parentName:"p"},"OR")," filters: ",Object(a.b)("inlineCode",{parentName:"p"},"age >= 10 AND (title LIKE '%bar' OR title = 'foobar')"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const q: Query<Entity> = {\n  filter: {\n    and: [\n      { age: { gte: 10 } },\n      {\n        or: [\n          { title: { like: '%bar' } },\n          { title: { eq: 'foobar' } },\n        ],\n      },\n    ],\n  },\n};\n")),Object(a.b)("h2",{id:"paging"},"Paging"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"core")," package defines a basic paging interface has two optional fields ",Object(a.b)("inlineCode",{parentName:"p"},"limit")," and ",Object(a.b)("inlineCode",{parentName:"p"},"offset"),".s"),Object(a.b)(i.a,{defaultValue:"limit-offset",values:[{label:"Limit And Offset",value:"limit-offset"},{label:"Limit",value:"limit"},{label:"Offset",value:"offset"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"limit-offset",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const q: Query<Entity> = {\n  paging: {\n    limit: 10,\n    offset: 10,\n  },\n};\n"))),Object(a.b)(l.a,{value:"limit",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const q: Query<Entity> = {\n  paging: {\n    limit: 20,\n  },\n};\n"))),Object(a.b)(l.a,{value:"offset",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const q: Query<Entity> = {\n  paging: {\n    offset: 10,\n  },\n};\n")))),Object(a.b)("h2",{id:"sorting"},"Sorting"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"sorting")," field allows to specify the sort order for your query."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"sorting")," field is an array of object containing:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"field")," - the field to sort on"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"direction")," - ",Object(a.b)("inlineCode",{parentName:"li"},"ASC")," or ",Object(a.b)("inlineCode",{parentName:"li"},"DESC")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"nulls?")," - Optional nulls sort, ",Object(a.b)("inlineCode",{parentName:"li"},"NULLS_FIRST")," or ",Object(a.b)("inlineCode",{parentName:"li"},"NULLS_LAST"))),Object(a.b)(i.a,{defaultValue:"single",values:[{label:"Single-Sort",value:"single"},{label:"Multi-Sort",value:"multi"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"single",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// import { SortDirection } from '@nestjs-query/core';\n\nconst q: Query<Entity> = {\n    sorting: [{field: 'title', direction: SortDirection.DESC}],\n};\n"))),Object(a.b)(l.a,{value:"multi",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// import { SortDirection } from '@nestjs-query/core';\n\nconst q: Query<Entity> = {\n    sorting: [\n        {field: 'title', direction: SortDirection.DESC},\n        {field: 'age', direction: SortDirection.ASC},\n    ],\n};\n\n")))))}u.isMDXComponent=!0},121:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var l=a.apply(null,r);l&&e.push(l)}else if("object"===i)for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?a.a.createElement(m,o({ref:t},b,{components:n})):a.a.createElement(m,o({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},126:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(121),l=n.n(i),o=n(84),c=n.n(o);const b={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:i,values:o}=e,[s,p]=Object(r.useState)(i),u=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":s===e,className:l()("tab-item",c.a.tabItem,{"tab-item--active":s===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(u,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===s)[0]))}},127:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);