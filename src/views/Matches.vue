<template>
  <Layout>
    <section class="default-container">
      <div class="matches-container">
        <h1 class="page-heading">MATCHES AND RESULTS</h1>
        <div class="matches">
          <Match />
        </div>
      </div>
    </section>
  </Layout>
</template>
<script>
import Match from "../components/Match.vue";
import Layout from "../Layout/Layout.vue";
export default {
  names: "Matches",

  components: {
    Match, Layout
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
