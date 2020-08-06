<template>
  <el-container>
    <el-header>
      <My-Header></My-Header>
    </el-header>
    <el-container>
      <el-aside width="200px" :class="[isAside==true?'closeAside':'']">
        <vue-scroll>
          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item index="1-1" @click="MenuGo('Equipment')">选项</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航二</span>
              </template>
              <el-menu-item index="2-1" @click="MenuGo('Energy')">选项</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航三</span>
              </template>
              <el-menu-item index="3-1" @click="MenuGo('Caveat')">选项</el-menu-item>
            </el-submenu>
          </el-menu>
        </vue-scroll>
      </el-aside>
      <el-main class="main">
        <div id="leftBtnIcon" @click="SwitchMenu">
          <img :src="require(`../assets/${imgsrc}`)" id="leftimg">
        </div>
        <vue-scroll>
          <router-view />
        </vue-scroll>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import MyHeader from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    MyHeader
  },
  data() {
    return {
      isAside: false,
      imgsrc:"left.png"
    };
  },
  methods: {
    MenuGo(val) {
      this.$router.push({ name: val });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    SwitchMenu() {
      if (this.isAside) {
        this.imgsrc =  "left.png";
      } else {
        this.imgsrc = "right.png";
      }
      this.isAside = !this.isAside;
    }
  }
};
</script>

<style scoped lang="scss">
.main {
  background-color: rgb(241, 228, 238);
  position: relative;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.el-aside {
  overflow: hidden;
}
#leftBtnIcon {
  position: absolute;
  width: 10px;
  height: 50px;
  left: 0;
  top: 50%;
  // border: 1px solid red;
  background-color: red;
  color: green;
  line-height: 45px;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
  }
  img {
    transform: translate(-35%, 25%);
  }
}
.closeAside {
  width: 0 !important;
}
</style>
