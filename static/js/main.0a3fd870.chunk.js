(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(220)},107:function(e,t,a){},213:function(e,t,a){},215:function(e,t,a){},218:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(98),r=a.n(l),s=a(8),i=a(9),o=a(15),m=a(13),u=a(16),d=(a(105),a(224)),f=a(223),p=a(222),h=a(67),v=(a(107),a(22)),E=a.n(v),g=a(34),b=a(111);a(116);var N={apiKey:"AIzaSyCDUquyJbQv_28nTcTGMO9Y6VueNdB0pNM",authDomain:"blog-7c94d.firebaseapp.com",databaseURL:"https://blog-7c94d.firebaseio.com",projectId:"blog-7c94d",storageBucket:"blog-7c94d.appspot.com",messagingSenderId:"891698781487"},w=function(){function e(){Object(s.a)(this,e),this.table={}}return Object(i.a)(e,[{key:"init",value:function(){var e=this;return new Promise(function(){var t=Object(g.a)(E.a.mark(function t(a){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{e.app=b.initializeApp(N),e.app.auth().then(function(t){t?t.onAuthStateChanged(function(){e.onDbInit(),t=void 0,a()}):(e.onDbInit(),a())}).catch(function(e){console.log(e,"err")})}catch(n){e.onDbInit(),a()}case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}},{key:"model",value:function(e){var t=new y(this.app,e);return t}},{key:"onDbInit",value:function(){}}]),e}(),y=function(){function e(t,a){Object(s.a)(this,e),this.original=a,this.db=t,this.ref=t.database().ref(a)}return Object(i.a)(e,[{key:"child",value:function(t){return new e(this.db,this.original+t)}},{key:"fetch",value:function(){var e=this;return new Promise(function(){var t=Object(g.a)(E.a.mark(function t(a){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.ref.once("value").then(function(e){var t=[];(e=e.val())?(Object.keys(e).map(function(a){return t.push(Object.assign({id:a},e[a]))}),a(t)):a(t)});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}},{key:"fetchOrderByChild",value:function(e){var t=this;return new Promise(function(){var a=Object(g.a)(E.a.mark(function a(n){return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.ref.orderByChild(e).once("value").then(function(e){var t=[];(e=e.val())?(Object.keys(e).map(function(a){return t.push(Object.assign({id:a},e[a]))}),n(t)):n(t)});case 1:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}())}},{key:"fetchLikeObject",value:function(){var e=this;return new Promise(function(){var t=Object(g.a)(E.a.mark(function t(a){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.ref.once("value").then(function(e){e=e.val(),a(e)});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}},{key:"create",value:function(e){var t=this;return new Promise(function(a){t.ref.push().set(e,function(){return a(e)})})}},{key:"createWithId",value:function(e,t){var a=this;return new Promise(function(n){a.ref.child(e).set(t,n)})}},{key:"getById",value:function(e){var t=this;return new Promise(function(a){t.ref.child(e).once("value",function(t){return a(Object.assign({id:e},t.val()))})})}},{key:"destroy",value:function(e){var t=this;return new Promise(function(a){t.ref.child(e).remove().then(function(e){a()})})}},{key:"selfDesTroy",value:function(){var e=this;return new Promise(function(t){e.ref.remove().then(function(e){t()})})}},{key:"update",value:function(e,t){var a=this;return new Promise(function(n){a.ref.child(e).set(t,function(){n(t)})})}},{key:"findByUrl",value:function(e){var t=this;return new Promise(function(){var a=Object(g.a)(E.a.mark(function a(n){var c,l;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.fetch();case 2:c=a.sent,l=[],c.map(function(t){if(t.url===e)return l.push(t)}),n(l);case 6:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}())}}]),e}(),_=new w,k=a(221),j=a(119),x=function(){function e(t){Object(s.a)(this,e),this.data=t}return Object(i.a)(e,[{key:"orderBy",value:function(e){return j(this.data,{order:e})}}]),e}();function O(e){if(!e)return null;var t=new Date(e.split("-").join("/")),a=t.getFullYear(),n=t.getMonth()+1,c=t.getDate();return"".concat(c,"/").concat(n,"/").concat(a)}var P=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"post shadow"},c.a.createElement("div",{className:"post_order d-flex justify-content-center align-items-center d-sm-none"},this.props.post.ID),c.a.createElement("h4",{className:"post_title"},this.props.post.post_title),c.a.createElement("small",null,O(this.props.post.post_date)),c.a.createElement("p",{style:{marginBottom:".5rem",fontWeight:"bold",textDecoration:"underline"}},c.a.createElement("small",null,this.props.post.cats.join(" | "))),c.a.createElement("div",{className:"post_description"},this.props.post.post_excerpt),c.a.createElement(k.a,{className:"bg-black btn-read",to:"/posts/".concat(this.props.post.post_name)},"Read More..."))}}]),t}(c.a.Component);function S(e){return JSON.parse(window.localStorage.getItem(e))}var C={posts:"posts"};function I(e){var t,a;t=C.posts,a=e,window.localStorage.setItem(t,JSON.stringify(a))}var B=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).loadPostWithFilter=function(){var t=e.state.filter.categories,a=S(C.posts).filter(function(e){return e.cats.filter(function(e){return-1!==t.indexOf(e)}).length>0});e.setState({posts:a})},e.isCheck=function(t){return-1!==e.state.filter.categories.indexOf(t)},e.onFilter=function(t){var a=t.target.id,n=t.target.checked,c=e.state.filter,l=Object(h.a)(c.categories),r=l.indexOf(a);return n?-1===r&&l.push(a):-1!==r&&l.splice(r,1),e.setState({filter:{categories:Object(h.a)(l)}},e.loadPost)},e.state={posts:[],categories:[],filter:{categories:[]},loading:!0},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadCategories(),this.loadPost()}},{key:"loadCategories",value:function(){var e=this;_.model("categories").fetchLikeObject().then(function(t){var a=Object.keys(t);e.setState({categories:a})})}},{key:"loadPost",value:function(){var e=this;return this.state.filter.categories.length>0?this.loadPostWithFilter():(this.setState({loading:!0}),_.model("posts").fetch().then(function(t){var a=new x(t).orderBy("post_date DESC");I(a),e.setState({posts:a,loading:!1})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"row"},c.a.createElement("section",{className:"col-lg-3"},c.a.createElement("div",{className:"filter col-lg-12 toolbox"},c.a.createElement("div",{className:"toolbox_title d-flex justify-content-between "},"Filter",c.a.createElement("img",{className:"icon clickable d-none",alt:"back-btn",src:"assets/back-icon.png"})),c.a.createElement("ul",{className:"list-group toolbox_list"},this.state.categories.map(function(t){return c.a.createElement("li",{className:"d-flex justify-content-between",key:t},c.a.createElement("input",{type:"checkbox",id:t,checked:e.isCheck(t),onChange:e.onFilter}),c.a.createElement("label",{htmlFor:t},t))})))),c.a.createElement("section",{className:"offset-lg-1 col-lg-8"},this.state.loading?c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"ld ld-ring ld-cycle m-auto"})):this.state.posts.map(function(e){return c.a.createElement(P,{key:e.id,post:e})})))}}]),t}(c.a.Component),T=a(33),A=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).getRealPostByName=function(e){return new Promise(function(t,a){_.model("/posts").fetch().then(function(n){I(n);var c=n.find(function(t){return t.post_name=e});c?t(c):a({type:"not found"})})})},e.getPost=function(t){var a=function(e){var t=S(C.posts);if(t)return t.find(function(t){return t.post_name===e})}(t);a?e.setState({post:a}):e.getRealPostByName(t).then(function(t){return e.setState({post:t})})},e.state={post:{}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.getPost(e)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,this.state.post.post_title),c.a.createElement("p",{style:{marginBottom:".5rem"}},c.a.createElement("small",null,O(this.state.post.post_date))),c.a.createElement("p",{style:{marginBottom:".5rem"}},c.a.createElement("small",null,this.state.post.cats?this.state.post.cats.join(" | "):"")),c.a.createElement(T.Like,{showFaces:!0,share:!0}),c.a.createElement(T.CustomChat,{appId:"2149981848575767",pageId:"352177744968582"}),c.a.createElement("div",{className:"the_content container",dangerouslySetInnerHTML:{__html:this.state.post.post_content}}),c.a.createElement(T.Comments,{href:window.location.href,width:"100%"}))}}]),t}(c.a.Component),D=(a(213),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"header shadow navbar navbar-expand-sm"},c.a.createElement(k.a,{className:"header_logo m-auto",to:"/"},c.a.createElement("img",{alt:"logo",className:"img-fluid",src:"/assets/logo_header.png"})),c.a.createElement("div",{className:"container header_menu"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"navbar-item header_menu_item"},c.a.createElement(k.a,{to:"/"},"Tutorial")),c.a.createElement("li",{className:"navbar-item header_menu_item"},c.a.createElement(k.a,{to:"/cv"},"About Me"))),c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"navbar-item  right-item d-sm-none "},c.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100005466315478"},c.a.createElement("img",{className:"img-fluid header_icon",alt:"facebook-icon",src:"/assets/fb-icon.png"}))),c.a.createElement("li",{className:"navbar-item  right-item"},c.a.createElement("a",{href:"mailto:deverpham@gmail.com",className:"d-flex flex-nowrap align-items-end"},c.a.createElement("img",{className:"img-fluid header_icon",alt:"facebook-icon",src:"/assets/gg-icon.png"}),c.a.createElement("span",null,"deverpham@gmail.com"))))))}}]),t}(c.a.Component)),F=(a(215),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"cvpage container shadow"},c.a.createElement("div",{className:"brand d-flex justify-content-between "},c.a.createElement("div",{className:"brand_avatar "},c.a.createElement("img",{alt:"logo",src:"assets/logo.svg",className:"img-fluid"})),c.a.createElement("div",{className:"brand_contact"},c.a.createElement("div",{className:"brand_contact_email"},"deverpham@gmail.com"),c.a.createElement("div",{className:"brand_contact_phone"},"+841693231242"))),c.a.createElement("div",{className:"fix_content cvpage_general cv_margin"},c.a.createElement("div",{className:"section_order"},"01"),c.a.createElement("div",{className:"section_content d-flex flex-column"},c.a.createElement("div",{className:"fullname"},"Pham Hoang Thinh"),c.a.createElement("div",{className:"introduce"},"I'm a person who have real love with coding. I have learned about coding since i was 14 years old. Become a professional developer is my dream. I'm focusing web application and want to have experience about this industry. I'm looking for a company which has a professional environment, chances and  challenge because i want a long-term cooperation. I have 2 years experience and a good background programming then i can learn new technologies pretty fast so that is the key point for me can join any team and working well."))),c.a.createElement("div",{className:"fix_content cvpage_general cv_margin"},c.a.createElement("div",{className:"section_order"},"02"),c.a.createElement("div",{className:"section_content d-flex flex-column"},c.a.createElement("div",{className:"fullname"},"Skills"),c.a.createElement("div",{className:"skills d-flex flex-wrap"},c.a.createElement("div",{className:"skill"},c.a.createElement("img",{src:"assets/node_skill.png",alt:""}),c.a.createElement("span",null,"NodeJS")),c.a.createElement("div",{className:"skill"},c.a.createElement("img",{src:"assets/mysql_skill.png",alt:""}),c.a.createElement("span",null,"Mysql Database")),c.a.createElement("div",{className:"skill"},c.a.createElement("img",{src:"assets/react_skill.png",alt:""}),c.a.createElement("span",null,"ReactJS")),c.a.createElement("div",{className:"skill"},c.a.createElement("img",{src:"assets/python_skill.png",alt:""}),c.a.createElement("span",null,"Python "))))),c.a.createElement("div",{className:"fix_content education cv_margin"},c.a.createElement("div",{className:"section_order"},"03"),c.a.createElement("div",{className:"section_content d-flex flex-column"},c.a.createElement("div",{className:"fullname"},"Education"),c.a.createElement("div",{className:"educations d-flex flex-wrap"},c.a.createElement("div",{className:"education d-flex justify-content-between w-100"},c.a.createElement("div",{className:"education_description"},c.a.createElement("p",{className:"ed_title"},"University of Information Technology - UIT "),c.a.createElement("p",{className:"sub_desc"},"Networking")),c.a.createElement("div",{className:"ev_t"},"2014 - 2016"))))),c.a.createElement("div",{className:"fix_content education cv_margin"},c.a.createElement("div",{className:"section_order"},"04"),c.a.createElement("div",{className:"section_content d-flex flex-column"},c.a.createElement("div",{className:"fullname"},"Employment"),c.a.createElement("div",{className:"educations d-flex flex-wrap"},c.a.createElement("div",{className:"education d-flex justify-content-between w-100"},c.a.createElement("div",{className:"education_description"},c.a.createElement("p",{className:"ed_title"},"FPT SOFTWARE "),c.a.createElement("div",{className:"sub_desc"},c.a.createElement("ul",{className:"fix_desc"},c.a.createElement("li",null,"Freshser Developer, Junior Developer"),c.a.createElement("li",null,"Working on some small outsourcing task"),c.a.createElement("li",null,"Working with Scrum Agile"),c.a.createElement("li",null,"Working as Backend Developer"),c.a.createElement("li",null,"Building and maintain outsourcing production")))),c.a.createElement("div",{className:"ev_t"},"2015 - 2017")),c.a.createElement("div",{className:"education d-flex justify-content-between w-100"},c.a.createElement("div",{className:"education_description"},c.a.createElement("p",{className:"ed_title"},"FREELANCER.COM"),c.a.createElement("div",{className:"sub_desc"},c.a.createElement("ul",{className:"fix_desc"},c.a.createElement("li",null,"Completed 80+ outsourcing products"),c.a.createElement("li",null,"70+ 5 stars reviews + good feedbacks"),c.a.createElement("li",null,"https://www.freelancer.com/u/MyAwesomeTeam"),c.a.createElement("li",null,"Working with various technology"),c.a.createElement("li",null,"Become a fullstack developer.")))),c.a.createElement("div",{className:"ev_t"},"2017 - Present"))))),c.a.createElement("div",{className:"fix_content education cv_margin"},c.a.createElement("div",{className:"section_order"},"05"),c.a.createElement("div",{className:"section_content d-flex flex-column"},c.a.createElement("div",{className:"fullname"},"Projects"),c.a.createElement("div",{className:"educations d-flex flex-wrap"},c.a.createElement("div",{className:"education d-flex justify-content-between w-100"},c.a.createElement("div",{className:"education_description w-100"},c.a.createElement("p",{className:"ed_title"}," ELECTRONIC ESIGNATURE "),c.a.createElement("div",{className:"sub_desc"},c.a.createElement("ul",{className:"fix_desc"},c.a.createElement("li",null,"This is a SaaS provide Esignature service. People can sign their documents online and share with partners"),c.a.createElement("li",null,"Database: MongoDB, Redis Mem Cache"),c.a.createElement("li",null,"Front-End: Angular 2"),c.a.createElement("li",null,"Back-End: NodeJS, amz S3"))))),c.a.createElement("div",{className:"education d-flex justify-content-between w-100"},c.a.createElement("div",{className:"education_description w-100"},c.a.createElement("p",{className:"ed_title"},"SOCIAL REPORTING "),c.a.createElement("div",{className:"sub_desc"},c.a.createElement("ul",{className:"fix_desc"},c.a.createElement("li",null,"Social supports :  facebook, twitter, instagram"),c.a.createElement("li",null,"Database:  Sqlite"),c.a.createElement("li",null,"FE Technologies: Angular 5, Bootstrap 4"),c.a.createElement("li",null,"BE Technologies: NodeJS, Chrome Headless"),c.a.createElement("li",null,"Using for generating report Page, Profile to PDF format"))))),c.a.createElement("div",{className:"education d-flex justify-content-between w-100"},c.a.createElement("div",{className:"education_description w-100"},c.a.createElement("p",{className:"ed_title"},"QUIZZ APP "),c.a.createElement("div",{className:"sub_desc"},c.a.createElement("ul",{className:"fix_desc"},c.a.createElement("li",null,"A quizz Application. Public link:  ",c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://elecciones2018betsson.pe"},"https://elecciones2018betsson.pe")),c.a.createElement("li",null,"Database:  Mysql"),c.a.createElement("li",null,"FE Technologies: ReactJS, Bootstrap 4"),c.a.createElement("li",null,"BE Technologies: PHP CodeIgniter"))))),c.a.createElement("div",{className:"education d-flex justify-content-between w-100"},c.a.createElement("div",{className:"education_description w-100"},c.a.createElement("p",{className:"ed_title"},"BITCOIN WALLET"),c.a.createElement("div",{className:"sub_desc"},c.a.createElement("ul",{className:"fix_desc"},c.a.createElement("li",null,"A Crypto Currency Application. Provide a service where people can create wallet, send and receive BTC"),c.a.createElement("li",null,"Database:  MongoDB, Redis"),c.a.createElement("li",null,"FE Technologies: Angular 6"),c.a.createElement("li",null,"BE Technologies: NodeJS"))))),c.a.createElement("div",{className:"education d-flex justify-content-between w-100"},c.a.createElement("div",{className:"education_description w-100"},c.a.createElement("p",{className:"ed_title"},"BABY NAME GENERATOR"),c.a.createElement("div",{className:"sub_desc"},c.a.createElement("ul",{className:"fix_desc"},c.a.createElement("li",null,"Providing Name Creator. Parent can choose  list of characters and the application will generate baby name"),c.a.createElement("li",null,"Build with:  Wordpress CMS"))))),c.a.createElement("div",{className:"education d-flex justify-content-between w-100"},c.a.createElement("div",{className:"education_description w-100"},c.a.createElement("p",{className:"ed_title"},"IMAGING  DETECTION"),c.a.createElement("div",{className:"sub_desc"},c.a.createElement("ul",{className:"fix_desc"},c.a.createElement("li",null,"A Private Service. Help employees can detect similar images in local database"),c.a.createElement("li",null,"Front-End: Angular 4"),c.a.createElement("li",null,"Backend: Python, Flask"),c.a.createElement("li",null,"Party-Services: Amazon Rekognition"))))),c.a.createElement("small",{className:"text-center"},c.a.createElement("b",null,"Almost my projects are outsourcing so i dont have public url.I will show demo upon request. /* some sources are missing */"))))),c.a.createElement("div",{className:"fix_content education cv_margin"},c.a.createElement("div",{className:"section_order"},"06"),c.a.createElement("div",{className:"section_content d-flex flex-column"},c.a.createElement("div",{className:"fullname"},"Desire"),c.a.createElement("div",{className:"educations d-flex flex-wrap"},c.a.createElement("div",{className:"education d-flex justify-content-between w-100"},c.a.createElement("ul",{className:"fix_desc text-bold"},c.a.createElement("li",null,"Salary: $900 -> $1300"),c.a.createElement("li",null,"Professional Environment"),c.a.createElement("li",null,"Friendly co-worker and professional teammate")))))),c.a.createElement("h5",{className:"text-center"},c.a.createElement("i",null," ",c.a.createElement("b",null,"Thank For Reading"))))}}]),t}(c.a.Component)),R=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(T.FacebookProvider,{appId:"2149981848575767"},c.a.createElement(n.Fragment,null,c.a.createElement(D,null),c.a.createElement("div",{className:"container mt-5"},c.a.createElement(d.a,null,c.a.createElement(f.a,{exact:!0,path:"/",component:B}),c.a.createElement(f.a,{exact:!0,path:"/cv",component:F}),c.a.createElement(f.a,{exact:!0,path:"/posts/:id",component:A})))))}}]),t}(n.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(f.a,{component:R}))}}]),t}(n.Component),W=(a(218),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function J(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}_.init(),r.a.render(c.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");W?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):J(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):J(t,e)})}}()}},[[100,2,1]]]);
//# sourceMappingURL=main.0a3fd870.chunk.js.map