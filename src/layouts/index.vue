<template>
  <div class="app-container">
    <el-menu
      class="app-menu"
      mode="horizontal"
      background-color="#282c34"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <menu-item
        v-for="item in routes"
        :key="item.path"
        :value="item"
        parent-path=""
      ></menu-item>
    </el-menu>
    <div class="app-main">
      <router-view />
    </div>
  </div>
</template>

<script>
import { routes } from "@/router/index";
import MenuItem from "./MenuItem";

export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      routes,
    };
  },
};
</script>

<style lang="scss">
.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .app-main {
    flex: 1;
  }
}
</style>
