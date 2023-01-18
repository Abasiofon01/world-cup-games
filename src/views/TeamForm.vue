<template>
    <Layout :showNewBtn="false" wrapperClass="form-wrapper">
      <template #title> {{ headerTitle }} </template>
  
      <form>
        <div class="group-name-wrapper">
            <label for="group_name">Team Name</label>
            <input v-model="form.name" id="group_name" type="text" />
        </div>
      
        <select v-model="form.group">
          <option disabled value="">Select group</option>
          <option>a</option>
        </select>
    </form>

    <button id="btn"  @click.prevent="onSubmit">{{ headerTitle }}</button>



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
            name: "",
            group:""
          }
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
  
        ...mapActions(["fetchGroup","createTeam", "fetchTeam", "editTeam"])
      },
  
      async created() {
        if (this.isEditMode) {
          await this.fetchTeam(this.$route.params.id).then(data => {
            console.log(data);
            this.form.name = data.name;
          });
        }
      }
    };
  </script>

<style scoped>
.group-name-wrapper{
 color: white;
}

.group-name-wrapper input{
    margin-left: 10px;
    border-color: none;
    color: #830542;
}
form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

select{
    padding:2px 6px;
    border: none;
    color: #830542;
}

#btn{
  padding: 5px 20px;
  color: #830542;
  background-color: white;
  border-radius: 4px;
  display: block;
  margin-bottom: 18px;
  margin: 10px auto;
}
</style>