// const listenets = {};


// export default {
//     // 监听事件
//     $on(eventName, handler) {
//         if(!listenets[eventName]) {
//             // 如果没有该事件
//             listenets[eventName] = new Set(); // 初始化一个数组，用于存放事件
//         }
//         listenets[eventName].add(handler);// 添加事件
//     },
//     // 销毁事件
//     $off(eventName, handler) {
//         if(!listenets[eventName]) {
//             // 如果没有该事件
//             return;
//         }
//         listenets[eventName].delete(handler);
//     },
//     // 触发事件
//     $emit(eventName, ...args) {
//         if(!listenets[eventName]) {
//             // 如果没有该事件
//             return;
//         }
//         // 循环执行每一个事件处理函数
//         for (const handler of listenets[eventName]) {
//             handler(...args);
//         }

//     }
// }


import Vue from "vue";

const app = new Vue({});
Vue.prototype.$bus = app;

export default app;