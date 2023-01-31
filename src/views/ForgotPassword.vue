<template>
  <div class="heading-and-form-wrapper">
    <h1 class="heading">Forgot Password</h1>
    <form>
      <input type="email" name="email" placeholder="Email" required />

      <button type="submit">Submit</button>
      <div class="text-wrapper">
        <p class="text">
          Registered already?
          <router-link class="link" :to="{ name: 'login' }">
            Login now
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

<script></script>
