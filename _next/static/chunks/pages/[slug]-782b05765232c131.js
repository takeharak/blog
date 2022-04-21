(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{4008:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return n(3446)}])},4846:function(e,t,n){"use strict";var r=n(5893),s=n(1664),a=n.n(s);t.Z=function(e){var t=e.title,n=e.src,s=e.slug,l=(0,r.jsx)("img",{src:n,alt:"Cover Image for ".concat(t)});return(0,r.jsx)("div",{className:"sm:mx-0",children:s?(0,r.jsx)(a(),{as:"/".concat(s),href:"/[slug]",children:(0,r.jsx)("a",{"aria-label":t,children:l})}):l})}},9840:function(e,t,n){"use strict";var r=n(5893),s=n(8420),a=n(5313);t.Z=function(e){var t=e.dateString,n=(0,s.Z)(t);return(0,r.jsx)("time",{dateTime:t,children:(0,a.Z)(n,"LLLL\td, yyyy")})}},2606:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})}},625:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(5893),s=n(2606),a=function(){return(0,r.jsx)("footer",{className:"border-t border-neutral-200",children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"flex flex-col items-center py-4",children:[(0,r.jsx)("object",{className:"max-h-16 w-auto lg:max-h-24",data:"/blog/logos/logotype.svg",type:"image/svg+xml"}),(0,r.jsx)("p",{className:"mb-10 text-center text-xs text-gray-800 dark:text-gray-100 lg:text-sm",children:"\xa9 2022 takeharak"})]})})})},l=n(1664),i=n.n(l),c=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"mx-auto mb-6 mt-4 flex max-w-2xl flex-row md:mb-16 md:mt-12",children:[(0,r.jsx)("object",{className:"ml-8 mt-1.5 max-h-4 w-auto md:ml-0 md:max-h-8",data:"/blog/logos/icon.svg",type:"image/svg+xml"}),(0,r.jsxs)("h1",{className:"ml-2 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter",children:[(0,r.jsx)(i(),{href:"/",children:(0,r.jsx)("a",{className:"hover:no-underline",children:"Blog"})}),"."]})]})})},o=n(9008),d=function(){return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"/blog/favicon.svg",type:"image/svg+xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js."}),(0,r.jsx)("meta",{property:"og:image",content:""})]})},m=function(e){e.preview;var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(c,{}),(0,r.jsx)("div",{className:"min-h-screen",children:(0,r.jsx)("main",{children:t})}),(0,r.jsx)(a,{})]})}},1613:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.name,n=e.picture;return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{src:n,className:"mr-4 h-12 w-12 rounded-full",alt:t}),(0,r.jsx)("div",{className:"text-xl font-bold",children:t})]})}},3446:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return v}});var r=n(5893),s=n(1163),a=n(2918),l=n(2606),i=n(6873),c=n.n(i),o=function(e){var t=e.content;return(0,r.jsx)("div",{className:"mx-auto max-w-2xl",children:(0,r.jsx)("div",{className:c().markdown,dangerouslySetInnerHTML:{__html:t}})})},d=n(1613),m=n(9840),x=n(4846),u=function(e){var t=e.children;return(0,r.jsx)("h1",{className:"mb-12 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-3xl md:leading-none lg:text-4xl",children:t})},h=function(e){var t=e.title,n=e.coverImage,s=e.date,a=e.author;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"mx-auto max-w-2xl",children:[(0,r.jsx)(u,{children:t}),(0,r.jsx)("div",{className:"hidden md:mb-12 md:block",children:(0,r.jsx)(d.Z,{name:a.name,picture:a.picture})}),n&&(0,r.jsx)("div",{className:"mb-8 sm:mx-0 md:mb-16",children:(0,r.jsx)(x.Z,{title:t,src:n})}),(0,r.jsx)("div",{className:"mb-6 text-lg",children:(0,r.jsx)(m.Z,{dateString:s})})]})})},g=n(625),j=n(9008),f=!0,v=function(e){var t=e.post,n=(e.morePosts,e.preview),i=(0,s.useRouter)();return i.isFallback||(null===t||void 0===t?void 0:t.slug)?(0,r.jsx)(g.Z,{preview:n,children:(0,r.jsx)(l.Z,{children:i.isFallback?(0,r.jsx)(u,{children:"Loading\u2026"}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("article",{className:"mb-32",children:[(0,r.jsx)(j.default,{children:(0,r.jsxs)("title",{children:[t.title," | Next.js Blog Example"]})}),(0,r.jsx)(h,{title:t.title,coverImage:t.coverImage,date:t.date,author:t.author}),(0,r.jsx)(o,{content:t.content})]})})})}):(0,r.jsx)(a.default,{statusCode:404})}},6873:function(e){e.exports={markdown:"markdown-styles_markdown__h_8de"}},2918:function(e,t,n){e.exports=n(67)},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[395,774,888,179],(function(){return t=4008,e(e.s=t);var t}));var t=e.O();_N_E=t}]);