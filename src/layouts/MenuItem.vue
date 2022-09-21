<template>
  <el-menu-item
    v-if="!value.children || value.children.length < 2"
    :index="parentPath + rootValue(value).path"
  >
    {{ rootValue(value).title }}
  </el-menu-item>
  <el-submenu v-else :index="parentPath + value.path" :popper-append-to-body="false">
    <template slot="title">{{ value.title }}</template>
    <menu-item
      v-for="subItem in value.children"
      :key="parentPath + subItem.path"
      :value="subItem"
      :parent-path="parentPath + value.path + '/'"
    ></menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    parentPath: {
      required: true,
      type: String,
    },
    value: {
      required: true,
      type: Object,
    },
  },
  computed: {
    rootValue() {
      return value => {
        if (value.children && value.children.length === 1) {
          return value.children[0];
        } else {
          return value;
        }
      };
    },
  },
};
</script>
