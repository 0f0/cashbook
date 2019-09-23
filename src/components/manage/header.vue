<template>
  <div class="header">
    <div>
      <breadcrumb class="header-bread">
        <breadcrumbitem v-for="(item,index) in name" :key="index">{{item}}</breadcrumbitem>
      </breadcrumb>
    </div>
    <div>用户</div>
  </div>
</template>

<script>
import breadcrumb from "./breadcrumb";
import breadcrumbitem from "./breadcrumbitem";
import { mapGetters } from "vuex";
export default {
  components: {
    breadcrumb,
    breadcrumbitem
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      name: "queryRouterName"
    })
  },
  mounted() {
    console.log("router", this.$route);
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.03);
  .header-bread {
    display: flex;
  }
}
</style>