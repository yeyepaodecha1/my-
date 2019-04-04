<template>
	<view class="all">
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- #endif -->

		<view class="header">
			<view class="icon-left">
				<image src="../../../static/qj-guide.PNG" mode=""></image>
			</view>
			<input type="text" placeholder="院校代码或高校名称" />
			<view class="serch-icon">
				<image src="../../../static/qj-search.png" mode=""></image>
			</view>
		</view>
		
		
		<view class="guide-body gb1">
			<view class="clg-title">我的院校与浏览记录</view>
			<view class="grid-3">
				<view class="grid-3-item">
					<navigator url="school/1.1" hover-class="none">

						<view class="grid-3-image">
							<image src="http://xiaojie.xuejss.com/img/img/img-bg/gz-head.PNG" mode=""></image>
						</view>
						<p>工艺技术学院</p>
						<view class="visit">游 览</view>

					</navigator>

				</view>
				<view class="grid-3-item">
					<navigator url="school/1.2" hover-class="none">
						<view class="grid-3-image">
							<image src="../../../static/qj-jlg.PNG" mode=""></image>
						</view>
						<p>江西理工大学</p>
						<view class="visit">游 览</view>
					</navigator>
				</view>
				<view class="grid-3-item">

					<navigator url="school/1.3" hover-class="none">
						<view class="grid-3-image">
							<image src="../../../static/qj-slg.PNG" mode=""></image>
						</view>
						<p>山东理工大学</p>
						<view class="visit">游 览</view>
					</navigator>
				</view>
			</view>
		</view>

		<view class="guide-body">
			<view class="clg-title">全国校园导览<span class="detail">查看更多高校详情</span></view>
			<view class="grid-3">
				<view class="grid-3-item">

					<navigator url="school/1.4" hover-class="none">

						<view class="grid-3-image">
							<image src="../../../static/qj-nlg.PNG" mode=""></image>
						</view>
						<p>南京理工大学</p>
						<view class="visit">游 览</view>

					</navigator>
				</view>
				<view class="grid-3-item">

					<navigator url="school/1.5" hover-class="none">
						<view class="grid-3-image">
							<image src="../../../static/qj-jlg.PNG" mode=""></image>
						</view>
						<p>江西理工大学</p>
						<view class="visit">游 览</view>
					</navigator>

				</view>
				<view class="grid-3-item">

					<navigator url="school/1.6" hover-class="none">

						<view class="grid-3-image">
							<image src="../../../static/qj-slg.PNG" mode=""></image>
						</view>
						<p>山东理工大学</p>
						<view class="visit">游 览</view>
					</navigator>
				</view>
			</view>
			<view class="grid-3">
				<view class="grid-3-item">

					<navigator url="school/1.7" hover-class="none">
						<view class="grid-3-image">
							<image src="http://xiaojie.xuejss.com/img/img/img-bg/sd-head.PNG" mode=""></image>
						</view>
						<p>苏州大学</p>
						<view class="visit">游 览</view>

					</navigator>
				</view>
				<view class="grid-3-item">
					<navigator url="school/1.8" hover-class="none">
						<view class="grid-3-image">
							<image src="http://xiaojie.xuejss.com/img/img/img-bg/zs-head.PNG" mode=""></image>
						</view>
						<p>浙江师范大学</p>
						<view class="visit">游 览</view>
					</navigator>
				</view>
				<view class="grid-3-item">
					<navigator url="school/1.9" hover-class="none">
						<view class="grid-3-image">
							<image src="http://xiaojie.xuejss.com/img/img/img-bg/hh-head.PNG" mode=""></image>
						</view>
						<p>河海大学</p>
						<view class="visit">游 览</view>
					</navigator>
				</view>
			</view>
		</view>

	</view>
</template>




<style>
	.all {
		margin-bottom: 120upx;
	}

	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		background-color: #ff9800;
		top: 0;
		z-index: 999;
	}
	
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #ff9800;
	}
	
	.header {
		width: 100%;
		background: #ff9800;
		color: white;
		position: fixed;
		z-index: 100;
		height: 68upx;
		padding: 15upx;
		
		display: flex;
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
	.icon-left image {
		width: 150upx;
		height: 60upx;
		margin-right: 10upx;
	}

.header input {
		text-align: center;
		background: #FF9800;
		border: solid 1upx white;
		border-radius: 5upx;
		margin-left: 50upx;
		margin-top: 6upx;
		width:281upx;
		
	}


	input::-webkit-input-placeholder,
	textarea::-webkit-input-placeholder {
		color: #dbd6d3;
	}

	input:-moz-placeholder,
	textarea:-moz-placeholder {
		color: #dbd6d3;
	}

	input::-moz-placeholder,
	textarea::-moz-placeholder {
		color: #dbd6d3;
	}

	input:-ms-input-placeholder,
	textarea:-ms-input-placeholder {
		color: #dbd6d3;
	}

	.serch-icon image {
		margin-left: 20upx;
		width: 44upx;
		height: 44upx;
		margin-top: 10upx;
	}

	.guide-body {
		padding: 20upx;
		background: #f9f9f9;
		
	}
	
	.gb1 {
		margin-top: 90upx;
	}
	
	.clg-title {
		padding: 2% 0;
		background: white;
		margin: 30upx 0;
		font-size: 30upx;
		font-weight: bold;
		padding-left: 20upx;
		border-left: solid 10upx #e42417;
		overflow: hidden;

	}

	.detail {
		font-size: 24upx;
		float: right;
		background: #fdf1ef;
		padding: 10upx;
		border-radius: 10upx;
	}

	.grid-3 {

		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

	}

	.grid-3-item {
		width: 30%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2%;
		box-sizing: border-box;
		background: white;
		margin-left: 3%;
		margin-top: 2%;
		text-align: center;
	}

	.a {
		text-decoration: none;
		color: black;
	}

	.a image {
		margin-left: auto;
	}

	.grid-3-item image {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		margin: auto;
	}

	.grid-3-item p {
		font-size: 11px;
		font-weight: bold;

	}

	.grid-3-image {

		margin-bottom: 30upx;
		border-radius: 20upx;
	}

	.visit {
		background: #f5f5f5;
		margin: 10%;
		font-size: 10upx;
		padding: 4upx 18upx;
	}
</style>
