(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),i=a.n(r),o=(a(34),a(35),a(17),a(8)),s=a(9),l=a.n(s),u=a(63),h=a(66),j=a(28),d=a(64),m=a(67),b=(a(54),a(2));function g(e){var t=e.actor;return Object(b.jsx)("div",{className:"c-actor-card",children:Object(b.jsxs)(m.a,{children:[Object(b.jsx)(m.a.Img,{variant:"top",src:t.img}),Object(b.jsxs)(m.a.Body,{children:[Object(b.jsx)(m.a.Title,{children:Object(b.jsx)("a",{href:t.imdb,target:"_blank",children:"".concat(t.fname," ").concat(t.lname)})}),Object(b.jsx)(m.a.Text,{children:t.age})]})]})})}a(56);var f=a(11),p=a(27),O=function(){function e(t,a,n,c,r){Object(f.a)(this,e),"object"===typeof t?(this.fname=t.fname,this.lname=t.lname,this.birth=t.birth,this.img=t.img,this.imdb=t.imdb):(this.fname=t,this.lname=a,this.birth=n,this.img=c,this.imdb=r),this.age=this.getAge(this.birth)}return Object(p.a)(e,[{key:"getAge",value:function(e){var t=new Date(e),a=(new Date).getTime()-t.getTime();return Math.floor(a/315576e5)}}]),e}(),v=a(65);a(57);var x=function(e){var t=e.placeholder,a=e.searchText,n=e.onSearchChange,c=e.results,r=e.onResultSelected;return Object(b.jsxs)("div",{className:"c-searchbox",children:[Object(b.jsx)(h.a.Control,{type:"text",placeholder:t,value:a,onChange:function(e){return n(e.target.value)}}),Object(b.jsx)(v.a,{className:"result-box",children:c.map((function(e,t){return Object(b.jsx)(v.a.Item,{action:!0,onClick:function(){return r(t)},children:e})}))})]})},S=function e(t,a,n,c,r){Object(f.a)(this,e),this.name=t,this.length=a+" minutes",this.img=""===n?"":"https://image.tmdb.org/t/p/w500"+n,this.director=c.map((function(e){return e.name+" "})),this.mainStars=r.map((function(e){return e.character?e.name+" ("+e.character+") ":e.name+" "}))};a(61);var w=function(e){var t=e.movie;return Object(b.jsx)("div",{className:"c-movie-card",children:Object(b.jsxs)(m.a,{className:"c-card",children:[Object(b.jsx)(m.a.Img,{variant:"top",src:t.img}),Object(b.jsxs)(m.a.Body,{children:[Object(b.jsx)(m.a.Title,{children:t.name}),Object(b.jsx)(m.a.Text,{children:"Time: "+t.length}),Object(b.jsx)(m.a.Text,{children:"Directors: "+t.director}),Object(b.jsx)(m.a.Text,{children:"Main Stars: "+t.mainStars})]})]})})};function C(){Object(n.useEffect)((function(){console.log("actor,json");l.a.get("/movie-app-demo".concat("/actor.json")).then((function(e){console.log(e.data),r(e.data.map((function(e){return new O(e)})))})).catch((function(e){return console.error(e)}))}),[]);var e=c.a.useState([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=c.a.useState(""),s=Object(o.a)(i,2),m=s[0],f=s[1],p=c.a.useState("fname"),v=Object(o.a)(p,2),C=v[0],y=v[1],T=a.filter((function(e){return e.fname.toLowerCase().includes(m.toLowerCase())||e.lname.toLowerCase().includes(m.toLowerCase())}));T.sort((function(e,t){return e[C]>t[C]?1:e[C]<t[C]?-1:0}));var k=Object(n.useState)([]),N=Object(o.a)(k,2),_=N[0],I=N[1],L=Object(n.useState)(""),D=Object(o.a)(L,2),F=D[0],A=D[1],B=Object(n.useState)([]),G=Object(o.a)(B,2),U=G[0],M=G[1];return Object(b.jsxs)(u.a,{className:"p-actors",children:[Object(b.jsxs)(h.a.Row,{children:[Object(b.jsx)(h.a.Group,{sm:10,as:j.a,controlId:"formGridCity",children:Object(b.jsx)(h.a.Control,{value:m,placeholder:"filter by actors",onChange:function(e){return f(e.target.value)}})}),Object(b.jsx)(h.a.Group,{sm:2,as:j.a,controlId:"formGridState",children:Object(b.jsxs)(h.a.Control,{as:"select",value:C,onChange:function(e){return y(e.target.value)},children:[Object(b.jsx)("option",{value:"fname",children:"First Name"}),Object(b.jsx)("option",{value:"lname",children:"Last Name"}),Object(b.jsx)("option",{value:"age",children:"Age"})]})})]}),Object(b.jsx)(d.a,{children:T.map((function(e,t){return Object(b.jsx)(j.a,{lg:3,md:6,children:Object(b.jsx)(g,{actor:e},t)})}))}),Object(b.jsx)(x,{placeholder:"Search a movie...",searchText:F,onSearchChange:function(e){if(A(e),e){var t="https://api.themoviedb.org/3/search/movie?api_key=09848168e2201726ba2c5e6a70d11ac7&language=en-US&query="+e;l.a.get(t).then((function(e){return M(e.data.results)}))}else M([])},results:U.map((function(e){return e.original_title})),onResultSelected:function(e){var t=U[e].id;console.log("movie id: "+t);var a="https://api.themoviedb.org/3/movie/"+t+"?api_key=09848168e2201726ba2c5e6a70d11ac7&language=en-US",n=0,c="",r=[],i=[];l.a.get(a).then((function(t){n=t.data.runtime,console.log(n),I(_.concat(new S(U[e].title,n,c,i,r)))})),l.a.get("https://api.themoviedb.org/3/movie/"+t+"/images?api_key=09848168e2201726ba2c5e6a70d11ac7&language=en-US,null").then((function(t){c=t.data.posters[0]?t.data.posters[0].file_path:t.data.backdrops[0].file_path,console.log(c),console.log(t.data),I(_.concat(new S(U[e].title,n,c,i,r)))})),l.a.get("https://api.themoviedb.org/3/movie/"+t+"/credits?api_key=09848168e2201726ba2c5e6a70d11ac7&language=en-US").then((function(t){r=t.data.cast.filter((function(e,t){return t>5?null:e.name+" ("+e.character+")"})),i=t.data.crew.filter((function(e){return"Directing"===e.known_for_department?e.name:null})),console.log(r),console.log(i),I(_.concat(new S(U[e].title,n,c,i,r)))})),M([]),A("")}}),Object(b.jsx)(d.a,{className:"movie-row",children:_.map((function(e){return Object(b.jsx)(j.a,{lg:12,children:Object(b.jsx)(w,{movie:e})})}))})]})}var y=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(C,{})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),T()}},[[62,1,2]]]);
//# sourceMappingURL=main.8c80d971.chunk.js.map