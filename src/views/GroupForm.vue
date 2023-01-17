<template>
  <Layout :showNewBtn="false" wrapperClass="form-wrapper">
    <template #title> {{ headerTitle }} </template>

    forms
  </Layout>
</template>

<script>
  import Layout from "../Layout/Layout.vue";

  export default {
    name: "GroupForm",

    components: {
      Layout
    },

    computed: {
      isEditMode() {
        return this.$route.name === "edit_group";
      },

      headerTitle() {
        return this.isEditMode ? "Edit Group" : "Create Group";
      }
    }
  };
</script>
