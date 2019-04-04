<template>
	<view class="all">
		<view class="message">
			<view class="ms-head">
				<image :src="banner.avatar" mode=""></image>
				<view class="mh-text">
					<p>{{banner.realname}}</p>
					<view class="mt-time">{{banner.createtime}}  / {{banner.states}}</view>
				</view>
			</view>
			<view class="m-describe">
                {{banner.title}}
				<p>{{banner.details}}</p>
			</view>
			<view class="grid-3">
				<view class="grid-3-item" @click="goDetail">
					<view v-for="(value,key) in xqphoto" :key="key">
					<image :src="value" mode=""></image>						
					</view>

				</view>

				
			</view>
		</view>
		
		<view class="comment-title">
			全部评论（{{liucount }} 条）
		</view>
		
		<view class="comment-body">
			<view  v-for="(value,key) in liu" :key="key" >
			<view class="cb-name">
				<image :src="value.avatar" mode=""></image>
				<span>{{value.realname}}</span>
			</view>
			<view class="detail">
				<view class="comment-text">
					{{value.title}}
				</view>
				<view class="badage">
					<view class="b-time">{{value.createtime}}</view>
					<view class="b-img">
					</view>
				</view>
			</view>
			
	        </view>
			
			
			<view class="footer">
				<view class="footer-item">
					
	            <form @submit="formSubmit" @reset="formReset">
					
					<view formType="submit" class="fi-item">
						<button  formType="submit">
							<image src="../../../../static/fd-share.png" mode=""></image>
							<p>分享</p>
						</button>
					</view>																				
				</form>	
								
					
					<view class="fi-item">
						<navigator :url="'plun?id=' + banner.id"  hover-class="navigator-hover">
						<image src="../../../../static/fd-comment.png" mode=""></image>
						<p>评论</p>
						</navigator>
					</view>
					
					<view class="fi-item"   @click="gozan()">
						<image src="../../../../static/fd-like.png" mode=""></image>
						<p id="zan">点赞</p>
					</view>
				</view>
				<view class="footer-text"  @click="gotel()">联系他</view> 
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'list-triplex-row',
				banner: {},
				liu:[],
				xqphoto:[],
				liucount:{},				
				htmlString: ""
			}
		},
		onShareAppMessage() {
			return {
				title: this.banner.title,
				path: '/pages/template/list2detail-detail/list2detail-detail?detailDate=' + JSON.stringify(this.banner)
			}
		},
		
		onLoad(e) {
			this.banner = JSON.parse(decodeURIComponent(e.detail));
			this.getDetail();
			uni.setNavigationBarTitle({
				title: this.banner.title
			})
		},
		methods: {
			getDetail() {
				uni.request({
					url: 'http://xiaojie.xuejss.com/xw/appxjliu.php?id=' + this.banner.id,
					success: (data) => {
						if (data.statusCode == 200) {
								
						this.liu = data.data.data;	
                       this.clktel = data.data;	
						}
					},
					fail: () => {
						console.log('fail');
					}
				})
				
				uni.request({
					url: 'http://xiaojie.xuejss.com/xw/appxjliucount.php?id=' + this.banner.id,
					success: (data) => {
						if (data.statusCode == 200) {				
				        this.liucount = data.data.data;	
						}
					},
					fail: () => {
						console.log('fail');
					}
				})

				uni.request({
					url: 'http://xiaojie.xuejss.com/xw/appxjphoto.php?id=' + this.banner.id,
					success: (data) => {
						if (data.statusCode == 200) {	
					var te=data.data.data;
					var tr=te.split(',') ;
				        this.xqphoto = tr;	
						
						console.log(tr);
						}
					},
					fail: () => {
						console.log('fail');
					}
				})				
				
				
			},			
			handleError(evt) {
				plus.nativeUI.alert("ddddd");
            },
			
			goDetail() {
				uni.navigateTo({
					url: "detail?xxid=1&id=" + this.banner.id
				})
			},
			
		        formSubmit:function(){
                         
                var title = this.banner.title;
                var miaoshu = this.banner.createtime;
                var imgurl = this.banner.imgurl;
                var url = 'http://xiaojie.xuejss.com/xw/share_xj.php?id='+ this.banner.id;
                 console.log(url);
uni.share({
    provider: "weixin",
    scene: "WXSceneSession",
    type: 0,
    href: url,
    title: title,
    summary: miaoshu,
    imageUrl: imgurl,
    success: function (res) {
        console.log("success:" + JSON.stringify(res));
    },
    fail: function (err) {
        console.log("fail:" + JSON.stringify(err));
    }
});
            },	
			
			
			
			
		gotel: function() {


uni.makePhoneCall({
   phoneNumber: this.clktel.phone,

	
});


		},	
			
		gozan: function() {
			
				uni.request({
					url: 'http://xiaojie.xuejss.com/xw/appxwzan.php?id=' + this.banner.id,
					success: (data) => {
						if (data.data.code == 1) {
								
						  uni.showToast({
                           title: '已赞',
                            duration: 2000
                           });
                       
						}
						if (data.data.code == 0) {
								
						  uni.showToast({
                           title: '点赞成功',
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
			
			
			
			
		}
	}
</script>

<style>
	.all {
		margin-bottom: 120upx;
	}
	
	button {
		padding: 0;
		background: none;
		line-height: 54upx;
		margin: 0;		
	}
	
	uni-button {
		position: static;
	}
	
	button p{
		font-size: 28upx;
	}
	
	
	
	.message {
		padding: 20upx 10upx 0 30upx;
		background: white;
		margin-top: 5upx;
		margin-bottom: 20upx;
	}
	
	.ms-head {
		display: flex;
	}
	
	.ms-head image {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;	
		margin-right: 20upx;
	}
	
	.mh-text p {
		font-weight: bold;
	}
	
	.m-describe {
		font-size: 33upx;
		margin-top: 20upx;
		line-height: 40upx;
	}
	
	.grid-3 {
		display: flex;
		margin-top: 20upx;
		
		flex-wrap: wrap;
	}
	
	.grid-3-item {
		width: 33%;
		text-align: center;
		
	}
	
	.grid-3-item image {
		width: 480upx;
		height: 336upx;
		padding: 10upx;
	}
	
	.comment-title {
		background: white;
		padding: 10upx 20upx;
		margin-bottom: 5upx;
	}
	
	.comment-body {
		background: white;
		padding: 15upx 20upx;
	}
	
	.cb-name {
		display: flex;
	}
	
	.cb-name >* {
		align-self: center;
	}
	
	.cb-name image {
		width: 70upx;
		height: 70upx;
		border-radius: 50%;
		margin-right: 20upx;
	}
	
	.cb-name span {
		color: #878787;
	}
	
	.detail {
		padding-left: 80upx;
		padding-bottom: 15upx;
	}
	
	.comment-text {
		font-size: 35upx;
	}
	
	.badage {
		display: flex;
		margin: 10upx 0;
	}
	
	.b-time {
		color: #878787;
	}
	
	.b-img {
		margin-left: auto;
	}
	
	.b-img image {
		width: 30upx;
		height: 30upx;
		margin-right: 40upx;
	}
	
	.relay {
		background: #f7f7f7;
		padding: 20upx;
	}
	
	.sp1 {
		color: #516482;
	}
	
	.sp2 {
		margin: 0 10upx;
	}
	
	.footer {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 1001;
		width: 100%;
	}
	
	.footer-item {
		text-align: center;
		align-self: center;
		display: flex;
		width: 100%;
		background: white;
		padding: 5upx;
	}
	
	.fi-item {
		width: 100%;
		text-align: center;
		align-self: center;
	}
	
	.fi-item image {
		width: 40upx;
		height: 40upx;
	}
	
	.fi-item p{
		color: #8a8a8a;
	}
	
	.footer-text {
		align-self: center;
		background: #0199fe;
		padding: 20upx 0upx;
		font-size: 45upx;
		color: white;
		min-width: 40%;
		text-align: center;
	}
	
	
</style>
