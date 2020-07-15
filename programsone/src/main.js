import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/util/vueScroll.js";


//导航守卫
// router.beforeEach((to,form,next)=>{
//   if(to.path=='/login'){
//     sessionStorage.removeItem("token");
//   }
//   let user = JSON.parse(sessionStorage.getItem("token"));
//   if(!user&&to.path!='/login'){
//     next({path:'/login'})
//   }else{
//     next();
//   }
// })

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
