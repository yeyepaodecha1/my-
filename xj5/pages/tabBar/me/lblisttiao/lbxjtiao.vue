<template>
    <view>
        <web-view :webview-styles="webviewStyles" src="http://xiaojie.xuejss.com/xw/fabuxjnew.php"></web-view>
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
                }
            }
        }
    }
</script>

<style>

</style>