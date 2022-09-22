import Layout from "@/layouts/index";

const editRoutes = {
  path: "/edit",
  name: "Edit",
  title: "编辑表格",
  component: Layout,
  children: [
    {
      path: "basic",
      name: "EditBasic",
      title: "基础用法",
      component: () => import("@/views/edit/basic/index"),
    },
    {
      path: "status",
      name: "EditStatus",
      title: "状态记录",
      component: () => import("@/views/edit/status/index"),
    },
    {
      path: "validate",
      name: "EditValidate",
      title: "数据校验",
      component: () => import("@/views/edit/validate/index"),
    },
    {
      path: "disabled",
      name: "EditDisabled",
      title: "禁用编辑",
      component: () => import("@/views/edit/disabled/index"),
    },
    {
      path: "render",
      name: "EditRender",
      title: "渲染器",
      component: () => import("@/views/edit/render/index"),
    },
  ],
};

export default editRoutes;
