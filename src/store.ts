import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store( {
  state: {
    id: '507815173',
  },
  mutations: {
    changeMusicId: state => {
      state.id = sessionStorage.getItem( 'id' ) || '507815173';
      return state.id;
    },
  },
  actions: {

  },
} );
