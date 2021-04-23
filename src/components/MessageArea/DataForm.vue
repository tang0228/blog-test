<template>
  <form @submit.prevent="click" class="data-form-container" ref="form" id="form-container">
    <div class="inp">
      <input
        type="text"
        placeholder="请输入昵称"
        maxlength="10"
        v-model="formData.nickname"
      />
      <span class="error">{{error.nickname}}</span>
      <span class="size">{{ formData.nickname.length }}/10</span>
    </div>
    <div class="area">
      <textarea
        maxlength="300"
        placeholder="请输入内容"
        v-model="formData.content"
        cols="30"
        rows="10"
      />
      <span class="error">{{error.content}}</span>
      <span class="size">{{ formData.content.length }}/300</span>
    </div>
    <div class="submit">
      <button :disabled="isSubmiting">{{isSubmiting ? "提交中..." : "提交"}}</button>
    </div>
  </form>
</template>

<script>

export default {
  data() {
    return {
      // 表单数据
      formData: {
        nickname: "",
        content: "",
      },
      // 错误提示信息
      error: {
        nickname: "",
        content: "",
      },
      // 是否正在提交数据
      isSubmiting: false
    };
  },
  // 向父组件抛出事件
  methods: {
    click() {
      this.error.nickname = this.formData.nickname ? "" : "请填写昵称";
      this.error.content = this.formData.content ? "" : "请填写内容";
      if(this.error.nickname || this.error.content) {
        // 如果有错误信息，禁止提交
        return;
      }
      this.isSubmiting = true; // 提交数据，让按钮变成未激活状态，防止重复提交
      this.$emit("submit", this.formData, (message) => {
        this.$showMessage({
          content: message,
          type: "success",
          duration: 2000,
          container: this.$refs.form,
          callback: () => {
            // 提示信息结束，清空输入框，并且还原按钮样式
            this.isSubmiting = false;
            this.formData.nickname = "";
            this.formData.content = ""
          }
        })
        
      })
    }
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-form-container {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  .inp {
    width: 50%;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    input {
      width: 100%;
      line-height: 30px;
      outline: none;
      border: 1px dashed @gray;
      border-radius: 5px;
      text-indent: 1em;
      &:focus {
        border: 1px dashed @primary;
      }
    }
  }
  .area {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    textarea {
      width: 100%;
      resize: none;
      outline: none;
      border: 1px dashed @gray;
      border-radius: 5px;
      box-sizing: border-box;
      padding: 5px 1em;
      &:focus {
        border: 1px dashed @primary;
      }
    }
  }
  .submit {
    width: 100%;
    button {
      display: inline-block;
      width: 112px;
      padding: 10px 30px;
      outline: none;
      border-radius: 5px;
      color: #fff;
      background-color: @primary;
      border: none;
      cursor: pointer;
      margin-top: 10px;
      &:hover {
        background-color: darken(@primary, 10%);
      }
      &:disabled {
        background-color: lighten(@primary, 10%);
        cursor: not-allowed;
      }
    }
  }
}
.error {
  display: block;
  color: @warn;
  font-size: 14px;
  margin-top: 5px;
  height: 15px;
}
.size {
  position: absolute;
  bottom: 25px;
  right: 5px;
  color: @gray;
  font-size: 14px;
}
</style>