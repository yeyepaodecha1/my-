<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="http://xiaojie.xuejss.com/app/index.php?i=3&c=entry&ctrl=wmall&ac=home&op=index&do=mobile&m=we7_wmall"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: false
				}
			}
		},
		onNavigationBarButtonTap(e) {

			uni.scanCode({
				onlyFromCamera: true,
				success: function(res) {
					console.log('条码类型：' + res.scanType);
					console.log('条码内容：' + res.result);
					
				uni.setStorage({
                 key: 'urll',
                 data: res.result,
                 success: function () {
                 console.log('success');
                 }
                 });	
				uni.navigateTo({
					url: '/pages/tabBar/services/sao'
	 			});				
					
				}
			    });


// 			uni.navigateTo({
// 				url: '/pages/tabBar/services/sao'
// 			});




		}
	}
</script>

<style>

</style>
