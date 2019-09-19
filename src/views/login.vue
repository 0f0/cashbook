<template>
  <div class="login">
    <div class="login-box">
      <div class="login-text">
        <p>个人资金管理系统</p>
        <p>Personal Fund Management System</p>
      </div>

      <div>
        <div class="item">
          <i class="iconfont iconyonghu"></i>
          <input type="text" placeholder="请输入用户名" />
        </div>
        <div class="item">
          <i class="iconfont iconmima"></i>
          <input type="password" placeholder="请输入登录密码" />
        </div>
      </div>
      <button class="login-button" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push({ path: "/manage" });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  position: relative;
  background: url(~@/assets/login.jpg) no-repeat center center;
  background-size: 100% 100%;
  .login-box {
    position: absolute;
    height: 420px;
    width: 580px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 80px;
    background: rgba(255, 255, 255, 0.3);
    top: 50%;
    right: 0;
    border-radius: 10px;
    transform: translate(-25%, -50%);
    -webkit-transform: translate(-25%, -50%);
    box-shadow: 1px 10px 10px 1px rgba(0, 0, 0, 0.3); /* no*/
    .login-text {
      font-size: 24px;
      font-weight: 600;
      color: #888;
    }
    .item {
      height: 40px;
      width: 280px;
      display: flex;
      align-items: center;
      background: #fff;
      padding: 0px 10px;

      input {
        flex: 1;
        height: 40px;
        margin-left: 10px;
        border: none;
        outline: none;
      }
    }
    .item:nth-child(1) {
      margin-bottom: 20px;
    }
    .login-button {
      width: 280px;
      height: 40px;
      color: #fff;
      font-size: 18px;
      background: #007fff;
      border: none;
      outline: none;
      box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.3);
      &:hover {
        background: #2868a9;
      }
      &:active {
        background: #2868a9;
        box-shadow: none;
      }
    }
  }
}
</style>