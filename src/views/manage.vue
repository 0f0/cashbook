<template>
  <div class="manage">
    <custome-nav>
      <template v-slot:default="props">
        <div class="nav-text">
          <i :class="['iconfont', props.item.icon]"></i>
          {{props.item.text}}
        </div>
      </template>
    </custome-nav>
    <div class="manage-right">
      <custome-header></custome-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import nav from "../components/manage/nav";
import header from "../components/manage/header";
export default {
  components: {
    "custome-nav": nav,
    "custome-header": header
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// background: linear-gradient(to left,#9853af,#623AA2)
.manage {
  height: 100vh;
  display: flex;
  .nav-text {
    margin-left: 20px;
    i {
      font-size: 18px;
      margin-right: 10px;
    }
  }
  .manage-right {
    flex: 1;
    background: #f4f4f4;
  }
}
</style>