import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
    // activeIndex: "1"
  },
  mutations: {
    increment (state) {
      state.count++
      console.log(state.count)
    }
    // changeIndex (state, index) {
    //   state.activeIndex = index
    //   console.log(state.activeIndex)
    // }
  }
})

export default store
