import { createStore } from 'vuex'

import site from './modules/site'

export const Store = createStore({
  modules: {
    site,
  },
})
