import Layout from "@/layouts/index";

const advancedRoutes = {
  path: "/advanced",
  name: "Advanced",
  title: "高级用法",
  component: Layout,
  children: [
    {
      path: "sort",
      name: "AdvancedSort",
      title: "排序",
      component: () => import("@/views/advanced/sort/index"),
    },
    {
      path: "filter",
      name: "AdvancedFilter",
      title: "筛选",
      component: () => import("@/views/advanced/filter/index"),
    },
    {
      path: "merge",
      name: "AdvancedMerge",
      title: "行列合并",
      component: () => import("@/views/advanced/merge/index"),
    },
    {
      path: "visible-column",
      name: "AdvancedVisibleColumn",
      title: "显隐列",
      component: () => import("@/views/advanced/visible-column/index"),
    },
    {
      path: "contextmenu",
      name: "AdvancedContextmenu",
      title: "右键菜单",
      component: () => import("@/views/advanced/contextmenu/index"),
    },
    {
      path: "keyboard",
      name: "AdvancedKeyboard",
      title: "键盘导航",
      component: () => import("@/views/advanced/keyboard/index"),
    },
  ],
};

export default advancedRoutes;
