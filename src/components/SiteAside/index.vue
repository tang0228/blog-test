<template>
  <div class="siteAside-container">
      <template v-if="data">
        <Avatar :url="data.avatar"/>
        <h1 class="title">{{data.siteTitle}}</h1>
      </template>
     
      <Menu v-if="data" />
      <Contact v-if="data" />
      <p class="footer" v-if="data">{{data.icp}}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import "@/styles/global.less";
import { mapState } from "vuex";

export default {
    components: {
        Avatar,
        Menu,
        Contact
    },
    computed: mapState("setting", ["data"])

}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.siteAside-container {
    width: 100%;
    height: 100%;
    background-color: @dark;
    overflow-x: hidden;
    overflow-y: auto;
    .avatar-container {
        width: 100%;
        height: 180px;
    }
    .title {
        font-size: 1.2em;
        color: @gray;
        text-align: center;
    }
    .contact-container {
        margin-top: 85px;
    }
    .footer {
        color: @gray;
        text-align: center;
        font-size: 12px;
        margin: 0;
    }
}
</style>