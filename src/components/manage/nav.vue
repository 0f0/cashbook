<template>
  <div class="nav">
    <p class="nav-p">个人资金管理系统</p>
    <ul>
      <li
        v-for="item in menulist"
        :key="item.id"
        :class="['menuli',{'menuli-hover':item.select}]"
        @click="selectitem(item)"
      >
        <slot :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menulist: [
        {
          id: "home",
          text: "首页",
          path: "home",
          icon: "iconshouye",
          select: false
        },
        {
          id: "522",
          text: "记账本",
          path: "tallybook",
          icon: "iconjizhang",
          select: false
        },
        {
          id: "524",
          text: "账本模板",
          path: "template",
          icon: "iconmoban",
          select: false
        },
        {
          id: "525",
          text: "个人资产",
          path: "property",
          icon: "iconzichan",
          select: false
        },
        {
          id: "523",
          text: "账本类别",
          path: "classes",
          icon: " iconleibie",
          select: false
        },
        {
          id: "527",
          text: "统计报表",
          path: "statement",
          icon: "iconbaobiao",
          select: false
        }
      ]
    };
  },
  mounted() {
    this.addinitname();
  },

  methods: {
    addinitname() {
      this.$store.commit("ADD_ROUTER_NAME", this.$route);
      let routeArray = [];
      this.$route.matched.map(routeitem => {
        routeArray.push(routeitem.path);
      });
      let max = this.menulist.length;
      for (let i = 0; i < max; i++) {
        if (routeArray.indexOf(`/manage/${this.menulist[i].path}`) === 0) {
          this.$set(this.menulist[i], "select", true);
          continue;
        } else {
          this.$set(this.menulist[i], "select", false);
        }
      }
    },
    changeMenuList() {
      let routeArray = [];
      this.$route.matched.map(routeitem => {
        routeArray.push(routeitem.path);
      });
      let max = this.menulist.length;
      for (let i = 0; i < max; i++) {
        if (routeArray.indexOf(`/manage/${this.menulist[i].path}`) === 0) {
          this.$set(this.menulist[i], "select", true);
          continue;
        } else {
          this.$set(this.menulist[i], "select", false);
        }
      }
    },
    selectitem(item) {
      let path = `/manage/${item.path}`;
      if (this.$route.path === path) return;
      this.$router.push({ path: `/manage/${item.path}` });
    }
  },
  watch: {
    $route(newvalue, oldvalue) {
      this.$store.commit("ADD_ROUTER_NAME", newvalue);
      this.changeMenuList();
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  width: 300px;
  background: linear-gradient(#58c4b6, #3f7ac6);
  color: #fff;
  //   ##1b222e
  //   #1a2942
  .nav-p {
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 24px;
  }

  ul {
    list-style: none;
  }

  .menuli {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
  }
  .menuli-hover {
    position: relative;
    background: rgba(255, 255, 255, 0.3);
    &:before {
      content: "";
      position: absolute;
      width: 3px;
      height: 60px;
      background: #fff;
    }
  }
}
</style>