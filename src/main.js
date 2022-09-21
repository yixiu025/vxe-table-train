import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

require("@/lib/vxe-table/index");

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
