(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"8b24":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"column items-center"},[i("div",{staticClass:"col q-gutter-md"},[i("div",{staticClass:"row"},[i("q-btn",{staticStyle:{"margin-bottom":"8px","margin-top":"20px"},attrs:{color:"green",label:t.$t("index.share")},on:{click:t.copyUrl}})],1)])]),i("item-collection")],1)},o=[],n=i("b5cc"),a={name:"PageIndex",components:{ItemCollection:n["a"]},comments:{ItemCollection:n["a"]},data:function(){return{}},methods:{copyUrl:function(){var t=window.location.href;this.$copyText(t),this.$q.notify({message:this.$t("item.copyUrlSuccess"),color:"green"})}}},r=a,c=i("2877"),l=i("eebe"),d=i.n(l),m=i("9c40"),u=Object(c["a"])(r,s,o,!1,null,null,null);e["default"]=u.exports;d()(u,"components",{QBtn:m["a"]})},b5cc:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.list?i("q-infinite-scroll",{attrs:{offset:250},on:{load:t.onLoad},scopedSlots:t._u([{key:"loading",fn:function(){return[i("div",{staticClass:"row justify-center q-my-md"},[i("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)]},proxy:!0}],null,!1,3159847669)},[i("div",{staticClass:"q-pa-sm row q-gutter-md justify-center"},t._l(t.items,(function(e){return i("q-card",{key:e.id,staticClass:"col-xs-11",attrs:{to:"/item/"+e.id}},[i("q-card-section",{attrs:{horizontal:""}},[i("q-img",{staticClass:"col-2",attrs:{src:e.image+"~list",height:"70px"},on:{click:function(i){return t.to(e.id)}}}),i("q-card-section",{staticStyle:{width:"100%"},on:{click:function(i){return t.to(e.id)}}},[t._v("\n          "+t._s(e.desc)+"\n        ")]),t.me?i("q-card-actions",{staticClass:"justify-around",attrs:{vertical:""}},[i("q-btn-dropdown",{staticClass:"q-ma-sm",staticStyle:{width:"80px"},attrs:{color:"red",label:t.$t("userItem.delete")}},[i("q-list",[i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(i){return t.deleteItem(e.id)}}},[i("q-item-section",[i("q-item-label",[t._v(t._s(t.$t("userItem.deleteConfirm")))])],1)],1)],1)],1)],1):t._e()],1)],1)})),1)]):i("q-infinite-scroll",{attrs:{offset:250},on:{load:t.onLoad},scopedSlots:t._u([{key:"loading",fn:function(){return[i("div",{staticClass:"row justify-center q-my-md"},[i("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)]},proxy:!0}])},[i("div",{staticClass:"q-pa-md row q-gutter-md justify-center"},t._l(t.items,(function(e){return i("q-card",{key:e.id,staticClass:"col-xs-11 col-sm-5 col-md-3 col-xl-2 qr-card"},[i("router-link",{attrs:{to:"/item/"+e.id}},[i("q-img",{attrs:{src:e.image+"~list",ratio:"1",transition:"jump-up",basic:""}})],1),i("q-card-section",[i("div",{staticStyle:{"text-overflow":"ellipsis",overflow:"hidden"}},[i("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.desc))])],1)])],1)})),1)])},o=[],n=(i("20d6"),i("df96")),a={name:"ItemCollection",props:{list:{type:Boolean,default:!1},me:{type:Boolean,default:!1},user:{type:String,default:null}},data:function(){return{submitting:!1,items:[],page:1}},methods:{onLoad:function(t,e){var i=this,s={page:t};this.me?s.me=!0:this.user&&(s.user=this.user),this.$axios.get("/api/item/list",{params:s}).then((function(t){var s=t.data.code;if(s===n["a"].SUCCESS){var o=t.data.data;o.length>0?(i.items=i.items.concat(o),e(!1)):e(!0)}else i.$q.notify({message:i.$t("notify.error"),color:"red"}),e(!0)})).catch((function(){i.$q.notify({message:i.$t("notify.error"),color:"red"}),e(!0)}))},deleteItem:function(t){var e=this;this.submitting||(this.submitting=!0,this.$axios.delete("/api/item",{data:{id:t}}).then((function(i){e.submitting=!1;var s=i.data.code;s===n["a"].SUCCESS?(e.items.splice(e.items.findIndex((function(e){return e.id===t})),1),e.$q.notify({message:e.$t("userItem.deleteSuccess"),color:"green"})):e.$q.notify({message:e.$t("notify.error"),color:"red"})})).catch((function(){e.errors={},e.submitting=!1,e.$q.notify({message:e.$t("notify.error"),color:"red"})})))},to:function(t){this.$router.push("/item/"+t)}}},r=a,c=i("2877"),l=i("eebe"),d=i.n(l),m=i("ef35"),u=i("f09f"),f=i("a370"),p=i("068f"),y=i("4b7e"),q=i("f20b"),g=i("1c1c"),h=i("66e5"),v=i("4074"),b=i("0170"),C=i("9c40"),$=i("8380"),w=i("7f67"),x=Object(c["a"])(r,s,o,!1,null,null,null);e["a"]=x.exports;d()(x,"components",{QInfiniteScroll:m["a"],QCard:u["a"],QCardSection:f["a"],QImg:p["a"],QCardActions:y["a"],QBtnDropdown:q["a"],QList:g["a"],QItem:h["a"],QItemSection:v["a"],QItemLabel:b["a"],QBtn:C["a"],QSpinnerDots:$["a"]}),d()(x,"directives",{ClosePopup:w["a"]})}}]);