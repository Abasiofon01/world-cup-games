<template>
  <Layout
    :showNewBtn="false"
    wrapperClass="form-wrapper"
    @go-back="$router.push({ name: 'Results' })"
  >
    <template #title> {{ headerTitle }} </template>

    <form>
      <div class="name-input-wrapper">
        <label for="result">Results</label>
        <select v-model="form.match_id">
          <option v-for="match in matchesForSelect" :key="`match_${match.id}`">
            {{ match.id }}
          </option>
        </select>
      </div>

      <div class="name-input-wrapper">
        <label for="team-select">Team 1 Score</label>
        <input v-model="form.team1_score" id="team-select" type="number" />
      </div>

      <div class="name-input-wrapper">
        <label for="team-select">Team 2 Score</label>
        <input v-model="form.team2_score" id="team-select" type="number" />
      </div>
    </form>

    <button id="btn" @click.prevent="onSubmit">{{ headerTitle }}</button>
  </Layout>
</template>

<script>
import Layout from "../Layout/Layout.vue";
import { mapActions } from "vuex";

export default {
  name: "ResultsForm",

  data() {
    return {
      form: {
        match_id: "",
        team1_score: "",
        team2_score: "",
      },
      matchesForSelect: [],
    };
  },

  components: {
    Layout,
  },

  computed: {
    isEditMode() {
      return this.$route.name === "edit_result";
    },

    headerTitle() {
      return this.isEditMode ? "Edit Result" : "Create Result";
    },
  },

  methods: {
    async onSubmit() {
      const submitFn = this.isEditMode ? this.editResult : this.createResult;

      await submitFn({ form: this.form, id: this.$route.params?.id }).then(
        (response) => {
          console.log(response);
        }
      );
    },

    ...mapActions([
      "createResult",
      "fetchResult",
      "editResult",
      "fetchAllMatches",
    ]),
  },

  async created() {
    const allMatchesPromise = this.fetchAllMatches;
    const fetchResultPromise = this.fetchResult;
    /** @typedef {[{data: Array<{id: string; name: string}>}, {name: string; id: string; group_id: string}]} ResultArray */

    await Promise.all([
      allMatchesPromise(),
      this.isEditMode ? fetchResultPromise(this.$route.params.id) : undefined,
    ]).then((/** @type {ResultArray} */ [allMatchesData, resultsData]) => {
      console.log(allMatchesData.data);
      this.matchesForSelect = allMatchesData.data.map((match) => ({
        id: match.id,
      }));

      if (this.isEditMode) {
        console.log(resultsData);
        this.form.match_id = resultsData.match_id;
        this.form.team1_score = resultsData.team1_score;
        this.form.team2_score = resultsData.team2_score;
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
