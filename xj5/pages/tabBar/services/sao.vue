<template>
    <view>			
<web-view :webview-styles="webviewStyles"    :src="banner" ></web-view>

    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333',
						progress:'false'
                    }
                },
			banner: ''		
            }
        },
    onLoad() { //option为object类型，会序列化上个页面传递的参数
try {
    const value = uni.getStorageSync('urll');
    if (value) {
        console.log(value);
		// plus.nativeUI.alert(value);
		this.banner=value;
    }
} catch (e) {
    // error
}

    }
    }
</script>