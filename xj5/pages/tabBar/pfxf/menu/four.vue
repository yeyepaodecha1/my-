<template>
	<view class="">
		
				<view class="index-detail" v-for="(value,key) in listData" :key="key" @click="goDetail(value)">
			<view class="detail-top">
				<view class="head">
					<image :src="value.avatar" mode=""></image>
				</view>
				<view class="a-lang">
					<p>{{value.realname}}</p>
					<view class="discover">
						{{value.cat_id}}
					</view>
				</view>
				<view class="or">
					{{value.states}}
				</view>
				<view class="gt"><view class="gt1"  @click="gotel()">拨打电话</view> </view>
			</view>
			<p>{{value.title}}</p>
			<view class="detail-image">
				<image :src="value.pics" mode=""></image>
			</view>
			<view class="fab-time">发布于:{{value.createtime}} {{value.city}}</view>
			<view class="detail-bottom">
				<image src="../../../static/id-eye.png" mode=""></image>
				<p><span class="watch">{{value.click_rate}}</span> 人浏览</p>
				<image src="../../../static/id-thumbs-up.png" mode=""></image>
				<p><span class="watch">{{value.homezan}}</span> 人点赞</p>
				<view class="xq">
					查看详情>>
				</view>
			</view>
		</view>

			</view>
		</template>

		<script>
			var dateUtils = require('../../../../common/util.js').dateUtils;
			var limit = 10,
				page = 1;
			var data = {
				/* "cmsNews.moduleId": moduleId, */
				"page": page,
				"limit": limit
			}
			export default {
		

				data() {
					return {
						listData: [],
						reload: false
					}
				},
				onLoad() {
					this.getList();
			
				},
				onPullDownRefresh() {
					this.reload = true;
					this.getList();
			
				},
				onReachBottom() {
					this.getList();
				},
				onPullDownRefresh() {
					console.log('refresh');
					setTimeout(function() {
						uni.showToast({
							title: '刷新成功',
							duration: 2000
						});
						uni.stopPullDownRefresh();
					}, 1000);
				},
				methods: {
					getList() {
						//data.page = page++;
						var url = "http://xiaojie.xuejss.com/xw/appxjhomeflapi.php?fl=54";
		
						uni.request({
							url: url,
							data: data,
							success: (data) => {
								if (data.statusCode == 200) {
									let list = data.data.data;
									this.listData = this.reload ? list : this.listData.concat(list);
									this.reload = false;
								}
							},
							fail: (data, code) => {
								console.log('fail' + JSON.stringify(data));
							}
						})
		

					},
					
					gotel: function() {
					
					
					uni.makePhoneCall({
					   phoneNumber: this.clktel.phone,
					
						
					});
					
					
							},
		
		
					goDetail: function(e) {
						let detail = {
								city: e.city,
								pics: e.pics,
								createtime: e.createtime,
								click_rate:e.click_rate,
						        homezan:e.homezan,									
								id: e.id,
								img: e.img,
								cat_id:e.cat_id,
								avatar:e.avatar,
								states:e.states,	
								uid:e.uid,	
					            realname:e.realname,																			
								title: e.title
						}
						uni.navigateTo({
							url: "../xqing/founded?detail=" + encodeURIComponent(JSON.stringify(detail))
						})
					},
					setTime: function(items) {
						var newItems = [];
						items.forEach((e) => {
							newItems.push({
								city: e.city,
								pics: e.pics,
								createtime: e.createtime,
					        	click_rate:e.click_rate,	
						        homezan:e.homezan,																
								id: e.id,
								img: e.img,
								cat_id:e.cat_id,
								avatar:e.avatar,		
								states:e.states,	
								uid:e.uid,	
					            realname:e.realname,																			
								title: e.title
							});
						});
						return newItems;
					},
		
		
		
				},
			}
		</script>
				
		<style>
			
			
			.gt{
				margin-left: auto;
			}
			
			.gt1 {
				color: white;
				background: #e06667;
				padding: 15upx;
				border-radius: 10upx;
			}
			
			page {
				height: auto;
				min-height: 100%;
			}
		
			.status_bar {
				height: var(--status-bar-height);
				width: 100%;
				background-color: #ff9800;
			}
		
			.top_view {
				height: var(--status-bar-height);
				width: 100%;
				position: fixed;
				background-color: #ff9800;
				top: 0;
				z-index: 999;
			}
		
			.uni-card {
				box-shadow: none;
			}
		
			.uni-list:after {
				height: 0;
			}
		
			.uni-list:before {
				height: 0;
			}
		
			.uni-media-list-logo {
				width: 180upx;
				height: 140upx;
			}
		
			.uni-media-list-body {
				height: auto;
				justify-content: space-around;
			}
		
			.uni-media-list-text-top {
				height: 74upx;
				font-size: 28upx;
				overflow: hidden;
			}
		
			.uni-media-list-text-bottom {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
		
			.uni-grid-9 {
				background-color: #FFFFFF;
			}
		
			.uni-grid-9-image {
				height: 80upx;
				width: 80upx;
			}
		
			.uni-grid-9-text {
				margin-top: 30upx;
			}
		
			.uni-padding-wrap {
				width: 100%;
				padding: 0 0px;
			}
		
			.uni-common-mt {
				margin-top: -6px;
			}
		
			.xj-header {
				background: #ff9800;
				color: white;
				padding: 20upx;
				position: relative;
		
			}
		
		
			.text-big {
				font-size: 120%;
			}
		
			.xj-img {
				width: 150upx;
				height: 60upx;
				margin-right: 10upx;
			}
		
			.temperature {
		
				padding: 0 20upx;
				border-right: solid 2upx white;
			}
		
			.dr-icon {
				width: 50upx;
				height: 50upx;
				margin: 0 20upx;
				margin-top: 10upx;
				margin-left: auto;
			}
		
			.college {
				border: solid white 0.10upx;
				border-radius: 15upx;
				padding: 10upx;
		
				text-align: center;
			}
		
			.index-detail {
				margin-top: 15upx;
				padding: 20upx;
				background: white;
			}
		
			.detail-top,
			.detail-image,
			.detail-bottom {
				display: flex;
			}
		
			.detail-top>* {
				align-self: center;
		
			}
		
			.head image {
				width: 100upx;
				height: 100upx;
				margin-right: 20upx;
			}
		
			.a-lang {
				text-align: center;
			}
		
			.discover {
				background: #19daa6;
				padding: 0 10upx;
				border-radius: 10upx;
			}
		
			.or {
				color: red;
				margin: 0 30upx;
			}
		
			.phone-call {
				margin-left: auto;
				background: #e06667;
				padding: 10upx;
				border-radius: 10upx;
			}
		
			.phone-call image {
				width: 40upx;
				height: 40upx;
				margin: 0 10upx;
			}
		
			.a-lang p {
				font-size: 35upx;
				font-weight: 600;
			}
		
			.detail-image image {
				width: 50%;
				height: 186upx;
				padding: 10upx;
			}
		
			.fab-time {
				color: #9e9e9e;
			}
		
			.detail-bottom {
				background: #f2f2f2;
			}
		
			.detail-bottom image {
				width: 30upx;
				height: 30upx;
				padding-top: 10upx;
				margin-left: 30upx;
				margin-right: 15upx;
			}
		
			.watch,
			.xq {
				color: #1eadef;
			}
		
			.xq {
				margin-left: auto;
				padding-right: 30upx;
			}
		</style>