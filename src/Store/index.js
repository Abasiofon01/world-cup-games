import { createStore } from "vuex";
import auth from "./auth";
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

    async fetchAllMatches(ctx) {
      return http.get("matches?page=1&per_page=50").then((response) => {
        return response.data.data;
      });
    },

    async createResult(ctx, { form }) {
      return http.post("results", form).then((response) => {
        return response.data;
      });
    },

    async editResult(ctx, { form, id }) {
      return http.put(`results/${id}`, form).then((response) => {
        return response.data;
      });
    },

    async fetchResult(ctx, id) {
      return http.get(`results/${id}`).then((response) => {
        return response.data.data;
      });
    },

    async fetchAllResults(ctx) {
      return http.get("results?page=1&per_page=50").then((response) => {
        return response.data.data;
      });
    },

    async register(ctx) {
      return http.post("register", { form }).then((response) => {
        return response.data.data;
      });
    },
    async login(ctx) {
      return http.post("/login", { form }).then((response) => {
        return response.data.data;
      });
    },
    async logout(ctx) {
      return http.post("logout", { form }).then((response) => {
        return response.data.data;
      });
    },
  },

  modules: {
    auth,
  },
});
