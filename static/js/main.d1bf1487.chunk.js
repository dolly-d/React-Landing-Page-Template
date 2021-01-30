(this["webpackJsonplandingpage-react-template"]=this["webpackJsonplandingpage-react-template"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"Header":{"title":"Welcome ","paragraph":"Fancy seeing you here! My name is Dolly and I\'m a software engineer. Click around to get to know me."},"About":{"paragraph":"Hello! My name is Dolly and I\'m a Full Stack Software Engineer who enjoys building beautiful applications and troubleshooting through problems. I am a Brooklyn native who loves traveling, beauty, fashion, gaming, health, fitness & so much more! Before transitioning into Software Engineering, I was a brand specialist at Bergdorf Goodman and after 10 years, I was ready to challenge myself and move into a career that will always keep me learning. ","Why":["Ruby on Rails","Javascript","ReactJS","React Native"],"Why2":["Firebase","PostgreSQL","SQLite","NoSQL"]},"Team":[{"img":"img/team/01.jpg","name":"John Doe","job":"Director"},{"img":"img/team/02.jpg","name":"Mike Doe","job":"Senior Designer"},{"img":"img/team/03.jpg","name":"Jane Doe","job":"Senior Designer"},{"img":"img/team/04.jpg","name":"Karen Doe","job":"Project Manager"}],"Contact":{"address":"Brooklyn, NY ","phone":"347-683-5309","email":"dolly.desir@gmail.com","twitter":"https://twitter.com/dollicodes","youtube":"https://www.youtube.com/channel/UC_R2bMW1tLFDQbQqqkDSj7w","medium":"https://dolly-desir.medium.com/","linkedin":"https://www.linkedin.com/in/dollydesir/"},"Features":[{"icon":"fa fa-leaf","title":"Plantbae","demo":"https://youtu.be/pJTmZwpil18","text":"Mobile social app where users can add posts, comments and likes. Users can follow & unfollow other users & update their personal profile","tech":"Firebase & ReactNative"},{"icon":"fa fa-shopping-cart","demo":"https://youtu.be/YL1VtFR-Spg","title":"Brooklyn\'s Bloom","text":"A Ruby on Rails eCommerce app where users can purchase an assortment of plants and see their purchase history.","tech":"Ruby on Rails"},{"icon":"fa fa-headphones","demo":"https://youtu.be/eqXl4FJBuiw","title":"JS Piano","text":"Fully functional Piano that allows users to play the piano with real notes. Users can create, save, edit and delete sound sequences. ","tech":"Rails & Vanilla JS"}]}')},20:function(e,a,t){e.exports=t(30)},25:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r),o=(t(25),t(1)),s=t(2),i=t(3),m=t(4),d=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.qod.contents&&this.props.qod.contents.quotes[0].quote,a=this.props.qod.contents&&this.props.qod.contents.quotes[0].author;return console.log(a),l.a.createElement("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"}," ",l.a.createElement("span",{className:"sr-only"},"Toggle navigation")," ",l.a.createElement("span",{className:"icon-bar"})," ",l.a.createElement("span",{className:"icon-bar"})," ",l.a.createElement("span",{className:"icon-bar"})," "),l.a.createElement("a",{className:"navbar-brand page-scroll",href:"#page-top"},e)," ",l.a.createElement("p",null,a)),l.a.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",null,l.a.createElement("a",{href:"#about",className:"page-scroll"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#features",className:"page-scroll"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact",className:"page-scroll"},"Contact"))))))}}]),t}(n.Component),p=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{id:"header"},l.a.createElement("div",{className:"intro"},l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 col-md-offset-2 intro-text"},l.a.createElement("h1",null,this.props.data?this.props.data.title:"Loading",l.a.createElement("span",null)),l.a.createElement("p",null,this.props.data?this.props.data.paragraph:"Loading"),l.a.createElement("a",{href:"#about",className:"btn btn-custom btn-lg page-scroll"},"About Me")," "))))))}}]),t}(n.Component),u=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"features",className:"text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1 section-title"},l.a.createElement("h2",null,"Projects")),l.a.createElement("div",{className:"row"},this.props.data?this.props.data.map((function(e,a){return l.a.createElement("div",{key:"".concat(e.title,"-").concat(a),className:"col-xs-6 col-md-3"}," ",l.a.createElement("i",{className:e.icon}),l.a.createElement("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer"}," ",l.a.createElement("h3",null,l.a.createElement("u",null,e.title))),l.a.createElement("p",null,e.text),"---",l.a.createElement("p",null,e.tech))})):"Loading...")))}}]),t}(n.Component),h=t(40),g=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("main",{className:"grid"},l.a.createElement(h.a,{alignItems:"center"},l.a.createElement("img",{src:"img/Me.jpg",width:"50",alt:""})),l.a.createElement(h.a,{alignSelf:"flex-end"},l.a.createElement("img",{src:"img/Me2.jpg",width:"50",alt:""})),l.a.createElement(h.a,null," ",l.a.createElement("img",{src:"img/Me3.jpg",width:"50",alt:""})),l.a.createElement("div",{className:"col-xs-12 col-md-6"}," ")),l.a.createElement("div",{className:"col-xs-12 col-md-6"},l.a.createElement("div",{className:"about-text"},l.a.createElement("p",null,this.props.data?this.props.data.paragraph:"loading..."),l.a.createElement("h2",null,"Tech Stack"),l.a.createElement("div",{className:"list-style"},l.a.createElement("div",{className:"col-lg-6 col-sm-6 col-xs-12"},l.a.createElement("ul",null,this.props.data?this.props.data.Why.map((function(e,a){return l.a.createElement("li",{key:"".concat(e,"-").concat(a)},e)})):"loading")),l.a.createElement("div",{className:"col-lg-6 col-sm-6 col-xs-12"},l.a.createElement("ul",null,this.props.data?this.props.data.Why2.map((function(e,a){return l.a.createElement("li",{key:"".concat(e,"-").concat(a)}," ",e)})):"loading"))))))))}}]),t}(n.Component),E=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).clearForm=function(){e.setState({name:"",email:"",message:""})},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null,"Get In Touch"),l.a.createElement("p",null,"Please fill out the form below to send me an email.")),l.a.createElement("form",{name:"sentMessage",id:"contactForm",noValidate:!0},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{name:"name",type:"text",id:"name",className:"form-control",placeholder:"Name",required:"required"}),l.a.createElement("p",{className:"help-block text-danger"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{name:"email",type:"email",id:"email",className:"form-control",placeholder:"Email",required:"required"}),l.a.createElement("p",{className:"help-block text-danger"})))),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{name:"message",id:"message",className:"form-control",rows:"4",placeholder:"Message",required:"required"}),l.a.createElement("p",{className:"help-block text-danger"})),l.a.createElement("div",{id:"success"}),l.a.createElement("button",{type:"submit",className:"btn btn-custom btn-lg"},"Send Message")))),l.a.createElement("div",{className:"col-md-3 col-md-offset-1 contact-info"},l.a.createElement("div",{className:"contact-item"},l.a.createElement("h4",null,"Contact Info"),l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-map-marker"})," Address"),this.props.data?this.props.data.address:"loading")),l.a.createElement("div",{className:"contact-item"},l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-phone"})," Phone")," ",this.props.data?this.props.data.phone:"loading")),l.a.createElement("div",{className:"contact-item"},l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-envelope-o"})," Email")," ",this.props.data?this.props.data.email:"loading"))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:this.props.data?this.props.data.twitter:"/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{href:this.props.data?this.props.data.youtube:"/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-youtube"}))),l.a.createElement("li",null,l.a.createElement("a",{href:this.props.data?this.props.data.medium:"/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-medium"}))),l.a.createElement("li",null,l.a.createElement("a",{href:this.props.data?this.props.data.github:"/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-github"}))),l.a.createElement("li",null,l.a.createElement("a",{href:this.props.data?this.props.data.linkedin:"/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-linkedin-square"}))))))))))}}]),t}(n.Component),f=t(17),b=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={landingPageData:{},qodArray:{}},e}return Object(s.a)(t,[{key:"getlandingPageData",value:function(){this.setState({landingPageData:f})}},{key:"componentDidMount",value:function(){this.getlandingPageData(),this.getQOD()}},{key:"getQOD",value:function(){var e=this,a=new Headers;a.append("X-TheySaidSo-Api-Secret","dollipop"),fetch("https://quotes.rest/qod?language=en",{method:"GET",headers:a,redirect:"follow"}).then((function(e){return e.text()})).then((function(a){return e.setState({qodArray:JSON.parse(a)})})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,{qod:this.state.qodArray}),l.a.createElement(p,{data:this.state.landingPageData.Header}),l.a.createElement(g,{data:this.state.landingPageData.About}),l.a.createElement(u,{data:this.state.landingPageData.Features}),l.a.createElement(E,{data:this.state.landingPageData.Contact}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.d1bf1487.chunk.js.map