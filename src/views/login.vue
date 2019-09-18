<template>
  <div class="login">
    <div class="login-box">
      <div>
        <i class="iconfont iconyonghu"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
    height: 450px;
    width: 600px;
    background: rgba(255, 255, 255, 0.3);
    top: 50%;
    right: 0;
    border-radius: 10px;
    transform: translate(-25%, -50%);
    -webkit-transform: translate(-25%, -50%);
    box-shadow: 1px 10px 10px 1px rgba(0, 0, 0, 0.3); /* no*/
  }
}
</style>