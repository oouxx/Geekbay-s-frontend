<template>
  <div class="register-container">
    <el-form ref="registerForm" :model="registerForm" class="register-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">注册</h3>
      </div>
      <el-form-item prop="username">
        <!-- <span class="svg-container">
        </span> -->
        <el-input
          v-model="registerForm.userName"
          placeholder="账号/手机号"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="registerForm.passWord"
          type="password"
          placeholder="密码"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handleRegister" />
      </el-form-item>
      <el-button type="primary" style="width:25%;margin-bottom:24px;margin-left: 190px" @click="handleRegister">注册</el-button>
    </el-form>

  </div>
</template>

<script>
import cookie from '../../static/js/cookie';
import { register } from '../../api/api'
export default {
  name: 'Register',
  data(){
    return{
      registerForm:{
        userName:'',
        password:''
      }
    }
  },
  methods:{
  handleLogin(){
    login({
        username:this.loginForm.userName, //当前页码
        password:this.loginForm.passWord
    }).then((response)=> {
          console.log(response);
          //本地存储用户信息
          cookie.setCookie('name',this.userName,7);
          cookie.setCookie('token',response.data.token,7)
          this.$store.dispatch('setInfo')
          this.$router.push({ path: '/home' })
        }).catch(function (error) {
          console.log(error)
        })
    }
  },
  created(){
    //清除缓存
    cookie.delCookie('token');
    cookie.delCookie('name');
    //重新触发store
    //更新store数据
    this.$store.dispatch('setInfo');
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.register-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .register-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 40px;
  }
  .forget-passwd-button {
    position: absolute;
    left: 25px;
    bottom: 40px;
  }
}
</style>

