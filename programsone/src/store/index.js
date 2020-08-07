import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    isAside: false,
    userInfo: {}
  },
  mutations: {
    changeLogin(state, payload) {
      state.isLogin = payload
    },
    changeUserInfo(state, payload) {
      state.userInfo = payload
    },
    changeAside(state, payload) {
      state.isAside = payload
    }
  },
  actions: {},
  modules: {}
});
