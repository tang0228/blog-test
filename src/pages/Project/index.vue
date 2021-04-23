<template>
  <div class="project-container" ref="container" v-loading="loading">
    <div class="project-content" v-for="pro in data" :key="pro.id">
      <a :href="pro.url ? pro.url : `javascript:alert('无法访问')`" :target="pro.url ? '_blink' : '_self'">
        <img v-lazy="pro.thumb" alt="" />
      </a>
      <div class="main">
        <h2>
          <a :href="pro.url ? pro.url : `javascript:alert('无法访问')`" :target="pro.url ? '_blink' : '_self'">{{ pro.name }}</a>
        </h2>
        <a class="github" target="_blink" :href="pro.github" v-if="pro.github"
          >github</a
        >
        <p v-for="(des, i) in pro.description" :key="i">{{ des }}</p>
      </div>
    </div>
    <Empty v-if="data.length === 0 && !loading"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll.js";
import Empty from "@/components/Empty";
export default {
  components: {
    Empty
  },
  mixins: [mainScroll("container")],
  computed: mapState("project", ["loading", "data"]),
  created() {
    this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.project-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 10px 20px;
  box-sizing: border-box;
  // perspective: 300px;
  scroll-behavior: smooth;
  .project-content {
    padding: 10px;
    display: flex;
    align-items: center;
    transform-origin: 50% 50%;
    border-radius: 10px;
    transition: 0.5s;
    background: #eee;
    transition: 0.8s;
    margin: 10px 0;
    a {
      margin-right: 20px;
      img {
        width: 180px;
        height: 180px;
        border-radius: 10px;
      }
    }
    .main {
      align-self: flex-start;
      flex: 1 1 auto;
      h2 {
        font-size: 20px;
      }
      a.github {
        display: block;
        font-size: 14px;
        color: @success;
        margin: 5px 0;
      }
      p {
        margin: 0;
        line-height: 1.5;
      }
    }
    &:hover {
      transform: scale(1.02);
    }
  }
}
</style>