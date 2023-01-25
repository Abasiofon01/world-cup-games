<template>
  <Layout
    @create-new="$router.push({ name: 'new_result' })"
    wrapperClass="results-wrapper"
    :showBackBtn="false"
  >
    <template #title> Results </template>
  </Layout>
</template>

<script>
import Layout from "../Layout/Layout.vue";
import { mapActions } from "vuex";

export default {
  name: "Results",

  components: { Layout },

  data() {
    return {
      allResults: {},
    };
  },

  methods: {
    ...mapActions(["fetchAllResults"]),
  },

  async created() {
    await this.fetchAllResults().then((allResultsData) => {
      this.allResults = allResultsData.data;
    });
  },
};
</script>

<style lang="css">
.results-wrapper {
  margin-top: 18px;
  text-align: center;
}
</style>
