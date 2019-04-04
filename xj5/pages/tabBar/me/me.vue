<template>
	   <view>	
				<!-- #ifdef APP-PLUS -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- #endif -->	   
			   
    <web-view :webview-styles="webviewStyles" src="http://xiaojie.xuejss.com/app/index.php?i=3&c=entry&ctrl=wmall&ac=member&op=mine&do=mobile&m=we7_wmall"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                 
					 color: '#FF3333',
					 top: 20
                }
            }
        }
    }
</script>

<style>
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
</style>