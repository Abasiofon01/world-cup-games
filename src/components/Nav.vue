<template>
  <nav class="default-container">
      <div class="logo-wrapper">
        <img
          src="../assets/world-cup-2022-logo.png"
          alt=" world cup logo 2022"
          class="logo"
        />
      </div>
      <span @click="ShowMenu()" class="show-menu-btn-wrapper">
        <i :class="[open ? 'uil uil-times' : 'uil uil-bars']"></i>
      </span>
      <ul class="nav-links-wrapper" :class="[open ? 'left-0' : 'left-[-100%]']">
        <li class="nav-links" v-for="link in links" @click="ShowMenu()">
          <router-link :to="link.link">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    
  </nav>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Nav",
  data() {
    return {};
  },
  setup() {
    let open = ref(false);
    const links = [
      { name: "TEAMS", link: "/teams" },
      { name: "GROUPS", link: "/groups" },
      { name: "MATCHES", link: "/matches" },
      { name: "STANDINGS", link: "/standings" },
    ];

    function ShowMenu() {
      open.value = !open.value;
    }

    return { links, open, ShowMenu };
  },
};
</script>
<style lang="css" scoped>
nav {
  @apply flex items-center justify-between;
}

.show-menu-btn-wrapper {
  @apply cursor-pointer text-4xl;
  color: #830542;
}

.show-menu-btn-wrapper i {
  color: #830542;
}

.nav-links-wrapper {
  @apply bg-white h-screen items-center flex flex-col gap-5 p-7 md:p-0 absolute duration-300 ease-in;
  top: 4rem;
  width: 100%;
}

.nav-links {
  @apply font-bold;
  color: #830542;
  font-size: clamp(0.75rem, 0.6291rem + 0.7737vw, 1rem);
}
</style>
