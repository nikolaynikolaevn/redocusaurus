"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[693],{76589:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(62540),o=s(43023);const i={title:"Installation",sidebar_position:0,author:"Rohit Gohri",author_url:"https://rohit.page"},r=void 0,a={id:"getting-started/Installation",title:"Installation",description:"1. Setup docusaurus project",source:"@site/docs/getting-started/Installation.md",sourceDirName:"getting-started",slug:"/getting-started/Installation",permalink:"/redocusaurus/docs/getting-started/Installation",draft:!1,unlisted:!1,editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/website/docs/getting-started/Installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Installation",sidebar_position:0,author:"Rohit Gohri",author_url:"https://rohit.page"},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/redocusaurus/docs/"},next:{title:"Plugin Options",permalink:"/redocusaurus/docs/getting-started/plugin-options"}},c={},l=[{value:"Options",id:"options",level:2},{value:"specs",id:"specs",level:3},{value:"theme",id:"theme",level:3},{value:"config (optional)",id:"config-optional",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Setup ",(0,t.jsx)(n.a,{href:"https://docusaurus.io/docs/installation",children:"docusaurus project"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install redocusaurus:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/v/redocusaurus?style=flat-square",alt:"npm"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"yarn add redocusaurus\n# OR\npnpm add redocusaurus\n# OR\nnpm i --save redocusaurus\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add it as a preset to your docusaurus config along with ",(0,t.jsx)(n.a,{href:"https://docusaurus.io/docs/using-plugins#docusauruspreset-classic",children:"@docusaurus/preset-classic"})," and pass options:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// docusaurus.config.ts\nimport type { Config } from '@docusaurus/types';\nimport type * as Preset from '@docusaurus/preset-classic';\nimport type * as Redocusaurus from 'redocusaurus';\n\nconst config: Config = {\n  // ...\n  presets: [\n    // .. Your other presets' config\n    [\n     '@docusaurus/preset-classic',\n      {\n        googleAnalytics: {\n          trackingID: 'XXXXXX',\n        },\n      } satisfies Preset.Options,\n    ]\n    // Redocusaurus config\n    [\n      'redocusaurus',\n      {\n        // Plugin Options for loading OpenAPI files\n        specs: [\n          // Pass it a path to a local OpenAPI YAML file\n          {\n            // Redocusaurus will automatically bundle your spec into a single file during the build\n            spec: 'openapi/index.yaml',\n            route: '/api/',\n          },\n          // You can also pass it a OpenAPI spec URL\n          {\n            spec: 'https://redocly.github.io/redoc/openapi.yaml',\n            route: '/openapi/',\n          },\n        ],\n        // Theme Options for modifying how redoc renders them\n        theme: {\n          // Change with your site colors\n          primaryColor: '#1890ff',\n        },\n      },\n    ] satisfies Redocusaurus.PresetEntry,\n  ],\n  // ... Rest of your config\n};\n\nexport default config;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The API Doc will be available at the path specific by ",(0,t.jsx)(n.code,{children:"route"}),". To skip adding a route altogether just don't set the ",(0,t.jsx)(n.code,{children:"route"})," property.\nYou will still be able to reference schema elements manually using ",(0,t.jsx)(n.a,{href:"/docs/guides/schema-imports",children:"Schema Imports"})," or create Custom React Pages using the data and theme components.\nIf you have a ",(0,t.jsx)(n.a,{href:"https://redocly.com/docs/cli/configuration/",children:(0,t.jsx)(n.code,{children:"redocly.yaml"})})," it will be loaded automatically."]}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.h3,{id:"specs",children:"specs"}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.strong,{children:"array"})," of plugin options, see ",(0,t.jsx)(n.a,{href:"/redocusaurus/docs/getting-started/plugin-options",children:"plugin options"})," for individual option details."]}),"\n",(0,t.jsx)(n.h3,{id:"theme",children:"theme"}),"\n",(0,t.jsxs)(n.p,{children:["Pass options to customize the theme, see ",(0,t.jsx)(n.a,{href:"/redocusaurus/docs/getting-started/theme-options",children:"theme options"})," for individual option details."]}),"\n",(0,t.jsx)(n.h3,{id:"config-optional",children:"config (optional)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"type: string"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Redocly config to bundle file and provide options to. You can provide a custom path to a ",(0,t.jsx)(n.code,{children:"redocly.yaml"})," file, if not provided then it will try to load it from the root of your project if it exists."]}),"\n",(0,t.jsxs)(n.p,{children:["Example: ",(0,t.jsx)(n.a,{href:"https://github.com/rohit-gohri/redocusaurus/blob/main/website/redocly.yaml",children:"redocly.yaml"}),"\nReference: ",(0,t.jsx)(n.a,{href:"https://redocly.com/docs/cli/configuration/",children:"https://redocly.com/docs/cli/configuration/"}),'. Only supports options marked as "Supported in Redoc CE".']}),"\n",(0,t.jsxs)(n.admonition,{type:"important",children:[(0,t.jsxs)(n.p,{children:["When setting the ",(0,t.jsx)(n.code,{children:"redocly.yaml"})," config, you website renders correctly only once it is built and run with the following commands:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run build\nnpm run serve\n"})}),(0,t.jsxs)(n.p,{children:["When running the website locally, with ",(0,t.jsx)(n.code,{children:"npm start"}),", some error messages can be displayed."]})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(63696);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);