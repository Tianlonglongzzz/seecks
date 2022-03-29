import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      { path: "/", name: "longlonglong", component: () => import("../views/homes/homeTable.vue") },
      { path: "/1-1", meta: ["文章管理", "文章列表"], component: () => import("../views/homes/homeTable.vue") },
      { path: "/1-2", meta: ["文章管理", "多极路由示例"], component: () => import("../views/homes/homeluyou.vue") },
  ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path:"/login",
    name:"login",
    component:() => import("../views/LoginView.vue")
  }
];

const router = new VueRouter({
  routes,
});

export default router;
