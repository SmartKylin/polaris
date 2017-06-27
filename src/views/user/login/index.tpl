<div class="loginView">
  <div class="loginView--logo">
    <img width="140" src="../../../images/logo.png">
  </div>

  <div class="loginView--ipt">
    <input type="text" placeholder="您的手机号码" v-model="mobile">
  </div>
  <div class="loginView--sms">
    <div class="loginView--ipt">
      <input type="text" placeholder="验证码" v-model="vcode">
    </div>
    <div class="loginView--sms--btn" :class="{disabled: notice}" @click="sendCode">
      {{notice ? notice : '获取验证码'}}
    </div>
  </div>

  <div class="loginView--btn" @click="login">登录</div>
  <p class="loginView--notice">手机号未注册？请联系运营人员添加账号</p>
</div>
