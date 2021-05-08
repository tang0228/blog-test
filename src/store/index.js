import {Store, install} from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";

if(!window.Vuex) {
    install(Vue);
}

export default new Store({
    modules: {
        setting,
        banner,
        about,
        project
    },
    strict: true  // 开启严格模式
})