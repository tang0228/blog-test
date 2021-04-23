<template>
  <div class="blog-detail-container">
    <h1>{{ list.title }}</h1>
    <div class="aside">
      <span>日期：{{ format(list.createDate) }}</span>
      <span>浏览：{{ list.scanNumber }}</span>
      <a href="#form-container">评论：{{list.commentNumber}}</a>
      <RouterLink :to="{
        name: 'CategoryBlog',
        params: {
          categoryId: list.category.id
        }
      }">{{list.category.name}}</RouterLink>
    </div>
    <div class="markdown-body" v-html="list.htmlContent"></div>
  </div>
</template>

<script>
import format from "@/utils/format";
import "@/styles/markdown.less";
import "highlight.js/styles/github.css";
export default {
  props: {
    list: Object,
  },
  methods: {
    format,
  },
};
</script>

<style scpoed lang="less">
@import "~@/styles/var.less";

.blog-detail-container {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    .aside {
        span, a{
        font-size: 14px;
        margin-right: 10px;
        color: @gray;
        }
        a:hover {
            color: @primary;
        }
    }
    .markdown-body {
        margin: 2em 0;
    }
    

}
</style>