<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">登录</h3>
      </div>
      <el-form-item prop="username">
        <!-- <span class="svg-container">
        </span> -->
        <el-input
          v-model="loginForm.userName"
          placeholder="账号/手机号"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>
      <el-form-item prop="password">
        <!-- <span class="svg-container">

        </span> -->
        <el-input
          v-model="loginForm.parseWord"
          placeholder="密码"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handleLogin" />
      </el-form-item>

      <el-button type="primary" style="width:25%;margin-bottom:24px;margin-left: 190px" @click="handleLogin">登录</el-button>
      <el-button class="thirdparty-button" type="primary" @click="showDialog=true">第三方登录</el-button>
      <el-button class="forget-passwd-button" type="primary" @click="goForgetPasswd">忘记密码</el-button>
    </el-form>

    <el-dialog title="第三方登录" :visible.sync="showDialog" append-to-body>
      第三方等登录
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog>

  </div>
</template>
<script>
import SocialSign from './socialsignin'
import cookie from '../../static/js/cookie';
import { login } from '../../api/api'


  export default {
    data(){
      return {
        loginForm: {
          userName:'',
          parseWord:'',
          autoLogin:false,
          error:"",
          userNameError:'',
          parseWordError:'',
        },
        showDialog: false,
      }
    },
    componets:{
      'social-sign':SocialSign
    },
    methods:{
      goForgetPasswd() {
        this.$router.push({ path: '/forget-passwd' })
      },
      handleLogin(){
        if(this.userName == '' || this.parseWord == ''){
          // this.$message("用户名,密码不能为空")
          console.log("用户名密码不能为空")
        }else{
        login({
            username:this.loginForm.userName, //当前页码
            password:this.loginForm.parseWord
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

<style rel="stylesheet/scss" lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg:#283443;
  $light_gray:#eee;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input{
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
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
