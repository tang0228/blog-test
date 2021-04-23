<template>
  <div class="blog-toc-container">
      <h2>目录</h2>
      <RightList :list="tocWithSelect" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "./RightList";
import {debounce} from "@/utils";
export default {
    components: {
        RightList
    },
    props: {
        toc: {
            type: Array
        }
    },
    data() {
        return {
            activeAnchor: "",
        }
    },
    computed: {
        // 映射： 给目录数据加上 selected属性
        tocWithSelect() {
            const newList = (toc = []) => {
                return toc.map(it => ({
                    ...it,
                    selected: it.anchor === this.activeAnchor,
                    children: newList(it.children)
                }));
            }
            return newList(this.toc);
        },
        // 获取目录对应的dom元素
        getDoms() {
            const doms = [];
            const getDom = (toc) => {
                for (const it of toc) {
                    const dom = document.getElementById(it.anchor);
                    doms.push(dom);
                    if(it.children && it.children.length) {
                        getDom(it.children);
                    }
                }
            }
            getDom(this.toc);
            return doms;
        }
    },
    methods: {
        handleSelect(item) {
            location.hash = item.anchor;
        },
        // 改变activeAnchor的值
        setActive(scrollDom) {
            if(!scrollDom) {
                return;
            }
            const range = 100;  // 距离顶部的距离范围 0 - 200
            this.activeAnchor = "";
            for (const dom of this.getDoms) {
                if(!dom) {
                    continue;
                }
                const top = dom.getBoundingClientRect().top;
                if(top >= 0 && top <= range) {
                    this.activeAnchor = dom.id;
                }else if(top > range) {
                    return;                    
                }else {
                    this.activeAnchor = dom.id;
                }
            }
        }
    },
    created() {
        // 将改变anchor的方法封装为防抖函数
        this.fn = debounce(this.setActive);
        this.$bus.$on("mainScroll", this.fn);
    },
    // 销毁组件，把监听事件销毁
    destroyed() {
        this.$bus.$off("mainScroll", this.fn)
    }
}
</script>

<style scoped lang="less">
.blog-toc-container {
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