"use strict";(self.webpackChunkpine_docs=self.webpackChunkpine_docs||[]).push([[6207],{9117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(4848),i=n(8453);const r={sidebar_position:4},o="Client",a={id:"Guide - Basics/client",title:"Client",description:"Client is a wrapper around the http.Client. This implementation is no special and you can instead use the http.Client directly if you wish.",source:"@site/docs/Guide - Basics/client.md",sourceDirName:"Guide - Basics",slug:"/Guide - Basics/client",permalink:"/pine-docs/docs/Guide - Basics/client",draft:!1,unlisted:!1,editUrl:"https://github.com/BryanMwangi/pine-docs/blob/main/docs/Guide - Basics/client.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cron",permalink:"/pine-docs/docs/Guide - Basics/cron"},next:{title:"Cookie",permalink:"/pine-docs/docs/Guide - Basics/cookie"}},d={},l=[{value:"Request Methods",id:"request-methods",level:2},{value:"SetMethod",id:"setmethod",level:3},{value:"SetRequestURI",id:"setrequesturi",level:3},{value:"SetHeaders",id:"setheaders",level:3},{value:"JSON",id:"json",level:3},{value:"Client Methods",id:"client-methods",level:2},{value:"New",id:"new",level:3},{value:"NewClientWithTimeout",id:"newclientwithtimeout",level:3},{value:"Request",id:"request",level:3},{value:"SetTLSVerification",id:"settlsverification",level:3},{value:"SendRequest",id:"sendrequest",level:3},{value:"ReadResponse",id:"readresponse",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"client",children:"Client"})}),"\n",(0,s.jsx)(t.p,{children:"Client is a wrapper around the http.Client. This implementation is no special and you can instead use the http.Client directly if you wish."}),"\n",(0,s.jsx)(t.p,{children:"There are a couple of helpful methods that allow you to reduce the amount of code you need to write, so there's that."}),"\n",(0,s.jsx)(t.p,{children:"Here is how the client struct looks like:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"type Client struct {\n\t*http.Client\n\treq *Request\n\tres *http.Response\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"The request and response are pretty standard. The Request is a simple wrapper around the http.Request struct with some extra properties, while the response is a direct wrapper around the http.Response struct."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"type Request struct {\n    http.Request\n    body        *bytes.Buffer\n    uri         string\n    method      string\n    jsonEncoder JSONMarshal\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["By default, we use the json.Marshal for encoding the request body, however, if the need arises, let me know if you would like to use the same encoder as set in the ",(0,s.jsx)(t.a,{href:"./pine#config",children:(0,s.jsx)(t.code,{children:"Server config"})}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"request-methods",children:"Request Methods"}),"\n",(0,s.jsx)(t.p,{children:"The following methods are available on the Request struct."}),"\n",(0,s.jsx)(t.h3,{id:"setmethod",children:"SetMethod"}),"\n",(0,s.jsx)(t.p,{children:"This is used to set http method that will be used to send the request. Also supports chaining."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func (c *Request) SetMethod(method string) *Request\n"})}),"\n",(0,s.jsx)(t.h3,{id:"setrequesturi",children:"SetRequestURI"}),"\n",(0,s.jsx)(t.p,{children:"This is used to set the URI of the request. You will need to include the full uri and protocol to use this method. Also supports chaining."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func (c *Request) SetRequestURI(uri string) *Request\n"})}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'request.SetRequestURI("https://example.com/api/v1/users")\n'})}),"\n",(0,s.jsx)(t.h3,{id:"setheaders",children:"SetHeaders"}),"\n",(0,s.jsx)(t.p,{children:"This method is used to set the headers of a request. You will need to construct a map of the headers and pass that map to the method. The map needs to be in the following type:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"map[string]string\n"})}),"\n",(0,s.jsx)(t.p,{children:"Also supports chaining."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func (c *Request) SetHeaders(headers map[string]string) *Request\n"})}),"\n",(0,s.jsx)(t.h3,{id:"json",children:"JSON"}),"\n",(0,s.jsx)(t.p,{children:"This method is used to set the body of the request to be JSON. You can pass any data here to be used by the JSON encoder. This method does not support chaining and returns an error."}),"\n",(0,s.jsx)(t.p,{children:"It is preffered to call this method last to check for errors during encoding the JSON."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func (c *Request) JSON(body interface{}) error\n"})}),"\n",(0,s.jsx)(t.h2,{id:"client-methods",children:"Client Methods"}),"\n",(0,s.jsx)(t.p,{children:"The following methods are available on the Client struct."}),"\n",(0,s.jsx)(t.h3,{id:"new",children:"New"}),"\n",(0,s.jsx)(t.p,{children:"Not a method but a function that returns a new instance of the Client struct."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func NewClient() *Client\n"})}),"\n",(0,s.jsx)(t.h3,{id:"newclientwithtimeout",children:"NewClientWithTimeout"}),"\n",(0,s.jsx)(t.p,{children:"Also not a method but a function that returns a new instance of the Client struct with a timeout."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func NewClientWithTimeout(timeout time.Duration) *Client\n"})}),"\n",(0,s.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,s.jsx)(t.p,{children:"This is a method and returns an instance of the Request struct and supports chaining, meaning you can then chain more request methods from this instance."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func (c *Client) Request() *Request\n"})}),"\n",(0,s.jsx)(t.h3,{id:"settlsverification",children:"SetTLSVerification"}),"\n",(0,s.jsx)(t.p,{children:"You can use this method to skip TLS verification if the request is made over HTTPS. This is particularly useful when say you call an API that has outdated certificates."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func (c *Client) SetTLSVerification(skip bool) *Client\n"})}),"\n",(0,s.jsx)(t.h3,{id:"sendrequest",children:"SendRequest"}),"\n",(0,s.jsx)(t.p,{children:"This method is used to send the request and returns an error if the request fails. Only use this method after you have set all the properties of the request."}),"\n",(0,s.jsx)(t.p,{children:"The minimum required properties are the method and uri. The body is optional."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func (c *Client) SendRequest() error\n"})}),"\n",(0,s.jsx)(t.h3,{id:"readresponse",children:"ReadResponse"}),"\n",(0,s.jsx)(t.p,{children:"After a request is sent, by default the response is stored in the same instance of the request and can be retrieved and freed by calling ReadResponse."}),"\n",(0,s.jsx)(t.p,{children:"After ReadResponse is called once, the response is no longer available to that specific instance of the request."}),"\n",(0,s.jsxs)(t.p,{children:["There was no specific reason for decoupling the response from the request method during my designing phase, however, you may consider that not each request warrants you to read the response, for example, you might just want to send a ",(0,s.jsx)(t.code,{children:"ping"})," to show that the server is up and running."]}),"\n",(0,s.jsx)(t.p,{children:"Improvements to this method are welcome."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func (c *Client) ReadResponse() error\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);