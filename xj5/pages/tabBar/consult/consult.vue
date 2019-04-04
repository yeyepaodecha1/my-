<template>
	<view class="all">
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- #endif -->
		<view class="uni-flex header">
			<view class="shiye">
				<image src="../../../static/field.png" mode=""></image>
			</view>
			<view class="at-ft">
				<view class="attention">我的关注</view>
			</view>
			<view class="sc">收藏</view>
			<view class="search">
				
				<view class="fab">
					<navigator url="./fabuxjnew" hover-class="navigator-hover">
						<image src="../../../static/camera.svg" mode=""></image>
						<p>发布</p>
					</navigator>
				</view>
			</view>

		</view>



		<div class="nav-box">

			<!-- 导航列表 -->
			<li class="nav-item" v-for="(item, index) in nav" @click="routerLink(index, item.path)" :key="index">
				<!-- 判断高亮表 -->
				<p :class=" navIndex === index ? 'item-cn item-cn-active' : 'item-cn'">
					{{ item.title }}
				</p>
				<!-- 判断高亮表 -->

			</li>
		</div>

		<view class="recommend-body" v-for="(value,key) in listData" :key="key" >
			<view class="my-flex">
				<view class="touxiang" @click="goDetail(value)">
					<image class="" :src="value.avatar"></image>
				</view>
				<view class="name">
					<view class="earth">
						<view class="one" @click="goDetail(value)">{{value.realname}}</view>
						
						<view class="right-icon">
							
							<image src="../../../static/cs-five.png" mode="" @click="gocollect()"  id="c1"></image>
							
							<view class="attention2" @click="goattention()" >关注</view>
						</view>
					
					
					</view>
					<view class="time">{{value.createtime}} · {{value.city}}</view>
				</view>
			</view>
			<view class="describe" @click="goDetail(value)">

				{{value.title}}

			</view >
			<view class="vedio" @click="goDetail(value)">
				<image :src="value.pics" mode=""></image>
			</view>
			<view class="icon-bottom" @click="goDetail(value)" >
				<view class="ib-item">
					<image src="../../../static/relay.png" mode=""></image>
					<span>转发</span>
				</view>
				<view class="ib-item">
					<image src="../../../static/comment.png" mode=""></image>
					<span>评论</span>
				</view>
				<view class="ib-item" >
					<image src="../../../static/thumbs-up.png" mode=""></image>
					<span>点赞</span>
				</view>
			</view>

		</view>


	</view>

</template>

