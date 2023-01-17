<template>
  <Layout :showNewBtn="false" wrapperClass="form-wrapper">
    <template #title> {{ headerTitle }} </template>

    <form @submit.prevent="onSubmit">
      <label for="group_name">Group Name</label>
      <input v-model="form.name" id="group_name" type="text" />
    </form>
  </Layout>
</template>

<script>
  import Layout from "../Layout/Layout.vue";
  import { mapActions } from "vuex";

  export default {
    name: "GroupForm",

    data() {
      return {
        form: {
          name: ""
        }
      };
    },

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
    },

    methods: {
      async onSubmit() {
        const submitFn = this.isEditMode ? () => {} : this.createGroup;

        await submitFn(this.form).then(response => {
          console.log(response);
        });
      },

      ...mapActions(["createGroup"])
    }
  };
</script>
