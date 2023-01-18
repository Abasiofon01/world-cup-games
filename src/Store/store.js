import { createStore } from "vuex";
import { http } from "../services/axios";

export const store = createStore({
  //   state: {
  //     group: [],
  //   },

  //   getters: {
  //     group: state => {
  //       return state.group;
  //     },
  //   },

  //   mutations: {
  //     GET_GROUP(state, group) {
  //       state.group = group;
  //     },

  //   },

  actions: {
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
        //   commit("GET_GROUP", response.data.data);
        return response.data.data;
      });
    },

    async fetchAllGroups(ctx) {
      return http.get("groups").then(response => {
        return response.data.data;
      });
    },

    async createTeam(ctx, { form }) {
      return http.post("teams", form).then(response => {
        return response.data;
      });
    },

    async editTeam(ctx, { form, id }) {
      return http.put(`teams/${id}`, form).then(response => {
        return response.data;
      });
    },

    async fetchTeam(ctx, id) {
      return http.get(`teams/${id}`).then(response => {
        //   commit("GET_TEAM", response.data.data);
        return response.data.data;
      });
    },

    async fetchAllTeams(ctx) {
      return http.get("teams").then(response => {
        return response.data.data;
      });
    }
  }
});
