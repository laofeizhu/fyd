import Vue from "vue";
import Element from "element-ui";
import App from "./App.vue";
import router from "./router";
import "element-ui/lib/theme-chalk/reset.css";
import "element-ui/lib/theme-chalk/index.css";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

locale.use(lang);

Vue.use(Element), { locale };

//Create the App with the router
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
