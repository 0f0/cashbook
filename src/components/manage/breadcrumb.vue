<template>
  <div class="breadcrumb">
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
.breadcrumb {
  font-size: 16px;
  & :not(:first-child) {
    color: #ccc;
  }
  & :not(:first-child)::before {
    content: "/";
    width: 10px;
    height: 10px;
  }
}
</style>