<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "./RightList";
import {getBlogTypes} from "@/api/blog";
import fetchData from "@/mixins/fetchData";
export default {
  mixins: [fetchData([])],
  components: {
    RightList
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.routerInfo.limit
      };

      if(item.id === -1) {
        this.$router.push({
          name: "Blog",
          query
        })
      }else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id
          }
        })
      }
    }
  },
  computed: {
    routerInfo() {
      return {
        categoryId: +this.$route.params.categoryId || -1,
        limit: +this.$route.query.limit || 10
      }
    },
    list() {
      const totalArtical = this.data.reduce((a, b) => a + b.articleCount, 0)
      const result = [
        {name: "全部", id: -1, articleCount: totalArtical},
        ...this.data
      ];
      return result.map(it => ({
        selected: it.id === this.routerInfo.categoryId,
        ...it
      }))
    }
  }
};
</script>

<style scoped lang="less">
.blog-category-container {
  width: 300px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  position: relative;
  h2 {
    margin: 0 0 15px 0;
    font-size: 18px;
  }
  
}
</style>