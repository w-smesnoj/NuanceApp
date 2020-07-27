import VueX from 'vuex';
import Vue from 'vue';
import base from './modules/base';
import discover from './modules/discover';
Vue.use(VueX);

export default new VueX.Store({
  modules: {
    base,
    discover,
  },
});
