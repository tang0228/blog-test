<template>
  <div class="pager-container" v-if="pageNum > 1">
    <a @click="pageChange(1)" :class="{disabled: current === 1}">|&lt;&lt;</a>
    <a @click="pageChange(current - 1)" :class="{disabled: current === 1}">&lt;&lt;</a>
    <a @click="pageChange(n)" v-for="(n, i) in nums" :key="i" :class="{active: n === current}">{{n}}</a>
    <a @click="pageChange(current + 1)" :class="{disabled: current === pageNum}">&gt;&gt;</a>
    <a @click="pageChange(pageNum)" :class="{disabled: current === pageNum}">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
    props: {
        // 当前页码
        current: {
            type: Number,
            default: 1
        },
        // 总数据量
        total: {
            type: Number,
            default: 0
        },
        // 每一页的数据量
        limit: {
            type: Number,
            default: 10
        },
        // 可见的页数
        visiblePage: {
            type: Number,
            default: 10
        }
    },
    computed: {
        // 页数
        pageNum() {
            return Math.ceil(this.total / this.limit);
        },
        // 最小的页码数
        pageMin() {
            let min = this.current - Math.floor(this.visiblePage / 2);
            if(min < 1) {
                min = 1;
            }
            return min;
        },
        // 最大的页码数
        pageMax() {
            let max = this.pageMin + this.visiblePage - 1;
            if(max >= this.pageNum) {
                max = this.pageNum
            }
            return max;
        },
        // 将可显示的页码放入一个数组
        nums() {
            let nums = [];
            for (let i = this.pageMin; i <= this.pageMax; i++) {
                nums.push(i);
            }
            return nums;
        }
    },
    methods: {
        // 参数是新的页码
        pageChange(page) {
            if(page < 1) {
                page = 1;
            }
            if(page > this.pageNum) {
                page = this.pageNum;
            }
            if(page === this.current) {
                return;
            }
            // 抛出事件
            // console.log("change")
            // 参数：事件名，传入的参数
            this.$emit("pageChange", page)
        }
    }
};
</script>

<style scoped lang="less">
// @import "~@/styles/global.less";
@import "~@/styles/var.less";
    .pager-container {
        display: flex;
        justify-content: center;
        margin: 20px 0;
        a {
            display: block;
            text-align: center;
            width: 30px;
            height: 30px;
            margin: 0 6px;
            color: @dark;
            border: 1px solid @gray;
            cursor: pointer;
            background-color: #fff;

            &.disabled {
                color: lighten(@gray, 10%);
            }
            &.active {
                background-color: @primary;
                color: #fff;
                cursor: default;
            }
        }
    }
</style>