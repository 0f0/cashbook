<template>
  <div>个人资产  <button @click="openrouter">nana</button></div>
</template>

<script>
export default {
  data() {
    return {};
  },
    methods:{
    openrouter(){
      this.$router.push({path:'/manage/home/hometable'})
    }
  }
};
</script>

<style lang="scss" scoped>
</style>