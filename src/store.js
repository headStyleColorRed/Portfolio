import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paginaElegida: "",
    veces: 0,
  },
  mutations: {
    setpaginaElegida: (state, paginaElegida) => {
      state.paginaElegida = paginaElegida;
    },
    setVeces: (state, veces) => {
      state.veces = veces;
    },
  },
  getters: {
    paginaElegida: (state) => {
      return state.paginaElegida;
    },
    veces: (state) => {
      return state.veces;
    },
  }
})
