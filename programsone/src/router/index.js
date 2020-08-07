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
        component: () => import(/* webpackChunkName: "Equipment" */ "../views/Equipment.vue"), //webpackChunkName: "Equipment" 是魔法注释，打包单个文件名，没有则打包为一个文件
        meta: {
          activeIndex: "1-1"
        }
      },
      {
        path: "/home/energy", //能源管理
        name: "Energy",
        component: () => import(/* webpackChunkName: "Energy" */ "../views/Energy.vue"),
        meta: {
          activeIndex: "1-2"
        }
      },
      {
        path: "/home/facility", //设施管理
        name: "Facility",
        component: () => import(/* webpackChunkName: "Facility" */ "../views/Facility.vue"),
        meta: {
          activeIndex: "1-3"
        }
      },
      {
        path: "/home/caveat", //警告管理
        name: "Caveat",
        component: () => import(/* webpackChunkName: "Caveat" */ "../views/Caveat.vue"),
        meta: {
          activeIndex: "1-4"
        }
      },
      {
        path: "/home/monitor", //室内看护
        name: "Monitor",
        component: () => import(/* webpackChunkName: "Monitor" */ "../views/Monitor.vue"),
        meta: {
          activeIndex: "1-5"
        }
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

//解决导航菜单重复点击报错的问题
const resolveOriginal = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return resolveOriginal.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
});

export default router;