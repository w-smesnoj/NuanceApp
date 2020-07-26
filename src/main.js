import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import store from "./store";
import App from "./App.vue";
import fa from "./components/globals/Fa.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.component("fa", fa);
Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
