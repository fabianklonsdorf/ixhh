(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{342:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return i}),n.d(t,"default",function(){return m});n(10),n(4),n(5),n(3),n(6),n(2),n(1);var a=n(90),r=n(376);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},b=l("PageDescription"),c=l("Row"),s=l("Column"),d=l("Aside"),p={_frontmatter:i},u=r.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(u,o({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(b,{mdxType:"PageDescription"},Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"<Aside>")," component is a wrapper component that adds styling to make the text display smaller than the default body text; using ",Object(a.b)("inlineCode",{parentName:"p"},"body-long-01")," and adds the correct top border styles. It should be used within a smaller ",Object(a.b)("inlineCode",{parentName:"p"},"<Column>")," width.")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)(c,{mdxType:"Row"},Object(a.b)(s,{colMd:5,colLg:7,className:"bx--type-expressive-heading-03",mdxType:"Column"},Object(a.b)("p",null,"It is more important than ever that we own our own ethos, make palpable our brand values, and incorporate an instantly identifiable IBMness in everything we do."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Without aesthetic, design is either the humdrum repetition of familiar clichés or a wild scramble for novelty. Without aesthetic, the computer is but a mindless speed machine, producing effects without substance, form without relevant content, or content without meaningful form."),Object(a.b)("cite",null,"– Paul Rand")),Object(a.b)("p",null,"Aesthetic is defined as the philosophical theory or set of principles governing outward appearance or actions.")),Object(a.b)(s,{colSm:0,colMd:2,colLg:3,offsetMd:1,noGutterSm:!0,mdxType:"Column"},Object(a.b)(d,{mdxType:"Aside"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Good design is always good design.")),Object(a.b)("p",null,"What we borrow from our own design history is not a mid-century aesthetic in stylistic terms, but the modernist attitudes and approach used at the time.")))),Object(a.b)("h2",{id:"code"},"Code"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"<Column colSm={0} colMd={2} colLg={3} offsetMd={1} noGutterSm>\n<Aside>\n\n**Good design is always good design.**\n\nWhat we borrow from our own design history is not a mid-century aesthetic in stylistic terms, but the modernist attitudes and approach used at the time.\n\n</Aside>\n\n</Column>\n")),Object(a.b)("h3",{id:"props"},"Props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"property"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"propType"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"required"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"default"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"children"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"node"),Object(a.b)("td",o({parentName:"tr"},{align:null})),Object(a.b)("td",o({parentName:"tr"},{align:null})),Object(a.b)("td",o({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"className"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",o({parentName:"tr"},{align:null})),Object(a.b)("td",o({parentName:"tr"},{align:null})),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Add custom class name")))))}m.isMDXComponent=!0},375:function(e){e.exports={data:{site:{pathPrefix:""}}}},376:function(e,t,n){"use strict";n(22),n(16);var a=n(2),r=n(375),o=n(1),i=n.n(o),l=n(183),b=n(69),c=n.n(b),s=n(57),d=n(104),p=n(0),u=n.n(p),m=n(8),h=n.n(m),O=n(338),j=function(e){var t,n=e.children,r=e.title,o=e.tabs,i=void 0===o?[]:o,l=e.shouldHideHeader;return Object(a.b)("div",{className:h()((t={},t[O.pageHeader]=O.pageHeader,t[O.pageHeaderSticky]=i.length,t[O.pageHeaderShifted]=l,t))},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12"},Object(a.b)("h1",{id:"page-title",className:O.text},r)))),n)};j.propTypes={children:u.a.node,title:u.a.string};var g=j,f=n(184),y=n(20),N=n(339);var v=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=t.map(function(e){var t,o=c()(e,{lower:!0}),i=o===r,l=n.replace(r,o);return Object(a.b)("li",{key:e,className:h()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(a.b)(y.Link,{className:N.link,to:""+l},e))});return Object(a.b)("div",{className:N.tabsContainer},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(a.b)("nav",null,Object(a.b)("ul",{className:N.list},o))))))},r}(i.a.Component);v.propTypes={tabs:u.a.array,slug:u.a.string};var w=v,x=n(185);t.a=function(e){var t=e.pageContext,n=e.children,o=e.location,i=t.frontmatter,b=void 0===i?{}:i,p=b.tabs,u=b.title,m=Object(s.c)(),h=!!p&&"down"===m,O=r.data.site.pathPrefix,j=O?o.pathname.replace(O,""):o.pathname,y=p?j.split("/").slice(-1)[0]||c()(p[0],{lower:!0}):"";return Object(a.b)(d.a,{shouldHideHeader:h,homepage:!1},Object(a.b)(g,{shouldHideHeader:h,title:u,label:"label",tabs:p},p&&Object(a.b)(w,{slug:j,tabs:p,currentTab:y})),Object(a.b)(x.a,{padded:!0},n),Object(a.b)(f.a,{pageContext:t,location:o,slug:j,tabs:p,currentTab:y}),Object(a.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-aside-mdx-d6f0932b592b5dba4f70.js.map