(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"713b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",{staticClass:"bg-dot text-white"},[this.$store.state.global.showBack?a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"arrow_back"},on:{click:function(t){return e.$router.go(-1)}}}):e._e(),a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"home",to:"/"}}),a("q-toolbar-title",{staticClass:"text-weight-medium"},[e._v("\n        "+e._s(e.$t(e.barTitle))+"\n      ")]),e.user?e._e():a("q-btn",{attrs:{to:"/signIn",stretch:"",flat:"",label:e.$t("account.signIn")}}),e.user?e._e():a("q-btn",{attrs:{to:"/signUp",stretch:"",flat:"",label:e.$t("account.signUp")}}),e.user?a("q-btn",{attrs:{to:"/me",stretch:"",flat:"",label:e.user.nickname}}):e._e(),e.user?a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(t){e.drawer=!e.drawer}}}):e._e()],1)],1),e.user?a("q-drawer",{attrs:{side:"right","show-if-above":"",width:200,breakpoint:500,bordered:"","content-class":"bg-grey-3"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("q-scroll-area",{staticClass:"fit"},e._l(e.menuList,(function(t,r){return a("q-list",{key:r},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:t.path}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1),a("q-item-section",[e._v("\n            "+e._s(t.label)+"\n          ")])],1),t.separator?a("q-separator"):e._e()],1)})),1)],1):e._e(),a("q-page-container",[a("keep-alive",[e.$route.meta.keepAlive?a("router-view",{key:e.key}):e._e()],1),e.$route.meta.keepAlive?e._e():a("router-view",{key:e.key})],1)],1)},n=[],o=a("2471"),s={name:"MainLayout",components:{},data:function(){return{drawer:!1,currentPath:this.$router.currentRoute.path,menuList:[{icon:"person",label:this.$t("menu.userCenter"),separator:!0,path:"/me"},{icon:"fiber_new",label:this.$t("menu.newest"),separator:!0,path:"/newest"},{icon:"info",label:this.$t("menu.about"),separator:!0,path:"/about"}]}},computed:{key:function(){return this.$route.path+Math.random()},user:function(){var e=this.$store.state.account.user;if(null==e){var t=o["a"].get("user");t&&(e=JSON.parse(t),this.$store.commit("account/updateUser",e),this.$store.dispatch("account/loadUser"))}return e},barTitle:function(){return this.$store.state.global.barTitle}}},i=s,c=a("2877"),l=a("eebe"),u=a.n(l),p=a("4d5a"),b=a("e359"),d=a("65c6"),h=a("9c40"),m=a("6ac5"),w=a("9404"),f=a("4983"),k=a("1c1c"),q=a("66e5"),v=a("4074"),_=a("0016"),$=a("eb85"),g=a("09e3"),Q=a("714f"),y=Object(c["a"])(i,r,n,!1,null,null,null);t["default"]=y.exports;u()(y,"components",{QLayout:p["a"],QHeader:b["a"],QToolbar:d["a"],QBtn:h["a"],QToolbarTitle:m["a"],QDrawer:w["a"],QScrollArea:f["a"],QList:k["a"],QItem:q["a"],QItemSection:v["a"],QIcon:_["a"],QSeparator:$["a"],QPageContainer:g["a"]}),u()(y,"directives",{Ripple:Q["a"]})}}]);