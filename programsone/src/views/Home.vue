<template>
  <el-container class="main" style="width:100%;height:100%;position:relative;">
    <div class="menueTab" @click="drawer = true" type="primary">></div>
    <el-drawer
      class="drawerstyle"
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      direction="ltr"
      size="10%"
    >
      <div class="toplogo">
        <img src="@/assets/logo.png" alt />
      </div>
      <el-menu>
        <el-menu-item index="1" @click="MenuGo('Equipment')">
          <i class="el-icon-menu"></i>
          <span slot="title">设备管理</span>
        </el-menu-item>
        <el-menu-item index="2" @click="MenuGo('Energy')">
          <i class="el-icon-menu"></i>
          <span slot="title">能源管理</span>
        </el-menu-item>
        <el-menu-item index="3" @click="MenuGo('Facility')">
          <i class="el-icon-document"></i>
          <span slot="title">设施管理</span>
        </el-menu-item>
        <el-menu-item index="4" @click="MenuGo('Caveat')">
          <i class="el-icon-setting"></i>
          <span slot="title">警告管理</span>
        </el-menu-item>
        <el-menu-item index="5" @click="MenuGo('Monitor')">
          <i class="el-icon-setting"></i>
          <span slot="title">室内看护</span>
        </el-menu-item>
      </el-menu>
    </el-drawer>
    <el-header style="background-color:#fff;">
      <Header></Header>
    </el-header>
    <el-main>
      <vue-scroll>
        <router-view></router-view>
      </vue-scroll>
    </el-main>
  </el-container>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header
  },
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    MenuGo(val) {
      this.$router.push({ name: val });
    }
  }
};
</script>

<style scoped>
.main {
  background-color: rgb(241, 228, 238);
}

.menueTab {
  width: 10px;
  height: 50px;
  background-color: red;
  position: absolute;
  left: 0px;
  top: 50%;
  text-align: center;
  line-height: 50px;
}
.el-drawer {
  position: relative;
}
.el-drawer .tabstyle {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.itemMenustyle {
  width: 100%;
  height: 100px;
  text-align: center;
  /* line-height: 100px; */
  background-color: rgb(231, 161, 161);
  border: red 1px solid;
}

.itemMenustyle img {
  margin-top: 10px;
}
</style>
