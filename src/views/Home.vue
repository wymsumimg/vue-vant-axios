<template>
<div class=''>
    <van-swipe style="height: 200px;">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
        </van-swipe-item>
    </van-swipe>
    <div style="margin-top:10px;">
        <van-grid :gutter="10">
            <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
        </van-grid>
    </div>
    <div>
        <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            </van-grid-item>
        </van-grid>
    </div>

    <van-button type="primary" @click="login()">点击登录</van-button>

    <HelloWorld />
</div>
</template>

  <script>
  import {employeeClientLogin} from '../api/api'
    import HelloWorld from '@/components/HelloWorld.vue'
    export default {
        name: 'Home',
        components: {
          HelloWorld
        },
        data() {
              return {
              images: [
                  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3557543371,89408500&fm=26&gp=0.jpg',
                  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2462146637,4274174245&fm=26&gp=0.jpg',
              ],
              };
        },
        methods:{
            login(){
                let params={
                    "Name":'厂长',
                    "Domain":'localhost:8080',
                    "PassWord":'1001'
                }
                employeeClientLogin(params).then(res=>{
                    const {ReturnCode,Data}=res
                    if(ReturnCode==200){
                        console.log(res,'01001001')
                         this.$notify({
                            message:'我是提示的notify',
                            background:'pink',
                            duration: 1000
                            })

                    }
                })
            }
        }
    }
  </script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.van-swipe-item{ 
    background-color: rgb(65, 63, 63);
    img{
        height: 200px;
    }
}
</style>