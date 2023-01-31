<template lang="">
  <div class="heading-and-form-wrapper">
    <h1 class="heading">Register</h1>
    <form>
      <input
        v-model="form.username"
        type="text"
        name="user_name"
        placeholder="Username"
        required
        autocomplete="username"
      />
      <input
        v-model="form.email"
        type="email"
        name="email"
        placeholder="Email"
        required
        autocomplete="email"
      />
      <input
        v-model="form.password"
        type="password"
        name="password"
        placeholder="Password"
        required
        autocomplete="new-password"
      />

      <button @click.prevent="onSubmit">Register</button>
      <div class="text-wrapper">
        <p class="text">
          Registered already?
          <router-link class="link" :to="{ name: 'login' }">
            Login now
          </router-link>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
  import { mapActions } from "vuex";

  export default {
    data() {
      return {
        form: {
          username: "",
          email: "",
          password: ""
        }
      };
    },

    methods: {
      ...mapActions("auth", ["registerUser"]),

      async onSubmit() {
        await this.registerUser(this.form)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error.response);
          });
      }
    }
  };
</script>
<style lang="css"></style>
