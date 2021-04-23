import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";

import router from "./router";
import store from "@/store";

import "./mock";
import "./api/banner";



store.dispatch("setting/fetchSetting");
// 导入事件总线
import "./eventBus";
import { showMessage } from "../src/utils/index";
Vue.prototype.$showMessage = showMessage;

// 自定义指令
import vLoading from "@/directive/loading";
Vue.directive("loading", vLoading);

import vLazy from "@/directive/lazy";
Vue.directive("lazy", vLazy);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')










