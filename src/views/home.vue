<template>
  <div class="home">
    <div class="home-top">
      <div class="home-today"></div>
      <div class="home-today"></div>
      <div class="home-today"></div>
    </div>
    <div class="home-chart">bottom</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .home-top {
    flex: 1;
    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;
    .home-today {
      background: #fff;
      flex: 1;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
    & :not(:first-child) {
      margin-left: 10px;
    }
  }
  .home-chart {
    flex: 2;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
}
</style>