<template>
  <div class="breadcrumbitem">
    <slot></slot>
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
.breadcrumbitem {
  font-size: 18px;
  font-weight: 500;
  a{
    text-decoration:none;
    color: #444;
  }
  //   font-family: "ZapfEllipt BT";
}
</style>