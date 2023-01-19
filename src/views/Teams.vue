<template>
  <Layout
    @create-new="$router.push({ name: 'new_team' })"
    wrapperClass="team-wrapper"
    :showBackBtn="false"
  >
    <template #title> teams </template>
    <div class="teams">
      <Team :team-data="team" v-for="team in allTeams" :key="team.country" />
    </div>
  </Layout>
</template>
<script>
import Team from "../components/Team.vue";
import Layout from "../Layout/Layout.vue";
import { mapActions } from "vuex";
export default {
  name: "Teams",

  components: {
    Team,
    Layout,
  },

  data() {
    return {
      allTeams: [],
    };
  },

  methods: {
    ...mapActions(["fetchAllTeams"]),
  },

  async created() {
    await this.fetchAllTeams().then(
      (/** @type {{data: Array<{id: string; name: string}>}} */ data) => {
        this.allTeams = data.data
          .map((team) => team)
          .sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
        console.log(this.allTeams);
      }
    );
  },
};
</script>
<style lang="css" scoped>
.team-wrapper {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  @apply mx-auto;
}
.teams {
  @apply grid grid-cols-2 sm:grid-cols-3;
  column-gap: 24px;
  row-gap: 1rem;
}

@media (max-width: 375px) {
  .teams {
    @apply grid-cols-1;
    row-gap: 10px;
    column-gap: 0px;
  }
}
</style>
