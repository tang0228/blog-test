<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />

    <div class="loading" v-loading="isLoading"></div>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getMessages, postMessage } from "@/api/message";
import mainScroll from "@/mixins/mainScroll";
import getList from "@/mixins/getList";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer"), getList],
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
      return await getMessages(this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
        // 提交的数据
        const resp = await postMessage({
            ...formData
        });
        this.data.rows.unshift(resp); // 在数组首部添加一项
        this.data.total++; // 让数据加一
        callback("感谢您的留言"); // 告诉子组件，我已经完成了，剩下的交给你
    },
    
  },
};
</script>

<style scoped lang="less">
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
  scroll-behavior: smooth;
}
.loading {
  height: 100px;
  position: relative;
}
</style>