import { createStore } from 'vuex'

const store = createStore({
  state: {
    isMobileSidebar: false
  },
  mutations: {
    setMobileSidebar(state) {
      state.isMobileSidebar = !state.isMobileSidebar
    }
  },
  getters: {
    isMobileSidebar: (state) => {
      return state.isMobileSidebar
    }
  }
})

export default store