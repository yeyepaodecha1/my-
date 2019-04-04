<template>
    <view>
    <web-view :webview-styles="webviewStyles" src="http://xiaojie.xuejss.com/xw/toupiao/toupiaolist.php"></web-view>
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
        }
    }
</script>

<style>

</style>