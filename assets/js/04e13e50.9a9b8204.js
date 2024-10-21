"use strict";(self.webpackChunkpine_docs=self.webpackChunkpine_docs||[]).push([[9914],{8438:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=n(4848),r=n(8453);const o={sidebar_position:1},i="CORS",a={id:"Middlewares/cors",title:"CORS",description:"Cross Origin Resource Sharing or CORS for short is a way or mechanism that allows a server to indicate any origins other than its own where resources can be accessed. This is particularly important when building web applications where you have separate domains or subdomains for your recources.",source:"@site/docs/Middlewares/cors.md",sourceDirName:"Middlewares",slug:"/Middlewares/cors",permalink:"/docs/Middlewares/cors",draft:!1,unlisted:!1,editUrl:"https://github.com/BryanMwangi/pine-docs/blob/main/docs/Middlewares/cors.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Middlewares",permalink:"/docs/category/middlewares"},next:{title:"Helmet",permalink:"/docs/Middlewares/helmet"}},l={},c=[{value:"Enabling CORS",id:"enabling-cors",level:2},{value:"New",id:"new",level:3},{value:"How it works",id:"how-it-works",level:3},{value:"Example",id:"example",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"cors",children:"CORS"})}),"\n",(0,t.jsx)(s.p,{children:"Cross Origin Resource Sharing or CORS for short is a way or mechanism that allows a server to indicate any origins other than its own where resources can be accessed. This is particularly important when building web applications where you have separate domains or subdomains for your recources."}),"\n",(0,t.jsxs)(s.p,{children:["For example, your frontend application may be hosted on ",(0,t.jsx)(s.code,{children:"example.com"})," whereas your backend is hosted on ",(0,t.jsx)(s.code,{children:"api.example.com"}),". Or during development, your front end may be running on ",(0,t.jsx)(s.code,{children:"localhost:3000"})," and your backend on ",(0,t.jsx)(s.code,{children:"localhost:3001"}),". By default the browser will not understand that these 2 applications are similar and sometimes you may be hit by that infamous error:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-md",children:"Access to fetch 'http://localhost:3001/api' from origin 'http://localhost:3000' has been blocked\nby CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can read more in depth about CORS in this ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"MDN article"})]}),"\n",(0,t.jsx)(s.h2,{id:"enabling-cors",children:"Enabling CORS"}),"\n",(0,t.jsxs)(s.p,{children:["To enable CORS on Pine, you simply need to use the ",(0,t.jsx)(s.code,{children:"cors"})," package and specify what configuration you want to use."]}),"\n",(0,t.jsx)(s.p,{children:"Here is what the Config struct used during set up looks like:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'type Config struct {\n  // AllowedOrigins is a list of origins a cross-domain request can be executed from.\n  // If set to "*", all origins will be allowed.\n  // An origin may contain a wildcard (*) to replace 0 or more characters\n  // (i.e.: http://*.domain.com). Usage of wildcards implies a small performance penalty.\n  // Only one wildcard can be used per origin.\n  //\n  // Default value is []string{"*"}\n  AllowedOrigins []string\n\n  // AllowedMethods is a list of methods the client is allowed to use with\n  // cross-domain requests.\n  //\n  // Default value is simple methods ["GET", "POST", "PUT", "PATCH", "DELETE"]\n  // This is the same as in the server.config.DefaultMethods\n  AllowedMethods []string\n\n  // AllowedHeaders is list of non simple headers the client is allowed to use with\n  // cross-domain requests.\n  //\n  // If the special "*" value is present in the list, all headers will be allowed.\n  // Default value is "Content-Type, Authorization"\n  AllowedHeaders string\n\n  // ExposedHeaders indicates which headers are safe to expose to the API of a CORS\n  // API specification\n  //\n  // Default value is ""\n  ExposedHeaders string\n\n  // AllowedCredentials refers to whether the request can include user credentials\n  // like cookies, HTTP authentication or client side SSL certificates.\n  //\n  // Default value is false\n  AllowCredentials bool\n\n  // MaxAge referes to how long the results of a preflight request can be cached\n  // by the browser. This is always in seconds.\n  //\n  // Default value is 0, i.e. the browser does not cache the result.\n  // if set to 0, max-age is set to 5 seconds which is the default value set\n  // by most browsers.\n  MaxAge int\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"The default config is as follows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'  cfg := Config{\n    AllowedOrigins:   []string{"*"},\n    AllowedMethods:   pine.DefaultMethods,\n    AllowedHeaders:   "Content-Type, Authorization",\n    ExposedHeaders:   "",\n    MaxAge:           0,\n    AllowCredentials: false,\n  }\n'})}),"\n",(0,t.jsx)(s.h3,{id:"new",children:"New"}),"\n",(0,t.jsx)(s.p,{children:"The new function is used to create a CORS instance as a middleware that can be applied to all the routes in your server."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:"func New(config ...Config) pine.Middleware\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can opt out in passing a config and the default config will be used, however, please note that only the first config will be used if you pass you multiple configs to the function."}),"\n",(0,t.jsx)(s.h3,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(s.p,{children:"After successfully configuring CORS, here are some of the headers that will be sent to the browser."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Header"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Access-Control-Allow-Origin"}),(0,t.jsx)(s.td,{children:"Acceptable origins where requests to your server can be made from"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Access-Control-Allow-Methods"}),(0,t.jsx)(s.td,{children:"List of methods that clients can use when trying to send requests to your sever"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Access-Control-Allow-Headers"}),(0,t.jsx)(s.td,{children:"Accepted headers when making requests to your server"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Access-Control-Expose-Headers"}),(0,t.jsx)(s.td,{children:"Specified headers to the allowlist that the browser is allowed to access"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Access-Control-Allow-Credentials"}),(0,t.jsx)(s.td,{children:"Whether or not the browser can pass user credentials used to authenticate a request such as cookies"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Access-Control-Max-Age"}),(0,t.jsx)(s.td,{children:"Indicates how long the results of a preflight request can be cached to avoid performing multiple preflight requests"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:"Here is an example of how you can use the CORS middleware."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'func main() {\n  app := pine.New()\n\n  app.Use(cors.New(cors.Config{\n    AllowedOrigins:   []string{"http://localhost:5174"},\n    AllowCredentials: true,\n  }))\n\n  app.Post("/login", func(c *pine.Ctx) error {\n    return c.JSON(map[string]string{\n      "message": "login successful"}, 202)\n  })\n\n  log.Fatal(app.Start(":3000"))\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Also check out this example complete with a frontend ",(0,t.jsx)(s.a,{href:"https://github.com/BryanMwangi/pine/tree/main/Examples/CorsExample",children:"here"})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var t=n(6540);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);