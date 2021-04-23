<template>
  <div class="message-area-container">
      <DataForm v-on="this.$listeners"/>
        <h3>
            <span>{{title}}</span>
            <span>{{subTitle}}</span>
        </h3>
      <CommentList :list="list" :isListLoading="isListLoading"/>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import CommentList from "./CommentList";
export default {
    components: {
        DataForm,
        CommentList
    },
    props: {
        title: {
            type: String,
            default: ""
        },
        subTitle: {
            type: String,
            default: ""
        },
        list: {
            type: Array,
            default: () => []
        },
        isListLoading: {
            type: Boolean,
            default: false
        }
    }

}
</script>

<style scoped lang="less">
.message-area-container {
    width: 100%;
    h3{
        margin: 0;
        padding: 0 20px;
    }

}

</style>