<template>
    <view>
    <web-view :webview-styles="webviewStyles" :src="qjurl"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                    progress: false
                },
				qjurl:''
			
            }
			
        },
		 onLoad: function (option) {
        console.log(option.qjurl); 
        // this. qjurl=this.option.qjurl;
		this.qjurl=option.qjurl;
    }

    }
</script>

<style>

</style>
