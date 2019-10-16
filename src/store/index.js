import Vue from 'vue-native-core';
import Vuex from 'vuex';

import * as graphqlQueries from '../graphql';
import client from '../utils/graphqlClient';


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    loading: true,
    error: false,
    albums: [],
  },
  getters: {
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    setLoading: state => {
      return {
        ...state,
        loading: true
      }
    },
    setError: state => {
      return {
        ...state,
        loading: false,
        error: true
      }
    },
    setData: (state, payload) => state.albums = payload
  },
  actions: {
    async fetchNirvanaAlbumSingles({ commit }) {
      try {
        const query = graphqlQueries.GET_NAMES
        const data = await client.query({ query })

        console.log('data', data);

        commit('setData', data.data.lookup.artist.releaseGroups.edges)
      }  catch(e) {
          commit('setError')
        }
    }
  }
})

Vue.prototype.$store = store;

export default store
