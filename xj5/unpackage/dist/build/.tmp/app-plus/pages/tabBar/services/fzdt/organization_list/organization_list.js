(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/services/fzdt/organization_list/organization_list"],{"3b59":function(t,e,i){"use strict";var a=i("f2a8"),n=i.n(a);n.a},5505:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("9acd"));function n(t){return t&&t.__esModule?t:{default:t}}var s=10,o=1,r={page:o,limit:s},c={components:{uniTag:a.default},data:function(){return{listData:[],reload:!1}},onLoad:function(){this.getList()},onPullDownRefresh:function(){this.reload=!0,this.getList()},onReachBottom:function(){this.getList()},methods:{getList:function(){var e=this;r.page=o++;var i="http://111.19.140.83/coreLawPerson/list.do";t.request({url:i,data:r,success:function(t){var i=t.data;if(200==i.code){var a=e.setTime(i.data);e.listData=e.reload?a:e.listData.concat(a),e.reload=!1}},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},goDetail:function(e){var i={moduleName:e.moduleName,cover:e.cover,id:e.id,createTime:e.createTime,title:e.title};t.navigateTo({url:"new_detail/new_detail?detail="+encodeURIComponent(JSON.stringify(i))})},setTime:function(t){var e=[];return t.forEach(function(t){var i=[];null!=t.practiceMajor&&(i=t.practiceMajor.split(",")),e.push({name:t.name,icon:t.icon,id:t.id,organizationName:t.organizationName,consultNumber:t.consultNumber,phone:t.phone,degree:t.degree,typeName:t.typeName,practiceMajor:i})}),e}}};e.default=c}).call(this,i("6e42")["default"])},"6f1c":function(t,e,i){"use strict";i("cef6");var a=s(i("b0ce")),n=s(i("de30"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},aec6:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticStyle:{"background-color":"#efeff4"}},t._l(t.listData,function(e,a){return i("view",{key:a,staticClass:"uni-list",staticStyle:{"margin-top":"20rpx"},attrs:{eventid:"62b9410f-0-"+a},on:{click:function(i){t.goDetail(e)}}},[i("view",{staticClass:"uni-list-cell",staticStyle:{"margin-top":"10rpx"},attrs:{"hover-class":"uni-list-cell-hover"}},[i("view",{staticClass:"uni-media-list"},[i("view",{staticClass:"uni-media-list-logo"},[i("image",{attrs:{src:e.icon}})]),i("view",{staticClass:"uni-media-list-body"},[i("view",{staticClass:"uni-media-list-text-top"},[t._v(t._s(e.name)),i("uni-tag",{staticClass:"tagme",attrs:{text:e.typeName,type:"primary",circle:!0,size:"small",mpcomid:"62b9410f-0-"+a}})],1),i("view",{staticClass:"uni-media-list-text-bottom uni-ellipsis"},[t._v(t._s(e.organizationName))])])])]),i("view",{staticClass:"uni-grid-9 uni-common-mt"},[i("view",{staticClass:"uni-grid-9-item"},[i("text",{staticClass:"uni-grid-9-text",staticStyle:{color:"#61A1F1"}},[t._v(t._s(e.consultNumber))]),i("text",{staticClass:"uni-grid-9-text"},[t._v("服务人次")])]),i("view",{staticClass:"uni-grid-9-item",attrs:{"hover-class":"uni-grid-9-item-hover"}},[i("text",{staticClass:"uni-grid-9-text",staticStyle:{color:"#61A1F1"}},[t._v(t._s(e.degree))]),i("text",{staticClass:"uni-grid-9-text"},[t._v("好评率")])]),i("view",{staticClass:"uni-grid-9-item",attrs:{"hover-class":"uni-grid-9-item-hover"}},[i("text",{staticClass:"uni-grid-9-text",staticStyle:{color:"#61A1F1"}},[t._v(t._s(e.phone))]),i("text",{staticClass:"uni-grid-9-text"},[t._v("服务电话")])])])])}))},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},b22c:function(t,e,i){"use strict";i.r(e);var a=i("5505"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},de30:function(t,e,i){"use strict";i.r(e);var a=i("aec6"),n=i("b22c");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("3b59");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},f2a8:function(t,e,i){}},[["6f1c","common/runtime","common/vendor"]]]);