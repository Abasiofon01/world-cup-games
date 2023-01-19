<template>
  <Layout :showNewBtn="false" wrapperClass="form-wrapper">
    <template #title> {{ headerTitle }} </template>

    <form>
      <div class="name-input-wrapper">
        <label for="flag">Flag</label>
        <input v-model="form.flag" id="flag" type="text" />
      </div>

      <div class="name-input-wrapper">
        <label for="team_name">Team Name</label>
        <input v-model="form.name" id="team_name" type="text" />
      </div>

      <div class="name-input-wrapper">
        <label for="group_name">Group</label>
        <select v-model="form.group_id">
          <option
            v-for="group in groupsForSelect"
            :key="`group_${group.id}`"
            :value="group.id"
          >
            {{ group.name }}
          </option>
        </select>
      </div>
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
        group_id: "",
        flag: "",
      },
      groupsForSelect: [],
    };
  },

  components: {
    Layout,
  },

  computed: {
    isEditMode() {
      return this.$route.name === "edit_team";
    },

    headerTitle() {
      return this.isEditMode ? "Edit Team" : "Create Team";
    },
  },

  methods: {
    async onSubmit() {
      const submitFn = this.isEditMode ? this.editTeam : this.createTeam;

      await submitFn({ form: this.form, id: this.$route.params?.id }).then(
        (response) => {
          console.log(response);
        }
      );
    },

    ...mapActions([
      "fetchGroup",
      "createTeam",
      "fetchTeam",
      "editTeam",
      "fetchAllGroups",
    ]),
  },

  async created() {
    const allGroupsPromise = this.fetchAllGroups;
    const fetchTeamPromise = this.fetchTeam;
    /** @typedef {[{data: Array<{id: string; name: string}>}, {name: string; id: string; group_id: string}]} ResultArray */

    await Promise.all([
      allGroupsPromise(),
      this.isEditMode ? fetchTeamPromise(this.$route.params.id) : undefined,
    ]).then((/** @type {ResultArray} */ [allGroupsData, teamData]) => {
      console.log(allGroupsData);
      this.groupsForSelect = allGroupsData.data.map((group) => ({
        id: group.id,
        name: group.name,
      }));

      if (this.isEditMode) {
        console.log(teamData);
        this.form.flag = teamData.flag;
        this.form.name = teamData.name;
        this.form.group_id = teamData.group_id;
      }
    });
  },
};
</script>

<style lang="css" scoped>
.form-wrapper {
  margin-top: 18px;
}

.name-input-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  width: 100%;
}

.name-input-wrapper input,
select {
  margin: 5px 0 0 0;
  padding: 6px;
  border: none;
  color: #830542;
  border-radius: 4px;
}
form {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
@media (max-width: 500px) {
  form {
    flex-direction: column;
  }
}

#btn {
  padding: 5px 20px;
  color: #830542;
  background-color: gainsboro;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
}
</style>
