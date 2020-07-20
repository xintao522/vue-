<!-- Header头部 -->
<template>
  <div class>
    <el-row>
        <el-col :span="24" class="top">
            <div class="leftlogo">
                <img src="@/assets/logo.png">
            </div>
            <div></div>
            <div class="right">
                <span>警告</span>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            语言<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item >中文</el-dropdown-item>
                            <el-dropdown-item >English</el-dropdown-item>
                            <el-dropdown-item >日本語</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            用户名<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="Logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      //退出登录
      Logout() {
          this.$store.dispatch("changeLogin", false);
          this.$store.dispatch("changeUserInfo", null);
          sessionStorage.clear();
          this.$router.push({name: "Login"});
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.top{
    display: flex;
    justify-content: space-between;
    min-width: 500px;
    line-height: 60px;
}
.leftlogo img {
    width: 30%;
}
.right span{
    margin: 0 20px;
}
</style>