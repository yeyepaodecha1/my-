(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/pfxf/menu/five"],{"816a":function(t,e,a){"use strict";(function(t){var i;function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a("4095").dateUtils;var n=10,c=1,o={page:c,limit:n},r=(i={data:function(){return{listData:[],reload:!1}},onLoad:function(){this.getList()},onPullDownRefresh:function(){this.reload=!0,this.getList()},onReachBottom:function(){this.getList()}},s(i,"onPullDownRefresh",function(){console.log("refresh"),setTimeout(function(){t.showToast({title:"刷新成功",duration:2e3}),t.stopPullDownRefresh()},1e3)}),s(i,"methods",{getList:function(){var e=this,a="http://xiaojie.xuejss.com/xw/appxjhomeflapi.php?fl=56";t.request({url:a,data:o,success:function(t){if(200==t.statusCode){var a=t.data.data;e.listData=e.reload?a:e.listData.concat(a),e.reload=!1}},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},goDetail:function(e){var a={city:e.city,pics:e.pics,createtime:e.createtime,id:e.id,img:e.img,cat_id:e.cat_id,avatar:e.avatar,states:e.states,uid:e.uid,title:e.title};t.navigateTo({url:"../xqing/founded?detail="+encodeURIComponent(JSON.stringify(a))})},setTime:function(t){var e=[];return t.forEach(function(t){e.push({city:t.city,pics:t.pics,createtime:t.createtime,id:t.id,img:t.img,cat_id:t.cat_id,avatar:t.avatar,states:t.states,uid:t.uid,title:t.title})}),e}}),i);e.default=r}).call(this,a("6e42")["default"])},8884:function(t,e,a){},"8cea":function(t,e,a){"use strict";var i=a("8884"),s=a.n(i);s.a},accb:function(t,e,a){"use strict";a.r(e);var i=a("816a"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},d168:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{},t._l(t.listData,function(e,i){return a("view",{key:i,staticClass:"index-detail",attrs:{eventid:"e1e0045a-0-"+i},on:{click:function(a){t.goDetail(e)}}},[a("view",{staticClass:"detail-top"},[a("view",{staticClass:"head"},[a("image",{attrs:{src:e.avatar,mode:""}})]),a("view",{staticClass:"a-lang"},[a("p",[t._v("uid:"+t._s(e.uid))]),a("view",{staticClass:"discover"},[t._v(t._s(e.cat_id))])],1),a("view",{staticClass:"or"},[t._v(t._s(e.states))]),t._m(0,!0)]),a("p",[t._v(t._s(e.title))]),a("view",{staticClass:"detail-image"},[a("image",{attrs:{src:e.pics,mode:""}})]),a("view",{staticClass:"fab-time"},[t._v("发布于:"+t._s(e.createtime)+" "+t._s(e.city))]),a("view",{staticClass:"detail-bottom"},[a("image",{attrs:{src:"../../../static/id-eye.png",mode:""}}),a("p",[a("span",{staticClass:"watch"},[t._v("634")]),t._v("人浏览")]),a("image",{attrs:{src:"../../../static/id-thumbs-up.png",mode:""}}),a("p",[a("span",{staticClass:"watch"},[t._v("634")]),t._v("人浏览")]),a("view",{staticClass:"xq"},[t._v("查看详情>>")])],1)],1)}))},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"phone-call"},[a("image",{attrs:{src:"../../../static/id-phone.png",mode:""}}),a("span",[a("a",{attrs:{href:"tel:110"}},[t._v("拨打电话")])])])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},e2d6:function(t,e,a){"use strict";a("cef6");var i=n(a("b0ce")),s=n(a("f7b3"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},f7b3:function(t,e,a){"use strict";a.r(e);var i=a("d168"),s=a("accb");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("8cea");var c=a("2877"),o=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports}},[["e2d6","common/runtime","common/vendor"]]]);