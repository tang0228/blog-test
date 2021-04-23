<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />

    <div class="loading" v-loading="isLoading">
      
    </div>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog";
import getList from "@/mixins/getList";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), getList],
  components: {
    MessageArea,
  },
  data() {
      return {
          page: 1,
          limit: 10
      }
  },
  
  methods: {
    //   data、isLoading
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
        // 提交的数据
        const resp = await postComment({
            blogId: this.$route.params.id,
            ...formData
        });
        this.data.rows.unshift(resp); // 在数组首部添加一项
        this.data.total++; // 让数据加一
        callback("评论成功"); // 告诉子组件，我已经完成了，剩下的交给你
    },
    
  },
};
</script>

<style scoped>
.blog-comment-container {
  margin: 30px 0;
}
.loading {
  height: 100px;
  position: relative;
}
</style>