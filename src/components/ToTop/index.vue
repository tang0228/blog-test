<template>
  <img class="to-top-container" v-show="show" @click="toTop" :src="src">
</template>

<script>
import src from "@/assets/top.svg";
export default {
  data() {
    return {
      show: false,
      src: src
    }
  },
  created() {
    // 监听事件
    this.$bus.$on("mainScroll", this.handleScroll);
    
  },
  // 组件销毁，销毁事件
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  
  methods: {
    // 传的是scrollTop值
    handleScroll(dom) {
      if(!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop > 800;
    },
    
    toTop() {
      this.$bus.$emit("toTop", 0);
    }
  },
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
    display: block;
    width: 70px;
    height: 70px;
    position: fixed;
    right: 50px;
    bottom: 50px;
    z-index: 50;
    cursor: pointer;
    border-radius: 50%;
}

</style>