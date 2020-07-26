import VueX from "vuex";
import Vue from "vue";
import base from "./modules/base";
Vue.use(VueX);

export default new VueX.Store({
  modules: {
    base,
  },
});
