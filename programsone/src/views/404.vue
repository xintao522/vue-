<template>
  <div class="container">
    <div class="wscn-http404-container">
      <img src="@/assets/404.svg" alt="404" />
      <div class="text">{{ tip }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tip: "页面跑丢了"
    };
  }
};
</script>

<style lang="scss" scoped>
.wscn-http404-container {
  background-color: #fff;
  text-align: center;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
}
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.text {
  font-size: 30px;
  font-weight: bold;
  color: #578dc9;
}
</style>
