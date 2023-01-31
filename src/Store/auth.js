import axios from "axios";

export default {
  namespaced: true,

  state: {
    authenticated: false,
    user: null,
  },

  getters: {
    authenticated(state) {
      return state.authenticated;
    },

    user(state) {
      return state.user;
    },
  },

  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value;
    },

    SET_USER(state, value) {
      state.user = value;
    },
  },

  actions: {
    async signIn({ dispatch }, credentials) {
      let response = await axios.post(
        "http://127.0.0.1:3333/login",
        credentials
      );
      console.log(response.message);
      return dispatch("user");
    },

    async signOut({ dispatch }) {
      await axios.post("/logout");

      return dispatch("user");
    },

    user({ commit }) {
      return axios
        .get("http://127.0.0.1:3333/user")
        .then((response) => {
          console.log(response);
          commit("SET_AUTHENTICATED", true);
          commit("SET_USER", response.data);
        })
        .catch(() => {
          commit("SET_AUTHENTICATED", false);
          commit("SET_USER", null);
        });
    },
  },
};
