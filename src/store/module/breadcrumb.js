const state = {
  routername: [],
  path:[]
}

const getters = {
  queryRouterName: (state) => {
    return state.routername;
  },

  queryRouterPath: (state) => { 
    return state.path;
  }
}

const mutations = {
  ADD_ROUTER_NAME: (state, routername) => {
    // state.routername.splice(0,1,routername);
    routername.matched.splice(0, 1);
    state.routername = routername.matched;
  },
  ADD_ROUTER_PATH: (state, path) => { 
    state.path = path;
  }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
