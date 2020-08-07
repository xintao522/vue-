<template>
  <el-container>
    <el-header>
      <My-Header></My-Header>
    </el-header>
    <el-container>
      <el-aside width="200px" :class="[isAside==true?'closeAside':'openAside']">
        <vue-scroll>
          <el-menu
            :default-active="activeIndex"
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
              <el-menu-item index="1-2" @click="MenuGo('Energy')">选项</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航三</span>
              </template>
              <el-menu-item index="1-3" @click="MenuGo('Caveat')">选项</el-menu-item>
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
      activeIndex: this.$route.meta.activeIndex,
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
      this.$store.commit("changeAside", this.isAside);
    }
  },
  created() {
    console.log(this.$store.state.isAside);
    if (this.$store.state.isAside===false) {
      this.isAside = false;
    } else if (this.$store.state.isAside===true){
      this.isAside = true;
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
  border-radius: 0 5px 5px 0;
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
@keyframes closeMenu {
  from{width: 200px;}
  to{width: 0px;}
}
.closeAside {
  // width: 0 !important;
  animation: closeMenu 0.35s forwards linear;
}
@keyframes openMenu {
  from{width: 0px;}
  to{width: 200px;}
}
.openAside {
  animation: openMenu 0.35s forwards linear;
}
</style>
