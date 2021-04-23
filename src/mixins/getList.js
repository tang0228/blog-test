// 提取留言板和评论列表的混合

export default {
    computed: {
        // 是否还有更多的数据
        hasMore() {
            return this.data.rows.length < this.data.total;
        }
    },
    created() {
        this.$bus.$on("mainScroll", this.handleMainScroll);
    },
    destroyed() {
        this.$bus.$off("mainScroll", this.handleMainScroll);
    },
    methods: {
        async handleMainScroll(dom) {
            if(this.isLoading || !dom) {
              // 如果正在加载 或 没有dom元素
              return;
            }
            const desc = Math.abs((dom.scrollTop + dom.clientHeight) - dom.scrollHeight);
            if(desc < 100 && this.hasMore) {
              // desc到达某个范围u 并且还有更多的数据
              this.isLoading = true;  
              this.page++; // 本质上是换页，
              const moreData = await this.fetchData(); // 获取下一页的数据
              this.data.total = moreData.total; // 将数据总数重新赋值
              this.data.rows = this.data.rows.concat(moreData.rows); // 让下一页的数据添加在数组的后面，
              this.isLoading = false;
            }
          }
    }
}

