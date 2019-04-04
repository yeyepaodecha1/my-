<template>
	<view class="index">
		<swiper @change="swpierChange" :style="{height:screenHeight + 'px'}">
			<swiper-item v-for="(value,index) in data" :key="index" @click="preImg(index)">
				<image :src="value" mode="widthFix"></image>
			</swiper-item>
		</swiper>
        <!-- #ifndef H5 -->
        <view class="detail-btn-view">
        	<view class="download" @click="download"></view>

        </view>
        <!-- #endif -->
	</view>

</template>

<script>
	export default {
		data() {
			return {
				imgShow: false,
				index: 0,
				showBtn: false,
				screenHeight: 0,
				imgLength: 0,
				providerList: [],
				data: [],
				banner: '',
				zouni: '',				
				detailDec:""
			}
		},
			    onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		    console.log(option.id); //打印出上个页面传递的参数。
			  this.zouni = option.xxidid;
		  this.banner = option.id
		},
		onShow(e) {
			// #ifdef APP-PLUS
			if (plus.os.name === 'Android') {
				this.showBtn = true;
			}
			// #endif
			this.screenHeight = uni.getSystemInfoSync().windowHeight;
		
            this.imgLength = "照片详情";
			this.getData();
// 			uni.setNavigationBarTitle({
// 				title: "1/" + this.imgLength
// 			});
			// 获取分享通道

		},
	

		
		methods: {
			download() {
				uni.downloadFile({
					url: this.data[this.index],
					success: (e) => {
						uni.saveImageToPhotosAlbum({
							filePath: e.tempFilePath,
							success: () => {
								uni.showToast({
									icon: "none",
									title: "已保存到手机相册"
								})
							},
							fail: () => {
								uni.showToast({
									icon: "none",
									title: "保存到手机相册失败"
								})
							}
						});
					},
					fail: (e) => {
						uni.showModal({
							content: "下载失败，" + e.errMsg,
							showCancel: false
						})
					}
				})
			},

			//#ifdef APP-PLUS
			setting() {
				uni.showToast({
					icon: "none",
					title: "正在设为壁纸"
				})
				setTimeout(() => {
					var WallpaperManager = plus.android.importClass("android.app.WallpaperManager");
					var Main = plus.android.runtimeMainActivity();
					var wallpaperManager = WallpaperManager.getInstance(Main);
					plus.android.importClass(wallpaperManager);
					var BitmapFactory = plus.android.importClass("android.graphics.BitmapFactory");
					uni.downloadFile({
						url: this.data[this.index],
						success: (e) => {
							var filePath = e.tempFilePath.replace("file://", "");
							var bitmap = BitmapFactory.decodeFile(filePath);
							try {
								wallpaperManager.setBitmap(bitmap);
								uni.showToast({
									icon: "none",
									title: "壁纸设置成功"
								})
							} catch (e) {
								uni.showToast({
									icon: "none",
									title: "壁纸设置失败"
								})
							}
						},
						fail: () => {
							uni.showToast({
								icon: "none",
								title: "壁纸设置失败"
							})
						}
					})
				}, 100)
			},
			//#endif
			swpierChange(e) {
				this.index = e.detail.current;
				uni.setNavigationBarTitle({
					title: e.detail.current + 1 + "/" + this.imgLength
				})
			},
			preImg(index) {
				if (this.imgShow) { //防止点击过快导致重复调用 
					return;
				}
				this.imgShow = true;
				setTimeout(() => {
					this.imgShow = false;
				}, 1000)
				setTimeout(() => {
					uni.previewImage({
						current: this.data[index],
						urls: this.data
					})
				}, 150)
			},
			getData() {
									
				uni.request({
					
		
					url:"http://xiaojie.xuejss.com/xw/appxjxjphoto.php?id=" + this.banner,
			
					
					
					
					success: (res) => {
						if (res.data.code =='0') {
							uni.showModal({
								content: "请求失败，失败原因：" + res.data.msg,
								showCancel: false
							})
							return;
						}

	                     var te=res.data.data;
					     var tr=te.split(',') ;
						this.data = tr;
						
						
					},
					fail: () => {
						uni.showModal({
							content: "请求失败，请重试!",
							showCancel: false
						})
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #000;
	}

	swiper {
		flex: 1;
		width: 750upx;
		background-color: #000;
		display: flex;
		flex-direction: column;
	}
@font-face {
	font-family: texticons;
	font-weight: normal;
	font-style: normal;
	src: url('https://at.alicdn.com/t/font_702773_g9f89om4v3j.ttf') format('truetype');
}
	swiper-item {
		display: flex;
		align-items: center;
	}

	image {
		width: 750upx;
		height: 1125upx;
	}
.detail-btn-view {
	width: 750upx;
	position: fixed;
	bottom: 75upx;
	font-size: 28upx;
	justify-content: space-between;
	text-align: center;
}

.detail-btn-view view {
	opacity: 0.75;
	height: 80upx;
	border-radius: 80upx;
	width: 80upx;
	justify-content: center;
	align-items: center;
	line-height: 80upx;
	margin: 0 30upx;
	font-family: texticons;
	background: #eee;
	color: #555;
}
.detail-btn-view view text{
	margin-left: 10upx;
}
.detail-btn-view .download:before { 
	content: '\e617';
}
.detail-btn-view .collect:before { 
	content: '\e68d';
}
.detail-btn-view .setting {
	flex: 1;
}	
	
	
</style>
