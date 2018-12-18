<template>
  <div class="fp-container">
    <el-form ref="fpForm" :model="fpForm" class="fp-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">修改密码</h3>
      </div>
      <el-form-item prop="mobile">
        <!-- <span class="svg-container">
          <svg-icon icon-class="mobile" />
        </span> -->
        <el-input
          v-model="fpForm.mobile"
          placeholder="手机号码"
          name="mobile"
          type="text"
          auto-complete="on"
        />
      </el-form-item>
      <el-form-item prop="veriCode">
        <!-- <span class="svg-container">
          <svg-icon icon-class="message" />
        </span> -->
        <el-input
          v-model="fpForm.veriCode"
          placeholder="验证码"
          name="veriCode"
          auto-complete="on"
          @keyup.enter.native="handlefp" />
        <span class="send-code" @click="sendCode">
          <el-button class="">发送</el-button>
        </span>
      </el-form-item>
      <el-form-item prop="password-one">
        <!-- <span class="svg-container">
          <svg-icon icon-class="password" />
        </span> -->
        <el-input
          :type="passwordType"
          v-model="fpForm.passwordOne"
          placeholder="新密码"
          name="passwordOne"
          auto-complete="on"/>
      </el-form-item>
      <el-form-item prop="passwordTwo">
        <!-- <span class="svg-container">
          <svg-icon icon-class="password" />
        </span> -->
        <el-input
          :type="passwordType"
          v-model="fpForm.passwordTwo"
          placeholder="新密码"
          name="passwordTwo"
          auto-complete="on"
          @keyup.enter.native="changePasswd" />
        <!-- <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span> -->
      </el-form-item>

      <!--<el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">{{ $t('login.logIn') }}</el-button>-->
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="changePasswd">修改密码</el-button>

    </el-form>
  </div>
</template>

<script>
// import { isValidMobile } from '../utils/validate'

export default {
  name: 'FP',
  components: { },
  data() {
    const validateMobile = (rule, value, callback) => {
      if (!isValidMobile(value)) {
        callback(new Error('输入的手机号不合法'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value !== this.fpForm.passwordOne) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      fpForm: {
        mobile: '',
        veriCode: '',
        passwordOne: '',
        passwordTwo: ''
      },
      loading: false,
      showDialog: false,
      redirect: '/login'
    }
  },
  watch: {

  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  },
  methods: {
    sendCode() {
    },
    changePasswd() {
      this.$refs.fpForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('ChangePasswordByMobile', this.fpForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    afterQRScan() {
      // const hash = window.location.hash.slice(1)
      // const hashObj = getQueryObject(hash)
      // const originUrl = window.location.origin
      // history.replaceState({}, '', originUrl)
      // const codeMap = {
      //   wechat: 'code',
      //   tencent: 'code'
      // }
      // const codeName = hashObj[codeMap[this.auth_type]]
      // if (!codeName) {
      //   alert('第三方登录失败')
      // } else {
      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
      //     this.$router.push({ path: '/' })
      //   })
      // }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg:#2f4764;
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
  .fp-container {
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

.fp-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .fp-form {
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
  }
  .send-code {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

}
</style>
