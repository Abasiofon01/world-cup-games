<template>
  <nav class="default-container">
    <div class="logo-wrapper">
      <img
        src="../assets/world-cup-2022-logo.png"
        alt=" world cup logo 2022"
        class="logo"
      />
    </div>
    <span @click="showMenu" class="show-menu-btn-wrapper">
      <i :class="[open ? 'uil uil-times' : 'uil uil-bars']"></i>
    </span>
    <ul class="nav-links-wrapper" :class="[open ? 'left-0' : 'left-[-200%]']">
      <li
        class="nav-links"
        v-for="link in links"
        :key="`link_${link.name}`"
        @click="onLinkClick(link)"
      >
        <router-link v-if="link.link" :to="link.link">
          {{ link.name }}
        </router-link>
        <div v-else>
          {{ link.name }}
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
  /**
   * @typedef {{name: string; link?: string; action?: Function}} Link
   */

  import { ref, computed, reactive } from "vue";
  import { mapActions, useStore } from "vuex";
  export default {
    name: "Nav",

    setup() {
      let open = ref(false);
      const store = useStore();

      const signOut = () => store.dispatch("auth/signOut");
      const authenticated = computed(() => store.getters["auth/authenticated"]);

      /**
       * @type {Array<Link>}
       */
      const links = computed(() => [
        { name: "teams", link: "/teams" },
        { name: "groups", link: "/groups" },
        { name: "matches", link: "/matches" },
        { name: "standings", link: "/standings" },
        {
          name: "register",
          link: "/register"
        },
        authenticated.value
          ? { name: "logout", action: signOut }
          : { name: "login", link: "/login" }
      ]);

      function showMenu() {
        open.value = !open.value;
      }

      /**
       * @param {Link} link
       */
      const onLinkClick = async link => {
        if (link.action) {
          await link.action();
        }

        showMenu();
      };

      return { links, open, showMenu, onLinkClick };
    }
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
    @apply h-screen items-center flex flex-col gap-5 p-7 absolute duration-300 ease-in;
    top: 4.2rem;
    background-color: gainsboro;
    width: 100%;
    z-index: 50;
  }

  .nav-links {
    @apply font-bold;
    color: #830542;
    text-transform: uppercase;
    font-size: clamp(0.75rem, 0.6291rem + 0.7737vw, 1rem);
  }
</style>
