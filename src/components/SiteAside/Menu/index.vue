<template>
  <ul class="menu-container">
      <li v-for="(item , i) in menuList" :key="i" >
          <router-link 
          :to="{name: item.name}"  
          :exact="item.exact" 
          active-class="selected"
          exact-active-class=""
          >
              <div class="icon">
                  <Icon :type="item.iconName"/>
              </div>
              <span>{{item.text}}</span>
          </router-link>
      </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    components: {
        Icon
    },
    data() {
        return {
            menuList: [
                {iconName: "home", text: "首页", name: "Home", exact: true},
                {iconName: "blog", text: "文章", name: "Blog", exact: false},
                {iconName: "about", text: "关于我", name: "About",exact: true},
                {iconName: "code", text: "项目&效果", name: "Project",exact: true},
                {iconName: "message", text: "留言板", name: "Message",exact: true},
            ],
        }
    },
    // methods: {
    //     isActive(item) {
    //         const src = item.src.toLowerCase();  // 菜单链接路径
    //         const path = location.pathname.toLowerCase(); // 浏览器地址栏路径
    //         if(item.startWith) {
    //             return path.startsWith(src);
    //         }else {
    //             return path === src;
    //         }
    //     }
    // }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
    width: 100%;
    background-color: transparent;
    list-style: none;
    margin: 0;
    padding: 0;
    color: @gray;
    font-size: 16px;
    li {
        width: 100%;
        line-height: 30px;
        margin: 5px 0;
        a {
            display: flex;
            padding: 5px 0 5px 50px;
            .icon {
                margin-right: 15px;
            }
            &.selected {
            background-color: #3f3f3f;
            }
        }
    }
}
</style>