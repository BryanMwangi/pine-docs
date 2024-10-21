"use strict";(self.webpackChunkpine_docs=self.webpackChunkpine_docs||[]).push([[630],{4739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(4848),s=n(8453);const a={sidebar_position:2},o="Routing",i={id:"Guide - Advanced/routing",title:"Routing",description:"In this section, we shall discuss Pine's routing solution and what I did to try and optimizing the routing process when a request is made.",source:"@site/docs/Guide - Advanced/routing.md",sourceDirName:"Guide - Advanced",slug:"/Guide - Advanced/routing",permalink:"/docs/Guide - Advanced/routing",draft:!1,unlisted:!1,editUrl:"https://github.com/BryanMwangi/pine-docs/blob/main/docs/Guide - Advanced/routing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Server",permalink:"/docs/Guide - Advanced/server"},next:{title:"Bind",permalink:"/docs/Guide - Advanced/bind"}},h={},d=[{value:"Why routing is important",id:"why-routing-is-important",level:2},{value:"How routing works",id:"how-routing-works",level:2},{value:"AddRoute",id:"addroute",level:3},{value:"Matching Routes",id:"matching-routes",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"routing",children:"Routing"})}),"\n",(0,r.jsx)(t.p,{children:"In this section, we shall discuss Pine's routing solution and what I did to try and optimizing the routing process when a request is made."}),"\n",(0,r.jsx)(t.p,{children:"Please note that this implmentation might not be the best or the most efficient out there hence you are welcome to suggest improvements to this section. You can also check out other routers available in the Go ecosystem such as"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/go-chi/chi",children:"Chi"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/julienschmidt/httprouter",children:"httprouter"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://pkg.go.dev/net/http@master#ServeMux",children:"net/http.ServeMux"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"My solution is meant to be simple and easy to understand with no compromises on performance. You are free to use whatever solution you wish as you build your server."}),"\n",(0,r.jsx)(t.h2,{id:"why-routing-is-important",children:"Why routing is important"}),"\n",(0,r.jsx)(t.p,{children:"Routing is the process of deciding what handler to use for a request. Most frameworks out there are actually able to achieve great performance by having an efficient routing system that is able to ensure requests are processed as fast as possible."}),"\n",(0,r.jsxs)(t.p,{children:["If you want to achieve framework-like performance when building servers using the standard ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/net/http",children:"net/http"})," package or even ",(0,r.jsx)(t.a,{href:"https://github.com/valyala/fasthttp",children:"fasthttp"}),", you need to have a routing system that is able to handle requests as fast as possible."]}),"\n",(0,r.jsx)(t.h2,{id:"how-routing-works",children:"How routing works"}),"\n",(0,r.jsx)(t.p,{children:"Routing begins when you declare a route using any of the following methods with more coming soon:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"// GET\nfunc (server *Server) Get(path string, handlers ...Handler)\n\n// POST\nfunc (server *Server) Post(path string, handlers ...Handler)\n\n// PUT\nfunc (server *Server) Put(path string, handlers ...Handler)\n\n// PATCH\nfunc (server *Server) Patch(path string, handlers ...Handler)\n\n// DELETE\nfunc (server *Server) Delete(path string, handlers ...Handler)\n\n// OPTIONS\nfunc (server *Server) Options(path string, handlers ...Handler)\n\n"})}),"\n",(0,r.jsxs)(t.p,{children:["When you call any of the above methods, under the hood they call the method ",(0,r.jsx)(t.code,{children:"AddRoute"})," which then adds the route and its handlers to the route stack that was set up after calling the ",(0,r.jsx)(t.a,{href:"/docs/Guide%20-%20Advanced/server#start",children:"New"})," method"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func (server *Server) AddRoute(method, path string, handlers ...Handler)\n"})}),"\n",(0,r.jsx)(t.h3,{id:"addroute",children:"AddRoute"}),"\n",(0,r.jsx)(t.p,{children:"What AddRoute does is very simple. First it constructs a new route and then adds it to the route stack."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"route := &Route{\n    Method:   method,\n    Path:     path,\n    Handlers: handlers,\n}\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"tip",children:(0,r.jsx)(t.p,{children:"A route can have multiple handlers."})}),"\n",(0,r.jsxs)(t.p,{children:["After which we call the applyMiddlewares method that applies middlewares to the route. The middlewares in this case are special handlers that are created when you call the ",(0,r.jsx)(t.a,{href:"/docs/Guide%20-%20Advanced/server#use",children:"Use"})," method."]}),"\n",(0,r.jsx)(t.h2,{id:"matching-routes",children:"Matching Routes"}),"\n",(0,r.jsxs)(t.p,{children:["When a request is made, it is the job of the routing system to match the request to a route. This happens when we are handling the request in the ",(0,r.jsx)(t.a,{href:"/docs/Guide%20-%20Advanced/server#servehttp",children:"ServeHTTP"})," method."]}),"\n",(0,r.jsxs)(t.p,{children:["When a request is made, we use the ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/net/url#URL",children:"http.Request.URL.Path"})," property to get the path of the request and try to match it to a route defined in the route stack."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"for _, routes := range server.stack {\n  for _, route := range routes {\n    if matched, params := matchRoute(route.Path, r.URL.Path); matched {\n      matchedRoute = route\n      ctx.params = params\n      break\n    }\n  }\n  if matchedRoute != nil {\n    break\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["What the matchRoute function does is very simple. It's responsible for matching a route and extracting the parameters from the route. This makes it easy to then extract parameters from the request using the ",(0,r.jsx)(t.a,{href:"/docs/Guide%20-%20Basics/ctx#params-1",children:"Ctx.Params"})," method."]}),"\n",(0,r.jsx)(t.p,{children:"Here is how the matchRoute function looks like:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func matchRoute(routePath, requestPath string) (bool, map[string]string)\n"})}),"\n",(0,r.jsx)(t.p,{children:"It takes the route path in the stack, takes the actual path as from the request and extracts parameters from the route path. You would have defined the parameters when setting up the route for example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'app.Get("/hello/:name", func(c *pine.Ctx) error {\n  name := c.Params("name")\n  return c.SendString("Hello " + name)\n})\n'})}),"\n",(0,r.jsx)(t.p,{children:"After all is done, we then proceed to process the request by calling the handlers of the matched route."}),"\n",(0,r.jsx)(t.p,{children:"You can now go ahead and try to build your own routing system and see how it performs. I will be happy to discuss any issues you may have with the current implementation."}),"\n",(0,r.jsx)(t.admonition,{title:"CORS Known Issue",type:"danger",children:(0,r.jsxs)(t.p,{children:["When the browser makes a preflight request, it usually sends a request with the method ",(0,r.jsx)(t.code,{children:"OPTIONS"}),". The challenge here is processing the pre-flight request without executing the specific handler. I had to have a crude implementation of this as shown below. Any suggestions to improve this would be highly appreciated."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"// for CORS we need to check if the method if OPTIONS and we pass the request\n// to the first handler in the stack\n// TODO: not just the first handler but all handlers except the last handler\n// as middlewares are considered handlers.\nif r.Method == MethodOptions {\n    matchedRoute.Handlers[0](ctx)\n    return\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"In the above, it will only work if the CORS middleware is declared as the first middleware hence I am open to any suggestions to improve on this."})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);