<template>
    <view>
 <web-view :webview-styles="webviewStyles" src="http://xiaojie.xuejss.com/app/index.php?i=2&c=entry&act=detail&id=1&do=item&m=superman_hand2"></web-view>
	<!-- <view class="banner-title">https://xuejss.com.{{banner.id}}</view> -->
    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                    progress: false
                },
				banner: {},
            }
        },
				onLoad(e) {
			this.banner = JSON.parse(decodeURIComponent(e.detail));
			
			uni.setNavigationBarTitle({
				title: this.banner.title
			})
		},
    }
</script>

<style>
	.banner-title {
		max-height: 84upx;
		overflow: hidden;
		position: absolute;
		left: 30upx;
		bottom: 30upx;
		width: 90%;
		font-size: 32upx;
		font-weight: 400;
		line-height: 42upx;
		color: #E80080;
		z-index: 11;
	}
</style>