import Vue from 'vue-native-core';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {
  }
})

Vue.prototype.$store = store;

export default store
