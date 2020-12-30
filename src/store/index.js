import Vuex from "vuex"
import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
    carList: []
}

Vue.use(Vuex);
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
export default store