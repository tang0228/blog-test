<template>
  <Layout>
    <div class="main-container" v-loading="isLoading" ref="container">
      <BlogDetail :list="data" v-if="data"/>
      <BlogComment v-if="!isLoading"/>
    </div>
    
    <template #right>
      <BlogToc :toc="data.toc" v-if="data" v-loading="isLoading"/>
    </template>

  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogToc from "./components/BlogToc";
import fetchData  from "@/mixins/fetchData";
import {getBlog} from "@/api/blog";
import mainScroll from "@/mixins/mainScroll";

import BlogComment from "./components/BlogComment";

import { titleControl } from "@/utils";
export default {
  mixins: [fetchData(null), mainScroll("container")],
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    BlogComment
  },
  methods: {
    // 获取博客详细信息
    async fetchData() {
      const resp =  await getBlog(this.$route.params.id);
      if(!resp) {
        // 如果找不到文章，就跳转到404页面
        this.$router.push("/404");
        return;
      }
      titleControl.setRouterTitle(resp.title); // 设置标题
      return resp;
    }
  },
  updated() { 
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 500);
  }


}
</script>

<style scoped>

.main-container {
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
</style>