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
      />
      <input
        v-model="form.email"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <input
        v-model="form.password"
        type="password"
        name="password"
        placeholder="Password"
        required
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
import axios from "axios";

export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async onSubmit() {
      let response = await axios.post(
        "http://127.0.0.1:3333/register",
        this.form
      );
      console.log(response.data.message);
    },
  },
};
</script>
<style lang="css"></style>
