import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import myplugin from "./plugins/Myplugins";
Vue.use(myplugin);
Vue.config.productionTip = false;
Vue.use(ElementUI);
//拦截ajax
if (process.env.NODE_ENV === "development") {
  require("./mock/index");
}
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
