import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/erji",
    name: "Erji",
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/erji.vue")
  },
  {
    path: "/liyyan",
    name: "Liyyan",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/liyyan.vue")
  },
  {
    path: "/cs",
    name: "Cs",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/cs.vue")
  },
  {
    path: "/xuexi",
    name: "Xuexi",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/xuexi.vue")
  },
  {
    path: "/as",
    name: "As",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/as.vue")
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
