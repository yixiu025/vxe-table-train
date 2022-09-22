import Layout from "@/layouts/index";

const bigdataRoutes = {
  path: "/bigdata",
  name: "Bigdata",
  title: "大数据表格",
  component: Layout,
  children: [
    {
      path: "basic",
      name: "BigdataBasic",
      title: "基础用法",
      component: () => import("@/views/bigdata/basic/index"),
    },
    {
      path: "edit",
      name: "BigdataEdit",
      title: "可编辑",
      component: () => import("@/views/bigdata/edit/index"),
    },
    {
      path: "tree",
      name: "BigdataTree",
      title: "树形表格",
      component: () => import("@/views/bigdata/tree/index"),
    },
  ],
};

export default bigdataRoutes;
