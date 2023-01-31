<template>
  <div class="heading-and-form-wrapper">
    <h1 class="heading">Reset Password</h1>
    <form>
      <input type="password" name="password" placeholder="Password" required />
      <input type="password" name="password" placeholder="Password" required />

      <button type="submit">Reset Password</button>
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
