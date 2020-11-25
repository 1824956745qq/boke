import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);
import axios from "axios";
Vue.prototype.$http = axios;
import "element-ui/lib/theme-chalk/index.css";
import "./assets/style/moern.css"
import "element-ui/lib/theme-chalk/display.css";
Vue.config.productionTip = false;
import router from "./router";
import store from "./store";



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
