<template>
  <i class="iconfont icon-container" :class="iconName"></i>
</template>

<script>
const IconMap = {
    home: "icon-shouye",
    search: "icon-sousuo",
    message: "icon-liuyan",
    find: "icon-faxian-",
    pullDown: "icon-arrow-down-bold",
    error: "icon-cuowu",
    empty: "icon-empty",
    pullUp: "icon-arrow-up-bold",
    weChat: "icon-weixin",
    code: "icon-Code",
    close: "icon-guanbi",
    about: "icon-guanyu",
    github: "icon-github",
    info: "icon-xinxi",
    blog: "icon-blog",
    qq: "icon-QQ",
    warn: "icon-jinggao",
    success: "icon-chenggong",
    email: "icon-youxiang"
}
export const types = Object.keys(IconMap);
export default {
    props: {
        type: {
            type: String,
            required: true
        }
    },
    computed: {
        iconName() {
            return IconMap[this.type];
        }
    }
};
</script>

<style scoped>

@import "//at.alicdn.com/t/font_2449653_8sg5zgqlyty.css";

</style>