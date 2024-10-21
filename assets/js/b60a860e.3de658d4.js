"use strict";(self.webpackChunkpine_docs=self.webpackChunkpine_docs||[]).push([[9817],{1344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(4848),s=n(8453);const i={sidebar_position:1},d="Pine",c={id:"Guide - Basics/pine",title:"Pine",description:"Learn how to set up and configure Pine.",source:"@site/docs/Guide - Basics/pine.md",sourceDirName:"Guide - Basics",slug:"/Guide - Basics/pine",permalink:"/docs/Guide - Basics/pine",draft:!1,unlisted:!1,editUrl:"https://github.com/BryanMwangi/pine-docs/blob/main/docs/Guide - Basics/pine.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guide - Basics",permalink:"/docs/category/guide---basics"},next:{title:"Ctx",permalink:"/docs/Guide - Basics/ctx"}},o={},l=[{value:"Server",id:"server",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Start a new server",id:"start-a-new-server",level:2},{value:"Config",id:"config",level:3},{value:"Config Properties",id:"config-properties",level:4},{value:"Default config",id:"default-config",level:3},{value:"Default methods",id:"default-methods",level:3},{value:"Default TLS configuration",id:"default-tls-configuration",level:3},{value:"Start",id:"start",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"pine",children:"Pine"})}),"\n",(0,r.jsx)(t.p,{children:"Learn how to set up and configure Pine."}),"\n",(0,r.jsx)(t.h2,{id:"server",children:"Server"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Server"})," is the core component of Pine. Here, we define what the server is made of and what it does."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"type Server struct {\n  mutex sync.Mutex\n  server *http.Server\n  onShutdown []func()\n  errorLog *log.Logger\n  config Config\n  stack [][]*Route\n  middleware []Middleware\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.p,{children:"These are some of the internal properties of the server."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mutex"}),(0,r.jsx)(t.td,{children:"Mutex to protect the server from concurrent access during set up"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"server"}),(0,r.jsx)(t.td,{children:"The HTTP server instance"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"onShutdown"}),(0,r.jsx)(t.td,{children:"A slice of functions to be executed when the server is shut down"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"errorLog"}),(0,r.jsx)(t.td,{children:"The error log instance"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"config"}),(0,r.jsx)(t.td,{children:"The configuration of the server"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stack"}),(0,r.jsx)(t.td,{children:"The routing stack"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"middleware"}),(0,r.jsx)(t.td,{children:"The middleware stack"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Start"}),(0,r.jsx)(t.td,{children:"Starts the server"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ServeHTTP"}),(0,r.jsx)(t.td,{children:"Handles the HTTP request"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Shutdown"}),(0,r.jsx)(t.td,{children:"Shuts down the server"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Use"}),(0,r.jsx)(t.td,{children:"Adds a middleware to the middleware stack"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Get"}),(0,r.jsx)(t.td,{children:"Adds a GET route to the routing stack"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Post"}),(0,r.jsx)(t.td,{children:"Adds a POST route to the routing stack"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Put"}),(0,r.jsx)(t.td,{children:"Adds a PUT route to the routing stack"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Delete"}),(0,r.jsx)(t.td,{children:"Adds a DELETE route to the routing stack"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Options"}),(0,r.jsx)(t.td,{children:"Adds an OPTIONS route to the routing stack"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AddRoute"}),(0,r.jsx)(t.td,{children:"Adds a route to the routing stack"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["You can read more in depth about the methods in the\n",(0,r.jsx)(t.a,{href:"/docs/category/guide---advanced",children:"Advanced Guide"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"start-a-new-server",children:"Start a new server"}),"\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"New"})," function to create a new server instance."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) *Server\n"})}),"\n",(0,r.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Config"})," struct is used to configure the server. You can pass your own configuration to the ",(0,r.jsx)(t.code,{children:"New"})," function."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'app := pine.New(pine.Config{\n  BodyLimit: 10 * 1024 * 1024,\n  RequestMethods: []string{"GET", "POST", "PUT"},\n  TLSConfig: pine.TLSConfig{\n    ServeTLS: true,\n    CertFile: `path/to/cert.pem`,\n    KeyFile:  `path/to/key.pem`,\n  },\n})\n\n'})}),"\n",(0,r.jsx)(t.h4,{id:"config-properties",children:"Config Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BodyLimit"}),(0,r.jsx)(t.td,{children:"int64"}),(0,r.jsx)(t.td,{children:"Defines the body limit for a request body. Setting it to -1 will decline any body size"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"5 * 1024 * 1024"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ReadTimeout"}),(0,r.jsx)(t.td,{children:"time.Duration"}),(0,r.jsx)(t.td,{children:"Defines the read timeout for a request. It is reset after the request handler has returned."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"5 seconds"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"WriteTimeout"}),(0,r.jsx)(t.td,{children:"time.Duration"}),(0,r.jsx)(t.td,{children:"Defines the maximum duration before timing out write of the response. It is reset after the response handler has returned."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"5 seconds"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DisableKeepAlive"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"When set to true, disables keep-alive connections."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"JSONEncoder"}),(0,r.jsxs)(t.td,{children:["func(v interface",") ([]byte, error)"]}),(0,r.jsx)(t.td,{children:"Defines the JSON encoder function."}),(0,r.jsx)(t.td,{children:"json.Marshal"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"JSONDecoder"}),(0,r.jsxs)(t.td,{children:["func(data []byte, v interface",") error"]}),(0,r.jsx)(t.td,{children:"Defines the JSON decoder function."}),(0,r.jsx)(t.td,{children:"json.Unmarshal"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RequestMethods"}),(0,r.jsx)(t.td,{children:"[]string"}),(0,r.jsx)(t.td,{children:"Defines the request methods that are allowed."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"DefaultMethods"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TLSConfig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"TLSConfig"})}),(0,r.jsx)(t.td,{children:"Defines the TLS configuration for the server."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"defaultTLSConfig"})})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"default-config",children:"Default config"}),"\n",(0,r.jsx)(t.p,{children:"Here is what the default config looks like:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"cfg := Config{\n  BodyLimit:        DefaultBodyLimit,\n  ReadTimeout:      5 * time.Second,\n  WriteTimeout:     5 * time.Second,\n  DisableKeepAlive: false,\n  JSONEncoder:      json.Marshal,\n  JSONDecoder:      json.Unmarshal,\n  RequestMethods:   DefaultMethods,\n  TLSConfig:        defaultTLSConfig,\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"default-methods",children:"Default methods"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'var DefaultMethods = []string{\n  "GET",\n  "POST",\n  "PUT",\n  "PATCH",\n  "DELETE",\n  "HEAD",\n  "OPTIONS",\n  "USE",\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"default-tls-configuration",children:"Default TLS configuration"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'var defaultTLSConfig = TLSConfig{\n\tServeTLS: false,\n\tCertFile: "",\n\tKeyFile:  "",\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"start",children:"Start"}),"\n",(0,r.jsxs)(t.p,{children:["You need to specify the port on which the server will listen. If you pass an empty string, the server will listen on port ",(0,r.jsx)(t.code,{children:":80"})," which is the default port for HTTP."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'app.Start(":3000")\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You may also choose to call the ",(0,r.jsx)(t.code,{children:"Start"})," method in a log.Fatal call. This ensures any critical errors during startup or in the server's runtime are logged before exiting."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'log.Fatal(app.Start(":3000"))\n'})}),"\n",(0,r.jsx)(t.admonition,{title:"Start tip",type:"tip",children:(0,r.jsx)(t.p,{children:'Remember to add a ":" colon to the port number.'})})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var r=n(6540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);