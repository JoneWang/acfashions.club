(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{0:function(e,t,n){e.exports=n("2f39")},"034f":function(e,t,n){"use strict";var a=n("c4ee"),o=n.n(a);o.a},2471:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={getUser:function(){var e=localStorage.getItem("user");if(e){var t=JSON.parse(e);return t}return null},save:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)},remove:function(e){localStorage.removeItem(e)}}},"2f39":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"updateUser",(function(){return A}));var o={};n.r(o),n.d(o,"loadUser",(function(){return B})),n.d(o,"signOut",(function(){return O}));var r={};n.r(r),n.d(r,"updateBarTitle",(function(){return J})),n.d(r,"updateShowBack",(function(){return L}));var i=n("967e"),u=n.n(i),c=(n("a481"),n("96cf"),n("fa84")),l=n.n(c),s=(n("7d6e"),n("e54f"),n("44391"),n("4605"),n("f580"),n("5b2b"),n("8753"),n("2967"),n("7e67"),n("d770"),n("dd82"),n("922c"),n("c32e"),n("a151"),n("8bc7"),n("d67f"),n("880e"),n("1c10"),n("9482"),n("e797"),n("4848"),n("e9fd"),n("195c"),n("64e9"),n("33c5"),n("4f62"),n("0dbc"),n("4953"),n("81db"),n("2e52"),n("22485"),n("7797"),n("e592"),n("70ca"),n("2318"),n("24bd"),n("8f27"),n("3064"),n("c9a2"),n("8767"),n("4a8e"),n("b828"),n("3c1c"),n("21cb"),n("c00e"),n("e4a8"),n("e4d3"),n("f4d9"),n("b794"),n("af24"),n("7c9c"),n("7bb2"),n("64f7"),n("c382"),n("f5d1"),n("3cec"),n("c00ee"),n("d450"),n("ca07"),n("14e3"),n("1dba"),n("674a"),n("de26"),n("6721"),n("25e9"),n("fc83"),n("98e5"),n("605a"),n("ba60"),n("df07"),n("7903"),n("e046"),n("58af"),n("7713"),n("0571"),n("3e27"),n("6837"),n("3fc9"),n("0693"),n("bf41"),n("0ca9"),n("5b0d"),n("2b0e")),f=n("bf69"),p=n("42d2"),d=n("b05d"),b=n("2a19");s["default"].use(d["a"],{config:{},lang:f["a"],iconSet:p["a"],plugins:{Notify:b["a"]}});var m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},h=[],w={name:"App"},v=w,g=(n("034f"),n("2877")),T=Object(g["a"])(v,m,h,!1,null,null,null),k=T.exports,S=n("2f62"),x=function(){return{user:null}},U=n("8484"),P=n("2471");function A(e,t){if(e.user=t,t){var n=JSON.stringify(t);P["a"].save("user",n)}else this.$router.replace("",(function(){})),P["a"].remove("user")}var y=n("df96"),C=n("bc3a"),I=n.n(C);function B(e){I.a.get("/api/account/getUser").then((function(t){var n=t.data.code;if(n===y["a"].SUCCESS){var a=t.data.data;e.commit("updateUser",a)}else n===y["a"].UNAUTHORIZED&&e.commit("updateUser",null)}))}function O(e){e.commit("updateUser",null),I.a.post("/api/account/signOut").then((function(e){}))}var E={namespaced:!0,state:x,getters:U,mutations:a,actions:o},N=function(){return{barTitle:"website.defaultBarTitle",showBack:!1}},R=n("e839");function J(e,t){e.barTitle=t}function L(e,t){e.showBack=t}var $=n("d2d4"),j={namespaced:!0,state:N,getters:R,mutations:r,actions:$};s["default"].use(S["a"]);var z=function(){var e=new S["a"].Store({modules:{global:j,account:E},strict:!1});return e},V=n("8c4f"),_=[{path:"",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"713b"))},children:[{meta:{title:"website.defaultBarTitle",keepAlive:!0},path:"/",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))}},{meta:{title:"website.hottestTitle",keepAlive:!0},path:"/hottest",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))}},{meta:{title:"website.signInTitle"},path:"/signIn",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"4fc8"))}},{meta:{title:"website.signUpTitle"},path:"/signUp",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"89a8"))}},{meta:{title:"website.aboutTitle"},path:"/about",component:function(){return n.e(3).then(n.bind(null,"a1d1"))}},{meta:{title:"website.meTitle",keepAlive:!0},path:"/me",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"d843"))}},{meta:{title:"website.uploadTitle"},path:"/upload",component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"5da4"))}},{meta:{title:"website.newestTitle",keepAlive:!0},path:"/newest",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"d843"))}},{meta:{title:"website.aboutTitle"},path:"/about",component:function(){return n.e(3).then(n.bind(null,"a1d1"))}},{meta:{title:""},path:"/item/:id",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"a727"))}},{meta:{title:"",keepAlive:!0},path:"/u/:name",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"d843"))}}]}];_.push({path:"*",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"e51e"))}});var q=_;s["default"].use(V["a"]);var D=function(e){var t=e.store,n=new V["a"]({routes:q,scrollBehavior:function(e,t,n){return n||(t.meta.keepAlive&&(t.meta.savedPosition=document.body.scrollTop),{x:0,y:e.meta.savedPosition||0})},mode:"history",base:"/"});return n.beforeEach((function(e,a,o){var r=t.state.account.user,i=null;r?"/signup"!==e.path.toLowerCase()&&"/signin"!==e.path.toLowerCase()||(i="/"):"/me"!==e.path&&"/upload"!==e.path||(i="/"),void 0!==a.meta.title&&("/"===e.path||"/"===i?t.commit("global/updateShowBack",!1):t.commit("global/updateShowBack",!0)),i?(t.commit("global/updateBarTitle",e.meta.title),n.replace(i,(function(){}))):(t.commit("global/updateBarTitle",e.meta.title),o())})),n},F=function(){return H.apply(this,arguments)};function H(){return H=l()(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof z){e.next=6;break}return e.next=3,z({Vue:s["default"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=z;case 7:if(t=e.t0,"function"!==typeof D){e.next=14;break}return e.next=11,D({Vue:s["default"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=D;case 15:return n=e.t1,t.$router=n,a={el:"#q-app",router:n,store:t,render:function(e){return e(k)}},e.abrupt("return",{app:a,store:t,router:n});case 19:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}var Z=n("a925"),M={"website.defaultBarTitle":"AC Fashions","website.signInTitle":"登录","website.signUpTitle":"注册","website.meTitle":"我的数据","website.hottestTitle":"热门","website.newestTitle":"最新","website.aboutTitle":"关于","website.uploadTitle":"上传新设计","account.signIn":"登录","account.signUp":"注册","account.toSignUp":"没有账号？去注册","account.toSignIn":"已有账号？去登录","account.signUpEmailNote":"*不会验证邮箱真实性，但请如实填写","account.email":"邮箱","account.nickname":"昵称","account.password":"密码","account.repeatPassword":"重复密码","account.signInSuccess":"登录成功","account.signUpSuccess":"注册成功，已自动登录","account.signOutTip":"已退出登录","account.signOut":"退出登录","account.signOutConfirm":"确认退出登录","menu.userCenter":"我的数据","menu.newest":"最新","menu.hottest":"热门","menu.about":"关于","upload.title":"上传新设计","upload.descTitle":"描述：","upload.descNote":"最大999字","upload.uploadTitle":"图片上传：","upload.uploadNote":"单个文件最大 2mb，所有文件最大 10mb。第一张图片默认为封面。","upload.addItemSuccess":"添加成功","about.title":"关于","about.content":"此网站专为方便分享和聚合『动物森友会』系列游戏内的设计而制作。<br/>关于网站的任何问题，请邮件联系。","about.developerTitle":"开发者","about.developerContent":"Jone","about.contactTitle":"联系","about.contactContent":"Email: i@jone.wang","about.changelogTitle":"更新日志","about.changelogContent":"4月5日<br />基本功能上线（原订4月前，谁知沉迷动森）<br />","item.publisher":"发布者","notify.error":"发生错误，请联系 i@jone.wang"},Q={"website.title":"Animal Crossing Fashions",failed:"Action failed",success:"Action was successful"},G={"zh-hans":M,"en-us":Q};s["default"].use(Z["a"]);var K=new Z["a"]({locale:"zh-hans",fallbackLocale:"zh-hans",messages:G}),W=function(e){var t=e.app;t.i18n=K};I.a.defaults.baseURL="http://api.acfashions.club",s["default"].prototype.$axios=I.a;var X=n("f174"),Y=n.n(X);function ee(){return te.apply(this,arguments)}function te(){return te=l()(u.a.mark((function e(){var t,n,a,o,r,i,c,l,f;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,n=t.app,a=t.store,o=t.router,r=!0,i=function(e){r=!1,window.location.href=e},c=window.location.href.replace(window.location.origin,""),l=[W,void 0,Y.a],f=0;case 11:if(!(!0===r&&f<l.length)){e.next=29;break}if("function"===typeof l[f]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[f]({app:n,router:o,store:a,Vue:s["default"],ssrContext:null,redirect:i,urlPath:c});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:f++,e.next=11;break;case 29:if(!1!==r){e.next=31;break}return e.abrupt("return");case 31:new s["default"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),te.apply(this,arguments)}ee()},"5b0d":function(e,t,n){},8484:function(e,t){},c4ee:function(e,t,n){},d2d4:function(e,t){},df96:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={SUCCESS:0,UNAUTHORIZED:1001,PARAM_ERROR:2001}},e839:function(e,t){},f174:function(e,t){}},[[0,5,0]]]);