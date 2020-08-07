<template>
  <div class="tabbar-box-item" @click="tabbarToggle">
    <div v-if="isAction">
      <slot name="itemImg"></slot>
    </div>
    <div v-else>
      <slot name="item-action"></slot>
    </div>
    <div :style="actionColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  data() {
    return {
      // isAction:true
    };
  },
  props: {
    link: String,
    textColor: {
      type: String,
      default: "green",
    },
  },
  methods: {
    tabbarToggle() {
      this.$router.replace(this.link);
    },
  },
  computed: {
    isAction() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    actionColor() {
      return this.isAction ? { color: this.textColor } : {};
    },
  },
};
</script>

<style>
.tabbar-box-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbar-box-item span{
  display: inline-block;
  padding-top: 3px;
}
.tabbar-box-item span img{
  width: 25px;
  height: 25px;
}
</style>
