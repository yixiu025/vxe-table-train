import Layout from "@/layouts/index";

const basicRoutes = {
  path: "/basic",
  name: "Basic",
  title: "常见用法",
  component: Layout,
  children: [
    {
      path: "index",
      name: "BasicIndex",
      title: "基础场景",
      component: () => import("@/views/basic/index"),
    },
    {
      path: "cell-style",
      name: "BasicCellStyle",
      title: "单元格样式",
      component: () => import("@/views/basic/cell-style/index"),
    },
    {
      path: "fixed-column",
      name: "BasicFixedColumn",
      title: "固定列",
      component: () => import("@/views/basic/fixed-column/index"),
    },
    {
      path: "group-header",
      name: "BasicGroupHeader",
      title: "分组表头",
      component: () => import("@/views/basic/group-header/index"),
    },
    {
      path: "width-drag",
      name: "BasicWidthDrag",
      title: "列宽拖拽",
      component: () => import("@/views/basic/width-drag/index"),
    },
    {
      path: "expand",
      name: "BasicExpand",
      title: "展开行",
      component: () => import("@/views/basic/expand/index"),
    },
  ],
};

export default basicRoutes;
