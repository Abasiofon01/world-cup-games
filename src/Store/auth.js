import { http } from "../services/axios";

export default {
  namespaced: true,

  state: {
    authenticated: false,
    user: null
  },

  getters: {
    authenticated(state) {
      return state.authenticated;
    },

    user(state) {
      return state.user;
    }
  },

  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value;
    },

    SET_USER(state, value) {
      state.user = value;
    }
  },

  actions: {
    async signIn({ dispatch }, credentials) {
      return http.post("login", credentials).then(response => {
        console.log(response.data);
        dispatch("user");

        return response;
      });
    },

    async signOut({ dispatch, commit }) {
      return http.post("logout").then(response => {
        dispatch("signOutUser");

        return response;
      });
    },

    signOutUser({ commit }) {
      commit("SET_AUTHENTICATED", false);
      commit("SET_USER", null);
    },

    async registerUser({ dispatch }, form) {
      return http.post("register", form).then(response => {
        dispatch("signIn", {
          username: form.username,
          password: form.password
        });

        return response;
      });
    },

    async user({ commit, dispatch }) {
      return http
        .get("user")
        .then(response => {
          commit("SET_AUTHENTICATED", true);
          commit("SET_USER", response.data);
        })
        .catch(error => {
          if (error.status === 401) {
            dispatch("signOutUser");
          } else {
            console.log(error?.response ?? error);
          }
        });
    }
  }
};
