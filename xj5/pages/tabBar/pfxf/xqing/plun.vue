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
			banner: '',
            }
        },
    onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
        console.log(option.id); //打印出上个页面传递的参数。
      this.banner ="http://xiaojie.xuejss.com/xw/fabuliuyan.php?id=" + option.id
    }
    }
</script>
