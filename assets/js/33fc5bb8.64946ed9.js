"use strict";(self.webpackChunkpine_docs=self.webpackChunkpine_docs||[]).push([[867],{778:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});a(6540);var s=a(4164),r=a(1213),n=a(7559),o=a(6461),l=a(8774),i=a(4096),c=a(8027),d=a(7713),u=a(1463),m=a(3892),g=a(6913),h=a(4848);function p(e){let{author:t}=e;const a=(0,o.wI)(t);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.be,{title:a}),(0,h.jsx)(u.A,{tag:"blog_authors_posts"})]})}function x(){const{authorsListPath:e}=(0,i.x)();return(0,h.jsx)(l.A,{href:e,children:(0,h.jsx)(o.np,{})})}function j(e){let{author:t,items:a,sidebar:s,listMetadata:r}=e;return(0,h.jsxs)(c.A,{sidebar:s,children:[(0,h.jsxs)("header",{className:"margin-bottom--xl",children:[(0,h.jsx)(g.A,{as:"h1",author:t}),t.description&&(0,h.jsx)("p",{children:t.description}),(0,h.jsx)(x,{})]}),(0,h.jsx)("hr",{}),(0,h.jsx)(m.A,{items:a}),(0,h.jsx)(d.A,{metadata:r})]})}function b(e){return(0,h.jsxs)(r.e3,{className:(0,s.A)(n.G.wrapper.blogPages,n.G.page.blogAuthorsPostsPage),children:[(0,h.jsx)(p,{...e}),(0,h.jsx)(j,{...e})]})}},7713:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var s=a(1312),r=a(9022),n=a(4848);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,n.jsx)(r.A,{permalink:a,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),o&&(0,n.jsx)(r.A,{permalink:o,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},2907:(e,t,a)=>{a.d(t,{A:()=>O});a(6540);var s=a(4164),r=a(4096),n=a(4848);function o(e){let{children:t,className:a}=e;return(0,n.jsx)("article",{className:a,children:t})}var l=a(8774);const i={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.e7)(),{permalink:c,title:d}=a,u=o?"h1":"h2";return(0,n.jsx)(u,{className:(0,s.A)(i.title,t),children:o?d:(0,n.jsx)(l.A,{to:c,children:d})})}var d=a(1312),u=a(5846),m=a(6266);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,n.jsx)(n.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,n.jsx)("time",{dateTime:t,children:a})}function x(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,r.e7)(),{date:o,readingTime:l}=a,i=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,s.A)(g.container,"margin-vert--md",t),children:[(0,n.jsx)(p,{date:o,formattedDate:(c=o,i.format(new Date(c)))}),void 0!==l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{}),(0,n.jsx)(h,{readingTime:l})]})]});var c}var b=a(6913);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),i=1===a.length;return(0,n.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",l?f.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,n.jsx)("div",{className:(0,s.A)(!l&&(i?"col col--12":"col col--6"),l?f.imageOnlyAuthorCol:f.authorCol),children:(0,n.jsx)(b.A,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(c,{}),(0,n.jsx)(j,{}),(0,n.jsx)(A,{})]})}var T=a(440),N=a(5533);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.e7)();return(0,n.jsx)("div",{id:o?T.LU:void 0,className:(0,s.A)("markdown",a),children:(0,n.jsx)(N.A,{children:t})})}var P=a(7559),y=a(4336),k=a(2053);function _(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function U(e){const{blogPostTitle:t,...a}=e;return(0,n.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,n.jsx)(_,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,title:o,editUrl:l,hasTruncateMarker:i,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&i,m=a.length>0;if(!(m||u||l))return null;if(t){const e=!!(l||d||c);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,n.jsx)("div",{className:(0,s.A)("row","margin-top--sm",P.G.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(k.A,{tags:a})})}),e&&(0,n.jsx)(y.A,{className:(0,s.A)("margin-top--sm",P.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,n.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,n.jsx)(k.A,{tags:a})}),u&&(0,n.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":m}),children:(0,n.jsx)(U,{blogPostTitle:o,to:e.permalink})})]})}function O(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(o,{className:(0,s.A)(l,a),children:[(0,n.jsx)(v,{}),(0,n.jsx)(w,{children:t}),(0,n.jsx)(R,{})]})}},3892:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var s=a(4096),r=a(2907),n=a(4848);function o(e){let{items:t,component:a=r.A}=e;return(0,n.jsx)(n.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,n.jsx)(s.in,{content:t,children:(0,n.jsx)(a,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)}))})}},6461:(e,t,a)=>{a.d(t,{ZD:()=>l,np:()=>d,uz:()=>c,wI:()=>i});a(6540);var s=a(1312),r=a(5846),n=a(4848);function o(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=o();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function i(e){const t=o();return(0,s.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,n.jsx)(s.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}}}]);