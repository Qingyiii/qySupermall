<template>
  <div>
    <tab-bar>
      <tab-bar-item link="/home" textColor="red">
        <span slot="itemImg">⚪</span>
        <span slot="item-action">X</span>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/classify" textColor="red">
        <span slot="itemImg">⚪</span>
        <span slot="item-action">X</span>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart" textColor="red">
        <span slot="itemImg">⚪</span>
        <span slot="item-action">X</span>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile" textColor="red">
        <span slot="itemImg">⚪</span>
        <span slot="item-action">X</span>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";

export default {
  name: "mainBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
