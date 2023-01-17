import { createStore } from "vuex";
import { http } from "../services/axios";

export const store = createStore({
  state: {
    posts: [],
    teams: []
  },
  getters: {
    posts: state => {
      return state.posts;
    },
    teams: state => {
      return state.teams;
    }
  },
  mutations: {
    SET_ITEMS(state, posts) {
      state.posts = posts;
    },
    SET_TEAMS(state, teams) {
      state.teams = teams;
    }
  },
  actions: {
    async loadPosts({ commit }) {
      return http
        .get("http://jsonplaceholder.typicode.com/posts")
        .then(response => {
          commit("SET_ITEMS", response.data);
          return response.data;
        });
    },
    async createGroup(ctx, { form }) {
      return http.post("groups", form).then(response => {
        return response.data;
      });
    },
    async editGroup(ctx, { form, id }) {
      return http.put(`groups/${id}`, form).then(response => {
        return response.data;
      });
    },
    async fetchGroup(ctx, id) {
      return http.get(`groups/${id}`).then(response => {
        return response.data.data;
      });
    },
    async getTeams({ commit }) {
      try {
        const response = await http.get("teams");
        commit("SET_TEAMS", response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
});
