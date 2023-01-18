<template>
  <Layout
    @create-new="$router.push({ name: 'new_group' })"
    wrapperClass="team-wrapper"
  >
    <template #title> teams </template>
    <div class="teams">
      <Team />
    </div>
  </Layout>
</template>
<script>
import Team from "../components/Team.vue";
import Layout from "../Layout/Layout.vue";
export default {
  name: "Teams",

  components: {
    Team,
    Layout,
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
