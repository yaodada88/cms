import Vue from 'vue'
import Vuex from 'vuex'
import user from './user';
import permissions from './permissions'
import tabsview from './tabsview'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    permissions,
    tabsview
  }
})
