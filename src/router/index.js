import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router"

import { titleControl } from "@/utils";

if(!window.VueRouter) {
  Vue.use(VueRouter);
}

const router = new VueRouter({
  mode: "history",
  routes
})


// 设置路由标题
router.afterEach((to) => {
  if(to.meta.title) {
    titleControl.setRouterTitle(to.meta.title);
  }
})
export default router;