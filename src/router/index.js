import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from "@/layouts/index";

import basicRoutes from "./modules/basic";
import advancedRoutes from "./modules/advanced";
import bigdataRoutes from "./modules/bigdata";
import editRoutes from "./modules/edit";
import pluginRoutes from "./modules/plugin";

export const routes = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        title: "首页",
        component: () => import("@/views/home/index"),
      },
    ],
  },
  basicRoutes,
  advancedRoutes,
  // editRoutes,
  // bigdataRoutes,
  // pluginRoutes,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
