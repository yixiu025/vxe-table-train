import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// ElementUI
require("@/lib/element-ui/index");

// VXETable
require("@/lib/vxe-table/index");

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
