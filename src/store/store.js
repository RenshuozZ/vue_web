/**
 * Created by superman on 17/2/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {},
        token: null,
        title: ''
    },
    mutations: {
      "1": (state, data) => {
            localStorage.token = data;
            state.token = data;
        },
       "2": (state) => {
            localStorage.removeItem('token');
            state.token = null
        },
       "3": (state, data) => {
            state.title = data;
        }
    }
})