(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"5da4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-sm"},[a("div",{staticClass:"column items-center"},[a("form",{staticClass:"col q-gutter-md ac-box",staticStyle:{width:"100%","max-width":"800px","margin-top":"20px"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"text-h4 justify-center text-weight-medium"},[t._v(t._s(t.$t("upload.title")))]),a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("upload.descTitle")))]),a("div",{staticClass:"row text-caption text-weight-thin"},[t._v(t._s(t.$t("upload.descNote")))]),a("q-input",{attrs:{filled:"",type:"textarea"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}}),a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t.errors.desc?a("div",{staticClass:"text-caption deep-orange-11"},t._l(t.errors.desc,(function(e){return a("div",{key:e},[a("p",{staticClass:"text-deep-orange-12"},[t._v(t._s(e))])])})),0):t._e()]),a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("upload.uploadTitle")))]),a("div",{staticClass:"row text-caption text-weight-thin"},[t._v(t._s(t.$t("upload.uploadNote")))]),a("q-uploader",{ref:"uploader",staticStyle:{"max-width":"300px"},attrs:{factory:t.factoryFn,"field-name":"file",multiple:"",accept:".jpg, .png, .jpeg, image/*","max-file-size":2097152,"max-total-size":10485760,"hide-upload-btn":!0},on:{finish:t.uploadFinished}}),a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t.errors.keys?a("div",{staticClass:"text-caption deep-orange-11"},t._l(t.errors.keys,(function(e){return a("div",{key:e},[a("p",{staticClass:"text-deep-orange-12"},[t._v(t._s(e[0]))])])})),0):t._e()]),a("div",{staticClass:"row justify-end"},[a("q-btn",{staticClass:"q-mt-md",attrs:{type:"submit",loading:t.submitting,label:t.$t("account.signIn"),color:"teal","form-fields":[{name:"key",value:""}]},scopedSlots:t._u([{key:"loading",fn:function(){return[a("q-spinner-facebook")]},proxy:!0}])})],1)],1)])])},i=[],n=(a("551c"),a("06db"),a("df96")),o={name:"Upload",data:function(){return{errors:{},submitting:!1,desc:"",fileKeys:[]}},methods:{factoryFn:function(t){var e=this;return this.submitting=!0,new Promise((function(t){e.$axios.get("/api/item/getUploadToken").then((function(a){if(a.data.code===n["a"].SUCCESS){var s=a.data.data.key,i=a.data.data.token;e.fileKeys.push(s);var o=[{name:"key",value:s},{name:"token",value:i}];t({url:"https://upload-as0.qiniup.com",formFields:o})}}))}))},uploadFinished:function(){var t=this;if(0===this.fileKeys.length)return this.submitting=!1,void this.$refs.uploader.reset();this.$axios.post("/api/item",{desc:this.desc,keys:this.fileKeys}).then((function(e){t.errors={},t.submitting=!1,e.data.code===n["a"].SUCCESS?t.$q.notify({message:t.$t("upload.addItemSuccess"),color:"green"}):e.data.code===n["a"].PARAM_ERROR?t.errors=e.data.data:t.$q.notify({message:t.$t("notify.error"),color:"red"})})).catch((function(){t.errors={},t.submitting=!1,t.$q.notify({message:t.$t("notify.error"),color:"red"})}))},submit:function(){var t=1===this.$refs.uploader.uploadProgress;t?this.uploadFinished():this.$refs.uploader.upload()}}},r=o,d=a("2877"),l=a("eebe"),c=a.n(l),u=a("27f9"),p=a("ee89"),f=a("9c40"),m=a("e669"),v=Object(d["a"])(r,s,i,!1,null,null,null);e["default"]=v.exports;c()(v,"components",{QInput:u["a"],QUploader:p["a"],QBtn:f["a"],QSpinnerFacebook:m["a"]})}}]);