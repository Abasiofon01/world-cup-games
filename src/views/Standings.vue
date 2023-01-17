<template>
  <Layout wrapperClass="tables-wrapper">
    <template #title> STANDINGS </template>

    <div class="tables">
      <TableVue />
    </div>
  </Layout>
</template>

<script>
  import TableVue from "../components/Table.vue";
  import Layout from "../Layout/Layout.vue";
  export default {
    components: {
      TableVue,
      Layout
    }
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
