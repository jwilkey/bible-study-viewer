(function(t){function e(e){for(var s,o,a=e[0],c=e[1],u=e[2],p=0,f=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},r={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07f0":function(t,e,n){"use strict";var s=n("39ef"),r=n.n(s);r.a},"094a":function(t,e,n){},"0b87":function(t,e,n){"use strict";var s=n("61c8"),r=n.n(s);r.a},1493:function(t,e,n){"use strict";var s=n("4058"),r=n.n(s);r.a},"15fd":function(t,e,n){"use strict";var s=n("dd39"),r=n.n(s);r.a},"2aa4":function(t,e,n){"use strict";var s=n("a272"),r=n.n(s);r.a},"39ef":function(t,e,n){},4058:function(t,e,n){},"43f3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-fill flex-column",style:t.styles,attrs:{id:"app"}},[n("titlebar"),n("router-view",{staticClass:"flex-one scrolly"})],1)},i=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("75fc")),a=n("bd86"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title-bar flex-row"},[n("div",{staticClass:"title flex-one",on:{click:function(e){return t.$router.push("books")}}},[t._v(t._s(t.title))])]),n("score")],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.study?n("div",{staticClass:"score"},[n("div",{staticClass:"score-bar score-observe"},t._l(t.observeTotal,(function(e,s){return n("div",{key:s,staticClass:"score-activity",class:{complete:s<t.observeComplete}})})),0),n("div",{staticClass:"score-bar score-interpret",class:{opacity40:t.observeComplete<3}},t._l(t.interpretTotal,(function(e,s){return n("div",{key:s,staticClass:"score-activity",class:{complete:s<t.interpretComplete}})})),0),n("div",{staticClass:"score-bar score-application",class:{opacity30:t.interpretComplete<2}},t._l(t.applicationTotal,(function(e,s){return n("div",{key:s,staticClass:"score-activity",class:{complete:s<t.applicationComplete}})})),0)]):t._e()},p=[],f=n("2f62");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={name:"Score",computed:m({},Object(f["c"])(["study","score"]),{observeMeta:function(){return this.score.observe.meta()},interpretMeta:function(){return this.score.interpret.meta()},applicationMeta:function(){return this.score.application.meta()},observeTotal:function(){return parseInt(this.observeMeta.total)},interpretTotal:function(){return parseInt(this.interpretMeta.total)},applicationComplete:function(){return parseInt(this.applicationMeta.complete)},observeComplete:function(){return parseInt(this.observeMeta.complete)},interpretComplete:function(){return parseInt(this.interpretMeta.complete)},applicationTotal:function(){return parseInt(this.applicationMeta.total)}})},y=v,h=(n("9bb5"),n("2877")),b=Object(h["a"])(y,l,p,!1,null,"16bb3150",null),g=b.exports;function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var j={name:"Titlebar",components:{Score:g},computed:_({},Object(f["c"])(["studyMeta"]),{title:function(){return this.studyMeta?this.studyMeta.title:"Scripture Studies"}})},w=j,C=(n("0b87"),Object(h["a"])(w,c,u,!1,null,"36699afd",null)),x=C.exports;function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k={name:"App",components:{Titlebar:x},computed:P({},Object(f["c"])(["studyMeta"]),{styles:function(){var t=this,e=P({},this.studyMeta).colors||{},n=Object.assign.apply(Object,[{}].concat(Object(o["a"])(Object.keys(e).map((function(e){return Object(a["a"])({},"--".concat(e),t.studyMeta.colors[e])})))));return n}})},E=k,D=(n("5c0b"),Object(h["a"])(E,r,i,!1,null,null,null)),I=D.exports,M=(n("7f7f"),n("8c4f")),T=(n("20d6"),n("28aa")),$=n("bfa9"),A=(n("8615"),function(t){var e={observe:{},interpret:{},application:{}};return Object.keys(q.observe).forEach((function(n){e.observe[n]={complete:L(t.observe[n])}})),Object.keys(q.interpret).forEach((function(n){e.interpret[n]={complete:L(t.interpret[n])}})),Object.keys(q.application).forEach((function(n){e.application[n]={complete:L(t.application[n])}})),e.observe.meta=function(){return{complete:Object.values(e.observe).filter((function(t){return t.complete})).length,total:Object.values(e.observe).filter((function(t){return"function"!==typeof t})).length}},e.interpret.meta=function(){return{complete:Object.values(e.interpret).filter((function(t){return t.complete})).length,total:Object.values(e.interpret).filter((function(t){return"function"!==typeof t})).length}},e.application.meta=function(){return{complete:Object.values(e.application).filter((function(t){return t.complete})).length,total:Object.values(e.application).filter((function(t){return"function"!==typeof t})).length}},e}),L=function t(e){var n=function(){return e.length>0&&e.every(t)},s=function(){return Object.keys(e).length>0&&Object.values(e).every(t)};return!!e&&(!!Array.isArray(e)&&n()||e instanceof Object&&s()||"string"===typeof e&&e.length>0)},q={passage:"PHILEMON.1.23-PHILEMON.1.25",text:"./public/texts/philemon/STUDY_5.txt",observe:{people:["array of strings"],nouns:["array of strings"],adjectives:["array of strings"],actions:["array of strings"],persons:{God:["array of strings"],Author:["array of strings"],Audience:["array of strings"],MainCharacter:["array of strings"]},definitions:{Word:"definition"}},interpret:{mainPoint:"string",keywords:["array of strings"]||!1,points:["array of strings"],titles:["array of strings"],emotions:{emotion:"argument for the presence of the emotion"},unwisdom:[{passage:"REFERENCE.1.1-5",saying:"unwise saying",comment:"comment on unwise saying",chapter:"string"}],expound:[{one:"simple statement from text",two:"add emotive value",three:"add intrigue",four:"add complexity"}]},application:{conversation:[{question:"conversation question accessible to any audience"}],ACTS:{adoration:["questions derived from the text which inspire adoration"],confession:["questions derived from the text which facilitate confession of sin"],thanks:["questions derived from the text which foster thankfulness"],supplication:["questions derived from the text which inform requests to God"]},integrity:[{question:"",will:0,intellect:0,fantasy:0,comment:""}]}};function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}s["a"].use(f["a"]);var V=new $["a"]({storage:window.localStorage}),U={studies:[],book:"1john",studyMeta:null,studyIndex:0,study:null,text:null,score:null},R=Object(T["a"])(U);R.getters.score=function(t){return A(t.study)},R.actions.deleteStudy=function(t,e){var n=t.dispatch,s=t.state,r=s.studies.findIndex((function(t){return t.source===e.source}));s.studies.splice(r,1),n("setStudies",s.studies)};var H=new f["a"].Store(B({state:U},R,{plugins:[V.plugin]})),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home v-fill flex-column"},[n("navigation"),t.study?n("div",{staticClass:"flex-one p4-top scrolly"},[n("text-outline",{staticClass:"textoutline p0-bottom z2"}),n("hanging-tabs",{attrs:{items:t.observations},model:{value:t.observation,callback:function(e){t.observation=e},expression:"observation"}}),n("transition",{attrs:{name:"fade-in"}},[t.O("persons")?n("persons",{attrs:{items:t.study.observe.persons}}):t._e(),t.O("definitions")?n("definitions",{attrs:{items:t.study.observe.definitions}}):t._e(),t.isObservationList?n("block-list",{attrs:{items:t.study.observe[t.observation.toLowerCase()]}}):t._e()],1),n("hr",{staticClass:"border-primary"}),n("div",{staticClass:"card no-left-border m0-bottom z1"},[n("div",{staticClass:"content p1"},[n("h2",{staticClass:"primary uppercase"},[t._v("Main Point")]),n("p",{staticClass:"primary"},[t._v(t._s(t.study.interpret.mainPoint||"---"))])])]),n("hanging-tabs",{attrs:{items:t.interpretations},model:{value:t.interpretation,callback:function(e){t.interpretation=e},expression:"interpretation"}}),n("transition",{attrs:{name:"fade-in"}},[t.I("titles")?n("block-list",{attrs:{items:t.study.interpret.titles}}):t._e(),t.I("points")?n("block-list",{attrs:{items:t.study.interpret.points}}):t._e(),t.I("keywords")?n(t.componentFor(t.study.interpret.keywords),{tag:"component",attrs:{items:t.study.interpret.keywords}}):t._e(),t.I("emotions")?n(t.componentFor(t.study.interpret.emotions),{tag:"component",attrs:{items:t.study.interpret.emotions}}):t._e(),t.I("unwisdom")?n("unwisdom",{attrs:{items:t.unwisdoms}}):t._e(),t.I("expound")?n("expound",{attrs:{items:t.expounds}}):t._e()],1),n("hr",{staticClass:"border-primary"}),t._m(0),n("hanging-tabs",{attrs:{items:t.applications},model:{value:t.application,callback:function(e){t.application=e},expression:"application"}}),n("transition",{attrs:{name:"fade-in"}},[t.A("conversation")?n("conversation",{attrs:{items:t.conversation}}):t._e(),t.A("ACTS")?n("div",{staticClass:"content p2"},t._l(t.study.application.ACTS,(function(e,s){return n("div",{key:s},[n("h3",[t._v(t._s(s))]),t._l(e,(function(e,s){return n("div",{key:s,staticClass:"card"},[t._v(" "+t._s(e)+" ")])}))],2)})),0):t._e(),t.A("integrity")?n("integrity",{attrs:{items:t.integrity}}):t._e()],1)],1):t._e()],1)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card no-left-border m0-bottom z1"},[n("div",{staticClass:"content p1"},[n("h2",{staticClass:"primary uppercase"},[t._v("Application")]),n("p",[t._v("What does this passage have to do with you or those who are in your care? Be specific, bear fruit.")])])])}],W=(n("28a5"),n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav z2"},t._l(t.studyCount,(function(e,s){return n("div",{key:s,staticClass:"nav-item",class:{active:s===t.studyIndex},on:{click:function(e){return t.studySelected(s)}}},[n("div"),n("p",[t._v("Study "+t._s(s+1))]),n("div")])})),0)}),Y=[];function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Q={name:"Nav",computed:G({},Object(f["c"])(["study","studyMeta","studyIndex"]),{studyCount:function(){return this.studyMeta.studyCount}}),methods:G({},Object(f["b"])(["setStudyIndex","setStudy","setStudyMeta","setText"]),{studySelected:function(t){var e=this;this.setStudyIndex(t),this.setText(null),fetch("".concat(this.studyMeta.source,"/STUDY_").concat(t+1,".json")).then((function(t){return t.json()})).then((function(t){return e.setStudy(t)}))}}),mounted:function(){this.studySelected(this.studyIndex||0)}},K=Q,X=(n("1493"),Object(h["a"])(K,W,Y,!1,null,"16994ba8",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content p2"},[t.items&&0!==t.items.length?t._e():n("p",{staticClass:"empty-state"},[t._v("This is not complete")]),n("anima-list",{staticClass:"grid",attrs:{items:t.items,classes:["grid-item"]}})],1)},et=[],nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.internalItems,(function(e,s){return n("div",{key:s,staticClass:"appear",class:t.classes||[],style:{"animation-duration":70*s+50+"ms"}},[t._v(t._s(e))])})),0)},st=[],rt={name:"AnimaList",props:["items","classes"],data:function(){return{internalItems:[]}},watch:{items:function(){var t=this;this.internalItems=[],this.$nextTick((function(){t.internalItems=t.items}))}},mounted:function(){this.internalItems=this.items}},it=rt,ot=Object(h["a"])(it,nt,st,!1,null,null,null),at=ot.exports,ct={name:"BlockList",props:["items"],data:function(){return{internalItems:[]}},components:{AnimaList:at},watch:{items:function(){var t=this;this.internalItems=[],this.$nextTick((function(){t.internalItems=t.items}))}},mounted:function(){this.internalItems=this.items}},ut=ct,lt=(n("5c44"),Object(h["a"])(ut,tt,et,!1,null,null,null)),pt=lt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.text?n("div",{staticClass:"text-outline p2 mono"},[n("div",{staticClass:"v-fill content border-left-tertiary p2-left flex-column"},[n("div",{staticClass:"flex-row"},[n("p",{staticClass:"flex-one primary p1-bottom"},[t._v(t._s(t.study.passage))]),n("a",{staticClass:"tertiary pointer font-2",on:{click:t.toggle}},[t._v(t._s(t.show?"◉":"○"))])]),n("div",{staticClass:"text-outline-text",class:{collapsed:!t.show}},[n("p",{domProps:{innerHTML:t._s(t.display)}})]),n("transition",{attrs:{name:"fade-in"}},[t.show?n("p",{staticClass:"text-right font-2 m2-top tertiary m1-bottom pointer"},[n("a",{staticClass:"option",class:{active:t.showVerses},on:{click:t.toggleVerses}},[t._v("V#")]),t._v(" "),n("a",{staticClass:"option",class:{active:!t.showPlain},on:{click:t.toggleStructure}},[t._v("⑆")])]):t._e()])],1)]):t._e()])},dt=[];n("a481");function mt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function vt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?mt(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var yt={name:"TextOutline",data:function(){return{show:!0,showVerses:!0,showPlain:!1,display:""}},computed:vt({},Object(f["c"])(["study"]),{text:function(){return this.study.text}}),watch:{study:function(){this.createDisplay()}},methods:{toggle:function(){this.show=!this.show},toggleVerses:function(){this.showVerses=!this.showVerses,this.showVerses?this.$el.querySelectorAll(".verse-num").forEach((function(t){return t.classList.remove("hid")})):this.$el.querySelectorAll(".verse-num").forEach((function(t){return t.classList.add("hid")}))},toggleStructure:function(){this.showPlain=!this.showPlain,this.createDisplay()},createDisplay:function(){var t=this.text.replace(/\|?(\d+)\|/g,(function(t,e){return'<sup class="verse-num">'.concat(e,"</sup>")}));t=t.replace(/(\d+)\u02da/g,(function(t,e){return'<span class="verse-num">'.concat(e," </span>")})),t=this.showPlain?t.replace(/\u02D9\r?\n|\r/g,"").replace(/\u0020\u0020+/g," "):t.replace(/\u02D9/g,""),this.display=t}}},ht=yt,bt=(n("de95"),n("07f0"),Object(h["a"])(ht,ft,dt,!1,null,"1cb7480f",null)),gt=bt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content p3-right p3-left flex-wrap flex-row"},t._l(t.items,(function(e){return n("div",{key:e,staticClass:"hanging-tab",class:{active:e===t.selected},on:{click:function(n){return t.select(e)}}},[t._v(" "+t._s(e)+" ")])})),0)},_t=[],jt={name:"HangingTabs",props:["items"],data:function(){return{selected:null}},methods:{select:function(t){this.selected=t,this.$emit("input",this.selected)}},mounted:function(){this.select(this.items[0])}},wt=jt,Ct=Object(h["a"])(wt,Ot,_t,!1,null,null,null),xt=Ct.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content p2"},t._l(t.items,(function(e,s){return n("div",{key:s},[n("div",{staticClass:"flex-row"},[n("h3",{staticClass:"primary title-fade-label"},[t._v(t._s(s))]),n("div",{staticClass:"title-fade"})]),n("block-list",{staticClass:"p1-top p0-left",attrs:{items:e}})],1)})),0)},Pt=[],kt={name:"Persons",props:["items"],components:{BlockList:pt}},Et=kt,Dt=(n("96d6"),Object(h["a"])(Et,St,Pt,!1,null,"3bc8708a",null)),It=Dt.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"definitions content p2"},[t.hasItems?n("div",{staticClass:"card"},t._l(t.items,(function(e,s){return n("div",{key:s,staticClass:"definition"},[n("h3",[t._v(t._s(s))]),n("p",[t._v(t._s(e))])])})),0):t._e(),t.hasItems?t._e():n("p",{staticClass:"empty-state"},[t._v("This is not complete")])])},Tt=[],$t={name:"Definitions",props:["items"],computed:{hasItems:function(){return this.items&&!!Object.keys(this.items)}}},At=$t,Lt=(n("15fd"),Object(h["a"])(At,Mt,Tt,!1,null,"ae9c70a6",null)),qt=Lt.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content p3"},[n("h2",{staticClass:"title-label"},[t._v("Unwisdom")]),t._l(t.items,(function(e,s){return n("div",{key:s,staticClass:"unwisdom",on:{click:function(e){return t.toggleComment(s,e)}}},[n("p",{staticClass:"saying"},[t._v(t._s(e.saying))]),t.comments[s]?n("div",{staticClass:"border-top-tertiary m1-top p1-top"},[n("p",{staticClass:"secondary"},[t._v(t._s(e.comment))])]):t._e(),e.chapter?n("p",{staticClass:"tertiary text-right p2-right"},[t._v("- "+t._s(e.chapter))]):t._e()])}))],2)},Bt=[],Vt={name:"Unwisdom",props:["items"],data:function(){return{comments:{}}},methods:{toggleComment:function(t,e){this.$set(this.comments,t,!this.comments[t])}}},Ut=Vt,Rt=(n("ff17"),Object(h["a"])(Ut,Nt,Bt,!1,null,"23504391",null)),Ht=Rt.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content p3"},[n("h2",{staticClass:"title-label"},[t._v("Expound")]),t._l(t.items,(function(e,s){return n("div",{key:s,staticClass:"expound"},t._l(e,(function(e,s){return n("div",{key:s,staticClass:"expound-entry",class:[s]},[n("p",{staticClass:"opacity40 font-2"},[t._v(t._s(s))]),n("p",[t._v(t._s(e))])])})),0)}))],2)},Ft=[],Wt={name:"Expound",props:["items"]},Yt=Wt,Jt=(n("2aa4"),Object(h["a"])(Yt,zt,Ft,!1,null,"862c14ac",null)),Gt=Jt.exports,Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.items&&t.items.length>0?n("div",{staticClass:"content p3"},[n("h2",{staticClass:"title-label"},[t._v("Conversation")]),n("p",{staticClass:"secondary p1-left m2-bottom"},[t._v("Questions to casually discuss this passage")]),t._l(t.items,(function(e,s){return n("div",{key:s,staticClass:"conversation"},[n("p",[n("span",{staticClass:"tertiary"},[t._v(t._s(s+1)+".")]),t._v(" "+t._s(e.question))])])}))],2):n("div",{staticClass:"content p3"},[n("p",{staticClass:"empty-state"},[t._v("This is incomplete")])])])},Kt=[],Xt={name:"Conversation",props:["items"]},Zt=Xt,te=(n("a498"),Object(h["a"])(Zt,Qt,Kt,!1,null,"11e24576",null)),ee=te.exports,ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.items&&t.items.length>0?n("div",{staticClass:"content p3"},[n("h2",{staticClass:"title-label"},[t._v("Integrity")]),t._m(0),t._l(t.items,(function(e,s){return n("div",{key:s,staticClass:"questions"},[n("p",[n("span",{staticClass:"tertiary"},[t._v(t._s(s+1)+".")]),t._v(" "+t._s(e.question))])])}))],2):n("div",{staticClass:"content p3"},[n("p",{staticClass:"empty-state"},[t._v("This is incomplete")])])])},se=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"prompt bg-hi p2 rounded m2-bottom"},[n("p",{staticClass:"secondary"},[t._v("Questions that are meant to be answered in 3 parts:")]),n("ul",{staticClass:"m0 p1-left"},[n("li",[t._v("(1) to what degree is this true of your "),n("strong",[t._v("will")]),t._v(" and action ")]),n("li",[t._v("(2) to what degree is this permeating your thought and "),n("strong",[t._v("intellect")])]),n("li",[t._v("(3) to what degree do you hold this as "),n("strong",[t._v("fantasy")]),t._v(" or fiction, in disbelief")])]),n("p",[t._v("By answering in this way, the goal is to reveal inconsistencies in our selves, for instance: what do we hold to be true from an intellectual stance, but do not actually obey in our action and will?")])])}],re={name:"Integrity",props:["items"]},ie=re,oe=(n("fd1f"),Object(h["a"])(ie,ne,se,!1,null,"7981366b",null)),ae=oe.exports;function ce(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function ue(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ce(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ce(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var le={name:"home",data:function(){return{observation:"persons",interpretation:"unwisdom",application:"conversation"}},components:{Navigation:Z,BlockList:pt,TextOutline:gt,HangingTabs:xt,Persons:It,Definitions:qt,Unwisdom:Ht,Expound:Gt,Conversation:ee,Integrity:ae},computed:ue({},Object(f["c"])(["study","text","score"]),{observations:function(){var t=this;return["persons","people","nouns","adjectives","actions","definitions"].filter((function(e){return ue({},t.score.observe[e]).complete}))},interpretations:function(){var t=this;return["titles","points","keywords","emotions","unwisdom","expound"].filter((function(e){return ue({},t.score.interpret[e]).complete}))},applications:function(){var t=this;return["conversation","ACTS","integrity"].filter((function(e){return ue({},t.score.application[e]).complete}))},isObservationList:function(){return["People","Nouns","Adjectives","Actions"].includes(this.observation)},unwisdoms:function(){return this.getNotes("interpret.unwisdom")},expounds:function(){return this.getNotes("interpret.expound")},conversation:function(){return this.getNotes("application.conversation")},integrity:function(){return this.getNotes("application.integrity")}}),methods:{O:function(t){return this.observation===t},I:function(t){return this.interpretation===t},A:function(t){return this.application===t},getNotes:function(t){var e=t.split(".");return this.study?this.study[e[0]][e[1]]:null},componentFor:function(t){return Array.isArray(t)?"BlockList":"Definitions"}}},pe=le,fe=(n("6ace"),Object(h["a"])(pe,z,F,!1,null,"0410f4e5",null)),de=fe.exports,me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v(" Unwisdom chapters: "),n("ul",t._l(t.unwisdomChapters,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0)])])},ve=[],ye={name:"Overview",data:function(){return{unwisdomChapters:[]}},computed:{},mounted:function(){}},he=ye,be=Object(h["a"])(he,me,ve,!1,null,null,null),ge=be.exports,Oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.hasStudies?t._e():n("div",{staticClass:"content p3 empty-state"},[t._v("You have not added any study sources")]),t.hasStudies?n("ul",{staticClass:"content p3"},t._l(t.studies,(function(e){return n("li",{key:e.source,staticClass:"card flex-row m2-bottom align-center"},[n("div",{staticClass:"flex-one",on:{click:function(n){return t.studySelected(e)}}},[n("p",{staticClass:"uppercase"},[t._v(t._s(e.title||e.source)+" "),e.author?n("span",{staticClass:"secondary font-2"},[t._v(t._s(e.author))]):t._e()]),n("p",{staticClass:"secondary3 font-3"},[t._v(t._s(e.source))])]),n("a",{on:{click:function(n){return t.deleteStudy(e)}}},[t._v("🗑")])])})),0):t._e(),n("div",{staticClass:"content p3 flex-row"},[n("button",{staticClass:"button shadow-deep bg-primary hi",on:{click:function(e){t.addingStudy=!0}}},[t._v("Add Study")]),n("div",{staticClass:"flex-one"}),t.hasStudies?n("button",{staticClass:"button shadow-deep bg-secondary hi",on:{click:function(e){return t.$router.back()}}},[t._v("Cancel")]):t._e()]),t.addingStudy?n("div",{staticClass:"content p3"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.saveStudy(e)}}},[n("div",{staticClass:"m2-bottom"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.studySource,expression:"studySource"}],staticClass:"input",attrs:{type:"url",placeholder:"url of study files"},domProps:{value:t.studySource},on:{input:function(e){e.target.composing||(t.studySource=e.target.value)}}})]),n("button",{staticClass:"button shadow-deep bg-primary hi"},[t._v("Save")])])]):t._e(),n("div",{staticClass:"content p3"},[n("hr"),n("h3",[t._v("Suggested studies")]),n("ul",{staticClass:"content p3"},t._l(t.suggestedStudies,(function(e){return n("li",{key:e.source,staticClass:"card flex-row uppercase m2-bottom"},[n("div",{staticClass:"flex-one",on:{click:function(n){return t.suggestedStudySelected(e)}}},[t._v(t._s(e.title||e.source))])])})),0)])])},_e=[],je=(n("7514"),n("96cf"),n("3b8d"));n("5df3");function we(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function Ce(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?we(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):we(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var xe={name:"BookChooser",data:function(){return{addingStudy:!1,studySource:null,suggestedStudies:[{title:"Philemon: Wilkey",source:"https://jwilkey.github.io/bible-study/studies/philemon"},{title:"1 John: Wilkey",source:"https://jwilkey.github.io/bible-study/studies/1john"}]}},computed:Ce({},Object(f["c"])(["studies"]),{hasStudies:function(){return!!this.studies.length}}),methods:Ce({},Object(f["b"])(["setBook","setStudies","setStudyMeta","setStudy","setStudyIndex","deleteStudy"]),{studySelected:function(t){var e=this;this.setStudyIndex(0),this.setStudy(null),Promise.all([fetch("".concat(t.source,"/meta.json")).then((function(t){return t.json()})).then((function(n){e.setStudyMeta(Object.assign(t,n))})),fetch("".concat(t.source,"/STUDY_1.json")).then((function(t){return t.json()})).then((function(t){return e.setStudy(t)}))]).then((function(t){e.$router.push("/")}))},suggestedStudySelected:function(){var t=Object(je["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.studySource=e.source,t.next=3,this.saveStudy();case 3:n=t.sent,this.studySelected(n);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),saveStudy:function(){var t=Object(je["a"])(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.studies.find((function(t){return t.source===n.studySource})),!e){t.next=3;break}return t.abrupt("return",e);case 3:return t.abrupt("return",fetch("".concat(this.studySource,"/meta.json")).then((function(t){return t.json()})).then((function(t){t.source=n.studySource;var e=n.studies.concat(t);return n.setStudies(e),t})));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},Se=xe,Pe=Object(h["a"])(Se,Oe,_e,!1,null,null,null),ke=Pe.exports;s["a"].use(M["a"]);var Ee=new M["a"]({routes:[{path:"/",name:"home",component:de},{path:"/books",name:"books",component:ke},{path:"/overview",name:"overview",component:ge}]});Ee.beforeEach((function(t,e,n){"books"===t.name||H.getters.study?n():n("/books")}));var De=Ee;s["a"].config.productionTip=!1,new s["a"]({router:De,store:H,render:function(t){return t(I)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("9c0c"),r=n.n(s);r.a},"5c44":function(t,e,n){"use strict";var s=n("aa18"),r=n.n(s);r.a},"61c8":function(t,e,n){},"6ace":function(t,e,n){"use strict";var s=n("094a"),r=n.n(s);r.a},"80a0":function(t,e,n){},"96d6":function(t,e,n){"use strict";var s=n("eea2"),r=n.n(s);r.a},"9bb5":function(t,e,n){"use strict";var s=n("cdba"),r=n.n(s);r.a},"9c0c":function(t,e,n){},"9d07":function(t,e,n){},a272:function(t,e,n){},a498:function(t,e,n){"use strict";var s=n("80a0"),r=n.n(s);r.a},aa18:function(t,e,n){},cdba:function(t,e,n){},d5e1:function(t,e,n){},dd39:function(t,e,n){},de95:function(t,e,n){"use strict";var s=n("9d07"),r=n.n(s);r.a},eea2:function(t,e,n){},fd1f:function(t,e,n){"use strict";var s=n("43f3"),r=n.n(s);r.a},ff17:function(t,e,n){"use strict";var s=n("d5e1"),r=n.n(s);r.a}});
//# sourceMappingURL=app.963491e0.js.map