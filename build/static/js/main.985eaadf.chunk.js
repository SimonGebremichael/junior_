(this.webpackJsonpjunior_=this.webpackJsonpjunior_||[]).push([[0],{26:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),r=c(18),n=c.n(r),j=c(19),a=c(2),o=c(8),l=c(10),d=c(12),b=c(11),h=c(17),x=c(0);Object(h.b)("user_rbuVxVRzM6JZvEhg86QKF");var O=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(e){return Object(o.a)(this,c),t.call(this,e)}return Object(l.a)(c,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(x.jsxs)("div",{id:"form",className:"section",children:[Object(x.jsxs)("div",{id:"qoutes",children:[Object(x.jsxs)("h3",{children:["Let us know you need & we'll get to you"," ",Object(x.jsx)("font",{color:"lightgreen",children:"ASAP"})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{}),Object(x.jsx)("th",{})]})}),Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"mon"}),Object(x.jsx)("td",{children:"7am - 5pm"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"tue"}),Object(x.jsx)("td",{children:"7am - 5pm"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"wed"}),Object(x.jsx)("td",{children:"7am - 5pm"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"thr"}),Object(x.jsx)("td",{children:"7am - 5pm"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"fri"}),Object(x.jsx)("td",{children:"7am - 5pm"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"sat"}),Object(x.jsx)("td",{children:"9am - 6pm"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"sun"}),Object(x.jsx)("td",{children:"9am - 6pm"})]})]})]}),Object(x.jsxs)("h3",{children:["Residential ",Object(x.jsx)("font",{color:"lightgreen",children:"+"})," Commerical"]}),Object(x.jsxs)("h3",{children:[Object(x.jsx)("font",{color:"lightgreen",children:"100%"})," Satisfaction Rate"]})]}),Object(x.jsxs)("form",{id:"formFeild",onSubmit:m,children:[Object(x.jsx)("h1",{children:"Contact Form"}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{id:"form_top",children:[Object(x.jsx)("p",{children:"Name:"}),Object(x.jsx)("p",{children:"Email:"}),Object(x.jsx)("input",{type:"text",placeholder:"Name",name:"name",id:"name"}),Object(x.jsx)("input",{type:"email",placeholder:"email",name:"email",id:"email"}),Object(x.jsx)("p",{children:"Phone Number:"}),Object(x.jsx)("p",{children:"Desired Date:"}),Object(x.jsx)("input",{type:"text",placeholder:"(123)-456-7890",name:"phonenumber",id:"phonenumber"}),Object(x.jsx)("input",{type:"date",name:"dateOfService",id:"dateOfService"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:"City:"}),Object(x.jsxs)("select",{id:"city",name:"city",children:[Object(x.jsx)("option",{defaultValue:"Kitchener",children:"Kitchener"}),Object(x.jsx)("option",{value:"Waterloo",children:"Waterloo"}),Object(x.jsx)("option",{value:"Guelph",children:"Quelph"}),Object(x.jsx)("option",{value:"Cambridge",children:"Cambridge"}),Object(x.jsx)("option",{value:"Other",children:"Other"})]}),Object(x.jsx)("p",{children:"Service:"}),Object(x.jsxs)("select",{id:"service",name:"service",children:[Object(x.jsx)("option",{defaultValue:"Framing",children:"Framing"}),Object(x.jsx)("option",{value:"Plubming",children:"Plubming"}),Object(x.jsx)("option",{value:"Electrical",children:"Electrical"}),Object(x.jsx)("option",{value:"Repair",children:"Repair"}),Object(x.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:"Description:"}),Object(x.jsx)("textarea",{rows:"5px",name:"des",id:"des",placeholder:"Any more information..."})]})]}),Object(x.jsx)("input",{type:"submit",id:"formSubmitBTN",value:"SEND"})]}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{id:"formOver",children:[Object(x.jsx)("center",{children:Object(x.jsx)("i",{class:"far fa-check-circle fa-5x"})}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("center",{children:[Object(x.jsx)("p",{children:"We appriciate your time & business"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:"You will hear from us within 2 business days."})]})]})})]})}}]),c}(s.a.Component);function m(e){e.preventDefault(),function(){for(var e=!0,t=[document.getElementById("name"),document.getElementById("email"),document.getElementById("dateOfService"),document.getElementById("des")],c=0;c<t.length;c++)t[c].value.length<=0?(e=!1,t[c].style.border="1px solid red"):t[c].style.border="none";return e}()&&h.a.sendForm("service_zokpqci","template_950qq1e",e.target,"user_rbuVxVRzM6JZvEhg86QKF").then((function(e){console.log("email status: "+e.text),"OK"==e.text&&(document.getElementById("formFeild").style.display="none",document.getElementById("formOver").style.display="block")}),(function(e){return console.log("email status: "+e.text)}))}c(26);var u=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"componentDidMount",value:function(){for(var e=document.getElementsByClassName("previews"),t=0;t<e.length;t++)e[t].addEventListener("mouseover",(function(e){var t=e.target.id;document.getElementById("preview").style.gridTemplateColumns="1"==t?"25% 16.66% 16.66% 16.66% 25%":"2"==t?"16.66% 25% 16.66% 16.66% 25%":"3"==t?"16.66% 16.66% 25% 16.66% 25%":"16.66% 16.66% 16.66% 25% 25%"})),e[t].addEventListener("mouseout",(function(){return document.getElementById("preview").style.gridTemplateColumns="18.75% 18.75% 18.75% 18.75% 25%"}))}},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("header",{children:[Object(x.jsx)("h1",{children:"Junior'S HMS"}),Object(x.jsx)("a",{href:"#about",children:Object(x.jsx)("p",{children:"Services \u2193"})}),Object(x.jsx)("a",{href:"#form",children:Object(x.jsx)("p",{children:"Location \u2193"})}),Object(x.jsx)("a",{href:"#form",children:Object(x.jsx)("p",{children:"Contact Us \u2193"})}),Object(x.jsx)("a",{href:"#review",children:Object(x.jsx)("p",{children:"Reviews \u2193"})})]}),Object(x.jsxs)("div",{id:"intro",children:[Object(x.jsxs)("div",{id:"slide1",children:[Object(x.jsxs)("h1",{children:["JS ",Object(x.jsx)("br",{}),"HANDYMAN",Object(x.jsx)("br",{}),"SERVICE"]}),Object(x.jsxs)("div",{id:"socials",children:[Object(x.jsx)("i",{className:"fab fa-facebook-square fa-2x"}),Object(x.jsx)("i",{className:"fab fa-linkedin fa-2x"}),Object(x.jsx)("i",{className:"fab fa-twitter-square fa-2x"}),Object(x.jsx)("i",{className:"fas fa-envelope fa-2x"}),Object(x.jsx)("i",{className:"fas fa-phone-square-alt fa-2x"})]}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"#form",children:Object(x.jsx)("button",{children:"Book A Service"})})]}),Object(x.jsx)("div",{id:"images",children:Object(x.jsx)(p,{data:g})})]}),Object(x.jsxs)("div",{id:"about",children:[Object(x.jsx)("center",{children:Object(x.jsx)("h1",{children:"What We Do"})}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("center",{children:Object(x.jsx)("p",{id:"about_des",children:"We provide top of the line repairs and installations. We offer a varity of services to meet your needs. Built with your satisfaction in mind. Book a service and we will get back to you ASAP."})}),Object(x.jsxs)("div",{id:"about_bottom",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{className:"fas fa-tools fa-5x"}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:"Repairs / Plumbing"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"#form",children:Object(x.jsx)("button",{children:"Book"})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{className:"fas fa-home fa-5x"}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:"Framing"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"#form",children:Object(x.jsx)("button",{children:"Book"})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{className:"fas fa-plug fa-5x"}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:"Electrical Work"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"#form",children:Object(x.jsx)("button",{children:"Book"})})]})]})]}),Object(x.jsx)("div",{className:"section",children:Object(x.jsx)("h2",{children:"Hear from our Clients:"})}),Object(x.jsx)("br",{}),Object(x.jsx)(v,{reviews:y}),Object(x.jsxs)("div",{id:"preview",className:"section",children:[Object(x.jsxs)("div",{className:"container previews",id:"1",children:[Object(x.jsx)("img",{src:"imgs/pic35.jpg",alt:"Before"}),Object(x.jsx)("div",{className:"text-block",children:Object(x.jsx)("h3",{children:"Before"})})]}),Object(x.jsxs)("div",{className:"container previews",id:"2",children:[Object(x.jsx)("img",{src:"imgs/pic34.jpg"}),Object(x.jsx)("div",{className:"text-block",children:Object(x.jsx)("h3",{children:"After"})})]}),Object(x.jsxs)("div",{className:"container previews",id:"3",children:[Object(x.jsx)("img",{src:"imgs/pic15.jpg"}),Object(x.jsx)("div",{className:"text-block",children:Object(x.jsx)("h3",{children:"Before"})})]}),Object(x.jsxs)("div",{className:"container previews",id:"4",children:[Object(x.jsx)("img",{src:"imgs/pic25.jpg"}),Object(x.jsx)("div",{className:"text-block",children:Object(x.jsx)("h3",{children:"After"})})]}),Object(x.jsxs)("div",{id:"preData",children:[Object(x.jsxs)("h2",{children:["Flooring Starting at"," ",Object(x.jsxs)("font",{color:"lightgreen",children:["$199.",Object(x.jsx)("sup",{children:"99"})]})]}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:"Top quality and long lasting tiles made for your satisfaction. Book a Flooring service now"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"#form",children:Object(x.jsx)("button",{children:"Book"})})]})]}),Object(x.jsx)(O,{}),Object(x.jsxs)("footer",{children:[Object(x.jsx)("p",{children:"Contact us:"}),Object(x.jsx)("i",{className:"fas fa-phone-alt"}),Object(x.jsx)("p",{children:"(647) 888-3079"}),Object(x.jsx)("i",{className:"fas fa-envelope"}),Object(x.jsx)("p",{children:Object(x.jsx)("a",{href:"mailto:Trades.man@outlook.com",children:"Trades.man@outlook.com"})}),Object(x.jsx)("i",{className:"fas fa-business-time"}),Object(x.jsx)("p",{children:"Business hours: mon-fri: 7am - 5pm | sat-sun: 9am - 6pm"})]})]})}}]),c}(s.a.Component);function p(e){return Object(x.jsx)(x.Fragment,{children:e.data.map((function(e,t){return Object(x.jsxs)("div",{className:"container",id:"cont"+t,onMouseOver:function(){return f(t,!0)},onMouseOut:function(){return f(t,!1)},children:[Object(x.jsx)("img",{src:"./imgs/pic"+e.img+".jpg",alt:"promo"}),Object(x.jsxs)("div",{className:"text-block",id:"text"+t,children:[Object(x.jsx)("h3",{children:e.name}),Object(x.jsx)("p",{id:"inner"+t,children:e.des}),Object(x.jsx)("a",{href:"#form",children:Object(x.jsx)("button",{id:"innerLink"+t,children:"Book"})})]})]},t)}))})}function f(e,t){var c=document.getElementById("innerLink"+e),i=document.getElementById("text"+e),s=document.getElementById("inner"+e);t?(i.style.height="80%",c.style.display="block",s.style.display="block"):(i.style.height="15%",c.style.display="none",s.style.display="none")}function v(e){return Object(x.jsx)("div",{id:"review",className:"section",children:e.reviews.map((function(e,t){return Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:e.review+"-"+e.from})},t)}))})}var g=[{name:"Flooring",des:"Repared and rebuilt with a varity of styles and qualities made for your satisfaction, contac us to learn a bit more!",img:"19"},{name:"Plumbing",des:"Wheather pipes, baths, sinks, toilets we can help you get you items back in working order",img:"26"},{name:"Framing",des:"Reliable, long lasting wood frames to keep your frames intact. Available various types of wood of your choice!",img:"14"},{name:"Electrical",des:"Be it a power outage, outlet shortcuits, or decayed breakers we can get your place back online",img:"38"},{name:"Shower Tiles",des:"Water resistent and beautiful tiles for your showers. ",img:"39"},{name:"Floor Tiles",des:"Durable and in variuse qualities for your floor needs, The next step is to book a floor renovations",img:"22"},{name:"Renovations",des:"Reinvent, rearage and rebuild your place into the place of your dreams. Give your living space a new remodel!",img:"12"},{name:"Repairs",des:"Get your item back to order order, We repair plumbing, electrical, infurstructure issues. Contact us for more information",img:"18"},{name:"Doors & Windows",des:"Strong Doors and beautiful Windows, We service a varity of what you may need. Contact us to learn a bit more.",img:"7"}],y=[{review:"Long lasting tiles for our kitchen, great work.",from:"james"},{review:"Pricing is low for the quality of service and expertise that you receive.",from:"katie"},{review:"I cant even begin to express how happy we were with the incredible job that was done.",from:"Rishi"}];function w(){return Object(x.jsx)(j.a,{children:Object(x.jsx)(a.c,{children:Object(x.jsx)(a.a,{path:"*",component:u})})})}n.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.985eaadf.chunk.js.map