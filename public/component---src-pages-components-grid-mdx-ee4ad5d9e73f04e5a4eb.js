(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{345:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return b}),a.d(t,"default",function(){return u});a(10),a(4),a(5),a(3),a(6),a(2),a(1);var n=a(90),c=a(376);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},i=r("PageDescription"),p=r("AnchorLinks"),o=r("AnchorLink"),d=r("Row"),s=r("Column"),m={_frontmatter:b},g=c.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,["components"]);return Object(n.b)(g,l({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(i,{mdxType:"PageDescription"},Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"<Grid>"),", ",Object(n.b)("inlineCode",{parentName:"p"},"<Row>")," and ",Object(n.b)("inlineCode",{parentName:"p"},"<Column>")," components are used to arrange content and components on the grid within a page.")),Object(n.b)("p",null,"The math for the website is calculated using a 12 column grid at the large breakpoint, 8 column at medium (tablet) breakpoint and 4 column at the small (mobile) breakpoint. The design is based on a 16 column grid, however the math is calcualted with 12 to prevent having to add a ",Object(n.b)("inlineCode",{parentName:"p"},"offset")," class to each row."),Object(n.b)("p",null,"To learn more about the grid is built, you can read the docs in the ",Object(n.b)("a",l({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/tree/master/packages/grid"}),"Carbon")," repo."),Object(n.b)(p,{mdxType:"AnchorLinks"},Object(n.b)(o,{mdxType:"AnchorLink"},"Grid"),Object(n.b)(o,{mdxType:"AnchorLink"},"Row"),Object(n.b)(o,{mdxType:"AnchorLink"},"Column")),Object(n.b)("h2",{id:"grid"},"Grid"),Object(n.b)(i,{mdxType:"PageDescription"},Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"<Grid>")," component is a wrapper that adds the ",Object(n.b)("inlineCode",{parentName:"p"},"bx--grid")," class to a wrapper div. ",Object(n.b)("strong",{parentName:"p"},"You won’t need this")," when adding components to ",Object(n.b)("inlineCode",{parentName:"p"},".mdx")," pages as this is already built into the template.")),Object(n.b)("h3",{id:"code"},"Code"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"<Grid></Grid>\n")),Object(n.b)("h3",{id:"props"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"propType"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"required"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"default"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"children"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"node"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"className"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Add custom class name")))),Object(n.b)("h2",{id:"row"},"Row"),Object(n.b)(i,{mdxType:"PageDescription"},Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"<Row>")," component is a wrapper that adds the ",Object(n.b)("inlineCode",{parentName:"p"},"bx--row")," class to a wrapper div. You will want to use this to define rows that you will place ",Object(n.b)("inlineCode",{parentName:"p"},"<Column>")," components inside of.")),Object(n.b)("h3",{id:"code-1"},"Code"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"<Row>\n  <Column>\n\nContent or additional <Components />\n\n  </Column>\n</Row>\n")),Object(n.b)("h3",{id:"props-1"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"propType"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"required"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"default"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"children"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"node"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"className"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Add custom class name")))),Object(n.b)("h2",{id:"column"},"Column"),Object(n.b)(i,{mdxType:"PageDescription"},Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"<Column>")," component is used to define column widths for your content, you can set the rules at different breakpoints with the props.")),Object(n.b)("h3",{id:"example"},"Example"),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(s,{colMd:4,colLg:4,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1170px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Colors",title:"",src:"/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png",srcSet:["/static/dc51d23a5322c2511205c8c525bbe8ee/115db/Article_05.png 293w","/static/dc51d23a5322c2511205c8c525bbe8ee/f1a3a/Article_05.png 585w","/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png 1170w","/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1170px) 100vw, 1170px"})),"\n    ")),Object(n.b)(s,{colMd:4,colLg:4,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1170px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Colors",title:"",src:"/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png",srcSet:["/static/dc51d23a5322c2511205c8c525bbe8ee/115db/Article_05.png 293w","/static/dc51d23a5322c2511205c8c525bbe8ee/f1a3a/Article_05.png 585w","/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png 1170w","/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1170px) 100vw, 1170px"})),"\n    ")),Object(n.b)(s,{colMd:4,colLg:4,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1170px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Colors",title:"",src:"/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png",srcSet:["/static/dc51d23a5322c2511205c8c525bbe8ee/115db/Article_05.png 293w","/static/dc51d23a5322c2511205c8c525bbe8ee/f1a3a/Article_05.png 585w","/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png 1170w","/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1170px) 100vw, 1170px"})),"\n    "))),Object(n.b)("h4",{id:"no-gutter-left"},"No gutter left"),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(s,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1170px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Colors",title:"",src:"/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png",srcSet:["/static/dc51d23a5322c2511205c8c525bbe8ee/115db/Article_05.png 293w","/static/dc51d23a5322c2511205c8c525bbe8ee/f1a3a/Article_05.png 585w","/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png 1170w","/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1170px) 100vw, 1170px"})),"\n    ")),Object(n.b)(s,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1170px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Colors",title:"",src:"/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png",srcSet:["/static/dc51d23a5322c2511205c8c525bbe8ee/115db/Article_05.png 293w","/static/dc51d23a5322c2511205c8c525bbe8ee/f1a3a/Article_05.png 585w","/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png 1170w","/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1170px) 100vw, 1170px"})),"\n    ")),Object(n.b)(s,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1170px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Colors",title:"",src:"/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png",srcSet:["/static/dc51d23a5322c2511205c8c525bbe8ee/115db/Article_05.png 293w","/static/dc51d23a5322c2511205c8c525bbe8ee/f1a3a/Article_05.png 585w","/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png 1170w","/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1170px) 100vw, 1170px"})),"\n    "))),Object(n.b)("h4",{id:"no-gutter"},"No gutter"),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(s,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1170px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Colors",title:"",src:"/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png",srcSet:["/static/dc51d23a5322c2511205c8c525bbe8ee/115db/Article_05.png 293w","/static/dc51d23a5322c2511205c8c525bbe8ee/f1a3a/Article_05.png 585w","/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png 1170w","/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1170px) 100vw, 1170px"})),"\n    ")),Object(n.b)(s,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1170px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Colors",title:"",src:"/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png",srcSet:["/static/dc51d23a5322c2511205c8c525bbe8ee/115db/Article_05.png 293w","/static/dc51d23a5322c2511205c8c525bbe8ee/f1a3a/Article_05.png 585w","/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png 1170w","/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1170px) 100vw, 1170px"})),"\n    ")),Object(n.b)(s,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1170px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Colors",title:"",src:"/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png",srcSet:["/static/dc51d23a5322c2511205c8c525bbe8ee/115db/Article_05.png 293w","/static/dc51d23a5322c2511205c8c525bbe8ee/f1a3a/Article_05.png 585w","/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png 1170w","/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1170px) 100vw, 1170px"})),"\n    "))),Object(n.b)("h4",{id:"offset"},"Offset"),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(s,{colMd:4,colLg:4,offsetLg:4,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1170px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Colors",title:"",src:"/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png",srcSet:["/static/dc51d23a5322c2511205c8c525bbe8ee/115db/Article_05.png 293w","/static/dc51d23a5322c2511205c8c525bbe8ee/f1a3a/Article_05.png 585w","/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png 1170w","/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1170px) 100vw, 1170px"})),"\n    ")),Object(n.b)(s,{colMd:4,colLg:4,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1170px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Colors",title:"",src:"/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png",srcSet:["/static/dc51d23a5322c2511205c8c525bbe8ee/115db/Article_05.png 293w","/static/dc51d23a5322c2511205c8c525bbe8ee/f1a3a/Article_05.png 585w","/static/dc51d23a5322c2511205c8c525bbe8ee/722b0/Article_05.png 1170w","/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1170px) 100vw, 1170px"})),"\n    "))),Object(n.b)("h3",{id:"code-2"},"Code"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"<Row>\n<Column colMd={4} colLg={4}>\n\n![Colors](images/Article_05.png)\n\n</Column>\n<Column colMd={4} colLg={4}>\n\n![Colors](images/Article_05.png)\n\n</Column>\n<Column colMd={4} colLg={4}>\n\n![Colors](images/Article_05.png)\n\n</Column>\n</Row>\n")),Object(n.b)("h4",{id:"no-gutter-left-1"},"No gutter left"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"<Row>\n<Column colMd={4} colLg={4} noGutterMdLeft>\n\n![Colors](images/Article_05.png)\n\n</Column>\n<Column colMd={4} colLg={4} noGutterMdLeft>\n\n![Colors](images/Article_05.png)\n\n</Column>\n<Column colMd={4} colLg={4} noGutterMdLeft>\n\n![Colors](images/Article_05.png)\n\n</Column>\n</Row>\n")),Object(n.b)("h4",{id:"no-gutter-1"},"No gutter"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"<Row>\n<Column colMd={4} colLg={4} noGutterSm>\n\n![Colors](images/Article_05.png)\n\n</Column>\n<Column colMd={4} colLg={4} noGutterSm>\n\n![Colors](images/Article_05.png)\n\n</Column>\n<Column colMd={4} colLg={4} noGutterSm>\n\n![Colors](images/Article_05.png)\n\n</Column>\n</Row>\n")),Object(n.b)("h4",{id:"offset-1"},"Offset"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"<Row>\n<Column colMd={4} colLg={4} offsetLg={4}>\n\n![Colors](images/Article_05.png)\n\n</Column>\n<Column colMd={4} colLg={4}>\n\n![Colors](images/Article_05.png)\n\n</Column>\n</Row>\n")),Object(n.b)("h3",{id:"props-2"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"propType"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"required"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"default"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"children"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"node"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"className"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Add custom class name")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"colSm"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Specify the col width at small breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"colMd"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Specify the col width at medium breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"colLg"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"12"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Specify the col width at large breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"offsetLg"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Specify the col offset at large breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"offsetMd"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Specify the col offset at medium breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"offsetSm"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Specify the col offset at small breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"noGutterSm"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"bool"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Specify no-gutter at small breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"noGutterMd"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"bool"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Specify no-gutter at medium breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"noGutterLg"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"bool"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Specify no-gutter at large breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"noGutterSmLeft"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"bool"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Specify no-gutter left at small breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"noGutterMdLeft"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"bool"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Specify no-gutter left at medium breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"noGutterLgLeft"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"bool"),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Specify no-gutter left at large breakpoint")))))}u.isMDXComponent=!0},375:function(e){e.exports={data:{site:{pathPrefix:""}}}},376:function(e,t,a){"use strict";a(22),a(16);var n=a(2),c=a(375),l=a(1),b=a.n(l),r=a(183),i=a(69),p=a.n(i),o=a(57),d=a(104),s=a(0),m=a.n(s),g=a(8),u=a.n(g),O=a(338),j=function(e){var t,a=e.children,c=e.title,l=e.tabs,b=void 0===l?[]:l,r=e.shouldHideHeader;return Object(n.b)("div",{className:u()((t={},t[O.pageHeader]=O.pageHeader,t[O.pageHeaderSticky]=b.length,t[O.pageHeaderShifted]=r,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:O.text},c)))),a)};j.propTypes={children:m.a.node,title:m.a.string};var N=j,x=a(184),h=a(20),y=a(339);var w=function(e){var t,a;function c(){return e.apply(this,arguments)||this}return a=e,(t=c).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,c.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,c=a.split("/").filter(Boolean).slice(-1)[0],l=t.map(function(e){var t,l=p()(e,{lower:!0}),b=l===c,r=a.replace(c,l);return Object(n.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=b,t),y.listItem)},Object(n.b)(h.Link,{className:y.link,to:""+r},e))});return Object(n.b)("div",{className:y.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:y.list},l))))))},c}(b.a.Component);w.propTypes={tabs:m.a.array,slug:m.a.string};var f=w,v=a(185);t.a=function(e){var t=e.pageContext,a=e.children,l=e.location,b=t.frontmatter,i=void 0===b?{}:b,s=i.tabs,m=i.title,g=Object(o.c)(),u=!!s&&"down"===g,O=c.data.site.pathPrefix,j=O?l.pathname.replace(O,""):l.pathname,h=s?j.split("/").slice(-1)[0]||p()(s[0],{lower:!0}):"";return Object(n.b)(d.a,{shouldHideHeader:u,homepage:!1},Object(n.b)(N,{shouldHideHeader:u,title:m,label:"label",tabs:s},s&&Object(n.b)(f,{slug:j,tabs:s,currentTab:h})),Object(n.b)(v.a,{padded:!0},a),Object(n.b)(x.a,{pageContext:t,location:l,slug:j,tabs:s,currentTab:h}),Object(n.b)(r.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-grid-mdx-ee4ad5d9e73f04e5a4eb.js.map