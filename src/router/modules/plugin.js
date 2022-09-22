import Layout from "@/layouts/index";

const pluginRoutes = {
  path: "/plugin",
  name: "Plugin",
  title: "扩展插件",
  component: Layout,
  children: [
    {
      path: "export",
      name: "PluginExport",
      title: "数据导出",
      component: () => import("@/views/plugin/export/index"),
    },
    {
      path: "drag",
      name: "PluginDrag",
      title: "拖拽",
      component: () => import("@/views/plugin/drag/index"),
    },
    {
      path: "print",
      name: "PluginPrint",
      title: "数据打印",
      component: () => import("@/views/plugin/print/index"),
    },
    {
      path: "contextmenu",
      name: "PluginContextmenu",
      title: "快捷菜单集",
      component: () => import("@/views/plugin/contextmenu/index"),
    },
  ],
};

export default pluginRoutes;
