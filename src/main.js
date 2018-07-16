import Vue from "vue";
import WidgetsWrapper from "./WidgetsWrapper.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(WidgetsWrapper)
}).$mount("#widgets-wrapper");
