<template>
	<view class="all">
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- #endif -->
		<view class="uni-flex xj-header">
			<image class="xj-img" src="../../../static/xiaojielogo.png" mode=""></image>
			<view class="text-big">{{tianqi.text}}</view>
			<view class="tpr">
				<view class="temperature text-big">{{tianqi.temperature}}C°</view>
			</view>
			<view class="uni-flex" style="margin-left: 40upx;">
				<image class="dr-icon" src="../../../static/dingwei.png" mode=""></image>
				<view class="college">无锡工艺职业学院</view>
			</view>
		</view>

		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper">
						<swiper-item v-for="(value,key) in banner" :key="key">
							<image style="width: 100%;height: 100%;" :src="value.img"></image>
						</swiper-item>

					</swiper>
				</view>
			</view>
		</view>

		<view class="uni-swiper-msg">
			<view class="usm-text">
				校园动态:
			</view>
			<view class="uni-swiper-msg-icon">
				<image src="../../../static/gonggao.png" mode="widthFix"></image>
			</view>
			<swiper autoplay="true" circular="true" interval="5000">
				<swiper-item v-for="(value,key) in ggao" :key="key">
					<navigator class="ggao">{{value.title}}</navigator>
				</swiper-item>

			</swiper>
		</view>

		<view class="uni-grid-9 uni-common-mt">
			<view class="uni-grid-9-item active">
				<navigator url="menu/one" hover-class="navigator-hover">
					<image class="uni-grid-9-image" src="../../../static/in-announce.PNG"></image>
					<p class="uni-grid-9-text">校园公告</p>
				</navigator>
			</view>
			<view class="uni-grid-9-item">
				<navigator url="menu/two" hover-class="navigator-hover">
					<image class="uni-grid-9-image" src="../../../static/in-inquire.PNG"></image>
					<p class="uni-grid-9-text">问卷调查</p>
				</navigator>
			</view>
			<view class="uni-grid-9-item">
				<navigator url="menu/three" hover-class="navigator-hover">
					<image class="uni-grid-9-image" src="../../../static/in-vote.PNG"></image>
					<p class="uni-grid-9-text">校园投票</p>
				</navigator>
			</view>
			<view class="uni-grid-9-item">
				<navigator url="menu/four" hover-class="navigator-hover">
					<image class="uni-grid-9-image" src="../../../static/in-maintain.PNG"></image>
					<p class="uni-grid-9-text">设施维修</p>
				</navigator>
			</view>
			<view class="uni-grid-9-item">
				<navigator url="menu/five" hover-class="navigator-hover">
					<image class="uni-grid-9-image" src="../../../static/in-look-for.PNG"></image>
					<p class="uni-grid-9-text">失物招寻</p>
				</navigator>
			</view>
			<view class="uni-grid-9-item">
				<navigator url="menu/six" hover-class="navigator-hover">
					<image class="uni-grid-9-image" src="../../../static/in-get.PNG"></image>
					<p class="uni-grid-9-text">校园取物</p>
				</navigator>
			</view>
			<view class="uni-grid-9-item">
				<navigator url="menu/sever" hover-class="navigator-hover">
					<image class="uni-grid-9-image" src="../../../static/in-taobao.PNG"></image>
					<p class="uni-grid-9-text">淘选闲物</p>
				</navigator>
			</view>
			<view class="uni-grid-9-item">
				<navigator url="menu/eight" hover-class="navigator-hover">
					<image class="uni-grid-9-image" src="../../../static/in-part-time.PNG"></image>
					<p class="uni-grid-9-text">相关兼职</p>
				</navigator>
			</view>

		</view>

		<!-- 		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key" @click="goDetail(value)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="value.pics"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{value.title}}</view>
						<view class="uni-media-list-text-bottom">
							<text>{{value.city}}</text>
							<text>{{value.createtime}}</text>
						</view>
					</view>
				</view>
			</view>
		</view> -->


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
				<view class="phone-call">
					<image src="../../../static/id-phone.png" mode=""></image>
					<view class="tel">电话 </view>
				</view>
			</view>
			<p>{{value.title}}</p>
			<view class="detail-image">
				<image :src="value.pics" mode=""></image>
			</view>
			<view class="fab-time">发布于:{{value.createtime}} , {{value.city}}</view>
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

		<view class="fb">
			<navigator url="../me/lblisttiao/lbfbtiao">
				<image src="../../../static/pf-pencil.png" mode=""></image>
			</navigator>

		</view>

	</view>
</template>

