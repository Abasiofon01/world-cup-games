<template>
  <div class="heading-and-form-wrapper">
    <h1 class="heading">Login</h1>
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
        v-model="form.password"
        type="password"
        name="password"
        placeholder="Password"
        required
        autocomplete="current-password"
      />

      <button type="submit" @click.prevent="onSubmit">Login</button>
      <div class="text-wrapper">
        <p class="text">
          Forgot Password?
          <router-link class="link" :to="{ name: 'forgot-password' }">
            Reset now
          </router-link>
        </p>
        <p class="text">
          Not Registered?
          <router-link class="link" :to="{ name: 'register' }">
            Register
          </router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: "Login",

    data() {
      return {
        form: {
          username: "",
          password: ""
        }
      };
    },

    methods: {
      onSubmit() {
        this.signIn(this.form);
        this.$router.replace({ name: "teams" });
      },

      ...mapActions({ signIn: "auth/signIn" })
    }
  };
</script>
