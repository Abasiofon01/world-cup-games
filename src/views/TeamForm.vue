<template>
  <Layout :showNewBtn="false" wrapperClass="form-wrapper">
    <template #title> {{ headerTitle }} </template>

    <form>
      <div class="group-name-wrapper">
        <label for="group_name">Team Name</label>
        <input v-model="form.name" id="group_name" type="text" />
      </div>

      <select v-model="form.group_id">
        <option
          v-for="group in groupsForSelect"
          :key="`group_${group.id}`"
          :value="group.id"
        >
          {{ group.name }}
        </option>
      </select>
    </form>

    <button id="btn" @click.prevent="onSubmit">{{ headerTitle }}</button>
  </Layout>
</template>

<script>
  import Layout from "../Layout/Layout.vue";
  import { mapActions } from "vuex";

  export default {
    name: "TeamForm",

    data() {
      return {
        form: {
          name: "",
          group_id: ""
        },
        groupsForSelect: []
      };
    },

    components: {
      Layout
    },

    computed: {
      isEditMode() {
        return this.$route.name === "edit_team";
      },

      headerTitle() {
        return this.isEditMode ? "Edit Team" : "Create Team";
      }
    },

    methods: {
      async onSubmit() {
        const submitFn = this.isEditMode ? this.editTeam : this.createTeam;

        await submitFn({ form: this.form, id: this.$route.params?.id }).then(
          response => {
            console.log(response);
          }
        );
      },

      ...mapActions([
        "fetchGroup",
        "createTeam",
        "fetchTeam",
        "editTeam",
        "fetchAllGroups"
      ])
    },

    async created() {
      const allGroupsPromise = this.fetchAllGroups();
      const fetchTeamPromise = this.fetchTeam(this.$route.params.id);

      /** @typedef {[{data: Array<{id: string; name: string}>}, {name: string; id: string; group_id: string}]} ResultArray */

      await Promise.all([
        allGroupsPromise,
        this.isEditMode && fetchTeamPromise
      ]).then((/** @type {ResultArray} */ [allGroupsData, teamData]) => {
        console.log(allGroupsData);
        this.groupsForSelect = allGroupsData.data.map(group => ({
          id: group.id,
          name: group.name
        }));

        if (this.isEditMode) {
          console.log(teamData);
          this.form.name = teamData.name;
          this.form.group_id = teamData.group_id;
        }
      });
    }
  };
</script>

<style scoped>
  .group-name-wrapper {
    color: white;
  }

  .group-name-wrapper input {
    margin-left: 10px;
    border-color: none;
    color: #830542;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  select {
    padding: 2px 6px;
    border: none;
    color: #830542;
  }

  #btn {
    padding: 5px 20px;
    color: #830542;
    background-color: white;
    border-radius: 4px;
    display: block;
    margin-bottom: 18px;
    margin: 10px auto;
  }
</style>
