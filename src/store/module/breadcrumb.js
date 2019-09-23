const state = {
  routername: []
}

const getters = {
  queryRouterName: (state) => {
    return state.routername;
  }
}

const mutations = {
  ADD_ROUTER_NAME: (state, routername) => {
    console.log('rou', routername);
    state.routername = routername;
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
