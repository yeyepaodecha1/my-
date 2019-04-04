<template>
	<view class="all">
		<view class="header">
			浙江师范大学
		</view>
		<view class="qh-round">
			<navigator url="../jianjie/1.8?qjurl=https://720yun.com/t/942dqo9emmfypo5yi8?pano_id=WbzmcnH23gWbMsgS" hover-class="none">

				<p>浙师</p>
				<p>简介</p>

			</navigator>
		</view>
		<view class="qh-round">
			<navigator url="../qjxq?qjurl=https://720yun.com/t/a77jOg4vzm9?scene_id=3290154" hover-class="none">
				<p>逛逛</p>
				<p>浙师</p>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	.all {
		background: url(http://xiaojie.xuejss.com/img/img/img-bg/zs-bg.PNG) no-repeat;
		width: 100%;
		height: 100%;
		background-size: 100% 100%;

	}

	.header {
		background: #723473;
		color: white;
		padding: 20upx;
		font-size: 40upx;
		margin-bottom: 100upx;
	}

	.qh-round {
		background: #9778a4;
		width: 160upx;
		height: 160upx;
		text-align: center;

		border-radius: 50%;
		display: flex;
		margin: 50upx auto;
	}

	navigator {
		text-decoration: none;
		font-size: 43upx;
		line-height: 60upx;
		color: white;
		align-self: center;
		text-align: center;
		margin: auto;
	}
</style>