<script>
	import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue"
	var dateUtils = require('../../../common/util.js').dateUtils;
	var limit = 10,
		page = 1;
	var data = {
		/* "cmsNews.moduleId": moduleId, */
		"page": page,
		"limit": limit
	}
	export default {

		components: {
			uniNoticeBar
		},
		data() {
			return {
				listData: [],
				banner: [],
				ggao: [],
				tianqi: {},
				reload: false
			}
		},
		onLoad() {
			this.getList();
			this.getGanner();
			this.getGggao()
		},
		onPullDownRefresh() {
			this.reload = true;
			this.getList();
			this.getGanner();
		},
		onReachBottom() {
			this.getList();
		},
		onPullDownRefresh() {
			console.log('refresh');
			this.shua = 3;

			this.getList();
			setTimeout(function() {
				uni.showToast({
					title: '刷新成功',
					duration: 2000
				});
				uni.stopPullDownRefresh();
			}, 1000);
			this.reload = true;
		},
		methods: {
			getList() {

				if (this.shua == 3) {

					data.page = 1;
					// plus.nativeUI.alert(data.page);
				} else {
					data.page = page++;

				}




				var url = "http://xiaojie.xuejss.com/xw/appxjhomeapi.php";

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


				uni.request({
					url: 'http://xiaojie.xuejss.com/app/index.php?i=2&t=0&v=5.4.1&from=wxapp&c=entry&a=wxapp&do=home&uid=&kw=&city=&m=superman_hand2',
					data: data,
					success: (data) => {
						if (data.statusCode == 200) {
							let list = this.setTime(data.data.data.slide);
							this.banner = this.reload ? list : this.banner.concat(list);
							this.reload = false;
						}
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				})





				uni.request({
					url: 'https://api.seniverse.com/v3/weather/now.json?key=iysyi0nfcjlh6cwm&location=%E6%97%A0%E9%94%A1&language=zh-Hans&unit=c',

					success: (data) => {

						this.tianqi = data.data.results[0].now;
						console.log(data);
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				})







			},

			getGanner() {
				let data = {
					column: "id,post_id,title,author_name,cover,published_at" //需要的字段名
				};

			},

			getGggao() {

				uni.request({
					url: 'http://xiaojie.xuejss.com/xw/apphomenotice.php',

					success: (data) => {

						let ggaoo = this.setTimes(data.data.data);
						this.ggao = this.ggao.concat(ggaoo);

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
					click_rate: e.click_rate,
					id: e.id,
					img: e.img,
					cat_id: e.cat_id,
					avatar: e.avatar,
					states: e.states,
					uid: e.uid,
					homezan: e.homezan,
					realname:e.realname,
					details:e.details,
					title: e.title
				}
				uni.navigateTo({
					url: "xqing/founded?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},
			setTime: function(items) {
				var newItems = [];
				items.forEach((e) => {
					newItems.push({
						city: e.city,
						pics: e.pics,
						createtime: e.createtime,
						click_rate: e.click_rate,
						id: e.id,
						img: e.img,
						cat_id: e.cat_id,
						avatar: e.avatar,
						states: e.states,
						uid: e.uid,
						realname:e.realname,
						homezan: e.homezan,
						details:e.details,
						title: e.title
					});
				});
				return newItems;
			},
			setTimes: function(itemss) {
				var newItemss = [];
				itemss.forEach((e) => {
					newItemss.push({

						id: e.id,

						title: e.title
					});
				});
				return newItemss;
			},


		},
	}
</script>

<style>
	.fb navigator {
		position: fixed;
		z-index: 1002;
		bottom: 130upx;
		right: 80upx;
		border: solid 5upx #e3e3e3;

		border-radius: 50%;
		width: 50upx;
		height: 50upx;
		display: flex;
		background: white;

	}

	.fb image {
		width: 40upx;
		height: 40upx;
		align-self: center;
		margin: auto;
	}

	page {
		height: auto;
		min-height: 100%;
	}

	.usm-text {
		min-width: 20%;
		text-align: center;
		margin-left: 10upx;
		color: #f78369;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #ff9800;
	}

	.ggao {
		margin-left: 2px;

	}

	.uni-swiper-msg-icon {
		margin-left: 5px;
		margin-top: 10upx;
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
		width: 100%;
	}



	.uni-grid-9-item {
		width: 25%;
		text-align: center;
		border: none;


	}

	.active {
		border-bottom: 10upx solid #89f2fe;

	}

	navigator {
		width: 100%;
	}

	navigator p {
		width: 100%;
		margin-bottom: 10upx;
	}

	.uni-grid-9-image {
		height: 80upx;
		width: 80upx;
		margin-bottom: 20upx;
		border-radius: 50%;
		margin-top: 20upx;
	}

	.uni-grid-9-text {}

	.uni-padding-wrap {
		width: 100%;
		padding: 0 0px;
		margin-top: 88upx;
	}

	.uni-common-mt {
		margin-top: -6px;
	}

	.xj-header {
		width: 100%;
		background: #ff9800;
		color: white;
		position: fixed;
		z-index: 100;
		height: 68upx;
		padding: 15upx;
		
	}


	.text-big {
		margin-top: 5upx;
	}

	.xj-img {
		width: 150upx;
		height: 60upx;
		margin-right: 10upx;
	}

	.tpr {}

	.temperature {
		margin-top: 5upx;
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
		height: 50upx;
		margin-top: 4upx;
		text-align: center;
		padding: 5upx 15upx;
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
		color: white;
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
		width: 132upx;
		height: 58upx;
		color: #ffffff;
		display: flex;
		padding-right: 5upx;
	}

	.phone-call image {
		width: 35upx;
		height: 35upx;
		margin: 0 6upx;
		top: 14upx;
		margin-top: 10upx;
	}

	.phone-call a {
		color: white;
		text-decoration: none;
	}
	
	.phone-call .tel {
		color: white;
	}
	
	.a-lang p {
		font-size: 35upx;
		font-weight: 600;
	}

	.detail-image image {
		width: 480upx;
		height: 336upx;
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

	.uni-swiper-msg {
		background: #ffffff;
	}
</style>
