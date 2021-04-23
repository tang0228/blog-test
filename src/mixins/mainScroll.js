// 传递一个容器
export default function (ref) {
    return {
        mounted() {
            this.$refs[ref].addEventListener("scroll", this.handleScroll);// 添加滚动条滚动事件
            this.$bus.$on("toTop", this.handleToTop); // 监听top的点击事件，处理滚动条距离顶部距离
        },
        beforeDestroy() {
            this.$bus.$emit("mainScroll"); 
            this.$refs[ref].removeEventListener("scroll", this.handleScroll);// 清除滚动条滚动事件
            this.$bus.$off("toTop", this.handleToTop); // 取消监听
        },
        methods: {
            // 处理滚轮事件，并传递dom
            handleScroll() {
                this.$bus.$emit("mainScroll", this.$refs[ref]);
            },
            // 接收参数，设置滚动条距离顶部的距离
            handleToTop(scrollTop) {
                this.$refs[ref].scrollTop = scrollTop;
            }
        }
    }
}