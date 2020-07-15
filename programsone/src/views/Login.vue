<template>
  <div class="login">
    <div class="bgimg"></div>
    <div class="signform">
      <p>Login to Account</p>
      <p>Place enter your email and password to aontinue</p>
      <el-form ref="form" :model="form" label-width="80px">
        <p><span>Email address:</span></p>
        <el-form-item label="">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <p><span>Password</span><span>Forget Password?</span></p>
        <el-form-item label="">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked"></el-checkbox>Remember Password
      </el-form>
       <el-button type="primary">Sign In</el-button>
    </div>
  </div>
</template>

<script>
import { Login } from '@/api/api_1';// 导入我们的api接口
export default {
  name: "Login",
  data() {
    return {
      form: {}
    };
  },
  methods: {
     // 获取数据
      Login() {
          // 调用api接口，并且提供了两个参数
          let params = this.form;
          Login(params).then(res => {
              // 获取数据成功后的其他操作
              console.log(res);
          })
      }
  }
};
</script>
<style scoped>
.bgimg {
  background: url(../assets/Pic_bg.png) no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
}

.signform {
  width: 40%;
  height: 100%;
  background-color: white;
  position: absolute;
  right: 0;
}
</style>