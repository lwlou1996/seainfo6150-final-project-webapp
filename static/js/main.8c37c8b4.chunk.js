(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={container:"About_container__XcZ0V",imgContainer:"About_imgContainer__3nzJv",errorImg:"About_errorImg__xQPUW",aboutText:"About_aboutText__3-odh"}},12:function(e,t,a){e.exports={container:"Error_container__2RlQq",imgContainer:"Error_imgContainer__2inLC",errorImg:"Error_errorImg__pp8XK"}},13:function(e,t,a){e.exports={container:"PostItem_container__a_bla",textPart:"PostItem_textPart__1rFGi",imgPart:"PostItem_imgPart__rA0wd"}},17:function(e,t,a){e.exports={container:"BrandList_container__mcMtl",listContainer:"BrandList_listContainer__ecgmj"}},18:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/error.d0a7dd00.png"},28:function(e,t,a){e.exports=a.p+"static/media/mainpage.93fe9297.png"},31:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=a(9),i=a(15),s=a.n(i),m=a(25),u=a(30),p=a(1),d=a(16),E=function(){return r.a.createElement("div",null,"The foo page")},f=function(e){return r.a.createElement("div",null,"The bar page with categoryId of ",e.categoryId," and productId of ",e.productId)},_=function(e){return r.a.createElement("div",null,"The baz page",r.a.createElement("article",null,r.a.createElement("h1",null,e.content.title),r.a.createElement("address",null,"Author: ",e.content.author),r.a.createElement("p",null,e.content.text)))},g=a(26),h=a.n(g),v=a(6),b=a.n(v),x=function(){return r.a.createElement("div",{className:b.a.navContainer},r.a.createElement("header",{className:b.a.container},r.a.createElement("nav",null,r.a.createElement("a",{href:"/",className:b.a.mainIcon},"STORE")),r.a.createElement("nav",null,r.a.createElement("ul",{className:b.a.list},r.a.createElement("li",{className:b.a.listItem},r.a.createElement("a",{href:"/about"},"About")),r.a.createElement("li",{className:b.a.listItem},r.a.createElement("a",{href:"/category"},"Category")),r.a.createElement("li",{className:b.a.listItem},r.a.createElement("a",{href:"/order"},"Order"))))))},I=a(12),N=a.n(I),w=function(){return r.a.createElement("div",{className:N.a.container},r.a.createElement("div",null,r.a.createElement(x,null)),r.a.createElement("div",{className:N.a.imgContainer},r.a.createElement("img",{className:N.a.errorImg,src:h.a,alt:"Page Not Found"})))},y=a(8),P=a.n(y),C=a(27),j=a.n(C),A=a(13),H=a.n(A),B=function(e){return r.a.createElement("div",{className:H.a.container},r.a.createElement("div",{className:H.a.textPart},r.a.createElement("h3",null,r.a.createElement("a",{href:"/posts/"+e.post.id},e.post.title)," - ",r.a.createElement("span",null,e.post.brand)),r.a.createElement(j.a,{text:e.post.intro,maxLine:2,ellipsis:"...",trimRight:!0,basedOn:"letters"}),r.a.createElement("p",null,e.post.createDate," - ",e.post.author)),r.a.createElement("div",{className:H.a.imgPart},r.a.createElement("img",{src:e.post.image._url,alt:e.post.image.img_text})))},O=a(17),k=a.n(O),T=function(e){return console.log("values= "+e.brands),r.a.createElement("div",{className:k.a.container},r.a.createElement("h3",null,"Category"),r.a.createElement("ul",{className:k.a.listContainer},e.brands.map(function(e){return r.a.createElement("h4",null,e)})))},S=a(28),L=a.n(S),R=a(11),J=a.n(R),M=function(){return r.a.createElement("div",{className:J.a.container},r.a.createElement("div",null,r.a.createElement(x,null)),r.a.createElement("div",{className:J.a.imgContainer},r.a.createElement("img",{className:J.a.errorImg,src:L.a,alt:"About Image: just to be simple"})),r.a.createElement("div",{className:J.a.aboutText},r.a.createElement("h2",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/leichenzhou/"},"ABOUT ME")),r.a.createElement("ul",null,r.a.createElement("li",null,"Understand basic usability, user experience and accessibility principles"),r.a.createElement("li",null,"Have a basic understanding and practical knowledge of HTML5"),r.a.createElement("li",null,"Write valid, well-formed, scalable, and semantically appropriate HTML5 within the context of a React app"),r.a.createElement("li",null,"Have a basic understanding and practical knowledge of CSS"),r.a.createElement("li",null,"Write CSS stylesheets within the context of a React app"),r.a.createElement("li",null,"Have a basic understanding and practical knowledge of Javascript"),r.a.createElement("li",null,"Have a basic understanding and practical knowledge of React and app development within the context of a React app."),r.a.createElement("li",null,"Identify the types of images used in modern web design and explain what types are appropriate for different functions "))))},z=(a(18),function(e){var t;console.log("home page",typeof e.posts),t=e.posts.length?r.a.createElement("ul",{className:P.a.textContainer},e.posts.map(function(e){return r.a.createElement(B,{post:e,key:e.id})})):r.a.createElement("div",null,"You have no data!");var a=new Set;e.posts.length&&e.posts.map(function(e){return a.add(e.brand)});var n=[];return a.forEach(function(e,t){return n.push(t)}),console.log(n),r.a.createElement("div",{className:P.a.container},r.a.createElement("div",null,r.a.createElement(x,null)),r.a.createElement("div",{className:P.a.bodyPart},r.a.createElement("div",{className:P.a.leftPart},t),r.a.createElement("div",{className:P.a.rightPart},r.a.createElement(T,{brands:n,posts:e.posts}))))}),F={id:"article-1",title:"An Article",author:"April Bingham",text:"Some text in the article"};var Q=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)(function(){var e=function(){var e=Object(m.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://5fc3f9f8e5c28f0016f54fc2.mockapi.io/api/v1/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log("post resp - json:",a),l(Object.values(a));case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(d.isEmpty)(a)&&e()},[a]),Object(d.isEmpty)(a)?null:r.a.createElement("div",{className:"App"},r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0},r.a.createElement(z,{posts:a})),r.a.createElement(p.a,{path:"/foo",exact:!0,component:E}),r.a.createElement(p.a,{path:"/about",exact:!0,component:M}),r.a.createElement(p.a,{path:"/bar/:categoryId/:productId",exact:!0,render:function(e){var t=e.match;return r.a.createElement(f,{categoryId:t.params.categoryId,productId:t.params.productId})}}),r.a.createElement(p.a,{path:"/baz",exact:!0,render:function(){return r.a.createElement(_,{content:F})}}),r.a.createElement(p.a,{component:w}))))};c.a.render(r.a.createElement(o.a,{basename:/github.io/.test(window.location)?"/seainfo6150-final-project-webapp":""},r.a.createElement(Q,null)),document.getElementById("root"))},6:function(e,t,a){e.exports={container:"NaviBar_container__1p3gy",mainIcon:"NaviBar_mainIcon__1b4w-",list:"NaviBar_list__3_1M4",listItem:"NaviBar_listItem__PQcij",section:"NaviBar_section__1JDy7"}},8:function(e,t,a){e.exports={container:"Homepage_container__2IIIh",bodyPart:"Homepage_bodyPart__3sFXG",leftPart:"Homepage_leftPart__1msBH",textContainer:"Homepage_textContainer__2_L3r",rightPart:"Homepage_rightPart__3sNUQ"}}},[[31,1,2]]]);
//# sourceMappingURL=main.8c37c8b4.chunk.js.map