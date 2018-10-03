import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count: 1
  },
  mutations: {
    INCREMENT (state, amount) {
      return state.count += amount
    },

    DECREMENT (state,value) {
      if(state.count > value){
        return state.count -= value
      } else{
        alert("cette operation est impossible")
      }
    }


  },
  getters: {
    COUNT(state) {
      return state.count
    }
  },
  actions: {

  }
})
