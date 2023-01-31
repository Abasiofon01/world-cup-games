<template>
  <Layout
    :showNewBtn="false"
    wrapperClass="form-wrapper"
    @go-back="$router.push({ name: 'matches' })"
  >
    <template #title> {{ headerTitle }} </template>

    <form>
      <div class="name-input-wrapper">
        <label for="group_name">Group</label>
        <select v-model="form.group_id" @change="getTeams()">
          <option
            v-for="group in groupsForSelect"
            :key="`group_${group.id}`"
            :value="group.id"
          >
            {{ group.name }}
          </option>
        </select>
      </div>

      <div class="name-input-wrapper">
        <label for="team-select">Team 1</label>
        <select v-model="form.team_ids[0]" id="team-select">
          <option
            v-for="team_1 in teams"
            :key="`team_${team_1.id}`"
            :value="team_1.id"
          >
            {{ team_1.name }}
          </option>
        </select>
      </div>

      <div class="name-input-wrapper">
        <label for="team-select">Team 2</label>
        <select v-model="form.team_ids[1]" id="team-select">
          <option
            v-for="team_2 in teams"
            :key="`team_${team_2.id}`"
            :value="team_2.id"
          >
            {{ team_2.name }}
          </option>
        </select>
      </div>

      <div class="name-input-wrapper">
        <label for="match_date">Match Date</label>
        <input v-model="form.match_date" id="match_date" type="date" />
      </div>
      <div class="name-input-wrapper">
        <label for="start_date">Start Time</label>
        <input v-model="form.start_time" id="start_date" type="datetime" />
      </div>
    </form>

    <button id="btn" @click.prevent="onSubmit">{{ headerTitle }}</button>
  </Layout>
</template>

<script>
import Layout from "../Layout/Layout.vue";
import { mapActions } from "vuex";

export default {
  name: "MatchForm",

  data() {
    return {
      form: {
        group_id: "",
        team_ids: [],
        match_date: "",
        start_time: "",
      },
      groupsForSelect: [],
      teams: [],
    };
  },

  components: {
    Layout,
  },

  computed: {
    isEditMode() {
      return this.$route.name === "edit_match";
    },

    headerTitle() {
      return this.isEditMode ? "Edit Match" : "Create Match";
    },
  },

  methods: {
    async onSubmit() {
      const submitFn = this.isEditMode ? this.editMatch : this.createMatch;

      await submitFn({ form: this.form, id: this.$route.params?.id }).then(
        (response) => {
          console.log(response);
        }
      );
    },

    getTeams() {
      this.teams = this.groupsForSelect.find(
        (group) => group.id === this.form.group_id
      ).teams;
    },

    ...mapActions(["createMatch", "fetchMatch", "editMatch", "fetchAllGroups"]),
  },

  async created() {
    const allGroupsPromise = this.fetchAllGroups;
    const fetchMatchPromise = this.fetchMatch;
    /** @typedef {[{data: Array<{id: string; name: string}>}, {name: string; id: string; group_id: string}]} ResultArray */

    await Promise.all([
      allGroupsPromise(),
      this.isEditMode ? fetchMatchPromise(this.$route.params.id) : undefined,
    ]).then((/** @type {ResultArray} */ [allGroupsData, matchData]) => {
      this.groupsForSelect = allGroupsData.data.map((group) => ({
        id: group.id,
        name: group.name,
        teams: group.teams,
      }));

      if (this.isEditMode) {
        console.log(matchData);
        this.form.group_id = matchData.group_id;
        this.form.match_date = matchData.match_date;
        this.form.start_time = matchData.start_time;
      }
    });
  },
};
</script>

<style lang="css" scoped>
.form-wrapper {
  margin-top: 18px;
}

.name-input-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  width: 100%;
}

.name-input-wrapper input,
select {
  margin: 5px 0 0 0;
  padding: 6px;
  border: none;
  color: #830542;
  border-radius: 4px;
}

form {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#btn {
  padding: 5px 20px;
  color: #830542;
  background-color: gainsboro;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
}
</style>
