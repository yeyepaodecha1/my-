(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/me/login/login"],{"2f0e":function(t,e,n){"use strict";n.r(e);var i=n("5f6f"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"3cdd":function(t,e,n){"use strict";var i=n("d120"),o=n.n(i);o.a},5154:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"input-group"},[n("view",{staticClass:"input-row border"},[n("text",{staticClass:"title"},[t._v("账号：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"number",placeholder:"请输入手机号",eventid:"0ada70a8-0"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),n("view",{staticClass:"input-row"},[n("text",{staticClass:"title"},[t._v("验证码：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"code",attrs:{type:"number",placeholder:"请输入密码",eventid:"0ada70a8-1"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),n("button",{staticClass:"btn_code",attrs:{size:"mini",type:"primary",plain:"true",eventid:"0ada70a8-2"},on:{tap:t.bindCode}},[t._v(t._s(t.text))])],1)]),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"0ada70a8-3"},on:{tap:t.bindLogin}},[t._v("登录")])],1)])},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"5f6f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("4095"),o=i.isPoneAvailable,a={data:function(){return{timer:null,text:"获取验证码",status:!1,num:60}},methods:{bindLogin:function(){o(this.phone)?this.code.length<6?t.showToast({icon:"none",title:"请输入正确的验证码!"}):this.goLogin():t.showToast({icon:"none",title:"请输入正确的手机号!"})},goLogin:function(){t.request({url:"http://111.19.140.83/qt/login/phone.do",data:{phone:this.phone,code:this.code},success:function(t){var e=t.data;console.log(t),console.log(JSON.stringify(e)),200==e.code&&plus.nativeUI.alert(e.msg)},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},bindCode:function(){var e=this;o(this.phone)?this.status||(this.status=!0,this.loading(),this.getCode(),this.timer=setInterval(function(){0===e.num?(e.timer&&e.clearTimer(),e.reset()):e.loading()},1e3)):t.showToast({icon:"none",title:"请输入正确的手机号!"})},reset:function(){this.num=60,this.loadingStatus=!1,this.text="获取验证码"},loading:function(){this.num-=1,this.text="获取中("+this.num+")"},getCode:function(){t.request({url:"http://111.19.140.83/qt/login/sendCaptcha.do",data:{phone:this.phone},success:function(t){var e=t.data;200==e.code&&plus.nativeUI.alert(e.msg)},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},clearTimer:function(){clearInterval(this.timer),this.timer=null}},onUnload:function(){this.timer&&this.clearTimer()}};e.default=a}).call(this,n("6e42")["default"])},"6a65":function(t,e,n){"use strict";n.r(e);var i=n("5154"),o=n("2f0e");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("3cdd");var s=n("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},d120:function(t,e,n){},d73c:function(t,e,n){"use strict";n("cef6");var i=a(n("b0ce")),o=a(n("6a65"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(o.default))}},[["d73c","common/runtime","common/vendor"]]]);