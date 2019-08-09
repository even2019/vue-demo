<template>
  <div>
    <MapSearch title="注册" />
    <div class="reg-box">
      <!-- 昵称 -->
      <input-group type="default"
                   v-model="userName"
                   placeholder="昵称"
                   :error="errors.userName"></input-group>
      <!-- 密码 -->
      <input-group type="password"
                   v-model="passWord"
                   placeholder="请输入您的密码"
                   :error="errors.password"></input-group>
      <!-- 手机号码 -->
      <input-group type="number"
                   v-model="phone"
                   placeholder="请输入您的手机号码"
                   :error="errors.phone"
                   :btnTitle="btnTitle"
                   @btnClick="getVerifyCode"></input-group>
      <!-- 验证码 -->
      <input-group type="number"
                   v-model="verifyCode"
                   placeholder="验证码"
                   :error="errors.code"></input-group>
      <!-- 协议 -->
      <div class="register-des">
        <p>我已同意<a href="javascript:;">《玖果视频会员注册协议》</a></p>
      </div>
      <!-- 登录按钮 -->
      <div class="register-btn">
        <button :disabled="isClick"
                @click="handleRegister">注册</button>
      </div>

    </div>
  </div>
</template>

<script>
import { setInterval } from 'timers';

export default {
  name: "Register",
  data () {
    return {
      userName: "",
      passWord: "",
      phone: "",
      verifyCode: "",
      errors: {},
      btnTitle: "点击获取",
      disable: false
    }
  },
  computed: {
    isClick () {
      if (!this.userName || !this.passWord || !this.phone || !this.verifyCode) return true;
      else return false;
    }
  },
  methods: {
    handleRegister () {
      //取消错误提醒
      this.errors = {};

    },

    getVerifyCode () {
      // 获取验证码
      if (this.validatePhone()) {
        //发送网络请求
        this.validateBtn();
      }
    },
    validateBtn () {
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.btnTitle = "获取验证码";
          this.disabled = false;
        }
        else {
          // 倒计时
          this.btnTitle = time + "秒后重试";
          this.disable = true;
          time--;
        }
      }, 1000)
    },
    validatePhone () {
      // 验证手机号码
      if (!this.phone) {
        this.errors = {
          phone: "手机号码不能为空"
        };
        return false;
      }
      else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.errors = {
          phone: "请填写正确的手机号码"
        };
        return false;
      }
      else {
        this.errors = {}
        return true;
      }
    }
  }
}
</script>

<style>
</style>
