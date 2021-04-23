<template>
  <ul class="contact-container">
    <li>
      <a target="_blink" :href="data.github">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{data.githubName}}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="email" />
        </div>
        <span>{{data.mail}}</span>
      </a>
    </li>
    <li>
      <a :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{data.qq}}</span>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode" alt="">
      </div>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="weChat" />
        </div>
        <span>{{data.weixin}}</span>
      </a>
      <div class="pop">
        <img :src="data.weixinQrCode" alt="">
      </div>
    </li>
    
  </ul>
    
</template>

<script>
import Icon from "@/components/Icon";
import "@/styles/global.less";
import {mapState} from "vuex";
export default {
  components: {
    Icon,
  },
  computed: mapState("setting", ["data"])
  
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  margin-top: 300px;
  width: 100%;
  list-style: none;
  // background-color: rgba(0, 0, 0, 0);
  color: @gray;
  li {
    width: 100%;
    line-height: 20px;
    position: relative;
    a {
      display: block;
      padding: 10px 0 10px 20px;
      display: flex;
      font-size: 12px;
      cursor: pointer;
      .icon {
        width: 30px;
      }
    } 
    .pop {
      width: 170px;
      height: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 37px;
      left: 20px;
      border-radius: 10px;
      transition: .8s;
      img {
        width: 150px;
        height: 0;
        transition: .8s;
      }
      &::after {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border: 8px solid #fff;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        bottom: -16px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: .5s;
      }
    } 
    &:hover .pop{
      height: 170px;
    }
    &:hover .pop img {
      height: 150px;
    }
    &:hover .pop::after {
      opacity: 1;
    }
  }
}
</style>