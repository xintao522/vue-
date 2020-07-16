import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/home/equipment', //重定向
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      auth: true
    },
    children: [{
        path: "/home/equipment", //设备管理
        name: "Equipment",
        component: () => import("../views/Equipment.vue")
      },
      {
        path: "/home/energy", //能源管理
        name: "Energy",
        component: () => import("../views/Energy.vue")
      },
      {
        path: "/home/facility", //设施管理
        name: "Facility",
        component: () => import("../views/Facility.vue")
      },
      {
        path: "/home/caveat", //警告管理
        name: "Caveat",
        component: () => import("../views/Caveat.vue")
      },
      {
        path: "/home/monitor", //室内看护
        name: "Monitor",
        component: () => import("../views/Monitor.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/notfind",
    name: "NotFind",
    component: () => import("../views/404.vue")
  },
  {
    path: "*",
    redirect: "/notFind",
    hidden: true
  }
];

const router = new VueRouter({
  routes
});

export default router;