import Vuex from 'vuex'
import Vue from 'vue'
import { moduleInstitution } from './modules/institution'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    institution: moduleInstitution
  }
})
