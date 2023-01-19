<template>
  <Layout
    @create-new="$router.push({ name: 'new_group' })"
    wrapperClass="matches-container"
  >
    <template #title> Matches and results </template>

    <div class="matches">
      <Match />
    </div>
  </Layout>
</template>
<script>
import Match from "../components/Match.vue";
import Layout from "../Layout/Layout.vue";
export default {
  names: "Matches",

  components: {
    Match,
    Layout,
  },
};
</script>
<style lang="css" scoped>
.matches-container {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
}
.matches {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 320px) {
  .matches {
    gap: 12px;
  }
}
</style>