<script>
	var dateUtils = require('../../../common/util.js').dateUtils;
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
				nav: [{
						title: '认证院校',
						path: '#'
					},
					{
						title: '推荐',
						path: '#'
					},
					{
						title: '其他院校',
						path: '#'
					},
					{
						title: '文科生',
						path: '#'
					},
					{
						title: '理科生',
						path: '#'
					},
				],
				listData: [],
				navIndex: 1,
				
				banner: {},
				
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
			this.shua = 3;
			setTimeout(function() {
				uni.showToast({
					title: '刷新成功',
					duration: 2000
				});
				uni.stopPullDownRefresh();
			}, 1000);
		},

		methods: {
			routerLink(index, path) {
				// 点击哪个路由就赋值给自定义的下下标
				this.navIndex = index;
				// 路由跳转
				this.$router.push(path)
			},

			/**
			 * 检索当前路径
			 * @param path
			 */
			checkRouterLocal(path) {
				// 查找当前路由下标高亮
				this.navIndex = this.nav.findIndex(item => item.path === path);
			},

			getList() {
					if (this.shua == 3) {
	
		data.page = 1;
		// plus.nativeUI.alert(data.page);
	} else {
		data.page = page++;
	
	}
				
				var url = "http://xiaojie.xuejss.com/xw/appxjnewslist.php";

				uni.request({
					url: url,
					data: data,
					success: (data) => {
						if (data.statusCode == 200) {
							let list = this.setTime(data.data.data);
							this.listData = this.reload ? list : this.listData.concat(list);
							this.reload = false;
						}
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				})
			},

			goDetail: function(e) {
				let detail = {
					city: e.city,
					pics: e.pics,
					createtime: e.createtime,
					id: e.id,
					img: e.img,
					cat_id: e.cat_id,
					avatar: e.avatar,
					states: e.states,
					uid: e.uid,
					realname:e.realname,
					details:e.details,
					title: e.title
				}
				uni.navigateTo({
					url: "xqing?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},

			setTime: function(items) {
				var newItems = [];
				items.forEach((e) => {
					newItems.push({
						city: e.city,
						pics: e.pics,
						createtime: e.createtime,
						id: e.id,
						avatar: e.avatar,
						uid:e.uid,
						realname:e.realname,
						details:e.details,
						title: e.title
					});
				});
				return newItems;
			},
			
			gocollect: function() {
				
					uni.request({
						url: 'http://xiaojie.xuejss.com/xw/appxwzan.php?id=' + this.banner.id,
						success: (data) => {
							if (data.data.code == 1) {
									
							  uni.showToast({
			                   title: '已收藏',
			                    duration: 2000,
								
			                   });
							   
							   this.cl1.style = "display: none";
							   this.cl2.style = "display: block";
			               
							}
							if (data.data.code == 0) {
									
							  uni.showToast({
			                   title: '收藏成功',
			                    duration: 2000
			                   });
							   
							   this.cl1.style = "display: none";
							   this.cl2.style = "display: block";
								
							}
							if (data.data.code == 2) {
									
							  uni.showToast({
			                   title: '未登录',
			                    duration: 2000
			                   });
			               
							}												
						},
						fail: () => {
							console.log('fail');
						}
					})
			
			
			},
			
			
			goattention: function() {
				
					uni.request({
						url: 'http://xiaojie.xuejss.com/xw/appxjzan.php?id=' + this.banner.id,
						success: (data) => {
							if (data.data.code == 1) {
									
							  uni.showToast({
			                   title: '已关注',
			                    duration: 2000,
								
			                   });
							   
							   
			               
							}
							if (data.data.code == 0) {
									
							  uni.showToast({
			                   title: '关注成功',
			                    duration: 2000
			                   });
							   
							  
								
							}
							if (data.data.code == 2) {
									
							  uni.showToast({
			                   title: '未登录',
			                    duration: 2000
			                   });
			               
							}												
						},
						fail: () => {
							console.log('fail');
						}
					})
			
			
			},
			

		},
	}
</script>

<style>
	.all {
		margin-bottom: 120upx;
	}
	
	.name {
		width: 100%;
	}

	.earth {
		display: flex;
		width: 100%;
	}

	#c1 {
		margin-top: 15upx;
	}
	
	
	
	.delete {
		color: red;
		margin-left: 20upx;
		float: left;
	}

	.right-icon {
		margin-left: auto;
		margin-right: 20upx;
		display: flex;
	}

	.right-icon image {
		width: 35upx;
		height: 35upx;
		margin-right: 30upx;
		
	}

	.attention2 {

		background: #ff9800;
		color: white;
		padding: 0upx 20upx;
		text-align: center;
		border-radius: 10upx;
		margin-top: 8upx;
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

	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		background-color: #ff9800;
		top: 0;
		z-index: 999;
	}

	.nav-box {
		display: flex;

		background: #fdf1ef;

	}

	.nav-item {
		text-align: center;
		width: 20%;
		position: relative;
		display: inline-block;
		font-size: 30upx;
		line-height: 30upx;
		margin-top: 88upx;
	}

	/*导航普通状态*/
	.item-cn {
		color: #1c2438;
		font-weight: 800;
		padding: 30upx 0;
	}



	/*导航高亮*/
	.item-cn-active {
		color: red;
		border-bottom: red solid 2upx;
		padding: 30upx 0;
	}

	/*导航高亮*/
	.item-en-active {
		color: #5cadff;
	}

	.nav-item:hover .item-cn {
		color: red;
	}

	.nav-item:hover .item-en {
		color: #5cadff;
	}

	.nav-item:after {
		position: absolute;
		right: 0;
		top: 20upx;
		content: '';
		width: 1upx;
		height: 16upx;
		background-color: #f8f8f8;
	}

	.nav-item:after:last-child {
		width: 0;
	}

	.active {
		color: red;
		border-bottom: solid 2upx red;
	}

	.swiper-tab-list {
		padding-bottom: 20upx;
		padding-top: 20upx;
		margin: 0;
	}

	.header {
		width: 100%;
		background: #ff9800;
		color: white;
		position: fixed;
		z-index: 100;
		height: 68upx;
		padding: 15upx;
		
	}

	.shiye image {
		width: 120upx;
		height: 50upx;
		margin-right: 10upx;
		margin-top: 10upx;
	}

	.at-ft {
		padding: 10upx 0;
	}

	.sc,
	.attention {
		
		padding-top: 10upx;
	}
	
	.sc {
		margin-left: 8upx;
	}

	.attention {
		padding: 0;
		padding-right: 20upx;
		border-right: solid 2upx white;

	}

	.search {
		display: flex;
		max-width: 45%;
		margin-left: auto;
		padding-bottom: 10upx;
		margin-right: 20upx;
	}

	input {

		border: solid 1upx white;
		border-radius: 15upx;
		padding: 0 10upx;
		height: 80%;
		margin: 15upx;
		
	}

	.fab {
		min-width: 20%;
		text-align: center;
		line-height: 14upx;
		font-size: 8upx;
		margin-top: 10upx;
		margin-right: 13upx;
		
	}

	.fab image {
		width: 30upx;
		height: 30upx;
	}

	.uni-swiper-tab {
		background: #fdf1ef;
		border-bottom: none;
	}

	.recommend-body {
		background: white;
		margin-top: 20upx;
		padding: 20upx 0;
	}

	.touxiang image {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin-left: 20upx;
		margin-right: 10upx;
	}

	.name p {
		font-weight: bold;
	}

	.time {
		color: #989898;
	}

	.describe {
		margin-left: 20upx;
		font-size: 30upx;
		display: -webkit-box;
		word-break: break-all;
		text-overflow: ellipsis;
		font-size: 28upx; 
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2; 


	}

	.vedio image {
		width: 100%;
	}

	.icon-bottom {
		display: flex;

	}

	.ib-item {
		width: 33%;
		text-align: center;
	}

	.ib-item image {
		width: 30upx;
		height: 30upx;
	}

	.my-flex {
		display: flex;
	}
</style>
