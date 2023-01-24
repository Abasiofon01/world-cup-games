import { createStore } from "vuex";
import { http } from "../services/axios";

export const store = createStore({
  actions: {
    async createGroup(ctx, { form }) {
      return http.post("groups", form).then((response) => {
        return response.data;
      });
    },

    async editGroup(ctx, { form, id }) {
      return http.put(`groups/${id}`, form).then((response) => {
        return response.data;
      });
    },

    async fetchGroup(ctx, id) {
      return http.get(`groups/${id}`).then((response) => {
        return response.data.data;
      });
    },

    async fetchAllGroups(ctx) {
      return http.get("groups").then((response) => {
        return response.data.data;
      });
    },

    async createTeam(ctx, { form }) {
      return http.post("teams", form).then((response) => {
        return response.data;
      });
    },

    async editTeam(ctx, { form, id }) {
      return http.put(`teams/${id}`, form).then((response) => {
        return response.data;
      });
    },

    async fetchTeam(ctx, id) {
      return http.get(`teams/${id}`).then((response) => {
        return response.data.data;
      });
    },

    async fetchAllTeams(ctx) {
      return http.get("teams").then((response) => {
        return response.data.data;
      });
    },

    async createMatch(ctx, { form }) {
      return http.post("matches", form).then((response) => {
        return response.data;
      });
    },

    async editMatch(ctx, { form, id }) {
      return http.put(`matches/${id}`, form).then((response) => {
        return response.data;
      });
    },

    async fetchMatch(ctx, id) {
      return http.get(`matches/${id}`).then((response) => {
        return response.data.data;
      });
    },

    async deleteMatch(ctx, id) {
      return http.delete(`matches/${id}`).then((response) => {
        return response.data.data;
      });
    },

    async fetchAllMatches(ctx) {
      return http.get("matches").then((response) => {
        return response.data.data;
      });
    },
  },
});
