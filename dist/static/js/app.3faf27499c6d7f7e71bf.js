webpackJsonp([0],{EUfB:function(t,e){},Mac1:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},i,!1,function(t){a("kYl7")},null,null).exports,n=a("/ocq"),o={name:"search",data:function(){return{text:""}},watch:{text:function(t){console.log(t),this.$emit("search-by-text",t)}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("span",[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.text,expression:"text",modifiers:{lazy:!0}}],attrs:{placeholder:"Search for a movie, TV show, person...",autocomplete:"off"},domProps:{value:t.text},on:{change:function(e){t.text=e.target.value}}})])])},staticRenderFns:[]};var l=a("VU/8")(o,c,!1,function(t){a("wd5i")},"data-v-2e405812",null).exports,v={name:"filters",data:function(){return{sort_by:"popularity.desc"}},methods:{show_fave:function(t){console.log("favorite")},year:function(){this.sort_by="release_date.desc",this.$emit("change-order",this.sort_by)},popular:function(){this.sort_by="popularity.desc",this.$emit("change-order",this.sort_by)},topic:function(){this.sort_by="revenue.desc",this.$emit("change-order",this.sort_by)}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top_block"},[t._m(0),t._v(" "),a("div",{staticClass:"right_panel"},[a("div",{staticClass:"drop-down"},[a("button",[t._v("Filter")]),t._v(" "),a("ul",[a("li",[a("a",{on:{click:t.show_fave}},[t._v("Show only favourite")])])])]),t._v(" "),a("div",{staticClass:"drop-down"},[a("button",[t._v("Sort by")]),t._v(" "),a("ul",[a("li",[a("a",{class:["popularity.desc"===t.sort_by?"active":""],on:{click:t.popular}},[t._v("Popularity")])]),t._v(" "),a("li",[a("a",{class:["release_date.desc"===t.sort_by?"active":""],on:{click:t.year}},[t._v("Year")])]),t._v(" "),a("li",[a("a",{class:["revenue.desc"===t.sort_by?"active":""],on:{click:t.topic}},[t._v("Revenue")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block"},[e("h2",[this._v("Popular movies")])])}]};var _=a("VU/8")(v,d,!1,function(t){a("EUfB")},"data-v-24dd684c",null).exports,u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card_image",style:"background: url(https://image.tmdb.org/t/p/w370_and_h556_bestv2"+t.backdrop_path+")"}),t._v(" "),a("div",{staticClass:"description"},[a("div",{staticClass:"title-block"},[a("div",{staticClass:"title"},[a("h3",[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"data"},[t._v(t._s(t.release_date))])]),t._v(" "),a("a",{staticClass:"liked",attrs:{href:"#"}})]),t._v(" "),a("div",{staticClass:"text"},[a("p",[t._v(t._s(t.overview))])]),t._v(" "),a("div",{staticClass:"hor-line"}),t._v(" "),a("span",[a("a",{attrs:{href:"#/movie/"+t.id}},[t._v("More info")])])])])},staticRenderFns:[]};var p=a("VU/8")({name:"movie_card",props:["title","release_date","overview","id","backdrop_path"]},u,!1,function(t){a("P/G9")},"data-v-42580d7d",null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu"},[a("ul",[a("li",[a("a",{staticClass:"logo",attrs:{href:"/"}})]),t._v(" "),a("li",[a("a",{attrs:{href:"/"}},[t._v("DISCOVER")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("MOVIES")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("TV SHOWS")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("PEOPLE")])])])])}]};var f=a("VU/8")({name:"my_menu"},h,!1,function(t){a("Sa5N")},"data-v-7852c93a",null).exports,m=function(t){var e=t.current_page,a="https://api.themoviedb.org/3/discover/movie?api_key=d287f7efa21397cd3e24683fc931cfb4&page="+e+"&sort_by="+t.sort_by,s="https://api.themoviedb.org/3/search/movie?api_key=d287f7efa21397cd3e24683fc931cfb4&query="+t.text+"&page="+e;""!==t.text&&(a=s),console.log(a);var i=new Request(a);fetch(i).then(function(e){e.json().then(function(e){t.total_pages=e.total_pages,console.log(e);for(var a=0;a<e.results.length;a++){var s=e.results[a];s.overview.length>150&&(s.overview=s.overview.slice(0,150)+"..."),t.items.push(s)}t.current_page+=1})})},b={name:"HelloWorld",components:{movie_card:p,search:l,filters:_,my_menu:f},data:function(){return{current_page:1,total_pages:0,items:[],sort_by:"popularity.desc",text:""}},created:function(){m(this)},methods:{load_more:function(t){m(this)},onChangeOrder:function(t){t!==this.sort_by&&(this.sort_by=t,this.current_page=1,this.items.splice(0,this.items.length),m(this))},searchByText:function(t){t!==this.text&&(this.text=t,this.current_page=1,this.items.splice(0,this.items.length),m(this))}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("my_menu"),t._v(" "),a("search",{on:{"search-by-text":t.searchByText}}),t._v(" "),a("div",{staticClass:"movies_wrapper"},[0===t.text.length?a("filters",{on:{"change-order":t.onChangeOrder}}):t._e(),t._v(" "),a("div",{staticClass:"movies_cards"},t._l(t.items,function(t){return a("movie_card",{attrs:{title:t.title,release_date:t.release_date,overview:t.overview,id:t.id,backdrop_path:t.backdrop_path}})})),t._v(" "),t.current_page<t.total_pages?a("button",{on:{click:t.load_more}},[t._v("Load more")]):t._e()],1)],1)},staticRenderFns:[]};var y=a("VU/8")(b,g,!1,function(t){a("yK/F")},"data-v-6f6421b1",null).exports,w={name:"movie",components:{my_menu:f},data:function(){return{title:"",release_date:"",overview:"",backdrop_path:""}},created:function(){var t=this,e=new Request("https://api.themoviedb.org/3/movie/"+this.$route.params.id+"?api_key=d287f7efa21397cd3e24683fc931cfb4");fetch(e).then(function(e){e.json().then(function(e){t.title=e.title,console.log(e),t.release_date=e.release_date,t.overview=e.overview,t.backdrop_path=e.backdrop_path})})}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("my_menu"),t._v(" "),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card_image",style:"background: url(https://image.tmdb.org/t/p/w370_and_h556_bestv2"+t.backdrop_path+")"}),t._v(" "),a("div",{staticClass:"description"},[a("div",{staticClass:"title-block"},[a("div",{staticClass:"title"},[a("h1",[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"data"},[t._v(t._s(t.release_date))])]),t._v(" "),a("div",{staticClass:"text"},[a("h3",[t._v("Overview")]),t._v(" "),a("p",[t._v(t._s(t.overview))])])])])])])],1)},staticRenderFns:[]};var k=a("VU/8")(w,C,!1,function(t){a("Mac1")},"data-v-719fdcad",null).exports;s.a.use(n.a);var x=new n.a({routes:[{path:"/",name:"movie_searcher",component:y},{path:"/movie/:id",name:"movie",component:k}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:x,components:{App:r},template:"<App/>"})},"P/G9":function(t,e){},Sa5N:function(t,e){},kYl7:function(t,e){},wd5i:function(t,e){},"yK/F":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3faf27499c6d7f7e71bf.js.map