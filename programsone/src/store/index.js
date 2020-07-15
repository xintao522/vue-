import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: "0"
  },
  mutations: {
    changeLogin(state, payload) {
      state.isLogin = payload
    }
  },
  actions: {},
  modules: {}
});
