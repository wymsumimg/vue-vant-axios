<template>
<div class=''>
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                提交
                </van-button>
            </div>
        </van-form>
    <HelloWorld />
    <!-- <van-button type="primary" @click="login()">点击登录</van-button> -->
    <van-button type="primary" @click="login" class="btn">顶部通知</van-button>
</div>
</template>

<script>
import { Toast } from 'vant';
// import areaList from '@/common/js/area.js'
 import HelloWorld from '@/components/HelloWorld.vue'
 import {employeeClientLogin} from '../api/api'
export default {
components: {},
name: 'Home',
components: {
HelloWorld
},
data() {
return {
    // areaList,
    // searchResult: [],
    username: '',
    password: '',
};
},
computed: {},
watch: {},
methods: {
     onSubmit(values) {
      console.log('submit', values);
    },
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
    // onSave() {
    //   Toast('save');
    // },
    // onDelete() {
    //   Toast('delete');
    // },
    // onChangeDetail(val) {
    //   if (val) {
    //     this.searchResult = [
    //       {
    //         name: '黄龙万科中心',
    //         address: '杭州市西湖区',
    //       },
    //     ];
    //   } else {
    //     this.searchResult = [];
    //   }
    // },
},
created() {
},
mounted() {
},
beforeCreate() {}, 
beforeMount() {}, 
beforeUpdate() {}, 
updated() {}, 
beforeDestroy() {},
destroyed() {}, 
activated() {}, 
}
</script>
<style lang="scss">
.van-popup--top{
      left:50% !important;
  }

</style>
<style lang='scss' scoped>
//@import url(); 引入公共css类
 .btn{
    margin-top: 100px;
  }
  
</style>