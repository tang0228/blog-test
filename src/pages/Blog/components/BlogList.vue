<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="blog in data.rows" :key="blog.id">
        <div class="thumb" v-if="blog.thumb">
          <RouterLink :to="{
            name: 'Detail',
            params: {
              id: blog.id
            }
            }">
            <img v-lazy="blog.thumb" alt="">
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink :to="{
            name: 'Detail',
            params: {
              id: blog.id
            }
          }">
            <h2>{{blog.title}}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{format(blog.createDate)}}</span>
            <span>浏览：{{blog.scanNumber}}</span>
            <span>评论：{{blog.commentNumber}}</span>
            <RouterLink :to="{
              name: 'CategoryBlog',
              params: {
                categoryId: blog.category.id
              }
              }">
              {{blog.category.name}}
            </RouterLink>
          </div>
          <div class="desc">
            {{blog.description}}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows && data.rows.length === 0 && !isLoading"/>
    <Pager :current="getRouteInfo.page" v-if="data.rows && data.rows.length !== 0" :total="data.total" :limit="getRouteInfo.limit" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
import { getBlogs } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
import { format} from "@/utils/index";
import Pager from "@/components/Pager";
import mainScroll from "@/mixins/mainScroll";
import Empty from "@/components/Empty";
export default {
  mixins: [fetchData({}), mainScroll("container")],
  components: {
    Pager,
    Empty
  },
  methods: {
    format,
    async fetchData() {
      return await getBlogs(this.getRouteInfo.page, this.getRouteInfo.limit, this.getRouteInfo.categoryId);
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.getRouteInfo.limit
      }
      // 如果没有分类
      if(this.getRouteInfo.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query
        })
      }else {
        // 如果是分类
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.getRouteInfo.categoryId
          }
        })
      }
    },
  },
  computed: {
    getRouteInfo() {
      // $route  路由信息
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      const categoryId = +this.$route.params.categoryId || -1;
      return {
        page,
        limit,
        categoryId
      }
    }
  },
  watch: {
    // 监控路由的变化，变化了就执行该函数
    async $route() {
      this.isLoading = true;
      // 让滚动条到顶部
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  line-height: 1.7;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ul {
    li {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid @gray;
      .thumb {
        flex: 0 0 auto;
        margin-right: 15px;
        img {
          display: block;
          width: 180px;
          height: 180px;
          border-radius: 5px;
        }
      }
      .main {
        flex: 1 1 auto;
        h2 {
          margin: 0;
        }
        .aside {
          font-size: 12px;
          color: @gray;
          span {
            margin-right: 15px;
          }
        }
        .desc {
          margin: 15px 0;
          font-size: 14px;
        }
      }
    }
  }
}

</style>