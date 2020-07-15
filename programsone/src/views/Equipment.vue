<!-- 设备管理 -->
<template>
  <div>
    <div class="left-box">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        <div>
          echarts图
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        <div>
          echarts图
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        <div>
          echarts图
        </div>
      </el-card>
    </div>
    <div class="center-box">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        <div style="height:160px;">
          echarts图---中间
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        <div>
          echarts图
        </div>
      </el-card>
    </div>
    <div class="right-box">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        <div>
          echarts图
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        <div>
          echarts图
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        <div>
          echarts图
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Equipment",
  data() {
    return {};
  }
};
</script>

<style scoped>
.left-box .box-card {
  margin: 0px 20px 20px 0;
}
.center-box .box-card {
  margin: 0px 20px 20px 0;
}
.right-box .box-card {
  margin: 0 0 20px 0;
}
.left-box, .right-box {
  width: 25%;
}
.center-box {
  width: 50%;
  display: flex;
  flex-direction: row;
}
.left-box, .center-box, .right-box {
  display: inline-block;
}
</style>