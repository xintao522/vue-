<template>
  <div class="login">
    <div class="bgimg"></div>
    <div class="signform">
      <p>Login to Account</p>
      <p>Place enter your email and password to aontinue</p>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <p><span>Email address:</span></p>
        <el-form-item label="">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <p><span>Password</span><span>Forget Password?</span></p>
        <el-form-item label="">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
       <el-button type="primary" @click="Login">Sign In</el-button>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      rules: {
        email:[
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      },
    };
  },
  methods: {
     // 获取数据
      Login() {
          // 调用api接口
          // let params = this.form;
          // api.api1API.Login(params)
          //   .then(res => {
          //   // 获取数据成功后的其他操作
          //   console.log(res);
          // })
          //   .catch(error => {
          //   console.log(error);
          // });
          let a = Math.random()
          this.$store.commit("changeLogin", true);
          this.$store.commit("changeAside", false);
          this.$store.commit("changeUserInfo", this.form);
          sessionStorage.setItem("token", JSON.stringify(a));
          let token = JSON.parse(sessionStorage.getItem("token"));
          if (token) {
            this.$router.push({name:"Equipment"})
          }
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