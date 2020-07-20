import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    userInfo: {}
  },
  mutations: {
    changeLogin(state, payload) {
      state.isLogin = payload
    },
    changeUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    changeLogin(context, payload) {
      context.commit("changeLogin", payload);
    },
    changeUserInfo(context, payload) {
      context.commit("changeUserInfo", payload);
    }
  },
  modules: {}
});
