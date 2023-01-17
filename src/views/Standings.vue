<template>
  <Layout>
    <section class="default-container">
      <div class="tables-wrapper">
        <h1 class="page-heading">STANDINGS</h1>
        <div class="tables">
          <TableVue />
        </div>
      </div>
    </section>
  </Layout>
</template>
<script>
import TableVue from "../components/Table.vue";
import Layout from "../Layout/Layout.vue";
export default {
  components: {
    TableVue,
    Layout
},
};
</script>
<style lang="css" scoped>
.tables-wrapper {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  @apply mx-auto;
}

.tables {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 320px) {
  .tables {
    gap: 12px;
  }
}
</style>
